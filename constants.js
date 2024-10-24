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
const Asset = global.Asset
const CatalogItemMapSprite = global.CatalogItemMapSprite
const CatalogItemDialogItem = global.CatalogItemDialogItem
const CatalogItemMicrogame = global.CatalogItemMicrogame
const CatalogItemFizzyFuel = global.CatalogItemFizzyFuel
const CatalogItemGear = global.CatalogItemGear
const CatalogItemYardItem = global.CatalogItemYardItem

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

clientData[102] = {
  name: 'Redhood Valley (CatalogItemMapEffect)',
  classObj: new CatalogItemMapEffect(15003)
}

clientData[106] = {
  name: "Doc's Clinic (CatalogItemDialogItem)",
  classObj: new CatalogItemDialogItem('com.disney.cars.ui.dialogs.microgames.DocsSplashDialog', 'car_f_gui_dia_mmgDocsClinic.swf')
}

clientData[107] = {
  name: "Luigi's Casa Della Tires (CatalogItemDialogItem)",
  classObj: new CatalogItemDialogItem('com.disney.cars.ui.dialogs.microgames.LuigisSplashDialog', 'car_f_gui_dia_mmgLuigisTireToss.swf')
}

clientData[108] = {
  name: "Mater's Sling Shoot (CatalogItemDialogItem)",
  classObj: new CatalogItemDialogItem('com.disney.cars.ui.dialogs.microgames.MatersSplashDialog', 'car_f_gui_dia_mmgMatersPlayground.swf')
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
  name: 'LA International Speedway',
  classObj: new CatalogItemWorldZone('LA International Speedway', 100, 'car_f_gui_ttl_laSpeedwayZone_en_US.swf', 'car_w_trk_prf_LASpeedwayZone', 'car_g_map_env_laSpeedway.swf', 'scripts/isoworld/las_proTrack.lua', 'Music', 'zoneLASpeedway', 'dp_default_45')
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
  classObj: new CatalogItemDecal(['car_t_cst_lit_tailLight02.swf'], 2)
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

clientData[33205] = {
  name: 'Ramone Idle Scan Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_ramone_idleScan.sani')
}

// TODO: Find correct id?
clientData[33206] = {
  name: 'Snot Rod Idle Scan Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_snotrod_idleScan.sani')
}

// TODO: Same as above
clientData[33207] = {
  name: 'DJ Idle Scan Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_dj_idleScan.sani')
}

// TODO: Same as above
clientData[33208] = {
  name: 'Boost Idle Scan Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_boost_idleScan.sani')
}

// TODO: Same as above
clientData[33209] = {
  name: 'Wingo Idle Scan Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_wingo_idleScan.sani')
}

// TODO: Is this id correct? (car_s_int_chr_mater_anims_RS.swf)
clientData[33052] = {
  name: 'Mater Idle Scan Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_mater_idleScan.sani')
}

clientData[1000] = {
  name: 'New Player Tutorial',
  classObj: new CatalogItemDungeon('New Player Tutorial', 0, 'car_f_evt_rsn_newPlayerRsnBackStory_en_US.swf', 'car_w_env_rsp_NewPlayer', 'car_g_map_env_newPlayer.swf', 'new_player_tutorial')
}

clientData[31008] = {
  name: 'Ramone',
  classObj: new CatalogItemNPC('car_k_chr_frn_ramoneLow.dpak', 'Ramone', 'car_r_chr_frn_ramone.smod', '', '', 33205)
}

clientData[31009] = {
  name: 'Mater',
  classObj: new CatalogItemNPC('car_k_chr_frn_materLow.dpak', 'Mater', 'car_r_chr_frn_mater.smod', '', 'car_g_ico_chr_mater.jpg', 33052)
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
  classObj: new CatalogItemNPC('car_k_chr_frn_snotrodLow.dpak', 'Snot Rod', 'car_r_chr_frn_snotrod.smod', 'car_g_ico_npc_snotRod.swf', 'car_g_ico_chr_snotRod.jpg', 33206)
}

