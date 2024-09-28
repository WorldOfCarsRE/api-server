const CatalogItemPaint = global.CatalogItemPaint
const CatalogItemChassis = global.CatalogItemChassis
const CatalogItemNPC = global.CatalogItemNPC
const CatalogItemWorldZone = global.CatalogItemWorldZone
const CatalogItemDecal = global.CatalogItemDecal
const CatalogItemEyeColor = global.CatalogItemEyeColor
const CatalogItemWheel = global.CatalogItemWheel
const CatalogItemTire = global.CatalogItemTire
const CatalogItemSimpleAnimation = global.CatalogItemSimpleAnimation
const CatalogItemSimpleSound = global.CatalogItemSimpleSound
const CatalogItemDungeon = global.CatalogItemDungeon
const CatalogItemPhysics = global.CatalogItemPhysics
const CatalogItemStore = global.CatalogItemStore
const CatalogItemRaceTrack = global.CatalogItemRaceTrack
const CatalogItemMinigame = global.CatalogItemMinigame
const CatalogItemProfileTheme = global.CatalogItemProfileTheme
const CatalogItemPuppet = global.CatalogItemPuppet
const CatalogItemEffect = global.CatalogItemEffect
const CatalogPlayerStoreItem = global.CatalogPlayerStoreItem
const CatalogItemQuest = global.CatalogItemQuest
const CatalogItemQuestStep = global.CatalogItemQuestStep
const CatalogItemQuestReward = global.CatalogItemQuestReward
const CatalogItemMapEffect = global.CatalogItemMapEffect
const CatalogItemEmote = global.CatalogItemEmote
const CatalogItemSponsor = global.CatalogItemSponsor
const Asset = global.Asset

const ArrayCollection = global.ArrayCollection

const fs = require('fs')
const { XMLParser } = require('fast-xml-parser')

const clientData = {}
const assetData = {}

clientData[100] = {
  name: 'Player Physics',
  classObj: new CatalogItemPhysics()
}

clientData[101] = {
  name: 'Mater Puppet',
  classObj: new CatalogItemPuppet(31009, 'Mater') // Mater npcId
}

clientData[104] = {
  name: 'McQueen Puppet',
  classObj: new CatalogItemPuppet(31010, 'Lightning McQueen', 105)
}

clientData[105] = {
  name: 'McQueen Idle Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_mcqueen_idleBlink.sani')
}

clientData[5500] = {
  name: 'Stock',
  classObj: new CatalogItemChassis('stock')
}

clientData[5501] = {
  name: 'Sports',
  classObj: new CatalogItemChassis('sports')
}

clientData[5502] = {
  name: 'Mini',
  classObj: new CatalogItemChassis('mini')
}

clientData[5503] = {
  name: 'Stock',
  classObj: new CatalogItemChassis('stock')
}

clientData[20210] = {
  name: 'Red Lightening',
  classObj: new CatalogItemPaint(15804939)
}

clientData[15001] = {
  name: 'Downtown Radiator Springs',
  classObj: new CatalogItemWorldZone('Downtown Radiator Springs', 100, 'car_f_gui_ttl_radiatorSprings_en_US.swf', 'car_w_env_rsp_RadiatorSprings', 'car_g_map_env_radiatorSprings.swf', 'scripts/isoworld/radiator_springs.lua', 'Music', 'zoneRadiatorSprings02', 'dp_npt_315')
}

// Asset service
function parseAssetData (filename) {
  const results = new ArrayCollection()

  const xmlData = fs.readFileSync(`assets/maps/${filename}`, 'utf-8')
  const parser = new XMLParser({ ignoreAttributes: false })
  const assets = parser.parse(xmlData).assets

  for (const asset of assets.asset) {
    results.push(new Asset(asset.layerId, asset.offsetX, asset.width, asset.filename, asset.assetId, asset.offsetY, asset.solid, asset.height))
  }

  return results
}

assetData[15001] = parseAssetData('car_w_env_rsp_RadiatorSprings_assets.xml')

// Fillmore's Fields
clientData[15001].classObj.dropPoints['15002'] = 'dp_ff_225'

// Willy's Butte
clientData[15001].classObj.dropPoints['15006'] = 'dp_wb_225'

// Redhood Valley
clientData[15001].classObj.dropPoints['15003'] = 'dp_rhv_180'

