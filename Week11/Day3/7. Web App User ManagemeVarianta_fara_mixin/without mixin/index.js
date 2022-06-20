const express = require("express");
const cookieParser = require('cookie-parser');
const csrf = require('csurf');


const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
const csrfProtection = csrf({cookie: true});

const users = [
  {
    id: 1,
    firstName: "Jill",
    lastName: "Jack",
    email: "jill.jack@gmail.com"
  }
];

const validateUser = (req, res, next) => {
  const {firstName , lastName, email, password, confirmedPassword} = req.body;
  const errors = [];
  

  if (!firstName) {
     errors.push('Please provide a first name.');
  }   

  if (!lastName) {
     errors.push('Please provide a last name.');
  }  

  if (!email) {
     errors.push('Please provide an email.');
  }  

  if (!password) {
     errors.push('Please provide a password.');
  }  

  if (!confirmedPassword) {
     errors.push('Please provide a confirmed password.');
  } 

  if (password !== confirmedPassword) {
      errors.push('The provided values for the password and password confirmation fields did not match.');
  } 

  req.body.errors = errors;
  next();
}

const validateUserInteresting = (req, res, next) => {
  
   const {errors, age, favoriteBeatle, iceCream} = req.body;

   if (!age) {
     errors.push('age is required');
   } 

   if (!parseInt(age)) {
      errors.push('age must be a valid age');
   }
   if (age < 0 || age > 120) {
     errors.push('age must be a valid age');
   } 

   if (!favoriteBeatle) {
     errors.push('favoriteBeatle is required');
   } 


   if (["John", "Paul", "Ringo", "George"].indexOf(favoriteBeatle) < 0 ) {
      errors.push("favoriteBeatle must be a real Beatle member");
   }
   req.body.errors = errors;
   next();
}

app.get('/', async (req, res) => {
  const dataPage = {};
  dataPage.users = users;
  res.render('index',  dataPage);
});


 app.get('/create', csrfProtection, (req, res) => {
  
    res.render('create-normal', {
      errors: [],
      firstName: '',
      lastName: '',
      email: '',
      csrfToken: req.csrfToken(),
     
    });
 })


app.post('/create', validateUser, csrfProtection, (req, res) => {
   const {firstName , lastName, email, password, confirmedPassword, errors} = req.body;

   if (errors.length > 0 ) {
      let dataPage = {
         errors,
         firstName,
         lastName,
         email,
         password,
         confirmedPassword,
         csrfToken: req.csrfToken()
     }
     res.render('create-normal', dataPage);
     return;

   } else {
      const user = {
         id: users.length + 1,
         firstName,
         lastName,
         email
     };
       users.push(user);
       res.redirect('/');
       return;
  
  };
   
   

});

app.get('/create-interesting', csrfProtection, (req, res) => {
   const dataPage = {
      errors: [],
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmedPassword: '',
      age: '',
      favoriteBeatle: '',
      iceCream: false,
      csrfToken: req.csrfToken()
   };
   res.render('create-interesting', dataPage);
   return;

});

app.post('/create-interesting', validateUser, validateUserInteresting, csrfProtection, (req, res) => {
  const {errors, firstName, lastName, email, password, confirmedPassword, age, favoriteBeatle, iceCream} = req.body;

  if(errors.length > 0) {
   res.render('create-interesting', {
      errors,
      firstName,
      lastName,
      email,
      password: '',
      confirmedPassword: '',
      age,
      favoriteBeatle,
      iceCream,
      csrfToken: req.csrfToken()
   })
  } else {
   const iceCreamValue = iceCream === 'on' ? "true" : "false";
   const user = {
      id: users.length + 1,
      firstName,
      lastName,
      email,
      password,
      confirmedPassword,
      age,
      favoriteBeatle,
      iceCream: iceCreamValue
   }
   users.push(user);
   res.redirect('/');
   return;
  }
   
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
