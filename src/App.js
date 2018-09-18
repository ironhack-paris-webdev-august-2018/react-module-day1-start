import React, { Component } from "react";

import User from "./User.js";

import "./App.css";


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

// components that HAVE STATE NEED to be written as classes
class App extends Component {
  constructor(props) {
    super(props);

    // set the initial state
    // (an object where each key is a different state variable)
    this.state = {
      firstName: "Pedro",
      lastName: "Perez",
      favoriteColor: "rebeccapurple",
      avatarUrl: "http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png",
    };
  }

  changeColor() {
    // generate a random hexadecimal color
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = `#${randomNumber.toString(16)}`;

    console.log("NEW COLOR 🎨", randomColor);
    // use React's "setState()" method to change the state
    // (it will cause the app to RE-RENDER)
    this.setState({
      favoriteColor: randomColor
    });
  }

  // every component needs a "render()" method
  // ("render()" determines the component's content)
  render() {
    const { favoriteColor } = this.state;

    // Use parenthesis when RETURNING multiple lines of HTML
    return (
      <main className="app">
        <header>
          <h1>Hello, world!</h1>
          {/* in JSX you can call functions in the middle of your HTML */}
          <User userName={formatName(this.state)} userColor={favoriteColor} />
          <User userName="Barnabus Bixley" userColor="chartreuse" />
        </header>

        <h2>JSX is Weird</h2>
        <p>This is the App component. 🦍</p>
        {displayAvatar(this.state)}

        <button onClick={() => this.changeColor()}>
          Change User Color
        </button>

        <footer>
          <p>Made with 🐲 at Ironhack</p>
        </footer>
      </main>
    );
  }
}

export default App;
