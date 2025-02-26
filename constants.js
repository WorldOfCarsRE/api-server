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
const CatalogItemMapSprite = global.CatalogItemMapSprite
const CatalogItemDialogItem = global.CatalogItemDialogItem
const CatalogItemMicrogame = global.CatalogItemMicrogame
const CatalogItemCarDNA = global.CatalogItemCarDNA
const CatalogItemFizzyFuel = global.CatalogItemFizzyFuel
const CatalogItemYardItem = global.CatalogItemYardItem
const CatalogItemConsumable = global.CatalogItemConsumable
const CatalogItemStack = global.CatalogItemStack
const CatalogItemDetailing = global.CatalogItemDetailing

const ArrayCollection = global.ArrayCollection

const AssetDictionary = global.AssetDictionary

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
  classObj: new CatalogItemPuppet(110, 'Mater', 109, 9127187, 9127187) // Mater npcId
}

clientData[104] = {
  name: 'McQueen Puppet',
  classObj: new CatalogItemPuppet(31010, 'Lightning McQueen', 105, 16711680, 16711680)
}

clientData[105] = {
  name: 'McQueen Idle Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_mcqueen_idleBlink.sani')
}

clientData[109] = {
  name: 'Mater Idle Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_mater_idleBlink.sani')
}

clientData[110] = {
  name: 'Mater', // Puppet
  classObj: new CatalogItemNPC('car_k_chr_frn_materLow.dpak', 'Mater', 'car_r_chr_frn_mater.smod', '', 'car_g_ico_chr_mater.jpg', 109)
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
  classObj: new CatalogItemMapEffect(15003, 0)
}

clientData[103] = {
  name: 'Downtown Radiator Springs Cones (CatalogItemMapEffect)',
  classObj: new CatalogItemMapEffect(0, 0)
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
const idToAsset = {}

function parseAssetMappings () {
  const results = new ArrayCollection()

  const xmlData = fs.readFileSync('assets/mappings.xml', 'utf-8')
  const parser = new XMLParser({ ignoreAttributes: false })
  const mappings = parser.parse(xmlData).mappings

  let id = 1

  for (const mapping of mappings.m) {
    results.push(new AssetDictionary(id, mapping['@_dir'], mapping['@_key']))
    id += 1
  }

  return results
}

const assetMappings = parseAssetMappings()

function parseAssetData (filename) {
  const results = new ArrayCollection()

  const xmlData = fs.readFileSync(`assets/maps/${filename}`, 'utf-8')
  const parser = new XMLParser({ ignoreAttributes: false })
  const assets = parser.parse(xmlData).assets

  for (const asset of assets.asset) {
    const assetObj = new Asset(asset.layerId, asset.offsetX, asset.width, asset.filename, asset.assetId, asset.offsetY, asset.solid, asset.height)
    results.push(assetObj)
    idToAsset[Number(asset.assetId)] = assetObj
  }

  return results
}

assetData[15001] = parseAssetData('car_w_env_rsp_RadiatorSprings_assets.xml')
assetData[15002] = parseAssetData('car_w_env_frm_FillmoresFields_assets.xml')
assetData[15003] = parseAssetData('car_w_env_tfn_RedhoodValley_assets.xml')
assetData[15005] = parseAssetData('car_w_trk_prf_TailgatorZone_assets.xml')
assetData[15006] = parseAssetData('car_w_env_wil_WillysButte_assets.xml')
assetData[15008] = parseAssetData('car_w_trk_prf_BigHeartlandZone_assets.xml')
assetData[15009] = parseAssetData('car_w_trk_prf_BackFireCanyonZone_assets.xml')
assetData[15010] = parseAssetData('car_w_trk_prf_PetroleumCityZone_assets.xml')
assetData[15011] = parseAssetData('car_w_trk_prf_MotorSpeedwaySouthZone_assets.xml')
assetData[15012] = parseAssetData('car_w_trk_prf_LASpeedwayZone_assets.xml')

assetData[42001] = parseAssetData('car_w_trk_rsp_CarburetorCountySpeedway_assets.xml')
assetData[42002] = parseAssetData('car_w_trk_tfn_TwistinTailfinTrails_assets.xml')
assetData[42003] = parseAssetData('car_w_trk_frm_FillmoresFieldsRally_assets.xml')
assetData[42005] = parseAssetData('car_w_trk_wil_WillysButteRally_assets.xml')

assetData[10001] = parseAssetData('car_w_yar_own_non_member_yard_assets.xml')

// Parse these items as well
for (const asset of parseAssetData('car_yard_items_assets.xml')) {
  assetData[10001].push(asset)
}

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
  classObj: new CatalogItemWorldZone("Fillmore's Fields", 100, 'car_f_gui_ttl_fillmoresFields_en_US.swf', 'car_w_env_frm_FillmoresFields', 'car_g_map_env_farmGrounds.swf', 'scripts/isoworld/fillmores_fields.lua', 'Music', 'zoneFillmoresFields', 'dp_default_45')
}

// Willy's Buttle
clientData[15002].classObj.dropPoints['15006'] = 'dp_wb_135'

// Race tracks
clientData[15002].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15002].classObj.dropPoints.mp = 'dp_mp_270'

clientData[15003] = {
  name: 'Redhood Valley',
  classObj: new CatalogItemWorldZone('Redhood Valley', 100, 'car_f_gui_ttl_tailfinPass_en_US.swf', 'car_w_env_tfn_RedhoodValley', 'car_g_map_env_redhoodValley.swf', 'scripts/isoworld/tailfin_pass.lua', 'Music', 'zoneRedHood', 'dp_default_270')
}

// Race tracks
clientData[15003].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15003].classObj.dropPoints.mp = 'dp_mp_225'

clientData[15005] = {
  name: 'Tailgator Speedway',
  classObj: new CatalogItemWorldZone('Tailgator Speedway', 100, 'car_f_gui_ttl_tailGatorSpeedwayZone_en_US.swf', 'car_w_trk_prf_TailgatorZone', 'car_g_map_env_tailgatorSpeedway.swf', 'scripts/isoworld/tgs_proTrack.lua', 'Music', 'themeRSNalternate', 'dp_default_45')
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
  classObj: new CatalogItemWorldZone('Motor Speedway of the South', 100, 'car_f_gui_ttl_motorCitySpeedwayZone_en_US.swf', 'car_w_trk_prf_MotorSpeedwaySouthZone', 'car_g_map_env_motorSpeedway.swf', 'scripts/isoworld/mss_proTrack.lua', 'Music', 'raceMSS', 'dp_default_45')
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
  classObj: new CatalogItemDungeon('Home', 0, 'car_f_gui_ldr_generic_en_US.swf', 'car_w_yar_own_non_member_yard', 'car_g_map_env_yardNonMember.swf', 'scripts/yard/small.lua', 'Music', 'zoneRadiatorSprings02', 'dp_default_45')
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

clientData[51105] = {
  name: 'Car Decal Hood (Shiny Wax)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_shinyWax_topFront.swf', 0])
}

clientData[51106] = {
  name: 'Car Decal Rear (Shiny Wax)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_shinyWax_rear.swf', 9])
}

clientData[51107] = {
  name: 'Car Decal Hood (Leak Less)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_leakLess_topFront.swf', 0])
}

clientData[51108] = {
  name: 'Car Decal Rear (Leak Less)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_leakLess_rear.swf', 9])
}

clientData[51109] = {
  name: 'Car Decal Hood (Sputter Stop)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_sputterStop_topFront.swf', 0])
}

clientData[51110] = {
  name: 'Car Decal Rear (Sputter Stop)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_sputterStop_rear.swf', 9])
}

clientData[51111] = {
  name: 'Car Decal Hood (Spare Mint)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_spareMint_topFront.swf', 0])
}

clientData[51112] = {
  name: 'Car Decal Rear (Spare Mint)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_spareMint_rear.swf', 9])
}

clientData[51113] = {
  name: 'Car Decal Hood (Trunk Fresh)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_trunkFresh_topFront.swf', 0])
}

clientData[51114] = {
  name: 'Car Decal Rear (Trunk Fresh)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_trunkFresh_rear.swf', 9])
}

clientData[51115] = {
  name: "Car Decal Hood (Lil' Torquey Pistons)",
  classObj: new CatalogItemDecal(['car_t_cst_dec_lilTourqueyPistons_topFront.swf', 0])
}

clientData[51116] = {
  name: "Car Decal Rear (Lil' Torquey Pistons)",
  classObj: new CatalogItemDecal(['car_t_cst_dec_lilTourqueyPistons_rear.swf', 9])
}

clientData[51117] = {
  name: 'Car Decal Hood (Gask-Its)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_gaskits_topFront.swf', 0])
}

clientData[51118] = {
  name: 'Car Decal Rear (Gask-Its)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_gaskits_rear.swf', 9])
}

clientData[51119] = {
  name: 'Car Decal Hood (No Stall)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_noStall_topFront.swf', 0])
}

clientData[51120] = {
  name: 'Car Decal Rear (No Stall)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_noStall_rear.swf', 9])
}

