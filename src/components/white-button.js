import React from 'react';



class WhiteButton extends React.Component {
  render() {
    return (
        <a href="#" className="btn-white">{this.props.value}</a>
      )
    }
  }
  
  export default WhiteButton;
  