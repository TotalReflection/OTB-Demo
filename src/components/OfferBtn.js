import React, { Component } from 'react'
import PropTypes from 'prop-types';
class OfferBtn extends Component {
  constructor(props) {
    super(props);
  }

  
  
 render() {
   let activated = this.props.active === this.props.id ? "active" : '';
   return(
    <div className={this.props.class + ' ' + activated} >{this.props.text}</div>
   )
 }
}
OfferBtn.propTypes = {
 id:PropTypes.string,
 text:PropTypes.string
}

OfferBtn.defaultProps = {
 id: 0,
 active:'price',
 class:'btn'
}

export default OfferBtn;