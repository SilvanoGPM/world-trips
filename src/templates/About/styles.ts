import styled from 'styled-components';

export const Content = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  max-width: ${({ theme }) => theme.sizes.container};
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.sizes.large};
  margin-bottom: ${({ theme }) => theme.sizes.large};
`;

export const Body = styled.div`
  p {
    font-size: ${({ theme }) => theme.sizes.medium};
    line-height: ${({ theme }) => theme.sizes.medium};
    max-width: calc(${({ theme }) => theme.sizes.container} / 1.2);
    margin-bottom: ${({ theme }) => theme.sizes.medium};
  }
`;
