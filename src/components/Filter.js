import React, { Component } from 'react';

const Filter = ({ filters, handleChange }) =>
  <select onChange={handleChange} defaultValue='all'>
    <option value='all'>All</option>
    {filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>;

Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
};

export default Filter;

// class Filter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       filters: []
//     };
//   }

  // componentWillMount() {
  //   this.fetchFilters();
  // }

  // fetchFilters = () => {
  //   fetch('/api/fruit_types')
  //     .then(response => response.json())
  //     .then(filters => this.setState({ filters }));
  // }

  // render() {
      // }

