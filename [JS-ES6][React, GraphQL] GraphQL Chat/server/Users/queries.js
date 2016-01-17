import { GraphQLNonNull, GraphQLList, GraphQLString } from 'graphql';
import { User, userType } from './model';


export const user = {
  type: userType,
  description: "Get info from a user",

  args: {
    id: {
      description: "User to get info from",
      type: new GraphQLNonNull(GraphQLString),
    },
  },

  resolve: (root, {id}) => User.findByIdAsync(id),
};


export const users = {
  type: new GraphQLList(userType),
  description: "Get all users' info",

  resolve: () => User.findAsync({}),
}
