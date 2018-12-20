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

const BaseCommand = require('../../base-command.js')
const {flags} = require('@oclif/command')

class BuildCommand extends BaseCommand { }

BuildCommand.flags = Object.assign({}, BaseCommand.flags, {
  exit: flags.boolean({char: 'e', description: 'Exit immediately (do not wait for build)'}),
  'exit-code': flags.boolean({description: 'Fail command if build fails'}),
  json: flags.boolean({char: 'j', description: 'Show raw json output'}),
  bare: flags.boolean({char: 'b', description: 'Show bare integer ids'}),
})

BuildCommand.args = [
  {name: 'id', required: true},
  {name: 'platforms...', options: ['windows', 'ios', 'android']},
  {name: 'platforms...', options: ['windows', 'ios', 'android'], hidden: true},
  {name: 'platforms...', options: ['windows', 'ios', 'android'], hidden: true},
]

BuildCommand.strict = false

BuildCommand.description = 'Build an app for all platforms or for the optionally specified platforms'
BuildCommand.examples = ['$ aio pgb:build 12', '$ aio pgb:build 12 ios android']

module.exports = BuildCommand
