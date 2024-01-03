<h1 align="left">Express + TypeScript</h1>

###

<h3 align="left">🛠 語言套件</h3>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" alt="npm logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="express logo"  />
  <img width="12" />
  <img src="./etc/typeorm2.png" height="40" alt="redis logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" alt="mysql logo"  />
</div>

###

<h3 align="left">🛠 推薦工具</h3>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" alt="vscode logo"  />
</div>

###

<h3 align="left">📜資料夾結構</h3>

```text
express-ts
│  .env.development
│  .gitignore
│  MEMO.txt
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
│
├─.vscode
│      settings.json
│
├─etc
│      typeorm.png
│      typeorm2.png
│
└─src
    │  app.ts
    │  data-source.ts
    │  routes.ts
    │
    ├─api
    │      getLineOauthVerify.ts
    │      interface.ts
    │
    ├─controller
    │  ├─epilepsy
    │  │      EpilepsyController.ts
    │  │
    │  ├─liff
    │  │      LiffController.ts
    │  │
    │  └─test
    │          TestController.ts
    │
    ├─entity
    │      BodyParts.ts
    │      EpilepsyRecords.ts
    │
    ├─public
    │  └─assets(靜態資源檔目錄)
    │
    ├─types
    │      environment.d.ts
    │
    ├─utils
    │      envConfig.ts
    │      http.ts
    │
    └─views
        │  index.ejs
        │
        ├─epilepsy
        │      index.ejs
        │
        └─liff
                compact.ejs
                full.ejs
                tall.ejs
```

###

- .