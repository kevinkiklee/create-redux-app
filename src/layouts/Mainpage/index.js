import React, { Component } from 'react'
import Header from '../../components/Header'
import Quotes from '../../components/Quotes'
import './index.css'

class Mainpage extends Component {
  render() {
    return (
      <div classname='mainpage'>
        <Header />
        <Quotes />
      </div>
    )
  }
}

export default Mainpage
