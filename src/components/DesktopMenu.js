import React from 'react';
import { Image, HStack, Button } from '@chakra-ui/react';

const DesktopMenu = ({ navButtons }) => {
  return (
    <HStack p="0 50px" w="1200px" justifyContent="space-between">
      <Image src="./assets/images/logo.svg" alt="logo" cursor="pointer" />
      <HStack as="nav" spacing="-5px" fontSize="40px">
        {navButtons.map((name, index) => (
          <Button
            bg="white"
            key={index}
            h="80px"
            borderBottom="4px solid white "
            _hover={{ borderBottom: '4px solid hsl(136, 65%, 51%)' }}
          >
            {name}
          </Button>
        ))}
      </HStack>
      <Button
        variant="cta"
        _hover={{
          bgGradient: 'linear(to-r, hsl(136, 65%, 75%),hsl(192, 70%, 75%))',
        }}
      >
        Request Invite
      </Button>
    </HStack>
  );
};

export default DesktopMenu;
