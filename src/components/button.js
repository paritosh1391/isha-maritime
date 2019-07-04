import React from 'react';



class Button extends React.Component {
  render() {
    return (
        <a href="#" className="btn">{this.props.value}</a>
      )
    }
  }
  
  export default Button;
  