// Race tracks
clientData[15001].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15001].classObj.dropPoints.mp = 'dp_mp_225'

clientData[15002] = {
  name: "Fillmore's Fields",
  classObj: new CatalogItemWorldZone("Fillmore's Fields", 100, 'car_f_gui_ttl_fillmoresFields_en_US.swf', 'car_w_env_frm_FillmoresFields_design', 'car_g_map_env_farmGrounds.swf', 'scripts/isoworld/fillmores_fields.lua', 'Music', 'zoneFillmoresFields', 'dp_default_45')
}

// Willy's Buttle
clientData[15002].classObj.dropPoints['15006'] = 'dp_wb_135'

// Race tracks
clientData[15002].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15002].classObj.dropPoints.mp = 'dp_mp_225'

clientData[15003] = {
  name: 'Redhood Valley',
  classObj: new CatalogItemWorldZone('Redhood Valley', 100, 'car_f_gui_ttl_tailfinPass_en_US.swf', 'car_w_env_tfn_RedhoodValley', 'car_g_map_env_redhoodValley.swf', 'scripts/isoworld/tailfin_pass.lua', 'Music', 'zoneRedHood', 'dp_default_270')
}

// Race tracks
clientData[15003].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15003].classObj.dropPoints.mp = 'dp_mp_225'

clientData[15005] = {
  name: 'Tailgator Speedway',
  classObj: new CatalogItemWorldZone('Tailgator Speedway', 100, 'car_f_gui_ttl_tailGatorSpeedwayZone_en_US.swf', 'car_w_trk_prf_TailgatorZone', 'car_g_map_env_tailgatorSpeedway.swf', 'scripts/isoworld/tgs_proTrack.lua', '', '', 'dp_default_45')
}

// Race tracks
clientData[15005].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15005].classObj.dropPoints.mp = 'dp_mp_225'

clientData[15006] = {
  name: "Willy's Butte",
  classObj: new CatalogItemWorldZone("Willy's Butte", 100, 'car_f_gui_ttl_willysButte_en_US.swf', 'car_w_env_wil_WillysButte_design', 'car_g_map_env_willysButte.swf', 'scripts/isoworld/willys_butte.lua', 'Music', 'zoneWilliesButte', 'dp_default_315')
}

// Fillmore's Fields
clientData[15006].classObj.dropPoints['15002'] = 'dp_ff_200'

// Race tracks
clientData[15006].classObj.dropPoints.sp = 'dp_sp_180'
clientData[15006].classObj.dropPoints.mp = 'dp_mp_225'

clientData[15008] = {
  name: 'Big Heartland Speedway',
  classObj: new CatalogItemWorldZone('Big Heartland Speedway', 100, 'car_f_gui_ttl_bigHeartlandSpeedwayZone_en_US.swf', 'car_w_trk_prf_BigHeartlandZone', 'car_g_map_env_bigHeartlandSpeedway.swf', 'scripts/isoworld/bhs_proTrack.lua', 'Music', 'zoneBigHeartland', 'dp_default_45')
}

// Race tracks
clientData[15008].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15008].classObj.dropPoints.mp = 'dp_mp_225'

clientData[15009] = {
  name: 'Backfire Canyon Speedway',
  classObj: new CatalogItemWorldZone('Backfire Canyon Speedway', 100, 'car_f_gui_ttl_backfireCanyonSpeedwayZone_en_US.swf', 'car_w_trk_prf_BackFireCanyonZone', 'car_g_map_env_backfireCanyonSpeedway.swf', 'scripts/isoworld/bfc_proTrack.lua', 'Music', 'zoneBFC', 'dp_default_45')
}

// Race tracks
clientData[15009].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15009].classObj.dropPoints.mp = 'dp_mp_225'

clientData[15010] = {
  name: 'Petroleum City Super Speedway',
  classObj: new CatalogItemWorldZone('Petroleum City Super Speedway', 100, 'car_f_gui_ttl_petroCitySpeedwayZone_en_US.swf', 'car_w_trk_prf_PetroleumCityZone', 'car_g_map_env_petroleumCitySuperSpeedway.swf', 'scripts/isoworld/pc_proTrack.lua', 'Music', 'Petroleum', 'dp_default_45')
}

