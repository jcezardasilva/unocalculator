import styles from "./Footer.module.css"

export default function Footer({ children }) {
    return (
      <h1 className={styles.footer}>
        {children}
      </h1>
    )
  }