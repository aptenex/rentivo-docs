import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import * as PropTypes from "prop-types";
import {Link} from "gatsby";
import {getFullPath} from "constants/pageSlugPrefixes";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight } from '@fortawesome/pro-duotone-svg-icons';


const Nav = styled('nav')`
    width: auto;
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: "previous next";
    grid-template-columns: 1fr 1fr;
    margin: 0px;
    padding: 0px;
    grid-column-gap: 24px;
    margin-top: 40px;
    margin-bottom: 40px;
    
`;
const NextLink = styled(Link)`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    color: #242A31;
    border: 1px solid #E6ECF1;
    margin: 0;
    display: flex;
    padding: 0;
    position: relative;
    grid-area: next;
    align-self: stretch;
    box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
    transition: border 250ms ease;
    align-items: center;
    justify-self: stretch;
    border-radius: 3px;
    flex-direction: row;
    -moz-transition: border 250ms ease;
    text-decoration: none;
    background-color: #FFFFFF;
    -webkit-box-align: center;
    page-break-inside: avoid;
    -ms-grid-row-align: stretch;
    -webkit-box-orient: horizontal;
    -webkit-transition: border 250ms ease;
    -ms-grid-column-align: stretch;
    -webkit-box-direction: normal;
    transform: translateY(0px);
    transition: box-shadow 0.3s ease-out 0s, transform 0.2s linear 0s, background-color 0.2s linear 0s;
    &:hover {
      transform: translateY(-3px);
          
    }
`;
const PreviousLink = styled(Link)`
    color: rgb(36, 42, 49);
    display: flex;
    position: relative;
    align-self: stretch;
    box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;
    align-items: center;
    justify-self: stretch;
    flex-direction: row;
    background-color: rgb(255, 255, 255);
    -webkit-box-align: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(230, 236, 241);
    border-image: initial;
    margin: 0px;
    padding: 0px;
    grid-area: previous / previous / previous / previous;
    border-radius: 3px;
    text-decoration: none;
    page-break-inside: avoid;
    transition: border 250ms ease 0s;
      transition: box-shadow 0.3s ease-out 0s, transform 0.2s linear 0s, background-color 0.2s linear 0s;
    &:hover {
      transform: translateY(-3px);
          
    }
`;

const Card = styled('div')`
    flex: 1;
    margin: 0;
    display: block;
    padding: 16px;
`;


const CardPrevious = styled(Card)`
    display: block;
    text-align: right;
    flex: 1 1 0%;
    margin: 0px;
    padding: 16px;
`;
const Hint = styled('div')`
    color: #9DAAB6;
    margin: 0;
    display: block;
    padding: 0;
`;

const Title = styled('div')`
margin: 0;
    display: block;
    padding: 0;
    transition: color 250ms ease;
    -moz-transition: color 250ms ease;
    -webkit-transition: color 250ms ease;
`;

const Icon = styled('div')`
flex: 0 0 auto;
    color: #9DAAB6;
    margin: 0;
    display: block;
    padding: 16px;
    font-size: 24px;
    transition: color 250ms ease;
    -moz-transition: color 250ms ease;
    -webkit-transition: color 250ms ease;
`;
const NavGuide = (props) => {
  return (
    <>
      <Nav>
        { props.previous  && <PreviousLink to={getFullPath(props.previous)} >
          <Icon><FontAwesomeIcon icon={faChevronLeft}/></Icon>
          <CardPrevious>

            <Hint>
              Previous
            </Hint>
            <Title>
              {props.previous.name}
            </Title>
          </CardPrevious>
        </PreviousLink> }
        { props.next      && <NextLink to={getFullPath(props.next)} >
          <Card>
            <Hint>
              Next
            </Hint>
            <Title>
              {props.next.name}
            </Title>

          </Card>
          <Icon><FontAwesomeIcon icon={faChevronRight}/></Icon>
        </NextLink> }
      </Nav>
    </>
  );

};

NavGuide.propType = {
  next : PropTypes.object,
  previous : PropTypes.object,
};
export default NavGuide;