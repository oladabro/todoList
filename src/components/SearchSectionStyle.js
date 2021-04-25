import styled from 'styled-components';
import { borderRadius, purple, yellow, green } from '../shared/theme';

export const SearchSectionStyle = styled.section`
  grid-column: 2/3;
  grid-row: 3/4;
  align-self: end;
  display: flex;
  justify-content: space-between;
  /* margin: 30px 0 0 0; */
  background-color: ${purple};
  padding: 40px 35px;
  border-radius: ${borderRadius};
  /* height: 40px; */
  box-sizing: content-box;

  & form,
  & div {
    /* height: 100%; */
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
      border: 2px solid ${green};
    }
  }
`;
