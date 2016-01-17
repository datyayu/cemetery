import mongoose, { Schema } from 'mongoose';
import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { User, userType } from '../Users/model';


/* GraphQL type for Message schema */
export const messageType = new GraphQLObjectType({
  name: 'Message',
  description: 'Chat message',

  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The id of the message.',
    },
    user: {
      type: userType,
      description: 'User who posted the message.',

      resolve: ({user}) => User.findByIdAsync(user),
    },
    text: {
      type: GraphQLString,
      description: 'Text of the message.'
    },
  },
});


/* Mongoose Message model */
export const Message = mongoose.model('Message', new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  text: { type: String, required: true },
}));
