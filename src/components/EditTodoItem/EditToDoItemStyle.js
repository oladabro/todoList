import styled from 'styled-components';
import * as theme from '../../shared/theme';

export const Button = styled.button`
  grid-column: 2/3;
  grid-row: 2/3;
  padding: ${(props) => props.padding};
  background-color: ${theme.purple};
  align-self: end;
  border: 2px solid transparent;
  border-radius: ${theme.borderRadius};
  font-weight: 700;
  font-size: 1em;
  color: #161515;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${theme.green};
  }
  &:focus {
    outline: none;
    border: 2px solid ${theme.green};
  }
`;

export const EditTodoItemStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 100vh;

  & main {
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    grid-column-gap: 10px;
    padding: 60px 40px;
    border: 2px solid #ddd;
    border-radius: ${theme.borderRadius};
    box-shadow: 0 4.6px 2.2px rgba(0, 0, 75, 0.02),
      0 11px 5.3px rgba(0, 0, 75, 0.028), 0 20.7px 10px rgba(0, 0, 75, 0.035),
      0 36.9px 17.9px rgba(0, 0, 75, 0.042),
      0 68.9px 33.4px rgba(0, 0, 75, 0.05), 0 165px 80px rgba(0, 0, 75, 0.07);
  }

  /* grid-auto-rows: minmax(40px, auto); */

  & div {
    background-color: ${theme.yellow};
    padding: 40px;
    /* align-self: start; */
    border-radius: ${theme.borderRadius};
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
    display: flex;
    flex-direction: column;
  }
  & small {
    align-self: flex-end;
    margin-left: 5px;
    font-size: 0.65rem;
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
  & textarea:focus {
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
    color: #161515;
  }
  & select:focus {
    outline: none;
    border: 2px solid ${theme.purple};
  }
`;