clientData[51121] = {
  name: 'Car Decal Hood (Rev-N-Go)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_revNgo_topFront.swf', 0])
}

clientData[51122] = {
  name: 'Car Decal Rear (Rev-N-Go)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_revNgo_rear.swf', 9])
}

clientData[51123] = {
  name: 'Car Decal Hood (Gasprin)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_gasprin_topFront.swf', 0])
}

clientData[51124] = {
  name: 'Car Decal Rear (Gasprin)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_gasprin_rear.swf', 9])
}

clientData[51125] = {
  name: 'Car Decal Hood (Tank Coat)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_tankCoat_topFront.swf', 0])
}

clientData[51126] = {
  name: 'Car Decal Rear (Tank Coat)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_tankCoat_rear.swf', 9])
}

clientData[51127] = {
  name: 'Car Decal Hood (Re-Volting)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_revolting_topFront.swf', 0])
}

clientData[51128] = {
  name: 'Car Decal Rear (Re-Volting)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_revolting_rear.swf', 9])
}

clientData[51129] = {
  name: 'Car Decal Hood (htB)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_HTB_topFront.swf', 0])
}

clientData[51130] = {
  name: 'Car Decal Rear (htB)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_HTB_rear.swf', 9])
}

clientData[51131] = {
  name: 'Car Decal Hood (Vitoline)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_vitoline_topFront.swf', 0])
}

clientData[51132] = {
  name: 'Car Decal Rear (Vitoline)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_vitoline_rear.swf', 9])
}

clientData[51133] = {
  name: 'Car Decal Hood (ViewZeen)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_viewZeen_topFront.swf', 0])
}

clientData[51134] = {
  name: 'Car Decal Rear (ViewZeen)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_viewZeen_rear.swf', 9])
}

clientData[51135] = {
  name: 'Car Decal Hood (Rust-eze)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_rusteze_topFront.swf', 0])
}

clientData[51136] = {
  name: 'Car Decal Rear (Rust-eze)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_rusteze_rear.swf', 9])
}

clientData[51137] = {
  name: 'Car Decal Hood (Nitroade)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_nitroade_topFront.swf', 0])
}

clientData[51138] = {
  name: 'Car Decal Rear (Nitroade)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_nitroade_rear.swf', 9])
}

clientData[51139] = {
  name: 'Car Decal Hood (Octane Gain)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_octaneGain_topFront.swf', 0])
}

clientData[51140] = {
  name: 'Car Decal Rear (Octane Gain)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_octaneGain_rear.swf', 9])
}

clientData[51141] = {
  name: 'Car Decal Hood (N2O Cola)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_n2o_topFront.swf', 0])
}

clientData[51142] = {
  name: 'Car Decal Rear (N2O Cola)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_n2o_rear.swf', 9])
}

clientData[51143] = {
  name: 'Car Decal Hood (Dinoco)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_dinoco_topFront.swf', 0])
}

clientData[51144] = {
  name: 'Car Decal Rear (Dinoco)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_dinoco_rear.swf', 9])
}

clientData[51145] = {
  name: 'Car Decal Hood (Mood Springs)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_moodSprings_topFront.swf', 0])
}

clientData[51146] = {
  name: 'Car Decal Rear (Mood Springs)',
  classObj: new CatalogItemDecal(['car_t_cst_dec_moodSprings_rear.swf', 9])
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

clientData[32010] = {
  name: 'Tractor Smoke Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_tractorSmoke.swf'])
}

clientData[32012] = {
  name: 'Sleep ZZZ Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_zzzEffect.swf'])
}

clientData[32013] = {
  name: 'Flakey Flake Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_flakeyFlake.swf'])
}

clientData[32014] = {
  name: 'Spray Ray Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_superSpray.swf'])
}

clientData[32015] = {
  name: 'Glubble Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_bubbleBlast.swf'])
}

clientData[32016] = {
  name: 'Party Blast Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_partyBlast.swf'])
}

clientData[32017] = {
  name: 'Flurrrp Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_flurrrp.swf'])
}

clientData[32018] = {
  name: 'Gastro Blasto Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_gastroBlastro.swf'])
}

clientData[32019] = {
  name: 'Flurp Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_flurp.swf'])
}

clientData[32020] = {
  name: 'SBD NRG Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_sbdNrg.swf'])
}

clientData[32021] = {
  name: 'Green Laser Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_laserBeamGreen.swf'])
}

clientData[32022] = {
  name: 'Pink Laser Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_laserBeamPink.swf'])
}

clientData[32023] = {
  name: 'Red Laser Effect',
  classObj: new CatalogItemEffect(['car_f_evt_efx_laserBeamRed.swf'])
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

clientData[54010] = {
  name: 'Tractor Slosh Sounds',
  classObj: new CatalogItemSimpleSound('Tractors', 'Sloshes')
}

clientData[54011] = {
  name: 'Tractor Fart Sounds',
  classObj: new CatalogItemSimpleSound('Tractors', 'Farts')
}

clientData[54012] = {
  name: 'Flakey Flake Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'fizzyFuelFlakeyFlake')
}

clientData[54013] = {
  name: 'Spray Ray Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'fizzyFuelSuperSpray')
}

clientData[54014] = {
  name: 'Glubble Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'fizzyFuelBubbleBlast')
}

clientData[54015] = {
  name: 'Party Blast Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'fizzyFuelPartyBlast')
}

clientData[54016] = {
  name: 'Flurrrp Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'fizzyFuelBurp')
}

clientData[54017] = {
  name: 'Gastro Blasto Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'blastroGastroBackFire')
}

clientData[54018] = {
  name: 'Flurp Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'urp')
}

clientData[54020] = {
  name: 'SBD NRG Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'sbdNRG')
}

clientData[54021] = {
  name: 'Green Laser Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'fizzyFuelLaserGreen')
}

clientData[54022] = {
  name: 'Pink Laser Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'fizzyFuelLaserPink')
}

clientData[54023] = {
  name: 'Red Laser Sound',
  classObj: new CatalogItemSimpleSound('FizzyFuel', 'fizzyFuelLaserRed')
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

clientData[33260] = {
  name: 'Tractor Drive Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_tractor_drive.sani')
}

clientData[33267] = {
  name: 'Tractor Sleep Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_tractor_sleep.sani')
}

clientData[33269] = {
  name: 'Tractor Sleep to Tipped Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_tractor_sleep_to_tipped.sani')
}

clientData[33271] = {
  name: 'Tractor Tipped Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_tractor_tipped.sani')
}

