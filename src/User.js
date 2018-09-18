import React from "react";

// components with NO STATE can be written as just a function
// (the function acts like a "render()" method in class components)
function User(props) {
  // props are like parameters but for components
  // <User userName="Barnabus" userColor="orange" />
  const { userName, userColor } = props;

  // CSS properties are in camel case inside JSX
  // (backgroundColor instead of background-color)
  const welcomeStyle = {
    backgroundColor: userColor
  };

  return (
    <p style={welcomeStyle}>
      Welcome, {userName}!
    </p>
  );
}

export default User;
