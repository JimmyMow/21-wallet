import fs from 'fs'
import { fetch } from './wallet'

function fsp(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (error, data) => {
      if (error) {
        reject(error)
      }

      resolve(data)
    })
  })
}

export function auth() {
  return fsp(`${process.env.HOME}/.two1/wallet/default_wallet.json`)
  .then(data => data)
  .catch(error => Promise.reject(error))
}

export function wallet(args) {
  let result = {}
  for (let arg of args) {
    fetch([arg])
    .then(data => console.log('data: ', data))
    .catch(error => console.log('error: ', error))
  }
}