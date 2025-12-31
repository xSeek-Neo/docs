/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "173635-14729817956499.jpg",
    "revision": "470b442315cd11380c8b3ed51ed18c5f"
  },
  {
    "url": "404.html",
    "revision": "2455459dd6c8db36920b00e092115e64"
  },
  {
    "url": "A.HTML5.html",
    "revision": "55bab48117b568efb3d9ad1f5e6736c3"
  },
  {
    "url": "assets/css/0.styles.a9377658.css",
    "revision": "882f59b313990313e0b54d2e2ccf2cd3"
  },
  {
    "url": "assets/img/async_defer.a91b55bb.jpg",
    "revision": "a91b55bb972595d902edad6c5d14424e"
  },
  {
    "url": "assets/img/commitizen.02545ebd.png",
    "revision": "02545ebde070dc6622225d47c81be12c"
  },
  {
    "url": "assets/img/commitLint.281a1c9b.png",
    "revision": "281a1c9b5f32825810f31eff2f617567"
  },
  {
    "url": "assets/img/husky_install.bf0b1d8e.png",
    "revision": "bf0b1d8e72c4ae7bcdae21c466e13219"
  },
  {
    "url": "assets/img/pre-commit-hooks.e2abf788.png",
    "revision": "e2abf788eabdee7b9e7d95a25ad812f7"
  },
  {
    "url": "assets/img/prototype.3ee04ff5.png",
    "revision": "3ee04ff512a68800c014b66de0f6b3f2"
  },
  {
    "url": "assets/img/react-lifeCycle.fcb60197.png",
    "revision": "fcb60197a7f2bdad898b231a09aa5c95"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.310dd804.js",
    "revision": "e4d62aa827dc4b0850b10b9572470aae"
  },
  {
    "url": "assets/js/11.b5971ed6.js",
    "revision": "c2caab4ae93e349d0079923b250edc01"
  },
  {
    "url": "assets/js/12.df494d0c.js",
    "revision": "1aeb07f5a6e5877fd624234df41ba880"
  },
  {
    "url": "assets/js/13.ed3696cc.js",
    "revision": "6539d5491e5f3a3bcbf67abb0c8b532f"
  },
  {
    "url": "assets/js/14.5a912372.js",
    "revision": "9865fc0a35c97d6ce98e0b105ba0123a"
  },
  {
    "url": "assets/js/15.f5749a7f.js",
    "revision": "8c2c110e46b095804f516f029b592ca9"
  },
  {
    "url": "assets/js/16.d88a2e4c.js",
    "revision": "979bf504881c2dc768088a5ff83e0ca1"
  },
  {
    "url": "assets/js/17.2239bfee.js",
    "revision": "de3f7b91819421959e8940016342ea72"
  },
  {
    "url": "assets/js/18.e92dd762.js",
    "revision": "56d742e5a7bfda558b1520167f46cfa3"
  },
  {
    "url": "assets/js/19.1dce0e6d.js",
    "revision": "93a56d0cb5b195372e2a48634d5faa3d"
  },
  {
    "url": "assets/js/2.959c8da4.js",
    "revision": "42373177876a1896dfabc7fece61fc03"
  },
  {
    "url": "assets/js/20.740c71f6.js",
    "revision": "0b6b66fe9163a0988cfc7c4b0c2b45fa"
  },
  {
    "url": "assets/js/21.cb775a35.js",
    "revision": "9b40f41c238c07f435526ad0aa780c50"
  },
  {
    "url": "assets/js/22.df72b290.js",
    "revision": "5c54fbc3959b8d625943c9c03fa64f87"
  },
  {
    "url": "assets/js/23.a936b857.js",
    "revision": "dcb93de9e4d2563b3b8b7fb84841fdf5"
  },
  {
    "url": "assets/js/24.f66c2a95.js",
    "revision": "2c5cd92cdd277fb90b3de9fcf26da1f1"
  },
  {
    "url": "assets/js/25.4266a2e2.js",
    "revision": "a6a8b596789c9849e6b42539dd1d1d67"
  },
  {
    "url": "assets/js/26.41bab5b0.js",
    "revision": "3053682bf6a8548bd21d0142ea02c9b0"
  },
  {
    "url": "assets/js/27.df5cf59a.js",
    "revision": "48b41deac8d66404b16af91a1f127333"
  },
  {
    "url": "assets/js/28.3fd8b84c.js",
    "revision": "844e28755518ae2ea7068007a9fdc3a3"
  },
  {
    "url": "assets/js/29.03ca09ae.js",
    "revision": "11f567b06fe9d839ba2487e23da1e5d5"
  },
  {
    "url": "assets/js/3.940bfe8a.js",
    "revision": "f3eed509e76adc23692e3d457d3a87d2"
  },
  {
    "url": "assets/js/30.b09e5527.js",
    "revision": "0db63587ec80d39eae484be89d2223d3"
  },
  {
    "url": "assets/js/31.cf1f60ef.js",
    "revision": "fd3c682ab0f808520d025c75e65b9623"
  },
  {
    "url": "assets/js/32.25986e78.js",
    "revision": "85abf574b3044ec2b2f5521510e1692e"
  },
  {
    "url": "assets/js/33.d68fc2e0.js",
    "revision": "ff6bfd9e2f142ef16f1ebff792f8b5ed"
  },
  {
    "url": "assets/js/34.b9535464.js",
    "revision": "6ff225bba85147988b53047f56b53df5"
  },
  {
    "url": "assets/js/35.29a2077d.js",
    "revision": "d4975b9935a1bb44182028cbd0910281"
  },
  {
    "url": "assets/js/36.5ce37874.js",
    "revision": "6a29c92919836683fa62a4765980f266"
  },
  {
    "url": "assets/js/37.292a84f5.js",
    "revision": "260efcd4c8fc1691ef1683f2f8c68573"
  },
  {
    "url": "assets/js/38.13e0d3e0.js",
    "revision": "6239a05cd139d04665d7b9dd7d0d1b2e"
  },
  {
    "url": "assets/js/39.c29dcd68.js",
    "revision": "a2dea58e8cdeaa26c013218940aa7d87"
  },
  {
    "url": "assets/js/4.89a06391.js",
    "revision": "eccacb083b15692d7dc8519a353b505f"
  },
  {
    "url": "assets/js/40.1d9e36b1.js",
    "revision": "299dc40ffc2161f9792c43d038ea02fb"
  },
  {
    "url": "assets/js/41.91c2623d.js",
    "revision": "77f278b9df1461c15d52091e77344d65"
  },
  {
    "url": "assets/js/5.55c1efc0.js",
    "revision": "bc1e012ea54556e951934d2ba29d3320"
  },
  {
    "url": "assets/js/6.f8f31b67.js",
    "revision": "a0b52a16247b871d90ebeb0762ae4237"
  },
  {
    "url": "assets/js/7.500fab81.js",
    "revision": "5d6ae3cc749b610e8fecf29ae427b2c8"
  },
  {
    "url": "assets/js/app.a3fe36b2.js",
    "revision": "7a04d9cde965941541afe700debaa31d"
  },
  {
    "url": "assets/js/vendors~docsearch.d9dffa33.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "assets/js/vendors~flowchart.d7dffb21.js",
    "revision": "49bd9ada3cd51d0c56640f2740b6532c"
  },
  {
    "url": "async_defer.jpg",
    "revision": "a91b55bb972595d902edad6c5d14424e"
  },
  {
    "url": "async_defer.png",
    "revision": "14d53726ac7c29e41771559ac1927118"
  },
  {
    "url": "B.CSS3.html",
    "revision": "c7f798073a94fba8dc7515ab539cad44"
  },
  {
    "url": "C.ES.html",
    "revision": "4693e8324ac16c2ee556a1560c6b3b38"
  },
  {
    "url": "D.异步并发.html",
    "revision": "da454d11aff6816450fb79df7075788d"
  },
  {
    "url": "E.浏览器相关.html",
    "revision": "a1f9a2e8799c038b27a7a58cecaa4deb"
  },
  {
    "url": "F.框架.NEXT.html",
    "revision": "3a2613983173e74bd40f61cd2cbf7b2b"
  },
  {
    "url": "F.框架.REACT.html",
    "revision": "450a308ee2eddeedcaeb95acdffc3c7c"
  },
  {
    "url": "F.框架.VUE.html",
    "revision": "00f144579f6b01d697ed1c28826f0e71"
  },
  {
    "url": "G.工程化构建.html",
    "revision": "78850afa2488ce62d2fdc348e71694a6"
  },
  {
    "url": "H.性能优化.html",
    "revision": "e7b9e02fdd2ec33c1398ceb743a39250"
  },
  {
    "url": "I.HTTP协议.html",
    "revision": "b77ed75824486b02067ff727e074f94e"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "d51bb08377ffdd6cfc5048df1b2dfd11"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4c014af3155a6046ed12cff5b4139bba"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "21d9fc176279ced5861e54288c3978b4"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "0b3dede44d6493005131ec00e71bcdcb"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "8741b3927ffe0729c0886e36ee003403"
  },
  {
    "url": "imgs/001.jpg",
    "revision": "7bd595c86b76f6ea37e1b51e8f8cb1bc"
  },
  {
    "url": "imgs/002.jpg",
    "revision": "e41344df6d45b3969f392c1e1a2ee1a0"
  },
  {
    "url": "imgs/003.jpg",
    "revision": "a0910f47886405f2280153cfcc07b424"
  },
  {
    "url": "imgs/004.jpg",
    "revision": "02a9b17fd2cf94254fd2cac1c9dde059"
  },
  {
    "url": "imgs/005.jpg",
    "revision": "ed12bce94690e784872c9923cbc32cd4"
  },
  {
    "url": "imgs/006.jpg",
    "revision": "1f0c5ac84be87cf41a9e589c067c29b7"
  },
  {
    "url": "imgs/007.jpg",
    "revision": "ac2fe964ab727804a5a811b452fd5581"
  },
  {
    "url": "imgs/008.jpg",
    "revision": "b85d399532ac24b4c55387439c00517b"
  },
  {
    "url": "imgs/009.jpg",
    "revision": "a4b4fedce4732f460a644bfd13907ac1"
  },
  {
    "url": "imgs/010.jpg",
    "revision": "6a5d64e9f5b95eafcc11c01b9d684a0a"
  },
  {
    "url": "imgs/011.jpg",
    "revision": "8dff57ff7ec4f79c0592f1011ea53dd9"
  },
  {
    "url": "imgs/012.jpg",
    "revision": "872105652fd33a64f72b533ead6d2af6"
  },
  {
    "url": "imgs/013.jpg",
    "revision": "96771c335e1e580b2fd6be319e163a1b"
  },
  {
    "url": "imgs/014.jpg",
    "revision": "37a8313654d413301998aa6ea38506ab"
  },
  {
    "url": "imgs/015.jpg",
    "revision": "be0e5b4565f972ae2bee38c6341fbdf0"
  },
  {
    "url": "imgs/016.jpg",
    "revision": "37a9afd6b10e7b29af71ef7f64de2277"
  },
  {
    "url": "imgs/017.jpg",
    "revision": "b85d399532ac24b4c55387439c00517b"
  },
  {
    "url": "imgs/018.jpg",
    "revision": "bc72b65ca15d366f473450d7c1af6240"
  },
  {
    "url": "imgs/019.jpg",
    "revision": "0e687d7593d491d33e1e7305320a2352"
  },
  {
    "url": "imgs/020.jpg",
    "revision": "abbb071d7ea535b3222a697b9804569d"
  },
  {
    "url": "imgs/021.jpg",
    "revision": "91e7e5c26b09916d2ef738517da08b27"
  },
  {
    "url": "imgs/022.jpg",
    "revision": "907019545c7a02efdda205ca01679185"
  },
  {
    "url": "imgs/023.jpg",
    "revision": "3098326a70e70bfdf604e6397c56f606"
  },
  {
    "url": "imgs/024.jpg",
    "revision": "41616873cf90ce389d43cfa14f6ce546"
  },
  {
    "url": "imgs/025.jpg",
    "revision": "3703b338d641f666bd60eab132dd4392"
  },
  {
    "url": "imgs/026.jpg",
    "revision": "a99334370534aafb75f3d653fb01f99a"
  },
  {
    "url": "imgs/027.jpg",
    "revision": "37a8313654d413301998aa6ea38506ab"
  },
  {
    "url": "imgs/028.jpg",
    "revision": "c29bea948bf1e4c17a789cfeb9b9e8a0"
  },
  {
    "url": "imgs/029.jpg",
    "revision": "df4d3dc11b343450c8298e003b1b9ec0"
  },
  {
    "url": "imgs/030.jpg",
    "revision": "e0e54642be700b3950f538b2f841e110"
  },
  {
    "url": "imgs/031.jpg",
    "revision": "6373ff86ef70fe56bb034578a8970832"
  },
  {
    "url": "imgs/032.jpg",
    "revision": "07adfdd77e3e8f29e7f42eb6dfdf8dd9"
  },
  {
    "url": "imgs/033.jpg",
    "revision": "f4e4233ef709ea1158697c6a3e8772db"
  },
  {
    "url": "imgs/034.jpg",
    "revision": "3b3cec43061315eaa4ac75662efd9b98"
  },
  {
    "url": "imgs/035.jpg",
    "revision": "d9432f78a3c9656e1055e1a16404a6b9"
  },
  {
    "url": "imgs/036.jpg",
    "revision": "4812a3f9eea772cafbf3ce474e325211"
  },
  {
    "url": "imgs/037.jpg",
    "revision": "60be251de4b5ad011dea7ec2afc28855"
  },
  {
    "url": "imgs/038.jpg",
    "revision": "bafa6e14761824e898f3a4b950afc97d"
  },
  {
    "url": "imgs/039.jpg",
    "revision": "c60776b85d4ccf71ee068ab4c6323319"
  },
  {
    "url": "imgs/040.jpg",
    "revision": "835f9667c2b04d755103240d7eeb0d82"
  },
  {
    "url": "imgs/041.jpg",
    "revision": "5c351b1471c88bee10471420c58cf101"
  },
  {
    "url": "imgs/042.jpg",
    "revision": "74e5254823ffb647f40679350997e875"
  },
  {
    "url": "imgs/043.jpg",
    "revision": "59106d45f3b5247e295387e09ea0c8f5"
  },
  {
    "url": "imgs/044.jpg",
    "revision": "bffb6d70fb0bb957688896a4337a565d"
  },
  {
    "url": "imgs/045.jpg",
    "revision": "eb9bbe60b57b461968e0caa1cd2c5dea"
  },
  {
    "url": "imgs/046.jpg",
    "revision": "44d6473ba45804c63e45af3975b3e795"
  },
  {
    "url": "imgs/047.jpg",
    "revision": "02244df24d52ba3d08282ecc9dd2c4ee"
  },
  {
    "url": "imgs/048.jpg",
    "revision": "2befbf8e965124ee89e8c05c1bb2a489"
  },
  {
    "url": "imgs/049.jpg",
    "revision": "066b6127c649608aefa4800b8fbe6945"
  },
  {
    "url": "imgs/050.jpg",
    "revision": "719d58fe53995eb5e66b2dfeccf98760"
  },
  {
    "url": "imgs/051.jpg",
    "revision": "d60b369f44f58bbc0091f49678895833"
  },
  {
    "url": "index.html",
    "revision": "b8ab2eccf154d018b77361c5a965cd63"
  },
  {
    "url": "K.GIT.html",
    "revision": "9a447776567f1581b37d2f69a98a38c4"
  },
  {
    "url": "K.综合场景题.html",
    "revision": "a784dd3700e858e4b1868ae479fcdedd"
  },
  {
    "url": "L.THIS.html",
    "revision": "51df1e23b8684292cd0773fb70e5e2d9"
  },
  {
    "url": "logo.jpg",
    "revision": "d6313ed729722202f0a8d56d2f7dfb2e"
  },
  {
    "url": "logo.png",
    "revision": "3d686a3791cbeed17a3b01a578e2d87e"
  },
  {
    "url": "N.DOM.html",
    "revision": "b7d41d476aa245d8ecedc6411219a338"
  },
  {
    "url": "R.BOM.html",
    "revision": "93787c23e47321e467aab114eec82730"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
