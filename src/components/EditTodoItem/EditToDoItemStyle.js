import styled from 'styled-components';

export const Button = styled.button`
  padding: ${(props) => props.padding};
  background-color: purple;

  &:hover {
    cursor: pointer;
  }
`;
