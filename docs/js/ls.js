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
            if (_ret === "break") break;
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.17/dist/bigger-picture.umd.js
  var require_bigger_picture_umd = __commonJS({
    "ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.17/dist/bigger-picture.umd.js"(exports, module) {
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
        const getThumbBackground = (activeItem) => !activeItem.thumb || `url(${activeItem.thumb})`;
        const addAttributes = (node, obj) => {
          if (!obj) {
            return;
          }
          if (typeof obj === "string") {
            obj = JSON.parse(obj);
          }
          for (const key in obj) {
            node.setAttribute(key, obj[key]);
          }
        };
        function create_if_block_1$2(ctx) {
          let div;
          let div_outro;
          let current;
          return {
            c() {
              div = element("div");
              div.innerHTML = `<span class="bp-bar"></span><span class="bp-o"></span>`;
              attr(div, "class", "bp-load");
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[0]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              if (dirty & /*activeItem*/
              1) {
                set_style(div, "background-image", getThumbBackground(
                  /*activeItem*/
                  ctx2[0]
                ));
              }
            },
            i(local) {
              if (current) return;
              if (div_outro) div_outro.end(1);
              current = true;
            },
            o(local) {
              if (local) {
                div_outro = create_out_transition(div, fly, { duration: 480 });
              }
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div);
              if (detaching && div_outro) div_outro.end();
            }
          };
        }
        function create_if_block$2(ctx) {
          let div;
          let div_intro;
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-load");
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[0]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
            },
            p(ctx2, dirty) {
              if (dirty & /*activeItem*/
              1) {
                set_style(div, "background-image", getThumbBackground(
                  /*activeItem*/
                  ctx2[0]
                ));
              }
            },
            i(local) {
              if (!div_intro) {
                add_render_callback(() => {
                  div_intro = create_in_transition(div, fly, { duration: 480 });
                  div_intro.start();
                });
              }
            },
            o: noop2,
            d(detaching) {
              if (detaching) detach(div);
            }
          };
        }
        function create_fragment$4(ctx) {
          let if_block0_anchor;
          let if_block1_anchor;
          let if_block0 = !/*loaded*/
          ctx[1] && create_if_block_1$2(ctx);
          let if_block1 = (
            /*$closing*/
            ctx[2] && create_if_block$2(ctx)
          );
          return {
            c() {
              if (if_block0) if_block0.c();
              if_block0_anchor = empty();
              if (if_block1) if_block1.c();
              if_block1_anchor = empty();
            },
            m(target, anchor) {
              if (if_block0) if_block0.m(target, anchor);
              insert(target, if_block0_anchor, anchor);
              if (if_block1) if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
            },
            p(ctx2, [dirty]) {
              if (!/*loaded*/
              ctx2[1]) {
                if (if_block0) {
                  if_block0.p(ctx2, dirty);
                  if (dirty & /*loaded*/
                  2) {
                    transition_in(if_block0, 1);
                  }
                } else {
                  if_block0 = create_if_block_1$2(ctx2);
                  if_block0.c();
                  transition_in(if_block0, 1);
                  if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
                }
              } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, () => {
                  if_block0 = null;
                });
                check_outros();
              }
              if (
                /*$closing*/
                ctx2[2]
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty & /*$closing*/
                  4) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block$2(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
              } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
              }
            },
            i(local) {
              transition_in(if_block0);
              transition_in(if_block1);
            },
            o(local) {
              transition_out(if_block0);
            },
            d(detaching) {
              if (if_block0) if_block0.d(detaching);
              if (detaching) detach(if_block0_anchor);
              if (if_block1) if_block1.d(detaching);
              if (detaching) detach(if_block1_anchor);
            }
          };
        }
        function instance$4($$self, $$props, $$invalidate) {
          let $closing;
          component_subscribe($$self, closing, ($$value) => $$invalidate(2, $closing = $$value));
          let { activeItem } = $$props;
          let { loaded } = $$props;
          $$self.$$set = ($$props2) => {
            if ("activeItem" in $$props2) $$invalidate(0, activeItem = $$props2.activeItem);
            if ("loaded" in $$props2) $$invalidate(1, loaded = $$props2.loaded);
          };
          return [activeItem, loaded, $closing];
        }
        class Loading extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$4, create_fragment$4, not_equal, { activeItem: 0, loaded: 1 });
          }
        }
        function create_if_block_1$1(ctx) {
          let img;
          let img_sizes_value;
          let img_outro;
          let current;
          let mounted;
          let dispose;
          return {
            c() {
              img = element("img");
              attr(img, "sizes", img_sizes_value = /*opts*/
              ctx[8].sizes || `${/*sizes*/
              ctx[1]}px`);
              attr(
                img,
                "alt",
                /*activeItem*/
                ctx[7].alt
              );
            },
            m(target, anchor) {
              insert(target, img, anchor);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*addSrc*/
                    ctx[21].call(null, img)
                  ),
                  listen(
                    img,
                    "error",
                    /*error_handler*/
                    ctx[27]
                  )
                ];
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
              if (current) return;
              if (img_outro) img_outro.end(1);
              current = true;
            },
            o(local) {
              img_outro = create_out_transition(img, fly, {});
              current = false;
            },
            d(detaching) {
              if (detaching) detach(img);
              if (detaching && img_outro) img_outro.end();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_if_block$1(ctx) {
          let loading;
          let current;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[7]
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
              4) loading_changes.loaded = /*loaded*/
              ctx2[2];
              loading.$set(loading_changes);
            },
            i(local) {
              if (current) return;
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
          let style_transform = `translate3d(${/*$imageDimensions*/
          ctx[0][0] / -2 + /*$zoomDragTranslate*/
          ctx[6][0]}px, ${/*$imageDimensions*/
          ctx[0][1] / -2 + /*$zoomDragTranslate*/
          ctx[6][1]}px, 0)`;
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
              if (if_block0) if_block0.c();
              if_block0_anchor = empty();
              if (if_block1) if_block1.c();
              attr(div0, "class", "bp-img");
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
              set_style(div0, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[7]
              ));
              set_style(div0, "transform", style_transform);
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
              if (if_block0) if_block0.m(div0, null);
              append(div0, if_block0_anchor);
              if (if_block1) if_block1.m(div0, null);
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
              if (!current || dirty[0] & /*pointerDown*/
              16) {
                toggle_class(
                  div0,
                  "bp-drag",
                  /*pointerDown*/
                  ctx2[4]
                );
              }
              if (!current || dirty[0] & /*maxZoom, $imageDimensions, naturalWidth*/
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
              if (dirty[0] & /*$imageDimensions, $zoomDragTranslate*/
              65 && style_transform !== (style_transform = `translate3d(${/*$imageDimensions*/
              ctx2[0][0] / -2 + /*$zoomDragTranslate*/
              ctx2[6][0]}px, ${/*$imageDimensions*/
              ctx2[0][1] / -2 + /*$zoomDragTranslate*/
              ctx2[6][1]}px, 0)`)) {
                set_style(div0, "transform", style_transform);
              }
              if (!current || dirty[0] & /*closingWhileZoomed*/
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
              if (current) return;
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
              if (detaching) detach(div1);
              if (if_block0) if_block0.d();
              if (if_block1) if_block1.d();
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
          component_subscribe($$self, closing, ($$value) => $$invalidate(26, $closing = $$value));
          let { props } = $$props;
          let { smallScreen } = $$props;
          let { activeItem, opts, prev, next, zoomed, container } = props;
          component_subscribe($$self, zoomed, (value) => $$invalidate(25, $zoomed = value));
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
              $$invalidate(24, calculatedDimensions = props.calculateDimensions(activeItem));
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
          const addSrc = (node) => {
            addAttributes(node, activeItem.attr);
            node.srcset = activeItem.img;
          };
          const error_handler = (error) => opts.onError?.(container, activeItem, error);
          $$self.$$set = ($$props2) => {
            if ("smallScreen" in $$props2) $$invalidate(23, smallScreen = $$props2.smallScreen);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*$imageDimensions, calculatedDimensions*/
            16777217) {
              zoomed.set($imageDimensions[0] - 10 > calculatedDimensions[0]);
            }
            if ($$self.$$.dirty[0] & /*$closing, $zoomed, calculatedDimensions*/
            117440512) {
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
            addSrc,
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
            init(this, options, instance$3, create_fragment$3, not_equal, { props: 22, smallScreen: 23 }, null, [-1, -1]);
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
              activeItem: (
                /*activeItem*/
                ctx[2]
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
              1) loading_changes.loaded = /*loaded*/
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
              if (current) return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div);
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
          const addSrc = (node) => {
            addAttributes(node, activeItem.attr);
            node.src = activeItem.iframe;
          };
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
              activeItem: (
                /*activeItem*/
                ctx[2]
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
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[2]
              ));
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
              1) loading_changes.loaded = /*loaded*/
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
              if (current) return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div);
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
          const onMount = (node) => {
            let mediaElement;
            const appendToVideo = (tag, arr) => {
              if (!Array.isArray(arr)) {
                arr = JSON.parse(arr);
              }
              for (const obj of arr) {
                if (!mediaElement) {
                  mediaElement = document.createElement(obj.type?.includes("audio") ? "audio" : "video");
                  addAttributes(mediaElement, {
                    controls: true,
                    autoplay: true,
                    playsinline: true,
                    tabindex: "0"
                  });
                  addAttributes(mediaElement, activeItem.attr);
                }
                const el = document.createElement(tag);
                addAttributes(el, obj);
                if (tag == "source") {
                  el.onError = (error) => opts.onError?.(container, activeItem, error);
                }
                mediaElement.append(el);
              }
            };
            appendToVideo("source", activeItem.sources);
            appendToVideo("track", activeItem.tracks || []);
            mediaElement.oncanplay = () => $$invalidate(0, loaded = true);
            node.append(mediaElement);
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
              if (if_block) if_block.c();
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
              if (if_block) if_block.m(div1, null);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    button,
                    "click",
                    /*close*/
                    ctx[1]
                  ),
                  action_destroyer(
                    /*containerActions*/
                    ctx[14].call(null, div2)
                  )
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
                transition_in(key_block, 1);
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
              if (!current || dirty[0] & /*$zoomed*/
              1024) {
                toggle_class(
                  div2,
                  "bp-zoomed",
                  /*$zoomed*/
                  ctx2[10]
                );
              }
              if (!current || dirty[0] & /*inline*/
              256) {
                toggle_class(
                  div2,
                  "bp-inline",
                  /*inline*/
                  ctx2[8]
                );
              }
              if (!current || dirty[0] & /*smallScreen*/
              128) {
                toggle_class(
                  div2,
                  "bp-small",
                  /*smallScreen*/
                  ctx2[7]
                );
              }
              if (!current || dirty[0] & /*opts*/
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
              if (current) return;
              if (div0_outro) div0_outro.end(1);
              transition_in(key_block);
              if (div1_outro) div1_outro.end(1);
              current = true;
            },
            o(local) {
              if (local) {
                div0_outro = create_out_transition(div0, fly, { duration: 480 });
              }
              transition_out(key_block);
              if (local) {
                div1_outro = create_out_transition(div1, fly, {});
              }
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div2);
              if (detaching && div0_outro) div0_outro.end();
              key_block.d(detaching);
              if (if_block) if_block.d();
              if (detaching && div1_outro) div1_outro.end();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_else_block(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            (ctx[6].html ?? /*activeItem*/
            ctx[6].element.outerHTML) + ""
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
              (ctx2[6].html ?? /*activeItem*/
              ctx2[6].element.outerHTML) + "")) div.innerHTML = raw_value;
            },
            i: noop2,
            o: noop2,
            d(detaching) {
              if (detaching) detach(div);
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
              if (current) return;
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
              if (current) return;
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
              128) imageitem_changes.smallScreen = /*smallScreen*/
              ctx2[7];
              imageitem.$set(imageitem_changes);
            },
            i(local) {
              if (current) return;
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
              ctx2[6].caption + "")) div.innerHTML = raw_value;
            },
            i(local) {
              if (current) return;
              if (div_outro) div_outro.end(1);
              current = true;
            },
            o(local) {
              div_outro = create_out_transition(div, fly, { duration: 200 });
              current = false;
            },
            d(detaching) {
              if (detaching) detach(div);
              if (detaching && div_outro) div_outro.end();
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
            ) return 0;
            if (
              /*activeItem*/
              ctx2[6].sources
            ) return 1;
            if (
              /*activeItem*/
              ctx2[6].iframe
            ) return 2;
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
              if (if_block1) if_block1.c();
              if_block1_anchor = empty();
              attr(div, "class", "bp-inner");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              if_blocks[current_block_type_index].m(div, null);
              if (if_block1) if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    div,
                    "pointerdown",
                    /*pointerdown_handler*/
                    ctx[20]
                  ),
                  listen(
                    div,
                    "pointerup",
                    /*pointerup_handler*/
                    ctx[21]
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
              if (current) return;
              transition_in(if_block0);
              add_render_callback(() => {
                if (div_outro) div_outro.end(1);
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
              if (div_intro) div_intro.invalidate();
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
              if (detaching) detach(div);
              if_blocks[current_block_type_index].d();
              if (detaching && div_outro) div_outro.end();
              if (if_block1) if_block1.d(detaching);
              if (detaching) detach(if_block1_anchor);
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
              ctx2[0].length}`)) div.innerHTML = raw_value;
            },
            d(detaching) {
              if (detaching) detach(div);
              if (detaching) detach(button0);
              if (detaching) detach(button1);
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
              if (if_block) if_block.c();
              if_block_anchor = empty();
            },
            m(target, anchor) {
              if (if_block) if_block.m(target, anchor);
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
              if (current) return;
              transition_in(if_block);
              current = true;
            },
            o(local) {
              transition_out(if_block);
              current = false;
            },
            d(detaching) {
              if (if_block) if_block.d(detaching);
              if (detaching) detach(if_block_anchor);
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
          const activeItemIsHtml = () => !activeItem.img && !activeItem.sources && !activeItem.iframe;
          let resizeFunc;
          const setResizeFunc = (fn) => resizeFunc = fn;
          const container = {};
          const zoomed = writable(0);
          component_subscribe($$self, zoomed, (value) => $$invalidate(10, $zoomed = value));
          const open = (options) => {
            $$invalidate(5, opts = options);
            $$invalidate(8, inline = opts.inline);
            if (!inline && html.scrollHeight > html.clientHeight) {
              html.classList.add("bp-lock");
            }
            focusTrigger = document.activeElement;
            $$invalidate(19, container.w = target.offsetWidth, container);
            $$invalidate(
              19,
              container.h = target === document.body ? globalThis.innerHeight : target.clientHeight,
              container
            );
            $$invalidate(7, smallScreen = container.w < 769);
            $$invalidate(4, position = opts.position || 0);
            $$invalidate(0, items = []);
            for (let i = 0; i < (opts.items.length || 1); i++) {
              let item = opts.items[i] || opts.items;
              if ("dataset" in item) {
                items.push({ element: item, i, ...item.dataset });
              } else {
                item.i = i;
                items.push(item);
                item = item.element;
              }
              if (opts.el && opts.el === item) {
                $$invalidate(4, position = i);
              }
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
              const image = document.createElement("img");
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
            if (activeItemIsHtml()) {
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
            $$invalidate(19, container.el = node, container);
            let roActive;
            opts.onOpen?.(container.el, activeItem);
            if (!inline) {
              globalThis.addEventListener("keydown", onKeydown);
            }
            const ro = new ResizeObserver((entries) => {
              if (roActive) {
                $$invalidate(19, container.w = entries[0].contentRect.width, container);
                $$invalidate(19, container.h = entries[0].contentRect.height, container);
                $$invalidate(7, smallScreen = container.w < 769);
                if (!activeItemIsHtml()) {
                  resizeFunc?.();
                }
                opts.onResize?.(container.el, activeItem);
              }
              roActive = true;
            });
            ro.observe(node);
            return {
              destroy() {
                ro.disconnect();
                globalThis.removeEventListener("keydown", onKeydown);
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
            if ("items" in $$props2) $$invalidate(0, items = $$props2.items);
            if ("target" in $$props2) $$invalidate(15, target = $$props2.target);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*items, position, isOpen, opts, container, activeItem*/
            786545) {
              if (items) {
                $$invalidate(6, activeItem = items[position]);
                if (isOpen) {
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/data.js
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/index.js
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/event-handler.js
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/manipulator.js
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/config.js
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/base-component.js
  var VERSION = "5.3.3";
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/selector-engine.js
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
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/collapse.js
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/docs@v0.18.1/assets/hb/modules/docs/js/nav.ts
  (() => {
    const activeParent = (child) => {
      const parent = child.parentElement?.closest(".hb-docs-nav-links-group");
      if (parent == null) {
        return;
      }
      parent.querySelector(".collapse")?.classList.add("show");
      const heading = parent.querySelector(".hb-docs-nav-heading");
      heading.classList.add("active");
      heading.querySelector(".hb-docs-nav-item-toggle")?.setAttribute("aria-expanded", "true");
      activeParent(parent);
    };
    const active = (link2) => {
      link2.classList.add("active");
      activeParent(link2);
    };
    const link = document.querySelector(`.hb-docs-nav-links a[href="${location.pathname}"]`);
    if (link == null) {
      return;
    }
    active(link);
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelector(".hb-docs-nav")?.scrollTo(0, link.offsetTop);
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/docs@v0.18.1/assets/hb/modules/docs/js/nav-toggle.ts
  (() => {
    const toggle = document.querySelector(".hb-docs-nav-toggle");
    const docs2 = document.querySelector(".hb-docs");
    if (!toggle || !docs2) {
      return;
    }
    const className = "sidebar-off";
    toggle.addEventListener("click", () => {
      if (docs2.classList.contains(className)) {
        docs2.classList.remove(className);
      } else {
        docs2.classList.add(className);
      }
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dropdown.js
  var Popper = __toESM(require_popper());
  var NAME2 = "dropdown";
  var DATA_KEY2 = "bs.dropdown";
  var EVENT_KEY2 = `.${DATA_KEY2}`;
  var DATA_API_KEY2 = ".data-api";
  var ESCAPE_KEY = "Escape";
  var TAB_KEY = "Tab";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE2 = `hide${EVENT_KEY2}`;
  var EVENT_HIDDEN2 = `hidden${EVENT_KEY2}`;
  var EVENT_SHOW2 = `show${EVENT_KEY2}`;
  var EVENT_SHOWN2 = `shown${EVENT_KEY2}`;
  var EVENT_CLICK_DATA_API2 = `click${EVENT_KEY2}${DATA_API_KEY2}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY2}${DATA_API_KEY2}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY2}${DATA_API_KEY2}`;
  var CLASS_NAME_SHOW2 = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE2 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE2}.${CLASS_NAME_SHOW2}`;
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
  var Default2 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType2 = {
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
      return Default2;
    }
    static get DefaultType() {
      return DefaultType2;
    }
    static get NAME() {
      return NAME2;
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
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW2, relatedTarget);
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
      this._menu.classList.add(CLASS_NAME_SHOW2);
      this._element.classList.add(CLASS_NAME_SHOW2);
      event_handler_default.trigger(this._element, EVENT_SHOWN2, relatedTarget);
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
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE2, relatedTarget);
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
      this._menu.classList.remove(CLASS_NAME_SHOW2);
      this._element.classList.remove(CLASS_NAME_SHOW2);
      this._element.setAttribute("aria-expanded", "false");
      manipulator_default.removeDataAttribute(this._menu, "popper");
      event_handler_default.trigger(this._element, EVENT_HIDDEN2, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME2.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
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
      return this._menu.classList.contains(CLASS_NAME_SHOW2);
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
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
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
      const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE2) ? this : selector_engine_default.prev(this, SELECTOR_DATA_TOGGLE2)[0] || selector_engine_default.next(this, SELECTOR_DATA_TOGGLE2)[0] || selector_engine_default.findOne(SELECTOR_DATA_TOGGLE2, event.delegateTarget.parentNode);
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
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE2, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_CLICK_DATA_API2, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_CLICK_DATA_API2, SELECTOR_DATA_TOGGLE2, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/backdrop.js
  var NAME3 = "backdrop";
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_SHOW3 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME3}`;
  var Default3 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType3 = {
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
      return Default3;
    }
    static get DefaultType() {
      return DefaultType3;
    }
    static get NAME() {
      return NAME3;
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
      element.classList.add(CLASS_NAME_SHOW3);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW3);
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
          backdrop.classList.add(CLASS_NAME_FADE);
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/component-functions.js
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/focustrap.js
  var NAME4 = "focustrap";
  var DATA_KEY3 = "bs.focustrap";
  var EVENT_KEY3 = `.${DATA_KEY3}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY3}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY3}`;
  var TAB_KEY2 = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default4 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType4 = {
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
      return Default4;
    }
    static get DefaultType() {
      return DefaultType4;
    }
    static get NAME() {
      return NAME4;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      event_handler_default.off(document, EVENT_KEY3);
      event_handler_default.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event));
      event_handler_default.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      event_handler_default.off(document, EVENT_KEY3);
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/scrollbar.js
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/offcanvas.js
  var NAME5 = "offcanvas";
  var DATA_KEY4 = "bs.offcanvas";
  var EVENT_KEY4 = `.${DATA_KEY4}`;
  var DATA_API_KEY3 = ".data-api";
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY4}${DATA_API_KEY3}`;
  var ESCAPE_KEY2 = "Escape";
  var CLASS_NAME_SHOW4 = "show";
  var CLASS_NAME_SHOWING = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW3 = `show${EVENT_KEY4}`;
  var EVENT_SHOWN3 = `shown${EVENT_KEY4}`;
  var EVENT_HIDE3 = `hide${EVENT_KEY4}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY4}`;
  var EVENT_HIDDEN3 = `hidden${EVENT_KEY4}`;
  var EVENT_RESIZE = `resize${EVENT_KEY4}`;
  var EVENT_CLICK_DATA_API3 = `click${EVENT_KEY4}${DATA_API_KEY3}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY4}`;
  var SELECTOR_DATA_TOGGLE3 = '[data-bs-toggle="offcanvas"]';
  var Default5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType5 = {
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
      return Default5;
    }
    static get DefaultType() {
      return DefaultType5;
    }
    static get NAME() {
      return NAME5;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW3, { relatedTarget });
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
        this._element.classList.add(CLASS_NAME_SHOW4);
        this._element.classList.remove(CLASS_NAME_SHOWING);
        event_handler_default.trigger(this._element, EVENT_SHOWN3, { relatedTarget });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW4, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new scrollbar_default().reset();
        }
        event_handler_default.trigger(this._element, EVENT_HIDDEN3);
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
  event_handler_default.on(document, EVENT_CLICK_DATA_API3, SELECTOR_DATA_TOGGLE3, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    event_handler_default.one(target, EVENT_HIDDEN3, () => {
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
  event_handler_default.on(window, EVENT_LOAD_DATA_API, () => {
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/header@v0.15.0/assets/hb/modules/header/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const header2 = document.querySelector(".hb-header");
      const nav = header2.querySelector(".hb-header-nav");
      if (!header2) {
        return;
      }
      const activeMenu = (menu) => {
        menu.classList.add("active");
        menu.setAttribute("aria-current", "page");
        menu.parentElement?.classList.add("active");
        const parent = menu.closest(".hb-header-menu");
        parent?.classList.add("active");
        parent?.querySelector(".nav-link:first-child")?.classList.add("active");
      };
      const isMenuParent = (parent) => {
        const href = parent.getAttribute("href") ?? "";
        return window.location.href.indexOf(href) !== -1 || window.location.pathname.indexOf(href) !== -1;
      };
      const menus = nav.querySelectorAll(`a[href="${window.location.href}"], a[href="${window.location.pathname}"]`);
      if (menus.length > 0) {
        menus.forEach((menu) => {
          activeMenu(menu);
        });
      } else {
        let foundParent = false;
        const submenus = Array.from(document.querySelectorAll("a.hb-header-submenu"));
        for (let menu of submenus) {
          if (isMenuParent(menu)) {
            activeMenu(menu);
            foundParent = true;
            break;
          }
        }
        if (!foundParent) {
          for (let menu of Array.from(nav.querySelectorAll("a.nav-link"))) {
            if (isMenuParent(menu)) {
              activeMenu(menu);
              break;
            }
          }
        }
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
      let h = 0;
      const threshold = 20;
      if (document.documentElement.scrollTop !== 0) {
        header2.classList.add("scrolling");
      }
      const isMobile = () => {
        return window.innerWidth < 576;
      };
      window.addEventListener("resize", () => {
        if (!isMobile()) {
          show();
        }
      });
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop === 0) {
          header2.classList.remove("scrolling");
          removeShadow();
        } else {
          header2.classList.add("scrolling");
          shadow();
        }
        if (isMobile() && Math.abs(document.documentElement.scrollTop - h) > threshold) {
          document.documentElement.scrollTop > h ? hide() : show();
          h = document.documentElement.scrollTop;
        }
      });
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/swipe.js
  var NAME6 = "swipe";
  var EVENT_KEY5 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY5}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY5}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY5}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY5}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY5}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default6 = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType6 = {
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
      return Default6;
    }
    static get DefaultType() {
      return DefaultType6;
    }
    static get NAME() {
      return NAME6;
    }
    // Public
    dispose() {
      event_handler_default.off(this._element, EVENT_KEY5);
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/carousel.js
  var NAME7 = "carousel";
  var DATA_KEY5 = "bs.carousel";
  var EVENT_KEY6 = `.${DATA_KEY5}`;
  var DATA_API_KEY4 = ".data-api";
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY6}`;
  var EVENT_SLID = `slid${EVENT_KEY6}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY6}`;
  var EVENT_MOUSEENTER = `mouseenter${EVENT_KEY6}`;
  var EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY6}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY6}`;
  var EVENT_LOAD_DATA_API2 = `load${EVENT_KEY6}${DATA_API_KEY4}`;
  var EVENT_CLICK_DATA_API4 = `click${EVENT_KEY6}${DATA_API_KEY4}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE = "active";
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
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  var Default7 = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType7 = {
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
      return Default7;
    }
    static get DefaultType() {
      return DefaultType7;
    }
    static get NAME() {
      return NAME7;
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
        event_handler_default.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
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
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = selector_engine_default.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE);
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
        nextElement.classList.add(CLASS_NAME_ACTIVE);
        activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
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
  event_handler_default.on(document, EVENT_CLICK_DATA_API4, SELECTOR_DATA_SLIDE, function(event) {
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/carousel@v0.2.7/assets/hb/modules/carousel/js/index.ts
  (() => {
    document.querySelectorAll(".carousel").forEach((el) => {
      new carousel_default(el);
    });
  })();

  // ns-params:@params
  var params_exports = {};
  __export(params_exports, {
    back_to_top: () => back_to_top,
    bigger_picture: () => bigger_picture,
    blockquotes: () => blockquotes,
    blog: () => blog,
    breadcrumb: () => breadcrumb,
    color: () => color,
    css_bundle_name: () => css_bundle_name,
    debug: () => debug,
    default: () => params_default,
    docs: () => docs,
    featured_image: () => featured_image,
    footer: () => footer,
    full_width_types: () => full_width_types,
    header: () => header,
    heading_sign: () => heading_sign,
    js_bundle_name: () => js_bundle_name,
    logo: () => logo,
    modules: () => modules,
    pagination: () => pagination,
    progress_bar: () => progress_bar,
    sass_transpiler: () => sass_transpiler,
    scrollbar: () => scrollbar,
    search: () => search,
    styles: () => styles,
    tables: () => tables,
    terms: () => terms
  });
  var back_to_top = { animation: true, icon_height: "2em", icon_name: "rocket", icon_width: "2em", position_bottom: "1rem", position_end: "1rem" };
  var bigger_picture = { play_interval: 5e3, scale: 2 };
  var blockquotes = { border_style: "primary", border_width: 4, bordered: true };
  var blog = { archives: { paginate: 30 }, full_width: false, giscus: { category: "General", category_id: "DIC_kwDOKQjuns4CZJYI", endpoint: "https://giscus.app/", input_position: "top", lazy_loading: true, mapping: "pathname", reactions: true, repo: "learn-software-engineering/website-comments", repo_id: "R_kgDOKQjung", strict_matching: true, theme: "preferred_color_scheme" }, home: { main_sections: ["blog", "software-engineering", "programming", "oop"], pinned_posts_position: "", recent_posts: 12 }, list_cols_lg: 3, list_cols_md: 2, list_style: "", paginate: 12, post_date_format: ":date_long", post_thumbnail: true, post_thumbnail_default: "images/thumbnail.png", post_thumbnail_height: "160px", post_thumbnail_placeholder: "", post_thumbnail_position: "top", post_thumbnail_resize_height: 360, related_posts: { number: 10 }, sidebar: { max_width: "320px", position: "start", posts: { featured_count: 5, fill: true, list_style: "slide", recent_count: 5, style: "pills" }, sticky: true, taxonomies: { count: true, limit: 10, separate: false, style: "underline" }, width: 0.35 }, toc: { position: "end" } };
  var breadcrumb = { disabled: false };
  var color = "light";
  var css_bundle_name = "ls";
  var debug = false;
  var docs = { date_format: ":date_long", giscus: { category: "General", category_id: "DIC_kwDOKQjuns4CZJYI", endpoint: "https://giscus.app/", input_position: "top", lazy_loading: true, mapping: "pathname", reactions: true, repo: "learn-software-engineering/website-comments", repo_id: "R_kgDOKQjung", strict_matching: true, theme: "preferred_color_scheme" } };
  var featured_image = { size: "x640" };
  var footer = { powered_by: true, site_title: "Learn-Software.com", socials: { facebook: "https://www.facebook.com/learn.software.eng", github: "learn-software-engineering", gmail: "mailto://learn.software.eng@gmail.com", instagram: "https://www.instagram.com/learnsoftwareeng", linkedin: "https://linkedin.com/company/learn-software", patreon: "https://patreon.com/learnsoftwareeng", twitter: "https://twitter.com/software45687", youtube: "https://www.youtube.com/@learn-software" } };
  var full_width_types = { docs: { enable: true } };
  var header = { banner: { navbar_opacity: 0.8, transparentize_navbar_bg: true }, breakpoint: "lg", full_width: true, socials: { facebook: "https://www.facebook.com/learn.software.eng", github: "learn-software-engineering", gmail: "mailto://learn.software.eng@gmail.com", instagram: "https://www.instagram.com/learnsoftwareeng", linkedin: "https://linkedin.com/company/learn-software", patreon: "https://patreon.com/learnsoftwareeng", twitter: "https://twitter.com/software45687", youtube: "https://www.youtube.com/@learn-software" }, sticky: true, theme_toggle: { style: "switch" } };
  var heading_sign = { containers: { ".hb-blog-post-content": {}, ".hb-docs-doc-content": {} }, symbol: "\xA7" };
  var js_bundle_name = "ls";
  var logo = "images/logo-square-2.png";
  var modules = { "code-block-panel": { js_resources: [{ partial: "code-block-panel/assets/js-resource" }] } };
  var pagination = { alignment: "center", siblings: 2, size: "" };
  var progress_bar = { height: "2px", initial_width: 20, interval: 50, time: 2 };
  var sass_transpiler = "dartsass";
  var scrollbar = { corner_bg: "#909294", height: "12px", thumb_bg: "#909294", track_bg: "#f8f9fa", width: "12px" };
  var search = { modal: true };
  var styles = { hb_top_offset: "24px", prefix: "hb-" };
  var tables = { align: "", border_style: "", bordered: true, group_divider: false, hover: true, striped: true, striped_columns: false, style: "", thead_style: "" };
  var terms = { list_style: "", paginate: 12, profile: true, profile_metrics: true };
  var params_default = { back_to_top, bigger_picture, blockquotes, blog, breadcrumb, color, css_bundle_name, debug, docs, featured_image, footer, full_width_types, header, heading_sign, js_bundle_name, logo, modules, pagination, progress_bar, sass_transpiler, scrollbar, search, styles, tables, terms };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/heading-sign@v0.2.0/assets/hb/modules/heading-sign/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const containers = params_exports?.heading_sign?.containers;
      if (!containers) {
        return;
      }
      const symbol = params_exports?.heading_sign?.symbol ?? "\xA7";
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
          anchor.innerText = symbol;
          heading.appendChild(anchor);
        });
      }
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/slide@v0.4.0/assets/hb/modules/slide/js/index.ts
  (() => {
    "use strict";
    let scrolling = false;
    const scroll = (element, dir) => {
      if (scrolling) {
        return;
      }
      scrolling = true;
      const inner = element.parentElement?.querySelector(".slide-inner");
      const step = inner.offsetWidth;
      let left = 0;
      if (dir === "left") {
        left = inner.scrollLeft - step;
      } else {
        left = Math.min(inner.scrollWidth - inner.clientWidth, inner.scrollLeft + step);
      }
      if (left <= 0) {
        scrolling = false;
        return;
      }
      inner.scroll({
        left
      });
      const checker = setInterval(() => {
        if (left === inner.scrollLeft) {
          scrolling = false;
          clearInterval(checker);
        }
      }, 50);
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
        }, { passive: true });
        el.addEventListener("touchend", (e) => {
          scroll(el, e.changedTouches[0].clientX > startX ? "left" : "right");
        }, { passive: true });
      });
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/tab.js
  var NAME8 = "tab";
  var DATA_KEY6 = "bs.tab";
  var EVENT_KEY7 = `.${DATA_KEY6}`;
  var EVENT_HIDE4 = `hide${EVENT_KEY7}`;
  var EVENT_HIDDEN4 = `hidden${EVENT_KEY7}`;
  var EVENT_SHOW4 = `show${EVENT_KEY7}`;
  var EVENT_SHOWN4 = `shown${EVENT_KEY7}`;
  var EVENT_CLICK_DATA_API5 = `click${EVENT_KEY7}`;
  var EVENT_KEYDOWN2 = `keydown${EVENT_KEY7}`;
  var EVENT_LOAD_DATA_API3 = `load${EVENT_KEY7}`;
  var ARROW_LEFT_KEY2 = "ArrowLeft";
  var ARROW_RIGHT_KEY2 = "ArrowRight";
  var ARROW_UP_KEY2 = "ArrowUp";
  var ARROW_DOWN_KEY2 = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE2 = "active";
  var CLASS_NAME_FADE2 = "fade";
  var CLASS_NAME_SHOW5 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE4 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE4}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE2}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE2}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE2}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends base_component_default {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      event_handler_default.on(this._element, EVENT_KEYDOWN2, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME8;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? event_handler_default.trigger(active, EVENT_HIDE4, { relatedTarget: innerElem }) : null;
      const showEvent = event_handler_default.trigger(innerElem, EVENT_SHOW4, { relatedTarget: active });
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
      element.classList.add(CLASS_NAME_ACTIVE2);
      this._activate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW5);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        event_handler_default.trigger(element, EVENT_SHOWN4, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE2));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE2);
      element.blur();
      this._deactivate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW5);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        event_handler_default.trigger(element, EVENT_HIDDEN4, { relatedTarget: relatedElem });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE2));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY2, ARROW_RIGHT_KEY2, ARROW_UP_KEY2, ARROW_DOWN_KEY2, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY2, ARROW_DOWN_KEY2].includes(event.key);
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
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE2);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW5);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE2);
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
  event_handler_default.on(document, EVENT_CLICK_DATA_API5, SELECTOR_DATA_TOGGLE4, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API3, () => {
    for (const element of selector_engine_default.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.1/assets/hb/modules/progress-bar/js/progress.ts
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
    timer = 0;
    show() {
      this.ele.classList.remove("d-none");
      this.timer = setInterval(() => {
        this.width += this.step;
        this.bar.style.width = `${this.width}%`;
      }, this.interval);
    }
    hide() {
      this.ele.classList.add("d-none");
      clearInterval(this.timer);
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.1/assets/hb/modules/progress-bar/js/index.ts
  (() => {
    const progress = new Progress();
    window.addEventListener("pagehide", () => {
      progress.hide();
    });
    window.addEventListener("beforeunload", () => {
      progress.show();
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/scrollspy.js
  var NAME9 = "scrollspy";
  var DATA_KEY7 = "bs.scrollspy";
  var EVENT_KEY8 = `.${DATA_KEY7}`;
  var DATA_API_KEY5 = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY8}`;
  var EVENT_CLICK = `click${EVENT_KEY8}`;
  var EVENT_LOAD_DATA_API4 = `load${EVENT_KEY8}${DATA_API_KEY5}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE3 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE2 = ".dropdown-toggle";
  var Default8 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType8 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default8;
    }
    static get DefaultType() {
      return DefaultType8;
    }
    static get NAME() {
      return NAME9;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      event_handler_default.off(this._config.target, EVENT_CLICK);
      event_handler_default.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({ top: height, behavior: "smooth" });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = selector_engine_default.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = selector_engine_default.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE3);
      this._activateParents(target);
      event_handler_default.trigger(this._element, EVENT_ACTIVATE, { relatedTarget: target });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        selector_engine_default.findOne(SELECTOR_DROPDOWN_TOGGLE2, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE3);
        return;
      }
      for (const listGroup of selector_engine_default.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of selector_engine_default.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE3);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE3);
      const activeNodes = selector_engine_default.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE3}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE3);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
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
  event_handler_default.on(window, EVENT_LOAD_DATA_API4, () => {
    for (const spy of selector_engine_default.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);

  // ns-hugo:/__w/learn-software-engineering/learn-software-engineering/assets/mods/giscus/js/index.ts
  var Giscus = class {
    setTheme(theme) {
      const frames = document.querySelectorAll(
        "iframe.giscus-frame"
      );
      frames.forEach((frame) => {
        if (!frame.contentWindow) {
          return;
        }
        const endpoint = new URL(frame.src).origin;
        frame.contentWindow.postMessage(
          {
            giscus: {
              setConfig: {
                theme: `${endpoint}/themes/${theme}.css`
              }
            }
          },
          endpoint
        );
      });
    }
  };
  var js_default = Giscus;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/giscus@v0.1.1/assets/hb/modules/giscus/js/index.ts
  (() => {
    "use strict";
    const giscus = new js_default();
    const setTheme = (theme = "") => {
      if (theme === "") {
        const saved = localStorage.getItem("hb-theme");
        theme = !saved || saved === "auto" ? getPreferredTheme() : saved;
      }
      giscus.setTheme(theme);
    };
    const getPreferredTheme = () => {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("giscus-load", () => {
        const frame = document.querySelector("iframe.giscus-frame.giscus-frame--loading");
        frame?.addEventListener("load", () => {
          setTheme();
        });
      });
      setTimeout(() => {
        setTheme();
      }, 2e3);
      document.addEventListener("hb:theme", (e) => {
        setTheme(e.detail.theme);
      });
    });
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/back-to-top@v0.2.0/assets/hb/modules/back-to-top/js/button.ts
  var Button = class {
    btn;
    constructor(icon) {
      const btn = document.createElement("button");
      btn.className = "hb-back-to-top";
      btn.ariaLabel = "Back to top";
      btn.innerHTML = this.transformIcon(icon);
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
        this.updatePos();
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
    transformIcon(icon) {
      return icon.replace(/<svg(.*)>((.|\n)*)<\/svg>/, `<svg$1>
  <defs><clipPath id="icon">$2</clipPath></defs>
  <rect x="0" y="0" fill="currentColor" width="100%" height="100%" clip-path="url(#icon)" />
  <rect x="0" y="100%" width="100%" height="100%" clip-path="url(#icon)" />
