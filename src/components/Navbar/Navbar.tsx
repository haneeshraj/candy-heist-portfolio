import NavItem from "../NavIcon/NavIcon";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles["nav"]}>
      <div className={styles["nav__item"]} aria-data="home">
        <NavItem.home />
      </div>
      <div className={styles["nav__item"]} aria-data="about">
        <NavItem.about />
      </div>
      <div className={styles["nav__item"]} aria-data="discography">
        <NavItem.discography />
      </div>
      <div className={styles["nav__item"]} aria-data="work">
        <NavItem.work />
      </div>
      <div className={styles["nav__item"]} aria-data="contact">
        <NavItem.contact />
      </div>
    </div>
  );
};

export default Navbar;
