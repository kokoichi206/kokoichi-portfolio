import Head from 'next/head';
import styles from '../../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kokoichi Lab</title>
        <meta name="description" content="Kokoichi" />
        <link rel="icon" href="./icon.ico" />
      </Head>

      <footer className={styles.footer}>
        © 2022&nbsp;
        <a
          href="https://github.com/kokoichi206"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>kokoichi</span>
        </a>
      </footer>
    </div>
  );
}
