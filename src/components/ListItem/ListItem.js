import React from "react";

function ListItem({ user }) {
  return (
    <li>
      {user.firstname} {user.lastname}
    </li>
  );
}

export default ListItem;
