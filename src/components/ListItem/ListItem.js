import React from "react";

function ListItem({ user, index }) {
  return (
    <tr>
      <td scope="row"><b>{index}</b></td>
      <td><img src={user.image} alt={user.firstname} /></td>
      <td>{user.firstname} {user.lastname}</td>
      <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
    </tr>
  );
}

export default ListItem;
