import { FC } from 'react'
import { SignIn } from '../types'
import { PasswordField } from './PasswordField'
import { Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

type SignInFormProps = {
  isLoading: boolean
  onSubmit: (values: SignIn) => void
}

export const SignInForm: FC<SignInFormProps> = ({ isLoading, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <Stack spacing="6">
      <Stack spacing="5">
        <FormControl>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required!' })}
          />
        </FormControl>
        <PasswordField
          form={'signIn'}
          register={register}
        />
      </Stack>
      <Stack spacing="6">
        <Button
          isLoading={isLoading}
          colorScheme="blue"
          onClick={handleSubmit(onSubmit)}
        >
          Sign in
        </Button>
      </Stack>
    </Stack>
  )
}
