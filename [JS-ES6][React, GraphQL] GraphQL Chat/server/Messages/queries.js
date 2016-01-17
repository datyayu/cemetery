import { GraphQLNonNull, GraphQLList, GraphQLString } from 'graphql';
import { Message, messageType } from './model';


export const message = {
  type: messageType,
  description: 'Get one specific message.',

  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID of the message to find.',
    },
  },

  resolve: (root, {id}) => Message.findByIdAsync(id),
};


export const messages = {
  type: new GraphQLList(messageType),
  description: 'Get all messages',

  resolve: () => Message.findAsync({}),
};


export const messagesFromUser = {
  type: new GraphQLList(messageType),
  description: 'Get all messages from a given user',

  args: {
    userId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'ID of the user to get the messages from.',
    },
  },

  resolve: (root, {userId}) => Message.findAsync({ user: userId }),
};
