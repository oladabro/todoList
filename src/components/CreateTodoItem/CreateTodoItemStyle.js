import styled from 'styled-components';

export const CreateTodoItemStyle = styled.form`
  margin: 0 auto;
  padding: 30px 35px;
  background-color: rgba(255, 193, 47, 255);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 15px 15px;

  & div:first-child {
    width: 55%;
    display: flex;
    align-items: flex-end;
  }

  & div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  & textarea {
    width: 91%;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    outline: none;
    border: 2px solid transparent;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;

    &:focus {
      border: 2px solid #8c97fc;
    }
  }

  & small {
    width: 1rem;
    margin-left: 5px;
    padding: 0 5px;
    font-size: 0.65rem;
    align-self: flex-end;
    justify-self: flex-start;
  }

  & button {
    padding: 10px 50px;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    transition: 0.3s;
    outline: none;
    border: 2px solid transparent;
    background-color: #8c97fc;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;

    &:focus {
      border: 2px solid white;
    }
  }

  & button:hover {
    background-color: #91ead5;
  }

  & select {
    padding: 5px 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    outline: none;
    border: 2px solid transparent;
    font-size: 1rem;
    cursor: pointer;
    background-color: white;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }

  & select:focus {
    border: 2px solid #8c97fc;
  }
`;
