import nextConnect from 'next-connect';
import middleware from '../../utils/database';

/* /inverstors?productId={productId} endpoint
I have to adapat the slug because Vercel has some troubles with that.
With more time maybe this can be fixed. The correct way to do it will be:
/products/{productId}/inverstors.

With a given productId this endpoint consult all the inverstors, with
the call to the specific collection in the DB. */

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { productId } = req.query;

    if(!productId){
      res.status(400).json({
        error: "Invalid service request."
      })
    } else {
      let cursor = await req.db.collection('inverstors').find({productId: productId});
      let inverstors = await cursor.toArray();
  
      res.json(inverstors);
    }

});

export default handler;