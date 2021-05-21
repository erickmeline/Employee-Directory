import React, { useState, useEffect } from "react";
import API from "./utils/API";
import Navbar from "./components/Navbar";
import Directory from "./components/Directory";
import Footer from "./components/Footer";
import UsersContext from "./utils/UsersContext";
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers()
  }, [])

  function loadUsers() {
    API.getUsers().then(res => setUsers(res))
      .catch(err => console.log(err));
  };
console.log('usersState',users);
  return (
    <div>
      <Navbar />
      <main>
        <UsersContext.Provider value={ users }>
          <Directory />
        </UsersContext.Provider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
