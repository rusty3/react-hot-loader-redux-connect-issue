import React, {Component} from 'react';
import { connect } from 'react-redux';

class ConnectedContainer extends Component {

  render() {
    return (
    	<div>
    		<p>EDIT ME twice.</p><br />
        <h1>Issue:</h1>
        <p>Every 2nd edit of this component causes a reload. See the console.</p>
      </div>
    );
  }
}

export default connect()(ConnectedContainer);