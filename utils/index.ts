export const Utils = {

    isValid(validation, model) {
        let valid = true;
        let errorMessages = [];
        for(let field in validation) {
            let validators = validation[field];
            let value = model[field];
            for(let validator of validators) {
                let evaluation = validator(value);
                valid = valid && evaluation.isValid;
                if (!evaluation.isValid) {
                    errorMessages.push(`'${field}' ${evaluation.message}`);
                } 
            }
        }

        return {isValid: valid, errorMessages};
    },

    dynamoDBInputFormat: function(value: any): any {
        let result = {};
        if(typeof(value) === 'string') {
            result = {S: value};
        } else if (typeof(value) === 'number') {
            result = {N: value};
        } else if(Buffer.isBuffer(value)) {
            result = {B: value.toString()};
        } else if (typeof(value) === 'boolean') {
            result = {BOOL: value};
        } else if(Array.isArray(value)) {
            if (value.length > 0) {
                // is String set?
                const duplicates = hasDuplicates(value.map(b => b.toString()));
                let isSS = value.every(v => typeof(v) === 'string') && !duplicates;
                if(isSS) {
                    result = {SS: value};
                } else {
                    // is Number set?
                    let isNS = value.every(v => typeof(v) === 'number') && !duplicates;
                    if (isNS) {
                        result = {NS: value};
                    } else {
                        // is Binary set?
                        let isBS = value.every(v => Buffer.isBuffer(v)) && !duplicates;
                        if (isBS) {
                            result = {BS: value.map(v => v.toString())};
                        } else { // list of map
                            result = {L: value.map(v => ({M: this.dynamoDBInputFormat(v)}))};
                        }
                    }
                }
            } else {
                result = {L: []}
            }
        } else if (typeof(value) === 'object') {
            if (value) { // map
                result = Object.keys(value).reduce((acc, k) => {
                    acc[k] = this.dynamoDBInputFormat(value[k]);
                    return acc;
                    }, {});
            } else { // null value
                result = {NULL: true};
            }
        }
        return result;
    },

    dynanoDBOutputFormat: function(item: any): any {
        let result = {};
        for (const key in item) {
            const value = item[key];
            if (value['S']) {
                result[key] = value['S'];
            } else if (value['N']) {
                result[key] = value['N'];
            } else if (value['B']) {
                result[key] = Buffer.from(value['B']);
            } else if (value['BOOL'] != undefined) {
                result[key] = value['BOOL'];
            } else if (value['SS']){ // String Set
                result[key] = value['SS'];
            } else if (value['NS']) { // Number Ser
                result[key] = value['NS'];
            } else if (value['BS']) { // Number Set
                result[key] = value['BS'].map(v => Buffer.from(v));
            } else if (value['L']){
                result[key] = value['L'].map(v => this.dynanoDBOutputFormat(v['M']));
            } else if (value['M']) {
                result[key] = this.dynanoDBOutputFormat(value['M']);
            }
        }
        return result;	
    },

    dynamoDBUpdateExpression: function(item: any): { UpdateExpression: string, ExpressionAttributeValues: any, ExpressionAttributeNames: any } {
        let fields = Object.keys(item).filter(field => item[field] != undefined && field != 'network' && field != "type");
        let updateExpression: string[] = [];
        let expressionAttributeValues: any = {};
        let expressionAttributeNames: any = {};
        for (const field of fields) {
            const value = item[field];
            updateExpression.push(`${EXPRESSION_ATTRIBUTE_NAMES[field] || field} = :${field}`);
            const attibuteValue = ATTRIBUTE_VALUE_MAPPING[typeof(value)] ? { [ATTRIBUTE_VALUE_MAPPING[typeof(value)]]: value } : Utils.dynamoDBInputFormat(value);
            expressionAttributeValues[`:${field}`] = attibuteValue;
            if (EXPRESSION_ATTRIBUTE_NAMES[field]) {
                expressionAttributeNames[EXPRESSION_ATTRIBUTE_NAMES[field]] = field;
            }
        }
        return {
            UpdateExpression: "SET " + updateExpression.join(', '), 
            ExpressionAttributeValues: expressionAttributeValues, 
            ExpressionAttributeNames: Object.keys(expressionAttributeNames).length > 0 ? expressionAttributeNames : undefined
        };
    },
}

function hasDuplicates(arr: any[]) {
	let seen = {};
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (seen[item]) return true;
		seen[item] = true;
	}
	return false;
}

const EXPRESSION_ATTRIBUTE_NAMES = {
    'name': '#name',
    'rules': '#rules',
}

const ATTRIBUTE_VALUE_MAPPING = {
    'string': 'S',
    'number': 'N',
}