import { Component } from "react";

export class IncrementDecrementComponent extends Component {
  state = {
    counter: 0,
    name: "Zartab",
  };

  changeName= () =>{
    if(!this.state.name.includes("Nakhwa")){
    this.setState({
      name:this.state.name.concat(" Nakhwa")
    })
  }
  }

  incrementCount = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log("Counter", this.state.counter);
  };
  
  decrementCount = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
      console.log("Counter", this.state.counter);
    }
  };

  render() {
    return (
      <div>
        <h3>Name: {this.state.name}</h3>
        <br />
        Counter: {this.state.counter}
        <br />
        <button onClick={this.incrementCount}>Increment</button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.decrementCount}>Decrement</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.changeName}>Change Name</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    );
  }
}
