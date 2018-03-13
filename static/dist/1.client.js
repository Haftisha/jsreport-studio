webpackJsonp([1],{1083:function(e,n){"use strict";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ExportModal = __webpack_require__(1);
	
	var _ExportModal2 = _interopRequireDefault(_ExportModal);
	
	var _ImportModal = __webpack_require__(5);
	
	var _ImportModal2 = _interopRequireDefault(_ImportModal);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addToolbarComponent(function (props) {
	  return React.createElement(
	    'div',
	    {
	      className: 'toolbar-button', onClick: function onClick() {
	        return _jsreportStudio2.default.openModal(_ExportModal2.default);
	      } },
	    React.createElement('i', { className: 'fa fa-download' }),
	    ' Export'
	  );
	}, 'settings');
	
	_jsreportStudio2.default.addToolbarComponent(function (props) {
	  return React.createElement(
	    'div',
	    {
	      className: 'toolbar-button', onClick: function onClick() {
	        return _jsreportStudio2.default.openModal(_ImportModal2.default);
	      } },
	    React.createElement('i', { className: 'fa fa-upload' }),
	    ' Import'
	  );
	}, 'settings');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _filesaver = __webpack_require__(4);
	
	var _filesaver2 = _interopRequireDefault(_filesaver);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ExportModal = function (_Component) {
	  _inherits(ExportModal, _Component);
	
	  function ExportModal() {
	    _classCallCheck(this, ExportModal);
	
	    return _possibleConstructorReturn(this, (ExportModal.__proto__ || Object.getPrototypeOf(ExportModal)).apply(this, arguments));
	  }
	
	  _createClass(ExportModal, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var selections = {};
	
	      var references = _jsreportStudio2.default.getReferences();
	      Object.keys(references).forEach(function (k) {
	        Object.keys(references[k]).forEach(function (e) {
	          return selections[references[k][e]._id] = true;
	        });
	      });
	      this.setState(selections);
	    }
	  }, {
	    key: 'handleNodeSelect',
	    value: function handleNodeSelect(references, es, v) {
	      var updates = {};
	      references[es].forEach(function (e) {
	        updates[e._id] = v;
	      });
	
	      this.setState(updates);
	    }
	  }, {
	    key: 'download',
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var _this2 = this;
	
	        var response;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                _context.next = 3;
	                return _jsreportStudio2.default.api.post('api/export', {
	                  data: {
	                    selection: Object.keys(this.state).filter(function (k) {
	                      return _this2.state[k];
	                    })
	                  },
	                  responseType: 'blob'
	                });
	
	              case 3:
	                response = _context.sent;
	
	
	                _filesaver2.default.saveAs(response, 'export.zip');
	                _context.next = 10;
	                break;
	
	              case 7:
	                _context.prev = 7;
	                _context.t0 = _context['catch'](0);
	
	                alert('Unable to prepare export ' + _context.t0.message + ' ' + _context.t0.stack);
	
	              case 10:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 7]]);
	      }));
	
	      function download() {
	        return _ref.apply(this, arguments);
	      }
	
	      return download;
	    }()
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var references = _jsreportStudio2.default.getReferences();
	      Object.keys(references).forEach(function (k) {
	        Object.keys(references[k]).forEach(function (e) {
	          return references[k][e] = Object.assign({}, references[k][e], { __selected: _this3.state[references[k][e]._id] });
	        });
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'form-group' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            _react2.default.createElement('i', { className: 'fa fa-download' }),
	            ' Export objects'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { height: '30rem', overflow: 'auto' } },
	          _react2.default.createElement(_jsreportStudio.EntityTree, {
	            activeEntity: _jsreportStudio2.default.getActiveEntity(),
	            entities: references,
	            selectable: true,
	            onNodeSelect: function onNodeSelect(es, v) {
	              return _this3.handleNodeSelect(references, es, v);
	            },
	            onSelect: function onSelect(e, v) {
	              return _this3.setState(_defineProperty({}, e._id, !_this3.state[e._id]));
	            }
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'button-bar' },
	          _react2.default.createElement(
	            'a',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _this3.download();
	              } },
	            'Download'
	          )
	        )
	      );
	    }
	  }]);
	
	  return ExportModal;
	}(_react.Component);
	
	exports.default = ExportModal;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['filesaver.js-npm'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImportModal = function (_Component) {
	  _inherits(ImportModal, _Component);
	
	  function ImportModal() {
	    _classCallCheck(this, ImportModal);
	
	    return _possibleConstructorReturn(this, (ImportModal.__proto__ || Object.getPrototypeOf(ImportModal)).apply(this, arguments));
	  }
	
	  _createClass(ImportModal, [{
	    key: 'upload',
	    value: function upload(e) {
	      var _this2 = this;
	
	      if (!e.target.files.length) {
	        return;
	      }
	
	      this.file = e.target.files[0];
	      var reader = new FileReader();
	
	      reader.onloadend = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var result;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _this2.refs.file.value = '';
	
	                _context.prev = 1;
	                _context.next = 4;
	                return _jsreportStudio2.default.api.post('api/validate-import', {
	                  attach: { filename: 'import.zip', file: _this2.file }
	                });
	
	              case 4:
	                result = _context.sent;
	
	                _this2.setState(result);
	                _context.next = 11;
	                break;
	
	              case 8:
	                _context.prev = 8;
	                _context.t0 = _context['catch'](1);
	
	                _this2.setState({
	                  status: 1,
	                  log: _context.t0.message + ' ' + _context.t0.stack
	                });
	
	              case 11:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this2, [[1, 8]]);
	      }));
	
	      reader.onerror = function () {
	        alert('There was an error reading the file!');
	      };
	
	      reader.readAsArrayBuffer(this.file);
	    }
	  }, {
	    key: 'import',
	    value: function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.prev = 0;
	
	                this.setState({
	                  status: 1,
	                  log: 'Working on import....'
	                });
	                _context2.next = 4;
	                return _jsreportStudio2.default.api.post('api/import', {
	                  attach: { filename: 'import.zip', file: this.file }
	                });
	
	              case 4:
	                _context2.next = 9;
	                break;
	
	              case 6:
	                _context2.prev = 6;
	                _context2.t0 = _context2['catch'](0);
	                return _context2.abrupt('return', this.setState({
	                  status: 1,
	                  log: _context2.t0.message + ' ' + _context2.t0.stack
	                }));
	
	              case 9:
	
	                confirm('Import successful. We need to reload the studio.');
	                location.reload();
	
	              case 11:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this, [[0, 6]]);
	      }));
	
	      function _import() {
	        return _ref2.apply(this, arguments);
	      }
	
	      return _import;
	    }()
	  }, {
	    key: 'openFileDialog',
	    value: function openFileDialog() {
	      this.refs.file.dispatchEvent(new MouseEvent('click', {
	        'view': window,
	        'bubbles': false,
	        'cancelable': true
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', { type: 'file', key: 'file', ref: 'file', style: { display: 'none' }, onChange: function onChange(e) {
	            return _this3.upload(e);
	          } }),
	        _react2.default.createElement(
	          'h1',
	          null,
	          _react2.default.createElement('i', { className: 'fa fa-upload' }),
	          ' Import objects'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'You can safely upload the exported package and review the changes which will be performed. Afterwards you can reject or perform the import.'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'button-bar' },
	            _react2.default.createElement(
	              'a',
	              { className: 'button confirmation', onClick: function onClick() {
	                  return _this3.openFileDialog();
	                } },
	              'Validate'
	            )
	          )
	        ),
	        this.state ? _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('textarea', { style: { width: '100%', boxSizing: 'border-box' }, rows: '10', readOnly: true, value: this.state.log })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'button-bar' },
	            _react2.default.createElement(
	              'a',
	              { className: 'button confirmation', onClick: function onClick() {
	                  return _this3.import();
	                } },
	              'Import'
	            )
	          )
	        ) : _react2.default.createElement('div', null)
	      );
	    }
	  }]);
	
	  return ImportModal;
	}(_react.Component);
	
	exports.default = ImportModal;
	
	
	(function (window) {
	  try {
	    new MouseEvent('test'); // eslint-disable-line
	    return false; // No need to polyfill
	  } catch (e) {}
	  // Need to polyfill - fall through
	
	
	  // Polyfills DOM4 MouseEvent
	
	  var MouseEvent = function MouseEvent(eventType, params) {
	    params = params || { bubbles: false, cancelable: false };
	    var mouseEvent = document.createEvent('MouseEvent');
	    mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	
	    return mouseEvent;
	  };
	
	  MouseEvent.prototype = Event.prototype;
	
	  window.MouseEvent = MouseEvent;
	})(window);

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var linkModal = function linkModal(props) {
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'p',
	      null,
	      'You can also use browser\'s http get to render the report template. Just follow this link.'
	    ),
	    React.createElement(
	      'a',
	      { href: _jsreportStudio2.default.rootUrl + '/templates/' + props.options.entity.shortid, target: '_blank' },
	      _jsreportStudio2.default.rootUrl + '/templates/' + props.options.entity.shortid
	    )
	  );
	};
	
	_jsreportStudio2.default.addToolbarComponent(function (props) {
	  if (!props.tab || !props.tab.entity || props.tab.entity.__entitySet !== 'templates') {
	    return React.createElement('span', null);
	  }
	
	  if (_jsreportStudio2.default.extensions['templates'].options['studio-link-button-visibility'] === false) {
	    return React.createElement('span', null);
	  }
	
	  return React.createElement(
	    'div',
	    { className: 'toolbar-button', onClick: function onClick() {
	        return _jsreportStudio2.default.openModal(linkModal, { entity: props.tab.entity });
	      } },
	    React.createElement('i', { className: 'fa fa-link' }),
	    'Link'
	  );
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _NewTagModal = __webpack_require__(2);
	
	var _NewTagModal2 = _interopRequireDefault(_NewTagModal);
	
	var _TagEditor = __webpack_require__(15);
	
	var _TagEditor2 = _interopRequireDefault(_TagEditor);
	
	var _TagProperties = __webpack_require__(16);
	
	var _TagProperties2 = _interopRequireDefault(_TagProperties);
	
	var _EntityTagProperties = __webpack_require__(17);
	
	var _EntityTagProperties2 = _interopRequireDefault(_EntityTagProperties);
	
	var _EntityTreeTagOrganizer = __webpack_require__(18);
	
	var _EntityTreeTagOrganizer2 = _interopRequireDefault(_EntityTreeTagOrganizer);
	
	var _TagEntityTreeToolbar = __webpack_require__(23);
	
	var _TagEntityTreeToolbar2 = _interopRequireDefault(_TagEntityTreeToolbar);
	
	var _TagEntityTreeItem = __webpack_require__(34);
	
	var _TagEntityTreeItem2 = _interopRequireDefault(_TagEntityTreeItem);
	
	var _TagEntityTreeTagGroupItem = __webpack_require__(35);
	
	var _TagEntityTreeTagGroupItem2 = _interopRequireDefault(_TagEntityTreeTagGroupItem);
	
	var _filterItemWithTagsStrategy = __webpack_require__(36);
	
	var _filterItemWithTagsStrategy2 = _interopRequireDefault(_filterItemWithTagsStrategy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addEntitySet({
	  name: 'tags',
	  faIcon: 'fa-tag',
	  visibleName: 'tag',
	  onNew: function onNew() {
	    return _jsreportStudio2.default.openModal(_NewTagModal2.default);
	  },
	  helpUrl: 'http://jsreport.net/learn/tags',
	  referenceAttributes: ['color'],
	  entityTreePosition: 300
	});
	
	// wait for all extensions to be loaded
	_jsreportStudio2.default.initializeListeners.push(function () {
	  // add tags to referenceAttributes in all entities
	  Object.keys(_jsreportStudio2.default.entitySets).forEach(function (entitySetName) {
	    var entitySet = _jsreportStudio2.default.entitySets[entitySetName];
	
	    // ignore tags entity set
	    if (entitySet.name === 'tags') {
	      return;
	    }
	
	    if (entitySet.referenceAttributes.indexOf('tags') === -1) {
	      entitySet.referenceAttributes.push('tags');
	    }
	  });
	});
	
	_jsreportStudio2.default.addEditorComponent('tags', _TagEditor2.default);
	_jsreportStudio2.default.addPropertiesComponent(_TagProperties2.default.title, _TagProperties2.default, function (entity) {
	  return entity.__entitySet === 'tags';
	});
	_jsreportStudio2.default.addPropertiesComponent(_EntityTagProperties2.default.title, _EntityTagProperties2.default, function (entity) {
	  return entity.__entitySet !== 'tags';
	});
	
	_jsreportStudio2.default.addEntityTreeWrapperComponent(_EntityTreeTagOrganizer2.default);
	_jsreportStudio2.default.addEntityTreeToolbarComponent(_TagEntityTreeToolbar2.default);
	_jsreportStudio2.default.addEntityTreeItemComponent(_TagEntityTreeItem2.default);
	_jsreportStudio2.default.addEntityTreeItemComponent(_TagEntityTreeTagGroupItem2.default, 'groupRight');
	
	_jsreportStudio2.default.entityTreeFilterItemResolvers.push(_filterItemWithTagsStrategy2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _ColorPickerTrigger = __webpack_require__(4);
	
	var _ColorPickerTrigger2 = _interopRequireDefault(_ColorPickerTrigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NewTagModal = function (_Component) {
	  _inherits(NewTagModal, _Component);
	
	  function NewTagModal(props) {
	    _classCallCheck(this, NewTagModal);
	
	    var _this = _possibleConstructorReturn(this, (NewTagModal.__proto__ || Object.getPrototypeOf(NewTagModal)).call(this, props));
	
	    _this.state = {
	      displayColorPicker: false,
	      selectedColor: '',
	      error: null
	    };
	    return _this;
	  }
	
	  // the modal component for some reason after open focuses the panel itself
	
	
	  _createClass(NewTagModal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      setTimeout(function () {
	        return _this2.refs.name.focus();
	      }, 0);
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      if (e.key === 'Enter') {
	        this.createTag();
	      }
	    }
	  }, {
	    key: 'createTag',
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var entity, response;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                entity = {};
	
	                if (this.refs.name.value) {
	                  _context.next = 3;
	                  break;
	                }
	
	                return _context.abrupt('return', this.setState({
	                  error: 'name field cannot be empty'
	                }));
	
	              case 3:
	                if (this.state.selectedColor) {
	                  _context.next = 5;
	                  break;
	                }
	
	                return _context.abrupt('return', this.setState({
	                  error: 'color field cannot be empty'
	                }));
	
	              case 5:
	
	                entity.name = this.refs.name.value;
	                entity.color = this.state.selectedColor;
	                entity.description = this.refs.description.value;
	
	                _context.prev = 8;
	                _context.next = 11;
	                return _jsreportStudio2.default.api.post('/odata/tags', {
	                  data: entity
	                });
	
	              case 11:
	                response = _context.sent;
	
	
	                response.__entitySet = 'tags';
	
	                _jsreportStudio2.default.addExistingEntity(response);
	                _jsreportStudio2.default.openTab(response);
	                this.props.close();
	                _context.next = 21;
	                break;
	
	              case 18:
	                _context.prev = 18;
	                _context.t0 = _context['catch'](8);
	
	                this.setState({
	                  error: _context.t0.message
	                });
	
	              case 21:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[8, 18]]);
	      }));
	
	      function createTag() {
	        return _ref.apply(this, arguments);
	      }
	
	      return createTag;
	    }()
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _state = this.state,
	          displayColorPicker = _state.displayColorPicker,
	          selectedColor = _state.selectedColor,
	          error = _state.error;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Name'
	          ),
	          _react2.default.createElement('input', { type: 'text', name: 'name', ref: 'name', placeholder: 'tag name...', onKeyPress: function onKeyPress(e) {
	              return _this3.handleKeyPress(e);
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Color'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_ColorPickerTrigger2.default, {
	              displayColorPicker: displayColorPicker,
	              containerStyles: { border: '1px dashed #000' },
	              color: selectedColor,
	              onClickColorTrigger: function onClickColorTrigger() {
	                return _this3.setState({ displayColorPicker: true });
	              },
	              onCloseColorPicker: function onCloseColorPicker() {
	                return _this3.setState({ displayColorPicker: false });
	              },
	              onInputChange: function onInputChange(colorInputValue) {
	                return colorInputValue !== selectedColor && _this3.setState({ selectedColor: colorInputValue });
	              },
	              onChangeSelectionColor: function onChangeSelectionColor(colorHex) {
	                return _this3.setState({ selectedColor: colorHex });
	              }
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Description'
	          ),
	          _react2.default.createElement('textarea', {
	            name: 'description',
	            ref: 'description',
	            placeholder: 'You can add more details about this tag here...',
	            rows: '4',
	            style: { resize: 'vertical' }
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'span',
	            {
	              style: { color: 'red', display: error ? 'block' : 'none' } },
	            error
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group', style: { opacity: 0.8 } },
	          _react2.default.createElement('hr', null),
	          _react2.default.createElement(
	            'span',
	            null,
	            'You can use tags to organize jsreport objects.',
	            _react2.default.createElement('br', null),
	            'This can be for example a tag to organize and group related templates, images, data, scripts, assets, etc. ',
	            _react2.default.createElement('br', null),
	            'See the ',
	            _react2.default.createElement(
	              'a',
	              { target: '_blank', title: 'Help', href: 'http://jsreport.net/learn/tags' },
	              'documentation'
	            ),
	            ' for details.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'button-bar' },
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                return _this3.createTag();
	              }, className: 'button confirmation' },
	            'Ok'
	          )
	        )
	      );
	    }
	  }]);
	
	  return NewTagModal;
	}(_react.Component);
	
	exports.default = NewTagModal;
	
	
	NewTagModal.propTypes = {
	  close: _react.PropTypes.func.isRequired
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _objectAssign = __webpack_require__(5);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _ShowColor = __webpack_require__(6);
	
	var _ShowColor2 = _interopRequireDefault(_ShowColor);
	
	var _ColorPicker = __webpack_require__(9);
	
	var _ColorPicker2 = _interopRequireDefault(_ColorPicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ColorPicketTrigger = function ColorPicketTrigger(props) {
	  var displayColorPicker = props.displayColorPicker,
	      color = props.color,
	      containerStyles = props.containerStyles,
	      onClickColorTrigger = props.onClickColorTrigger,
	      onInputChange = props.onInputChange,
	      onChangeSelectionColor = props.onChangeSelectionColor,
	      onCloseColorPicker = props.onCloseColorPicker,
	      translateXColorPickerFromTrigger = props.translateXColorPickerFromTrigger,
	      translateYColorPickerFromTrigger = props.translateYColorPickerFromTrigger;
	
	
	  var containerTriggerPickerStyles = {
	    display: 'inline-block',
	    height: '32px',
	    padding: '5px'
	  };
	
	  var defaultContainerStyles = {
	    display: 'inline-block'
	  };
	
	  var currentColor = color || '';
	  var currentContainerStyles = (0, _objectAssign2.default)({}, defaultContainerStyles, containerStyles);
	
	  var colorPickerContainerStyles = {};
	
	  if (translateXColorPickerFromTrigger || translateYColorPickerFromTrigger) {
	    var transformValue = '';
	
	    if (translateXColorPickerFromTrigger) {
	      transformValue += 'translateX(' + translateXColorPickerFromTrigger + ') ';
	    }
	
	    if (translateYColorPickerFromTrigger) {
	      transformValue += 'translateY(' + translateYColorPickerFromTrigger + ') ';
	    }
	
	    colorPickerContainerStyles.transform = transformValue;
	  }
	
	  return _react2.default.createElement(
	    'div',
	    { style: currentContainerStyles },
	    _react2.default.createElement(
	      'span',
	      { style: containerTriggerPickerStyles },
	      _react2.default.createElement(
	        'span',
	        { style: { display: 'inline-block' } },
	        _react2.default.createElement(_ShowColor2.default, { color: currentColor }),
	        '\xA0',
	        _react2.default.createElement('input', {
	          type: 'text',
	          value: currentColor,
	          style: { width: '90px' },
	          maxLength: 7,
	          placeholder: '#006600',
	          onFocus: onClickColorTrigger,
	          onChange: function onChange(ev) {
	            return typeof onInputChange === 'function' && onInputChange(ev.target.value);
	          }
	        })
	      )
	    ),
	    _react2.default.createElement(
	      _jsreportStudio.Popover,
	      {
	        wrapper: false,
	        open: displayColorPicker,
	        onClose: onCloseColorPicker
	      },
	      _react2.default.createElement(
	        'div',
	        { style: colorPickerContainerStyles },
	        _react2.default.createElement(_ColorPicker2.default, {
	          color: currentColor,
	          onChangeComplete: function onChangeComplete(color) {
	            return typeof onChangeSelectionColor === 'function' && onChangeSelectionColor(color.hex);
	          }
	        })
	      )
	    )
	  );
	};
	
	ColorPicketTrigger.propTypes = {
	  displayColorPicker: _react.PropTypes.bool.isRequired,
	  color: _react.PropTypes.string,
	  containerStyles: _react.PropTypes.object,
	  onClickColorTrigger: _react.PropTypes.func,
	  onCloseColorPicker: _react.PropTypes.func.isRequired,
	  onInputChange: _react.PropTypes.func,
	  onChangeSelectionColor: _react.PropTypes.func,
	  // i know.. it is a shame to decide the position of the color picker
	  // in this way, maybe in the future it can be calculated based
	  // on the position of the button trigger
	  // using a "position" prop to specify the direction
	  translateXColorPickerFromTrigger: _react.PropTypes.string,
	  translateYColorPickerFromTrigger: _react.PropTypes.string
	};
	
	exports.default = ColorPicketTrigger;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _simpleCheckForValidColor = __webpack_require__(7);
	
	var _simpleCheckForValidColor2 = _interopRequireDefault(_simpleCheckForValidColor);
	
	var _colorLuminance = __webpack_require__(8);
	
	var _colorLuminance2 = _interopRequireDefault(_colorLuminance);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ShowColor = function ShowColor(props) {
	  var color = props.color,
	      _props$height = props.height,
	      height = _props$height === undefined ? 15 : _props$height,
	      _props$width = props.width,
	      width = _props$width === undefined ? 20 : _props$width;
	
	
	  var borderColor = props.borderColor;
	  var currentColor = 'inherit';
	
	  if ((0, _simpleCheckForValidColor2.default)(color)) {
	    currentColor = color;
	  }
	
	  if (!borderColor) {
	    borderColor = (0, _colorLuminance2.default)(currentColor, -0.35);
	  }
	
	  return _react2.default.createElement('span', { style: {
	      backgroundColor: currentColor,
	      borderWidth: '1px',
	      borderStyle: 'solid',
	      borderColor: borderColor,
	      content: ' ',
	      display: 'inline-block',
	      height: height,
	      verticalAlign: 'middle',
	      width: width
	    } });
	};
	
	ShowColor.propTypes = {
	  color: _react.PropTypes.string.isRequired,
	  borderColor: _react.PropTypes.string,
	  height: _react.PropTypes.number,
	  width: _react.PropTypes.number
	};
	
	exports.default = ShowColor;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HEX_COLOR_REGEXP = /^#[0-9A-F]{6}$/i;
	
	var simpleCheckForValidColor = function simpleCheckForValidColor(color) {
	  return HEX_COLOR_REGEXP.test(color);
	};
	
	exports.default = simpleCheckForValidColor;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (hex, lum) {
	  var selectedLum = lum || 0;
	  var selectedHex = void 0;
	
	  selectedHex = String(hex).replace(/[^0-9a-f]/gi, '');
	
	  if (selectedHex.length < 6) {
	    selectedHex = selectedHex[0] + selectedHex[0] + selectedHex[1] + selectedHex[1] + selectedHex[2] + selectedHex[2];
	  }
	
	  // convert to decimal and change luminosity
	  var rgb = '#';
	  var c = void 0;
	  var i = void 0;
	
	  for (i = 0; i < 3; i++) {
	    c = parseInt(selectedHex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * selectedLum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }
	
	  return rgb;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ColorWrap = __webpack_require__(10);
	
	var _ColorWrap2 = _interopRequireDefault(_ColorWrap);
	
	var _Picker = __webpack_require__(12);
	
	var _Picker2 = _interopRequireDefault(_Picker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _ColorWrap2.default)(_Picker2.default);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(11);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _simpleCheckForValidColor = __webpack_require__(7);
	
	var _simpleCheckForValidColor2 = _interopRequireDefault(_simpleCheckForValidColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var colorToState = function colorToState(data) {
	  var color = data.hex ? data.hex : data;
	
	  return {
	    hex: '' + color
	  };
	};
	
	var ColorWrap = function ColorWrap(Picker) {
	  var ColorPicker = function (_ref) {
	    _inherits(ColorPicker, _ref);
	
	    function ColorPicker(props) {
	      _classCallCheck(this, ColorPicker);
	
	      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));
	
	      _this.state = _extends({}, colorToState(props.color), {
	        visible: props.display
	      });
	
	      _this.debounce = (0, _lodash2.default)(function (fn, data, event) {
	        fn(data, event);
	      }, 100);
	
	      _this.handleChange = _this.handleChange.bind(_this);
	      return _this;
	    }
	
	    _createClass(ColorPicker, [{
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        this.setState(_extends({}, colorToState(nextProps.color), {
	          visible: nextProps.display
	        }));
	      }
	    }, {
	      key: 'handleChange',
	      value: function handleChange(data, event) {
	        var isValidColor = (0, _simpleCheckForValidColor2.default)(data.hex);
	
	        if (isValidColor) {
	          var colors = colorToState(data);
	          this.setState(colors);
	          this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors, event);
	          this.props.onChange && this.props.onChange(colors, event);
	        }
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, {
	          onChange: this.handleChange
	        }));
	      }
	    }]);
	
	    return ColorPicker;
	  }(_react.PureComponent || _react.Component);
	
	  ColorPicker.defaultProps = {
	    color: ''
	  };
	
	  return ColorPicker;
	};
	
	exports.default = ColorWrap;

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = debounce;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _handleHover = __webpack_require__(13);
	
	var _handleHover2 = _interopRequireDefault(_handleHover);
	
	var _Swatch = __webpack_require__(14);
	
	var _Swatch2 = _interopRequireDefault(_Swatch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PickerSwatch = (0, _handleHover2.default)(function (_ref) {
	  var hover = _ref.hover,
	      color = _ref.color,
	      onClick = _ref.onClick;
	
	  var styles = {
	    swatch: {
	      width: '25px',
	      height: '25px'
	    }
	  };
	
	  if (hover) {
	    styles.swatch = _extends({}, styles.swatch, {
	      position: 'relative',
	      zIndex: '2',
	      outline: '2px solid #fff',
	      boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
	    });
	  }
	
	  return React.createElement(
	    'div',
	    { style: styles.swatch },
	    React.createElement(_Swatch2.default, { color: color, onClick: onClick })
	  );
	});
	
	var Picker = function Picker(_ref2) {
	  var width = _ref2.width,
	      colors = _ref2.colors,
	      onChange = _ref2.onChange,
	      triangle = _ref2.triangle;
	
	  var styles = {
	    card: {
	      width: width,
	      background: '#fff',
	      border: '1px solid rgba(0,0,0,0.2)',
	      boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
	      borderRadius: '4px',
	      position: 'relative',
	      padding: '5px',
	      display: 'flex',
	      flexWrap: 'wrap'
	    }
	  };
	  var handleChange = function handleChange(hex, e) {
	    return onChange({ hex: hex, source: 'hex' }, e);
	  };
	
	  return React.createElement(
	    'div',
	    { style: styles.card },
	    colors.map(function (c) {
	      return React.createElement(PickerSwatch, { color: c, key: c, onClick: handleChange });
	    })
	  );
	};
	
	Picker.defaultProps = {
	  width: '200px',
	  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6']
	};
	
	exports.default = Picker;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var handleHover = function handleHover(Component) {
	  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
	
	  return function (_React$Component) {
	    _inherits(Hover, _React$Component);
	
	    function Hover(props) {
	      _classCallCheck(this, Hover);
	
	      var _this = _possibleConstructorReturn(this, (Hover.__proto__ || Object.getPrototypeOf(Hover)).call(this, props));
	
	      _this.state = { hover: false };
	
	      _this.handleMouseOver = _this.handleMouseOver.bind(_this);
	      _this.handleMouseOut = _this.handleMouseOut.bind(_this);
	      return _this;
	    }
	
	    _createClass(Hover, [{
	      key: 'handleMouseOver',
	      value: function handleMouseOver() {
	        this.setState({ hover: true });
	      }
	    }, {
	      key: 'handleMouseOut',
	      value: function handleMouseOut() {
	        this.setState({ hover: false });
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(
	          Span,
	          { onMouseOver: this.handleMouseOver, onMouseOut: this.handleMouseOut },
	          _react2.default.createElement(Component, _extends({}, this.props, this.state))
	        );
	      }
	    }]);
	
	    return Hover;
	  }(_react2.default.Component);
	};
	
	exports.default = handleHover;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var Swatch = function Swatch(_ref) {
	  var color = _ref.color,
	      style = _ref.style,
	      onClick = _ref.onClick,
	      _ref$title = _ref.title,
	      title = _ref$title === undefined ? color : _ref$title;
	
	  var styles = {
	    swatch: {
	      background: color,
	      height: '100%',
	      width: '100%',
	      cursor: 'pointer'
	    }
	  };
	
	  var handleClick = function handleClick(e) {
	    return onClick(color, e);
	  };
	
	  return React.createElement('div', { style: styles.swatch, onClick: handleClick, title: title });
	};
	
	exports.default = Swatch;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ShowColor = __webpack_require__(6);
	
	var _ShowColor2 = _interopRequireDefault(_ShowColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TagEditor = function (_Component) {
	  _inherits(TagEditor, _Component);
	
	  function TagEditor() {
	    _classCallCheck(this, TagEditor);
	
	    return _possibleConstructorReturn(this, (TagEditor.__proto__ || Object.getPrototypeOf(TagEditor)).apply(this, arguments));
	  }
	
	  _createClass(TagEditor, [{
	    key: 'render',
	    value: function render() {
	      var entity = this.props.entity;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'custom-editor' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            _react2.default.createElement('i', { className: 'fa fa-tag' }),
	            ' ',
	            entity.name
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Description: ',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'p',
	            null,
	            entity.description || _react2.default.createElement(
	              'i',
	              null,
	              '(no description for this tag)'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          'Color: ',
	          _react2.default.createElement(_ShowColor2.default, { color: entity.color })
	        )
	      );
	    }
	  }]);
	
	  return TagEditor;
	}(_react.Component);
	
	exports.default = TagEditor;
	
	
	TagEditor.propTypes = {
	  entity: _react.PropTypes.object.isRequired
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ShowColor = __webpack_require__(6);
	
	var _ShowColor2 = _interopRequireDefault(_ShowColor);
	
	var _ColorPickerTrigger = __webpack_require__(4);
	
	var _ColorPickerTrigger2 = _interopRequireDefault(_ColorPickerTrigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TagProperties = function (_Component) {
	  _inherits(TagProperties, _Component);
	
	  _createClass(TagProperties, null, [{
	    key: 'title',
	    value: function title(entity, entities) {
	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(
	          'span',
	          null,
	          'tag (color: ',
	          _react2.default.createElement(_ShowColor2.default, { color: entity.color, width: 15, height: 15 }),
	          ')'
	        )
	      );
	    }
	  }]);
	
	  function TagProperties(props) {
	    _classCallCheck(this, TagProperties);
	
	    var _this = _possibleConstructorReturn(this, (TagProperties.__proto__ || Object.getPrototypeOf(TagProperties)).call(this, props));
	
	    _this.state = {
	      displayColorPicker: false
	    };
	    return _this;
	  }
	
	  _createClass(TagProperties, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var displayColorPicker = this.state.displayColorPicker;
	      var _props = this.props,
	          entity = _props.entity,
	          _onChange = _props.onChange;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Color'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_ColorPickerTrigger2.default, {
	              displayColorPicker: displayColorPicker,
	              containerStyles: { border: '1px dashed #000' },
	              color: entity.color,
	              onClickColorTrigger: function onClickColorTrigger() {
	                return _this2.setState({ displayColorPicker: true });
	              },
	              onCloseColorPicker: function onCloseColorPicker() {
	                return _this2.setState({ displayColorPicker: false });
	              },
	              onInputChange: function onInputChange(colorInputValue) {
	                return colorInputValue !== entity.color && _onChange({ _id: entity._id, color: colorInputValue });
	              },
	              onChangeSelectionColor: function onChangeSelectionColor(colorHex) {
	                return _onChange({ _id: entity._id, color: colorHex });
	              }
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Description'
	          ),
	          _react2.default.createElement('textarea', {
	            rows: '4',
	            style: { resize: 'vertical' },
	            value: entity.description || '',
	            onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, description: v.target.value });
	            }
	          })
	        )
	      );
	    }
	  }]);
	
	  return TagProperties;
	}(_react.Component);
	
	exports.default = TagProperties;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ShowColor = __webpack_require__(6);
	
	var _ShowColor2 = _interopRequireDefault(_ShowColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var selectValues = function selectValues(event, atags) {
	  var el = event.target;
	
	  var tags = Object.assign([], atags);
	
	  for (var i = 0; i < el.options.length; i++) {
	    if (el.options[i].selected) {
	      if (!tags.filter(function (t) {
	        return t.shortid === el.options[i].value;
	      }).length) {
	        tags.push({ shortid: el.options[i].value });
	      }
	    } else {
	      if (tags.filter(function (t) {
	        return t.shortid === el.options[i].value;
	      }).length) {
	        tags = tags.filter(function (t) {
	          return t.shortid !== el.options[i].value;
	        });
	      }
	    }
	  }
	
	  return tags;
	};
	
	var EntityTagProperties = function (_Component) {
	  _inherits(EntityTagProperties, _Component);
	
	  function EntityTagProperties() {
	    _classCallCheck(this, EntityTagProperties);
	
	    return _possibleConstructorReturn(this, (EntityTagProperties.__proto__ || Object.getPrototypeOf(EntityTagProperties)).apply(this, arguments));
	  }
	
	  _createClass(EntityTagProperties, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.removeInvalidTagReferences();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.removeInvalidTagReferences();
	    }
	  }, {
	    key: 'selectTags',
	    value: function selectTags(entities) {
	      return Object.keys(entities).filter(function (k) {
	        return entities[k].__entitySet === 'tags';
	      }).map(function (k) {
	        return entities[k];
	      });
	    }
	  }, {
	    key: 'removeInvalidTagReferences',
	    value: function removeInvalidTagReferences() {
	      var _props = this.props,
	          entity = _props.entity,
	          entities = _props.entities,
	          onChange = _props.onChange;
	
	
	      if (!entity.tags) {
	        return;
	      }
	
	      var updatedTags = entity.tags.filter(function (t) {
	        return Object.keys(entities).filter(function (k) {
	          return entities[k].__entitySet === 'tags' && entities[k].shortid === t.shortid;
	        }).length;
	      });
	
	      if (updatedTags.length !== entity.tags.length) {
	        onChange({ _id: entity._id, tags: updatedTags });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          entity = _props2.entity,
	          entities = _props2.entities,
	          _onChange = _props2.onChange;
	
	      var tags = this.selectTags(entities);
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'select',
	            {
	              title: 'Use CTRL to deselect item and also to select multiple options.',
	              multiple: true,
	              size: '7',
	              value: entity.tags ? entity.tags.map(function (t) {
	                return t.shortid;
	              }) : [],
	              onChange: function onChange(v) {
	                return _onChange({ _id: entity._id, tags: selectValues(v, entity.tags) });
	              } },
	            tags.map(function (t) {
	              return _react2.default.createElement(
	                'option',
	                { key: t.shortid, value: t.shortid },
	                t.name
	              );
	            })
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'getSelectedTags',
	    value: function getSelectedTags(entity, entities) {
	      var getNameAndColor = function getNameAndColor(t) {
	        var foundTags = Object.keys(entities).map(function (k) {
	          return entities[k];
	        }).filter(function (tg) {
	          return tg.shortid === t.shortid;
	        });
	
	        return foundTags.length ? { name: foundTags[0].name, color: foundTags[0].color } : { name: '', color: undefined };
	      };
	
	      return (entity.tags || []).map(function (t) {
	        return _extends({}, t, getNameAndColor(t));
	      });
	    }
	  }, {
	    key: 'title',
	    value: function title(entity, entities) {
	      if (!entity.tags || !entity.tags.length) {
	        return 'tags';
	      }
	
	      return _react2.default.createElement(
	        'span',
	        null,
	        'tags:\xA0',
	        _react2.default.createElement(
	          'span',
	          null,
	          EntityTagProperties.getSelectedTags(entity, entities).map(function (t, tIndex, allSelectTags) {
	            return _react2.default.createElement(
	              'span',
	              { key: t.name, style: { display: 'inline-block', marginRight: '2px' } },
	              _react2.default.createElement(_ShowColor2.default, { color: t.color, width: 12, height: 15 }),
	              '\xA0',
	              t.name,
	              tIndex === allSelectTags.length - 1 ? '' : ','
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return EntityTagProperties;
	}(_react.Component);
	
	exports.default = EntityTagProperties;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _emitter = __webpack_require__(19);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _findTagInSet = __webpack_require__(21);
	
	var _findTagInSet2 = _interopRequireDefault(_findTagInSet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _require = __webpack_require__(22),
	    reservedTagNames = _require.default,
	    noTagGroupName = _require.noTagGroupName,
	    tagsGroupName = _require.tagsGroupName;
	
	var specialGroups = reservedTagNames;
	
	var EntityTreeTagOrganizer = function (_Component) {
	  _inherits(EntityTreeTagOrganizer, _Component);
	
	  function EntityTreeTagOrganizer() {
	    _classCallCheck(this, EntityTreeTagOrganizer);
	
	    var _this = _possibleConstructorReturn(this, (EntityTreeTagOrganizer.__proto__ || Object.getPrototypeOf(EntityTreeTagOrganizer)).call(this));
	
	    var organizeByDefault = _jsreportStudio2.default.extensions['tags'].options.organizeByDefault;
	
	    if (organizeByDefault == null) {
	      organizeByDefault = false;
	    }
	
	    _this.state = {
	      organizeByTags: organizeByDefault
	    };
	
	    _this.onOrganizationModeChange = _this.onOrganizationModeChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(EntityTreeTagOrganizer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _emitter2.default.on('organizationModeByTagsChanged', this.onOrganizationModeChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _emitter2.default.off('organizationModeByTagsChanged', this.onOrganizationModeChange);
	    }
	  }, {
	    key: 'onOrganizationModeChange',
	    value: function onOrganizationModeChange(organizeByTag) {
	      this.setState({
	        organizeByTags: organizeByTag
	      });
	    }
	  }, {
	    key: 'addToGroups',
	    value: function addToGroups(groups, tagName) {
	      if (groups.indexOf(tagName) === -1) {
	        groups.push(tagName);
	      }
	    }
	  }, {
	    key: 'addToGroupsWithData',
	    value: function addToGroupsWithData(groups, tagName) {
	      if (groups.indexOf(tagName) === -1) {
	        groups.push(tagName);
	      }
	    }
	  }, {
	    key: 'addToEntitiesByTag',
	    value: function addToEntitiesByTag(collection, initializeSets, tagName, groupData, entity, noGroup) {
	      var collectionItem = void 0;
	      var collectionItemEntitiesSet = void 0;
	      var dataInGroup = groupData || {};
	
	      // initialize collection item if not present
	      if (collection[tagName] == null) {
	        if (noGroup) {
	          collection[tagName] = [];
	        } else {
	          collection[tagName] = {
	            __hasChildEntitiesSet__: true,
	            entitiesSet: {},
	            data: _extends({
	              name: tagName
	            }, dataInGroup)
	          };
	
	          if (initializeSets) {
	            initializeSets.forEach(function (nameOfSet) {
	              // ignore tags set for groups
	              if (nameOfSet === 'tags') {
	                return;
	              }
	
	              collection[tagName].entitiesSet[nameOfSet] = [];
	            });
	          }
	        }
	      }
	
	      collectionItem = collection[tagName];
	
	      if (noGroup) {
	        if (entity) {
	          collectionItem.push(entity);
	        }
	        return;
	      }
	
	      if (!entity) {
	        return;
	      }
	
	      if (collectionItem.entitiesSet[entity.__entitySet] == null) {
	        collectionItem.entitiesSet[entity.__entitySet] = [];
	      }
	
	      collectionItemEntitiesSet = collectionItem.entitiesSet[entity.__entitySet];
	
	      collectionItemEntitiesSet.push(entity);
	    }
	  }, {
	    key: 'groupEntitiesByTag',
	    value: function groupEntitiesByTag(entitySets, entities) {
	      var _this2 = this;
	
	      var groups = [];
	      var newEntities = {};
	      var entitySetsNames = Object.keys(entitySets);
	      var allTagEntities = _jsreportStudio2.default.getReferences().tags || [];
	      var groupsWithData = [];
	
	      // initialize all tag groups based on all tag entities
	      allTagEntities.forEach(function (entityTag) {
	        var tagInfo = (0, _findTagInSet2.default)(allTagEntities, entityTag.shortid);
	
	        _this2.addToEntitiesByTag(newEntities, entitySetsNames, tagInfo.name, {
	          shortid: tagInfo.shortid,
	          color: tagInfo.color,
	          groupType: 'tags'
	        }, undefined);
	      });
	
	      // initialize special groups
	      specialGroups.forEach(function (specialGroupName) {
	        var noGroup = false;
	
	        if (specialGroupName === tagsGroupName) {
	          noGroup = true;
	        }
	
	        _this2.addToEntitiesByTag(newEntities, entitySetsNames, specialGroupName, undefined, undefined, noGroup);
	      });
	
	      entitySetsNames.forEach(function (entitySetName) {
	        var entitiesInSet = entities[entitySetName];
	
	        if (!entitiesInSet) {
	          return;
	        }
	
	        var entitiesInSetCount = entitiesInSet.length;
	
	        for (var j = 0; j < entitiesInSetCount; j++) {
	          var entity = entitiesInSet[j];
	
	          if (entitySetName === 'tags') {
	            // special groups are added to groups array at the end of the function
	            _this2.addToEntitiesByTag(newEntities, entitySetsNames, tagsGroupName, undefined, entity, true);
	            continue;
	          }
	
	          if (!Array.isArray(entity.tags) || entity.tags.length === 0) {
	            // special groups are added to groups array at the end of the function
	            _this2.addToEntitiesByTag(newEntities, entitySetsNames, noTagGroupName, undefined, entity);
	            continue;
	          }
	
	          var tagsCount = entity.tags.length;
	
	          for (var k = 0; k < tagsCount; k++) {
	            var entityTag = entity.tags[k];
	            var tagInfo = (0, _findTagInSet2.default)(allTagEntities, entityTag.shortid);
	
	            if (!tagInfo) {
	              continue;
	            }
	
	            _this2.addToGroups(groups, tagInfo.name);
	            _this2.addToGroupsWithData(groupsWithData, tagInfo.name);
	            _this2.addToEntitiesByTag(newEntities, entitySetsNames, tagInfo.name, undefined, entity);
	          }
	        }
	      });
	
	      // empty groups should be inserted in the end of groups array (before special groups)
	      // (it should be inserted to allow its visualization in tree)
	      allTagEntities.forEach(function (entityTag) {
	        if (groupsWithData.indexOf(entityTag.name) === -1) {
	          _this2.addToGroups(groups, entityTag.name);
	        }
	      });
	
	      // special groups should be placed in the end of groups
	      specialGroups.forEach(function (gname) {
	        _this2.addToGroups(groups, gname);
	      });
	
	      return {
	        groups: groups,
	        entitiesByTag: newEntities
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var containerStyles = this.props.containerStyles;
	
	
	      return _react2.default.createElement(
	        'div',
	        { style: containerStyles },
	        _react2.default.cloneElement(this.props.children, {}, function (_ref) {
	          var renderClassicTree = _ref.renderClassicTree,
	              renderObjectSubTree = _ref.renderObjectSubTree,
	              entitySets = _ref.entitySets,
	              entities = _ref.entities;
	          var organizeByTags = _this3.state.organizeByTags;
	
	
	          if (!organizeByTags) {
	            return renderClassicTree(entitySets, entities);
	          }
	
	          var _groupEntitiesByTag = _this3.groupEntitiesByTag(entitySets, entities),
	              groups = _groupEntitiesByTag.groups,
	              entitiesByTag = _groupEntitiesByTag.entitiesByTag;
	
	          return groups.map(function (groupName) {
	            return renderObjectSubTree(groupName, entitiesByTag[groupName] || []);
	          });
	        })
	      );
	    }
	  }]);
	
	  return EntityTreeTagOrganizer;
	}(_react.Component);
	
	exports.default = EntityTreeTagOrganizer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mitt = __webpack_require__(20);
	
	var _mitt2 = _interopRequireDefault(_mitt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emitter = (0, _mitt2.default)();
	
	exports.default = emitter;

/***/ },
/* 20 */
/***/ function(module, exports) {

	function n(n){return n=n||Object.create(null),{on:function(c,e){(n[c]||(n[c]=[])).push(e)},off:function(c,e){n[c]&&n[c].splice(n[c].indexOf(e)>>>0,1)},emit:function(c,e){(n[c]||[]).slice().map(function(n){n(e)}),(n["*"]||[]).slice().map(function(n){n(c,e)})}}}module.exports=n;
	//# sourceMappingURL=mitt.js.map

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (tagSet, tagShortId) {
	  var tag = void 0;
	
	  var found = tagSet.some(function (tagInSet) {
	    tag = tagInSet;
	    return tagInSet.shortid === tagShortId;
	  });
	
	  if (found) {
	    return tag;
	  }
	
	  return undefined;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	var noTagGroupName = '(objects without tag)';
	var tagsGroupName = 'tags';
	var reservedTagNames = [noTagGroupName, tagsGroupName];
	
	module.exports.default = reservedTagNames;
	module.exports.noTagGroupName = noTagGroupName;
	module.exports.tagsGroupName = tagsGroupName;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _emitter = __webpack_require__(19);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _TagEntityTreeOrganizeButtonToolbar = __webpack_require__(24);
	
	var _TagEntityTreeOrganizeButtonToolbar2 = _interopRequireDefault(_TagEntityTreeOrganizeButtonToolbar);
	
	var _TagEntityTreeFilterButtonToolbar = __webpack_require__(25);
	
	var _TagEntityTreeFilterButtonToolbar2 = _interopRequireDefault(_TagEntityTreeFilterButtonToolbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TagEntityTreeToolbar = function (_Component) {
	  _inherits(TagEntityTreeToolbar, _Component);
	
	  function TagEntityTreeToolbar(props) {
	    _classCallCheck(this, TagEntityTreeToolbar);
	
	    var _this = _possibleConstructorReturn(this, (TagEntityTreeToolbar.__proto__ || Object.getPrototypeOf(TagEntityTreeToolbar)).call(this, props));
	
	    var organizeByDefault = _jsreportStudio2.default.extensions['tags'].options.organizeByDefault;
	
	    if (organizeByDefault == null) {
	      organizeByDefault = false;
	    }
	
	    _this.state = {
	      organizeByTags: organizeByDefault,
	      showFilterBytag: false,
	      filteredByTags: false,
	      selectedTags: []
	    };
	
	    _this.onOrganizationModeChange = _this.onOrganizationModeChange.bind(_this);
	    _this.onTagSelectChange = _this.onTagSelectChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(TagEntityTreeToolbar, [{
	    key: 'onOrganizationModeChange',
	    value: function onOrganizationModeChange() {
	      var _this2 = this;
	
	      this.setState(function (prevState) {
	        return {
	          organizeByTags: !prevState.organizeByTags
	        };
	      }, function () {
	        // notify parent that the organization mode has changed
	        _emitter2.default.emit('organizationModeByTagsChanged', _this2.state.organizeByTags);
	      });
	    }
	  }, {
	    key: 'onTagSelectChange',
	    value: function onTagSelectChange(selectedTags) {
	      var setFilter = this.props.setFilter;
	
	      var isActive = selectedTags.length > 0;
	
	      setFilter({
	        tags: selectedTags
	      });
	
	      this.setState({
	        selectedTags: selectedTags,
	        filteredByTags: isActive
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _state = this.state,
	          organizeByTags = _state.organizeByTags,
	          showFilterBytag = _state.showFilterBytag,
	          filteredByTags = _state.filteredByTags,
	          selectedTags = _state.selectedTags;
	
	
	      return _react2.default.createElement(
	        'div',
	        { style: { display: 'inline-block' } },
	        _react2.default.createElement(_TagEntityTreeFilterButtonToolbar2.default, {
	          showFilter: showFilterBytag,
	          active: filteredByTags,
	          selectedTags: selectedTags,
	          onClick: function onClick() {
	            return _this3.setState({ showFilterBytag: true });
	          },
	          onTagSelectChange: this.onTagSelectChange,
	          onFilterClose: function onFilterClose() {
	            return _this3.setState({ showFilterBytag: false });
	          }
	        }),
	        _react2.default.createElement(_TagEntityTreeOrganizeButtonToolbar2.default, {
	          active: organizeByTags,
	          onClick: this.onOrganizationModeChange
	        })
	      );
	    }
	  }]);
	
	  return TagEntityTreeToolbar;
	}(_react.Component);
	
	exports.default = TagEntityTreeToolbar;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TagEntityTreeOrganizeButtonToolbar = function (_Component) {
	  _inherits(TagEntityTreeOrganizeButtonToolbar, _Component);
	
	  function TagEntityTreeOrganizeButtonToolbar() {
	    _classCallCheck(this, TagEntityTreeOrganizeButtonToolbar);
	
	    return _possibleConstructorReturn(this, (TagEntityTreeOrganizeButtonToolbar.__proto__ || Object.getPrototypeOf(TagEntityTreeOrganizeButtonToolbar)).apply(this, arguments));
	  }
	
	  _createClass(TagEntityTreeOrganizeButtonToolbar, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          onClick = _props.onClick,
	          active = _props.active;
	
	
	      return _react2.default.createElement(
	        'div',
	        { title: 'Organize entities tree by tag', style: { display: 'inline-block', marginLeft: '0.2rem', marginRight: '0.2rem' } },
	        _react2.default.createElement(
	          _jsreportStudio.EntityTreeButton,
	          { active: active, onClick: onClick },
	          _react2.default.createElement('i', { className: 'fa fa-tags' })
	        )
	      );
	    }
	  }]);
	
	  return TagEntityTreeOrganizeButtonToolbar;
	}(_react.Component);
	
	exports.default = TagEntityTreeOrganizeButtonToolbar;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _TagEntityTreeFilterByTags = __webpack_require__(26);
	
	var _TagEntityTreeFilterByTags2 = _interopRequireDefault(_TagEntityTreeFilterByTags);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TagEntityTreeFilterButtonToolbar = function (_Component) {
	  _inherits(TagEntityTreeFilterButtonToolbar, _Component);
	
	  function TagEntityTreeFilterButtonToolbar() {
	    _classCallCheck(this, TagEntityTreeFilterButtonToolbar);
	
	    return _possibleConstructorReturn(this, (TagEntityTreeFilterButtonToolbar.__proto__ || Object.getPrototypeOf(TagEntityTreeFilterButtonToolbar)).apply(this, arguments));
	  }
	
	  _createClass(TagEntityTreeFilterButtonToolbar, [{
	    key: 'render',
	    value: function render() {
	      var allTags = _jsreportStudio2.default.getReferences().tags;
	
	      var _props = this.props,
	          active = _props.active,
	          showFilter = _props.showFilter,
	          selectedTags = _props.selectedTags,
	          onClick = _props.onClick,
	          onTagSelectChange = _props.onTagSelectChange,
	          onFilterClose = _props.onFilterClose;
	
	
	      return _react2.default.createElement(
	        'div',
	        { title: 'Filter entities tree by tag', style: { display: 'inline-block', marginLeft: '0.2rem', marginRight: '0.2rem' } },
	        _react2.default.createElement(
	          _jsreportStudio.EntityTreeButton,
	          { active: active, onClick: onClick },
	          _react2.default.createElement(
	            'span',
	            { style: { display: 'inline-block' } },
	            _react2.default.createElement('i', { className: 'fa fa-filter' }),
	            '\xA0',
	            _react2.default.createElement('i', { className: 'fa fa-tag' })
	          )
	        ),
	        _react2.default.createElement(
	          _jsreportStudio.Popover,
	          {
	            open: showFilter,
	            onClose: onFilterClose
	          },
	          _react2.default.createElement(_TagEntityTreeFilterByTags2.default, {
	            tags: allTags,
	            selectedTags: selectedTags,
	            onTagSelectChange: onTagSelectChange,
	            onFilterClose: onFilterClose
	          })
	        )
	      );
	    }
	  }]);
	
	  return TagEntityTreeFilterButtonToolbar;
	}(_react.Component);
	
	exports.default = TagEntityTreeFilterButtonToolbar;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactList = __webpack_require__(27);
	
	var _reactList2 = _interopRequireDefault(_reactList);
	
	var _colorLuminance = __webpack_require__(8);
	
	var _colorLuminance2 = _interopRequireDefault(_colorLuminance);
	
	var _getColorLuminance = __webpack_require__(28);
	
	var _getColorLuminance2 = _interopRequireDefault(_getColorLuminance);
	
	var _ShowColor = __webpack_require__(6);
	
	var _ShowColor2 = _interopRequireDefault(_ShowColor);
	
	var _TagEntityTreeFilterByTags = __webpack_require__(30);
	
	var _TagEntityTreeFilterByTags2 = _interopRequireDefault(_TagEntityTreeFilterByTags);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TagEntityTreeFilterByTags = function (_Component) {
	  _inherits(TagEntityTreeFilterByTags, _Component);
	
	  function TagEntityTreeFilterByTags(props) {
	    _classCallCheck(this, TagEntityTreeFilterByTags);
	
	    var _this = _possibleConstructorReturn(this, (TagEntityTreeFilterByTags.__proto__ || Object.getPrototypeOf(TagEntityTreeFilterByTags)).call(this, props));
	
	    _this.state = {
	      showTagsList: true,
	      filterText: ''
	    };
	
	    _this.createRenderer = _this.createRenderer.bind(_this);
	    _this.addSelectedTag = _this.addSelectedTag.bind(_this);
	    _this.onTagSelectionClick = _this.onTagSelectionClick.bind(_this);
	    _this.onChangeInputTag = _this.onChangeInputTag.bind(_this);
	    _this.onKeyDownInputTag = _this.onKeyDownInputTag.bind(_this);
	    _this.onRemoveTagItem = _this.onRemoveTagItem.bind(_this);
	    return _this;
	  }
	
	  _createClass(TagEntityTreeFilterByTags, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.focus();
	    }
	  }, {
	    key: 'createRenderer',
	    value: function createRenderer(tags) {
	      var _this2 = this;
	
	      return function (index, key) {
	        return _this2.renderTagItem(tags[index]);
	      };
	    }
	  }, {
	    key: 'addSelectedTag',
	    value: function addSelectedTag(tag) {
	      var previousSelectedTags = this.props.selectedTags;
	
	      var selectedTags = [].concat(_toConsumableArray(previousSelectedTags), [tag]);
	
	      this.props.onTagSelectChange(selectedTags);
	      this.focus();
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this.refs.tagSelectionInput && typeof this.refs.tagSelectionInput.focus === 'function') {
	        this.refs.tagSelectionInput.focus();
	      }
	    }
	  }, {
	    key: 'getTagsToShow',
	    value: function getTagsToShow(allTags, selectedTags, filterText) {
	      if (selectedTags.length === 0 && filterText === '') {
	        return allTags;
	      }
	
	      return allTags.filter(function (tag) {
	        var filterPass = true;
	
	        if (filterText !== '') {
	          filterPass = tag.name.indexOf(filterText) !== -1;
	        }
	
	        if (!filterPass) {
	          return false;
	        }
	
	        var foundInSelectedTags = selectedTags.some(function (selectTag) {
	          return selectTag.shortid === tag.shortid;
	        });
	
	        return !foundInSelectedTags;
	      });
	    }
	  }, {
	    key: 'onTagSelectionClick',
	    value: function onTagSelectionClick(ev) {
	      // if the tag selection area is directly clicked
	      // focus the input
	      if (ev.target === this.refs.tagSelection) {
	        this.focus();
	      }
	    }
	  }, {
	    key: 'onChangeInputTag',
	    value: function onChangeInputTag(ev) {
	      this.setState({
	        filterText: ev.target.value
	      });
	    }
	  }, {
	    key: 'onKeyDownInputTag',
	    value: function onKeyDownInputTag(ev) {
	      if (ev.defaultPrevented) {
	        return;
	      }
	
	      var keyCode = ev.keyCode;
	      var inputTag = ev.target;
	      var remove = false;
	      var enterKey = 13;
	      var removeKey = 8;
	
	      if (keyCode === enterKey) {
	        ev.preventDefault();
	
	        return this.props.onFilterClose();
	      }
	
	      if (keyCode === removeKey) {
	        remove = true;
	      }
	
	      if (remove && inputTag.value === '') {
	        var selectedTags = this.props.selectedTags;
	        var selectedTagsLastIndex = selectedTags.length - 1;
	
	        ev.preventDefault();
	
	        if (selectedTagsLastIndex >= 0) {
	          this.onRemoveTagItem(selectedTags[selectedTagsLastIndex], selectedTagsLastIndex);
	        }
	      }
	    }
	  }, {
	    key: 'onRemoveTagItem',
	    value: function onRemoveTagItem(tag, tagIndex) {
	      var originalSelectedTags = this.props.selectedTags;
	
	      var selectedTags = [].concat(_toConsumableArray(originalSelectedTags.slice(0, tagIndex)), _toConsumableArray(originalSelectedTags.slice(tagIndex + 1)));
	
	      this.props.onTagSelectChange(selectedTags);
	    }
	  }, {
	    key: 'renderTagItem',
	    value: function renderTagItem(tag) {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          key: tag.shortid,
	          className: _TagEntityTreeFilterByTags2.default.tagsListItem,
	          onClick: function onClick() {
	            return _this3.addSelectedTag(tag);
	          }
	        },
	        _react2.default.createElement(_ShowColor2.default, { color: tag.color }),
	        '\xA0',
	        _react2.default.createElement(
	          'span',
	          null,
	          tag.name
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _state = this.state,
	          showTagsList = _state.showTagsList,
	          filterText = _state.filterText;
	      var _props = this.props,
	          tags = _props.tags,
	          selectedTags = _props.selectedTags;
	
	      var tagsToShowInList = this.getTagsToShow(tags, selectedTags, filterText);
	
	      var stylesForTagsList = {};
	      var stylesForInputTag = {};
	
	      if (showTagsList) {
	        stylesForTagsList.display = 'block';
	      } else {
	        stylesForTagsList.display = 'none';
	      }
	
	      if (selectedTags.length === 0) {
	        stylesForInputTag.width = '100%';
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: _TagEntityTreeFilterByTags2.default.searchTagsContainer },
	        _react2.default.createElement(
	          'div',
	          { className: _TagEntityTreeFilterByTags2.default.searchTagsInputBox },
	          _react2.default.createElement(
	            'div',
	            { ref: 'tagSelection', className: _TagEntityTreeFilterByTags2.default.tagsSelect, onClick: this.onTagSelectionClick },
	            _react2.default.createElement(
	              'span',
	              null,
	              selectedTags.map(function (tag, tagIndex) {
	                var tagStyles = {
	                  backgroundColor: tag.color,
	                  borderColor: (0, _colorLuminance2.default)(tag.color, -0.35),
	                  color: (0, _getColorLuminance2.default)(tag.color) >= 0.5 ? '#000' : '#fff'
	                };
	
	                return _react2.default.createElement(
	                  'span',
	                  { key: tag.shortid, className: _TagEntityTreeFilterByTags2.default.tagsSelectItem, style: tagStyles },
	                  tag.name,
	                  _react2.default.createElement('a', { className: _TagEntityTreeFilterByTags2.default.tagsSelectItemRemove, onClick: function onClick() {
	                      return _this4.onRemoveTagItem(tag, tagIndex);
	                    } })
	                );
	              }),
	              _react2.default.createElement('input', {
	                ref: 'tagSelectionInput',
	                type: 'text',
	                placeholder: selectedTags.length === 0 ? 'select a tag' : '',
	                className: _TagEntityTreeFilterByTags2.default.searchTags,
	                style: stylesForInputTag,
	                onChange: this.onChangeInputTag,
	                onKeyDown: this.onKeyDownInputTag
	              })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          {
	            ref: 'tagList',
	            className: _TagEntityTreeFilterByTags2.default.tagsListContainer,
	            style: stylesForTagsList
	          },
	          _react2.default.createElement(
	            'div',
	            { className: _TagEntityTreeFilterByTags2.default.tagsList },
	            tags.length === 0 ? _react2.default.createElement(
	              'div',
	              { className: _TagEntityTreeFilterByTags2.default.tagsListEmpty },
	              'No tags registered'
	            ) : _react2.default.createElement(_reactList2.default, {
	              itemRenderer: this.createRenderer(tagsToShowInList),
	              length: tagsToShowInList.length
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return TagEntityTreeFilterByTags;
	}(_react.Component);
	
	TagEntityTreeFilterByTags.defaultProps = {
	  onTagSelectChange: function onTagSelectChange() {}
	};
	
	TagEntityTreeFilterByTags.propTypes = {
	  tags: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    shortid: _react.PropTypes.string,
	    name: _react.PropTypes.string,
	    color: _react.PropTypes.string
	  })),
	  selectedTags: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    shortid: _react.PropTypes.string,
	    name: _react.PropTypes.string,
	    color: _react.PropTypes.string
	  })),
	  onTagSelectChange: _react.PropTypes.func,
	  onFilterClose: _react.PropTypes.func
	};
	
	exports.default = TagEntityTreeFilterByTags;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react-list'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hexToRgb = __webpack_require__(29);
	
	var _hexToRgb2 = _interopRequireDefault(_hexToRgb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (hex) {
	  var rgb = (0, _hexToRgb2.default)(hex);
	
	  var RsRGB = void 0,
	      GsRGB = void 0,
	      BsRGB = void 0,
	      R = void 0,
	      G = void 0,
	      B = void 0;
	
	  RsRGB = rgb.r / 255;
	  GsRGB = rgb.g / 255;
	  BsRGB = rgb.b / 255;
	
	  if (RsRGB <= 0.03928) {
	    R = RsRGB / 12.92;
	  } else {
	    R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
	  }
	
	  if (GsRGB <= 0.03928) {
	    G = GsRGB / 12.92;
	  } else {
	    G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
	  }
	
	  if (BsRGB <= 0.03928) {
	    B = BsRGB / 12.92;
	  } else {
	    B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
	  }
	
	  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	
	exports.default = function (hex) {
	  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	  var fullHex = hex.replace(shorthandRegex, function (m, r, g, b) {
	    return r + r + g + g + b + b;
	  });
	
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
	
	  return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./TagEntityTreeFilterByTags.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./TagEntityTreeFilterByTags.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.searchTagsContainer___2CtsN {\n  display: inline-block;\n  margin-left: -0.3rem;\n  margin-right: -0.3rem;\n  position: relative;\n}\n\n.searchTagsInputBox___3Mcro {\n  display: inline-block;\n  padding-left: 0.3rem;\n  padding-right: 0.3rem;\n  position: relative;\n}\n\n.searchTagsInputBox___3Mcro:before {\n  content: \"\\F02B\";\n  margin-right: 0.3rem;\n  color: #c6c6c6;\n  font-family: FontAwesome;\n  position: absolute;\n}\n\n.searchTags___2UjPp {\n  border: none;\n  border-bottom-width: 0;\n  transition: border 0.3s;\n  padding: 0.2rem;\n  width: 35px;\n}\n\n.searchTags___2UjPp:focus,\n.searchTags___2UjPp:hover {\n  border-bottom-width: 0;\n}\n\n.tagsListContainer___TqDs_ {\n  display: block;\n  max-height: 150px;\n  position: relative;\n}\n\n.tagsList___1XWCq {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);\n  display: inline-block;\n  overflow: auto;\n  position: absolute;\n  top: 4px;\n  width: 100%;\n  z-index: 3;\n}\n\n.tagsListEmpty___2YNU7 {\n  padding-top: 0.4rem;\n  padding-bottom: 0.4rem;\n  text-align: center;\n}\n\n.tagsListItem___29aX7 {\n  cursor: pointer;\n  padding-bottom: 0.4rem;\n  padding-left: 0.3rem;\n  padding-right: 0.3rem;\n  padding-top: 0.4rem;\n}\n\n.tagsListItem___29aX7:hover {\n  background-color: #1C97EA;\n  color: #fff;\n}\n\n.tagsSelect___2nOqo {\n  display: inline-block;\n  padding-left: 18px;\n  width: 150px;\n}\n\n.tagsSelectItem___1i0uy {\n  border: 1px solid transparent;\n  border-radius: 2px;\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 400;\n  margin-right: 0.3rem;\n  padding-bottom: 0.1rem;\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n  padding-top: 0.1rem;\n}\n\n.tagsSelectItemRemove___2mq5M {\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.tagsSelectItemRemove___2mq5M:before {\n  content: \" \\D7\";\n}\n", "", {"version":3,"sources":["/./studio/TagEntityTreeFilterByTags.scss","/./studio/studio/TagEntityTreeFilterByTags.scss"],"names":[],"mappings":"AAAA,iBAAiB;ACCjB;EACE,sBAAqB;EACrB,qBAAoB;EACpB,sBAAqB;EACrB,mBAAkB;CACnB;;AAED;EACE,sBAAqB;EACrB,qBAAoB;EACpB,sBAAqB;EACrB,mBAAkB;CACnB;;AAED;EACE,iBAAgB;EAChB,qBAAoB;EACpB,eAAc;EACd,yBAAwB;EACxB,mBAAkB;CACnB;;AAED;EACE,aAAY;EACZ,uBAAsB;EACtB,wBAAuB;EACvB,gBAAe;EACf,YAAW;CACZ;;AAED;;EAEE,uBAAsB;CACvB;;AAED;EACE,eAAc;EACd,kBAAiB;EACjB,mBAAkB;CACnB;;AAED;EACE,uBAAsB;EACtB,qCAAgC;EAChC,2CAAsC;EACtC,sBAAqB;EACrB,eAAc;EACd,mBAAkB;EAClB,SAAQ;EACR,YAAW;EACX,WAAU;CACX;;AAED;EACE,oBAAmB;EACnB,uBAAsB;EACtB,mBAAkB;CACnB;;AAED;EACE,gBAAe;EACf,uBAAsB;EACtB,qBAAoB;EACpB,sBAAqB;EACrB,oBAAmB;CACpB;;AAED;EACE,0BAAyB;EACzB,YAAW;CACZ;;AAED;EACE,sBAAqB;EACrB,mBAAkB;EAClB,aAAY;CACb;;AAED;EACE,8BAA6B;EAC7B,mBAAkB;EAClB,sBAAqB;EACrB,mBAAkB;EAClB,iBAAgB;EAChB,qBAAoB;EACpB,uBAAsB;EACtB,qBAAoB;EACpB,sBAAqB;EACrB,oBAAmB;CACpB;;AAED;EACE,gBAAe;EACf,kBAAiB;CAClB;;AAED;EACE,gBAAc;CACf","file":"TagEntityTreeFilterByTags.scss","sourcesContent":["@charset \"UTF-8\";\n.searchTagsContainer {\n  display: inline-block;\n  margin-left: -0.3rem;\n  margin-right: -0.3rem;\n  position: relative;\n}\n\n.searchTagsInputBox {\n  display: inline-block;\n  padding-left: 0.3rem;\n  padding-right: 0.3rem;\n  position: relative;\n}\n\n.searchTagsInputBox:before {\n  content: \"\\f02b\";\n  margin-right: 0.3rem;\n  color: #c6c6c6;\n  font-family: FontAwesome;\n  position: absolute;\n}\n\n.searchTags {\n  border: none;\n  border-bottom-width: 0;\n  transition: border 0.3s;\n  padding: 0.2rem;\n  width: 35px;\n}\n\n.searchTags:focus,\n.searchTags:hover {\n  border-bottom-width: 0;\n}\n\n.tagsListContainer {\n  display: block;\n  max-height: 150px;\n  position: relative;\n}\n\n.tagsList {\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);\n  display: inline-block;\n  overflow: auto;\n  position: absolute;\n  top: 4px;\n  width: 100%;\n  z-index: 3;\n}\n\n.tagsListEmpty {\n  padding-top: 0.4rem;\n  padding-bottom: 0.4rem;\n  text-align: center;\n}\n\n.tagsListItem {\n  cursor: pointer;\n  padding-bottom: 0.4rem;\n  padding-left: 0.3rem;\n  padding-right: 0.3rem;\n  padding-top: 0.4rem;\n}\n\n.tagsListItem:hover {\n  background-color: #1C97EA;\n  color: #fff;\n}\n\n.tagsSelect {\n  display: inline-block;\n  padding-left: 18px;\n  width: 150px;\n}\n\n.tagsSelectItem {\n  border: 1px solid transparent;\n  border-radius: 2px;\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 400;\n  margin-right: 0.3rem;\n  padding-bottom: 0.1rem;\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n  padding-top: 0.1rem;\n}\n\n.tagsSelectItemRemove {\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.tagsSelectItemRemove:before {\n  content: \" ×\";\n}\n","\n.searchTagsContainer {\n  display: inline-block;\n  margin-left: -0.3rem;\n  margin-right: -0.3rem;\n  position: relative;\n}\n\n.searchTagsInputBox {\n  display: inline-block;\n  padding-left: 0.3rem;\n  padding-right: 0.3rem;\n  position: relative;\n}\n\n.searchTagsInputBox:before {\n  content: \"\\f02b\";\n  margin-right: 0.3rem;\n  color: #c6c6c6;\n  font-family: FontAwesome;\n  position: absolute;\n}\n\n.searchTags {\n  border: none;\n  border-bottom-width: 0;\n  transition: border 0.3s;\n  padding: 0.2rem;\n  width: 35px;\n}\n\n.searchTags:focus,\n.searchTags:hover {\n  border-bottom-width: 0;\n}\n\n.tagsListContainer {\n  display: block;\n  max-height: 150px;\n  position: relative;\n}\n\n.tagsList {\n  background-color: #fff;\n  border: 1px solid rgba(0,0,0,.2);\n  box-shadow: 0 3px 12px rgba(0,0,0,.15);\n  display: inline-block;\n  overflow: auto;\n  position: absolute;\n  top: 4px;\n  width: 100%;\n  z-index: 3;\n}\n\n.tagsListEmpty {\n  padding-top: 0.4rem;\n  padding-bottom: 0.4rem;\n  text-align: center;\n}\n\n.tagsListItem {\n  cursor: pointer;\n  padding-bottom: 0.4rem;\n  padding-left: 0.3rem;\n  padding-right: 0.3rem;\n  padding-top: 0.4rem;\n}\n\n.tagsListItem:hover {\n  background-color: #1C97EA;\n  color: #fff;\n}\n\n.tagsSelect {\n  display: inline-block;\n  padding-left: 18px;\n  width: 150px;\n}\n\n.tagsSelectItem {\n  border: 1px solid transparent;\n  border-radius: 2px;\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 400;\n  margin-right: 0.3rem;\n  padding-bottom: 0.1rem;\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n  padding-top: 0.1rem;\n}\n\n.tagsSelectItemRemove {\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.tagsSelectItemRemove:before {\n  content: \" ×\";\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"searchTagsContainer": "searchTagsContainer___2CtsN",
		"searchTagsInputBox": "searchTagsInputBox___3Mcro",
		"searchTags": "searchTags___2UjPp",
		"tagsListContainer": "tagsListContainer___TqDs_",
		"tagsList": "tagsList___1XWCq",
		"tagsListEmpty": "tagsListEmpty___2YNU7",
		"tagsListItem": "tagsListItem___29aX7",
		"tagsSelect": "tagsSelect___2nOqo",
		"tagsSelectItem": "tagsSelectItem___1i0uy",
		"tagsSelectItemRemove": "tagsSelectItemRemove___2mq5M"
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ShowColor = __webpack_require__(6);
	
	var _ShowColor2 = _interopRequireDefault(_ShowColor);
	
	var _findTagInSet = __webpack_require__(21);
	
	var _findTagInSet2 = _interopRequireDefault(_findTagInSet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TagEntityTreeItem = function (_Component) {
	  _inherits(TagEntityTreeItem, _Component);
	
	  function TagEntityTreeItem() {
	    _classCallCheck(this, TagEntityTreeItem);
	
	    return _possibleConstructorReturn(this, (TagEntityTreeItem.__proto__ || Object.getPrototypeOf(TagEntityTreeItem)).apply(this, arguments));
	  }
	
	  _createClass(TagEntityTreeItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          entity = _props.entity,
	          entities = _props.entities;
	
	      var tags = entity.tags || [];
	
	      // for tags, display the color right in the entity tree
	      if (entity.__entitySet === 'tags') {
	        tags = [entity];
	      }
	
	      var tagsLength = tags.length;
	
	      return _react2.default.createElement(
	        'div',
	        { style: { display: 'inline-block', marginLeft: '0.2rem', marginRight: '0.2rem' } },
	        tags.map(function (tag, tagIndex) {
	          var tagFound = (0, _findTagInSet2.default)(entities.tags, tag.shortid) || {};
	
	          return _react2.default.createElement(
	            'span',
	            { key: tag.shortid, title: tagFound.name },
	            _react2.default.createElement(_ShowColor2.default, { color: tagFound.color, width: 8, height: 15 }),
	            tagIndex !== tagsLength - 1 ? ' ' : null
	          );
	        })
	      );
	    }
	  }]);
	
	  return TagEntityTreeItem;
	}(_react.Component);
	
	exports.default = TagEntityTreeItem;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ShowColor = __webpack_require__(6);
	
	var _ShowColor2 = _interopRequireDefault(_ShowColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TagEntityTreeTagGroupItem = function (_Component) {
	  _inherits(TagEntityTreeTagGroupItem, _Component);
	
	  function TagEntityTreeTagGroupItem() {
	    _classCallCheck(this, TagEntityTreeTagGroupItem);
	
	    return _possibleConstructorReturn(this, (TagEntityTreeTagGroupItem.__proto__ || Object.getPrototypeOf(TagEntityTreeTagGroupItem)).apply(this, arguments));
	  }
	
	  _createClass(TagEntityTreeTagGroupItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          groupType = _props.groupType,
	          name = _props.name,
	          color = _props.color;
	
	
	      if (groupType !== 'tags') {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        'span',
	        { title: name, style: { display: 'inline-block' } },
	        _react2.default.createElement(_ShowColor2.default, { color: color, width: 8, height: 15 }),
	        '\xA0'
	      );
	    }
	  }]);
	
	  return TagEntityTreeTagGroupItem;
	}(_react.Component);
	
	exports.default = TagEntityTreeTagGroupItem;

/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (entity, entitySets, filterInfo) {
	  var tags = filterInfo.tags;
	
	  var allTagsInEntity = entity.tags || [];
	
	  if (tags == null) {
	    return true;
	  }
	
	  if (tags.length > 0) {
	    return tags.every(function (tag) {
	      return allTagsInEntity.some(function (tagInEntity) {
	        return tagInEntity.shortid === tag.shortid;
	      });
	    });
	  }
	
	  return true;
	};

/***/ }
/******/ ]);


/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _HtmlToXlsxProperties = __webpack_require__(1);
	
	var _HtmlToXlsxProperties2 = _interopRequireDefault(_HtmlToXlsxProperties);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addPropertiesComponent('html to xlsx', _HtmlToXlsxProperties2.default, function (entity) {
	  return entity.__entitySet === 'templates' && entity.recipe === 'html-to-xlsx';
	});
	
	_jsreportStudio2.default.addApiSpec({
	  template: {
	    htmlToXlsx: {
	      htmlEngine: '...'
	    }
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Properties = function (_Component) {
	  _inherits(Properties, _Component);
	
	  function Properties(props) {
	    _classCallCheck(this, Properties);
	
	    var _this = _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).call(this, props));
	
	    _this.applyDefaultsToEntity = _this.applyDefaultsToEntity.bind(_this);
	    _this.changeHtmlToXlsx = _this.changeHtmlToXlsx.bind(_this);
	    return _this;
	  }
	
	  _createClass(Properties, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.applyDefaultsToEntity(this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // when component changes because another template is created
	      if (this.props.entity._id !== nextProps.entity._id) {
	        this.applyDefaultsToEntity(nextProps);
	      }
	    }
	  }, {
	    key: 'applyDefaultsToEntity',
	    value: function applyDefaultsToEntity(props) {
	      var entity = props.entity;
	
	      var htmlEngines = _jsreportStudio2.default.extensions['html-to-xlsx'].options.htmlEngines;
	      var entityNeedsDefault = false;
	
	      if (entity.__isNew || entity.htmlToXlsx == null || entity.htmlToXlsx.htmlEngine == null) {
	        entityNeedsDefault = true;
	      }
	
	      if (htmlEngines != null && htmlEngines[0] != null && entityNeedsDefault) {
	        this.changeHtmlToXlsx(props, {
	          htmlEngine: htmlEngines[0]
	        });
	      }
	    }
	  }, {
	    key: 'changeHtmlToXlsx',
	    value: function changeHtmlToXlsx(props, change) {
	      var entity = props.entity,
	          onChange = props.onChange;
	
	      var htmlToXlsx = entity.htmlToXlsx || {};
	
	      onChange(_extends({}, entity, {
	        htmlToXlsx: _extends({}, htmlToXlsx, change)
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var entity = this.props.entity;
	
	      var htmlToXlsx = entity.htmlToXlsx || {};
	      var htmlEngines = _jsreportStudio2.default.extensions['html-to-xlsx'].options.htmlEngines;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'html engine'
	          ),
	          _react2.default.createElement(
	            'select',
	            {
	              value: htmlToXlsx.htmlEngine,
	              onChange: function onChange(v) {
	                return _this2.changeHtmlToXlsx(_this2.props, { htmlEngine: v.target.value });
	              }
	            },
	            htmlEngines.map(function (engine) {
	              return _react2.default.createElement(
	                'option',
	                { key: engine, value: engine },
	                engine
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return Properties;
	}(_react.Component);
	
	exports.default = Properties;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var debug = false;
	var preview = function preview() {
	  debug = true;
	  _jsreportStudio2.default.preview();
	};
	
	_jsreportStudio2.default.addApiSpec({
	  options: { debug: { logsToResponse: true, logsToResponseHeader: true } }
	});
	
	_jsreportStudio2.default.addToolbarComponent(function (props) {
	  return React.createElement(
	    'div',
	    {
	      className: 'toolbar-button ' + (!props.canRun ? 'disabled' : ''), onClick: function onClick() {
	        return preview();
	      } },
	    React.createElement('i', { className: 'fa fa-bug' }),
	    ' Debug'
	  );
	});
	
	_jsreportStudio2.default.previewListeners.push(function (request, entities) {
	  if (debug) {
	    request.options.debug = { logsToResponse: true };
	  }
	  debug = false;
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ }
/******/ ]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _jsreportStudio = __webpack_require__(2);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FreezeModal = function (_Component) {
	  _inherits(FreezeModal, _Component);
	
	  function FreezeModal() {
	    _classCallCheck(this, FreezeModal);
	
	    return _possibleConstructorReturn(this, (FreezeModal.__proto__ || Object.getPrototypeOf(FreezeModal)).apply(this, arguments));
	  }
	
	  _createClass(FreezeModal, [{
	    key: 'freeze',
	    value: function freeze() {
	      _jsreportStudio2.default.setSetting('freeze', true);
	      this.props.close();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Freeze changes'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'The freeze mode will block accidental changes in entities like templates.',
	          React.createElement('br', null),
	          'The only permitted operations in freeze mode are persisting logs and output reports.',
	          React.createElement('br', null),
	          'The freeze mode can be switched back to normal using the menu command "Release freeze".'
	        ),
	        React.createElement(
	          'div',
	          { className: 'button-bar' },
	          React.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _this2.freeze();
	              } },
	            'Freeze'
	          )
	        )
	      );
	    }
	  }]);
	
	  return FreezeModal;
	}(_react.Component);
	
	var ReleaseFreezeModal = function (_Component2) {
	  _inherits(ReleaseFreezeModal, _Component2);
	
	  function ReleaseFreezeModal() {
	    _classCallCheck(this, ReleaseFreezeModal);
	
	    return _possibleConstructorReturn(this, (ReleaseFreezeModal.__proto__ || Object.getPrototypeOf(ReleaseFreezeModal)).apply(this, arguments));
	  }
	
	  _createClass(ReleaseFreezeModal, [{
	    key: 'release',
	    value: function release() {
	      _jsreportStudio2.default.setSetting('freeze', false);
	      this.props.close();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Release freeze'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'This will switch the editing mode to normal.'
	        ),
	        React.createElement(
	          'div',
	          { className: 'button-bar' },
	          React.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _this4.release();
	              } },
	            'Release'
	          )
	        )
	      );
	    }
	  }]);
	
	  return ReleaseFreezeModal;
	}(_react.Component);
	
	var freeze = function freeze() {
	  _jsreportStudio2.default.openModal(FreezeModal);
	};
	
	var release = function release() {
	  _jsreportStudio2.default.openModal(ReleaseFreezeModal);
	};
	
	_jsreportStudio2.default.initializeListeners.push(function () {
	  if (_jsreportStudio2.default.authentication && !_jsreportStudio2.default.authentication.user.isAdmin) {
	    return;
	  }
	
	  _jsreportStudio2.default.addToolbarComponent(function () {
	    return _jsreportStudio2.default.getSettingValueByKey('freeze', false) ? React.createElement('span', null) : React.createElement(
	      'div',
	      {
	        className: 'toolbar-button', onClick: freeze },
	      React.createElement('i', { className: 'fa fa-lock' }),
	      'Freeze edits'
	    );
	  }, 'settings');
	
	  _jsreportStudio2.default.addToolbarComponent(function () {
	    return _jsreportStudio2.default.getSettingValueByKey('freeze', false) ? React.createElement(
	      'div',
	      {
	        className: 'toolbar-button', onClick: release },
	      React.createElement('i', { className: 'fa fa-unlock' }),
	      'Release freeze'
	    ) : React.createElement('span', null);
	  }, 'settings');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HistoryEditor = __webpack_require__(3);
	
	var _HistoryEditor2 = _interopRequireDefault(_HistoryEditor);
	
	var _LocalChangesEditor = __webpack_require__(9);
	
	var _LocalChangesEditor2 = _interopRequireDefault(_LocalChangesEditor);
	
	var _VersionControl = __webpack_require__(5);
	
	var _VersionControl2 = _interopRequireDefault(_VersionControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_jsreportStudio2.default.addEditorComponent('versionControlHistory', _HistoryEditor2.default);
	_jsreportStudio2.default.addEditorComponent('versionControlLocalChanges', _LocalChangesEditor2.default);
	
	var VCToolbar = function (_Component) {
	  _inherits(VCToolbar, _Component);
	
	  function VCToolbar() {
	    _classCallCheck(this, VCToolbar);
	
	    var _this = _possibleConstructorReturn(this, (VCToolbar.__proto__ || Object.getPrototypeOf(VCToolbar)).call(this));
	
	    _this.state = {};
	    _this.tryHide = _this.tryHide.bind(_this);
	    return _this;
	  }
	
	  _createClass(VCToolbar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('click', this.tryHide);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('click', this.tryHide);
	    }
	  }, {
	    key: 'tryHide',
	    value: function tryHide() {
	      this.setState({ expandedToolbar: false });
	    }
	  }, {
	    key: 'openHistory',
	    value: function openHistory(e) {
	      e.stopPropagation();
	      this.tryHide();
	      _jsreportStudio2.default.openTab({ key: 'versionControlHistory', editorComponentKey: 'versionControlHistory', title: 'Commits history' });
	    }
	  }, {
	    key: 'openLocalChanges',
	    value: function openLocalChanges(e) {
	      e.stopPropagation();
	      this.tryHide();
	      _jsreportStudio2.default.openTab({ key: 'versionControlLocalChanges', editorComponentKey: 'versionControlLocalChanges', title: 'Uncommited changes' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'toolbar-button', onClick: function onClick(e) {
	            return _this2.openLocalChanges(e);
	          } },
	        _react2.default.createElement('i', { className: 'fa fa-history ' }),
	        'Commit',
	        _react2.default.createElement('span', { className: _VersionControl2.default.runCaret, onClick: function onClick(e) {
	            e.stopPropagation();_this2.setState({ expandedToolbar: !_this2.state.expandedToolbar });
	          } }),
	        _react2.default.createElement(
	          'div',
	          { className: _VersionControl2.default.runPopup, style: { display: this.state.expandedToolbar ? 'block' : 'none' } },
	          _react2.default.createElement(
	            'div',
	            { title: 'History', className: 'toolbar-button', onClick: function onClick(e) {
	                return _this2.openHistory(e);
	              } },
	            _react2.default.createElement('i', { className: 'fa fa-history' }),
	            _react2.default.createElement(
	              'span',
	              null,
	              'History'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return VCToolbar;
	}(_react.Component);
	
	_jsreportStudio2.default.addToolbarComponent(function (props) {
	  return _react2.default.createElement(VCToolbar, null);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _ChangesTable = __webpack_require__(4);
	
	var _ChangesTable2 = _interopRequireDefault(_ChangesTable);
	
	var _VersionControl = __webpack_require__(5);
	
	var _VersionControl2 = _interopRequireDefault(_VersionControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HistoryEditor = function (_Component) {
	  _inherits(HistoryEditor, _Component);
	
	  function HistoryEditor() {
	    _classCallCheck(this, HistoryEditor);
	
	    var _this = _possibleConstructorReturn(this, (HistoryEditor.__proto__ || Object.getPrototypeOf(HistoryEditor)).call(this));
	
	    _this.state = { history: [] };
	    return _this;
	  }
	
	  _createClass(HistoryEditor, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.load();
	    }
	  }, {
	    key: 'load',
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var res;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                _context.next = 3;
	                return _jsreportStudio2.default.api.get('/api/version-control/history');
	
	              case 3:
	                res = _context.sent;
	
	                this.setState({ history: res });
	                _context.next = 10;
	                break;
	
	              case 7:
	                _context.prev = 7;
	                _context.t0 = _context['catch'](0);
	
	                alert(_context.t0);
	
	              case 10:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 7]]);
	      }));
	
	      function load() {
	        return _ref.apply(this, arguments);
	      }
	
	      return load;
	    }()
	  }, {
	    key: 'checkout',
	    value: function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
	        var localChanges;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.prev = 0;
	                _context2.next = 3;
	                return _jsreportStudio2.default.api.get('/api/version-control/local-changes');
	
	              case 3:
	                localChanges = _context2.sent;
	
	                if (!(localChanges.length > 0)) {
	                  _context2.next = 6;
	                  break;
	                }
	
	                return _context2.abrupt('return', this.setState({ error: 'You have uncommited changes. You need to commit or revert them before checkout.' }));
	
	              case 6:
	                if (!confirm('This will change the state of all entities to the state stored with selected commit. Are you sure?')) {
	                  _context2.next = 10;
	                  break;
	                }
	
	                _context2.next = 9;
	                return _jsreportStudio2.default.api.post('/api/version-control/checkout', {
	                  data: {
	                    _id: id
	                  }
	                });
	
	              case 9:
	                // studio needs a method to reload entities, it would be also usefull for export import
	                location.reload();
	
	              case 10:
	                _context2.next = 15;
	                break;
	
	              case 12:
	                _context2.prev = 12;
	                _context2.t0 = _context2['catch'](0);
	
	                alert(_context2.t0);
	
	              case 15:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this, [[0, 12]]);
	      }));
	
	      function checkout(_x) {
	        return _ref2.apply(this, arguments);
	      }
	
	      return checkout;
	    }()
	  }, {
	    key: 'selectCommit',
	    value: function () {
	      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(c) {
	        var res;
	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                this.setState({ commit: c });
	
	                _context3.prev = 1;
	                _context3.next = 4;
	                return _jsreportStudio2.default.api.get('/api/version-control/diff/' + c._id);
	
	              case 4:
	                res = _context3.sent;
	
	                this.setState({ diff: res });
	                _context3.next = 11;
	                break;
	
	              case 8:
	                _context3.prev = 8;
	                _context3.t0 = _context3['catch'](1);
	
	                alert(_context3.t0);
	
	              case 11:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this, [[1, 8]]);
	      }));
	
	      function selectCommit(_x2) {
	        return _ref3.apply(this, arguments);
	      }
	
	      return selectCommit;
	    }()
	  }, {
	    key: 'renderCommit',
	    value: function renderCommit(commit) {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h2',
	          null,
	          _react2.default.createElement('i', { className: 'fa fa-info-circle' }),
	          ' ',
	          commit.message
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'small',
	            null,
	            commit.date.toLocaleString()
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'button danger', onClick: function onClick() {
	                return _this2.checkout(commit._id);
	              } },
	            'Checkout'
	          ),
	          _react2.default.createElement(
	            'span',
	            { style: { color: 'red', marginTop: '0.5rem', display: this.state.error ? 'block' : 'none' } },
	            this.state.error
	          )
	        )
	      );
	    }
	  }, {
	    key: 'localChanges',
	    value: function localChanges() {
	      _jsreportStudio2.default.openTab({ key: 'versionControlLocalChanges', editorComponentKey: 'versionControlLocalChanges', title: 'Uncommited changes' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'block custom-editor' },
	        _react2.default.createElement(
	          'h2',
	          null,
	          _react2.default.createElement('i', { className: 'fa fa-history' }),
	          ' Commits history',
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _this3.load();
	              } },
	            'Refresh'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _this3.localChanges();
	              } },
	            'Uncommited changes'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { marginTop: '1rem', marginBottom: '1rem' } },
	          this.state.history.length > 0 ? 'Select a commit from the list to inspect the changes..' : ''
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _VersionControl2.default.listContainer + ' block-item' },
	          _react2.default.createElement(
	            'table',
	            { className: 'table' },
	            _react2.default.createElement(
	              'thead',
	              null,
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  'date'
	                ),
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  'message'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'tbody',
	              null,
	              this.state.history.map(function (h) {
	                return _react2.default.createElement(
	                  'tr',
	                  { key: h._id, onClick: function onClick() {
	                      return _this3.selectCommit(h);
	                    } },
	                  _react2.default.createElement(
	                    'td',
	                    null,
	                    h.date.toLocaleString()
	                  ),
	                  _react2.default.createElement(
	                    'td',
	                    null,
	                    h.message
	                  )
	                );
	              })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { marginTop: '1rem', marginBottom: '1rem' } },
	          this.state.commit ? this.renderCommit(this.state.commit) : null
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _VersionControl2.default.listContainer + ' block-item' },
	          this.state.diff ? _react2.default.createElement(_ChangesTable2.default, { changes: this.state.diff }) : ''
	        )
	      );
	    }
	  }]);
	
	  return HistoryEditor;
	}(_react.Component);
	
	exports.default = HistoryEditor;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var openDiff = function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(patch) {
	    var res;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return _jsreportStudio2.default.api.post('/api/version-control/diff-html', {
	              data: {
	                patch: patch
	              },
	              parseJSON: false
	            });
	
	          case 2:
	            res = _context.sent;
	
	            _jsreportStudio2.default.setPreviewFrameSrc('data:text/html;charset=utf-8,' + encodeURIComponent(res));
	
	          case 4:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));
	
	  return function openDiff(_x) {
	    return _ref.apply(this, arguments);
	  };
	}();
	
	var operationIcon = function operationIcon(operation) {
	  switch (operation) {
	    case 'insert':
	      return 'fa fa-plus';
	    case 'remove':
	      return 'fa fa-eraser';
	    case 'update':
	      return 'fa fa-pencil';
	  }
	};
	
	var renderChange = function renderChange(c) {
	  return React.createElement(
	    'tbody',
	    { key: c.entitySet + c.path },
	    React.createElement(
	      'tr',
	      { onClick: function onClick() {
	          return openDiff(c.patch);
	        } },
	      React.createElement(
	        'td',
	        { style: { textAlign: 'center' } },
	        React.createElement('i', { className: operationIcon(c.operation) })
	      ),
	      React.createElement(
	        'td',
	        null,
	        c.path
	      ),
	      React.createElement(
	        'td',
	        null,
	        c.entitySet
	      )
	    )
	  );
	};
	
	exports.default = function (_ref2) {
	  var changes = _ref2.changes;
	  return React.createElement(
	    'table',
	    { className: 'table' },
	    React.createElement(
	      'thead',
	      null,
	      React.createElement(
	        'tr',
	        null,
	        React.createElement(
	          'th',
	          { style: { width: '20px' } },
	          'operation'
	        ),
	        React.createElement(
	          'th',
	          null,
	          'path'
	        ),
	        React.createElement(
	          'th',
	          null,
	          'entity set'
	        )
	      )
	    ),
	    changes.map(function (c) {
	      return renderChange(c);
	    })
	  );
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./VersionControl.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./VersionControl.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".popup___3IzND {\n  background-color: #424c57;\n  position: absolute;\n  right: 0;\n  padding: 0.5rem;\n  top: 2.4rem;\n  z-index: 200;\n}\n\n.popup___3IzND > div {\n  padding: 0.5rem;\n}\n\n.popup___3IzND > div:hover {\n  background-color: red;\n}\n\n.runCaret___B-PLX {\n  font-family: FontAwesome;\n  padding: 0.5rem;\n  font-size: 0.7rem;\n}\n\n.runCaret___B-PLX:hover {\n  color: blue;\n}\n\n.runCaret___B-PLX:after {\n  content: \"\\F0D7   \";\n}\n\n.runPopup___2LDvq {\n  background-color: #424c57;\n  top: 2.4rem;\n  position: absolute;\n  padding: 0.5rem;\n  z-index: 200;\n}\n\n.listContainer___fpu9d {\n  overflow: auto;\n  position: relative;\n  padding: 1rem;\n  min-height: 0;\n  height: auto;\n}\n\n.listContainer___fpu9d > table {\n  width: 95%;\n  position: absolute !important;\n}\n", "", {"version":3,"sources":["/./studio/studio/VersionControl.scss"],"names":[],"mappings":"AAAA;EACI,0BAAyB;EACzB,mBAAkB;EAClB,SAAQ;EACR,gBAAe;EACf,YAAW;EACX,aACF;CAAE;;AAEF;EACE,gBAAe;CAChB;;AAED;EACE,sBAAqB;CACtB;;AAED;EACE,yBAAwB;EACxB,gBAAe;EACf,kBAAiB;CAClB;;AAED;EACE,YAAW;CACZ;;AAED;EACE,oBACF;CAAE;;AAEF;EACE,0BAAyB;EACzB,YAAW;EACX,mBAAkB;EAClB,gBAAe;EACf,aAAY;CACb;;AAED;EACE,eAAc;EACd,mBAAkB;EAClB,cAAa;EACb,cAAa;EACb,aAAY;CACb;;AAED;EAEE,WAAU;EAEV,8BAA6B;CAC9B","file":"VersionControl.scss","sourcesContent":[".popup {\r\n    background-color: #424c57;\r\n    position: absolute;\r\n    right: 0;\r\n    padding: 0.5rem;\r\n    top: 2.4rem;\r\n    z-index: 200\r\n  }\r\n  \r\n  .popup > div  {\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .popup > div:hover {\r\n    background-color: red;\r\n  }\r\n  \r\n  .runCaret {\r\n    font-family: FontAwesome;\r\n    padding: 0.5rem;\r\n    font-size: 0.7rem;\r\n  }\r\n  \r\n  .runCaret:hover {\r\n    color: blue;\r\n  }\r\n  \r\n  .runCaret:after {\r\n    content: \"\\f0d7 \"\r\n  }\r\n  \r\n  .runPopup {\r\n    background-color: #424c57;\r\n    top: 2.4rem;\r\n    position: absolute;\r\n    padding: 0.5rem;\r\n    z-index: 200;\r\n  }\r\n  \r\n  .listContainer {   \r\n    overflow: auto;\r\n    position: relative;\r\n    padding: 1rem;\r\n    min-height: 0;\r\n    height: auto;\r\n  }\r\n  \r\n  .listContainer > table {\r\n    // it somehow shows the horizontal scrollbar even when no needeit, this workaround to hide it\r\n    width: 95%;\r\n    // the tabs height based on flex box is otherwise wrongly calculated\r\n    position: absolute !important;\r\n  }"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"popup": "popup___3IzND",
		"runCaret": "runCaret___B-PLX",
		"runPopup": "runPopup___2LDvq",
		"listContainer": "listContainer___fpu9d"
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _ChangesTable = __webpack_require__(4);
	
	var _ChangesTable2 = _interopRequireDefault(_ChangesTable);
	
	var _VersionControl = __webpack_require__(5);
	
	var _VersionControl2 = _interopRequireDefault(_VersionControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LocalChangesEditor = function (_Component) {
	  _inherits(LocalChangesEditor, _Component);
	
	  function LocalChangesEditor(props) {
	    _classCallCheck(this, LocalChangesEditor);
	
	    var _this = _possibleConstructorReturn(this, (LocalChangesEditor.__proto__ || Object.getPrototypeOf(LocalChangesEditor)).call(this, props));
	
	    _this.state = { message: '' };
	    return _this;
	  }
	
	  _createClass(LocalChangesEditor, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.load();
	    }
	  }, {
	    key: 'load',
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var res;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                _context.next = 3;
	                return _jsreportStudio2.default.api.get('/api/version-control/local-changes');
	
	              case 3:
	                res = _context.sent;
	
	                this.setState({ diff: res });
	                _context.next = 10;
	                break;
	
	              case 7:
	                _context.prev = 7;
	                _context.t0 = _context['catch'](0);
	
	                alert(_context.t0);
	
	              case 10:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 7]]);
	      }));
	
	      function load() {
	        return _ref.apply(this, arguments);
	      }
	
	      return load;
	    }()
	  }, {
	    key: 'commit',
	    value: function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                if (this.state.message) {
	                  _context2.next = 2;
	                  break;
	                }
	
	                return _context2.abrupt('return', this.setState({ error: 'Commit message must be filled' }));
	
	              case 2:
	                _context2.prev = 2;
	                _context2.next = 5;
	                return _jsreportStudio2.default.api.post('/api/version-control/commit', {
	                  data: {
	                    message: this.state.message
	                  }
	                });
	
	              case 5:
	                this.setState({ message: '', error: null });
	                _context2.next = 8;
	                return this.load();
	
	              case 8:
	                _context2.next = 13;
	                break;
	
	              case 10:
	                _context2.prev = 10;
	                _context2.t0 = _context2['catch'](2);
	
	                alert(_context2.t0);
	
	              case 13:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this, [[2, 10]]);
	      }));
	
	      function commit() {
	        return _ref2.apply(this, arguments);
	      }
	
	      return commit;
	    }()
	  }, {
	    key: 'revert',
	    value: function () {
	      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                _context3.prev = 0;
	
	                if (!confirm('This will delete all your uncommited files and revert changes. Are you sure?')) {
	                  _context3.next = 5;
	                  break;
	                }
	
	                _context3.next = 4;
	                return _jsreportStudio2.default.api.post('/api/version-control/revert');
	
	              case 4:
	                // studio needs a method to reload entities, it would be also usefull for export import
	                location.reload();
	
	              case 5:
	                _context3.next = 10;
	                break;
	
	              case 7:
	                _context3.prev = 7;
	                _context3.t0 = _context3['catch'](0);
	
	                alert(_context3.t0);
	
	              case 10:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this, [[0, 7]]);
	      }));
	
	      function revert() {
	        return _ref3.apply(this, arguments);
	      }
	
	      return revert;
	    }()
	  }, {
	    key: 'history',
	    value: function history() {
	      _jsreportStudio2.default.openTab({ key: 'versionControlHistory', editorComponentKey: 'versionControlHistory', title: 'Commits history' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'block custom-editor' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          _react2.default.createElement('i', { className: 'fa fa-history' }),
	          ' uncommited changes',
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _this2.history();
	              } },
	            'Commits history'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Message'
	          ),
	          _react2.default.createElement('input', { type: 'text', value: this.state.message, onChange: function onChange(event) {
	              return _this2.setState({ message: event.target.value, error: null });
	            } }),
	          _react2.default.createElement(
	            'span',
	            { style: { color: 'red', display: this.state.error ? 'block' : 'none' } },
	            this.state.error
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _this2.commit();
	              } },
	            'Commit'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'button danger', onClick: function onClick() {
	                return _this2.revert();
	              } },
	            'Revert'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _this2.load();
	              } },
	            'Refresh'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _VersionControl2.default.listContainer + ' block-item' },
	          this.state.diff ? _react2.default.createElement(_ChangesTable2.default, { changes: this.state.diff }) : ''
	        )
	      );
	    }
	  }]);
	
	  return LocalChangesEditor;
	}(_react.Component);
	
	exports.default = LocalChangesEditor;

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _socket = __webpack_require__(2);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	_jsreportStudio2.default.initializeListeners.push(function () {
	  if (!_jsreportStudio2.default.extensions['fs-store'].options.syncModifications) {
	    console.log('Skipping active sync with server');
	    return;
	  }
	
	  var socket = (0, _socket2.default)({ path: _jsreportStudio2.default.resolveUrl('/socket.io') });
	
	  console.log('Listening to the server changes');
	  var syncing = false;
	  socket.on('external-modification', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	    var lastActiveEntity;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            lastActiveEntity = _jsreportStudio2.default.getLastActiveTemplate();
	
	            if (!(!lastActiveEntity || syncing)) {
	              _context.next = 3;
	              break;
	            }
	
	            return _context.abrupt('return');
	
	          case 3:
	
	            console.log('Syncing last active entity', lastActiveEntity);
	            syncing = true;
	
	            _context.prev = 5;
	
	            _jsreportStudio2.default.unloadEntity(lastActiveEntity._id);
	            _context.next = 9;
	            return _jsreportStudio2.default.loadEntity(lastActiveEntity._id);
	
	          case 9:
	            _jsreportStudio2.default.openTab({ _id: lastActiveEntity._id });
	            _jsreportStudio2.default.preview();
	
	          case 11:
	            _context.prev = 11;
	
	            syncing = false;
	            return _context.finish(11);
	
	          case 14:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined, [[5,, 11, 14]]);
	  })));
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['socket.io-client'];

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _DataEditor = __webpack_require__(1);
	
	var _DataEditor2 = _interopRequireDefault(_DataEditor);
	
	var _DataProperties = __webpack_require__(4);
	
	var _DataProperties2 = _interopRequireDefault(_DataProperties);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addEntitySet({
	  name: 'data',
	  faIcon: 'fa-database',
	  visibleName: 'sample data',
	  helpUrl: 'http://jsreport.net/learn/inline-data',
	  entityTreePosition: 900
	});
	
	_jsreportStudio2.default.addPropertiesComponent(_DataProperties2.default.title, _DataProperties2.default, function (entity) {
	  return entity.__entitySet === 'templates';
	});
	_jsreportStudio2.default.addEditorComponent('data', _DataEditor2.default, function (reformatter, entity) {
	  return { dataJson: reformatter(entity.dataJson, 'js') };
	});
	
	_jsreportStudio2.default.previewListeners.push(function (request, entities) {
	  if (!request.template.data || !request.template.data.shortid) {
	    return;
	  }
	
	  // try to fill request.data from the active open tab with sample data
	
	  var dataDetails = Object.keys(entities).map(function (e) {
	    return entities[e];
	  }).filter(function (d) {
	    return d.shortid === request.template.data.shortid && d.__entitySet === 'data' && (d.__isLoaded || d.__isNew);
	  });
	
	  if (!dataDetails.length) {
	    return;
	  }
	
	  request.data = dataDetails[0].dataJson || JSON.stringify({});
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DataEditor = function (_Component) {
	  _inherits(DataEditor, _Component);
	
	  function DataEditor() {
	    _classCallCheck(this, DataEditor);
	
	    return _possibleConstructorReturn(this, (DataEditor.__proto__ || Object.getPrototypeOf(DataEditor)).apply(this, arguments));
	  }
	
	  _createClass(DataEditor, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          entity = _props.entity,
	          _onUpdate = _props.onUpdate;
	
	
	      return _react2.default.createElement(_jsreportStudio.TextEditor, {
	        name: entity._id,
	        mode: 'javascript',
	        value: entity.dataJson || '',
	        onUpdate: function onUpdate(v) {
	          return _onUpdate(Object.assign({}, entity, { dataJson: v }));
	        }
	      });
	    }
	  }]);
	
	  return DataEditor;
	}(_react.Component);
	
	exports.default = DataEditor;
	
	
	DataEditor.propTypes = {
	  entity: _react2.default.PropTypes.object.isRequired,
	  onUpdate: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Properties = function (_Component) {
	  _inherits(Properties, _Component);
	
	  function Properties() {
	    _classCallCheck(this, Properties);
	
	    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	  }
	
	  _createClass(Properties, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.removeInvalidDataReferences();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.removeInvalidDataReferences();
	    }
	  }, {
	    key: 'removeInvalidDataReferences',
	    value: function removeInvalidDataReferences() {
	      var _props = this.props,
	          entity = _props.entity,
	          entities = _props.entities,
	          onChange = _props.onChange;
	
	
	      if (!entity.data) {
	        return;
	      }
	
	      var updatedDataItems = Object.keys(entities).filter(function (k) {
	        return entities[k].__entitySet === 'data' && entities[k].shortid === entity.data.shortid;
	      });
	
	      if (updatedDataItems.length === 0) {
	        onChange({ _id: entity._id, data: null });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          entity = _props2.entity,
	          entities = _props2.entities,
	          _onChange = _props2.onChange;
	
	      var dataItems = Properties.selectDataItems(entities);
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'select',
	            {
	              value: entity.data ? entity.data.shortid : '',
	              onChange: function onChange(v) {
	                return _onChange({ _id: entity._id, data: v.target.value !== 'empty' ? { shortid: v.target.value } : null });
	              } },
	            _react2.default.createElement(
	              'option',
	              { key: 'empty', value: 'empty' },
	              '- not selected -'
	            ),
	            dataItems.map(function (e) {
	              return _react2.default.createElement(
	                'option',
	                { key: e.shortid, value: e.shortid },
	                e.name
	              );
	            })
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'selectDataItems',
	    value: function selectDataItems(entities) {
	      return Object.keys(entities).filter(function (k) {
	        return entities[k].__entitySet === 'data';
	      }).map(function (k) {
	        return entities[k];
	      });
	    }
	  }, {
	    key: 'title',
	    value: function title(entity, entities) {
	      if (!entity.data || !entity.data.shortid) {
	        return 'data';
	      }
	
	      var foundItems = Properties.selectDataItems(entities).filter(function (e) {
	        return entity.data.shortid === e.shortid;
	      });
	
	      if (!foundItems.length) {
	        return 'data';
	      }
	
	      return 'sample data: ' + foundItems[0].name;
	    }
	  }]);
	
	  return Properties;
	}(_react.Component);
	
	exports.default = Properties;

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ChromeProperties = __webpack_require__(1);
	
	var _ChromeProperties2 = _interopRequireDefault(_ChromeProperties);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _ChromeEditor = __webpack_require__(5);
	
	var _ChromeEditor2 = _interopRequireDefault(_ChromeEditor);
	
	var _constants = __webpack_require__(4);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _ChromeTitle = __webpack_require__(6);
	
	var _ChromeTitle2 = _interopRequireDefault(_ChromeTitle);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addPropertiesComponent('chrome pdf', _ChromeProperties2.default, function (entity) {
	  return entity.__entitySet === 'templates' && entity.recipe === 'chrome-pdf';
	});
	
	_jsreportStudio2.default.addApiSpec({
	  template: {
	    chrome: {
	      scale: 1,
	      displayHeaderFooter: false,
	      printBackground: false,
	      landscape: false,
	      pageRanges: '...',
	      format: '...',
	      width: '...',
	      height: '...',
	      marginTop: '...',
	      marginRight: '...',
	      marginBottom: '...',
	      marginLeft: '...'
	    }
	  }
	});
	
	_jsreportStudio2.default.addEditorComponent(Constants.CHROME_TAB_EDITOR, _ChromeEditor2.default);
	_jsreportStudio2.default.addTabTitleComponent(Constants.CHROME_TAB_TITLE, _ChromeTitle2.default);
	_jsreportStudio2.default.entityTreeIconResolvers.push(function (entity) {
	  return entity.__entitySet === 'templates' && entity.recipe === 'chrome-pdf' ? 'fa-file-pdf-o' : null;
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _constants = __webpack_require__(4);
	
	var Constants = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Properties = function (_Component) {
	  _inherits(Properties, _Component);
	
	  function Properties() {
	    _classCallCheck(this, Properties);
	
	    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	  }
	
	  _createClass(Properties, [{
	    key: 'openHeaderFooter',
	    value: function openHeaderFooter(type) {
	      _jsreportStudio2.default.openTab({
	        key: this.props.entity._id + 'chrome' + type,
	        _id: this.props.entity._id,
	        headerOrFooter: type,
	        editorComponentKey: Constants.CHROME_TAB_EDITOR,
	        titleComponentKey: Constants.CHROME_TAB_TITLE
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          entity = _props.entity,
	          onChange = _props.onChange;
	
	      var chrome = entity.chrome || {};
	
	      var changeChrome = function changeChrome(change) {
	        return onChange(_extends({}, entity, { chrome: _extends({}, entity.chrome, change) }));
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'scale'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '1', value: chrome.scale || '',
	            onChange: function onChange(v) {
	              return changeChrome({ scale: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'display header/footer'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: chrome.displayHeaderFooter === true,
	            onChange: function onChange(v) {
	              return changeChrome({ displayHeaderFooter: v.target.checked });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'print background'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: chrome.printBackground === true,
	            onChange: function onChange(v) {
	              return changeChrome({ printBackground: v.target.checked });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'landscape'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: chrome.landscape === true,
	            onChange: function onChange(v) {
	              return changeChrome({ landscape: v.target.checked });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'pageRanges'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '1-5, 8, 11-13', value: chrome.pageRanges || '',
	            onChange: function onChange(v) {
	              return changeChrome({ pageRanges: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'format'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: 'Letter', value: chrome.format || '',
	            onChange: function onChange(v) {
	              return changeChrome({ format: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'width'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.width || '',
	            onChange: function onChange(v) {
	              return changeChrome({ width: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'height'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.height || '',
	            onChange: function onChange(v) {
	              return changeChrome({ height: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'margin top'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.marginTop || '',
	            onChange: function onChange(v) {
	              return changeChrome({ marginTop: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'margin right'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.marginRight || '',
	            onChange: function onChange(v) {
	              return changeChrome({ marginRight: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'margin bottom'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.marginBottom || '',
	            onChange: function onChange(v) {
	              return changeChrome({ marginBottom: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'margin left'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: '10cm', value: chrome.marginLeft || '',
	            onChange: function onChange(v) {
	              return changeChrome({ marginLeft: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'header'
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                return _this2.openHeaderFooter('header');
	              } },
	            'open in tab...'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'footer'
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                return _this2.openHeaderFooter('footer');
	              } },
	            'open in tab...'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'wait for network iddle'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: chrome.waitForNetworkIddle === true,
	            onChange: function onChange(v) {
	              return changeChrome({ waitForNetworkIddle: v.target.checked });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            { title: 'window.JSREPORT_READY_TO_START=true;' },
	            'wait for printing trigger'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', title: 'window.JSREPORT_READY_TO_START=true;', checked: chrome.waitForJS === true,
	            onChange: function onChange(v) {
	              return changeChrome({ waitForJS: v.target.checked });
	            } })
	        )
	      );
	    }
	  }]);
	
	  return Properties;
	}(_react.Component);
	
	exports.default = Properties;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CHROME_TAB_TITLE = exports.CHROME_TAB_TITLE = 'CHROME_TAB_TITLE';
	var CHROME_TAB_EDITOR = exports.CHROME_TAB_EDITOR = 'CHROME_TAB_EDITOR';

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ChromeEditor = function (_Component) {
	  _inherits(ChromeEditor, _Component);
	
	  function ChromeEditor() {
	    _classCallCheck(this, ChromeEditor);
	
	    return _possibleConstructorReturn(this, (ChromeEditor.__proto__ || Object.getPrototypeOf(ChromeEditor)).apply(this, arguments));
	  }
	
	  _createClass(ChromeEditor, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          entity = _props.entity,
	          _onUpdate = _props.onUpdate,
	          tab = _props.tab;
	
	
	      return _react2.default.createElement(_jsreportStudio.TextEditor, {
	        name: entity._id + '_chrome' + tab.headerOrFooter,
	        mode: 'handlebars',
	        value: entity.chrome ? entity.chrome[tab.headerOrFooter] : '',
	        onUpdate: function onUpdate(v) {
	          return _onUpdate(Object.assign({}, entity, { chrome: Object.assign({}, entity.chrome, _defineProperty({}, tab.headerOrFooter, v)) }));
	        }
	      });
	    }
	  }]);
	
	  return ChromeEditor;
	}(_react.Component);
	
	exports.default = ChromeEditor;
	
	
	ChromeEditor.propTypes = {
	  entity: _react2.default.PropTypes.object.isRequired,
	  tab: _react2.default.PropTypes.object.isRequired,
	  onUpdate: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'span',
	    null,
	    props.entity.name + ' ' + props.tab.headerOrFooter + (props.entity.__isDirty ? '*' : '')
	  );
	};

/***/ }
/******/ ]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _TemplatePdfUtilsProperties = __webpack_require__(2);
	
	var _TemplatePdfUtilsProperties2 = _interopRequireDefault(_TemplatePdfUtilsProperties);
	
	var _PdfUtilsTitle = __webpack_require__(5);
	
	var _PdfUtilsTitle2 = _interopRequireDefault(_PdfUtilsTitle);
	
	var _PdfUtilsEditor = __webpack_require__(6);
	
	var _PdfUtilsEditor2 = _interopRequireDefault(_PdfUtilsEditor);
	
	var _constants = __webpack_require__(4);
	
	var Constants = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addPropertiesComponent(_TemplatePdfUtilsProperties2.default.title, _TemplatePdfUtilsProperties2.default, function (entity) {
	  return entity.__entitySet === 'templates';
	});
	
	_jsreportStudio2.default.addEditorComponent(Constants.PDF_UTILS_TAB_EDITOR, _PdfUtilsEditor2.default);
	_jsreportStudio2.default.addTabTitleComponent(Constants.PDF_UTILS_TAB_TITLE, _PdfUtilsTitle2.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _constants = __webpack_require__(4);
	
	var Constants = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Properties = function (_Component) {
	  _inherits(Properties, _Component);
	
	  function Properties() {
	    _classCallCheck(this, Properties);
	
	    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	  }
	
	  _createClass(Properties, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.removeInvalidTemplateReferences();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.removeInvalidTemplateReferences();
	    }
	  }, {
	    key: 'openEditor',
	    value: function openEditor() {
	      _jsreportStudio2.default.openTab({
	        key: this.props.entity._id + '_pdfUtils',
	        _id: this.props.entity._id,
	        editorComponentKey: Constants.PDF_UTILS_TAB_EDITOR,
	        titleComponentKey: Constants.PDF_UTILS_TAB_TITLE
	      });
	    }
	  }, {
	    key: 'removeInvalidTemplateReferences',
	    value: function removeInvalidTemplateReferences() {
	      var _props = this.props,
	          entity = _props.entity,
	          entities = _props.entities,
	          onChange = _props.onChange;
	
	
	      if (!entity.pdfOperations) {
	        return;
	      }
	
	      var hasTemplateReferences = false;
	      var updatedOperations = void 0;
	
	      updatedOperations = entity.pdfOperations;
	      hasTemplateReferences = entity.pdfOperations.filter(function (o) {
	        return o.templateShortid != null;
	      }).length > 0;
	
	      if (hasTemplateReferences) {
	        updatedOperations = entity.pdfOperations.filter(function (o) {
	          // tolerate operations recently added
	          if (o.templateShortid == null) {
	            return true;
	          }
	
	          return Object.keys(entities).filter(function (k) {
	            return entities[k].__entitySet === 'templates' && entities[k].shortid === o.templateShortid;
	          }).length;
	        });
	      }
	
	      if (hasTemplateReferences && updatedOperations.length !== entity.pdfOperations.length) {
	        onChange({ _id: entity._id, pdfOperations: updatedOperations });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                return _this2.openEditor();
	              } },
	            'Configure'
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'title',
	    value: function title(entity, entities) {
	      if (!entity.pdfOperations || entity.pdfOperations.length === 0) {
	        return 'pdf utils';
	      }
	
	      var getTemplate = function getTemplate(shortid) {
	        return _jsreportStudio2.default.getEntityByShortid(shortid, false) || { name: '' };
	      };
	      return 'pdf utils: ' + entity.pdfOperations.map(function (o) {
	        return getTemplate(o.templateShortid).name;
	      }).join(', ');
	    }
	  }]);
	
	  return Properties;
	}(_react.Component);
	
	exports.default = Properties;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PDF_UTILS_TAB_TITLE = exports.PDF_UTILS_TAB_TITLE = 'PDF_UTILS_TAB_TITLE';
	var PDF_UTILS_TAB_EDITOR = exports.PDF_UTILS_TAB_EDITOR = 'PDF_UTILS_TAB_EDITOR';

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(
	    'span',
	    null,
	    props.entity.name + ' pdf utils ' + (props.entity.__isDirty ? '*' : '')
	  );
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(1);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _style = __webpack_require__(7);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PdfUtilsEditor = function (_Component) {
	  _inherits(PdfUtilsEditor, _Component);
	
	  function PdfUtilsEditor() {
	    _classCallCheck(this, PdfUtilsEditor);
	
	    return _possibleConstructorReturn(this, (PdfUtilsEditor.__proto__ || Object.getPrototypeOf(PdfUtilsEditor)).apply(this, arguments));
	  }
	
	  _createClass(PdfUtilsEditor, [{
	    key: 'addOperation',
	    value: function addOperation(entity) {
	      _jsreportStudio2.default.updateEntity(Object.assign({}, entity, { pdfOperations: [].concat(_toConsumableArray(entity.pdfOperations || []), [{ type: 'merge' }]) }));
	    }
	  }, {
	    key: 'updateOperation',
	    value: function updateOperation(entity, index, update) {
	      _jsreportStudio2.default.updateEntity(Object.assign({}, entity, { pdfOperations: entity.pdfOperations.map(function (o, i) {
	          return i === index ? Object.assign({}, o, update) : o;
	        }) }));
	    }
	  }, {
	    key: 'removeOperation',
	    value: function removeOperation(entity, index) {
	      _jsreportStudio2.default.updateEntity(Object.assign({}, entity, { pdfOperations: entity.pdfOperations.filter(function (a, i) {
	          return i !== index;
	        }) }));
	    }
	  }, {
	    key: 'moveDown',
	    value: function moveDown(entity, index) {
	      var pdfOperations = [].concat(_toConsumableArray(entity.pdfOperations));
	      var tmp = pdfOperations[index + 1];
	      pdfOperations[index + 1] = pdfOperations[index];
	      pdfOperations[index] = tmp;
	      _jsreportStudio2.default.updateEntity(Object.assign({}, entity, { pdfOperations: pdfOperations }));
	    }
	  }, {
	    key: 'moveUp',
	    value: function moveUp(entity, index) {
	      var pdfOperations = [].concat(_toConsumableArray(entity.pdfOperations));
	      var tmp = pdfOperations[index - 1];
	      pdfOperations[index - 1] = pdfOperations[index];
	      pdfOperations[index] = tmp;
	      _jsreportStudio2.default.updateEntity(Object.assign({}, entity, { pdfOperations: pdfOperations }));
	    }
	  }, {
	    key: 'renderOperation',
	    value: function renderOperation(entity, operation, index) {
	      var _this2 = this;
	
	      var templates = _jsreportStudio2.default.getAllEntities().filter(function (e) {
	        return e.__entitySet === 'templates' && e.shortid !== entity.shortid && e.recipe.includes('pdf');
	      });
	
	      return _react2.default.createElement(
	        'tr',
	        { key: index },
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'select',
	            {
	              value: operation.templateShortid || 'empty',
	              onChange: function onChange(v) {
	                return _this2.updateOperation(entity, index, { templateShortid: v.target.value });
	              } },
	            _react2.default.createElement(
	              'option',
	              { key: 'empty', value: 'empty' },
	              '- not selected -'
	            ),
	            templates.map(function (e) {
	              return _react2.default.createElement(
	                'option',
	                { key: e.shortid, value: e.shortid },
	                e.name
	              );
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'select',
	            {
	              value: operation.type,
	              onChange: function onChange(v) {
	                return _this2.updateOperation(entity, index, { type: v.target.value });
	              } },
	            '>',
	            _react2.default.createElement(
	              'option',
	              { value: 'merge' },
	              'merge'
	            ),
	            _react2.default.createElement(
	              'option',
	              { value: 'append' },
	              'append'
	            ),
	            _react2.default.createElement(
	              'option',
	              { value: 'prepend' },
	              'prepend'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement('input', { type: 'checkbox', disabled: operation.type !== 'merge', checked: operation.mergeToFront === true, onChange: function onChange(v) {
	              return _this2.updateOperation(entity, index, { mergeToFront: v.target.checked });
	            } })
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement('input', { type: 'checkbox', disabled: operation.type !== 'merge', checked: operation.renderForEveryPage === true, onChange: function onChange(v) {
	              return _this2.updateOperation(entity, index, { renderForEveryPage: v.target.checked });
	            } })
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'button',
	            { className: 'button', style: { backgroundColor: '#c6c6c6' }, onClick: function onClick() {
	                return _this2.removeOperation(entity, index);
	              } },
	            _react2.default.createElement('i', { className: 'fa fa-times' })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          entity.pdfOperations[index - 1] ? _react2.default.createElement(
	            'button',
	            { className: 'button', style: { backgroundColor: '#c6c6c6' }, onClick: function onClick() {
	                return _this2.moveUp(entity, index);
	              } },
	            _react2.default.createElement('i', { className: 'fa fa-arrow-up' })
	          ) : ''
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          entity.pdfOperations[index + 1] ? _react2.default.createElement(
	            'button',
	            { className: 'button', style: { backgroundColor: '#c6c6c6' }, onClick: function onClick() {
	                return _this2.moveDown(entity, index);
	              } },
	            _react2.default.createElement('i', { className: 'fa fa-arrow-down' })
	          ) : ''
	        )
	      );
	    }
	  }, {
	    key: 'renderOperations',
	    value: function renderOperations(entity) {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'table',
	        { className: _style2.default.operationTable },
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'th',
	              null,
	              'Template'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Operation'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Merge to front'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Render for every page'
	            ),
	            _react2.default.createElement('th', null),
	            _react2.default.createElement('th', null),
	            _react2.default.createElement('th', null)
	          )
	        ),
	        _react2.default.createElement(
	          'tbody',
	          null,
	          (entity.pdfOperations || []).map(function (o, i) {
	            return _this3.renderOperation(entity, o, i);
	          })
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var entity = this.props.entity;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'block custom-editor', style: { overflowX: 'auto' } },
	        _react2.default.createElement(
	          'h1',
	          null,
	          _react2.default.createElement('i', { className: 'fa fa-file-pdf-o' }),
	          ' pdf operations'
	        ),
	        _react2.default.createElement(
	          'p',
	          { style: { marginTop: '1rem' } },
	          'Use merge/append operations to add dynamic headers or concatenate multiple pdf reports into one. See more docs and examples ',
	          _react2.default.createElement(
	            'a',
	            { href: 'https://jsreport.net/learn/pdf-utils' },
	            'here'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { marginTop: '1rem' } },
	          this.renderOperations(entity)
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { marginTop: '1rem' } },
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _this4.addOperation(entity);
	              } },
	            'Add operation'
	          )
	        )
	      );
	    }
	  }]);
	
	  return PdfUtilsEditor;
	}(_react.Component);
	
	exports.default = PdfUtilsEditor;
	
	
	PdfUtilsEditor.propTypes = {
	  entity: _react2.default.PropTypes.object.isRequired,
	  tab: _react2.default.PropTypes.object.isRequired,
	  onUpdate: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".operationTable___3ENuL {\n  border-collapse: collapse;\n  border: none;\n  overflow: scroll;\n}\n\n.operationTable___3ENuL th {\n  padding: 0.5rem;\n}\n\n.operationTable___3ENuL td:nth-child(3), td:nth-child(4), th:nth-child(3), th:nth-child(4) {\n  text-align: center;\n  padding-left: 1rem;\n  background-color: #F6F6F6;\n}\n", "", {"version":3,"sources":["/./studio/studio/style.scss"],"names":[],"mappings":"AAAA;EACE,0BAAyB;EACzB,aAAW;EACX,iBACF;CAAE;;AAEF;EACI,gBACJ;CAAE;;AAEF;EACI,mBAAkB;EAClB,mBAAkB;EAClB,0BACJ;CAAE","file":"style.scss","sourcesContent":[".operationTable {\r\n  border-collapse: collapse;\r\n  border:none;\r\n  overflow: scroll\r\n}\r\n\r\n.operationTable th {\r\n    padding: 0.5rem\r\n}\r\n\r\n.operationTable td:nth-child(3), td:nth-child(4), th:nth-child(3), th:nth-child(4)  {\r\n    text-align: center;    \r\n    padding-left: 1rem;   \r\n    background-color: #F6F6F6\r\n}"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"operationTable": "operationTable___3ENuL"
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ReportEditor = __webpack_require__(1);
	
	var _ReportEditor2 = _interopRequireDefault(_ReportEditor);
	
	var _ReportsButton = __webpack_require__(9);
	
	var _ReportsButton2 = _interopRequireDefault(_ReportsButton);
	
	var _DownloadButton = __webpack_require__(10);
	
	var _DownloadButton2 = _interopRequireDefault(_DownloadButton);
	
	var _DeleteButton = __webpack_require__(11);
	
	var _DeleteButton2 = _interopRequireDefault(_DeleteButton);
	
	var _jsreportStudio = __webpack_require__(8);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addEditorComponent('reports', _ReportEditor2.default);
	
	_jsreportStudio2.default.addApiSpec({
	  options: {
	    reports: { save: true }
	  }
	});
	
	_jsreportStudio2.default.addToolbarComponent(_ReportsButton2.default, 'settings');
	_jsreportStudio2.default.addToolbarComponent(_DownloadButton2.default);
	_jsreportStudio2.default.addToolbarComponent(_DeleteButton2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactList = __webpack_require__(2);
	
	var _reactList2 = _interopRequireDefault(_reactList);
	
	var _ReportEditor = __webpack_require__(3);
	
	var _ReportEditor2 = _interopRequireDefault(_ReportEditor);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(8);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _instance = void 0;
	
	var ReportEditor = function (_Component) {
	  _inherits(ReportEditor, _Component);
	
	  _createClass(ReportEditor, null, [{
	    key: 'Instance',
	    get: function get() {
	      return _instance;
	    }
	  }]);
	
	  function ReportEditor() {
	    _classCallCheck(this, ReportEditor);
	
	    var _this = _possibleConstructorReturn(this, (ReportEditor.__proto__ || Object.getPrototypeOf(ReportEditor)).call(this));
	
	    _this.state = { reports: [], active: null };
	    _this.skip = 0;
	    _this.top = 50;
	    _this.pending = 0;
	    _this.ActiveReport = null;
	    _instance = _this;
	    return _this;
	  }
	
	  _createClass(ReportEditor, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.lazyFetch();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.ActiveReport = null;
	    }
	  }, {
	    key: 'openReport',
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(r) {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (r.contentType === 'text/html' || r.contentType === 'text/plain' || r.contentType === 'application/pdf' || r.contentType && r.contentType.indexOf('image') !== -1) {
	                  _jsreportStudio2.default.setPreviewFrameSrc('/reports/' + r._id + '/content');
	                } else {
	                  window.open(_jsreportStudio2.default.rootUrl + '/reports/' + r._id + '/attachment', '_self');
	                }
	
	                this.setState({ active: r._id });
	                this.ActiveReport = r;
	
	              case 3:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      function openReport(_x) {
	        return _ref.apply(this, arguments);
	      }
	
	      return openReport;
	    }()
	  }, {
	    key: 'lazyFetch',
	    value: function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
	        var response;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                if (!this.loading) {
	                  _context2.next = 2;
	                  break;
	                }
	
	                return _context2.abrupt('return');
	
	              case 2:
	
	                this.loading = true;
	                _context2.next = 5;
	                return _jsreportStudio2.default.api.get('/odata/reports?$orderby=creationDate desc&$count=true&$top=' + this.top + '&$skip=' + this.skip);
	
	              case 5:
	                response = _context2.sent;
	
	                this.skip += this.top;
	                this.loading = false;
	                this.setState({ reports: this.state.reports.concat(response.value), count: response['@odata.count'] });
	                if (this.state.reports.length <= this.pending && response.value.length) {
	                  this.lazyFetch();
	                }
	
	              case 10:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));
	
	      function lazyFetch() {
	        return _ref2.apply(this, arguments);
	      }
	
	      return lazyFetch;
	    }()
	  }, {
	    key: 'tryRenderItem',
	    value: function tryRenderItem(index) {
	      var task = this.state.reports[index];
	      if (!task) {
	        this.pending = Math.max(this.pending, index);
	        this.lazyFetch();
	        return _react2.default.createElement(
	          'tr',
	          { key: index },
	          _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin fa-fw' })
	          )
	        );
	      }
	
	      return this.renderItem(task, index);
	    }
	  }, {
	    key: 'remove',
	    value: function () {
	      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
	        var id;
	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                id = this.ActiveReport._id;
	
	                this.ActiveReport = null;
	                _context3.next = 4;
	                return _jsreportStudio2.default.api.del('/odata/reports(' + id + ')');
	
	              case 4:
	                this.setState({ reports: this.state.reports.filter(function (r) {
	                    return r._id !== id;
	                  }) });
	
	              case 5:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));
	
	      function remove() {
	        return _ref3.apply(this, arguments);
	      }
	
	      return remove;
	    }()
	  }, {
	    key: 'renderItem',
	    value: function renderItem(report, index) {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'tr',
	        {
	          key: index, className: this.state.active === report._id ? 'active' : '',
	          onClick: function onClick() {
	            return _this2.openReport(report);
	          } },
	        _react2.default.createElement(
	          'td',
	          { className: 'selection' },
	          report.name
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          report.creationDate.toLocaleString()
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          report.recipe
	        )
	      );
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems(items, ref) {
	      return _react2.default.createElement(
	        'table',
	        { className: 'table', ref: ref },
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'th',
	              null,
	              'name'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'created on'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'recipe'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'tbody',
	          null,
	          items
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var count = this.state.count;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'block custom-editor' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            _react2.default.createElement('i', { className: 'fa fa-folder-open-o' }),
	            ' Reports'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _ReportEditor2.default.listContainer + ' block-item' },
	          _react2.default.createElement(_reactList2.default, {
	            type: 'uniform', itemsRenderer: this.renderItems, itemRenderer: function itemRenderer(index) {
	              return _this3.tryRenderItem(index);
	            },
	            length: count })
	        )
	      );
	    }
	  }]);
	
	  return ReportEditor;
	}(_react.Component);
	
	exports.default = ReportEditor;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react-list'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./ReportEditor.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./ReportEditor.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".listContainer___1tp9A {\n  margin-top: 1rem;\n  overflow: auto;\n  position: relative;\n  padding: 1rem;\n  min-height: 0;\n  height: auto;\n}\n\n.listContainer___1tp9A > div {\n  width: 95%;\n  position: absolute !important;\n}\n", "", {"version":3,"sources":["/./studio/studio/ReportEditor.scss"],"names":[],"mappings":"AAAA;EACE,iBAAgB;EAChB,eAAc;EACd,mBAAkB;EAClB,cAAa;EACb,cAAa;EACb,aAAY;CACb;;AAED;EAEE,WAAU;EAEV,8BAA6B;CAC9B","file":"ReportEditor.scss","sourcesContent":[".listContainer {\r\n  margin-top: 1rem;\r\n  overflow: auto;\r\n  position: relative;\r\n  padding: 1rem;\r\n  min-height: 0;\r\n  height: auto;\r\n}\r\n\r\n.listContainer > div {\r\n  // it somehow shows the horizontal scrollbar even when no needeit, this workaround to hide it\r\n  width: 95%;\r\n  // the tabs height based on flex box is otherwise wrongly calculated\r\n  position: absolute !important;\r\n}\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"listContainer": "listContainer___1tp9A"
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(8);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReportsButton = function (_Component) {
	  _inherits(ReportsButton, _Component);
	
	  function ReportsButton() {
	    _classCallCheck(this, ReportsButton);
	
	    return _possibleConstructorReturn(this, (ReportsButton.__proto__ || Object.getPrototypeOf(ReportsButton)).apply(this, arguments));
	  }
	
	  _createClass(ReportsButton, [{
	    key: 'openReports',
	    value: function openReports() {
	      _jsreportStudio2.default.openTab({ key: 'Reports', editorComponentKey: 'reports', title: 'Reports' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { onClick: function onClick() {
	            return _this2.openReports();
	          } },
	        _react2.default.createElement('i', { className: 'fa fa-folder-open-o' }),
	        ' Reports'
	      );
	    }
	  }]);
	
	  return ReportsButton;
	}(_react.Component);
	
	exports.default = ReportsButton;
	
	
	ReportsButton.propTypes = {
	  tab: _react2.default.PropTypes.object,
	  onUpdate: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ReportEditor = __webpack_require__(1);
	
	var _ReportEditor2 = _interopRequireDefault(_ReportEditor);
	
	var _jsreportStudio = __webpack_require__(8);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DownloadButton = function (_Component) {
	  _inherits(DownloadButton, _Component);
	
	  function DownloadButton() {
	    _classCallCheck(this, DownloadButton);
	
	    return _possibleConstructorReturn(this, (DownloadButton.__proto__ || Object.getPrototypeOf(DownloadButton)).apply(this, arguments));
	  }
	
	  _createClass(DownloadButton, [{
	    key: 'download',
	    value: function download() {
	      if (_ReportEditor2.default.Instance && _ReportEditor2.default.Instance.ActiveReport) {
	        window.open(_jsreportStudio2.default.rootUrl + '/reports/' + _ReportEditor2.default.ActiveReport._id + '/attachment', '_self');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      if (!this.props.tab || this.props.tab.key !== 'Reports' || !_ReportEditor2.default.Instance || !_ReportEditor2.default.Instance.ActiveReport) {
	        return _react2.default.createElement('div', null);
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'toolbar-button', onClick: function onClick() {
	            return _this2.download();
	          } },
	        _react2.default.createElement('i', { className: 'fa fa-download' }),
	        'Download'
	      );
	    }
	  }]);
	
	  return DownloadButton;
	}(_react.Component);
	
	exports.default = DownloadButton;
	
	
	DownloadButton.propTypes = {
	  tab: _react2.default.PropTypes.object,
	  onUpdate: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ReportEditor = __webpack_require__(1);
	
	var _ReportEditor2 = _interopRequireDefault(_ReportEditor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DeleteButton = function (_Component) {
	  _inherits(DeleteButton, _Component);
	
	  function DeleteButton() {
	    _classCallCheck(this, DeleteButton);
	
	    return _possibleConstructorReturn(this, (DeleteButton.__proto__ || Object.getPrototypeOf(DeleteButton)).apply(this, arguments));
	  }
	
	  _createClass(DeleteButton, [{
	    key: 'render',
	    value: function render() {
	      if (!this.props.tab || this.props.tab.key !== 'Reports' || !_ReportEditor2.default.Instance || !_ReportEditor2.default.Instance.ActiveReport) {
	        return _react2.default.createElement('div', null);
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'toolbar-button', onClick: function onClick() {
	            return _ReportEditor2.default.Instance.remove();
	          } },
	        _react2.default.createElement('i', { className: 'fa fa-trash' }),
	        'Delete'
	      );
	    }
	  }]);
	
	  return DeleteButton;
	}(_react.Component);
	
	exports.default = DeleteButton;
	
	
	DeleteButton.propTypes = {
	  tab: _react2.default.PropTypes.object,
	  onUpdate: _react2.default.PropTypes.func.isRequired
	};

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Properties = __webpack_require__(1);
	
	var _Properties2 = _interopRequireDefault(_Properties);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addApiSpec({
	  options: {
	    language: 'en'
	  }
	});
	
	_jsreportStudio2.default.addPropertiesComponent(_Properties2.default.title, _Properties2.default, function (entity) {
	  return entity.__entitySet === 'templates';
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Properties = function (_Component) {
	  _inherits(Properties, _Component);
	
	  function Properties() {
	    _classCallCheck(this, Properties);
	
	    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	  }
	
	  _createClass(Properties, [{
	    key: 'selectData',
	    value: function selectData(entities) {
	      return Object.keys(entities).filter(function (k) {
	        return entities[k].__entitySet === 'data';
	      }).map(function (k) {
	        return entities[k];
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.removeInvalidDataReferences();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.removeInvalidDataReferences();
	    }
	  }, {
	    key: 'removeInvalidDataReferences',
	    value: function removeInvalidDataReferences() {
	      var _props = this.props,
	          entity = _props.entity,
	          entities = _props.entities,
	          onChange = _props.onChange;
	
	
	      if (!entity.resources || !entity.resources.items.length) {
	        return;
	      }
	
	      var updatedResources = entity.resources.items.filter(function (s) {
	        return Object.keys(entities).filter(function (k) {
	          return entities[k].__entitySet === 'data' && entities[k].shortid === s.shortid;
	        }).length;
	      });
	
	      if (updatedResources.length !== entity.resources.items.length) {
	        onChange({ _id: entity._id, resources: { defaultLanguage: entity.resources.defaultLanguage, items: updatedResources } });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          entity = _props2.entity,
	          entities = _props2.entities,
	          _onChange = _props2.onChange;
	
	      var data = this.selectData(entities);
	
	      var selectValues = function selectValues(event, aitems) {
	        var el = event.target;
	        var items = [];
	
	        for (var i = 0; i < el.options.length; i++) {
	          if (el.options[i].selected) {
	            if (!items.filter(function (s) {
	              return s.shortid === el.options[i].value;
	            }).length) {
	              items.push({ shortid: el.options[i].value });
	            }
	          } else {
	            if (items.filter(function (s) {
	              return s.shortid === el.options[i].value;
	            }).length) {
	              items = items.filter(function (s) {
	                return s.shortid !== el.options[i].value;
	              });
	            }
	          }
	        }
	
	        return items.map(function (i) {
	          return _extends({}, i, { entitySet: 'data' });
	        });
	      };
	
	      var items = (entity.resources || {}).items || [];
	      var defaultLanguage = (entity.resources || {}).defaultLanguage;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Default language ',
	            _react2.default.createElement(
	              'a',
	              { href: 'http://jsreport.net/learn/resources', target: '_blank' },
	              _react2.default.createElement('i', { className: 'fa fa-question' }),
	              ' '
	            )
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: 'en', value: defaultLanguage || '',
	            onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, resources: { defaultLanguage: v.target.value, items: items } });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'select',
	            {
	              title: 'Use CTRL to deselect item and also to select multiple options',
	              multiple: true, size: '7', value: items.map(function (s) {
	                return s.shortid;
	              }),
	              onChange: function onChange(v) {
	                return _onChange({ _id: entity._id, resources: { items: selectValues(v, entity.scripts), defaultLanguage: defaultLanguage } });
	              } },
	            data.map(function (s) {
	              return _react2.default.createElement(
	                'option',
	                { key: s.shortid, value: s.shortid },
	                s.name
	              );
	            })
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'getSelectedResources',
	    value: function getSelectedResources(entity, entities) {
	      var getName = function getName(s) {
	        var foundData = Object.keys(entities).map(function (k) {
	          return entities[k];
	        }).filter(function (sc) {
	          return sc.shortid === s.shortid;
	        });
	
	        return foundData.length ? foundData[0].name : '';
	      };
	
	      return ((entity.resources || {}).items || []).map(function (d) {
	        return _extends({}, d, {
	          name: getName(d)
	        });
	      });
	    }
	  }, {
	    key: 'title',
	    value: function title(entity, entities) {
	      if (!entity.resources) {
	        return 'resources';
	      }
	
	      return 'resources: ' + (entity.resources.defaultLanguage || '') + ' ' + Properties.getSelectedResources(entity, entities).map(function (s) {
	        return s.name;
	      }).join(', ');
	    }
	  }]);
	
	  return Properties;
	}(_react.Component);
	
	exports.default = Properties;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ }
/******/ ]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Properties = __webpack_require__(1);
	
	var _Properties2 = _interopRequireDefault(_Properties);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addPropertiesComponent('browser client', _Properties2.default, function (entity) {
	  return entity.__entitySet === 'templates' && entity.recipe === 'html-with-browser-client';
	});
	
	_jsreportStudio2.default.addApiSpec({
	  template: {
	    omitDataFromOutput: false
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Properties = function (_Component) {
	  _inherits(Properties, _Component);
	
	  function Properties() {
	    _classCallCheck(this, Properties);
	
	    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	  }
	
	  _createClass(Properties, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          entity = _props.entity,
	          _onChange = _props.onChange;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'omit serialized data from the output'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: entity.omitDataFromOutput === true,
	            onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, omitDataFromOutput: v.target.checked });
	            } })
	        )
	      );
	    }
	  }]);
	
	  return Properties;
	}(_react.Component);
	
	exports.default = Properties;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ }
/******/ ]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Properties = __webpack_require__(1);
	
	var _Properties2 = _interopRequireDefault(_Properties);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addPropertiesComponent('text', _Properties2.default, function (entity) {
	  return entity.__entitySet === 'templates' && entity.recipe === 'text';
	});
	
	_jsreportStudio2.default.addApiSpec({
	  template: {
	    contentType: '...',
	    fileExtension: '...',
	    contentDisposition: '...'
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Properties = function (_Component) {
	  _inherits(Properties, _Component);
	
	  function Properties() {
	    _classCallCheck(this, Properties);
	
	    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	  }
	
	  _createClass(Properties, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          entity = _props.entity,
	          _onChange = _props.onChange;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Content Type'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: 'text/html', value: entity.contentType || '',
	            onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, contentType: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'File Extension'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: 'html', value: entity.fileExtension || '',
	            onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, fileExtension: v.target.value });
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Content Type'
	          ),
	          _react2.default.createElement('input', {
	            type: 'text', placeholder: 'inline', value: entity.contentDisposition || '',
	            onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, contentDisposition: v.target.value });
	            } })
	        )
	      );
	    }
	  }]);
	
	  return Properties;
	}(_react.Component);
	
	exports.default = Properties;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ScheduleEditor = __webpack_require__(1);
	
	var _ScheduleEditor2 = _interopRequireDefault(_ScheduleEditor);
	
	var _ScheduleProperties = __webpack_require__(21);
	
	var _ScheduleProperties2 = _interopRequireDefault(_ScheduleProperties);
	
	var _DownloadButton = __webpack_require__(29);
	
	var _DownloadButton2 = _interopRequireDefault(_DownloadButton);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	_jsreportStudio2.default.initializeListeners.push(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	  return regeneratorRuntime.wrap(function _callee$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          if (!(_jsreportStudio2.default.authentication && !_jsreportStudio2.default.authentication.user.isAdmin)) {
	            _context.next = 2;
	            break;
	          }
	
	          return _context.abrupt('return');
	
	        case 2:
	
	          _jsreportStudio2.default.addEntitySet({
	            name: 'schedules',
	            faIcon: 'fa-calendar',
	            visibleName: 'schedule',
	            entityTreePosition: 400
	          });
	          _jsreportStudio2.default.addEditorComponent('schedules', _ScheduleEditor2.default);
	          _jsreportStudio2.default.addPropertiesComponent(_ScheduleProperties2.default.title, _ScheduleProperties2.default, function (entity) {
	            return entity.__entitySet === 'schedules';
	          });
	          _jsreportStudio2.default.addToolbarComponent(_DownloadButton2.default);
	
	        case 6:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _callee, undefined);
	})));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactList = __webpack_require__(3);
	
	var _reactList2 = _interopRequireDefault(_reactList);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _debounce2 = __webpack_require__(5);
	
	var _debounce3 = _interopRequireDefault(_debounce2);
	
	var _ScheduleEditor = __webpack_require__(17);
	
	var _ScheduleEditor2 = _interopRequireDefault(_ScheduleEditor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _activeReport = void 0;
	
	var ScheduleEditor = function (_Component) {
	  _inherits(ScheduleEditor, _Component);
	
	  function ScheduleEditor() {
	    var _this2 = this;
	
	    _classCallCheck(this, ScheduleEditor);
	
	    var _this = _possibleConstructorReturn(this, (ScheduleEditor.__proto__ || Object.getPrototypeOf(ScheduleEditor)).call(this));
	
	    _this.state = { tasks: [], active: null, running: false };
	    _this.skip = 0;
	    _this.top = 50;
	    _this.pending = 0;
	    _this.updateNextRun = (0, _debounce3.default)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	      var response;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              if (!_this.props.entity.cron) {
	                _context.next = 5;
	                break;
	              }
	
	              _context.next = 3;
	              return _jsreportStudio2.default.api.get('/api/scheduling/nextRun/' + encodeURIComponent(_this.props.entity.cron));
	
	            case 3:
	              response = _context.sent;
	
	              _this.setState({ nextRun: response });
	
	            case 5:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, _this2);
	    })), 500);
	    return _this;
	  }
	
	  _createClass(ScheduleEditor, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.lazyFetch();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.updateNextRun.cancel();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.updateNextRun();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.props.entity.cron !== prevProps.entity.cron) {
	        this.updateNextRun();
	      }
	    }
	  }, {
	    key: 'openReport',
	    value: function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
	        var reports, report;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                if (!(t.state === 'success')) {
	                  _context2.next = 10;
	                  break;
	                }
	
	                _context2.next = 3;
	                return _jsreportStudio2.default.api.get('/odata/reports?$filter=taskId eq \'' + t._id + '\'');
	
	              case 3:
	                reports = _context2.sent;
	                report = reports.value[0];
	
	
	                if (report.contentType === 'text/html' || report.contentType === 'text/plain' || report.contentType === 'application/pdf' || report.contentType && report.contentType.indexOf('image') !== -1) {
	                  _jsreportStudio2.default.setPreviewFrameSrc('/reports/' + report._id + '/content');
	                } else {
	                  window.open(_jsreportStudio2.default.rootUrl + '/reports/' + report._id + '/attachment', '_self');
	                }
	
	                this.setState({ active: t._id });
	                _activeReport = report;
	                _context2.next = 13;
	                break;
	
	              case 10:
	                _activeReport = null;
	                _jsreportStudio2.default.setPreviewFrameSrc('data:text/html;charset=utf-8,' + encodeURI(t.error || t.state));
	                this.setState({ active: null });
	
	              case 13:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));
	
	      function openReport(_x) {
	        return _ref2.apply(this, arguments);
	      }
	
	      return openReport;
	    }()
	  }, {
	    key: 'reloadTasks',
	    value: function () {
	      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                this.skip = 0;
	                this.top = 50;
	                this.pending = 0;
	
	                this.lazyFetch(true);
	
	              case 4:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }));
	
	      function reloadTasks() {
	        return _ref3.apply(this, arguments);
	      }
	
	      return reloadTasks;
	    }()
	  }, {
	    key: 'lazyFetch',
	    value: function () {
	      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(replace) {
	        var response, tasks;
	        return regeneratorRuntime.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                if (!this.loading) {
	                  _context4.next = 2;
	                  break;
	                }
	
	                return _context4.abrupt('return');
	
	              case 2:
	
	                this.loading = true;
	                _context4.next = 5;
	                return _jsreportStudio2.default.api.get('/odata/tasks?$orderby=finishDate desc&$count=true&$top=' + this.top + '&$skip=' + this.skip + '&$filter=scheduleShortid eq \'' + this.props.entity.shortid + '\'');
	
	              case 5:
	                response = _context4.sent;
	
	                this.skip += this.top;
	                this.loading = false;
	
	                tasks = void 0;
	
	
	                if (replace) {
	                  tasks = [];
	                } else {
	                  tasks = this.state.tasks;
	                }
	
	                this.setState({ tasks: tasks.concat(response.value), count: response['@odata.count'] });
	                if (this.state.tasks.length <= this.pending && response.value.length) {
	                  this.lazyFetch();
	                }
	
	              case 12:
	              case 'end':
	                return _context4.stop();
	            }
	          }
	        }, _callee4, this);
	      }));
	
	      function lazyFetch(_x2) {
	        return _ref4.apply(this, arguments);
	      }
	
	      return lazyFetch;
	    }()
	  }, {
	    key: 'runNow',
	    value: function () {
	      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
	        return regeneratorRuntime.wrap(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                this.setState({
	                  running: true
	                });
	
	                _context5.prev = 1;
	                _context5.next = 4;
	                return _jsreportStudio2.default.api.post('/api/scheduling/runNow', {
	                  data: {
	                    scheduleId: this.props.entity._id
	                  }
	                });
	
	              case 4:
	
	                this.reloadTasks();
	
	              case 5:
	                _context5.prev = 5;
	
	                this.setState({
	                  running: false
	                });
	                return _context5.finish(5);
	
	              case 8:
	              case 'end':
	                return _context5.stop();
	            }
	          }
	        }, _callee5, this, [[1,, 5, 8]]);
	      }));
	
	      function runNow() {
	        return _ref5.apply(this, arguments);
	      }
	
	      return runNow;
	    }()
	  }, {
	    key: 'tryRenderItem',
	    value: function tryRenderItem(index) {
	      var task = this.state.tasks[index];
	      if (!task) {
	        this.pending = Math.max(this.pending, index);
	        this.lazyFetch();
	        return _react2.default.createElement(
	          'tr',
	          { key: index },
	          _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement('i', { className: 'fa fa-spinner fa-spin fa-fw' })
	          )
	        );
	      }
	
	      return this.renderItem(task, index);
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(task, index) {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'tr',
	        {
	          key: index, className: this.state.active === task._id ? 'active' : '',
	          onClick: function onClick() {
	            return _this3.openReport(task);
	          } },
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'span',
	            {
	              className: _ScheduleEditor2.default.state + ' ' + (task.state === 'error' ? _ScheduleEditor2.default.error : task.state === 'success' ? _ScheduleEditor2.default.success : _ScheduleEditor2.default.canceled) },
	            task.state
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'span',
	            { className: _ScheduleEditor2.default.value },
	            task.creationDate ? task.creationDate.toLocaleString() : ''
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: _ScheduleEditor2.default.value },
	            task.finishDate ? task.finishDate.toLocaleString() : ''
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems(items, ref) {
	      return _react2.default.createElement(
	        'table',
	        { className: 'table', ref: ref },
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'th',
	              null,
	              'state'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'start'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'finish'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'tbody',
	          null,
	          items
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var entity = this.props.entity;
	      var _state = this.state,
	          count = _state.count,
	          nextRun = _state.nextRun;
	
	      nextRun = nextRun || entity.nextRun;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'block custom-editor' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            _react2.default.createElement('i', { className: 'fa fa-calendar' }),
	            ' ',
	            entity.name
	          ),
	          nextRun ? _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'span',
	              null,
	              'next run\xA0\xA0'
	            ),
	            _react2.default.createElement(
	              'small',
	              null,
	              nextRun.toLocaleString()
	            ),
	            !this.props.entity.__isNew && _react2.default.createElement(
	              'button',
	              {
	                disabled: this.state.running,
	                style: this.state.running ? { color: '#c6c6c6' } : {},
	                className: 'button confirmation',
	                onClick: function onClick() {
	                  return _this4.runNow();
	                }
	              },
	              _react2.default.createElement('i', { className: 'fa fa-play' }),
	              ' ',
	              _react2.default.createElement(
	                'span',
	                null,
	                this.state.running ? 'Running..' : 'Run now'
	              )
	            )
	          ) : _react2.default.createElement(
	            'div',
	            null,
	            'Not planned yet. Fill CRON expression and report template in the properties.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _ScheduleEditor2.default.listContainer + ' block-item' },
	          _react2.default.createElement(_reactList2.default, {
	            type: 'uniform', itemsRenderer: this.renderItems, itemRenderer: function itemRenderer(index) {
	              return _this4.tryRenderItem(index);
	            },
	            length: count
	          })
	        )
	      );
	    }
	  }], [{
	    key: 'ActiveReport',
	    get: function get() {
	      return _activeReport;
	    }
	  }]);
	
	  return ScheduleEditor;
	}(_react.Component);
	
	exports.default = ScheduleEditor;
	
	
	ScheduleEditor.propTypes = {
	  entity: _react2.default.PropTypes.object.isRequired,
	  onUpdate: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react-list'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6),
	    now = __webpack_require__(7),
	    toNumber = __webpack_require__(10);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        timeWaiting = wait - timeSinceLastCall;
	
	    return maxing
	      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
	      : timeWaiting;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	module.exports = debounce;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(8);
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	module.exports = now;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(9);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6),
	    isSymbol = __webpack_require__(11);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(12),
	    isObjectLike = __webpack_require__(16);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(13),
	    getRawTag = __webpack_require__(14),
	    objectToString = __webpack_require__(15);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(8);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(13);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./ScheduleEditor.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./ScheduleEditor.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, ".listContainer___aJHAE {\n  margin-top: 1rem;\n  overflow: auto;\n  position: relative;\n  padding: 1rem;\n  min-height: 0;\n  height: auto;\n}\n\n.listContainer___aJHAE > div {\n  width: 95%;\n  position: absolute !important;\n}\n\n.state___1rOi5 {\n  font-size: 0.8rem;\n  padding: 0.3rem;\n  display: inline-block;\n  text-align: center;\n  min-width: 4rem;\n}\n\n.error___3G79z {\n  background-color: #da532c;\n  color: white;\n}\n\n.cancelled___1OTeY {\n  background-color: orange;\n  color: white;\n}\n\n.success___z5MBj {\n  background-color: #4CAF50;\n  color: white;\n}\n", "", {"version":3,"sources":["/./studio/studio/ScheduleEditor.scss"],"names":[],"mappings":"AAAA;EACE,iBAAgB;EAChB,eAAc;EACd,mBAAkB;EAClB,cAAa;EACb,cAAa;EACb,aAAY;CACb;;AAED;EAEE,WAAU;EAEV,8BAA6B;CAC9B;;AAED;EACE,kBAAiB;EACjB,gBAAe;EACf,sBAAqB;EACrB,mBAAkB;EAClB,gBAAe;CAChB;;AAED;EACE,0BAAyB;EACzB,aAAY;CACb;;AAED;EACE,yBAAwB;EACxB,aAAY;CACb;;AAED;EACE,0BAAyB;EACzB,aAAY;CACb","file":"ScheduleEditor.scss","sourcesContent":[".listContainer {\n  margin-top: 1rem;\n  overflow: auto;\n  position: relative;\n  padding: 1rem;\n  min-height: 0;\n  height: auto;\n}\n\n.listContainer > div {\n  // it somehow shows the horizontal scrollbar even when no needeit, this workaround to hide it\n  width: 95%;\n  // the tabs height based on flex box is otherwise wrongly calculated\n  position: absolute !important;\n}\n\n.state {\n  font-size: 0.8rem;\n  padding: 0.3rem;\n  display: inline-block;\n  text-align: center;\n  min-width: 4rem;\n}\n\n.error {\n  background-color: #da532c;\n  color: white;\n}\n\n.cancelled {\n  background-color: orange;\n  color: white;\n}\n\n.success {\n  background-color: #4CAF50;\n  color: white;\n}\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"listContainer": "listContainer___aJHAE",
		"state": "state___1rOi5",
		"error": "error___3G79z",
		"cancelled": "cancelled___1OTeY",
		"success": "success___z5MBj"
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ordinalNumberSuffix = __webpack_require__(22);
	
	var _ordinalNumberSuffix2 = _interopRequireDefault(_ordinalNumberSuffix);
	
	var _cronBuilder = __webpack_require__(23);
	
	var _cronBuilder2 = _interopRequireDefault(_cronBuilder);
	
	var _cronstrue = __webpack_require__(24);
	
	var _cronstrue2 = _interopRequireDefault(_cronstrue);
	
	var _HourTimePicker = __webpack_require__(25);
	
	var _HourTimePicker2 = _interopRequireDefault(_HourTimePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScheduleProperties = function (_Component) {
	  _inherits(ScheduleProperties, _Component);
	
	  function ScheduleProperties(props) {
	    _classCallCheck(this, ScheduleProperties);
	
	    var _this = _possibleConstructorReturn(this, (ScheduleProperties.__proto__ || Object.getPrototypeOf(ScheduleProperties)).call(this, props));
	
	    _this.state = {
	      useExpression: true,
	      showHour: false,
	      showMinute: false,
	      showDay: false,
	      showMonth: false,
	      selectedPeriod: '',
	      selectedHour: null,
	      selectedMinute: null,
	      selectedDay: null,
	      selectedMonth: null,
	      days: []
	    };
	    return _this;
	  }
	
	  _createClass(ScheduleProperties, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.normalizeUIState(this.props.entity);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.removeInvalidTemplateReferences();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // when component changes because another schedule is selected
	      // or when saving a new schedule
	      if (this.props.entity._id !== nextProps.entity._id) {
	        this.normalizeUIState(nextProps.entity);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.removeInvalidTemplateReferences();
	    }
	  }, {
	    key: 'normalizeUIState',
	    value: function normalizeUIState(entity) {
	      var cronInfo = void 0;
	
	      if (entity.__isNew || !entity.cron) {
	        cronInfo = this.onPeriodChange('', true);
	      } else {
	        cronInfo = this.getCronInformation(entity.cron);
	      }
	
	      if (cronInfo) {
	        cronInfo.useExpression = false;
	      } else {
	        // if we couldn't parse the cron for the UI
	        // reset values and enable the raw expression input.
	        // false is returned when we want to still show the value in the UI editor
	        if (cronInfo === false) {
	          cronInfo = this.onPeriodChange('', true);
	          cronInfo.useExpression = false;
	        } else {
	          cronInfo = this.onPeriodChange('', true);
	          cronInfo.useExpression = true;
	        }
	      }
	
	      this.setState(cronInfo);
	    }
	  }, {
	    key: 'getCronInformation',
	    value: function getCronInformation(cron) {
	      if (cron == null || cron === '') {
	        return false;
	      }
	
	      try {
	        var cronExp = new _cronBuilder2.default(cron);
	        var parsedCron = cronExp.getAll();
	        var cronInfo = void 0;
	        var selectedPeriod = void 0;
	        var selectedHour = void 0;
	        var selectedMinute = void 0;
	        var selectedDay = void 0;
	        var selectedMonth = void 0;
	        var selectedDayOfTheMonth = void 0;
	        var selectedDayOfTheWeek = void 0;
	
	        // our cron editor doesn't support complex values
	        if (parsedCron.dayOfTheMonth.length !== 1 || parsedCron.dayOfTheWeek.length !== 1 || parsedCron.hour.length !== 1 || parsedCron.minute.length !== 1 || parsedCron.month.length !== 1) {
	          return null;
	        }
	
	        if (parsedCron.dayOfTheMonth[0] === '*' || !isNaN(parseInt(parsedCron.dayOfTheMonth[0], 10))) {
	          selectedDayOfTheMonth = parsedCron.dayOfTheMonth[0] !== '*' ? parseInt(parsedCron.dayOfTheMonth[0], 10) : parsedCron.dayOfTheMonth[0];
	        }
	
	        if (parsedCron.dayOfTheWeek[0] === '*' || !isNaN(parseInt(parsedCron.dayOfTheWeek[0], 10))) {
	          selectedDayOfTheWeek = parsedCron.dayOfTheWeek[0] !== '*' ? parseInt(parsedCron.dayOfTheWeek[0], 10) : parsedCron.dayOfTheWeek[0];
	        }
	
	        if (parsedCron.hour[0] === '*' || !isNaN(parseInt(parsedCron.hour[0], 10))) {
	          selectedHour = parsedCron.hour[0] !== '*' ? ('0' + parsedCron.hour[0]).slice(-2) : parsedCron.hour[0];
	        }
	
	        if (parsedCron.minute[0] === '*' || !isNaN(parseInt(parsedCron.minute[0], 10))) {
	          selectedMinute = parsedCron.minute[0] !== '*' ? ('0' + parsedCron.minute[0]).slice(-2) : parsedCron.minute[0];
	        }
	
	        if (parsedCron.month[0] === '*' || !isNaN(parseInt(parsedCron.month[0], 10))) {
	          selectedMonth = parsedCron.month[0] !== '*' ? ('0' + parsedCron.month[0]).slice(-2) : parsedCron.month[0];
	        }
	
	        // return early if we don't have any value
	        if (!selectedDayOfTheMonth && !selectedDayOfTheWeek && !selectedHour && !selectedMinute && !selectedMonth) {
	          return null;
	        }
	
	        if (selectedDayOfTheWeek !== '*') {
	          selectedDay = selectedDayOfTheWeek;
	        } else {
	          selectedDay = selectedDayOfTheMonth;
	        }
	
	        if (selectedDayOfTheMonth === '*' && selectedDayOfTheWeek === '*' && selectedHour === '*' && selectedMinute === '*' && selectedMonth === '*') {
	          selectedPeriod = 'mn';
	          cronInfo = {};
	        } else if (selectedDayOfTheMonth === '*' && selectedDayOfTheWeek === '*' && selectedHour === '*' && selectedMonth === '*' && selectedMinute !== '*') {
	          selectedPeriod = 'h';
	
	          cronInfo = {
	            selectedMinute: selectedMinute
	          };
	        } else if (selectedDayOfTheMonth === '*' && selectedDayOfTheWeek === '*' && selectedMonth === '*' && selectedHour !== '*' && selectedMinute !== '*') {
	          selectedPeriod = 'd';
	
	          cronInfo = {
	            selectedHour: selectedHour,
	            selectedMinute: selectedMinute
	          };
	        } else if (selectedDayOfTheMonth === '*' && selectedMonth === '*' && selectedDayOfTheWeek !== '*' && selectedHour !== '*' && selectedMinute !== '*') {
	          selectedPeriod = 'w';
	
	          cronInfo = {
	            selectedDay: selectedDay,
	            selectedHour: selectedHour,
	            selectedMinute: selectedMinute
	          };
	        } else if (selectedDayOfTheWeek === '*' && selectedMonth === '*' && selectedDayOfTheMonth !== '*' && selectedHour !== '*' && selectedMinute !== '*') {
	          selectedPeriod = 'm';
	
	          cronInfo = {
	            selectedDay: selectedDay,
	            selectedHour: selectedHour,
	            selectedMinute: selectedMinute
	          };
	        } else if (selectedDayOfTheWeek === '*' && selectedDayOfTheMonth !== '*' && selectedMonth !== '*' && selectedHour !== '*' && selectedMinute !== '*') {
	          selectedPeriod = 'y';
	
	          cronInfo = {
	            selectedDay: selectedDay,
	            selectedMonth: selectedMonth,
	            selectedHour: selectedHour,
	            selectedMinute: selectedMinute
	          };
	        }
	
	        // if the period can't be detected just return
	        if (!selectedPeriod) {
	          return null;
	        }
	
	        cronInfo = _extends({}, this.onPeriodChange(selectedPeriod, true), cronInfo);
	
	        return cronInfo;
	      } catch (e) {
	        return null;
	      }
	    }
	  }, {
	    key: 'selectTemplates',
	    value: function selectTemplates(entities) {
	      return Object.keys(entities).filter(function (k) {
	        return entities[k].__entitySet === 'templates';
	      }).map(function (k) {
	        return entities[k];
	      });
	    }
	  }, {
	    key: 'removeInvalidTemplateReferences',
	    value: function removeInvalidTemplateReferences() {
	      var _props = this.props,
	          entity = _props.entity,
	          entities = _props.entities,
	          onChange = _props.onChange;
	
	
	      if (!entity.templateShortid) {
	        return;
	      }
	
	      var updatedTemplates = Object.keys(entities).filter(function (k) {
	        return entities[k].__entitySet === 'templates' && entities[k].shortid === entity.templateShortid;
	      });
	
	      if (updatedTemplates.length === 0) {
	        onChange({ _id: entity._id, templateShortid: null });
	      }
	    }
	  }, {
	    key: 'onUseExpressionChange',
	    value: function onUseExpressionChange(checked) {
	      var entity = this.props.entity;
	
	      var resetCron = false;
	      var uiCronInfo = void 0;
	
	      if (!checked) {
	        uiCronInfo = this.getCronInformation(entity.cron);
	
	        if (!uiCronInfo) {
	          uiCronInfo = this.onPeriodChange('', true);
	          resetCron = true;
	        }
	      } else {
	        uiCronInfo = this.onPeriodChange('', true);
	      }
	
	      this.onCronBuilderChange(_extends({
	        useExpression: checked
	      }, uiCronInfo), resetCron);
	    }
	  }, {
	    key: 'onCronBuilderChange',
	    value: function onCronBuilderChange(stateToSet, resetCron) {
	      var cronExp = new _cronBuilder2.default();
	
	      var _props2 = this.props,
	          onChange = _props2.onChange,
	          entity = _props2.entity;
	      var _state = this.state,
	          selectedPeriod = _state.selectedPeriod,
	          selectedHour = _state.selectedHour,
	          selectedMinute = _state.selectedMinute,
	          selectedDay = _state.selectedDay,
	          selectedMonth = _state.selectedMonth;
	
	
	      var cron = false;
	
	      if (stateToSet && stateToSet.selectedPeriod !== undefined) {
	        selectedPeriod = stateToSet.selectedPeriod;
	      }
	
	      if (stateToSet && stateToSet.selectedHour !== undefined) {
	        selectedHour = stateToSet.selectedHour;
	      }
	
	      if (stateToSet && stateToSet.selectedMinute !== undefined) {
	        selectedMinute = stateToSet.selectedMinute;
	      }
	
	      if (stateToSet && stateToSet.selectedDay !== undefined) {
	        selectedDay = stateToSet.selectedDay;
	      }
	
	      if (stateToSet && stateToSet.selectedMonth !== undefined) {
	        selectedMonth = stateToSet.selectedMonth;
	      }
	
	      if (selectedPeriod === 'mn') {
	        cron = '* * * * *';
	      } else if (selectedPeriod === 'h') {
	        cronExp.addValue('minute', String(parseInt(selectedMinute, 10)));
	      } else if (selectedPeriod === 'd') {
	        cronExp.addValue('hour', String(parseInt(selectedHour, 10)));
	        cronExp.addValue('minute', String(parseInt(selectedMinute, 10)));
	      } else if (selectedPeriod === 'w') {
	        cronExp.addValue('dayOfTheWeek', String(parseInt(selectedDay, 10)));
	        cronExp.addValue('hour', String(parseInt(selectedHour, 10)));
	        cronExp.addValue('minute', String(parseInt(selectedMinute, 10)));
	      } else if (selectedPeriod === 'm') {
	        cronExp.addValue('dayOfTheMonth', String(parseInt(selectedDay, 10)));
	        cronExp.addValue('hour', String(parseInt(selectedHour, 10)));
	        cronExp.addValue('minute', String(parseInt(selectedMinute, 10)));
	      } else if (selectedPeriod === 'y') {
	        cronExp.addValue('dayOfTheMonth', String(parseInt(selectedDay, 10)));
	        cronExp.addValue('hour', String(parseInt(selectedHour, 10)));
	        cronExp.addValue('minute', String(parseInt(selectedMinute, 10)));
	        cronExp.addValue('month', String(parseInt(selectedMonth, 10)));
	      } else {
	        cron = resetCron ? '' : this.props.entity.cron;
	      }
	
	      if (cron === false) {
	        cron = cronExp.build();
	      }
	
	      if (cron !== this.props.entity.cron) {
	        onChange({
	          _id: entity._id,
	          cron: cron
	        });
	      }
	
	      if (stateToSet) {
	        this.setState(stateToSet);
	      }
	    }
	  }, {
	    key: 'onPeriodChange',
	    value: function onPeriodChange(period, returnState) {
	      var newState = {
	        selectedPeriod: period
	      };
	
	      newState.days = [];
	
	      if (period === 'm' || period === 'y') {
	        for (var i = 1; i <= 31; i++) {
	          newState.days.push({
	            name: (0, _ordinalNumberSuffix2.default)(i),
	            value: i
	          });
	        }
	      }
	
	      if (period === 'mn') {
	        newState.showHour = false;
	        newState.showMinute = false;
	        newState.showDay = false;
	        newState.showMonth = false;
	        newState.selectedHour = null;
	        newState.selectedMinute = null;
	        newState.selectedDay = null;
	        newState.selectedMonth = null;
	      } else if (period === 'h') {
	        newState.showHour = false;
	        newState.showMinute = true;
	        newState.showDay = false;
	        newState.showMonth = false;
	        newState.selectedHour = null;
	        newState.selectedMinute = '00';
	        newState.selectedDay = null;
	        newState.selectedMonth = null;
	      } else if (period === 'd') {
	        newState.showHour = true;
	        newState.showMinute = true;
	        newState.showDay = false;
	        newState.showMonth = false;
	        newState.selectedHour = '12';
	        newState.selectedMinute = '00';
	        newState.selectedDay = null;
	        newState.selectedMonth = null;
	      } else if (period === 'w') {
	        newState.showHour = true;
	        newState.showMinute = true;
	        newState.showDay = true;
	        newState.showMonth = false;
	        newState.selectedHour = '12';
	        newState.selectedMinute = '00';
	        newState.selectedDay = 1;
	        newState.selectedMonth = null;
	
	        newState.days = [{
	          name: 'Monday',
	          value: 1
	        }, {
	          name: 'Tuesday',
	          value: 2
	        }, {
	          name: 'Wednesday',
	          value: 3
	        }, {
	          name: 'Thursday',
	          value: 4
	        }, {
	          name: 'Friday',
	          value: 5
	        }, {
	          name: 'Saturday',
	          value: 6
	        }, {
	          name: 'Sunday',
	          value: 0
	        }];
	      } else if (period === 'm') {
	        newState.showHour = true;
	        newState.showMinute = true;
	        newState.showDay = true;
	        newState.showMonth = false;
	        newState.selectedHour = '12';
	        newState.selectedMinute = '00';
	        newState.selectedDay = 1;
	        newState.selectedMonth = null;
	      } else if (period === 'y') {
	        newState.showHour = true;
	        newState.showMinute = true;
	        newState.showDay = true;
	        newState.showMonth = true;
	        newState.selectedHour = '12';
	        newState.selectedMinute = '00';
	        newState.selectedDay = 1;
	        newState.selectedMonth = '01';
	      } else {
	        newState.showHour = false;
	        newState.showMinute = false;
	        newState.showDay = false;
	        newState.showMonth = false;
	        newState.selectedHour = null;
	        newState.selectedMinute = null;
	        newState.selectedDay = null;
	        newState.selectedMonth = null;
	      }
	
	      if (returnState) {
	        return newState;
	      }
	
	      this.setState(newState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _state2 = this.state,
	          useExpression = _state2.useExpression,
	          showHour = _state2.showHour,
	          showMinute = _state2.showMinute,
	          showDay = _state2.showDay,
	          showMonth = _state2.showMonth,
	          selectedPeriod = _state2.selectedPeriod,
	          selectedHour = _state2.selectedHour,
	          selectedMinute = _state2.selectedMinute,
	          selectedDay = _state2.selectedDay,
	          selectedMonth = _state2.selectedMonth,
	          days = _state2.days;
	      var _props3 = this.props,
	          entity = _props3.entity,
	          entities = _props3.entities,
	          _onChange = _props3.onChange;
	
	      var templates = this.selectTemplates(entities);
	      var cronDescription = '';
	
	      if (entity.cron) {
	        try {
	          cronDescription = _cronstrue2.default.toString(entity.cron);
	        } catch (e) {
	          cronDescription = 'Invalid cron expression';
	        }
	      }
	
	      if (!entity || entity.__entitySet !== 'schedules') {
	        return _react2.default.createElement('div', null);
	      }
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Template'
	          ),
	          _react2.default.createElement(
	            'select',
	            {
	              value: entity.templateShortid ? entity.templateShortid : '',
	              onChange: function onChange(v) {
	                return _onChange({ _id: entity._id, templateShortid: v.target.value !== 'empty' ? v.target.value : null });
	              } },
	            _react2.default.createElement(
	              'option',
	              { key: 'empty', value: 'empty' },
	              '- not selected -'
	            ),
	            templates.map(function (e) {
	              return _react2.default.createElement(
	                'option',
	                { key: e.shortid, value: e.shortid },
	                e.name
	              );
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'CRON'
	          ),
	          !useExpression && _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'span',
	              null,
	              'Expression: ',
	              entity.cron
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'span',
	              null,
	              'Description: ',
	              cronDescription
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              _react2.default.createElement('input', {
	                type: 'checkbox',
	                checked: useExpression,
	                onChange: function onChange(v) {
	                  return _this2.onUseExpressionChange(v.target.checked);
	                }
	              }),
	              'Use expression'
	            ),
	            useExpression && _react2.default.createElement('input', {
	              type: 'text', value: entity.cron || '', onChange: function onChange(v) {
	                return _onChange({ _id: entity._id, cron: v.target.value });
	              } })
	          ),
	          !useExpression && _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'Every',
	              ' ',
	              _react2.default.createElement(
	                'select',
	                {
	                  value: selectedPeriod,
	                  onChange: function onChange(ev) {
	                    return _this2.onCronBuilderChange(_this2.onPeriodChange(ev.target.value, true));
	                  }
	                },
	                _react2.default.createElement(
	                  'option',
	                  { key: '-', value: '' },
	                  '- not selected -'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: 'mn', value: 'mn' },
	                  'minute'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: 'h', value: 'h' },
	                  'hour'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: 'd', value: 'd' },
	                  'day'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: 'w', value: 'w' },
	                  'week'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: 'm', value: 'm' },
	                  'month'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: 'y', value: 'y' },
	                  'year'
	                )
	              )
	            )
	          ),
	          !useExpression && showDay && _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'on' + (showMonth ? ' the' : ''),
	              ' ',
	              _react2.default.createElement(
	                'select',
	                {
	                  value: selectedDay,
	                  onChange: function onChange(ev) {
	                    return _this2.onCronBuilderChange({ selectedDay: ev.target.value });
	                  }
	                },
	                days.map(function (day) {
	                  return _react2.default.createElement(
	                    'option',
	                    { key: day.value, value: day.value },
	                    day.name
	                  );
	                })
	              )
	            )
	          ),
	          !useExpression && showMonth && _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'of',
	              ' ',
	              _react2.default.createElement(
	                'select',
	                {
	                  value: selectedMonth,
	                  onChange: function onChange(ev) {
	                    return _this2.onCronBuilderChange({ selectedMonth: ev.target.value });
	                  }
	                },
	                _react2.default.createElement(
	                  'option',
	                  { key: '01', value: '01' },
	                  'January'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '02', value: '02' },
	                  'February'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '03', value: '03' },
	                  'March'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '04', value: '04' },
	                  'April'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '05', value: '05' },
	                  'May'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '06', value: '06' },
	                  'June'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '07', value: '07' },
	                  'July'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '08', value: '08' },
	                  'August'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '09', value: '09' },
	                  'September'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '10', value: '10' },
	                  'October'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '11', value: '11' },
	                  'November'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { key: '12', value: '12' },
	                  'December'
	                )
	              )
	            )
	          ),
	          !useExpression && (showHour || showMinute) && _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'div',
	              null,
	              'at',
	              ' ',
	              _react2.default.createElement(
	                'div',
	                { style: { display: 'inline-block' } },
	                showHour && _react2.default.createElement(_HourTimePicker2.default, {
	                  type: 'hour',
	                  value: selectedHour,
	                  onChange: function onChange(val) {
	                    return _this2.onCronBuilderChange({ selectedHour: val });
	                  }
	                }),
	                showHour && showMinute && ' : ',
	                showMinute && _react2.default.createElement(_HourTimePicker2.default, {
	                  type: 'minute',
	                  value: selectedMinute,
	                  onChange: function onChange(val) {
	                    return _this2.onCronBuilderChange({ selectedMinute: val });
	                  }
	                })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Enabled'
	          ),
	          _react2.default.createElement('input', { type: 'checkbox', checked: entity.enabled !== false, onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, enabled: v.target.checked });
	            } })
	        )
	      );
	    }
	  }], [{
	    key: 'title',
	    value: function title(entity, entities) {
	      var templates = Object.keys(entities).map(function (k) {
	        return entities[k];
	      }).filter(function (t) {
	        return t.__entitySet === 'templates' && t.shortid === entity.templateShortid;
	      });
	
	      if (!templates.length) {
	        return 'schedule (select template...)';
	      }
	
	      return 'schedule (' + templates[0].name + ') ' + (entity.enabled !== true && entity.enabled != null ? '(disabled)' : '');
	    }
	  }]);
	
	  return ScheduleProperties;
	}(_react.Component);
	
	exports.default = ScheduleProperties;

