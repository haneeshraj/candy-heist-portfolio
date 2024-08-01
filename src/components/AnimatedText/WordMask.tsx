import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

import { wordAnim } from "./anim.ts";
import styles from "./styles.module.scss";
import clsx from "clsx";

const MainTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const ref = useRef<null | HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const words = text.split(" ");

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  return (
    <h1 className={clsx(styles["word-text"], className)} ref={ref}>
      {words.map((word, index) => (
        <span key={index} className={styles.word}>
          <motion.span
            variants={wordAnim}
            initial="initial"
            animate={mainControls}
            style={{ display: "inline-block" }}
            custom={index}
          >
            {word}
          </motion.span>
          {"\u00A0"}
        </span>
      ))}
    </h1>
  );
};

export default MainTitle;
