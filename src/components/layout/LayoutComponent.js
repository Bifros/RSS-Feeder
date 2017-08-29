import React from 'react';

class LayoutComponent extends React.Component {

  render() {
    return (
      <main> 
        <aside className="sidebar pull-left">
          <div className="aside-header">
            <i className="fa fa-rss" aria-hidden="true"></i> Feeds For Needs 
            <span className="aside-secondary-header"><br/>
            seek and explore
            </span>
          </div>
          <div className="channels">
            <div className="sidebar-heading">
              <span>Channels</span>
              {/*<span className="chevron pull-right"><i className="fa fa-chevron-down" aria-hidden="true"></i></span>*/}
            </div>
            {this.props.renderChannelsList()}
          </div>
        </aside>
        <section className="main-panel pull-right">
          {this.props.renderSearchBar()}
          <div className="feeds-container">
            
            {this.props.children}
          </div>
        </section>
      </main>
    );
  }

}

export default LayoutComponent;