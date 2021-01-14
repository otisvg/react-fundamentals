import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
const games = [
  {
    img: "https://m.media-amazon.com/images/I/61DAQGX2QML._AC_UY218_.jpg",
    title: "Harvest Moon: Friends of Mineral Town",
    date: "2006",
  },

  {
    img:
      "https://upload.wikimedia.org/wikipedia/en/4/47/PlayStation_Fighting_Force_Cover.jpg",
    title: "Fighting Force",
    date: "1997",
  },
  {
    img:
      "https://www.mobygames.com/images/covers/l/236048-disney-s-hercules-playstation-front-cover.jpg",
    title: "Hercules",
    date: "1997",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51ah%2BeKF%2BhL._AC_.jpg",
    title: "Rayman",
    date: "1995",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51YSBXMJ6AL._AC_SX466_.jpg",
    title: "Tarzan",
    date: "1999",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81Y-PwNlBzL._AC_SL1500_.jpg",
    title: "Crash Bandicoot 2: The Wrath of Cortex",
    date: "1997",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/5/53/Spyro_the_Dragon.jpg",
    title: "Spyro The Dragon",
    date: "2001",
  },
  {
    img:
      "https://vignette.wikia.nocookie.net/spaceinvaders/images/d/dd/5806-space-invaders-playstation-front-cover.png/revision/latest?cb=20180313171056",
    title: "Space Invaders",
    date: "1999",
  },
  {
    img: "https://m.media-amazon.com/images/I/51GMKNSJ9GL._AC_SX466_.jpg",
    title: "Pokemon Blue",
    date: "1996",
  },
    {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Modern_Warfare_2_cover.PNG/220px-Modern_Warfare_2_cover.PNG",
    title: "Call of Duty: Modern Warfare 2",
    date: "2011"
    }
];
function GameList() {
  return (
    <section className="gamelist">
      {games.map((game) => {
        return <Game game={game}></Game>;
      })}
    </section>
  );
}

const Game = (props) => {
  const { img, title, date } = props.game;
  return (
    <article className="game">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h6>Release date: {date}</h6>
    </article>
  );
};

ReactDOM.render(<GameList />, document.getElementById("root"));
