import { selectUser } from '@modules/Auth'
import { useAppSelector } from '@store/hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const user = useAppSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [])

  return <div>HomePage</div>
}
