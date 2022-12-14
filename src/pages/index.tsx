import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
import Blogs from '../components/blogs';
import Contributions from '../components/contributions';
import Products from '../components/products';
import Profile from '../components/profile';
import Skills from '../components/skills';
import SNS from '../components/sns';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kokoichi Lab</title>
        <meta name="description" content="Kokoichi" />
        <link rel="icon" href="./icon.ico" />
      </Head>

      {/* Github grass */}
      <Contributions />

      <Profile />

      <SNS />

      <Skills />

      <Products />

      <Blogs />

      <footer className={styles.footer}>
        © 2022&nbsp;
        <a
          href="https://github.com/kokoichi206/kokoichi-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>kokoichi</span>
        </a>
      </footer>
    </div>
  );
}
