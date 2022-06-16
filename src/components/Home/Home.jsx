import styles from "./Home.module.sass";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to my news web app!</h1>
      <h2>Visit the news tab to see the news!</h2>
    </div>
  );
}
