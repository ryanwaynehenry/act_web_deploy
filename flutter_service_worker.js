'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "51cd155942cdbb40b6e1470a5eda3fe0",
".git/config": "37998296c4d9c4a0c3e99abe9564d661",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0840d604905b524761dc61112188ff85",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cb7ffa665a8c43932564cf020f5e339b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6eb02dcfe6a5065eae3383ebb07ef9da",
".git/logs/refs/heads/main": "de2e7dfe7494b8cae6369e5b05bbafac",
".git/logs/refs/remotes/origin/main": "ec4702ee0a0c6c5a65e89b7c54fb85d7",
".git/logs/refs/stash": "73c2a6d04278f50fc810cafbfc76454b",
".git/objects/01/d00d9c1aa8d21f79bddc8f6069f1dc5a4b86a5": "682e683cc79ef1da0be88ccd7f11267e",
".git/objects/06/686922418a3db707ffe8a8dc32d242d6ded025": "bd0f305368382f7921a0e9f966cdb82e",
".git/objects/06/b608f805118ae41fe86eb4cbc51a33f7ad2e7c": "66e319d3ba27607a6ea82b2a4a24f36d",
".git/objects/08/27ee0d1b2609e7384f6e4341e662af3a8e1c53": "535badbfff8488f963d351f4a52a6751",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/3a8cf370fafb3d09174fbca84583b65d03acf2": "5e6a1dd9f2df080be49c021b52fbf1ef",
".git/objects/17/3040a2d24bf9076533ed219365e245dc93c1ca": "ef80feedaa184414407f12f86e36ab72",
".git/objects/1a/2340ab6dcb30e7c2fa87e2b3d9de15e502f8cc": "6f12d8f9a21dc5321fec75abaeee8598",
".git/objects/22/5c4b07de2f5b3e003927de7a23e0e26df0dbfc": "fd1014fb6801854c06f0d0e384331a71",
".git/objects/22/de0f049aaa9bf8df6d187b145c5dd78585b1f1": "d7dd3ef90f816e8f7bf3067a83817cf8",
".git/objects/23/10195383bddd8c29724a602dbd70f2c1de3d8c": "3ebf653df2600abf39a654996a064e95",
".git/objects/23/58ade2f7ec4e24939c3c69249e90c5224cf0f6": "be91a7bdd651376d30321835967ae4b1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/e5dba427abcaabfe057e46e440f9181aa50f6a": "f2e7942436b1f9dd2b23c9235be7493e",
".git/objects/28/76e5387c3a3b6768c7d46056cb47fb6c5d7b8e": "74480ac89d694a3a48fd216740fd24c8",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/d6f442b7bb053ed84eccfceb1d425f70a20867": "fc8f6848b96999828bf80dae169f0efe",
".git/objects/32/ae7892d982c186a8d0014b78b8deafd4b0637a": "b9c949728d078c54291836a145402688",
".git/objects/36/692b1d8f5ca63ff182bd0250aed8a180b9f629": "7a4f55fa4813752465f1f8a7baf301f4",
".git/objects/3c/0f0b8d227c6334b90bff2d9488a2980cf8d9fa": "95cb5ae2c0b7e76cc938b2fb8ec74972",
".git/objects/3d/9525e6098d7c0bfbc1ceeab9072d070ee8077d": "3ed8a8d4c97e6f3d8c84e5e8e8dd4e7b",
".git/objects/3e/9a20a86964b956f85a6057c64d08247bb0c305": "d7351a6754e9f4d8640f12d7e58b26ef",
".git/objects/45/ef569298981c3674661ce51143af8155fff2c8": "97799ddde7c550fc60bb3e163a8dc9ec",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/48/a32c6cefc04c3a7c6be630a6063a13276843df": "e426c97c1d0e37680ee72e2c9208759f",
".git/objects/48/e31fc0ff36980b8b67440326c5b221fe8f3b5e": "5cc021a63efc1a2d003072786047191a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/ad5762cef287061df5bae1145306939523778a": "bc7a309c15caccd07272e740f065e441",
".git/objects/55/2e7ac4b6cf96e29e76cd0a6dd77473f55bee36": "49b00c149b1cffba89abba842d24fb78",
".git/objects/57/949c41bccbd28991eb3f08eb3acbd430ad51fa": "6569585fe6abacabf65bc65cebb27fd1",
".git/objects/5a/589698062c4b2065762165ac919cce8330df7e": "0cae0b1d4b1f725f40405cf429e32707",
".git/objects/5a/6ca7acc7f2905d1d4382f7f6fbde785bd78908": "d6a0a3b491f0effb449be257e849ac59",
".git/objects/5a/e3df5757c3a97ee413b2be975d5fb594c92532": "27e3f2a4e1530d8c45ec7880a74484fd",
".git/objects/5b/75b0ce73394579436bc4e8acdaff2fc3361729": "28951507d31eb084a723a3b0ffbadb33",
".git/objects/5c/f337156520107a99efd2cf077913a0aaf4def5": "153da8a28f4cfc01abc5291ec9a06733",
".git/objects/60/d0a173ec23d8ec5c4c24c98e7f5bee1291a6c1": "0e50ec50d6a6319bcfa3292ad5956687",
".git/objects/62/7e9293e272b5199b9e67f0918f48a0c7c6d1f5": "ff4daef23a072ad6fffd34e8da003a86",
".git/objects/64/1b9642f62e735942c9a649b63ae8fe0282f04e": "c73b464ab46e40df8542279a9d659362",
".git/objects/66/141796eda437216f2d57e5ca284177ef82662d": "307de32f49ef07abcee0490058e3949c",
".git/objects/66/c224dbee1316e639f039865f36147ed2b48719": "6a865645b22153371920758979bedc7d",
".git/objects/66/ff155a2ef4bf5733cbc73078f358db53be8f8a": "f4f5917f461773324ec76ea494fad070",
".git/objects/67/80666c730653cb2aa9898bbc9f5c4cc9719687": "3fbdca1d45ddaae3fc394e2a23d7a684",
".git/objects/67/e2761105e74f8db9dc733a29aa5f7267eb3f2f": "76b48b489f89a70590c816a938d63dd5",
".git/objects/6a/6329d778ec85b190701d126218ce37fc7563ee": "724c73a89f26698428e673584f1db10e",
".git/objects/6b/624398c240b31adcaea6d6927cfcefd77c528c": "db1734d9279c74a221eddbe4f580b5b6",
".git/objects/6d/34a21dd4b246e66b7000e4e6d36abdef154510": "ef3dd426212fb61d9a69cae6c7fc16f7",
".git/objects/6f/33f455309a6708c61c08866c505e1ed07cec50": "7126a0297c6ba492f63190b899ff549d",
".git/objects/70/3442b7138b3b93f2c043bb0047da0d62abbeb3": "04de55b3a996247c3462d39028d4d8f2",
".git/objects/72/c878770c88eb000e04f8bdeb97a848338d2461": "e770c751dc4891b8145c020b5d1360a1",
".git/objects/75/8492995705b8446bc021d6fa78e874f512eedb": "0e20e905d4ec63c40527a269d6666a51",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/71114c518e37ec9da7000094944823481e4a9b": "b17c1098bd7e9a701e5099cc52cce2d1",
".git/objects/79/10c0f99e07f5f60135d31411d27036fcfb49a4": "e1a4fee11e8c466d1faa759c9c6c2c2c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/322e96367ff7d45157a5b2f5293672caa48f9b": "e6951d5d026e715d398313ae71244690",
".git/objects/82/cf19ed34b686660000f9afd8c72dee1e963a73": "3c914aa9148141c228bc2bde0b12ccd3",
".git/objects/85/c2eccbcf7ad502ef464ec76cff8f7217c82803": "c15dceedd1ce0b05cef86b8f23493731",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/20d3be912196d0d673ead4ad1b2a5bf633e2eb": "e5629dc4792d4426bfda97269520177c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1fd1377d9ea52968ebb70a9d93fedad15f7581": "418811d375ff10b27af3d2ac0c6e4d59",
".git/objects/8d/fedc03cd0ab0cc423c9245d4beb2a364603411": "acc43d7ade52e59e759c107b460f64ff",
".git/objects/93/ca053f1a10f44d50aa84e28c6467d0f1a4411c": "a44a8c0bac68d086084756d0f24a9e21",
".git/objects/95/7d3368117ce7348561acf9e0a454b35686bf26": "e3e04bac6e6e2660d20ca3b0f88b11a2",
".git/objects/96/3fd9cfea87d6c1350377faf86a510fe2f18640": "83916c3c40f1868ac18ded048f4fb182",
".git/objects/9b/abdec9444846886a2d21aadeea3f6a400cf9ef": "4b0b8f95ed0c41a2d82633fd1a2b674c",
".git/objects/9d/1a66b2b29bc029408e1a1388b9ee4643f37794": "a247a5380573b16b494a0dc3912de552",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/30b6e1a71aff601d2d80c4b19fd342b28f37bc": "385447b5fdc3fb3f5e0686df9b27d089",
".git/objects/a7/c9df5f2146f2a9dcb405f680e79747dc51c035": "4f8af2306245b6471b1d450a31394f11",
".git/objects/a8/b9614ad4b40089a8860971088e6039f999ae89": "281e86f64fdbb02929af01e5a7b4928c",
".git/objects/b0/69799c3fc73a7e3740333ae22acfe54eed9600": "89461b9a2d61f48b93bad2072bf4511b",
".git/objects/b1/3702b771debb8288f5868f2bba04a08e626b8a": "2056ce3adb4e321ff3567191efb26bab",
".git/objects/b7/3f3152ad15a08618f048cc725be45f760456ec": "b967cf16912805d3bec9d9b2bc8d0d03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a7c1b9050c8ac8dd2c721c189ec98d10865d5b": "be242653ceea52ab50739cff8323b47d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/095b53aecae931ed99b84fb6754dbeb8f2475a": "47c2ffaa156a69737ae2b4ccadec7350",
".git/objects/be/0224373cc122553bd27e8e02f10497583242ef": "3231716dcab3ba11b1cd2bf8facbce00",
".git/objects/bf/49a708fa6c033e7f77f20289732b800f87c554": "2a56e6bbf5985b72f7504d6d1c72351e",
".git/objects/c7/61317fa6b10a7af0f8cf594cc6461267a4c6d3": "be504d8a8a22372eed82c9666eed7f6e",
".git/objects/c8/240ddcfd1b20f62cbda209f379d1113622b9d7": "e79148cd4c922e7da44514947efba325",
".git/objects/cb/c27e3d63571f74bacbf3643fe248bd6f9d5c69": "8348e9d3dd6433e528234645eeb52deb",
".git/objects/ce/55fdf91224818b123b0a1f15011111c6081801": "dd8f9a62a3c7248cfa4e88bbcd1c716c",
".git/objects/ce/72b8d7383acb9c33a33f7e96000af37114b500": "f037be677d5be95c4f5d6238b90c01f7",
".git/objects/d1/ac8b2aadd158bec18f1e82ff00f4da4dba8fa4": "67861d169cd0eb4306446f9577148b11",
".git/objects/d4/79f728c53d0de88b3b508826b2a5946384ec84": "3a8aa13f326fa8fb7063e19c1bd61fa2",
".git/objects/d5/0fd9de8e43929669cc71435ef4fc2abcb1ffa6": "ab99084ac289474f6bf34b2dcf48e3df",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/0e6af629fa0f1cbf98aee8821bc8a2535f39a9": "80eb0e37bf832dee65b63aa476d8f71f",
".git/objects/de/1d863999d93aed0dc22f901d939f940b61978d": "4f984d7633d8b0ed5d1c1e026488e5cf",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/82b0bb4d6a00bff2b767e3236afacb1ca2d5a4": "e175fb4653b79abae3792e2dd80a7eb7",
".git/objects/e3/ed3e5e7e835afaab38fea7bbe5ba44fb89104c": "554a76419bce49d0dd566763ff5edd07",
".git/objects/e5/440eec78108c8e10bb81996c3c84bf0fd1ec17": "eddb8a39fa447bc74f1dd2122633f8bd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/0a2b83b47d6adb2e0a55398a9b881af8cac03e": "2c3d94daae32cfc723b38adde40588d1",
".git/objects/e9/63c7dfa10971fcb321bc2c264852404264c38b": "bec49e094a5707170e0515ebe7594d05",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/2bc387c7c9a4b575bff620c735700e353866f7": "2c6587a4fd5c40c0e293b1c93ed8261f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ae828624acfe5292c5b15a5b94628a9cf316d1": "13db5d20895bb7ea873c612780d41c6c",
".git/objects/ed/b80e1d530804eec889757c2c0c714228c17b85": "433ce8cf2965287901249f1801fe0e39",
".git/objects/ef/f97546737beaf4aae2f88835d8b11330c06728": "104a81c767cea8371237c09c106290fb",
".git/objects/f4/aeff05af606de3fbec9ac55164d971bd19d752": "09ac9952c1bf0613f2cd9020da9ef4e2",
".git/objects/f9/dfe78e8f3c107daed91dfdf720a0fd78a8aa8f": "a0e98854cb0c5537a0393985e5cf4fb1",
".git/objects/fb/ad18ea3f702a0134e631180b15c06986f57af3": "4ff2cd1b5e88406db069f7c4e8c16ee4",
".git/ORIG_HEAD": "3cb24706cae3a0fe28402e4507c0082c",
".git/refs/heads/main": "9c6bcba59b3f574e09fac74296c0c03b",
".git/refs/remotes/origin/main": "9c6bcba59b3f574e09fac74296c0c03b",
".git/refs/stash": "84bc0d70246edf7426b555ddb7cd7246",
"assets/AssetManifest.json": "f091ac9878981f6bac1c7b87381cdc60",
"assets/assets/10MinuteMeditation.mp4": "5c2235a8515bc1db79bfbc9a83205e7d",
"assets/assets/AcceptingEmotionsMeditation.mp4": "6bbed55cce50ec94ca07b8783c35c4a7",
"assets/assets/ACTModule2-CreativeHopelessness/Audio%2520file%25201.%2520Introduction%2520of%2520this%2520module%2520(1%25E2%2580%259904%25E2%2580%2599%25E2%2580%2599).m4a": "afe8e4566415e2c700385d891be225fa",
"assets/assets/ACTModule2-CreativeHopelessness/Audio%2520file%25202.%2520Man-in-the-hole%2520metaphor%2520(1%25E2%2580%259918%25E2%2580%2599%25E2%2580%2599).m4a": "ada9ec2f36eadbef983174c1c6ae496e",
"assets/assets/ACTModule2-CreativeHopelessness/Audio%2520file%25203.%2520Chinese%2520handcuffs%2520metaphor%2520(0%25E2%2580%259959%25E2%2580%2599%25E2%2580%2599).m4a": "a04c8d6feedba4e5a4baf780e4ff5df1",
"assets/assets/ACTModule2-CreativeHopelessness/Audio%2520file%25204.%2520Tug-of-war%2520metaphor%2520(1%25E2%2580%259952%25E2%2580%2599%25E2%2580%2599).m4a": "43e038e9cd4dc52240de9a26a1e9041d",
"assets/assets/ACTModule2-CreativeHopelessness/Audio%2520file%25205.%2520Quicksand%2520metaphor%2520(0%25E2%2580%259957%25E2%2580%2599%25E2%2580%2599).m4a": "34572e4b2515f4058b0ee52210b21764",
"assets/assets/ACTModule2-CreativeHopelessness/Audio%2520file%25206.%2520Instructions%2520for%2520the%2520worksheet%25E2%2596%25A1%2520Creative%2520Hopelessness%2520Worksheet%2520(0%25E2%2580%259938%25E2%2580%2599%25E2%2580%2599).m4a": "185c79a223398e911ccc899ed79b656e",
"assets/assets/ACTModule2-CreativeHopelessness/Audio%2520file%25207.%2520Instructions%2520for%2520a%2520guided%2520exercise%2520video%2520clip%2520for%2520difficult%2520feelings%2520(0%25E2%2580%259937%25E2%2580%2599%25E2%2580%2599)%2520.m4a": "96acabf44ae4907429e869e1316d11aa",
"assets/assets/DemonsOnTheBoat.mp4": "573c3cbbe394ec74cb6cd0bdc7caeb5e",
"assets/assets/GriefLoss.mp4": "d2682a50aa623ff477f08e7f4692f46c",
"assets/assets/LeavesOnAStream.mp4": "0a297a075c56b1c1d19e457e07facf7d",
"assets/assets/MakingSpace.mp4": "437a682218ecb793596b4ca089c955a1",
"assets/assets/ObserverSelfExercise.mp4": "de949940eb0dd1281558730339dc4384",
"assets/assets/PracticeExercise1.mp4": "02bfa7e9c7e70574e31631a03f05a542",
"assets/assets/PracticeExercise2.mp4": "10633ed464c920156f08b272f345f111",
"assets/assets/PracticeExercise3.mp4": "168f521f9d275cfd2f2dd6c9c3bbc584",
"assets/assets/PracticeExercise4.mp4": "9db40c3e9953efd2b988fb99f75a2846",
"assets/assets/TheStruggleSwitch.mp4": "a8487963e6554e9cf11b7c0275a8f279",
"assets/assets/Training-Acceptance/AcceptanceAnxiety.mp3": "931fd2b57b8794ccb3af4ab9a6ce56f9",
"assets/assets/Training-Acceptance/LocatingEmotions.m4a": "e45a6c9f6e5a0539b21c812ff83fe598",
"assets/assets/Training-Acceptance/MeditationWorkingDifficulties.mp3": "f1c3b3308429f45368a634e085a48c43",
"assets/assets/Training-Acceptance/MindfulnessEmotions.m4a": "55b01ddd61114c17ed959486e9df488c",
"assets/assets/Training-Acceptance/PhysicalizingEmotion.m4a": "f4a06937df6afc22adc93a17bdfc1386",
"assets/assets/Training-Acceptance/TakingAction.m4a": "2e2a1e565d90908b90a69ed699d707e4",
"assets/assets/Training-Defusion/DisobeyOnPurpose.m4a": "384c71b7e6257aef2e965ac91360be75",
"assets/assets/Training-Defusion/GiveTheMind.m4a": "f31b5c694153942006da9a6d323874a8",
"assets/assets/Training-Defusion/LabelingThoughts.m4a": "eaf1d07464d2e2a2efcb4943680a36bf",
"assets/assets/Training-Defusion/MovieScreen.m4a": "be8969bccb99040d72018d07169bfa4b",
"assets/assets/Training-Defusion/SushiTrain.m4a": "e5a0204c7ea384cda874445731a011f1",
"assets/assets/Training-Observer/BlueGlasses.m4a": "a4af4dd768a0339c468c1b896da166af",
"assets/assets/Training-Observer/Chessboard.m4a": "e397a708a7d445f354c10d92fc4bde00",
"assets/assets/Training-Observer/ObserverSelfMetaphors.m4a": "38261ad0cbb5152b4d5547075ad6fa71",
"assets/assets/Training-Present/Anchoring.m4a": "79272d891f89469b9f6a20b65db016d8",
"assets/assets/Training-Present/BodyScanMeditation.mp3": "7aa14bd00fa5c9ed3e3c436a03898f04",
"assets/assets/Training-Present/BreathingMeditation.mp3": "2481bfa3f2f83a7ed5e992f3b346c1fe",
"assets/assets/Training-Present/MindfulActivities.m4a": "becfff09869de8ec73c64be18c2efb2e",
"assets/assets/Training-Present/MindfulBreathing.m4a": "fd76d9d438a852a32bd736013f74f221",
"assets/assets/Training-Present/MindfulEating.m4a": "1544f00ac08140eaa1f81ec021228476",
"assets/assets/Training-Present/MindfulnessOfBreath.mp3": "0b4bada3f6580cc1966bd1fcab565bad",
"assets/assets/Training-Present/SoundBodyMeditation.mp3": "c9c2cde0d1475fc0dc340480c4111d5a",
"assets/assets/UnwelcomePartyGuest.mp4": "d4b6bf5096663ae3e0f34f64133d3b36",
"assets/FontManifest.json": "797892e376b6ed09513e57e4841de795",
"assets/fonts/Courgette-Regular.ttf": "cbd252f5c26cd61243888be1891f9921",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/MaterialIcons-Regular.ttf": "0f900b1d6585ac3d1cdffa01f420472e",
"assets/NOTICES": "3553ad495e612eff74b5c83ed618ad68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/survey_kit/assets/fancy_checkmark.json": "ba198bdf17f5a9a97e89d74c61921edb",
"assets/packages/youtube_player_iframe/assets/player.html": "3e1f3fad6eb85b36d87c8cf245306e0e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "067a1e066540c03901a6f927e6b0d04e",
"/": "067a1e066540c03901a6f927e6b0d04e",
"main.dart.js": "1d61f5b8479c4b0d8766f8a14b22da1a",
"manifest.json": "17866c5dc455070d0c4934d9b0e50cc4",
"version.json": "504bcbc18337c9784bdf96e4bf415224"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
