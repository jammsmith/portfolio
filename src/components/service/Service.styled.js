import styled, { css } from 'styled-components';

export const MainContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.space[3]};
    margin: auto;
    width: 800px;
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 40px;
  align-items: center;
  position: absolute;
  left: -48px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 0.6;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LinkItem = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const ImagesContainer = styled.div`
  width: 800px;
  height: 450px;
  position: relative;
`;

export const BigImage = styled.div`
  position: absolute;
  z-index: 1;
`;

export const SmallImage = styled.div`
  position: absolute;
  bottom: 4rem;
  right: -4rem;
  z-index: 2;
`;
