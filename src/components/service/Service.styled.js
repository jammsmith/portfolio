import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.space[4]};
    margin: auto;
    width: 50rem;
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  position: relative;
`;

export const Logo = styled.span`
  position: absolute;
  left: -48px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
  flex: 0.6;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[1]};
`;

export const LinkItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[0]};
`;

export const MobileImagesContainer = styled.div`
  display: flex;
`;
