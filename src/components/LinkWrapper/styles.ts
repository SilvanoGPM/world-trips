import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndexes.fixed};
  top: ${({ theme }) => theme.sizes.medium};
  left: ${({ theme }) => theme.sizes.medium};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;