clientData[33272] = {
  name: 'Tractor Tipped to Idle Animation',
  classObj: new CatalogItemSimpleAnimation('', 'car_a_chr_frn_tractor_tipped_to_idle.sani')
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

clientData[31015] = {
  name: 'Tractor',
  classObj: new CatalogItemNPC('car_k_chr_frn_tractorLow.dpak', 'Tractor', 'car_r_chr_frn_tractor.smod', '', '', 33267)
}

clientData[42001] = {
  name: 'spRace_ccs',
  classObj: new CatalogItemRaceTrack('Carburetor County Speedway', 'Local track where the showdown is downtown!', false, 'sp_ccs', 'mp_ccs', 'car_f_gui_ttl_carburetorCounty_en_US.swf', 'sp_ccs', 'car_w_trk_rsp_CarburetorCountySpeedway', 'car_g_map_trk_carburetorCounty.swf', 'Music', 'raceCarburetorCountySpeedway', 'car_w_trk_rsp_ccSpeedway_SS_phys.xml', 15001, 'car_g_lgo_trk_carburetorCountySpeedway_en_US.swf', 'car_g_rac_scn_CarbCountySpeedway.jpg', 'car_g_ico_map_CCS.swf')
}

clientData[42002] = {
  name: 'spRace_rh',
  classObj: new CatalogItemRaceTrack("Twistin' Tailfin Trails", "Test tons of turns on Twistin' Tailfin Trails!", false, 'sp_ttf', 'mp_ttf', 'car_f_gui_ttl_twistinTailfinTrk_en_US.swf', 'sp_ttf', 'car_w_trk_tfn_TwistinTailfinTrails', 'car_g_map_trk_twistinTailfin.swf', 'Music', 'TwistinTailfinTrack', 'car_w_trk_tfn_twistinTailfin_SS_V1_phys.xml', 15003, 'car_g_lgo_trk_twistinTailfinTrk_en_US.swf', 'car_g_rac_scn_TwistinTailfinTrack.jpg', 'car_g_ico_map_TTT.swf')
}

clientData[42003] = {
  name: 'spRace_ffr',
  classObj: new CatalogItemRaceTrack("Fillmore's Fields Rally", "Farm-tastic fun track that's totally organic!", false, 'sp_ffr', 'mp_ffr', 'car_f_gui_ttl_fillmoresFieldsRally_en_US.swf', 'sp_ffr', 'car_w_trk_frm_FillmoresFieldsRally', 'car_g_map_trk_fillmoreFieldsRally.swf', 'Music', 'raceFillmoresFieldsRally', 'car_w_trk_frm_ffRally_SS_phys.xml', 15002, 'car_g_lgo_trk_fillmoresFieldsRally_en_US.swf', 'car_g_rac_scn_FillmoresFieldsRally.jpg', 'car_g_ico_map_FFR.swf')
}

clientData[42004] = {
  name: 'race_tgs',
  classObj: new CatalogItemRaceTrack('Tailgator Speedway', 'Piston Cup Series Grand Challenge No. 1', true, 'sp_tgs', 'mp_tgs', 'car_f_gui_ttl_tailGatorSpeedway_en_US.swf', 'sp_tgs', 'car_w_trk_prf_TailgatorSpeedway', 'car_g_map_trk_tailgatorSpeedway.swf', 'Music', 'raceTailGatorSpeedway', 'car_w_trk_prf_tailgator_SS_phys.xml', 15005, 'car_g_lgo_trk_tailGatorSpeedway_en_US.swf', 'car_g_rac_scn_tailgatorSpeedwayTrack.jpg', 'car_g_ico_map_TGS.swf')
}

clientData[42005] = {
  name: 'spRace_wb',
  classObj: new CatalogItemRaceTrack('Willys Butte Rally', "Doc Hudson's old stomping grounds sizzle with speed!", false, 'sp_wbr', 'mp_wbr', 'car_f_gui_ttl_willysButteRally_en_US.swf', 'sp_wbr', 'car_w_trk_wil_WillysButteRally', 'car_g_map_trk_willysButte.swf', 'Music', 'raceWilliesButteRally', 'car_w_trk_wil_WillysButte_SS_phys.xml', 15006, 'car_g_lgo_trk_willysButte_en_US.swf', 'car_g_rac_scn_WillysButte.jpg', 'car_g_ico_map_WBR.swf')
}

clientData[42006] = {
  name: 'race_bhl',
  classObj: new CatalogItemRaceTrack('Big Heartland Speedway', 'Piston Cup Series Grand Challenge No. 2', true, 'sp_bhl', 'mp_bhl', 'car_f_gui_ttl_bigHeartlandSpeedway_en_US.swf', '', 'car_w_trk_prf_BigHeartlandSpeedway', 'car_g_map_trk_bigHeartlandSpeedway.swf', 'Music', 'raceBigHeartland', 'car_w_trk_prf_BigHeartland_SS_phys.xml', 15006, 'car_g_lgo_trk_bigHeartlandSpeedway_en_US.swf', 'car_g_rac_scn_bigHeartlandSpeedwayTrack.jpg', 'car_g_ico_map_BHS.swf')
}

clientData[42007] = {
  name: 'race_bfc',
  classObj: new CatalogItemRaceTrack('Backfire Canyon Speedway', 'Piston Cup Series Grand Challenge No. 3', true, 'sp_bfc', 'mp_bfc', 'car_f_gui_ttl_backfireCanyonSpeedway_en_US.swf', '', 'car_w_trk_prf_BackfireCanyon', 'car_g_map_trk_backfireCanyon.swf', 'Music', 'raceBFC', 'car_w_trk_prf_BackfireCanyon_SS_phys.xml', 15009, 'car_g_lgo_trk_backfireCanyonSpeedway_en_US.swf', 'car_g_rac_scn_backfireCanyonSpeedwayTrack.jpg', 'car_g_ico_map_BCS.swf')
}

clientData[42008] = {
  name: 'race_pc',
  classObj: new CatalogItemRaceTrack('Petroleum City Super Speedway', 'Piston Cup Series Grand Challenge No. 4', true, 'sp_pc', 'mp_pc', 'car_f_gui_ttl_petroCitySpeedway_en_US.swf', '', 'car_w_trk_prf_PetroleumCityRaceway', 'car_g_map_trk_petroCitySpeedway.swf', 'Music', 'racePetroleum', 'car_w_trk_prf_PetroleumCityRace_SS_phys.xml', 15010, 'car_g_lgo_trk_petroCitySpeedway_en_US.swf', 'car_g_rac_scn_petroCitySpeedwayTrack.jpg', 'car_g_ico_map_PCS.swf')
}

clientData[42009] = {
  name: 'race_mss',
  classObj: new CatalogItemRaceTrack('Motor Speedway of the South', 'Piston Cup Series Grand Challenge No. 5', true, 'sp_mss', 'mp_mss', 'car_f_gui_ttl_motorCitySpeedway_en_US.swf', '', 'car_w_trk_prf_MotorSpeedwaySouth', 'car_g_map_trk_motorCitySpeedway.swf', 'Music', 'raceMSS', 'car_w_trk_prf_MotorSpeedwaySouth_SS_phys.xml', 15011, 'car_g_lgo_trk_motorSpeedway_en_US.swf', 'car_g_rac_scn_motorSpeedwayTrack.jpg', 'car_g_ico_map_MCS.swf')
}

clientData[42010] = {
  name: 'race_las',
  classObj: new CatalogItemRaceTrack('LA International Speedway', 'Piston Cup Series Grand Challenge No. 6', true, 'sp_las', 'mp_las', 'car_f_gui_ttl_laSpeedway_en_US.swf', '', 'car_w_trk_prf_LASpeedway', 'car_g_map_trk_laSpeedway.swf', 'Music', 'raceLASpeedway', 'car_w_trk_prf_LASpeedway_SS_phys.xml', 15012, 'car_g_lgo_trk_laSpeedway_en_US.swf', 'car_g_rac_scn_laSpeedwayTrack.jpg', 'car_g_ico_map_LAS.swf')
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
clientData[15001].classObj.dropPoints['61000'] = 'dp_ramone_180'

clientData[61002] = {
  name: 'Lightning Storm Space Assault',
  classObj: null
}

clientData[61002].classObj = new CatalogItemMinigame('car_spl_act_lightningstorm', clientData[61002].name, 61002)
clientData[15001].classObj.dropPoints['61002'] = 'dp_lightning_crib_225'

clientData[61003] = {
  name: "Fillmore's Fuel Mixin' Area, Man",
  classObj: null
}

clientData[61003].classObj = new CatalogItemMinigame('car_spl_puz_fillmoresfuelmix', clientData[61003].name, 61003)
clientData[15002].classObj.dropPoints['61003'] = 'dp_fillmoremix_225'

clientData[59000] = {
  name: 'Default Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_checkeredFlag.jpg', 'car_g_bcg_pfl_checkeredFlag.swf')
}

clientData[59001] = {
  name: 'Shiny Wax Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_shinyWax.jpg', 'car_g_bcg_pfl_shinyWax.swf')
}

clientData[59002] = {
  name: 'Leak Less Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_leakless.jpg', 'car_g_bcg_pfl_leakLess.swf')
}

clientData[59003] = {
  name: 'Sputter Stop Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_sputterStop.jpg', 'car_g_bcg_pfl_sputterStop.swf')
}

clientData[59004] = {
  name: 'Spare Mint Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_spareMint.jpg', 'car_g_bcg_pfl_spareMint.swf')
}

clientData[59005] = {
  name: 'Trunk Fresh Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_trunkFresh.jpg', 'car_g_bcg_pfl_trunkFresh.swf')
}

clientData[59006] = {
  name: "Lil' Torquey Pistons Profile Background",
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_torquey.jpg', 'car_g_bcg_pfl_lilTorquey.swf')
}

clientData[59007] = {
  name: 'Gask-Its Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_gaskits.jpg', 'car_g_bcg_pfl_gaskits.swf')
}

clientData[59008] = {
  name: 'No Stall Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_nostall.jpg', 'car_g_bcg_pfl_noStall.swf')
}

clientData[59009] = {
  name: 'Rev-N-Go Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_revNgo.jpg', 'car_g_bcg_pfl_revNGo.swf')
}

clientData[59010] = {
  name: 'Gasprin Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_gasprin.jpg', 'car_g_bcg_pfl_gasprin.swf')
}

clientData[59011] = {
  name: 'Tank Coat Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_tankCoat.jpg', 'car_g_bcg_pfl_tankCoat.swf')
}

clientData[59012] = {
  name: 'Re-Volting Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_revolting.jpg', 'car_g_bcg_pfl_reVolting.swf')
}

clientData[59013] = {
  name: 'htB Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_htb.jpg', 'car_g_bcg_pfl_htB.swf')
}

clientData[59014] = {
  name: 'Vitoline Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_vitoline.jpg', 'car_g_bcg_pfl_vitoline.swf')
}

clientData[59015] = {
  name: 'ViewZeen Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_viewzeen.jpg', 'car_g_bcg_pfl_viewzeen.swf')
}

clientData[59016] = {
  name: 'Rust-eze Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_rusteze.jpg', 'car_g_bcg_pfl_rusteze.swf')
}

clientData[59017] = {
  name: 'Nitroade Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_nitroade.jpg', 'car_g_bcg_pfl_nitroade.swf')
}

clientData[59018] = {
  name: 'Octane Gain Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_octanegain.jpg', 'car_g_bcg_pfl_octanegain.swf')
}

clientData[59019] = {
  name: 'N2O Cola Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_n2o.jpg', 'car_g_bcg_pfl_n2oCola.swf')
}

