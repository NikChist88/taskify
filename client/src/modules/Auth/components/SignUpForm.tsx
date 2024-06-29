import { Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { PasswordField } from './PasswordField'

export const SignUpForm = () => {
  return (
    <Stack spacing="6">
      <Stack spacing="5">
        <FormControl>
          <FormLabel htmlFor="email">Username:</FormLabel>
          <Input
            id="name"
            type="text"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            id="email"
            type="email"
          />
        </FormControl>
        <PasswordField />
      </Stack>
      <Stack spacing="6">
        <Button colorScheme="blue">Sign up</Button>
      </Stack>
    </Stack>
  )
}
