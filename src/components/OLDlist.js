import React, { Component } from 'react'
import Option from './Option'
import data from '../data/offers.json';

class OfferList extends Component {
  constructor(props) {
    super(props);
       this.state ={
         offers:data
       
    }
  }
  
  componentDidMount() {
 this.setState({offers : data})
  }

  render() {
    const offerTable = this.state.offers.map(offer => (
    <Option key={offer.id} hotel={offer.hotel} rating={offer.rating} />
  ));
    return (
      <div>
        Offers:
        {offerTable}
      </div>
    )
  }
}

export default OfferList;