clientData[59020] = {
  name: 'Dinoco Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_dinoco.jpg', 'car_g_bcg_pfl_dinoco.swf')
}

clientData[59021] = {
  name: 'Mood Springs Profile Background',
  classObj: new CatalogItemProfileTheme('car_g_ico_bcg_moodSprings.jpg', 'car_g_bcg_pfl_moodSprings.swf')
}

clientData[22001] = {
  name: "Fillmore's Organic Fuels",
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.fillmoreStore)
clientData[22001].classObj = new CatalogItemStore(clientData[22001].name, 'voStoreFillmoreEnter', 'car_f_gui_str_fillmoreStore.swf', '33274,60002,60021,60022,33274,33274,33274,33274,33274,33274', '', 'voStoreFillmoreExit')
clientData[15001].classObj.dropPoints['22001'] = 'dp_fillmore_225 '

// TODO: Figure out proper animation for this id?
clientData[60002] = clientData[31011]

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
  name: 'The Great Outdoors',
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.landscapeStore)
clientData[22009].classObj = new CatalogItemStore(clientData[22009].name, '', 'car_f_gui_str_greatOutdoorsStore.swf', '', '', '')
clientData[15001].classObj.dropPoints['22009'] = 'dp_greatoutdoors_180'

clientData[22010] = {
  name: 'Mack Shop',
  classObj: null
}

clientData[22010].classObj = new CatalogItemStore(clientData[22010].name, '', '', '', '', '', 'car_f_gui_str_mackStore.swf')

clientData[22011] = {
  name: "Fillmore's Fizzy Fuel Hut",
  classObj: null
}

clientData[22011].classObj = new CatalogItemStore(clientData[22011].name, '', '', '', '', '', 'car_f_gui_str_fizzyFuelHut.swf')

clientData[22012] = {
  name: 'Spy Shop',
  classObj: null
}

clientData[22012].classObj = new CatalogItemStore(clientData[22012].name, '', '', '', '', '', 'car_f_gui_str_spyStore.swf')

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

clientData[204] = {
  name: 'Flakey Flake',
  classObj: null
}

clientData[204].classObj = new CatalogItemFizzyFuel(204, clientData[204].name, 'Bring on the chill! A frosty fuel to keep things cool, man.', 'car_g_ico_cns_flakeyFlake.png', 200, 16777215, 32013, 21008, 'car_g_ico_cns_flakeyFlake_dashboard.swf', 54012)
shopData[22001].push(clientData[204].classObj)

clientData[205] = {
  name: 'Spray Ray',
  classObj: null
}

clientData[205].classObj = new CatalogItemFizzyFuel(205, clientData[205].name, 'Help other Cars cool off in the hot sun! Or just surprise them with a blast to the grill!', 'car_g_ico_cns_superSpray.png', 200, 16777215, 32014, 21009, 'car_g_ico_cns_superSpray_dashboard.swf', 54013)
shopData[22001].push(clientData[205].classObj)

clientData[206] = {
  name: 'Glubble',
  classObj: null
}

clientData[206].classObj = new CatalogItemFizzyFuel(206, clientData[206].name, "Give your ride a bubbly boost! Pink fuel with poppin' personality.", 'car_g_ico_cns_glubble.png', 200, 16777215, 32015, 21010, 'car_g_ico_cns_bubbleBlast_dashboard.swf', 54014)
shopData[22001].push(clientData[206].classObj)

clientData[207] = {
  name: 'Party Blast',
  classObj: null
}

clientData[207].classObj = new CatalogItemFizzyFuel(207, clientData[207].name, 'Make every party a blast by backfiring organic confetti!', 'car_g_ico_cns_partyBlast.png', 200, 16777215, 32016, 21011, 'car_g_ico_cns_partyBlast_dashboard.swf', 54015)
shopData[22001].push(clientData[207].classObj)

clientData[208] = {
  name: 'Flurrrp',
  classObj: null
}

clientData[208].classObj = new CatalogItemFizzyFuel(208, clientData[208].name, "Triple the 'urp, triple the fun! Super-concentrated for serious flurp power.", 'car_g_ico_cns_flurrrp.ajpg', 100, 16777215, 32017, 21012, 'car_g_ico_cns_flurrrp_dashboard.swf', 54016)
shopData[22001].push(clientData[208].classObj)

clientData[209] = {
  name: 'Gastro Blasto',
  classObj: null
}

clientData[209].classObj = new CatalogItemFizzyFuel(209, clientData[209].name, 'A green blast of fizzy goodness feel it tingle from tank to tailpipe!', 'car_g_ico_cns_gastroBlastro.ajpg', 200, 16777215, 32018, 21013, 'car_g_ico_cns_gastroBlastro_dashboard.swf', 54017)
shopData[22001].push(clientData[209].classObj)

clientData[210] = {
  name: 'Flurp',
  classObj: null
}

clientData[210].classObj = new CatalogItemFizzyFuel(210, clientData[210].name, "Make your muffler sing! One sip and your engine's groovin' in technicolor.", 'car_g_ico_cns_flurp.ajpg', 100, 16777215, 32019, 21014, 'car_g_ico_cns_flurp_dashboard.swf', 54018)
shopData[22001].push(clientData[210].classObj)

clientData[211] = {
  name: 'SBD NRG',
  classObj: null
}

clientData[211].classObj = new CatalogItemFizzyFuel(211, clientData[211].name, "Silent but… dynamic! This fuel's got a kick you'll feel all the way to the bumper.", 'car_g_ico_cns_sbdNrg.ajpg', 200, 16777215, 32020, 21015, 'car_g_ico_cns_sbdNrg_dashboard.swf', 54020)
shopData[22001].push(clientData[211].classObj)

// Lightning McQueen's Pro-Race Shop
shopData[22002] = new ArrayCollection()

clientData[200] = {
  name: 'Motor Speedway Exclusive Costume',
  classObj: null
}

clientData[200].classObj = new CatalogItemDetailing(clientData[200].name, 'Available only to Motor Speedway of the South Champions!', 'car_g_ico_pjb_motorspeedway.ajpg', 5000, 'car_t_cst_pjb_motorspeedway.swf')
clientData[200].classObj.itemId = 200

shopData[22002].push(clientData[200].classObj)

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

clientData[212] = {
  name: 'Tail Light Bouquet',
  classObj: null
}

clientData[212].classObj = new CatalogItemYardItem(212, clientData[212].name, '', 'car_g_ico_yar_tireSmallFlowerPot.ajpg', 300, 100)

shopData[22005].push(clientData[212].classObj)

clientData[213] = {
  name: 'Cozy Tail Light Cone',
  classObj: null
}

clientData[213].classObj = new CatalogItemYardItem(213, clientData[213].name, '', 'car_g_ico_yar_coneFlowerPot.ajpg', 500, 100)

shopData[22005].push(clientData[213].classObj)

clientData[214] = {
  name: 'Cozy Cone Fountain',
  classObj: null
}

clientData[214].classObj = new CatalogItemYardItem(214, clientData[214].name, '', 'car_g_ico_yar_cozyConeFountain.ajpg', 4000, 101)
clientData[214].classObj.assetId = 4184872185 // Found in `car_yard_items_assets.xml`

shopData[22005].push(clientData[214].classObj)

// Sarge's Surplus Hut
shopData[22006] = new ArrayCollection()
shopData[22006].push(new CatalogItemStack(215, 'Oil Slick 6-Pack', 'Lay down a slick escape plan—six times the slipperiness!', 'car_g_ico_ger_oilSlick6x.png', 595, 501, 6))
shopData[22006].push(new CatalogItemStack(216, 'Smoke Screen 6-Pack', 'Double the packs, double the smoke—make your getaway grand! (Screen not included.)', 'car_g_ico_ger_smokeScreen6x.png', 595, 503, 6))
shopData[22006].push(new CatalogItemStack(217, 'Hay Bale Boom! 3-Pack', 'Bales that go boom! Perfect for camouflaging with a little extra kick.', 'car_g_ico_ger_hayBaleBomb3x.png', 400, 502, 3))
shopData[22006].push(new CatalogItemStack(218, 'Oil Slick 3-Pack', 'A triple threat of slick moves for a quick getaway!', 'car_g_ico_ger_oilSlick3x.png', 200, 501, 3))
shopData[22006].push(new CatalogItemStack(219, 'Smoke Screen 3-Pack', "Pull the wool over your opponent's eyes with triple the smoke! (Screen not included.)", 'car_g_ico_ger_smokeScreen3x.png', 200, 501, 3))

// Mater's Junk Yard
shopData[22008] = new ArrayCollection()

clientData[220] = {
  name: 'Foolish Sign',
  classObj: null
}

clientData[220].classObj = new CatalogItemYardItem(220, clientData[220].name, 'Let Cars know that you are a sucker!', 'car_g_ico_yar_freeSign.png', 9999, 103)
clientData[220].classObj.assetId = 3839703644 // Found in `car_yard_items_assets.xml`

shopData[22008].push(clientData[220].classObj)

