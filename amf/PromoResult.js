class PromoResult {
  constructor (redeemedConsumableId = 0, redeemedBadgeId = 0, redeemedBadgeCount = 0, redeemedConsumableQuantity = 0, awardCarCoins = 0, bonusItemType = 0, bonusItemId = 0, nextBonusThreshold = 0) {
    this.redeemedConsumableId = redeemedConsumableId
    this.redeemedBadgeId = redeemedBadgeId
    this.redeemedBadgeCount = redeemedBadgeCount
    this.redeemedConsumableQuantity = redeemedConsumableQuantity
    this.awardCarCoins = awardCarCoins
    this.bonusItemType = bonusItemType
    this.bonusItemId = bonusItemId
    this.nextBonusThreshold = nextBonusThreshold
  }
}

module.exports = PromoResult
