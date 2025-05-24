import './global.css'
import styles from './app.module.css'

import { Header } from '@/components/header'
import { Post } from '@/components/post'
import { Sidebar } from '@/components/sidebar'

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
