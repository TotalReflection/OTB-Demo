import React, { Component } from 'react'
import OfferList from './OfferList'
import OfferBtn from './OfferBtn'
import localData from '../data/offers.json';

class OfferControl extends Component {

  constructor(props) {
    super(props);

    const initialOrder = this.props.intialOrder;
    const initalData = localData.sort(function (a, b) {
      return a[initialOrder] - b[initialOrder];
    });

    this.state = {
      currentData: initalData,
      active: initialOrder,
      acending: true
    };

    this.direction = (target) => {
      if (target === this.state.active) {
        return this.state.accending ? "▲" : "▼"
      } 
    }

    this.reverseList = () => {
      this.setState({
        currentData: this.state.currentData.reverse(),
        acending: !this.state.acending
      });
    }

    this.orderList = (target) => {
      const result = this.state.currentData.sort(function (a, b) {
        return a[target].toString().localeCompare(b[target].toString(),"en", {numeric: true});
      });
      this.setState({
        currentData: result,
        active: target,
        acending: true
      });
    }

    this.reorder = (e) => {
      const target = e.currentTarget.id
      if (target === this.state.active) {
        this.reverseList();
      } 
      else {
        this.orderList(target);
        
      }
    }

  }

   render() {
     return (
       <div className="outer">
         <nav className="btn__wrapper"> 
           <button id="hotel" className="btn__container" onClick={this.reorder}>
              <OfferBtn id="hotel"  text={'sort alphabetically'} active={this.state.active} />
            </button>
            <button id="price" className="btn__container" onClick={this.reorder}>
              <OfferBtn id="price"  text={'sort by price'} active={this.state.active} />
            </button>
            <button className="btn__container" id="rating" onClick={this.reorder}>
              <OfferBtn id="rating"  text ={'sort by star rating'} active={this.state.active} />
            </button> 

           
         </nav>
         <main>
            <OfferList data={this.state.currentData.map(offers => offers)} />
         </main>
       </div>
      )
   }
}

OfferControl.defaultProps = {
  lang:"en"
 }

export default OfferControl;