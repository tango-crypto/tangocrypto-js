import { Datum } from "./datum";
import { Redeemer } from "./redeemer";

export interface Script {
    type: string;
    hash: string;
    json?: any;
    code?: string;
    serialised_size?: number;
    datum?: Datum;
    redeemer?: Redeemer;
}