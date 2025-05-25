import styles from './post.module.css'
import { Comment } from './comment'
import { Avatar } from './avatar'

type Author = {
  name: string
  avatarUrl: string
  role: string
}

type Content = {
  type: string
  text: string
}

interface PostProps {
  author: Author
  content: Content[]
  publishedAt: Date
}

export const Post = ({ author, content, publishedAt }: PostProps) => {
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
          title={publishedAt.toDateString()}
          dateTime={publishedAt.toDateString()}
        >
          {publishedAt.toDateString()}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          return line.type === 'paragraph' ? (
            <p key={line.text}>{line.text}</p>
          ) : (
            <p key={line.text}>
              <a>{line.text}</a>
            </p>
          )
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

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
