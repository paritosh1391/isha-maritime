import React from 'react';
import PageTitle from './page-title.js';
import FunctionWrap from './page-functions.js';


class Courses extends React.Component {
  render() {
    return (
        <div id="course-content">
          <PageTitle title="Institutes" />
          <FunctionWrap title="Courses" />
        </div>
      )
    }
  }
  
  export default Courses;
  