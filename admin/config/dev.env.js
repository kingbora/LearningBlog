/**
 * Created by wenbo.kuang on 2018/1/23.
 */
'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
});