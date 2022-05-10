import { Navbar, Brand, LinksList, Link } from './Navbar.styled';

export default () => {
  return (
    <Navbar>
      <Brand>James Smith</Brand>
      <LinksList>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </LinksList>
    </Navbar>
  );
};
