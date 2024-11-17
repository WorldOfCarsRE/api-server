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
        const npcItem = clientData[puppetItem.npcId]
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
    // TODO: Add list with questIds
    } else if (depth === -1 && id === 25010) {
      resp.push(this.getItem(id))
      // Steps
      resp.push(this.getItem(22223))
      resp.push(this.getItem(22224))
      // Rewards
      resp.push(this.getItem(22229))
      resp.push(this.getItem(22230))
    } else {
      resp.push(new CatalogItemRaceSeries(id))
      resp.push(
        new CatalogItemRaceLevel(41001, 42004, 60000, [9980, 9981, 9982, 9983, 9984]),
        new CatalogItemRaceLevel(41002, 42006, 200000, [9980, 9981, 9982, 9983, 9984, 9985, 9986]),
        new CatalogItemRaceLevel(41003, 42007, 380000, [9980, 9981, 9982, 9983, 9984, 9985, 9986, 9987, 9988]),
        new CatalogItemRaceLevel(41004, 42008, 640000, [9980, 9981, 9982, 9983, 9984, 9985, 9986, 9987, 9988, 9989, 9990]),
        new CatalogItemRaceLevel(41005, 42009, 1000000, [9980, 9981, 9982, 9983, 9984, 9985, 9986, 9987, 9988, 9989, 9990, 9991, 9992]),
        new CatalogItemRaceLevel(41006, 42010, 1000001, [9980, 9981, 9982, 9983, 9984, 9985, 9986, 9987, 9988, 9989, 9990, 9991, 9992, 9993, 9994, 9995, 9996, 9997, 9998, 9999, 10000])
      )
      // Pro race tracks
      resp.push(
        this.getItem(42004),
        this.getItem(42006),
        this.getItem(42007),
        this.getItem(42008),
        this.getItem(42009),
        this.getItem(42010)
      )
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

  getConsumables () {
    console.log('getConsumables')

    return new ArrayCollection()
  }

  getRaceTracks () {
    console.log('getRaceTracks')

    return this.getItemsByIds([42008, 42001, 42010, 42006, 42007, 42009, 42003, 42005, 42004, 42002])
  }
}

module.exports = CatalogService