shopData[22008].push(new CatalogItemYardItem(220, 'Foolish Sign', 'Let Cars know that you are a sucker!', 'car_g_ico_yar_freeSign.png', 9999, 103))
shopData[22008].push(new CatalogItemYardItem(221, "Mater's Windmill", '', 'car_g_ico_yar_junkBarrelWindmill.ajpg', 5000, 100))
shopData[22008].push(new CatalogItemYardItem(222, 'Giant Gas Tank', '', 'car_g_ico_yar_gasTankLarge.ajpg', 3000, 104))
shopData[22008].push(new CatalogItemYardItem(223, 'Large Tire Stack', '', 'car_g_ico_yar_tireStackTruckBig.ajpg', 500))
shopData[22008].push(new CatalogItemYardItem(224, 'Oil Drum', '', 'car_g_ico_yar_oilDrumB.ajpg', 300, 102))
shopData[22008].push(new CatalogItemYardItem(225, 'Medium Tire Stack', '', 'car_g_ico_yar_tireStackTruckMed.ajpg', 300))
shopData[22008].push(new CatalogItemYardItem(226, 'Gear Fountain', 'A little fountain for your yard. Gearific!', 'car_g_ico_yar_fountainGear.ajpg', 3000, 101))
shopData[22008].push(new CatalogItemYardItem(227, 'Cafe Gas Tank', '', 'car_g_ico_yar_gasTank.ajpg', 1000, 104))

clientData[228] = {
  name: "Mater's Oil Pan Fountain",
  classObj: null
}

clientData[228].classObj = new CatalogItemYardItem(228, clientData[228].name, '', 'car_g_ico_yar_junkFountainA.ajpg', 3000, 101)
clientData[228].classObj.assetId = 391881775 // Found in `car_yard_items_assets.xml`

shopData[22008].push(clientData[228].classObj)

// The Great Outdoors
shopData[22009] = new ArrayCollection()
shopData[22009].push(new CatalogItemYardItem(229, 'Funny Car Mailbox', '', 'car_g_ico_yar_mailboxFunnyCar.ajpg', 3000, 50))
shopData[22009].push(new CatalogItemYardItem(230, 'Covered Wagon Mailbox', '', 'car_g_ico_yar_mailboxCoverWagon.ajpg', 3000, 50))
shopData[22009].push(new CatalogItemYardItem(231, "Fillmore's Windmill", 'Now you can always know which way the wind blows.', '', 5000, 50))
shopData[22009].push(new CatalogItemYardItem(232, 'Big Camp Fire', '', 'car_g_ico_ger_hayBaleBomb.ajpg', 100, 50))
shopData[22009].push(new CatalogItemYardItem(233, 'Car Show-Off Home Version Wall Right', '', 'car_g_ico_yar_CarShowOffBanner_090.png', 200, 50))
shopData[22009].push(new CatalogItemYardItem(234, 'Car Show-Off Home Version Wall Left', '', 'car_g_ico_yar_CarShowOffBanner_000.png', 200, 50))
shopData[22009].push(new CatalogItemYardItem(235, 'Petroleum City Pipe Wall Left', '', 'car_g_ico_yar_petroFence_000.png', 800, 102))
shopData[22009].push(new CatalogItemYardItem(236, 'Wiggly Ahead Sign', '', 'car_g_ico_yar_wiggleAheadSign.ajpg', 1000, 103))
shopData[22009].push(new CatalogItemYardItem(237, 'Danger Sign', '', 'car_g_ico_yar_dangerSign.png', 1000, 103))

clientData[238] = {
  name: 'Race Sign',
  classObj: null
}

clientData[238].classObj = new CatalogItemYardItem(238, clientData[238].name, '', 'car_g_ico_yar_raceArrowSignWithPole.png', 1000, 103)
clientData[238].classObj.assetId = 4236589663 // Found in `car_yard_items_assets.xml`

shopData[22009].push(clientData[238].classObj)

// Mack Shop
shopData[22010] = new ArrayCollection()
shopData[22010].push(clientData[204].classObj)
shopData[22010].push(new CatalogItemYardItem(261, 'Green Fireworks', 'Keep the celebration going, and annoy yourself!', 'car_g_ico_yar_greenFireworks.ajpg', 1000, 103))
shopData[22010].push(new CatalogItemYardItem(260, 'Red Fireworks', 'Keep the celebration going, and annoy yourself!', 'car_g_ico_yar_redFireworks.ajpg', 1000, 103))
shopData[22010].push(new CatalogItemYardItem(259, 'Purple Fireworks', 'Keep the celebration going, and annoy yourself!', 'car_g_ico_yar_purpleFireworks.ajpg', 1000, 103))
shopData[22010].push(new CatalogItemYardItem(258, 'Peppermint Pit Stop Picnic Umbrella', '', 'car_g_ico_yar_pepermintPitStopPicnicUmbrella.ajpg', 800, 103))
shopData[22010].push(new CatalogItemYardItem(257, 'Red White & Zoom Picnic Umbrella', '', 'car_g_ico_yar_redWhiteZoomPicnicUmbrella.ajpg', 700, 103))
shopData[22010].push(new CatalogItemYardItem(256, 'Fancy Finish Line Picnic Umbrella', '', 'car_g_ico_yar_fancyFinishLinesPicnicUmbrella.ajpg', 600, 103))
shopData[22010].push(new CatalogItemYardItem(255, 'Red-E-Set-Go Picnic Umbrella', '', 'car_g_ico_yar_redESetGoPicnicUmbrella.ajpg', 500, 103))
shopData[22010].push(new CatalogItemYardItem(254, 'Peppermint Picnic Table', '', 'car_g_ico_yar_pepermintPitStopPicnicTable.ajpg', 800, 103))
shopData[22010].push(new CatalogItemYardItem(253, 'Red White & Zoom Picnic Table', '', 'car_g_ico_yar_redWhiteZoomPicnicTable.ajpg', 700, 103))
shopData[22010].push(new CatalogItemYardItem(252, 'Fancy Finish Line Picnic Table', '', 'car_g_ico_yar_fancyFinishLinesPicnicTable.ajpg', 600, 103))
shopData[22010].push(new CatalogItemYardItem(251, 'Red-E-Set-Go Picnic Table', '', 'car_g_ico_yar_redESetGoPicnicTable.ajpg', 500, 103))
shopData[22010].push(new CatalogItemYardItem(250, 'Red-E-Set-Go Grill', '', 'car_g_ico_yar_redESetGoGrill.ajpg', 1000, 103))
shopData[22010].push(new CatalogItemYardItem(249, 'Funbrella', '', 'car_g_ico_yar_beachUmbrella.png', 200, 103))
shopData[22010].push(new CatalogItemYardItem(248, 'Tilting Tiki', '', 'car_g_ico_yar_danceTikiTorch.png', 100, 103))
shopData[22010].push(new CatalogItemYardItem(247, 'Sand Tower of', '', 'car_g_ico_yar_sandTower.png', 5000, 103))
shopData[22010].push(new CatalogItemYardItem(246, 'Sand Cone', '', 'car_g_ico_yar_sandCone.png', 1000, 103))
shopData[22010].push(new CatalogItemYardItem(245, 'Sand Castle', '', 'car_g_ico_yar_sandCastle.png', 9000, 103))
shopData[22010].push(new CatalogItemYardItem(244, 'Sand Car', '', 'car_g_ico_yar_sandCar.png', 5000, 103))
shopData[22010].push(new CatalogItemYardItem(243, 'A Pile of Gifts', '', 'car_g_ico_yar_giftBoxes.ajpg', 1000, 103))
shopData[22010].push(new CatalogItemYardItem(242, 'Snow Pile', '', 'car_g_ico_yar_snowMound.ajpg', 1000, 103))
shopData[22010].push(new CatalogItemYardItem(241, 'Bigger Snow Tree', '', 'car_g_ico_yar_snowTree.ajpg', 500, 103))
shopData[22010].push(new CatalogItemYardItem(240, 'Smaller Snow Tree', '', 'car_g_ico_yar_snowTreeSmall.ajpg', 300, 103))
shopData[22010].push(new CatalogItemYardItem(239, 'Never-Melt Faux-', '', 'car_g_ico_yar_snowCar.ajpg', 2000, 103))

// Fillmore's Fizzy Fuel Hut
shopData[22011] = shopData[22001]

// Spy Shop
shopData[22012] = new ArrayCollection()

clientData[269] = {
  name: 'Red Laser',
  classObj: null
}

clientData[269].classObj = new CatalogItemFizzyFuel(269, clientData[269].name, 'Attaches easily to your headlights. For Spies who need Lasers!', 'car_g_ico_cns_laserBeamRed.png', 500, 16777215, 32023, 21018, 'car_g_ico_cns_laserBeam_dashboard.swf', 54023, 25)
shopData[22012].push(clientData[269].classObj)

clientData[268] = {
  name: 'Pink Laser',
  classObj: null
}

