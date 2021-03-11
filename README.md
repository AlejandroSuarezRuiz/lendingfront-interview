## Lengingfront Technical Interview

The description of the technical test was described in the document send by Ruth.
At the beginning of the process, I estimate 15 hours to complete the test.
The final estimation was about 17 hours. The reason was that I decide to spend a bit more time in the API Mock part, using a serverless service from NextJs and a real DB (Mongo Atlas).
In the next section I will explain the selected tools/architecture.

### Architecture
The frontend framework was React, but at the top, I decide to use NextJs, a very powerful framework for web applications which helps us with the directory structure and routes rendering. NextJs can be very easily deployed into Vercel, a service of static pages hosting + steroids. What are the steroids? The ability to create serverless functions directly from the FrontEnd code, which is automatically managed by vercel as AWS lambda functions. This is part of the JAM stack.

I decide to add Typescript to the project to have better management of the API data, and also to have a robust application. For the Styles I decide to use StyledComponents, a very interesting and elegant way to declare styles as components. This can replace the classic react css modules and give us a more clean code (Between others benefits). In the project there are also 2 helpers. One for the API created with the serverless functions of NextJs and other for the frontend calls to the API. I decide to use also a great rect library called React-Query, which helps us to get the API calls with pretty good hooks.

Each component has its own Typescript interface to define props and all related to the component.
In this case I implement two API calls:

- /products (Give us the list of all the products for filling the left sidebar).
- /inverstors?productId={productId} (Give us all the inverstors for an specific product).

I have to adapat the slug because Vercel has some troubles with that. With more time maybe this can be fixed. The correct way to do it will be: `/products/{productId}/inverstors`.

The respective interfaces are in `./components/syndication/interface.ts`.
And are called `Product` and `Purchase`. Both methods are `Get`, and you can review it live calling the api.

I use the Free Cluster of MongoDb atlas to set the database, and with the serverless functions construct two very basic endpoints for retrieve the data, inside the endpoinds is the little explanation.


### Possible Improvements

- Being more strict with the gap, padding and margin constants and add to the theme.
- Maybe if styles come more complex, separate them into specific style file for each component.
- Syndication component it's kind of big, but it's okay. If it's needed to manage more logic, it's important to organise better the folder into subcomponents (create the folders and separate the style files).
- For now it's not needed a global store, but, if it's required we can use useContext hook from react (The simple way), or there in the literature are some interesting libraries as Redux (Complex) or Recoil (Easy).
- Manage all the icons by a separate component, and change class system to maybe property's.
