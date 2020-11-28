import styles from "./Player.module.scss";

export default function Player({name,points}) {
  return (
    <li className={styles.player}>
    <div className={styles.playercard}>
        <span>{name}</span>
        <span className={styles.points}>{points}</span>
    </div>
    </li>
  )
}
