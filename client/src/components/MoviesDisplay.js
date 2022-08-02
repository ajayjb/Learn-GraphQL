import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_MOVIES = gql`
  query getAllMovies {
    movies {
      id
      name
      year
    }
  }
`;

const MoviesDisplay = () => {
  const { loading, error, data } = useQuery(GET_ALL_MOVIES);

  return (
    <div>
      {loading && <div>loading</div>}
      {data &&
        data.movies.map((movie) => {
          return <p key={movie.id}>{movie.name}</p>;
        })}
    </div>
  );
};

export default MoviesDisplay;
