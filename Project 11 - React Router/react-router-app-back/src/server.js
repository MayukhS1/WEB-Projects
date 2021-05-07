import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';


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

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');
    
        await operations(db);
    
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

app.get('/api/articles/:name', async (req, res) => {
    try {
        const articleName = req.params.name;

        const client = await MongoClient.connect('mongodb://localhost:27017', //27017 is default for mongoDB
        {useNewUrlParser: true});  

        const db = client.db('my-blog');

        const articleInfo = await db.collection('articles').findOne({name: articleName});

        res.status(200).json(articleInfo);

        client.close(); //close connection with the DB
    } catch (error) {
        res.status(500).json({message: 'Something went wrong!', error});
    }
    

});

app.post ('/api/articles/:name/upvote', async (req, res) =>{
    
    const articleName = req.params.name;
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', //27017 is default for mongoDB
        {useUnifiedTopology: true, useNewUrlParser: true}); 

        const db = client.db('my-blog');

        const articleInfo = await db.collection('articles').findOne({name: articleName});

        await db.collection('articles').updateOne({name: articleName},{
            '$set': { upvotes: articleInfo.upvotes+1,}
        });

        const updatedArticleInfo = await db.collection('articles').findOne({name: articleName});

        res.status(200).json(updatedArticleInfo);
        client.close();

    } catch (error) {
        res.status(500).json({message: 'Something went wrong!', error});
    }
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
