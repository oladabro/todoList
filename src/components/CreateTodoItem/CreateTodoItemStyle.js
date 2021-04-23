import styled from 'styled-components';

export const CreateTodoItemStyle = styled.form`
  margin: 0 auto;
  padding: 30px 0;
  background-color: rgba(255, 193, 47, 255);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 30px 30px;

  & div:first-child {
    width: 50%;
    display: flex;
    align-items: flex-end;
  }

  & div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  & textarea {
    flex-grow: 1;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    outline: none;
    border: 2px solid transparent;

    &:focus {
      border: 2px solid #8c97fc;
    }
  }

  & small {
    width: 1rem;
    margin-left: 5px;
    padding: 0 5px;
    font-size: 0.65rem;
  }

  & button {
    padding: 10px 50px;
    border-radius: 5px;
    border: none;
    font-size: 1.1rem;
    transition: 0.3s;
    outline: none;
    border: 2px solid transparent;
    background-color: #8c97fc;
    cursor: pointer;

    &:focus {
      border: 2px solid #8c97fc;
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
  }

  & select:focus {
    border: 2px solid #8c97fc;
  }
`;
