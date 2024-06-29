import profile from '@assets/images/user.jpg'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import { FC } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5'
import { useAppDispatch } from '@store/hooks'
import { logout } from '@modules/Auth'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

type ProfileProps = {
  username: string
}

export const Profile: FC<ProfileProps> = ({ username }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleClickLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate('/auth')
  }

  return (
    <div className="profile">
      <img
        src={profile}
        alt="Profile Image"
      />
      <Menu>
        <div className="menu">
          <MenuButton>{username}</MenuButton>
          <IoMdArrowDropdown />
        </div>
        <MenuList>
          <MenuGroup>
            <MenuItem className="menuItem">
              <CgProfile size={'18px'} />
              My Profile
            </MenuItem>
            <MenuItem className="menuItem">
              <IoSettingsOutline size={'18px'} />
              Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem
              className="menuItem"
              onClick={handleClickLogout}
            >
              <IoLogOutOutline size={'18px'} />
              Logout
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  )
}
