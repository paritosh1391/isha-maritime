import React from 'react';
import { Route } from "react-router-dom";
import Home from './home.js';
import Courses from './courses.js';
import Diploma from './diploma.js';
import PostGraduate from './post-graduate.js';



class Content extends React.Component {
  render() {
    return (
        <div id="content">
            <Route exact path="/" component={Home}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/diploma" component={Diploma}/>
            <Route path="/post-graduate" component={PostGraduate}/>
        </div>
      )
    }
  }
  
  export default Content;
  