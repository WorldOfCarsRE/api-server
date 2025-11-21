/* global libamf: writeable */

global.libamf = require('libamf')

/* global CatalogItem */
/* global CatalogItemRaceSeries */
/* global CatalogItemWorldZone */
/* global CatalogItemPaint */
/* global CatalogItemChassis */
/* global CatalogChassisJointDynamic */
/* global CatalogChassisJointStatic */
/* global CatalogChassisOffset */
/* global CatalogChassisSlot */
/* global CatalogItemNPC */
/* global CatalogItemDecal */
/* global CatalogItemEyeColor */
/* global CatalogItemWheel */
/* global CatalogItemTire */
/* global CatalogCarItem */
/* global CatalogPlayerItem */
/* global CatalogPlayerStoreItem */
/* global CatalogItemAnimation */
/* global CatalogItemSimpleAnimation */
/* global CatalogItemSimpleSound */
/* global CatalogItemRaceLevel */
/* global CatalogItemDungeon */
/* global CatalogItemRaceTrack */
/* global CatalogItemGear */
/* global CatalogItemPhysics */
/* global CatalogItemSponsor */
/* global CatalogItemYardZone */
/* global CatalogItemStore */
/* global CatalogItemDialogue */
/* global CatalogItemMinigame */
/* global CatalogItemProfileTheme */
/* global CatalogItemPuppet */
/* global CatalogItemEffect */
/* global CatalogItemQuest */
/* global CatalogItemMapEffect */
/* global CatalogItemGPSIcon */
/* global CatalogItemEmote */
/* global RuleStateAMF */
/* global Asset */
/* global CatalogItemQuestStep */
/* global CatalogItemQuestReward */
/* global CatalogItemMapSprite */
/* global CatalogItemMicrogame */
/* global CatalogItemDialogItem */
/* global CatalogItemCarDNA */
/* global CatalogItemFizzyFuel */
/* global CatalogItemYardItem */
/* global AssetDictionary */
/* global CatalogItemConsumable */
/* global CatalogItemStack */
/* global RacecarHighScore */
/* global PromoResult */
/* global CatalogItemDetailing */
/* global Badge */
/* global Yard */

global.CatalogItem = require('./catalog/CatalogItem')
global.CatalogItemRaceSeries = require('./catalog/CatalogItemRaceSeries')
global.CatalogItemWorldZone = require('./catalog/CatalogItemWorldZone')
global.CatalogItemPaint = require('./catalog/CatalogItemPaint')
global.CatalogItemChassis = require('./catalog/CatalogItemChassis')
global.CatalogChassisJointDynamic = require('./catalog/CatalogChassisJointDynamic')
global.CatalogChassisJointStatic = require('./catalog/CatalogChassisJointStatic')
global.CatalogChassisOffset = require('./catalog/CatalogChassisOffset')
global.CatalogChassisSlot = require('./catalog/CatalogChassisSlot')
global.CatalogItemNPC = require('./catalog/CatalogItemNPC')
global.CatalogItemDecal = require('./catalog/CatalogItemDecal')
global.CatalogItemEyeColor = require('./catalog/CatalogItemEyeColor')
global.CatalogItemWheel = require('./catalog/CatalogItemWheel')
global.CatalogItemTire = require('./catalog/CatalogItemTire')
global.CatalogCarItem = require('./catalog/CatalogCarItem')
global.CatalogPlayerItem = require('./catalog/CatalogPlayerItem')
global.CatalogPlayerStoreItem = require('./catalog/CatalogPlayerStoreItem')
global.CatalogItemAnimation = require('./catalog/CatalogItemAnimation')
global.CatalogItemSimpleAnimation = require('./catalog/CatalogItemSimpleAnimation')
global.CatalogItemSimpleSound = require('./catalog/CatalogItemSimpleSound')
global.CatalogItemRaceLevel = require('./catalog/CatalogItemRaceLevel')
global.CatalogItemDungeon = require('./catalog/CatalogItemDungeon')
global.CatalogItemRaceTrack = require('./catalog/CatalogItemRaceTrack')
global.CatalogItemGear = require('./catalog/CatalogItemGear')
global.CatalogItemPhysics = require('./catalog/CatalogItemPhysics')
global.CatalogItemSponsor = require('./catalog/CatalogItemSponsor')
global.CatalogItemYardZone = require('./catalog/CatalogItemYardZone')
global.CatalogItemStore = require('./catalog/CatalogItemStore')
global.CatalogItemDialogue = require('./catalog/CatalogItemDialogue')
global.CatalogItemEffect = require('./catalog/CatalogItemEffect')
global.CatalogItemMinigame = require('./catalog/CatalogItemMinigame')
global.CatalogItemProfileTheme = require('./catalog/CatalogItemProfileTheme')
global.CatalogItemPuppet = require('./catalog/CatalogItemPuppet')
global.CatalogItemQuest = require('./catalog/CatalogItemQuest')
global.CatalogItemQuestStep = require('./catalog/CatalogItemQuestStep')
global.CatalogItemQuestReward = require('./catalog/CatalogItemQuestReward')
global.CatalogItemMapEffect = require('./catalog/CatalogItemMapEffect')
global.CatalogItemGPSIcon = require('./catalog/CatalogItemGPSIcon')
global.CatalogItemEmote = require('./catalog/CatalogItemEmote')
global.CatalogItemCarDNA = require('./catalog/CatalogItemCarDNA')
global.RuleStateAMF = require('./amf/RuleStateAMF')
global.Asset = require('./amf/Asset')
global.CatalogItemMapSprite = require('./catalog/CatalogItemMapSprite')
global.CatalogItemMicrogame = require('./catalog/CatalogItemMicrogame')
global.CatalogItemDialogItem = require('./catalog/CatalogItemDialogItem')
global.CatalogItemFizzyFuel = require('./catalog/CatalogItemFizzyFuel')
global.CatalogItemYardItem = require('./catalog/CatalogItemYardItem')
global.CatalogItemConsumable = require('./catalog/CatalogItemConsumable')
global.CatalogItemStack = require('./catalog/CatalogItemStack')
global.RacecarHighScore = require('./amf/RacecarHighScore')
global.AssetDictionary = require('./amf/AssetDictionary')
global.PromoResult = require('./amf/PromoResult')
global.CatalogItemDetailing = require('./catalog/CatalogItemDetailing')
global.Badge = require('./amf/Badge')
global.Yard = require('./amf/Yard')
global.CatalogItemAddon = require('./catalog/CatalogItemAddon')
global.CatalogItemBadge = require('./catalog/CatalogItemBadge')
global.CatalogItemSouvenir = require('./catalog/CatalogItemSouvenir')

