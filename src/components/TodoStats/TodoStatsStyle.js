import styled from 'styled-components';

export const Section = styled.section`
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #91ead5;
  padding: 20px 0;
  line-height: 2;
  position: relative;

  & img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
  }
`;
