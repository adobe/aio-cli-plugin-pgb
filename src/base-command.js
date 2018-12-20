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
global.pgb = require('pgb-cli')()

class BaseCommand extends Command {
  async run() {
    pgb.error = super.error
    pgb.print = this.logPrint
    pgb.debug = this.logDebug

    delete pgb.cliOpts.flags.help

    pgb.api.defaults.headers['User-Agent'] = this.config.userAgent
    pgb.moduleVersion = this.config.userAgent
    let args = this.parse()
    if (args.flags.version) {
      this.log(pgb.moduleVersion)
    } else {
      process.argv[2] = process.argv[2].slice(4)
      return pgb.run()
    }
  }

  logDebug(obj) {
    if (pgb.opts.debug) {
      if (typeof obj === 'string') {
        super.log(pgb.colours.debug(obj))
      } else {
        super.log(pgb.colours.debug(util.inspect(obj, {maxArrayLength: null, breakLength: 70, depth: 5})))
      }
    }
  }

  logPrint(obj) {
    if (typeof obj === 'string') obj = {pretty: obj}

    if (pgb.opts.json) {
      if (obj.json) super.log(JSON.stringify(obj.json))
    } else if (pgb.opts.bare) {
      if (obj.bare) super.log(obj.bare)
    } else if (obj.pretty && typeof obj.pretty === 'string') {
      super.log(pgb.colours.default(obj.pretty))
    } else if (obj.pretty) {
      super.log(util.inspect(obj.pretty, {colors: true, maxArrayLength: null, breakLength: 70, depth: 5}))
    }
  }
}

BaseCommand.flags = {
  debug: flags.boolean({char: 'd', description: 'Show debug output'}),
  version: flags.boolean({char: 'v', description: 'Show pgb cli version'}),
  'no-colours': flags.boolean({description: 'Do not use ansi colours'}),
  help: flags.boolean({description: 'Show help'}),
}

module.exports = BaseCommand
