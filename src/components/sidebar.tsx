import { Avatar } from './avatar'
import styles from './sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image cover"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/yale1995.png" />
        <strong>Yale Henrique</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
