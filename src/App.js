import React, { Component } from "react";

import "./App.css";

class App extends Component {
  // every component needs a "render()" method
  // ("render()" determines the component's content)
  render() {
    // Use parenthesis when returning multiple lines of HTML
    return (
      <div className="app">
        <h2>JSX is Weird</h2>
        <p>This is the App component. 🦍</p>
      </div>
    );
  }
}

export default App;
