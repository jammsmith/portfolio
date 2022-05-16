import Head from 'next/head';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import Service from '../components/service/Service.js';

const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: '/services/web-development'
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: '/services/mobile-development'
  },
  {
    id: 'extra',
    title: 'Extra stuff!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: '/services/web-development'
  }
];

export default () => {
  return (
    <>
      <Head>
        <title>James Smith | App Developer</title>
        <meta name='description' content='Web and mobile app development by James Smith.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Home>
        <Intro>
          <Image
            src='/logo/home-big-logo.png'
            height='300px'
            width='200px'
          />
          <IntroText>
            <IntroTextItem>Hi!</IntroTextItem>
            <IntroTextItem>I’m James, a web and mobile developer based in the Peak District, UK</IntroTextItem>
          </IntroText>
        </Intro>
        <Services>
          {
            services.map((service, index) =>
              <Service
                key={index}
                title={service.title}
                description={service.description}
                url={service.url}
              />
            )
          }
        </Services>
      </Home>
    </>
  );
};

// Styles ->

// Page
const Home = styled.div`
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Intro section
const Intro = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.space[4]};
    height: ${`calc(100vh - ${theme.sizes[3]})`};
  `};
`;

const IntroText = styled.div`  
  padding-top: 1rem;
  width: 600px;
`;

const IntroTextItem = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h2};
    line-height: ${theme.lineHeights.h2};
    margin: ${`0 0 ${theme.space[3]} 0`};
  `}
`;

// Services
const Services = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg.secondary};
    display: flex;
    flex-direction: column;
    gap: ${theme.space[5]};
    padding: ${theme.space[5]};
    width: 100%;
  `}
`;
