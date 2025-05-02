import styles from './header.module.css'
import igniteLogo from '@/assets/ignite-logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo Ignite" />
    </header>
  )
}