/***/ },
/* 22 */
/***/ function(module, exports) {

	
	/**
	 * Get the ordinal number with suffix from `n`
	 *
	 * @api public
	 * @param {Number} n
	 * @return {String}
	 */
	exports = module.exports = function (n) {
	  return n + exports.suffix(+n);
	};
	
	/**
	 * Get the suffix for the given `n`
	 *
	 * @api private
	 * @param {Number} n
	 * @return {String}
	 */
	exports.suffix = function (n) {
	  return Math.floor(n / 10) === 1
	      ? 'th'
	      : (n % 10 === 1
	        ? 'st'
	        : (n % 10 === 2
	          ? 'nd'
	          : (n % 10 === 3
	            ? 'rd'
	            : 'th')));
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	var DEFAULT_INTERVAL = ['*'];
	
	var CronValidator = (function() {
	    /**
	     * Contains the position-to-name mapping of the cron expression
	     * @type {Object}
	     * @const
	     */
	    var MeasureOfTimeMap = {
	            0: 'minute',
	            1: 'hour',
	            2: 'dayOfTheMonth',
	            3: 'month',
	            4: 'dayOfTheWeek'
	        },
	        /**
	         * contains every permissible 'measureOfTime' string constant
	         * @const
	         * @type {Array}
	         */
	        MeasureOfTimeValues = Object.keys(MeasureOfTimeMap).map(function (key) {
	            return MeasureOfTimeMap[key];
	        });
	
	    /**
	     * validates a given cron expression (object) for length, then calls validateValue on each value
	     * @param {!{
	        minute: Array.string,
	        hour: Array.string,
	        dayOfTheMonth: Array.string,
	        month: Array.string,
	        dayOfTheWeek: Array.string,
	     * }} expression - rich object containing the state of the cron expression
	     * @throws {Error} if expression contains more than 5 keys
	     */
	    var validateExpression = function(expression) {
	        // don't care if it's less than 5, we'll just set those to the default '*'
	        if (Object.keys(expression).length > 5) {
	            throw new Error('Invalid cron expression; limited to 5 values.');
	        }
	
	        for (var measureOfTime in expression) {
	            if (expression.hasOwnProperty(measureOfTime)) {
	                this.validateValue(measureOfTime, expression[measureOfTime]);
	            }
	        }
	    },
	
	    /**
	     * validates a given cron expression (string) for length, then calls validateValue on each value
	     * @param {!String} expression - an optionally empty string containing at most 5 space delimited expressions.
	     * @throws {Error} if the string contains more than 5 space delimited parts.
	     */
	    validateString = function(expression) {
	        var splitExpression = expression.split(' ');
	
	        if (splitExpression.length > 5) {
	            throw new Error('Invalid cron expression; limited to 5 values.');
	        }
	
	        for (var i = 0; i < splitExpression.length; i++) {
	            this.validateValue(MeasureOfTimeMap[i], splitExpression[i]);
	        }
	    },
	
	    /**
	     * validates any given measureOfTime and corresponding value
	     * @param {!String} measureOfTime - as expected
	     * @param {!String} value - the cron-ish interval specifier
	     * @throws {Error} if measureOfTime is bogus
	     * @throws {Error} if value contains an unsupported character
	     */
	    validateValue = function(measureOfTime, value) {
	        var validatorObj = {
	                minute:        {min: 0, max: 59},
	                hour:          {min: 0, max: 23},
	                dayOfTheMonth: {min: 1, max: 31},
	                month:         {min: 1, max: 12},
	                dayOfTheWeek:  {min: 1, max: 7}
	            },
	            range,
	            validChars = /^[0-9*-]/;
	
	        if (!validatorObj[measureOfTime]) {
	            throw new Error('Invalid measureOfTime; Valid options are: ' + MeasureOfTimeValues.join(', '));
	        }
	
	        if (!validChars.test(value)) {
	            throw new Error('Invalid value; Only numbers 0-9, "-", and "*" chars are allowed');
	        }
	
	        if (value !== '*') {
	            // check to see if value is within range if value is not '*'
	            if (value.indexOf('-') >= 0) {
	                // value is a range and must be split into high and low
	                range = value.split('-');
	                if (!range[0] || range[0] < validatorObj[measureOfTime].min) {
	                    throw new Error('Invalid value; bottom of range is not valid for "' + measureOfTime + '". Limit is ' + validatorObj[measureOfTime].min + '.');
	                }
	
	                if (!range[1] || range[1] > validatorObj[measureOfTime].max) {
	                    throw new Error('Invalid value; top of range is not valid for "' + measureOfTime + '". Limit is ' + validatorObj[measureOfTime].max + '.');
	                }
	            } else {
	
	                if (parseInt(value) < validatorObj[measureOfTime].min) {
	                    throw new Error('Invalid value; given value is not valid for "' + measureOfTime + '". Minimum value is "' + validatorObj[measureOfTime].min + '".');
	                }
	                if (parseInt(value) > validatorObj[measureOfTime].max) {
	                    throw new Error('Invalid value; given value is not valid for "' + measureOfTime + '". Maximum value is "' + validatorObj[measureOfTime].max + '".');
	                }
	            }
	        }
	    };
	
	
	    return {
	        measureOfTimeValues: MeasureOfTimeValues,
	        validateExpression: validateExpression,
	        validateString: validateString,
	        validateValue: validateValue
	    }
	}());
	
	
	/**
	 * Initializes a CronBuilder with an optional initial cron expression.
	 * @param {String=} initialExpression - if provided, it must be up to 5 space delimited parts
	 * @throws {Error} if the initialExpression is bogus
	 * @constructor
	 */
	var CronBuilder = (function() {
	    function CronBuilder(initialExpression) {
	        var splitExpression,
	            expression;
	
	        if (initialExpression) {
	            CronValidator.validateString(initialExpression);
	
	            splitExpression = initialExpression.split(' ');
	            // check to see if initial expression is valid
	
	            expression = {
	                minute:        splitExpression[0] ? [splitExpression[0]] : DEFAULT_INTERVAL,
	                hour:          splitExpression[1] ? [splitExpression[1]] : DEFAULT_INTERVAL,
	                dayOfTheMonth: splitExpression[2] ? [splitExpression[2]] : DEFAULT_INTERVAL,
	                month:         splitExpression[3] ? [splitExpression[3]] : DEFAULT_INTERVAL,
	                dayOfTheWeek:  splitExpression[4] ? [splitExpression[4]] : DEFAULT_INTERVAL,
	            };
	        } else {
	            expression = {
	                minute: DEFAULT_INTERVAL,
	                hour: DEFAULT_INTERVAL,
	                dayOfTheMonth: DEFAULT_INTERVAL,
	                month: DEFAULT_INTERVAL,
	                dayOfTheWeek: DEFAULT_INTERVAL,
	            };
	        }
	
	        /**
	         * builds a working cron expression based on the state of the cron object
	         * @returns {string} - working cron expression
	         */
	        this.build = function () {
	            return [
	                expression.minute.join(','),
	                expression.hour.join(','),
	                expression.dayOfTheMonth.join(','),
	                expression.month.join(','),
	                expression.dayOfTheWeek.join(','),
	            ].join(' ');
	        };
	
	        /**
	         * adds a value to what exists currently (builds)
	         * @param {!String} measureOfTime
	         * @param {!Number} value
	         * @throws {Error} if measureOfTime or value fail validation
	         */
	        this.addValue = function (measureOfTime, value) {
	            CronValidator.validateValue(measureOfTime, value);
	
	            if (expression[measureOfTime].length === 1 && expression[measureOfTime][0] === '*') {
	                expression[measureOfTime] = [value];
	            } else {
	                if (expression[measureOfTime].indexOf(value) < 0) {
	                    expression[measureOfTime].push(value);
	                }
	            }
	        };
	
	        /**
	         * removes a single explicit value (subtracts)
	         * @param {!String} measureOfTime - as you might guess
	         * @param {!String} value - the offensive value
	         * @throws {Error} if measureOfTime is bogus.
	         */
	        this.removeValue = function (measureOfTime, value) {
	            if (!expression[measureOfTime]) {
	                throw new Error('Invalid measureOfTime: Valid options are: ' + CronValidator.measureOfTimeValues.join(', '));
	            }
	
	            if (expression[measureOfTime].length === 1 && expression[measureOfTime][0] === '*') {
	                return 'The value for "' + measureOfTime + '" is already at the default value of "*" - this is a no-op.';
	            }
	
	            expression[measureOfTime] = expression[measureOfTime].filter(function (timeValue) {
	               return value !== timeValue;
	            });
	
	            if (!expression[measureOfTime].length) {
	                expression[measureOfTime] = DEFAULT_INTERVAL;
	            }
	        };
	
	        /**
	         * returns the current state of a given measureOfTime
	         * @param {!String} measureOfTime one of "minute", "hour", etc
	         * @returns {!String} comma separated blah blah
	         * @throws {Error} if the measureOfTime is not one of the permitted values.
	         */
	        this.get = function (measureOfTime) {
	            if (!expression[measureOfTime]) {
	                throw new Error('Invalid measureOfTime: Valid options are: ' + CronValidator.measureOfTimeValues.join(', '));
	            }
	
	            return expression[measureOfTime].join(',');
	        };
	
	        /**
	         * sets the state of a given measureOfTime
	         * @param {!String} measureOfTime - yup
	         * @param {!Array.<String>} value - the 5 tuple array of values to set
	         * @returns {!String} the comma separated version of the value that you passed in
	         * @throws {Error} if your "value" is not an Array&lt;String&gt;
	         * @throws {Error} when any item in your value isn't a legal cron-ish descriptor
	         */
	        this.set = function (measureOfTime, value) {
	            if (!Array.isArray(value)) {
	                throw new Error('Invalid value; Value must be in the form of an Array.');
	            }
	
	            for(var i = 0; i < value.length; i++) {
	                CronValidator.validateValue(measureOfTime, value[i]);
	            }
	
	            expression[measureOfTime] = value;
	
	            return expression[measureOfTime].join(',');
	        };
	
	        /**
	         * Returns a rich object that describes the current state of the cron expression.
	         * @returns {!{
	            minute: Array.string,
	            hour: Array.string,
	            dayOfTheMonth: Array.string,
	            month: Array.string,
	            dayOfTheWeek: Array.string,
	         * }}
	         */
	        this.getAll = function () {
	            return expression;
	        };
	
	        /**
	         * sets the state for the entire cron expression
	         * @param {!{
	            minute: Array.string,
	            hour: Array.string,
	            dayOfTheMonth: Array.string,
	            month: Array.string,
	            dayOfTheWeek: Array.string,
	         * }} expToSet - the entirety of the cron expression.
	         * @throws {Error} as usual
	         */
	        this.setAll = function (expToSet) {
	            CronValidator.validateExpression(expToSet);
	
	            expression = expToSet;
	        };
	    }
	
	    return CronBuilder;
	}());
	
	module.exports = CronBuilder;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("cronstrue", [], factory);
		else if(typeof exports === 'object')
			exports["cronstrue"] = factory();
		else
			root["cronstrue"] = factory();
	})(typeof self !== 'undefined' ? self : this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, {
	/******/ 				configurable: false,
	/******/ 				enumerable: true,
	/******/ 				get: getter
	/******/ 			});
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 4);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var stringUtilities_1 = __webpack_require__(1);
	var cronParser_1 = __webpack_require__(2);
	var ExpressionDescriptor = (function () {
	    function ExpressionDescriptor(expression, options) {
	        this.expression = expression;
	        this.options = options;
	        this.expressionParts = new Array(5);
	        if (ExpressionDescriptor.locales[options.locale]) {
	            this.i18n = ExpressionDescriptor.locales[options.locale];
	        }
	        else {
	            console.warn("Locale '" + options.locale + "' could not be found; falling back to 'en'.");
	            this.i18n = ExpressionDescriptor.locales["en"];
	        }
	        if (options.use24HourTimeFormat === undefined) {
	            options.use24HourTimeFormat = this.i18n.use24HourTimeFormatByDefault();
	        }
	    }
	    ExpressionDescriptor.toString = function (expression, _a) {
	        var _b = _a === void 0 ? {} : _a, _c = _b.throwExceptionOnParseError, throwExceptionOnParseError = _c === void 0 ? true : _c, _d = _b.verbose, verbose = _d === void 0 ? false : _d, _e = _b.dayOfWeekStartIndexZero, dayOfWeekStartIndexZero = _e === void 0 ? true : _e, use24HourTimeFormat = _b.use24HourTimeFormat, _f = _b.locale, locale = _f === void 0 ? "en" : _f;
	        var options = {
	            throwExceptionOnParseError: throwExceptionOnParseError,
	            verbose: verbose,
	            dayOfWeekStartIndexZero: dayOfWeekStartIndexZero,
	            use24HourTimeFormat: use24HourTimeFormat,
	            locale: locale
	        };
	        var descripter = new ExpressionDescriptor(expression, options);
	        return descripter.getFullDescription();
	    };
	    ExpressionDescriptor.initialize = function (localesLoader) {
	        ExpressionDescriptor.specialCharacters = ["/", "-", ",", "*"];
	        localesLoader.load(ExpressionDescriptor.locales);
	    };
	    ExpressionDescriptor.prototype.getFullDescription = function () {
	        var description = "";
	        try {
	            var parser = new cronParser_1.CronParser(this.expression, this.options.dayOfWeekStartIndexZero);
	            this.expressionParts = parser.parse();
	            var timeSegment = this.getTimeOfDayDescription();
	            var dayOfMonthDesc = this.getDayOfMonthDescription();
	            var monthDesc = this.getMonthDescription();
	            var dayOfWeekDesc = this.getDayOfWeekDescription();
	            var yearDesc = this.getYearDescription();
	            description += timeSegment + dayOfMonthDesc + dayOfWeekDesc + monthDesc + yearDesc;
	            description = this.transformVerbosity(description, this.options.verbose);
	            description = description.charAt(0).toLocaleUpperCase() + description.substr(1);
	        }
	        catch (ex) {
	            if (!this.options.throwExceptionOnParseError) {
	                description = this.i18n.anErrorOccuredWhenGeneratingTheExpressionD();
	            }
	            else {
	                throw "" + ex;
	            }
	        }
	        return description;
	    };
	    ExpressionDescriptor.prototype.getTimeOfDayDescription = function () {
	        var secondsExpression = this.expressionParts[0];
	        var minuteExpression = this.expressionParts[1];
	        var hourExpression = this.expressionParts[2];
	        var description = "";
	        if (!stringUtilities_1.StringUtilities.containsAny(minuteExpression, ExpressionDescriptor.specialCharacters) &&
	            !stringUtilities_1.StringUtilities.containsAny(hourExpression, ExpressionDescriptor.specialCharacters) &&
	            !stringUtilities_1.StringUtilities.containsAny(secondsExpression, ExpressionDescriptor.specialCharacters)) {
	            description += this.i18n.atSpace() + this.formatTime(hourExpression, minuteExpression, secondsExpression);
	        }
	        else if (minuteExpression.indexOf("-") > -1 &&
	            !(minuteExpression.indexOf(",") > -1) &&
	            !stringUtilities_1.StringUtilities.containsAny(hourExpression, ExpressionDescriptor.specialCharacters)) {
	            var minuteParts = minuteExpression.split("-");
	            description += stringUtilities_1.StringUtilities.format(this.i18n.everyMinutebetweenX0AndX1(), this.formatTime(hourExpression, minuteParts[0], ""), this.formatTime(hourExpression, minuteParts[1], ""));
	        }
	        else if (hourExpression.indexOf(",") > -1 &&
	            hourExpression.indexOf("-") == -1 &&
	            !stringUtilities_1.StringUtilities.containsAny(minuteExpression, ExpressionDescriptor.specialCharacters)) {
	            var hourParts = hourExpression.split(",");
	            description += this.i18n.at();
	            for (var i = 0; i < hourParts.length; i++) {
	                description += " ";
	                description += this.formatTime(hourParts[i], minuteExpression, "");
	                if (i < hourParts.length - 2) {
	                    description += ",";
	                }
	                if (i == hourParts.length - 2) {
	                    description += this.i18n.spaceAnd();
	                }
	            }
	        }
	        else {
	            var secondsDescription = this.getSecondsDescription();
	            var minutesDescription = this.getMinutesDescription();
	            var hoursDescription = this.getHoursDescription();
	            description += secondsDescription;
	            if (description.length > 0) {
	                description += ", ";
	            }
	            description += minutesDescription;
	            if (description.length > 0) {
	                description += ", ";
	            }
	            description += hoursDescription;
	        }
	        return description;
	    };
	    ExpressionDescriptor.prototype.getSecondsDescription = function () {
	        var _this = this;
	        var description = this.getSegmentDescription(this.expressionParts[0], this.i18n.everysecond(), function (s) {
	            return s;
	        }, function (s) {
	            return stringUtilities_1.StringUtilities.format(_this.i18n.everyX0Seconds(), s);
	        }, function (s) {
	            return _this.i18n.secondsX0ThroughX1PastTheMinute();
	        }, function (s) {
	            return s == "0"
	                ? ""
	                : parseInt(s) < 20
	                    ? _this.i18n.atX0SecondsPastTheMinute()
	                    : _this.i18n.atX0SecondsPastTheMinuteGt20() || _this.i18n.atX0SecondsPastTheMinute();
	        });
	        return description;
	    };
	    ExpressionDescriptor.prototype.getMinutesDescription = function () {
	        var _this = this;
	        var description = this.getSegmentDescription(this.expressionParts[1], this.i18n.everyMinute(), function (s) {
	            return s;
	        }, function (s) {
	            return stringUtilities_1.StringUtilities.format(_this.i18n.everyX0Minutes(), s);
	        }, function (s) {
	            return _this.i18n.minutesX0ThroughX1PastTheHour();
	        }, function (s) {
	            try {
	                return s == "0"
	                    ? ""
	                    : parseInt(s) < 20
	                        ? _this.i18n.atX0MinutesPastTheHour()
	                        : _this.i18n.atX0MinutesPastTheHourGt20() || _this.i18n.atX0MinutesPastTheHour();
	            }
	            catch (e) {
	                return _this.i18n.atX0MinutesPastTheHour();
	            }
	        });
	        return description;
	    };
	    ExpressionDescriptor.prototype.getHoursDescription = function () {
	        var _this = this;
	        var expression = this.expressionParts[2];
	        var description = this.getSegmentDescription(expression, this.i18n.everyHour(), function (s) {
	            return _this.formatTime(s, "0", "");
	        }, function (s) {
	            return stringUtilities_1.StringUtilities.format(_this.i18n.everyX0Hours(), s);
	        }, function (s) {
	            return _this.i18n.betweenX0AndX1();
	        }, function (s) {
	            return _this.i18n.atX0();
	        });
	        return description;
	    };
	    ExpressionDescriptor.prototype.getDayOfWeekDescription = function () {
	        var _this = this;
	        var daysOfWeekNames = this.i18n.daysOfTheWeek();
	        var description = null;
	        if (this.expressionParts[5] == "*") {
	            description = "";
	        }
	        else {
	            description = this.getSegmentDescription(this.expressionParts[5], this.i18n.commaEveryDay(), function (s) {
	                var exp = s;
	                if (s.indexOf("#") > -1) {
	                    exp = s.substr(0, s.indexOf("#"));
	                }
	                else if (s.indexOf("L") > -1) {
	                    exp = exp.replace("L", "");
	                }
	                return daysOfWeekNames[parseInt(exp)];
	            }, function (s) {
	                return stringUtilities_1.StringUtilities.format(_this.i18n.commaEveryX0daysOfTheWeek(), s);
	            }, function (s) {
	                return _this.i18n.commaX0ThroughX1();
	            }, function (s) {
	                var format = null;
	                if (s.indexOf("#") > -1) {
	                    var dayOfWeekOfMonthNumber = s.substring(s.indexOf("#") + 1);
	                    var dayOfWeekOfMonthDescription = null;
	                    switch (dayOfWeekOfMonthNumber) {
	                        case "1":
	                            dayOfWeekOfMonthDescription = _this.i18n.first();
	                            break;
	                        case "2":
	                            dayOfWeekOfMonthDescription = _this.i18n.second();
	                            break;
	                        case "3":
	                            dayOfWeekOfMonthDescription = _this.i18n.third();
	                            break;
	                        case "4":
	                            dayOfWeekOfMonthDescription = _this.i18n.fourth();
	                            break;
	                        case "5":
	                            dayOfWeekOfMonthDescription = _this.i18n.fifth();
	                            break;
	                    }
	                    format = _this.i18n.commaOnThe() + dayOfWeekOfMonthDescription + _this.i18n.spaceX0OfTheMonth();
	                }
	                else if (s.indexOf("L") > -1) {
	                    format = _this.i18n.commaOnTheLastX0OfTheMonth();
	                }
	                else {
	                    format = _this.i18n.commaOnlyOnX0();
	                }
	                return format;
	            });
	        }
	        return description;
	    };
	    ExpressionDescriptor.prototype.getMonthDescription = function () {
	        var _this = this;
	        var monthNames = this.i18n.monthsOfTheYear();
	        var description = this.getSegmentDescription(this.expressionParts[4], "", function (s) {
	            return monthNames[parseInt(s) - 1];
	        }, function (s) {
	            return stringUtilities_1.StringUtilities.format(_this.i18n.commaEveryX0Months(), s);
	        }, function (s) {
	            return _this.i18n.commaMonthX0ThroughMonthX1() || _this.i18n.commaX0ThroughX1();
	        }, function (s) {
	            return _this.i18n.commaOnlyInX0();
	        });
	        return description;
	    };
	    ExpressionDescriptor.prototype.getDayOfMonthDescription = function () {
	        var _this = this;
	        var description = null;
	        var expression = this.expressionParts[3];
	        switch (expression) {
	            case "L":
	                description = this.i18n.commaOnTheLastDayOfTheMonth();
	                break;
	            case "WL":
	            case "LW":
	                description = this.i18n.commaOnTheLastWeekdayOfTheMonth();
	                break;
	            default:
	                var weekDayNumberMatches = expression.match(/(\d{1,2}W)|(W\d{1,2})/);
	                if (weekDayNumberMatches) {
	                    var dayNumber = parseInt(weekDayNumberMatches[0].replace("W", ""));
	                    var dayString = dayNumber == 1
	                        ? this.i18n.firstWeekday()
	                        : stringUtilities_1.StringUtilities.format(this.i18n.weekdayNearestDayX0(), dayNumber.toString());
	                    description = stringUtilities_1.StringUtilities.format(this.i18n.commaOnTheX0OfTheMonth(), dayString);
	                    break;
	                }
	                else {
	                    var lastDayOffSetMatches = expression.match(/L-(\d{1,2})/);
	                    if (lastDayOffSetMatches) {
	                        var offSetDays = lastDayOffSetMatches[1];
	                        description = stringUtilities_1.StringUtilities.format(this.i18n.commaDaysBeforeTheLastDayOfTheMonth(), offSetDays);
	                        break;
	                    }
	                    else {
	                        description = this.getSegmentDescription(expression, this.i18n.commaEveryDay(), function (s) {
	                            return s == "L" ? _this.i18n.lastDay() : s;
	                        }, function (s) {
	                            return s == "1" ? _this.i18n.commaEveryDay() : _this.i18n.commaEveryX0Days();
	                        }, function (s) {
	                            return _this.i18n.commaBetweenDayX0AndX1OfTheMonth();
	                        }, function (s) {
	                            return _this.i18n.commaOnDayX0OfTheMonth();
	                        });
	                    }
	                    break;
	                }
	        }
	        return description;
	    };
	    ExpressionDescriptor.prototype.getYearDescription = function () {
	        var _this = this;
	        var description = this.getSegmentDescription(this.expressionParts[6], "", function (s) {
	            return /^\d+$/.test(s) ? new Date(parseInt(s), 1).getFullYear().toString() : s;
	        }, function (s) {
	            return stringUtilities_1.StringUtilities.format(_this.i18n.commaEveryX0Years(), s);
	        }, function (s) {
	            return _this.i18n.commaYearX0ThroughYearX1() || _this.i18n.commaX0ThroughX1();
	        }, function (s) {
	            return _this.i18n.commaOnlyInX0();
	        });
	        return description;
	    };
	    ExpressionDescriptor.prototype.getSegmentDescription = function (expression, allDescription, getSingleItemDescription, getIntervalDescriptionFormat, getBetweenDescriptionFormat, getDescriptionFormat) {
	        var _this = this;
	        var description = null;
	        if (!expression) {
	            description = "";
	        }
	        else if (expression === "*") {
	            description = allDescription;
	        }
	        else if (!stringUtilities_1.StringUtilities.containsAny(expression, ["/", "-", ","])) {
	            description = stringUtilities_1.StringUtilities.format(getDescriptionFormat(expression), getSingleItemDescription(expression));
	        }
	        else if (expression.indexOf("/") > -1) {
	            var segments = expression.split("/");
	            description = stringUtilities_1.StringUtilities.format(getIntervalDescriptionFormat(segments[1]), getSingleItemDescription(segments[1]));
	            if (segments[0].indexOf("-") > -1) {
	                var betweenSegmentDescription = this.generateBetweenSegmentDescription(segments[0], getBetweenDescriptionFormat, getSingleItemDescription);
	                if (betweenSegmentDescription.indexOf(", ") != 0) {
	                    description += ", ";
	                }
	                description += betweenSegmentDescription;
	            }
	            else if (!stringUtilities_1.StringUtilities.containsAny(segments[0], ["*", ","])) {
	                var rangeItemDescription = stringUtilities_1.StringUtilities.format(getDescriptionFormat(segments[0]), getSingleItemDescription(segments[0]));
	                rangeItemDescription = rangeItemDescription.replace(", ", "");
	                description += stringUtilities_1.StringUtilities.format(this.i18n.commaStartingX0(), rangeItemDescription);
	            }
	        }
	        else if (expression.indexOf(",") > -1) {
	            var segments = expression.split(",");
	            var descriptionContent = "";
	            for (var i = 0; i < segments.length; i++) {
	                if (i > 0 && segments.length > 2) {
	                    descriptionContent += ",";
	                    if (i < segments.length - 1) {
	                        descriptionContent += " ";
	                    }
	                }
	                if (i > 0 && segments.length > 1 && (i == segments.length - 1 || segments.length == 2)) {
	                    descriptionContent += this.i18n.spaceAndSpace();
	                }
	                if (segments[i].indexOf("-") > -1) {
	                    var betweenSegmentDescription = this.generateBetweenSegmentDescription(segments[i], function (s) {
	                        return _this.i18n.commaX0ThroughX1();
	                    }, getSingleItemDescription);
	                    betweenSegmentDescription = betweenSegmentDescription.replace(", ", "");
	                    descriptionContent += betweenSegmentDescription;
	                }
	                else {
	                    descriptionContent += getSingleItemDescription(segments[i]);
	                }
	            }
	            description = stringUtilities_1.StringUtilities.format(getDescriptionFormat(expression), descriptionContent);
	        }
	        else if (expression.indexOf("-") > -1) {
	            description = this.generateBetweenSegmentDescription(expression, getBetweenDescriptionFormat, getSingleItemDescription);
	        }
	        return description;
	    };
	    ExpressionDescriptor.prototype.generateBetweenSegmentDescription = function (betweenExpression, getBetweenDescriptionFormat, getSingleItemDescription) {
	        var description = "";
	        var betweenSegments = betweenExpression.split("-");
	        var betweenSegment1Description = getSingleItemDescription(betweenSegments[0]);
	        var betweenSegment2Description = getSingleItemDescription(betweenSegments[1]);
	        betweenSegment2Description = betweenSegment2Description.replace(":00", ":59");
	        var betweenDescriptionFormat = getBetweenDescriptionFormat(betweenExpression);
	        description += stringUtilities_1.StringUtilities.format(betweenDescriptionFormat, betweenSegment1Description, betweenSegment2Description);
	        return description;
	    };
	    ExpressionDescriptor.prototype.formatTime = function (hourExpression, minuteExpression, secondExpression) {
	        var hour = parseInt(hourExpression);
	        var period = "";
	        if (!this.options.use24HourTimeFormat) {
	            period = hour >= 12 ? " PM" : " AM";
	            if (hour > 12) {
	                hour -= 12;
	            }
	            if (hour === 0) {
	                hour = 12;
	            }
	        }
	        var minute = minuteExpression;
	        var second = "";
	        if (secondExpression) {
	            second = ":" + ("00" + secondExpression).substring(secondExpression.length);
	        }
	        return ("00" + hour.toString()).substring(hour.toString().length) + ":" + ("00" + minute.toString()).substring(minute.toString().length) + second + period;
	    };
	    ExpressionDescriptor.prototype.transformVerbosity = function (description, useVerboseFormat) {
	        if (!useVerboseFormat) {
	            description = description.replace(new RegExp(this.i18n.commaEveryMinute(), "g"), "");
	            description = description.replace(new RegExp(this.i18n.commaEveryHour(), "g"), "");
	            description = description.replace(new RegExp(this.i18n.commaEveryDay(), "g"), "");
	        }
	        return description;
	    };
	    ExpressionDescriptor.locales = {};
	    return ExpressionDescriptor;
	}());
	exports.ExpressionDescriptor = ExpressionDescriptor;
	
	
	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var StringUtilities = (function () {
	    function StringUtilities() {
	    }
	    StringUtilities.format = function (template) {
	        var values = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            values[_i - 1] = arguments[_i];
	        }
	        return template.replace(/%s/g, function () {
	            return values.shift();
	        });
	    };
	    StringUtilities.containsAny = function (text, searchStrings) {
	        return searchStrings.some(function (c) {
	            return text.indexOf(c) > -1;
	        });
	    };
	    return StringUtilities;
	}());
	exports.StringUtilities = StringUtilities;
	
	
	/***/ }),
	/* 2 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var CronParser = (function () {
	    function CronParser(expression, dayOfWeekStartIndexZero) {
	        if (dayOfWeekStartIndexZero === void 0) { dayOfWeekStartIndexZero = true; }
	        this.expression = expression;
	        this.dayOfWeekStartIndexZero = dayOfWeekStartIndexZero;
	    }
	    CronParser.prototype.parse = function () {
	        var parsed = this.extractParts(this.expression);
	        this.normalize(parsed);
	        this.validate(parsed);
	        return parsed;
	    };
	    CronParser.prototype.extractParts = function (expression) {
	        if (!this.expression) {
	            throw new Error("Expression is empty");
	        }
	        var parsed = expression.trim().split(" ");
	        if (parsed.length < 5) {
	            throw new Error("Expression has only " + parsed.length + " part" + (parsed.length == 1 ? "" : "s") + ". At least 5 parts are required.");
	        }
	        else if (parsed.length == 5) {
	            parsed.unshift("");
	            parsed.push("");
	        }
	        else if (parsed.length == 6) {
	            if (/\d{4}$/.test(parsed[5])) {
	                parsed.unshift("");
	            }
	            else {
	                parsed.push("");
	            }
	        }
	        else if (parsed.length > 7) {
	            throw new Error("Expression has " + parsed.length + " parts; too many!");
	        }
	        return parsed;
	    };
	    CronParser.prototype.normalize = function (expressionParts) {
	        var _this = this;
	        expressionParts[3] = expressionParts[3].replace("?", "*");
	        expressionParts[5] = expressionParts[5].replace("?", "*");
	        if (expressionParts[0].indexOf("0/") == 0) {
	            expressionParts[0] = expressionParts[0].replace("0/", "*/");
	        }
	        if (expressionParts[1].indexOf("0/") == 0) {
	            expressionParts[1] = expressionParts[1].replace("0/", "*/");
	        }
	        if (expressionParts[2].indexOf("0/") == 0) {
	            expressionParts[2] = expressionParts[2].replace("0/", "*/");
	        }
	        if (expressionParts[3].indexOf("1/") == 0) {
	            expressionParts[3] = expressionParts[3].replace("1/", "*/");
	        }
	        if (expressionParts[4].indexOf("1/") == 0) {
	            expressionParts[4] = expressionParts[4].replace("1/", "*/");
	        }
	        if (expressionParts[5].indexOf("1/") == 0) {
	            expressionParts[5] = expressionParts[5].replace("1/", "*/");
	        }
	        if (expressionParts[6].indexOf("1/") == 0) {
	            expressionParts[6] = expressionParts[6].replace("1/", "*/");
	        }
	        expressionParts[5] = expressionParts[5].replace(/(^\d)|([^#/\s]\d)/g, function (t) {
	            var dowDigits = t.replace(/\D/, "");
	            var dowDigitsAdjusted = dowDigits;
	            if (_this.dayOfWeekStartIndexZero) {
	                if (dowDigits == "7") {
	                    dowDigitsAdjusted = "0";
	                }
	            }
	            else {
	                dowDigitsAdjusted = (parseInt(dowDigits) - 1).toString();
	            }
	            return t.replace(dowDigits, dowDigitsAdjusted);
	        });
	        if (expressionParts[5] == "L") {
	            expressionParts[5] = "6";
	        }
	        if (expressionParts[3] == "?") {
	            expressionParts[3] = "*";
	        }
	        if (expressionParts[3].indexOf("W") > -1 &&
	            (expressionParts[3].indexOf(",") > -1 || expressionParts[3].indexOf("-") > -1)) {
	            throw new Error("The 'W' character can be specified only when the day-of-month is a single day, not a range or list of days.");
	        }
	        var days = {
	            SUN: 0,
	            MON: 1,
	            TUE: 2,
	            WED: 3,
	            THU: 4,
	            FRI: 5,
	            SAT: 6
	        };
	        for (var day in days) {
	            expressionParts[5] = expressionParts[5].replace(new RegExp(day, "gi"), days[day].toString());
	        }
	        var months = {
	            JAN: 1,
	            FEB: 2,
	            MAR: 3,
	            APR: 4,
	            MAY: 5,
	            JUN: 6,
	            JUL: 7,
	            AUG: 8,
	            SEP: 9,
	            OCT: 10,
	            NOV: 11,
	            DEC: 12
	        };
	        for (var month in months) {
	            expressionParts[4] = expressionParts[4].replace(new RegExp(month, "gi"), months[month].toString());
	        }
	        if (expressionParts[0] == "0") {
	            expressionParts[0] = "";
	        }
	        for (var i = 0; i < expressionParts.length; i++) {
	            if (expressionParts[i] == "*/1") {
	                expressionParts[i] = "*";
	            }
	            if (expressionParts[i].indexOf("/") > -1 && !/^\*|\-|\,/.test(expressionParts[i])) {
	                var stepRangeThrough = null;
	                switch (i) {
	                    case 4:
	                        stepRangeThrough = "12";
	                        break;
	                    case 5:
	                        stepRangeThrough = "6";
	                        break;
	                    case 6:
	                        stepRangeThrough = "9999";
	                        break;
	                    default:
	                        stepRangeThrough = null;
	                        break;
	                }
	                if (stepRangeThrough != null) {
	                    var parts = expressionParts[i].split("/");
	                    expressionParts[i] = parts[0] + "-" + stepRangeThrough + "/" + parts[1];
	                }
	            }
	        }
	    };
	    CronParser.prototype.validate = function (parsed) {
	        this.assertNoInvalidCharacters("DOW", parsed[5]);
	        this.assertNoInvalidCharacters("DOM", parsed[3]);
	    };
	    CronParser.prototype.assertNoInvalidCharacters = function (partDescription, expression) {
	        var invalidChars = expression.match(/[A-KM-VX-Z]+/gi);
	        if (invalidChars && invalidChars.length) {
	            throw new Error(partDescription + " part contains invalid values: '" + invalidChars.toString() + "'");
	        }
	    };
	    return CronParser;
	}());
	exports.CronParser = CronParser;
	
	
	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var en = (function () {
	    function en() {
	    }
	    en.prototype.atX0SecondsPastTheMinuteGt20 = function () {
	        return null;
	    };
	    en.prototype.atX0MinutesPastTheHourGt20 = function () {
	        return null;
	    };
	    en.prototype.commaMonthX0ThroughMonthX1 = function () {
	        return null;
	    };
	    en.prototype.commaYearX0ThroughYearX1 = function () {
	        return null;
	    };
	    en.prototype.use24HourTimeFormatByDefault = function () {
	        return false;
	    };
	    en.prototype.anErrorOccuredWhenGeneratingTheExpressionD = function () {
	        return "An error occured when generating the expression description.  Check the cron expression syntax.";
	    };
	    en.prototype.everyMinute = function () {
	        return "every minute";
	    };
	    en.prototype.everyHour = function () {
	        return "every hour";
	    };
	    en.prototype.atSpace = function () {
	        return "At ";
	    };
	    en.prototype.everyMinutebetweenX0AndX1 = function () {
	        return "Every minute between %s and %s";
	    };
	    en.prototype.at = function () {
	        return "At";
	    };
	    en.prototype.spaceAnd = function () {
	        return " and";
	    };
	    en.prototype.everysecond = function () {
	        return "every second";
	    };
	    en.prototype.everyX0Seconds = function () {
	        return "every %s seconds";
	    };
	    en.prototype.secondsX0ThroughX1PastTheMinute = function () {
	        return "seconds %s through %s past the minute";
	    };
	    en.prototype.atX0SecondsPastTheMinute = function () {
	        return "at %s seconds past the minute";
	    };
	    en.prototype.everyX0Minutes = function () {
	        return "every %s minutes";
	    };
	    en.prototype.minutesX0ThroughX1PastTheHour = function () {
	        return "minutes %s through %s past the hour";
	    };
	    en.prototype.atX0MinutesPastTheHour = function () {
	        return "at %s minutes past the hour";
	    };
	    en.prototype.everyX0Hours = function () {
	        return "every %s hours";
	    };
	    en.prototype.betweenX0AndX1 = function () {
	        return "between %s and %s";
	    };
	    en.prototype.atX0 = function () {
	        return "at %s";
	    };
	    en.prototype.commaEveryDay = function () {
	        return ", every day";
	    };
	    en.prototype.commaEveryX0daysOfTheWeek = function () {
	        return ", every %s days of the week";
	    };
	    en.prototype.commaX0ThroughX1 = function () {
	        return ", %s through %s";
	    };
	    en.prototype.first = function () {
	        return "first";
	    };
	    en.prototype.second = function () {
	        return "second";
	    };
	    en.prototype.third = function () {
	        return "third";
	    };
	    en.prototype.fourth = function () {
	        return "fourth";
	    };
	    en.prototype.fifth = function () {
	        return "fifth";
	    };
	    en.prototype.commaOnThe = function () {
	        return ", on the ";
	    };
	    en.prototype.spaceX0OfTheMonth = function () {
	        return " %s of the month";
	    };
	    en.prototype.lastDay = function () {
	        return "the last day";
	    };
	    en.prototype.commaOnTheLastX0OfTheMonth = function () {
	        return ", on the last %s of the month";
	    };
	    en.prototype.commaOnlyOnX0 = function () {
	        return ", only on %s";
	    };
	    en.prototype.commaEveryX0Months = function () {
	        return ", every %s months";
	    };
	    en.prototype.commaOnlyInX0 = function () {
	        return ", only in %s";
	    };
	    en.prototype.commaOnTheLastDayOfTheMonth = function () {
	        return ", on the last day of the month";
	    };
	    en.prototype.commaOnTheLastWeekdayOfTheMonth = function () {
	        return ", on the last weekday of the month";
	    };
	    en.prototype.commaDaysBeforeTheLastDayOfTheMonth = function () {
	        return ", %s days before the last day of the month";
	    };
	    en.prototype.firstWeekday = function () {
	        return "first weekday";
	    };
	    en.prototype.weekdayNearestDayX0 = function () {
	        return "weekday nearest day %s";
	    };
	    en.prototype.commaOnTheX0OfTheMonth = function () {
	        return ", on the %s of the month";
	    };
	    en.prototype.commaEveryX0Days = function () {
	        return ", every %s days";
	    };
	    en.prototype.commaBetweenDayX0AndX1OfTheMonth = function () {
	        return ", between day %s and %s of the month";
	    };
	    en.prototype.commaOnDayX0OfTheMonth = function () {
	        return ", on day %s of the month";
	    };
	    en.prototype.spaceAndSpace = function () {
	        return " and ";
	    };
	    en.prototype.commaEveryMinute = function () {
	        return ", every minute";
	    };
	    en.prototype.commaEveryHour = function () {
	        return ", every hour";
	    };
	    en.prototype.commaEveryX0Years = function () {
	        return ", every %s years";
	    };
	    en.prototype.commaStartingX0 = function () {
	        return ", starting %s";
	    };
	    en.prototype.daysOfTheWeek = function () {
	        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	    };
	    en.prototype.monthsOfTheYear = function () {
	        return [
	            "January",
	            "February",
	            "March",
	            "April",
	            "May",
	            "June",
	            "July",
	            "August",
	            "September",
	            "October",
	            "November",
	            "December"
	        ];
	    };
	    return en;
	}());
	exports.en = en;
	
	
	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var expressionDescriptor_1 = __webpack_require__(0);
	var enLocaleLoader_1 = __webpack_require__(5);
	expressionDescriptor_1.ExpressionDescriptor.initialize(new enLocaleLoader_1.enLocaleLoader());
	exports.default = expressionDescriptor_1.ExpressionDescriptor;
	var toString = expressionDescriptor_1.ExpressionDescriptor.toString;
	exports.toString = toString;
	
	
	/***/ }),
	/* 5 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var en_1 = __webpack_require__(3);
	var enLocaleLoader = (function () {
	    function enLocaleLoader() {
	    }
	    enLocaleLoader.prototype.load = function (availableLocales) {
	        availableLocales["en"] = new en_1.en();
	    };
	    return enLocaleLoader;
	}());
	exports.enLocaleLoader = enLocaleLoader;
	
	
	/***/ })
	/******/ ]);
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _HourTimeSelect = __webpack_require__(26);
	
	var _HourTimeSelect2 = _interopRequireDefault(_HourTimeSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HourTimePicker = function (_Component) {
	  _inherits(HourTimePicker, _Component);
	
	  function HourTimePicker(props) {
	    _classCallCheck(this, HourTimePicker);
	
	    var _this = _possibleConstructorReturn(this, (HourTimePicker.__proto__ || Object.getPrototypeOf(HourTimePicker)).call(this, props));
	
	    _this.state = {
	      editing: false
	    };
	
	    _this.onSelect = _this.onSelect.bind(_this);
	    return _this;
	  }
	
	  _createClass(HourTimePicker, [{
	    key: 'onSelect',
	    value: function onSelect(val) {
	      this.setState({ editing: false });
	      this.props.onChange(val);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var editing = this.state.editing;
	      var _props = this.props,
	          type = _props.type,
	          value = _props.value;
	
	
	      return _react2.default.createElement(
	        'div',
	        { style: { display: 'inline-block' } },
	        _react2.default.createElement('input', {
	          type: 'text',
	          readOnly: true,
	          style: { width: '30px', cursor: 'pointer' },
	          value: value,
	          onClick: function onClick() {
	            return _this2.setState({ editing: true });
	          }
	        }),
	        _react2.default.createElement(
	          _jsreportStudio.Popover,
	          {
	            wrapper: false,
	            open: editing,
	            onClose: function onClose() {
	              return _this2.setState({ editing: false });
	            }
	          },
	          _react2.default.createElement(_HourTimeSelect2.default, {
	            type: type,
	            value: value,
	            onSelect: this.onSelect
	          })
	        )
	      );
	    }
	  }]);
	
	  return HourTimePicker;
	}(_react.Component);
	
	exports.default = HourTimePicker;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HourTimeSelect = __webpack_require__(27);
	
	var _HourTimeSelect2 = _interopRequireDefault(_HourTimeSelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HourTimeSelectItem = function (_Component) {
	  _inherits(HourTimeSelectItem, _Component);
	
	  function HourTimeSelectItem(props) {
	    _classCallCheck(this, HourTimeSelectItem);
	
	    var _this = _possibleConstructorReturn(this, (HourTimeSelectItem.__proto__ || Object.getPrototypeOf(HourTimeSelectItem)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(HourTimeSelectItem, [{
	    key: 'onClick',
	    value: function onClick() {
	      this.props.onClick(this.props.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          value = _props.value,
	          active = _props.active;
	
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: _HourTimeSelect2.default.item + ' ' + (active ? _HourTimeSelect2.default.itemSelected : ''),
	          onClick: this.onClick
	        },
	        value
	      );
	    }
	  }]);
	
	  return HourTimeSelectItem;
	}(_react.Component);
	
	var HourTimeSelect = function (_Component2) {
	  _inherits(HourTimeSelect, _Component2);
	
	  function HourTimeSelect(props) {
	    _classCallCheck(this, HourTimeSelect);
	
	    var _this2 = _possibleConstructorReturn(this, (HourTimeSelect.__proto__ || Object.getPrototypeOf(HourTimeSelect)).call(this, props));
	
	    _this2.onItemClick = _this2.onItemClick.bind(_this2);
	    return _this2;
	  }
	
	  _createClass(HourTimeSelect, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.itemsContainer.focus();
	    }
	  }, {
	    key: 'onItemClick',
	    value: function onItemClick(value) {
	      this.props.onSelect(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props$type = this.props.type,
	          type = _props$type === undefined ? 'hour' : _props$type;
	
	      var title = 'Time: ' + (type[0].toUpperCase() + type.slice(1));
	      var maxItems = void 0;
	      var columnLimit = 6;
	      var rowCount = 0;
	      var items = [];
	      var maxRowCount = void 0;
	
	      if (type === 'hour') {
	        maxItems = 24;
	      } else if (type === 'minute') {
	        maxItems = 60;
	      }
	
	      maxRowCount = maxItems / columnLimit;
	
	      while (rowCount < maxRowCount) {
	        var value = rowCount;
	        var cols = [];
	
	        for (var i = 0; i < columnLimit; i++) {
	          cols.push(value + maxRowCount * i);
	        }
	
	        items = items.concat(cols.map(function (colValue) {
	          var valueItem = String(colValue).length === 1 ? '0' + colValue : String(colValue);
	
	          return _react2.default.createElement(HourTimeSelectItem, {
	            key: colValue,
	            active: _this3.props.value === valueItem,
	            value: valueItem,
	            onClick: _this3.onItemClick
	          });
	        }));
	
	        rowCount++;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: _HourTimeSelect2.default.container,
	          style: {
	            width: '150px'
	          }
	        },
	        _react2.default.createElement(
	          'div',
	          {
	            className: _HourTimeSelect2.default.title
	          },
	          title
	        ),
	        _react2.default.createElement(
	          'div',
	          {
	            className: _HourTimeSelect2.default.list,
	            ref: function ref(itemsContainer) {
	              _this3.itemsContainer = itemsContainer;
	            },
	            tabIndex: '-1'
	          },
	          items
	        )
	      );
	    }
	  }]);
	
	  return HourTimeSelect;
	}(_react.Component);
	
	exports.default = HourTimeSelect;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./HourTimeSelect.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js?outputStyle=expanded&sourceMap!./HourTimeSelect.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, ".container___K1u5_ {\n  background: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n}\n\n.title___fzfhv {\n  background-color: #ccc;\n  font-size: 0.85rem;\n  text-align: center;\n  padding: 2px 0px;\n}\n\n.list___V0IoC {\n  font-size: 0.75rem;\n  max-height: 66px;\n  overflow-y: scroll;\n}\n\n.item___QmESg {\n  cursor: pointer;\n  display: inline-block;\n  padding: 0.35rem;\n  text-align: center;\n  width: 21.60px;\n}\n\n.item___QmESg:hover, .itemSelected___1GR6Z {\n  background-color: #3B99FC;\n  color: #fff;\n}\n", "", {"version":3,"sources":["/./studio/studio/HourTimeSelect.scss"],"names":[],"mappings":"AACA;EACE,iBAAgB;EAChB,qCAAiC;EACjC,2CAAuC;EACvC,mBAAkB;CACnB;;AAED;EACE,uBAAsB;EACtB,mBAAkB;EAClB,mBAAkB;EAClB,iBAAgB;CACjB;;AAED;EACE,mBAAkB;EAClB,iBAAgB;EAChB,mBAAkB;CACnB;;AAED;EACE,gBAAe;EACf,sBAAqB;EACrB,iBAAgB;EAChB,mBAAkB;EAClB,eAAc;CAMf;;AAXD;EAQI,0BAAyB;EACzB,YAAW;CACZ","file":"HourTimeSelect.scss","sourcesContent":["\n.container {\n  background: #fff;\n  border: 1px solid rgba(0,0,0,0.2);\n  box-shadow: 0 3px 12px rgba(0,0,0,0.15);\n  border-radius: 4px;\n}\n\n.title {\n  background-color: #ccc;\n  font-size: 0.85rem;\n  text-align: center;\n  padding: 2px 0px;\n}\n\n.list {\n  font-size: 0.75rem;\n  max-height: 66px;\n  overflow-y: scroll;\n}\n\n.item {\n  cursor: pointer;\n  display: inline-block;\n  padding: 0.35rem;\n  text-align: center;\n  width: 21.60px;\n\n  &:hover, &Selected {\n    background-color: #3B99FC;\n    color: #fff;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"container": "container___K1u5_",
		"title": "title___fzfhv",
		"list": "list___V0IoC",
		"item": "item___QmESg",
		"itemSelected": "itemSelected___1GR6Z"
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ScheduleEditor = __webpack_require__(1);
	
	var _ScheduleEditor2 = _interopRequireDefault(_ScheduleEditor);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DownloadButton = function (_Component) {
	  _inherits(DownloadButton, _Component);
	
	  function DownloadButton() {
	    _classCallCheck(this, DownloadButton);
	
	    return _possibleConstructorReturn(this, (DownloadButton.__proto__ || Object.getPrototypeOf(DownloadButton)).apply(this, arguments));
	  }
	
	  _createClass(DownloadButton, [{
	    key: 'download',
	    value: function download() {
	      if (_ScheduleEditor2.default.ActiveReport) {
	        window.open(_jsreportStudio2.default.rootUrl + '/reports/' + _ScheduleEditor2.default.ActiveReport._id + '/attachment', '_self');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      if (!this.props.tab || !this.props.tab.entity || this.props.tab.entity.__entitySet !== 'schedules' || !_ScheduleEditor2.default.ActiveReport) {
	        return _react2.default.createElement('div', null);
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'toolbar-button', onClick: function onClick() {
	            return _this2.download();
	          } },
	        _react2.default.createElement('i', { className: 'fa fa-download' }),
	        'Download'
	      );
	    }
	  }]);
	
	  return DownloadButton;
	}(_react.Component);
	
	exports.default = DownloadButton;
	
	
	DownloadButton.propTypes = {
	  tab: _react2.default.PropTypes.object,
	  onUpdate: _react2.default.PropTypes.func.isRequired
	};

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ScriptEditor = __webpack_require__(1);
	
	var _ScriptEditor2 = _interopRequireDefault(_ScriptEditor);
	
	var _TemplateScriptProperties = __webpack_require__(4);
	
	var _TemplateScriptProperties2 = _interopRequireDefault(_TemplateScriptProperties);
	
	var _ScriptProperties = __webpack_require__(5);
	
	var _ScriptProperties2 = _interopRequireDefault(_ScriptProperties);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addEntitySet({ name: 'scripts',
	  faIcon: 'fa-cog',
	  visibleName: 'script',
	  helpUrl: 'http://jsreport.net/learn/scripts',
	  referenceAttributes: ['isGlobal'],
	  entityTreePosition: 800
	});
	_jsreportStudio2.default.addPropertiesComponent(_TemplateScriptProperties2.default.title, _TemplateScriptProperties2.default, function (entity) {
	  return entity.__entitySet === 'templates';
	});
	_jsreportStudio2.default.addPropertiesComponent(_ScriptProperties2.default.title, _ScriptProperties2.default, function (entity) {
	  return entity.__entitySet === 'scripts';
	});
	
	_jsreportStudio2.default.addEditorComponent('scripts', _ScriptEditor2.default, function (reformatter, entity) {
	  return { content: reformatter(entity.content, 'js') };
	});
	
	_jsreportStudio2.default.addApiSpec({
	  template: {
	    scripts: [{
	      shortid: '...',
	      content: 'function beforeRender...'
	    }]
	  }
	});
	
	_jsreportStudio2.default.previewListeners.push(function (request, entities) {
	  if (!request.template.scripts) {
	    return;
	  }
	
	  request.template.scripts = request.template.scripts.map(function (s) {
	    var script = _jsreportStudio2.default.getEntityByShortid(s.shortid, false);
	
	    if (!script) {
	      return s;
	    }
	
	    return script;
	  }).filter(function (s) {
	    return !s.__isNew || s.content;
	  });
	});
	
	_jsreportStudio2.default.entityTreeIconResolvers.push(function (entity) {
	  return entity.__entitySet === 'scripts' && entity.isGlobal ? 'fa-cogs' : null;
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScriptEditor = function (_Component) {
	  _inherits(ScriptEditor, _Component);
	
	  function ScriptEditor() {
	    _classCallCheck(this, ScriptEditor);
	
	    return _possibleConstructorReturn(this, (ScriptEditor.__proto__ || Object.getPrototypeOf(ScriptEditor)).apply(this, arguments));
	  }
	
	  _createClass(ScriptEditor, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          entity = _props.entity,
	          _onUpdate = _props.onUpdate;
	
	
	      return _react2.default.createElement(_jsreportStudio.TextEditor, {
	        name: entity._id,
	        mode: 'javascript',
	        value: entity.content,
	        onUpdate: function onUpdate(v) {
	          return _onUpdate(Object.assign({}, entity, { content: v }));
	        }
	      });
	    }
	  }]);
	
	  return ScriptEditor;
	}(_react.Component);
	
	exports.default = ScriptEditor;
	
	
	ScriptEditor.propTypes = {
	  entity: _react2.default.PropTypes.object.isRequired,
	  onUpdate: _react2.default.PropTypes.func.isRequired
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(3);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	debugger;
	var MultiSelect = _jsreportStudio2.default.MultiSelect;
	
	var TemplateScriptProperties = function (_Component) {
	  _inherits(TemplateScriptProperties, _Component);
	
	  function TemplateScriptProperties() {
	    _classCallCheck(this, TemplateScriptProperties);
	
	    return _possibleConstructorReturn(this, (TemplateScriptProperties.__proto__ || Object.getPrototypeOf(TemplateScriptProperties)).apply(this, arguments));
	  }
	
	  _createClass(TemplateScriptProperties, [{
	    key: 'selectScripts',
	    value: function selectScripts(entities) {
	      return Object.keys(entities).filter(function (k) {
	        return entities[k].__entitySet === 'scripts' && !entities[k].isGlobal;
	      }).map(function (k) {
	        return entities[k];
	      });
	    }
	  }, {
	    key: 'renderOrder',
	    value: function renderOrder() {
	      var scripts = TemplateScriptProperties.getSelectedScripts(this.props.entity, this.props.entities);
	
	      return _react2.default.createElement(
	        'span',
	        null,
	        scripts.map(function (s) {
	          return _react2.default.createElement(
	            'span',
	            { key: s.shortid },
	            s.name + ' '
	          );
	        })
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.removeInvalidScriptReferences();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.removeInvalidScriptReferences();
	    }
	  }, {
	    key: 'removeInvalidScriptReferences',
	    value: function removeInvalidScriptReferences() {
	      var _props = this.props,
	          entity = _props.entity,
	          entities = _props.entities,
	          onChange = _props.onChange;
	
	
	      if (!entity.scripts) {
	        return;
	      }
	
	      var updatedScripts = entity.scripts.filter(function (s) {
	        return Object.keys(entities).filter(function (k) {
	          return entities[k].__entitySet === 'scripts' && entities[k].shortid === s.shortid;
	        }).length;
	      });
	
	      if (updatedScripts.length !== entity.scripts.length) {
	        onChange({ _id: entity._id, scripts: updatedScripts });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          entity = _props2.entity,
	          entities = _props2.entities,
	          _onChange = _props2.onChange;
	
	      var scripts = this.selectScripts(entities);
	
	      var selectValues = function selectValues(selectData, ascripts) {
	        var selectedValue = selectData.value,
	            options = selectData.options;
	
	        var scripts = Object.assign([], ascripts);
	
	        for (var i = 0; i < options.length; i++) {
	          var optionsIsSelected = selectedValue.indexOf(options[i].value) !== -1;
	
	          if (optionsIsSelected) {
	            if (!scripts.filter(function (s) {
	              return s.shortid === options[i].value;
	            }).length) {
	              scripts.push({ shortid: options[i].value });
	            }
	          } else {
	            if (scripts.filter(function (s) {
	              return s.shortid === options[i].value;
	            }).length) {
	              scripts = scripts.filter(function (s) {
	                return s.shortid !== options[i].value;
	              });
	            }
	          }
	        }
	
	        return scripts;
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(MultiSelect, {
	            title: 'Use the checkboxes to select/deselect multiple options. The order of selected scripts is reflected on the server',
	            size: 7,
	            value: entity.scripts ? entity.scripts.map(function (s) {
	              return s.shortid;
	            }) : [],
	            onChange: function onChange(selectData) {
	              return _onChange({ _id: entity._id, scripts: selectValues(selectData, entity.scripts) });
	            },
	            options: scripts.map(function (s) {
	              return { key: s.shortid, name: s.name, value: s.shortid };
	            })
	          }),
	          entity.scripts && entity.scripts.length ? _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'span',
	              null,
	              'Run order:'
	            ),
	            this.renderOrder()
	          ) : _react2.default.createElement('div', null)
	        )
	      );
	    }
	  }], [{
	    key: 'getSelectedScripts',
	    value: function getSelectedScripts(entity, entities) {
	      var getName = function getName(s) {
	        var foundScripts = Object.keys(entities).map(function (k) {
	          return entities[k];
	        }).filter(function (sc) {
	          return sc.shortid === s.shortid;
	        });
	
	        return foundScripts.length ? foundScripts[0].name : '';
	      };
	
	      return (entity.scripts || []).map(function (s) {
	        return _extends({}, s, {
	          name: getName(s)
	        });
	      });
	    }
	  }, {
	    key: 'title',
	    value: function title(entity, entities) {
	      if (!entity.scripts || !entity.scripts.length) {
	        return 'scripts';
	      }
	
	      return 'scripts: ' + TemplateScriptProperties.getSelectedScripts(entity, entities).map(function (s) {
	        return s.name;
	      }).join(', ');
	    }
	  }]);
	
	  return TemplateScriptProperties;
	}(_react.Component);
	
	exports.default = TemplateScriptProperties;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScriptProperties = function (_Component) {
	  _inherits(ScriptProperties, _Component);
	
	  function ScriptProperties() {
	    _classCallCheck(this, ScriptProperties);
	
	    return _possibleConstructorReturn(this, (ScriptProperties.__proto__ || Object.getPrototypeOf(ScriptProperties)).apply(this, arguments));
	  }
	
	  _createClass(ScriptProperties, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          entity = _props.entity,
	          _onChange = _props.onChange;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'run every time'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: entity.isGlobal === true,
	            onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, isGlobal: v.target.checked });
	            } })
	        )
	      );
	    }
	  }], [{
	    key: 'title',
	    value: function title(entity, entities) {
	      return 'scripts (global: ' + (entity.isGlobal === true) + ')';
	    }
	  }]);
	
	  return ScriptProperties;
	}(_react.Component);
	
	exports.default = ScriptProperties;

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _AssetEditor = __webpack_require__(1);
	
	var _AssetEditor2 = _interopRequireDefault(_AssetEditor);
	
	var _AssetUploadButton = __webpack_require__(3);
	
	var _AssetUploadButton2 = _interopRequireDefault(_AssetUploadButton);
	
	var _NewAssetModal = __webpack_require__(11);
	
	var _NewAssetModal2 = _interopRequireDefault(_NewAssetModal);
	
	var _AssetProperties = __webpack_require__(12);
	
	var _AssetProperties2 = _interopRequireDefault(_AssetProperties);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addEntitySet({
	  name: 'assets',
	  faIcon: 'fa-file',
	  visibleName: 'asset',
	  onNew: function onNew() {
	    return _jsreportStudio2.default.openModal(_NewAssetModal2.default);
	  },
	  referenceAttributes: ['isSharedHelper'],
	  entityTreePosition: 700
	});
	
	_jsreportStudio2.default.addEditorComponent('assets', _AssetEditor2.default);
	_jsreportStudio2.default.addToolbarComponent(_AssetUploadButton2.default);
	_jsreportStudio2.default.addPropertiesComponent(_AssetProperties2.default.title, _AssetProperties2.default, function (entity) {
	  return entity.__entitySet === 'assets';
	});
	
	_jsreportStudio2.default.entityTreeIconResolvers.push(function (entity) {
	  if (entity.__entitySet !== 'assets') {
	    return;
	  }
	
	  var parts = entity.name.split('.');
	
	  if (parts.length === 1) {
	    return;
	  }
	
	  var extension = parts[parts.length - 1];
	
	  switch (extension) {
	    case 'html':
	      return 'fa-html5';
	    case 'jpg':
	    case 'jpeg':
	    case 'png':
	    case 'gif':
	    case 'svg':
	      return 'fa-camera';
	    case 'js':
	      return entity.isSharedHelper ? 'fa-cogs' : 'fa-cog';
	    case 'css':
	      return 'fa-css3';
	    default:
	      return 'fa-file-o ';
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AssetUploadButton = __webpack_require__(3);
	
	var _AssetUploadButton2 = _interopRequireDefault(_AssetUploadButton);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	var _superagent = __webpack_require__(5);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _bluebird = __webpack_require__(6);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _reactCopyToClipboard = __webpack_require__(7);
	
	var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Studio.api currently always open dialogs on failures and that is what we don't want, so arbitrary implementaiton here
	var getTextFromApi = function getTextFromApi(path) {
	  return new _bluebird2.default(function (resolve, reject) {
	    var request = _superagent2.default.get(_jsreportStudio2.default.resolveUrl(path));
	    request.end(function (err) {
	      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	          text = _ref.text;
	
	      return err ? reject(new Error(text || err.toString())) : resolve(text);
	    });
	  });
	};
	
	var FileEditor = function (_Component) {
	  _inherits(FileEditor, _Component);
	
	  function FileEditor() {
	    _classCallCheck(this, FileEditor);
	
	    var _this = _possibleConstructorReturn(this, (FileEditor.__proto__ || Object.getPrototypeOf(FileEditor)).call(this));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(FileEditor, [{
	    key: 'componentDidMount',
	    value: function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var entity, content, ab, str, fixedStr;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                entity = this.props.entity;
	                content = entity.content;
	
	                if (!entity.link) {
	                  _context.next = 18;
	                  break;
	                }
	
	                _context.prev = 3;
	                _context.next = 6;
	                return _jsreportStudio2.default.saveEntity(entity._id);
	
	              case 6:
	                _context.next = 8;
	                return _jsreportStudio2.default.api.get('assets/content/' + entity.name, { responseType: 'arraybuffer' });
	
	              case 8:
	                ab = _context.sent;
	                str = String.fromCharCode.apply(null, new Uint8Array(ab));
	                fixedStr = decodeURIComponent(escape(str));
	
	                content = btoa(unescape(encodeURIComponent(fixedStr)));
	                _context.next = 18;
	                break;
	
	              case 14:
	                _context.prev = 14;
	                _context.t0 = _context['catch'](3);
	
	                this.setState({ loadError: _context.t0 });
	                throw _context.t0;
	
	              case 18:
	
	                this.setState({ content: content });
	
	              case 19:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[3, 14]]);
	      }));
	
	      function componentDidMount() {
	        return _ref2.apply(this, arguments);
	      }
	
	      return componentDidMount;
	    }()
	  }, {
	    key: 'componentDidUpdate',
	    value: function () {
	      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(prevProps) {
	        var entity, link;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                entity = this.props.entity;
	
	                if (!(entity.link && (!this.state.link || prevProps.entity.link !== entity.link) && !this.state.loadFailed)) {
	                  _context2.next = 12;
	                  break;
	                }
	
	                _context2.prev = 2;
	                _context2.next = 5;
	                return getTextFromApi('assets/link/' + entity.link);
	
	              case 5:
	                link = _context2.sent;
	
	                this.setState({ link: link });
	                _context2.next = 12;
	                break;
	
	              case 9:
	                _context2.prev = 9;
	                _context2.t0 = _context2['catch'](2);
	
	                this.setState({ link: _context2.t0.message });
	
	              case 12:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this, [[2, 9]]);
	      }));
	
	      function componentDidUpdate(_x2) {
	        return _ref3.apply(this, arguments);
	      }
	
	      return componentDidUpdate;
	    }()
	  }, {
	    key: 'isImage',
	    value: function isImage(entity) {
	      return entity.name.match(/\.(jpeg|jpg|gif|png|svg)$/) != null;
	    }
	  }, {
	    key: 'isFont',
	    value: function isFont(entity) {
	      return entity.name.match(/\.(otf|woff|ttf|eot|woff2)$/) != null;
	    }
	  }, {
	    key: 'getFormat',
	    value: function getFormat(extension) {
	      switch (extension) {
	        case 'ttf':
	          return 'truetype';
	        case 'woff2':
	          return 'woff2';
	        case 'eot':
	          return 'embedded-opentype';
	        default:
	          return 'woff';
	      }
	    }
	  }, {
	    key: 'getEmbeddingCode',
	    value: function getEmbeddingCode(entity) {
	      var parts = entity.name.split('.');
	      var extension = parts[parts.length - 1];
	
	      if (this.isImage(entity)) {
	        return '<img src="{#asset ' + entity.name + ' @encoding=dataURI}" />';
	      }
	
	      if (this.isFont(entity)) {
	        return '@font-face {\n  font-family: \'' + parts[0] + '\';\n  src: url({#asset ' + entity.name + ' @encoding=dataURI});\n  format(\'' + this.getFormat(extension) + '\');\n}';
	      }
	
	      return '{#asset ' + entity.name + ' @encoding=utf8}';
	    }
	  }, {
	    key: 'renderEditor',
	    value: function renderEditor(entity) {
	      var _this2 = this;
	
	      var parts = entity.name.split('.');
	      var extension = parts[parts.length - 1];
	
	      if (this.isImage(entity)) {
	        return _react2.default.createElement(
	          'div',
	          { style: { overflow: 'auto' } },
	          _react2.default.createElement('img', { src: _jsreportStudio2.default.resolveUrl('assets/content/' + entity.name + '?v=' + new Date().getTime()),
	            style: { display: 'block', margin: '3rem auto' } })
	        );
	      }
	
	      if (this.isFont(entity)) {
	        var newStyle = document.createElement('style');
	        newStyle.appendChild(document.createTextNode('@font-face {\n         font-family: \'' + parts[0] + '\';\n         src: url(\'' + _jsreportStudio2.default.resolveUrl('/assets/content/' + entity.name) + '\');\n         format(\'' + (extension === 'ttf' ? 'truetype' : 'woff') + '\');\n        }'));
	
	        document.head.appendChild(newStyle);
	
	        return _react2.default.createElement(
	          'div',
	          { style: { overflow: 'auto', fontFamily: parts[0], padding: '2rem' } },
	          _react2.default.createElement(
	            'h1',
	            null,
	            ' Hello world font ',
	            entity.name
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
	          )
	        );
	      }
	
	      var mode = parts[parts.length - 1];
	      if (extension === 'js') {
	        mode = 'javascript';
	      }
	      if (extension === 'html') {
	        mode = 'handlebars';
	      }
	
	      var content = (entity.content || entity.forceUpdate ? entity.content : this.state.content) || '';
	
	      return _react2.default.createElement(_jsreportStudio.TextEditor, {
	        name: entity._id,
	        mode: mode,
	        value: decodeURIComponent(escape(atob(content))),
	        onUpdate: function onUpdate(v) {
	          return _this2.props.onUpdate(Object.assign({}, entity, { content: btoa(unescape(encodeURIComponent(v))), forceUpdate: true }));
	        } });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var entity = this.props.entity;
	      var link = this.state.link;
	
	      var downloadUrl = _jsreportStudio2.default.resolveUrl('assets/content/' + entity.name + '?download=true');
	
	      var toolbarButtonStyle = {
	        color: '#007ACC',
	        fontSize: '1.2rem'
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'block' },
	        _react2.default.createElement(
	          'div',
	          { style: { padding: '0.6rem 0 0.4rem 0', backgroundColor: '#F6F6F6' } },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              _reactCopyToClipboard2.default,
	              { text: this.getEmbeddingCode(entity) },
	              _react2.default.createElement(
	                'a',
	                { className: 'button', style: toolbarButtonStyle, title: 'Coppy the embedding code to clipboard' },
	                _react2.default.createElement('i', { className: 'fa fa-clipboard' })
	              )
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'button', style: toolbarButtonStyle, target: '_blank', href: downloadUrl, title: 'Download asset' },
	              _react2.default.createElement('i', { className: 'fa fa-download' })
	            ),
	            entity.link ? _react2.default.createElement(
	              'span',
	              { style: { margin: '0.6rem' } },
	              link
	            ) : _react2.default.createElement(
	              'a',
	              { className: 'button', style: toolbarButtonStyle, title: 'Upload asset',
	                onClick: function onClick() {
	                  return _AssetUploadButton2.default.OpenUpload();
	                } },
	              _react2.default.createElement('i', {
	                className: 'fa fa-upload' })
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'button', style: _extends({}, toolbarButtonStyle, { marginRight: 'auto' }), target: '_blank', title: 'Help',
	                href: 'http://jsreport.net/learn/assets' },
	              _react2.default.createElement('i', { className: 'fa fa-question' })
	            )
	          )
	        ),
	        this.renderEditor(entity)
	      );
	    }
	  }]);
	
	  return FileEditor;
	}(_react.Component);
	
	exports.default = FileEditor;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _fileUploadButton = void 0;
	
	var AssetUploadButton = function (_Component) {
	  _inherits(AssetUploadButton, _Component);
	
	  function AssetUploadButton() {
	    _classCallCheck(this, AssetUploadButton);
	
	    return _possibleConstructorReturn(this, (AssetUploadButton.__proto__ || Object.getPrototypeOf(AssetUploadButton)).apply(this, arguments));
	  }
	
	  _createClass(AssetUploadButton, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _fileUploadButton = this;
	    }
	  }, {
	    key: 'upload',
	    value: function upload(e) {
	      var _this2 = this;
	
	      if (!e.target.files.length) {
	        return;
	      }
	
	      var file = e.target.files[0];
	      var reader = new FileReader();
	
	      reader.onloadend = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var response;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _this2.refs.file.value = '';
	
	                if (!(_this2.type === 'new')) {
	                  _context.next = 11;
	                  break;
	                }
	
	                if (!_jsreportStudio2.default.workspaces) {
	                  _context.next = 5;
	                  break;
	                }
	
	                _context.next = 5;
	                return _jsreportStudio2.default.workspaces.save();
	
	              case 5:
	                _context.next = 7;
	                return _jsreportStudio2.default.api.post('/odata/assets', {
	                  data: {
	                    content: reader.result.substring(reader.result.indexOf('base64,') + 'base64,'.length),
	                    name: file.name
	                  }
	                });
	
	              case 7:
	                response = _context.sent;
	
	                response.__entitySet = 'assets';
	
	                _jsreportStudio2.default.addExistingEntity(response);
	                _jsreportStudio2.default.openTab(Object.assign({}, response));
	
	              case 11:
	                if (!(_this2.type === 'edit')) {
	                  _context.next = 21;
	                  break;
	                }
	
	                if (!_jsreportStudio2.default.workspaces) {
	                  _context.next = 18;
	                  break;
	                }
	
	                _jsreportStudio2.default.updateEntity({
	                  name: _this2.props.tab.entity.name,
	                  content: reader.result.substring(reader.result.indexOf('base64,') + 'base64,'.length)
	                });
	
	                _context.next = 16;
	                return _jsreportStudio2.default.workspaces.save();
	
	              case 16:
	                _context.next = 21;
	                break;
	
	              case 18:
	                _context.next = 20;
	                return _jsreportStudio2.default.api.patch('/odata/assets(' + _this2.props.tab.entity._id + ')', {
	                  data: {
	                    content: reader.result.substring(reader.result.indexOf('base64,') + 'base64,'.length),
	                    link: null
	                  }
	                });
	
	              case 20:
	                _jsreportStudio2.default.loadEntity(_this2.props.tab.entity._id, true);
	
	              case 21:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this2);
	      }));
	
	      reader.onerror = function () {
	        alert('There was an error reading the file!');
	      };
	
	      reader.readAsDataURL(file);
	    }
	  }, {
	    key: 'openFileDialog',
	    value: function openFileDialog(type) {
	      this.type = type;
	
	      this.refs.file.dispatchEvent(new MouseEvent('click', {
	        'view': window,
	        'bubbles': false,
	        'cancelable': true
	      }));
	    }
	  }, {
	    key: 'renderUpload',
	    value: function renderUpload() {
	      var _this3 = this;
	
	      return _react2.default.createElement('input', { type: 'file', key: 'file', ref: 'file', style: { display: 'none' }, onChange: function onChange(e) {
	          return _this3.upload(e);
	        } });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderUpload(true);
	    }
	  }], [{
	    key: 'OpenUpload',
	
	    // we need to have global action in main_dev which is triggered when users clicks on + on images
	    // this triggers invisible button in the toolbar
	    value: function OpenUpload() {
	      _fileUploadButton.openFileDialog('edit');
	    }
	  }, {
	    key: 'OpenUploadNew',
	    value: function OpenUploadNew() {
	      _fileUploadButton.openFileDialog('new');
	    }
	  }]);
	
	  return AssetUploadButton;
	}(_react.Component);
	
	exports.default = AssetUploadButton;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['superagent'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['bluebird'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _require = __webpack_require__(8),
	    CopyToClipboard = _require.CopyToClipboard;
	
	module.exports = CopyToClipboard;
	//# sourceMappingURL=index.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CopyToClipboard = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _copyToClipboard = __webpack_require__(9);
	
	var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var CopyToClipboard = _react2.default.createClass({
	  displayName: 'CopyToClipboard',
	
	  propTypes: {
	    text: _react2.default.PropTypes.string.isRequired,
	    children: _react2.default.PropTypes.element.isRequired,
	    onCopy: _react2.default.PropTypes.func,
	    options: _react2.default.PropTypes.shape({
	      debug: _react2.default.PropTypes.bool,
	      message: _react2.default.PropTypes.string
	    })
	  },
	
	  onClick: function onClick(event) {
	    var _props = this.props,
	        text = _props.text,
	        onCopy = _props.onCopy,
	        children = _props.children,
	        options = _props.options;
	
	
	    var elem = _react2.default.Children.only(children);
	
	    var result = (0, _copyToClipboard2.default)(text, options);
	
	    if (onCopy) {
	      onCopy(text, result);
	    }
	
	    // Bypass onClick if it was present
	    if (elem && elem.props && typeof elem.props.onClick === 'function') {
	      elem.props.onClick(event);
	    }
	  },
	  render: function render() {
	    var _props2 = this.props,
	        _text = _props2.text,
	        _onCopy = _props2.onCopy,
	        _options = _props2.options,
	        children = _props2.children,
	        props = _objectWithoutProperties(_props2, ['text', 'onCopy', 'options', 'children']);
	
	    var elem = _react2.default.Children.only(children);
	
	    return _react2.default.cloneElement(elem, _extends({}, props, { onClick: this.onClick }));
	  }
	});
	exports.CopyToClipboard = CopyToClipboard;
	//# sourceMappingURL=Component.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var deselectCurrent = __webpack_require__(10);
	
	var defaultMessage = 'Copy to clipboard: #{key}, Enter';
	
	function format(message) {
	  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
	  return message.replace(/#{\s*key\s*}/g, copyKey);
	}
	
	function copy(text, options) {
	  var debug, message, reselectPrevious, range, selection, mark, success = false;
	  if (!options) { options = {}; }
	  debug = options.debug || false;
	  try {
	    reselectPrevious = deselectCurrent();
	
	    range = document.createRange();
	    selection = document.getSelection();
	
	    mark = document.createElement('span');
	    mark.textContent = text;
	    // reset user styles for span element
	    mark.style.all = 'unset';
	    // prevents scrolling to the end of the page
	    mark.style.position = 'fixed';
	    mark.style.top = 0;
	    mark.style.clip = 'rect(0, 0, 0, 0)';
	    // used to preserve spaces and line breaks
	    mark.style.whiteSpace = 'pre';
	    // do not inherit user-select (it may be `none`)
	    mark.style.webkitUserSelect = 'text';
	    mark.style.MozUserSelect = 'text';
	    mark.style.msUserSelect = 'text';
	    mark.style.userSelect = 'text';
	
	    document.body.appendChild(mark);
	
	    range.selectNode(mark);
	    selection.addRange(range);
	
	    var successful = document.execCommand('copy');
	    if (!successful) {
	      throw new Error('copy command was unsuccessful');
	    }
	    success = true;
	  } catch (err) {
	    debug && console.error('unable to copy using execCommand: ', err);
	    debug && console.warn('trying IE specific stuff');
	    try {
	      window.clipboardData.setData('text', text);
	      success = true;
	    } catch (err) {
	      debug && console.error('unable to copy using clipboardData: ', err);
	      debug && console.error('falling back to prompt');
	      message = format('message' in options ? options.message : defaultMessage);
	      window.prompt(message, text);
	    }
	  } finally {
	    if (selection) {
	      if (typeof selection.removeRange == 'function') {
	        selection.removeRange(range);
	      } else {
	        selection.removeAllRanges();
	      }
	    }
	
	    if (mark) {
	      document.body.removeChild(mark);
	    }
	    reselectPrevious();
	  }
	
	  return success;
	}
	
	module.exports = copy;


/***/ },
/* 10 */
/***/ function(module, exports) {

	
	module.exports = function () {
	  var selection = document.getSelection();
	  if (!selection.rangeCount) {
	    return function () {};
	  }
	  var active = document.activeElement;
	
	  var ranges = [];
	  for (var i = 0; i < selection.rangeCount; i++) {
	    ranges.push(selection.getRangeAt(i));
	  }
	
	  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
	    case 'INPUT':
	    case 'TEXTAREA':
	      active.blur();
	      break;
	
	    default:
	      active = null;
	      break;
	  }
	
	  selection.removeAllRanges();
	  return function () {
	    selection.type === 'Caret' &&
	    selection.removeAllRanges();
	
	    if (!selection.rangeCount) {
	      ranges.forEach(function(range) {
	        selection.addRange(range);
	      });
	    }
	
	    active &&
	    active.focus();
	  };
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _AssetUploadButton = __webpack_require__(3);
	
	var _AssetUploadButton2 = _interopRequireDefault(_AssetUploadButton);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NewAssetModal = function (_Component) {
	  _inherits(NewAssetModal, _Component);
	
	  function NewAssetModal() {
	    _classCallCheck(this, NewAssetModal);
	
	    var _this = _possibleConstructorReturn(this, (NewAssetModal.__proto__ || Object.getPrototypeOf(NewAssetModal)).call(this));
	
	    _this.state = { isLink: false };
	    return _this;
	  }
	
	  _createClass(NewAssetModal, [{
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      if (e.key === 'Enter') {
	        this.createAsset();
	      }
	    }
	
	    // the modal component for some reason after open focuses the panel itself
	
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      setTimeout(function () {
	        return _this2.refs.name.focus();
	      }, 0);
	    }
	  }, {
	    key: 'createAsset',
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
	        var entity, response;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                entity = {};
	
	                if (!(!this.state.isLink && (!this.refs.name.value || this.refs.name.value.indexOf('.')) < 0)) {
	                  _context.next = 3;
	                  break;
	                }
	
	                return _context.abrupt('return', this.setState({ error: 'name should include file extension, for example foo.js' }));
	
	              case 3:
	
	                if (this.state.isLink) {
	                  entity.link = this.refs.link.value;
	                } else {
	                  entity.name = this.refs.name.value;
	                }
	
	                _context.prev = 4;
	
	                if (!_jsreportStudio2.default.workspaces) {
	                  _context.next = 8;
	                  break;
	                }
	
	                _context.next = 8;
	                return _jsreportStudio2.default.workspaces.save();
	
	              case 8:
	                _context.next = 10;
	                return _jsreportStudio2.default.api.post('/odata/assets', {
	                  data: entity
	                });
	
	              case 10:
	                response = _context.sent;
	
	                response.__entitySet = 'assets';
	
	                _jsreportStudio2.default.addExistingEntity(response);
	                _jsreportStudio2.default.openTab(response);
	                this.props.close();
	                _context.next = 20;
	                break;
	
	              case 17:
	                _context.prev = 17;
	                _context.t0 = _context['catch'](4);
	
	                this.setState({ error: _context.t0.message });
	
	              case 20:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[4, 17]]);
	      }));
	
	      function createAsset(_x) {
	        return _ref.apply(this, arguments);
	      }
	
	      return createAsset;
	    }()
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _state = this.state,
	          isLink = _state.isLink,
	          error = _state.error;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        isLink ? _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Relative or absolute path to existing file'
	          ),
	          _react2.default.createElement('input', { type: 'text', name: 'link', ref: 'link' })
	        ) : _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Name'
	          ),
	          _react2.default.createElement('input', { type: 'text', name: 'name', ref: 'name', placeholder: 'styles.css', onKeyPress: function onKeyPress(e) {
	              return _this3.handleKeyPress(e);
	            } })
	        ),
	        _jsreportStudio2.default.extensions.assets.options.allowAssetsLinkedToFiles !== false ? _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'link to existing file'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: isLink,
	            onChange: function onChange() {
	              return _this3.setState({ isLink: !isLink });
	            } })
	        ) : _react2.default.createElement('div', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'span',
	            {
	              style: { color: 'red', display: error ? 'block' : 'none' } },
	            error
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group', style: { opacity: 0.8 } },
	          _react2.default.createElement('hr', null),
	          _react2.default.createElement(
	            'span',
	            null,
	            'You can use assets to embed any kind of static content into report template.',
	            _react2.default.createElement('br', null),
	            'This can be for example css style, image, font, html or even javascript shared helpers. ',
	            _react2.default.createElement('br', null),
	            'See the ',
	            _react2.default.createElement(
	              'a',
	              {
	                target: '_blank', title: 'Help', href: 'http://jsreport.net/learn/assets' },
	              'documentation'
	            ),
	            ' for details.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'button-bar' },
	          _react2.default.createElement(
	            'button',
	            {
	              className: 'button confirmation',
	              onClick: function onClick() {
	                _this3.props.close();_AssetUploadButton2.default.OpenUploadNew();
	              } },
	            'Upload'
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                return _this3.createAsset();
	              }, className: 'button confirmation' },
	            'Ok'
	          )
	        )
	      );
	    }
	  }]);
	
	  return NewAssetModal;
	}(_react.Component);
	
	exports.default = NewAssetModal;
	
	
	NewAssetModal.propTypes = {
	  close: _react.PropTypes.func.isRequired
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AssetProperties = function (_Component) {
	  _inherits(AssetProperties, _Component);
	
	  function AssetProperties() {
	    _classCallCheck(this, AssetProperties);
	
	    return _possibleConstructorReturn(this, (AssetProperties.__proto__ || Object.getPrototypeOf(AssetProperties)).apply(this, arguments));
	  }
	
	  _createClass(AssetProperties, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          entity = _props.entity,
	          _onChange = _props.onChange;
	
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _jsreportStudio2.default.extensions.assets.options.allowAssetsLinkedToFiles !== false ? _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'link'
	          ),
	          _react2.default.createElement('input', { type: 'text', value: entity.link || '',
	            onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, link: v.target.value });
	            } })
	        ) : _react2.default.createElement('div', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'label',
	            null,
	            'shared helpers attached to each template'
	          ),
	          _react2.default.createElement('input', {
	            type: 'checkbox', checked: entity.isSharedHelper === true,
	            onChange: function onChange(v) {
	              return _onChange({ _id: entity._id, isSharedHelper: v.target.checked });
	            } })
	        )
	      );
	    }
	  }], [{
	    key: 'title',
	    value: function title(entity, entities) {
	      return 'asset ' + (entity.link ? '(link)' : '');
	    }
	  }]);
	
	  return AssetProperties;
	}(_react.Component);
	
	exports.default = AssetProperties;

