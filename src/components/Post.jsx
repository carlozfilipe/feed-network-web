import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/carlozfilipe.png" />
          <div className={styles.authorInfo}>
            <strong>Carlos Filipe</strong>
            <span>Software Developer</span>
          </div>
        </div>

        <time title="07 de Junho às 18:01h" dateTime="2024-06-07 18:01:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala, galerinha! 👋</p>
        <p>Acabei de subir mais um projeto no meu portfólio. O nome do projeto é Feed Network 🚀</p>
        <p><a href="https://feed-network.netlify.app/" target='_blank'>https://feed-network.netlify.app/</a></p>
        <p>
          <a href="#">#newproject</a>{' '}
          <a href="#">#reactjs</a>{' '}
          <a href="#">#github</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}