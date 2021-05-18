import React, { useState, useEffect } from "react";
import * as API from "./utils/API";
import Navbar from "./components/Navbar";
import Directory from "./components/Directory";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import './App.css';

function App() {

  const [usersState, setUsersState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    image: ''
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
        <UserContext.Provider value={{ usersState }}>
          <Directory />
        </UserContext.Provider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
