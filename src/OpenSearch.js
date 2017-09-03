import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class OpenSearch extends Component {
  render() {
    // const { onOpenSearch } = this.props;
    return (
      <div className="open-search">
        <Link to="/search"/>
      </div>
    );
  }

}
