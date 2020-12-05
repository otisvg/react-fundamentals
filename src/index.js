import React from "react";
import ReactDOM from "react-dom";

//stateless functional component
//need to always return some jsx

function Greeting() {
  return <h1>Hey, I'm Otis :)</h1>;
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
