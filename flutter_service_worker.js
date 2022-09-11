'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "af0ff761aefe4fcb342ac19135d3f1d1",
".git/config": "37998296c4d9c4a0c3e99abe9564d661",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b6fc797603a131e6970270f677b5af6f",
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
".git/index": "81feb396a64d83697c01a829c454b37c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77c0a3ae324c64b295abb906acfcc876",
".git/logs/refs/heads/main": "12eafee6936257f6fc808429f992efb9",
".git/logs/refs/remotes/origin/main": "ca0f3b1491ca345534ae7820632771fe",
".git/logs/refs/stash": "73c2a6d04278f50fc810cafbfc76454b",
".git/objects/06/b608f805118ae41fe86eb4cbc51a33f7ad2e7c": "66e319d3ba27607a6ea82b2a4a24f36d",
".git/objects/08/27ee0d1b2609e7384f6e4341e662af3a8e1c53": "535badbfff8488f963d351f4a52a6751",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/3a8cf370fafb3d09174fbca84583b65d03acf2": "5e6a1dd9f2df080be49c021b52fbf1ef",
".git/objects/22/de0f049aaa9bf8df6d187b145c5dd78585b1f1": "d7dd3ef90f816e8f7bf3067a83817cf8",
".git/objects/23/58ade2f7ec4e24939c3c69249e90c5224cf0f6": "be91a7bdd651376d30321835967ae4b1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/76e5387c3a3b6768c7d46056cb47fb6c5d7b8e": "74480ac89d694a3a48fd216740fd24c8",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/d6f442b7bb053ed84eccfceb1d425f70a20867": "fc8f6848b96999828bf80dae169f0efe",
".git/objects/32/ae7892d982c186a8d0014b78b8deafd4b0637a": "b9c949728d078c54291836a145402688",
".git/objects/36/692b1d8f5ca63ff182bd0250aed8a180b9f629": "7a4f55fa4813752465f1f8a7baf301f4",
".git/objects/3c/0f0b8d227c6334b90bff2d9488a2980cf8d9fa": "95cb5ae2c0b7e76cc938b2fb8ec74972",
".git/objects/45/ef569298981c3674661ce51143af8155fff2c8": "97799ddde7c550fc60bb3e163a8dc9ec",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/48/e31fc0ff36980b8b67440326c5b221fe8f3b5e": "5cc021a63efc1a2d003072786047191a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/55/2e7ac4b6cf96e29e76cd0a6dd77473f55bee36": "49b00c149b1cffba89abba842d24fb78",
".git/objects/5a/6ca7acc7f2905d1d4382f7f6fbde785bd78908": "d6a0a3b491f0effb449be257e849ac59",
".git/objects/5a/e3df5757c3a97ee413b2be975d5fb594c92532": "27e3f2a4e1530d8c45ec7880a74484fd",
".git/objects/5c/f337156520107a99efd2cf077913a0aaf4def5": "153da8a28f4cfc01abc5291ec9a06733",
".git/objects/60/d0a173ec23d8ec5c4c24c98e7f5bee1291a6c1": "0e50ec50d6a6319bcfa3292ad5956687",
".git/objects/66/c224dbee1316e639f039865f36147ed2b48719": "6a865645b22153371920758979bedc7d",
".git/objects/6a/6329d778ec85b190701d126218ce37fc7563ee": "724c73a89f26698428e673584f1db10e",
".git/objects/6b/624398c240b31adcaea6d6927cfcefd77c528c": "db1734d9279c74a221eddbe4f580b5b6",
".git/objects/6d/34a21dd4b246e66b7000e4e6d36abdef154510": "ef3dd426212fb61d9a69cae6c7fc16f7",
".git/objects/72/c878770c88eb000e04f8bdeb97a848338d2461": "e770c751dc4891b8145c020b5d1360a1",
".git/objects/75/8492995705b8446bc021d6fa78e874f512eedb": "0e20e905d4ec63c40527a269d6666a51",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/10c0f99e07f5f60135d31411d27036fcfb49a4": "e1a4fee11e8c466d1faa759c9c6c2c2c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/322e96367ff7d45157a5b2f5293672caa48f9b": "e6951d5d026e715d398313ae71244690",
".git/objects/82/cf19ed34b686660000f9afd8c72dee1e963a73": "3c914aa9148141c228bc2bde0b12ccd3",
".git/objects/85/c2eccbcf7ad502ef464ec76cff8f7217c82803": "c15dceedd1ce0b05cef86b8f23493731",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1fd1377d9ea52968ebb70a9d93fedad15f7581": "418811d375ff10b27af3d2ac0c6e4d59",
".git/objects/93/ca053f1a10f44d50aa84e28c6467d0f1a4411c": "a44a8c0bac68d086084756d0f24a9e21",
".git/objects/95/7d3368117ce7348561acf9e0a454b35686bf26": "e3e04bac6e6e2660d20ca3b0f88b11a2",
".git/objects/9b/abdec9444846886a2d21aadeea3f6a400cf9ef": "4b0b8f95ed0c41a2d82633fd1a2b674c",
".git/objects/9d/1a66b2b29bc029408e1a1388b9ee4643f37794": "a247a5380573b16b494a0dc3912de552",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/c9df5f2146f2a9dcb405f680e79747dc51c035": "4f8af2306245b6471b1d450a31394f11",
".git/objects/a8/b9614ad4b40089a8860971088e6039f999ae89": "281e86f64fdbb02929af01e5a7b4928c",
".git/objects/b0/69799c3fc73a7e3740333ae22acfe54eed9600": "89461b9a2d61f48b93bad2072bf4511b",
".git/objects/b1/3702b771debb8288f5868f2bba04a08e626b8a": "2056ce3adb4e321ff3567191efb26bab",
".git/objects/b7/3f3152ad15a08618f048cc725be45f760456ec": "b967cf16912805d3bec9d9b2bc8d0d03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a7c1b9050c8ac8dd2c721c189ec98d10865d5b": "be242653ceea52ab50739cff8323b47d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/095b53aecae931ed99b84fb6754dbeb8f2475a": "47c2ffaa156a69737ae2b4ccadec7350",
".git/objects/bf/49a708fa6c033e7f77f20289732b800f87c554": "2a56e6bbf5985b72f7504d6d1c72351e",
".git/objects/c8/240ddcfd1b20f62cbda209f379d1113622b9d7": "e79148cd4c922e7da44514947efba325",
".git/objects/ce/55fdf91224818b123b0a1f15011111c6081801": "dd8f9a62a3c7248cfa4e88bbcd1c716c",
".git/objects/ce/72b8d7383acb9c33a33f7e96000af37114b500": "f037be677d5be95c4f5d6238b90c01f7",
".git/objects/d1/ac8b2aadd158bec18f1e82ff00f4da4dba8fa4": "67861d169cd0eb4306446f9577148b11",
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
".git/objects/ef/f97546737beaf4aae2f88835d8b11330c06728": "104a81c767cea8371237c09c106290fb",
".git/objects/f9/dfe78e8f3c107daed91dfdf720a0fd78a8aa8f": "a0e98854cb0c5537a0393985e5cf4fb1",
".git/objects/fb/ad18ea3f702a0134e631180b15c06986f57af3": "4ff2cd1b5e88406db069f7c4e8c16ee4",
".git/ORIG_HEAD": "f5a4638ec32dc66db79c4c11e5658925",
".git/refs/heads/main": "7e0b13d2eedd066b4144f2803cb2e5ac",
".git/refs/remotes/origin/main": "7e0b13d2eedd066b4144f2803cb2e5ac",
".git/refs/stash": "84bc0d70246edf7426b555ddb7cd7246",
"assets/AssetManifest.json": "90af9b7c768cbf205aadd312a3c30403",
"assets/assets/10MinuteMeditation.mp4": "5c2235a8515bc1db79bfbc9a83205e7d",
"assets/FontManifest.json": "797892e376b6ed09513e57e4841de795",
"assets/fonts/Courgette-Regular.ttf": "cbd252f5c26cd61243888be1891f9921",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/MaterialIcons-Regular.ttf": "0f900b1d6585ac3d1cdffa01f420472e",
"assets/NOTICES": "8a16913a833096909ae579a37bf1a7ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/survey_kit/assets/fancy_checkmark.json": "ba198bdf17f5a9a97e89d74c61921edb",
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
"index.html": "a06689ae7122a069e77cbd8d8d520f67",
"/": "a06689ae7122a069e77cbd8d8d520f67",
"main.dart.js": "5169d2a1a46debb4e26c21aa1708f04a",
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
