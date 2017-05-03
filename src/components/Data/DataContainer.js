import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/dataActions';

import Data from './Data';

class DataContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataLoaded: false,
    };
  }

  componentDidMount() {
    this.props.fetchData('./data/data.json')
      .then(() => this.setState({ dataLoaded: true }));
  }

  render() {
    return (
      <div>
        { this.state.dataLoaded ? <Data quotes={this.props.quotes} /> : '' }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  quotes: state.data.quotes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: (path) => dispatch(fetchData(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataContainer);
