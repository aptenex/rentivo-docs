import styled from 'styled-components';
import Image from 'gatsby-image';
import Link from 'gatsby-link';
import { themeGet } from 'styled-system';

export const Wrapper = styled('article')`
  ol {
    list-style: inherit;
    li {
      list-style-type: decimal;
    }
  }
   ul {
    list-style: inherit;
    li {
      list-style-type: inherit;
    }
  }
`;