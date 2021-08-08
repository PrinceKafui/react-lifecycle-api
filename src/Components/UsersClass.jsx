import React, { Component } from "react";

class UsersClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responds) => responds.json())
      .then((Users) => {
        console.log("users:", Users);
        this.setState({ Users: Users });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <hr />
        <div>
          {this.state.Users.map((User) => (
            <div>
              <p>{User.name}</p>
              <p>{User.username}</p>
              <p>{User.email}</p>

              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UsersClass;
