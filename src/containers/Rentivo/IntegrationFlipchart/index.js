import React, { Component } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
import styled from "styled-components"

const letters = "RentivoAirbnbExpediaCtripHomeAway".split("");

const entries = [
  // rentivo homeaway airbnb expedia ctrip homeaway
  [[0, 1, 2, 3, 4,5,6], [25,26,27,28,29,30,31,32], [7, 8, 9, 10,11,12], [20,21,22,23,24], [13,14,15,16,17,18,19]],

  // cut through
  [[null,null,7,null,null,null,null], // 0
    [null,13,8,null,20,null,null], // 1
    [null,14,9,null,21,null,null], // 2
    [null,15,10,null,22,null,25], // 3
    // [0,16,11,3,23,5,26],  // 4
    [0,1,2,3,4,5,6],  // 4
    [null,17,12,null,24,null, 27], // 5
    [null,18,null,null,null,null,28], // 6
    [null,19,null,null,null,null,29], // 7
    [null,null,null,null,null,null,30], // 7
    [null,null,null,null,null,null,31], // 7
    [null,null,null,null,null,null,32], // 7
  ],

  // nonsense
  [[0,1,2,3,4,5,6],[13, 2, 24, 16, 9, 13, 1], [5, 10, 0, 9], [8, 14, 12, 11, 15]]
];

const colors = [ "#01c88b", "#ff4f66", "#00009f", "#5900d8", "rgb(0, 103, 219)"];
const getColor = letter => {
  if(letter === null) return '#00b17b';
  if (letter < 7) return colors[0]
  if (letter <= 12) return colors[1]
  else if (letter <= 19) return colors[2]
  else if (letter <= 24) return colors[3]
  else if (letter <= 32) return colors[4]
  else return colors[2]
}

const ExpandedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;
  margin-bottom: 2rem;
`;

const ExpandedList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 3rem 3rem 3rem 3rem 3rem 3rem 3rem  3rem;
  grid-gap: 0.5rem;
  position: relative;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    color: white;
    font-size: 2.0rem;
    margin-bottom: 0.5rem;
    height: 3rem;
    line-height: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Center = styled.p`
text-align: center;
font-size: 1.2rem;
margin-bottom: 3rem;
`

export default class IntegrationFlipchart extends Component {

  index = 0;

  state = {
    expanded: false
  };

  render() {

    const data = entries[this.index % entries.length];
    this.index += 1;

    return (
        <Flipper flipKey={this.state.expanded } spring='wobbly'>
          <main onClick={() => this.setState({ expanded: !this.state.expanded })}>
            <Expanded data={data} />
          </main>
          <Center>Learn more about all of our channel integrations</Center>
        </Flipper>
    );
  }
}

const Word = ({ word }) => {
  return (
      <ExpandedList>
        {word.map(index => {
          const letter = letters[index];
          const flipId = `letter-${index}`;
          return (
              <Flipped flipId={flipId}>
                <li
                    style={{
                      backgroundColor: getColor(index),
                    }}
                >
                  <Flipped inverseFlipId={flipId} scale transformOrigin="50% 50%">
                    <span>{letter}</span>
                  </Flipped>
                </li>
              </Flipped>
          );
        })}
      </ExpandedList>
  );
};




const Expanded = ({ data }) => {
  return (
      <ExpandedContainer className="expandedContainer">
        {data.map(word => <Word word={word} />)}
      </ExpandedContainer>
  );
};
