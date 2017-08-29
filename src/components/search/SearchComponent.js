import React from 'react';

const SearchComponent = (props) => (
  <div className="search-bar">
    <form id="search-form">
      <span className="pull-left home">Home</span>
      <input type="text" name="feed-url" className="search form-control pull-left" placeholder="your RSS Link" />
      <a className="get-feeds pull-left" onClick={props.getFeed}>
        <i className="fa fa-check" aria-hidden="true"></i>
      </a>
      <div className="clearfix"></div>
    </form>
  </div>
);

export default SearchComponent;