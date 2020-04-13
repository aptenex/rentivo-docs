import React from 'react';
import './Rating.scss';
import { AuthCtx } from '../withUser';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.ratingVals = [
      1, 2, 3, 4, 5
    ];

    this.state = {
      rating: 0,
      hasRating: false,
    }
  }

  componentDidMount() {
    this.dataLayer = window.dataLayer || [];
  }

  rateDoc = user => (e) => {
    const rating  = parseInt( e.target.dataset.rating );
    const userID = user ? user.userid : false;

    this.setState({
      rating,
      hasRating: true,
    })

    trackCustomEvent({
      'category' : 'Knowledge Base',
      'action' : 'Star Assigned',
      value: rating
    });
  }

  getStars() {
    return this.ratingVals.map(rating => {
      const isSelected = rating <= this.state.rating ? 'is-filled' : '';
      return (
        <span
        key={rating}
        className={isSelected}
        data-rating={rating}
        onMouseEnter={() => { this.setState({rating}) }}
        onMouseLeave={() => { this.setState({rating: 0}) }}
        >★</span>
      )
    });
  }

  render() {
    return (
      <div className="card card__feedback ta-center">
        <div className="card__inner">
          <h3 className="card__title" >Share Your Feedback</h3>
          <p>Let us know how we’re doing! Please rate this page:</p>
          <div className="rate-this-doc">
            <AuthCtx.Consumer>
              {(ctx) => (
                <React.Fragment>
                    {this.state.hasRating ? (
                      <p className="rate-this-doc__success">
                        You’re the best! Thanks for helping us improve.
                      </p>
                      ) : (
                        <div className="rating" onClick={this.rateDoc(ctx.user)}>
                          {this.getStars()}
                        </div>
                      )
                    }
                </React.Fragment>
              )}
            </AuthCtx.Consumer>
          </div>
          <p>If you have a question that needs an answer, please contact support.
          Thanks for helping us improve our docs!
          </p>
        </div>
      </div>
    );
  }
}

export default Rating;