clientData[31017] = {
  name: 'Racing NPC 2 (DJ)',
  classObj: new CatalogItemNPC('car_k_chr_frn_djLow.dpak', 'DJ', 'car_r_chr_frn_dj.smod', 'car_g_ico_npc_dj.swf', 'car_g_ico_chr_dj.jpg', 33207)
}

clientData[31018] = {
  name: 'Racing NPC 3 (Boost)',
  classObj: new CatalogItemNPC('car_k_chr_frn_boostLow.dpak', 'Boost', 'car_r_chr_frn_boost.smod', 'car_g_ico_npc_boost.swf', 'car_g_ico_chr_boost.jpg', 33208)
}

clientData[31019] = {
  name: 'Racing NPC 4 (Wingo)',
  classObj: new CatalogItemNPC('car_k_chr_frn_wingoLow.dpak', 'Wingo', 'car_r_chr_frn_wingo.smod', 'car_g_ico_npc_wingo.swf', 'car_g_ico_chr_wingo.jpg', 33209)
}

clientData[61000] = {
  name: "Ramone's Paint Blaster",
  classObj: new CatalogItemMinigame('car_spl_puz_ramonepaint', "Ramone's Paint Blast", 61000)
}

clientData[61002] = {
  name: 'Lightning Storm Space Assault',
  classObj: null
}

clientData[61002].classObj = new CatalogItemMinigame('car_spl_act_lightningstorm', clientData[61002].name, 61002)

clientData[61003] = {
  name: "Fillmore's Fuel Mixin' Area, Man",
  classObj: null
}

clientData[61003].classObj = new CatalogItemMinigame('car_spl_puz_fillmoresfuelmix', clientData[61003].name, 61003)

clientData[59000] = {
  name: 'Default Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_bcg_pfl_checkeredFlag.swf')
}

clientData[22001] = {
  name: "Fillmore's Organic Fuels",
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.fillmoreStore)
clientData[22001].classObj = new CatalogItemStore(clientData[22001].name, 'voStoreFillmoreEnter', 'car_f_gui_str_fillmoreStore.swf', '33274,60002,60021,60022,33274,33274,33274,33274,33274,33274', '', 'voStoreFillmoreExit')
clientData[15001].classObj.dropPoints['22001'] = 'dp_fillmore_225 '

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

clientData[22005] = {
  name: "Sally's Cozy Cone Gift Shop",
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.sallyStore)
clientData[22005].classObj = new CatalogItemStore(clientData[22005].name, 'voStoreSallyEnter', 'car_f_gui_str_sallyStore.swf', '33274,60026,60021,60022,33274,33274,33274,33274,33274,33274', '', 'voStoreSallyExit')
clientData[15001].classObj.dropPoints['22005'] = 'dp_sally_135'

clientData[22006] = {
  name: "Sarge's Surplus Hut",
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.sargeStore)
clientData[22006].classObj = new CatalogItemStore(clientData[22006].name, 'voStoreSargeEnter', 'car_f_gui_str_sargeStore.swf', '33274,33274,60022,60022,33274,33274,33274,33274,33274,33274', '', 'voStoreSargeExit')
clientData[15001].classObj.dropPoints['22006'] = 'dp_sarge_225'

clientData[22008] = {
  name: "Mater's Junk Yard",
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.materStore)
clientData[22008].classObj = new CatalogItemStore(clientData[22008].name, 'voStoreMaterEnter', 'car_f_gui_str_materStore.swf', '33274,60002,60021,60022,33274,33274,33274,33274,33274,33274', '', 'voStoreMaterExit')
clientData[15001].classObj.dropPoints['22008'] = 'dp_mater_315'

clientData[22009] = {
  name: "The Great Outdoors",
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.landscapeStore)
clientData[22009].classObj = new CatalogItemStore(clientData[22009].name, '', 'car_f_gui_str_greatOutdoorsStore.swf', '', '', '')
clientData[15001].classObj.dropPoints['22009'] = 'dp_greatoutdoors_180'

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
  name: 'Return to Ramone.',
  classObj: null
}

clientData[22224].classObj = new CatalogItemQuestStep(clientData[22224].name, 'return_npc')

