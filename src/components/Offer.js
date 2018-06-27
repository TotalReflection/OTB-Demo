import React, { Component } from 'react'
import PropTypes from 'prop-types';
class Offer extends Component {
  constructor(props) {
    super(props);
    Option.defaultProps = {
     offer: { id: 0,
      hotel: 'welcome to on the beach',
      rating: 0,
      location:"OTB",
      price:"000",
      available: "n/a",
      duration:"n/a",
      from:"n/a",
      }
    }
  }
  
 render() {
   return(
     <div>
         <div id={this.props.offer.id} key={this.props.offer.id}>
            <h1> {this.props.offer.hotel}</h1>
             <p> rating: {this.props.offer.rating} </p>
             <p> price: {this.props.offer.price} </p>
          </div>
     </div>
   )
 }
}
Offer.propTypes = {
 id:PropTypes.number,
 hotel:PropTypes.string,
 rating:PropTypes.number,
 location:PropTypes.string,
 price:PropTypes.number,
 available: PropTypes.string,
 duration:PropTypes.string,
 from:PropTypes.string,
};
 
export default Offer;