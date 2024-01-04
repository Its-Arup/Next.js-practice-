import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {

  const [flag, setFlag] = useState(false);

  const handelToggle = () => {
    setFlag(!flag);
  };

  return (
    <div className={styles.ham}>
      <div className={styles.logo}>
        <h1>LOGO</h1>
      </div>
      <nav className={styles.nav}>
        <ul
          className={`${styles.nav_menu} ${flag == true ? styles.active : ""}`}
          onClick={handelToggle}
        >
          <li className={styles.nav_links}>
            <Link href="/" className={styles.nav_link_anchor}>
              Home
            </Link>
          </li>
          <li className={styles.nav_links}>
            <Link href="/about" className={styles.nav_link_anchor}>
              About
            </Link>
          </li>
          <li className={styles.nav_links}>
            <Link href="/blog" className={styles.nav_link_anchor}>
              Blog
            </Link>
          </li>
          <li className={styles.nav_links}>
            <Link href="/contact" className={styles.nav_link_anchor}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`${styles.menu} ${flag == true ? styles.active : "  "}`}
        onClick={handelToggle}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
};

export default Navbar;
