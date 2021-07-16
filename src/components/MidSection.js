import React from 'react';
import { Flex, Heading, Text, VStack, Grid, Image } from '@chakra-ui/react';

const MidSection = () => {
  return (
    <Flex
      as="section"
      w="100%"
      h="full"
      justifyContent="center"
      bg="neu.lightBlue"
      p={['40px 0', '40px 0', '90px 0', '90px 0']}
    >
      <VStack
        w="1200px"
        p={['0 40px', '0 100px', '0 45px', '0 45px']}
        justifyContent="space-between"
      >
        <VStack w="100%" spacing="30px">
          <Heading
            as="h2"
            w="100%"
            fontSize={['30px', '35px', '40px', '40px']}
            textAlign={['center', 'center', 'left', 'left']}
          >
            Why choose Easybank?
          </Heading>
          <Text
            fontSize={['13px', '15px', '18px', '18px']}
            textAlign={['center', 'center', 'left', 'left']}
            as="p"
            w={['full', 'full', '60%', '60%']}
            color="neu.blue"
            alignSelf={['center', 'center', 'start', 'start']}
          >
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </Text>
        </VStack>
        <Grid
          pt={['50px', '50px', '75px', '75px']}
          gridTemplateColumns={[
            '1fr',
            '1fr',
            'repeat(4, 1fr)',
            'repeat(4, 1fr)',
          ]}
          gridGap={['40px 0', '40px 0', '0 20px', '0 20px']}
        >
          <Flex
            direction="column"
            alignItems={['center', 'center', 'flex-start', 'flex-start']}
          >
            <Image src="./assets/images/icon-online.svg" w="72px"></Image>
            <Heading
              as="h3"
              fontSize={['20px', '25px', '25px', '25px']}
              pt="45px"
            >
              Online Banking
            </Heading>
            <Text
              as="p"
              color="neu.blue"
              pt="30px"
              fontSize={['13px', '16px', '18px', '18px']}
              textAlign={['center', 'center', 'left', 'left']}
            >
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </Text>
          </Flex>
          <Flex
            direction="column"
            alignItems={['center', 'center', 'flex-start', 'flex-start']}
          >
            <Image src="./assets/images/icon-budgeting.svg" w="72px"></Image>
            <Heading
              as="h3"
              fontSize={['20px', '25px', '25px', '25px']}
              pt="45px"
            >
              Simple Budgeting
            </Heading>
            <Text
              as="p"
              color="neu.blue"
              pt="30px"
              fontSize={['13px', '16px', '18px', '18px']}
              textAlign={['center', 'center', 'left', 'left']}
            >
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </Text>
          </Flex>
          <Flex
            direction="column"
            alignItems={['center', 'center', 'flex-start', 'flex-start']}
          >
            <Image src="./assets/images/icon-onboarding.svg" w="72px"></Image>
            <Heading
              as="h3"
              fontSize={['20px', '25px', '25px', '25px']}
              pt="45px"
            >
              Fast Onboarding
            </Heading>
            <Text
              as="p"
              color="neu.blue"
              pt="30px"
              fontSize={['13px', '16px', '18px', '18px']}
              textAlign={['center', 'center', 'left', 'left']}
            >
              Fast Onboarding We don’t do branches. Open your account in minutes
              online and start taking control of your finances right away.
            </Text>
          </Flex>
          <Flex
            direction="column"
            alignItems={['center', 'center', 'flex-start', 'flex-start']}
          >
            <Image src="./assets/images/icon-api.svg" w="72px"></Image>
            <Heading
              as="h3"
              fontSize={['20px', '25px', '25px', '25px']}
              pt="45px"
            >
              Open API
            </Heading>
            <Text
              as="p"
              color="neu.blue"
              pt="30px"
              fontSize={['13px', '16px', '18px', '18px']}
              textAlign={['center', 'center', 'left', 'left']}
            >
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </Text>
          </Flex>
        </Grid>
      </VStack>
    </Flex>
  );
};

export default MidSection;
