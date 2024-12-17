import sheetDB from 'sheetdb-node';


const client = sheetDB({
  address: process.env.SHEETDB_ADDRESS,
});

export default client;
