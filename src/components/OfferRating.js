import React, { Component } from 'react'

class OfferRating extends Component {
  constructor(props) {
    super(props);
    Option.defaultProps = {
     rating:0
    }
  }
  
 render() {
  console.log(this.props.rating)
   let starRating = ''
   for(let i=0; i < this.props.rating; i++)
   {
    starRating+='★'
   }
   return(
       <span className="stars">
      {starRating}
      </span>
   )
 }
}
 
export default OfferRating;