import { useEffect, useRef } from 'react'
import { Box, Container, IconButton, Textarea } from '@chakra-ui/react'
import { AddIcon, EditIcon } from '@chakra-ui/icons'

import { motion } from 'framer-motion'

const AddTodo = ({ value, onChange, onSubmit, isOpen, onOpen, onClose }) => {
  const textareaRef = useRef()

  useEffect(() => {
    if (Boolean(value?.id)) textareaRef.current?.focus()
  }, [value])

  return (
    <>
      <Box bottom="0%" width="full" color="black" position="fixed">
        <Container onBlur={() => setTimeout(onClose, 100)}>
          <Box mb="37px" overflow="hidden">
            <Textarea
              as={motion.textarea}
              animate={{
                height: isOpen ? 315 : 45
              }}
              value={value?.task || ''}
              onChange={e => onChange({ ...value, task: e.target.value })}
              onFocus={() => onOpen()}
              placeholder="Write a task..."
              ref={textareaRef}
              mt="auto"
              px="51px"
              py={isOpen ? '51px' : '12px'}
              minH="45px"
              bg="#F6F6F6"
              resize="none"
              fontSize="14px"
              borderRadius="60px"
              display="inline-block"
              boxShadow="0px 4px 30px 0px rgba(0, 0, 0, 0.15)"
              _placeholder={{ color: 'rgba(192, 192, 192, 1)' }}
            />
            <IconButton
              onClick={onSubmit}
              zIndex={5}
              color="white"
              boxSize="60px"
              fontSize="22px"
              icon={Boolean(value?.id) ? <EditIcon /> : <AddIcon />}
              position="absolute"
              borderRadius="52px"
              bg="rgba(59, 130, 246, 1)"
              transform="translateX(calc(-100% - 25px)) translateY(230px)"
              _hover={{ bg: 'black' }}
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default AddTodo
