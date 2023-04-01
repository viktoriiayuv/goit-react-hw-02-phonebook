import { Component } from 'react';

class Filter extends Component {
  handleFilterChange = ({ target: { value } }) => {
    this.props.filterChange(value);
  };

  render() {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input
          onChange={this.handleFilterChange}
          type="text"
          name="filter"
        ></input>
      </>
    );
  }
}

export default Filter;
