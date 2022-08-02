import { useQuery, useMutation, useLazyQuery, gql } from "@apollo/client";
import { useState } from "react";

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      name
      age
      nationality
    }
  }
`;

const GET_USER_BY_ID = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      name
      age
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($input: createUserInput!) {
    createUser(input: $input) {
      name
      age
    }
  }
`;

const DisplayUsers = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [userName, setUserName] = useState("");
  const [nationality, setNationality] = useState("");

  const { loading, error, data, refetch } = useQuery(QUERY_ALL_USERS);

  const [fetchUser, { data: userData, error: userError }] =
    useLazyQuery(GET_USER_BY_ID);

  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({
      variables: {
        input: {
          name: name,
          age: age,
          nationality: nationality,
          userName: userName,
        },
      },
    });
    refetch();
  };

  return (
    <div>
      {loading && <div>loading</div>}
      {data &&
        data.users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      <input
        onChange={(e) => {
          setId(Number(e.target.value));
        }}
        placeholder="enter user id"
      />
      <button
        onClick={() => {
          if (id) {
            fetchUser({ variables: { userId: id } });
          }
        }}
      >
        Fetch User
      </button>
      {userData &&
        (userData.user ? <p>{userData.user.name}</p> : <p>No user</p>)}

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="userName"
        />
        <input
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
          placeholder="age"
        />
        <select
          onChange={(e) => {
            setNationality(e.target.value);
          }}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Brazil">Brazil</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DisplayUsers;
