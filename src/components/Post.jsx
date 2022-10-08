import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { IoCreateOutline, IoBulbOutline, IoChatboxOutline, IoEyeOutline } from "react-icons/io5";
import { format } from 'timeago.js';

export default function Post({ title, tags, updatedTime, score, answers, views, owner }) {
    return (
        <HStack borderBottom="1px" borderBottomColor="#ecf0f1" w="100%" px="3.5rem" py="1rem" justifyContent="space-between">
            <VStack alignItems="flex-start" w="70%" spacing="1rem">
                <Text w="100%" fontSize="sm" pl="10px" fontWeight="medium" color="#3498db">
                    {title}
                </Text>
                <Flex fontSize="smaller" color="#bdc3c7" flexWrap="wrap" rowGap="0.5rem" columnGap="1rem">
                    {tags && tags.map((tag, index) => (
                        <Box key={index} border="1px" px="12px" borderRadius="50px">
                            <Text>{tag}</Text>
                        </Box>
                    ))}
                </Flex>
                <HStack fontSize="xs">
                    <Box border="1px" borderColor="#bdc3c7" borderRadius="50%" p="3px" color="#f39c12"><IoCreateOutline /></Box>
                    <Text color="#bdc3c7">updated</Text>
                    <Text color="#bdc3c7">{format(updatedTime)}</Text>
                    <Text fontWeight="medium" color="#95a5a6">{owner}</Text>
                </HStack>
            </VStack>
            <HStack w="30%" fontSize="xs" color="#bdc3c7" spacing="1rem">
                <VStack _hover={{ color: "#5cbc7c", cursor: "pointer" }}>
                    <Text>{score}</Text>
                    <Text>score</Text>
                    <IoBulbOutline />
                </VStack>
                <VStack _hover={{ color: "#5cbc7c", cursor: "pointer" }}>
                    <Text>{answers}</Text>
                    <Text>answers</Text>
                    <IoChatboxOutline />
                </VStack>
                <VStack _hover={{ color: "#5cbc7c", cursor: "pointer" }}>
                    <Text>{views}</Text>
                    <Text>views</Text>
                    <IoEyeOutline />
                </VStack>
            </HStack>
        </HStack>
    )
}
