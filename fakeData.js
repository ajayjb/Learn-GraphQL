const userList = [
  {
    id: 1,
    userName: "God of mischief",
    name: "loki",
    age: 175,
    nationality: "India",
    friends: [
      {
        id: 2,
        userName: "God of mischief",
        name: "loki",
        age: 175,
        nationality: "USA",
      },
      {
        id: 3,
        userName: "God of mischief",
        name: "loki",
        age: 175,
        nationality: "South",
      },
      {
        id: 4,
        userName: "God of mischief",
        name: "loki",
        age: 175,
        nationality: "England",
      },
    ],
  },
  {
    id: 2,
    userName: "God of mischief",
    name: "loki",
    age: 175,
    nationality: "USA",
  },
  {
    id: 3,
    userName: "God of mischief",
    name: "loki",
    age: 175,
    nationality: "South",
    friends: [],
  },
  {
    id: 4,
    userName: "God of mischief",
    name: "loki",
    age: 175,
    nationality: "England",
    friends: [],
  },
];

const movieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    year: 2019,
    inTheater: true,
  },
  {
    id: 2,
    name: "Interstellar",
    year: 2007,
    inTheater: true,
  },
  {
    id: 3,
    name: "Superbad",
    year: 2009,
    inTheater: true,
  },
  {
    id: 4,
    name: "PedroTech The Movie",
    year: 2035,
    inTheater: false,
  },
];

module.exports = { userList: userList, movieList: movieList };
