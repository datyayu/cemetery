import { GraphQLNonNull, GraphQLString, GraphQLBoolean } from 'graphql';
import { GraphQLError } from 'graphql/error';
import { Message, messageType } from './model';
import { User } from '../Users/model';


export const createMessage = {
  type: messageType,
  description: 'Create a new message',

  args: {
    text: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Message\'s content.',
    },
    userId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'User who posted the messsage.',
    },
  },

  resolve: async (root, {text, userId}) => {
    try {
      /* Find User */
      const user = await User.findByIdAsync(userId);
      if (!user) throw 'User doesn\'t exists';

      /* Create message */
      let message = new Message({user: userId, text: text});
      message = await message.saveAsync();

      /* Return saved message */
      return message;
    } catch (error) {
      return new GraphQLError(error);
    }
  },
};


export const removeMessage = {
  type: GraphQLBoolean,
  description: 'Remove a specific message',

  args: {
    id: {
      description: 'Message to delete.',
      type: new GraphQLNonNull(GraphQLString),
    },
  },

  resolve: async (root, {id}) => {
    try {
      /* Find message */
      const message = await Message.findByIdAsync(id);
      if (!message) throw 'Message doesn\'t exists';

      /* Remove message */
      await message.removeAsync();

      /* Send confirmation */
      return true;
    } catch (error) {
      console.log(error)
      return new GraphQLError(error);
    }
  },
};
