import styles from "./Footer.module.scss"

export default function Footer({ children }) {
    return (
      <h1 className={styles.footer}>
        {children}
      </h1>
    )
  }