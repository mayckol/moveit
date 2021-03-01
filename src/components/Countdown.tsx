import styles from '../styles/components/Countdown.module.css'
import { useContext } from "react";
import { ToggleActiveBtn } from "./ToggleActiveBtn";
import { CountdownContext } from "../contexts/CountdownContext";


export function Countdown() {

  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')


  return (
    <>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <ToggleActiveBtn
        isActive={isActive}
        hasFinished={hasFinished}
        startCountdown={startCountdown}
        resetCountdown={resetCountdown}
      />
    </>
  );
}
