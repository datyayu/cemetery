import { GraphQLSchema, GraphQLObjectType, GraphQLInt } from 'graphql';
import { userQueries, userMutations } from './Users';
import { messageQueries, messageMutations } from './Messages';

/* Base schema for the application. */
const rootSchema = new GraphQLSchema({
  /* Queries */
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...userQueries,
      ...messageQueries,
    },
  }),

  /* Mutations */
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      ...userMutations,
      ...messageMutations,
    },
  }),
});


export default rootSchema;
