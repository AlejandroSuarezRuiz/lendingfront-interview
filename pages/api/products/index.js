import nextConnect from 'next-connect';
import middleware from '../../../utils/database';

/* /products endpoint
Endpoint used to call the list of the products from the db.
Use the Database middleware to get the connection, and uses
the mongo SDK to call the 'products' collection and get all
items, no pagination for now. */

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let cursor = await req.db.collection('products').find();
    let products = await cursor.toArray();

    res.json(products);
});

export default handler;