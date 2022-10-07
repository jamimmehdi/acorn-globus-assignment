import { Avatar, Box, Button, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { QuestionOutlineIcon, Search2Icon, DragHandleIcon, ChevronDownIcon } from '@chakra-ui/icons'

export default function Topbar() {
    return (
        <HStack w="100%" py="0.5rem" px="0.5rem" justifyContent="space-between">
            <Box>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<Search2Icon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='search...' w="400px" />
                </InputGroup>
            </Box>
            <Box>
                <HStack>
                    <Button leftIcon={<QuestionOutlineIcon />} bg="transparent">
                        Help
                    </Button>
                    <Button leftIcon={<DragHandleIcon />} bg="transparent">
                        Tour
                    </Button>
                    <Box>
                        <Avatar size="xs" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <ChevronDownIcon />
                    </Box>
                </HStack>
            </Box>
        </HStack>
    )
}
