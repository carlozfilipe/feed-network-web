import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from '@phosphor-icons/react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gaearon.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dan Abramov</strong>
              <time title="07 de Junho às 20:34h" dateTime="2024-06-07 20:34:18">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Very good, bro! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
