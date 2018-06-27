import React, { Component } from 'react'

class Option extends Component {
  constructor(props) {
    super(props);
    Option.defaultProps = {
      id: 0,
      hotel: 'welcome to on the beach',
      rating: 0
    }
  }
  

  render() {
    return (
    <div key={this.props.id}>
        <h1> {this.props.hotel}</h1>
         <p> {this.props.rating} </p>
      </div>
    )
  }
}

export default Option;
