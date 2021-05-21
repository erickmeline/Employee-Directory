import React, { useContext } from "react";
import ListItem from "../../components/ListItem";
import UsersContext from "../../utils/UsersContext";

function Directory() {
  const users = useContext(UsersContext);console.log('users',users);
  return (
    <div className="container-fluid">
      <div>
        search
      </div>
      <ul className="list-group">
        {
          users.map((user, i) => <ListItem key={i} user={user} />)
        }
      </ul>
    </div>
  )
}

export default Directory;
