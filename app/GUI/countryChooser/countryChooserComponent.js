import React, { Component, PropTypes } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import { projectionParams } from '../../config/globals';

export default class CountryChooserComponent extends Component {
  chooseSource(ctry, src) {
    const { getRaw, setRaw, app, setObject } = this.props;
    const { cacheData } = app;
    setObject({ country: false });
    if (cacheData[ctry + src]) {
      setRaw(cacheData[ctry + src], ctry, src);
    } else {
      getRaw(ctry, src);
    }
  }

  render() {
    const { app } = this.props;
    const { country, source } = app;

    const sources = [
      {
        name: 'Filtered Inhab. Places (Smallest)',
        key: 'OSM2',
        style: 'primary',
      },
      {
        name: 'Inhabited Places (Large)',
        key: 'OSM1',
        style: 'warning',
      },
      {
        name: 'All Places (HUGE, especially for FR and ES)',
        key: 'OSM0',
        style: 'danger',
      },
    ];

    const srcbtns = [];
    sources.map(s => {
      const style = (s.key === source ? s.style : 'default');
      srcbtns.push(<Button
        bsStyle={style}
        key={s.key}
        disabled={!country}
        onClick={() => this.chooseSource(country, s.key)}
      >
        {s.name}
      </Button>);
    });

    const countries = Array.from(projectionParams.keys());
    const btns = [];
    countries.map(c => {
      const style = (c === country ? 'primary' : 'default');
      btns.push(<Button
        bsStyle={style}
        key={c}
        onClick={() => this.chooseSource(c, source)}
      >
        {c}
      </Button>);
    });

    return (
      <div>
        Country:{' '}
        <ButtonGroup>
          {btns}
        </ButtonGroup>
        <br/>
        <br/>
        Source:{' '}
        <ButtonGroup>
          {srcbtns}
        </ButtonGroup>
        <br/>
        <p style={{ float: 'right' }}>
          <small>Data
            &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
          </small>
        </p>
        <hr/>
      </div>
    );
  }
}

CountryChooserComponent.propTypes = {
  app: PropTypes.object,
  getRaw: PropTypes.func.isRequired,
  setRaw: PropTypes.func.isRequired,
  setObject: PropTypes.func.isRequired,
};
