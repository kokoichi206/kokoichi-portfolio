import styles from '../../styles/Home.module.scss';
import { FaProductHunt } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { GrAppleAppStore } from 'react-icons/gr';

export default function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.title}>
        <FaProductHunt className={styles.icon} />
        Products
      </div>

      <div className={styles.contents}>
        <ul>
          <li>
            <a
              href="https://play.google.com/store/apps/developer?id=Takahiro%20Tominaga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGooglePlaystore /> Google Play
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/us/developer/takahiro-tominaga/id1619527887"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrAppleAppStore /> App Store
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
