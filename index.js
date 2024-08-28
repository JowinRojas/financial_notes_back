const express = require('express');
const app = express();
const port = 3000;

const { MongoClient } = require("mongose");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://dev_alnago:mjFtLHR4xQnz1yAd@cluster0.nxvnstm.mongodb.net/";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('financial_notes');
    const users = database.collection('users');
    // const query = { name: 'jowin' };
    // const user = await users.findOne(query);
    // console.log(user.email);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);