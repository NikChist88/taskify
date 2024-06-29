import { useEffect } from 'react'
import { Auth, selectUser } from '../modules/Auth'
import { useAppSelector } from '@store/hooks'
import { useNavigate } from 'react-router-dom'

export const AuthPage = () => {
  const user = useAppSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])

  return <Auth />
}
