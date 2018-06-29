import React, { Component } from 'react'
import PropTypes from 'prop-types';
import OfferRating from './OfferRating'
class Offer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      expanded:false
    }
    this.handleDrop = (e) => {
      this.setState({
          expanded:!this.state.expanded
        });
    }


    this.bookClick = (e) => {
      window.location = 'https://www.onthebeach.co.uk/'
    }
  }
  
 render() {
   let price = Number(this.props.offer.price)
   price /= Math.pow(10, 2);
   price = price.toLocaleString('en', {style:'currency',currency:'GBP', currencyDisplay:'symbol'})

   let expandedClass = this.state.expanded ? " expanded" : "";
   let expandedStyle = this.state.expanded ? { transform: 'rotate(90deg)'} : {};

   return(
    <section>
       <div className="wrapper" style ={ { backgroundImage: "url(./assets/"+ this.props.offer.image +")" } }  id={this.props.offer.id} key={this.props.offer.id}>
            <aside className="aside aside-1">
            <div className='head-inner'>
                <span className="heading">{this.props.offer.hotel}</span> <OfferRating rating={this.props.offer.rating}/>
                </div>
                      <p>{this.props.offer.location}</p>
            </aside>
            <aside className="aside aside-2"> Holiday Price: <p>{price}</p></aside>
       
          <footer className="footer">
              <span className="availablility">
                {this.props.offer.available} for {this.props.offer.duration} from {this.props.offer.from}
              </span>
              <span className='button__container'>
                <button className={'drop_btn'} style={ expandedStyle } onClick={this.handleDrop}>
                {'❯'}
                </button>
              </span>
          </footer>
          
      </div>
      <article className={'dropdown' + expandedClass}> 
      <div className={'droptext'}>
        <span> {this.props.offer.details}</span>

      <span className='button__container'>
                <button className={'book_btn'}  onClick={this.bookClick}>
                BOOK NOW
                </button>
              </span>
      </div>
      </article>
    </section>

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

Offer.defaultProps = {
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
 
export default Offer;