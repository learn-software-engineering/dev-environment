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
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2@v2.21100.20000/package/dist/cjs/popper.js
  var require_popper = __commonJS({
    "ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2@v2.21100.20000/package/dist/cjs/popper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement2(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      function getBoundingClientRect(element, includeScale) {
        if (includeScale === void 0) {
          includeScale = false;
        }
        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (isHTMLElement(element) && includeScale) {
          var offsetHeight = element.offsetHeight;
          var offsetWidth = element.offsetWidth;
          if (offsetWidth > 0) {
            scaleX = round(rect.width) / offsetWidth || 1;
          }
          if (offsetHeight > 0) {
            scaleY = round(rect.height) / offsetHeight || 1;
          }
        }
        return {
          width: rect.width / scaleX,
          height: rect.height / scaleY,
          top: rect.top / scaleY,
          right: rect.right / scaleX,
          bottom: rect.bottom / scaleY,
          left: rect.left / scaleX,
          x: rect.left / scaleX,
          y: rect.top / scaleY
        };
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
          return getWindowScroll(node);
        } else {
          return getHTMLElementScroll(node);
        }
      }
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement2(element) ? element.ownerDocument : (
          // $FlowFixMe[prop-missing]
          element.document
        )) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle2(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
          isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }
        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") {
          return element;
        }
        return (
          // this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || // DOM Element detected
          (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          getDocumentElement(element)
        );
      }
      function getScrollParent(node) {
        if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
          return node;
        }
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) {
          list = [];
        }
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : (
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)))
        );
      }
      function isTableElement(element) {
        return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
        getComputedStyle2(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
        var isIE = navigator.userAgent.indexOf("Trident") !== -1;
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle2(element);
          if (elementCss.position === "fixed") {
            return null;
          }
        }
        var currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle2(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      function getOffsetParent(element) {
        var window2 = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      var top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [top, bottom, right, left];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
        return acc.concat([placement + "-" + start, placement + "-" + end]);
      }, []);
      var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
        return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
      }, []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
      function order(modifiers) {
        var map = /* @__PURE__ */ new Map();
        var visited = /* @__PURE__ */ new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
          map.set(modifier.name, modifier);
        });
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
          if (!visited.has(modifier.name)) {
            sort(modifier);
          }
        });
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce(function(acc, phase) {
          return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      function debounce(fn) {
        var pending;
        return function() {
          if (!pending) {
            pending = new Promise(function(resolve) {
              Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn());
              });
            });
          }
          return pending;
        };
      }
      function format(str) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return [].concat(args).reduce(function(p, c) {
          return p.replace(/%s/, c);
        }, str);
      }
      var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
      var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
      var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
      function validateModifiers(modifiers) {
        modifiers.forEach(function(modifier) {
          [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
            return self2.indexOf(value) === index;
          }).forEach(function(key) {
            switch (key) {
              case "name":
                if (typeof modifier.name !== "string") {
                  console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                }
                break;
              case "enabled":
                if (typeof modifier.enabled !== "boolean") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                }
                break;
              case "phase":
                if (modifierPhases.indexOf(modifier.phase) < 0) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
                }
                break;
              case "fn":
                if (typeof modifier.fn !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "effect":
                if (modifier.effect != null && typeof modifier.effect !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "requires":
                if (modifier.requires != null && !Array.isArray(modifier.requires)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                }
                break;
              case "requiresIfExists":
                if (!Array.isArray(modifier.requiresIfExists)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                }
                break;
              case "options":
              case "data":
                break;
              default:
                console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                  return '"' + s + '"';
                }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
              if (modifiers.find(function(mod) {
                return mod.name === requirement;
              }) == null) {
                console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
              }
            });
          });
        });
      }
      function uniqueBy(arr, fn) {
        var identifiers = /* @__PURE__ */ new Set();
        return arr.filter(function(item) {
          var identifier = fn(item);
          if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
          }
        });
      }
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function(merged2, current) {
          var existing = merged2[current.name];
          merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged2;
        }, {});
        return Object.keys(merged).map(function(key) {
          return merged[key];
        });
      }
      function getViewportRect(element) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle2(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element) {
        var rect = getBoundingClientRect(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement2(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents2 = listScrollParents(getParentNode(element));
        var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement2(clipperElement)) {
          return [];
        }
        return clippingParents2.filter(function(clippingParent) {
          return isElement2(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle2(clippingParent).position !== "static" : true);
        });
      }
      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents2[0];
        var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
        var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference2.x + reference2.width / 2 - element.width / 2;
        var commonY = reference2.y + reference2.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
          case top:
            offsets = {
              x: commonX,
              y: reference2.y - element.height
            };
            break;
          case bottom:
            offsets = {
              x: commonX,
              y: reference2.y + reference2.height
            };
            break;
          case right:
            offsets = {
              x: reference2.x + reference2.width,
              y: commonY
            };
            break;
          case left:
            offsets = {
              x: reference2.x - element.width,
              y: commonY
            };
            break;
          default:
            offsets = {
              x: reference2.x,
              y: reference2.y
            };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
            case start:
              offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
              break;
            case end:
              offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
              break;
          }
        }
        return offsets;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement2(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets2 = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset2 = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
      var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return !args.some(function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        });
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper3(reference2, popper2, options) {
          if (options === void 0) {
            options = defaultOptions;
          }
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference2,
              popper: popper2
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options2);
              state.scrollParents = {
                reference: isElement2(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                popper: listScrollParents(popper2)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter(function(m) {
                return m.enabled;
              });
              if (true) {
                var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                  var name = _ref.name;
                  return name;
                });
                validateModifiers(modifiers);
                if (getBasePlacement(state.options.placement) === auto) {
                  var flipModifier = state.orderedModifiers.find(function(_ref2) {
                    var name = _ref2.name;
                    return name === "flip";
                  });
                  if (!flipModifier) {
                    console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
                  }
                }
                var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
                if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
                  return parseFloat(margin);
                })) {
                  console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
                }
              }
              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }
              var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
              if (!areValidElements(reference3, popper3)) {
                if (true) {
                  console.error(INVALID_ELEMENT_ERROR);
                }
                return;
              }
              state.rects = {
                reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper3)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach(function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              var __debug_loops__ = 0;
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (true) {
                  __debug_loops__ += 1;
                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR);
                    break;
                  }
                }
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn === "function") {
                  state = fn({
                    state,
                    options: _options,
                    name,
                    instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce(function() {
              return new Promise(function(resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference2, popper2)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }
            return instance;
          }
          instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state2);
            }
          });
          function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
              var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
              if (typeof effect2 === "function") {
                var cleanupFn = effect2({
                  state,
                  name,
                  instance,
                  options: options2
                });
                var noopFn = function noopFn2() {
                };
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
              return fn();
            });
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var passive = {
        passive: true
      };
      function effect$2(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window2 = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.addEventListener("resize", instance.update, passive);
        }
        return function() {
          if (scroll) {
            scrollParents.forEach(function(scrollParent) {
              scrollParent.removeEventListener("scroll", instance.update, passive);
            });
          }
          if (resize) {
            window2.removeEventListener("resize", instance.update, passive);
          }
        };
      }
      var eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {
        },
        effect: effect$2,
        data: {}
      };
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      var popperOffsets$1 = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref) {
        var x = _ref.x, y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper2);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent = offsetParent;
          if (placement === top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : (
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp]
            );
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : (
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp]
            );
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref4) {
        var state = _ref4.state, options = _ref4.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        if (true) {
          var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
          if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
            return transitionProperty.indexOf(property) >= 0;
          })) {
            console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
          }
        }
        var commonStyles = {
          placement: getBasePlacement(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive,
            roundOffsets
          })));
        }
        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets
          })));
        }
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      var computeStyles$1 = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) {
              element.removeAttribute(name2);
            } else {
              element.setAttribute(name2, value === true ? "" : value);
            }
          });
        });
      }
      function effect$1(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return function() {
          Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
              style2[property] = "";
              return style2;
            }, {});
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      }
      var applyStyles$1 = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: effect$1,
        requires: ["computeStyles"]
      };
      function distanceAndSkiddingToXY(placement, rects, offset2) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
          placement
        })) : offset2, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = placements.reduce(function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      var offset$1 = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: ["popperOffsets"],
        fn: offset
      };
      var hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash$1[matched];
        });
      }
      var hash = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
          return hash[matched];
        });
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
          return getVariation(placement2) === variation;
        }) : basePlacements;
        var allowedPlacements = placements$1.filter(function(placement2) {
          return allowedAutoPlacements.indexOf(placement2) >= 0;
        });
        if (allowedPlacements.length === 0) {
          allowedPlacements = placements$1;
          if (true) {
            console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
          }
        }
        var overflows = allowedPlacements.reduce(function(acc, placement2) {
          acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement(placement2)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
          return overflows[a] - overflows[b];
        });
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) {
          return [];
        }
        var oppositePlacement = getOppositePlacement(placement);
        return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) {
          return;
        }
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
          return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement2);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = /* @__PURE__ */ new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements2[0];
        for (var i = 0; i < placements2.length; i++) {
          var placement = placements2[i];
          var _basePlacement = getBasePlacement(placement);
          var isStartVariation = getVariation(placement) === start;
          var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
          }
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }
          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }
          if (checks.every(function(check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2) {
                return checks2.slice(0, _i2).every(function(check) {
                  return check;
                });
              }
            });
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break")
              break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      var flip$1 = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {
          _skip: false
        }
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      function withinMaxClamp(min2, value, max2) {
        var v = within(min2, value, max2);
        return v > max2 ? max2 : v;
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets2) {
          return;
        }
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset2 = popperOffsets2[mainAxis];
          var min$1 = offset2 + overflow[mainSide];
          var max$1 = offset2 - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset2 + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      var preventOverflow$1 = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
      };
      var toPaddingObject = function toPaddingObject2(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [left, right].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets2) {
          return;
        }
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
        var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min2 = paddingObject[minProp];
        var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset2 = within(min2, center, max2);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
      }
      function effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) {
          return;
        }
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return;
          }
        }
        if (true) {
          if (!isHTMLElement(arrowElement)) {
            console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
          }
        }
        if (!contains(state.elements.popper, arrowElement)) {
          if (true) {
            console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
          }
          return;
        }
        state.elements.arrow = arrowElement;
      }
      var arrow$1 = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(function(side) {
          return overflow[side] >= 0;
        });
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      var hide$1 = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: hide
      };
      var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
      var createPopper$1 = /* @__PURE__ */ popperGenerator({
        defaultModifiers: defaultModifiers$1
      });
      var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
      var createPopper2 = /* @__PURE__ */ popperGenerator({
        defaultModifiers
      });
      exports.applyStyles = applyStyles$1;
      exports.arrow = arrow$1;
      exports.computeStyles = computeStyles$1;
      exports.createPopper = createPopper2;
      exports.createPopperLite = createPopper$1;
      exports.defaultModifiers = defaultModifiers;
      exports.detectOverflow = detectOverflow;
      exports.eventListeners = eventListeners;
      exports.flip = flip$1;
      exports.hide = hide$1;
      exports.offset = offset$1;
      exports.popperGenerator = popperGenerator;
      exports.popperOffsets = popperOffsets$1;
      exports.preventOverflow = preventOverflow$1;
    }
  });

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.11/dist/bigger-picture.umd.js
  var require_bigger_picture_umd = __commonJS({
    "ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.11/dist/bigger-picture.umd.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.BiggerPicture = factory());
      })(exports, function() {
        function noop2() {
        }
        const identity = (x) => x;
        function assign(tar, src) {
          for (const k in src)
            tar[k] = src[k];
          return tar;
        }
        function run(fn) {
          return fn();
        }
        function run_all(fns) {
          fns.forEach(run);
        }
        function is_function(thing) {
          return typeof thing === "function";
        }
        function not_equal(a, b) {
          return a != a ? b == b : a !== b;
        }
        function is_empty(obj) {
          return Object.keys(obj).length === 0;
        }
        function subscribe(store, ...callbacks) {
          if (store == null) {
            return noop2;
          }
          const unsub = store.subscribe(...callbacks);
          return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
        }
        function component_subscribe(component, store, callback) {
          component.$$.on_destroy.push(subscribe(store, callback));
        }
        function action_destroyer(action_result) {
          return action_result && is_function(action_result.destroy) ? action_result.destroy : noop2;
        }
        let now = () => globalThis.performance.now();
        let raf = (cb) => requestAnimationFrame(cb);
        const tasks = /* @__PURE__ */ new Set();
        function run_tasks(now2) {
          tasks.forEach((task) => {
            if (!task.c(now2)) {
              tasks.delete(task);
              task.f();
            }
          });
          if (tasks.size !== 0)
            raf(run_tasks);
        }
        function loop(callback) {
          let task;
          if (tasks.size === 0)
            raf(run_tasks);
          return {
            promise: new Promise((fulfill) => {
              tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
              tasks.delete(task);
            }
          };
        }
        function append(target, node) {
          target.appendChild(node);
        }
        function insert(target, node, anchor) {
          target.insertBefore(node, anchor || null);
        }
        function detach(node) {
          node.parentNode.removeChild(node);
        }
        function element(name) {
          return document.createElement(name);
        }
        function text(data) {
          return document.createTextNode(data);
        }
        function empty() {
          return text("");
        }
        function listen(node, event, handler, options) {
          node.addEventListener(event, handler, options);
          return () => node.removeEventListener(event, handler, options);
        }
        function attr(node, attribute, value) {
          if (value == null)
            node.removeAttribute(attribute);
          else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
        }
        function set_style(node, key, value, important) {
          if (value === null) {
            node.style.removeProperty(key);
          } else {
            node.style.setProperty(key, value);
          }
        }
        function toggle_class(element2, name, toggle) {
          element2.classList[toggle ? "add" : "remove"](name);
        }
        function custom_event(type, detail, bubbles = false) {
          const e = document.createEvent("CustomEvent");
          e.initCustomEvent(type, bubbles, false, detail);
          return e;
        }
        let stylesheet;
        let active = 0;
        let current_rules = {};
        function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
          const step = 16.666 / duration;
          let keyframes = "{\n";
          for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
          }
          const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
          const name = `_bp_${Math.round(Math.random() * 1e9)}_${uid}`;
          if (!current_rules[name]) {
            if (!stylesheet) {
              const style = element("style");
              document.head.appendChild(style);
              stylesheet = style.sheet;
            }
            current_rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
          }
          const animation = node.style.animation || "";
          node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
          active += 1;
          return name;
        }
        function delete_rule(node, name) {
          node.style.animation = (node.style.animation || "").split(", ").filter(
            name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("_bp") === -1
            // remove all Svelte animations
          ).join(", ");
          if (name && !--active)
            clear_rules();
        }
        function clear_rules() {
          raf(() => {
            if (active)
              return;
            let i = stylesheet.cssRules.length;
            while (i--)
              stylesheet.deleteRule(i);
            current_rules = {};
          });
        }
        let current_component;
        function set_current_component(component) {
          current_component = component;
        }
        const dirty_components = [];
        const binding_callbacks = [];
        const render_callbacks = [];
        const flush_callbacks = [];
        const resolved_promise = Promise.resolve();
        let update_scheduled = false;
        function schedule_update() {
          if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
          }
        }
        function add_render_callback(fn) {
          render_callbacks.push(fn);
        }
        const seen_callbacks = /* @__PURE__ */ new Set();
        let flushidx = 0;
        function flush() {
          const saved_component = current_component;
          do {
            while (flushidx < dirty_components.length) {
              const component = dirty_components[flushidx];
              flushidx++;
              set_current_component(component);
              update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
              binding_callbacks.pop()();
            for (let i = 0; i < render_callbacks.length; i += 1) {
              const callback = render_callbacks[i];
              if (!seen_callbacks.has(callback)) {
                seen_callbacks.add(callback);
                callback();
              }
            }
            render_callbacks.length = 0;
          } while (dirty_components.length);
          while (flush_callbacks.length) {
            flush_callbacks.pop()();
          }
          update_scheduled = false;
          seen_callbacks.clear();
          set_current_component(saved_component);
        }
        function update($$) {
          if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
          }
        }
        let promise;
        function wait() {
          if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
              promise = null;
            });
          }
          return promise;
        }
        function dispatch(node, direction, kind) {
          node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
        }
        const outroing = /* @__PURE__ */ new Set();
        let outros;
        function group_outros() {
          outros = {
            r: 0,
            c: [],
            p: outros
            // parent group
          };
        }
        function check_outros() {
          if (!outros.r) {
            run_all(outros.c);
          }
          outros = outros.p;
        }
        function transition_in(block, local) {
          if (block && block.i) {
            outroing.delete(block);
            block.i(local);
          }
        }
        function transition_out(block, local, detach2, callback) {
          if (block && block.o) {
            if (outroing.has(block))
              return;
            outroing.add(block);
            outros.c.push(() => {
              outroing.delete(block);
              if (callback) {
                if (detach2)
                  block.d(1);
                callback();
              }
            });
            block.o(local);
          }
        }
        const null_transition = { duration: 0 };
        function create_in_transition(node, fn, params) {
          let config = fn(node, params);
          let running = false;
          let animation_name;
          let task;
          let uid = 0;
          function cleanup() {
            if (animation_name)
              delete_rule(node, animation_name);
          }
          function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop2, css } = config || null_transition;
            if (css)
              animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
            tick(0, 1);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            if (task)
              task.abort();
            running = true;
            add_render_callback(() => dispatch(node, true, "start"));
            task = loop((now2) => {
              if (running) {
                if (now2 >= end_time) {
                  tick(1, 0);
                  dispatch(node, true, "end");
                  cleanup();
                  return running = false;
                }
                if (now2 >= start_time) {
                  const t = easing((now2 - start_time) / duration);
                  tick(t, 1 - t);
                }
              }
              return running;
            });
          }
          let started = false;
          return {
            start() {
              if (started)
                return;
              started = true;
              delete_rule(node);
              if (is_function(config)) {
                config = config();
                wait().then(go);
              } else {
                go();
              }
            },
            invalidate() {
              started = false;
            },
            end() {
              if (running) {
                cleanup();
                running = false;
              }
            }
          };
        }
        function create_out_transition(node, fn, params) {
          let config = fn(node, params);
          let running = true;
          let animation_name;
          const group = outros;
          group.r += 1;
          function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop2, css } = config || null_transition;
            if (css)
              animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            add_render_callback(() => dispatch(node, false, "start"));
            loop((now2) => {
              if (running) {
                if (now2 >= end_time) {
                  tick(0, 1);
                  dispatch(node, false, "end");
                  if (!--group.r) {
                    run_all(group.c);
                  }
                  return false;
                }
                if (now2 >= start_time) {
                  const t = easing((now2 - start_time) / duration);
                  tick(1 - t, t);
                }
              }
              return running;
            });
          }
          if (is_function(config)) {
            wait().then(() => {
              config = config();
              go();
            });
          } else {
            go();
          }
          return {
            end(reset) {
              if (reset && config.tick) {
                config.tick(1, 0);
              }
              if (running) {
                if (animation_name)
                  delete_rule(node, animation_name);
                running = false;
              }
            }
          };
        }
        function create_component(block) {
          block && block.c();
        }
        function mount_component(component, target, anchor, customElement) {
          const { fragment, on_mount, on_destroy, after_update } = component.$$;
          fragment && fragment.m(target, anchor);
          if (!customElement) {
            add_render_callback(() => {
              const new_on_destroy = on_mount.map(run).filter(is_function);
              if (on_destroy) {
                on_destroy.push(...new_on_destroy);
              } else {
                run_all(new_on_destroy);
              }
              component.$$.on_mount = [];
            });
          }
          after_update.forEach(add_render_callback);
        }
        function destroy_component(component, detaching) {
          const $$ = component.$$;
          if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
          }
        }
        function make_dirty(component, i) {
          if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
          }
          component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
        }
        function init(component, options, instance2, create_fragment2, not_equal2, props, append_styles, dirty = [-1]) {
          const parent_component = current_component;
          set_current_component(component);
          const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop2,
            not_equal: not_equal2,
            bound: {},
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: {},
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
          };
          append_styles && append_styles($$.root);
          let ready = false;
          $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
              if (!$$.skip_bound && $$.bound[i])
                $$.bound[i](value);
              if (ready)
                make_dirty(component, i);
            }
            return ret;
          }) : [];
          $$.update();
          ready = true;
          run_all($$.before_update);
          $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
          if (options.target) {
            {
              $$.fragment && $$.fragment.c();
            }
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
          }
          set_current_component(parent_component);
        }
        class SvelteComponent {
          $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop2;
          }
          $on(type, callback) {
            const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
            callbacks.push(callback);
            return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                callbacks.splice(index, 1);
            };
          }
          $set($$props) {
            if (this.$$set && !is_empty($$props)) {
              this.$$.skip_bound = true;
              this.$$set($$props);
              this.$$.skip_bound = false;
            }
          }
        }
        function cubicOut(t) {
          const f = t - 1;
          return f * f * f + 1;
        }
        function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
          const style = getComputedStyle(node);
          const target_opacity = +style.opacity;
          const transform = style.transform === "none" ? "" : style.transform;
          const od = target_opacity * (1 - opacity);
          return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
          };
        }
        const subscriber_queue = [];
        function writable(value, start = noop2) {
          let stop;
          const subscribers = /* @__PURE__ */ new Set();
          function set(new_value) {
            if (not_equal(value, new_value)) {
              value = new_value;
              if (stop) {
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers) {
                  subscriber[1]();
                  subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                  for (let i = 0; i < subscriber_queue.length; i += 2) {
                    subscriber_queue[i][0](subscriber_queue[i + 1]);
                  }
                  subscriber_queue.length = 0;
                }
              }
            }
          }
          function update2(fn) {
            set(fn(value));
          }
          function subscribe2(run2, invalidate = noop2) {
            const subscriber = [run2, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
              stop = start(set) || noop2;
            }
            run2(value);
            return () => {
              subscribers.delete(subscriber);
              if (subscribers.size === 0) {
                stop();
                stop = null;
              }
            };
          }
          return { set, update: update2, subscribe: subscribe2 };
        }
        function get_interpolator(a, b) {
          if (a === b || a !== a)
            return () => a;
          const type = typeof a;
          if (Array.isArray(a)) {
            const arr = b.map((bi, i) => {
              return get_interpolator(a[i], bi);
            });
            return (t) => arr.map((fn) => fn(t));
          }
          if (type === "number") {
            const delta = b - a;
            return (t) => a + t * delta;
          }
        }
        function tweened(value, defaults = {}) {
          const store = writable(value);
          let task;
          let target_value = value;
          function set(new_value, opts) {
            if (value == null) {
              store.set(value = new_value);
              return Promise.resolve();
            }
            target_value = new_value;
            let previous_task = task;
            let started = false;
            let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
            if (duration === 0) {
              if (previous_task) {
                previous_task.abort();
                previous_task = null;
              }
              store.set(value = target_value);
              return Promise.resolve();
            }
            const start = now() + delay;
            let fn;
            task = loop((now2) => {
              if (now2 < start)
                return true;
              if (!started) {
                fn = interpolate(value, new_value);
                if (typeof duration === "function")
                  duration = duration(value, new_value);
                started = true;
              }
              if (previous_task) {
                previous_task.abort();
                previous_task = null;
              }
              const elapsed = now2 - start;
              if (elapsed > duration) {
                store.set(value = new_value);
                return false;
              }
              store.set(value = fn(easing(elapsed / duration)));
              return true;
            });
            return task.promise;
          }
          return {
            set,
            update: (fn, opts) => set(fn(target_value, value), opts),
            subscribe: store.subscribe
          };
        }
        const closing = writable(0);
        const prefersReducedMotion = globalThis.matchMedia?.(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        const defaultTweenOptions = (duration) => ({
          easing: cubicOut,
          duration: prefersReducedMotion ? 0 : duration
        });
        function create_if_block$2(ctx) {
          let div;
          let div_intro;
          let div_outro;
          let current;
          let if_block = !/*$closing*/
          ctx[2] && create_if_block_1$2();
          return {
            c() {
              div = element("div");
              if (if_block)
                if_block.c();
              attr(div, "class", "bp-load");
              set_style(div, "background-image", "url(" + /*thumb*/
              ctx[0] + ")");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              if (if_block)
                if_block.m(div, null);
              current = true;
            },
            p(new_ctx, dirty) {
              ctx = new_ctx;
              if (!/*$closing*/
              ctx[2]) {
                if (if_block)
                  ;
                else {
                  if_block = create_if_block_1$2();
                  if_block.c();
                  if_block.m(div, null);
                }
              } else if (if_block) {
                if_block.d(1);
                if_block = null;
              }
              if (!current || dirty & /*thumb*/
              1) {
                set_style(div, "background-image", "url(" + /*thumb*/
                ctx[0] + ")");
              }
            },
            i(local) {
              if (current)
                return;
              add_render_callback(() => {
                if (div_outro)
                  div_outro.end(1);
                div_intro = create_in_transition(div, fly, { duration: (
                  /*loaded*/
                  ctx[1] ? 400 : 0
                ) });
                div_intro.start();
              });
              current = true;
            },
            o(local) {
              if (div_intro)
                div_intro.invalidate();
              if (local) {
                div_outro = create_out_transition(div, fly, { duration: 480 });
              }
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (if_block)
                if_block.d();
              if (detaching && div_outro)
                div_outro.end();
            }
          };
        }
        function create_if_block_1$2(ctx) {
          let span0;
          let span1;
          return {
            c() {
              span0 = element("span");
              span1 = element("span");
              attr(span0, "class", "bp-bar");
              attr(span1, "class", "bp-o");
            },
            m(target, anchor) {
              insert(target, span0, anchor);
              insert(target, span1, anchor);
            },
            d(detaching) {
              if (detaching)
                detach(span0);
              if (detaching)
                detach(span1);
            }
          };
        }
        function create_fragment$4(ctx) {
          let if_block_anchor;
          let if_block = (!/*loaded*/
          ctx[1] || /*$closing*/
          ctx[2]) && create_if_block$2(ctx);
          return {
            c() {
              if (if_block)
                if_block.c();
              if_block_anchor = empty();
            },
            m(target, anchor) {
              if (if_block)
                if_block.m(target, anchor);
              insert(target, if_block_anchor, anchor);
            },
            p(ctx2, [dirty]) {
              if (!/*loaded*/
              ctx2[1] || /*$closing*/
              ctx2[2]) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                  if (dirty & /*loaded, $closing*/
                  6) {
                    transition_in(if_block, 1);
                  }
                } else {
                  if_block = create_if_block$2(ctx2);
                  if_block.c();
                  transition_in(if_block, 1);
                  if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
              } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, () => {
                  if_block = null;
                });
                check_outros();
              }
            },
            i(local) {
              transition_in(if_block);
            },
            o(local) {
              transition_out(if_block);
            },
            d(detaching) {
              if (if_block)
                if_block.d(detaching);
              if (detaching)
                detach(if_block_anchor);
            }
          };
        }
        function instance$4($$self, $$props, $$invalidate) {
          let $closing;
          component_subscribe($$self, closing, ($$value) => $$invalidate(2, $closing = $$value));
          let { thumb } = $$props;
          let { loaded } = $$props;
          $$self.$$set = ($$props2) => {
            if ("thumb" in $$props2)
              $$invalidate(0, thumb = $$props2.thumb);
            if ("loaded" in $$props2)
              $$invalidate(1, loaded = $$props2.loaded);
          };
          return [thumb, loaded, $closing];
        }
        class Loading extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$4, create_fragment$4, not_equal, { thumb: 0, loaded: 1 });
          }
        }
        function create_if_block_1$1(ctx) {
          let img;
          let img_srcset_value;
          let img_sizes_value;
          let img_alt_value;
          let img_outro;
          let current;
          let mounted;
          let dispose;
          return {
            c() {
              img = element("img");
              attr(img, "srcset", img_srcset_value = /*activeItem*/
              ctx[7].img);
              attr(img, "sizes", img_sizes_value = /*opts*/
              ctx[8].sizes || `${/*sizes*/
              ctx[1]}px`);
              attr(img, "alt", img_alt_value = /*activeItem*/
              ctx[7].alt);
            },
            m(target, anchor) {
              insert(target, img, anchor);
              current = true;
              if (!mounted) {
                dispose = listen(
                  img,
                  "error",
                  /*error_handler*/
                  ctx[26]
                );
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (!current || dirty[0] & /*sizes*/
              2 && img_sizes_value !== (img_sizes_value = /*opts*/
              ctx2[8].sizes || `${/*sizes*/
              ctx2[1]}px`)) {
                attr(img, "sizes", img_sizes_value);
              }
            },
            i(local) {
              if (current)
                return;
              if (img_outro)
                img_outro.end(1);
              current = true;
            },
            o(local) {
              img_outro = create_out_transition(img, fly, {});
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(img);
              if (detaching && img_outro)
                img_outro.end();
              mounted = false;
              dispose();
            }
          };
        }
        function create_if_block$1(ctx) {
          let loading;
          let current;
          loading = new Loading({
            props: {
              thumb: (
                /*activeItem*/
                ctx[7].thumb
              ),
              loaded: (
                /*loaded*/
                ctx[2]
              )
            }
          });
          return {
            c() {
              create_component(loading.$$.fragment);
            },
            m(target, anchor) {
              mount_component(loading, target, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              const loading_changes = {};
              if (dirty[0] & /*loaded*/
              4)
                loading_changes.loaded = /*loaded*/
                ctx2[2];
              loading.$set(loading_changes);
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(loading, detaching);
            }
          };
        }
        function create_fragment$3(ctx) {
          let div1;
          let div0;
          let if_block0_anchor;
          let current;
          let mounted;
          let dispose;
          let if_block0 = (
            /*loaded*/
            ctx[2] && create_if_block_1$1(ctx)
          );
          let if_block1 = (
            /*showLoader*/
            ctx[3] && create_if_block$1(ctx)
          );
          return {
            c() {
              div1 = element("div");
              div0 = element("div");
              if (if_block0)
                if_block0.c();
              if_block0_anchor = empty();
              if (if_block1)
                if_block1.c();
              attr(div0, "class", "bp-img");
              set_style(div0, "background-image", "url(" + /*activeItem*/
              ctx[7].thumb + ")");
              set_style(
                div0,
                "width",
                /*$imageDimensions*/
                ctx[0][0] + "px"
              );
              set_style(
                div0,
                "height",
                /*$imageDimensions*/
                ctx[0][1] + "px"
              );
              set_style(div0, "transform", "translate3d(" + /*$imageDimensions*/
              (ctx[0][0] / -2 + /*$zoomDragTranslate*/
              ctx[6][0]) + "px, " + /*$imageDimensions*/
              (ctx[0][1] / -2 + /*$zoomDragTranslate*/
              ctx[6][1]) + "px, 0)");
              toggle_class(
                div0,
                "bp-drag",
                /*pointerDown*/
                ctx[4]
              );
              toggle_class(
                div0,
                "bp-canzoom",
                /*maxZoom*/
                ctx[11] > 1 && /*$imageDimensions*/
                ctx[0][0] < /*naturalWidth*/
                ctx[12]
              );
              attr(div1, "class", "bp-img-wrap");
              toggle_class(
                div1,
                "bp-close",
                /*closingWhileZoomed*/
                ctx[5]
              );
            },
            m(target, anchor) {
              insert(target, div1, anchor);
              append(div1, div0);
              if (if_block0)
                if_block0.m(div0, null);
              append(div0, if_block0_anchor);
              if (if_block1)
                if_block1.m(div0, null);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*onMount*/
                    ctx[20].call(null, div0)
                  ),
                  listen(
                    div1,
                    "wheel",
                    /*onWheel*/
                    ctx[15]
                  ),
                  listen(
                    div1,
                    "pointerdown",
                    /*onPointerDown*/
                    ctx[16]
                  ),
                  listen(
                    div1,
                    "pointermove",
                    /*onPointerMove*/
                    ctx[17]
                  ),
                  listen(
                    div1,
                    "pointerup",
                    /*onPointerUp*/
                    ctx[19]
                  ),
                  listen(
                    div1,
                    "pointercancel",
                    /*removeEventFromCache*/
                    ctx[18]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (
                /*loaded*/
                ctx2[2]
              ) {
                if (if_block0) {
                  if_block0.p(ctx2, dirty);
                  if (dirty[0] & /*loaded*/
                  4) {
                    transition_in(if_block0, 1);
                  }
                } else {
                  if_block0 = create_if_block_1$1(ctx2);
                  if_block0.c();
                  transition_in(if_block0, 1);
                  if_block0.m(div0, if_block0_anchor);
                }
              } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, () => {
                  if_block0 = null;
                });
                check_outros();
              }
              if (
                /*showLoader*/
                ctx2[3]
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty[0] & /*showLoader*/
                  8) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block$1(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(div0, null);
                }
              } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, () => {
                  if_block1 = null;
                });
                check_outros();
              }
              if (!current || dirty[0] & /*$imageDimensions*/
              1) {
                set_style(
                  div0,
                  "width",
                  /*$imageDimensions*/
                  ctx2[0][0] + "px"
                );
              }
              if (!current || dirty[0] & /*$imageDimensions*/
              1) {
                set_style(
                  div0,
                  "height",
                  /*$imageDimensions*/
                  ctx2[0][1] + "px"
                );
              }
              if (!current || dirty[0] & /*$imageDimensions, $zoomDragTranslate*/
              65) {
                set_style(div0, "transform", "translate3d(" + /*$imageDimensions*/
                (ctx2[0][0] / -2 + /*$zoomDragTranslate*/
                ctx2[6][0]) + "px, " + /*$imageDimensions*/
                (ctx2[0][1] / -2 + /*$zoomDragTranslate*/
                ctx2[6][1]) + "px, 0)");
              }
              if (dirty[0] & /*pointerDown*/
              16) {
                toggle_class(
                  div0,
                  "bp-drag",
                  /*pointerDown*/
                  ctx2[4]
                );
              }
              if (dirty[0] & /*maxZoom, $imageDimensions, naturalWidth*/
              6145) {
                toggle_class(
                  div0,
                  "bp-canzoom",
                  /*maxZoom*/
                  ctx2[11] > 1 && /*$imageDimensions*/
                  ctx2[0][0] < /*naturalWidth*/
                  ctx2[12]
                );
              }
              if (dirty[0] & /*closingWhileZoomed*/
              32) {
                toggle_class(
                  div1,
                  "bp-close",
                  /*closingWhileZoomed*/
                  ctx2[5]
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block0);
              transition_in(if_block1);
              current = true;
            },
            o(local) {
              transition_out(if_block0);
              transition_out(if_block1);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div1);
              if (if_block0)
                if_block0.d();
              if (if_block1)
                if_block1.d();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function instance$3($$self, $$props, $$invalidate) {
          let $zoomed;
          let $zoomDragTranslate;
          let $closing;
          let $imageDimensions;
          component_subscribe($$self, closing, ($$value) => $$invalidate(25, $closing = $$value));
          let { props } = $$props;
          let { smallScreen } = $$props;
          let { activeItem, opts, prev, next, zoomed, container } = props;
          component_subscribe($$self, zoomed, (value) => $$invalidate(24, $zoomed = value));
          let maxZoom = activeItem.maxZoom || opts.maxZoom || 10;
          let calculatedDimensions = props.calculateDimensions(activeItem);
          let sizes = calculatedDimensions[0];
          let loaded, showLoader;
          let pinchDetails;
          let bpImg;
          let prevDiff = 0;
          let pointerDown, hasDragged;
          let dragStartX, dragStartY;
          let dragStartTranslateX, dragStartTranslateY;
          let closingWhileZoomed;
          const naturalWidth = +activeItem.width;
          const dragPositions = [];
          const pointerCache = /* @__PURE__ */ new Map();
          const imageDimensions = tweened(calculatedDimensions, defaultTweenOptions(400));
          component_subscribe($$self, imageDimensions, (value) => $$invalidate(0, $imageDimensions = value));
          const zoomDragTranslate = tweened([0, 0], defaultTweenOptions(400));
          component_subscribe($$self, zoomDragTranslate, (value) => $$invalidate(6, $zoomDragTranslate = value));
          const boundTranslateValues = ([x, y], newDimensions = $imageDimensions) => {
            const maxTranslateX = (newDimensions[0] - container.w) / 2;
            const maxTranslateY = (newDimensions[1] - container.h) / 2;
            if (maxTranslateX < 0) {
              x = 0;
            } else if (x > maxTranslateX) {
              if (smallScreen) {
                x = pointerDown ? maxTranslateX + (x - maxTranslateX) / 10 : maxTranslateX;
                if (x > maxTranslateX + 20) {
                  $$invalidate(4, pointerDown = prev());
                }
              } else {
                x = maxTranslateX;
              }
            } else if (x < -maxTranslateX) {
              if (smallScreen) {
                x = pointerDown ? -maxTranslateX - (-maxTranslateX - x) / 10 : -maxTranslateX;
                if (x < -maxTranslateX - 20) {
                  $$invalidate(4, pointerDown = next());
                }
              } else {
                x = -maxTranslateX;
              }
            }
            if (maxTranslateY < 0) {
              y = 0;
            } else if (y > maxTranslateY) {
              y = maxTranslateY;
            } else if (y < -maxTranslateY) {
              y = -maxTranslateY;
            }
            return [x, y];
          };
          function changeZoom(amt = maxZoom, e) {
            if ($closing) {
              return;
            }
            const maxWidth = calculatedDimensions[0] * maxZoom;
            let newWidth = $imageDimensions[0] + $imageDimensions[0] * amt;
            let newHeight = $imageDimensions[1] + $imageDimensions[1] * amt;
            if (amt > 0) {
              if (newWidth > maxWidth) {
                newWidth = maxWidth;
                newHeight = calculatedDimensions[1] * maxZoom;
              }
              if (newWidth > naturalWidth) {
                newWidth = naturalWidth;
                newHeight = +activeItem.height;
              }
            } else if (newWidth < calculatedDimensions[0]) {
              imageDimensions.set(calculatedDimensions);
              return zoomDragTranslate.set([0, 0]);
            }
            let { x, y, width, height } = bpImg.getBoundingClientRect();
            const offsetX = e ? e.clientX - x - width / 2 : 0;
            const offsetY = e ? e.clientY - y - height / 2 : 0;
            x = -offsetX * (newWidth / width) + offsetX;
            y = -offsetY * (newHeight / height) + offsetY;
            const newDimensions = [newWidth, newHeight];
            imageDimensions.set(newDimensions).then(() => {
              $$invalidate(1, sizes = Math.round(Math.max(sizes, newWidth)));
            });
            zoomDragTranslate.set(boundTranslateValues([$zoomDragTranslate[0] + x, $zoomDragTranslate[1] + y], newDimensions));
          }
          Object.defineProperty(activeItem, "zoom", {
            configurable: true,
            get: () => $zoomed,
            set: (bool) => changeZoom(bool ? maxZoom : -maxZoom)
          });
          const onWheel = (e) => {
            if (opts.inline && !$zoomed) {
              return;
            }
            e.preventDefault();
            changeZoom(e.deltaY / -300, e);
          };
          const onPointerDown = (e) => {
            if (e.button !== 2) {
              e.preventDefault();
              $$invalidate(4, pointerDown = true);
              pointerCache.set(e.pointerId, e);
              dragStartX = e.clientX;
              dragStartY = e.clientY;
              dragStartTranslateX = $zoomDragTranslate[0];
              dragStartTranslateY = $zoomDragTranslate[1];
            }
          };
          const onPointerMove = (e) => {
            if (pointerCache.size > 1) {
              $$invalidate(4, pointerDown = false);
              return opts.noPinch?.(container.el) || handlePinch(e);
            }
            if (!pointerDown) {
              return;
            }
            let x = e.clientX;
            let y = e.clientY;
            hasDragged = dragPositions.push({ x, y }) > 2;
            x = x - dragStartX;
            y = y - dragStartY;
            if (!$zoomed) {
              if (y < -90) {
                $$invalidate(4, pointerDown = !opts.noClose && props.close());
              }
              if (Math.abs(y) < 30) {
                if (x > 40) {
                  $$invalidate(4, pointerDown = prev());
                }
                if (x < -40) {
                  $$invalidate(4, pointerDown = next());
                }
              }
            }
            if ($zoomed && hasDragged && !$closing) {
              zoomDragTranslate.set(boundTranslateValues([dragStartTranslateX + x, dragStartTranslateY + y]), { duration: 0 });
            }
          };
          const handlePinch = (e) => {
            const [p1, p2] = pointerCache.set(e.pointerId, e).values();
            const dx = p1.clientX - p2.clientX;
            const dy = p1.clientY - p2.clientY;
            const curDiff = Math.hypot(dx, dy);
            pinchDetails = pinchDetails || {
              clientX: (p1.clientX + p2.clientX) / 2,
              clientY: (p1.clientY + p2.clientY) / 2
            };
            changeZoom(((prevDiff || curDiff) - curDiff) / -35, pinchDetails);
            prevDiff = curDiff;
          };
          const removeEventFromCache = (e) => pointerCache.delete(e.pointerId);
          function onPointerUp(e) {
            removeEventFromCache(e);
            if (pinchDetails) {
              $$invalidate(4, pointerDown = prevDiff = 0);
              pinchDetails = pointerCache.size ? pinchDetails : null;
            }
            if (!pointerDown) {
              return;
            }
            $$invalidate(4, pointerDown = false);
            if (e.target === this && !opts.noClose) {
              return props.close();
            }
            if (hasDragged) {
              const [posOne, posTwo, posThree] = dragPositions.slice(-3);
              const xDiff = posTwo.x - posThree.x;
              const yDiff = posTwo.y - posThree.y;
              if (Math.hypot(xDiff, yDiff) > 5) {
                zoomDragTranslate.set(boundTranslateValues([
                  $zoomDragTranslate[0] - (posOne.x - posThree.x) * 5,
                  $zoomDragTranslate[1] - (posOne.y - posThree.y) * 5
                ]));
              }
            } else if (!opts.onImageClick?.(container.el, activeItem)) {
              changeZoom($zoomed ? -maxZoom : maxZoom, e);
            }
            hasDragged = false;
            dragPositions.length = 0;
          }
          const onMount = (node) => {
            bpImg = node;
            props.setResizeFunc(() => {
              $$invalidate(23, calculatedDimensions = props.calculateDimensions(activeItem));
              if (opts.inline || !smallScreen) {
                imageDimensions.set(calculatedDimensions);
                zoomDragTranslate.set([0, 0]);
              }
            });
            props.loadImage(activeItem).then(() => {
              $$invalidate(2, loaded = true);
              props.preloadNext();
            });
            setTimeout(
              () => {
                $$invalidate(3, showLoader = !loaded);
              },
              250
            );
          };
          const error_handler = (error) => opts.onError?.(container, activeItem, error);
          $$self.$$set = ($$props2) => {
            if ("smallScreen" in $$props2)
              $$invalidate(22, smallScreen = $$props2.smallScreen);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*$imageDimensions, calculatedDimensions*/
            8388609) {
              zoomed.set($imageDimensions[0] - 10 > calculatedDimensions[0]);
            }
            if ($$self.$$.dirty[0] & /*$closing, $zoomed, calculatedDimensions*/
            58720256) {
              if ($closing && $zoomed && !opts.intro) {
                const closeTweenOpts = defaultTweenOptions(480);
                zoomDragTranslate.set([0, 0], closeTweenOpts);
                imageDimensions.set(calculatedDimensions, closeTweenOpts);
                $$invalidate(5, closingWhileZoomed = true);
              }
            }
          };
          return [
            $imageDimensions,
            sizes,
            loaded,
            showLoader,
            pointerDown,
            closingWhileZoomed,
            $zoomDragTranslate,
            activeItem,
            opts,
            zoomed,
            container,
            maxZoom,
            naturalWidth,
            imageDimensions,
            zoomDragTranslate,
            onWheel,
            onPointerDown,
            onPointerMove,
            removeEventFromCache,
            onPointerUp,
            onMount,
            props,
            smallScreen,
            calculatedDimensions,
            $zoomed,
            $closing,
            error_handler
          ];
        }
        class Image extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$3, create_fragment$3, not_equal, { props: 21, smallScreen: 22 }, null, [-1, -1]);
          }
        }
        function create_fragment$2(ctx) {
          let div;
          let iframe;
          let loading;
          let current;
          let mounted;
          let dispose;
          loading = new Loading({
            props: {
              thumb: (
                /*activeItem*/
                ctx[2].thumb
              ),
              loaded: (
                /*loaded*/
                ctx[0]
              )
            }
          });
          return {
            c() {
              div = element("div");
              iframe = element("iframe");
              create_component(loading.$$.fragment);
              attr(iframe, "allow", "autoplay; fullscreen");
              attr(
                iframe,
                "title",
                /*activeItem*/
                ctx[2].title
              );
              attr(div, "class", "bp-if");
              set_style(
                div,
                "width",
                /*dimensions*/
                ctx[1][0] + "px"
              );
              set_style(
                div,
                "height",
                /*dimensions*/
                ctx[1][1] + "px"
              );
            },
            m(target, anchor) {
              insert(target, div, anchor);
              append(div, iframe);
              mount_component(loading, div, null);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*addSrc*/
                    ctx[3].call(null, iframe)
                  ),
                  listen(
                    iframe,
                    "load",
                    /*load_handler*/
                    ctx[5]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, [dirty]) {
              const loading_changes = {};
              if (dirty & /*loaded*/
              1)
                loading_changes.loaded = /*loaded*/
                ctx2[0];
              loading.$set(loading_changes);
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "width",
                  /*dimensions*/
                  ctx2[1][0] + "px"
                );
              }
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "height",
                  /*dimensions*/
                  ctx2[1][1] + "px"
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              destroy_component(loading);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function instance$2($$self, $$props, $$invalidate) {
          let { props } = $$props;
          let loaded, dimensions;
          const { activeItem } = props;
          const setDimensions = () => $$invalidate(1, dimensions = props.calculateDimensions(activeItem));
          setDimensions();
          props.setResizeFunc(setDimensions);
          const addSrc = (node) => node.src = activeItem.iframe;
          const load_handler = () => $$invalidate(0, loaded = true);
          return [loaded, dimensions, activeItem, addSrc, props, load_handler];
        }
        class Iframe extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$2, create_fragment$2, not_equal, { props: 4 });
          }
        }
        function create_fragment$1(ctx) {
          let div;
          let loading;
          let current;
          let mounted;
          let dispose;
          loading = new Loading({
            props: {
              thumb: (
                /*activeItem*/
                ctx[2].thumb
              ),
              loaded: (
                /*loaded*/
                ctx[0]
              )
            }
          });
          return {
            c() {
              div = element("div");
              create_component(loading.$$.fragment);
              attr(div, "class", "bp-vid");
              set_style(
                div,
                "width",
                /*dimensions*/
                ctx[1][0] + "px"
              );
              set_style(
                div,
                "height",
                /*dimensions*/
                ctx[1][1] + "px"
              );
              set_style(div, "background-image", "url(" + /*activeItem*/
              ctx[2].thumb + ")");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              mount_component(loading, div, null);
              current = true;
              if (!mounted) {
                dispose = action_destroyer(
                  /*onMount*/
                  ctx[3].call(null, div)
                );
                mounted = true;
              }
            },
            p(ctx2, [dirty]) {
              const loading_changes = {};
              if (dirty & /*loaded*/
              1)
                loading_changes.loaded = /*loaded*/
                ctx2[0];
              loading.$set(loading_changes);
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "width",
                  /*dimensions*/
                  ctx2[1][0] + "px"
                );
              }
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "height",
                  /*dimensions*/
                  ctx2[1][1] + "px"
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              destroy_component(loading);
              mounted = false;
              dispose();
            }
          };
        }
        function instance$1($$self, $$props, $$invalidate) {
          let { props } = $$props;
          let loaded, dimensions;
          const { activeItem, opts, container } = props;
          const setDimensions = () => $$invalidate(1, dimensions = props.calculateDimensions(activeItem));
          setDimensions();
          props.setResizeFunc(setDimensions);
          const addAttributes = (node, obj) => {
            for (const key in obj) {
              attr(node, key, obj[key]);
            }
          };
          const onMount = (node) => {
            let mediaElement;
            const appendToVideo = (tag, arr) => {
              if (!Array.isArray(arr)) {
                arr = JSON.parse(arr);
              }
              for (const obj of arr) {
                if (!mediaElement) {
                  mediaElement = element(obj.type?.includes("audio") ? "audio" : "video");
                  addAttributes(mediaElement, {
                    controls: true,
                    autoplay: true,
                    playsinline: true,
                    tabindex: "0"
                  });
                }
                const el = element(tag);
                addAttributes(el, obj);
                if (tag == "source") {
                  listen(el, "error", (error) => opts.onError?.(container, activeItem, error));
                }
                append(mediaElement, el);
              }
            };
            appendToVideo("source", activeItem.sources);
            appendToVideo("track", activeItem.tracks || []);
            listen(mediaElement, "canplay", () => $$invalidate(0, loaded = true));
            append(node, mediaElement);
          };
          return [loaded, dimensions, activeItem, onMount, props];
        }
        class Video extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$1, create_fragment$1, not_equal, { props: 4 });
          }
        }
        function create_if_block(ctx) {
          let div2;
          let div0;
          let div0_outro;
          let previous_key = (
            /*activeItem*/
            ctx[6].i
          );
          let div1;
          let button;
          let div1_outro;
          let containerActions_action;
          let current;
          let mounted;
          let dispose;
          let key_block = create_key_block(ctx);
          let if_block = (
            /*items*/
            ctx[0].length > 1 && create_if_block_1(ctx)
          );
          return {
            c() {
              div2 = element("div");
              div0 = element("div");
              key_block.c();
              div1 = element("div");
              button = element("button");
              if (if_block)
                if_block.c();
              attr(button, "class", "bp-x");
              attr(button, "title", "Close");
              attr(button, "aria-label", "Close");
              attr(div1, "class", "bp-controls");
              attr(div2, "class", "bp-wrap");
              toggle_class(
                div2,
                "bp-zoomed",
                /*$zoomed*/
                ctx[10]
              );
              toggle_class(
                div2,
                "bp-inline",
                /*inline*/
                ctx[8]
              );
              toggle_class(
                div2,
                "bp-small",
                /*smallScreen*/
                ctx[7]
              );
              toggle_class(
                div2,
                "bp-noclose",
                /*opts*/
                ctx[5].noClose
              );
            },
            m(target, anchor) {
              insert(target, div2, anchor);
              append(div2, div0);
              key_block.m(div2, null);
              append(div2, div1);
              append(div1, button);
              if (if_block)
                if_block.m(div1, null);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    button,
                    "click",
                    /*close*/
                    ctx[1]
                  ),
                  action_destroyer(containerActions_action = /*containerActions*/
                  ctx[14].call(null, div2))
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*activeItem*/
              64 && not_equal(previous_key, previous_key = /*activeItem*/
              ctx2[6].i)) {
                group_outros();
                transition_out(key_block, 1, 1, noop2);
                check_outros();
                key_block = create_key_block(ctx2);
                key_block.c();
                transition_in(key_block);
                key_block.m(div2, div1);
              } else {
                key_block.p(ctx2, dirty);
              }
              if (
                /*items*/
                ctx2[0].length > 1
              ) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                } else {
                  if_block = create_if_block_1(ctx2);
                  if_block.c();
                  if_block.m(div1, null);
                }
              } else if (if_block) {
                if_block.d(1);
                if_block = null;
              }
              if (dirty[0] & /*$zoomed*/
              1024) {
                toggle_class(
                  div2,
                  "bp-zoomed",
                  /*$zoomed*/
                  ctx2[10]
                );
              }
              if (dirty[0] & /*inline*/
              256) {
                toggle_class(
                  div2,
                  "bp-inline",
                  /*inline*/
                  ctx2[8]
                );
              }
              if (dirty[0] & /*smallScreen*/
              128) {
                toggle_class(
                  div2,
                  "bp-small",
                  /*smallScreen*/
                  ctx2[7]
                );
              }
              if (dirty[0] & /*opts*/
              32) {
                toggle_class(
                  div2,
                  "bp-noclose",
                  /*opts*/
                  ctx2[5].noClose
                );
              }
            },
            i(local) {
              if (current)
                return;
              if (div0_outro)
                div0_outro.end(1);
              transition_in(key_block);
              if (div1_outro)
                div1_outro.end(1);
              current = true;
            },
            o(local) {
              div0_outro = create_out_transition(div0, fly, { duration: 480 });
              transition_out(key_block);
              div1_outro = create_out_transition(div1, fly, {});
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div2);
              if (detaching && div0_outro)
                div0_outro.end();
              key_block.d(detaching);
              if (if_block)
                if_block.d();
              if (detaching && div1_outro)
                div1_outro.end();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_else_block(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            ctx[6].html + ""
          );
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-html");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*activeItem*/
              64 && raw_value !== (raw_value = /*activeItem*/
              ctx2[6].html + ""))
                div.innerHTML = raw_value;
            },
            i: noop2,
            o: noop2,
            d(detaching) {
              if (detaching)
                detach(div);
            }
          };
        }
        function create_if_block_5(ctx) {
          let iframe;
          let current;
          iframe = new Iframe({
            props: { props: (
              /*getChildProps*/
              ctx[13]()
            ) }
          });
          return {
            c() {
              create_component(iframe.$$.fragment);
            },
            m(target, anchor) {
              mount_component(iframe, target, anchor);
              current = true;
            },
            p: noop2,
            i(local) {
              if (current)
                return;
              transition_in(iframe.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(iframe.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(iframe, detaching);
            }
          };
        }
        function create_if_block_4(ctx) {
          let video;
          let current;
          video = new Video({
            props: { props: (
              /*getChildProps*/
              ctx[13]()
            ) }
          });
          return {
            c() {
              create_component(video.$$.fragment);
            },
            m(target, anchor) {
              mount_component(video, target, anchor);
              current = true;
            },
            p: noop2,
            i(local) {
              if (current)
                return;
              transition_in(video.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(video.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(video, detaching);
            }
          };
        }
        function create_if_block_3(ctx) {
          let imageitem;
          let current;
          imageitem = new Image({
            props: {
              props: (
                /*getChildProps*/
                ctx[13]()
              ),
              smallScreen: (
                /*smallScreen*/
                ctx[7]
              )
            }
          });
          return {
            c() {
              create_component(imageitem.$$.fragment);
            },
            m(target, anchor) {
              mount_component(imageitem, target, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              const imageitem_changes = {};
              if (dirty[0] & /*smallScreen*/
              128)
                imageitem_changes.smallScreen = /*smallScreen*/
                ctx2[7];
              imageitem.$set(imageitem_changes);
            },
            i(local) {
              if (current)
                return;
              transition_in(imageitem.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(imageitem.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(imageitem, detaching);
            }
          };
        }
        function create_if_block_2(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            ctx[6].caption + ""
          );
          let div_outro;
          let current;
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-cap");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
              current = true;
            },
            p(ctx2, dirty) {
              if ((!current || dirty[0] & /*activeItem*/
              64) && raw_value !== (raw_value = /*activeItem*/
              ctx2[6].caption + ""))
                div.innerHTML = raw_value;
            },
            i(local) {
              if (current)
                return;
              if (div_outro)
                div_outro.end(1);
              current = true;
            },
            o(local) {
              div_outro = create_out_transition(div, fly, { duration: 200 });
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching && div_outro)
                div_outro.end();
            }
          };
        }
        function create_key_block(ctx) {
          let div;
          let current_block_type_index;
          let if_block0;
          let div_intro;
          let div_outro;
          let if_block1_anchor;
          let current;
          let mounted;
          let dispose;
          const if_block_creators = [create_if_block_3, create_if_block_4, create_if_block_5, create_else_block];
          const if_blocks = [];
          function select_block_type(ctx2, dirty) {
            if (
              /*activeItem*/
              ctx2[6].img
            )
              return 0;
            if (
              /*activeItem*/
              ctx2[6].sources
            )
              return 1;
            if (
              /*activeItem*/
              ctx2[6].iframe
            )
              return 2;
            return 3;
          }
          current_block_type_index = select_block_type(ctx);
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          let if_block1 = (
            /*activeItem*/
            ctx[6].caption && create_if_block_2(ctx)
          );
          return {
            c() {
              div = element("div");
              if_block0.c();
              if (if_block1)
                if_block1.c();
              if_block1_anchor = empty();
              attr(div, "class", "bp-inner");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              if_blocks[current_block_type_index].m(div, null);
              if (if_block1)
                if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    div,
                    "pointerdown",
                    /*pointerdown_handler*/
                    ctx[21]
                  ),
                  listen(
                    div,
                    "pointerup",
                    /*pointerup_handler*/
                    ctx[22]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              let previous_block_index = current_block_type_index;
              current_block_type_index = select_block_type(ctx2);
              if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx2, dirty);
              } else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, () => {
                  if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block0 = if_blocks[current_block_type_index];
                if (!if_block0) {
                  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                  if_block0.c();
                } else {
                  if_block0.p(ctx2, dirty);
                }
                transition_in(if_block0, 1);
                if_block0.m(div, null);
              }
              if (
                /*activeItem*/
                ctx2[6].caption
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty[0] & /*activeItem*/
                  64) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block_2(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
              } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, () => {
                  if_block1 = null;
                });
                check_outros();
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block0);
              add_render_callback(() => {
                if (div_outro)
                  div_outro.end(1);
                div_intro = create_in_transition(
                  div,
                  /*mediaTransition*/
                  ctx[12],
                  true
                );
                div_intro.start();
              });
              transition_in(if_block1);
              current = true;
            },
            o(local) {
              transition_out(if_block0);
              if (div_intro)
                div_intro.invalidate();
              div_outro = create_out_transition(
                div,
                /*mediaTransition*/
                ctx[12],
                false
              );
              transition_out(if_block1);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if_blocks[current_block_type_index].d();
              if (detaching && div_outro)
                div_outro.end();
              if (if_block1)
                if_block1.d(detaching);
              if (detaching)
                detach(if_block1_anchor);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_if_block_1(ctx) {
          let div;
          let raw_value = `${/*position*/
          ctx[4] + 1} / ${/*items*/
          ctx[0].length}`;
          let button0;
          let button1;
          let mounted;
          let dispose;
          return {
            c() {
              div = element("div");
              button0 = element("button");
              button1 = element("button");
              attr(div, "class", "bp-count");
              attr(button0, "class", "bp-prev");
              attr(button0, "title", "Previous");
              attr(button0, "aria-label", "Previous");
              attr(button1, "class", "bp-next");
              attr(button1, "title", "Next");
              attr(button1, "aria-label", "Next");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
              insert(target, button0, anchor);
              insert(target, button1, anchor);
              if (!mounted) {
                dispose = [
                  listen(
                    button0,
                    "click",
                    /*prev*/
                    ctx[2]
                  ),
                  listen(
                    button1,
                    "click",
                    /*next*/
                    ctx[3]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*position, items*/
              17 && raw_value !== (raw_value = `${/*position*/
              ctx2[4] + 1} / ${/*items*/
              ctx2[0].length}`))
                div.innerHTML = raw_value;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching)
                detach(button0);
              if (detaching)
                detach(button1);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_fragment(ctx) {
          let if_block_anchor;
          let current;
          let if_block = (
            /*items*/
            ctx[0] && create_if_block(ctx)
          );
          return {
            c() {
              if (if_block)
                if_block.c();
              if_block_anchor = empty();
            },
            m(target, anchor) {
              if (if_block)
                if_block.m(target, anchor);
              insert(target, if_block_anchor, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              if (
                /*items*/
                ctx2[0]
              ) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                  if (dirty[0] & /*items*/
                  1) {
                    transition_in(if_block, 1);
                  }
                } else {
                  if_block = create_if_block(ctx2);
                  if_block.c();
                  transition_in(if_block, 1);
                  if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
              } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, () => {
                  if_block = null;
                });
                check_outros();
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block);
              current = true;
            },
            o(local) {
              transition_out(if_block);
              current = false;
            },
            d(detaching) {
              if (if_block)
                if_block.d(detaching);
              if (detaching)
                detach(if_block_anchor);
            }
          };
        }
        function instance($$self, $$props, $$invalidate) {
          let $zoomed;
          let { items = void 0 } = $$props;
          let { target = void 0 } = $$props;
          const html = document.documentElement;
          let position;
          let opts;
          let isOpen;
          let focusTrigger;
          let smallScreen;
          let inline;
          let movement;
          let clickedEl;
          let activeItem;
          let activeItemIsHtml;
          let resizeFunc;
          const setResizeFunc = (fn) => resizeFunc = fn;
          const container = {};
          const zoomed = writable(0);
          component_subscribe($$self, zoomed, (value) => $$invalidate(10, $zoomed = value));
          const open = (options) => {
            $$invalidate(5, opts = options);
            $$invalidate(8, inline = opts.inline);
            const openItems = opts.items;
            if (!inline && html.scrollHeight > html.clientHeight) {
              html.classList.add("bp-lock");
            }
            focusTrigger = document.activeElement;
            $$invalidate(20, container.w = target.offsetWidth, container);
            $$invalidate(
              20,
              container.h = target === document.body ? globalThis.innerHeight : target.clientHeight,
              container
            );
            $$invalidate(7, smallScreen = container.w < 769);
            $$invalidate(4, position = opts.position || 0);
            if (Array.isArray(openItems)) {
              $$invalidate(0, items = openItems.map((item, i) => {
                if (opts.el && opts.el === item.element) {
                  $$invalidate(4, position = i);
                }
                return { i, ...item };
              }));
            } else {
              $$invalidate(0, items = (openItems.length ? [...openItems] : [openItems]).map((element2, i) => {
                if (opts.el === element2) {
                  $$invalidate(4, position = i);
                }
                return { element: element2, i, ...element2.dataset };
              }));
            }
          };
          const close = () => {
            opts.onClose?.(container.el, activeItem);
            closing.set(true);
            $$invalidate(0, items = null);
            focusTrigger?.focus({ preventScroll: true });
          };
          const prev = () => setPosition(position - 1);
          const next = () => setPosition(position + 1);
          const setPosition = (index) => {
            movement = index - position;
            $$invalidate(4, position = getNextPosition(index));
          };
          const getNextPosition = (index) => (index + items.length) % items.length;
          const onKeydown = (e) => {
            const { key, shiftKey } = e;
            if (key === "Escape") {
              !opts.noClose && close();
            } else if (key === "ArrowRight") {
              next();
            } else if (key === "ArrowLeft") {
              prev();
            } else if (key === "Tab") {
              const { activeElement } = document;
              if (shiftKey || !activeElement.controls) {
                e.preventDefault();
                const { focusWrap = container.el } = opts;
                const tabbable = [...focusWrap.querySelectorAll("*")].filter((node) => node.tabIndex >= 0);
                let index = tabbable.indexOf(activeElement);
                index += tabbable.length + (shiftKey ? -1 : 1);
                tabbable[index % tabbable.length].focus();
              }
            }
          };
          const calculateDimensions = ({ width = 1920, height = 1080 }) => {
            const { scale = 0.99 } = opts;
            const ratio = Math.min(1, container.w / width * scale, container.h / height * scale);
            return [Math.round(width * ratio), Math.round(height * ratio)];
          };
          const preloadNext = () => {
            if (items) {
              const nextItem = items[getNextPosition(position + 1)];
              const prevItem = items[getNextPosition(position - 1)];
              !nextItem.preload && loadImage(nextItem);
              !prevItem.preload && loadImage(prevItem);
            }
          };
          const loadImage = (item) => {
            if (item.img) {
              const image = element("img");
              image.sizes = opts.sizes || `${calculateDimensions(item)[0]}px`;
              image.srcset = item.img;
              item.preload = true;
              return image.decode().catch((error) => {
              });
            }
          };
          const mediaTransition = (node, isEntering) => {
            if (!isOpen || !items) {
              $$invalidate(18, isOpen = isEntering);
              return opts.intro ? fly(node, { y: isEntering ? 10 : -10 }) : scaleIn(node);
            }
            return fly(node, {
              x: (movement > 0 ? 20 : -20) * (isEntering ? 1 : -1),
              duration: 250
            });
          };
          const scaleIn = (node) => {
            let dimensions;
            if (activeItemIsHtml) {
              const bpItem = node.firstChild.firstChild;
              dimensions = [bpItem.clientWidth, bpItem.clientHeight];
            } else {
              dimensions = calculateDimensions(activeItem);
            }
            const rect = (activeItem.element || focusTrigger).getBoundingClientRect();
            const leftOffset = rect.left - (container.w - rect.width) / 2;
            const centerTop = rect.top - (container.h - rect.height) / 2;
            const scaleWidth = rect.width / dimensions[0];
            const scaleHeight = rect.height / dimensions[1];
            return {
              duration: 480,
              easing: cubicOut,
              css: (t, u) => {
                return `transform:translate3d(${leftOffset * u}px, ${centerTop * u}px, 0) scale3d(${scaleWidth + t * (1 - scaleWidth)}, ${scaleHeight + t * (1 - scaleHeight)}, 1)`;
              }
            };
          };
          const getChildProps = () => ({
            activeItem,
            calculateDimensions,
            loadImage,
            preloadNext,
            opts,
            prev,
            next,
            close,
            setResizeFunc,
            zoomed,
            container
          });
          const containerActions = (node) => {
            $$invalidate(20, container.el = node, container);
            let removeKeydownListener;
            let roActive;
            opts.onOpen?.(container.el, activeItem);
            if (!inline) {
              removeKeydownListener = listen(globalThis, "keydown", onKeydown);
            }
            const ro = new ResizeObserver((entries) => {
              if (roActive) {
                $$invalidate(20, container.w = entries[0].contentRect.width, container);
                $$invalidate(20, container.h = entries[0].contentRect.height, container);
                $$invalidate(7, smallScreen = container.w < 769);
                resizeFunc?.();
                opts.onResize?.(container.el, activeItem);
              }
              roActive = true;
            });
            ro.observe(node);
            return {
              destroy() {
                ro.disconnect();
                removeKeydownListener?.();
                closing.set(false);
                html.classList.remove("bp-lock");
                opts.onClosed?.();
              }
            };
          };
          const pointerdown_handler = (e) => $$invalidate(9, clickedEl = e.target);
          const pointerup_handler = function(e) {
            if (e.button !== 2 && e.target === this && clickedEl === this) {
              !opts.noClose && close();
            }
          };
          $$self.$$set = ($$props2) => {
            if ("items" in $$props2)
              $$invalidate(0, items = $$props2.items);
            if ("target" in $$props2)
              $$invalidate(15, target = $$props2.target);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*items, position, activeItem, isOpen, activeItemIsHtml, opts, container*/
            1835121) {
              if (items) {
                $$invalidate(6, activeItem = items[position]);
                $$invalidate(19, activeItemIsHtml = activeItem.hasOwnProperty("html"));
                if (isOpen) {
                  activeItemIsHtml && setResizeFunc(null);
                  opts.onUpdate?.(container.el, activeItem);
                }
              }
            }
          };
          return [
            items,
            close,
            prev,
            next,
            position,
            opts,
            activeItem,
            smallScreen,
            inline,
            clickedEl,
            $zoomed,
            zoomed,
            mediaTransition,
            getChildProps,
            containerActions,
            target,
            open,
            setPosition,
            isOpen,
            activeItemIsHtml,
            container,
            pointerdown_handler,
            pointerup_handler
          ];
        }
        class Bigger_picture extends SvelteComponent {
          constructor(options) {
            super();
            init(
              this,
              options,
              instance,
              create_fragment,
              not_equal,
              {
                items: 0,
                target: 15,
                open: 16,
                close: 1,
                prev: 2,
                next: 3,
                setPosition: 17
              },
              null,
              [-1, -1]
            );
          }
          get items() {
            return this.$$.ctx[0];
          }
          get target() {
            return this.$$.ctx[15];
          }
          get open() {
            return this.$$.ctx[16];
          }
          get close() {
            return this.$$.ctx[1];
          }
          get prev() {
            return this.$$.ctx[2];
          }
          get next() {
            return this.$$.ctx[3];
          }
          get setPosition() {
            return this.$$.ctx[17];
          }
        }
        function biggerPicture(options) {
          return new Bigger_picture({
            ...options,
            props: options
          });
        }
        return biggerPicture;
      });
    }
  });

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/slide@v0.2.0/assets/hb/modules/slide/js/index.ts
  (() => {
    "use strict";
    const scroll = (element, dir) => {
      const inner = element.parentElement?.querySelector(".slide-inner");
      const step = inner.offsetWidth;
      let left = 0;
      if (dir === "left") {
        left = inner.scrollLeft - step;
      } else {
        left = inner.scrollLeft + step;
      }
      inner.scroll({
        left,
        behavior: "smooth"
      });
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".slide-control-left").forEach((element) => {
        element.addEventListener("click", () => {
          scroll(element, "left");
        });
      });
      document.querySelectorAll(".slide-control-right").forEach((element) => {
        element.addEventListener("click", () => {
          scroll(element, "right");
        });
      });
      const els = document.querySelectorAll(".slide-inner");
      els.forEach((el) => {
        let startX = 0;
        el.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX;
        });
        el.addEventListener("touchend", (e) => {
          scroll(el, e.changedTouches[0].clientX > startX ? "left" : "right");
        });
      });
    });
  })();

  // ns-params:@params
  var params_exports = {};
  __export(params_exports, {
    back_to_top: () => back_to_top,
    bigger_picture: () => bigger_picture,
    blog: () => blog,
    breadcrumb: () => breadcrumb,
    css_bundle_name: () => css_bundle_name,
    debug: () => debug,
    default: () => params_default,
    docs: () => docs,
    featured_image: () => featured_image,
    footer: () => footer,
    header: () => header,
    heading_sign: () => heading_sign,
    js_bundle_name: () => js_bundle_name,
    logo: () => logo,
    modules: () => modules,
    pagination: () => pagination,
    progress_bar: () => progress_bar,
    scrollbar: () => scrollbar,
    styles: () => styles,
    terms: () => terms
  });
  var back_to_top = { animation: true, icon_height: "2em", icon_name: "rocket", icon_width: "2em", position_bottom: "1rem", position_end: "1rem" };
  var bigger_picture = { play_interval: 5e3 };
  var blog = { archives: { paginate: 30 }, full_width: false, home: { main_sections: ["blog", "software-engineering", "programming", "oop"], recent_posts: 12 }, paginate: 12, post_date_format: ":date_long", post_thumbnail: true, post_thumbnail_default: "images/thumbnail.png", post_thumbnail_placeholder: "", related_posts: { number: 10 }, sidebar: { taxonomies: { style: "underline" } } };
  var breadcrumb = { disabled: false };
  var css_bundle_name = "ls";
  var debug = false;
  var docs = { date_format: ":date_long" };
  var featured_image = { size: "x640" };
  var footer = { socials: { github: "learn-software-engineering", gmail: "mailto://learn.software.eng@gmail.com", linkedin: "https://linkedin.com/company/learn-software", twitter: "https://twitter.com/software45687", youtube: "https://www.youtube.com/@learn-software" } };
  var header = { breakpoint: "lg", full_width: true, socials: { github: "learn-software-engineering", gmail: "mailto://learn.software.eng@gmail.com", linkedin: "https://linkedin.com/company/learn-software", twitter: "https://twitter.com/software45687", youtube: "https://www.youtube.com/@learn-software" }, sticky: true };
  var heading_sign = { containers: { ".hb-blog-post-content": {}, ".hb-docs-doc-content": {} } };
  var js_bundle_name = "ls";
  var logo = "images/logo-square-2.png";
  var modules = { "code-block-panel": { js_resources: [{ partial: "code-block-panel/assets/js-resource" }] } };
  var pagination = { alignment: "center", siblings: 2, size: "" };
  var progress_bar = { height: "2px", initial_width: 20, interval: 50, time: 2 };
  var scrollbar = { corner_bg: "#909294", height: "12px", thumb_bg: "#909294", track_bg: "#f8f9fa", width: "12px" };
  var styles = { hb_top_offset: "24px", prefix: "hb-" };
  var terms = { paginate: 9 };
  var params_default = { back_to_top, bigger_picture, blog, breadcrumb, css_bundle_name, debug, docs, featured_image, footer, header, heading_sign, js_bundle_name, logo, modules, pagination, progress_bar, scrollbar, styles, terms };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.0/assets/hb/modules/progress-bar/js/progress.ts
  var Progress = class {
    ele;
    bar;
    width;
    interval;
    step;
    constructor() {
      this.width = params_exports?.progress_bar?.width ?? 20;
      this.interval = params_exports?.progress_bar?.interval ?? 50;
      const time = params_exports?.progress_bar?.time ?? 2;
      this.step = (100 - this.width) / time / 1e3 * this.interval;
      this.initBar();
      this.initProgress();
    }
    initProgress() {
      const progress = document.createElement("div");
      progress.className = "hb-progress progress position-fixed top-0 w-100 rounded-0 d-none";
      progress.role = "progressbar";
      progress.appendChild(this.bar);
      document.body.appendChild(progress);
      this.ele = progress;
    }
    initBar() {
      const bar = document.createElement("div");
      bar.className = "progress-bar progress-bar-striped progress-bar-animated";
      bar.style.width = this.width + "%";
      this.bar = bar;
    }
    show() {
      this.ele.classList.remove("d-none");
      setInterval(() => {
        this.width += this.step;
        this.bar.style.width = `${this.width}%`;
      }, this.interval);
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.0/assets/hb/modules/progress-bar/js/index.ts
  (() => {
    const progress = new Progress();
    window.addEventListener("beforeunload", () => {
      progress.show();
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/base@v0.2.1/assets/hb/modules/base/js/responsive-table.ts
  (() => {
    "use strict";
    document.querySelectorAll("table").forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "table-responsive";
      wrapper.appendChild(table.cloneNode(true));
      table.parentNode?.replaceChild(wrapper, table);
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/dom/data.js
  var elementMap = /* @__PURE__ */ new Map();
  var data_default = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/util/index.js
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/dom/event-handler.js
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
  ]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, { delegateTarget: element });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let { target } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, { delegateTarget: target });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn2) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn2.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, { bubbles, cancelable: true }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  var event_handler_default = EventHandler;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/dom/manipulator.js
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var manipulator_default = Manipulator;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/util/config.js
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? manipulator_default.getDataAttribute(element, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof jsonConfig === "object" ? jsonConfig : {},
        ...isElement(element) ? manipulator_default.getDataAttributes(element) : {},
        ...typeof config === "object" ? config : {}
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
          );
        }
      }
    }
  };
  var config_default = Config;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/base-component.js
  var VERSION = "5.3.1";
  var BaseComponent = class extends config_default {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      data_default.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      data_default.remove(this._element, this.constructor.DATA_KEY);
      event_handler_default.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return data_default.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var base_component_default = BaseComponent;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/dom/selector-engine.js
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return parseSelector(selector);
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]'
      ].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var selector_engine_default = SelectorEngine;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/collapse.js
  var NAME = "collapse";
  var DATA_KEY = "bs.collapse";
  var EVENT_KEY = `.${DATA_KEY}`;
  var DATA_API_KEY = ".data-api";
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
  var Default = {
    parent: null,
    toggle: true
  };
  var DefaultType = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = selector_engine_default.find(SELECTOR_DATA_TOGGLE);
      for (const elem of toggleList) {
        const selector = selector_engine_default.getSelectorFromElement(elem);
        const filterElement = selector_engine_default.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, { toggle: false }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_SHOW);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
        this._element.style[dimension] = "";
        event_handler_default.trigger(this._element, EVENT_SHOWN);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_HIDE);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
      for (const trigger of this._triggerArray) {
        const element = selector_engine_default.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        event_handler_default.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);
      for (const element of children) {
        const selected = selector_engine_default.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = selector_engine_default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return selector_engine_default.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of selector_engine_default.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, { toggle: false }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/tab.js
  var NAME2 = "tab";
  var DATA_KEY2 = "bs.tab";
  var EVENT_KEY2 = `.${DATA_KEY2}`;
  var EVENT_HIDE2 = `hide${EVENT_KEY2}`;
  var EVENT_HIDDEN2 = `hidden${EVENT_KEY2}`;
  var EVENT_SHOW2 = `show${EVENT_KEY2}`;
  var EVENT_SHOWN2 = `shown${EVENT_KEY2}`;
  var EVENT_CLICK_DATA_API2 = `click${EVENT_KEY2}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY2}`;
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY2}`;
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_SHOW2 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = ":not(.dropdown-toggle)";
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE2 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE2}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends base_component_default {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      event_handler_default.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME2;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? event_handler_default.trigger(active, EVENT_HIDE2, { relatedTarget: innerElem }) : null;
      const showEvent = event_handler_default.trigger(innerElem, EVENT_SHOW2, { relatedTarget: active });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW2);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        event_handler_default.trigger(element, EVENT_SHOWN2, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW2);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        event_handler_default.trigger(element, EVENT_HIDDEN2, { relatedTarget: relatedElem });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({ preventScroll: true });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return selector_engine_default.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = selector_engine_default.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = selector_engine_default.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW2);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : selector_engine_default.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API2, SELECTOR_DATA_TOGGLE2, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of selector_engine_default.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/util/swipe.js
  var NAME3 = "swipe";
  var EVENT_KEY3 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY3}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY3}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY3}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY3}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY3}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default2 = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType2 = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends config_default {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default2;
    }
    static get DefaultType() {
      return DefaultType2;
    }
    static get NAME() {
      return NAME3;
    }
    // Public
    dispose() {
      event_handler_default.off(this._element, EVENT_KEY3);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        event_handler_default.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        event_handler_default.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        event_handler_default.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var swipe_default = Swipe;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/carousel.js
  var NAME4 = "carousel";
  var DATA_KEY3 = "bs.carousel";
  var EVENT_KEY4 = `.${DATA_KEY3}`;
  var DATA_API_KEY2 = ".data-api";
  var ARROW_LEFT_KEY2 = "ArrowLeft";
  var ARROW_RIGHT_KEY2 = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY4}`;
  var EVENT_SLID = `slid${EVENT_KEY4}`;
  var EVENT_KEYDOWN2 = `keydown${EVENT_KEY4}`;
  var EVENT_MOUSEENTER = `mouseenter${EVENT_KEY4}`;
  var EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY4}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY4}`;
  var EVENT_LOAD_DATA_API2 = `load${EVENT_KEY4}${DATA_API_KEY2}`;
  var EVENT_CLICK_DATA_API3 = `click${EVENT_KEY4}${DATA_API_KEY2}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE2 = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY2]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY2]: DIRECTION_LEFT
  };
  var Default3 = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType3 = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = selector_engine_default.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default3;
    }
    static get DefaultType() {
      return DefaultType3;
    }
    static get NAME() {
      return NAME4;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        event_handler_default.on(this._element, EVENT_KEYDOWN2, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        event_handler_default.on(this._element, EVENT_MOUSEENTER, () => this.pause());
        event_handler_default.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle());
      }
      if (this._config.touch && swipe_default.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of selector_engine_default.find(SELECTOR_ITEM_IMG, this._element)) {
        event_handler_default.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new swipe_default(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = selector_engine_default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE2);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = selector_engine_default.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE2);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return event_handler_default.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return selector_engine_default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return selector_engine_default.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API3, SELECTOR_DATA_SLIDE, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (manipulator_default.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API2, () => {
    const carousels = selector_engine_default.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var carousel_default = Carousel;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/carousel@v0.2.3/assets/hb/modules/carousel/js/index.ts
  (() => {
    document.querySelectorAll(".carousel").forEach((el) => {
      new carousel_default(el);
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/dropdown.js
  var Popper = __toESM(require_popper());
  var NAME5 = "dropdown";
  var DATA_KEY4 = "bs.dropdown";
  var EVENT_KEY5 = `.${DATA_KEY4}`;
  var DATA_API_KEY3 = ".data-api";
  var ESCAPE_KEY = "Escape";
  var TAB_KEY = "Tab";
  var ARROW_UP_KEY2 = "ArrowUp";
  var ARROW_DOWN_KEY2 = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE3 = `hide${EVENT_KEY5}`;
  var EVENT_HIDDEN3 = `hidden${EVENT_KEY5}`;
  var EVENT_SHOW3 = `show${EVENT_KEY5}`;
  var EVENT_SHOWN3 = `shown${EVENT_KEY5}`;
  var EVENT_CLICK_DATA_API4 = `click${EVENT_KEY5}${DATA_API_KEY3}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY5}${DATA_API_KEY3}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY5}${DATA_API_KEY3}`;
  var CLASS_NAME_SHOW3 = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE3}.${CLASS_NAME_SHOW3}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default4 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType4 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = selector_engine_default.next(this._element, SELECTOR_MENU)[0] || selector_engine_default.prev(this._element, SELECTOR_MENU)[0] || selector_engine_default.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default4;
    }
    static get DefaultType() {
      return DefaultType4;
    }
    static get NAME() {
      return NAME5;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW3, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW3);
      this._element.classList.add(CLASS_NAME_SHOW3);
      event_handler_default.trigger(this._element, EVENT_SHOWN3, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE3, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW3);
      this._element.classList.remove(CLASS_NAME_SHOW3);
      this._element.setAttribute("aria-expanded", "false");
      manipulator_default.removeDataAttribute(this._menu, "popper");
      event_handler_default.trigger(this._element, EVENT_HIDDEN3, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME5.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW3);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const { offset } = this._config;
      if (typeof offset === "string") {
        return offset.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset === "function") {
        return (popperData) => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }
        ]
      };
      if (this._inNavbar || this._config.display === "static") {
        manipulator_default.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({ key, target }) {
      const items = selector_engine_default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY2, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY) {
        return;
      }
      const openToggles = selector_engine_default.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = { relatedTarget: context._element };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY;
      const isUpOrDownEvent = [ARROW_UP_KEY2, ARROW_DOWN_KEY2].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE3) ? this : selector_engine_default.prev(this, SELECTOR_DATA_TOGGLE3)[0] || selector_engine_default.next(this, SELECTOR_DATA_TOGGLE3)[0] || selector_engine_default.findOne(SELECTOR_DATA_TOGGLE3, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE3, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_CLICK_DATA_API4, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_CLICK_DATA_API4, SELECTOR_DATA_TOGGLE3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/util/backdrop.js
  var NAME6 = "backdrop";
  var CLASS_NAME_FADE2 = "fade";
  var CLASS_NAME_SHOW4 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME6}`;
  var Default5 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType5 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default5;
    }
    static get DefaultType() {
      return DefaultType5;
    }
    static get NAME() {
      return NAME6;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW4);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW4);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      event_handler_default.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE2);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      event_handler_default.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var backdrop_default = Backdrop;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/util/component-functions.js
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    event_handler_default.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = selector_engine_default.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/util/focustrap.js
  var NAME7 = "focustrap";
  var DATA_KEY5 = "bs.focustrap";
  var EVENT_KEY6 = `.${DATA_KEY5}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY6}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY6}`;
  var TAB_KEY2 = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default6 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType6 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default6;
    }
    static get DefaultType() {
      return DefaultType6;
    }
    static get NAME() {
      return NAME7;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      event_handler_default.off(document, EVENT_KEY6);
      event_handler_default.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event));
      event_handler_default.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      event_handler_default.off(document, EVENT_KEY6);
    }
    // Private
    _handleFocusin(event) {
      const { trapElement } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = selector_engine_default.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY2) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var focustrap_default = FocusTrap;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/util/scrollbar.js
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        manipulator_default.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = manipulator_default.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        manipulator_default.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of selector_engine_default.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var scrollbar_default = ScrollBarHelper;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.1+incompatible/js/src/offcanvas.js
  var NAME8 = "offcanvas";
  var DATA_KEY6 = "bs.offcanvas";
  var EVENT_KEY7 = `.${DATA_KEY6}`;
  var DATA_API_KEY4 = ".data-api";
  var EVENT_LOAD_DATA_API3 = `load${EVENT_KEY7}${DATA_API_KEY4}`;
  var ESCAPE_KEY2 = "Escape";
  var CLASS_NAME_SHOW5 = "show";
  var CLASS_NAME_SHOWING = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW4 = `show${EVENT_KEY7}`;
  var EVENT_SHOWN4 = `shown${EVENT_KEY7}`;
  var EVENT_HIDE4 = `hide${EVENT_KEY7}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY7}`;
  var EVENT_HIDDEN4 = `hidden${EVENT_KEY7}`;
  var EVENT_RESIZE = `resize${EVENT_KEY7}`;
  var EVENT_CLICK_DATA_API5 = `click${EVENT_KEY7}${DATA_API_KEY4}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY7}`;
  var SELECTOR_DATA_TOGGLE4 = '[data-bs-toggle="offcanvas"]';
  var Default7 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType7 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default7;
    }
    static get DefaultType() {
      return DefaultType7;
    }
    static get NAME() {
      return NAME8;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW4, { relatedTarget });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new scrollbar_default().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW5);
        this._element.classList.remove(CLASS_NAME_SHOWING);
        event_handler_default.trigger(this._element, EVENT_SHOWN4, { relatedTarget });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW5, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new scrollbar_default().reset();
        }
        event_handler_default.trigger(this._element, EVENT_HIDDEN4);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new backdrop_default({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new focustrap_default({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      event_handler_default.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY2) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API5, SELECTOR_DATA_TOGGLE4, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    event_handler_default.one(target, EVENT_HIDDEN4, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = selector_engine_default.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API3, () => {
    for (const selector of selector_engine_default.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  event_handler_default.on(window, EVENT_RESIZE, () => {
    for (const element of selector_engine_default.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/header@v0.9.0/assets/hb/modules/header/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const header2 = document.querySelector(".hb-header");
      const nav = header2.querySelector(".hb-header-nav");
      if (!header2) {
        return;
      }
      const shadow = () => {
        nav.classList.add("shadow-sm");
      };
      const removeShadow = () => {
        nav.classList.contains("shadow-sm") && nav.classList.remove("shadow-sm");
      };
      const show = () => {
        nav.style.removeProperty("opacity");
        nav.style.removeProperty("z-index");
      };
      const hide = () => {
        nav.style.opacity = "0";
        nav.style.zIndex = "0";
      };
      const topOffset = () => {
        const v = nav.clientHeight + 24;
        document.body.style.setProperty(`--${params_default.styles.prefix}top-offset`, v + "px");
      };
      if (params_default.header.sticky) {
        topOffset();
        window.addEventListener("resize", () => {
          topOffset();
        });
      }
      let h = 0;
      const threshold = 20;
      if (document.documentElement.scrollTop !== 0) {
        header2.classList.add("scrolling");
      }
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop === 0) {
          header2.classList.remove("scrolling");
          removeShadow();
        } else {
          header2.classList.add("scrolling");
          shadow();
        }
        if (window.innerWidth < 576 && Math.abs(document.documentElement.scrollTop - h) > threshold) {
          document.documentElement.scrollTop > h ? hide() : show();
          h = document.documentElement.scrollTop;
        }
      });
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/heading-sign@v0.1.3/assets/hb/modules/heading-sign/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const containers = params_exports?.heading_sign?.containers;
      if (!containers) {
        return;
      }
      for (const selector in containers) {
        const container = document.querySelector(selector);
        if (!container) {
          continue;
        }
        container.querySelectorAll("h2, h3, h4, h5, h6").forEach((heading) => {
          const id = heading.getAttribute("id");
          if (!id) {
            return;
          }
          const anchor = document.createElement("a");
          anchor.className = "anchor ms-1";
          anchor.href = `#${id}`;
          anchor.innerText = "\xA7";
          heading.appendChild(anchor);
        });
      }
    });
  })();

  // <stdin>
  var import_bigger_picture_umd = __toESM(require_bigger_picture_umd());

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/bigger-picture@v0.9.2/assets/hb/modules/bigger-picture/js/panel.ts
  var Panel = class {
    constructor(bp, downloadIcon, shareIcon, rotateIcon, flipIcon, playIcon) {
      this.bp = bp;
      this.downloadIcon = downloadIcon;
      this.shareIcon = shareIcon;
      this.rotateIcon = rotateIcon;
      this.flipIcon = flipIcon;
      this.playIcon = playIcon;
    }
    init(container) {
      const p = document.createElement("div");
      p.classList.add("bp-panel", "d-flex", "position-absolute", "mx-auto", "start-0", "end-0", "text-center");
      p.appendChild(this.rotate(false));
      p.appendChild(this.rotate(true));
      p.appendChild(this.flip());
      p.appendChild(this.play());
      p.appendChild(this.download());
      p.appendChild(this.share());
      container.appendChild(p);
    }
    update(container, item) {
      const p = container.querySelector(".bp-panel");
      const d = p.querySelector(".bp-panel-download");
      d.href = item.img;
      d.download = item.alt;
    }
    imgWrap = () => {
      return document.querySelector(".bp-img-wrap");
    };
    rotate = (clockwise = false) => {
      const a = document.createElement("a");
      a.title = "Rotate";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-rotate", clockwise ? "bp-panel-rotate-clockwise" : "bp-panel-rotate-anticlockwise", "text-decoration-none", "p-2");
      a.innerHTML = this.rotateIcon;
      a.addEventListener("click", () => {
        const wrap = this.imgWrap();
        let value = parseInt(wrap.getAttribute("data-rotate") ?? "0");
        value += clockwise ? 90 : -90;
        wrap.setAttribute("data-rotate", value.toString());
        this.transform(wrap);
      });
      return a;
    };
    flip = () => {
      const a = document.createElement("a");
      a.title = "Flip";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-flip", "text-decoration-none", "p-2");
      a.innerHTML = this.flipIcon;
      a.addEventListener("click", () => {
        const wrap = this.imgWrap();
        if (wrap.hasAttribute("data-flip")) {
          wrap.removeAttribute("data-flip");
        } else {
          wrap.setAttribute("data-flip", "true");
        }
        this.transform(wrap);
      });
      return a;
    };
    transform = (wrap) => {
      const transform = [];
      const rotate = wrap.getAttribute("data-rotate");
      if (rotate) {
        transform.push(`rotate(${parseInt(rotate)}deg)`);
      }
      const flip = wrap.getAttribute("data-flip");
      if (flip) {
        transform.push("scaleX(-1)");
      }
      wrap.style.transform = transform.join(" ");
    };
    playJob = 0;
    playInterval = 1e3;
    play = () => {
      const a = document.createElement("a");
      a.title = "Play";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-play", "text-decoration-none", "p-2");
      a.innerHTML = this.playIcon;
      a.addEventListener("click", () => {
        if (this.playJob) {
          clearInterval(this.playJob);
          this.playJob = 0;
          a.classList.remove("active");
          return;
        }
        a.classList.add("active");
        this.playJob = setInterval(() => {
          this.bp.next();
        }, params_default.bigger_picture.play_interval ?? 5e3);
      });
      return a;
    };
    download = () => {
      const a = document.createElement("a");
      a.title = "Download";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-download", "text-decoration-none", "p-2");
      a.setAttribute("download", "");
      a.innerHTML = this.downloadIcon;
      return a;
    };
    twitterShareLink = () => {
      return `https://twitter.com/intent/tweet?url=${this.shareLink()}`;
    };
    facebookShareLink = () => {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.shareLink()}`;
    };
    shareLink = () => {
      return encodeURIComponent(window.location.href);
    };
    share = () => {
      const el = document.createElement("div");
      el.classList.add("bp-panel-action", "dropdown-center", "bp-panel-share", "p-2");
      el.innerHTML = `<a class="text-white" href="#" role="button" title="Share" data-bs-toggle="dropdown" aria-expanded="false">${this.shareIcon}</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" target="_blank" href="${this.twitterShareLink()}">Twitter</a></li>
            <li><a class="dropdown-item" target="_blank" href="${this.facebookShareLink()}">Facebook</a></li>
          </ul>`;
      return el;
    };
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/back-to-top@v0.1.2/assets/hb/modules/back-to-top/js/button.ts
  var Button = class {
    btn;
    constructor(icon) {
      const btn = document.createElement("button");
      btn.className = "hb-back-to-top";
      btn.ariaLabel = "Back to top";
      btn.innerHTML = icon;
      document.body.appendChild(btn);
      this.btn = btn;
      let y = 0;
      window.addEventListener("scroll", () => {
        const top = document.documentElement.scrollTop;
        if (document.body.scrollTop > 20 || top > 20) {
          this.show();
        } else {
          this.hide();
        }
        if (this.animation() && top > y) {
          btn.classList.remove("scrolling");
        }
        y = top;
      });
      this.btn.addEventListener("click", () => {
        this.animation() && btn.classList.add("scrolling");
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });
    }
    show() {
      this.btn.classList.add("show");
    }
    hide() {
      this.btn.classList.remove("show");
    }
    animation() {
      return params_exports?.back_to_top?.animation !== false;
    }
  };

  // <stdin>
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const bp = (0, import_bigger_picture_umd.default)({
        target: document.body
      });
      const panel = new Panel(bp, `<svg aria-hidden="true" class="bi bi-downloadbi bi-download hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-sharebi bi-share hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-arrow-clockwisebi bi-arrow-clockwise hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-phone-flipbi bi-phone-flip hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0v2ZM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11c.099 0 .197 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169 0 .003 0 .065-.13.187-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883-.228-.223-.535-.411-.882-.571ZM7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-play-circlebi bi-play-circle hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
</svg>`);
      const onOpen = (container) => {
        panel.init(container);
      };
      const onUpdate = (container, item) => {
        panel.update(container, item);
      };
      const show = (imgs, pos) => {
        bp.open({
          items: imgs,
          intro: "fadeup",
          position: pos,
          onOpen,
          onUpdate
        });
      };
      const data = (img) => {
        return {
          img: img.getAttribute("data-src") ?? img.src,
          height: img.getAttribute("data-height") ?? img.naturalHeight,
          width: img.getAttribute("data-width") ?? img.naturalWidth,
          alt: img.getAttribute("alt"),
          caption: img.getAttribute("alt"),
          thumb: img.src
        };
      };
      const images = document.querySelectorAll("img");
      for (const img of images) {
        if (img.closest("a")) {
          continue;
        }
        img.addEventListener("click", () => {
          const imgs = [];
          let pos = 0;
          const set = img.closest(".bigger-pictures");
          if (set) {
            const els = set.querySelectorAll("img");
            for (let i = 0; i < els.length; i++) {
              if (els[i] === img) {
                pos = i;
              }
              imgs.push(data(els[i]));
            }
          } else {
            imgs.push(data(img));
          }
          show(imgs, pos);
        });
      }
      const links = Array.from(document.querySelectorAll(".img-link"));
      for (const link of links) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          show([{
            img: link.getAttribute("href"),
            alt: link.innerText,
            caption: link.innerText
          }], 0);
        });
      }
    });
  })();
  (() => {
    "use strict";
    window.addEventListener("DOMContentLoaded", () => {
      const btn = new Button(`<svg aria-hidden="true" class="bi bi-rocketbi bi-rocket hi-svg-inline hb-back-to-top-icon" fill="currentColor" height="2em" viewBox="0 0 16 16" width="2em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8Z"/>
  <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.495 3.495 0 0 0-.463-.315A2.19 2.19 0 0 0 8.25.064.546.546 0 0 0 8 0a.549.549 0 0 0-.266.073 2.312 2.312 0 0 0-.142.08 3.67 3.67 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635.85 0 1.7-.207 2.4-.635.067.03.132.056.196.083.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562l-1.499-1.83ZM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935L12 10.445ZM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199ZM8.009 1.073c.063.04.14.094.226.163.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13c-.781 0-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32.09-.076.17-.135.236-.18Z"/>
  <path d="M9.479 14.361c-.48.093-.98.139-1.479.139-.5 0-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0l1.079-1.439Z"/>
</svg>`);
    });
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vZ29odWdvaW8vaHVnby1tb2QtanNsaWJzLWRpc3QvcG9wcGVyanMvdjJAdjIuMjExMDAuMjAwMDAvcGFja2FnZS9kaXN0L2Nqcy9wb3BwZXIuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGVucnlnZC9iaWdnZXItcGljdHVyZUB2MS4xLjExL2Rpc3QvYmlnZ2VyLXBpY3R1cmUudW1kLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svc2xpZGVAdjAuMi4wL2Fzc2V0cy9oYi9tb2R1bGVzL3NsaWRlL2pzL2luZGV4LnRzIiwgIm5zLXBhcmFtczpAcGFyYW1zIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svcHJvZ3Jlc3MtYmFyQHYwLjEuMC9hc3NldHMvaGIvbW9kdWxlcy9wcm9ncmVzcy1iYXIvanMvcHJvZ3Jlc3MudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9wcm9ncmVzcy1iYXJAdjAuMS4wL2Fzc2V0cy9oYi9tb2R1bGVzL3Byb2dyZXNzLWJhci9qcy9pbmRleC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2Jhc2VAdjAuMi4xL2Fzc2V0cy9oYi9tb2R1bGVzL2Jhc2UvanMvcmVzcG9uc2l2ZS10YWJsZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjEraW5jb21wYXRpYmxlL2pzL3NyYy9kb20vZGF0YS5qcyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjEraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL2luZGV4LmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMStpbmNvbXBhdGlibGUvanMvc3JjL2RvbS9ldmVudC1oYW5kbGVyLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMStpbmNvbXBhdGlibGUvanMvc3JjL2RvbS9tYW5pcHVsYXRvci5qcyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjEraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL2NvbmZpZy5qcyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjEraW5jb21wYXRpYmxlL2pzL3NyYy9iYXNlLWNvbXBvbmVudC5qcyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjEraW5jb21wYXRpYmxlL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMStpbmNvbXBhdGlibGUvanMvc3JjL2NvbGxhcHNlLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMStpbmNvbXBhdGlibGUvanMvc3JjL3RhYi5qcyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjEraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL3N3aXBlLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMStpbmNvbXBhdGlibGUvanMvc3JjL2Nhcm91c2VsLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svY2Fyb3VzZWxAdjAuMi4zL2Fzc2V0cy9oYi9tb2R1bGVzL2Nhcm91c2VsL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMStpbmNvbXBhdGlibGUvanMvc3JjL2Ryb3Bkb3duLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMStpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvYmFja2Ryb3AuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4xK2luY29tcGF0aWJsZS9qcy9zcmMvdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMStpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvZm9jdXN0cmFwLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMStpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvc2Nyb2xsYmFyLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMStpbmNvbXBhdGlibGUvanMvc3JjL29mZmNhbnZhcy5qcyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2hlYWRlckB2MC45LjAvYXNzZXRzL2hiL21vZHVsZXMvaGVhZGVyL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svaGVhZGluZy1zaWduQHYwLjEuMy9hc3NldHMvaGIvbW9kdWxlcy9oZWFkaW5nLXNpZ24vanMvaW5kZXgudHMiLCAiPHN0ZGluPiIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2JpZ2dlci1waWN0dXJlQHYwLjkuMi9hc3NldHMvaGIvbW9kdWxlcy9iaWdnZXItcGljdHVyZS9qcy9wYW5lbC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2JhY2stdG8tdG9wQHYwLjEuMi9hc3NldHMvaGIvbW9kdWxlcy9iYWNrLXRvLXRvcC9qcy9idXR0b24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQHBvcHBlcmpzL2NvcmUgdjIuMTEuMCAtIE1JVCBMaWNlbnNlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcblxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSkge1xuICBpZiAoaW5jbHVkZVNjYWxlID09PSB2b2lkIDApIHtcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IDE7XG4gIHZhciBzY2FsZVkgPSAxO1xuXG4gIGlmIChpc0hUTUxFbGVtZW50KGVsZW1lbnQpICYmIGluY2x1ZGVTY2FsZSkge1xuICAgIHZhciBvZmZzZXRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB2YXIgb2Zmc2V0V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoOyAvLyBEbyBub3QgYXR0ZW1wdCB0byBkaXZpZGUgYnkgMCwgb3RoZXJ3aXNlIHdlIGdldCBgSW5maW5pdHlgIGFzIHNjYWxlXG4gICAgLy8gRmFsbGJhY2sgdG8gMSBpbiBjYXNlIGJvdGggdmFsdWVzIGFyZSBgMGBcblxuICAgIGlmIChvZmZzZXRXaWR0aCA+IDApIHtcbiAgICAgIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gb2Zmc2V0V2lkdGggfHwgMTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0SGVpZ2h0ID4gMCkge1xuICAgICAgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gb2Zmc2V0SGVpZ2h0IHx8IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCAvIHNjYWxlWCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0IC8gc2NhbGVZLFxuICAgIHRvcDogcmVjdC50b3AgLyBzY2FsZVksXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQgLyBzY2FsZVgsXG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSAvIHNjYWxlWSxcbiAgICBsZWZ0OiByZWN0LmxlZnQgLyBzY2FsZVgsXG4gICAgeDogcmVjdC5sZWZ0IC8gc2NhbGVYLFxuICAgIHk6IHJlY3QudG9wIC8gc2NhbGVZXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnRTY2FsZWQoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDE7XG4gIHJldHVybiBzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxO1xufSAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnRJc1NjYWxlZCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBpc0VsZW1lbnRTY2FsZWQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50SXNTY2FsZWQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn1cblxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5mdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn1cblxuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59XG5cbmZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcbiAgdmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSAhPT0gLTE7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufVxuXG52YXIgdG9wID0gJ3RvcCc7XG52YXIgYm90dG9tID0gJ2JvdHRvbSc7XG52YXIgcmlnaHQgPSAncmlnaHQnO1xudmFyIGxlZnQgPSAnbGVmdCc7XG52YXIgYXV0byA9ICdhdXRvJztcbnZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xudmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbnZhciBlbmQgPSAnZW5kJztcbnZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbnZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG52YXIgcG9wcGVyID0gJ3BvcHBlcic7XG52YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG52YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xudmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxudmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG52YXIgcmVhZCA9ICdyZWFkJztcbnZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxudmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG52YXIgbWFpbiA9ICdtYWluJztcbnZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG52YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xudmFyIHdyaXRlID0gJ3dyaXRlJztcbnZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xudmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdO1xuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIFtdLmNvbmNhdChhcmdzKS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHtcbiAgICByZXR1cm4gcC5yZXBsYWNlKC8lcy8sIGMpO1xuICB9LCBzdHIpO1xufVxuXG52YXIgSU5WQUxJRF9NT0RJRklFUl9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiBwcm92aWRlZCBhbiBpbnZhbGlkICVzIHByb3BlcnR5LCBleHBlY3RlZCAlcyBidXQgZ290ICVzJztcbnZhciBNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcmVxdWlyZXMgXCIlc1wiLCBidXQgXCIlc1wiIG1vZGlmaWVyIGlzIG5vdCBhdmFpbGFibGUnO1xudmFyIFZBTElEX1BST1BFUlRJRVMgPSBbJ25hbWUnLCAnZW5hYmxlZCcsICdwaGFzZScsICdmbicsICdlZmZlY3QnLCAncmVxdWlyZXMnLCAnb3B0aW9ucyddO1xuZnVuY3Rpb24gdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIFtdLmNvbmNhdChPYmplY3Qua2V5cyhtb2RpZmllciksIFZBTElEX1BST1BFUlRJRVMpIC8vIElFMTEtY29tcGF0aWJsZSByZXBsYWNlbWVudCBmb3IgYG5ldyBTZXQoaXRlcmFibGUpYFxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgc2VsZikge1xuICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCAnXCJuYW1lXCInLCAnXCJzdHJpbmdcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLm5hbWUpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlbmFibGVkJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmVuYWJsZWQgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZW5hYmxlZFwiJywgJ1wiYm9vbGVhblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZW5hYmxlZCkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3BoYXNlJzpcbiAgICAgICAgICBpZiAobW9kaWZpZXJQaGFzZXMuaW5kZXhPZihtb2RpZmllci5waGFzZSkgPCAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJwaGFzZVwiJywgXCJlaXRoZXIgXCIgKyBtb2RpZmllclBoYXNlcy5qb2luKCcsICcpLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5waGFzZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZuJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJmblwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZWZmZWN0JzpcbiAgICAgICAgICBpZiAobW9kaWZpZXIuZWZmZWN0ICE9IG51bGwgJiYgdHlwZW9mIG1vZGlmaWVyLmVmZmVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZWZmZWN0XCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlcyc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyLnJlcXVpcmVzICE9IG51bGwgJiYgIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXNJZkV4aXN0cyc6XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc0lmRXhpc3RzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29wdGlvbnMnOlxuICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb3BwZXJKUzogYW4gaW52YWxpZCBwcm9wZXJ0eSBoYXMgYmVlbiBwcm92aWRlZCB0byB0aGUgXFxcIlwiICsgbW9kaWZpZXIubmFtZSArIFwiXFxcIiBtb2RpZmllciwgdmFsaWQgcHJvcGVydGllcyBhcmUgXCIgKyBWQUxJRF9QUk9QRVJUSUVTLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlwiICsgcyArIFwiXFxcIlwiO1xuICAgICAgICAgIH0pLmpvaW4oJywgJykgKyBcIjsgYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcHJvdmlkZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBtb2RpZmllci5yZXF1aXJlcyAmJiBtb2RpZmllci5yZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xuICAgICAgICBpZiAobW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICAgIHJldHVybiBtb2QubmFtZSA9PT0gcmVxdWlyZW1lbnQ7XG4gICAgICAgIH0pID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgcmVxdWlyZW1lbnQsIHJlcXVpcmVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdW5pcXVlQnkoYXJyLCBmbikge1xuICB2YXIgaWRlbnRpZmllcnMgPSBuZXcgU2V0KCk7XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBmbihpdGVtKTtcblxuICAgIGlmICghaWRlbnRpZmllcnMuaGFzKGlkZW50aWZpZXIpKSB7XG4gICAgICBpZGVudGlmaWVycy5hZGQoaWRlbnRpZmllcik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59XG5cbmZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwOyAvLyBOQjogVGhpcyBpc24ndCBzdXBwb3J0ZWQgb24gaU9TIDw9IDEyLiBJZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiwgdGhlIHBvcHBlclxuICAvLyBjYW4gYmUgb2JzY3VyZWQgdW5kZXJuZWF0aCBpdC5cbiAgLy8gQWxzbywgYGh0bWwuY2xpZW50SGVpZ2h0YCBhZGRzIHRoZSBib3R0b20gYmFyIGhlaWdodCBpbiBTYWZhcmkgaU9TLCBldmVuXG4gIC8vIGlmIGl0IGlzbid0IG9wZW4sIHNvIGlmIHRoaXMgaXNuJ3QgYXZhaWxhYmxlLCB0aGUgcG9wcGVyIHdpbGwgYmUgZGV0ZWN0ZWRcbiAgLy8gdG8gb3ZlcmZsb3cgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvbyBlYXJseS5cblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDsgLy8gVXNlcyBMYXlvdXQgVmlld3BvcnQgKGxpa2UgQ2hyb21lOyBTYWZhcmkgZG9lcyBub3QgY3VycmVudGx5KVxuICAgIC8vIEluIENocm9tZSwgaXQgcmV0dXJucyBhIHZhbHVlIHZlcnkgY2xvc2UgdG8gMCAoKy8tKSBidXQgY29udGFpbnMgcm91bmRpbmdcbiAgICAvLyBlcnJvcnMgZHVlIHRvIGZsb2F0aW5nIHBvaW50IG51bWJlcnMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgcHJlY2lzaW9uLlxuICAgIC8vIFNhZmFyaSByZXR1cm5zIGEgbnVtYmVyIDw9IDAsIHVzdWFsbHkgPCAtMSB3aGVuIHBpbmNoLXpvb21lZFxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZhaWxzIGluIG1vYmlsZSBlbXVsYXRpb24gbW9kZSBpbiBDaHJvbWUuXG4gICAgLy8gTWF0aC5hYnMod2luLmlubmVyV2lkdGggLyB2aXN1YWxWaWV3cG9ydC5zY2FsZSAtIHZpc3VhbFZpZXdwb3J0LndpZHRoKSA8XG4gICAgLy8gMC4wMDFcbiAgICAvLyBGYWxsYmFjayBoZXJlOiBcIk5vdCBTYWZhcmlcIiB1c2VyQWdlbnRcblxuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn1cblxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JyAmJiAoY2FuRXNjYXBlQ2xpcHBpbmcgPyBnZXRDb21wdXRlZFN0eWxlKGNsaXBwaW5nUGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgOiB0cnVlKTtcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufVxuXG5mdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufVxuXG5mdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gIH07XG4gIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufVxuXG52YXIgSU5WQUxJRF9FTEVNRU5UX0VSUk9SID0gJ1BvcHBlcjogSW52YWxpZCByZWZlcmVuY2Ugb3IgcG9wcGVyIGFyZ3VtZW50IHByb3ZpZGVkLiBUaGV5IG11c3QgYmUgZWl0aGVyIGEgRE9NIGVsZW1lbnQgb3IgdmlydHVhbCBlbGVtZW50Lic7XG52YXIgSU5GSU5JVEVfTE9PUF9FUlJPUiA9ICdQb3BwZXI6IEFuIGluZmluaXRlIGxvb3AgaW4gdGhlIG1vZGlmaWVycyBjeWNsZSBoYXMgYmVlbiBkZXRlY3RlZCEgVGhlIGN5Y2xlIGhhcyBiZWVuIGludGVycnVwdGVkIHRvIHByZXZlbnQgYSBicm93c2VyIGNyYXNoLic7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcbiAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBtb2RpZmllcnMgaXMgaW52YWxpZCBmb3IgYW55IHJlYXNvblxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXJzID0gdW5pcXVlQnkoW10uY29uY2F0KG9yZGVyZWRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKTtcblxuICAgICAgICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHN0YXRlLm9wdGlvbnMucGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgICAgICAgICAgdmFyIGZsaXBNb2RpZmllciA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2ZsaXAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZmxpcE1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXV0b1wiIHBsYWNlbWVudHMgcmVxdWlyZSB0aGUgXCJmbGlwXCIgbW9kaWZpZXIgYmUnLCAncHJlc2VudCBhbmQgZW5hYmxlZCB0byB3b3JrLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BwZXIpLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQ7IC8vIFdlIG5vIGxvbmdlciB0YWtlIGludG8gYWNjb3VudCBgbWFyZ2luc2Agb24gdGhlIHBvcHBlciwgYW5kIGl0IGNhblxuICAgICAgICAgIC8vIGNhdXNlIGJ1Z3Mgd2l0aCBwb3NpdGlvbmluZywgc28gd2UnbGwgd2FybiB0aGUgY29uc3VtZXJcblxuXG4gICAgICAgICAgaWYgKFttYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRdLnNvbWUoZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWFyZ2luKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBDU1MgXCJtYXJnaW5cIiBzdHlsZXMgY2Fubm90IGJlIHVzZWQgdG8gYXBwbHkgcGFkZGluZycsICdiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudCBvciBib3VuZGFyeS4nLCAnVG8gcmVwbGljYXRlIG1hcmdpbiwgdXNlIHRoZSBgb2Zmc2V0YCBtb2RpZmllciwgYXMgd2VsbCBhcycsICd0aGUgYHBhZGRpbmdgIG9wdGlvbiBpbiB0aGUgYHByZXZlbnRPdmVyZmxvd2AgYW5kIGBmbGlwYCcsICdtb2RpZmllcnMuJ10uam9pbignICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIFx1MjAxMyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfX2RlYnVnX2xvb3BzX18gPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9fZGVidWdfbG9vcHNfXyArPSAxO1xuXG4gICAgICAgICAgICBpZiAoX19kZWJ1Z19sb29wc19fID4gMTAwKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5GSU5JVEVfTE9PUF9FUlJPUik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSBcdTIwMTMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdCQyKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QkMixcbiAgZGF0YToge31cbn07XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIHBvcHBlck9mZnNldHMkMSA9IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07XG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnk7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG4gIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG4gICAgeTogcm91bmQoeSAqIGRwcikgLyBkcHIgfHwgMFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIHZhcmlhdGlvbiA9IF9yZWYyLnZhcmlhdGlvbixcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsXG4gICAgICBpc0ZpeGVkID0gX3JlZjIuaXNGaXhlZDtcblxuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMob2Zmc2V0cykgOiBvZmZzZXRzLFxuICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsXG4gICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgIHkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTtcbiAgICAgIHZhciBvZmZzZXRZID0gaXNGaXhlZCAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQuaGVpZ2h0IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG4gICAgICB5IC09IG9mZnNldFkgLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQgfHwgKHBsYWNlbWVudCA9PT0gdG9wIHx8IHBsYWNlbWVudCA9PT0gYm90dG9tKSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVggPSByaWdodDtcbiAgICAgIHZhciBvZmZzZXRYID0gaXNGaXhlZCAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFt3aWR0aFByb3BdO1xuICAgICAgeCAtPSBvZmZzZXRYIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjQub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRDb21wdXRlZFN0eWxlKHN0YXRlLmVsZW1lbnRzLnBvcHBlcikudHJhbnNpdGlvblByb3BlcnR5IHx8ICcnO1xuXG4gICAgaWYgKGFkYXB0aXZlICYmIFsndHJhbnNmb3JtJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLnNvbWUoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvblByb3BlcnR5LmluZGV4T2YocHJvcGVydHkpID49IDA7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogRGV0ZWN0ZWQgQ1NTIHRyYW5zaXRpb25zIG9uIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nJywgJ0NTUyBwcm9wZXJ0aWVzOiBcInRyYW5zZm9ybVwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLicsICdcXG5cXG4nLCAnRGlzYWJsZSB0aGUgXCJjb21wdXRlU3R5bGVzXCIgbW9kaWZpZXJcXCdzIGBhZGFwdGl2ZWAgb3B0aW9uIHRvIGFsbG93JywgJ2ZvciBzbW9vdGggdHJhbnNpdGlvbnMsIG9yIHJlbW92ZSB0aGVzZSBwcm9wZXJ0aWVzIGZyb20gdGhlIENTUycsICd0cmFuc2l0aW9uIGRlY2xhcmF0aW9uIG9uIHRoZSBwb3BwZXIgZWxlbWVudCBpZiBvbmx5IHRyYW5zaXRpb25pbmcnLCAnb3BhY2l0eSBvciBiYWNrZ3JvdW5kLWNvbG9yIGZvciBleGFtcGxlLicsICdcXG5cXG4nLCAnV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBwb3BwZXIgZWxlbWVudCBhcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGlubmVyJywgJ2VsZW1lbnQgdGhhdCBjYW4gaGF2ZSBhbnkgQ1NTIHByb3BlcnR5IHRyYW5zaXRpb25lZCBmb3IgYW5pbWF0aW9ucy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb24sXG4gICAgaXNGaXhlZDogc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJ1xuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBjb21wdXRlU3R5bGVzJDEgPSB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTtcblxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0JDEoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgIHBvcHBlcjoge1xuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfSxcbiAgICBhcnJvdzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgIHJlZmVyZW5jZToge31cbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgc3R5bGVQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuc3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gc3RhdGUuc3R5bGVzW25hbWVdIDogaW5pdGlhbFN0eWxlc1tuYW1lXSk7IC8vIFNldCBhbGwgdmFsdWVzIHRvIGFuIGVtcHR5IHN0cmluZyB0byB1bnNldCB0aGVtXG5cbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBhcHBseVN0eWxlcyQxID0ge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCQxLFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07XG5cbmZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgb2Zmc2V0JDEgPSB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07XG5cbnZhciBoYXNoJDEgPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaCQxW21hdGNoZWRdO1xuICB9KTtcbn1cblxudmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IHBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMkMSA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogVGhlIGBhbGxvd2VkQXV0b1BsYWNlbWVudHNgIG9wdGlvbiBkaWQgbm90IGFsbG93IGFueScsICdwbGFjZW1lbnRzLiBFbnN1cmUgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbiBtYXRjaGVzIHRoZSB2YXJpYXRpb24nLCAnb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cy4nLCAnRm9yIGV4YW1wbGUsIFwiYXV0b1wiIGNhbm5vdCBiZSB1c2VkIHRvIGFsbG93IFwiYm90dG9tLXN0YXJ0XCIuJywgJ1VzZSBcImF1dG8tc3RhcnRcIiBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMgXHUyMDEzIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGZsaXAkMSA9IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn1cblxuZnVuY3Rpb24gd2l0aGluKG1pbiQxLCB2YWx1ZSwgbWF4JDEpIHtcbiAgcmV0dXJuIG1heChtaW4kMSwgbWluKHZhbHVlLCBtYXgkMSkpO1xufVxuZnVuY3Rpb24gd2l0aGluTWF4Q2xhbXAobWluLCB2YWx1ZSwgbWF4KSB7XG4gIHZhciB2ID0gd2l0aGluKG1pbiwgdmFsdWUsIG1heCk7XG4gIHJldHVybiB2ID4gbWF4ID8gbWF4IDogdjtcbn1cblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgIG1haW5BeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZSxcbiAgICBhbHRBeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZVxuICB9IDogT2JqZWN0LmFzc2lnbih7XG4gICAgbWFpbkF4aXM6IDAsXG4gICAgYWx0QXhpczogMFxuICB9LCB0ZXRoZXJPZmZzZXRWYWx1ZSk7XG4gIHZhciBvZmZzZXRNb2RpZmllclN0YXRlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdIDogbnVsbDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkO1xuXG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4kMSA9IG9mZnNldCArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICB2YXIgbWF4JDEgPSBvZmZzZXQgLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVttYWluQXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgOiAwO1xuICAgIHZhciB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBvZmZzZXQgKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWluKG1pbiQxLCB0ZXRoZXJNaW4pIDogbWluJDEsIG9mZnNldCwgdGV0aGVyID8gbWF4KG1heCQxLCB0ZXRoZXJNYXgpIDogbWF4JDEpO1xuICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICB9XG5cbiAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyO1xuXG4gICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJDIgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW2FsdEF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkMiA6IDA7XG5cbiAgICB2YXIgX3RldGhlck1pbiA9IGlzT3JpZ2luU2lkZSA/IF9taW4gOiBfb2Zmc2V0IC0gcmVmZXJlbmNlUmVjdFtfbGVuXSAtIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzO1xuXG4gICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcblxuICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gdGV0aGVyICYmIGlzT3JpZ2luU2lkZSA/IHdpdGhpbk1heENsYW1wKF90ZXRoZXJNaW4sIF9vZmZzZXQsIF90ZXRoZXJNYXgpIDogd2l0aGluKHRldGhlciA/IF90ZXRoZXJNaW4gOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBfdGV0aGVyTWF4IDogX21heCk7XG5cbiAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBwcmV2ZW50T3ZlcmZsb3ckMSA9IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07XG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IChub3QgYW4gU1ZHRWxlbWVudCkuJywgJ1RvIHVzZSBhbiBTVkcgYXJyb3csIHdyYXAgaXQgaW4gYW4gSFRNTEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMnLCAndGhlIGFycm93LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgbW9kaWZpZXJcXCdzIGBlbGVtZW50YCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIHBvcHBlcicsICdlbGVtZW50LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgYXJyb3ckMSA9IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59O1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgaGlkZSQxID0ge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59O1xuXG52YXIgZGVmYXVsdE1vZGlmaWVycyQxID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzJDEsIGNvbXB1dGVTdHlsZXMkMSwgYXBwbHlTdHlsZXMkMV07XG52YXIgY3JlYXRlUG9wcGVyJDEgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVycyQxXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDEsIG9mZnNldCQxLCBmbGlwJDEsIHByZXZlbnRPdmVyZmxvdyQxLCBhcnJvdyQxLCBoaWRlJDFdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnRzLmFwcGx5U3R5bGVzID0gYXBwbHlTdHlsZXMkMTtcbmV4cG9ydHMuYXJyb3cgPSBhcnJvdyQxO1xuZXhwb3J0cy5jb21wdXRlU3R5bGVzID0gY29tcHV0ZVN0eWxlcyQxO1xuZXhwb3J0cy5jcmVhdGVQb3BwZXIgPSBjcmVhdGVQb3BwZXI7XG5leHBvcnRzLmNyZWF0ZVBvcHBlckxpdGUgPSBjcmVhdGVQb3BwZXIkMTtcbmV4cG9ydHMuZGVmYXVsdE1vZGlmaWVycyA9IGRlZmF1bHRNb2RpZmllcnM7XG5leHBvcnRzLmRldGVjdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3c7XG5leHBvcnRzLmV2ZW50TGlzdGVuZXJzID0gZXZlbnRMaXN0ZW5lcnM7XG5leHBvcnRzLmZsaXAgPSBmbGlwJDE7XG5leHBvcnRzLmhpZGUgPSBoaWRlJDE7XG5leHBvcnRzLm9mZnNldCA9IG9mZnNldCQxO1xuZXhwb3J0cy5wb3BwZXJHZW5lcmF0b3IgPSBwb3BwZXJHZW5lcmF0b3I7XG5leHBvcnRzLnBvcHBlck9mZnNldHMgPSBwb3BwZXJPZmZzZXRzJDE7XG5leHBvcnRzLnByZXZlbnRPdmVyZmxvdyA9IHByZXZlbnRPdmVyZmxvdyQxO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9wcGVyLmpzLm1hcFxuIiwgIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLkJpZ2dlclBpY3R1cmUgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBub29wKCkgeyB9XG4gICAgY29uc3QgaWRlbnRpdHkgPSB4ID0+IHg7XG4gICAgZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZm9yIChjb25zdCBrIGluIHNyYylcbiAgICAgICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICAgICAgcmV0dXJuIHRhcjtcbiAgICB9XG4gICAgZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgICAgICBmbnMuZm9yRWFjaChydW4pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYjtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHN0b3JlLCAuLi5jYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKHN0b3JlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG4gICAgICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1YjtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuICAgICAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xuICAgIH1cbiAgICBsZXQgbm93ID0gKCkgPT4gZ2xvYmFsVGhpcy5wZXJmb3JtYW5jZS5ub3coKVxuICAgICAgICA7XG4gICAgbGV0IHJhZiA9IGNiID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgO1xuXG4gICAgY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gcnVuX3Rhc2tzKG5vdykge1xuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKCF0YXNrLmMobm93KSkge1xuICAgICAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrLmYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0YXNrcy5zaXplICE9PSAwKVxuICAgICAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgdGFzayB0aGF0IHJ1bnMgb24gZWFjaCByYWYgZnJhbWVcbiAgICAgKiB1bnRpbCBpdCByZXR1cm5zIGEgZmFsc3kgdmFsdWUgb3IgaXMgYWJvcnRlZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxvb3AoY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHRhc2s7XG4gICAgICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWxsID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrcy5hZGQodGFzayA9IHsgYzogY2FsbGJhY2ssIGY6IGZ1bGZpbGwgfSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRleHQoZGF0YSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGV4dCgnJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgZWxzZSBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpXG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCwgYnViYmxlcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgYnViYmxlcywgZmFsc2UsIGRldGFpbCk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBsZXQgc3R5bGVzaGVldDtcbiAgICBsZXQgYWN0aXZlID0gMDtcbiAgICBsZXQgY3VycmVudF9ydWxlcyA9IHt9O1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gICAgLy8gZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICAvLyAgICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIC8vICAgICBsZXQgaSA9IHN0ci5sZW5ndGg7XG4gICAgLy8gICAgIHdoaWxlIChpLS0pXG4gICAgLy8gICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAvLyAgICAgcmV0dXJuIGhhc2ggPj4+IDA7XG4gICAgLy8gfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9ydWxlKG5vZGUsIGEsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzZSwgZm4sIHVpZCA9IDApIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgICAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8PSAxOyBwICs9IHN0ZXApIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgICAgICBjb25zdCBuYW1lID0gYF9icF8ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlOSl9XyR7dWlkfWA7XG4gICAgICAgIGlmICghY3VycmVudF9ydWxlc1tuYW1lXSkge1xuICAgICAgICAgICAgaWYgKCFzdHlsZXNoZWV0KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQgPSBzdHlsZS5zaGVldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRfcnVsZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogYGB9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgICAgIGFjdGl2ZSArPSAxO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJylcbiAgICAgICAgICAgIC5zcGxpdCgnLCAnKVxuICAgICAgICAgICAgLmZpbHRlcihuYW1lXG4gICAgICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgICAgICA6IGFuaW0gPT4gYW5pbS5pbmRleE9mKCdfYnAnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgICAgICApXG4gICAgICAgICAgICAuam9pbignLCAnKTtcbiAgICAgICAgaWYgKG5hbWUgJiYgIS0tYWN0aXZlKVxuICAgICAgICAgICAgY2xlYXJfcnVsZXMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgICAgIHJhZigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGxldCBpID0gc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgICAgICAgICAgIGN1cnJlbnRfcnVsZXMgPSB7fTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIGZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuICAgIGNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG4gICAgY29uc3QgcmVuZGVyX2NhbGxiYWNrcyA9IFtdO1xuICAgIGNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuICAgIGNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBsZXQgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkX3JlbmRlcl9jYWxsYmFjayhmbikge1xuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgICAvLyBmbHVzaCgpIGNhbGxzIGNhbGxiYWNrcyBpbiB0aGlzIG9yZGVyOlxuICAgIC8vIDEuIEFsbCBiZWZvcmVVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW5cbiAgICAvLyAyLiBBbGwgYmluZDp0aGlzIGNhbGxiYWNrcywgaW4gcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4gICAgLy8gMy4gQWxsIGFmdGVyVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuLiBFWENFUFRcbiAgICAvLyAgICBmb3IgYWZ0ZXJVcGRhdGVzIGNhbGxlZCBkdXJpbmcgdGhlIGluaXRpYWwgb25Nb3VudCwgd2hpY2ggYXJlIGNhbGxlZCBpblxuICAgIC8vICAgIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuICAgIC8vIFNpbmNlIGNhbGxiYWNrcyBtaWdodCB1cGRhdGUgY29tcG9uZW50IHZhbHVlcywgd2hpY2ggY291bGQgdHJpZ2dlciBhbm90aGVyXG4gICAgLy8gY2FsbCB0byBmbHVzaCgpLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGd1YXJkIGFnYWluc3QgdGhpczpcbiAgICAvLyAxLiBEdXJpbmcgYmVmb3JlVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgYmUgYWRkZWQgdG8gdGhlXG4gICAgLy8gICAgZGlydHlfY29tcG9uZW50cyBhcnJheSBhbmQgd2lsbCBjYXVzZSBhIHJlZW50cmFudCBjYWxsIHRvIGZsdXNoKCkuIEJlY2F1c2VcbiAgICAvLyAgICB0aGUgZmx1c2ggaW5kZXggaXMga2VwdCBvdXRzaWRlIHRoZSBmdW5jdGlvbiwgdGhlIHJlZW50cmFudCBjYWxsIHdpbGwgcGlja1xuICAgIC8vICAgIHVwIHdoZXJlIHRoZSBlYXJsaWVyIGNhbGwgbGVmdCBvZmYgYW5kIGdvIHRocm91Z2ggYWxsIGRpcnR5IGNvbXBvbmVudHMuIFRoZVxuICAgIC8vICAgIGN1cnJlbnRfY29tcG9uZW50IHZhbHVlIGlzIHNhdmVkIGFuZCByZXN0b3JlZCBzbyB0aGF0IHRoZSByZWVudHJhbnQgY2FsbCB3aWxsXG4gICAgLy8gICAgbm90IGludGVyZmVyZSB3aXRoIHRoZSBcInBhcmVudFwiIGZsdXNoKCkgY2FsbC5cbiAgICAvLyAyLiBiaW5kOnRoaXMgY2FsbGJhY2tzIGNhbm5vdCB0cmlnZ2VyIG5ldyBmbHVzaCgpIGNhbGxzLlxuICAgIC8vIDMuIER1cmluZyBhZnRlclVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIE5PVCBoYXZlIHRoZWlyIGFmdGVyVXBkYXRlXG4gICAgLy8gICAgY2FsbGJhY2sgY2FsbGVkIGEgc2Vjb25kIHRpbWU7IHRoZSBzZWVuX2NhbGxiYWNrcyBzZXQsIG91dHNpZGUgdGhlIGZsdXNoKClcbiAgICAvLyAgICBmdW5jdGlvbiwgZ3VhcmFudGVlcyB0aGlzIGJlaGF2aW9yLlxuICAgIGNvbnN0IHNlZW5fY2FsbGJhY2tzID0gbmV3IFNldCgpO1xuICAgIGxldCBmbHVzaGlkeCA9IDA7IC8vIERvICpub3QqIG1vdmUgdGhpcyBpbnNpZGUgdGhlIGZsdXNoKCkgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgICAgY29uc3Qgc2F2ZWRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIC8vIGZpcnN0LCBjYWxsIGJlZm9yZVVwZGF0ZSBmdW5jdGlvbnNcbiAgICAgICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICAgICAgd2hpbGUgKGZsdXNoaWR4IDwgZGlydHlfY29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzW2ZsdXNoaWR4XTtcbiAgICAgICAgICAgICAgICBmbHVzaGlkeCsrO1xuICAgICAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aClcbiAgICAgICAgICAgICAgICBiaW5kaW5nX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgICAgICAvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG4gICAgICAgICAgICAvLyBzdWJzZXF1ZW50IHVwZGF0ZXMuLi5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgICAgICBzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICAgICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgICAgICB3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgZmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICBzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gICAgICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJCQudXBkYXRlKCk7XG4gICAgICAgICAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgICAgICQkLmRpcnR5ID0gWy0xXTtcbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LnAoJCQuY3R4LCBkaXJ0eSk7XG4gICAgICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwcm9taXNlO1xuICAgIGZ1bmN0aW9uIHdhaXQoKSB7XG4gICAgICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwYXRjaChub2RlLCBkaXJlY3Rpb24sIGtpbmQpIHtcbiAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xuICAgIH1cbiAgICBjb25zdCBvdXRyb2luZyA9IG5ldyBTZXQoKTtcbiAgICBsZXQgb3V0cm9zO1xuICAgIGZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICAgICAgb3V0cm9zID0ge1xuICAgICAgICAgICAgcjogMCxcbiAgICAgICAgICAgIGM6IFtdLFxuICAgICAgICAgICAgcDogb3V0cm9zIC8vIHBhcmVudCBncm91cFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG4gICAgICAgIGlmICghb3V0cm9zLnIpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgICAgICB9XG4gICAgICAgIG91dHJvcyA9IG91dHJvcy5wO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuICAgICAgICBpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGJsb2NrLmkobG9jYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoYmxvY2sgJiYgYmxvY2subykge1xuICAgICAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgb3V0cm9pbmcuYWRkKGJsb2NrKTtcbiAgICAgICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jay5kKDEpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYmxvY2subyhsb2NhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICAgICAgbGV0IHRhc2s7XG4gICAgICAgIGxldCB1aWQgPSAwO1xuICAgICAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcywgdWlkKyspO1xuICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgICAgICBpZiAodGFzaylcbiAgICAgICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oZ28pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgICAgICBjb25zdCBncm91cCA9IG91dHJvcztcbiAgICAgICAgZ3JvdXAuciArPSAxO1xuICAgICAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5kKHJlc2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy50aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcbiAgICAgICAgYmxvY2sgJiYgYmxvY2suYygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvciwgY3VzdG9tRWxlbWVudCkge1xuICAgICAgICBjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgICAgIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgICAgICBpZiAoIWN1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld19vbl9kZXN0cm95ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAob25fZGVzdHJveSkge1xuICAgICAgICAgICAgICAgICAgICBvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAgICAgICAgIC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcbiAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuICAgICAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG4gICAgICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG4gICAgICAgICAgICAkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgICAgICAgJCQuY3R4ID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC4kJC5kaXJ0eVswXSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgICAgICBjb21wb25lbnQuJCQuZGlydHkuZmlsbCgwKTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BzLCBhcHBlbmRfc3R5bGVzLCBkaXJ0eSA9IFstMV0pIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQgPSB7XG4gICAgICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgICAgIGN0eDogbnVsbCxcbiAgICAgICAgICAgIC8vIHN0YXRlXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgICAgIG5vdF9lcXVhbCxcbiAgICAgICAgICAgIGJvdW5kOiB7fSxcbiAgICAgICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgICAgICBvbl9kaXNjb25uZWN0OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBNYXAob3B0aW9ucy5jb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7fSxcbiAgICAgICAgICAgIGRpcnR5LFxuICAgICAgICAgICAgc2tpcF9ib3VuZDogZmFsc2UsXG4gICAgICAgICAgICByb290OiBvcHRpb25zLnRhcmdldCB8fCBwYXJlbnRfY29tcG9uZW50LiQkLnJvb3RcbiAgICAgICAgfTtcbiAgICAgICAgYXBwZW5kX3N0eWxlcyAmJiBhcHBlbmRfc3R5bGVzKCQkLnJvb3QpO1xuICAgICAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAgICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgICAgID8gaW5zdGFuY2UoY29tcG9uZW50LCBvcHRpb25zLnByb3BzIHx8IHt9LCAoaSwgcmV0LCAuLi5yZXN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAkJC5jdHhbaV0gPSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkJC5za2lwX2JvdW5kICYmICQkLmJvdW5kW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBbXTtcbiAgICAgICAgJCQudXBkYXRlKCk7XG4gICAgICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgLy8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG4gICAgICAgICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50ID8gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCkgOiBmYWxzZTtcbiAgICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IsIG9wdGlvbnMuY3VzdG9tRWxlbWVudCk7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMuIFVzZWQgd2hlbiBkZXY9ZmFsc2UuXG4gICAgICovXG4gICAgY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAkc2V0KCQkcHJvcHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgICAgICAgY29uc3QgZiA9IHQgLSAxLjA7XG4gICAgICAgIHJldHVybiBmICogZiAqIGYgKyAxLjA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmx5KG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQsIHggPSAwLCB5ID0gMCwgb3BhY2l0eSA9IDAgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0X29wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxheSxcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nLFxuICAgICAgICAgICAgY3NzOiAodCwgdSkgPT4gYFxuXHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7KDEgLSB0KSAqIHh9cHgsICR7KDEgLSB0KSAqIHl9cHgpO1xuXHRcdFx0b3BhY2l0eTogJHt0YXJnZXRfb3BhY2l0eSAtIChvZCAqIHUpfWBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJzY3JpYmVyX3F1ZXVlID0gW107XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgYFdyaXRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyBib3RoIHVwZGF0aW5nIGFuZCByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAgICAgKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyPX1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgICAgICBsZXQgc3RvcDtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcCkgeyAvLyBzdG9yZSBpcyByZWFkeVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3Vic2NyaWJlciBvZiBzdWJzY3JpYmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlclsxXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHN1YnNjcmliZXIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocnVuX3F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlW2ldWzBdKHN1YnNjcmliZXJfcXVldWVbaSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB1cGRhdGUoZm4pIHtcbiAgICAgICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHN1YnNjcmliZShydW4sIGludmFsaWRhdGUgPSBub29wKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgICAgICBzdWJzY3JpYmVycy5hZGQoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBydW4odmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVycy5kZWxldGUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHNldCwgdXBkYXRlLCBzdWJzY3JpYmUgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRfaW50ZXJwb2xhdG9yKGEsIGIpIHtcbiAgICAgICAgaWYgKGEgPT09IGIgfHwgYSAhPT0gYSlcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBhO1xuICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGE7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBiLm1hcCgoYmksIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0X2ludGVycG9sYXRvcihhW2ldLCBiaSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0ID0+IGFyci5tYXAoZm4gPT4gZm4odCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBiIC0gYTtcbiAgICAgICAgICAgIHJldHVybiB0ID0+IGEgKyB0ICogZGVsdGE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIGZ1bmN0aW9uIHR3ZWVuZWQodmFsdWUsIGRlZmF1bHRzID0ge30pIHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB3cml0YWJsZSh2YWx1ZSk7XG4gICAgICAgIGxldCB0YXNrO1xuICAgICAgICBsZXQgdGFyZ2V0X3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRfdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICBsZXQgcHJldmlvdXNfdGFzayA9IHRhc2s7XG4gICAgICAgICAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gaWRlbnRpdHksIGludGVycG9sYXRlID0gZ2V0X2ludGVycG9sYXRvciB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBvcHRzKTtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c190YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2suYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNfdGFzayA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IHRhcmdldF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBub3coKSArIGRlbGF5O1xuICAgICAgICAgICAgbGV0IGZuO1xuICAgICAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobm93IDwgc3RhcnQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICghc3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICBmbiA9IGludGVycG9sYXRlKHZhbHVlLCBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbih2YWx1ZSwgbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c190YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2suYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNfdGFzayA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBub3cgLSBzdGFydDtcbiAgICAgICAgICAgICAgICBpZiAoZWxhcHNlZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IGZuKGVhc2luZyhlbGFwc2VkIC8gZHVyYXRpb24pKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrLnByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNldCxcbiAgICAgICAgICAgIHVwZGF0ZTogKGZuLCBvcHRzKSA9PiBzZXQoZm4odGFyZ2V0X3ZhbHVlLCB2YWx1ZSksIG9wdHMpLFxuICAgICAgICAgICAgc3Vic2NyaWJlOiBzdG9yZS5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKiogdHJ1ZSBpZiBnYWxsZXJ5IGlzIGluIHRoZSBwcm9jZXNzIG9mIGNsb3NpbmcgKi9cbiAgICBjb25zdCBjbG9zaW5nID0gd3JpdGFibGUoMCk7XG5cbiAgICAvKiogc3RvcmUgaWYgdXNlciBwcmVmZXJzIHJlZHVjZWQgbW90aW9uICAqL1xuICAgIGNvbnN0IHByZWZlcnNSZWR1Y2VkTW90aW9uID0gZ2xvYmFsVGhpcy5tYXRjaE1lZGlhPy4oXG4gICAgXHQnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknXG4gICAgKS5tYXRjaGVzO1xuXG4gICAgLyoqIGRlZmF1bHQgb3B0aW9ucyBmb3IgdHdlZW5zIC8gdHJhbnNpdGlvbnMgKi9cbiAgICBjb25zdCBkZWZhdWx0VHdlZW5PcHRpb25zID0gKGR1cmF0aW9uKSA9PiAoe1xuICAgIFx0ZWFzaW5nOiBjdWJpY091dCxcbiAgICBcdGR1cmF0aW9uOiBwcmVmZXJzUmVkdWNlZE1vdGlvbiA/IDAgOiBkdXJhdGlvbixcbiAgICB9KTtcblxuICAgIC8qIHNyYy9jb21wb25lbnRzL2xvYWRpbmcuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuNDcuMCAqL1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrJDIoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGRpdl9pbnRybztcbiAgICBcdGxldCBkaXZfb3V0cm87XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBpZl9ibG9jayA9ICEvKiRjbG9zaW5nKi8gY3R4WzJdICYmIGNyZWF0ZV9pZl9ibG9ja18xJDIoKTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2suYygpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtbG9hZFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoXCIgKyAvKnRodW1iKi8gY3R4WzBdICsgXCIpXCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2subShkaXYsIG51bGwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKG5ld19jdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0Y3R4ID0gbmV3X2N0eDtcblxuICAgIFx0XHRcdGlmICghLyokY2xvc2luZyovIGN0eFsyXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrKSA7IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jayA9IGNyZWF0ZV9pZl9ibG9ja18xJDIoKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2suYygpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5tKGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jaykge1xuICAgIFx0XHRcdFx0aWZfYmxvY2suZCgxKTtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrID0gbnVsbDtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHkgJiAvKnRodW1iKi8gMSkge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwidXJsKFwiICsgLyp0aHVtYiovIGN0eFswXSArIFwiKVwiKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuXG4gICAgXHRcdFx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgXHRcdFx0XHRpZiAoZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdFx0ZGl2X2ludHJvID0gY3JlYXRlX2luX3RyYW5zaXRpb24oZGl2LCBmbHksIHsgZHVyYXRpb246IC8qbG9hZGVkKi8gY3R4WzFdID8gNDAwIDogMCB9KTtcbiAgICBcdFx0XHRcdGRpdl9pbnRyby5zdGFydCgpO1xuICAgIFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoZGl2X2ludHJvKSBkaXZfaW50cm8uaW52YWxpZGF0ZSgpO1xuXG4gICAgXHRcdFx0aWYgKGxvY2FsKSB7XG4gICAgXHRcdFx0XHRkaXZfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2LCBmbHksIHsgZHVyYXRpb246IDQ4MCB9KTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5kKCk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMTI6MikgeyNpZiAhJGNsb3Npbmd9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzEkMihjdHgpIHtcbiAgICBcdGxldCBzcGFuMDtcbiAgICBcdGxldCBzcGFuMTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRzcGFuMCA9IGVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIFx0XHRcdHNwYW4xID0gZWxlbWVudChcInNwYW5cIik7XG4gICAgXHRcdFx0YXR0cihzcGFuMCwgXCJjbGFzc1wiLCBcImJwLWJhclwiKTtcbiAgICBcdFx0XHRhdHRyKHNwYW4xLCBcImNsYXNzXCIsIFwiYnAtb1wiKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIHNwYW4wLCBhbmNob3IpO1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIHNwYW4xLCBhbmNob3IpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChzcGFuMCk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKHNwYW4xKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkNChjdHgpIHtcbiAgICBcdGxldCBpZl9ibG9ja19hbmNob3I7XG4gICAgXHRsZXQgaWZfYmxvY2sgPSAoIS8qbG9hZGVkKi8gY3R4WzFdIHx8IC8qJGNsb3NpbmcqLyBjdHhbMl0pICYmIGNyZWF0ZV9pZl9ibG9jayQyKGN0eCk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2tfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2subSh0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaWZfYmxvY2tfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgW2RpcnR5XSkge1xuICAgIFx0XHRcdGlmICghLypsb2FkZWQqLyBjdHhbMV0gfHwgLyokY2xvc2luZyovIGN0eFsyXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5ICYgLypsb2FkZWQsICRjbG9zaW5nKi8gNikge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2ssIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jayA9IGNyZWF0ZV9pZl9ibG9jayQyKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jaywgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLm0oaWZfYmxvY2tfYW5jaG9yLnBhcmVudE5vZGUsIGlmX2Jsb2NrX2FuY2hvcik7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jaykge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrID0gbnVsbDtcbiAgICBcdFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0XHRjaGVja19vdXRyb3MoKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmQoZGV0YWNoaW5nKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goaWZfYmxvY2tfYW5jaG9yKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSQ0KCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgJGNsb3Npbmc7XG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgY2xvc2luZywgJCR2YWx1ZSA9PiAkJGludmFsaWRhdGUoMiwgJGNsb3NpbmcgPSAkJHZhbHVlKSk7XG4gICAgXHRsZXQgeyB0aHVtYiB9ID0gJCRwcm9wcztcbiAgICBcdGxldCB7IGxvYWRlZCB9ID0gJCRwcm9wcztcblxuICAgIFx0JCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgXHRcdGlmICgndGh1bWInIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCB0aHVtYiA9ICQkcHJvcHMudGh1bWIpO1xuICAgIFx0XHRpZiAoJ2xvYWRlZCcgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDEsIGxvYWRlZCA9ICQkcHJvcHMubG9hZGVkKTtcbiAgICBcdH07XG5cbiAgICBcdHJldHVybiBbdGh1bWIsIGxvYWRlZCwgJGNsb3NpbmddO1xuICAgIH1cblxuICAgIGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuICAgIFx0XHRpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDQsIGNyZWF0ZV9mcmFnbWVudCQ0LCBub3RfZXF1YWwsIHsgdGh1bWI6IDAsIGxvYWRlZDogMSB9KTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKiBzcmMvY29tcG9uZW50cy9pbWFnZS5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My40Ny4wICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMSQxKGN0eCkge1xuICAgIFx0bGV0IGltZztcbiAgICBcdGxldCBpbWdfc3Jjc2V0X3ZhbHVlO1xuICAgIFx0bGV0IGltZ19zaXplc192YWx1ZTtcbiAgICBcdGxldCBpbWdfYWx0X3ZhbHVlO1xuICAgIFx0bGV0IGltZ19vdXRybztcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRpbWcgPSBlbGVtZW50KFwiaW1nXCIpO1xuICAgIFx0XHRcdGF0dHIoaW1nLCBcInNyY3NldFwiLCBpbWdfc3Jjc2V0X3ZhbHVlID0gLyphY3RpdmVJdGVtKi8gY3R4WzddLmltZyk7XG4gICAgXHRcdFx0YXR0cihpbWcsIFwic2l6ZXNcIiwgaW1nX3NpemVzX3ZhbHVlID0gLypvcHRzKi8gY3R4WzhdLnNpemVzIHx8IGAkey8qc2l6ZXMqLyBjdHhbMV19cHhgKTtcbiAgICBcdFx0XHRhdHRyKGltZywgXCJhbHRcIiwgaW1nX2FsdF92YWx1ZSA9IC8qYWN0aXZlSXRlbSovIGN0eFs3XS5hbHQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaW1nLCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gbGlzdGVuKGltZywgXCJlcnJvclwiLCAvKmVycm9yX2hhbmRsZXIqLyBjdHhbMjZdKTtcbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLypzaXplcyovIDIgJiYgaW1nX3NpemVzX3ZhbHVlICE9PSAoaW1nX3NpemVzX3ZhbHVlID0gLypvcHRzKi8gY3R4WzhdLnNpemVzIHx8IGAkey8qc2l6ZXMqLyBjdHhbMV19cHhgKSkge1xuICAgIFx0XHRcdFx0YXR0cihpbWcsIFwic2l6ZXNcIiwgaW1nX3NpemVzX3ZhbHVlKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdGlmIChpbWdfb3V0cm8pIGltZ19vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHRpbWdfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oaW1nLCBmbHksIHt9KTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGltZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBpbWdfb3V0cm8pIGltZ19vdXRyby5lbmQoKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0ZGlzcG9zZSgpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzNzQ6MTApIHsjaWYgc2hvd0xvYWRlcn1cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2skMShjdHgpIHtcbiAgICBcdGxldCBsb2FkaW5nO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdGxvYWRpbmcgPSBuZXcgTG9hZGluZyh7XG4gICAgXHRcdFx0cHJvcHM6IHtcbiAgICBcdFx0XHRcdHRodW1iOiAvKmFjdGl2ZUl0ZW0qLyBjdHhbN10udGh1bWIsXG4gICAgXHRcdFx0XHRsb2FkZWQ6IC8qbG9hZGVkKi8gY3R4WzJdXG4gICAgXHRcdFx0fVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGxvYWRpbmcuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGxvYWRpbmcsIHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0Y29uc3QgbG9hZGluZ19jaGFuZ2VzID0ge307XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLypsb2FkZWQqLyA0KSBsb2FkaW5nX2NoYW5nZXMubG9hZGVkID0gLypsb2FkZWQqLyBjdHhbMl07XG4gICAgXHRcdFx0bG9hZGluZy4kc2V0KGxvYWRpbmdfY2hhbmdlcyk7XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4obG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQobG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudChsb2FkaW5nLCBkZXRhY2hpbmcpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQzKGN0eCkge1xuICAgIFx0bGV0IGRpdjE7XG4gICAgXHRsZXQgZGl2MDtcbiAgICBcdGxldCBpZl9ibG9jazBfYW5jaG9yO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuICAgIFx0bGV0IGlmX2Jsb2NrMCA9IC8qbG9hZGVkKi8gY3R4WzJdICYmIGNyZWF0ZV9pZl9ibG9ja18xJDEoY3R4KTtcbiAgICBcdGxldCBpZl9ibG9jazEgPSAvKnNob3dMb2FkZXIqLyBjdHhbM10gJiYgY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYxID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRkaXYwID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdGlmX2Jsb2NrMF9hbmNob3IgPSBlbXB0eSgpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5jKCk7XG4gICAgXHRcdFx0YXR0cihkaXYwLCBcImNsYXNzXCIsIFwiYnAtaW1nXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYwLCBcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoXCIgKyAvKmFjdGl2ZUl0ZW0qLyBjdHhbN10udGh1bWIgKyBcIilcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwid2lkdGhcIiwgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJoZWlnaHRcIiwgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUzZChcIiArICgvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMF0gLyAtMiArIC8qJHpvb21EcmFnVHJhbnNsYXRlKi8gY3R4WzZdWzBdKSArIFwicHgsIFwiICsgKC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVsxXSAvIC0yICsgLyokem9vbURyYWdUcmFuc2xhdGUqLyBjdHhbNl1bMV0pICsgXCJweCwgMClcIik7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjAsIFwiYnAtZHJhZ1wiLCAvKnBvaW50ZXJEb3duKi8gY3R4WzRdKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MCwgXCJicC1jYW56b29tXCIsIC8qbWF4Wm9vbSovIGN0eFsxMV0gPiAxICYmIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSA8IC8qbmF0dXJhbFdpZHRoKi8gY3R4WzEyXSk7XG4gICAgXHRcdFx0YXR0cihkaXYxLCBcImNsYXNzXCIsIFwiYnAtaW1nLXdyYXBcIik7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjEsIFwiYnAtY2xvc2VcIiwgLypjbG9zaW5nV2hpbGVab29tZWQqLyBjdHhbNV0pO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2MSwgYW5jaG9yKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MSwgZGl2MCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLm0oZGl2MCwgbnVsbCk7XG4gICAgXHRcdFx0YXBwZW5kKGRpdjAsIGlmX2Jsb2NrMF9hbmNob3IpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5tKGRpdjAsIG51bGwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gW1xuICAgIFx0XHRcdFx0XHRhY3Rpb25fZGVzdHJveWVyKC8qb25Nb3VudCovIGN0eFsyMF0uY2FsbChudWxsLCBkaXYwKSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcIndoZWVsXCIsIC8qb25XaGVlbCovIGN0eFsxNV0pLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2MSwgXCJwb2ludGVyZG93blwiLCAvKm9uUG9pbnRlckRvd24qLyBjdHhbMTZdKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdjEsIFwicG9pbnRlcm1vdmVcIiwgLypvblBvaW50ZXJNb3ZlKi8gY3R4WzE3XSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcInBvaW50ZXJ1cFwiLCAvKm9uUG9pbnRlclVwKi8gY3R4WzE5XSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcInBvaW50ZXJjYW5jZWxcIiwgLypyZW1vdmVFdmVudEZyb21DYWNoZSovIGN0eFsxOF0pXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmICgvKmxvYWRlZCovIGN0eFsyXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAucChjdHgsIGRpcnR5KTtcblxuICAgIFx0XHRcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmxvYWRlZCovIDQpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgXHRcdFx0XHRcdH1cbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMCA9IGNyZWF0ZV9pZl9ibG9ja18xJDEoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAubShkaXYwLCBpZl9ibG9jazBfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICgvKnNob3dMb2FkZXIqLyBjdHhbM10pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5WzBdICYgLypzaG93TG9hZGVyKi8gOCkge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxID0gY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEubShkaXYwLCBudWxsKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMSkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qJGltYWdlRGltZW5zaW9ucyovIDEpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYwLCBcIndpZHRoXCIsIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyokaW1hZ2VEaW1lbnNpb25zKi8gMSkge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwiaGVpZ2h0XCIsIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyokaW1hZ2VEaW1lbnNpb25zLCAkem9vbURyYWdUcmFuc2xhdGUqLyA2NSkge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlM2QoXCIgKyAoLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdIC8gLTIgKyAvKiR6b29tRHJhZ1RyYW5zbGF0ZSovIGN0eFs2XVswXSkgKyBcInB4LCBcIiArICgvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMV0gLyAtMiArIC8qJHpvb21EcmFnVHJhbnNsYXRlKi8gY3R4WzZdWzFdKSArIFwicHgsIDApXCIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qcG9pbnRlckRvd24qLyAxNikge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjAsIFwiYnAtZHJhZ1wiLCAvKnBvaW50ZXJEb3duKi8gY3R4WzRdKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKm1heFpvb20sICRpbWFnZURpbWVuc2lvbnMsIG5hdHVyYWxXaWR0aCovIDYxNDUpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYwLCBcImJwLWNhbnpvb21cIiwgLyptYXhab29tKi8gY3R4WzExXSA+IDEgJiYgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdIDwgLypuYXR1cmFsV2lkdGgqLyBjdHhbMTJdKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmNsb3NpbmdXaGlsZVpvb21lZCovIDMyKSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MSwgXCJicC1jbG9zZVwiLCAvKmNsb3NpbmdXaGlsZVpvb21lZCovIGN0eFs1XSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCk7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2MSk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLmQoKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuZCgpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbmNlJDMoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgICBcdGxldCAkem9vbWVkO1xuICAgIFx0bGV0ICR6b29tRHJhZ1RyYW5zbGF0ZTtcbiAgICBcdGxldCAkY2xvc2luZztcbiAgICBcdGxldCAkaW1hZ2VEaW1lbnNpb25zO1xuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIGNsb3NpbmcsICQkdmFsdWUgPT4gJCRpbnZhbGlkYXRlKDI1LCAkY2xvc2luZyA9ICQkdmFsdWUpKTtcbiAgICBcdGxldCB7IHByb3BzIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IHsgc21hbGxTY3JlZW4gfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgeyBhY3RpdmVJdGVtLCBvcHRzLCBwcmV2LCBuZXh0LCB6b29tZWQsIGNvbnRhaW5lciB9ID0gcHJvcHM7XG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgem9vbWVkLCB2YWx1ZSA9PiAkJGludmFsaWRhdGUoMjQsICR6b29tZWQgPSB2YWx1ZSkpO1xuICAgIFx0bGV0IG1heFpvb20gPSBhY3RpdmVJdGVtLm1heFpvb20gfHwgb3B0cy5tYXhab29tIHx8IDEwO1xuICAgIFx0bGV0IGNhbGN1bGF0ZWREaW1lbnNpb25zID0gcHJvcHMuY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKTtcblxuICAgIFx0LyoqIHZhbHVlIG9mIHNpemVzIGF0dHJpYnV0ZSAqL1xuICAgIFx0bGV0IHNpemVzID0gY2FsY3VsYXRlZERpbWVuc2lvbnNbMF07XG5cbiAgICBcdC8qKiB0cmFja3MgbG9hZCBzdGF0ZSBvZiBpbWFnZSAqL1xuICAgIFx0bGV0IGxvYWRlZCwgc2hvd0xvYWRlcjtcblxuICAgIFx0LyoqIHN0b3JlcyBwaW5jaCBpbmZvIGlmIG11bHRpcGxlIHRvdWNoIGV2ZW50cyBhY3RpdmUgKi9cbiAgICBcdGxldCBwaW5jaERldGFpbHM7XG5cbiAgICBcdC8qKiBpbWFnZSBodG1sIGVsZW1lbnQgKC5icC1pbWcpICovXG4gICAgXHRsZXQgYnBJbWc7XG5cbiAgICBcdC8qKiB0cmFjayBkaXN0YW5jZSBmb3IgcGluY2ggZXZlbnRzICovXG4gICAgXHRsZXQgcHJldkRpZmYgPSAwO1xuXG4gICAgXHRsZXQgcG9pbnRlckRvd24sIGhhc0RyYWdnZWQ7XG4gICAgXHRsZXQgZHJhZ1N0YXJ0WCwgZHJhZ1N0YXJ0WTtcblxuICAgIFx0LyoqIHpvb21EcmFnVHJhbnNsYXRlIHZhbHVlcyBvbiBzdGFydCBvZiBkcmFnICovXG4gICAgXHRsZXQgZHJhZ1N0YXJ0VHJhbnNsYXRlWCwgZHJhZ1N0YXJ0VHJhbnNsYXRlWTtcblxuICAgIFx0LyoqIGlmIHRydWUsIGFkZHMgY2xhc3MgdG8gLmJwLXdyYXAgdG8gYXZvaWQgaW1hZ2UgY3JvcHBpbmcgKi9cbiAgICBcdGxldCBjbG9zaW5nV2hpbGVab29tZWQ7XG5cbiAgICBcdGNvbnN0IG5hdHVyYWxXaWR0aCA9ICthY3RpdmVJdGVtLndpZHRoO1xuXG4gICAgXHQvKiogc3RvcmUgcG9zaXRpb25zIGZvciBkcmFnIGluZXJ0aWEgKi9cbiAgICBcdGNvbnN0IGRyYWdQb3NpdGlvbnMgPSBbXTtcblxuICAgIFx0LyoqIGNhY2hlIHBvaW50ZXIgZXZlbnRzIHRvIGhhbmRsZSBwaW5jaCAqL1xuICAgIFx0Y29uc3QgcG9pbnRlckNhY2hlID0gbmV3IE1hcCgpO1xuXG4gICAgXHQvKiogdHdlZW4gdG8gY29udHJvbCBpbWFnZSBzaXplICovXG4gICAgXHRjb25zdCBpbWFnZURpbWVuc2lvbnMgPSB0d2VlbmVkKGNhbGN1bGF0ZWREaW1lbnNpb25zLCBkZWZhdWx0VHdlZW5PcHRpb25zKDQwMCkpO1xuXG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgaW1hZ2VEaW1lbnNpb25zLCB2YWx1ZSA9PiAkJGludmFsaWRhdGUoMCwgJGltYWdlRGltZW5zaW9ucyA9IHZhbHVlKSk7XG5cbiAgICBcdC8qKiB0cmFuc2xhdGUgdHJhbnNmb3JtIGZvciBwb2ludGVyRG93biAqL1xuICAgIFx0Y29uc3Qgem9vbURyYWdUcmFuc2xhdGUgPSB0d2VlbmVkKFswLCAwXSwgZGVmYXVsdFR3ZWVuT3B0aW9ucyg0MDApKTtcblxuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIHpvb21EcmFnVHJhbnNsYXRlLCB2YWx1ZSA9PiAkJGludmFsaWRhdGUoNiwgJHpvb21EcmFnVHJhbnNsYXRlID0gdmFsdWUpKTtcblxuICAgIFx0LyoqIGNhbGN1bGF0ZSB0cmFuc2xhdGUgcG9zaXRpb24gd2l0aCBib3VuZHMgKi9cbiAgICBcdGNvbnN0IGJvdW5kVHJhbnNsYXRlVmFsdWVzID0gKFt4LCB5XSwgbmV3RGltZW5zaW9ucyA9ICRpbWFnZURpbWVuc2lvbnMpID0+IHtcbiAgICBcdFx0Ly8gaW1hZ2UgZHJhZyB0cmFuc2xhdGUgYm91bmRzXG4gICAgXHRcdGNvbnN0IG1heFRyYW5zbGF0ZVggPSAobmV3RGltZW5zaW9uc1swXSAtIGNvbnRhaW5lci53KSAvIDI7XG5cbiAgICBcdFx0Y29uc3QgbWF4VHJhbnNsYXRlWSA9IChuZXdEaW1lbnNpb25zWzFdIC0gY29udGFpbmVyLmgpIC8gMjtcblxuICAgIFx0XHQvLyB4IG1heCBkcmFnXG4gICAgXHRcdGlmIChtYXhUcmFuc2xhdGVYIDwgMCkge1xuICAgIFx0XHRcdHggPSAwO1xuICAgIFx0XHR9IGVsc2UgaWYgKHggPiBtYXhUcmFuc2xhdGVYKSB7XG4gICAgXHRcdFx0aWYgKHNtYWxsU2NyZWVuKSB7XG4gICAgXHRcdFx0XHQvLyBib3VuZCB0byBsZWZ0IHNpZGUgKGFsbG93IHNsaWdodCBvdmVyIGRyYWcpXG4gICAgXHRcdFx0XHR4ID0gcG9pbnRlckRvd25cbiAgICBcdFx0XHRcdD8gbWF4VHJhbnNsYXRlWCArICh4IC0gbWF4VHJhbnNsYXRlWCkgLyAxMFxuICAgIFx0XHRcdFx0OiBtYXhUcmFuc2xhdGVYO1xuXG4gICAgXHRcdFx0XHQvLyBwcmV2aW91cyBpdGVtIGlmIGRyYWdnZWQgcGFzdCB0aHJlc2hvbGRcbiAgICBcdFx0XHRcdGlmICh4ID4gbWF4VHJhbnNsYXRlWCArIDIwKSB7XG4gICAgXHRcdFx0XHRcdC8vIHBvaW50ZXJkb3duID0gdW5kZWZpbmVkIHRvIHN0b3AgcG9pbnRlcm1vdmUgZnJvbSBydW5uaW5nIGFnYWluXG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHByZXYoKSk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdHggPSBtYXhUcmFuc2xhdGVYO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSBlbHNlIGlmICh4IDwgLW1heFRyYW5zbGF0ZVgpIHtcbiAgICBcdFx0XHQvLyBib3VuZCB0byByaWdodCBzaWRlIChhbGxvdyBzbGlnaHQgb3ZlciBkcmFnKVxuICAgIFx0XHRcdGlmIChzbWFsbFNjcmVlbikge1xuICAgIFx0XHRcdFx0eCA9IHBvaW50ZXJEb3duXG4gICAgXHRcdFx0XHQ/IC1tYXhUcmFuc2xhdGVYIC0gKC1tYXhUcmFuc2xhdGVYIC0geCkgLyAxMFxuICAgIFx0XHRcdFx0OiAtbWF4VHJhbnNsYXRlWDtcblxuICAgIFx0XHRcdFx0Ly8gbmV4dCBpdGVtIGlmIGRyYWdnZWQgcGFzdCB0aHJlc2hvbGRcbiAgICBcdFx0XHRcdGlmICh4IDwgLW1heFRyYW5zbGF0ZVggLSAyMCkge1xuICAgIFx0XHRcdFx0XHQvLyBwb2ludGVyZG93biA9IHVuZGVmaW5lZCB0byBzdG9wIHBvaW50ZXJtb3ZlIGZyb20gcnVubmluZyBhZ2FpblxuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBuZXh0KCkpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHR4ID0gLW1heFRyYW5zbGF0ZVg7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8geSBtYXggZHJhZ1xuICAgIFx0XHRpZiAobWF4VHJhbnNsYXRlWSA8IDApIHtcbiAgICBcdFx0XHR5ID0gMDtcbiAgICBcdFx0fSBlbHNlIGlmICh5ID4gbWF4VHJhbnNsYXRlWSkge1xuICAgIFx0XHRcdHkgPSBtYXhUcmFuc2xhdGVZO1xuICAgIFx0XHR9IGVsc2UgaWYgKHkgPCAtbWF4VHJhbnNsYXRlWSkge1xuICAgIFx0XHRcdHkgPSAtbWF4VHJhbnNsYXRlWTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdHJldHVybiBbeCwgeV07XG4gICAgXHR9O1xuXG4gICAgXHQvKiogdXBkYXRlcyB6b29tIGxldmVsIGluIG9yIG91dCBiYXNlZCBvbiBhbXQgdmFsdWUgKi9cbiAgICBcdGZ1bmN0aW9uIGNoYW5nZVpvb20oYW10ID0gbWF4Wm9vbSwgZSkge1xuICAgIFx0XHRpZiAoJGNsb3NpbmcpIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHRjb25zdCBtYXhXaWR0aCA9IGNhbGN1bGF0ZWREaW1lbnNpb25zWzBdICogbWF4Wm9vbTtcbiAgICBcdFx0bGV0IG5ld1dpZHRoID0gJGltYWdlRGltZW5zaW9uc1swXSArICRpbWFnZURpbWVuc2lvbnNbMF0gKiBhbXQ7XG4gICAgXHRcdGxldCBuZXdIZWlnaHQgPSAkaW1hZ2VEaW1lbnNpb25zWzFdICsgJGltYWdlRGltZW5zaW9uc1sxXSAqIGFtdDtcblxuICAgIFx0XHRpZiAoYW10ID4gMCkge1xuICAgIFx0XHRcdGlmIChuZXdXaWR0aCA+IG1heFdpZHRoKSB7XG4gICAgXHRcdFx0XHQvLyByZXF1ZXN0aW5nIHNpemUgbGFyZ2UgdGhhbiBtYXggem9vbVxuICAgIFx0XHRcdFx0bmV3V2lkdGggPSBtYXhXaWR0aDtcblxuICAgIFx0XHRcdFx0bmV3SGVpZ2h0ID0gY2FsY3VsYXRlZERpbWVuc2lvbnNbMV0gKiBtYXhab29tO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmIChuZXdXaWR0aCA+IG5hdHVyYWxXaWR0aCkge1xuICAgIFx0XHRcdFx0Ly8gaWYgcmVxdWVzdGluZyB6b29tIGxhcmdlciB0aGFuIG5hdHVyYWwgc2l6ZVxuICAgIFx0XHRcdFx0bmV3V2lkdGggPSBuYXR1cmFsV2lkdGg7XG5cbiAgICBcdFx0XHRcdG5ld0hlaWdodCA9ICthY3RpdmVJdGVtLmhlaWdodDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0gZWxzZSBpZiAobmV3V2lkdGggPCBjYWxjdWxhdGVkRGltZW5zaW9uc1swXSkge1xuICAgIFx0XHRcdC8vIGlmIHJlcXVlc3RpbmcgaW1hZ2Ugc21hbGxlciB0aGFuIHN0YXJ0aW5nIHNpemVcbiAgICBcdFx0XHRpbWFnZURpbWVuc2lvbnMuc2V0KGNhbGN1bGF0ZWREaW1lbnNpb25zKTtcblxuICAgIFx0XHRcdHJldHVybiB6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoWzAsIDBdKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGxldCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IGJwSW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgXHRcdC8vIGRpc3RhbmNlIGNsaWNrZWQgZnJvbSBjZW50ZXIgb2YgaW1hZ2VcbiAgICBcdFx0Y29uc3Qgb2Zmc2V0WCA9IGUgPyBlLmNsaWVudFggLSB4IC0gd2lkdGggLyAyIDogMDtcblxuICAgIFx0XHRjb25zdCBvZmZzZXRZID0gZSA/IGUuY2xpZW50WSAtIHkgLSBoZWlnaHQgLyAyIDogMDtcbiAgICBcdFx0eCA9IC1vZmZzZXRYICogKG5ld1dpZHRoIC8gd2lkdGgpICsgb2Zmc2V0WDtcbiAgICBcdFx0eSA9IC1vZmZzZXRZICogKG5ld0hlaWdodCAvIGhlaWdodCkgKyBvZmZzZXRZO1xuICAgIFx0XHRjb25zdCBuZXdEaW1lbnNpb25zID0gW25ld1dpZHRoLCBuZXdIZWlnaHRdO1xuXG4gICAgXHRcdC8vIHNldCBuZXcgZGltZW5zaW9ucyBhbmQgdXBkYXRlIHNpemVzIHByb3BlcnR5XG4gICAgXHRcdGltYWdlRGltZW5zaW9ucy5zZXQobmV3RGltZW5zaW9ucykudGhlbigoKSA9PiB7XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDEsIHNpemVzID0gTWF0aC5yb3VuZChNYXRoLm1heChzaXplcywgbmV3V2lkdGgpKSk7XG4gICAgXHRcdH0pO1xuXG4gICAgXHRcdC8vIHVwZGF0ZSB0cmFuc2xhdGUgdmFsdWVcbiAgICBcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KGJvdW5kVHJhbnNsYXRlVmFsdWVzKFskem9vbURyYWdUcmFuc2xhdGVbMF0gKyB4LCAkem9vbURyYWdUcmFuc2xhdGVbMV0gKyB5XSwgbmV3RGltZW5zaW9ucykpO1xuICAgIFx0fVxuXG4gICAgXHQvLyBhbGxvdyB6b29tIHRvIGJlIHJlYWQgLyBzZXQgZXh0ZXJuYWxseVxuICAgIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGFjdGl2ZUl0ZW0sICd6b29tJywge1xuICAgIFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gICAgXHRcdGdldDogKCkgPT4gJHpvb21lZCxcbiAgICBcdFx0c2V0OiBib29sID0+IGNoYW5nZVpvb20oYm9vbCA/IG1heFpvb20gOiAtbWF4Wm9vbSlcbiAgICBcdH0pO1xuXG4gICAgXHRjb25zdCBvbldoZWVsID0gZSA9PiB7XG4gICAgXHRcdC8vIHJldHVybiBpZiBzY3JvbGxpbmcgcGFzdCBpbmxpbmUgZ2FsbGVyeSB3LyB3aGVlbFxuICAgIFx0XHRpZiAob3B0cy5pbmxpbmUgJiYgISR6b29tZWQpIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBwcmV2ZW50RGVmYXVsdCB0byBzdG9wIHNjcm9sbGluZyBvbiB6b29tZWQgaW5saW5lIGltYWdlXG4gICAgXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIFx0XHQvLyBjaGFuZ2Ugem9vbSBvbiB3aGVlbFxuICAgIFx0XHRjaGFuZ2Vab29tKGUuZGVsdGFZIC8gLTMwMCwgZSk7XG4gICAgXHR9O1xuXG4gICAgXHQvKiogb24gZHJhZyBzdGFydCwgc3RvcmUgaW5pdGlhbCBwb3NpdGlvbiBhbmQgaW1hZ2UgdHJhbnNsYXRlIHZhbHVlcyAqL1xuICAgIFx0Y29uc3Qgb25Qb2ludGVyRG93biA9IGUgPT4ge1xuICAgIFx0XHQvLyBkb24ndCBydW4gaWYgcmlnaHQgY2xpY2tcbiAgICBcdFx0aWYgKGUuYnV0dG9uICE9PSAyKSB7XG4gICAgXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHRydWUpO1xuICAgIFx0XHRcdHBvaW50ZXJDYWNoZS5zZXQoZS5wb2ludGVySWQsIGUpO1xuICAgIFx0XHRcdGRyYWdTdGFydFggPSBlLmNsaWVudFg7XG4gICAgXHRcdFx0ZHJhZ1N0YXJ0WSA9IGUuY2xpZW50WTtcbiAgICBcdFx0XHRkcmFnU3RhcnRUcmFuc2xhdGVYID0gJHpvb21EcmFnVHJhbnNsYXRlWzBdO1xuICAgIFx0XHRcdGRyYWdTdGFydFRyYW5zbGF0ZVkgPSAkem9vbURyYWdUcmFuc2xhdGVbMV07XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdC8qKiBvbiBkcmFnLCB1cGRhdGUgaW1hZ2UgdHJhbnNsYXRlIHZhbCAqL1xuICAgIFx0Y29uc3Qgb25Qb2ludGVyTW92ZSA9IGUgPT4ge1xuICAgIFx0XHRpZiAocG9pbnRlckNhY2hlLnNpemUgPiAxKSB7XG4gICAgXHRcdFx0Ly8gaWYgbXVsdGlwbGUgcG9pbnRlciBldmVudHMsIHBhc3MgdG8gaGFuZGxlUGluY2ggZnVuY3Rpb25cbiAgICBcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBmYWxzZSk7XG5cbiAgICBcdFx0XHRyZXR1cm4gb3B0cy5ub1BpbmNoPy4oY29udGFpbmVyLmVsKSB8fCBoYW5kbGVQaW5jaChlKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGlmICghcG9pbnRlckRvd24pIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHRsZXQgeCA9IGUuY2xpZW50WDtcbiAgICBcdFx0bGV0IHkgPSBlLmNsaWVudFk7XG5cbiAgICBcdFx0Ly8gc3RvcmUgcG9zaXRpb25zIGluIGRyYWdQb3NpdGlvbnMgZm9yIGluZXJ0aWFcbiAgICBcdFx0Ly8gc2V0IGhhc0RyYWdnZWQgaWYgPiAyIHBvaW50ZXIgbW92ZSBldmVudHNcbiAgICBcdFx0aGFzRHJhZ2dlZCA9IGRyYWdQb3NpdGlvbnMucHVzaCh7IHgsIHkgfSkgPiAyO1xuXG4gICAgXHRcdC8vIG92ZXJhbGwgZHJhZyBkaWZmIGZyb20gc3RhcnQgbG9jYXRpb25cbiAgICBcdFx0eCA9IHggLSBkcmFnU3RhcnRYO1xuXG4gICAgXHRcdHkgPSB5IC0gZHJhZ1N0YXJ0WTtcblxuICAgIFx0XHQvLyBoYW5kbGUgdW56b29tZWQgbGVmdCAvIHJpZ2h0IC8gdXAgc3dpcGVzXG4gICAgXHRcdGlmICghJHpvb21lZCkge1xuICAgIFx0XHRcdC8vIGNsb3NlIGlmIHN3aXBlIHVwXG4gICAgXHRcdFx0aWYgKHkgPCAtOTApIHtcbiAgICBcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9ICFvcHRzLm5vQ2xvc2UgJiYgcHJvcHMuY2xvc2UoKSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0Ly8gb25seSBoYW5kbGUgbGVmdCAvIHJpZ2h0IGlmIG5vdCBzd2lwaW5nIHZlcnRpY2FsbHlcbiAgICBcdFx0XHRpZiAoTWF0aC5hYnMoeSkgPCAzMCkge1xuICAgIFx0XHRcdFx0Ly8gcHJldmlvdXMgaWYgc3dpcGUgbGVmdFxuICAgIFx0XHRcdFx0aWYgKHggPiA0MCkge1xuICAgIFx0XHRcdFx0XHQvLyBwb2ludGVyZG93biA9IHVuZGVmaW5lZCB0byBzdG9wIHBvaW50ZXJtb3ZlIGZyb20gcnVubmluZyBhZ2FpblxuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBwcmV2KCkpO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHQvLyBuZXh0IGlmIHN3aXBlIHJpZ2h0XG4gICAgXHRcdFx0XHRpZiAoeCA8IC00MCkge1xuICAgIFx0XHRcdFx0XHQvLyBwb2ludGVyZG93biA9IHVuZGVmaW5lZCB0byBzdG9wIHBvaW50ZXJtb3ZlIGZyb20gcnVubmluZyBhZ2FpblxuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBuZXh0KCkpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIGltYWdlIGRyYWcgd2hlbiB6b29tZWRcbiAgICBcdFx0aWYgKCR6b29tZWQgJiYgaGFzRHJhZ2dlZCAmJiAhJGNsb3NpbmcpIHtcbiAgICBcdFx0XHR6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoYm91bmRUcmFuc2xhdGVWYWx1ZXMoW2RyYWdTdGFydFRyYW5zbGF0ZVggKyB4LCBkcmFnU3RhcnRUcmFuc2xhdGVZICsgeV0pLCB7IGR1cmF0aW9uOiAwIH0pO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBoYW5kbGVQaW5jaCA9IGUgPT4ge1xuICAgIFx0XHQvLyB1cGRhdGUgZXZlbnQgaW4gY2FjaGUgYW5kIGdldCB2YWx1ZXNcbiAgICBcdFx0Y29uc3QgW3AxLCBwMl0gPSBwb2ludGVyQ2FjaGUuc2V0KGUucG9pbnRlcklkLCBlKS52YWx1ZXMoKTtcblxuICAgIFx0XHQvLyBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludGVyc1xuICAgIFx0XHRjb25zdCBkeCA9IHAxLmNsaWVudFggLSBwMi5jbGllbnRYO1xuXG4gICAgXHRcdGNvbnN0IGR5ID0gcDEuY2xpZW50WSAtIHAyLmNsaWVudFk7XG4gICAgXHRcdGNvbnN0IGN1ckRpZmYgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG5cbiAgICBcdFx0Ly8gY2FjaGUgdGhlIG9yaWdpbmFsIHBpbmNoIGNlbnRlclxuICAgIFx0XHRwaW5jaERldGFpbHMgPSBwaW5jaERldGFpbHMgfHwge1xuICAgIFx0XHRcdGNsaWVudFg6IChwMS5jbGllbnRYICsgcDIuY2xpZW50WCkgLyAyLFxuICAgIFx0XHRcdGNsaWVudFk6IChwMS5jbGllbnRZICsgcDIuY2xpZW50WSkgLyAyXG4gICAgXHRcdH07XG5cbiAgICBcdFx0Ly8gc2NhbGUgaW1hZ2VcbiAgICBcdFx0Y2hhbmdlWm9vbSgoKHByZXZEaWZmIHx8IGN1ckRpZmYpIC0gY3VyRGlmZikgLyAtMzUsIHBpbmNoRGV0YWlscyk7XG5cbiAgICBcdFx0Ly8gQ2FjaGUgdGhlIGRpc3RhbmNlIGZvciB0aGUgbmV4dCBtb3ZlIGV2ZW50XG4gICAgXHRcdHByZXZEaWZmID0gY3VyRGlmZjtcbiAgICBcdH07XG5cbiAgICBcdC8qKiByZW1vdmUgZXZlbnQgZnJvbSBwb2ludGVyIGV2ZW50IGNhY2hlICovXG4gICAgXHRjb25zdCByZW1vdmVFdmVudEZyb21DYWNoZSA9IGUgPT4gcG9pbnRlckNhY2hlLmRlbGV0ZShlLnBvaW50ZXJJZCk7XG5cbiAgICBcdGZ1bmN0aW9uIG9uUG9pbnRlclVwKGUpIHtcbiAgICBcdFx0cmVtb3ZlRXZlbnRGcm9tQ2FjaGUoZSk7XG5cbiAgICBcdFx0aWYgKHBpbmNoRGV0YWlscykge1xuICAgIFx0XHRcdC8vIHJlc2V0IHByZXZEaWZmIGFuZCBjbGVhciBwb2ludGVyRG93biB0byB0cmlnZ2VyIHJldHVybiBiZWxvd1xuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHByZXZEaWZmID0gMCk7XG5cbiAgICBcdFx0XHQvLyBzZXQgcGluY2hEZXRhaWxzIHRvIG51bGwgYWZ0ZXIgbGFzdCBmaW5nZXIgbGlmdHNcbiAgICBcdFx0XHRwaW5jaERldGFpbHMgPSBwb2ludGVyQ2FjaGUuc2l6ZSA/IHBpbmNoRGV0YWlscyA6IG51bGw7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBtYWtlIHN1cmUgcG9pbnRlciBldmVudHMgZG9uJ3QgY2Fycnkgb3ZlciB0byBuZXh0IGltYWdlXG4gICAgXHRcdGlmICghcG9pbnRlckRvd24pIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBmYWxzZSk7XG5cbiAgICBcdFx0Ly8gY2xvc2UgaWYgb3ZlcmxheSBpcyBjbGlja2VkXG4gICAgXHRcdGlmIChlLnRhcmdldCA9PT0gdGhpcyAmJiAhb3B0cy5ub0Nsb3NlKSB7XG4gICAgXHRcdFx0cmV0dXJuIHByb3BzLmNsb3NlKCk7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBhZGQgZHJhZyBpbmVydGlhIC8gc25hcCBiYWNrIHRvIGJvdW5kc1xuICAgIFx0XHRpZiAoaGFzRHJhZ2dlZCkge1xuICAgIFx0XHRcdGNvbnN0IFtwb3NPbmUsIHBvc1R3bywgcG9zVGhyZWVdID0gZHJhZ1Bvc2l0aW9ucy5zbGljZSgtMyk7XG4gICAgXHRcdFx0Y29uc3QgeERpZmYgPSBwb3NUd28ueCAtIHBvc1RocmVlLng7XG4gICAgXHRcdFx0Y29uc3QgeURpZmYgPSBwb3NUd28ueSAtIHBvc1RocmVlLnk7XG5cbiAgICBcdFx0XHRpZiAoTWF0aC5oeXBvdCh4RGlmZiwgeURpZmYpID4gNSkge1xuICAgIFx0XHRcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KGJvdW5kVHJhbnNsYXRlVmFsdWVzKFtcbiAgICBcdFx0XHRcdFx0JHpvb21EcmFnVHJhbnNsYXRlWzBdIC0gKHBvc09uZS54IC0gcG9zVGhyZWUueCkgKiA1LFxuICAgIFx0XHRcdFx0XHQkem9vbURyYWdUcmFuc2xhdGVbMV0gLSAocG9zT25lLnkgLSBwb3NUaHJlZS55KSAqIDVcbiAgICBcdFx0XHRcdF0pKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0gZWxzZSBpZiAoIW9wdHMub25JbWFnZUNsaWNrPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKSkge1xuICAgIFx0XHRcdGNoYW5nZVpvb20oJHpvb21lZCA/IC1tYXhab29tIDogbWF4Wm9vbSwgZSk7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyByZXNldCBwb2ludGVyIHN0YXRlc1xuICAgIFx0XHRoYXNEcmFnZ2VkID0gZmFsc2U7XG5cbiAgICBcdFx0Ly8gcmVzZXQgZHJhZ1Bvc2l0aW9uc1xuICAgIFx0XHRkcmFnUG9zaXRpb25zLmxlbmd0aCA9IDA7XG4gICAgXHR9XG5cbiAgICBcdGNvbnN0IG9uTW91bnQgPSBub2RlID0+IHtcbiAgICBcdFx0YnBJbWcgPSBub2RlO1xuXG4gICAgXHRcdC8vIGhhbmRsZSBnbG9iYWxUaGlzIHJlc2l6ZVxuICAgIFx0XHRwcm9wcy5zZXRSZXNpemVGdW5jKCgpID0+IHtcbiAgICBcdFx0XHQkJGludmFsaWRhdGUoMjMsIGNhbGN1bGF0ZWREaW1lbnNpb25zID0gcHJvcHMuY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKSk7XG5cbiAgICBcdFx0XHQvLyBhZGp1c3QgaW1hZ2Ugc2l6ZSAvIHpvb20gb24gcmVzaXplLCBidXQgbm90IG9uIG1vYmlsZSBiZWNhdXNlXG4gICAgXHRcdFx0Ly8gc29tZSBicm93c2VycyAoaW9zIHNhZmFyaSAxNSkgY29uc3RhbnRseSByZXNpemUgc2NyZWVuIG9uIGRyYWdcbiAgICBcdFx0XHRpZiAob3B0cy5pbmxpbmUgfHwgIXNtYWxsU2NyZWVuKSB7XG4gICAgXHRcdFx0XHRpbWFnZURpbWVuc2lvbnMuc2V0KGNhbGN1bGF0ZWREaW1lbnNpb25zKTtcbiAgICBcdFx0XHRcdHpvb21EcmFnVHJhbnNsYXRlLnNldChbMCwgMF0pO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdFx0Ly8gZGVjb2RlIGluaXRpYWwgaW1hZ2UgYmVmb3JlIHJlbmRlcmluZ1xuICAgIFx0XHRwcm9wcy5sb2FkSW1hZ2UoYWN0aXZlSXRlbSkudGhlbigoKSA9PiB7XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDIsIGxvYWRlZCA9IHRydWUpO1xuICAgIFx0XHRcdHByb3BzLnByZWxvYWROZXh0KCk7XG4gICAgXHRcdH0pO1xuXG4gICAgXHRcdC8vIHNob3cgbG9hZGluZyBpbmRpY2F0b3IgaWYgbmVlZGVkXG4gICAgXHRcdHNldFRpbWVvdXQoXG4gICAgXHRcdFx0KCkgPT4ge1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDMsIHNob3dMb2FkZXIgPSAhbG9hZGVkKTtcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdDI1MFxuICAgIFx0XHQpO1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgZXJyb3JfaGFuZGxlciA9IGVycm9yID0+IG9wdHMub25FcnJvcj8uKGNvbnRhaW5lciwgYWN0aXZlSXRlbSwgZXJyb3IpO1xuXG4gICAgXHQkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBcdFx0XG4gICAgXHRcdGlmICgnc21hbGxTY3JlZW4nIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgyMiwgc21hbGxTY3JlZW4gPSAkJHByb3BzLnNtYWxsU2NyZWVuKTtcbiAgICBcdH07XG5cbiAgICBcdCQkc2VsZi4kJC51cGRhdGUgPSAoKSA9PiB7XG4gICAgXHRcdGlmICgkJHNlbGYuJCQuZGlydHlbMF0gJiAvKiRpbWFnZURpbWVuc2lvbnMsIGNhbGN1bGF0ZWREaW1lbnNpb25zKi8gODM4ODYwOSkge1xuICAgIFx0XHRcdHpvb21lZC5zZXQoJGltYWdlRGltZW5zaW9uc1swXSAtIDEwID4gY2FsY3VsYXRlZERpbWVuc2lvbnNbMF0pO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0aWYgKCQkc2VsZi4kJC5kaXJ0eVswXSAmIC8qJGNsb3NpbmcsICR6b29tZWQsIGNhbGN1bGF0ZWREaW1lbnNpb25zKi8gNTg3MjAyNTYpIHtcbiAgICBcdFx0XHQvLyBpZiB6b29tZWQgd2hpbGUgY2xvc2luZywgem9vbSBvdXQgaW1hZ2UgYW5kIGFkZCBjbGFzc1xuICAgIFx0XHRcdC8vIHRvIGNoYW5nZSBjb250YWluIHZhbHVlIG9uIC5icC13cmFwIHRvIGF2b2lkIGNyb3BwaW5nXG4gICAgXHRcdFx0aWYgKCRjbG9zaW5nICYmICR6b29tZWQgJiYgIW9wdHMuaW50cm8pIHtcbiAgICBcdFx0XHRcdGNvbnN0IGNsb3NlVHdlZW5PcHRzID0gZGVmYXVsdFR3ZWVuT3B0aW9ucyg0ODApO1xuICAgIFx0XHRcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KFswLCAwXSwgY2xvc2VUd2Vlbk9wdHMpO1xuICAgIFx0XHRcdFx0aW1hZ2VEaW1lbnNpb25zLnNldChjYWxjdWxhdGVkRGltZW5zaW9ucywgY2xvc2VUd2Vlbk9wdHMpO1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDUsIGNsb3NpbmdXaGlsZVpvb21lZCA9IHRydWUpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0cmV0dXJuIFtcbiAgICBcdFx0JGltYWdlRGltZW5zaW9ucyxcbiAgICBcdFx0c2l6ZXMsXG4gICAgXHRcdGxvYWRlZCxcbiAgICBcdFx0c2hvd0xvYWRlcixcbiAgICBcdFx0cG9pbnRlckRvd24sXG4gICAgXHRcdGNsb3NpbmdXaGlsZVpvb21lZCxcbiAgICBcdFx0JHpvb21EcmFnVHJhbnNsYXRlLFxuICAgIFx0XHRhY3RpdmVJdGVtLFxuICAgIFx0XHRvcHRzLFxuICAgIFx0XHR6b29tZWQsXG4gICAgXHRcdGNvbnRhaW5lcixcbiAgICBcdFx0bWF4Wm9vbSxcbiAgICBcdFx0bmF0dXJhbFdpZHRoLFxuICAgIFx0XHRpbWFnZURpbWVuc2lvbnMsXG4gICAgXHRcdHpvb21EcmFnVHJhbnNsYXRlLFxuICAgIFx0XHRvbldoZWVsLFxuICAgIFx0XHRvblBvaW50ZXJEb3duLFxuICAgIFx0XHRvblBvaW50ZXJNb3ZlLFxuICAgIFx0XHRyZW1vdmVFdmVudEZyb21DYWNoZSxcbiAgICBcdFx0b25Qb2ludGVyVXAsXG4gICAgXHRcdG9uTW91bnQsXG4gICAgXHRcdHByb3BzLFxuICAgIFx0XHRzbWFsbFNjcmVlbixcbiAgICBcdFx0Y2FsY3VsYXRlZERpbWVuc2lvbnMsXG4gICAgXHRcdCR6b29tZWQsXG4gICAgXHRcdCRjbG9zaW5nLFxuICAgIFx0XHRlcnJvcl9oYW5kbGVyXG4gICAgXHRdO1xuICAgIH1cblxuICAgIGNsYXNzIEltYWdlIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcbiAgICBcdFx0aW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQzLCBjcmVhdGVfZnJhZ21lbnQkMywgbm90X2VxdWFsLCB7IHByb3BzOiAyMSwgc21hbGxTY3JlZW46IDIyIH0sIG51bGwsIFstMSwgLTFdKTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKiBzcmMvY29tcG9uZW50cy9pZnJhbWUuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuNDcuMCAqL1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDIoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGlmcmFtZTtcbiAgICBcdGxldCBsb2FkaW5nO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuXG4gICAgXHRsb2FkaW5nID0gbmV3IExvYWRpbmcoe1xuICAgIFx0XHRcdHByb3BzOiB7XG4gICAgXHRcdFx0XHR0aHVtYjogLyphY3RpdmVJdGVtKi8gY3R4WzJdLnRodW1iLFxuICAgIFx0XHRcdFx0bG9hZGVkOiAvKmxvYWRlZCovIGN0eFswXVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRpZnJhbWUgPSBlbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIFx0XHRcdGNyZWF0ZV9jb21wb25lbnQobG9hZGluZy4kJC5mcmFnbWVudCk7XG4gICAgXHRcdFx0YXR0cihpZnJhbWUsIFwiYWxsb3dcIiwgXCJhdXRvcGxheTsgZnVsbHNjcmVlblwiKTtcbiAgICBcdFx0XHRhdHRyKGlmcmFtZSwgXCJ0aXRsZVwiLCAvKmFjdGl2ZUl0ZW0qLyBjdHhbMl0udGl0bGUpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtaWZcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJ3aWR0aFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiaGVpZ2h0XCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVsxXSArIFwicHhcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0YXBwZW5kKGRpdiwgaWZyYW1lKTtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQobG9hZGluZywgZGl2LCBudWxsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IFtcbiAgICBcdFx0XHRcdFx0YWN0aW9uX2Rlc3Ryb3llcigvKmFkZFNyYyovIGN0eFszXS5jYWxsKG51bGwsIGlmcmFtZSkpLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oaWZyYW1lLCBcImxvYWRcIiwgLypsb2FkX2hhbmRsZXIqLyBjdHhbNV0pXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBbZGlydHldKSB7XG4gICAgXHRcdFx0Y29uc3QgbG9hZGluZ19jaGFuZ2VzID0ge307XG4gICAgXHRcdFx0aWYgKGRpcnR5ICYgLypsb2FkZWQqLyAxKSBsb2FkaW5nX2NoYW5nZXMubG9hZGVkID0gLypsb2FkZWQqLyBjdHhbMF07XG4gICAgXHRcdFx0bG9hZGluZy4kc2V0KGxvYWRpbmdfY2hhbmdlcyk7XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHkgJiAvKmRpbWVuc2lvbnMqLyAyKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2LCBcIndpZHRoXCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5ICYgLypkaW1lbnNpb25zKi8gMikge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJoZWlnaHRcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4obG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQobG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudChsb2FkaW5nKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0cnVuX2FsbChkaXNwb3NlKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSQyKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgeyBwcm9wcyB9ID0gJCRwcm9wcztcbiAgICBcdGxldCBsb2FkZWQsIGRpbWVuc2lvbnM7XG4gICAgXHRjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHByb3BzO1xuICAgIFx0Y29uc3Qgc2V0RGltZW5zaW9ucyA9ICgpID0+ICQkaW52YWxpZGF0ZSgxLCBkaW1lbnNpb25zID0gcHJvcHMuY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKSk7XG4gICAgXHRzZXREaW1lbnNpb25zKCk7XG4gICAgXHRwcm9wcy5zZXRSZXNpemVGdW5jKHNldERpbWVuc2lvbnMpO1xuXG4gICAgXHQvLyBhZGQgc3JjIG91cnNlbHZlcyB0byBhdm9pZCBzcmNfdXJsX2VxdWFsIGNhbGwgKHN2ZWx0ZSBzdHVmZilcbiAgICBcdGNvbnN0IGFkZFNyYyA9IG5vZGUgPT4gbm9kZS5zcmMgPSBhY3RpdmVJdGVtLmlmcmFtZTtcblxuICAgIFx0Y29uc3QgbG9hZF9oYW5kbGVyID0gKCkgPT4gJCRpbnZhbGlkYXRlKDAsIGxvYWRlZCA9IHRydWUpO1xuXG4gICAgXHRcblxuICAgIFx0cmV0dXJuIFtsb2FkZWQsIGRpbWVuc2lvbnMsIGFjdGl2ZUl0ZW0sIGFkZFNyYywgcHJvcHMsIGxvYWRfaGFuZGxlcl07XG4gICAgfVxuXG4gICAgY2xhc3MgSWZyYW1lIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcbiAgICBcdFx0aW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQyLCBjcmVhdGVfZnJhZ21lbnQkMiwgbm90X2VxdWFsLCB7IHByb3BzOiA0IH0pO1xuICAgIFx0fVxuICAgIH1cblxuICAgIC8qIHNyYy9jb21wb25lbnRzL3ZpZGVvLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjQ3LjAgKi9cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQxKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCBsb2FkaW5nO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuXG4gICAgXHRsb2FkaW5nID0gbmV3IExvYWRpbmcoe1xuICAgIFx0XHRcdHByb3BzOiB7XG4gICAgXHRcdFx0XHR0aHVtYjogLyphY3RpdmVJdGVtKi8gY3R4WzJdLnRodW1iLFxuICAgIFx0XHRcdFx0bG9hZGVkOiAvKmxvYWRlZCovIGN0eFswXVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGxvYWRpbmcuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtdmlkXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwid2lkdGhcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImhlaWdodFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybChcIiArIC8qYWN0aXZlSXRlbSovIGN0eFsyXS50aHVtYiArIFwiKVwiKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQobG9hZGluZywgZGl2LCBudWxsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IGFjdGlvbl9kZXN0cm95ZXIoLypvbk1vdW50Ki8gY3R4WzNdLmNhbGwobnVsbCwgZGl2KSk7XG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBbZGlydHldKSB7XG4gICAgXHRcdFx0Y29uc3QgbG9hZGluZ19jaGFuZ2VzID0ge307XG4gICAgXHRcdFx0aWYgKGRpcnR5ICYgLypsb2FkZWQqLyAxKSBsb2FkaW5nX2NoYW5nZXMubG9hZGVkID0gLypsb2FkZWQqLyBjdHhbMF07XG4gICAgXHRcdFx0bG9hZGluZy4kc2V0KGxvYWRpbmdfY2hhbmdlcyk7XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHkgJiAvKmRpbWVuc2lvbnMqLyAyKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2LCBcIndpZHRoXCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5ICYgLypkaW1lbnNpb25zKi8gMikge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJoZWlnaHRcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4obG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQobG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudChsb2FkaW5nKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0ZGlzcG9zZSgpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbmNlJDEoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgICBcdGxldCB7IHByb3BzIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IGxvYWRlZCwgZGltZW5zaW9ucztcbiAgICBcdGNvbnN0IHsgYWN0aXZlSXRlbSwgb3B0cywgY29udGFpbmVyIH0gPSBwcm9wcztcbiAgICBcdGNvbnN0IHNldERpbWVuc2lvbnMgPSAoKSA9PiAkJGludmFsaWRhdGUoMSwgZGltZW5zaW9ucyA9IHByb3BzLmNhbGN1bGF0ZURpbWVuc2lvbnMoYWN0aXZlSXRlbSkpO1xuICAgIFx0c2V0RGltZW5zaW9ucygpO1xuICAgIFx0cHJvcHMuc2V0UmVzaXplRnVuYyhzZXREaW1lbnNpb25zKTtcblxuICAgIFx0LyoqIGFkZHMgYXR0cmlidXRlcyB0byBhIG5vZGUgKi9cbiAgICBcdGNvbnN0IGFkZEF0dHJpYnV0ZXMgPSAobm9kZSwgb2JqKSA9PiB7XG4gICAgXHRcdGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIFx0XHRcdGF0dHIobm9kZSwga2V5LCBvYmpba2V5XSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdC8qKiBjcmVhdGUgYXVkbyAvIHZpZGVvIGVsZW1lbnQgKi9cbiAgICBcdGNvbnN0IG9uTW91bnQgPSBub2RlID0+IHtcbiAgICBcdFx0bGV0IG1lZGlhRWxlbWVudDtcblxuICAgIFx0XHQvKiogdGFrZXMgc3VwcGxpZWQgb2JqZWN0IGFuZCBjcmVhdGVzIGVsZW1lbnRzIGluIHZpZGVvICovXG4gICAgXHRcdGNvbnN0IGFwcGVuZFRvVmlkZW8gPSAodGFnLCBhcnIpID0+IHtcbiAgICBcdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIFx0XHRcdFx0YXJyID0gSlNPTi5wYXJzZShhcnIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGZvciAoY29uc3Qgb2JqIG9mIGFycikge1xuICAgIFx0XHRcdFx0Ly8gY3JlYXRlIG1lZGlhIGVsZW1lbnQgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIFx0XHRcdFx0aWYgKCFtZWRpYUVsZW1lbnQpIHtcbiAgICBcdFx0XHRcdFx0bWVkaWFFbGVtZW50ID0gZWxlbWVudCgob2JqLnR5cGU/LmluY2x1ZGVzKCdhdWRpbycpKSA/ICdhdWRpbycgOiAndmlkZW8nKTtcblxuICAgIFx0XHRcdFx0XHRhZGRBdHRyaWJ1dGVzKG1lZGlhRWxlbWVudCwge1xuICAgIFx0XHRcdFx0XHRcdGNvbnRyb2xzOiB0cnVlLFxuICAgIFx0XHRcdFx0XHRcdGF1dG9wbGF5OiB0cnVlLFxuICAgIFx0XHRcdFx0XHRcdHBsYXlzaW5saW5lOiB0cnVlLFxuICAgIFx0XHRcdFx0XHRcdHRhYmluZGV4OiAnMCdcbiAgICBcdFx0XHRcdFx0fSk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdC8vIGFkZCBzb3VyY2VzIC8gdHJhY2tzIHRvIG1lZGlhIGVsZW1lbnRcbiAgICBcdFx0XHRcdGNvbnN0IGVsID0gZWxlbWVudCh0YWcpO1xuXG4gICAgXHRcdFx0XHRhZGRBdHRyaWJ1dGVzKGVsLCBvYmopO1xuXG4gICAgXHRcdFx0XHRpZiAodGFnID09ICdzb3VyY2UnKSB7XG4gICAgXHRcdFx0XHRcdGxpc3RlbihlbCwgJ2Vycm9yJywgZXJyb3IgPT4gb3B0cy5vbkVycm9yPy4oY29udGFpbmVyLCBhY3RpdmVJdGVtLCBlcnJvcikpO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHRhcHBlbmQobWVkaWFFbGVtZW50LCBlbCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9O1xuXG4gICAgXHRcdGFwcGVuZFRvVmlkZW8oJ3NvdXJjZScsIGFjdGl2ZUl0ZW0uc291cmNlcyk7XG4gICAgXHRcdGFwcGVuZFRvVmlkZW8oJ3RyYWNrJywgYWN0aXZlSXRlbS50cmFja3MgfHwgW10pO1xuICAgIFx0XHRsaXN0ZW4obWVkaWFFbGVtZW50LCAnY2FucGxheScsICgpID0+ICQkaW52YWxpZGF0ZSgwLCBsb2FkZWQgPSB0cnVlKSk7XG4gICAgXHRcdGFwcGVuZChub2RlLCBtZWRpYUVsZW1lbnQpO1xuICAgIFx0fTtcblxuICAgIFx0XG5cbiAgICBcdHJldHVybiBbbG9hZGVkLCBkaW1lbnNpb25zLCBhY3RpdmVJdGVtLCBvbk1vdW50LCBwcm9wc107XG4gICAgfVxuXG4gICAgY2xhc3MgVmlkZW8gZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuICAgIFx0XHRpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDEsIGNyZWF0ZV9mcmFnbWVudCQxLCBub3RfZXF1YWwsIHsgcHJvcHM6IDQgfSk7XG4gICAgXHR9XG4gICAgfVxuXG4gICAgLyogc3JjL2JpZ2dlci1waWN0dXJlLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjQ3LjAgKi9cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9jayhjdHgpIHtcbiAgICBcdGxldCBkaXYyO1xuICAgIFx0bGV0IGRpdjA7XG4gICAgXHRsZXQgZGl2MF9vdXRybztcbiAgICBcdGxldCBwcmV2aW91c19rZXkgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaTtcbiAgICBcdGxldCBkaXYxO1xuICAgIFx0bGV0IGJ1dHRvbjtcbiAgICBcdGxldCBkaXYxX291dHJvO1xuICAgIFx0bGV0IGNvbnRhaW5lckFjdGlvbnNfYWN0aW9uO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuICAgIFx0bGV0IGtleV9ibG9jayA9IGNyZWF0ZV9rZXlfYmxvY2soY3R4KTtcbiAgICBcdGxldCBpZl9ibG9jayA9IC8qaXRlbXMqLyBjdHhbMF0ubGVuZ3RoID4gMSAmJiBjcmVhdGVfaWZfYmxvY2tfMShjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdjIgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGRpdjAgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGtleV9ibG9jay5jKCk7XG4gICAgXHRcdFx0ZGl2MSA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YnV0dG9uID0gZWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbiwgXCJjbGFzc1wiLCBcImJwLXhcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24sIFwidGl0bGVcIiwgXCJDbG9zZVwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbiwgXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XG4gICAgXHRcdFx0YXR0cihkaXYxLCBcImNsYXNzXCIsIFwiYnAtY29udHJvbHNcIik7XG4gICAgXHRcdFx0YXR0cihkaXYyLCBcImNsYXNzXCIsIFwiYnAtd3JhcFwiKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC16b29tZWRcIiwgLyokem9vbWVkKi8gY3R4WzEwXSk7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtaW5saW5lXCIsIC8qaW5saW5lKi8gY3R4WzhdKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1zbWFsbFwiLCAvKnNtYWxsU2NyZWVuKi8gY3R4WzddKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1ub2Nsb3NlXCIsIC8qb3B0cyovIGN0eFs1XS5ub0Nsb3NlKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdjIsIGFuY2hvcik7XG4gICAgXHRcdFx0YXBwZW5kKGRpdjIsIGRpdjApO1xuICAgIFx0XHRcdGtleV9ibG9jay5tKGRpdjIsIG51bGwpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYyLCBkaXYxKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MSwgYnV0dG9uKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLm0oZGl2MSwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGxpc3RlbihidXR0b24sIFwiY2xpY2tcIiwgLypjbG9zZSovIGN0eFsxXSksXG4gICAgXHRcdFx0XHRcdGFjdGlvbl9kZXN0cm95ZXIoY29udGFpbmVyQWN0aW9uc19hY3Rpb24gPSAvKmNvbnRhaW5lckFjdGlvbnMqLyBjdHhbMTRdLmNhbGwobnVsbCwgZGl2MikpXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0ICYmIG5vdF9lcXVhbChwcmV2aW91c19rZXksIHByZXZpb3VzX2tleSA9IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5pKSkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChrZXlfYmxvY2ssIDEsIDEsIG5vb3ApO1xuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0XHRrZXlfYmxvY2sgPSBjcmVhdGVfa2V5X2Jsb2NrKGN0eCk7XG4gICAgXHRcdFx0XHRrZXlfYmxvY2suYygpO1xuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9pbihrZXlfYmxvY2spO1xuICAgIFx0XHRcdFx0a2V5X2Jsb2NrLm0oZGl2MiwgZGl2MSk7XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdGtleV9ibG9jay5wKGN0eCwgZGlydHkpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICgvKml0ZW1zKi8gY3R4WzBdLmxlbmd0aCA+IDEpIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jaykge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5wKGN0eCwgZGlydHkpO1xuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sgPSBjcmVhdGVfaWZfYmxvY2tfMShjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5jKCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLm0oZGl2MSwgbnVsbCk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jaykge1xuICAgIFx0XHRcdFx0aWZfYmxvY2suZCgxKTtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrID0gbnVsbDtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKiR6b29tZWQqLyAxMDI0KSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC16b29tZWRcIiwgLyokem9vbWVkKi8gY3R4WzEwXSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLyppbmxpbmUqLyAyNTYpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLWlubGluZVwiLCAvKmlubGluZSovIGN0eFs4XSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLypzbWFsbFNjcmVlbiovIDEyOCkge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtc21hbGxcIiwgLypzbWFsbFNjcmVlbiovIGN0eFs3XSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLypvcHRzKi8gMzIpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLW5vY2xvc2VcIiwgLypvcHRzKi8gY3R4WzVdLm5vQ2xvc2UpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0aWYgKGRpdjBfb3V0cm8pIGRpdjBfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oa2V5X2Jsb2NrKTtcbiAgICBcdFx0XHRpZiAoZGl2MV9vdXRybykgZGl2MV9vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHRkaXYwX291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdjAsIGZseSwgeyBkdXJhdGlvbjogNDgwIH0pO1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGtleV9ibG9jayk7XG4gICAgXHRcdFx0ZGl2MV9vdXRybyA9IGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihkaXYxLCBmbHksIHt9KTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdjIpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgZGl2MF9vdXRybykgZGl2MF9vdXRyby5lbmQoKTtcbiAgICBcdFx0XHRrZXlfYmxvY2suZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2suZCgpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgZGl2MV9vdXRybykgZGl2MV9vdXRyby5lbmQoKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0cnVuX2FsbChkaXNwb3NlKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzE5OjE5OSkgezplbHNlfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9lbHNlX2Jsb2NrKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCByYXdfdmFsdWUgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaHRtbCArIFwiXCI7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWh0bWxcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0ZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLyphY3RpdmVJdGVtKi8gNjQgJiYgcmF3X3ZhbHVlICE9PSAocmF3X3ZhbHVlID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmh0bWwgKyBcIlwiKSkgZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcdFx0fSxcbiAgICBcdFx0aTogbm9vcCxcbiAgICBcdFx0bzogbm9vcCxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzE5OjE2NSkgXG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzUoY3R4KSB7XG4gICAgXHRsZXQgaWZyYW1lO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdGlmcmFtZSA9IG5ldyBJZnJhbWUoe1xuICAgIFx0XHRcdHByb3BzOiB7IHByb3BzOiAvKmdldENoaWxkUHJvcHMqLyBjdHhbMTNdKCkgfVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGlmcmFtZS4kJC5mcmFnbWVudCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQoaWZyYW1lLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHA6IG5vb3AsXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZyYW1lLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZnJhbWUuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQoaWZyYW1lLCBkZXRhY2hpbmcpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTk6MTA0KSBcbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfNChjdHgpIHtcbiAgICBcdGxldCB2aWRlbztcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHR2aWRlbyA9IG5ldyBWaWRlbyh7XG4gICAgXHRcdFx0cHJvcHM6IHsgcHJvcHM6IC8qZ2V0Q2hpbGRQcm9wcyovIGN0eFsxM10oKSB9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGNyZWF0ZV9jb21wb25lbnQodmlkZW8uJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KHZpZGVvLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHA6IG5vb3AsXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4odmlkZW8uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KHZpZGVvLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGRlc3Ryb3lfY29tcG9uZW50KHZpZGVvLCBkZXRhY2hpbmcpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTk6NCkgeyNpZiBhY3RpdmVJdGVtLmltZ31cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMyhjdHgpIHtcbiAgICBcdGxldCBpbWFnZWl0ZW07XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0aW1hZ2VpdGVtID0gbmV3IEltYWdlKHtcbiAgICBcdFx0XHRwcm9wczoge1xuICAgIFx0XHRcdFx0cHJvcHM6IC8qZ2V0Q2hpbGRQcm9wcyovIGN0eFsxM10oKSxcbiAgICBcdFx0XHRcdHNtYWxsU2NyZWVuOiAvKnNtYWxsU2NyZWVuKi8gY3R4WzddXG4gICAgXHRcdFx0fVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGltYWdlaXRlbS4kJC5mcmFnbWVudCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQoaW1hZ2VpdGVtLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGNvbnN0IGltYWdlaXRlbV9jaGFuZ2VzID0ge307XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLypzbWFsbFNjcmVlbiovIDEyOCkgaW1hZ2VpdGVtX2NoYW5nZXMuc21hbGxTY3JlZW4gPSAvKnNtYWxsU2NyZWVuKi8gY3R4WzddO1xuICAgIFx0XHRcdGltYWdlaXRlbS4kc2V0KGltYWdlaXRlbV9jaGFuZ2VzKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpbWFnZWl0ZW0uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGltYWdlaXRlbS4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudChpbWFnZWl0ZW0sIGRldGFjaGluZyk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxOToyNjcpIHsjaWYgYWN0aXZlSXRlbS5jYXB0aW9ufVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja18yKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCByYXdfdmFsdWUgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uY2FwdGlvbiArIFwiXCI7XG4gICAgXHRsZXQgZGl2X291dHJvO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWNhcFwiKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0XHRkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyphY3RpdmVJdGVtKi8gNjQpICYmIHJhd192YWx1ZSAhPT0gKHJhd192YWx1ZSA9IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5jYXB0aW9uICsgXCJcIikpIGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdGlmIChkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHRkaXZfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2LCBmbHksIHsgZHVyYXRpb246IDIwMCB9KTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzA4OjM3KSB7I2tleSBhY3RpdmVJdGVtLml9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2tleV9ibG9jayhjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgY3VycmVudF9ibG9ja190eXBlX2luZGV4O1xuICAgIFx0bGV0IGlmX2Jsb2NrMDtcbiAgICBcdGxldCBkaXZfaW50cm87XG4gICAgXHRsZXQgZGl2X291dHJvO1xuICAgIFx0bGV0IGlmX2Jsb2NrMV9hbmNob3I7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG4gICAgXHRjb25zdCBpZl9ibG9ja19jcmVhdG9ycyA9IFtjcmVhdGVfaWZfYmxvY2tfMywgY3JlYXRlX2lmX2Jsb2NrXzQsIGNyZWF0ZV9pZl9ibG9ja181LCBjcmVhdGVfZWxzZV9ibG9ja107XG4gICAgXHRjb25zdCBpZl9ibG9ja3MgPSBbXTtcblxuICAgIFx0ZnVuY3Rpb24gc2VsZWN0X2Jsb2NrX3R5cGUoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRpZiAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLmltZykgcmV0dXJuIDA7XG4gICAgXHRcdGlmICgvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uc291cmNlcykgcmV0dXJuIDE7XG4gICAgXHRcdGlmICgvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaWZyYW1lKSByZXR1cm4gMjtcbiAgICBcdFx0cmV0dXJuIDM7XG4gICAgXHR9XG5cbiAgICBcdGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleCA9IHNlbGVjdF9ibG9ja190eXBlKGN0eCk7XG4gICAgXHRpZl9ibG9jazAgPSBpZl9ibG9ja3NbY3VycmVudF9ibG9ja190eXBlX2luZGV4XSA9IGlmX2Jsb2NrX2NyZWF0b3JzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0oY3R4KTtcbiAgICBcdGxldCBpZl9ibG9jazEgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uY2FwdGlvbiAmJiBjcmVhdGVfaWZfYmxvY2tfMihjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0aWZfYmxvY2swLmMoKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdGlmX2Jsb2NrMV9hbmNob3IgPSBlbXB0eSgpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtaW5uZXJcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0aWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0ubShkaXYsIG51bGwpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpZl9ibG9jazFfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gW1xuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2LCBcInBvaW50ZXJkb3duXCIsIC8qcG9pbnRlcmRvd25faGFuZGxlciovIGN0eFsyMV0pLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2LCBcInBvaW50ZXJ1cFwiLCAvKnBvaW50ZXJ1cF9oYW5kbGVyKi8gY3R4WzIyXSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0bGV0IHByZXZpb3VzX2Jsb2NrX2luZGV4ID0gY3VycmVudF9ibG9ja190eXBlX2luZGV4O1xuICAgIFx0XHRcdGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleCA9IHNlbGVjdF9ibG9ja190eXBlKGN0eCk7XG5cbiAgICBcdFx0XHRpZiAoY3VycmVudF9ibG9ja190eXBlX2luZGV4ID09PSBwcmV2aW91c19ibG9ja19pbmRleCkge1xuICAgIFx0XHRcdFx0aWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0ucChjdHgsIGRpcnR5KTtcbiAgICBcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2Nrc1twcmV2aW91c19ibG9ja19pbmRleF0sIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2tzW3ByZXZpb3VzX2Jsb2NrX2luZGV4XSA9IG51bGw7XG4gICAgXHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0XHRpZl9ibG9jazAgPSBpZl9ibG9ja3NbY3VycmVudF9ibG9ja190eXBlX2luZGV4XTtcblxuICAgIFx0XHRcdFx0aWYgKCFpZl9ibG9jazApIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swID0gaWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0gPSBpZl9ibG9ja19jcmVhdG9yc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAucChjdHgsIGRpcnR5KTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgIFx0XHRcdFx0aWZfYmxvY2swLm0oZGl2LCBudWxsKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLmNhcHRpb24pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5WzBdICYgLyphY3RpdmVJdGVtKi8gNjQpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdH1cbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMSA9IGNyZWF0ZV9pZl9ibG9ja18yKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5jKCk7XG4gICAgXHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLm0oaWZfYmxvY2sxX2FuY2hvci5wYXJlbnROb2RlLCBpZl9ibG9jazFfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMSkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazApO1xuXG4gICAgXHRcdFx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgXHRcdFx0XHRpZiAoZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdFx0ZGl2X2ludHJvID0gY3JlYXRlX2luX3RyYW5zaXRpb24oZGl2LCAvKm1lZGlhVHJhbnNpdGlvbiovIGN0eFsxMl0sIHRydWUpO1xuICAgIFx0XHRcdFx0ZGl2X2ludHJvLnN0YXJ0KCk7XG4gICAgXHRcdFx0fSk7XG5cbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazApO1xuICAgIFx0XHRcdGlmIChkaXZfaW50cm8pIGRpdl9pbnRyby5pbnZhbGlkYXRlKCk7XG4gICAgXHRcdFx0ZGl2X291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdiwgLyptZWRpYVRyYW5zaXRpb24qLyBjdHhbMTJdLCBmYWxzZSk7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2sxKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0aWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0uZCgpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmQoZGV0YWNoaW5nKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goaWZfYmxvY2sxX2FuY2hvcik7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxOTo1MDkpIHsjaWYgaXRlbXMubGVuZ3RoID4gMX1cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMShjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgcmF3X3ZhbHVlID0gYCR7Lypwb3NpdGlvbiovIGN0eFs0XSArIDF9IC8gJHsvKml0ZW1zKi8gY3R4WzBdLmxlbmd0aH1gICsgXCJcIjtcbiAgICBcdGxldCBidXR0b24wO1xuICAgIFx0bGV0IGJ1dHRvbjE7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YnV0dG9uMCA9IGVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXHRcdFx0YnV0dG9uMSA9IGVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1jb3VudFwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjAsIFwiY2xhc3NcIiwgXCJicC1wcmV2XCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMCwgXCJ0aXRsZVwiLCBcIlByZXZpb3VzXCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMCwgXCJhcmlhLWxhYmVsXCIsIFwiUHJldmlvdXNcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24xLCBcImNsYXNzXCIsIFwiYnAtbmV4dFwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjEsIFwidGl0bGVcIiwgXCJOZXh0XCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMSwgXCJhcmlhLWxhYmVsXCIsIFwiTmV4dFwiKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0XHRkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGJ1dHRvbjAsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgYnV0dG9uMSwgYW5jaG9yKTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IFtcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGJ1dHRvbjAsIFwiY2xpY2tcIiwgLypwcmV2Ki8gY3R4WzJdKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGJ1dHRvbjEsIFwiY2xpY2tcIiwgLypuZXh0Ki8gY3R4WzNdKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKnBvc2l0aW9uLCBpdGVtcyovIDE3ICYmIHJhd192YWx1ZSAhPT0gKHJhd192YWx1ZSA9IGAkey8qcG9zaXRpb24qLyBjdHhbNF0gKyAxfSAvICR7LyppdGVtcyovIGN0eFswXS5sZW5ndGh9YCArIFwiXCIpKSBkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1x0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChidXR0b24wKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goYnV0dG9uMSk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50KGN0eCkge1xuICAgIFx0bGV0IGlmX2Jsb2NrX2FuY2hvcjtcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IGlmX2Jsb2NrID0gLyppdGVtcyovIGN0eFswXSAmJiBjcmVhdGVfaWZfYmxvY2soY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRpZl9ibG9ja19hbmNob3IgPSBlbXB0eSgpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpZl9ibG9ja19hbmNob3IsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmICgvKml0ZW1zKi8gY3R4WzBdKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2spIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sucChjdHgsIGRpcnR5KTtcblxuICAgIFx0XHRcdFx0XHRpZiAoZGlydHlbMF0gJiAvKml0ZW1zKi8gMSkge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2ssIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jayA9IGNyZWF0ZV9pZl9ibG9jayhjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5jKCk7XG4gICAgXHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2ssIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5tKGlmX2Jsb2NrX2FuY2hvci5wYXJlbnROb2RlLCBpZl9ibG9ja19hbmNob3IpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2spIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jayA9IG51bGw7XG4gICAgXHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5kKGRldGFjaGluZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGlmX2Jsb2NrX2FuY2hvcik7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFuY2UoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgICBcdGxldCAkem9vbWVkO1xuICAgIFx0bGV0IHsgaXRlbXMgPSB1bmRlZmluZWQgfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgeyB0YXJnZXQgPSB1bmRlZmluZWQgfSA9ICQkcHJvcHM7XG4gICAgXHRjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgXHQvKiogaW5kZXggb2YgY3VycmVudCBhY3RpdmUgaXRlbSAqL1xuICAgIFx0bGV0IHBvc2l0aW9uO1xuXG4gICAgXHQvKiogb3B0aW9ucyBwYXNzZWQgdmlhIG9wZW4gbWV0aG9kICovXG4gICAgXHRsZXQgb3B0cztcblxuICAgIFx0LyoqIGJvb2wgdHJhY2tzIG9wZW4gc3RhdGUgKi9cbiAgICBcdGxldCBpc09wZW47XG5cbiAgICBcdC8qKiBkb20gZWxlbWVudCB0byByZXN0b3JlIGZvY3VzIHRvIG9uIGNsb3NlICovXG4gICAgXHRsZXQgZm9jdXNUcmlnZ2VyO1xuXG4gICAgXHQvKiogYm9vbCB0cnVlIGlmIGNvbnRhaW5lciB3aWR0aCA8IDc2OSAqL1xuICAgIFx0bGV0IHNtYWxsU2NyZWVuO1xuXG4gICAgXHQvKiogYm9vbCB2YWx1ZSBvZiBpbmxpbmUgb3B0aW9uIHBhc3NlZCBpbiBvcGVuIG1ldGhvZCAqL1xuICAgIFx0bGV0IGlubGluZTtcblxuICAgIFx0LyoqIHdoZW4gcG9zaXRpb24gaXMgc2V0ICovXG4gICAgXHRsZXQgbW92ZW1lbnQ7XG5cbiAgICBcdC8qKiBzdG9yZXMgdGFyZ2V0IG9uIHBvaW50ZXJkb3duIChyZWYgZm9yIG92ZXJsYXkgY2xvc2UpICovXG4gICAgXHRsZXQgY2xpY2tlZEVsO1xuXG4gICAgXHQvKiogYWN0aXZlIGl0ZW0gb2JqZWN0ICovXG4gICAgXHRsZXQgYWN0aXZlSXRlbTtcblxuICAgIFx0LyoqIHRydWUgaWYgYWN0aXZlSXRlbSBpcyBodG1sICovXG4gICAgXHRsZXQgYWN0aXZlSXRlbUlzSHRtbDtcblxuICAgIFx0LyoqIGZ1bmN0aW9uIHNldCBieSBjaGlsZCBjb21wb25lbnQgdG8gcnVuIHdoZW4gY29udGFpbmVyIHJlc2l6ZWQgKi9cbiAgICBcdGxldCByZXNpemVGdW5jO1xuXG4gICAgXHQvKiogdXNlZCBieSBjaGlsZCBjb21wb25lbnRzIHRvIHNldCByZXNpemUgZnVuY3Rpb24gKi9cbiAgICBcdGNvbnN0IHNldFJlc2l6ZUZ1bmMgPSBmbiA9PiByZXNpemVGdW5jID0gZm47XG5cbiAgICBcdC8qKiBjb250YWluZXIgZWxlbWVudCAoZWwpIC8gd2lkdGggKHcpIC8gaGVpZ2h0IChoKSAqL1xuICAgIFx0Y29uc3QgY29udGFpbmVyID0ge307XG5cbiAgICBcdC8vIC8qKiB0cnVlIGlmIGltYWdlIGlzIGN1cnJlbnRseSB6b29tZWQgcGFzdCBzdGFydGluZyBzaXplICovXG4gICAgXHRjb25zdCB6b29tZWQgPSB3cml0YWJsZSgwKTtcblxuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIHpvb21lZCwgdmFsdWUgPT4gJCRpbnZhbGlkYXRlKDEwLCAkem9vbWVkID0gdmFsdWUpKTtcblxuICAgIFx0Y29uc3Qgb3BlbiA9IG9wdGlvbnMgPT4ge1xuICAgIFx0XHQkJGludmFsaWRhdGUoNSwgb3B0cyA9IG9wdGlvbnMpO1xuICAgIFx0XHQkJGludmFsaWRhdGUoOCwgaW5saW5lID0gb3B0cy5pbmxpbmUpO1xuICAgIFx0XHRjb25zdCBvcGVuSXRlbXMgPSBvcHRzLml0ZW1zO1xuXG4gICAgXHRcdC8vIGFkZCBjbGFzcyB0byBoaWRlIHNjcm9sbCBpZiBub3QgaW5saW5lIGdhbGxlcnlcbiAgICBcdFx0aWYgKCFpbmxpbmUgJiYgaHRtbC5zY3JvbGxIZWlnaHQgPiBodG1sLmNsaWVudEhlaWdodCkge1xuICAgIFx0XHRcdGh0bWwuY2xhc3NMaXN0LmFkZCgnYnAtbG9jaycpO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gdXBkYXRlIHRyaWdnZXIgZWxlbWVudCB0byByZXN0b3JlIGZvY3VzXG4gICAgXHRcdGZvY3VzVHJpZ2dlciA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICBcdFx0JCRpbnZhbGlkYXRlKDIwLCBjb250YWluZXIudyA9IHRhcmdldC5vZmZzZXRXaWR0aCwgY29udGFpbmVyKTtcblxuICAgIFx0XHQkJGludmFsaWRhdGUoXG4gICAgXHRcdFx0MjAsXG4gICAgXHRcdFx0Y29udGFpbmVyLmggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHlcbiAgICBcdFx0XHQ/IGdsb2JhbFRoaXMuaW5uZXJIZWlnaHRcbiAgICBcdFx0XHQ6IHRhcmdldC5jbGllbnRIZWlnaHQsXG4gICAgXHRcdFx0Y29udGFpbmVyXG4gICAgXHRcdCk7XG5cbiAgICBcdFx0JCRpbnZhbGlkYXRlKDcsIHNtYWxsU2NyZWVuID0gY29udGFpbmVyLncgPCA3NjkpO1xuICAgIFx0XHQkJGludmFsaWRhdGUoNCwgcG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IDApO1xuXG4gICAgXHRcdC8vIG1ha2UgYXJyYXkgdy8gZGF0YXNldCB0byB3b3JrIHdpdGhcbiAgICBcdFx0aWYgKEFycmF5LmlzQXJyYXkob3Blbkl0ZW1zKSkge1xuICAgIFx0XHRcdC8vIGFycmF5IHdhcyBwYXNzZWRcbiAgICBcdFx0XHQkJGludmFsaWRhdGUoMCwgaXRlbXMgPSBvcGVuSXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgXHRcdFx0XHQvLyBvdmVycmlkZSBnYWxsZXJ5IHBvc2l0aW9uIGlmIG5lZWRlZFxuICAgIFx0XHRcdFx0aWYgKG9wdHMuZWwgJiYgb3B0cy5lbCA9PT0gaXRlbS5lbGVtZW50KSB7XG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb3NpdGlvbiA9IGkpO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHRyZXR1cm4geyBpLCAuLi5pdGVtIH07XG4gICAgXHRcdFx0fSkpO1xuICAgIFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdC8vIG5vZGVsaXN0IC8gbm9kZSB3YXMgcGFzc2VkXG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDAsIGl0ZW1zID0gKG9wZW5JdGVtcy5sZW5ndGggPyBbLi4ub3Blbkl0ZW1zXSA6IFtvcGVuSXRlbXNdKS5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICBcdFx0XHRcdC8vIG92ZXJyaWRlIGdhbGxlcnkgcG9zaXRpb24gaWYgbmVlZGVkXG4gICAgXHRcdFx0XHRpZiAob3B0cy5lbCA9PT0gZWxlbWVudCkge1xuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9zaXRpb24gPSBpKTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0cmV0dXJuIHsgZWxlbWVudCwgaSwgLi4uZWxlbWVudC5kYXRhc2V0IH07XG4gICAgXHRcdFx0fSkpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICBcdFx0b3B0cy5vbkNsb3NlPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKTtcbiAgICBcdFx0Y2xvc2luZy5zZXQodHJ1ZSk7XG4gICAgXHRcdCQkaW52YWxpZGF0ZSgwLCBpdGVtcyA9IG51bGwpO1xuXG4gICAgXHRcdC8vIHJlc3RvcmUgZm9jdXMgdG8gdHJpZ2dlciBlbGVtZW50XG4gICAgXHRcdGZvY3VzVHJpZ2dlcj8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgcHJldiA9ICgpID0+IHNldFBvc2l0aW9uKHBvc2l0aW9uIC0gMSk7XG4gICAgXHRjb25zdCBuZXh0ID0gKCkgPT4gc2V0UG9zaXRpb24ocG9zaXRpb24gKyAxKTtcblxuICAgIFx0Y29uc3Qgc2V0UG9zaXRpb24gPSBpbmRleCA9PiB7XG4gICAgXHRcdG1vdmVtZW50ID0gaW5kZXggLSBwb3NpdGlvbjtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDQsIHBvc2l0aW9uID0gZ2V0TmV4dFBvc2l0aW9uKGluZGV4KSk7XG4gICAgXHR9O1xuXG4gICAgXHQvKipcbiAgICAgKiByZXR1cm5zIG5leHQgZ2FsbGVyeSBwb3NpdGlvbiAobG9vcGVkIGlmIG5lY2Nlc3NhcnkpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICovXG4gICAgXHRjb25zdCBnZXROZXh0UG9zaXRpb24gPSBpbmRleCA9PiAoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgaXRlbXMubGVuZ3RoO1xuXG4gICAgXHRjb25zdCBvbktleWRvd24gPSBlID0+IHtcbiAgICBcdFx0Y29uc3QgeyBrZXksIHNoaWZ0S2V5IH0gPSBlO1xuXG4gICAgXHRcdGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgXHRcdFx0IW9wdHMubm9DbG9zZSAmJiBjbG9zZSgpO1xuICAgIFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgXHRcdFx0bmV4dCgpO1xuICAgIFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICBcdFx0XHRwcmV2KCk7XG4gICAgXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnVGFiJykge1xuICAgIFx0XHRcdC8vIHRyYXAgZm9jdXMgb24gdGFiIHByZXNzXG4gICAgXHRcdFx0Y29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudDtcblxuICAgIFx0XHRcdC8vIGFsbG93IGJyb3dzZXIgdG8gaGFuZGxlIHRhYiBpbnRvIHZpZGVvIGNvbnRyb2xzIG9ubHlcbiAgICBcdFx0XHRpZiAoc2hpZnRLZXkgfHwgIWFjdGl2ZUVsZW1lbnQuY29udHJvbHMpIHtcbiAgICBcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcdFx0XHRcdGNvbnN0IHsgZm9jdXNXcmFwID0gY29udGFpbmVyLmVsIH0gPSBvcHRzO1xuICAgIFx0XHRcdFx0Y29uc3QgdGFiYmFibGUgPSBbLi4uZm9jdXNXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKV0uZmlsdGVyKG5vZGUgPT4gbm9kZS50YWJJbmRleCA+PSAwKTtcbiAgICBcdFx0XHRcdGxldCBpbmRleCA9IHRhYmJhYmxlLmluZGV4T2YoYWN0aXZlRWxlbWVudCk7XG4gICAgXHRcdFx0XHRpbmRleCArPSB0YWJiYWJsZS5sZW5ndGggKyAoc2hpZnRLZXkgPyAtMSA6IDEpO1xuICAgIFx0XHRcdFx0dGFiYmFibGVbaW5kZXggJSB0YWJiYWJsZS5sZW5ndGhdLmZvY3VzKCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHQvKipcbiAgICAgKiBjYWxjdWxhdGUgZGltZW5zaW9ucyBvZiBoZWlnaHQgLyB3aWR0aCByZXNpemVkIHRvIGZpdCB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gb2JqZWN0IHdpdGggaGVpZ2h0IC8gd2lkdGggcHJvcGVydGllc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX0gW3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyXVxuICAgICAqL1xuICAgIFx0Y29uc3QgY2FsY3VsYXRlRGltZW5zaW9ucyA9ICh7IHdpZHRoID0gMTkyMCwgaGVpZ2h0ID0gMTA4MCB9KSA9PiB7XG4gICAgXHRcdGNvbnN0IHsgc2NhbGUgPSAwLjk5IH0gPSBvcHRzO1xuICAgIFx0XHRjb25zdCByYXRpbyA9IE1hdGgubWluKDEsIGNvbnRhaW5lci53IC8gd2lkdGggKiBzY2FsZSwgY29udGFpbmVyLmggLyBoZWlnaHQgKiBzY2FsZSk7XG5cbiAgICBcdFx0Ly8gcm91bmQgbnVtYmVyIHNvIHdlIGRvbid0IHVzZSBhIGZsb2F0IGFzIHRoZSBzaXplcyBhdHRyaWJ1dGVcbiAgICBcdFx0cmV0dXJuIFtNYXRoLnJvdW5kKHdpZHRoICogcmF0aW8pLCBNYXRoLnJvdW5kKGhlaWdodCAqIHJhdGlvKV07XG4gICAgXHR9O1xuXG4gICAgXHQvKiogcHJlbG9hZHMgaW1hZ2VzIGZvciBwcmV2aW91cyBhbmQgbmV4dCBpdGVtcyBpbiBnYWxsZXJ5ICovXG4gICAgXHRjb25zdCBwcmVsb2FkTmV4dCA9ICgpID0+IHtcbiAgICBcdFx0aWYgKGl0ZW1zKSB7XG4gICAgXHRcdFx0Y29uc3QgbmV4dEl0ZW0gPSBpdGVtc1tnZXROZXh0UG9zaXRpb24ocG9zaXRpb24gKyAxKV07XG4gICAgXHRcdFx0Y29uc3QgcHJldkl0ZW0gPSBpdGVtc1tnZXROZXh0UG9zaXRpb24ocG9zaXRpb24gLSAxKV07XG4gICAgXHRcdFx0IW5leHRJdGVtLnByZWxvYWQgJiYgbG9hZEltYWdlKG5leHRJdGVtKTtcbiAgICBcdFx0XHQhcHJldkl0ZW0ucHJlbG9hZCAmJiBsb2FkSW1hZ2UocHJldkl0ZW0pO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHQvKiogbG9hZHMgLyBkZWNvZGVzIGltYWdlIGZvciBpdGVtICovXG4gICAgXHRjb25zdCBsb2FkSW1hZ2UgPSBpdGVtID0+IHtcbiAgICBcdFx0aWYgKGl0ZW0uaW1nKSB7XG4gICAgXHRcdFx0Y29uc3QgaW1hZ2UgPSBlbGVtZW50KCdpbWcnKTtcbiAgICBcdFx0XHRpbWFnZS5zaXplcyA9IG9wdHMuc2l6ZXMgfHwgYCR7Y2FsY3VsYXRlRGltZW5zaW9ucyhpdGVtKVswXX1weGA7XG4gICAgXHRcdFx0aW1hZ2Uuc3Jjc2V0ID0gaXRlbS5pbWc7XG4gICAgXHRcdFx0aXRlbS5wcmVsb2FkID0gdHJ1ZTtcblxuICAgIFx0XHRcdHJldHVybiBpbWFnZS5kZWNvZGUoKS5jYXRjaChlcnJvciA9PiB7XG4gICAgXHRcdFx0XHRcbiAgICBcdFx0XHR9KTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0LyoqIHN2ZWx0ZSB0cmFuc2l0aW9uIHRvIGNvbnRyb2wgb3BlbmluZyAvIGNoYW5naW5nICovXG4gICAgXHRjb25zdCBtZWRpYVRyYW5zaXRpb24gPSAobm9kZSwgaXNFbnRlcmluZykgPT4ge1xuICAgIFx0XHRpZiAoIWlzT3BlbiB8fCAhaXRlbXMpIHtcbiAgICBcdFx0XHQvLyBlbnRyYW5jZSAvIGV4aXQgdHJhbnNpdGlvblxuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSgxOCwgaXNPcGVuID0gaXNFbnRlcmluZyk7XG5cbiAgICBcdFx0XHRyZXR1cm4gb3B0cy5pbnRyb1xuICAgIFx0XHRcdD8gZmx5KG5vZGUsIHsgeTogaXNFbnRlcmluZyA/IDEwIDogLTEwIH0pXG4gICAgXHRcdFx0OiBzY2FsZUluKG5vZGUpO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gZm9yd2FyZCAvIGJhY2t3YXJkIHRyYW5zaXRpb25cbiAgICBcdFx0cmV0dXJuIGZseShub2RlLCB7XG4gICAgXHRcdFx0eDogKG1vdmVtZW50ID4gMCA/IDIwIDogLTIwKSAqIChpc0VudGVyaW5nID8gMSA6IC0xKSxcbiAgICBcdFx0XHRkdXJhdGlvbjogMjUwXG4gICAgXHRcdH0pO1xuICAgIFx0fTtcblxuICAgIFx0LyoqIGN1c3RvbSBzdmVsdGUgdHJhbnNpdGlvbiBmb3IgZW50cmFuY2Ugem9vbSAqL1xuICAgIFx0Y29uc3Qgc2NhbGVJbiA9IG5vZGUgPT4ge1xuICAgIFx0XHRsZXQgZGltZW5zaW9ucztcblxuICAgIFx0XHRpZiAoYWN0aXZlSXRlbUlzSHRtbCkge1xuICAgIFx0XHRcdGNvbnN0IGJwSXRlbSA9IG5vZGUuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xuICAgIFx0XHRcdGRpbWVuc2lvbnMgPSBbYnBJdGVtLmNsaWVudFdpZHRoLCBicEl0ZW0uY2xpZW50SGVpZ2h0XTtcbiAgICBcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRkaW1lbnNpb25zID0gY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHJlY3QgaXMgYm91bmRpbmcgcmVjdCBvZiB0cmlnZ2VyIGVsZW1lbnRcbiAgICBcdFx0Y29uc3QgcmVjdCA9IChhY3RpdmVJdGVtLmVsZW1lbnQgfHwgZm9jdXNUcmlnZ2VyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIFx0XHRjb25zdCBsZWZ0T2Zmc2V0ID0gcmVjdC5sZWZ0IC0gKGNvbnRhaW5lci53IC0gcmVjdC53aWR0aCkgLyAyO1xuICAgIFx0XHRjb25zdCBjZW50ZXJUb3AgPSByZWN0LnRvcCAtIChjb250YWluZXIuaCAtIHJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgXHRcdGNvbnN0IHNjYWxlV2lkdGggPSByZWN0LndpZHRoIC8gZGltZW5zaW9uc1swXTtcbiAgICBcdFx0Y29uc3Qgc2NhbGVIZWlnaHQgPSByZWN0LmhlaWdodCAvIGRpbWVuc2lvbnNbMV07XG5cbiAgICBcdFx0cmV0dXJuIHtcbiAgICBcdFx0XHRkdXJhdGlvbjogNDgwLFxuICAgIFx0XHRcdGVhc2luZzogY3ViaWNPdXQsXG4gICAgXHRcdFx0Y3NzOiAodCwgdSkgPT4ge1xuICAgIFx0XHRcdFx0cmV0dXJuIGB0cmFuc2Zvcm06dHJhbnNsYXRlM2QoJHtsZWZ0T2Zmc2V0ICogdX1weCwgJHtjZW50ZXJUb3AgKiB1fXB4LCAwKSBzY2FsZTNkKCR7c2NhbGVXaWR0aCArIHQgKiAoMSAtIHNjYWxlV2lkdGgpfSwgJHtzY2FsZUhlaWdodCArIHQgKiAoMSAtIHNjYWxlSGVpZ2h0KX0sIDEpYDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH07XG4gICAgXHR9O1xuXG4gICAgXHQvKiogcHJvdmlkZXMgb2JqZWN0IHcvIG5lZWRlZCBmdW5jcyAvIGRhdGEgdG8gY2hpbGQgY29tcG9uZW50cyAgKi9cbiAgICBcdGNvbnN0IGdldENoaWxkUHJvcHMgPSAoKSA9PiAoe1xuICAgIFx0XHRhY3RpdmVJdGVtLFxuICAgIFx0XHRjYWxjdWxhdGVEaW1lbnNpb25zLFxuICAgIFx0XHRsb2FkSW1hZ2UsXG4gICAgXHRcdHByZWxvYWROZXh0LFxuICAgIFx0XHRvcHRzLFxuICAgIFx0XHRwcmV2LFxuICAgIFx0XHRuZXh0LFxuICAgIFx0XHRjbG9zZSxcbiAgICBcdFx0c2V0UmVzaXplRnVuYyxcbiAgICBcdFx0em9vbWVkLFxuICAgIFx0XHRjb250YWluZXJcbiAgICBcdH0pO1xuXG4gICAgXHQvKiogY29kZSB0byBydW4gb24gbW91bnQgLyBkZXN0cm95ICovXG4gICAgXHRjb25zdCBjb250YWluZXJBY3Rpb25zID0gbm9kZSA9PiB7XG4gICAgXHRcdCQkaW52YWxpZGF0ZSgyMCwgY29udGFpbmVyLmVsID0gbm9kZSwgY29udGFpbmVyKTtcbiAgICBcdFx0bGV0IHJlbW92ZUtleWRvd25MaXN0ZW5lcjtcbiAgICBcdFx0bGV0IHJvQWN0aXZlO1xuICAgIFx0XHRvcHRzLm9uT3Blbj8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSk7XG5cbiAgICBcdFx0Ly8gZG9uJ3QgdXNlIGtleWJvYXJkIGV2ZW50cyBmb3IgaW5saW5lIGdhbGxlcmllc1xuICAgIFx0XHRpZiAoIWlubGluZSkge1xuICAgIFx0XHRcdHJlbW92ZUtleWRvd25MaXN0ZW5lciA9IGxpc3RlbihnbG9iYWxUaGlzLCAna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBzZXQgdXAgcmVzaXplIG9ic2VydmVyXG4gICAgXHRcdGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgIFx0XHRcdFx0Ly8gdXNlIHJvQWN0aXZlIHRvIGF2b2lkIHJ1bm5pbmcgb24gaW5pdGlhbCBvcGVuXG4gICAgXHRcdFx0XHRpZiAocm9BY3RpdmUpIHtcbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDIwLCBjb250YWluZXIudyA9IGVudHJpZXNbMF0uY29udGVudFJlY3Qud2lkdGgsIGNvbnRhaW5lcik7XG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSgyMCwgY29udGFpbmVyLmggPSBlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LmhlaWdodCwgY29udGFpbmVyKTtcbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDcsIHNtYWxsU2NyZWVuID0gY29udGFpbmVyLncgPCA3NjkpO1xuXG4gICAgXHRcdFx0XHRcdC8vIHJ1biBjaGlsZCBjb21wb25lbnQgcmVzaXplIGZ1bmN0aW9uXG4gICAgXHRcdFx0XHRcdHJlc2l6ZUZ1bmM/LigpO1xuXG4gICAgXHRcdFx0XHRcdC8vIHJ1biB1c2VyIGRlZmluZWQgb25SZXNpemUgZnVuY3Rpb25cbiAgICBcdFx0XHRcdFx0b3B0cy5vblJlc2l6ZT8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdHJvQWN0aXZlID0gdHJ1ZTtcbiAgICBcdFx0XHR9KTtcblxuICAgIFx0XHRyby5vYnNlcnZlKG5vZGUpO1xuXG4gICAgXHRcdHJldHVybiB7XG4gICAgXHRcdFx0ZGVzdHJveSgpIHtcbiAgICBcdFx0XHRcdHJvLmRpc2Nvbm5lY3QoKTtcbiAgICBcdFx0XHRcdHJlbW92ZUtleWRvd25MaXN0ZW5lcj8uKCk7XG4gICAgXHRcdFx0XHRjbG9zaW5nLnNldChmYWxzZSk7XG5cbiAgICBcdFx0XHRcdC8vIHJlbW92ZSBjbGFzcyBoaWRpbmcgc2Nyb2xsXG4gICAgXHRcdFx0XHRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2JwLWxvY2snKTtcblxuICAgIFx0XHRcdFx0b3B0cy5vbkNsb3NlZD8uKCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9O1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgcG9pbnRlcmRvd25faGFuZGxlciA9IGUgPT4gJCRpbnZhbGlkYXRlKDksIGNsaWNrZWRFbCA9IGUudGFyZ2V0KTtcblxuICAgIFx0Y29uc3QgcG9pbnRlcnVwX2hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIFx0XHQvLyBvbmx5IGNsb3NlIGlmIGxlZnQgY2xpY2sgb24gc2VsZiBhbmQgbm90IGRyYWdnZWRcbiAgICBcdFx0aWYgKGUuYnV0dG9uICE9PSAyICYmIGUudGFyZ2V0ID09PSB0aGlzICYmIGNsaWNrZWRFbCA9PT0gdGhpcykge1xuICAgIFx0XHRcdCFvcHRzLm5vQ2xvc2UgJiYgY2xvc2UoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0JCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgXHRcdGlmICgnaXRlbXMnIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBpdGVtcyA9ICQkcHJvcHMuaXRlbXMpO1xuICAgIFx0XHRpZiAoJ3RhcmdldCcgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDE1LCB0YXJnZXQgPSAkJHByb3BzLnRhcmdldCk7XG4gICAgXHR9O1xuXG4gICAgXHQkJHNlbGYuJCQudXBkYXRlID0gKCkgPT4ge1xuICAgIFx0XHRpZiAoJCRzZWxmLiQkLmRpcnR5WzBdICYgLyppdGVtcywgcG9zaXRpb24sIGFjdGl2ZUl0ZW0sIGlzT3BlbiwgYWN0aXZlSXRlbUlzSHRtbCwgb3B0cywgY29udGFpbmVyKi8gMTgzNTEyMSkge1xuICAgIFx0XHRcdGlmIChpdGVtcykge1xuICAgIFx0XHRcdFx0Ly8gdXBkYXRlIGFjdGl2ZSBpdGVtIHdoZW4gcG9zaXRpb24gY2hhbmdlc1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDYsIGFjdGl2ZUl0ZW0gPSBpdGVtc1twb3NpdGlvbl0pO1xuXG4gICAgXHRcdFx0XHQkJGludmFsaWRhdGUoMTksIGFjdGl2ZUl0ZW1Jc0h0bWwgPSBhY3RpdmVJdGVtLmhhc093blByb3BlcnR5KCdodG1sJykpO1xuXG4gICAgXHRcdFx0XHRpZiAoaXNPcGVuKSB7XG4gICAgXHRcdFx0XHRcdC8vIGNsZWFyIGNoaWxkIHJlc2l6ZSBmdW5jdGlvbiBpZiBodG1sXG4gICAgXHRcdFx0XHRcdGFjdGl2ZUl0ZW1Jc0h0bWwgJiYgc2V0UmVzaXplRnVuYyhudWxsKTtcblxuICAgIFx0XHRcdFx0XHQvLyBydW4gb25VcGRhdGUgd2hlbiBpdGVtcyB1cGRhdGVkXG4gICAgXHRcdFx0XHRcdG9wdHMub25VcGRhdGU/Lihjb250YWluZXIuZWwsIGFjdGl2ZUl0ZW0pO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0cmV0dXJuIFtcbiAgICBcdFx0aXRlbXMsXG4gICAgXHRcdGNsb3NlLFxuICAgIFx0XHRwcmV2LFxuICAgIFx0XHRuZXh0LFxuICAgIFx0XHRwb3NpdGlvbixcbiAgICBcdFx0b3B0cyxcbiAgICBcdFx0YWN0aXZlSXRlbSxcbiAgICBcdFx0c21hbGxTY3JlZW4sXG4gICAgXHRcdGlubGluZSxcbiAgICBcdFx0Y2xpY2tlZEVsLFxuICAgIFx0XHQkem9vbWVkLFxuICAgIFx0XHR6b29tZWQsXG4gICAgXHRcdG1lZGlhVHJhbnNpdGlvbixcbiAgICBcdFx0Z2V0Q2hpbGRQcm9wcyxcbiAgICBcdFx0Y29udGFpbmVyQWN0aW9ucyxcbiAgICBcdFx0dGFyZ2V0LFxuICAgIFx0XHRvcGVuLFxuICAgIFx0XHRzZXRQb3NpdGlvbixcbiAgICBcdFx0aXNPcGVuLFxuICAgIFx0XHRhY3RpdmVJdGVtSXNIdG1sLFxuICAgIFx0XHRjb250YWluZXIsXG4gICAgXHRcdHBvaW50ZXJkb3duX2hhbmRsZXIsXG4gICAgXHRcdHBvaW50ZXJ1cF9oYW5kbGVyXG4gICAgXHRdO1xuICAgIH1cblxuICAgIGNsYXNzIEJpZ2dlcl9waWN0dXJlIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcblxuICAgIFx0XHRpbml0KFxuICAgIFx0XHRcdHRoaXMsXG4gICAgXHRcdFx0b3B0aW9ucyxcbiAgICBcdFx0XHRpbnN0YW5jZSxcbiAgICBcdFx0XHRjcmVhdGVfZnJhZ21lbnQsXG4gICAgXHRcdFx0bm90X2VxdWFsLFxuICAgIFx0XHRcdHtcbiAgICBcdFx0XHRcdGl0ZW1zOiAwLFxuICAgIFx0XHRcdFx0dGFyZ2V0OiAxNSxcbiAgICBcdFx0XHRcdG9wZW46IDE2LFxuICAgIFx0XHRcdFx0Y2xvc2U6IDEsXG4gICAgXHRcdFx0XHRwcmV2OiAyLFxuICAgIFx0XHRcdFx0bmV4dDogMyxcbiAgICBcdFx0XHRcdHNldFBvc2l0aW9uOiAxN1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0bnVsbCxcbiAgICBcdFx0XHRbLTEsIC0xXVxuICAgIFx0XHQpO1xuICAgIFx0fVxuXG4gICAgXHRnZXQgaXRlbXMoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFswXTtcbiAgICBcdH1cblxuXG5cbiAgICBcdGdldCB0YXJnZXQoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFsxNV07XG4gICAgXHR9XG5cblxuXG4gICAgXHRnZXQgb3BlbigpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzE2XTtcbiAgICBcdH1cblxuICAgIFx0Z2V0IGNsb3NlKCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMV07XG4gICAgXHR9XG5cbiAgICBcdGdldCBwcmV2KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMl07XG4gICAgXHR9XG5cbiAgICBcdGdldCBuZXh0KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbM107XG4gICAgXHR9XG5cbiAgICBcdGdldCBzZXRQb3NpdGlvbigpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzE3XTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBCaWdnZXJQaWN0dXJlXG4gICAgICogQHBhcmFtIHt7dGFyZ2V0OiBIVE1MRWxlbWVudH19IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyBCaWdnZXJQaWN0dXJlIGluc3RhbmNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYmlnZ2VyUGljdHVyZSAob3B0aW9ucykge1xuICAgIFx0cmV0dXJuIG5ldyBCaWdnZXJfcGljdHVyZSh7XG4gICAgXHRcdC4uLm9wdGlvbnMsXG4gICAgXHRcdHByb3BzOiBvcHRpb25zLFxuICAgIFx0fSlcbiAgICB9XG5cbiAgICByZXR1cm4gYmlnZ2VyUGljdHVyZTtcblxufSkpO1xuIiwgIigoKSA9PiB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIGNvbnN0IHNjcm9sbCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgZGlyOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpbm5lciA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcignLnNsaWRlLWlubmVyJykgYXMgSFRNTEVsZW1lbnRcbiAgICBjb25zdCBzdGVwID0gaW5uZXIub2Zmc2V0V2lkdGhcbiAgICBsZXQgbGVmdCA9IDBcbiAgICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICAgIGxlZnQgPSBpbm5lci5zY3JvbGxMZWZ0IC0gc3RlcFxuICAgIH0gZWxzZSB7XG4gICAgICBsZWZ0ID0gaW5uZXIuc2Nyb2xsTGVmdCArIHN0ZXBcbiAgICB9XG4gICAgaW5uZXIuc2Nyb2xsKHtcbiAgICAgIGxlZnQsXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLnNsaWRlLWNvbnRyb2wtbGVmdCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWxlbWVudCwgJ2xlZnQnKVxuICAgICAgfSlcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtY29udHJvbC1yaWdodCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWxlbWVudCwgJ3JpZ2h0JylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtaW5uZXInKVxuICAgIGVscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGxldCBzdGFydFggPSAwXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgc3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH0pXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChlOiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgIHNjcm9sbChlbCwgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYID4gc3RhcnRYID8gJ2xlZnQnIDogJ3JpZ2h0JylcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn0pKClcbiIsICJ7XCJiYWNrX3RvX3RvcFwiOntcImFuaW1hdGlvblwiOnRydWUsXCJpY29uX2hlaWdodFwiOlwiMmVtXCIsXCJpY29uX25hbWVcIjpcInJvY2tldFwiLFwiaWNvbl93aWR0aFwiOlwiMmVtXCIsXCJwb3NpdGlvbl9ib3R0b21cIjpcIjFyZW1cIixcInBvc2l0aW9uX2VuZFwiOlwiMXJlbVwifSxcImJpZ2dlcl9waWN0dXJlXCI6e1wicGxheV9pbnRlcnZhbFwiOjUwMDB9LFwiYmxvZ1wiOntcImFyY2hpdmVzXCI6e1wicGFnaW5hdGVcIjozMH0sXCJmdWxsX3dpZHRoXCI6ZmFsc2UsXCJob21lXCI6e1wibWFpbl9zZWN0aW9uc1wiOltcImJsb2dcIixcInNvZnR3YXJlLWVuZ2luZWVyaW5nXCIsXCJwcm9ncmFtbWluZ1wiLFwib29wXCJdLFwicmVjZW50X3Bvc3RzXCI6MTJ9LFwicGFnaW5hdGVcIjoxMixcInBvc3RfZGF0ZV9mb3JtYXRcIjpcIjpkYXRlX2xvbmdcIixcInBvc3RfdGh1bWJuYWlsXCI6dHJ1ZSxcInBvc3RfdGh1bWJuYWlsX2RlZmF1bHRcIjpcImltYWdlcy90aHVtYm5haWwucG5nXCIsXCJwb3N0X3RodW1ibmFpbF9wbGFjZWhvbGRlclwiOlwiXCIsXCJyZWxhdGVkX3Bvc3RzXCI6e1wibnVtYmVyXCI6MTB9LFwic2lkZWJhclwiOntcInRheG9ub21pZXNcIjp7XCJzdHlsZVwiOlwidW5kZXJsaW5lXCJ9fX0sXCJicmVhZGNydW1iXCI6e1wiZGlzYWJsZWRcIjpmYWxzZX0sXCJjc3NfYnVuZGxlX25hbWVcIjpcImxzXCIsXCJkZWJ1Z1wiOmZhbHNlLFwiZG9jc1wiOntcImRhdGVfZm9ybWF0XCI6XCI6ZGF0ZV9sb25nXCJ9LFwiZmVhdHVyZWRfaW1hZ2VcIjp7XCJzaXplXCI6XCJ4NjQwXCJ9LFwiZm9vdGVyXCI6e1wic29jaWFsc1wiOntcImdpdGh1YlwiOlwibGVhcm4tc29mdHdhcmUtZW5naW5lZXJpbmdcIixcImdtYWlsXCI6XCJtYWlsdG86Ly9sZWFybi5zb2Z0d2FyZS5lbmdAZ21haWwuY29tXCIsXCJsaW5rZWRpblwiOlwiaHR0cHM6Ly9saW5rZWRpbi5jb20vY29tcGFueS9sZWFybi1zb2Z0d2FyZVwiLFwidHdpdHRlclwiOlwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zb2Z0d2FyZTQ1Njg3XCIsXCJ5b3V0dWJlXCI6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9AbGVhcm4tc29mdHdhcmVcIn19LFwiaGVhZGVyXCI6e1wiYnJlYWtwb2ludFwiOlwibGdcIixcImZ1bGxfd2lkdGhcIjp0cnVlLFwic29jaWFsc1wiOntcImdpdGh1YlwiOlwibGVhcm4tc29mdHdhcmUtZW5naW5lZXJpbmdcIixcImdtYWlsXCI6XCJtYWlsdG86Ly9sZWFybi5zb2Z0d2FyZS5lbmdAZ21haWwuY29tXCIsXCJsaW5rZWRpblwiOlwiaHR0cHM6Ly9saW5rZWRpbi5jb20vY29tcGFueS9sZWFybi1zb2Z0d2FyZVwiLFwidHdpdHRlclwiOlwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zb2Z0d2FyZTQ1Njg3XCIsXCJ5b3V0dWJlXCI6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9AbGVhcm4tc29mdHdhcmVcIn0sXCJzdGlja3lcIjp0cnVlfSxcImhlYWRpbmdfc2lnblwiOntcImNvbnRhaW5lcnNcIjp7XCIuaGItYmxvZy1wb3N0LWNvbnRlbnRcIjp7fSxcIi5oYi1kb2NzLWRvYy1jb250ZW50XCI6e319fSxcImpzX2J1bmRsZV9uYW1lXCI6XCJsc1wiLFwibG9nb1wiOlwiaW1hZ2VzL2xvZ28tc3F1YXJlLTIucG5nXCIsXCJtb2R1bGVzXCI6e1wiY29kZS1ibG9jay1wYW5lbFwiOntcImpzX3Jlc291cmNlc1wiOlt7XCJwYXJ0aWFsXCI6XCJjb2RlLWJsb2NrLXBhbmVsL2Fzc2V0cy9qcy1yZXNvdXJjZVwifV19fSxcInBhZ2luYXRpb25cIjp7XCJhbGlnbm1lbnRcIjpcImNlbnRlclwiLFwic2libGluZ3NcIjoyLFwic2l6ZVwiOlwiXCJ9LFwicHJvZ3Jlc3NfYmFyXCI6e1wiaGVpZ2h0XCI6XCIycHhcIixcImluaXRpYWxfd2lkdGhcIjoyMCxcImludGVydmFsXCI6NTAsXCJ0aW1lXCI6Mn0sXCJzY3JvbGxiYXJcIjp7XCJjb3JuZXJfYmdcIjpcIiM5MDkyOTRcIixcImhlaWdodFwiOlwiMTJweFwiLFwidGh1bWJfYmdcIjpcIiM5MDkyOTRcIixcInRyYWNrX2JnXCI6XCIjZjhmOWZhXCIsXCJ3aWR0aFwiOlwiMTJweFwifSxcInN0eWxlc1wiOntcImhiX3RvcF9vZmZzZXRcIjpcIjI0cHhcIixcInByZWZpeFwiOlwiaGItXCJ9LFwidGVybXNcIjp7XCJwYWdpbmF0ZVwiOjl9fSIsICJpbXBvcnQgKiBhcyBwYXJhbXMgZnJvbSBcIkBwYXJhbXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3Mge1xuICAgIHByaXZhdGUgZWxlOiBIVE1MRWxlbWVudFxuXG4gICAgcHJpdmF0ZSBiYXI6IEhUTUxFbGVtZW50XG5cbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXJcblxuICAgIHByaXZhdGUgaW50ZXJ2YWw6IG51bWJlciBcblxuICAgIHByaXZhdGUgc3RlcDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHBhcmFtcz8ucHJvZ3Jlc3NfYmFyPy53aWR0aCA/PyAyMFxuICAgICAgICB0aGlzLmludGVydmFsID0gcGFyYW1zPy5wcm9ncmVzc19iYXI/LmludGVydmFsID8/IDUwXG4gICAgICAgIGNvbnN0IHRpbWUgPSBwYXJhbXM/LnByb2dyZXNzX2Jhcj8udGltZSA/PyAyIFxuICAgICAgICB0aGlzLnN0ZXAgPSAoMTAwIC0gdGhpcy53aWR0aCkgLyB0aW1lIC8gMTAwMCAqIHRoaXMuaW50ZXJ2YWxcbiAgICAgICAgdGhpcy5pbml0QmFyKClcbiAgICAgICAgdGhpcy5pbml0UHJvZ3Jlc3MoKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFByb2dyZXNzKCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2dyZXNzLmNsYXNzTmFtZSA9ICdoYi1wcm9ncmVzcyBwcm9ncmVzcyBwb3NpdGlvbi1maXhlZCB0b3AtMCB3LTEwMCByb3VuZGVkLTAgZC1ub25lJ1xuICAgICAgICBwcm9ncmVzcy5yb2xlID0gJ3Byb2dyZXNzYmFyJ1xuICAgICAgICBwcm9ncmVzcy5hcHBlbmRDaGlsZCh0aGlzLmJhcilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9ncmVzcylcbiAgICAgICAgdGhpcy5lbGUgPSBwcm9ncmVzc1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJhcigpIHtcbiAgICAgICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYmFyLmNsYXNzTmFtZSA9ICdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJ1xuICAgICAgICBiYXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJyUnXG4gICAgICAgIHRoaXMuYmFyID0gYmFyXG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5lbGUuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53aWR0aCArPSB0aGlzLnN0ZXBcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLndpZHRoID0gYCR7dGhpcy53aWR0aH0lYFxuICAgICAgICB9LCB0aGlzLmludGVydmFsKVxuICAgIH1cbn1cbiIsICJpbXBvcnQgUHJvZ3Jlc3MgZnJvbSBcIi4vcHJvZ3Jlc3NcIjtcblxuKCgpID0+IHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IG5ldyBQcm9ncmVzcygpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgICBwcm9ncmVzcy5zaG93KClcbiAgICB9KVxufSkoKVxuIiwgIigoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZScpLmZvckVhY2goKHRhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd0YWJsZS1yZXNwb25zaXZlJ1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRhYmxlLmNsb25lTm9kZSh0cnVlKSlcbiAgICAgICAgdGFibGUucGFyZW50Tm9kZT8ucmVwbGFjZUNoaWxkKHdyYXBwZXIsIHRhYmxlKVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSlcbiAgfSxcblxuICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpXG5cbiAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudClcbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9pbmRleC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1BWF9VSUQgPSAxXzAwMF8wMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcblxuLyoqXG4gKiBQcm9wZXJseSBlc2NhcGUgSURzIHNlbGVjdG9ycyB0byBoYW5kbGUgd2VpcmQgSURzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHBhcnNlU2VsZWN0b3IgPSBzZWxlY3RvciA9PiB7XG4gIGlmIChzZWxlY3RvciAmJiB3aW5kb3cuQ1NTICYmIHdpbmRvdy5DU1MuZXNjYXBlKSB7XG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciBuZWVkcyBlc2NhcGluZyB0byBoYW5kbGUgSURzIChodG1sNSspIGNvbnRhaW5pbmcgZm9yIGluc3RhbmNlIC9cbiAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoLyMoW15cXHNcIiMnXSspL2csIChtYXRjaCwgaWQpID0+IGAjJHtDU1MuZXNjYXBlKGlkKX1gKVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yXG59XG5cbi8vIFNob3V0LW91dCBBbmd1cyBDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuY29uc3QgdG9UeXBlID0gb2JqZWN0ID0+IHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgJHtvYmplY3R9YFxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogUHVibGljIFV0aWwgQVBJXG4gKi9cblxuY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgZG8ge1xuICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKVxuICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuXG4gIHJldHVybiBwcmVmaXhcbn1cblxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG59XG5cbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSBvYmplY3QgPT4ge1xuICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9iamVjdCA9IG9iamVjdFswXVxuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnXG59XG5cbmNvbnN0IGdldEVsZW1lbnQgPSBvYmplY3QgPT4ge1xuICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICBpZiAoaXNFbGVtZW50KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0LmpxdWVyeSA/IG9iamVjdFswXSA6IG9iamVjdFxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdzdHJpbmcnICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyc2VTZWxlY3RvcihvYmplY3QpKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gIGlmICghaXNFbGVtZW50KGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRJc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnXG4gIC8vIEhhbmRsZSBgZGV0YWlsc2AgZWxlbWVudCBhcyBpdHMgY29udGVudCBtYXkgZmFsc2llIGFwcGVhciB2aXNpYmxlIHdoZW4gaXQgaXMgY2xvc2VkXG4gIGNvbnN0IGNsb3NlZERldGFpbHMgPSBlbGVtZW50LmNsb3Nlc3QoJ2RldGFpbHM6bm90KFtvcGVuXSknKVxuXG4gIGlmICghY2xvc2VkRGV0YWlscykge1xuICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG4gIH1cblxuICBpZiAoY2xvc2VkRGV0YWlscyAhPT0gZWxlbWVudCkge1xuICAgIGNvbnN0IHN1bW1hcnkgPSBlbGVtZW50LmNsb3Nlc3QoJ3N1bW1hcnknKVxuICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkucGFyZW50Tm9kZSAhPT0gY2xvc2VkRGV0YWlscykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHN1bW1hcnkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG59XG5cbmNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWRcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJ1xufVxuXG5jb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG4vKipcbiAqIFRyaWNrIHRvIHJlc3RhcnQgYW4gZWxlbWVudCdzIGFuaW1hdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4gdm9pZFxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cuY2hhcmlzdGhlby5pby9ibG9nLzIwMjEvMDIvcmVzdGFydC1hLWNzcy1hbmltYXRpb24td2l0aC1qYXZhc2NyaXB0LyNyZXN0YXJ0aW5nLWEtY3NzLWFuaW1hdGlvblxuICovXG5jb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbn1cblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBpZiAod2luZG93LmpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4gd2luZG93LmpRdWVyeVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyA9IFtdXG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgaWYgKCFET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MucHVzaChjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuXG5jb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUVcbiAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV1cbiAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luXG4gICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGV4ZWN1dGUgPSAocG9zc2libGVDYWxsYmFjaywgYXJncyA9IFtdLCBkZWZhdWx0VmFsdWUgPSBwb3NzaWJsZUNhbGxiYWNrKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgcG9zc2libGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IHBvc3NpYmxlQ2FsbGJhY2soLi4uYXJncykgOiBkZWZhdWx0VmFsdWVcbn1cblxuY29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuICBpZiAoIXdhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZ1xuXG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gIGNvbnN0IGhhbmRsZXIgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGlmICh0YXJnZXQgIT09IHRyYW5zaXRpb25FbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICB9XG5cbiAgdHJhbnNpdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25FbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gKlxuICogQHBhcmFtIHthcnJheX0gbGlzdCAgICBUaGUgbGlzdCBvZiBlbGVtZW50c1xuICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcbiAqIEBwYXJhbSBpc0N5Y2xlQWxsb3dlZFxuICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAqL1xuY29uc3QgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQgPSAobGlzdCwgYWN0aXZlRWxlbWVudCwgc2hvdWxkR2V0TmV4dCwgaXNDeWNsZUFsbG93ZWQpID0+IHtcbiAgY29uc3QgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoXG4gIGxldCBpbmRleCA9IGxpc3QuaW5kZXhPZihhY3RpdmVFbGVtZW50KVxuXG4gIC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50XG4gIC8vIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gIXNob3VsZEdldE5leHQgJiYgaXNDeWNsZUFsbG93ZWQgPyBsaXN0W2xpc3RMZW5ndGggLSAxXSA6IGxpc3RbMF1cbiAgfVxuXG4gIGluZGV4ICs9IHNob3VsZEdldE5leHQgPyAxIDogLTFcblxuICBpZiAoaXNDeWNsZUFsbG93ZWQpIHtcbiAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aFxuICB9XG5cbiAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldXG59XG5cbmV4cG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbixcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldEVsZW1lbnQsXG4gIGdldGpRdWVyeSxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcCxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBwYXJzZVNlbGVjdG9yLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0b1R5cGVcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBnZXRqUXVlcnkgfSBmcm9tICcuLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cblxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiBQcml2YXRlIG1ldGhvZHNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudCB9KVxuXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgZm9yIChsZXQgeyB0YXJnZXQgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogdGFyZ2V0IH0pXG5cbiAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGNhbGxhYmxlLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cylcbiAgICAuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICAvLyBUT0RPOiB0b29sdGlwIHBhc3NlcyBgZmFsc2VgIGluc3RlYWQgb2Ygc2VsZWN0b3IsIHNvIHdlIG5lZWQgdG8gY2hlY2tcbiAgY29uc3QgY2FsbGFibGUgPSBpc0RlbGVnYXRlZCA/IGRlbGVnYXRpb25GdW5jdGlvbiA6IChoYW5kbGVyIHx8IGRlbGVnYXRpb25GdW5jdGlvbilcbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcblxuICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKG9yaWdpbmFsVHlwZUV2ZW50IGluIGN1c3RvbUV2ZW50cykge1xuICAgIGNvbnN0IHdyYXBGdW5jdGlvbiA9IGZuID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsYWJsZSA9IHdyYXBGdW5jdGlvbihjYWxsYWJsZSlcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGdW5jdGlvbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuICAgIHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmID0gcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgY2FsbGFibGUpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbFxuICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgZm9yIChjb25zdCBbaGFuZGxlcktleSwgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIGNhbGxhYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5SGFuZGxlcnMsIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50XG5cbiAgICBsZXQgalF1ZXJ5RXZlbnQgPSBudWxsXG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcblxuICAgIGlmIChpbk5hbWVzcGFjZSAmJiAkKSB7XG4gICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpXG5cbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudClcbiAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gICAgfVxuXG4gICAgY29uc3QgZXZ0ID0gaHlkcmF0ZU9iaihuZXcgRXZlbnQoZXZlbnQsIHsgYnViYmxlcywgY2FuY2VsYWJsZTogdHJ1ZSB9KSwgYXJncylcblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgalF1ZXJ5RXZlbnQpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZU9iaihvYmosIG1ldGEgPSB7fSkge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuICAgIHRyeSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gTnVtYmVyKHZhbHVlKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cbiAgICBjb25zdCBic0tleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykgJiYgIWtleS5zdGFydHNXaXRoKCdic0NvbmZpZycpKVxuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aClcbiAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKVxuICAgIH1cblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2NvbmZpZy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgeyBpc0VsZW1lbnQsIHRvVHlwZSB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbmZpZyB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZylcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tZXJnZUNvbmZpZ09iaihjb25maWcsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBqc29uQ29uZmlnID0gaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAnY29uZmlnJykgOiB7fSAvLyB0cnkgdG8gcGFyc2VcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi4odHlwZW9mIGpzb25Db25maWcgPT09ICdvYmplY3QnID8ganNvbkNvbmZpZyA6IHt9KSxcbiAgICAgIC4uLihpc0VsZW1lbnQoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSA6IHt9KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgfVxuXG4gIF90eXBlQ2hlY2tDb25maWcoY29uZmlnLCBjb25maWdUeXBlcyA9IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpIHtcbiAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgZXhwZWN0ZWRUeXBlc10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnVHlwZXMpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBgJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhLmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL3V0aWwvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBWRVJTSU9OID0gJzUuMy4xJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgdGhpcy5fZWxlbWVudClcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldChnZXRFbGVtZW50KGVsZW1lbnQpLCB0aGlzLkRBVEFfS0VZKVxuICB9XG5cbiAgc3RhdGljIGdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gXG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YFxuICB9XG5cbiAgc3RhdGljIGV2ZW50TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgaXNEaXNhYmxlZCwgaXNWaXNpYmxlLCBwYXJzZVNlbGVjdG9yIH0gZnJvbSAnLi4vdXRpbC9pbmRleC5qcydcblxuY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JylcblxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICBsZXQgaHJlZkF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHJpYnV0ZSB8fCAoIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBocmVmQXR0cmlidXRlID0gYCMke2hyZWZBdHRyaWJ1dGUuc3BsaXQoJyMnKVsxXX1gXG4gICAgfVxuXG4gICAgc2VsZWN0b3IgPSBocmVmQXR0cmlidXRlICYmIGhyZWZBdHRyaWJ1dGUgIT09ICcjJyA/IGhyZWZBdHRyaWJ1dGUudHJpbSgpIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IpXG59XG5cbmNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKVxuICB9LFxuXG4gIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICB9LFxuXG4gIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKS5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubWF0Y2hlcyhzZWxlY3RvcikpXG4gIH0sXG5cbiAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHBhcmVudHMgPSBbXVxuICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKVxuXG4gICAgd2hpbGUgKGFuY2VzdG9yKSB7XG4gICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpXG4gICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50c1xuICB9LFxuXG4gIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgcHJldmlvdXMgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChwcmV2aW91cykge1xuICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbcHJldmlvdXNdXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXMucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuICAvLyBUT0RPOiB0aGlzIGlzIG5vdyB1bnVzZWQ7IHJlbW92ZSBsYXRlciBhbG9uZyB3aXRoIHByZXYoKVxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF1cbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG5cbiAgZm9jdXNhYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIGNvbnN0IGZvY3VzYWJsZXMgPSBbXG4gICAgICAnYScsXG4gICAgICAnYnV0dG9uJyxcbiAgICAgICdpbnB1dCcsXG4gICAgICAndGV4dGFyZWEnLFxuICAgICAgJ3NlbGVjdCcsXG4gICAgICAnZGV0YWlscycsXG4gICAgICAnW3RhYmluZGV4XScsXG4gICAgICAnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nXG4gICAgXS5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9Om5vdChbdGFiaW5kZXhePVwiLVwiXSlgKS5qb2luKCcsJylcblxuICAgIHJldHVybiB0aGlzLmZpbmQoZm9jdXNhYmxlcywgZWxlbWVudCkuZmlsdGVyKGVsID0+ICFpc0Rpc2FibGVkKGVsKSAmJiBpc1Zpc2libGUoZWwpKVxuICB9LFxuXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA6IG51bGxcbiAgfSxcblxuICBnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKSA6IFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3JFbmdpbmVcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgcmVmbG93XG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2NvbGxhcHNlJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSdcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJ1xuY29uc3QgQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4gPSBgOnNjb3BlIC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9IC4ke0NMQVNTX05BTUVfQ09MTEFQU0V9YFxuY29uc3QgQ0xBU1NfTkFNRV9IT1JJWk9OVEFMID0gJ2NvbGxhcHNlLWhvcml6b250YWwnXG5cbmNvbnN0IFdJRFRIID0gJ3dpZHRoJ1xuY29uc3QgSEVJR0hUID0gJ2hlaWdodCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuY29sbGFwc2Uuc2hvdywgLmNvbGxhcHNlLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgcGFyZW50OiBudWxsLFxuICB0b2dnbGU6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHBhcmVudDogJyhudWxsfGVsZW1lbnQpJyxcbiAgdG9nZ2xlOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ29sbGFwc2UgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBbXVxuXG4gICAgY29uc3QgdG9nZ2xlTGlzdCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGNvbnN0IGVsZW0gb2YgdG9nZ2xlTGlzdCkge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBTZWxlY3RvckVuZ2luZS5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW1lbnQgPT4gZm91bmRFbGVtZW50ID09PSB0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbml0aWFsaXplQ2hpbGRyZW4oKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LCB0aGlzLl9pc1Nob3duKCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVDaGlsZHJlbiA9IFtdXG5cbiAgICAvLyBmaW5kIGFjdGl2ZSBjaGlsZHJlblxuICAgIGlmICh0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICBhY3RpdmVDaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9BQ1RJVkVTKVxuICAgICAgICAuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudClcbiAgICAgICAgLm1hcChlbGVtZW50ID0+IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgeyB0b2dnbGU6IGZhbHNlIH0pKVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVDaGlsZHJlbi5sZW5ndGggJiYgYWN0aXZlQ2hpbGRyZW5bMF0uX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBhY3RpdmVJbnN0YW5jZSBvZiBhY3RpdmVDaGlsZHJlbikge1xuICAgICAgYWN0aXZlSW5zdGFuY2UuaGlkZSgpXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fdHJpZ2dlckFycmF5LCB0cnVlKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuICAgIH1cblxuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0aGlzLl90cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpXG5cbiAgICAgIGlmIChlbGVtZW50ICYmICF0aGlzLl9pc1Nob3duKGVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbdHJpZ2dlcl0sIGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIF9pc1Nob3duKGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICBjb25maWcucGFyZW50ID0gZ2V0RWxlbWVudChjb25maWcucGFyZW50KVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfSE9SSVpPTlRBTCkgPyBXSURUSCA6IEhFSUdIVFxuICB9XG5cbiAgX2luaXRpYWxpemVDaGlsZHJlbigpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhbZWxlbWVudF0sIHRoaXMuX2lzU2hvd24oc2VsZWN0ZWQpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9nZXRGaXJzdExldmVsQ2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmQoQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4sIHRoaXMuX2NvbmZpZy5wYXJlbnQpXG4gICAgLy8gcmVtb3ZlIGNoaWxkcmVuIGlmIGdyZWF0ZXIgZGVwdGhcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fY29uZmlnLnBhcmVudCkuZmlsdGVyKGVsZW1lbnQgPT4gIWNoaWxkcmVuLmluY2x1ZGVzKGVsZW1lbnQpKVxuICB9XG5cbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0cmlnZ2VyQXJyYXksIGlzT3Blbikge1xuICAgIGlmICghdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRyaWdnZXJBcnJheSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQ09MTEFQU0VELCAhaXNPcGVuKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgY29uc3QgX2NvbmZpZyA9IHt9XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IENvbGxhcHNlLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgX2NvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnIHx8IChldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiBldmVudC5kZWxlZ2F0ZVRhcmdldC50YWdOYW1lID09PSAnQScpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IodGhpcykpIHtcbiAgICBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KS50b2dnbGUoKVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDb2xsYXBzZSlcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldE5leHRBY3RpdmVFbGVtZW50LCBpc0Rpc2FibGVkIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBIT01FX0tFWSA9ICdIb21lJ1xuY29uc3QgRU5EX0tFWSA9ICdFbmQnXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19EUk9QRE9XTiA9ICdkcm9wZG93bidcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICc6bm90KC5kcm9wZG93bi10b2dnbGUpJ1xuXG5jb25zdCBTRUxFQ1RPUl9UQUJfUEFORUwgPSAnLmxpc3QtZ3JvdXAsIC5uYXYsIFtyb2xlPVwidGFibGlzdFwiXSdcbmNvbnN0IFNFTEVDVE9SX09VVEVSID0gJy5uYXYtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lOTkVSID0gYC5uYXYtbGluayR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIC5saXN0LWdyb3VwLWl0ZW0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCBbcm9sZT1cInRhYlwiXSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX1gXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nIC8vIFRPRE86IGNvdWxkIG9ubHkgYmUgYHRhYmAgaW4gdjZcbmNvbnN0IFNFTEVDVE9SX0lOTkVSX0VMRU0gPSBgJHtTRUxFQ1RPUl9JTk5FUn0sICR7U0VMRUNUT1JfREFUQV9UT0dHTEV9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUgPSBgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdYFxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX1RBQl9QQU5FTClcblxuICAgIGlmICghdGhpcy5fcGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICAgIC8vIFRPRE86IHNob3VsZCB0aHJvdyBleGNlcHRpb24gaW4gdjZcbiAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZWxlbWVudC5vdXRlckhUTUx9IGhhcyBub3QgYSB2YWxpZCBwYXJlbnQgJHtTRUxFQ1RPUl9JTk5FUl9FTEVNfWApXG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGluaXRpYWwgYXJpYSBhdHRyaWJ1dGVzXG4gICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXModGhpcy5fcGFyZW50LCB0aGlzLl9nZXRDaGlsZHJlbigpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KCkgeyAvLyBTaG93cyB0aGlzIGVsZW0gYW5kIGRlYWN0aXZhdGUgdGhlIGFjdGl2ZSBzaWJsaW5nIGlmIGV4aXN0c1xuICAgIGNvbnN0IGlubmVyRWxlbSA9IHRoaXMuX2VsZW1lbnRcbiAgICBpZiAodGhpcy5fZWxlbUlzQWN0aXZlKGlubmVyRWxlbSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFNlYXJjaCBmb3IgYWN0aXZlIHRhYiBvbiBzYW1lIHBhcmVudCB0byBkZWFjdGl2YXRlIGl0XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5fZ2V0QWN0aXZlRWxlbSgpXG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBhY3RpdmUgP1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoYWN0aXZlLCBFVkVOVF9ISURFLCB7IHJlbGF0ZWRUYXJnZXQ6IGlubmVyRWxlbSB9KSA6XG4gICAgICBudWxsXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcihpbm5lckVsZW0sIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldDogYWN0aXZlIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgKGhpZGVFdmVudCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2RlYWN0aXZhdGUoYWN0aXZlLCBpbm5lckVsZW0pXG4gICAgdGhpcy5fYWN0aXZhdGUoaW5uZXJFbGVtLCBhY3RpdmUpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9hY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgdGhpcy5fYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSkgLy8gU2VhcmNoIGFuZCBhY3RpdmF0ZS9zaG93IHRoZSBwcm9wZXIgc2VjdGlvblxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCB0cnVlKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9kZWFjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgZWxlbWVudC5ibHVyKClcblxuICAgIHRoaXMuX2RlYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSkgLy8gU2VhcmNoIGFuZCBkZWFjdGl2YXRlIHRoZSBzaG93biBzZWN0aW9uIHRvb1xuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgZmFsc2UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9ISURERU4sIHsgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW0gfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoIShbQVJST1dfTEVGVF9LRVksIEFSUk9XX1JJR0hUX0tFWSwgQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWSwgSE9NRV9LRVksIEVORF9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKS8vIHN0b3BQcm9wYWdhdGlvbi9wcmV2ZW50RGVmYXVsdCBib3RoIGFkZGVkIHRvIHN1cHBvcnQgdXAvZG93biBrZXlzIHdpdGhvdXQgc2Nyb2xsaW5nIHRoZSBwYWdlXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbHRlcihlbGVtZW50ID0+ICFpc0Rpc2FibGVkKGVsZW1lbnQpKVxuICAgIGxldCBuZXh0QWN0aXZlRWxlbWVudFxuXG4gICAgaWYgKFtIT01FX0tFWSwgRU5EX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQgPSBjaGlsZHJlbltldmVudC5rZXkgPT09IEhPTUVfS0VZID8gMCA6IGNoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzTmV4dCA9IFtBUlJPV19SSUdIVF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpXG4gICAgICBuZXh0QWN0aXZlRWxlbWVudCA9IGdldE5leHRBY3RpdmVFbGVtZW50KGNoaWxkcmVuLCBldmVudC50YXJnZXQsIGlzTmV4dCwgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAobmV4dEFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UobmV4dEFjdGl2ZUVsZW1lbnQpLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDaGlsZHJlbigpIHsgLy8gY29sbGVjdGlvbiBvZiBpbm5lciBlbGVtZW50c1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lOTkVSX0VMRU0sIHRoaXMuX3BhcmVudClcbiAgfVxuXG4gIF9nZXRBY3RpdmVFbGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoY2hpbGQgPT4gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKSkgfHwgbnVsbFxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhwYXJlbnQsICdyb2xlJywgJ3RhYmxpc3QnKVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpIHtcbiAgICBjaGlsZCA9IHRoaXMuX2dldElubmVyRWxlbWVudChjaGlsZClcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZClcbiAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoY2hpbGQpXG4gICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgaXNBY3RpdmUpXG5cbiAgICBpZiAob3V0ZXJFbGVtICE9PSBjaGlsZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMob3V0ZXJFbGVtLCAncm9sZScsICdwcmVzZW50YXRpb24nKVxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGNoaWxkLCAncm9sZScsICd0YWInKVxuXG4gICAgLy8gc2V0IGF0dHJpYnV0ZXMgdG8gdGhlIHJlbGF0ZWQgcGFuZWwgdG9vXG4gICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoY2hpbGQpXG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAncm9sZScsICd0YWJwYW5lbCcpXG5cbiAgICBpZiAoY2hpbGQuaWQpIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ2FyaWEtbGFiZWxsZWRieScsIGAke2NoaWxkLmlkfWApXG4gICAgfVxuICB9XG5cbiAgX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIG9wZW4pIHtcbiAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIW91dGVyRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfRFJPUERPV04pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGUgPSAoc2VsZWN0b3IsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIG91dGVyRWxlbSlcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUsIG9wZW4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX01FTlUsIENMQVNTX05BTUVfU0hPVylcbiAgICBvdXRlckVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3BlbilcbiAgfVxuXG4gIF9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9lbGVtSXNBY3RpdmUoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIGlubmVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtbGluaylcbiAgX2dldElubmVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0ubWF0Y2hlcyhTRUxFQ1RPUl9JTk5FUl9FTEVNKSA/IGVsZW0gOiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lOTkVSX0VMRU0sIGVsZW0pXG4gIH1cblxuICAvLyBUcnkgdG8gZ2V0IHRoZSBvdXRlciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWl0ZW0pXG4gIF9nZXRPdXRlckVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmNsb3Nlc3QoU0VMRUNUT1JfT1VURVIpIHx8IGVsZW1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykuc2hvdygpXG59KVxuXG4vKipcbiAqIEluaXRpYWxpemUgb24gZm9jdXNcbiAqL1xuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUpKSB7XG4gICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudClcbiAgfVxufSlcbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRhYilcblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc3dpcGUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc3dpcGUnXG5jb25zdCBFVkVOVF9LRVkgPSAnLmJzLnN3aXBlJ1xuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJ1xuY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGVuZENhbGxiYWNrOiBudWxsLFxuICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG4gIHJpZ2h0Q2FsbGJhY2s6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgbGVmdENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgcmlnaHRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGlmICghZWxlbWVudCB8fCAhU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kZWx0YVggPSAwXG4gICAgdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpXG4gICAgdGhpcy5faW5pdEV2ZW50cygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9zdGFydChldmVudCkge1xuICAgIGlmICghdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFhcbiAgICB9XG4gIH1cblxuICBfZW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYXG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKVxuICB9XG5cbiAgX21vdmUoZXZlbnQpIHtcbiAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAwIDpcbiAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKHRoaXMuX2RlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YVggLyB0aGlzLl9kZWx0YVhcblxuICAgIHRoaXMuX2RlbHRhWCA9IDBcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spXG4gIH1cblxuICBfaW5pdEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IHRoaXMuX21vdmUoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU3dpcGUgZnJvbSAnLi91dGlsL3N3aXBlLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnY2Fyb3VzZWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9IFNFTEVDVE9SX0FDVElWRSArIFNFTEVDVE9SX0lURU1cbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSdcblxuY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgW0FSUk9XX0xFRlRfS0VZXTogRElSRUNUSU9OX1JJR0hULFxuICBbQVJST1dfUklHSFRfS0VZXTogRElSRUNUSU9OX0xFRlRcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgcmlkZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB3cmFwOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLCAvLyBUT0RPOnY2IHJlbW92ZSBib29sZWFuIHN1cHBvcnRcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcmlkZTogJyhib29sZWFufHN0cmluZyknLFxuICB0b3VjaDogJ2Jvb2xlYW4nLFxuICB3cmFwOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbFxuXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yaWRlID09PSBDTEFTU19OQU1FX0NBUk9VU0VMKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIG5leHQoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gIH1cblxuICBjeWNsZSgpIHtcbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMubmV4dFdoZW5WaXNpYmxlKCksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgfVxuXG4gIF9tYXliZUVuYWJsZUN5Y2xlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy5jeWNsZSgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jeWNsZSgpXG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKVxuICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZ2V0QWN0aXZlKCkpXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCBpdGVtc1tpbmRleF0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIuZGlzcG9zZSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSBjb25maWcuaW50ZXJ2YWxcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCAoKSA9PiB0aGlzLnBhdXNlKCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgfVxuXG4gICAgY29uc3QgZW5kQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICBsZWZ0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX0xFRlQpKSxcbiAgICAgIHJpZ2h0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX1JJR0hUKSksXG4gICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICB9XG5cbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZylcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBLRVlfVE9fRElSRUNUSU9OW2V2ZW50LmtleV1cbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpXG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1zKCkuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuXG4gICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgaWYgKG5ld0FjdGl2ZUluZGljYXRvcikge1xuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsXG4gIH1cblxuICBfc2xpZGUob3JkZXIsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZSgpXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcClcblxuICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgZXZlbnROYW1lLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICBmcm9tOiB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCksXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJREUpXG5cbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIC8vIFRPRE86IGNoYW5nZSB0ZXN0cyB0aGF0IHVzZSBlbXB0eSBkaXZzIHRvIGF2b2lkIHRoaXMgY2hlY2tcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5wYXVzZSgpXG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG5cbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgdHJpZ2dlckV2ZW50KEVWRU5UX1NMSUQpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TTElERSlcbiAgfVxuXG4gIF9nZXRBY3RpdmUoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9jbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFRcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVFxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gIGlmIChzbGlkZUluZGV4KSB7XG4gICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG4gICAgY2Fyb3VzZWwubmV4dCgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgY2Fyb3VzZWwucHJldigpXG4gIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpXG5cbiAgZm9yIChjb25zdCBjYXJvdXNlbCBvZiBjYXJvdXNlbHMpIHtcbiAgICBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKGNhcm91c2VsKVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsICJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcImpzL2Jvb3RzdHJhcC9zcmMvY2Fyb3VzZWxcIjtcblxuKCgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuY2Fyb3VzZWxcIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBuZXcgQ2Fyb3VzZWwoZWwpXG4gIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGUsXG4gIGdldEVsZW1lbnQsXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIG5vb3Bcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZHJvcGRvd24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyIC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRU5EID0gJ2Ryb3BlbmQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BTVEFSVCA9ICdkcm9wc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUF9DRU5URVIgPSAnZHJvcHVwLWNlbnRlcidcbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSID0gJ2Ryb3Bkb3duLWNlbnRlcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfS4ke0NMQVNTX05BTUVfU0hPV31gXG5jb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSID0gJy5uYXZiYXInXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9DbG9zZTogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBkaXNwbGF5OiAnZHluYW1pYycsXG4gIG9mZnNldDogWzAsIDJdLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZSdcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgLy8gZHJvcGRvd24gd3JhcHBlclxuICAgIC8vIFRPRE86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICB0aGlzLl9tZW51ID0gU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NRU5VLCB0aGlzLl9wYXJlbnQpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NyZWF0ZVBvcHBlcigpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXRoaXMuX3BhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gc3VwZXIuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiZcbiAgICAgIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIoKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9wYXJlbnRcbiAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKVxuICB9XG5cbiAgX2lzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9wYXJlbnRcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSXG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCB0byB0cmltIHRoZSB2YWx1ZSBiZWNhdXNlIGN1c3RvbSBwcm9wZXJ0aWVzIGNhbiBhbHNvIGluY2x1ZGUgc3BhY2VzXG4gICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnXG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1BcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTVxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUikgIT09IG51bGxcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXkgb3IgRHJvcGRvd24gaXMgaW4gTmF2YmFyXG4gICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpIC8vIFRPRE86IHY2IHJlbW92ZVxuICAgICAgZGVmYXVsdEJzUG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RNZW51SXRlbSh7IGtleSwgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVklTSUJMRV9JVEVNUywgdGhpcy5fbWVudSkuZmlsdGVyKGVsZW1lbnQgPT4gaXNWaXNpYmxlKGVsZW1lbnQpKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoaXRlbXMsIHRhcmdldCwga2V5ID09PSBBUlJPV19ET1dOX0tFWSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Ub2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTilcblxuICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlKVxuICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpXG4gICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgIGlmIChcbiAgICAgICAgY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldClcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IG9yIGV2ZW50cyBmcm9tIGNvbnRhaW5lZCBpbnB1dHMgc2hvdWxkbid0IGNsb3NlIHRoZSBtZW51XG4gICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudCB9XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgYW4gVVAgfCBET1dOIHwgRVNDQVBFIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWEgJiYgaWYga2V5IGlzIG90aGVyIHRoYW4gRVNDQVBFID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcblxuICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVlcbiAgICBjb25zdCBpc1VwT3JEb3duRXZlbnQgPSBbQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuXG4gICAgaWYgKCFpc1VwT3JEb3duRXZlbnQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBUT0RPOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/XG4gICAgICB0aGlzIDpcbiAgICAgIChTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pXG5cbiAgICBpZiAoaXNVcE9yRG93bkV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaW5zdGFuY2Uuc2hvdygpXG4gICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkgeyAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5oaWRlKClcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2JhY2tkcm9wLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBleGVjdXRlLCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLCBnZXRFbGVtZW50LCByZWZsb3cgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUV9YFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIGNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gIGlzQW5pbWF0ZWQ6IGZhbHNlLFxuICBpc1Zpc2libGU6IHRydWUsIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gIHJvb3RFbGVtZW50OiAnYm9keScgLy8gZ2l2ZSB0aGUgY2hvaWNlIHRvIHBsYWNlIGJhY2tkcm9wIHVuZGVyIGRpZmZlcmVudCBlbGVtZW50c1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gIHJvb3RFbGVtZW50OiAnKGVsZW1lbnR8c3RyaW5nKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFja2Ryb3AgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwZW5kKClcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHJlZmxvdyhlbGVtZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzcG9zZSgpXG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pXG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gYmFja2Ryb3BcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gdXNlIGdldEVsZW1lbnQoKSB3aXRoIHRoZSBkZWZhdWx0IFwiYm9keVwiIHRvIGdldCBhIGZyZXNoIEVsZW1lbnQgb24gZWFjaCBpbnN0YW50aWF0aW9uXG4gICAgY29uZmlnLnJvb3RFbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcucm9vdEVsZW1lbnQpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQoZWxlbWVudClcblxuICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCBFVkVOVF9NT1VTRURPV04sICgpID0+IHtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSB0cnVlXG4gIH1cblxuICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2Ryb3BcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgaXNEaXNhYmxlZCB9IGZyb20gJy4vaW5kZXguanMnXG5cbmNvbnN0IGVuYWJsZURpc21pc3NUcmlnZ2VyID0gKGNvbXBvbmVudCwgbWV0aG9kID0gJ2hpZGUnKSA9PiB7XG4gIGNvbnN0IGNsaWNrRXZlbnQgPSBgY2xpY2suZGlzbWlzcyR7Y29tcG9uZW50LkVWRU5UX0tFWX1gXG4gIGNvbnN0IG5hbWUgPSBjb21wb25lbnQuTkFNRVxuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgY2xpY2tFdmVudCwgYFtkYXRhLWJzLWRpc21pc3M9XCIke25hbWV9XCJdYCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpIHx8IHRoaXMuY2xvc2VzdChgLiR7bmFtZX1gKVxuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50LmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gICAgLy8gTWV0aG9kIGFyZ3VtZW50IGlzIGxlZnQsIGZvciBBbGVydCBhbmQgb25seSwgYXMgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlICdoaWRlJyBtZXRob2RcbiAgICBpbnN0YW5jZVttZXRob2RdKClcbiAgfSlcbn1cblxuZXhwb3J0IHtcbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXJcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9mb2N1c3RyYXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZm9jdXN0cmFwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZm9jdXN0cmFwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJ1xuY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b2ZvY3VzOiB0cnVlLFxuICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUZvY3VzaW4oZXZlbnQpKVxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9UQUIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpKVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlXG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0cmFwRWxlbWVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudCB8fCBldmVudC50YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG4gICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2N1c1RyYXBcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0J1xuY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCdcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRXaWR0aCgpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICB0aGlzLl9kaXNhYmxlT3ZlckZsb3coKVxuICAgIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2UgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4pXG4gIH1cblxuICBpc092ZXJmbG93aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFdpZHRoKCkgPiAwXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfVxuXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIC8vIFdlIG9ubHkgd2FudCB0byByZW1vdmUgdGhlIHByb3BlcnR5IGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGA7IHRoZSB2YWx1ZSBjYW4gYWxzbyBiZSB6ZXJvXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3BlcnR5KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBjYWxsQmFjaykge1xuICAgIGlmIChpc0VsZW1lbnQoc2VsZWN0b3IpKSB7XG4gICAgICBjYWxsQmFjayhzZWxlY3RvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VsIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBjYWxsQmFjayhzZWwpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhckhlbHBlclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBvZmZjYW52YXMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL3V0aWwvZm9jdXN0cmFwLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGVcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnb2ZmY2FudmFzJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMub2ZmY2FudmFzJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcbmNvbnN0IENMQVNTX05BTUVfSElESU5HID0gJ2hpZGluZydcbmNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJ1xuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2Nyb2xsOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkuaGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwgfHwgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgdGhpcy5fZWxlbWVudC5ibHVyKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkucmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxiYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgY29uc3QgY2xpY2tDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5oaWRlKClcbiAgICB9XG5cbiAgICAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWVcbiAgICBjb25zdCBpc1Zpc2libGUgPSBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcClcblxuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgY2xhc3NOYW1lOiBDTEFTU19OQU1FX0JBQ0tEUk9QLFxuICAgICAgaXNWaXNpYmxlLFxuICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjbGlja0NhbGxiYWNrOiBpc1Zpc2libGUgPyBjbGlja0NhbGxiYWNrIDogbnVsbFxuICAgIH0pXG4gIH1cblxuICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgdGhpcy5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxyZWFkeU9wZW4gJiYgYWxyZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikpIHtcbiAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShzZWxlY3Rvcikuc2hvdygpXG4gIH1cbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZCgnW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV0nKSkge1xuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KS5oaWRlKClcbiAgICB9XG4gIH1cbn0pXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKE9mZmNhbnZhcylcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsICJpbXBvcnQgXCJqcy9ib290c3RyYXAvc3JjL2Ryb3Bkb3duXCI7XG5pbXBvcnQgXCJqcy9ib290c3RyYXAvc3JjL29mZmNhbnZhc1wiO1xuaW1wb3J0IHBhcmFtcyBmcm9tIFwiQHBhcmFtc1wiO1xuXG4oKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYi1oZWFkZXInKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBjb25zdCBuYXYgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmhiLWhlYWRlci1uYXYnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBpZiAoIWhlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhZG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3NoYWRvdy1zbScpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW1vdmVTaGFkb3cgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGFkb3ctc20nKSAmJiBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnc2hhZG93LXNtJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ29wYWNpdHknKTtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnei1pbmRleCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgbmF2LnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvcE9mZnNldCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSAgbmF2LmNsaWVudEhlaWdodCArIDI0XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7cGFyYW1zLnN0eWxlcy5wcmVmaXh9dG9wLW9mZnNldGAsIHYgKyAncHgnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5oZWFkZXIuc3RpY2t5KSB7XG4gICAgICAgICAgICB0b3BPZmZzZXQoKVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0b3BPZmZzZXQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoID0gMDtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gMjA7XG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICE9PSAwKSB7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJylcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgICAgIHJlbW92ZVNoYWRvdygpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgICAgIHNoYWRvdygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1NzYgJiYgTWF0aC5hYnMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtIGgpID4gdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IGggPyBoaWRlKCkgOiBzaG93KCk7XG4gICAgICAgICAgICAgICAgaCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0pKClcbiIsICJpbXBvcnQgKiBhcyBwYXJhbXMgZnJvbSAnQHBhcmFtcyc7XG5cbigoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVycyA9IHBhcmFtcz8uaGVhZGluZ19zaWduPy5jb250YWluZXJzXG4gICAgICAgIGlmICghY29udGFpbmVycykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIGluIGNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImgyLCBoMywgaDQsIGg1LCBoNlwiKS5mb3JFYWNoKChoZWFkaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBoZWFkaW5nLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgICAgICAgICAgYW5jaG9yLmNsYXNzTmFtZSA9ICdhbmNob3IgbXMtMSdcbiAgICAgICAgICAgICAgICBhbmNob3IuaHJlZiA9IGAjJHtpZH1gXG4gICAgICAgICAgICAgICAgYW5jaG9yLmlubmVyVGV4dCA9ICdcdTAwQTcnXG4gICAgICAgICAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChhbmNob3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn0pKClcbiIsICIvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9qcy9pbmRleC51bWQuanNcblxuICBpbXBvcnQgJ2hiL21vZHVsZXMvc2xpZGUvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJ2hiL21vZHVsZXMvcHJvZ3Jlc3MtYmFyL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICdoYi9tb2R1bGVzL2Jhc2UvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJ2hiL21vZHVsZXMvYm9vdHN0cmFwL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICdoYi9tb2R1bGVzL2RvY3MvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJ2hiL21vZHVsZXMvY2Fyb3VzZWwvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJ2hiL21vZHVsZXMvaGVhZGVyL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICdoYi9tb2R1bGVzL2hlYWRpbmctc2lnbi9qcy9pbmRleC50cyc7XG5cbiAgXG4gIFxuXG5pbXBvcnQgQmlnZ2VyUGljdHVyZSBmcm9tICdtb2RzL2JpZ2dlci1waWN0dXJlL2JpZ2dlci1waWN0dXJlLnVtZC5qcydcbmltcG9ydCBQYW5lbCBmcm9tICdoYi9tb2R1bGVzL2JpZ2dlci1waWN0dXJlL2pzL3BhbmVsJ1xuXG4oKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJwID0gQmlnZ2VyUGljdHVyZSh7XG4gICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LmJvZHksXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcGFuZWwgPSBuZXcgUGFuZWwoYnAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktZG93bmxvYWRiaSBiaS1kb3dubG9hZCBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk0uNSA5LjlhLjUuNSAwIDAgMSAuNS41djIuNWExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF2LTIuNWEuNS41IDAgMCAxIDEgMHYyLjVhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ2LTIuNWEuNS41IDAgMCAxIC41LS41elwiLz5cbiAgPHBhdGggZD1cIk03LjY0NiAxMS44NTRhLjUuNSAwIDAgMCAuNzA4IDBsMy0zYS41LjUgMCAwIDAtLjcwOC0uNzA4TDguNSAxMC4yOTNWMS41YS41LjUgMCAwIDAtMSAwdjguNzkzTDUuMzU0IDguMTQ2YS41LjUgMCAxIDAtLjcwOC43MDhsMyAzelwiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktc2hhcmViaSBiaS1zaGFyZSBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk0xMy41IDFhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTN6TTExIDIuNWEyLjUgMi41IDAgMSAxIC42MDMgMS42MjhsLTYuNzE4IDMuMTJhMi40OTkgMi40OTkgMCAwIDEgMCAxLjUwNGw2LjcxOCAzLjEyYTIuNSAyLjUgMCAxIDEtLjQ4OC44NzZsLTYuNzE4LTMuMTJhMi41IDIuNSAwIDEgMSAwLTMuMjU2bDYuNzE4LTMuMTJBMi41IDIuNSAwIDAgMSAxMSAyLjV6bS04LjUgNGExLjUgMS41IDAgMSAwIDAgMyAxLjUgMS41IDAgMCAwIDAtM3ptMTEgNS41YTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zelwiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktYXJyb3ctY2xvY2t3aXNlYmkgYmktYXJyb3ctY2xvY2t3aXNlIGhpLXN2Zy1pbmxpbmVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMS4yNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMS4yNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDNhNSA1IDAgMSAwIDQuNTQ2IDIuOTE0LjUuNSAwIDAgMSAuOTA4LS40MTdBNiA2IDAgMSAxIDggMnYxelwiLz5cbiAgPHBhdGggZD1cIk04IDQuNDY2Vi41MzRhLjI1LjI1IDAgMCAxIC40MS0uMTkybDIuMzYgMS45NjZjLjEyLjEuMTIuMjg0IDAgLjM4NEw4LjQxIDQuNjU4QS4yNS4yNSAwIDAgMSA4IDQuNDY2elwiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktcGhvbmUtZmxpcGJpIGJpLXBob25lLWZsaXAgaGktc3ZnLWlubGluZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxLjI1ZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExIDFINWExIDEgMCAwIDAtMSAxdjZhLjUuNSAwIDAgMS0xIDBWMmEyIDIgMCAwIDEgMi0yaDZhMiAyIDAgMCAxIDIgMnY2YS41LjUgMCAwIDEtMSAwVjJhMSAxIDAgMCAwLTEtMVptMSAxM2ExIDEgMCAwIDEtMSAxSDVhMSAxIDAgMCAxLTEtMXYtMmEuNS41IDAgMCAwLTEgMHYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi0yYS41LjUgMCAwIDAtMSAwdjJaTTEuNzEzIDcuOTU0YS41LjUgMCAxIDAtLjQxOS0uOTA4Yy0uMzQ3LjE2LS42NTQuMzQ4LS44ODIuNTdDLjE4NCA3Ljg0MiAwIDguMTM5IDAgOC41YzAgLjU0Ni40MDguOTQuODIzIDEuMjAxLjQ0LjI3OCAxLjA0My41MSAxLjc0NS42OTZDMy45NzggMTAuNzczIDUuODk4IDExIDggMTFjLjA5OSAwIC4xOTcgMCAuMjk0LS4wMDJsLTEuMTQ4IDEuMTQ4YS41LjUgMCAwIDAgLjcwOC43MDhsMi0yYS41LjUgMCAwIDAgMC0uNzA4bC0yLTJhLjUuNSAwIDEgMC0uNzA4LjcwOGwxLjE0NSAxLjE0NEw4IDEwYy0yLjA0IDAtMy44Ny0uMjIxLTUuMTc0LS41NjktLjY1Ni0uMTc1LTEuMTUxLS4zNzQtMS40Ny0uNTc1QzEuMDEyIDguNjM5IDEgOC41MDYgMSA4LjVjMC0uMDAzIDAtLjA1OS4xMTItLjE3LjExNS0uMTEyLjMxLS4yNDIuNi0uMzc2Wm0xMi45OTMtLjkwOGEuNS41IDAgMCAwLS40MTkuOTA4Yy4yOTIuMTM0LjQ4Ni4yNjQuNi4zNzcuMTEzLjExLjExMy4xNjYuMTEzLjE2OSAwIC4wMDMgMCAuMDY1LS4xMy4xODctLjEzMi4xMjItLjM1Mi4yNi0uNjc3LjQtLjY0NS4yOC0xLjU5Ni41MjMtMi43NjMuNjg3YS41LjUgMCAwIDAgLjE0Ljk5YzEuMjEyLS4xNyAyLjI2LS40MyAzLjAyLS43NTguMzgtLjE2NC43MTMtLjM1Ny45Ni0uNTg3LjI0Ni0uMjI5LjQ1LS41MzcuNDUtLjkxOSAwLS4zNjItLjE4NC0uNjYtLjQxMi0uODgzLS4yMjgtLjIyMy0uNTM1LS40MTEtLjg4Mi0uNTcxWk03LjUgMmEuNS41IDAgMCAwIDAgMWgxYS41LjUgMCAwIDAgMC0xaC0xWlwiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktcGxheS1jaXJjbGViaSBiaS1wbGF5LWNpcmNsZSBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk04IDE1QTcgNyAwIDEgMSA4IDFhNyA3IDAgMCAxIDAgMTR6bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2elwiLz5cbiAgPHBhdGggZD1cIk02LjI3MSA1LjA1NWEuNS41IDAgMCAxIC41Mi4wMzhsMy41IDIuNWEuNS41IDAgMCAxIDAgLjgxNGwtMy41IDIuNUEuNS41IDAgMCAxIDYgMTAuNXYtNWEuNS41IDAgMCAxIC4yNzEtLjQ0NXpcIi8+XG48L3N2Zz5gKVxuXG4gICAgICAgIGNvbnN0IG9uT3BlbiA9IChjb250YWluZXI6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBwYW5lbC5pbml0KGNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlID0gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHBhbmVsLnVwZGF0ZShjb250YWluZXIsIGl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93ID0gKGltZ3MsIHBvcykgPT4ge1xuICAgICAgICAgICAgYnAub3Blbih7XG4gICAgICAgICAgICAgICAgaXRlbXM6IGltZ3MsXG4gICAgICAgICAgICAgICAgaW50cm86ICdmYWRldXAnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3MsXG4gICAgICAgICAgICAgICAgb25PcGVuOiBvbk9wZW4sXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IG9uVXBkYXRlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSAoaW1nOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGltZzogaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSA/PyBpbWcuc3JjLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSA/PyBpbWcubmF0dXJhbEhlaWdodCxcbiAgICAgICAgICAgICAgICB3aWR0aDogaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpID8/IGltZy5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgYWx0OiBpbWcuZ2V0QXR0cmlidXRlKCdhbHQnKSxcbiAgICAgICAgICAgICAgICBjYXB0aW9uOiBpbWcuZ2V0QXR0cmlidXRlKCdhbHQnKSxcbiAgICAgICAgICAgICAgICB0aHVtYjogaW1nLnNyYyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXG4gICAgICAgIGZvciAoY29uc3QgaW1nIG9mIGltYWdlcykge1xuICAgICAgICAgICAgLy8gaWdub3JlIGxpbmthYmxlIGltYWdlcy5cbiAgICAgICAgICAgIGlmIChpbWcuY2xvc2VzdCgnYScpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZ3M6IEFycmF5PHVua25vd24+ID0gW11cbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gMFxuICAgICAgICAgICAgICAgIGNvbnN0IHNldCA9IGltZy5jbG9zZXN0KCcuYmlnZ2VyLXBpY3R1cmVzJylcbiAgICAgICAgICAgICAgICBpZiAoc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgYSBzZXQgb2YgaW1hZ2VzLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbHMgPSBzZXQucXVlcnlTZWxlY3RvckFsbDxIVE1MSW1hZ2VFbGVtZW50PignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbHNbaV0gPT09IGltZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ3MucHVzaChkYXRhKGVsc1tpXSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWdzLnB1c2goZGF0YShpbWcpKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNob3coaW1ncywgcG9zKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLmltZy1saW5rJykpXG4gICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgc2hvdyhbe1xuICAgICAgICAgICAgICAgICAgICBpbWc6IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyksXG4gICAgICAgICAgICAgICAgICAgIGFsdDogbGluay5pbm5lclRleHQsXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246IGxpbmsuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgIH1dLCAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59KSgpXG5cbiAgXG4gIFxuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2hiL21vZHVsZXMvYmFjay10by10b3AvanMvYnV0dG9uJztcblxuKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBidG4gPSBuZXcgQnV0dG9uKGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktcm9ja2V0YmkgYmktcm9ja2V0IGhpLXN2Zy1pbmxpbmUgaGItYmFjay10by10b3AtaWNvblwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIyZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIyZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJNOCA4Yy44MjggMCAxLjUtLjg5NSAxLjUtMlM4LjgyOCA0IDggNHMtMS41Ljg5NS0xLjUgMlM3LjE3MiA4IDggOFpcIi8+XG4gIDxwYXRoIGQ9XCJNMTEuOTUzIDguODFjLS4xOTUtMy4zODgtLjk2OC01LjUwNy0xLjc3Ny02LjgxOUM5LjcwNyAxLjIzMyA5LjIzLjc1MSA4Ljg1Ny40NTRhMy40OTUgMy40OTUgMCAwIDAtLjQ2My0uMzE1QTIuMTkgMi4xOSAwIDAgMCA4LjI1LjA2NC41NDYuNTQ2IDAgMCAwIDggMGEuNTQ5LjU0OSAwIDAgMC0uMjY2LjA3MyAyLjMxMiAyLjMxMiAwIDAgMC0uMTQyLjA4IDMuNjcgMy42NyAwIDAgMC0uNDU5LjMzYy0uMzcuMzA4LS44NDQuODAzLTEuMzEgMS41Ny0uODA1IDEuMzIyLTEuNTc3IDMuNDMzLTEuNzc0IDYuNzU2bC0xLjQ5NyAxLjgyNi0uMDA0LjAwNUEyLjUgMi41IDAgMCAwIDIgMTIuMjAyVjE1LjVhLjUuNSAwIDAgMCAuOS4zbDEuMTI1LTEuNWMuMTY2LS4yMjIuNDItLjQuNzUyLS41Ny4yMTQtLjEwOC40MTQtLjE5Mi42MjUtLjI4MWwuMTk4LS4wODRjLjcuNDI4IDEuNTUuNjM1IDIuNC42MzUuODUgMCAxLjctLjIwNyAyLjQtLjYzNS4wNjcuMDMuMTMyLjA1Ni4xOTYuMDgzLjIxMy4wOS40MTMuMTc0LjYyNy4yODIuMzMyLjE3LjU4Ni4zNDguNzUyLjU3bDEuMTI1IDEuNWEuNS41IDAgMCAwIC45LS4zdi0zLjI5OGEyLjUgMi41IDAgMCAwLS41NDgtMS41NjJsLTEuNDk5LTEuODNaTTEyIDEwLjQ0NXYuMDU1YzAgLjg2Ni0uMjg0IDEuNTg1LS43NSAyLjE0LjE0Ni4wNjQuMjkyLjEzLjQyNS4xOTkuMzkuMTk3LjguNDYgMS4xLjg2TDEzIDE0di0xLjc5OGExLjUgMS41IDAgMCAwLS4zMjctLjkzNUwxMiAxMC40NDVaTTQuNzUgMTIuNjRDNC4yODQgMTIuMDg1IDQgMTEuMzY2IDQgMTAuNXYtLjA1NGwtLjY3My44MmExLjUgMS41IDAgMCAwLS4zMjcuOTM2VjE0bC4yMjUtLjNjLjMtLjQuNzEtLjY2NCAxLjEtLjg2MS4xMzMtLjA2OC4yNzktLjEzNS40MjUtLjE5OVpNOC4wMDkgMS4wNzNjLjA2My4wNC4xNC4wOTQuMjI2LjE2My4yODQuMjI2LjY4My42MjEgMS4wOSAxLjI4QzEwLjEzNyAzLjgzNiAxMSA2LjIzNyAxMSAxMC41YzAgLjg1OC0uMzc0IDEuNDgtLjk0MyAxLjg5M0M5LjUxNyAxMi43ODYgOC43ODEgMTMgOCAxM2MtLjc4MSAwLTEuNTE3LS4yMTQtMi4wNTctLjYwN0M1LjM3MyAxMS45NzkgNSAxMS4zNTggNSAxMC41YzAtNC4xODIuODYtNi41ODYgMS42NzctNy45MjguNDA5LS42Ny44MS0xLjA4MiAxLjA5Ni0xLjMyLjA5LS4wNzYuMTctLjEzNS4yMzYtLjE4WlwiLz5cbiAgPHBhdGggZD1cIk05LjQ3OSAxNC4zNjFjLS40OC4wOTMtLjk4LjEzOS0xLjQ3OS4xMzktLjUgMC0uOTk5LS4wNDYtMS40NzktLjEzOUw3LjYgMTUuOGEuNS41IDAgMCAwIC44IDBsMS4wNzktMS40MzlaXCIvPlxuPC9zdmc+YClcbiAgICB9KVxufSkoKTtcbiIsICJpbXBvcnQge2RlZmF1bHQgYXMgcGFyYW1zfSBmcm9tICdAcGFyYW1zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYnAsXG4gICAgICAgIHByaXZhdGUgZG93bmxvYWRJY29uOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgc2hhcmVJY29uOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgcm90YXRlSWNvbjogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIGZsaXBJY29uOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgcGxheUljb246IHN0cmluZyxcbiAgICApIHtcblxuICAgIH1cblxuICAgIGluaXQoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdicC1wYW5lbCcsICdkLWZsZXgnLCAncG9zaXRpb24tYWJzb2x1dGUnLCAnbXgtYXV0bycsICdzdGFydC0wJywgJ2VuZC0wJywgJ3RleHQtY2VudGVyJylcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLnJvdGF0ZShmYWxzZSkpXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGhpcy5yb3RhdGUodHJ1ZSkpXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGhpcy5mbGlwKCkpXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGhpcy5wbGF5KCkpXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGhpcy5kb3dubG9hZCgpKVxuICAgICAgICBwLmFwcGVuZENoaWxkKHRoaXMuc2hhcmUoKSlcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHApXG4gICAgfVxuXG4gICAgdXBkYXRlKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGl0ZW0pIHtcbiAgICAgICAgY29uc3QgcCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnAtcGFuZWwnKSBhcyBIVE1MRWxlbWVudFxuXG4gICAgICAgIC8vIHVwZGF0ZSBkb3dubG9hZCBsaW5rLlxuICAgICAgICBjb25zdCBkID0gcC5xdWVyeVNlbGVjdG9yKCcuYnAtcGFuZWwtZG93bmxvYWQnKSBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgICAgICBkLmhyZWYgPSBpdGVtLmltZ1xuICAgICAgICBkLmRvd25sb2FkID0gaXRlbS5hbHRcbiAgICB9XG5cbiAgICBpbWdXcmFwID0gKCk6IEhUTUxFbGVtZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5icC1pbWctd3JhcCcpIGFzIEhUTUxFbGVtZW50XG4gICAgfVxuXG4gICAgcm90YXRlID0gKGNsb2Nrd2lzZSA9IGZhbHNlKTogSFRNTEFuY2hvckVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGEudGl0bGUgPSAnUm90YXRlJ1xuICAgICAgICBhLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdicC1wYW5lbC1yb3RhdGUnLCBjbG9ja3dpc2UgPyAnYnAtcGFuZWwtcm90YXRlLWNsb2Nrd2lzZScgOiAnYnAtcGFuZWwtcm90YXRlLWFudGljbG9ja3dpc2UnLCAndGV4dC1kZWNvcmF0aW9uLW5vbmUnLCAncC0yJylcbiAgICAgICAgYS5pbm5lckhUTUwgPSB0aGlzLnJvdGF0ZUljb25cbiAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXAgPSB0aGlzLmltZ1dyYXAoKVxuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQod3JhcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlJykgPz8gJzAnKVxuICAgICAgICAgICAgdmFsdWUgKz0gY2xvY2t3aXNlID8gOTAgOiAtOTBcbiAgICAgICAgICAgIHdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZScsIHZhbHVlLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh3cmFwKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYVxuICAgIH1cblxuICAgIGZsaXAgPSAoKTogSFRNTEFuY2hvckVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGEudGl0bGUgPSAnRmxpcCdcbiAgICAgICAgYS5yb2xlID0gJ2J1dHRvbidcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKCdicC1wYW5lbC1hY3Rpb24nLCAnYnAtcGFuZWwtZmxpcCcsICd0ZXh0LWRlY29yYXRpb24tbm9uZScsICdwLTInKVxuICAgICAgICBhLmlubmVySFRNTCA9IHRoaXMuZmxpcEljb25cbiAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXAgPSB0aGlzLmltZ1dyYXAoKVxuICAgICAgICAgICAgaWYgKHdyYXAuaGFzQXR0cmlidXRlKCdkYXRhLWZsaXAnKSkge1xuICAgICAgICAgICAgICAgIHdyYXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZsaXAnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3cmFwLnNldEF0dHJpYnV0ZSgnZGF0YS1mbGlwJywgJ3RydWUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0od3JhcClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyYW5zZm9ybSA9ICh3cmFwOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm06IEFycmF5PHN0cmluZz4gPSBbXVxuXG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IHdyYXAuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZScpXG4gICAgICAgIGlmIChyb3RhdGUpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS5wdXNoKGByb3RhdGUoJHtwYXJzZUludChyb3RhdGUpfWRlZylgKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmxpcCA9IHdyYXAuZ2V0QXR0cmlidXRlKCdkYXRhLWZsaXAnKVxuICAgICAgICBpZiAoZmxpcCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLnB1c2goJ3NjYWxlWCgtMSknKVxuICAgICAgICB9XG5cbiAgICAgICAgd3JhcC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm0uam9pbihcIiBcIilcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlKb2IgPSAwXG5cbiAgICBwcml2YXRlIHBsYXlJbnRlcnZhbCA9IDEwMDBcblxuICAgIHBsYXkgPSAoKTogSFRNTEFuY2hvckVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGEudGl0bGUgPSAnUGxheSdcbiAgICAgICAgYS5yb2xlID0gJ2J1dHRvbidcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKCdicC1wYW5lbC1hY3Rpb24nLCAnYnAtcGFuZWwtcGxheScsICd0ZXh0LWRlY29yYXRpb24tbm9uZScsICdwLTInKVxuICAgICAgICBhLmlubmVySFRNTCA9IHRoaXMucGxheUljb25cbiAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXlKb2IpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucGxheUpvYilcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlKb2IgPSAwXG4gICAgICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB0aGlzLnBsYXlKb2IgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5icC5uZXh0KClcbiAgICAgICAgICAgIH0sIHBhcmFtcy5iaWdnZXJfcGljdHVyZS5wbGF5X2ludGVydmFsID8/IDUwMDApXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuXG4gICAgZG93bmxvYWQgPSAoKTogSFRNTEFuY2hvckVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgIGEudGl0bGUgPSAnRG93bmxvYWQnXG4gICAgICAgIGEucm9sZSA9ICdidXR0b24nXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYnAtcGFuZWwtYWN0aW9uJywgJ2JwLXBhbmVsLWRvd25sb2FkJywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJywgJ3AtMicpXG4gICAgICAgIGEuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICcnKVxuICAgICAgICBhLmlubmVySFRNTCA9IHRoaXMuZG93bmxvYWRJY29uXG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuXG4gICAgdHdpdHRlclNoYXJlTGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9JHt0aGlzLnNoYXJlTGluaygpfWBcbiAgICB9XG5cbiAgICBmYWNlYm9va1NoYXJlTGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT0ke3RoaXMuc2hhcmVMaW5rKCl9YFxuICAgIH1cblxuICAgIHNoYXJlTGluayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICB9XG5cbiAgICBzaGFyZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdicC1wYW5lbC1hY3Rpb24nLCAnZHJvcGRvd24tY2VudGVyJywgJ2JwLXBhbmVsLXNoYXJlJywgJ3AtMicpXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGA8YSBjbGFzcz1cInRleHQtd2hpdGVcIiBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiB0aXRsZT1cIlNoYXJlXCIgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPiR7dGhpcy5zaGFyZUljb259PC9hPlxuICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt0aGlzLnR3aXR0ZXJTaGFyZUxpbmsoKX1cIj5Ud2l0dGVyPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7dGhpcy5mYWNlYm9va1NoYXJlTGluaygpfVwiPkZhY2Vib29rPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5gXG4gICAgICAgIHJldHVybiBlbFxuICAgIH1cbn1cbiIsICJpbXBvcnQgKiBhcyBwYXJhbXMgZnJvbSBcIkBwYXJhbXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIHtcbiAgICBwcml2YXRlIGJ0bjogSFRNTEJ1dHRvbkVsZW1lbnRcblxuICAgIGNvbnN0cnVjdG9yKGljb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidG4uY2xhc3NOYW1lID0gJ2hiLWJhY2stdG8tdG9wJ1xuICAgICAgICBidG4uYXJpYUxhYmVsID0gJ0JhY2sgdG8gdG9wJ1xuICAgICAgICBidG4uaW5uZXJIVE1MID0gaWNvblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ0bilcbiAgICAgICAgdGhpcy5idG4gPSBidG5cblxuICAgICAgICBsZXQgeSA9IDBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwIHx8IHRvcCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKCkgJiYgdG9wID4geSkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSA9IHRvcFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uKCkgJiYgYnRuLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycpXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5idG4uY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5idG4uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgfVxuXG4gICAgYW5pbWF0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcGFyYW1zPy5iYWNrX3RvX3RvcD8uYW5pbWF0aW9uICE9PSBmYWxzZVxuICAgIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBTUEsYUFBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBRTVELGVBQVMsVUFBVSxNQUFNO0FBQ3ZCLFlBQUksUUFBUSxNQUFNO0FBQ2hCLGlCQUFPO0FBQUEsUUFDVDtBQUVBLFlBQUksS0FBSyxTQUFTLE1BQU0sbUJBQW1CO0FBQ3pDLGNBQUksZ0JBQWdCLEtBQUs7QUFDekIsaUJBQU8sZ0JBQWdCLGNBQWMsZUFBZSxTQUFTO0FBQUEsUUFDL0Q7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QU9ILEdBQUMsTUFBTTtBQUNIO0FBRUEsV0FBTyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDOUMsWUFBTSxNQUFNLElBQUksT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSXhCO0FBQUEsSUFDSCxDQUFDO0FBQUEsRUFDTCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpc0VsZW1lbnQiLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJ3aW5kb3ciLCAic2VsZiIsICJtZXJnZWQiLCAiY2xpcHBpbmdQYXJlbnRzIiwgInJlZmVyZW5jZSIsICJwb3BwZXJPZmZzZXRzIiwgIm9mZnNldCIsICJkZWZhdWx0TW9kaWZpZXJzIiwgImNyZWF0ZVBvcHBlciIsICJwb3BwZXIiLCAib3B0aW9ucyIsICJzdGF0ZSIsICJlZmZlY3QiLCAibm9vcEZuIiwgIm5hbWUiLCAic3R5bGUiLCAicGxhY2VtZW50IiwgInBsYWNlbWVudHMiLCAiX2xvb3AiLCAiX2kiLCAiY2hlY2tzIiwgIm1pbiIsICJtYXgiLCAidG9QYWRkaW5nT2JqZWN0IiwgIm5vb3AiLCAibm93IiwgImVsZW1lbnQiLCAiZGV0YWNoIiwgImluc3RhbmNlIiwgImNyZWF0ZV9mcmFnbWVudCIsICJub3RfZXF1YWwiLCAidXBkYXRlIiwgInN1YnNjcmliZSIsICJydW4iLCAiY3R4IiwgIiQkcHJvcHMiLCAiY2FsbGJhY2siLCAiZm4iLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiRVZFTlRfSElERSIsICJFVkVOVF9ISURERU4iLCAiRVZFTlRfU0hPVyIsICJFVkVOVF9TSE9XTiIsICJFVkVOVF9DTElDS19EQVRBX0FQSSIsICJDTEFTU19OQU1FX1NIT1ciLCAiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCAiZWxlbWVudCIsICJOQU1FIiwgIkVWRU5UX0tFWSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJBUlJPV19MRUZUX0tFWSIsICJBUlJPV19SSUdIVF9LRVkiLCAiRVZFTlRfS0VZRE9XTiIsICJFVkVOVF9MT0FEX0RBVEFfQVBJIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIkNMQVNTX05BTUVfQUNUSVZFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiREFUQV9BUElfS0VZIiwgIkFSUk9XX1VQX0tFWSIsICJBUlJPV19ET1dOX0tFWSIsICJFVkVOVF9ISURFIiwgIkVWRU5UX0hJRERFTiIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIkNMQVNTX05BTUVfU0hPVyIsICJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiQ0xBU1NfTkFNRV9GQURFIiwgIkNMQVNTX05BTUVfU0hPVyIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIlRBQl9LRVkiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJEQVRBX0FQSV9LRVkiLCAiRVZFTlRfTE9BRF9EQVRBX0FQSSIsICJFU0NBUEVfS0VZIiwgIkNMQVNTX05BTUVfU0hPVyIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0hJREUiLCAiRVZFTlRfSElEREVOIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiaXNWaXNpYmxlIiwgImhlYWRlciIsICJCaWdnZXJQaWN0dXJlIl0KfQo=

;
(() => {
  // ns-params:@params
  var params_default = { defaultLang: "en", i18n: { en: { copied: { other: "Copied!" }, copy_failed: { other: "Copy failed!" } } }, icons: { copy: '<svg aria-hidden="true" class="bi bi-clipboardbi bi-clipboard hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>\n  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>\n</svg>', expand: '<svg aria-hidden="true" class="bi bi-chevron-expandbi bi-chevron-expand hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>\n</svg>', ln: '<svg aria-hidden="true" class="bi bi-list-olbi bi-list-ol hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>\n  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>\n</svg>', wrap: '<svg aria-hidden="true" class="bi bi-text-wrapbi bi-text-wrap hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h9a2.5 2.5 0 0 1 0 5h-1.293l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.647.646H11.5a1.5 1.5 0 0 0 0-3h-9a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Z"/>\n</svg>' }, line_nos: true, max_lines: 10, wrap: false };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/snackbar@v0.1.2/assets/mods/snackbar/js/index.ts
  var Snackbar = class {
    container;
    constructor() {
      this.container = document.createElement("div");
      this.container.className = "snackbars";
      document.body.appendChild(this.container);
    }
    add(text, duration = 2e3) {
      const msg = document.createElement("div");
      msg.className = "snackbar";
      msg.innerText = text;
      this.container.appendChild(msg);
      setTimeout(() => {
        msg.remove();
      }, duration);
    }
  };
  var snackbar = new Snackbar();
  var js_default = snackbar;

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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.2.0/assets/mods/code-block-panel/js/i18n.ts
  var i18n = new Translator(params_default.i18n, params_default.defaultLang);
  var i18n_default = i18n;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.2.0/assets/mods/code-block-panel/js/panel.ts
  var Panel = class {
    constructor(code) {
      this.code = code;
    }
    pre;
    wrapper;
    ele;
    init() {
      if (!params_default.line_nos) {
        this.code.classList.add("code-no-ln");
      }
      if (params_default.wrap) {
        this.code.classList.add("code-wrap");
      }
      this.pre = this.code.parentElement;
      this.ele = document.createElement("div");
      this.ele.className = "code-block-panel";
      this.wrapper = document.createElement("div");
      this.wrapper.className = "code-block-panel-wrapper";
      this.wrapper.appendChild(this.ele);
      this.maxLines();
      this.language();
      this.lineNoButton();
      this.wrapButton();
      this.expandButton();
      this.copyButton();
      this.pre.appendChild(this.wrapper);
    }
    // Returns the lines of code block.
    lines() {
      return Array.from(this.code.querySelectorAll(":scope > span"));
    }
    maxHeight;
    maxLines() {
      const lines = this.lines();
      if (params_default.max_lines > 0 && lines.length > params_default.max_lines) {
        const offsetTop = lines[params_default.max_lines - 1].offsetTop;
        if (offsetTop > 0) {
          this.pre.style.maxHeight = this.maxHeight = offsetTop + "px";
        }
      }
    }
    // Show the code language.
    language() {
      const lang = this.code.getAttribute("data-lang");
      if (!lang || lang === "fallback") {
        return;
      }
      const e = document.createElement("span");
      e.className = "code-block-lang";
      e.innerText = lang;
      this.pre.appendChild(e);
    }
    button(name, callback) {
      const btn = document.createElement("button");
      btn.className = "code-block-action code-block-action-" + name;
      btn.innerHTML = params_default.icons[name];
      btn.addEventListener("click", () => {
        callback();
      });
      return btn;
    }
    copyButton() {
      const btn = this.button("copy", () => {
        this.copy();
      });
      this.ele.appendChild(btn);
    }
    copy() {
      const clone = this.code.cloneNode(true);
      clone.querySelectorAll(".ln, :scope > span > span:first-child").forEach((ln) => {
        ln.remove();
      });
      navigator.clipboard.writeText(clone.innerText).then(() => {
        js_default.add(i18n_default.translate("copied", null, "Copied!"));
      }).catch((err) => {
        js_default.add(i18n_default.translate("copy_failed", null, "Copy failed."));
        console.error(err);
      });
    }
    wrapButton() {
      const btn = this.button("wrap", () => {
        this.toggleClass("code-wrap");
      });
      this.ele.appendChild(btn);
    }
    toggleClass(className) {
      if (this.code.classList.contains(className)) {
        this.code.classList.remove(className);
        return;
      }
      this.code.classList.add(className);
    }
    lineNoButton() {
      const btn = this.button("ln", () => {
        this.toggleClass("code-no-ln");
      });
      this.ele.appendChild(btn);
    }
    expandButton() {
      const btn = this.button("expand", () => {
        this.expand();
      });
      this.ele.appendChild(btn);
    }
    expand() {
      if (!this.pre.style.maxHeight && !this.maxHeight) {
        return;
      }
      if (this.pre.style.maxHeight) {
        this.pre.style.maxHeight = "";
        return;
      }
      this.pre.style.maxHeight = this.maxHeight;
    }
  };

  // <stdin>
  (() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("pre code").forEach((code) => {
        new Panel(code).init();
      });
    });
  })();
})();
