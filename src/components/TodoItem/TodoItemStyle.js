import styled from 'styled-components';

export const TodoItemStyle = styled.li`
  padding: 10px 35px;
  background-color: rgba(231, 251, 245, 255);
  margin: 15px 0;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  position: relative;

  & div:first-child::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 12px;
    translate: transform(-50%);
    left: 15px;
    width: 5px;
    height: 50px;
    border-radius: 4px;

    ${(props) => {
      switch (props.color) {
        case 'Low':
          return 'background-color: #20c7a6';

        case 'Medium':
          return 'background-color: #daa84c';
        case 'High':
          return 'background-color: #d49ba5';
      }
    }}
  }

  & p {
    font-weight: 700;
    padding-bottom: 10px;

    ${(props) => {
      switch (props.color) {
        case 'Low':
          return 'color: #20c7a6';
        case 'Medium':
          return 'color: #daa84c';
        case 'High':
          return 'color: #d49ba5';
      }
    }}
  }

  & span {
    color: #484342;
    padding-right: 10px;
  }

  & input {
    margin: 10px;
    cursor: pointer;
    background-color: white;
  }

  & button,
  & a {
    margin: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    transition: 0.3s;
    outline: none;
    border: 2px solid transparent;
    color: #484342;
    background-color: #8ebee3;
    background-color: #fac12d;
    cursor: pointer;

    &:focus {
      border: 2px solid #8c97fc;
    }

    &:hover {
      background-color: #8c97fc;
    }
  }

  & a {
    text-decoration: none;
    background-color: #8c97fc;

    &:hover {
      background-color: #fac12d;
    }
  }

  ${(props) => {
    switch (props.color) {
      case 'Low':
        return 'background-color: #e7fbf5';

      case 'Medium':
        return 'background-color: #fff5e2';
      case 'High':
        return 'background-color: #fff5f8';
    }
  }}
`;
