webpackJsonp([2],{Bufy:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**\n                                                                                                                                                                                                                                                                   * Created by cjy on 16/11/23.\n                                                                                                                                                                                                                                                                   */\n\n\nvar _react = __webpack_require__("GiK3");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__("RH2O");\n\nvar _component = __webpack_require__("xAzv");\n\nvar _component2 = _interopRequireDefault(_component);\n\nvar _login = __webpack_require__("FInC");\n\nvar _routes = __webpack_require__("xcIh");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n\treturn {\n\t\tisLogin: state.login,\n\t\titems: state.items.filter(function (item) {\n\t\t\treturn item.favour;\n\t\t}).map(function (item) {\n\t\t\treturn _extends({}, item, {\n\t\t\t\tlink: (0, _routes.getRoute)(\'item\', { itemId: item.id })\n\t\t\t});\n\t\t})\n\t};\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(_component2.default);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/routes/favour/index.js\n// module id = Bufy\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/routes/favour/index.js?')},"S/oz":function(module,exports,__webpack_require__){eval('exports = module.exports = __webpack_require__("FZ+f")(undefined);\n// imports\n\n\n// module\nexports.push([module.i, ".v-group-root {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: nowrap;\\n  flex-direction: column;\\n  -webkit-box-align: stretch;\\n  -ms-flex-align: stretch;\\n  align-items: stretch;\\n  height: 100%; }\\n  .v-group-root .body {\\n    -webkit-box-flex: 1;\\n    -ms-flex: 1;\\n    flex: 1; }\\n  .v-group-root .create {\\n    position: fixed;\\n    right: 10%;\\n    bottom: 10%;\\n    font-size: 12.8px;\\n    font-size: .8rem; }\\n", ""]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib?{"ident":"postcss","plugins":[{"version":"6.0.14","plugins":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"postcssPlugin":"postcss-cssnext","postcssVersion":"6.0.14"}]}!./src/routes/favour/component/style.scss\n// module id = S/oz\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/routes/favour/component/style.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib?%7B%22ident%22:%22postcss%22,%22plugins%22:%5B%7B%22version%22:%226.0.14%22,%22plugins%22:%5Bnull,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null%5D,%22postcssPlugin%22:%22postcss-cssnext%22,%22postcssVersion%22:%226.0.14%22%7D%5D%7D')},cPgj:function(module,exports,__webpack_require__){eval('// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__("S/oz");\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {"hmr":true}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__("MTIv")(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/lib/index.js??postcss!./style.scss", function() {\n\t\t\tvar newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/postcss-loader/lib/index.js??postcss!./style.scss");\n\t\t\tif(typeof newContent === \'string\') newContent = [[module.id, newContent, \'\']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/routes/favour/component/style.scss\n// module id = cPgj\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/routes/favour/component/style.scss?')},xAzv:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\nexports.default = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class; /**\n             * Created by cjy on 16/11/23.\n             */\n\n\nvar _react = __webpack_require__("GiK3");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__("F8kA");\n\nvar _routes = __webpack_require__("xcIh");\n\n__webpack_require__("cPgj");\n\nvar _Footer = __webpack_require__("+qIz");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _DataItem = __webpack_require__("zT6v");\n\nvar _DataItem2 = _interopRequireDefault(_DataItem);\n\nvar _requireLogin = __webpack_require__("67YO");\n\nvar _requireLogin2 = _interopRequireDefault(_requireLogin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nif (false) {\n\tmodule.hot.accept(\'./style.scss\', function () {\n\t\trequire(\'./style.scss\');\n\t});\n}\n\nvar Favour = (0, _requireLogin2.default)(_class = function (_PureComponent) {\n\t_inherits(Favour, _PureComponent);\n\n\tfunction Favour() {\n\t\t_classCallCheck(this, Favour);\n\n\t\treturn _possibleConstructorReturn(this, (Favour.__proto__ || Object.getPrototypeOf(Favour)).apply(this, arguments));\n\t}\n\n\t_createClass(Favour, [{\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar _props = this.props,\n\t\t\t    _props$items = _props.items,\n\t\t\t    items = _props$items === undefined ? [] : _props$items,\n\t\t\t    match = _props.match;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'v-group-root\' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: \'body scroll\' },\n\t\t\t\t\titems.map(function (item) {\n\t\t\t\t\t\treturn _react2.default.createElement(_DataItem2.default, _extends({}, _this2.props, item));\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t{ to: (0, _routes.getRoute)(\'create\'), className: \'create\' },\n\t\t\t\t\t_react2.default.createElement(\'i\', { className: \'fa fa-plus-square primary\' })\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(_Footer2.default, this.props)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Favour;\n}(_react.PureComponent)) || _class;\n\nexports.default = Favour;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/routes/favour/component/index.js\n// module id = xAzv\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/routes/favour/component/index.js?')}});