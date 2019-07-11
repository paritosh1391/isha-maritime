import React from 'react';
import SelectBox from './selectbox.js';

class Filter extends React.Component {
  render() {
    return (
        <div className="actions-wrap">
          <SelectBox id="type" options={["Certificate", "Diploma", "Graduate", "Post Graduate", "PhD"]} />
        </div>
      )
    }
  }
  
  export default Filter; 