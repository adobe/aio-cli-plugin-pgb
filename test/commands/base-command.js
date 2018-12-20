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

const {Command} = require('@oclif/command')
const TheCommand = require('../../src/base-command.js')
const {stdout} = require('stdout-stderr')

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
  expect(Object.keys(TheCommand.flags)).toEqual(['debug', 'version', 'no-colours', 'help'])
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

    test('pass through to pgb.run with non oclifd args', async done => {
      process.argv = ['/bin/node', 'aio', 'pgb:ls', 'woop']
      command.config = {userAgent: 'Microsoft Edge'}
      command.run().then(() => {
        expect(process.argv).toEqual(['/bin/node', 'aio', 'ls', 'woop'])
        done()
      }).catch(done.fail)
    })

    test('if version just print version', async () => {
      command = new TheCommand(['-v'], { })
      command.config = {userAgent: 'Microsoft Edge'}
      return command.run().then(() => {
        expect(stdout.output).toBe('Microsoft Edge\n')
      })
    })
  })

  describe('logDebug', () => {
    test('exists', async () => {
      global.pgb.opts = {debug: true}
      expect(command.logDebug).toBeInstanceOf(Function)
    })

    describe('debug off', () => {
      test('string input', async () => {
        global.pgb.opts = {debug: false}
        command.logDebug('a string')
        expect(stdout.output).toBe('')
      })

      test('object input', async () => {
        global.pgb.opts = {debug: false}
        command.logDebug({an: 'object'})
        expect(stdout.output).toBe('')
      })
    })

    describe('debug on', () => {
      test('string input', async () => {
        global.pgb.opts = {debug: true}
        command.logDebug('a string')
        expect(stdout.output).toBe('a string\n')
      })

      test('object input', async () => {
        global.pgb.opts = {debug: true}
        command.logDebug({an: 'object'})
        expect(stdout.output).toBe("{ an: 'object' }\n")
      })
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
