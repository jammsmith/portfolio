import styled from 'styled-components';

export const Navbar = styled.nav`
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  height: ${({ theme }) => theme.sizes[3]};
  padding: ${({ theme }) => `0 ${theme.space[5]}`};
  width: 100%;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 2px;
`;

export const LinksList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.space[3]};
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Link = styled.li`
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
