import React, { Component } from 'react';

// FeedItem should consist of an image (src contained in the data from the AJAX request)
class FeedItem extends Component {

  render() {
    // put render logic here
    return (
      <div styles={styles.container}>
      </div>
    );
  }
}

const styles = {
  container: {
    border: '1px solid black',
    height: 100,
    width: '100%',
    flex: 1,
  },
};

module.exports = FeedItem;
