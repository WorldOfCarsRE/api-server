/* global CatalogItem: writeable */

CatalogItem = require('./CatalogItem')

const TYPE_MODAL = 'Modal'
// const TYPE_NON_MODAL = 'Non Modal'
// const TYPE_AGGREGATABLE = 'Aggregateable'

class CatalogItemDialogItem extends CatalogItem {
  constructor () {
    super()

    this.type = TYPE_MODAL
    this.optionalClassName = 'com.disney.cars.ui.dialogs.microgames.DocsSplashDialog'
    this.dialogSwfUrl = 'car_f_gui_dia_mmgDocsClinic.swf'
  }
}

module.exports = CatalogItemDialogItem
