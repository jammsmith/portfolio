import Link from 'next/link';
import Image from 'next/image';

import {
  MainContainer,
  TextContainer,
  TitleContainer,
  DescriptionContainer,
  Description,
  LinksContainer,
  LinkItem,
  ImagesContainer,
  BigImage,
  SmallImage
} from './Service.styled.js';

const Service = ({ title, description, url }) => {
  return (
    <MainContainer>
      <TextContainer>
        <TitleContainer>
          <Image
            src='/logo/logo-transparent-bg.png'
            height='40px'
            width='40px'
          />
          <h2>{title}</h2>
        </TitleContainer>
        {/* Empty div maintains layout (TitleContainer is position absolute) */}
        <div />
        <DescriptionContainer>
          <Description>{description}</Description>
          <LinksContainer>
            <LinkItem>
              <Link href={url}>
                <a><strong>{'> More Info'}</strong></a>
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href='/contact'>
                <a><strong>{'> Get In Touch'}</strong></a>
              </Link>
            </LinkItem>
          </LinksContainer>
        </DescriptionContainer>
      </TextContainer>
      <ImagesContainer>
        <BigImage>
          <Image
            src='/screens/dd-laptop.png'
            height='400px'
            width='600px'
          />
        </BigImage>
        <SmallImage>
          <Image
            src='/screens/dd-tablet.png'
            height='300px'
            width='400px'
          />
        </SmallImage>
      </ImagesContainer>
    </MainContainer>
  );
};

export default Service;
