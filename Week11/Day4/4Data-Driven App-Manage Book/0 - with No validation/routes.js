const express = require('express');
const csrf = require('csurf');
const db = require('./db/models');
const router = express.Router();



const csrfProtection = csrf({cookie: true});
const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);
// const wrapperErrHandlerForAsyncRouteHandler = (handler) => {
//     (req, res, next) => {
//       try {
//         handler(req,res, next);
//       } catch(err2){
//         next(err2)
//       }
//     }
// }

// router.get('/', async (req, res, next) => {
//    try {
//     const books = await models.Book.findAll({
//       order: [['title', 'ASC']]
//     });
//     res.render('book-list',{ title: "Books", books });
//    } catch(err) {
//      next(err); 
//    }

// });

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

  router.post('/book/add', csrfProtection, asyncHandler(async (req, res) => {
    const { title, author, releaseDate, pageCount, publisher} = req.body;
    const book = db.Book.build({
             title,
             author,
             releaseDate,
             pageCount,
             publisher,
    });

    try {

      await book.save();
      res.redirect('/');

    } catch(err) {

      res.render('book-add', {
      error: err,
      title,
      book,
      csrfToken: req.csrfToken()
      });

    }
  }
  ));


module.exports = router;