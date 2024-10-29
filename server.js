
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

app.listen(3000, () => {
    console.log('Servidor executando com sucesso na porta 3000')
})   

//GET 
app.get('/books', (req, res) => {
    
    db.find({}, (err, books) => {
        res.json(books)
    })

})

//POST
app.post('/books', (req, res) => {
    db.insert({
        book:req.body.book
    }, () => {
        res.json(req.body)
    })
})

//DELETE
app.delete('/books/:id', (req, res) => {
    db.remove({
        _id:req.params.id
    }, (err) => {
        res.json({
            success:true
        })
    })
})

               

