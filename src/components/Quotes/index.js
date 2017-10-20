import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../actions/dataActions'
import './index.css'

class DataContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataLoaded: false,
    }
  }

  componentDidMount() {
    this.props.fetchData('./data/data.json')
      .then(() => this.setState({ dataLoaded: true }))
  }

  render() {
    const quotes = this.props.quotes.map((quote, i) =>
      <h4 key={i}>{quote}</h4>
    )

    return (
      <div>
        { this.state.dataLoaded ? quotes : '' }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  quotes: state.data.quotes,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: (path) => dispatch(fetchData(path)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataContainer)
