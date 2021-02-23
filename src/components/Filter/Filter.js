import React, { Component } from 'react'
import "..//Filter/Filter.css"

class Filter extends Component {
  render() {
    return (
      <div className="filter">

        <div className="filter-result">
          {this.props.count} {" "} Products
        </div>

        <div className="filter-sort">
          Order {" "}
          <select value={this.props.sort} onChange={this.props.sortProducts} onBlur={this.props.sortProducts}>
            <option>Latest</option>
            <option value="Lowest">Lowest</option>
            <option value="Highest">Highest</option>
          </select>
        </div>

        <div className="filter-size">
          Filter {" "}
          <select value={this.props.size} onChange={this.props.filterProducts} onBlur={this.props.filterProducts}>
            <option value="">All</option>
            <option value="Wallets">Wallets</option>
            <option value="Bags">Bags</option>
            <option value="Others">Others</option>
          </select>
        </div>

      </div>
    )
  }
}

export default Filter
