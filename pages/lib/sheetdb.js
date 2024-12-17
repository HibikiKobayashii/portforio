import sheetDB from 'sheetdb-node';
import React from "react";

const client = sheetDB({
  address: process.env.SHEETDB_ADDRESS,
});

export default client;
