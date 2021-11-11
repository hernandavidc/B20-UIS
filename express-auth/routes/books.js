const { Router } = require('express');

const router = Router();

const { booksGet, 
        bookPost, 
        bookPut, 
        bookDel 
    } = require('../controllers/books');

router.get('/', booksGet);

router.post('/', bookPost);

router.get('/:id', (req, res) => {
  res.send('Hello get cc!')
});

router.put('/:id', bookPut);

router.delete('/:id', bookDel);

module.exports = router;