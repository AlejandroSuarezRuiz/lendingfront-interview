import Head from 'next/head';
import { Props } from './interface';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import Navbar from '../navbar';
import Footer from '../footer';
import { mainTheme } from './theme';
import { QueryClient, QueryClientProvider } from "react-query";

const StyledLayout = styled.div`
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  box-sizing: border-box;
  position: relative;
  background-color: ${props => props.theme.BackgroundGray};

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`;

const BackgroundEffect = styled.div`
  background-color: ${props => props.theme.Aqua};
  position: absolute;
  top: 0;
  width: 100%;
  height: 240px;
  z-index: 1;
`;

const ContentContainer = styled.div`
  z-index: 2;
  position: relative;
  flex-grow: 1;

  max-width: 1200px;
  width: 100%;
  margin: 24px auto;
`;

const Layout = ({children}: Props) => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return(
    <ThemeProvider theme={mainTheme}> 
      <QueryClientProvider client={queryClient}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
        </Head>

        <GlobalStyle /> 
        <StyledLayout>
          <BackgroundEffect />
          <Navbar />
          <ContentContainer>
            {children}
          </ContentContainer>
          <Footer />
        </StyledLayout>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default Layout;