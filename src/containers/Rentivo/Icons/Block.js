import React, {Component} from 'react'
// import * as Icons from './index'
import {
  IconLock, IllustrationApartment,
  IllustrationOptions,
  IllustrationPropertySearching,
  IllustrationSketch,
  IllustrationSold,
  IllustrationStorage,
  IllustrationForSale,
  IllustrationCalculation,
  IllustrationInvestment,
  IllustrationIncreasingValue,
  IllustrationStockMarket,
  IllustrationAccount,
  IllustrationFinancialManagement,
  IllustrationConsulting,
  IllustrationCare,

  LineAnchor,
  LineAnnouncement,
  LineContactBook,
  LineCurrency,
  LineGift,
  LineIdea,
  LineImage,
  LineAnalytics

} from './index'
import styled from "styled-components"
import Image from 'reusecore/src/elements/Image';

class Main extends Component {


  render() {

    // Add all classs to an array
    const addAllClasses = ['iconBlock__wrapper'];

    // className prop checking
    if (this.props.className) {
      addAllClasses.push(this.props.className);
    }

    const Wrapper = styled('div')`
      min-width: 96px;
      margin-right: 15px;    
      svg {
        height: 100%;
        width: 100%;
      }
    `;
    const {type, content} = this.props
    return (
          <Wrapper className={addAllClasses.join(' ')} dangerouslySetInnerHTML={{ __html: this.props.content }} /> ||
          <Wrapper className={addAllClasses.join(' ')} >
            {type == "IconLock" && <IconLock/>}

            {type == "IllustrationApartment" && <Image src={IllustrationApartment}/>}
            {type == "IllustrationOptions" && <Image src={IllustrationOptions}/>}
            {type == "IllustrationSketch" && <Image src={IllustrationSketch}/>}
            {type == "IllustrationSold" && <Image src={IllustrationSold}/>}
            {type == "IllustrationStorage" && <Image src={IllustrationStorage}/>}
            {type == "IllustrationForSale" && <Image src={IllustrationForSale}/>}
            {type == "IllustrationCalculation" && <Image src={IllustrationCalculation}/>}
            {type == "IllustrationInvestment" && <Image src={IllustrationInvestment}/>}
            {type == "IllustrationIncreasingvalue" && <Image src={IllustrationIncreasingValue}/>}
            {type == "IllustrationStockMarket" && <Image src={IllustrationStockMarket}/>}
            {type == "IllustrationAccount" && <Image src={IllustrationAccount}/>}
            {type == "IllustrationFinancialManagement" && <Image src={IllustrationFinancialManagement}/>}
            {type == "IllustrationConsulting" && <Image src={IllustrationConsulting}/>}
            {type == "IllustrationCare" && <Image src={IllustrationCare}/>}

            {type == "LineAnchor" && <LineAnchor />}
            {type == "LineAnnouncement" && <LineAnnouncement/>}
            {type == "LineContactBook" && <LineContactBook />}
            {type == "LineCurrency" && <LineCurrency />}
            {type == "LineGift" && <LineGift/>}
            {type == "LineIdea" && <LineIdea/>}
            {type == "LineImage" && <LineImage />}
            {type == "LineAnalytics" && <LineAnalytics />}

        </Wrapper>
    )
  }
}

export default Main