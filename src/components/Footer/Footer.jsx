import styles from "./Footer.module.sass";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>This is the footer bro. {new Date().getFullYear()}. </p>
    </div>
  );
}
