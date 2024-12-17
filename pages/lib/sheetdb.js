const { sheetDB } = require('sheetdb-node');

const client = sheetDB({
  address: process.env.SHEETDB_ADDRESS,
});

module.exports = client;
