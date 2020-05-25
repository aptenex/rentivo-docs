import _ from "lodash";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandHeart, faQuestionCircle, faBookSpells} from "@fortawesome/pro-duotone-svg-icons";
import React from "react";
import PageWrapper from './style';

const PageTypeLabel = ({type, hideLabel}) => {

  return (
      <PageWrapper className={_.kebabCase(type)}>

        {
          type === 'Knowledge Base' ?
              <FontAwesomeIcon icon={faHandHeart}/>
              :
              type === 'How To' ?
                  <FontAwesomeIcon icon={faBookSpells}/> : null
        }

        {hideLabel ? null : <span>{ type }</span>}

      </PageWrapper>
  )
};
PageTypeLabel.defaultProps = {
  hideLabel : false
}
export default PageTypeLabel;