</svg>`);
    }
    posIcon;
    updatePos() {
      if (!this.posIcon) {
        this.posIcon = this.btn.querySelectorAll("rect")[1];
      }
      const pos = document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight);
      this.posIcon.setAttribute("y", (1 - pos) * 100 + "%");
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
  var import_bigger_picture_umd = __toESM(require_bigger_picture_umd());

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/bigger-picture@v0.10.1/assets/hb/modules/bigger-picture/js/panel.ts
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

  // <stdin>
  (() => {
    "use strict";
    window.addEventListener("DOMContentLoaded", () => {
      const btn = new Button(`<svg aria-hidden="true" class="bi bi-rocket hi-svg-inline hb-back-to-top-icon" fill="currentColor" height="2em" viewBox="0 0 16 16" width="2em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8"/>
  <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.5 3.5 0 0 0-.463-.315A2 2 0 0 0 8.25.064.55.55 0 0 0 8 0a.55.55 0 0 0-.266.073 2 2 0 0 0-.142.08 4 4 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635s1.7-.207 2.4-.635q.1.044.196.083c.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562zM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935zM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199M8.009 1.073q.096.06.226.163c.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13s-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32q.136-.113.236-.18Z"/>
  <path d="M9.479 14.361c-.48.093-.98.139-1.479.139s-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0z"/>
