import styles from '../../styles/Home.module.scss';
import { ImProfile } from 'react-icons/im';

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>
        <ImProfile className={styles.icon} />
        About Me
      </div>

      <div className={styles.contents}>
        <ul>
          <li>
            <div className={styles.langs}>オプティム社エンジニア/モバイル開発/AI</div>
          </li>
        </ul>
      </div>

      <div className={styles.contents}>
        <ul>
          <li>
            <div className={styles.langs}>2019 京大理学部物理(素粒子実験)</div>
          </li>
          <li>
            <div className={styles.langs}>2021 京大理学研究科(超伝導実験)</div>
          </li>
          <li>
            <div className={styles.langs}>2021 オプティム入社</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
