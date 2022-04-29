import { MdPeopleAlt } from 'react-icons/md';
import { FaGithub, FaPenFancy, FaTwitter, FaKaggle } from 'react-icons/fa';
import { RiMiniProgramFill } from 'react-icons/ri';
import styles from '../../styles/Home.module.scss';

export default function SNS() {
  return (
    <div className={styles.SNS}>
      <div className={styles.title}>
        <MdPeopleAlt className={styles.icon} />
        SNS
      </div>

      <div className={styles.contents}>
        <div className={styles.content}>
          <a href="https://github.com/kokoichi206">
            <FaGithub className={styles.icon} />
            Github
          </a>
        </div>
        <div className={styles.content}>
          <a href="https://koko206.hatenablog.com/archive">
            <FaPenFancy className={styles.icon} />
            はてなブログ
          </a>
        </div>
        <div className={styles.content}>
          <a href="https://twitter.com/sZfRQcRF6A2kZpJ">
            <FaTwitter className={styles.icon} />
            Twitter
          </a>
        </div>
      </div>

      <div className={styles.contents}>
        <div className={styles.content}>
          <a href="https://www.kaggle.com/kokoichi">
            <FaKaggle className={styles.icon} />
            Kaggle
          </a>
        </div>
        <div className={styles.content}>
          <a href="https://atcoder.jp/users/kokoichi26">
            <RiMiniProgramFill className={styles.icon} />
            AtCoder
          </a>
        </div>
      </div>
    </div>
  );
}
