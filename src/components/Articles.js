import React from 'react';
import { Flex, Heading, VStack, Image, Grid, Text } from '@chakra-ui/react';

const Articles = () => {
  return (
    <Flex
      bg="neu.lightCyan"
      as="section"
      w="100%"
      h="full"
      justifyContent="center"
      fontFamily="main"
      p="90px 0 80px 0"
    >
      <VStack
        w="1200px"
        p={['0 25px', '0 45px', '0 45px', '0 45px']}
        spacing="58px"
      >
        <Heading as="h2" alignSelf={['center', 'center', 'start', 'start']}>
          Latest Articles
        </Heading>
        <Grid
          gridTemplateColumns={[
            '1fr',
            '1fr',
            'repeat(4, 1fr)',
            'repeat(4, 1fr)',
          ]}
          gridGap={['20px 0', '20px 0', '0 20px ', '0 20px']}
        >
          <Flex direction="column" as="article" bg="white" borderRadius="5px">
            <Image
              h="200px"
              src="./assets/images/image-currency.jpg"
              alt="currency"
              borderRadius="5px 5px 0 0"
              objectFit="cover"
            ></Image>
            <VStack p="30px 25px" alignItems="flex-start">
              <Text
                as="p"
                w="100%"
                fontSize="14px"
                fontFamily="Public Sans, sans-serif"
                color="neu.blue"
              >
                By Claire Robinson
              </Text>
              <Heading
                as="h4"
                fontSize="18px"
                cursor="pointer"
                _hover={{
                  color: 'neu.green',
                }}
              >
                Recive money in any currency with no fees
              </Heading>
              <Text
                as="p"
                fontFamily="Public Sans, sans-serif"
                color="neu.blue"
                fontSize="14px"
                letterSpacing="-1px"
              >
                Receive money in any currency with no fees The world is getting
                smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single …
              </Text>
            </VStack>
          </Flex>
          <Flex direction="column" as="article" bg="white" borderRadius="5px">
            <Image
              h="200px"
              src="./assets/images/image-restaurant.jpg"
              alt="restaurant"
              borderRadius="5px 5px 0 0"
              objectFit="cover"
            ></Image>
            <VStack p="30px 25px" alignItems="flex-start">
              <Text
                as="p"
                w="100%"
                fontSize="14px"
                fontFamily="Public Sans, sans-serif"
                color="neu.blue"
              >
                By Wilson Hutton
              </Text>
              <Heading
                as="h4"
                fontSize="20px"
                cursor="pointer"
                _hover={{
                  color: 'neu.green',
                }}
              >
                Treat yourself without worrying about money
              </Heading>
              <Text
                as="p"
                fontFamily="Public Sans, sans-serif"
                color="neu.blue"
                fontSize="14px"
                letterSpacing="-1px"
              >
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </Text>
            </VStack>
          </Flex>
          <Flex direction="column" as="article" bg="white" borderRadius="5px">
            <Image
              h="200px"
              src="./assets/images/image-plane.jpg"
              alt="plane"
              borderRadius="5px 5px 0 0"
              objectFit="cover"
            ></Image>
            <VStack p="30px 25px" alignItems="flex-start">
              <Text
                as="p"
                w="100%"
                fontSize="14px"
                fontFamily="Public Sans, sans-serif"
                color="neu.blue"
              >
                By Wilson Hutton
              </Text>
              <Heading
                as="h4"
                fontSize="20px"
                cursor="pointer"
                _hover={{
                  color: 'neu.green',
                }}
              >
                Take your Easybank card wherever you go
              </Heading>
              <Text
                as="p"
                fontFamily="Public Sans, sans-serif"
                color="neu.blue"
                fontSize="14px"
                letterSpacing="-1px"
              >
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </Text>
            </VStack>
          </Flex>
          <Flex direction="column" as="article" bg="white" borderRadius="5px">
            <Image
              h="200px"
              src="./assets/images/image-confetti.jpg"
              alt="confetti"
              borderRadius="5px 5px 0 0"
              objectFit="cover"
            ></Image>
            <VStack p="30px 25px" alignItems="flex-start">
              <Text
                as="p"
                w="100%"
                fontSize="14px"
                fontFamily="Public Sans, sans-serif"
                color="neu.blue"
              >
                By Claire Robinson
              </Text>
              <Heading
                as="h4"
                fontSize="20px"
                cursor="pointer"
                _hover={{
                  color: 'neu.green',
                }}
              >
                Our invite-only Beta accounts are now live!
              </Heading>
              <Text
                as="p"
                fontFamily="Public Sans, sans-serif"
                color="neu.blue"
                fontSize="14px"
                letterSpacing="-1px"
              >
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </Text>
            </VStack>
          </Flex>
        </Grid>
      </VStack>
    </Flex>
  );
};

export default Articles;
