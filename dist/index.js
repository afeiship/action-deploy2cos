"use strict";
/*!
 * name: @jswork/http-schema
 * description: Http schema based on next-fetch.
 * homepage:
 * version: 1.0.0
 * date: 2021-05-21 11:23:30
 * license: MIT
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_rest_config_1 = __importDefault(require("@jswork/http-rest-config"));
exports.default = (function (inConfig, inRequest, inOptions) {
    var context = {};
    var http = inRequest.getInstance(inOptions);
    http_rest_config_1.default(context, http, inConfig);
    return context;
});
