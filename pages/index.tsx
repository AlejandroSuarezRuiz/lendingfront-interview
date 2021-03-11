import Head from 'next/head'
import styled from 'styled-components';
import Title from '../components/title'
import Syndication from '../components/syndication'

/* Index Page
For this technical test, only a index page it's needed,
contains some styles, but basically, most of the logic it's
contained in the <Syndication /> component. */

const Main = styled.main`
  height: 100%;
  position: relative;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>LendingFront - Syndication</title>
      </Head>

      <Main>
        <Title value="Advances for syndication" />
        <Syndication />
      </Main>
    </>
  )
}
