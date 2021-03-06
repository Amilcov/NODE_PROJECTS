const express = require('express');
const  { environment }  = require('./config/index');
const { check, validationResult } = require('express-validator');
const db = require('./db/models');
const csrf = require('csurf');


const router = express.Router();
const csrfProtection = csrf({cookie: true});
const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);


router.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

if ( environment !== 'production') {
    router.get('/error-test', (req, res) => {
       throw new Error('This is a test error.');
    }
    );
}

router.get('/parks', asyncHandler(async (req, res, next)=> {
   const parks = await db.Park.findAll({
    order: [['parkName', 'ASC']]
   });

   res.render('park-list', {title: 'Parks', parks});
}));

router.get('/park/:id(\\d+)', asyncHandler(async(req, res, next)=>{
    const parkId = parseInt(req.params.id, 10);
    const park = await db.Park.findByPk(parkId);
    res.render('park-detail',{ title: 'Park Detail', park})
}));

router.get('/park/add', csrfProtection, (req, res, next) => {
    const park = db.Park.build();
    res.render('park-add', {title: "Add Park", park, csrfToken: req.csrfToken()});
});

const parkValidators = [
  check('parkName')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for Park Name')
    .isLength({max: 255})
    .withMessage('Park Name must not be more than 255 characters long'),

    check('city')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for City')
      .isLength({max: 100})
      .withMessage('City must not be more than 100 characters long'),

    check('provinceState')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for Province/State')
      .isLength({max: 100})
      .withMessage('Province/State must not be more than 100 characters long'),

    check('country')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for Country')
      .isLength({max: 100})
      .withMessage('Country must not be more than 100 characters long'),

    check('opened')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for Opened')  
      .isISO8601()
      .withMessage('Please provide a valid date for Opened'),

    check('size')
      .exists({checkFalsy: true})  
      .withMessage('Please provide a value for Size')
      .isLength({max: 100})
      .withMessage('Size must not be more than 100 characters long'),

    check('description')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for Description')  

]

router.post('/park/add', csrfProtection, parkValidators, asyncHandler(async(req, res, next) => {
    const { parkName, city, provinceState, country, opened, size, description } = req.body;

    const park = db.Park.build({
        parkName, 
        city, 
        provinceState, 
        country, 
        opened, 
        size, 
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
  
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await park.save();
        res.redirect('/');
    } else {
        const errors = validatorErrors.array().map(err=> err.msg);
        res.render('park-add', {title: "Add Park", errors, park, csrfToken: req.csrfToken() });
    }
   
}));


router.get('/park/edit/:id(\\d+)', csrfProtection, asyncHandler( async (req, res)=>{
    const parkId = parseInt(req.params.id, 10);
    const park = await db.Park.findByPk(parkId);
    res.render('park-edit', {title: "Edit Park", park, csrfToken: req.csrfToken()});
}));

router.post('/park/edit/:id(\\d+)', csrfProtection, parkValidators, asyncHandler( async (req, res)=>{

    const { parkName, city, provinceState, country, opened, size, description } = req.body;
    const parkId = parseInt(req.params.id, 10);

    const parkToUpdate = await db.Park.findByPk(parkId);
    const park = {
        id: parkId,
        parkName, 
        city, 
        provinceState, 
        country, 
        opened, 
        size, 
        description
    };

    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()) {
      await parkToUpdate.update(park);
      res.redirect(`/park/${parkId}`);
    } else {
      const errors = validatorErrors.array().map(err => err.msg);
      res.render('park-edit', {title: "Edit Park", errors, park, csrfToken: req.csrfToken()}) 
    }


}))


router.get('/park/delete/:id(\\d+)', csrfProtection, asyncHandler(async(req, res) => {
    const parkId = parseInt(req.params.id, 10);
    const park = await db.Park.findByPk(parkId);

    res.render('park-delete', {title: "Delete Park", park, csrfToken: req.csrfToken()}) 
}));

router.post('/park/delete/:id(\\d+)', csrfProtection, asyncHandler(async(req, res) => {
    const parkId = parseInt(req.params.id, 10);
    const park = await db.Park.findByPk(parkId);
    park.destroy();
    res.redirect('/parks');
}));


module.exports = router;
