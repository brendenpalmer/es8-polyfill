![Build status](https://travis-ci.org/brendenpalmer/es8-polyfill.svg?branch=master "Build status")

# ES8 Polyfill

* Polyfill to include the following ES8 features:
  * Object.values
  * Object.entries
  * String.prototype.padStart
  * String.prototype.padEnd

## Usage

If you're interested in contributing, see the [Contributing](https://github.com/brendenpalmer/es8-polyfill#contributing) section below. Otherwise, install this package via npm: [es8-polyfill](https://www.npmjs.com/package/es8-polyfill).

To include all polyfills:

```js
require('es8-polyfill')
```

To include only String polyfills:

```js
require('es8-polyfill/lib/string')
```

To include only Object polyfills:

```js
require('es8-polyfill/lib/object')
```

To access helper functions directly:

```js
const { padEnd, padStart } = require('es8-polyfill/lib/helpers/string')
```

```js
const { entries, values } = require('es8-polyfill/lib/helpers/object')
```

## Installation

Ensure that Node, npm, and yarn are installed.

Then, install gulp globally:

```
npm install -g gulp
```

```
git clone https://github.com/brendenpalmer/es8-polyfill.git
```

Finally, install all development dependencies:

```
cd es8-polyfill
yarn
```

Run the default gulp task to run the linter, run unit tests, build documentation, and build the required scripts.

Look at the [gulp](https://github.com/brendenpalmer/es8-polyfill/tree/master/gulp) folder to view the available tasks to run.

## Documentation

The built documentation will always be located here: [Documentation](https://github.com/brendenpalmer/weakmap/tree/master/docs).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## History

See the [CHANGELOG](https://github.com/brendenpalmer/es8-polyfill/blob/master/CHANGELOG.md).

## License

Licensed under MIT. See the full license here:  [license](https://github.com/brendenpalmer/es8-polyfill/blob/master/LICENSE).
