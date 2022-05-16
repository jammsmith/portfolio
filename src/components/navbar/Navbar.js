import Image from 'next/image';
import Link from 'next/link';

import { Navbar, Brand, LinksList, LinkItem } from './Navbar.styled';

export default () => {
  return (
    <Navbar>
      <Brand>
        <Image
          src='/logo/logo-transparent-bg.png'
          height='40px'
          width='40px'
        />
        James Smith
      </Brand>
      <LinksList>
        <LinkItem>
          <Link href='/'><a>Home</a></Link>
        </LinkItem>
        <LinkItem>
          <Link href='/about'><a>About</a></Link>
        </LinkItem>
        <LinkItem>
          <Link href='/contact'><a>Contact</a></Link>
        </LinkItem>
      </LinksList>
    </Navbar>
  );
};
