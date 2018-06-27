import React, { Component } from 'react'
import OfferList from './OfferList'
import localData from '../data/offers.json';

class OfferControl extends Component {

  constructor(props) {
    super(props);

    Option.defaultProps = {
      lang:"en"
     }


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
      const target = e.target.id
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
         <nav> 
            <button className="btn" id="hotel" onClick={this.reorder}>sort alphabetically</button>
            <button className="btn" id="rating" onClick={this.reorder}>sort by price</button>
            <button className="btn" id="price" onClick={this.reorder}>sort by star rating</button>
         </nav>
         <main>
            <OfferList data={this.state.currentData.map(offers => offers)} />
         </main>
       </div>
      )
   }
}


export default OfferControl;