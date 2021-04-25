import styled from 'styled-components';

export const HeaderStyle = styled.header`
  grid-column: 1/3;
  grid-row: 1/2;
  text-align: center;
  color: black;
  line-height: 1.5;
  position: relative;
  padding-top: 15px;
  /* height: 180px; */

  & h1 {
    text-align: center;
    align-self: end;
    font-size: 1.4rem;
  }

  & h3:nth-of-type(2) {
    /* width: 75%; */
    text-align: center;
    /* padding-left: 50px; */
    position: relative;
    z-index: 10;
    font-weight: 400;
  }

  & h3 {
    /* margin-top: 10px; */
    position: relative;
    z-index: 10;
    font-size: 1.3rem;
  }

  & img {
    position: absolute;
    top: 60%;
    transform: translateY(-60%);
    right: 15px;
    z-index: 1;
  }
`;
