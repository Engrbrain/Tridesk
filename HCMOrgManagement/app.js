import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db';
import graphqlServer from './graphql';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Establis Database Connection
const start = async () => {
  try {
    console.log ('Connection to database');
    await connectDB();
    console.log ('Connected to Database');
  } catch {
    console.log ('Unable to establish connection with the database at the moment');
  }
};

graphqlServer.applyMiddleware({
  app
});

export default app;