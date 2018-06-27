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
      image:"image_01.png"
      }
    }
  }
  
 render() {

   return(
  
       <div className="wrapper" style ={ { backgroundImage: "url(./assets/"+ this.props.offer.image +")" } } id={this.props.offer.id} key={this.props.offer.id}>
            <aside className="aside aside-1">
            <span>
                <span className="heading">{this.props.offer.hotel}</span> {this.props.offer.rating}
                </span>
                      <p>{this.props.offer.location}</p>
            </aside>
            <aside className="aside aside-2"> Holiday Price: <p>{this.props.offer.price} </p></aside>
  
          <footer className="footer">  {this.props.offer.available} for {this.props.offer.duration} from {this.props.offer.from}</footer>
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