const express = require('express')

global.mongoose = require('mongoose')

Database = require('./db/Database')
global.db = new Database()

/* global Database: writeable */

const cors = require('cors')

/* global Racecar */

global.Racecar = require('./amf/Racecar')

/* global Player */

global.Player = require('./amf/Player')

_create = require('xmlbuilder2')
global.create = _create.create

/* global _create: writeable */

global.ArrayCollection = require('libamf/src/amf/flash/flex/ArrayCollection')

libamf.Service.RequireRegistration = false
libamf.Server.DisableDefaultHome = true

libamf.registerClassAlias('com.disney.cars.domain.catalog.Item', CatalogItem)
libamf.registerClassAlias('com.disney.cars.domain.catalog.racing.RaceSeries', CatalogItemRaceSeries)
libamf.registerClassAlias('com.disney.cars.domain.catalog.world.WorldZone', CatalogItemWorldZone)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Paint', CatalogItemPaint)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Chassis', CatalogItemChassis)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.ChassisJointDynamic', CatalogChassisJointDynamic)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.ChassisJointStatic', CatalogChassisJointStatic)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.ChassisOffset', CatalogChassisOffset)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.ChassisSlot', CatalogChassisSlot)
libamf.registerClassAlias('com.disney.cars.domain.catalog.interactive.Npc', CatalogItemNPC)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Decal', CatalogItemDecal)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.EyeColor', CatalogItemEyeColor)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Wheel', CatalogItemWheel)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Tire', CatalogItemTire)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.CarItem', CatalogCarItem)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.PlayerItem', CatalogPlayerItem)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.PlayerStoreItem', CatalogPlayerStoreItem)
libamf.registerClassAlias('com.disney.cars.domain.catalog.effects.Animation', CatalogItemAnimation)
libamf.registerClassAlias('com.disney.cars.domain.catalog.effects.SimpleAnimation', CatalogItemSimpleAnimation)
libamf.registerClassAlias('com.disney.cars.domain.catalog.effects.SimpleSound', CatalogItemSimpleSound)
libamf.registerClassAlias('com.disney.cars.domain.catalog.racing.RaceTrack', CatalogItemRaceTrack)
libamf.registerClassAlias('com.disney.cars.domain.catalog.world.DungeonItem', CatalogItemDungeon)
libamf.registerClassAlias('com.disney.cars.domain.catalog.racing.RaceLevel', CatalogItemRaceLevel)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Gear', CatalogItemGear)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Physics', CatalogItemPhysics)
libamf.registerClassAlias('com.disney.cars.domain.catalog.progression.Sponsor', CatalogItemSponsor)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.yard.YardZone', CatalogItemYardZone)
libamf.registerClassAlias('com.disney.cars.domain.catalog.store.Store', CatalogItemStore)
libamf.registerClassAlias('com.disney.cars.domain.catalog.interactive.Dialogue', CatalogItemDialogue)
libamf.registerClassAlias('com.disney.cars.domain.catalog.interactive.Effect', CatalogItemEffect)
libamf.registerClassAlias('com.disney.cars.domain.catalog.minigame.Minigame', CatalogItemMinigame)
libamf.registerClassAlias('com.disney.cars.domain.player.RuleState', RuleStateAMF)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.ProfileBackground', CatalogItemProfileTheme)
libamf.registerClassAlias('com.disney.cars.domain.catalog.gm.Puppet', CatalogItemPuppet)
libamf.registerClassAlias('com.disney.cars.domain.racecar.Racecar', Racecar)
libamf.registerClassAlias('com.disney.cars.domain.catalog.progression.Quest', CatalogItemQuest)
libamf.registerClassAlias('com.disney.cars.domain.catalog.progression.QuestStep', CatalogItemQuestStep)
libamf.registerClassAlias('com.disney.cars.domain.catalog.progression.QuestReward', CatalogItemQuestReward)
libamf.registerClassAlias('com.disney.cars.domain.catalog.interactive.MapEffect', CatalogItemMapEffect)
libamf.registerClassAlias('com.disney.cars.domain.catalog.interactive.GPSIcon', CatalogItemGPSIcon)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.Emote', CatalogItemEmote)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Dna', CatalogItemCarDNA)
libamf.registerClassAlias('com.disney.cars.domain.asset.Asset', Asset)
libamf.registerClassAlias('com.disney.cars.domain.catalog.interactive.MapSprite', CatalogItemMapSprite)
libamf.registerClassAlias('com.disney.cars.domain.catalog.microgame.Microgame', CatalogItemMicrogame)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.ui.DialogItem', CatalogItemDialogItem)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.FizzyFuel', CatalogItemFizzyFuel)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.yard.YardItem', CatalogItemYardItem)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.Consumable', CatalogItemConsumable)
libamf.registerClassAlias('com.disney.cars.domain.player.Player', Player)
libamf.registerClassAlias('com.disney.cars.domain.catalog.store.Stack', CatalogItemStack)
libamf.registerClassAlias('com.disney.cars.domain.leaderboard.RacecarHighScore', RacecarHighScore)
libamf.registerClassAlias('com.disney.cars.domain.asset.Dictionary', AssetDictionary)
libamf.registerClassAlias('com.disney.cars.domain.promo.PromoResult', PromoResult)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Detailing', CatalogItemDetailing)
libamf.registerClassAlias('com.disney.cars.domain.player.Badge', Badge)
libamf.registerClassAlias('com.disney.cars.domain.player.Yard', Yard)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Addon', CatalogItemAddon)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.reward.Badge', CatalogItemBadge)
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.reward.Souvenir', CatalogItemSouvenir)

