import styles from "../styles/components/Countdown.module.css";

type ToggleActiveBtnProps = {
  isActive: boolean,
  hasFinished: boolean,
  startCountdown: () => void,
  resetCountdown: () => void,
}

export function ToggleActiveBtn(props: ToggleActiveBtnProps) {

  const {isActive, startCountdown, resetCountdown, hasFinished} = props

  const classesActive = isActive
    ? `${styles.countdownButton} ${styles.countdownButtonActive}`
    : styles.countdownButton

  const actionClick = hasFinished ? null : isActive ? resetCountdown : startCountdown
  const btnText = hasFinished ? 'Ciclo encerrado' : isActive ? 'Abandonar ciclo' : 'Iníciar um ciclo'

  return (
    <button
      disabled={hasFinished}
      onClick={actionClick}
      type="button"
      className={classesActive}>
      {btnText}
    </button>
  );
}
