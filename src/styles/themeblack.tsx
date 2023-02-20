import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: '#0a0604',
    primary: '#E1DEE3',
    secoundary: '#B9314F',
    third: '#19647e'
  },
  fonts: {
    PressStart2P: '"Press Start 2P", cursive',
    Raleway: '"Raleway", sans-serif'
  },
  fontSize: {
    small: '18px',
    mid: '24px',
    large: '32px',
    xlarge: '36px'
  }
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;