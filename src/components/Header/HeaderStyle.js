import styled from 'styled-components';

export const HeaderStyle = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: #8c97fc;
  color: black;
  line-height: 2;
  position: relative;
  height: 180px;

  & h3:nth-of-type(2) {
    width: 75%;
    text-align: start;
    padding-left: 50px;
    position: relative;
    z-index: 10;
  }

  & h3 {
    margin-top: 10px;
    position: relative;
    z-index: 10;
    font-size: 1.4rem;
  }

  & img {
    position: absolute;
    top: 60%;
    transform: translateY(-60%);
    right: 15px;
    z-index: 1;
  }
`;
