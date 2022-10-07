import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { newTheme } from './components/utils/ThemeStyle/Themes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={newTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
