import React from "react";

const UserContext = React.createContext({
  firstname: "",
  lastname: "",
  email: "",
  image: ""
});

export default UserContext;
