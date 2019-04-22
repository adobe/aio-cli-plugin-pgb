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

jest.mock('@adobe/aio-cli-config')
const config = require('@adobe/aio-cli-config')

const {Command} = require('@oclif/command')
const TheCommand = require('../../src/base-command.js')
const {stdout} = require('stdout-stderr')
const HHelp = require('@oclif/plugin-help').default
const moduleVersion = require('../../package.json').version

beforeEach(() => stdout.start())
afterEach(() => stdout.stop())

test('exports', async () => {
  expect(typeof TheCommand).toEqual('function')
  expect(TheCommand.prototype).toBeInstanceOf(Command)
})

test('description', async () => {
  expect(TheCommand.description).not.toBeDefined()
})

test('aliases', async () => {
  expect(TheCommand.aliases).toEqual([])
})

test('flags', async () => {
  expect(Object.keys(TheCommand.flags)).toEqual(['version', 'no-colours', 'help'])
})

describe('instance methods', () => {
  let command
  let origArgv

  beforeEach(() => {
    command = new TheCommand([], { })
    origArgv = process.argv
    global.pgb.run = jest.fn(() => Promise.resolve())
  })

  afterEach(() => {
    process.argv = origArgv
  })

  describe('run', () => {
    test('exists', async () => {
      expect(command.run).toBeInstanceOf(Function)
    })

    test('pass through to pgb.run with non oclif command and args', () => {
      process.argv = ['/bin/node', 'aio', 'pgb:pgb_command']
      command.id = 'pgb:pgb_command'
      return command.run().then(() => {
        expect(process.argv).toEqual(['/bin/node', 'aio', 'pgb_command'])
        expect(global.pgb.run).toHaveBeenCalled()
      })
    })

    test('should use pgb.authtoken from aio-cli-config', () => {
      process.argv = ['/bin/node', 'aio', 'pgb:pgb_command']
      command.id = 'pgb:pgb_command'

      config.get.mockReturnValue('foobar')
      return command.run().then(() => {
        expect(process.argv).toEqual(['/bin/node', 'aio', 'pgb_command'])
        expect(process.env.PGB_AUTH_TOKEN).toEqual('foobar')
        expect(global.pgb.run).toHaveBeenCalled()
      })
    })

    test('if default just call help', async () => {
      let spy = jest.spyOn(HHelp.prototype, 'showHelp').mockReturnValue(true)
      command.id = 'pgb'
      return command.run().then(() => {
        expect(spy).toHaveBeenCalledWith(['pgb', '--help'])
      })
    })

    test('if version flag just print version', async () => {
      command = new TheCommand(['-v'], { })
      command.config = {name: 'Microsoft Edge', version: '1.0.0', platform: 'dirt', arch: '1'}
      return command.run().then(() => {
        expect(stdout.output).toBe(`Microsoft Edge/1.0.0 @adobe/aio-cli-plugin-pgb/${moduleVersion} dirt-1 node-${process.version} (pgb-cli/${pgb.moduleVersion})\n`)
      })
    })
  })

  describe('version', () => {
    test('exists', async () => {
      expect(command.version).toBeInstanceOf(Function)
    })

    test('returns userAgent plus plugin version', async () => {
      command.config = {name: 'Microsoft Edge', version: '1.0.0', platform: 'dirt', arch: '1'}
      expect(command.version()).toBe(`Microsoft Edge/1.0.0 @adobe/aio-cli-plugin-pgb/${moduleVersion} dirt-1 node-${process.version} (pgb-cli/${pgb.moduleVersion})`)
    })
  })

  describe('logDebug', () => {
    beforeEach(() => {
      command.debug = jest.fn()
    })
    afterEach(() => jest.resetAllMocks())

    test('exists', async () => {
      expect(command.logDebug).toBeInstanceOf(Function)
    })

    test('string input', async () => {
      command.logDebug('a string')
      expect(command.debug).toHaveBeenCalledWith('a string')
    })

    test('object input', async () => {
      command.logDebug({an: 'object'})
      expect(command.debug).toHaveBeenCalledWith('{ an: \'object\' }')
    })
  })

  describe('logError', () => {
    beforeEach(() => {
      command.error = jest.fn()
    })
    afterEach(() => jest.resetAllMocks())

    test('exists', async () => {
      expect(command.logError).toBeInstanceOf(Function)
    })

    test('string input', async () => {
      command.logError('a string')
      expect(command.error).toHaveBeenCalledWith('a string')
    })

    test('object input', async () => {
      command.logError('Error a string')
      expect(command.error).toHaveBeenCalledWith('a string')
    })
  })

  describe('logPrint', () => {
    test('exists', async () => {
      global.pgb.opts = {}
      expect(command.logPrint).toBeInstanceOf(Function)
    })

    test('string input', async () => {
      command.logPrint('a string')
      expect(stdout.output).toBe('a string\n')
    })

    describe('object input', () => {
      test('object input', async () => {
        command.logPrint({an: 'object'})
        expect(stdout.output).toBe('')
      })

      test('bare', async () => {
        global.pgb.opts = {bare: true}
        command.logPrint({bare: 1234, json: {is: 'json'}, pretty: {a: 'object'}})
        command.logPrint({json: {is: 'json'}, pretty: {a: 'object'}})
        expect(stdout.output).toBe('1234\n')
      })

      test('json', async () => {
        global.pgb.opts = {json: true}
        command.logPrint({bare: 1234, json: {is: 'json'}, pretty: {a: 'object'}})
        command.logPrint({bare: 1234, pretty: {a: 'object'}})
        expect(stdout.output).toBe('{"is":"json"}\n')
      })

      test('pretty object', async () => {
        global.pgb.opts = { }
        command.logPrint({bare: 1234, json: {is: 'json'}, pretty: {a: 'object'}})
        expect(stdout.output).toBe("{ a: 'object' }\n")
      })

      test('pretty string', async () => {
        global.pgb.opts = { }
        command.logPrint({bare: 1234, json: {is: 'json'}, pretty: 'pretty string'})
        expect(stdout.output).toBe('pretty string\n')
      })
    })
  })
})
