import styled from 'styled-components';
import { themeGet } from 'styled-system';

export default styled('label')`
  border-radius: 8px;
  margin-right: 10px;
  padding-left: 8px;
  padding-right: 8px;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  svg + span {
    padding-left: 10px;
  }
  &.how-to {   
    background: #61c7f8;
  }
  &.knowledge-base {   
    background: #f45225;
    text-align: center;
    svg {
    }
  }
  &.feature-page {
    background: #019e6e;
  }
`;