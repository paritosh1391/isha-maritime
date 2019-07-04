import React from 'react';
import { NavLink } from "react-router-dom";
class Nav extends React.Component { 
    render() {
        return (
          
            <ul className="steps">
              <li onClick={(event) => this.props.onClick()}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={(event) => this.props.onClick()}>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li onClick={(event) => this.props.onClick()}>
                <NavLink to="/diploma">Diploma courses</NavLink>
              </li>
              <li onClick={(event) => this.props.onClick()}> 
                <NavLink to="/post-graduate">Post graduate courses</NavLink>
              </li>
            </ul>
          )
        }
  }

export default Nav;