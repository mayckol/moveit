import styles from '../styles/components/Profile.module.css'
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/mayckol.png" alt="Mayckol Rezende"/>
      <div>
        <strong>Mayckol Rezende</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
