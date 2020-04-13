import styled from 'styled-components';
import {themeGet} from 'styled-system';
import { IconLockMan, IconLock as Lock } from '../Icons';


export const IconLock = styled(Lock)`
    height: 12px;
    line-height: 22px;
    margin-top: 18px;
    float:right;
    opacity: 0.7;
    margin-right: 8px;
     @media (max-width: 767px) {
      display: none;
    }   
  `

export const LoginLink = styled('a')`
    float:right;   
    @media (max-width: 767px) {
      display: none;
    }   
    padding: 1rem 1.5rem 0rem 0rem;
    button {
      float: right;
    }    
  `;


export const Cta = styled('div')`
    float:right;  
    @media (max-width: 767px) {
      display: none;
    } 
    @media (max-width: 990px) {
      margin-right: 20px;
    }  
    a {
      float: right;
      padding-top: 14px;
      padding-bottom: 14px;
      font-size: 1.1em;
      font-weight: bold;
    }    
  `;

export const CtaSection = styled('div')`    
    flex-grow:1;    
  `;
