import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1020px;
  margin: auto;
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  width: 100%;

  @media (max-width: 1000px) {
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 440px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 200px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background-color: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background-color: rgba(0, 0, 0, 0.2);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Loading = styled(FaSpinner)`
  color: #fff;
  font-size: 45px;
  animation: ${rotate} 2s infinite;
`;
