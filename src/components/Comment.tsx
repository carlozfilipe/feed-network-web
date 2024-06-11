import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from '@phosphor-icons/react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // O parâmetro `state` armazena o valor mais atual de `likeCount`
    setLikeCount((state) => {
      return state + 1;
    });

    /* 
      Sempre que você for atualizar uma informação na qual ela depende
      do valor anterior dela mesma é recomendável utilizar uma arrow function como parâmetro para uma função `setAlgumaCoisa` como neste exemplo aqui da função `setLikeCount`.
    */
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gaearon.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dan Abramov</strong>
              <time
                title="07 de Junho às 20:34h"
                dateTime="2024-06-07 20:34:18"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
