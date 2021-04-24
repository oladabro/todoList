import styled from 'styled-components';

export const SearchSectionStyle = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px 0;
  background-color: #d7d7e2;
  padding: 30px 35px;
  border-radius: 15px;
  height: 40px;
  box-sizing: content-box;

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
    /* padding: 10px 30px; */
    border-radius: 5px;
    border: none;
    font-weight: 700;
    font-size: 1rem;
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
      border: 2px solid #8c97fc;
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
