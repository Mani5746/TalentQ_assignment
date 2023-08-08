import React from 'react';
import { ChakraProvider, Stack, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Banner from './components/Banner/Banner';
import Section from './components/Banner/Section';



function App() {
  return (
    <>
     
      <ChakraProvider theme={theme}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </ChakraProvider>
      <Banner />
      <Section />
    </>
  );
}

export default App;
