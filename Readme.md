
# express-jp-commented
Setting now.
I'll read all code of Express and comment for understanding it.
This is MIT Licensed.

On original comment,I add "*" at the head.

## references
- https://qiita.com/YutaSaito1991/items/59717ac866d2749e75b2
- https://qiita.com/Shiruba/items/0543415d9a410390e0b8
- https://www.sohamkamani.com/blog/2018/05/30/understanding-how-expressjs-works/

## 挙動
express.jsで各種ファイルをappにmixinして返す。その後そのインスタンスのgetterに書きたい挙動を書くと、expressは特定のポートでlisten可能となる。


# express
  [node](http://nodejs.org)で動く、素早く柔軟でミニマリストな web framework。

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

```js
// index.js呼び出し

// express.jsが呼ばれ各種ファイルがmixinされたappが返される
const express = require('express')
const app = express()


// lib/applications.jsのmethods.forEachにてpathを元に特定のメソッドを実行
app.get('/', function (req, res) {
  res.send('Hello World')
})

// http　listen開始
app.listen(3000)
```

## Installation

[Node.js](https://nodejs.org/en/)で[npm registry](https://www.npmjs.com/)を通して使用可能。

インストール前に[Node.jsを落としてインストールする](https://nodejs.org/en/download/).
Node.js 0.10かそれ以上のバージョンが必要。

新しいプロジェクトを作るなら、`package.json`を最初に作ろう。  [`npm init` コマンド](https://docs.npmjs.com/creating-a-package-json-file)だ.

[`npm install` コマンド](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)を使えばインストールは完了する。

```bash
$ npm install express
```

詳細は[our installing guide](http://expressjs.com/en/starter/installing.html)にて。

## 機能

  * 堅牢なルーティング
  * ハイパフォーマンスに注力
  * 超高テストカバレッジ
  * HTTPヘルパー (リダイレクト、キャッシング等)
  * 14以上のテンプレートエンジンをサポートするビューシステム
  * コンテントネゴシエーション
  * アプリケーションを素早く生成可能な実行ファイル（Executable for generating applications quickly）

## 文書＆コミュニティ

  * [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/expressjs/expressjs.com)]
  * [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
  * [GitHub Organization](https://github.com/expressjs) for Official Middleware & Modules
  * Visit the [Wiki](https://github.com/expressjs/express/wiki)
  * [Google Group](https://groups.google.com/group/express-js) for discussion
  * [Gitter](https://gitter.im/expressjs/express) for support and discussion

**PROTIP** Be sure to read [Migrating from 3.x to 4.x](https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x) as well as [New features in 4.x](https://github.com/expressjs/express/wiki/New-features-in-4.x).

### セキュリティイシュー

もしexpressにセキュリティ面で脆弱性を見つけたら、[Security Policies and Procedures](Security.md)を見てほしい.

## クイックスタート

  一番いい方法は[`express(1)`](https://github.com/expressjs/generator)を使って下記のようにアプリケーションを生成する事だ。

　実行ファイルをインストールする。実行ファイルのメジャーバージョンはexpressのものと一致する（The executable's major version will match Express's:）。

```bash
$ npm install -g express-generator@4
```

  アプリを作る:

```bash
$ express /tmp/foo && cd /tmp/foo
```

  dependenciesをインストールする:

```bash
$ npm install
```

  サーバーを起動する:

```bash
$ npm start
```

  http://localhost:3000　を見てみよう。

## Philosophy

  expressの哲学は小さく強健な、SPAやウェブサイトやハイブリッドやパブリックHTTPAPIを作る為のHTTPサーバーツールを提供する事だ。

  expressは特定のORMやテンプレートエンジンの使用を強制しない。14以上のテンプレートエンジンが[Consolidate.js](https://github.com/tj/consolidate.js)ごしに提供される。貴方は貴方のパーフェクトなフレームワークを素早く構築できる。


## Examples

　サンプルを見るには、Expressのリポジトリをクローンしてdependenciesをインストールしてほしい。

```bash
$ git clone git://github.com/expressjs/express.git --depth 1
$ cd express
$ npm install
```

  どのサンプルでも動く。

```bash
$ node examples/content-negotiation
```

## Tests

　テストスイートの実行は、dependenciesインストール後、`npm test`。

```bash
$ npm install
$ npm test
```

## コントリビュート

[Contributing Guide](Contributing.md)

## People

Expressは[TJ Holowaychuk](https://github.com/tj)作。

最新のリードエンジニアは[Douglas Christopher Wilson](https://github.com/dougwilson)

[List of all contributors](https://github.com/expressjs/express/graphs/contributors)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
[downloads-image]: https://img.shields.io/npm/dm/express.svg
[downloads-url]: https://npmcharts.com/compare/express?minimal=true
[travis-image]: https://img.shields.io/travis/expressjs/express/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/express
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
