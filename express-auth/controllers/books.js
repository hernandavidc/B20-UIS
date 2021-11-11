const booksGet = (req, res) => {
    res.json({msg: 'Get Api controller'});
}

const bookPost = (req, res) => {
    res.json({msg: 'Post Api controller'});
}

const bookPut = (req, res) => {
    res.json({msg: 'Put Api controller'});
}

const bookDel = (req, res) => {
    res.json({msg: 'Delete Api controller'});
}

module.exports = {
    booksGet,
    bookPost,
    bookPut,
    bookDel
}