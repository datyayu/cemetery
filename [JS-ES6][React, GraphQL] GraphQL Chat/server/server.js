import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { promisifyAll } from 'bluebird';
import { graphql } from 'graphql';
import schema from './rootSchema';

/* Config */
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost/graphql-test';


/* Initialize app */
const app = express();
promisifyAll(mongoose);
mongoose.connect(DB_URL);

/* Middleware */
app.use(bodyParser.text({ type: 'application/graphql' }));


/* Serve app */
app.get('/', (req, res) => {
  res.sendfile('./client/build/index.html')
});

app.get('/app.js', (req, res) => {
  res.sendfile('./client/build/app.js');
});


/* GraphQL endpoint */
app.post('/graphql', (req, res) => {
  const query = req.body;

  graphql(schema, query)
    .then(result => res.json(result))
    .catch(console.log);
});


/* Start listening */
const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`GraphQL serving on http:${host}:${port}`);
});
