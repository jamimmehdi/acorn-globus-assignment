import { Badge, Box, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoBriefcaseOutline, IoDocumentTextOutline, IoPricetagsOutline, IoPersonOutline, IoBookmarkOutline, IoChatbubbleEllipsesOutline, IoFileTrayStackedOutline, IoMailOpenOutline } from "react-icons/io5";
import Logo from "../Logo/Logo";
const menu = [
  { name: "question", badge: false, badgeValue: "", icon: <AiOutlineQuestionCircle /> },
  { name: "jobs", badge: false, badgeValue: "", icon: <IoBriefcaseOutline /> },
  { name: "documentation", badge: true, badgeValue: "new", icon: <IoDocumentTextOutline /> },
  { name: "tags", badge: false, badgeValue: "", icon: <IoPricetagsOutline /> },
  { name: "users", badge: false, badgeValue: "", icon: <IoPersonOutline /> },
  { name: "badges", badge: false, badgeValue: "", icon: <IoBookmarkOutline /> },
  { name: "ask question", badge: false, badgeValue: "", icon: <IoChatbubbleEllipsesOutline /> },
  { name: "stack exchange", badge: false, badgeValue: "", icon: <IoFileTrayStackedOutline /> },
  { name: "inbox", badge: true, badgeValue: "24", icon: <IoMailOpenOutline /> },
]

const Menu = ({ icon, name, badge, badgeValue, activeTab, setActiveTab }) => {
  const isSelected = activeTab === name;
  const layerStyle = isSelected ? 'activeTab' : 'baseTab';
  const activeSideBar = isSelected && 'activeTabSideBar';
  const activeIcon = isSelected && 'selectedIcon';

  const handleActiveTab = () => {
    setActiveTab(name);
  }

  return (
    <HStack w="100%" onClick={handleActiveTab} direction="row" layerStyle={layerStyle} fontSize="xs" spacing="0.5rem" _hover={{ cursor: "pointer", color: "#95a5a6" }}>
      <Box width="3px" h="1.5rem" mr="1rem" layerStyle={activeSideBar} />
      <Box layerStyle={activeIcon}>{icon}</Box>
      <Text fontWeight="medium">{name.toLocaleUpperCase()}</Text>
      {badge && <Badge colorScheme='orange'>{badgeValue}</Badge>}
    </HStack>
  )
}

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState(menu[0].name);

  return (
    <VStack borderRight="1px" borderRightColor="#ecf0f1" w="20%" h="100%">
      <Box pb="3rem">
        <Logo />
      </Box>
      <VStack alignItems="flex-start" spacing="1rem">
        {menu && menu.map((item, index) => (
          <Menu key={index} badge={item.badge} badgeValue={item.badgeValue} icon={item.icon} name={item.name} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </VStack>
    </VStack>
  )
}

