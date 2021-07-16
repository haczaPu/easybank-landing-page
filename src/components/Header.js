import React from 'react';
import { Flex } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';
import DesktopMenu from './DesktopMenu';

const Header = ({ width, isOpen, setOpen }) => {
  const navButtons = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

  return (
    <Flex
      as="header"
      w="100%"
      h="80px"
      bg="neu.white"
      justifyContent="center"
      alignItems="center"
      zIndex="1"
      pos="relative"
    >
      {width <= 767 ? (
        <HamburgerMenu
          isOpen={isOpen}
          setOpen={setOpen}
          navButtons={navButtons}
        />
      ) : (
        <DesktopMenu navButtons={navButtons} />
      )}
    </Flex>
  );
};

export default Header;
