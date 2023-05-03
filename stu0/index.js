const cors = require('cors')
const express = require('express')
const mySqlProxy = require('./MySqlProxy')

const PORT = 80
const app = express()
const corsOptions = { origin: ['http://localhost:3000'], optionsSuccessStatus: 200 }

// Middleware...
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/message', cors(corsOptions), async (req, res) => { 
    res.send({message: 'Hello World!!!'})
})

//
// Person
//

app.get('/person/:id', cors(corsOptions), async (req, res) => { 
    const personId = req.params['id']
    const person = await mySqlProxy.selectPersonById(personId)
    person ? res.send(person) : res.status(404).send({message: 'Not found.'})
})

app.post('/person/', cors(corsOptions), async (req, res) => { 
    const person = req.body
    const addedPerson = await mySqlProxy.insertPerson(person)
    res.send(addedPerson)
})

//

app.get('/persons/', cors(corsOptions), async (req, res) => { 
    const persons = await mySqlProxy.selectPersons()
    res.send(persons)
})

app.put('/person/', cors(corsOptions), async (req, res) => { 
    const person = req.body
    const message = await mySqlProxy.updatePerson(person)
    res.send({ message })
})

app.delete('/person/:id', cors(corsOptions), async (req, res) => { 
    const personId = req.params['id']
    const results = await mySqlProxy.deletePerson(personId)
    res.send(results)
})

//
// Car
//

// Todo...

app.listen(PORT, () => {
    console.log(`Express web API running on port: ${PORT}.`)
})
