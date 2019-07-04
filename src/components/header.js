import React from 'react';
import '../index.css';



class Header extends React.Component {
  render() {
    return (
      <header className="header header-inner clearfix">
        <div className="hamburger"  onClick={(event) => this.props.onClick()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className="title">isha maritime</h1>
      </header>
      )
    }
  }
  
  export default Header;
  