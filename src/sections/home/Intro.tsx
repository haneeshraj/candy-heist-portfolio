import styles from "./styles.module.scss";

function Intro() {
  return (
    <div className={styles["intro"]}>
      <div className={styles["video-bg"]}>
        <video autoPlay muted loop className={styles["video-bg__video"]}>
          <source src="/bg_1.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles["top-text"]}>WELCOME TO</p>
      <p className={styles["bottom-text"]}>PRODUCER / DJ</p>
    </div>
  );
}

export default Intro;
