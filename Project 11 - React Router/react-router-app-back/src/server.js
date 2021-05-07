import express from 'express';
import bodyParser from 'body-parser';

// fake database for now



const app = express();

app.use(bodyParser.json());

app.get('/hello',(req, res) => res.send('Hello from the other side'));
app.get('/hello/:name', (req,res) => res.send(`Hello ${req.params.name}`));
app.post('/hello', (req, res)=> res.send(`Hello Again, ${req.body.name}!`));

app.listen(8000, () => console.log('Listening to port 8000'));

// run ther server by : npx babel-node src/server.js
