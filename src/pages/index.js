import Head from 'next/head';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import Service from '../components/service/Service.js';

const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'I can offer a full range of web development services. Responsive designs as standard so your website will look great on all devices.  I only use modern technologies so you can be sure your website will be lightning fast as well as being highly optimised for search engines.',
    url: '/services/web-development'
  },
  {
    id: 'eCommerce',
    title: 'eCommerce',
    description: 'I can offer highly featured, bespoke e-commerce applications. These apps can be designed specifically to the needs of your business, whether that\'s to sell a single product or hundreds of products with full inventory management.',
    url: '/services/e-commerce'
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
            <IntroTextItem>I’m James, a freelance web developer based in the Peak District, UK</IntroTextItem>
          </IntroText>
        </Intro>
        <Services>
          {
            services.map((service, index) =>
              <>
                <Service
                  key={index}
                  title={service.title}
                  description={service.description}
                  url={service.url}
                />
                {index < services.length - 1 && <HRule />}
              </>
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

const HRule = styled.hr`
  border: ${({ theme }) => `1px solid ${theme.colors.bg.quarternary}`};
  border-radius: 5px;
  opacity: 0.2;
  width: 25%;
`;
