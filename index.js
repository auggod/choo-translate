const xhr = require('xhr')
const assert = require('assert')

module.exports = translate

function translate (defaultLang) {
  return function (state, emitter) {
    const { lang = defaultLang } = state

    emitter.on('DOMContentLoaded', function () {
      getTranslations(lang)
    })

    emitter.on('load:translations', getTranslations)

    function getTranslations (lang) {
      return xhr({
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'max-age=1000'
        },
        json: true,
        url: `/assets/${lang}.json`
      }, (err, res, body) => {
        assert.equal(null, err, 'choo-translate: failed at xhr')
        assert.equal('object', body, 'choo-translate: expected response body to be an object')
        state.translations = body
        emitter.emit('render')
      })
    }
  }
}
