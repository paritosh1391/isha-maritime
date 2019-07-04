import React from 'react';
import Button from './button.js';



class Home extends React.Component {
  render() {
    return (
        <div className="home-content">
          <p>Explore Maritime Courses and Jobs at your fingertips</p>
          <div className="btn-wrap">
            <Button value="Courses" />
            <Button value="Jobs" />
          </div>
        </div>
      )
    }
  }
  
  export default Home;
  