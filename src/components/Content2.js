import React, { Component } from 'react';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      number1: 0,
      number2: 0,
      result: 0
    }
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
  }
  // componentDidMount(){
  //   this.setState({
  //     count: 1
  //   })
  // }

  handleCountClick(e) {
    if (e.target.id === 'add') {
      this.setState({
        count: this.state.count + 1
      })
    } else if (e.target.id === 'substract' && this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    } else
      this.setState({
        count: 0
      })
  }

  handleResultClick(){
    this.setState({
      result: this.state.number1 + this.state.number2
    })
    console.log('result -> ', this.state.result);
    console.log('this.state.number1 -> ', this.state.number1);
    console.log('this.state.number2 -> ', this.state.number2);
  }

  handleInputChanged(e){
    const num = ['number1', 'number2'].indexOf(e.target.id) > -1 ? e.target.id : 'Error';
    if (num ==='Error') console.log('Error');
    this.setState({ [num]: Number(e.target.value)})
  }

  render() {
    return (
      <div className="Content">
        <h2>Counter {this.state.count}</h2>
        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="substract" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>
        <input id="number1" type="number" value={this.state.number1} onChange={this.handleInputChanged}/>
        <input id="number2" type="number" value={this.state.number2} onChange={this.handleInputChanged}/>
        <button id="result" onClick={this.handleResultClick}>Result</button>
        <h3>{this.state.result}</h3>
      </div>
    )
  }
}

export default Content;