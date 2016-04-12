/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(1);

	var _keys2 = _interopRequireDefault(_keys);

	var _List = __webpack_require__(2);

	var _List2 = _interopRequireDefault(_List);

	var _DataEditor = __webpack_require__(8);

	var _DataEditor2 = _interopRequireDefault(_DataEditor);

	var _DataProperties = __webpack_require__(10);

	var _DataProperties2 = _interopRequireDefault(_DataProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	studio.routes.push({
	  path: '/studio/data',
	  component: _List2.default
	});

	studio.entityTypes.push('data');

	studio.properties.push(_DataProperties2.default);

	studio.detailComponents.data = _DataEditor2.default;

	studio.onPreview = function (request, entities) {
	  if (!request.template.data || !request.template.data.shortid) {
	    return;
	  }

	  var dataDetails = (0, _keys2.default)(entities).map(function (e) {
	    return entities[e];
	  }).filter(function (d) {
	    return d.shortid === request.template.data.shortid && d.__entityType === 'data';
	  });

	  if (!dataDetails.length) {
	    return;
	  }

	  request.data = dataDetails[0].dataJson;
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = studio.runtime['core-js/object/keys'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(5);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(7);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = studio.react;
	var Component = studio.react.Component;

	var List = function (_Component) {
	  (0, _inherits3.default)(List, _Component);

	  function List() {
	    (0, _classCallCheck3.default)(this, List);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(List).apply(this, arguments));
	  }

	  (0, _createClass3.default)(List, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        "Data2"
	      );
	    }
	  }]);
	  return List;
	}(Component);

	exports.default = List;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = studio.runtime['core-js/object/get-prototype-of'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = studio.runtime['helpers/classCallCheck'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = studio.runtime['helpers/createClass'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = studio.runtime['helpers/possibleConstructorReturn'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = studio.runtime['helpers/inherits'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(9);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(5);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(7);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = studio.react;
	var AceEditor = studio.AceEditor;
	var Component = studio.react.Component;

	var DataEditor = function (_Component) {
	  (0, _inherits3.default)(DataEditor, _Component);

	  function DataEditor() {
	    (0, _classCallCheck3.default)(this, DataEditor);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DataEditor).apply(this, arguments));
	  }

	  (0, _createClass3.default)(DataEditor, [{
	    key: 'resize',
	    value: function resize() {
	      this.refs.ace.editor.resize();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var entity = _props.entity;
	      var onUpdate = _props.onUpdate;


	      return React.createElement(AceEditor, {
	        key: entity._id,
	        mode: 'javascript',
	        theme: 'chrome',
	        ref: 'ace',
	        name: entity._id,
	        width: '100%',
	        className: 'ace',
	        value: entity.dataJson,
	        onChange: function onChange(v) {
	          return onUpdate((0, _assign2.default)({}, entity, { dataJson: v }));
	        },
	        editorProps: { $blockScrolling: true } });
	    }
	  }]);
	  return DataEditor;
	}(Component);

	DataEditor.propTypes = {
	  entity: React.PropTypes.object.isRequired,
	  onUpdate: React.PropTypes.func.isRequired
	};
	exports.default = DataEditor;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = studio.runtime['core-js/object/assign'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(1);

	var _keys2 = _interopRequireDefault(_keys);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(5);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(7);

	var _inherits3 = _interopRequireDefault(_inherits2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = studio.react;
	var Component = studio.react.Component;

	var Properties = function (_Component) {
	  (0, _inherits3.default)(Properties, _Component);

	  function Properties() {
	    (0, _classCallCheck3.default)(this, Properties);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Properties).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Properties, [{
	    key: 'selectDataItems',
	    value: function selectDataItems(entities) {
	      return (0, _keys2.default)(entities).filter(function (k) {
	        return entities[k] && !entities[k].__isNew && entities[k].__entityType === 'data';
	      }).map(function (k) {
	        return entities[k];
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var entity = _props.entity;
	      var entities = _props.entities;
	      var _onChange = _props.onChange;

	      var dataItems = this.selectDataItems(entities);

	      if (entity.__entityType !== 'templates') {
	        return React.createElement('div', null);
	      }

	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'select',
	          { value: entity.data ? entity.data.shortid : '', onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, data: { shortid: v.target.value } });
	            } },
	          React.createElement(
	            'option',
	            { key: 'empty', value: 'empty' },
	            '- not selected -'
	          ),
	          dataItems.map(function (e) {
	            return React.createElement(
	              'option',
	              { key: e.shortid, value: e.shortid },
	              e.name
	            );
	          })
	        )
	      );
	    }
	  }]);
	  return Properties;
	}(Component);

	exports.default = Properties;

/***/ }
/******/ ]);