require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth payment update include clip off tag'; 
let testAccounts = [
"0x4d8f659cf5d45a28e1d51c1b56ba183d60f903a64336503b6e95f44f50b70a71",
"0x4a16f6466ca5eec91bbd89c248fe963453c0fa26b6f7320d5f053c934d8a1daf",
"0x972504bae2f870a56609f3d3d876c0e77f7e29cb56a0a0aa7b93063bf48f24d3",
"0x0c10aa35c3bddb7f79eaab40737ffb7c3f578524ed6fe855866174f9e5102913",
"0x6ea1cc2212b8c3b95c0533f083c9bcd572b56dd505114c374c4d8ae908e4e2cb",
"0xbce9bb66a921ad995eae7f84505040ab44518370c68f6ed2d714371c195869c8",
"0xdcd9ba2911097eee239a753b2848c358e0bc91d1e083e9001a89bdf0160e775e",
"0xdbfd1431dfa252f4a3b918fd615e701319d9f370d492d9953dfc40d316bc31a8",
"0xb6002ae39b3d3a56c79ca61b5ddbf50ff3f711cf05e8db4c5adee167f60def13",
"0x680de259bdc4e04ff49e39089b36b955e6fe1e66963f34fe0f73756630914fda"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

