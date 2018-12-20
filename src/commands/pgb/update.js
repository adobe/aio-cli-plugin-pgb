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

class UpdateCommand extends BaseCommand { }

UpdateCommand.flags = Object.assign({}, UpdateCommand.flags, {
  exit: flags.boolean({char: 'e', description: 'Exit immediately (do not wait for build)'}),
  'exit-code': flags.boolean({description: 'Fail command if build fails'}),
  'no-progress': flags.boolean({description: 'Do not show progress'}),
  phonegap: flags.string({description: 'PhoneGap version'}),
  'android-phonegap': flags.string({description: 'PhoneGap version for android platform'}),
  'ios-phonegap': flags.string({description: 'PhoneGap version for ios platform'}),
  'winphone-phonegap': flags.string({description: 'honeGap version for winphone platform'}),
  hydrates: flags.string({description: 'Hydration toggle', options: ['true', 'false']}),
  share: flags.string({description: 'Public sharing toggle', options: ['true', 'false']}),
  tag: flags.string({description: 'Tag / Branch for repository backed application. default: master'}),
  debug: flags.string({description: 'Debugging toggle', options: ['true', 'false']}),
  private: flags.string({description: 'Private app toggle', options: ['true', 'false']}),
  'android-key': flags.string({description: 'Key id for android key'}),
  'windows-key': flags.string({description: 'Key id for windows key'}),
  'ios-key': flags.string({description: 'Key id for ios key'}),
  'winphone-key': flags.string({description: 'Key id for winphone key'}),
  ignore: flags.string({description: 'Glob paths to ignore when uploading from a directory', multiple: true}),
})

UpdateCommand.args = [
  {name: 'id', required: true},
  {name: 'repository|directory|file'},
]

UpdateCommand.examples = [
  '$ aio pgb:update 12 /path/to/app --hydrates=true --ios_key=24',
]

UpdateCommand.description = "Update an app and / or an app's properties from the optional repository,"

module.exports = UpdateCommand