clientData[22229] = {
  name: 'Quest 25010 Coin Reward',
  classObj: null
}

clientData[22229].classObj = new CatalogItemQuestReward(clientData[22229].name, 3, 10)

clientData[22230] = {
  name: 'Medallion Bronze Paint',
  classObj: null
}

clientData[22230].classObj = new CatalogItemQuestReward(clientData[22230].name, 0, 1, 'car_g_ico_clr_blinginBronze.swf', 0)

// Doc's Clinic game
clientData[61004] = {
  name: "Doc's Clinic",
  classObj: null
}

clientData[61004].classObj = new CatalogItemMicrogame('car_spl_puz_docsclinic', clientData[61004].name, 61004)

// Luigi's Casa Della Tires game
clientData[61005] = {
  name: "Luigi's Casa Della Tires",
  classObj: null
}

clientData[61005].classObj = new CatalogItemMicrogame('car_spl_act_luigistiretoss', clientData[61005].name, 61005)

// Mater's Sling Shoot game
clientData[61006] = {
  name: "Mater's Sling Shoot",
  classObj: null
}

clientData[61006].classObj = new CatalogItemMicrogame('car_spl_act_matersplayground', clientData[61006].name, 61006)

/*
clientData[60502] = {
  name: 'Default Printable Background',
  classObj: new CatalogItemPrintableTheme()
}
*/

const shopData = {}

// Fillmore's Organic Fuels
shopData[22001] = new ArrayCollection()
shopData[22001].push(new CatalogItemFizzyFuel(204, 'Flakey Flake', '', 'car_g_ico_cns_flakeyFlake.png', 200))
shopData[22001].push(new CatalogItemFizzyFuel(205, 'Spray Ray', 'Help other Cars cool off in the hot sun! Or just surprise them with a blast to the grill!', 'car_g_ico_cns_superSpray.png', 200))
shopData[22001].push(new CatalogItemFizzyFuel(206, 'Glubble', '', 'car_g_ico_cns_glubble.png', 200))
shopData[22001].push(new CatalogItemFizzyFuel(207, 'Party Blast', 'Make every party a blast by backfiring organic confetti!', 'car_g_ico_cns_partyBlast.png', 200))
shopData[22001].push(new CatalogItemFizzyFuel(208, 'Flurrrp', '', 'car_g_ico_cns_flurrrp.ajpg', 100))
shopData[22001].push(new CatalogItemFizzyFuel(209, 'Gastro Blasto', '', 'car_g_ico_cns_gastroBlastro.ajpg', 200))
shopData[22001].push(new CatalogItemFizzyFuel(210, 'Flurp', '', 'car_g_ico_cns_flurp.ajpg', 200))

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

// Sally's Cozy Cone Gift Shop
shopData[22005] = new ArrayCollection()
shopData[22005].push(new CatalogItemYardItem(211, 'Tail Light Bouquet', '', 'car_g_ico_yar_tireSmallFlowerPot.ajpg', 300, 100))
shopData[22005].push(new CatalogItemYardItem(212, 'Cozy Tail Light Cone', '', 'car_g_ico_yar_coneFlowerPot.ajpg', 500, 100))
shopData[22005].push(new CatalogItemYardItem(213, 'Cozy Cone Fountain', '', 'car_g_ico_yar_cozyConeFountain.ajpg', 4000, 101))

// Sarge's Surplus Hut
shopData[22006] = new ArrayCollection()
shopData[22006].push(new CatalogItemGear(214, 'Oil Slick 6-Pack', '', 'car_g_ico_ger_oilSlick6x.png', 595))
shopData[22006].push(new CatalogItemGear(215, 'Smoke Screen 6-Pack', '', 'car_g_ico_ger_smokeScreen6x.png', 595))
shopData[22006].push(new CatalogItemGear(216, 'Hay Bale Boom! 3-Pack', '', 'car_g_ico_ger_hayBaleBomb3x.png', 400))
shopData[22006].push(new CatalogItemGear(217, 'Oil Slick 3-Pack', '', 'car_g_ico_ger_oilSlick3x.png', 200))
shopData[22006].push(new CatalogItemGear(218, 'Smoke Screen 3-Pack', '', 'car_g_ico_ger_smokeScreen3x.png', 200))

