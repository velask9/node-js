# JavaScript Node Express API
Project used to illustrate Node, Express and MySQL.

Assignments are located [here](Assignments.md).

# Getting Started
- Clone this repo
- Install dependencies: `npm install`
- Create `PromisePool.js` in your student directory based from [PromisePool.js.template](PromisePool.js.template)
- From your student directory, start the API: `npm start` or `nodemon index.js`


# Endpoint Reference
```
app.get('/person', cors(corsOptions), async (req, res) => { 
    // let result = await MySqlProxy.<YOUR FUNCTION HERE>
    // let id = req.params['id'];                 // Read params from URL.
    // let queryParam1 = req.query['personType']  // Read query params from URL.
    // let body = req.body;                       // Read request body.
    // res.send(<YOUR OBJECT HERE>);
    res.send({message: 'Hello World'})
})
```

# Notes
- Built with VS Code 
