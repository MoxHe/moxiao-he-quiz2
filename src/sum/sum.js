import React from 'react';

const Sum = (props) => {
  const { dices } = props;
  let sum = 0;
  for (let dice of dices) {
    sum += dice;
  }

  return (
    <h3>{sum}</h3>
  )
}

export default Sum;
