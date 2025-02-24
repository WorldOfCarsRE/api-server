/* global libamf:writeable, Asset: writeable */
/* global ArrayCollection: writeable */

libamf = global.libamf
Asset = global.Asset
ArrayCollection = global.ArrayCollection

const { assetData, idToAsset, assetMappings } = require('../constants')

/**
 * Converts a number to a uint32 value.
 *
 * @param {number} value The number to convert.
 * @returns {number} The uint32 representation of the number.
 */
function toUint32 (value) {
  return value >>> 0
}

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
    return assetMappings
  }

  getAsset (assetId) {
    const asset = idToAsset[toUint32(assetId)]

    if (asset === undefined) {
      console.log('NO ASSET DATA:', toUint32(assetId))
      return new Asset()
    }

    return asset
  }
}

module.exports = AssetService
