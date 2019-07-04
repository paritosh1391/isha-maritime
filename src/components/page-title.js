import React from 'react';
import WhiteButton from './white-button.js';

class PageTitle extends React.Component {
  render() {
    return (
        <div className="page-head">
            <h2 className="page-title">{this.props.title}</h2>
            <WhiteButton value="Upload Course" />
        </div>
      )
    }
  }
  
  export default PageTitle;