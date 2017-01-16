import path from 'path'
import PythonShell from 'python-shell'

export function fetch(args) {
  return new Promise(function(resolve, reject) {
    const scriptPath = `${path.dirname(process.mainModule.filename)}/api/wallet/`
    const options = {
      scriptPath,
      args,
      mode: 'json',
      pythonPath: '/usr/local/bin/python3'
    }

    PythonShell.run('main.py', options, (err, result) => {
      if (err) {
        reject(err)
      }
      resolve(result)
    })
  })
}