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
  }, []);

  function loadUsers() {
    API.getUsers().then(res => setUsers(res))
      .catch(err => console.log(err));
  };

  function filter(e) {console.log('called filter');
    console.log('value',e.target.value);
  };

  return (
    <div>
      <Navbar filter={filter} />
      <main>
        <UsersContext.Provider value={ users}>
          <Directory filter={filter} />
        </UsersContext.Provider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
