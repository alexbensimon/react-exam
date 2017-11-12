// @flow

import React from 'react';
import { connect } from 'react-redux';

import { addJedi } from '../actions/jediActions';

type Props = {
  addJedi: Function,
};

type State = {
  name: string,
};

class JediForm extends React.Component<Props, State> {
  state = {
    name: '',
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addJedi(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <button type="submit">Add jedi 🎉</button>
      </form>
    );
  }
}

export default connect(null, { addJedi })(JediForm);
