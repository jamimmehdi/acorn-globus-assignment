import { Box, HStack, VStack } from '@chakra-ui/react';
import Feed from './components/Feed';
import Footer from './components/Footer';
import Rightbar from './components/Rightbar';
import Sidebar from "./components/Sidebar"
import Topbar from './components/Topbar';

function App() {
  return (
    <Box w="100%" fontSize='sm'>
      <HStack h="100vh" alignItems="flex-start" spacing="0">
        <Sidebar />
        <VStack width="100%" h="100%">
          <Topbar />
          <HStack w="100%" h="100%">
            <Feed />
            <Rightbar />
          </HStack>
        </VStack>
      </HStack>
      <Footer />
    </Box>
  );
}

export default App;
