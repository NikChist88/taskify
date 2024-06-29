import { FC } from 'react'
import { Profile } from '../Profile/Profile'
import logo from '@assets/images/logo.png'
import './styles.scss'

type HeaderProps = {
  username: string
}

export const Header: FC<HeaderProps> = ({ username }) => {
  return (
    <header className="header">
      <div className='logo'>
        <img src={logo} alt="Logotype Image" />
        <span>Taskify</span>
      </div>
      <Profile username={username} />
    </header>
  )
}
