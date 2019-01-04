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

class NewKeyCommand extends BaseCommand { }

NewKeyCommand.flags = Object.assign({}, BaseCommand.flags, {
  json: flags.boolean({char: 'j', description: 'Show raw json output'}),
  bare: flags.boolean({char: 'b', description: 'Show bare integer ids'}),
  'no-unlock': flags.boolean({description: 'Do not prompt to unlock key'}),
  title: flags.string({description: 'Title of key', required: true}),
  profile: flags.string({description: 'Path to mobile provision file (.mobileprovision)'}),
  key: flags.string({description: 'Path to private signing key (.p12) / Keystore file'}),
  publisher_id: flags.string({description: 'Windows Phone Publisher Id'}), // eslint-disable-line  camelcase
  alias: flags.string({description: 'Alias of key in keystore'}),
  default: flags.string({description: 'Specify this key as the default key', options: ['true', 'false']}),
})

NewKeyCommand.args = [
  {name: 'platform', required: true, options: ['android', 'ios', 'winphone', 'windows']},
]

NewKeyCommand.aliases = ['pgb:add-key', 'pgb:create-key']

NewKeyCommand.description = 'Add a new signing key'

NewKeyCommand.examples = [
  "$ aio pgb:new-key ios --title='ios key' --profile='/path/to/profile.mobileprovision' --key='/path/to/key.p12'",
  "$ aio pgb:new-key android --title='android key' --alias='my_alias' --key='/path/to/key.keystore'",
  "$ aio pgb:new-key windows --title='windows key' --key='/path/to/key.pfx'",
  "$ aio pgb:new-key winphone --title='winphone publisher id' --publisher_id='XXXXXXXXX-XXXXXX'",
]

module.exports = NewKeyCommand
