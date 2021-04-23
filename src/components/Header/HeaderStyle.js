import styled from 'styled-components';

export const HeaderStyle = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: #8c97fc;
  color: black;
  line-height: 2;
  position: relative;
  height: 200px;

  & h3:nth-of-type(2) {
    width: 75%;
    text-align: start;
    padding-left: 50px;
    position: relative;
    z-index: 10;
  }

  & h3 {
    margin-top: 20px;
    position: relative;
    z-index: 10;
  }

  & img {
    position: absolute;
    top: 60%;
    transform: translateY(-60%);
    right: 20px;
    z-index: 1;
  }
`;
