// @flow
import os from 'os'
import path from 'path'
import fs from 'fs'
import React, { Component } from 'react'
import Home from '../components/Home'

export default class HomePage extends Component {
  componentWillMount() {
    fs.readFile(`${process.env.HOME}/.two1/wallet/default_wallet.json`, 'utf8', (error, result) => {
      if (error) {
        console.error(error)
      }

      console.log('result: ', JSON.parse(result))
    })
  }

  render() {
    return (
      <Home />
    );
  }
}
