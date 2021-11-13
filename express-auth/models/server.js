const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {
    
    constructor(){
        this.app = express();
        // this.port = process.env.PORT | 3000;
        this.port = 3000;
        this.booksPath = '/api/books';
        this.usersPath = '/api/users';

        this.initDB();
        this.middlewares();
        this.routes();
    }

    async initDB(){
        await dbConnection();
    }

    middlewares(){ 
        //Funciones intermedias que se ejecutan antes de llegar al controlador
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.booksPath, require('../routes/books'));
        this.app.use(this.usersPath, require('../routes/users'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${ this.port }`)
          })
    }
}

module.exports = Server