import { Box, Text } from '@chakra-ui/react';

export default function Question({ question }) {
    return (
        <Box borderBottom="1px" borderBottomColor="#ecf0f1" py="10px" _hover={{ cursor: "pointer" }}>
            <Text fontSize="smaller" fontWeight="medium" color="#3498db">{question}</Text>
        </Box>
    )
}
