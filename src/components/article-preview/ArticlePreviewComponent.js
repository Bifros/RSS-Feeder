import React from 'react';

const ArticlePreviewComponent = (props) => (
  <div className="article-preview">
    <div className="pull-left article-preview-img" style={props.articleImageStyle()}>
    </div>
    <div className="pull-left article-preview-content">
      <a className="article-preview-title">
        {props.title}
      </a>
      <div className="article-preview-text">
        {props.contentSnippet}
      </div>
    </div>
    <div className="clearfix"></div>
  </div>
);

export default ArticlePreviewComponent;