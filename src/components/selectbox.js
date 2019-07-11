import React from 'react';

class SelectBox extends React.Component {
  
  render() {
    const options =  this.props.options;
    const optionList = options.map((option) =>
        <option key={option}>{option}</option>
    );
    return (
        <select id={this.props.id}>
            {optionList}
        </select>
      );
    }
  }
  
  export default SelectBox; 