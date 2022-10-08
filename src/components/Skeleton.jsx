import { Box, HStack, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

export default function SkeletonPost() {
    return (
        <HStack w="100%" bg="white">
            <Box padding='6' bg='white' w="70%">
                <SkeletonText mt='4' noOfLines={2} spacing='4' />
                <HStack mt="4">
                    <Skeleton height='20px' width="50px" />
                    <Skeleton height='20px' width="50px" />
                    <Skeleton height='20px' width="50px" />
                </HStack>
                <SkeletonText mt='4' noOfLines={1} spacing='4' width="200px" />
            </Box>
            <Box padding='6' bg='white' w="30%">
                <HStack>
                    <VStack spacing="1rem">
                        <Skeleton height='20px' width="20px" />
                        <Skeleton height='8px' width="50px" />
                        <Skeleton height='20px' width="20px" borderRadius="50%" />
                    </VStack>
                    <VStack spacing="1rem">
                        <Skeleton height='20px' width="20px" />
                        <Skeleton height='8px' width="50px" />
                        <Skeleton height='20px' width="20px" borderRadius="50%" />
                    </VStack>
                    <VStack spacing="1rem">
                        <Skeleton height='20px' width="20px" />
                        <Skeleton height='8px' width="50px" />
                        <Skeleton height='20px' width="20px" borderRadius="50%" />
                    </VStack>
                </HStack>
            </Box>
        </HStack>
    )
}
