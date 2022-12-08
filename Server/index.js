const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

const connect = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'contact'
    }
)

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api/get', (req, res) => {
    const sqlget = 'SELECT * FROM user'
    connect.query(sqlget, (error, result) => {
        if (error) throw error
        res.send(result)
    })
})
app.get('/api/trush', (req, res) => {
    const sqlgetTrush = 'SELECT * FROM trush'
    connect.query(sqlgetTrush, (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

// Data 
app.post('/api/post', (req, res) => {
    const { fullname, email, username, telephonumber, age, gender, phonenumber, telegram_id, instagram_id, facebook_id } = req.body
    const sqlInsert = `INSERT INTO user ( fullname, email, username, telephonumber, age, gender, phonenumber, telegram_id, instagram_id, facebook_id) VALUES (?,?,?,?,?,?,?,?,?,?)`;
    connect.query(sqlInsert, [fullname, email, username, telephonumber, age, gender, phonenumber, telegram_id, instagram_id, facebook_id], (error, result) => {
        if (error) {
            console.log(error)
        }
    })
})

// move to trush
app.post('/api/trush/post', (req, res) => {
    const { fullname, email, username, telephonumber, age, gender, phonenumber, telegram_id, instagram_id, facebook_id } = req.body

    const sqltrush = `INSERT INTO trush ( fullname, email, username, telephonumber, age, gender, phonenumber, telegram_id, instagram_id, facebook_id) VALUES (?,?,?,?,?,?,?,?,?,?)`;
    connect.query(sqltrush, [fullname, email, username, telephonumber, age, gender, phonenumber, telegram_id, instagram_id, facebook_id], (error, result) => {
        if (error) {
            console.log(error)
        }
    })
})



// delete handler 
app.delete('/api/remove/:id', (req, res) => {
    const { id } = req.params
    const sqlRemove = "DELETE FROM contact.user WHERE id = ?"
    connect.query(sqlRemove, id, (error, result) => {
        if (error) {
            console.log("remover :" + error)
        }
    })
})
app.delete('/api/trushremove/:id', (req, res) => {
    const { id } = req.params
    const sqlTrushRemove = "DELETE FROM contact.trush WHERE id = ?"
    connect.query(sqlTrushRemove, id, (error, result) => {
        if (error) {
            console.log("remover :" + error)
        }
    })
})



app.listen(5000, () => {
    console.log('server is running in port 5000')
})