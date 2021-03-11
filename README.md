## Lengingfront Technical Interview

The description of the technical test was described in the document send by Ruth.
At the begining of the process I estimate 15 hours to complete the test.
The final estimation was about 17 hours. The reason was because I decide to spend a bit more time in the API Mock part, using a serverless service from NextJs and a real DB (Mongo Atlas).
In the next section i will explain the selected tools/architecture.

### Architecture
The frontend framework was React, but at the top, i decide to use NextJs, a very powerfull framework for web applications wich help us with the directory structure and routes rendering. NextJs can be very easy deployed into Vercel, a service of static pages hosting + Esteroids. What are the esteroids? The abillity to create serverless function directly from the FrontEnd code, wich are automatically managed by vercel as AWS lambda functions. This is part of the JAM stack.

I decide to add Typescript to the project to have a better management of the API data, and also to have a robust application. For the Styles i decide to use StyledComponents, a very interesting and elegant way to declare styles as a components. This can remplace the classic react css modules and give us a more clean code (Between others bennefits). In the project there are also 2 helpers. One for the API created with the serverless functions of NextJs and other for the frontend calls to the API. I decide to use also a great rect library called React-Query, wich help us to get the API calls with pretty good hooks.

Each component has their own Typescript interface to define props and all related to the component.
In this case I implement two API calls:

- /products (Give us the list of all the products for filling the left sidebar).
- /products/{productId}/inverstors (Give us all the inverstors for an specific product).

The respective interfaces are in `./components/syndication/interface.ts`.
And are called `Product` and `Purchase`. Both methods are get, and you can review it live calling the api.

I use the Free Cluster of MongoDb atlas to set the database, and with the serverless functions construct two very basic endpoints for retrive the data, inside the endpoinds is the little explanation.


### Possible Improvements

- Being more strict with the gap, padding and margin constants and add to theme.
- Maybe if styles come more complex, separate it into an specific style file for each component.
- Syndication component it's kind of big, but it's okay. If it's needed to manage more logic, it's important to organice better the folder into subcomponents, but it's only create the folders and separate the style files.
- For now it's not needed a global store, but, if it's required we can use useContext hook from react (The simple way), or there in the literature are some interesting libraries as Redux (Complex) or Recoil (Easy).
- Manage all the icons by a separated component, and change class system to maybe propertys.
