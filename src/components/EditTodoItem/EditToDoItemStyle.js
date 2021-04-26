import styled from 'styled-components';
import * as theme from '../../shared/theme';

export const Button = styled.button`
  grid-column: 2/3;
  grid-row: 2/3;
  padding: ${(props) => props.padding};
  background-color: ${theme.purple};
  align-self: end;

  &:hover {
    cursor: pointer;
  }
`;

export const EditTodoItemStyle = styled.section`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 60vw;
  height: 100vh;

  & main {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  /* grid-auto-rows: minmax(40px, auto); */

  & div {
    background-color: ${theme.yellow};
    padding: 40px;
    /* align-self: start; */
    border-radius: ${theme.borderRadius};
    display: flex;
    /* align-self: center; */
  }

  & div:nth-of-type(1) {
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: start;
  }
  & div:nth-of-type(2) {
    grid-column: 2/3;
    grid-row: 2/3;
    align-self: start;
    /* margin-bottom: 30px; */
    background-color: ${theme.green};
  }
  & small {
    align-self: flex-end;
    margin-left: 5px;
  }
  & textarea {
    width: 80%;
    padding: 10px 10px;
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
    border: 2px solid transparent;
    font-family: 'Nunito', sans-serif;
    font-size: 1em;
  }
  & input:focus {
    outline: none;
    border: 2px solid ${theme.purple};
  }

  & select {
    padding: 5px 10px;
    /* margin-bottom: 20px; */
    border-radius: 5px;
    outline: none;
    border: 2px solid transparent;
    font-size: 1em;
    cursor: pointer;
    background-color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }
`;
