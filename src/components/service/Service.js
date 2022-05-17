import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  MainContainer,
  TextContainer,
  TitleContainer,
  Logo,
  DescriptionContainer,
  Description,
  LinksContainer,
  LinkItem,
  MobileImagesContainer
} from './Service.styled.js';

const Service = ({ id, title, description, url }) => {
  return (
    <MainContainer>
      <TextContainer>
        <TitleContainer>
          <Logo>
            <Image
              src='/logo/logo-transparent-bg.png'
              height='40px'
              width='40px'
            />
          </Logo>
          <h2>{title}</h2>
        </TitleContainer>
        <DescriptionContainer>
          <Description>{description}</Description>
          <LinksContainer>
            <LinkItem>
              <Link href={url}>
                <a><strong>{'>'} More Info</strong></a>
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href='/contact'>
                <a><strong>{'>'} Get In Touch</strong></a>
              </Link>
            </LinkItem>
          </LinksContainer>
        </DescriptionContainer>
      </TextContainer>
      {
        id === 'web' &&
          <Image
            src='/screens/web-dev-both-screens.png'
            height='600px'
            width='900px'
          />
      }
      {
        id === 'mobile' &&
          <MobileImagesContainer>
            <Image
              src='/screens/mobile-1.png'
              height='600px'
              width='300px'
            />
            <Image
              src='/screens/mobile-2.png'
              height='600px'
              width='300px'
            />
            <Image
              src='/screens/mobile-3.png'
              height='600px'
              width='300px'
            />
          </MobileImagesContainer>
      }
    </MainContainer>
  );
};

Service.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Service;
