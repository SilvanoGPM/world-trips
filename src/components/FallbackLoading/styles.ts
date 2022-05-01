import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  margin-top: ${({ theme }) => theme.sizes.medium};
  color: ${({ theme }) => theme.colors.highlight};
`;
