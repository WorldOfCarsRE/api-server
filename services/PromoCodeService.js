/* global libamf:writeable, ArrayCollection:writeable, db:writeable */

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

  async redeemPromoCode (promoCode) {
    // TODO
    const code = await db.retrieveRaceCode(promoCode)

    if (!code) {
      return null
    }
  }
}

module.exports = PromoCodeService
