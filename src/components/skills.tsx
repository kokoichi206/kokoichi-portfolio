import styles from '../../styles/Home.module.scss';
import { GiSkills } from 'react-icons/gi';
import { OneStar, TwoStar } from './stars';

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
              <TwoStar /> Android (Kotlin)
            </div>
          </li>
          <li>
            <div className={styles.langs}>
              <TwoStar /> Python (ML)
            </div>
          </li>
          <li>
            <div className={styles.langs}>
              <TwoStar /> iOS (SwiftUI)
            </div>
          </li>
          <li>
            <div className={styles.langs}>
              <OneStar /> Go
            </div>
          </li>
          <li>
            <div className={styles.langs}>
              <OneStar /> React
            </div>
          </li>
          <li>
            <div className={styles.langs}>
              <OneStar /> Github
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
