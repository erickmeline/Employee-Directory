import React, { useContext } from "react";
import ListItem from "../../components/ListItem";
import UsersContext from "../../utils/UsersContext";

function Directory(props) {
  const users = useContext(UsersContext);
  return (
    <div className="container-fluid">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col" onClick={(e) => {props.filter(e)}}>Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map((user, i) => <ListItem key={i} user={user} index={i + 1} />)
        }
        </tbody>
      </table>
    </div>
  )
}

export default Directory;
