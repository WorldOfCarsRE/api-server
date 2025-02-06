/* global libamf:writeable, Asset: writeable */
/* global ArrayCollection: writeable, AssetDictionary:writeable */

libamf = global.libamf
Asset = global.Asset
ArrayCollection = global.ArrayCollection
AssetDictionary = global.AssetDictionary

const { assetData } = require('../constants')

class AssetService extends libamf.Service {
  constructor () {
    super('asset')
  }

  getMapAssets (mapId) {
    const assets = assetData[mapId]

    if (assets === undefined) {
      console.log('NO ASSET DATA:', mapId)
      return new ArrayCollection()
    }

    return assets
  }

  getDictionaries () {
    const dicts = new ArrayCollection()
    dicts.push(new AssetDictionary(1, 'graphic', 'g'))
    dicts.push(new AssetDictionary(2, 'badge', 'bad'))
    dicts.push(new AssetDictionary(3, 'mattel', 'mat'))
    return dicts
  }

  getAsset (assetId) {
    // TODO
    console.log(assetId)
    return new Asset()
  }
}

module.exports = AssetService
