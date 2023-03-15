libamf = global.libamf
ArrayCollection = global.ArrayCollection

class PlayerService extends libamf.Service {
  constructor () {
    super('player')
  }

  getRuleStates (playerId, __, tutorialRuleId) {
    console.log('getRuleStates: ', playerId + ' ' + __ + ' ' + tutorialRuleId)

    const resp = new ArrayCollection()

    // Having a empty array means autoLogin is true (go to tutorial).
    resp.push(1)

    return resp
  }

  getBlockUserIds () {
    return new ArrayCollection()
  }
}

module.exports = PlayerService
