/* global libamf:writeable, ArrayCollection: writeable */

libamf = global.libamf
ArrayCollection = global.ArrayCollection

class PromoCodeService extends libamf.Service {
  constructor () {
    super('promo-code-service')
  }

  getPromoBadges () {
    // TODO
    return new ArrayCollection()
  }

  redeemPromoCode (promoCode) {
    // TODO
  }
}

module.exports = PromoCodeService
