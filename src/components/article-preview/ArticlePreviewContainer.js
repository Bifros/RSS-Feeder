import React from 'react';

import ArticlePreviewComponent from './ArticlePreviewComponent';

class ArticlePreviewContainer extends React.Component {

  render() {
    return (
      <ArticlePreviewComponent
        log={this.log.bind(this)} 
        {...this.props.article}
        articleImageStyle={this.getArticleImageStyle.bind(this)}
      />
    )
  }

  getArticleImageStyle() {
    const article = this.props.article;

    if (article.enclosure)
      if (article.enclosure.url)
        return {
          backgroundImage: `url(${article.enclosure.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }
    return {
      display: 'none'
    };
  }

  log() {
    console.log('ARTICLE', this.props.article);
  }

}

export default ArticlePreviewContainer;