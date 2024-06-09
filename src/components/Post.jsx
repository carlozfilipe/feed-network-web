import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Projeto sensacional! Parabéns! 🎉']);

  const [newCommentTextArea, setNewCommentTextArea] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    // O preventDefault impede a ocorrência do comportamento padrão de um evento especificado
    event.preventDefault();

    setComments([...comments, newCommentTextArea]);

    setNewCommentTextArea('');
  }

  function handleNewCommentChange() {
    // event.target.value recupera o dado que o usuário digita no textarea através da função onChange no textarea
    event.target.setCustomValidity('');
    setNewCommentTextArea(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório.');
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentTextArea.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href={line.content} target="_blank">
                  {line.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentTextArea}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}/>
        )
        })}
      </div>
    </article>
  );
}
