import { Avatar, Button, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { QuestionOutlineIcon, Search2Icon, DragHandleIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { setSearchKeyword, setLoading } from './helper/postSlice';
import { useEffect, useState } from 'react';

export default function Topbar() {
    const [searchInput, setSearchInput] = useState("");
    const [timeoutId, setTimeoutId] = useState(null);
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        setSearchInput(event.target.value);
    }

    useEffect(() => {
        if (timeoutId) clearTimeout(timeoutId);
        const newTimeouttId = setTimeout(() => {
            dispatch(setLoading(true));
            dispatch(setSearchKeyword(searchInput));
        }, 700);
        setTimeoutId(newTimeouttId);
    }, [searchInput]);

    return (
        <HStack w="100%" py="1rem" px="0.5rem" mb="-8px" justifyContent="space-between" borderBottom="1px" borderBottomColor="#ecf0f1">
            <InputGroup ml="1rem">
                <InputLeftElement pointerEvents='none' children={<Search2Icon color='gray.300' />} />
                <Input type='tel' placeholder='search...' w="400px" value={searchInput} onChange={handleSearch} />
            </InputGroup>

            <HStack>
                <Button leftIcon={<QuestionOutlineIcon />} bg="transparent">Help</Button>
                <Button leftIcon={<DragHandleIcon />} bg="transparent">Tour</Button>
                <HStack>
                    <Avatar size="xs" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    <ChevronDownIcon />
                </HStack>
            </HStack>
        </HStack>
    )
}