/***/ }
/******/ ]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _XlsxEditor = __webpack_require__(1);
	
	var _XlsxEditor2 = _interopRequireDefault(_XlsxEditor);
	
	var _XlsxUploadButton = __webpack_require__(3);
	
	var _XlsxUploadButton2 = _interopRequireDefault(_XlsxUploadButton);
	
	var _XlsxTemplateProperties = __webpack_require__(6);
	
	var _XlsxTemplateProperties2 = _interopRequireDefault(_XlsxTemplateProperties);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_jsreportStudio2.default.addEntitySet({
	  name: 'xlsxTemplates',
	  faIcon: 'fa-file-excel-o',
	  visibleName: 'xlsx template',
	  onNew: _XlsxUploadButton2.default.OpenUpload,
	  entityTreePosition: 500
	});
	_jsreportStudio2.default.addEditorComponent('xlsxTemplates', _XlsxEditor2.default);
	_jsreportStudio2.default.addToolbarComponent(_XlsxUploadButton2.default);
	_jsreportStudio2.default.addPropertiesComponent(_XlsxTemplateProperties2.default.title, _XlsxTemplateProperties2.default, function (entity) {
	  return entity.__entitySet === 'templates' && entity.recipe === 'xlsx';
	});
	
	_jsreportStudio2.default.previewListeners.push(function (request, entities) {
	  if (request.template.recipe !== 'xlsx') {
	    return;
	  }
	
	  if (_jsreportStudio2.default.extensions.xlsx.options.previewInExcelOnline === false) {
	    return;
	  }
	
	  if (_jsreportStudio2.default.getSettingValueByKey('xlsx-preview-informed', false) === true) {
	    return;
	  }
	
	  _jsreportStudio2.default.setSetting('xlsx-preview-informed', true);
	
	  _jsreportStudio2.default.openModal(function () {
	    return React.createElement(
	      'div',
	      null,
	      'We need to upload your excel report to our publicly hosted server to be able to use Excel Online Service for previewing here in the studio. You can disable it in the configuration, see ',
	      React.createElement(
	        'a',
	        {
	          href: 'https://github.com/jsreport/jsreport-xlsx', target: '_blank' },
	        'https://github.com/jsreport/jsreport-xlsx'
	      ),
	      ' for details.'
	    );
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _XlsxUploadButton = __webpack_require__(3);
	
	var _XlsxUploadButton2 = _interopRequireDefault(_XlsxUploadButton);
	
	var _filesaver = __webpack_require__(5);
	
	var _filesaver2 = _interopRequireDefault(_filesaver);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var b64toBlob = function b64toBlob(b64Data) {
	  var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
	
	  var byteCharacters = atob(b64Data);
	  var byteArrays = [];
	
	  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
	    var slice = byteCharacters.slice(offset, offset + sliceSize);
	
	    var byteNumbers = new Array(slice.length);
	    for (var i = 0; i < slice.length; i++) {
	      byteNumbers[i] = slice.charCodeAt(i);
	    }
	
	    var byteArray = new Uint8Array(byteNumbers);
	
	    byteArrays.push(byteArray);
	  }
	
	  var blob = new Blob(byteArrays, { type: contentType });
	  return blob;
	};
	
	var ImageEditor = function (_Component) {
	  _inherits(ImageEditor, _Component);
	
	  function ImageEditor() {
	    _classCallCheck(this, ImageEditor);
	
	    return _possibleConstructorReturn(this, (ImageEditor.__proto__ || Object.getPrototypeOf(ImageEditor)).apply(this, arguments));
	  }
	
	  _createClass(ImageEditor, [{
	    key: 'download',
	    value: function download() {
	      var blob = b64toBlob(this.props.entity.contentRaw, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
	      _filesaver2.default.saveAs(blob, this.props.entity.name);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var entity = this.props.entity;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'custom-editor' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            _react2.default.createElement('i', { className: 'fa fa-file-excel-o' }),
	            ' ',
	            entity.name
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _this2.download();
	              } },
	            _react2.default.createElement('i', { className: 'fa fa-download' }),
	            ' Download xlsx template'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'button confirmation', onClick: function onClick() {
	                return _XlsxUploadButton2.default.OpenUpload(false);
	              } },
	            _react2.default.createElement('i', { className: 'fa fa-upload' }),
	            ' Upload (edit) xlsx template'
	          )
	        )
	      );
	    }
	  }]);
	
	  return ImageEditor;
	}(_react.Component);
	
	ImageEditor.propTypes = {
	  entity: _react2.default.PropTypes.object.isRequired
	};
	exports.default = ImageEditor;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['react'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jsreportStudio = __webpack_require__(4);
	
	var _jsreportStudio2 = _interopRequireDefault(_jsreportStudio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _xlsxTemplateUploadButton = void 0;
	
	var ImageUploadButton = function (_Component) {
	  _inherits(ImageUploadButton, _Component);
	
	  function ImageUploadButton() {
	    _classCallCheck(this, ImageUploadButton);
	
	    return _possibleConstructorReturn(this, (ImageUploadButton.__proto__ || Object.getPrototypeOf(ImageUploadButton)).apply(this, arguments));
	  }
	
	  _createClass(ImageUploadButton, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _xlsxTemplateUploadButton = this;
	    }
	  }, {
	    key: 'upload',
	    value: function upload(e) {
	      var _this2 = this;
	
	      if (!e.target.files.length) {
	        return;
	      }
	
	      var file = e.target.files[0];
	      var reader = new FileReader();
	
	      reader.onloadend = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
	        var response;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _this2.refs.file.value = '';
	
	                if (!_this2.forNew) {
	                  _context.next = 13;
	                  break;
	                }
	
	                if (!_jsreportStudio2.default.workspaces) {
	                  _context.next = 5;
	                  break;
	                }
	
	                _context.next = 5;
	                return _jsreportStudio2.default.workspaces.save();
	
	              case 5:
	                _context.next = 7;
	                return _jsreportStudio2.default.api.post('/odata/xlsxTemplates', {
	                  data: {
	                    contentRaw: reader.result.substring(reader.result.indexOf('base64,') + 'base64,'.length),
	                    name: file.name.replace(/.xlsx$/, '')
	                  }
	                });
	
	              case 7:
	                response = _context.sent;
	
	                response.__entitySet = 'xlsxTemplates';
	
	                _jsreportStudio2.default.addExistingEntity(response);
	                _jsreportStudio2.default.openTab(Object.assign({}, response));
	                _context.next = 22;
	                break;
	
	              case 13:
	                if (!_jsreportStudio2.default.workspaces) {
	                  _context.next = 19;
	                  break;
	                }
	
	                _jsreportStudio2.default.updateEntity({
	                  _id: _this2.props.tab.entity._id,
	                  contentRaw: reader.result.substring(reader.result.indexOf('base64,') + 'base64,'.length)
	                });
	
	                _context.next = 17;
	                return _jsreportStudio2.default.workspaces.save();
	
	              case 17:
	                _context.next = 22;
	                break;
	
	              case 19:
	                _context.next = 21;
	                return _jsreportStudio2.default.api.patch('/odata/xlsxTemplates(' + _this2.props.tab.entity._id + ')', {
	                  data: {
	                    contentRaw: reader.result.substring(reader.result.indexOf('base64,') + 'base64,'.length)
	                  }
	                });
	
	              case 21:
	                _jsreportStudio2.default.loadEntity(_this2.props.tab.entity._id, true);
	
	              case 22:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this2);
	      }));
	
	      reader.onerror = function () {
	        alert('There was an error reading the file!');
	      };
	
	      reader.readAsDataURL(file);
	    }
	  }, {
	    key: 'openFileDialog',
	    value: function openFileDialog(forNew) {
	      this.forNew = forNew;
	
	      this.refs.file.dispatchEvent(new MouseEvent('click', {
	        'view': window,
	        'bubbles': false,
	        'cancelable': true
	      }));
	    }
	  }, {
	    key: 'renderUpload',
	    value: function renderUpload() {
	      var _this3 = this;
	
	      return _react2.default.createElement('input', {
	        type: 'file', key: 'file', ref: 'file', style: { display: 'none' }, onChange: function onChange(e) {
	          return _this3.upload(e);
	        },
	        accept: '.xlsx' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderUpload(true);
	    }
	  }], [{
	    key: 'OpenUpload',
	
	
	    // we need to have global action in main_dev which is triggered when users clicks on + on images
	    // this triggers invisible button in the toolbar
	    value: function OpenUpload() {
	      var forNew = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	      _xlsxTemplateUploadButton.openFileDialog(forNew);
	    }
	  }]);
	
	  return ImageUploadButton;
	}(_react.Component);
	
	ImageUploadButton.propTypes = {
	  tab: _react2.default.PropTypes.object,
	  onUpdate: _react2.default.PropTypes.func.isRequired };
	exports.default = ImageUploadButton;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = Studio;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = Studio.libraries['filesaver.js-npm'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Properties = function (_Component) {
	  _inherits(Properties, _Component);
	
	  function Properties() {
	    _classCallCheck(this, Properties);
	
	    return _possibleConstructorReturn(this, (Properties.__proto__ || Object.getPrototypeOf(Properties)).apply(this, arguments));
	  }
	
	  _createClass(Properties, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.removeInvalidXlsxTemplateReferences();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.removeInvalidXlsxTemplateReferences();
	    }
	  }, {
	    key: 'removeInvalidXlsxTemplateReferences',
	    value: function removeInvalidXlsxTemplateReferences() {
	      var _props = this.props,
	          entity = _props.entity,
	          entities = _props.entities,
	          onChange = _props.onChange;
	
	
	      if (!entity.xlsxTemplate) {
	        return;
	      }
	
	      var updatedXlsxTemplates = Object.keys(entities).filter(function (k) {
	        return entities[k].__entitySet === 'xlsxTemplates' && entities[k].shortid === entity.xlsxTemplate.shortid;
	      });
	
	      if (updatedXlsxTemplates.length === 0) {
	        onChange({ _id: entity._id, xlsxTemplate: null });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          entity = _props2.entity,
	          entities = _props2.entities,
	          _onChange = _props2.onChange;
	
	      var xlsxTemplateItems = Properties.selectItems(entities);
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'properties-section' },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'select',
	            {
	              value: entity.xlsxTemplate ? entity.xlsxTemplate.shortid : '',
	              onChange: function onChange(v) {
	                return _onChange({ _id: entity._id, xlsxTemplate: v.target.value !== 'empty' ? { shortid: v.target.value } : null });
	              } },
	            _react2.default.createElement(
	              'option',
	              { key: 'empty', value: 'empty' },
	              '- not selected -'
	            ),
	            xlsxTemplateItems.map(function (e) {
	              return _react2.default.createElement(
	                'option',
	                { key: e.shortid, value: e.shortid },
	                e.name
	              );
	            })
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'selectItems',
	    value: function selectItems(entities) {
	      return Object.keys(entities).filter(function (k) {
	        return entities[k].__entitySet === 'xlsxTemplates';
	      }).map(function (k) {
	        return entities[k];
	      });
	    }
	  }, {
	    key: 'title',
	    value: function title(entity, entities) {
	      if (!entity.xlsxTemplate || !entity.xlsxTemplate.shortid) {
	        return 'xlsx template';
	      }
	
	      var foundItems = Properties.selectItems(entities).filter(function (e) {
	        return entity.xlsxTemplate.shortid === e.shortid;
	      });
	
	      if (!foundItems.length) {
	        return 'xlsx template';
	      }
	
	      return 'xlsx template: ' + foundItems[0].name;
	    }
	  }]);
	
	  return Properties;
	}(_react.Component);
	
	exports.default = Properties;

/***/ }
/******/ ]);}});