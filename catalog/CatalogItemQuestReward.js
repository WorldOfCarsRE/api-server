CatalogItem = global.CatalogItem

class CatalogItemQuestReward extends CatalogItem {
  constructor (name, type = 0, quantity = 1, thumbnail = '', rewardItemId = 0) {
    super()

    this.name = name

    // public static const TYPE_UNKNOWN:int = -1;
    // public static const TYPE_POINTS:int = 2;
    // public static const TYPE_RACING_POINTS:int = 1;
    // public static const TYPE_ITEM:int = 0;
    // public static const TYPE_MILES:int = 4;
    // public static const TYPE_COINS:int = 3;
    this.type = type
    this.rewardReason = ''
    this.quantity = quantity
    this.thumbnail = thumbnail
    this.rewardItemId = rewardItemId
  }
}

module.exports = CatalogItemQuestReward
