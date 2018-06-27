import React, { Component } from 'react'
import Offer from './Offer'

class OfferList extends Component {
  constructor(props) {
    super(props);
    Option.defaultProps = {
     data: [{ id: 0,
      hotel: 'welcome to on the beach',
      rating: 0
      }]
    }
  }
 render() {
   return(
     <div className="wrapper">
        {this.props.data.map((offer ,key) => 
            <Offer id={offer.id} key={key} offer={offer} />
         )}
     </div>
   )
 }
}
 export default OfferList;