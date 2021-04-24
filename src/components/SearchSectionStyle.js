import styled from 'styled-components';
import { borderRadius, purple, yellow, green } from '../shared/theme';

export const SearchSectionStyle = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 30px 0;
  background-color: ${purple};
  padding: 15px 35px;
  border-radius: ${borderRadius};
  height: 40px;
  box-sizing: content-box;
  grid-template-rows: 3/4;

  & form,
  & div {
    height: 100%;
  }

  & form {
    width: 50%;
  }

  & div {
    width: 30%;
  }

  & button {
    padding: 10px 5px;
    border-radius: 5px;
    border: none;
    font-weight: 700;
    font-size: 1em;
    transition: all 0.3s;
    outline: none;
    border: 2px solid transparent;

    background-color: #91ead5;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    height: 100%;
    width: 100%;

    &:hover {
      background-color: #f3c34b;

      /* background-color: #ffe5ee; */
    }

    &:focus {
      border: 2px solid white;
    }
  }
  & input {
    padding: 5px 10px;
    border-radius: 5px;
    outline: none;
    border: 2px solid transparent;
    font-size: 1rem;
    cursor: pointer;
    background-color: white;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    width: 100%;

    &:focus {
      border: 2px solid #8c97fc;
    }
  }
`;
