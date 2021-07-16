import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'neu.white',
        color: 'black',
        fontFamily: 'Public Sans, sans-serif',
        overflowX: 'hidden',
        mx: '0',
        marginInlineStart: '0',
      },
    },
  },
  colors: {
    pri: {
      blue: 'hsl(233, 26%, 24%)',
      green: 'hsl(136, 65%, 51%)',
      cyan: 'hsl(192, 70%, 51%)',
    },
    neu: {
      green: '#22cc8d',
      blue: 'hsl(233, 8%, 62%)',
      lightBlue: 'hsl(220, 16%, 96%)',
      lightCyan: 'hsl(0, 0%, 98%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'none',
        color: 'neu.blue',
        fontWeight: 'normal',
        fontFamily: 'Public Sans, sans-serif',
      },
      variants: {
        cta: {
          color: 'neu.white',
          h: '44px',
          w: '160px',
          bgGradient: 'linear(to-r, pri.green,pri.cyan)',
          borderRadius: '44px',
          fontWeight: '700',
          fontFamily: 'Public Sans, sans-serif',
          fontSize: '14px',
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'pri.blue',
        fontWeight: 'normal',
        fontFamily: 'Public Sans, sans-serif',
      },
    },
    Image: {
      variants: {
        article: {
          width: '555px',
          h: '500px',
          borderRadius: '25px 5px 0 0',
        },
      },
    },
  },
});
