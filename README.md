aio-cli-plugin-pgb
================

Adobe I/O cli plugin for pgb-cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@adobe/aio-cli-plugin-pgb.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-pgb)
[![Downloads/week](https://img.shields.io/npm/dw/@adobe/aio-cli-plugin-pgb.svg)](https://npmjs.org/package/@adobe/aio-cli-plugin-pgb)
[![Build Status](https://travis-ci.org/adobe/aio-cli-plugin-pgb.svg?branch=master)](https://travis-ci.org/adobe/aio-cli-plugin-pgb)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 
[![Codecov Coverage](https://img.shields.io/codecov/c/github/adobe/aio-cli-plugin-pgb/master.svg?style=flat-square)](https://codecov.io/gh/adobe/aio-cli-plugin-pgb/)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage
```sh-session
$ aio plugins:install -g @adobe/aio-cli-plugin-pgb
$ # OR
$ aio discover -i
$ aio pgb --help
```

# Commands
<!-- commands -->
* [`aio pgb`](#aio-pgb)
* [`aio pgb:app ID`](#aio-pgbapp-id)
* [`aio pgb:build ID [PLATFORMS...]`](#aio-pgbbuild-id-platforms)
* [`aio pgb:download ID PLATFORM [PATH]`](#aio-pgbdownload-id-platform-path)
* [`aio pgb:key PLATFORM ID`](#aio-pgbkey-platform-id)
* [`aio pgb:keys [PLATFORM]`](#aio-pgbkeys-platform)
* [`aio pgb:lock PLATFORM ID`](#aio-pgblock-platform-id)
* [`aio pgb:log ID PLATFORM`](#aio-pgblog-id-platform)
* [`aio pgb:login`](#aio-pgblogin)
* [`aio pgb:logout`](#aio-pgblogout)
* [`aio pgb:ls [COLUMNS...]`](#aio-pgbls-columns)
* [`aio pgb:new REPOSITORY|DIRECTORY|FILE`](#aio-pgbnew-repositorydirectoryfile)
* [`aio pgb:new-key PLATFORM`](#aio-pgbnew-key-platform)
* [`aio pgb:phonegaps`](#aio-pgbphonegaps)
* [`aio pgb:pull ID`](#aio-pgbpull-id)
* [`aio pgb:rm ID`](#aio-pgbrm-id)
* [`aio pgb:rm-key PLATFORM ID`](#aio-pgbrm-key-platform-id)
* [`aio pgb:unlock PLATFORM ID`](#aio-pgbunlock-platform-id)
* [`aio pgb:update ID [REPOSITORY|DIRECTORY|FILE]`](#aio-pgbupdate-id-repositorydirectoryfile)
* [`aio pgb:update-key PLATFORM ID`](#aio-pgbupdate-key-platform-id)
* [`aio pgb:wait ID`](#aio-pgbwait-id)
* [`aio pgb:whoami`](#aio-pgbwhoami)

## `aio pgb`

Adobe I/O - PhoneGap Build API

```
USAGE
  $ aio pgb

OPTIONS
  -v, --version  Show version
  --help         Show help
```

_See code: [src/commands/pgb/index.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/index.js)_

## `aio pgb:app ID`

Show information about the app specified by id

```
USAGE
  $ aio pgb:app ID

OPTIONS
  -b, --bare     Show bare integer ids
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours
```

_See code: [src/commands/pgb/app.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/app.js)_

## `aio pgb:build ID [PLATFORMS...]`

Build an app for all platforms or for the optionally specified platforms

```
USAGE
  $ aio pgb:build ID [PLATFORMS...]

OPTIONS
  -b, --bare     Show bare integer ids
  -e, --exit     Exit immediately (do not wait for build)
  -j, --json     Show raw json output
  -v, --version  Show version
  --exit-code    Fail command if build fails
  --help         Show help
  --no-colours   Do not use ansi colours

EXAMPLES
  $ aio pgb:build 12
  $ aio pgb:build 12 ios android
```

_See code: [src/commands/pgb/build.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/build.js)_

## `aio pgb:download ID PLATFORM [PATH]`

Download the app package for a given app id and platform

```
USAGE
  $ aio pgb:download ID PLATFORM [PATH]

OPTIONS
  -s, --stdout   Pipe downloaded app to stdout
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

DESCRIPTION
  If path or stdout is not specified then the app will be downloaded to the current directory

EXAMPLES
  $ aio pgb:download 12 ios
  $ aio pgb download 12 ios /tmp/download/
```

_See code: [src/commands/pgb/download.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/download.js)_

## `aio pgb:key PLATFORM ID`

Show information about the key specified by platform and id

```
USAGE
  $ aio pgb:key PLATFORM ID

OPTIONS
  -b, --bare     Show bare integer ids
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

EXAMPLE
  $ aio pgb:key ios 12
```

_See code: [src/commands/pgb/key.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/key.js)_

## `aio pgb:keys [PLATFORM]`

List your signing keys, optionally filtered by platform

```
USAGE
  $ aio pgb:keys [PLATFORM]

OPTIONS
  -b, --bare     Show bare integer ids
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio pgb:ls-keys
  $ aio pgb:list-keys

EXAMPLES
  $ aio pgb:keys
  $ aio pgb:keys ios
```

_See code: [src/commands/pgb/keys.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/keys.js)_

## `aio pgb:lock PLATFORM ID`

Lock the signing key with the specified platform and id

```
USAGE
  $ aio pgb:lock PLATFORM ID

OPTIONS
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours
```

_See code: [src/commands/pgb/lock.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/lock.js)_

## `aio pgb:log ID PLATFORM`

Display the latest build log for the specified app id and platform

```
USAGE
  $ aio pgb:log ID PLATFORM

OPTIONS
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours
```

_See code: [src/commands/pgb/log.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/log.js)_

## `aio pgb:login`

Sign-in to PhoneGap Build

```
USAGE
  $ aio pgb:login

OPTIONS
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio pgb:signin
  $ aio pgb:sign-in
```

_See code: [src/commands/pgb/login.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/login.js)_

## `aio pgb:logout`

Sign-out of PhoneGap Build

```
USAGE
  $ aio pgb:logout

OPTIONS
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio pgb:signout
  $ aio pgb:sign-out
```

_See code: [src/commands/pgb/logout.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/logout.js)_

## `aio pgb:ls [COLUMNS...]`

List your apps

```
USAGE
  $ aio pgb:ls [COLUMNS...]

OPTIONS
  -b, --bare     Show bare integer ids
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio pgb:apps
  $ aio pgb:list
```

_See code: [src/commands/pgb/ls.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/ls.js)_

## `aio pgb:new REPOSITORY|DIRECTORY|FILE`

Add a new app from the specified repository, directory or file

```
USAGE
  $ aio pgb:new REPOSITORY|DIRECTORY|FILE

OPTIONS
  -e, --exit                             Exit immediately (do not wait for build)
  -v, --version                          Show version
  --android-key=android-key              Key id for android key
  --android-phonegap=android-phonegap    PhoneGap version for android platform
  --exit-code                            Fail command if build fails
  --help                                 Show help
  --hydrates=true|false                  Hydration toggle
  --ignore=ignore                        Glob paths to ignore when uploading from a directory
  --ios-key=ios-key                      Key id for ios key
  --ios-phonegap=ios-phonegap            PhoneGap version for ios platform
  --no-colours                           Do not use ansi colours
  --no-progress                          Do not show progress
  --phonegap=phonegap                    PhoneGap version
  --private=true|false                   Private app toggle
  --share=true|false                     Public sharing toggle
  --tag=tag                              Tag / Branch for repository backed application. default: master
  --windows-key=windows-key              Key id for windows key
  --winphone-key=winphone-key            Key id for winphone key
  --winphone-phonegap=winphone-phonegap  honeGap version for winphone platform

ALIASES
  $ aio pgb:add
  $ aio pgb:create

EXAMPLES
  $ aio pgb:new /path/to/dir --ignore=node_modules,**/.log
  $ aio pgb:new http://github.com/org/repo --tag=staging --hydrates=true
```

_See code: [src/commands/pgb/new.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/new.js)_

## `aio pgb:new-key PLATFORM`

Add a new signing key

```
USAGE
  $ aio pgb:new-key PLATFORM

OPTIONS
  -b, --bare                   Show bare integer ids
  -j, --json                   Show raw json output
  -v, --version                Show version
  --alias=alias                Alias of key in keystore
  --default=true|false         Specify this key as the default key
  --help                       Show help
  --key=key                    Path to private signing key (.p12) / Keystore file
  --no-colours                 Do not use ansi colours
  --no-unlock                  Do not prompt to unlock key
  --profile=profile            Path to mobile provision file (.mobileprovision)
  --publisher_id=publisher_id  Windows Phone Publisher Id
  --title=title                (required) Title of key

ALIASES
  $ aio pgb:add-key
  $ aio pgb:create-key

EXAMPLES
  $ aio pgb:new-key ios --title='ios key' --profile='/path/to/profile.mobileprovision' --key='/path/to/key.p12'
  $ aio pgb:new-key android --title='android key' --alias='my_alias' --key='/path/to/key.keystore'
  $ aio pgb:new-key windows --title='windows key' --key='/path/to/key.pfx'
  $ aio pgb:new-key winphone --title='winphone publisher id' --publisher_id='XXXXXXXXX-XXXXXX'
```

_See code: [src/commands/pgb/new-key.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/new-key.js)_

## `aio pgb:phonegaps`

List supported versions of PhoneGap / Cordova

```
USAGE
  $ aio pgb:phonegaps

OPTIONS
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio pgb:cordovas
```

_See code: [src/commands/pgb/phonegaps.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/phonegaps.js)_

## `aio pgb:pull ID`

Shortcut to clone and update a repo backed app specified by an id

```
USAGE
  $ aio pgb:pull ID

OPTIONS
  -e, --exit                             Exit immediately (do not wait for build)
  -v, --version                          Show version
  --android-key=android-key              Key id for android key
  --android-phonegap=android-phonegap    PhoneGap version for android platform
  --exit-code                            Fail command if build fails
  --help                                 Show help
  --hydrates=true|false                  Hydration toggle
  --ignore=ignore                        Glob paths to ignore when uploading from a directory
  --ios-key=ios-key                      Key id for ios key
  --ios-phonegap=ios-phonegap            PhoneGap version for ios platform
  --no-colours                           Do not use ansi colours
  --no-progress                          Do not show progress
  --phonegap=phonegap                    PhoneGap version
  --private=true|false                   Private app toggle
  --share=true|false                     Public sharing toggle
  --tag=tag                              Tag / Branch for repository backed application. default: master
  --windows-key=windows-key              Key id for windows key
  --winphone-key=winphone-key            Key id for winphone key
  --winphone-phonegap=winphone-phonegap  honeGap version for winphone platform

ALIASES
  $ aio pgb:clone

EXAMPLES
  $ aio pgb:pull 12
  $ aio pgb:pull 12 --hydrates=true
```

_See code: [src/commands/pgb/pull.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/pull.js)_

## `aio pgb:rm ID`

Delete the app with the specified app id

```
USAGE
  $ aio pgb:rm ID

OPTIONS
  -b, --bare     Show bare integer ids
  -f, --force    Skip confirmation
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio pgb:delete
```

_See code: [src/commands/pgb/rm.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/rm.js)_

## `aio pgb:rm-key PLATFORM ID`

Delete the key with the specified platform and key id

```
USAGE
  $ aio pgb:rm-key PLATFORM ID

OPTIONS
  -b, --bare     Show bare integer ids
  -f, --force    Skip confirmation
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio pgb:delete-key
```

_See code: [src/commands/pgb/rm-key.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/rm-key.js)_

## `aio pgb:unlock PLATFORM ID`

Unlock the signing key with the specified platform and id.

```
USAGE
  $ aio pgb:unlock PLATFORM ID

OPTIONS
  -b, --bare     Show bare integer ids
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio pgb:unlock-key
```

_See code: [src/commands/pgb/unlock.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/unlock.js)_

## `aio pgb:update ID [REPOSITORY|DIRECTORY|FILE]`

Update an app and / or an app's properties from the optional repository,

```
USAGE
  $ aio pgb:update ID [REPOSITORY|DIRECTORY|FILE]

OPTIONS
  -e, --exit                             Exit immediately (do not wait for build)
  -v, --version                          Show version
  --android-key=android-key              Key id for android key
  --android-phonegap=android-phonegap    PhoneGap version for android platform
  --exit-code                            Fail command if build fails
  --help                                 Show help
  --hydrates=true|false                  Hydration toggle
  --ignore=ignore                        Glob paths to ignore when uploading from a directory
  --ios-key=ios-key                      Key id for ios key
  --ios-phonegap=ios-phonegap            PhoneGap version for ios platform
  --no-colours                           Do not use ansi colours
  --no-progress                          Do not show progress
  --phonegap=phonegap                    PhoneGap version
  --private=true|false                   Private app toggle
  --share=true|false                     Public sharing toggle
  --tag=tag                              Tag / Branch for repository backed application. default: master
  --windows-key=windows-key              Key id for windows key
  --winphone-key=winphone-key            Key id for winphone key
  --winphone-phonegap=winphone-phonegap  honeGap version for winphone platform

EXAMPLE
  $ aio pgb:update 12 /path/to/app --hydrates=true --ios_key=24
```

_See code: [src/commands/pgb/update.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/update.js)_

## `aio pgb:update-key PLATFORM ID`

Update a signing key

```
USAGE
  $ aio pgb:update-key PLATFORM ID

OPTIONS
  -b, --bare            Show bare integer ids
  -j, --json            Show raw json output
  -v, --version         Show version
  --default=true|false  Specify this key as the default key
  --help                Show help
  --no-colours          Do not use ansi colours
  --title=title         Title of key

EXAMPLE
  $ aio pgb:update-key ios 12 --title='new title' --default=true
```

_See code: [src/commands/pgb/update-key.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/update-key.js)_

## `aio pgb:wait ID`

Waits for a build for the specified app

```
USAGE
  $ aio pgb:wait ID

OPTIONS
  -v, --version  Show version
  --exit-code    Fail command if build fails
  --help         Show help
  --no-colours   Do not use ansi colours
  --no-progress  Do not show progress
```

_See code: [src/commands/pgb/wait.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/wait.js)_

## `aio pgb:whoami`

Display the signed in user

```
USAGE
  $ aio pgb:whoami

OPTIONS
  -j, --json     Show raw json output
  -v, --version  Show version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio pgb:me
```

_See code: [src/commands/pgb/whoami.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.2.1/src/commands/pgb/whoami.js)_
<!-- commandsstop -->
