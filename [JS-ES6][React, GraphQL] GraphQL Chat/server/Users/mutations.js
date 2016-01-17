import { GraphQLString, GraphQLNonNull, GraphQLBoolean } from 'graphql';
import { GraphQLError } from 'graphql/error';
import { User, userType } from './model';


export const createUser = {
  type: userType,
  description: 'Create a new user',

  args: {
    name: {
      name: 'name',
      description: 'User\'s name',
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      name: 'password',
      description: 'User\'s password',
      type: new GraphQLNonNull(GraphQLString),
    },
  },

  resolve: async (root, {name, password}) => {
    try {
      /* Make sure no duplicates */
      const userExists = await User.findOneAsync({ name: name });
      if (userExists) throw 'User already exists';

      /* Save user */
      let user = new User({ name: name, password: password });
      user = await user.saveAsync();

      /* Send saved user */
      return user;
    } catch (error) {
      return new GraphQLError(error);
    }
  },
};


export const updateUserPassword = {
  type: userType,
  description: 'Update a user\'s  password',

  args: {
    id: {
      name: 'id',
      description: 'ID of the user which password is going to be modified.',
      type: new GraphQLNonNull(GraphQLString),
    },
    newPassword: {
      name: 'newPassword',
      description: 'New password to replace the old one with.',
      type: new GraphQLNonNull(GraphQLString),
    },
  },

  resolve: async (root, {id, newPassword}) => {
    try {
      /* Find user */
      let user = await User.findByIdAsync(id);
      if (!user) throw 'User doesn\'t exists';

      /* Update password */
      user.password = newPassword;
      user = await user.saveAsync();

      /* Return user */
      return user;
    } catch (error) {
      return new GraphQLError(error);
    }
  },
};


export const updateUserName = {
  type: userType,
  description: 'Update a user\'s name',

  args: {
    id: {
      name: 'id',
      description: 'ID of the user which name is going to be modified.',
      type: new GraphQLNonNull(GraphQLString),
    },
    newName: {
      name: 'newName',
      description: 'New name to replace the old one with.',
      type: new GraphQLNonNull(GraphQLString),
    },
  },

  resolve: async (root, {id, newName}) => {
    try {
      /* Find user */
      let user = await User.findByIdAsync(id);
      if (!user) throw 'User doesn\'t exists';

      /* Update name */
      user.name = newName;
      user = await user.saveAsync();

      /* Return user */
      return user;
    } catch (error) {
      return new GraphQLError(error);
    }
  },
};


export const removeUser = {
  type: GraphQLBoolean,
  description: 'Remove a user',

  args: {
    id: {
      description: 'ID of the user to remove.',
      type: new GraphQLNonNull(GraphQLString),
    },
  },

  resolve: async (root, {id}) => {
    try {
      /* Find user */
      const user = await User.findByIdAsync(id);
      if (!user) throw 'User doesn\'t exists';

      /* Remove user */
      await user.removeAsync();

      /* Return confirmation */
      return true;
    } catch (error) {
      return new GraphQLError(error);
    }
  },
};
