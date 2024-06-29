import { SignIn, SignUp } from '../types'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSigninMutation, useSignupMutation } from '../api/authApi'

export const useAuth = () => {
  const [signInUser, { isLoading }] = useSigninMutation()
  const [signUpUser] = useSignupMutation()
  const navigate = useNavigate()

  const onSignInSubmit: SubmitHandler<SignIn> = async (signinData) => {
    try {
      await signInUser(signinData).unwrap()
      navigate('/')
    } catch {
      toast.error('Wrong email or password!')
    }
  }

  const onSignUpSubmit: SubmitHandler<SignUp> = async (signupData) => {
    try {
      await signUpUser(signupData).unwrap()
      navigate('/')
    } catch {
      toast.error('Failed to create user!')
    }
  }

  return {
    onSignInSubmit,
    onSignUpSubmit,
    isLoading,
  }
}
