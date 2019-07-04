import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './components/header.js';
import Content from './components/content.js';

import './index.css';
import Nav from './components/nav.js';

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false}
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    render() {
        if(this.state.addClass) {
            document.body.classList.add('modal-open');
        }
        else {
            document.body.classList.remove('modal-open'); 
        }
      return (
        <div>
            <div id="wrapper">
                <Header onClick={event => this.toggle()} />
                <Content />
            </div>
            <Nav onClick={event => this.toggle()} />

        </div>
      );
    }
  }

ReactDOM.render(
    <BrowserRouter>
        <MyApp />
  </BrowserRouter>,
    document.getElementById('root')
);