import { Component } from 'react';
import PropTypes from 'prop-types';

import { FilterContainer } from './Filter.styled';

class Filter extends Component {
  handleFilterChange = ({ target: { value } }) => {
    this.props.filterChange(value);
  };

  render() {
    return (
      <FilterContainer>
        <p>Find contacts by name</p>
        <input
          onChange={this.handleFilterChange}
          type="text"
          name="filter"
        ></input>
      </FilterContainer>
    );
  }
}

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
