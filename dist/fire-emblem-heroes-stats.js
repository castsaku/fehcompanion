(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.stats = global.stats || {})));
}(this, (function (exports) { 'use strict';

var heroes=[{"name":"Abel: The Panther","shortName":"Abel","title":"The Panther","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Abel The Panther.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Abel The Panther.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Abel The Panther.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Brave Lance","default":4,"rarity":3},{"name":"Brave Lance+","default":5,"rarity":5},{"name":"Holy Vestments","default":4,"rarity":3},{"name":"Aegis","default":"-","rarity":4},{"name":"HP +3","rarity":3},{"name":"HP +4","rarity":4},{"name":"HP +5","rarity":5},{"name":"Swordbreaker 1","rarity":"-"},{"name":"Swordbreaker 2","rarity":3},{"name":"Swordbreaker 3","rarity":4}],"growthPoints":{"hp":6,"atk":8,"spd":7,"def":4,"res":5},"stats":{"1":{"3":{"hp":16,"atk":6,"spd":7,"def":7,"res":5},"4":{"hp":16,"atk":6,"spd":8,"def":8,"res":5},"5":{"hp":17,"atk":7,"spd":8,"def":8,"res":6}},"40":{"3":{"hp":[32,35,38],"atk":[26,29,32],"spd":[25,28,31],"def":[19,22,25],"res":[19,22,25]},"4":{"hp":[33,36,39],"atk":[27,30,33],"spd":[27,30,33],"def":[21,24,27],"res":[20,23,26]},"5":{"hp":[35,39,42],"atk":[30,33,36],"spd":[29,32,35],"def":[22,25,28],"res":[22,25,29]}}}},{"name":"Alfonse: Prince of Askr","shortName":"Alfonse","title":"Prince of Askr","origin":"Fire Emblem Heroes","weaponType":"Red Sword","moveType":"Infantry","rarities":"2","releaseDate":"2017-02-02","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Alfonse Prince of Askr.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Alfonse Prince of Askr.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Alfonse Prince of Askr.png"}},"skills":[{"name":"Iron Sword","default":2,"rarity":"-"},{"name":"Steel Sword","default":"-","rarity":2},{"name":"Silver Sword","default":"-","rarity":3},{"name":"Fólkvangr","default":"-","rarity":5},{"name":"Daylight","default":2,"rarity":"-"},{"name":"Sol","default":"-","rarity":4},{"name":"Death Blow 1","rarity":"-"},{"name":"Death Blow 2","rarity":2},{"name":"Death Blow 3","rarity":4},{"name":"Spur Atk 1","rarity":3},{"name":"Spur Atk 2","rarity":4},{"name":"Spur Atk 3","rarity":5}],"growthPoints":{"hp":7,"atk":8,"spd":5,"def":7,"res":4},"stats":{"1":{"2":{"hp":17,"atk":8,"spd":4,"def":7,"res":3},"3":{"hp":18,"atk":8,"spd":5,"def":7,"res":4},"4":{"hp":18,"atk":9,"spd":5,"def":8,"res":4},"5":{"hp":19,"atk":9,"spd":6,"def":8,"res":5}},"40":{"2":{"hp":[33,36,39],"atk":[26,29,32],"spd":[17,19,22],"def":[23,26,29],"res":[14,17,19]},"3":{"hp":[36,39,42],"atk":[28,31,34],"spd":[19,22,25],"def":[25,28,31],"res":[16,19,22]},"4":{"hp":[37,40,43],"atk":[30,33,36],"spd":[20,23,26],"def":[27,30,33],"res":[17,20,23]},"5":{"hp":[40,43,46],"atk":[32,35,38],"spd":[22,25,29],"def":[29,32,35],"res":[19,22,25]}}}},{"name":"Alfonse: Spring Prince","shortName":"Alfonse","title":"Spring Prince","origin":"Fire Emblem Heroes","weaponType":"Green Axe","moveType":"Cavalry","rarities":"5","releaseDate":"2018-03-22","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Alfonse Spring Prince.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Alfonse Spring Prince.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Alfonse Spring Prince.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Giant Spoon","default":"-","rarity":"-"},{"name":"Giant Spoon+","default":5,"rarity":"-"},{"name":"Daylight","default":5,"rarity":"-"},{"name":"Noontime","default":"-","rarity":5},{"name":"Death Blow 1","rarity":"-"},{"name":"Sturdy Blow 1","rarity":"-"},{"name":"Sturdy Blow 2","rarity":5},{"name":"Def Smoke 1","rarity":"-"},{"name":"Def Smoke 2","rarity":"-"},{"name":"Def Smoke 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":8,"def":7,"res":2},"stats":{"1":{"5":{"hp":19,"atk":9,"spd":7,"def":6,"res":5}},"40":{"5":{"hp":[37,41,44],"atk":[32,35,38],"spd":[30,33,36],"def":[27,30,33],"res":[14,18,21]}}}},{"name":"Alm: Hero of Prophecy","shortName":"Alm","title":"Hero of Prophecy","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2017-04-14","poolDate":"2017-04-26","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Alm Hero of Prophecy.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Alm Hero of Prophecy.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Alm Hero of Prophecy.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Falchion","default":5,"rarity":"-"},{"name":"Dragon Gaze","default":5,"rarity":"-"},{"name":"Draconic Aura","default":"-","rarity":5},{"name":"Attack +1","rarity":"-"},{"name":"Attack +2","rarity":"-"},{"name":"Attack +3","rarity":5},{"name":"Windsweep 1","rarity":"-"},{"name":"Windsweep 2","rarity":"-"},{"name":"Windsweep 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":7,"def":6,"res":4},"stats":{"1":{"5":{"hp":21,"atk":9,"spd":6,"def":6,"res":5}},"40":{"5":{"hp":[42,45,48],"atk":[30,33,36],"spd":[27,30,33],"def":[24,28,31],"res":[19,22,25]}}}},{"name":"Amelia: Rose of the War","shortName":"Amelia","title":"Rose of the War","origin":"Fire Emblem: The Sacred Stones","weaponType":"Green Axe","moveType":"Armored","rarities":"5","releaseDate":"2017-08-15","poolDate":"2017-08-31","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Amelia Rose of the War.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Amelia Rose of the War.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Amelia Rose of the War.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Slaying Axe","default":"-","rarity":"-"},{"name":"Slaying Axe+","default":5,"rarity":"-"},{"name":"Holy Vestments","default":5,"rarity":"-"},{"name":"Sacred Cowl","default":"-","rarity":5},{"name":"Earth Boost 1","rarity":"-"},{"name":"Earth Boost 2","rarity":"-"},{"name":"Earth Boost 3","rarity":5},{"name":"Armor March 1","rarity":"-"},{"name":"Armor March 2","rarity":"-"},{"name":"Armor March 3","rarity":5}],"growthPoints":{"hp":9,"atk":9,"spd":8,"def":8,"res":5},"stats":{"1":{"5":{"hp":19,"atk":6,"spd":8,"def":9,"res":4}},"40":{"5":{"hp":[44,47,50],"atk":[31,34,37],"spd":[31,34,37],"def":[32,35,38],"res":[20,23,27]}}}},{"name":"Anna: Commander","shortName":"Anna","title":"Commander","origin":"Fire Emblem Heroes","weaponType":"Green Axe","moveType":"Infantry","rarities":"2","releaseDate":"2017-02-02","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Anna Commander.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Anna Commander.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Anna Commander.png"}},"skills":[{"name":"Iron Axe","default":2,"rarity":"-"},{"name":"Steel Axe","default":"-","rarity":2},{"name":"Silver Axe","default":"-","rarity":3},{"name":"Nóatún","default":"-","rarity":5},{"name":"Night Sky","default":2,"rarity":"-"},{"name":"Astra","default":"-","rarity":4},{"name":"Vantage 1","rarity":3},{"name":"Vantage 2","rarity":4},{"name":"Vantage 3","rarity":5},{"name":"Spur Res 1","rarity":"-"},{"name":"Spur Res 2","rarity":2},{"name":"Spur Res 3","rarity":4}],"growthPoints":{"hp":6,"atk":6,"spd":9,"def":4,"res":6},"stats":{"1":{"2":{"hp":17,"atk":6,"spd":9,"def":3,"res":4},"3":{"hp":18,"atk":6,"spd":9,"def":4,"res":5},"4":{"hp":18,"atk":7,"spd":10,"def":4,"res":5},"5":{"hp":19,"atk":7,"spd":10,"def":5,"res":6}},"40":{"2":{"hp":[31,34,37],"atk":[20,23,26],"spd":[29,32,35],"def":[14,17,19],"res":[18,21,24]},"3":{"hp":[34,37,40],"atk":[22,25,28],"spd":[31,34,37],"def":[16,19,22],"res":[21,24,27]},"4":{"hp":[35,38,41],"atk":[24,27,30],"spd":[33,36,39],"def":[17,20,23],"res":[22,25,28]},"5":{"hp":[37,41,44],"atk":[25,29,32],"spd":[35,38,41],"def":[19,22,25],"res":[24,28,31]}}}},{"name":"Arden: Strong and Tough","shortName":"Arden","title":"Strong and Tough","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Red Sword","moveType":"Armored","rarities":"4-5","releaseDate":"2017-10-23","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Arden Strong and Tough.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Arden Strong and Tough.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Arden Strong and Tough.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Brave Sword","default":4,"rarity":"-"},{"name":"Brave Sword+","default":5,"rarity":5},{"name":"Buckler","default":4,"rarity":"-"},{"name":"Pavise","default":"-","rarity":4},{"name":"Follow-Up Ring","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Drive Def 1","rarity":"-"},{"name":"Drive Def 2","rarity":4}],"growthPoints":{"hp":12,"atk":8,"spd":2,"def":9,"res":2},"stats":{"1":{"4":{"hp":24,"atk":10,"spd":2,"def":13,"res":2},"5":{"hp":25,"atk":10,"spd":3,"def":13,"res":3}},"40":{"4":{"hp":[54,57,60],"atk":[31,34,37],"spd":[11,14,17],"def":[36,39,42],"res":[11,14,17]},"5":{"hp":[57,60,63],"atk":[33,36,39],"spd":[12,16,19],"def":[38,41,44],"res":[12,16,19]}}}},{"name":"Ares: Black Knight","shortName":"Ares","title":"Black Knight","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Red Sword","moveType":"Cavalry","rarities":"4-5","releaseDate":"2018-05-10","poolDate":"2018-05-21","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ares Black Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ares Black Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ares Black Knight.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Slaying Edge","default":4,"rarity":"-"},{"name":"Dark Mystletainn","default":5,"rarity":5},{"name":"Dragon Gaze","default":4,"rarity":"-"},{"name":"Draconic Aura","default":"-","rarity":4},{"name":"Brazen Atk/Def 1","rarity":"-"},{"name":"Brazen Atk/Def 2","rarity":"-"},{"name":"Brazen Atk/Def 3","rarity":4},{"name":"Seal Def 1","rarity":"-"},{"name":"Seal Def/Res 1","rarity":4},{"name":"Seal Def/Res 2","rarity":5}],"growthPoints":{"hp":6,"atk":9,"spd":6,"def":8,"res":2},"stats":{"1":{"4":{"hp":17,"atk":8,"spd":8,"def":6,"res":4},"5":{"hp":18,"atk":8,"spd":8,"def":7,"res":5}},"40":{"4":{"hp":[34,37,40],"atk":[31,34,37],"spd":[25,28,31],"def":[27,30,33],"res":[13,16,19]},"5":{"hp":[36,40,43],"atk":[33,36,39],"spd":[26,30,33],"def":[30,33,36],"res":[14,18,21]}}}},{"name":"Arthur: Hapless Hero","shortName":"Arthur","title":"Hapless Hero","origin":"Fire Emblem Fates","weaponType":"Green Axe","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Arthur Hapless Hero.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Arthur Hapless Hero.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Arthur Hapless Hero.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Emerald Axe","default":4,"rarity":3},{"name":"Emerald Axe+","default":5,"rarity":5},{"name":"Swap","default":4,"rarity":3},{"name":"HP +3","rarity":"-"},{"name":"HP +4","rarity":3},{"name":"HP +5","rarity":4},{"name":"Lancebreaker 1","rarity":3},{"name":"Lancebreaker 2","rarity":4},{"name":"Lancebreaker 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":6,"def":6,"res":5},"stats":{"1":{"3":{"hp":18,"atk":7,"spd":6,"def":7,"res":4},"4":{"hp":18,"atk":8,"spd":6,"def":8,"res":4},"5":{"hp":19,"atk":8,"spd":7,"def":8,"res":5}},"40":{"3":{"hp":[36,39,42],"atk":[25,28,31],"spd":[22,25,28],"def":[23,26,29],"res":[18,21,24]},"4":{"hp":[37,40,43],"atk":[27,30,33],"spd":[23,26,29],"def":[25,28,31],"res":[19,22,25]},"5":{"hp":[40,43,46],"atk":[29,32,35],"spd":[25,29,32],"def":[26,30,33],"res":[21,24,28]}}}},{"name":"Arvis: Emperor of Flame","shortName":"Arvis","title":"Emperor of Flame","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Red Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-10-18","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Arvis Emperor of Flame.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Arvis Emperor of Flame.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Arvis Emperor of Flame.png"}},"skills":[{"name":"Fire","default":"-","rarity":"-"},{"name":"Elfire","default":3,"rarity":"-"},{"name":"Bolganone","default":4,"rarity":3},{"name":"Valflame","default":"-","rarity":5},{"name":"Rising Flame","default":4,"rarity":3},{"name":"Growing Flame","default":"-","rarity":4},{"name":"Recover Ring","rarity":5},{"name":"Def Ploy 1","rarity":"-"},{"name":"Def Ploy 2","rarity":3},{"name":"Def Ploy 3","rarity":4}],"growthPoints":{"hp":3,"atk":8,"spd":7,"def":2,"res":8},"stats":{"1":{"3":{"hp":17,"atk":7,"spd":6,"def":3,"res":6},"4":{"hp":17,"atk":8,"spd":7,"def":3,"res":6},"5":{"hp":18,"atk":8,"spd":7,"def":4,"res":7}},"40":{"3":{"hp":[27,30,33],"atk":[27,30,33],"spd":[24,27,30],"def":[11,14,17],"res":[26,29,32]},"4":{"hp":[28,31,34],"atk":[29,32,35],"spd":[26,29,32],"def":[12,15,18],"res":[27,30,33]},"5":{"hp":[30,33,36],"atk":[31,34,37],"spd":[28,31,34],"def":[13,17,20],"res":[30,33,36]}}}},{"name":"Athena: Borderland Sword","shortName":"Athena","title":"Borderland Sword","origin":"Fire Emblem: New Mystery of the Emblem","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-06-14","poolDate":"2017-06-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Athena Borderland Sword.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Athena Borderland Sword.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Athena Borderland Sword.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Wo Dao","default":4,"rarity":3},{"name":"Wo Dao+","default":5,"rarity":5},{"name":"New Moon","default":4,"rarity":3},{"name":"Moonbow","default":"-","rarity":4},{"name":"Armored Blow 1","rarity":3},{"name":"Sturdy Blow 1","rarity":4},{"name":"Sturdy Blow 2","rarity":5},{"name":"Sword Exp. 1","rarity":"-"},{"name":"Sword Exp. 2","rarity":3},{"name":"Sword Exp. 3","rarity":4}],"growthPoints":{"hp":5,"atk":7,"spd":9,"def":5,"res":5},"stats":{"1":{"3":{"hp":16,"atk":6,"spd":9,"def":7,"res":4},"4":{"hp":16,"atk":6,"spd":10,"def":8,"res":4},"5":{"hp":17,"atk":7,"spd":10,"def":8,"res":5}},"40":{"3":{"hp":[30,33,36],"atk":[24,27,30],"spd":[31,34,37],"def":[21,24,27],"res":[18,21,24]},"4":{"hp":[31,34,37],"atk":[25,28,31],"spd":[33,36,39],"def":[23,26,29],"res":[19,22,25]},"5":{"hp":[33,36,40],"atk":[28,31,34],"spd":[35,38,41],"def":[24,27,31],"res":[21,24,28]}}}},{"name":"Ayra: Astra's Wielder","shortName":"Ayra","title":"Astra's Wielder","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2017-10-19","poolDate":"2017-10-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ayra Astras Wielder.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ayra Astras Wielder.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ayra Astras Wielder.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Ayra's Blade","default":5,"rarity":"-"},{"name":"Night Sky","default":5,"rarity":"-"},{"name":"Astra","default":"-","rarity":"-"},{"name":"Regnal Astra","default":"-","rarity":5},{"name":"Darting Blow 1","rarity":"-"},{"name":"Swift Sparrow 1","rarity":"-"},{"name":"Swift Sparrow 2","rarity":5},{"name":"Desperation 1","rarity":"-"},{"name":"Desperation 2","rarity":"-"},{"name":"Desperation 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":8,"def":7,"res":4},"stats":{"1":{"5":{"hp":19,"atk":7,"spd":11,"def":7,"res":4}},"40":{"5":{"hp":[37,41,44],"atk":[30,33,36],"spd":[34,37,40],"def":[28,31,34],"res":[18,21,24]}}}},{"name":"Azama: Carefree Monk","shortName":"Azama","title":"Carefree Monk","origin":"Fire Emblem Fates","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Azama Carefree Monk.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Azama Carefree Monk.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Azama Carefree Monk.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Pain","default":"-","rarity":3},{"name":"Pain+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Reconcile","default":3,"rarity":"-"},{"name":"Martyr","default":"-","rarity":4},{"name":"Imbue","default":4,"rarity":"-"},{"name":"Solid-Earth Balm","default":"-","rarity":3},{"name":"Threaten Atk 1","rarity":3},{"name":"Threaten Atk 2","rarity":4},{"name":"Threaten Atk 3","rarity":5}],"growthPoints":{"hp":7,"atk":4,"spd":5,"def":7,"res":5},"stats":{"1":{"3":{"hp":18,"atk":3,"spd":6,"def":7,"res":5},"4":{"hp":18,"atk":3,"spd":7,"def":8,"res":5},"5":{"hp":19,"atk":4,"spd":7,"def":8,"res":6}},"40":{"3":{"hp":[36,39,42],"atk":[15,18,21],"spd":[20,23,26],"def":[25,28,31],"res":[19,22,25]},"4":{"hp":[37,40,43],"atk":[16,19,22],"spd":[22,25,28],"def":[27,30,33],"res":[20,23,26]},"5":{"hp":[40,43,46],"atk":[18,21,24],"spd":[23,26,30],"def":[29,32,35],"res":[22,25,29]}}}},{"name":"Azura: Celebratory Spirit","shortName":"Azura","title":"Celebratory Spirit","origin":"Fire Emblem Fates","weaponType":"Green Axe","moveType":"Flying","rarities":"5","releaseDate":"2017-12-31","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Azura Celebratory Spirit.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Azura Celebratory Spirit.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Azura Celebratory Spirit.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Hagoita","default":"-","rarity":"-"},{"name":"Hagoita+","default":5,"rarity":"-"},{"name":"Sing","default":5,"rarity":"-"},{"name":"Earth Dance 1","rarity":"-"},{"name":"Earth Dance 2","rarity":"-"},{"name":"Earth Dance 3","rarity":5},{"name":"Hone Spd 1","rarity":"-"},{"name":"Hone Spd 2","rarity":"-"},{"name":"Hone Fliers","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":4,"res":6},"stats":{"1":{"5":{"hp":15,"atk":6,"spd":9,"def":5,"res":4}},"40":{"5":{"hp":[33,37,40],"atk":[27,30,33],"spd":[32,35,38],"def":[19,22,25],"res":[22,26,29]}}}},{"name":"Azura: Lady of Ballads","shortName":"Azura","title":"Lady of Ballads","origin":"Fire Emblem Fates","weaponType":"Green Axe","moveType":"Infantry","rarities":"5","releaseDate":"2017-09-29","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Azura Lady of Ballads.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Azura Lady of Ballads.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Azura Lady of Ballads.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Silver Axe","default":"-","rarity":"-"},{"name":"Urðr","default":5,"rarity":"-"},{"name":"Sing","default":5,"rarity":"-"},{"name":"Triangle Adept 1","rarity":"-"},{"name":"Triangle Adept 2","rarity":"-"},{"name":"Triangle Adept 3","rarity":5},{"name":"Spur Res 1","rarity":"-"},{"name":"Drive Res 1","rarity":"-"},{"name":"Drive Res 2","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":4,"res":6},"stats":{"1":{"5":{"hp":16,"atk":6,"spd":8,"def":3,"res":6}},"40":{"5":{"hp":[32,35,39],"atk":[29,32,35],"spd":[31,34,37],"def":[17,20,23],"res":[24,28,31]}}}},{"name":"Azura: Lady of the Lake","shortName":"Azura","title":"Lady of the Lake","origin":"Fire Emblem Fates","weaponType":"Blue Lance","moveType":"Infantry","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Azura Lady of the Lake.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Azura Lady of the Lake.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Azura Lady of the Lake.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Sapphire Lance","default":"-","rarity":"-"},{"name":"Sapphire Lance+","default":5,"rarity":"-"},{"name":"Sing","default":5,"rarity":"-"},{"name":"Speed +1","rarity":"-"},{"name":"Speed +2","rarity":"-"},{"name":"Speed +3","rarity":5},{"name":"Fortify Res 1","rarity":"-"},{"name":"Fortify Res 2","rarity":"-"},{"name":"Fortify Res 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":4,"res":6},"stats":{"1":{"5":{"hp":17,"atk":5,"spd":7,"def":4,"res":6}},"40":{"5":{"hp":[33,36,40],"atk":[28,31,34],"spd":[30,33,36],"def":[18,21,24],"res":[24,28,31]}}}},{"name":"Barst: The Hatchet","shortName":"Barst","title":"The Hatchet","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Green Axe","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Barst The Hatchet.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Barst The Hatchet.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Barst The Hatchet.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Brave Axe","default":4,"rarity":3},{"name":"Brave Axe+","default":5,"rarity":5},{"name":"Reposition","default":4,"rarity":3},{"name":"Knock Back","rarity":3},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk 2","rarity":3},{"name":"Spur Atk 3","rarity":4}],"growthPoints":{"hp":8,"atk":7,"spd":7,"def":7,"res":2},"stats":{"1":{"3":{"hp":19,"atk":8,"spd":7,"def":5,"res":3},"4":{"hp":19,"atk":9,"spd":8,"def":5,"res":3},"5":{"hp":20,"atk":9,"spd":8,"def":6,"res":4}},"40":{"3":{"hp":[39,42,45],"atk":[26,29,32],"spd":[25,28,31],"def":[23,26,29],"res":[11,14,17]},"4":{"hp":[40,43,46],"atk":[28,31,34],"spd":[27,30,33],"def":[24,27,30],"res":[12,15,18]},"5":{"hp":[43,46,49],"atk":[30,33,36],"spd":[29,32,35],"def":[27,30,33],"res":[13,17,20]}}}},{"name":"Bartre: Fearless Warrior","shortName":"Bartre","title":"Fearless Warrior","origin":"Fire Emblem: The Binding Blade","weaponType":"Green Axe","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Bartre Fearless Warrior.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Bartre Fearless Warrior.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Bartre Fearless Warrior.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Hammer","default":4,"rarity":3},{"name":"Hammer+","default":5,"rarity":5},{"name":"Smite","default":4,"rarity":3},{"name":"Fury 1","rarity":3},{"name":"Fury 2","rarity":4},{"name":"Fury 3","rarity":5},{"name":"Brash Assault 1","rarity":"-"},{"name":"Brash Assault 2","rarity":3},{"name":"Brash Assault 3","rarity":4}],"growthPoints":{"hp":9,"atk":8,"spd":5,"def":8,"res":1},"stats":{"1":{"3":{"hp":20,"atk":9,"spd":5,"def":6,"res":2},"4":{"hp":20,"atk":10,"spd":5,"def":7,"res":2},"5":{"hp":21,"atk":10,"spd":6,"def":7,"res":3}},"40":{"3":{"hp":[42,45,48],"atk":[29,32,35],"spd":[19,22,25],"def":[26,29,32],"res":[8,11,14]},"4":{"hp":[43,46,49],"atk":[31,34,37],"spd":[20,23,26],"def":[28,31,34],"res":[9,12,15]},"5":{"hp":[46,49,52],"atk":[33,36,39],"spd":[22,25,29],"def":[30,33,36],"res":[10,13,17]}}}},{"name":"Berkut: Prideful Prince","shortName":"Berkut","title":"Prideful Prince","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-07-18","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Berkut Prideful Prince.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Berkut Prideful Prince.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Berkut Prideful Prince.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Berkut's Lance","default":4,"rarity":3},{"name":"Berkut's Lance+","default":"-","rarity":5},{"name":"Rising Flame","default":4,"rarity":3},{"name":"Blazing Flame","default":"-","rarity":4},{"name":"Water Boost 1","rarity":3},{"name":"Water Boost 2","rarity":4},{"name":"Water Boost 3","rarity":5},{"name":"Spur Res 1","rarity":"-"},{"name":"Spur Res 2","rarity":3},{"name":"Ward Cavalry","rarity":4}],"growthPoints":{"hp":7,"atk":8,"spd":4,"def":7,"res":4},"stats":{"1":{"3":{"hp":18,"atk":7,"spd":4,"def":6,"res":6},"4":{"hp":18,"atk":8,"spd":4,"def":7,"res":6},"5":{"hp":19,"atk":8,"spd":5,"def":7,"res":7}},"40":{"3":{"hp":[36,39,42],"atk":[27,30,33],"spd":[16,19,22],"def":[24,27,30],"res":[18,21,24]},"4":{"hp":[37,40,43],"atk":[29,32,35],"spd":[17,20,23],"def":[26,29,32],"res":[19,22,25]},"5":{"hp":[40,43,46],"atk":[31,34,37],"spd":[19,22,25],"def":[28,31,34],"res":[21,24,27]}}}},{"name":"Beruka: Quiet Assassin","shortName":"Beruka","title":"Quiet Assassin","origin":"Fire Emblem Fates","weaponType":"Green Axe","moveType":"Flying","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Beruka Quiet Assassin.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Beruka Quiet Assassin.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Beruka Quiet Assassin.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Killer Axe","default":4,"rarity":3},{"name":"Killer Axe+","default":5,"rarity":5},{"name":"Night Sky","default":4,"rarity":3},{"name":"Glimmer","default":"-","rarity":4},{"name":"Defiant Def 1","rarity":"-"},{"name":"Defiant Def 2","rarity":3},{"name":"Defiant Def 3","rarity":4},{"name":"Lunge","rarity":3}],"growthPoints":{"hp":8,"atk":6,"spd":4,"def":9,"res":4},"stats":{"1":{"3":{"hp":19,"atk":6,"spd":5,"def":8,"res":4},"4":{"hp":19,"atk":7,"spd":5,"def":9,"res":4},"5":{"hp":20,"atk":7,"spd":6,"def":9,"res":5}},"40":{"3":{"hp":[39,42,45],"atk":[22,25,28],"spd":[17,20,23],"def":[30,33,36],"res":[16,19,22]},"4":{"hp":[40,43,46],"atk":[24,27,30],"spd":[18,21,24],"def":[32,35,38],"res":[17,20,23]},"5":{"hp":[43,46,49],"atk":[25,29,32],"spd":[20,23,26],"def":[34,37,40],"res":[19,22,25]}}}},{"name":"Black Knight: Sinister General","shortName":"Black Knight","title":"Sinister General","origin":"Fire Emblem: Path of Radiance","weaponType":"Red Sword","moveType":"Armored","rarities":"4-5","releaseDate":"2017-09-23","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Black Knight Sinister General.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Black Knight Sinister General.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Black Knight Sinister General.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":4,"rarity":"-"},{"name":"Alondite","default":5,"rarity":5},{"name":"New Moon","default":4,"rarity":"-"},{"name":"Luna","default":"-","rarity":4},{"name":"Black Luna","default":"-","rarity":5},{"name":"Steady Stance 1","rarity":"-"},{"name":"Steady Stance 2","rarity":4},{"name":"Steady Stance 3","rarity":5},{"name":"Wings of Mercy 1","rarity":"-"},{"name":"Wings of Mercy 2","rarity":"-"},{"name":"Wings of Mercy 3","rarity":4}],"growthPoints":{"hp":8,"atk":7,"spd":8,"def":8,"res":2},"stats":{"1":{"4":{"hp":21,"atk":10,"spd":7,"def":9,"res":4},"5":{"hp":22,"atk":10,"spd":8,"def":9,"res":5}},"40":{"4":{"hp":[42,45,48],"atk":[29,32,35],"spd":[28,31,34],"def":[30,33,36],"res":[13,16,19]},"5":{"hp":[45,48,51],"atk":[31,34,37],"spd":[31,34,37],"def":[32,35,38],"res":[14,18,21]}}}},{"name":"Boey: Skillful Survivor","shortName":"Boey","title":"Skillful Survivor","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Green Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-05-15","poolDate":"2017-05-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Boey Skillful Survivor.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Boey Skillful Survivor.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Boey Skillful Survivor.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":3,"rarity":"-"},{"name":"Gronnowl","default":4,"rarity":3},{"name":"Gronnowl+","default":5,"rarity":5},{"name":"Glowing Ember","default":4,"rarity":3},{"name":"Ignis","default":"-","rarity":4},{"name":"Earth Boost 1","rarity":"-"},{"name":"Earth Boost 2","rarity":3},{"name":"Earth Boost 3","rarity":4},{"name":"Renewal 1","rarity":3},{"name":"Renewal 2","rarity":4},{"name":"Renewal 3","rarity":5}],"growthPoints":{"hp":7,"atk":6,"spd":6,"def":7,"res":2},"stats":{"1":{"3":{"hp":18,"atk":6,"spd":4,"def":7,"res":4},"4":{"hp":18,"atk":7,"spd":4,"def":8,"res":4},"5":{"hp":19,"atk":7,"spd":5,"def":8,"res":5}},"40":{"3":{"hp":[36,39,42],"atk":[22,25,28],"spd":[20,23,26],"def":[25,28,31],"res":[12,15,18]},"4":{"hp":[37,40,43],"atk":[24,27,30],"spd":[21,24,27],"def":[27,30,33],"res":[13,16,19]},"5":{"hp":[40,43,46],"atk":[25,29,32],"spd":[23,27,30],"def":[29,32,35],"res":[14,18,21]}}}},{"name":"Caeda: Talys's Bride","shortName":"Caeda","title":"Talys's Bride","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Blue Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-05-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Caeda Talyss Bride.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Caeda Talyss Bride.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Caeda Talyss Bride.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Blessed Bouquet","default":"-","rarity":"-"},{"name":"Blessed Bouquet+","default":5,"rarity":"-"},{"name":"Chilling Wind","default":5,"rarity":"-"},{"name":"Iceberg","default":"-","rarity":"-"},{"name":"Resistance +1","rarity":"-"},{"name":"Atk/Res 1","rarity":"-"},{"name":"Atk/Res 2","rarity":"-"},{"name":"Hone Spd 1","rarity":"-"},{"name":"Hone Spd 2","rarity":"-"},{"name":"Hone Spd 3","rarity":"-"}],"growthPoints":{"hp":4,"atk":6,"spd":9,"def":3,"res":6},"stats":{"1":{"5":{"hp":16,"atk":7,"spd":9,"def":4,"res":8}},"40":{"5":{"hp":[30,33,36],"atk":[25,29,32],"spd":[34,37,40],"def":[16,19,22],"res":[26,30,33]}}}},{"name":"Caeda: Talys's Heart","shortName":"Caeda","title":"Talys's Heart","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Red Sword","moveType":"Flying","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Caeda Talyss Heart.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Caeda Talyss Heart.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Caeda Talyss Heart.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Armorslayer","default":4,"rarity":3},{"name":"Armorslayer+","default":5,"rarity":5},{"name":"Wing Sword","default":"-","rarity":5},{"name":"Rally Speed","default":4,"rarity":3},{"name":"Darting Blow 1","rarity":3},{"name":"Darting Blow 2","rarity":4},{"name":"Darting Blow 3","rarity":5},{"name":"Fortify Res 1","rarity":"-"},{"name":"Fortify Res 2","rarity":3},{"name":"Fortify Fliers","rarity":4}],"growthPoints":{"hp":5,"atk":5,"spd":9,"def":5,"res":7},"stats":{"1":{"3":{"hp":16,"atk":5,"spd":8,"def":4,"res":9},"4":{"hp":16,"atk":5,"spd":9,"def":4,"res":10},"5":{"hp":17,"atk":6,"spd":9,"def":5,"res":10}},"40":{"3":{"hp":[30,33,36],"atk":[19,22,25],"spd":[30,33,36],"def":[18,21,24],"res":[27,30,33]},"4":{"hp":[31,34,37],"atk":[20,23,26],"spd":[32,35,38],"def":[19,22,25],"res":[29,32,35]},"5":{"hp":[33,36,40],"atk":[22,25,29],"spd":[34,37,40],"def":[21,24,28],"res":[31,34,37]}}}},{"name":"Cain: The Bull","shortName":"Cain","title":"The Bull","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Red Sword","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Cain The Bull.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Cain The Bull.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Cain The Bull.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Brave Sword","default":4,"rarity":3},{"name":"Brave Sword+","default":5,"rarity":5},{"name":"Buckler","default":4,"rarity":3},{"name":"Escutcheon","default":"-","rarity":4},{"name":"Wings of Mercy 1","rarity":"-"},{"name":"Wings of Mercy 2","rarity":3},{"name":"Wings of Mercy 3","rarity":4},{"name":"Threaten Atk 1","rarity":3},{"name":"Threaten Atk 2","rarity":4},{"name":"Threaten Atk 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":8,"def":5,"res":3},"stats":{"1":{"3":{"hp":17,"atk":7,"spd":5,"def":7,"res":5},"4":{"hp":17,"atk":8,"spd":5,"def":8,"res":5},"5":{"hp":18,"atk":8,"spd":6,"def":8,"res":6}},"40":{"3":{"hp":[35,38,41],"atk":[25,28,31],"spd":[25,28,31],"def":[21,24,27],"res":[15,18,21]},"4":{"hp":[36,39,42],"atk":[27,30,33],"spd":[26,29,32],"def":[23,26,29],"res":[16,19,22]},"5":{"hp":[39,42,45],"atk":[29,32,35],"spd":[29,32,35],"def":[24,27,31],"res":[18,21,24]}}}},{"name":"Camilla: Bewitching Beauty","shortName":"Camilla","title":"Bewitching Beauty","origin":"Fire Emblem Fates","weaponType":"Green Axe","moveType":"Flying","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Camilla Bewitching Beauty.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Camilla Bewitching Beauty.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Camilla Bewitching Beauty.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Brave Axe","default":4,"rarity":3},{"name":"Brave Axe+","default":5,"rarity":5},{"name":"Camilla's Axe","default":"-","rarity":5},{"name":"Dragon Gaze","default":4,"rarity":3},{"name":"Draconic Aura","default":"-","rarity":4},{"name":"Darting Blow 1","rarity":3},{"name":"Darting Blow 2","rarity":4},{"name":"Darting Blow 3","rarity":5},{"name":"Savage Blow 1","rarity":"-"},{"name":"Savage Blow 2","rarity":3},{"name":"Savage Blow 3","rarity":4}],"growthPoints":{"hp":5,"atk":6,"spd":7,"def":6,"res":7},"stats":{"1":{"3":{"hp":17,"atk":7,"spd":7,"def":5,"res":6},"4":{"hp":17,"atk":8,"spd":8,"def":5,"res":6},"5":{"hp":18,"atk":8,"spd":8,"def":6,"res":7}},"40":{"3":{"hp":[31,34,37],"atk":[23,26,29],"spd":[25,28,31],"def":[21,24,27],"res":[24,27,30]},"4":{"hp":[32,35,38],"atk":[25,28,31],"spd":[27,30,33],"def":[22,25,28],"res":[25,28,31]},"5":{"hp":[34,37,41],"atk":[26,30,33],"spd":[29,32,35],"def":[24,28,31],"res":[28,31,34]}}}},{"name":"Camilla: Holiday Traveler","shortName":"Camilla","title":"Holiday Traveler","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Flying","rarities":"5","releaseDate":"2017-12-31","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Camilla Holiday Traveler.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Camilla Holiday Traveler.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Camilla Holiday Traveler.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Kadomatsu","default":"-","rarity":"-"},{"name":"Kadomatsu+","default":5,"rarity":"-"},{"name":"Dragon Gaze","default":5,"rarity":"-"},{"name":"Draconic Aura","default":"-","rarity":5},{"name":"Spd/Def Bond 1","rarity":"-"},{"name":"Spd/Def Bond 2","rarity":"-"},{"name":"Spd/Def Bond 3","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Spur Def 2","rarity":"-"},{"name":"Ward Fliers","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":7,"res":5},"stats":{"1":{"5":{"hp":18,"atk":9,"spd":9,"def":7,"res":4}},"40":{"5":{"hp":[36,40,43],"atk":[30,33,36],"spd":[32,35,38],"def":[28,31,34],"res":[20,23,27]}}}},{"name":"Camilla: Spring Princess","shortName":"Camilla","title":"Spring Princess","origin":"Fire Emblem Fates","weaponType":"Green Tome","moveType":"Flying","rarities":"5","releaseDate":"2017-03-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Camilla Spring Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Camilla Spring Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Camilla Spring Princess.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Green Egg","default":"-","rarity":"-"},{"name":"Green Egg+","default":5,"rarity":"-"},{"name":"Rally Attack","default":5,"rarity":"-"},{"name":"Defiant Spd 1","rarity":"-"},{"name":"Defiant Spd 2","rarity":"-"},{"name":"Defiant Spd 3","rarity":5},{"name":"Live for Bounty","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":5,"def":6,"res":3},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":6,"def":8,"res":4}},"40":{"5":{"hp":[35,39,42],"atk":[32,35,38],"spd":[22,25,29],"def":[26,30,33],"res":[16,19,22]}}}},{"name":"Camus: Sable Knight","shortName":"Camus","title":"Sable Knight","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-06-02","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Camus Sable Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Camus Sable Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Camus Sable Knight.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Silver Lance","default":4,"rarity":3},{"name":"Gradivus","default":"-","rarity":5},{"name":"Rising Thunder","default":4,"rarity":3},{"name":"Growing Thunder","default":"-","rarity":4},{"name":"Grani's Shield","rarity":4},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk 2","rarity":3},{"name":"Goad Cavalry","rarity":4}],"growthPoints":{"hp":7,"atk":7,"spd":7,"def":7,"res":2},"stats":{"1":{"3":{"hp":17,"atk":7,"spd":8,"def":6,"res":3},"4":{"hp":17,"atk":8,"spd":9,"def":6,"res":3},"5":{"hp":18,"atk":8,"spd":9,"def":7,"res":4}},"40":{"3":{"hp":[35,38,41],"atk":[25,28,31],"spd":[26,29,32],"def":[24,27,30],"res":[11,14,17]},"4":{"hp":[36,39,42],"atk":[27,30,33],"spd":[28,31,34],"def":[25,28,31],"res":[12,15,18]},"5":{"hp":[39,42,45],"atk":[29,32,35],"spd":[30,33,36],"def":[28,31,34],"res":[13,17,20]}}}},{"name":"Canas: Wisdom Seeker","shortName":"Canas","title":"Wisdom Seeker","origin":"Fire Emblem: The Blazing Blade","weaponType":"Red Tome","moveType":"Infantry","rarities":"4-5","releaseDate":"2018-06-16","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Canas Wisdom Seeker.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Canas Wisdom Seeker.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Canas Wisdom Seeker.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":"-","rarity":"-"},{"name":"Rauðrowl","default":4,"rarity":"-"},{"name":"Rauðrowl+","default":5,"rarity":5},{"name":"Reciprocal Aid","default":4,"rarity":"-"},{"name":"Resistance +1","rarity":"-"},{"name":"HP/Res 1","rarity":4},{"name":"HP/Res 2","rarity":5},{"name":"Res Tactic 1","rarity":"-"},{"name":"Res Tactic 2","rarity":"-"},{"name":"Res Tactic 3","rarity":4}],"growthPoints":{"hp":5,"atk":6,"spd":7,"def":4,"res":7},"stats":{"1":{"4":{"hp":16,"atk":10,"spd":4,"def":3,"res":9},"5":{"hp":17,"atk":10,"spd":5,"def":4,"res":9}},"40":{"4":{"hp":[31,34,37],"atk":[27,30,33],"spd":[23,26,29],"def":[16,19,22],"res":[28,31,34]},"5":{"hp":[33,36,40],"atk":[28,32,35],"spd":[26,29,32],"def":[18,21,24],"res":[30,33,36]}}}},{"name":"Catria: Middle Whitewing","shortName":"Catria","title":"Middle Whitewing","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Blue Lance","moveType":"Flying","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Catria Middle Whitewing.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Catria Middle Whitewing.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Catria Middle Whitewing.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Killer Lance","default":4,"rarity":3},{"name":"Killer Lance+","default":5,"rarity":5},{"name":"New Moon","default":4,"rarity":3},{"name":"Luna","default":"-","rarity":4},{"name":"Armored Blow 1","rarity":"-"},{"name":"Armored Blow 2","rarity":3},{"name":"Armored Blow 3","rarity":4},{"name":"Seal Atk 1","rarity":3},{"name":"Seal Atk 2","rarity":4},{"name":"Seal Atk 3","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":7,"def":6,"res":5},"stats":{"1":{"3":{"hp":16,"atk":6,"spd":9,"def":6,"res":5},"4":{"hp":16,"atk":7,"spd":10,"def":6,"res":5},"5":{"hp":17,"atk":7,"spd":10,"def":7,"res":6}},"40":{"3":{"hp":[32,35,38],"atk":[24,27,30],"spd":[27,30,33],"def":[22,25,28],"res":[19,22,25]},"4":{"hp":[33,36,39],"atk":[26,29,32],"spd":[29,32,35],"def":[23,26,29],"res":[20,23,26]},"5":{"hp":[35,39,42],"atk":[28,31,34],"spd":[31,34,37],"def":[25,29,32],"res":[22,25,29]}}}},{"name":"Catria: Spring Whitewing","shortName":"Catria","title":"Spring Whitewing","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Blue Tome","moveType":"Cavalry","rarities":"5","releaseDate":"2018-03-22","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Catria Spring Whitewing.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Catria Spring Whitewing.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Catria Spring Whitewing.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Thoron","default":"-","rarity":"-"},{"name":"Huginn's Egg","default":5,"rarity":"-"},{"name":"Draw Back","default":5,"rarity":"-"},{"name":"Chill Res 1","rarity":"-"},{"name":"Chill Res 2","rarity":"-"},{"name":"Chill Res 3","rarity":5},{"name":"Spur Spd 1","rarity":"-"},{"name":"Drive Spd 1","rarity":"-"},{"name":"Drive Spd 2","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":2,"res":4},"stats":{"1":{"5":{"hp":17,"atk":6,"spd":9,"def":5,"res":6}},"40":{"5":{"hp":[33,36,40],"atk":[29,32,35],"spd":[32,35,38],"def":[14,18,21],"res":[20,23,26]}}}},{"name":"Cecilia: Etrurian General","shortName":"Cecilia","title":"Etrurian General","origin":"Fire Emblem: The Binding Blade","weaponType":"Green Tome","moveType":"Cavalry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Cecilia Etrurian General.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Cecilia Etrurian General.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Cecilia Etrurian General.png"}},"skills":[{"name":"Wind","default":1,"rarity":"-"},{"name":"Elwind","default":3,"rarity":2},{"name":"Gronnraven","default":4,"rarity":3},{"name":"Gronnraven+","default":5,"rarity":5},{"name":"Rally Resistance","default":4,"rarity":3},{"name":"Attack +1","rarity":3},{"name":"Attack +2","rarity":4},{"name":"Attack +3","rarity":5},{"name":"Escape Route 1","rarity":1},{"name":"Escape Route 2","rarity":2},{"name":"Escape Route 3","rarity":4}],"growthPoints":{"hp":5,"atk":7,"spd":5,"def":4,"res":6},"stats":{"1":{"1":{"hp":15,"atk":6,"spd":4,"def":3,"res":5},"2":{"hp":15,"atk":7,"spd":4,"def":3,"res":6},"3":{"hp":16,"atk":7,"spd":5,"def":4,"res":6},"4":{"hp":16,"atk":8,"spd":5,"def":4,"res":7},"5":{"hp":17,"atk":8,"spd":6,"def":5,"res":7}},"40":{"1":{"hp":[27,29,32],"atk":[21,24,26],"spd":[16,18,21],"def":[13,16,18],"res":[18,21,24]},"2":{"hp":[28,30,33],"atk":[23,26,29],"spd":[17,19,22],"def":[14,17,19],"res":[20,23,26]},"3":{"hp":[30,33,36],"atk":[25,28,31],"spd":[19,22,25],"def":[16,19,22],"res":[22,25,28]},"4":{"hp":[31,34,37],"atk":[27,30,33],"spd":[20,23,26],"def":[17,20,23],"res":[24,27,30]},"5":{"hp":[33,36,40],"atk":[29,32,35],"spd":[22,25,29],"def":[19,22,25],"res":[25,29,32]}}}},{"name":"Celica: Caring Princess","shortName":"Celica","title":"Caring Princess","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Red Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-05-15","poolDate":"2017-05-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Celica Caring Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Celica Caring Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Celica Caring Princess.png"}},"skills":[{"name":"Fire","default":"-","rarity":"-"},{"name":"Elfire","default":"-","rarity":"-"},{"name":"Bolganone","default":"-","rarity":"-"},{"name":"Ragnarok","default":5,"rarity":"-"},{"name":"Rising Light","default":5,"rarity":"-"},{"name":"Blazing Light","default":"-","rarity":5},{"name":"Distant Def 1","rarity":"-"},{"name":"Distant Def 2","rarity":"-"},{"name":"Distant Def 3","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Spur Def 2","rarity":"-"},{"name":"Spur Def 3","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":4,"res":3},"stats":{"1":{"5":{"hp":17,"atk":8,"spd":7,"def":5,"res":7}},"40":{"5":{"hp":[35,39,42],"atk":[29,32,35],"spd":[30,33,36],"def":[19,22,25],"res":[19,22,25]}}}},{"name":"Celica: Imprisoned Soul","shortName":"Celica","title":"Imprisoned Soul","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2018-02-22","poolDate":"2018-03-09","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Celica Imprisoned Soul.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Celica Imprisoned Soul.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Celica Imprisoned Soul.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Beloved Zofia","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Luna","default":"-","rarity":5},{"name":"Chill Spd 1","rarity":"-"},{"name":"Chill Spd 2","rarity":"-"},{"name":"Chill Spd 3","rarity":5},{"name":"Hone Atk 1","rarity":"-"},{"name":"Hone Atk 2","rarity":"-"},{"name":"Hone Atk 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":8,"def":6,"res":5},"stats":{"1":{"5":{"hp":18,"atk":9,"spd":9,"def":5,"res":7}},"40":{"5":{"hp":[36,40,43],"atk":[32,35,38],"spd":[32,35,38],"def":[23,27,30],"res":[23,26,30]}}}},{"name":"Charlotte: Money Maiden","shortName":"Charlotte","title":"Money Maiden","origin":"Fire Emblem Fates","weaponType":"Blue Lance","moveType":"Infantry","rarities":"5","releaseDate":"2017-05-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Charlotte Money Maiden.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Charlotte Money Maiden.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Charlotte Money Maiden.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"First Bite","default":"-","rarity":"-"},{"name":"First Bite+","default":5,"rarity":"-"},{"name":"Smite","default":5,"rarity":"-"},{"name":"Wind Boost 1","rarity":"-"},{"name":"Wind Boost 2","rarity":"-"},{"name":"Wind Boost 3","rarity":5},{"name":"Threaten Atk 1","rarity":"-"},{"name":"Threaten Atk 2","rarity":"-"},{"name":"Threaten Atk 3","rarity":5}],"growthPoints":{"hp":8,"atk":8,"spd":7,"def":5,"res":3},"stats":{"1":{"5":{"hp":20,"atk":10,"spd":8,"def":5,"res":4}},"40":{"5":{"hp":[43,46,49],"atk":[33,36,39],"spd":[29,32,35],"def":[21,24,28],"res":[16,19,22]}}}},{"name":"Cherche: Wyvern Friend","shortName":"Cherche","title":"Wyvern Friend","origin":"Fire Emblem Awakening","weaponType":"Green Axe","moveType":"Flying","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Cherche Wyvern Friend.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Cherche Wyvern Friend.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Cherche Wyvern Friend.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Hammer","default":4,"rarity":3},{"name":"Hammer+","default":5,"rarity":5},{"name":"Pivot","default":4,"rarity":3},{"name":"Attack +1","rarity":"-"},{"name":"Attack +2","rarity":3},{"name":"Attack +3","rarity":4},{"name":"Fortify Def 1","rarity":3},{"name":"Fortify Def 2","rarity":4},{"name":"Fortify Def 3","rarity":5}],"growthPoints":{"hp":8,"atk":9,"spd":5,"def":7,"res":2},"stats":{"1":{"3":{"hp":19,"atk":9,"spd":5,"def":7,"res":2},"4":{"hp":19,"atk":10,"spd":5,"def":8,"res":2},"5":{"hp":20,"atk":10,"spd":6,"def":8,"res":3}},"40":{"3":{"hp":[39,42,45],"atk":[31,34,37],"spd":[19,22,25],"def":[25,28,31],"res":[10,13,16]},"4":{"hp":[40,43,46],"atk":[33,36,39],"spd":[20,23,26],"def":[27,30,33],"res":[11,14,17]},"5":{"hp":[43,46,49],"atk":[35,38,41],"spd":[22,25,29],"def":[29,32,35],"res":[12,16,19]}}}},{"name":"Chrom: Exalted Prince","shortName":"Chrom","title":"Exalted Prince","origin":"Fire Emblem Awakening","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Chrom Exalted Prince.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Chrom Exalted Prince.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Chrom Exalted Prince.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Falchion","default":5,"rarity":5},{"name":"Daylight","default":4,"rarity":3},{"name":"Sol","default":"-","rarity":4},{"name":"Aether","default":"-","rarity":5},{"name":"Defiant Def 1","rarity":"-"},{"name":"Defiant Def 2","rarity":3},{"name":"Defiant Def 3","rarity":4},{"name":"Spur Def 1","rarity":3},{"name":"Spur Def 2","rarity":4},{"name":"Spur Def 3","rarity":5}],"growthPoints":{"hp":8,"atk":9,"spd":5,"def":7,"res":2},"stats":{"1":{"3":{"hp":20,"atk":8,"spd":5,"def":6,"res":3},"4":{"hp":20,"atk":9,"spd":5,"def":7,"res":3},"5":{"hp":21,"atk":9,"spd":6,"def":7,"res":4}},"40":{"3":{"hp":[40,43,46],"atk":[30,33,36],"spd":[19,22,25],"def":[24,27,30],"res":[11,14,17]},"4":{"hp":[41,44,47],"atk":[32,35,38],"spd":[20,23,26],"def":[26,29,32],"res":[12,15,18]},"5":{"hp":[44,47,50],"atk":[34,37,40],"spd":[22,25,29],"def":[28,31,34],"res":[13,17,20]}}}},{"name":"Chrom: Gifted Leader","shortName":"Chrom","title":"Gifted Leader","origin":"Fire Emblem Awakening","weaponType":"Green Axe","moveType":"Armored","rarities":"5","releaseDate":"2017-12-18","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Chrom Gifted Leader.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Chrom Gifted Leader.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Chrom Gifted Leader.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Sack o' Gifts","default":"-","rarity":"-"},{"name":"Sack o' Gifts+","default":5,"rarity":"-"},{"name":"Pivot","default":5,"rarity":"-"},{"name":"Brazen Atk/Def 1","rarity":"-"},{"name":"Brazen Atk/Def 2","rarity":"-"},{"name":"Brazen Atk/Def 3","rarity":5},{"name":"Wary Fighter 1","rarity":"-"},{"name":"Wary Fighter 2","rarity":"-"},{"name":"Wary Fighter 3","rarity":5}],"growthPoints":{"hp":8,"atk":9,"spd":3,"def":8,"res":7},"stats":{"1":{"5":{"hp":25,"atk":12,"spd":4,"def":9,"res":5}},"40":{"5":{"hp":[48,51,54],"atk":[37,40,43],"spd":[16,19,22],"def":[32,35,38],"res":[26,29,32]}}}},{"name":"Chrom: Knight Exalt","shortName":"Chrom","title":"Knight Exalt","origin":"Fire Emblem Awakening","weaponType":"Red Sword","moveType":"Cavalry","rarities":"5","releaseDate":"2018-03-09","poolDate":"2018-03-22","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Chrom Knight Exalt.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Chrom Knight Exalt.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Chrom Knight Exalt.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Sealed Falchion","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Luna","default":"-","rarity":5},{"name":"Aether","default":"-","rarity":"-"},{"name":"Fury 1","rarity":"-"},{"name":"Fury 2","rarity":"-"},{"name":"Fury 3","rarity":5},{"name":"Chill Def 1","rarity":"-"},{"name":"Chill Def 2","rarity":"-"},{"name":"Chill Def 3","rarity":5},{"name":"Sword Valor 1","rarity":"-"},{"name":"Sword Valor 2","rarity":"-"},{"name":"Sword Valor 3","rarity":5}],"growthPoints":{"hp":6,"atk":9,"spd":6,"def":8,"res":2},"stats":{"1":{"5":{"hp":19,"atk":9,"spd":6,"def":8,"res":4}},"40":{"5":{"hp":[37,41,44],"atk":[34,37,40],"spd":[24,28,31],"def":[31,34,37],"res":[13,17,20]}}}},{"name":"Chrom: Spring Exalt","shortName":"Chrom","title":"Spring Exalt","origin":"Fire Emblem Awakening","weaponType":"Green Axe","moveType":"Infantry","rarities":"5","releaseDate":"2017-03-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Chrom Spring Exalt.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Chrom Spring Exalt.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Chrom Spring Exalt.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Carrot Axe","default":"-","rarity":"-"},{"name":"Carrot Axe+","default":5,"rarity":"-"},{"name":"Shove","default":5,"rarity":"-"},{"name":"Defense +1","rarity":"-"},{"name":"Atk/Def 1","rarity":"-"},{"name":"Atk/Def 2","rarity":5},{"name":"Axe Exp. 1","rarity":"-"},{"name":"Axe Exp. 2","rarity":"-"},{"name":"Axe Exp. 3","rarity":5}],"growthPoints":{"hp":7,"atk":8,"spd":7,"def":6,"res":3},"stats":{"1":{"5":{"hp":19,"atk":9,"spd":8,"def":6,"res":5}},"40":{"5":{"hp":[40,43,46],"atk":[32,35,38],"spd":[29,32,35],"def":[24,28,31],"res":[17,20,23]}}}},{"name":"Clair: Highborn Flier","shortName":"Clair","title":"Highborn Flier","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Blue Lance","moveType":"Flying","rarities":"3-4","releaseDate":"2017-04-14","poolDate":"2017-04-26","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Clair Highborn Flier.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Clair Highborn Flier.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Clair Highborn Flier.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Silver Lance","default":4,"rarity":3},{"name":"Silver Lance+","default":5,"rarity":5},{"name":"Rhomphaia","default":"-","rarity":5},{"name":"Harsh Command","default":4,"rarity":3},{"name":"Hit and Run","rarity":3},{"name":"Spur Spd 1","rarity":3},{"name":"Spur Spd 2","rarity":4},{"name":"Spur Spd 3","rarity":5}],"growthPoints":{"hp":5,"atk":5,"spd":9,"def":5,"res":7},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":7,"def":4,"res":8},"4":{"hp":17,"atk":6,"spd":8,"def":4,"res":9},"5":{"hp":18,"atk":7,"spd":8,"def":5,"res":9}},"40":{"3":{"hp":[31,34,37],"atk":[20,23,26],"spd":[29,32,35],"def":[18,21,24],"res":[26,29,32]},"4":{"hp":[32,35,38],"atk":[21,24,27],"spd":[31,34,37],"def":[19,22,25],"res":[28,31,34]},"5":{"hp":[34,37,41],"atk":[23,26,30],"spd":[33,36,39],"def":[21,24,28],"res":[30,33,36]}}}},{"name":"Clarine: Refined Noble","shortName":"Clarine","title":"Refined Noble","origin":"Fire Emblem: The Binding Blade","weaponType":"Colorless Staff","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Clarine Refined Noble.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Clarine Refined Noble.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Clarine Refined Noble.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Fear","default":"-","rarity":3},{"name":"Fear+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Reconcile","default":3,"rarity":"-"},{"name":"Martyr","default":5,"rarity":4},{"name":"Imbue","default":4,"rarity":"-"},{"name":"Swift-Winds Balm","default":5,"rarity":3},{"name":"Resistance +1","rarity":3},{"name":"Resistance +2","rarity":4},{"name":"Resistance +3","rarity":5}],"growthPoints":{"hp":5,"atk":5,"spd":7,"def":4,"res":6},"stats":{"1":{"3":{"hp":15,"atk":5,"spd":8,"def":4,"res":6},"4":{"hp":15,"atk":5,"spd":9,"def":4,"res":7},"5":{"hp":16,"atk":6,"spd":9,"def":5,"res":7}},"40":{"3":{"hp":[29,32,35],"atk":[19,22,25],"spd":[26,29,32],"def":[16,19,22],"res":[22,25,28]},"4":{"hp":[30,33,36],"atk":[20,23,26],"spd":[28,31,34],"def":[17,20,23],"res":[24,27,30]},"5":{"hp":[32,35,39],"atk":[22,25,29],"spd":[30,33,36],"def":[19,22,25],"res":[25,29,32]}}}},{"name":"Clarisse: Sniper in the Dark","shortName":"Clarisse","title":"Sniper in the Dark","origin":"Fire Emblem: New Mystery of the Emblem","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-06-28","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Clarisse Sniper in the Dark.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Clarisse Sniper in the Dark.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Clarisse Sniper in the Dark.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":3,"rarity":"-"},{"name":"Clarisse's Bow","default":4,"rarity":3},{"name":"Clarisse's Bow+","default":"-","rarity":5},{"name":"Night Sky","default":4,"rarity":3},{"name":"Glimmer","default":"-","rarity":4},{"name":"Poison Strike 1","rarity":"-"},{"name":"Poison Strike 2","rarity":3},{"name":"Poison Strike 3","rarity":4},{"name":"Threaten Def 1","rarity":3},{"name":"Threaten Def 2","rarity":4},{"name":"Threaten Def 3","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":8,"def":5,"res":3},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":7,"def":5,"res":4},"4":{"hp":17,"atk":7,"spd":8,"def":5,"res":4},"5":{"hp":18,"atk":7,"spd":8,"def":6,"res":5}},"40":{"3":{"hp":[31,34,37],"atk":[24,27,30],"spd":[27,30,33],"def":[19,22,25],"res":[14,17,20]},"4":{"hp":[32,35,38],"atk":[26,29,32],"spd":[29,32,35],"def":[20,23,26],"res":[15,18,21]},"5":{"hp":[34,37,41],"atk":[28,31,34],"spd":[31,34,37],"def":[22,25,29],"res":[17,20,23]}}}},{"name":"Clive: Idealistic Knight","shortName":"Clive","title":"Idealistic Knight","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"4-5","releaseDate":"2017-08-11","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Clive Idealistic Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Clive Idealistic Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Clive Idealistic Knight.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Silver Lance","default":4,"rarity":"-"},{"name":"Silver Lance+","default":5,"rarity":5},{"name":"Buckler","default":4,"rarity":"-"},{"name":"Escutcheon","default":"-","rarity":4},{"name":"Defense +1","rarity":"-"},{"name":"Defense +2","rarity":"-"},{"name":"Defense +3","rarity":4},{"name":"Hit and Run","rarity":4}],"growthPoints":{"hp":8,"atk":7,"spd":5,"def":7,"res":3},"stats":{"1":{"4":{"hp":18,"atk":9,"spd":5,"def":8,"res":3},"5":{"hp":19,"atk":9,"spd":6,"def":8,"res":4}},"40":{"4":{"hp":[39,42,45],"atk":[28,31,34],"spd":[20,23,26],"def":[27,30,33],"res":[14,17,20]},"5":{"hp":[42,45,48],"atk":[30,33,36],"spd":[22,25,29],"def":[29,32,35],"res":[16,19,22]}}}},{"name":"Cordelia: Knight Paradise","shortName":"Cordelia","title":"Knight Paradise","origin":"Fire Emblem Awakening","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"5","releaseDate":"2018-06-21","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Cordelia Knight Paradise.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Cordelia Knight Paradise.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Cordelia Knight Paradise.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Shell Lance","default":"-","rarity":"-"},{"name":"Shell Lance+","default":"-","rarity":5},{"name":"Harsh Command","default":"-","rarity":"-"},{"name":"-","rarity":"-"},{"name":"Sturdy Blow 1","rarity":"-"},{"name":"Sturdy Blow 2","rarity":"-"},{"name":"Dull Close 1","rarity":"-"},{"name":"Dull Close 2","rarity":"-"},{"name":"Dull Close 3","rarity":"-"}],"growthPoints":{"hp":7,"atk":7,"spd":9,"def":6,"res":2},"stats":{"1":{"5":{"hp":17,"atk":8,"spd":10,"def":6,"res":5}},"40":{"5":{"hp":[38,41,44],"atk":[29,32,35],"spd":[35,38,41],"def":[24,28,31],"res":[14,18,21]}}}},{"name":"Cordelia: Knight Paragon","shortName":"Cordelia","title":"Knight Paragon","origin":"Fire Emblem Awakening","weaponType":"Blue Lance","moveType":"Flying","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Cordelia Knight Paragon.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Cordelia Knight Paragon.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Cordelia Knight Paragon.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Brave Lance","default":4,"rarity":3},{"name":"Brave Lance+","default":5,"rarity":5},{"name":"Night Sky","default":4,"rarity":3},{"name":"Astra","default":"-","rarity":4},{"name":"Galeforce","default":"-","rarity":5},{"name":"Triangle Adept 1","rarity":3},{"name":"Triangle Adept 2","rarity":4},{"name":"Triangle Adept 3","rarity":5},{"name":"Pass 1","rarity":"-"},{"name":"Pass 2","rarity":3},{"name":"Pass 3","rarity":4}],"growthPoints":{"hp":6,"atk":8,"spd":8,"def":4,"res":5},"stats":{"1":{"3":{"hp":17,"atk":8,"spd":8,"def":4,"res":5},"4":{"hp":17,"atk":9,"spd":9,"def":4,"res":5},"5":{"hp":18,"atk":9,"spd":9,"def":5,"res":6}},"40":{"3":{"hp":[33,36,39],"atk":[28,31,34],"spd":[28,31,34],"def":[16,19,22],"res":[19,22,25]},"4":{"hp":[34,37,40],"atk":[30,33,36],"spd":[30,33,36],"def":[17,20,23],"res":[20,23,26]},"5":{"hp":[36,40,43],"atk":[32,35,38],"spd":[32,35,38],"def":[19,22,25],"res":[22,25,29]}}}},{"name":"Cordelia: Perfect Bride","shortName":"Cordelia","title":"Perfect Bride","origin":"Fire Emblem Awakening","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"5","releaseDate":"2017-05-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Cordelia Perfect Bride.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Cordelia Perfect Bride.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Cordelia Perfect Bride.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Cupid Arrow","default":"-","rarity":"-"},{"name":"Cupid Arrow+","default":5,"rarity":"-"},{"name":"Rally Attack","default":5,"rarity":"-"},{"name":"Rally Atk/Spd","default":"-","rarity":5},{"name":"Escape Route 1","rarity":"-"},{"name":"Escape Route 2","rarity":"-"},{"name":"Escape Route 3","rarity":5},{"name":"Breath of Life 1","rarity":"-"},{"name":"Breath of Life 2","rarity":"-"},{"name":"Breath of Life 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":3,"res":4},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":9,"def":4,"res":5}},"40":{"5":{"hp":[33,36,40],"atk":[32,35,38],"spd":[32,35,38],"def":[16,19,22],"res":[19,22,25]}}}},{"name":"Corrin: Enjoying Tradition","shortName":"Corrin","title":"Enjoying Tradition","origin":"Fire Emblem Fates","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"4-5","releaseDate":"2018-01-16","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Corrin Enjoying Tradition.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Corrin Enjoying Tradition.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Corrin Enjoying Tradition.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Hama Ya","default":4,"rarity":"-"},{"name":"Hama Ya+","default":5,"rarity":5},{"name":"Rally Defense","default":4,"rarity":"-"},{"name":"Rally Def/Res","default":"-","rarity":4},{"name":"Defense +1","rarity":"-"},{"name":"Atk/Def 1","rarity":4},{"name":"Atk/Def 2","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Spur Def/Res 1","rarity":"-"},{"name":"Spur Def/Res 2","rarity":4}],"growthPoints":{"hp":5,"atk":7,"spd":6,"def":9,"res":2},"stats":{"1":{"4":{"hp":17,"atk":8,"spd":8,"def":5,"res":4},"5":{"hp":18,"atk":8,"spd":8,"def":6,"res":5}},"40":{"4":{"hp":[32,35,38],"atk":[27,30,33],"spd":[25,28,31],"def":[28,31,34],"res":[13,16,19]},"5":{"hp":[34,37,41],"atk":[29,32,35],"spd":[26,30,33],"def":[31,34,37],"res":[14,18,21]}}}},{"name":"Corrin: Fateful Prince","shortName":"Corrin","title":"Fateful Prince","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Corrin Fateful Prince.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Corrin Fateful Prince.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Corrin Fateful Prince.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Yato","default":5,"rarity":5},{"name":"Dragon Gaze","default":4,"rarity":3},{"name":"Dragon Fang","default":"-","rarity":4},{"name":"Defense +1","rarity":"-"},{"name":"Defense +2","rarity":3},{"name":"Defense +3","rarity":4},{"name":"Obstruct 1","rarity":3},{"name":"Obstruct 2","rarity":4},{"name":"Obstruct 3","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":7,"def":6,"res":5},"stats":{"1":{"3":{"hp":19,"atk":7,"spd":7,"def":5,"res":4},"4":{"hp":19,"atk":8,"spd":8,"def":5,"res":4},"5":{"hp":20,"atk":8,"spd":8,"def":6,"res":5}},"40":{"3":{"hp":[35,38,41],"atk":[25,28,31],"spd":[25,28,31],"def":[21,24,27],"res":[18,21,24]},"4":{"hp":[36,39,42],"atk":[27,30,33],"spd":[27,30,33],"def":[22,25,28],"res":[19,22,25]},"5":{"hp":[38,42,45],"atk":[29,32,35],"spd":[29,32,35],"def":[24,28,31],"res":[21,24,28]}}}},{"name":"Corrin: Fateful Princess","shortName":"Corrin","title":"Fateful Princess","origin":"Fire Emblem Fates","weaponType":"Blue Breath","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Corrin Fateful Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Corrin Fateful Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Corrin Fateful Princess.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":3,"rarity":"-"},{"name":"Dark Breath","default":4,"rarity":3},{"name":"Dark Breath+","default":5,"rarity":5},{"name":"Dragon Gaze","default":4,"rarity":3},{"name":"Draconic Aura","default":"-","rarity":4},{"name":"Seal Res 1","rarity":3},{"name":"Seal Res 2","rarity":4},{"name":"Seal Res 3","rarity":5},{"name":"Hone Atk 1","rarity":"-"},{"name":"Hone Atk 2","rarity":3},{"name":"Hone Atk 3","rarity":4}],"growthPoints":{"hp":6,"atk":5,"spd":9,"def":8,"res":3},"stats":{"1":{"3":{"hp":18,"atk":7,"spd":5,"def":7,"res":5},"4":{"hp":18,"atk":8,"spd":5,"def":8,"res":5},"5":{"hp":19,"atk":8,"spd":6,"def":8,"res":6}},"40":{"3":{"hp":[34,37,40],"atk":[21,24,27],"spd":[27,30,33],"def":[27,30,33],"res":[15,18,21]},"4":{"hp":[35,38,41],"atk":[23,26,29],"spd":[28,31,34],"def":[29,32,35],"res":[16,19,22]},"5":{"hp":[37,41,44],"atk":[24,27,31],"spd":[31,34,37],"def":[31,34,37],"res":[18,21,24]}}}},{"name":"Corrin: Novice Vacationer","shortName":"Corrin","title":"Novice Vacationer","origin":"Fire Emblem Fates","weaponType":"Blue Tome","moveType":"Flying","rarities":"5","releaseDate":"2017-07-28","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Corrin Novice Vacationer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Corrin Novice Vacationer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Corrin Novice Vacationer.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Sealife Tome","default":"-","rarity":"-"},{"name":"Sealife Tome+","default":5,"rarity":"-"},{"name":"Dragon Gaze","default":5,"rarity":"-"},{"name":"Dragon Fang","default":"-","rarity":5},{"name":"Darting Blow 1","rarity":"-"},{"name":"Swift Strike 1","rarity":"-"},{"name":"Swift Strike 2","rarity":5},{"name":"Fortify Res 1","rarity":"-"},{"name":"Fortify Res 2","rarity":"-"},{"name":"Fortify Fliers","rarity":5}],"growthPoints":{"hp":4,"atk":7,"spd":8,"def":4,"res":5},"stats":{"1":{"5":{"hp":17,"atk":7,"spd":8,"def":5,"res":7}},"40":{"5":{"hp":[31,34,37],"atk":[28,31,34],"spd":[31,34,37],"def":[19,22,25],"res":[23,26,30]}}}},{"name":"Deirdre: Lady of the Forest","shortName":"Deirdre","title":"Lady of the Forest","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Green Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-10-16","poolDate":"2017-10-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Deirdre Lady of the Forest.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Deirdre Lady of the Forest.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Deirdre Lady of the Forest.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Rexcalibur","default":"-","rarity":"-"},{"name":"Divine Naga","default":5,"rarity":"-"},{"name":"Ardent Sacrifice","default":5,"rarity":"-"},{"name":"Quick Riposte 1","rarity":"-"},{"name":"Quick Riposte 2","rarity":"-"},{"name":"Quick Riposte 3","rarity":5},{"name":"Spd Ploy 1","rarity":"-"},{"name":"Spd Ploy 2","rarity":"-"},{"name":"Spd Ploy 3","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":6,"def":2,"res":8},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":6,"def":3,"res":9}},"40":{"5":{"hp":[33,36,40],"atk":[30,33,36],"spd":[24,28,31],"def":[12,16,19],"res":[32,35,38]}}}},{"name":"Delthea: Free Spirit","shortName":"Delthea","title":"Free Spirit","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Blue Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-07-13","poolDate":"2017-07-28","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Delthea Free Spirit.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Delthea Free Spirit.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Delthea Free Spirit.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Thoron","default":"-","rarity":"-"},{"name":"Dark Aura","default":5,"rarity":"-"},{"name":"Miracle","default":5,"rarity":"-"},{"name":"Death Blow 1","rarity":"-"},{"name":"Death Blow 2","rarity":"-"},{"name":"Death Blow 3","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Drive Atk 1","rarity":"-"},{"name":"Drive Atk 2","rarity":5}],"growthPoints":{"hp":4,"atk":8,"spd":8,"def":1,"res":7},"stats":{"1":{"5":{"hp":16,"atk":10,"spd":8,"def":3,"res":7}},"40":{"5":{"hp":[30,33,36],"atk":[33,36,39],"spd":[31,34,37],"def":[10,13,17],"res":[28,31,34]}}}},{"name":"Donnel: Village Hero","shortName":"Donnel","title":"Village Hero","origin":"Fire Emblem Awakening","weaponType":"Blue Lance","moveType":"Infantry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Donnel Village Hero.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Donnel Village Hero.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Donnel Village Hero.png"}},"skills":[{"name":"Iron Lance","default":1,"rarity":"-"},{"name":"Steel Lance","default":3,"rarity":2},{"name":"Brave Lance","default":4,"rarity":3},{"name":"Brave Lance+","default":5,"rarity":5},{"name":"Reciprocal Aid","default":4,"rarity":3},{"name":"HP +3","rarity":1},{"name":"HP +4","rarity":2},{"name":"HP +5","rarity":4},{"name":"Drag Back","rarity":3}],"growthPoints":{"hp":8,"atk":9,"spd":7,"def":8,"res":5},"stats":{"1":{"1":{"hp":15,"atk":5,"spd":3,"def":4,"res":2},"2":{"hp":15,"atk":6,"spd":3,"def":5,"res":2},"3":{"hp":16,"atk":6,"spd":4,"def":5,"res":3},"4":{"hp":16,"atk":7,"spd":4,"def":6,"res":3},"5":{"hp":17,"atk":7,"spd":5,"def":6,"res":4}},"40":{"1":{"hp":[32,34,37],"atk":[23,26,29],"spd":[18,21,23],"def":[21,23,26],"res":[14,16,19]},"2":{"hp":[33,36,39],"atk":[26,29,32],"spd":[19,22,25],"def":[23,26,29],"res":[15,17,20]},"3":{"hp":[36,39,42],"atk":[28,31,34],"spd":[22,25,28],"def":[25,28,31],"res":[17,20,23]},"4":{"hp":[37,40,43],"atk":[30,33,36],"spd":[23,26,29],"def":[27,30,33],"res":[18,21,24]},"5":{"hp":[40,43,46],"atk":[32,35,38],"spd":[26,29,32],"def":[29,32,35],"res":[20,23,27]}}}},{"name":"Dorcas: Serene Warrior","shortName":"Dorcas","title":"Serene Warrior","origin":"Fire Emblem: The Blazing Blade","weaponType":"Green Axe","moveType":"Infantry","rarities":"5","releaseDate":"2017-11-15","poolDate":"2017-11-28","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Dorcas Serene Warrior.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Dorcas Serene Warrior.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Dorcas Serene Warrior.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Silver Axe","default":"-","rarity":"-"},{"name":"Stout Tomahawk","default":5,"rarity":"-"},{"name":"Dragon Gaze","default":5,"rarity":"-"},{"name":"Draconic Aura","default":"-","rarity":5},{"name":"Fierce Stance 1","rarity":"-"},{"name":"Fierce Stance 2","rarity":"-"},{"name":"Fierce Stance 3","rarity":5},{"name":"Quick Riposte 1","rarity":"-"},{"name":"Quick Riposte 2","rarity":"-"},{"name":"Quick Riposte 3","rarity":5},{"name":"Infantry Pulse 1","rarity":"-"},{"name":"Infantry Pulse 2","rarity":"-"},{"name":"Infantry Pulse 3","rarity":5}],"growthPoints":{"hp":8,"atk":8,"spd":4,"def":8,"res":5},"stats":{"1":{"5":{"hp":19,"atk":9,"spd":6,"def":9,"res":5}},"40":{"5":{"hp":[42,45,48],"atk":[32,35,38],"spd":[20,23,26],"def":[32,35,38],"res":[21,24,28]}}}},{"name":"Draug: Gentle Giant","shortName":"Draug","title":"Gentle Giant","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Red Sword","moveType":"Armored","rarities":"2-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Draug Gentle Giant.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Draug Gentle Giant.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Draug Gentle Giant.png"}},"skills":[{"name":"Iron Sword","default":2,"rarity":"-"},{"name":"Steel Sword","default":3,"rarity":2},{"name":"Brave Sword","default":4,"rarity":3},{"name":"Brave Sword+","default":5,"rarity":5},{"name":"Buckler","default":4,"rarity":3},{"name":"Pavise","default":"-","rarity":4},{"name":"Lunge","rarity":3},{"name":"Spur Def 1","rarity":"-"},{"name":"Spur Def 2","rarity":2},{"name":"Ward Armor","rarity":4}],"growthPoints":{"hp":8,"atk":6,"spd":8,"def":8,"res":3},"stats":{"1":{"2":{"hp":22,"atk":7,"spd":4,"def":12,"res":1},"3":{"hp":23,"atk":7,"spd":5,"def":12,"res":2},"4":{"hp":23,"atk":8,"spd":5,"def":13,"res":2},"5":{"hp":24,"atk":8,"spd":6,"def":13,"res":3}},"40":{"2":{"hp":[40,43,46],"atk":[21,24,27],"spd":[22,25,28],"def":[30,33,36],"res":[10,13,16]},"3":{"hp":[43,46,49],"atk":[23,26,29],"spd":[25,28,31],"def":[32,35,38],"res":[12,15,18]},"4":{"hp":[44,47,50],"atk":[25,28,31],"spd":[26,29,32],"def":[34,37,40],"res":[13,16,19]},"5":{"hp":[47,50,53],"atk":[26,30,33],"spd":[29,32,35],"def":[36,39,42],"res":[15,18,21]}}}},{"name":"Effie: Army of One","shortName":"Effie","title":"Army of One","origin":"Fire Emblem Fates","weaponType":"Blue Lance","moveType":"Armored","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Effie Army of One.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Effie Army of One.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Effie Army of One.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Silver Lance","default":4,"rarity":3},{"name":"Silver Lance+","default":5,"rarity":5},{"name":"Smite","default":4,"rarity":3},{"name":"Death Blow 1","rarity":3},{"name":"Death Blow 2","rarity":4},{"name":"Death Blow 3","rarity":5},{"name":"Wary Fighter 1","rarity":"-"},{"name":"Wary Fighter 2","rarity":3},{"name":"Wary Fighter 3","rarity":4}],"growthPoints":{"hp":9,"atk":9,"spd":4,"def":6,"res":5},"stats":{"1":{"3":{"hp":21,"atk":11,"spd":4,"def":10,"res":3},"4":{"hp":21,"atk":12,"spd":4,"def":11,"res":3},"5":{"hp":22,"atk":12,"spd":5,"def":11,"res":4}},"40":{"3":{"hp":[43,46,49],"atk":[33,36,39],"spd":[16,19,22],"def":[26,29,32],"res":[17,20,23]},"4":{"hp":[44,47,50],"atk":[35,38,41],"spd":[17,20,23],"def":[28,31,34],"res":[18,21,24]},"5":{"hp":[47,50,53],"atk":[37,40,43],"spd":[19,22,25],"def":[29,33,36],"res":[20,23,27]}}}},{"name":"Eirika: Anamnesis Lady","shortName":"Eirika","title":"Anamnesis Lady","origin":"Fire Emblem: The Sacred Stones","weaponType":"Red Tome","moveType":"Cavalry","rarities":"5","releaseDate":"2018-01-25","poolDate":"2018-02-09","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Eirika Anamnesis Lady.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Eirika Anamnesis Lady.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Eirika Anamnesis Lady.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":"-","rarity":"-"},{"name":"Fenrir","default":"-","rarity":"-"},{"name":"Gleipnir","default":5,"rarity":"-"},{"name":"Rally Speed","default":5,"rarity":"-"},{"name":"Rally Atk/Spd","default":"-","rarity":5},{"name":"Death Blow 1","rarity":"-"},{"name":"Swift Sparrow 1","rarity":"-"},{"name":"Swift Sparrow 2","rarity":5},{"name":"Desperation 1","rarity":"-"},{"name":"Desperation 2","rarity":"-"},{"name":"Desperation 3","rarity":5},{"name":"R Tome Exp. 1","rarity":"-"},{"name":"R Tome Exp. 2","rarity":"-"},{"name":"R Tome Exp. 3","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":8,"def":3,"res":4},"stats":{"1":{"5":{"hp":17,"atk":7,"spd":9,"def":5,"res":5}},"40":{"5":{"hp":[33,36,40],"atk":[28,31,34],"spd":[32,35,38],"def":[17,20,23],"res":[19,22,25]}}}},{"name":"Eirika: Restoration Lady","shortName":"Eirika","title":"Restoration Lady","origin":"Fire Emblem: The Sacred Stones","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-15","poolDate":"2017-02-27","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Eirika Restoration Lady.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Eirika Restoration Lady.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Eirika Restoration Lady.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Sieglinde","default":5,"rarity":5},{"name":"Pivot","default":4,"rarity":3},{"name":"Drag Back","rarity":3},{"name":"Hone Spd 1","rarity":"-"},{"name":"Hone Spd 2","rarity":3},{"name":"Hone Spd 3","rarity":4}],"growthPoints":{"hp":7,"atk":5,"spd":8,"def":5,"res":6},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":8,"def":6,"res":5},"4":{"hp":17,"atk":7,"spd":9,"def":6,"res":5},"5":{"hp":18,"atk":7,"spd":9,"def":7,"res":6}},"40":{"3":{"hp":[35,38,41],"atk":[20,23,26],"spd":[28,31,34],"def":[20,23,26],"res":[21,24,27]},"4":{"hp":[36,39,42],"atk":[22,25,28],"spd":[30,33,36],"def":[21,24,27],"res":[22,25,28]},"5":{"hp":[39,42,45],"atk":[23,26,30],"spd":[32,35,38],"def":[23,26,30],"res":[24,28,31]}}}},{"name":"Eldigan: Lionheart","shortName":"Eldigan","title":"Lionheart","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Red Sword","moveType":"Cavalry","rarities":"5","releaseDate":"2017-02-27","poolDate":"2017-03-14","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Eldigan Lionheart.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Eldigan Lionheart.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Eldigan Lionheart.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Killing Edge","default":"-","rarity":"-"},{"name":"Mystletainn","default":5,"rarity":"-"},{"name":"Rising Light","default":5,"rarity":"-"},{"name":"Growing Light","default":"-","rarity":5},{"name":"Fury 1","rarity":"-"},{"name":"Fury 2","rarity":"-"},{"name":"Fury 3","rarity":5},{"name":"Lunge","rarity":5}],"growthPoints":{"hp":8,"atk":7,"spd":5,"def":8,"res":2},"stats":{"1":{"5":{"hp":19,"atk":8,"spd":5,"def":8,"res":6}},"40":{"5":{"hp":[42,45,48],"atk":[29,32,35],"spd":[21,24,28],"def":[31,34,37],"res":[15,19,22]}}}},{"name":"Elincia: Lost Princess","shortName":"Elincia","title":"Lost Princess","origin":"Fire Emblem: Path of Radiance","weaponType":"Red Sword","moveType":"Flying","rarities":"5","releaseDate":"2017-09-15","poolDate":"2017-09-29","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Elincia Lost Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Elincia Lost Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Elincia Lost Princess.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Amiti","default":5,"rarity":"-"},{"name":"Ardent Sacrifice","default":5,"rarity":"-"},{"name":"Death Blow 1","rarity":"-"},{"name":"Death Blow 2","rarity":"-"},{"name":"Death Blow 3","rarity":5},{"name":"Flier Formation 1","rarity":"-"},{"name":"Flier Formation 2","rarity":"-"},{"name":"Flier Formation 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":5,"res":5},"stats":{"1":{"5":{"hp":16,"atk":8,"spd":10,"def":5,"res":8}},"40":{"5":{"hp":[32,35,39],"atk":[31,34,37],"spd":[33,36,39],"def":[21,24,28],"res":[24,27,31]}}}},{"name":"Elise: Budding Flower","shortName":"Elise","title":"Budding Flower","origin":"Fire Emblem Fates","weaponType":"Colorless Staff","moveType":"Cavalry","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Elise Budding Flower.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Elise Budding Flower.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Elise Budding Flower.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Gravity","default":"-","rarity":"-"},{"name":"Gravity+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Mend","default":"-","rarity":"-"},{"name":"Recover","default":5,"rarity":"-"},{"name":"Imbue","default":"-","rarity":"-"},{"name":"Kindled-Fire Balm","default":5,"rarity":"-"},{"name":"Live to Serve 1","rarity":"-"},{"name":"Live to Serve 2","rarity":"-"},{"name":"Live to Serve 3","rarity":5}],"growthPoints":{"hp":3,"atk":7,"spd":7,"def":3,"res":7},"stats":{"1":{"5":{"hp":15,"atk":8,"spd":8,"def":4,"res":8}},"40":{"5":{"hp":[27,30,33],"atk":[29,32,35],"spd":[29,32,35],"def":[16,19,22],"res":[29,32,35]}}}},{"name":"Elise: Tropical Flower","shortName":"Elise","title":"Tropical Flower","origin":"Fire Emblem Fates","weaponType":"Green Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-07-28","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Elise Tropical Flower.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Elise Tropical Flower.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Elise Tropical Flower.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Hibiscus Tome","default":"-","rarity":"-"},{"name":"Hibiscus Tome+","default":5,"rarity":"-"},{"name":"Rally Attack","default":5,"rarity":"-"},{"name":"Rally Atk/Res","default":"-","rarity":5},{"name":"Speed +1","rarity":"-"},{"name":"Spd/Res 1","rarity":"-"},{"name":"Spd/Res 2","rarity":5},{"name":"G Tome Valor 1","rarity":"-"},{"name":"G Tome Valor 2","rarity":"-"},{"name":"G Tome Valor 3","rarity":5}],"growthPoints":{"hp":4,"atk":8,"spd":8,"def":3,"res":5},"stats":{"1":{"5":{"hp":17,"atk":10,"spd":8,"def":3,"res":6}},"40":{"5":{"hp":[31,34,37],"atk":[33,36,39],"spd":[31,34,37],"def":[15,18,21],"res":[22,25,29]}}}},{"name":"Eliwood: Devoted Love","shortName":"Eliwood","title":"Devoted Love","origin":"Fire Emblem: The Blazing Blade","weaponType":"Blue Lance","moveType":"Armored","rarities":"4-5","releaseDate":"2018-02-14","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Eliwood Devoted Love.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Eliwood Devoted Love.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Eliwood Devoted Love.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Casa Blanca","default":4,"rarity":"-"},{"name":"Casa Blanca+","default":5,"rarity":5},{"name":"Rally Attack","default":4,"rarity":"-"},{"name":"Rally Atk/Def","default":"-","rarity":4},{"name":"Fire Boost 1","rarity":"-"},{"name":"Fire Boost 2","rarity":4},{"name":"Fire Boost 3","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk 2","rarity":"-"},{"name":"Goad Armor","rarity":4}],"growthPoints":{"hp":7,"atk":9,"spd":7,"def":6,"res":6},"stats":{"1":{"4":{"hp":22,"atk":10,"spd":8,"def":6,"res":6},"5":{"hp":23,"atk":10,"spd":8,"def":7,"res":7}},"40":{"4":{"hp":[41,44,47],"atk":[33,36,39],"spd":[27,30,33],"def":[23,26,29],"res":[23,26,29]},"5":{"hp":[44,47,50],"atk":[35,38,41],"spd":[29,32,35],"def":[25,29,32],"res":[25,29,32]}}}},{"name":"Eliwood: Knight of Lycia","shortName":"Eliwood","title":"Knight of Lycia","origin":"Fire Emblem: The Blazing Blade","weaponType":"Red Sword","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Eliwood Knight of Lycia.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Eliwood Knight of Lycia.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Eliwood Knight of Lycia.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Durandal","default":5,"rarity":5},{"name":"Holy Vestments","default":4,"rarity":3},{"name":"Sacred Cowl","default":"-","rarity":4},{"name":"Axebreaker 1","rarity":3},{"name":"Axebreaker 2","rarity":4},{"name":"Axebreaker 3","rarity":5},{"name":"Spur Res 1","rarity":"-"},{"name":"Spur Res 2","rarity":3},{"name":"Ward Cavalry","rarity":4}],"growthPoints":{"hp":6,"atk":7,"spd":6,"def":4,"res":7},"stats":{"1":{"3":{"hp":16,"atk":6,"spd":7,"def":5,"res":7},"4":{"hp":16,"atk":6,"spd":8,"def":5,"res":8},"5":{"hp":17,"atk":7,"spd":8,"def":6,"res":8}},"40":{"3":{"hp":[32,35,38],"atk":[24,27,30],"spd":[23,26,29],"def":[17,20,23],"res":[25,28,31]},"4":{"hp":[33,36,39],"atk":[25,28,31],"spd":[25,28,31],"def":[18,21,24],"res":[27,30,33]},"5":{"hp":[35,39,42],"atk":[28,31,34],"spd":[26,30,33],"def":[20,23,26],"res":[29,32,35]}}}},{"name":"Ephraim: Legendary Lord","shortName":"Ephraim","title":"Legendary Lord","origin":"Fire Emblem: The Sacred Stones","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"5","releaseDate":"2018-02-28","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ephraim Legendary Lord.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ephraim Legendary Lord.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ephraim Legendary Lord.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Silver Lance","default":"-","rarity":"-"},{"name":"Flame Siegmund","default":5,"rarity":"-"},{"name":"Daylight","default":5,"rarity":"-"},{"name":"Sol","default":"-","rarity":5},{"name":"Fierce Stance 1","rarity":"-"},{"name":"Sturdy Stance 1","rarity":"-"},{"name":"Sturdy Stance 2","rarity":5},{"name":"Solar Brace","rarity":5},{"name":"Fortify Def 1","rarity":"-"},{"name":"Fortify Def 2","rarity":"-"},{"name":"Fortify Def 3","rarity":5}],"growthPoints":{"hp":7,"atk":8,"spd":6,"def":7,"res":3},"stats":{"1":{"5":{"hp":19,"atk":10,"spd":5,"def":9,"res":3}},"40":{"5":{"hp":[40,43,46],"atk":[33,36,39],"spd":[23,27,30],"def":[30,33,36],"res":[15,18,21]}}}},{"name":"Ephraim: Restoration Lord","shortName":"Ephraim","title":"Restoration Lord","origin":"Fire Emblem: The Sacred Stones","weaponType":"Blue Lance","moveType":"Infantry","rarities":"5","releaseDate":"2017-02-15","poolDate":"2017-02-27","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ephraim Restoration Lord.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ephraim Restoration Lord.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ephraim Restoration Lord.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Heavy Spear","default":"-","rarity":"-"},{"name":"Siegmund","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Moonbow","default":"-","rarity":5},{"name":"Seal Def 1","rarity":"-"},{"name":"Seal Def 2","rarity":"-"},{"name":"Seal Def 3","rarity":5},{"name":"Threaten Def 1","rarity":"-"},{"name":"Threaten Def 2","rarity":"-"},{"name":"Threaten Def 3","rarity":5}],"growthPoints":{"hp":8,"atk":8,"spd":5,"def":7,"res":3},"stats":{"1":{"5":{"hp":19,"atk":9,"spd":6,"def":8,"res":5}},"40":{"5":{"hp":[42,45,48],"atk":[32,35,38],"spd":[22,25,29],"def":[29,32,35],"res":[17,20,23]}}}},{"name":"Est: Junior Whitewing","shortName":"Est","title":"Junior Whitewing","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Blue Lance","moveType":"Flying","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Est Junior Whitewing.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Est Junior Whitewing.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Est Junior Whitewing.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Heavy Spear","default":4,"rarity":3},{"name":"Heavy Spear+","default":"-","rarity":5},{"name":"Shove","default":4,"rarity":3},{"name":"Defiant Res 1","rarity":"-"},{"name":"Defiant Res 2","rarity":3},{"name":"Defiant Res 3","rarity":4},{"name":"Seal Spd 1","rarity":3},{"name":"Seal Spd 2","rarity":4},{"name":"Seal Spd 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":6,"def":5,"res":7},"stats":{"1":{"3":{"hp":16,"atk":8,"spd":7,"def":4,"res":7},"4":{"hp":16,"atk":9,"spd":8,"def":4,"res":7},"5":{"hp":17,"atk":9,"spd":8,"def":5,"res":8}},"40":{"3":{"hp":[30,33,36],"atk":[28,31,34],"spd":[23,26,29],"def":[18,21,24],"res":[25,28,31]},"4":{"hp":[31,34,37],"atk":[30,33,36],"spd":[25,28,31],"def":[19,22,25],"res":[26,29,32]},"5":{"hp":[33,36,40],"atk":[32,35,38],"spd":[26,30,33],"def":[21,24,28],"res":[29,32,35]}}}},{"name":"Fae: Divine Dragon","shortName":"Fae","title":"Divine Dragon","origin":"Fire Emblem: The Binding Blade","weaponType":"Green Breath","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Fae Divine Dragon.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Fae Divine Dragon.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Fae Divine Dragon.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":3,"rarity":"-"},{"name":"Light Breath","default":4,"rarity":3},{"name":"Light Breath+","default":5,"rarity":5},{"name":"Draw Back","default":4,"rarity":3},{"name":"Renewal 1","rarity":"-"},{"name":"Renewal 2","rarity":3},{"name":"Renewal 3","rarity":4},{"name":"Threaten Atk 1","rarity":3},{"name":"Threaten Atk 2","rarity":4},{"name":"Threaten Atk 3","rarity":5}],"growthPoints":{"hp":10,"atk":9,"spd":7,"def":5,"res":6},"stats":{"1":{"3":{"hp":15,"atk":4,"spd":3,"def":5,"res":7},"4":{"hp":15,"atk":4,"spd":3,"def":6,"res":8},"5":{"hp":16,"atk":5,"spd":4,"def":6,"res":8}},"40":{"3":{"hp":[39,42,45],"atk":[26,29,32],"spd":[21,24,27],"def":[19,22,25],"res":[23,26,29]},"4":{"hp":[40,43,47],"atk":[27,30,33],"spd":[22,25,28],"def":[21,24,27],"res":[25,28,31]},"5":{"hp":[43,46,50],"atk":[30,33,36],"spd":[25,28,31],"def":[22,25,29],"res":[26,30,33]}}}},{"name":"Faye: Devoted Heart","shortName":"Faye","title":"Devoted Heart","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"5","releaseDate":"2017-04-14","poolDate":"2017-04-26","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Faye Devoted Heart.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Faye Devoted Heart.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Faye Devoted Heart.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Firesweep Bow","default":"-","rarity":"-"},{"name":"Firesweep Bow+","default":5,"rarity":"-"},{"name":"Daylight","default":5,"rarity":"-"},{"name":"Noontime","default":"-","rarity":5},{"name":"Wings of Mercy 1","rarity":"-"},{"name":"Wings of Mercy 2","rarity":"-"},{"name":"Wings of Mercy 3","rarity":5},{"name":"Bow Exp. 1","rarity":"-"},{"name":"Bow Exp. 2","rarity":"-"},{"name":"Bow Exp. 3","rarity":5}],"growthPoints":{"hp":8,"atk":7,"spd":6,"def":6,"res":7},"stats":{"1":{"5":{"hp":16,"atk":6,"spd":3,"def":4,"res":7}},"40":{"5":{"hp":[39,42,45],"atk":[27,30,33],"spd":[21,25,28],"def":[22,26,29],"res":[28,31,34]}}}},{"name":"Felicia: Maid Mayhem","shortName":"Felicia","title":"Maid Mayhem","origin":"Fire Emblem Fates","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Felicia Maid Mayhem.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Felicia Maid Mayhem.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Felicia Maid Mayhem.png"}},"skills":[{"name":"Iron Dagger","default":1,"rarity":"-"},{"name":"Steel Dagger","default":3,"rarity":2},{"name":"Silver Dagger","default":4,"rarity":3},{"name":"Silver Dagger+","default":5,"rarity":5},{"name":"Felicia's Plate","default":"-","rarity":5},{"name":"Chilling Wind","default":4,"rarity":3},{"name":"Glacies","default":"-","rarity":4},{"name":"Resistance +1","rarity":3},{"name":"Resistance +2","rarity":4},{"name":"Resistance +3","rarity":5},{"name":"Breath of Life 1","rarity":1},{"name":"Breath of Life 2","rarity":2},{"name":"Breath of Life 3","rarity":4}],"growthPoints":{"hp":5,"atk":4,"spd":8,"def":3,"res":8},"stats":{"1":{"1":{"hp":13,"atk":4,"spd":9,"def":1,"res":7},"2":{"hp":13,"atk":4,"spd":10,"def":1,"res":8},"3":{"hp":14,"atk":5,"spd":10,"def":2,"res":8},"4":{"hp":14,"atk":5,"spd":11,"def":2,"res":9},"5":{"hp":15,"atk":6,"spd":11,"def":3,"res":9}},"40":{"1":{"hp":[25,27,30],"atk":[14,17,19],"spd":[26,28,31],"def":[9,12,15],"res":[24,26,29]},"2":{"hp":[26,28,31],"atk":[15,18,20],"spd":[28,31,34],"def":[10,13,16],"res":[26,29,32]},"3":{"hp":[28,31,34],"atk":[17,20,23],"spd":[30,33,36],"def":[12,15,18],"res":[28,31,34]},"4":{"hp":[29,32,35],"atk":[18,21,24],"spd":[32,35,38],"def":[13,16,19],"res":[30,33,36]},"5":{"hp":[31,34,38],"atk":[20,23,26],"spd":[34,37,40],"def":[15,18,21],"res":[32,35,38]}}}},{"name":"Finn: Lance of Legend","shortName":"Finn","title":"Lance of Legend","origin":"Fire Emblem: Thracia 776","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"4-5","releaseDate":"2018-04-21","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Finn Lance of Legend.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Finn Lance of Legend.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Finn Lance of Legend.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Brave Lance","default":4,"rarity":"-"},{"name":"Brave Lance+","default":5,"rarity":5},{"name":"Miracle","default":5,"rarity":4},{"name":"Attack +1","rarity":"-"},{"name":"Atk/Def 1","rarity":4},{"name":"Atk/Def 2","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk 2","rarity":"-"},{"name":"Goad Cavalry","rarity":4}],"growthPoints":{"hp":6,"atk":8,"spd":7,"def":7,"res":3},"stats":{"1":{"4":{"hp":17,"atk":8,"spd":9,"def":7,"res":2},"5":{"hp":18,"atk":8,"spd":9,"def":8,"res":3}},"40":{"4":{"hp":[34,37,40],"atk":[29,32,35],"spd":[28,31,34],"def":[26,29,32],"res":[13,16,19]},"5":{"hp":[36,40,43],"atk":[31,34,37],"spd":[30,33,36],"def":[29,32,35],"res":[15,18,21]}}}},{"name":"Fir: Sword Student","shortName":"Fir","title":"Sword Student","origin":"Fire Emblem: The Binding Blade","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Fir Sword Student.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Fir Sword Student.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Fir Sword Student.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Killing Edge","default":4,"rarity":3},{"name":"Killing Edge+","default":5,"rarity":5},{"name":"Nameless Blade","default":"-","rarity":5},{"name":"Chilling Wind","default":4,"rarity":3},{"name":"Glacies","default":"-","rarity":4},{"name":"Speed +1","rarity":"-"},{"name":"Speed +2","rarity":3},{"name":"Speed +3","rarity":4},{"name":"Pass 1","rarity":3},{"name":"Pass 2","rarity":4},{"name":"Pass 3","rarity":5}],"growthPoints":{"hp":6,"atk":5,"spd":8,"def":5,"res":7},"stats":{"1":{"3":{"hp":18,"atk":5,"spd":9,"def":4,"res":6},"4":{"hp":18,"atk":5,"spd":10,"def":4,"res":7},"5":{"hp":19,"atk":6,"spd":10,"def":5,"res":7}},"40":{"3":{"hp":[34,37,40],"atk":[19,22,25],"spd":[29,32,35],"def":[18,21,24],"res":[24,27,30]},"4":{"hp":[35,38,41],"atk":[20,23,26],"spd":[31,34,37],"def":[19,22,25],"res":[26,29,32]},"5":{"hp":[37,41,44],"atk":[22,25,29],"spd":[33,36,39],"def":[21,24,28],"res":[28,31,34]}}}},{"name":"Fjorm: Princess of Ice","shortName":"Fjorm","title":"Princess of Ice","origin":"Fire Emblem Heroes","weaponType":"Blue Lance","moveType":"Infantry","rarities":"5","releaseDate":"2017-11-28","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Fjorm Princess of Ice.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Fjorm Princess of Ice.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Fjorm Princess of Ice.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Silver Lance","default":"-","rarity":"-"},{"name":"Leiptr","default":5,"rarity":"-"},{"name":"Holy Vestments","default":5,"rarity":"-"},{"name":"Sacred Cowl","default":"-","rarity":5},{"name":"Ice Mirror","default":"-","rarity":5},{"name":"Atk/Def Bond 1","rarity":"-"},{"name":"Atk/Def Bond 2","rarity":"-"},{"name":"Atk/Def Bond 3","rarity":5},{"name":"Shield Pulse 1","rarity":"-"},{"name":"Shield Pulse 2","rarity":"-"},{"name":"Shield Pulse 3","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Drive Atk 1","rarity":"-"},{"name":"Drive Atk 2","rarity":5}],"growthPoints":{"hp":6,"atk":6,"spd":7,"def":6,"res":8},"stats":{"1":{"5":{"hp":17,"atk":8,"spd":7,"def":8,"res":8}},"40":{"5":{"hp":[35,39,42],"atk":[26,30,33],"spd":[28,31,34],"def":[26,30,33],"res":[31,34,37]}}}},{"name":"Florina: Lovely Flier","shortName":"Florina","title":"Lovely Flier","origin":"Fire Emblem: The Blazing Blade","weaponType":"Blue Lance","moveType":"Flying","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Florina Lovely Flier.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Florina Lovely Flier.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Florina Lovely Flier.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Heavy Spear","default":4,"rarity":3},{"name":"Heavy Spear+","default":"-","rarity":5},{"name":"Ardent Sacrifice","default":4,"rarity":3},{"name":"Darting Blow 1","rarity":"-"},{"name":"Darting Blow 2","rarity":3},{"name":"Darting Blow 3","rarity":4},{"name":"Breath of Life 1","rarity":3},{"name":"Breath of Life 2","rarity":4},{"name":"Breath of Life 3","rarity":5}],"growthPoints":{"hp":7,"atk":6,"spd":5,"def":5,"res":8},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":7,"def":5,"res":7},"4":{"hp":17,"atk":6,"spd":8,"def":5,"res":8},"5":{"hp":18,"atk":7,"spd":8,"def":6,"res":8}},"40":{"3":{"hp":[35,38,41],"atk":[22,25,28],"spd":[21,24,27],"def":[19,22,25],"res":[27,30,33]},"4":{"hp":[36,39,42],"atk":[23,26,29],"spd":[23,26,29],"def":[20,23,26],"res":[29,32,35]},"5":{"hp":[39,42,45],"atk":[25,29,32],"spd":[24,27,31],"def":[22,25,29],"res":[31,34,37]}}}},{"name":"Frederick: Horizon Watcher","shortName":"Frederick","title":"Horizon Watcher","origin":"Fire Emblem Awakening","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"5","releaseDate":"2017-06-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Frederick Horizon Watcher.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Frederick Horizon Watcher.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Frederick Horizon Watcher.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":"-","rarity":"-"},{"name":"Seashell","default":"-","rarity":"-"},{"name":"Seashell+","default":5,"rarity":"-"},{"name":"Ardent Sacrifice","default":5,"rarity":"-"},{"name":"Armored Blow 1","rarity":"-"},{"name":"Armored Blow 2","rarity":"-"},{"name":"Armored Blow 3","rarity":5},{"name":"Seal Spd 1","rarity":"-"},{"name":"Seal Atk/Spd 1","rarity":"-"},{"name":"Seal Atk/Spd 2","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":7,"def":6,"res":2},"stats":{"1":{"5":{"hp":18,"atk":8,"spd":7,"def":6,"res":5}},"40":{"5":{"hp":[36,40,43],"atk":[29,32,35],"spd":[28,31,34],"def":[24,28,31],"res":[14,18,21]}}}},{"name":"Frederick: Polite Knight","shortName":"Frederick","title":"Polite Knight","origin":"Fire Emblem Awakening","weaponType":"Green Axe","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Frederick Polite Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Frederick Polite Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Frederick Polite Knight.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Hammer","default":4,"rarity":3},{"name":"Hammer+","default":5,"rarity":5},{"name":"New Moon","default":4,"rarity":3},{"name":"Luna","default":"-","rarity":4},{"name":"Wings of Mercy 1","rarity":3},{"name":"Wings of Mercy 2","rarity":4},{"name":"Wings of Mercy 3","rarity":5},{"name":"Fortify Def 1","rarity":"-"},{"name":"Fortify Def 2","rarity":3},{"name":"Fortify Def 3","rarity":4}],"growthPoints":{"hp":7,"atk":8,"spd":5,"def":9,"res":1},"stats":{"1":{"3":{"hp":18,"atk":8,"spd":5,"def":7,"res":3},"4":{"hp":18,"atk":9,"spd":5,"def":8,"res":3},"5":{"hp":19,"atk":9,"spd":6,"def":8,"res":4}},"40":{"3":{"hp":[36,39,42],"atk":[28,31,34],"spd":[19,22,25],"def":[29,32,35],"res":[9,12,15]},"4":{"hp":[37,40,43],"atk":[30,33,36],"spd":[20,23,26],"def":[31,34,37],"res":[10,13,16]},"5":{"hp":[40,43,46],"atk":[32,35,38],"spd":[22,25,29],"def":[33,36,39],"res":[11,14,18]}}}},{"name":"Gaius: Candy Stealer","shortName":"Gaius","title":"Candy Stealer","origin":"Fire Emblem Awakening","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Gaius Candy Stealer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Gaius Candy Stealer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Gaius Candy Stealer.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":3,"rarity":"-"},{"name":"Rogue Dagger","default":4,"rarity":3},{"name":"Rogue Dagger+","default":"-","rarity":5},{"name":"Rally Speed","default":4,"rarity":3},{"name":"Defiant Atk 1","rarity":3},{"name":"Defiant Atk 2","rarity":4},{"name":"Defiant Atk 3","rarity":5},{"name":"Pass 1","rarity":"-"},{"name":"Pass 2","rarity":3},{"name":"Pass 3","rarity":4}],"growthPoints":{"hp":7,"atk":6,"spd":8,"def":4,"res":3},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":9,"def":4,"res":3},"4":{"hp":17,"atk":7,"spd":10,"def":4,"res":3},"5":{"hp":18,"atk":7,"spd":10,"def":5,"res":4}},"40":{"3":{"hp":[35,38,41],"atk":[22,25,28],"spd":[29,32,35],"def":[16,19,22],"res":[13,16,19]},"4":{"hp":[36,39,42],"atk":[24,27,30],"spd":[31,34,37],"def":[17,20,23],"res":[14,17,20]},"5":{"hp":[39,42,45],"atk":[25,29,32],"spd":[33,36,39],"def":[19,22,25],"res":[16,19,22]}}}},{"name":"Gaius: Thief Exposed","shortName":"Gaius","title":"Thief Exposed","origin":"Fire Emblem Awakening","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"5","releaseDate":"2017-06-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Gaius Thief Exposed.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Gaius Thief Exposed.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Gaius Thief Exposed.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Refreshing Bolt","default":"-","rarity":"-"},{"name":"Refreshing Bolt+","default":5,"rarity":"-"},{"name":"Night Sky","default":5,"rarity":"-"},{"name":"Astra","default":"-","rarity":5},{"name":"Vantage 1","rarity":"-"},{"name":"Vantage 2","rarity":"-"},{"name":"Vantage 3","rarity":5},{"name":"Def Ploy 1","rarity":"-"},{"name":"Def Ploy 2","rarity":"-"},{"name":"Def Ploy 3","rarity":5}],"growthPoints":{"hp":4,"atk":6,"spd":9,"def":3,"res":6},"stats":{"1":{"5":{"hp":17,"atk":8,"spd":9,"def":4,"res":6}},"40":{"5":{"hp":[31,34,37],"atk":[26,30,33],"spd":[34,37,40],"def":[16,19,22],"res":[24,28,31]}}}},{"name":"Genny: Endearing Ally","shortName":"Genny","title":"Endearing Ally","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"5","releaseDate":"2017-05-15","poolDate":"2017-05-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Genny Endearing Ally.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Genny Endearing Ally.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Genny Endearing Ally.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Gravity","default":"-","rarity":"-"},{"name":"Gravity+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Mend","default":"-","rarity":"-"},{"name":"Physic","default":5,"rarity":"-"},{"name":"Imbue","default":"-","rarity":"-"},{"name":"Heavenly Light","default":5,"rarity":"-"},{"name":"Wrathful Staff 1","rarity":"-"},{"name":"Wrathful Staff 2","rarity":"-"},{"name":"Wrathful Staff 3","rarity":5}],"growthPoints":{"hp":3,"atk":8,"spd":5,"def":4,"res":8},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":6,"def":4,"res":8}},"40":{"5":{"hp":[29,32,35],"atk":[32,35,38],"spd":[22,25,29],"def":[18,21,24],"res":[31,34,37]}}}},{"name":"Gerome: Masked Rider","shortName":"Gerome","title":"Masked Rider","origin":"Fire Emblem Awakening","weaponType":"Green Axe","moveType":"Flying","rarities":"4-5","releaseDate":"2018-03-15","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Gerome Masked Rider.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Gerome Masked Rider.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Gerome Masked Rider.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Poleaxe","default":4,"rarity":"-"},{"name":"Poleaxe+","default":5,"rarity":5},{"name":"Rally Defense","default":4,"rarity":"-"},{"name":"Rally Atk/Def","default":"-","rarity":4},{"name":"Fortress Def 1","rarity":"-"},{"name":"Fortress Def 2","rarity":"-"},{"name":"Fortress Def 3","rarity":4},{"name":"Hit and Run","rarity":4}],"growthPoints":{"hp":8,"atk":9,"spd":5,"def":8,"res":3},"stats":{"1":{"4":{"hp":18,"atk":10,"spd":5,"def":8,"res":3},"5":{"hp":19,"atk":10,"spd":6,"def":8,"res":4}},"40":{"4":{"hp":[39,42,45],"atk":[33,36,39],"spd":[20,23,26],"def":[29,32,35],"res":[14,17,20]},"5":{"hp":[42,45,48],"atk":[35,38,41],"spd":[22,25,29],"def":[31,34,37],"res":[16,19,22]}}}},{"name":"Gordin: Altean Archer","shortName":"Gordin","title":"Altean Archer","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Gordin Altean Archer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Gordin Altean Archer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Gordin Altean Archer.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":3,"rarity":"-"},{"name":"Brave Bow","default":4,"rarity":3},{"name":"Brave Bow+","default":5,"rarity":5},{"name":"Shove","default":4,"rarity":3},{"name":"Attack +1","rarity":"-"},{"name":"Attack +2","rarity":3},{"name":"Attack +3","rarity":4},{"name":"Vantage 1","rarity":3},{"name":"Vantage 2","rarity":4},{"name":"Vantage 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":5,"def":7,"res":2},"stats":{"1":{"3":{"hp":18,"atk":6,"spd":5,"def":7,"res":3},"4":{"hp":18,"atk":7,"spd":5,"def":8,"res":3},"5":{"hp":19,"atk":7,"spd":6,"def":8,"res":4}},"40":{"3":{"hp":[36,39,42],"atk":[24,27,30],"spd":[19,22,25],"def":[25,28,31],"res":[11,14,17]},"4":{"hp":[37,40,43],"atk":[26,29,32],"spd":[20,23,26],"def":[27,30,33],"res":[12,15,18]},"5":{"hp":[40,43,46],"atk":[28,31,34],"spd":[22,25,29],"def":[29,32,35],"res":[13,17,20]}}}},{"name":"Gray: Wry Comrade","shortName":"Gray","title":"Wry Comrade","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2017-07-13","poolDate":"2017-07-28","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Gray Wry Comrade.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Gray Wry Comrade.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Gray Wry Comrade.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Zanbato","default":"-","rarity":"-"},{"name":"Zanbato+","default":5,"rarity":"-"},{"name":"Swap","default":5,"rarity":"-"},{"name":"Wind Boost 1","rarity":"-"},{"name":"Wind Boost 2","rarity":"-"},{"name":"Wind Boost 3","rarity":5},{"name":"Sword Valor 1","rarity":"-"},{"name":"Sword Valor 2","rarity":"-"},{"name":"Sword Valor 3","rarity":5}],"growthPoints":{"hp":8,"atk":9,"spd":8,"def":7,"res":5},"stats":{"1":{"5":{"hp":17,"atk":7,"spd":6,"def":6,"res":3}},"40":{"5":{"hp":[40,43,46],"atk":[32,35,38],"spd":[29,32,35],"def":[27,30,33],"res":[19,22,26]}}}},{"name":"Gunnthrá: Voice of Dreams","shortName":"Gunnthrá","title":"Voice of Dreams","origin":"Fire Emblem Heroes","weaponType":"Green Tome","moveType":"Cavalry","rarities":"5","releaseDate":"2017-12-28","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Gunnthrá Voice of Dreams.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Gunnthrá Voice of Dreams.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Gunnthrá Voice of Dreams.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Rexcalibur","default":"-","rarity":"-"},{"name":"Blizzard","default":5,"rarity":"-"},{"name":"Chilling Wind","default":5,"rarity":"-"},{"name":"Glacies","default":"-","rarity":5},{"name":"Fortress Res 1","rarity":"-"},{"name":"Fortress Res 2","rarity":"-"},{"name":"Fortress Res 3","rarity":5},{"name":"Chilling Seal","rarity":5},{"name":"Res Ploy 1","rarity":"-"},{"name":"Res Ploy 2","rarity":"-"},{"name":"Res Ploy 3","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":7,"def":2,"res":5},"stats":{"1":{"5":{"hp":15,"atk":7,"spd":9,"def":6,"res":6}},"40":{"5":{"hp":[33,37,40],"atk":[28,31,34],"spd":[30,33,36],"def":[15,19,22],"res":[22,25,29]}}}},{"name":"Gunter: Inveterate Soldier","shortName":"Gunter","title":"Inveterate Soldier","origin":"Fire Emblem Fates","weaponType":"Green Axe","moveType":"Cavalry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Gunter Inveterate Soldier.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Gunter Inveterate Soldier.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Gunter Inveterate Soldier.png"}},"skills":[{"name":"Iron Axe","default":1,"rarity":"-"},{"name":"Steel Axe","default":3,"rarity":2},{"name":"Silver Axe","default":4,"rarity":3},{"name":"Silver Axe+","default":"-","rarity":5},{"name":"Harsh Command","default":4,"rarity":3},{"name":"Armored Blow 1","rarity":3},{"name":"Armored Blow 2","rarity":4},{"name":"Armored Blow 3","rarity":5},{"name":"Hone Atk 1","rarity":1},{"name":"Hone Atk 2","rarity":2},{"name":"Hone Cavalry","rarity":4}],"growthPoints":{"hp":6,"atk":6,"spd":4,"def":6,"res":2},"stats":{"1":{"1":{"hp":19,"atk":8,"spd":5,"def":9,"res":3},"2":{"hp":19,"atk":9,"spd":5,"def":10,"res":3},"3":{"hp":20,"atk":9,"spd":6,"def":10,"res":4},"4":{"hp":20,"atk":10,"spd":6,"def":11,"res":4},"5":{"hp":21,"atk":10,"spd":7,"def":11,"res":5}},"40":{"1":{"hp":[32,35,38],"atk":[21,24,27],"spd":[15,18,20],"def":[22,25,28],"res":[10,12,15]},"2":{"hp":[33,36,39],"atk":[23,26,29],"spd":[16,19,21],"def":[24,27,30],"res":[10,13,16]},"3":{"hp":[36,39,42],"atk":[25,28,31],"spd":[18,21,24],"def":[26,29,32],"res":[12,15,18]},"4":{"hp":[37,40,43],"atk":[27,30,33],"spd":[19,22,25],"def":[28,31,34],"res":[13,16,19]},"5":{"hp":[39,43,46],"atk":[28,32,35],"spd":[21,24,27],"def":[29,33,36],"res":[14,18,21]}}}},{"name":"Gwendolyn: Adorable Knight","shortName":"Gwendolyn","title":"Adorable Knight","origin":"Fire Emblem: The Binding Blade","weaponType":"Blue Lance","moveType":"Armored","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Gwendolyn Adorable Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Gwendolyn Adorable Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Gwendolyn Adorable Knight.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Killer Lance","default":4,"rarity":3},{"name":"Killer Lance+","default":5,"rarity":5},{"name":"Buckler","default":4,"rarity":3},{"name":"Escutcheon","default":"-","rarity":4},{"name":"Drag Back","rarity":3},{"name":"Hone Atk 1","rarity":"-"},{"name":"Hone Atk 2","rarity":3},{"name":"Hone Armor","rarity":4}],"growthPoints":{"hp":8,"atk":6,"spd":5,"def":8,"res":6},"stats":{"1":{"3":{"hp":22,"atk":7,"spd":4,"def":11,"res":5},"4":{"hp":22,"atk":8,"spd":4,"def":12,"res":5},"5":{"hp":23,"atk":8,"spd":5,"def":12,"res":6}},"40":{"3":{"hp":[42,45,48],"atk":[23,26,29],"spd":[18,21,24],"def":[31,34,37],"res":[21,24,27]},"4":{"hp":[43,46,49],"atk":[25,28,31],"spd":[19,22,25],"def":[33,36,39],"res":[22,25,28]},"5":{"hp":[46,49,52],"atk":[26,30,33],"spd":[21,24,28],"def":[35,38,41],"res":[24,28,31]}}}},{"name":"Hana: Focused Samurai","shortName":"Hana","title":"Focused Samurai","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Infantry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Hana Focused Samurai.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Hana Focused Samurai.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Hana Focused Samurai.png"}},"skills":[{"name":"Iron Sword","default":1,"rarity":"-"},{"name":"Steel Sword","default":3,"rarity":2},{"name":"Armorslayer","default":4,"rarity":3},{"name":"Armorslayer+","default":5,"rarity":5},{"name":"Rally Attack","default":4,"rarity":3},{"name":"Life and Death 1","rarity":3},{"name":"Life and Death 2","rarity":4},{"name":"Life and Death 3","rarity":5},{"name":"Obstruct 1","rarity":1},{"name":"Obstruct 2","rarity":2},{"name":"Obstruct 3","rarity":4}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":4,"res":6},"stats":{"1":{"1":{"hp":16,"atk":7,"spd":8,"def":4,"res":2},"2":{"hp":16,"atk":8,"spd":9,"def":4,"res":2},"3":{"hp":17,"atk":8,"spd":9,"def":5,"res":3},"4":{"hp":17,"atk":9,"spd":10,"def":5,"res":3},"5":{"hp":18,"atk":9,"spd":10,"def":6,"res":4}},"40":{"1":{"hp":[28,30,33],"atk":[24,26,29],"spd":[25,27,30],"def":[14,17,19],"res":[15,18,21]},"2":{"hp":[29,31,34],"atk":[26,29,32],"spd":[27,30,33],"def":[15,18,20],"res":[16,19,22]},"3":{"hp":[31,34,37],"atk":[28,31,34],"spd":[29,32,35],"def":[17,20,23],"res":[19,22,25]},"4":{"hp":[32,35,38],"atk":[30,33,36],"spd":[31,34,37],"def":[18,21,24],"res":[20,23,26]},"5":{"hp":[34,37,41],"atk":[32,35,38],"spd":[33,36,39],"def":[20,23,26],"res":[22,26,29]}}}},{"name":"Hardin: Dark Emperor","shortName":"Hardin","title":"Dark Emperor","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Blue Lance","moveType":"Armored","rarities":"5","releaseDate":"2018-02-22","poolDate":"2018-03-09","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Hardin Dark Emperor.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Hardin Dark Emperor.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Hardin Dark Emperor.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Silver Lance","default":"-","rarity":"-"},{"name":"Gradivus","default":5,"rarity":"-"},{"name":"Retribution","default":5,"rarity":"-"},{"name":"Vengeance","default":"-","rarity":5},{"name":"Brazen Def/Res 1","rarity":"-"},{"name":"Brazen Def/Res 2","rarity":"-"},{"name":"Brazen Def/Res 3","rarity":5},{"name":"Bold Fighter 1","rarity":"-"},{"name":"Bold Fighter 2","rarity":"-"},{"name":"Bold Fighter 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":6,"def":8,"res":7},"stats":{"1":{"5":{"hp":23,"atk":8,"spd":6,"def":10,"res":8}},"40":{"5":{"hp":[41,45,48],"atk":[31,34,37],"spd":[24,28,31],"def":[33,36,39],"res":[29,32,35]}}}},{"name":"Hawkeye: Desert Guardian","shortName":"Hawkeye","title":"Desert Guardian","origin":"Fire Emblem: The Blazing Blade","weaponType":"Green Axe","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Hawkeye Desert Guardian.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Hawkeye Desert Guardian.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Hawkeye Desert Guardian.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Killer Axe","default":4,"rarity":3},{"name":"Killer Axe+","default":5,"rarity":5},{"name":"Rising Light","default":4,"rarity":3},{"name":"Growing Light","default":"-","rarity":4},{"name":"Death Blow 1","rarity":3},{"name":"Death Blow 2","rarity":4},{"name":"Death Blow 3","rarity":5},{"name":"Threaten Atk 1","rarity":"-"},{"name":"Threaten Atk 2","rarity":3},{"name":"Threaten Atk 3","rarity":4}],"growthPoints":{"hp":7,"atk":7,"spd":4,"def":6,"res":7},"stats":{"1":{"3":{"hp":20,"atk":8,"spd":4,"def":5,"res":5},"4":{"hp":20,"atk":9,"spd":4,"def":6,"res":5},"5":{"hp":21,"atk":9,"spd":5,"def":6,"res":6}},"40":{"3":{"hp":[38,41,44],"atk":[26,29,32],"spd":[16,19,22],"def":[21,24,27],"res":[23,26,29]},"4":{"hp":[39,42,45],"atk":[28,31,34],"spd":[17,20,23],"def":[23,26,29],"res":[24,27,30]},"5":{"hp":[42,45,48],"atk":[30,33,36],"spd":[19,22,25],"def":[24,28,31],"res":[27,30,33]}}}},{"name":"Hector: General of Ostia","shortName":"Hector","title":"General of Ostia","origin":"Fire Emblem: The Blazing Blade","weaponType":"Green Axe","moveType":"Armored","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Hector General of Ostia.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Hector General of Ostia.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Hector General of Ostia.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Silver Axe","default":"-","rarity":"-"},{"name":"Armads","default":5,"rarity":"-"},{"name":"Buckler","default":5,"rarity":"-"},{"name":"Pavise","default":"-","rarity":5},{"name":"Distant Counter","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk 2","rarity":"-"},{"name":"Goad Armor","rarity":5}],"growthPoints":{"hp":9,"atk":8,"spd":5,"def":8,"res":3},"stats":{"1":{"5":{"hp":24,"atk":10,"spd":5,"def":11,"res":4}},"40":{"5":{"hp":[49,52,55],"atk":[33,36,39],"spd":[21,24,28],"def":[34,37,40],"res":[16,19,22]}}}},{"name":"Hector: Just Here to Fight","shortName":"Hector","title":"Just Here to Fight","origin":"Fire Emblem: The Blazing Blade","weaponType":"Green Axe","moveType":"Armored","rarities":"5","releaseDate":"2018-02-09","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Hector Just Here to Fight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Hector Just Here to Fight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Hector Just Here to Fight.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Silver Axe","default":"-","rarity":"-"},{"name":"Berserk Armads","default":5,"rarity":"-"},{"name":"Night Sky","default":5,"rarity":"-"},{"name":"Glimmer","default":"-","rarity":5},{"name":"Distant Counter","rarity":5},{"name":"Wary Fighter 1","rarity":"-"},{"name":"Wary Fighter 2","rarity":"-"},{"name":"Wary Fighter 3","rarity":5}],"growthPoints":{"hp":8,"atk":10,"spd":4,"def":9,"res":4},"stats":{"1":{"5":{"hp":24,"atk":8,"spd":4,"def":12,"res":7}},"40":{"5":{"hp":[47,50,53],"atk":[35,38,42],"spd":[18,21,24],"def":[37,40,43],"res":[21,24,27]}}}},{"name":"Henry: Happy Vampire","shortName":"Henry","title":"Happy Vampire","origin":"Fire Emblem Awakening","weaponType":"Green Tome","moveType":"Armored","rarities":"5","releaseDate":"2017-10-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Henry Happy Vampire.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Henry Happy Vampire.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Henry Happy Vampire.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Spectral Tome","default":"-","rarity":"-"},{"name":"Spectral Tome+","default":5,"rarity":"-"},{"name":"Retribution","default":5,"rarity":"-"},{"name":"Reprisal","default":"-","rarity":5},{"name":"Live for Honor","rarity":5},{"name":"Armor March 1","rarity":"-"},{"name":"Armor March 2","rarity":"-"},{"name":"Armor March 3","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":7,"def":6,"res":7},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":10,"def":4,"res":12}},"40":{"5":{"hp":[33,36,40],"atk":[30,33,36],"spd":[31,34,37],"def":[22,26,29],"res":[33,36,39]}}}},{"name":"Henry: Twisted Mind","shortName":"Henry","title":"Twisted Mind","origin":"Fire Emblem Awakening","weaponType":"Red Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Henry Twisted Mind.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Henry Twisted Mind.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Henry Twisted Mind.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":3,"rarity":"-"},{"name":"Rauðrraven","default":4,"rarity":3},{"name":"Rauðrraven+","default":5,"rarity":5},{"name":"Glowing Ember","default":4,"rarity":3},{"name":"Ignis","default":"-","rarity":4},{"name":"Defiant Def 1","rarity":3},{"name":"Defiant Def 2","rarity":4},{"name":"Defiant Def 3","rarity":5},{"name":"G Tomebreaker 1","rarity":"-"},{"name":"G Tomebreaker 2","rarity":3},{"name":"G Tomebreaker 3","rarity":4}],"growthPoints":{"hp":8,"atk":4,"spd":4,"def":7,"res":5},"stats":{"1":{"3":{"hp":18,"atk":5,"spd":4,"def":7,"res":5},"4":{"hp":18,"atk":6,"spd":4,"def":8,"res":5},"5":{"hp":19,"atk":6,"spd":5,"def":8,"res":6}},"40":{"3":{"hp":[38,41,44],"atk":[17,20,23],"spd":[16,19,22],"def":[25,28,31],"res":[19,22,25]},"4":{"hp":[39,42,45],"atk":[19,22,25],"spd":[17,20,23],"def":[27,30,33],"res":[20,23,26]},"5":{"hp":[42,45,48],"atk":[20,23,26],"spd":[19,22,25],"def":[29,32,35],"res":[22,25,29]}}}},{"name":"Hinata: Wild Samurai","shortName":"Hinata","title":"Wild Samurai","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Hinata Wild Samurai.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Hinata Wild Samurai.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Hinata Wild Samurai.png"}},"skills":[{"name":"Iron Sword","default":1,"rarity":"-"},{"name":"Steel Sword","default":3,"rarity":2},{"name":"Ruby Sword","default":4,"rarity":3},{"name":"Ruby Sword+","default":5,"rarity":5},{"name":"Buckler","default":4,"rarity":3},{"name":"Pavise","default":"-","rarity":4},{"name":"Fury 1","rarity":1},{"name":"Fury 2","rarity":2},{"name":"Fury 3","rarity":4},{"name":"Brash Assault 1","rarity":3},{"name":"Brash Assault 2","rarity":4},{"name":"Brash Assault 3","rarity":5}],"growthPoints":{"hp":8,"atk":7,"spd":5,"def":8,"res":3},"stats":{"1":{"3":{"hp":20,"atk":7,"spd":4,"def":9,"res":2},"4":{"hp":20,"atk":8,"spd":4,"def":10,"res":2},"5":{"hp":21,"atk":8,"spd":5,"def":10,"res":3}},"40":{"3":{"hp":[40,43,46],"atk":[25,28,31],"spd":[18,21,24],"def":[29,32,35],"res":[12,15,18]},"4":{"hp":[41,44,47],"atk":[27,30,33],"spd":[19,22,25],"def":[31,34,37],"res":[13,16,19]},"5":{"hp":[44,47,50],"atk":[29,32,35],"spd":[21,24,28],"def":[33,36,39],"res":[15,18,21]}}}},{"name":"Hinoka: Blue Sky Warrior","shortName":"Hinoka","title":"Blue Sky Warrior","origin":"Fire Emblem Fates","weaponType":"Colorless Bow","moveType":"Flying","rarities":"5","releaseDate":"2018-04-24","poolDate":"2018-05-10","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Hinoka Blue Sky Warrior.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Hinoka Blue Sky Warrior.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Hinoka Blue Sky Warrior.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Silver Bow","default":"-","rarity":"-"},{"name":"Warrior Princess","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Luna","default":"-","rarity":5},{"name":"Atk/Spd Bond 1","rarity":"-"},{"name":"Atk/Spd Bond 2","rarity":"-"},{"name":"Atk/Spd Bond 3","rarity":5},{"name":"Flier Formation 1","rarity":"-"},{"name":"Flier Formation 2","rarity":"-"},{"name":"Flier Formation 3","rarity":5},{"name":"Flier Guidance 1","rarity":"-"},{"name":"Flier Guidance 2","rarity":"-"},{"name":"Flier Guidance 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":2,"res":6},"stats":{"1":{"5":{"hp":18,"atk":6,"spd":9,"def":4,"res":7}},"40":{"5":{"hp":[34,37,41],"atk":[29,32,35],"spd":[32,35,38],"def":[13,17,20],"res":[25,29,32]}}}},{"name":"Hinoka: Warrior Princess","shortName":"Hinoka","title":"Warrior Princess","origin":"Fire Emblem Fates","weaponType":"Blue Lance","moveType":"Flying","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Hinoka Warrior Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Hinoka Warrior Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Hinoka Warrior Princess.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Brave Lance","default":"-","rarity":"-"},{"name":"Brave Lance+","default":5,"rarity":"-"},{"name":"Hinoka's Spear","default":"-","rarity":5},{"name":"Rising Wind","default":5,"rarity":"-"},{"name":"Blazing Wind","default":"-","rarity":5},{"name":"Defiant Def 1","rarity":"-"},{"name":"Defiant Def 2","rarity":"-"},{"name":"Defiant Def 3","rarity":5},{"name":"Hone Spd 1","rarity":"-"},{"name":"Hone Spd 2","rarity":"-"},{"name":"Hone Fliers","rarity":5}],"growthPoints":{"hp":6,"atk":9,"spd":7,"def":5,"res":4},"stats":{"1":{"5":{"hp":19,"atk":7,"spd":8,"def":6,"res":7}},"40":{"5":{"hp":[37,41,44],"atk":[32,35,38],"spd":[29,32,35],"def":[22,25,29],"res":[21,24,27]}}}},{"name":"Ike: Brave Mercenary","shortName":"Ike","title":"Brave Mercenary","origin":"Fire Emblem: Path of Radiance","weaponType":"Green Axe","moveType":"Infantry","rarities":"5","releaseDate":"2017-08-31","poolDate":"2017-09-15","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ike Brave Mercenary.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ike Brave Mercenary.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ike Brave Mercenary.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Silver Axe","default":"-","rarity":"-"},{"name":"Urvan","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Luna","default":"-","rarity":5},{"name":"Aether","default":"-","rarity":5},{"name":"Steady Stance 1","rarity":"-"},{"name":"Steady Stance 2","rarity":"-"},{"name":"Steady Breath","rarity":5},{"name":"Beorc's Blessing","rarity":5},{"name":"Threaten Def 1","rarity":"-"},{"name":"Threaten Def 2","rarity":"-"},{"name":"Threaten Def 3","rarity":5}],"growthPoints":{"hp":8,"atk":8,"spd":6,"def":8,"res":3},"stats":{"1":{"5":{"hp":17,"atk":10,"spd":6,"def":9,"res":5}},"40":{"5":{"hp":[40,43,46],"atk":[33,36,39],"spd":[24,28,31],"def":[32,35,38],"res":[17,20,23]}}}},{"name":"Ike: Vanguard Legend","shortName":"Ike","title":"Vanguard Legend","origin":"Fire Emblem: Radiant Dawn","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2018-01-31","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ike Vanguard Legend.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ike Vanguard Legend.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ike Vanguard Legend.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Ragnell","default":5,"rarity":"-"},{"name":"Daylight","default":5,"rarity":"-"},{"name":"Sol","default":"-","rarity":5},{"name":"Radiant Aether","default":"-","rarity":5},{"name":"Warding Stance 1","rarity":"-"},{"name":"Warding Stance 2","rarity":"-"},{"name":"Warding Breath","rarity":5},{"name":"Seal Def 1","rarity":"-"},{"name":"Seal Atk/Def 1","rarity":"-"},{"name":"Seal Atk/Def 2","rarity":5},{"name":"Def Tactic 1","rarity":"-"},{"name":"Def Tactic 2","rarity":"-"},{"name":"Def Tactic 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":7,"def":8,"res":4},"stats":{"1":{"5":{"hp":19,"atk":10,"spd":6,"def":9,"res":4}},"40":{"5":{"hp":[37,41,44],"atk":[33,36,39],"spd":[27,30,33],"def":[32,35,38],"res":[18,21,24]}}}},{"name":"Ike: Young Mercenary","shortName":"Ike","title":"Young Mercenary","origin":"Fire Emblem: Path of Radiance","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2017-04-26","poolDate":"2017-05-15","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ike Young Mercenary.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ike Young Mercenary.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ike Young Mercenary.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Ragnell","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Luna","default":"-","rarity":5},{"name":"Aether","default":"-","rarity":5},{"name":"Heavy Blade 1","rarity":"-"},{"name":"Heavy Blade 2","rarity":"-"},{"name":"Heavy Blade 3","rarity":5},{"name":"Swordbreaker 1","rarity":"-"},{"name":"Swordbreaker 2","rarity":"-"},{"name":"Swordbreaker 3","rarity":5}],"growthPoints":{"hp":7,"atk":8,"spd":7,"def":7,"res":2},"stats":{"1":{"5":{"hp":18,"atk":9,"spd":7,"def":8,"res":5}},"40":{"5":{"hp":[39,42,45],"atk":[32,35,38],"spd":[28,31,34],"def":[29,32,35],"res":[14,18,21]}}}},{"name":"Inigo: Indigo Dancer","shortName":"Inigo","title":"Indigo Dancer","origin":"Fire Emblem Awakening","weaponType":"Green Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-09-29","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Inigo Indigo Dancer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Inigo Indigo Dancer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Inigo Indigo Dancer.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Dancer's Ring","default":"-","rarity":"-"},{"name":"Dancer's Ring+","default":5,"rarity":"-"},{"name":"Dance","default":5,"rarity":"-"},{"name":"Gale Dance 1","rarity":"-"},{"name":"Gale Dance 2","rarity":"-"},{"name":"Gale Dance 3","rarity":5},{"name":"Hone Atk 1","rarity":"-"},{"name":"Hone Atk 2","rarity":"-"},{"name":"Hone Atk 3","rarity":5}],"growthPoints":{"hp":6,"atk":6,"spd":8,"def":4,"res":4},"stats":{"1":{"5":{"hp":15,"atk":6,"spd":7,"def":5,"res":3}},"40":{"5":{"hp":[33,37,40],"atk":[24,28,31],"spd":[30,33,36],"def":[19,22,25],"res":[17,20,23]}}}},{"name":"Innes: Flawless Form","shortName":"Innes","title":"Flawless Form","origin":"Fire Emblem: The Sacred Stones","weaponType":"Green Axe","moveType":"Flying","rarities":"5","releaseDate":"2018-06-21","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Innes Flawless Form.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Innes Flawless Form.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Innes Flawless Form.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Beach Banner","default":"-","rarity":"-"},{"name":"Beach Banner+","default":5,"rarity":"-"},{"name":"Rally Atk/Def","default":"-","rarity":"-"},{"name":"Def Feint 1","rarity":"-"},{"name":"Def Feint 2","rarity":"-"},{"name":"Def Feint 3","rarity":"-"},{"name":"-","rarity":"-"},{"name":"-","rarity":"-"},{"name":"Goad Fliers","rarity":"-"}],"growthPoints":{"hp":null,"atk":null,"spd":null,"def":null,"res":null},"stats":{"1":{"5":{"hp":18,"atk":9,"spd":9,"def":6,"res":5}},"40":{"5":{"hp":[null,null,null],"atk":[null,null,null],"spd":[null,null,null],"def":[null,null,null],"res":[null,null,null]}}}},{"name":"Innes: Regal Strategician","shortName":"Innes","title":"Regal Strategician","origin":"Fire Emblem: The Sacred Stones","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"5","releaseDate":"2017-08-15","poolDate":"2017-08-31","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Innes Regal Strategician.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Innes Regal Strategician.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Innes Regal Strategician.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Silver Bow","default":"-","rarity":"-"},{"name":"Nidhogg","default":5,"rarity":"-"},{"name":"Chilling Wind","default":5,"rarity":"-"},{"name":"Iceberg","default":"-","rarity":5},{"name":"Fortress Res 1","rarity":"-"},{"name":"Fortress Res 2","rarity":"-"},{"name":"Fortress Res 3","rarity":5},{"name":"Cancel Affinity 1","rarity":"-"},{"name":"Cancel Affinity 2","rarity":"-"},{"name":"Cancel Affinity 3","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":8,"def":1,"res":7},"stats":{"1":{"5":{"hp":16,"atk":9,"spd":8,"def":4,"res":7}},"40":{"5":{"hp":[32,35,39],"atk":[30,33,36],"spd":[31,34,37],"def":[11,14,18],"res":[28,31,34]}}}},{"name":"Ishtar: Thunder Goddess","shortName":"Ishtar","title":"Thunder Goddess","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Blue Tome","moveType":"Infantry","rarities":"5","releaseDate":"2018-05-10","poolDate":"2018-05-21","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ishtar Thunder Goddess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ishtar Thunder Goddess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ishtar Thunder Goddess.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Thoron","default":"-","rarity":"-"},{"name":"Mjölnir","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Moonbow","default":"-","rarity":5},{"name":"Darting Blow 1","rarity":"-"},{"name":"Swift Sparrow 1","rarity":"-"},{"name":"Swift Sparrow 2","rarity":5},{"name":"Vantage 1","rarity":"-"},{"name":"Vantage 2","rarity":"-"},{"name":"Vantage 3","rarity":5},{"name":"Odd Atk Wave 1","rarity":"-"},{"name":"Odd Atk Wave 2","rarity":"-"},{"name":"Odd Atk Wave 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":8,"def":2,"res":5},"stats":{"1":{"5":{"hp":16,"atk":8,"spd":10,"def":4,"res":7}},"40":{"5":{"hp":[34,38,41],"atk":[31,34,37],"spd":[33,36,39],"def":[13,17,20],"res":[23,26,30]}}}},{"name":"Jaffar: Angel of Death","shortName":"Jaffar","title":"Angel of Death","origin":"Fire Emblem: The Blazing Blade","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"5","releaseDate":"2017-03-14","poolDate":"2017-03-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Jaffar Angel of Death.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Jaffar Angel of Death.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Jaffar Angel of Death.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":"-","rarity":"-"},{"name":"Silver Dagger","default":"-","rarity":"-"},{"name":"Deathly Dagger","default":5,"rarity":"-"},{"name":"Night Sky","default":"-","rarity":"-"},{"name":"Glimmer","default":5,"rarity":"-"},{"name":"Life and Death 1","rarity":"-"},{"name":"Life and Death 2","rarity":"-"},{"name":"Life and Death 3","rarity":5},{"name":"Threaten Spd 1","rarity":"-"},{"name":"Threaten Spd 2","rarity":"-"},{"name":"Threaten Spd 3","rarity":5}],"growthPoints":{"hp":7,"atk":5,"spd":7,"def":5,"res":4},"stats":{"1":{"5":{"hp":17,"atk":7,"spd":9,"def":6,"res":5}},"40":{"5":{"hp":[38,41,44],"atk":[23,26,30],"spd":[30,33,36],"def":[22,25,29],"res":[19,22,25]}}}},{"name":"Jagen: Veteran Knight","shortName":"Jagen","title":"Veteran Knight","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Jagen Veteran Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Jagen Veteran Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Jagen Veteran Knight.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Silver Lance","default":4,"rarity":3},{"name":"Silver Lance+","default":5,"rarity":5},{"name":"Holy Vestments","default":4,"rarity":3},{"name":"Aegis","default":"-","rarity":4},{"name":"Fury 1","rarity":3},{"name":"Fury 2","rarity":4},{"name":"Fury 3","rarity":5},{"name":"Fortify Res 1","rarity":"-"},{"name":"Fortify Res 2","rarity":3},{"name":"Fortify Cavalry","rarity":4}],"growthPoints":{"hp":4,"atk":5,"spd":4,"def":4,"res":7},"stats":{"1":{"3":{"hp":19,"atk":7,"spd":6,"def":7,"res":10},"4":{"hp":19,"atk":8,"spd":6,"def":7,"res":11},"5":{"hp":20,"atk":8,"spd":7,"def":8,"res":11}},"40":{"3":{"hp":[31,34,37],"atk":[21,24,27],"spd":[18,21,24],"def":[19,22,25],"res":[28,31,34]},"4":{"hp":[32,35,38],"atk":[23,26,29],"spd":[19,22,25],"def":[20,23,26],"res":[30,33,36]},"5":{"hp":[34,37,40],"atk":[24,27,31],"spd":[21,24,27],"def":[22,25,28],"res":[32,35,38]}}}},{"name":"Jakob: Devoted Monster","shortName":"Jakob","title":"Devoted Monster","origin":"Fire Emblem Fates","weaponType":"Colorless Bow","moveType":"Armored","rarities":"5","releaseDate":"2017-10-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Jakob Devoted Monster.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Jakob Devoted Monster.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Jakob Devoted Monster.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Monstrous Bow","default":"-","rarity":"-"},{"name":"Monstrous Bow+","default":5,"rarity":"-"},{"name":"Glowing Ember","default":5,"rarity":"-"},{"name":"Ignis","default":"-","rarity":5},{"name":"Armored Blow 1","rarity":"-"},{"name":"Bracing Blow 1","rarity":"-"},{"name":"Bracing Blow 2","rarity":5},{"name":"Wary Fighter 1","rarity":"-"},{"name":"Wary Fighter 2","rarity":"-"},{"name":"Wary Fighter 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":4,"def":7,"res":7},"stats":{"1":{"5":{"hp":20,"atk":9,"spd":6,"def":9,"res":8}},"40":{"5":{"hp":[38,42,45],"atk":[32,35,38],"spd":[20,23,26],"def":[30,33,36],"res":[29,32,35]}}}},{"name":"Jakob: Devoted Servant","shortName":"Jakob","title":"Devoted Servant","origin":"Fire Emblem Fates","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Jakob Devoted Servant.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Jakob Devoted Servant.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Jakob Devoted Servant.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":3,"rarity":"-"},{"name":"Silver Dagger","default":4,"rarity":3},{"name":"Silver Dagger+","default":5,"rarity":5},{"name":"Rally Resistance","default":4,"rarity":3},{"name":"Defense +1","rarity":"-"},{"name":"Defense +2","rarity":3},{"name":"Defense +3","rarity":4},{"name":"Renewal 1","rarity":3},{"name":"Renewal 2","rarity":4},{"name":"Renewal 3","rarity":5}],"growthPoints":{"hp":6,"atk":6,"spd":6,"def":5,"res":5},"stats":{"1":{"3":{"hp":16,"atk":6,"spd":8,"def":5,"res":4},"4":{"hp":16,"atk":7,"spd":9,"def":5,"res":4},"5":{"hp":17,"atk":7,"spd":9,"def":6,"res":5}},"40":{"3":{"hp":[32,35,38],"atk":[22,25,28],"spd":[24,27,30],"def":[19,22,25],"res":[18,21,24]},"4":{"hp":[33,36,39],"atk":[24,27,30],"spd":[26,29,32],"def":[20,23,26],"res":[19,22,25]},"5":{"hp":[35,39,42],"atk":[25,29,32],"spd":[27,31,34],"def":[22,25,29],"res":[21,24,28]}}}},{"name":"Jeorge: Perfect Shot","shortName":"Jeorge","title":"Perfect Shot","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Jeorge Perfect Shot.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Jeorge Perfect Shot.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Jeorge Perfect Shot.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":3,"rarity":"-"},{"name":"Silver Bow","default":4,"rarity":3},{"name":"Parthia","default":5,"rarity":5},{"name":"Rising Flame","default":4,"rarity":3},{"name":"Blazing Flame","default":"-","rarity":4},{"name":"Seal Atk 1","rarity":"-"},{"name":"Seal Atk 2","rarity":3},{"name":"Seal Atk 3","rarity":4},{"name":"Spur Spd 1","rarity":3},{"name":"Spur Spd 2","rarity":4},{"name":"Spur Spd 3","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":7,"def":5,"res":4},"stats":{"1":{"3":{"hp":17,"atk":7,"spd":7,"def":4,"res":4},"4":{"hp":17,"atk":8,"spd":8,"def":4,"res":4},"5":{"hp":18,"atk":8,"spd":8,"def":5,"res":5}},"40":{"3":{"hp":[31,34,37],"atk":[25,28,31],"spd":[25,28,31],"def":[18,21,24],"res":[16,19,22]},"4":{"hp":[32,35,38],"atk":[27,30,33],"spd":[27,30,33],"def":[19,22,25],"res":[17,20,23]},"5":{"hp":[34,37,41],"atk":[29,32,35],"spd":[29,32,35],"def":[21,24,28],"res":[19,22,25]}}}},{"name":"Joshua: Tempest King","shortName":"Joshua","title":"Tempest King","origin":"Fire Emblem: The Sacred Stones","weaponType":"Red Sword","moveType":"Infantry","rarities":"4-5","releaseDate":"2017-11-21","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Joshua Tempest King.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Joshua Tempest King.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Joshua Tempest King.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Slaying Edge","default":4,"rarity":"-"},{"name":"Audhulma","default":5,"rarity":5},{"name":"New Moon","default":4,"rarity":"-"},{"name":"Moonbow","default":"-","rarity":4},{"name":"Close Def 1","rarity":"-"},{"name":"Close Def 2","rarity":4},{"name":"Close Def 3","rarity":5},{"name":"Windsweep 1","rarity":"-"},{"name":"Windsweep 2","rarity":"-"},{"name":"Windsweep 3","rarity":4}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":6,"res":6},"stats":{"1":{"4":{"hp":17,"atk":6,"spd":9,"def":8,"res":5},"5":{"hp":18,"atk":7,"spd":9,"def":8,"res":6}},"40":{"4":{"hp":[34,37,40],"atk":[25,28,31],"spd":[30,33,36],"def":[25,28,31],"res":[22,25,28]},"5":{"hp":[36,40,43],"atk":[28,31,34],"spd":[32,35,38],"def":[26,30,33],"res":[24,28,31]}}}},{"name":"Julia: Naga's Blood","shortName":"Julia","title":"Naga's Blood","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Green Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-02-15","poolDate":"2017-02-27","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Julia Nagas Blood.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Julia Nagas Blood.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Julia Nagas Blood.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Rexcalibur","default":"-","rarity":"-"},{"name":"Naga","default":5,"rarity":"-"},{"name":"Dragon Gaze","default":5,"rarity":"-"},{"name":"Dragon Fang","default":"-","rarity":5},{"name":"Resistance +1","rarity":"-"},{"name":"Resistance +2","rarity":"-"},{"name":"Resistance +3","rarity":5},{"name":"Breath of Life 1","rarity":"-"},{"name":"Breath of Life 2","rarity":"-"},{"name":"Breath of Life 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":5,"def":2,"res":7},"stats":{"1":{"5":{"hp":16,"atk":9,"spd":7,"def":4,"res":8}},"40":{"5":{"hp":[34,38,41],"atk":[32,35,38],"spd":[23,26,30],"def":[13,17,20],"res":[29,32,35]}}}},{"name":"Julius: Scion of Darkness","shortName":"Julius","title":"Scion of Darkness","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Red Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2018-05-14","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Julius Scion of Darkness.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Julius Scion of Darkness.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Julius Scion of Darkness.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":3,"rarity":"-"},{"name":"Fenrir","default":4,"rarity":3},{"name":"Loptous","default":"-","rarity":5},{"name":"Dragon Gaze","default":4,"rarity":3},{"name":"Draconic Aura","default":"-","rarity":4},{"name":"Guard 1","rarity":"-"},{"name":"Guard 2","rarity":4},{"name":"Guard 3","rarity":5},{"name":"Atk Ploy 1","rarity":"-"},{"name":"Atk Ploy 2","rarity":"-"},{"name":"Atk Ploy 3","rarity":4}],"growthPoints":{"hp":6,"atk":8,"spd":5,"def":2,"res":8},"stats":{"1":{"3":{"hp":15,"atk":8,"spd":7,"def":2,"res":8},"4":{"hp":15,"atk":9,"spd":7,"def":2,"res":9},"5":{"hp":16,"atk":9,"spd":8,"def":3,"res":9}},"40":{"3":{"hp":[31,34,37],"atk":[28,31,34],"spd":[21,24,27],"def":[10,13,16],"res":[28,31,34]},"4":{"hp":[32,35,38],"atk":[30,33,36],"spd":[22,25,28],"def":[11,14,17],"res":[30,33,36]},"5":{"hp":[34,38,41],"atk":[32,35,38],"spd":[24,27,31],"def":[12,16,19],"res":[32,35,38]}}}},{"name":"Kagero: Honorable Ninja","shortName":"Kagero","title":"Honorable Ninja","origin":"Fire Emblem Fates","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Kagero Honorable Ninja.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Kagero Honorable Ninja.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Kagero Honorable Ninja.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":3,"rarity":"-"},{"name":"Poison Dagger","default":4,"rarity":3},{"name":"Poison Dagger+","default":5,"rarity":5},{"name":"Retribution","default":4,"rarity":3},{"name":"Reprisal","default":"-","rarity":4},{"name":"Warding Blow 1","rarity":3},{"name":"Warding Blow 2","rarity":4},{"name":"Warding Blow 3","rarity":5},{"name":"Daggerbreaker 1","rarity":"-"},{"name":"Daggerbreaker 2","rarity":3},{"name":"Daggerbreaker 3","rarity":4}],"growthPoints":{"hp":3,"atk":8,"spd":7,"def":4,"res":6},"stats":{"1":{"3":{"hp":15,"atk":8,"spd":7,"def":4,"res":5},"4":{"hp":15,"atk":9,"spd":8,"def":4,"res":5},"5":{"hp":16,"atk":9,"spd":8,"def":5,"res":6}},"40":{"3":{"hp":[25,28,31],"atk":[28,31,34],"spd":[25,28,31],"def":[16,19,22],"res":[21,24,27]},"4":{"hp":[26,29,32],"atk":[30,33,36],"spd":[27,30,33],"def":[17,20,23],"res":[22,25,28]},"5":{"hp":[28,31,34],"atk":[32,35,38],"spd":[29,32,35],"def":[19,22,25],"res":[24,28,31]}}}},{"name":"Kagero: Spring Ninja","shortName":"Kagero","title":"Spring Ninja","origin":"Fire Emblem Fates","weaponType":"Colorless Dagger","moveType":"Flying","rarities":"5","releaseDate":"2018-03-22","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Kagero Spring Ninja.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Kagero Spring Ninja.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Kagero Spring Ninja.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":"-","rarity":"-"},{"name":"Lethal Carrot","default":"-","rarity":"-"},{"name":"Lethal Carrot+","default":5,"rarity":"-"},{"name":"Night Sky","default":5,"rarity":"-"},{"name":"Glimmer","default":"-","rarity":5},{"name":"Spd/Res Bond 1","rarity":"-"},{"name":"Spd/Res Bond 2","rarity":"-"},{"name":"Spd/Res Bond 3","rarity":5},{"name":"Live for Honor","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk 2","rarity":"-"},{"name":"Goad Fliers","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":2,"res":6},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":8,"def":5,"res":5}},"40":{"5":{"hp":[33,36,40],"atk":[32,35,38],"spd":[31,34,37],"def":[14,18,21],"res":[23,27,30]}}}},{"name":"Kana: Dragon Princess","shortName":"Kana","title":"Dragon Princess","origin":"Fire Emblem Fates","weaponType":"Green Breath","moveType":"Infantry","rarities":"5","releaseDate":"2018-04-24","poolDate":"2018-05-10","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Kana Dragon Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Kana Dragon Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Kana Dragon Princess.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":"-","rarity":"-"},{"name":"Water Breath","default":"-","rarity":"-"},{"name":"Water Breath+","default":5,"rarity":"-"},{"name":"Dragon Gaze","default":5,"rarity":"-"},{"name":"Draconic Aura","default":"-","rarity":5},{"name":"Fierce Stance 1","rarity":"-"},{"name":"Fierce Stance 2","rarity":"-"},{"name":"Fierce Stance 3","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk 2","rarity":"-"},{"name":"Goad Dragons","rarity":5}],"growthPoints":{"hp":6,"atk":6,"spd":8,"def":8,"res":5},"stats":{"1":{"5":{"hp":18,"atk":8,"spd":8,"def":7,"res":7}},"40":{"5":{"hp":[36,40,43],"atk":[26,30,33],"spd":[31,34,37],"def":[30,33,36],"res":[23,26,30]}}}},{"name":"Kana: Dragon Spawn","shortName":"Kana","title":"Dragon Spawn","origin":"Fire Emblem Fates","weaponType":"Blue Breath","moveType":"Infantry","rarities":"3-4","releaseDate":"2018-05-03","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Kana Dragon Spawn.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Kana Dragon Spawn.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Kana Dragon Spawn.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":3,"rarity":"-"},{"name":"Water Breath","default":4,"rarity":4},{"name":"Water Breath+","default":"-","rarity":5},{"name":"Dragon Gaze","default":4,"rarity":3},{"name":"Dragon Fang","default":"-","rarity":4},{"name":"Brazen Def/Res 1","rarity":3},{"name":"Brazen Def/Res 2","rarity":4},{"name":"Brazen Def/Res 3","rarity":5},{"name":"Fortify Def 1","rarity":"-"},{"name":"Fortify Def 2","rarity":3},{"name":"Fortify Dragons","rarity":4}],"growthPoints":{"hp":6,"atk":6,"spd":8,"def":7,"res":6},"stats":{"1":{"3":{"hp":17,"atk":8,"spd":6,"def":6,"res":6},"4":{"hp":17,"atk":9,"spd":7,"def":6,"res":6},"5":{"hp":18,"atk":9,"spd":7,"def":7,"res":7}},"40":{"3":{"hp":[33,36,39],"atk":[24,27,30],"spd":[26,29,32],"def":[24,27,30],"res":[22,25,28]},"4":{"hp":[34,37,40],"atk":[26,29,32],"spd":[28,31,34],"def":[25,28,31],"res":[23,26,29]},"5":{"hp":[36,40,43],"atk":[27,31,34],"spd":[30,33,36],"def":[28,31,34],"res":[25,29,32]}}}},{"name":"Karel: Sword Demon","shortName":"Karel","title":"Sword Demon","origin":"Fire Emblem: The Blazing Blade","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2017-03-14","poolDate":"2017-03-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Karel Sword Demon.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Karel Sword Demon.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Karel Sword Demon.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Wo Dao","default":"-","rarity":"-"},{"name":"Wo Dao+","default":5,"rarity":"-"},{"name":"Nameless Blade","default":"-","rarity":5},{"name":"Retribution","default":5,"rarity":"-"},{"name":"Reprisal","default":"-","rarity":5},{"name":"Defiant Atk 1","rarity":"-"},{"name":"Defiant Atk 2","rarity":"-"},{"name":"Defiant Atk 3","rarity":5},{"name":"Desperation 1","rarity":"-"},{"name":"Desperation 2","rarity":"-"},{"name":"Desperation 3","rarity":5}],"growthPoints":{"hp":9,"atk":6,"spd":8,"def":5,"res":3},"stats":{"1":{"5":{"hp":19,"atk":8,"spd":9,"def":6,"res":5}},"40":{"5":{"hp":[44,47,50],"atk":[26,30,33],"spd":[32,35,38],"def":[22,25,29],"res":[17,20,23]}}}},{"name":"Karla: Sword Vassal","shortName":"Karla","title":"Sword Vassal","origin":"Fire Emblem: The Blazing Blade","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2018-06-08","poolDate":"2018-06-08","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Karla Sword Vassal.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Karla Sword Vassal.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Karla Sword Vassal.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Wo Dao","default":"-","rarity":"-"},{"name":"Vassal's Blade","default":5,"rarity":"-"},{"name":"Dragon Gaze","default":5,"rarity":"-"},{"name":"Draconic Aura","default":"-","rarity":"-"},{"name":"Wrath 1","rarity":"-"},{"name":"Wrath 2","rarity":"-"},{"name":"Wrath 3","rarity":"-"},{"name":"Even Spd Wave 1","rarity":"-"},{"name":"Even Spd Wave 2","rarity":"-"},{"name":"Even Spd Wave 3","rarity":"-"}],"growthPoints":{"hp":7,"atk":9,"spd":10,"def":4,"res":3},"stats":{"1":{"5":{"hp":18,"atk":7,"spd":10,"def":6,"res":7}},"40":{"5":{"hp":[39,42,45],"atk":[32,35,38],"spd":[37,40,44],"def":[20,23,26],"res":[19,22,25]}}}},{"name":"Katarina: Wayward One","shortName":"Katarina","title":"Wayward One","origin":"Fire Emblem: New Mystery of the Emblem","weaponType":"Red Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-06-14","poolDate":"2017-06-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Katarina Wayward One.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Katarina Wayward One.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Katarina Wayward One.png"}},"skills":[{"name":"Fire","default":"-","rarity":"-"},{"name":"Elfire","default":"-","rarity":"-"},{"name":"Rauðrowl","default":"-","rarity":"-"},{"name":"Rauðrowl+","default":5,"rarity":"-"},{"name":"Chilling Wind","default":5,"rarity":"-"},{"name":"Glacies","default":"-","rarity":5},{"name":"Death Blow 1","rarity":"-"},{"name":"Swift Sparrow 1","rarity":"-"},{"name":"Swift Sparrow 2","rarity":5},{"name":"Atk Ploy 1","rarity":"-"},{"name":"Atk Ploy 2","rarity":"-"},{"name":"Atk Ploy 3","rarity":5}],"growthPoints":{"hp":4,"atk":8,"spd":8,"def":1,"res":7},"stats":{"1":{"5":{"hp":17,"atk":6,"spd":8,"def":5,"res":8}},"40":{"5":{"hp":[31,34,37],"atk":[29,32,35],"spd":[31,34,37],"def":[12,15,19],"res":[29,32,35]}}}},{"name":"Kaze: Easygoing Ninja","shortName":"Kaze","title":"Easygoing Ninja","origin":"Fire Emblem Fates","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"3-4","releaseDate":"2018-05-02","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Kaze Easygoing Ninja.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Kaze Easygoing Ninja.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Kaze Easygoing Ninja.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":3,"rarity":"-"},{"name":"Barb Shuriken","default":4,"rarity":3},{"name":"Barb Shuriken+","default":"-","rarity":5},{"name":"Chilling Wind","default":4,"rarity":3},{"name":"Iceberg","default":"-","rarity":4},{"name":"Poison Strike 1","rarity":3},{"name":"Poison Strike 2","rarity":4},{"name":"Poison Strike 3","rarity":5},{"name":"Atk Smoke 1","rarity":"-"},{"name":"Atk Smoke 2","rarity":3},{"name":"Atk Smoke 3","rarity":4}],"growthPoints":{"hp":4,"atk":7,"spd":8,"def":2,"res":8},"stats":{"1":{"3":{"hp":16,"atk":5,"spd":9,"def":3,"res":7},"4":{"hp":16,"atk":5,"spd":10,"def":3,"res":8},"5":{"hp":17,"atk":6,"spd":10,"def":4,"res":8}},"40":{"3":{"hp":[28,31,34],"atk":[23,26,29],"spd":[29,32,35],"def":[11,14,17],"res":[27,30,33]},"4":{"hp":[29,32,35],"atk":[24,27,30],"spd":[31,34,37],"def":[12,15,18],"res":[29,32,35]},"5":{"hp":[31,34,37],"atk":[27,30,33],"spd":[33,36,39],"def":[13,17,20],"res":[31,34,37]}}}},{"name":"Klein: Silver Nobleman","shortName":"Klein","title":"Silver Nobleman","origin":"Fire Emblem: The Binding Blade","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-27","poolDate":"2017-03-14","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Klein Silver Nobleman.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Klein Silver Nobleman.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Klein Silver Nobleman.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":3,"rarity":"-"},{"name":"Brave Bow","default":4,"rarity":3},{"name":"Brave Bow+","default":5,"rarity":5},{"name":"Chilling Wind","default":4,"rarity":3},{"name":"Glacies","default":"-","rarity":4},{"name":"Death Blow 1","rarity":"-"},{"name":"Death Blow 2","rarity":3},{"name":"Death Blow 3","rarity":4},{"name":"Quick Riposte 1","rarity":3},{"name":"Quick Riposte 2","rarity":4},{"name":"Quick Riposte 3","rarity":5}],"growthPoints":{"hp":6,"atk":6,"spd":8,"def":3,"res":5},"stats":{"1":{"3":{"hp":17,"atk":8,"spd":6,"def":4,"res":4},"4":{"hp":17,"atk":9,"spd":7,"def":4,"res":4},"5":{"hp":18,"atk":9,"spd":7,"def":5,"res":5}},"40":{"3":{"hp":[33,36,39],"atk":[24,27,30],"spd":[26,29,32],"def":[14,17,20],"res":[18,21,24]},"4":{"hp":[34,37,40],"atk":[26,29,32],"spd":[28,31,34],"def":[15,18,21],"res":[19,22,25]},"5":{"hp":[36,40,43],"atk":[27,31,34],"spd":[30,33,36],"def":[17,20,23],"res":[21,24,28]}}}},{"name":"L'Arachel: Princess of Light","shortName":"L'Arachel","title":"Princess of Light","origin":"Fire Emblem: The Sacred Stones","weaponType":"Blue Tome","moveType":"Cavalry","rarities":"4-5","releaseDate":"2018-01-25","poolDate":"2018-02-09","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_LArachel Princess of Light.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_LArachel Princess of Light.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_LArachel Princess of Light.png"}},"skills":[{"name":"Light","default":"-","rarity":"-"},{"name":"Ellight","default":"-","rarity":"-"},{"name":"Shine","default":4,"rarity":"-"},{"name":"Ivaldi","default":5,"rarity":5},{"name":"Rising Light","default":4,"rarity":"-"},{"name":"Growing Light","default":"-","rarity":4},{"name":"Renewal 1","rarity":"-"},{"name":"Renewal 2","rarity":"-"},{"name":"Renewal 3","rarity":4},{"name":"Res Tactic 1","rarity":"-"},{"name":"Res Tactic 2","rarity":4},{"name":"Res Tactic 3","rarity":5}],"growthPoints":{"hp":4,"atk":7,"spd":7,"def":2,"res":7},"stats":{"1":{"4":{"hp":15,"atk":9,"spd":7,"def":3,"res":6},"5":{"hp":16,"atk":9,"spd":7,"def":4,"res":7}},"40":{"4":{"hp":[28,31,34],"atk":[28,31,34],"spd":[26,29,32],"def":[12,15,18],"res":[25,28,31]},"5":{"hp":[30,33,36],"atk":[30,33,36],"spd":[28,31,34],"def":[13,17,20],"res":[28,31,34]}}}},{"name":"Lachesis: Lionheart's Sister","shortName":"Lachesis","title":"Lionheart's Sister","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-27","poolDate":"2017-03-14","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lachesis Lionhearts Sister.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lachesis Lionhearts Sister.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lachesis Lionhearts Sister.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Absorb","default":"-","rarity":3},{"name":"Absorb+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Mend","default":3,"rarity":"-"},{"name":"Physic","default":5,"rarity":4},{"name":"Imbue","default":4,"rarity":"-"},{"name":"Solid-Earth Balm","default":5,"rarity":3},{"name":"Spur Res 1","rarity":3},{"name":"Spur Res 2","rarity":4},{"name":"Spur Res 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":4,"def":4,"res":6},"stats":{"1":{"3":{"hp":16,"atk":5,"spd":7,"def":4,"res":7},"4":{"hp":16,"atk":5,"spd":8,"def":4,"res":8},"5":{"hp":17,"atk":6,"spd":8,"def":5,"res":8}},"40":{"3":{"hp":[32,35,38],"atk":[25,28,31],"spd":[19,22,25],"def":[16,19,22],"res":[23,26,29]},"4":{"hp":[33,36,39],"atk":[26,29,32],"spd":[21,24,27],"def":[17,20,23],"res":[25,28,31]},"5":{"hp":[35,39,42],"atk":[29,32,35],"spd":[22,25,28],"def":[19,22,25],"res":[26,30,33]}}}},{"name":"Laslow: Dancing Duelist","shortName":"Laslow","title":"Dancing Duelist","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Laslow Dancing Duelist.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Laslow Dancing Duelist.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Laslow Dancing Duelist.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Silver Sword+","default":5,"rarity":5},{"name":"Daylight","default":4,"rarity":3},{"name":"Noontime","default":"-","rarity":4},{"name":"Axebreaker 1","rarity":"-"},{"name":"Axebreaker 2","rarity":3},{"name":"Axebreaker 3","rarity":4},{"name":"Hone Spd 1","rarity":3},{"name":"Hone Spd 2","rarity":4},{"name":"Hone Spd 3","rarity":5}],"growthPoints":{"hp":7,"atk":8,"spd":5,"def":7,"res":4},"stats":{"1":{"3":{"hp":19,"atk":8,"spd":6,"def":5,"res":4},"4":{"hp":19,"atk":9,"spd":7,"def":5,"res":4},"5":{"hp":20,"atk":9,"spd":7,"def":6,"res":5}},"40":{"3":{"hp":[37,40,43],"atk":[28,31,34],"spd":[20,23,26],"def":[23,26,29],"res":[16,19,22]},"4":{"hp":[38,41,44],"atk":[30,33,36],"spd":[22,25,28],"def":[24,27,30],"res":[17,20,23]},"5":{"hp":[41,44,47],"atk":[32,35,38],"spd":[23,26,30],"def":[27,30,33],"res":[19,22,25]}}}},{"name":"Legault: The Hurricane","shortName":"Legault","title":"The Hurricane","origin":"Fire Emblem: The Blazing Blade","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"5","releaseDate":"2018-06-08","poolDate":"2018-06-08","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Legault The Hurricane.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Legault The Hurricane.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Legault The Hurricane.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":"-","rarity":"-"},{"name":"The Cleaner","default":"-","rarity":"-"},{"name":"The Cleaner+","default":5,"rarity":"-"},{"name":"Night Sky","default":5,"rarity":"-"},{"name":"Glimmer","default":"-","rarity":"-"},{"name":"Darting Blow 1","rarity":"-"},{"name":"Swift Strike 1","rarity":"-"},{"name":"Swift Strike 2","rarity":"-"},{"name":"Atk Tactic 1","rarity":"-"},{"name":"Atk Tactic 2","rarity":"-"},{"name":"Atk Tactic 3","rarity":"-"}],"growthPoints":{"hp":6,"atk":7,"spd":9,"def":4,"res":3},"stats":{"1":{"5":{"hp":17,"atk":7,"spd":10,"def":7,"res":4}},"40":{"5":{"hp":[35,39,42],"atk":[28,31,34],"spd":[35,38,41],"def":[21,24,27],"res":[16,19,22]}}}},{"name":"Legion: Masked Maniac","shortName":"Legion","title":"Masked Maniac","origin":"Fire Emblem: New Mystery of the Emblem","weaponType":"Green Axe","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-06-16","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Legion Masked Maniac.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Legion Masked Maniac.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Legion Masked Maniac.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Legion's Axe","default":4,"rarity":3},{"name":"Legion's Axe+","default":"-","rarity":5},{"name":"Retribution","default":4,"rarity":3},{"name":"Reprisal","default":"-","rarity":4},{"name":"Fury 1","rarity":3},{"name":"Fury 2","rarity":4},{"name":"Fury 3","rarity":5},{"name":"Obstruct 1","rarity":"-"},{"name":"Obstruct 2","rarity":3},{"name":"Obstruct 3","rarity":4}],"growthPoints":{"hp":8,"atk":8,"spd":8,"def":4,"res":3},"stats":{"1":{"3":{"hp":19,"atk":9,"spd":8,"def":4,"res":2},"4":{"hp":19,"atk":10,"spd":9,"def":4,"res":2},"5":{"hp":20,"atk":10,"spd":9,"def":5,"res":3}},"40":{"3":{"hp":[39,42,45],"atk":[29,32,35],"spd":[28,31,34],"def":[16,19,22],"res":[12,15,18]},"4":{"hp":[40,43,46],"atk":[31,34,37],"spd":[30,33,36],"def":[17,20,23],"res":[13,16,19]},"5":{"hp":[43,46,49],"atk":[33,36,39],"spd":[32,35,38],"def":[19,22,25],"res":[15,18,21]}}}},{"name":"Leif: Prince of Leonster","shortName":"Leif","title":"Prince of Leonster","origin":"Fire Emblem: Thracia 776","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2018-04-11","poolDate":"2018-04-24","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Leif Prince of Leonster.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Leif Prince of Leonster.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Leif Prince of Leonster.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Light Brand","default":5,"rarity":"-"},{"name":"Rising Light","default":5,"rarity":"-"},{"name":"Blazing Light","default":"-","rarity":5},{"name":"Armored Blow 1","rarity":"-"},{"name":"Steady Blow 1","rarity":"-"},{"name":"Steady Blow 2","rarity":5},{"name":"S Drink","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Drive Atk 1","rarity":"-"},{"name":"Drive Atk 2","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":9,"def":6,"res":4},"stats":{"1":{"5":{"hp":18,"atk":6,"spd":10,"def":8,"res":6}},"40":{"5":{"hp":[36,40,43],"atk":[29,32,35],"spd":[35,38,41],"def":[26,30,33],"res":[20,23,26]}}}},{"name":"Lene: Yearning Dancer","shortName":"Lene","title":"Yearning Dancer","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2018-05-10","poolDate":"2018-05-21","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lene Yearning Dancer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lene Yearning Dancer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lene Yearning Dancer.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Safeguard","default":"-","rarity":"-"},{"name":"Safeguard+","default":5,"rarity":"-"},{"name":"Dance","default":5,"rarity":"-"},{"name":"Gale Dance 1","rarity":"-"},{"name":"Firestorm Dance 1","rarity":"-"},{"name":"Firestorm Dance 2","rarity":5},{"name":"Sword Valor 1","rarity":"-"},{"name":"Sword Valor 2","rarity":"-"},{"name":"Sword Valor 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":9,"def":5,"res":6},"stats":{"1":{"5":{"hp":16,"atk":6,"spd":7,"def":4,"res":6}},"40":{"5":{"hp":[32,35,39],"atk":[24,28,31],"spd":[32,35,38],"def":[20,23,27],"res":[24,28,31]}}}},{"name":"Leo: Seashore's Prince","shortName":"Leo","title":"Seashore's Prince","origin":"Fire Emblem Fates","weaponType":"Red Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-07-28","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Leo Seashores Prince.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Leo Seashores Prince.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Leo Seashores Prince.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":"-","rarity":"-"},{"name":"Tomato Tome","default":"-","rarity":"-"},{"name":"Tomato Tome+","default":5,"rarity":"-"},{"name":"Chilling Wind","default":5,"rarity":"-"},{"name":"Iceberg","default":"-","rarity":5},{"name":"Seal Res 1","rarity":"-"},{"name":"Seal Res 2","rarity":"-"},{"name":"Seal Res 3","rarity":5},{"name":"Atk Ploy 1","rarity":"-"},{"name":"Atk Ploy 2","rarity":"-"},{"name":"Atk Ploy 3","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":6,"def":1,"res":9},"stats":{"1":{"5":{"hp":18,"atk":8,"spd":5,"def":6,"res":7}},"40":{"5":{"hp":[34,37,41],"atk":[29,32,35],"spd":[23,27,30],"def":[13,16,20],"res":[32,35,38]}}}},{"name":"Leo: Sorcerous Prince","shortName":"Leo","title":"Sorcerous Prince","origin":"Fire Emblem Fates","weaponType":"Red Tome","moveType":"Cavalry","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Leo Sorcerous Prince.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Leo Sorcerous Prince.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Leo Sorcerous Prince.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":"-","rarity":"-"},{"name":"Fenrir","default":"-","rarity":"-"},{"name":"Brynhildr","default":5,"rarity":"-"},{"name":"Rising Light","default":5,"rarity":"-"},{"name":"Blazing Light","default":"-","rarity":5},{"name":"Quick Riposte 1","rarity":"-"},{"name":"Quick Riposte 2","rarity":"-"},{"name":"Quick Riposte 3","rarity":5},{"name":"Savage Blow 1","rarity":"-"},{"name":"Savage Blow 2","rarity":"-"},{"name":"Savage Blow 3","rarity":5}],"growthPoints":{"hp":6,"atk":6,"spd":4,"def":5,"res":6},"stats":{"1":{"5":{"hp":17,"atk":7,"spd":5,"def":6,"res":8}},"40":{"5":{"hp":[35,39,42],"atk":[25,29,32],"spd":[19,22,25],"def":[22,25,29],"res":[26,30,33]}}}},{"name":"Leon: True of Heart","shortName":"Leon","title":"True of Heart","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-07-13","poolDate":"2017-07-28","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Leon True of Heart.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Leon True of Heart.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Leon True of Heart.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":3,"rarity":"-"},{"name":"Slaying Bow","default":4,"rarity":3},{"name":"Slaying Bow+","default":5,"rarity":5},{"name":"Glowing Ember","default":4,"rarity":3},{"name":"Ignis","default":"-","rarity":4},{"name":"Speed +1","rarity":"-"},{"name":"Speed +2","rarity":3},{"name":"Speed +3","rarity":4},{"name":"Guard 1","rarity":3},{"name":"Guard 2","rarity":4},{"name":"Guard 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":7,"def":6,"res":1},"stats":{"1":{"3":{"hp":16,"atk":7,"spd":5,"def":7,"res":4},"4":{"hp":16,"atk":8,"spd":5,"def":8,"res":4},"5":{"hp":17,"atk":8,"spd":6,"def":8,"res":5}},"40":{"3":{"hp":[32,35,38],"atk":[27,30,33],"spd":[23,26,29],"def":[23,26,29],"res":[10,13,16]},"4":{"hp":[33,36,39],"atk":[29,32,35],"spd":[24,27,30],"def":[25,28,31],"res":[11,14,17]},"5":{"hp":[35,39,42],"atk":[31,34,37],"spd":[27,30,33],"def":[26,30,33],"res":[12,15,19]}}}},{"name":"Lilina: Blush of Youth","shortName":"Lilina","title":"Blush of Youth","origin":"Fire Emblem: The Binding Blade","weaponType":"Green Tome","moveType":"Cavalry","rarities":"5","releaseDate":"2018-02-09","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lilina Blush of Youth.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lilina Blush of Youth.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lilina Blush of Youth.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Green Gift","default":"-","rarity":"-"},{"name":"Green Gift+","default":5,"rarity":"-"},{"name":"Rising Flame","default":5,"rarity":"-"},{"name":"Blazing Flame","default":"-","rarity":5},{"name":"Attack +1","rarity":"-"},{"name":"HP/Atk 1","rarity":"-"},{"name":"HP/Atk 2","rarity":5},{"name":"Atk Tactic 1","rarity":"-"},{"name":"Atk Tactic 2","rarity":"-"},{"name":"Atk Tactic 3","rarity":5}],"growthPoints":{"hp":4,"atk":8,"spd":6,"def":3,"res":6},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":8,"def":5,"res":4}},"40":{"5":{"hp":[31,34,37],"atk":[32,35,38],"spd":[26,30,33],"def":[17,20,23],"res":[22,26,29]}}}},{"name":"Lilina: Delightful Noble","shortName":"Lilina","title":"Delightful Noble","origin":"Fire Emblem: The Binding Blade","weaponType":"Red Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lilina Delightful Noble.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lilina Delightful Noble.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lilina Delightful Noble.png"}},"skills":[{"name":"Fire","default":"-","rarity":"-"},{"name":"Elfire","default":3,"rarity":"-"},{"name":"Bolganone","default":4,"rarity":3},{"name":"Bolganone+","default":5,"rarity":5},{"name":"Forblaze","default":"-","rarity":5},{"name":"Rising Flame","default":4,"rarity":3},{"name":"Growing Flame","default":"-","rarity":4},{"name":"Attack +1","rarity":3},{"name":"Attack +2","rarity":4},{"name":"Attack +3","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk 2","rarity":3},{"name":"Spur Atk 3","rarity":4}],"growthPoints":{"hp":5,"atk":9,"spd":5,"def":3,"res":6},"stats":{"1":{"3":{"hp":15,"atk":8,"spd":5,"def":3,"res":8},"4":{"hp":15,"atk":9,"spd":5,"def":3,"res":9},"5":{"hp":16,"atk":9,"spd":6,"def":4,"res":9}},"40":{"3":{"hp":[29,32,35],"atk":[30,33,36],"spd":[19,22,25],"def":[13,16,19],"res":[24,27,30]},"4":{"hp":[30,33,36],"atk":[32,35,38],"spd":[20,23,26],"def":[14,17,20],"res":[26,29,32]},"5":{"hp":[32,35,39],"atk":[34,37,40],"spd":[22,25,29],"def":[16,19,22],"res":[27,31,34]}}}},{"name":"Linde: Light Mage","shortName":"Linde","title":"Light Mage","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Blue Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Linde Light Mage.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Linde Light Mage.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Linde Light Mage.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Thoron","default":"-","rarity":"-"},{"name":"Aura","default":5,"rarity":"-"},{"name":"Ardent Sacrifice","default":5,"rarity":"-"},{"name":"Speed +1","rarity":"-"},{"name":"Speed +2","rarity":"-"},{"name":"Speed +3","rarity":5},{"name":"Fortify Res 1","rarity":"-"},{"name":"Fortify Res 2","rarity":"-"},{"name":"Fortify Res 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":1,"res":6},"stats":{"1":{"5":{"hp":16,"atk":9,"spd":10,"def":4,"res":5}},"40":{"5":{"hp":[32,35,39],"atk":[32,35,38],"spd":[33,36,39],"def":[11,14,18],"res":[23,27,30]}}}},{"name":"Linus: Mad Dog","shortName":"Linus","title":"Mad Dog","origin":"Fire Emblem: The Blazing Blade","weaponType":"Green Axe","moveType":"Infantry","rarities":"3-4","releaseDate":"2018-06-12","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Linus Mad Dog.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Linus Mad Dog.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Linus Mad Dog.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Silver Axe","default":4,"rarity":"-"},{"name":"Basilikos","default":5,"rarity":5},{"name":"New Moon","default":"-","rarity":"-"},{"name":"Luna","default":"-","rarity":4},{"name":"Brazen Atk/Spd 1","rarity":"-"},{"name":"Brazen Atk/Spd 2","rarity":4},{"name":"Brazen Atk/Spd 3","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Drive Def 1","rarity":"-"},{"name":"Drive Def 2","rarity":4}],"growthPoints":{"hp":7,"atk":9,"spd":7,"def":7,"res":3},"stats":{"1":{"3":{"hp":17,"atk":8,"spd":8,"def":7,"res":3},"4":{"hp":17,"atk":9,"spd":9,"def":7,"res":3},"5":{"hp":18,"atk":9,"spd":9,"def":8,"res":4}},"40":{"3":{"hp":[35,38,41],"atk":[30,33,36],"spd":[26,29,32],"def":[25,28,31],"res":[13,16,19]},"4":{"hp":[36,39,42],"atk":[32,35,38],"spd":[28,31,34],"def":[26,29,32],"res":[14,17,20]},"5":{"hp":[39,42,45],"atk":[34,37,40],"spd":[30,33,36],"def":[29,32,35],"res":[16,19,22]}}}},{"name":"Lissa: Pure Joy","shortName":"Lissa","title":"Pure Joy","origin":"Fire Emblem Awakening","weaponType":"Green Axe","moveType":"Armored","rarities":"5","releaseDate":"2017-12-18","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lissa Pure Joy.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lissa Pure Joy.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lissa Pure Joy.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Handbell","default":"-","rarity":"-"},{"name":"Handbell+","default":5,"rarity":"-"},{"name":"Glowing Ember","default":5,"rarity":"-"},{"name":"Bonfire","default":"-","rarity":5},{"name":"Bold Fighter 1","rarity":"-"},{"name":"Bold Fighter 2","rarity":"-"},{"name":"Bold Fighter 3","rarity":5},{"name":"Fortify Def 1","rarity":"-"},{"name":"Fortify Def 2","rarity":"-"},{"name":"Fortify Armor","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":6,"def":8,"res":8},"stats":{"1":{"5":{"hp":21,"atk":9,"spd":8,"def":9,"res":8}},"40":{"5":{"hp":[39,43,46],"atk":[30,33,36],"spd":[26,30,33],"def":[32,35,38],"res":[31,34,37]}}}},{"name":"Lissa: Sprightly Cleric","shortName":"Lissa","title":"Sprightly Cleric","origin":"Fire Emblem Awakening","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lissa Sprightly Cleric.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lissa Sprightly Cleric.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lissa Sprightly Cleric.png"}},"skills":[{"name":"Assault","default":"-","rarity":1},{"name":"Gravity","default":"-","rarity":3},{"name":"Gravity+","default":"-","rarity":5},{"name":"Heal","default":1,"rarity":"-"},{"name":"Reconcile","default":3,"rarity":2},{"name":"Rehabilitate","default":5,"rarity":4},{"name":"Imbue","default":4,"rarity":2},{"name":"Kindled-Fire Balm","default":5,"rarity":3},{"name":"Renewal 1","rarity":3},{"name":"Renewal 2","rarity":4},{"name":"Renewal 3","rarity":5}],"growthPoints":{"hp":6,"atk":5,"spd":5,"def":6,"res":6},"stats":{"1":{"1":{"hp":15,"atk":5,"spd":4,"def":4,"res":6},"2":{"hp":15,"atk":6,"spd":4,"def":4,"res":7},"3":{"hp":16,"atk":6,"spd":5,"def":5,"res":7},"4":{"hp":16,"atk":7,"spd":5,"def":5,"res":8},"5":{"hp":17,"atk":7,"spd":6,"def":6,"res":8}},"40":{"1":{"hp":[28,31,34],"atk":[17,19,22],"spd":[16,18,21],"def":[17,20,23],"res":[19,22,25]},"2":{"hp":[29,32,35],"atk":[19,21,24],"spd":[17,19,22],"def":[18,21,24],"res":[21,24,27]},"3":{"hp":[32,35,38],"atk":[20,23,26],"spd":[19,22,25],"def":[21,24,27],"res":[23,26,29]},"4":{"hp":[33,36,39],"atk":[22,25,28],"spd":[20,23,26],"def":[22,25,28],"res":[25,28,31]},"5":{"hp":[35,39,42],"atk":[23,26,30],"spd":[22,25,29],"def":[24,28,31],"res":[26,30,33]}}}},{"name":"Lloyd: White Wolf","shortName":"Lloyd","title":"White Wolf","origin":"Fire Emblem: The Blazing Blade","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-05-19","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lloyd White Wolf.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lloyd White Wolf.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lloyd White Wolf.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Regal Blade","default":"-","rarity":5},{"name":"Chilling Wind","default":4,"rarity":3},{"name":"Iceberg","default":"-","rarity":4},{"name":"Pass 1","rarity":"-"},{"name":"Pass 2","rarity":3},{"name":"Pass 3","rarity":4},{"name":"Threaten Atk 1","rarity":3},{"name":"Threaten Atk 2","rarity":4},{"name":"Threaten Atk 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":8,"def":3,"res":6},"stats":{"1":{"3":{"hp":16,"atk":7,"spd":8,"def":4,"res":7},"4":{"hp":16,"atk":8,"spd":9,"def":4,"res":7},"5":{"hp":17,"atk":8,"spd":9,"def":5,"res":8}},"40":{"3":{"hp":[34,37,40],"atk":[25,28,31],"spd":[28,31,34],"def":[14,17,20],"res":[23,26,29]},"4":{"hp":[35,38,41],"atk":[27,30,33],"spd":[30,33,36],"def":[15,18,21],"res":[24,27,30]},"5":{"hp":[38,41,44],"atk":[29,32,35],"spd":[32,35,38],"def":[17,20,23],"res":[26,30,33]}}}},{"name":"Lon'qu: Solitary Blade","shortName":"Lon'qu","title":"Solitary Blade","origin":"Fire Emblem Awakening","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lonqu Solitary Blade.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lonqu Solitary Blade.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lonqu Solitary Blade.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Killing Edge","default":4,"rarity":3},{"name":"Killing Edge+","default":5,"rarity":5},{"name":"Night Sky","default":4,"rarity":3},{"name":"Glimmer","default":"-","rarity":4},{"name":"Speed +1","rarity":3},{"name":"Speed +2","rarity":4},{"name":"Speed +3","rarity":5},{"name":"Vantage 1","rarity":"-"},{"name":"Vantage 2","rarity":3},{"name":"Vantage 3","rarity":4}],"growthPoints":{"hp":8,"atk":6,"spd":9,"def":4,"res":4},"stats":{"1":{"3":{"hp":18,"atk":6,"spd":10,"def":4,"res":4},"4":{"hp":18,"atk":7,"spd":11,"def":4,"res":4},"5":{"hp":19,"atk":7,"spd":11,"def":5,"res":5}},"40":{"3":{"hp":[38,41,44],"atk":[22,25,28],"spd":[32,35,38],"def":[16,19,22],"res":[16,19,22]},"4":{"hp":[39,42,45],"atk":[24,27,30],"spd":[34,37,40],"def":[17,20,23],"res":[17,20,23]},"5":{"hp":[42,45,48],"atk":[25,29,32],"spd":[36,39,42],"def":[19,22,25],"res":[19,22,25]}}}},{"name":"Lucina: Brave Princess","shortName":"Lucina","title":"Brave Princess","origin":"Fire Emblem Awakening","weaponType":"Blue Lance","moveType":"Infantry","rarities":"5","releaseDate":"2017-08-31","poolDate":"2017-09-15","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lucina Brave Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lucina Brave Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lucina Brave Princess.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Silver Lance","default":"-","rarity":"-"},{"name":"Geirskögul","default":5,"rarity":"-"},{"name":"Daylight","default":5,"rarity":"-"},{"name":"Sol","default":"-","rarity":5},{"name":"Aether","default":"-","rarity":5},{"name":"Armored Blow 1","rarity":"-"},{"name":"Sturdy Blow 1","rarity":"-"},{"name":"Sturdy Blow 2","rarity":5},{"name":"Spur Spd 1","rarity":"-"},{"name":"Drive Spd 1","rarity":"-"},{"name":"Drive Spd 2","rarity":5}],"growthPoints":{"hp":7,"atk":8,"spd":8,"def":5,"res":3},"stats":{"1":{"5":{"hp":17,"atk":8,"spd":10,"def":8,"res":4}},"40":{"5":{"hp":[38,41,44],"atk":[31,34,37],"spd":[33,36,39],"def":[24,27,31],"res":[16,19,22]}}}},{"name":"Lucina: Future Witness","shortName":"Lucina","title":"Future Witness","origin":"Fire Emblem Awakening","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lucina Future Witness.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lucina Future Witness.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lucina Future Witness.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Falchion","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Luna","default":"-","rarity":5},{"name":"Aether","default":"-","rarity":5},{"name":"Defiant Spd 1","rarity":"-"},{"name":"Defiant Spd 2","rarity":"-"},{"name":"Defiant Spd 3","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk 2","rarity":"-"},{"name":"Spur Atk 3","rarity":5}],"growthPoints":{"hp":7,"atk":8,"spd":8,"def":5,"res":3},"stats":{"1":{"5":{"hp":19,"atk":8,"spd":10,"def":6,"res":4}},"40":{"5":{"hp":[40,43,46],"atk":[31,34,37],"spd":[33,36,39],"def":[22,25,29],"res":[16,19,22]}}}},{"name":"Lucina: Spring Exalt","shortName":"Lucina","title":"Spring Exalt","origin":"Fire Emblem Awakening","weaponType":"Blue Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-03-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lucina Spring Exalt.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lucina Spring Exalt.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lucina Spring Exalt.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Blue Egg","default":"-","rarity":"-"},{"name":"Blue Egg+","default":5,"rarity":"-"},{"name":"Rally Speed","default":5,"rarity":"-"},{"name":"Darting Blow 1","rarity":"-"},{"name":"Swift Sparrow 1","rarity":"-"},{"name":"Swift Sparrow 2","rarity":5},{"name":"Seal Res 1","rarity":"-"},{"name":"Seal Res 2","rarity":"-"},{"name":"Seal Res 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":4,"res":5},"stats":{"1":{"5":{"hp":16,"atk":7,"spd":10,"def":5,"res":6}},"40":{"5":{"hp":[32,35,39],"atk":[25,29,32],"spd":[33,36,39],"def":[19,22,25],"res":[22,25,29]}}}},{"name":"Lucius: The Light","shortName":"Lucius","title":"The Light","origin":"Fire Emblem: The Blazing Blade","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-03-14","poolDate":"2017-03-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lucius The Light.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lucius The Light.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lucius The Light.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Pain","default":"-","rarity":3},{"name":"Pain+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Reconcile","default":3,"rarity":"-"},{"name":"Martyr","default":5,"rarity":4},{"name":"Imbue","default":4,"rarity":"-"},{"name":"Miracle","default":5,"rarity":3},{"name":"HP +3","rarity":3},{"name":"HP +4","rarity":4},{"name":"HP +5","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":6,"def":1,"res":8},"stats":{"1":{"3":{"hp":17,"atk":5,"spd":7,"def":2,"res":8},"4":{"hp":17,"atk":5,"spd":8,"def":2,"res":9},"5":{"hp":18,"atk":6,"spd":8,"def":3,"res":9}},"40":{"3":{"hp":[31,34,37],"atk":[25,28,31],"spd":[23,26,29],"def":[8,11,14],"res":[28,31,34]},"4":{"hp":[32,35,38],"atk":[26,29,32],"spd":[25,28,31],"def":[9,12,15],"res":[30,33,36]},"5":{"hp":[34,37,41],"atk":[29,32,35],"spd":[26,30,33],"def":[10,13,17],"res":[32,35,38]}}}},{"name":"Lukas: Sharp Soldier","shortName":"Lukas","title":"Sharp Soldier","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Blue Lance","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-04-14","poolDate":"2017-04-26","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lukas Sharp Soldier.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lukas Sharp Soldier.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lukas Sharp Soldier.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Killer Lance","default":4,"rarity":3},{"name":"Killer Lance+","default":5,"rarity":5},{"name":"Holy Vestments","default":4,"rarity":3},{"name":"Sacred Cowl","default":"-","rarity":4},{"name":"Fortress Def 1","rarity":3},{"name":"Fortress Def 2","rarity":4},{"name":"Fortress Def 3","rarity":5},{"name":"Obstruct 1","rarity":"-"},{"name":"Obstruct 2","rarity":3},{"name":"Obstruct 3","rarity":4}],"growthPoints":{"hp":8,"atk":8,"spd":4,"def":9,"res":2},"stats":{"1":{"3":{"hp":18,"atk":8,"spd":4,"def":9,"res":3},"4":{"hp":18,"atk":9,"spd":4,"def":10,"res":3},"5":{"hp":19,"atk":9,"spd":5,"def":10,"res":4}},"40":{"3":{"hp":[38,41,44],"atk":[28,31,34],"spd":[16,19,22],"def":[31,34,37],"res":[11,14,17]},"4":{"hp":[39,42,45],"atk":[30,33,36],"spd":[17,20,23],"def":[33,36,39],"res":[12,15,18]},"5":{"hp":[42,45,48],"atk":[32,35,38],"spd":[19,22,25],"def":[35,38,41],"res":[13,17,20]}}}},{"name":"Luke: Rowdy Squire","shortName":"Luke","title":"Rowdy Squire","origin":"Fire Emblem: New Mystery of the Emblem","weaponType":"Red Sword","moveType":"Cavalry","rarities":"5","releaseDate":"2017-06-14","poolDate":"2017-06-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Luke Rowdy Squire.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Luke Rowdy Squire.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Luke Rowdy Squire.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Brave Sword","default":"-","rarity":"-"},{"name":"Brave Sword+","default":5,"rarity":"-"},{"name":"Glowing Ember","default":5,"rarity":"-"},{"name":"Bonfire","default":"-","rarity":5},{"name":"Fire Boost 1","rarity":"-"},{"name":"Fire Boost 2","rarity":"-"},{"name":"Fire Boost 3","rarity":5},{"name":"Panic Ploy 1","rarity":"-"},{"name":"Panic Ploy 2","rarity":"-"},{"name":"Panic Ploy 3","rarity":5}],"growthPoints":{"hp":7,"atk":8,"spd":6,"def":6,"res":3},"stats":{"1":{"5":{"hp":19,"atk":8,"spd":6,"def":8,"res":5}},"40":{"5":{"hp":[40,43,46],"atk":[31,34,37],"spd":[24,28,31],"def":[26,30,33],"res":[17,20,23]}}}},{"name":"Lute: Prodigy","shortName":"Lute","title":"Prodigy","origin":"Fire Emblem: The Sacred Stones","weaponType":"Blue Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-11-15","poolDate":"2017-11-28","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lute Prodigy.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lute Prodigy.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lute Prodigy.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Thoron","default":"-","rarity":"-"},{"name":"Weirding Tome","default":5,"rarity":"-"},{"name":"Rally Attack","default":5,"rarity":"-"},{"name":"Rally Atk/Res","default":"-","rarity":5},{"name":"Resistance +1","rarity":"-"},{"name":"HP/Res 1","rarity":"-"},{"name":"HP/Res 2","rarity":5},{"name":"Res Ploy 1","rarity":"-"},{"name":"Res Ploy 2","rarity":"-"},{"name":"Res Ploy 3","rarity":5}],"growthPoints":{"hp":4,"atk":8,"spd":7,"def":2,"res":8},"stats":{"1":{"5":{"hp":16,"atk":10,"spd":8,"def":3,"res":8}},"40":{"5":{"hp":[30,33,36],"atk":[33,36,39],"spd":[29,32,35],"def":[12,16,19],"res":[31,34,37]}}}},{"name":"Lyn: Brave Lady","shortName":"Lyn","title":"Brave Lady","origin":"Fire Emblem: The Blazing Blade","weaponType":"Colorless Bow","moveType":"Cavalry","rarities":"5","releaseDate":"2017-08-31","poolDate":"2017-09-15","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lyn Brave Lady.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lyn Brave Lady.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lyn Brave Lady.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Silver Bow","default":"-","rarity":"-"},{"name":"Mulagir","default":5,"rarity":"-"},{"name":"Dragon Gaze","default":5,"rarity":"-"},{"name":"Draconic Aura","default":"-","rarity":5},{"name":"Death Blow 1","rarity":"-"},{"name":"Swift Sparrow 1","rarity":"-"},{"name":"Swift Sparrow 2","rarity":5},{"name":"Sacae's Blessing","rarity":5},{"name":"Atk Smoke 1","rarity":"-"},{"name":"Atk Smoke 2","rarity":"-"},{"name":"Atk Smoke 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":2,"res":6},"stats":{"1":{"5":{"hp":16,"atk":7,"spd":9,"def":5,"res":6}},"40":{"5":{"hp":[32,35,39],"atk":[30,33,36],"spd":[32,35,38],"def":[14,18,21],"res":[24,28,31]}}}},{"name":"Lyn: Bride of the Plains","shortName":"Lyn","title":"Bride of the Plains","origin":"Fire Emblem: The Blazing Blade","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"5","releaseDate":"2017-05-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lyn Bride of the Plains.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lyn Bride of the Plains.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lyn Bride of the Plains.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Candlelight","default":5,"rarity":"-"},{"name":"Candlelight+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Reconcile","default":"-","rarity":"-"},{"name":"Rehabilitate","default":5,"rarity":"-"},{"name":"Imbue","default":"-","rarity":"-"},{"name":"Swift-Winds Balm","default":5,"rarity":"-"},{"name":"Dazzling Staff 1","rarity":"-"},{"name":"Dazzling Staff 2","rarity":"-"},{"name":"Dazzling Staff 3","rarity":5}],"growthPoints":{"hp":6,"atk":6,"spd":7,"def":4,"res":5},"stats":{"1":{"5":{"hp":17,"atk":6,"spd":10,"def":6,"res":5}},"40":{"5":{"hp":[35,39,42],"atk":[24,28,31],"spd":[31,34,37],"def":[20,23,26],"res":[21,24,28]}}}},{"name":"Lyn: Lady of the Plains","shortName":"Lyn","title":"Lady of the Plains","origin":"Fire Emblem: The Blazing Blade","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lyn Lady of the Plains.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lyn Lady of the Plains.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lyn Lady of the Plains.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Sol Katti","default":5,"rarity":"-"},{"name":"Night Sky","default":5,"rarity":"-"},{"name":"Astra","default":"-","rarity":5},{"name":"Galeforce","default":"-","rarity":5},{"name":"Defiant Atk 1","rarity":"-"},{"name":"Defiant Atk 2","rarity":"-"},{"name":"Defiant Atk 3","rarity":5},{"name":"Spur Spd 1","rarity":"-"},{"name":"Spur Spd 2","rarity":"-"},{"name":"Spur Spd 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":5,"res":7},"stats":{"1":{"5":{"hp":18,"atk":6,"spd":11,"def":7,"res":5}},"40":{"5":{"hp":[34,37,41],"atk":[24,28,31],"spd":[34,37,40],"def":[23,26,30],"res":[26,29,32]}}}},{"name":"Lyn: Lady of the Wind","shortName":"Lyn","title":"Lady of the Wind","origin":"Fire Emblem: The Blazing Blade","weaponType":"Green Bow","moveType":"Infantry","rarities":"5","releaseDate":"2018-05-01","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lyn Lady of the Wind.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lyn Lady of the Wind.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lyn Lady of the Wind.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Silver Bow","default":"-","rarity":"-"},{"name":"Swift Mulagir","default":5,"rarity":"-"},{"name":"Rally Defense","default":5,"rarity":"-"},{"name":"Rally Def/Res","default":"-","rarity":5},{"name":"Laws of Sacae","rarity":5},{"name":"Desperation 1","rarity":"-"},{"name":"Desperation 2","rarity":"-"},{"name":"Desperation 3","rarity":5},{"name":"Spd Tactic 1","rarity":"-"},{"name":"Spd Tactic 2","rarity":"-"},{"name":"Spd Tactic 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":4,"res":6},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":10,"def":4,"res":5}},"40":{"5":{"hp":[33,36,40],"atk":[27,31,34],"spd":[33,36,39],"def":[18,21,24],"res":[23,27,30]}}}},{"name":"Lyn: Wind's Embrace","shortName":"Lyn","title":"Wind's Embrace","origin":"Fire Emblem: The Blazing Blade","weaponType":"Blue Tome","moveType":"Armored","rarities":"5","releaseDate":"2018-02-09","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lyn Winds Embrace.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lyn Winds Embrace.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lyn Winds Embrace.png"}},"skills":[{"name":"Light","default":"-","rarity":"-"},{"name":"Ellight","default":"-","rarity":"-"},{"name":"Blue Gift","default":"-","rarity":"-"},{"name":"Blue Gift+","default":5,"rarity":"-"},{"name":"Ardent Sacrifice","default":5,"rarity":"-"},{"name":"Atk/Spd Bond 1","rarity":"-"},{"name":"Atk/Spd Bond 2","rarity":"-"},{"name":"Atk/Spd Bond 3","rarity":5},{"name":"Guard 1","rarity":"-"},{"name":"Guard 2","rarity":"-"},{"name":"Guard 3","rarity":5},{"name":"Armor March 1","rarity":"-"},{"name":"Armor March 2","rarity":"-"},{"name":"Armor March 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":6,"res":7},"stats":{"1":{"5":{"hp":18,"atk":9,"spd":10,"def":5,"res":10}},"40":{"5":{"hp":[34,37,41],"atk":[27,31,34],"spd":[33,36,39],"def":[23,27,30],"res":[31,34,37]}}}},{"name":"Lyon: Shadow Prince","shortName":"Lyon","title":"Shadow Prince","origin":"Fire Emblem: The Sacred Stones","weaponType":"Red Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2018-01-26","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lyon Shadow Prince.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lyon Shadow Prince.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lyon Shadow Prince.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":3,"rarity":"-"},{"name":"Fenrir","default":4,"rarity":3},{"name":"Naglfar","default":"-","rarity":5},{"name":"Retribution","default":4,"rarity":3},{"name":"Vengeance","default":"-","rarity":4},{"name":"Resistance +1","rarity":3},{"name":"Atk/Res 1","rarity":4},{"name":"Atk/Res 2","rarity":5},{"name":"Spur Res 1","rarity":"-"},{"name":"Drive Res 1","rarity":3},{"name":"Drive Res 2","rarity":4}],"growthPoints":{"hp":6,"atk":7,"spd":4,"def":6,"res":6},"stats":{"1":{"3":{"hp":18,"atk":9,"spd":3,"def":3,"res":7},"4":{"hp":18,"atk":10,"spd":3,"def":3,"res":8},"5":{"hp":19,"atk":10,"spd":4,"def":4,"res":8}},"40":{"3":{"hp":[34,37,40],"atk":[27,30,33],"spd":[15,18,21],"def":[19,22,25],"res":[23,26,29]},"4":{"hp":[35,38,41],"atk":[29,32,35],"spd":[16,19,22],"def":[20,23,26],"res":[25,28,31]},"5":{"hp":[37,41,44],"atk":[31,34,37],"spd":[18,21,24],"def":[22,26,29],"res":[26,30,33]}}}},{"name":"Mae: Bundle of Energy","shortName":"Mae","title":"Bundle of Energy","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Blue Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-05-15","poolDate":"2017-05-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Mae Bundle of Energy.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Mae Bundle of Energy.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Mae Bundle of Energy.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":3,"rarity":"-"},{"name":"Blárowl","default":4,"rarity":3},{"name":"Blárowl+","default":5,"rarity":5},{"name":"Draw Back","default":4,"rarity":3},{"name":"Desperation 1","rarity":3},{"name":"Desperation 2","rarity":4},{"name":"Desperation 3","rarity":5},{"name":"B Tome Exp. 1","rarity":"-"},{"name":"B Tome Exp. 2","rarity":3},{"name":"B Tome Exp. 3","rarity":4}],"growthPoints":{"hp":5,"atk":8,"spd":7,"def":2,"res":6},"stats":{"1":{"3":{"hp":15,"atk":9,"spd":6,"def":2,"res":7},"4":{"hp":15,"atk":10,"spd":6,"def":2,"res":8},"5":{"hp":16,"atk":10,"spd":7,"def":3,"res":8}},"40":{"3":{"hp":[29,32,35],"atk":[29,32,35],"spd":[24,27,30],"def":[10,13,16],"res":[23,26,29]},"4":{"hp":[30,33,36],"atk":[31,34,37],"spd":[25,28,31],"def":[11,14,17],"res":[25,28,31]},"5":{"hp":[32,35,39],"atk":[33,36,39],"spd":[28,31,34],"def":[12,16,19],"res":[26,30,33]}}}},{"name":"Maria: Minerva's Sister","shortName":"Maria","title":"Minerva's Sister","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Maria Minervas Sister.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Maria Minervas Sister.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Maria Minervas Sister.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Panic","default":"-","rarity":3},{"name":"Panic+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Mend","default":4,"rarity":"-"},{"name":"Physic","default":5,"rarity":3},{"name":"Imbue","default":4,"rarity":"-"},{"name":"Miracle","default":5,"rarity":3},{"name":"Fortify Res 1","rarity":3},{"name":"Fortify Res 2","rarity":4},{"name":"Fortify Res 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":3,"res":6},"stats":{"1":{"3":{"hp":16,"atk":4,"spd":7,"def":3,"res":9},"4":{"hp":16,"atk":4,"spd":8,"def":3,"res":10},"5":{"hp":17,"atk":5,"spd":8,"def":4,"res":10}},"40":{"3":{"hp":[30,33,36],"atk":[20,23,26],"spd":[27,30,33],"def":[13,16,19],"res":[25,28,31]},"4":{"hp":[31,34,37],"atk":[21,24,27],"spd":[29,32,35],"def":[14,17,20],"res":[27,30,33]},"5":{"hp":[33,36,40],"atk":[23,27,30],"spd":[31,34,37],"def":[16,19,22],"res":[28,32,35]}}}},{"name":"Marisa: Crimson Flash","shortName":"Marisa","title":"Crimson Flash","origin":"Fire Emblem: The Sacred Stones","weaponType":"Red Sword","moveType":"Infantry","rarities":"4-5","releaseDate":"2018-01-31","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Marisa Crimson Flash.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Marisa Crimson Flash.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Marisa Crimson Flash.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Wo Dao","default":4,"rarity":"-"},{"name":"Wo Dao+","default":5,"rarity":5},{"name":"Night Sky","default":4,"rarity":"-"},{"name":"Glimmer","default":"-","rarity":4},{"name":"HP +3","rarity":"-"},{"name":"HP/Def 1","rarity":"-"},{"name":"HP/Def 2","rarity":4},{"name":"Infantry Pulse 1","rarity":"-"},{"name":"Infantry Pulse 2","rarity":4},{"name":"Infantry Pulse 3","rarity":5}],"growthPoints":{"hp":9,"atk":6,"spd":8,"def":7,"res":3},"stats":{"1":{"4":{"hp":17,"atk":8,"spd":10,"def":5,"res":5},"5":{"hp":18,"atk":8,"spd":10,"def":6,"res":6}},"40":{"4":{"hp":[40,43,46],"atk":[25,28,31],"spd":[31,34,37],"def":[24,27,30],"res":[16,19,22]},"5":{"hp":[43,46,49],"atk":[26,30,33],"spd":[33,36,39],"def":[27,30,33],"res":[18,21,24]}}}},{"name":"Marth: Altean Groom","shortName":"Marth","title":"Altean Groom","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Green Axe","moveType":"Cavalry","rarities":"4-5","releaseDate":"2018-05-25","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Marth Altean Groom.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Marth Altean Groom.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Marth Altean Groom.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Ardent Service","default":4,"rarity":"-"},{"name":"Ardent Service+","default":5,"rarity":5},{"name":"Rally Defense","default":4,"rarity":"-"},{"name":"Rally Spd/Def","default":"-","rarity":4},{"name":"Wings of Mercy 1","rarity":"-"},{"name":"Wings of Mercy 2","rarity":4},{"name":"Wings of Mercy 3","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Drive Atk 1","rarity":"-"},{"name":"Drive Atk 2","rarity":4}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":7,"res":3},"stats":{"1":{"4":{"hp":17,"atk":7,"spd":10,"def":5,"res":4},"5":{"hp":18,"atk":7,"spd":10,"def":6,"res":5}},"40":{"4":{"hp":[34,37,40],"atk":[26,29,32],"spd":[31,34,37],"def":[24,27,30],"res":[15,18,21]},"5":{"hp":[36,40,43],"atk":[28,31,34],"spd":[33,36,39],"def":[27,30,33],"res":[17,20,23]}}}},{"name":"Marth: Altean Prince","shortName":"Marth","title":"Altean Prince","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Marth Altean Prince.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Marth Altean Prince.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Marth Altean Prince.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Falchion","default":5,"rarity":5},{"name":"Pivot","default":4,"rarity":3},{"name":"Escape Route 1","rarity":3},{"name":"Escape Route 2","rarity":4},{"name":"Escape Route 3","rarity":5},{"name":"Spur Spd 1","rarity":"-"},{"name":"Spur Spd 2","rarity":3},{"name":"Spur Spd 3","rarity":4}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":6,"res":4},"stats":{"1":{"3":{"hp":18,"atk":6,"spd":7,"def":6,"res":5},"4":{"hp":18,"atk":7,"spd":8,"def":6,"res":5},"5":{"hp":19,"atk":7,"spd":8,"def":7,"res":6}},"40":{"3":{"hp":[34,37,40],"atk":[24,27,30],"spd":[27,30,33],"def":[22,25,28],"res":[17,20,23]},"4":{"hp":[35,38,41],"atk":[26,29,32],"spd":[29,32,35],"def":[23,26,29],"res":[18,21,24]},"5":{"hp":[37,41,44],"atk":[28,31,34],"spd":[31,34,37],"def":[25,29,32],"res":[20,23,26]}}}},{"name":"Marth: Enigmatic Blade","shortName":"Marth","title":"Enigmatic Blade","origin":"Fire Emblem Awakening","weaponType":"Red Sword","moveType":"Infantry","rarities":"4-5","releaseDate":"2017-06-08","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Marth Enigmatic Blade.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Marth Enigmatic Blade.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Marth Enigmatic Blade.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":4,"rarity":"-"},{"name":"Falchion","default":5,"rarity":5}],"growthPoints":{"hp":7,"atk":8,"spd":8,"def":5,"res":3},"stats":{"1":{"4":{"hp":18,"atk":8,"spd":10,"def":5,"res":3},"5":{"hp":19,"atk":8,"spd":10,"def":6,"res":4}},"40":{"4":{"hp":[37,40,43],"atk":[29,32,35],"spd":[31,34,37],"def":[20,23,26],"res":[14,17,20]},"5":{"hp":[40,43,46],"atk":[31,34,37],"spd":[33,36,39],"def":[22,25,29],"res":[16,19,22]}}}},{"name":"Mathilda: Legendary Knight","shortName":"Mathilda","title":"Legendary Knight","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-07-13","poolDate":"2017-07-28","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Mathilda Legendary Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Mathilda Legendary Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Mathilda Legendary Knight.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Ridersbane","default":4,"rarity":3},{"name":"Ridersbane+","default":5,"rarity":5},{"name":"Rally Resistance","default":4,"rarity":3},{"name":"Cancel Affinity 1","rarity":3},{"name":"Cancel Affinity 2","rarity":4},{"name":"Cancel Affinity 3","rarity":5},{"name":"Hone Atk 1","rarity":"-"},{"name":"Hone Atk 2","rarity":3},{"name":"Hone Atk 3","rarity":4}],"growthPoints":{"hp":5,"atk":6,"spd":7,"def":4,"res":8},"stats":{"1":{"3":{"hp":15,"atk":6,"spd":7,"def":6,"res":7},"4":{"hp":15,"atk":6,"spd":8,"def":6,"res":8},"5":{"hp":16,"atk":7,"spd":8,"def":7,"res":8}},"40":{"3":{"hp":[29,32,35],"atk":[22,25,28],"spd":[25,28,31],"def":[18,21,24],"res":[27,30,33]},"4":{"hp":[30,33,36],"atk":[23,26,29],"spd":[27,30,33],"def":[19,22,25],"res":[29,32,35]},"5":{"hp":[32,35,39],"atk":[25,29,32],"spd":[29,32,35],"def":[21,24,27],"res":[31,34,37]}}}},{"name":"Matthew: Faithful Spy","shortName":"Matthew","title":"Faithful Spy","origin":"Fire Emblem: The Blazing Blade","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"2-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Matthew Faithful Spy.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Matthew Faithful Spy.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Matthew Faithful Spy.png"}},"skills":[{"name":"Iron Dagger","default":2,"rarity":"-"},{"name":"Steel Dagger","default":3,"rarity":2},{"name":"Rogue Dagger","default":4,"rarity":3},{"name":"Rogue Dagger+","default":"-","rarity":5},{"name":"Reciprocal Aid","default":4,"rarity":3},{"name":"Poison Strike 1","rarity":3},{"name":"Poison Strike 2","rarity":4},{"name":"Poison Strike 3","rarity":5},{"name":"Hone Spd 1","rarity":"-"},{"name":"Hone Spd 2","rarity":2},{"name":"Hone Spd 3","rarity":4}],"growthPoints":{"hp":7,"atk":5,"spd":7,"def":7,"res":2},"stats":{"1":{"2":{"hp":15,"atk":5,"spd":9,"def":4,"res":3},"3":{"hp":16,"atk":5,"spd":9,"def":5,"res":4},"4":{"hp":16,"atk":6,"spd":10,"def":5,"res":4},"5":{"hp":17,"atk":6,"spd":10,"def":6,"res":5}},"40":{"2":{"hp":[31,34,37],"atk":[18,20,23],"spd":[25,28,31],"def":[20,23,26],"res":[10,13,16]},"3":{"hp":[34,37,40],"atk":[19,22,25],"spd":[27,30,33],"def":[23,26,29],"res":[12,15,18]},"4":{"hp":[35,38,41],"atk":[21,24,27],"spd":[29,32,35],"def":[24,27,30],"res":[13,16,19]},"5":{"hp":[38,41,44],"atk":[22,25,29],"spd":[31,34,37],"def":[27,30,33],"res":[14,18,21]}}}},{"name":"Merric: Wind Mage","shortName":"Merric","title":"Wind Mage","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Green Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Merric Wind Mage.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Merric Wind Mage.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Merric Wind Mage.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":3,"rarity":"-"},{"name":"Rexcalibur","default":4,"rarity":3},{"name":"Excalibur","default":5,"rarity":5},{"name":"Rising Wind","default":4,"rarity":3},{"name":"Growing Wind","default":"-","rarity":4},{"name":"HP +3","rarity":3},{"name":"HP +4","rarity":4},{"name":"HP +5","rarity":5},{"name":"Spur Res 1","rarity":"-"},{"name":"Spur Res 2","rarity":3},{"name":"Spur Res 3","rarity":4}],"growthPoints":{"hp":7,"atk":5,"spd":7,"def":6,"res":3},"stats":{"1":{"3":{"hp":18,"atk":6,"spd":7,"def":5,"res":3},"4":{"hp":18,"atk":7,"spd":8,"def":5,"res":3},"5":{"hp":19,"atk":7,"spd":8,"def":6,"res":4}},"40":{"3":{"hp":[36,39,42],"atk":[20,23,26],"spd":[25,28,31],"def":[21,24,27],"res":[13,16,19]},"4":{"hp":[37,40,43],"atk":[22,25,28],"spd":[27,30,33],"def":[22,25,28],"res":[14,17,20]},"5":{"hp":[40,43,46],"atk":[23,26,30],"spd":[29,32,35],"def":[24,28,31],"res":[16,19,22]}}}},{"name":"Mia: Lady of Blades","shortName":"Mia","title":"Lady of Blades","origin":"Fire Emblem: Path of Radiance","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2017-11-15","poolDate":"2017-11-28","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Mia Lady of Blades.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Mia Lady of Blades.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Mia Lady of Blades.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Wo Dao","default":"-","rarity":"-"},{"name":"Resolute Blade","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Luna","default":"-","rarity":5},{"name":"Flashing Blade 1","rarity":"-"},{"name":"Flashing Blade 2","rarity":"-"},{"name":"Flashing Blade 3","rarity":5},{"name":"Vantage 1","rarity":"-"},{"name":"Vantage 2","rarity":"-"},{"name":"Vantage 3","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":9,"def":6,"res":5},"stats":{"1":{"5":{"hp":16,"atk":8,"spd":12,"def":6,"res":6}},"40":{"5":{"hp":[34,38,41],"atk":[29,32,35],"spd":[37,40,43],"def":[24,28,31],"res":[22,25,29]}}}},{"name":"Micaiah: Priestess of Dawn","shortName":"Micaiah","title":"Priestess of Dawn","origin":"Fire Emblem: Radiant Dawn","weaponType":"Blue Tome","moveType":"Infantry","rarities":"5","releaseDate":"2018-01-12","poolDate":"2018-01-25","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Micaiah Priestess of Dawn.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Micaiah Priestess of Dawn.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Micaiah Priestess of Dawn.png"}},"skills":[{"name":"Light","default":"-","rarity":"-"},{"name":"Ellight","default":"-","rarity":"-"},{"name":"Shine","default":"-","rarity":"-"},{"name":"Thani","default":5,"rarity":"-"},{"name":"Ardent Sacrifice","default":5,"rarity":"-"},{"name":"Sacrifice","default":"-","rarity":5},{"name":"Distant Def 1","rarity":"-"},{"name":"Distant Def 2","rarity":"-"},{"name":"Distant Def 3","rarity":5},{"name":"Guard 1","rarity":"-"},{"name":"Guard 2","rarity":"-"},{"name":"Guard 3","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Drive Atk 1","rarity":"-"},{"name":"Drive Atk 2","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":6,"def":2,"res":8},"stats":{"1":{"5":{"hp":16,"atk":9,"spd":6,"def":5,"res":9}},"40":{"5":{"hp":[32,35,39],"atk":[32,35,38],"spd":[24,28,31],"def":[14,18,21],"res":[32,35,38]}}}},{"name":"Michalis: Ambitious King","shortName":"Michalis","title":"Ambitious King","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Green Axe","moveType":"Flying","rarities":"3-4","releaseDate":"2017-03-20","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Michalis Ambitious King.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Michalis Ambitious King.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Michalis Ambitious King.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Silver Axe","default":4,"rarity":3},{"name":"Hauteclere","default":"-","rarity":5},{"name":"Rising Thunder","default":4,"rarity":3},{"name":"Blazing Thunder","default":"-","rarity":4},{"name":"Iote's Shield","rarity":4},{"name":"Threaten Def 1","rarity":"-"},{"name":"Threaten Def 2","rarity":3},{"name":"Threaten Def 3","rarity":4}],"growthPoints":{"hp":7,"atk":8,"spd":5,"def":8,"res":3},"stats":{"1":{"3":{"hp":18,"atk":7,"spd":6,"def":8,"res":3},"4":{"hp":18,"atk":8,"spd":6,"def":9,"res":3},"5":{"hp":19,"atk":8,"spd":7,"def":9,"res":4}},"40":{"3":{"hp":[36,39,42],"atk":[27,30,33],"spd":[20,23,26],"def":[28,31,34],"res":[13,16,19]},"4":{"hp":[37,40,43],"atk":[29,32,35],"spd":[21,24,27],"def":[30,33,36],"res":[14,17,20]},"5":{"hp":[40,43,46],"atk":[31,34,37],"spd":[23,26,30],"def":[32,35,38],"res":[16,19,22]}}}},{"name":"Minerva: Red Dragoon","shortName":"Minerva","title":"Red Dragoon","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Green Axe","moveType":"Flying","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Minerva Red Dragoon.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Minerva Red Dragoon.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Minerva Red Dragoon.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Silver Axe","default":"-","rarity":"-"},{"name":"Hauteclere","default":5,"rarity":"-"},{"name":"Holy Vestments","default":5,"rarity":"-"},{"name":"Sacred Cowl","default":"-","rarity":5},{"name":"Life and Death 1","rarity":"-"},{"name":"Life and Death 2","rarity":"-"},{"name":"Life and Death 3","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Spur Def 2","rarity":"-"},{"name":"Ward Fliers","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":7,"def":7,"res":4},"stats":{"1":{"5":{"hp":18,"atk":7,"spd":9,"def":8,"res":5}},"40":{"5":{"hp":[36,40,43],"atk":[28,31,34],"spd":[30,33,36],"def":[29,32,35],"res":[19,22,25]}}}},{"name":"Mist: Helpful Sister","shortName":"Mist","title":"Helpful Sister","origin":"Fire Emblem: Path of Radiance","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"5","releaseDate":"2017-04-26","poolDate":"2017-05-15","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Mist Helpful Sister.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Mist Helpful Sister.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Mist Helpful Sister.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Slow","default":"-","rarity":"-"},{"name":"Slow+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Mend","default":"-","rarity":"-"},{"name":"Recover","default":5,"rarity":"-"},{"name":"Imbue","default":"-","rarity":"-"},{"name":"Miracle","default":5,"rarity":"-"},{"name":"Spur Res 1","rarity":"-"},{"name":"Spur Def/Res 1","rarity":"-"},{"name":"Spur Def/Res 2","rarity":5}],"growthPoints":{"hp":6,"atk":5,"spd":6,"def":3,"res":8},"stats":{"1":{"5":{"hp":17,"atk":8,"spd":6,"def":5,"res":8}},"40":{"5":{"hp":[35,39,42],"atk":[24,27,31],"spd":[24,28,31],"def":[17,20,23],"res":[31,34,37]}}}},{"name":"Morgan: Lad from Afar","shortName":"Morgan","title":"Lad from Afar","origin":"Fire Emblem Awakening","weaponType":"Red Tome","moveType":"Infantry","rarities":"4-5","releaseDate":"2018-03-09","poolDate":"2018-03-22","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Morgan Lad from Afar.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Morgan Lad from Afar.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Morgan Lad from Afar.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":"-","rarity":"-"},{"name":"Fenrir","default":4,"rarity":"-"},{"name":"Grima's Truth","default":5,"rarity":5},{"name":"Dragon Gaze","default":4,"rarity":"-"},{"name":"Dragon Fang","default":"-","rarity":4},{"name":"Dull Ranged 1","rarity":"-"},{"name":"Dull Ranged 2","rarity":4},{"name":"Dull Ranged 3","rarity":5},{"name":"Spur Res 1","rarity":"-"},{"name":"Spur Def/Res 1","rarity":"-"},{"name":"Spur Def/Res 2","rarity":4}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":3,"res":5},"stats":{"1":{"4":{"hp":17,"atk":7,"spd":8,"def":4,"res":6},"5":{"hp":18,"atk":7,"spd":8,"def":5,"res":7}},"40":{"4":{"hp":[32,35,38],"atk":[28,31,34],"spd":[29,32,35],"def":[15,18,21],"res":[21,24,27]},"5":{"hp":[34,37,41],"atk":[30,33,36],"spd":[31,34,37],"def":[17,20,23],"res":[23,26,30]}}}},{"name":"Morgan: Lass from Afar","shortName":"Morgan","title":"Lass from Afar","origin":"Fire Emblem Awakening","weaponType":"Blue Tome","moveType":"Flying","rarities":"5","releaseDate":"2018-03-09","poolDate":"2018-03-22","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Morgan Lass from Afar.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Morgan Lass from Afar.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Morgan Lass from Afar.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Blárserpent","default":"-","rarity":"-"},{"name":"Blárserpent+","default":5,"rarity":"-"},{"name":"Chilling Wind","default":5,"rarity":"-"},{"name":"Iceberg","default":"-","rarity":5},{"name":"Warding Stance 1","rarity":"-"},{"name":"Mirror Stance 1","rarity":"-"},{"name":"Mirror Stance 2","rarity":5},{"name":"Guard 1","rarity":"-"},{"name":"Guard 2","rarity":"-"},{"name":"Guard 3","rarity":5},{"name":"Atk Ploy 1","rarity":"-"},{"name":"Atk Ploy 2","rarity":"-"},{"name":"Atk Ploy 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":7,"def":2,"res":7},"stats":{"1":{"5":{"hp":18,"atk":8,"spd":6,"def":3,"res":9}},"40":{"5":{"hp":[34,37,41],"atk":[31,34,37],"spd":[27,30,33],"def":[12,16,19],"res":[30,33,36]}}}},{"name":"Myrrh: Great Dragon","shortName":"Myrrh","title":"Great Dragon","origin":"Fire Emblem: The Sacred Stones","weaponType":"Green Breath","moveType":"Flying","rarities":"5","releaseDate":"2018-01-25","poolDate":"2018-02-09","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Myrrh Great Dragon.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Myrrh Great Dragon.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Myrrh Great Dragon.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":"-","rarity":"-"},{"name":"Flametongue","default":"-","rarity":"-"},{"name":"Great Flame","default":5,"rarity":"-"},{"name":"Glowing Ember","default":5,"rarity":"-"},{"name":"Bonfire","default":"-","rarity":5},{"name":"Fury 1","rarity":"-"},{"name":"Fury 2","rarity":"-"},{"name":"Fury 3","rarity":5},{"name":"Hone Atk 1","rarity":"-"},{"name":"Hone Atk 2","rarity":"-"},{"name":"Hone Dragons","rarity":5}],"growthPoints":{"hp":8,"atk":8,"spd":5,"def":11,"res":7},"stats":{"1":{"5":{"hp":16,"atk":7,"spd":6,"def":3,"res":7}},"40":{"5":{"hp":[39,42,45],"atk":[30,33,36],"spd":[22,25,29],"def":[32,36,39],"res":[28,31,34]}}}},{"name":"Nanna: Nordion Princess","shortName":"Nanna","title":"Nordion Princess","origin":"Fire Emblem: Thracia 776","weaponType":"Colorless Staff","moveType":"Cavalry","rarities":"4-5","releaseDate":"2018-04-11","poolDate":"2018-04-24","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Nanna Nordion Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Nanna Nordion Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Nanna Nordion Princess.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Absorb","default":"-","rarity":4},{"name":"Absorb+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Reconcile","default":"-","rarity":"-"},{"name":"Restore","default":4,"rarity":"-"},{"name":"Imbue","default":"-","rarity":"-"},{"name":"Heavenly Light","default":"-","rarity":4},{"name":"Resistance +1","rarity":"-"},{"name":"Spd/Res 1","rarity":4},{"name":"Spd/Res 2","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Drive Def 1","rarity":"-"},{"name":"Drive Def 2","rarity":4}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":3,"res":5},"stats":{"1":{"4":{"hp":16,"atk":4,"spd":8,"def":5,"res":7},"5":{"hp":17,"atk":5,"spd":8,"def":6,"res":7}},"40":{"4":{"hp":[31,34,37],"atk":[21,24,27],"spd":[29,32,35],"def":[16,19,22],"res":[22,25,28]},"5":{"hp":[33,36,40],"atk":[23,27,30],"spd":[31,34,37],"def":[18,21,24],"res":[23,26,30]}}}},{"name":"Narcian: Wyvern General","shortName":"Narcian","title":"Wyvern General","origin":"Fire Emblem: The Binding Blade","weaponType":"Green Axe","moveType":"Flying","rarities":"2-4","releaseDate":"2017-02-10","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Narcian Wyvern General.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Narcian Wyvern General.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Narcian Wyvern General.png"}},"skills":[{"name":"Iron Axe","default":2,"rarity":"-"},{"name":"Steel Axe","default":3,"rarity":2},{"name":"Emerald Axe","default":4,"rarity":3},{"name":"Emerald Axe+","default":"-","rarity":5},{"name":"Retribution","default":4,"rarity":3},{"name":"Vengeance","default":"-","rarity":4},{"name":"Lancebreaker 1","rarity":"-"},{"name":"Lancebreaker 2","rarity":2},{"name":"Lancebreaker 3","rarity":4},{"name":"Savage Blow 1","rarity":3},{"name":"Savage Blow 2","rarity":4},{"name":"Savage Blow 3","rarity":5}],"growthPoints":{"hp":7,"atk":6,"spd":6,"def":7,"res":5},"stats":{"1":{"2":{"hp":16,"atk":6,"spd":5,"def":7,"res":5},"3":{"hp":17,"atk":6,"spd":6,"def":7,"res":6},"4":{"hp":17,"atk":7,"spd":6,"def":8,"res":6},"5":{"hp":18,"atk":7,"spd":7,"def":8,"res":7}},"40":{"2":{"hp":[32,35,38],"atk":[20,23,26],"spd":[19,22,25],"def":[23,26,29],"res":[18,20,23]},"3":{"hp":[35,38,41],"atk":[22,25,28],"spd":[22,25,28],"def":[25,28,31],"res":[20,23,26]},"4":{"hp":[36,39,42],"atk":[24,27,30],"spd":[23,26,29],"def":[27,30,33],"res":[21,24,27]},"5":{"hp":[39,42,45],"atk":[25,29,32],"spd":[25,29,32],"def":[29,32,35],"res":[23,26,30]}}}},{"name":"Navarre: Scarlet Sword","shortName":"Navarre","title":"Scarlet Sword","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-04-04","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Navarre Scarlet Sword.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Navarre Scarlet Sword.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Navarre Scarlet Sword.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Killing Edge","default":4,"rarity":3},{"name":"Killing Edge+","default":"-","rarity":5},{"name":"Rising Wind","default":4,"rarity":3},{"name":"Blazing Wind","default":"-","rarity":4},{"name":"Desperation 1","rarity":3},{"name":"Desperation 2","rarity":4},{"name":"Desperation 3","rarity":5},{"name":"Threaten Spd 1","rarity":"-"},{"name":"Threaten Spd 2","rarity":3},{"name":"Threaten Spd 3","rarity":4}],"growthPoints":{"hp":7,"atk":7,"spd":8,"def":4,"res":5},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":10,"def":5,"res":4},"4":{"hp":17,"atk":7,"spd":11,"def":5,"res":4},"5":{"hp":18,"atk":7,"spd":11,"def":6,"res":5}},"40":{"3":{"hp":[35,38,41],"atk":[24,27,30],"spd":[30,33,36],"def":[17,20,23],"res":[18,21,24]},"4":{"hp":[36,39,42],"atk":[26,29,32],"spd":[32,35,38],"def":[18,21,24],"res":[19,22,25]},"5":{"hp":[39,42,45],"atk":[28,31,34],"spd":[34,37,40],"def":[20,23,26],"res":[21,24,28]}}}},{"name":"Nephenee: Fierce Halberdier","shortName":"Nephenee","title":"Fierce Halberdier","origin":"Fire Emblem: Path of Radiance","weaponType":"Blue Lance","moveType":"Infantry","rarities":"5","releaseDate":"2017-09-15","poolDate":"2017-09-29","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Nephenee Fierce Halberdier.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Nephenee Fierce Halberdier.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Nephenee Fierce Halberdier.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Slaying Lance","default":"-","rarity":"-"},{"name":"Slaying Lance+","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Moonbow","default":"-","rarity":5},{"name":"Speed +1","rarity":"-"},{"name":"Atk/Spd 1","rarity":"-"},{"name":"Atk/Spd 2","rarity":5},{"name":"Wrath 1","rarity":"-"},{"name":"Wrath 2","rarity":"-"},{"name":"Wrath 3","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":8,"def":8,"res":3},"stats":{"1":{"5":{"hp":18,"atk":7,"spd":9,"def":8,"res":5}},"40":{"5":{"hp":[34,37,41],"atk":[28,31,34],"spd":[32,35,38],"def":[31,34,37],"res":[17,20,23]}}}},{"name":"Niles: Cruel to Be Kind","shortName":"Niles","title":"Cruel to Be Kind","origin":"Fire Emblem Fates","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Niles Cruel to Be Kind.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Niles Cruel to Be Kind.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Niles Cruel to Be Kind.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":3,"rarity":"-"},{"name":"Killer Bow","default":4,"rarity":3},{"name":"Killer Bow+","default":"-","rarity":5},{"name":"Chilling Wind","default":4,"rarity":3},{"name":"Iceberg","default":"-","rarity":4},{"name":"Warding Blow 1","rarity":"-"},{"name":"Warding Blow 2","rarity":3},{"name":"Warding Blow 3","rarity":4},{"name":"Spur Res 1","rarity":3},{"name":"Spur Res 2","rarity":4},{"name":"Spur Res 3","rarity":5}],"growthPoints":{"hp":5,"atk":5,"spd":8,"def":2,"res":8},"stats":{"1":{"3":{"hp":17,"atk":5,"spd":7,"def":3,"res":7},"4":{"hp":17,"atk":5,"spd":8,"def":3,"res":8},"5":{"hp":18,"atk":6,"spd":8,"def":4,"res":8}},"40":{"3":{"hp":[31,34,37],"atk":[19,22,25],"spd":[27,30,33],"def":[11,14,17],"res":[27,30,33]},"4":{"hp":[32,35,38],"atk":[20,23,26],"spd":[29,32,35],"def":[12,15,18],"res":[29,32,35]},"5":{"hp":[34,37,41],"atk":[22,25,29],"spd":[31,34,37],"def":[13,17,20],"res":[31,34,37]}}}},{"name":"Ninian: Bright-Eyed Bride","shortName":"Ninian","title":"Bright-Eyed Bride","origin":"Fire Emblem: The Blazing Blade","weaponType":"Blue Tome","moveType":"Flying","rarities":"5","releaseDate":"2018-05-21","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ninian Bright-Eyed Bride.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ninian Bright-Eyed Bride.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ninian Bright-Eyed Bride.png"}},"skills":[{"name":"Light","default":"-","rarity":"-"},{"name":"Ellight","default":"-","rarity":"-"},{"name":"Fresh Bouquet","default":"-","rarity":"-"},{"name":"Fresh Bouquet+","default":5,"rarity":"-"},{"name":"Dance","default":5,"rarity":"-"},{"name":"Chill Atk 1","rarity":"-"},{"name":"Chill Atk 2","rarity":"-"},{"name":"Chill Atk 3","rarity":5},{"name":"Spur Spd 1","rarity":"-"},{"name":"Drive Spd 1","rarity":"-"},{"name":"Drive Spd 2","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":3,"res":6},"stats":{"1":{"5":{"hp":15,"atk":6,"spd":7,"def":3,"res":5}},"40":{"5":{"hp":[31,34,38],"atk":[24,28,31],"spd":[30,33,36],"def":[15,18,21],"res":[23,27,30]}}}},{"name":"Ninian: Oracle of Destiny","shortName":"Ninian","title":"Oracle of Destiny","origin":"Fire Emblem: The Blazing Blade","weaponType":"Blue Breath","moveType":"Infantry","rarities":"5","releaseDate":"2017-03-14","poolDate":"2017-03-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ninian Oracle of Destiny.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ninian Oracle of Destiny.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ninian Oracle of Destiny.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":"-","rarity":"-"},{"name":"Light Breath","default":"-","rarity":"-"},{"name":"Light Breath+","default":5,"rarity":"-"},{"name":"Dance","default":5,"rarity":"-"},{"name":"Escape Route 1","rarity":"-"},{"name":"Escape Route 2","rarity":"-"},{"name":"Escape Route 3","rarity":5},{"name":"Fortify Def 1","rarity":"-"},{"name":"Fortify Def 2","rarity":"-"},{"name":"Fortify Dragons","rarity":5}],"growthPoints":{"hp":8,"atk":5,"spd":8,"def":4,"res":6},"stats":{"1":{"5":{"hp":16,"atk":5,"spd":7,"def":6,"res":5}},"40":{"5":{"hp":[39,42,45],"atk":[21,24,28],"spd":[30,33,36],"def":[20,23,26],"res":[23,27,30]}}}},{"name":"Nino: Pale Flower","shortName":"Nino","title":"Pale Flower","origin":"Fire Emblem: The Blazing Blade","weaponType":"Green Tome","moveType":"Flying","rarities":"5","releaseDate":"2018-06-08","poolDate":"2018-06-08","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Nino Pale Flower.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Nino Pale Flower.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Nino Pale Flower.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Rexcalibur","default":"-","rarity":"-"},{"name":"Giga Excalibur","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Moonbow","default":"-","rarity":"-"},{"name":"Death Blow 1","rarity":"-"},{"name":"Swift Sparrow 1","rarity":"-"},{"name":"Swift Sparrow 2","rarity":"-"},{"name":"Aerobatics 1","rarity":"-"},{"name":"Aerobatics 2","rarity":"-"},{"name":"Aerobatics 3","rarity":"-"},{"name":"Spd Smoke 1","rarity":"-"},{"name":"Spd Smoke 2","rarity":"-"},{"name":"Spd Smoke 3","rarity":"-"}],"growthPoints":{"hp":5,"atk":8,"spd":9,"def":2,"res":5},"stats":{"1":{"5":{"hp":17,"atk":7,"spd":10,"def":4,"res":6}},"40":{"5":{"hp":[33,36,40],"atk":[30,33,36],"spd":[35,38,41],"def":[13,17,20],"res":[22,25,29]}}}},{"name":"Nino: Pious Mage","shortName":"Nino","title":"Pious Mage","origin":"Fire Emblem: The Blazing Blade","weaponType":"Green Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Nino Pious Mage.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Nino Pious Mage.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Nino Pious Mage.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":3,"rarity":"-"},{"name":"Gronnblade","default":4,"rarity":3},{"name":"Gronnblade+","default":5,"rarity":5},{"name":"Draw Back","default":4,"rarity":3},{"name":"Resistance +1","rarity":"-"},{"name":"Resistance +2","rarity":3},{"name":"Resistance +3","rarity":4},{"name":"Hone Atk 1","rarity":3},{"name":"Hone Atk 2","rarity":4},{"name":"Hone Atk 3","rarity":5}],"growthPoints":{"hp":4,"atk":8,"spd":8,"def":3,"res":5},"stats":{"1":{"3":{"hp":15,"atk":6,"spd":9,"def":3,"res":6},"4":{"hp":15,"atk":7,"spd":10,"def":3,"res":6},"5":{"hp":16,"atk":7,"spd":10,"def":4,"res":7}},"40":{"3":{"hp":[27,30,33],"atk":[26,29,32],"spd":[29,32,35],"def":[13,16,19],"res":[20,23,26]},"4":{"hp":[28,31,34],"atk":[28,31,34],"spd":[31,34,37],"def":[14,17,20],"res":[21,24,27]},"5":{"hp":[30,33,36],"atk":[30,33,36],"spd":[33,36,39],"def":[16,19,22],"res":[23,26,30]}}}},{"name":"Nowi: Eternal Witch","shortName":"Nowi","title":"Eternal Witch","origin":"Fire Emblem Awakening","weaponType":"Red Tome","moveType":"Flying","rarities":"5","releaseDate":"2017-10-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Nowi Eternal Witch.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Nowi Eternal Witch.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Nowi Eternal Witch.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":"-","rarity":"-"},{"name":"Fenrir","default":"-","rarity":"-"},{"name":"Grimoire","default":5,"rarity":"-"},{"name":"Reposition","default":5,"rarity":"-"},{"name":"Atk/Res Bond 1","rarity":"-"},{"name":"Atk/Res Bond 2","rarity":"-"},{"name":"Atk/Res Bond 3","rarity":5},{"name":"Live for Bounty","rarity":5},{"name":"Hone Atk 1","rarity":"-"},{"name":"Hone Atk 2","rarity":"-"},{"name":"Hone Fliers","rarity":5}],"growthPoints":{"hp":4,"atk":8,"spd":8,"def":3,"res":5},"stats":{"1":{"5":{"hp":17,"atk":8,"spd":6,"def":5,"res":8}},"40":{"5":{"hp":[31,34,37],"atk":[31,34,37],"spd":[29,32,35],"def":[17,20,23],"res":[24,27,31]}}}},{"name":"Nowi: Eternal Youth","shortName":"Nowi","title":"Eternal Youth","origin":"Fire Emblem Awakening","weaponType":"Blue Breath","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Nowi Eternal Youth.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Nowi Eternal Youth.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Nowi Eternal Youth.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":3,"rarity":"-"},{"name":"Lightning Breath","default":4,"rarity":3},{"name":"Lightning Breath+","default":5,"rarity":5},{"name":"Rally Defense","default":4,"rarity":3},{"name":"Defense +1","rarity":3},{"name":"Defense +2","rarity":4},{"name":"Defense +3","rarity":5},{"name":"Threaten Res 1","rarity":"-"},{"name":"Threaten Res 2","rarity":3},{"name":"Threaten Res 3","rarity":4}],"growthPoints":{"hp":9,"atk":9,"spd":6,"def":7,"res":6},"stats":{"1":{"3":{"hp":16,"atk":5,"spd":4,"def":5,"res":4},"4":{"hp":16,"atk":6,"spd":4,"def":6,"res":4},"5":{"hp":17,"atk":6,"spd":5,"def":6,"res":5}},"40":{"3":{"hp":[38,41,44],"atk":[27,30,33],"spd":[20,23,26],"def":[23,26,29],"res":[20,23,26]},"4":{"hp":[39,42,45],"atk":[29,32,35],"spd":[21,24,27],"def":[25,28,31],"res":[21,24,27]},"5":{"hp":[42,45,48],"atk":[31,34,37],"spd":[23,27,30],"def":[27,30,33],"res":[23,27,30]}}}},{"name":"Oboro: Fierce Fighter","shortName":"Oboro","title":"Fierce Fighter","origin":"Fire Emblem Fates","weaponType":"Blue Lance","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Oboro Fierce Fighter.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Oboro Fierce Fighter.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Oboro Fierce Fighter.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Heavy Spear","default":4,"rarity":3},{"name":"Heavy Spear+","default":"-","rarity":5},{"name":"Rally Defense","default":4,"rarity":3},{"name":"Seal Def 1","rarity":"-"},{"name":"Seal Def 2","rarity":3},{"name":"Seal Def 3","rarity":4},{"name":"Threaten Res 1","rarity":3},{"name":"Threaten Res 2","rarity":4},{"name":"Threaten Res 3","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":5,"def":8,"res":5},"stats":{"1":{"3":{"hp":17,"atk":7,"spd":6,"def":8,"res":4},"4":{"hp":17,"atk":8,"spd":6,"def":9,"res":4},"5":{"hp":18,"atk":8,"spd":7,"def":9,"res":5}},"40":{"3":{"hp":[33,36,39],"atk":[25,28,31],"spd":[20,23,26],"def":[28,31,34],"res":[18,21,24]},"4":{"hp":[34,37,40],"atk":[27,30,33],"spd":[21,24,27],"def":[30,33,36],"res":[19,22,25]},"5":{"hp":[36,40,43],"atk":[29,32,35],"spd":[23,26,30],"def":[32,35,38],"res":[21,24,28]}}}},{"name":"Odin: Potent Force","shortName":"Odin","title":"Potent Force","origin":"Fire Emblem Fates","weaponType":"Blue Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Odin Potent Force.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Odin Potent Force.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Odin Potent Force.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":3,"rarity":"-"},{"name":"Blárblade","default":4,"rarity":3},{"name":"Blárblade+","default":5,"rarity":5},{"name":"New Moon","default":4,"rarity":3},{"name":"Moonbow","default":"-","rarity":4},{"name":"Defiant Atk 1","rarity":3},{"name":"Defiant Atk 2","rarity":4},{"name":"Defiant Atk 3","rarity":5},{"name":"R Tomebreaker 1","rarity":"-"},{"name":"R Tomebreaker 2","rarity":3},{"name":"R Tomebreaker 3","rarity":4}],"growthPoints":{"hp":7,"atk":4,"spd":7,"def":5,"res":5},"stats":{"1":{"3":{"hp":18,"atk":4,"spd":7,"def":5,"res":5},"4":{"hp":18,"atk":4,"spd":8,"def":6,"res":5},"5":{"hp":19,"atk":5,"spd":8,"def":6,"res":6}},"40":{"3":{"hp":[36,39,42],"atk":[16,19,22],"spd":[25,28,31],"def":[19,22,25],"res":[19,22,25]},"4":{"hp":[37,40,43],"atk":[17,20,23],"spd":[27,30,33],"def":[21,24,27],"res":[20,23,26]},"5":{"hp":[40,43,46],"atk":[19,22,25],"spd":[29,32,35],"def":[22,25,29],"res":[22,25,29]}}}},{"name":"Ogma: Loyal Blade","shortName":"Ogma","title":"Loyal Blade","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ogma Loyal Blade.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ogma Loyal Blade.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ogma Loyal Blade.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Brave Sword","default":4,"rarity":3},{"name":"Brave Sword+","default":5,"rarity":5},{"name":"Daylight","default":4,"rarity":3},{"name":"Noontime","default":"-","rarity":4},{"name":"Defiant Atk 1","rarity":"-"},{"name":"Defiant Atk 2","rarity":3},{"name":"Defiant Atk 3","rarity":4},{"name":"Spur Atk 1","rarity":3},{"name":"Spur Atk 2","rarity":4},{"name":"Spur Atk 3","rarity":5}],"growthPoints":{"hp":8,"atk":9,"spd":7,"def":6,"res":1},"stats":{"1":{"3":{"hp":20,"atk":6,"spd":9,"def":5,"res":2},"4":{"hp":20,"atk":7,"spd":10,"def":5,"res":2},"5":{"hp":21,"atk":7,"spd":10,"def":6,"res":3}},"40":{"3":{"hp":[40,43,46],"atk":[28,31,34],"spd":[27,30,33],"def":[21,24,27],"res":[8,11,14]},"4":{"hp":[41,44,47],"atk":[30,33,36],"spd":[29,32,35],"def":[22,25,28],"res":[9,12,15]},"5":{"hp":[44,47,50],"atk":[32,35,38],"spd":[31,34,37],"def":[24,28,31],"res":[10,13,17]}}}},{"name":"Oliver: Admirer of Beauty","shortName":"Oliver","title":"Admirer of Beauty","origin":"Fire Emblem: Radiant Dawn","weaponType":"Blue Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2018-01-14","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Oliver Admirer of Beauty.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Oliver Admirer of Beauty.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Oliver Admirer of Beauty.png"}},"skills":[{"name":"Light","default":"-","rarity":"-"},{"name":"Ellight","default":3,"rarity":"-"},{"name":"Shine","default":4,"rarity":3},{"name":"Shine+","default":"-","rarity":5},{"name":"Rising Light","default":4,"rarity":3},{"name":"Blazing Light","default":"-","rarity":4},{"name":"Warding Blow 1","rarity":"-"},{"name":"Mirror Strike 1","rarity":3},{"name":"Mirror Strike 2","rarity":4},{"name":"Atk Ploy 1","rarity":3},{"name":"Atk Ploy 2","rarity":4},{"name":"Atk Ploy 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":3,"def":4,"res":8},"stats":{"1":{"3":{"hp":17,"atk":7,"spd":4,"def":5,"res":7},"4":{"hp":17,"atk":8,"spd":4,"def":5,"res":8},"5":{"hp":18,"atk":8,"spd":5,"def":6,"res":8}},"40":{"3":{"hp":[35,38,41],"atk":[25,28,31],"spd":[14,17,20],"def":[17,20,23],"res":[27,30,33]},"4":{"hp":[36,39,42],"atk":[27,30,33],"spd":[15,18,21],"def":[18,21,24],"res":[29,32,35]},"5":{"hp":[39,42,45],"atk":[29,32,35],"spd":[17,20,23],"def":[20,23,26],"res":[31,34,37]}}}},{"name":"Olivia: Blushing Beauty","shortName":"Olivia","title":"Blushing Beauty","origin":"Fire Emblem Awakening","weaponType":"Red Sword","moveType":"Infantry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Olivia Blushing Beauty.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Olivia Blushing Beauty.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Olivia Blushing Beauty.png"}},"skills":[{"name":"Iron Sword","default":1,"rarity":"-"},{"name":"Steel Sword","default":3,"rarity":2},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Silver Sword+","default":5,"rarity":5},{"name":"Dance","default":4,"rarity":3},{"name":"Knock Back","rarity":3},{"name":"Hone Atk 1","rarity":1},{"name":"Hone Atk 2","rarity":2},{"name":"Hone Atk 3","rarity":4}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":6,"res":6},"stats":{"1":{"1":{"hp":15,"atk":4,"spd":5,"def":3,"res":2},"2":{"hp":15,"atk":5,"spd":6,"def":3,"res":2},"3":{"hp":16,"atk":5,"spd":6,"def":4,"res":3},"4":{"hp":16,"atk":6,"spd":7,"def":4,"res":3},"5":{"hp":17,"atk":6,"spd":7,"def":5,"res":4}},"40":{"1":{"hp":[27,29,32],"atk":[17,20,23],"spd":[22,24,27],"def":[16,19,22],"res":[15,18,21]},"2":{"hp":[28,30,33],"atk":[19,22,25],"spd":[24,27,30],"def":[17,20,23],"res":[16,19,22]},"3":{"hp":[30,33,36],"atk":[21,24,27],"spd":[26,29,32],"def":[20,23,26],"res":[19,22,25]},"4":{"hp":[31,34,37],"atk":[23,26,29],"spd":[28,31,34],"def":[21,24,27],"res":[20,23,26]},"5":{"hp":[33,36,40],"atk":[24,28,31],"spd":[30,33,36],"def":[23,27,30],"res":[22,26,29]}}}},{"name":"Olivia: Festival Dancer","shortName":"Olivia","title":"Festival Dancer","origin":"Fire Emblem Awakening","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"5","releaseDate":"2017-09-29","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Olivia Festival Dancer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Olivia Festival Dancer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Olivia Festival Dancer.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":"-","rarity":"-"},{"name":"Dancer's Fan","default":"-","rarity":"-"},{"name":"Dancer's Fan+","default":5,"rarity":"-"},{"name":"Dance","default":5,"rarity":"-"},{"name":"Distant Def 1","rarity":"-"},{"name":"Distant Def 2","rarity":"-"},{"name":"Distant Def 3","rarity":5},{"name":"Blaze Dance 1","rarity":"-"},{"name":"Blaze Dance 2","rarity":"-"},{"name":"Blaze Dance 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":2,"res":7},"stats":{"1":{"5":{"hp":15,"atk":6,"spd":8,"def":3,"res":4}},"40":{"5":{"hp":[31,34,38],"atk":[24,28,31],"spd":[31,34,37],"def":[12,16,19],"res":[25,28,31]}}}},{"name":"Olwen: Blue Mage Knight","shortName":"Olwen","title":"Blue Mage Knight","origin":"Fire Emblem: Thracia 776","weaponType":"Blue Tome","moveType":"Cavalry","rarities":"5","releaseDate":"2017-02-27","poolDate":"2017-03-14","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Olwen Blue Mage Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Olwen Blue Mage Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Olwen Blue Mage Knight.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Thoron","default":"-","rarity":"-"},{"name":"Dire Thunder","default":5,"rarity":"-"},{"name":"Reposition","default":5,"rarity":"-"},{"name":"Warding Blow 1","rarity":"-"},{"name":"Warding Blow 2","rarity":"-"},{"name":"Warding Blow 3","rarity":5},{"name":"Spur Res 1","rarity":"-"},{"name":"Spur Res 2","rarity":"-"},{"name":"Ward Cavalry","rarity":5}],"growthPoints":{"hp":4,"atk":5,"spd":8,"def":3,"res":7},"stats":{"1":{"5":{"hp":17,"atk":7,"spd":8,"def":5,"res":6}},"40":{"5":{"hp":[31,34,37],"atk":[23,26,30],"spd":[31,34,37],"def":[17,20,23],"res":[27,30,33]}}}},{"name":"Olwen: Righteous Knight","shortName":"Olwen","title":"Righteous Knight","origin":"Fire Emblem: Thracia 776","weaponType":"Green Tome","moveType":"Cavalry","rarities":"5","releaseDate":"2018-04-11","poolDate":"2018-04-24","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Olwen Righteous Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Olwen Righteous Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Olwen Righteous Knight.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Rexcalibur","default":"-","rarity":"-"},{"name":"Thunderhead","default":5,"rarity":"-"},{"name":"Rising Wind","default":5,"rarity":"-"},{"name":"Blazing Wind","default":"-","rarity":5},{"name":"Darting Blow 1","rarity":"-"},{"name":"Swift Sparrow 1","rarity":"-"},{"name":"Swift Sparrow 2","rarity":5},{"name":"Renewal 1","rarity":"-"},{"name":"Renewal 2","rarity":"-"},{"name":"Renewal 3","rarity":5},{"name":"G Tome Exp. 1","rarity":"-"},{"name":"G Tome Exp. 2","rarity":"-"},{"name":"G Tome Exp. 3","rarity":5}],"growthPoints":{"hp":4,"atk":6,"spd":8,"def":3,"res":6},"stats":{"1":{"5":{"hp":17,"atk":8,"spd":9,"def":4,"res":5}},"40":{"5":{"hp":[31,34,37],"atk":[26,30,33],"spd":[32,35,38],"def":[16,19,22],"res":[23,27,30]}}}},{"name":"Oscar: Agile Horseman","shortName":"Oscar","title":"Agile Horseman","origin":"Fire Emblem: Path of Radiance","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-09-15","poolDate":"2017-09-29","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Oscar Agile Horseman.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Oscar Agile Horseman.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Oscar Agile Horseman.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Sapphire Lance","default":4,"rarity":3},{"name":"Sapphire Lance+","default":5,"rarity":5},{"name":"Rally Speed","default":4,"rarity":3},{"name":"Rally Spd/Def","default":"-","rarity":4},{"name":"Lancebreaker 1","rarity":"-"},{"name":"Lancebreaker 2","rarity":3},{"name":"Lancebreaker 3","rarity":4},{"name":"Spur Def 1","rarity":3},{"name":"Spur Spd/Def 1","rarity":4},{"name":"Spur Spd/Def 2","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":8,"def":5,"res":3},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":7,"def":6,"res":5},"4":{"hp":17,"atk":7,"spd":8,"def":6,"res":5},"5":{"hp":18,"atk":7,"spd":8,"def":7,"res":6}},"40":{"3":{"hp":[33,36,39],"atk":[26,29,32],"spd":[27,30,33],"def":[20,23,26],"res":[15,18,21]},"4":{"hp":[34,37,40],"atk":[28,31,34],"spd":[29,32,35],"def":[21,24,27],"res":[16,19,22]},"5":{"hp":[36,40,43],"atk":[30,33,36],"spd":[31,34,37],"def":[23,26,30],"res":[18,21,24]}}}},{"name":"Palla: Eldest Whitewing","shortName":"Palla","title":"Eldest Whitewing","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Red Sword","moveType":"Flying","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Palla Eldest Whitewing.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Palla Eldest Whitewing.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Palla Eldest Whitewing.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Ruby Sword","default":4,"rarity":3},{"name":"Ruby Sword+","default":5,"rarity":5},{"name":"New Moon","default":4,"rarity":3},{"name":"Moonbow","default":"-","rarity":4},{"name":"Wings of Mercy 1","rarity":"-"},{"name":"Wings of Mercy 2","rarity":4},{"name":"Wings of Mercy 3","rarity":5},{"name":"Spur Spd 1","rarity":"-"},{"name":"Spur Spd 2","rarity":3},{"name":"Goad Fliers","rarity":4}],"growthPoints":{"hp":7,"atk":7,"spd":6,"def":6,"res":5},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":8,"def":5,"res":6},"4":{"hp":17,"atk":7,"spd":9,"def":5,"res":6},"5":{"hp":18,"atk":7,"spd":9,"def":6,"res":7}},"40":{"3":{"hp":[35,38,41],"atk":[24,27,30],"spd":[24,27,30],"def":[21,24,27],"res":[20,23,26]},"4":{"hp":[36,39,42],"atk":[26,29,32],"spd":[26,29,32],"def":[22,25,28],"res":[21,24,27]},"5":{"hp":[39,42,45],"atk":[28,31,34],"spd":[27,31,34],"def":[24,28,31],"res":[23,26,30]}}}},{"name":"Peri: Playful Slayer","shortName":"Peri","title":"Playful Slayer","origin":"Fire Emblem Fates","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Peri Playful Slayer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Peri Playful Slayer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Peri Playful Slayer.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Killer Lance","default":4,"rarity":3},{"name":"Killer Lance+","default":5,"rarity":5},{"name":"Night Sky","default":4,"rarity":3},{"name":"Glimmer","default":"-","rarity":4},{"name":"Resistance +1","rarity":3},{"name":"Resistance +2","rarity":4},{"name":"Resistance +3","rarity":5},{"name":"Threaten Def 1","rarity":"-"},{"name":"Threaten Def 2","rarity":3},{"name":"Threaten Def 3","rarity":4}],"growthPoints":{"hp":5,"atk":7,"spd":7,"def":4,"res":7},"stats":{"1":{"3":{"hp":15,"atk":8,"spd":8,"def":5,"res":5},"4":{"hp":15,"atk":9,"spd":9,"def":5,"res":5},"5":{"hp":16,"atk":9,"spd":9,"def":6,"res":6}},"40":{"3":{"hp":[29,32,35],"atk":[26,29,32],"spd":[26,29,32],"def":[17,20,23],"res":[23,26,29]},"4":{"hp":[30,33,36],"atk":[28,31,34],"spd":[28,31,34],"def":[18,21,24],"res":[24,27,30]},"5":{"hp":[32,35,39],"atk":[30,33,36],"spd":[30,33,36],"def":[20,23,26],"res":[27,30,33]}}}},{"name":"Priscilla: Delicate Princess","shortName":"Priscilla","title":"Delicate Princess","origin":"Fire Emblem: The Blazing Blade","weaponType":"Colorless Staff","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-03-14","poolDate":"2017-03-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Priscilla Delicate Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Priscilla Delicate Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Priscilla Delicate Princess.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Panic","default":"-","rarity":3},{"name":"Panic+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Reconcile","default":4,"rarity":"-"},{"name":"Rehabilitate","default":5,"rarity":4},{"name":"Imbue","default":4,"rarity":"-"},{"name":"Still-Water Balm","default":5,"rarity":3},{"name":"Spur Def 1","rarity":3},{"name":"Spur Def 2","rarity":4},{"name":"Spur Def 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":6,"def":3,"res":7},"stats":{"1":{"3":{"hp":16,"atk":6,"spd":6,"def":3,"res":7},"4":{"hp":16,"atk":7,"spd":6,"def":3,"res":8},"5":{"hp":17,"atk":7,"spd":7,"def":4,"res":8}},"40":{"3":{"hp":[30,33,36],"atk":[22,25,28],"spd":[22,25,28],"def":[13,16,19],"res":[25,28,31]},"4":{"hp":[31,34,37],"atk":[24,27,30],"spd":[23,26,29],"def":[14,17,20],"res":[27,30,33]},"5":{"hp":[33,36,40],"atk":[25,29,32],"spd":[25,29,32],"def":[16,19,22],"res":[29,32,35]}}}},{"name":"Raigh: Dark Child","shortName":"Raigh","title":"Dark Child","origin":"Fire Emblem: The Binding Blade","weaponType":"Red Tome","moveType":"Infantry","rarities":"2-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Raigh Dark Child.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Raigh Dark Child.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Raigh Dark Child.png"}},"skills":[{"name":"Flux","default":2,"rarity":"-"},{"name":"Ruin","default":3,"rarity":2},{"name":"Rauðrwolf","default":4,"rarity":3},{"name":"Rauðrwolf+","default":"-","rarity":5},{"name":"Rally Attack","default":4,"rarity":3},{"name":"HP +3","rarity":3},{"name":"HP +4","rarity":4},{"name":"HP +5","rarity":5},{"name":"Seal Res 1","rarity":"-"},{"name":"Seal Res 2","rarity":2},{"name":"Seal Res 3","rarity":4}],"growthPoints":{"hp":5,"atk":7,"spd":6,"def":4,"res":6},"stats":{"1":{"2":{"hp":15,"atk":7,"spd":6,"def":3,"res":5},"3":{"hp":16,"atk":7,"spd":6,"def":4,"res":6},"4":{"hp":16,"atk":8,"spd":7,"def":4,"res":6},"5":{"hp":17,"atk":8,"spd":7,"def":5,"res":7}},"40":{"2":{"hp":[28,30,33],"atk":[23,26,29],"spd":[20,23,26],"def":[14,17,19],"res":[19,22,25]},"3":{"hp":[30,33,36],"atk":[25,28,31],"spd":[22,25,28],"def":[16,19,22],"res":[22,25,28]},"4":{"hp":[31,34,37],"atk":[27,30,33],"spd":[24,27,30],"def":[17,20,23],"res":[23,26,29]},"5":{"hp":[33,36,40],"atk":[29,32,35],"spd":[25,29,32],"def":[19,22,25],"res":[25,29,32]}}}},{"name":"Raven: Peerless Fighter","shortName":"Raven","title":"Peerless Fighter","origin":"Fire Emblem: The Blazing Blade","weaponType":"Green Axe","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Raven Peerless Fighter.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Raven Peerless Fighter.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Raven Peerless Fighter.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Brave Axe","default":4,"rarity":3},{"name":"Brave Axe+","default":5,"rarity":5},{"name":"Basilikos","default":"-","rarity":5},{"name":"Daylight","default":4,"rarity":3},{"name":"Sol","default":"-","rarity":4},{"name":"Defiant Spd 1","rarity":"-"},{"name":"Defiant Spd 2","rarity":3},{"name":"Defiant Spd 3","rarity":4},{"name":"Threaten Def 1","rarity":3},{"name":"Threaten Def 2","rarity":4},{"name":"Threaten Def 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":8,"def":5,"res":4},"stats":{"1":{"3":{"hp":18,"atk":7,"spd":8,"def":5,"res":4},"4":{"hp":18,"atk":8,"spd":9,"def":5,"res":4},"5":{"hp":19,"atk":8,"spd":9,"def":6,"res":5}},"40":{"3":{"hp":[34,37,40],"atk":[27,30,33],"spd":[28,31,34],"def":[19,22,25],"res":[16,19,22]},"4":{"hp":[35,38,41],"atk":[29,32,35],"spd":[30,33,36],"def":[20,23,26],"res":[17,20,23]},"5":{"hp":[37,41,44],"atk":[31,34,37],"spd":[32,35,38],"def":[22,25,29],"res":[19,22,25]}}}},{"name":"Rebecca: Wildflower","shortName":"Rebecca","title":"Wildflower","origin":"Fire Emblem: The Blazing Blade","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-03-14","poolDate":"2017-03-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Rebecca Wildflower.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Rebecca Wildflower.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Rebecca Wildflower.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":3,"rarity":"-"},{"name":"Silver Bow","default":4,"rarity":3},{"name":"Silver Bow+","default":5,"rarity":5},{"name":"Ardent Sacrifice","default":4,"rarity":3},{"name":"Darting Blow 1","rarity":"-"},{"name":"Darting Blow 2","rarity":3},{"name":"Darting Blow 3","rarity":4},{"name":"Seal Atk 1","rarity":3},{"name":"Seal Atk 2","rarity":4},{"name":"Seal Atk 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":3,"res":6},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":7,"def":5,"res":4},"4":{"hp":17,"atk":7,"spd":8,"def":5,"res":4},"5":{"hp":18,"atk":7,"spd":8,"def":6,"res":5}},"40":{"3":{"hp":[31,34,37],"atk":[22,25,28],"spd":[27,30,33],"def":[15,18,21],"res":[20,23,26]},"4":{"hp":[32,35,38],"atk":[24,27,30],"spd":[29,32,35],"def":[16,19,22],"res":[21,24,27]},"5":{"hp":[34,37,41],"atk":[25,29,32],"spd":[31,34,37],"def":[18,21,24],"res":[23,27,30]}}}},{"name":"Reinhardt: Thunder's Fist","shortName":"Reinhardt","title":"Thunder's Fist","origin":"Fire Emblem: Thracia 776","weaponType":"Blue Tome","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-02-27","poolDate":"2017-03-14","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Reinhardt Thunders Fist.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Reinhardt Thunders Fist.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Reinhardt Thunders Fist.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":3,"rarity":"-"},{"name":"Thoron","default":4,"rarity":3},{"name":"Dire Thunder","default":5,"rarity":5},{"name":"Rising Thunder","default":4,"rarity":3},{"name":"Blazing Thunder","default":"-","rarity":4},{"name":"Vantage 1","rarity":"-"},{"name":"Vantage 2","rarity":3},{"name":"Vantage 3","rarity":4},{"name":"Spur Atk 1","rarity":3},{"name":"Spur Atk 2","rarity":4},{"name":"Goad Cavalry","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":4,"def":6,"res":4},"stats":{"1":{"3":{"hp":15,"atk":7,"spd":5,"def":4,"res":7},"4":{"hp":15,"atk":8,"spd":5,"def":4,"res":8},"5":{"hp":16,"atk":8,"spd":6,"def":5,"res":8}},"40":{"3":{"hp":[31,34,37],"atk":[25,28,31],"spd":[17,20,23],"def":[20,23,26],"res":[19,22,25]},"4":{"hp":[32,35,38],"atk":[27,30,33],"spd":[18,21,24],"def":[21,24,27],"res":[21,24,27]},"5":{"hp":[34,38,41],"atk":[29,32,35],"spd":[20,23,26],"def":[23,27,30],"res":[22,25,28]}}}},{"name":"Reinhardt: Thunder's Sword","shortName":"Reinhardt","title":"Thunder's Sword","origin":"Fire Emblem: Thracia 776","weaponType":"Red Sword","moveType":"Cavalry","rarities":"5","releaseDate":"2018-04-11","poolDate":"2018-04-24","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Reinhardt Thunders Sword.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Reinhardt Thunders Sword.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Reinhardt Thunders Sword.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Meisterschwert","default":5,"rarity":"-"},{"name":"Buckler","default":5,"rarity":"-"},{"name":"Pavise","default":"-","rarity":5},{"name":"Death Blow 1","rarity":"-"},{"name":"Death Blow 2","rarity":"-"},{"name":"Death Blow 3","rarity":5},{"name":"Vantage 1","rarity":"-"},{"name":"Vantage 2","rarity":"-"},{"name":"Vantage 3","rarity":5},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk/Def 1","rarity":"-"},{"name":"Spur Atk/Def 2","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":4,"def":7,"res":6},"stats":{"1":{"5":{"hp":18,"atk":9,"spd":6,"def":7,"res":6}},"40":{"5":{"hp":[36,40,43],"atk":[32,35,38],"spd":[20,23,26],"def":[28,31,34],"res":[24,28,31]}}}},{"name":"Rhajat: Black Magician","shortName":"Rhajat","title":"Black Magician","origin":"Fire Emblem Fates","weaponType":"Green Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-12-02","poolDate":"2017-12-14","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Rhajat Black Magician.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Rhajat Black Magician.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Rhajat Black Magician.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Keen Gronnwolf","default":"-","rarity":"-"},{"name":"Keen Gronnwolf+","default":5,"rarity":"-"},{"name":"Rally Defense","default":5,"rarity":"-"},{"name":"Rally Atk/Def","default":"-","rarity":5},{"name":"Distant Def 1","rarity":"-"},{"name":"Distant Def 2","rarity":"-"},{"name":"Distant Def 3","rarity":5},{"name":"Savage Blow 1","rarity":"-"},{"name":"Savage Blow 2","rarity":"-"},{"name":"Savage Blow 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":4,"res":4},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":8,"def":4,"res":7}},"40":{"5":{"hp":[33,36,40],"atk":[32,35,38],"spd":[31,34,37],"def":[18,21,24],"res":[21,24,27]}}}},{"name":"Robin: Fell Reincarnation","shortName":"Robin","title":"Fell Reincarnation","origin":"Fire Emblem Awakening","weaponType":"Green Breath","moveType":"Armored","rarities":"5","releaseDate":"2018-02-22","poolDate":"2018-03-09","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Robin Fell Reincarnation.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Robin Fell Reincarnation.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Robin Fell Reincarnation.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":"-","rarity":"-"},{"name":"Flametongue","default":"-","rarity":"-"},{"name":"Expiration","default":5,"rarity":"-"},{"name":"Glowing Ember","default":5,"rarity":"-"},{"name":"Ignis","default":"-","rarity":5},{"name":"Vengeful Fighter 1","rarity":"-"},{"name":"Vengeful Fighter 2","rarity":"-"},{"name":"Vengeful Fighter 3","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Spur Def 2","rarity":"-"},{"name":"Ward Dragons","rarity":5}],"growthPoints":{"hp":7,"atk":10,"spd":4,"def":8,"res":6},"stats":{"1":{"5":{"hp":24,"atk":10,"spd":7,"def":9,"res":5}},"40":{"5":{"hp":[45,48,51],"atk":[37,40,44],"spd":[21,24,27],"def":[32,35,38],"res":[23,27,30]}}}},{"name":"Robin: Fell Vessel","shortName":"Robin","title":"Fell Vessel","origin":"Fire Emblem Awakening","weaponType":"Colorless Breath","moveType":"Flying","rarities":"5","releaseDate":"2018-03-29","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Robin Fell Vessel.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Robin Fell Vessel.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Robin Fell Vessel.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":"-","rarity":"-"},{"name":"Flametongue","default":"-","rarity":"-"},{"name":"Expiration","default":5,"rarity":"-"},{"name":"Glowing Ember","default":5,"rarity":"-"},{"name":"Bonfire","default":"-","rarity":5},{"name":"Dragonskin","rarity":5},{"name":"Cancel Affinity 1","rarity":"-"},{"name":"Cancel Affinity 2","rarity":"-"},{"name":"Cancel Affinity 3","rarity":5},{"name":"Res Smoke 1","rarity":"-"},{"name":"Res Smoke 2","rarity":"-"},{"name":"Res Smoke 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":8,"def":6,"res":5},"stats":{"1":{"5":{"hp":16,"atk":8,"spd":9,"def":8,"res":6}},"40":{"5":{"hp":[37,40,43],"atk":[29,32,35],"spd":[32,35,38],"def":[26,30,33],"res":[22,25,29]}}}},{"name":"Robin: Festive Tactician","shortName":"Robin","title":"Festive Tactician","origin":"Fire Emblem Awakening","weaponType":"Blue Lance","moveType":"Armored","rarities":"5","releaseDate":"2017-12-18","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Robin Festive Tactician.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Robin Festive Tactician.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Robin Festive Tactician.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Tannenboom!","default":"-","rarity":"-"},{"name":"Tannenboom!+","default":5,"rarity":"-"},{"name":"Reciprocal Aid","default":5,"rarity":"-"},{"name":"Brazen Atk/Spd 1","rarity":"-"},{"name":"Brazen Atk/Spd 2","rarity":"-"},{"name":"Brazen Atk/Spd 3","rarity":5},{"name":"Armor March 1","rarity":"-"},{"name":"Armor March 2","rarity":"-"},{"name":"Armor March 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":8,"def":8,"res":5},"stats":{"1":{"5":{"hp":23,"atk":9,"spd":8,"def":9,"res":6}},"40":{"5":{"hp":[41,45,48],"atk":[32,35,38],"spd":[31,34,37],"def":[32,35,38],"res":[22,25,29]}}}},{"name":"Robin: High Deliverer","shortName":"Robin","title":"High Deliverer","origin":"Fire Emblem Awakening","weaponType":"Blue Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Robin High Deliverer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Robin High Deliverer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Robin High Deliverer.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":3,"rarity":"-"},{"name":"Blárraven","default":4,"rarity":3},{"name":"Blárraven+","default":5,"rarity":5},{"name":"Glowing Ember","default":4,"rarity":3},{"name":"Bonfire","default":"-","rarity":4},{"name":"Defiant Spd 1","rarity":3},{"name":"Defiant Spd 2","rarity":4},{"name":"Defiant Spd 3","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Spur Def 2","rarity":3},{"name":"Spur Def 3","rarity":4}],"growthPoints":{"hp":6,"atk":6,"spd":6,"def":6,"res":4},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":6,"def":6,"res":4},"4":{"hp":17,"atk":7,"spd":7,"def":6,"res":4},"5":{"hp":18,"atk":7,"spd":7,"def":7,"res":5}},"40":{"3":{"hp":[33,36,39],"atk":[22,25,28],"spd":[22,25,28],"def":[22,25,28],"res":[16,19,22]},"4":{"hp":[34,37,40],"atk":[24,27,30],"spd":[24,27,30],"def":[23,26,29],"res":[17,20,23]},"5":{"hp":[36,40,43],"atk":[25,29,32],"spd":[25,29,32],"def":[25,29,32],"res":[19,22,25]}}}},{"name":"Robin: Mystery Tactician","shortName":"Robin","title":"Mystery Tactician","origin":"Fire Emblem Awakening","weaponType":"Green Tome","moveType":"Infantry","rarities":"2-4","releaseDate":"2017-02-23","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Robin Mystery Tactician.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Robin Mystery Tactician.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Robin Mystery Tactician.png"}},"skills":[{"name":"Wind","default":2,"rarity":"-"},{"name":"Elwind","default":3,"rarity":2},{"name":"Gronnwolf","default":4,"rarity":3},{"name":"Gronnwolf+","default":"-","rarity":5},{"name":"Glowing Ember","default":4,"rarity":3},{"name":"Ignis","default":"-","rarity":4},{"name":"Defiant Res 1","rarity":3},{"name":"Defiant Res 2","rarity":4},{"name":"Defiant Res 3","rarity":5},{"name":"B Tomebreaker 1","rarity":"-"},{"name":"B Tomebreaker 2","rarity":2},{"name":"B Tomebreaker 3","rarity":4}],"growthPoints":{"hp":6,"atk":6,"spd":6,"def":6,"res":4},"stats":{"1":{"2":{"hp":16,"atk":6,"spd":6,"def":5,"res":3},"3":{"hp":17,"atk":6,"spd":6,"def":6,"res":4},"4":{"hp":17,"atk":7,"spd":7,"def":6,"res":4},"5":{"hp":18,"atk":7,"spd":7,"def":7,"res":5}},"40":{"2":{"hp":[30,33,36],"atk":[20,23,26],"spd":[20,23,26],"def":[19,22,25],"res":[14,17,19]},"3":{"hp":[33,36,39],"atk":[22,25,28],"spd":[22,25,28],"def":[22,25,28],"res":[16,19,22]},"4":{"hp":[34,37,40],"atk":[24,27,30],"spd":[24,27,30],"def":[23,26,29],"res":[17,20,23]},"5":{"hp":[36,40,43],"atk":[25,29,32],"spd":[25,29,32],"def":[25,29,32],"res":[19,22,25]}}}},{"name":"Robin: Seaside Tactician","shortName":"Robin","title":"Seaside Tactician","origin":"Fire Emblem Awakening","weaponType":"Blue Lance","moveType":"Infantry","rarities":"5","releaseDate":"2017-06-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Robin Seaside Tactician.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Robin Seaside Tactician.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Robin Seaside Tactician.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Deft Harpoon","default":"-","rarity":"-"},{"name":"Deft Harpoon+","default":5,"rarity":"-"},{"name":"Reposition","default":5,"rarity":"-"},{"name":"Defense +1","rarity":"-"},{"name":"HP/Def 1","rarity":"-"},{"name":"HP/Def 2","rarity":5},{"name":"Lance Valor 1","rarity":"-"},{"name":"Lance Valor 2","rarity":"-"},{"name":"Lance Valor 3","rarity":5}],"growthPoints":{"hp":4,"atk":7,"spd":8,"def":6,"res":6},"stats":{"1":{"5":{"hp":18,"atk":8,"spd":8,"def":6,"res":7}},"40":{"5":{"hp":[32,35,38],"atk":[29,32,35],"spd":[31,34,37],"def":[24,28,31],"res":[25,29,32]}}}},{"name":"Roderick: Steady Squire","shortName":"Roderick","title":"Steady Squire","origin":"Fire Emblem: New Mystery of the Emblem","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-06-14","poolDate":"2017-06-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Roderick Steady Squire.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Roderick Steady Squire.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Roderick Steady Squire.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Firesweep Lance","default":4,"rarity":3},{"name":"Firesweep Lance+","default":5,"rarity":5},{"name":"Rally Defense","default":4,"rarity":3},{"name":"Rally Def/Res","default":"-","rarity":4},{"name":"Drag Back","rarity":3},{"name":"Spur Def 1","rarity":3},{"name":"Drive Def 1","rarity":4},{"name":"Drive Def 2","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":5,"res":4},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":7,"def":5,"res":6},"4":{"hp":17,"atk":7,"spd":8,"def":5,"res":6},"5":{"hp":18,"atk":7,"spd":8,"def":6,"res":7}},"40":{"3":{"hp":[33,36,39],"atk":[24,27,30],"spd":[27,30,33],"def":[19,22,25],"res":[18,21,24]},"4":{"hp":[34,37,40],"atk":[26,29,32],"spd":[29,32,35],"def":[20,23,26],"res":[19,22,25]},"5":{"hp":[36,40,43],"atk":[28,31,34],"spd":[31,34,37],"def":[22,25,29],"res":[21,24,27]}}}},{"name":"Roy: Brave Lion","shortName":"Roy","title":"Brave Lion","origin":"Fire Emblem: The Binding Blade","weaponType":"Red Sword","moveType":"Cavalry","rarities":"5","releaseDate":"2017-08-31","poolDate":"2017-09-15","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Roy Brave Lion.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Roy Brave Lion.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Roy Brave Lion.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Blazing Durandal","default":5,"rarity":"-"},{"name":"Night Sky","default":5,"rarity":"-"},{"name":"Astra","default":"-","rarity":5},{"name":"Galeforce","default":"-","rarity":5},{"name":"Darting Blow 1","rarity":"-"},{"name":"Steady Blow 1","rarity":"-"},{"name":"Steady Blow 2","rarity":5},{"name":"Desperation 1","rarity":"-"},{"name":"Desperation 2","rarity":"-"},{"name":"Desperation 3","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":5,"res":4},"stats":{"1":{"5":{"hp":16,"atk":8,"spd":8,"def":7,"res":7}},"40":{"5":{"hp":[34,38,41],"atk":[29,32,35],"spd":[31,34,37],"def":[23,26,30],"res":[21,24,27]}}}},{"name":"Roy: Young Lion","shortName":"Roy","title":"Young Lion","origin":"Fire Emblem: The Binding Blade","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Roy Young Lion.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Roy Young Lion.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Roy Young Lion.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Binding Blade","default":5,"rarity":5},{"name":"Shove","default":4,"rarity":3},{"name":"Triangle Adept 1","rarity":"-"},{"name":"Triangle Adept 2","rarity":3},{"name":"Triangle Adept 3","rarity":4},{"name":"Seal Def 1","rarity":3},{"name":"Seal Def 2","rarity":4},{"name":"Seal Def 3","rarity":5}],"growthPoints":{"hp":7,"atk":6,"spd":6,"def":5,"res":7},"stats":{"1":{"3":{"hp":19,"atk":7,"spd":8,"def":5,"res":3},"4":{"hp":19,"atk":8,"spd":9,"def":5,"res":3},"5":{"hp":20,"atk":8,"spd":9,"def":6,"res":4}},"40":{"3":{"hp":[37,40,43],"atk":[23,26,29],"spd":[24,27,30],"def":[19,22,25],"res":[21,24,27]},"4":{"hp":[38,41,44],"atk":[25,28,31],"spd":[26,29,32],"def":[20,23,26],"res":[22,25,28]},"5":{"hp":[41,44,47],"atk":[26,30,33],"spd":[27,31,34],"def":[22,25,29],"res":[25,28,31]}}}},{"name":"Roy: Youthful Gifts","shortName":"Roy","title":"Youthful Gifts","origin":"Fire Emblem: The Binding Blade","weaponType":"Colorless Bow","moveType":"Cavalry","rarities":"5","releaseDate":"2018-02-09","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Roy Youthful Gifts.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Roy Youthful Gifts.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Roy Youthful Gifts.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Gratia","default":"-","rarity":"-"},{"name":"Gratia+","default":5,"rarity":"-"},{"name":"Reciprocal Aid","default":5,"rarity":"-"},{"name":"Death Blow 1","rarity":"-"},{"name":"Death Blow 2","rarity":"-"},{"name":"Death Blow 3","rarity":5},{"name":"Bow Valor 1","rarity":"-"},{"name":"Bow Valor 2","rarity":"-"},{"name":"Bow Valor 3","rarity":5}],"growthPoints":{"hp":4,"atk":8,"spd":2,"def":6,"res":7},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":6,"def":5,"res":6}},"40":{"5":{"hp":[31,34,37],"atk":[32,35,38],"spd":[15,19,22],"def":[23,27,30],"res":[27,30,33]}}}},{"name":"Ryoma: Peerless Samurai","shortName":"Ryoma","title":"Peerless Samurai","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ryoma Peerless Samurai.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ryoma Peerless Samurai.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ryoma Peerless Samurai.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Raijinto","default":5,"rarity":"-"},{"name":"Night Sky","default":5,"rarity":"-"},{"name":"Astra","default":"-","rarity":5},{"name":"Defiant Atk 1","rarity":"-"},{"name":"Defiant Atk 2","rarity":"-"},{"name":"Defiant Atk 3","rarity":5},{"name":"Hone Spd 1","rarity":"-"},{"name":"Hone Spd 2","rarity":"-"},{"name":"Hone Spd 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":7,"def":6,"res":4},"stats":{"1":{"5":{"hp":19,"atk":8,"spd":11,"def":5,"res":4}},"40":{"5":{"hp":[37,41,44],"atk":[31,34,37],"spd":[32,35,38],"def":[23,27,30],"res":[18,21,24]}}}},{"name":"Ryoma: Supreme Samurai","shortName":"Ryoma","title":"Supreme Samurai","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Flying","rarities":"5","releaseDate":"2018-05-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ryoma Supreme Samurai.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ryoma Supreme Samurai.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ryoma Supreme Samurai.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Raijinto","default":5,"rarity":"-"},{"name":"Night Sky","default":5,"rarity":"-"},{"name":"Glimmer","default":"-","rarity":"-"},{"name":"Fierce Stance 1","rarity":"-"},{"name":"Kestrel Stance 1","rarity":"-"},{"name":"Kestrel Stance 2","rarity":"-"},{"name":"Bushido","rarity":"-"},{"name":"Guidance 1","rarity":"-"},{"name":"Guidance 2","rarity":"-"},{"name":"Guidance 3","rarity":"-"}],"growthPoints":{"hp":7,"atk":8,"spd":9,"def":6,"res":3},"stats":{"1":{"5":{"hp":17,"atk":8,"spd":11,"def":6,"res":5}},"40":{"5":{"hp":[38,41,44],"atk":[31,34,37],"spd":[36,39,42],"def":[24,28,31],"res":[17,20,23]}}}},{"name":"Saber: Driven Mercenary","shortName":"Saber","title":"Driven Mercenary","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Red Sword","moveType":"Infantry","rarities":"5","releaseDate":"2017-07-13","poolDate":"2017-07-28","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Saber Driven Mercenary.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Saber Driven Mercenary.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Saber Driven Mercenary.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Slaying Edge","default":"-","rarity":"-"},{"name":"Slaying Edge+","default":5,"rarity":"-"},{"name":"Holy Vestments","default":"-","rarity":"-"},{"name":"Aegis","default":5,"rarity":"-"},{"name":"HP +3","rarity":"-"},{"name":"HP/Spd 1","rarity":"-"},{"name":"HP/Spd 2","rarity":5},{"name":"Shield Pulse 1","rarity":"-"},{"name":"Shield Pulse 2","rarity":"-"},{"name":"Shield Pulse 3","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":7,"def":7,"res":4},"stats":{"1":{"5":{"hp":18,"atk":7,"spd":9,"def":8,"res":5}},"40":{"5":{"hp":[36,40,43],"atk":[28,31,34],"spd":[30,33,36],"def":[29,32,35],"res":[19,22,25]}}}},{"name":"Saias: Bishop of Flame","shortName":"Saias","title":"Bishop of Flame","origin":"Fire Emblem: Thracia 776","weaponType":"Blue Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2018-04-17","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Saias Bishop of Flame.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Saias Bishop of Flame.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Saias Bishop of Flame.png"}},"skills":[{"name":"Light","default":"-","rarity":"-"},{"name":"Ellight","default":3,"rarity":"-"},{"name":"Shine","default":4,"rarity":3},{"name":"Wargod's Tome","default":"-","rarity":5},{"name":"Chilling Wind","default":4,"rarity":3},{"name":"Glacies","default":"-","rarity":4},{"name":"Escape Route 1","rarity":3},{"name":"Escape Route 2","rarity":4},{"name":"Escape Route 3","rarity":5},{"name":"Spd Ploy 1","rarity":"-"},{"name":"Spd Ploy 2","rarity":3},{"name":"Spd Ploy 3","rarity":4}],"growthPoints":{"hp":5,"atk":8,"spd":6,"def":2,"res":8},"stats":{"1":{"3":{"hp":16,"atk":6,"spd":7,"def":4,"res":7},"4":{"hp":16,"atk":6,"spd":8,"def":4,"res":8},"5":{"hp":17,"atk":7,"spd":8,"def":5,"res":8}},"40":{"3":{"hp":[30,33,36],"atk":[26,29,32],"spd":[23,26,29],"def":[12,15,18],"res":[27,30,33]},"4":{"hp":[31,34,37],"atk":[27,30,33],"spd":[25,28,31],"def":[13,16,19],"res":[29,32,35]},"5":{"hp":[33,36,40],"atk":[30,33,36],"spd":[26,30,33],"def":[14,18,21],"res":[31,34,37]}}}},{"name":"Saizo: Angry Ninja","shortName":"Saizo","title":"Angry Ninja","origin":"Fire Emblem Fates","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Saizo Angry Ninja.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Saizo Angry Ninja.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Saizo Angry Ninja.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":3,"rarity":"-"},{"name":"Smoke Dagger","default":4,"rarity":3},{"name":"Smoke Dagger+","default":"-","rarity":5},{"name":"Harsh Command","default":4,"rarity":3},{"name":"Poison Strike 1","rarity":"-"},{"name":"Poison Strike 2","rarity":3},{"name":"Poison Strike 3","rarity":4},{"name":"Spur Spd 1","rarity":3},{"name":"Spur Spd 2","rarity":4},{"name":"Spur Spd 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":7,"res":2},"stats":{"1":{"3":{"hp":16,"atk":6,"spd":7,"def":8,"res":2},"4":{"hp":16,"atk":6,"spd":8,"def":9,"res":2},"5":{"hp":17,"atk":7,"spd":8,"def":9,"res":3}},"40":{"3":{"hp":[30,33,36],"atk":[22,25,28],"spd":[27,30,33],"def":[26,29,32],"res":[10,13,16]},"4":{"hp":[31,34,37],"atk":[23,26,29],"spd":[29,32,35],"def":[28,31,34],"res":[11,14,17]},"5":{"hp":[33,36,40],"atk":[25,29,32],"spd":[31,34,37],"def":[30,33,36],"res":[12,16,19]}}}},{"name":"Sakura: Gentle Nekomata","shortName":"Sakura","title":"Gentle Nekomata","origin":"Fire Emblem Fates","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"5","releaseDate":"2017-10-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sakura Gentle Nekomata.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sakura Gentle Nekomata.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sakura Gentle Nekomata.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":"-","rarity":"-"},{"name":"Kitty Paddle","default":"-","rarity":"-"},{"name":"Kitty Paddle+","default":5,"rarity":"-"},{"name":"Chilling Wind","default":5,"rarity":"-"},{"name":"Glacies","default":"-","rarity":5},{"name":"Warding Stance 1","rarity":"-"},{"name":"Warding Stance 2","rarity":"-"},{"name":"Warding Stance 3","rarity":5},{"name":"Guard 1","rarity":"-"},{"name":"Guard 2","rarity":"-"},{"name":"Guard 3","rarity":5},{"name":"Dagger Valor 1","rarity":"-"},{"name":"Dagger Valor 2","rarity":"-"},{"name":"Dagger Valor 3","rarity":5}],"growthPoints":{"hp":4,"atk":7,"spd":8,"def":1,"res":8},"stats":{"1":{"5":{"hp":16,"atk":8,"spd":8,"def":4,"res":8}},"40":{"5":{"hp":[30,33,36],"atk":[29,32,35],"spd":[31,34,37],"def":[11,14,18],"res":[31,34,37]}}}},{"name":"Sakura: Loving Priestess","shortName":"Sakura","title":"Loving Priestess","origin":"Fire Emblem Fates","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sakura Loving Priestess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sakura Loving Priestess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sakura Loving Priestess.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Fear","default":"-","rarity":3},{"name":"Fear+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Mend","default":4,"rarity":"-"},{"name":"Physic","default":5,"rarity":3},{"name":"Imbue","default":4,"rarity":"-"},{"name":"Still-Water Balm","default":5,"rarity":3},{"name":"Fortify Def 1","rarity":3},{"name":"Fortify Def 2","rarity":4},{"name":"Fortify Def 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":6,"def":5,"res":6},"stats":{"1":{"3":{"hp":16,"atk":5,"spd":7,"def":4,"res":7},"4":{"hp":16,"atk":5,"spd":8,"def":4,"res":8},"5":{"hp":17,"atk":6,"spd":8,"def":5,"res":8}},"40":{"3":{"hp":[30,33,36],"atk":[21,24,27],"spd":[23,26,29],"def":[18,21,24],"res":[23,26,29]},"4":{"hp":[31,34,37],"atk":[22,25,28],"spd":[25,28,31],"def":[19,22,25],"res":[25,28,31]},"5":{"hp":[33,36,40],"atk":[24,28,31],"spd":[26,30,33],"def":[21,24,28],"res":[26,30,33]}}}},{"name":"Sanaki: Apostle in White","shortName":"Sanaki","title":"Apostle in White","origin":"Fire Emblem: Path of Radiance","weaponType":"Green Tome","moveType":"Flying","rarities":"5","releaseDate":"2018-05-21","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sanaki Apostle in White.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sanaki Apostle in White.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sanaki Apostle in White.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Rexcalibur","default":"-","rarity":"-"},{"name":"Nifl Frostflowers","default":5,"rarity":"-"},{"name":"Draw Back","default":5,"rarity":"-"},{"name":"Atk/Res Bond 1","rarity":"-"},{"name":"Atk/Res Bond 2","rarity":"-"},{"name":"Atk/Res Bond 3","rarity":5},{"name":"Def/Res Link 1","rarity":"-"},{"name":"Def/Res Link 2","rarity":"-"},{"name":"Def/Res Link 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":6,"def":2,"res":8},"stats":{"1":{"5":{"hp":16,"atk":10,"spd":8,"def":3,"res":7}},"40":{"5":{"hp":[32,35,39],"atk":[33,36,39],"spd":[26,30,33],"def":[12,16,19],"res":[30,33,36]}}}},{"name":"Sanaki: Begnion's Apostle","shortName":"Sanaki","title":"Begnion's Apostle","origin":"Fire Emblem: Radiant Dawn","weaponType":"Red Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-02-27","poolDate":"2017-03-14","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sanaki Begnions Apostle.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sanaki Begnions Apostle.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sanaki Begnions Apostle.png"}},"skills":[{"name":"Fire","default":"-","rarity":"-"},{"name":"Elfire","default":"-","rarity":"-"},{"name":"Bolganone","default":"-","rarity":"-"},{"name":"Cymbeline","default":5,"rarity":"-"},{"name":"Harsh Command","default":5,"rarity":"-"},{"name":"Triangle Adept 1","rarity":"-"},{"name":"Triangle Adept 2","rarity":"-"},{"name":"Triangle Adept 3","rarity":5},{"name":"Hone Atk 1","rarity":"-"},{"name":"Hone Atk 2","rarity":"-"},{"name":"Hone Atk 3","rarity":5}],"growthPoints":{"hp":4,"atk":9,"spd":5,"def":2,"res":8},"stats":{"1":{"5":{"hp":16,"atk":9,"spd":7,"def":4,"res":8}},"40":{"5":{"hp":[30,33,36],"atk":[34,37,40],"spd":[23,26,30],"def":[13,17,20],"res":[31,34,37]}}}},{"name":"Selena: Cutting Wit","shortName":"Selena","title":"Cutting Wit","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Selena Cutting Wit.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Selena Cutting Wit.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Selena Cutting Wit.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Armorslayer","default":4,"rarity":3},{"name":"Armorslayer+","default":5,"rarity":5},{"name":"Reposition","default":4,"rarity":3},{"name":"Triangle Adept 1","rarity":3},{"name":"Triangle Adept 2","rarity":4},{"name":"Triangle Adept 3","rarity":5},{"name":"Threaten Spd 1","rarity":"-"},{"name":"Threaten Spd 2","rarity":3},{"name":"Threaten Spd 3","rarity":4}],"growthPoints":{"hp":5,"atk":5,"spd":8,"def":7,"res":6},"stats":{"1":{"3":{"hp":17,"atk":5,"spd":8,"def":7,"res":5},"4":{"hp":17,"atk":5,"spd":9,"def":8,"res":5},"5":{"hp":18,"atk":6,"spd":9,"def":8,"res":6}},"40":{"3":{"hp":[31,34,37],"atk":[19,22,25],"spd":[28,31,34],"def":[25,28,31],"res":[21,24,27]},"4":{"hp":[32,35,38],"atk":[20,23,26],"spd":[30,33,36],"def":[27,30,33],"res":[22,25,28]},"5":{"hp":[34,37,41],"atk":[22,25,29],"spd":[32,35,38],"def":[29,32,35],"res":[24,28,31]}}}},{"name":"Seliph: Heir of Light","shortName":"Seliph","title":"Heir of Light","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Red Sword","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-15","poolDate":"2017-02-27","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Seliph Heir of Light.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Seliph Heir of Light.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Seliph Heir of Light.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Tyrfing","default":5,"rarity":5},{"name":"Rally Speed","default":4,"rarity":3},{"name":"HP +3","rarity":"-"},{"name":"HP +4","rarity":3},{"name":"HP +5","rarity":4},{"name":"Brash Assault 1","rarity":3},{"name":"Brash Assault 2","rarity":4},{"name":"Brash Assault 3","rarity":5}],"growthPoints":{"hp":9,"atk":8,"spd":4,"def":6,"res":4},"stats":{"1":{"3":{"hp":18,"atk":7,"spd":6,"def":7,"res":4},"4":{"hp":18,"atk":8,"spd":6,"def":8,"res":4},"5":{"hp":19,"atk":8,"spd":7,"def":8,"res":5}},"40":{"3":{"hp":[40,43,46],"atk":[27,30,33],"spd":[18,21,24],"def":[23,26,29],"res":[16,19,22]},"4":{"hp":[41,44,47],"atk":[29,32,35],"spd":[19,22,25],"def":[25,28,31],"res":[17,20,23]},"5":{"hp":[44,47,50],"atk":[31,34,37],"spd":[21,24,27],"def":[26,30,33],"res":[19,22,25]}}}},{"name":"Serra: Outspoken Cleric","shortName":"Serra","title":"Outspoken Cleric","origin":"Fire Emblem: The Blazing Blade","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Serra Outspoken Cleric.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Serra Outspoken Cleric.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Serra Outspoken Cleric.png"}},"skills":[{"name":"Assault","default":"-","rarity":"-"},{"name":"Absorb","default":"-","rarity":3},{"name":"Absorb+","default":"-","rarity":5},{"name":"Heal","default":"-","rarity":"-"},{"name":"Mend","default":3,"rarity":"-"},{"name":"Recover","default":"-","rarity":4},{"name":"Imbue","default":4,"rarity":"-"},{"name":"Swift-Winds Balm","default":"-","rarity":3},{"name":"Hone Atk 1","rarity":3},{"name":"Hone Atk 2","rarity":4},{"name":"Hone Atk 3","rarity":5}],"growthPoints":{"hp":4,"atk":7,"spd":6,"def":4,"res":7},"stats":{"1":{"3":{"hp":15,"atk":5,"spd":8,"def":3,"res":8},"4":{"hp":15,"atk":5,"spd":9,"def":3,"res":9},"5":{"hp":16,"atk":6,"spd":9,"def":4,"res":9}},"40":{"3":{"hp":[27,30,33],"atk":[23,26,29],"spd":[24,27,30],"def":[15,18,21],"res":[26,29,32]},"4":{"hp":[28,31,34],"atk":[24,27,30],"spd":[26,29,32],"def":[16,19,22],"res":[28,31,34]},"5":{"hp":[30,33,36],"atk":[27,30,33],"spd":[27,31,34],"def":[18,21,24],"res":[30,33,36]}}}},{"name":"Seth: Silver Knight","shortName":"Seth","title":"Silver Knight","origin":"Fire Emblem: The Sacred Stones","weaponType":"Red Sword","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-08-15","poolDate":"2017-08-31","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Seth Silver Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Seth Silver Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Seth Silver Knight.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Ruby Sword","default":4,"rarity":3},{"name":"Ruby Sword+","default":5,"rarity":5},{"name":"Swap","default":4,"rarity":3},{"name":"Fortress Def 1","rarity":"-"},{"name":"Fortress Def 2","rarity":3},{"name":"Fortress Def 3","rarity":4},{"name":"Seal Atk 1","rarity":3},{"name":"Seal Atk/Def 1","rarity":4},{"name":"Seal Atk/Def 2","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":7,"def":7,"res":4},"stats":{"1":{"3":{"hp":17,"atk":7,"spd":6,"def":7,"res":4},"4":{"hp":17,"atk":8,"spd":6,"def":8,"res":4},"5":{"hp":18,"atk":8,"spd":7,"def":8,"res":5}},"40":{"3":{"hp":[31,34,37],"atk":[25,28,31],"spd":[24,27,30],"def":[25,28,31],"res":[16,19,22]},"4":{"hp":[32,35,38],"atk":[27,30,33],"spd":[25,28,31],"def":[27,30,33],"res":[17,20,23]},"5":{"hp":[34,37,41],"atk":[29,32,35],"spd":[28,31,34],"def":[29,32,35],"res":[19,22,25]}}}},{"name":"Setsuna: Absent Archer","shortName":"Setsuna","title":"Absent Archer","origin":"Fire Emblem Fates","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Setsuna Absent Archer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Setsuna Absent Archer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Setsuna Absent Archer.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":3,"rarity":"-"},{"name":"Assassin's Bow","default":4,"rarity":3},{"name":"Assassin's Bow+","default":5,"rarity":5},{"name":"Reciprocal Aid","default":4,"rarity":3},{"name":"HP +3","rarity":3},{"name":"HP +4","rarity":4},{"name":"HP +5","rarity":5},{"name":"Bowbreaker 1","rarity":"-"},{"name":"Bowbreaker 2","rarity":3},{"name":"Bowbreaker 3","rarity":4}],"growthPoints":{"hp":5,"atk":6,"spd":9,"def":4,"res":4},"stats":{"1":{"3":{"hp":17,"atk":5,"spd":8,"def":4,"res":5},"4":{"hp":17,"atk":6,"spd":9,"def":4,"res":5},"5":{"hp":18,"atk":6,"spd":9,"def":5,"res":6}},"40":{"3":{"hp":[31,34,37],"atk":[21,24,27],"spd":[30,33,36],"def":[16,19,22],"res":[17,20,23]},"4":{"hp":[32,35,38],"atk":[23,26,29],"spd":[32,35,38],"def":[17,20,23],"res":[18,21,24]},"5":{"hp":[34,37,41],"atk":[24,28,31],"spd":[34,37,40],"def":[19,22,25],"res":[20,23,26]}}}},{"name":"Shanna: Sprightly Flier","shortName":"Shanna","title":"Sprightly Flier","origin":"Fire Emblem: The Binding Blade","weaponType":"Blue Lance","moveType":"Flying","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Shanna Sprightly Flier.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Shanna Sprightly Flier.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Shanna Sprightly Flier.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Killer Lance","default":4,"rarity":3},{"name":"Killer Lance+","default":5,"rarity":5},{"name":"Chilling Wind","default":4,"rarity":3},{"name":"Iceberg","default":"-","rarity":4},{"name":"Desperation 1","rarity":"-"},{"name":"Desperation 2","rarity":3},{"name":"Desperation 3","rarity":4},{"name":"Threaten Spd 1","rarity":3},{"name":"Threaten Spd 2","rarity":4},{"name":"Threaten Spd 3","rarity":5}],"growthPoints":{"hp":6,"atk":6,"spd":8,"def":5,"res":6},"stats":{"1":{"3":{"hp":16,"atk":7,"spd":8,"def":5,"res":6},"4":{"hp":16,"atk":8,"spd":9,"def":5,"res":6},"5":{"hp":17,"atk":8,"spd":9,"def":6,"res":7}},"40":{"3":{"hp":[32,35,38],"atk":[23,26,29],"spd":[28,31,34],"def":[19,22,25],"res":[22,25,28]},"4":{"hp":[33,36,39],"atk":[25,28,31],"spd":[30,33,36],"def":[20,23,26],"res":[23,26,29]},"5":{"hp":[35,39,42],"atk":[26,30,33],"spd":[32,35,38],"def":[22,25,29],"res":[25,29,32]}}}},{"name":"Sharena: Princess of Askr","shortName":"Sharena","title":"Princess of Askr","origin":"Fire Emblem Heroes","weaponType":"Blue Lance","moveType":"Infantry","rarities":"2","releaseDate":"2017-02-02","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sharena Princess of Askr.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sharena Princess of Askr.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sharena Princess of Askr.png"}},"skills":[{"name":"Iron Lance","default":2,"rarity":"-"},{"name":"Steel Lance","default":"-","rarity":2},{"name":"Silver Lance","default":"-","rarity":3},{"name":"Fensalir","default":"-","rarity":5},{"name":"Rally Attack","default":2,"rarity":"-"},{"name":"Speed +1","rarity":"-"},{"name":"Speed +2","rarity":2},{"name":"Speed +3","rarity":4},{"name":"Fortify Def 1","rarity":3},{"name":"Fortify Def 2","rarity":4},{"name":"Fortify Def 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":7,"def":6,"res":4},"stats":{"1":{"2":{"hp":17,"atk":7,"spd":7,"def":5,"res":3},"3":{"hp":18,"atk":7,"spd":7,"def":6,"res":4},"4":{"hp":18,"atk":8,"spd":8,"def":6,"res":4},"5":{"hp":19,"atk":8,"spd":8,"def":7,"res":5}},"40":{"2":{"hp":[33,36,39],"atk":[23,26,29],"spd":[23,26,29],"def":[19,22,25],"res":[14,17,19]},"3":{"hp":[36,39,42],"atk":[25,28,31],"spd":[25,28,31],"def":[22,25,28],"res":[16,19,22]},"4":{"hp":[37,40,43],"atk":[27,30,33],"spd":[27,30,33],"def":[23,26,29],"res":[17,20,23]},"5":{"hp":[40,43,46],"atk":[29,32,35],"spd":[29,32,35],"def":[25,29,32],"res":[19,22,25]}}}},{"name":"Sharena: Spring Princess","shortName":"Sharena","title":"Spring Princess","origin":"Fire Emblem Heroes","weaponType":"Green Tome","moveType":"Infantry","rarities":"5","releaseDate":"2018-03-22","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sharena Spring Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sharena Spring Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sharena Spring Princess.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Rexcalibur","default":"-","rarity":"-"},{"name":"Muninn's Egg","default":5,"rarity":"-"},{"name":"Rally Speed","default":5,"rarity":"-"},{"name":"Rally Atk/Spd","default":"-","rarity":5},{"name":"Darting Stance 1","rarity":"-"},{"name":"Swift Stance 1","rarity":"-"},{"name":"Swift Stance 2","rarity":5},{"name":"Live for Bounty","rarity":5},{"name":"Res Tactic 1","rarity":"-"},{"name":"Res Tactic 2","rarity":"-"},{"name":"Res Tactic 3","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":8,"def":2,"res":7},"stats":{"1":{"5":{"hp":18,"atk":8,"spd":10,"def":3,"res":6}},"40":{"5":{"hp":[34,37,41],"atk":[29,32,35],"spd":[33,36,39],"def":[12,16,19],"res":[27,30,33]}}}},{"name":"Sheena: Princess of Gra","shortName":"Sheena","title":"Princess of Gra","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Green Axe","moveType":"Armored","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sheena Princess of Gra.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sheena Princess of Gra.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sheena Princess of Gra.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Killer Axe","default":4,"rarity":3},{"name":"Killer Axe+","default":5,"rarity":5},{"name":"Buckler","default":4,"rarity":3},{"name":"Escutcheon","default":"-","rarity":4},{"name":"Svalinn Shield","rarity":3},{"name":"Fortify Def 1","rarity":"-"},{"name":"Fortify Def 2","rarity":3},{"name":"Fortify Armor","rarity":4}],"growthPoints":{"hp":7,"atk":6,"spd":5,"def":7,"res":8},"stats":{"1":{"3":{"hp":20,"atk":7,"spd":5,"def":11,"res":6},"4":{"hp":20,"atk":8,"spd":5,"def":12,"res":6},"5":{"hp":21,"atk":8,"spd":6,"def":12,"res":7}},"40":{"3":{"hp":[38,41,44],"atk":[23,26,29],"spd":[19,22,25],"def":[29,32,35],"res":[26,29,32]},"4":{"hp":[39,42,45],"atk":[25,28,31],"spd":[20,23,26],"def":[31,34,37],"res":[27,30,33]},"5":{"hp":[42,45,48],"atk":[26,30,33],"spd":[22,25,29],"def":[33,36,39],"res":[30,33,36]}}}},{"name":"Shigure: Dark Sky Singer","shortName":"Shigure","title":"Dark Sky Singer","origin":"Fire Emblem Fates","weaponType":"Blue Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-09-29","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Shigure Dark Sky Singer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Shigure Dark Sky Singer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Shigure Dark Sky Singer.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":"-","rarity":"-"},{"name":"Dancer's Score","default":"-","rarity":"-"},{"name":"Dancer's Score+","default":5,"rarity":"-"},{"name":"Sing","default":5,"rarity":"-"},{"name":"Torrent Dance 1","rarity":"-"},{"name":"Geyser Dance 1","rarity":"-"},{"name":"Geyser Dance 2","rarity":5},{"name":"B Tome Valor 1","rarity":"-"},{"name":"B Tome Valor 2","rarity":"-"},{"name":"B Tome Valor 3","rarity":5}],"growthPoints":{"hp":5,"atk":7,"spd":7,"def":4,"res":5},"stats":{"1":{"5":{"hp":15,"atk":7,"spd":5,"def":4,"res":5}},"40":{"5":{"hp":[31,34,38],"atk":[28,31,34],"spd":[26,29,32],"def":[18,21,24],"res":[21,24,28]}}}},{"name":"Shigure: Uplifting Artist","shortName":"Shigure","title":"Uplifting Artist","origin":"Fire Emblem Fates","weaponType":"Blue Lance","moveType":"Flying","rarities":"4-5","releaseDate":"2018-04-24","poolDate":"2018-05-10","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Shigure Uplifting Artist.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Shigure Uplifting Artist.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Shigure Uplifting Artist.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Harmonic Lance","default":4,"rarity":"-"},{"name":"Harmonic Lance+","default":5,"rarity":5},{"name":"Daylight","default":4,"rarity":"-"},{"name":"Noontime","default":"-","rarity":4},{"name":"Darting Stance 1","rarity":"-"},{"name":"Darting Stance 2","rarity":4},{"name":"Darting Stance 3","rarity":5},{"name":"Spur Res 1","rarity":"-"},{"name":"Spur Res 2","rarity":"-"},{"name":"Ward Fliers","rarity":4}],"growthPoints":{"hp":6,"atk":8,"spd":9,"def":6,"res":4},"stats":{"1":{"4":{"hp":17,"atk":6,"spd":9,"def":4,"res":8},"5":{"hp":18,"atk":7,"spd":9,"def":5,"res":8}},"40":{"4":{"hp":[34,37,40],"atk":[27,30,33],"spd":[32,35,38],"def":[21,24,27],"res":[21,24,27]},"5":{"hp":[36,40,43],"atk":[30,33,36],"spd":[34,37,40],"def":[23,27,30],"res":[22,25,28]}}}},{"name":"Shiro: Raw Talent","shortName":"Shiro","title":"Raw Talent","origin":"Fire Emblem Fates","weaponType":"Blue Lance","moveType":"Infantry","rarities":"5","releaseDate":"2017-12-04","poolDate":"2017-12-18","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Shiro Raw Talent.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Shiro Raw Talent.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Shiro Raw Talent.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Silver Lance","default":"-","rarity":"-"},{"name":"Bright Naginata","default":5,"rarity":"-"},{"name":"Swap","default":5,"rarity":"-"},{"name":"Steady Stance 1","rarity":"-"},{"name":"Steady Stance 2","rarity":"-"},{"name":"Steady Stance 3","rarity":5},{"name":"Def Tactic 1","rarity":"-"},{"name":"Def Tactic 2","rarity":"-"},{"name":"Def Tactic 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":7,"def":8,"res":4},"stats":{"1":{"5":{"hp":19,"atk":9,"spd":6,"def":9,"res":5}},"40":{"5":{"hp":[37,41,44],"atk":[32,35,38],"spd":[27,30,33],"def":[32,35,38],"res":[19,22,25]}}}},{"name":"Siegbert: Future King","shortName":"Siegbert","title":"Future King","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Cavalry","rarities":"5","releaseDate":"2017-12-04","poolDate":"2017-12-18","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Siegbert Future King.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Siegbert Future King.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Siegbert Future King.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Dark Greatsword","default":5,"rarity":"-"},{"name":"Dragon Gaze","default":5,"rarity":"-"},{"name":"Dragon Fang","default":"-","rarity":5},{"name":"Death Blow 1","rarity":"-"},{"name":"Death Blow 2","rarity":"-"},{"name":"Death Blow 3","rarity":5},{"name":"Atk Tactic 1","rarity":"-"},{"name":"Atk Tactic 2","rarity":"-"},{"name":"Atk Tactic 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":8,"def":7,"res":2},"stats":{"1":{"5":{"hp":19,"atk":8,"spd":9,"def":7,"res":3}},"40":{"5":{"hp":[37,41,44],"atk":[31,34,37],"spd":[32,35,38],"def":[28,31,34],"res":[12,16,19]}}}},{"name":"Sigurd: Holy Knight","shortName":"Sigurd","title":"Holy Knight","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Red Sword","moveType":"Cavalry","rarities":"5","releaseDate":"2017-10-16","poolDate":"2017-10-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sigurd Holy Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sigurd Holy Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sigurd Holy Knight.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Divine Tyrfing","default":5,"rarity":"-"},{"name":"Miracle","default":5,"rarity":"-"},{"name":"Close Def 1","rarity":"-"},{"name":"Close Def 2","rarity":"-"},{"name":"Close Def 3","rarity":5},{"name":"Crusader's Ward","rarity":5},{"name":"Spd Smoke 1","rarity":"-"},{"name":"Spd Smoke 2","rarity":"-"},{"name":"Spd Smoke 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":7,"def":9,"res":2},"stats":{"1":{"5":{"hp":19,"atk":9,"spd":8,"def":6,"res":4}},"40":{"5":{"hp":[37,41,44],"atk":[32,35,38],"spd":[29,32,35],"def":[31,34,37],"res":[13,17,20]}}}},{"name":"Soleil: Adorable Adorer","shortName":"Soleil","title":"Adorable Adorer","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Infantry","rarities":"4-5","releaseDate":"2017-12-04","poolDate":"2017-12-18","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Soleil Adorable Adorer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Soleil Adorable Adorer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Soleil Adorable Adorer.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Firesweep Sword","default":4,"rarity":"-"},{"name":"Firesweep Sword+","default":5,"rarity":5},{"name":"Rising Wind","default":4,"rarity":"-"},{"name":"Blazing Wind","default":"-","rarity":4},{"name":"Darting Blow 1","rarity":"-"},{"name":"Darting Blow 2","rarity":4},{"name":"Darting Blow 3","rarity":5},{"name":"Spur Res 1","rarity":"-"},{"name":"Drive Res 1","rarity":"-"},{"name":"Drive Res 2","rarity":4}],"growthPoints":{"hp":5,"atk":9,"spd":8,"def":6,"res":5},"stats":{"1":{"4":{"hp":17,"atk":10,"spd":9,"def":5,"res":4},"5":{"hp":18,"atk":10,"spd":9,"def":6,"res":5}},"40":{"4":{"hp":[32,35,38],"atk":[33,36,39],"spd":[30,33,36],"def":[22,25,28],"res":[19,22,25]},"5":{"hp":[34,37,41],"atk":[35,38,41],"spd":[32,35,38],"def":[24,28,31],"res":[21,24,28]}}}},{"name":"Sonya: Vengeful Mage","shortName":"Sonya","title":"Vengeful Mage","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Green Tome","moveType":"Infantry","rarities":"5","releaseDate":"2017-07-13","poolDate":"2017-07-28","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sonya Vengeful Mage.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sonya Vengeful Mage.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sonya Vengeful Mage.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":"-","rarity":"-"},{"name":"Rexcalibur","default":"-","rarity":"-"},{"name":"Dark Excalibur","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Moonbow","default":"-","rarity":5},{"name":"Warding Blow 1","rarity":"-"},{"name":"Mirror Strike 1","rarity":"-"},{"name":"Mirror Strike 2","rarity":5},{"name":"Res Ploy 1","rarity":"-"},{"name":"Res Ploy 2","rarity":"-"},{"name":"Res Ploy 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":7,"def":1,"res":7},"stats":{"1":{"5":{"hp":17,"atk":7,"spd":7,"def":5,"res":8}},"40":{"5":{"hp":[33,36,40],"atk":[30,33,36],"spd":[28,31,34],"def":[12,15,19],"res":[29,32,35]}}}},{"name":"Sophia: Nabata Prophet","shortName":"Sophia","title":"Nabata Prophet","origin":"Fire Emblem: The Binding Blade","weaponType":"Red Tome","moveType":"Infantry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sophia Nabata Prophet.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sophia Nabata Prophet.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sophia Nabata Prophet.png"}},"skills":[{"name":"Flux","default":1,"rarity":"-"},{"name":"Ruin","default":3,"rarity":2},{"name":"Fenrir","default":4,"rarity":3},{"name":"Fenrir+","default":5,"rarity":5},{"name":"Dragon Gaze","default":4,"rarity":3},{"name":"Dragon Fang","default":"-","rarity":4},{"name":"Warding Blow 1","rarity":3},{"name":"Warding Blow 2","rarity":4},{"name":"Warding Blow 3","rarity":5},{"name":"Fortify Res 1","rarity":1},{"name":"Fortify Res 2","rarity":2},{"name":"Fortify Res 3","rarity":4}],"growthPoints":{"hp":6,"atk":7,"spd":3,"def":6,"res":6},"stats":{"1":{"1":{"hp":16,"atk":7,"spd":2,"def":4,"res":5},"2":{"hp":16,"atk":8,"spd":2,"def":4,"res":6},"3":{"hp":17,"atk":8,"spd":3,"def":5,"res":6},"4":{"hp":17,"atk":9,"spd":3,"def":5,"res":7},"5":{"hp":18,"atk":9,"spd":4,"def":6,"res":7}},"40":{"1":{"hp":[29,32,35],"atk":[22,25,27],"spd":[10,13,16],"def":[17,20,23],"res":[18,21,24]},"2":{"hp":[30,33,36],"atk":[24,27,30],"spd":[11,14,17],"def":[18,21,24],"res":[20,23,26]},"3":{"hp":[33,36,39],"atk":[26,29,32],"spd":[13,16,19],"def":[21,24,27],"res":[22,25,28]},"4":{"hp":[34,37,40],"atk":[28,31,34],"spd":[14,17,20],"def":[22,25,28],"res":[24,27,30]},"5":{"hp":[36,40,43],"atk":[30,33,36],"spd":[16,19,22],"def":[24,28,31],"res":[25,29,32]}}}},{"name":"Soren: Shrewd Strategist","shortName":"Soren","title":"Shrewd Strategist","origin":"Fire Emblem: Path of Radiance","weaponType":"Green Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-04-26","poolDate":"2017-05-15","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Soren Shrewd Strategist.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Soren Shrewd Strategist.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Soren Shrewd Strategist.png"}},"skills":[{"name":"Wind","default":"-","rarity":"-"},{"name":"Elwind","default":3,"rarity":"-"},{"name":"Rexcalibur","default":4,"rarity":3},{"name":"Rexcalibur+","default":5,"rarity":5},{"name":"Wind's Brand","default":"-","rarity":5},{"name":"Rising Wind","default":4,"rarity":3},{"name":"Growing Wind","default":"-","rarity":4},{"name":"Watersweep 1","rarity":3},{"name":"Watersweep 2","rarity":4},{"name":"Watersweep 3","rarity":5},{"name":"Fortify Res 1","rarity":"-"},{"name":"Fortify Res 2","rarity":3},{"name":"Fortify Res 3","rarity":4}],"growthPoints":{"hp":5,"atk":8,"spd":7,"def":2,"res":6},"stats":{"1":{"3":{"hp":16,"atk":6,"spd":8,"def":3,"res":6},"4":{"hp":16,"atk":7,"spd":9,"def":3,"res":6},"5":{"hp":17,"atk":7,"spd":9,"def":4,"res":7}},"40":{"3":{"hp":[30,33,36],"atk":[26,29,32],"spd":[26,29,32],"def":[11,14,17],"res":[22,25,28]},"4":{"hp":[31,34,37],"atk":[28,31,34],"spd":[28,31,34],"def":[12,15,18],"res":[23,26,29]},"5":{"hp":[33,36,40],"atk":[30,33,36],"spd":[30,33,36],"def":[13,17,20],"res":[25,29,32]}}}},{"name":"Sothe: Zephyr","shortName":"Sothe","title":"Zephyr","origin":"Fire Emblem: Radiant Dawn","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"4-5","releaseDate":"2018-01-12","poolDate":"2018-01-25","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sothe Zephyr.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sothe Zephyr.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sothe Zephyr.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":"-","rarity":"-"},{"name":"Silver Dagger","default":4,"rarity":"-"},{"name":"Peshkatz","default":5,"rarity":5},{"name":"Night Sky","default":4,"rarity":"-"},{"name":"Glimmer","default":"-","rarity":4},{"name":"Life and Death 1","rarity":"-"},{"name":"Life and Death 2","rarity":"-"},{"name":"Life and Death 3","rarity":4},{"name":"Spur Atk 1","rarity":"-"},{"name":"Spur Atk/Spd 1","rarity":4},{"name":"Spur Atk/Spd 2","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":7,"def":4,"res":4},"stats":{"1":{"4":{"hp":16,"atk":10,"spd":9,"def":4,"res":3},"5":{"hp":17,"atk":10,"spd":9,"def":5,"res":4}},"40":{"4":{"hp":[33,36,39],"atk":[31,34,37],"spd":[28,31,34],"def":[17,20,23],"res":[16,19,22]},"5":{"hp":[35,39,42],"atk":[33,36,39],"spd":[30,33,36],"def":[19,22,25],"res":[18,21,24]}}}},{"name":"Stahl: Viridian Knight","shortName":"Stahl","title":"Viridian Knight","origin":"Fire Emblem Awakening","weaponType":"Red Sword","moveType":"Cavalry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Stahl Viridian Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Stahl Viridian Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Stahl Viridian Knight.png"}},"skills":[{"name":"Iron Sword","default":1,"rarity":"-"},{"name":"Steel Sword","default":3,"rarity":2},{"name":"Ruby Sword","default":4,"rarity":3},{"name":"Ruby Sword+","default":"-","rarity":5},{"name":"Swap","default":4,"rarity":3},{"name":"Defense +1","rarity":1},{"name":"Defense +2","rarity":2},{"name":"Defense +3","rarity":4},{"name":"Obstruct 1","rarity":3},{"name":"Obstruct 2","rarity":4},{"name":"Obstruct 3","rarity":5}],"growthPoints":{"hp":8,"atk":7,"spd":5,"def":6,"res":4},"stats":{"1":{"1":{"hp":17,"atk":5,"spd":5,"def":6,"res":3},"2":{"hp":17,"atk":6,"spd":5,"def":7,"res":3},"3":{"hp":18,"atk":6,"spd":6,"def":7,"res":4},"4":{"hp":18,"atk":7,"spd":6,"def":8,"res":4},"5":{"hp":19,"atk":7,"spd":7,"def":8,"res":5}},"40":{"1":{"hp":[34,36,39],"atk":[20,23,25],"spd":[17,19,22],"def":[19,22,25],"res":[13,16,18]},"2":{"hp":[35,38,41],"atk":[22,25,28],"spd":[18,20,23],"def":[21,24,27],"res":[14,17,19]},"3":{"hp":[38,41,44],"atk":[24,27,30],"spd":[20,23,26],"def":[23,26,29],"res":[16,19,22]},"4":{"hp":[39,42,45],"atk":[26,29,32],"spd":[21,24,27],"def":[25,28,31],"res":[17,20,23]},"5":{"hp":[42,45,48],"atk":[28,31,34],"spd":[23,26,30],"def":[26,30,33],"res":[19,22,25]}}}},{"name":"Subaki: Perfect Expert","shortName":"Subaki","title":"Perfect Expert","origin":"Fire Emblem Fates","weaponType":"Blue Lance","moveType":"Flying","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Subaki Perfect Expert.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Subaki Perfect Expert.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Subaki Perfect Expert.png"}},"skills":[{"name":"Iron Lance","default":1,"rarity":"-"},{"name":"Steel Lance","default":3,"rarity":2},{"name":"Sapphire Lance","default":4,"rarity":3},{"name":"Sapphire Lance+","default":5,"rarity":5},{"name":"Swap","default":4,"rarity":3},{"name":"Resistance +1","rarity":1},{"name":"Resistance +2","rarity":2},{"name":"Resistance +3","rarity":4},{"name":"Quick Riposte 1","rarity":3},{"name":"Quick Riposte 2","rarity":4},{"name":"Quick Riposte 3","rarity":5}],"growthPoints":{"hp":6,"atk":5,"spd":8,"def":8,"res":4},"stats":{"1":{"1":{"hp":16,"atk":4,"spd":7,"def":7,"res":3},"2":{"hp":16,"atk":4,"spd":8,"def":8,"res":3},"3":{"hp":17,"atk":5,"spd":8,"def":8,"res":4},"4":{"hp":17,"atk":5,"spd":9,"def":9,"res":4},"5":{"hp":18,"atk":6,"spd":9,"def":9,"res":5}},"40":{"1":{"hp":[29,32,35],"atk":[16,18,21],"spd":[24,26,29],"def":[24,26,29],"res":[13,16,18]},"2":{"hp":[30,33,36],"atk":[17,19,22],"spd":[26,29,32],"def":[26,29,32],"res":[14,17,19]},"3":{"hp":[33,36,39],"atk":[19,22,25],"spd":[28,31,34],"def":[28,31,34],"res":[16,19,22]},"4":{"hp":[34,37,40],"atk":[20,23,26],"spd":[30,33,36],"def":[30,33,36],"res":[17,20,23]},"5":{"hp":[36,40,43],"atk":[22,25,29],"spd":[32,35,38],"def":[32,35,38],"res":[19,22,25]}}}},{"name":"Sully: Crimson Knight","shortName":"Sully","title":"Crimson Knight","origin":"Fire Emblem Awakening","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sully Crimson Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sully Crimson Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sully Crimson Knight.png"}},"skills":[{"name":"Iron Lance","default":1,"rarity":"-"},{"name":"Steel Lance","default":3,"rarity":2},{"name":"Sapphire Lance","default":4,"rarity":3},{"name":"Sapphire Lance+","default":"-","rarity":5},{"name":"Draw Back","default":4,"rarity":3},{"name":"Swordbreaker 1","rarity":"-"},{"name":"Swordbreaker 2","rarity":4},{"name":"Swordbreaker 3","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Spur Def 2","rarity":"-"},{"name":"Spur Def 3","rarity":4}],"growthPoints":{"hp":7,"atk":5,"spd":8,"def":4,"res":6},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":7,"def":6,"res":5},"4":{"hp":17,"atk":7,"spd":8,"def":6,"res":5},"5":{"hp":18,"atk":7,"spd":8,"def":7,"res":6}},"40":{"3":{"hp":[35,38,41],"atk":[20,23,26],"spd":[27,30,33],"def":[18,21,24],"res":[21,24,27]},"4":{"hp":[36,39,42],"atk":[22,25,28],"spd":[29,32,35],"def":[19,22,25],"res":[22,25,28]},"5":{"hp":[39,42,45],"atk":[23,26,30],"spd":[31,34,37],"def":[21,24,27],"res":[24,28,31]}}}},{"name":"Tailtiu: Thunder Noble","shortName":"Tailtiu","title":"Thunder Noble","origin":"Fire Emblem: Genealogy of the Holy War","weaponType":"Blue Tome","moveType":"Infantry","rarities":"3-5","releaseDate":"2017-10-16","poolDate":"2017-10-30","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Tailtiu Thunder Noble.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Tailtiu Thunder Noble.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Tailtiu Thunder Noble.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":3,"rarity":"-"},{"name":"Blárblade","default":4,"rarity":3},{"name":"Blárblade+","default":5,"rarity":5},{"name":"Rally Resistance","default":4,"rarity":3},{"name":"Rally Spd/Res","default":"-","rarity":4},{"name":"Attack +1","rarity":"-"},{"name":"Atk/Res 1","rarity":4},{"name":"Atk/Res 2","rarity":5},{"name":"Spur Spd 1","rarity":"-"},{"name":"Drive Spd 1","rarity":"-"},{"name":"Drive Spd 2","rarity":4}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":2,"res":5},"stats":{"1":{"3":{"hp":16,"atk":7,"spd":8,"def":3,"res":5},"4":{"hp":16,"atk":8,"spd":9,"def":3,"res":5},"5":{"hp":17,"atk":8,"spd":9,"def":4,"res":6}},"40":{"3":{"hp":[32,35,38],"atk":[25,28,31],"spd":[28,31,34],"def":[11,14,17],"res":[19,22,25]},"4":{"hp":[33,36,39],"atk":[27,30,33],"spd":[30,33,36],"def":[12,15,18],"res":[20,23,26]},"5":{"hp":[35,39,42],"atk":[29,32,35],"spd":[32,35,38],"def":[13,17,20],"res":[22,25,29]}}}},{"name":"Takumi: Empty Vessel","shortName":"Takumi","title":"Empty Vessel","origin":"Fire Emblem Fates","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"3-4","releaseDate":"2018-02-24","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Takumi Empty Vessel.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Takumi Empty Vessel.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Takumi Empty Vessel.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":3,"rarity":"-"},{"name":"Silver Bow","default":4,"rarity":3},{"name":"Skadi","default":"-","rarity":5},{"name":"Retribution","default":4,"rarity":3},{"name":"Vengeance","default":"-","rarity":4},{"name":"Fury 1","rarity":"-"},{"name":"Fury 2","rarity":3},{"name":"Fury 3","rarity":4},{"name":"Spd Smoke 1","rarity":3},{"name":"Spd Smoke 2","rarity":4},{"name":"Spd Smoke 3","rarity":5}],"growthPoints":{"hp":6,"atk":6,"spd":7,"def":5,"res":5},"stats":{"1":{"3":{"hp":14,"atk":8,"spd":9,"def":5,"res":4},"4":{"hp":14,"atk":9,"spd":10,"def":5,"res":4},"5":{"hp":15,"atk":9,"spd":10,"def":6,"res":5}},"40":{"3":{"hp":[30,33,36],"atk":[24,27,30],"spd":[27,30,33],"def":[19,22,25],"res":[18,21,24]},"4":{"hp":[31,34,37],"atk":[26,29,32],"spd":[29,32,35],"def":[20,23,26],"res":[19,22,25]},"5":{"hp":[33,37,40],"atk":[27,31,34],"spd":[31,34,37],"def":[22,25,29],"res":[21,24,28]}}}},{"name":"Takumi: Prince of Soup","shortName":"Takumi","title":"Prince of Soup","origin":"Fire Emblem Fates","weaponType":"Colorless Dagger","moveType":"Infantry","rarities":"5","releaseDate":"2017-12-31","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Takumi Prince of Soup.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Takumi Prince of Soup.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Takumi Prince of Soup.png"}},"skills":[{"name":"Iron Dagger","default":"-","rarity":"-"},{"name":"Steel Dagger","default":"-","rarity":"-"},{"name":"Kagami Mochi","default":"-","rarity":"-"},{"name":"Kagami Mochi+","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Moonbow","default":"-","rarity":5},{"name":"Atk/Res Bond 1","rarity":"-"},{"name":"Atk/Res Bond 2","rarity":"-"},{"name":"Atk/Res Bond 3","rarity":5},{"name":"Bowbreaker 1","rarity":"-"},{"name":"Bowbreaker 2","rarity":"-"},{"name":"Bowbreaker 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":7,"def":2,"res":6},"stats":{"1":{"5":{"hp":18,"atk":8,"spd":10,"def":4,"res":5}},"40":{"5":{"hp":[36,40,43],"atk":[31,34,37],"spd":[31,34,37],"def":[13,17,20],"res":[23,27,30]}}}},{"name":"Takumi: Wild Card","shortName":"Takumi","title":"Wild Card","origin":"Fire Emblem Fates","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"4-5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Takumi Wild Card.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Takumi Wild Card.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Takumi Wild Card.png"}},"skills":[{"name":"Iron Bow","default":"-","rarity":"-"},{"name":"Steel Bow","default":"-","rarity":"-"},{"name":"Silver Bow","default":4,"rarity":"-"},{"name":"Fujin Yumi","default":5,"rarity":5},{"name":"Retribution","default":4,"rarity":"-"},{"name":"Vengeance","default":"-","rarity":4},{"name":"Close Counter","rarity":5},{"name":"Threaten Spd 1","rarity":"-"},{"name":"Threaten Spd 2","rarity":4},{"name":"Threaten Spd 3","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":5,"res":2},"stats":{"1":{"4":{"hp":17,"atk":8,"spd":7,"def":5,"res":4},"5":{"hp":18,"atk":8,"spd":7,"def":6,"res":5}},"40":{"4":{"hp":[34,37,40],"atk":[27,30,33],"spd":[28,31,34],"def":[20,23,26],"res":[13,16,19]},"5":{"hp":[36,40,43],"atk":[29,32,35],"spd":[30,33,36],"def":[22,25,29],"res":[14,18,21]}}}},{"name":"Tana: Winged Princess","shortName":"Tana","title":"Winged Princess","origin":"Fire Emblem: The Sacred Stones","weaponType":"Blue Lance","moveType":"Flying","rarities":"5","releaseDate":"2017-08-15","poolDate":"2017-08-31","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Tana Winged Princess.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Tana Winged Princess.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Tana Winged Princess.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Heavy Spear","default":"-","rarity":"-"},{"name":"Vidofnir","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Moonbow","default":"-","rarity":5},{"name":"Speed +1","rarity":"-"},{"name":"Spd/Def 1","rarity":"-"},{"name":"Spd/Def 2","rarity":5},{"name":"Guidance 1","rarity":"-"},{"name":"Guidance 2","rarity":"-"},{"name":"Guidance 3","rarity":5}],"growthPoints":{"hp":5,"atk":8,"spd":8,"def":5,"res":5},"stats":{"1":{"5":{"hp":17,"atk":8,"spd":10,"def":6,"res":6}},"40":{"5":{"hp":[33,36,40],"atk":[31,34,37],"spd":[33,36,39],"def":[22,25,29],"res":[22,25,29]}}}},{"name":"Tharja: \"Normal Girl\"","shortName":"Tharja","title":"\"Normal Girl\"","origin":"Fire Emblem Awakening","weaponType":"Red Tome","moveType":"Armored","rarities":"5","releaseDate":"2017-12-18","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Tharja Normal Girl.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Tharja Normal Girl.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Tharja Normal Girl.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":"-","rarity":"-"},{"name":"Candelabra","default":"-","rarity":"-"},{"name":"Candelabra+","default":5,"rarity":"-"},{"name":"Chilling Wind","default":5,"rarity":"-"},{"name":"Iceberg","default":"-","rarity":5},{"name":"Close Counter","rarity":5},{"name":"Vengeful Fighter 1","rarity":"-"},{"name":"Vengeful Fighter 2","rarity":"-"},{"name":"Vengeful Fighter 3","rarity":5},{"name":"R Tome Valor 1","rarity":"-"},{"name":"R Tome Valor 2","rarity":"-"},{"name":"R Tome Valor 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":2,"def":8,"res":8},"stats":{"1":{"5":{"hp":19,"atk":10,"spd":5,"def":8,"res":10}},"40":{"5":{"hp":[40,43,46],"atk":[31,34,37],"spd":[14,18,21],"def":[31,34,37],"res":[33,36,39]}}}},{"name":"Tharja: Dark Shadow","shortName":"Tharja","title":"Dark Shadow","origin":"Fire Emblem Awakening","weaponType":"Red Tome","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Tharja Dark Shadow.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Tharja Dark Shadow.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Tharja Dark Shadow.png"}},"skills":[{"name":"Flux","default":"-","rarity":"-"},{"name":"Ruin","default":3,"rarity":"-"},{"name":"Rauðrblade","default":4,"rarity":3},{"name":"Rauðrblade+","default":5,"rarity":5},{"name":"Retribution","default":4,"rarity":3},{"name":"Vengeance","default":"-","rarity":4},{"name":"Darting Blow 1","rarity":"-"},{"name":"Darting Blow 2","rarity":3},{"name":"Darting Blow 3","rarity":4},{"name":"Spur Res 1","rarity":3},{"name":"Spur Res 2","rarity":4},{"name":"Spur Res 3","rarity":5}],"growthPoints":{"hp":6,"atk":7,"spd":8,"def":4,"res":3},"stats":{"1":{"3":{"hp":16,"atk":7,"spd":7,"def":5,"res":4},"4":{"hp":16,"atk":8,"spd":8,"def":5,"res":4},"5":{"hp":17,"atk":8,"spd":8,"def":6,"res":5}},"40":{"3":{"hp":[32,35,38],"atk":[25,28,31],"spd":[27,30,33],"def":[17,20,23],"res":[14,17,20]},"4":{"hp":[33,36,39],"atk":[27,30,33],"spd":[29,32,35],"def":[18,21,24],"res":[15,18,21]},"5":{"hp":[35,39,42],"atk":[29,32,35],"spd":[31,34,37],"def":[20,23,26],"res":[17,20,23]}}}},{"name":"Tharja: Obsessive Bride","shortName":"Tharja","title":"Obsessive Bride","origin":"Fire Emblem Awakening","weaponType":"Red Tome","moveType":"Infantry","rarities":"5","releaseDate":"2018-05-21","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Tharja Obsessive Bride.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Tharja Obsessive Bride.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Tharja Obsessive Bride.png"}},"skills":[{"name":"Fire","default":"-","rarity":"-"},{"name":"Elfire","default":"-","rarity":"-"},{"name":"Bolganone","default":"-","rarity":"-"},{"name":"Múspell Fireposy","default":5,"rarity":"-"},{"name":"Rally Speed","default":5,"rarity":"-"},{"name":"Rally Atk/Spd","default":"-","rarity":5},{"name":"Atk/Spd Bond 1","rarity":"-"},{"name":"Atk/Spd Bond 2","rarity":"-"},{"name":"Atk/Spd Bond 3","rarity":5},{"name":"Spd Feint 1","rarity":"-"},{"name":"Spd Feint 2","rarity":"-"},{"name":"Spd Feint 3","rarity":5}],"growthPoints":{"hp":6,"atk":8,"spd":8,"def":3,"res":4},"stats":{"1":{"5":{"hp":17,"atk":9,"spd":9,"def":6,"res":4}},"40":{"5":{"hp":[35,39,42],"atk":[32,35,38],"spd":[32,35,38],"def":[18,21,24],"res":[18,21,24]}}}},{"name":"Tiki: Dragon Scion","shortName":"Tiki","title":"Dragon Scion","origin":"Fire Emblem: Mystery of the Emblem","weaponType":"Red Breath","moveType":"Infantry","rarities":"5","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Tiki Dragon Scion.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Tiki Dragon Scion.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Tiki Dragon Scion.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":"-","rarity":"-"},{"name":"Flametongue","default":"-","rarity":"-"},{"name":"Flametongue+","default":5,"rarity":"-"},{"name":"Breath of Fog","default":"-","rarity":"-"},{"name":"Rising Flame","default":5,"rarity":"-"},{"name":"Growing Flame","default":"-","rarity":5},{"name":"Armored Blow 1","rarity":"-"},{"name":"Armored Blow 2","rarity":"-"},{"name":"Armored Blow 3","rarity":5},{"name":"Breath of Life 1","rarity":"-"},{"name":"Breath of Life 2","rarity":"-"},{"name":"Breath of Life 3","rarity":5}],"growthPoints":{"hp":8,"atk":8,"spd":8,"def":7,"res":6},"stats":{"1":{"5":{"hp":15,"atk":5,"spd":4,"def":8,"res":7}},"40":{"5":{"hp":[38,41,44],"atk":[28,31,34],"spd":[27,30,33],"def":[29,32,35],"res":[25,29,32]}}}},{"name":"Tiki: Naga's Voice","shortName":"Tiki","title":"Naga's Voice","origin":"Fire Emblem Awakening","weaponType":"Red Breath","moveType":"Infantry","rarities":"3-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Tiki Nagas Voice.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Tiki Nagas Voice.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Tiki Nagas Voice.png"}},"skills":[{"name":"Fire Breath","default":"-","rarity":"-"},{"name":"Fire Breath+","default":3,"rarity":"-"},{"name":"Lightning Breath","default":4,"rarity":3},{"name":"Lightning Breath+","default":5,"rarity":5},{"name":"Breath of Fog","default":"-","rarity":5},{"name":"Glowing Ember","default":4,"rarity":3},{"name":"Bonfire","default":"-","rarity":4},{"name":"Defiant Atk 1","rarity":"-"},{"name":"Defiant Atk 2","rarity":3},{"name":"Defiant Atk 3","rarity":4},{"name":"Spur Res 1","rarity":3},{"name":"Spur Res 2","rarity":4},{"name":"Spur Res 3","rarity":5}],"growthPoints":{"hp":6,"atk":9,"spd":4,"def":8,"res":4},"stats":{"1":{"3":{"hp":17,"atk":6,"spd":5,"def":8,"res":6},"4":{"hp":17,"atk":7,"spd":5,"def":9,"res":6},"5":{"hp":18,"atk":7,"spd":6,"def":9,"res":7}},"40":{"3":{"hp":[33,36,39],"atk":[28,31,34],"spd":[17,20,23],"def":[28,31,34],"res":[18,21,24]},"4":{"hp":[34,37,40],"atk":[30,33,36],"spd":[18,21,24],"def":[30,33,36],"res":[19,22,25]},"5":{"hp":[36,40,43],"atk":[32,35,38],"spd":[20,23,26],"def":[32,35,38],"res":[21,24,27]}}}},{"name":"Tiki: Summering Scion","shortName":"Tiki","title":"Summering Scion","origin":"Fire Emblem Awakening","weaponType":"Green Axe","moveType":"Infantry","rarities":"5","releaseDate":"2017-06-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Tiki Summering Scion.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Tiki Summering Scion.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Tiki Summering Scion.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Melon Crusher","default":"-","rarity":"-"},{"name":"Melon Crusher+","default":5,"rarity":"-"},{"name":"Daylight","default":5,"rarity":"-"},{"name":"Sol","default":"-","rarity":5},{"name":"Close Def 1","rarity":"-"},{"name":"Close Def 2","rarity":"-"},{"name":"Close Def 3","rarity":5},{"name":"Axe Valor 1","rarity":"-"},{"name":"Axe Valor 2","rarity":"-"},{"name":"Axe Valor 3","rarity":5}],"growthPoints":{"hp":4,"atk":9,"spd":7,"def":7,"res":4},"stats":{"1":{"5":{"hp":18,"atk":8,"spd":6,"def":8,"res":7}},"40":{"5":{"hp":[32,35,38],"atk":[33,36,39],"spd":[27,30,33],"def":[29,32,35],"res":[21,24,27]}}}},{"name":"Titania: Mighty Mercenary","shortName":"Titania","title":"Mighty Mercenary","origin":"Fire Emblem: Path of Radiance","weaponType":"Green Axe","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-04-26","poolDate":"2017-05-15","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Titania Mighty Mercenary.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Titania Mighty Mercenary.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Titania Mighty Mercenary.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":3,"rarity":"-"},{"name":"Emerald Axe","default":4,"rarity":3},{"name":"Emerald Axe+","default":5,"rarity":5},{"name":"Reciprocal Aid","default":4,"rarity":3},{"name":"Armored Blow 1","rarity":"-"},{"name":"Armored Blow 2","rarity":3},{"name":"Armored Blow 3","rarity":4},{"name":"Guard 1","rarity":3},{"name":"Guard 2","rarity":4},{"name":"Guard 3","rarity":5}],"growthPoints":{"hp":5,"atk":6,"spd":8,"def":5,"res":6},"stats":{"1":{"3":{"hp":17,"atk":5,"spd":7,"def":5,"res":7},"4":{"hp":17,"atk":5,"spd":8,"def":5,"res":8},"5":{"hp":18,"atk":6,"spd":8,"def":6,"res":8}},"40":{"3":{"hp":[31,34,37],"atk":[21,24,27],"spd":[27,30,33],"def":[19,22,25],"res":[23,26,29]},"4":{"hp":[32,35,38],"atk":[22,25,28],"spd":[29,32,35],"def":[20,23,26],"res":[25,28,31]},"5":{"hp":[34,37,41],"atk":[24,28,31],"spd":[31,34,37],"def":[22,25,29],"res":[26,30,33]}}}},{"name":"Tobin: The Clueless One","shortName":"Tobin","title":"The Clueless One","origin":"Fire Emblem Echoes: Shadows of Valentia","weaponType":"Red Sword","moveType":"Infantry","rarities":"4-5","releaseDate":"2017-07-07","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Tobin The Clueless One.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Tobin The Clueless One.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Tobin The Clueless One.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Armorslayer","default":4,"rarity":"-"},{"name":"Armorslayer+","default":5,"rarity":5},{"name":"Pivot","default":4,"rarity":"-"},{"name":"Attack +1","rarity":"-"},{"name":"Attack +2","rarity":"-"},{"name":"Attack +3","rarity":4},{"name":"Seal Spd 1","rarity":"-"},{"name":"Seal Spd 2","rarity":4},{"name":"Seal Spd 3","rarity":5}],"growthPoints":{"hp":9,"atk":7,"spd":6,"def":9,"res":6},"stats":{"1":{"4":{"hp":17,"atk":7,"spd":5,"def":4,"res":3},"5":{"hp":18,"atk":7,"spd":5,"def":5,"res":4}},"40":{"4":{"hp":[40,43,46],"atk":[26,29,32],"spd":[22,25,28],"def":[27,30,33],"res":[20,23,26]},"5":{"hp":[43,46,49],"atk":[28,31,34],"spd":[23,27,30],"def":[30,33,36],"res":[22,26,29]}}}},{"name":"Ursula: Blue Crow","shortName":"Ursula","title":"Blue Crow","origin":"Fire Emblem: The Blazing Blade","weaponType":"Blue Tome","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-03-10","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ursula Blue Crow.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ursula Blue Crow.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ursula Blue Crow.png"}},"skills":[{"name":"Thunder","default":"-","rarity":"-"},{"name":"Elthunder","default":3,"rarity":"-"},{"name":"Blárwolf","default":4,"rarity":3},{"name":"Blárwolf+","default":"-","rarity":5},{"name":"Rising Thunder","default":4,"rarity":3},{"name":"Growing Thunder","default":"-","rarity":4},{"name":"Death Blow 1","rarity":3},{"name":"Death Blow 2","rarity":4},{"name":"Death Blow 3","rarity":5},{"name":"Threaten Res 1","rarity":"-"},{"name":"Threaten Res 2","rarity":3},{"name":"Threaten Res 3","rarity":4}],"growthPoints":{"hp":5,"atk":6,"spd":7,"def":3,"res":6},"stats":{"1":{"3":{"hp":15,"atk":6,"spd":7,"def":3,"res":7},"4":{"hp":15,"atk":6,"spd":8,"def":3,"res":8},"5":{"hp":16,"atk":7,"spd":8,"def":4,"res":8}},"40":{"3":{"hp":[29,32,35],"atk":[22,25,28],"spd":[25,28,31],"def":[13,16,19],"res":[23,26,29]},"4":{"hp":[30,33,36],"atk":[23,26,29],"spd":[27,30,33],"def":[14,17,20],"res":[25,28,31]},"5":{"hp":[32,35,39],"atk":[25,29,32],"spd":[29,32,35],"def":[16,19,22],"res":[26,30,33]}}}},{"name":"Valter: Dark Moonstone","shortName":"Valter","title":"Dark Moonstone","origin":"Fire Emblem: The Sacred Stones","weaponType":"Blue Lance","moveType":"Flying","rarities":"3-4","releaseDate":"2017-08-21","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Valter Dark Moonstone.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Valter Dark Moonstone.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Valter Dark Moonstone.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":3,"rarity":"-"},{"name":"Silver Lance","default":4,"rarity":3},{"name":"Cursed Lance","default":"-","rarity":5},{"name":"New Moon","default":4,"rarity":3},{"name":"Luna","default":"-","rarity":4},{"name":"Darting Blow 1","rarity":"-"},{"name":"Darting Blow 2","rarity":3},{"name":"Darting Blow 3","rarity":4},{"name":"Panic Ploy 1","rarity":3},{"name":"Panic Ploy 2","rarity":4},{"name":"Panic Ploy 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":6,"def":8,"res":3},"stats":{"1":{"3":{"hp":17,"atk":7,"spd":8,"def":7,"res":3},"4":{"hp":17,"atk":8,"spd":9,"def":7,"res":3},"5":{"hp":18,"atk":8,"spd":9,"def":8,"res":4}},"40":{"3":{"hp":[35,38,41],"atk":[25,28,31],"spd":[24,27,30],"def":[27,30,33],"res":[13,16,19]},"4":{"hp":[36,39,42],"atk":[27,30,33],"spd":[26,29,32],"def":[28,31,34],"res":[14,17,20]},"5":{"hp":[39,42,45],"atk":[29,32,35],"spd":[27,31,34],"def":[31,34,37],"res":[16,19,22]}}}},{"name":"Virion: Elite Archer","shortName":"Virion","title":"Elite Archer","origin":"Fire Emblem Awakening","weaponType":"Colorless Bow","moveType":"Infantry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Virion Elite Archer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Virion Elite Archer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Virion Elite Archer.png"}},"skills":[{"name":"Iron Bow","default":1,"rarity":"-"},{"name":"Steel Bow","default":3,"rarity":2},{"name":"Silver Bow","default":4,"rarity":3},{"name":"Silver Bow+","default":"-","rarity":5},{"name":"Night Sky","default":4,"rarity":3},{"name":"Astra","default":"-","rarity":4},{"name":"Defiant Res 1","rarity":3},{"name":"Defiant Res 2","rarity":4},{"name":"Defiant Res 3","rarity":5},{"name":"Seal Spd 1","rarity":1},{"name":"Seal Spd 2","rarity":2},{"name":"Seal Spd 3","rarity":4}],"growthPoints":{"hp":8,"atk":7,"spd":7,"def":5,"res":1},"stats":{"1":{"1":{"hp":18,"atk":5,"spd":5,"def":5,"res":1},"2":{"hp":18,"atk":6,"spd":6,"def":5,"res":1},"3":{"hp":19,"atk":6,"spd":6,"def":6,"res":2},"4":{"hp":19,"atk":7,"spd":7,"def":6,"res":2},"5":{"hp":20,"atk":7,"spd":7,"def":7,"res":3}},"40":{"1":{"hp":[35,37,40],"atk":[20,23,25],"spd":[20,23,25],"def":[17,19,22],"res":[6,9,11]},"2":{"hp":[36,39,42],"atk":[22,25,28],"spd":[22,25,28],"def":[18,20,23],"res":[7,9,12]},"3":{"hp":[39,42,45],"atk":[24,27,30],"spd":[24,27,30],"def":[20,23,26],"res":[8,11,14]},"4":{"hp":[40,43,46],"atk":[26,29,32],"spd":[26,29,32],"def":[21,24,27],"res":[9,12,15]},"5":{"hp":[43,46,49],"atk":[28,31,34],"spd":[28,31,34],"def":[23,26,30],"res":[10,13,17]}}}},{"name":"Wrys: Kindly Priest","shortName":"Wrys","title":"Kindly Priest","origin":"Fire Emblem: Shadow Dragon and the Blade of Light","weaponType":"Colorless Staff","moveType":"Infantry","rarities":"1-4","releaseDate":"2017-02-02","poolDate":"2017-02-02","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Wrys Kindly Priest.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Wrys Kindly Priest.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Wrys Kindly Priest.png"}},"skills":[{"name":"Assault","default":"-","rarity":1},{"name":"Slow","default":"-","rarity":3},{"name":"Slow+","default":"-","rarity":5},{"name":"Heal","default":1,"rarity":"-"},{"name":"Reconcile","default":3,"rarity":2},{"name":"Rehabilitate","default":"-","rarity":4},{"name":"Imbue","default":4,"rarity":2},{"name":"Heavenly Light","default":"-","rarity":3},{"name":"Live to Serve 1","rarity":3},{"name":"Live to Serve 2","rarity":4},{"name":"Live to Serve 3","rarity":5}],"growthPoints":{"hp":7,"atk":5,"spd":4,"def":4,"res":8},"stats":{"1":{"1":{"hp":16,"atk":3,"spd":4,"def":3,"res":8},"2":{"hp":16,"atk":3,"spd":5,"def":3,"res":9},"3":{"hp":17,"atk":4,"spd":5,"def":4,"res":9},"4":{"hp":17,"atk":4,"spd":6,"def":4,"res":10},"5":{"hp":18,"atk":5,"spd":6,"def":5,"res":10}},"40":{"1":{"hp":[31,34,36],"atk":[15,17,20],"spd":[14,17,19],"def":[13,16,18],"res":[25,27,30]},"2":{"hp":[32,35,38],"atk":[16,18,21],"spd":[16,19,21],"def":[14,17,19],"res":[27,30,33]},"3":{"hp":[35,38,41],"atk":[18,21,24],"spd":[17,20,23],"def":[16,19,22],"res":[29,32,35]},"4":{"hp":[36,39,42],"atk":[19,22,25],"spd":[19,22,25],"def":[17,20,23],"res":[31,34,37]},"5":{"hp":[39,42,45],"atk":[21,24,28],"spd":[20,23,26],"def":[19,22,25],"res":[33,36,39]}}}},{"name":"Xander: Paragon Knight","shortName":"Xander","title":"Paragon Knight","origin":"Fire Emblem Fates","weaponType":"Red Sword","moveType":"Cavalry","rarities":"3-4","releaseDate":"2017-05-02","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Xander Paragon Knight.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Xander Paragon Knight.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Xander Paragon Knight.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Siegfried","default":"-","rarity":5},{"name":"Rising Light","default":4,"rarity":3},{"name":"Blazing Light","default":"-","rarity":4},{"name":"Armored Blow 1","rarity":"-"},{"name":"Armored Blow 2","rarity":4},{"name":"Armored Blow 3","rarity":5},{"name":"Spur Def 1","rarity":"-"},{"name":"Spur Def 2","rarity":4},{"name":"Spur Def 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":5,"def":9,"res":2},"stats":{"1":{"3":{"hp":19,"atk":7,"spd":4,"def":8,"res":3},"4":{"hp":19,"atk":8,"spd":4,"def":9,"res":3},"5":{"hp":20,"atk":8,"spd":5,"def":9,"res":4}},"40":{"3":{"hp":[37,40,43],"atk":[25,28,31],"spd":[18,21,24],"def":[30,33,36],"res":[11,14,17]},"4":{"hp":[38,41,44],"atk":[27,30,33],"spd":[19,22,25],"def":[32,35,38],"res":[12,15,18]},"5":{"hp":[41,44,47],"atk":[29,32,35],"spd":[21,24,28],"def":[34,37,40],"res":[13,17,20]}}}},{"name":"Xander: Spring Prince","shortName":"Xander","title":"Spring Prince","origin":"Fire Emblem Fates","weaponType":"Blue Lance","moveType":"Cavalry","rarities":"5","releaseDate":"2017-03-30","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Xander Spring Prince.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Xander Spring Prince.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Xander Spring Prince.png"}},"skills":[{"name":"Iron Lance","default":"-","rarity":"-"},{"name":"Steel Lance","default":"-","rarity":"-"},{"name":"Carrot Lance","default":"-","rarity":"-"},{"name":"Carrot Lance+","default":5,"rarity":"-"},{"name":"Swap","default":5,"rarity":"-"},{"name":"Live for Honor","rarity":5},{"name":"Fortify Def 1","rarity":"-"},{"name":"Fortify Def 2","rarity":"-"},{"name":"Fortify Def 3","rarity":5}],"growthPoints":{"hp":6,"atk":5,"spd":6,"def":8,"res":5},"stats":{"1":{"5":{"hp":18,"atk":6,"spd":6,"def":9,"res":7}},"40":{"5":{"hp":[36,40,43],"atk":[22,25,29],"spd":[24,28,31],"def":[32,35,38],"res":[23,26,30]}}}},{"name":"Xander: Student Swimmer","shortName":"Xander","title":"Student Swimmer","origin":"Fire Emblem Fates","weaponType":"Green Axe","moveType":"Infantry","rarities":"5","releaseDate":"2017-07-28","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Xander Student Swimmer.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Xander Student Swimmer.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Xander Student Swimmer.png"}},"skills":[{"name":"Iron Axe","default":"-","rarity":"-"},{"name":"Steel Axe","default":"-","rarity":"-"},{"name":"Lilith Floatie","default":"-","rarity":"-"},{"name":"Lilith Floatie+","default":5,"rarity":"-"},{"name":"Glowing Ember","default":5,"rarity":"-"},{"name":"Bonfire","default":"-","rarity":5},{"name":"Fire Boost 1","rarity":"-"},{"name":"Fire Boost 2","rarity":"-"},{"name":"Fire Boost 3","rarity":5},{"name":"Infantry Pulse 1","rarity":"-"},{"name":"Infantry Pulse 2","rarity":"-"},{"name":"Infantry Pulse 3","rarity":5}],"growthPoints":{"hp":7,"atk":7,"spd":7,"def":9,"res":1},"stats":{"1":{"5":{"hp":19,"atk":8,"spd":6,"def":8,"res":6}},"40":{"5":{"hp":[40,43,46],"atk":[29,32,35],"spd":[27,30,33],"def":[33,36,39],"res":[13,16,20]}}}},{"name":"Zelgius: Jet-Black General","shortName":"Zelgius","title":"Jet-Black General","origin":"Fire Emblem: Radiant Dawn","weaponType":"Red Sword","moveType":"Armored","rarities":"5","releaseDate":"2018-01-12","poolDate":"2018-01-25","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Zelgius Jet-Black General.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Zelgius Jet-Black General.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Zelgius Jet-Black General.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":"-","rarity":"-"},{"name":"Silver Sword","default":"-","rarity":"-"},{"name":"Alondite","default":5,"rarity":"-"},{"name":"New Moon","default":5,"rarity":"-"},{"name":"Luna","default":"-","rarity":5},{"name":"Black Luna","default":"-","rarity":5},{"name":"Fierce Stance 1","rarity":"-"},{"name":"Fierce Stance 2","rarity":"-"},{"name":"Fierce Stance 3","rarity":5},{"name":"Warp Powder","rarity":5},{"name":"Panic Ploy 1","rarity":"-"},{"name":"Panic Ploy 2","rarity":"-"},{"name":"Panic Ploy 3","rarity":5}],"growthPoints":{"hp":7,"atk":8,"spd":8,"def":9,"res":3},"stats":{"1":{"5":{"hp":22,"atk":10,"spd":7,"def":10,"res":6}},"40":{"5":{"hp":[43,46,49],"atk":[33,36,39],"spd":[30,33,36],"def":[35,38,41],"res":[18,21,24]}}}},{"name":"Zephiel: The Liberator","shortName":"Zephiel","title":"The Liberator","origin":"Fire Emblem: The Binding Blade","weaponType":"Red Sword","moveType":"Armored","rarities":"3-4","releaseDate":"2017-04-20","poolDate":"N/A","assets":{"portrait":{"75px":"https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Zephiel The Liberator.png","113px":"https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Zephiel The Liberator.png","150px":"https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Zephiel The Liberator.png"}},"skills":[{"name":"Iron Sword","default":"-","rarity":"-"},{"name":"Steel Sword","default":3,"rarity":"-"},{"name":"Silver Sword","default":4,"rarity":3},{"name":"Eckesachs","default":"-","rarity":5},{"name":"Retribution","default":4,"rarity":3},{"name":"Reprisal","default":"-","rarity":4},{"name":"Life and Death 1","rarity":3},{"name":"Life and Death 2","rarity":4},{"name":"Life and Death 3","rarity":5},{"name":"Wary Fighter 1","rarity":"-"},{"name":"Wary Fighter 2","rarity":3},{"name":"Wary Fighter 3","rarity":4}],"growthPoints":{"hp":10,"atk":8,"spd":2,"def":8,"res":5},"stats":{"1":{"3":{"hp":24,"atk":8,"spd":2,"def":11,"res":4},"4":{"hp":24,"atk":9,"spd":2,"def":12,"res":4},"5":{"hp":25,"atk":9,"spd":3,"def":12,"res":5}},"40":{"3":{"hp":[48,51,54],"atk":[28,31,34],"spd":[10,13,16],"def":[31,34,37],"res":[18,21,24]},"4":{"hp":[49,52,56],"atk":[30,33,36],"spd":[11,14,17],"def":[33,36,39],"res":[19,22,25]},"5":{"hp":[52,55,59],"atk":[32,35,38],"spd":[12,16,19],"def":[35,38,41],"res":[21,24,28]}}}}];var skills=[{"name":"Absorb","skillTier":2,"spCost":150,"damage(mt)":4,"range(rng)":2,"effect":"Restores HP = 50% of damage dealt.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Absorb+","skillTier":3,"spCost":300,"damage(mt)":7,"range(rng)":2,"effect":"Restores HP = 50% of damage dealt. After combat, if unit attacked, restores 7 HP to allies within 2 spaces of unit.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Alondite","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Unit can counterattack regardless of foe's range.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Amiti","skillTier":4,"spCost":400,"damage(mt)":11,"range(rng)":1,"effect":"Inflicts Spd-2. If unit initiates combat, unit attacks twice.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Ardent Service","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"At start of turn, if unit is adjacent to an ally, grants Atk+4 to unit and adjacent allies for 1 turn.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Ardent Service+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"At start of turn, if unit is adjacent to an ally, grants Atk+4 to unit and adjacent allies for 1 turn.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Armads","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If unit’s HP ≥ 80% and foe initiates combat, unit makes a guaranteed follow-up attack.","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Armorslayer","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Armorslayer+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Armorsmasher","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Armorsmasher+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Assassin's Bow","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"Effective against flying foes. In combat against a colorless dagger foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Assassin's Bow+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":2,"effect":"Effective against flying foes. In combat against a colorless dagger foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Assault","skillTier":1,"spCost":50,"damage(mt)":10,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Audhulma","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1). Grants Res+5.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Aura","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"If unit initiates combat, restores 5 HP to adjacent allies after combat.","exclusive":true,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Ayra's Blade","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Spd+3. If unit's Spd > foe's Spd, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Barb Shuriken","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Barb Shuriken+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Basilikos","skillTier":null,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Beloved Zofia","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Def+3. At start of combat, if unit's HP = 100%, grants Atk/Spd/Def/Res+4, but after combat, if unit attacked, deals 4 damage to unit.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Berkut's Lance","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"If foe initiates combat, grants Res+4 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Berkut's Lance+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"If foe initiates combat, grants Res+4 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Berserk Armads","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1). At start of turn, if unit's HP ≤ 75% and unit's attack triggers Special, grants Special cooldown count-1. Deals +10 damage when Special triggers.","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Binding Blade","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If foe initiates combat, grants Def/Res+2 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Blazing Durandal","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Atk+3. If unit's Atk > foe's Atk, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Blessed Bouquet","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"If unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blessed Bouquet+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"If unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blizzard","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Res+3. Grants bonus to unit's Atk = total penalties on foe during combat.","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Blue Egg","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"If unit initiates combat, restores 4 HP after combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blue Egg+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":2,"effect":"If unit initiates combat, restores 4 HP after combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blue Gift","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blue Gift+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blárblade","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":2,"effect":"Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blárblade+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":2,"effect":"Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blárowl","skillTier":3,"spCost":200,"damage(mt)":6,"range(rng)":2,"effect":"During combat, boosts unit's Atk/Spd/Def/Res by number of adjacent allies × 2.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blárowl+","skillTier":4,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"During combat, boosts unit's Atk/Spd/Def/Res by number of adjacent allies × 2.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blárraven","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blárraven+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":2,"effect":"Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blárserpent","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blárserpent+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blárwolf","skillTier":3,"spCost":200,"damage(mt)":6,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Blárwolf+","skillTier":4,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Bolganone","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Bolganone+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Brave Axe","skillTier":3,"spCost":200,"damage(mt)":5,"range(rng)":1,"effect":"Inflicts Spd-5. If unit initiates combat, unit attacks twice.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Brave Axe+","skillTier":4,"spCost":300,"damage(mt)":8,"range(rng)":1,"effect":"Inflicts Spd-5. If unit initiates combat, unit attacks twice.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Brave Bow","skillTier":3,"spCost":200,"damage(mt)":4,"range(rng)":2,"effect":"Effective against flying foes. Inflicts Spd-5. If unit initiates combat, unit attacks twice.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Brave Bow+","skillTier":4,"spCost":300,"damage(mt)":7,"range(rng)":2,"effect":"Effective against flying foes. Inflicts Spd-5. If unit initiates combat, unit attacks twice.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Brave Lance","skillTier":3,"spCost":200,"damage(mt)":5,"range(rng)":1,"effect":"Inflicts Spd-5. If unit initiates combat, unit attacks twice.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Brave Lance+","skillTier":4,"spCost":300,"damage(mt)":8,"range(rng)":1,"effect":"Inflicts Spd-5. If unit initiates combat, unit attacks twice.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Brave Sword","skillTier":3,"spCost":200,"damage(mt)":5,"range(rng)":1,"effect":"Inflicts Spd-5. If unit initiates combat, unit attacks twice.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Brave Sword+","skillTier":4,"spCost":300,"damage(mt)":8,"range(rng)":1,"effect":"Inflicts Spd-5. If unit initiates combat, unit attacks twice.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Breath of Fog","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Effective against dragon foes. At the start of every second turn, restores 10 HP. If foe's Range = 2, calculates damage using the lower of foe's Def or Res.","exclusive":true,"type":"WEAPON","weaponType":"Breath"},{"name":"Bright Naginata","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If foe initiates combat, grants Atk/Def+4 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Brynhildr","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"If unit initiates combat, inflicts status on foe restricting movement to 1 space through its next action.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Býleistr","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"At start of odd-numbered turns, grants Atk/Spd/Def/Res+4 to unit and adjacent allies for 1 turn.<Br>(Bonus granted to unit even if no allies are adjacent.)","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Camilla's Axe","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If unit is within 2 spaces of a cavalry or flying ally, grants Atk/Spd +4 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Candelabra","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Candelabra+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Candlelight","skillTier":2,"spCost":150,"damage(mt)":7,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts status on foe preventing counterattacks through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Candlelight+","skillTier":3,"spCost":300,"damage(mt)":11,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts status on target and foes within 2 spaces of target preventing counterattacks through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Carrot Axe","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":1,"effect":"If unit initiates combat, restores 4 HP after combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Carrot Axe+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":1,"effect":"If unit initiates combat, restores 4 HP after combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Carrot Lance","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":1,"effect":"If unit initiates combat, restores 4 HP after combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Carrot Lance+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":1,"effect":"If unit initiates combat, restores 4 HP after combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Casa Blanca","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Casa Blanca+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Clarisse's Bow","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"Effective against flying foes.  If unit initiates combat, inflicts Atk/Spd-5 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Clarisse's Bow+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":2,"effect":"Effective against flying foes.  If unit initiates combat, inflicts Atk/Spd-5 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Cupid Arrow","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Effective against flying foes.  If unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Cupid Arrow+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Effective against flying foes.  If unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Cursed Lance","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1). Grants Atk/Spd+2. Deals 4 damage to unit after combat.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Cymbeline","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"If unit initiates combat, grants Atk+4 to adjacent allies for 1 turn after combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Dancer's Fan","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"If unit initiates combat, restores 7 HP to adjacent allies after combat. After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Dancer's Fan+","skillTier":4,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"If unit initiates combat, restores 7 HP to adjacent allies after combat. After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Dancer's Ring","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"If unit initiates combat, restores 7 HP to adjacent allies after combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Dancer's Ring+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"If unit initiates combat, restores 7 HP to adjacent allies after combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Dancer's Score","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"If unit initiates combat, restores 7 HP to adjacent allies after combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Dancer's Score+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"If unit initiates combat, restores 7 HP to adjacent allies after combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Dark Aura","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"At start of turn, if adjacent allies use sword, axe, lance, or dragonstone, grants Atk+6 to those allies for 1 turn.","exclusive":true,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Dark Breath","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":1,"effect":"If unit initiates combat, inflicts Atk/Spd-5 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Dark Breath+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":1,"effect":"If unit initiates combat, inflicts Atk/Spd-5 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Dark Excalibur","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Deals +10 damage when Special triggers.","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Dark Greatsword","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If unit initiates combat, grants Atk/Spd+4 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Dark Mystletainn","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1). If Special triggers before or during combat, grants Special cooldown count-2 after combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Deathly Dagger","skillTier":4,"spCost":400,"damage(mt)":11,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action. If unit initiates combat, deals 7 damage to foe after combat.","exclusive":true,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Deft Harpoon","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"At start of combat, if unit's HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Deft Harpoon+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"At start of combat, if unit's HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Dire Thunder","skillTier":4,"spCost":400,"damage(mt)":9,"range(rng)":2,"effect":"Inflicts Spd-5. If unit initiates combat, unit attacks twice.","exclusive":true,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Divine Naga","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against dragon foes. Neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Divine Tyrfing","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Res+3. Reduces damage from magic foe's first attack by 50%.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Durandal","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If unit initiates combat, grants Atk+4 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Eckesachs","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"At start of turn, inflicts Def-4 on foes within 2 spaces through their next actions.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Elfire","skillTier":2,"spCost":100,"damage(mt)":6,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Ellight","skillTier":2,"spCost":100,"damage(mt)":6,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Elthunder","skillTier":2,"spCost":100,"damage(mt)":6,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Elwind","skillTier":2,"spCost":100,"damage(mt)":6,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Emerald Axe","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":1,"effect":"If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Emerald Axe+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":1,"effect":"If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Excalibur","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against flying foes.","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Expiration","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Unit can counterattack regardless of foe's range. If foe's Range = 2, calculates damage using the lower of foe's Def or Res.","exclusive":true,"type":"WEAPON","weaponType":"Breath"},{"name":"Falchion","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Effective against dragon foes.  At the start of every third turn, restores 10 HP.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Fear","skillTier":2,"spCost":150,"damage(mt)":5,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Atk-6 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Fear+","skillTier":3,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Atk-7 on target and foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Felicia's Plate","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces through their next actions. Calculates damage using the lower of foe's Def or Res.","exclusive":true,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Fenrir","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Fenrir+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Fensalir","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"At start of turn, inflicts Atk-4 on foes within 2 spaces through their next actions.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Fire","skillTier":1,"spCost":50,"damage(mt)":4,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Fire Breath","skillTier":1,"spCost":50,"damage(mt)":6,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Fire Breath+","skillTier":2,"spCost":100,"damage(mt)":8,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Firesweep Bow","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"Effective against flying foes. Unit and foe cannot counterattack.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Firesweep Bow+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":2,"effect":"Effective against flying foes. Unit and foe cannot counterattack.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Firesweep Lance","skillTier":3,"spCost":200,"damage(mt)":11,"range(rng)":1,"effect":"Unit and foe cannot counterattack.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Firesweep Lance+","skillTier":4,"spCost":300,"damage(mt)":15,"range(rng)":1,"effect":"Unit and foe cannot counterattack.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Firesweep Sword","skillTier":3,"spCost":200,"damage(mt)":11,"range(rng)":1,"effect":"Unit and foe cannot counterattack.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Firesweep Sword+","skillTier":4,"spCost":300,"damage(mt)":15,"range(rng)":1,"effect":"Unit and foe cannot counterattack.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"First Bite","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"If unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"First Bite+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"If unit initiates combat, grants Def/Res+2 to allies within 2 spaces for 1 turn after combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Flame Siegmund","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Atk+3. If the number of foes within 2 spaces (excluding target) ≥ the number of allies within 2 spaces (excluding unit), unit makes a guaranteed follow-up attack.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Flametongue","skillTier":3,"spCost":200,"damage(mt)":11,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Flametongue+","skillTier":4,"spCost":300,"damage(mt)":15,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Flux","skillTier":1,"spCost":50,"damage(mt)":4,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Forblaze","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"At start of turn, inflict Res-7 on foe on the enemy team with the highest Res through its next action.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Fresh Bouquet","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"At start of turn, if unit is adjacent to an ally, grants Spd+4 to unit and adjacent allies for 1 turn.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Fresh Bouquet+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"At start of turn, if unit is adjacent to an ally, grants Spd+4 to unit and adjacent allies for 1 turn.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Fruit of Iðunn","skillTier":4,"spCost":null,"damage(mt)":14,"range(rng)":2,"effect":"Grants Spd+3. If unit's HP ≥ 50%, allies within 2 spaces can move to a space adjacent to unit.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Fujin Yumi","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against flying foes. If unit’s HP ≥ 50%, unit can move through foes’ spaces.","exclusive":true,"type":"WEAPON","weaponType":"Bow"},{"name":"Fólkvangr","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"At start of turn, if unit's HP ≤ 50%, grants Atk+5 for 1 turn.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Geirskögul","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Def+3. If allies within 2 spaces use sword, lance, axe, bow, or dagger, grants Atk/Spd+3 to those allies during combat.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Giant Spoon","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":1,"effect":"Deals +10 damage when Special triggers.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Giant Spoon+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":1,"effect":"Deals +10 damage when Special triggers.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Giga Excalibur","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Spd+3. If unit's Spd > foe's Spd, boosts damage dealt by 70% of difference between stats. (Maximum bonus of +7 damage. Combos with Phantom Spd.)","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Gleipnir","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Res+3. At start of combat, if foe's HP = 100%, grants Atk/Spd+3 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Gradivus","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Unit can counterattack regardless of foe's range.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Gratia","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Effective against flying foes. If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Gratia+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Effective against flying foes. If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Gravity","skillTier":2,"spCost":150,"damage(mt)":6,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts status on foe restricting movement to 1 space through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Gravity+","skillTier":3,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts status on target and foes within 1 space of target restricting movement to 1 space through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Great Flame","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Atk+3. If unit’s Def ≥ foe’s Def+5, foe cannot make a follow-up attack. If foe's Range = 2, calculates damage using the lower of foe's Def or Res.","exclusive":true,"type":"WEAPON","weaponType":"Breath"},{"name":"Green Egg","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"If unit initiates combat, restores 4 HP after combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Green Egg+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":2,"effect":"If unit initiates combat, restores 4 HP after combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Green Gift","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Green Gift+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Grima's Truth","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Def+3. After combat, if unit attacked, inflicts Atk/Spd-5 on target and foes within 2 spaces of target through their next actions, and grants Atk/Spd+5 to unit and allies within 2 spaces for 1 turn.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Grimoire","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"If unit has ≥ 50% HP, unit can move to a space adjacent to an ally within 2 spaces.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Gronnblade","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":2,"effect":"Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Gronnblade+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":2,"effect":"Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Gronnowl","skillTier":3,"spCost":200,"damage(mt)":6,"range(rng)":2,"effect":"During combat, boosts unit's Atk/Spd/Def/Res by number of adjacent allies × 2.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Gronnowl+","skillTier":4,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"During combat, boosts unit's Atk/Spd/Def/Res by number of adjacent allies × 2.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Gronnraven","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Gronnraven+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":2,"effect":"Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Gronnwolf","skillTier":3,"spCost":200,"damage(mt)":6,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Gronnwolf+","skillTier":4,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Guard Bow","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Effective against flying foes. If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 to unit during combat.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Guard Bow+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Effective against flying foes. If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 to unit during combat.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Hagoita","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Grants Def/Res+2 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Hagoita+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Grants Def/Res+2 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Hama Ya","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Effective against flying foes . Grants Def/Res+2 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Hama Ya+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Effective against flying foes . Grants Def/Res+2 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Hammer","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Hammer+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Handbell","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Handbell+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Harmonic Lance","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":1,"effect":"Deals +10 damage when Special triggers.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Harmonic Lance+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":1,"effect":"Deals +10 damage when Special triggers.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Hauteclere","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Heavy Spear","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Heavy Spear+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Hibiscus Tome","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Grants Atk/Spd+1 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Hibiscus Tome+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Grants Atk/Spd+1 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Hinoka's Spear","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If unit is within 2 spaces of a flying or infantry ally, grants Atk/Spd+4 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Huginn's Egg","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Res+3. At start of turn, if unit's HP ≥ 50%, inflicts Atk/Def-5 on foe on the enemy team with the lowest Res through it's next action.","exclusive":true,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Iron Axe","skillTier":1,"spCost":50,"damage(mt)":6,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Iron Bow","skillTier":1,"spCost":50,"damage(mt)":4,"range(rng)":2,"effect":"Effective against flying foes.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Iron Dagger","skillTier":1,"spCost":50,"damage(mt)":3,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Iron Lance","skillTier":1,"spCost":50,"damage(mt)":6,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Iron Sword","skillTier":1,"spCost":50,"damage(mt)":6,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Ivaldi","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Def+3. At start of combat, if foe's HP = 100%, grants Atk/Spd+3 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Kadomatsu","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Grants Def/Res+2 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Kadomatsu+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Grants Def/Res+2 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Kagami Mochi","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Kagami Mochi+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Keen Blárwolf","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Keen Blárwolf+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Keen Gronnwolf","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Keen Gronnwolf+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Keen Rauðrwolf","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Keen Rauðrwolf+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Killer Axe","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Killer Axe+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Killer Bow","skillTier":3,"spCost":200,"damage(mt)":5,"range(rng)":2,"effect":"Accelerates Special trigger (cooldown count-1). Effective against flying foes.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Killer Bow+","skillTier":4,"spCost":300,"damage(mt)":9,"range(rng)":2,"effect":"Accelerates Special trigger (cooldown count-1). Effective against flying foes.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Killer Lance","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Killer Lance+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Killing Edge","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Killing Edge+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Kitty Paddle","skillTier":3,"spCost":200,"damage(mt)":5,"range(rng)":2,"effect":"Effective against magic foes. After combat, if unit attacked and if foe uses magic, inflicts Def/Res-5 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Kitty Paddle+","skillTier":4,"spCost":300,"damage(mt)":8,"range(rng)":2,"effect":"Effective against magic foes. After combat, if unit attacked and if foe uses magic, inflicts Def/Res-7 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Laevatein","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Atk+3. Adds total bonuses on unit to damage dealt.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Legion's Axe","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"After combat, if unit attacked, converts bonuses on foe into penalties through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Legion's Axe+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"After combat, if unit attacked, converts bonuses on foe into penalties through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Leiptr","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Unit can counterattack regardless of foe's range.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Lethal Carrot","skillTier":3,"spCost":300,"damage(mt)":8,"range(rng)":2,"effect":"Deals +10 damage when Special triggers. After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Lethal Carrot+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Deals +10 damage when Special triggers. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Light","skillTier":1,"spCost":50,"damage(mt)":4,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Light Brand","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Def+3. If foe's Def ≥ foe's Res+5, deals +7 damage.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Light Breath","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":1,"effect":"If unit initiates combat, grants Def/Res+4 to adjacent allies for 1 turn after combat.","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Light Breath+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":1,"effect":"If unit initiates combat, grants Def/Res+4 to adjacent allies for 1 turn after combat.","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Lightning Breath","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":1,"effect":"Slows Special trigger (cooldown count+1). Unit can counterattack regardless of foe's range.","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Lightning Breath+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":1,"effect":"Slows Special trigger (cooldown count+1). Unit can counterattack regardless of foe's range.","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Lilith Floatie","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Grants Atk/Spd+1 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Lilith Floatie+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Grants Atk/Spd+1 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Loptous","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Res+3. Skills with \"effective against dragons\" are effective against unit. If foe has no skills with \"effective against dragons,\" inflicts Atk-6 on foe during combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Meisterschwert","skillTier":4,"spCost":400,"damage(mt)":11,"range(rng)":1,"effect":"Inflicts Spd-5. Unit attacks twice. (Even if foe initiates combat, unit attacks twice.)","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Melon Crusher","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"At start of combat, if unit's HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Melon Crusher+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"At start of combat, if unit's HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Mjölnir","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Accelerates Special trigger (cooldown count-1). If unit initiates combat, grants Spd+6 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Monstrous Bow","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Effective against flying foes. After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Monstrous Bow+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Effective against flying foes. After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Mulagir","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against flying foes. Grants Spd+3. Neutralizes magic foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":true,"type":"WEAPON","weaponType":"Bow"},{"name":"Muninn's Egg","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Res+3. At start of turn, if unit's HP ≥ 50%, inflicts Atk/Res-5 on foe on the enemy team with the lowest Spd through it's next action.","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Mystletainn","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Múspell Fireposy","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Spd+3. During combat, boosts unit's Atk/Spd by number of allies within 2 spaces × 2. (Maximum bonus of +6 to each stat.)","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Naga","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against dragon foes. If foe initiates combat, grants Def/Res+2 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Naglfar","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants weapon-triangle advantage against colorless foes.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Nameless Blade","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count -1).","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Nidhogg","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against flying foes. During combat, boosts unit's Atk/Spd/Def/Res by number of adjacent allies × 2.","exclusive":true,"type":"WEAPON","weaponType":"Bow"},{"name":"Nifl Frostflowers","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Atk+3. During combat, boosts unit's Atk/Spd by number of allies within 2 spaces × 2. (Maximum bonus of +6 to each stat.)","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Níu","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Spd+3. Adds 50% of total bonuses on foe to unit's Atk/Spd/Def/Res during combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Nóatún","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If unit’s HP ≤ 40%, unit can move to a space adjacent to any ally.","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Pain","skillTier":2,"spCost":150,"damage(mt)":3,"range(rng)":2,"effect":"After combat, if unit attacked, deals 10 damage to foe.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Pain+","skillTier":3,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"Deals 10 damage to target and foes within 2 spaces of target after combat.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Panic","skillTier":2,"spCost":150,"damage(mt)":7,"range(rng)":2,"effect":"After combat, if unit attacked, converts bonuses on foe into penalties through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Panic+","skillTier":3,"spCost":300,"damage(mt)":11,"range(rng)":2,"effect":"After combat, if unit attacked, converts bonuses on target and foes within 2 spaces of target into penalties through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Parthia","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against flying foes. If unit initiates combat, grants Res+4 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Bow"},{"name":"Peshkatz","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Atk/Spd/Def/Res-4 on target and foes within 2 spaces of target through their next actions, and grants Atk/Spd/Def/Res+4 to unit and allies within 2 spaces for 1 turn.","exclusive":true,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Poison Dagger","skillTier":3,"spCost":200,"damage(mt)":2,"range(rng)":2,"effect":"Effective against infantry foes. After combat, if unit attacked, inflicts Def/Res-4 on infantry foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Poison Dagger+","skillTier":4,"spCost":300,"damage(mt)":5,"range(rng)":2,"effect":"Effective against infantry foes. After combat, if unit attacked, inflicts Def/Res-6 on infantry foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Poleaxe","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Poleaxe+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Ragnarok","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"At start of combat, if unit's HP = 100%, grants Atk/Spd+5, but after combat, if unit attacked, deals 5 damage to unit.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Ragnell","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Unit can counterattack regardless of foe's range.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Raijinto","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Unit can counterattack regardless of foe's range.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Rauðrblade","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":2,"effect":"Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Rauðrblade+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":2,"effect":"Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Rauðrowl","skillTier":3,"spCost":200,"damage(mt)":6,"range(rng)":2,"effect":"During combat, boosts unit's Atk/Spd/Def/Res by number of adjacent allies × 2.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Rauðrowl+","skillTier":4,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"During combat, boosts unit's Atk/Spd/Def/Res by number of adjacent allies × 2.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Rauðrraven","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Rauðrraven+","skillTier":4,"spCost":300,"damage(mt)":11,"range(rng)":2,"effect":"Grants weapon-triangle advantage against colorless foes, and inflicts weapon-triangle disadvantage on colorless foes during combat.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Rauðrwolf","skillTier":3,"spCost":200,"damage(mt)":6,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Rauðrwolf+","skillTier":4,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Refreshing Bolt","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Effective against flying foes.  At start of combat, if unit's HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Refreshing Bolt+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Effective against flying foes.  At start of combat, if unit's HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Regal Blade","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"At start of combat, if foe's HP = 100%, grants Atk/Spd+2 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Resolute Blade","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Atk+3. Deals +10 damage when Special triggers.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Rexcalibur","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Rexcalibur+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Rhomphaia","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Effective against armored and cavalry foes.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Ridersbane","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Ridersbane+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Rogue Dagger","skillTier":3,"spCost":200,"damage(mt)":4,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action. Grants unit Def/Res+3 for 1 turn.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Rogue Dagger+","skillTier":4,"spCost":300,"damage(mt)":7,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+5 for 1 turn.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Ruby Sword","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":1,"effect":"If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Ruby Sword+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":1,"effect":"If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Ruin","skillTier":2,"spCost":100,"damage(mt)":6,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Sack o' Gifts","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Sack o' Gifts+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Safeguard","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"If foe initiates combat, grants Def+7 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Safeguard+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"If foe initiates combat, grants Def+7 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Sapphire Lance","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":1,"effect":"If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Sapphire Lance+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":1,"effect":"If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Sealed Falchion","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Effective against dragon foes. At start of combat, if unit's HP < 100%, grants Atk/Spd/Def/Res+5 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Sealife Tome","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Grants Atk/Spd+1 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Sealife Tome+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Grants Atk/Spd+1 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Seashell","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"At start of combat, if unit's HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit. After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Seashell+","skillTier":4,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"At start of combat, if unit's HP = 100%, grants Atk/Spd/Def/Res+2, but after combat, if unit attacked, deals 2 damage to unit. After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Shine","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Shine+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Siegfried","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Unit can counterattack regardless of foe's range.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Sieglinde","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"At start of turn, grants Atk+3 to adjacent allies for 1 turn.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Siegmund","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"At start of turn, grants Atk+3 to adjacent allies for 1 turn.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Silver Axe","skillTier":3,"spCost":200,"damage(mt)":11,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Silver Axe+","skillTier":4,"spCost":300,"damage(mt)":15,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Silver Bow","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":2,"effect":"Effective against flying foes.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Silver Bow+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":2,"effect":"Effective against flying foes.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Silver Dagger","skillTier":3,"spCost":200,"damage(mt)":7,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Def/Res-5 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Silver Dagger+","skillTier":4,"spCost":300,"damage(mt)":10,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Def/Res-7 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Silver Lance","skillTier":3,"spCost":200,"damage(mt)":11,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Silver Lance+","skillTier":4,"spCost":300,"damage(mt)":15,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Silver Sword","skillTier":3,"spCost":200,"damage(mt)":11,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Silver Sword+","skillTier":4,"spCost":300,"damage(mt)":15,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Sinmara","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Grants Def+3. At the start of turn, deals 20 damage to foes within 2 spaces.","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Skadi","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against flying foes. Grants Spd+3. At the start of turn 3, deals 10 damage to foes within 3 columns centered on unit, and converts bonuses on those foes into penalties through their next actions.","exclusive":true,"type":"WEAPON","weaponType":"Bow"},{"name":"Slaying Axe","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Slaying Axe+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Slaying Bow","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Accelerates Special trigger (cooldown count-1). Effective against flying foes.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Slaying Bow+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Accelerates Special trigger (cooldown count-1). Effective against flying foes.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Slaying Edge","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Slaying Edge+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Slaying Hammer","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Slaying Hammer+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Slaying Lance","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Slaying Lance+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1).","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Slaying Spear","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Slaying Spear+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Effective against armored foes.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Slow","skillTier":2,"spCost":150,"damage(mt)":5,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Spd-6 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Slow+","skillTier":3,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Spd-7 on target and foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Smoke Dagger","skillTier":3,"spCost":200,"damage(mt)":6,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Def/Res-4 on foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Smoke Dagger+","skillTier":4,"spCost":300,"damage(mt)":9,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Def/Res-6 on foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Sol Katti","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If unit's HP ≤ 50% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Spectral Tome","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Spectral Tome+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"After combat, if unit attacked, converts bonuses on foes within 2 spaces of target into penalties through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Steel Axe","skillTier":2,"spCost":100,"damage(mt)":8,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Steel Bow","skillTier":2,"spCost":100,"damage(mt)":6,"range(rng)":2,"effect":"Effective against flying foes.","exclusive":false,"type":"WEAPON","weaponType":"Bow"},{"name":"Steel Dagger","skillTier":2,"spCost":100,"damage(mt)":5,"range(rng)":2,"effect":"After combat, if unit attacked, inflicts Def/Res-3 on foe through its next action.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Steel Lance","skillTier":2,"spCost":100,"damage(mt)":8,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Steel Sword","skillTier":2,"spCost":100,"damage(mt)":8,"range(rng)":1,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Stout Tomahawk","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Unit can counterattack regardless of foe's range.","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Swift Mulagir","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against flying foes. Grants Res+3. If the number of allies within 2 spaces (excluding unit) > the number of foes within 2 spaces (excluding target), grants Atk/Spd+5 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Bow"},{"name":"Tannenboom!","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Tannenboom!+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"If foe initiates combat, grants Atk/Spd/Def/Res+2 during combat.","exclusive":false,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Thani","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against armored and cavalry foes. Grants Res+3. If armored or cavalry foe uses bow, dagger, magic, or staff, reduces damage from foe's first attack by 30%.","exclusive":true,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"The Cleaner","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Adds total bonuses on foe to damage dealt during combat. After combat, if unit attacked, inflicts Def/Res-5 on target and foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"The Cleaner+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Adds total bonuses on foe to damage dealt during combat. After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions.","exclusive":false,"type":"WEAPON","weaponType":"Colorless Dagger"},{"name":"Thoron","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Thoron+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Thunder","skillTier":1,"spCost":50,"damage(mt)":4,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Thunderhead","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Adds total bonuses on unit to damage dealt.","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Thökk","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Calculates damage from staff like other weapons. At start of turn, if foe's HP ≤ unit's HP+3 and foe is in cardinal direction and uses bow, dagger, magic, or staff, foe cannot move more than 1 space through its action.","exclusive":true,"type":"WEAPON","weaponType":"Colorless Staff"},{"name":"Tomato Tome","skillTier":3,"spCost":200,"damage(mt)":8,"range(rng)":2,"effect":"Grants Atk/Spd+1 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Tomato Tome+","skillTier":4,"spCost":300,"damage(mt)":12,"range(rng)":2,"effect":"Grants Atk/Spd+1 to allies within 2 spaces during combat.","exclusive":false,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Tyrfing","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If unit's HP ≤ 50%, grants Def+4 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Urvan","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1). If unit receives consecutive attacks, reduces damage from foe's second attack onward by 80%.","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Urðr","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If Sing or Dance is used, grants Atk/Spd/Def/Res+3 to target.","exclusive":true,"type":"WEAPON","weaponType":"Green Axe"},{"name":"Valaskjálf","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"If unit’s HP ≤ 50% and foe initiates combat, unit can counterattack before foe’s first attack.","exclusive":true,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Valflame","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"At start of turn, inflicts Atk/Res-4 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":true,"type":"WEAPON","weaponType":"Red Tome"},{"name":"Vassal's Blade","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Accelerates Special trigger (cooldown count-1). If unit's Spd > foe's Spd, boosts damage dealt by 70% of difference between stats. (Maximum bonus of +7 damage. Combos with Phantom Spd.)","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Vidofnir","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If foe initiates combat and uses sword, lance, or axe, grants Def+7 during combat.","exclusive":true,"type":"WEAPON","weaponType":"Blue Lance"},{"name":"Wargod's Tome","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"At start of turn, inflicts Atk/Res-4 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":true,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Warrior Princess","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Effective against flying and armored foes. Grants Spd+3. Grants Atk+3 to allies within 2 spaces during combat.","exclusive":true,"type":"WEAPON","weaponType":"Bow"},{"name":"Water Breath","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"If foe initiates combat, grants Def/Res+4 during combat. If foe's Range = 2, calculates damage using the lower of foe's Def or Res.","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Water Breath+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"If foe initiates combat, grants Def/Res+4 during combat. If foe's Range = 2, calculates damage using the lower of foe's Def or Res.","exclusive":false,"type":"WEAPON","weaponType":"Breath"},{"name":"Weirding Tome","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"Grants Spd+3. At start of turn, inflicts Spd-5 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":true,"type":"WEAPON","weaponType":"Blue Tome"},{"name":"Wind","skillTier":1,"spCost":50,"damage(mt)":4,"range(rng)":2,"effect":"","exclusive":false,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Wind's Brand","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Wing Sword","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"Effective against armored and cavalry foes.","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Wo Dao","skillTier":3,"spCost":200,"damage(mt)":9,"range(rng)":1,"effect":"Deals +10 damage when Special triggers.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Wo Dao+","skillTier":4,"spCost":300,"damage(mt)":13,"range(rng)":1,"effect":"Deals +10 damage when Special triggers.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Yato","skillTier":4,"spCost":400,"damage(mt)":16,"range(rng)":1,"effect":"If unit initiates combat, grants Spd+4 during combat","exclusive":true,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Zanbato","skillTier":3,"spCost":200,"damage(mt)":10,"range(rng)":1,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Zanbato+","skillTier":4,"spCost":300,"damage(mt)":14,"range(rng)":1,"effect":"Effective against cavalry foes.","exclusive":false,"type":"WEAPON","weaponType":"Red Sword"},{"name":"Élivágar","skillTier":4,"spCost":400,"damage(mt)":14,"range(rng)":2,"effect":"If unit initiates combat, converts bonuses on foes within 2 spaces of target into penalties through their next actions.","exclusive":true,"type":"WEAPON","weaponType":"Green Tome"},{"name":"Ardent Sacrifice","range":1,"effect":"Restores 10 HP to target ally. Unit loses 10 HP but cannot go below 1.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Dance","range":1,"effect":"Grants another action to target ally. (Cannot target an ally with Sing or Dance.)","exclusive":true,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":[""],"type":"ASSIST"},{"name":"Draw Back","range":1,"effect":"Unit moves 1 space away from target ally. Ally moves to unit’s previous space.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Harsh Command","range":1,"effect":"Converts penalties on target into bonuses.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Heal","range":1,"effect":"Restores 5 HP to target ally.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Martyr","range":1,"effect":"Slows Special trigger (cooldown count+1). Restores X HP to target (X - damage dealt to unit + 7). Restores Y HP to unit (Y = half damage dealt to unit).","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Martyr+","range":1,"effect":"Restores HP = damage dealt to unit +50% of Atk. (Minimum of 7 HP.) Restores HP to unit = half damage dealt to unit.","exclusive":false,"skillTier":4,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Mend","range":1,"effect":"Restores 10 HP to target ally.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Physic","range":2,"effect":"Restores 8 HP to target ally. Range = 2.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Physic+","range":2,"effect":"Restores HP = 50% of Atk. (Minimum of 8 HP.) Range = 2.","exclusive":false,"skillTier":4,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Pivot","range":1,"effect":"Unit moves to opposite side of target ally.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Rally Atk/Def","range":1,"effect":"Grants Atk/Def+3 to target ally for 1 turn.","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Rally Atk/Res","range":1,"effect":"Grants Atk/Res+3 to an adjacent ally until the end of the turn.","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Rally Atk/Spd","range":1,"effect":"Grants Atk/Spd+3 to target ally for 1 turn.","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Rally Attack","range":1,"effect":"Grants Atk+4 to target ally for 1 turn.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Rally Def/Res","range":1,"effect":"Grants Def/Res+3 to target ally for 1 turn.","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Rally Defense","range":1,"effect":"Grants Def+4 to target ally for 1 turn.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Rally Resistance","range":1,"effect":"Grants Res+4 to target ally for 1 turn.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Rally Spd/Def","range":1,"effect":"Grants Spd/Def+3 to target ally for 1 turn.","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Rally Spd/Res","range":1,"effect":"Grants Spd/Res+3 to target ally for 1 turn.","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Rally Speed","range":1,"effect":"Grants Spd+4 to target ally for 1 turn.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Reciprocal Aid","range":1,"effect":"Unit and target ally swap HP. (Neither can go above their max HP.)","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Reconcile","range":1,"effect":"Restores 7 HP to unit and target ally.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Recover","range":1,"effect":"Slows Special trigger (cooldown count+1). Restores 15 HP to target ally.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Recover+","range":1,"effect":"Restores HP = 50% of Atk +10. (Minimum of 15 HP.)","exclusive":false,"skillTier":4,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Rehabilitate","range":1,"effect":"Slows Special trigger (cooldown count+1). If target's HP is ≤ 50%, the lower the target's HP, the more HP is restored. (Minimum of 7 HP.)","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Rehabilitate+","range":1,"effect":"Restores HP = 50% of Atk -10. (Minimum of 7 HP.) If target's HP is ≤ 50%, the lower the target's HP, the more HP is restored.","exclusive":false,"skillTier":4,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Reposition","range":1,"effect":"Target ally moves to opposite side of unit.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Restore","range":1,"effect":"Restores 8 HP. Neutralizes ally's penalties (from skills like Panic, Threaten, etc.) and negative status effects (preventing counterattacks, restricting movement, etc.) that last through ally's next action.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Restore+","range":1,"effect":"Restores HP = 50% of Atk. (Minimum of 8 HP.) Neutralizes ally's penalties (from skills like Panic, Threaten, etc.) and negative status effects (preventing counterattacks, restricting movement, etc.) that last through ally's next action.","exclusive":false,"skillTier":4,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"ASSIST"},{"name":"Sacrifice","range":1,"effect":"Converts penalties on target into bonuses. Restores HP to target = unit's current HP-1. Reduces unit's HP by amount restored.","exclusive":true,"skillTier":2,"spCost":400,"movementRestriction":[""],"weaponRestriction":[""],"type":"ASSIST"},{"name":"Shove","range":1,"effect":"Pushes target ally 1 space away.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Sing","range":1,"effect":"Grants another action to target ally. (Cannot target an ally with Sing or Dance.)","exclusive":true,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":[""],"type":"ASSIST"},{"name":"Smite","range":1,"effect":"Pushes target ally 2 spaces away.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Swap","range":1,"effect":"Unit and target ally swap spaces.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"ASSIST"},{"name":"Aegis","cooldown":3,"effect":"If foe's Range = 2, reduces damage from that foe's attack by 50%.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"SPECIAL"},{"name":"Aether","cooldown":5,"effect":"Treats foe’s Def/Res as if reduced by 50% during combat. Restores HP = half of damage dealt.","exclusive":false,"skillTier":3,"spCost":500,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Astra","cooldown":4,"effect":"Boosts damage dealt by 150%.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Black Luna","cooldown":3,"effect":"Treats foe's Def/Res as if reduced by 80% during combat. (Skill cannot be inherited.)","exclusive":true,"skillTier":3,"spCost":500,"movementRestriction":[""],"weaponRestriction":[""],"type":"SPECIAL"},{"name":"Blazing Flame","cooldown":4,"effect":"Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Blazing Light","cooldown":4,"effect":"Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Blazing Thunder","cooldown":4,"effect":"Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Blazing Wind","cooldown":4,"effect":"Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Bonfire","cooldown":3,"effect":"Boosts damage dealt by 50% of unit's Def.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Buckler","cooldown":3,"effect":"Reduces damage from an adjacent foe's attack by 30%.","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"SPECIAL"},{"name":"Chilling Wind","cooldown":4,"effect":"Boosts damage dealt by 50% of unit's Res.","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Daylight","cooldown":3,"effect":"Restores HP = 30% of damage dealt.","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Draconic Aura","cooldown":3,"effect":"Boosts Atk by 30%.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Dragon Fang","cooldown":4,"effect":"Boosts Atk by 50%.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Dragon Gaze","cooldown":4,"effect":"Boosts Atk by 30%.","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Escutcheon","cooldown":2,"effect":"Reduces damage from an adjacent foe's attack by 30%.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"SPECIAL"},{"name":"Galeforce","cooldown":5,"effect":"If unit initiates combat, grants unit another action after combat. (Once per turn.)","exclusive":false,"skillTier":3,"spCost":500,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Red Breath","Blue Bow","Blue Tome","Blue Breath","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"SPECIAL"},{"name":"Glacies","cooldown":4,"effect":"Boosts damage dealt by 80% of unit's Res.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Glimmer","cooldown":2,"effect":"Boosts damage dealt by 50%.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Glowing Ember","cooldown":4,"effect":"Boosts damage dealt by 50% of unit's Def.","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Growing Flame","cooldown":4,"effect":"Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Growing Light","cooldown":4,"effect":"Before combat this unit initiates, foes in a wide area near target take damage equal to (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Growing Thunder","cooldown":4,"effect":"Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Growing Wind","cooldown":4,"effect":"Before combat this unit initiates, foes in a wide area near target take damage equal to (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":2,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Heavenly Light","cooldown":2,"effect":"When healing an ally with a staff, restores 10 HP to all allies.","exclusive":false,"skillTier":2,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"SPECIAL"},{"name":"Holy Vestments","cooldown":3,"effect":"If foe's Range = 2, reduces damage from that foe's attack by 30%.","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"SPECIAL"},{"name":"Ice Mirror","cooldown":2,"effect":"If foe's Range = 2, reduces damage from foe's attacks by 30%. Boosts unit's next attack by total damage reduced (by any source, including other skills) when Special triggers. Resets at end of combat. (Skill cannot be inherited.)","exclusive":true,"skillTier":3,"spCost":500,"movementRestriction":[""],"weaponRestriction":[""],"type":"SPECIAL"},{"name":"Iceberg","cooldown":3,"effect":"Boosts damage dealt by 50% of unit's Res.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Ignis","cooldown":4,"effect":"Boosts damage dealt by 80% of unit's Def.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Imbue","cooldown":1,"effect":"When healing an ally with a staff, restores an additional 10 HP to target ally.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"SPECIAL"},{"name":"Kindled-Fire Balm","cooldown":1,"effect":"When healing an ally with a staff, grants Atk+4 to all allies for 1 turn.","exclusive":false,"skillTier":2,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"SPECIAL"},{"name":"Luna","cooldown":3,"effect":"Treats foe’s Def/Res as if reduced by 50% during combat.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Miracle","cooldown":5,"effect":"If unit’s HP > 1 and foe would reduce unit’s HP to 0, unit survives with 1 HP.","exclusive":false,"skillTier":12,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SPECIAL"},{"name":"Moonbow","cooldown":2,"effect":"Treats foe’s Def/Res as if reduced by 30% during combat.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"New Moon","cooldown":3,"effect":"Treats foe’s Def/Res as if reduced by 30% during combat.","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Night Sky","cooldown":3,"effect":"Boosts damage dealt by 50%.","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Noontime","cooldown":2,"effect":"Restores HP = 30% of damage dealt.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Pavise","cooldown":3,"effect":"Reduces damage from an adjacent foe's attack by 50%.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"SPECIAL"},{"name":"Radiant Aether","cooldown":4,"effect":"During combat, treats foe's Def/Res as if reduced by 50%. Restores HP = 50% of damage dealt.","exclusive":true,"skillTier":3,"spCost":500,"movementRestriction":[""],"weaponRestriction":[""],"type":"SPECIAL"},{"name":"Regnal Astra","cooldown":2,"effect":"Boosts damage dealt by 40% of unit's Spd. (Skill cannot be inherited.)","exclusive":true,"skillTier":3,"spCost":500,"movementRestriction":[""],"weaponRestriction":[""],"type":"SPECIAL"},{"name":"Reprisal","cooldown":2,"effect":"Grants bonus to damage dealt equal to 30% of damage suffered.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Retribution","cooldown":3,"effect":"Grants bonus to damage dealt equal to 30% of damage suffered.","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Rising Flame","cooldown":4,"effect":"Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Rising Light","cooldown":4,"effect":"Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Rising Thunder","cooldown":4,"effect":"Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Rising Wind","cooldown":4,"effect":"Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Sacred Cowl","cooldown":2,"effect":"If foe's Range = 2, reduces damage from that foe's attack by 30%.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"SPECIAL"},{"name":"Sol","cooldown":3,"effect":"Restores HP = 50% of damage dealt.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Solid-Earth Balm","cooldown":1,"effect":"When healing an ally with a staff, grants Def+4 to all allies for 1 turn.","exclusive":false,"skillTier":2,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"SPECIAL"},{"name":"Still-Water Balm","cooldown":1,"effect":"When healing an ally with a staff, grants Res+4 to all allies for 1 turn.","exclusive":false,"skillTier":2,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"SPECIAL"},{"name":"Swift-Winds Balm","cooldown":1,"effect":"When healing an ally with a staff, grants Spd+4 to all allies for 1 turn.","exclusive":false,"skillTier":2,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"SPECIAL"},{"name":"Vengeance","cooldown":3,"effect":"Grants bonus to damage dealt equal to 50% of damage suffered.","exclusive":false,"skillTier":2,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SPECIAL"},{"name":"Distant Def 3","effect":"If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"HP/Def 2","effect":"Grants HP+4, Def+2.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Armored Blow 2","effect":"If unit initiates combat, grants Def+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Armored Blow 3","effect":"If unit initiates combat, grants Def+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Wind Boost 3","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Spd+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Def 1","effect":"Grants Atk/Def+1.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Def 2","effect":"Grants Atk/Def+2.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Def Bond 1","effect":"If unit is adjacent to an ally, grants Atk/Def+3 during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Def Bond 2","effect":"If unit is adjacent to an ally, grants Atk/Def+4 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Def Bond 3","effect":"If unit is adjacent to an ally, grants Atk/Def+5 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Res 1","effect":"Grants Atk/Res+1.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Res 2","effect":"Grants Atk/Res+2.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Res Bond 1","effect":"If unit is adjacent to an ally, grants Atk/Res+3 during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Res Bond 2","effect":"If unit is adjacent to an ally, grants Atk/Res+4 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Res Bond 3","effect":"If unit is adjacent to an ally, grants Atk/Res+5 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Spd 1","effect":"Grants Atk/Spd+1.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Spd 2","effect":"Grants Atk/Spd+2.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Spd Bond 1","effect":"If unit is adjacent to an ally, grants Atk/Spd+3 during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Spd Bond 2","effect":"If unit is adjacent to an ally, grants Atk/Spd+4 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Atk/Spd Bond 3","effect":"If unit is adjacent to an ally, grants Atk/Spd+5 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Attack +1","effect":"Grants Atk+1.","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Attack +2","effect":"Grants Atk+2.","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Attack +3","effect":"Grants Atk+3.","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Wind Boost 2","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Spd+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Wind Boost 1","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Spd+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Water Boost 3","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Res+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Water Boost 2","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Res+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Water Boost 1","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Res+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Warding Stance 3","effect":"If foe initiates combat, grants Res+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Warding Stance 2","effect":"If foe initiates combat, grants Res+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Warding Stance 1","effect":"If foe initiates combat, grants Res+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Warding Breath","effect":"If foe initiates combat, grants Res+4 during combat. Grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_A"},{"name":"Warding Blow 3","effect":"If unit initiates combat, grants Res+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Warding Blow 2","effect":"If unit initiates combat, grants Res+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Bracing Blow 1","effect":"If unit initiates combat, grants Def/Res+2 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Bracing Blow 2","effect":"If unit initiates combat, grants Def/Res+4 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Brazen Atk/Def 1","effect":"At start of combat, if unit's HP ≤ 80%, grants Atk/Def+3 during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Brazen Atk/Def 2","effect":"At start of combat, if unit's HP ≤ 80%, grants Atk/Def+5 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Brazen Atk/Def 3","effect":"At start of combat, if unit's HP ≤ 80%, grants Atk/Def+7 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Brazen Atk/Spd 1","effect":"At start of combat, if unit's HP ≤ 80%, grants Atk/Spd+3 during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Brazen Atk/Spd 2","effect":"At start of combat, if unit's HP ≤ 80%, grants Atk/Spd+5 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Brazen Atk/Spd 3","effect":"At start of combat, if unit's HP ≤ 80%, grants Atk/Spd+7 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Brazen Def/Res 1","effect":"At start of combat, if unit's HP ≤ 80%, grants Def/Res+3 during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Brazen Def/Res 2","effect":"At start of combat, if unit's HP ≤ 80%, grants Def/Res+5 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Brazen Def/Res 3","effect":"At start of combat, if unit's HP ≤ 80%, grants Def/Res+7 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Warding Blow 1","effect":"If unit initiates combat, grants Res+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Close Counter","effect":"Unit can counterattack regardless of foe's range.","exclusive":false,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Breath","Blue Lance","Blue Breath","Green Axe","Green Breath","Colorless Breath"],"type":"PASSIVE_A"},{"name":"Close Def 1","effect":"If foe initiates combat and uses sword, lance, axe, or dragonstone, grants Def/Res+2 during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Close Def 2","effect":"If foe initiates combat and uses sword, lance, axe, or dragonstone, grants Def/Res+4 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Close Def 3","effect":"If foe initiates combat and uses sword, lance, axe, or dragonstone, grants Def/Res+6 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Darting Blow 1","effect":"If unit initiates combat, grants Spd+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Darting Blow 2","effect":"If unit initiates combat, grants Spd+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Darting Blow 3","effect":"If unit initiates combat, grants Spd+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Darting Stance 1","effect":"If foe initiates combat, grants Spd+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Darting Stance 2","effect":"If foe initiates combat, grants Spd+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Darting Stance 3","effect":"If foe initiates combat, grants Spd+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Death Blow 1","effect":"If unit initiates combat, grants Atk+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Death Blow 2","effect":"If unit initiates combat, grants Atk+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Death Blow 3","effect":"If unit initiates combat, grants Atk+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Triangle Adept 3","effect":"If unit has weapon-triangle advantage, boosts Atk by 20%. If unit has weapon-triangle disadvantage, reduces Atk by 20%.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_A"},{"name":"Triangle Adept 2","effect":"If unit has weapon-triangle advantage, boosts Atk by 15%. If unit has weapon-triangle disadvantage, reduces Atk by 15%.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_A"},{"name":"Triangle Adept 1","effect":"If unit has weapon-triangle advantage, boosts Atk by 10%. If unit has weapon-triangle disadvantage, reduces Atk by 10%.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_A"},{"name":"Defense +1","effect":"Grants Def+1.","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defense +2","effect":"Grants Def+2.","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defense +3","effect":"Grants Def+3.","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Atk 1","effect":"At start of turn, if unit's HP ≤ 50%, grants Atk+3 for 1 turn.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Atk 2","effect":"At start of turn, if unit's HP ≤ 50%, grants Atk+5 for 1 turn.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Atk 3","effect":"At start of turn, if unit's HP ≤ 50%, grants Atk+7 for 1 turn.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Def 1","effect":"At start of turn, if unit's HP ≤ 50%, grants Def+3 for 1 turn.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Def 2","effect":"At start of turn, if unit's HP ≤ 50%, grants Def+5 for 1 turn.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Def 3","effect":"At start of turn, if unit's HP ≤ 50%, grants Def+7 for 1 turn.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Res 1","effect":"At start of turn, if unit's HP ≤ 50%, grants Res+3 for 1 turn.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Res 2","effect":"At start of turn, if unit's HP ≤ 50%, grants Res+5 for 1 turn.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Res 3","effect":"At start of turn, if unit's HP ≤ 50%, grants Res+7 for 1 turn.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Spd 1","effect":"At start of turn, if unit's HP ≤ 50%, grants Spd+3 for 1 turn.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Spd 2","effect":"At start of turn, if unit's HP ≤ 50%, grants Spd+5 for 1 turn.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Defiant Spd 3","effect":"At start of turn, if unit's HP ≤ 50%, grants Spd+7 for 1 turn.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Distant Counter","effect":"Unit can counterattack regardless of foe's range.","exclusive":false,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_A"},{"name":"Distant Def 1","effect":"If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+2 during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Distant Def 2","effect":"If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+4 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Armored Blow 1","effect":"If unit initiates combat, grants Def+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Dragonskin","effect":"Neutralizes \"effective against flying\" bonuses. If foe initiates combat, grants Def/Res+4 during combat.","exclusive":true,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Swift Strike 2","effect":"If unit initiates combat, grants Spd/Res+4 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Swift Strike 1","effect":"If unit initiates combat, grants Spd/Res+2 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Swift Stance 2","effect":"If foe initiates combat, grants Spd/Res+4 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Swift Stance 1","effect":"If foe initiates combat, grants Spd/Res+2 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Swift Sparrow 2","effect":"If unit initiates combat, grants Atk/Spd+4 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Swift Sparrow 1","effect":"If unit initiates combat, grants Atk/Spd+2 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Svalinn Shield","effect":"Neutralizes \"effective against armored\" bonuses.","exclusive":false,"skillTier":1,"spCost":200,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Earth Boost 1","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Def+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Earth Boost 2","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Def+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Earth Boost 3","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Def+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Sturdy Stance 2","effect":"If foe initiates combat, grants Atk/Def+4 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Sturdy Stance 1","effect":"If foe initiates combat, grants Atk/Def+2 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Sturdy Blow 2","effect":"If unit initiates combat, grants Atk/Def+4 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Fierce Stance 1","effect":"If foe initiates combat, grants Atk+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Fierce Stance 2","effect":"If foe initiates combat, grants Atk+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Fierce Stance 3","effect":"If foe initiates combat, grants Atk+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Fire Boost 1","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Atk+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Fire Boost 2","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Atk+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Fire Boost 3","effect":"At start of combat, if unit's HP ≥ foe's HP+3, grants Atk+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Flashing Blade 1","effect":"If unit's Spd ≥ foe's Spd+5, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Flashing Blade 2","effect":"If unit's Spd ≥ foe's Spd+3, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Flashing Blade 3","effect":"If unit's Spd > foe's Spd, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Sturdy Blow 1","effect":"If unit initiates combat, grants Atk/Def+2 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Steady Stance 3","effect":"If foe initiates combat, grants Def+6 during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Steady Stance 2","effect":"If foe initiates combat, grants Def+4 during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Steady Stance 1","effect":"If foe initiates combat, grants Def+2 during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Steady Breath","effect":"If foe initiates combat, grants Def+4 during combat and Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_A"},{"name":"Steady Blow 2","effect":"If unit initiates combat, grants Spd/Def+4 during battle.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Steady Blow 1","effect":"If unit initiates combat, grants Spd/Def+2 during battle.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Fortress Def 1","effect":"Grants Def+3. Inflicts Atk-3.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Fortress Def 2","effect":"Grants Def+4. Inflicts Atk-3.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Fortress Def 3","effect":"Grants Def+5. Inflicts Atk-3.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Fortress Res 1","effect":"Grants Res+3. Inflicts Atk-3.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Fortress Res 2","effect":"Grants Res+4. Inflicts Atk-3.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Fortress Res 3","effect":"Grants Res+5. Inflicts Atk-3.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Fury 1","effect":"Grants Atk/Spd/Def/Res+1. After combat, deals 2 damage to unit.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Fury 2","effect":"Grants Atk/Spd/Def/Res+2. After combat, deals 4 damage to unit.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Fury 3","effect":"Grants Atk/Spd/Def/Res+3. After combat, deals 6 damage to unit.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Grani's Shield","effect":"Neutralizes \"effective against cavalry\" bonuses.","exclusive":false,"skillTier":1,"spCost":200,"movementRestriction":["Infantry","Armored","Flying"],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Heavy Blade 1","effect":"If unit's Atk ≥ foe's Atk+5, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Heavy Blade 2","effect":"If unit's Atk ≥ foe's Atk+3, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Heavy Blade 3","effect":"If unit's Atk > foe's Atk, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"HP +3","effect":"Grants HP+3.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"HP +4","effect":"Grants HP+4.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"HP +5","effect":"Grants HP+5.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"HP/Atk 1","effect":"Grants HP+3, Atk+1.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"HP/Atk 2","effect":"Grants HP+4, Atk+2.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"HP/Def 1","effect":"Grants HP+3, Def+1.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"HP/Res 1","effect":"Grants HP+3, Res+1.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"HP/Res 2","effect":"Grants HP+4, Res+2.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"HP/Spd 1","effect":"Grants HP+3, Spd+1.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"HP/Spd 2","effect":"Grants HP+4, Spd+2.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Speed +3","effect":"Grants Spd+3.","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Speed +2","effect":"Grants Spd+2.","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Iote's Shield","effect":"Neutralizes \"effective against flying\" bonuses.","exclusive":false,"skillTier":1,"spCost":200,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Kestrel Stance 1","effect":"If foe initiates combat, grants Atk/Spd+2 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Kestrel Stance 2","effect":"If foe initiates combat, grants Atk/Spd+4 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Speed +1","effect":"Grants Spd+1.","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Spd/Res Bond 3","effect":"If unit is adjacent to an ally, grants Spd/Res+5 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Spd/Res Bond 2","effect":"If unit is adjacent to an ally, grants Spd/Res+4 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Laws of Sacae","effect":"If foe initiates combat and the number of allies within 2 spaces ≥ 2, grants Atk/Spd/Def/Res+4 during combat.","exclusive":true,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Life and Death 1","effect":"Grants Atk/Spd+3. Inflicts Def/Res-3.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Life and Death 2","effect":"Grants Atk/Spd+4. Inflicts Def/Res-4.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Life and Death 3","effect":"Grants Atk/Spd+5. Inflicts Def/Res-5.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Mirror Stance 1","effect":"If foe initiates combat, grants Atk/Res+2 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Mirror Stance 2","effect":"If foe initiates combat, grants Atk/Res+4 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Mirror Strike 1","effect":"If unit initiates combat, grants Atk/Res+2 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Mirror Strike 2","effect":"If unit initiates combat, grants Atk/Res+4 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_A"},{"name":"Spd/Res Bond 1","effect":"If unit is adjacent to an ally, grants Spd/Res+3 during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Spd/Res 2","effect":"Grants Spd/Res+2.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Spd/Res 1","effect":"Grants Spd/Res+1.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Spd/Def Bond 3","effect":"If unit is adjacent to an ally, grants Spd/Def+5 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Spd/Def Bond 2","effect":"If unit is adjacent to an ally, grants Spd/Def+4 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Spd/Def Bond 1","effect":"If unit is adjacent to an ally, grants Spd/Def+3 during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Spd/Def 2","effect":"Grants Spd/Def+2.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Spd/Def 1","effect":"Grants Spd/Def+1.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Resistance +1","effect":"Grants Res+1.","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Resistance +2","effect":"Grants Res+2.","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Resistance +3","effect":"Grants Res+3.","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_A"},{"name":"Desperation 1","effect":"If unit’s HP ≤ 25% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Desperation 2","effect":"If unit’s HP ≤ 50% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Desperation 3","effect":"If unit’s HP ≤ 75% and unit initiates combat, unit can make a follow-up attack before foe can counterattack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Wrath 2","effect":"At start of turn, if unit's HP ≤ 50% and unit's attack triggers Special, grants Special cooldown count-1. Deals +10 damage when Special triggers.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Watersweep 3","effect":"If unit initiates combat, unit cannot make a follow-up attack. If unit's Spd ≥ foe's Spd and foe uses magic, staff, or dragonstone, foe cannot counterattack.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Watersweep 2","effect":"If unit initiates combat, unit cannot make a follow-up attack. If unit's Spd ≥ foe's Spd+3 and foe uses magic, staff, or dragonstone, foe cannot counterattack.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Drag Back","effect":"If unit initiates combat, unit moves 1 space away after combat. Target foe moves to unit's previous space.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Watersweep 1","effect":"If unit initiates combat, unit cannot make a follow-up attack. If unit's Spd ≥ foe's Spd+5 and foe uses magic, staff, or dragonstone, foe cannot counterattack.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Swordbreaker 1","effect":"If unit's HP ≥ 90% in combat against a sword foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Green Axe","Green Bow","Green Tome","Green Breath"],"type":"PASSIVE_B"},{"name":"Wrath 1","effect":"At start of turn, if unit's HP ≤ 25% and unit's attack triggers Special, grants Special cooldown count-1. Deals +10 damage when Special triggers.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Axebreaker 1","effect":"If unit's HP ≥ 90% in combat against an axe foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Blue Lance","Blue Bow","Blue Tome","Blue Breath"],"type":"PASSIVE_B"},{"name":"Axebreaker 2","effect":"If unit's HP ≥ 70% in combat against an axe foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Blue Lance","Blue Bow","Blue Tome","Blue Breath"],"type":"PASSIVE_B"},{"name":"Axebreaker 3","effect":"If unit's HP ≥ 50% in combat against an axe foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Blue Lance","Blue Bow","Blue Tome","Blue Breath"],"type":"PASSIVE_B"},{"name":"Vengeful Fighter 3","effect":"If unit's HP ≥ 50% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Vengeful Fighter 2","effect":"If unit's HP ≥ 70% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Bushido","effect":"Deals +10 damage when Special triggers.","exclusive":true,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Dull Close 1","effect":"At start of combat, if unit's HP ≥ 100% and foe uses sword, lance, axe, or dragonstone, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Dull Close 2","effect":"At start of combat, if unit's HP ≥ 50% and foe uses sword, lance, axe, or dragonstone, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Dull Close 3","effect":"If foe uses sword, lance, axe, or dragonstone, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Dull Ranged 1","effect":"At start of combat, if unit's HP ≥ 100% and foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Dull Ranged 2","effect":"At start of combat, if unit's HP ≥ 50% and foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Dull Ranged 3","effect":"If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Cancel Affinity 1","effect":"Neutralizes all weapon-triangle advantage granted by unit's and foe's skills.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Cancel Affinity 2","effect":"Neutralizes weapon-triangle advantage granted by unit's skills. If unit has weapon-triangle disadvantage, neutralizes weapon-triangle advantage granted by foe's skills.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Cancel Affinity 3","effect":"Neutralizes weapon-triangle advantage granted by unit's skills. If unit has weapon-triangle disadvantage, reverses weapon-triangle advantage granted by foe's skills.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Earth Dance 1","effect":"If Sing or Dance is used, grants Def+3 to target.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Earth Dance 2","effect":"If Sing or Dance is used, grants Def+4 to target.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Earth Dance 3","effect":"If Sing or Dance is used, grants Def+5 to target.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Escape Route 1","effect":"If unit’s HP ≤ 30%, unit can move to a space adjacent to any ally.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Escape Route 2","effect":"If unit’s HP ≤ 40%, unit can move to a space adjacent to any ally.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Escape Route 3","effect":"If unit’s HP ≤ 50%, unit can move to a space adjacent to any ally.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Atk 1","effect":"At the start of each turn, inflicts Atk-3 on foe on the enemy team with the highest Atk through its next action.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Atk 2","effect":"At the start of each turn, inflicts Atk-5 on foe on the enemy team with the highest Atk through its next action.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Atk 3","effect":"At the start of each turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Def 1","effect":"At the start of each turn, inflicts Def-3 on foe on the enemy team with the highest Def through its next action.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Def 2","effect":"At the start of each turn, inflicts Def-5 on foe on the enemy team with the highest Def through its next action.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Def 3","effect":"At the start of each turn, inflicts Def-7 on foe on the enemy team with the highest Def through its next action.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Res 1","effect":"At the start of each turn, inflicts Res-3 on foe on the enemy team with the highest Res through its next action.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Res 2","effect":"At the start of each turn, inflicts Res-5 on foe on the enemy team with the highest Res through its next action.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Res 3","effect":"At the start of each turn, inflicts Res-7 on foe on the enemy team with the highest Res through its next action.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Firestorm Dance 1","effect":"If Sing or Dance is used, grants Atk/Spd+2 to target.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Firestorm Dance 2","effect":"If Sing or Dance is used, grants Atk/Spd+3 to target.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Chill Spd 1","effect":"At start of turn, inflicts Spd-3 on foe on the enemy team with the highest Spd through its next action.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Spd 2","effect":"At start of turn, inflicts Spd-5 on foe on the enemy team with the highest Spd through its next action.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chill Spd 3","effect":"At start of turn, inflicts Spd-7 on foe on the enemy team with the highest Spd through its next action.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Flier Formation 1","effect":"If unit HP = 100%, unit can move to a space adjacent to a flying ally within 2 spaces.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Flier Formation 2","effect":"If unit HP ≥ 50%, unit can move to a space adjacent to a flying ally within 2 spaces.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Flier Formation 3","effect":"Unit can move to a space adjacent to a flying ally within 2 spaces.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Chilling Seal","effect":"At start of turn, if unit's HP ≥ 50%, inflicts Atk/Spd-6 on foe on the enemy team with the lowest Def through its next action. (Skill cannot be inherited.)","exclusive":true,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Wings of Mercy 3","effect":"If an ally's HP ≤ 50%, unit can move to a space adjacent to that ally.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Wings of Mercy 2","effect":"If an ally's HP ≤ 40%, unit can move to a space adjacent to that ally.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Follow-Up Ring","effect":"At start of combat, if unit's HP ≥ 50%, unit makes a guaranteed follow-up attack. (Skill cannot be inherited.)","exclusive":true,"skillTier":1,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Wary Fighter 3","effect":"If unit's HP ≥ 50%, unit and foe cannot make a follow-up attack.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Wary Fighter 2","effect":"If unit's HP ≥ 70%, unit and foe cannot make a follow-up attack.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Crusader's Ward","effect":"If unit receives consecutive attacks and foe's Range = 2, reduces damage from foe's second attack onward by 80%. (Skill cannot be inherited.)","exclusive":true,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Vengeful Fighter 1","effect":"If unit's HP ≥ 90% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Vantage 3","effect":"If unit’s HP ≤ 75% and foe initiates combat, unit can counterattack before foe’s first attack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Vantage 2","effect":"If unit’s HP ≤ 50% and foe initiates combat, unit can counterattack before foe’s first attack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Daggerbreaker 1","effect":"If unit's HP ≥ 90% in combat against a colorless dagger foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Daggerbreaker 2","effect":"If unit's HP ≥ 70% in combat against a colorless dagger foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Daggerbreaker 3","effect":"If unit's HP ≥ 50% in combat against a colorless dagger foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Wary Fighter 1","effect":"If unit's HP ≥ 90%, unit and foe cannot make a follow-up attack.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Warp Powder","effect":"If unit's HP ≥ 80%, unit can move to a space adjacent to any ally within 2 spaces.","exclusive":true,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"B Tomebreaker 1","effect":"If unit's HP ≥ 90% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath"],"type":"PASSIVE_B"},{"name":"B Tomebreaker 2","effect":"If unit's HP ≥ 70% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath"],"type":"PASSIVE_B"},{"name":"G Tomebreaker 1","effect":"If unit's HP ≥ 90% in combat against a green tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Blue Lance","Blue Bow","Blue Tome","Blue Breath"],"type":"PASSIVE_B"},{"name":"G Tomebreaker 2","effect":"If unit's HP ≥ 70% in combat against a green tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Blue Lance","Blue Bow","Blue Tome","Blue Breath"],"type":"PASSIVE_B"},{"name":"G Tomebreaker 3","effect":"If unit's HP ≥ 50% in combat against a green tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Blue Lance","Blue Bow","Blue Tome","Blue Breath"],"type":"PASSIVE_B"},{"name":"Gale Dance 1","effect":"If Sing or Dance is used, grants Spd+2 to target.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Gale Dance 2","effect":"If Sing or Dance is used, grants Spd+3 to target.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Gale Dance 3","effect":"If Sing or Dance is used, grants Spd+4 to target.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Geyser Dance 1","effect":"If Sing or Dance is used, grants Def/Res+3 to target.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Geyser Dance 2","effect":"If Sing or Dance is used, grants Def/Res+4 to target.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"B Tomebreaker 3","effect":"If unit's HP ≥ 50% in combat against a blue tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath"],"type":"PASSIVE_B"},{"name":"Guard 1","effect":"At start of combat, if unit's HP = 100%, inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Guard 2","effect":"At start of combat, if unit's HP ≥ 90%, inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Guard 3","effect":"At start of combat, if unit's HP ≥ 80%, inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Beorc's Blessing","effect":"Neutralizes cavalry and flying foe's bonuses (from skills like Fortify, Rally, etc.) during combat. (Skill cannot be inherited.)","exclusive":true,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Dazzling Staff 1","effect":"At start of combat, if unit's HP = 100%, foe cannot counterattack.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"PASSIVE_B"},{"name":"Dazzling Staff 2","effect":"At start of combat, if unit's HP ≥ 50%, foe cannot counterattack.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"PASSIVE_B"},{"name":"Hit and Run","effect":"If unit initiates combat, unit moves 1 space away after combat.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Dazzling Staff 3","effect":"Foe cannot counterattack.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"PASSIVE_B"},{"name":"Blaze Dance 1","effect":"If Sing or Dance is used, grants Atk+2 to target.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Blaze Dance 2","effect":"If Sing or Dance is used, grants Atk+3 to target.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Blaze Dance 3","effect":"If Sing or Dance is used, grants Atk+4 to target.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Def Feint 1","effect":"If a Rally Assist skill is used by unit or targets unit, inflicts Def-3 on foes in cardinal directions of unit through their next actions.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Def Feint 2","effect":"If a Rally Assist skill is used by unit or targets unit, inflicts Def-5 on foes in cardinal directions of unit through their next actions.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Aerobatics 2","effect":"If unit's HP ≥ 50%, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Def Feint 3","effect":"If a Rally Assist skill is used by unit or targets unit, inflicts Def-7 on foes in cardinal directions of unit through their next actions.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Vantage 1","effect":"If unit’s HP ≤ 25% and foe initiates combat, unit can counterattack before foe’s first attack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Bold Fighter 1","effect":"If unit's HP = 100% and unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Bold Fighter 2","effect":"If unit's HP ≥ 50% and unit initiates combat, unit makes a guaranteed follow-up attack.<Br>Grants Special cooldown charge +1 per attack. (Does not stack.)","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Bold Fighter 3","effect":"If unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Torrent Dance 3","effect":"If Sing or Dance is used, grants Res+5 to target.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Torrent Dance 2","effect":"If Sing or Dance is used, grants Res+4 to target.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Torrent Dance 1","effect":"If Sing or Dance is used, grants Res+3 to target.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Swordbreaker 3","effect":"If unit's HP ≥ 50% in combat against a sword foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Green Axe","Green Bow","Green Tome","Green Breath"],"type":"PASSIVE_B"},{"name":"Knock Back","effect":"If unit initiates combat, target foe moves 1 space away after combat.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Swordbreaker 2","effect":"If unit's HP ≥ 70% in combat against a sword foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Green Axe","Green Bow","Green Tome","Green Breath"],"type":"PASSIVE_B"},{"name":"Def/Res Link 1","effect":"If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Def/Res+2 to unit and target ally or unit and targeting ally for 1 turn.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Def/Res Link 2","effect":"If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Def/Res+4 to unit and target ally or unit and targeting ally for 1 turn.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Lancebreaker 1","effect":"If unit's HP ≥ 90% in combat against a lance foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath"],"type":"PASSIVE_B"},{"name":"Lancebreaker 2","effect":"If unit's HP ≥ 70% in combat against a lance foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath"],"type":"PASSIVE_B"},{"name":"Lancebreaker 3","effect":"If unit's HP ≥ 50% in combat against a lance foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath"],"type":"PASSIVE_B"},{"name":"Def/Res Link 3","effect":"If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Def/Res+6 to unit and target ally or unit and targeting ally for 1 turn.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Wings of Mercy 1","effect":"If an ally's HP ≤ 30%, unit can move to a space adjacent to that ally.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Windsweep 3","effect":"If unit initiates combat, unit cannot make a follow-up attack. If unit's Spd ≥ foe's Spd and foe uses sword, lance, axe, bow, or dagger, foe cannot counterattack.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Windsweep 2","effect":"If unit initiates combat, unit cannot make a follow-up attack. If unit's Spd ≥ foe's Spd+3 and foe uses sword, lance, axe, bow, or dagger, foe cannot counterattack.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Live for Bounty","effect":"If unit survives, get 1.5x shards/crystals from a Training Tower map. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Live for Honor","effect":"If unit survives, get 1.5x badges from a Training Tower map. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Live to Serve 1","effect":"When healing an ally with a staff, restores HP to unit = 50% of HP restored to target.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"PASSIVE_B"},{"name":"Live to Serve 2","effect":"When healing an ally with a staff, restores HP to unit = 75% of HP restored to target.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"PASSIVE_B"},{"name":"Live to Serve 3","effect":"When healing an ally with a staff, restores HP to unit = HP restored to target.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"PASSIVE_B"},{"name":"Lunge","effect":"If unit initiates combat, unit and target foe swap spaces after combat.","exclusive":false,"skillTier":1,"spCost":150,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Windsweep 1","effect":"If unit initiates combat, unit cannot make a follow-up attack. If unit's Spd ≥ foe's Spd+5 and foe uses sword, lance, axe, bow, or dagger, foe cannot counterattack.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Wrathful Staff 1","effect":"At start of combat, if unit's HP = 100%, calculates damage from staff like other weapons.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"PASSIVE_B"},{"name":"Wrath 3","effect":"At start of turn, if unit's HP ≤ 75% and unit's attack triggers Special, grants Special cooldown count-1. Deals +10 damage when Special triggers.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Bowbreaker 1","effect":"If unit's HP ≥ 90% in combat against a colorless bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":["Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Obstruct 1","effect":"If unit's HP ≥ 90%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.)","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Obstruct 2","effect":"If unit's HP ≥ 70%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.)","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Obstruct 3","effect":"If unit's HP ≥ 50%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.)","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Bowbreaker 2","effect":"If unit's HP ≥ 70% in combat against a colorless bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":["Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Bowbreaker 3","effect":"If unit's HP ≥ 50% in combat against a colorless bow foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Flying"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Aerobatics 1","effect":"If unit's HP = 100%, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Aerobatics 3","effect":"Unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Brash Assault 1","effect":"If unit initiates combat against a foe that can counter and unit's HP ≤ 30%, unit makes a guaranteed follow-up attack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Brash Assault 2","effect":"If unit initiates combat against a foe that can counter and unit's HP ≤ 40%, unit makes a guaranteed follow-up attack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Pass 1","effect":"If unit’s HP ≥ 75%, unit can move through foes’ spaces.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Pass 2","effect":"If unit’s HP ≥ 50%, unit can move through foes’ spaces.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Pass 3","effect":"If unit’s HP ≥ 25%, unit can move through foes’ spaces.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Poison Strike 1","effect":"If unit initiates combat, deals 4 damage to foe after combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Poison Strike 2","effect":"If unit initiates combat, deals 7 damage to foe after combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Poison Strike 3","effect":"If unit initiates combat, deals 10 damage to foe after combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Quick Riposte 1","effect":"If unit's HP ≥ 90% and foe initiates combat, unit makes a guaranteed follow-up attack.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Quick Riposte 2","effect":"If unit's HP ≥ 80% and foe initiates combat, unit makes a guaranteed follow-up attack.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Quick Riposte 3","effect":"If unit's HP ≥ 70% and foe initiates combat, unit makes a guaranteed follow-up attack.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Brash Assault 3","effect":"If unit initiates combat against a foe that can counter and unit's HP ≤ 50%, unit makes a guaranteed follow-up attack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Wrathful Staff 2","effect":"At start of combat, if unit's HP ≥ 50%, calculates damage from staff like other weapons.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"PASSIVE_B"},{"name":"Spd Feint 3","effect":"If a Rally Assist skill is used by unit or targets unit, inflicts Spd-7 on foes in cardinal directions of unit through their next actions.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Spd Feint 2","effect":"If a Rally Assist skill is used by unit or targets unit, inflicts Spd-5 on foes in cardinal directions of unit through their next actions.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Spd Feint 1","effect":"If a Rally Assist skill is used by unit or targets unit, inflicts Spd-3 on foes in cardinal directions of unit through their next actions.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Solar Brace","effect":"Restores HP = 30% of damage dealt when Special triggers. (Stacks with effects of skills like Sol.)","exclusive":true,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"R Tomebreaker 1","effect":"If unit's HP ≥ 90% in combat against a red tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Green Axe","Green Bow","Green Tome","Green Breath"],"type":"PASSIVE_B"},{"name":"R Tomebreaker 2","effect":"If unit's HP ≥ 70% in combat against a red tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Green Axe","Green Bow","Green Tome","Green Breath"],"type":"PASSIVE_B"},{"name":"R Tomebreaker 3","effect":"If unit's HP ≥ 50% in combat against a red tome foe, unit makes a guaranteed follow-up attack and foe cannot make a follow-up attack.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Green Axe","Green Bow","Green Tome","Green Breath"],"type":"PASSIVE_B"},{"name":"Recover Ring","effect":"At start of turn, restores 10 HP. (Skill cannot be inherited.)","exclusive":true,"skillTier":1,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Renewal 1","effect":"At the start of every fourth turn, restores 10 HP.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Renewal 2","effect":"At the start of every third turn, restores 10 HP.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Renewal 3","effect":"At the start of every second turn, restores 10 HP.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Shield Pulse 3","effect":"At start of turn 1, if foe's attack triggers Special, grants Special cooldown count-2. Reduces damage dealt to unit by 5 when Special triggers.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Shield Pulse 2","effect":"At start of turn 1, if foe's attack triggers Special, grants Special cooldown count-1. Reduces damage dealt to unit by 5 when Special triggers.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Shield Pulse 1","effect":"At start of turn 1, if foe's attack triggers Special, grants Special cooldown count-1.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Cavalry","Flying"],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Spd 3","effect":"Inflicts Spd-7 on foe through its next action after combat.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Spd 2","effect":"Inflicts Spd-5 on foe through its next action after combat.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Spd 1","effect":"Inflicts Spd-3 on foe through its next action after combat.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Res 3","effect":"Inflicts Res-7 on foe through its next action after combat.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Res 2","effect":"Inflicts Res-5 on foe through its next action after combat.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Res 1","effect":"Inflicts Res-3 on foe through its next action after combat.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"S Drink","effect":"At the start of turn 1, restores 99 HP and grants Special cooldown count-1.","exclusive":true,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Sacae's Blessing","effect":"If foe uses sword, lance, or axe, foe cannot counterattack. (Skill cannot be inherited.)","exclusive":true,"skillTier":1,"spCost":300,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_B"},{"name":"Seal Def/Res 2","effect":"Inflicts Def/Res-5 on foe through its next action after combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Def/Res 1","effect":"Inflicts Def/Res-3 on foe through its next action after combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Def 3","effect":"Inflicts Def-7 on foe through its next action after combat.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Atk 1","effect":"Inflicts Atk-3 on foe through its next action after combat.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Atk 2","effect":"Inflicts Atk-5 on foe through its next action after combat.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Atk 3","effect":"Inflicts Atk-7 on foe through its next action after combat.","exclusive":false,"skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Atk/Def 1","effect":"Inflicts Atk/Def-3 on foe through its next action after combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Atk/Def 2","effect":"Inflicts Atk/Def-5 on foe through its next action after combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Atk/Spd 1","effect":"Inflicts Atk/Spd-3 on foe through its next action after combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Atk/Spd 2","effect":"Inflicts Atk/Spd-5 on foe through its next action after combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Def 1","effect":"Inflicts Def-3 on foe through its next action after combat.","exclusive":false,"skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Seal Def 2","effect":"Inflicts Def-5 on foe through its next action after combat.","exclusive":false,"skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_B"},{"name":"Wrathful Staff 3","effect":"Calculate damage from staff like other weapons.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"PASSIVE_B"},{"name":"Savage Blow 3","effect":"If unit initiates combat, deals 7 damage to foes within 2 spaces of target after combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Savage Blow 1","effect":"If unit initiates combat, deals 3 damage to foes within 2 spaces of target after combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Res Tactic 3","effect":"At start of turn, grants Res+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Res Tactic 2","effect":"At start of turn, grants Res+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Res Tactic 1","effect":"At start of turn, grants Res+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Res Smoke 3","effect":"Inflicts Res-7 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Res Smoke 2","effect":"Inflicts Res-5 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Res Smoke 1","effect":"Inflicts Res-3 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Res Ploy 3","effect":"At start of turn, inflicts Res-5 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Res Ploy 2","effect":"At start of turn, inflicts Res-4 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Res Ploy 1","effect":"At start of turn, inflicts Res-3 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"R Tome Valor 3","effect":"If unit survives, all red tome allies on team get 2x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"R Tome Valor 2","effect":"If unit survives, all red tome allies on team get 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"R Tome Valor 1","effect":"If unit survives and uses a red tome, unit gets 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"R Tome Exp. 3","effect":"If unit survives combat, all red tome allies on team get 2x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Spd Ploy 1","effect":"At start of turn, inflicts Spd-3 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spd Ploy 2","effect":"At start of turn, inflicts Spd-4 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spd Ploy 3","effect":"At start of turn, inflicts Spd-5 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spd Smoke 1","effect":"Inflicts Spd-3 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Spd Smoke 2","effect":"Inflicts Spd-5 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Spd Smoke 3","effect":"Inflicts Spd-7 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Spd Tactic 1","effect":"At start of turn, grants Spd+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spd Tactic 2","effect":"At start of turn, grants Spd+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spd Tactic 3","effect":"At start of turn, grants Spd+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"R Tome Exp. 2","effect":"If unit survives combat, all red tome allies on team get 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"R Tome Exp. 1","effect":"If unit survives and uses a red tome, unit gets 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Panic Ploy 3","effect":"At start of turn, converts bonuses on foes in cardinal directions with HP < unit's HP into penalties through their next actions.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Panic Ploy 2","effect":"At start of turn, converts bonuses on foes in cardinal directions with HP ≤ unit's HP-3 into penalties through their next actions.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Panic Ploy 1","effect":"At start of turn, converts bonuses on foes in cardinal directions with HP ≤ unit's HP-5 into penalties through their next actions.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Odd Atk Wave 3","effect":"At start of odd-numbered turns, grants Atk+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Odd Atk Wave 2","effect":"At start of odd-numbered turns, grants Atk+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Odd Atk Wave 1","effect":"At start of odd-numbered turns, grants Atk+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Lance Valor 3","effect":"If unit survives, all lance allies on team get 2x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Lance Valor 2","effect":"If unit survives, all lance allies on team get 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Lance Valor 1","effect":"If unit survives and uses a lance, unit gets 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Infantry Rush 3","effect":"Infantry allies within 2 spaces gain: \"If unit's Atk ≥ foe's Atk+1, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)\"","exclusive":false,"skillTier":3,"spCost":0,"movementRestriction":["Armored","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Infantry Rush 2","effect":"","exclusive":false,"skillTier":2,"spCost":0,"movementRestriction":["Armored","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Atk 1","effect":"Grants Atk+2 to adjacent allies during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Atk 2","effect":"Grants Atk+3 to adjacent allies during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Atk 3","effect":"Grants Atk+4 to adjacent allies during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Atk/Def 1","effect":"Grants adjacent allies Atk/Def +2 during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Atk/Def 2","effect":"Grants adjacent allies Atk/Def +3 during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Atk/Spd 1","effect":"Atk/Spd+2 to adjacent allies during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Atk/Spd 2","effect":"Atk/Spd+3 to adjacent allies during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Def 1","effect":"Grants Def+2 to adjacent allies during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Def 2","effect":"Grants Def+3 to adjacent allies during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Def 3","effect":"Grants Def+4 to adjacent allies during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Def/Res 1","effect":"Grants Def/Res +2 to adjacent allies during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Def/Res 2","effect":"Grants Def/Res +3 to adjacent allies during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Res 1","effect":"Grants Res+2 to adjacent allies during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Res 2","effect":"Grants Res+3 to adjacent allies during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Res 3","effect":"Grants Res+4 to adjacent allies during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Spd 1","effect":"Grants Spd+2 to adjacent allies during combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Spd 2","effect":"Grants Spd+3 to adjacent allies during combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Spd 3","effect":"Grants Spd+4 to adjacent allies during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Spd/Def 1","effect":"Grants Spd/Def+2 to adjacent allies during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Spur Spd/Def 2","effect":"Grants Spd/Def+3 to adjacent allies during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Infantry Rush 1","effect":"","exclusive":false,"skillTier":1,"spCost":0,"movementRestriction":["Armored","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Infantry Pulse 3","effect":"At the start of turn 1, grants Special cooldown count-1 to all infantry allies on team with HP < unit's HP. (Stacks with similar skills.)","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Armored","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Infantry Pulse 2","effect":"At the start of turn 1, grants Special cooldown count-1 to all infantry allies on team with HP ≤ unit's HP-3. (Stacks with similar skills.)","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Armored","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Infantry Pulse 1","effect":"At the start of turn 1, grants Special cooldown count-1 to all infantry allies on team with HP ≤ unit's HP-5. (Stacks with similar skills.)","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Armored","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Hone Spd 3","effect":"At start of turn, grants Spd+4 to adjacent allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Hone Spd 2","effect":"At start of turn, grants Spd+3 to adjacent allies for 1 turn.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Hone Spd 1","effect":"At start of turn, grants Spd+2 to adjacent allies for 1 turn.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Hone Fliers","effect":"At start of turn, grants Atk/Spd+6 to adjacent flying allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Hone Dragons","effect":"At start of turn, grants Atk/Spd+6 to adjacent dragon allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Blue Lance","Blue Bow","Blue Tome","Green Axe","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_C"},{"name":"Hone Cavalry","effect":"At start of turn, grants Atk/Spd+6 to adjacent cavalry allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Armored","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Hone Atk 3","effect":"At start of turn, grants Atk+4 to adjacent allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Hone Atk 2","effect":"At start of turn, grants Atk+3 to adjacent allies for 1 turn.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Hone Atk 1","effect":"At start of turn, grants Atk+2 to adjacent allies for 1 turn.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Hone Armor","effect":"At start of turn, grants Atk/Spd+6 to adjacent armored allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Guidance 3","effect":"Infantry and armored allies within 2 spaces can move to a space adjacent to unit.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Guidance 2","effect":"If unit's HP ≥ 50% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Guidance 1","effect":"If unit's HP = 100%, infantry and armored allies within 2 spaces can move to a space adjacent to unit.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Goad Fliers","effect":"Grants Atk/Spd+4 to flying allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Goad Dragons","effect":"Grants Atk/Spd+4 to dragon allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Blue Lance","Blue Bow","Blue Tome","Green Axe","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_C"},{"name":"Goad Cavalry","effect":"Grants Atk/Spd+4 to cavalry allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Armored","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Goad Armor","effect":"Grants Atk/Spd+4 to armored allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"G Tome Valor 3","effect":"If unit survives, all green tome allies on team get 2x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"G Tome Valor 2","effect":"If unit survives, all green tome allies on team get 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"G Tome Valor 1","effect":"If unit survives and uses a green tome, unit gets 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"G Tome Exp. 3","effect":"If unit survives, all green tome allies on team get 2x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"G Tome Exp. 2","effect":"If unit survives, all green tome allies on team get 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"G Tome Exp. 1","effect":"If unit survives and uses a green tome, unit gets 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Fortify Res 3","effect":"At start of turn, grants Res+4 to adjacent allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Fortify Res 2","effect":"At start of turn, grants Res+3 to adjacent allies for 1 turn.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Fortify Res 1","effect":"At start of turn, grants Res+2 to adjacent allies for 1 turn.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Savage Blow 2","effect":"If unit initiates combat, deals 5 damage to foes within 2 spaces of target after combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Fortify Dragons","effect":"At start of turn, grants Def/Res+6 to adjacent dragon allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Blue Lance","Blue Bow","Blue Tome","Green Axe","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_C"},{"name":"Fortify Def 3","effect":"At start of turn, grants Def+4 to adjacent allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Fortify Def 2","effect":"At start of turn, grants Def+3 to adjacent allies for 1 turn.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Fortify Def 1","effect":"At start of turn, grants Def+2 to adjacent allies for 1 turn.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Fortify Cavalry","effect":"At start of turn, grants Def/Res+6 to adjacent cavalry allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Armored","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Fortify Armor","effect":"At start of turn, grants Def/Res+6 to adjacent armored allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Flier Guidance 3","effect":"Flying allies within 2 spaces can move to a space adjacent to unit.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Flier Guidance 2","effect":"If unit's HP ≥ 50% HP, flying allies within 2 spaces can move to a space adjacent to unit.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Flier Guidance 1","effect":"If unit's HP = 100%, flying allies within 2 spaces can move to a space adjacent to unit.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Even Spd Wave 3","effect":"At start of even-numbered turns, grants Spd+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Even Spd Wave 2","effect":"At start of even-numbered turns, grants Spd+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Even Spd Wave 1","effect":"At start of even-numbered turns, grants Spd+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Drive Spd 2","effect":"Grants Spd+3 to allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Drive Spd 1","effect":"Grants Spd+2 to allies within 2 spaces during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Drive Res 2","effect":"Grants Res+3 to allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Drive Res 1","effect":"Grants Res+2 to allies within 2 spaces during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Drive Def 2","effect":"Grants Def+3 to allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Drive Def 1","effect":"Grants Def+2 to allies within 2 spaces during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Drive Atk 2","effect":"Grants Atk+3 to allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Sword Exp. 1","effect":"If unit survives, unit gets 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Sword Exp. 2","effect":"If unit survives, all sword allies on team get 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Sword Exp. 3","effect":"If unit survives, all sword allies on team get 2x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Sword Valor 1","effect":"If unit survives and uses a sword, unit gets 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Sword Valor 2","effect":"If unit survives, all sword allies on team get 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Sword Valor 3","effect":"If unit survives, all sword allies on team get 2x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Drive Atk 1","effect":"Grants Atk+2 to allies within 2 spaces during combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Def Tactic 3","effect":"At start of turn, grants Def+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Def Tactic 2","effect":"At start of turn, grants Def+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Atk 1","effect":"At start of turn, inflicts Atk-3 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Atk 2","effect":"At start of turn, inflicts Atk-4 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Atk 3","effect":"At start of turn, inflicts Atk-5 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Def 1","effect":"At start of turn, inflicts Def-3 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Def 2","effect":"At start of turn, inflicts Def-4 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Def 3","effect":"At start of turn, inflicts Def-5 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Res 1","effect":"At start of turn, inflicts Res-3 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Res 2","effect":"At start of turn, inflicts Res-4 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Res 3","effect":"At start of turn, inflicts Res-5 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Spd 1","effect":"At start of turn, inflicts Spd-3 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Spd 2","effect":"At start of turn, inflicts Spd-4 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Threaten Spd 3","effect":"At start of turn, inflicts Spd-5 on foes within 2 spaces through their next actions.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Def Tactic 1","effect":"At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Def Smoke 3","effect":"Inflicts Def-7 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Def Smoke 2","effect":"Inflicts Def-5 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Def Smoke 1","effect":"Inflicts Def-3 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Def Ploy 3","effect":"At start of turn, inflicts Def-5 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Def Ploy 2","effect":"At start of turn, inflicts Def-4 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Def Ploy 1","effect":"At start of turn, inflicts Def-3 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Dagger Valor 3","effect":"If unit survives, all dagger allies on team get 2x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Dagger Valor 2","effect":"If unit survives, all dagger allies on team get 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Dagger Valor 1","effect":"If unit survives and uses a dagger, unit gets 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Breath of Life 3","effect":"If unit initiates combat, restores 7 HP to adjacent allies after combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Breath of Life 2","effect":"If unit initiates combat, restores 5 HP to adjacent allies after combat.","exclusive":false,"skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Ward Armor","effect":"Grants Def/Res+4 to armored allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Ward Cavalry","effect":"Grants Def/Res+4 to cavalry allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Armored","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Ward Dragons","effect":"Grants Def/Res+4 to dragon allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Blue Lance","Blue Bow","Blue Tome","Green Axe","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"PASSIVE_C"},{"name":"Ward Fliers","effect":"Grants Def/Res+4 to flying allies within 2 spaces during combat.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Cavalry","Armored"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Breath of Life 1","effect":"If unit initiates combat, restores 3 HP to adjacent allies after combat.","exclusive":false,"skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Bow Valor 3","effect":"If unit survives, all bow allies on team get 2x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Tome","Red Breath","Blue Lance","Blue Tome","Blue Breath","Green Axe","Green Tome","Green Breath","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Bow Valor 2","effect":"If unit survives, all bow allies on team get 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Tome","Red Breath","Blue Lance","Blue Tome","Blue Breath","Green Axe","Green Tome","Green Breath","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Bow Valor 1","effect":"If unit survives and uses a bow, unit gets 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Tome","Red Breath","Blue Lance","Blue Tome","Blue Breath","Green Axe","Green Tome","Green Breath","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Bow Exp. 3","effect":"If unit survives, all bow allies on team get 2x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Tome","Red Breath","Blue Lance","Blue Tome","Blue Breath","Green Axe","Green Tome","Green Breath","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Bow Exp. 2","effect":"If unit survives, all bow allies on team get 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Tome","Red Breath","Blue Lance","Blue Tome","Blue Breath","Green Axe","Green Tome","Green Breath","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Bow Exp. 1","effect":"If unit survives and uses a bow, unit gets 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Tome","Red Breath","Blue Lance","Blue Tome","Blue Breath","Green Axe","Green Tome","Green Breath","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"B Tome Valor 3","effect":"If unit survives, all blue tome allies on team get 2x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"B Tome Valor 2","effect":"If unit survives, all blue tome allies on team get 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"B Tome Valor 1","effect":"If unit survives and uses a blue tome, unit gets 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"B Tome Exp. 3","effect":"If unit survives, all blue tome allies on team get 2x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"B Tome Exp. 2","effect":"If unit survives, all blue tome allies on team get 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"B Tome Exp. 1","effect":"If unit survives and uses a blue tome, unit gets 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Axe Valor 3","effect":"If unit survives, all axe allies on team get 2x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Axe Valor 2","effect":"If unit survives, all axe allies on team get 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Axe Valor 1","effect":"If unit survives and uses an axe, unit gets 1.5x SP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Axe Exp. 3","effect":"If unit survives, all axe allies on team get 2x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Axe Exp. 2","effect":"If unit survives, all axe allies on team get 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Axe Exp. 1","effect":"If unit survives and uses an axe, unit gets 1.5x EXP. (Only highest value applied. Does not stack.)","exclusive":false,"skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Staff","Colorless Breath"],"type":"PASSIVE_C"},{"name":"Atk Tactic 3","effect":"At start of turn, grants Atk+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Atk Tactic 2","effect":"At start of turn, grants Atk+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Atk Tactic 1","effect":"At start of turn, grants Atk+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Atk Smoke 3","effect":"Inflicts Atk-7 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Atk Smoke 2","effect":"Inflicts Atk-5 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Atk Smoke 1","effect":"Inflicts Atk-3 on foes within 2 spaces of target through their next actions after combat.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"PASSIVE_C"},{"name":"Atk Ploy 3","effect":"At start of turn, inflicts Atk-5 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Atk Ploy 2","effect":"At start of turn, inflicts Atk-4 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Atk Ploy 1","effect":"At start of turn, inflicts Atk-3 on foes in cardinal directions with Res < unit's Res through their next actions.","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Armor March 3","effect":"At start of turn, if unit is adjacent to an armored ally, unit and adjacent armored allies can move 1 extra space. (That turn only. Does not stack.)","exclusive":false,"skillTier":3,"spCost":240,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Armor March 2","effect":"At start of turn, if unit's HP ≥ 50% HP and unit is adjacent to an armored ally, unit and adjacent armored allies can move 1 extra space. (That turn only. Does not stack.)","exclusive":false,"skillTier":2,"spCost":120,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Armor March 1","effect":"At start of turn, if unit's HP = 100% and unit is adjacent to an armored ally, unit and adjacent armored allies can move 1 extra space. (That turn only. Does not stack.)","exclusive":false,"skillTier":1,"spCost":60,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Fortify Fliers","effect":"At start of turn, grants Def/Res+6 to adjacent flying allies for 1 turn.","exclusive":false,"skillTier":3,"spCost":200,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"PASSIVE_C"},{"name":"Armored Boots","effect":"At start of turn, if unit's HP = 100%, unit can move 1 extra space. (That turn only. Does not stack.)","skillTier":1,"spCost":100,"movementRestriction":["Infantry","Cavalry","Flying"],"weaponRestriction":[""],"type":"SEAL"},{"name":"Atk Ploy 1","effect":"At start of turn, inflicts Atk-3 on foes in cardinal directions with Res < unit's Res through their next actions.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Atk Ploy 2","effect":"At start of turn, inflicts Atk-4 on foes in cardinal directions with Res < unit's Res through their next actions.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Atk Ploy 3","effect":"At start of turn, inflicts Atk-5 on foes in cardinal directions with Res < unit's Res through their next actions.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Atk Smoke 1","effect":"Inflicts Atk-3 on foes within 2 spaces of target through their next actions after combat.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Atk Smoke 2","effect":"Inflicts Atk-5 on foes within 2 spaces of target through their next actions after combat.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Atk Smoke 3","effect":"Inflicts Atk-7 on foes within 2 spaces of target through their next actions after combat.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Atk/Def 1","effect":"Grants Atk/Def+1.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Atk/Def 2","effect":"Grants Atk/Def+2.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Attack +1","effect":"Grants Atk+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Attack +2","effect":"Grants Atk+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Attack +3","effect":"Grants Atk+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Brash Assault 1","effect":"If unit initiates combat against a foe that can counter and unit's HP ≤ 30%, unit makes a guaranteed follow-up attack.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Brash Assault 2","effect":"If unit initiates combat against a foe that can counter and unit's HP ≤ 40%, unit makes a guaranteed follow-up attack.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Brash Assault 3","effect":"If unit initiates combat against a foe that can counter and unit's HP ≤ 50%, unit makes a guaranteed follow-up attack.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Breath of Life 1","effect":"If unit initiates combat, restores 3 HP to adjacent allies after combat.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Breath of Life 2","effect":"If unit initiates combat, restores 5 HP to adjacent allies after combat.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Breath of Life 3","effect":"If unit initiates combat, restores 7 HP to adjacent allies after combat.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Close Def 1","effect":"If foe initiates combat and uses sword, lance, axe, or dragonstone, grants Def/Res+2 during combat.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Close Def 2","effect":"If foe initiates combat and uses sword, lance, axe, or dragonstone, grants Def/Res+4 during combat.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Close Def 3","effect":"If foe initiates combat and uses sword, lance, axe, or dragonstone, grants Def/Res+6 during combat.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Def Ploy 1","effect":"At start of turn, inflicts Def-3 on foes in cardinal directions with Res < unit's Res through their next actions.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Def Ploy 2","effect":"At start of turn, inflicts Def-4 on foes in cardinal directions with Res < unit's Res through their next actions.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Def Ploy 3","effect":"At start of turn, inflicts Def-5 on foes in cardinal directions with Res < unit's Res through their next actions.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Def Tactic 1","effect":"At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Def Tactic 2","effect":"At start of turn, grants Def+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Def Tactic 3","effect":"At start of turn, grants Def+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Defense +1","effect":"Grants Def+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Defense +2","effect":"Grants Def+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Defense +3","effect":"Grants Def+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Deflect Magic 1","effect":"If unit receives consecutive attacks and foe uses magic, reduces damage from foe's second attack onward by 30%.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Deflect Magic 2","effect":"If unit receives consecutive attacks and foe uses magic, reduces damage from foe's second attack onward by 50%.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Deflect Magic 3","effect":"If unit receives consecutive attacks and foe uses magic, reduces damage from foe's second attack onward by 80%.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Deflect Melee 1","effect":"If unit receives consecutive attacks and foe uses a sword, lance, or axe, reduces damage from foe's second attack onward by 30%.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"SEAL"},{"name":"Deflect Melee 2","effect":"If unit receives consecutive attacks and foe uses a sword, lance, or axe, reduces damage from foe's second attack onward by 50%.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"SEAL"},{"name":"Deflect Melee 3","effect":"If unit receives consecutive attacks and foe uses a sword, lance, or axe, reduces damage from foe's second attack onward by 80%.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Red Bow","Red Tome","Blue Bow","Blue Tome","Green Bow","Green Tome","Colorless Bow","Colorless Dagger","Colorless Staff"],"type":"SEAL"},{"name":"Deflect Missile 1","effect":"If unit receives consecutive attacks and foe uses bow or dagger, reduces damage from foe's second attack onward by 30%.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Deflect Missile 2","effect":"If unit receives consecutive attacks and foe uses bow or dagger, reduces damage from foe's second attack onward by 50%.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Deflect Missile 3","effect":"If unit receives consecutive attacks and foe uses bow or dagger, reduces damage from foe's second attack onward by 80%.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Distant Def 1","effect":"If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+2 during combat.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Distant Def 2","effect":"If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+4 during combat.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Distant Def 3","effect":"If foe initiates combat and uses bow, dagger, magic, or staff, grants Def/Res+6 during combat.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Drive Atk 1","effect":"Grants Atk+2 to allies within 2 spaces during combat.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Drive Atk 2","effect":"Grants Atk+3 to allies within 2 spaces during combat.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Drive Def 1","effect":"Grants Def+2 to allies within 2 spaces during combat.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Drive Def 2","effect":"Grants Def+3 to allies within 2 spaces during combat.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Earth Dance 1","effect":"If Sing or Dance is used, grants Def+3 to target.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Earth Dance 2","effect":"If Sing or Dance is used, grants Def+4 to target.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Earth Dance 3","effect":"If Sing or Dance is used, grants Def+5 to target.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Embla's Ward","effect":"Reduces damage dealt to unit to 0.","skillTier":1,"spCost":0,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Flier Formation 1","effect":"If unit HP = 100%, unit can move to a space adjacent to a flying ally within 2 spaces.","skillTier":1,"spCost":60,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"SEAL"},{"name":"Flier Formation 2","effect":"If unit HP ≥ 50%, unit can move to a space adjacent to a flying ally within 2 spaces.","skillTier":2,"spCost":120,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"SEAL"},{"name":"Flier Formation 3","effect":"Unit can move to a space adjacent to a flying ally within 2 spaces.","skillTier":3,"spCost":240,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortify Def 1","effect":"At start of turn, grants Def+2 to adjacent allies for 1 turn.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortify Def 2","effect":"At start of turn, grants Def+3 to adjacent allies for 1 turn.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortify Def 3","effect":"At start of turn, grants Def+4 to adjacent allies for 1 turn.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortify Res 1","effect":"At start of turn, grants Res+2 to adjacent allies for 1 turn.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortify Res 2","effect":"At start of turn, grants Res+3 to adjacent allies for 1 turn.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortify Res 3","effect":"At start of turn, grants Res+4 to adjacent allies for 1 turn.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortress Def 1","effect":"Grants Def+3. Inflicts Atk-3.","skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortress Def 2","effect":"Grants Def+4. Inflicts Atk-3.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortress Def 3","effect":"Grants Def+5. Inflicts Atk-3.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortress Res 1","effect":"Grants Res+3. Inflicts Atk-3.","skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortress Res 2","effect":"Grants Res+4. Inflicts Atk-3.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Fortress Res 3","effect":"Grants Res+5. Inflicts Atk-3.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Guidance 1","effect":"If unit's HP = 100%, infantry and armored allies within 2 spaces can move to a space adjacent to unit.","skillTier":1,"spCost":60,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"SEAL"},{"name":"Guidance 2","effect":"If unit's HP ≥ 50% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit.","skillTier":2,"spCost":120,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"SEAL"},{"name":"Guidance 3","effect":"Infantry and armored allies within 2 spaces can move to a space adjacent to unit.","skillTier":3,"spCost":240,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"SEAL"},{"name":"Hardy Bearing 1","effect":"Disables unit's skills that change attack priority. At start of combat, if unit's HP = 100%, disables foe's skills that change attack priority.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Hardy Bearing 2","effect":"Disables unit's skills that change attack priority. At start of combat, if unit's HP ≥ 50%, disables foe's skills that change attack priority.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Hardy Bearing 3","effect":"Disables unit's and foe's skills that change attack priority.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Heavy Blade 1","effect":"If unit's Atk ≥ foe's Atk+5, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Heavy Blade 2","effect":"If unit's Atk ≥ foe's Atk+3, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Heavy Blade 3","effect":"If unit's Atk > foe's Atk, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Hone Atk 1","effect":"At start of turn, grants Atk+2 to adjacent allies for 1 turn.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Hone Atk 2","effect":"At start of turn, grants Atk+3 to adjacent allies for 1 turn.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Hone Atk 3","effect":"At start of turn, grants Atk+4 to adjacent allies for 1 turn.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Hone Spd 1","effect":"At start of turn, grants Spd+2 to adjacent allies for 1 turn.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Hone Spd 2","effect":"At start of turn, grants Spd+3 to adjacent allies for 1 turn.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Hone Spd 3","effect":"At start of turn, grants Spd+4 to adjacent allies for 1 turn.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"HP +3","effect":"Grants HP+3.","skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"HP +4","effect":"Grants HP+4.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"HP +5","effect":"Grants HP+5.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Atk 1","effect":"Grants Atk+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Atk 2","effect":"Grants Atk+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Atk 3","effect":"Grants Atk+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Def 1","effect":"Grants Def+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Def 2","effect":"Grants Def+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Def 3","effect":"Grants Def+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal HP 1","effect":"Grants HP+3.","skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal HP 2","effect":"Grants HP+4.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal HP 3","effect":"Grants HP+5.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Res 1","effect":"Grants Res+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Res 2","effect":"Grants Res+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Res 3","effect":"Grants Res+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Spd 1","effect":"Grants Spd+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Spd 2","effect":"Grants Spd+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Initiate Seal Spd 3","effect":"Grants Spd+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Iote's Shield","effect":"Neutralizes \"effective against flying\" bonuses.","skillTier":1,"spCost":200,"movementRestriction":["Infantry","Armored","Cavalry"],"weaponRestriction":[""],"type":"SEAL"},{"name":"Live to Serve 1","effect":"When healing an ally with a staff, restores HP to unit = 50% of HP restored to target.","skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"SEAL"},{"name":"Live to Serve 2","effect":"When healing an ally with a staff, restores HP to unit = 75% of HP restored to target.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"SEAL"},{"name":"Live to Serve 3","effect":"When healing an ally with a staff, restores HP to unit = HP restored to target.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":["Red Sword","Red Bow","Red Tome","Red Breath","Blue Lance","Blue Bow","Blue Tome","Blue Breath","Green Axe","Green Bow","Green Tome","Green Breath","Colorless Bow","Colorless Dagger","Colorless Breath"],"type":"SEAL"},{"name":"Múspellflame","effect":"Reduces damage dealt to unit to 0.","skillTier":1,"spCost":0,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Obstruct 1","effect":"If unit's HP ≥ 90%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.)","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Obstruct 2","effect":"If unit's HP ≥ 70%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.)","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Obstruct 3","effect":"If unit's HP ≥ 50%, foes cannot move through spaces adjacent to unit. (Does not affect foes with Pass skills.)","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Panic Ploy 1","effect":"At start of turn, converts bonuses on foes in cardinal directions with HP ≤ unit's HP-5 into penalties through their next actions.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Panic Ploy 2","effect":"At start of turn, converts bonuses on foes in cardinal directions with HP ≤ unit's HP-3 into penalties through their next actions.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Panic Ploy 3","effect":"At start of turn, converts bonuses on foes in cardinal directions with HP < unit's HP into penalties through their next actions.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Phantom Spd 1","effect":"If a skill compares unit's Spd to a foe's or ally's Spd, treats unit's Spd as if granted +5.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Phantom Spd 2","effect":"If a skill compares unit's Spd to a foe's or ally's Spd, treats unit's Spd as if granted +8.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Phantom Spd 3","effect":"If a skill compares unit's Spd to a foe's or ally's Spd, treats unit's Spd as if granted +10.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Poison Strike 1","effect":"If unit initiates combat, deals 4 damage to foe after combat.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Poison Strike 2","effect":"If unit initiates combat, deals 7 damage to foe after combat.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Poison Strike 3","effect":"If unit initiates combat, deals 10 damage to foe after combat.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Quick Riposte 1","effect":"If unit's HP ≥ 90% and foe initiates combat, unit makes a guaranteed follow-up attack.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Quick Riposte 2","effect":"If unit's HP ≥ 80% and foe initiates combat, unit makes a guaranteed follow-up attack.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Quick Riposte 3","effect":"If unit's HP ≥ 70% and foe initiates combat, unit makes a guaranteed follow-up attack.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Quickened Pulse","effect":"At the start of turn 1, grants Special cooldown count-1.","skillTier":1,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Res Ploy 1","effect":"At start of turn, inflicts Res-3 on foes in cardinal directions with Res < unit's Res through their next actions.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Res Ploy 2","effect":"At start of turn, inflicts Res-4 on foes in cardinal directions with Res < unit's Res through their next actions.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Res Ploy 3","effect":"At start of turn, inflicts Res-5 on foes in cardinal directions with Res < unit's Res through their next actions.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Res Tactic 1","effect":"At start of turn, grants Res+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Res Tactic 2","effect":"At start of turn, grants Res+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Res Tactic 3","effect":"At start of turn, grants Res+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Resistance +1","effect":"Grants Res+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Resistance +2","effect":"Grants Res+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Resistance +3","effect":"Grants Res+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Savage Blow 1","effect":"If unit initiates combat, deals 3 damage to foes within 2 spaces of target after combat.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Savage Blow 2","effect":"If unit initiates combat, deals 5 damage to foes within 2 spaces of target after combat.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Savage Blow 3","effect":"If unit initiates combat, deals 7 damage to foes within 2 spaces of target after combat.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Seal Atk 1","effect":"Inflicts Atk-3 on foe through its next action after combat.","skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Seal Atk 2","effect":"Inflicts Atk-5 on foe through its next action after combat.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Seal Atk 3","effect":"Inflicts Atk-7 on foe through its next action after combat.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Seal Spd 1","effect":"Inflicts Spd-3 on foe through its next action after combat.","skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Seal Spd 2","effect":"Inflicts Spd-5 on foe through its next action after combat.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Seal Spd 3","effect":"Inflicts Spd-7 on foe through its next action after combat.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Spd Smoke 1","effect":"Inflicts Spd-3 on foes within 2 spaces of target through their next actions after combat.","skillTier":1,"spCost":60,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Spd Smoke 2","effect":"Inflicts Spd-5 on foes within 2 spaces of target through their next actions after combat.","skillTier":2,"spCost":120,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Spd Smoke 3","effect":"Inflicts Spd-7 on foes within 2 spaces of target through their next actions after combat.","skillTier":3,"spCost":240,"movementRestriction":[""],"weaponRestriction":["Colorless Staff"],"type":"SEAL"},{"name":"Speed +1","effect":"Grants Spd+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Speed +2","effect":"Grants Spd+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Speed +3","effect":"Grants Spd+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Atk 1","effect":"Grants Atk+2 to adjacent allies during combat.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Atk 2","effect":"Grants Atk+3 to adjacent allies during combat.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Atk 3","effect":"Grants Atk+4 to adjacent allies during combat.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Def 1","effect":"Grants Def+2 to adjacent allies during combat.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Def 2","effect":"Grants Def+3 to adjacent allies during combat.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Def 3","effect":"Grants Def+4 to adjacent allies during combat.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Res 1","effect":"Grants Res+2 to adjacent allies during combat.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Res 2","effect":"Grants Res+3 to adjacent allies during combat.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Res 3","effect":"Grants Res+4 to adjacent allies during combat.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Spd 1","effect":"Grants Spd+2 to adjacent allies during combat.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Spd 2","effect":"Grants Spd+3 to adjacent allies during combat.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Spur Spd 3","effect":"Grants Spd+4 to adjacent allies during combat.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace A 1","effect":"Grants HP+3.","skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace A 2","effect":"Grants HP+4.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace A 3","effect":"Grants HP+5.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace B 1","effect":"Grants Def+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace B 2","effect":"Grants Def+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace B 3","effect":"Grants Def+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace C 1","effect":"Grants Res+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace C 2","effect":"Grants Res+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace C 3","effect":"Grants Res+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace D 1","effect":"Grants Spd+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace D 2","effect":"Grants Spd+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace D 3","effect":"Grants Spd+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace E 1","effect":"Grants Atk+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace E 2","effect":"Grants Atk+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace E 3","effect":"Grants Atk+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace F 1","effect":"Grants HP+3.","skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace F 2","effect":"Grants HP+4.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace F 3","effect":"Grants HP+5.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace G 1","effect":"Grants Def+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace G 2","effect":"Grants Def+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace G 3","effect":"Grants Def+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace H 1","effect":"Grants Res+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace H 2","effect":"Grants Res+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace H 3","effect":"Grants Res+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace I 1","effect":"Grants Spd+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace I 2","effect":"Grants Spd+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace I 3","effect":"Grants Spd+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace J 1","effect":"Grants Atk+1.","skillTier":1,"spCost":30,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace J 2","effect":"Grants Atk+2.","skillTier":2,"spCost":60,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace J 3","effect":"Grants Atk+3.","skillTier":3,"spCost":120,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace K 1","effect":"Grants HP+3.","skillTier":1,"spCost":40,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace K 2","effect":"Grants HP+4.","skillTier":2,"spCost":80,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Squad Ace K 3","effect":"Grants HP+5.","skillTier":3,"spCost":160,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Threaten Atk 1","effect":"At start of turn, inflicts Atk-3 on foes within 2 spaces through their next actions.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Threaten Atk 2","effect":"At start of turn, inflicts Atk-4 on foes within 2 spaces through their next actions.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Threaten Atk 3","effect":"At start of turn, inflicts Atk-5 on foes within 2 spaces through their next actions.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Threaten Spd 1","effect":"At start of turn, inflicts Spd-3 on foes within 2 spaces through their next actions.","skillTier":1,"spCost":50,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Threaten Spd 2","effect":"At start of turn, inflicts Spd-4 on foes within 2 spaces through their next actions.","skillTier":2,"spCost":100,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"},{"name":"Threaten Spd 3","effect":"At start of turn, inflicts Spd-5 on foes within 2 spaces through their next actions.","skillTier":3,"spCost":200,"movementRestriction":[""],"weaponRestriction":[""],"type":"SEAL"}];var stats = {heroes:heroes,skills:skills};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isPlaceholder = function _isPlaceholder(a) {
       return a != null && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && a['@@functional/placeholder'] === true;
};

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
var _curry1 = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
var _curry2 = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
};

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

var _isTransformer = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};

/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
var _dispatchable = function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
};

var _filter = function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
};

var _isObject = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};

var _xwrap = function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) {
    return new XWrap(fn);
  };
}();

var _arity = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};

/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

var _isString = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Tests whether or not an object is similar to an array.
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @deprecated since v0.23.0
 * @example
 *
 *      R.isArrayLike([]); //=> true
 *      R.isArrayLike(true); //=> false
 *      R.isArrayLike({}); //=> false
 *      R.isArrayLike({length: 10}); //=> false
 *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
var isArrayLike = _curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if ((typeof x === 'undefined' ? 'undefined' : _typeof$1(x)) !== 'object') {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});

var _reduce = function () {
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj) {
    return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list);
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    throw new TypeError('reduce: list must be array or iterable');
  };
}();

var _xfBase = {
  init: function init() {
    return this.xf['@@transducer/init']();
  },
  result: function result(_result) {
    return this.xf['@@transducer/result'](_result);
  }
};

var _xfilter = function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return _curry2(function _xfilter(f, xf) {
    return new XFilter(f, xf);
  });
}();

var _has = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

var _isArguments = function () {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
}();

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var keys = function () {
  // cover IE < 9 keys issues
  var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = function () {
    'use strict';

    return arguments.propertyIsEnumerable('length');
  }();

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' && !hasArgsEnumBug ? _curry1(function keys(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) : _curry1(function keys(obj) {
    if (Object(obj) !== obj) {
      return [];
    }
    var prop, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
    for (prop in obj) {
      if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
        ks[ks.length] = prop;
      }
    }
    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;
      while (nIdx >= 0) {
        prop = nonEnumerableProps[nIdx];
        if (_has(prop, obj) && !contains(ks, prop)) {
          ks[ks.length] = prop;
        }
        nIdx -= 1;
      }
    }
    return ks;
  });
}();

/**
 * Takes a predicate and a "filterable", and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter$1 = _curry2(_dispatchable(['filter'], _xfilter, function (pred, filterable) {
  return _isObject(filterable) ? _reduce(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, keys(filterable)) :
  // else
  _filter(pred, filterable);
}));

/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
var prop$1 = _curry2(function prop(p, obj) {
  return obj[p];
});

var _map = function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
};

var _xmap = function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return _curry2(function _xmap(f, xf) {
    return new XMap(f, xf);
  });
}();

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
var _curryN = function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
};

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
var curryN = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map$1 = _curry2(_dispatchable(['map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));

/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
var _makeFlat = function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
};

/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
var flatten = _curry1(_makeFlat(true));

var _pipe = function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
};

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
var _curry3 = function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
};

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * `R.reduced` to shortcut the iteration.
 *
 * The arguments' order of `reduceRight`'s iterator function is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = _curry3(_reduce);

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
var _checkForMethod = function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
};

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
var slice = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = _curry1(_checkForMethod('tail', slice(1, Infinity)));

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
var pipe = function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
};

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
var reverse = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
var compose$1 = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
};

// Times were entered in PDT (UTC - 7)
// These times were also approximated as the stats were added retroactively.
var startTime = new Date('2017-02-10T00:00:00-07:00');

var endTime = new Date('2017-02-13T23:59:00-07:00');

var unitList = [{
  shortName: 'Narcian',
  name: 'Narcian (Narcian GHB)',
  moveType: 'Flying',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Emerald Axe+',
    rarity: '-'
  }, {
    name: 'Vengeance',
    rarity: '-'
  }, {
    name: 'Lancebreaker 3',
    rarity: '-'
  }, {
    name: 'Savage Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Narcian.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Narcian.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Narcian.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [48],
        atk: [25],
        spd: [24],
        def: [28],
        res: [22]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Bow Fighter (Narcian GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Bow',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Brave Bow',
    rarity: '-'
  }, {
    name: 'Reprisal',
    rarity: '-'
  }, {
    name: 'Death Blow 2',
    rarity: '-'
  }, {
    name: 'Savage Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Bow Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Bow Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Bow Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [41],
        atk: [28],
        spd: [25],
        def: [24],
        res: [13]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Blue Cavalier (Narcian GHB)',
  moveType: 'Cavalry',
  weaponType: 'Blue Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Thoron',
    rarity: '-'
  }, {
    name: 'Ardent Sacrifice',
    rarity: '-'
  }, {
    name: 'Triangle Adept 2',
    rarity: '-'
  }, {
    name: 'Swordbreaker 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Blue Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Blue Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Blue Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [31],
        atk: [31],
        spd: [21],
        def: [14],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Green Cavalier (Narcian GHB)',
  moveType: 'Cavalry',
  weaponType: 'Green Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Gronnraven',
    rarity: '-'
  }, {
    name: 'Reprisal',
    rarity: '-'
  }, {
    name: 'Death Blow 2',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Green Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Green Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Green Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [31],
        atk: [31],
        spd: [21],
        def: [14],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Sword Fighter (Narcian GHB)',
  moveType: 'Infantry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Sword',
    rarity: '-'
  }, {
    name: 'Escutcheon',
    rarity: '-'
  }, {
    name: 'Axebreaker 3',
    rarity: '-'
  }, {
    name: 'Threaten Res 2',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sword Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sword Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sword Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [42],
        atk: [27],
        spd: [26],
        def: [26],
        res: [18]
      }
    }
  }
}];

var event0 = { unitList: unitList, startTime: startTime, endTime: endTime };

// Times were entered in PDT (UTC - 7)
var startTime$1 = new Date('2017-03-09T00:00:00-07:00');

var endTime$1 = new Date('2017-03-13T23:59:00-07:00');

var unitList$1 = [{
  shortName: 'Ursula',
  name: 'Ursula (Ursula GHB)',
  moveType: 'Cavalry',
  weaponType: 'Blue Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Blárwolf+',
    rarity: '-'
  }, {
    name: 'Growing Thunder',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Threaten Res 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ursula.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ursula.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ursula.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [50],
        atk: [29],
        spd: [32],
        def: [19],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Knight',
  name: 'Axe Knight (Ursula GHB)',
  moveType: 'Armored',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Axe+',
    rarity: '-'
  }, {
    name: 'Aegis',
    rarity: '-'
  }, {
    name: 'Wings of Mercy 3',
    rarity: '-'
  }, {
    name: 'Threaten Def 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Axe Knight.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Axe Knight.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Axe Knight.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [67],
        atk: [39],
        spd: [16],
        def: [41],
        res: [19]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Sword Cavalier (Ursula GHB)',
  moveType: 'Cavalry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Sword+',
    rarity: '-'
  }, {
    name: 'Draw Back',
    rarity: '-'
  }, {
    name: 'Aegis',
    rarity: '-'
  }, {
    name: 'Obstruct 3',
    rarity: '-'
  }, {
    name: 'Threaten Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sword Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sword Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sword Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [49],
        atk: [35],
        spd: [25],
        def: [26],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Thief 1',
  name: 'Thief 1 (Ursula GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Dagger',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Poison Dagger+',
    rarity: '-'
  }, {
    name: 'Reciprocal Aid',
    rarity: '-'
  }, {
    name: 'Seal Atk 3',
    rarity: '-'
  }, {
    name: 'Savage Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Thief.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Thief.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Thief.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [44],
        atk: [28],
        spd: [39],
        def: [14],
        res: [32]
      }
    }
  }
}, {
  shortName: 'Thief 2',
  name: 'Thief 2 (Ursula GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Dagger',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Poison Dagger+',
    rarity: '-'
  }, {
    name: 'Reciprocal Aid',
    rarity: '-'
  }, {
    name: 'Escape Route 3',
    rarity: '-'
  }, {
    name: 'Savage Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Thief.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Thief.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Thief.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [44],
        atk: [28],
        spd: [39],
        def: [14],
        res: [32]
      }
    }
  }
}];

var event1 = { unitList: unitList$1, startTime: startTime$1, endTime: endTime$1 };

// Times were entered in PDT (UTC - 7)
var startTime$2 = new Date('2017-03-24T00:00:00-07:00');

var endTime$2 = new Date('2017-03-27T23:59:00-07:00');

var unitList$2 = [{
  shortName: 'Flier',
  name: 'Lance Flier (Michalis GHB)',
  moveType: 'Flying',
  weaponType: 'Blue Lance',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Lance+',
    rarity: '-'
  }, {
    name: 'Iceberg',
    rarity: '-'
  }, {
    name: 'Darting Blow 3',
    rarity: '-'
  }, {
    name: 'Drag Back',
    rarity: '-'
  }, {
    name: 'Fortify Fliers',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lance Flier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lance Flier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lance Flier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [28],
        spd: [36],
        def: [22],
        res: [37]
      }
    }
  }
}, {
  shortName: 'Michalis',
  name: 'Michalis (Michalis GHB)',
  moveType: 'Flying',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Hauteclere',
    rarity: '-'
  }, {
    name: 'Blazing Thunder',
    rarity: '-'
  }, {
    name: "Iote's Shield",
    rarity: '-'
  }, {
    name: 'Threaten Def 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Michalis.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Michalis.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Michalis.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [60],
        atk: [35],
        spd: [27],
        def: [36],
        res: [19]
      }
    }
  }
}, {
  shortName: 'Flier',
  name: 'Sword Flier (Michalis GHB)',
  moveType: 'Flying',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Sword+',
    rarity: '-'
  }, {
    name: 'Iceberg',
    rarity: '-'
  }, {
    name: 'Darting Blow 3',
    rarity: '-'
  }, {
    name: 'Drag Back',
    rarity: '-'
  }, {
    name: 'Hone Fliers',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sword Flier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sword Flier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sword Flier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [28],
        spd: [36],
        def: [22],
        res: [37]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Sword Cavalier (Michalis GHB)',
  moveType: 'Cavalry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Sword+',
    rarity: '-'
  }, {
    name: 'Draconic Aura',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Bowbreaker 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sword Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sword Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sword Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [49],
        atk: [35],
        spd: [25],
        def: [26],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Lance Fighter (Michalis GHB)',
  moveType: 'Infantry',
  weaponType: 'Blue Lance',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Heavy Spear+',
    rarity: '-'
  }, {
    name: 'Draconic Aura',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Bowbreaker 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lance Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lance Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lance Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [52],
        atk: [31],
        spd: [31],
        def: [30],
        res: [23]
      }
    }
  }
}];

var event2 = { unitList: unitList$2, startTime: startTime$2, endTime: endTime$2 };

// Times were entered in PDT (UTC - 7)
var startTime$3 = new Date('2017-04-04T00:00:00-07:00');

var endTime$3 = new Date('2017-04-08T23:59:00-07:00');

var unitList$3 = [{
  shortName: 'Navarre',
  name: 'Navarre (Navarre GHB)',
  moveType: 'Infantry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Killing Edge+',
    rarity: '-'
  }, {
    name: 'Blazing Wind',
    rarity: '-'
  }, {
    name: 'Desperation 3',
    rarity: '-'
  }, {
    name: 'Threaten Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Navarre.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Navarre.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Navarre.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [58],
        atk: [31],
        spd: [39],
        def: [24],
        res: [25]
      }
    }
  }
}, {
  shortName: 'Thief 1',
  name: 'Thief 1 (Navarre GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Dagger',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Dagger+',
    rarity: '-'
  }, {
    name: 'Moonbow',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Poison Strike 3',
    rarity: '-'
  }, {
    name: 'Hone Atk 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Thief.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Thief.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Thief.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [44],
        atk: [28],
        spd: [39],
        def: [14],
        res: [32]
      }
    }
  }
}, {
  shortName: 'Thief 2',
  name: 'Thief 2 (Navarre GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Dagger',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Rogue Dagger+',
    rarity: '-'
  }, {
    name: 'Moonbow',
    rarity: '-'
  }, {
    name: 'Armored Blow 3',
    rarity: '-'
  }, {
    name: 'Bowbreaker 3',
    rarity: '-'
  }, {
    name: 'Hone Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Thief.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Thief.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Thief.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [44],
        atk: [28],
        spd: [39],
        def: [14],
        res: [32]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Axe Fighter (Navarre GHB)',
  moveType: 'Infantry',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Hammer+',
    rarity: '-'
  }, {
    name: 'Ardent Sacrifice',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Obstruct 3',
    rarity: '-'
  }, {
    name: 'Spur Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Axe Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Axe Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Axe Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [52],
        atk: [31],
        spd: [31],
        def: [30],
        res: [23]
      }
    }
  }
}, {
  shortName: 'Cleric',
  name: 'Cleric (Navarre GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Staff',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Panic',
    rarity: '-'
  }, {
    name: 'Physic',
    rarity: '-'
  }, {
    name: 'Solid-Earth Balm',
    rarity: '-'
  }, {
    name: 'Live to Serve 3',
    rarity: '-'
  }, {
    name: 'Fortify Def 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Cleric.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Cleric.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Cleric.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [42],
        atk: [28],
        spd: [28],
        def: [24],
        res: [36]
      }
    }
  }
}];

var event3 = { unitList: unitList$3, startTime: startTime$3, endTime: endTime$3 };

// Times were entered in PDT (UTC - 7)
var startTime$4 = new Date('2017-04-20T00:00:00-07:00');

var endTime$4 = new Date('2017-04-23T23:59:00-07:00');

var unitList$4 = [{
  shortName: 'Blue Mage',
  name: 'Blue Mage (Zephiel GHB)',
  moveType: 'Infantry',
  weaponType: 'Blue Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Thoron+',
    rarity: '-'
  }, {
    name: 'Armored Blow 3',
    rarity: '-'
  }, {
    name: 'Seal Atk 3',
    rarity: '-'
  }, {
    name: 'Breath of Life 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Blue Mage.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Blue Mage.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Blue Mage.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [31],
        spd: [32],
        def: [20],
        res: [28]
      }
    }
  }
}, {
  shortName: 'Knight',
  name: 'Axe Knight (Zephiel GHB)',
  moveType: 'Armored',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Brave Axe+',
    rarity: '-'
  }, {
    name: 'Sol',
    rarity: '-'
  }, {
    name: 'Swap',
    rarity: '-'
  }, {
    name: 'Wary Fighter 3',
    rarity: '-'
  }, {
    name: 'Fortify Res 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Axe Knight.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Axe Knight.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Axe Knight.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [67],
        atk: [39],
        spd: [16],
        def: [41],
        res: [19]
      }
    }
  }
}, {
  shortName: 'Zephiel',
  name: 'Zephiel (Zephiel GHB)',
  moveType: 'Armored',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Eckesachs',
    rarity: '-'
  }, {
    name: 'Life and Death 3',
    rarity: '-'
  }, {
    name: 'Wary Fighter 3',
    rarity: '-'
  }, {
    name: 'Reprisal',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Zephiel.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Zephiel.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Zephiel.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [78],
        atk: [57 - 5 - 16], // Undo Life and death / Weapon
        spd: [21 - 5],
        def: [34 + 5],
        res: [20 + 5]
      }
    }
  }
}, {
  shortName: 'Knight',
  name: 'Lance Knight (Zephiel GHB)',
  moveType: 'Armored',
  weaponType: 'Blue Lance',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Brave Lance+',
    rarity: '-'
  }, {
    name: 'Sol',
    rarity: '-'
  }, {
    name: 'Swap',
    rarity: '-'
  }, {
    name: 'Wary Fighter 3',
    rarity: '-'
  }, {
    name: 'Fortify Res 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lance Knight.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lance Knight.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lance Knight.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [67],
        atk: [39],
        spd: [16],
        def: [41],
        res: [19]
      }
    }
  }
}, {
  shortName: 'Red Mage',
  name: 'Red Mage (Zephiel GHB)',
  moveType: 'Infantry',
  weaponType: 'Red Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Bolganone+',
    rarity: '-'
  }, {
    name: 'Armored Blow 3',
    rarity: '-'
  }, {
    name: 'Seal Atk 3',
    rarity: '-'
  }, {
    name: 'Breath of Life 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Red Mage.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Red Mage.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Red Mage.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [31],
        spd: [32],
        def: [20],
        res: [28]
      }
    }
  }
}];

var event4 = { unitList: unitList$4, startTime: startTime$4, endTime: endTime$4 };

// Times were entered in AEST (UTC + 10)
var startTime$5 = new Date('2017-04-24T17:00:00+10:00');

var endTime$5 = new Date('2017-05-02T16:59:00+10:00');

var unitList$5 = [{
  shortName: 'Navarre',
  name: 'Navarre (Navarre GHB)',
  moveType: 'Infantry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Killing Edge+',
    rarity: '-'
  }, {
    name: 'Blazing Wind',
    rarity: '-'
  }, {
    name: 'Desperation 3',
    rarity: '-'
  }, {
    name: 'Threaten Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Navarre.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Navarre.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Navarre.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [58],
        atk: [31],
        spd: [39],
        def: [24],
        res: [25]
      }
    }
  }
}, {
  shortName: 'Thief 1',
  name: 'Thief 1 (Navarre GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Dagger',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Dagger+',
    rarity: '-'
  }, {
    name: 'Moonbow',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Poison Strike 3',
    rarity: '-'
  }, {
    name: 'Hone Atk 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Thief.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Thief.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Thief.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [44],
        atk: [28],
        spd: [39],
        def: [14],
        res: [32]
      }
    }
  }
}, {
  shortName: 'Thief 2',
  name: 'Thief 2 (Navarre GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Dagger',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Rogue Dagger+',
    rarity: '-'
  }, {
    name: 'Moonbow',
    rarity: '-'
  }, {
    name: 'Armored Blow 3',
    rarity: '-'
  }, {
    name: 'Bowbreaker 3',
    rarity: '-'
  }, {
    name: 'Hone Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Thief.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Thief.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Thief.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [44],
        atk: [28],
        spd: [39],
        def: [14],
        res: [32]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Axe Fighter (Navarre GHB)',
  moveType: 'Infantry',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Hammer+',
    rarity: '-'
  }, {
    name: 'Ardent Sacrifice',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Obstruct 3',
    rarity: '-'
  }, {
    name: 'Spur Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Axe Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Axe Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Axe Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [52],
        atk: [31],
        spd: [31],
        def: [30],
        res: [23]
      }
    }
  }
}, {
  shortName: 'Cleric',
  name: 'Cleric (Navarre GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Staff',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Panic',
    rarity: '-'
  }, {
    name: 'Physic',
    rarity: '-'
  }, {
    name: 'Solid-Earth Balm',
    rarity: '-'
  }, {
    name: 'Live to Serve 3',
    rarity: '-'
  }, {
    name: 'Fortify Def 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Cleric.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Cleric.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Cleric.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [42],
        atk: [28],
        spd: [28],
        def: [24],
        res: [36]
      }
    }
  }
}];

var event5 = { unitList: unitList$5, startTime: startTime$5, endTime: endTime$5 };

// Times were entered in AEST (UTC + 10)
var startTime$6 = new Date('2017-04-24T17:00:00+10:00');

var endTime$6 = new Date('2017-05-02T16:59:00+10:00');

var unitList$6 = [{
  shortName: 'Robin (F)',
  name: 'Robin (F) (Robin GHB)',
  moveType: 'Infantry',
  weaponType: 'Green Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Gronnwolf+',
    rarity: '-'
  }, {
    name: 'Ignis',
    rarity: '-'
  }, {
    name: 'Defiant Res 3',
    rarity: '-'
  }, {
    name: 'B Tomebreaker 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Robin (F).png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Robin (F).png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Robin (F).png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [25],
        spd: [25],
        def: [24],
        res: [18]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Lance Fighter (Robin GHB)',
  moveType: 'Infantry',
  weaponType: 'Blue Lance',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Lance',
    rarity: '-'
  }, {
    name: 'Glimmer',
    rarity: '-'
  }, {
    name: 'Death Blow 2',
    rarity: '-'
  }, {
    name: 'Drag Back',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lance Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lance Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lance Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [42],
        atk: [27],
        spd: [26],
        def: [26],
        res: [18]
      }
    }
  }
}, {
  shortName: 'Red Mage',
  name: 'Red Mage (Robin GHB)',
  moveType: 'Infantry',
  weaponType: 'Red Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Bolganone',
    rarity: '-'
  }, {
    name: 'Bonfire',
    rarity: '-'
  }, {
    name: 'Armored Blow 2',
    rarity: '-'
  }, {
    name: 'Threaten Res 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Red Mage.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Red Mage.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Red Mage.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [36],
        atk: [27],
        spd: [28],
        def: [17],
        res: [23]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Axe Fighter (Robin GHB)',
  moveType: 'Infantry',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Killer Axe',
    rarity: '-'
  }, {
    name: 'Glimmer',
    rarity: '-'
  }, {
    name: 'Seal Res 2',
    rarity: '-'
  }, {
    name: 'Threaten Atk 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Axe Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Axe Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Axe Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [42],
        atk: [27],
        spd: [26],
        def: [26],
        res: [18]
      }
    }
  }
}, {
  shortName: 'Blue Mage',
  name: 'Blue Mage (Robin GHB)',
  moveType: 'Infantry',
  weaponType: 'Blue Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Thoron',
    rarity: '-'
  }, {
    name: 'Bonfire',
    rarity: '-'
  }, {
    name: 'Darting Blow 2',
    rarity: '-'
  }, {
    name: 'Seal Def 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Blue Mage.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Blue Mage.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Blue Mage.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [36],
        atk: [27],
        spd: [28],
        def: [17],
        res: [23]
      }
    }
  }
}];

var event6 = { unitList: unitList$6, startTime: startTime$6, endTime: endTime$6 };

// Times were entered in PDT (UTC - 7)
var startTime$7 = new Date('2017-05-02T00:00:00-07:00');

var endTime$7 = new Date('2017-05-07T23:59:00-07:00');

// Layout, Xander Stats/Skills, and Enemy Weapons taken from http://i.imgur.com/9pQnSlL.png
// Enemy stats taken from previous GHB.
// Green Cavalier stats guessed based on lunatic story : GHB stat similarities.
// Some enemy skills taken from https://i.imgur.com/oXRQY6e.png, others guessed.
var unitList$7 = [{
  shortName: 'Xander',
  name: 'Xander (Xander GHB)',
  moveType: 'Cavalry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Siegfried',
    rarity: '-'
  }, {
    name: 'Armored Blow 3',
    rarity: '-'
  }, {
    name: 'Spur Def 3',
    rarity: '-'
  }, {
    name: 'Blazing Light',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Xander.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Xander.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Xander.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [61],
        atk: [48 - 16],
        spd: [25],
        def: [38],
        res: [17]
      }
    }
  }
}, {
  shortName: 'Cleric',
  name: 'Cleric (Xander GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Staff',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Gravity',
    rarity: '-'
  }, {
    name: 'Wings of Mercy 3',
    rarity: '-'
  }, {
    name: 'Solid-Earth Balm',
    rarity: '-'
  }, {
    name: 'Recover',
    rarity: '-'
  }, {
    name: 'Hone Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lance Cleric.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lance Cleric.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lance Cleric.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [42],
        atk: [28],
        spd: [28],
        def: [24],
        res: [36]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Green Cavalier (Xander GHB)',
  moveType: 'Cavalry',
  weaponType: 'Green Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Gronnwolf+',
    rarity: '-'
  }, {
    name: 'Darting Blow 3',
    rarity: '-'
  }, {
    name: 'Glacies',
    rarity: '-'
  }, {
    name: 'Hone Cavalry',
    rarity: '-'
  }, {
    name: 'Vantage 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Green Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Green Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Green Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [40],
        atk: [36],
        spd: [26],
        def: [17],
        res: [35]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Lance Fighter (Xander GHB)',
  moveType: 'Infantry',
  weaponType: 'Blue Lance',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Killer Lance+',
    rarity: '-'
  }, {
    name: 'Ignis',
    rarity: '-'
  }, {
    name: 'Quick Riposte 3',
    rarity: '-'
  }, {
    name: 'Armored Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lance Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lance Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lance Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [52],
        atk: [31],
        spd: [31],
        def: [30],
        res: [23]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Sword Fighter (Xander GHB)',
  moveType: 'Infantry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Killing Edge+',
    rarity: '-'
  }, {
    name: 'Ignis',
    rarity: '-'
  }, {
    name: 'Quick Riposte 3',
    rarity: '-'
  }, {
    name: 'Armored Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sword Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sword Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sword Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [52],
        atk: [31],
        spd: [31],
        def: [30],
        res: [23]
      }
    }
  }
}];

var event7 = { unitList: unitList$7, startTime: startTime$7, endTime: endTime$7 };

// Times were entered in PDT (UTC - 7)
var startTime$8 = new Date('2017-05-10T17:00:00+10:00');

var endTime$8 = new Date('2017-05-17T16:59:00+10:00');

var unitList$8 = [{
  shortName: 'Ursula',
  name: 'Ursula (Ursula GHB)',
  moveType: 'Cavalry',
  weaponType: 'Blue Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Blárwolf+',
    rarity: '-'
  }, {
    name: 'Growing Thunder',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Threaten Res 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Ursula.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Ursula.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Ursula.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [50],
        atk: [29],
        spd: [32],
        def: [19],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Knight',
  name: 'Axe Knight (Ursula GHB)',
  moveType: 'Armored',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Axe+',
    rarity: '-'
  }, {
    name: 'Aegis',
    rarity: '-'
  }, {
    name: 'Wings of Mercy 3',
    rarity: '-'
  }, {
    name: 'Threaten Def 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Axe Knight.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Axe Knight.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Axe Knight.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [67],
        atk: [39],
        spd: [16],
        def: [41],
        res: [19]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Sword Cavalier (Ursula GHB)',
  moveType: 'Cavalry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Sword+',
    rarity: '-'
  }, {
    name: 'Draw Back',
    rarity: '-'
  }, {
    name: 'Aegis',
    rarity: '-'
  }, {
    name: 'Obstruct 3',
    rarity: '-'
  }, {
    name: 'Threaten Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sword Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sword Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sword Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [49],
        atk: [35],
        spd: [25],
        def: [26],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Thief 1',
  name: 'Thief 1 (Ursula GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Dagger',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Poison Dagger+',
    rarity: '-'
  }, {
    name: 'Reciprocal Aid',
    rarity: '-'
  }, {
    name: 'Seal Atk 3',
    rarity: '-'
  }, {
    name: 'Savage Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Thief.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Thief.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Thief.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [44],
        atk: [28],
        spd: [39],
        def: [14],
        res: [32]
      }
    }
  }
}, {
  shortName: 'Thief 2',
  name: 'Thief 2 (Ursula GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Dagger',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Poison Dagger+',
    rarity: '-'
  }, {
    name: 'Reciprocal Aid',
    rarity: '-'
  }, {
    name: 'Escape Route 3',
    rarity: '-'
  }, {
    name: 'Savage Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Thief.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Thief.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Thief.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [44],
        atk: [28],
        spd: [39],
        def: [14],
        res: [32]
      }
    }
  }
}];

var event8 = { unitList: unitList$8, startTime: startTime$8, endTime: endTime$8 };

// Times were entered in PDT (UTC - 7)
var startTime$9 = new Date('2017-05-19T00:00:00-07:00');

var endTime$9 = new Date('2017-05-25T23:59:00-07:00');

var unitList$9 = [{
  shortName: 'Lloyd',
  name: 'Lloyd (Lloyd GHB)',
  moveType: 'Infantry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Regal Blade',
    rarity: '-'
  }, {
    name: 'Iceberg',
    rarity: '-'
  }, {
    name: 'Pass 3',
    rarity: '-'
  }, {
    name: 'Threaten Atk 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lloyd.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lloyd.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lloyd.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [57],
        atk: [32],
        spd: [36],
        def: [20],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Flier',
  name: 'Axe Flier (Lloyd GHB)',
  moveType: 'Flying',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Axe+',
    rarity: '-'
  }, {
    name: 'Life and Death 3',
    rarity: '-'
  }, {
    name: 'Lunge',
    rarity: '-'
  }, {
    name: 'Threaten Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Axe Flier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Axe Flier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Axe Flier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [28],
        spd: [36],
        def: [22],
        res: [37]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Lance Cavalier (Lloyd GHB)',
  moveType: 'Cavalry',
  weaponType: 'Blue Lance',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Lance+',
    rarity: '-'
  }, {
    name: 'Armored Blow 3',
    rarity: '-'
  }, {
    name: 'Lunge',
    rarity: '-'
  }, {
    name: 'Hone Cavalry',
    rarity: '-'
  }, {
    name: 'Reposition',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lance Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lance Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lance Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [49],
        atk: [35],
        spd: [25],
        def: [26],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Bow Cavalier (Lloyd GHB)',
  moveType: 'Cavalry',
  weaponType: 'Colorless Bow',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Bow+',
    rarity: '-'
  }, {
    name: 'Fortify Cavalry',
    rarity: '-'
  }, {
    name: 'Swordbreaker 3',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Bow Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Bow Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Bow Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [48],
        atk: [36],
        spd: [23],
        def: [25],
        res: [24]
      }
    }
  }
}, {
  shortName: 'Blue Mage',
  name: 'Blue Mage (Lloyd GHB)',
  moveType: 'Infantry',
  weaponType: 'Blue Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Thoron+',
    rarity: '-'
  }, {
    name: 'Darting Blow 3',
    rarity: '-'
  }, {
    name: 'Rally Defense',
    rarity: '-'
  }, {
    name: 'Daggerbreaker 3',
    rarity: '-'
  }, {
    name: 'Hone Atk 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Blue Mage.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Blue Mage.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Blue Mage.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [31],
        spd: [32],
        def: [20],
        res: [28]
      }
    }
  }
}];

var event9 = { unitList: unitList$9, startTime: startTime$9, endTime: endTime$9 };

// Times were entered in PDT (UTC - 7)
var startTime$10 = new Date('2017-05-26T00:00:00-07:00');

var endTime$10 = new Date('2017-06-01T23:59:00-07:00');

var unitList$10 = [{
  shortName: 'Narcian',
  name: 'Narcian (Narcian GHB)',
  moveType: 'Flying',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Emerald Axe+',
    rarity: '-'
  }, {
    name: 'Vengeance',
    rarity: '-'
  }, {
    name: 'Lancebreaker 3',
    rarity: '-'
  }, {
    name: 'Savage Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Narcian.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Narcian.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Narcian.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [48],
        atk: [25],
        spd: [24],
        def: [28],
        res: [22]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Bow Fighter (Narcian GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Bow',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Brave Bow',
    rarity: '-'
  }, {
    name: 'Reprisal',
    rarity: '-'
  }, {
    name: 'Death Blow 2',
    rarity: '-'
  }, {
    name: 'Savage Blow 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Bow Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Bow Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Bow Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [41],
        atk: [28],
        spd: [25],
        def: [24],
        res: [13]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Blue Cavalier (Narcian GHB)',
  moveType: 'Cavalry',
  weaponType: 'Blue Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Thoron',
    rarity: '-'
  }, {
    name: 'Ardent Sacrifice',
    rarity: '-'
  }, {
    name: 'Triangle Adept 2',
    rarity: '-'
  }, {
    name: 'Swordbreaker 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Blue Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Blue Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Blue Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [31],
        atk: [31],
        spd: [21],
        def: [14],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Green Cavalier (Narcian GHB)',
  moveType: 'Cavalry',
  weaponType: 'Green Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Gronnraven',
    rarity: '-'
  }, {
    name: 'Reprisal',
    rarity: '-'
  }, {
    name: 'Death Blow 2',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Green Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Green Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Green Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [31],
        atk: [31],
        spd: [21],
        def: [14],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Sword Fighter (Narcian GHB)',
  moveType: 'Infantry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Sword',
    rarity: '-'
  }, {
    name: 'Escutcheon',
    rarity: '-'
  }, {
    name: 'Axebreaker 3',
    rarity: '-'
  }, {
    name: 'Threaten Res 2',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sword Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sword Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sword Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [42],
        atk: [27],
        spd: [26],
        def: [26],
        res: [18]
      }
    }
  }
}];

var event10 = { unitList: unitList$10, startTime: startTime$10, endTime: endTime$10 };

// Times were entered in PDT (UTC - 7)
var startTime$11 = new Date('2017-06-02T03:00:00-04:00');

var endTime$11 = new Date('2017-06-09T02:59:00-04:00');

var unitList$11 = [{
  shortName: 'Camus',
  name: 'Camus (Camus GHB)',
  moveType: 'Cavalry',
  weaponType: 'Blue Lance',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Gradivus',
    rarity: '-'
  }, {
    name: 'Growing Thunder',
    rarity: '-'
  }, {
    name: "Grani's Shield",
    rarity: '-'
  }, {
    name: 'Goad Cavalry',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Camus.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Camus.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Camus.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [58],
        atk: [48],
        spd: [33],
        def: [31],
        res: [17]
      }
    }
  }
}, {
  shortName: 'Troubadour',
  name: 'Troubadour (Camus GHB)',
  moveType: 'Cavalry',
  weaponType: 'Colorless Staff',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Fear',
    rarity: '-'
  }, {
    name: 'Rehabilitate',
    rarity: '-'
  }, {
    name: 'Miracle',
    rarity: '-'
  }, {
    name: 'Wings of Mercy 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Troubador.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Troubador.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Troubador.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [36],
        atk: [32],
        spd: [22],
        def: [20],
        res: [42]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Red Cavalier (Camus GHB)',
  moveType: 'Cavalry',
  weaponType: 'Red Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Bolganone+',
    rarity: '-'
  }, {
    name: 'Rally Attack',
    rarity: '-'
  }, {
    name: 'Moonbow',
    rarity: '-'
  }, {
    name: 'Darting Blow 3',
    rarity: '-'
  }, {
    name: 'Goad Cavalry',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Red Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Red Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Red Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [40],
        atk: [49],
        spd: [26],
        def: [17],
        res: [35]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Axe Cavalier 1 (Camus GHB)',
  moveType: 'Cavalry',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Axe+',
    rarity: '-'
  }, {
    name: 'Rally Defense',
    rarity: '-'
  }, {
    name: "Grani's Shield",
    rarity: '-'
  }, {
    name: 'Pass 3',
    rarity: '-'
  }, {
    name: 'Ward Cavalry',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Axe Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Axe Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Axe Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [49],
        atk: [50],
        spd: [25],
        def: [26],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Axe Cavalier 2 (Camus GHB)',
  moveType: 'Cavalry',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Silver Axe+',
    rarity: '-'
  }, {
    name: 'Rally Defense',
    rarity: '-'
  }, {
    name: "Grani's Shield",
    rarity: '-'
  }, {
    name: 'Pass 3',
    rarity: '-'
  }, {
    name: 'Ward Cavalry',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Axe Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Axe Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Axe Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [49],
        atk: [50],
        spd: [25],
        def: [26],
        res: [30]
      }
    }
  }
}];

var event11 = { unitList: unitList$11, startTime: startTime$11, endTime: endTime$11 };

// Times were entered in PDT (UTC - 7)
var startTime$12 = new Date('2017-06-08T17:00:00+10:00');

var endTime$12 = new Date('2017-06-22T16:59:00+10:00');

var unitList$12 = [{
  shortName: 'Veronica',
  name: 'Veronica (Tempest Trials)',
  moveType: 'Infantry',
  weaponType: 'Green Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Élivágar',
    rarity: '-'
  }, {
    name: 'Bonfire',
    rarity: '-'
  }, {
    name: 'Fury 3',
    rarity: '-'
  }, {
    name: 'Renewal 3',
    rarity: '-'
  }, {
    name: 'Savage Blow 3',
    rarity: '-'
  }, {
    name: 'Quickened Pulse',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Veronica.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Veronica.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Veronica.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [66],
        atk: [40],
        spd: [29],
        def: [33],
        res: [26]
      }
    }
  }
}];

var event12 = { unitList: unitList$12, startTime: startTime$12, endTime: endTime$12 };

// Times were entered in PDT (UTC - 7)
var startTime$13 = new Date('2017-06-09T00:00:00-07:00');

var endTime$13 = new Date('2017-06-15T23:59:00-07:00');

var unitList$13 = [{
  shortName: 'Blue Mage',
  name: 'Blue Mage (Zephiel GHB)',
  moveType: 'Infantry',
  weaponType: 'Blue Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Thoron+',
    rarity: '-'
  }, {
    name: 'Armored Blow 3',
    rarity: '-'
  }, {
    name: 'Seal Atk 3',
    rarity: '-'
  }, {
    name: 'Breath of Life 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Blue Mage.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Blue Mage.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Blue Mage.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [31],
        spd: [32],
        def: [20],
        res: [28]
      }
    }
  }
}, {
  shortName: 'Knight',
  name: 'Axe Knight (Zephiel GHB)',
  moveType: 'Armored',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Brave Axe+',
    rarity: '-'
  }, {
    name: 'Sol',
    rarity: '-'
  }, {
    name: 'Swap',
    rarity: '-'
  }, {
    name: 'Wary Fighter 3',
    rarity: '-'
  }, {
    name: 'Fortify Res 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Axe Knight.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Axe Knight.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Axe Knight.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [67],
        atk: [39],
        spd: [16],
        def: [41],
        res: [19]
      }
    }
  }
}, {
  shortName: 'Zephiel',
  name: 'Zephiel (Zephiel GHB)',
  moveType: 'Armored',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Eckesachs',
    rarity: '-'
  }, {
    name: 'Life and Death 3',
    rarity: '-'
  }, {
    name: 'Wary Fighter 3',
    rarity: '-'
  }, {
    name: 'Reprisal',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Zephiel.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Zephiel.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Zephiel.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [78],
        atk: [57 - 5 - 16], // Undo Life and death / Weapon
        spd: [21 - 5],
        def: [34 + 5],
        res: [20 + 5]
      }
    }
  }
}, {
  shortName: 'Knight',
  name: 'Lance Knight (Zephiel GHB)',
  moveType: 'Armored',
  weaponType: 'Blue Lance',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Brave Lance+',
    rarity: '-'
  }, {
    name: 'Sol',
    rarity: '-'
  }, {
    name: 'Swap',
    rarity: '-'
  }, {
    name: 'Wary Fighter 3',
    rarity: '-'
  }, {
    name: 'Fortify Res 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lance Knight.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lance Knight.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lance Knight.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [67],
        atk: [39],
        spd: [16],
        def: [41],
        res: [19]
      }
    }
  }
}, {
  shortName: 'Red Mage',
  name: 'Red Mage (Zephiel GHB)',
  moveType: 'Infantry',
  weaponType: 'Red Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Bolganone+',
    rarity: '-'
  }, {
    name: 'Armored Blow 3',
    rarity: '-'
  }, {
    name: 'Seal Atk 3',
    rarity: '-'
  }, {
    name: 'Breath of Life 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Red Mage.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Red Mage.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Red Mage.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [31],
        spd: [32],
        def: [20],
        res: [28]
      }
    }
  }
}];

var event13 = { unitList: unitList$13, startTime: startTime$13, endTime: endTime$13 };

// Times were entered in PDT (UTC - 7)
var startTime$14 = new Date('2017-06-16T00:00:00-07:00');

var endTime$14 = new Date('2017-06-21T23:59:00-07:00');

var unitList$14 = [{
  shortName: 'Legion',
  name: 'Legion 1 (Legion GHB)',
  moveType: 'Infantry',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: "Legion's Axe+",
    rarity: '-'
  }, {
    name: 'Fury',
    rarity: '-'
  }, {
    name: 'Seal Spd 3',
    rarity: '-'
  }, {
    name: 'Savage Blow 3',
    rarity: '-'
  }, {
    name: 'Aegis',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Legion.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Legion.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Legion.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [65],
        atk: [37],
        spd: [36],
        def: [26],
        res: [21]
      }
    }
  }
}, {
  shortName: 'Legion',
  name: 'Legion 2 (Legion GHB)',
  moveType: 'Infantry',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: "Legion's Axe+",
    rarity: '-'
  }, {
    name: 'Fury',
    rarity: '-'
  }, {
    name: 'Axebreaker 3',
    rarity: '-'
  }, {
    name: 'Hone Spd 3',
    rarity: '-'
  }, {
    name: 'Reprisal',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Legion.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Legion.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Legion.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [65],
        atk: [37],
        spd: [36],
        def: [26],
        res: [21]
      }
    }
  }
}, {
  shortName: 'Red Mage',
  name: 'Red Mage (Legion GHB)',
  moveType: 'Infantry',
  weaponType: 'Red Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Bolganone+',
    rarity: '-'
  }, {
    name: 'Speed +3',
    rarity: '-'
  }, {
    name: 'Swordbreaker 3',
    rarity: '-'
  }, {
    name: 'Atk Ploy 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Red Mage.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Red Mage.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Red Mage.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [31],
        spd: [32],
        def: [20],
        res: [28]
      }
    }
  }
}, {
  shortName: 'Bow Fighter',
  name: 'Bow Fighter (Legion GHB)',
  moveType: 'Infantry',
  weaponType: 'Colorless Bow',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Brave Bow+',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Guard 3',
    rarity: '-'
  }, {
    name: 'Threaten Atk 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Bow Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Bow Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Bow Fighter.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [51],
        atk: [32],
        spd: [29],
        def: [29],
        res: [16]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Blue Cavalier (Legion GHB)',
  moveType: 'Cavalry',
  weaponType: 'Blue Tome',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  skills: [{
    name: 'Thoron+',
    rarity: '-'
  }, {
    name: 'Warding Blow 3',
    rarity: '-'
  }, {
    name: 'Lancebreaker 3',
    rarity: '-'
  }, {
    name: 'Threaten Spd 3',
    rarity: '-'
  }],
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Blue Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Blue Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Blue Cavalier.png'
    }
  },
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [40],
        atk: [36],
        spd: [26],
        def: [17],
        res: [35]
      }
    }
  }
}];

var event14 = { unitList: unitList$14, startTime: startTime$14, endTime: endTime$14 };

// Times were entered in PDT (UTC - 7)
var startTime$15 = new Date('2017-06-22T07:00:00+00:00');

var endTime$15 = new Date('2017-06-28T06:59:00+00:00');

var unitList$15 = [{
  shortName: 'Flier',
  name: 'Lance Flier (Michalis GHB)',
  moveType: 'Flying',
  weaponType: 'Blue Lance',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lance Flier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lance Flier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lance Flier.png'
    }
  },
  skills: [{
    name: 'Silver Lance+',
    rarity: '-'
  }, {
    name: 'Iceberg',
    rarity: '-'
  }, {
    name: 'Darting Blow 3',
    rarity: '-'
  }, {
    name: 'Drag Back',
    rarity: '-'
  }, {
    name: 'Fortify Fliers',
    rarity: '-'
  }],
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [28],
        spd: [36],
        def: [22],
        res: [37]
      }
    }
  }
}, {
  shortName: 'Michalis',
  name: 'Michalis (Michalis GHB)',
  moveType: 'Flying',
  weaponType: 'Green Axe',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Michalis.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Michalis.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Michalis.png'
    }
  },
  skills: [{
    name: 'Hauteclere',
    rarity: '-'
  }, {
    name: 'Blazing Thunder',
    rarity: '-'
  }, {
    name: "Iote's Shield",
    rarity: '-'
  }, {
    name: 'Threaten Def 3',
    rarity: '-'
  }],
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [60],
        atk: [35],
        spd: [27],
        def: [36],
        res: [19]
      }
    }
  }
}, {
  shortName: 'Flier',
  name: 'Sword Flier (Michalis GHB)',
  moveType: 'Flying',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sword Flier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sword Flier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sword Flier.png'
    }
  },
  skills: [{
    name: 'Silver Sword+',
    rarity: '-'
  }, {
    name: 'Iceberg',
    rarity: '-'
  }, {
    name: 'Darting Blow 3',
    rarity: '-'
  }, {
    name: 'Drag Back',
    rarity: '-'
  }, {
    name: 'Hone Fliers',
    rarity: '-'
  }],
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [45],
        atk: [28],
        spd: [36],
        def: [22],
        res: [37]
      }
    }
  }
}, {
  shortName: 'Cavalier',
  name: 'Sword Cavalier (Michalis GHB)',
  moveType: 'Cavalry',
  weaponType: 'Red Sword',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Sword Cavalier.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Sword Cavalier.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Sword Cavalier.png'
    }
  },
  skills: [{
    name: 'Silver Sword+',
    rarity: '-'
  }, {
    name: 'Draconic Aura',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Bowbreaker 3',
    rarity: '-'
  }],
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [49],
        atk: [35],
        spd: [25],
        def: [26],
        res: [30]
      }
    }
  }
}, {
  shortName: 'Fighter',
  name: 'Lance Fighter (Michalis GHB)',
  moveType: 'Infantry',
  weaponType: 'Blue Lance',
  releaseDate: 'N/A',
  poolDate: 'N/A',
  assets: {
    portrait: {
      '75px': 'https://proving-grounds-static.ajhyndman.com/75px-Icon_Portrait_Lance Fighter.png',
      '113px': 'https://proving-grounds-static.ajhyndman.com/113px-Icon_Portrait_Lance Fighter.png',
      '150px': 'https://proving-grounds-static.ajhyndman.com/150px-Icon_Portrait_Lance Fighter.png'
    }
  },
  skills: [{
    name: 'Heavy Spear+',
    rarity: '-'
  }, {
    name: 'Draconic Aura',
    rarity: '-'
  }, {
    name: 'Death Blow 3',
    rarity: '-'
  }, {
    name: 'Bowbreaker 3',
    rarity: '-'
  }],
  growthPoints: {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  },
  stats: {
    '1': {
      '5': {
        hp: '-',
        atk: '-',
        spd: '-',
        def: '-',
        res: '-'
      }
    },
    '40': {
      '5': {
        hp: [52],
        atk: [31],
        spd: [31],
        def: [30],
        res: [23]
      }
    }
  }
}];

var event15 = { unitList: unitList$15, startTime: startTime$15, endTime: endTime$15 };

function getEventHeroes() {
  var allEvents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var now = new Date();
  return compose$1(flatten, map$1(prop$1('unitList')), filter$1(function (event) {
    return allEvents || now >= event.startTime && now <= event.endTime;
  }))([event0, event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12, event13, event14, event15]);
}

/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
var propOr = _curry3(function propOr(val, p, obj) {
  return obj != null && _has(p, obj) ? obj[p] : val;
});

var _xreduceBy = function () {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return _curryN(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
  });
}();

/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general `groupBy` function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
var reduceBy = _curryN(4, [], _dispatchable([], _xreduceBy, function reduceBy(valueFn, valueAcc, keyFn, list) {
  return _reduce(function (acc, elt) {
    var key = keyFn(elt);
    acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
    return acc;
  }, {}, list);
}));

/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
var indexBy$1 = reduceBy(function (acc, elem) {
  return elem;
}, null);

var _isFunction = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};

var _arrayFromIterator = function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
};

var _functionName = function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
};

/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
var identical = _curry2(function identical(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 */
var type = _curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

var _typeof$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _equals = function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }

  if (type(a) !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (type(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!((typeof a === 'undefined' ? 'undefined' : _typeof$4(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof$4(b)) && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
    case 'Map':
    case 'Set':
      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
        return false;
      }
      break;
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break;
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  stackA.push(a);
  stackB.push(b);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
      return false;
    }
    idx -= 1;
  }
  stackA.pop();
  stackB.pop();
  return true;
};

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _indexOf = function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a === 'undefined' ? 'undefined' : _typeof$3(a)) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
};

var _contains = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};

var _quote = function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
};

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var _toISOString = function () {
  var pad = function pad(n) {
    return (n < 10 ? '0' : '') + n;
  };

  return typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
    return d.toISOString();
  } : function _toISOString(d) {
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
  };
}();

var _complement = function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
};

/**
 * The complement of `filter`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = _curry2(function reject(pred, filterable) {
  return filter$1(_complement(pred), filterable);
});

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _toString = function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function mapPairs(obj, keys$$1) {
    return _map(function (k) {
      return _quote(k) + ': ' + recur(obj[k]);
    }, keys$$1.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
        return (/^\d+$/.test(k)
        );
      }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return (typeof x === 'undefined' ? 'undefined' : _typeof$2(x)) === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return (typeof x === 'undefined' ? 'undefined' : _typeof$2(x)) === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return (typeof x === 'undefined' ? 'undefined' : _typeof$2(x)) === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
};

/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
var toString_1 = _curry1(function toString(val) {
  return _toString(val, []);
});

/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
var concat$1 = _curry2(function concat(a, b) {
  if (a == null || !_isFunction(a.concat)) {
    throw new TypeError(toString_1(a) + ' does not have a method named "concat"');
  }
  if (_isArray(a) && !_isArray(b)) {
    throw new TypeError(toString_1(b) + ' is not an array');
  }
  return a.concat(b);
});

// eslint-disable-next-line import/no-unresolved
var getAllHeroes = function getAllHeroes() {
  return concat$1(stats.heroes, getEventHeroes(true));
};

// $FlowIssue indexBy confuses flow
var heroesByName = indexBy$1(prop$1('name'), getAllHeroes());

/**
 * Look up a hero's base stats by name.
 *
 * @param {string} name The name of the hero to look up.
 * @returns {Hero} A raw hero object, from fire-emblem-heroes-stats.
 */
var getHero = function getHero(name) {
  var hero = heroesByName[name];
  return hero || heroesByName['Anna: Commander'];
};

var getReleasedHeroes = function getReleasedHeroes() {
  return filter$1(
  // Only consider a hero released if they have a release date and have level 1 stats.
  function (hero) {
    return propOr('N/A', 'releaseDate', hero) !== 'N/A' && hero.stats[1][5] !== undefined;
  }, stats.heroes);
};

/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
var groupBy$1 = _curry2(_checkForMethod('groupBy', reduceBy(function (acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));

// eslint-disable-next-line import/no-unresolved
var skillTypeByName = compose$1(map$1(prop$1('type')),
// $FlowIssue indexBy confuses flow
indexBy$1(prop$1('name')),
// Exclude seals so that 'Attack +1' is an a-passive.
filter$1(function (s) {
  return s.type !== 'SEAL';
}))(stats.skills);

var skillsByTypeAndName = compose$1(
// $FlowIssue indexBy confuses flow
map$1(indexBy$1(prop$1('name'))),
// $FlowIssue groupBy confuses flow
groupBy$1(prop$1('type')))(stats.skills);

var getAllSkills = function getAllSkills() {
  return stats.skills;
};

var getSkillType = function getSkillType(skillName) {
  return skillTypeByName[skillName];
};

var getSkillObject = function getSkillObject(skillType, skillName) {
  return skillsByTypeAndName[skillType] && skillsByTypeAndName[skillType][skillName];
};

// eslint-disable-next-line import/no-unresolved

exports['default'] = stats;
exports.getEventHeroes = getEventHeroes;
exports.getAllHeroes = getAllHeroes;
exports.getHero = getHero;
exports.getReleasedHeroes = getReleasedHeroes;
exports.getAllSkills = getAllSkills;
exports.getSkillObject = getSkillObject;
exports.getSkillType = getSkillType;

Object.defineProperty(exports, '__esModule', { value: true });

})));
