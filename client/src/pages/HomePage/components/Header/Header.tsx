import { FC } from 'react'
import { Profile } from '../Profile/Profile'
import './styles.scss'

type HeaderProps = {
  username: string
}

export const Header: FC<HeaderProps> = ({ username }) => {
  return (
    <header className="header">
      <Profile username={username} />
    </header>
  )
}
