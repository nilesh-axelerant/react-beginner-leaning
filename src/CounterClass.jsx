import React from 'react'


export default class CounterClass extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      name: "Nilesh",
      counter: 0,
    }
  }

  render () {
    const handleClick = () => {
      this.setState(currentState => {
          return {counter: currentState.counter + 1 }
        }
      )
      this.setState(currentState => {
          return {counter: currentState.counter + 1 }
        }
      )
    }
    return (
      <h1 onClick={handleClick}>
         {this.state.name} {this.state.counter}
      </h1>
    )
  }
}
