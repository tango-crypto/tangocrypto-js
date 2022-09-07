import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

import 'mocha';
import * as dotenv from "dotenv";
import { BuildTxRequest, ApiClient } from '../src';
import { TransactionApi } from '../src/clients/transactions';

dotenv.config();
describe('Transaction API endpoints', function () {
    this.timeout(0);
    let api: TransactionApi;

    before('Initializing API ...', () => {

        api = new ApiClient({
            basePath: process.env.BASE_PATH,
            apiKey: process.env.API_KEY!,
            appId: process.env.APP_ID!,
            version: process.env.VERSION
        }).transaction();
    })

    it('should build a tx', async () => {
        // arrange
        const request: BuildTxRequest = {
            "inputs": [
                {
                    "address": "addr_test1qpemm54tmynjhuyw0qhzdpnras29c3pc8gxvc4afpsa3uwglmrag6mlare663x64ugkkv8nqhqg3z6u78xa49fq6wmts55h5y9",
                    "hash": "1c080f4e768501cd4282420199a069326f39d986a07ed3ed90ab81c5a67a6b40",
                    "index": 2,
                    "value": 78496486,
                    "assets": []
                }
            ],
            "recipients": {
                "addr_test1qzy4e509u7jtztnn0p3v6rypup5w48t63pgkhtsup6anumqrejvpmpdfe7zt662gdx98f3d5a0phjrh6hvxyjhecpe3q422hpz": [
                    {
                        "policy_id": "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8",
                        "asset_name": "BuildTxTest#001",
                        "quantity": 1,
                        "metadata": {
                            "721": {
                                "cdf7a949cca0d57a27f862d525e4d4c734c1d503cbc7f04c1ac2350e": {
                                    "BuildTxTest#001": {
                                        "name": "BuildTxTest #001",
                                        "image": "ipfs://QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5",
                                        "description": "Little BuildTxTest description"
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            "minting_script": {
                "type": "all",
                "scripts": [
                    {
                        "type": "sig",
                        "keyHash": "1aabe8cdb1153e11c3363270fd11baef2ca758e56d9a0866e73f7dc5"
                    },
                    {
                        "type": "before",
                        "slot": 196536677
                    }
                ]
            },
            "change_address": "addr_test1qpemm54tmynjhuyw0qhzdpnras29c3pc8gxvc4afpsa3uwglmrag6mlare663x64ugkkv8nqhqg3z6u78xa49fq6wmts55h5y9"
        }

        const buildTx = {
            "tx_id": "b9106b1a6620d7d1cf7ef65068792e0fd09c67f4042aa3c4f965ab41a7be75b0",
            "tx": "7b22626f6479223a2261373030383138323538323031633038306634653736383530316364343238323432303139396130363933323666333964393836613037656433656439306162383163356136376136623430303230313833383235383339303038393563643165356537613462313265373337383632636430633831653036386561396437613838353136626165316330656262336536633033636339383164383561396366383462643639343836393861373463356234656263333739306566616262306334393566333830653632383231613030313530626430613135383163313865643238326265646134626563313332323663343237643437343464323634326261326365663430343437306236326165313834643861313466343237353639366336343534373835343635373337343233333033303331303138323538333930303731613830646130643461346264363732623832646461356437336664393032636338376261323538643830633232643633313935343865393865656130666463373465326366663666346436653664643937333634383232663262663961323635663237306361393264323036313538323161303031653834383061313538316335383131383066643464333031653932356331323365336631666537386365653637303336396266346363613461396666336535363464376131346135343435353335343566353434313465343734663031383235383339303037336264643261626439323732626630386537383265323638363633656331343563343433383361306363633537613930633362316533393166643866613864366666643165373561383962353565323264363631653630623831313131366239653339626235326134316137366437316130343737303533353032316130303033326436313033316130626236653936353037353832303162336666326264303630373365656665336461316331616565613361356431343262383433316433333538333764666236353133366366613132353066383530383030303961323538316331386564323832626564613462656331333232366334323764343734346432363432626132636566343034343730623632616531383464386131346634323735363936633634353437383534363537333734323333303330333130313538316335383131383066643464333031653932356331323365336631666537386365653637303336396266346363613461396666336535363464376131346135343435353335343566353434313465343734663031222c226b657973223a5b2238323538323039383230356334393365373835336464376263363934353836343661626563643937653836633934343163633261393033346165303164373135363161653138353834303631323934336436653435363366313462363364316637363462666165336230393930323338363261353163366133393835663732656530373031306363303762613361613138353063663638653962663465346463643762313331316430346432333063313832613134366265623965353732633635306637376165303066225d2c2273637269707473223a5b22383230313832383230303538316331616162653863646231313533653131633333363332373066643131626165663263613735386535366439613038363665373366376463353832303531613062623665393635222c223832303138323832303035383163386531636162633630303031653364626138636262613932326438303432383266313631636161393330313964636633386437383564333638323030353831633130653332376636653561616637363437646264306261633731633136363233383537336537303436343539643231353837393864316362225d2c226d65746164617461223a226131313930326431613137383338363336343636333736313339333433393633363336313330363433353337363133323337363633383336333236343335333233353635333436343334363333373333333436333331363433353330333336333632363333373636333033343633333136313633333233333335333036356131366634323735363936633634353437383534363537333734323333303330333161333634366536313664363537303432373536393663363435343738353436353733373432303233333033303331363536393664363136373635373833353639373036363733336132663266353136643632343636383463353233353433333634323664353435373337363137303637343434643536366434373666376134633735343535353561373736663635376136333637343835313635353534633534333533393464333536623634363537333633373236393730373436393666366537383165346336393734373436633635323034323735363936633634353437383534363537333734323036343635373336333732363937303734363936663665227d"
        }

        // act
        const response = await api.buildTransaction(request);

        // assert
        expect(response.status).equal(200);
        expect(response.data).deep.equal(buildTx);
    })

    it('should sign a tx', () => {
        // arrange
        const keys = [
			'xprv1gpn7d2h38j5ukpvmuz4mmrlgaprx6pcp53987ff8lkuqk2ztd4p2fdfpap4ev98hg3uj8kd36wzva3av8r776ke50dhhkm2ktpca83tj46xlscy6d7qga23ql4nn7z2hl9a4r3gqgpt6n7glv57nwkf80ypl5j63',
			'xprv1zpetq5ux75u7gsryanjp7f4l39znck0x45myxrkwqh2qr8cxne9ndrt2g28kaqgc3s0er09haaxflwzljcgytmhklswtas42kd0ajsvz404dkvjje5j6wh3envwd25w728vzwzv46mlf9nzz0683ncju9y04jv8j' // minting script
		];
        const encoded = '7b22626f6479223a22613730303831383235383230316330383066346537363835303163643432383234323031393961303639333236663339643938366130376564336564393061623831633561363761366234303032303138333832353833393030383935636431653565376134623132653733373836326364306338316530363865613964376138383531366261653163306562623365366330336363393831643835613963663834626436393438363938613734633562346562633337393065666162623063343935663338306536323832316130303137323639386131353831633138656432383262656461346265633133323236633432376434373434643236343262613263656634303434373062363261653138346438613234663432373536393663363435343738353436353733373432333330333033313031346634323735363936633634353437383534363537333734323333303330333230313832353833393030373161383064613064346134626436373262383264646135643733666439303263633837626132353864383063323264363331393534386539386565613066646337346532636666366634643665366464393733363438323266326266396132363566323730636139326432303631353832316130303165383438306131353831633538313138306664346433303165393235633132336533663166653738636565363730333639626634636361346139666633653536346437613134613534343535333534356635343431346534373466303238323538333930303733626464326162643932373262663038653738326532363836363365633134356334343338336130636363353761393063336231653339316664386661386436666664316537356138396235356532326436363165363062383131313136623965333962623532613431613736643731613034373463626435303231613030303334626639303331613062623665393635303735383230373630633738623362323265613063306661316565626236663731366434353232633962653765383839386237353866656165393931323964626335616530653038303030396132353831633138656432383262656461346265633133323236633432376434373434643236343262613263656634303434373062363261653138346438613234663432373536393663363435343738353436353733373432333330333033313031346634323735363936633634353437383534363537333734323333303330333230313538316335383131383066643464333031653932356331323365336631666537386365653637303336396266346363613461396666336535363464376131346135343435353335343566353434313465343734663032222c226b657973223a5b2238323538323039383230356334393365373835336464376263363934353836343661626563643937653836633934343163633261393033346165303164373135363161653138353834303237393831633163626466333439643738383437383232306337346434303438623063366536653862383138373030643835353865343537323661346662396637633166616430343762376163666530376266353261326133636633346561383234653535346232346265313161386236353066653630313735316462343039225d2c2273637269707473223a5b22383230313832383230303538316331616162653863646231313533653131633333363332373066643131626165663263613735386535366439613038363665373366376463353832303531613062623665393635222c223832303138323832303035383163386531636162633630303031653364626138636262613932326438303432383266313631636161393330313964636633386437383564333638323030353831633130653332376636653561616637363437646264306261633731633136363233383537336537303436343539643231353837393864316362225d2c226d65746164617461223a226131313930326431613137383338363336343636333736313339333433393633363336313330363433353337363133323337363633383336333236343335333233353635333436343334363333373333333436333331363433353330333336333632363333373636333033343633333136313633333233333335333036356132366634323735363936633634353437383534363537333734323333303330333161333634366536313664363537303432373536393663363435343738353436353733373432303233333033303331363536393664363136373635373833353639373036363733336132663266353136643632343636383463353233353433333634323664353435373337363137303637343434643536366434373666376134633735343535353561373736663635376136333637343835313635353534633534333533393464333536623634363537333633373236393730373436393666366537383165346336393734373436633635323034323735363936633634353437383534363537333734323036343635373336333732363937303734363936663665366634323735363936633634353437383534363537333734323333303330333261333634366536313664363537303432373536393663363435343738353436353733373432303233333033303332363536393664363136373635373833353639373036363733336132663266353136643632343636383463353233353433333634323664353435373337363137303637343434643536366434373666376134633735343535353561373736663635376136333637343835313635353534633534333533393464333536623634363537333633373236393730373436393666366537383165346336393734373436633635323034323735363936633634353437383534363537333734323036343635373336333732363937303734363936663665227d';

        const expected = '84a700818258201c080f4e768501cd4282420199a069326f39d986a07ed3ed90ab81c5a67a6b4002018382583900895cd1e5e7a4b12e737862cd0c81e068ea9d7a88516bae1c0ebb3e6c03cc981d85a9cf84bd6948698a74c5b4ebc3790efabb0c495f380e62821a00172698a1581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c6454785465737423303032018258390071a80da0d4a4bd672b82dda5d73fd902cc87ba258d80c22d6319548e98eea0fdc74e2cff6f4d6e6dd97364822f2bf9a265f270ca92d20615821a001e8480a1581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f028258390073bdd2abd9272bf08e782e268663ec145c44383a0ccc57a90c3b1e391fd8fa8d6ffd1e75a89b55e22d661e60b811116b9e39bb52a41a76d71a0474cbd5021a00034bf9031a0bb6e965075820760c78b3b22ea0c0fa1eebb6f716d4522c9be7e8898b758feae99129dbc5ae0e080009a2581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c645478546573742330303201581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f02a2008382582098205c493e7853dd7bc69458646abecd97e86c9441cc2a9034ae01d71561ae18584027981c1cbdf349d788478220c74d4048b0c6e6e8b818700d8558e45726a4fb9f7c1fad047b7acfe07bf52a2a3cf34ea824e554b24be11a8b650fe601751db409825820e46fdc0ff42bad0b7107bd89ecdd937e0297f13e8d7e68ca5d82b52343110fcd58404e430f983c80454642e628945f5207f990507b36c43f7d7e99d8a59676dbd4ed5d84dce9025421bbe4e90f46cb56533d0751fb223e9d7ad31259900194a2a70a825820f0e93930a1ea13247e73b7a332dad3b3048de90ac1147f9c4d5adb61ba46402e584064ed47947817c6f908e019530210fdb5ac46da198a0bfd1f63e6a778a536403044e4def594e9d6ee53504ad95297f5c34e0f0382115f24834ab89ca60fab050a01828201828200581c1aabe8cdb1153e11c3363270fd11baef2ca758e56d9a0866e73f7dc582051a0bb6e9658201828200581c8e1cabc60001e3dba8cbba922d804282f161caa93019dcf38d785d368200581c10e327f6e5aaf7647dbd0bac71c166238573e7046459d2158798d1cbf5a11902d1a178386364663761393439636361306435376132376638363264353235653464346337333463316435303363626337663034633161633233353065a26f4275696c6454785465737423303031a3646e616d65704275696c64547854657374202330303165696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e6f4275696c6454785465737423303032a3646e616d65704275696c64547854657374202330303265696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e';

        // act
        const signed = api.signTransaction({ keys, tx: encoded });

        // assert
        expect(signed).equal(expected);
    })

    it('should submit tx', async () => {
        // arrange
        const tx = '84a700818258201c080f4e768501cd4282420199a069326f39d986a07ed3ed90ab81c5a67a6b4002018382583900895cd1e5e7a4b12e737862cd0c81e068ea9d7a88516bae1c0ebb3e6c03cc981d85a9cf84bd6948698a74c5b4ebc3790efabb0c495f380e62821a00172698a1581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c6454785465737423303032018258390071a80da0d4a4bd672b82dda5d73fd902cc87ba258d80c22d6319548e98eea0fdc74e2cff6f4d6e6dd97364822f2bf9a265f270ca92d20615821a001e8480a1581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f028258390073bdd2abd9272bf08e782e268663ec145c44383a0ccc57a90c3b1e391fd8fa8d6ffd1e75a89b55e22d661e60b811116b9e39bb52a41a76d71a0474cbd5021a00034bf9031a0bb6e965075820760c78b3b22ea0c0fa1eebb6f716d4522c9be7e8898b758feae99129dbc5ae0e080009a2581c18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8a24f4275696c6454785465737423303031014f4275696c645478546573742330303201581c581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7a14a544553545f54414e474f02a2008382582098205c493e7853dd7bc69458646abecd97e86c9441cc2a9034ae01d71561ae18584027981c1cbdf349d788478220c74d4048b0c6e6e8b818700d8558e45726a4fb9f7c1fad047b7acfe07bf52a2a3cf34ea824e554b24be11a8b650fe601751db409825820e46fdc0ff42bad0b7107bd89ecdd937e0297f13e8d7e68ca5d82b52343110fcd58404e430f983c80454642e628945f5207f990507b36c43f7d7e99d8a59676dbd4ed5d84dce9025421bbe4e90f46cb56533d0751fb223e9d7ad31259900194a2a70a825820f0e93930a1ea13247e73b7a332dad3b3048de90ac1147f9c4d5adb61ba46402e584064ed47947817c6f908e019530210fdb5ac46da198a0bfd1f63e6a778a536403044e4def594e9d6ee53504ad95297f5c34e0f0382115f24834ab89ca60fab050a01828201828200581c1aabe8cdb1153e11c3363270fd11baef2ca758e56d9a0866e73f7dc582051a0bb6e9658201828200581c8e1cabc60001e3dba8cbba922d804282f161caa93019dcf38d785d368200581c10e327f6e5aaf7647dbd0bac71c166238573e7046459d2158798d1cbf5a11902d1a178386364663761393439636361306435376132376638363264353235653464346337333463316435303363626337663034633161633233353065a26f4275696c6454785465737423303031a3646e616d65704275696c64547854657374202330303165696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e6f4275696c6454785465737423303032a3646e616d65704275696c64547854657374202330303265696d6167657835697066733a2f2f516d6246684c52354336426d545737617067444d566d476f7a4c7545555a776f657a6367485165554c5435394d356b6465736372697074696f6e781e4c6974746c65204275696c64547854657374206465736372697074696f6e';

        const expectedTxId = 'a440d0f2c09e25f93aadea53dfe511c00b730eef4b6ed0be614f06d48c2fdaeb';

        // act
        const response = await api.submitTransaction({ tx });

        // assert
        expect(response.data.tx_id).equal(expectedTxId);
    })

    it('should get tx', async () => {
        // arrange
        const hash = 'a440d0f2c09e25f93aadea53dfe511c00b730eef4b6ed0be614f06d48c2fdaeb';
        const tx = {
            "hash": "a440d0f2c09e25f93aadea53dfe511c00b730eef4b6ed0be614f06d48c2fdaeb",
            "block_index": 1,
            "out_sum": 78280429,
            "fee": 216057,
            "deposit": 0,
            "size": 1378,
            "invalid_before": 0,
            "invalid_hereafter": 196536677,
            "valid_contract": true,
            "script_size": 0,
            "utxo_count": 4,
            "withdrawal_count": 0,
            "delegation_count": 0,
            "stake_cert_count": 0,
            "pool_update": false,
            "pool_retire": false,
            "block": {
                "hash": "5748e6e998c2b49248b971f0bb6208bb4681f0dddc46b19607762bad8a6f5b39",
                "epoch_no": 227,
                "slot_no": 68106176,
                "block_no": 3822826
            },
            "assets": [
                {
                    "policy_id": "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8",
                    "asset_name": "BuildTxTest#001",
                    "fingerprint": "asset1ugyv8dshc5x9cclgamemq7z8dqvkure4knzfvl",
                    "quantity": 1,
                    "mint_or_burn_quantity": 1
                },
                {
                    "policy_id": "18ed282beda4bec13226c427d4744d2642ba2cef404470b62ae184d8",
                    "asset_name": "BuildTxTest#002",
                    "fingerprint": "asset1s3s6n7rs2y35txt09a02nnpd9f6lqcl6s5tral",
                    "quantity": 1,
                    "mint_or_burn_quantity": 1
                },
                {
                    "policy_id": "581180fd4d301e925c123e3f1fe78cee670369bf4cca4a9ff3e564d7",
                    "asset_name": "TEST_TANGO",
                    "fingerprint": "asset13nkuheamggvmq0a6msnvtdgruuxajll5v9xksc",
                    "quantity": 2,
                    "mint_or_burn_quantity": 2
                }
            ]
        }

        // act
        const response = await api.getTransaction(hash);

        // assert
        expect(response.data).deep.equal(tx);
    })

    it('should get tx metadata', async () => {
        // arrange
        const hash = 'f777bd82c752bcb924548fa4a6e30bcbc25424f611a4a63289ee03d00a951e7d';
        const metadata = [
            {
                "label": "721",
                "json": {
                    "cdf7a949cca0d57a27f862d525e4d4c734c1d503cbc7f04c1ac2350e": {
                        "BuildTxTest#001": {
                            "name": "BuildTxTest #001",
                            "image": "ipfs://QmbFhLR5C6BmTW7apgDMVmGozLuEUZwoezcgHQeULT59M5",
                            "description": "Little BuildTxTest description"
                        }
                    }
                }
            }
        ]

        // act
        const response = await api.getTransactionMetadata(hash);

        // assert
        expect(response.data.data).deep.equal(metadata);
    })

    it('should list tx utxos', async () => {
        // arrange
        const hash = '122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd';
        const utxos = {
            "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
            "inputs": [
                {
                    "address": "addr_test1qzmnd26rem246tykw4f7attzr5f6qnf25kp3mdgzany4vegm47veu20yllnu8a0t26ppr6hunpxa03jyvmdhanpym9vq6eqmp0",
                    "hash": "a143357d16db17f2a9d35d0ea0e39806a855e8f06649d2982934aebda30bba84",
                    "index": 4,
                    "value": 2965452,
                    "smart_contract": false,
                    "assets": [
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wUSDT",
                            "fingerprint": "asset1majzcngy2svamh5zns70xeetwkg2vx5nxg09nv",
                            "quantity": 899000
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"zv�\r�`���P����0�㺦�PL�",
                            "fingerprint": "asset109f4hv4sk8aaw2qeaspquet8hez8jqmczs5uaz",
                            "quantity": 7069067
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"�\"��,S^q?��lH��8P�GJ\t�'����s�=",
                            "fingerprint": "asset1y4292t9n698eu3eas2sl07c0a7636uc3n3qfvr",
                            "quantity": 785749
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"�!�͞h Vya�ٻ����A+Dy�cΑZ��",
                            "fingerprint": "asset1x2trcynescvqwutmdnta4qc9c2yrea4g3tj7nr",
                            "quantity": 3296181
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wDOGE",
                            "fingerprint": "asset1v5g4zdz9s5ezkvdfd29yyetfpta8gx93ae6nqu",
                            "quantity": 5300000
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"��R\"}^z��H;&t'�[�b�)��^���Y�@2",
                            "fingerprint": "asset1jxfj2x02fnklr8lf0gc523epewafgkl9am2wrm",
                            "quantity": 3160119
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wBTC",
                            "fingerprint": "asset173xsaag0t8aeemrujp2lg3t296xqn69ehynq4d",
                            "quantity": 10000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wDOT",
                            "fingerprint": "asset1r9t3dp2dvp2erfur645atkzq883dr25aaja66v",
                            "quantity": 38610
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"{�N����\t�ֳ1 ����7U�\t�\"!��#�",
                            "fingerprint": "asset1acensvu6258pdzqcxjwqh0d3v52kjgjc5tq58x",
                            "quantity": 7069067
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wLUNA",
                            "fingerprint": "asset1v9wx950p65dde73kj6fs0lpd6pzc28crzv0zpe",
                            "quantity": 18000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wBNB",
                            "fingerprint": "asset1pssjpqkpm8y48x3q68sekrhl2kyxnwpgsn7xe4",
                            "quantity": 88
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wETH",
                            "fingerprint": "asset1yuaxuqd8942yd366flvl0nju22exezfzsp052n",
                            "quantity": 260
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wXRP",
                            "fingerprint": "asset1lurw6489320vegzs73e0tzljnd9jv5lfdqjn74",
                            "quantity": 1796120
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wUSDC",
                            "fingerprint": "asset1n3weea8202dpev06tshdvhe9xd6f9jcqldpc2q",
                            "quantity": 889000
                        }
                    ]
                },
                {
                    "address": "addr_test1qzmnd26rem246tykw4f7attzr5f6qnf25kp3mdgzany4vegm47veu20yllnu8a0t26ppr6hunpxa03jyvmdhanpym9vq6eqmp0",
                    "hash": "a143357d16db17f2a9d35d0ea0e39806a855e8f06649d2982934aebda30bba84",
                    "index": 3,
                    "value": 459949535,
                    "smart_contract": false,
                    "assets": []
                },
                {
                    "address": "addr_test1wrhtrx98lc6dc2zk0uuv0hjjcrffq5fvllq9k7u6cajfvhq0rqywz",
                    "hash": "7a052450386f97a1f208144de3f8ca158f93ad526ddfb1da9cf9d39e5e3aa7ab",
                    "index": 1,
                    "value": 1689618,
                    "smart_contract": true,
                    "assets": [
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "F",
                            "fingerprint": "asset1r5mrxn5377473gus6jzq3n947j33flenl4qptm",
                            "quantity": 1
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "address": "addr_test1wpzjtlyp6v4qx6gzjm4zc7lsdufw597507y060qhk84vpjsjd625n",
                    "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
                    "index": 2,
                    "value": 13000000,
                    "smart_contract": true,
                    "assets": [
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wBNB",
                            "fingerprint": "asset1pssjpqkpm8y48x3q68sekrhl2kyxnwpgsn7xe4",
                            "quantity": 88
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"/��`�.k�����D\nE�A��E5���7�",
                            "fingerprint": "asset1s3txp9ah8vpswdn4d9afyefxzq69vfwqd0thgv",
                            "quantity": 9223372036854747000
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "L",
                            "fingerprint": "asset1gts3l2zwux060ze7mr6v8vxaal8hkntnkzmrh4",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "address": "addr_test1qzmnd26rem246tykw4f7attzr5f6qnf25kp3mdgzany4vegm47veu20yllnu8a0t26ppr6hunpxa03jyvmdhanpym9vq6eqmp0",
                    "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
                    "index": 4,
                    "value": 3103380,
                    "smart_contract": false,
                    "assets": [
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"zv�\r�`���P����0�㺦�PL�",
                            "fingerprint": "asset109f4hv4sk8aaw2qeaspquet8hez8jqmczs5uaz",
                            "quantity": 7069067
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"/��`�.k�����D\nE�A��E5���7�",
                            "fingerprint": "asset1s3txp9ah8vpswdn4d9afyefxzq69vfwqd0thgv",
                            "quantity": 27664
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wETH",
                            "fingerprint": "asset1yuaxuqd8942yd366flvl0nju22exezfzsp052n",
                            "quantity": 260
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"�!�͞h Vya�ٻ����A+Dy�cΑZ��",
                            "fingerprint": "asset1x2trcynescvqwutmdnta4qc9c2yrea4g3tj7nr",
                            "quantity": 3296181
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wLUNA",
                            "fingerprint": "asset1v9wx950p65dde73kj6fs0lpd6pzc28crzv0zpe",
                            "quantity": 18000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wUSDT",
                            "fingerprint": "asset1majzcngy2svamh5zns70xeetwkg2vx5nxg09nv",
                            "quantity": 899000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wDOT",
                            "fingerprint": "asset1r9t3dp2dvp2erfur645atkzq883dr25aaja66v",
                            "quantity": 38610
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"��R\"}^z��H;&t'�[�b�)��^���Y�@2",
                            "fingerprint": "asset1jxfj2x02fnklr8lf0gc523epewafgkl9am2wrm",
                            "quantity": 3160119
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"�\"��,S^q?��lH��8P�GJ\t�'����s�=",
                            "fingerprint": "asset1y4292t9n698eu3eas2sl07c0a7636uc3n3qfvr",
                            "quantity": 785749
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wUSDC",
                            "fingerprint": "asset1n3weea8202dpev06tshdvhe9xd6f9jcqldpc2q",
                            "quantity": 889000
                        },
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name":"{�N����\t�ֳ1 ����7U�\t�\"!��#�",
                            "fingerprint": "asset1acensvu6258pdzqcxjwqh0d3v52kjgjc5tq58x",
                            "quantity": 7069067
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wBTC",
                            "fingerprint": "asset173xsaag0t8aeemrujp2lg3t296xqn69ehynq4d",
                            "quantity": 10000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wDOGE",
                            "fingerprint": "asset1v5g4zdz9s5ezkvdfd29yyetfpta8gx93ae6nqu",
                            "quantity": 5300000
                        },
                        {
                            "policy_id": "648823ffdad1610b4162f4dbc87bd47f6f9cf45d772ddef661eff198",
                            "asset_name": "wXRP",
                            "fingerprint": "asset1lurw6489320vegzs73e0tzljnd9jv5lfdqjn74",
                            "quantity": 1796120
                        }
                    ]
                },
                {
                    "address": "addr_test1wrhtrx98lc6dc2zk0uuv0hjjcrffq5fvllq9k7u6cajfvhq0rqywz",
                    "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
                    "index": 1,
                    "value": 1689618,
                    "smart_contract": true,
                    "assets": [
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "F",
                            "fingerprint": "asset1r5mrxn5377473gus6jzq3n947j33flenl4qptm",
                            "quantity": 1
                        }
                    ]
                },
                {
                    "address": "addr_test1qzmnd26rem246tykw4f7attzr5f6qnf25kp3mdgzany4vegm47veu20yllnu8a0t26ppr6hunpxa03jyvmdhanpym9vq6eqmp0",
                    "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
                    "index": 3,
                    "value": 443498138,
                    "smart_contract": false,
                    "assets": []
                },
                {
                    "address": "addr_test1wrhtrx98lc6dc2zk0uuv0hjjcrffq5fvllq9k7u6cajfvhq0rqywz",
                    "hash": "122128d2f72f77ab6bf8fb3f95b13f820b7c08a7ba2cab9c1d4ae5422f97d3fd",
                    "index": 0,
                    "value": 1689618,
                    "smart_contract": true,
                    "assets": [
                        {
                            "policy_id": "406c221cad25b6832609bc24f649840763fae659cafa3472f26122ab",
                            "asset_name": "F",
                            "fingerprint": "asset1r5mrxn5377473gus6jzq3n947j33flenl4qptm",
                            "quantity": 1
                        }
                    ]
                }
            ]
        }

        // act
        const response = await api.listTransactionUtxos(hash);

        // assert
        expect(response.data).deep.equal(utxos);
    })
})