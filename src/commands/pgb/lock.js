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

class LockCommand extends BaseCommand { }

LockCommand.flags = Object.assign({}, BaseCommand.flags, {json: flags.boolean({char: 'j', description: 'Show raw json output'})})

LockCommand.args = [
  {name: 'platform', required: true, options: ['android', 'ios', 'winphone', 'windows']},
  {name: 'id', required: true},
]

LockCommand.aliases = []

LockCommand.description = 'Lock the signing key with the specified platform and id'

module.exports = LockCommand
