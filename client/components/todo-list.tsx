import { Box, Checkbox, Flex, Stack } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

import styled from '@emotion/styled'

const StyledCheckbox = styled(Checkbox)`
  span {
    height: 24px;
    width: 24px;
    border-radius: 5px;
    background: rgba(85, 188, 246, 0.4);
  }

  svg {
    font-size: 17px;
  }
`

const TodoList = ({ data, onSelect, onToggle, onDelete }) => {
  const sortByDate = array => array

  return (
    <Stack direction="column-reverse">
      {sortByDate(data?.listTodos || []).map(({ id, task, is_done }, index) => (
        <Flex
          key={'todo-' + index}
          bg="#F6F6F6"
          color="black"
          align="center"
          padding="13px"
          fontSize="14px"
          minHeight="53px"
          borderRadius="10px"
          _hover={{ opacity: 0.8 }}
          boxShadow="2px 4px 20px 0px rgba(0, 0, 0, 0.1)"
        >
          <StyledCheckbox
            mt="2px"
            mr="13px"
            mb="auto"
            defaultChecked={is_done}
            onChange={e => onToggle({ id, task, is_done: e.target.checked })}
          />
          <Box
            flex={1}
            cursor="pointer"
            onClick={() => onSelect({ id, task, is_done })}
          >
            {task}
          </Box>
          <Box h="24px" mt="1px" ml="13px" mb="auto">
            <DeleteIcon
              cursor="pointer"
              color="rgba(239, 68, 68, 1)"
              onClick={() => onDelete({ id })}
            />
          </Box>
        </Flex>
      ))}
    </Stack>
  )
}

export default TodoList
