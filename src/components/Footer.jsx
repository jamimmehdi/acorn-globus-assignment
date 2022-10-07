import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoFacebook, IoLogoDribbble } from "react-icons/io5";
const footerMenu = ["about us", "tour", "help", "blog", "chat", "data", "legal", "privacy policy", "work here", "advertising info", "mobile", "contact us", "feedback"];
const bodyMenu = [
    { heading: "technology", menu: ["stack overflow", "server fault", "super user", "web applications", "ask ubuntu", "webmasters", "game development", "teX, lateX"] },
    { heading: "life/arts", menu: ["photography", "science fiction and fantacy", "graphic design", "movies and TV", "Seasoned Advice", "Home Improvement", "Personal Fincance & money"] },
    { heading: "culture/recreation", menu: ["photography", "science fiction and fantacy", "graphic design", "movies and TV", "Seasoned Advice", "Home Improvement", "Personal Fincance & money"] },
    { heading: "science", menu: ["photography", "science fiction and fantacy", "graphic design", "movies and TV", "Seasoned Advice", "Home Improvement", "Personal Fincance & money"] },
    { heading: "others", menu: ["photography", "science fiction and fantacy", "graphic design", "movies and TV", "Seasoned Advice", "Home Improvement", "Personal Fincance & money"] },
];

export default function Footer() {
    return (
        <VStack w='100%' bg="white" px="5rem" pb="4rem">
            <Box w="100%" px="3rem" borderTop="1px" borderTopColor="#ecf0f1">
                <HStack borderBottom="1px" borderBottomColor="#ecf0f1">
                    <HStack w="100%" py="1.5rem" spacing="1rem">
                        {footerMenu && footerMenu.map((menu, index) => (
                            <Text _hover={{ color: "#95a5a6", cursor: "pointer" }} key={index} fontSize='xs' color="#bdc3c7">{menu}</Text>
                        ))}
                    </HStack>
                    <HStack color="#bdc3c7">
                        <IoLogoTwitter />
                        <IoLogoFacebook />
                        <IoLogoDribbble />
                    </HStack></HStack>
                <HStack py="1.5rem" borderBottom="1px" borderBottomColor="#ecf0f1" justifyContent="space-between" alignItems="flex-start">
                    {bodyMenu && bodyMenu.map((item, index) => (
                        <VStack key={index} alignItems="flex-start" spacing="0.3rem" color="#bdc3c7">
                            <Text fontSize='sm' pb="0.5rem">{item.heading.toUpperCase()}</Text>
                            {item.menu && item.menu.map((menu, index) => (
                                <Text _hover={{ color: "#95a5a6", cursor: "pointer" }} fontSize='xs' key={index}>{menu.split(" ").map((word) => word.substring(0, 1).toUpperCase() + word.substring(1)).join(" ")}</Text>
                            ))}
                        </VStack>
                    ))}
                </HStack>
                <HStack py="1.5rem" fontSize='xs' color="#bdc3c7" justifyContent="space-between">
                    <Text>site design / logo © 2016 Stack Exchange Inc; user contribution licensed under cc by-sa 3.0 with attribution required</Text>
                    <Text >rev 2016.8.1.3852</Text>
                </HStack>
            </Box>
        </VStack>
    )
}
