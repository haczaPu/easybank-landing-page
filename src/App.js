import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from './style/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import TopSection from './components/TopSection';
import Articles from './components/Articles';
import MidSection from './components/MidSection';
import { useState, useEffect } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(false);

  //Window size listener
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <Header width={width} isOpen={isOpen} setOpen={setOpen} />
      <TopSection />
      <MidSection />
      <Articles />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
