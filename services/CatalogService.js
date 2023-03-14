CatalogItemRaceSeries = global.CatalogItemRaceSeries
CatalogItemWorldZone = global.CatalogItemWorldZone
CatalogItemRaceLevel = global.CatalogItemRaceLevel
CatalogItemRaceTrack = global.CatalogItemRaceTrack

libamf = global.libamf
ArrayCollection = global.ArrayCollection

const { clientData } = require('../constants')

class CatalogService extends libamf.Service {
  constructor () {
    super('catalog')
  }

  getItemsByIds (itemIds) {
    console.log('getItemsByIds:', [...itemIds])

    const array = new ArrayCollection()

    for (const itemId of itemIds) {
      const item = clientData[itemId].classObj
      item.itemId = itemId
      array.push(item)
    }

    return array
  }

  getTreeById (id, depth) {
    console.log('getTreeById:', id, depth)

    const resp = new ArrayCollection()
    resp.push(new CatalogItemRaceSeries(id))
    resp.push(new CatalogItemRaceLevel(1))
    return resp
  }

  getItemsByType (itemType) {
    console.log('getItemsByType:', itemType)

    const resp = new ArrayCollection()
    resp.push(new CatalogItemGear(1))
    return resp
  }

  getItem (itemId) {
    console.log('getItem:', itemId)

    const item = clientData[itemId].classObj
    item.itemId = itemId

    return item
  }
}

module.exports = CatalogService
