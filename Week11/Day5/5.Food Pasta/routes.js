const express = require('express');
const csrf = require('csurf');
const db = require('./db/models');
const router = express.Router();

const csrfProtection = csrf({cookie: true});

router.get('/', async (req, res) => {
    const pasta = await db.Pasta.findAll({
        include: [db.Noodle, db.Sauce],
        order: ["label"]
    });
  
    res.render('pasta-list', {title: "Pasta List", pasta, showPastaLink: false});
});

router.get('/pasta/create', csrfProtection, async(req, res) => {
    const noodles = await db.Noodle.findAll();
    const sauces = await db.Sauce.findAll();
    const pasta = {
        label: '',
        description: '',
        taste: '0',
        noodleId: '',
        sauceId: ''
    }
    res.render('pasta-add', {title: "Create pasta:", pasta, noodles, sauces, csrfToken: req.csrfToken()})
})


router.post('/pasta/create', csrfProtection, async(req, res) => {
    const {label, description, taste, noodleId, sauceId} = req.body;
    const pasta = {
        label, 
        description, 
        taste: parseFloat(taste), 
        noodleId: parseInt(noodleId), 
        sauceId: parseInt(sauceId)
    };

    try {
       await db.Pasta.create(pasta);
       res.redirect('/');
    } catch (err) {
        console.log(err);
    }   
  
});


router.get('/noodle/:id(\\d+)', async(req, res) => {
    const noodleId = parseInt(req.params.id);
    const pastaNoodle = await db.Noodle.findByPk(noodleId);
    const pasta = await db.Pasta.findAll({
        include: [db.Noodle, db.Sauce],
        where: {
            noodleId: [noodleId]
        }
    });
    const title = "Pasta List with noodle " + pastaNoodle.name;
    res.render('pasta-list', {title, pasta, showPastaLink: true});
   
});


router.get('/sauce/:id(\\d+)', async(req, res) => {
    const sauceId = parseInt(req.params.id);
    const pastaSauce = await db.Sauce.findByPk(sauceId);
    const pasta = await db.Pasta.findAll({
        include: [db.Noodle, db.Sauce],
        where: {
            sauceId: [sauceId]
        }
    });
    const title = "Pasta List with sauce " + pastaSauce.name;
    res.render('pasta-list', {title, pasta, showPastaLink: true});
   
});


module.exports = router;