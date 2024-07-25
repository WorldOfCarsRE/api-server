/* global CatalogItemRaceSeries: writeable */
/* global CatalogItemRaceLevel: writeable */
/* global CatalogItemSponsor: writeable */
/* global CatalogItemGear: writeable */
/* global CatalogItem: writeable */

/* global libamf:writeable, ArrayCollection:writeable */

CatalogItemRaceSeries = global.CatalogItemRaceSeries
CatalogItemRaceLevel = global.CatalogItemRaceLevel
CatalogItemSponsor = global.CatalogItemSponsor
CatalogItemGear = global.CatalogItemGear
const CatalogItemPuppet = global.CatalogItemPuppet
const CatalogItemNPC = global.CatalogItemNPC

libamf = global.libamf
ArrayCollection = global.ArrayCollection

const { clientData, shopData } = require('../constants')

class CatalogService extends libamf.Service {
  constructor () {
    super('catalog')
  }

  getAvailableItemsForStore (shopId) {
    const items = shopData[shopId]

    if (items === undefined) {
      console.log('SHOP HAS NO ITEMS:', shopId)
      return new ArrayCollection()
    }

    return items
  }

  getItemsByIds (itemIds) {
    console.log('getItemsByIds:', [...itemIds])

    const array = new ArrayCollection()

    for (const itemId of itemIds) {
      let item = clientData[itemId]
      if (item !== undefined) {
        item = item.classObj
      } else {
        console.log('MISSING ITEM:', itemId)
        item = new CatalogItem()
      }
      item.itemId = itemId
      array.push(item)
    }

    return array
  }

  getTreeById (id, depth) {
    console.log('getTreeById:', id, depth)

    const resp = new ArrayCollection()

    if (depth === 2) {
      // Puppet case
      let puppetItem = clientData[id]
      if (puppetItem !== undefined) {
        puppetItem = puppetItem.classObj
        puppetItem.itemId = id
        resp.push(puppetItem)
        let npcItem = clientData[puppetItem.npcId]
        if (npcItem !== undefined) {
          npcItem.classObj.itemId = puppetItem.npcId
          resp.push(npcItem.classObj)
        } else {
          console.log('MISSING NPC ITEM:', puppetItem.npcId)
        }
      } else {
        console.log('MISSING PUPPET ITEM:', id)
        resp.push(new CatalogItem())
      }
    } else {
      resp.push(new CatalogItemRaceSeries(id))
      resp.push(new CatalogItemRaceLevel(1))
    }

    console.log(resp)
    return resp
  }

  getItemsByType (itemType) {
    console.log('getItemsByType:', itemType)

    const resp = new ArrayCollection()

    if (itemType === 'gear') {
      resp.push(new CatalogItemGear(1))
    } else if (itemType === 'sponsor') {
      resp.push(new CatalogItemSponsor())
    }

    return resp
  }

  getItem (itemId) {
    console.log('getItem:', itemId)

    const item = clientData[itemId]
    if (item === undefined) {
      console.log('MISSING ITEM:', itemId)
      return new CatalogItem()
    }
    item.classObj.itemId = itemId

    return item.classObj
  }
}

module.exports = CatalogService
