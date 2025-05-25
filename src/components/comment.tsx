import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './avatar'

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/yale1995.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yale Henrique</strong>
              <time
                title="11 de Maio às 11:15h'' "
                dateTime="2025-05-11 08:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" type="button">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
