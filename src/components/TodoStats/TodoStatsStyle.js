import styled from 'styled-components';
import { borderRadius, purple, yellow, green } from '../../shared/theme';

export const Section = styled.section`
  grid-column: 1/2;
  grid-row: 2/5;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${green};
  padding: 150px 0;
  line-height: 2;
  position: relative;
  border-radius: ${borderRadius};
  position: sticky;
  top: 50px;

  & h3 {
    margin-top: 20px;
  }

  & div {
  }

  & img {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
