import React from 'react';
import propTypes from 'prop-types'
const Card = props => {
  const card = props.card
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author"> 
        <div className="img-container">
          <img src={card.img} alt={card.headline}/>
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;

Card.propTypes = {
  card: propTypes.shape({
  author: propTypes.string,
  headline: propTypes.string,
  img: propTypes.string,
  tab: propTypes.string
})
}