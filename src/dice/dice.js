import React from 'react';
import './dice.css'

const Dice = (props) => {
  const { dice, rollHandler } = props;

  return (
    <div className="dice" onClick={rollHandler}>{dice}</div>
  );
}

export default Dice;
