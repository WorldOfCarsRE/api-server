class Asset {
  constructor (layerId = 0, offsetX = 0, width = 0, filename = '', assetId = 0, offsetY = 0, solid = false, height = 0) {
    this.layerId = layerId
    this.offsetX = offsetX
    this.width = width
    this.filename = filename
    this.mappingId = -1
    this.assetId = assetId
    this.offsetY = offsetY
    this.solid = solid
    this.shadowId = -1
    this.typeId = -1
    this.height = height
  }
}

module.exports = Asset
