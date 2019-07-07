const { Asset } = require('parcel-bundler')
const localRequire = require('parcel-bundler/lib/utils/localRequire')

module.exports = class VuedownAssets extends Asset {
  constructor(name, options) {
    super(name, options)
    this.type = 'vue'
  }

  async generate() {
    const vuedown = await localRequire('vuedown', this.name)
    return vuedown(this.contents)
  }
}
