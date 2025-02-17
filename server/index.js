const cors = require('cors')
const express = require('express')
const { body, check, param, validationResult, Result } = require('express-validator')
const { result } = require('lodash')
const pool=require('./PromisePool').promisePool

const PORT = 80
const app = express()
const corsOptions = { origin: ['http://localhost:3000'], optionsSuccessStatus: 200 }

// Middleware... MIDDLE OF THE DATABASE OR FRONTEND AND BACKEND
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Your endpoints here..
//ex 1 endpoint
app.get('/message', cors(corsOptions),async(req,res)=>{
    res.send({message:'Hello World!!!'})
})

//ex2 endpoint
app.get('/car/:id', cors(corsOptions), async(req, res)=>{
    let car_id = req.params['id']
    const [result] = await pool.query('Select * FROM car where car_id= ?', [car_id])
    //Read request body. 
    // const body = result [0]
    res.send(result)
    }) 

//ex3 endpoint
app.get('/cars', cors(corsOptions), async(req, res)=>{
    let make = req.query['make']
    const [result] = await pool.query('Select * FROM car where make= ?', [make])
    res.send(result)
    }) 

//ex4 endpoint
app.post('/cars', cors(corsOptions), async(req, res) =>{
    //Destructuring req.body
    const {model, make, color, price} = req.body;
    //Query to insert car on the table
    const [result]= await pool.query('insert into car(model, make, color, price) values (?,?,?,?)',
    [model, make, color, price])
    
    res.send(result)

})

//ex5 endpoint
app.put('/cars', cors(corsOptions), async (req, res) =>{
    const{ car_id, make, model, color, price} = req.body;
    const {result}= await pool.query("update car set make = ?, model = ?, color = ?, price = ? where car_id = ?",
    [make, model, color, price, car_id])

    res.send(result) 
    
})

//ex6 endpoint
app.delete('/cars/:id', cors(corsOptions), async (req, res) =>{
   let car_id= req.params['id']
    const [result] = await pool.execute("delete from car where car_id = ?",[car_id])
    res.send(result)
 
})

//ex7 endpoint



app.listen(PORT, () => {
    console.log(`Express web API running on port: ${PORT}.`)
})


