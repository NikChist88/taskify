import { HiEye, HiEyeOff } from 'react-icons/hi'
import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react'
import { UseFormRegister } from 'react-hook-form'
import { SignIn } from '../types'
import { FC } from 'react'

type PasswordFieldProps = {
  form: string
  register: UseFormRegister<SignIn>
}

export const PasswordField: FC<PasswordFieldProps> = ({ form, register }) => {
  const { isOpen, onToggle } = useDisclosure()

  const onClickReveal = () => {
    onToggle()
  }

  return (
    <FormControl>
      <FormLabel htmlFor="password">Password:</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="text"
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={
              isOpen ? <HiEyeOff color="#2883CC" /> : <HiEye color="#2883CC" />
            }
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id={form === 'signIn' ? 'signin' : 'signup'}
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          {...register('password', { required: 'Password is required!' })}
        />
      </InputGroup>
    </FormControl>
  )
}