clientData[268].classObj = new CatalogItemFizzyFuel(268, clientData[268].name, 'Attaches easily to your headlights. For Spies who need Lasers!', 'car_g_ico_cns_laserBeamPink.png', 500, 16777215, 32022, 21017, 'car_g_ico_cns_laserBeam_dashboard.swf', 54022, 25)
shopData[22012].push(clientData[268].classObj)

clientData[267] = {
  name: 'Green Laser',
  classObj: null
}

clientData[267].classObj = new CatalogItemFizzyFuel(267, clientData[267].name, 'Attaches easily to your headlights. For Spies who need Lasers!', 'car_g_ico_cns_laserBeamGreen.png', 500, 16777215, 32021, 21016, 'car_g_ico_cns_laserBeam_dashboard.swf', 54021, 25)
shopData[22012].push(clientData[267].classObj)

shopData[22012].push(new CatalogItemYardItem(266, 'WOC 93011', 'The WOC 93011 is the latest in secret spy computers! Monitors all of Carburetor County!', 'car_g_ico_yar_SpyComputer_000.ajpg', 2000))
shopData[22012].push(new CatalogItemYardItem(265, 'Laser Fence Left', '', 'car_g_ico_yar_laserFenceLeft.ajpg', 600))
shopData[22012].push(new CatalogItemYardItem(264, 'Laser Fence Right', '', 'car_g_ico_yar_laserFenceRight.ajpg', 600))
shopData[22012].push(new CatalogItemYardItem(263, 'Surveillance Cam', '', 'car_g_ico_yar_surveillanceCamera.ajpg', 1000))

// Ramone's House of Body Art
shopData[22004] = new ArrayCollection()

clientData[201] = {
  name: 'Tribal',
  classObj: null
}

clientData[201].classObj = new CatalogItemDetailing(clientData[201].name, 'Savage but smart. Just like you out on the track!', 'car_g_ico_pjb_tribalPinStripe.ajpg', 4000, 'car_t_cst_pjb_tribalPinStripe.swf')
clientData[201].classObj.itemId = 201

shopData[22004].push(clientData[201].classObj)

// Hazards
clientData[501] = {
  name: 'Oil Slick',
  classObj: new CatalogItemConsumable(501, 'Oil Slick', '', 'car_g_ico_ger_oilSlick.ajpg', 100, 5001, 2, 'scripts/interactive/racing_hazard_oilSlick.lua')
}

clientData[502] = {
  name: 'Hay Bale Boom!',
  classObj: new CatalogItemConsumable(502, 'Hay Bale Boom!', '', 'car_g_ico_ger_hayBaleBomb.ajpg', 200, 5002, 2, 'scripts/interactive/racing_hazard_hayBaleBomb.lua')
}

clientData[503] = {
  name: 'Smoke Screen Blast',
  classObj: new CatalogItemConsumable(503, 'Smoke Screen Blast', "Pull the wool over your opponent's eyes, but do it with smoke! (Screen not included.)", 'car_g_ico_ger_smokeScreen.ajpg', 100, 5003, 2, 'scripts/interactive/racing_hazard_smokeScreen.lua')
}

clientData[31024] = {
  name: 'New Player Tutorial (Truck)',
  classObj: new CatalogItemNPC('car_a_chr_frn_semi_tut1_sc1.sani', 'Truck', 'car_r_chr_avt_semi.smod', '', '')
}

// Sponsors
clientData[9980] = {
  name: 'Shiny Wax',
  classObj: null
}

clientData[9980].classObj = new CatalogItemSponsor(clientData[9980].name, 1, 'car_g_bcg_spr_shinyWax.swf', 'car_g_bcg_spr_shinyWaxTent_en_US.swf', 'car_t_cst_dec_shinyWax.swf', '', 20401, 59001)

clientData[20401] = {
  name: 'Shiny Wax (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Shiny Wax', 'Keeps your shine beyond its time!', 'car_t_cst_dec_shinyWax.swf', [51105, 0, 0, 0, 0, 0, 0, 0, 0, 51106], 0, 20102)
}

clientData[9981] = {
  name: 'Leak Less',
  classObj: null
}

clientData[9981].classObj = new CatalogItemSponsor(clientData[9981].name, 1, 'car_g_bcg_spr_leakLess.swf', 'car_g_bcg_spr_leaklessTent_en_US.swf', 'car_t_cst_dec_leakLess.swf', '', 20402, 59002)

clientData[20402] = {
  name: 'Leak Less (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Leak Less', 'Guarantees you Leak Less with our Adult Drip Pan protection!', 'car_t_cst_dec_leakLess.swf', [51107, 0, 0, 0, 0, 0, 0, 0, 0, 51108], 0, 20103)
}

clientData[9982] = {
  name: 'Sputter Stop',
  classObj: null
}

clientData[9982].classObj = new CatalogItemSponsor(clientData[9982].name, 1, 'car_g_bcg_spr_sputterStop.swf', 'car_g_bcg_spr_sputterStopTent_en_US.swf', 'car_t_cst_dec_sputterStop.swf', '', 20403, 59003)

clientData[20403] = {
  name: 'Sputter Stop (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Sputter Stop', 'Brings those embarrassing sputters to a stop - stop - stop!', 'car_t_cst_dec_sputterStop.swf', [51109, 0, 0, 0, 0, 0, 0, 0, 0, 51110], 0, 20104)
}

clientData[9983] = {
  name: 'Spare Mint',
  classObj: null
}

clientData[9983].classObj = new CatalogItemSponsor(clientData[9983].name, 1, 'car_g_bcg_spr_spareMint.swf', 'car_g_bcg_spr_spareMintTent_en_US.swf', 'car_t_cst_dec_spareMint.swf', '', 20404, 59004)

clientData[20404] = {
  name: 'Spare Mint (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Spare Mint', 'Gives old tires that minty fresh tread!', 'car_t_cst_dec_spareMint.swf', [51111, 0, 0, 0, 0, 0, 0, 0, 0, 51112], 0, 20105)
}

clientData[9984] = {
  name: 'Trunk Fresh',
  classObj: null
}

clientData[9984].classObj = new CatalogItemSponsor(clientData[9984].name, 1, 'car_g_bcg_spr_trunkFresh.swf', 'car_g_bcg_spr_trunkFreshTent_en_US.swf', 'car_t_cst_dec_trunkFresh.swf', '', 20405, 59005)

clientData[20405] = {
  name: 'Trunk Fresh (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Trunk Fresh', 'Gives musty trunks that new Cars smell!', 'car_t_cst_dec_trunkFresh.swf', [51113, 0, 0, 0, 0, 0, 0, 0, 0, 51114], 0, 20106)
}

clientData[9985] = {
  name: "Lil' Torquey Pistons",
  classObj: null
}

clientData[9985].classObj = new CatalogItemSponsor(clientData[9985].name, 2, 'car_g_bcg_spr_torquey.swf', 'car_g_bcg_spr_torqueyTent_en_US.swf', 'car_t_cst_dec_torqueyPistons.swf', 'car_g_bcg_spr_torqueyTent_main_en_US.swf', 20406, 59006)

clientData[20406] = {
  name: "Lil' Torquey Pistons (CatalogItemCarDNA)",
  classObj: new CatalogItemCarDNA("Lil' Torquey Pistons", "Gets rid of that embarrassing cylinder gas the Lil' Torquey way!", 'car_t_cst_dec_torqueyPistons.swf', [51115, 0, 0, 0, 0, 0, 0, 0, 0, 51116], 0, 20107)
}

clientData[9986] = {
  name: 'Gask-Its',
  classObj: null
}

clientData[9986].classObj = new CatalogItemSponsor(clientData[9986].name, 2, 'car_g_bcg_spr_gaskits.swf', 'car_g_bcg_spr_gaskitsTent_en_US.swf', 'car_t_cst_dec_gaskits.swf', 'car_g_bcg_spr_gaskitsTent_main_en_US.swf', 20407, 59007)

clientData[20407] = {
  name: 'Gask-Its (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Gask-Its', 'The transmission fluid-filled race track treat! Yum-um-um-um!', 'car_t_cst_dec_gaskits.swf', [51117, 0, 0, 0, 0, 0, 0, 0, 0, 51118], 0, 20108)
}

clientData[9987] = {
  name: 'No Stall',
  classObj: null
}

clientData[9987].classObj = new CatalogItemSponsor(clientData[9987].name, 3, 'car_g_bcg_spr_nostall.swf', 'car_g_bcg_spr_nostallTent_en_US.swf', 'car_t_cst_dec_noStall.swf', 'car_g_bcg_spr_nostallTent_main_en_US.swf', 20408, 59008)

clientData[20408] = {
  name: 'No Stall (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('No Stall', 'Fly into that final lap with No Stall confidence!', 'car_t_cst_dec_noStall.swf', [51119, 0, 0, 0, 0, 0, 0, 0, 0, 51120], 0, 20109)
}

clientData[9988] = {
  name: 'Rev-N-Go',
  classObj: null
}

clientData[9988].classObj = new CatalogItemSponsor(clientData[9988].name, 3, 'car_g_bcg_spr_revNgo.swf', 'car_g_bcg_spr_revNgoTent_en_US.swf', 'car_t_cst_dec_revNGo.swf', 'car_g_bcg_spr_revNgoTent_main_en_US.swf', 20409, 59009)

