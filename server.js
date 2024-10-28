
//dependências
const express    = require('express');
const nedb       = require('nedb')   ;
const bodyParser = require('body-parser');

//db é um arquivo json, apenas para testar as rotas.
const db = new nedb( {
    filename: './database.db',
    autoload: true
})

const app     = express ()        ; 

app.use(bodyParser.urlencoded({extended:false}))

//GET 
app.get('/books', (req, res) => {

})

//POST
app.post('/books', (req, res) => {
    db.insert({
        book:req.body.book
    }, () => {
        res.json(req.body)
    })
})

app.listen(3000, () => {
    console.log('Servidor executando com sucesso na porta 3000')
})                  

