import styled, {keyframes} from 'styled-components';
import {themeGet} from 'styled-system';

const bounce  = keyframes`
  
    0% {
      transform: translate3d(340px, 80px, 0) skew(-6deg);
      background: #01394e
    }
    50% {
      transform: translate3d(330px, 90px, 0) skew(-6deg) scaleX(1.05);
      background: #012837
    }
    to {
      transform: translate3d(340px, 80px, 0) skew(-6deg);
      background: #019e6e
    }
  
`

const bounce2  = keyframes`
  
    0% {
		transform: translate3d(120px, 180px, 0) skew(-6deg)
    }
    50% {
      transform: translate3d(110px, 190px, 0) skew(-6deg) scaleX(1.05)
    }
    to {
      transform: translate3d(120px, 180px, 0) skew(-6deg)
    }
  
`

const bounce3 = keyframes`
  
   0% {
		transform: translate3d(100px, 20px, 0) skew(-6deg)
	}
	50% {
		transform: translate3d(90px, 10px, 0) skew(-6deg) scaleX(1.05)
	}
	to {
		transform: translate3d(110px, 20px, 0) skew(-6deg)
	}
  
`

const bounce4  = keyframes`
  
   0% {
		transform: translate3d(270px, 350px, 0) skew(-6deg)
	}
	50% {
		transform: translate3d(260px, 340px, 0) skew(-6deg) scaleX(1.05)
	}
	to {
		transform: translate3d(280px, 350px, 0) skew(-6deg)
	}
  
`

const bounce5  = keyframes`
  
    0% {
		transform: translate3d(20px, 440px, 0) skew(-6deg);
		background: #3b358c
	}
	50% {
		transform: translate3d(30px, 430px, 0) skew(-6deg) scaleX(1.05);
		background: #1d6683
	}
	to {
		transform: translate3d(20px, 440px, 0) skew(-6deg);
		background: #205a83
	}
  
`

const bounce6  = keyframes`
  0% {
		transform: translateZ(0) skew(-6deg)
	}
	50% {
		transform: translate3d(10px, 10px, 0) skew(-6deg) scaleX(1.05);
		opacity: 0
	}
	to {
		transform: translateZ(0) skew(-6deg)
	}
  
`

const bounce7  = keyframes`
  
  0% {
		background: rgba(125, 133, 217, .23);
		opacity: 0;
		transform: translate3d(280px, 100px, 0) skew(-6deg)
	}
	50% {
		background: rgba(125, 133, 217, .23);
		opacity: 1;
		transform: translate3d(290px, 110px, 0) skew(-6deg) scaleX(1.05)
	}
	to {
		background: rgba(125, 133, 217, .23);
		opacity: 0;
		transform: translate3d(270px, 100px, 0) skew(-6deg)
	}
  
`

const bounce8  = keyframes`
  
    0% {
		transform: translate3d(600px, 170px, 0) skew(-6deg)
	}
	50% {
		transform: translate3d(610px, 180px, 0) skew(-6deg) scaleX(1.05);
		opacity: 0
	}
	to {
		transform: translate3d(600px, 170px, 0) skew(-6deg)
	}
  
`


const bounce9  = keyframes`
  
    0% {
		transform: translate3d(40px, 270px, 0) skew(-6deg)
	}
	50% {
		transform: translate3d(20px, 260px, 0) skew(-6deg) scaleX(1.05);
		opacity: 0
	}
	to {
		transform: translate3d(40px, 270px, 0) skew(-6deg)
	}
  
`

const bounce10  = keyframes`
  
  0% {
		background: rgba(125, 133, 217, .23);
		transform: translate3d(-50px, 430px, 0) skew(-6deg);
		opacity: 0
	}
	50% {
		background: rgba(125, 133, 217, .23);
		opacity: 1;
		transform: translate3d(-60px, 440px, 0) skew(-6deg) scaleX(1.05)
	}
	to {
		background: rgba(125, 133, 217, .23);
		opacity: 0;
		transform: translate3d(-50px, 430px, 0) skew(-6deg)
	}
`

const bounce11  = keyframes`
  
    0% {
		background: rgba(125, 133, 217, .23);
		transform: translate3d(290px, 530px, 0) skew(-6deg);
		opacity: 0
	}
	50% {
		background: rgba(125, 133, 217, .23);
		opacity: 1;
		transform: translate3d(310px, 540px, 0) skew(-6deg) scaleX(1.05)
	}
	to {
		background: rgba(125, 133, 217, .23);
		opacity: 0;
		transform: translate3d(290px, 530px, 0) skew(-6deg)
	}
  
`

const ChannelsWrapper = styled.div`

  min-height: 600px;
  ul .box {
    animation-name: ${bounce};
     img {
        filter: brightness(0) invert(1);
        padding: 10px;
      }
  }
  ul {
    .box2 {
      width: 140px;
      height: 140px;
      animation-name: ${bounce2};
      img {
        filter: brightness(0) invert(1);
        padding: 10px;
      }
    }
    .box3 {
      width: 120px;
      height: 120px;
      background: #fff;
      animation-name: ${bounce3};
    }
    .box4 {
      width: 90px;
      height: 90px;
      background: #fff;
      animation-name: ${bounce4};
    }
    .box5 {
        width: 130px;
      height: 130px;
      animation-name: ${bounce5};
       img {
        filter: brightness(0) invert(1);
        padding: 10px;
      }
    }
    
    .box6 {
    
      width: 50px;
      height: 50px;
      animation-name: ${bounce6};
    }
    
    .box7 {
      width: 20px;
      height: 20px;
      animation-name: ${bounce7};
    }
    
    .box8 {
        width: 70px;
      height: 70px;
      animation-name: ${bounce8};
    }
    
    .box9 {
      width: 70px;
      height: 70px;
      animation-name: ${bounce9};
    }
    .box10 {
      width: 35px;
      height: 35px;
      animation-name: ${bounce10};
    }
    .box11 {
      width: 50px;
      height: 50px;
      animation-name: ${bounce11};
    }
  }
  ul .animate {
      -webkit-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    img {
        padding: 10px;
    }
  }
   ul li {
       width: 190px;
    height: 190px;
    list-style-type: none;
    border-radius: 10px;
    background: #3b358c;
    background: #01c88b; 
    box-shadow: 0 4px 8px 0 rgba(49,46,141,.11), 0 20px 30px 0 rgba(49,46,141,.3);
    text-align: center;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
   }
`;

export default ChannelsWrapper;