</svg>`);
    });
  })();
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const bp = (0, import_bigger_picture_umd.default)({
        target: document.body
      });
      const panel = new Panel(bp, `<svg aria-hidden="true" class="bi bi-download hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-share hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-arrow-clockwise hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-phone-flip hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0zM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11q.148 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169s0 .065-.13.187c-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883s-.535-.411-.882-.571M7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-play-circle hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
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
      const scale = parseInt("2");
      const data = (img) => {
        const alt = img.getAttribute("alt");
        let caption = alt;
        const captionEle = img.parentNode.querySelector("figcaption");
        if (captionEle !== null) {
          caption = captionEle.innerText;
        }
        return {
          img: img.getAttribute("data-src") ?? img.src,
          height: scale * (img.getAttribute("data-height") ?? img.naturalHeight),
          width: scale * (img.getAttribute("data-width") ?? img.naturalWidth),
          alt: img.getAttribute("alt"),
          caption,
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
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vZ29odWdvaW8vaHVnby1tb2QtanNsaWJzLWRpc3QvcG9wcGVyanMvdjJAdjIuMjExMDAuMjAwMDAvcGFja2FnZS9kaXN0L2Nqcy9wb3BwZXIuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGVucnlnZC9iaWdnZXItcGljdHVyZUB2MS4xLjE3L2Rpc3QvYmlnZ2VyLXBpY3R1cmUudW1kLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2RvbS9kYXRhLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvaW5kZXguanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvZG9tL21hbmlwdWxhdG9yLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvY29uZmlnLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvY29sbGFwc2UuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9kb2NzQHYwLjE4LjEvYXNzZXRzL2hiL21vZHVsZXMvZG9jcy9qcy9uYXYudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9kb2NzQHYwLjE4LjEvYXNzZXRzL2hiL21vZHVsZXMvZG9jcy9qcy9uYXYtdG9nZ2xlLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2Ryb3Bkb3duLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvYmFja2Ryb3AuanMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvZm9jdXN0cmFwLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvc2Nyb2xsYmFyLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL29mZmNhbnZhcy5qcyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2hlYWRlckB2MC4xNS4wL2Fzc2V0cy9oYi9tb2R1bGVzL2hlYWRlci9qcy9pbmRleC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL3N3aXBlLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2Nhcm91c2VsLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svY2Fyb3VzZWxAdjAuMi43L2Fzc2V0cy9oYi9tb2R1bGVzL2Nhcm91c2VsL2pzL2luZGV4LnRzIiwgIm5zLXBhcmFtczpAcGFyYW1zIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svaGVhZGluZy1zaWduQHYwLjIuMC9hc3NldHMvaGIvbW9kdWxlcy9oZWFkaW5nLXNpZ24vanMvaW5kZXgudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9zbGlkZUB2MC40LjAvYXNzZXRzL2hiL21vZHVsZXMvc2xpZGUvanMvaW5kZXgudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdGFiLmpzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svcHJvZ3Jlc3MtYmFyQHYwLjEuMS9hc3NldHMvaGIvbW9kdWxlcy9wcm9ncmVzcy1iYXIvanMvcHJvZ3Jlc3MudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9wcm9ncmVzcy1iYXJAdjAuMS4xL2Fzc2V0cy9oYi9tb2R1bGVzL3Byb2dyZXNzLWJhci9qcy9pbmRleC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9zY3JvbGxzcHkuanMiLCAibnMtaHVnbzovX193L2xlYXJuLXNvZnR3YXJlLWVuZ2luZWVyaW5nL2xlYXJuLXNvZnR3YXJlLWVuZ2luZWVyaW5nL2Fzc2V0cy9tb2RzL2dpc2N1cy9qcy9pbmRleC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2dpc2N1c0B2MC4xLjEvYXNzZXRzL2hiL21vZHVsZXMvZ2lzY3VzL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svYmFjay10by10b3BAdjAuMi4wL2Fzc2V0cy9oYi9tb2R1bGVzL2JhY2stdG8tdG9wL2pzL2J1dHRvbi50cyIsICI8c3RkaW4+IiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svYmlnZ2VyLXBpY3R1cmVAdjAuMTAuMS9hc3NldHMvaGIvbW9kdWxlcy9iaWdnZXItcGljdHVyZS9qcy9wYW5lbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAcG9wcGVyanMvY29yZSB2Mi4xMS4wIC0gTUlUIExpY2Vuc2VcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgaW5jbHVkZVNjYWxlKSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gMTtcbiAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgJiYgaW5jbHVkZVNjYWxlKSB7XG4gICAgdmFyIG9mZnNldEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciBvZmZzZXRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7IC8vIERvIG5vdCBhdHRlbXB0IHRvIGRpdmlkZSBieSAwLCBvdGhlcndpc2Ugd2UgZ2V0IGBJbmZpbml0eWAgYXMgc2NhbGVcbiAgICAvLyBGYWxsYmFjayB0byAxIGluIGNhc2UgYm90aCB2YWx1ZXMgYXJlIGAwYFxuXG4gICAgaWYgKG9mZnNldFdpZHRoID4gMCkge1xuICAgICAgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBvZmZzZXRXaWR0aCB8fCAxO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXRIZWlnaHQgPiAwKSB7XG4gICAgICBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBvZmZzZXRIZWlnaHQgfHwgMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoIC8gc2NhbGVYLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQgLyBzY2FsZVksXG4gICAgdG9wOiByZWN0LnRvcCAvIHNjYWxlWSxcbiAgICByaWdodDogcmVjdC5yaWdodCAvIHNjYWxlWCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tIC8gc2NhbGVZLFxuICAgIGxlZnQ6IHJlY3QubGVmdCAvIHNjYWxlWCxcbiAgICB4OiByZWN0LmxlZnQgLyBzY2FsZVgsXG4gICAgeTogcmVjdC50b3AgLyBzY2FsZVlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudFNjYWxlZChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxO1xuICB2YXIgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMTtcbiAgcmV0dXJuIHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDE7XG59IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudElzU2NhbGVkID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGlzRWxlbWVudFNjYWxlZChvZmZzZXRQYXJlbnQpO1xuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50LCB0cnVlKTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufVxuXG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufVxuXG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn1cblxuZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpICE9PSAtMTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59XG5cbnZhciB0b3AgPSAndG9wJztcbnZhciBib3R0b20gPSAnYm90dG9tJztcbnZhciByaWdodCA9ICdyaWdodCc7XG52YXIgbGVmdCA9ICdsZWZ0JztcbnZhciBhdXRvID0gJ2F1dG8nO1xudmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG52YXIgc3RhcnQgPSAnc3RhcnQnO1xudmFyIGVuZCA9ICdlbmQnO1xudmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xudmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbnZhciBwb3BwZXIgPSAncG9wcGVyJztcbnZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbnZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG52YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG52YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbnZhciByZWFkID0gJ3JlYWQnO1xudmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG52YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbnZhciBtYWluID0gJ21haW4nO1xudmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbnZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG52YXIgd3JpdGUgPSAnd3JpdGUnO1xudmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG52YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHN0cikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gW10uY29uY2F0KGFyZ3MpLnJlZHVjZShmdW5jdGlvbiAocCwgYykge1xuICAgIHJldHVybiBwLnJlcGxhY2UoLyVzLywgYyk7XG4gIH0sIHN0cik7XG59XG5cbnZhciBJTlZBTElEX01PRElGSUVSX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHByb3ZpZGVkIGFuIGludmFsaWQgJXMgcHJvcGVydHksIGV4cGVjdGVkICVzIGJ1dCBnb3QgJXMnO1xudmFyIE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiByZXF1aXJlcyBcIiVzXCIsIGJ1dCBcIiVzXCIgbW9kaWZpZXIgaXMgbm90IGF2YWlsYWJsZSc7XG52YXIgVkFMSURfUFJPUEVSVElFUyA9IFsnbmFtZScsICdlbmFibGVkJywgJ3BoYXNlJywgJ2ZuJywgJ2VmZmVjdCcsICdyZXF1aXJlcycsICdvcHRpb25zJ107XG5mdW5jdGlvbiB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgW10uY29uY2F0KE9iamVjdC5rZXlzKG1vZGlmaWVyKSwgVkFMSURfUFJPUEVSVElFUykgLy8gSUUxMS1jb21wYXRpYmxlIHJlcGxhY2VtZW50IGZvciBgbmV3IFNldChpdGVyYWJsZSlgXG4gICAgLmZpbHRlcihmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBzZWxmKSB7XG4gICAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksICdcIm5hbWVcIicsICdcInN0cmluZ1wiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIubmFtZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VuYWJsZWQnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZW5hYmxlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlbmFibGVkXCInLCAnXCJib29sZWFuXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5lbmFibGVkKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncGhhc2UnOlxuICAgICAgICAgIGlmIChtb2RpZmllclBoYXNlcy5pbmRleE9mKG1vZGlmaWVyLnBoYXNlKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInBoYXNlXCInLCBcImVpdGhlciBcIiArIG1vZGlmaWVyUGhhc2VzLmpvaW4oJywgJyksIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnBoYXNlKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm4nOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImZuXCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlZmZlY3QnOlxuICAgICAgICAgIGlmIChtb2RpZmllci5lZmZlY3QgIT0gbnVsbCAmJiB0eXBlb2YgbW9kaWZpZXIuZWZmZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlZmZlY3RcIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzJzpcbiAgICAgICAgICBpZiAobW9kaWZpZXIucmVxdWlyZXMgIT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlc0lmRXhpc3RzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzSWZFeGlzdHNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb3B0aW9ucyc6XG4gICAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBvcHBlckpTOiBhbiBpbnZhbGlkIHByb3BlcnR5IGhhcyBiZWVuIHByb3ZpZGVkIHRvIHRoZSBcXFwiXCIgKyBtb2RpZmllci5uYW1lICsgXCJcXFwiIG1vZGlmaWVyLCB2YWxpZCBwcm9wZXJ0aWVzIGFyZSBcIiArIFZBTElEX1BST1BFUlRJRVMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBzICsgXCJcXFwiXCI7XG4gICAgICAgICAgfSkuam9pbignLCAnKSArIFwiOyBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwcm92aWRlZC5cIik7XG4gICAgICB9XG5cbiAgICAgIG1vZGlmaWVyLnJlcXVpcmVzICYmIG1vZGlmaWVyLnJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XG4gICAgICAgIGlmIChtb2RpZmllcnMuZmluZChmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZC5uYW1lID09PSByZXF1aXJlbWVudDtcbiAgICAgICAgfSkgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCByZXF1aXJlbWVudCwgcmVxdWlyZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1bmlxdWVCeShhcnIsIGZuKSB7XG4gIHZhciBpZGVudGlmaWVycyA9IG5ldyBTZXQoKTtcbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgaWRlbnRpZmllciA9IGZuKGl0ZW0pO1xuXG4gICAgaWYgKCFpZGVudGlmaWVycy5oYXMoaWRlbnRpZmllcikpIHtcbiAgICAgIGlkZW50aWZpZXJzLmFkZChpZGVudGlmaWVyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7IC8vIE5COiBUaGlzIGlzbid0IHN1cHBvcnRlZCBvbiBpT1MgPD0gMTIuIElmIHRoZSBrZXlib2FyZCBpcyBvcGVuLCB0aGUgcG9wcGVyXG4gIC8vIGNhbiBiZSBvYnNjdXJlZCB1bmRlcm5lYXRoIGl0LlxuICAvLyBBbHNvLCBgaHRtbC5jbGllbnRIZWlnaHRgIGFkZHMgdGhlIGJvdHRvbSBiYXIgaGVpZ2h0IGluIFNhZmFyaSBpT1MsIGV2ZW5cbiAgLy8gaWYgaXQgaXNuJ3Qgb3Blbiwgc28gaWYgdGhpcyBpc24ndCBhdmFpbGFibGUsIHRoZSBwb3BwZXIgd2lsbCBiZSBkZXRlY3RlZFxuICAvLyB0byBvdmVyZmxvdyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG9vIGVhcmx5LlxuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0OyAvLyBVc2VzIExheW91dCBWaWV3cG9ydCAobGlrZSBDaHJvbWU7IFNhZmFyaSBkb2VzIG5vdCBjdXJyZW50bHkpXG4gICAgLy8gSW4gQ2hyb21lLCBpdCByZXR1cm5zIGEgdmFsdWUgdmVyeSBjbG9zZSB0byAwICgrLy0pIGJ1dCBjb250YWlucyByb3VuZGluZ1xuICAgIC8vIGVycm9ycyBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgbnVtYmVycywgc28gd2UgbmVlZCB0byBjaGVjayBwcmVjaXNpb24uXG4gICAgLy8gU2FmYXJpIHJldHVybnMgYSBudW1iZXIgPD0gMCwgdXN1YWxseSA8IC0xIHdoZW4gcGluY2gtem9vbWVkXG4gICAgLy8gRmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgaW4gbW9iaWxlIGVtdWxhdGlvbiBtb2RlIGluIENocm9tZS5cbiAgICAvLyBNYXRoLmFicyh3aW4uaW5uZXJXaWR0aCAvIHZpc3VhbFZpZXdwb3J0LnNjYWxlIC0gdmlzdWFsVmlld3BvcnQud2lkdGgpIDxcbiAgICAvLyAwLjAwMVxuICAgIC8vIEZhbGxiYWNrIGhlcmU6IFwiTm90IFNhZmFyaVwiIHVzZXJBZ2VudFxuXG4gICAgaWYgKCEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufVxuXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknICYmIChjYW5Fc2NhcGVDbGlwcGluZyA/IGdldENvbXB1dGVkU3R5bGUoY2xpcHBpbmdQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyA6IHRydWUpO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59XG5cbmZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG5mdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59XG5cbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMoc2V0T3B0aW9uc0FjdGlvbikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nID8gc2V0T3B0aW9uc0FjdGlvbihzdGF0ZS5vcHRpb25zKSA6IHNldE9wdGlvbnNBY3Rpb247XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1vZGlmaWVycyBpcyBpbnZhbGlkIGZvciBhbnkgcmVhc29uXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSB1bmlxdWVCeShbXS5jb25jYXQob3JkZXJlZE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpO1xuXG4gICAgICAgICAgaWYgKGdldEJhc2VQbGFjZW1lbnQoc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICAgICAgICB2YXIgZmxpcE1vZGlmaWVyID0gc3RhdGUub3JkZXJlZE1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSAnZmxpcCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFmbGlwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhdXRvXCIgcGxhY2VtZW50cyByZXF1aXJlIHRoZSBcImZsaXBcIiBtb2RpZmllciBiZScsICdwcmVzZW50IGFuZCBlbmFibGVkIHRvIHdvcmsuJ10uam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBvcHBlciksXG4gICAgICAgICAgICAgIG1hcmdpblRvcCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblRvcCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luTGVmdDsgLy8gV2Ugbm8gbG9uZ2VyIHRha2UgaW50byBhY2NvdW50IGBtYXJnaW5zYCBvbiB0aGUgcG9wcGVyLCBhbmQgaXQgY2FuXG4gICAgICAgICAgLy8gY2F1c2UgYnVncyB3aXRoIHBvc2l0aW9uaW5nLCBzbyB3ZSdsbCB3YXJuIHRoZSBjb25zdW1lclxuXG5cbiAgICAgICAgICBpZiAoW21hcmdpblRvcCwgbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSwgbWFyZ2luTGVmdF0uc29tZShmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXJnaW4pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IENTUyBcIm1hcmdpblwiIHN0eWxlcyBjYW5ub3QgYmUgdXNlZCB0byBhcHBseSBwYWRkaW5nJywgJ2JldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50IG9yIGJvdW5kYXJ5LicsICdUbyByZXBsaWNhdGUgbWFyZ2luLCB1c2UgdGhlIGBvZmZzZXRgIG1vZGlmaWVyLCBhcyB3ZWxsIGFzJywgJ3RoZSBgcGFkZGluZ2Agb3B0aW9uIGluIHRoZSBgcHJldmVudE92ZXJmbG93YCBhbmQgYGZsaXBgJywgJ21vZGlmaWVycy4nXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUgXHUyMDEzIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fZGVidWdfbG9vcHNfXyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgX19kZWJ1Z19sb29wc19fICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChfX2RlYnVnX2xvb3BzX18gPiAxMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTkZJTklURV9MT09QX0VSUk9SKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIFx1MjAxMyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0JDIoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBldmVudExpc3RlbmVycyA9IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCQyLFxuICBkYXRhOiB7fVxufTtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgcG9wcGVyT2Zmc2V0cyQxID0ge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTtcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cyxcbiAgICAgIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuXG4gIHZhciBfcmVmMyA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKG9mZnNldHMpIDogdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyhvZmZzZXRzKSA6IG9mZnNldHMsXG4gICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgIHggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeCxcbiAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgeSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR5O1xuXG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJyAmJiBwb3NpdGlvbiA9PT0gJ2Fic29sdXRlJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgdmFyIG9mZnNldFkgPSBpc0ZpeGVkICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC5oZWlnaHQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXTtcbiAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCAocGxhY2VtZW50ID09PSB0b3AgfHwgcGxhY2VtZW50ID09PSBib3R0b20pICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0O1xuICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPD0gMSA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNCkge1xuICB2YXIgc3RhdGUgPSBfcmVmNC5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNC5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldENvbXB1dGVkU3R5bGUoc3RhdGUuZWxlbWVudHMucG9wcGVyKS50cmFuc2l0aW9uUHJvcGVydHkgfHwgJyc7XG5cbiAgICBpZiAoYWRhcHRpdmUgJiYgWyd0cmFuc2Zvcm0nLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uc29tZShmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uUHJvcGVydHkuaW5kZXhPZihwcm9wZXJ0eSkgPj0gMDtcbiAgICB9KSkge1xuICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBEZXRlY3RlZCBDU1MgdHJhbnNpdGlvbnMgb24gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcnLCAnQ1NTIHByb3BlcnRpZXM6IFwidHJhbnNmb3JtXCIsIFwidG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIuJywgJ1xcblxcbicsICdEaXNhYmxlIHRoZSBcImNvbXB1dGVTdHlsZXNcIiBtb2RpZmllclxcJ3MgYGFkYXB0aXZlYCBvcHRpb24gdG8gYWxsb3cnLCAnZm9yIHNtb290aCB0cmFuc2l0aW9ucywgb3IgcmVtb3ZlIHRoZXNlIHByb3BlcnRpZXMgZnJvbSB0aGUgQ1NTJywgJ3RyYW5zaXRpb24gZGVjbGFyYXRpb24gb24gdGhlIHBvcHBlciBlbGVtZW50IGlmIG9ubHkgdHJhbnNpdGlvbmluZycsICdvcGFjaXR5IG9yIGJhY2tncm91bmQtY29sb3IgZm9yIGV4YW1wbGUuJywgJ1xcblxcbicsICdXZSByZWNvbW1lbmQgdXNpbmcgdGhlIHBvcHBlciBlbGVtZW50IGFzIGEgd3JhcHBlciBhcm91bmQgYW4gaW5uZXInLCAnZWxlbWVudCB0aGF0IGNhbiBoYXZlIGFueSBDU1MgcHJvcGVydHkgdHJhbnNpdGlvbmVkIGZvciBhbmltYXRpb25zLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvbixcbiAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGNvbXB1dGVTdHlsZXMkMSA9IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59O1xuXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAvLyAkRmxvd0ZpeE1lW2Nhbm5vdC13cml0ZV1cblxuXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QkMShfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGFwcGx5U3R5bGVzJDEgPSB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0JDEsXG4gIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxufTtcblxuZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBvZmZzZXQkMSA9IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTtcblxudmFyIGhhc2gkMSA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoJDFbbWF0Y2hlZF07XG4gIH0pO1xufVxuXG52YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gcGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyQxID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDEuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDE7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBUaGUgYGFsbG93ZWRBdXRvUGxhY2VtZW50c2Agb3B0aW9uIGRpZCBub3QgYWxsb3cgYW55JywgJ3BsYWNlbWVudHMuIEVuc3VyZSB0aGUgYHBsYWNlbWVudGAgb3B0aW9uIG1hdGNoZXMgdGhlIHZhcmlhdGlvbicsICdvZiB0aGUgYWxsb3dlZCBwbGFjZW1lbnRzLicsICdGb3IgZXhhbXBsZSwgXCJhdXRvXCIgY2Fubm90IGJlIHVzZWQgdG8gYWxsb3cgXCJib3R0b20tc3RhcnRcIi4nLCAnVXNlIFwiYXV0by1zdGFydFwiIGluc3RlYWQuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5cbmZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzO1xuICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gYmFzZVBsYWNlbWVudCA9PT0gcHJlZmVycmVkUGxhY2VtZW50O1xuICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50czogYWxsb3dlZEF1dG9QbGFjZW1lbnRzXG4gICAgfSkgOiBwbGFjZW1lbnQpO1xuICB9LCBbXSk7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSk7XG4gICAgdmFyIG1haW5WYXJpYXRpb25TaWRlID0gaXNWZXJ0aWNhbCA/IGlzU3RhcnRWYXJpYXRpb24gPyByaWdodCA6IGxlZnQgOiBpc1N0YXJ0VmFyaWF0aW9uID8gYm90dG9tIDogdG9wO1xuXG4gICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgfVxuXG4gICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9KSkge1xuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuXG4gIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyBcdTIwMTMgcmVzZWFyY2ggbGF0ZXJcbiAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICBpZiAoY2hlY2tzKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICBzdGF0ZS5wbGFjZW1lbnQgPSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICB9XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgZmxpcCQxID0ge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufVxuXG5mdW5jdGlvbiB3aXRoaW4obWluJDEsIHZhbHVlLCBtYXgkMSkge1xuICByZXR1cm4gbWF4KG1pbiQxLCBtaW4odmFsdWUsIG1heCQxKSk7XG59XG5mdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcbiAgdmFyIHYgPSB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KTtcbiAgcmV0dXJuIHYgPiBtYXggPyBtYXggOiB2O1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICB9KTtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXRWYWx1ZSA9PT0gJ251bWJlcicgPyB7XG4gICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuICAgIGFsdEF4aXM6IHRldGhlck9mZnNldFZhbHVlXG4gIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICBtYWluQXhpczogMCxcbiAgICBhbHRBeGlzOiAwXG4gIH0sIHRldGhlck9mZnNldFZhbHVlKTtcbiAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQ7XG5cbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiQxID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXgkMSA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW21haW5BeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJCA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IG9mZnNldCArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG4gICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtaW4obWluJDEsIHRldGhlck1pbikgOiBtaW4kMSwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXgobWF4JDEsIHRldGhlck1heCkgOiBtYXgkMSk7XG4gICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gIH1cblxuICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XG5cbiAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICB2YXIgX2xlbiA9IGFsdEF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICB2YXIgaXNPcmlnaW5TaWRlID0gW3RvcCwgbGVmdF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcblxuICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG5cbiAgICB2YXIgX3RldGhlck1heCA9IGlzT3JpZ2luU2lkZSA/IF9vZmZzZXQgKyByZWZlcmVuY2VSZWN0W19sZW5dICsgcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXMgOiBfbWF4O1xuXG4gICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcblxuICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIHByZXZlbnRPdmVyZmxvdyQxID0ge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTtcblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBlbGVtZW50IG11c3QgYmUgYW4gSFRNTEVsZW1lbnQgKG5vdCBhbiBTVkdFbGVtZW50KS4nLCAnVG8gdXNlIGFuIFNWRyBhcnJvdywgd3JhcCBpdCBpbiBhbiBIVE1MRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcycsICd0aGUgYXJyb3cuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBtb2RpZmllclxcJ3MgYGVsZW1lbnRgIG11c3QgYmUgYSBjaGlsZCBvZiB0aGUgcG9wcGVyJywgJ2VsZW1lbnQuJ10uam9pbignICcpKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBhcnJvdyQxID0ge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBoaWRlJDEgPSB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07XG5cbnZhciBkZWZhdWx0TW9kaWZpZXJzJDEgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxXTtcbnZhciBjcmVhdGVQb3BwZXIkMSA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzJDFcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzJDEsIGNvbXB1dGVTdHlsZXMkMSwgYXBwbHlTdHlsZXMkMSwgb2Zmc2V0JDEsIGZsaXAkMSwgcHJldmVudE92ZXJmbG93JDEsIGFycm93JDEsIGhpZGUkMV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydHMuYXBwbHlTdHlsZXMgPSBhcHBseVN0eWxlcyQxO1xuZXhwb3J0cy5hcnJvdyA9IGFycm93JDE7XG5leHBvcnRzLmNvbXB1dGVTdHlsZXMgPSBjb21wdXRlU3R5bGVzJDE7XG5leHBvcnRzLmNyZWF0ZVBvcHBlciA9IGNyZWF0ZVBvcHBlcjtcbmV4cG9ydHMuY3JlYXRlUG9wcGVyTGl0ZSA9IGNyZWF0ZVBvcHBlciQxO1xuZXhwb3J0cy5kZWZhdWx0TW9kaWZpZXJzID0gZGVmYXVsdE1vZGlmaWVycztcbmV4cG9ydHMuZGV0ZWN0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdztcbmV4cG9ydHMuZXZlbnRMaXN0ZW5lcnMgPSBldmVudExpc3RlbmVycztcbmV4cG9ydHMuZmxpcCA9IGZsaXAkMTtcbmV4cG9ydHMuaGlkZSA9IGhpZGUkMTtcbmV4cG9ydHMub2Zmc2V0ID0gb2Zmc2V0JDE7XG5leHBvcnRzLnBvcHBlckdlbmVyYXRvciA9IHBvcHBlckdlbmVyYXRvcjtcbmV4cG9ydHMucG9wcGVyT2Zmc2V0cyA9IHBvcHBlck9mZnNldHMkMTtcbmV4cG9ydHMucHJldmVudE92ZXJmbG93ID0gcHJldmVudE92ZXJmbG93JDE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3BwZXIuanMubWFwXG4iLCAiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuQmlnZ2VyUGljdHVyZSA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIG5vb3AoKSB7IH1cbiAgICBjb25zdCBpZGVudGl0eSA9IHggPT4geDtcbiAgICBmdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBmb3IgKGNvbnN0IGsgaW4gc3JjKVxuICAgICAgICAgICAgdGFyW2tdID0gc3JjW2tdO1xuICAgICAgICByZXR1cm4gdGFyO1xuICAgIH1cbiAgICBmdW5jdGlvbiBydW4oZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG4gICAgICAgIGZucy5mb3JFYWNoKHJ1bik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc19lbXB0eShvYmopIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuICAgICAgICBpZiAoc3RvcmUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdW5zdWIgPSBzdG9yZS5zdWJzY3JpYmUoLi4uY2FsbGJhY2tzKTtcbiAgICAgICAgcmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb21wb25lbnRfc3Vic2NyaWJlKGNvbXBvbmVudCwgc3RvcmUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhY3Rpb25fZGVzdHJveWVyKGFjdGlvbl9yZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbl9yZXN1bHQgJiYgaXNfZnVuY3Rpb24oYWN0aW9uX3Jlc3VsdC5kZXN0cm95KSA/IGFjdGlvbl9yZXN1bHQuZGVzdHJveSA6IG5vb3A7XG4gICAgfVxuICAgIGxldCBub3cgPSAoKSA9PiBnbG9iYWxUaGlzLnBlcmZvcm1hbmNlLm5vdygpXG4gICAgICAgIDtcbiAgICBsZXQgcmFmID0gY2IgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA7XG5cbiAgICBjb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBydW5fdGFza3Mobm93KSB7XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZiAoIXRhc2suYyhub3cpKSB7XG4gICAgICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICAgICAgICAgIHRhc2suZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRhc2tzLnNpemUgIT09IDApXG4gICAgICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyB0YXNrIHRoYXQgcnVucyBvbiBlYWNoIHJhZiBmcmFtZVxuICAgICAqIHVudGlsIGl0IHJldHVybnMgYSBmYWxzeSB2YWx1ZSBvciBpcyBhYm9ydGVkXG4gICAgICovXG4gICAgZnVuY3Rpb24gbG9vcChjYWxsYmFjaykge1xuICAgICAgICBsZXQgdGFzaztcbiAgICAgICAgaWYgKHRhc2tzLnNpemUgPT09IDApXG4gICAgICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bGZpbGwgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2tzLmFkZCh0YXNrID0geyBjOiBjYWxsYmFjaywgZjogZnVsZmlsbCB9KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVsZW1lbnQobmFtZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdGV4dChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0ZXh0KCcnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICBlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSlcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRfc3R5bGUobm9kZSwga2V5LCB2YWx1ZSwgaW1wb3J0YW50KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGVfY2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsLCBidWJibGVzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBidWJibGVzLCBmYWxzZSwgZGV0YWlsKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGxldCBzdHlsZXNoZWV0O1xuICAgIGxldCBhY3RpdmUgPSAwO1xuICAgIGxldCBjdXJyZW50X3J1bGVzID0ge307XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAgICAvLyBmdW5jdGlvbiBoYXNoKHN0cikge1xuICAgIC8vICAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgLy8gICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICAvLyAgICAgd2hpbGUgKGktLSlcbiAgICAvLyAgICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIC8vICAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbiAgICAvLyB9XG4gICAgZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuICAgICAgICBjb25zdCBzdGVwID0gMTYuNjY2IC8gZHVyYXRpb247XG4gICAgICAgIGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuICAgICAgICAgICAgY29uc3QgdCA9IGEgKyAoYiAtIGEpICogZWFzZShwKTtcbiAgICAgICAgICAgIGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcnVsZSA9IGtleWZyYW1lcyArIGAxMDAlIHske2ZuKGIsIDEgLSBiKX19XFxufWA7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBgX2JwXyR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWU5KX1fJHt1aWR9YDtcbiAgICAgICAgaWYgKCFjdXJyZW50X3J1bGVzW25hbWVdKSB7XG4gICAgICAgICAgICBpZiAoIXN0eWxlc2hlZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldCA9IHN0eWxlLnNoZWV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudF9ydWxlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICBzdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnO1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IGAke2FuaW1hdGlvbiA/IGAke2FuaW1hdGlvbn0sIGAgOiBgYH0ke25hbWV9ICR7ZHVyYXRpb259bXMgbGluZWFyICR7ZGVsYXl9bXMgMSBib3RoYDtcbiAgICAgICAgYWN0aXZlICs9IDE7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKVxuICAgICAgICAgICAgLnNwbGl0KCcsICcpXG4gICAgICAgICAgICAuZmlsdGVyKG5hbWVcbiAgICAgICAgICAgID8gYW5pbSA9PiBhbmltLmluZGV4T2YobmFtZSkgPCAwIC8vIHJlbW92ZSBzcGVjaWZpYyBhbmltYXRpb25cbiAgICAgICAgICAgIDogYW5pbSA9PiBhbmltLmluZGV4T2YoJ19icCcpID09PSAtMSAvLyByZW1vdmUgYWxsIFN2ZWx0ZSBhbmltYXRpb25zXG4gICAgICAgIClcbiAgICAgICAgICAgIC5qb2luKCcsICcpO1xuICAgICAgICBpZiAobmFtZSAmJiAhLS1hY3RpdmUpXG4gICAgICAgICAgICBjbGVhcl9ydWxlcygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhcl9ydWxlcygpIHtcbiAgICAgICAgcmFmKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChhY3RpdmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgbGV0IGkgPSBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuICAgICAgICAgICAgY3VycmVudF9ydWxlcyA9IHt9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudF9jb21wb25lbnQ7XG4gICAgZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgICAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJ0eV9jb21wb25lbnRzID0gW107XG4gICAgY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcbiAgICBjb25zdCByZW5kZXJfY2FsbGJhY2tzID0gW107XG4gICAgY29uc3QgZmx1c2hfY2FsbGJhY2tzID0gW107XG4gICAgY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcbiAgICAgICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG4gICAgICAgIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG4gICAgfVxuICAgIC8vIGZsdXNoKCkgY2FsbHMgY2FsbGJhY2tzIGluIHRoaXMgb3JkZXI6XG4gICAgLy8gMS4gQWxsIGJlZm9yZVVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlblxuICAgIC8vIDIuIEFsbCBiaW5kOnRoaXMgY2FsbGJhY2tzLCBpbiByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbiAgICAvLyAzLiBBbGwgYWZ0ZXJVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW4uIEVYQ0VQVFxuICAgIC8vICAgIGZvciBhZnRlclVwZGF0ZXMgY2FsbGVkIGR1cmluZyB0aGUgaW5pdGlhbCBvbk1vdW50LCB3aGljaCBhcmUgY2FsbGVkIGluXG4gICAgLy8gICAgcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4gICAgLy8gU2luY2UgY2FsbGJhY2tzIG1pZ2h0IHVwZGF0ZSBjb21wb25lbnQgdmFsdWVzLCB3aGljaCBjb3VsZCB0cmlnZ2VyIGFub3RoZXJcbiAgICAvLyBjYWxsIHRvIGZsdXNoKCksIHRoZSBmb2xsb3dpbmcgc3RlcHMgZ3VhcmQgYWdhaW5zdCB0aGlzOlxuICAgIC8vIDEuIER1cmluZyBiZWZvcmVVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBiZSBhZGRlZCB0byB0aGVcbiAgICAvLyAgICBkaXJ0eV9jb21wb25lbnRzIGFycmF5IGFuZCB3aWxsIGNhdXNlIGEgcmVlbnRyYW50IGNhbGwgdG8gZmx1c2goKS4gQmVjYXVzZVxuICAgIC8vICAgIHRoZSBmbHVzaCBpbmRleCBpcyBrZXB0IG91dHNpZGUgdGhlIGZ1bmN0aW9uLCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbCBwaWNrXG4gICAgLy8gICAgdXAgd2hlcmUgdGhlIGVhcmxpZXIgY2FsbCBsZWZ0IG9mZiBhbmQgZ28gdGhyb3VnaCBhbGwgZGlydHkgY29tcG9uZW50cy4gVGhlXG4gICAgLy8gICAgY3VycmVudF9jb21wb25lbnQgdmFsdWUgaXMgc2F2ZWQgYW5kIHJlc3RvcmVkIHNvIHRoYXQgdGhlIHJlZW50cmFudCBjYWxsIHdpbGxcbiAgICAvLyAgICBub3QgaW50ZXJmZXJlIHdpdGggdGhlIFwicGFyZW50XCIgZmx1c2goKSBjYWxsLlxuICAgIC8vIDIuIGJpbmQ6dGhpcyBjYWxsYmFja3MgY2Fubm90IHRyaWdnZXIgbmV3IGZsdXNoKCkgY2FsbHMuXG4gICAgLy8gMy4gRHVyaW5nIGFmdGVyVXBkYXRlLCBhbnkgdXBkYXRlZCBjb21wb25lbnRzIHdpbGwgTk9UIGhhdmUgdGhlaXIgYWZ0ZXJVcGRhdGVcbiAgICAvLyAgICBjYWxsYmFjayBjYWxsZWQgYSBzZWNvbmQgdGltZTsgdGhlIHNlZW5fY2FsbGJhY2tzIHNldCwgb3V0c2lkZSB0aGUgZmx1c2goKVxuICAgIC8vICAgIGZ1bmN0aW9uLCBndWFyYW50ZWVzIHRoaXMgYmVoYXZpb3IuXG4gICAgY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG4gICAgbGV0IGZsdXNoaWR4ID0gMDsgLy8gRG8gKm5vdCogbW92ZSB0aGlzIGluc2lkZSB0aGUgZmx1c2goKSBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgICAgICBjb25zdCBzYXZlZF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICAgICAgLy8gYW5kIHVwZGF0ZSBjb21wb25lbnRzXG4gICAgICAgICAgICB3aGlsZSAoZmx1c2hpZHggPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbZmx1c2hpZHhdO1xuICAgICAgICAgICAgICAgIGZsdXNoaWR4Kys7XG4gICAgICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlKGNvbXBvbmVudC4kJCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgICAgICBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBmbHVzaGlkeCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgICAgIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgICAgICAgICAvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcbiAgICAgICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgICAgIC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgICAgIGlmICghc2Vlbl9jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAuLi5zbyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGxvb3BzXG4gICAgICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgICAgICB9IHdoaWxlIChkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCk7XG4gICAgICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIHNlZW5fY2FsbGJhY2tzLmNsZWFyKCk7XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChzYXZlZF9jb21wb25lbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGUoJCQpIHtcbiAgICAgICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBkaXJ0eSA9ICQkLmRpcnR5O1xuICAgICAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQucCgkJC5jdHgsIGRpcnR5KTtcbiAgICAgICAgICAgICQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHByb21pc2U7XG4gICAgZnVuY3Rpb24gd2FpdCgpIHtcbiAgICAgICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KGAke2RpcmVjdGlvbiA/ICdpbnRybycgOiAnb3V0cm8nfSR7a2luZH1gKSk7XG4gICAgfVxuICAgIGNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xuICAgIGxldCBvdXRyb3M7XG4gICAgZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuICAgICAgICBvdXRyb3MgPSB7XG4gICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgYzogW10sXG4gICAgICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICAgICAgaWYgKCFvdXRyb3Mucikge1xuICAgICAgICAgICAgcnVuX2FsbChvdXRyb3MuYyk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cm9zID0gb3V0cm9zLnA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgICAgIGlmIChibG9jayAmJiBibG9jay5pKSB7XG4gICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChibG9jayAmJiBibG9jay5vKSB7XG4gICAgICAgICAgICBpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBvdXRyb2luZy5hZGQoYmxvY2spO1xuICAgICAgICAgICAgb3V0cm9zLmMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRldGFjaClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBibG9jay5vKGxvY2FsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBudWxsX3RyYW5zaXRpb24gPSB7IGR1cmF0aW9uOiAwIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlX2luX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgICAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICAgICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgICAgICBsZXQgdGFzaztcbiAgICAgICAgbGV0IHVpZCA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgICAgIGlmICh0YXNrKVxuICAgICAgICAgICAgICAgIHRhc2suYWJvcnQoKTtcbiAgICAgICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCB0cnVlLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVfb3V0X3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgICAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICAgICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgICAgICBncm91cC5yICs9IDE7XG4gICAgICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tZ3JvdXAucikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBjbGVhbiB1cCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljaygxIC0gdCwgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmQocmVzZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzZXQgJiYgY29uZmlnLnRpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuICAgICAgICBibG9jayAmJiBibG9jay5jKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yLCBjdXN0b21FbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHsgZnJhZ21lbnQsIG9uX21vdW50LCBvbl9kZXN0cm95LCBhZnRlcl91cGRhdGUgfSA9IGNvbXBvbmVudC4kJDtcbiAgICAgICAgZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgICAgIGlmICghY3VzdG9tRWxlbWVudCkge1xuICAgICAgICAgICAgLy8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmIChvbl9kZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgICAgIG9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgICAgICAgICAgLy8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuICAgICAgICAgICAgICAgICAgICBydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICAgICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQ7XG4gICAgICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTtcbiAgICAgICAgICAgIC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgICAgICQkLm9uX2Rlc3Ryb3kgPSAkJC5mcmFnbWVudCA9IG51bGw7XG4gICAgICAgICAgICAkJC5jdHggPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuICAgICAgICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgICAgICAgICAgZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgICAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eVsoaSAvIDMxKSB8IDBdIHw9ICgxIDw8IChpICUgMzEpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIG5vdF9lcXVhbCwgcHJvcHMsIGFwcGVuZF9zdHlsZXMsIGRpcnR5ID0gWy0xXSkge1xuICAgICAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJCA9IHtcbiAgICAgICAgICAgIGZyYWdtZW50OiBudWxsLFxuICAgICAgICAgICAgY3R4OiBudWxsLFxuICAgICAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgdXBkYXRlOiBub29wLFxuICAgICAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICAgICAgYm91bmQ6IHt9LFxuICAgICAgICAgICAgLy8gbGlmZWN5Y2xlXG4gICAgICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgICAgICBvbl9kZXN0cm95OiBbXSxcbiAgICAgICAgICAgIG9uX2Rpc2Nvbm5lY3Q6IFtdLFxuICAgICAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICAgICAgY29udGV4dDogbmV3IE1hcChvcHRpb25zLmNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICBjYWxsYmFja3M6IHt9LFxuICAgICAgICAgICAgZGlydHksXG4gICAgICAgICAgICBza2lwX2JvdW5kOiBmYWxzZSxcbiAgICAgICAgICAgIHJvb3Q6IG9wdGlvbnMudGFyZ2V0IHx8IHBhcmVudF9jb21wb25lbnQuJCQucm9vdFxuICAgICAgICB9O1xuICAgICAgICBhcHBlbmRfc3R5bGVzICYmIGFwcGVuZF9zdHlsZXMoJCQucm9vdCk7XG4gICAgICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgICAgICAkJC5jdHggPSBpbnN0YW5jZVxuICAgICAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIG9wdGlvbnMucHJvcHMgfHwge30sIChpLCByZXQsIC4uLnJlc3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3QubGVuZ3RoID8gcmVzdFswXSA6IHJldDtcbiAgICAgICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISQkLnNraXBfYm91bmQgJiYgJCQuYm91bmRbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAkJC5ib3VuZFtpXSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFtdO1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcmVhZHkgPSB0cnVlO1xuICAgICAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICAgICAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcbiAgICAgICAgJCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmFuY2hvciwgb3B0aW9ucy5jdXN0b21FbGVtZW50KTtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cy4gVXNlZCB3aGVuIGRldj1mYWxzZS5cbiAgICAgKi9cbiAgICBjbGFzcyBTdmVsdGVDb21wb25lbnQge1xuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICAgICAgICBjb25zdCBmID0gdCAtIDEuMDtcbiAgICAgICAgcmV0dXJuIGYgKiBmICogZiArIDEuMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmbHkobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBjdWJpY091dCwgeCA9IDAsIHkgPSAwLCBvcGFjaXR5ID0gMCB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBvZCA9IHRhcmdldF9vcGFjaXR5ICogKDEgLSBvcGFjaXR5KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmcsXG4gICAgICAgICAgICBjc3M6ICh0LCB1KSA9PiBgXG5cdFx0XHR0cmFuc2Zvcm06ICR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHsoMSAtIHQpICogeH1weCwgJHsoMSAtIHQpICogeX1weCk7XG5cdFx0XHRvcGFjaXR5OiAke3RhcmdldF9vcGFjaXR5IC0gKG9kICogdSl9YFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnNjcmliZXJfcXVldWUgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBgV3JpdGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICAgICAqIEBwYXJhbSB7Kj19dmFsdWUgaW5pdGlhbCB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI9fXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQgPSBub29wKSB7XG4gICAgICAgIGxldCBzdG9wO1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICAgICAgaWYgKG5vdF9lcXVhbCh2YWx1ZSwgbmV3X3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChzdG9wKSB7IC8vIHN0b3JlIGlzIHJlYWR5XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1bl9xdWV1ZSA9ICFzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdWJzY3JpYmVyIG9mIHN1YnNjcmliZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyWzFdKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLnB1c2goc3Vic2NyaWJlciwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChydW5fcXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuICAgICAgICAgICAgc2V0KGZuKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSA9IG5vb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmliZXIgPSBbcnVuLCBpbnZhbGlkYXRlXTtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAxKSB7XG4gICAgICAgICAgICAgICAgc3RvcCA9IHN0YXJ0KHNldCkgfHwgbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJ1bih2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXJzLmRlbGV0ZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3AgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZSB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldF9pbnRlcnBvbGF0b3IoYSwgYikge1xuICAgICAgICBpZiAoYSA9PT0gYiB8fCBhICE9PSBhKVxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGE7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgYTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IGIubWFwKChiaSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRfaW50ZXJwb2xhdG9yKGFbaV0sIGJpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHQgPT4gYXJyLm1hcChmbiA9PiBmbih0KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGIgLSBhO1xuICAgICAgICAgICAgcmV0dXJuIHQgPT4gYSArIHQgKiBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgZnVuY3Rpb24gdHdlZW5lZCh2YWx1ZSwgZGVmYXVsdHMgPSB7fSkge1xuICAgICAgICBjb25zdCBzdG9yZSA9IHdyaXRhYmxlKHZhbHVlKTtcbiAgICAgICAgbGV0IHRhc2s7XG4gICAgICAgIGxldCB0YXJnZXRfdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSwgb3B0cykge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldF92YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c190YXNrID0gdGFzaztcbiAgICAgICAgICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBpZGVudGl0eSwgaW50ZXJwb2xhdGUgPSBnZXRfaW50ZXJwb2xhdG9yIH0gPSBhc3NpZ24oYXNzaWduKHt9LCBkZWZhdWx0cyksIG9wdHMpO1xuICAgICAgICAgICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzX3Rhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNfdGFzay5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gdGFyZ2V0X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgICAgICBsZXQgZm47XG4gICAgICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPCBzdGFydClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKCFzdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuID0gaW50ZXJwb2xhdGUodmFsdWUsIG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uKHZhbHVlLCBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzX3Rhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNfdGFzay5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IG5vdyAtIHN0YXJ0O1xuICAgICAgICAgICAgICAgIGlmIChlbGFwc2VkID4gZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gZm4oZWFzaW5nKGVsYXBzZWQgLyBkdXJhdGlvbikpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2sucHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2V0LFxuICAgICAgICAgICAgdXBkYXRlOiAoZm4sIG9wdHMpID0+IHNldChmbih0YXJnZXRfdmFsdWUsIHZhbHVlKSwgb3B0cyksXG4gICAgICAgICAgICBzdWJzY3JpYmU6IHN0b3JlLnN1YnNjcmliZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKiB0cnVlIGlmIGdhbGxlcnkgaXMgaW4gdGhlIHByb2Nlc3Mgb2YgY2xvc2luZyAqL1xuICAgIGNvbnN0IGNsb3NpbmcgPSB3cml0YWJsZSgwKTtcblxuICAgIC8qKiBzdG9yZSBpZiB1c2VyIHByZWZlcnMgcmVkdWNlZCBtb3Rpb24gICovXG4gICAgY29uc3QgcHJlZmVyc1JlZHVjZWRNb3Rpb24gPSBnbG9iYWxUaGlzLm1hdGNoTWVkaWE/LihcbiAgICBcdCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSdcbiAgICApLm1hdGNoZXM7XG5cbiAgICAvKiogZGVmYXVsdCBvcHRpb25zIGZvciB0d2VlbnMgLyB0cmFuc2l0aW9ucyAqL1xuICAgIGNvbnN0IGRlZmF1bHRUd2Vlbk9wdGlvbnMgPSAoZHVyYXRpb24pID0+ICh7XG4gICAgXHRlYXNpbmc6IGN1YmljT3V0LFxuICAgIFx0ZHVyYXRpb246IHByZWZlcnNSZWR1Y2VkTW90aW9uID8gMCA6IGR1cmF0aW9uLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZ2V0VGh1bWJCYWNrZ3JvdW5kID0gKGFjdGl2ZUl0ZW0pID0+XG4gICAgXHQhYWN0aXZlSXRlbS50aHVtYiB8fCBgdXJsKCR7YWN0aXZlSXRlbS50aHVtYn0pYDtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gbm9kZSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZSAtIFRoZSBub2RlIHRvIHdoaWNoIGF0dHJpYnV0ZXMgd2lsbCBiZSBhZGRlZFxuICAgICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbj4gfCBzdHJpbmd9IG9iaiAtIFRoZSBvYmplY3QgY29udGFpbmluZyBrZXktdmFsdWUgcGFpcnMgb2YgYXR0cmlidXRlcyB0byBiZSBhZGRlZFxuICAgICAqL1xuICAgIGNvbnN0IGFkZEF0dHJpYnV0ZXMgPSAobm9kZSwgb2JqKSA9PiB7XG4gICAgXHRpZiAoIW9iaikge1xuICAgIFx0XHRyZXR1cm5cbiAgICBcdH1cbiAgICBcdGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIFx0XHRvYmogPSBKU09OLnBhcnNlKG9iaik7XG4gICAgXHR9XG4gICAgXHRmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCBvYmpba2V5XSk7XG4gICAgXHR9XG4gICAgfTtcblxuICAgIC8qIHNyYy9jb21wb25lbnRzL2xvYWRpbmcuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuNTUuMSAqL1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzEkMihjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgZGl2X291dHJvO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRkaXYuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiYnAtYmFyXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwiYnAtb1wiPjwvc3Bhbj5gO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtbG9hZFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgZ2V0VGh1bWJCYWNrZ3JvdW5kKC8qYWN0aXZlSXRlbSovIGN0eFswXSkpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoZGlydHkgJiAvKmFjdGl2ZUl0ZW0qLyAxKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgZ2V0VGh1bWJCYWNrZ3JvdW5kKC8qYWN0aXZlSXRlbSovIGN0eFswXSkpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0aWYgKGRpdl9vdXRybykgZGl2X291dHJvLmVuZCgxKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdGlmIChsb2NhbCkge1xuICAgIFx0XHRcdFx0ZGl2X291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdiwgZmx5LCB7IGR1cmF0aW9uOiA0ODAgfSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKCk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDExOjU3KSB7I2lmICRjbG9zaW5nfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9jayQyKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCBkaXZfaW50cm87XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWxvYWRcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGdldFRodW1iQmFja2dyb3VuZCgvKmFjdGl2ZUl0ZW0qLyBjdHhbMF0pKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKGRpcnR5ICYgLyphY3RpdmVJdGVtKi8gMSkge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIGdldFRodW1iQmFja2dyb3VuZCgvKmFjdGl2ZUl0ZW0qLyBjdHhbMF0pKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoIWRpdl9pbnRybykge1xuICAgIFx0XHRcdFx0YWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGRpdl9pbnRybyA9IGNyZWF0ZV9pbl90cmFuc2l0aW9uKGRpdiwgZmx5LCB7IGR1cmF0aW9uOiA0ODAgfSk7XG4gICAgXHRcdFx0XHRcdGRpdl9pbnRyby5zdGFydCgpO1xuICAgIFx0XHRcdFx0fSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRvOiBub29wLFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQ0KGN0eCkge1xuICAgIFx0bGV0IGlmX2Jsb2NrMF9hbmNob3I7XG4gICAgXHRsZXQgaWZfYmxvY2sxX2FuY2hvcjtcbiAgICBcdGxldCBpZl9ibG9jazAgPSAhLypsb2FkZWQqLyBjdHhbMV0gJiYgY3JlYXRlX2lmX2Jsb2NrXzEkMihjdHgpO1xuICAgIFx0bGV0IGlmX2Jsb2NrMSA9IC8qJGNsb3NpbmcqLyBjdHhbMl0gJiYgY3JlYXRlX2lmX2Jsb2NrJDIoY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdGlmX2Jsb2NrMF9hbmNob3IgPSBlbXB0eSgpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2sxX2FuY2hvciA9IGVtcHR5KCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaWZfYmxvY2swX2FuY2hvciwgYW5jaG9yKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaWZfYmxvY2sxX2FuY2hvciwgYW5jaG9yKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIFtkaXJ0eV0pIHtcbiAgICBcdFx0XHRpZiAoIS8qbG9hZGVkKi8gY3R4WzFdKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2swKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eSAmIC8qbG9hZGVkKi8gMikge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swID0gY3JlYXRlX2lmX2Jsb2NrXzEkMihjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5tKGlmX2Jsb2NrMF9hbmNob3IucGFyZW50Tm9kZSwgaWZfYmxvY2swX2FuY2hvcik7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jazApIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazAsIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swID0gbnVsbDtcbiAgICBcdFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0XHRjaGVja19vdXRyb3MoKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoLyokY2xvc2luZyovIGN0eFsyXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrMSkge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEucChjdHgsIGRpcnR5KTtcblxuICAgIFx0XHRcdFx0XHRpZiAoZGlydHkgJiAvKiRjbG9zaW5nKi8gNCkge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxID0gY3JlYXRlX2lmX2Jsb2NrJDIoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEubShpZl9ibG9jazFfYW5jaG9yLnBhcmVudE5vZGUsIGlmX2Jsb2NrMV9hbmNob3IpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRpZl9ibG9jazEuZCgxKTtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrMSA9IG51bGw7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazApO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLmQoZGV0YWNoaW5nKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goaWZfYmxvY2swX2FuY2hvcik7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmQoZGV0YWNoaW5nKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goaWZfYmxvY2sxX2FuY2hvcik7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFuY2UkNCgkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICAgIFx0bGV0ICRjbG9zaW5nO1xuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIGNsb3NpbmcsICQkdmFsdWUgPT4gJCRpbnZhbGlkYXRlKDIsICRjbG9zaW5nID0gJCR2YWx1ZSkpO1xuICAgIFx0bGV0IHsgYWN0aXZlSXRlbSB9ID0gJCRwcm9wcztcbiAgICBcdGxldCB7IGxvYWRlZCB9ID0gJCRwcm9wcztcblxuICAgIFx0JCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgXHRcdGlmICgnYWN0aXZlSXRlbScgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDAsIGFjdGl2ZUl0ZW0gPSAkJHByb3BzLmFjdGl2ZUl0ZW0pO1xuICAgIFx0XHRpZiAoJ2xvYWRlZCcgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDEsIGxvYWRlZCA9ICQkcHJvcHMubG9hZGVkKTtcbiAgICBcdH07XG5cbiAgICBcdHJldHVybiBbYWN0aXZlSXRlbSwgbG9hZGVkLCAkY2xvc2luZ107XG4gICAgfVxuXG4gICAgY2xhc3MgTG9hZGluZyBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgXHRcdHN1cGVyKCk7XG4gICAgXHRcdGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkNCwgY3JlYXRlX2ZyYWdtZW50JDQsIG5vdF9lcXVhbCwgeyBhY3RpdmVJdGVtOiAwLCBsb2FkZWQ6IDEgfSk7XG4gICAgXHR9XG4gICAgfVxuXG4gICAgLyogc3JjL2NvbXBvbmVudHMvaW1hZ2Uuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuNTUuMSAqL1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzEkMShjdHgpIHtcbiAgICBcdGxldCBpbWc7XG4gICAgXHRsZXQgaW1nX3NpemVzX3ZhbHVlO1xuICAgIFx0bGV0IGltZ19vdXRybztcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRpbWcgPSBlbGVtZW50KFwiaW1nXCIpO1xuICAgIFx0XHRcdGF0dHIoaW1nLCBcInNpemVzXCIsIGltZ19zaXplc192YWx1ZSA9IC8qb3B0cyovIGN0eFs4XS5zaXplcyB8fCBgJHsvKnNpemVzKi8gY3R4WzFdfXB4YCk7XG4gICAgXHRcdFx0YXR0cihpbWcsIFwiYWx0XCIsIC8qYWN0aXZlSXRlbSovIGN0eFs3XS5hbHQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaW1nLCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gW1xuICAgIFx0XHRcdFx0XHRhY3Rpb25fZGVzdHJveWVyKC8qYWRkU3JjKi8gY3R4WzIxXS5jYWxsKG51bGwsIGltZykpLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oaW1nLCBcImVycm9yXCIsIC8qZXJyb3JfaGFuZGxlciovIGN0eFsyN10pXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qc2l6ZXMqLyAyICYmIGltZ19zaXplc192YWx1ZSAhPT0gKGltZ19zaXplc192YWx1ZSA9IC8qb3B0cyovIGN0eFs4XS5zaXplcyB8fCBgJHsvKnNpemVzKi8gY3R4WzFdfXB4YCkpIHtcbiAgICBcdFx0XHRcdGF0dHIoaW1nLCBcInNpemVzXCIsIGltZ19zaXplc192YWx1ZSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHRpZiAoaW1nX291dHJvKSBpbWdfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0aW1nX291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGltZywgZmx5LCB7fSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpbWcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgaW1nX291dHJvKSBpbWdfb3V0cm8uZW5kKCk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDM4NDoxMCkgeyNpZiBzaG93TG9hZGVyfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9jayQxKGN0eCkge1xuICAgIFx0bGV0IGxvYWRpbmc7XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0bG9hZGluZyA9IG5ldyBMb2FkaW5nKHtcbiAgICBcdFx0XHRwcm9wczoge1xuICAgIFx0XHRcdFx0YWN0aXZlSXRlbTogLyphY3RpdmVJdGVtKi8gY3R4WzddLFxuICAgIFx0XHRcdFx0bG9hZGVkOiAvKmxvYWRlZCovIGN0eFsyXVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0Y3JlYXRlX2NvbXBvbmVudChsb2FkaW5nLiQkLmZyYWdtZW50KTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdG1vdW50X2NvbXBvbmVudChsb2FkaW5nLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGNvbnN0IGxvYWRpbmdfY2hhbmdlcyA9IHt9O1xuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qbG9hZGVkKi8gNCkgbG9hZGluZ19jaGFuZ2VzLmxvYWRlZCA9IC8qbG9hZGVkKi8gY3R4WzJdO1xuICAgIFx0XHRcdGxvYWRpbmcuJHNldChsb2FkaW5nX2NoYW5nZXMpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQobG9hZGluZywgZGV0YWNoaW5nKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkMyhjdHgpIHtcbiAgICBcdGxldCBkaXYxO1xuICAgIFx0bGV0IGRpdjA7XG4gICAgXHRsZXQgaWZfYmxvY2swX2FuY2hvcjtcbiAgICBcdGxldCBzdHlsZV90cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHsvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMF0gLyAtMiArIC8qJHpvb21EcmFnVHJhbnNsYXRlKi8gY3R4WzZdWzBdfXB4LCAkey8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVsxXSAvIC0yICsgLyokem9vbURyYWdUcmFuc2xhdGUqLyBjdHhbNl1bMV19cHgsIDApYDtcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcbiAgICBcdGxldCBpZl9ibG9jazAgPSAvKmxvYWRlZCovIGN0eFsyXSAmJiBjcmVhdGVfaWZfYmxvY2tfMSQxKGN0eCk7XG4gICAgXHRsZXQgaWZfYmxvY2sxID0gLypzaG93TG9hZGVyKi8gY3R4WzNdICYmIGNyZWF0ZV9pZl9ibG9jayQxKGN0eCk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2MSA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0ZGl2MCA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLmMoKTtcbiAgICBcdFx0XHRpZl9ibG9jazBfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdGF0dHIoZGl2MCwgXCJjbGFzc1wiLCBcImJwLWltZ1wiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJ3aWR0aFwiLCAvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYwLCBcImhlaWdodFwiLCAvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYwLCBcImJwLWRyYWdcIiwgLypwb2ludGVyRG93biovIGN0eFs0XSk7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjAsIFwiYnAtY2Fuem9vbVwiLCAvKm1heFpvb20qLyBjdHhbMTFdID4gMSAmJiAvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMF0gPCAvKm5hdHVyYWxXaWR0aCovIGN0eFsxMl0pO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYwLCBcImJhY2tncm91bmQtaW1hZ2VcIiwgZ2V0VGh1bWJCYWNrZ3JvdW5kKC8qYWN0aXZlSXRlbSovIGN0eFs3XSkpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYwLCBcInRyYW5zZm9ybVwiLCBzdHlsZV90cmFuc2Zvcm0pO1xuICAgIFx0XHRcdGF0dHIoZGl2MSwgXCJjbGFzc1wiLCBcImJwLWltZy13cmFwXCIpO1xuICAgIFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYxLCBcImJwLWNsb3NlXCIsIC8qY2xvc2luZ1doaWxlWm9vbWVkKi8gY3R4WzVdKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdjEsIGFuY2hvcik7XG4gICAgXHRcdFx0YXBwZW5kKGRpdjEsIGRpdjApO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5tKGRpdjAsIG51bGwpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYwLCBpZl9ibG9jazBfYW5jaG9yKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEubShkaXYwLCBudWxsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IFtcbiAgICBcdFx0XHRcdFx0YWN0aW9uX2Rlc3Ryb3llcigvKm9uTW91bnQqLyBjdHhbMjBdLmNhbGwobnVsbCwgZGl2MCkpLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2MSwgXCJ3aGVlbFwiLCAvKm9uV2hlZWwqLyBjdHhbMTVdKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdjEsIFwicG9pbnRlcmRvd25cIiwgLypvblBvaW50ZXJEb3duKi8gY3R4WzE2XSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcInBvaW50ZXJtb3ZlXCIsIC8qb25Qb2ludGVyTW92ZSovIGN0eFsxN10pLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2MSwgXCJwb2ludGVydXBcIiwgLypvblBvaW50ZXJVcCovIGN0eFsxOV0pLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2MSwgXCJwb2ludGVyY2FuY2VsXCIsIC8qcmVtb3ZlRXZlbnRGcm9tQ2FjaGUqLyBjdHhbMThdKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoLypsb2FkZWQqLyBjdHhbMl0pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jazApIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5WzBdICYgLypsb2FkZWQqLyA0KSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBjcmVhdGVfaWZfYmxvY2tfMSQxKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLm0oZGl2MCwgaWZfYmxvY2swX2FuY2hvcik7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jazApIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazAsIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swID0gbnVsbDtcbiAgICBcdFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0XHRjaGVja19vdXRyb3MoKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoLypzaG93TG9hZGVyKi8gY3R4WzNdKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qc2hvd0xvYWRlciovIDgpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdH1cbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMSA9IGNyZWF0ZV9pZl9ibG9jayQxKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5jKCk7XG4gICAgXHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLm0oZGl2MCwgbnVsbCk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazEsIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxID0gbnVsbDtcbiAgICBcdFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0XHRjaGVja19vdXRyb3MoKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKiRpbWFnZURpbWVuc2lvbnMqLyAxKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJ3aWR0aFwiLCAvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qJGltYWdlRGltZW5zaW9ucyovIDEpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYwLCBcImhlaWdodFwiLCAvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qcG9pbnRlckRvd24qLyAxNikge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjAsIFwiYnAtZHJhZ1wiLCAvKnBvaW50ZXJEb3duKi8gY3R4WzRdKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKm1heFpvb20sICRpbWFnZURpbWVuc2lvbnMsIG5hdHVyYWxXaWR0aCovIDYxNDUpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYwLCBcImJwLWNhbnpvb21cIiwgLyptYXhab29tKi8gY3R4WzExXSA+IDEgJiYgLyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdIDwgLypuYXR1cmFsV2lkdGgqLyBjdHhbMTJdKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKiRpbWFnZURpbWVuc2lvbnMsICR6b29tRHJhZ1RyYW5zbGF0ZSovIDY1ICYmIHN0eWxlX3RyYW5zZm9ybSAhPT0gKHN0eWxlX3RyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkey8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSAvIC0yICsgLyokem9vbURyYWdUcmFuc2xhdGUqLyBjdHhbNl1bMF19cHgsICR7LyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzFdIC8gLTIgKyAvKiR6b29tRHJhZ1RyYW5zbGF0ZSovIGN0eFs2XVsxXX1weCwgMClgKSkge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwidHJhbnNmb3JtXCIsIHN0eWxlX3RyYW5zZm9ybSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLypjbG9zaW5nV2hpbGVab29tZWQqLyAzMikge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjEsIFwiYnAtY2xvc2VcIiwgLypjbG9zaW5nV2hpbGVab29tZWQqLyBjdHhbNV0pO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazApO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCk7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2sxKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdjEpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5kKCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmQoKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0cnVuX2FsbChkaXNwb3NlKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSQzKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgJHpvb21lZDtcbiAgICBcdGxldCAkem9vbURyYWdUcmFuc2xhdGU7XG4gICAgXHRsZXQgJGNsb3Npbmc7XG4gICAgXHRsZXQgJGltYWdlRGltZW5zaW9ucztcbiAgICBcdGNvbXBvbmVudF9zdWJzY3JpYmUoJCRzZWxmLCBjbG9zaW5nLCAkJHZhbHVlID0+ICQkaW52YWxpZGF0ZSgyNiwgJGNsb3NpbmcgPSAkJHZhbHVlKSk7XG4gICAgXHRsZXQgeyBwcm9wcyB9ID0gJCRwcm9wcztcbiAgICBcdGxldCB7IHNtYWxsU2NyZWVuIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IHsgYWN0aXZlSXRlbSwgb3B0cywgcHJldiwgbmV4dCwgem9vbWVkLCBjb250YWluZXIgfSA9IHByb3BzO1xuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIHpvb21lZCwgdmFsdWUgPT4gJCRpbnZhbGlkYXRlKDI1LCAkem9vbWVkID0gdmFsdWUpKTtcbiAgICBcdGxldCBtYXhab29tID0gYWN0aXZlSXRlbS5tYXhab29tIHx8IG9wdHMubWF4Wm9vbSB8fCAxMDtcbiAgICBcdGxldCBjYWxjdWxhdGVkRGltZW5zaW9ucyA9IHByb3BzLmNhbGN1bGF0ZURpbWVuc2lvbnMoYWN0aXZlSXRlbSk7XG5cbiAgICBcdC8qKiB2YWx1ZSBvZiBzaXplcyBhdHRyaWJ1dGUgKi9cbiAgICBcdGxldCBzaXplcyA9IGNhbGN1bGF0ZWREaW1lbnNpb25zWzBdO1xuXG4gICAgXHQvKiogdHJhY2tzIGxvYWQgc3RhdGUgb2YgaW1hZ2UgKi9cbiAgICBcdGxldCBsb2FkZWQsIHNob3dMb2FkZXI7XG5cbiAgICBcdC8qKiBzdG9yZXMgcGluY2ggaW5mbyBpZiBtdWx0aXBsZSB0b3VjaCBldmVudHMgYWN0aXZlICovXG4gICAgXHRsZXQgcGluY2hEZXRhaWxzO1xuXG4gICAgXHQvKiogaW1hZ2UgaHRtbCBlbGVtZW50ICguYnAtaW1nKSAqL1xuICAgIFx0bGV0IGJwSW1nO1xuXG4gICAgXHQvKiogdHJhY2sgZGlzdGFuY2UgZm9yIHBpbmNoIGV2ZW50cyAqL1xuICAgIFx0bGV0IHByZXZEaWZmID0gMDtcblxuICAgIFx0bGV0IHBvaW50ZXJEb3duLCBoYXNEcmFnZ2VkO1xuICAgIFx0bGV0IGRyYWdTdGFydFgsIGRyYWdTdGFydFk7XG5cbiAgICBcdC8qKiB6b29tRHJhZ1RyYW5zbGF0ZSB2YWx1ZXMgb24gc3RhcnQgb2YgZHJhZyAqL1xuICAgIFx0bGV0IGRyYWdTdGFydFRyYW5zbGF0ZVgsIGRyYWdTdGFydFRyYW5zbGF0ZVk7XG5cbiAgICBcdC8qKiBpZiB0cnVlLCBhZGRzIGNsYXNzIHRvIC5icC13cmFwIHRvIGF2b2lkIGltYWdlIGNyb3BwaW5nICovXG4gICAgXHRsZXQgY2xvc2luZ1doaWxlWm9vbWVkO1xuXG4gICAgXHRjb25zdCBuYXR1cmFsV2lkdGggPSArYWN0aXZlSXRlbS53aWR0aDtcblxuICAgIFx0LyoqIHN0b3JlIHBvc2l0aW9ucyBmb3IgZHJhZyBpbmVydGlhICovXG4gICAgXHRjb25zdCBkcmFnUG9zaXRpb25zID0gW107XG5cbiAgICBcdC8qKiBjYWNoZSBwb2ludGVyIGV2ZW50cyB0byBoYW5kbGUgcGluY2ggKi9cbiAgICBcdGNvbnN0IHBvaW50ZXJDYWNoZSA9IG5ldyBNYXAoKTtcblxuICAgIFx0LyoqIHR3ZWVuIHRvIGNvbnRyb2wgaW1hZ2Ugc2l6ZSAqL1xuICAgIFx0Y29uc3QgaW1hZ2VEaW1lbnNpb25zID0gdHdlZW5lZChjYWxjdWxhdGVkRGltZW5zaW9ucywgZGVmYXVsdFR3ZWVuT3B0aW9ucyg0MDApKTtcblxuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIGltYWdlRGltZW5zaW9ucywgdmFsdWUgPT4gJCRpbnZhbGlkYXRlKDAsICRpbWFnZURpbWVuc2lvbnMgPSB2YWx1ZSkpO1xuXG4gICAgXHQvKiogdHJhbnNsYXRlIHRyYW5zZm9ybSBmb3IgcG9pbnRlckRvd24gKi9cbiAgICBcdGNvbnN0IHpvb21EcmFnVHJhbnNsYXRlID0gdHdlZW5lZChbMCwgMF0sIGRlZmF1bHRUd2Vlbk9wdGlvbnMoNDAwKSk7XG5cbiAgICBcdGNvbXBvbmVudF9zdWJzY3JpYmUoJCRzZWxmLCB6b29tRHJhZ1RyYW5zbGF0ZSwgdmFsdWUgPT4gJCRpbnZhbGlkYXRlKDYsICR6b29tRHJhZ1RyYW5zbGF0ZSA9IHZhbHVlKSk7XG5cbiAgICBcdC8qKiBjYWxjdWxhdGUgdHJhbnNsYXRlIHBvc2l0aW9uIHdpdGggYm91bmRzICovXG4gICAgXHRjb25zdCBib3VuZFRyYW5zbGF0ZVZhbHVlcyA9IChbeCwgeV0sIG5ld0RpbWVuc2lvbnMgPSAkaW1hZ2VEaW1lbnNpb25zKSA9PiB7XG4gICAgXHRcdC8vIGltYWdlIGRyYWcgdHJhbnNsYXRlIGJvdW5kc1xuICAgIFx0XHRjb25zdCBtYXhUcmFuc2xhdGVYID0gKG5ld0RpbWVuc2lvbnNbMF0gLSBjb250YWluZXIudykgLyAyO1xuXG4gICAgXHRcdGNvbnN0IG1heFRyYW5zbGF0ZVkgPSAobmV3RGltZW5zaW9uc1sxXSAtIGNvbnRhaW5lci5oKSAvIDI7XG5cbiAgICBcdFx0Ly8geCBtYXggZHJhZ1xuICAgIFx0XHRpZiAobWF4VHJhbnNsYXRlWCA8IDApIHtcbiAgICBcdFx0XHR4ID0gMDtcbiAgICBcdFx0fSBlbHNlIGlmICh4ID4gbWF4VHJhbnNsYXRlWCkge1xuICAgIFx0XHRcdGlmIChzbWFsbFNjcmVlbikge1xuICAgIFx0XHRcdFx0Ly8gYm91bmQgdG8gbGVmdCBzaWRlIChhbGxvdyBzbGlnaHQgb3ZlciBkcmFnKVxuICAgIFx0XHRcdFx0eCA9IHBvaW50ZXJEb3duXG4gICAgXHRcdFx0XHQ/IG1heFRyYW5zbGF0ZVggKyAoeCAtIG1heFRyYW5zbGF0ZVgpIC8gMTBcbiAgICBcdFx0XHRcdDogbWF4VHJhbnNsYXRlWDtcblxuICAgIFx0XHRcdFx0Ly8gcHJldmlvdXMgaXRlbSBpZiBkcmFnZ2VkIHBhc3QgdGhyZXNob2xkXG4gICAgXHRcdFx0XHRpZiAoeCA+IG1heFRyYW5zbGF0ZVggKyAyMCkge1xuICAgIFx0XHRcdFx0XHQvLyBwb2ludGVyZG93biA9IHVuZGVmaW5lZCB0byBzdG9wIHBvaW50ZXJtb3ZlIGZyb20gcnVubmluZyBhZ2FpblxuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBwcmV2KCkpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHR4ID0gbWF4VHJhbnNsYXRlWDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0gZWxzZSBpZiAoeCA8IC1tYXhUcmFuc2xhdGVYKSB7XG4gICAgXHRcdFx0Ly8gYm91bmQgdG8gcmlnaHQgc2lkZSAoYWxsb3cgc2xpZ2h0IG92ZXIgZHJhZylcbiAgICBcdFx0XHRpZiAoc21hbGxTY3JlZW4pIHtcbiAgICBcdFx0XHRcdHggPSBwb2ludGVyRG93blxuICAgIFx0XHRcdFx0PyAtbWF4VHJhbnNsYXRlWCAtICgtbWF4VHJhbnNsYXRlWCAtIHgpIC8gMTBcbiAgICBcdFx0XHRcdDogLW1heFRyYW5zbGF0ZVg7XG5cbiAgICBcdFx0XHRcdC8vIG5leHQgaXRlbSBpZiBkcmFnZ2VkIHBhc3QgdGhyZXNob2xkXG4gICAgXHRcdFx0XHRpZiAoeCA8IC1tYXhUcmFuc2xhdGVYIC0gMjApIHtcbiAgICBcdFx0XHRcdFx0Ly8gcG9pbnRlcmRvd24gPSB1bmRlZmluZWQgdG8gc3RvcCBwb2ludGVybW92ZSBmcm9tIHJ1bm5pbmcgYWdhaW5cbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gbmV4dCgpKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0eCA9IC1tYXhUcmFuc2xhdGVYO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHkgbWF4IGRyYWdcbiAgICBcdFx0aWYgKG1heFRyYW5zbGF0ZVkgPCAwKSB7XG4gICAgXHRcdFx0eSA9IDA7XG4gICAgXHRcdH0gZWxzZSBpZiAoeSA+IG1heFRyYW5zbGF0ZVkpIHtcbiAgICBcdFx0XHR5ID0gbWF4VHJhbnNsYXRlWTtcbiAgICBcdFx0fSBlbHNlIGlmICh5IDwgLW1heFRyYW5zbGF0ZVkpIHtcbiAgICBcdFx0XHR5ID0gLW1heFRyYW5zbGF0ZVk7XG4gICAgXHRcdH1cblxuICAgIFx0XHRyZXR1cm4gW3gsIHldO1xuICAgIFx0fTtcblxuICAgIFx0LyoqIHVwZGF0ZXMgem9vbSBsZXZlbCBpbiBvciBvdXQgYmFzZWQgb24gYW10IHZhbHVlICovXG4gICAgXHRmdW5jdGlvbiBjaGFuZ2Vab29tKGFtdCA9IG1heFpvb20sIGUpIHtcbiAgICBcdFx0aWYgKCRjbG9zaW5nKSB7XG4gICAgXHRcdFx0cmV0dXJuO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Y29uc3QgbWF4V2lkdGggPSBjYWxjdWxhdGVkRGltZW5zaW9uc1swXSAqIG1heFpvb207XG4gICAgXHRcdGxldCBuZXdXaWR0aCA9ICRpbWFnZURpbWVuc2lvbnNbMF0gKyAkaW1hZ2VEaW1lbnNpb25zWzBdICogYW10O1xuICAgIFx0XHRsZXQgbmV3SGVpZ2h0ID0gJGltYWdlRGltZW5zaW9uc1sxXSArICRpbWFnZURpbWVuc2lvbnNbMV0gKiBhbXQ7XG5cbiAgICBcdFx0aWYgKGFtdCA+IDApIHtcbiAgICBcdFx0XHRpZiAobmV3V2lkdGggPiBtYXhXaWR0aCkge1xuICAgIFx0XHRcdFx0Ly8gcmVxdWVzdGluZyBzaXplIGxhcmdlIHRoYW4gbWF4IHpvb21cbiAgICBcdFx0XHRcdG5ld1dpZHRoID0gbWF4V2lkdGg7XG5cbiAgICBcdFx0XHRcdG5ld0hlaWdodCA9IGNhbGN1bGF0ZWREaW1lbnNpb25zWzFdICogbWF4Wm9vbTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAobmV3V2lkdGggPiBuYXR1cmFsV2lkdGgpIHtcbiAgICBcdFx0XHRcdC8vIGlmIHJlcXVlc3Rpbmcgem9vbSBsYXJnZXIgdGhhbiBuYXR1cmFsIHNpemVcbiAgICBcdFx0XHRcdG5ld1dpZHRoID0gbmF0dXJhbFdpZHRoO1xuXG4gICAgXHRcdFx0XHRuZXdIZWlnaHQgPSArYWN0aXZlSXRlbS5oZWlnaHQ7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9IGVsc2UgaWYgKG5ld1dpZHRoIDwgY2FsY3VsYXRlZERpbWVuc2lvbnNbMF0pIHtcbiAgICBcdFx0XHQvLyBpZiByZXF1ZXN0aW5nIGltYWdlIHNtYWxsZXIgdGhhbiBzdGFydGluZyBzaXplXG4gICAgXHRcdFx0aW1hZ2VEaW1lbnNpb25zLnNldChjYWxjdWxhdGVkRGltZW5zaW9ucyk7XG5cbiAgICBcdFx0XHRyZXR1cm4gem9vbURyYWdUcmFuc2xhdGUuc2V0KFswLCAwXSk7XG4gICAgXHRcdH1cblxuICAgIFx0XHRsZXQgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBicEltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIFx0XHQvLyBkaXN0YW5jZSBjbGlja2VkIGZyb20gY2VudGVyIG9mIGltYWdlXG4gICAgXHRcdGNvbnN0IG9mZnNldFggPSBlID8gZS5jbGllbnRYIC0geCAtIHdpZHRoIC8gMiA6IDA7XG5cbiAgICBcdFx0Y29uc3Qgb2Zmc2V0WSA9IGUgPyBlLmNsaWVudFkgLSB5IC0gaGVpZ2h0IC8gMiA6IDA7XG4gICAgXHRcdHggPSAtb2Zmc2V0WCAqIChuZXdXaWR0aCAvIHdpZHRoKSArIG9mZnNldFg7XG4gICAgXHRcdHkgPSAtb2Zmc2V0WSAqIChuZXdIZWlnaHQgLyBoZWlnaHQpICsgb2Zmc2V0WTtcbiAgICBcdFx0Y29uc3QgbmV3RGltZW5zaW9ucyA9IFtuZXdXaWR0aCwgbmV3SGVpZ2h0XTtcblxuICAgIFx0XHQvLyBzZXQgbmV3IGRpbWVuc2lvbnMgYW5kIHVwZGF0ZSBzaXplcyBwcm9wZXJ0eVxuICAgIFx0XHRpbWFnZURpbWVuc2lvbnMuc2V0KG5ld0RpbWVuc2lvbnMpLnRoZW4oKCkgPT4ge1xuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSgxLCBzaXplcyA9IE1hdGgucm91bmQoTWF0aC5tYXgoc2l6ZXMsIG5ld1dpZHRoKSkpO1xuICAgIFx0XHR9KTtcblxuICAgIFx0XHQvLyB1cGRhdGUgdHJhbnNsYXRlIHZhbHVlXG4gICAgXHRcdHpvb21EcmFnVHJhbnNsYXRlLnNldChib3VuZFRyYW5zbGF0ZVZhbHVlcyhbJHpvb21EcmFnVHJhbnNsYXRlWzBdICsgeCwgJHpvb21EcmFnVHJhbnNsYXRlWzFdICsgeV0sIG5ld0RpbWVuc2lvbnMpKTtcbiAgICBcdH1cblxuICAgIFx0Ly8gYWxsb3cgem9vbSB0byBiZSByZWFkIC8gc2V0IGV4dGVybmFsbHlcbiAgICBcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY3RpdmVJdGVtLCAnem9vbScsIHtcbiAgICBcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuICAgIFx0XHRnZXQ6ICgpID0+ICR6b29tZWQsXG4gICAgXHRcdHNldDogYm9vbCA9PiBjaGFuZ2Vab29tKGJvb2wgPyBtYXhab29tIDogLW1heFpvb20pXG4gICAgXHR9KTtcblxuICAgIFx0Y29uc3Qgb25XaGVlbCA9IGUgPT4ge1xuICAgIFx0XHQvLyByZXR1cm4gaWYgc2Nyb2xsaW5nIHBhc3QgaW5saW5lIGdhbGxlcnkgdy8gd2hlZWxcbiAgICBcdFx0aWYgKG9wdHMuaW5saW5lICYmICEkem9vbWVkKSB7XG4gICAgXHRcdFx0cmV0dXJuO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gcHJldmVudERlZmF1bHQgdG8gc3RvcCBzY3JvbGxpbmcgb24gem9vbWVkIGlubGluZSBpbWFnZVxuICAgIFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBcdFx0Ly8gY2hhbmdlIHpvb20gb24gd2hlZWxcbiAgICBcdFx0Y2hhbmdlWm9vbShlLmRlbHRhWSAvIC0zMDAsIGUpO1xuICAgIFx0fTtcblxuICAgIFx0LyoqIG9uIGRyYWcgc3RhcnQsIHN0b3JlIGluaXRpYWwgcG9zaXRpb24gYW5kIGltYWdlIHRyYW5zbGF0ZSB2YWx1ZXMgKi9cbiAgICBcdGNvbnN0IG9uUG9pbnRlckRvd24gPSBlID0+IHtcbiAgICBcdFx0Ly8gZG9uJ3QgcnVuIGlmIHJpZ2h0IGNsaWNrXG4gICAgXHRcdGlmIChlLmJ1dHRvbiAhPT0gMikge1xuICAgIFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSB0cnVlKTtcbiAgICBcdFx0XHRwb2ludGVyQ2FjaGUuc2V0KGUucG9pbnRlcklkLCBlKTtcbiAgICBcdFx0XHRkcmFnU3RhcnRYID0gZS5jbGllbnRYO1xuICAgIFx0XHRcdGRyYWdTdGFydFkgPSBlLmNsaWVudFk7XG4gICAgXHRcdFx0ZHJhZ1N0YXJ0VHJhbnNsYXRlWCA9ICR6b29tRHJhZ1RyYW5zbGF0ZVswXTtcbiAgICBcdFx0XHRkcmFnU3RhcnRUcmFuc2xhdGVZID0gJHpvb21EcmFnVHJhbnNsYXRlWzFdO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHQvKiogb24gZHJhZywgdXBkYXRlIGltYWdlIHRyYW5zbGF0ZSB2YWwgKi9cbiAgICBcdGNvbnN0IG9uUG9pbnRlck1vdmUgPSBlID0+IHtcbiAgICBcdFx0aWYgKHBvaW50ZXJDYWNoZS5zaXplID4gMSkge1xuICAgIFx0XHRcdC8vIGlmIG11bHRpcGxlIHBvaW50ZXIgZXZlbnRzLCBwYXNzIHRvIGhhbmRsZVBpbmNoIGZ1bmN0aW9uXG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gZmFsc2UpO1xuXG4gICAgXHRcdFx0cmV0dXJuIG9wdHMubm9QaW5jaD8uKGNvbnRhaW5lci5lbCkgfHwgaGFuZGxlUGluY2goZSk7XG4gICAgXHRcdH1cblxuICAgIFx0XHRpZiAoIXBvaW50ZXJEb3duKSB7XG4gICAgXHRcdFx0cmV0dXJuO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0bGV0IHggPSBlLmNsaWVudFg7XG4gICAgXHRcdGxldCB5ID0gZS5jbGllbnRZO1xuXG4gICAgXHRcdC8vIHN0b3JlIHBvc2l0aW9ucyBpbiBkcmFnUG9zaXRpb25zIGZvciBpbmVydGlhXG4gICAgXHRcdC8vIHNldCBoYXNEcmFnZ2VkIGlmID4gMiBwb2ludGVyIG1vdmUgZXZlbnRzXG4gICAgXHRcdGhhc0RyYWdnZWQgPSBkcmFnUG9zaXRpb25zLnB1c2goeyB4LCB5IH0pID4gMjtcblxuICAgIFx0XHQvLyBvdmVyYWxsIGRyYWcgZGlmZiBmcm9tIHN0YXJ0IGxvY2F0aW9uXG4gICAgXHRcdHggPSB4IC0gZHJhZ1N0YXJ0WDtcblxuICAgIFx0XHR5ID0geSAtIGRyYWdTdGFydFk7XG5cbiAgICBcdFx0Ly8gaGFuZGxlIHVuem9vbWVkIGxlZnQgLyByaWdodCAvIHVwIHN3aXBlc1xuICAgIFx0XHRpZiAoISR6b29tZWQpIHtcbiAgICBcdFx0XHQvLyBjbG9zZSBpZiBzd2lwZSB1cFxuICAgIFx0XHRcdGlmICh5IDwgLTkwKSB7XG4gICAgXHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSAhb3B0cy5ub0Nsb3NlICYmIHByb3BzLmNsb3NlKCkpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdC8vIG9ubHkgaGFuZGxlIGxlZnQgLyByaWdodCBpZiBub3Qgc3dpcGluZyB2ZXJ0aWNhbGx5XG4gICAgXHRcdFx0aWYgKE1hdGguYWJzKHkpIDwgMzApIHtcbiAgICBcdFx0XHRcdC8vIHByZXZpb3VzIGlmIHN3aXBlIGxlZnRcbiAgICBcdFx0XHRcdGlmICh4ID4gNDApIHtcbiAgICBcdFx0XHRcdFx0Ly8gcG9pbnRlcmRvd24gPSB1bmRlZmluZWQgdG8gc3RvcCBwb2ludGVybW92ZSBmcm9tIHJ1bm5pbmcgYWdhaW5cbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gcHJldigpKTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0Ly8gbmV4dCBpZiBzd2lwZSByaWdodFxuICAgIFx0XHRcdFx0aWYgKHggPCAtNDApIHtcbiAgICBcdFx0XHRcdFx0Ly8gcG9pbnRlcmRvd24gPSB1bmRlZmluZWQgdG8gc3RvcCBwb2ludGVybW92ZSBmcm9tIHJ1bm5pbmcgYWdhaW5cbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gbmV4dCgpKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBpbWFnZSBkcmFnIHdoZW4gem9vbWVkXG4gICAgXHRcdGlmICgkem9vbWVkICYmIGhhc0RyYWdnZWQgJiYgISRjbG9zaW5nKSB7XG4gICAgXHRcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KGJvdW5kVHJhbnNsYXRlVmFsdWVzKFtkcmFnU3RhcnRUcmFuc2xhdGVYICsgeCwgZHJhZ1N0YXJ0VHJhbnNsYXRlWSArIHldKSwgeyBkdXJhdGlvbjogMCB9KTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgaGFuZGxlUGluY2ggPSBlID0+IHtcbiAgICBcdFx0Ly8gdXBkYXRlIGV2ZW50IGluIGNhY2hlIGFuZCBnZXQgdmFsdWVzXG4gICAgXHRcdGNvbnN0IFtwMSwgcDJdID0gcG9pbnRlckNhY2hlLnNldChlLnBvaW50ZXJJZCwgZSkudmFsdWVzKCk7XG5cbiAgICBcdFx0Ly8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRlcnNcbiAgICBcdFx0Y29uc3QgZHggPSBwMS5jbGllbnRYIC0gcDIuY2xpZW50WDtcblxuICAgIFx0XHRjb25zdCBkeSA9IHAxLmNsaWVudFkgLSBwMi5jbGllbnRZO1xuICAgIFx0XHRjb25zdCBjdXJEaWZmID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuXG4gICAgXHRcdC8vIGNhY2hlIHRoZSBvcmlnaW5hbCBwaW5jaCBjZW50ZXJcbiAgICBcdFx0cGluY2hEZXRhaWxzID0gcGluY2hEZXRhaWxzIHx8IHtcbiAgICBcdFx0XHRjbGllbnRYOiAocDEuY2xpZW50WCArIHAyLmNsaWVudFgpIC8gMixcbiAgICBcdFx0XHRjbGllbnRZOiAocDEuY2xpZW50WSArIHAyLmNsaWVudFkpIC8gMlxuICAgIFx0XHR9O1xuXG4gICAgXHRcdC8vIHNjYWxlIGltYWdlXG4gICAgXHRcdGNoYW5nZVpvb20oKChwcmV2RGlmZiB8fCBjdXJEaWZmKSAtIGN1ckRpZmYpIC8gLTM1LCBwaW5jaERldGFpbHMpO1xuXG4gICAgXHRcdC8vIENhY2hlIHRoZSBkaXN0YW5jZSBmb3IgdGhlIG5leHQgbW92ZSBldmVudFxuICAgIFx0XHRwcmV2RGlmZiA9IGN1ckRpZmY7XG4gICAgXHR9O1xuXG4gICAgXHQvKiogcmVtb3ZlIGV2ZW50IGZyb20gcG9pbnRlciBldmVudCBjYWNoZSAqL1xuICAgIFx0Y29uc3QgcmVtb3ZlRXZlbnRGcm9tQ2FjaGUgPSBlID0+IHBvaW50ZXJDYWNoZS5kZWxldGUoZS5wb2ludGVySWQpO1xuXG4gICAgXHRmdW5jdGlvbiBvblBvaW50ZXJVcChlKSB7XG4gICAgXHRcdHJlbW92ZUV2ZW50RnJvbUNhY2hlKGUpO1xuXG4gICAgXHRcdGlmIChwaW5jaERldGFpbHMpIHtcbiAgICBcdFx0XHQvLyByZXNldCBwcmV2RGlmZiBhbmQgY2xlYXIgcG9pbnRlckRvd24gdG8gdHJpZ2dlciByZXR1cm4gYmVsb3dcbiAgICBcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBwcmV2RGlmZiA9IDApO1xuXG4gICAgXHRcdFx0Ly8gc2V0IHBpbmNoRGV0YWlscyB0byBudWxsIGFmdGVyIGxhc3QgZmluZ2VyIGxpZnRzXG4gICAgXHRcdFx0cGluY2hEZXRhaWxzID0gcG9pbnRlckNhY2hlLnNpemUgPyBwaW5jaERldGFpbHMgOiBudWxsO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gbWFrZSBzdXJlIHBvaW50ZXIgZXZlbnRzIGRvbid0IGNhcnJ5IG92ZXIgdG8gbmV4dCBpbWFnZVxuICAgIFx0XHRpZiAoIXBvaW50ZXJEb3duKSB7XG4gICAgXHRcdFx0cmV0dXJuO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0JCRpbnZhbGlkYXRlKDQsIHBvaW50ZXJEb3duID0gZmFsc2UpO1xuXG4gICAgXHRcdC8vIGNsb3NlIGlmIG92ZXJsYXkgaXMgY2xpY2tlZFxuICAgIFx0XHRpZiAoZS50YXJnZXQgPT09IHRoaXMgJiYgIW9wdHMubm9DbG9zZSkge1xuICAgIFx0XHRcdHJldHVybiBwcm9wcy5jbG9zZSgpO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gYWRkIGRyYWcgaW5lcnRpYSAvIHNuYXAgYmFjayB0byBib3VuZHNcbiAgICBcdFx0aWYgKGhhc0RyYWdnZWQpIHtcbiAgICBcdFx0XHRjb25zdCBbcG9zT25lLCBwb3NUd28sIHBvc1RocmVlXSA9IGRyYWdQb3NpdGlvbnMuc2xpY2UoLTMpO1xuICAgIFx0XHRcdGNvbnN0IHhEaWZmID0gcG9zVHdvLnggLSBwb3NUaHJlZS54O1xuICAgIFx0XHRcdGNvbnN0IHlEaWZmID0gcG9zVHdvLnkgLSBwb3NUaHJlZS55O1xuXG4gICAgXHRcdFx0aWYgKE1hdGguaHlwb3QoeERpZmYsIHlEaWZmKSA+IDUpIHtcbiAgICBcdFx0XHRcdHpvb21EcmFnVHJhbnNsYXRlLnNldChib3VuZFRyYW5zbGF0ZVZhbHVlcyhbXG4gICAgXHRcdFx0XHRcdCR6b29tRHJhZ1RyYW5zbGF0ZVswXSAtIChwb3NPbmUueCAtIHBvc1RocmVlLngpICogNSxcbiAgICBcdFx0XHRcdFx0JHpvb21EcmFnVHJhbnNsYXRlWzFdIC0gKHBvc09uZS55IC0gcG9zVGhyZWUueSkgKiA1XG4gICAgXHRcdFx0XHRdKSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9IGVsc2UgaWYgKCFvcHRzLm9uSW1hZ2VDbGljaz8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSkpIHtcbiAgICBcdFx0XHRjaGFuZ2Vab29tKCR6b29tZWQgPyAtbWF4Wm9vbSA6IG1heFpvb20sIGUpO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gcmVzZXQgcG9pbnRlciBzdGF0ZXNcbiAgICBcdFx0aGFzRHJhZ2dlZCA9IGZhbHNlO1xuXG4gICAgXHRcdC8vIHJlc2V0IGRyYWdQb3NpdGlvbnNcbiAgICBcdFx0ZHJhZ1Bvc2l0aW9ucy5sZW5ndGggPSAwO1xuICAgIFx0fVxuXG4gICAgXHRjb25zdCBvbk1vdW50ID0gbm9kZSA9PiB7XG4gICAgXHRcdGJwSW1nID0gbm9kZTtcblxuICAgIFx0XHQvLyBoYW5kbGUgZ2xvYmFsVGhpcyByZXNpemVcbiAgICBcdFx0cHJvcHMuc2V0UmVzaXplRnVuYygoKSA9PiB7XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDI0LCBjYWxjdWxhdGVkRGltZW5zaW9ucyA9IHByb3BzLmNhbGN1bGF0ZURpbWVuc2lvbnMoYWN0aXZlSXRlbSkpO1xuXG4gICAgXHRcdFx0Ly8gYWRqdXN0IGltYWdlIHNpemUgLyB6b29tIG9uIHJlc2l6ZSwgYnV0IG5vdCBvbiBtb2JpbGUgYmVjYXVzZVxuICAgIFx0XHRcdC8vIHNvbWUgYnJvd3NlcnMgKGlvcyBzYWZhcmkgMTUpIGNvbnN0YW50bHkgcmVzaXplIHNjcmVlbiBvbiBkcmFnXG4gICAgXHRcdFx0aWYgKG9wdHMuaW5saW5lIHx8ICFzbWFsbFNjcmVlbikge1xuICAgIFx0XHRcdFx0aW1hZ2VEaW1lbnNpb25zLnNldChjYWxjdWxhdGVkRGltZW5zaW9ucyk7XG4gICAgXHRcdFx0XHR6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoWzAsIDBdKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRcdC8vIGRlY29kZSBpbml0aWFsIGltYWdlIGJlZm9yZSByZW5kZXJpbmdcbiAgICBcdFx0cHJvcHMubG9hZEltYWdlKGFjdGl2ZUl0ZW0pLnRoZW4oKCkgPT4ge1xuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSgyLCBsb2FkZWQgPSB0cnVlKTtcbiAgICBcdFx0XHRwcm9wcy5wcmVsb2FkTmV4dCgpO1xuICAgIFx0XHR9KTtcblxuICAgIFx0XHQvLyBzaG93IGxvYWRpbmcgaW5kaWNhdG9yIGlmIG5lZWRlZFxuICAgIFx0XHRzZXRUaW1lb3V0KFxuICAgIFx0XHRcdCgpID0+IHtcbiAgICBcdFx0XHRcdCQkaW52YWxpZGF0ZSgzLCBzaG93TG9hZGVyID0gIWxvYWRlZCk7XG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHQyNTBcbiAgICBcdFx0KTtcbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IGFkZFNyYyA9IG5vZGUgPT4ge1xuICAgIFx0XHRhZGRBdHRyaWJ1dGVzKG5vZGUsIGFjdGl2ZUl0ZW0uYXR0cik7XG4gICAgXHRcdG5vZGUuc3Jjc2V0ID0gYWN0aXZlSXRlbS5pbWc7XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBlcnJvcl9oYW5kbGVyID0gZXJyb3IgPT4gb3B0cy5vbkVycm9yPy4oY29udGFpbmVyLCBhY3RpdmVJdGVtLCBlcnJvcik7XG5cbiAgICBcdCQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIFx0XHRcbiAgICBcdFx0aWYgKCdzbWFsbFNjcmVlbicgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDIzLCBzbWFsbFNjcmVlbiA9ICQkcHJvcHMuc21hbGxTY3JlZW4pO1xuICAgIFx0fTtcblxuICAgIFx0JCRzZWxmLiQkLnVwZGF0ZSA9ICgpID0+IHtcbiAgICBcdFx0aWYgKCQkc2VsZi4kJC5kaXJ0eVswXSAmIC8qJGltYWdlRGltZW5zaW9ucywgY2FsY3VsYXRlZERpbWVuc2lvbnMqLyAxNjc3NzIxNykge1xuICAgIFx0XHRcdHpvb21lZC5zZXQoJGltYWdlRGltZW5zaW9uc1swXSAtIDEwID4gY2FsY3VsYXRlZERpbWVuc2lvbnNbMF0pO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0aWYgKCQkc2VsZi4kJC5kaXJ0eVswXSAmIC8qJGNsb3NpbmcsICR6b29tZWQsIGNhbGN1bGF0ZWREaW1lbnNpb25zKi8gMTE3NDQwNTEyKSB7XG4gICAgXHRcdFx0Ly8gaWYgem9vbWVkIHdoaWxlIGNsb3NpbmcsIHpvb20gb3V0IGltYWdlIGFuZCBhZGQgY2xhc3NcbiAgICBcdFx0XHQvLyB0byBjaGFuZ2UgY29udGFpbiB2YWx1ZSBvbiAuYnAtd3JhcCB0byBhdm9pZCBjcm9wcGluZ1xuICAgIFx0XHRcdGlmICgkY2xvc2luZyAmJiAkem9vbWVkICYmICFvcHRzLmludHJvKSB7XG4gICAgXHRcdFx0XHRjb25zdCBjbG9zZVR3ZWVuT3B0cyA9IGRlZmF1bHRUd2Vlbk9wdGlvbnMoNDgwKTtcbiAgICBcdFx0XHRcdHpvb21EcmFnVHJhbnNsYXRlLnNldChbMCwgMF0sIGNsb3NlVHdlZW5PcHRzKTtcbiAgICBcdFx0XHRcdGltYWdlRGltZW5zaW9ucy5zZXQoY2FsY3VsYXRlZERpbWVuc2lvbnMsIGNsb3NlVHdlZW5PcHRzKTtcbiAgICBcdFx0XHRcdCQkaW52YWxpZGF0ZSg1LCBjbG9zaW5nV2hpbGVab29tZWQgPSB0cnVlKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdHJldHVybiBbXG4gICAgXHRcdCRpbWFnZURpbWVuc2lvbnMsXG4gICAgXHRcdHNpemVzLFxuICAgIFx0XHRsb2FkZWQsXG4gICAgXHRcdHNob3dMb2FkZXIsXG4gICAgXHRcdHBvaW50ZXJEb3duLFxuICAgIFx0XHRjbG9zaW5nV2hpbGVab29tZWQsXG4gICAgXHRcdCR6b29tRHJhZ1RyYW5zbGF0ZSxcbiAgICBcdFx0YWN0aXZlSXRlbSxcbiAgICBcdFx0b3B0cyxcbiAgICBcdFx0em9vbWVkLFxuICAgIFx0XHRjb250YWluZXIsXG4gICAgXHRcdG1heFpvb20sXG4gICAgXHRcdG5hdHVyYWxXaWR0aCxcbiAgICBcdFx0aW1hZ2VEaW1lbnNpb25zLFxuICAgIFx0XHR6b29tRHJhZ1RyYW5zbGF0ZSxcbiAgICBcdFx0b25XaGVlbCxcbiAgICBcdFx0b25Qb2ludGVyRG93bixcbiAgICBcdFx0b25Qb2ludGVyTW92ZSxcbiAgICBcdFx0cmVtb3ZlRXZlbnRGcm9tQ2FjaGUsXG4gICAgXHRcdG9uUG9pbnRlclVwLFxuICAgIFx0XHRvbk1vdW50LFxuICAgIFx0XHRhZGRTcmMsXG4gICAgXHRcdHByb3BzLFxuICAgIFx0XHRzbWFsbFNjcmVlbixcbiAgICBcdFx0Y2FsY3VsYXRlZERpbWVuc2lvbnMsXG4gICAgXHRcdCR6b29tZWQsXG4gICAgXHRcdCRjbG9zaW5nLFxuICAgIFx0XHRlcnJvcl9oYW5kbGVyXG4gICAgXHRdO1xuICAgIH1cblxuICAgIGNsYXNzIEltYWdlIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcbiAgICBcdFx0aW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQzLCBjcmVhdGVfZnJhZ21lbnQkMywgbm90X2VxdWFsLCB7IHByb3BzOiAyMiwgc21hbGxTY3JlZW46IDIzIH0sIG51bGwsIFstMSwgLTFdKTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKiBzcmMvY29tcG9uZW50cy9pZnJhbWUuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuNTUuMSAqL1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDIoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGlmcmFtZTtcbiAgICBcdGxldCBsb2FkaW5nO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuXG4gICAgXHRsb2FkaW5nID0gbmV3IExvYWRpbmcoe1xuICAgIFx0XHRcdHByb3BzOiB7XG4gICAgXHRcdFx0XHRhY3RpdmVJdGVtOiAvKmFjdGl2ZUl0ZW0qLyBjdHhbMl0sXG4gICAgXHRcdFx0XHRsb2FkZWQ6IC8qbG9hZGVkKi8gY3R4WzBdXG4gICAgXHRcdFx0fVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGlmcmFtZSA9IGVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgXHRcdFx0Y3JlYXRlX2NvbXBvbmVudChsb2FkaW5nLiQkLmZyYWdtZW50KTtcbiAgICBcdFx0XHRhdHRyKGlmcmFtZSwgXCJhbGxvd1wiLCBcImF1dG9wbGF5OyBmdWxsc2NyZWVuXCIpO1xuICAgIFx0XHRcdGF0dHIoaWZyYW1lLCBcInRpdGxlXCIsIC8qYWN0aXZlSXRlbSovIGN0eFsyXS50aXRsZSk7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1pZlwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcIndpZHRoXCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJoZWlnaHRcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2LCBpZnJhbWUpO1xuICAgIFx0XHRcdG1vdW50X2NvbXBvbmVudChsb2FkaW5nLCBkaXYsIG51bGwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gW1xuICAgIFx0XHRcdFx0XHRhY3Rpb25fZGVzdHJveWVyKC8qYWRkU3JjKi8gY3R4WzNdLmNhbGwobnVsbCwgaWZyYW1lKSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihpZnJhbWUsIFwibG9hZFwiLCAvKmxvYWRfaGFuZGxlciovIGN0eFs1XSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIFtkaXJ0eV0pIHtcbiAgICBcdFx0XHRjb25zdCBsb2FkaW5nX2NoYW5nZXMgPSB7fTtcbiAgICBcdFx0XHRpZiAoZGlydHkgJiAvKmxvYWRlZCovIDEpIGxvYWRpbmdfY2hhbmdlcy5sb2FkZWQgPSAvKmxvYWRlZCovIGN0eFswXTtcbiAgICBcdFx0XHRsb2FkaW5nLiRzZXQobG9hZGluZ19jaGFuZ2VzKTtcblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eSAmIC8qZGltZW5zaW9ucyovIDIpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwid2lkdGhcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHkgJiAvKmRpbWVuc2lvbnMqLyAyKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImhlaWdodFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihsb2FkaW5nLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChsb2FkaW5nLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGRlc3Ryb3lfY29tcG9uZW50KGxvYWRpbmcpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbmNlJDIoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgICBcdGxldCB7IHByb3BzIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IGxvYWRlZCwgZGltZW5zaW9ucztcbiAgICBcdGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gcHJvcHM7XG4gICAgXHRjb25zdCBzZXREaW1lbnNpb25zID0gKCkgPT4gJCRpbnZhbGlkYXRlKDEsIGRpbWVuc2lvbnMgPSBwcm9wcy5jYWxjdWxhdGVEaW1lbnNpb25zKGFjdGl2ZUl0ZW0pKTtcbiAgICBcdHNldERpbWVuc2lvbnMoKTtcbiAgICBcdHByb3BzLnNldFJlc2l6ZUZ1bmMoc2V0RGltZW5zaW9ucyk7XG5cbiAgICBcdGNvbnN0IGFkZFNyYyA9IG5vZGUgPT4ge1xuICAgIFx0XHRhZGRBdHRyaWJ1dGVzKG5vZGUsIGFjdGl2ZUl0ZW0uYXR0cik7XG4gICAgXHRcdG5vZGUuc3JjID0gYWN0aXZlSXRlbS5pZnJhbWU7XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBsb2FkX2hhbmRsZXIgPSAoKSA9PiAkJGludmFsaWRhdGUoMCwgbG9hZGVkID0gdHJ1ZSk7XG5cbiAgICBcdFxuXG4gICAgXHRyZXR1cm4gW2xvYWRlZCwgZGltZW5zaW9ucywgYWN0aXZlSXRlbSwgYWRkU3JjLCBwcm9wcywgbG9hZF9oYW5kbGVyXTtcbiAgICB9XG5cbiAgICBjbGFzcyBJZnJhbWUgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuICAgIFx0XHRpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDIsIGNyZWF0ZV9mcmFnbWVudCQyLCBub3RfZXF1YWwsIHsgcHJvcHM6IDQgfSk7XG4gICAgXHR9XG4gICAgfVxuXG4gICAgLyogc3JjL2NvbXBvbmVudHMvdmlkZW8uc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuNTUuMSAqL1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDEoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGxvYWRpbmc7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG5cbiAgICBcdGxvYWRpbmcgPSBuZXcgTG9hZGluZyh7XG4gICAgXHRcdFx0cHJvcHM6IHtcbiAgICBcdFx0XHRcdGFjdGl2ZUl0ZW06IC8qYWN0aXZlSXRlbSovIGN0eFsyXSxcbiAgICBcdFx0XHRcdGxvYWRlZDogLypsb2FkZWQqLyBjdHhbMF1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0Y3JlYXRlX2NvbXBvbmVudChsb2FkaW5nLiQkLmZyYWdtZW50KTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLXZpZFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcIndpZHRoXCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJoZWlnaHRcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzFdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgZ2V0VGh1bWJCYWNrZ3JvdW5kKC8qYWN0aXZlSXRlbSovIGN0eFsyXSkpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdG1vdW50X2NvbXBvbmVudChsb2FkaW5nLCBkaXYsIG51bGwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gYWN0aW9uX2Rlc3Ryb3llcigvKm9uTW91bnQqLyBjdHhbM10uY2FsbChudWxsLCBkaXYpKTtcbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIFtkaXJ0eV0pIHtcbiAgICBcdFx0XHRjb25zdCBsb2FkaW5nX2NoYW5nZXMgPSB7fTtcbiAgICBcdFx0XHRpZiAoZGlydHkgJiAvKmxvYWRlZCovIDEpIGxvYWRpbmdfY2hhbmdlcy5sb2FkZWQgPSAvKmxvYWRlZCovIGN0eFswXTtcbiAgICBcdFx0XHRsb2FkaW5nLiRzZXQobG9hZGluZ19jaGFuZ2VzKTtcblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eSAmIC8qZGltZW5zaW9ucyovIDIpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwid2lkdGhcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHkgJiAvKmRpbWVuc2lvbnMqLyAyKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImhlaWdodFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihsb2FkaW5nLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChsb2FkaW5nLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGRlc3Ryb3lfY29tcG9uZW50KGxvYWRpbmcpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRkaXNwb3NlKCk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFuY2UkMSgkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICAgIFx0bGV0IHsgcHJvcHMgfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgbG9hZGVkLCBkaW1lbnNpb25zO1xuICAgIFx0Y29uc3QgeyBhY3RpdmVJdGVtLCBvcHRzLCBjb250YWluZXIgfSA9IHByb3BzO1xuICAgIFx0Y29uc3Qgc2V0RGltZW5zaW9ucyA9ICgpID0+ICQkaW52YWxpZGF0ZSgxLCBkaW1lbnNpb25zID0gcHJvcHMuY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKSk7XG4gICAgXHRzZXREaW1lbnNpb25zKCk7XG4gICAgXHRwcm9wcy5zZXRSZXNpemVGdW5jKHNldERpbWVuc2lvbnMpO1xuXG4gICAgXHQvKiogY3JlYXRlIGF1ZG8gLyB2aWRlbyBlbGVtZW50ICovXG4gICAgXHRjb25zdCBvbk1vdW50ID0gbm9kZSA9PiB7XG4gICAgXHRcdGxldCBtZWRpYUVsZW1lbnQ7XG5cbiAgICBcdFx0LyoqIHRha2VzIHN1cHBsaWVkIG9iamVjdCBhbmQgY3JlYXRlcyBlbGVtZW50cyBpbiB2aWRlbyAqL1xuICAgIFx0XHRjb25zdCBhcHBlbmRUb1ZpZGVvID0gKHRhZywgYXJyKSA9PiB7XG4gICAgXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBcdFx0XHRcdGFyciA9IEpTT04ucGFyc2UoYXJyKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRmb3IgKGNvbnN0IG9iaiBvZiBhcnIpIHtcbiAgICBcdFx0XHRcdC8vIGNyZWF0ZSBtZWRpYSBlbGVtZW50IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBcdFx0XHRcdGlmICghbWVkaWFFbGVtZW50KSB7XG4gICAgXHRcdFx0XHRcdG1lZGlhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoKG9iai50eXBlPy5pbmNsdWRlcygnYXVkaW8nKSkgPyAnYXVkaW8nIDogJ3ZpZGVvJyk7XG5cbiAgICBcdFx0XHRcdFx0YWRkQXR0cmlidXRlcyhtZWRpYUVsZW1lbnQsIHtcbiAgICBcdFx0XHRcdFx0XHRjb250cm9sczogdHJ1ZSxcbiAgICBcdFx0XHRcdFx0XHRhdXRvcGxheTogdHJ1ZSxcbiAgICBcdFx0XHRcdFx0XHRwbGF5c2lubGluZTogdHJ1ZSxcbiAgICBcdFx0XHRcdFx0XHR0YWJpbmRleDogJzAnXG4gICAgXHRcdFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0XHRcdGFkZEF0dHJpYnV0ZXMobWVkaWFFbGVtZW50LCBhY3RpdmVJdGVtLmF0dHIpO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHQvLyBhZGQgc291cmNlcyAvIHRyYWNrcyB0byBtZWRpYSBlbGVtZW50XG4gICAgXHRcdFx0XHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIFx0XHRcdFx0YWRkQXR0cmlidXRlcyhlbCwgb2JqKTtcblxuICAgIFx0XHRcdFx0aWYgKHRhZyA9PSAnc291cmNlJykge1xuICAgIFx0XHRcdFx0XHRlbC5vbkVycm9yID0gZXJyb3IgPT4gb3B0cy5vbkVycm9yPy4oY29udGFpbmVyLCBhY3RpdmVJdGVtLCBlcnJvcik7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdG1lZGlhRWxlbWVudC5hcHBlbmQoZWwpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fTtcblxuICAgIFx0XHRhcHBlbmRUb1ZpZGVvKCdzb3VyY2UnLCBhY3RpdmVJdGVtLnNvdXJjZXMpO1xuICAgIFx0XHRhcHBlbmRUb1ZpZGVvKCd0cmFjaycsIGFjdGl2ZUl0ZW0udHJhY2tzIHx8IFtdKTtcbiAgICBcdFx0bWVkaWFFbGVtZW50Lm9uY2FucGxheSA9ICgpID0+ICQkaW52YWxpZGF0ZSgwLCBsb2FkZWQgPSB0cnVlKTtcbiAgICBcdFx0bm9kZS5hcHBlbmQobWVkaWFFbGVtZW50KTtcbiAgICBcdH07XG5cbiAgICBcdFxuXG4gICAgXHRyZXR1cm4gW2xvYWRlZCwgZGltZW5zaW9ucywgYWN0aXZlSXRlbSwgb25Nb3VudCwgcHJvcHNdO1xuICAgIH1cblxuICAgIGNsYXNzIFZpZGVvIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcbiAgICBcdFx0aW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQxLCBjcmVhdGVfZnJhZ21lbnQkMSwgbm90X2VxdWFsLCB7IHByb3BzOiA0IH0pO1xuICAgIFx0fVxuICAgIH1cblxuICAgIC8qIHNyYy9iaWdnZXItcGljdHVyZS5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My41NS4xICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2soY3R4KSB7XG4gICAgXHRsZXQgZGl2MjtcbiAgICBcdGxldCBkaXYwO1xuICAgIFx0bGV0IGRpdjBfb3V0cm87XG4gICAgXHRsZXQgcHJldmlvdXNfa2V5ID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmk7XG4gICAgXHRsZXQgZGl2MTtcbiAgICBcdGxldCBidXR0b247XG4gICAgXHRsZXQgZGl2MV9vdXRybztcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcbiAgICBcdGxldCBrZXlfYmxvY2sgPSBjcmVhdGVfa2V5X2Jsb2NrKGN0eCk7XG4gICAgXHRsZXQgaWZfYmxvY2sgPSAvKml0ZW1zKi8gY3R4WzBdLmxlbmd0aCA+IDEgJiYgY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYyID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRkaXYwID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRrZXlfYmxvY2suYygpO1xuICAgIFx0XHRcdGRpdjEgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGJ1dHRvbiA9IGVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5jKCk7XG4gICAgXHRcdFx0YXR0cihidXR0b24sIFwiY2xhc3NcIiwgXCJicC14XCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uLCBcInRpdGxlXCIsIFwiQ2xvc2VcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24sIFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlXCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2MSwgXCJjbGFzc1wiLCBcImJwLWNvbnRyb2xzXCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2MiwgXCJjbGFzc1wiLCBcImJwLXdyYXBcIik7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtem9vbWVkXCIsIC8qJHpvb21lZCovIGN0eFsxMF0pO1xuICAgIFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLWlubGluZVwiLCAvKmlubGluZSovIGN0eFs4XSk7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtc21hbGxcIiwgLypzbWFsbFNjcmVlbiovIGN0eFs3XSk7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtbm9jbG9zZVwiLCAvKm9wdHMqLyBjdHhbNV0ubm9DbG9zZSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYyLCBhbmNob3IpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYyLCBkaXYwKTtcbiAgICBcdFx0XHRrZXlfYmxvY2subShkaXYyLCBudWxsKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MiwgZGl2MSk7XG4gICAgXHRcdFx0YXBwZW5kKGRpdjEsIGJ1dHRvbik7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5tKGRpdjEsIG51bGwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gW1xuICAgIFx0XHRcdFx0XHRsaXN0ZW4oYnV0dG9uLCBcImNsaWNrXCIsIC8qY2xvc2UqLyBjdHhbMV0pLFxuICAgIFx0XHRcdFx0XHRhY3Rpb25fZGVzdHJveWVyKC8qY29udGFpbmVyQWN0aW9ucyovIGN0eFsxNF0uY2FsbChudWxsLCBkaXYyKSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLyphY3RpdmVJdGVtKi8gNjQgJiYgbm90X2VxdWFsKHByZXZpb3VzX2tleSwgcHJldmlvdXNfa2V5ID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmkpKSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGtleV9ibG9jaywgMSwgMSwgbm9vcCk7XG4gICAgXHRcdFx0XHRjaGVja19vdXRyb3MoKTtcbiAgICBcdFx0XHRcdGtleV9ibG9jayA9IGNyZWF0ZV9rZXlfYmxvY2soY3R4KTtcbiAgICBcdFx0XHRcdGtleV9ibG9jay5jKCk7XG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX2luKGtleV9ibG9jaywgMSk7XG4gICAgXHRcdFx0XHRrZXlfYmxvY2subShkaXYyLCBkaXYxKTtcbiAgICBcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0a2V5X2Jsb2NrLnAoY3R4LCBkaXJ0eSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKC8qaXRlbXMqLyBjdHhbMF0ubGVuZ3RoID4gMSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLnAoY3R4LCBkaXJ0eSk7XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jayA9IGNyZWF0ZV9pZl9ibG9ja18xKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2subShkaXYxLCBudWxsKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrKSB7XG4gICAgXHRcdFx0XHRpZl9ibG9jay5kKDEpO1xuICAgIFx0XHRcdFx0aWZfYmxvY2sgPSBudWxsO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qJHpvb21lZCovIDEwMjQpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLXpvb21lZFwiLCAvKiR6b29tZWQqLyBjdHhbMTBdKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKmlubGluZSovIDI1Nikge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtaW5saW5lXCIsIC8qaW5saW5lKi8gY3R4WzhdKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKnNtYWxsU2NyZWVuKi8gMTI4KSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1zbWFsbFwiLCAvKnNtYWxsU2NyZWVuKi8gY3R4WzddKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKm9wdHMqLyAzMikge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtbm9jbG9zZVwiLCAvKm9wdHMqLyBjdHhbNV0ubm9DbG9zZSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHRpZiAoZGl2MF9vdXRybykgZGl2MF9vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihrZXlfYmxvY2spO1xuICAgIFx0XHRcdGlmIChkaXYxX291dHJvKSBkaXYxX291dHJvLmVuZCgxKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdGlmIChsb2NhbCkge1xuICAgIFx0XHRcdFx0ZGl2MF9vdXRybyA9IGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihkaXYwLCBmbHksIHsgZHVyYXRpb246IDQ4MCB9KTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChrZXlfYmxvY2spO1xuXG4gICAgXHRcdFx0aWYgKGxvY2FsKSB7XG4gICAgXHRcdFx0XHRkaXYxX291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdjEsIGZseSwge30pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2Mik7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBkaXYwX291dHJvKSBkaXYwX291dHJvLmVuZCgpO1xuICAgIFx0XHRcdGtleV9ibG9jay5kKGRldGFjaGluZyk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5kKCk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBkaXYxX291dHJvKSBkaXYxX291dHJvLmVuZCgpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTE6MTk5KSB7OmVsc2V9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2Vsc2VfYmxvY2soY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IHJhd192YWx1ZSA9ICgvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaHRtbCA/PyAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uZWxlbWVudC5vdXRlckhUTUwpICsgXCJcIjtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtaHRtbFwiKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0XHRkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmFjdGl2ZUl0ZW0qLyA2NCAmJiByYXdfdmFsdWUgIT09IChyYXdfdmFsdWUgPSAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLmh0bWwgPz8gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmVsZW1lbnQub3V0ZXJIVE1MKSArIFwiXCIpKSBkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1x0XHR9LFxuICAgIFx0XHRpOiBub29wLFxuICAgIFx0XHRvOiBub29wLFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTE6MTY1KSBcbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfNShjdHgpIHtcbiAgICBcdGxldCBpZnJhbWU7XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0aWZyYW1lID0gbmV3IElmcmFtZSh7XG4gICAgXHRcdFx0cHJvcHM6IHsgcHJvcHM6IC8qZ2V0Q2hpbGRQcm9wcyovIGN0eFsxM10oKSB9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGNyZWF0ZV9jb21wb25lbnQoaWZyYW1lLiQkLmZyYWdtZW50KTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdG1vdW50X2NvbXBvbmVudChpZnJhbWUsIHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cDogbm9vcCxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZnJhbWUuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmcmFtZS4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudChpZnJhbWUsIGRldGFjaGluZyk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxMToxMDQpIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja180KGN0eCkge1xuICAgIFx0bGV0IHZpZGVvO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdHZpZGVvID0gbmV3IFZpZGVvKHtcbiAgICBcdFx0XHRwcm9wczogeyBwcm9wczogLypnZXRDaGlsZFByb3BzKi8gY3R4WzEzXSgpIH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0Y3JlYXRlX2NvbXBvbmVudCh2aWRlby4kJC5mcmFnbWVudCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRtb3VudF9jb21wb25lbnQodmlkZW8sIHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cDogbm9vcCxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbih2aWRlby4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQodmlkZW8uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQodmlkZW8sIGRldGFjaGluZyk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxMTo0KSB7I2lmIGFjdGl2ZUl0ZW0uaW1nfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja18zKGN0eCkge1xuICAgIFx0bGV0IGltYWdlaXRlbTtcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHRpbWFnZWl0ZW0gPSBuZXcgSW1hZ2Uoe1xuICAgIFx0XHRcdHByb3BzOiB7XG4gICAgXHRcdFx0XHRwcm9wczogLypnZXRDaGlsZFByb3BzKi8gY3R4WzEzXSgpLFxuICAgIFx0XHRcdFx0c21hbGxTY3JlZW46IC8qc21hbGxTY3JlZW4qLyBjdHhbN11cbiAgICBcdFx0XHR9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGNyZWF0ZV9jb21wb25lbnQoaW1hZ2VpdGVtLiQkLmZyYWdtZW50KTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdG1vdW50X2NvbXBvbmVudChpbWFnZWl0ZW0sIHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0Y29uc3QgaW1hZ2VpdGVtX2NoYW5nZXMgPSB7fTtcbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKnNtYWxsU2NyZWVuKi8gMTI4KSBpbWFnZWl0ZW1fY2hhbmdlcy5zbWFsbFNjcmVlbiA9IC8qc21hbGxTY3JlZW4qLyBjdHhbN107XG4gICAgXHRcdFx0aW1hZ2VpdGVtLiRzZXQoaW1hZ2VpdGVtX2NoYW5nZXMpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGltYWdlaXRlbS4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaW1hZ2VpdGVtLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGRlc3Ryb3lfY29tcG9uZW50KGltYWdlaXRlbSwgZGV0YWNoaW5nKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzExOjI5OSkgeyNpZiBhY3RpdmVJdGVtLmNhcHRpb259XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzIoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IHJhd192YWx1ZSA9IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5jYXB0aW9uICsgXCJcIjtcbiAgICBcdGxldCBkaXZfb3V0cm87XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtY2FwXCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmICgoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKmFjdGl2ZUl0ZW0qLyA2NCkgJiYgcmF3X3ZhbHVlICE9PSAocmF3X3ZhbHVlID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmNhcHRpb24gKyBcIlwiKSkgZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0aWYgKGRpdl9vdXRybykgZGl2X291dHJvLmVuZCgxKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdGRpdl9vdXRybyA9IGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihkaXYsIGZseSwgeyBkdXJhdGlvbjogMjAwIH0pO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdl9vdXRybykgZGl2X291dHJvLmVuZCgpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMDA6NDMpIHsja2V5IGFjdGl2ZUl0ZW0uaX1cbiAgICBmdW5jdGlvbiBjcmVhdGVfa2V5X2Jsb2NrKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCBjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXg7XG4gICAgXHRsZXQgaWZfYmxvY2swO1xuICAgIFx0bGV0IGRpdl9pbnRybztcbiAgICBcdGxldCBkaXZfb3V0cm87XG4gICAgXHRsZXQgaWZfYmxvY2sxX2FuY2hvcjtcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcbiAgICBcdGNvbnN0IGlmX2Jsb2NrX2NyZWF0b3JzID0gW2NyZWF0ZV9pZl9ibG9ja18zLCBjcmVhdGVfaWZfYmxvY2tfNCwgY3JlYXRlX2lmX2Jsb2NrXzUsIGNyZWF0ZV9lbHNlX2Jsb2NrXTtcbiAgICBcdGNvbnN0IGlmX2Jsb2NrcyA9IFtdO1xuXG4gICAgXHRmdW5jdGlvbiBzZWxlY3RfYmxvY2tfdHlwZShjdHgsIGRpcnR5KSB7XG4gICAgXHRcdGlmICgvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaW1nKSByZXR1cm4gMDtcbiAgICBcdFx0aWYgKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5zb3VyY2VzKSByZXR1cm4gMTtcbiAgICBcdFx0aWYgKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5pZnJhbWUpIHJldHVybiAyO1xuICAgIFx0XHRyZXR1cm4gMztcbiAgICBcdH1cblxuICAgIFx0Y3VycmVudF9ibG9ja190eXBlX2luZGV4ID0gc2VsZWN0X2Jsb2NrX3R5cGUoY3R4KTtcbiAgICBcdGlmX2Jsb2NrMCA9IGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdID0gaWZfYmxvY2tfY3JlYXRvcnNbY3VycmVudF9ibG9ja190eXBlX2luZGV4XShjdHgpO1xuICAgIFx0bGV0IGlmX2Jsb2NrMSA9IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5jYXB0aW9uICYmIGNyZWF0ZV9pZl9ibG9ja18yKGN0eCk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2sxX2FuY2hvciA9IGVtcHR5KCk7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1pbm5lclwiKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICBcdFx0XHRpZl9ibG9ja3NbY3VycmVudF9ibG9ja190eXBlX2luZGV4XS5tKGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGlmX2Jsb2NrMV9hbmNob3IsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYsIFwicG9pbnRlcmRvd25cIiwgLypwb2ludGVyZG93bl9oYW5kbGVyKi8gY3R4WzIwXSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYsIFwicG9pbnRlcnVwXCIsIC8qcG9pbnRlcnVwX2hhbmRsZXIqLyBjdHhbMjFdKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRsZXQgcHJldmlvdXNfYmxvY2tfaW5kZXggPSBjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXg7XG4gICAgXHRcdFx0Y3VycmVudF9ibG9ja190eXBlX2luZGV4ID0gc2VsZWN0X2Jsb2NrX3R5cGUoY3R4KTtcblxuICAgIFx0XHRcdGlmIChjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXggPT09IHByZXZpb3VzX2Jsb2NrX2luZGV4KSB7XG4gICAgXHRcdFx0XHRpZl9ibG9ja3NbY3VycmVudF9ibG9ja190eXBlX2luZGV4XS5wKGN0eCwgZGlydHkpO1xuICAgIFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2tzW3ByZXZpb3VzX2Jsb2NrX2luZGV4XSwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9ja3NbcHJldmlvdXNfYmxvY2tfaW5kZXhdID0gbnVsbDtcbiAgICBcdFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0XHRjaGVja19vdXRyb3MoKTtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrMCA9IGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdO1xuXG4gICAgXHRcdFx0XHRpZiAoIWlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBpZl9ibG9ja3NbY3VycmVudF9ibG9ja190eXBlX2luZGV4XSA9IGlmX2Jsb2NrX2NyZWF0b3JzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0oY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLmMoKTtcbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5wKGN0eCwgZGlydHkpO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgXHRcdFx0XHRpZl9ibG9jazAubShkaXYsIG51bGwpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICgvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uY2FwdGlvbikge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrMSkge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEucChjdHgsIGRpcnR5KTtcblxuICAgIFx0XHRcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmFjdGl2ZUl0ZW0qLyA2NCkge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxID0gY3JlYXRlX2lmX2Jsb2NrXzIoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEubShpZl9ibG9jazFfYW5jaG9yLnBhcmVudE5vZGUsIGlmX2Jsb2NrMV9hbmNob3IpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2sxLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMSA9IG51bGw7XG4gICAgXHRcdFx0XHR9KTtcblxuICAgIFx0XHRcdFx0Y2hlY2tfb3V0cm9zKCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCk7XG5cbiAgICBcdFx0XHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICBcdFx0XHRcdGlmIChkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0XHRkaXZfaW50cm8gPSBjcmVhdGVfaW5fdHJhbnNpdGlvbihkaXYsIC8qbWVkaWFUcmFuc2l0aW9uKi8gY3R4WzEyXSwgdHJ1ZSk7XG4gICAgXHRcdFx0XHRkaXZfaW50cm8uc3RhcnQoKTtcbiAgICBcdFx0XHR9KTtcblxuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCk7XG4gICAgXHRcdFx0aWYgKGRpdl9pbnRybykgZGl2X2ludHJvLmludmFsaWRhdGUoKTtcbiAgICBcdFx0XHRkaXZfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2LCAvKm1lZGlhVHJhbnNpdGlvbiovIGN0eFsxMl0sIGZhbHNlKTtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0XHRpZl9ibG9ja3NbY3VycmVudF9ibG9ja190eXBlX2luZGV4XS5kKCk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpZl9ibG9jazFfYW5jaG9yKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0cnVuX2FsbChkaXNwb3NlKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzExOjU1NCkgeyNpZiBpdGVtcy5sZW5ndGggPiAxfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja18xKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCByYXdfdmFsdWUgPSBgJHsvKnBvc2l0aW9uKi8gY3R4WzRdICsgMX0gLyAkey8qaXRlbXMqLyBjdHhbMF0ubGVuZ3RofWAgKyBcIlwiO1xuICAgIFx0bGV0IGJ1dHRvbjA7XG4gICAgXHRsZXQgYnV0dG9uMTtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRidXR0b24wID0gZWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcdFx0XHRidXR0b24xID0gZWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWNvdW50XCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMCwgXCJjbGFzc1wiLCBcImJwLXByZXZcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24wLCBcInRpdGxlXCIsIFwiUHJldmlvdXNcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24wLCBcImFyaWEtbGFiZWxcIiwgXCJQcmV2aW91c1wiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjEsIFwiY2xhc3NcIiwgXCJicC1uZXh0XCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMSwgXCJ0aXRsZVwiLCBcIk5leHRcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24xLCBcImFyaWEtbGFiZWxcIiwgXCJOZXh0XCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgYnV0dG9uMCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBidXR0b24xLCBhbmNob3IpO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gW1xuICAgIFx0XHRcdFx0XHRsaXN0ZW4oYnV0dG9uMCwgXCJjbGlja1wiLCAvKnByZXYqLyBjdHhbMl0pLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oYnV0dG9uMSwgXCJjbGlja1wiLCAvKm5leHQqLyBjdHhbM10pXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qcG9zaXRpb24sIGl0ZW1zKi8gMTcgJiYgcmF3X3ZhbHVlICE9PSAocmF3X3ZhbHVlID0gYCR7Lypwb3NpdGlvbiovIGN0eFs0XSArIDF9IC8gJHsvKml0ZW1zKi8gY3R4WzBdLmxlbmd0aH1gICsgXCJcIikpIGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGJ1dHRvbjApO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChidXR0b24xKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0cnVuX2FsbChkaXNwb3NlKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQoY3R4KSB7XG4gICAgXHRsZXQgaWZfYmxvY2tfYW5jaG9yO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgaWZfYmxvY2sgPSAvKml0ZW1zKi8gY3R4WzBdICYmIGNyZWF0ZV9pZl9ibG9jayhjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2suYygpO1xuICAgIFx0XHRcdGlmX2Jsb2NrX2FuY2hvciA9IGVtcHR5KCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGlmX2Jsb2NrX2FuY2hvciwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKC8qaXRlbXMqLyBjdHhbMF0pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jaykge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qaXRlbXMqLyAxKSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jaywgMSk7XG4gICAgXHRcdFx0XHRcdH1cbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrID0gY3JlYXRlX2lmX2Jsb2NrKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jaywgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLm0oaWZfYmxvY2tfYW5jaG9yLnBhcmVudE5vZGUsIGlmX2Jsb2NrX2FuY2hvcik7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jaykge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrID0gbnVsbDtcbiAgICBcdFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0XHRjaGVja19vdXRyb3MoKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2spO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2spO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmQoZGV0YWNoaW5nKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goaWZfYmxvY2tfYW5jaG9yKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSgkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICAgIFx0bGV0ICR6b29tZWQ7XG4gICAgXHRsZXQgeyBpdGVtcyA9IHVuZGVmaW5lZCB9ID0gJCRwcm9wcztcbiAgICBcdGxldCB7IHRhcmdldCA9IHVuZGVmaW5lZCB9ID0gJCRwcm9wcztcbiAgICBcdGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBcdC8qKiBpbmRleCBvZiBjdXJyZW50IGFjdGl2ZSBpdGVtICovXG4gICAgXHRsZXQgcG9zaXRpb247XG5cbiAgICBcdC8qKiBvcHRpb25zIHBhc3NlZCB2aWEgb3BlbiBtZXRob2QgKi9cbiAgICBcdGxldCBvcHRzO1xuXG4gICAgXHQvKiogYm9vbCB0cmFja3Mgb3BlbiBzdGF0ZSAqL1xuICAgIFx0bGV0IGlzT3BlbjtcblxuICAgIFx0LyoqIGRvbSBlbGVtZW50IHRvIHJlc3RvcmUgZm9jdXMgdG8gb24gY2xvc2UgKi9cbiAgICBcdGxldCBmb2N1c1RyaWdnZXI7XG5cbiAgICBcdC8qKiBib29sIHRydWUgaWYgY29udGFpbmVyIHdpZHRoIDwgNzY5ICovXG4gICAgXHRsZXQgc21hbGxTY3JlZW47XG5cbiAgICBcdC8qKiBib29sIHZhbHVlIG9mIGlubGluZSBvcHRpb24gcGFzc2VkIGluIG9wZW4gbWV0aG9kICovXG4gICAgXHRsZXQgaW5saW5lO1xuXG4gICAgXHQvKiogd2hlbiBwb3NpdGlvbiBpcyBzZXQgKi9cbiAgICBcdGxldCBtb3ZlbWVudDtcblxuICAgIFx0LyoqIHN0b3JlcyB0YXJnZXQgb24gcG9pbnRlcmRvd24gKHJlZiBmb3Igb3ZlcmxheSBjbG9zZSkgKi9cbiAgICBcdGxldCBjbGlja2VkRWw7XG5cbiAgICBcdC8qKiBhY3RpdmUgaXRlbSBvYmplY3QgKi9cbiAgICBcdGxldCBhY3RpdmVJdGVtO1xuXG4gICAgXHQvKiogcmV0dXJucyB0cnVlIGlmIGBhY3RpdmVJdGVtYCBpcyBodG1sICovXG4gICAgXHRjb25zdCBhY3RpdmVJdGVtSXNIdG1sID0gKCkgPT4gIWFjdGl2ZUl0ZW0uaW1nICYmICFhY3RpdmVJdGVtLnNvdXJjZXMgJiYgIWFjdGl2ZUl0ZW0uaWZyYW1lO1xuXG4gICAgXHQvKiogZnVuY3Rpb24gc2V0IGJ5IGNoaWxkIGNvbXBvbmVudCB0byBydW4gd2hlbiBjb250YWluZXIgcmVzaXplZCAqL1xuICAgIFx0bGV0IHJlc2l6ZUZ1bmM7XG5cbiAgICBcdC8qKiB1c2VkIGJ5IGNoaWxkIGNvbXBvbmVudHMgdG8gc2V0IHJlc2l6ZSBmdW5jdGlvbiAqL1xuICAgIFx0Y29uc3Qgc2V0UmVzaXplRnVuYyA9IGZuID0+IHJlc2l6ZUZ1bmMgPSBmbjtcblxuICAgIFx0LyoqIGNvbnRhaW5lciBlbGVtZW50IChlbCkgLyB3aWR0aCAodykgLyBoZWlnaHQgKGgpICovXG4gICAgXHRjb25zdCBjb250YWluZXIgPSB7fTtcblxuICAgIFx0Ly8gLyoqIHRydWUgaWYgaW1hZ2UgaXMgY3VycmVudGx5IHpvb21lZCBwYXN0IHN0YXJ0aW5nIHNpemUgKi9cbiAgICBcdGNvbnN0IHpvb21lZCA9IHdyaXRhYmxlKDApO1xuXG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgem9vbWVkLCB2YWx1ZSA9PiAkJGludmFsaWRhdGUoMTAsICR6b29tZWQgPSB2YWx1ZSkpO1xuXG4gICAgXHRjb25zdCBvcGVuID0gb3B0aW9ucyA9PiB7XG4gICAgXHRcdCQkaW52YWxpZGF0ZSg1LCBvcHRzID0gb3B0aW9ucyk7XG4gICAgXHRcdCQkaW52YWxpZGF0ZSg4LCBpbmxpbmUgPSBvcHRzLmlubGluZSk7XG5cbiAgICBcdFx0Ly8gYWRkIGNsYXNzIHRvIGhpZGUgc2Nyb2xsIGlmIG5vdCBpbmxpbmUgZ2FsbGVyeVxuICAgIFx0XHRpZiAoIWlubGluZSAmJiBodG1sLnNjcm9sbEhlaWdodCA+IGh0bWwuY2xpZW50SGVpZ2h0KSB7XG4gICAgXHRcdFx0aHRtbC5jbGFzc0xpc3QuYWRkKCdicC1sb2NrJyk7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyB1cGRhdGUgdHJpZ2dlciBlbGVtZW50IHRvIHJlc3RvcmUgZm9jdXNcbiAgICBcdFx0Zm9jdXNUcmlnZ2VyID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgIFx0XHQkJGludmFsaWRhdGUoMTksIGNvbnRhaW5lci53ID0gdGFyZ2V0Lm9mZnNldFdpZHRoLCBjb250YWluZXIpO1xuXG4gICAgXHRcdCQkaW52YWxpZGF0ZShcbiAgICBcdFx0XHQxOSxcbiAgICBcdFx0XHRjb250YWluZXIuaCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keVxuICAgIFx0XHRcdD8gZ2xvYmFsVGhpcy5pbm5lckhlaWdodFxuICAgIFx0XHRcdDogdGFyZ2V0LmNsaWVudEhlaWdodCxcbiAgICBcdFx0XHRjb250YWluZXJcbiAgICBcdFx0KTtcblxuICAgIFx0XHQkJGludmFsaWRhdGUoNywgc21hbGxTY3JlZW4gPSBjb250YWluZXIudyA8IDc2OSk7XG4gICAgXHRcdCQkaW52YWxpZGF0ZSg0LCBwb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwgMCk7XG5cbiAgICBcdFx0Ly8gc2V0IGl0ZW1zXG4gICAgXHRcdCQkaW52YWxpZGF0ZSgwLCBpdGVtcyA9IFtdKTtcblxuICAgIFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IChvcHRzLml0ZW1zLmxlbmd0aCB8fCAxKTsgaSsrKSB7XG4gICAgXHRcdFx0bGV0IGl0ZW0gPSBvcHRzLml0ZW1zW2ldIHx8IG9wdHMuaXRlbXM7XG5cbiAgICBcdFx0XHRpZiAoJ2RhdGFzZXQnIGluIGl0ZW0pIHtcbiAgICBcdFx0XHRcdGl0ZW1zLnB1c2goeyBlbGVtZW50OiBpdGVtLCBpLCAuLi5pdGVtLmRhdGFzZXQgfSk7XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdGl0ZW0uaSA9IGk7XG4gICAgXHRcdFx0XHRpdGVtcy5wdXNoKGl0ZW0pO1xuXG4gICAgXHRcdFx0XHQvLyBzZXQgaXRlbSB0byBlbGVtZW50IGZvciBwb3NpdGlvbiBjaGVjayBiZWxvd1xuICAgIFx0XHRcdFx0aXRlbSA9IGl0ZW0uZWxlbWVudDtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHQvLyBvdmVycmlkZSBnYWxsZXJ5IHBvc2l0aW9uIGlmIG5lZWRlZFxuICAgIFx0XHRcdGlmIChvcHRzLmVsICYmIG9wdHMuZWwgPT09IGl0ZW0pIHtcbiAgICBcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb3NpdGlvbiA9IGkpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgXHRcdG9wdHMub25DbG9zZT8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSk7XG4gICAgXHRcdGNsb3Npbmcuc2V0KHRydWUpO1xuICAgIFx0XHQkJGludmFsaWRhdGUoMCwgaXRlbXMgPSBudWxsKTtcblxuICAgIFx0XHQvLyByZXN0b3JlIGZvY3VzIHRvIHRyaWdnZXIgZWxlbWVudFxuICAgIFx0XHRmb2N1c1RyaWdnZXI/LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IHByZXYgPSAoKSA9PiBzZXRQb3NpdGlvbihwb3NpdGlvbiAtIDEpO1xuICAgIFx0Y29uc3QgbmV4dCA9ICgpID0+IHNldFBvc2l0aW9uKHBvc2l0aW9uICsgMSk7XG5cbiAgICBcdGNvbnN0IHNldFBvc2l0aW9uID0gaW5kZXggPT4ge1xuICAgIFx0XHRtb3ZlbWVudCA9IGluZGV4IC0gcG9zaXRpb247XG4gICAgXHRcdCQkaW52YWxpZGF0ZSg0LCBwb3NpdGlvbiA9IGdldE5leHRQb3NpdGlvbihpbmRleCkpO1xuICAgIFx0fTtcblxuICAgIFx0LyoqXG4gICAgICogcmV0dXJucyBuZXh0IGdhbGxlcnkgcG9zaXRpb24gKGxvb3BlZCBpZiBuZWNjZXNzYXJ5KVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgICAqL1xuICAgIFx0Y29uc3QgZ2V0TmV4dFBvc2l0aW9uID0gaW5kZXggPT4gKGluZGV4ICsgaXRlbXMubGVuZ3RoKSAlIGl0ZW1zLmxlbmd0aDtcblxuICAgIFx0Y29uc3Qgb25LZXlkb3duID0gZSA9PiB7XG4gICAgXHRcdGNvbnN0IHsga2V5LCBzaGlmdEtleSB9ID0gZTtcblxuICAgIFx0XHRpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgIFx0XHRcdCFvcHRzLm5vQ2xvc2UgJiYgY2xvc2UoKTtcbiAgICBcdFx0fSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgIFx0XHRcdG5leHQoKTtcbiAgICBcdFx0fSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgXHRcdFx0cHJldigpO1xuICAgIFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ1RhYicpIHtcbiAgICBcdFx0XHQvLyB0cmFwIGZvY3VzIG9uIHRhYiBwcmVzc1xuICAgIFx0XHRcdGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnQ7XG5cbiAgICBcdFx0XHQvLyBhbGxvdyBicm93c2VyIHRvIGhhbmRsZSB0YWIgaW50byB2aWRlbyBjb250cm9scyBvbmx5XG4gICAgXHRcdFx0aWYgKHNoaWZ0S2V5IHx8ICFhY3RpdmVFbGVtZW50LmNvbnRyb2xzKSB7XG4gICAgXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXHRcdFx0XHRjb25zdCB7IGZvY3VzV3JhcCA9IGNvbnRhaW5lci5lbCB9ID0gb3B0cztcbiAgICBcdFx0XHRcdGNvbnN0IHRhYmJhYmxlID0gWy4uLmZvY3VzV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCcqJyldLmZpbHRlcihub2RlID0+IG5vZGUudGFiSW5kZXggPj0gMCk7XG4gICAgXHRcdFx0XHRsZXQgaW5kZXggPSB0YWJiYWJsZS5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpO1xuICAgIFx0XHRcdFx0aW5kZXggKz0gdGFiYmFibGUubGVuZ3RoICsgKHNoaWZ0S2V5ID8gLTEgOiAxKTtcbiAgICBcdFx0XHRcdHRhYmJhYmxlW2luZGV4ICUgdGFiYmFibGUubGVuZ3RoXS5mb2N1cygpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0LyoqXG4gICAgICogY2FsY3VsYXRlIGRpbWVuc2lvbnMgb2YgaGVpZ2h0IC8gd2lkdGggcmVzaXplZCB0byBmaXQgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtIG9iamVjdCB3aXRoIGhlaWdodCAvIHdpZHRoIHByb3BlcnRpZXNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFt3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcl1cbiAgICAgKi9cbiAgICBcdGNvbnN0IGNhbGN1bGF0ZURpbWVuc2lvbnMgPSAoeyB3aWR0aCA9IDE5MjAsIGhlaWdodCA9IDEwODAgfSkgPT4ge1xuICAgIFx0XHRjb25zdCB7IHNjYWxlID0gMC45OSB9ID0gb3B0cztcbiAgICBcdFx0Y29uc3QgcmF0aW8gPSBNYXRoLm1pbigxLCBjb250YWluZXIudyAvIHdpZHRoICogc2NhbGUsIGNvbnRhaW5lci5oIC8gaGVpZ2h0ICogc2NhbGUpO1xuXG4gICAgXHRcdC8vIHJvdW5kIG51bWJlciBzbyB3ZSBkb24ndCB1c2UgYSBmbG9hdCBhcyB0aGUgc2l6ZXMgYXR0cmlidXRlXG4gICAgXHRcdHJldHVybiBbTWF0aC5yb3VuZCh3aWR0aCAqIHJhdGlvKSwgTWF0aC5yb3VuZChoZWlnaHQgKiByYXRpbyldO1xuICAgIFx0fTtcblxuICAgIFx0LyoqIHByZWxvYWRzIGltYWdlcyBmb3IgcHJldmlvdXMgYW5kIG5leHQgaXRlbXMgaW4gZ2FsbGVyeSAqL1xuICAgIFx0Y29uc3QgcHJlbG9hZE5leHQgPSAoKSA9PiB7XG4gICAgXHRcdGlmIChpdGVtcykge1xuICAgIFx0XHRcdGNvbnN0IG5leHRJdGVtID0gaXRlbXNbZ2V0TmV4dFBvc2l0aW9uKHBvc2l0aW9uICsgMSldO1xuICAgIFx0XHRcdGNvbnN0IHByZXZJdGVtID0gaXRlbXNbZ2V0TmV4dFBvc2l0aW9uKHBvc2l0aW9uIC0gMSldO1xuICAgIFx0XHRcdCFuZXh0SXRlbS5wcmVsb2FkICYmIGxvYWRJbWFnZShuZXh0SXRlbSk7XG4gICAgXHRcdFx0IXByZXZJdGVtLnByZWxvYWQgJiYgbG9hZEltYWdlKHByZXZJdGVtKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0LyoqIGxvYWRzIC8gZGVjb2RlcyBpbWFnZSBmb3IgaXRlbSAqL1xuICAgIFx0Y29uc3QgbG9hZEltYWdlID0gaXRlbSA9PiB7XG4gICAgXHRcdGlmIChpdGVtLmltZykge1xuICAgIFx0XHRcdGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgXHRcdFx0aW1hZ2Uuc2l6ZXMgPSBvcHRzLnNpemVzIHx8IGAke2NhbGN1bGF0ZURpbWVuc2lvbnMoaXRlbSlbMF19cHhgO1xuICAgIFx0XHRcdGltYWdlLnNyY3NldCA9IGl0ZW0uaW1nO1xuICAgIFx0XHRcdGl0ZW0ucHJlbG9hZCA9IHRydWU7XG5cbiAgICBcdFx0XHRyZXR1cm4gaW1hZ2UuZGVjb2RlKCkuY2F0Y2goZXJyb3IgPT4ge1xuICAgIFx0XHRcdFx0XG4gICAgXHRcdFx0fSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdC8qKiBzdmVsdGUgdHJhbnNpdGlvbiB0byBjb250cm9sIG9wZW5pbmcgLyBjaGFuZ2luZyAqL1xuICAgIFx0Y29uc3QgbWVkaWFUcmFuc2l0aW9uID0gKG5vZGUsIGlzRW50ZXJpbmcpID0+IHtcbiAgICBcdFx0aWYgKCFpc09wZW4gfHwgIWl0ZW1zKSB7XG4gICAgXHRcdFx0Ly8gZW50cmFuY2UgLyBleGl0IHRyYW5zaXRpb25cbiAgICBcdFx0XHQkJGludmFsaWRhdGUoMTgsIGlzT3BlbiA9IGlzRW50ZXJpbmcpO1xuXG4gICAgXHRcdFx0cmV0dXJuIG9wdHMuaW50cm9cbiAgICBcdFx0XHQ/IGZseShub2RlLCB7IHk6IGlzRW50ZXJpbmcgPyAxMCA6IC0xMCB9KVxuICAgIFx0XHRcdDogc2NhbGVJbihub2RlKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIGZvcndhcmQgLyBiYWNrd2FyZCB0cmFuc2l0aW9uXG4gICAgXHRcdHJldHVybiBmbHkobm9kZSwge1xuICAgIFx0XHRcdHg6IChtb3ZlbWVudCA+IDAgPyAyMCA6IC0yMCkgKiAoaXNFbnRlcmluZyA/IDEgOiAtMSksXG4gICAgXHRcdFx0ZHVyYXRpb246IDI1MFxuICAgIFx0XHR9KTtcbiAgICBcdH07XG5cbiAgICBcdC8qKiBjdXN0b20gc3ZlbHRlIHRyYW5zaXRpb24gZm9yIGVudHJhbmNlIHpvb20gKi9cbiAgICBcdGNvbnN0IHNjYWxlSW4gPSBub2RlID0+IHtcbiAgICBcdFx0bGV0IGRpbWVuc2lvbnM7XG5cbiAgICBcdFx0aWYgKGFjdGl2ZUl0ZW1Jc0h0bWwoKSkge1xuICAgIFx0XHRcdGNvbnN0IGJwSXRlbSA9IG5vZGUuZmlyc3RDaGlsZC5maXJzdENoaWxkO1xuICAgIFx0XHRcdGRpbWVuc2lvbnMgPSBbYnBJdGVtLmNsaWVudFdpZHRoLCBicEl0ZW0uY2xpZW50SGVpZ2h0XTtcbiAgICBcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRkaW1lbnNpb25zID0gY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHJlY3QgaXMgYm91bmRpbmcgcmVjdCBvZiB0cmlnZ2VyIGVsZW1lbnRcbiAgICBcdFx0Y29uc3QgcmVjdCA9IChhY3RpdmVJdGVtLmVsZW1lbnQgfHwgZm9jdXNUcmlnZ2VyKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIFx0XHRjb25zdCBsZWZ0T2Zmc2V0ID0gcmVjdC5sZWZ0IC0gKGNvbnRhaW5lci53IC0gcmVjdC53aWR0aCkgLyAyO1xuICAgIFx0XHRjb25zdCBjZW50ZXJUb3AgPSByZWN0LnRvcCAtIChjb250YWluZXIuaCAtIHJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgXHRcdGNvbnN0IHNjYWxlV2lkdGggPSByZWN0LndpZHRoIC8gZGltZW5zaW9uc1swXTtcbiAgICBcdFx0Y29uc3Qgc2NhbGVIZWlnaHQgPSByZWN0LmhlaWdodCAvIGRpbWVuc2lvbnNbMV07XG5cbiAgICBcdFx0cmV0dXJuIHtcbiAgICBcdFx0XHRkdXJhdGlvbjogNDgwLFxuICAgIFx0XHRcdGVhc2luZzogY3ViaWNPdXQsXG4gICAgXHRcdFx0Y3NzOiAodCwgdSkgPT4ge1xuICAgIFx0XHRcdFx0cmV0dXJuIGB0cmFuc2Zvcm06dHJhbnNsYXRlM2QoJHtsZWZ0T2Zmc2V0ICogdX1weCwgJHtjZW50ZXJUb3AgKiB1fXB4LCAwKSBzY2FsZTNkKCR7c2NhbGVXaWR0aCArIHQgKiAoMSAtIHNjYWxlV2lkdGgpfSwgJHtzY2FsZUhlaWdodCArIHQgKiAoMSAtIHNjYWxlSGVpZ2h0KX0sIDEpYDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH07XG4gICAgXHR9O1xuXG4gICAgXHQvKiogcHJvdmlkZXMgb2JqZWN0IHcvIG5lZWRlZCBmdW5jcyAvIGRhdGEgdG8gY2hpbGQgY29tcG9uZW50cyAgKi9cbiAgICBcdGNvbnN0IGdldENoaWxkUHJvcHMgPSAoKSA9PiAoe1xuICAgIFx0XHRhY3RpdmVJdGVtLFxuICAgIFx0XHRjYWxjdWxhdGVEaW1lbnNpb25zLFxuICAgIFx0XHRsb2FkSW1hZ2UsXG4gICAgXHRcdHByZWxvYWROZXh0LFxuICAgIFx0XHRvcHRzLFxuICAgIFx0XHRwcmV2LFxuICAgIFx0XHRuZXh0LFxuICAgIFx0XHRjbG9zZSxcbiAgICBcdFx0c2V0UmVzaXplRnVuYyxcbiAgICBcdFx0em9vbWVkLFxuICAgIFx0XHRjb250YWluZXJcbiAgICBcdH0pO1xuXG4gICAgXHQvKiogY29kZSB0byBydW4gb24gbW91bnQgLyBkZXN0cm95ICovXG4gICAgXHRjb25zdCBjb250YWluZXJBY3Rpb25zID0gbm9kZSA9PiB7XG4gICAgXHRcdCQkaW52YWxpZGF0ZSgxOSwgY29udGFpbmVyLmVsID0gbm9kZSwgY29udGFpbmVyKTtcbiAgICBcdFx0bGV0IHJvQWN0aXZlO1xuICAgIFx0XHRvcHRzLm9uT3Blbj8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSk7XG5cbiAgICBcdFx0Ly8gZG9uJ3QgdXNlIGtleWJvYXJkIGV2ZW50cyBmb3IgaW5saW5lIGdhbGxlcmllc1xuICAgIFx0XHRpZiAoIWlubGluZSkge1xuICAgIFx0XHRcdGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBzZXQgdXAgcmVzaXplIG9ic2VydmVyXG4gICAgXHRcdGNvbnN0IHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgIFx0XHRcdFx0Ly8gdXNlIHJvQWN0aXZlIHRvIGF2b2lkIHJ1bm5pbmcgb24gaW5pdGlhbCBvcGVuXG4gICAgXHRcdFx0XHRpZiAocm9BY3RpdmUpIHtcbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDE5LCBjb250YWluZXIudyA9IGVudHJpZXNbMF0uY29udGVudFJlY3Qud2lkdGgsIGNvbnRhaW5lcik7XG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSgxOSwgY29udGFpbmVyLmggPSBlbnRyaWVzWzBdLmNvbnRlbnRSZWN0LmhlaWdodCwgY29udGFpbmVyKTtcbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDcsIHNtYWxsU2NyZWVuID0gY29udGFpbmVyLncgPCA3NjkpO1xuXG4gICAgXHRcdFx0XHRcdC8vIHJ1biBjaGlsZCBjb21wb25lbnQgcmVzaXplIGZ1bmN0aW9uXG4gICAgXHRcdFx0XHRcdGlmICghYWN0aXZlSXRlbUlzSHRtbCgpKSB7XG4gICAgXHRcdFx0XHRcdFx0cmVzaXplRnVuYz8uKCk7XG4gICAgXHRcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0XHQvLyBydW4gdXNlciBkZWZpbmVkIG9uUmVzaXplIGZ1bmN0aW9uXG4gICAgXHRcdFx0XHRcdG9wdHMub25SZXNpemU/Lihjb250YWluZXIuZWwsIGFjdGl2ZUl0ZW0pO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHRyb0FjdGl2ZSA9IHRydWU7XG4gICAgXHRcdFx0fSk7XG5cbiAgICBcdFx0cm8ub2JzZXJ2ZShub2RlKTtcblxuICAgIFx0XHRyZXR1cm4ge1xuICAgIFx0XHRcdGRlc3Ryb3koKSB7XG4gICAgXHRcdFx0XHRyby5kaXNjb25uZWN0KCk7XG4gICAgXHRcdFx0XHRnbG9iYWxUaGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICAgIFx0XHRcdFx0Y2xvc2luZy5zZXQoZmFsc2UpO1xuXG4gICAgXHRcdFx0XHQvLyByZW1vdmUgY2xhc3MgaGlkaW5nIHNjcm9sbFxuICAgIFx0XHRcdFx0aHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdicC1sb2NrJyk7XG5cbiAgICBcdFx0XHRcdG9wdHMub25DbG9zZWQ/LigpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fTtcbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IHBvaW50ZXJkb3duX2hhbmRsZXIgPSBlID0+ICQkaW52YWxpZGF0ZSg5LCBjbGlja2VkRWwgPSBlLnRhcmdldCk7XG5cbiAgICBcdGNvbnN0IHBvaW50ZXJ1cF9oYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBcdFx0Ly8gb25seSBjbG9zZSBpZiBsZWZ0IGNsaWNrIG9uIHNlbGYgYW5kIG5vdCBkcmFnZ2VkXG4gICAgXHRcdGlmIChlLmJ1dHRvbiAhPT0gMiAmJiBlLnRhcmdldCA9PT0gdGhpcyAmJiBjbGlja2VkRWwgPT09IHRoaXMpIHtcbiAgICBcdFx0XHQhb3B0cy5ub0Nsb3NlICYmIGNsb3NlKCk7XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdCQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIFx0XHRpZiAoJ2l0ZW1zJyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgaXRlbXMgPSAkJHByb3BzLml0ZW1zKTtcbiAgICBcdFx0aWYgKCd0YXJnZXQnIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgxNSwgdGFyZ2V0ID0gJCRwcm9wcy50YXJnZXQpO1xuICAgIFx0fTtcblxuICAgIFx0JCRzZWxmLiQkLnVwZGF0ZSA9ICgpID0+IHtcbiAgICBcdFx0aWYgKCQkc2VsZi4kJC5kaXJ0eVswXSAmIC8qaXRlbXMsIHBvc2l0aW9uLCBpc09wZW4sIG9wdHMsIGNvbnRhaW5lciwgYWN0aXZlSXRlbSovIDc4NjU0NSkge1xuICAgIFx0XHRcdGlmIChpdGVtcykge1xuICAgIFx0XHRcdFx0Ly8gdXBkYXRlIGFjdGl2ZSBpdGVtIHdoZW4gcG9zaXRpb24gY2hhbmdlc1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDYsIGFjdGl2ZUl0ZW0gPSBpdGVtc1twb3NpdGlvbl0pO1xuXG4gICAgXHRcdFx0XHRpZiAoaXNPcGVuKSB7XG4gICAgXHRcdFx0XHRcdC8vIHJ1biBvblVwZGF0ZSB3aGVuIGl0ZW1zIHVwZGF0ZWRcbiAgICBcdFx0XHRcdFx0b3B0cy5vblVwZGF0ZT8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHRyZXR1cm4gW1xuICAgIFx0XHRpdGVtcyxcbiAgICBcdFx0Y2xvc2UsXG4gICAgXHRcdHByZXYsXG4gICAgXHRcdG5leHQsXG4gICAgXHRcdHBvc2l0aW9uLFxuICAgIFx0XHRvcHRzLFxuICAgIFx0XHRhY3RpdmVJdGVtLFxuICAgIFx0XHRzbWFsbFNjcmVlbixcbiAgICBcdFx0aW5saW5lLFxuICAgIFx0XHRjbGlja2VkRWwsXG4gICAgXHRcdCR6b29tZWQsXG4gICAgXHRcdHpvb21lZCxcbiAgICBcdFx0bWVkaWFUcmFuc2l0aW9uLFxuICAgIFx0XHRnZXRDaGlsZFByb3BzLFxuICAgIFx0XHRjb250YWluZXJBY3Rpb25zLFxuICAgIFx0XHR0YXJnZXQsXG4gICAgXHRcdG9wZW4sXG4gICAgXHRcdHNldFBvc2l0aW9uLFxuICAgIFx0XHRpc09wZW4sXG4gICAgXHRcdGNvbnRhaW5lcixcbiAgICBcdFx0cG9pbnRlcmRvd25faGFuZGxlcixcbiAgICBcdFx0cG9pbnRlcnVwX2hhbmRsZXJcbiAgICBcdF07XG4gICAgfVxuXG4gICAgY2xhc3MgQmlnZ2VyX3BpY3R1cmUgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuXG4gICAgXHRcdGluaXQoXG4gICAgXHRcdFx0dGhpcyxcbiAgICBcdFx0XHRvcHRpb25zLFxuICAgIFx0XHRcdGluc3RhbmNlLFxuICAgIFx0XHRcdGNyZWF0ZV9mcmFnbWVudCxcbiAgICBcdFx0XHRub3RfZXF1YWwsXG4gICAgXHRcdFx0e1xuICAgIFx0XHRcdFx0aXRlbXM6IDAsXG4gICAgXHRcdFx0XHR0YXJnZXQ6IDE1LFxuICAgIFx0XHRcdFx0b3BlbjogMTYsXG4gICAgXHRcdFx0XHRjbG9zZTogMSxcbiAgICBcdFx0XHRcdHByZXY6IDIsXG4gICAgXHRcdFx0XHRuZXh0OiAzLFxuICAgIFx0XHRcdFx0c2V0UG9zaXRpb246IDE3XG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHRudWxsLFxuICAgIFx0XHRcdFstMSwgLTFdXG4gICAgXHRcdCk7XG4gICAgXHR9XG5cbiAgICBcdGdldCBpdGVtcygpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzBdO1xuICAgIFx0fVxuXG5cblxuICAgIFx0Z2V0IHRhcmdldCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzE1XTtcbiAgICBcdH1cblxuXG5cbiAgICBcdGdldCBvcGVuKCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMTZdO1xuICAgIFx0fVxuXG4gICAgXHRnZXQgY2xvc2UoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFsxXTtcbiAgICBcdH1cblxuICAgIFx0Z2V0IHByZXYoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFsyXTtcbiAgICBcdH1cblxuICAgIFx0Z2V0IG5leHQoKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFszXTtcbiAgICBcdH1cblxuICAgIFx0Z2V0IHNldFBvc2l0aW9uKCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMTddO1xuICAgIFx0fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIEJpZ2dlclBpY3R1cmVcbiAgICAgKiBAcGFyYW0ge3t0YXJnZXQ6IEhUTUxFbGVtZW50fX0gb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIEJpZ2dlclBpY3R1cmUgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBiaWdnZXJQaWN0dXJlIChvcHRpb25zKSB7XG4gICAgXHRyZXR1cm4gbmV3IEJpZ2dlcl9waWN0dXJlKHtcbiAgICBcdFx0Li4ub3B0aW9ucyxcbiAgICBcdFx0cHJvcHM6IG9wdGlvbnMsXG4gICAgXHR9KVxuICAgIH1cblxuICAgIHJldHVybiBiaWdnZXJQaWN0dXJlO1xuXG59KSk7XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSlcbiAgfSxcblxuICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpXG5cbiAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudClcbiAgICB9XG4gIH1cbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9pbmRleC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1BWF9VSUQgPSAxXzAwMF8wMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcblxuLyoqXG4gKiBQcm9wZXJseSBlc2NhcGUgSURzIHNlbGVjdG9ycyB0byBoYW5kbGUgd2VpcmQgSURzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmNvbnN0IHBhcnNlU2VsZWN0b3IgPSBzZWxlY3RvciA9PiB7XG4gIGlmIChzZWxlY3RvciAmJiB3aW5kb3cuQ1NTICYmIHdpbmRvdy5DU1MuZXNjYXBlKSB7XG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvciBuZWVkcyBlc2NhcGluZyB0byBoYW5kbGUgSURzIChodG1sNSspIGNvbnRhaW5pbmcgZm9yIGluc3RhbmNlIC9cbiAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoLyMoW15cXHNcIiMnXSspL2csIChtYXRjaCwgaWQpID0+IGAjJHtDU1MuZXNjYXBlKGlkKX1gKVxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yXG59XG5cbi8vIFNob3V0LW91dCBBbmd1cyBDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuY29uc3QgdG9UeXBlID0gb2JqZWN0ID0+IHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgJHtvYmplY3R9YFxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogUHVibGljIFV0aWwgQVBJXG4gKi9cblxuY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgZG8ge1xuICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKVxuICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuXG4gIHJldHVybiBwcmVmaXhcbn1cblxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG59XG5cbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSBvYmplY3QgPT4ge1xuICBpZiAoIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9iamVjdCA9IG9iamVjdFswXVxuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnXG59XG5cbmNvbnN0IGdldEVsZW1lbnQgPSBvYmplY3QgPT4ge1xuICAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICBpZiAoaXNFbGVtZW50KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0LmpxdWVyeSA/IG9iamVjdFswXSA6IG9iamVjdFxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdzdHJpbmcnICYmIG9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyc2VTZWxlY3RvcihvYmplY3QpKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gIGlmICghaXNFbGVtZW50KGVsZW1lbnQpIHx8IGVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRJc1Zpc2libGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnXG4gIC8vIEhhbmRsZSBgZGV0YWlsc2AgZWxlbWVudCBhcyBpdHMgY29udGVudCBtYXkgZmFsc2llIGFwcGVhciB2aXNpYmxlIHdoZW4gaXQgaXMgY2xvc2VkXG4gIGNvbnN0IGNsb3NlZERldGFpbHMgPSBlbGVtZW50LmNsb3Nlc3QoJ2RldGFpbHM6bm90KFtvcGVuXSknKVxuXG4gIGlmICghY2xvc2VkRGV0YWlscykge1xuICAgIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG4gIH1cblxuICBpZiAoY2xvc2VkRGV0YWlscyAhPT0gZWxlbWVudCkge1xuICAgIGNvbnN0IHN1bW1hcnkgPSBlbGVtZW50LmNsb3Nlc3QoJ3N1bW1hcnknKVxuICAgIGlmIChzdW1tYXJ5ICYmIHN1bW1hcnkucGFyZW50Tm9kZSAhPT0gY2xvc2VkRGV0YWlscykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHN1bW1hcnkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50SXNWaXNpYmxlXG59XG5cbmNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWRcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJ1xufVxuXG5jb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG4vKipcbiAqIFRyaWNrIHRvIHJlc3RhcnQgYW4gZWxlbWVudCdzIGFuaW1hdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4gdm9pZFxuICpcbiAqIEBzZWUgaHR0cHM6Ly93d3cuY2hhcmlzdGhlby5pby9ibG9nLzIwMjEvMDIvcmVzdGFydC1hLWNzcy1hbmltYXRpb24td2l0aC1qYXZhc2NyaXB0LyNyZXN0YXJ0aW5nLWEtY3NzLWFuaW1hdGlvblxuICovXG5jb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5vZmZzZXRIZWlnaHQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbn1cblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBpZiAod2luZG93LmpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4gd2luZG93LmpRdWVyeVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcyA9IFtdXG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIC8vIGFkZCBsaXN0ZW5lciBvbiB0aGUgZmlyc3QgY2FsbCB3aGVuIHRoZSBkb2N1bWVudCBpcyBpbiBsb2FkaW5nIHN0YXRlXG4gICAgaWYgKCFET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MucHVzaChjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuXG5jb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUVcbiAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV1cbiAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luXG4gICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGV4ZWN1dGUgPSAocG9zc2libGVDYWxsYmFjaywgYXJncyA9IFtdLCBkZWZhdWx0VmFsdWUgPSBwb3NzaWJsZUNhbGxiYWNrKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgcG9zc2libGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IHBvc3NpYmxlQ2FsbGJhY2soLi4uYXJncykgOiBkZWZhdWx0VmFsdWVcbn1cblxuY29uc3QgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiA9IChjYWxsYmFjaywgdHJhbnNpdGlvbkVsZW1lbnQsIHdhaXRGb3JUcmFuc2l0aW9uID0gdHJ1ZSkgPT4ge1xuICBpZiAoIXdhaXRGb3JUcmFuc2l0aW9uKSB7XG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRyYW5zaXRpb25FbGVtZW50KSArIGR1cmF0aW9uUGFkZGluZ1xuXG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gIGNvbnN0IGhhbmRsZXIgPSAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIGlmICh0YXJnZXQgIT09IHRyYW5zaXRpb25FbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgdHJhbnNpdGlvbkVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICB9XG5cbiAgdHJhbnNpdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgaGFuZGxlcilcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25FbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHByZXZpb3VzL25leHQgZWxlbWVudCBvZiBhIGxpc3QuXG4gKlxuICogQHBhcmFtIHthcnJheX0gbGlzdCAgICBUaGUgbGlzdCBvZiBlbGVtZW50c1xuICogQHBhcmFtIGFjdGl2ZUVsZW1lbnQgICBUaGUgYWN0aXZlIGVsZW1lbnRcbiAqIEBwYXJhbSBzaG91bGRHZXROZXh0ICAgQ2hvb3NlIHRvIGdldCBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnRcbiAqIEBwYXJhbSBpc0N5Y2xlQWxsb3dlZFxuICogQHJldHVybiB7RWxlbWVudHxlbGVtfSBUaGUgcHJvcGVyIGVsZW1lbnRcbiAqL1xuY29uc3QgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQgPSAobGlzdCwgYWN0aXZlRWxlbWVudCwgc2hvdWxkR2V0TmV4dCwgaXNDeWNsZUFsbG93ZWQpID0+IHtcbiAgY29uc3QgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoXG4gIGxldCBpbmRleCA9IGxpc3QuaW5kZXhPZihhY3RpdmVFbGVtZW50KVxuXG4gIC8vIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0IGluIHRoZSBsaXN0IHJldHVybiBhbiBlbGVtZW50XG4gIC8vIGRlcGVuZGluZyBvbiB0aGUgZGlyZWN0aW9uIGFuZCBpZiBjeWNsZSBpcyBhbGxvd2VkXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gIXNob3VsZEdldE5leHQgJiYgaXNDeWNsZUFsbG93ZWQgPyBsaXN0W2xpc3RMZW5ndGggLSAxXSA6IGxpc3RbMF1cbiAgfVxuXG4gIGluZGV4ICs9IHNob3VsZEdldE5leHQgPyAxIDogLTFcblxuICBpZiAoaXNDeWNsZUFsbG93ZWQpIHtcbiAgICBpbmRleCA9IChpbmRleCArIGxpc3RMZW5ndGgpICUgbGlzdExlbmd0aFxuICB9XG5cbiAgcmV0dXJuIGxpc3RbTWF0aC5tYXgoMCwgTWF0aC5taW4oaW5kZXgsIGxpc3RMZW5ndGggLSAxKSldXG59XG5cbmV4cG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbixcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldEVsZW1lbnQsXG4gIGdldGpRdWVyeSxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcCxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBwYXJzZVNlbGVjdG9yLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0b1R5cGVcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBnZXRqUXVlcnkgfSBmcm9tICcuLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cblxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiBQcml2YXRlIG1ldGhvZHNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRXZlbnRVaWQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogZWxlbWVudCB9KVxuXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgZm9yIChsZXQgeyB0YXJnZXQgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChjb25zdCBkb21FbGVtZW50IG9mIGRvbUVsZW1lbnRzKSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaHlkcmF0ZU9iaihldmVudCwgeyBkZWxlZ2F0ZVRhcmdldDogdGFyZ2V0IH0pXG5cbiAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGNhbGxhYmxlLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGV2ZW50cylcbiAgICAuZmluZChldmVudCA9PiBldmVudC5jYWxsYWJsZSA9PT0gY2FsbGFibGUgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICBjb25zdCBpc0RlbGVnYXRlZCA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICAvLyBUT0RPOiB0b29sdGlwIHBhc3NlcyBgZmFsc2VgIGluc3RlYWQgb2Ygc2VsZWN0b3IsIHNvIHdlIG5lZWQgdG8gY2hlY2tcbiAgY29uc3QgY2FsbGFibGUgPSBpc0RlbGVnYXRlZCA/IGRlbGVnYXRpb25GdW5jdGlvbiA6IChoYW5kbGVyIHx8IGRlbGVnYXRpb25GdW5jdGlvbilcbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcblxuICBpZiAoIW5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKG9yaWdpbmFsVHlwZUV2ZW50IGluIGN1c3RvbUV2ZW50cykge1xuICAgIGNvbnN0IHdyYXBGdW5jdGlvbiA9IGZuID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxsYWJsZSA9IHdyYXBGdW5jdGlvbihjYWxsYWJsZSlcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGdW5jdGlvbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGdW5jdGlvbikge1xuICAgIHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmID0gcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IG1ha2VFdmVudFVpZChjYWxsYWJsZSwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGlzRGVsZWdhdGVkID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjYWxsYWJsZSkgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgY2FsbGFibGUpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbFxuICBmbi5jYWxsYWJsZSA9IGNhbGxhYmxlXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgaXNEZWxlZ2F0ZWQpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgZm9yIChjb25zdCBbaGFuZGxlcktleSwgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIGNhbGxhYmxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnRFdmVudCBvZiBPYmplY3Qua2V5cyhldmVudHMpKSB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBba2V5SGFuZGxlcnMsIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50LmNhbGxhYmxlLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50XG5cbiAgICBsZXQgalF1ZXJ5RXZlbnQgPSBudWxsXG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcblxuICAgIGlmIChpbk5hbWVzcGFjZSAmJiAkKSB7XG4gICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpXG5cbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudClcbiAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gICAgfVxuXG4gICAgY29uc3QgZXZ0ID0gaHlkcmF0ZU9iaihuZXcgRXZlbnQoZXZlbnQsIHsgYnViYmxlcywgY2FuY2VsYWJsZTogdHJ1ZSB9KSwgYXJncylcblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgalF1ZXJ5RXZlbnQpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZnVuY3Rpb24gaHlkcmF0ZU9iaihvYmosIG1ldGEgPSB7fSkge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuICAgIHRyeSB7XG4gICAgICBvYmpba2V5XSA9IHZhbHVlXG4gICAgfSBjYXRjaCB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gTnVtYmVyKHZhbHVlKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cbiAgICBjb25zdCBic0tleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykgJiYgIWtleS5zdGFydHNXaXRoKCdic0NvbmZpZycpKVxuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgYnNLZXlzKSB7XG4gICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aClcbiAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKVxuICAgIH1cblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2NvbmZpZy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgeyBpc0VsZW1lbnQsIHRvVHlwZSB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbmZpZyB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZylcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tZXJnZUNvbmZpZ09iaihjb25maWcsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBqc29uQ29uZmlnID0gaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCAnY29uZmlnJykgOiB7fSAvLyB0cnkgdG8gcGFyc2VcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi4odHlwZW9mIGpzb25Db25maWcgPT09ICdvYmplY3QnID8ganNvbkNvbmZpZyA6IHt9KSxcbiAgICAgIC4uLihpc0VsZW1lbnQoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSA6IHt9KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgfVxuXG4gIF90eXBlQ2hlY2tDb25maWcoY29uZmlnLCBjb25maWdUeXBlcyA9IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpIHtcbiAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgZXhwZWN0ZWRUeXBlc10gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnVHlwZXMpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IGlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBgJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhLmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL3V0aWwvY29uZmlnLmpzJ1xuaW1wb3J0IHsgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBWRVJTSU9OID0gJzUuMy4zJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5TmFtZSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgdGhpcy5fZWxlbWVudClcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldChnZXRFbGVtZW50KGVsZW1lbnQpLCB0aGlzLkRBVEFfS0VZKVxuICB9XG5cbiAgc3RhdGljIGdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCwgY29uZmlnID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZShlbGVtZW50KSB8fCBuZXcgdGhpcyhlbGVtZW50LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGwpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gXG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YFxuICB9XG5cbiAgc3RhdGljIGV2ZW50TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGAke25hbWV9JHt0aGlzLkVWRU5UX0tFWX1gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgaXNEaXNhYmxlZCwgaXNWaXNpYmxlLCBwYXJzZVNlbGVjdG9yIH0gZnJvbSAnLi4vdXRpbC9pbmRleC5qcydcblxuY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JylcblxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICBsZXQgaHJlZkF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHJpYnV0ZSB8fCAoIWhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBocmVmQXR0cmlidXRlID0gYCMke2hyZWZBdHRyaWJ1dGUuc3BsaXQoJyMnKVsxXX1gXG4gICAgfVxuXG4gICAgc2VsZWN0b3IgPSBocmVmQXR0cmlidXRlICYmIGhyZWZBdHRyaWJ1dGUgIT09ICcjJyA/IGhyZWZBdHRyaWJ1dGUudHJpbSgpIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yID8gc2VsZWN0b3Iuc3BsaXQoJywnKS5tYXAoc2VsID0+IHBhcnNlU2VsZWN0b3Ioc2VsKSkuam9pbignLCcpIDogbnVsbFxufVxuXG5jb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSlcbiAgfSxcblxuICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3RvcilcbiAgfSxcblxuICBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbikuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKVxuICB9LFxuXG4gIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwYXJlbnRzID0gW11cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3RvcilcblxuICAgIHdoaWxlIChhbmNlc3Rvcikge1xuICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKVxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcbiAgLy8gVE9ETzogdGhpcyBpcyBub3cgdW51c2VkOyByZW1vdmUgbGF0ZXIgYWxvbmcgd2l0aCBwcmV2KClcbiAgbmV4dChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW25leHRdXG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuXG4gIGZvY3VzYWJsZUNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICBjb25zdCBmb2N1c2FibGVzID0gW1xuICAgICAgJ2EnLFxuICAgICAgJ2J1dHRvbicsXG4gICAgICAnaW5wdXQnLFxuICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICdzZWxlY3QnLFxuICAgICAgJ2RldGFpbHMnLFxuICAgICAgJ1t0YWJpbmRleF0nLFxuICAgICAgJ1tjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJ1xuICAgIF0ubWFwKHNlbGVjdG9yID0+IGAke3NlbGVjdG9yfTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pYCkuam9pbignLCcpXG5cbiAgICByZXR1cm4gdGhpcy5maW5kKGZvY3VzYWJsZXMsIGVsZW1lbnQpLmZpbHRlcihlbCA9PiAhaXNEaXNhYmxlZChlbCkgJiYgaXNWaXNpYmxlKGVsKSlcbiAgfSxcblxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgOiBudWxsXG4gIH0sXG5cbiAgZ2V0TXVsdGlwbGVFbGVtZW50c0Zyb21TZWxlY3RvcihlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikgOiBbXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yRW5naW5lXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBhcmVudDogbnVsbCxcbiAgdG9nZ2xlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW11cblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXVxuXG4gICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUylcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKSB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCAiKCgpID0+IHtcbiAgY29uc3QgYWN0aXZlUGFyZW50ID0gKGNoaWxkOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGNoaWxkLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJy5oYi1kb2NzLW5hdi1saW5rcy1ncm91cCcpIGFzIEhUTUxFbGVtZW50XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignLmNvbGxhcHNlJyk/LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIGNvbnN0IGhlYWRpbmcgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLmhiLWRvY3MtbmF2LWhlYWRpbmcnKSBhcyBIVE1MRWxlbWVudFxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5oYi1kb2NzLW5hdi1pdGVtLXRvZ2dsZScpPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgYWN0aXZlUGFyZW50KHBhcmVudClcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZSA9IChsaW5rOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBhY3RpdmVQYXJlbnQobGluaylcbiAgfVxuXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGItZG9jcy1uYXYtbGlua3MgYVtocmVmPVwiJHtsb2NhdGlvbi5wYXRobmFtZX1cIl1gKSBhcyBIVE1MRWxlbWVudFxuICBpZiAobGluayA9PSBudWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBhY3RpdmUobGluaylcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGItZG9jcy1uYXYnKT8uc2Nyb2xsVG8oMCwgbGluay5vZmZzZXRUb3ApXG4gIH0pXG59KSgpXG4iLCAiKCgpID0+IHtcbiAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhiLWRvY3MtbmF2LXRvZ2dsZScpXG4gIGNvbnN0IGRvY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGItZG9jcycpXG4gIGlmICghdG9nZ2xlIHx8ICFkb2NzKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBjbGFzc05hbWUgPSAnc2lkZWJhci1vZmYnXG5cbiAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2NzLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICBkb2NzLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2NzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIH1cbiAgfSlcbn0pKClcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZSxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgbm9vcFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdkcm9wZG93bidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDIgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUiA9ICdkcm9wdXAtY2VudGVyJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIgPSAnZHJvcGRvd24tY2VudGVyJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9LiR7Q0xBU1NfTkFNRV9TSE9XfWBcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVIgPSAnLm5hdmJhcidcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwoKSA/ICd0b3AtZW5kJyA6ICd0b3Atc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gaXNSVEwoKSA/ICd0b3Atc3RhcnQnIDogJ3RvcC1lbmQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gaXNSVEwoKSA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwoKSA/ICdib3R0b20tc3RhcnQnIDogJ2JvdHRvbS1lbmQnXG5jb25zdCBQTEFDRU1FTlRfUklHSFQgPSBpc1JUTCgpID8gJ2xlZnQtc3RhcnQnIDogJ3JpZ2h0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0xFRlQgPSBpc1JUTCgpID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUENFTlRFUiA9ICd0b3AnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSID0gJ2JvdHRvbSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b0Nsb3NlOiB0cnVlLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgb2Zmc2V0OiBbMCwgMl0sXG4gIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAvLyBkcm9wZG93biB3cmFwcGVyXG4gICAgLy8gVE9ETzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4zL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgIHRoaXMuX21lbnUgPSBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdIHx8XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01FTlUsIHRoaXMuX3BhcmVudClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bigpID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlUG9wcGVyKClcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhdGhpcy5fcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLl9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSBzdXBlci5fZ2V0Q29uZmlnKGNvbmZpZylcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChjb25maWcucmVmZXJlbmNlKSAmJlxuICAgICAgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICAvLyBQb3BwZXIgdmlydHVhbCBlbGVtZW50cyByZXF1aXJlIGEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtOQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NyZWF0ZVBvcHBlcigpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX3BhcmVudFxuICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuICAgIH1cblxuICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHRoaXMuX2dldFBvcHBlckNvbmZpZygpXG4gICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX3BhcmVudFxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BFTkQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9UT1BDRU5URVJcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9CT1RUT01DRU5URVJcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSKSAhPT0gbnVsbFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheSBvciBEcm9wZG93biBpcyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIgfHwgdGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJykgLy8gVE9ETzogdjYgcmVtb3ZlXG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW2RlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdE1lbnVJdGVtKHsga2V5LCB0YXJnZXQgfSkge1xuICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoZWxlbWVudCA9PiBpc1Zpc2libGUoZWxlbWVudCkpXG5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gaWYgdGFyZ2V0IGlzbid0IGluY2x1ZGVkIGluIGl0ZW1zIChlLmcuIHdoZW4gZXhwYW5kaW5nIHRoZSBkcm9wZG93bilcbiAgICAvLyBhbGxvdyBjeWNsaW5nIHRvIGdldCB0aGUgbGFzdCBpdGVtIGluIGNhc2Uga2V5IGVxdWFscyBBUlJPV19VUF9LRVlcbiAgICBnZXROZXh0QWN0aXZlRWxlbWVudChpdGVtcywgdGFyZ2V0LCBrZXkgPT09IEFSUk9XX0RPV05fS0VZLCAhaXRlbXMuaW5jbHVkZXModGFyZ2V0KSkuZm9jdXMoKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3BlblRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOKVxuXG4gICAgZm9yIChjb25zdCB0b2dnbGUgb2Ygb3BlblRvZ2dsZXMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBEcm9wZG93bi5nZXRJbnN0YW5jZSh0b2dnbGUpXG4gICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKClcbiAgICAgIGNvbnN0IGlzTWVudVRhcmdldCA9IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9tZW51KVxuICAgICAgaWYgKFxuICAgICAgICBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fZWxlbWVudCkgfHxcbiAgICAgICAgKGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdpbnNpZGUnICYmICFpc01lbnVUYXJnZXQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIFRhYiBuYXZpZ2F0aW9uIHRocm91Z2ggdGhlIGRyb3Bkb3duIG1lbnUgb3IgZXZlbnRzIGZyb20gY29udGFpbmVkIGlucHV0cyBzaG91bGRuJ3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgIGlmIChjb250ZXh0Ll9tZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgKChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSkgfHwgL2lucHV0fHNlbGVjdHxvcHRpb258dGV4dGFyZWF8Zm9ybS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0geyByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50IH1cblxuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBhbiBVUCB8IERPV04gfCBFU0NBUEUga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYSAmJiBpZiBrZXkgaXMgb3RoZXIgdGhhbiBFU0NBUEUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuXG4gICAgY29uc3QgaXNJbnB1dCA9IC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpXG4gICAgY29uc3QgaXNFc2NhcGVFdmVudCA9IGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWVxuICAgIGNvbnN0IGlzVXBPckRvd25FdmVudCA9IFtBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpXG5cbiAgICBpZiAoIWlzVXBPckRvd25FdmVudCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzSW5wdXQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIFRPRE86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICBjb25zdCBnZXRUb2dnbGVCdXR0b24gPSB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUpID9cbiAgICAgIHRoaXMgOlxuICAgICAgKFNlbGVjdG9yRW5naW5lLnByZXYodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdIHx8XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdIHx8XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnBhcmVudE5vZGUpKVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKGdldFRvZ2dsZUJ1dHRvbilcblxuICAgIGlmIChpc1VwT3JEb3duRXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5zaG93KClcbiAgICAgIGluc3RhbmNlLl9zZWxlY3RNZW51SXRlbShldmVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5faXNTaG93bigpKSB7IC8vIGVsc2UgaXMgZXNjYXBlIGFuZCB3ZSBjaGVjayBpZiBpdCBpcyBzaG93blxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGluc3RhbmNlLmhpZGUoKVxuICAgICAgZ2V0VG9nZ2xlQnV0dG9uLmZvY3VzKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oRHJvcGRvd24pXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvYmFja2Ryb3AuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7XG4gIGV4ZWN1dGUsIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQsIHJlZmxvd1xufSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUV9YFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBjbGFzc05hbWU6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIGNsaWNrQ2FsbGJhY2s6IG51bGwsXG4gIGlzQW5pbWF0ZWQ6IGZhbHNlLFxuICBpc1Zpc2libGU6IHRydWUsIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gIHJvb3RFbGVtZW50OiAnYm9keScgLy8gZ2l2ZSB0aGUgY2hvaWNlIHRvIHBsYWNlIGJhY2tkcm9wIHVuZGVyIGRpZmZlcmVudCBlbGVtZW50c1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gIHJvb3RFbGVtZW50OiAnKGVsZW1lbnR8c3RyaW5nKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFja2Ryb3AgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwZW5kKClcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHJlZmxvdyhlbGVtZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzcG9zZSgpXG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pXG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gdGhpcy5fY29uZmlnLmNsYXNzTmFtZVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gYmFja2Ryb3BcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gdXNlIGdldEVsZW1lbnQoKSB3aXRoIHRoZSBkZWZhdWx0IFwiYm9keVwiIHRvIGdldCBhIGZyZXNoIEVsZW1lbnQgb24gZWFjaCBpbnN0YW50aWF0aW9uXG4gICAgY29uZmlnLnJvb3RFbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcucm9vdEVsZW1lbnQpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmQoZWxlbWVudClcblxuICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCBFVkVOVF9NT1VTRURPV04sICgpID0+IHtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSB0cnVlXG4gIH1cblxuICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24oY2FsbGJhY2ssIHRoaXMuX2dldEVsZW1lbnQoKSwgdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2Ryb3BcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgaXNEaXNhYmxlZCB9IGZyb20gJy4vaW5kZXguanMnXG5cbmNvbnN0IGVuYWJsZURpc21pc3NUcmlnZ2VyID0gKGNvbXBvbmVudCwgbWV0aG9kID0gJ2hpZGUnKSA9PiB7XG4gIGNvbnN0IGNsaWNrRXZlbnQgPSBgY2xpY2suZGlzbWlzcyR7Y29tcG9uZW50LkVWRU5UX0tFWX1gXG4gIGNvbnN0IG5hbWUgPSBjb21wb25lbnQuTkFNRVxuXG4gIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgY2xpY2tFdmVudCwgYFtkYXRhLWJzLWRpc21pc3M9XCIke25hbWV9XCJdYCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpIHx8IHRoaXMuY2xvc2VzdChgLiR7bmFtZX1gKVxuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50LmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuXG4gICAgLy8gTWV0aG9kIGFyZ3VtZW50IGlzIGxlZnQsIGZvciBBbGVydCBhbmQgb25seSwgYXMgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlICdoaWRlJyBtZXRob2RcbiAgICBpbnN0YW5jZVttZXRob2RdKClcbiAgfSlcbn1cblxuZXhwb3J0IHtcbiAgZW5hYmxlRGlzbWlzc1RyaWdnZXJcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9mb2N1c3RyYXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZm9jdXN0cmFwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZm9jdXN0cmFwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fVEFCID0gYGtleWRvd24udGFiJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IFRBQl9OQVZfRk9SV0FSRCA9ICdmb3J3YXJkJ1xuY29uc3QgVEFCX05BVl9CQUNLV0FSRCA9ICdiYWNrd2FyZCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYXV0b2ZvY3VzOiB0cnVlLFxuICB0cmFwRWxlbWVudDogbnVsbCAvLyBUaGUgZWxlbWVudCB0byB0cmFwIGZvY3VzIGluc2lkZSBvZlxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYXV0b2ZvY3VzOiAnYm9vbGVhbicsXG4gIHRyYXBFbGVtZW50OiAnZWxlbWVudCdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgRm9jdXNUcmFwIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvZm9jdXMpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy50cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUZvY3VzaW4oZXZlbnQpKVxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9UQUIsIGV2ZW50ID0+IHRoaXMuX2hhbmRsZUtleWRvd24oZXZlbnQpKVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlXG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIGlmICghdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9oYW5kbGVGb2N1c2luKGV2ZW50KSB7XG4gICAgY29uc3QgeyB0cmFwRWxlbWVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBkb2N1bWVudCB8fCBldmVudC50YXJnZXQgPT09IHRyYXBFbGVtZW50IHx8IHRyYXBFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZm9jdXNhYmxlQ2hpbGRyZW4odHJhcEVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0cmFwRWxlbWVudC5mb2N1cygpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID09PSBUQUJfTkFWX0JBQ0tXQVJEKSB7XG4gICAgICBlbGVtZW50c1tlbGVtZW50cy5sZW5ndGggLSAxXS5mb2N1cygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzWzBdLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlS2V5ZG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IFRBQl9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPSBldmVudC5zaGlmdEtleSA/IFRBQl9OQVZfQkFDS1dBUkQgOiBUQUJfTkFWX0ZPUldBUkRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2N1c1RyYXBcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuY29uc3QgUFJPUEVSVFlfUEFERElORyA9ICdwYWRkaW5nLXJpZ2h0J1xuY29uc3QgUFJPUEVSVFlfTUFSR0lOID0gJ21hcmdpbi1yaWdodCdcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU2Nyb2xsQmFySGVscGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmJvZHlcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBnZXRXaWR0aCgpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gICAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICB0aGlzLl9kaXNhYmxlT3ZlckZsb3coKVxuICAgIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2UgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMgdG8ga2VlcCBzaG93aW5nIGZ1bGx3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4pXG4gIH1cblxuICBpc092ZXJmbG93aW5nKCkge1xuICAgIHJldHVybiB0aGlzLmdldFdpZHRoKCkgPiAwXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9kaXNhYmxlT3ZlckZsb3coKSB7XG4gICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUodGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgfVxuXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fZWxlbWVudCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5LCBhY3R1YWxWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhzZWxlY3Rvciwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IG1hbmlwdWxhdGlvbkNhbGxCYWNrID0gZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIC8vIFdlIG9ubHkgd2FudCB0byByZW1vdmUgdGhlIHByb3BlcnR5IGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGA7IHRoZSB2YWx1ZSBjYW4gYWxzbyBiZSB6ZXJvXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3BlcnR5KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBjYWxsQmFjaykge1xuICAgIGlmIChpc0VsZW1lbnQoc2VsZWN0b3IpKSB7XG4gICAgICBjYWxsQmFjayhzZWxlY3RvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VsIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBjYWxsQmFjayhzZWwpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhckhlbHBlclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBvZmZjYW52YXMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL3V0aWwvZm9jdXN0cmFwLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGVcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnb2ZmY2FudmFzJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMub2ZmY2FudmFzJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcbmNvbnN0IENMQVNTX05BTUVfSElESU5HID0gJ2hpZGluZydcbmNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnb2ZmY2FudmFzLWJhY2tkcm9wJ1xuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2Nyb2xsOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkuaGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwgfHwgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzdHJhcC5hY3RpdmF0ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgdGhpcy5fZWxlbWVudC5ibHVyKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9ISURJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBuZXcgU2Nyb2xsQmFySGVscGVyKCkucmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxiYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICB0aGlzLl9mb2N1c3RyYXAuZGVhY3RpdmF0ZSgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgY29uc3QgY2xpY2tDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5oaWRlKClcbiAgICB9XG5cbiAgICAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWVcbiAgICBjb25zdCBpc1Zpc2libGUgPSBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcClcblxuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgY2xhc3NOYW1lOiBDTEFTU19OQU1FX0JBQ0tEUk9QLFxuICAgICAgaXNWaXNpYmxlLFxuICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjbGlja0NhbGxiYWNrOiBpc1Zpc2libGUgPyBjbGlja0NhbGxiYWNrIDogbnVsbFxuICAgIH0pXG4gIH1cblxuICBfaW5pdGlhbGl6ZUZvY3VzVHJhcCgpIHtcbiAgICByZXR1cm4gbmV3IEZvY3VzVHJhcCh7XG4gICAgICB0cmFwRWxlbWVudDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgdGhpcy5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxyZWFkeU9wZW4gJiYgYWxyZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikpIHtcbiAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShzZWxlY3Rvcikuc2hvdygpXG4gIH1cbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZCgnW2FyaWEtbW9kYWxdW2NsYXNzKj1zaG93XVtjbGFzcyo9b2ZmY2FudmFzLV0nKSkge1xuICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KS5oaWRlKClcbiAgICB9XG4gIH1cbn0pXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKE9mZmNhbnZhcylcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsICJpbXBvcnQgXCJqcy9ib290c3RyYXAvc3JjL2Ryb3Bkb3duXCI7XG5pbXBvcnQgXCJqcy9ib290c3RyYXAvc3JjL29mZmNhbnZhc1wiO1xuXG4oKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYi1oZWFkZXInKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBjb25zdCBuYXYgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmhiLWhlYWRlci1uYXYnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICBpZiAoIWhlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aXZlTWVudSA9IChtZW51OiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3BhZ2UnKVxuICAgICAgICAgICAgbWVudS5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gbWVudS5jbG9zZXN0KCcuaGItaGVhZGVyLW1lbnUnKVxuICAgICAgICAgICAgcGFyZW50Py5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgcGFyZW50Py5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbms6Zmlyc3QtY2hpbGQnKT8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzTWVudVBhcmVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgPz8gJydcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKGhyZWYpICE9PSAtMSB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihocmVmKSAhPT0gLTFcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lbnVzID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoYGFbaHJlZj1cIiR7d2luZG93LmxvY2F0aW9uLmhyZWZ9XCJdLCBhW2hyZWY9XCIke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1cIl1gKVxuICAgICAgICBpZiAobWVudXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWVudXMuZm9yRWFjaChtZW51ID0+IHtcbiAgICAgICAgICAgICAgICBhY3RpdmVNZW51KG1lbnUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZvdW5kUGFyZW50ID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1lbnVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLmhiLWhlYWRlci1zdWJtZW51JykpXG4gICAgICAgICAgICAvLyBmaW5kIHBhcmVudCBtZW51IGZyb20gc2Vjb25kLWxldmVsIG1lbnVzLlxuICAgICAgICAgICAgZm9yIChsZXQgbWVudSBvZiBzdWJtZW51cykge1xuICAgICAgICAgICAgICAgIGlmIChpc01lbnVQYXJlbnQobWVudSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWVudShtZW51KVxuICAgICAgICAgICAgICAgICAgICBmb3VuZFBhcmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZvdW5kUGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gZmluZCBwYXJlbnQgbWVudSBmcm9tIHRvcC1sZXZlbCBtZW51cy5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtZW51IG9mIEFycmF5LmZyb20obmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubmF2LWxpbmsnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWVudVBhcmVudChtZW51KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTWVudShtZW51KVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNoYWRvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdzaGFkb3ctc20nKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlU2hhZG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5jb250YWlucygnc2hhZG93LXNtJykgJiYgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWRvdy1zbScpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvcGFjaXR5Jyk7XG4gICAgICAgICAgICBuYXYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3otaW5kZXgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgIG5hdi5zdHlsZS56SW5kZXggPSAnMCc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaCA9IDA7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDIwO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAhPT0gMCkge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc01vYmlsZSA9ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IDU3NlxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgICAgIHNob3coKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgICAgIHJlbW92ZVNoYWRvdygpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgICAgIHNoYWRvdygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNNb2JpbGUoKSAmJiBNYXRoLmFicyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC0gaCkgPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gaCA/IGhpZGUoKSA6IHNob3coKTtcbiAgICAgICAgICAgICAgICBoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSkoKVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3N3aXBlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBleGVjdXRlIH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3N3aXBlJ1xuY29uc3QgRVZFTlRfS0VZID0gJy5icy5zd2lwZSdcbmNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSEVORCA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWBcbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBlbmRDYWxsYmFjazogbnVsbCxcbiAgbGVmdENhbGxiYWNrOiBudWxsLFxuICByaWdodENhbGxiYWNrOiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBlbmRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGxlZnRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIHJpZ2h0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFN3aXBlIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBpZiAoIWVsZW1lbnQgfHwgIVN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZGVsdGFYID0gMFxuICAgIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KVxuICAgIHRoaXMuX2luaXRFdmVudHMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBkaXNwb3NlKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfc3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYXG4gICAgfVxuICB9XG5cbiAgX2VuZChldmVudCkge1xuICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5lbmRDYWxsYmFjaylcbiAgfVxuXG4gIF9tb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDEgP1xuICAgICAgMCA6XG4gICAgICBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLl9kZWx0YVhcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YVggPSBNYXRoLmFicyh0aGlzLl9kZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGFYIDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGFYIC8gdGhpcy5fZGVsdGFYXG5cbiAgICB0aGlzLl9kZWx0YVggPSAwXG5cbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShkaXJlY3Rpb24gPiAwID8gdGhpcy5fY29uZmlnLnJpZ2h0Q2FsbGJhY2sgOiB0aGlzLl9jb25maWcubGVmdENhbGxiYWNrKVxuICB9XG5cbiAgX2luaXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGVcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgY2Fyb3VzZWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmRcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IFN3aXBlIGZyb20gJy4vdXRpbC9zd2lwZS5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG5jb25zdCBPUkRFUl9ORVhUID0gJ25leHQnXG5jb25zdCBPUkRFUl9QUkVWID0gJ3ByZXYnXG5jb25zdCBESVJFQ1RJT05fTEVGVCA9ICdsZWZ0J1xuY29uc3QgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0J1xuXG5jb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0RSQUdfU1RBUlQgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FST1VTRUwgPSAnY2Fyb3VzZWwnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnXG5jb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0J1xuY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldidcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9JVEVNID0gJy5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSBTRUxFQ1RPUl9BQ1RJVkUgKyBTRUxFQ1RPUl9JVEVNXG5jb25zdCBTRUxFQ1RPUl9JVEVNX0lNRyA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1JTID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IEtFWV9UT19ESVJFQ1RJT04gPSB7XG4gIFtBUlJPV19MRUZUX0tFWV06IERJUkVDVElPTl9SSUdIVCxcbiAgW0FSUk9XX1JJR0hUX0tFWV06IERJUkVDVElPTl9MRUZUXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIHJpZGU6IGZhbHNlLFxuICB0b3VjaDogdHJ1ZSxcbiAgd3JhcDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJywgLy8gVE9ETzp2NiByZW1vdmUgYm9vbGVhbiBzdXBwb3J0XG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHJpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgdG91Y2g6ICdib29sZWFuJyxcbiAgd3JhcDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG51bGxcblxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgIGlmICh0aGlzLl9jb25maWcucmlkZSA9PT0gQ0xBU1NfTkFNRV9DQVJPVVNFTCkge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBuZXh0KCkge1xuICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpXG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRklYTUUgVE9ETyB1c2UgYGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZWBcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGlzVmlzaWJsZSh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpXG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKVxuICB9XG5cbiAgY3ljbGUoKSB7XG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm5leHRXaGVuVmlzaWJsZSgpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gIH1cblxuICBfbWF5YmVFbmFibGVDeWNsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5yaWRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMuY3ljbGUoKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY3ljbGUoKVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zKClcbiAgICBpZiAoaW5kZXggPiBpdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2dldEFjdGl2ZSgpKVxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyID0gaW5kZXggPiBhY3RpdmVJbmRleCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShvcmRlciwgaXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fc3dpcGVIZWxwZXIpIHtcbiAgICAgIHRoaXMuX3N3aXBlSGVscGVyLmRpc3Bvc2UoKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcuZGVmYXVsdEludGVydmFsID0gY29uZmlnLmludGVydmFsXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiwgKCkgPT4gdGhpcy5wYXVzZSgpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUsICgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoICYmIFN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGZvciAoY29uc3QgaW1nIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTV9JTUcsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24oaW1nLCBFVkVOVF9EUkFHX1NUQVJULCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGVuZENhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSAhPT0gJ2hvdmVyJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgIH1cblxuICAgIGNvbnN0IHN3aXBlQ29uZmlnID0ge1xuICAgICAgbGVmdENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9MRUZUKSksXG4gICAgICByaWdodENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9SSUdIVCkpLFxuICAgICAgZW5kQ2FsbGJhY2s6IGVuZENhbGxCYWNrXG4gICAgfVxuXG4gICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBuZXcgU3dpcGUodGhpcy5fZWxlbWVudCwgc3dpcGVDb25maWcpXG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gS0VZX1RPX0RJUkVDVElPTltldmVudC5rZXldXG4gICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgYWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcblxuICAgIGNvbnN0IG5ld0FjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoYFtkYXRhLWJzLXNsaWRlLXRvPVwiJHtpbmRleH1cIl1gLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgIGlmIChuZXdBY3RpdmVJbmRpY2F0b3IpIHtcbiAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3RydWUnKVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCB0aGlzLl9nZXRBY3RpdmUoKVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBlbGVtZW50SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbFxuICB9XG5cbiAgX3NsaWRlKG9yZGVyLCBlbGVtZW50ID0gbnVsbCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9nZXRBY3RpdmUoKVxuICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IGdldE5leHRBY3RpdmVFbGVtZW50KHRoaXMuX2dldEl0ZW1zKCksIGFjdGl2ZUVsZW1lbnQsIGlzTmV4dCwgdGhpcy5fY29uZmlnLndyYXApXG5cbiAgICBpZiAobmV4dEVsZW1lbnQgPT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG5cbiAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudE5hbWUgPT4ge1xuICAgICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIGV2ZW50TmFtZSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLl9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSxcbiAgICAgICAgZnJvbTogdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpLFxuICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdHJpZ2dlckV2ZW50KEVWRU5UX1NMSURFKVxuXG4gICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICAvLyBUT0RPOiBjaGFuZ2UgdGVzdHMgdGhhdCB1c2UgZW1wdHkgZGl2cyB0byBhdm9pZCB0aGlzIGNoZWNrXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMucGF1c2UoKVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudEluZGV4KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkRcbiAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVlxuXG4gICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSlcblxuICAgIHJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKVxuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgIHRyaWdnZXJFdmVudChFVkVOVF9TTElEKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgYWN0aXZlRWxlbWVudCwgdGhpcy5faXNBbmltYXRlZCgpKVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpXG4gIH1cblxuICBfZ2V0QWN0aXZlKCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1zKCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfY2xlYXJJbnRlcnZhbCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBfZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9QUkVWIDogT1JERVJfTkVYVFxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcbiAgfVxuXG4gIF9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSB7XG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUXG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlRcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGF0YS50byhjb25maWcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgY2Fyb3VzZWwgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcbiAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJylcblxuICBpZiAoc2xpZGVJbmRleCkge1xuICAgIGNhcm91c2VsLnRvKHNsaWRlSW5kZXgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUodGhpcywgJ3NsaWRlJykgPT09ICduZXh0Jykge1xuICAgIGNhcm91c2VsLm5leHQoKVxuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNhcm91c2VsLnByZXYoKVxuICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKVxuXG4gIGZvciAoY29uc3QgY2Fyb3VzZWwgb2YgY2Fyb3VzZWxzKSB7XG4gICAgQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShjYXJvdXNlbClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ2Fyb3VzZWwpXG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCAiaW1wb3J0IENhcm91c2VsIGZyb20gXCJqcy9ib290c3RyYXAvc3JjL2Nhcm91c2VsXCI7XG5cbigoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmNhcm91c2VsXCIpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgbmV3IENhcm91c2VsKGVsKVxuICB9KVxufSkoKVxuIiwgIntcImJhY2tfdG9fdG9wXCI6e1wiYW5pbWF0aW9uXCI6dHJ1ZSxcImljb25faGVpZ2h0XCI6XCIyZW1cIixcImljb25fbmFtZVwiOlwicm9ja2V0XCIsXCJpY29uX3dpZHRoXCI6XCIyZW1cIixcInBvc2l0aW9uX2JvdHRvbVwiOlwiMXJlbVwiLFwicG9zaXRpb25fZW5kXCI6XCIxcmVtXCJ9LFwiYmlnZ2VyX3BpY3R1cmVcIjp7XCJwbGF5X2ludGVydmFsXCI6NTAwMCxcInNjYWxlXCI6Mn0sXCJibG9ja3F1b3Rlc1wiOntcImJvcmRlcl9zdHlsZVwiOlwicHJpbWFyeVwiLFwiYm9yZGVyX3dpZHRoXCI6NCxcImJvcmRlcmVkXCI6dHJ1ZX0sXCJibG9nXCI6e1wiYXJjaGl2ZXNcIjp7XCJwYWdpbmF0ZVwiOjMwfSxcImZ1bGxfd2lkdGhcIjpmYWxzZSxcImdpc2N1c1wiOntcImNhdGVnb3J5XCI6XCJHZW5lcmFsXCIsXCJjYXRlZ29yeV9pZFwiOlwiRElDX2t3RE9LUWp1bnM0Q1pKWUlcIixcImVuZHBvaW50XCI6XCJodHRwczovL2dpc2N1cy5hcHAvXCIsXCJpbnB1dF9wb3NpdGlvblwiOlwidG9wXCIsXCJsYXp5X2xvYWRpbmdcIjp0cnVlLFwibWFwcGluZ1wiOlwicGF0aG5hbWVcIixcInJlYWN0aW9uc1wiOnRydWUsXCJyZXBvXCI6XCJsZWFybi1zb2Z0d2FyZS1lbmdpbmVlcmluZy93ZWJzaXRlLWNvbW1lbnRzXCIsXCJyZXBvX2lkXCI6XCJSX2tnRE9LUWp1bmdcIixcInN0cmljdF9tYXRjaGluZ1wiOnRydWUsXCJ0aGVtZVwiOlwicHJlZmVycmVkX2NvbG9yX3NjaGVtZVwifSxcImhvbWVcIjp7XCJtYWluX3NlY3Rpb25zXCI6W1wiYmxvZ1wiLFwic29mdHdhcmUtZW5naW5lZXJpbmdcIixcInByb2dyYW1taW5nXCIsXCJvb3BcIl0sXCJwaW5uZWRfcG9zdHNfcG9zaXRpb25cIjpcIlwiLFwicmVjZW50X3Bvc3RzXCI6MTJ9LFwibGlzdF9jb2xzX2xnXCI6MyxcImxpc3RfY29sc19tZFwiOjIsXCJsaXN0X3N0eWxlXCI6XCJcIixcInBhZ2luYXRlXCI6MTIsXCJwb3N0X2RhdGVfZm9ybWF0XCI6XCI6ZGF0ZV9sb25nXCIsXCJwb3N0X3RodW1ibmFpbFwiOnRydWUsXCJwb3N0X3RodW1ibmFpbF9kZWZhdWx0XCI6XCJpbWFnZXMvdGh1bWJuYWlsLnBuZ1wiLFwicG9zdF90aHVtYm5haWxfaGVpZ2h0XCI6XCIxNjBweFwiLFwicG9zdF90aHVtYm5haWxfcGxhY2Vob2xkZXJcIjpcIlwiLFwicG9zdF90aHVtYm5haWxfcG9zaXRpb25cIjpcInRvcFwiLFwicG9zdF90aHVtYm5haWxfcmVzaXplX2hlaWdodFwiOjM2MCxcInJlbGF0ZWRfcG9zdHNcIjp7XCJudW1iZXJcIjoxMH0sXCJzaWRlYmFyXCI6e1wibWF4X3dpZHRoXCI6XCIzMjBweFwiLFwicG9zaXRpb25cIjpcInN0YXJ0XCIsXCJwb3N0c1wiOntcImZlYXR1cmVkX2NvdW50XCI6NSxcImZpbGxcIjp0cnVlLFwibGlzdF9zdHlsZVwiOlwic2xpZGVcIixcInJlY2VudF9jb3VudFwiOjUsXCJzdHlsZVwiOlwicGlsbHNcIn0sXCJzdGlja3lcIjp0cnVlLFwidGF4b25vbWllc1wiOntcImNvdW50XCI6dHJ1ZSxcImxpbWl0XCI6MTAsXCJzZXBhcmF0ZVwiOmZhbHNlLFwic3R5bGVcIjpcInVuZGVybGluZVwifSxcIndpZHRoXCI6MC4zNX0sXCJ0b2NcIjp7XCJwb3NpdGlvblwiOlwiZW5kXCJ9fSxcImJyZWFkY3J1bWJcIjp7XCJkaXNhYmxlZFwiOmZhbHNlfSxcImNvbG9yXCI6XCJsaWdodFwiLFwiY3NzX2J1bmRsZV9uYW1lXCI6XCJsc1wiLFwiZGVidWdcIjpmYWxzZSxcImRvY3NcIjp7XCJkYXRlX2Zvcm1hdFwiOlwiOmRhdGVfbG9uZ1wiLFwiZ2lzY3VzXCI6e1wiY2F0ZWdvcnlcIjpcIkdlbmVyYWxcIixcImNhdGVnb3J5X2lkXCI6XCJESUNfa3dET0tRanVuczRDWkpZSVwiLFwiZW5kcG9pbnRcIjpcImh0dHBzOi8vZ2lzY3VzLmFwcC9cIixcImlucHV0X3Bvc2l0aW9uXCI6XCJ0b3BcIixcImxhenlfbG9hZGluZ1wiOnRydWUsXCJtYXBwaW5nXCI6XCJwYXRobmFtZVwiLFwicmVhY3Rpb25zXCI6dHJ1ZSxcInJlcG9cIjpcImxlYXJuLXNvZnR3YXJlLWVuZ2luZWVyaW5nL3dlYnNpdGUtY29tbWVudHNcIixcInJlcG9faWRcIjpcIlJfa2dET0tRanVuZ1wiLFwic3RyaWN0X21hdGNoaW5nXCI6dHJ1ZSxcInRoZW1lXCI6XCJwcmVmZXJyZWRfY29sb3Jfc2NoZW1lXCJ9fSxcImZlYXR1cmVkX2ltYWdlXCI6e1wic2l6ZVwiOlwieDY0MFwifSxcImZvb3RlclwiOntcInBvd2VyZWRfYnlcIjp0cnVlLFwic2l0ZV90aXRsZVwiOlwiTGVhcm4tU29mdHdhcmUuY29tXCIsXCJzb2NpYWxzXCI6e1wiZmFjZWJvb2tcIjpcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9sZWFybi5zb2Z0d2FyZS5lbmdcIixcImdpdGh1YlwiOlwibGVhcm4tc29mdHdhcmUtZW5naW5lZXJpbmdcIixcImdtYWlsXCI6XCJtYWlsdG86Ly9sZWFybi5zb2Z0d2FyZS5lbmdAZ21haWwuY29tXCIsXCJpbnN0YWdyYW1cIjpcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vbGVhcm5zb2Z0d2FyZWVuZ1wiLFwibGlua2VkaW5cIjpcImh0dHBzOi8vbGlua2VkaW4uY29tL2NvbXBhbnkvbGVhcm4tc29mdHdhcmVcIixcInBhdHJlb25cIjpcImh0dHBzOi8vcGF0cmVvbi5jb20vbGVhcm5zb2Z0d2FyZWVuZ1wiLFwidHdpdHRlclwiOlwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zb2Z0d2FyZTQ1Njg3XCIsXCJ5b3V0dWJlXCI6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9AbGVhcm4tc29mdHdhcmVcIn19LFwiZnVsbF93aWR0aF90eXBlc1wiOntcImRvY3NcIjp7XCJlbmFibGVcIjp0cnVlfX0sXCJoZWFkZXJcIjp7XCJiYW5uZXJcIjp7XCJuYXZiYXJfb3BhY2l0eVwiOjAuOCxcInRyYW5zcGFyZW50aXplX25hdmJhcl9iZ1wiOnRydWV9LFwiYnJlYWtwb2ludFwiOlwibGdcIixcImZ1bGxfd2lkdGhcIjp0cnVlLFwic29jaWFsc1wiOntcImZhY2Vib29rXCI6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbGVhcm4uc29mdHdhcmUuZW5nXCIsXCJnaXRodWJcIjpcImxlYXJuLXNvZnR3YXJlLWVuZ2luZWVyaW5nXCIsXCJnbWFpbFwiOlwibWFpbHRvOi8vbGVhcm4uc29mdHdhcmUuZW5nQGdtYWlsLmNvbVwiLFwiaW5zdGFncmFtXCI6XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2xlYXJuc29mdHdhcmVlbmdcIixcImxpbmtlZGluXCI6XCJodHRwczovL2xpbmtlZGluLmNvbS9jb21wYW55L2xlYXJuLXNvZnR3YXJlXCIsXCJwYXRyZW9uXCI6XCJodHRwczovL3BhdHJlb24uY29tL2xlYXJuc29mdHdhcmVlbmdcIixcInR3aXR0ZXJcIjpcImh0dHBzOi8vdHdpdHRlci5jb20vc29mdHdhcmU0NTY4N1wiLFwieW91dHViZVwiOlwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vQGxlYXJuLXNvZnR3YXJlXCJ9LFwic3RpY2t5XCI6dHJ1ZSxcInRoZW1lX3RvZ2dsZVwiOntcInN0eWxlXCI6XCJzd2l0Y2hcIn19LFwiaGVhZGluZ19zaWduXCI6e1wiY29udGFpbmVyc1wiOntcIi5oYi1ibG9nLXBvc3QtY29udGVudFwiOnt9LFwiLmhiLWRvY3MtZG9jLWNvbnRlbnRcIjp7fX0sXCJzeW1ib2xcIjpcIlx1MDBBN1wifSxcImpzX2J1bmRsZV9uYW1lXCI6XCJsc1wiLFwibG9nb1wiOlwiaW1hZ2VzL2xvZ28tc3F1YXJlLTIucG5nXCIsXCJtb2R1bGVzXCI6e1wiY29kZS1ibG9jay1wYW5lbFwiOntcImpzX3Jlc291cmNlc1wiOlt7XCJwYXJ0aWFsXCI6XCJjb2RlLWJsb2NrLXBhbmVsL2Fzc2V0cy9qcy1yZXNvdXJjZVwifV19fSxcInBhZ2luYXRpb25cIjp7XCJhbGlnbm1lbnRcIjpcImNlbnRlclwiLFwic2libGluZ3NcIjoyLFwic2l6ZVwiOlwiXCJ9LFwicHJvZ3Jlc3NfYmFyXCI6e1wiaGVpZ2h0XCI6XCIycHhcIixcImluaXRpYWxfd2lkdGhcIjoyMCxcImludGVydmFsXCI6NTAsXCJ0aW1lXCI6Mn0sXCJzYXNzX3RyYW5zcGlsZXJcIjpcImRhcnRzYXNzXCIsXCJzY3JvbGxiYXJcIjp7XCJjb3JuZXJfYmdcIjpcIiM5MDkyOTRcIixcImhlaWdodFwiOlwiMTJweFwiLFwidGh1bWJfYmdcIjpcIiM5MDkyOTRcIixcInRyYWNrX2JnXCI6XCIjZjhmOWZhXCIsXCJ3aWR0aFwiOlwiMTJweFwifSxcInNlYXJjaFwiOntcIm1vZGFsXCI6dHJ1ZX0sXCJzdHlsZXNcIjp7XCJoYl90b3Bfb2Zmc2V0XCI6XCIyNHB4XCIsXCJwcmVmaXhcIjpcImhiLVwifSxcInRhYmxlc1wiOntcImFsaWduXCI6XCJcIixcImJvcmRlcl9zdHlsZVwiOlwiXCIsXCJib3JkZXJlZFwiOnRydWUsXCJncm91cF9kaXZpZGVyXCI6ZmFsc2UsXCJob3ZlclwiOnRydWUsXCJzdHJpcGVkXCI6dHJ1ZSxcInN0cmlwZWRfY29sdW1uc1wiOmZhbHNlLFwic3R5bGVcIjpcIlwiLFwidGhlYWRfc3R5bGVcIjpcIlwifSxcInRlcm1zXCI6e1wibGlzdF9zdHlsZVwiOlwiXCIsXCJwYWdpbmF0ZVwiOjEyLFwicHJvZmlsZVwiOnRydWUsXCJwcm9maWxlX21ldHJpY3NcIjp0cnVlfX0iLCAiaW1wb3J0ICogYXMgcGFyYW1zIGZyb20gJ0BwYXJhbXMnO1xuXG4oKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBwYXJhbXM/LmhlYWRpbmdfc2lnbj8uY29udGFpbmVyc1xuICAgICAgICBpZiAoIWNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ltYm9sID0gcGFyYW1zPy5oZWFkaW5nX3NpZ24/LnN5bWJvbCA/PyAnXHUwMEE3J1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0b3IgaW4gY29udGFpbmVycykge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiaDIsIGgzLCBoNCwgaDUsIGg2XCIpLmZvckVhY2goKGhlYWRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGhlYWRpbmcuZ2V0QXR0cmlidXRlKCdpZCcpXG4gICAgICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgICAgICAgICBhbmNob3IuY2xhc3NOYW1lID0gJ2FuY2hvciBtcy0xJ1xuICAgICAgICAgICAgICAgIGFuY2hvci5ocmVmID0gYCMke2lkfWBcbiAgICAgICAgICAgICAgICBhbmNob3IuaW5uZXJUZXh0ID0gc3ltYm9sXG4gICAgICAgICAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChhbmNob3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn0pKClcbiIsICIoKCkgPT4ge1xuICAndXNlIHN0cmljdCdcblxuICBsZXQgc2Nyb2xsaW5nID0gZmFsc2VcblxuICBjb25zdCBzY3JvbGwgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRpcjogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKHNjcm9sbGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNjcm9sbGluZyA9IHRydWVcblxuICAgIGNvbnN0IGlubmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtaW5uZXInKSBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnN0IHN0ZXAgPSBpbm5lci5vZmZzZXRXaWR0aFxuICAgIGxldCBsZWZ0ID0gMFxuICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgbGVmdCA9IGlubmVyLnNjcm9sbExlZnQgLSBzdGVwXG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSBNYXRoLm1pbihpbm5lci5zY3JvbGxXaWR0aCAtIGlubmVyLmNsaWVudFdpZHRoLCBpbm5lci5zY3JvbGxMZWZ0ICsgc3RlcClcbiAgICB9XG4gICAgaWYgKGxlZnQgPD0gMCkge1xuICAgICAgc2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlubmVyLnNjcm9sbCh7XG4gICAgICBsZWZ0XG4gICAgfSlcbiAgICBjb25zdCBjaGVja2VyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGxlZnQgPT09IGlubmVyLnNjcm9sbExlZnQpIHtcbiAgICAgICAgc2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja2VyKVxuICAgICAgfVxuICAgIH0sIDUwKVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLnNsaWRlLWNvbnRyb2wtbGVmdCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWxlbWVudCwgJ2xlZnQnKVxuICAgICAgfSlcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtY29udHJvbC1yaWdodCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWxlbWVudCwgJ3JpZ2h0JylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtaW5uZXInKVxuICAgIGVscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGxldCBzdGFydFggPSAwXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgc3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWwsIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA+IHN0YXJ0WCA/ICdsZWZ0JyA6ICdyaWdodCcpXG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB9KVxuICB9KVxufSkoKVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsIGlzRGlzYWJsZWQgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0YWInXG5jb25zdCBEQVRBX0tFWSA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfWBcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IEhPTUVfS0VZID0gJ0hvbWUnXG5jb25zdCBFTkRfS0VZID0gJ0VuZCdcblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX0RST1BET1dOID0gJ2Ryb3Bkb3duJ1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gYDpub3QoJHtTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9KWBcblxuY29uc3QgU0VMRUNUT1JfVEFCX1BBTkVMID0gJy5saXN0LWdyb3VwLCAubmF2LCBbcm9sZT1cInRhYmxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9PVVRFUiA9ICcubmF2LWl0ZW0sIC5saXN0LWdyb3VwLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JTk5FUiA9IGAubmF2LWxpbmske05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCAubGlzdC1ncm91cC1pdGVtJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgW3JvbGU9XCJ0YWJcIl0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9YFxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdJyAvLyBUT0RPOiBjb3VsZCBvbmx5IGJlIGB0YWJgIGluIHY2XG5jb25zdCBTRUxFQ1RPUl9JTk5FUl9FTEVNID0gYCR7U0VMRUNUT1JfSU5ORVJ9LCAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfWBcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFID0gYC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXWBcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9UQUJfUEFORUwpXG5cbiAgICBpZiAoIXRoaXMuX3BhcmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgICAvLyBUT0RPOiBzaG91bGQgdGhyb3cgZXhjZXB0aW9uIGluIHY2XG4gICAgICAvLyB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2VsZW1lbnQub3V0ZXJIVE1MfSBoYXMgbm90IGEgdmFsaWQgcGFyZW50ICR7U0VMRUNUT1JfSU5ORVJfRUxFTX1gKVxuICAgIH1cblxuICAgIC8vIFNldCB1cCBpbml0aWFsIGFyaWEgYXR0cmlidXRlc1xuICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzKHRoaXMuX3BhcmVudCwgdGhpcy5fZ2V0Q2hpbGRyZW4oKSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdygpIHsgLy8gU2hvd3MgdGhpcyBlbGVtIGFuZCBkZWFjdGl2YXRlIHRoZSBhY3RpdmUgc2libGluZyBpZiBleGlzdHNcbiAgICBjb25zdCBpbm5lckVsZW0gPSB0aGlzLl9lbGVtZW50XG4gICAgaWYgKHRoaXMuX2VsZW1Jc0FjdGl2ZShpbm5lckVsZW0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggZm9yIGFjdGl2ZSB0YWIgb24gc2FtZSBwYXJlbnQgdG8gZGVhY3RpdmF0ZSBpdFxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuX2dldEFjdGl2ZUVsZW0oKVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gYWN0aXZlID9cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGFjdGl2ZSwgRVZFTlRfSElERSwgeyByZWxhdGVkVGFyZ2V0OiBpbm5lckVsZW0gfSkgOlxuICAgICAgbnVsbFxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIoaW5uZXJFbGVtLCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQ6IGFjdGl2ZSB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IChoaWRlRXZlbnQgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9kZWFjdGl2YXRlKGFjdGl2ZSwgaW5uZXJFbGVtKVxuICAgIHRoaXMuX2FjdGl2YXRlKGlubmVyRWxlbSwgYWN0aXZlKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgIHRoaXMuX2FjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpIC8vIFNlYXJjaCBhbmQgYWN0aXZhdGUvc2hvdyB0aGUgcHJvcGVyIHNlY3Rpb25cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgdHJ1ZSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfZGVhY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGVsZW1lbnQuYmx1cigpXG5cbiAgICB0aGlzLl9kZWFjdGl2YXRlKFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkpIC8vIFNlYXJjaCBhbmQgZGVhY3RpdmF0ZSB0aGUgc2hvd24gc2VjdGlvbiB0b29cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgIT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJylcbiAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIGZhbHNlKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfSElEREVOLCB7IHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRFbGVtIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKCEoW0FSUk9XX0xFRlRfS0VZLCBBUlJPV19SSUdIVF9LRVksIEFSUk9XX1VQX0tFWSwgQVJST1dfRE9XTl9LRVksIEhPTUVfS0VZLCBFTkRfS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkvLyBzdG9wUHJvcGFnYXRpb24vcHJldmVudERlZmF1bHQgYm90aCBhZGRlZCB0byBzdXBwb3J0IHVwL2Rvd24ga2V5cyB3aXRob3V0IHNjcm9sbGluZyB0aGUgcGFnZVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5maWx0ZXIoZWxlbWVudCA9PiAhaXNEaXNhYmxlZChlbGVtZW50KSlcbiAgICBsZXQgbmV4dEFjdGl2ZUVsZW1lbnRcblxuICAgIGlmIChbSE9NRV9LRVksIEVORF9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50ID0gY2hpbGRyZW5bZXZlbnQua2V5ID09PSBIT01FX0tFWSA/IDAgOiBjaGlsZHJlbi5sZW5ndGggLSAxXVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpc05leHQgPSBbQVJST1dfUklHSFRfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQgPSBnZXROZXh0QWN0aXZlRWxlbWVudChjaGlsZHJlbiwgZXZlbnQudGFyZ2V0LCBpc05leHQsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKG5leHRBY3RpdmVFbGVtZW50KSB7XG4gICAgICBuZXh0QWN0aXZlRWxlbWVudC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKG5leHRBY3RpdmVFbGVtZW50KS5zaG93KClcbiAgICB9XG4gIH1cblxuICBfZ2V0Q2hpbGRyZW4oKSB7IC8vIGNvbGxlY3Rpb24gb2YgaW5uZXIgZWxlbWVudHNcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JTk5FUl9FTEVNLCB0aGlzLl9wYXJlbnQpXG4gIH1cblxuICBfZ2V0QWN0aXZlRWxlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q2hpbGRyZW4oKS5maW5kKGNoaWxkID0+IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZCkpIHx8IG51bGxcbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlcyhwYXJlbnQsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMocGFyZW50LCAncm9sZScsICd0YWJsaXN0JylcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZClcbiAgICB9XG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKSB7XG4gICAgY2hpbGQgPSB0aGlzLl9nZXRJbm5lckVsZW1lbnQoY2hpbGQpXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpXG4gICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGNoaWxkKVxuICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGlzQWN0aXZlKVxuXG4gICAgaWYgKG91dGVyRWxlbSAhPT0gY2hpbGQpIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKG91dGVyRWxlbSwgJ3JvbGUnLCAncHJlc2VudGF0aW9uJylcbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJylcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhjaGlsZCwgJ3JvbGUnLCAndGFiJylcblxuICAgIC8vIHNldCBhdHRyaWJ1dGVzIHRvIHRoZSByZWxhdGVkIHBhbmVsIHRvb1xuICAgIHRoaXMuX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZClcbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGNoaWxkKVxuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ3JvbGUnLCAndGFicGFuZWwnKVxuXG4gICAgaWYgKGNoaWxkLmlkKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdhcmlhLWxhYmVsbGVkYnknLCBgJHtjaGlsZC5pZH1gKVxuICAgIH1cbiAgfVxuXG4gIF90b2dnbGVEcm9wRG93bihlbGVtZW50LCBvcGVuKSB7XG4gICAgY29uc3Qgb3V0ZXJFbGVtID0gdGhpcy5fZ2V0T3V0ZXJFbGVtZW50KGVsZW1lbnQpXG4gICAgaWYgKCFvdXRlckVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX0RST1BET1dOKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlID0gKHNlbGVjdG9yLCBjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yLCBvdXRlckVsZW0pXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lLCBvcGVuKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIENMQVNTX05BTUVfQUNUSVZFKVxuICAgIHRvZ2dsZShTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VLCBDTEFTU19OQU1FX1NIT1cpXG4gICAgb3V0ZXJFbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW4pXG4gIH1cblxuICBfc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBfZWxlbUlzQWN0aXZlKGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gIH1cblxuICAvLyBUcnkgdG8gZ2V0IHRoZSBpbm5lciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWxpbmspXG4gIF9nZXRJbm5lckVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLm1hdGNoZXMoU0VMRUNUT1JfSU5ORVJfRUxFTSkgPyBlbGVtIDogU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTk5FUl9FTEVNLCBlbGVtKVxuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgb3V0ZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1pdGVtKVxuICBfZ2V0T3V0ZXJFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5jbG9zZXN0KFNFTEVDVE9SX09VVEVSKSB8fCBlbGVtXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnNob3coKVxufSlcblxuLyoqXG4gKiBJbml0aWFsaXplIG9uIGZvY3VzXG4gKi9cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfQUNUSVZFKSkge1xuICAgIFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpXG4gIH1cbn0pXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUYWIpXG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwgImltcG9ydCAqIGFzIHBhcmFtcyBmcm9tIFwiQHBhcmFtc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzcyB7XG4gICAgcHJpdmF0ZSBlbGU6IEhUTUxFbGVtZW50XG5cbiAgICBwcml2YXRlIGJhcjogSFRNTEVsZW1lbnRcblxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlclxuXG4gICAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyIFxuXG4gICAgcHJpdmF0ZSBzdGVwOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gcGFyYW1zPy5wcm9ncmVzc19iYXI/LndpZHRoID8/IDIwXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBwYXJhbXM/LnByb2dyZXNzX2Jhcj8uaW50ZXJ2YWwgPz8gNTBcbiAgICAgICAgY29uc3QgdGltZSA9IHBhcmFtcz8ucHJvZ3Jlc3NfYmFyPy50aW1lID8/IDIgXG4gICAgICAgIHRoaXMuc3RlcCA9ICgxMDAgLSB0aGlzLndpZHRoKSAvIHRpbWUgLyAxMDAwICogdGhpcy5pbnRlcnZhbFxuICAgICAgICB0aGlzLmluaXRCYXIoKVxuICAgICAgICB0aGlzLmluaXRQcm9ncmVzcygpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0UHJvZ3Jlc3MoKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvZ3Jlc3MuY2xhc3NOYW1lID0gJ2hiLXByb2dyZXNzIHByb2dyZXNzIHBvc2l0aW9uLWZpeGVkIHRvcC0wIHctMTAwIHJvdW5kZWQtMCBkLW5vbmUnXG4gICAgICAgIHByb2dyZXNzLnJvbGUgPSAncHJvZ3Jlc3NiYXInXG4gICAgICAgIHByb2dyZXNzLmFwcGVuZENoaWxkKHRoaXMuYmFyKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2dyZXNzKVxuICAgICAgICB0aGlzLmVsZSA9IHByb2dyZXNzXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0QmFyKCkge1xuICAgICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBiYXIuY2xhc3NOYW1lID0gJ3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWQnXG4gICAgICAgIGJhci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAnJSdcbiAgICAgICAgdGhpcy5iYXIgPSBiYXJcbiAgICB9XG5cbiAgICBwcml2YXRlIHRpbWVyID0gMFxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5lbGUuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggKz0gdGhpcy5zdGVwXG4gICAgICAgICAgICB0aGlzLmJhci5zdHlsZS53aWR0aCA9IGAke3RoaXMud2lkdGh9JWBcbiAgICAgICAgfSwgdGhpcy5pbnRlcnZhbClcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmVsZS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKVxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgfVxufVxuIiwgImltcG9ydCBQcm9ncmVzcyBmcm9tIFwiLi9wcm9ncmVzc1wiO1xuXG4oKCkgPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzID0gbmV3IFByb2dyZXNzKClcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYWdlaGlkZScsICgpID0+IHtcbiAgICAgICAgcHJvZ3Jlc3MuaGlkZSgpXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gICAgICAgIHByb2dyZXNzLnNob3coKVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXRFbGVtZW50LCBpc0Rpc2FibGVkLCBpc1Zpc2libGVcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MgPSAnW2hyZWZdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJTktfSVRFTVMgPSBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX05BVl9JVEVNU30gPiAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiBudWxsLCAvLyBUT0RPOiB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICByb290TWFyZ2luOiAnMHB4IDBweCAtMjUlJyxcbiAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgdGFyZ2V0OiBudWxsLFxuICB0aHJlc2hvbGQ6IFswLjEsIDAuNSwgMV1cbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhudW1iZXJ8bnVsbCknLCAvLyBUT0RPIHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICdzdHJpbmcnLFxuICBzbW9vdGhTY3JvbGw6ICdib29sZWFuJyxcbiAgdGFyZ2V0OiAnZWxlbWVudCcsXG4gIHRocmVzaG9sZDogJ2FycmF5J1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgLy8gdGhpcy5fZWxlbWVudCBpcyB0aGUgb2JzZXJ2YWJsZXNDb250YWluZXIgYW5kIGNvbmZpZy50YXJnZXQgdGhlIG1lbnUgbGlua3Mgd3JhcHBlclxuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fcm9vdEVsZW1lbnQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnID8gbnVsbCA6IHRoaXMuX2VsZW1lbnRcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsXG4gICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhID0ge1xuICAgICAgdmlzaWJsZUVudHJ5VG9wOiAwLFxuICAgICAgcGFyZW50U2Nyb2xsVG9wOiAwXG4gICAgfVxuICAgIHRoaXMucmVmcmVzaCgpIC8vIGluaXRpYWxpemVcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKClcbiAgICB0aGlzLl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpXG5cbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IHRoaXMuX2dldE5ld09ic2VydmVyKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gVE9ETzogb24gdjYgdGFyZ2V0IHNob3VsZCBiZSBnaXZlbiBleHBsaWNpdGx5ICYgcmVtb3ZlIHRoZSB7dGFyZ2V0OiAnc3MtdGFyZ2V0J30gY2FzZVxuICAgIGNvbmZpZy50YXJnZXQgPSBnZXRFbGVtZW50KGNvbmZpZy50YXJnZXQpIHx8IGRvY3VtZW50LmJvZHlcblxuICAgIC8vIFRPRE86IHY2IE9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnMuIFVzZSByb290TWFyZ2luIG9ubHlcbiAgICBjb25maWcucm9vdE1hcmdpbiA9IGNvbmZpZy5vZmZzZXQgPyBgJHtjb25maWcub2Zmc2V0fXB4IDBweCAtMzAlYCA6IGNvbmZpZy5yb290TWFyZ2luXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aHJlc2hvbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcudGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gdW5yZWdpc3RlciBhbnkgcHJldmlvdXMgbGlzdGVuZXJzXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSylcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSywgU0VMRUNUT1JfVEFSR0VUX0xJTktTLCBldmVudCA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5nZXQoZXZlbnQudGFyZ2V0Lmhhc2gpXG4gICAgICBpZiAob2JzZXJ2YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5fcm9vdEVsZW1lbnQgfHwgd2luZG93XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9ic2VydmFibGVTZWN0aW9uLm9mZnNldFRvcCAtIHRoaXMuX2VsZW1lbnQub2Zmc2V0VG9wXG4gICAgICAgIGlmIChyb290LnNjcm9sbFRvKSB7XG4gICAgICAgICAgcm9vdC5zY3JvbGxUbyh7IHRvcDogaGVpZ2h0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENocm9tZSA2MCBkb2Vzbid0IHN1cHBvcnQgYHNjcm9sbFRvYFxuICAgICAgICByb290LnNjcm9sbFRvcCA9IGhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfZ2V0TmV3T2JzZXJ2ZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3Q6IHRoaXMuX3Jvb3RFbGVtZW50LFxuICAgICAgdGhyZXNob2xkOiB0aGlzLl9jb25maWcudGhyZXNob2xkLFxuICAgICAgcm9vdE1hcmdpbjogdGhpcy5fY29uZmlnLnJvb3RNYXJnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gdGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSwgb3B0aW9ucylcbiAgfVxuXG4gIC8vIFRoZSBsb2dpYyBvZiBzZWxlY3Rpb25cbiAgX29ic2VydmVyQ2FsbGJhY2soZW50cmllcykge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbnRyeSA9PiB0aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke2VudHJ5LnRhcmdldC5pZH1gKVxuICAgIGNvbnN0IGFjdGl2YXRlID0gZW50cnkgPT4ge1xuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcCA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3BcbiAgICAgIHRoaXMuX3Byb2Nlc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50U2Nyb2xsVG9wID0gKHRoaXMuX3Jvb3RFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wXG4gICAgY29uc3QgdXNlclNjcm9sbHNEb3duID0gcGFyZW50U2Nyb2xsVG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3BcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wID0gcGFyZW50U2Nyb2xsVG9wXG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcFxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyBkb3duLCBwaWNrIHRoZSBiaWdnZXIgb2Zmc2V0VG9wXG4gICAgICBpZiAodXNlclNjcm9sbHNEb3duICYmIGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgICAgLy8gaWYgcGFyZW50IGlzbid0IHNjcm9sbGVkLCBsZXQncyBrZWVwIHRoZSBmaXJzdCB2aXNpYmxlIGl0ZW0sIGJyZWFraW5nIHRoZSBpdGVyYXRpb25cbiAgICAgICAgaWYgKCFwYXJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAsIHBpY2sgdGhlIHNtYWxsZXN0IG9mZnNldFRvcFxuICAgICAgaWYgKCF1c2VyU2Nyb2xsc0Rvd24gJiYgIWVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpIHtcbiAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKVxuXG4gICAgY29uc3QgdGFyZ2V0TGlua3MgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgdGhpcy5fY29uZmlnLnRhcmdldClcblxuICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYW5jaG9yIGhhcyBhbiBpZCBhbmQgaXMgbm90IGRpc2FibGVkXG4gICAgICBpZiAoIWFuY2hvci5oYXNoIHx8IGlzRGlzYWJsZWQoYW5jaG9yKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoZGVjb2RlVVJJKGFuY2hvci5oYXNoKSwgdGhpcy5fZWxlbWVudClcblxuICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIG9ic2VydmFibGVTZWN0aW9uIGV4aXN0cyAmIGlzIHZpc2libGVcbiAgICAgIGlmIChpc1Zpc2libGUob2JzZXJ2YWJsZVNlY3Rpb24pKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldExpbmtzLnNldChkZWNvZGVVUkkoYW5jaG9yLmhhc2gpLCBhbmNob3IpXG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5zZXQoYW5jaG9yLmhhc2gsIG9ic2VydmFibGVTZWN0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9wcm9jZXNzKHRhcmdldCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0aGlzLl9jb25maWcudGFyZ2V0KVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIHRoaXMuX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpXG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwgeyByZWxhdGVkVGFyZ2V0OiB0YXJnZXQgfSlcbiAgfVxuXG4gIF9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KSB7XG4gICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBsaXN0R3JvdXAgb2YgU2VsZWN0b3JFbmdpbmUucGFyZW50cyh0YXJnZXQsIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKSkge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX0xJTktfSVRFTVMpKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xlYXJBY3RpdmVDbGFzcyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZU5vZGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChgJHtTRUxFQ1RPUl9UQVJHRVRfTElOS1N9LiR7Q0xBU1NfTkFNRV9BQ1RJVkV9YCwgcGFyZW50KVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhY3RpdmVOb2Rlcykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBzcHkgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSkpIHtcbiAgICBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzcHkpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCAiY2xhc3MgR2lzY3VzIHtcbiAgc2V0VGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgICAgY29uc3QgZnJhbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MSUZyYW1lRWxlbWVudD4oXG4gICAgICAgICAgJ2lmcmFtZS5naXNjdXMtZnJhbWUnXG4gICAgICApXG5cbiAgICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpZiAoIWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZW5kcG9pbnQgPSAobmV3IFVSTChmcmFtZS5zcmMpKS5vcmlnaW47XG4gICAgICAgICAgZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZ2lzY3VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBgJHtlbmRwb2ludH0vdGhlbWVzLyR7dGhlbWV9LmNzc2AsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVuZHBvaW50XG4gICAgICAgICAgKTtcbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2lzY3VzO1xuIiwgImltcG9ydCBHaXNjdXMgZnJvbSAnbW9kcy9naXNjdXMvanMnXG4oKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuXG4gICAgY29uc3QgZ2lzY3VzID0gbmV3IEdpc2N1cygpXG5cbiAgICBjb25zdCBzZXRUaGVtZSA9ICh0aGVtZSA9ICcnKSA9PiB7XG4gICAgICAgIGlmICh0aGVtZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hiLXRoZW1lJylcbiAgICAgICAgICAgIHRoZW1lID0gKCFzYXZlZCB8fCBzYXZlZCA9PT0gJ2F1dG8nKSA/IGdldFByZWZlcnJlZFRoZW1lKCkgOiBzYXZlZFxuICAgICAgICB9XG5cbiAgICAgICAgZ2lzY3VzLnNldFRoZW1lKHRoZW1lKVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByZWZlcnJlZFRoZW1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzID8gJ2RhcmsnIDogJ2xpZ2h0J1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZ2lzY3VzLWxvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjaGFuZ2UgdGhlIHRoZW1lIGFmdGVyIGxvYWRpbmcgdGhlIGdpc2N1cyBmcmFtZS5cbiAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lLmdpc2N1cy1mcmFtZS5naXNjdXMtZnJhbWUtLWxvYWRpbmcnKVxuICAgICAgICAgICAgZnJhbWU/LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGhlbWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBtYWtlIHN1cmUgaWZyYW1lIHRob3NlIG1pc3NlZCB0aGUgXCJnaXNjdXMtbG9hZFwiIGV2ZW50IHRvIGJlIHNldCBhcyB0aGUgcmlnaHQgdGhlbWUuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGhlbWUoKVxuICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2hiOnRoZW1lJywgKChlOiBDdXN0b21FdmVudCkgPT4ge1xuICAgICAgICAgICAgc2V0VGhlbWUoZS5kZXRhaWwudGhlbWUpXG4gICAgICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpXG4gICAgfSlcbn0pKClcbiIsICJpbXBvcnQgKiBhcyBwYXJhbXMgZnJvbSBcIkBwYXJhbXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIHtcbiAgICBwcml2YXRlIGJ0bjogSFRNTEJ1dHRvbkVsZW1lbnRcblxuICAgIGNvbnN0cnVjdG9yKGljb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidG4uY2xhc3NOYW1lID0gJ2hiLWJhY2stdG8tdG9wJ1xuICAgICAgICBidG4uYXJpYUxhYmVsID0gJ0JhY2sgdG8gdG9wJ1xuICAgICAgICBidG4uaW5uZXJIVE1MID0gdGhpcy50cmFuc2Zvcm1JY29uKGljb24pXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnRuKVxuICAgICAgICB0aGlzLmJ0biA9IGJ0blxuXG4gICAgICAgIGxldCB5ID0gMFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMjAgfHwgdG9wID4gMjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltYXRpb24oKSAmJiB0b3AgPiB5KSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGluZycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5ID0gdG9wXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcygpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24oKSAmJiBidG4uY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJylcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1JY29uKGljb24pIHtcbiAgICAgICAgcmV0dXJuIGljb24ucmVwbGFjZSgvPHN2ZyguKik+KCgufFxcbikqKTxcXC9zdmc+LywgYDxzdmckMT5cbiAgPGRlZnM+PGNsaXBQYXRoIGlkPVwiaWNvblwiPiQyPC9jbGlwUGF0aD48L2RlZnM+XG4gIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNsaXAtcGF0aD1cInVybCgjaWNvbilcIiAvPlxuICA8cmVjdCB4PVwiMFwiIHk9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNsaXAtcGF0aD1cInVybCgjaWNvbilcIiAvPlxuPC9zdmc+YClcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvc0ljb246IEhUTUxFbGVtZW50XG5cbiAgICB1cGRhdGVQb3MoKSB7XG4gICAgICAgIGlmICghdGhpcy5wb3NJY29uKSB7XG4gICAgICAgICAgICB0aGlzLnBvc0ljb24gPSB0aGlzLmJ0bi5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PigncmVjdCcpWzFdXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9zID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAvIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgdGhpcy5wb3NJY29uLnNldEF0dHJpYnV0ZSgneScsICgxIC0gcG9zKSAqIDEwMCArICclJylcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmJ0bi5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcbiAgICB9XG5cbiAgICBhbmltYXRpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBwYXJhbXM/LmJhY2tfdG9fdG9wPy5hbmltYXRpb24gIT09IGZhbHNlXG4gICAgfVxufVxuIiwgIi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL2pzL2luZGV4LnVtZC5qc1xuXG4gIGltcG9ydCAnL2hiL21vZHVsZXMvY3VzdG9tL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9kb2NzL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9oZWFkZXIvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Nhcm91c2VsL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9oZWFkaW5nLXNpZ24vanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL3NsaWRlL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9ib290c3RyYXAvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL3Byb2dyZXNzLWJhci9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvdG9jLXNjcm9sbHNweS9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvZ2lzY3VzL2pzL2luZGV4LnRzJztcblxuICBcbiAgXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnaGIvbW9kdWxlcy9iYWNrLXRvLXRvcC9qcy9idXR0b24nO1xuXG4oKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ldyBCdXR0b24oYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1yb2NrZXQgaGktc3ZnLWlubGluZSBoYi1iYWNrLXRvLXRvcC1pY29uXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjJlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjJlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk04IDhjLjgyOCAwIDEuNS0uODk1IDEuNS0yUzguODI4IDQgOCA0cy0xLjUuODk1LTEuNSAyUzcuMTcyIDggOCA4XCIvPlxuICA8cGF0aCBkPVwiTTExLjk1MyA4LjgxYy0uMTk1LTMuMzg4LS45NjgtNS41MDctMS43NzctNi44MTlDOS43MDcgMS4yMzMgOS4yMy43NTEgOC44NTcuNDU0YTMuNSAzLjUgMCAwIDAtLjQ2My0uMzE1QTIgMiAwIDAgMCA4LjI1LjA2NC41NS41NSAwIDAgMCA4IDBhLjU1LjU1IDAgMCAwLS4yNjYuMDczIDIgMiAwIDAgMC0uMTQyLjA4IDQgNCAwIDAgMC0uNDU5LjMzYy0uMzcuMzA4LS44NDQuODAzLTEuMzEgMS41Ny0uODA1IDEuMzIyLTEuNTc3IDMuNDMzLTEuNzc0IDYuNzU2bC0xLjQ5NyAxLjgyNi0uMDA0LjAwNUEyLjUgMi41IDAgMCAwIDIgMTIuMjAyVjE1LjVhLjUuNSAwIDAgMCAuOS4zbDEuMTI1LTEuNWMuMTY2LS4yMjIuNDItLjQuNzUyLS41Ny4yMTQtLjEwOC40MTQtLjE5Mi42MjUtLjI4MWwuMTk4LS4wODRjLjcuNDI4IDEuNTUuNjM1IDIuNC42MzVzMS43LS4yMDcgMi40LS42MzVxLjEuMDQ0LjE5Ni4wODNjLjIxMy4wOS40MTMuMTc0LjYyNy4yODIuMzMyLjE3LjU4Ni4zNDguNzUyLjU3bDEuMTI1IDEuNWEuNS41IDAgMCAwIC45LS4zdi0zLjI5OGEyLjUgMi41IDAgMCAwLS41NDgtMS41NjJ6TTEyIDEwLjQ0NXYuMDU1YzAgLjg2Ni0uMjg0IDEuNTg1LS43NSAyLjE0LjE0Ni4wNjQuMjkyLjEzLjQyNS4xOTkuMzkuMTk3LjguNDYgMS4xLjg2TDEzIDE0di0xLjc5OGExLjUgMS41IDAgMCAwLS4zMjctLjkzNXpNNC43NSAxMi42NEM0LjI4NCAxMi4wODUgNCAxMS4zNjYgNCAxMC41di0uMDU0bC0uNjczLjgyYTEuNSAxLjUgMCAwIDAtLjMyNy45MzZWMTRsLjIyNS0uM2MuMy0uNC43MS0uNjY0IDEuMS0uODYxLjEzMy0uMDY4LjI3OS0uMTM1LjQyNS0uMTk5TTguMDA5IDEuMDczcS4wOTYuMDYuMjI2LjE2M2MuMjg0LjIyNi42ODMuNjIxIDEuMDkgMS4yOEMxMC4xMzcgMy44MzYgMTEgNi4yMzcgMTEgMTAuNWMwIC44NTgtLjM3NCAxLjQ4LS45NDMgMS44OTNDOS41MTcgMTIuNzg2IDguNzgxIDEzIDggMTNzLTEuNTE3LS4yMTQtMi4wNTctLjYwN0M1LjM3MyAxMS45NzkgNSAxMS4zNTggNSAxMC41YzAtNC4xODIuODYtNi41ODYgMS42NzctNy45MjguNDA5LS42Ny44MS0xLjA4MiAxLjA5Ni0xLjMycS4xMzYtLjExMy4yMzYtLjE4WlwiLz5cbiAgPHBhdGggZD1cIk05LjQ3OSAxNC4zNjFjLS40OC4wOTMtLjk4LjEzOS0xLjQ3OS4xMzlzLS45OTktLjA0Ni0xLjQ3OS0uMTM5TDcuNiAxNS44YS41LjUgMCAwIDAgLjggMHpcIi8+XG48L3N2Zz5gKVxuICAgIH0pXG59KSgpO1xuXG4gIFxuICBcblxuaW1wb3J0IEJpZ2dlclBpY3R1cmUgZnJvbSAnbW9kcy9iaWdnZXItcGljdHVyZS9iaWdnZXItcGljdHVyZS51bWQuanMnXG5pbXBvcnQgUGFuZWwgZnJvbSAnaGIvbW9kdWxlcy9iaWdnZXItcGljdHVyZS9qcy9wYW5lbCdcblxuKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBicCA9IEJpZ2dlclBpY3R1cmUoe1xuICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHBhbmVsID0gbmV3IFBhbmVsKGJwLCBgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImJpIGJpLWRvd25sb2FkIGhpLXN2Zy1pbmxpbmVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMS4yNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMS4yNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBkPVwiTS41IDkuOWEuNS41IDAgMCAxIC41LjV2Mi41YTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXYtMi41YS41LjUgMCAwIDEgMSAwdjIuNWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnYtMi41YS41LjUgMCAwIDEgLjUtLjVcIi8+XG4gIDxwYXRoIGQ9XCJNNy42NDYgMTEuODU0YS41LjUgMCAwIDAgLjcwOCAwbDMtM2EuNS41IDAgMCAwLS43MDgtLjcwOEw4LjUgMTAuMjkzVjEuNWEuNS41IDAgMCAwLTEgMHY4Ljc5M0w1LjM1NCA4LjE0NmEuNS41IDAgMSAwLS43MDguNzA4elwiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktc2hhcmUgaGktc3ZnLWlubGluZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxLjI1ZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJNMTMuNSAxYTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zTTExIDIuNWEyLjUgMi41IDAgMSAxIC42MDMgMS42MjhsLTYuNzE4IDMuMTJhMi41IDIuNSAwIDAgMSAwIDEuNTA0bDYuNzE4IDMuMTJhMi41IDIuNSAwIDEgMS0uNDg4Ljg3NmwtNi43MTgtMy4xMmEyLjUgMi41IDAgMSAxIDAtMy4yNTZsNi43MTgtMy4xMkEyLjUgMi41IDAgMCAxIDExIDIuNW0tOC41IDRhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNtMTEgNS41YTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zXCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1jbG9ja3dpc2UgaGktc3ZnLWlubGluZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxLjI1ZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggM2E1IDUgMCAxIDAgNC41NDYgMi45MTQuNS41IDAgMCAxIC45MDgtLjQxN0E2IDYgMCAxIDEgOCAyelwiLz5cbiAgPHBhdGggZD1cIk04IDQuNDY2Vi41MzRhLjI1LjI1IDAgMCAxIC40MS0uMTkybDIuMzYgMS45NjZjLjEyLjEuMTIuMjg0IDAgLjM4NEw4LjQxIDQuNjU4QS4yNS4yNSAwIDAgMSA4IDQuNDY2XCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1waG9uZS1mbGlwIGhpLXN2Zy1pbmxpbmVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMS4yNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMS4yNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMSAxSDVhMSAxIDAgMCAwLTEgMXY2YS41LjUgMCAwIDEtMSAwVjJhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2NmEuNS41IDAgMCAxLTEgMFYyYTEgMSAwIDAgMC0xLTFtMSAxM2ExIDEgMCAwIDEtMSAxSDVhMSAxIDAgMCAxLTEtMXYtMmEuNS41IDAgMCAwLTEgMHYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi0yYS41LjUgMCAwIDAtMSAwek0xLjcxMyA3Ljk1NGEuNS41IDAgMSAwLS40MTktLjkwOGMtLjM0Ny4xNi0uNjU0LjM0OC0uODgyLjU3Qy4xODQgNy44NDIgMCA4LjEzOSAwIDguNWMwIC41NDYuNDA4Ljk0LjgyMyAxLjIwMS40NC4yNzggMS4wNDMuNTEgMS43NDUuNjk2QzMuOTc4IDEwLjc3MyA1Ljg5OCAxMSA4IDExcS4xNDggMCAuMjk0LS4wMDJsLTEuMTQ4IDEuMTQ4YS41LjUgMCAwIDAgLjcwOC43MDhsMi0yYS41LjUgMCAwIDAgMC0uNzA4bC0yLTJhLjUuNSAwIDEgMC0uNzA4LjcwOGwxLjE0NSAxLjE0NEw4IDEwYy0yLjA0IDAtMy44Ny0uMjIxLTUuMTc0LS41NjktLjY1Ni0uMTc1LTEuMTUxLS4zNzQtMS40Ny0uNTc1QzEuMDEyIDguNjM5IDEgOC41MDYgMSA4LjVjMC0uMDAzIDAtLjA1OS4xMTItLjE3LjExNS0uMTEyLjMxLS4yNDIuNi0uMzc2Wm0xMi45OTMtLjkwOGEuNS41IDAgMCAwLS40MTkuOTA4Yy4yOTIuMTM0LjQ4Ni4yNjQuNi4zNzcuMTEzLjExLjExMy4xNjYuMTEzLjE2OXMwIC4wNjUtLjEzLjE4N2MtLjEzMi4xMjItLjM1Mi4yNi0uNjc3LjQtLjY0NS4yOC0xLjU5Ni41MjMtMi43NjMuNjg3YS41LjUgMCAwIDAgLjE0Ljk5YzEuMjEyLS4xNyAyLjI2LS40MyAzLjAyLS43NTguMzgtLjE2NC43MTMtLjM1Ny45Ni0uNTg3LjI0Ni0uMjI5LjQ1LS41MzcuNDUtLjkxOSAwLS4zNjItLjE4NC0uNjYtLjQxMi0uODgzcy0uNTM1LS40MTEtLjg4Mi0uNTcxTTcuNSAyYS41LjUgMCAwIDAgMCAxaDFhLjUuNSAwIDAgMCAwLTF6XCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1wbGF5LWNpcmNsZSBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk04IDE1QTcgNyAwIDEgMSA4IDFhNyA3IDAgMCAxIDAgMTRtMCAxQTggOCAwIDEgMCA4IDBhOCA4IDAgMCAwIDAgMTZcIi8+XG4gIDxwYXRoIGQ9XCJNNi4yNzEgNS4wNTVhLjUuNSAwIDAgMSAuNTIuMDM4bDMuNSAyLjVhLjUuNSAwIDAgMSAwIC44MTRsLTMuNSAyLjVBLjUuNSAwIDAgMSA2IDEwLjV2LTVhLjUuNSAwIDAgMSAuMjcxLS40NDVcIi8+XG48L3N2Zz5gKVxuXG4gICAgICAgIGNvbnN0IG9uT3BlbiA9IChjb250YWluZXI6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBwYW5lbC5pbml0KGNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlID0gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHBhbmVsLnVwZGF0ZShjb250YWluZXIsIGl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93ID0gKGltZ3MsIHBvcykgPT4ge1xuICAgICAgICAgICAgYnAub3Blbih7XG4gICAgICAgICAgICAgICAgaXRlbXM6IGltZ3MsXG4gICAgICAgICAgICAgICAgaW50cm86ICdmYWRldXAnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3MsXG4gICAgICAgICAgICAgICAgb25PcGVuOiBvbk9wZW4sXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IG9uVXBkYXRlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjYWxlID0gcGFyc2VJbnQoJzInKVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSAoaW1nOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbHQgPSBpbWcuZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgICAgICAgICAgbGV0IGNhcHRpb24gPSBhbHRcbiAgICAgICAgICAgIGNvbnN0IGNhcHRpb25FbGUgPSBpbWcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdmaWdjYXB0aW9uJylcbiAgICAgICAgICAgIGlmIChjYXB0aW9uRWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2FwdGlvbiA9IGNhcHRpb25FbGUuaW5uZXJUZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGltZzogaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSA/PyBpbWcuc3JjLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc2NhbGUgKiAoaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSA/PyBpbWcubmF0dXJhbEhlaWdodCksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNjYWxlICogKGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkdGgnKSA/PyBpbWcubmF0dXJhbFdpZHRoKSxcbiAgICAgICAgICAgICAgICBhbHQ6IGltZy5nZXRBdHRyaWJ1dGUoJ2FsdCcpLFxuICAgICAgICAgICAgICAgIGNhcHRpb246IGNhcHRpb24sXG4gICAgICAgICAgICAgICAgdGh1bWI6IGltZy5zcmMsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxuICAgICAgICBmb3IgKGNvbnN0IGltZyBvZiBpbWFnZXMpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBsaW5rYWJsZSBpbWFnZXMuXG4gICAgICAgICAgICBpZiAoaW1nLmNsb3Nlc3QoJ2EnKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdzOiBBcnJheTx1bmtub3duPiA9IFtdXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IDBcbiAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBpbWcuY2xvc2VzdCgnLmJpZ2dlci1waWN0dXJlcycpXG4gICAgICAgICAgICAgICAgaWYgKHNldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGEgc2V0IG9mIGltYWdlcy5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxzID0gc2V0LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEltYWdlRWxlbWVudD4oJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxzW2ldID09PSBpbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzLnB1c2goZGF0YShlbHNbaV0pKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1ncy5wdXNoKGRhdGEoaW1nKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaG93KGltZ3MsIHBvcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5pbWctbGluaycpKVxuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHNob3coW3tcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IGxpbmsuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBsaW5rLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICB9XSwgMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxufSkoKVxuIiwgImltcG9ydCB7ZGVmYXVsdCBhcyBwYXJhbXN9IGZyb20gJ0BwYXJhbXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBicCxcbiAgICAgICAgcHJpdmF0ZSBkb3dubG9hZEljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBzaGFyZUljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSByb3RhdGVJY29uOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgZmxpcEljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBwbGF5SWNvbjogc3RyaW5nLFxuICAgICkge1xuXG4gICAgfVxuXG4gICAgaW5pdChjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsJywgJ2QtZmxleCcsICdwb3NpdGlvbi1hYnNvbHV0ZScsICdteC1hdXRvJywgJ3N0YXJ0LTAnLCAnZW5kLTAnLCAndGV4dC1jZW50ZXInKVxuICAgICAgICBwLmFwcGVuZENoaWxkKHRoaXMucm90YXRlKGZhbHNlKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLnJvdGF0ZSh0cnVlKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLmZsaXAoKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLnBsYXkoKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLmRvd25sb2FkKCkpXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGhpcy5zaGFyZSgpKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocClcbiAgICB9XG5cbiAgICB1cGRhdGUoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgaXRlbSkge1xuICAgICAgICBjb25zdCBwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5icC1wYW5lbCcpIGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgLy8gdXBkYXRlIGRvd25sb2FkIGxpbmsuXG4gICAgICAgIGNvbnN0IGQgPSBwLnF1ZXJ5U2VsZWN0b3IoJy5icC1wYW5lbC1kb3dubG9hZCcpIGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgICAgIGQuaHJlZiA9IGl0ZW0uaW1nXG4gICAgICAgIGQuZG93bmxvYWQgPSBpdGVtLmFsdFxuICAgIH1cblxuICAgIGltZ1dyYXAgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJwLWltZy13cmFwJykgYXMgSFRNTEVsZW1lbnRcbiAgICB9XG5cbiAgICByb3RhdGUgPSAoY2xvY2t3aXNlID0gZmFsc2UpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdSb3RhdGUnXG4gICAgICAgIGEucm9sZSA9ICdidXR0b24nXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYnAtcGFuZWwtYWN0aW9uJywgJ2JwLXBhbmVsLXJvdGF0ZScsIGNsb2Nrd2lzZSA/ICdicC1wYW5lbC1yb3RhdGUtY2xvY2t3aXNlJyA6ICdicC1wYW5lbC1yb3RhdGUtYW50aWNsb2Nrd2lzZScsICd0ZXh0LWRlY29yYXRpb24tbm9uZScsICdwLTInKVxuICAgICAgICBhLmlubmVySFRNTCA9IHRoaXMucm90YXRlSWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IHRoaXMuaW1nV3JhcCgpXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludCh3cmFwLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGUnKSA/PyAnMCcpXG4gICAgICAgICAgICB2YWx1ZSArPSBjbG9ja3dpc2UgPyA5MCA6IC05MFxuICAgICAgICAgICAgd3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlJywgdmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHdyYXApXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuXG4gICAgZmxpcCA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdGbGlwJ1xuICAgICAgICBhLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdicC1wYW5lbC1mbGlwJywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJywgJ3AtMicpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5mbGlwSWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IHRoaXMuaW1nV3JhcCgpXG4gICAgICAgICAgICBpZiAod3JhcC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpKSB7XG4gICAgICAgICAgICAgICAgd3JhcC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdyYXAuc2V0QXR0cmlidXRlKCdkYXRhLWZsaXAnLCAndHJ1ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh3cmFwKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYVxuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtID0gKHdyYXA6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybTogQXJyYXk8c3RyaW5nPiA9IFtdXG5cbiAgICAgICAgY29uc3Qgcm90YXRlID0gd3JhcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm90YXRlJylcbiAgICAgICAgaWYgKHJvdGF0ZSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtLnB1c2goYHJvdGF0ZSgke3BhcnNlSW50KHJvdGF0ZSl9ZGVnKWApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmbGlwID0gd3JhcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcpXG4gICAgICAgIGlmIChmbGlwKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0ucHVzaCgnc2NhbGVYKC0xKScpXG4gICAgICAgIH1cblxuICAgICAgICB3cmFwLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybS5qb2luKFwiIFwiKVxuICAgIH1cblxuICAgIHByaXZhdGUgcGxheUpvYiA9IDBcblxuICAgIHByaXZhdGUgcGxheUludGVydmFsID0gMTAwMFxuXG4gICAgcGxheSA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdQbGF5J1xuICAgICAgICBhLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdicC1wYW5lbC1wbGF5JywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJywgJ3AtMicpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5wbGF5SWNvblxuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheUpvYikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wbGF5Sm9iKVxuICAgICAgICAgICAgICAgIHRoaXMucGxheUpvYiA9IDBcbiAgICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIHRoaXMucGxheUpvYiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJwLm5leHQoKVxuICAgICAgICAgICAgfSwgcGFyYW1zLmJpZ2dlcl9waWN0dXJlLnBsYXlfaW50ZXJ2YWwgPz8gNTAwMClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICBkb3dubG9hZCA9ICgpOiBIVE1MQW5jaG9yRWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgICAgYS50aXRsZSA9ICdEb3dubG9hZCdcbiAgICAgICAgYS5yb2xlID0gJ2J1dHRvbidcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKCdicC1wYW5lbC1hY3Rpb24nLCAnYnAtcGFuZWwtZG93bmxvYWQnLCAndGV4dC1kZWNvcmF0aW9uLW5vbmUnLCAncC0yJylcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJycpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5kb3dubG9hZEljb25cbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICB0d2l0dGVyU2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3VybD0ke3RoaXMuc2hhcmVMaW5rKCl9YFxuICAgIH1cblxuICAgIGZhY2Vib29rU2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dGhpcy5zaGFyZUxpbmsoKX1gXG4gICAgfVxuXG4gICAgc2hhcmVMaW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIH1cblxuICAgIHNoYXJlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdkcm9wZG93bi1jZW50ZXInLCAnYnAtcGFuZWwtc2hhcmUnLCAncC0yJylcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwidGV4dC13aGl0ZVwiIGhyZWY9XCIjXCIgcm9sZT1cImJ1dHRvblwiIHRpdGxlPVwiU2hhcmVcIiBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+JHt0aGlzLnNoYXJlSWNvbn08L2E+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3RoaXMudHdpdHRlclNoYXJlTGluaygpfVwiPlR3aXR0ZXI8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt0aGlzLmZhY2Vib29rU2hhcmVMaW5rKCl9XCI+RmFjZWJvb2s8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPmBcbiAgICAgICAgcmV0dXJuIGVsXG4gICAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFNQSxhQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFFNUQsZUFBUyxVQUFVLE1BQU07QUFDdkIsWUFBSSxRQUFRLE1BQU07QUFDaEIsaUJBQU87QUFBQSxRQUNUO0FBRUEsWUFBSSxLQUFLLFNBQVMsTUFBTSxtQkFBbUI7QUFDekMsY0FBSSxnQkFBZ0IsS0FBSztBQUN6QixpQkFBTyxnQkFBZ0IsY0FBYyxlQUFlLFNBQVM7QUFBQSxRQUMvRDtBQUVBLGVBQU87QUFBQSxNQUNUO0FBRUEsZUFBU0EsV0FBVSxNQUFNO0FBQ3ZCLFlBQUks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cHV0ZWRTdHlsZSIsICJ3aW5kb3ciLCAic2VsZiIsICJtZXJnZWQiLCAiY2xpcHBpbmdQYXJlbnRzIiwgInJlZmVyZW5jZSIsICJwb3BwZXJPZmZzZXRzIiwgIm9mZnNldCIsICJkZWZhdWx0TW9kaWZpZXJzIiwgImNyZWF0ZVBvcHBlciIsICJwb3BwZXIiLCAib3B0aW9ucyIsICJzdGF0ZSIsICJlZmZlY3QiLCAibm9vcEZuIiwgIm5hbWUiLCAic3R5bGUiLCAicGxhY2VtZW50IiwgInBsYWNlbWVudHMiLCAiX2xvb3AiLCAiX2kiLCAiY2hlY2tzIiwgIm1pbiIsICJtYXgiLCAidG9QYWRkaW5nT2JqZWN0IiwgIm5vb3AiLCAibm93IiwgImVsZW1lbnQiLCAiZGV0YWNoIiwgImluc3RhbmNlIiwgImNyZWF0ZV9mcmFnbWVudCIsICJub3RfZXF1YWwiLCAidXBkYXRlIiwgInN1YnNjcmliZSIsICJydW4iLCAiY3R4IiwgIiQkcHJvcHMiLCAiY2FsbGJhY2siLCAiZm4iLCAibGluayIsICJkb2NzIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJFVkVOVF9ISURFIiwgIkVWRU5UX0hJRERFTiIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIkNMQVNTX05BTUVfU0hPVyIsICJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiQ0xBU1NfTkFNRV9TSE9XIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiVEFCX0tFWSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJFU0NBUEVfS0VZIiwgIkNMQVNTX05BTUVfU0hPVyIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0hJREUiLCAiRVZFTlRfSElEREVOIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiaXNWaXNpYmxlIiwgImhlYWRlciIsICJOQU1FIiwgIkVWRU5UX0tFWSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJFVkVOVF9MT0FEX0RBVEFfQVBJIiwgIkVWRU5UX0NMSUNLX0RBVEFfQVBJIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiRVZFTlRfSElERSIsICJFVkVOVF9ISURERU4iLCAiRVZFTlRfU0hPVyIsICJFVkVOVF9TSE9XTiIsICJFVkVOVF9DTElDS19EQVRBX0FQSSIsICJFVkVOVF9LRVlET1dOIiwgIkVWRU5UX0xPQURfREFUQV9BUEkiLCAiQVJST1dfTEVGVF9LRVkiLCAiQVJST1dfUklHSFRfS0VZIiwgIkFSUk9XX1VQX0tFWSIsICJBUlJPV19ET1dOX0tFWSIsICJDTEFTU19OQU1FX0FDVElWRSIsICJDTEFTU19OQU1FX0ZBREUiLCAiQ0xBU1NfTkFNRV9TSE9XIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwgImVsZW1lbnQiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiREFUQV9BUElfS0VZIiwgIkVWRU5UX0xPQURfREFUQV9BUEkiLCAiQ0xBU1NfTkFNRV9BQ1RJVkUiLCAiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiQmlnZ2VyUGljdHVyZSJdCn0K

;
(() => {
  // ns-params:@params
  var params_default = { defaultLang: "en", i18n: { en: { copied: { other: "Copied!" }, copy_failed: { other: "Copy failed!" } } }, icons: { copy: '<svg aria-hidden="true" class="bi bi-clipboard hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>\n  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>\n</svg>', expand: '<svg aria-hidden="true" class="bi bi-chevron-expand hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>\n</svg>', ln: '<svg aria-hidden="true" class="bi bi-list-ol hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>\n  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>\n</svg>', wrap: '<svg aria-hidden="true" class="bi bi-text-wrap hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h9a2.5 2.5 0 0 1 0 5h-1.293l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.647.646H11.5a1.5 1.5 0 0 0 0-3h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"/>\n</svg>' }, line_nos: true, max_lines: 10, wrap: false };

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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.7.1/assets/mods/code-block-panel/js/i18n.ts
  var i18n = new Translator(params_default.i18n, params_default.defaultLang);
  var i18n_default = i18n;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.7.1/assets/mods/code-block-panel/js/panel.ts
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
      const maxLines = this.code.closest(".highlight")?.getAttribute("data-max-lines") ?? params_default.max_lines;
      if (maxLines > 0 && lines.length > maxLines) {
        const offsetTop = lines[maxLines].offsetTop;
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
