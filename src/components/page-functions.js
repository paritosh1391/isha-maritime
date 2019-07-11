import React from 'react';
import Filter from './filter.js';

class FunctionWrap extends React.Component {
  render() {
    return (
        <div className="page-functions">
            <h2 className="page-name">{this.props.title}</h2>
            <Filter />
        </div>
      )
    }
  }
  
  export default FunctionWrap;