// @flow
import React, { Component } from 'react'
import fs from 'fs'
import Home from '../components/Home'

export default class HomePage extends Component {
  componentWillMount() {
    const { router } = this.props
    fs.readFile(`${process.env.HOME}/.two1/wallet/default_wallet.json`, 'utf8', (error, result) => {
      if (error) {
        console.error(error)
        return;
      }

      console.log('result: ', JSON.parse(result))
      router.push('/counter')
    })
  }

  render() {
    return (
      <Home />
    );
  }
}
