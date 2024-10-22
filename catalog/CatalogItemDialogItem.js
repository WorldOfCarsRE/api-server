/* global CatalogItem: writeable */

CatalogItem = require('./CatalogItem')

const TYPE_MODAL = 'Modal'
// const TYPE_NON_MODAL = 'Non Modal'
// const TYPE_AGGREGATABLE = 'Aggregateable'

class CatalogItemDialogItem extends CatalogItem {
  constructor (optionalClassName, dialogSwfUrl) {
    super()

    this.type = TYPE_MODAL
    this.optionalClassName = optionalClassName
    this.dialogSwfUrl = dialogSwfUrl
  }
}

module.exports = CatalogItemDialogItem
