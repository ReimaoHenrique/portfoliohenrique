"use client"; 
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link"; // Importação do Link

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuOpen &&
      !event.target.closest(`.${styles.menu}`) &&
      !event.target.closest(`.${styles.menuIcon}`)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <a href="#">Logo</a>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`${styles.menu} ${menuOpen ? styles.show : ""}`}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">sobre</Link>
        </li>
        <li>
          <Link href="/service"> Serviço</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
          </li>
      </ul>
    </nav>
  );
};

export default Navbar;
