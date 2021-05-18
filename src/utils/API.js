import axios from "axios";

export default {
  loadUsers: function() {
    return new Promise((resolve, reject) => {
      axios.get("https://randomuser.me/api/?results=15").then((res) => {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            firstname: user.name.first,
            lastname: user.name.last,
            email: user.email,
            image: user.picture.large
          };
        });
        resolve(results);
      }).catch((err) => reject(err));
    });
  }
};
