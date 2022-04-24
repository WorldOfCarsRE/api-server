global.libamf = require('libamf');

global.CatalogItem = require('./catalog/CatalogItem');
global.CatalogItemRaceSeries = require('./catalog/CatalogItemRaceSeries');
global.CatalogItemWorldZone = require('./catalog/CatalogItemWorldZone');
global.CatalogItemPaint = require('./catalog/CatalogItemPaint');
global.CatalogItemChassis = require('./catalog/CatalogItemChassis');
global.CatalogChassisJointDynamic = require('./catalog/CatalogChassisJointDynamic');
global.CatalogChassisJointStatic = require('./catalog/CatalogChassisJointStatic');
global.CatalogChassisOffset = require('./catalog/CatalogChassisOffset');
global.CatalogChassisSlot = require('./catalog/CatalogChassisSlot');
global.CatalogItemNPC = require('./catalog/CatalogItemNPC');
global.CatalogItemDecal = require('./catalog/CatalogItemDecal');
global.CatalogItemEyeColor = require('./catalog/CatalogItemEyeColor');
global.CatalogItemWheel = require('./catalog/CatalogItemWheel');
global.CatalogItemTire = require('./catalog/CatalogItemTire');
global.CatalogCarItem = require('./catalog/CatalogCarItem');
global.CatalogPlayerItem = require('./catalog/CatalogPlayerItem');
global.CatalogPlayerStoreItem = require('./catalog/CatalogPlayerStoreItem');
global.CatalogItemAnimation = require('./catalog/CatalogItemAnimation');

var cors = require('cors');

global.Racecar = require('./racecar/Racecar');

_create = require('xmlbuilder2');
global.create = _create.create;

global.ArrayCollection = require('libamf/src/amf/flash/flex/ArrayCollection');

libamf.Service.RequireRegistration = false;
libamf.Server.DisableDefaultHome = true;

libamf.registerClassAlias('com.disney.cars.domain.catalog.Item', CatalogItem);
libamf.registerClassAlias('com.disney.cars.domain.catalog.racing.RaceSeries', CatalogItemRaceSeries);
libamf.registerClassAlias('com.disney.cars.domain.catalog.world.WorldZone', CatalogItemWorldZone);
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Paint', CatalogItemPaint);
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Chassis', CatalogItemChassis);
libamf.registerClassAlias("com.disney.cars.domain.catalog.player.car.ChassisJointDynamic", CatalogChassisJointDynamic);
libamf.registerClassAlias("com.disney.cars.domain.catalog.player.car.ChassisJointStatic", CatalogChassisJointStatic);
libamf.registerClassAlias("com.disney.cars.domain.catalog.player.car.ChassisOffset", CatalogChassisOffset);
libamf.registerClassAlias("com.disney.cars.domain.catalog.player.car.ChassisSlot", CatalogChassisSlot);
libamf.registerClassAlias('com.disney.cars.domain.catalog.interactive.Npc', CatalogItemNPC);
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Decal', CatalogItemDecal);
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.EyeColor', CatalogItemEyeColor);
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Wheel', CatalogItemWheel);
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.Tire', CatalogItemTire);
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.car.CarItem', CatalogCarItem);
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.PlayerItem', CatalogPlayerItem);
libamf.registerClassAlias('com.disney.cars.domain.catalog.player.PlayerStoreItem', CatalogPlayerStoreItem);
libamf.registerClassAlias('com.disney.cars.domain.catalog.effects.Animation', CatalogItemAnimation);

libamf.registerClassAlias('com.disney.cars.domain.racecar.Racecar', Racecar);

global.server = new libamf.Server({
    path: '/carsds/messagebroker/amf'
});

let CatalogService = require('./services/CatalogService');
let PlayerService = require('./services/PlayerService');
let RaceCarService = require('./services/RaceCarService');

let catalogService = new CatalogService();
let raceCarService = new RaceCarService();
let playerService = new PlayerService();

server.registerService(catalogService);
server.registerService(raceCarService);
server.registerService(playerService);

server.app.use(cors());

// Include our web routes.
require('./services/web');