const express = require('express');
const db = require('./data/accounts-model.js')
const server = express();

server.use(express.json());

// your code here

server.get('/accounts', (req, res) => {
    db.find()
    .then(account => {
        console.log(account)
        res.status(200).json(account)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
             error: "The account information could not be retrieved." 
        });
    });
});

server.post('/accounts', (req, res) => {
    const {name, budget} = req.body;
    const accountInfo = req.body;
    console.log(accountInfo)
    if (!name || !budget ) {
        res.status(400).json({ 
            errorMessage: "Please provide name and budget for the account." 
        })
    }
    else {
    db.add(accountInfo)
    .then(account => {
            res.status(201).json(account)
        })
    .catch(err => {
        res.status(500).json({
             error: "There was an error while saving the account to the database" 
        })
    })}
})

module.exports = server;