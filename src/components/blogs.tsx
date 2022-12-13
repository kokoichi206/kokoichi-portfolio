import styles from '../../styles/Home.module.scss';
import blogs from './blog_entries.d';

export default function Blogs() {
  return (
    <div className={styles.blogs}>
      <div>Blogs</div>

      <div className={styles.contents}>
        {blogs.map((elm) => {
          return (
            <div key={elm.title} className={styles.content}>
              <a href={elm.url}>
                <div className={styles.title}>{elm.title}</div>
              </a>
              <div>{elm.summary}</div>
              <div>
                {elm.category.map((tag) => {
                  return <p key={tag} className={styles.tag}>#{tag}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
