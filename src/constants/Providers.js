/*
    Return provider here for local testprc
*/


var ethers = require('ethers');
var utils = ethers.utils;

var providers = ethers.providers;

provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

export default provider;