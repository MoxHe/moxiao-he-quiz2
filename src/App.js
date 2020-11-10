import React from "react";
import "./App.css";
import Dice from "./dice/dice";
import Sum from "./sum/sum";

class App extends React.Component {
  state = {
    dices: [],
  };

  addHandler = () => {
    const newDices = [...this.state.dices];
    newDices.push(0);

    this.setState({
      dices: newDices,
    });
  };

  removeHandler = () => {
    const newDices = [...this.state.dices];
    if (newDices.length === 0) {
      return;
    }
    newDices.pop();

    this.setState({
      dices: newDices,
    });
  };

  rollHandler = () => {
    const { dices } = this.state;
    const newDices = [];
    for (let i = 0; i < dices.length; i++) {
      newDices.push(Math.floor(Math.random() * 6 + 1));
    }
    this.setState({ dices: newDices });
  };

  render() {
    const { dices } = this.state;
    return (
      <div>
        <header>Dice Roller</header>
        <div>
          <button onClick={this.addHandler}>Add</button>
          <button onClick={this.removeHandler}>Remove</button>
        </div>
        {dices.map((dice, idx) => (
          <Dice
            key={idx}
            dice={dice}
            rollHandler={this.rollHandler.bind(this, idx)}
          />
        ))}
        <Sum dices={dices} />
      </div>
    );
  }
}

export default App;
