import styles from '../../styles/Home.module.scss';
import { GiSkills } from 'react-icons/gi';
import { OneStar, ThreeStar, TwoStar } from './stars';

export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.title}>
        <GiSkills className={styles.icon} />
        Skills
      </div>

      <div className={styles.contents}>
        <ul>
          <li>
            <div className={styles.langs}>
              <ThreeStar /> Android (Kotlin)
            </div>
          </li>
          <li>
            <div className={styles.langs}>
              <ThreeStar /> Python (ML)
            </div>
          </li>
          <li>
            <div className={styles.langs}>
              <ThreeStar /> Go
            </div>
          </li>
          <li>
            <div className={styles.langs}>
              <TwoStar /> Github
            </div>
          </li>
          <li>
            <div className={styles.langs}>
              <OneStar /> React
            </div>
          </li>
          <li>
            <div className={styles.langs}>
              <OneStar /> iOS (SwiftUI)
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
