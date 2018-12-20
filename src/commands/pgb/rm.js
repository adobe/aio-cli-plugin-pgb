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

class RmCommand extends BaseCommand { }

RmCommand.flags = Object.assign({}, BaseCommand.flags, {
  force: flags.boolean({char: 'f', description: 'Skip confirmation'}),
  json: flags.boolean({char: 'j', description: 'Show raw json output'}),
  bare: flags.boolean({char: 'b', description: 'Show bare integer ids'}),
})

RmCommand.args = [{name: 'id', required: true}]

RmCommand.aliases = ['pgb:delete']

RmCommand.description = 'Delete the app with the specified app id'

module.exports = RmCommand
