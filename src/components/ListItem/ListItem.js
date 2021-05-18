import React from "react";

function ListItem({ user }) {
  return (
    <li key={user.email}>
      {user.firstname} {user.lastname}
    </li>
  );
}

export default ListItem;
