(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/krisk/!fuse@v7.0.0+incompatible/dist/fuse.js
  var require_fuse = __commonJS({
    "ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/krisk/!fuse@v7.0.0+incompatible/dist/fuse.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Fuse = factory());
      })(exports, function() {
        "use strict";
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
            return typeof obj2;
          } : function(obj2) {
            return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          }, _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", {
            writable: false
          });
          return Constructor;
        }
        function _defineProperty(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(subClass, "prototype", {
            writable: false
          });
          if (superClass)
            _setPrototypeOf(subClass, superClass);
        }
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
            return o2.__proto__ || Object.getPrototypeOf(o2);
          };
          return _getPrototypeOf(o);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        function _possibleConstructorReturn(self2, call) {
          if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
          }
          return _assertThisInitialized(self2);
        }
        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return _arrayLikeToArray(arr);
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++)
            arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _toPrimitive(input, hint) {
          if (typeof input !== "object" || input === null)
            return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== void 0) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object")
              return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return typeof key === "symbol" ? key : String(key);
        }
        function isArray(value) {
          return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
        }
        var INFINITY = 1 / 0;
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        function isString(value) {
          return typeof value === "string";
        }
        function isNumber(value) {
          return typeof value === "number";
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
        }
        function isObject(value) {
          return _typeof(value) === "object";
        }
        function isObjectLike(value) {
          return isObject(value) && value !== null;
        }
        function isDefined(value) {
          return value !== void 0 && value !== null;
        }
        function isBlank(value) {
          return !value.trim().length;
        }
        function getTag(value) {
          return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
        }
        var EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
        var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
        var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = function LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY2(key) {
          return "Invalid value for key ".concat(key);
        };
        var PATTERN_LENGTH_TOO_LARGE = function PATTERN_LENGTH_TOO_LARGE2(max) {
          return "Pattern length exceeds max of ".concat(max, ".");
        };
        var MISSING_KEY_PROPERTY = function MISSING_KEY_PROPERTY2(name) {
          return "Missing ".concat(name, " property in key");
        };
        var INVALID_KEY_WEIGHT_VALUE = function INVALID_KEY_WEIGHT_VALUE2(key) {
          return "Property 'weight' in key '".concat(key, "' must be a positive integer");
        };
        var hasOwn = Object.prototype.hasOwnProperty;
        var KeyStore = /* @__PURE__ */ function() {
          function KeyStore2(keys) {
            var _this = this;
            _classCallCheck(this, KeyStore2);
            this._keys = [];
            this._keyMap = {};
            var totalWeight = 0;
            keys.forEach(function(key) {
              var obj = createKey(key);
              _this._keys.push(obj);
              _this._keyMap[obj.id] = obj;
              totalWeight += obj.weight;
            });
            this._keys.forEach(function(key) {
              key.weight /= totalWeight;
            });
          }
          _createClass(KeyStore2, [{
            key: "get",
            value: function get2(keyId) {
              return this._keyMap[keyId];
            }
          }, {
            key: "keys",
            value: function keys() {
              return this._keys;
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return JSON.stringify(this._keys);
            }
          }]);
          return KeyStore2;
        }();
        function createKey(key) {
          var path = null;
          var id = null;
          var src = null;
          var weight = 1;
          var getFn = null;
          if (isString(key) || isArray(key)) {
            src = key;
            path = createKeyPath(key);
            id = createKeyId(key);
          } else {
            if (!hasOwn.call(key, "name")) {
              throw new Error(MISSING_KEY_PROPERTY("name"));
            }
            var name = key.name;
            src = name;
            if (hasOwn.call(key, "weight")) {
              weight = key.weight;
              if (weight <= 0) {
                throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
              }
            }
            path = createKeyPath(name);
            id = createKeyId(name);
            getFn = key.getFn;
          }
          return {
            path,
            id,
            weight,
            src,
            getFn
          };
        }
        function createKeyPath(key) {
          return isArray(key) ? key : key.split(".");
        }
        function createKeyId(key) {
          return isArray(key) ? key.join(".") : key;
        }
        function get(obj, path) {
          var list = [];
          var arr = false;
          var deepGet = function deepGet2(obj2, path2, index) {
            if (!isDefined(obj2)) {
              return;
            }
            if (!path2[index]) {
              list.push(obj2);
            } else {
              var key = path2[index];
              var value = obj2[key];
              if (!isDefined(value)) {
                return;
              }
              if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
                list.push(toString(value));
              } else if (isArray(value)) {
                arr = true;
                for (var i = 0, len = value.length; i < len; i += 1) {
                  deepGet2(value[i], path2, index + 1);
                }
              } else if (path2.length) {
                deepGet2(value, path2, index + 1);
              }
            }
          };
          deepGet(obj, isString(path) ? path.split(".") : path, 0);
          return arr ? list : list[0];
        }
        var MatchOptions = {
          // Whether the matches should be included in the result set. When `true`, each record in the result
          // set will include the indices of the matched characters.
          // These can consequently be used for highlighting purposes.
          includeMatches: false,
          // When `true`, the matching function will continue to the end of a search pattern even if
          // a perfect match has already been located in the string.
          findAllMatches: false,
          // Minimum number of characters that must be matched before a result is considered a match
          minMatchCharLength: 1
        };
        var BasicOptions = {
          // When `true`, the algorithm continues searching to the end of the input even if a perfect
          // match is found before the end of the same input.
          isCaseSensitive: false,
          // When true, the matching function will continue to the end of a search pattern even if
          includeScore: false,
          // List of properties that will be searched. This also supports nested properties.
          keys: [],
          // Whether to sort the result list, by score
          shouldSort: true,
          // Default sort function: sort by ascending score, ascending index
          sortFn: function sortFn(a, b) {
            return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1;
          }
        };
        var FuzzyOptions = {
          // Approximately where in the text is the pattern expected to be found?
          location: 0,
          // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
          // (of both letters and location), a threshold of '1.0' would match anything.
          threshold: 0.6,
          // Determines how close the match must be to the fuzzy location (specified above).
          // An exact letter match which is 'distance' characters away from the fuzzy location
          // would score as a complete mismatch. A distance of '0' requires the match be at
          // the exact location specified, a threshold of '1000' would require a perfect match
          // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
          distance: 100
        };
        var AdvancedOptions = {
          // When `true`, it enables the use of unix-like search commands
          useExtendedSearch: false,
          // The get function to use when fetching an object's properties.
          // The default will search nested paths *ie foo.bar.baz*
          getFn: get,
          // When `true`, search will ignore `location` and `distance`, so it won't matter
          // where in the string the pattern appears.
          // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
          ignoreLocation: false,
          // When `true`, the calculation for the relevance score (used for sorting) will
          // ignore the field-length norm.
          // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
          ignoreFieldNorm: false,
          // The weight to determine how much field length norm effects scoring.
          fieldNormWeight: 1
        };
        var Config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
        var SPACE = /[^ ]+/g;
        function norm() {
          var weight = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
          var mantissa = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
          var cache = /* @__PURE__ */ new Map();
          var m = Math.pow(10, mantissa);
          return {
            get: function get2(value) {
              var numTokens = value.match(SPACE).length;
              if (cache.has(numTokens)) {
                return cache.get(numTokens);
              }
              var norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
              var n = parseFloat(Math.round(norm2 * m) / m);
              cache.set(numTokens, n);
              return n;
            },
            clear: function clear() {
              cache.clear();
            }
          };
        }
        var FuseIndex = /* @__PURE__ */ function() {
          function FuseIndex2() {
            var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$getFn = _ref.getFn, getFn = _ref$getFn === void 0 ? Config.getFn : _ref$getFn, _ref$fieldNormWeight = _ref.fieldNormWeight, fieldNormWeight = _ref$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref$fieldNormWeight;
            _classCallCheck(this, FuseIndex2);
            this.norm = norm(fieldNormWeight, 3);
            this.getFn = getFn;
            this.isCreated = false;
            this.setIndexRecords();
          }
          _createClass(FuseIndex2, [{
            key: "setSources",
            value: function setSources() {
              var docs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
              this.docs = docs;
            }
          }, {
            key: "setIndexRecords",
            value: function setIndexRecords() {
              var records = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
              this.records = records;
            }
          }, {
            key: "setKeys",
            value: function setKeys() {
              var _this = this;
              var keys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
              this.keys = keys;
              this._keysMap = {};
              keys.forEach(function(key, idx) {
                _this._keysMap[key.id] = idx;
              });
            }
          }, {
            key: "create",
            value: function create() {
              var _this2 = this;
              if (this.isCreated || !this.docs.length) {
                return;
              }
              this.isCreated = true;
              if (isString(this.docs[0])) {
                this.docs.forEach(function(doc, docIndex) {
                  _this2._addString(doc, docIndex);
                });
              } else {
                this.docs.forEach(function(doc, docIndex) {
                  _this2._addObject(doc, docIndex);
                });
              }
              this.norm.clear();
            }
            // Adds a doc to the end of the index
          }, {
            key: "add",
            value: function add(doc) {
              var idx = this.size();
              if (isString(doc)) {
                this._addString(doc, idx);
              } else {
                this._addObject(doc, idx);
              }
            }
            // Removes the doc at the specified index of the index
          }, {
            key: "removeAt",
            value: function removeAt(idx) {
              this.records.splice(idx, 1);
              for (var i = idx, len = this.size(); i < len; i += 1) {
                this.records[i].i -= 1;
              }
            }
          }, {
            key: "getValueForItemAtKeyId",
            value: function getValueForItemAtKeyId(item, keyId) {
              return item[this._keysMap[keyId]];
            }
          }, {
            key: "size",
            value: function size() {
              return this.records.length;
            }
          }, {
            key: "_addString",
            value: function _addString(doc, docIndex) {
              if (!isDefined(doc) || isBlank(doc)) {
                return;
              }
              var record = {
                v: doc,
                i: docIndex,
                n: this.norm.get(doc)
              };
              this.records.push(record);
            }
          }, {
            key: "_addObject",
            value: function _addObject(doc, docIndex) {
              var _this3 = this;
              var record = {
                i: docIndex,
                $: {}
              };
              this.keys.forEach(function(key, keyIndex) {
                var value = key.getFn ? key.getFn(doc) : _this3.getFn(doc, key.path);
                if (!isDefined(value)) {
                  return;
                }
                if (isArray(value)) {
                  var subRecords = [];
                  var stack = [{
                    nestedArrIndex: -1,
                    value
                  }];
                  while (stack.length) {
                    var _stack$pop = stack.pop(), nestedArrIndex = _stack$pop.nestedArrIndex, _value = _stack$pop.value;
                    if (!isDefined(_value)) {
                      continue;
                    }
                    if (isString(_value) && !isBlank(_value)) {
                      var subRecord = {
                        v: _value,
                        i: nestedArrIndex,
                        n: _this3.norm.get(_value)
                      };
                      subRecords.push(subRecord);
                    } else if (isArray(_value)) {
                      _value.forEach(function(item, k) {
                        stack.push({
                          nestedArrIndex: k,
                          value: item
                        });
                      });
                    } else
                      ;
                  }
                  record.$[keyIndex] = subRecords;
                } else if (isString(value) && !isBlank(value)) {
                  var _subRecord = {
                    v: value,
                    n: _this3.norm.get(value)
                  };
                  record.$[keyIndex] = _subRecord;
                }
              });
              this.records.push(record);
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                keys: this.keys,
                records: this.records
              };
            }
          }]);
          return FuseIndex2;
        }();
        function createIndex(keys, docs) {
          var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$getFn = _ref2.getFn, getFn = _ref2$getFn === void 0 ? Config.getFn : _ref2$getFn, _ref2$fieldNormWeight = _ref2.fieldNormWeight, fieldNormWeight = _ref2$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref2$fieldNormWeight;
          var myIndex = new FuseIndex({
            getFn,
            fieldNormWeight
          });
          myIndex.setKeys(keys.map(createKey));
          myIndex.setSources(docs);
          myIndex.create();
          return myIndex;
        }
        function parseIndex(data) {
          var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$getFn = _ref3.getFn, getFn = _ref3$getFn === void 0 ? Config.getFn : _ref3$getFn, _ref3$fieldNormWeight = _ref3.fieldNormWeight, fieldNormWeight = _ref3$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref3$fieldNormWeight;
          var keys = data.keys, records = data.records;
          var myIndex = new FuseIndex({
            getFn,
            fieldNormWeight
          });
          myIndex.setKeys(keys);
          myIndex.setIndexRecords(records);
          return myIndex;
        }
        function computeScore$1(pattern) {
          var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$errors = _ref.errors, errors = _ref$errors === void 0 ? 0 : _ref$errors, _ref$currentLocation = _ref.currentLocation, currentLocation = _ref$currentLocation === void 0 ? 0 : _ref$currentLocation, _ref$expectedLocation = _ref.expectedLocation, expectedLocation = _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
          var accuracy = errors / pattern.length;
          if (ignoreLocation) {
            return accuracy;
          }
          var proximity = Math.abs(expectedLocation - currentLocation);
          if (!distance) {
            return proximity ? 1 : accuracy;
          }
          return accuracy + proximity / distance;
        }
        function convertMaskToIndices() {
          var matchmask = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          var minMatchCharLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Config.minMatchCharLength;
          var indices = [];
          var start = -1;
          var end = -1;
          var i = 0;
          for (var len = matchmask.length; i < len; i += 1) {
            var match = matchmask[i];
            if (match && start === -1) {
              start = i;
            } else if (!match && start !== -1) {
              end = i - 1;
              if (end - start + 1 >= minMatchCharLength) {
                indices.push([start, end]);
              }
              start = -1;
            }
          }
          if (matchmask[i - 1] && i - start >= minMatchCharLength) {
            indices.push([start, i - 1]);
          }
          return indices;
        }
        var MAX_BITS = 32;
        function search(text, pattern, patternAlphabet) {
          var _ref = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, _ref$location = _ref.location, location2 = _ref$location === void 0 ? Config.location : _ref$location, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
          if (pattern.length > MAX_BITS) {
            throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
          }
          var patternLen = pattern.length;
          var textLen = text.length;
          var expectedLocation = Math.max(0, Math.min(location2, textLen));
          var currentThreshold = threshold;
          var bestLocation = expectedLocation;
          var computeMatches = minMatchCharLength > 1 || includeMatches;
          var matchMask = computeMatches ? Array(textLen) : [];
          var index;
          while ((index = text.indexOf(pattern, bestLocation)) > -1) {
            var score = computeScore$1(pattern, {
              currentLocation: index,
              expectedLocation,
              distance,
              ignoreLocation
            });
            currentThreshold = Math.min(score, currentThreshold);
            bestLocation = index + patternLen;
            if (computeMatches) {
              var i = 0;
              while (i < patternLen) {
                matchMask[index + i] = 1;
                i += 1;
              }
            }
          }
          bestLocation = -1;
          var lastBitArr = [];
          var finalScore = 1;
          var binMax = patternLen + textLen;
          var mask = 1 << patternLen - 1;
          for (var _i = 0; _i < patternLen; _i += 1) {
            var binMin = 0;
            var binMid = binMax;
            while (binMin < binMid) {
              var _score = computeScore$1(pattern, {
                errors: _i,
                currentLocation: expectedLocation + binMid,
                expectedLocation,
                distance,
                ignoreLocation
              });
              if (_score <= currentThreshold) {
                binMin = binMid;
              } else {
                binMax = binMid;
              }
              binMid = Math.floor((binMax - binMin) / 2 + binMin);
            }
            binMax = binMid;
            var start = Math.max(1, expectedLocation - binMid + 1);
            var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
            var bitArr = Array(finish + 2);
            bitArr[finish + 1] = (1 << _i) - 1;
            for (var j = finish; j >= start; j -= 1) {
              var currentLocation = j - 1;
              var charMatch = patternAlphabet[text.charAt(currentLocation)];
              if (computeMatches) {
                matchMask[currentLocation] = +!!charMatch;
              }
              bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
              if (_i) {
                bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
              }
              if (bitArr[j] & mask) {
                finalScore = computeScore$1(pattern, {
                  errors: _i,
                  currentLocation,
                  expectedLocation,
                  distance,
                  ignoreLocation
                });
                if (finalScore <= currentThreshold) {
                  currentThreshold = finalScore;
                  bestLocation = currentLocation;
                  if (bestLocation <= expectedLocation) {
                    break;
                  }
                  start = Math.max(1, 2 * expectedLocation - bestLocation);
                }
              }
            }
            var _score2 = computeScore$1(pattern, {
              errors: _i + 1,
              currentLocation: expectedLocation,
              expectedLocation,
              distance,
              ignoreLocation
            });
            if (_score2 > currentThreshold) {
              break;
            }
            lastBitArr = bitArr;
          }
          var result = {
            isMatch: bestLocation >= 0,
            // Count exact matches (those with a score of 0) to be "almost" exact
            score: Math.max(1e-3, finalScore)
          };
          if (computeMatches) {
            var indices = convertMaskToIndices(matchMask, minMatchCharLength);
            if (!indices.length) {
              result.isMatch = false;
            } else if (includeMatches) {
              result.indices = indices;
            }
          }
          return result;
        }
        function createPatternAlphabet(pattern) {
          var mask = {};
          for (var i = 0, len = pattern.length; i < len; i += 1) {
            var _char = pattern.charAt(i);
            mask[_char] = (mask[_char] || 0) | 1 << len - i - 1;
          }
          return mask;
        }
        var BitapSearch = /* @__PURE__ */ function() {
          function BitapSearch2(pattern) {
            var _this = this;
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$location = _ref.location, location2 = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
            _classCallCheck(this, BitapSearch2);
            this.options = {
              location: location2,
              threshold,
              distance,
              includeMatches,
              findAllMatches,
              minMatchCharLength,
              isCaseSensitive,
              ignoreLocation
            };
            this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
            this.chunks = [];
            if (!this.pattern.length) {
              return;
            }
            var addChunk = function addChunk2(pattern2, startIndex2) {
              _this.chunks.push({
                pattern: pattern2,
                alphabet: createPatternAlphabet(pattern2),
                startIndex: startIndex2
              });
            };
            var len = this.pattern.length;
            if (len > MAX_BITS) {
              var i = 0;
              var remainder = len % MAX_BITS;
              var end = len - remainder;
              while (i < end) {
                addChunk(this.pattern.substr(i, MAX_BITS), i);
                i += MAX_BITS;
              }
              if (remainder) {
                var startIndex = len - MAX_BITS;
                addChunk(this.pattern.substr(startIndex), startIndex);
              }
            } else {
              addChunk(this.pattern, 0);
            }
          }
          _createClass(BitapSearch2, [{
            key: "searchIn",
            value: function searchIn(text) {
              var _this$options = this.options, isCaseSensitive = _this$options.isCaseSensitive, includeMatches = _this$options.includeMatches;
              if (!isCaseSensitive) {
                text = text.toLowerCase();
              }
              if (this.pattern === text) {
                var _result = {
                  isMatch: true,
                  score: 0
                };
                if (includeMatches) {
                  _result.indices = [[0, text.length - 1]];
                }
                return _result;
              }
              var _this$options2 = this.options, location2 = _this$options2.location, distance = _this$options2.distance, threshold = _this$options2.threshold, findAllMatches = _this$options2.findAllMatches, minMatchCharLength = _this$options2.minMatchCharLength, ignoreLocation = _this$options2.ignoreLocation;
              var allIndices = [];
              var totalScore = 0;
              var hasMatches = false;
              this.chunks.forEach(function(_ref2) {
                var pattern = _ref2.pattern, alphabet = _ref2.alphabet, startIndex = _ref2.startIndex;
                var _search = search(text, pattern, alphabet, {
                  location: location2 + startIndex,
                  distance,
                  threshold,
                  findAllMatches,
                  minMatchCharLength,
                  includeMatches,
                  ignoreLocation
                }), isMatch = _search.isMatch, score = _search.score, indices = _search.indices;
                if (isMatch) {
                  hasMatches = true;
                }
                totalScore += score;
                if (isMatch && indices) {
                  allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                }
              });
              var result = {
                isMatch: hasMatches,
                score: hasMatches ? totalScore / this.chunks.length : 1
              };
              if (hasMatches && includeMatches) {
                result.indices = allIndices;
              }
              return result;
            }
          }]);
          return BitapSearch2;
        }();
        var BaseMatch = /* @__PURE__ */ function() {
          function BaseMatch2(pattern) {
            _classCallCheck(this, BaseMatch2);
            this.pattern = pattern;
          }
          _createClass(BaseMatch2, [{
            key: "search",
            value: function search2() {
            }
          }], [{
            key: "isMultiMatch",
            value: function isMultiMatch(pattern) {
              return getMatch(pattern, this.multiRegex);
            }
          }, {
            key: "isSingleMatch",
            value: function isSingleMatch(pattern) {
              return getMatch(pattern, this.singleRegex);
            }
          }]);
          return BaseMatch2;
        }();
        function getMatch(pattern, exp) {
          var matches = pattern.match(exp);
          return matches ? matches[1] : null;
        }
        var ExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(ExactMatch2, _BaseMatch);
          var _super = _createSuper(ExactMatch2);
          function ExactMatch2(pattern) {
            _classCallCheck(this, ExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(ExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var isMatch = text === this.pattern;
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, this.pattern.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^="(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^=(.*)$/;
            }
          }]);
          return ExactMatch2;
        }(BaseMatch);
        var InverseExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(InverseExactMatch2, _BaseMatch);
          var _super = _createSuper(InverseExactMatch2);
          function InverseExactMatch2(pattern) {
            _classCallCheck(this, InverseExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(InverseExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var index = text.indexOf(this.pattern);
              var isMatch = index === -1;
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, text.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "inverse-exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^!"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^!(.*)$/;
            }
          }]);
          return InverseExactMatch2;
        }(BaseMatch);
        var PrefixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(PrefixExactMatch2, _BaseMatch);
          var _super = _createSuper(PrefixExactMatch2);
          function PrefixExactMatch2(pattern) {
            _classCallCheck(this, PrefixExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(PrefixExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var isMatch = text.startsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, this.pattern.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "prefix-exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^\^"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^\^(.*)$/;
            }
          }]);
          return PrefixExactMatch2;
        }(BaseMatch);
        var InversePrefixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(InversePrefixExactMatch2, _BaseMatch);
          var _super = _createSuper(InversePrefixExactMatch2);
          function InversePrefixExactMatch2(pattern) {
            _classCallCheck(this, InversePrefixExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(InversePrefixExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var isMatch = !text.startsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, text.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "inverse-prefix-exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^!\^"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^!\^(.*)$/;
            }
          }]);
          return InversePrefixExactMatch2;
        }(BaseMatch);
        var SuffixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(SuffixExactMatch2, _BaseMatch);
          var _super = _createSuper(SuffixExactMatch2);
          function SuffixExactMatch2(pattern) {
            _classCallCheck(this, SuffixExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(SuffixExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var isMatch = text.endsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [text.length - this.pattern.length, text.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "suffix-exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^"(.*)"\$$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^(.*)\$$/;
            }
          }]);
          return SuffixExactMatch2;
        }(BaseMatch);
        var InverseSuffixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(InverseSuffixExactMatch2, _BaseMatch);
          var _super = _createSuper(InverseSuffixExactMatch2);
          function InverseSuffixExactMatch2(pattern) {
            _classCallCheck(this, InverseSuffixExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(InverseSuffixExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var isMatch = !text.endsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, text.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "inverse-suffix-exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^!"(.*)"\$$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^!(.*)\$$/;
            }
          }]);
          return InverseSuffixExactMatch2;
        }(BaseMatch);
        var FuzzyMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(FuzzyMatch2, _BaseMatch);
          var _super = _createSuper(FuzzyMatch2);
          function FuzzyMatch2(pattern) {
            var _this;
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$location = _ref.location, location2 = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
            _classCallCheck(this, FuzzyMatch2);
            _this = _super.call(this, pattern);
            _this._bitapSearch = new BitapSearch(pattern, {
              location: location2,
              threshold,
              distance,
              includeMatches,
              findAllMatches,
              minMatchCharLength,
              isCaseSensitive,
              ignoreLocation
            });
            return _this;
          }
          _createClass(FuzzyMatch2, [{
            key: "search",
            value: function search2(text) {
              return this._bitapSearch.searchIn(text);
            }
          }], [{
            key: "type",
            get: function get2() {
              return "fuzzy";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^(.*)$/;
            }
          }]);
          return FuzzyMatch2;
        }(BaseMatch);
        var IncludeMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(IncludeMatch2, _BaseMatch);
          var _super = _createSuper(IncludeMatch2);
          function IncludeMatch2(pattern) {
            _classCallCheck(this, IncludeMatch2);
            return _super.call(this, pattern);
          }
          _createClass(IncludeMatch2, [{
            key: "search",
            value: function search2(text) {
              var location2 = 0;
              var index;
              var indices = [];
              var patternLen = this.pattern.length;
              while ((index = text.indexOf(this.pattern, location2)) > -1) {
                location2 = index + patternLen;
                indices.push([index, location2 - 1]);
              }
              var isMatch = !!indices.length;
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "include";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^'"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^'(.*)$/;
            }
          }]);
          return IncludeMatch2;
        }(BaseMatch);
        var searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
        var searchersLen = searchers.length;
        var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
        var OR_TOKEN = "|";
        function parseQuery(pattern) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return pattern.split(OR_TOKEN).map(function(item) {
            var query = item.trim().split(SPACE_RE).filter(function(item2) {
              return item2 && !!item2.trim();
            });
            var results = [];
            for (var i = 0, len = query.length; i < len; i += 1) {
              var queryItem = query[i];
              var found = false;
              var idx = -1;
              while (!found && ++idx < searchersLen) {
                var searcher = searchers[idx];
                var token = searcher.isMultiMatch(queryItem);
                if (token) {
                  results.push(new searcher(token, options));
                  found = true;
                }
              }
              if (found) {
                continue;
              }
              idx = -1;
              while (++idx < searchersLen) {
                var _searcher = searchers[idx];
                var _token = _searcher.isSingleMatch(queryItem);
                if (_token) {
                  results.push(new _searcher(_token, options));
                  break;
                }
              }
            }
            return results;
          });
        }
        var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
        var ExtendedSearch = /* @__PURE__ */ function() {
          function ExtendedSearch2(pattern) {
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$location = _ref.location, location2 = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance;
            _classCallCheck(this, ExtendedSearch2);
            this.query = null;
            this.options = {
              isCaseSensitive,
              includeMatches,
              minMatchCharLength,
              findAllMatches,
              ignoreLocation,
              location: location2,
              threshold,
              distance
            };
            this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
            this.query = parseQuery(this.pattern, this.options);
          }
          _createClass(ExtendedSearch2, [{
            key: "searchIn",
            value: function searchIn(text) {
              var query = this.query;
              if (!query) {
                return {
                  isMatch: false,
                  score: 1
                };
              }
              var _this$options = this.options, includeMatches = _this$options.includeMatches, isCaseSensitive = _this$options.isCaseSensitive;
              text = isCaseSensitive ? text : text.toLowerCase();
              var numMatches = 0;
              var allIndices = [];
              var totalScore = 0;
              for (var i = 0, qLen = query.length; i < qLen; i += 1) {
                var searchers2 = query[i];
                allIndices.length = 0;
                numMatches = 0;
                for (var j = 0, pLen = searchers2.length; j < pLen; j += 1) {
                  var searcher = searchers2[j];
                  var _searcher$search = searcher.search(text), isMatch = _searcher$search.isMatch, indices = _searcher$search.indices, score = _searcher$search.score;
                  if (isMatch) {
                    numMatches += 1;
                    totalScore += score;
                    if (includeMatches) {
                      var type = searcher.constructor.type;
                      if (MultiMatchSet.has(type)) {
                        allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                      } else {
                        allIndices.push(indices);
                      }
                    }
                  } else {
                    totalScore = 0;
                    numMatches = 0;
                    allIndices.length = 0;
                    break;
                  }
                }
                if (numMatches) {
                  var result = {
                    isMatch: true,
                    score: totalScore / numMatches
                  };
                  if (includeMatches) {
                    result.indices = allIndices;
                  }
                  return result;
                }
              }
              return {
                isMatch: false,
                score: 1
              };
            }
          }], [{
            key: "condition",
            value: function condition(_, options) {
              return options.useExtendedSearch;
            }
          }]);
          return ExtendedSearch2;
        }();
        var registeredSearchers = [];
        function register() {
          registeredSearchers.push.apply(registeredSearchers, arguments);
        }
        function createSearcher(pattern, options) {
          for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
            var searcherClass = registeredSearchers[i];
            if (searcherClass.condition(pattern, options)) {
              return new searcherClass(pattern, options);
            }
          }
          return new BitapSearch(pattern, options);
        }
        var LogicalOperator = {
          AND: "$and",
          OR: "$or"
        };
        var KeyType = {
          PATH: "$path",
          PATTERN: "$val"
        };
        var isExpression = function isExpression2(query) {
          return !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
        };
        var isPath = function isPath2(query) {
          return !!query[KeyType.PATH];
        };
        var isLeaf = function isLeaf2(query) {
          return !isArray(query) && isObject(query) && !isExpression(query);
        };
        var convertToExplicit = function convertToExplicit2(query) {
          return _defineProperty({}, LogicalOperator.AND, Object.keys(query).map(function(key) {
            return _defineProperty({}, key, query[key]);
          }));
        };
        function parse(query, options) {
          var _ref3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref3$auto = _ref3.auto, auto = _ref3$auto === void 0 ? true : _ref3$auto;
          var next = function next2(query2) {
            var keys = Object.keys(query2);
            var isQueryPath = isPath(query2);
            if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
              return next2(convertToExplicit(query2));
            }
            if (isLeaf(query2)) {
              var key = isQueryPath ? query2[KeyType.PATH] : keys[0];
              var pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
              if (!isString(pattern)) {
                throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
              }
              var obj = {
                keyId: createKeyId(key),
                pattern
              };
              if (auto) {
                obj.searcher = createSearcher(pattern, options);
              }
              return obj;
            }
            var node = {
              children: [],
              operator: keys[0]
            };
            keys.forEach(function(key2) {
              var value = query2[key2];
              if (isArray(value)) {
                value.forEach(function(item) {
                  node.children.push(next2(item));
                });
              }
            });
            return node;
          };
          if (!isExpression(query)) {
            query = convertToExplicit(query);
          }
          return next(query);
        }
        function computeScore(results, _ref) {
          var _ref$ignoreFieldNorm = _ref.ignoreFieldNorm, ignoreFieldNorm = _ref$ignoreFieldNorm === void 0 ? Config.ignoreFieldNorm : _ref$ignoreFieldNorm;
          results.forEach(function(result) {
            var totalScore = 1;
            result.matches.forEach(function(_ref2) {
              var key = _ref2.key, norm2 = _ref2.norm, score = _ref2.score;
              var weight = key ? key.weight : null;
              totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
            });
            result.score = totalScore;
          });
        }
        function transformMatches(result, data) {
          var matches = result.matches;
          data.matches = [];
          if (!isDefined(matches)) {
            return;
          }
          matches.forEach(function(match) {
            if (!isDefined(match.indices) || !match.indices.length) {
              return;
            }
            var indices = match.indices, value = match.value;
            var obj = {
              indices,
              value
            };
            if (match.key) {
              obj.key = match.key.src;
            }
            if (match.idx > -1) {
              obj.refIndex = match.idx;
            }
            data.matches.push(obj);
          });
        }
        function transformScore(result, data) {
          data.score = result.score;
        }
        function format(results, docs) {
          var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$includeScore = _ref.includeScore, includeScore = _ref$includeScore === void 0 ? Config.includeScore : _ref$includeScore;
          var transformers = [];
          if (includeMatches)
            transformers.push(transformMatches);
          if (includeScore)
            transformers.push(transformScore);
          return results.map(function(result) {
            var idx = result.idx;
            var data = {
              item: docs[idx],
              refIndex: idx
            };
            if (transformers.length) {
              transformers.forEach(function(transformer) {
                transformer(result, data);
              });
            }
            return data;
          });
        }
        var Fuse$1 = /* @__PURE__ */ function() {
          function Fuse3(docs) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var index = arguments.length > 2 ? arguments[2] : void 0;
            _classCallCheck(this, Fuse3);
            this.options = _objectSpread2(_objectSpread2({}, Config), options);
            if (this.options.useExtendedSearch && false) {
              throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
            }
            this._keyStore = new KeyStore(this.options.keys);
            this.setCollection(docs, index);
          }
          _createClass(Fuse3, [{
            key: "setCollection",
            value: function setCollection(docs, index) {
              this._docs = docs;
              if (index && !(index instanceof FuseIndex)) {
                throw new Error(INCORRECT_INDEX_TYPE);
              }
              this._myIndex = index || createIndex(this.options.keys, this._docs, {
                getFn: this.options.getFn,
                fieldNormWeight: this.options.fieldNormWeight
              });
            }
          }, {
            key: "add",
            value: function add(doc) {
              if (!isDefined(doc)) {
                return;
              }
              this._docs.push(doc);
              this._myIndex.add(doc);
            }
          }, {
            key: "remove",
            value: function remove() {
              var predicate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
                return false;
              };
              var results = [];
              for (var i = 0, len = this._docs.length; i < len; i += 1) {
                var doc = this._docs[i];
                if (predicate(doc, i)) {
                  this.removeAt(i);
                  i -= 1;
                  len -= 1;
                  results.push(doc);
                }
              }
              return results;
            }
          }, {
            key: "removeAt",
            value: function removeAt(idx) {
              this._docs.splice(idx, 1);
              this._myIndex.removeAt(idx);
            }
          }, {
            key: "getIndex",
            value: function getIndex() {
              return this._myIndex;
            }
          }, {
            key: "search",
            value: function search2(query) {
              var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? -1 : _ref$limit;
              var _this$options = this.options, includeMatches = _this$options.includeMatches, includeScore = _this$options.includeScore, shouldSort = _this$options.shouldSort, sortFn = _this$options.sortFn, ignoreFieldNorm = _this$options.ignoreFieldNorm;
              var results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
              computeScore(results, {
                ignoreFieldNorm
              });
              if (shouldSort) {
                results.sort(sortFn);
              }
              if (isNumber(limit) && limit > -1) {
                results = results.slice(0, limit);
              }
              return format(results, this._docs, {
                includeMatches,
                includeScore
              });
            }
          }, {
            key: "_searchStringList",
            value: function _searchStringList(query) {
              var searcher = createSearcher(query, this.options);
              var records = this._myIndex.records;
              var results = [];
              records.forEach(function(_ref2) {
                var text = _ref2.v, idx = _ref2.i, norm2 = _ref2.n;
                if (!isDefined(text)) {
                  return;
                }
                var _searcher$searchIn = searcher.searchIn(text), isMatch = _searcher$searchIn.isMatch, score = _searcher$searchIn.score, indices = _searcher$searchIn.indices;
                if (isMatch) {
                  results.push({
                    item: text,
                    idx,
                    matches: [{
                      score,
                      value: text,
                      norm: norm2,
                      indices
                    }]
                  });
                }
              });
              return results;
            }
          }, {
            key: "_searchLogical",
            value: function _searchLogical(query) {
              var _this = this;
              var expression = parse(query, this.options);
              var evaluate = function evaluate2(node, item, idx) {
                if (!node.children) {
                  var keyId = node.keyId, searcher = node.searcher;
                  var matches = _this._findMatches({
                    key: _this._keyStore.get(keyId),
                    value: _this._myIndex.getValueForItemAtKeyId(item, keyId),
                    searcher
                  });
                  if (matches && matches.length) {
                    return [{
                      idx,
                      item,
                      matches
                    }];
                  }
                  return [];
                }
                var res = [];
                for (var i = 0, len = node.children.length; i < len; i += 1) {
                  var child = node.children[i];
                  var result = evaluate2(child, item, idx);
                  if (result.length) {
                    res.push.apply(res, _toConsumableArray(result));
                  } else if (node.operator === LogicalOperator.AND) {
                    return [];
                  }
                }
                return res;
              };
              var records = this._myIndex.records;
              var resultMap = {};
              var results = [];
              records.forEach(function(_ref3) {
                var item = _ref3.$, idx = _ref3.i;
                if (isDefined(item)) {
                  var expResults = evaluate(expression, item, idx);
                  if (expResults.length) {
                    if (!resultMap[idx]) {
                      resultMap[idx] = {
                        idx,
                        item,
                        matches: []
                      };
                      results.push(resultMap[idx]);
                    }
                    expResults.forEach(function(_ref4) {
                      var _resultMap$idx$matche;
                      var matches = _ref4.matches;
                      (_resultMap$idx$matche = resultMap[idx].matches).push.apply(_resultMap$idx$matche, _toConsumableArray(matches));
                    });
                  }
                }
              });
              return results;
            }
          }, {
            key: "_searchObjectList",
            value: function _searchObjectList(query) {
              var _this2 = this;
              var searcher = createSearcher(query, this.options);
              var _this$_myIndex = this._myIndex, keys = _this$_myIndex.keys, records = _this$_myIndex.records;
              var results = [];
              records.forEach(function(_ref5) {
                var item = _ref5.$, idx = _ref5.i;
                if (!isDefined(item)) {
                  return;
                }
                var matches = [];
                keys.forEach(function(key, keyIndex) {
                  matches.push.apply(matches, _toConsumableArray(_this2._findMatches({
                    key,
                    value: item[keyIndex],
                    searcher
                  })));
                });
                if (matches.length) {
                  results.push({
                    idx,
                    item,
                    matches
                  });
                }
              });
              return results;
            }
          }, {
            key: "_findMatches",
            value: function _findMatches(_ref6) {
              var key = _ref6.key, value = _ref6.value, searcher = _ref6.searcher;
              if (!isDefined(value)) {
                return [];
              }
              var matches = [];
              if (isArray(value)) {
                value.forEach(function(_ref7) {
                  var text2 = _ref7.v, idx = _ref7.i, norm3 = _ref7.n;
                  if (!isDefined(text2)) {
                    return;
                  }
                  var _searcher$searchIn2 = searcher.searchIn(text2), isMatch2 = _searcher$searchIn2.isMatch, score2 = _searcher$searchIn2.score, indices2 = _searcher$searchIn2.indices;
                  if (isMatch2) {
                    matches.push({
                      score: score2,
                      key,
                      value: text2,
                      idx,
                      norm: norm3,
                      indices: indices2
                    });
                  }
                });
              } else {
                var text = value.v, norm2 = value.n;
                var _searcher$searchIn3 = searcher.searchIn(text), isMatch = _searcher$searchIn3.isMatch, score = _searcher$searchIn3.score, indices = _searcher$searchIn3.indices;
                if (isMatch) {
                  matches.push({
                    score,
                    key,
                    value: text,
                    norm: norm2,
                    indices
                  });
                }
              }
              return matches;
            }
          }]);
          return Fuse3;
        }();
        Fuse$1.version = "7.0.0";
        Fuse$1.createIndex = createIndex;
        Fuse$1.parseIndex = parseIndex;
        Fuse$1.config = Config;
        {
          Fuse$1.parseQuery = parse;
        }
        {
          register(ExtendedSearch);
        }
        var Fuse2 = Fuse$1;
        return Fuse2;
      });
    }
  });

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/dropdown.ts
  (() => {
    const hide = (dropdown) => {
      dropdown.classList.remove("show");
      dropdown.setAttribute("aria-expanded", "false");
    };
    const show = (dropdown) => {
      dropdown.classList.add("show");
      dropdown.setAttribute("aria-expanded", "true");
    };
    const toggle = (dropdown) => {
      if (dropdown.classList.contains("show")) {
        hide(dropdown);
        return;
      }
      show(dropdown);
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.addEventListener("click", (e) => {
        const toggleEl = e.target.closest(".search-dropdown-toggle");
        if (toggleEl) {
          const dropdown = toggleEl.closest(".search-dropdown");
          toggle(dropdown);
          e.preventDefault();
          return;
        }
        const item = e.target.closest(".search-dropdown-item");
        if (item) {
          const dropdown = item.closest(".search-dropdown");
          const multiple = dropdown.hasAttribute("multiple");
          const value = item.getAttribute("data-value");
          if (multiple) {
            if (item.classList.contains("active")) {
              item.classList.remove("active");
            } else {
              item.classList.add("active");
            }
            if (dropdown.querySelector(".search-dropdown-item.active")) {
              dropdown.classList.add("active");
            } else {
              dropdown.classList.remove("active");
            }
          } else {
            if (value) {
              dropdown.setAttribute("data-value", value);
              dropdown.classList.add("active");
            } else {
              dropdown.removeAttribute("data-value");
              dropdown.classList.remove("active");
            }
            dropdown.querySelector(".search-dropdown-label").innerText = item.innerText;
            dropdown.querySelectorAll(".search-dropdown-item").forEach((lang) => {
              lang.classList.remove("active");
            });
            item.classList.add("active");
          }
          const e2 = new CustomEvent("change", {
            detail: {
              value
            }
          });
          dropdown.dispatchEvent(e2);
        }
        document.querySelectorAll(".search-dropdown.show").forEach((dropdown) => {
          hide(dropdown);
        });
      });
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/keyboard.ts
  var Keyboard = class {
    keys = {};
    events = [];
    attach(keys, callback) {
      this.events.push({ keys, callback });
    }
    press(e) {
      if (e.type === "keydown") {
        this.keys[e.key] = true;
        for (const i in this.events) {
          const event = this.events[i];
          if (this.isPressed(event.keys)) {
            event.callback(e);
          }
        }
        return;
      }
      delete this.keys[e.key];
    }
    // Check if the given keys were pressed at the same time.
    isPressed(keys) {
      if (keys.length === 0) {
        return false;
      }
      for (const i in keys) {
        if (!(keys[i] in this.keys)) {
          return false;
        }
      }
      return true;
    }
  };
  var keyboard = new Keyboard();
  var keyboard_default = keyboard;
  (() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      const press = (e) => {
        keyboard.press(e);
      };
      document.addEventListener("keydown", press);
      document.addEventListener("keyup", press);
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/navigator.ts
  var Navigator = class {
    modal() {
      return document.querySelector(".search-modal-container.active");
    }
    current() {
      const modal = this.modal();
      return modal ? modal.querySelector('.search-result[aria-selected="true"]') : document.querySelector('.search-container .search-result[aria-selected="true"]');
    }
    go(dir) {
      const current = this.current();
      let target;
      if (current) {
        current.ariaSelected = "false";
        target = dir === "prev" ? current.previousElementSibling : current.nextElementSibling;
      }
      target = target ?? this.first();
      target.focus();
      target.ariaSelected = "true";
    }
    first() {
      const modal = this.modal();
      return modal ? modal.querySelector(".search-result") : document.querySelector(".search-container .search-result");
    }
    prev() {
      this.go("prev");
    }
    next() {
      this.go("next");
    }
  };
  (() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      const navigator = new Navigator();
      keyboard_default.attach(["ArrowUp"], () => {
        navigator.prev();
      });
      keyboard_default.attach(["ArrowDown"], () => {
        navigator.next();
      });
    });
  })();

  // ns-params:@params
  var params_default = { case_sensitive: false, defaultLang: "en", distance: 100, expand_results_meta: false, filter_taxonomies: true, filter_years: true, i18n: { en: { all: { other: "All" }, cancel: { other: "Cancel" }, expand: { other: "Expand" }, index_fails: { other: "Failed to initialise index." }, input_placeholder: { other: "Type to search" }, search_stat: { one: "Found {total} result in {time}.", other: "Found {total} results in {time}." }, sort_by_date_asc: { other: "Oldest" }, sort_by_date_desc: { other: "Newest" }, sort_by_default: { other: "Best match" }, taxonomy_authors: { other: "Authors" }, taxonomy_categories: { other: "Categories" }, taxonomy_series: { other: "Series" }, taxonomy_tags: { other: "Tags" }, to_close: { other: "to close" }, to_navigate: { other: "to navigate" }, to_search: { other: "to search" }, to_select: { other: "to select" }, years: { other: "Years" } } }, icons: { expand: '<svg aria-hidden="true" class="bi bi-chevron-expandbi bi-chevron-expand hi-svg-inline" fill="currentColor" height="1rem" viewBox="0 0 16 16" width="1rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>\n</svg>', heading: '<svg aria-hidden="true" class="bi bi-hashbi bi-hash hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>\n</svg>', home: '<svg aria-hidden="true" class="bi bi-housebi bi-house hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>\n</svg>', lang: '<svg aria-hidden="true" class="bi bi-translatebi bi-translate hi-svg-inline" fill="currentColor" height="1rem" viewBox="0 0 16 16" width="1rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>\n  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>\n</svg>', meta: '<svg aria-hidden="true" class="bi bi-info-circlebi bi-info-circle hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>\n  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>\n</svg>', page: '<svg aria-hidden="true" class="bi bi-file-earmark-richtextbi bi-file-earmark-richtext hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>\n  <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/>\n</svg>', search: '<svg aria-hidden="true" class="bi bi-searchbi bi-search hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>\n</svg>', section: '<svg aria-hidden="true" class="bi bi-listbi bi-list hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>\n</svg>', sort: '<svg aria-hidden="true" class="bi bi-sort-downbi bi-sort-down hi-svg-inline" fill="currentColor" height="1rem" viewBox="0 0 16 16" width="1rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>\n</svg>', spinner: '<svg aria-hidden="true" class="bi bi-arrow-clockwisebi bi-arrow-clockwise hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>\n  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>\n</svg>', taxonomies: '<svg aria-hidden="true" class="bi bi-tagsbi bi-tags hi-svg-inline" fill="currentColor" height="1rem" viewBox="0 0 16 16" width="1rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>\n  <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>\n</svg>', taxonomy: '<svg aria-hidden="true" class="bi bi-tagsbi bi-tags hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>\n  <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>\n</svg>', term: '<svg aria-hidden="true" class="bi bi-tagbi bi-tag hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>\n  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/>\n</svg>', year: '<svg aria-hidden="true" class="bi bi-calendar-checkbi bi-calendar-check hi-svg-inline" fill="currentColor" height="1rem" viewBox="0 0 16 16" width="1rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>\n  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>\n</svg>' }, ignore_location: false, index_all_pages: true, index_content: true, indices: ["/en/search.json?v=0672ddb66deedd597e4b0e8701b830da", "/es/search.json?v=c2e44107cf004e5e0dec9c135a062be5"], langs: { en: { lang: "en", name: "English" }, es: { lang: "es", name: "Espa\xF1ol" } }, lazy_loading: true, location: 0, max_results: 1e3, min_match_char_length: 3, modal_container: "body", modal_toggle_selector: ".search-modal-toggle", paginate: 20, shortcut_close: ["Escape"], shortcut_search: ["Control", "k"], stall_threshold: 300, taxonomies: { authors: ["Juli\xE1n Nonino"], series: ["Programming", "Software Engineering"], tags: ["binary", "boolean-logic", "cd", "ci", "classes", "computer", "conditionals", "continuous-delivery", "continuous-deployment", "continuous-integration", "control-flow", "cpu", "data-types", "decimal", "factorial", 'fibonacci"', "for", "functions", "git", "hardware", "hexadecimal", "I/O", "if", "input/output", "install", "intro", "loops", "memory", "methods", "numerical-systems", "object-oriented", "objects", "oop", "programming", "python", "recursion", "requirements", "revert", "software", "software-engineering", "srs", "tools", "variables", "vcs", "version-control", "while", "binario", "bucles", "condicionales", "control-flujo", "ide", "sistemas-numeracion"] }, taxonomyKeys: ["authors", "categories", "series", "tags"], threshold: 0.6, years: ["2022", "2023"] };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/i18n-js@v0.2.1/assets/mods/i18n/translator.ts
  var Translator = class {
    constructor(translations, fallback) {
      this.translations = translations;
      this.fallback = fallback;
    }
    lang = "";
    getLang() {
      if (this.lang === "") {
        this.lang = document.documentElement.getAttribute("lang") ?? this.fallback;
      }
      return this.lang;
    }
    getTranslations() {
      const lang = this.getLang();
      return this.translations[lang] ?? this.getFallbackTranslations();
    }
    getFallbackTranslations() {
      return this.translations[this.fallback];
    }
    getFallbackTranslation(key) {
      const translations = this.getFallbackTranslations();
      return translations[key] ?? "";
    }
    translate(key, ctx, fallback = "") {
      const translations = this.getTranslations();
      if (!translations) {
        return fallback === "" ? key : fallback;
      }
      const translation = translations[key] ?? this.getFallbackTranslation(key);
      if (!translation) {
        return fallback === "" ? key : fallback;
      }
      if (!ctx) {
        return translation.other;
      }
      let format = ctx.count === 1 ? translation.one : translation.other;
      for (let name in ctx) {
        format = format.replace(`{${name}}`, ctx[name]);
      }
      return format;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/i18n.ts
  var i18n = new Translator(params_default.i18n, params_default.defaultLang);
  var i18n_default = i18n;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/engine.ts
  var import_fuse = __toESM(require_fuse());
  var Engine = class {
    index;
    indexFailed = false;
    initialized = false;
    /**
     * Initialize the search index.
     * 
     * @returns {Promise} 
     */
    init() {
      if (this.initialized) {
        return new Promise((resolve, reject) => {
          const checker = setInterval(() => {
            if (this.index) {
              clearInterval(checker);
              resolve(true);
            } else if (this.indexFailed) {
              clearInterval(checker);
              reject("Index fails");
            }
          }, 50);
        });
      }
      this.initialized = true;
      const promises = new Array();
      for (const i in params_default.indices) {
        const promise = fetch(params_default.indices[i]).then((resp) => resp.json());
        promises.push(promise);
      }
      return Promise.all(promises).then((resp) => {
        let pages = resp[0];
        for (let i = 1; i < resp.length; i++) {
          pages = pages.concat(resp[i]);
        }
        this.index = new import_fuse.default(pages, {
          isCaseSensitive: params_default.case_sensitive,
          minMatchCharLength: params_default.min_match_char_length,
          location: params_default.location,
          threshold: params_default.threshold,
          distance: params_default.distance,
          ignoreLocation: params_default.ignore_location,
          keys: this.keys(),
          includeMatches: true,
          useExtendedSearch: true,
          includeScore: true
        });
      }).catch((err) => {
        this.indexFailed = true;
        throw new Error(err);
      });
    }
    keys() {
      const keys = ["title", "summary", "headings.title", "lang", "year"];
      if (params_default.index_content) {
        keys.push("content");
      }
      for (const taxonomy in params_default.taxonomies) {
        keys.push(taxonomy);
      }
      return keys;
    }
    query;
    results;
    /**
     * Search by the given query and language, then return the results and time.
     * 
     * @param {string} query query string.
     * @param {string} lang language.
     * @param {string} sorting language.
     * @returns {Promise<Record<string, unknown>>}
     */
    search(query, sorting = "", lang = "", years = [], taxonomies = {}) {
      const pattern = this.pattern(query, lang, years, taxonomies);
      const start = (/* @__PURE__ */ new Date()).getTime();
      return new Promise((resolve) => {
        setTimeout(() => {
          if (JSON.stringify(this.query) === JSON.stringify(pattern)) {
            resolve({
              "results": this.sort(this.results, sorting),
              "time": (/* @__PURE__ */ new Date()).getTime() - start
            });
            return;
          }
          this.results = this.index.search(pattern, {
            limit: params_default.max_results
          });
          this.query = pattern;
          return resolve({
            "results": this.sort(this.results, sorting),
            "time": (/* @__PURE__ */ new Date()).getTime() - start
          });
        }, 1);
      });
    }
    /**
     * Generate the search pattern by given query and language.
     * 
     * @param {string} query 
     * @param {string} lang 
     */
    pattern(query, lang, years = [], taxonomies = {}) {
      if (lang === "") {
        return query;
      }
      const p = [
        {
          "$or": [
            { title: query },
            { summary: query },
            { content: query },
            {
              "$path": "headings.title",
              "$val": query
            }
          ]
        }
      ];
      if (lang) {
        p.push({
          lang: "=" + lang
        });
      }
      if (years.length > 0) {
        const yearsConditions = [];
        for (const year of years) {
          yearsConditions.push({
            year: `=${year}`
          });
        }
        p.push({
          "$or": yearsConditions
        });
      }
      for (const taxonomy in taxonomies) {
        if (taxonomies[taxonomy].length === 0) {
          continue;
        }
        const taxonomyConditions = [];
        for (const name of taxonomies[taxonomy]) {
          taxonomyConditions.push({
            [taxonomy]: `="${name}"`
          });
        }
        p.push({
          "$and": taxonomyConditions
        });
      }
      return {
        "$and": p
      };
    }
    /**
     * Sort results.
     * 
     * @param Array results 
     * @param string sorting 
     * @returns 
     */
    sort(results, sorting) {
      switch (sorting) {
        case "date_asc":
          results = results.sort((a, b) => a.item.date - b.item.date);
          break;
        case "date_desc":
          results = results.sort((a, b) => b.item.date - a.item.date);
          break;
      }
      return results;
    }
  };
  var engine = new Engine();
  var engine_default = engine;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/form.ts
  var Form = class {
    constructor(spinner, renderer) {
      this.spinner = spinner;
      this.renderer = renderer;
      this.stallThreshold = params_default.stall_threshold;
    }
    // Original page title.
    pageTitle;
    popstate = false;
    ele;
    input;
    // Search request timeout ID.
    timeoutId = 0;
    // How many milliseconds must elapse before considering the autocomplete experience stalled.
    stallThreshold;
    language;
    sorting;
    years;
    modal = true;
    render() {
      return `<form class="search-form">
  <div class="search-input-group">
    <span class="search-input-icon">${params_default.icons["search"]}</span>
    <span class="search-spinner">${params_default.icons["spinner"]}</span>
    <input type="search" class="search-input search-form-control" placeholder="${i18n_default.translate("input_placeholder")}" disabled/>
    <button class="search-modal-close" type="button">${i18n_default.translate("cancel")}</button>
  </div>
  <div class="search-form-meta">
    <div class="search-panel">
      ${this.renderLanguage()}
      ${this.renderSorting()}
      ${this.renderYears()}
      ${this.renderTaxonomies()}
      <button class="search-panel-action search-expand-toggle${params_default.expand_results_meta ? " active" : ""}" title="Expand">
        <span class="search-panel-action-icon">${params_default.icons["expand"]}</span>
        <span class="search-panel-action-label">${i18n_default.translate("expand")}</span>
      </button>
    </div>
    <div class="search-stat"></div>
  </div>
</form>`;
    }
    renderLanguage() {
      if (params_default.langs.length < 2) {
        return "";
      }
      const lang = document.documentElement.getAttribute("lang") ?? "";
      let label = i18n_default.translate("all");
      let options = `<li class="search-dropdown-item${lang ? "" : " active"}" data-value="">${label}</li>`;
      for (const i in params_default.langs) {
        const item = params_default.langs[i];
        let className = "";
        if (item.lang === lang) {
          className = " active";
          label = item.name;
        }
        options += `<li class="search-dropdown-item${className}" data-value="${item.lang}">${item.name}</li>`;
      }
      return `<div class="search-dropdown search-panel-action search-filter-lang${lang ? " active" : ""}" data-value="${lang}">
  <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="Languages">
    ${params_default.icons["lang"]}
    <span class="search-dropdown-label">${label}</span>
  </button>
  <ul class="search-dropdown-menu">${options}</ul>
</div>`;
    }
    renderSorting() {
      if (params_default.langs.length < 2) {
        return "";
      }
      const defaultSort = i18n_default.translate("sort_by_default");
      return `<div class="search-dropdown search-panel-action search-sorting">
  <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="Sorting">
    ${params_default.icons["sort"]} <span class="search-dropdown-label">${defaultSort}</span>
  </button>
  <ul class="search-dropdown-menu">
    <li class="search-dropdown-item active" data-value="">${defaultSort}</li>
    <li class="search-dropdown-item" data-value="date_asc">${i18n_default.translate("sort_by_date_asc")}</li>
    <li class="search-dropdown-item" data-value="date_desc">${i18n_default.translate("sort_by_date_desc")}</li>
  </ul>
</div>`;
    }
    renderYears() {
      if (params_default.years.length === 0) {
        return "";
      }
      let items = "";
      for (const year of params_default.years) {
        items += `<li class="search-dropdown-item" data-value="${year}">${year}</li>`;
      }
      const label = i18n_default.translate("years");
      return `<div class="search-dropdown search-panel-action search-years" multiple>
        <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="${label}">
          ${params_default.icons["year"]} <span class="search-dropdown-label">${label}</span>
        </button>
        <ul class="search-dropdown-menu">${items}</ul>
      </div>`;
    }
    renderTaxonomies() {
      let v = "";
      for (const name in params_default.taxonomies) {
        v += this.renderTaxonomy(name, params_default.taxonomies[name]);
      }
      return v;
    }
    renderTaxonomy(name, items) {
      let v = "";
      for (const name2 of items) {
        v += `<li class="search-dropdown-item" data-value="${name2}">${name2}</li>`;
      }
      const label = i18n_default.translate("taxonomy_" + name, null, name);
      return `<div class="search-dropdown search-panel-action search-taxonomies search-taxonomies-${name}" multiple>
        <button class="search-dropdown-toggle" type="button" aria-expanded="false" title="${label}">
          ${params_default.icons["taxonomies"]} <span class="search-dropdown-label">${label}</span>
        </button>
        <ul class="search-dropdown-menu">${v}</ul>
      </div>`;
    }
    initialized = false;
    // Initialize the form after rendering.
    init() {
      if (this.initialized) {
        return;
      }
      this.initialized = true;
      this.pageTitle = document.title;
      this.ele = document.querySelector(".search-form");
      this.ele.addEventListener("submit", (e) => {
        e.preventDefault();
        this.submit();
      });
      this.input = this.ele.querySelector(".search-input");
      this.input.addEventListener("keyup", () => {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => {
          this.submit();
        }, this.stallThreshold);
      });
      this.input.addEventListener("search", () => {
        this.submit();
      });
      this.language = this.ele.querySelector(".search-filter-lang");
      this.language.addEventListener("change", () => {
        this.submit();
      });
      this.sorting = this.ele.querySelector(".search-sorting");
      this.sorting.addEventListener("change", () => {
        this.submit();
      });
      this.years = this.ele.querySelector(".search-years");
      this.years?.addEventListener("change", () => {
        this.submit();
      });
      this.ele.querySelectorAll(".search-taxonomies").forEach((el) => {
        el.addEventListener("change", () => {
          this.submit();
        });
      });
      engine_default.init().then(() => {
        this.input.removeAttribute("disabled");
      }).catch((err) => {
        this.input.value = i18n_default.translate("index_fails");
        throw new Error(err);
      }).then(() => {
        if (!this.modal) {
          this.fillInputByURL();
          this.submit();
        }
      }).finally(() => {
        this.focus();
        this.spinner.hide();
      });
      if (!this.modal) {
        window.addEventListener("popstate", () => {
          this.popstate = true;
          this.fillInputByURL();
          this.submit();
        });
      }
      const expand = this.ele.querySelector(".search-expand-toggle");
      expand?.addEventListener("click", (e) => {
        if (expand.classList.contains("active")) {
          expand.classList.remove("active");
        } else {
          expand.classList.add("active");
        }
        this.renderer.expand();
        e.preventDefault();
      });
    }
    fillInputByURL() {
      const params = new URLSearchParams(location.search);
      const q = params.get("q");
      if (q) {
        this.input.value = q.trim();
      }
    }
    submit() {
      const query = this.getQuery();
      this.updatePage(query);
      if (query === "") {
        this.renderer.render(query, [], 0);
        return;
      }
      this.spinner.show();
      const sorting = this.getSorting();
      const lang = this.getLanguage();
      const years = this.getYears();
      const taxonomies = this.getTaxonomies();
      engine_default.search(query, sorting, lang, years, taxonomies).then(({ results, time }) => {
        this.renderer.render(query, results, time);
      }).finally(() => {
        this.spinner.hide();
      });
    }
    // Update the page's URL and title when performing a search on single page.
    updatePage(query) {
      if (this.modal || this.popstate) {
        return;
      }
      this.popstate = false;
      const title = (query ? `${query} - ` : "") + this.pageTitle;
      const url = `${window.location.pathname}?q=${encodeURIComponent(query)}`;
      window.history.pushState(null, title, url);
      document.title = title;
    }
    focus() {
      this.input.focus();
    }
    setQuery(q) {
      this.input.value = q;
    }
    getQuery() {
      return this.input.value.trim();
    }
    getLanguage() {
      return this.language ? this.language.getAttribute("data-value") ?? "" : "";
    }
    getSorting() {
      return this.sorting.getAttribute("data-value") ?? "";
    }
    getYears() {
      const v = [];
      this.years?.querySelectorAll(".search-dropdown-item.active").forEach((item) => {
        v.push(item.getAttribute("data-value") ?? "");
      });
      return v;
    }
    getTaxonomies() {
      const v = {};
      for (const taxonomy in params_default.taxonomies) {
        const terms = [];
        document.querySelectorAll(`.search-taxonomies-${taxonomy} .search-dropdown-item.active`).forEach((item) => {
          terms.push(item.getAttribute("data-value") ?? "");
        });
        v[taxonomy] = terms;
      }
      return v;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/spinner.ts
  var Spinner = class {
    constructor(ele) {
      this.ele = ele;
    }
    getElement() {
      if (!(this.ele instanceof HTMLElement)) {
        this.ele = document.querySelector(this.ele);
      }
      return this.ele;
    }
    searchIcon;
    getSearchIcon() {
      if (!this.searchIcon) {
        this.searchIcon = this.getElement().previousElementSibling;
      }
      return this.searchIcon;
    }
    hide() {
      setTimeout(() => {
        this.getSearchIcon().classList.remove("disabled");
        this.getElement().classList.add("disabled");
      }, 200);
    }
    show() {
      this.getSearchIcon().classList.add("disabled");
      this.getElement().classList.remove("disabled");
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/renderer.ts
  var Renderer = class {
    constructor(container, statistics, spinner) {
      this.container = container;
      this.statistics = statistics;
      this.spinner = spinner;
      this.paginate = Math.max(this.paginate, params_default.paginate);
    }
    initialized = false;
    lang;
    page = 1;
    paginate = 20;
    query = "";
    results;
    time = 0;
    getContainer() {
      if (!(this.container instanceof HTMLElement)) {
        this.container = document.querySelector(this.container);
        if (params_default.expand_results_meta) {
          this.container.classList.add("expanded");
        }
      }
      return this.container;
    }
    getStatistics() {
      if (!(this.statistics instanceof HTMLElement)) {
        this.statistics = document.querySelector(this.statistics);
      }
      return this.statistics;
    }
    getLang() {
      if (!this.lang) {
        this.lang = document.documentElement.getAttribute("lang") ?? params_default.defaultLang;
      }
      return this.lang;
    }
    clean() {
      this.getContainer().innerHTML = "";
    }
    icon(page) {
      return page.kind in params_default.icons ? params_default.icons[page.kind] : params_default.icons.page;
    }
    taxonomies(page) {
      let v = "";
      for (const key of params_default.taxonomyKeys) {
        const terms = page[key];
        if (!terms) {
          continue;
        }
        for (const name of terms) {
          v += `<span class="search-result-taxonomy">${name}</span>`;
        }
      }
      return v;
    }
    date(page) {
      if (page.date <= 0) {
        return "";
      }
      return new Date(page.date * 1e3).toLocaleDateString(this.getLang(), { dateStyle: "long" });
    }
    title(result) {
      return this.highlight(result.item.title, result.matches.filter((match) => match.key === "title"));
    }
    desc(result) {
      if (!result.item.summary || result.item.summary === "") {
        return "";
      }
      return '<div class="search-result-desc">' + this.highlight(result.item.summary, result.matches.filter((match) => match.key === "summary")) + "</div>";
    }
    contentContextLength = 20;
    content(result) {
      if (!params_default.index_content || !result.item.content) {
        return "";
      }
      const matches = result.matches.filter((match) => match.key === "content");
      let content = this.highlight(result.item.content, matches);
      const first = content.indexOf("<mark>");
      if (first > 0) {
        content = (first > this.contentContextLength ? "..." : "") + content.substring(Math.max(0, first - this.contentContextLength));
      }
      return `<div class="search-result-content-content">${content}</div>`;
    }
    highlight(s, matches) {
      if (matches.length === 0) {
        return s;
      }
      let ret = "";
      let start = 0;
      for (const i in matches) {
        const match = matches[i];
        for (const j in match.indices) {
          const idxStart = Math.max(start, match.indices[j][0]);
          const idxEnd = match.indices[j][1] + 1;
          if (idxStart >= idxEnd) {
            continue;
          }
          ret += `${s.substring(start, idxStart)}<mark>${s.substring(idxStart, idxEnd)}</mark>`;
          start = idxEnd;
        }
      }
      ret += s.substring(start);
      return ret;
    }
    render(query, results, time) {
      this.init();
      this.clean();
      this.getContainer().parentElement.scrollTop = 0;
      this.page = 1;
      this.results = results;
      this.time = time;
      this.query = query;
      this.renderStat();
      this.renderPage();
    }
    expand() {
      const container = this.getContainer();
      if (container.classList.contains("expanded")) {
        container.classList.remove("expanded");
      } else {
        container.classList.add("expanded");
      }
    }
    init() {
      if (this.initialized) {
        return;
      }
      this.initialized = true;
      const container = this.getContainer();
      const wrapper = container.parentElement;
      wrapper?.addEventListener("scroll", () => {
        if (wrapper.scrollHeight - wrapper.scrollTop === wrapper.clientHeight) {
          this.loadMore();
        }
      });
      const observe = (mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "childList") {
            for (const node of mutation.addedNodes) {
              const action = node.querySelector(".search-result-action-meta");
              action?.addEventListener("click", (e) => {
                this.toggleMeta(node.querySelector(".search-result-meta"));
                e.preventDefault();
              });
              node.addEventListener("mousemove", () => {
                this.activeResult(node);
              });
            }
          }
        }
      };
      const observer = new MutationObserver(observe);
      observer.observe(container, { childList: true });
    }
    activeResult(target) {
      if (target.ariaSelected === "true") {
        return;
      }
      this.getContainer().querySelectorAll(".search-result").forEach((result) => {
        result.ariaSelected = "false";
      });
      target.ariaSelected = "true";
    }
    toggleMeta(meta) {
      if (meta.classList.contains("show")) {
        meta.classList.remove("show");
        return;
      }
      meta.classList.add("show");
    }
    renderStat() {
      const stat = this.getStatistics();
      if (this.query === "") {
        stat.innerHTML = "";
        return;
      }
      stat.innerHTML = i18n_default.translate("search_stat", {
        count: this.results.length,
        total: `<span class="search-stat-results">${this.results.length}</span>`,
        time: this.prettifyTime()
      });
    }
    prettifyTime() {
      if (this.time >= 100) {
        return parseFloat((this.time / 1e3).toFixed(2)) + "s";
      }
      return this.time + "ms";
    }
    score(score) {
      return ((1 - score) * 100).toFixed(0) + "%";
    }
    loadMore() {
      if (this.page * this.paginate > this.results.length) {
        return;
      }
      this.spinner.show();
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.renderPage(++this.page));
        }, 1);
      }).finally(() => {
        this.spinner.hide();
      });
    }
    renderPage(page = 1) {
      const max = page * this.paginate;
      const min = max - this.paginate;
      let results = "";
      for (let i = min; i < this.results.length && i < max; i++) {
        const result = this.results[i];
        results += `<a title="${result.item.title}" href="${result.item.url}" class="search-result" aria-selected="false">
  <div class="search-result-icon">${this.icon(result.item)}</div>
  <div class="search-result-content">
    <div class="search-result-title">${this.title(result)}</div>
    ${this.desc(result)}
  </div>
  <div class="search-result-meta">
    <span class="search-result-score">${this.score(result.score)}</span>
    <span class="search-result-lang">${result.item.lang}</span>
    <span class="search-result-date">${this.date(result.item)}</span>
    ${this.taxonomies(result.item)}
    ${this.content(result)}
  </div>
  <div class="search-result-actions">
    <div class="search-result-action search-result-action-meta">${params_default.icons["meta"]}</div>
  </div>
</a>`;
        results += this.renderHeadings(result);
      }
      this.getContainer().insertAdjacentHTML("beforeend", results);
    }
    renderHeadings(result) {
      if (!result.item.headings || result.item.headings.length == 0) {
        return "";
      }
      const matches = result.matches.filter((match) => match.key === "headings.title");
      if (matches.length == 0) {
        return "";
      }
      let headings = "";
      for (const i in result.item.headings) {
        const heading = result.item.headings[i];
        for (const j in matches) {
          if (matches[j].value !== heading.title) {
            continue;
          }
          headings += `<a title="${heading.title} - ${result.item.title}" href="${result.item.url}#${heading.anchor}" class="search-result search-result-heading">
  <div class="search-result-icon search-result-heading-icon">${params_default.icons["heading"]}</div>
  <div class="search-result-content">
    <div class="search-result-title">${this.highlight(heading.title, [matches[j]])}</div>
    <div class="search-result-desc">${result.item.title}</div>
  </div>
</a>`;
        }
      }
      return headings;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/shortcuts.ts
  var Navigate = {
    kbds: ["\u2191", "\u2193"],
    action: i18n_default.translate("to_navigate")
  };
  var Select = {
    kbds: ["\u23CE"],
    action: i18n_default.translate("to_select")
  };
  var Shortcuts = class {
    constructor(shortcuts) {
      this.shortcuts = shortcuts;
    }
    render() {
      let shortcuts = "";
      for (const i in this.shortcuts) {
        const shortcut = this.shortcuts[i];
        shortcuts += `<span class="search-shortcut">
${this.renderKbds(shortcut.kbds)}
<span class="search-shortcut-action">${shortcut["action"]}</span>
</span>`;
      }
      return `<div class="search-shortcuts">${shortcuts}</div>`;
    }
    renderKbds(kbds, wrap = false) {
      let s = "";
      for (const kbd of kbds) {
        if (kbd instanceof Array) {
          s += this.renderKbds(kbd, true);
          continue;
        }
        const temp = `<kbd class="search-shortcut-kbd">${kbd}</kbd>`;
        s += wrap ? `<span class="search-shortcut-kbds">${temp}</span>` : temp;
      }
      return s;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/modal.ts
  var searchShortcut = {
    kbds: [params_default.shortcut_search],
    action: i18n_default.translate("to_search")
  };
  var closeShortcut = {
    kbds: [params_default.shortcut_close],
    action: i18n_default.translate("to_close")
  };
  var Modal = class {
    wrapper;
    container;
    form;
    shortcuts;
    constructor() {
      const spinner = new Spinner(".search-modal .search-spinner");
      const renderer = new Renderer(".search-modal .search-results", ".search-modal .search-stat", spinner);
      this.form = new Form(spinner, renderer);
      this.shortcuts = new Shortcuts([
        closeShortcut,
        searchShortcut,
        Navigate,
        Select
      ]);
    }
    init() {
      this.wrapper = document.querySelector(params_default.modal_container);
      this.render();
      params_default.lazy_loading === false && this.form.init();
      this.container.addEventListener("click", (e) => {
        if (!e.target || !(e.target instanceof HTMLElement)) {
          return;
        }
        if (!e.target.closest(".search-modal")) {
          this.hide();
          e.preventDefault();
        }
        if (e.target.closest(".search-result")) {
          this.hide();
        }
      });
      document.querySelectorAll(params_default.modal_toggle_selector).forEach((toggle) => {
        toggle.addEventListener("click", () => {
          this.show();
        });
      });
      this.container.querySelectorAll(".search-modal-close").forEach((toggle) => {
        toggle.addEventListener("click", () => {
          this.hide();
        });
      });
      if (params_default.shortcut_close.length > 0) {
        keyboard_default.attach(params_default.shortcut_close, () => {
          this.hide();
        });
      }
      if (params_default.shortcut_search.length > 0) {
        keyboard_default.attach(params_default.shortcut_search, (e) => {
          e.preventDefault();
          this.show();
        });
      }
    }
    render() {
      this.container = document.createElement("div");
      this.container.className = "search-modal-container";
      this.container.innerHTML = `<div class="search-modal">
  <div class="search-modal-header">${this.form.render()}</div>
  <div class="search-modal-body"><div class="search-results"></div></div>
  ${this.renderFooter()}
</div>`;
      this.wrapper.appendChild(this.container);
    }
    renderFooter() {
      return `<div class="search-modal-footer">${this.shortcuts.render()}</div>`;
    }
    hide() {
      document.body.classList.remove("search-modal-active");
      this.container.classList.remove("active");
    }
    show() {
      this.form.init();
      document.body.classList.add("search-modal-active");
      this.container.classList.add("active");
      this.form.focus();
    }
  };
  (() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      if (params_default.modal_container !== "") {
        new Modal().init();
      }
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/search@v0.8.1/assets/search/js/search.ts
  var Search = class {
    container;
    form;
    shortcuts;
    constructor() {
      const container = document.querySelector(".search-container");
      if (!container) {
        return;
      }
      this.container = container;
      const spinner = new Spinner(".search-container .search-spinner");
      const renderer = new Renderer(".search-container .search-results", ".search-container .search-stat", spinner);
      this.form = new Form(spinner, renderer);
      this.form.modal = false;
      this.shortcuts = new Shortcuts([Navigate, Select]);
      this.render();
    }
    render() {
      const html = `<div class="search-header">${this.form.render()}</div>
<div class="search-body"><div class="search-results"></div></div>
<div class="search-footer">${this.shortcuts.render()}</div>`;
      this.container.insertAdjacentHTML("beforeend", html);
      this.form.init();
    }
  };
  (() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      new Search();
    });
  })();
})();
