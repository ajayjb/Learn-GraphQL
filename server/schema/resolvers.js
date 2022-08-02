const { userList, movieList } = require("../fakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: (parent, args, context, info) => {
      console.log("info", info);
      return userList;
    },
    user: (parent, args, context, info) => {
      console.log(args);
      const id = Number(args.id);
      const found_user = _.find(userList, { id: id });
      return found_user;
    },
    movies: () => {
      return movieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const foundMovie = _.find(movieList, { name: name });
      return foundMovie;
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      console.log(args.input);
      let lastId = userList[userList.length - 1].id;
      user.id = lastId + 1;
      userList.push(user);
      return user;
    },
    updateUserName: (parent, args) => {
      const { id, newUserName } = args.input;
      const index = _.findIndex(userList, (user) => {
        return user.id === Number(id);
      });
      userList[index].userName = newUserName;
      return userList[index];
    },
    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(userList, (item) => {
        return item.id === id;
      });
      return id;
    },
  },

  User: {
    favoriteMovies: () => {
      return _.filter(
        movieList,
        (movie) => movie.year >= 2000 && movie.year <= 2010
      );
    },
  },
};

module.exports = resolvers;
