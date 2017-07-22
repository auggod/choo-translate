# choo-translate

[![npm][npm-image]][npm-url]
[![standard][standard-image]][standard-url]

Simple translation solution for choo!

Expect your translations files to be available as /assets/${lang}.json (you could just use bankai then)

## Usage

```js
var choo = require('choo')

var app = choo()
app.use(log())
app.use(require('choo-translate')('fr'))
app.mount('body')
```

```js

const assert = require('assert')

module.exports = translate

function translate (translations, opts) {
  const { term } = opts

  assert.equal(typeof translations, 'object', 'elements/translate: where are translations ?')
  assert.equal(typeof opts, 'object', 'elements/translate: opts should be type object')

  return translations[term] || ''
}

```

You can change langs by sending

```js
...

state.lang = 'en'

emitter.emit('load:translations', 'en')

```

Then in your templates

```
html`${translate(state.translations, { term: 'CHOO_IS_FUN' })}`
```

## License

[MIT](LICENSE.md)
