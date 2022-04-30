import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    highlight: '#e20e8d',
    background: '#030518',
    white: '#eeeeee',
  },

  zIndexes: {
    one: 1,
    dropdown: 1000,
    fixed: 1100,
    modal: 1200,
  },

  sizes: {
    small: '1.5rem',
    medium: '3rem',
    large: '5rem',
    container: '100rem',
  },
};
