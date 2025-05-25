import styles from './avatar.module.css'

interface AvatarProps {
  src: string
  hasBorder?: boolean
}

export const Avatar = ({ src, hasBorder = true }: AvatarProps) => {
  return (
    <img
      src={src}
      alt="avatar image"
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}
