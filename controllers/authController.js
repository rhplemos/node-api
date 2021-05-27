const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/register' , async(req, res) => { //prefixando uma rota
    try {
        const user = await User.create(req.body);

        return res.send({ user });      
     }  catch (err) {
        return res.status(400).send({error: 'Registration failed'});        
    }
});

module.exports = app => app.use('/auth', router); //prefixando uma rota