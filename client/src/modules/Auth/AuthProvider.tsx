import { useMeQuery } from './api/authApi'
import { Spinner } from '@ui/Spinner'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useMeQuery()

  if (isLoading) {
    return <Spinner />
  }

  return children
}
