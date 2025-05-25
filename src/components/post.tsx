/* eslint-disable prettier/prettier */
import styles from './post.module.css'

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/yale1995.png" alt="avatar image" />
          <div className={styles.authorInfo}>
            <strong>Yale Henrique</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title="11 de Maio às 11:15h'' " dateTime="2025-05-11 08:00:00">
          Publicdo há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> {'   '}
          <a href="">#nlw</a> {' '} <a href="">#rocketseat</a>{' '}
        </p>
      </div>
    </article>
  )
}
