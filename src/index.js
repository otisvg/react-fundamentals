import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const firstGame = {
  img: "https://m.media-amazon.com/images/I/61DAQGX2QML._AC_UY218_.jpg",
  title: "Harvest Moon: Friends of Mineral Town",
  date: "2006",
};

const secondGame = {
  img:
    "https://upload.wikimedia.org/wikipedia/en/4/47/PlayStation_Fighting_Force_Cover.jpg",
  title: "Fighting Force",
  date: "1997",
};

function GameList() {
  return (
    <section className="gamelist">
      <Game img={firstGame.img} title={firstGame.title} date={firstGame.date} />
      <Game
        img={secondGame.img}
        title={secondGame.title}
        date={secondGame.date}
      />
    </section>
  );
}

const Game = (props) => {
  console.log(props);
  return (
    <article className="game">
      <img src={props.img} alt="" />
      <h4>{props.title}</h4>
      <h6>Release date: {props.date}</h6>
      <p>{props.owner}</p>
    </article>
  );
};

ReactDOM.render(<GameList />, document.getElementById("root"));
