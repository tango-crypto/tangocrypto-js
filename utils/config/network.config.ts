import * as Protocols from './mainnet-protocol.json'; // go to mainnet node (e.g. stake pool): cardano-cli query protocol-parameters --mainnet
import * as TestnetProtocols from './testnet-protocol.json'; // go to testnet node w/ user cardano (cardano-multinet-1 or submit-api-testnet):  cardano-cli query protocol-parameters --testnet-magic 1097911063

export const Mainnet = {
  protocols: Protocols,
};

export const Testnet = {
  protocols: TestnetProtocols,
};
