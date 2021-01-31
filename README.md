### <p align="center"><img width="150px" height="150px" src="https://raw.githubusercontent.com/gokulkrishh/demo-progressive-web-app/master/images/icons/android-chrome-192x192.png"></p>
ローカル環境に起動する手順

step1：
$ npm install

step2:
$ npm run start

In browser, open [http://localhost:3000](http://localhost:3000)


### Get started with PWA Development


デプロイファイルは以下：

├── .well-known                  // PWAとAPKの連携
　　└── assetlinks.json　　　　　 //  PWAとAPKの連携KEYを設定する
├── css                         // 画面のスタートフォルダ
├── images                      // 画像のフォルダ
├── js                          // jsフォルダ
│   └── main.js 
├── index.html                  // ホームページ
├── manifest.json               // PWAとして振る舞うための設定情報を記述
└── serviceWorker.js　　　　　　 // SWを登録する