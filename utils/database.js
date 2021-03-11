import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

/* DATABASE MIDDLEWARE
I decide to use a mongodb free cluster + nextjs serverless functions
That allow me to create a very simple backend and consult data from DB
in a secure way. To reuse the DB connection logic between endpoints, i
put it into a custom middleware. I use the mongodb NodeJs SDK. */

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_STRING}`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('lendingfront');
  return next();
}

const middleware = nextConnect();
middleware.use(database);
export default middleware;