clientData[20409] = {
  name: 'Rev-N-Go (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Rev-N-Go', 'The carburetor decongestant of congested champions!', 'car_t_cst_dec_revNgo.swf', [51121, 0, 0, 0, 0, 0, 0, 0, 0, 51122], 20201, 20110)
}

clientData[9989] = {
  name: 'Gasprin',
  classObj: null
}

clientData[9989].classObj = new CatalogItemSponsor(clientData[9989].name, 4, 'car_g_bcg_spr_gasprin.swf', 'car_g_bcg_spr_gasprinTent_en_US.swf', 'car_t_cst_dec_gasprin.swf', 'car_g_bcg_spr_gasprinTent_main_en_US.swf', 20410, 59010)

clientData[20410] = {
  name: 'Gasprin (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Gasprin', "Provides Hood-ache relief when your achin' hood needs it most!", 'car_t_cst_dec_gasprin.swf', [51123, 0, 0, 0, 0, 0, 0, 0, 0, 51124], 0, 20111)
}

clientData[9990] = {
  name: 'Tank Coat',
  classObj: null
}

clientData[9990].classObj = new CatalogItemSponsor(clientData[9990].name, 4, 'car_g_bcg_spr_tankCoat.swf', 'car_g_bcg_spr_tankCoatTent_en_US.swf', 'car_t_cst_dec_tankCoat.swf', 'car_g_bcg_spr_tankCoatTent_main_en_US.swf', 20411, 59011)

clientData[20411] = {
  name: 'Tank Coat (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Tank Coat', 'Soothes upset tanks, with little to no leakage.', 'car_t_cst_dec_tankCoat.swf', [51125, 0, 0, 0, 0, 0, 0, 0, 0, 51126], 0, 20112)
}

clientData[9991] = {
  name: 'Re-Volting',
  classObj: null
}

clientData[9991].classObj = new CatalogItemSponsor(clientData[9991].name, 5, 'car_g_bcg_spr_reVolting.swf', 'car_g_bcg_spr_reVoltingTent_en_US.swf', 'car_t_cst_dec_revolting.swf', 'car_g_bcg_spr_reVoltingTent_main_en_US.swf', 20412, 59012)

clientData[20412] = {
  name: 'Re-Volting (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Re-Volting', "They may not be new, but they're RE-VOLTING!", 'car_t_cst_dec_revolting.swf', [51127, 0, 0, 0, 0, 0, 0, 0, 0, 51128], 0, 20113)
}

clientData[9992] = {
  name: 'htB',
  classObj: null
}

clientData[9992].classObj = new CatalogItemSponsor(clientData[9992].name, 5, 'car_g_bcg_spr_htB.swf', 'car_g_bcg_spr_htBTent_en_US.swf', 'car_t_cst_dec_htb.swf', 'car_g_bcg_spr_htBTent_main_en_US.swf', 20413, 59013)

clientData[20413] = {
  name: 'htB (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('htB', "You won't dare leave your garage without us.", 'car_t_cst_dec_htb.swf', [51129, 0, 0, 0, 0, 0, 0, 0, 0, 51130], 0, 20114)
}

clientData[9993] = {
  name: 'Vitoline',
  classObj: null
}

clientData[9993].classObj = new CatalogItemSponsor(clientData[9993].name, 6, 'car_g_bcg_spr_vitoline.swf', 'car_g_bcg_spr_vitolineTent_en_US.swf', 'car_t_cst_dec_vitoline.swf', 'car_g_bcg_spr_vitolineTent_main_en_US.swf', 20414, 59014)

clientData[20414] = {
  name: 'Vitoline (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Vitoline', 'Feel full of vim and vigor... with Vitoline! For older, active Cars.', 'car_t_cst_dec_vitoline.swf', [51131, 0, 0, 0, 0, 0, 0, 0, 0, 51132], 20205, 20115)
}

clientData[9994] = {
  name: 'ViewZeen',
  classObj: null
}

clientData[9994].classObj = new CatalogItemSponsor(clientData[9994].name, 6, 'car_g_bcg_spr_viewZeen.swf', 'car_g_bcg_spr_viewZeenTent_en_US.swf', 'car_t_cst_dec_vuzeen.swf', 'car_g_bcg_spr_viewzeenTent_main_en_US.swf', 20415, 59015)

clientData[20415] = {
  name: 'ViewZeen (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('ViewZeen', 'Having trouble staying on your side of the street? Sharpen your sight with ViewZeen!', 'car_t_cst_dec_vuzeen.swf', [51133, 0, 0, 0, 0, 0, 0, 0, 0, 51134], 0, 20116)
}

clientData[9995] = {
  name: 'Rust-eze',
  classObj: null
}

clientData[9995].classObj = new CatalogItemSponsor(clientData[9995].name, 7, 'car_g_bcg_spr_rusteze.swf', 'car_g_bcg_spr_rustezeTent_en_US.swf', 'car_t_cst_dec_rusteze.swf', 'car_g_bcg_spr_rustezeTent_main_en_US.swf', 20416, 59016)

clientData[20416] = {
  name: 'Rust-eze (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Rust-eze', 'Are you aching for a Medicated Bumper Ointment with a rear end formula? RUST-EZE, PLEASE!', 'car_t_cst_dec_rusteze.swf', [51135, 0, 0, 0, 0, 0, 0, 0, 0, 51136], 0, 20117)
}

clientData[9996] = {
  name: 'Nitroade',
  classObj: null
}

clientData[9996].classObj = new CatalogItemSponsor(clientData[9996].name, 7, 'car_g_bcg_spr_nitroAde.swf', 'car_g_bcg_spr_nitroAdeTent_en_US.swf', 'car_t_cst_dec_nitroAde.swf', 'car_g_bcg_spr_nitroAdeTent_main_en_US.swf', 20417, 59017)

clientData[20417] = {
  name: 'Nitroade (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Nitroade', 'Do long drives make you want to crash? Keep awake with Nitroade.', 'car_t_cst_dec_nitroAde.swf', [51137, 0, 0, 0, 0, 0, 0, 0, 0, 51138], 0, 20118)
}

clientData[9997] = {
  name: 'Octane Gain',
  classObj: null
}

clientData[9997].classObj = new CatalogItemSponsor(clientData[9997].name, 7, 'car_g_bcg_spr_octaneGain.swf', 'car_g_bcg_spr_octaneGainTent_en_US.swf', 'car_t_cst_dec_octaneGain.swf', 'car_g_bcg_spr_octaneGainTent_main_en_US.swf', 20418, 59018)

clientData[20417] = {
  name: 'Octane Gain (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Octane Gain', 'A quart a day keeps roadside assistance away!', 'car_t_cst_dec_octaneGain.swf', [51139, 0, 0, 0, 0, 0, 0, 0, 0, 51140], 0, 20119)
}

clientData[9998] = {
  name: 'N2O Cola',
  classObj: null
}

clientData[9998].classObj = new CatalogItemSponsor(clientData[9998].name, 7, 'car_g_bcg_spr_n2oCola.swf', 'car_g_bcg_spr_n2oColaTent_en_US.swf', 'car_t_cst_dec_n2o.swf', 'car_g_bcg_spr_n2oColaTent_main_en_US.swf', 20419, 59019)

clientData[20419] = {
  name: 'N2O Cola (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('N2O Cola', 'Need a good laugh with your gas? Drink N2O Cola today!', 'car_t_cst_dec_n2o.swf', [51141, 0, 0, 0, 0, 0, 0, 0, 0, 51142], 20209, 20120)
}

clientData[9999] = {
  name: 'Dinoco',
  classObj: null
}

clientData[9999].classObj = new CatalogItemSponsor(clientData[9999].name, 7, 'car_g_bcg_spr_dinoco.swf', 'car_g_bcg_spr_dinocoTent_en_US.swf', 'car_t_cst_dec_dinoco.swf', 'car_g_bcg_spr_dinocoTent_main_en_US.swf', 20420, 59020)

clientData[20420] = {
  name: 'Dinoco (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Dinoco', 'Something we found in the ground makes you go, go, go! So, GO DINOCO!', 'car_t_cst_dec_dinoco.swf', [51143, 0, 0, 0, 0, 0, 0, 0, 0, 51144], 0, 20121)
}

clientData[10000] = {
  name: 'Mood Springs',
  classObj: null
}

clientData[10000].classObj = new CatalogItemSponsor(clientData[10000].name, 7, 'car_g_bcg_spr_moodSprings.swf', 'car_g_bcg_spr_moodSpringsTent_en_US.swf', 'car_t_cst_dec_moodSprings.swf', 'car_g_bcg_spr_moodSpringsTent_main_en_US.swf', 20421, 59021)

