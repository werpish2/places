import React, { Component, PropTypes } from 'react';
import { Grid, Col, Row, ButtonGroup, Button } from 'react-bootstrap';

import ActiveTags from './activeTags';
import NewTag from './newTag';
import AdvancedRegExp from './advancedRegExp';

export default class FilterComponent extends Component {
  setFilterLinkInternal(type) {
    const { app, setFilterLink } = this.props;
    const { filterObject } = app;
    setFilterLink(filterObject, type);
  }

  render() {
    const { app, setFilter, setRegExp } = this.props;
    const { filterObject, filterLink, regExp, advancedMode } = app;
    const { start, end, any } = filterObject;

    const content = [];

    if (!advancedMode) {
      content.push(<Grid fluid key={'notAdvFilter'}>
        <Row>
          <Col xs={12}>
            <h4>Link Filters <ButtonGroup>
              <Button
                bsSize={'xsmall'}
                bsStyle={filterLink === 'AND' ? 'primary' : 'default'}
                onClick={() => this.setFilterLinkInternal('AND')}
              >AND
              </Button>
              <Button
                bsSize={'xsmall'}
                bsStyle={filterLink === 'OR' ? 'primary' : 'default'}
                onClick={() => this.setFilterLinkInternal('OR')}
              >OR
              </Button>
            </ButtonGroup></h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Starts with...</h4>
            <NewTag
              position={'start'}
              setFilter={setFilter}
              filterObject={filterObject}
            />
            <ActiveTags
              position={'start'}
              tags={start}
              filterObject={filterObject}
              setFilter={setFilter}
            />
          </Col>
          <Col xs={4}>
            <h4>Ends in...</h4>
            <NewTag
              position={'end'}
              setFilter={setFilter}
              filterObject={filterObject}
            />
            <ActiveTags
              position={'end'}
              tags={end}
              filterObject={filterObject}
              setFilter={setFilter}
            />
          </Col>
          <Col xs={4}>
            <h4>Contains...</h4>
            <NewTag
              position={'any'}
              setFilter={setFilter}
              filterObject={filterObject}
            />
            <ActiveTags
              position={'any'}
              tags={any}
              filterObject={filterObject}
              setFilter={setFilter}
            />
          </Col>
        </Row>
      </Grid>);
    } else {
      content.push(
        <AdvancedRegExp key={'advFilter'}
                        regExp={regExp}
                        setRegExp={setRegExp}
        />
      );
    }

    return (<div>{content}</div>);
  }
}

FilterComponent.propTypes = {
  app: PropTypes.object,
  setFilter: PropTypes.func.isRequired,
  setFilterLink: PropTypes.func.isRequired,
  setRegExp: PropTypes.func.isRequired,
};
