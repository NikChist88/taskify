import { Logo } from './components/Logo'
import {
  Box,
  Container,
  Heading,
  Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import { SignInForm } from './components/SignInForm'
import { SignUpForm } from './components/SignUpForm'
import { useAuth } from './hooks/useAuth'

export const Auth = () => {
  const { isLoading, onSignInSubmit } = useAuth()

  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack
            spacing={{ base: '2', md: '3' }}
            textAlign="center"
          >
            <Heading size={{ base: 'xs', md: 'sm' }}>
              Log in to your account
            </Heading>
            <Text color="fg.muted">
              Don't have an account? <Link href="#">Sign up</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg.surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Tabs isLazy>
              <TabList
                display={'flex'}
                justifyContent={'space-between'}
              >
                <Tab>Signin</Tab>
                <Tab>Signup</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <SignInForm
                    isLoading={isLoading}
                    onSubmit={onSignInSubmit}
                  />
                </TabPanel>
                <TabPanel>
                  <SignUpForm />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
