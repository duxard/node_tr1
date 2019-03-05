const cl = console.log;

const express = require('express'),
      app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/api/:id', (req, res) => {
    res.send(`id is: ${req.params.id}`);
});

app.get('/profile/:name', (req, res) => {
    const data = {age: 30, location: "unknown"}
    res.render("profile", { person: req.params.name, data: data });
});


app.listen(3000);
//https://www.youtube.com/watch?v=RczQp3zCPXs&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=26