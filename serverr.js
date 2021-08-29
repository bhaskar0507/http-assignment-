const express = require("express");
const users = require("./user.json");
const app = express();

// middleware
app.use(express.json())


app.get("/", (request, response) => {
    response.send("Welcone to Homepage")
});

app.get("/users", function (request, response) {
    console.log('get:')
    
    return response.send(users)
});


app.post("/users", (request, response) => {
    let i = request.body
let det = [...users, i]
    response.send(det);
});

app.patch("/users/:id", (request, response) => {
    let x = request.params.id
   
    users.map((el) => {
        if (el.id == x) {
            el = { ...el, ...request.body }
        }
    }
    );
       return response.send(users)
})

app.delete("/users/:id", (request, response) => {
    let y = +request.params.id 
    for (let a = 0; a < users.length; a++) {
        if (users[a].id == y) {
            users[a] = request.body;
            break;
        }
    }
    response.send(users)
})



app.listen(5000, () => {
    console.log("Listening on port 5000")
})