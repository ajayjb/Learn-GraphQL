import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayUsers from "./components/DisplayUsers";
import MoviesDisplay from "./components/MoviesDisplay";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Users</h1>
        <DisplayUsers />
        <h1>Movies</h1>
        <MoviesDisplay />
      </div>
    </ApolloProvider>
  );
}

export default App;
