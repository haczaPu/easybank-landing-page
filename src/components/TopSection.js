import React from 'react';
import { Flex, Heading, Button, Text, Image, Box } from '@chakra-ui/react';

const TopSection = () => {
  return (
    <Flex
      as="section"
      w="100%"
      h={['full', 'full', '656px', '656px']}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        p="0 50px"
        w={['full', 'full', 'full', '1200px']}
        pos="relative"
        zIndex="0"
        direction={['column-reverse', 'column-reverse', 'row', 'row']}
      >
        <Flex direction="column" justifyContent="center" w="380px">
          <Heading fontSize="50px">Next generation digital banking</Heading>
          <Text mt="35px" fontSize="19px" color="neu.blue" fontWeight="400">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more
          </Text>
          <Button
            mt="35px"
            alignSelf="start"
            variant="cta"
            _hover={{
              bgGradient: 'linear(to-r, hsl(136, 65%, 75%),hsl(192, 70%, 75%))',
            }}
          >
            Request Invite
          </Button>
          {/* <Image
            zIndex="-1 "
            pos="absolute"
            top="-450"
            left="570"
            src="./assets/images/bg-intro-desktop.svg"
          ></Image> */}
        </Flex>
        <Box>
          <Image
            h="auto"
            zIndex="auto"
            // pos={['static', 'relative', 'absolute', 'absolute']}
            pos="relative"
            top="0px"
            // left={['0px', '0px', '55%', '55%']}
            src="./assets/images/image-mockups.png"
            alt="mockups"
          ></Image>
        </Box>

        {/* <Box
          h="656px"
          w="full"
          bg="yellow"
          bgImage="url(./assets/images/bg-intro-desktop.svg)"
          bgPosition={['100% 68%', '100% 68%', '100% 0%', '-20% 68%']}
          bgRepeat="no-repeat"
        ></Box> */}
      </Flex>
    </Flex>
  );
};

export default TopSection;
