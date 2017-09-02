import React, { Component } from 'react';

export default class OpenSearch extends Component {
  render() {
    const { onOpenSearch } = this.props;
    return (
      <div className="open-search">
        <a onClick={onOpenSearch}>Search</a>
      </div>
    );
  }

}