// Race tracks
clientData[15010].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15010].classObj.dropPoints.mp = 'dp_mp_225'

clientData[15011] = {
  name: 'Motor Speedway of the South',
  classObj: new CatalogItemWorldZone('Motor Speedway of the South', 100, 'car_f_gui_ttl_motorCitySpeedwayZone_en_US.swf', 'car_w_trk_prf_MotorSpeedwaySouthZone', 'car_g_map_env_motorSpeedway.swf', 'scripts/isoworld/mss_proTrack.lua', '', '', 'dp_default_45')
}

// Race tracks
clientData[15011].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15011].classObj.dropPoints.mp = 'dp_mp_225'

clientData[15012] = {
  name: 'Los Angeles International Speedway',
  classObj: new CatalogItemWorldZone('Los Angeles International Speedway', 100, 'car_f_gui_ttl_laSpeedwayZone_en_US.swf', 'car_w_trk_prf_LASpeedwayZone', 'car_g_map_env_laSpeedway.swf', 'scripts/isoworld/las_proTrack.lua', 'Music', 'zoneLASpeedway', 'dp_default_45')
}

// Race tracks
clientData[15012].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15012].classObj.dropPoints.mp = 'dp_mp_225'

clientData[10001] = {
  name: 'Home',
  classObj: new CatalogItemDungeon('Home', 0, 'car_f_gui_ldr_generic_en_US.swf', 'car_w_yar_own_non_member_yard', 'car_g_map_env_yardNonMember.swf', 'scripts/yard/small.lua', 'Music', 'radiatorSprings', 'dp_default_45')
}

clientData[10101] = {
  name: 'Eye Color',
  classObj: new CatalogItemEyeColor(0)
}

clientData[10102] = {
  name: 'Blue',
  classObj: new CatalogItemEyeColor(7249143)
}

clientData[10103] = {
  name: 'Green',
  classObj: new CatalogItemEyeColor(7322195)
}

clientData[10104] = {
  name: 'Brown',
  classObj: new CatalogItemEyeColor(12414237)
}

clientData[30601] = {
  name: 'Wheel',
  classObj: new CatalogItemWheel('car_t_cst_rim_01.jpg')
}

clientData[30502] = {
  name: 'Tire',
  classObj: new CatalogItemTire('car_t_cst_tir_wall_black.jpg')
}

clientData[51103] = {
  name: 'Car Decal (Headlights)',
  classObj: new CatalogItemDecal(['car_t_cst_lit_headLight01.swf'], 1)
}

clientData[51104] = {
  name: 'Car Decal (Tail Lights)',
  classObj: new CatalogItemDecal(['car_g_ico_lit_taillight02.png'], 2)
}

clientData[20206] = {
  name: 'Gray Vee',
  classObj: new CatalogItemPaint(10526621)
}

clientData[20207] = {
  name: 'Octagonal Orange',
  classObj: new CatalogItemPaint(15033856)
}

clientData[31011] = {
  name: 'NPC Animation Test',
  classObj: new CatalogItemSimpleAnimation('idlescan')
}

clientData[31012] = {
  name: 'Mater Shop Test',
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.materStore)
clientData[31012].classObj = new CatalogItemStore(clientData[31012].name, 'voStoreMaterEnter', 'car_f_gui_str_materStore.swf', '33274,60002,60021,60022,33274,33274,33274,33274,33274,33274', 'car_f_gui_str_avatarEditor.swf', 'voStoreMaterExit')
clientData[15001].classObj.dropPoints['31012'] = 'dp_mater_315'

clientData[102] = {
  name: "Doc's Clinic (InteractiveObject)",
  classObj: new CatalogItemMapEffect(103)
}

clientData[32012] = {
  name: 'Sleep ZZZ Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_zzzEffect.swf'])
}

clientData[20209] = {
  name: 'Powerhouse Purple',
  classObj: new CatalogItemPaint(10571765)
}

clientData[20201] = {
  name: 'DJ Blue',
  classObj: new CatalogItemPaint(167913)
}

clientData[20205] = {
  name: 'Chick Hicks Green',
  classObj: new CatalogItemPaint(7322195)
}

clientData[33275] = {
  name: 'Idle Scan Animation',
  classObj: new CatalogItemSimpleAnimation('idlescan')
}

clientData[33273] = {
  name: 'Horn Animation',
  classObj: new CatalogItemSimpleAnimation('horn')
}

