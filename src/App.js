import React, { useState, useEffect } from "react";
import * as API from "./utils/API";
import Navbar from "./components/Navbar";
import Directory from "./components/Directory";
import Footer from "./components/Footer";
import UsersContext from "./utils/UsersContext";
import './App.css';

function App() {

  const [usersState, setUsersState] = useState({
    users: []
  });

  useEffect(() => {
    API.loadUsers.then((res) => {
      setUsersState(res);
    }).catch(err => console.log(err));;
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <UsersContext.Provider value={{ users: usersState }}>
          <Directory />
        </UsersContext.Provider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
