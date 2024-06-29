import { selectUser } from '@modules/Auth'
import { useAppSelector } from '@store/hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Sidebar } from './components/'
import { Box } from '@chakra-ui/react'
import './styles.scss'

export const HomePage = () => {
  const user = useAppSelector(selectUser)
  const username = `${user!.firstName} ${user!.lastName}`
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [])

  return (
    <>
      <Header username={username} />
      <Box display={'flex'}>
        <Sidebar />
        <div className="home">HomePage</div>
      </Box>
    </>
  )
}
