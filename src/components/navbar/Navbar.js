import Image from 'next/image';

import { Navbar, Brand, LinksList, Link } from './Navbar.styled';

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
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </LinksList>
    </Navbar>
  );
};
