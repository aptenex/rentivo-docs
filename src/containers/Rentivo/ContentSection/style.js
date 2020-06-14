import styled from 'styled-components';
import Image from 'gatsby-image';
import Link from 'gatsby-link';
import { themeGet } from 'styled-system';

export const Wrapper = styled('article')`

  ol {
    list-style: inherit;
    li {
      list-style-type: decimal;
      font-size: 16px;
      line-height: 27px;
    }
  }
   ul {
    list-style: inherit;
    li {
      list-style-type: inherit;
    }
  }
  [class^='heroSectionstyle__HeroWrapper']{
    padding-bottom: 40px;
  }
`;