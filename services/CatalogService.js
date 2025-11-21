/* global CatalogItemRaceSeries: writeable */
/* global CatalogItemRaceLevel: writeable */
/* global CatalogItemGear: writeable */
/* global CatalogItem: writeable */

/* global libamf:writeable, ArrayCollection:writeable */

CatalogItemRaceSeries = global.CatalogItemRaceSeries
CatalogItemRaceLevel = global.CatalogItemRaceLevel
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

    const questIds = [25001, 25002, 25003, 25004, 25005, 25006, 25007, 25008, 25009, 25010, 25011, 25013, 25014, 25555, 25667, 26011, 26012, 26013, 26014, 26015]

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
    } else if (depth === -1 && questIds.includes(id)) {
      const questItem = this.getItem(id)

      resp.push(questItem)
      resp.push(...this.getItemsByIds([...questItem.stepIds]))
      resp.push(...this.getItemsByIds([...questItem.rewardIds]))
    } else if (depth === -1 && id === 44000) {
      resp.push(new CatalogItemRaceSeries(id))
      // Race levels
      resp.push(
        this.getItem(41000),
        this.getItem(41001),
        this.getItem(41002),
        this.getItem(41003),
        this.getItem(41004),
        this.getItem(41005),
        this.getItem(41006)
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
      return this.getItemsByIds([9995, 9999, 9998, 9997, 9996, 10000, 9994, 9993, 9992, 9991, 9990, 9989, 9988, 9987, 9986, 9985, 9984, 9983, 9982, 9981, 9980])
    } else if (itemType === 'racelevel') {
      return this.getItemsByIds([41000, 41001, 41002, 41003, 41004, 41005, 41006])
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
