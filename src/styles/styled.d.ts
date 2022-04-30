import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      highlight: string;
      background: string;
      white: string;
    };

    zIndexes: {
      one: number;
      dropdown: number;
      fixed: number;
      modal: number;
    };

    sizes: {
      small: string;
      medium: string;
      large: string;
      container: string;
    };
  }
}
