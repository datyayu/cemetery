import mongoose, { Schema } from 'mongoose';
import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';


/* GraphQL type for User schema */
export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'User creator',

  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the user.',
    },

    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the user',
    },
  },
});


/* Mongoose User model */
export const User = mongoose.model('User', new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true},
}));
