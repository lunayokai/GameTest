import { useNavigate } from "react-router-dom";

const End = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>End</h1>
      <button onClick={() => navigate("/")}>
        Volver al inicio.
      </button>
    </div>
  );
};

export default End;