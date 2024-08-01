import clsx from "clsx";
import LetterMask from "../../components/AnimatedText/LetterMask";
import WordMask from "../../components/AnimatedText/WordMask";
import styles from "./styles.module.scss";
import Btn from "../../components/Btn/Btn";

const About = () => {
  return (
    <div className={styles["about"]}>
      <div className={styles["about__bg"]}>
        <div className={styles["about__bg-circle"]}></div>
        <div className={styles["about__bg-square"]}></div>
        <div className={styles["about__bg-circle2"]}></div>
        <div className={styles["about__content"]}>
          <div className={styles["about__title-container"]}>
            <LetterMask
              text="My name is"
              type="h1"
              className={clsx(styles["title"], styles["title--top"])}
            />
            <LetterMask
              text="Candy Heist"
              type="h1"
              className={clsx(styles["title"], styles["title--bottom"])}
            />
          </div>
          <div className={styles["content-wrapper"]}>
            <WordMask
              className={styles["content"]}
              text={`Candy also known as "Candy Heist" is a project that primarily focuses on electronic music by Music Producer & DJ, Yedu Renjith. He has spent the better part of 8 years producing electronic music, during which he produced trap, future bass, drum n bass and dubstep amongst many other genres. Candy's current era of music highlights his profound interest in house, techno and psytrance, mainly focusing on the popular sub-genre of house, tech-house. He hopes to unify people across the globe with his music, spreading the word of electronic music to every corner of the world.`}
            />
          </div>
          <Btn text="More about me" to="/about" />
        </div>
      </div>
    </div>
  );
};

export default About;
