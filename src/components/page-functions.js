import React from 'react';

class FunctionWrap extends React.Component {
  render() {
    return (
        <div className="page-functions">
            <h2 className="page-name">{this.props.title}</h2>
        </div>
      )
    }
  }
  
  export default FunctionWrap;