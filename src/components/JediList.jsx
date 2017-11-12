// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { Jedi } from '../types/jedi';
import { fetchJediList } from '../actions/jediActions';

type Props = {
  jediList: Jedi[],
  fetchJediList: Function,
};

class App extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchJediList();
  }

  render() {
    const jediComponentList = this.props.jediList
      ? this.props.jediList.map(jedi => (
        <div key={jedi.id}>
            Jedi: id: {jedi.id} name: {jedi.name}
        </div>
        ))
      : null;
    return jediComponentList;
  }
}

export default connect(
  state => ({
    jediList: state.jedi,
  }),
  { fetchJediList },
)(App);
