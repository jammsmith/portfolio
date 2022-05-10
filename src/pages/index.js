import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

export default () => {
  return (
    <>
      <Head>
        <title>James Smith | App Developer</title>
        <meta name='description' content='Web and mobile app development by James Smith.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Home>
        <h2>Main intro here</h2>
        <MountainIllustration>
          <Image
            src='/mountain-illustration-cropped.svg'
            width='600px'
            height='600px'
          />
        </MountainIllustration>
      </Home>

    </>
  );
};

// Styles ->
const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => `calc(100vh - ${theme.sizes[3]})`};
  padding: ${({ theme }) => `0 ${theme.space[5]}`};
  position: relative;
`;

// need to figure out how to calculate this dynamically across screen sizes
const MountainIllustration = styled.div`
  position: absolute;
  top: 16rem;
  right: 4rem;
`;
