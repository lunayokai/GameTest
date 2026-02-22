import { useNavigate } from "react-router-dom";
import Background from "../../components/background";
import landingText from "../../assets/landingText.json";
import styles from './Landing.module.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Background />
      <div className={styles.viewport} onClick={() => navigate("/game")}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {landingText.title}
          </h1>
          <h2 className={styles.introduction}>
            <text className={styles.paragraph}>
              {landingText.introduction.firstParagraph}
            </text>
            <text className={styles.paragraph}>
              {landingText.introduction.secondParagraph}
            </text>
            <text className={styles.paragraph}>
              {landingText.introduction.thirdParagraph}
            </text>
            <text className={styles.godspeed}>
              {landingText.introduction.godspeed}
            </text>
          </h2>
        </div>
        <footer className={styles.footer}>
          <h3 className={styles.credits} >{landingText.credits.map((credit, index) => (
            <div key={index}>{credit}</div>
          ))}</h3>
        </footer>


      </div>
    </div>
  );
};

export default Landing;