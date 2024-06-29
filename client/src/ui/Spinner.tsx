import { Spinner as ChakraSpinner } from '@chakra-ui/react'

export const Spinner = () => {
  return (
    <ChakraSpinner
      position={'absolute'}
      left={'50%'}
      top={'50%'}
      thickness="3px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  )
}
