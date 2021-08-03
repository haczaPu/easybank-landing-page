import React from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Image, HStack, Flex, Button, Box } from '@chakra-ui/react';

const HamburgerMenu = ({ isOpen, setOpen, navButtons }) => {
  return (
    <HStack p="0 25px" w="1200px" justifyContent="space-between">
      <Image src="./assets/images/logo.svg" alt="logo" cursor="pointer" />
      <Hamburger toggled={isOpen} toggle={setOpen} color="hsl(233, 26%, 24%)" />
      {isOpen ? (
        <Flex
          p="0 20px 20px 20px"
          direction="column"
          w="calc(100% - 50px)"
          bg="neu.white"
          as="nav"
          position="absolute"
          top="105px"
          left="25px"
          borderRadius="5px"
          marginInlineStart="0 !important"
        >
          {navButtons.map((name, index) => (
            <Button
              color="pri.blue"
              bg="none"
              key={index}
              h="30px"
              mt="20px"
              _hover={{
                fontWeight: 900,
              }}
            >
              {name}
            </Button>
          ))}
          <Box
            w="100vw"
            h="calc(100vh - 105px)"
            position="absolute"
            bgGradient="linear(to-b, pri.blue,hsla(192, 70%, 75%, 0))"
            top="-25px"
            left="-25px"
            zIndex="-1"
          ></Box>
        </Flex>
      ) : null}
    </HStack>
  );
};

export default HamburgerMenu;
