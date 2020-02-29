import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1020px;
  margin: auto;
  padding: 0 5rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Wrapper = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 4px;
  width: 100%;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#7159c1')};
      }
    }
  }

  @media (max-width: 440px) {
    footer {
      flex-direction: column;
      align-items: flex-start;

      > div {
        width: 100%;

        > strong {
          font-size: 22px;
        }
      }

      button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
`;

export const ProductTable = styled.div`
  width: 100%;

  > span {
    font-size: 20px;
    color: #333;
    font-weight: 600;
  }

  strong {
    color: #333;
    display: block;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const TextEmptyCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: Arial, Helvetica, sans-serif;
    color: #666;
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;
    padding: 1rem;
  }
`;

export const ProductTableBody = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > div {
    border-bottom: 1px solid #eee;
    width: 100%;

    @media (max-width: 440px) {
      flex-direction: column;
    }
  }
`;

export const ProductImage = styled.div`
  margin-right: 2rem;

  img {
    height: 100px;
  }

  @media (max-width: 440px) {
    margin-right: 0;

    img {
      max-width: 200px;
      height: auto;
    }
  }
`;

export const ProductInfo = styled.div`
  flex: 2;
  padding: 0.75rem 1rem;
  margin-right: 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  > div {
    width: 100%;
    margin-bottom: 3px;

    > span {
      display: block;
      margin: 5px 10px;
      font-size: 18px;
      font-weight: bold;
      text-align: left;
      color: #666;
    }
  }

  @media (max-width: 440px) {
    padding: 0;
    width: 100%;

    > div {
      > span {
        margin: 5px 0px;
      }

      > strong {
        margin-left: 5px;
      }
    }
  }
`;

export const ProductTitle = styled.div`
  margin-top: 1rem;

  > span:last-child {
    font-size: 14px;
    font-weight: 600;
    color: #666;
  }

  @media (max-width: 440px) {
    flex-direction: column;

    > span {
      width: 100%;
    }

    > strong {
      margin: 0 !important;
    }
  }
`;
