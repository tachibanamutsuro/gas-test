# gas-test

GASコードを管理するリポジトリ

| 技術要素   | バージョン | 説明                                                  |
|------------|------------|-------------------------------------------------------|
| TypeScript | 5.8.3      | Microsoft 製の型が有る JavaScript スーパーセット。    |
| fnm        | 1.35.1     | Node.js マネージャー。(fnm は Fast Node Manager の略) |
| Node.js    | 22.15.0    | JavaScript の実行環境。                               |
| npm        | 8.11.0     | Node.js のパッケージ管理システム。                    |
| ESLint     | 8.57.1     | JavaScript・TypeScript リンター。                     |
| Prettier   | 3.5.3      | コードフォーマッター。                                |

【WIP】VSCodeにおけるPrettier及びESLintの設定はこちら【暫定】
- [Prettier](https://techtekulife.jp/vscode-prettier/)
- [ESLint](https://techtekulife.jp/vscode-eslint/)

[GASについて参考](https://docs.google.com/presentation/d/1VdFTbETES_iu6_ie1pbI9Lw-o9GhpT8dPyQ3t-rVEEE/edit?slide=id.g35cc79a9d3f_0_10#slide=id.g35cc79a9d3f_0_10)

## 事前準備

1. 【まだインストールしていない方向け】fnmをインストールする。(22.15.0もインストールしておく。)

```sh
brew install fnm
fnm install 22.15.0

node -v // v22.15.0であることを確認する
```

2. claspにアクセスできるよう設定する。

自分の[Apps Scriptの設定画面](https://script.google.com/home/usersettings) で`Google Apps Script API`を`ON`にする

3. clasp-dev.jsonを準備します。

```sh
cp clasp.example.json .clasp-dev.json
```

4. .clasp-dev.jsonの設定
生成した`.clasp-dev.json`に下記の設定を行う
   - `parentId`に自分のスプレッドシートのPARENTIDを設定する(スプレッドシートのURLのこの部分`https://docs.google.com/spreadsheets/d/{PARENTID}/~`)
   - `scriptId`に自分のスプレッドシートのAPPSSCRIPTに紐づくSCRIPTIDを設定する(APPSSCRIPTのURLのこの部分 `https://script.google.com/home/projects/{SCRIPTID}/edit`)

5. claspにログインする。

1でv22.15.0であることを確認できれば
```sh
npm install
clasp login
```
を実行する。

Google にログインの画面が表示するので、アカウントの選択で`自分のアカウント`を選択 ⇨ `続行`ボタンを押下する。
⇨ `Logged in! You may close this page.`の画面が表示されると成功する。

## 実行方法

```sh
npm run build
npm run deploy
```

の実行よりclasp-dev.jsonに設定されているscriptIDのAppsScriptに反映されます。
