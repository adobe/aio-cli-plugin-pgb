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

class LogCommand extends BaseCommand { }

LogCommand.flags = Object.assign({}, BaseCommand.flags, {
  json: flags.boolean({char: 'j', description: 'Show raw json output'}),
})

LogCommand.args = [
  {name: 'id', required: true},
  {name: 'platform', required: true, options: ['android', 'ios', 'windows']},
]

LogCommand.description = 'Display the latest build log for the specified app id and platform'

module.exports = LogCommand
