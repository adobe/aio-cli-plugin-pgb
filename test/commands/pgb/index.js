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

const HHelp = require('@oclif/plugin-help').default
const TheCommand = require('../../../src/commands/pgb')
const {Command} = require('@oclif/command')

test('exports', async () => {
  expect(typeof TheCommand).toEqual('function')
  expect(TheCommand.prototype instanceof Command).toBeTruthy()
})

test('description', async () => {
  expect(TheCommand.description).toBeDefined()
})

test('aliases', async () => {
  expect(TheCommand.aliases).toEqual([])
})

describe('instance methods', () => {
  let command
  let origArgv

  beforeEach(() => {
    command = new TheCommand([], { })
    origArgv = process.argv
  })

  afterEach(() => {
    process.argv = origArgv
  })

  describe('run', () => {
    test('exists', async () => {
      expect(command.run).toBeInstanceOf(Function)
    })

    test('just call help', async () => {
      let spy = jest.spyOn(HHelp.prototype, 'showHelp').mockReturnValue(true)
      return command.run().then(() => {
        expect(spy).toHaveBeenCalledWith(['pgb', '--help'])
      })
    })
  })
})
