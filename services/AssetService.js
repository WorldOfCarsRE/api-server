/* global libamf:writeable, Asset: writeable, ArrayCollection: writeable */

libamf = global.libamf
Asset = global.Asset
ArrayCollection = global.ArrayCollection

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

  getAsset (assetId) {
    // TODO
    console.log(assetId)
    return new Asset()
  }
}

module.exports = AssetService
