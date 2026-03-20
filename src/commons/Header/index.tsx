import styles from "./Header.module.scss";

import MainHeader from "./MainHeader";
import Navbar from "./Navbar";
import PreHeader from "./PreHeader";

const Header = () => {
  return (
    <header className={styles.header}>
      <PreHeader />
      <MainHeader />
      <Navbar />
    </header>
  );
};

export default Header;
