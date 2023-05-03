# JavaScript Node Express API
Project used to illustrate Node, Express and MySQL.

Assignments are located [here](Assignments.md)

# Getting Started
- Clone this repo
- Install dependencies: `npm install`
- Create `PromisePool.js` based from [PromisePool.js.template](PromisePool.js.template)
- Start API: `npm start`

# Notes
- Built with VS Code 

# Endpoint Reference
```
app.get('/message', cors(corsOptions), async (req, res) => { 
    // let result = await mySqlProxy.<YOUR FUNCTION HERE>
    // let id = req.params['id'];                 // Read params from URL.
    // let queryParam1 = req.query['personType']  // Read query params from URL.
    // let body = req.body;                       // Read request body.
    // res.send(<YOUR OBJECT HERE>);
    res.send({message: 'Hello World'})
})
```
