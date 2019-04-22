/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const {Command, flags} = require('@oclif/command')
const util = require('util')
const HHelp = require('@oclif/plugin-help').default
const moduleVersion = require('../package.json').version
const config = require('@adobe/aio-cli-config')

global.pgb = require('pgb-cli')()
delete pgb.cliOpts.flags.help
delete pgb.cliOpts.flags.version
delete pgb.cliOpts.flags.debug

class BaseCommand extends Command {
  async run() {
    let authtoken = config.get('pgb.authtoken') || config.get('pgb.auth_token')
    if (!process.env.PGB_AUTH_TOKEN && authtoken) {
      process.env.PGB_AUTH_TOKEN = authtoken
    }

    pgb.error = this.logError.bind(this)
    pgb.print = this.logPrint.bind(this)
    pgb.debug = this.logDebug.bind(this)

    pgb.api.defaults.headers['User-Agent'] = this.version()

    let args = this.parse()

    if (args.flags.version || args.args.version === 'version') {
      this.log(this.version())
    } else if (this.id === 'pgb') {
      const help = new HHelp(this.config)
      help.showHelp(['pgb', '--help'])
    } else {
      process.argv = process.argv.slice(0, 2)
      process.argv.push(this.id.slice(4))
      process.argv = process.argv.concat(this.argv)
      this.debug(`redirecting to "pgb ${process.argv.slice(2).join(' ')}"`)
      return pgb.run()
    }
  }

  version() {
    return `${this.config.name}/${this.config.version} @adobe/aio-cli-plugin-pgb/${moduleVersion} ${this.config.platform}-${this.config.arch} node-${process.version} (pgb-cli/${pgb.moduleVersion})`
  }

  logError(obj) {
    this.error(obj.toString().replace(/^Error /, ''))
  }

  logDebug(obj) {
    if (typeof obj === 'string') {
      this.debug(obj)
    } else {
      this.debug(util.inspect(obj, {maxArrayLength: null, breakLength: 70, depth: 5}))
    }
  }

  logPrint(obj) {
    if (typeof obj === 'string') obj = {pretty: obj}

    if (pgb.opts.json) {
      if (obj.json) this.log(JSON.stringify(obj.json))
    } else if (pgb.opts.bare) {
      if (obj.bare) this.log(obj.bare)
    } else if (obj.pretty && typeof obj.pretty === 'string') {
      this.log(pgb.colours.default(obj.pretty))
    } else if (obj.pretty) {
      this.log(util.inspect(obj.pretty, {colors: true, maxArrayLength: null, breakLength: 70, depth: 5}))
    }
  }
}

BaseCommand.flags = {
  version: flags.boolean({char: 'v', description: 'Show version'}),
  'no-colours': flags.boolean({description: 'Do not use ansi colours'}),
  help: flags.boolean({description: 'Show help'}),
}

module.exports = BaseCommand
