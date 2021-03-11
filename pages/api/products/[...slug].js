import nextConnect from 'next-connect';
import middleware from '../../../utils/database';

/* /products/{productId}/inverstors endpoint
With a given productId this endpoint consult all the inverstors,
We use NextJs features to get the slug and verify that the specific
length is satisfied (2), and the final part of the request is 
/inverstors. Call the specific collection in the DB. */

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { slug } = req.query;

    if(slug.length != 2 || slug[1] != "inverstors"){
      res.status(400).json({
        error: "Invalid service request."
      })
    } else {
      let cursor = await req.db.collection('inverstors').find({productId: slug[0]});
      let inverstors = await cursor.toArray();
  
      res.json(inverstors);
    }

});

export default handler;