/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

/**
 * モジュール宣言
 */

var bodyParser = require('body-parser')
var EventEmitter = require('events').EventEmitter;
var mixin = require('merge-descriptors');
var proto = require('./application');
var Route = require('./router/route');
var Router = require('./router');
var req = require('./request');
var res = require('./response');

/**
 * `createApplication()`を表出させる
 */

exports = module.exports = createApplication;

/**
 * expressアプリケーションを作る
 *
 * @return {Function}
 * @api public
 */

function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next);
  };

  //EventEmitterはNodeで新しいイベントを作るときに使う関数
  mixin(app, EventEmitter.prototype, false);
  mixin(app, proto, false);

  //* リクエストを準備するプロトタイプを表出させる
  app.request = Object.create(req, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })

  //* レスポンスを準備するプロトタイプを表出させる
  app.response = Object.create(res, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })

  app.init();
  return app;
}

/**
 * プロトタイプを表出させる。
 */

exports.application = proto;
exports.request = req;
exports.response = res;

/**
 * コンストラクタを表出させる。
 */

exports.Route = Route;
exports.Router = Router;

/**
 * ミドルウェアを表出させる。
 */

exports.json = bodyParser.json
exports.query = require('./middleware/query');
exports.raw = bodyParser.raw
exports.static = require('serve-static');
exports.text = bodyParser.text
exports.urlencoded = bodyParser.urlencoded

/**
 * 適切なエラーメッセージと共に、消されたミドルウェアにとってかわる。
 */

var removedMiddlewares = [
  'bodyParser',
  'compress',
  'cookieSession',
  'session',
  'logger',
  'cookieParser',
  'favicon',
  'responseTime',
  'errorHandler',
  'timeout',
  'methodOverride',
  'vhost',
  'csrf',
  'directory',
  'limit',
  'multipart',
  'staticCache'
]

removedMiddlewares.forEach(function (name) {
  Object.defineProperty(exports, name, {
    get: function () {
      throw new Error('Most middleware (like ' + name + ') is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.');
    },
    configurable: true
  });
});
