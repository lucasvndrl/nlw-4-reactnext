import styles from "../../styles/components/Profile.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lucasvndrl.png" alt="Lucas Vanderlei"></img>
      <div>
        <strong>Lucas Vanderlei</strong>
        <p>
          <img src="icons/level.svg" alt="Level 1" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
