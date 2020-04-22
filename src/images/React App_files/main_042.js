webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Piano.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/Piano.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media only screen and (max-device-width: 600px) {\n\n    * {\n      box-sizing:border-box\n    }\n\n    body {\n      margin:0;\n      background-color: #282c34;\n    }\n\n    .piano {\n        margin: auto;\n        background-color: #282c34;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        align-content: center;\n    }\n\n    p {\n        background-color: #282c34;\n        \n    }\n\n    ul {\n      background: transparent;\n      background-color: #282c34;\n      display: block;\n    }\n\n    li {\n      list-style:none;\n      display: inline-block;\n      position:relative;\n    }\n\n    ul .white {\n      height:4em;\n      width:16em;\n      z-index:1;\n      border-left:1px solid #bbb;\n      border-bottom:1px solid #bbb;\n      border-radius:0 0 5px 5px;\n      box-shadow:-1px 0 0 rgba(255,255,255,0.8) inset,0 0 5px #ccc inset,0 0 3px rgba(0,0,0,0.2);\n      background:linear-gradient(to bottom,#eee 0%,#fff 100%)\n    }\n\n    ul .white:active {\n      border-top:1px solid #777;\n      border-left:1px solid #999;\n      border-bottom:1px solid #999;\n      box-shadow:2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);\n      background:linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)\n    }\n\n    .black {\n      height:2em;\n      width:8em;\n      margin:3em 0 0 -8em;\n      z-index:2;\n      border:1px solid #000;\n      border-radius:0 0 3px 3px;\n      box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5);\n      background:linear-gradient(45deg,#222 0%,#555 100%)\n    }\n\n    .black:active {\n      box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5);\n      background:linear-gradient(to right,#444 0%,#222 100%)\n    }\n\n    .a,.g,.f,.d,.c {\n      margin:0em 0em 0em 0em;\n    }\n\n    ul li:first-child {\n      border-radius:5px 0 5px 5px\n    }\n\n    ul li:last-child {\n      border-radius:0 5px 5px 5px\n    }\n\n} /* end mobile only css */\n@media only screen and (min-device-width: 600px) {\n\n\n    * {\n      box-sizing:border-box\n    }\n\n    body {\n      margin:0;\n      background:#222\n    }\n\n    ul {\n      height:18.875em;\n      width:34em;\n      margin:5em auto;\n      padding:3em 0 0 3em;\n      position:relative;\n      border:1px solid #160801;\n      border-radius:1em;\n      background:linear-gradient(to bottom right,rgba(0,0,0,0.3),rgba(0,0,0,0)),url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/187/vwood.png);\n      box-shadow:0 0 50px rgba(0,0,0,0.5) inset,0 1px rgba(212,152,125,0.2) inset,0 5px 15px rgba(0,0,0,0.5)\n    }\n\n    li {\n      margin:0;\n      padding:0;\n      list-style:none;\n      position:relative;\n      float:left\n    }\n\n    ul .white {\n      height:16em;\n      width:4em;\n      z-index:1;\n      border-left:1px solid #bbb;\n      border-bottom:1px solid #bbb;\n      border-radius:0 0 5px 5px;\n      box-shadow:-1px 0 0 rgba(255,255,255,0.8) inset,0 0 5px #ccc inset,0 0 3px rgba(0,0,0,0.2);\n      background:linear-gradient(to bottom,#eee 0%,#fff 100%)\n    }\n\n    ul .white:active {\n      border-top:1px solid #777;\n      border-left:1px solid #999;\n      border-bottom:1px solid #999;\n      box-shadow:2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);\n      background:linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)\n    }\n\n    .black {\n      height:8em;\n      width:2em;\n      margin:0 0 0 -1em;\n      z-index:2;\n      border:1px solid #000;\n      border-radius:0 0 3px 3px;\n      box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5);\n      background:linear-gradient(45deg,#222 0%,#555 100%)\n    }\n\n    .black:active {\n      box-shadow:-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5);\n      background:linear-gradient(to right,#444 0%,#222 100%)\n    }\n\n    .a,.g,.f,.d,.c {\n      margin:0 0 0 -1em\n    }\n\n    ul li:first-child {\n      border-radius:5px 0 5px 5px\n    }\n\n    ul li:last-child {\n      border-radius:0 5px 5px 5px\n    }\n\n}", ""]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=main.870837b3eb4e67b68e05.hot-update.js.map