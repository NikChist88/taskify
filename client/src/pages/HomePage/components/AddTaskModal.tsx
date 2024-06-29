import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { FaCircle } from 'react-icons/fa'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
  HStack,
  Tag,
  TagCloseButton,
  TagLabel,
} from '@chakra-ui/react'

export const tags = [
  { id: 1, title: 'Project', color: '#ff3b56' },
  { id: 2, title: 'Frontend', color: '#00cce1' },
  { id: 3, title: 'Backend', color: '#ffbe65' },
  { id: 4, title: 'Issue', color: '#00b671' },
  { id: 5, title: 'Work', color: '#ff894d' },
]

export const AddTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  return (
    <>
      <Button
        alignSelf={'center'}
        margin={'10px 0'}
        flex={'0 0 40px'}
        maxW={'130px'}
        w={'100%'}
        fontSize={'14px'}
        leftIcon={<FaPlus />}
        colorScheme="blue"
        onClick={onOpen}
      >
        Add Task
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Tags</FormLabel>
              <HStack
                display={'flex'}
                flexWrap={'wrap'}
                spacing={1}
              >
                {tags.map((tag) => (
                  <Tag
                    key={tag.id}
                    size={'sm'}
                    variant="solid"
                    color={'#000'}
                    bgColor={'#EAEDF0'}
                    display={'flex'}
                    gap={'5px'}
                  >
                    <FaCircle
                      size={'8px'}
                      color={tag.color}
                    />
                    <TagLabel
                      fontSize={'12px'}
                      fontWeight={'400'}
                    >
                      {tag.title}
                    </TagLabel>
                    <TagCloseButton />
                  </Tag>
                ))}
              </HStack>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Notes</FormLabel>
              <Textarea minH={'170px'}></Textarea>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
