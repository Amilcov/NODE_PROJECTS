const express = require('express');
const csrf = require('csurf');
const db = require('./db/models');
const router = express.Router();


const csrfProtection = csrf({cookie: true});

router.get('/', async (req, res) => {
    const people = await db.Person.findAll({});
    res.render('person-list', {people});
})


router.get('/new-person', csrfProtection, async (req, res) => {
    const hairColors = await db.HairColor.findAll({}); 
    const person = {
        firstName: '',
        lastName: '',
        age: '',
        biography: '',
        colorHairId:'',
        csrfToken: req.csrfToken()
    }
    
    res.render('person-add', {person, hairColors});
});

router.post('/new-person', csrfProtection, async (req,res) => {
    const { firstName, lastName, age, biography, hairColorId } = req.body;
    const person = await db.Person.build({
        firstName, 
        lastName, 
        age, 
        biography, 
        hairColorId
    })
    await person.save();
    res.redirect('/');
});





module.exports = router