clientData[33274] = {
  name: 'Idle Animation',
  classObj: new CatalogItemSimpleAnimation('idleBlink')
}

clientData[54019] = {
  name: 'Medium Horn',
  classObj: new CatalogItemSimpleSound('ui', 'HonkMedium')
}

clientData[60025] = {
  name: 'Wave Animation',
  classObj: new CatalogItemSimpleAnimation('wave')
}

clientData[60021] = {
  name: 'Smile Animation',
  classObj: new CatalogItemSimpleAnimation('smile')
}

clientData[60001] = {
  name: 'Bored Animation',
  classObj: new CatalogItemSimpleAnimation('bored')
}

clientData[60022] = {
  name: 'Stretch Animation',
  classObj: new CatalogItemSimpleAnimation('stretch')
}

clientData[60030] = {
  name: 'Racing Closed Eyes Animation',
  classObj: new CatalogItemSimpleAnimation('racingClosedEyes')
}

clientData[1000] = {
  name: 'New Player Tutorial',
  classObj: new CatalogItemDungeon('New Player Tutorial', 0, 'car_f_evt_rsn_newPlayerRsnBackStory_en_US.swf', 'car_w_env_rsp_NewPlayer', 'car_g_map_env_newPlayer.swf', 'new_player_tutorial')
}

clientData[31009] = {
  name: 'Mater',
  classObj: new CatalogItemNPC()
}

clientData[31010] = {
  name: 'Lightning McQueen',
  classObj: new CatalogItemNPC('car_k_chr_frn_mcqueenLow.dpak', 'Lightning McQueen', 'car_r_chr_frn_mcqueen.smod', '', '', 105)
}

clientData[42001] = {
  name: 'spRace_ccs',
  classObj: new CatalogItemRaceTrack(false, 'sp_ccs', 'car_f_gui_ttl_carburetorCounty_en_US.swf', 'sp_ccs', 'car_w_trk_rsp_CarburetorCountySpeedway', 'car_g_map_trk_carburetorCounty.swf', 'Music', 'CarburetorCountySpeedway', 'car_w_trk_rsp_ccSpeedway_SS_phys.xml', 15001, 'car_g_lgo_trk_carburetorCountySpeedway_en_US.swf', 'car_g_rac_scn_CarbCountySpeedway.jpg')
}

clientData[42002] = {
  name: 'spRace_rh',
  classObj: new CatalogItemRaceTrack(false, 'sp_ttf', 'car_f_gui_ttl_twistinTailfinTrk_en_US.swf', 'sp_ttf', 'car_w_trk_tfn_TwistinTailfinTrails', 'car_g_map_trk_twistinTailfin.swf', 'Music', 'TwistinTailfinTrack', 'car_w_trk_tfn_twistinTailfin_SS_V1_phys.xml', 15003, 'car_g_lgo_trk_twistinTailfinTrk_en_US.swf', 'car_g_rac_scn_TwistinTailfinTrack.jpg')
}

clientData[42003] = {
  name: 'spRace_ffr',
  classObj: new CatalogItemRaceTrack(false, 'sp_ffr', 'car_f_gui_ttl_fillmoresFieldsRally_en_US.swf', 'sp_ffr', 'car_w_trk_frm_FillmoresFieldsRally', 'car_g_map_trk_fillmoreFieldsRally.swf', 'Music', 'raceFillmoresFieldsRally', 'car_w_trk_frm_ffRally_SS_phys.xml', 15002, 'car_g_lgo_trk_fillmoresFieldsRally_en_US.swf', 'car_g_rac_scn_FillmoresFieldsRally.jpg')
}

clientData[42005] = {
  name: 'spRace_wb',
  classObj: new CatalogItemRaceTrack(false, 'sp_wbr', 'car_f_gui_ttl_willysButteRally_en_US.swf', 'sp_wbr', 'car_w_trk_wil_WillysButteRally', 'car_g_map_trk_willysButte.swf', 'Music', 'raceWilliesButteRally', 'car_w_trk_wil_WillysButte_SS_phys.xml', 15006, 'car_g_lgo_trk_willysButte_en_US.swf', 'car_g_rac_scn_WillysButte.jpg')
}

