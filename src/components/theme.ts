// chakra-theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'white' : 'gray.800',
        color: props.colorMode === 'light' ? 'black' : 'white',
      },
    }),
  },
});

export default theme;
