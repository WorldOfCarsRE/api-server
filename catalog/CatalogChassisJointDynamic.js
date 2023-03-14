ArrayCollection = global.ArrayCollection

class CatalogChassisJointDynamic {
  constructor () {
    this.name = ''

    this.value = 0.0
    this.max = 0.0
    this.min = 0.0
    this.type = ''

    this.linked = new ArrayCollection()
  }
}

module.exports = CatalogChassisJointDynamic