clientData[31016] = {
  name: 'Racing NPC (Snot Rod)',
  classObj: new CatalogItemNPC('car_k_chr_frn_snotrodLow.dpak', 'Snot Rod', 'car_r_chr_frn_snotrod.smod', 'car_g_ico_npc_snotRod.swf', 'car_g_ico_chr_snotRod.jpg')
}

clientData[31017] = {
  name: 'Racing NPC 2 (DJ)',
  classObj: new CatalogItemNPC('car_k_chr_frn_djLow.dpak', 'DJ', 'car_r_chr_frn_dj.smod', 'car_g_ico_npc_dj.swf', 'car_g_ico_chr_dj.jpg')
}

clientData[31018] = {
  name: 'Racing NPC 3 (Boost)',
  classObj: new CatalogItemNPC('car_k_chr_frn_boostLow.dpak', 'Boost', 'car_r_chr_frn_boost.smod', 'car_g_ico_npc_boost.swf', 'car_g_ico_chr_boost.jpg')
}

clientData[31019] = {
  name: 'Racing NPC 4 (Wingo)',
  classObj: new CatalogItemNPC('car_k_chr_frn_wingoLow.dpak', 'Wingo', 'car_r_chr_frn_wingo.smod', 'car_g_ico_npc_wingo.swf', 'car_g_ico_chr_wingo.jpg')
}

clientData[61000] = {
  name: "Ramone's Paint Blaster",
  classObj: new CatalogItemMinigame('car_spl_puz_ramonepaint', "Ramone's Paint Blast")
}

clientData[61000].classObj.eventId = 61000

clientData[61002] = {
  name: 'Lightning Storm Space Assault',
  classObj: null
}

clientData[61002].classObj = new CatalogItemMinigame('car_spl_act_lightningstorm', clientData[61002].name)
clientData[61002].classObj.eventId = 61002

clientData[61003] = {
  name: "Fillmore's Fuel Mixin' Area, Man",
  classObj: null
}

clientData[61003].classObj = new CatalogItemMinigame('car_spl_puz_fillmoresfuelmix', clientData[61003].name)
clientData[61003].classObj.eventId = 61003

clientData[59000] = {
  name: 'Default Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_bcg_pfl_checkeredFlag.swf')
}

clientData[22002] = {
  name: "Lightning McQueen's Pro-Race Shop",
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.mcQueenStore)
clientData[22002].classObj = new CatalogItemStore(clientData[22002].name, 'voStoreLightningEnter', 'car_f_gui_str_mcQueenStore.swf', '33274,60020,60021,60022,60020,60010,33274,33274,33274,33274', 'car_f_gui_str_avatarEditor.swf', 'voStoreLightningExit')
clientData[15001].classObj.dropPoints['22002'] = 'dp_lightning_225'

// TODO: Figure out proper animation for these ids?
clientData[60010] = clientData[31011]
clientData[60020] = clientData[31011]

clientData[22004] = {
  name: "Ramone's House of Body Art",
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.ramoneStore)
clientData[22004].classObj = new CatalogItemStore(clientData[22004].name, 'voStoreRamoneEnter', 'car_f_gui_str_ramoneStore.swf', '33274,60022,60021,60026,60010,33274,33274,33274,33274,33274', 'car_f_gui_str_bodyShaping.swf', 'voStoreRamoneExit')
clientData[15001].classObj.dropPoints['22004'] = 'dp_ramone_180'

// TODO: Figure out proper animation for this id?
clientData[60026] = clientData[31011]

// Ramone
clientData[25010] = {
  name: 'Free Body Work!',
  classObj: null
}

clientData[25010].classObj = new CatalogItemQuest(clientData[25010].name, "You look pretty stock to Ramone.\nSo he's making you a one-time offer of some FREE BODY WORK!\nDrive inside and see what you can make of yourself!", 'car_g_qst_adv_ramoneFreeCustomization.jpg', 'car_g_ico_adv_ramone.ajpg')

clientData[22223] = {
  name: "Enter Ramone's shop and get a free body customization.",
  classObj: null
}

clientData[22223].classObj = new CatalogItemQuestStep(clientData[22223].name)

clientData[22224] = {
  name: "Return to Ramone.",
  classObj: null
}

clientData[22224].classObj = new CatalogItemQuestStep(clientData[22224].name, 'return_npc')

