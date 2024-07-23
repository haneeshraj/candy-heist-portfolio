import { motion } from "framer-motion";
import navitems from "../../utils/navbar";

import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <motion.div
      className={styles["nav"]}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 1.4 },
      }}
    >
      {navitems.map((item, index) => (
        <motion.div
          className={styles["nav__item"]}
          aria-data={item.name}
          key={item.name}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              delay: 1.8 + index * 0.3,
              duration: 1.2,
              ease: [0.44, 0, 0, 0.95],
            },
          }}
        >
          <item.icon />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Navbar;
