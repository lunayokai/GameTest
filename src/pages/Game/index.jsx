import { useNavigate } from "react-router-dom";
import Background from "../../components/background";
import { useState } from "react";

const Game = () => {
  const navigate = useNavigate();
  const [background, setBackground] = useState("pregunta");
  
  return (
    <div>
      <Background backgroundId={background}/>
      <h1>Game</h1>
      <button onClick={() => navigate("/end")}>
        Finalizar juego
      </button>
      <button onClick={() => setBackground("bien")}>
        Cambiar fondo
      </button>
    </div>
  );
};

export default Game;