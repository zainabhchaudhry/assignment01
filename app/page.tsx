import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Assignment 01 Dynamic Routing</h1>
      <h2>House of Coders</h2>

      <ul className={styles.navList}>
        <li><Link href="/Home/About">About</Link></li>
        <li><Link href="/Home/Services">Services</Link></li>
        <li><Link href="/Home/Careers">Careers</Link></li>
        <li><Link href="/Home/Contact">Contact</Link></li>
      </ul>
    </div>
  );
}
