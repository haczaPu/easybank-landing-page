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
        p={['0 50px', '0 50px', '0 0 0 50px', '0 0 0 50px']}
        maxWidth={['full', 'full', 'full', '1200px']}
        pos="relative"
        zIndex="0"
        direction={['column-reverse', 'column-reverse', 'row', 'row']}
        alignItems="center"
        _before={{
          position: 'absolute',
          content: "''",
          right: { sm: '0', md: '-42%', lg: '-42%', xl: '-42%' },
          top: {
            sm: '-24%',
            md: '-15%',
            lg: '-15%',
            xl: '-15%',
          },
          w: '100%',
          h: '100%',
          bgImage: {
            sm: "url('./assets/images/bg-intro-mobile.svg')",
            md: "url('./assets/images/bg-intro-desktop.svg')",
            lg: "url('./assets/images/bg-intro-desktop.svg')",
            xl: "url('./assets/images/bg-intro-desktop.svg')",
          },
          bgSize: '111%',
          bgRepeat: 'no-repeat',
          zIndex: '-1',
        }}
      >
        <Flex direction="column" justifyContent="center" w="380px">
          <Heading fontSize="50px">Next generation digital banking</Heading>
          <Text
            mt="35px"
            fontSize="19px"
            color="neu.blue"
            fontWeight="400"
            textAlign={['center', 'center', 'left', 'left']}
          >
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more
          </Text>
          <Button
            mt="35px"
            mb={['50px', '50px', '0', '0']}
            alignSelf={['center', 'center', 'start', 'start']}
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
        <Box position="relative" left={['0%', '0%', '10%', '20%']}>
          <Image
            width={['100%', '100%', '120%', '120%']}
            maxW="767px"
            mt={['-36%', '-36%', '0', '0']}
            zIndex="auto"
            src="./assets/images/image-mockups.png"
            alt="mockups"
          ></Image>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TopSection;
