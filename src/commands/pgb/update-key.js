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

const {flags} = require('@oclif/command')
const BaseCommand = require('../../base-command.js')

class UpdateKeyCommand extends BaseCommand { }

UpdateKeyCommand.flags = Object.assign(UpdateKeyCommand.flags, {
  json: flags.boolean({char: 'j', description: 'Show raw json output'}),
  bare: flags.boolean({char: 'b', description: 'Show bare integer ids'}),
  title: flags.string({description: 'Title of key'}),
  default: flags.string({description: 'Specify this key as the default key', options: ['true', 'false']}),
})

UpdateKeyCommand.args = [
  {name: 'platform', required: true, options: ['android', 'ios', 'winphone', 'windows']},
  {name: 'id', required: true},
]

UpdateKeyCommand.aliases = []

UpdateKeyCommand.examples = ["$ aio pgb:update-key ios 12 --title='new title' --default=true"]

UpdateKeyCommand.description = 'Update a signing key'

module.exports = UpdateKeyCommand
