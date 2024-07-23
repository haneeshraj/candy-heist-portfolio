import { motion } from "framer-motion";

import styles from "./styles.module.scss";

function Intro() {
  return (
    <div className={styles["intro"]}>
      <div className={styles["video-bg"]}>
        <motion.video
          autoPlay
          muted
          loop
          className={styles["video-bg__video"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <source src="/bg_1.mp4" type="video/mp4" />
        </motion.video>
      </div>
      <p className={styles["top-text"]}>WELCOME TO</p>
      <p className={styles["bottom-text"]}>PRODUCER / DJ</p>
    </div>
  );
}

export default Intro;