clientData[22229] = {
  name: 'Quest 25010 Coin Reward',
  classObj: null
}

clientData[22229].classObj = new CatalogItemQuestReward(clientData[22229].name, 3, 10)

clientData[22230] = {
  name: "Medallion Bronze Paint",
  classObj: null
}

clientData[22230].classObj = new CatalogItemQuestReward(clientData[22230].name, 0, 1, 'car_g_ico_clr_blinginBronze.swf', 0)

// Doc's Clinic game
clientData[103] = {
  name: "Doc's Clinic",
  classObj: null
}

clientData[103].classObj = new CatalogItemMinigame('car_spl_puz_docsclinic', clientData[103].name)
clientData[103].classObj.eventId = 103

/*
clientData[60502] = {
  name: 'Default Printable Background',
  classObj: new CatalogItemPrintableTheme()
}
*/

const shopData = {}

// Lightning McQueen's Pro-Race Shop
shopData[22002] = new ArrayCollection()
shopData[22002].push(new CatalogPlayerStoreItem(200, 'Motor Speedway Exclusive Costume', 'Available only to Motor Speedway of the South Champions!', 'car_g_ico_pjb_motorspeedway.ajpg', 5000))
shopData[22002].push(new CatalogPlayerStoreItem(201, 'AV-RAGE Racing Fin', '', 'car_g_ico_spo_avrageRacingFin.ajpg', 1000))
shopData[22002].push(new CatalogPlayerStoreItem(202, 'RZN-TEK Ninja XL', '', 'car_g_ico_spo_RZNTEKNinjaXL.ajpg', 8000))
shopData[22002].push(new CatalogPlayerStoreItem(203, 'SKY-LITE Drop Wing', '', 'car_g_ico_spo_skyLiteDropWing.ajpg', 6000))

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.luigiStore)
clientData[22003] = {
  name: "Luigi's Casa Della Tires",
  classObj: null
}

clientData[22003].classObj = new CatalogItemStore(clientData[22003].name, 'voStoreLuigiEnter', 'car_f_gui_str_luigiStore.swf', '33274,60010,60011,60022,60010,60010,33274,33274,33274,33274', null, 'voStoreLuigiExit')
clientData[15001].classObj.dropPoints['22003'] = 'dp_luigi_135 '

clientData[31024] = {
  name: 'New Player Tutorial (Truck)',
  classObj: new CatalogItemNPC('car_a_chr_frn_semi_tut1_sc1.sani', 'Truck', 'car_r_chr_avt_semi.smod', '', '')
}

// Sponsors
clientData[9980] = {
  name: 'Shiny Wax',
  classObj: null
}

clientData[9980].classObj = new CatalogItemSponsor(clientData[9980].name, 1, 'car_g_bcg_spr_shinyWax.swf', 'car_g_bcg_spr_shinyWaxTent_en_US.swf', 'car_t_cst_dec_shinyWax.swf', '')

clientData[9981] = {
  name: 'Leak Less',
  classObj: null
}

clientData[9981].classObj = new CatalogItemSponsor(clientData[9981].name, 1, 'car_g_bcg_spr_leakLess.swf', 'car_g_bcg_spr_leaklessTent_en_US.swf', 'car_t_cst_dec_leakLess.swf', '')

clientData[9982] = {
  name: 'Sputter Stop',
  classObj: null
}

clientData[9982].classObj = new CatalogItemSponsor(clientData[9982].name, 1, 'car_g_bcg_spr_sputterStop.swf', 'car_g_bcg_spr_sputterStopTent_en_US.swf', 'car_t_cst_dec_sputterStop.swf', '')

clientData[9983] = {
  name: 'Spare Mint',
  classObj: null
}

clientData[9983].classObj = new CatalogItemSponsor(clientData[9983].name, 1, 'car_g_bcg_spr_spareMint.swf', 'car_g_bcg_spr_spareMintTent_en_US.swf', 'car_t_cst_dec_spareMint.swf', '')

clientData[9984] = {
  name: 'Trunk Fresh',
  classObj: null
}

clientData[9984].classObj = new CatalogItemSponsor(clientData[9984].name, 1, 'car_g_bcg_spr_trunkFresh.swf', 'car_g_bcg_spr_trunkFreshTent_en_US.swf', 'car_t_cst_dec_trunkFresh.swf', '')

