import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { IoLocationOutline, IoEarthOutline } from "react-icons/io5";

export default function Job({ position, company, location, pay, type, tags }) {
    return (
        <HStack w="100%" alignItems="flex-start" spacing="1rem">
            <VStack h="116%">
                <Box p="0.5rem" mb="-10px" border="1px" borderRadius="50%" borderColor="#bdc3c7"></Box>
                <Box w="1px" h="100%" bg="#bdc3c7"></Box>
            </VStack>
            <VStack alignItems="flex-start" pb="1rem" fontSize="small" color="#bdc3c7" spacing="0.2rem" borderBottom="1px" borderBottomColor="#ecf0f1">
                <Text color="#3498db" fontWeight="medium">{position}</Text>
                <Text fontWeight="medium">{company}</Text>
                <HStack fontSize="smaller">
                    <Flex alignItems="center" columnGap="0.2rem">
                        <IoLocationOutline />
                        <Text>{location}</Text>
                    </Flex>
                    <Flex alignItems="center" columnGap="0.2rem">
                        <IoEarthOutline />
                        <Text>{type}</Text>
                    </Flex>
                </HStack>
                {pay && <Text fontSize="0.7rem" color="#2ecc71">{pay}</Text>}
                <HStack fontSize="smaller">
                    {tags && tags.map((tag, index) => (
                        <Box key={index} px="10px" border="1px" borderColor="#bdc3c7" borderRadius="50px" bg="white">
                            <Text>{tag}</Text>
                        </Box>
                    ))}
                </HStack>
            </VStack>
        </HStack>
    )
}
