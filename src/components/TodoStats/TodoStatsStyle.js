import styled from 'styled-components';
import { borderRadius, purple, yellow, green } from '../../shared/theme';

export const Section = styled.section`
  grid-column: 1/2;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${green};
  padding-bottom: 50px;
  line-height: 2;
  position: relative;
  border-radius: ${borderRadius};
  position: sticky;
  top: 50px;
  align-self: start;

  & h3 {
    padding-top: 160px;
  }

  & img {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
