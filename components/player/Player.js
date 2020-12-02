import styles from "./Player.module.scss";

/**
 * Retorna um elemento de jogador
 * @param {*} props 
 * @param {*} props.name 
 * @param {*} props.points
 */
export default function Player(props) {
  return (
    <li className={styles.player} key={props.name}>
      <div className={styles.playercard}>
        <span>{props.name}</span>
        <span className={styles.points}>{props.points}</span>
      </div>
    </li>
  )
}
