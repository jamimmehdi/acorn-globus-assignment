import { Badge, Box, Flex, HStack, SkeletonText, Skeleton, Text, VStack, SkeletonCircle, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from './helper/postSlice';
import Post from './Post';
import SkeletonPost from './Skeleton';
import { getPosts } from './utils/Services/ApiCall';
const category = [
    { name: "interesting", badge: false, badgeValue: "" },
    { name: "featured", badge: true, badgeValue: "432" },
    { name: "hot", badge: false, badgeValue: "" },
    { name: "week", badge: false, badgeValue: "" },
    { name: "month", badge: false, badgeValue: "" },
];

const Category = ({ name, badge, badgeValue, activeCategory, setActiveCategory }) => {
    const isActive = activeCategory === name;
    const layerStyle = isActive ? 'activeCategory' : 'baseCategory';
    const hover = isActive ? { color: "white", cursor: "pointer" } : { color: "#95a5a6", cursor: "pointer" };

    const handleCategory = () => {
        setActiveCategory(name);
    }

    return (
        <HStack>
            <Box onClick={handleCategory} layerStyle={layerStyle} px="15px" py="3px" borderRadius="50px" _hover={hover}>
                <Text>{name}</Text>
            </Box>
            {badge && <Badge colorScheme='orange'>{badgeValue}</Badge>}
        </HStack>
    )
}

export default function Feed() {
    const [activeCategory, setActiveCategory] = useState(category[0].name); // TODO: Add to reducer
    const searchKeyword = useSelector((state) => state.posts.searchKeyword);
    const posts = useSelector((state) => state.posts.posts);
    const isLoading = useSelector((state) => state.posts.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        getPosts(searchKeyword, dispatch, isLoading);
    }, [searchKeyword]);

    return (
        <VStack w="70%" h="100%" overflowY="scroll" pb="5rem" layerStyle={'scrollbar'}>
            <Box px="3.5rem" borderBottom="1px" borderBottomColor="#ecf0f1" w="100%">
                <Flex py="1rem" position="relative">
                    <Text fontSize="5rem" fontWeight="bold" color="#f6f6f6">top</Text>
                    <Text position="absolute" top="45%" fontSize="xl" fontWeight="medium" color="#bdc3c7">Question</Text>
                </Flex>

                <HStack py="1rem" spacing="1rem" fontWeight="medium">
                    {category && category.map((item, index) => (
                        <Category key={index} name={item.name} badge={item.badge} badgeValue={item.badgeValue} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    ))}
                </HStack>
            </Box>
            {isLoading ? <VStack w="100%"><SkeletonPost /><SkeletonPost /><SkeletonPost /></VStack> :
                posts && posts.map((post, index) => (
                    <Post key={index} title={post.title} tags={post.tags} updatedTime={post.last_edit_date} score={post.score} answers={post.answer_count} views={post.view_count} owner={post.owner.display_name} />
                ))}
        </VStack>
    )
}
