import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import FadeLetters from "../../components/AnimatedText/FadeLetters";

function Intro() {
  return (
    <>
      <div className={styles["intro"]}>
        <div className={styles["video-bg"]}>
          <motion.video
            autoPlay
            muted
            loop
            className={styles["video-bg__video"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <source src="/bg_1.mp4" type="video/mp4" />
          </motion.video>
        </div>
        <p className={styles["top-text"]}>
          <FadeLetters text="WELCOME TO" addDelay={1.6} />
        </p>
        <p className={styles["bottom-text"]}>
          <FadeLetters text="PRODUCER / DJ" addDelay={2.4} />
        </p>
      </div>
    </>
  );
}

export default Intro;