clientData[9985] = {
  name: "Lil' Torquey Pistons",
  classObj: null
}

clientData[9985].classObj = new CatalogItemSponsor(clientData[9985].name, 2, 'car_g_bcg_spr_torquey.swf', 'car_g_bcg_spr_torqueyTent_en_US.swf', 'car_t_cst_dec_torqueyPistons.swf', 'car_g_bcg_spr_torqueyTent_main_en_US.swf')

clientData[9986] = {
  name: 'Gask-Its',
  classObj: null
}

clientData[9986].classObj = new CatalogItemSponsor(clientData[9986].name, 2, 'car_g_bcg_spr_gaskits.swf', 'car_g_bcg_spr_gaskitsTent_en_US.swf', 'car_t_cst_dec_gaskits.swf', 'car_g_bcg_spr_gaskitsTent_main_en_US.swf')

clientData[9987] = {
  name: 'No Stall',
  classObj: null
}

clientData[9987].classObj = new CatalogItemSponsor(clientData[9987].name, 3, 'car_g_bcg_spr_nostall.swf', 'car_g_bcg_spr_nostallTent_en_US.swf', 'car_t_cst_dec_noStall.swf', 'car_g_bcg_spr_nostallTent_main_en_US.swf')

clientData[9988] = {
  name: 'Rev-N-Go',
  classObj: null
}

clientData[9988].classObj = new CatalogItemSponsor(clientData[9988].name, 3, 'car_g_bcg_spr_revNgo.swf', 'car_g_bcg_spr_revNgoTent_en_US.swf', 'car_t_cst_dec_revNGo.swf', 'car_g_bcg_spr_revNgoTent_main_en_US.swf')

clientData[9989] = {
  name: 'Gasprin',
  classObj: null
}

clientData[9989].classObj = new CatalogItemSponsor(clientData[9989].name, 4, 'car_g_bcg_spr_gasprin.swf', 'car_g_bcg_spr_gasprinTent_en_US.swf', 'car_t_cst_dec_gasprin.swf', 'car_g_bcg_spr_gasprinTent_main_en_US.swf')

clientData[9990] = {
  name: 'Tank Coat',
  classObj: null
}

clientData[9990].classObj = new CatalogItemSponsor(clientData[9990].name, 4, 'car_g_bcg_spr_tankCoat.swf', 'car_g_bcg_spr_tankCoatTent_en_US.swf', 'car_t_cst_dec_tankCoat.swf', 'car_g_bcg_spr_tankCoatTent_main_en_US.swf')

clientData[9991] = {
  name: 'Re-Volting',
  classObj: null
}

clientData[9991].classObj = new CatalogItemSponsor(clientData[9991].name, 5, 'car_g_bcg_spr_reVolting.swf', 'car_g_bcg_spr_reVoltingTent_en_US.swf', 'car_t_cst_dec_revolting.swf', 'car_g_bcg_spr_reVoltingTent_main_en_US.swf')

clientData[9992] = {
  name: 'htB',
  classObj: null
}

clientData[9992].classObj = new CatalogItemSponsor(clientData[9992].name, 5, 'car_g_bcg_spr_htB.swf', 'car_g_bcg_spr_htBTent_en_US.swf', 'car_t_cst_dec_htb.swf', 'car_g_bcg_spr_htBTent_main_en_US.swf')

clientData[9993] = {
  name: 'Vitoline',
  classObj: null
}

clientData[9993].classObj = new CatalogItemSponsor(clientData[9993].name, 6, 'car_g_bcg_spr_vitoline.swf', 'car_g_bcg_spr_vitolineTent_en_US.swf', 'car_t_cst_dec_vitoline.swf', 'car_g_bcg_spr_vitolineTent_main_en_US.swf')

clientData[9994] = {
  name: 'ViewZeen',
  classObj: null
}

clientData[9994].classObj = new CatalogItemSponsor(clientData[9994].name, 6, 'car_g_bcg_spr_viewZeen.swf', 'car_g_bcg_spr_viewZeenTent_en_US.swf', 'car_t_cst_dec_vuzeen.swf', 'car_g_bcg_spr_viewzeenTent_main_en_US.swf')

clientData[9995] = {
  name: 'Rust-eze',
  classObj: null
}

