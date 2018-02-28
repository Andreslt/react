import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  }
  render() {
    return (
      <div className="Content">
        {this.props.body}
      </div>
    )
  }
}

export default Content;