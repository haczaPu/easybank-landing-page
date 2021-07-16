import React from 'react';
import {
  Image,
  Flex,
  VStack,
  IconButton,
  Button,
  Text,
} from '@chakra-ui/react';
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      h="full"
      bg="pri.blue"
      justifyContent="center"
      alignItems="center"
      fontFamily="main"
    >
      <Flex
        w="1200px"
        h="full"
        p="50px"
        justifyContent="space-between"
        direction={['column', 'column', 'row', 'row']}
        alignItems={['center', 'center', 'normal', 'normal']}
      >
        <Flex
          direction={['column', 'column', 'row', 'row']}
          alignItems={['center', 'center', 'normal', 'normal']}
        >
          <Flex
            w="full"
            direction="column"
            h="full"
            justifyContent="space-between"
            alignItems={['center', 'center', 'normal', 'normal']}
          >
            <Image
              src="./assets/images/logo-white.svg"
              alt="logo"
              cursor="pointer"
              w="139px"
              h="20px"
            />
            <Flex
              mt={['20px', '20px', '0', '0']}
              pl={['10px', '10px', '0', '0']}
            >
              <IconButton
                color="neu.white"
                fontSize="25px"
                variant="unstyled"
                aria-label="facebook"
                _hover={{ color: 'neu.green' }}
                icon={<FaFacebookSquare />}
              />
              <IconButton
                color="neu.white"
                fontSize="25px"
                variant="unstyled"
                aria-label="youtube"
                _hover={{ color: 'neu.green' }}
                icon={<FaYoutube />}
              />
              <IconButton
                color="neu.white"
                fontSize="25px"
                variant="unstyled"
                aria-label="twitter"
                _hover={{ color: 'neu.green' }}
                icon={<FaTwitterSquare />}
              />
              <IconButton
                color="neu.white"
                fontSize="25px"
                variant="unstyled"
                aria-label="pinterest"
                _hover={{ color: 'neu.green' }}
                icon={<FaPinterestSquare />}
              />
              <IconButton
                color="neu.white"
                fontSize="25px"
                variant="unstyled"
                aria-label="instagram"
                _hover={{ color: 'neu.green' }}
                icon={<FaInstagram />}
              />
            </Flex>
          </Flex>
          <VStack
            mt={['35px', '35px', '0', '0']}
            pl={['0', '0', '60px', '130px']}
            alignItems={['center', 'center', 'start', 'start']}
          >
            <Button
              color="neu.white"
              variant="link"
              _hover={{ color: 'neu.green' }}
            >
              Abou Us
            </Button>
            <Button
              pt="10px"
              color="neu.white"
              variant="link"
              _hover={{ color: 'neu.green' }}
            >
              Contact
            </Button>
            <Button
              pt="10px"
              color="neu.white"
              variant="link"
              _hover={{ color: 'neu.green' }}
            >
              Blog
            </Button>
          </VStack>
          <VStack
            mt={['20px', '20px', '0', '0']}
            pl={['0', '0', '60px', '130px']}
            alignItems={['center', 'center', 'start', 'start']}
          >
            <Button
              color="neu.white"
              variant="link"
              _hover={{ color: 'neu.green' }}
            >
              Careers
            </Button>
            <Button
              pt="10px"
              color="neu.white"
              variant="link"
              _hover={{ color: 'neu.green' }}
            >
              Support
            </Button>
            <Button
              pt="10px"
              color="neu.white"
              variant="link"
              _hover={{ color: 'neu.green' }}
            >
              Privacy Policy
            </Button>
          </VStack>
        </Flex>
        <Flex
          direction="column"
          h="100%"
          alignItems={['center', 'center', 'flex-end', 'flex-end']}
          justifyContent="space-between"
          color="neu.blue"
          fontFamily="Public Sans, sans-serif"
        >
          <Button
            mt={['35px', '35px', '0', '0']}
            variant="cta"
            _hover={{
              bgGradient: 'linear(to-r, hsl(136, 65%, 75%),hsl(192, 70%, 75%))',
            }}
          >
            Request Invite
          </Button>
          <Text fontSize="14px" pt="15px" textAlign="right">
            © Easybank. All Rights Reserved
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
