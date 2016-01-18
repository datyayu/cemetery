# GraphQL Chat
> <strong>Language:</strong> JS/ES6
> <strong>Technologies used:</strong> React, GraphQL, Express.
> <strong>Date:</strong> 2016.01.16
> <strong>Status:</strong> Finished.

A server-client project made for testing the concept of using GraphQL as a single API endpoint.

<strong>NOTE:</strong> Due to my laziness in implementing full authentication, the application uses a hardcoded user id in the actions. If you are going to try this example, you should create a user on your database, then go to <em>client/src/actions/chatActions.js</em> and change the <em>userId</em> value on the <em>graphQLQuery</em> inside the <em>submitInput</em> function.
