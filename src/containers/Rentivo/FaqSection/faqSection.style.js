import styled from 'styled-components';
import { themeGet } from 'styled-system';

const FaqSectionWrapper = styled.section`
  padding: 80px 0;
  background: #fafbff;

  .reusecore__accordion {
    max-width: 820px;
    margin: 0 auto;
    border-bottom: 1px solid #ebebeb;

    .accordion__item {
      border-top: 0;
      border-bottom: 1px solid #ebebeb;
      &:last-child {
        border-bottom: 0;
      }

      .accordion__header {
        padding: 20px 30px;
      }

      .accordion__body {
        padding: 5px 30px 20px;
      }
    }
  }
`;

const SwitchWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  .reusecore__switch {
    .reusecore__field-label {
      font-size: 16px;
      font-weight: 400;
      color: #5c636c;
      cursor: pointer;
    }
    input[type='checkbox'] {
      &:checked {
        + div {
          width: 40px !important;
          background-color: ${themeGet('colors.primary')};
          > div {
            left: 17px !important;
          }
        }
      }
      + div {
        background-color: #f0f0f0;
        background-color: #f0f0f0;
        border: 0;
        width: 40px;
        height: 25px;
        > div {
          background-color: #fff;
          box-shadow: 0px 2px 3px 0.24px rgba(31, 64, 104, 0.25);
          width: 21px;
          height: 21px;
          top: 2px;
          left: 2px;
        }
      }
    }
  }
`;

const SwitchButtonWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
  .reusecore__button {
    font-size: 16px;
    font-weight: 400;
    color: #6f7a87;
    background: #fff;
    height: 50px;
    width: 165px;
    border: 1px solid #e4e9ee;
    &:nth-child(1) {
      border-top-left-radius: 5px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 5px;
      border-right-color: transparent;
    }
    &:nth-child(2) {
      border-top-left-radius: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 0;
      border-left-color: transparent;
    }
    &.active-item {
      color: #01c88b;
      border-color: #01c88b;
    }
    @media (max-width: 575px) {
      font-size: 14px;
      height: 44px;
      width: 120px;
      padding: 0 5px;
    }
  }
`;

export {
  SwitchWrapper,
  SwitchButtonWrapper,
};


export default FaqSectionWrapper;