/* global server */

global.server = new libamf.Server({
  path: '/carsds/messagebroker/amf'
})

// eslint-disable-next-line no-unused-vars
/* global userSession: writeable */
global.userSession = {}

const CatalogService = require('./services/CatalogService')
const PlayerService = require('./services/PlayerService')
const RaceCarService = require('./services/RaceCarService')
const AssetService = require('./services/AssetService')
const LeaderboardService = require('./services/LeaderboardService')
const PromoCodeService = require('./services/PromoCodeService')
const YardService = require('./services/YardService')

const catalogService = new CatalogService()
const raceCarService = new RaceCarService()
const playerService = new PlayerService()
const assetService = new AssetService()
const leaderboardService = new LeaderboardService()
const promoCodeService = new PromoCodeService()
const yardService = new YardService()

server.registerService(catalogService)
server.registerService(raceCarService)
server.registerService(playerService)
server.registerService(assetService)
server.registerService(leaderboardService)
server.registerService(promoCodeService)
server.registerService(yardService)

// for parsing application/x-www-form-urlencoded
server.app.use(express.urlencoded({ extended: true }))

server.app.use(cors())

server.app.set('trust proxy', 1)

// Setup sessions and include our web routes.
const session = require('express-session')
const MongoStore = require('connect-mongo')

/* global sess: writeable */

sess = {
  secret: process.env.SESSION_SECRET || 'woc_secret',
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/woc' }),
  resave: false,
  saveUninitialized: true,

  cookie: {
    secure: false, // if true only transmit cookie over https
    httpOnly: false, // if true prevent client side JS from reading the cookie
    maxAge: 1000 * 60 * 10 // session max age in miliseconds
  },
  rolling: true // reset the cookie Max-Age on every request
}

server.app.use(session(sess))
// HACK: Move the session middleware to the very beginning
// of the stack to ensure it gets called before the AMF stuff.
server.app._router.stack.unshift(server.app._router.stack.pop())

// Store the session cookie at a global variable
// so that AMF functions can actually use it. (This gets
// deleted at the end of the stack; see the bottom of web.js)
server.app.use((req, res, next) => {
  userSession = req.session
  next()
})
// HACK: Make it the 2nd middleware to be called from the stack.
server.app._router.stack.splice(1, 0, server.app._router.stack.pop())

require('./services/web')
