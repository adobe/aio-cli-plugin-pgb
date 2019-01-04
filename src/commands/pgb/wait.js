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

class WaitCommand extends BaseCommand {}

WaitCommand.flags = Object.assign({}, BaseCommand.flags, {
  'exit-code': flags.boolean({description: 'Fail command if build fails'}),
  'no-progress': flags.boolean({description: 'Do not show progress'}),
})

WaitCommand.args = [{name: 'id', required: true}]

WaitCommand.description = 'Waits for a build for the specified app'

module.exports = WaitCommand