// Mater's Junk Yard
shopData[22008] = new ArrayCollection()
shopData[22008].push(new CatalogItemYardItem(219, 'Foolish Sign', 'Let Cars know that you are a sucker!', 'car_g_ico_yar_freeSign.png', 9999, 103))
shopData[22008].push(new CatalogItemYardItem(220, "Mater's Windmill", '', 'car_g_ico_yar_junkBarrelWindmill.ajpg', 5000, 100))
shopData[22008].push(new CatalogItemYardItem(221, 'Giant Gas Tank', '', 'car_g_ico_yar_gasTankLarge.ajpg', 3000, 104))
shopData[22008].push(new CatalogItemYardItem(222, 'Large Tire Stack', '', 'car_g_ico_yar_tireStackTruckBig.ajpg', 500))
shopData[22008].push(new CatalogItemYardItem(223, 'Oil Drum', '', 'car_g_ico_yar_oilDrumB.ajpg', 300, 102))
shopData[22008].push(new CatalogItemYardItem(224, 'Medium Tire Stack', '', 'car_g_ico_yar_tireStackTruckMed.ajpg', 300))
shopData[22008].push(new CatalogItemYardItem(225, 'Gear Fountain', 'A little fountain for your yard. Gearific!', 'car_g_ico_yar_fountainGear.ajpg', 3000, 101))
shopData[22008].push(new CatalogItemYardItem(226, 'Cafe Gas Tank', '', 'car_g_ico_yar_gasTank.ajpg', 1000, 104))
shopData[22008].push(new CatalogItemYardItem(227, "Mater's Oil Pan Fountain", '', 'car_g_ico_yar_junkFountainA.ajpg', 3000, 101))

// The Great Outdoors
shopData[22009] = new ArrayCollection()
shopData[22009].push(new CatalogItemYardItem(228, 'Funny Car Mailbox', '', 'car_g_ico_yar_mailboxFunnyCar.ajpg', 3000, 50))
shopData[22009].push(new CatalogItemYardItem(229, 'Covered Wagon Mailbox', '', 'car_g_ico_yar_mailboxCoverWagon.ajpg', 3000, 50))
shopData[22009].push(new CatalogItemYardItem(230, "Fillmore's Windmill", 'Now you can always know which way the wind blows.', '', 5000, 50))
shopData[22009].push(new CatalogItemYardItem(231, 'Big Camp Fire', '', 'car_g_ico_ger_hayBaleBomb.ajpg', 100, 50))
shopData[22009].push(new CatalogItemYardItem(232, 'Car Show-Off Home Version Wall Right', '', 'car_g_ico_yar_CarShowOffBanner_090.png', 200, 50))
shopData[22009].push(new CatalogItemYardItem(233, 'Car Show-Off Home Version Wall Left', '', 'car_g_ico_yar_CarShowOffBanner_000.png', 200, 50))
shopData[22009].push(new CatalogItemYardItem(234, 'Petroleum City Pipe Wall Left', '', 'car_g_ico_yar_petroFence_000.png', 800, 102))
shopData[22009].push(new CatalogItemYardItem(235, 'Wiggly Ahead Sign', '', 'car_g_ico_yar_wiggleAheadSign.ajpg', 1000, 103))
shopData[22009].push(new CatalogItemYardItem(236, 'Danger Sign', '', 'car_g_ico_yar_dangerSign.png', 1000, 103))
shopData[22009].push(new CatalogItemYardItem(237, 'Race Sign', '', 'car_g_ico_yar_raceArrowSignWithPole.png', 1000, 103))

clientData[31024] = {
  name: 'New Player Tutorial (Truck)',
  classObj: new CatalogItemNPC('car_a_chr_frn_semi_tut1_sc1.sani', 'Truck', 'car_r_chr_avt_semi.smod', '', '')
}

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

clientData[5000] = {
  name: 'Map Sprite Test (InteractiveObject)',
  classObj: new CatalogItemMapSprite()
}

module.exports = { clientData, shopData, assetData }
