import React, { Component, Fragment } from 'react';

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <section id='hero'>
          <h1>AQ War Effort</h1>
          <h3>Dragon's Call</h3>
          <h3>War Effort abgeschlossen um 08:46 Uhr, 17.08.2020</h3>
        </section>
      </Fragment>
    );
  }
}
