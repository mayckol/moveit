import styles from '../styles/components/Countdown.module.css'
import { useState, useEffect, useContext } from "react";
import { ToggleActiveBtn } from "./ToggleActiveBtn";
import { ChallengesContext } from "../contexts/ChallengesContext";

let countDownTimeOut: NodeJS.Timeout

export function Countdown() {

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setisActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  const {  } = useContext(ChallengesContext)

  function startCountdown(): void {
    setisActive(true)
  }

  function resetCountdown(): void {
    clearTimeout(countDownTimeOut)
    setisActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => setTime(time - 1), 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setisActive(false)
    }
  }, [isActive, time])

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
