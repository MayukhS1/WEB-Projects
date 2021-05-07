import express from 'express';
import bodyParser from 'body-parser';

// fake database for now

// const articlesInfo = {
//     'learn-react' : {
//         upvotes: 0,
//         comments: []

//     },
//     'learn-node' : {
//         upvotes: 0,
//         comments: []
//     },
//     'my-thoughts-on-resumes' : {
//         upvotes: 0,
//         comments: []
//     },
// };

const app = express();

app.use(bodyParser.json());

// app.get('/hello',(req, res) => res.send('Hello from the other side'));
// app.get('/hello/:name', (req,res) => res.send(`Hello ${req.params.name}`));
// app.post('/hello', (req, res)=> res.send(`Hello Again, ${req.body.name}!`));

app.post ('/api/articles/:name/upvote', (req, res) =>{
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;

    res.status(200).send(`${articleName} has : ${articlesInfo[articleName].upvotes} upvotes`);
} );

app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    articlesInfo[articleName].comments.push({ username, text });

    res.status(200).send(articlesInfo[articleName]);
});

app.listen(8000, () => console.log('Listening to port 8000'));

// run ther server by : npx babel-node src/server.js

// run using nodemon : npx nodemon --exec npx babel-node src/server.js  -> added on pakage.json as start
