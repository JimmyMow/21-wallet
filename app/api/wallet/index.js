import path from 'path'
import PythonShell from 'python-shell'

export function fetch(args) {
  return new Promise(function(resolve, reject) {
    const scriptPath = `${path.dirname(process.mainModule.filename)}/api/wallet/`
    const options = {
      scriptPath,
      mode: 'json',
      pythonPath: '/usr/local/bin/python3',
      args: args
    }

    PythonShell.run('main.py', options, (err, result) => {
      if (err) {
        reject(err)
      }
      resolve(result)
    })
  })
}