clientData[20421] = {
  name: 'Mood Springs (CatalogItemCarDNA)',
  classObj: new CatalogItemCarDNA('Mood Springs', 'Get the glide back in your ride. Get MOOD SPRINGS.', 'car_t_cst_dec_moodSprings.swf', [51145, 0, 0, 0, 0, 0, 0, 0, 0, 51146], 0, 20122)
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

clientData[21008] = {
  name: 'Flakey Flake emote',
  classObj: null
}

clientData[21008].classObj = new CatalogItemEmote(clientData[21008].name, 'car_g_ico_emo_fizzyFlakeyFlake.swf', '', '')

clientData[21009] = {
  name: 'Spray Ray emote',
  classObj: null
}

clientData[21009].classObj = new CatalogItemEmote(clientData[21009].name, 'car_g_ico_emo_superSpray.swf', '', '')

clientData[21010] = {
  name: 'Glubble emote',
  classObj: null
}

clientData[21010].classObj = new CatalogItemEmote(clientData[21010].name, 'car_g_ico_emo_fizzyGlubble.swf', '', '')

clientData[21011] = {
  name: 'Party Blast emote',
  classObj: null
}

clientData[21011].classObj = new CatalogItemEmote(clientData[21011].name, 'car_g_ico_emo_fizzyPartyBlast.swf', '', '')

clientData[21012] = {
  name: 'Flurrrp emote',
  classObj: null
}

clientData[21012].classObj = new CatalogItemEmote(clientData[21012].name, 'car_g_ico_emo_fizzyFlurrrp.swf', '', '')

clientData[21013] = {
  name: 'Gastro Blasto emote',
  classObj: null
}

clientData[21013].classObj = new CatalogItemEmote(clientData[21013].name, 'car_g_ico_emo_fizzyGastroBlastro.swf', '', '')

clientData[21014] = {
  name: 'Flurp emote',
  classObj: null
}

clientData[21014].classObj = new CatalogItemEmote(clientData[21014].name, 'car_g_ico_emo_fizzyFlurp.swf', '', '')

clientData[21015] = {
  name: 'SBD NRG emote',
  classObj: null
}

clientData[21015].classObj = new CatalogItemEmote(clientData[21015].name, 'car_g_ico_emo_fizzySBD.swf', '', '')

clientData[21016] = {
  name: 'Green Laser emote',
  classObj: null
}

clientData[21016].classObj = new CatalogItemEmote(clientData[21016].name, 'car_g_ico_emo_laserGreen.swf', '', '')

clientData[21017] = {
  name: 'Pink Laser emote',
  classObj: null
}

clientData[21017].classObj = new CatalogItemEmote(clientData[21017].name, 'car_g_ico_emo_laserPink.swf', '', '')

clientData[21018] = {
  name: 'Red Laser emote',
  classObj: null
}

clientData[21018].classObj = new CatalogItemEmote(clientData[21018].name, 'car_g_ico_emo_laserRed.swf', '', '')

clientData[5000] = {
  name: 'Map Sprite Test (InteractiveObject)',
  classObj: new CatalogItemMapSprite(40, 36, 40, 36)
}

clientData[5001] = {
  name: 'Oil Slick Map Sprite (InteractiveObject)',
  classObj: new CatalogItemMapSprite(0, 0, 0, 0, 'car_s_int_rac_oilSlick.swf', ['drop', 'end_drop', 'visible', 'end_visible', 'explode', 'end_explode', 'invisible', 'end_invisible'])
}

clientData[5002] = {
  name: 'Hay Bale Bomb Map Sprite (InteractiveObject)',
  classObj: new CatalogItemMapSprite(0, 0, 0, 0, 'car_s_int_rac_hayBaleBombRacing.swf', ['drop', 'end_drop', 'visible', 'end_visible', 'explode', 'end_explode', 'invisible', 'end_invisible'])
}

clientData[5003] = {
  name: 'Smoke Screen Map Sprite (InteractiveObject)',
  classObj: new CatalogItemMapSprite(0, 0, 0, 0, 'car_s_int_rac_smokeScreen.swf', ['drop', 'end_drop', 'visible', 'end_visible', 'explode', 'end_explode', 'invisible', 'end_invisible'])
}

// Paint jobs
clientData[20101] = {
  name: 'Cars 2 Special-Edition Paint Job',
  classObj: new CatalogItemDetailing('Cars 2 Special-Edition Paint Job', 'Cars 2 Special-Edition Paint Job', 'car_g_ico_pjb_ramone_red_neutral.ajpg', 1000, 'car_t_cst_pjb_ramone_red.swf')
}

clientData[20102] = {
  name: 'Shiny Wax Paint Job',
  classObj: new CatalogItemDetailing('Shiny Wax Paint Job', '', '', 0, 'car_t_cst_pjb_shinyWax.swf')
}

clientData[20103] = {
  name: 'Leak Less Paint Job',
  classObj: new CatalogItemDetailing('Leak Less Paint Job', '', '', 0, 'car_t_cst_pjb_leakLess.swf')
}

clientData[20104] = {
  name: 'Sputter Stop Paint Job',
  classObj: new CatalogItemDetailing('Sputter Stop Paint Job', '', '', 0, 'car_t_cst_pjb_sputterStop.swf')
}

clientData[20105] = {
  name: 'Spare Mint Paint Job',
  classObj: new CatalogItemDetailing('Spare Mint Paint Job', '', '', 0, 'car_t_cst_pjb_spareMint.swf')
}

clientData[20106] = {
  name: 'Trunk Fresh Paint Job',
  classObj: new CatalogItemDetailing('Trunk Fresh Paint Job', '', '', 0, 'car_t_cst_pjb_trunkFresh.swf')
}

clientData[20107] = {
  name: "Lil' Torquey Pistons Paint Job",
  classObj: new CatalogItemDetailing("Lil' Torquey Pistons Paint Job", '', '', 0, 'car_t_cst_pjb_lilTorqueyPistons.swf')
}

clientData[20108] = {
  name: 'Gask-Its Paint Job',
  classObj: new CatalogItemDetailing('Gask-Its Paint Job', '', '', 0, 'car_t_cst_pjb_gasket.swf')
}

clientData[20109] = {
  name: 'No Stall Paint Job',
  classObj: new CatalogItemDetailing('No Stall Paint Job', '', '', 0, 'car_t_cst_pjb_noStall.swf')
}

clientData[20110] = {
  name: 'Rev-N-Go Paint Job',
  classObj: new CatalogItemDetailing('Rev-N-Go Paint Job', '', '', 0, 'car_t_cst_pjb_revNgo.swf')
}

clientData[20111] = {
  name: 'Gasprin Paint Job',
  classObj: new CatalogItemDetailing('Gasprin Paint Job', '', '', 0, 'car_t_cst_pjb_gasprin.swf')
}

clientData[20112] = {
  name: 'Tank Coat Paint Job',
  classObj: new CatalogItemDetailing('Tank Coat Paint Job', '', '', 0, 'car_t_cst_pjb_tankCoat.swf')
}

clientData[20113] = {
  name: 'Re-Volting Paint Job',
  classObj: new CatalogItemDetailing('Re-Volting Paint Job', '', '', 0, 'car_t_cst_pjb_revolting.swf')
}

clientData[20114] = {
  name: 'htB Paint Job',
  classObj: new CatalogItemDetailing('htB Paint Job', '', '', 0, 'car_t_cst_pjb_HTB.swf')
}

clientData[20115] = {
  name: 'Vitoline Paint Job',
  classObj: new CatalogItemDetailing('Vitoline Paint Job', '', '', 0, 'car_t_cst_pjb_vitoline.swf')
}

clientData[20116] = {
  name: 'ViewZeen Paint Job',
  classObj: new CatalogItemDetailing('ViewZeen Paint Job', '', '', 0, 'car_t_cst_pjb_viewzeen.swf')
}

clientData[20117] = {
  name: 'Rust-eze Paint Job',
  classObj: new CatalogItemDetailing('Rust-eze Paint Job', '', '', 0, 'car_t_cst_pjb_rusteze.swf')
}

clientData[20118] = {
  name: 'Nitroade Paint Job',
  classObj: new CatalogItemDetailing('Nitroade Paint Job', '', '', 0, 'car_t_cst_pjb_nitroade.swf')
}

clientData[20119] = {
  name: 'Octane Gain Paint Job',
  classObj: new CatalogItemDetailing('Octane Gain Paint Job', '', '', 0, 'car_t_cst_pjb_octaneGain.swf')
}

clientData[20120] = {
  name: 'N2O Cola Paint Job',
  classObj: new CatalogItemDetailing('N2O Cola Paint Job', '', '', 0, 'car_t_cst_pjb_n2o.swf')
}

clientData[20121] = {
  name: 'Dinoco Paint Job',
  classObj: new CatalogItemDetailing('Dinoco Paint Job', '', '', 0, 'car_t_cst_pjb_dinoco.swf')
}

clientData[20122] = {
  name: 'Mood Springs Paint Job',
  classObj: new CatalogItemDetailing('Mood Springs Paint Job', '', '', 0, 'car_t_cst_pjb_moodSprings.swf')
}

module.exports = { clientData, shopData, assetData, idToAsset, assetMappings }
