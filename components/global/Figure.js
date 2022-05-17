import styles from "../../styles/Figure.module.css";

const Figure = ({ quote, author }) => (
  <figure className={styles.figure}>
    <blockquote>
      <p className={styles.quote}>&quot;{quote}&quot;</p>
    </blockquote>
    <figcaption className={styles.author}>
      — <cite>{author}</cite>
    </figcaption>
  </figure>
);

export default Figure;
