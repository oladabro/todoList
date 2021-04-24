import styled from 'styled-components';

export const TodoItemStyle = styled.li`
  padding: 10px 35px;
  background-color: rgba(231, 251, 245, 255);
  margin: 15px 0;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  position: relative;

  & div:nth-of-type(1) {
    width: 60%;
  }
  & div:nth-of-type(2) {
    width: 40%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
  }

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

  & div div {
    cursor: pointer;
    border: 2px solid transparent;
    padding: 5px 15px;

    &:focus {
      border: 2px solid #8c97fc;
    }
  }

  & button,
  & a {
    margin: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    font-size: 1.1rem;
    font-weight: 700;
    transition: 0.3s;
    outline: none;
    border: 2px solid transparent;
    color: #7a7674;
    background-color: transparent;
    cursor: pointer;

    & svg:hover {
      color: #484342;
      transform: scale(1.1);
    }

    &:focus {
      border: 2px solid #8c97fc;
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
