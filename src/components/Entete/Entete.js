import styles from "./Entete.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import React from "react";
import Photo from "../../assets/images/photos/Model1.png";

export default function Entete() {
  const [text] = useTypewriter({
    words: [
      "CodeDragi",
      "Graphiste",
      "Développeur Web",
      "Développeur Front-End",
    ],
    loop: {},
    typeSpeed: 30,
    deleteSpeed: 60,
  });

  return (
    <main>
      <div className={styles.Entete}>
        <h3>Bonjour,</h3>

        <h1 className={styles.Title}>
          Je suis <span>{text}</span>
          <Cursor cursorStyle="<" />
          <div className={styles.PurpleForm}></div>
        </h1>

        <button>Accèder au CV</button>
        <div className={styles.PinkForm}></div>
      </div>

      <div className={styles.ModelPhoto1}>
        <img src={Photo} />
      </div>
    </main>
  );
}
