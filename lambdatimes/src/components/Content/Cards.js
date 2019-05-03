import React from 'react';
import Card from './Card';
import propTypes from 'prop-types'
const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map((card,i)=> <Card card={card} key={i}/>)}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  cards: propTypes.arrayOf(propTypes.shape({
    author: propTypes.string,
    headline: propTypes.string,
    img: propTypes.string,
    tab: propTypes.string,
  }))
}

