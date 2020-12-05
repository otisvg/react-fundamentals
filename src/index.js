import React from "react";
import ReactDOM from "react-dom";

const GameList = () => {
  return (
    <section>
      <Game />
    </section>
  );
};

const Game = () => {
  return (
    <article>
      <Image />
      <Title />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/en/7/7a/Harvest_Moon-_FoMT.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <p>Harvest Moon: Friends of Mineral Town</p>;
};

ReactDOM.render(<GameList />, document.getElementById("root"));
