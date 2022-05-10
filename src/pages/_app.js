import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};
