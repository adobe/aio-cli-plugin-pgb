oclif-plugin-pgb
================

oclif plugin for pgb-cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/aio-cli-plugin-pgb.svg)](https://npmjs.org/package/aio-cli-plugin-pgb)
[![Downloads/week](https://img.shields.io/npm/dw/aio-cli-plugin-pgb.svg)](https://npmjs.org/package/aio-cli-plugin-pgbb)
[![Build status](https://ci.appveyor.com/api/projects/status/64arn2jha5xrp3i3/branch/master?svg=true)](https://ci.appveyor.com/project/adobe/aio-cli-plugin-pgb/branch/master)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @adobe/aio-cli-plugin-pgb
$ aio-cli-plugin-pgb COMMAND
running command...
$ aio-cli-plugin-pgb (-v|--version|version)
@adobe/aio-cli-plugin-pgb/1.0.0-dev darwin-x64 node-v8.0.0
$ aio-cli-plugin-pgb --help [COMMAND]
USAGE
  $ aio-cli-plugin-pgb COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aio-cli-plugin-pgb pgb`](#aio-cli-plugin-pgb-pgb)
* [`aio-cli-plugin-pgb pgb:app ID`](#aio-cli-plugin-pgb-pgbapp-id)
* [`aio-cli-plugin-pgb pgb:build ID [PLATFORMS...]`](#aio-cli-plugin-pgb-pgbbuild-id-platforms)
* [`aio-cli-plugin-pgb pgb:download ID PLATFORM [PATH]`](#aio-cli-plugin-pgb-pgbdownload-id-platform-path)
* [`aio-cli-plugin-pgb pgb:key PLATFORM ID`](#aio-cli-plugin-pgb-pgbkey-platform-id)
* [`aio-cli-plugin-pgb pgb:keys [PLATFORM]`](#aio-cli-plugin-pgb-pgbkeys-platform)
* [`aio-cli-plugin-pgb pgb:lock PLATFORM ID`](#aio-cli-plugin-pgb-pgblock-platform-id)
* [`aio-cli-plugin-pgb pgb:log ID PLATFORM`](#aio-cli-plugin-pgb-pgblog-id-platform)
* [`aio-cli-plugin-pgb pgb:login`](#aio-cli-plugin-pgb-pgblogin)
* [`aio-cli-plugin-pgb pgb:logout`](#aio-cli-plugin-pgb-pgblogout)
* [`aio-cli-plugin-pgb pgb:ls [COLUMNS...]`](#aio-cli-plugin-pgb-pgbls-columns)
* [`aio-cli-plugin-pgb pgb:new REPOSITORY|DIRECTORY|FILE`](#aio-cli-plugin-pgb-pgbnew-repository-directory-file)
* [`aio-cli-plugin-pgb pgb:new-key PLATFORM`](#aio-cli-plugin-pgb-pgbnew-key-platform)
* [`aio-cli-plugin-pgb pgb:phonegaps`](#aio-cli-plugin-pgb-pgbphonegaps)
* [`aio-cli-plugin-pgb pgb:pull ID`](#aio-cli-plugin-pgb-pgbpull-id)
* [`aio-cli-plugin-pgb pgb:rm ID`](#aio-cli-plugin-pgb-pgbrm-id)
* [`aio-cli-plugin-pgb pgb:rm-key PLATFORM ID`](#aio-cli-plugin-pgb-pgbrm-key-platform-id)
* [`aio-cli-plugin-pgb pgb:unlock PLATFORM ID`](#aio-cli-plugin-pgb-pgbunlock-platform-id)
* [`aio-cli-plugin-pgb pgb:update ID [REPOSITORY|DIRECTORY|FILE]`](#aio-cli-plugin-pgb-pgbupdate-id-repository-directory-file)
* [`aio-cli-plugin-pgb pgb:update-key PLATFORM ID`](#aio-cli-plugin-pgb-pgbupdate-key-platform-id)
* [`aio-cli-plugin-pgb pgb:wait ID`](#aio-cli-plugin-pgb-pgbwait-id)
* [`aio-cli-plugin-pgb pgb:whoami`](#aio-cli-plugin-pgb-pgbwhoami)

## `aio-cli-plugin-pgb pgb`

Adobe I/O - PhoneGap Build CLI

```
USAGE
  $ aio-cli-plugin-pgb pgb

OPTIONS
  -v, --version  Show pgb cli version
  --help         Show help
```

_See code: [src/commands/pgb/index.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/index.js)_

## `aio-cli-plugin-pgb pgb:app ID`

Show information about the app specified by id

```
USAGE
  $ aio-cli-plugin-pgb pgb:app ID

OPTIONS
  -b, --bare     Show bare integer ids
  -d, --debug    Show debug output
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours
```

_See code: [src/commands/pgb/app.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/app.js)_

## `aio-cli-plugin-pgb pgb:build ID [PLATFORMS...]`

Build an app for all platforms or for the optionally specified platforms

```
USAGE
  $ aio-cli-plugin-pgb pgb:build ID [PLATFORMS...]

OPTIONS
  -b, --bare     Show bare integer ids
  -d, --debug    Show debug output
  -e, --exit     Exit immediately (do not wait for build)
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --exit-code    Fail command if build fails
  --help         Show help
  --no-colours   Do not use ansi colours

EXAMPLES
  $ aio pgb:build 12
  $ aio pgb:build 12 ios android
```

_See code: [src/commands/pgb/build.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/build.js)_

## `aio-cli-plugin-pgb pgb:download ID PLATFORM [PATH]`

Download the app package for a given app id and platform

```
USAGE
  $ aio-cli-plugin-pgb pgb:download ID PLATFORM [PATH]

OPTIONS
  -d, --debug    Show debug output
  -s, --stdout   Pipe downloaded app to stdout
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours

DESCRIPTION
  If path or stdout is not specified then the app will be downloaded to the current directory

EXAMPLES
  $ aio pgb:download 12 ios
  $ aio pgb download 12 ios /tmp/download/
```

_See code: [src/commands/pgb/download.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/download.js)_

## `aio-cli-plugin-pgb pgb:key PLATFORM ID`

Show information about the key specified by platform and id

```
USAGE
  $ aio-cli-plugin-pgb pgb:key PLATFORM ID

OPTIONS
  -b, --bare     Show bare integer ids
  -d, --debug    Show debug output
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours

EXAMPLE
  $ aio pgb:key ios 12
```

_See code: [src/commands/pgb/key.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/key.js)_

## `aio-cli-plugin-pgb pgb:keys [PLATFORM]`

List your signing keys, optionally filtered by platform

```
USAGE
  $ aio-cli-plugin-pgb pgb:keys [PLATFORM]

OPTIONS
  -b, --bare     Show bare integer ids
  -d, --debug    Show debug output
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio-cli-plugin-pgb pgb:ls-keys
  $ aio-cli-plugin-pgb pgb:list-keys

EXAMPLES
  $ aio pgb:keys
  $ aio pgb:keys ios
```

_See code: [src/commands/pgb/keys.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/keys.js)_

## `aio-cli-plugin-pgb pgb:lock PLATFORM ID`

Lock the signing key with the specified platform and id

```
USAGE
  $ aio-cli-plugin-pgb pgb:lock PLATFORM ID

OPTIONS
  -d, --debug    Show debug output
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours
```

_See code: [src/commands/pgb/lock.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/lock.js)_

## `aio-cli-plugin-pgb pgb:log ID PLATFORM`

Display the latest build log for the specified app id and platform

```
USAGE
  $ aio-cli-plugin-pgb pgb:log ID PLATFORM

OPTIONS
  -d, --debug    Show debug output
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours
```

_See code: [src/commands/pgb/log.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/log.js)_

## `aio-cli-plugin-pgb pgb:login`

Sign-in to PhoneGap Build

```
USAGE
  $ aio-cli-plugin-pgb pgb:login

OPTIONS
  -d, --debug    Show debug output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio-cli-plugin-pgb pgb:signin
  $ aio-cli-plugin-pgb pgb:sign-in
```

_See code: [src/commands/pgb/login.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/login.js)_

## `aio-cli-plugin-pgb pgb:logout`

Sign-out of PhoneGap Build

```
USAGE
  $ aio-cli-plugin-pgb pgb:logout

OPTIONS
  -d, --debug    Show debug output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio-cli-plugin-pgb pgb:signout
  $ aio-cli-plugin-pgb pgb:sign-out
```

_See code: [src/commands/pgb/logout.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/logout.js)_

## `aio-cli-plugin-pgb pgb:ls [COLUMNS...]`

List your apps

```
USAGE
  $ aio-cli-plugin-pgb pgb:ls [COLUMNS...]

OPTIONS
  -b, --bare     Show bare integer ids
  -d, --debug    Show debug output
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio-cli-plugin-pgb pgb:apps
  $ aio-cli-plugin-pgb pgb:list
```

_See code: [src/commands/pgb/ls.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/ls.js)_

## `aio-cli-plugin-pgb pgb:new REPOSITORY|DIRECTORY|FILE`

Add a new app from the specified repository, directory or file

```
USAGE
  $ aio-cli-plugin-pgb pgb:new REPOSITORY|DIRECTORY|FILE

OPTIONS
  -e, --exit                             Exit immediately (do not wait for build)
  -v, --version                          Show pgb cli version
  --android-key=android-key              Key id for android key
  --android-phonegap=android-phonegap    PhoneGap version for android platform
  --debug=true|false                     Debugging toggle
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
  $ aio-cli-plugin-pgb pgb:add
  $ aio-cli-plugin-pgb pgb:create

EXAMPLES
  $ aio pgb:new /path/to/dir --ignore node_modules,**/.log
  $ aio pgb:new http://github.com/org/repo --tag=staging --hydrates=true
```

_See code: [src/commands/pgb/new.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/new.js)_

## `aio-cli-plugin-pgb pgb:new-key PLATFORM`

Add a new signing key

```
USAGE
  $ aio-cli-plugin-pgb pgb:new-key PLATFORM

OPTIONS
  -b, --bare                   Show bare integer ids
  -d, --debug                  Show debug output
  -j, --json                   Show raw json output
  -v, --version                Show pgb cli version
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
  $ aio-cli-plugin-pgb pgb:add-key
  $ aio-cli-plugin-pgb pgb:create-key

EXAMPLES
  $ aio pgb:new-key ios --title='ios key' --profile='/path/to/profile.mobileprovision' --key='/path/to/key.p12'
  $ aio pgb:new-key android --title='android key' --alias='my_alias' --key='/path/to/key.keystore'
  $ aio pgb:new-key windows --title='windows key' --key='/path/to/key.pfx'
  $ aio pgb:new-key winphone --title='winphone publisher id' --publisher_id='XXXXXXXXX-XXXXXX'
```

_See code: [src/commands/pgb/new-key.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/new-key.js)_

## `aio-cli-plugin-pgb pgb:phonegaps`

List supported versions of PhoneGap / Cordova

```
USAGE
  $ aio-cli-plugin-pgb pgb:phonegaps

OPTIONS
  -d, --debug    Show debug output
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio-cli-plugin-pgb pgb:cordovas
```

_See code: [src/commands/pgb/phonegaps.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/phonegaps.js)_

## `aio-cli-plugin-pgb pgb:pull ID`

Shortcut to clone and update a repo backed app specified by an id

```
USAGE
  $ aio-cli-plugin-pgb pgb:pull ID

OPTIONS
  -e, --exit                             Exit immediately (do not wait for build)
  -v, --version                          Show pgb cli version
  --android-key=android-key              Key id for android key
  --android-phonegap=android-phonegap    PhoneGap version for android platform
  --debug=true|false                     Debugging toggle
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
  $ aio-cli-plugin-pgb pgb:clone

EXAMPLES
  $ aio pgb:pull 12
  $ aio pgb:pull 12 --hydrates=true
```

_See code: [src/commands/pgb/pull.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/pull.js)_

## `aio-cli-plugin-pgb pgb:rm ID`

Delete the app with the specified app id

```
USAGE
  $ aio-cli-plugin-pgb pgb:rm ID

OPTIONS
  -b, --bare     Show bare integer ids
  -d, --debug    Show debug output
  -f, --force    Skip confirmation
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio-cli-plugin-pgb pgb:delete
```

_See code: [src/commands/pgb/rm.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/rm.js)_

## `aio-cli-plugin-pgb pgb:rm-key PLATFORM ID`

Delete the key with the specified platform and key id

```
USAGE
  $ aio-cli-plugin-pgb pgb:rm-key PLATFORM ID

OPTIONS
  -b, --bare     Show bare integer ids
  -d, --debug    Show debug output
  -f, --force    Skip confirmation
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio-cli-plugin-pgb pgb:delete-key
```

_See code: [src/commands/pgb/rm-key.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/rm-key.js)_

## `aio-cli-plugin-pgb pgb:unlock PLATFORM ID`

Unlock the signing key with the specified platform and id.

```
USAGE
  $ aio-cli-plugin-pgb pgb:unlock PLATFORM ID

OPTIONS
  -b, --bare     Show bare integer ids
  -d, --debug    Show debug output
  -j, --json     Show raw json output
  -v, --version  Show pgb cli version
  --help         Show help
  --no-colours   Do not use ansi colours

ALIASES
  $ aio-cli-plugin-pgb pgb:unlock-key
```

_See code: [src/commands/pgb/unlock.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/unlock.js)_

## `aio-cli-plugin-pgb pgb:update ID [REPOSITORY|DIRECTORY|FILE]`

Update an app and / or an app's properties from the optional repository,

```
USAGE
  $ aio-cli-plugin-pgb pgb:update ID [REPOSITORY|DIRECTORY|FILE]

OPTIONS
  -b, --bare                             Show bare integer ids
  -e, --exit                             Exit immediately (do not wait for build)
  -j, --json                             Show raw json output
  -v, --version                          Show pgb cli version
  --android-key=android-key              Key id for android key
  --android-phonegap=android-phonegap    PhoneGap version for android platform
  --debug=true|false                     Debugging toggle
  --default=true|false                   Specify this key as the default key
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
  --title=title                          Title of key
  --windows-key=windows-key              Key id for windows key
  --winphone-key=winphone-key            Key id for winphone key
  --winphone-phonegap=winphone-phonegap  honeGap version for winphone platform

EXAMPLE
  $ aio pgb:update 12 /path/to/app --hydrates=true --ios_key=24
```

_See code: [src/commands/pgb/update.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/update.js)_

## `aio-cli-plugin-pgb pgb:update-key PLATFORM ID`

Update a signing key

```
USAGE
  $ aio-cli-plugin-pgb pgb:update-key PLATFORM ID

OPTIONS
  -b, --bare            Show bare integer ids
  -d, --debug           Show debug output
  -j, --json            Show raw json output
  -v, --version         Show pgb cli version
  --default=true|false  Specify this key as the default key
  --help                Show help
  --no-colours          Do not use ansi colours
  --title=title         Title of key

EXAMPLE
  $ aio pgb:update-key ios 12 --title='new title' --default=true
```

_See code: [src/commands/pgb/update-key.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/update-key.js)_

## `aio-cli-plugin-pgb pgb:wait ID`

Waits for a build for the specified app

```
USAGE
  $ aio-cli-plugin-pgb pgb:wait ID

OPTIONS
  -b, --bare            Show bare integer ids
  -d, --debug           Show debug output
  -j, --json            Show raw json output
  -v, --version         Show pgb cli version
  --default=true|false  Specify this key as the default key
  --exit-code           Fail command if build fails
  --help                Show help
  --no-colours          Do not use ansi colours
  --no-progress         Do not show progress
  --title=title         Title of key
```

_See code: [src/commands/pgb/wait.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/wait.js)_

## `aio-cli-plugin-pgb pgb:whoami`

Display the signed in user

```
USAGE
  $ aio-cli-plugin-pgb pgb:whoami

OPTIONS
  -b, --bare            Show bare integer ids
  -d, --debug           Show debug output
  -j, --json            Show raw json output
  -v, --version         Show pgb cli version
  --default=true|false  Specify this key as the default key
  --help                Show help
  --no-colours          Do not use ansi colours
  --title=title         Title of key

ALIASES
  $ aio-cli-plugin-pgb pgb:me
```

_See code: [src/commands/pgb/whoami.js](https://github.com/adobe/aio-cli-plugin-pgb/blob/v1.0.0-dev/src/commands/pgb/whoami.js)_
<!-- commandsstop -->
