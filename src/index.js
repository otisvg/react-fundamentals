import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function GameList() {
  return (
    <section className="gamelist">
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
    </section>
  );
}

const Game = () => {
  return (
    <article className="game">
      <Image />
      <Title />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/61DAQGX2QML._AC_UY218_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <p>Harvest Moon: Friends of Mineral Town</p>;
};

ReactDOM.render(<GameList />, document.getElementById("root"));
