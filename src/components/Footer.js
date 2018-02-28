import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  }  
  render() {
    const { copyright="&copy; All rights reserved" } = this.props;
    return (
      <div className="Footer">
          <p dangerouslySetInnerHTML={{ __html: copyright }}></p>
      </div>
      )
  }
}

export default Footer;