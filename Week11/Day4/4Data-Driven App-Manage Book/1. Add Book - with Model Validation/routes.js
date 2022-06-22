const express = require('express');
const csrf = require('csurf');
const { check, validationResult} = require('express-validator');
const db = require('./db/models');
const router = express.Router();



const csrfProtection = csrf({cookie: true});
const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

router.get('/' ,asyncHandler(async (req, res, next) => {
    const books = await db.Book.findAll({
      order: [['title', 'ASC']]
    });
    res.render('book-list',{ title: "Books", books });
}
))

router.get('/book/add', csrfProtection, (req, res) => {
   const book = db.Book.build();
   res.render('book-add', 
      {
        title: 'Add a book',
        book,
        csrfToken: req.csrfToken()
    })
});

const bookValidators = [
  check('title')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for Title')
    .isLength({max: 255})
    .withMessage('Title must be no more than 255 chars'),

  check('author')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for Author')
    .isLength({max: 100})
   .withMessage('Title must be no more than 100 chars'),

  check('releaseDate')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for Release Date')
    .isISO8601()
   .withMessage('Please provide a valid date for Release Dateex YYYY-MM-DD'),

  check('pageCount')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for Page Count')
    .isInt()
   .withMessage('Please provide a valid integer for Page Count'),

  check('publisher')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for Publisher')
    .isLength({max: 100})
   .withMessage('Publisher must not be more than 100 characters long'),

]


router.post('/book/add', csrfProtection, bookValidators, asyncHandler(async (req, res, next) => {
  const { title, author, releaseDate, pageCount, publisher} = req.body;
  const book = db.Book.build({
        title,
        author,
        releaseDate,
        pageCount,
        publisher,
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
     await book.save();
     res.redirect('/');
  }
  else {
    const errors = validatorErrors.array().map( error => error.msg);
    res.render('book-add', {
      errors,
      title,
      book,
      csrfToken: req.csrfToken()
    });

  }

}));


router.get('/book/edit/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
  const idBook = parseInt(req.path.split('/')[3]);
  const book = await db.Book.findByPk(idBook);
  console.log(book);

  res.render('book-edit', {
    title: "Edit book",
    book,
    csrfToken: req.csrfToken()
  });

}));


router.post('/book/edit/:id(\\d+)', csrfProtection, bookValidators, asyncHandler(async (req, res, next) => {
  const bookId = parseInt(req.params.id, 10);
  const { title, author, releaseDate, pageCount, publisher} = req.body;
  const bookToUpdate = await db.Book.findByPk(bookId);

  const book = {
     title, 
     author, 
     releaseDate, 
     pageCount, 
     publisher
  }
  
  const validatorErrors = validationResult(req);
  

  if(validatorErrors.isEmpty()) {
     await bookToUpdate.update(book);
     res.redirect('/');

  } else {
     const errors = validatorErrors.array().map(error => error.msg);

     res.render('book-edit', {
      errors,
      title: 'Edit book',
      book,
      csrfToken: req.csrfToken()
     });
  }

}));

router.get('/book/delete/:id(\\d+)', csrfProtection, asyncHandler( async (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = await db.Book.findByPk(bookId);
  res.render('book-delete', {
    title: "Delete Book",
    book,
    csrfToken: req.csrfToken()
  })
  
}));

router.post('/book/delete/:id(\\d+)', csrfProtection, asyncHandler( async (req, res) => {
   const bookId = parseInt(req.params.id, 10);
   const book = await db.Book.findByPk(bookId);
    
    await book.destroy();
    res.redirect('/');
}));

module.exports = router;