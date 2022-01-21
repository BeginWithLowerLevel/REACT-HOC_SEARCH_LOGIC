import HOC from "./HOC";

function UsersList({ data }) {
  let renderUser = data.map((user) => {
    return <div key={user.id}>{user.name}</div>;
  });

  return <div>{renderUser}</div>;
}

const SearchUsers = HOC(UsersList, "users");
export default SearchUsers;
