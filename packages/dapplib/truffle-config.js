require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain snow harvest only forget sleep'; 
let testAccounts = [
"0x421eba46be69e9e8f4e921ea6f3fabe857740735fcf9ed23d66c4a5c1b012256",
"0x6993867c86c1b405c162962a2a5ac060cdaa94ddb0f367e2499633ab961c832d",
"0xa2ac5909510daa30563644a5b4c675ff4d5de7d51dde5dc8aaf6b96cb0c3a6d3",
"0xfd051ef1d7a33920d2e16895702957400d22235d5b0d04d79dc8aa861e4f2b1a",
"0x39dbe80e3e562895de3f60e2fe708e25ea307fabb50a35f3039430c7d7ec01e5",
"0xbb51476854a16359aed9a2bbb8bfd4086813a35671344c09d31399b2a9ba746a",
"0x849fa82dfd42d6ab0ce630a82f37e4ce3d5ebe4a823f84616f8c52315e3f43c3",
"0xb82728d9a19aadc403113433864628d075691787d57c1d63c59589e059522ac9",
"0x632c62daaa0d6467f2c6ddd932726b0dc22b9a1e9eea449bcd477ba071ce2547",
"0xfa3d7c5637c4788be5309bc806ca35ddb33d72858c424369559e19d5a77cf92f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