clientData[9995].classObj = new CatalogItemSponsor(clientData[9995].name, 7, 'car_g_bcg_spr_rusteze.swf', 'car_g_bcg_spr_rustezeTent_en_US.swf', 'car_t_cst_dec_rusteze.swf', 'car_g_bcg_spr_rustezeTent_main_en_US.swf')

clientData[9996] = {
  name: 'Nitroade',
  classObj: null
}

clientData[9996].classObj = new CatalogItemSponsor(clientData[9996].name, 7, 'car_g_bcg_spr_nitroAde.swf', 'car_g_bcg_spr_nitroAdeTent_en_US.swf', 'car_t_cst_dec_nitroAde.swf', 'car_g_bcg_spr_nitroAdeTent_main_en_US.swf')

clientData[9997] = {
  name: 'Octane Gain',
  classObj: null
}

clientData[9997].classObj = new CatalogItemSponsor(clientData[9997].name, 7, 'car_g_bcg_spr_octaneGain.swf', 'car_g_bcg_spr_octaneGainTent_en_US.swf', 'car_t_cst_dec_octaneGain.swf', 'car_g_bcg_spr_octaneGainTent_main_en_US.swf')

clientData[9998] = {
  name: 'N2O Cola',
  classObj: null
}

clientData[9998].classObj = new CatalogItemSponsor(clientData[9998].name, 7, 'car_g_bcg_spr_n2oCola.swf', 'car_g_bcg_spr_n2oColaTent_en_US.swf', 'car_t_cst_dec_n2o.swf', 'car_g_bcg_spr_n2oColaTent_main_en_US.swf')

clientData[9999] = {
  name: 'Dinoco',
  classObj: null
}

clientData[9999].classObj = new CatalogItemSponsor(clientData[9999].name, 7, 'car_g_bcg_spr_dinoco.swf', 'car_g_bcg_spr_dinocoTent_en_US.swf', 'car_t_cst_dec_dinoco.swf', 'car_g_bcg_spr_dinocoTent_main_en_US.swf')

clientData[10000] = {
  name: 'Mood Springs',
  classObj: null
}

clientData[10000].classObj = new CatalogItemSponsor(clientData[10000].name, 7, 'car_g_bcg_spr_moodSprings.swf', 'car_g_bcg_spr_moodSpringsTent_en_US.swf', 'car_t_cst_dec_moodSprings.swf', 'car_g_bcg_spr_moodSpringsTent_main_en_US.swf')

// Emotes
clientData[21001] = {
  name: 'Laugh',
  classObj: null
}

clientData[21001].classObj = new CatalogItemEmote(clientData[21001].name, 'car_g_ico_emo_laugh.swf', 'car_a_chr_avt_sports_laugh.sani', '')

clientData[21002] = {
  name: 'Rev Engine',
  classObj: null
}

clientData[21002].classObj = new CatalogItemEmote(clientData[21002].name, 'car_g_ico_emo_revEngine.swf', 'car_a_chr_avt_sports_revEngine.sani', '')

clientData[21003] = {
  name: 'Smile',
  classObj: null
}

clientData[21003].classObj = new CatalogItemEmote(clientData[21003].name, 'car_g_ico_emo_smile.swf', 'car_a_chr_avt_sports_smile.sani', '')

clientData[21004] = {
  name: 'The Ramone',
  classObj: null
}

clientData[21004].classObj = new CatalogItemEmote(clientData[21004].name, 'car_g_ico_emo_theRamone.swf', 'car_a_chr_avt_sports_kewl.sani', '')

clientData[21005] = {
  name: 'Wave',
  classObj: null
}

clientData[21005].classObj = new CatalogItemEmote(clientData[21005].name, 'car_g_ico_emo_wave.swf', 'car_a_chr_avt_sports_wave.sani', '')

clientData[21006] = {
  name: 'Wink',
  classObj: null
}

clientData[21006].classObj = new CatalogItemEmote(clientData[21006].name, 'car_g_ico_emo_wink.swf', 'car_a_chr_avt_sports_wink.sani', '')

clientData[21007] = {
  name: 'Yuck!',
  classObj: null
}

clientData[21007].classObj = new CatalogItemEmote(clientData[21007].name, 'car_g_ico_emo_yuck.swf', 'car_a_chr_avt_sports_yuck.sani', '')

module.exports = { clientData, shopData, assetData }
