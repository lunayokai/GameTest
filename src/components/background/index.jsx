import { useEffect, useState } from "react";
import styles from './Background.module.css'; 

import Menu from "../../assets/Menu.png";
import gano from "../../assets/gano.png";
import perdio from "../../assets/perdio.png";
import bien from "../../assets/bien.png";
import mal from "../../assets/mal.png";
import pregunta from "../../assets/pregunta.png";

const backgrounds = {
  Menu,
  gano,
  perdio,
  bien,
  mal,
  pregunta,
};

const Background = ({ backgroundId = "Menu" }) => {

  return (
    <div
      className={`${styles.background}`}
      style={{ backgroundImage: `url(${backgrounds[backgroundId]})` }}
    />
  );
};

export default Background;