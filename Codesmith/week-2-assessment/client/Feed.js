import React, { Component } from 'react';
import FeedItem from './FeedItem';

// Feed contains multiple FeedItems
// Put AJAX in this Component
class Feed extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      urls: [],
    };
  }

  componentDidMount() {

  }

  render() {
    // put render logic here
    let urlss = this.props.url;
    return (
      <div styles={styles.container}>
        <FeedItem />
        <p>{urlss}</p>
      </div>
    );
  }
}

const styles = {
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};

console.log(this.props.url);
module.exports = Feed;
