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
const CatalogItemMapEffect = global.CatalogItemMapEffect
const CatalogItemEmote = global.CatalogItemEmote

const ArrayCollection = global.ArrayCollection

const clientData = {}

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

// Fillmore's Fields
clientData[15001].classObj.dropPoints['15002'] = 'dp_ff_225'

// Willy's Butte
clientData[15001].classObj.dropPoints['15006'] = 'dp_wb_225'

// Redhood Valley
clientData[15001].classObj.dropPoints['15003'] = 'dp_rhv_180'

// Race tracks
clientData[15001].classObj.dropPoints.sp = 'dp_sp_225'
clientData[15001].classObj.dropPoints.mp = 'dp_mp_225'

// Lightning McQueen's Pro-Race Shop
clientData[15001].classObj.dropPoints['22002'] = 'dp_lightning_225'

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

clientData[15006] = {
  name: "Willy's Butte",
  classObj: new CatalogItemWorldZone("Willy's Butte", 100, 'car_f_gui_ttl_willysButte_en_US.swf', 'car_w_env_wil_WillysButte_design', 'car_g_map_env_willysButte.swf', 'scripts/isoworld/willys_butte.lua', 'Music', 'zoneWilliesButte', 'dp_default_315')
}

// Fillmore's Fields
clientData[15006].classObj.dropPoints['15002'] = 'dp_ff_200'

// Race tracks
clientData[15006].classObj.dropPoints.sp = 'dp_sp_180'
clientData[15006].classObj.dropPoints.mp = 'dp_mp_225'

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
  classObj: new CatalogItemNPC('car_k_chr_frn_mcqueenLow.dpak', 'Lightning McQueen', 'car_r_chr_frn_mcqueen.smod', '', 105)
}

clientData[42001] = {
  name: 'spRace_ccs',
  classObj: new CatalogItemRaceTrack(false, 'sp_ccs', 'car_f_gui_ttl_carburetorCounty_en_US.swf', 'sp_ccs', 'car_w_trk_rsp_CarburetorCountySpeedway', 'car_g_map_trk_carburetorCounty.swf', 'Music', 'CarburetorCountySpeedway', 'car_w_trk_rsp_ccSpeedway_SS_phys.xml', 15001, 'car_g_lgo_trk_carburetorCountySpeedway_en_US.swf', 'car_g_rac_scn_CarbCountySpeedway.jpg')
}

clientData[42002] = {
  name: 'spRace_rh',
  classObj: new CatalogItemRaceTrack(false, 'sp_ttf', 'car_f_gui_ttl_twistinTailfinTrk_en_US.swf', 'sp_ttf', 'car_w_trk_tfn_TwistinTailfinTrails', 'car_g_map_trk_twistinTailfin.swf', 'Music', 'TwistinTailfinTrack', 'car_w_trk_tfn_twistinTailfin_SS_V1_phys.xml', 15003, 'car_g_lgo_trk_twistinTailfinTrk_en_US.swf', 'car_g_rac_scn_TwistinTailfinTrack.jpg')
}

clientData[31016] = {
  name: 'Racing NPC (Snot Rod)',
  classObj: new CatalogItemNPC('car_k_chr_frn_snotrodLow.dpak', 'Snot Rod', 'car_r_chr_frn_snotrod.smod', 'car_g_ico_npc_snotRod.swf')
}

clientData[31017] = {
  name: 'Racing NPC 2 (DJ)',
  classObj: new CatalogItemNPC('car_k_chr_frn_djLow.dpak', 'DJ', 'car_r_chr_frn_dj.smod', 'car_g_ico_npc_dj.swf')
}

clientData[31018] = {
  name: 'Racing NPC 3 (Boost)',
  classObj: new CatalogItemNPC('car_k_chr_frn_boostLow.dpak', 'Boost', 'car_r_chr_frn_boost.smod', 'car_g_ico_npc_boost.swf')
}

clientData[31019] = {
  name: 'Racing NPC 4 (Wingo)',
  classObj: new CatalogItemNPC('car_k_chr_frn_wingoLow.dpak', 'Wingo', 'car_r_chr_frn_wingo.smod', 'car_g_ico_npc_wingo.swf')
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

// TODO: Figure out proper animation for these ids?
clientData[60010] = clientData[31011]
clientData[60020] = clientData[31011]

clientData[22004] = {
  name: "Ramone's House of Body Art",
  classObj: null
}

// Values found in .#ClientScripts.swf.1.6.2.9 (com.disney.cars.scripts.store.ramoneStore)
clientData[22004].classObj = new CatalogItemStore(clientData[22004].name, 'voStoreRamoneEnter', 'car_f_gui_str_ramoneStore.swf', '33274,60022,60021,60026,60010,33274,33274,33274,33274,33274', 'car_f_gui_str_bodyShaping.swf', 'voStoreRamoneExit')

// TODO: Figure out proper animation for this id?
clientData[60026] = clientData[31011]

// Ramone
clientData[25010] = {
  name: 'Free Body Work',
  classObj: new CatalogItemQuest()
}

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

clientData[31024] = {
  name: 'New Player Tutorial (Truck)',
  classObj: new CatalogItemNPC('car_a_chr_frn_semi_tut1_sc1.sani', 'Truck', 'car_r_chr_avt_semi.smod', '')
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

module.exports = { clientData, shopData }
