import React, { Component } from "react";

import "./App.css";

const user = {
  firstName: "Pedro",
  lastName: "Perez",
  favoriteColor: "rebeccapurple",
  avatarUrl: "http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png"
};

function formatName(user) {
  // we use grave accent here since this is just a string (no HTML)
  return `${user.firstName} ${user.lastName}`;
}

function displayAvatar(user) {
  if (user.avatarUrl) {
    return <img className="avatar" src={user.avatarUrl} />;
  }
  else {
    return <img className="avatar" src="https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png" />;
  }
}

class App extends Component {
  // every component needs a "render()" method
  // ("render()" determines the component's content)
  render() {
    // CSS properties are in camel case inside JSX
    // (backgroundColor instead of background-color)
    const welcomeStyle = {
      backgroundColor: user.favoriteColor,
      color: "white"
    };

    // Use parenthesis when RETURNING multiple lines of HTML
    return (
      <main className="app">
        <header>
          <h1>Hello, world!</h1>
          {/* in JSX you can call functions in the middle of your HTML */}
          <p style={welcomeStyle}>
            Welcome, {formatName(user)}.
          </p>
        </header>

        <h2>JSX is Weird</h2>
        <p>This is the App component. 🦍</p>
        {displayAvatar(user)}

        <footer>
          <p>Made with 🐲 at Ironhack</p>
        </footer>
      </main>
    );
  }
}

export default App;
