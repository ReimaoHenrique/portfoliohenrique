import Head from "next/head";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Sou frelancer, Web Developer</h1>
        <p>See all my portfolio</p>
      </div>
    </>
  );
}
