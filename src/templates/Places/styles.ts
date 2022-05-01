import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.sizes.large} ${theme.sizes.medium}`};
`;

export const Container = styled.section`
  max-width: ${({ theme }) => theme.sizes.container};
  margin: auto;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.sizes.large};
  margin-bottom: ${({ theme }) => theme.sizes.medium};
`;

export const Body = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.large};

  p {
    margin-bottom: ${({ theme }) => theme.sizes.medium};
  }

  a {
    text-decoration: none;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.sizes.medium};

  img {
    background-color: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #edeef1 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      from {
        background-position: -40rem 0;
      }

      to {
        background-position: 40rem 0;
      }
    }
  }
`;
