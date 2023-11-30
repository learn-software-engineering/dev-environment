(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // ns-params:@params
  var params_default = { baseURL: "/", bypass: [], caches: { font: { max_age: 2592e3, origins: [], strategy: "network-first" }, image: { max_age: 2592e3, origins: [], strategy: "network-first" }, script: { max_age: 2592e3, origins: [], strategy: "network-first" }, style: { max_age: 2592e3, origins: [], strategy: "network-first" } }, debug: false, langs: ["en", "es"], offline_image: "", precaches: ["/en/offline/", "/es/offline/", "/css/ls.css", "/es/programming/0100-intro/0102-numerical-systems/", "/js/ls.js"] };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_version.ts
  try {
    self["workbox:core:7.0.0"] && _();
  } catch (e) {
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/models/messages/messages.ts
  var messages = {
    "invalid-value": ({ paramName, validValueDescription, value }) => {
      if (!paramName || !validValueDescription) {
        throw new Error(`Unexpected input to 'invalid-value' error.`);
      }
      return `The '${paramName}' parameter was given a value with an unexpected value. ${validValueDescription} Received a value of ${JSON.stringify(value)}.`;
    },
    "not-an-array": ({ moduleName, className, funcName, paramName }) => {
      if (!moduleName || !className || !funcName || !paramName) {
        throw new Error(`Unexpected input to 'not-an-array' error.`);
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    "incorrect-type": ({
      expectedType,
      paramName,
      moduleName,
      className,
      funcName
    }) => {
      if (!expectedType || !paramName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'incorrect-type' error.`);
      }
      const classNameStr = className ? `${className}.` : "";
      return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be of type ${expectedType}.`;
    },
    "incorrect-class": ({
      expectedClassName,
      paramName,
      moduleName,
      className,
      funcName,
      isReturnValueProblem
    }) => {
      if (!expectedClassName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'incorrect-class' error.`);
      }
      const classNameStr = className ? `${className}.` : "";
      if (isReturnValueProblem) {
        return `The return value from '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
    },
    "missing-a-method": ({
      expectedMethod,
      paramName,
      moduleName,
      className,
      funcName
    }) => {
      if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
        throw new Error(`Unexpected input to 'missing-a-method' error.`);
      }
      return `${moduleName}.${className}.${funcName}() expected the '${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    "add-to-cache-list-unexpected-type": ({ entry }) => {
      return `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(
        entry
      )}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`;
    },
    "add-to-cache-list-conflicting-entries": ({ firstEntry, secondEntry }) => {
      if (!firstEntry || !secondEntry) {
        throw new Error(
          `Unexpected input to 'add-to-cache-list-duplicate-entries' error.`
        );
      }
      return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${firstEntry} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
    },
    "plugin-error-request-will-fetch": ({ thrownErrorMessage }) => {
      if (!thrownErrorMessage) {
        throw new Error(
          `Unexpected input to 'plugin-error-request-will-fetch', error.`
        );
      }
      return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${thrownErrorMessage}'.`;
    },
    "invalid-cache-name": ({ cacheNameId, value }) => {
      if (!cacheNameId) {
        throw new Error(
          `Expected a 'cacheNameId' for error 'invalid-cache-name'`
        );
      }
      return `You must provide a name containing at least one character for setCacheDetails({${cacheNameId}: '...'}). Received a value of '${JSON.stringify(value)}'`;
    },
    "unregister-route-but-not-found-with-method": ({ method }) => {
      if (!method) {
        throw new Error(
          `Unexpected input to 'unregister-route-but-not-found-with-method' error.`
        );
      }
      return `The route you're trying to unregister was not  previously registered for the method type '${method}'.`;
    },
    "unregister-route-route-not-registered": () => {
      return `The route you're trying to unregister was not previously registered.`;
    },
    "queue-replay-failed": ({ name }) => {
      return `Replaying the background sync queue '${name}' failed.`;
    },
    "duplicate-queue-name": ({ name }) => {
      return `The Queue name '${name}' is already being used. All instances of backgroundSync.Queue must be given unique names.`;
    },
    "expired-test-without-max-age": ({ methodName, paramName }) => {
      return `The '${methodName}()' method can only be used when the '${paramName}' is used in the constructor.`;
    },
    "unsupported-route-type": ({ moduleName, className, funcName, paramName }) => {
      return `The supplied '${paramName}' parameter was an unsupported type. Please check the docs for ${moduleName}.${className}.${funcName} for valid input types.`;
    },
    "not-array-of-class": ({
      value,
      expectedClass,
      moduleName,
      className,
      funcName,
      paramName
    }) => {
      return `The supplied '${paramName}' parameter must be an array of '${expectedClass}' objects. Received '${JSON.stringify(value)},'. Please check the call to ${moduleName}.${className}.${funcName}() to fix the issue.`;
    },
    "max-entries-or-age-required": ({ moduleName, className, funcName }) => {
      return `You must define either config.maxEntries or config.maxAgeSecondsin ${moduleName}.${className}.${funcName}`;
    },
    "statuses-or-headers-required": ({ moduleName, className, funcName }) => {
      return `You must define either config.statuses or config.headersin ${moduleName}.${className}.${funcName}`;
    },
    "invalid-string": ({ moduleName, funcName, paramName }) => {
      if (!paramName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'invalid-string' error.`);
      }
      return `When using strings, the '${paramName}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${moduleName}.${funcName}() for more info.`;
    },
    "channel-name-required": () => {
      return `You must provide a channelName to construct a BroadcastCacheUpdate instance.`;
    },
    "invalid-responses-are-same-args": () => {
      return `The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.`;
    },
    "expire-custom-caches-only": () => {
      return `You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.`;
    },
    "unit-must-be-bytes": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
      }
      return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "single-range-only": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'single-range-only' error.`);
      }
      return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "invalid-range-values": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'invalid-range-values' error.`);
      }
      return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "no-range-header": () => {
      return `No Range header was found in the Request provided.`;
    },
    "range-not-satisfiable": ({ size, start, end }) => {
      return `The start (${start}) and end (${end}) values in the Range are not satisfiable by the cached response, which is ${size} bytes.`;
    },
    "attempt-to-cache-non-get-request": ({ url, method }) => {
      return `Unable to cache '${url}' because it is a '${method}' request and only 'GET' requests can be cached.`;
    },
    "cache-put-with-no-response": ({ url }) => {
      return `There was an attempt to cache '${url}' but the response was not defined.`;
    },
    "no-response": ({ url, error }) => {
      let message = `The strategy could not generate a response for '${url}'.`;
      if (error) {
        message += ` The underlying error is ${error}.`;
      }
      return message;
    },
    "bad-precaching-response": ({ url, status }) => {
      return `The precaching request for '${url}' failed` + (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    "non-precached-url": ({ url }) => {
      return `createHandlerBoundToURL('${url}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`;
    },
    "add-to-cache-list-conflicting-integrities": ({ url }) => {
      return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${url} with different integrity values. Please remove one of them.`;
    },
    "missing-precache-entry": ({ cacheName, url }) => {
      return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    "cross-origin-copy-response": ({ origin }) => {
      return `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${origin}.`;
    },
    "opaque-streams-source": ({ type }) => {
      const message = `One of the workbox-streams sources resulted in an '${type}' response.`;
      if (type === "opaqueredirect") {
        return `${message} Please do not use a navigation request that results in a redirect as a source.`;
      }
      return `${message} Please ensure your sources are CORS-enabled.`;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/models/messages/messageGenerator.ts
  var generatorFunction = (code, details = {}) => {
    const message = messages[code];
    if (!message) {
      throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
  };
  var messageGenerator = false ? fallback : generatorFunction;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_private/WorkboxError.ts
  var WorkboxError = class extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
      const message = messageGenerator(errorCode, details);
      super(message);
      __publicField(this, "details");
      this.name = errorCode;
      this.details = details;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_private/assert.ts
  var isArray = (value, details) => {
    if (!Array.isArray(value)) {
      throw new WorkboxError("not-an-array", details);
    }
  };
  var hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== "function") {
      details["expectedMethod"] = expectedMethod;
      throw new WorkboxError("missing-a-method", details);
    }
  };
  var isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
      details["expectedType"] = expectedType;
      throw new WorkboxError("incorrect-type", details);
    }
  };
  var isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
      details["expectedClassName"] = expectedClass.name;
      throw new WorkboxError("incorrect-class", details);
    }
  };
  var isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
      details["validValueDescription"] = `Valid values are ${JSON.stringify(
        validValues
      )}.`;
      throw new WorkboxError("invalid-value", details);
    }
  };
  var isArrayOfClass = (value, expectedClass, details) => {
    const error = new WorkboxError("not-array-of-class", details);
    if (!Array.isArray(value)) {
      throw error;
    }
    for (const item of value) {
      if (!(item instanceof expectedClass)) {
        throw error;
      }
    }
  };
  var finalAssertExports = false ? null : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_private/getFriendlyURL.ts
  var getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_private/logger.ts
  var logger = false ? null : (() => {
    if (!("__WB_DISABLE_DEV_LOGS" in globalThis)) {
      self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
      debug: `#7f8c8d`,
      // Gray
      log: `#2ecc71`,
      // Green
      warn: `#f39c12`,
      // Yellow
      error: `#c0392b`,
      // Red
      groupCollapsed: `#3498db`,
      // Blue
      groupEnd: null
      // No colored prefix on groupEnd
    };
    const print = function(method, args) {
      if (self.__WB_DISABLE_DEV_LOGS) {
        return;
      }
      if (method === "groupCollapsed") {
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          console[method](...args);
          return;
        }
      }
      const styles = [
        `background: ${methodToColorMap[method]}`,
        `border-radius: 0.5em`,
        `color: white`,
        `font-weight: bold`,
        `padding: 2px 0.5em`
      ];
      const logPrefix = inGroup ? [] : ["%cworkbox", styles.join(";")];
      console[method](...logPrefix, ...args);
      if (method === "groupCollapsed") {
        inGroup = true;
      }
      if (method === "groupEnd") {
        inGroup = false;
      }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
      const method = key;
      api[method] = (...args) => {
        print(method, args);
      };
    }
    return api;
  })();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-cacheable-response/src/_version.ts
  try {
    self["workbox:cacheable-response:7.0.0"] && _();
  } catch (e) {
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-cacheable-response/src/CacheableResponse.ts
  var CacheableResponse = class {
    /**
     * To construct a new CacheableResponse instance you must provide at least
     * one of the `config` properties.
     *
     * If both `statuses` and `headers` are specified, then both conditions must
     * be met for the `Response` to be considered cacheable.
     *
     * @param {Object} config
     * @param {Array<number>} [config.statuses] One or more status codes that a
     * `Response` can have and be considered cacheable.
     * @param {Object<string,string>} [config.headers] A mapping of header names
     * and expected values that a `Response` can have and be considered cacheable.
     * If multiple headers are provided, only one needs to be present.
     */
    constructor(config = {}) {
      __publicField(this, "_statuses");
      __publicField(this, "_headers");
      if (true) {
        if (!(config.statuses || config.headers)) {
          throw new WorkboxError("statuses-or-headers-required", {
            moduleName: "workbox-cacheable-response",
            className: "CacheableResponse",
            funcName: "constructor"
          });
        }
        if (config.statuses) {
          finalAssertExports.isArray(config.statuses, {
            moduleName: "workbox-cacheable-response",
            className: "CacheableResponse",
            funcName: "constructor",
            paramName: "config.statuses"
          });
        }
        if (config.headers) {
          finalAssertExports.isType(config.headers, "object", {
            moduleName: "workbox-cacheable-response",
            className: "CacheableResponse",
            funcName: "constructor",
            paramName: "config.headers"
          });
        }
      }
      this._statuses = config.statuses;
      this._headers = config.headers;
    }
    /**
     * Checks a response to see whether it's cacheable or not, based on this
     * object's configuration.
     *
     * @param {Response} response The response whose cacheability is being
     * checked.
     * @return {boolean} `true` if the `Response` is cacheable, and `false`
     * otherwise.
     */
    isResponseCacheable(response) {
      if (true) {
        finalAssertExports.isInstance(response, Response, {
          moduleName: "workbox-cacheable-response",
          className: "CacheableResponse",
          funcName: "isResponseCacheable",
          paramName: "response"
        });
      }
      let cacheable = true;
      if (this._statuses) {
        cacheable = this._statuses.includes(response.status);
      }
      if (this._headers && cacheable) {
        cacheable = Object.keys(this._headers).some((headerName) => {
          return response.headers.get(headerName) === this._headers[headerName];
        });
      }
      if (true) {
        if (!cacheable) {
          logger.groupCollapsed(
            `The request for '${getFriendlyURL(response.url)}' returned a response that does not meet the criteria for being cached.`
          );
          logger.groupCollapsed(`View cacheability criteria here.`);
          logger.log(`Cacheable statuses: ` + JSON.stringify(this._statuses));
          logger.log(
            `Cacheable headers: ` + JSON.stringify(this._headers, null, 2)
          );
          logger.groupEnd();
          const logFriendlyHeaders = {};
          response.headers.forEach((value, key) => {
            logFriendlyHeaders[key] = value;
          });
          logger.groupCollapsed(`View response status and headers here.`);
          logger.log(`Response status: ${response.status}`);
          logger.log(
            `Response headers: ` + JSON.stringify(logFriendlyHeaders, null, 2)
          );
          logger.groupEnd();
          logger.groupCollapsed(`View full response details here.`);
          logger.log(response.headers);
          logger.log(response);
          logger.groupEnd();
          logger.groupEnd();
        }
      }
      return cacheable;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-cacheable-response/src/CacheableResponsePlugin.ts
  var CacheableResponsePlugin = class {
    /**
     * To construct a new CacheableResponsePlugin instance you must provide at
     * least one of the `config` properties.
     *
     * If both `statuses` and `headers` are specified, then both conditions must
     * be met for the `Response` to be considered cacheable.
     *
     * @param {Object} config
     * @param {Array<number>} [config.statuses] One or more status codes that a
     * `Response` can have and be considered cacheable.
     * @param {Object<string,string>} [config.headers] A mapping of header names
     * and expected values that a `Response` can have and be considered cacheable.
     * If multiple headers are provided, only one needs to be present.
     */
    constructor(config) {
      __publicField(this, "_cacheableResponse");
      /**
       * @param {Object} options
       * @param {Response} options.response
       * @return {Response|null}
       * @private
       */
      __publicField(this, "cacheWillUpdate", async ({ response }) => {
        if (this._cacheableResponse.isResponseCacheable(response)) {
          return response;
        }
        return null;
      });
      this._cacheableResponse = new CacheableResponse(config);
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_private/dontWaitFor.ts
  function dontWaitFor(promise) {
    void promise.then(() => {
    });
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/jakearchibald/idb@v7.1.1+incompatible/src/util.ts
  var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/jakearchibald/idb@v7.1.1+incompatible/src/wrap-idb-value.ts
  var idbProxyableTypes;
  var cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  var cursorRequestMap = /* @__PURE__ */ new WeakMap();
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
  var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
  var transformCache = /* @__PURE__ */ new WeakMap();
  var reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(
          value,
          request
        );
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  var idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "objectStoreNames") {
          return target.objectStoreNames || transactionStoreNamesMap.get(target);
        }
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(
          tx,
          storeNames.sort ? storeNames.sort() : [storeNames]
        );
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var unwrap = (value) => reverseTransformCache.get(value);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/jakearchibald/idb@v7.1.1+incompatible/src/entry.ts
  function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(
          wrap(request.result),
          event.oldVersion,
          event.newVersion,
          wrap(request.transaction),
          event
        );
      });
    }
    if (blocked) {
      request.addEventListener(
        "blocked",
        (event) => blocked(
          // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
          event.oldVersion,
          event.newVersion,
          event
        )
      );
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener(
          "versionchange",
          (event) => blocking(event.oldVersion, event.newVersion, event)
        );
      }
    }).catch(() => {
    });
    return openPromise;
  }
  function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
      request.addEventListener(
        "blocked",
        (event) => blocked(
          // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
          event.oldVersion,
          event
        )
      );
    }
    return wrap(request).then(() => void 0);
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/jakearchibald/idb@v7.1.1+incompatible/src/database-extras.ts
  var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  var writeMethods = ["put", "add", "delete", "clear"];
  var cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-expiration/src/_version.ts
  try {
    self["workbox:expiration:7.0.0"] && _();
  } catch (e) {
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-expiration/src/models/CacheTimestampsModel.ts
  var DB_NAME = "workbox-expiration";
  var CACHE_OBJECT_STORE = "cache-entries";
  var normalizeURL = (unNormalizedUrl) => {
    const url = new URL(unNormalizedUrl, location.href);
    url.hash = "";
    return url.href;
  };
  var CacheTimestampsModel = class {
    /**
     *
     * @param {string} cacheName
     *
     * @private
     */
    constructor(cacheName) {
      __publicField(this, "_cacheName");
      __publicField(this, "_db", null);
      this._cacheName = cacheName;
    }
    /**
     * Performs an upgrade of indexedDB.
     *
     * @param {IDBPDatabase<CacheDbSchema>} db
     *
     * @private
     */
    _upgradeDb(db) {
      const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: "id" });
      objStore.createIndex("cacheName", "cacheName", { unique: false });
      objStore.createIndex("timestamp", "timestamp", { unique: false });
    }
    /**
     * Performs an upgrade of indexedDB and deletes deprecated DBs.
     *
     * @param {IDBPDatabase<CacheDbSchema>} db
     *
     * @private
     */
    _upgradeDbAndDeleteOldDbs(db) {
      this._upgradeDb(db);
      if (this._cacheName) {
        void deleteDB(this._cacheName);
      }
    }
    /**
     * @param {string} url
     * @param {number} timestamp
     *
     * @private
     */
    async setTimestamp(url, timestamp) {
      url = normalizeURL(url);
      const entry = {
        url,
        timestamp,
        cacheName: this._cacheName,
        // Creating an ID from the URL and cache name won't be necessary once
        // Edge switches to Chromium and all browsers we support work with
        // array keyPaths.
        id: this._getId(url)
      };
      const db = await this.getDb();
      const tx = db.transaction(CACHE_OBJECT_STORE, "readwrite", {
        durability: "relaxed"
      });
      await tx.store.put(entry);
      await tx.done;
    }
    /**
     * Returns the timestamp stored for a given URL.
     *
     * @param {string} url
     * @return {number | undefined}
     *
     * @private
     */
    async getTimestamp(url) {
      const db = await this.getDb();
      const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
      return entry == null ? void 0 : entry.timestamp;
    }
    /**
     * Iterates through all the entries in the object store (from newest to
     * oldest) and removes entries once either `maxCount` is reached or the
     * entry's timestamp is less than `minTimestamp`.
     *
     * @param {number} minTimestamp
     * @param {number} maxCount
     * @return {Array<string>}
     *
     * @private
     */
    async expireEntries(minTimestamp, maxCount) {
      const db = await this.getDb();
      let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index("timestamp").openCursor(null, "prev");
      const entriesToDelete = [];
      let entriesNotDeletedCount = 0;
      while (cursor) {
        const result = cursor.value;
        if (result.cacheName === this._cacheName) {
          if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
            entriesToDelete.push(cursor.value);
          } else {
            entriesNotDeletedCount++;
          }
        }
        cursor = await cursor.continue();
      }
      const urlsDeleted = [];
      for (const entry of entriesToDelete) {
        await db.delete(CACHE_OBJECT_STORE, entry.id);
        urlsDeleted.push(entry.url);
      }
      return urlsDeleted;
    }
    /**
     * Takes a URL and returns an ID that will be unique in the object store.
     *
     * @param {string} url
     * @return {string}
     *
     * @private
     */
    _getId(url) {
      return this._cacheName + "|" + normalizeURL(url);
    }
    /**
     * Returns an open connection to the database.
     *
     * @private
     */
    async getDb() {
      if (!this._db) {
        this._db = await openDB(DB_NAME, 1, {
          upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
        });
      }
      return this._db;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-expiration/src/CacheExpiration.ts
  var CacheExpiration = class {
    /**
     * To construct a new CacheExpiration instance you must provide at least
     * one of the `config` properties.
     *
     * @param {string} cacheName Name of the cache to apply restrictions to.
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     */
    constructor(cacheName, config = {}) {
      __publicField(this, "_isRunning", false);
      __publicField(this, "_rerunRequested", false);
      __publicField(this, "_maxEntries");
      __publicField(this, "_maxAgeSeconds");
      __publicField(this, "_matchOptions");
      __publicField(this, "_cacheName");
      __publicField(this, "_timestampModel");
      if (true) {
        finalAssertExports.isType(cacheName, "string", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor",
          paramName: "cacheName"
        });
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError("max-entries-or-age-required", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor"
          });
        }
        if (config.maxEntries) {
          finalAssertExports.isType(config.maxEntries, "number", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor",
            paramName: "config.maxEntries"
          });
        }
        if (config.maxAgeSeconds) {
          finalAssertExports.isType(config.maxAgeSeconds, "number", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor",
            paramName: "config.maxAgeSeconds"
          });
        }
      }
      this._maxEntries = config.maxEntries;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._matchOptions = config.matchOptions;
      this._cacheName = cacheName;
      this._timestampModel = new CacheTimestampsModel(cacheName);
    }
    /**
     * Expires entries for the given cache and given criteria.
     */
    async expireEntries() {
      if (this._isRunning) {
        this._rerunRequested = true;
        return;
      }
      this._isRunning = true;
      const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
      const urlsExpired = await this._timestampModel.expireEntries(
        minTimestamp,
        this._maxEntries
      );
      const cache = await self.caches.open(this._cacheName);
      for (const url of urlsExpired) {
        await cache.delete(url, this._matchOptions);
      }
      if (true) {
        if (urlsExpired.length > 0) {
          logger.groupCollapsed(
            `Expired ${urlsExpired.length} ${urlsExpired.length === 1 ? "entry" : "entries"} and removed ${urlsExpired.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`
          );
          logger.log(
            `Expired the following ${urlsExpired.length === 1 ? "URL" : "URLs"}:`
          );
          urlsExpired.forEach((url) => logger.log(`    ${url}`));
          logger.groupEnd();
        } else {
          logger.debug(`Cache expiration ran and found no entries to remove.`);
        }
      }
      this._isRunning = false;
      if (this._rerunRequested) {
        this._rerunRequested = false;
        dontWaitFor(this.expireEntries());
      }
    }
    /**
     * Update the timestamp for the given URL. This ensures the when
     * removing entries based on maximum entries, most recently used
     * is accurate or when expiring, the timestamp is up-to-date.
     *
     * @param {string} url
     */
    async updateTimestamp(url) {
      if (true) {
        finalAssertExports.isType(url, "string", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "updateTimestamp",
          paramName: "url"
        });
      }
      await this._timestampModel.setTimestamp(url, Date.now());
    }
    /**
     * Can be used to check if a URL has expired or not before it's used.
     *
     * This requires a look up from IndexedDB, so can be slow.
     *
     * Note: This method will not remove the cached entry, call
     * `expireEntries()` to remove indexedDB and Cache entries.
     *
     * @param {string} url
     * @return {boolean}
     */
    async isURLExpired(url) {
      if (!this._maxAgeSeconds) {
        if (true) {
          throw new WorkboxError(`expired-test-without-max-age`, {
            methodName: "isURLExpired",
            paramName: "maxAgeSeconds"
          });
        }
        return false;
      } else {
        const timestamp = await this._timestampModel.getTimestamp(url);
        const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
        return timestamp !== void 0 ? timestamp < expireOlderThan : true;
      }
    }
    /**
     * Removes the IndexedDB object store used to keep track of cache expiration
     * metadata.
     */
    async delete() {
      this._rerunRequested = false;
      await this._timestampModel.expireEntries(Infinity);
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_private/cacheNames.ts
  var _cacheNameDetails = {
    googleAnalytics: "googleAnalytics",
    precache: "precache-v2",
    prefix: "workbox",
    runtime: "runtime",
    suffix: typeof registration !== "undefined" ? registration.scope : ""
  };
  var _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
  };
  var eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
      fn(key);
    }
  };
  var cacheNames = {
    updateDetails: (details) => {
      eachCacheNameDetail((key) => {
        if (typeof details[key] === "string") {
          _cacheNameDetails[key] = details[key];
        }
      });
    },
    getGoogleAnalyticsName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
      return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
      return _cacheNameDetails.suffix;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/models/quotaErrorCallbacks.ts
  var quotaErrorCallbacks = /* @__PURE__ */ new Set();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/registerQuotaErrorCallback.ts
  function registerQuotaErrorCallback(callback) {
    if (true) {
      finalAssertExports.isType(callback, "function", {
        moduleName: "workbox-core",
        funcName: "register",
        paramName: "callback"
      });
    }
    quotaErrorCallbacks.add(callback);
    if (true) {
      logger.log("Registered a callback to respond to quota errors.", callback);
    }
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-expiration/src/ExpirationPlugin.ts
  var ExpirationPlugin = class {
    /**
     * @param {ExpirationPluginOptions} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
     * automatic deletion if the available storage quota has been exceeded.
     */
    constructor(config = {}) {
      __publicField(this, "_config");
      __publicField(this, "_maxAgeSeconds");
      __publicField(this, "_cacheExpirations");
      /**
       * A "lifecycle" callback that will be triggered automatically by the
       * `workbox-strategies` handlers when a `Response` is about to be returned
       * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
       * the handler. It allows the `Response` to be inspected for freshness and
       * prevents it from being used if the `Response`'s `Date` header value is
       * older than the configured `maxAgeSeconds`.
       *
       * @param {Object} options
       * @param {string} options.cacheName Name of the cache the response is in.
       * @param {Response} options.cachedResponse The `Response` object that's been
       *     read from a cache and whose freshness should be checked.
       * @return {Response} Either the `cachedResponse`, if it's
       *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
       *
       * @private
       */
      __publicField(this, "cachedResponseWillBeUsed", async ({
        event,
        request,
        cacheName,
        cachedResponse
      }) => {
        if (!cachedResponse) {
          return null;
        }
        const isFresh = this._isResponseDateFresh(cachedResponse);
        const cacheExpiration = this._getCacheExpiration(cacheName);
        dontWaitFor(cacheExpiration.expireEntries());
        const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
        if (event) {
          try {
            event.waitUntil(updateTimestampDone);
          } catch (error) {
            if (true) {
              if ("request" in event) {
                logger.warn(
                  `Unable to ensure service worker stays alive when updating cache entry for '${getFriendlyURL(event.request.url)}'.`
                );
              }
            }
          }
        }
        return isFresh ? cachedResponse : null;
      });
      /**
       * A "lifecycle" callback that will be triggered automatically by the
       * `workbox-strategies` handlers when an entry is added to a cache.
       *
       * @param {Object} options
       * @param {string} options.cacheName Name of the cache that was updated.
       * @param {string} options.request The Request for the cached entry.
       *
       * @private
       */
      __publicField(this, "cacheDidUpdate", async ({
        cacheName,
        request
      }) => {
        if (true) {
          finalAssertExports.isType(cacheName, "string", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "cacheDidUpdate",
            paramName: "cacheName"
          });
          finalAssertExports.isInstance(request, Request, {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "cacheDidUpdate",
            paramName: "request"
          });
        }
        const cacheExpiration = this._getCacheExpiration(cacheName);
        await cacheExpiration.updateTimestamp(request.url);
        await cacheExpiration.expireEntries();
      });
      if (true) {
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError("max-entries-or-age-required", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor"
          });
        }
        if (config.maxEntries) {
          finalAssertExports.isType(config.maxEntries, "number", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor",
            paramName: "config.maxEntries"
          });
        }
        if (config.maxAgeSeconds) {
          finalAssertExports.isType(config.maxAgeSeconds, "number", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor",
            paramName: "config.maxAgeSeconds"
          });
        }
      }
      this._config = config;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._cacheExpirations = /* @__PURE__ */ new Map();
      if (config.purgeOnQuotaError) {
        registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
      }
    }
    /**
     * A simple helper method to return a CacheExpiration instance for a given
     * cache name.
     *
     * @param {string} cacheName
     * @return {CacheExpiration}
     *
     * @private
     */
    _getCacheExpiration(cacheName) {
      if (cacheName === cacheNames.getRuntimeName()) {
        throw new WorkboxError("expire-custom-caches-only");
      }
      let cacheExpiration = this._cacheExpirations.get(cacheName);
      if (!cacheExpiration) {
        cacheExpiration = new CacheExpiration(cacheName, this._config);
        this._cacheExpirations.set(cacheName, cacheExpiration);
      }
      return cacheExpiration;
    }
    /**
     * @param {Response} cachedResponse
     * @return {boolean}
     *
     * @private
     */
    _isResponseDateFresh(cachedResponse) {
      if (!this._maxAgeSeconds) {
        return true;
      }
      const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
      if (dateHeaderTimestamp === null) {
        return true;
      }
      const now = Date.now();
      return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
    }
    /**
     * This method will extract the data header and parse it into a useful
     * value.
     *
     * @param {Response} cachedResponse
     * @return {number|null}
     *
     * @private
     */
    _getDateHeaderTimestamp(cachedResponse) {
      if (!cachedResponse.headers.has("date")) {
        return null;
      }
      const dateHeader = cachedResponse.headers.get("date");
      const parsedDate = new Date(dateHeader);
      const headerTime = parsedDate.getTime();
      if (isNaN(headerTime)) {
        return null;
      }
      return headerTime;
    }
    /**
     * This is a helper method that performs two operations:
     *
     * - Deletes *all* the underlying Cache instances associated with this plugin
     * instance, by calling caches.delete() on your behalf.
     * - Deletes the metadata from IndexedDB used to keep track of expiration
     * details for each Cache instance.
     *
     * When using cache expiration, calling this method is preferable to calling
     * `caches.delete()` directly, since this will ensure that the IndexedDB
     * metadata is also cleanly removed and open IndexedDB instances are deleted.
     *
     * Note that if you're *not* using cache expiration for a given cache, calling
     * `caches.delete()` and passing in the cache's name should be sufficient.
     * There is no Workbox-specific method needed for cleanup in that case.
     */
    async deleteCacheAndMetadata() {
      for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
        await self.caches.delete(cacheName);
        await cacheExpiration.delete();
      }
      this._cacheExpirations = /* @__PURE__ */ new Map();
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-routing/src/_version.ts
  try {
    self["workbox:routing:7.0.0"] && _();
  } catch (e) {
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-routing/src/utils/constants.ts
  var defaultMethod = "GET";
  var validMethods = [
    "DELETE",
    "GET",
    "HEAD",
    "PATCH",
    "POST",
    "PUT"
  ];

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-routing/src/utils/normalizeHandler.ts
  var normalizeHandler = (handler2) => {
    if (handler2 && typeof handler2 === "object") {
      if (true) {
        finalAssertExports.hasMethod(handler2, "handle", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "handler"
        });
      }
      return handler2;
    } else {
      if (true) {
        finalAssertExports.isType(handler2, "function", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "handler"
        });
      }
      return { handle: handler2 };
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-routing/src/Route.ts
  var Route = class {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler2, method = defaultMethod) {
      __publicField(this, "handler");
      __publicField(this, "match");
      __publicField(this, "method");
      __publicField(this, "catchHandler");
      if (true) {
        finalAssertExports.isType(match, "function", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "match"
        });
        if (method) {
          finalAssertExports.isOneOf(method, validMethods, { paramName: "method" });
        }
      }
      this.handler = normalizeHandler(handler2);
      this.match = match;
      this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler2) {
      this.catchHandler = normalizeHandler(handler2);
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-routing/src/RegExpRoute.ts
  var RegExpRoute = class extends Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler2, method) {
      if (true) {
        finalAssertExports.isInstance(regExp, RegExp, {
          moduleName: "workbox-routing",
          className: "RegExpRoute",
          funcName: "constructor",
          paramName: "pattern"
        });
      }
      const match = ({ url }) => {
        const result = regExp.exec(url.href);
        if (!result) {
          return;
        }
        if (url.origin !== location.origin && result.index !== 0) {
          if (true) {
            logger.debug(
              `The regular expression '${regExp.toString()}' only partially matched against the cross-origin URL '${url.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`
            );
          }
          return;
        }
        return result.slice(1);
      };
      super(match, handler2, method);
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-routing/src/Router.ts
  var Router = class {
    /**
     * Initializes a new Router.
     */
    constructor() {
      __publicField(this, "_routes");
      __publicField(this, "_defaultHandlerMap");
      __publicField(this, "_catchHandler");
      this._routes = /* @__PURE__ */ new Map();
      this._defaultHandlerMap = /* @__PURE__ */ new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
      return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
      self.addEventListener("fetch", (event) => {
        const { request } = event;
        const responsePromise = this.handleRequest({ request, event });
        if (responsePromise) {
          event.respondWith(responsePromise);
        }
      });
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
      self.addEventListener("message", (event) => {
        if (event.data && event.data.type === "CACHE_URLS") {
          const { payload } = event.data;
          if (true) {
            logger.debug(`Caching URLs from the window`, payload.urlsToCache);
          }
          const requestPromises = Promise.all(
            payload.urlsToCache.map((entry) => {
              if (typeof entry === "string") {
                entry = [entry];
              }
              const request = new Request(...entry);
              return this.handleRequest({ request, event });
            })
          );
          event.waitUntil(requestPromises);
          if (event.ports && event.ports[0]) {
            void requestPromises.then(() => event.ports[0].postMessage(true));
          }
        }
      });
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({
      request,
      event
    }) {
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "handleRequest",
          paramName: "options.request"
        });
      }
      const url = new URL(request.url, location.href);
      if (!url.protocol.startsWith("http")) {
        if (true) {
          logger.debug(
            `Workbox Router only supports URLs that start with 'http'.`
          );
        }
        return;
      }
      const sameOrigin = url.origin === location.origin;
      const { params, route } = this.findMatchingRoute({
        event,
        request,
        sameOrigin,
        url
      });
      let handler2 = route && route.handler;
      const debugMessages = [];
      if (true) {
        if (handler2) {
          debugMessages.push([`Found a route to handle this request:`, route]);
          if (params) {
            debugMessages.push([
              `Passing the following params to the route's handler:`,
              params
            ]);
          }
        }
      }
      const method = request.method;
      if (!handler2 && this._defaultHandlerMap.has(method)) {
        if (true) {
          debugMessages.push(
            `Failed to find a matching route. Falling back to the default handler for ${method}.`
          );
        }
        handler2 = this._defaultHandlerMap.get(method);
      }
      if (!handler2) {
        if (true) {
          logger.debug(`No route found for: ${getFriendlyURL(url)}`);
        }
        return;
      }
      if (true) {
        logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
        debugMessages.forEach((msg) => {
          if (Array.isArray(msg)) {
            logger.log(...msg);
          } else {
            logger.log(msg);
          }
        });
        logger.groupEnd();
      }
      let responsePromise;
      try {
        responsePromise = handler2.handle({ url, request, event, params });
      } catch (err) {
        responsePromise = Promise.reject(err);
      }
      const catchHandler = route && route.catchHandler;
      if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
        responsePromise = responsePromise.catch(async (err) => {
          if (catchHandler) {
            if (true) {
              logger.groupCollapsed(
                `Error thrown when responding to:  ${getFriendlyURL(
                  url
                )}. Falling back to route's Catch Handler.`
              );
              logger.error(`Error thrown by:`, route);
              logger.error(err);
              logger.groupEnd();
            }
            try {
              return await catchHandler.handle({ url, request, event, params });
            } catch (catchErr) {
              if (catchErr instanceof Error) {
                err = catchErr;
              }
            }
          }
          if (this._catchHandler) {
            if (true) {
              logger.groupCollapsed(
                `Error thrown when responding to:  ${getFriendlyURL(
                  url
                )}. Falling back to global Catch Handler.`
              );
              logger.error(`Error thrown by:`, route);
              logger.error(err);
              logger.groupEnd();
            }
            return this._catchHandler.handle({ url, request, event });
          }
          throw err;
        });
      }
      return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({
      url,
      sameOrigin,
      request,
      event
    }) {
      const routes = this._routes.get(request.method) || [];
      for (const route of routes) {
        let params;
        const matchResult = route.match({ url, sameOrigin, request, event });
        if (matchResult) {
          if (true) {
            if (matchResult instanceof Promise) {
              logger.warn(
                `While routing ${getFriendlyURL(url)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`,
                route
              );
            }
          }
          params = matchResult;
          if (Array.isArray(params) && params.length === 0) {
            params = void 0;
          } else if (matchResult.constructor === Object && // eslint-disable-line
          Object.keys(matchResult).length === 0) {
            params = void 0;
          } else if (typeof matchResult === "boolean") {
            params = void 0;
          }
          return { route, params };
        }
      }
      return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler2, method = defaultMethod) {
      this._defaultHandlerMap.set(method, normalizeHandler(handler2));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler2) {
      this._catchHandler = normalizeHandler(handler2);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
      if (true) {
        finalAssertExports.isType(route, "object", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.hasMethod(route, "match", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.isType(route.handler, "object", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.hasMethod(route.handler, "handle", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route.handler"
        });
        finalAssertExports.isType(route.method, "string", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route.method"
        });
      }
      if (!this._routes.has(route.method)) {
        this._routes.set(route.method, []);
      }
      this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
      if (!this._routes.has(route.method)) {
        throw new WorkboxError("unregister-route-but-not-found-with-method", {
          method: route.method
        });
      }
      const routeIndex = this._routes.get(route.method).indexOf(route);
      if (routeIndex > -1) {
        this._routes.get(route.method).splice(routeIndex, 1);
      } else {
        throw new WorkboxError("unregister-route-route-not-registered");
      }
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-routing/src/utils/getOrCreateDefaultRouter.ts
  var defaultRouter;
  var getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
      defaultRouter = new Router();
      defaultRouter.addFetchListener();
      defaultRouter.addCacheListener();
    }
    return defaultRouter;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-routing/src/registerRoute.ts
  function registerRoute(capture, handler2, method) {
    let route;
    if (typeof capture === "string") {
      const captureUrl = new URL(capture, location.href);
      if (true) {
        if (!(capture.startsWith("/") || capture.startsWith("http"))) {
          throw new WorkboxError("invalid-string", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
          });
        }
        const valueToCheck = capture.startsWith("http") ? captureUrl.pathname : capture;
        const wildcards = "[*:?+]";
        if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
          logger.debug(
            `The '$capture' parameter contains an Express-style wildcard character (${wildcards}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`
          );
        }
      }
      const matchCallback = ({ url }) => {
        if (true) {
          if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
            logger.debug(
              `${capture} only partially matches the cross-origin URL ${url.toString()}. This route will only handle cross-origin requests if they match the entire URL.`
            );
          }
        }
        return url.href === captureUrl.href;
      };
      route = new Route(matchCallback, handler2, method);
    } else if (capture instanceof RegExp) {
      route = new RegExpRoute(capture, handler2, method);
    } else if (typeof capture === "function") {
      route = new Route(capture, handler2, method);
    } else if (capture instanceof Route) {
      route = capture;
    } else {
      throw new WorkboxError("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
      });
    }
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.registerRoute(route);
    return route;
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-routing/src/setCatchHandler.ts
  function setCatchHandler(handler2) {
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.setCatchHandler(handler2);
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_private/cacheMatchIgnoreParams.ts
  function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
      strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
  }
  async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    if (request.url === strippedRequestURL) {
      return cache.match(request, matchOptions);
    }
    const keysOptions = { ...matchOptions, ignoreSearch: true };
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
      const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
      if (strippedRequestURL === strippedCacheKeyURL) {
        return cache.match(cacheKey, matchOptions);
      }
    }
    return;
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_private/Deferred.ts
  var Deferred = class {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
      __publicField(this, "promise");
      __publicField(this, "resolve");
      __publicField(this, "reject");
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_private/executeQuotaErrorCallbacks.ts
  async function executeQuotaErrorCallbacks() {
    if (true) {
      logger.log(
        `About to run ${quotaErrorCallbacks.size} callbacks to clean up caches.`
      );
    }
    for (const callback of quotaErrorCallbacks) {
      await callback();
      if (true) {
        logger.log(callback, "is complete.");
      }
    }
    if (true) {
      logger.log("Finished running callbacks.");
    }
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-core/src/_private/timeout.ts
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-strategies/src/_version.ts
  try {
    self["workbox:strategies:7.0.0"] && _();
  } catch (e) {
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-strategies/src/StrategyHandler.ts
  function toRequest(input) {
    return typeof input === "string" ? new Request(input) : input;
  }
  var StrategyHandler = class {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
      __publicField(this, "request");
      __publicField(this, "url");
      __publicField(this, "event");
      __publicField(this, "params");
      __publicField(this, "_cacheKeys", {});
      __publicField(this, "_strategy");
      __publicField(this, "_extendLifetimePromises");
      __publicField(this, "_handlerDeferred");
      __publicField(this, "_plugins");
      __publicField(this, "_pluginStateMap");
      if (true) {
        finalAssertExports.isInstance(options.event, ExtendableEvent, {
          moduleName: "workbox-strategies",
          className: "StrategyHandler",
          funcName: "constructor",
          paramName: "options.event"
        });
      }
      Object.assign(this, options);
      this.event = options.event;
      this._strategy = strategy;
      this._handlerDeferred = new Deferred();
      this._extendLifetimePromises = [];
      this._plugins = [...strategy.plugins];
      this._pluginStateMap = /* @__PURE__ */ new Map();
      for (const plugin of this._plugins) {
        this._pluginStateMap.set(plugin, {});
      }
      this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
      const { event } = this;
      let request = toRequest(input);
      if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
        const possiblePreloadResponse = await event.preloadResponse;
        if (possiblePreloadResponse) {
          if (true) {
            logger.log(
              `Using a preloaded navigation response for '${getFriendlyURL(request.url)}'`
            );
          }
          return possiblePreloadResponse;
        }
      }
      const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
      try {
        for (const cb of this.iterateCallbacks("requestWillFetch")) {
          request = await cb({ request: request.clone(), event });
        }
      } catch (err) {
        if (err instanceof Error) {
          throw new WorkboxError("plugin-error-request-will-fetch", {
            thrownErrorMessage: err.message
          });
        }
      }
      const pluginFilteredRequest = request.clone();
      try {
        let fetchResponse;
        fetchResponse = await fetch(
          request,
          request.mode === "navigate" ? void 0 : this._strategy.fetchOptions
        );
        if (true) {
          logger.debug(
            `Network request for '${getFriendlyURL(request.url)}' returned a response with status '${fetchResponse.status}'.`
          );
        }
        for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
          fetchResponse = await callback({
            event,
            request: pluginFilteredRequest,
            response: fetchResponse
          });
        }
        return fetchResponse;
      } catch (error) {
        if (true) {
          logger.log(
            `Network request for '${getFriendlyURL(request.url)}' threw an error.`,
            error
          );
        }
        if (originalRequest) {
          await this.runCallbacks("fetchDidFail", {
            error,
            event,
            originalRequest: originalRequest.clone(),
            request: pluginFilteredRequest.clone()
          });
        }
        throw error;
      }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
      const response = await this.fetch(input);
      const responseClone = response.clone();
      void this.waitUntil(this.cachePut(input, responseClone));
      return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
      const request = toRequest(key);
      let cachedResponse;
      const { cacheName, matchOptions } = this._strategy;
      const effectiveRequest = await this.getCacheKey(request, "read");
      const multiMatchOptions = { ...matchOptions, ...{ cacheName } };
      cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
      if (true) {
        if (cachedResponse) {
          logger.debug(`Found a cached response in '${cacheName}'.`);
        } else {
          logger.debug(`No cached response found in '${cacheName}'.`);
        }
      }
      for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
        cachedResponse = await callback({
          cacheName,
          matchOptions,
          cachedResponse,
          request: effectiveRequest,
          event: this.event
        }) || void 0;
      }
      return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
      const request = toRequest(key);
      await timeout(0);
      const effectiveRequest = await this.getCacheKey(request, "write");
      if (true) {
        if (effectiveRequest.method && effectiveRequest.method !== "GET") {
          throw new WorkboxError("attempt-to-cache-non-get-request", {
            url: getFriendlyURL(effectiveRequest.url),
            method: effectiveRequest.method
          });
        }
        const vary = response.headers.get("Vary");
        if (vary) {
          logger.debug(
            `The response for ${getFriendlyURL(effectiveRequest.url)} has a 'Vary: ${vary}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`
          );
        }
      }
      if (!response) {
        if (true) {
          logger.error(
            `Cannot cache non-existent response for '${getFriendlyURL(effectiveRequest.url)}'.`
          );
        }
        throw new WorkboxError("cache-put-with-no-response", {
          url: getFriendlyURL(effectiveRequest.url)
        });
      }
      const responseToCache = await this._ensureResponseSafeToCache(response);
      if (!responseToCache) {
        if (true) {
          logger.debug(
            `Response '${getFriendlyURL(effectiveRequest.url)}' will not be cached.`,
            responseToCache
          );
        }
        return false;
      }
      const { cacheName, matchOptions } = this._strategy;
      const cache = await self.caches.open(cacheName);
      const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
      const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
        // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
        // feature. Consider into ways to only add this behavior if using
        // precaching.
        cache,
        effectiveRequest.clone(),
        ["__WB_REVISION__"],
        matchOptions
      ) : null;
      if (true) {
        logger.debug(
          `Updating the '${cacheName}' cache with a new Response for ${getFriendlyURL(effectiveRequest.url)}.`
        );
      }
      try {
        await cache.put(
          effectiveRequest,
          hasCacheUpdateCallback ? responseToCache.clone() : responseToCache
        );
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "QuotaExceededError") {
            await executeQuotaErrorCallbacks();
          }
          throw error;
        }
      }
      for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
        await callback({
          cacheName,
          oldResponse,
          newResponse: responseToCache.clone(),
          request: effectiveRequest,
          event: this.event
        });
      }
      return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
      const key = `${request.url} | ${mode}`;
      if (!this._cacheKeys[key]) {
        let effectiveRequest = request;
        for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
          effectiveRequest = toRequest(
            await callback({
              mode,
              request: effectiveRequest,
              event: this.event,
              // params has a type any can't change right now.
              params: this.params
              // eslint-disable-line
            })
          );
        }
        this._cacheKeys[key] = effectiveRequest;
      }
      return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
      for (const plugin of this._strategy.plugins) {
        if (name in plugin) {
          return true;
        }
      }
      return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
      for (const callback of this.iterateCallbacks(name)) {
        await callback(param);
      }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
      for (const plugin of this._strategy.plugins) {
        if (typeof plugin[name] === "function") {
          const state = this._pluginStateMap.get(plugin);
          const statefulCallback = (param) => {
            const statefulParam = { ...param, state };
            return plugin[name](statefulParam);
          };
          yield statefulCallback;
        }
      }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
      this._extendLifetimePromises.push(promise);
      return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
      let promise;
      while (promise = this._extendLifetimePromises.shift()) {
        await promise;
      }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
      this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
      let responseToCache = response;
      let pluginsUsed = false;
      for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
        responseToCache = await callback({
          request: this.request,
          response: responseToCache,
          event: this.event
        }) || void 0;
        pluginsUsed = true;
        if (!responseToCache) {
          break;
        }
      }
      if (!pluginsUsed) {
        if (responseToCache && responseToCache.status !== 200) {
          responseToCache = void 0;
        }
        if (true) {
          if (responseToCache) {
            if (responseToCache.status !== 200) {
              if (responseToCache.status === 0) {
                logger.warn(
                  `The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`
                );
              } else {
                logger.debug(
                  `The response for '${this.request.url}' returned a status code of '${response.status}' and won't be cached as a result.`
                );
              }
            }
          }
        }
      }
      return responseToCache;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-strategies/src/Strategy.ts
  var Strategy = class {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
      __publicField(this, "cacheName");
      __publicField(this, "plugins");
      __publicField(this, "fetchOptions");
      __publicField(this, "matchOptions");
      this.cacheName = cacheNames.getRuntimeName(options.cacheName);
      this.plugins = options.plugins || [];
      this.fetchOptions = options.fetchOptions;
      this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
      const [responseDone] = this.handleAll(options);
      return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
      if (options instanceof FetchEvent) {
        options = {
          event: options,
          request: options.request
        };
      }
      const event = options.event;
      const request = typeof options.request === "string" ? new Request(options.request) : options.request;
      const params = "params" in options ? options.params : void 0;
      const handler2 = new StrategyHandler(this, { event, request, params });
      const responseDone = this._getResponse(handler2, request, event);
      const handlerDone = this._awaitComplete(
        responseDone,
        handler2,
        request,
        event
      );
      return [responseDone, handlerDone];
    }
    async _getResponse(handler2, request, event) {
      await handler2.runCallbacks("handlerWillStart", { event, request });
      let response = void 0;
      try {
        response = await this._handle(request, handler2);
        if (!response || response.type === "error") {
          throw new WorkboxError("no-response", { url: request.url });
        }
      } catch (error) {
        if (error instanceof Error) {
          for (const callback of handler2.iterateCallbacks("handlerDidError")) {
            response = await callback({ error, event, request });
            if (response) {
              break;
            }
          }
        }
        if (!response) {
          throw error;
        } else if (true) {
          logger.log(
            `While responding to '${getFriendlyURL(request.url)}', an ${error instanceof Error ? error.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`
          );
        }
      }
      for (const callback of handler2.iterateCallbacks("handlerWillRespond")) {
        response = await callback({ event, request, response });
      }
      return response;
    }
    async _awaitComplete(responseDone, handler2, request, event) {
      let response;
      let error;
      try {
        response = await responseDone;
      } catch (error2) {
      }
      try {
        await handler2.runCallbacks("handlerDidRespond", {
          event,
          request,
          response
        });
        await handler2.doneWaiting();
      } catch (waitUntilError) {
        if (waitUntilError instanceof Error) {
          error = waitUntilError;
        }
      }
      await handler2.runCallbacks("handlerDidComplete", {
        event,
        request,
        response,
        error
      });
      handler2.destroy();
      if (error) {
        throw error;
      }
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-strategies/src/utils/messages.ts
  var messages2 = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
    printFinalResponse: (response) => {
      if (response) {
        logger.groupCollapsed(`View the final response here.`);
        logger.log(response || "[No response returned]");
        logger.groupEnd();
      }
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-strategies/src/CacheFirst.ts
  var CacheFirst = class extends Strategy {
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler2) {
      const logs = [];
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "makeRequest",
          paramName: "request"
        });
      }
      let response = await handler2.cacheMatch(request);
      let error = void 0;
      if (!response) {
        if (true) {
          logs.push(
            `No response found in the '${this.cacheName}' cache. Will respond with a network request.`
          );
        }
        try {
          response = await handler2.fetchAndCachePut(request);
        } catch (err) {
          if (err instanceof Error) {
            error = err;
          }
        }
        if (true) {
          if (response) {
            logs.push(`Got response from network.`);
          } else {
            logs.push(`Unable to get a response from the network.`);
          }
        }
      } else {
        if (true) {
          logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
        }
      }
      if (true) {
        logger.groupCollapsed(
          messages2.strategyStart(this.constructor.name, request)
        );
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url, error });
      }
      return response;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-strategies/src/plugins/cacheOkAndOpaquePlugin.ts
  var cacheOkAndOpaquePlugin = {
    /**
     * Returns a valid response (to allow caching) if the status is 200 (OK) or
     * 0 (opaque).
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: async ({ response }) => {
      if (response.status === 200 || response.status === 0) {
        return response;
      }
      return null;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-strategies/src/NetworkFirst.ts
  var NetworkFirst = class extends Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will fallback to the cache.
     *
     * This option can be used to combat
     * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
     * scenarios.
     */
    constructor(options = {}) {
      super(options);
      __publicField(this, "_networkTimeoutSeconds");
      if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
        this.plugins.unshift(cacheOkAndOpaquePlugin);
      }
      this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
      if (true) {
        if (this._networkTimeoutSeconds) {
          finalAssertExports.isType(this._networkTimeoutSeconds, "number", {
            moduleName: "workbox-strategies",
            className: this.constructor.name,
            funcName: "constructor",
            paramName: "networkTimeoutSeconds"
          });
        }
      }
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler2) {
      const logs = [];
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "handle",
          paramName: "makeRequest"
        });
      }
      const promises = [];
      let timeoutId;
      if (this._networkTimeoutSeconds) {
        const { id, promise } = this._getTimeoutPromise({ request, logs, handler: handler2 });
        timeoutId = id;
        promises.push(promise);
      }
      const networkPromise = this._getNetworkPromise({
        timeoutId,
        request,
        logs,
        handler: handler2
      });
      promises.push(networkPromise);
      const response = await handler2.waitUntil(
        (async () => {
          return await handler2.waitUntil(Promise.race(promises)) || // If Promise.race() resolved with null, it might be due to a network
          // timeout + a cache miss. If that were to happen, we'd rather wait until
          // the networkPromise resolves instead of returning null.
          // Note that it's fine to await an already-resolved promise, so we don't
          // have to check to see if it's still "in flight".
          await networkPromise;
        })()
      );
      if (true) {
        logger.groupCollapsed(
          messages2.strategyStart(this.constructor.name, request)
        );
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url });
      }
      return response;
    }
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs array
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    _getTimeoutPromise({
      request,
      logs,
      handler: handler2
    }) {
      let timeoutId;
      const timeoutPromise = new Promise(
        (resolve) => {
          const onNetworkTimeout = async () => {
            if (true) {
              logs.push(
                `Timing out the network response at ${this._networkTimeoutSeconds} seconds.`
              );
            }
            resolve(await handler2.cacheMatch(request));
          };
          timeoutId = setTimeout(
            onNetworkTimeout,
            this._networkTimeoutSeconds * 1e3
          );
        }
      );
      return {
        promise: timeoutPromise,
        id: timeoutId
      };
    }
    /**
     * @param {Object} options
     * @param {number|undefined} options.timeoutId
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs Array.
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getNetworkPromise({
      timeoutId,
      request,
      logs,
      handler: handler2
    }) {
      let error;
      let response;
      try {
        response = await handler2.fetchAndCachePut(request);
      } catch (fetchError) {
        if (fetchError instanceof Error) {
          error = fetchError;
        }
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (true) {
        if (response) {
          logs.push(`Got response from network.`);
        } else {
          logs.push(
            `Unable to get a response from the network. Will respond with a cached response.`
          );
        }
      }
      if (error || !response) {
        response = await handler2.cacheMatch(request);
        if (true) {
          if (response) {
            logs.push(
              `Found a cached response in the '${this.cacheName}' cache.`
            );
          } else {
            logs.push(`No response found in the '${this.cacheName}' cache.`);
          }
        }
      }
      return response;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-strategies/src/NetworkOnly.ts
  var NetworkOnly = class extends Strategy {
    /**
     * @param {Object} [options]
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will result in a network error.
     */
    constructor(options = {}) {
      super(options);
      __publicField(this, "_networkTimeoutSeconds");
      this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler2) {
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "_handle",
          paramName: "request"
        });
      }
      let error = void 0;
      let response;
      try {
        const promises = [
          handler2.fetch(request)
        ];
        if (this._networkTimeoutSeconds) {
          const timeoutPromise = timeout(
            this._networkTimeoutSeconds * 1e3
          );
          promises.push(timeoutPromise);
        }
        response = await Promise.race(promises);
        if (!response) {
          throw new Error(
            `Timed out the network response after ${this._networkTimeoutSeconds} seconds.`
          );
        }
      } catch (err) {
        if (err instanceof Error) {
          error = err;
        }
      }
      if (true) {
        logger.groupCollapsed(
          messages2.strategyStart(this.constructor.name, request)
        );
        if (response) {
          logger.log(`Got response from network.`);
        } else {
          logger.log(`Unable to get a response from the network.`);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url, error });
      }
      return response;
    }
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.0.0+incompatible/packages/workbox-strategies/src/StaleWhileRevalidate.ts
  var StaleWhileRevalidate = class extends Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options = {}) {
      super(options);
      if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
        this.plugins.unshift(cacheOkAndOpaquePlugin);
      }
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler2) {
      const logs = [];
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "handle",
          paramName: "request"
        });
      }
      const fetchAndCachePromise = handler2.fetchAndCachePut(request).catch(() => {
      });
      void handler2.waitUntil(fetchAndCachePromise);
      let response = await handler2.cacheMatch(request);
      let error;
      if (response) {
        if (true) {
          logs.push(
            `Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`
          );
        }
      } else {
        if (true) {
          logs.push(
            `No response found in the '${this.cacheName}' cache. Will wait for the network response.`
          );
        }
        try {
          response = await fetchAndCachePromise;
        } catch (err) {
          if (err instanceof Error) {
            error = err;
          }
        }
      }
      if (true) {
        logger.groupCollapsed(
          messages2.strategyStart(this.constructor.name, request)
        );
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url, error });
      }
      return response;
    }
  };

  // <stdin>
  self.__WB_DISABLE_DEV_LOGS = !params_default.debug;
  var debug = (...data) => {
    if (self.__WB_DISABLE_DEV_LOGS) {
      return;
    }
    console.debug("[pwa]", ...data);
  };
  var cachePrefix = "hugo-pwa-";
  var fallbacksCache = cachePrefix + "fallbacks";
  var precaches = params_default.precaches.filter((url) => url.indexOf("__h_pp_l1") !== 0);
  debug("precaches", precaches);
  debug("bypass", params_default.bypass);
  registerRoute(
    ({ request }) => {
      return request.mode === "navigate";
    },
    new NetworkFirst({
      cacheName: cachePrefix + "pages",
      plugins: [
        new CacheableResponsePlugin({
          statuses: [200]
        })
      ]
    })
  );
  var assets = ["font", "image", "script", "style"];
  var isBypass = (url) => {
    if (params_default.bypass && params_default.bypass.includes(url.href)) {
      return true;
    }
    return false;
  };
  if (params_default.bypass) {
    registerRoute(
      ({ request, sameOrigin, url }) => {
        if (!isBypass(url)) {
          return false;
        }
        if (sameOrigin) {
          return true;
        }
        return false;
      },
      new NetworkOnly()
    );
  }
  var _a;
  for (let i in assets) {
    const kind = assets[i];
    const cache = params_default.caches[kind];
    const origins = cache.origins ? cache.origins.map((origin) => origin.replace(/\/$/, "")) : [];
    const cacheName = cachePrefix + kind + "s";
    let strategy = null;
    let plugins = [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxAgeSeconds: (_a = cache.max_age) != null ? _a : 60 * 60 * 24 * 30
      })
    ];
    switch (cache.strategy) {
      case "network-first":
        strategy = new NetworkFirst({
          cacheName,
          plugins
        });
        break;
      case "cache-first":
        strategy = new CacheFirst({
          cacheName,
          plugins
        });
        break;
      case "stale-while-revalidate":
        strategy = new StaleWhileRevalidate({
          cacheName,
          plugins
        });
        break;
      default:
        throw new Error(`invalid strategy for kind "${kind}": ` + cache.strategy);
    }
    registerRoute(
      ({ request, sameOrigin, url }) => {
        if (request.destination !== kind) {
          return false;
        }
        if (sameOrigin) {
          return true;
        }
        if (origins && origins.includes(url.origin.replace(/\/$/, ""))) {
          return true;
        }
        debug(`${url} will not be cached.`);
        return false;
      },
      strategy
    );
  }
  registerRoute(() => true, new NetworkOnly());
  self.addEventListener("install", (event) => {
    event.waitUntil(
      self.caches.open(fallbacksCache).then((cache) => cache.addAll(precaches))
    );
  });
  var handler = async (options) => {
    debug("catch handler", options.request);
    const dest = options.request.destination;
    const url = options.request.url;
    const cache = await self.caches.open(fallbacksCache);
    const cached = await cache.match(url);
    if (cached) {
      return cached;
    }
    if (dest === "document") {
      let offline;
      let lang = "";
      let paths;
      if (url.indexOf(params_default.baseURL) === 0) {
        paths = url.replace(params_default.baseURL, "").split("/", 1);
      } else {
        paths = new URL(url).pathname.replace(/^\//, "").split("/", 1);
      }
      if (paths.length > 0 && params_default.langs.includes(paths[0])) {
        lang = paths[0];
        const offlineUrl2 = `${params_default.baseURL}${lang}/offline/`;
        debug("loading multilingual offline page", offlineUrl2);
        offline = await cache.match(offlineUrl2);
        if (offline) {
          return offline;
        }
      }
      const offlineUrl = `${params_default.baseURL}offline/`;
      debug("loading the fallback offline page", offlineUrl);
      return await cache.match(offlineUrl) || Response.error();
    } else if (dest === "image" && params_default.offline_image) {
      return await cache.match(params_default.offline_image) || Response.error();
    }
    return Response.error();
  };
  setCatchHandler(handler);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtcGFyYW1zOkBwYXJhbXMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ZlcnNpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VzLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL1dvcmtib3hFcnJvci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9hc3NlcnQudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvbG9nZ2VyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZS9zcmMvX3ZlcnNpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL3NyYy9DYWNoZWFibGVSZXNwb25zZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2Uvc3JjL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL2RvbnRXYWl0Rm9yLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2pha2VhcmNoaWJhbGQvaWRiQHY3LjEuMStpbmNvbXBhdGlibGUvc3JjL3V0aWwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjcuMS4xK2luY29tcGF0aWJsZS9zcmMvd3JhcC1pZGItdmFsdWUudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjcuMS4xK2luY29tcGF0aWJsZS9zcmMvZW50cnkudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjcuMS4xK2luY29tcGF0aWJsZS9zcmMvZGF0YWJhc2UtZXh0cmFzLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWV4cGlyYXRpb24vc3JjL192ZXJzaW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWV4cGlyYXRpb24vc3JjL21vZGVscy9DYWNoZVRpbWVzdGFtcHNNb2RlbC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1leHBpcmF0aW9uL3NyYy9DYWNoZUV4cGlyYXRpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvY2FjaGVOYW1lcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9yZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjay50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1leHBpcmF0aW9uL3NyYy9FeHBpcmF0aW9uUGx1Z2luLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL192ZXJzaW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL3V0aWxzL2NvbnN0YW50cy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy91dGlscy9ub3JtYWxpemVIYW5kbGVyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL1JvdXRlLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL1JlZ0V4cFJvdXRlLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL1JvdXRlci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtcm91dGluZy9zcmMvcmVnaXN0ZXJSb3V0ZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9zZXRDYXRjaEhhbmRsZXIudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvY2FjaGVNYXRjaElnbm9yZVBhcmFtcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9EZWZlcnJlZC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS90aW1lb3V0LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL192ZXJzaW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL1N0cmF0ZWd5SGFuZGxlci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9TdHJhdGVneS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy91dGlscy9tZXNzYWdlcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9DYWNoZUZpcnN0LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL3BsdWdpbnMvY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9OZXR3b3JrRmlyc3QudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvTmV0d29ya09ubHkudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvU3RhbGVXaGlsZVJldmFsaWRhdGUudHMiLCAiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1wiYmFzZVVSTFwiOlwiL1wiLFwiYnlwYXNzXCI6W10sXCJjYWNoZXNcIjp7XCJmb250XCI6e1wibWF4X2FnZVwiOjI1OTIwMDAsXCJvcmlnaW5zXCI6W10sXCJzdHJhdGVneVwiOlwibmV0d29yay1maXJzdFwifSxcImltYWdlXCI6e1wibWF4X2FnZVwiOjI1OTIwMDAsXCJvcmlnaW5zXCI6W10sXCJzdHJhdGVneVwiOlwibmV0d29yay1maXJzdFwifSxcInNjcmlwdFwiOntcIm1heF9hZ2VcIjoyNTkyMDAwLFwib3JpZ2luc1wiOltdLFwic3RyYXRlZ3lcIjpcIm5ldHdvcmstZmlyc3RcIn0sXCJzdHlsZVwiOntcIm1heF9hZ2VcIjoyNTkyMDAwLFwib3JpZ2luc1wiOltdLFwic3RyYXRlZ3lcIjpcIm5ldHdvcmstZmlyc3RcIn19LFwiZGVidWdcIjpmYWxzZSxcImxhbmdzXCI6W1wiZW5cIixcImVzXCJdLFwib2ZmbGluZV9pbWFnZVwiOlwiXCIsXCJwcmVjYWNoZXNcIjpbXCIvZW4vb2ZmbGluZS9cIixcIi9lcy9vZmZsaW5lL1wiLFwiL2Nzcy9scy5jc3NcIixcIi9lcy9wcm9ncmFtbWluZy8wMTAwLWludHJvLzAxMDItbnVtZXJpY2FsLXN5c3RlbXMvXCIsXCIvanMvbHMuanNcIl19IiwgIi8vIEB0cy1pZ25vcmVcbnRyeXtzZWxmWyd3b3JrYm94OmNvcmU6Ny4wLjAnXSYmXygpfWNhdGNoKGUpe30iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uLy4uL192ZXJzaW9uLmpzJztcblxuaW50ZXJmYWNlIExvZ2dhYmxlT2JqZWN0IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xufVxuaW50ZXJmYWNlIE1lc3NhZ2VNYXAge1xuICBbbWVzc2FnZUlEOiBzdHJpbmddOiAocGFyYW06IExvZ2dhYmxlT2JqZWN0KSA9PiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlczogTWVzc2FnZU1hcCA9IHtcbiAgJ2ludmFsaWQtdmFsdWUnOiAoe3BhcmFtTmFtZSwgdmFsaWRWYWx1ZURlc2NyaXB0aW9uLCB2YWx1ZX0pID0+IHtcbiAgICBpZiAoIXBhcmFtTmFtZSB8fCAhdmFsaWRWYWx1ZURlc2NyaXB0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2ludmFsaWQtdmFsdWUnIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGdpdmVuIGEgdmFsdWUgd2l0aCBhbiBgICtcbiAgICAgIGB1bmV4cGVjdGVkIHZhbHVlLiAke3ZhbGlkVmFsdWVEZXNjcmlwdGlvbn0gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgIGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0uYFxuICAgICk7XG4gIH0sXG5cbiAgJ25vdC1hbi1hcnJheSc6ICh7bW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIGlmICghbW9kdWxlTmFtZSB8fCAhY2xhc3NOYW1lIHx8ICFmdW5jTmFtZSB8fCAhcGFyYW1OYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ25vdC1hbi1hcnJheScgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKScgbXVzdCBiZSBhbiBhcnJheS5gXG4gICAgKTtcbiAgfSxcblxuICAnaW5jb3JyZWN0LXR5cGUnOiAoe1xuICAgIGV4cGVjdGVkVHlwZSxcbiAgICBwYXJhbU5hbWUsXG4gICAgbW9kdWxlTmFtZSxcbiAgICBjbGFzc05hbWUsXG4gICAgZnVuY05hbWUsXG4gIH0pID0+IHtcbiAgICBpZiAoIWV4cGVjdGVkVHlwZSB8fCAhcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbmNvcnJlY3QtdHlwZScgZXJyb3IuYCk7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzTmFtZVN0ciA9IGNsYXNzTmFtZSA/IGAke2NsYXNzTmFtZX0uYCA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZVN0cn1gICtcbiAgICAgIGAke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIG9mIHR5cGUgJHtleHBlY3RlZFR5cGV9LmBcbiAgICApO1xuICB9LFxuXG4gICdpbmNvcnJlY3QtY2xhc3MnOiAoe1xuICAgIGV4cGVjdGVkQ2xhc3NOYW1lLFxuICAgIHBhcmFtTmFtZSxcbiAgICBtb2R1bGVOYW1lLFxuICAgIGNsYXNzTmFtZSxcbiAgICBmdW5jTmFtZSxcbiAgICBpc1JldHVyblZhbHVlUHJvYmxlbSxcbiAgfSkgPT4ge1xuICAgIGlmICghZXhwZWN0ZWRDbGFzc05hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2luY29ycmVjdC1jbGFzcycgZXJyb3IuYCk7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzTmFtZVN0ciA9IGNsYXNzTmFtZSA/IGAke2NsYXNzTmFtZX0uYCA6ICcnO1xuICAgIGlmIChpc1JldHVyblZhbHVlUHJvYmxlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYFRoZSByZXR1cm4gdmFsdWUgZnJvbSBgICtcbiAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfSR7ZnVuY05hbWV9KCknIGAgK1xuICAgICAgICBgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBjbGFzcyAke2V4cGVjdGVkQ2xhc3NOYW1lfS5gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZVN0cn0ke2Z1bmNOYW1lfSgpJyBgICtcbiAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzc05hbWV9LmBcbiAgICApO1xuICB9LFxuXG4gICdtaXNzaW5nLWEtbWV0aG9kJzogKHtcbiAgICBleHBlY3RlZE1ldGhvZCxcbiAgICBwYXJhbU5hbWUsXG4gICAgbW9kdWxlTmFtZSxcbiAgICBjbGFzc05hbWUsXG4gICAgZnVuY05hbWUsXG4gIH0pID0+IHtcbiAgICBpZiAoXG4gICAgICAhZXhwZWN0ZWRNZXRob2QgfHxcbiAgICAgICFwYXJhbU5hbWUgfHxcbiAgICAgICFtb2R1bGVOYW1lIHx8XG4gICAgICAhY2xhc3NOYW1lIHx8XG4gICAgICAhZnVuY05hbWVcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnbWlzc2luZy1hLW1ldGhvZCcgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKSBleHBlY3RlZCB0aGUgYCArXG4gICAgICBgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHRvIGV4cG9zZSBhICcke2V4cGVjdGVkTWV0aG9kfScgbWV0aG9kLmBcbiAgICApO1xuICB9LFxuXG4gICdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnOiAoe2VudHJ5fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgQW4gdW5leHBlY3RlZCBlbnRyeSB3YXMgcGFzc2VkIHRvIGAgK1xuICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIFRoZSBlbnRyeSBgICtcbiAgICAgIGAnJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgZW50cnksXG4gICAgICApfScgaXNuJ3Qgc3VwcG9ydGVkLiBZb3UgbXVzdCBzdXBwbHkgYW4gYXJyYXkgb2YgYCArXG4gICAgICBgc3RyaW5ncyB3aXRoIG9uZSBvciBtb3JlIGNoYXJhY3RlcnMsIG9iamVjdHMgd2l0aCBhIHVybCBwcm9wZXJ0eSBvciBgICtcbiAgICAgIGBSZXF1ZXN0IG9iamVjdHMuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWVudHJpZXMnOiAoe2ZpcnN0RW50cnksIHNlY29uZEVudHJ5fSkgPT4ge1xuICAgIGlmICghZmlyc3RFbnRyeSB8fCAhc2Vjb25kRW50cnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArIGAnYWRkLXRvLWNhY2hlLWxpc3QtZHVwbGljYXRlLWVudHJpZXMnIGVycm9yLmAsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBgVHdvIG9mIHRoZSBlbnRyaWVzIHBhc3NlZCB0byBgICtcbiAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBoYWQgdGhlIFVSTCBgICtcbiAgICAgIGAke2ZpcnN0RW50cnl9IGJ1dCBkaWZmZXJlbnQgcmV2aXNpb24gZGV0YWlscy4gV29ya2JveCBpcyBgICtcbiAgICAgIGB1bmFibGUgdG8gY2FjaGUgYW5kIHZlcnNpb24gdGhlIGFzc2V0IGNvcnJlY3RseS4gUGxlYXNlIHJlbW92ZSBvbmUgYCArXG4gICAgICBgb2YgdGhlIGVudHJpZXMuYFxuICAgICk7XG4gIH0sXG5cbiAgJ3BsdWdpbi1lcnJvci1yZXF1ZXN0LXdpbGwtZmV0Y2gnOiAoe3Rocm93bkVycm9yTWVzc2FnZX0pID0+IHtcbiAgICBpZiAoIXRocm93bkVycm9yTWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5leHBlY3RlZCBpbnB1dCB0byBgICsgYCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywgZXJyb3IuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGBBbiBlcnJvciB3YXMgdGhyb3duIGJ5IGEgcGx1Z2lucyAncmVxdWVzdFdpbGxGZXRjaCgpJyBtZXRob2QuIGAgK1xuICAgICAgYFRoZSB0aHJvd24gZXJyb3IgbWVzc2FnZSB3YXM6ICcke3Rocm93bkVycm9yTWVzc2FnZX0nLmBcbiAgICApO1xuICB9LFxuXG4gICdpbnZhbGlkLWNhY2hlLW5hbWUnOiAoe2NhY2hlTmFtZUlkLCB2YWx1ZX0pID0+IHtcbiAgICBpZiAoIWNhY2hlTmFtZUlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBFeHBlY3RlZCBhICdjYWNoZU5hbWVJZCcgZm9yIGVycm9yICdpbnZhbGlkLWNhY2hlLW5hbWUnYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGBZb3UgbXVzdCBwcm92aWRlIGEgbmFtZSBjb250YWluaW5nIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgZm9yIGAgK1xuICAgICAgYHNldENhY2hlRGV0YWlscyh7JHtjYWNoZU5hbWVJZH06ICcuLi4nfSkuIFJlY2VpdmVkIGEgdmFsdWUgb2YgYCArXG4gICAgICBgJyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfSdgXG4gICAgKTtcbiAgfSxcblxuICAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJzogKHttZXRob2R9KSA9PiB7XG4gICAgaWYgKCFtZXRob2QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArXG4gICAgICAgICAgYCd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnIGVycm9yLmAsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHJvdXRlIHlvdSdyZSB0cnlpbmcgdG8gdW5yZWdpc3RlciB3YXMgbm90ICBwcmV2aW91c2x5IGAgK1xuICAgICAgYHJlZ2lzdGVyZWQgZm9yIHRoZSBtZXRob2QgdHlwZSAnJHttZXRob2R9Jy5gXG4gICAgKTtcbiAgfSxcblxuICAndW5yZWdpc3Rlci1yb3V0ZS1yb3V0ZS1ub3QtcmVnaXN0ZXJlZCc6ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCBwcmV2aW91c2x5IGAgK1xuICAgICAgYHJlZ2lzdGVyZWQuYFxuICAgICk7XG4gIH0sXG5cbiAgJ3F1ZXVlLXJlcGxheS1mYWlsZWQnOiAoe25hbWV9KSA9PiB7XG4gICAgcmV0dXJuIGBSZXBsYXlpbmcgdGhlIGJhY2tncm91bmQgc3luYyBxdWV1ZSAnJHtuYW1lfScgZmFpbGVkLmA7XG4gIH0sXG5cbiAgJ2R1cGxpY2F0ZS1xdWV1ZS1uYW1lJzogKHtuYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIFF1ZXVlIG5hbWUgJyR7bmFtZX0nIGlzIGFscmVhZHkgYmVpbmcgdXNlZC4gYCArXG4gICAgICBgQWxsIGluc3RhbmNlcyBvZiBiYWNrZ3JvdW5kU3luYy5RdWV1ZSBtdXN0IGJlIGdpdmVuIHVuaXF1ZSBuYW1lcy5gXG4gICAgKTtcbiAgfSxcblxuICAnZXhwaXJlZC10ZXN0LXdpdGhvdXQtbWF4LWFnZSc6ICh7bWV0aG9kTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlICcke21ldGhvZE5hbWV9KCknIG1ldGhvZCBjYW4gb25seSBiZSB1c2VkIHdoZW4gdGhlIGAgK1xuICAgICAgYCcke3BhcmFtTmFtZX0nIGlzIHVzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLmBcbiAgICApO1xuICB9LFxuXG4gICd1bnN1cHBvcnRlZC1yb3V0ZS10eXBlJzogKHttb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgc3VwcGxpZWQgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHdhcyBhbiB1bnN1cHBvcnRlZCB0eXBlLiBgICtcbiAgICAgIGBQbGVhc2UgY2hlY2sgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9IGZvciBgICtcbiAgICAgIGB2YWxpZCBpbnB1dCB0eXBlcy5gXG4gICAgKTtcbiAgfSxcblxuICAnbm90LWFycmF5LW9mLWNsYXNzJzogKHtcbiAgICB2YWx1ZSxcbiAgICBleHBlY3RlZENsYXNzLFxuICAgIG1vZHVsZU5hbWUsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZ1bmNOYW1lLFxuICAgIHBhcmFtTmFtZSxcbiAgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHN1cHBsaWVkICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIGAgK1xuICAgICAgYCcke2V4cGVjdGVkQ2xhc3N9JyBvYmplY3RzLiBSZWNlaXZlZCAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LCcuIGAgK1xuICAgICAgYFBsZWFzZSBjaGVjayB0aGUgY2FsbCB0byAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGAgK1xuICAgICAgYHRvIGZpeCB0aGUgaXNzdWUuYFxuICAgICk7XG4gIH0sXG5cbiAgJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCc6ICh7bW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFlvdSBtdXN0IGRlZmluZSBlaXRoZXIgY29uZmlnLm1heEVudHJpZXMgb3IgY29uZmlnLm1heEFnZVNlY29uZHNgICtcbiAgICAgIGBpbiAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfWBcbiAgICApO1xuICB9LFxuXG4gICdzdGF0dXNlcy1vci1oZWFkZXJzLXJlcXVpcmVkJzogKHttb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgWW91IG11c3QgZGVmaW5lIGVpdGhlciBjb25maWcuc3RhdHVzZXMgb3IgY29uZmlnLmhlYWRlcnNgICtcbiAgICAgIGBpbiAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfWBcbiAgICApO1xuICB9LFxuXG4gICdpbnZhbGlkLXN0cmluZyc6ICh7bW9kdWxlTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZX0pID0+IHtcbiAgICBpZiAoIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1zdHJpbmcnIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYFdoZW4gdXNpbmcgc3RyaW5ncywgdGhlICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IHN0YXJ0IHdpdGggYCArXG4gICAgICBgJ2h0dHAnIChmb3IgY3Jvc3Mtb3JpZ2luIG1hdGNoZXMpIG9yICcvJyAoZm9yIHNhbWUtb3JpZ2luIG1hdGNoZXMpLiBgICtcbiAgICAgIGBQbGVhc2Ugc2VlIHRoZSBkb2NzIGZvciAke21vZHVsZU5hbWV9LiR7ZnVuY05hbWV9KCkgZm9yIGAgK1xuICAgICAgYG1vcmUgaW5mby5gXG4gICAgKTtcbiAgfSxcblxuICAnY2hhbm5lbC1uYW1lLXJlcXVpcmVkJzogKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgWW91IG11c3QgcHJvdmlkZSBhIGNoYW5uZWxOYW1lIHRvIGNvbnN0cnVjdCBhIGAgK1xuICAgICAgYEJyb2FkY2FzdENhY2hlVXBkYXRlIGluc3RhbmNlLmBcbiAgICApO1xuICB9LFxuXG4gICdpbnZhbGlkLXJlc3BvbnNlcy1hcmUtc2FtZS1hcmdzJzogKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIGFyZ3VtZW50cyBwYXNzZWQgaW50byByZXNwb25zZXNBcmVTYW1lKCkgYXBwZWFyIHRvIGJlIGAgK1xuICAgICAgYGludmFsaWQuIFBsZWFzZSBlbnN1cmUgdmFsaWQgUmVzcG9uc2VzIGFyZSB1c2VkLmBcbiAgICApO1xuICB9LFxuXG4gICdleHBpcmUtY3VzdG9tLWNhY2hlcy1vbmx5JzogKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgWW91IG11c3QgcHJvdmlkZSBhICdjYWNoZU5hbWUnIHByb3BlcnR5IHdoZW4gdXNpbmcgdGhlIGAgK1xuICAgICAgYGV4cGlyYXRpb24gcGx1Z2luIHdpdGggYSBydW50aW1lIGNhY2hpbmcgc3RyYXRlZ3kuYFxuICAgICk7XG4gIH0sXG5cbiAgJ3VuaXQtbXVzdC1iZS1ieXRlcyc6ICh7bm9ybWFsaXplZFJhbmdlSGVhZGVyfSkgPT4ge1xuICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3VuaXQtbXVzdC1iZS1ieXRlcycgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgVGhlICd1bml0JyBwb3J0aW9uIG9mIHRoZSBSYW5nZSBoZWFkZXIgbXVzdCBiZSBzZXQgdG8gJ2J5dGVzJy4gYCArXG4gICAgICBgVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImBcbiAgICApO1xuICB9LFxuXG4gICdzaW5nbGUtcmFuZ2Utb25seSc6ICh7bm9ybWFsaXplZFJhbmdlSGVhZGVyfSkgPT4ge1xuICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3NpbmdsZS1yYW5nZS1vbmx5JyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGBNdWx0aXBsZSByYW5nZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2UgYSAgc2luZ2xlIHN0YXJ0IGAgK1xuICAgICAgYHZhbHVlLCBhbmQgb3B0aW9uYWwgZW5kIHZhbHVlLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYFxuICAgICk7XG4gIH0sXG5cbiAgJ2ludmFsaWQtcmFuZ2UtdmFsdWVzJzogKHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9KSA9PiB7XG4gICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1yYW5nZS12YWx1ZXMnIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBSYW5nZSBoZWFkZXIgaXMgbWlzc2luZyBib3RoIHN0YXJ0IGFuZCBlbmQgdmFsdWVzLiBBdCBsZWFzdCBgICtcbiAgICAgIGBvbmUgb2YgdGhvc2UgdmFsdWVzIGlzIG5lZWRlZC4gVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgYCArXG4gICAgICBgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImBcbiAgICApO1xuICB9LFxuXG4gICduby1yYW5nZS1oZWFkZXInOiAoKSA9PiB7XG4gICAgcmV0dXJuIGBObyBSYW5nZSBoZWFkZXIgd2FzIGZvdW5kIGluIHRoZSBSZXF1ZXN0IHByb3ZpZGVkLmA7XG4gIH0sXG5cbiAgJ3JhbmdlLW5vdC1zYXRpc2ZpYWJsZSc6ICh7c2l6ZSwgc3RhcnQsIGVuZH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBzdGFydCAoJHtzdGFydH0pIGFuZCBlbmQgKCR7ZW5kfSkgdmFsdWVzIGluIHRoZSBSYW5nZSBhcmUgYCArXG4gICAgICBgbm90IHNhdGlzZmlhYmxlIGJ5IHRoZSBjYWNoZWQgcmVzcG9uc2UsIHdoaWNoIGlzICR7c2l6ZX0gYnl0ZXMuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2F0dGVtcHQtdG8tY2FjaGUtbm9uLWdldC1yZXF1ZXN0JzogKHt1cmwsIG1ldGhvZH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFVuYWJsZSB0byBjYWNoZSAnJHt1cmx9JyBiZWNhdXNlIGl0IGlzIGEgJyR7bWV0aG9kfScgcmVxdWVzdCBhbmQgYCArXG4gICAgICBgb25seSAnR0VUJyByZXF1ZXN0cyBjYW4gYmUgY2FjaGVkLmBcbiAgICApO1xuICB9LFxuXG4gICdjYWNoZS1wdXQtd2l0aC1uby1yZXNwb25zZSc6ICh7dXJsfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlcmUgd2FzIGFuIGF0dGVtcHQgdG8gY2FjaGUgJyR7dXJsfScgYnV0IHRoZSByZXNwb25zZSB3YXMgbm90IGAgK1xuICAgICAgYGRlZmluZWQuYFxuICAgICk7XG4gIH0sXG5cbiAgJ25vLXJlc3BvbnNlJzogKHt1cmwsIGVycm9yfSkgPT4ge1xuICAgIGxldCBtZXNzYWdlID0gYFRoZSBzdHJhdGVneSBjb3VsZCBub3QgZ2VuZXJhdGUgYSByZXNwb25zZSBmb3IgJyR7dXJsfScuYDtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UgKz0gYCBUaGUgdW5kZXJseWluZyBlcnJvciBpcyAke2Vycm9yfS5gO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICAnYmFkLXByZWNhY2hpbmctcmVzcG9uc2UnOiAoe3VybCwgc3RhdHVzfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHByZWNhY2hpbmcgcmVxdWVzdCBmb3IgJyR7dXJsfScgZmFpbGVkYCArXG4gICAgICAoc3RhdHVzID8gYCB3aXRoIGFuIEhUVFAgc3RhdHVzIG9mICR7c3RhdHVzfS5gIDogYC5gKVxuICAgICk7XG4gIH0sXG5cbiAgJ25vbi1wcmVjYWNoZWQtdXJsJzogKHt1cmx9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCgnJHt1cmx9Jykgd2FzIGNhbGxlZCwgYnV0IHRoYXQgVVJMIGlzIGAgK1xuICAgICAgYG5vdCBwcmVjYWNoZWQuIFBsZWFzZSBwYXNzIGluIGEgVVJMIHRoYXQgaXMgcHJlY2FjaGVkIGluc3RlYWQuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWludGVncml0aWVzJzogKHt1cmx9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUd28gb2YgdGhlIGVudHJpZXMgcGFzc2VkIHRvIGAgK1xuICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIGhhZCB0aGUgVVJMIGAgK1xuICAgICAgYCR7dXJsfSB3aXRoIGRpZmZlcmVudCBpbnRlZ3JpdHkgdmFsdWVzLiBQbGVhc2UgcmVtb3ZlIG9uZSBvZiB0aGVtLmBcbiAgICApO1xuICB9LFxuXG4gICdtaXNzaW5nLXByZWNhY2hlLWVudHJ5JzogKHtjYWNoZU5hbWUsIHVybH0pID0+IHtcbiAgICByZXR1cm4gYFVuYWJsZSB0byBmaW5kIGEgcHJlY2FjaGVkIHJlc3BvbnNlIGluICR7Y2FjaGVOYW1lfSBmb3IgJHt1cmx9LmA7XG4gIH0sXG5cbiAgJ2Nyb3NzLW9yaWdpbi1jb3B5LXJlc3BvbnNlJzogKHtvcmlnaW59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGB3b3JrYm94LWNvcmUuY29weVJlc3BvbnNlKCkgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHNhbWUtb3JpZ2luIGAgK1xuICAgICAgYHJlc3BvbnNlcy4gSXQgd2FzIHBhc3NlZCBhIHJlc3BvbnNlIHdpdGggb3JpZ2luICR7b3JpZ2lufS5gXG4gICAgKTtcbiAgfSxcblxuICAnb3BhcXVlLXN0cmVhbXMtc291cmNlJzogKHt0eXBlfSkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgYE9uZSBvZiB0aGUgd29ya2JveC1zdHJlYW1zIHNvdXJjZXMgcmVzdWx0ZWQgaW4gYW4gYCArXG4gICAgICBgJyR7dHlwZX0nIHJlc3BvbnNlLmA7XG4gICAgaWYgKHR5cGUgPT09ICdvcGFxdWVyZWRpcmVjdCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGAke21lc3NhZ2V9IFBsZWFzZSBkbyBub3QgdXNlIGEgbmF2aWdhdGlvbiByZXF1ZXN0IHRoYXQgcmVzdWx0cyBgICtcbiAgICAgICAgYGluIGEgcmVkaXJlY3QgYXMgYSBzb3VyY2UuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGAke21lc3NhZ2V9IFBsZWFzZSBlbnN1cmUgeW91ciBzb3VyY2VzIGFyZSBDT1JTLWVuYWJsZWQuYDtcbiAgfSxcbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24uanMnO1xuXG5jb25zdCBmYWxsYmFjayA9IChjb2RlOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIGxldCBtc2cgPSBjb2RlO1xuICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgbXNnICs9IGAgOjogJHtKU09OLnN0cmluZ2lmeShhcmdzKX1gO1xuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5jb25zdCBnZW5lcmF0b3JGdW5jdGlvbiA9IChjb2RlOiBzdHJpbmcsIGRldGFpbHMgPSB7fSkgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZXNbY29kZV07XG4gIGlmICghbWVzc2FnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgbWVzc2FnZSBmb3IgY29kZSAnJHtjb2RlfScuYCk7XG4gIH1cblxuICByZXR1cm4gbWVzc2FnZShkZXRhaWxzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlR2VuZXJhdG9yID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGZhbGxiYWNrIDogZ2VuZXJhdG9yRnVuY3Rpb247XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge21lc3NhZ2VHZW5lcmF0b3J9IGZyb20gJy4uL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLmpzJztcbmltcG9ydCB7TWFwTGlrZU9iamVjdH0gZnJvbSAnLi4vdHlwZXMuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogV29ya2JveCBlcnJvcnMgc2hvdWxkIGJlIHRocm93biB3aXRoIHRoaXMgY2xhc3MuXG4gKiBUaGlzIGFsbG93cyB1c2UgdG8gZW5zdXJlIHRoZSB0eXBlIGVhc2lseSBpbiB0ZXN0cyxcbiAqIGhlbHBzIGRldmVsb3BlcnMgaWRlbnRpZnkgZXJyb3JzIGZyb20gd29ya2JveFxuICogZWFzaWx5IGFuZCBhbGxvd3MgdXNlIHRvIG9wdGltaXNlIGVycm9yXG4gKiBtZXNzYWdlcyBjb3JyZWN0bHkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgV29ya2JveEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBkZXRhaWxzPzogTWFwTGlrZU9iamVjdDtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yQ29kZSBUaGUgZXJyb3IgY29kZSB0aGF0XG4gICAqIGlkZW50aWZpZXMgdGhpcyBwYXJ0aWN1bGFyIGVycm9yLlxuICAgKiBAcGFyYW0ge09iamVjdD19IGRldGFpbHMgQW55IHJlbGV2YW50IGFyZ3VtZW50c1xuICAgKiB0aGF0IHdpbGwgaGVscCBkZXZlbG9wZXJzIGlkZW50aWZ5IGlzc3VlcyBzaG91bGRcbiAgICogYmUgYWRkZWQgYXMgYSBrZXkgb24gdGhlIGNvbnRleHQgb2JqZWN0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGRldGFpbHM/OiBNYXBMaWtlT2JqZWN0KSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VHZW5lcmF0b3IoZXJyb3JDb2RlLCBkZXRhaWxzKTtcblxuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgdGhpcy5uYW1lID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gIH1cbn1cblxuZXhwb3J0IHtXb3JrYm94RXJyb3J9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJy4uL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge01hcExpa2VPYmplY3R9IGZyb20gJy4uL3R5cGVzLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vKlxuICogVGhpcyBtZXRob2QgdGhyb3dzIGlmIHRoZSBzdXBwbGllZCB2YWx1ZSBpcyBub3QgYW4gYXJyYXkuXG4gKiBUaGUgZGVzdHJ1Y3RlZCB2YWx1ZXMgYXJlIHJlcXVpcmVkIHRvIHByb2R1Y2UgYSBtZWFuaW5nZnVsIGVycm9yIGZvciB1c2Vycy5cbiAqIFRoZSBkZXN0cnVjdGVkIGFuZCByZXN0cnVjdHVyZWQgb2JqZWN0IGlzIHNvIGl0J3MgY2xlYXIgd2hhdCBpc1xuICogbmVlZGVkLlxuICovXG5jb25zdCBpc0FycmF5ID0gKHZhbHVlOiBhbnlbXSwgZGV0YWlsczogTWFwTGlrZU9iamVjdCkgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm90LWFuLWFycmF5JywgZGV0YWlscyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhc01ldGhvZCA9IChcbiAgb2JqZWN0OiBNYXBMaWtlT2JqZWN0LFxuICBleHBlY3RlZE1ldGhvZDogc3RyaW5nLFxuICBkZXRhaWxzOiBNYXBMaWtlT2JqZWN0LFxuKSA9PiB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2Ygb2JqZWN0W2V4cGVjdGVkTWV0aG9kXTtcbiAgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICBkZXRhaWxzWydleHBlY3RlZE1ldGhvZCddID0gZXhwZWN0ZWRNZXRob2Q7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWlzc2luZy1hLW1ldGhvZCcsIGRldGFpbHMpO1xuICB9XG59O1xuXG5jb25zdCBpc1R5cGUgPSAoXG4gIG9iamVjdDogdW5rbm93bixcbiAgZXhwZWN0ZWRUeXBlOiBzdHJpbmcsXG4gIGRldGFpbHM6IE1hcExpa2VPYmplY3QsXG4pID0+IHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgIGRldGFpbHNbJ2V4cGVjdGVkVHlwZSddID0gZXhwZWN0ZWRUeXBlO1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC10eXBlJywgZGV0YWlscyk7XG4gIH1cbn07XG5cbmNvbnN0IGlzSW5zdGFuY2UgPSAoXG4gIG9iamVjdDogdW5rbm93bixcbiAgLy8gTmVlZCB0aGUgZ2VuZXJhbCB0eXBlIHRvIGRvIHRoZSBjaGVjayBsYXRlci5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgZXhwZWN0ZWRDbGFzczogRnVuY3Rpb24sXG4gIGRldGFpbHM6IE1hcExpa2VPYmplY3QsXG4pID0+IHtcbiAgaWYgKCEob2JqZWN0IGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICBkZXRhaWxzWydleHBlY3RlZENsYXNzTmFtZSddID0gZXhwZWN0ZWRDbGFzcy5uYW1lO1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC1jbGFzcycsIGRldGFpbHMpO1xuICB9XG59O1xuXG5jb25zdCBpc09uZU9mID0gKHZhbHVlOiBhbnksIHZhbGlkVmFsdWVzOiBhbnlbXSwgZGV0YWlsczogTWFwTGlrZU9iamVjdCkgPT4ge1xuICBpZiAoIXZhbGlkVmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgIGRldGFpbHNbJ3ZhbGlkVmFsdWVEZXNjcmlwdGlvbiddID0gYFZhbGlkIHZhbHVlcyBhcmUgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgIHZhbGlkVmFsdWVzLFxuICAgICl9LmA7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC12YWx1ZScsIGRldGFpbHMpO1xuICB9XG59O1xuXG5jb25zdCBpc0FycmF5T2ZDbGFzcyA9IChcbiAgdmFsdWU6IGFueSxcbiAgLy8gTmVlZCBnZW5lcmFsIHR5cGUgdG8gZG8gY2hlY2sgbGF0ZXIuXG4gIGV4cGVjdGVkQ2xhc3M6IEZ1bmN0aW9uLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGRldGFpbHM6IE1hcExpa2VPYmplY3QsXG4pID0+IHtcbiAgY29uc3QgZXJyb3IgPSBuZXcgV29ya2JveEVycm9yKCdub3QtYXJyYXktb2YtY2xhc3MnLCBkZXRhaWxzKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgaWYgKCEoaXRlbSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGZpbmFsQXNzZXJ0RXhwb3J0cyA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IG51bGxcbiAgICA6IHtcbiAgICAgICAgaGFzTWV0aG9kLFxuICAgICAgICBpc0FycmF5LFxuICAgICAgICBpc0luc3RhbmNlLFxuICAgICAgICBpc09uZU9mLFxuICAgICAgICBpc1R5cGUsXG4gICAgICAgIGlzQXJyYXlPZkNsYXNzLFxuICAgICAgfTtcblxuZXhwb3J0IHtmaW5hbEFzc2VydEV4cG9ydHMgYXMgYXNzZXJ0fTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5jb25zdCBnZXRGcmllbmRseVVSTCA9ICh1cmw6IFVSTCB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwoU3RyaW5nKHVybCksIGxvY2F0aW9uLmhyZWYpO1xuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yMzIzXG4gIC8vIFdlIHdhbnQgdG8gaW5jbHVkZSBldmVyeXRoaW5nLCBleGNlcHQgZm9yIHRoZSBvcmlnaW4gaWYgaXQncyBzYW1lLW9yaWdpbi5cbiAgcmV0dXJuIHVybE9iai5ocmVmLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7bG9jYXRpb24ub3JpZ2lufWApLCAnJyk7XG59O1xuXG5leHBvcnQge2dldEZyaWVuZGx5VVJMfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLy8gbG9nZ2VyIGlzIHVzZWQgaW5zaWRlIG9mIGJvdGggc2VydmljZSB3b3JrZXJzIGFuZCB0aGUgd2luZG93IGdsb2JhbCBzY29wZS5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdvcmtlckdsb2JhbFNjb3BlIHtcbiAgICBfX1dCX0RJU0FCTEVfREVWX0xPR1M6IGJvb2xlYW47XG4gIH1cblxuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX1dCX0RJU0FCTEVfREVWX0xPR1M6IGJvb2xlYW47XG4gIH1cbn1cblxudHlwZSBMb2dnZXJNZXRob2RzID1cbiAgfCAnZGVidWcnXG4gIHwgJ2xvZydcbiAgfCAnd2FybidcbiAgfCAnZXJyb3InXG4gIHwgJ2dyb3VwQ29sbGFwc2VkJ1xuICB8ICdncm91cEVuZCc7XG5cbmNvbnN0IGxvZ2dlciA9IChcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gbnVsbFxuICAgIDogKCgpID0+IHtcbiAgICAgICAgLy8gRG9uJ3Qgb3ZlcndyaXRlIHRoaXMgdmFsdWUgaWYgaXQncyBhbHJlYWR5IHNldC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9wdWxsLzIyODQjaXNzdWVjb21tZW50LTU2MDQ3MDkyM1xuICAgICAgICBpZiAoISgnX19XQl9ESVNBQkxFX0RFVl9MT0dTJyBpbiBnbG9iYWxUaGlzKSkge1xuICAgICAgICAgIHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5Hcm91cCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGhvZFRvQ29sb3JNYXA6IHtbbWV0aG9kTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVsbH0gPSB7XG4gICAgICAgICAgZGVidWc6IGAjN2Y4YzhkYCwgLy8gR3JheVxuICAgICAgICAgIGxvZzogYCMyZWNjNzFgLCAvLyBHcmVlblxuICAgICAgICAgIHdhcm46IGAjZjM5YzEyYCwgLy8gWWVsbG93XG4gICAgICAgICAgZXJyb3I6IGAjYzAzOTJiYCwgLy8gUmVkXG4gICAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGAjMzQ5OGRiYCwgLy8gQmx1ZVxuICAgICAgICAgIGdyb3VwRW5kOiBudWxsLCAvLyBObyBjb2xvcmVkIHByZWZpeCBvbiBncm91cEVuZFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHByaW50ID0gZnVuY3Rpb24gKG1ldGhvZDogTG9nZ2VyTWV0aG9kcywgYXJnczogYW55W10pIHtcbiAgICAgICAgICBpZiAoc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICAvLyBTYWZhcmkgZG9lc24ndCBwcmludCBhbGwgY29uc29sZS5ncm91cENvbGxhcHNlZCgpIGFyZ3VtZW50czpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODI3NTRcbiAgICAgICAgICAgIGlmICgvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgICAgICAgIGBiYWNrZ3JvdW5kOiAke21ldGhvZFRvQ29sb3JNYXBbbWV0aG9kXSF9YCxcbiAgICAgICAgICAgIGBib3JkZXItcmFkaXVzOiAwLjVlbWAsXG4gICAgICAgICAgICBgY29sb3I6IHdoaXRlYCxcbiAgICAgICAgICAgIGBmb250LXdlaWdodDogYm9sZGAsXG4gICAgICAgICAgICBgcGFkZGluZzogMnB4IDAuNWVtYCxcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgLy8gV2hlbiBpbiBhIGdyb3VwLCB0aGUgd29ya2JveCBwcmVmaXggaXMgbm90IGRpc3BsYXllZC5cbiAgICAgICAgICBjb25zdCBsb2dQcmVmaXggPSBpbkdyb3VwID8gW10gOiBbJyVjd29ya2JveCcsIHN0eWxlcy5qb2luKCc7JyldO1xuXG4gICAgICAgICAgY29uc29sZVttZXRob2RdKC4uLmxvZ1ByZWZpeCwgLi4uYXJncyk7XG5cbiAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICBpbkdyb3VwID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwRW5kJykge1xuICAgICAgICAgICAgaW5Hcm91cCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgICAgICAgY29uc3QgYXBpOiB7W21ldGhvZE5hbWU6IHN0cmluZ106IEZ1bmN0aW9ufSA9IHt9O1xuICAgICAgICBjb25zdCBsb2dnZXJNZXRob2RzID0gT2JqZWN0LmtleXMobWV0aG9kVG9Db2xvck1hcCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgbG9nZ2VyTWV0aG9kcykge1xuICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGtleSBhcyBMb2dnZXJNZXRob2RzO1xuXG4gICAgICAgICAgYXBpW21ldGhvZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICAgIHByaW50KG1ldGhvZCwgYXJncyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcGkgYXMgdW5rbm93bjtcbiAgICAgIH0pKClcbikgYXMgQ29uc29sZTtcblxuZXhwb3J0IHtsb2dnZXJ9O1xuIiwgIi8vIEB0cy1pZ25vcmVcbnRyeXtzZWxmWyd3b3JrYm94OmNhY2hlYWJsZS1yZXNwb25zZTo3LjAuMCddJiZfKCl9Y2F0Y2goZSl7fSIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlYWJsZVJlc3BvbnNlT3B0aW9ucyB7XG4gIHN0YXR1c2VzPzogbnVtYmVyW107XG4gIGhlYWRlcnM/OiB7W2hlYWRlck5hbWU6IHN0cmluZ106IHN0cmluZ307XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIHNldCB1cCBydWxlcyBkZXRlcm1pbmluZyB3aGF0XG4gKiBzdGF0dXMgY29kZXMgYW5kL29yIGhlYWRlcnMgbmVlZCB0byBiZSBwcmVzZW50IGluIG9yZGVyIGZvciBhXG4gKiBbYFJlc3BvbnNlYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Jlc3BvbnNlKVxuICogdG8gYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlXG4gKi9cbmNsYXNzIENhY2hlYWJsZVJlc3BvbnNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhdHVzZXM/OiBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnNbJ3N0YXR1c2VzJ107XG4gIHByaXZhdGUgcmVhZG9ubHkgX2hlYWRlcnM/OiBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnNbJ2hlYWRlcnMnXTtcblxuICAvKipcbiAgICogVG8gY29uc3RydWN0IGEgbmV3IENhY2hlYWJsZVJlc3BvbnNlIGluc3RhbmNlIHlvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3RcbiAgICogb25lIG9mIHRoZSBgY29uZmlnYCBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBJZiBib3RoIGBzdGF0dXNlc2AgYW5kIGBoZWFkZXJzYCBhcmUgc3BlY2lmaWVkLCB0aGVuIGJvdGggY29uZGl0aW9ucyBtdXN0XG4gICAqIGJlIG1ldCBmb3IgdGhlIGBSZXNwb25zZWAgdG8gYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbY29uZmlnLnN0YXR1c2VzXSBPbmUgb3IgbW9yZSBzdGF0dXMgY29kZXMgdGhhdCBhXG4gICAqIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsc3RyaW5nPn0gW2NvbmZpZy5oZWFkZXJzXSBBIG1hcHBpbmcgb2YgaGVhZGVyIG5hbWVzXG4gICAqIGFuZCBleHBlY3RlZCB2YWx1ZXMgdGhhdCBhIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgKiBJZiBtdWx0aXBsZSBoZWFkZXJzIGFyZSBwcm92aWRlZCwgb25seSBvbmUgbmVlZHMgdG8gYmUgcHJlc2VudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ2FjaGVhYmxlUmVzcG9uc2VPcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoY29uZmlnLnN0YXR1c2VzIHx8IGNvbmZpZy5oZWFkZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdzdGF0dXNlcy1vci1oZWFkZXJzLXJlcXVpcmVkJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zdGF0dXNlcykge1xuICAgICAgICBhc3NlcnQhLmlzQXJyYXkoY29uZmlnLnN0YXR1c2VzLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZWFibGVSZXNwb25zZScsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLnN0YXR1c2VzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuaGVhZGVycykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZShjb25maWcuaGVhZGVycywgJ29iamVjdCcsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcuaGVhZGVycycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXR1c2VzID0gY29uZmlnLnN0YXR1c2VzO1xuICAgIHRoaXMuX2hlYWRlcnMgPSBjb25maWcuaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgYSByZXNwb25zZSB0byBzZWUgd2hldGhlciBpdCdzIGNhY2hlYWJsZSBvciBub3QsIGJhc2VkIG9uIHRoaXNcbiAgICogb2JqZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIHdob3NlIGNhY2hlYWJpbGl0eSBpcyBiZWluZ1xuICAgKiBjaGVja2VkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIGBSZXNwb25zZWAgaXMgY2FjaGVhYmxlLCBhbmQgYGZhbHNlYFxuICAgKiBvdGhlcndpc2UuXG4gICAqL1xuICBpc1Jlc3BvbnNlQ2FjaGVhYmxlKHJlc3BvbnNlOiBSZXNwb25zZSk6IGJvb2xlYW4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVzcG9uc2UsIFJlc3BvbnNlLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgZnVuY05hbWU6ICdpc1Jlc3BvbnNlQ2FjaGVhYmxlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVzcG9uc2UnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGNhY2hlYWJsZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5fc3RhdHVzZXMpIHtcbiAgICAgIGNhY2hlYWJsZSA9IHRoaXMuX3N0YXR1c2VzLmluY2x1ZGVzKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hlYWRlcnMgJiYgY2FjaGVhYmxlKSB7XG4gICAgICBjYWNoZWFibGUgPSBPYmplY3Qua2V5cyh0aGlzLl9oZWFkZXJzKS5zb21lKChoZWFkZXJOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5oZWFkZXJzLmdldChoZWFkZXJOYW1lKSA9PT0gdGhpcy5faGVhZGVycyFbaGVhZGVyTmFtZV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFjYWNoZWFibGUpIHtcbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgIGBUaGUgcmVxdWVzdCBmb3IgYCArXG4gICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVzcG9uc2UudXJsKX0nIHJldHVybmVkIGEgcmVzcG9uc2UgdGhhdCBkb2VzIGAgK1xuICAgICAgICAgICAgYG5vdCBtZWV0IHRoZSBjcml0ZXJpYSBmb3IgYmVpbmcgY2FjaGVkLmAsXG4gICAgICAgICk7XG5cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IGNhY2hlYWJpbGl0eSBjcml0ZXJpYSBoZXJlLmApO1xuICAgICAgICBsb2dnZXIubG9nKGBDYWNoZWFibGUgc3RhdHVzZXM6IGAgKyBKU09OLnN0cmluZ2lmeSh0aGlzLl9zdGF0dXNlcykpO1xuICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgIGBDYWNoZWFibGUgaGVhZGVyczogYCArIEpTT04uc3RyaW5naWZ5KHRoaXMuX2hlYWRlcnMsIG51bGwsIDIpLFxuICAgICAgICApO1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcblxuICAgICAgICBjb25zdCBsb2dGcmllbmRseUhlYWRlcnM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgIGxvZ0ZyaWVuZGx5SGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyByZXNwb25zZSBzdGF0dXMgYW5kIGhlYWRlcnMgaGVyZS5gKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhgUmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgICBgUmVzcG9uc2UgaGVhZGVyczogYCArIEpTT04uc3RyaW5naWZ5KGxvZ0ZyaWVuZGx5SGVhZGVycywgbnVsbCwgMiksXG4gICAgICAgICk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuXG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyBmdWxsIHJlc3BvbnNlIGRldGFpbHMgaGVyZS5gKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuXG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZWFibGU7XG4gIH1cbn1cblxuZXhwb3J0IHtDYWNoZWFibGVSZXNwb25zZX07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1dvcmtib3hQbHVnaW59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5pbXBvcnQge1xuICBDYWNoZWFibGVSZXNwb25zZSxcbiAgQ2FjaGVhYmxlUmVzcG9uc2VPcHRpb25zLFxufSBmcm9tICcuL0NhY2hlYWJsZVJlc3BvbnNlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQSBjbGFzcyBpbXBsZW1lbnRpbmcgdGhlIGBjYWNoZVdpbGxVcGRhdGVgIGxpZmVjeWNsZSBjYWxsYmFjay4gVGhpcyBtYWtlcyBpdFxuICogZWFzaWVyIHRvIGFkZCBpbiBjYWNoZWFiaWxpdHkgY2hlY2tzIHRvIHJlcXVlc3RzIG1hZGUgdmlhIFdvcmtib3gncyBidWlsdC1pblxuICogc3RyYXRlZ2llcy5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2VcbiAqL1xuY2xhc3MgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gaW1wbGVtZW50cyBXb3JrYm94UGx1Z2luIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfY2FjaGVhYmxlUmVzcG9uc2U6IENhY2hlYWJsZVJlc3BvbnNlO1xuXG4gIC8qKlxuICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdFxuICAgKiBsZWFzdCBvbmUgb2YgdGhlIGBjb25maWdgIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIElmIGJvdGggYHN0YXR1c2VzYCBhbmQgYGhlYWRlcnNgIGFyZSBzcGVjaWZpZWQsIHRoZW4gYm90aCBjb25kaXRpb25zIG11c3RcbiAgICogYmUgbWV0IGZvciB0aGUgYFJlc3BvbnNlYCB0byBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtjb25maWcuc3RhdHVzZXNdIE9uZSBvciBtb3JlIHN0YXR1cyBjb2RlcyB0aGF0IGFcbiAgICogYFJlc3BvbnNlYCBjYW4gaGF2ZSBhbmQgYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fSBbY29uZmlnLmhlYWRlcnNdIEEgbWFwcGluZyBvZiBoZWFkZXIgbmFtZXNcbiAgICogYW5kIGV4cGVjdGVkIHZhbHVlcyB0aGF0IGEgYFJlc3BvbnNlYCBjYW4gaGF2ZSBhbmQgYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqIElmIG11bHRpcGxlIGhlYWRlcnMgYXJlIHByb3ZpZGVkLCBvbmx5IG9uZSBuZWVkcyB0byBiZSBwcmVzZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnMpIHtcbiAgICB0aGlzLl9jYWNoZWFibGVSZXNwb25zZSA9IG5ldyBDYWNoZWFibGVSZXNwb25zZShjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICogQHJldHVybiB7UmVzcG9uc2V8bnVsbH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhY2hlV2lsbFVwZGF0ZTogV29ya2JveFBsdWdpblsnY2FjaGVXaWxsVXBkYXRlJ10gPSBhc3luYyAoe3Jlc3BvbnNlfSkgPT4ge1xuICAgIGlmICh0aGlzLl9jYWNoZWFibGVSZXNwb25zZS5pc1Jlc3BvbnNlQ2FjaGVhYmxlKHJlc3BvbnNlKSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IHtDYWNoZWFibGVSZXNwb25zZVBsdWdpbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdGhhdCBwcmV2ZW50cyBhIHByb21pc2UgZnJvbSBiZWluZyBmbGFnZ2VkIGFzIHVudXNlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvbnRXYWl0Rm9yKHByb21pc2U6IFByb21pc2U8YW55Pik6IHZvaWQge1xuICAvLyBFZmZlY3RpdmUgbm8tb3AuXG4gIHZvaWQgcHJvbWlzZS50aGVuKCgpID0+IHt9KTtcbn1cbiIsICJleHBvcnQgdHlwZSBDb25zdHJ1Y3RvciA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IGFueTtcbmV4cG9ydCB0eXBlIEZ1bmMgPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcblxuZXhwb3J0IGNvbnN0IGluc3RhbmNlT2ZBbnkgPSAoXG4gIG9iamVjdDogYW55LFxuICBjb25zdHJ1Y3RvcnM6IENvbnN0cnVjdG9yW10sXG4pOiBib29sZWFuID0+IGNvbnN0cnVjdG9ycy5zb21lKChjKSA9PiBvYmplY3QgaW5zdGFuY2VvZiBjKTtcbiIsICJpbXBvcnQge1xuICBJREJQQ3Vyc29yLFxuICBJREJQQ3Vyc29yV2l0aFZhbHVlLFxuICBJREJQRGF0YWJhc2UsXG4gIElEQlBJbmRleCxcbiAgSURCUE9iamVjdFN0b3JlLFxuICBJREJQVHJhbnNhY3Rpb24sXG59IGZyb20gJy4vZW50cnkuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIEZ1bmMsIGluc3RhbmNlT2ZBbnkgfSBmcm9tICcuL3V0aWwuanMnO1xuXG5sZXQgaWRiUHJveHlhYmxlVHlwZXM6IENvbnN0cnVjdG9yW107XG5sZXQgY3Vyc29yQWR2YW5jZU1ldGhvZHM6IEZ1bmNbXTtcblxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRJZGJQcm94eWFibGVUeXBlcygpOiBDb25zdHJ1Y3RvcltdIHtcbiAgcmV0dXJuIChcbiAgICBpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgIChpZGJQcm94eWFibGVUeXBlcyA9IFtcbiAgICAgIElEQkRhdGFiYXNlLFxuICAgICAgSURCT2JqZWN0U3RvcmUsXG4gICAgICBJREJJbmRleCxcbiAgICAgIElEQkN1cnNvcixcbiAgICAgIElEQlRyYW5zYWN0aW9uLFxuICAgIF0pXG4gICk7XG59XG5cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKTogRnVuY1tdIHtcbiAgcmV0dXJuIChcbiAgICBjdXJzb3JBZHZhbmNlTWV0aG9kcyB8fFxuICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICBdKVxuICApO1xufVxuXG5jb25zdCBjdXJzb3JSZXF1ZXN0TWFwOiBXZWFrTWFwPElEQlBDdXJzb3IsIElEQlJlcXVlc3Q8SURCQ3Vyc29yPj4gPVxuICBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwOiBXZWFrTWFwPElEQlRyYW5zYWN0aW9uLCBQcm9taXNlPHZvaWQ+PiA9XG4gIG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXA6IFdlYWtNYXA8SURCVHJhbnNhY3Rpb24sIHN0cmluZ1tdPiA9XG4gIG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgY29uc3QgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdDxUPihyZXF1ZXN0OiBJREJSZXF1ZXN0PFQ+KTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgfTtcbiAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSh3cmFwKHJlcXVlc3QucmVzdWx0IGFzIGFueSkgYXMgYW55KTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICB9KTtcblxuICBwcm9taXNlXG4gICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAvLyBTaW5jZSBjdXJzb3JpbmcgcmV1c2VzIHRoZSBJREJSZXF1ZXN0ICgqc2lnaCopLCB3ZSBjYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAvLyAoc2VlIHdyYXBGdW5jdGlvbikuXG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJDdXJzb3IpIHtcbiAgICAgICAgY3Vyc29yUmVxdWVzdE1hcC5zZXQoXG4gICAgICAgICAgdmFsdWUgYXMgdW5rbm93biBhcyBJREJQQ3Vyc29yLFxuICAgICAgICAgIHJlcXVlc3QgYXMgdW5rbm93biBhcyBJREJSZXF1ZXN0PElEQkN1cnNvcj4sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICAvLyBDYXRjaGluZyB0byBhdm9pZCBcIlVuY2F1Z2h0IFByb21pc2UgZXhjZXB0aW9uc1wiXG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge30pO1xuXG4gIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgLy8gaXMgYmVjYXVzZSB3ZSBjcmVhdGUgbWFueSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QuXG4gIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odHg6IElEQlRyYW5zYWN0aW9uKTogdm9pZCB7XG4gIC8vIEVhcmx5IGJhaWwgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIGEgZG9uZSBwcm9taXNlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICBpZiAodHJhbnNhY3Rpb25Eb25lTWFwLmhhcyh0eCkpIHJldHVybjtcblxuICBjb25zdCBkb25lID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgIH07XG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICB9KTtcblxuICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICB0cmFuc2FjdGlvbkRvbmVNYXAuc2V0KHR4LCBkb25lKTtcbn1cblxubGV0IGlkYlByb3h5VHJhcHM6IFByb3h5SGFuZGxlcjxhbnk+ID0ge1xuICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbikge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdHJhbnNhY3Rpb24uZG9uZS5cbiAgICAgIGlmIChwcm9wID09PSAnZG9uZScpIHJldHVybiB0cmFuc2FjdGlvbkRvbmVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAvLyBQb2x5ZmlsbCBmb3Igb2JqZWN0U3RvcmVOYW1lcyBiZWNhdXNlIG9mIEVkZ2UuXG4gICAgICBpZiAocHJvcCA9PT0gJ29iamVjdFN0b3JlTmFtZXMnKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQub2JqZWN0U3RvcmVOYW1lcyB8fCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICB9XG4gICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgIHJldHVybiByZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzFdXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHJlY2VpdmVyLm9iamVjdFN0b3JlKHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICByZXR1cm4gd3JhcCh0YXJnZXRbcHJvcF0pO1xuICB9LFxuICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKFxuICAgICAgdGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24gJiZcbiAgICAgIChwcm9wID09PSAnZG9uZScgfHwgcHJvcCA9PT0gJ3N0b3JlJylcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVRyYXBzKFxuICBjYWxsYmFjazogKGN1cnJlbnRUcmFwczogUHJveHlIYW5kbGVyPGFueT4pID0+IFByb3h5SGFuZGxlcjxhbnk+LFxuKTogdm9pZCB7XG4gIGlkYlByb3h5VHJhcHMgPSBjYWxsYmFjayhpZGJQcm94eVRyYXBzKTtcbn1cblxuZnVuY3Rpb24gd3JhcEZ1bmN0aW9uPFQgZXh0ZW5kcyBGdW5jPihmdW5jOiBUKTogRnVuY3Rpb24ge1xuICAvLyBEdWUgdG8gZXhwZWN0ZWQgb2JqZWN0IGVxdWFsaXR5ICh3aGljaCBpcyBlbmZvcmNlZCBieSB0aGUgY2FjaGluZyBpbiBgd3JhcGApLCB3ZVxuICAvLyBvbmx5IGNyZWF0ZSBvbmUgbmV3IGZ1bmMgcGVyIGZ1bmMuXG5cbiAgLy8gRWRnZSBkb2Vzbid0IHN1cHBvcnQgb2JqZWN0U3RvcmVOYW1lcyAoYm9vbyksIHNvIHdlIHBvbHlmaWxsIGl0IGhlcmUuXG4gIGlmIChcbiAgICBmdW5jID09PSBJREJEYXRhYmFzZS5wcm90b3R5cGUudHJhbnNhY3Rpb24gJiZcbiAgICAhKCdvYmplY3RTdG9yZU5hbWVzJyBpbiBJREJUcmFuc2FjdGlvbi5wcm90b3R5cGUpXG4gICkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoXG4gICAgICB0aGlzOiBJREJQRGF0YWJhc2UsXG4gICAgICBzdG9yZU5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICAgIC4uLmFyZ3M6IGFueVtdXG4gICAgKSB7XG4gICAgICBjb25zdCB0eCA9IGZ1bmMuY2FsbCh1bndyYXAodGhpcyksIHN0b3JlTmFtZXMsIC4uLmFyZ3MpO1xuICAgICAgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLnNldChcbiAgICAgICAgdHgsXG4gICAgICAgIChzdG9yZU5hbWVzIGFzIGFueSkuc29ydCA/IChzdG9yZU5hbWVzIGFzIGFueVtdKS5zb3J0KCkgOiBbc3RvcmVOYW1lc10sXG4gICAgICApO1xuICAgICAgcmV0dXJuIHdyYXAodHgpO1xuICAgIH07XG4gIH1cblxuICAvLyBDdXJzb3IgbWV0aG9kcyBhcmUgc3BlY2lhbCwgYXMgdGhlIGJlaGF2aW91ciBpcyBhIGxpdHRsZSBtb3JlIGRpZmZlcmVudCB0byBzdGFuZGFyZCBJREIuIEluXG4gIC8vIElEQiwgeW91IGFkdmFuY2UgdGhlIGN1cnNvciBhbmQgd2FpdCBmb3IgYSBuZXcgJ3N1Y2Nlc3MnIG9uIHRoZSBJREJSZXF1ZXN0IHRoYXQgZ2F2ZSB5b3UgdGhlXG4gIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gIC8vIHdpdGggcmVhbCBwcm9taXNlcywgc28gZWFjaCBhZHZhbmNlIG1ldGhvZHMgcmV0dXJucyBhIG5ldyBwcm9taXNlIGZvciB0aGUgY3Vyc29yIG9iamVjdCwgb3JcbiAgLy8gdW5kZWZpbmVkIGlmIHRoZSBlbmQgb2YgdGhlIGN1cnNvciBoYXMgYmVlbiByZWFjaGVkLlxuICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGhpczogSURCUEN1cnNvciwgLi4uYXJnczogUGFyYW1ldGVyczxUPikge1xuICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgIGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKTtcbiAgICAgIHJldHVybiB3cmFwKGN1cnNvclJlcXVlc3RNYXAuZ2V0KHRoaXMpISk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodGhpczogYW55LCAuLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSB7XG4gICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgcmV0dXJuIHdyYXAoZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG5cbiAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgLy8gd2hpY2ggaXMgbGF0ZXIgcmV0dXJuZWQgZm9yIHRyYW5zYWN0aW9uLmRvbmUgKHNlZSBpZGJPYmplY3RIYW5kbGVyKS5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG5cbiAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGlkYlByb3h5VHJhcHMpO1xuXG4gIC8vIFJldHVybiB0aGUgc2FtZSB2YWx1ZSBiYWNrIGlmIHdlJ3JlIG5vdCBnb2luZyB0byB0cmFuc2Zvcm0gaXQuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBFbmhhbmNlIGFuIElEQiBvYmplY3Qgd2l0aCBoZWxwZXJzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdGhpbmcgdG8gZW5oYW5jZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAodmFsdWU6IElEQkRhdGFiYXNlKTogSURCUERhdGFiYXNlO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAodmFsdWU6IElEQkluZGV4KTogSURCUEluZGV4O1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAodmFsdWU6IElEQk9iamVjdFN0b3JlKTogSURCUE9iamVjdFN0b3JlO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAodmFsdWU6IElEQlRyYW5zYWN0aW9uKTogSURCUFRyYW5zYWN0aW9uO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAoXG4gIHZhbHVlOiBJREJPcGVuREJSZXF1ZXN0LFxuKTogUHJvbWlzZTxJREJQRGF0YWJhc2UgfCB1bmRlZmluZWQ+O1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXA8VD4odmFsdWU6IElEQlJlcXVlc3Q8VD4pOiBQcm9taXNlPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAodmFsdWU6IGFueSk6IGFueSB7XG4gIC8vIFdlIHNvbWV0aW1lcyBnZW5lcmF0ZSBtdWx0aXBsZSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QgKGVnIHdoZW4gY3Vyc29yaW5nKSwgYmVjYXVzZVxuICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcblxuICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gIC8vIFRoaXMgaXMgZmFzdGVyLCBidXQgaXQgYWxzbyBwcm92aWRlcyBvYmplY3QgZXF1YWxpdHkuXG4gIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKSByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcblxuICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgLy8gVGhlc2UgbWF5IGJlIHByaW1pdGl2ZSB0eXBlcywgc28gdGhleSBjYW4ndCBiZSBXZWFrTWFwIGtleXMuXG4gIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICB0cmFuc2Zvcm1DYWNoZS5zZXQodmFsdWUsIG5ld1ZhbHVlKTtcbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gbmV3VmFsdWU7XG59XG5cbi8qKlxuICogUmV2ZXJ0IGFuIGVuaGFuY2VkIElEQiBvYmplY3QgdG8gYSBwbGFpbiBvbGQgbWlzZXJhYmxlIElEQiBvbmUuXG4gKlxuICogV2lsbCBhbHNvIHJldmVydCBhIHByb21pc2UgYmFjayB0byBhbiBJREJSZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5oYW5jZWQgb2JqZWN0IHRvIHJldmVydC5cbiAqL1xuaW50ZXJmYWNlIFVud3JhcCB7XG4gICh2YWx1ZTogSURCUEN1cnNvcldpdGhWYWx1ZTxhbnksIGFueSwgYW55LCBhbnksIGFueT4pOiBJREJDdXJzb3JXaXRoVmFsdWU7XG4gICh2YWx1ZTogSURCUEN1cnNvcjxhbnksIGFueSwgYW55LCBhbnksIGFueT4pOiBJREJDdXJzb3I7XG4gICh2YWx1ZTogSURCUERhdGFiYXNlKTogSURCRGF0YWJhc2U7XG4gICh2YWx1ZTogSURCUEluZGV4PGFueSwgYW55LCBhbnksIGFueSwgYW55Pik6IElEQkluZGV4O1xuICAodmFsdWU6IElEQlBPYmplY3RTdG9yZTxhbnksIGFueSwgYW55LCBhbnk+KTogSURCT2JqZWN0U3RvcmU7XG4gICh2YWx1ZTogSURCUFRyYW5zYWN0aW9uPGFueSwgYW55LCBhbnk+KTogSURCVHJhbnNhY3Rpb247XG4gIDxUIGV4dGVuZHMgYW55Pih2YWx1ZTogUHJvbWlzZTxJREJQRGF0YWJhc2U8VD4+KTogSURCT3BlbkRCUmVxdWVzdDtcbiAgKHZhbHVlOiBQcm9taXNlPElEQlBEYXRhYmFzZT4pOiBJREJPcGVuREJSZXF1ZXN0O1xuICA8VD4odmFsdWU6IFByb21pc2U8VD4pOiBJREJSZXF1ZXN0PFQ+O1xufVxuZXhwb3J0IGNvbnN0IHVud3JhcDogVW53cmFwID0gKHZhbHVlOiBhbnkpOiBhbnkgPT5cbiAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4iLCAiaW1wb3J0IHsgd3JhcCB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5EQkNhbGxiYWNrczxEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duPiB7XG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgdGhpcyB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSBoYXMgbmV2ZXIgYmVlbiBvcGVuZWQgYmVmb3JlLiBVc2UgaXQgdG8gc3BlY2lmeSB0aGVcbiAgICogc2NoZW1hIGZvciB0aGUgZGF0YWJhc2UuXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhYmFzZSBBIGRhdGFiYXNlIGluc3RhbmNlIHRoYXQgeW91IGNhbiB1c2UgdG8gYWRkL3JlbW92ZSBzdG9yZXMgYW5kIGluZGV4ZXMuXG4gICAqIEBwYXJhbSBvbGRWZXJzaW9uIExhc3QgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2Ugb3BlbmVkIGJ5IHRoZSB1c2VyLlxuICAgKiBAcGFyYW0gbmV3VmVyc2lvbiBXaGF0ZXZlciBuZXcgdmVyc2lvbiB5b3UgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB0cmFuc2FjdGlvbiBUaGUgdHJhbnNhY3Rpb24gZm9yIHRoaXMgdXBncmFkZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgaWYgeW91IG5lZWQgdG8gZ2V0IGRhdGEgZnJvbSBvdGhlciBzdG9yZXMgYXMgcGFydCBvZiBhIG1pZ3JhdGlvbi5cbiAgICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCBvYmplY3QgZm9yIHRoZSBhc3NvY2lhdGVkICd1cGdyYWRlbmVlZGVkJyBldmVudC5cbiAgICovXG4gIHVwZ3JhZGU/KFxuICAgIGRhdGFiYXNlOiBJREJQRGF0YWJhc2U8REJUeXBlcz4sXG4gICAgb2xkVmVyc2lvbjogbnVtYmVyLFxuICAgIG5ld1ZlcnNpb246IG51bWJlciB8IG51bGwsXG4gICAgdHJhbnNhY3Rpb246IElEQlBUcmFuc2FjdGlvbjxcbiAgICAgIERCVHlwZXMsXG4gICAgICBTdG9yZU5hbWVzPERCVHlwZXM+W10sXG4gICAgICAndmVyc2lvbmNoYW5nZSdcbiAgICA+LFxuICAgIGV2ZW50OiBJREJWZXJzaW9uQ2hhbmdlRXZlbnQsXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgdGhlcmUgYXJlIG9sZGVyIHZlcnNpb25zIG9mIHRoZSBkYXRhYmFzZSBvcGVuIG9uIHRoZSBvcmlnaW4sIHNvIHRoaXMgdmVyc2lvbiBjYW5ub3RcbiAgICogb3Blbi5cbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRWZXJzaW9uIFZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIHRoYXQncyBibG9ja2luZyB0aGlzIG9uZS5cbiAgICogQHBhcmFtIGJsb2NrZWRWZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSBiZWluZyBibG9ja2VkICh3aGF0ZXZlciB2ZXJzaW9uIHlvdSBwcm92aWRlZCB0byBgb3BlbkRCYCkuXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IGZvciB0aGUgYXNzb2NpYXRlZCBgYmxvY2tlZGAgZXZlbnQuXG4gICAqL1xuICBibG9ja2VkPyhcbiAgICBjdXJyZW50VmVyc2lvbjogbnVtYmVyLFxuICAgIGJsb2NrZWRWZXJzaW9uOiBudW1iZXIgfCBudWxsLFxuICAgIGV2ZW50OiBJREJWZXJzaW9uQ2hhbmdlRXZlbnQsXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgdGhpcyBjb25uZWN0aW9uIGlzIGJsb2NraW5nIGEgZnV0dXJlIHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIGZyb20gb3BlbmluZy5cbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRWZXJzaW9uIFZlcnNpb24gb2YgdGhlIG9wZW4gZGF0YWJhc2UgKHdoYXRldmVyIHZlcnNpb24geW91IHByb3ZpZGVkIHRvIGBvcGVuREJgKS5cbiAgICogQHBhcmFtIGJsb2NrZWRWZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSB0aGF0J3MgYmVpbmcgYmxvY2tlZC5cbiAgICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCBvYmplY3QgZm9yIHRoZSBhc3NvY2lhdGVkIGB2ZXJzaW9uY2hhbmdlYCBldmVudC5cbiAgICovXG4gIGJsb2NraW5nPyhcbiAgICBjdXJyZW50VmVyc2lvbjogbnVtYmVyLFxuICAgIGJsb2NrZWRWZXJzaW9uOiBudW1iZXIgfCBudWxsLFxuICAgIGV2ZW50OiBJREJWZXJzaW9uQ2hhbmdlRXZlbnQsXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgdGhlIGJyb3dzZXIgYWJub3JtYWxseSB0ZXJtaW5hdGVzIHRoZSBjb25uZWN0aW9uLlxuICAgKiBUaGlzIGlzIG5vdCBjYWxsZWQgd2hlbiBgZGIuY2xvc2UoKWAgaXMgY2FsbGVkLlxuICAgKi9cbiAgdGVybWluYXRlZD8oKTogdm9pZDtcbn1cblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcGVuREI8REJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24+KFxuICBuYW1lOiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIsXG4gIHsgYmxvY2tlZCwgdXBncmFkZSwgYmxvY2tpbmcsIHRlcm1pbmF0ZWQgfTogT3BlbkRCQ2FsbGJhY2tzPERCVHlwZXM+ID0ge30sXG4pOiBQcm9taXNlPElEQlBEYXRhYmFzZTxEQlR5cGVzPj4ge1xuICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gIGNvbnN0IG9wZW5Qcm9taXNlID0gd3JhcChyZXF1ZXN0KSBhcyBQcm9taXNlPElEQlBEYXRhYmFzZTxEQlR5cGVzPj47XG5cbiAgaWYgKHVwZ3JhZGUpIHtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZ3JhZGVuZWVkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgIHVwZ3JhZGUoXG4gICAgICAgIHdyYXAocmVxdWVzdC5yZXN1bHQpIGFzIElEQlBEYXRhYmFzZTxEQlR5cGVzPixcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbixcbiAgICAgICAgZXZlbnQubmV3VmVyc2lvbixcbiAgICAgICAgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uISkgYXMgdW5rbm93biBhcyBJREJQVHJhbnNhY3Rpb248XG4gICAgICAgICAgREJUeXBlcyxcbiAgICAgICAgICBTdG9yZU5hbWVzPERCVHlwZXM+W10sXG4gICAgICAgICAgJ3ZlcnNpb25jaGFuZ2UnXG4gICAgICAgID4sXG4gICAgICAgIGV2ZW50LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChibG9ja2VkKSB7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PlxuICAgICAgYmxvY2tlZChcbiAgICAgICAgLy8gQ2FzdGluZyBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0LURPTS1saWItZ2VuZXJhdG9yL3B1bGwvMTQwNVxuICAgICAgICAoZXZlbnQgYXMgSURCVmVyc2lvbkNoYW5nZUV2ZW50KS5vbGRWZXJzaW9uLFxuICAgICAgICAoZXZlbnQgYXMgSURCVmVyc2lvbkNoYW5nZUV2ZW50KS5uZXdWZXJzaW9uLFxuICAgICAgICBldmVudCBhcyBJREJWZXJzaW9uQ2hhbmdlRXZlbnQsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICBvcGVuUHJvbWlzZVxuICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgaWYgKHRlcm1pbmF0ZWQpIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgIGlmIChibG9ja2luZykge1xuICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKGV2ZW50KSA9PlxuICAgICAgICAgIGJsb2NraW5nKGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7fSk7XG5cbiAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbGV0ZURCQ2FsbGJhY2tzIHtcbiAgLyoqXG4gICAqIENhbGxlZCBpZiB0aGVyZSBhcmUgY29ubmVjdGlvbnMgdG8gdGhpcyBkYXRhYmFzZSBvcGVuLCBzbyBpdCBjYW5ub3QgYmUgZGVsZXRlZC5cbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRWZXJzaW9uIFZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIHRoYXQncyBibG9ja2luZyB0aGUgZGVsZXRlIG9wZXJhdGlvbi5cbiAgICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCBvYmplY3QgZm9yIHRoZSBhc3NvY2lhdGVkIGBibG9ja2VkYCBldmVudC5cbiAgICovXG4gIGJsb2NrZWQ/KGN1cnJlbnRWZXJzaW9uOiBudW1iZXIsIGV2ZW50OiBJREJWZXJzaW9uQ2hhbmdlRXZlbnQpOiB2b2lkO1xufVxuXG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlREIoXG4gIG5hbWU6IHN0cmluZyxcbiAgeyBibG9ja2VkIH06IERlbGV0ZURCQ2FsbGJhY2tzID0ge30sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcblxuICBpZiAoYmxvY2tlZCkge1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsIChldmVudCkgPT5cbiAgICAgIGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgKGV2ZW50IGFzIElEQlZlcnNpb25DaGFuZ2VFdmVudCkub2xkVmVyc2lvbixcbiAgICAgICAgZXZlbnQgYXMgSURCVmVyc2lvbkNoYW5nZUV2ZW50LFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5leHBvcnQgeyB1bndyYXAsIHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuLy8gPT09IFRoZSByZXN0IG9mIHRoaXMgZmlsZSBpcyB0eXBlIGRlZnMgPT09XG50eXBlIEtleVRvS2V5Tm9JbmRleDxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF06IHN0cmluZyBleHRlbmRzIEsgPyBuZXZlciA6IG51bWJlciBleHRlbmRzIEsgPyBuZXZlciA6IEs7XG59O1xudHlwZSBWYWx1ZXNPZjxUPiA9IFQgZXh0ZW5kcyB7IFtLIGluIGtleW9mIFRdOiBpbmZlciBVIH0gPyBVIDogbmV2ZXI7XG50eXBlIEtub3duS2V5czxUPiA9IFZhbHVlc09mPEtleVRvS2V5Tm9JbmRleDxUPj47XG5cbnR5cGUgT21pdDxULCBLPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgREJTY2hlbWEge1xuICBbczogc3RyaW5nXTogREJTY2hlbWFWYWx1ZTtcbn1cblxuaW50ZXJmYWNlIEluZGV4S2V5cyB7XG4gIFtzOiBzdHJpbmddOiBJREJWYWxpZEtleTtcbn1cblxuaW50ZXJmYWNlIERCU2NoZW1hVmFsdWUge1xuICBrZXk6IElEQlZhbGlkS2V5O1xuICB2YWx1ZTogYW55O1xuICBpbmRleGVzPzogSW5kZXhLZXlzO1xufVxuXG4vKipcbiAqIEV4dHJhY3Qga25vd24gb2JqZWN0IHN0b3JlIG5hbWVzIGZyb20gdGhlIERCIHNjaGVtYSB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBEQlR5cGVzIERCIHNjaGVtYSB0eXBlLCBvciB1bmtub3duIGlmIHRoZSBEQiBpc24ndCB0eXBlZC5cbiAqL1xuZXhwb3J0IHR5cGUgU3RvcmVOYW1lczxEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duPiA9XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSA/IEtub3duS2V5czxEQlR5cGVzPiA6IHN0cmluZztcblxuLyoqXG4gKiBFeHRyYWN0IGRhdGFiYXNlIHZhbHVlIHR5cGVzIGZyb20gdGhlIERCIHNjaGVtYSB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBEQlR5cGVzIERCIHNjaGVtYSB0eXBlLCBvciB1bmtub3duIGlmIHRoZSBEQiBpc24ndCB0eXBlZC5cbiAqIEB0ZW1wbGF0ZSBTdG9yZU5hbWUgTmFtZXMgb2YgdGhlIG9iamVjdCBzdG9yZXMgdG8gZ2V0IHRoZSB0eXBlcyBvZi5cbiAqL1xuZXhwb3J0IHR5cGUgU3RvcmVWYWx1ZTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbj4gPSBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgPyBEQlR5cGVzW1N0b3JlTmFtZV1bJ3ZhbHVlJ10gOiBhbnk7XG5cbi8qKlxuICogRXh0cmFjdCBkYXRhYmFzZSBrZXkgdHlwZXMgZnJvbSB0aGUgREIgc2NoZW1hIHR5cGUuXG4gKlxuICogQHRlbXBsYXRlIERCVHlwZXMgREIgc2NoZW1hIHR5cGUsIG9yIHVua25vd24gaWYgdGhlIERCIGlzbid0IHR5cGVkLlxuICogQHRlbXBsYXRlIFN0b3JlTmFtZSBOYW1lcyBvZiB0aGUgb2JqZWN0IHN0b3JlcyB0byBnZXQgdGhlIHR5cGVzIG9mLlxuICovXG5leHBvcnQgdHlwZSBTdG9yZUtleTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbj4gPSBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgPyBEQlR5cGVzW1N0b3JlTmFtZV1bJ2tleSddIDogSURCVmFsaWRLZXk7XG5cbi8qKlxuICogRXh0cmFjdCB0aGUgbmFtZXMgb2YgaW5kZXhlcyBpbiBjZXJ0YWluIG9iamVjdCBzdG9yZXMgZnJvbSB0aGUgREIgc2NoZW1hIHR5cGUuXG4gKlxuICogQHRlbXBsYXRlIERCVHlwZXMgREIgc2NoZW1hIHR5cGUsIG9yIHVua25vd24gaWYgdGhlIERCIGlzbid0IHR5cGVkLlxuICogQHRlbXBsYXRlIFN0b3JlTmFtZSBOYW1lcyBvZiB0aGUgb2JqZWN0IHN0b3JlcyB0byBnZXQgdGhlIHR5cGVzIG9mLlxuICovXG5leHBvcnQgdHlwZSBJbmRleE5hbWVzPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duLFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuPiA9IERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSA/IGtleW9mIERCVHlwZXNbU3RvcmVOYW1lXVsnaW5kZXhlcyddIDogc3RyaW5nO1xuXG4vKipcbiAqIEV4dHJhY3QgdGhlIHR5cGVzIG9mIGluZGV4ZXMgaW4gY2VydGFpbiBvYmplY3Qgc3RvcmVzIGZyb20gdGhlIERCIHNjaGVtYSB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBEQlR5cGVzIERCIHNjaGVtYSB0eXBlLCBvciB1bmtub3duIGlmIHRoZSBEQiBpc24ndCB0eXBlZC5cbiAqIEB0ZW1wbGF0ZSBTdG9yZU5hbWUgTmFtZXMgb2YgdGhlIG9iamVjdCBzdG9yZXMgdG8gZ2V0IHRoZSB0eXBlcyBvZi5cbiAqIEB0ZW1wbGF0ZSBJbmRleE5hbWUgTmFtZXMgb2YgdGhlIGluZGV4ZXMgdG8gZ2V0IHRoZSB0eXBlcyBvZi5cbiAqL1xuZXhwb3J0IHR5cGUgSW5kZXhLZXk8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPixcbj4gPSBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWFcbiAgPyBJbmRleE5hbWUgZXh0ZW5kcyBrZXlvZiBEQlR5cGVzW1N0b3JlTmFtZV1bJ2luZGV4ZXMnXVxuICAgID8gREJUeXBlc1tTdG9yZU5hbWVdWydpbmRleGVzJ11bSW5kZXhOYW1lXVxuICAgIDogSURCVmFsaWRLZXlcbiAgOiBJREJWYWxpZEtleTtcblxudHlwZSBDdXJzb3JTb3VyY2U8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duLFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gPSBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT5cbiAgPyBJREJQSW5kZXg8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPlxuICA6IElEQlBPYmplY3RTdG9yZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBNb2RlPjtcblxudHlwZSBDdXJzb3JLZXk8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24sXG4+ID0gSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+XG4gID8gSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+XG4gIDogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPjtcblxudHlwZSBJREJQRGF0YWJhc2VFeHRlbmRzID0gT21pdDxcbiAgSURCRGF0YWJhc2UsXG4gICdjcmVhdGVPYmplY3RTdG9yZScgfCAnZGVsZXRlT2JqZWN0U3RvcmUnIHwgJ3RyYW5zYWN0aW9uJyB8ICdvYmplY3RTdG9yZU5hbWVzJ1xuPjtcblxuLyoqXG4gKiBBIHZhcmlhdGlvbiBvZiBET01TdHJpbmdMaXN0IHdpdGggcHJlY2lzZSBzdHJpbmcgdHlwZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUeXBlZERPTVN0cmluZ0xpc3Q8VCBleHRlbmRzIHN0cmluZz4gZXh0ZW5kcyBET01TdHJpbmdMaXN0IHtcbiAgY29udGFpbnMoc3RyaW5nOiBUKTogYm9vbGVhbjtcbiAgaXRlbShpbmRleDogbnVtYmVyKTogVCB8IG51bGw7XG4gIFtpbmRleDogbnVtYmVyXTogVDtcbiAgW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmFibGVJdGVyYXRvcjxUPjtcbn1cblxuaW50ZXJmYWNlIElEQlRyYW5zYWN0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgZHVyYWJpbGl0eSBvZiB0aGUgdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IGlzIFwiZGVmYXVsdFwiLiBVc2luZyBcInJlbGF4ZWRcIiBwcm92aWRlcyBiZXR0ZXIgcGVyZm9ybWFuY2UsIGJ1dCB3aXRoIGZld2VyXG4gICAqIGd1YXJhbnRlZXMuIFdlYiBhcHBsaWNhdGlvbnMgYXJlIGVuY291cmFnZWQgdG8gdXNlIFwicmVsYXhlZFwiIGZvciBlcGhlbWVyYWwgZGF0YSBzdWNoIGFzIGNhY2hlc1xuICAgKiBvciBxdWlja2x5IGNoYW5naW5nIHJlY29yZHMsIGFuZCBcInN0cmljdFwiIGluIGNhc2VzIHdoZXJlIHJlZHVjaW5nIHRoZSByaXNrIG9mIGRhdGEgbG9zc1xuICAgKiBvdXR3ZWlnaHMgdGhlIGltcGFjdCB0byBwZXJmb3JtYW5jZSBhbmQgcG93ZXIuXG4gICAqL1xuICBkdXJhYmlsaXR5PzogJ2RlZmF1bHQnIHwgJ3N0cmljdCcgfCAncmVsYXhlZCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUERhdGFiYXNlPERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duPlxuICBleHRlbmRzIElEQlBEYXRhYmFzZUV4dGVuZHMge1xuICAvKipcbiAgICogVGhlIG5hbWVzIG9mIHN0b3JlcyBpbiB0aGUgZGF0YWJhc2UuXG4gICAqL1xuICByZWFkb25seSBvYmplY3RTdG9yZU5hbWVzOiBUeXBlZERPTVN0cmluZ0xpc3Q8U3RvcmVOYW1lczxEQlR5cGVzPj47XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCBzdG9yZS5cbiAgICpcbiAgICogVGhyb3dzIGEgXCJJbnZhbGlkU3RhdGVFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiBub3QgY2FsbGVkIHdpdGhpbiBhbiB1cGdyYWRlIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgY3JlYXRlT2JqZWN0U3RvcmU8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIG5hbWU6IE5hbWUsXG4gICAgb3B0aW9uYWxQYXJhbWV0ZXJzPzogSURCT2JqZWN0U3RvcmVQYXJhbWV0ZXJzLFxuICApOiBJREJQT2JqZWN0U3RvcmU8XG4gICAgREJUeXBlcyxcbiAgICBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4sXG4gICAgTmFtZSxcbiAgICAndmVyc2lvbmNoYW5nZSdcbiAgPjtcbiAgLyoqXG4gICAqIERlbGV0ZXMgdGhlIG9iamVjdCBzdG9yZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgKlxuICAgKiBUaHJvd3MgYSBcIkludmFsaWRTdGF0ZUVycm9yXCIgRE9NRXhjZXB0aW9uIGlmIG5vdCBjYWxsZWQgd2l0aGluIGFuIHVwZ3JhZGUgdHJhbnNhY3Rpb24uXG4gICAqL1xuICBkZWxldGVPYmplY3RTdG9yZShuYW1lOiBTdG9yZU5hbWVzPERCVHlwZXM+KTogdm9pZDtcbiAgLyoqXG4gICAqIFN0YXJ0IGEgbmV3IHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lcyBUaGUgb2JqZWN0IHN0b3JlKHMpIHRoaXMgdHJhbnNhY3Rpb24gbmVlZHMuXG4gICAqIEBwYXJhbSBtb2RlXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICB0cmFuc2FjdGlvbjxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5JyxcbiAgPihcbiAgICBzdG9yZU5hbWVzOiBOYW1lLFxuICAgIG1vZGU/OiBNb2RlLFxuICAgIG9wdGlvbnM/OiBJREJUcmFuc2FjdGlvbk9wdGlvbnMsXG4gICk6IElEQlBUcmFuc2FjdGlvbjxEQlR5cGVzLCBbTmFtZV0sIE1vZGU+O1xuICB0cmFuc2FjdGlvbjxcbiAgICBOYW1lcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PixcbiAgICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5JyxcbiAgPihcbiAgICBzdG9yZU5hbWVzOiBOYW1lcyxcbiAgICBtb2RlPzogTW9kZSxcbiAgICBvcHRpb25zPzogSURCVHJhbnNhY3Rpb25PcHRpb25zLFxuICApOiBJREJQVHJhbnNhY3Rpb248REJUeXBlcywgTmFtZXMsIE1vZGU+O1xuXG4gIC8vIFNob3J0Y3V0IG1ldGhvZHNcblxuICAvKipcbiAgICogQWRkIGEgdmFsdWUgdG8gYSBzdG9yZS5cbiAgICpcbiAgICogUmVqZWN0cyBpZiBhbiBpdGVtIG9mIGEgZ2l2ZW4ga2V5IGFscmVhZHkgZXhpc3RzIGluIHRoZSBzdG9yZS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgYWRkPE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgdmFsdWU6IFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT4sXG4gICAga2V5PzogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBOYW1lPj47XG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCByZWNvcmRzIGluIGEgc3RvcmUuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICovXG4gIGNsZWFyKG5hbWU6IFN0b3JlTmFtZXM8REJUeXBlcz4pOiBQcm9taXNlPHZvaWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkgaW4gYSBzdG9yZS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0ga2V5XG4gICAqL1xuICBjb3VudDxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICApOiBQcm9taXNlPG51bWJlcj47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIG51bWJlciBvZiByZWNvcmRzIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeSBpbiBhbiBpbmRleC5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gaW5kZXhOYW1lIE5hbWUgb2YgdGhlIGluZGV4IHdpdGhpbiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIGNvdW50RnJvbUluZGV4PFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgTmFtZT4sXG4gID4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGluZGV4TmFtZTogSW5kZXhOYW1lLFxuICAgIGtleT86IEluZGV4S2V5PERCVHlwZXMsIE5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICk6IFByb21pc2U8bnVtYmVyPjtcbiAgLyoqXG4gICAqIERlbGV0ZXMgcmVjb3JkcyBpbiBhIHN0b3JlIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0ga2V5XG4gICAqL1xuICBkZWxldGU8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBrZXk6IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCByZWNvcmQgaW4gYSBzdG9yZSBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggdW5kZWZpbmVkIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgZ2V0PE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgcXVlcnk6IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCByZWNvcmQgaW4gYW4gaW5kZXggbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gaW5kZXhOYW1lIE5hbWUgb2YgdGhlIGluZGV4IHdpdGhpbiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgZ2V0RnJvbUluZGV4PFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgTmFtZT4sXG4gID4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGluZGV4TmFtZTogSW5kZXhOYW1lLFxuICAgIHF1ZXJ5OiBJbmRleEtleTxEQlR5cGVzLCBOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyBpbiBhIHN0b3JlIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2YgdmFsdWVzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbDxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbGwgdmFsdWVzIGluIGFuIGluZGV4IHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBpbmRleE5hbWUgTmFtZSBvZiB0aGUgaW5kZXggd2l0aGluIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiB2YWx1ZXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsRnJvbUluZGV4PFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgTmFtZT4sXG4gID4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGluZGV4TmFtZTogSW5kZXhOYW1lLFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIE5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXlzIG9mIHJlY29yZHMgaW4gYSBzdG9yZSBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiBrZXlzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbEtleXM8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXlzIG9mIHJlY29yZHMgaW4gYW4gaW5kZXggbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBpbmRleE5hbWUgTmFtZSBvZiB0aGUgaW5kZXggd2l0aGluIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiBrZXlzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbEtleXNGcm9tSW5kZXg8XG4gICAgTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gICAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBOYW1lPixcbiAgPihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgaW5kZXhOYW1lOiBJbmRleE5hbWUsXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHJlY29yZCBpbiBhIHN0b3JlIHRoYXQgbWF0Y2hlcyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggdW5kZWZpbmVkIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgZ2V0S2V5PE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgcXVlcnk6IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHJlY29yZCBpbiBhbiBpbmRleCB0aGF0IG1hdGNoZXMgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gaW5kZXhOYW1lIE5hbWUgb2YgdGhlIGluZGV4IHdpdGhpbiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgZ2V0S2V5RnJvbUluZGV4PFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgTmFtZT4sXG4gID4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGluZGV4TmFtZTogSW5kZXhOYW1lLFxuICAgIHF1ZXJ5OiBJbmRleEtleTxEQlR5cGVzLCBOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUHV0IGFuIGl0ZW0gaW4gdGhlIGRhdGFiYXNlLlxuICAgKlxuICAgKiBSZXBsYWNlcyBhbnkgaXRlbSB3aXRoIHRoZSBzYW1lIGtleS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgcHV0PE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgdmFsdWU6IFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT4sXG4gICAga2V5PzogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBOYW1lPj47XG59XG5cbnR5cGUgSURCUFRyYW5zYWN0aW9uRXh0ZW5kcyA9IE9taXQ8XG4gIElEQlRyYW5zYWN0aW9uLFxuICAnZGInIHwgJ29iamVjdFN0b3JlJyB8ICdvYmplY3RTdG9yZU5hbWVzJ1xuPjtcblxuZXhwb3J0IGludGVyZmFjZSBJREJQVHJhbnNhY3Rpb248XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBUcmFuc2FjdGlvbkV4dGVuZHMge1xuICAvKipcbiAgICogVGhlIHRyYW5zYWN0aW9uJ3MgbW9kZS5cbiAgICovXG4gIHJlYWRvbmx5IG1vZGU6IE1vZGU7XG4gIC8qKlxuICAgKiBUaGUgbmFtZXMgb2Ygc3RvcmVzIGluIHNjb3BlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgb2JqZWN0U3RvcmVOYW1lczogVHlwZWRET01TdHJpbmdMaXN0PFR4U3RvcmVzW251bWJlcl0+O1xuICAvKipcbiAgICogVGhlIHRyYW5zYWN0aW9uJ3MgY29ubmVjdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IGRiOiBJREJQRGF0YWJhc2U8REJUeXBlcz47XG4gIC8qKlxuICAgKiBQcm9taXNlIGZvciB0aGUgY29tcGxldGlvbiBvZiB0aGlzIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgZG9uZTogUHJvbWlzZTx2b2lkPjtcbiAgLyoqXG4gICAqIFRoZSBhc3NvY2lhdGVkIG9iamVjdCBzdG9yZSwgaWYgdGhlIHRyYW5zYWN0aW9uIGNvdmVycyBhIHNpbmdsZSBzdG9yZSwgb3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICovXG4gIHJlYWRvbmx5IHN0b3JlOiBUeFN0b3Jlc1sxXSBleHRlbmRzIHVuZGVmaW5lZFxuICAgID8gSURCUE9iamVjdFN0b3JlPERCVHlwZXMsIFR4U3RvcmVzLCBUeFN0b3Jlc1swXSwgTW9kZT5cbiAgICA6IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSURCT2JqZWN0U3RvcmUgaW4gdGhlIHRyYW5zYWN0aW9uJ3Mgc2NvcGUuXG4gICAqL1xuICBvYmplY3RTdG9yZTxTdG9yZU5hbWUgZXh0ZW5kcyBUeFN0b3Jlc1tudW1iZXJdPihcbiAgICBuYW1lOiBTdG9yZU5hbWUsXG4gICk6IElEQlBPYmplY3RTdG9yZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBNb2RlPjtcbn1cblxudHlwZSBJREJQT2JqZWN0U3RvcmVFeHRlbmRzID0gT21pdDxcbiAgSURCT2JqZWN0U3RvcmUsXG4gIHwgJ3RyYW5zYWN0aW9uJ1xuICB8ICdhZGQnXG4gIHwgJ2NsZWFyJ1xuICB8ICdjb3VudCdcbiAgfCAnY3JlYXRlSW5kZXgnXG4gIHwgJ2RlbGV0ZSdcbiAgfCAnZ2V0J1xuICB8ICdnZXRBbGwnXG4gIHwgJ2dldEFsbEtleXMnXG4gIHwgJ2dldEtleSdcbiAgfCAnaW5kZXgnXG4gIHwgJ29wZW5DdXJzb3InXG4gIHwgJ29wZW5LZXlDdXJzb3InXG4gIHwgJ3B1dCdcbiAgfCAnaW5kZXhOYW1lcydcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUE9iamVjdFN0b3JlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUE9iamVjdFN0b3JlRXh0ZW5kcyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZXMgb2YgaW5kZXhlcyBpbiB0aGUgc3RvcmUuXG4gICAqL1xuICByZWFkb25seSBpbmRleE5hbWVzOiBUeXBlZERPTVN0cmluZ0xpc3Q8SW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+PjtcbiAgLyoqXG4gICAqIFRoZSBhc3NvY2lhdGVkIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgdHJhbnNhY3Rpb246IElEQlBUcmFuc2FjdGlvbjxEQlR5cGVzLCBUeFN0b3JlcywgTW9kZT47XG4gIC8qKlxuICAgKiBBZGQgYSB2YWx1ZSB0byB0aGUgc3RvcmUuXG4gICAqXG4gICAqIFJlamVjdHMgaWYgYW4gaXRlbSBvZiBhIGdpdmVuIGtleSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgc3RvcmUuXG4gICAqL1xuICBhZGQ6IE1vZGUgZXh0ZW5kcyAncmVhZG9ubHknXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IChcbiAgICAgICAgdmFsdWU6IFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgICAgICAga2V5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlLFxuICAgICAgKSA9PiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4+O1xuICAvKipcbiAgICogRGVsZXRlcyBhbGwgcmVjb3JkcyBpbiBzdG9yZS5cbiAgICovXG4gIGNsZWFyOiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5JyA/IHVuZGVmaW5lZCA6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIG51bWJlciBvZiByZWNvcmRzIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeS5cbiAgICovXG4gIGNvdW50KFxuICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICk6IFByb21pc2U8bnVtYmVyPjtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5kZXggaW4gc3RvcmUuXG4gICAqXG4gICAqIFRocm93cyBhbiBcIkludmFsaWRTdGF0ZUVycm9yXCIgRE9NRXhjZXB0aW9uIGlmIG5vdCBjYWxsZWQgd2l0aGluIGFuIHVwZ3JhZGUgdHJhbnNhY3Rpb24uXG4gICAqL1xuICBjcmVhdGVJbmRleDogTW9kZSBleHRlbmRzICd2ZXJzaW9uY2hhbmdlJ1xuICAgID8gPEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPj4oXG4gICAgICAgIG5hbWU6IEluZGV4TmFtZSxcbiAgICAgICAga2V5UGF0aDogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgICAgIG9wdGlvbnM/OiBJREJJbmRleFBhcmFtZXRlcnMsXG4gICAgICApID0+IElEQlBJbmRleDxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+XG4gICAgOiB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBEZWxldGVzIHJlY29yZHMgaW4gc3RvcmUgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5LlxuICAgKi9cbiAgZGVsZXRlOiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5J1xuICAgID8gdW5kZWZpbmVkXG4gICAgOiAoa2V5OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UpID0+IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCByZWNvcmQgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICovXG4gIGdldChcbiAgICBxdWVyeTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyB0aGF0IG1hdGNoIHRoZSBxdWVyeS5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiB2YWx1ZXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsKFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT5bXT47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGtleXMgb2YgcmVjb3JkcyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2Yga2V5cyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGxLZXlzKFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHJlY29yZCB0aGF0IG1hdGNoZXMgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICovXG4gIGdldEtleShcbiAgICBxdWVyeTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogR2V0IGEgcXVlcnkgb2YgYSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgaW5kZXg8SW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+PihcbiAgICBuYW1lOiBJbmRleE5hbWUsXG4gICk6IElEQlBJbmRleDxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+O1xuICAvKipcbiAgICogT3BlbnMgYSBjdXJzb3Igb3ZlciB0aGUgcmVjb3JkcyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggbnVsbCBpZiBubyBtYXRjaGVzIGFyZSBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IElmIG51bGwsIGFsbCByZWNvcmRzIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAqL1xuICBvcGVuQ3Vyc29yKFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBkaXJlY3Rpb24/OiBJREJDdXJzb3JEaXJlY3Rpb24sXG4gICk6IFByb21pc2U8SURCUEN1cnNvcldpdGhWYWx1ZTxcbiAgICBEQlR5cGVzLFxuICAgIFR4U3RvcmVzLFxuICAgIFN0b3JlTmFtZSxcbiAgICB1bmtub3duLFxuICAgIE1vZGVcbiAgPiB8IG51bGw+O1xuICAvKipcbiAgICogT3BlbnMgYSBjdXJzb3Igb3ZlciB0aGUga2V5cyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggbnVsbCBpZiBubyBtYXRjaGVzIGFyZSBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IElmIG51bGwsIGFsbCByZWNvcmRzIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAqL1xuICBvcGVuS2V5Q3Vyc29yKFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBkaXJlY3Rpb24/OiBJREJDdXJzb3JEaXJlY3Rpb24sXG4gICk6IFByb21pc2U8SURCUEN1cnNvcjxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCB1bmtub3duLCBNb2RlPiB8IG51bGw+O1xuICAvKipcbiAgICogUHV0IGFuIGl0ZW0gaW4gdGhlIHN0b3JlLlxuICAgKlxuICAgKiBSZXBsYWNlcyBhbnkgaXRlbSB3aXRoIHRoZSBzYW1lIGtleS5cbiAgICovXG4gIHB1dDogTW9kZSBleHRlbmRzICdyZWFkb25seSdcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKFxuICAgICAgICB2YWx1ZTogU3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+LFxuICAgICAgICBrZXk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICAgICApID0+IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPj47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIHN0b3JlLlxuICAgKi9cbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8XG4gICAgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gICAgICBEQlR5cGVzLFxuICAgICAgVHhTdG9yZXMsXG4gICAgICBTdG9yZU5hbWUsXG4gICAgICB1bmtub3duLFxuICAgICAgTW9kZVxuICAgID5cbiAgPjtcbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciB0aGUgcmVjb3JkcyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgaXRlcmF0ZShcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8XG4gICAgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gICAgICBEQlR5cGVzLFxuICAgICAgVHhTdG9yZXMsXG4gICAgICBTdG9yZU5hbWUsXG4gICAgICB1bmtub3duLFxuICAgICAgTW9kZVxuICAgID5cbiAgPjtcbn1cblxudHlwZSBJREJQSW5kZXhFeHRlbmRzID0gT21pdDxcbiAgSURCSW5kZXgsXG4gIHwgJ29iamVjdFN0b3JlJ1xuICB8ICdjb3VudCdcbiAgfCAnZ2V0J1xuICB8ICdnZXRBbGwnXG4gIHwgJ2dldEFsbEtleXMnXG4gIHwgJ2dldEtleSdcbiAgfCAnb3BlbkN1cnNvcidcbiAgfCAnb3BlbktleUN1cnNvcidcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUEluZGV4PFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+ID0gSW5kZXhOYW1lczxcbiAgICBEQlR5cGVzLFxuICAgIFN0b3JlTmFtZVxuICA+LFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQSW5kZXhFeHRlbmRzIHtcbiAgLyoqXG4gICAqIFRoZSBJREJPYmplY3RTdG9yZSB0aGUgaW5kZXggYmVsb25ncyB0by5cbiAgICovXG4gIHJlYWRvbmx5IG9iamVjdFN0b3JlOiBJREJQT2JqZWN0U3RvcmU8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgTW9kZT47XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgbnVtYmVyIG9mIHJlY29yZHMgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5LlxuICAgKi9cbiAgY291bnQoXG4gICAga2V5PzogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICApOiBQcm9taXNlPG51bWJlcj47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCByZWNvcmQgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICovXG4gIGdldChcbiAgICBxdWVyeTogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbGwgdmFsdWVzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIHZhbHVlcyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGwoXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXlzIG9mIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIGtleXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsS2V5cyhcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHJlY29yZCB0aGF0IG1hdGNoZXMgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICovXG4gIGdldEtleShcbiAgICBxdWVyeTogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBPcGVucyBhIGN1cnNvciBvdmVyIHRoZSByZWNvcmRzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCBudWxsIGlmIG5vIG1hdGNoZXMgYXJlIGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnkgSWYgbnVsbCwgYWxsIHJlY29yZHMgbWF0Y2guXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICovXG4gIG9wZW5DdXJzb3IoXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBQcm9taXNlPElEQlBDdXJzb3JXaXRoVmFsdWU8XG4gICAgREJUeXBlcyxcbiAgICBUeFN0b3JlcyxcbiAgICBTdG9yZU5hbWUsXG4gICAgSW5kZXhOYW1lLFxuICAgIE1vZGVcbiAgPiB8IG51bGw+O1xuICAvKipcbiAgICogT3BlbnMgYSBjdXJzb3Igb3ZlciB0aGUga2V5cyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggbnVsbCBpZiBubyBtYXRjaGVzIGFyZSBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IElmIG51bGwsIGFsbCByZWNvcmRzIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAqL1xuICBvcGVuS2V5Q3Vyc29yKFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGRpcmVjdGlvbj86IElEQkN1cnNvckRpcmVjdGlvbixcbiAgKTogUHJvbWlzZTxJREJQQ3Vyc29yPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT4gfCBudWxsPjtcbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciB0aGUgaW5kZXguXG4gICAqL1xuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxcbiAgICBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZTxcbiAgICAgIERCVHlwZXMsXG4gICAgICBUeFN0b3JlcyxcbiAgICAgIFN0b3JlTmFtZSxcbiAgICAgIEluZGV4TmFtZSxcbiAgICAgIE1vZGVcbiAgICA+XG4gID47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIG51bGwgaWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgaXRlcmF0ZShcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBkaXJlY3Rpb24/OiBJREJDdXJzb3JEaXJlY3Rpb24sXG4gICk6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxcbiAgICBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZTxcbiAgICAgIERCVHlwZXMsXG4gICAgICBUeFN0b3JlcyxcbiAgICAgIFN0b3JlTmFtZSxcbiAgICAgIEluZGV4TmFtZSxcbiAgICAgIE1vZGVcbiAgICA+XG4gID47XG59XG5cbnR5cGUgSURCUEN1cnNvckV4dGVuZHMgPSBPbWl0PFxuICBJREJDdXJzb3IsXG4gIHwgJ2tleSdcbiAgfCAncHJpbWFyeUtleSdcbiAgfCAnc291cmNlJ1xuICB8ICdhZHZhbmNlJ1xuICB8ICdjb250aW51ZSdcbiAgfCAnY29udGludWVQcmltYXJ5S2V5J1xuICB8ICdkZWxldGUnXG4gIHwgJ3VwZGF0ZSdcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUEN1cnNvcjxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24gPSB1bmtub3duLFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQQ3Vyc29yRXh0ZW5kcyB7XG4gIC8qKlxuICAgKiBUaGUga2V5IG9mIHRoZSBjdXJyZW50IGluZGV4IG9yIG9iamVjdCBzdG9yZSBpdGVtLlxuICAgKi9cbiAgcmVhZG9ubHkga2V5OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+O1xuICAvKipcbiAgICogVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3Qgc3RvcmUgaXRlbS5cbiAgICovXG4gIHJlYWRvbmx5IHByaW1hcnlLZXk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT47XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJREJPYmplY3RTdG9yZSBvciBJREJJbmRleCB0aGUgY3Vyc29yIHdhcyBvcGVuZWQgZnJvbS5cbiAgICovXG4gIHJlYWRvbmx5IHNvdXJjZTogQ3Vyc29yU291cmNlPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT47XG4gIC8qKlxuICAgKiBBZHZhbmNlcyB0aGUgY3Vyc29yIGEgZ2l2ZW4gbnVtYmVyIG9mIHJlY29yZHMuXG4gICAqXG4gICAqIFJlc29sdmVzIHRvIG51bGwgaWYgbm8gbWF0Y2hpbmcgcmVjb3JkcyByZW1haW4uXG4gICAqL1xuICBhZHZhbmNlPFQ+KHRoaXM6IFQsIGNvdW50OiBudW1iZXIpOiBQcm9taXNlPFQgfCBudWxsPjtcbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIGN1cnNvciBieSBvbmUgcmVjb3JkICh1bmxlc3MgJ2tleScgaXMgcHJvdmlkZWQpLlxuICAgKlxuICAgKiBSZXNvbHZlcyB0byBudWxsIGlmIG5vIG1hdGNoaW5nIHJlY29yZHMgcmVtYWluLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWU8VD4oXG4gICAgdGhpczogVCxcbiAgICBrZXk/OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+LFxuICApOiBQcm9taXNlPFQgfCBudWxsPjtcbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIGN1cnNvciBieSBnaXZlbiBrZXlzLlxuICAgKlxuICAgKiBUaGUgb3BlcmF0aW9uIGlzICdhbmQnIFx1MjAxMyBib3RoIGtleXMgbXVzdCBiZSBzYXRpc2ZpZWQuXG4gICAqXG4gICAqIFJlc29sdmVzIHRvIG51bGwgaWYgbm8gbWF0Y2hpbmcgcmVjb3JkcyByZW1haW4uXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgQWR2YW5jZSB0byB0aGUgaW5kZXggb3Igb2JqZWN0IHN0b3JlIHdpdGggYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqIEBwYXJhbSBwcmltYXJ5S2V5IGFuZCB3aGVyZSB0aGUgb2JqZWN0IHN0b3JlIGhhcyBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICovXG4gIGNvbnRpbnVlUHJpbWFyeUtleTxUPihcbiAgICB0aGlzOiBULFxuICAgIGtleTogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPixcbiAgICBwcmltYXJ5S2V5OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+LFxuICApOiBQcm9taXNlPFQgfCBudWxsPjtcbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgY3VycmVudCByZWNvcmQuXG4gICAqL1xuICBkZWxldGU6IE1vZGUgZXh0ZW5kcyAncmVhZG9ubHknID8gdW5kZWZpbmVkIDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgLyoqXG4gICAqIFVwZGF0ZWQgdGhlIGN1cnJlbnQgcmVjb3JkLlxuICAgKi9cbiAgdXBkYXRlOiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5J1xuICAgID8gdW5kZWZpbmVkXG4gICAgOiAoXG4gICAgICAgIHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT4sXG4gICAgICApID0+IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPj47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIGN1cnNvci5cbiAgICovXG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFxuICAgIElEQlBDdXJzb3JJdGVyYXRvclZhbHVlPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT5cbiAgPjtcbn1cblxudHlwZSBJREJQQ3Vyc29ySXRlcmF0b3JWYWx1ZUV4dGVuZHM8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+ID0gT21pdDxcbiAgSURCUEN1cnNvcjxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+LFxuICAnYWR2YW5jZScgfCAnY29udGludWUnIHwgJ2NvbnRpbnVlUHJpbWFyeUtleSdcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUEN1cnNvckl0ZXJhdG9yVmFsdWU8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUEN1cnNvckl0ZXJhdG9yVmFsdWVFeHRlbmRzPFxuICAgIERCVHlwZXMsXG4gICAgVHhTdG9yZXMsXG4gICAgU3RvcmVOYW1lLFxuICAgIEluZGV4TmFtZSxcbiAgICBNb2RlXG4gID4ge1xuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIGN1cnNvciBhIGdpdmVuIG51bWJlciBvZiByZWNvcmRzLlxuICAgKi9cbiAgYWR2YW5jZTxUPih0aGlzOiBULCBjb3VudDogbnVtYmVyKTogdm9pZDtcbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIGN1cnNvciBieSBvbmUgcmVjb3JkICh1bmxlc3MgJ2tleScgaXMgcHJvdmlkZWQpLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWU8VD4odGhpczogVCwga2V5PzogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPik6IHZvaWQ7XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgZ2l2ZW4ga2V5cy5cbiAgICpcbiAgICogVGhlIG9wZXJhdGlvbiBpcyAnYW5kJyBcdTIwMTMgYm90aCBrZXlzIG11c3QgYmUgc2F0aXNmaWVkLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKiBAcGFyYW0gcHJpbWFyeUtleSBhbmQgd2hlcmUgdGhlIG9iamVjdCBzdG9yZSBoYXMgYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqL1xuICBjb250aW51ZVByaW1hcnlLZXk8VD4oXG4gICAgdGhpczogVCxcbiAgICBrZXk6IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4sXG4gICAgcHJpbWFyeUtleTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJREJQQ3Vyc29yV2l0aFZhbHVlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBDdXJzb3I8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPiB7XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgaXRlbS5cbiAgICovXG4gIHJlYWRvbmx5IHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIGN1cnNvci5cbiAgICovXG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFxuICAgIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlPFxuICAgICAgREJUeXBlcyxcbiAgICAgIFR4U3RvcmVzLFxuICAgICAgU3RvcmVOYW1lLFxuICAgICAgSW5kZXhOYW1lLFxuICAgICAgTW9kZVxuICAgID5cbiAgPjtcbn1cblxuLy8gU29tZSBvZiB0aGF0IHN3ZWVlZWV0IEphdmEtZXNxdWUgbmFtaW5nLlxudHlwZSBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZUV4dGVuZHM8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+ID0gT21pdDxcbiAgSURCUEN1cnNvcldpdGhWYWx1ZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+LFxuICAnYWR2YW5jZScgfCAnY29udGludWUnIHwgJ2NvbnRpbnVlUHJpbWFyeUtleSdcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWVFeHRlbmRzPFxuICAgIERCVHlwZXMsXG4gICAgVHhTdG9yZXMsXG4gICAgU3RvcmVOYW1lLFxuICAgIEluZGV4TmFtZSxcbiAgICBNb2RlXG4gID4ge1xuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIGN1cnNvciBhIGdpdmVuIG51bWJlciBvZiByZWNvcmRzLlxuICAgKi9cbiAgYWR2YW5jZTxUPih0aGlzOiBULCBjb3VudDogbnVtYmVyKTogdm9pZDtcbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIGN1cnNvciBieSBvbmUgcmVjb3JkICh1bmxlc3MgJ2tleScgaXMgcHJvdmlkZWQpLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWU8VD4odGhpczogVCwga2V5PzogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPik6IHZvaWQ7XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgZ2l2ZW4ga2V5cy5cbiAgICpcbiAgICogVGhlIG9wZXJhdGlvbiBpcyAnYW5kJyBcdTIwMTMgYm90aCBrZXlzIG11c3QgYmUgc2F0aXNmaWVkLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKiBAcGFyYW0gcHJpbWFyeUtleSBhbmQgd2hlcmUgdGhlIG9iamVjdCBzdG9yZSBoYXMgYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqL1xuICBjb250aW51ZVByaW1hcnlLZXk8VD4oXG4gICAgdGhpczogVCxcbiAgICBrZXk6IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4sXG4gICAgcHJpbWFyeUtleTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBGdW5jIH0gZnJvbSAnLi91dGlsLmpzJztcbmltcG9ydCB7IHJlcGxhY2VUcmFwcyB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuaW1wb3J0IHsgSURCUERhdGFiYXNlLCBJREJQSW5kZXggfSBmcm9tICcuL2VudHJ5LmpzJztcblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwPHN0cmluZywgRnVuYz4oKTtcblxuZnVuY3Rpb24gZ2V0TWV0aG9kKFxuICB0YXJnZXQ6IGFueSxcbiAgcHJvcDogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sLFxuKTogRnVuYyB8IHVuZGVmaW5lZCB7XG4gIGlmIChcbiAgICAhKFxuICAgICAgdGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICEocHJvcCBpbiB0YXJnZXQpICYmXG4gICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZydcbiAgICApXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSkgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuXG4gIGNvbnN0IHRhcmdldEZ1bmNOYW1lOiBzdHJpbmcgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gIGNvbnN0IGlzV3JpdGUgPSB3cml0ZU1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpO1xuXG4gIGlmIChcbiAgICAvLyBCYWlsIGlmIHRoZSB0YXJnZXQgZG9lc24ndCBleGlzdCBvbiB0aGUgdGFyZ2V0LiBFZywgZ2V0QWxsIGlzbid0IGluIEVkZ2UuXG4gICAgISh0YXJnZXRGdW5jTmFtZSBpbiAodXNlSW5kZXggPyBJREJJbmRleCA6IElEQk9iamVjdFN0b3JlKS5wcm90b3R5cGUpIHx8XG4gICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSlcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gYXN5bmMgZnVuY3Rpb24gKFxuICAgIHRoaXM6IElEQlBEYXRhYmFzZSxcbiAgICBzdG9yZU5hbWU6IHN0cmluZyxcbiAgICAuLi5hcmdzOiBhbnlbXVxuICApIHtcbiAgICAvLyBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiB1bmRlZmluZWQgZ3ppcHBzIGJldHRlciwgYnV0IGZhaWxzIGluIEVkZ2UgOihcbiAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICBsZXQgdGFyZ2V0OlxuICAgICAgfCB0eXBlb2YgdHguc3RvcmVcbiAgICAgIHwgSURCUEluZGV4PHVua25vd24sIHN0cmluZ1tdLCBzdHJpbmcsIHN0cmluZywgJ3JlYWR3cml0ZScgfCAncmVhZG9ubHknPiA9XG4gICAgICB0eC5zdG9yZTtcbiAgICBpZiAodXNlSW5kZXgpIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuXG4gICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgLy8gTXVzdCByZWplY3Qgd2l0aCBvcCByZWplY3Rpb24gZmlyc3QuXG4gICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgcmV0dXJuIChcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgKHRhcmdldCBhcyBhbnkpW3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgaXNXcml0ZSAmJiB0eC5kb25lLFxuICAgICAgXSlcbiAgICApWzBdO1xuICB9O1xuXG4gIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gIHJldHVybiBtZXRob2Q7XG59XG5cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gIC4uLm9sZFRyYXBzLFxuICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PlxuICAgIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmdldCEodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gIGhhczogKHRhcmdldCwgcHJvcCkgPT5cbiAgICAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyEodGFyZ2V0LCBwcm9wKSxcbn0pKTtcbiIsICIvLyBAdHMtaWdub3JlXG50cnl7c2VsZlsnd29ya2JveDpleHBpcmF0aW9uOjcuMC4wJ10mJl8oKX1jYXRjaChlKXt9IiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtvcGVuREIsIERCU2NoZW1hLCBJREJQRGF0YWJhc2UsIGRlbGV0ZURCfSBmcm9tICdpZGInO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmNvbnN0IERCX05BTUUgPSAnd29ya2JveC1leHBpcmF0aW9uJztcbmNvbnN0IENBQ0hFX09CSkVDVF9TVE9SRSA9ICdjYWNoZS1lbnRyaWVzJztcblxuY29uc3Qgbm9ybWFsaXplVVJMID0gKHVuTm9ybWFsaXplZFVybDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwodW5Ob3JtYWxpemVkVXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgdXJsLmhhc2ggPSAnJztcblxuICByZXR1cm4gdXJsLmhyZWY7XG59O1xuXG5pbnRlcmZhY2UgQ2FjaGVUaW1lc3RhbXBzTW9kZWxFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNhY2hlTmFtZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDYWNoZURiU2NoZW1hIGV4dGVuZHMgREJTY2hlbWEge1xuICAnY2FjaGUtZW50cmllcyc6IHtcbiAgICBrZXk6IHN0cmluZztcbiAgICB2YWx1ZTogQ2FjaGVUaW1lc3RhbXBzTW9kZWxFbnRyeTtcbiAgICBpbmRleGVzOiB7Y2FjaGVOYW1lOiBzdHJpbmc7IHRpbWVzdGFtcDogbnVtYmVyfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0aW1lc3RhbXAgbW9kZWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgQ2FjaGVUaW1lc3RhbXBzTW9kZWwge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jYWNoZU5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGI6IElEQlBEYXRhYmFzZTxDYWNoZURiU2NoZW1hPiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYWNoZU5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhbiB1cGdyYWRlIG9mIGluZGV4ZWREQi5cbiAgICpcbiAgICogQHBhcmFtIHtJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT59IGRiXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF91cGdyYWRlRGIoZGI6IElEQlBEYXRhYmFzZTxDYWNoZURiU2NoZW1hPikge1xuICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogRWRnZUhUTUwgZG9lc24ndCBzdXBwb3J0IGFycmF5cyBhcyBhIGtleVBhdGgsIHNvIHdlXG4gICAgLy8gaGF2ZSB0byB1c2UgdGhlIGBpZGAga2V5UGF0aCBoZXJlIGFuZCBjcmVhdGUgb3VyIG93biB2YWx1ZXMgKGFcbiAgICAvLyBjb25jYXRlbmF0aW9uIG9mIGB1cmwgKyBjYWNoZU5hbWVgKSBpbnN0ZWFkIG9mIHNpbXBseSB1c2luZ1xuICAgIC8vIGBrZXlQYXRoOiBbJ3VybCcsICdjYWNoZU5hbWUnXWAsIHdoaWNoIGlzIHN1cHBvcnRlZCBpbiBvdGhlciBicm93c2Vycy5cbiAgICBjb25zdCBvYmpTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKENBQ0hFX09CSkVDVF9TVE9SRSwge2tleVBhdGg6ICdpZCd9KTtcblxuICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogb25jZSB3ZSBkb24ndCBoYXZlIHRvIHN1cHBvcnQgRWRnZUhUTUwsIHdlIGNhblxuICAgIC8vIGNyZWF0ZSBhIHNpbmdsZSBpbmRleCB3aXRoIHRoZSBrZXlQYXRoIGBbJ2NhY2hlTmFtZScsICd0aW1lc3RhbXAnXWBcbiAgICAvLyBpbnN0ZWFkIG9mIGRvaW5nIGJvdGggdGhlc2UgaW5kZXhlcy5cbiAgICBvYmpTdG9yZS5jcmVhdGVJbmRleCgnY2FjaGVOYW1lJywgJ2NhY2hlTmFtZScsIHt1bmlxdWU6IGZhbHNlfSk7XG4gICAgb2JqU3RvcmUuY3JlYXRlSW5kZXgoJ3RpbWVzdGFtcCcsICd0aW1lc3RhbXAnLCB7dW5pcXVlOiBmYWxzZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGFuIHVwZ3JhZGUgb2YgaW5kZXhlZERCIGFuZCBkZWxldGVzIGRlcHJlY2F0ZWQgREJzLlxuICAgKlxuICAgKiBAcGFyYW0ge0lEQlBEYXRhYmFzZTxDYWNoZURiU2NoZW1hPn0gZGJcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX3VwZ3JhZGVEYkFuZERlbGV0ZU9sZERicyhkYjogSURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+KSB7XG4gICAgdGhpcy5fdXBncmFkZURiKGRiKTtcbiAgICBpZiAodGhpcy5fY2FjaGVOYW1lKSB7XG4gICAgICB2b2lkIGRlbGV0ZURCKHRoaXMuX2NhY2hlTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgc2V0VGltZXN0YW1wKHVybDogc3RyaW5nLCB0aW1lc3RhbXA6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHVybCA9IG5vcm1hbGl6ZVVSTCh1cmwpO1xuXG4gICAgY29uc3QgZW50cnk6IENhY2hlVGltZXN0YW1wc01vZGVsRW50cnkgPSB7XG4gICAgICB1cmwsXG4gICAgICB0aW1lc3RhbXAsXG4gICAgICBjYWNoZU5hbWU6IHRoaXMuX2NhY2hlTmFtZSxcbiAgICAgIC8vIENyZWF0aW5nIGFuIElEIGZyb20gdGhlIFVSTCBhbmQgY2FjaGUgbmFtZSB3b24ndCBiZSBuZWNlc3Nhcnkgb25jZVxuICAgICAgLy8gRWRnZSBzd2l0Y2hlcyB0byBDaHJvbWl1bSBhbmQgYWxsIGJyb3dzZXJzIHdlIHN1cHBvcnQgd29yayB3aXRoXG4gICAgICAvLyBhcnJheSBrZXlQYXRocy5cbiAgICAgIGlkOiB0aGlzLl9nZXRJZCh1cmwpLFxuICAgIH07XG4gICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmdldERiKCk7XG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihDQUNIRV9PQkpFQ1RfU1RPUkUsICdyZWFkd3JpdGUnLCB7XG4gICAgICBkdXJhYmlsaXR5OiAncmVsYXhlZCcsXG4gICAgfSk7XG4gICAgYXdhaXQgdHguc3RvcmUucHV0KGVudHJ5KTtcbiAgICBhd2FpdCB0eC5kb25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRpbWVzdGFtcCBzdG9yZWQgZm9yIGEgZ2l2ZW4gVVJMLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEByZXR1cm4ge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIGdldFRpbWVzdGFtcCh1cmw6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmdldERiKCk7XG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCBkYi5nZXQoQ0FDSEVfT0JKRUNUX1NUT1JFLCB0aGlzLl9nZXRJZCh1cmwpKTtcbiAgICByZXR1cm4gZW50cnk/LnRpbWVzdGFtcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGFsbCB0aGUgZW50cmllcyBpbiB0aGUgb2JqZWN0IHN0b3JlIChmcm9tIG5ld2VzdCB0b1xuICAgKiBvbGRlc3QpIGFuZCByZW1vdmVzIGVudHJpZXMgb25jZSBlaXRoZXIgYG1heENvdW50YCBpcyByZWFjaGVkIG9yIHRoZVxuICAgKiBlbnRyeSdzIHRpbWVzdGFtcCBpcyBsZXNzIHRoYW4gYG1pblRpbWVzdGFtcGAuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5UaW1lc3RhbXBcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heENvdW50XG4gICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBleHBpcmVFbnRyaWVzKFxuICAgIG1pblRpbWVzdGFtcDogbnVtYmVyLFxuICAgIG1heENvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmdldERiKCk7XG4gICAgbGV0IGN1cnNvciA9IGF3YWl0IGRiXG4gICAgICAudHJhbnNhY3Rpb24oQ0FDSEVfT0JKRUNUX1NUT1JFKVxuICAgICAgLnN0b3JlLmluZGV4KCd0aW1lc3RhbXAnKVxuICAgICAgLm9wZW5DdXJzb3IobnVsbCwgJ3ByZXYnKTtcbiAgICBjb25zdCBlbnRyaWVzVG9EZWxldGU6IENhY2hlVGltZXN0YW1wc01vZGVsRW50cnlbXSA9IFtdO1xuICAgIGxldCBlbnRyaWVzTm90RGVsZXRlZENvdW50ID0gMDtcbiAgICB3aGlsZSAoY3Vyc29yKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjdXJzb3IudmFsdWU7XG4gICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG9uY2Ugd2UgY2FuIHVzZSBhIG11bHRpLWtleSBpbmRleCwgd2VcbiAgICAgIC8vIHdvbid0IGhhdmUgdG8gY2hlY2sgYGNhY2hlTmFtZWAgaGVyZS5cbiAgICAgIGlmIChyZXN1bHQuY2FjaGVOYW1lID09PSB0aGlzLl9jYWNoZU5hbWUpIHtcbiAgICAgICAgLy8gRGVsZXRlIGFuIGVudHJ5IGlmIGl0J3Mgb2xkZXIgdGhhbiB0aGUgbWF4IGFnZSBvclxuICAgICAgICAvLyBpZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIG1heCBudW1iZXIgYWxsb3dlZC5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIChtaW5UaW1lc3RhbXAgJiYgcmVzdWx0LnRpbWVzdGFtcCA8IG1pblRpbWVzdGFtcCkgfHxcbiAgICAgICAgICAobWF4Q291bnQgJiYgZW50cmllc05vdERlbGV0ZWRDb3VudCA+PSBtYXhDb3VudClcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiB3ZSBzaG91bGQgYmUgYWJsZSB0byBkZWxldGUgdGhlXG4gICAgICAgICAgLy8gZW50cnkgcmlnaHQgaGVyZSwgYnV0IGRvaW5nIHNvIGNhdXNlcyBhbiBpdGVyYXRpb25cbiAgICAgICAgICAvLyBidWcgaW4gU2FmYXJpIHN0YWJsZSAoZml4ZWQgaW4gVFApLiBJbnN0ZWFkIHdlIGNhblxuICAgICAgICAgIC8vIHN0b3JlIHRoZSBrZXlzIG9mIHRoZSBlbnRyaWVzIHRvIGRlbGV0ZSwgYW5kIHRoZW5cbiAgICAgICAgICAvLyBkZWxldGUgdGhlIHNlcGFyYXRlIHRyYW5zYWN0aW9ucy5cbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE5NzhcbiAgICAgICAgICAvLyBjdXJzb3IuZGVsZXRlKCk7XG5cbiAgICAgICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gcmV0dXJuIHRoZSBVUkwsIG5vdCB0aGUgd2hvbGUgZW50cnkuXG4gICAgICAgICAgZW50cmllc1RvRGVsZXRlLnB1c2goY3Vyc29yLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnRyaWVzTm90RGVsZXRlZENvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN1cnNvciA9IGF3YWl0IGN1cnNvci5jb250aW51ZSgpO1xuICAgIH1cblxuICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogb25jZSB0aGUgU2FmYXJpIGJ1ZyBpbiB0aGUgZm9sbG93aW5nIGlzc3VlIGlzIGZpeGVkLFxuICAgIC8vIHdlIHNob3VsZCBiZSBhYmxlIHRvIHJlbW92ZSB0aGlzIGxvb3AgYW5kIGRvIHRoZSBlbnRyeSBkZWxldGlvbiBpbiB0aGVcbiAgICAvLyBjdXJzb3IgbG9vcCBhYm92ZTpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE5NzhcbiAgICBjb25zdCB1cmxzRGVsZXRlZDogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXNUb0RlbGV0ZSkge1xuICAgICAgYXdhaXQgZGIuZGVsZXRlKENBQ0hFX09CSkVDVF9TVE9SRSwgZW50cnkuaWQpO1xuICAgICAgdXJsc0RlbGV0ZWQucHVzaChlbnRyeS51cmwpO1xuICAgIH1cblxuICAgIHJldHVybiB1cmxzRGVsZXRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyBhIFVSTCBhbmQgcmV0dXJucyBhbiBJRCB0aGF0IHdpbGwgYmUgdW5pcXVlIGluIHRoZSBvYmplY3Qgc3RvcmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0SWQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIENyZWF0aW5nIGFuIElEIGZyb20gdGhlIFVSTCBhbmQgY2FjaGUgbmFtZSB3b24ndCBiZSBuZWNlc3Nhcnkgb25jZVxuICAgIC8vIEVkZ2Ugc3dpdGNoZXMgdG8gQ2hyb21pdW0gYW5kIGFsbCBicm93c2VycyB3ZSBzdXBwb3J0IHdvcmsgd2l0aFxuICAgIC8vIGFycmF5IGtleVBhdGhzLlxuICAgIHJldHVybiB0aGlzLl9jYWNoZU5hbWUgKyAnfCcgKyBub3JtYWxpemVVUkwodXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9wZW4gY29ubmVjdGlvbiB0byB0aGUgZGF0YWJhc2UuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGdldERiKCkge1xuICAgIGlmICghdGhpcy5fZGIpIHtcbiAgICAgIHRoaXMuX2RiID0gYXdhaXQgb3BlbkRCKERCX05BTUUsIDEsIHtcbiAgICAgICAgdXBncmFkZTogdGhpcy5fdXBncmFkZURiQW5kRGVsZXRlT2xkRGJzLmJpbmQodGhpcyksXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2RiO1xuICB9XG59XG5cbmV4cG9ydCB7Q2FjaGVUaW1lc3RhbXBzTW9kZWx9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtkb250V2FpdEZvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2RvbnRXYWl0Rm9yLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcblxuaW1wb3J0IHtDYWNoZVRpbWVzdGFtcHNNb2RlbH0gZnJvbSAnLi9tb2RlbHMvQ2FjaGVUaW1lc3RhbXBzTW9kZWwuanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5pbnRlcmZhY2UgQ2FjaGVFeHBpcmF0aW9uQ29uZmlnIHtcbiAgbWF4RW50cmllcz86IG51bWJlcjtcbiAgbWF4QWdlU2Vjb25kcz86IG51bWJlcjtcbiAgbWF0Y2hPcHRpb25zPzogQ2FjaGVRdWVyeU9wdGlvbnM7XG59XG5cbi8qKlxuICogVGhlIGBDYWNoZUV4cGlyYXRpb25gIGNsYXNzIGFsbG93cyB5b3UgZGVmaW5lIGFuIGV4cGlyYXRpb24gYW5kIC8gb3JcbiAqIGxpbWl0IG9uIHRoZSBudW1iZXIgb2YgcmVzcG9uc2VzIHN0b3JlZCBpbiBhXG4gKiBbYENhY2hlYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlKS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1leHBpcmF0aW9uXG4gKi9cbmNsYXNzIENhY2hlRXhwaXJhdGlvbiB7XG4gIHByaXZhdGUgX2lzUnVubmluZyA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXJ1blJlcXVlc3RlZCA9IGZhbHNlO1xuICBwcml2YXRlIHJlYWRvbmx5IF9tYXhFbnRyaWVzPzogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IF9tYXhBZ2VTZWNvbmRzPzogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IF9tYXRjaE9wdGlvbnM/OiBDYWNoZVF1ZXJ5T3B0aW9ucztcbiAgcHJpdmF0ZSByZWFkb25seSBfY2FjaGVOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3RpbWVzdGFtcE1vZGVsOiBDYWNoZVRpbWVzdGFtcHNNb2RlbDtcblxuICAvKipcbiAgICogVG8gY29uc3RydWN0IGEgbmV3IENhY2hlRXhwaXJhdGlvbiBpbnN0YW5jZSB5b3UgbXVzdCBwcm92aWRlIGF0IGxlYXN0XG4gICAqIG9uZSBvZiB0aGUgYGNvbmZpZ2AgcHJvcGVydGllcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhY2hlTmFtZSBOYW1lIG9mIHRoZSBjYWNoZSB0byBhcHBseSByZXN0cmljdGlvbnMgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4RW50cmllc10gVGhlIG1heGltdW0gbnVtYmVyIG9mIGVudHJpZXMgdG8gY2FjaGUuXG4gICAqIEVudHJpZXMgdXNlZCB0aGUgbGVhc3Qgd2lsbCBiZSByZW1vdmVkIGFzIHRoZSBtYXhpbXVtIGlzIHJlYWNoZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEFnZVNlY29uZHNdIFRoZSBtYXhpbXVtIGFnZSBvZiBhbiBlbnRyeSBiZWZvcmVcbiAgICogaXQncyB0cmVhdGVkIGFzIHN0YWxlIGFuZCByZW1vdmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZy5tYXRjaE9wdGlvbnNdIFRoZSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlL2RlbGV0ZSNQYXJhbWV0ZXJzKVxuICAgKiB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYGRlbGV0ZSgpYCBvbiB0aGUgY2FjaGUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYWNoZU5hbWU6IHN0cmluZywgY29uZmlnOiBDYWNoZUV4cGlyYXRpb25Db25maWcgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzVHlwZShjYWNoZU5hbWUsICdzdHJpbmcnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnY2FjaGVOYW1lJyxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIShjb25maWcubWF4RW50cmllcyB8fCBjb25maWcubWF4QWdlU2Vjb25kcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLm1heEVudHJpZXMpIHtcbiAgICAgICAgYXNzZXJ0IS5pc1R5cGUoY29uZmlnLm1heEVudHJpZXMsICdudW1iZXInLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4RW50cmllcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLm1heEFnZVNlY29uZHMpIHtcbiAgICAgICAgYXNzZXJ0IS5pc1R5cGUoY29uZmlnLm1heEFnZVNlY29uZHMsICdudW1iZXInLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4QWdlU2Vjb25kcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX21heEVudHJpZXMgPSBjb25maWcubWF4RW50cmllcztcbiAgICB0aGlzLl9tYXhBZ2VTZWNvbmRzID0gY29uZmlnLm1heEFnZVNlY29uZHM7XG4gICAgdGhpcy5fbWF0Y2hPcHRpb25zID0gY29uZmlnLm1hdGNoT3B0aW9ucztcbiAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWU7XG4gICAgdGhpcy5fdGltZXN0YW1wTW9kZWwgPSBuZXcgQ2FjaGVUaW1lc3RhbXBzTW9kZWwoY2FjaGVOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBpcmVzIGVudHJpZXMgZm9yIHRoZSBnaXZlbiBjYWNoZSBhbmQgZ2l2ZW4gY3JpdGVyaWEuXG4gICAqL1xuICBhc3luYyBleHBpcmVFbnRyaWVzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLl9pc1J1bm5pbmcpIHtcbiAgICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXNSdW5uaW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IG1pblRpbWVzdGFtcCA9IHRoaXMuX21heEFnZVNlY29uZHNcbiAgICAgID8gRGF0ZS5ub3coKSAtIHRoaXMuX21heEFnZVNlY29uZHMgKiAxMDAwXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCB1cmxzRXhwaXJlZCA9IGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmV4cGlyZUVudHJpZXMoXG4gICAgICBtaW5UaW1lc3RhbXAsXG4gICAgICB0aGlzLl9tYXhFbnRyaWVzLFxuICAgICk7XG5cbiAgICAvLyBEZWxldGUgVVJMcyBmcm9tIHRoZSBjYWNoZVxuICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbih0aGlzLl9jYWNoZU5hbWUpO1xuICAgIGZvciAoY29uc3QgdXJsIG9mIHVybHNFeHBpcmVkKSB7XG4gICAgICBhd2FpdCBjYWNoZS5kZWxldGUodXJsLCB0aGlzLl9tYXRjaE9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodXJsc0V4cGlyZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgYEV4cGlyZWQgJHt1cmxzRXhwaXJlZC5sZW5ndGh9IGAgK1xuICAgICAgICAgICAgYCR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID8gJ2VudHJ5JyA6ICdlbnRyaWVzJ30gYW5kIHJlbW92ZWQgYCArXG4gICAgICAgICAgICBgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgPyAnaXQnIDogJ3RoZW0nfSBmcm9tIHRoZSBgICtcbiAgICAgICAgICAgIGAnJHt0aGlzLl9jYWNoZU5hbWV9JyBjYWNoZS5gLFxuICAgICAgICApO1xuICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgIGBFeHBpcmVkIHRoZSBmb2xsb3dpbmcgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgPyAnVVJMJyA6ICdVUkxzJ306YCxcbiAgICAgICAgKTtcbiAgICAgICAgdXJsc0V4cGlyZWQuZm9yRWFjaCgodXJsKSA9PiBsb2dnZXIubG9nKGAgICAgJHt1cmx9YCkpO1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgQ2FjaGUgZXhwaXJhdGlvbiByYW4gYW5kIGZvdW5kIG5vIGVudHJpZXMgdG8gcmVtb3ZlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2lzUnVubmluZyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9yZXJ1blJlcXVlc3RlZCkge1xuICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgIGRvbnRXYWl0Rm9yKHRoaXMuZXhwaXJlRW50cmllcygpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSB0aW1lc3RhbXAgZm9yIHRoZSBnaXZlbiBVUkwuIFRoaXMgZW5zdXJlcyB0aGUgd2hlblxuICAgKiByZW1vdmluZyBlbnRyaWVzIGJhc2VkIG9uIG1heGltdW0gZW50cmllcywgbW9zdCByZWNlbnRseSB1c2VkXG4gICAqIGlzIGFjY3VyYXRlIG9yIHdoZW4gZXhwaXJpbmcsIHRoZSB0aW1lc3RhbXAgaXMgdXAtdG8tZGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgYXN5bmMgdXBkYXRlVGltZXN0YW1wKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNUeXBlKHVybCwgJ3N0cmluZycsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgIGZ1bmNOYW1lOiAndXBkYXRlVGltZXN0YW1wJyxcbiAgICAgICAgcGFyYW1OYW1lOiAndXJsJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLnNldFRpbWVzdGFtcCh1cmwsIERhdGUubm93KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbiBiZSB1c2VkIHRvIGNoZWNrIGlmIGEgVVJMIGhhcyBleHBpcmVkIG9yIG5vdCBiZWZvcmUgaXQncyB1c2VkLlxuICAgKlxuICAgKiBUaGlzIHJlcXVpcmVzIGEgbG9vayB1cCBmcm9tIEluZGV4ZWREQiwgc28gY2FuIGJlIHNsb3cuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgbWV0aG9kIHdpbGwgbm90IHJlbW92ZSB0aGUgY2FjaGVkIGVudHJ5LCBjYWxsXG4gICAqIGBleHBpcmVFbnRyaWVzKClgIHRvIHJlbW92ZSBpbmRleGVkREIgYW5kIENhY2hlIGVudHJpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFzeW5jIGlzVVJMRXhwaXJlZCh1cmw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghdGhpcy5fbWF4QWdlU2Vjb25kcykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcihgZXhwaXJlZC10ZXN0LXdpdGhvdXQtbWF4LWFnZWAsIHtcbiAgICAgICAgICBtZXRob2ROYW1lOiAnaXNVUkxFeHBpcmVkJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdtYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmdldFRpbWVzdGFtcCh1cmwpO1xuICAgICAgY29uc3QgZXhwaXJlT2xkZXJUaGFuID0gRGF0ZS5ub3coKSAtIHRoaXMuX21heEFnZVNlY29uZHMgKiAxMDAwO1xuICAgICAgcmV0dXJuIHRpbWVzdGFtcCAhPT0gdW5kZWZpbmVkID8gdGltZXN0YW1wIDwgZXhwaXJlT2xkZXJUaGFuIDogdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgSW5kZXhlZERCIG9iamVjdCBzdG9yZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgY2FjaGUgZXhwaXJhdGlvblxuICAgKiBtZXRhZGF0YS5cbiAgICovXG4gIGFzeW5jIGRlbGV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgYXR0ZW1wdCBhbm90aGVyIHJlcnVuIGlmIHdlJ3JlIGNhbGxlZCBpbiB0aGUgbWlkZGxlIG9mXG4gICAgLy8gYSBjYWNoZSBleHBpcmF0aW9uLlxuICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZXhwaXJlRW50cmllcyhJbmZpbml0eSk7IC8vIEV4cGlyZXMgYWxsLlxuICB9XG59XG5cbmV4cG9ydCB7Q2FjaGVFeHBpcmF0aW9ufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5kZWNsYXJlIGxldCByZWdpc3RyYXRpb246IFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVOYW1lRGV0YWlscyB7XG4gIGdvb2dsZUFuYWx5dGljczogc3RyaW5nO1xuICBwcmVjYWNoZTogc3RyaW5nO1xuICBwcmVmaXg6IHN0cmluZztcbiAgcnVudGltZTogc3RyaW5nO1xuICBzdWZmaXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJ0aWFsQ2FjaGVOYW1lRGV0YWlscyB7XG4gIFtwcm9wTmFtZTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBDYWNoZU5hbWVEZXRhaWxzUHJvcCA9XG4gIHwgJ2dvb2dsZUFuYWx5dGljcydcbiAgfCAncHJlY2FjaGUnXG4gIHwgJ3ByZWZpeCdcbiAgfCAncnVudGltZSdcbiAgfCAnc3VmZml4JztcblxuY29uc3QgX2NhY2hlTmFtZURldGFpbHM6IENhY2hlTmFtZURldGFpbHMgPSB7XG4gIGdvb2dsZUFuYWx5dGljczogJ2dvb2dsZUFuYWx5dGljcycsXG4gIHByZWNhY2hlOiAncHJlY2FjaGUtdjInLFxuICBwcmVmaXg6ICd3b3JrYm94JyxcbiAgcnVudGltZTogJ3J1bnRpbWUnLFxuICBzdWZmaXg6IHR5cGVvZiByZWdpc3RyYXRpb24gIT09ICd1bmRlZmluZWQnID8gcmVnaXN0cmF0aW9uLnNjb3BlIDogJycsXG59O1xuXG5jb25zdCBfY3JlYXRlQ2FjaGVOYW1lID0gKGNhY2hlTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIFtfY2FjaGVOYW1lRGV0YWlscy5wcmVmaXgsIGNhY2hlTmFtZSwgX2NhY2hlTmFtZURldGFpbHMuc3VmZml4XVxuICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwKVxuICAgIC5qb2luKCctJyk7XG59O1xuXG5jb25zdCBlYWNoQ2FjaGVOYW1lRGV0YWlsID0gKGZuOiAoa2V5OiBDYWNoZU5hbWVEZXRhaWxzUHJvcCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhfY2FjaGVOYW1lRGV0YWlscykpIHtcbiAgICBmbihrZXkgYXMgQ2FjaGVOYW1lRGV0YWlsc1Byb3ApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2FjaGVOYW1lcyA9IHtcbiAgdXBkYXRlRGV0YWlsczogKGRldGFpbHM6IFBhcnRpYWxDYWNoZU5hbWVEZXRhaWxzKTogdm9pZCA9PiB7XG4gICAgZWFjaENhY2hlTmFtZURldGFpbCgoa2V5OiBDYWNoZU5hbWVEZXRhaWxzUHJvcCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkZXRhaWxzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIF9jYWNoZU5hbWVEZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGdldEdvb2dsZUFuYWx5dGljc05hbWU6ICh1c2VyQ2FjaGVOYW1lPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLmdvb2dsZUFuYWx5dGljcyk7XG4gIH0sXG4gIGdldFByZWNhY2hlTmFtZTogKHVzZXJDYWNoZU5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMucHJlY2FjaGUpO1xuICB9LFxuICBnZXRQcmVmaXg6ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBfY2FjaGVOYW1lRGV0YWlscy5wcmVmaXg7XG4gIH0sXG4gIGdldFJ1bnRpbWVOYW1lOiAodXNlckNhY2hlTmFtZT86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5ydW50aW1lKTtcbiAgfSxcbiAgZ2V0U3VmZml4OiAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gX2NhY2hlTmFtZURldGFpbHMuc3VmZml4O1xuICB9LFxufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vLyBDYWxsYmFja3MgdG8gYmUgZXhlY3V0ZWQgd2hlbmV2ZXIgdGhlcmUncyBhIHF1b3RhIGVycm9yLlxuLy8gQ2FuJ3QgY2hhbmdlIEZ1bmN0aW9uIHR5cGUgcmlnaHQgbm93LlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmNvbnN0IHF1b3RhRXJyb3JDYWxsYmFja3M6IFNldDxGdW5jdGlvbj4gPSBuZXcgU2V0KCk7XG5cbmV4cG9ydCB7cXVvdGFFcnJvckNhbGxiYWNrc307XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJy4vX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7cXVvdGFFcnJvckNhbGxiYWNrc30gZnJvbSAnLi9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEFkZHMgYSBmdW5jdGlvbiB0byB0aGUgc2V0IG9mIHF1b3RhRXJyb3JDYWxsYmFja3MgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGlmXG4gKiB0aGVyZSdzIGEgcXVvdGEgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWNvcmVcbiAqL1xuLy8gQ2FuJ3QgY2hhbmdlIEZ1bmN0aW9uIHR5cGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5mdW5jdGlvbiByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjayhjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQhLmlzVHlwZShjYWxsYmFjaywgJ2Z1bmN0aW9uJywge1xuICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY29yZScsXG4gICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyJyxcbiAgICAgIHBhcmFtTmFtZTogJ2NhbGxiYWNrJyxcbiAgICB9KTtcbiAgfVxuXG4gIHF1b3RhRXJyb3JDYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlci5sb2coJ1JlZ2lzdGVyZWQgYSBjYWxsYmFjayB0byByZXNwb25kIHRvIHF1b3RhIGVycm9ycy4nLCBjYWxsYmFjayk7XG4gIH1cbn1cblxuZXhwb3J0IHtyZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFja307XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2NhY2hlTmFtZXN9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7ZG9udFdhaXRGb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtyZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFja30gZnJvbSAnd29ya2JveC1jb3JlL3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7V29ya2JveFBsdWdpbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0IHtDYWNoZUV4cGlyYXRpb259IGZyb20gJy4vQ2FjaGVFeHBpcmF0aW9uLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuZXhwb3J0IGludGVyZmFjZSBFeHBpcmF0aW9uUGx1Z2luT3B0aW9ucyB7XG4gIG1heEVudHJpZXM/OiBudW1iZXI7XG4gIG1heEFnZVNlY29uZHM/OiBudW1iZXI7XG4gIG1hdGNoT3B0aW9ucz86IENhY2hlUXVlcnlPcHRpb25zO1xuICBwdXJnZU9uUXVvdGFFcnJvcj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhpcyBwbHVnaW4gY2FuIGJlIHVzZWQgaW4gYSBgd29ya2JveC1zdHJhdGVneWAgdG8gcmVndWxhcmx5IGVuZm9yY2UgYVxuICogbGltaXQgb24gdGhlIGFnZSBhbmQgLyBvciB0aGUgbnVtYmVyIG9mIGNhY2hlZCByZXF1ZXN0cy5cbiAqXG4gKiBJdCBjYW4gb25seSBiZSB1c2VkIHdpdGggYHdvcmtib3gtc3RyYXRlZ3lgIGluc3RhbmNlcyB0aGF0IGhhdmUgYVxuICogW2N1c3RvbSBgY2FjaGVOYW1lYCBwcm9wZXJ0eSBzZXRdKC93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvY29uZmlndXJlLXdvcmtib3gjY3VzdG9tX2NhY2hlX25hbWVzX2luX3N0cmF0ZWdpZXMpLlxuICogSW4gb3RoZXIgd29yZHMsIGl0IGNhbid0IGJlIHVzZWQgdG8gZXhwaXJlIGVudHJpZXMgaW4gc3RyYXRlZ3kgdGhhdCB1c2VzIHRoZVxuICogZGVmYXVsdCBydW50aW1lIGNhY2hlIG5hbWUuXG4gKlxuICogV2hlbmV2ZXIgYSBjYWNoZWQgcmVzcG9uc2UgaXMgdXNlZCBvciB1cGRhdGVkLCB0aGlzIHBsdWdpbiB3aWxsIGxvb2tcbiAqIGF0IHRoZSBhc3NvY2lhdGVkIGNhY2hlIGFuZCByZW1vdmUgYW55IG9sZCBvciBleHRyYSByZXNwb25zZXMuXG4gKlxuICogV2hlbiB1c2luZyBgbWF4QWdlU2Vjb25kc2AsIHJlc3BvbnNlcyBtYXkgYmUgdXNlZCAqb25jZSogYWZ0ZXIgZXhwaXJpbmdcbiAqIGJlY2F1c2UgdGhlIGV4cGlyYXRpb24gY2xlYW4gdXAgd2lsbCBub3QgaGF2ZSBvY2N1cnJlZCB1bnRpbCAqYWZ0ZXIqIHRoZVxuICogY2FjaGVkIHJlc3BvbnNlIGhhcyBiZWVuIHVzZWQuIElmIHRoZSByZXNwb25zZSBoYXMgYSBcIkRhdGVcIiBoZWFkZXIsIHRoZW5cbiAqIGEgbGlnaHQgd2VpZ2h0IGV4cGlyYXRpb24gY2hlY2sgaXMgcGVyZm9ybWVkIGFuZCB0aGUgcmVzcG9uc2Ugd2lsbCBub3QgYmVcbiAqIHVzZWQgaW1tZWRpYXRlbHkuXG4gKlxuICogV2hlbiB1c2luZyBgbWF4RW50cmllc2AsIHRoZSBlbnRyeSBsZWFzdC1yZWNlbnRseSByZXF1ZXN0ZWQgd2lsbCBiZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBjYWNoZSBmaXJzdC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1leHBpcmF0aW9uXG4gKi9cbmNsYXNzIEV4cGlyYXRpb25QbHVnaW4gaW1wbGVtZW50cyBXb3JrYm94UGx1Z2luIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfY29uZmlnOiBFeHBpcmF0aW9uUGx1Z2luT3B0aW9ucztcbiAgcHJpdmF0ZSByZWFkb25seSBfbWF4QWdlU2Vjb25kcz86IG51bWJlcjtcbiAgcHJpdmF0ZSBfY2FjaGVFeHBpcmF0aW9uczogTWFwPHN0cmluZywgQ2FjaGVFeHBpcmF0aW9uPjtcblxuICAvKipcbiAgICogQHBhcmFtIHtFeHBpcmF0aW9uUGx1Z2luT3B0aW9uc30gY29uZmlnXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEVudHJpZXNdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBlbnRyaWVzIHRvIGNhY2hlLlxuICAgKiBFbnRyaWVzIHVzZWQgdGhlIGxlYXN0IHdpbGwgYmUgcmVtb3ZlZCBhcyB0aGUgbWF4aW11bSBpcyByZWFjaGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhBZ2VTZWNvbmRzXSBUaGUgbWF4aW11bSBhZ2Ugb2YgYW4gZW50cnkgYmVmb3JlXG4gICAqIGl0J3MgdHJlYXRlZCBhcyBzdGFsZSBhbmQgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWcubWF0Y2hPcHRpb25zXSBUaGUgW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZS9kZWxldGUjUGFyYW1ldGVycylcbiAgICogdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBjYWxsaW5nIGBkZWxldGUoKWAgb24gdGhlIGNhY2hlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtjb25maWcucHVyZ2VPblF1b3RhRXJyb3JdIFdoZXRoZXIgdG8gb3B0IHRoaXMgY2FjaGUgaW4gdG9cbiAgICogYXV0b21hdGljIGRlbGV0aW9uIGlmIHRoZSBhdmFpbGFibGUgc3RvcmFnZSBxdW90YSBoYXMgYmVlbiBleGNlZWRlZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogRXhwaXJhdGlvblBsdWdpbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIShjb25maWcubWF4RW50cmllcyB8fCBjb25maWcubWF4QWdlU2Vjb25kcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLm1heEVudHJpZXMpIHtcbiAgICAgICAgYXNzZXJ0IS5pc1R5cGUoY29uZmlnLm1heEVudHJpZXMsICdudW1iZXInLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4RW50cmllcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLm1heEFnZVNlY29uZHMpIHtcbiAgICAgICAgYXNzZXJ0IS5pc1R5cGUoY29uZmlnLm1heEFnZVNlY29uZHMsICdudW1iZXInLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4QWdlU2Vjb25kcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9tYXhBZ2VTZWNvbmRzID0gY29uZmlnLm1heEFnZVNlY29uZHM7XG4gICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyA9IG5ldyBNYXAoKTtcblxuICAgIGlmIChjb25maWcucHVyZ2VPblF1b3RhRXJyb3IpIHtcbiAgICAgIHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrKCgpID0+IHRoaXMuZGVsZXRlQ2FjaGVBbmRNZXRhZGF0YSgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBzaW1wbGUgaGVscGVyIG1ldGhvZCB0byByZXR1cm4gYSBDYWNoZUV4cGlyYXRpb24gaW5zdGFuY2UgZm9yIGEgZ2l2ZW5cbiAgICogY2FjaGUgbmFtZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhY2hlTmFtZVxuICAgKiBAcmV0dXJuIHtDYWNoZUV4cGlyYXRpb259XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lOiBzdHJpbmcpOiBDYWNoZUV4cGlyYXRpb24ge1xuICAgIGlmIChjYWNoZU5hbWUgPT09IGNhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUoKSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignZXhwaXJlLWN1c3RvbS1jYWNoZXMtb25seScpO1xuICAgIH1cblxuICAgIGxldCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9jYWNoZUV4cGlyYXRpb25zLmdldChjYWNoZU5hbWUpO1xuICAgIGlmICghY2FjaGVFeHBpcmF0aW9uKSB7XG4gICAgICBjYWNoZUV4cGlyYXRpb24gPSBuZXcgQ2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZSwgdGhpcy5fY29uZmlnKTtcbiAgICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMuc2V0KGNhY2hlTmFtZSwgY2FjaGVFeHBpcmF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlRXhwaXJhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIFwibGlmZWN5Y2xlXCIgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZVxuICAgKiBgd29ya2JveC1zdHJhdGVnaWVzYCBoYW5kbGVycyB3aGVuIGEgYFJlc3BvbnNlYCBpcyBhYm91dCB0byBiZSByZXR1cm5lZFxuICAgKiBmcm9tIGEgW0NhY2hlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUpIHRvXG4gICAqIHRoZSBoYW5kbGVyLiBJdCBhbGxvd3MgdGhlIGBSZXNwb25zZWAgdG8gYmUgaW5zcGVjdGVkIGZvciBmcmVzaG5lc3MgYW5kXG4gICAqIHByZXZlbnRzIGl0IGZyb20gYmVpbmcgdXNlZCBpZiB0aGUgYFJlc3BvbnNlYCdzIGBEYXRlYCBoZWFkZXIgdmFsdWUgaXNcbiAgICogb2xkZXIgdGhhbiB0aGUgY29uZmlndXJlZCBgbWF4QWdlU2Vjb25kc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZSBOYW1lIG9mIHRoZSBjYWNoZSB0aGUgcmVzcG9uc2UgaXMgaW4uXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMuY2FjaGVkUmVzcG9uc2UgVGhlIGBSZXNwb25zZWAgb2JqZWN0IHRoYXQncyBiZWVuXG4gICAqICAgICByZWFkIGZyb20gYSBjYWNoZSBhbmQgd2hvc2UgZnJlc2huZXNzIHNob3VsZCBiZSBjaGVja2VkLlxuICAgKiBAcmV0dXJuIHtSZXNwb25zZX0gRWl0aGVyIHRoZSBgY2FjaGVkUmVzcG9uc2VgLCBpZiBpdCdzXG4gICAqICAgICBmcmVzaCwgb3IgYG51bGxgIGlmIHRoZSBgUmVzcG9uc2VgIGlzIG9sZGVyIHRoYW4gYG1heEFnZVNlY29uZHNgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkOiBXb3JrYm94UGx1Z2luWydjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQnXSA9IGFzeW5jICh7XG4gICAgZXZlbnQsXG4gICAgcmVxdWVzdCxcbiAgICBjYWNoZU5hbWUsXG4gICAgY2FjaGVkUmVzcG9uc2UsXG4gIH0pID0+IHtcbiAgICBpZiAoIWNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBpc0ZyZXNoID0gdGhpcy5faXNSZXNwb25zZURhdGVGcmVzaChjYWNoZWRSZXNwb25zZSk7XG5cbiAgICAvLyBFeHBpcmUgZW50cmllcyB0byBlbnN1cmUgdGhhdCBldmVuIGlmIHRoZSBleHBpcmF0aW9uIGRhdGUgaGFzXG4gICAgLy8gZXhwaXJlZCwgaXQnbGwgb25seSBiZSB1c2VkIG9uY2UuXG4gICAgY29uc3QgY2FjaGVFeHBpcmF0aW9uID0gdGhpcy5fZ2V0Q2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZSk7XG4gICAgZG9udFdhaXRGb3IoY2FjaGVFeHBpcmF0aW9uLmV4cGlyZUVudHJpZXMoKSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIG1ldGFkYXRhIGZvciB0aGUgcmVxdWVzdCBVUkwgdG8gdGhlIGN1cnJlbnQgdGltZXN0YW1wLFxuICAgIC8vIGJ1dCBkb24ndCBgYXdhaXRgIGl0IGFzIHdlIGRvbid0IHdhbnQgdG8gYmxvY2sgdGhlIHJlc3BvbnNlLlxuICAgIGNvbnN0IHVwZGF0ZVRpbWVzdGFtcERvbmUgPSBjYWNoZUV4cGlyYXRpb24udXBkYXRlVGltZXN0YW1wKHJlcXVlc3QudXJsKTtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGV2ZW50LndhaXRVbnRpbCh1cGRhdGVUaW1lc3RhbXBEb25lKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gVGhlIGV2ZW50IG1heSBub3QgYmUgYSBmZXRjaCBldmVudDsgb25seSBsb2cgdGhlIFVSTCBpZiBpdCBpcy5cbiAgICAgICAgICBpZiAoJ3JlcXVlc3QnIGluIGV2ZW50KSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcbiAgICAgICAgICAgICAgYFVuYWJsZSB0byBlbnN1cmUgc2VydmljZSB3b3JrZXIgc3RheXMgYWxpdmUgd2hlbiBgICtcbiAgICAgICAgICAgICAgICBgdXBkYXRpbmcgY2FjaGUgZW50cnkgZm9yIGAgK1xuICAgICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTCgoZXZlbnQgYXMgRmV0Y2hFdmVudCkucmVxdWVzdC51cmwpfScuYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRnJlc2ggPyBjYWNoZWRSZXNwb25zZSA6IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IGNhY2hlZFJlc3BvbnNlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF9pc1Jlc3BvbnNlRGF0ZUZyZXNoKGNhY2hlZFJlc3BvbnNlOiBSZXNwb25zZSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5fbWF4QWdlU2Vjb25kcykge1xuICAgICAgLy8gV2UgYXJlbid0IGV4cGlyaW5nIGJ5IGFnZSwgc28gcmV0dXJuIHRydWUsIGl0J3MgZnJlc2hcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSAnZGF0ZScgaGVhZGVyIHdpbGwgc3VmZmljZSBhIHF1aWNrIGV4cGlyYXRpb24gY2hlY2suXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3N3LXRvb2xib3gvaXNzdWVzLzE2NCBmb3JcbiAgICAvLyBkaXNjdXNzaW9uLlxuICAgIGNvbnN0IGRhdGVIZWFkZXJUaW1lc3RhbXAgPSB0aGlzLl9nZXREYXRlSGVhZGVyVGltZXN0YW1wKGNhY2hlZFJlc3BvbnNlKTtcbiAgICBpZiAoZGF0ZUhlYWRlclRpbWVzdGFtcCA9PT0gbnVsbCkge1xuICAgICAgLy8gVW5hYmxlIHRvIHBhcnNlIGRhdGUsIHNvIGFzc3VtZSBpdCdzIGZyZXNoLlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHZhbGlkIGhlYWRlclRpbWUsIHRoZW4gb3VyIHJlc3BvbnNlIGlzIGZyZXNoIGlmZiB0aGVcbiAgICAvLyBoZWFkZXJUaW1lIHBsdXMgbWF4QWdlU2Vjb25kcyBpcyBncmVhdGVyIHRoYW4gdGhlIGN1cnJlbnQgdGltZS5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBkYXRlSGVhZGVyVGltZXN0YW1wID49IG5vdyAtIHRoaXMuX21heEFnZVNlY29uZHMgKiAxMDAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgZXh0cmFjdCB0aGUgZGF0YSBoZWFkZXIgYW5kIHBhcnNlIGl0IGludG8gYSB1c2VmdWxcbiAgICogdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IGNhY2hlZFJlc3BvbnNlXG4gICAqIEByZXR1cm4ge251bWJlcnxudWxsfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0RGF0ZUhlYWRlclRpbWVzdGFtcChjYWNoZWRSZXNwb25zZTogUmVzcG9uc2UpOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAoIWNhY2hlZFJlc3BvbnNlLmhlYWRlcnMuaGFzKCdkYXRlJykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGVIZWFkZXIgPSBjYWNoZWRSZXNwb25zZS5oZWFkZXJzLmdldCgnZGF0ZScpO1xuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlSGVhZGVyISk7XG4gICAgY29uc3QgaGVhZGVyVGltZSA9IHBhcnNlZERhdGUuZ2V0VGltZSgpO1xuXG4gICAgLy8gSWYgdGhlIERhdGUgaGVhZGVyIHdhcyBpbnZhbGlkIGZvciBzb21lIHJlYXNvbiwgcGFyc2VkRGF0ZS5nZXRUaW1lKClcbiAgICAvLyB3aWxsIHJldHVybiBOYU4uXG4gICAgaWYgKGlzTmFOKGhlYWRlclRpbWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVyVGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIFwibGlmZWN5Y2xlXCIgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZVxuICAgKiBgd29ya2JveC1zdHJhdGVnaWVzYCBoYW5kbGVycyB3aGVuIGFuIGVudHJ5IGlzIGFkZGVkIHRvIGEgY2FjaGUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZSBOYW1lIG9mIHRoZSBjYWNoZSB0aGF0IHdhcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IFRoZSBSZXF1ZXN0IGZvciB0aGUgY2FjaGVkIGVudHJ5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FjaGVEaWRVcGRhdGU6IFdvcmtib3hQbHVnaW5bJ2NhY2hlRGlkVXBkYXRlJ10gPSBhc3luYyAoe1xuICAgIGNhY2hlTmFtZSxcbiAgICByZXF1ZXN0LFxuICB9KSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNUeXBlKGNhY2hlTmFtZSwgJ3N0cmluZycsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgIGZ1bmNOYW1lOiAnY2FjaGVEaWRVcGRhdGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdjYWNoZU5hbWUnLFxuICAgICAgfSk7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgZnVuY05hbWU6ICdjYWNoZURpZFVwZGF0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FjaGVFeHBpcmF0aW9uID0gdGhpcy5fZ2V0Q2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZSk7XG4gICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLnVwZGF0ZVRpbWVzdGFtcChyZXF1ZXN0LnVybCk7XG4gICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLmV4cGlyZUVudHJpZXMoKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgdGhhdCBwZXJmb3JtcyB0d28gb3BlcmF0aW9uczpcbiAgICpcbiAgICogLSBEZWxldGVzICphbGwqIHRoZSB1bmRlcmx5aW5nIENhY2hlIGluc3RhbmNlcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBwbHVnaW5cbiAgICogaW5zdGFuY2UsIGJ5IGNhbGxpbmcgY2FjaGVzLmRlbGV0ZSgpIG9uIHlvdXIgYmVoYWxmLlxuICAgKiAtIERlbGV0ZXMgdGhlIG1ldGFkYXRhIGZyb20gSW5kZXhlZERCIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBleHBpcmF0aW9uXG4gICAqIGRldGFpbHMgZm9yIGVhY2ggQ2FjaGUgaW5zdGFuY2UuXG4gICAqXG4gICAqIFdoZW4gdXNpbmcgY2FjaGUgZXhwaXJhdGlvbiwgY2FsbGluZyB0aGlzIG1ldGhvZCBpcyBwcmVmZXJhYmxlIHRvIGNhbGxpbmdcbiAgICogYGNhY2hlcy5kZWxldGUoKWAgZGlyZWN0bHksIHNpbmNlIHRoaXMgd2lsbCBlbnN1cmUgdGhhdCB0aGUgSW5kZXhlZERCXG4gICAqIG1ldGFkYXRhIGlzIGFsc28gY2xlYW5seSByZW1vdmVkIGFuZCBvcGVuIEluZGV4ZWREQiBpbnN0YW5jZXMgYXJlIGRlbGV0ZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpZiB5b3UncmUgKm5vdCogdXNpbmcgY2FjaGUgZXhwaXJhdGlvbiBmb3IgYSBnaXZlbiBjYWNoZSwgY2FsbGluZ1xuICAgKiBgY2FjaGVzLmRlbGV0ZSgpYCBhbmQgcGFzc2luZyBpbiB0aGUgY2FjaGUncyBuYW1lIHNob3VsZCBiZSBzdWZmaWNpZW50LlxuICAgKiBUaGVyZSBpcyBubyBXb3JrYm94LXNwZWNpZmljIG1ldGhvZCBuZWVkZWQgZm9yIGNsZWFudXAgaW4gdGhhdCBjYXNlLlxuICAgKi9cbiAgYXN5bmMgZGVsZXRlQ2FjaGVBbmRNZXRhZGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBEbyB0aGlzIG9uZSBhdCBhIHRpbWUgaW5zdGVhZCBvZiBhbGwgYXQgb25jZSB2aWEgYFByb21pc2UuYWxsKClgIHRvXG4gICAgLy8gcmVkdWNlIHRoZSBjaGFuY2Ugb2YgaW5jb25zaXN0ZW5jeSBpZiBhIHByb21pc2UgcmVqZWN0cy5cbiAgICBmb3IgKGNvbnN0IFtjYWNoZU5hbWUsIGNhY2hlRXhwaXJhdGlvbl0gb2YgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucykge1xuICAgICAgYXdhaXQgc2VsZi5jYWNoZXMuZGVsZXRlKGNhY2hlTmFtZSk7XG4gICAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24uZGVsZXRlKCk7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cbiAgICB0aGlzLl9jYWNoZUV4cGlyYXRpb25zID0gbmV3IE1hcCgpO1xuICB9XG59XG5cbmV4cG9ydCB7RXhwaXJhdGlvblBsdWdpbn07XG4iLCAiLy8gQHRzLWlnbm9yZVxudHJ5e3NlbGZbJ3dvcmtib3g6cm91dGluZzo3LjAuMCddJiZfKCl9Y2F0Y2goZSl7fSIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgdHlwZSBIVFRQTWV0aG9kID0gJ0RFTEVURScgfCAnR0VUJyB8ICdIRUFEJyB8ICdQQVRDSCcgfCAnUE9TVCcgfCAnUFVUJztcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBIVFRQIG1ldGhvZCwgJ0dFVCcsIHVzZWQgd2hlbiB0aGVyZSdzIG5vIHNwZWNpZmljIG1ldGhvZFxuICogY29uZmlndXJlZCBmb3IgYSByb3V0ZS5cbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZhdWx0TWV0aG9kOiBIVFRQTWV0aG9kID0gJ0dFVCc7XG5cbi8qKlxuICogVGhlIGxpc3Qgb2YgdmFsaWQgSFRUUCBtZXRob2RzIGFzc29jaWF0ZWQgd2l0aCByZXF1ZXN0cyB0aGF0IGNvdWxkIGJlIHJvdXRlZC5cbiAqXG4gKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgdmFsaWRNZXRob2RzOiBIVFRQTWV0aG9kW10gPSBbXG4gICdERUxFVEUnLFxuICAnR0VUJyxcbiAgJ0hFQUQnLFxuICAnUEFUQ0gnLFxuICAnUE9TVCcsXG4gICdQVVQnLFxuXTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7Um91dGVIYW5kbGVyLCBSb3V0ZUhhbmRsZXJPYmplY3R9IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKXxPYmplY3R9IGhhbmRsZXIgRWl0aGVyIGEgZnVuY3Rpb24sIG9yIGFuIG9iamVjdCB3aXRoIGFcbiAqICdoYW5kbGUnIG1ldGhvZC5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYSBoYW5kbGUgbWV0aG9kLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVIYW5kbGVyID0gKGhhbmRsZXI6IFJvdXRlSGFuZGxlcik6IFJvdXRlSGFuZGxlck9iamVjdCA9PiB7XG4gIGlmIChoYW5kbGVyICYmIHR5cGVvZiBoYW5kbGVyID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmhhc01ldGhvZChoYW5kbGVyLCAnaGFuZGxlJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnaGFuZGxlcicsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZXI7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNUeXBlKGhhbmRsZXIsICdmdW5jdGlvbicsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7aGFuZGxlOiBoYW5kbGVyfTtcbiAgfVxufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7SFRUUE1ldGhvZCwgZGVmYXVsdE1ldGhvZCwgdmFsaWRNZXRob2RzfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZUhhbmRsZXJ9IGZyb20gJy4vdXRpbHMvbm9ybWFsaXplSGFuZGxlci5qcyc7XG5pbXBvcnQge1xuICBSb3V0ZUhhbmRsZXIsXG4gIFJvdXRlSGFuZGxlck9iamVjdCxcbiAgUm91dGVNYXRjaENhbGxiYWNrLFxufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBBIGBSb3V0ZWAgY29uc2lzdHMgb2YgYSBwYWlyIG9mIGNhbGxiYWNrIGZ1bmN0aW9ucywgXCJtYXRjaFwiIGFuZCBcImhhbmRsZXJcIi5cbiAqIFRoZSBcIm1hdGNoXCIgY2FsbGJhY2sgZGV0ZXJtaW5lIGlmIGEgcm91dGUgc2hvdWxkIGJlIHVzZWQgdG8gXCJoYW5kbGVcIiBhXG4gKiByZXF1ZXN0IGJ5IHJldHVybmluZyBhIG5vbi1mYWxzeSB2YWx1ZSBpZiBpdCBjYW4uIFRoZSBcImhhbmRsZXJcIiBjYWxsYmFja1xuICogaXMgY2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBtYXRjaCBhbmQgc2hvdWxkIHJldHVybiBhIFByb21pc2UgdGhhdCByZXNvbHZlc1xuICogdG8gYSBgUmVzcG9uc2VgLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuY2xhc3MgUm91dGUge1xuICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXJPYmplY3Q7XG4gIG1hdGNoOiBSb3V0ZU1hdGNoQ2FsbGJhY2s7XG4gIG1ldGhvZDogSFRUUE1ldGhvZDtcbiAgY2F0Y2hIYW5kbGVyPzogUm91dGVIYW5kbGVyT2JqZWN0O1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgUm91dGUgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfm1hdGNoQ2FsbGJhY2t9IG1hdGNoXG4gICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHJvdXRlIG1hdGNoZXMgYSBnaXZlblxuICAgKiBgZmV0Y2hgIGV2ZW50IGJ5IHJldHVybmluZyBhIG5vbi1mYWxzeSB2YWx1ZS5cbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBSZXNwb25zZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBtYXRjaCB0aGUgUm91dGVcbiAgICogYWdhaW5zdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hdGNoOiBSb3V0ZU1hdGNoQ2FsbGJhY2ssXG4gICAgaGFuZGxlcjogUm91dGVIYW5kbGVyLFxuICAgIG1ldGhvZDogSFRUUE1ldGhvZCA9IGRlZmF1bHRNZXRob2QsXG4gICkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzVHlwZShtYXRjaCwgJ2Z1bmN0aW9uJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnbWF0Y2gnLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgYXNzZXJ0IS5pc09uZU9mKG1ldGhvZCwgdmFsaWRNZXRob2RzLCB7cGFyYW1OYW1lOiAnbWV0aG9kJ30pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZXNlIHZhbHVlcyBhcmUgcmVmZXJlbmNlZCBkaXJlY3RseSBieSBSb3V0ZXIgc28gY2Fubm90IGJlXG4gICAgLy8gYWx0ZXJlZCBieSBtaW5pZmljYXRvbi5cbiAgICB0aGlzLmhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICAgIHRoaXMubWF0Y2ggPSBtYXRjaDtcbiAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZy1oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc29sdmluZyB0byBhIFJlc3BvbnNlXG4gICAqL1xuICBzZXRDYXRjaEhhbmRsZXIoaGFuZGxlcjogUm91dGVIYW5kbGVyKTogdm9pZCB7XG4gICAgdGhpcy5jYXRjaEhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICB9XG59XG5cbmV4cG9ydCB7Um91dGV9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtcbiAgUm91dGVIYW5kbGVyLFxuICBSb3V0ZU1hdGNoQ2FsbGJhY2ssXG4gIFJvdXRlTWF0Y2hDYWxsYmFja09wdGlvbnMsXG59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7SFRUUE1ldGhvZH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAnLi9Sb3V0ZS5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogUmVnRXhwUm91dGUgbWFrZXMgaXQgZWFzeSB0byBjcmVhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gYmFzZWRcbiAqIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGV9LlxuICpcbiAqIEZvciBzYW1lLW9yaWdpbiByZXF1ZXN0cyB0aGUgUmVnRXhwIG9ubHkgbmVlZHMgdG8gbWF0Y2ggcGFydCBvZiB0aGUgVVJMLiBGb3JcbiAqIHJlcXVlc3RzIGFnYWluc3QgdGhpcmQtcGFydHkgc2VydmVycywgeW91IG11c3QgZGVmaW5lIGEgUmVnRXhwIHRoYXQgbWF0Y2hlc1xuICogdGhlIHN0YXJ0IG9mIHRoZSBVUkwuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICogQGV4dGVuZHMgd29ya2JveC1yb3V0aW5nLlJvdXRlXG4gKi9cbmNsYXNzIFJlZ0V4cFJvdXRlIGV4dGVuZHMgUm91dGUge1xuICAvKipcbiAgICogSWYgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjb250YWluc1xuICAgKiBbY2FwdHVyZSBncm91cHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1JlZ0V4cCNncm91cGluZy1iYWNrLXJlZmVyZW5jZXN9LFxuICAgKiB0aGUgY2FwdHVyZWQgdmFsdWVzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICAgKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gYHBhcmFtc2BcbiAgICogYXJndW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVnRXhwfSByZWdFeHAgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0IFVSTHMuXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gICAqIGFnYWluc3QuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZWdFeHA6IFJlZ0V4cCwgaGFuZGxlcjogUm91dGVIYW5kbGVyLCBtZXRob2Q/OiBIVFRQTWV0aG9kKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZWdFeHAsIFJlZ0V4cCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUmVnRXhwUm91dGUnLFxuICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncGF0dGVybicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaDogUm91dGVNYXRjaENhbGxiYWNrID0gKHt1cmx9OiBSb3V0ZU1hdGNoQ2FsbGJhY2tPcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSByZWdFeHAuZXhlYyh1cmwuaHJlZik7XG5cbiAgICAgIC8vIFJldHVybiBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG5vIG1hdGNoLlxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXF1aXJlIHRoYXQgdGhlIG1hdGNoIHN0YXJ0IGF0IHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlIFVSTCBzdHJpbmdcbiAgICAgIC8vIGlmIGl0J3MgYSBjcm9zcy1vcmlnaW4gcmVxdWVzdC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI4MSBmb3IgdGhlIGNvbnRleHRcbiAgICAgIC8vIGJlaGluZCB0aGlzIGJlaGF2aW9yLlxuICAgICAgaWYgKHVybC5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbiAmJiByZXN1bHQuaW5kZXggIT09IDApIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgICBgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiAnJHtyZWdFeHAudG9TdHJpbmcoKX0nIG9ubHkgcGFydGlhbGx5IG1hdGNoZWQgYCArXG4gICAgICAgICAgICAgIGBhZ2FpbnN0IHRoZSBjcm9zcy1vcmlnaW4gVVJMICcke3VybC50b1N0cmluZygpfScuIFJlZ0V4cFJvdXRlJ3Mgd2lsbCBvbmx5IGAgK1xuICAgICAgICAgICAgICBgaGFuZGxlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyBpZiB0aGV5IG1hdGNoIHRoZSBlbnRpcmUgVVJMLmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIHJvdXRlIG1hdGNoZXMsIGJ1dCB0aGVyZSBhcmVuJ3QgYW55IGNhcHR1cmUgZ3JvdXBzIGRlZmluZWQsIHRoZW5cbiAgICAgIC8vIHRoaXMgd2lsbCByZXR1cm4gW10sIHdoaWNoIGlzIHRydXRoeSBhbmQgdGhlcmVmb3JlIHN1ZmZpY2llbnQgdG9cbiAgICAgIC8vIGluZGljYXRlIGEgbWF0Y2guXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgY2FwdHVyZSBncm91cHMsIHRoZW4gaXQgd2lsbCByZXR1cm4gdGhlaXIgdmFsdWVzLlxuICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgxKTtcbiAgICB9O1xuXG4gICAgc3VwZXIobWF0Y2gsIGhhbmRsZXIsIG1ldGhvZCk7XG4gIH1cbn1cblxuZXhwb3J0IHtSZWdFeHBSb3V0ZX07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHtcbiAgUm91dGVIYW5kbGVyLFxuICBSb3V0ZUhhbmRsZXJPYmplY3QsXG4gIFJvdXRlSGFuZGxlckNhbGxiYWNrT3B0aW9ucyxcbiAgUm91dGVNYXRjaENhbGxiYWNrT3B0aW9ucyxcbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcbmltcG9ydCB7SFRUUE1ldGhvZCwgZGVmYXVsdE1ldGhvZH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtub3JtYWxpemVIYW5kbGVyfSBmcm9tICcuL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIuanMnO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSAnLi9Sb3V0ZS5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbnR5cGUgUmVxdWVzdEFyZ3MgPSBzdHJpbmcgfCBbc3RyaW5nLCBSZXF1ZXN0SW5pdD9dO1xuXG5pbnRlcmZhY2UgQ2FjaGVVUkxzTWVzc2FnZURhdGEge1xuICB0eXBlOiBzdHJpbmc7XG4gIHBheWxvYWQ6IHtcbiAgICB1cmxzVG9DYWNoZTogUmVxdWVzdEFyZ3NbXTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgUm91dGVyIGNhbiBiZSB1c2VkIHRvIHByb2Nlc3MgYSBgRmV0Y2hFdmVudGAgdXNpbmcgb25lIG9yIG1vcmVcbiAqIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGV9LCByZXNwb25kaW5nIHdpdGggYSBgUmVzcG9uc2VgIGlmXG4gKiBhIG1hdGNoaW5nIHJvdXRlIGV4aXN0cy5cbiAqXG4gKiBJZiBubyByb3V0ZSBtYXRjaGVzIGEgZ2l2ZW4gYSByZXF1ZXN0LCB0aGUgUm91dGVyIHdpbGwgdXNlIGEgXCJkZWZhdWx0XCJcbiAqIGhhbmRsZXIgaWYgb25lIGlzIGRlZmluZWQuXG4gKlxuICogU2hvdWxkIHRoZSBtYXRjaGluZyBSb3V0ZSB0aHJvdyBhbiBlcnJvciwgdGhlIFJvdXRlciB3aWxsIHVzZSBhIFwiY2F0Y2hcIlxuICogaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZCB0byBncmFjZWZ1bGx5IGRlYWwgd2l0aCBpc3N1ZXMgYW5kIHJlc3BvbmQgd2l0aCBhXG4gKiBSZXF1ZXN0LlxuICpcbiAqIElmIGEgcmVxdWVzdCBtYXRjaGVzIG11bHRpcGxlIHJvdXRlcywgdGhlICoqZWFybGllc3QqKiByZWdpc3RlcmVkIHJvdXRlIHdpbGxcbiAqIGJlIHVzZWQgdG8gcmVzcG9uZCB0byB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmNsYXNzIFJvdXRlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3JvdXRlczogTWFwPEhUVFBNZXRob2QsIFJvdXRlW10+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZWZhdWx0SGFuZGxlck1hcDogTWFwPEhUVFBNZXRob2QsIFJvdXRlSGFuZGxlck9iamVjdD47XG4gIHByaXZhdGUgX2NhdGNoSGFuZGxlcj86IFJvdXRlSGFuZGxlck9iamVjdDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXcgUm91dGVyLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIEFycmF5PHdvcmtib3gtcm91dGluZy5Sb3V0ZT4+fSByb3V0ZXMgQSBgTWFwYCBvZiBIVFRQXG4gICAqIG1ldGhvZCBuYW1lICgnR0VUJywgZXRjLikgdG8gYW4gYXJyYXkgb2YgYWxsIHRoZSBjb3JyZXNwb25kaW5nIGBSb3V0ZWBcbiAgICogaW5zdGFuY2VzIHRoYXQgYXJlIHJlZ2lzdGVyZWQuXG4gICAqL1xuICBnZXQgcm91dGVzKCk6IE1hcDxIVFRQTWV0aG9kLCBSb3V0ZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JvdXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZmV0Y2ggZXZlbnQgbGlzdGVuZXIgdG8gcmVzcG9uZCB0byBldmVudHMgd2hlbiBhIHJvdXRlIG1hdGNoZXNcbiAgICogdGhlIGV2ZW50J3MgcmVxdWVzdC5cbiAgICovXG4gIGFkZEZldGNoTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjgzNTcjaXNzdWVjb21tZW50LTQzNjQ4NDcwNVxuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoKGV2ZW50OiBGZXRjaEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7cmVxdWVzdH0gPSBldmVudDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlUHJvbWlzZSA9IHRoaXMuaGFuZGxlUmVxdWVzdCh7cmVxdWVzdCwgZXZlbnR9KTtcbiAgICAgIGlmIChyZXNwb25zZVByb21pc2UpIHtcbiAgICAgICAgZXZlbnQucmVzcG9uZFdpdGgocmVzcG9uc2VQcm9taXNlKTtcbiAgICAgIH1cbiAgICB9KSBhcyBFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWVzc2FnZSBldmVudCBsaXN0ZW5lciBmb3IgVVJMcyB0byBjYWNoZSBmcm9tIHRoZSB3aW5kb3cuXG4gICAqIFRoaXMgaXMgdXNlZnVsIHRvIGNhY2hlIHJlc291cmNlcyBsb2FkZWQgb24gdGhlIHBhZ2UgcHJpb3IgdG8gd2hlbiB0aGVcbiAgICogc2VydmljZSB3b3JrZXIgc3RhcnRlZCBjb250cm9sbGluZyBpdC5cbiAgICpcbiAgICogVGhlIGZvcm1hdCBvZiB0aGUgbWVzc2FnZSBkYXRhIHNlbnQgZnJvbSB0aGUgd2luZG93IHNob3VsZCBiZSBhcyBmb2xsb3dzLlxuICAgKiBXaGVyZSB0aGUgYHVybHNUb0NhY2hlYCBhcnJheSBtYXkgY29uc2lzdCBvZiBVUkwgc3RyaW5ncyBvciBhbiBhcnJheSBvZlxuICAgKiBVUkwgc3RyaW5nICsgYHJlcXVlc3RJbml0YCBvYmplY3QgKHRoZSBzYW1lIGFzIHlvdSdkIHBhc3MgdG8gYGZldGNoKClgKS5cbiAgICpcbiAgICogYGBgXG4gICAqIHtcbiAgICogICB0eXBlOiAnQ0FDSEVfVVJMUycsXG4gICAqICAgcGF5bG9hZDoge1xuICAgKiAgICAgdXJsc1RvQ2FjaGU6IFtcbiAgICogICAgICAgJy4vc2NyaXB0MS5qcycsXG4gICAqICAgICAgICcuL3NjcmlwdDIuanMnLFxuICAgKiAgICAgICBbJy4vc2NyaXB0My5qcycsIHttb2RlOiAnbm8tY29ycyd9XSxcbiAgICogICAgIF0sXG4gICAqICAgfSxcbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIGFkZENhY2hlTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjgzNTcjaXNzdWVjb21tZW50LTQzNjQ4NDcwNVxuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgoZXZlbnQ6IEV4dGVuZGFibGVNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIC8vIGV2ZW50LmRhdGEgaXMgdHlwZSAnYW55J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuICAgICAgaWYgKGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnQ0FDSEVfVVJMUycpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuICAgICAgICBjb25zdCB7cGF5bG9hZH06IENhY2hlVVJMc01lc3NhZ2VEYXRhID0gZXZlbnQuZGF0YTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgQ2FjaGluZyBVUkxzIGZyb20gdGhlIHdpbmRvd2AsIHBheWxvYWQudXJsc1RvQ2FjaGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdFByb21pc2VzID0gUHJvbWlzZS5hbGwoXG4gICAgICAgICAgcGF5bG9hZC51cmxzVG9DYWNoZS5tYXAoKGVudHJ5OiBzdHJpbmcgfCBbc3RyaW5nLCBSZXF1ZXN0SW5pdD9dKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBlbnRyeSA9IFtlbnRyeV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCguLi5lbnRyeSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KHtyZXF1ZXN0LCBldmVudH0pO1xuXG4gICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IFR5cGVTY3JpcHQgZXJyb3JzIHdpdGhvdXQgdGhpcyB0eXBlY2FzdCBmb3JcbiAgICAgICAgICAgIC8vIHNvbWUgcmVhc29uIChwcm9iYWJseSBhIGJ1ZykuIFRoZSByZWFsIHR5cGUgaGVyZSBzaG91bGQgd29yayBidXRcbiAgICAgICAgICAgIC8vIGRvZXNuJ3Q6IGBBcnJheTxQcm9taXNlPFJlc3BvbnNlPiB8IHVuZGVmaW5lZD5gLlxuICAgICAgICAgIH0pIGFzIGFueVtdLFxuICAgICAgICApOyAvLyBUeXBlU2NyaXB0XG5cbiAgICAgICAgZXZlbnQud2FpdFVudGlsKHJlcXVlc3RQcm9taXNlcyk7XG5cbiAgICAgICAgLy8gSWYgYSBNZXNzYWdlQ2hhbm5lbCB3YXMgdXNlZCwgcmVwbHkgdG8gdGhlIG1lc3NhZ2Ugb24gc3VjY2Vzcy5cbiAgICAgICAgaWYgKGV2ZW50LnBvcnRzICYmIGV2ZW50LnBvcnRzWzBdKSB7XG4gICAgICAgICAgdm9pZCByZXF1ZXN0UHJvbWlzZXMudGhlbigoKSA9PiBldmVudC5wb3J0c1swXS5wb3N0TWVzc2FnZSh0cnVlKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSBhcyBFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgcm91dGluZyBydWxlcyB0byBhIEZldGNoRXZlbnQgb2JqZWN0IHRvIGdldCBhIFJlc3BvbnNlIGZyb20gYW5cbiAgICogYXBwcm9wcmlhdGUgUm91dGUncyBoYW5kbGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBoYW5kbGUuXG4gICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGVcbiAgICogICAgIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fHVuZGVmaW5lZH0gQSBwcm9taXNlIGlzIHJldHVybmVkIGlmIGFcbiAgICogICAgIHJlZ2lzdGVyZWQgcm91dGUgY2FuIGhhbmRsZSB0aGUgcmVxdWVzdC4gSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmdcbiAgICogICAgIHJvdXRlIGFuZCB0aGVyZSdzIG5vIGBkZWZhdWx0SGFuZGxlcmAsIGB1bmRlZmluZWRgIGlzIHJldHVybmVkLlxuICAgKi9cbiAgaGFuZGxlUmVxdWVzdCh7XG4gICAgcmVxdWVzdCxcbiAgICBldmVudCxcbiAgfToge1xuICAgIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gICAgZXZlbnQ6IEV4dGVuZGFibGVFdmVudDtcbiAgfSk6IFByb21pc2U8UmVzcG9uc2U+IHwgdW5kZWZpbmVkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlUmVxdWVzdCcsXG4gICAgICAgIHBhcmFtTmFtZTogJ29wdGlvbnMucmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsLCBsb2NhdGlvbi5ocmVmKTtcbiAgICBpZiAoIXVybC5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICBgV29ya2JveCBSb3V0ZXIgb25seSBzdXBwb3J0cyBVUkxzIHRoYXQgc3RhcnQgd2l0aCAnaHR0cCcuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzYW1lT3JpZ2luID0gdXJsLm9yaWdpbiA9PT0gbG9jYXRpb24ub3JpZ2luO1xuICAgIGNvbnN0IHtwYXJhbXMsIHJvdXRlfSA9IHRoaXMuZmluZE1hdGNoaW5nUm91dGUoe1xuICAgICAgZXZlbnQsXG4gICAgICByZXF1ZXN0LFxuICAgICAgc2FtZU9yaWdpbixcbiAgICAgIHVybCxcbiAgICB9KTtcbiAgICBsZXQgaGFuZGxlciA9IHJvdXRlICYmIHJvdXRlLmhhbmRsZXI7XG5cbiAgICBjb25zdCBkZWJ1Z01lc3NhZ2VzID0gW107XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChbYEZvdW5kIGEgcm91dGUgdG8gaGFuZGxlIHRoaXMgcmVxdWVzdDpgLCByb3V0ZV0pO1xuXG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goW1xuICAgICAgICAgICAgYFBhc3NpbmcgdGhlIGZvbGxvd2luZyBwYXJhbXMgdG8gdGhlIHJvdXRlJ3MgaGFuZGxlcjpgLFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIGhhbmRsZXIgYmVjYXVzZSB0aGVyZSB3YXMgbm8gbWF0Y2hpbmcgcm91dGUsIHRoZW5cbiAgICAvLyBmYWxsIGJhY2sgdG8gZGVmYXVsdEhhbmRsZXIgaWYgdGhhdCdzIGRlZmluZWQuXG4gICAgY29uc3QgbWV0aG9kID0gcmVxdWVzdC5tZXRob2QgYXMgSFRUUE1ldGhvZDtcbiAgICBpZiAoIWhhbmRsZXIgJiYgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAuaGFzKG1ldGhvZCkpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChcbiAgICAgICAgICBgRmFpbGVkIHRvIGZpbmQgYSBtYXRjaGluZyByb3V0ZS4gRmFsbGluZyBgICtcbiAgICAgICAgICAgIGBiYWNrIHRvIHRoZSBkZWZhdWx0IGhhbmRsZXIgZm9yICR7bWV0aG9kfS5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaGFuZGxlciA9IHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLmdldChtZXRob2QpO1xuICAgIH1cblxuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gTm8gaGFuZGxlciBzbyBXb3JrYm94IHdpbGwgZG8gbm90aGluZy4gSWYgbG9ncyBpcyBzZXQgb2YgZGVidWdcbiAgICAgICAgLy8gaS5lLiB2ZXJib3NlLCB3ZSBzaG91bGQgcHJpbnQgb3V0IHRoaXMgaW5mb3JtYXRpb24uXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgTm8gcm91dGUgZm91bmQgZm9yOiAke2dldEZyaWVuZGx5VVJMKHVybCl9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIFdlIGhhdmUgYSBoYW5kbGVyLCBtZWFuaW5nIFdvcmtib3ggaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSByb3V0ZS5cbiAgICAgIC8vIHByaW50IHRoZSByb3V0aW5nIGRldGFpbHMgdG8gdGhlIGNvbnNvbGUuXG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFJvdXRlciBpcyByZXNwb25kaW5nIHRvOiAke2dldEZyaWVuZGx5VVJMKHVybCl9YCk7XG5cbiAgICAgIGRlYnVnTWVzc2FnZXMuZm9yRWFjaCgobXNnKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZykpIHtcbiAgICAgICAgICBsb2dnZXIubG9nKC4uLm1zZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZyhtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgLy8gV3JhcCBpbiB0cnkgYW5kIGNhdGNoIGluIGNhc2UgdGhlIGhhbmRsZSBtZXRob2QgdGhyb3dzIGEgc3luY2hyb25vdXNcbiAgICAvLyBlcnJvci4gSXQgc2hvdWxkIHN0aWxsIGNhbGxiYWNrIHRvIHRoZSBjYXRjaCBoYW5kbGVyLlxuICAgIGxldCByZXNwb25zZVByb21pc2U7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IGhhbmRsZXIuaGFuZGxlKHt1cmwsIHJlcXVlc3QsIGV2ZW50LCBwYXJhbXN9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgLy8gR2V0IHJvdXRlJ3MgY2F0Y2ggaGFuZGxlciwgaWYgaXQgZXhpc3RzXG4gICAgY29uc3QgY2F0Y2hIYW5kbGVyID0gcm91dGUgJiYgcm91dGUuY2F0Y2hIYW5kbGVyO1xuXG4gICAgaWYgKFxuICAgICAgcmVzcG9uc2VQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSAmJlxuICAgICAgKHRoaXMuX2NhdGNoSGFuZGxlciB8fCBjYXRjaEhhbmRsZXIpXG4gICAgKSB7XG4gICAgICByZXNwb25zZVByb21pc2UgPSByZXNwb25zZVByb21pc2UuY2F0Y2goYXN5bmMgKGVycikgPT4ge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcm91dGUgY2F0Y2ggaGFuZGxlciwgcHJvY2VzcyB0aGF0IGZpcnN0XG4gICAgICAgIGlmIChjYXRjaEhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gU3RpbGwgaW5jbHVkZSBVUkwgaGVyZSBhcyBpdCB3aWxsIGJlIGFzeW5jIGZyb20gdGhlIGNvbnNvbGUgZ3JvdXBcbiAgICAgICAgICAgIC8vIGFuZCBtYXkgbm90IG1ha2Ugc2Vuc2Ugd2l0aG91dCB0aGUgVVJMXG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gd2hlbiByZXNwb25kaW5nIHRvOiBgICtcbiAgICAgICAgICAgICAgICBgICR7Z2V0RnJpZW5kbHlVUkwoXG4gICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgKX0uIEZhbGxpbmcgYmFjayB0byByb3V0ZSdzIENhdGNoIEhhbmRsZXIuYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEVycm9yIHRocm93biBieTpgLCByb3V0ZSk7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY2F0Y2hIYW5kbGVyLmhhbmRsZSh7dXJsLCByZXF1ZXN0LCBldmVudCwgcGFyYW1zfSk7XG4gICAgICAgICAgfSBjYXRjaCAoY2F0Y2hFcnIpIHtcbiAgICAgICAgICAgIGlmIChjYXRjaEVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgIGVyciA9IGNhdGNoRXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9jYXRjaEhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gU3RpbGwgaW5jbHVkZSBVUkwgaGVyZSBhcyBpdCB3aWxsIGJlIGFzeW5jIGZyb20gdGhlIGNvbnNvbGUgZ3JvdXBcbiAgICAgICAgICAgIC8vIGFuZCBtYXkgbm90IG1ha2Ugc2Vuc2Ugd2l0aG91dCB0aGUgVVJMXG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gd2hlbiByZXNwb25kaW5nIHRvOiBgICtcbiAgICAgICAgICAgICAgICBgICR7Z2V0RnJpZW5kbHlVUkwoXG4gICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgKX0uIEZhbGxpbmcgYmFjayB0byBnbG9iYWwgQ2F0Y2ggSGFuZGxlci5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRXJyb3IgdGhyb3duIGJ5OmAsIHJvdXRlKTtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLl9jYXRjaEhhbmRsZXIuaGFuZGxlKHt1cmwsIHJlcXVlc3QsIGV2ZW50fSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2VQcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBhIHJlcXVlc3QgYW5kIFVSTCAoYW5kIG9wdGlvbmFsbHkgYW4gZXZlbnQpIGFnYWluc3QgdGhlIGxpc3Qgb2ZcbiAgICogcmVnaXN0ZXJlZCByb3V0ZXMsIGFuZCBpZiB0aGVyZSdzIGEgbWF0Y2gsIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcm91dGUgYWxvbmcgd2l0aCBhbnkgcGFyYW1zIGdlbmVyYXRlZCBieSB0aGUgbWF0Y2guXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7VVJMfSBvcHRpb25zLnVybFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuc2FtZU9yaWdpbiBUaGUgcmVzdWx0IG9mIGNvbXBhcmluZyBgdXJsLm9yaWdpbmBcbiAgICogICAgIGFnYWluc3QgdGhlIGN1cnJlbnQgb3JpZ2luLlxuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdCBUaGUgcmVxdWVzdCB0byBtYXRjaC5cbiAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgY29ycmVzcG9uZGluZyBldmVudC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBgcm91dGVgIGFuZCBgcGFyYW1zYCBwcm9wZXJ0aWVzLlxuICAgKiAgICAgVGhleSBhcmUgcG9wdWxhdGVkIGlmIGEgbWF0Y2hpbmcgcm91dGUgd2FzIGZvdW5kIG9yIGB1bmRlZmluZWRgXG4gICAqICAgICBvdGhlcndpc2UuXG4gICAqL1xuICBmaW5kTWF0Y2hpbmdSb3V0ZSh7XG4gICAgdXJsLFxuICAgIHNhbWVPcmlnaW4sXG4gICAgcmVxdWVzdCxcbiAgICBldmVudCxcbiAgfTogUm91dGVNYXRjaENhbGxiYWNrT3B0aW9ucyk6IHtcbiAgICByb3V0ZT86IFJvdXRlO1xuICAgIHBhcmFtcz86IFJvdXRlSGFuZGxlckNhbGxiYWNrT3B0aW9uc1sncGFyYW1zJ107XG4gIH0ge1xuICAgIGNvbnN0IHJvdXRlcyA9IHRoaXMuX3JvdXRlcy5nZXQocmVxdWVzdC5tZXRob2QgYXMgSFRUUE1ldGhvZCkgfHwgW107XG4gICAgZm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcbiAgICAgIGxldCBwYXJhbXM6IFByb21pc2U8YW55PiB8IHVuZGVmaW5lZDtcbiAgICAgIC8vIHJvdXRlLm1hdGNoIHJldHVybnMgdHlwZSBhbnksIG5vdCBwb3NzaWJsZSB0byBjaGFuZ2UgcmlnaHQgbm93LlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuICAgICAgY29uc3QgbWF0Y2hSZXN1bHQgPSByb3V0ZS5tYXRjaCh7dXJsLCBzYW1lT3JpZ2luLCByZXF1ZXN0LCBldmVudH0pO1xuICAgICAgaWYgKG1hdGNoUmVzdWx0KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gV2FybiBkZXZlbG9wZXJzIHRoYXQgdXNpbmcgYW4gYXN5bmMgbWF0Y2hDYWxsYmFjayBpcyBhbG1vc3QgYWx3YXlzXG4gICAgICAgICAgLy8gbm90IHRoZSByaWdodCB0aGluZyB0byBkby5cbiAgICAgICAgICBpZiAobWF0Y2hSZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcbiAgICAgICAgICAgICAgYFdoaWxlIHJvdXRpbmcgJHtnZXRGcmllbmRseVVSTCh1cmwpfSwgYW4gYXN5bmMgYCArXG4gICAgICAgICAgICAgICAgYG1hdGNoQ2FsbGJhY2sgZnVuY3Rpb24gd2FzIHVzZWQuIFBsZWFzZSBjb252ZXJ0IHRoZSBgICtcbiAgICAgICAgICAgICAgICBgZm9sbG93aW5nIHJvdXRlIHRvIHVzZSBhIHN5bmNocm9ub3VzIG1hdGNoQ2FsbGJhY2sgZnVuY3Rpb246YCxcbiAgICAgICAgICAgICAgcm91dGUsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIwNzlcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuICAgICAgICBwYXJhbXMgPSBtYXRjaFJlc3VsdDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zKSAmJiBwYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gSW5zdGVhZCBvZiBwYXNzaW5nIGFuIGVtcHR5IGFycmF5IGluIGFzIHBhcmFtcywgdXNlIHVuZGVmaW5lZC5cbiAgICAgICAgICBwYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgbWF0Y2hSZXN1bHQuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgT2JqZWN0LmtleXMobWF0Y2hSZXN1bHQpLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBJbnN0ZWFkIG9mIHBhc3NpbmcgYW4gZW1wdHkgb2JqZWN0IGluIGFzIHBhcmFtcywgdXNlIHVuZGVmaW5lZC5cbiAgICAgICAgICBwYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1hdGNoUmVzdWx0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAvLyBGb3IgdGhlIGJvb2xlYW4gdmFsdWUgdHJ1ZSAocmF0aGVyIHRoYW4ganVzdCBzb21ldGhpbmcgdHJ1dGgteSksXG4gICAgICAgICAgLy8gZG9uJ3Qgc2V0IHBhcmFtcy5cbiAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L3B1bGwvMjEzNCNpc3N1ZWNvbW1lbnQtNTEzOTI0MzUzXG4gICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIGhhdmUgYSBtYXRjaC5cbiAgICAgICAgcmV0dXJuIHtyb3V0ZSwgcGFyYW1zfTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgbm8gbWF0Y2ggd2FzIGZvdW5kIGFib3ZlLCByZXR1cm4gYW5kIGVtcHR5IG9iamVjdC5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGEgZGVmYXVsdCBgaGFuZGxlcmAgdGhhdCdzIGNhbGxlZCB3aGVuIG5vIHJvdXRlcyBleHBsaWNpdGx5XG4gICAqIG1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0LlxuICAgKlxuICAgKiBFYWNoIEhUVFAgbWV0aG9kICgnR0VUJywgJ1BPU1QnLCBldGMuKSBnZXRzIGl0cyBvd24gZGVmYXVsdCBoYW5kbGVyLlxuICAgKlxuICAgKiBXaXRob3V0IGEgZGVmYXVsdCBoYW5kbGVyLCB1bm1hdGNoZWQgcmVxdWVzdHMgd2lsbCBnbyBhZ2FpbnN0IHRoZVxuICAgKiBuZXR3b3JrIGFzIGlmIHRoZXJlIHdlcmUgbm8gc2VydmljZSB3b3JrZXIgcHJlc2VudC5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBhc3NvY2lhdGUgd2l0aCB0aGlzXG4gICAqIGRlZmF1bHQgaGFuZGxlci4gRWFjaCBtZXRob2QgaGFzIGl0cyBvd24gZGVmYXVsdC5cbiAgICovXG4gIHNldERlZmF1bHRIYW5kbGVyKFxuICAgIGhhbmRsZXI6IFJvdXRlSGFuZGxlcixcbiAgICBtZXRob2Q6IEhUVFBNZXRob2QgPSBkZWZhdWx0TWV0aG9kLFxuICApOiB2b2lkIHtcbiAgICB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcC5zZXQobWV0aG9kLCBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBhIFJvdXRlIHRocm93cyBhbiBlcnJvciB3aGlsZSBoYW5kbGluZyBhIHJlcXVlc3QsIHRoaXMgYGhhbmRsZXJgXG4gICAqIHdpbGwgYmUgY2FsbGVkIGFuZCBnaXZlbiBhIGNoYW5jZSB0byBwcm92aWRlIGEgcmVzcG9uc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAqL1xuICBzZXRDYXRjaEhhbmRsZXIoaGFuZGxlcjogUm91dGVIYW5kbGVyKTogdm9pZCB7XG4gICAgdGhpcy5fY2F0Y2hIYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSByb3V0ZSB3aXRoIHRoZSByb3V0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gcmVnaXN0ZXIuXG4gICAqL1xuICByZWdpc3RlclJvdXRlKHJvdXRlOiBSb3V0ZSk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzVHlwZShyb3V0ZSwgJ29iamVjdCcsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgIH0pO1xuXG4gICAgICBhc3NlcnQhLmhhc01ldGhvZChyb3V0ZSwgJ21hdGNoJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgfSk7XG5cbiAgICAgIGFzc2VydCEuaXNUeXBlKHJvdXRlLmhhbmRsZXIsICdvYmplY3QnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICB9KTtcblxuICAgICAgYXNzZXJ0IS5oYXNNZXRob2Qocm91dGUuaGFuZGxlciwgJ2hhbmRsZScsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlLmhhbmRsZXInLFxuICAgICAgfSk7XG5cbiAgICAgIGFzc2VydCEuaXNUeXBlKHJvdXRlLm1ldGhvZCwgJ3N0cmluZycsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlLm1ldGhvZCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3JvdXRlcy5oYXMocm91dGUubWV0aG9kKSkge1xuICAgICAgdGhpcy5fcm91dGVzLnNldChyb3V0ZS5tZXRob2QsIFtdKTtcbiAgICB9XG5cbiAgICAvLyBHaXZlIHByZWNlZGVuY2UgdG8gYWxsIG9mIHRoZSBlYXJsaWVyIHJvdXRlcyBieSBhZGRpbmcgdGhpcyBhZGRpdGlvbmFsXG4gICAgLy8gcm91dGUgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXG4gICAgdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpIS5wdXNoKHJvdXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbnJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmcuUm91dGV9IHJvdXRlIFRoZSByb3V0ZSB0byB1bnJlZ2lzdGVyLlxuICAgKi9cbiAgdW5yZWdpc3RlclJvdXRlKHJvdXRlOiBSb3V0ZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fcm91dGVzLmhhcyhyb3V0ZS5tZXRob2QpKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnLCB7XG4gICAgICAgIG1ldGhvZDogcm91dGUubWV0aG9kLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVJbmRleCA9IHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKSEuaW5kZXhPZihyb3V0ZSk7XG4gICAgaWYgKHJvdXRlSW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpIS5zcGxpY2Uocm91dGVJbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3VucmVnaXN0ZXItcm91dGUtcm91dGUtbm90LXJlZ2lzdGVyZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtSb3V0ZXJ9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL1JvdXRlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxubGV0IGRlZmF1bHRSb3V0ZXI6IFJvdXRlcjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBzaW5nbGV0b24gUm91dGVyIGluc3RhbmNlIGlmIG9uZSBkb2VzIG5vdCBleGlzdC4gSWYgb25lXG4gKiBkb2VzIGFscmVhZHkgZXhpc3QsIHRoYXQgaW5zdGFuY2UgaXMgcmV0dXJuZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge1JvdXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlciA9ICgpOiBSb3V0ZXIgPT4ge1xuICBpZiAoIWRlZmF1bHRSb3V0ZXIpIHtcbiAgICBkZWZhdWx0Um91dGVyID0gbmV3IFJvdXRlcigpO1xuXG4gICAgLy8gVGhlIGhlbHBlcnMgdGhhdCB1c2UgdGhlIGRlZmF1bHQgUm91dGVyIGFzc3VtZSB0aGVzZSBsaXN0ZW5lcnMgZXhpc3QuXG4gICAgZGVmYXVsdFJvdXRlci5hZGRGZXRjaExpc3RlbmVyKCk7XG4gICAgZGVmYXVsdFJvdXRlci5hZGRDYWNoZUxpc3RlbmVyKCk7XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRSb3V0ZXI7XG59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHtSb3V0ZUhhbmRsZXIsIFJvdXRlTWF0Y2hDYWxsYmFja30gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0IHtSb3V0ZX0gZnJvbSAnLi9Sb3V0ZS5qcyc7XG5pbXBvcnQge1JlZ0V4cFJvdXRlfSBmcm9tICcuL1JlZ0V4cFJvdXRlLmpzJztcbmltcG9ydCB7SFRUUE1ldGhvZH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHtnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXJ9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBFYXNpbHkgcmVnaXN0ZXIgYSBSZWdFeHAsIHN0cmluZywgb3IgZnVuY3Rpb24gd2l0aCBhIGNhY2hpbmdcbiAqIHN0cmF0ZWd5IHRvIGEgc2luZ2xldG9uIFJvdXRlciBpbnN0YW5jZS5cbiAqXG4gKiBUaGlzIG1ldGhvZCB3aWxsIGdlbmVyYXRlIGEgUm91dGUgZm9yIHlvdSBpZiBuZWVkZWQgYW5kXG4gKiBjYWxsIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGVyI3JlZ2lzdGVyUm91dGV9LlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ3x3b3JrYm94LXJvdXRpbmcuUm91dGV+bWF0Y2hDYWxsYmFja3x3b3JrYm94LXJvdXRpbmcuUm91dGV9IGNhcHR1cmVcbiAqIElmIHRoZSBjYXB0dXJlIHBhcmFtIGlzIGEgYFJvdXRlYCwgYWxsIG90aGVyIGFyZ3VtZW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IFtoYW5kbGVyXSBBIGNhbGxiYWNrXG4gKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLiBUaGlzIHBhcmFtZXRlclxuICogaXMgcmVxdWlyZWQgaWYgYGNhcHR1cmVgIGlzIG5vdCBhIGBSb3V0ZWAgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBtYXRjaCB0aGUgUm91dGVcbiAqIGFnYWluc3QuXG4gKiBAcmV0dXJuIHt3b3JrYm94LXJvdXRpbmcuUm91dGV9IFRoZSBnZW5lcmF0ZWQgYFJvdXRlYC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyUm91dGUoXG4gIGNhcHR1cmU6IFJlZ0V4cCB8IHN0cmluZyB8IFJvdXRlTWF0Y2hDYWxsYmFjayB8IFJvdXRlLFxuICBoYW5kbGVyPzogUm91dGVIYW5kbGVyLFxuICBtZXRob2Q/OiBIVFRQTWV0aG9kLFxuKTogUm91dGUge1xuICBsZXQgcm91dGU7XG5cbiAgaWYgKHR5cGVvZiBjYXB0dXJlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGNhcHR1cmVVcmwgPSBuZXcgVVJMKGNhcHR1cmUsIGxvY2F0aW9uLmhyZWYpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGNhcHR1cmUuc3RhcnRzV2l0aCgnLycpIHx8IGNhcHR1cmUuc3RhcnRzV2l0aCgnaHR0cCcpKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLXN0cmluZycsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NhcHR1cmUnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gV2Ugd2FudCB0byBjaGVjayBpZiBFeHByZXNzLXN0eWxlIHdpbGRjYXJkcyBhcmUgaW4gdGhlIHBhdGhuYW1lIG9ubHkuXG4gICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyBsb2cgbWVzc2FnZSBpbiB2NC5cbiAgICAgIGNvbnN0IHZhbHVlVG9DaGVjayA9IGNhcHR1cmUuc3RhcnRzV2l0aCgnaHR0cCcpXG4gICAgICAgID8gY2FwdHVyZVVybC5wYXRobmFtZVxuICAgICAgICA6IGNhcHR1cmU7XG5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAjcGFyYW1ldGVyc1xuICAgICAgY29uc3Qgd2lsZGNhcmRzID0gJ1sqOj8rXSc7XG4gICAgICBpZiAobmV3IFJlZ0V4cChgJHt3aWxkY2FyZHN9YCkuZXhlYyh2YWx1ZVRvQ2hlY2spKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICBgVGhlICckY2FwdHVyZScgcGFyYW1ldGVyIGNvbnRhaW5zIGFuIEV4cHJlc3Mtc3R5bGUgd2lsZGNhcmQgYCArXG4gICAgICAgICAgICBgY2hhcmFjdGVyICgke3dpbGRjYXJkc30pLiBTdHJpbmdzIGFyZSBub3cgYWx3YXlzIGludGVycHJldGVkIGFzIGAgK1xuICAgICAgICAgICAgYGV4YWN0IG1hdGNoZXM7IHVzZSBhIFJlZ0V4cCBmb3IgcGFydGlhbCBvciB3aWxkY2FyZCBtYXRjaGVzLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2hDYWxsYmFjazogUm91dGVNYXRjaENhbGxiYWNrID0gKHt1cmx9KSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdXJsLnBhdGhuYW1lID09PSBjYXB0dXJlVXJsLnBhdGhuYW1lICYmXG4gICAgICAgICAgdXJsLm9yaWdpbiAhPT0gY2FwdHVyZVVybC5vcmlnaW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgYCR7Y2FwdHVyZX0gb25seSBwYXJ0aWFsbHkgbWF0Y2hlcyB0aGUgY3Jvc3Mtb3JpZ2luIFVSTCBgICtcbiAgICAgICAgICAgICAgYCR7dXJsLnRvU3RyaW5nKCl9LiBUaGlzIHJvdXRlIHdpbGwgb25seSBoYW5kbGUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIGAgK1xuICAgICAgICAgICAgICBgaWYgdGhleSBtYXRjaCB0aGUgZW50aXJlIFVSTC5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVybC5ocmVmID09PSBjYXB0dXJlVXJsLmhyZWY7XG4gICAgfTtcblxuICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIHN0cmluZyB0aGVuIGBoYW5kbGVyYCBhbmQgYG1ldGhvZGAgbXVzdCBiZSBwcmVzZW50LlxuICAgIHJvdXRlID0gbmV3IFJvdXRlKG1hdGNoQ2FsbGJhY2ssIGhhbmRsZXIhLCBtZXRob2QpO1xuICB9IGVsc2UgaWYgKGNhcHR1cmUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBgUmVnRXhwYCB0aGVuIGBoYW5kbGVyYCBhbmQgYG1ldGhvZGAgbXVzdCBiZSBwcmVzZW50LlxuICAgIHJvdXRlID0gbmV3IFJlZ0V4cFJvdXRlKGNhcHR1cmUsIGhhbmRsZXIhLCBtZXRob2QpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjYXB0dXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgZnVuY3Rpb24gdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICByb3V0ZSA9IG5ldyBSb3V0ZShjYXB0dXJlLCBoYW5kbGVyISwgbWV0aG9kKTtcbiAgfSBlbHNlIGlmIChjYXB0dXJlIGluc3RhbmNlb2YgUm91dGUpIHtcbiAgICByb3V0ZSA9IGNhcHR1cmU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5zdXBwb3J0ZWQtcm91dGUtdHlwZScsIHtcbiAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgIHBhcmFtTmFtZTogJ2NhcHR1cmUnLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdFJvdXRlciA9IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcigpO1xuICBkZWZhdWx0Um91dGVyLnJlZ2lzdGVyUm91dGUocm91dGUpO1xuXG4gIHJldHVybiByb3V0ZTtcbn1cblxuZXhwb3J0IHtyZWdpc3RlclJvdXRlfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7Um91dGVIYW5kbGVyfSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQge2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcn0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIuanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIElmIGEgUm91dGUgdGhyb3dzIGFuIGVycm9yIHdoaWxlIGhhbmRsaW5nIGEgcmVxdWVzdCwgdGhpcyBgaGFuZGxlcmBcbiAqIHdpbGwgYmUgY2FsbGVkIGFuZCBnaXZlbiBhIGNoYW5jZSB0byBwcm92aWRlIGEgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5mdW5jdGlvbiBzZXRDYXRjaEhhbmRsZXIoaGFuZGxlcjogUm91dGVIYW5kbGVyKTogdm9pZCB7XG4gIGNvbnN0IGRlZmF1bHRSb3V0ZXIgPSBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIoKTtcbiAgZGVmYXVsdFJvdXRlci5zZXRDYXRjaEhhbmRsZXIoaGFuZGxlcik7XG59XG5cbmV4cG9ydCB7c2V0Q2F0Y2hIYW5kbGVyfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuZnVuY3Rpb24gc3RyaXBQYXJhbXMoZnVsbFVSTDogc3RyaW5nLCBpZ25vcmVQYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IHN0cmlwcGVkVVJMID0gbmV3IFVSTChmdWxsVVJMKTtcbiAgZm9yIChjb25zdCBwYXJhbSBvZiBpZ25vcmVQYXJhbXMpIHtcbiAgICBzdHJpcHBlZFVSTC5zZWFyY2hQYXJhbXMuZGVsZXRlKHBhcmFtKTtcbiAgfVxuICByZXR1cm4gc3RyaXBwZWRVUkwuaHJlZjtcbn1cblxuLyoqXG4gKiBNYXRjaGVzIGFuIGl0ZW0gaW4gdGhlIGNhY2hlLCBpZ25vcmluZyBzcGVjaWZpYyBVUkwgcGFyYW1zLiBUaGlzIGlzIHNpbWlsYXJcbiAqIHRvIHRoZSBgaWdub3JlU2VhcmNoYCBvcHRpb24sIGJ1dCBpdCBhbGxvd3MgeW91IHRvIGlnbm9yZSBqdXN0IHNwZWNpZmljXG4gKiBwYXJhbXMgKHdoaWxlIGNvbnRpbnVpbmcgdG8gbWF0Y2ggb24gdGhlIG90aGVycykuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Q2FjaGV9IGNhY2hlXG4gKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXRjaE9wdGlvbnNcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gaWdub3JlUGFyYW1zXG4gKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMoXG4gIGNhY2hlOiBDYWNoZSxcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgaWdub3JlUGFyYW1zOiBzdHJpbmdbXSxcbiAgbWF0Y2hPcHRpb25zPzogQ2FjaGVRdWVyeU9wdGlvbnMsXG4pOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPiB7XG4gIGNvbnN0IHN0cmlwcGVkUmVxdWVzdFVSTCA9IHN0cmlwUGFyYW1zKHJlcXVlc3QudXJsLCBpZ25vcmVQYXJhbXMpO1xuXG4gIC8vIElmIHRoZSByZXF1ZXN0IGRvZXNuJ3QgaW5jbHVkZSBhbnkgaWdub3JlZCBwYXJhbXMsIG1hdGNoIGFzIG5vcm1hbC5cbiAgaWYgKHJlcXVlc3QudXJsID09PSBzdHJpcHBlZFJlcXVlc3RVUkwpIHtcbiAgICByZXR1cm4gY2FjaGUubWF0Y2gocmVxdWVzdCwgbWF0Y2hPcHRpb25zKTtcbiAgfVxuXG4gIC8vIE90aGVyd2lzZSwgbWF0Y2ggYnkgY29tcGFyaW5nIGtleXNcbiAgY29uc3Qga2V5c09wdGlvbnMgPSB7Li4ubWF0Y2hPcHRpb25zLCBpZ25vcmVTZWFyY2g6IHRydWV9O1xuICBjb25zdCBjYWNoZUtleXMgPSBhd2FpdCBjYWNoZS5rZXlzKHJlcXVlc3QsIGtleXNPcHRpb25zKTtcblxuICBmb3IgKGNvbnN0IGNhY2hlS2V5IG9mIGNhY2hlS2V5cykge1xuICAgIGNvbnN0IHN0cmlwcGVkQ2FjaGVLZXlVUkwgPSBzdHJpcFBhcmFtcyhjYWNoZUtleS51cmwsIGlnbm9yZVBhcmFtcyk7XG4gICAgaWYgKHN0cmlwcGVkUmVxdWVzdFVSTCA9PT0gc3RyaXBwZWRDYWNoZUtleVVSTCkge1xuICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKGNhY2hlS2V5LCBtYXRjaE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICByZXR1cm47XG59XG5cbmV4cG9ydCB7Y2FjaGVNYXRjaElnbm9yZVBhcmFtc307XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBUaGUgRGVmZXJyZWQgY2xhc3MgY29tcG9zZXMgUHJvbWlzZXMgaW4gYSB3YXkgdGhhdCBhbGxvd3MgZm9yIHRoZW0gdG8gYmVcbiAqIHJlc29sdmVkIG9yIHJlamVjdGVkIGZyb20gb3V0c2lkZSB0aGUgY29uc3RydWN0b3IuIEluIG1vc3QgY2FzZXMgcHJvbWlzZXNcbiAqIHNob3VsZCBiZSB1c2VkIGRpcmVjdGx5LCBidXQgRGVmZXJyZWRzIGNhbiBiZSBuZWNlc3Nhcnkgd2hlbiB0aGUgbG9naWMgdG9cbiAqIHJlc29sdmUgYSBwcm9taXNlIG11c3QgYmUgc2VwYXJhdGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgRGVmZXJyZWQ8VD4ge1xuICBwcm9taXNlOiBQcm9taXNlPFQ+O1xuICByZXNvbHZlITogKHZhbHVlOiBUKSA9PiB2b2lkO1xuICByZWplY3QhOiAocmVhc29uPzogYW55KSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcHJvbWlzZSBhbmQgZXhwb3NlcyBpdHMgcmVzb2x2ZSBhbmQgcmVqZWN0IGZ1bmN0aW9ucyBhcyBtZXRob2RzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7RGVmZXJyZWR9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJy4uL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge3F1b3RhRXJyb3JDYWxsYmFja3N9IGZyb20gJy4uL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIFJ1bnMgYWxsIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMsIG9uZSBhdCBhIHRpbWUgc2VxdWVudGlhbGx5LCBpbiB0aGUgb3JkZXJcbiAqIGluIHdoaWNoIHRoZXkgd2VyZSByZWdpc3RlcmVkLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWNvcmVcbiAqIEBwcml2YXRlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzKCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlci5sb2coXG4gICAgICBgQWJvdXQgdG8gcnVuICR7cXVvdGFFcnJvckNhbGxiYWNrcy5zaXplfSBgICtcbiAgICAgICAgYGNhbGxiYWNrcyB0byBjbGVhbiB1cCBjYWNoZXMuYCxcbiAgICApO1xuICB9XG5cbiAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBxdW90YUVycm9yQ2FsbGJhY2tzKSB7XG4gICAgYXdhaXQgY2FsbGJhY2soKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmxvZyhjYWxsYmFjaywgJ2lzIGNvbXBsZXRlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VyLmxvZygnRmluaXNoZWQgcnVubmluZyBjYWxsYmFja3MuJyk7XG4gIH1cbn1cblxuZXhwb3J0IHtleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrc307XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBhbmQgdGhlIHBhc3NlZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuICogVGhpcyB1dGlsaXR5IGlzIGFuIGFzeW5jL2F3YWl0LWZyaWVuZGx5IHZlcnNpb24gb2YgYHNldFRpbWVvdXRgLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBtc1xuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXQobXM6IG51bWJlcik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsICIvLyBAdHMtaWdub3JlXG50cnl7c2VsZlsnd29ya2JveDpzdHJhdGVnaWVzOjcuMC4wJ10mJl8oKX1jYXRjaChlKXt9IiwgIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtjYWNoZU1hdGNoSWdub3JlUGFyYW1zfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVNYXRjaElnbm9yZVBhcmFtcy5qcyc7XG5pbXBvcnQge0RlZmVycmVkfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvRGVmZXJyZWQuanMnO1xuaW1wb3J0IHtleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge3RpbWVvdXR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7XG4gIEhhbmRsZXJDYWxsYmFja09wdGlvbnMsXG4gIE1hcExpa2VPYmplY3QsXG4gIFdvcmtib3hQbHVnaW4sXG4gIFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtLFxufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQge1N0cmF0ZWd5fSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmZ1bmN0aW9uIHRvUmVxdWVzdChpbnB1dDogUmVxdWVzdEluZm8pIHtcbiAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBuZXcgUmVxdWVzdChpbnB1dCkgOiBpbnB1dDtcbn1cblxuLyoqXG4gKiBBIGNsYXNzIGNyZWF0ZWQgZXZlcnkgdGltZSBhIFN0cmF0ZWd5IGluc3RhbmNlIGluc3RhbmNlIGNhbGxzXG4gKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fmhhbmRsZX0gb3JcbiAqIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlQWxsfSB0aGF0IHdyYXBzIGFsbCBmZXRjaCBhbmRcbiAqIGNhY2hlIGFjdGlvbnMgYXJvdW5kIHBsdWdpbiBjYWxsYmFja3MgYW5kIGtlZXBzIHRyYWNrIG9mIHdoZW4gdGhlIHN0cmF0ZWd5XG4gKiBpcyBcImRvbmVcIiAoaS5lLiBhbGwgYWRkZWQgYGV2ZW50LndhaXRVbnRpbCgpYCBwcm9taXNlcyBoYXZlIHJlc29sdmVkKS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIFN0cmF0ZWd5SGFuZGxlciB7XG4gIHB1YmxpYyByZXF1ZXN0ITogUmVxdWVzdDtcbiAgcHVibGljIHVybD86IFVSTDtcbiAgcHVibGljIGV2ZW50OiBFeHRlbmRhYmxlRXZlbnQ7XG4gIHB1YmxpYyBwYXJhbXM/OiBhbnk7XG5cbiAgcHJpdmF0ZSBfY2FjaGVLZXlzOiBSZWNvcmQ8c3RyaW5nLCBSZXF1ZXN0PiA9IHt9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0cmF0ZWd5OiBTdHJhdGVneTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZXh0ZW5kTGlmZXRpbWVQcm9taXNlczogUHJvbWlzZTxhbnk+W107XG4gIHByaXZhdGUgcmVhZG9ubHkgX2hhbmRsZXJEZWZlcnJlZDogRGVmZXJyZWQ8YW55PjtcbiAgcHJpdmF0ZSByZWFkb25seSBfcGx1Z2luczogV29ya2JveFBsdWdpbltdO1xuICBwcml2YXRlIHJlYWRvbmx5IF9wbHVnaW5TdGF0ZU1hcDogTWFwPFdvcmtib3hQbHVnaW4sIE1hcExpa2VPYmplY3Q+O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFzc2VkIHN0cmF0ZWd5IGFuZCBldmVudFxuICAgKiB0aGF0J3MgaGFuZGxpbmcgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBhbHNvIGluaXRpYWxpemVzIHRoZSBzdGF0ZSB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIGVhY2ggb2ZcbiAgICogdGhlIHBsdWdpbnMgaGFuZGxpbmcgdGhpcyByZXF1ZXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX0gc3RyYXRlZ3lcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAqICAgICByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLnBhcmFtc10gVGhlIHJldHVybiB2YWx1ZSBmcm9tIHRoZVxuICAgKiAgICAge0BsaW5rIHdvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSAoaWYgYXBwbGljYWJsZSkuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihzdHJhdGVneTogU3RyYXRlZ3ksIG9wdGlvbnM6IEhhbmRsZXJDYWxsYmFja09wdGlvbnMpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVxdWVzdCB0aGUgc3RyYXRlZ3kgaXMgcGVyZm9ybWluZyAocGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICogYGhhbmRsZSgpYCBvciBgaGFuZGxlQWxsKClgIG1ldGhvZCkuXG4gICAgICogQG5hbWUgcmVxdWVzdFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtSZXF1ZXN0fVxuICAgICAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICovXG4gICAgLyoqXG4gICAgICogVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJlcXVlc3QuXG4gICAgICogQG5hbWUgZXZlbnRcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7RXh0ZW5kYWJsZUV2ZW50fVxuICAgICAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQSBgVVJMYCBpbnN0YW5jZSBvZiBgcmVxdWVzdC51cmxgIChpZiBwYXNzZWQgdG8gdGhlIHN0cmF0ZWd5J3NcbiAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgKiBOb3RlOiB0aGUgYHVybGAgcGFyYW0gd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBzdHJhdGVneSB3YXMgaW52b2tlZFxuICAgICAqIGZyb20gYSB3b3JrYm94IGBSb3V0ZWAgb2JqZWN0LlxuICAgICAqIEBuYW1lIHVybFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtVUkx8dW5kZWZpbmVkfVxuICAgICAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICovXG4gICAgLyoqXG4gICAgICogQSBgcGFyYW1gIHZhbHVlIChpZiBwYXNzZWQgdG8gdGhlIHN0cmF0ZWd5J3NcbiAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgKiBOb3RlOiB0aGUgYHBhcmFtYCBwYXJhbSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIHN0cmF0ZWd5IHdhcyBpbnZva2VkXG4gICAgICogZnJvbSBhIHdvcmtib3ggYFJvdXRlYCBvYmplY3QgYW5kIHRoZVxuICAgICAqIHtAbGluayB3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gcmV0dXJuZWRcbiAgICAgKiBhIHRydXRoeSB2YWx1ZSAoaXQgd2lsbCBiZSB0aGF0IHZhbHVlKS5cbiAgICAgKiBAbmFtZSBwYXJhbXNcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7Knx1bmRlZmluZWR9XG4gICAgICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKG9wdGlvbnMuZXZlbnQsIEV4dGVuZGFibGVFdmVudCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnU3RyYXRlZ3lIYW5kbGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ29wdGlvbnMuZXZlbnQnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuZXZlbnQgPSBvcHRpb25zLmV2ZW50O1xuICAgIHRoaXMuX3N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgdGhpcy5faGFuZGxlckRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XG4gICAgdGhpcy5fZXh0ZW5kTGlmZXRpbWVQcm9taXNlcyA9IFtdO1xuXG4gICAgLy8gQ29weSB0aGUgcGx1Z2lucyBsaXN0IChzaW5jZSBpdCdzIG11dGFibGUgb24gdGhlIHN0cmF0ZWd5KSxcbiAgICAvLyBzbyBhbnkgbXV0YXRpb25zIGRvbid0IGFmZmVjdCB0aGlzIGhhbmRsZXIgaW5zdGFuY2UuXG4gICAgdGhpcy5fcGx1Z2lucyA9IFsuLi5zdHJhdGVneS5wbHVnaW5zXTtcbiAgICB0aGlzLl9wbHVnaW5TdGF0ZU1hcCA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLl9wbHVnaW5zKSB7XG4gICAgICB0aGlzLl9wbHVnaW5TdGF0ZU1hcC5zZXQocGx1Z2luLCB7fSk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudC53YWl0VW50aWwodGhpcy5faGFuZGxlckRlZmVycmVkLnByb21pc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBnaXZlbiByZXF1ZXN0IChhbmQgaW52b2tlcyBhbnkgYXBwbGljYWJsZSBwbHVnaW4gY2FsbGJhY2tcbiAgICogbWV0aG9kcykgdXNpbmcgdGhlIGBmZXRjaE9wdGlvbnNgIChmb3Igbm9uLW5hdmlnYXRpb24gcmVxdWVzdHMpIGFuZFxuICAgKiBgcGx1Z2luc2AgZGVmaW5lZCBvbiB0aGUgYFN0cmF0ZWd5YCBvYmplY3QuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAqIC0gYHJlcXVlc3RXaWxsRmV0Y2goKWBcbiAgICogLSBgZmV0Y2hEaWRTdWNjZWVkKClgXG4gICAqIC0gYGZldGNoRGlkRmFpbCgpYFxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBpbnB1dCBUaGUgVVJMIG9yIHJlcXVlc3QgdG8gZmV0Y2guXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgZmV0Y2goaW5wdXQ6IFJlcXVlc3RJbmZvKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHtldmVudH0gPSB0aGlzO1xuICAgIGxldCByZXF1ZXN0OiBSZXF1ZXN0ID0gdG9SZXF1ZXN0KGlucHV0KTtcblxuICAgIGlmIChcbiAgICAgIHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJyAmJlxuICAgICAgZXZlbnQgaW5zdGFuY2VvZiBGZXRjaEV2ZW50ICYmXG4gICAgICBldmVudC5wcmVsb2FkUmVzcG9uc2VcbiAgICApIHtcbiAgICAgIGNvbnN0IHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlID0gKGF3YWl0IGV2ZW50LnByZWxvYWRSZXNwb25zZSkgYXNcbiAgICAgICAgfCBSZXNwb25zZVxuICAgICAgICB8IHVuZGVmaW5lZDtcbiAgICAgIGlmIChwb3NzaWJsZVByZWxvYWRSZXNwb25zZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGxvZ2dlci5sb2coXG4gICAgICAgICAgICBgVXNpbmcgYSBwcmVsb2FkZWQgbmF2aWdhdGlvbiByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9J2AsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zc2libGVQcmVsb2FkUmVzcG9uc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBmZXRjaERpZEZhaWwgcGx1Z2luLCB3ZSBuZWVkIHRvIHNhdmUgYSBjbG9uZSBvZiB0aGVcbiAgICAvLyBvcmlnaW5hbCByZXF1ZXN0IGJlZm9yZSBpdCdzIGVpdGhlciBtb2RpZmllZCBieSBhIHJlcXVlc3RXaWxsRmV0Y2hcbiAgICAvLyBwbHVnaW4gb3IgYmVmb3JlIHRoZSBvcmlnaW5hbCByZXF1ZXN0J3MgYm9keSBpcyBjb25zdW1lZCB2aWEgZmV0Y2goKS5cbiAgICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSB0aGlzLmhhc0NhbGxiYWNrKCdmZXRjaERpZEZhaWwnKVxuICAgICAgPyByZXF1ZXN0LmNsb25lKClcbiAgICAgIDogbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKGNvbnN0IGNiIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygncmVxdWVzdFdpbGxGZXRjaCcpKSB7XG4gICAgICAgIHJlcXVlc3QgPSBhd2FpdCBjYih7cmVxdWVzdDogcmVxdWVzdC5jbG9uZSgpLCBldmVudH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3BsdWdpbi1lcnJvci1yZXF1ZXN0LXdpbGwtZmV0Y2gnLCB7XG4gICAgICAgICAgdGhyb3duRXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIHJlcXVlc3QgY2FuIGJlIGFsdGVyZWQgYnkgcGx1Z2lucyB3aXRoIGByZXF1ZXN0V2lsbEZldGNoYCBtYWtpbmdcbiAgICAvLyB0aGUgb3JpZ2luYWwgcmVxdWVzdCAobW9zdCBsaWtlbHkgZnJvbSBhIGBmZXRjaGAgZXZlbnQpIGRpZmZlcmVudFxuICAgIC8vIGZyb20gdGhlIFJlcXVlc3Qgd2UgbWFrZS4gUGFzcyBib3RoIHRvIGBmZXRjaERpZEZhaWxgIHRvIGFpZCBkZWJ1Z2dpbmcuXG4gICAgY29uc3QgcGx1Z2luRmlsdGVyZWRSZXF1ZXN0OiBSZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBmZXRjaFJlc3BvbnNlOiBSZXNwb25zZTtcblxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NlxuICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScgPyB1bmRlZmluZWQgOiB0aGlzLl9zdHJhdGVneS5mZXRjaE9wdGlvbnMsXG4gICAgICApO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgYE5ldHdvcmsgcmVxdWVzdCBmb3IgYCArXG4gICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScgcmV0dXJuZWQgYSByZXNwb25zZSB3aXRoIGAgK1xuICAgICAgICAgICAgYHN0YXR1cyAnJHtmZXRjaFJlc3BvbnNlLnN0YXR1c30nLmAsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdmZXRjaERpZFN1Y2NlZWQnKSkge1xuICAgICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIHJlcXVlc3Q6IHBsdWdpbkZpbHRlcmVkUmVxdWVzdCxcbiAgICAgICAgICByZXNwb25zZTogZmV0Y2hSZXNwb25zZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmV0Y2hSZXNwb25zZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgICBgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9JyB0aHJldyBhbiBlcnJvci5gLFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBgb3JpZ2luYWxSZXF1ZXN0YCB3aWxsIG9ubHkgZXhpc3QgaWYgYSBgZmV0Y2hEaWRGYWlsYCBjYWxsYmFja1xuICAgICAgLy8gaXMgYmVpbmcgdXNlZCAoc2VlIGFib3ZlKS5cbiAgICAgIGlmIChvcmlnaW5hbFJlcXVlc3QpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5DYWxsYmFja3MoJ2ZldGNoRGlkRmFpbCcsIHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IgYXMgRXJyb3IsXG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgb3JpZ2luYWxSZXF1ZXN0OiBvcmlnaW5hbFJlcXVlc3QuY2xvbmUoKSxcbiAgICAgICAgICByZXF1ZXN0OiBwbHVnaW5GaWx0ZXJlZFJlcXVlc3QuY2xvbmUoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbHMgYHRoaXMuZmV0Y2goKWAgYW5kIChpbiB0aGUgYmFja2dyb3VuZCkgcnVucyBgdGhpcy5jYWNoZVB1dCgpYCBvblxuICAgKiB0aGUgcmVzcG9uc2UgZ2VuZXJhdGVkIGJ5IGB0aGlzLmZldGNoKClgLlxuICAgKlxuICAgKiBUaGUgY2FsbCB0byBgdGhpcy5jYWNoZVB1dCgpYCBhdXRvbWF0aWNhbGx5IGludm9rZXMgYHRoaXMud2FpdFVudGlsKClgLFxuICAgKiBzbyB5b3UgZG8gbm90IGhhdmUgdG8gbWFudWFsbHkgY2FsbCBgd2FpdFVudGlsKClgIG9uIHRoZSBldmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gaW5wdXQgVGhlIHJlcXVlc3Qgb3IgVVJMIHRvIGZldGNoIGFuZCBjYWNoZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBmZXRjaEFuZENhY2hlUHV0KGlucHV0OiBSZXF1ZXN0SW5mbyk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2goaW5wdXQpO1xuICAgIGNvbnN0IHJlc3BvbnNlQ2xvbmUgPSByZXNwb25zZS5jbG9uZSgpO1xuXG4gICAgdm9pZCB0aGlzLndhaXRVbnRpbCh0aGlzLmNhY2hlUHV0KGlucHV0LCByZXNwb25zZUNsb25lKSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogTWF0Y2hlcyBhIHJlcXVlc3QgZnJvbSB0aGUgY2FjaGUgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlIHBsdWdpblxuICAgKiBjYWxsYmFjayBtZXRob2RzKSB1c2luZyB0aGUgYGNhY2hlTmFtZWAsIGBtYXRjaE9wdGlvbnNgLCBhbmQgYHBsdWdpbnNgXG4gICAqIGRlZmluZWQgb24gdGhlIHN0cmF0ZWd5IG9iamVjdC5cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICogLSBjYWNoZUtleVdpbGxCeVVzZWQoKVxuICAgKiAtIGNhY2hlZFJlc3BvbnNlV2lsbEJ5VXNlZCgpXG4gICAqXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGtleSBUaGUgUmVxdWVzdCBvciBVUkwgdG8gdXNlIGFzIHRoZSBjYWNoZSBrZXkuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn0gQSBtYXRjaGluZyByZXNwb25zZSwgaWYgZm91bmQuXG4gICAqL1xuICBhc3luYyBjYWNoZU1hdGNoKGtleTogUmVxdWVzdEluZm8pOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3QgcmVxdWVzdDogUmVxdWVzdCA9IHRvUmVxdWVzdChrZXkpO1xuICAgIGxldCBjYWNoZWRSZXNwb25zZTogUmVzcG9uc2UgfCB1bmRlZmluZWQ7XG4gICAgY29uc3Qge2NhY2hlTmFtZSwgbWF0Y2hPcHRpb25zfSA9IHRoaXMuX3N0cmF0ZWd5O1xuXG4gICAgY29uc3QgZWZmZWN0aXZlUmVxdWVzdCA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGVLZXkocmVxdWVzdCwgJ3JlYWQnKTtcbiAgICBjb25zdCBtdWx0aU1hdGNoT3B0aW9ucyA9IHsuLi5tYXRjaE9wdGlvbnMsIC4uLntjYWNoZU5hbWV9fTtcblxuICAgIGNhY2hlZFJlc3BvbnNlID0gYXdhaXQgY2FjaGVzLm1hdGNoKGVmZmVjdGl2ZVJlcXVlc3QsIG11bHRpTWF0Y2hPcHRpb25zKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiAnJHtjYWNoZU5hbWV9Jy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgTm8gY2FjaGVkIHJlc3BvbnNlIGZvdW5kIGluICcke2NhY2hlTmFtZX0nLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQnKSkge1xuICAgICAgY2FjaGVkUmVzcG9uc2UgPVxuICAgICAgICAoYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgICBtYXRjaE9wdGlvbnMsXG4gICAgICAgICAgY2FjaGVkUmVzcG9uc2UsXG4gICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgfSkpIHx8IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1dHMgYSByZXF1ZXN0L3Jlc3BvbnNlIHBhaXIgaW4gdGhlIGNhY2hlIChhbmQgaW52b2tlcyBhbnkgYXBwbGljYWJsZVxuICAgKiBwbHVnaW4gY2FsbGJhY2sgbWV0aG9kcykgdXNpbmcgdGhlIGBjYWNoZU5hbWVgIGFuZCBgcGx1Z2luc2AgZGVmaW5lZCBvblxuICAgKiB0aGUgc3RyYXRlZ3kgb2JqZWN0LlxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIHBsdWdpbiBsaWZlY3ljbGUgbWV0aG9kcyBhcmUgaW52b2tlZCB3aGVuIHVzaW5nIHRoaXMgbWV0aG9kOlxuICAgKiAtIGNhY2hlS2V5V2lsbEJ5VXNlZCgpXG4gICAqIC0gY2FjaGVXaWxsVXBkYXRlKClcbiAgICogLSBjYWNoZURpZFVwZGF0ZSgpXG4gICAqXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGtleSBUaGUgcmVxdWVzdCBvciBVUkwgdG8gdXNlIGFzIHRoZSBjYWNoZSBrZXkuXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlIFRoZSByZXNwb25zZSB0byBjYWNoZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gYGZhbHNlYCBpZiBhIGNhY2hlV2lsbFVwZGF0ZSBjYXVzZWQgdGhlIHJlc3BvbnNlXG4gICAqIG5vdCBiZSBjYWNoZWQsIGFuZCBgdHJ1ZWAgb3RoZXJ3aXNlLlxuICAgKi9cbiAgYXN5bmMgY2FjaGVQdXQoa2V5OiBSZXF1ZXN0SW5mbywgcmVzcG9uc2U6IFJlc3BvbnNlKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgcmVxdWVzdDogUmVxdWVzdCA9IHRvUmVxdWVzdChrZXkpO1xuXG4gICAgLy8gUnVuIGluIHRoZSBuZXh0IHRhc2sgdG8gYXZvaWQgYmxvY2tpbmcgb3RoZXIgY2FjaGUgcmVhZHMuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9TZXJ2aWNlV29ya2VyL2lzc3Vlcy8xMzk3XG4gICAgYXdhaXQgdGltZW91dCgwKTtcblxuICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCB0aGlzLmdldENhY2hlS2V5KHJlcXVlc3QsICd3cml0ZScpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChlZmZlY3RpdmVSZXF1ZXN0Lm1ldGhvZCAmJiBlZmZlY3RpdmVSZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYXR0ZW1wdC10by1jYWNoZS1ub24tZ2V0LXJlcXVlc3QnLCB7XG4gICAgICAgICAgdXJsOiBnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCksXG4gICAgICAgICAgbWV0aG9kOiBlZmZlY3RpdmVSZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI4MThcbiAgICAgIGNvbnN0IHZhcnkgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnVmFyeScpO1xuICAgICAgaWYgKHZhcnkpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgIGBUaGUgcmVzcG9uc2UgZm9yICR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfSBgICtcbiAgICAgICAgICAgIGBoYXMgYSAnVmFyeTogJHt2YXJ5fScgaGVhZGVyLiBgICtcbiAgICAgICAgICAgIGBDb25zaWRlciBzZXR0aW5nIHRoZSB7aWdub3JlVmFyeTogdHJ1ZX0gb3B0aW9uIG9uIHlvdXIgc3RyYXRlZ3kgYCArXG4gICAgICAgICAgICBgdG8gZW5zdXJlIGNhY2hlIG1hdGNoaW5nIGFuZCBkZWxldGlvbiB3b3JrcyBhcyBleHBlY3RlZC5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihcbiAgICAgICAgICBgQ2Fubm90IGNhY2hlIG5vbi1leGlzdGVudCByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfScuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignY2FjaGUtcHV0LXdpdGgtbm8tcmVzcG9uc2UnLCB7XG4gICAgICAgIHVybDogZ2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2VUb0NhY2hlID0gYXdhaXQgdGhpcy5fZW5zdXJlUmVzcG9uc2VTYWZlVG9DYWNoZShyZXNwb25zZSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgIGBSZXNwb25zZSAnJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9JyBgICtcbiAgICAgICAgICAgIGB3aWxsIG5vdCBiZSBjYWNoZWQuYCxcbiAgICAgICAgICByZXNwb25zZVRvQ2FjaGUsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qge2NhY2hlTmFtZSwgbWF0Y2hPcHRpb25zfSA9IHRoaXMuX3N0cmF0ZWd5O1xuICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3BlbihjYWNoZU5hbWUpO1xuXG4gICAgY29uc3QgaGFzQ2FjaGVVcGRhdGVDYWxsYmFjayA9IHRoaXMuaGFzQ2FsbGJhY2soJ2NhY2hlRGlkVXBkYXRlJyk7XG4gICAgY29uc3Qgb2xkUmVzcG9uc2UgPSBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrXG4gICAgICA/IGF3YWl0IGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMoXG4gICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiB0aGUgYF9fV0JfUkVWSVNJT05fX2AgcGFyYW0gaXMgYSBwcmVjYWNoaW5nXG4gICAgICAgICAgLy8gZmVhdHVyZS4gQ29uc2lkZXIgaW50byB3YXlzIHRvIG9ubHkgYWRkIHRoaXMgYmVoYXZpb3IgaWYgdXNpbmdcbiAgICAgICAgICAvLyBwcmVjYWNoaW5nLlxuICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgIGVmZmVjdGl2ZVJlcXVlc3QuY2xvbmUoKSxcbiAgICAgICAgICBbJ19fV0JfUkVWSVNJT05fXyddLFxuICAgICAgICAgIG1hdGNoT3B0aW9ucyxcbiAgICAgICAgKVxuICAgICAgOiBudWxsO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgYFVwZGF0aW5nIHRoZSAnJHtjYWNoZU5hbWV9JyBjYWNoZSB3aXRoIGEgbmV3IFJlc3BvbnNlIGAgK1xuICAgICAgICAgIGBmb3IgJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9LmAsXG4gICAgICApO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjYWNoZS5wdXQoXG4gICAgICAgIGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgIGhhc0NhY2hlVXBkYXRlQ2FsbGJhY2sgPyByZXNwb25zZVRvQ2FjaGUuY2xvbmUoKSA6IHJlc3BvbnNlVG9DYWNoZSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NRXhjZXB0aW9uI2V4Y2VwdGlvbi1RdW90YUV4Y2VlZGVkRXJyb3JcbiAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InKSB7XG4gICAgICAgICAgYXdhaXQgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVEaWRVcGRhdGUnKSkge1xuICAgICAgYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICBjYWNoZU5hbWUsXG4gICAgICAgIG9sZFJlc3BvbnNlLFxuICAgICAgICBuZXdSZXNwb25zZTogcmVzcG9uc2VUb0NhY2hlLmNsb25lKCksXG4gICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRoZSBsaXN0IG9mIHBsdWdpbnMgZm9yIHRoZSBgY2FjaGVLZXlXaWxsQmVVc2VkYCBjYWxsYmFjaywgYW5kXG4gICAqIGV4ZWN1dGVzIGFueSBvZiB0aG9zZSBjYWxsYmFja3MgZm91bmQgaW4gc2VxdWVuY2UuIFRoZSBmaW5hbCBgUmVxdWVzdGBcbiAgICogb2JqZWN0IHJldHVybmVkIGJ5IHRoZSBsYXN0IHBsdWdpbiBpcyB0cmVhdGVkIGFzIHRoZSBjYWNoZSBrZXkgZm9yIGNhY2hlXG4gICAqIHJlYWRzIGFuZC9vciB3cml0ZXMuIElmIG5vIGBjYWNoZUtleVdpbGxCZVVzZWRgIHBsdWdpbiBjYWxsYmFja3MgaGF2ZVxuICAgKiBiZWVuIHJlZ2lzdGVyZWQsIHRoZSBwYXNzZWQgcmVxdWVzdCBpcyByZXR1cm5lZCB1bm1vZGlmaWVkXG4gICAqXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlcXVlc3Q+fVxuICAgKi9cbiAgYXN5bmMgZ2V0Q2FjaGVLZXkoXG4gICAgcmVxdWVzdDogUmVxdWVzdCxcbiAgICBtb2RlOiAncmVhZCcgfCAnd3JpdGUnLFxuICApOiBQcm9taXNlPFJlcXVlc3Q+IHtcbiAgICBjb25zdCBrZXkgPSBgJHtyZXF1ZXN0LnVybH0gfCAke21vZGV9YDtcbiAgICBpZiAoIXRoaXMuX2NhY2hlS2V5c1trZXldKSB7XG4gICAgICBsZXQgZWZmZWN0aXZlUmVxdWVzdCA9IHJlcXVlc3Q7XG5cbiAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZUtleVdpbGxCZVVzZWQnKSkge1xuICAgICAgICBlZmZlY3RpdmVSZXF1ZXN0ID0gdG9SZXF1ZXN0KFxuICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgIG1vZGUsXG4gICAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICAvLyBwYXJhbXMgaGFzIGEgdHlwZSBhbnkgY2FuJ3QgY2hhbmdlIHJpZ2h0IG5vdy5cbiAgICAgICAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2FjaGVLZXlzW2tleV0gPSBlZmZlY3RpdmVSZXF1ZXN0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY2FjaGVLZXlzW2tleV07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJhdGVneSBoYXMgYXQgbGVhc3Qgb25lIHBsdWdpbiB3aXRoIHRoZSBnaXZlblxuICAgKiBjYWxsYmFjay5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNhbGxiYWNrIHRvIGNoZWNrIGZvci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0NhbGxiYWNrPEMgZXh0ZW5kcyBrZXlvZiBXb3JrYm94UGx1Z2luPihuYW1lOiBDKTogYm9vbGVhbiB7XG4gICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fc3RyYXRlZ3kucGx1Z2lucykge1xuICAgICAgaWYgKG5hbWUgaW4gcGx1Z2luKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUnVucyBhbGwgcGx1Z2luIGNhbGxiYWNrcyBtYXRjaGluZyB0aGUgZ2l2ZW4gbmFtZSwgaW4gb3JkZXIsIHBhc3NpbmcgdGhlXG4gICAqIGdpdmVuIHBhcmFtIG9iamVjdCAobWVyZ2VkIGl0aCB0aGUgY3VycmVudCBwbHVnaW4gc3RhdGUpIGFzIHRoZSBvbmx5XG4gICAqIGFyZ3VtZW50LlxuICAgKlxuICAgKiBOb3RlOiBzaW5jZSB0aGlzIG1ldGhvZCBydW5zIGFsbCBwbHVnaW5zLCBpdCdzIG5vdCBzdWl0YWJsZSBmb3IgY2FzZXNcbiAgICogd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBvZiBhIGNhbGxiYWNrIG5lZWRzIHRvIGJlIGFwcGxpZWQgcHJpb3IgdG8gY2FsbGluZ1xuICAgKiB0aGUgbmV4dCBjYWxsYmFjay4gU2VlXG4gICAqIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyI2l0ZXJhdGVDYWxsYmFja3N9XG4gICAqIGJlbG93IGZvciBob3cgdG8gaGFuZGxlIHRoYXQgY2FzZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNhbGxiYWNrIHRvIHJ1biB3aXRoaW4gZWFjaCBwbHVnaW4uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbSBUaGUgb2JqZWN0IHRvIHBhc3MgYXMgdGhlIGZpcnN0IChhbmQgb25seSkgcGFyYW1cbiAgICogICAgIHdoZW4gZXhlY3V0aW5nIGVhY2ggY2FsbGJhY2suIFRoaXMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggdGhlXG4gICAqICAgICBjdXJyZW50IHBsdWdpbiBzdGF0ZSBwcmlvciB0byBjYWxsYmFjayBleGVjdXRpb24uXG4gICAqL1xuICBhc3luYyBydW5DYWxsYmFja3M8QyBleHRlbmRzIGtleW9mIE5vbk51bGxhYmxlPFdvcmtib3hQbHVnaW4+PihcbiAgICBuYW1lOiBDLFxuICAgIHBhcmFtOiBPbWl0PFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtW0NdLCAnc3RhdGUnPixcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MobmFtZSkpIHtcbiAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogbm90IHN1cmUgd2h5IGBhbnlgIGlzIG5lZWRlZC4gSXQgc2VlbXMgbGlrZVxuICAgICAgLy8gdGhpcyBzaG91bGQgd29yayB3aXRoIGBhcyBXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXWAuXG4gICAgICBhd2FpdCBjYWxsYmFjayhwYXJhbSBhcyBhbnkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIGEgY2FsbGJhY2sgYW5kIHJldHVybnMgYW4gaXRlcmFibGUgb2YgbWF0Y2hpbmcgcGx1Z2luIGNhbGxiYWNrcyxcbiAgICogd2hlcmUgZWFjaCBjYWxsYmFjayBpcyB3cmFwcGVkIHdpdGggdGhlIGN1cnJlbnQgaGFuZGxlciBzdGF0ZSAoaS5lLiB3aGVuXG4gICAqIHlvdSBjYWxsIGVhY2ggY2FsbGJhY2ssIHdoYXRldmVyIG9iamVjdCBwYXJhbWV0ZXIgeW91IHBhc3MgaXQgd2lsbFxuICAgKiBiZSBtZXJnZWQgd2l0aCB0aGUgcGx1Z2luJ3MgY3VycmVudCBzdGF0ZSkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIGZvIHRoZSBjYWxsYmFjayB0byBydW5cbiAgICogQHJldHVybiB7QXJyYXk8RnVuY3Rpb24+fVxuICAgKi9cbiAgKml0ZXJhdGVDYWxsYmFja3M8QyBleHRlbmRzIGtleW9mIFdvcmtib3hQbHVnaW4+KFxuICAgIG5hbWU6IEMsXG4gICk6IEdlbmVyYXRvcjxOb25OdWxsYWJsZTxXb3JrYm94UGx1Z2luW0NdPj4ge1xuICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3N0cmF0ZWd5LnBsdWdpbnMpIHtcbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fcGx1Z2luU3RhdGVNYXAuZ2V0KHBsdWdpbik7XG4gICAgICAgIGNvbnN0IHN0YXRlZnVsQ2FsbGJhY2sgPSAoXG4gICAgICAgICAgcGFyYW06IE9taXQ8V29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ10sICdzdGF0ZSc+LFxuICAgICAgICApID0+IHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWZ1bFBhcmFtID0gey4uLnBhcmFtLCBzdGF0ZX07XG5cbiAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG5vdCBzdXJlIHdoeSBgYW55YCBpcyBuZWVkZWQuIEl0IHNlZW1zIGxpa2VcbiAgICAgICAgICAvLyB0aGlzIHNob3VsZCB3b3JrIHdpdGggYGFzIFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtW0NdYC5cbiAgICAgICAgICByZXR1cm4gcGx1Z2luW25hbWVdIShzdGF0ZWZ1bFBhcmFtIGFzIGFueSk7XG4gICAgICAgIH07XG4gICAgICAgIHlpZWxkIHN0YXRlZnVsQ2FsbGJhY2sgYXMgTm9uTnVsbGFibGU8V29ya2JveFBsdWdpbltDXT47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwcm9taXNlIHRvIHRoZVxuICAgKiBbZXh0ZW5kIGxpZmV0aW1lIHByb21pc2VzXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZXh0ZW5kYWJsZWV2ZW50LWV4dGVuZC1saWZldGltZS1wcm9taXNlc31cbiAgICogb2YgdGhlIGV2ZW50IGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVxdWVzdCBiZWluZyBoYW5kbGVkICh1c3VhbGx5IGFcbiAgICogYEZldGNoRXZlbnRgKS5cbiAgICpcbiAgICogTm90ZTogeW91IGNhbiBhd2FpdFxuICAgKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn5kb25lV2FpdGluZ31cbiAgICogdG8ga25vdyB3aGVuIGFsbCBhZGRlZCBwcm9taXNlcyBoYXZlIHNldHRsZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7UHJvbWlzZX0gcHJvbWlzZSBBIHByb21pc2UgdG8gYWRkIHRvIHRoZSBleHRlbmQgbGlmZXRpbWUgcHJvbWlzZXNcbiAgICogICAgIG9mIHRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICovXG4gIHdhaXRVbnRpbDxUPihwcm9taXNlOiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgdGhpcy5fZXh0ZW5kTGlmZXRpbWVQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb25jZSBhbGwgcHJvbWlzZXMgcGFzc2VkIHRvXG4gICAqIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfndhaXRVbnRpbH1cbiAgICogaGF2ZSBzZXR0bGVkLlxuICAgKlxuICAgKiBOb3RlOiBhbnkgd29yayBkb25lIGFmdGVyIGBkb25lV2FpdGluZygpYCBzZXR0bGVzIHNob3VsZCBiZSBtYW51YWxseVxuICAgKiBwYXNzZWQgdG8gYW4gZXZlbnQncyBgd2FpdFVudGlsKClgIG1ldGhvZCAobm90IHRoaXMgaGFuZGxlcidzXG4gICAqIGB3YWl0VW50aWwoKWAgbWV0aG9kKSwgb3RoZXJ3aXNlIHRoZSBzZXJ2aWNlIHdvcmtlciB0aHJlYWQgbXkgYmUga2lsbGVkXG4gICAqIHByaW9yIHRvIHlvdXIgd29yayBjb21wbGV0aW5nLlxuICAgKi9cbiAgYXN5bmMgZG9uZVdhaXRpbmcoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHByb21pc2U7XG4gICAgd2hpbGUgKChwcm9taXNlID0gdGhpcy5fZXh0ZW5kTGlmZXRpbWVQcm9taXNlcy5zaGlmdCgpKSkge1xuICAgICAgYXdhaXQgcHJvbWlzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RvcHMgcnVubmluZyB0aGUgc3RyYXRlZ3kgYW5kIGltbWVkaWF0ZWx5IHJlc29sdmVzIGFueSBwZW5kaW5nXG4gICAqIGB3YWl0VW50aWwoKWAgcHJvbWlzZXMuXG4gICAqL1xuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2hhbmRsZXJEZWZlcnJlZC5yZXNvbHZlKG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgY2FsbCBjYWNoZVdpbGxVcGRhdGUgb24gdGhlIGF2YWlsYWJsZSBwbHVnaW5zIChvciB1c2VcbiAgICogc3RhdHVzID09PSAyMDApIHRvIGRldGVybWluZSBpZiB0aGUgUmVzcG9uc2UgaXMgc2FmZSBhbmQgdmFsaWQgdG8gY2FjaGUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgX2Vuc3VyZVJlc3BvbnNlU2FmZVRvQ2FjaGUoXG4gICAgcmVzcG9uc2U6IFJlc3BvbnNlLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPiB7XG4gICAgbGV0IHJlc3BvbnNlVG9DYWNoZTogUmVzcG9uc2UgfCB1bmRlZmluZWQgPSByZXNwb25zZTtcbiAgICBsZXQgcGx1Z2luc1VzZWQgPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZVdpbGxVcGRhdGUnKSkge1xuICAgICAgcmVzcG9uc2VUb0NhY2hlID1cbiAgICAgICAgKGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICByZXF1ZXN0OiB0aGlzLnJlcXVlc3QsXG4gICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlVG9DYWNoZSxcbiAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgfSkpIHx8IHVuZGVmaW5lZDtcbiAgICAgIHBsdWdpbnNVc2VkID0gdHJ1ZTtcblxuICAgICAgaWYgKCFyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwbHVnaW5zVXNlZCkge1xuICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZSAmJiByZXNwb25zZVRvQ2FjaGUuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgcmVzcG9uc2VUb0NhY2hlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgICAgICAgIGBUaGUgcmVzcG9uc2UgZm9yICcke3RoaXMucmVxdWVzdC51cmx9JyBgICtcbiAgICAgICAgICAgICAgICAgIGBpcyBhbiBvcGFxdWUgcmVzcG9uc2UuIFRoZSBjYWNoaW5nIHN0cmF0ZWd5IHRoYXQgeW91J3JlIGAgK1xuICAgICAgICAgICAgICAgICAgYHVzaW5nIHdpbGwgbm90IGNhY2hlIG9wYXF1ZSByZXNwb25zZXMgYnkgZGVmYXVsdC5gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgICAgIGBUaGUgcmVzcG9uc2UgZm9yICcke3RoaXMucmVxdWVzdC51cmx9JyBgICtcbiAgICAgICAgICAgICAgICAgIGByZXR1cm5lZCBhIHN0YXR1cyBjb2RlIG9mICcke3Jlc3BvbnNlLnN0YXR1c30nIGFuZCB3b24ndCBgICtcbiAgICAgICAgICAgICAgICAgIGBiZSBjYWNoZWQgYXMgYSByZXN1bHQuYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2VUb0NhY2hlO1xuICB9XG59XG5cbmV4cG9ydCB7U3RyYXRlZ3lIYW5kbGVyfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7Y2FjaGVOYW1lc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7XG4gIEhhbmRsZXJDYWxsYmFja09wdGlvbnMsXG4gIFJvdXRlSGFuZGxlck9iamVjdCxcbiAgV29ya2JveFBsdWdpbixcbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0IHtTdHJhdGVneUhhbmRsZXJ9IGZyb20gJy4vU3RyYXRlZ3lIYW5kbGVyLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdHJhdGVneU9wdGlvbnMge1xuICBjYWNoZU5hbWU/OiBzdHJpbmc7XG4gIHBsdWdpbnM/OiBXb3JrYm94UGx1Z2luW107XG4gIGZldGNoT3B0aW9ucz86IFJlcXVlc3RJbml0O1xuICBtYXRjaE9wdGlvbnM/OiBDYWNoZVF1ZXJ5T3B0aW9ucztcbn1cblxuLyoqXG4gKiBBbiBhYnN0cmFjdCBiYXNlIGNsYXNzIHRoYXQgYWxsIG90aGVyIHN0cmF0ZWd5IGNsYXNzZXMgbXVzdCBleHRlbmQgZnJvbTpcbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmFic3RyYWN0IGNsYXNzIFN0cmF0ZWd5IGltcGxlbWVudHMgUm91dGVIYW5kbGVyT2JqZWN0IHtcbiAgY2FjaGVOYW1lOiBzdHJpbmc7XG4gIHBsdWdpbnM6IFdvcmtib3hQbHVnaW5bXTtcbiAgZmV0Y2hPcHRpb25zPzogUmVxdWVzdEluaXQ7XG4gIG1hdGNoT3B0aW9ucz86IENhY2hlUXVlcnlPcHRpb25zO1xuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfaGFuZGxlKFxuICAgIHJlcXVlc3Q6IFJlcXVlc3QsXG4gICAgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgc3RyYXRlZ3kgYW5kIHNldHMgYWxsIGRvY3VtZW50ZWQgb3B0aW9uXG4gICAqIHByb3BlcnRpZXMgYXMgcHVibGljIGluc3RhbmNlIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIE5vdGU6IGlmIGEgY3VzdG9tIHN0cmF0ZWd5IGNsYXNzIGV4dGVuZHMgdGhlIGJhc2UgU3RyYXRlZ3kgY2xhc3MgYW5kIGRvZXNcbiAgICogbm90IG5lZWQgbW9yZSB0aGFuIHRoZXNlIHByb3BlcnRpZXMsIGl0IGRvZXMgbm90IG5lZWQgdG8gZGVmaW5lIGl0cyBvd25cbiAgICogY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIHRoZSBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgKiB7QGxpbmsgd29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICogYGZldGNoKClgIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gVGhlXG4gICAqIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9uc31cbiAgICogZm9yIGFueSBgY2FjaGUubWF0Y2goKWAgb3IgYGNhY2hlLnB1dCgpYCBjYWxscyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBTdHJhdGVneU9wdGlvbnMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIHRoZSBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY2FjaGVOYW1lID0gY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZShvcHRpb25zLmNhY2hlTmFtZSk7XG4gICAgLyoqXG4gICAgICogVGhlIGxpc3RcbiAgICAgKiBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdXNlZCBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqXG4gICAgICogQHR5cGUge0FycmF5PE9iamVjdD59XG4gICAgICovXG4gICAgdGhpcy5wbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zIHx8IFtdO1xuICAgIC8qKlxuICAgICAqIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICogW2Bpbml0YF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVyc31cbiAgICAgKiBvZiBhbGwgZmV0Y2goKSByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuZmV0Y2hPcHRpb25zID0gb3B0aW9ucy5mZXRjaE9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogVGhlXG4gICAgICogW2BDYWNoZVF1ZXJ5T3B0aW9uc2Bde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zfVxuICAgICAqIGZvciBhbnkgYGNhY2hlLm1hdGNoKClgIG9yIGBjYWNoZS5wdXQoKWAgY2FsbHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLm1hdGNoT3B0aW9ucyA9IG9wdGlvbnMubWF0Y2hPcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSByZXF1ZXN0IHN0cmF0ZWd5IGFuZCByZXR1cm5zIGEgYFByb21pc2VgIHRoYXQgd2lsbCByZXNvbHZlIHdpdGhcbiAgICogYSBgUmVzcG9uc2VgLCBpbnZva2luZyBhbGwgcmVsZXZhbnQgcGx1Z2luIGNhbGxiYWNrcy5cbiAgICpcbiAgICogV2hlbiBhIHN0cmF0ZWd5IGluc3RhbmNlIGlzIHJlZ2lzdGVyZWQgd2l0aCBhIFdvcmtib3hcbiAgICoge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZX0sIHRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHlcbiAgICogY2FsbGVkIHdoZW4gdGhlIHJvdXRlIG1hdGNoZXMuXG4gICAqXG4gICAqIEFsdGVybmF0aXZlbHksIHRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIGluIGEgc3RhbmRhbG9uZSBgRmV0Y2hFdmVudGBcbiAgICogbGlzdGVuZXIgYnkgcGFzc2luZyBpdCB0byBgZXZlbnQucmVzcG9uZFdpdGgoKWAuXG4gICAqXG4gICAqIEBwYXJhbSB7RmV0Y2hFdmVudHxPYmplY3R9IG9wdGlvbnMgQSBgRmV0Y2hFdmVudGAgb3IgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAqICAgICBwcm9wZXJ0aWVzIGxpc3RlZCBiZWxvdy5cbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAqICAgICByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLnBhcmFtc11cbiAgICovXG4gIGhhbmRsZShvcHRpb25zOiBGZXRjaEV2ZW50IHwgSGFuZGxlckNhbGxiYWNrT3B0aW9ucyk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBbcmVzcG9uc2VEb25lXSA9IHRoaXMuaGFuZGxlQWxsKG9wdGlvbnMpO1xuICAgIHJldHVybiByZXNwb25zZURvbmU7XG4gIH1cblxuICAvKipcbiAgICogU2ltaWxhciB0byB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fmhhbmRsZX0sIGJ1dFxuICAgKiBpbnN0ZWFkIG9mIGp1c3QgcmV0dXJuaW5nIGEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgdG8gYSBgUmVzcG9uc2VgIGl0XG4gICAqIGl0IHdpbGwgcmV0dXJuIGFuIHR1cGxlIG9mIGBbcmVzcG9uc2UsIGRvbmVdYCBwcm9taXNlcywgd2hlcmUgdGhlIGZvcm1lclxuICAgKiAoYHJlc3BvbnNlYCkgaXMgZXF1aXZhbGVudCB0byB3aGF0IGBoYW5kbGUoKWAgcmV0dXJucywgYW5kIHRoZSBsYXR0ZXIgaXMgYVxuICAgKiBQcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9uY2UgYW55IHByb21pc2VzIHRoYXQgd2VyZSBhZGRlZCB0b1xuICAgKiBgZXZlbnQud2FpdFVudGlsKClgIGFzIHBhcnQgb2YgcGVyZm9ybWluZyB0aGUgc3RyYXRlZ3kgaGF2ZSBjb21wbGV0ZWQuXG4gICAqXG4gICAqIFlvdSBjYW4gYXdhaXQgdGhlIGBkb25lYCBwcm9taXNlIHRvIGVuc3VyZSBhbnkgZXh0cmEgd29yayBwZXJmb3JtZWQgYnlcbiAgICogdGhlIHN0cmF0ZWd5ICh1c3VhbGx5IGNhY2hpbmcgcmVzcG9uc2VzKSBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5LlxuICAgKlxuICAgKiBAcGFyYW0ge0ZldGNoRXZlbnR8T2JqZWN0fSBvcHRpb25zIEEgYEZldGNoRXZlbnRgIG9yIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgKiAgICAgcHJvcGVydGllcyBsaXN0ZWQgYmVsb3cuXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgKiAgICAgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtVUkx9IFtvcHRpb25zLnVybF1cbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5wYXJhbXNdXG4gICAqIEByZXR1cm4ge0FycmF5PFByb21pc2U+fSBBIHR1cGxlIG9mIFtyZXNwb25zZSwgZG9uZV1cbiAgICogICAgIHByb21pc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gdGhlIHJlc3BvbnNlIHJlc29sdmVzIGFzXG4gICAqICAgICB3ZWxsIGFzIHdoZW4gdGhlIGhhbmRsZXIgaGFzIGNvbXBsZXRlZCBhbGwgaXRzIHdvcmsuXG4gICAqL1xuICBoYW5kbGVBbGwoXG4gICAgb3B0aW9uczogRmV0Y2hFdmVudCB8IEhhbmRsZXJDYWxsYmFja09wdGlvbnMsXG4gICk6IFtQcm9taXNlPFJlc3BvbnNlPiwgUHJvbWlzZTx2b2lkPl0ge1xuICAgIC8vIEFsbG93IGZvciBmbGV4aWJsZSBvcHRpb25zIHRvIGJlIHBhc3NlZC5cbiAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEZldGNoRXZlbnQpIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIGV2ZW50OiBvcHRpb25zLFxuICAgICAgICByZXF1ZXN0OiBvcHRpb25zLnJlcXVlc3QsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50ID0gb3B0aW9ucy5ldmVudDtcbiAgICBjb25zdCByZXF1ZXN0ID1cbiAgICAgIHR5cGVvZiBvcHRpb25zLnJlcXVlc3QgPT09ICdzdHJpbmcnXG4gICAgICAgID8gbmV3IFJlcXVlc3Qob3B0aW9ucy5yZXF1ZXN0KVxuICAgICAgICA6IG9wdGlvbnMucmVxdWVzdDtcbiAgICBjb25zdCBwYXJhbXMgPSAncGFyYW1zJyBpbiBvcHRpb25zID8gb3B0aW9ucy5wYXJhbXMgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBoYW5kbGVyID0gbmV3IFN0cmF0ZWd5SGFuZGxlcih0aGlzLCB7ZXZlbnQsIHJlcXVlc3QsIHBhcmFtc30pO1xuXG4gICAgY29uc3QgcmVzcG9uc2VEb25lID0gdGhpcy5fZ2V0UmVzcG9uc2UoaGFuZGxlciwgcmVxdWVzdCwgZXZlbnQpO1xuICAgIGNvbnN0IGhhbmRsZXJEb25lID0gdGhpcy5fYXdhaXRDb21wbGV0ZShcbiAgICAgIHJlc3BvbnNlRG9uZSxcbiAgICAgIGhhbmRsZXIsXG4gICAgICByZXF1ZXN0LFxuICAgICAgZXZlbnQsXG4gICAgKTtcblxuICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBwcm9taXNlcywgc3VpdGFibGUgZm9yIHVzZSB3aXRoIFByb21pc2UuYWxsKCkuXG4gICAgcmV0dXJuIFtyZXNwb25zZURvbmUsIGhhbmRsZXJEb25lXTtcbiAgfVxuXG4gIGFzeW5jIF9nZXRSZXNwb25zZShcbiAgICBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIsXG4gICAgcmVxdWVzdDogUmVxdWVzdCxcbiAgICBldmVudDogRXh0ZW5kYWJsZUV2ZW50LFxuICApOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgYXdhaXQgaGFuZGxlci5ydW5DYWxsYmFja3MoJ2hhbmRsZXJXaWxsU3RhcnQnLCB7ZXZlbnQsIHJlcXVlc3R9KTtcblxuICAgIGxldCByZXNwb25zZTogUmVzcG9uc2UgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5faGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpO1xuICAgICAgLy8gVGhlIFwib2ZmaWNpYWxcIiBTdHJhdGVneSBzdWJjbGFzc2VzIGFsbCB0aHJvdyB0aGlzIGVycm9yIGF1dG9tYXRpY2FsbHksXG4gICAgICAvLyBidXQgaW4gY2FzZSBhIHRoaXJkLXBhcnR5IFN0cmF0ZWd5IGRvZXNuJ3QsIGVuc3VyZSB0aGF0IHdlIGhhdmUgYVxuICAgICAgLy8gY29uc2lzdGVudCBmYWlsdXJlIHdoZW4gdGhlcmUncyBubyByZXNwb25zZSBvciBhbiBlcnJvciByZXNwb25zZS5cbiAgICAgIGlmICghcmVzcG9uc2UgfHwgcmVzcG9uc2UudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHt1cmw6IHJlcXVlc3QudXJsfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgaGFuZGxlci5pdGVyYXRlQ2FsbGJhY2tzKCdoYW5kbGVyRGlkRXJyb3InKSkge1xuICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2soe2Vycm9yLCBldmVudCwgcmVxdWVzdH0pO1xuICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgICBgV2hpbGUgcmVzcG9uZGluZyB0byAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9JywgYCArXG4gICAgICAgICAgICBgYW4gJHtcbiAgICAgICAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLnRvU3RyaW5nKCkgOiAnJ1xuICAgICAgICAgICAgfSBlcnJvciBvY2N1cnJlZC4gVXNpbmcgYSBmYWxsYmFjayByZXNwb25zZSBwcm92aWRlZCBieSBgICtcbiAgICAgICAgICAgIGBhIGhhbmRsZXJEaWRFcnJvciBwbHVnaW4uYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGhhbmRsZXIuaXRlcmF0ZUNhbGxiYWNrcygnaGFuZGxlcldpbGxSZXNwb25kJykpIHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2soe2V2ZW50LCByZXF1ZXN0LCByZXNwb25zZX0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIGFzeW5jIF9hd2FpdENvbXBsZXRlKFxuICAgIHJlc3BvbnNlRG9uZTogUHJvbWlzZTxSZXNwb25zZT4sXG4gICAgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyLFxuICAgIHJlcXVlc3Q6IFJlcXVlc3QsXG4gICAgZXZlbnQ6IEV4dGVuZGFibGVFdmVudCxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIGxldCBlcnJvcjtcblxuICAgIHRyeSB7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlRG9uZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWdub3JlIGVycm9ycywgYXMgcmVzcG9uc2UgZXJyb3JzIHNob3VsZCBiZSBjYXVnaHQgdmlhIHRoZSBgcmVzcG9uc2VgXG4gICAgICAvLyBwcm9taXNlIGFib3ZlLiBUaGUgYGRvbmVgIHByb21pc2Ugd2lsbCBvbmx5IHRocm93IGZvciBlcnJvcnMgaW5cbiAgICAgIC8vIHByb21pc2VzIHBhc3NlZCB0byBgaGFuZGxlci53YWl0VW50aWwoKWAuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyRGlkUmVzcG9uZCcsIHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBoYW5kbGVyLmRvbmVXYWl0aW5nKCk7XG4gICAgfSBjYXRjaCAod2FpdFVudGlsRXJyb3IpIHtcbiAgICAgIGlmICh3YWl0VW50aWxFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGVycm9yID0gd2FpdFVudGlsRXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgaGFuZGxlci5ydW5DYWxsYmFja3MoJ2hhbmRsZXJEaWRDb21wbGV0ZScsIHtcbiAgICAgIGV2ZW50LFxuICAgICAgcmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlLFxuICAgICAgZXJyb3I6IGVycm9yIGFzIEVycm9yLFxuICAgIH0pO1xuICAgIGhhbmRsZXIuZGVzdHJveSgpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHtTdHJhdGVneX07XG5cbi8qKlxuICogQ2xhc3NlcyBleHRlbmRpbmcgdGhlIGBTdHJhdGVneWAgYmFzZWQgY2xhc3Mgc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCxcbiAqIGFuZCBsZXZlcmFnZSB0aGUge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9XG4gKiBhcmcgdG8gcGVyZm9ybSBhbGwgZmV0Y2hpbmcgYW5kIGNhY2hlIGxvZ2ljLCB3aGljaCB3aWxsIGVuc3VyZSBhbGwgcmVsZXZhbnRcbiAqIGNhY2hlLCBjYWNoZSBvcHRpb25zLCBmZXRjaCBvcHRpb25zIGFuZCBwbHVnaW5zIGFyZSB1c2VkIChwZXIgdGhlIGN1cnJlbnRcbiAqIHN0cmF0ZWd5IGluc3RhbmNlKS5cbiAqXG4gKiBAbmFtZSBfaGFuZGxlXG4gKiBAaW5zdGFuY2VcbiAqIEBhYnN0cmFjdFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlclxuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICovXG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlcyA9IHtcbiAgc3RyYXRlZ3lTdGFydDogKHN0cmF0ZWd5TmFtZTogc3RyaW5nLCByZXF1ZXN0OiBSZXF1ZXN0KTogc3RyaW5nID0+XG4gICAgYFVzaW5nICR7c3RyYXRlZ3lOYW1lfSB0byByZXNwb25kIHRvICcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nYCxcbiAgcHJpbnRGaW5hbFJlc3BvbnNlOiAocmVzcG9uc2U/OiBSZXNwb25zZSk6IHZvaWQgPT4ge1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHRoZSBmaW5hbCByZXNwb25zZSBoZXJlLmApO1xuICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZSB8fCAnW05vIHJlc3BvbnNlIHJldHVybmVkXScpO1xuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuICB9LFxufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcblxuaW1wb3J0IHtTdHJhdGVneX0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQge1N0cmF0ZWd5SGFuZGxlcn0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGEgW2NhY2hlLWZpcnN0XShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXN0cmF0ZWdpZXMtb3ZlcnZpZXcvI2NhY2hlLWZpcnN0LWZhbGxpbmctYmFjay10by1uZXR3b3JrKVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBBIGNhY2hlIGZpcnN0IHN0cmF0ZWd5IGlzIHVzZWZ1bCBmb3IgYXNzZXRzIHRoYXQgaGF2ZSBiZWVuIHJldmlzaW9uZWQsXG4gKiBzdWNoIGFzIFVSTHMgbGlrZSBgL3N0eWxlcy9leGFtcGxlLmE4ZjVmMS5jc3NgLCBzaW5jZSB0aGV5XG4gKiBjYW4gYmUgY2FjaGVkIGZvciBsb25nIHBlcmlvZHMgb2YgdGltZS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCBhbmQgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvd1xuICogYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIENhY2hlRmlyc3QgZXh0ZW5kcyBTdHJhdGVneSB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIF9oYW5kbGUocmVxdWVzdDogUmVxdWVzdCwgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGxvZ3MgPSBbXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgIGZ1bmNOYW1lOiAnbWFrZVJlcXVlc3QnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcblxuICAgIGxldCBlcnJvcjogRXJyb3IgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9ncy5wdXNoKFxuICAgICAgICAgIGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS4gYCArXG4gICAgICAgICAgICBgV2lsbCByZXNwb25kIHdpdGggYSBuZXR3b3JrIHJlcXVlc3QuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5mZXRjaEFuZENhY2hlUHV0KHJlcXVlc3QpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgIGxvZ3MucHVzaChgR290IHJlc3BvbnNlIGZyb20gbmV0d29yay5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2dzLnB1c2goYFVuYWJsZSB0byBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ3MucHVzaChgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgbWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpLFxuICAgICAgKTtcbiAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhsb2cpO1xuICAgICAgfVxuICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywge3VybDogcmVxdWVzdC51cmwsIGVycm9yfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQge0NhY2hlRmlyc3R9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtXb3JrYm94UGx1Z2lufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBjb25zdCBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luOiBXb3JrYm94UGx1Z2luID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHZhbGlkIHJlc3BvbnNlICh0byBhbGxvdyBjYWNoaW5nKSBpZiB0aGUgc3RhdHVzIGlzIDIwMCAoT0spIG9yXG4gICAqIDAgKG9wYXF1ZSkuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICogQHJldHVybiB7UmVzcG9uc2V8bnVsbH1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhY2hlV2lsbFVwZGF0ZTogYXN5bmMgKHtyZXNwb25zZX0pID0+IHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSAwKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcblxuaW1wb3J0IHtjYWNoZU9rQW5kT3BhcXVlUGx1Z2lufSBmcm9tICcuL3BsdWdpbnMvY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbi5qcyc7XG5pbXBvcnQge1N0cmF0ZWd5LCBTdHJhdGVneU9wdGlvbnN9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHtTdHJhdGVneUhhbmRsZXJ9IGZyb20gJy4vU3RyYXRlZ3lIYW5kbGVyLmpzJztcbmltcG9ydCB7bWVzc2FnZXN9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuZXhwb3J0IGludGVyZmFjZSBOZXR3b3JrRmlyc3RPcHRpb25zIGV4dGVuZHMgU3RyYXRlZ3lPcHRpb25zIHtcbiAgbmV0d29ya1RpbWVvdXRTZWNvbmRzPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtuZXR3b3JrIGZpcnN0XShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXN0cmF0ZWdpZXMtb3ZlcnZpZXcvI25ldHdvcmstZmlyc3QtZmFsbGluZy1iYWNrLXRvLWNhY2hlKVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIHN0cmF0ZWd5IHdpbGwgY2FjaGUgcmVzcG9uc2VzIHdpdGggYSAyMDAgc3RhdHVzIGNvZGUgYXNcbiAqIHdlbGwgYXMgW29wYXF1ZSByZXNwb25zZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctcmVzb3VyY2VzLWR1cmluZy1ydW50aW1lLyNvcGFxdWUtcmVzcG9uc2VzKS5cbiAqIE9wYXF1ZSByZXNwb25zZXMgYXJlIGFyZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgd2hlcmUgdGhlIHJlc3BvbnNlIGRvZXNuJ3RcbiAqIHN1cHBvcnQgW0NPUlNdKGh0dHBzOi8vZW5hYmxlLWNvcnMub3JnLykuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgYW5kIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3dcbiAqIGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBOZXR3b3JrRmlyc3QgZXh0ZW5kcyBTdHJhdGVneSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX25ldHdvcmtUaW1lb3V0U2Vjb25kczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgKiB7QGxpbmsgd29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICogYGZldGNoKClgIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zKVxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzXSBJZiBzZXQsIGFueSBuZXR3b3JrIHJlcXVlc3RzXG4gICAqIHRoYXQgZmFpbCB0byByZXNwb25kIHdpdGhpbiB0aGUgdGltZW91dCB3aWxsIGZhbGxiYWNrIHRvIHRoZSBjYWNoZS5cbiAgICpcbiAgICogVGhpcyBvcHRpb24gY2FuIGJlIHVzZWQgdG8gY29tYmF0XG4gICAqIFwiW2xpZS1maV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy9wZXJmb3JtYW5jZS9wb29yLWNvbm5lY3Rpdml0eS8jbGllLWZpfVwiXG4gICAqIHNjZW5hcmlvcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5ldHdvcmtGaXJzdE9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgLy8gSWYgdGhpcyBpbnN0YW5jZSBjb250YWlucyBubyBwbHVnaW5zIHdpdGggYSAnY2FjaGVXaWxsVXBkYXRlJyBjYWxsYmFjayxcbiAgICAvLyBwcmVwZW5kIHRoZSBgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbmAgcGx1Z2luIHRvIHRoZSBwbHVnaW5zIGxpc3QuXG4gICAgaWYgKCF0aGlzLnBsdWdpbnMuc29tZSgocCkgPT4gJ2NhY2hlV2lsbFVwZGF0ZScgaW4gcCkpIHtcbiAgICAgIHRoaXMucGx1Z2lucy51bnNoaWZ0KGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4pO1xuICAgIH1cblxuICAgIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IG9wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzIHx8IDA7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMpIHtcbiAgICAgICAgYXNzZXJ0IS5pc1R5cGUodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ25ldHdvcmtUaW1lb3V0U2Vjb25kcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIF9oYW5kbGUocmVxdWVzdDogUmVxdWVzdCwgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGxvZ3M6IGFueVtdID0gW107XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ21ha2VSZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPltdID0gW107XG4gICAgbGV0IHRpbWVvdXRJZDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgY29uc3Qge2lkLCBwcm9taXNlfSA9IHRoaXMuX2dldFRpbWVvdXRQcm9taXNlKHtyZXF1ZXN0LCBsb2dzLCBoYW5kbGVyfSk7XG4gICAgICB0aW1lb3V0SWQgPSBpZDtcbiAgICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV0d29ya1Byb21pc2UgPSB0aGlzLl9nZXROZXR3b3JrUHJvbWlzZSh7XG4gICAgICB0aW1lb3V0SWQsXG4gICAgICByZXF1ZXN0LFxuICAgICAgbG9ncyxcbiAgICAgIGhhbmRsZXIsXG4gICAgfSk7XG5cbiAgICBwcm9taXNlcy5wdXNoKG5ldHdvcmtQcm9taXNlKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci53YWl0VW50aWwoXG4gICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBQcm9taXNlLnJhY2UoKSB3aWxsIHJlc29sdmUgYXMgc29vbiBhcyB0aGUgZmlyc3QgcHJvbWlzZSByZXNvbHZlcy5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoYXdhaXQgaGFuZGxlci53YWl0VW50aWwoUHJvbWlzZS5yYWNlKHByb21pc2VzKSkpIHx8XG4gICAgICAgICAgLy8gSWYgUHJvbWlzZS5yYWNlKCkgcmVzb2x2ZWQgd2l0aCBudWxsLCBpdCBtaWdodCBiZSBkdWUgdG8gYSBuZXR3b3JrXG4gICAgICAgICAgLy8gdGltZW91dCArIGEgY2FjaGUgbWlzcy4gSWYgdGhhdCB3ZXJlIHRvIGhhcHBlbiwgd2UnZCByYXRoZXIgd2FpdCB1bnRpbFxuICAgICAgICAgIC8vIHRoZSBuZXR3b3JrUHJvbWlzZSByZXNvbHZlcyBpbnN0ZWFkIG9mIHJldHVybmluZyBudWxsLlxuICAgICAgICAgIC8vIE5vdGUgdGhhdCBpdCdzIGZpbmUgdG8gYXdhaXQgYW4gYWxyZWFkeS1yZXNvbHZlZCBwcm9taXNlLCBzbyB3ZSBkb24ndFxuICAgICAgICAgIC8vIGhhdmUgdG8gY2hlY2sgdG8gc2VlIGlmIGl0J3Mgc3RpbGwgXCJpbiBmbGlnaHRcIi5cbiAgICAgICAgICAoYXdhaXQgbmV0d29ya1Byb21pc2UpXG4gICAgICAgICk7XG4gICAgICB9KSgpLFxuICAgICk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICBtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCksXG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICB9XG4gICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7dXJsOiByZXF1ZXN0LnVybH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5sb2dzIEEgcmVmZXJlbmNlIHRvIHRoZSBsb2dzIGFycmF5XG4gICAqIEBwYXJhbSB7RXZlbnR9IG9wdGlvbnMuZXZlbnRcbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF9nZXRUaW1lb3V0UHJvbWlzZSh7XG4gICAgcmVxdWVzdCxcbiAgICBsb2dzLFxuICAgIGhhbmRsZXIsXG4gIH06IHtcbiAgICByZXF1ZXN0OiBSZXF1ZXN0O1xuICAgIGxvZ3M6IGFueVtdO1xuICAgIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcjtcbiAgfSk6IHtwcm9taXNlOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPjsgaWQ/OiBudW1iZXJ9IHtcbiAgICBsZXQgdGltZW91dElkO1xuICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPiA9IG5ldyBQcm9taXNlKFxuICAgICAgKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3Qgb25OZXR3b3JrVGltZW91dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9ncy5wdXNoKFxuICAgICAgICAgICAgICBgVGltaW5nIG91dCB0aGUgbmV0d29yayByZXNwb25zZSBhdCBgICtcbiAgICAgICAgICAgICAgICBgJHt0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHN9IHNlY29uZHMuYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChcbiAgICAgICAgICBvbk5ldHdvcmtUaW1lb3V0LFxuICAgICAgICAgIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDAsXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvbWlzZTogdGltZW91dFByb21pc2UsXG4gICAgICBpZDogdGltZW91dElkLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtudW1iZXJ8dW5kZWZpbmVkfSBvcHRpb25zLnRpbWVvdXRJZFxuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmxvZ3MgQSByZWZlcmVuY2UgdG8gdGhlIGxvZ3MgQXJyYXkuXG4gICAqIEBwYXJhbSB7RXZlbnR9IG9wdGlvbnMuZXZlbnRcbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBfZ2V0TmV0d29ya1Byb21pc2Uoe1xuICAgIHRpbWVvdXRJZCxcbiAgICByZXF1ZXN0LFxuICAgIGxvZ3MsXG4gICAgaGFuZGxlcixcbiAgfToge1xuICAgIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gICAgbG9nczogYW55W107XG4gICAgdGltZW91dElkPzogbnVtYmVyO1xuICAgIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcjtcbiAgfSk6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+IHtcbiAgICBsZXQgZXJyb3I7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIHRyeSB7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZmV0Y2hBbmRDYWNoZVB1dChyZXF1ZXN0KTtcbiAgICB9IGNhdGNoIChmZXRjaEVycm9yKSB7XG4gICAgICBpZiAoZmV0Y2hFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGVycm9yID0gZmV0Y2hFcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIGxvZ3MucHVzaChgR290IHJlc3BvbnNlIGZyb20gbmV0d29yay5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICBgVW5hYmxlIHRvIGdldCBhIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsuIFdpbGwgcmVzcG9uZCBgICtcbiAgICAgICAgICAgIGB3aXRoIGEgY2FjaGVkIHJlc3BvbnNlLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVycm9yIHx8ICFyZXNwb25zZSkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICAgIGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9J2AgKyBgIGNhY2hlLmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2dzLnB1c2goYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB7TmV0d29ya0ZpcnN0fTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7dGltZW91dH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL3RpbWVvdXQuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQge1N0cmF0ZWd5LCBTdHJhdGVneU9wdGlvbnN9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHtTdHJhdGVneUhhbmRsZXJ9IGZyb20gJy4vU3RyYXRlZ3lIYW5kbGVyLmpzJztcbmltcG9ydCB7bWVzc2FnZXN9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuaW50ZXJmYWNlIE5ldHdvcmtPbmx5T3B0aW9uc1xuICBleHRlbmRzIE9taXQ8U3RyYXRlZ3lPcHRpb25zLCAnY2FjaGVOYW1lJyB8ICdtYXRjaE9wdGlvbnMnPiB7XG4gIG5ldHdvcmtUaW1lb3V0U2Vjb25kcz86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbbmV0d29yay1vbmx5XShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXN0cmF0ZWdpZXMtb3ZlcnZpZXcvI25ldHdvcmstb25seSlcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogVGhpcyBjbGFzcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgYW55XG4gKiBbV29ya2JveCBwbHVnaW5zXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC91c2luZy1wbHVnaW5zLykuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgdGhpcyB3aWxsIHRocm93IGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBOZXR3b3JrT25seSBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbmV0d29ya1RpbWVvdXRTZWNvbmRzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHNdIElmIHNldCwgYW55IG5ldHdvcmsgcmVxdWVzdHNcbiAgICogdGhhdCBmYWlsIHRvIHJlc3BvbmQgd2l0aGluIHRoZSB0aW1lb3V0IHdpbGwgcmVzdWx0IGluIGEgbmV0d29yayBlcnJvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE5ldHdvcmtPbmx5T3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgPSBvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kcyB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0OiBSZXF1ZXN0LCBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgZnVuY05hbWU6ICdfaGFuZGxlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgZXJyb3I6IEVycm9yIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGxldCByZXNwb25zZTogUmVzcG9uc2UgfCB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+W10gPSBbXG4gICAgICAgIGhhbmRsZXIuZmV0Y2gocmVxdWVzdCksXG4gICAgICBdO1xuXG4gICAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlID0gdGltZW91dChcbiAgICAgICAgICB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwLFxuICAgICAgICApIGFzIFByb21pc2U8dW5kZWZpbmVkPjtcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aW1lb3V0UHJvbWlzZSk7XG4gICAgICB9XG5cbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBUaW1lZCBvdXQgdGhlIG5ldHdvcmsgcmVzcG9uc2UgYWZ0ZXIgYCArXG4gICAgICAgICAgICBgJHt0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHN9IHNlY29uZHMuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICBtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCksXG4gICAgICApO1xuICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIGxvZ2dlci5sb2coYEdvdCByZXNwb25zZSBmcm9tIG5ldHdvcmsuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dnZXIubG9nKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay5gKTtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHt1cmw6IHJlcXVlc3QudXJsLCBlcnJvcn0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHtOZXR3b3JrT25seSwgTmV0d29ya09ubHlPcHRpb25zfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcblxuaW1wb3J0IHtjYWNoZU9rQW5kT3BhcXVlUGx1Z2lufSBmcm9tICcuL3BsdWdpbnMvY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbi5qcyc7XG5pbXBvcnQge1N0cmF0ZWd5LCBTdHJhdGVneU9wdGlvbnN9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHtTdHJhdGVneUhhbmRsZXJ9IGZyb20gJy4vU3RyYXRlZ3lIYW5kbGVyLmpzJztcbmltcG9ydCB7bWVzc2FnZXN9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZV0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1zdHJhdGVnaWVzLW92ZXJ2aWV3LyNzdGFsZS13aGlsZS1yZXZhbGlkYXRlKVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBSZXNvdXJjZXMgYXJlIHJlcXVlc3RlZCBmcm9tIGJvdGggdGhlIGNhY2hlIGFuZCB0aGUgbmV0d29yayBpbiBwYXJhbGxlbC5cbiAqIFRoZSBzdHJhdGVneSB3aWxsIHJlc3BvbmQgd2l0aCB0aGUgY2FjaGVkIHZlcnNpb24gaWYgYXZhaWxhYmxlLCBvdGhlcndpc2VcbiAqIHdhaXQgZm9yIHRoZSBuZXR3b3JrIHJlc3BvbnNlLiBUaGUgY2FjaGUgaXMgdXBkYXRlZCB3aXRoIHRoZSBuZXR3b3JrIHJlc3BvbnNlXG4gKiB3aXRoIGVhY2ggc3VjY2Vzc2Z1bCByZXF1ZXN0LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoaXMgc3RyYXRlZ3kgd2lsbCBjYWNoZSByZXNwb25zZXMgd2l0aCBhIDIwMCBzdGF0dXMgY29kZSBhc1xuICogd2VsbCBhcyBbb3BhcXVlIHJlc3BvbnNlc10oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1yZXNvdXJjZXMtZHVyaW5nLXJ1bnRpbWUvI29wYXF1ZS1yZXNwb25zZXMpLlxuICogT3BhcXVlIHJlc3BvbnNlcyBhcmUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIHdoZXJlIHRoZSByZXNwb25zZSBkb2Vzbid0XG4gKiBzdXBwb3J0IFtDT1JTXShodHRwczovL2VuYWJsZS1jb3JzLm9yZy8pLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgU3RhbGVXaGlsZVJldmFsaWRhdGUgZXh0ZW5kcyBTdHJhdGVneSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgKiB7QGxpbmsgd29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICogYGZldGNoKClgIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zKVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogU3RyYXRlZ3lPcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKTtcblxuICAgIC8vIElmIHRoaXMgaW5zdGFuY2UgY29udGFpbnMgbm8gcGx1Z2lucyB3aXRoIGEgJ2NhY2hlV2lsbFVwZGF0ZScgY2FsbGJhY2ssXG4gICAgLy8gcHJlcGVuZCB0aGUgYGNhY2hlT2tBbmRPcGFxdWVQbHVnaW5gIHBsdWdpbiB0byB0aGUgcGx1Z2lucyBsaXN0LlxuICAgIGlmICghdGhpcy5wbHVnaW5zLnNvbWUoKHApID0+ICdjYWNoZVdpbGxVcGRhdGUnIGluIHApKSB7XG4gICAgICB0aGlzLnBsdWdpbnMudW5zaGlmdChjYWNoZU9rQW5kT3BhcXVlUGx1Z2luKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBfaGFuZGxlKHJlcXVlc3Q6IFJlcXVlc3QsIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBsb2dzID0gW107XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmV0Y2hBbmRDYWNoZVByb21pc2UgPSBoYW5kbGVyLmZldGNoQW5kQ2FjaGVQdXQocmVxdWVzdCkuY2F0Y2goKCkgPT4ge1xuICAgICAgLy8gU3dhbGxvdyB0aGlzIGVycm9yIGJlY2F1c2UgYSAnbm8tcmVzcG9uc2UnIGVycm9yIHdpbGwgYmUgdGhyb3duIGluXG4gICAgICAvLyBtYWluIGhhbmRsZXIgcmV0dXJuIGZsb3cuIFRoaXMgd2lsbCBiZSBpbiB0aGUgYHdhaXRVbnRpbCgpYCBmbG93LlxuICAgIH0pO1xuICAgIHZvaWQgaGFuZGxlci53YWl0VW50aWwoZmV0Y2hBbmRDYWNoZVByb21pc2UpO1xuXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuXG4gICAgbGV0IGVycm9yO1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9ncy5wdXNoKFxuICAgICAgICAgIGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9J2AgK1xuICAgICAgICAgICAgYCBjYWNoZS4gV2lsbCB1cGRhdGUgd2l0aCB0aGUgbmV0d29yayByZXNwb25zZSBpbiB0aGUgYmFja2dyb3VuZC5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLiBgICtcbiAgICAgICAgICAgIGBXaWxsIHdhaXQgZm9yIHRoZSBuZXR3b3JrIHJlc3BvbnNlLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBOT1RFKHBoaWxpcHdhbHRvbik6IFJlYWxseSBhbm5veWluZyB0aGF0IHdlIGhhdmUgdG8gdHlwZSBjYXN0IGhlcmUuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjAwMDZcbiAgICAgICAgcmVzcG9uc2UgPSAoYXdhaXQgZmV0Y2hBbmRDYWNoZVByb21pc2UpIGFzIFJlc3BvbnNlIHwgdW5kZWZpbmVkO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgbWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpLFxuICAgICAgKTtcbiAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhsb2cpO1xuICAgICAgfVxuICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywge3VybDogcmVxdWVzdC51cmwsIGVycm9yfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQge1N0YWxlV2hpbGVSZXZhbGlkYXRlfTtcbiIsICJpbXBvcnQgeyBkZWZhdWx0IGFzIHBhcmFtcyB9IGZyb20gJ0BwYXJhbXMnXG5pbXBvcnQgeyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiB9IGZyb20gJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJ1xuaW1wb3J0IHsgRXhwaXJhdGlvblBsdWdpbiB9IGZyb20gJ3dvcmtib3gtZXhwaXJhdGlvbidcbmltcG9ydCB7IHJlZ2lzdGVyUm91dGUsIHNldENhdGNoSGFuZGxlciB9IGZyb20gJ3dvcmtib3gtcm91dGluZydcbmltcG9ydCB7IENhY2hlRmlyc3QsIE5ldHdvcmtGaXJzdCwgTmV0d29ya09ubHksIFN0YWxlV2hpbGVSZXZhbGlkYXRlIH0gZnJvbSAnd29ya2JveC1zdHJhdGVnaWVzJ1xuXG5zZWxmLl9fV0JfRElTQUJMRV9ERVZfTE9HUyA9ICFwYXJhbXMuZGVidWdcblxuY29uc3QgZGVidWcgPSAoLi4uZGF0YTogYW55W10pOiB2b2lkID0+IHtcbiAgICBpZiAoc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc29sZS5kZWJ1ZygnW3B3YV0nLCAuLi5kYXRhKTtcbn1cblxuY29uc3QgY2FjaGVQcmVmaXggPSAnaHVnby1wd2EtJ1xuY29uc3QgZmFsbGJhY2tzQ2FjaGUgPSBjYWNoZVByZWZpeCArICdmYWxsYmFja3MnXG4vLyBGaWx0ZXIgdGhlIGludmFsaWQgVVJMcywgc3VjaCBhcyB0ZW1wb3JhcnkgVVJMcyBnZW5lcmF0ZWQgYnkgSHVnbyBQb3N0UHJvZ3Jlc3MuXG5jb25zdCBwcmVjYWNoZXMgPSBwYXJhbXMucHJlY2FjaGVzLmZpbHRlcigodXJsKSA9PiB1cmwuaW5kZXhPZignX19oX3BwX2wxJykgIT09IDApXG5kZWJ1ZygncHJlY2FjaGVzJywgcHJlY2FjaGVzKVxuZGVidWcoJ2J5cGFzcycsIHBhcmFtcy5ieXBhc3MpXG5cbi8vIFJlZ2lzdGVyIHBhZ2Ugcm91dGUgd2l0aCBOZXR3b3JrRmlyc3Qgc3RyYXRlZ3kuXG4vLyBUaGVyZSB3aWxsIGJlIGEgcHJvYmxlbSB3aXRoIENhY2hlRmlyc3Qgb3IgU3RhbGVXaGlsZVJldmFsaWRhdGUgc3RyYXRlZ3lcbi8vIGlmIHRoZSBjYWNoZWQgcGFnZSBsb2FkcyBubyBsb25nZXIgZXhpc3Qgb3IgZXhwaXJlZCBhc3NldHMsIHN1Y2ggYXMgQ1NTIGFuZCBKUy5cbnJlZ2lzdGVyUm91dGUoXG4gICAgKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZSc7XG4gICAgfSxcbiAgICBuZXcgTmV0d29ya0ZpcnN0KHtcbiAgICAgICAgY2FjaGVOYW1lOiBjYWNoZVByZWZpeCArICdwYWdlcycsXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbih7XG4gICAgICAgICAgICAgICAgc3RhdHVzZXM6IFsyMDBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbilcblxuLy8gUmVnaXN0ZXIgYXNzZXRzIHJvdXRlcy5cbmNvbnN0IGFzc2V0cyA9IFsnZm9udCcsICdpbWFnZScsICdzY3JpcHQnLCAnc3R5bGUnXVxuXG5jb25zdCBpc0J5cGFzcyA9ICh1cmwpID0+IHtcbiAgICBpZiAocGFyYW1zLmJ5cGFzcyAmJiBwYXJhbXMuYnlwYXNzLmluY2x1ZGVzKHVybC5ocmVmKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxufVxuXG5pZiAocGFyYW1zLmJ5cGFzcykge1xuICAgIHJlZ2lzdGVyUm91dGUoXG4gICAgICAgICh7IHJlcXVlc3QsIHNhbWVPcmlnaW4sIHVybCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzQnlwYXNzKHVybCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgb3JpZ2luc1xuICAgICAgICAgICAgaWYgKHNhbWVPcmlnaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbmV3IE5ldHdvcmtPbmx5KCksXG4gICAgKTtcbn1cblxuZm9yIChsZXQgaSBpbiBhc3NldHMpIHtcbiAgICBjb25zdCBraW5kID0gYXNzZXRzW2ldXG4gICAgY29uc3QgY2FjaGUgPSBwYXJhbXMuY2FjaGVzW2tpbmRdXG4gICAgLy8gUmVtb3ZlIHRoZSB0cmFpbGluZyBzbGFzaCBmcm9tIG9yaWdpbi5cbiAgICBjb25zdCBvcmlnaW5zID0gY2FjaGUub3JpZ2lucyA/IGNhY2hlLm9yaWdpbnMubWFwKChvcmlnaW4pID0+IG9yaWdpbi5yZXBsYWNlKC9cXC8kLywgJycpKSA6IFtdXG4gICAgY29uc3QgY2FjaGVOYW1lID0gY2FjaGVQcmVmaXggKyBraW5kICsgJ3MnXG4gICAgbGV0IHN0cmF0ZWd5ID0gbnVsbFxuICAgIGxldCBwbHVnaW5zID0gW1xuICAgICAgICBuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4oe1xuICAgICAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEV4cGlyYXRpb25QbHVnaW4oe1xuICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogY2FjaGUubWF4X2FnZSA/PyA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgfSlcbiAgICBdXG4gICAgc3dpdGNoIChjYWNoZS5zdHJhdGVneSkge1xuICAgICAgICBjYXNlICduZXR3b3JrLWZpcnN0JzpcbiAgICAgICAgICAgIHN0cmF0ZWd5ID0gbmV3IE5ldHdvcmtGaXJzdCh7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBjYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdjYWNoZS1maXJzdCc6XG4gICAgICAgICAgICBzdHJhdGVneSA9IG5ldyBDYWNoZUZpcnN0KHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IGNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3N0YWxlLXdoaWxlLXJldmFsaWRhdGUnOlxuICAgICAgICAgICAgc3RyYXRlZ3kgPSBuZXcgU3RhbGVXaGlsZVJldmFsaWRhdGUoe1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBzdHJhdGVneSBmb3Iga2luZCBcIiR7a2luZH1cIjogYCArIGNhY2hlLnN0cmF0ZWd5KVxuICAgIH1cbiAgICByZWdpc3RlclJvdXRlKFxuICAgICAgICAoeyByZXF1ZXN0LCBzYW1lT3JpZ2luLCB1cmwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QuZGVzdGluYXRpb24gIT09IGtpbmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgb3JpZ2luc1xuICAgICAgICAgICAgaWYgKHNhbWVPcmlnaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3JpZ2lucyAmJiBvcmlnaW5zLmluY2x1ZGVzKHVybC5vcmlnaW4ucmVwbGFjZSgvXFwvJC8sICcnKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWJ1ZyhgJHt1cmx9IHdpbGwgbm90IGJlIGNhY2hlZC5gKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHN0cmF0ZWd5XG4gICAgKTtcbn1cblxuLy8gUmVnaXN0ZXIgZGVmYXVsdCBoYW5kbGVyLlxucmVnaXN0ZXJSb3V0ZSgoKSA9PiB0cnVlLCBuZXcgTmV0d29ya09ubHkoKSlcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4ge1xuICAgIGV2ZW50LndhaXRVbnRpbChcbiAgICAgICAgc2VsZi5jYWNoZXNcbiAgICAgICAgICAgIC5vcGVuKGZhbGxiYWNrc0NhY2hlKVxuICAgICAgICAgICAgLnRoZW4oY2FjaGUgPT4gY2FjaGUuYWRkQWxsKHByZWNhY2hlcykpXG4gICAgKTtcbn0pO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgb3B0aW9ucyA9PiB7XG4gICAgZGVidWcoJ2NhdGNoIGhhbmRsZXInLCBvcHRpb25zLnJlcXVlc3QpXG4gICAgY29uc3QgZGVzdCA9IG9wdGlvbnMucmVxdWVzdC5kZXN0aW5hdGlvblxuICAgIGNvbnN0IHVybCA9IG9wdGlvbnMucmVxdWVzdC51cmxcbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4oZmFsbGJhY2tzQ2FjaGUpXG5cbiAgICAvLyBSZXR1cm4gdGhlIGNhY2hlZCBpdGVtIGlmIGZvdW5kLlxuICAgIGNvbnN0IGNhY2hlZCA9IGF3YWl0IGNhY2hlLm1hdGNoKHVybClcbiAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRcbiAgICB9XG5cbiAgICBpZiAoZGVzdCA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgICBsZXQgb2ZmbGluZTogUmVzcG9uc2UgfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBsYW5nID0gJydcbiAgICAgICAgbGV0IHBhdGhzOiBzdHJpbmdbXVxuICAgICAgICBpZiAodXJsLmluZGV4T2YocGFyYW1zLmJhc2VVUkwpID09PSAwKSB7XG4gICAgICAgICAgICBwYXRocyA9IHVybC5yZXBsYWNlKHBhcmFtcy5iYXNlVVJMLCAnJykuc3BsaXQoJy8nLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aHMgPSAobmV3IFVSTCh1cmwpKS5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJywgMSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aHMubGVuZ3RoID4gMCAmJiBwYXJhbXMubGFuZ3MuaW5jbHVkZXMocGF0aHNbMF0pKSB7XG4gICAgICAgICAgICBsYW5nID0gcGF0aHNbMF1cbiAgICAgICAgICAgIGNvbnN0IG9mZmxpbmVVcmwgPSBgJHtwYXJhbXMuYmFzZVVSTH0ke2xhbmd9L29mZmxpbmUvYFxuICAgICAgICAgICAgZGVidWcoJ2xvYWRpbmcgbXVsdGlsaW5ndWFsIG9mZmxpbmUgcGFnZScsIG9mZmxpbmVVcmwpXG4gICAgICAgICAgICBvZmZsaW5lID0gYXdhaXQgY2FjaGUubWF0Y2gob2ZmbGluZVVybClcbiAgICAgICAgICAgIGlmIChvZmZsaW5lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZmxpbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZmxpbmVVcmwgPSBgJHtwYXJhbXMuYmFzZVVSTH1vZmZsaW5lL2BcbiAgICAgICAgZGVidWcoJ2xvYWRpbmcgdGhlIGZhbGxiYWNrIG9mZmxpbmUgcGFnZScsIG9mZmxpbmVVcmwpXG4gICAgICAgIHJldHVybiAoYXdhaXQgY2FjaGUubWF0Y2gob2ZmbGluZVVybCkpXG4gICAgICAgICAgICB8fCBSZXNwb25zZS5lcnJvcigpXG4gICAgfSBlbHNlIGlmIChkZXN0ID09PSAnaW1hZ2UnICYmIHBhcmFtcy5vZmZsaW5lX2ltYWdlKSB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgY2FjaGUubWF0Y2gocGFyYW1zLm9mZmxpbmVfaW1hZ2UpKVxuICAgICAgICAgICAgfHwgUmVzcG9uc2UuZXJyb3IoKVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhIGVycm9yIHJlc3BvbnNlLlxuICAgIHJldHVybiBSZXNwb25zZS5lcnJvcigpXG59O1xuXG5zZXRDYXRjaEhhbmRsZXIoaGFuZGxlcilcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBLHlCQUFDLFNBQVUsS0FBSSxRQUFTLENBQUMsR0FBRSxRQUFTLEVBQUMsTUFBTyxFQUFDLFNBQVUsUUFBUSxTQUFVLENBQUMsR0FBRSxVQUFXLGdCQUFlLEdBQUUsT0FBUSxFQUFDLFNBQVUsUUFBUSxTQUFVLENBQUMsR0FBRSxVQUFXLGdCQUFlLEdBQUUsUUFBUyxFQUFDLFNBQVUsUUFBUSxTQUFVLENBQUMsR0FBRSxVQUFXLGdCQUFlLEdBQUUsT0FBUSxFQUFDLFNBQVUsUUFBUSxTQUFVLENBQUMsR0FBRSxVQUFXLGdCQUFlLEVBQUMsR0FBRSxPQUFRLE9BQU0sT0FBUSxDQUFDLE1BQUssSUFBSSxHQUFFLGVBQWdCLElBQUcsV0FBWSxDQUFDLGdCQUFlLGdCQUFlLGVBQWMsc0RBQXFELFdBQVcsRUFBQzs7O0FDQ3JlLE1BQUc7QUFBQyxTQUFLLG9CQUFvQixLQUFHLEVBQUU7QUFBQSxFQUFDLFNBQU8sR0FBRTtBQUFBLEVBQUM7OztBQ2dCdEMsTUFBTSxXQUF1QjtBQUFBLElBQ2xDLGlCQUFpQixDQUFDLEVBQUMsV0FBVyx1QkFBdUIsTUFBSyxNQUFNO0FBQzlELFVBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCO0FBQ3hDLGNBQU0sSUFBSSxNQUFNLDRDQUE0QztBQUFBLE1BQzlEO0FBQ0EsYUFDRSxRQUFRLFNBQVMsMkRBQ0kscUJBQXFCLHdCQUN2QyxLQUFLLFVBQVUsS0FBSyxDQUFDO0FBQUEsSUFFNUI7QUFBQSxJQUVBLGdCQUFnQixDQUFDLEVBQUMsWUFBWSxXQUFXLFVBQVUsVUFBUyxNQUFNO0FBQ2hFLFVBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXO0FBQ3hELGNBQU0sSUFBSSxNQUFNLDJDQUEyQztBQUFBLE1B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QkFBaUIsV0FBVyxXQUFTO0FBQ3RDLFVBQU07QUFBQSxNQUNGLEtBQUssT0FDQSxLQUFLLGNBQWMsRUFDbkIsS0FBSyxXQUFTLE1BQU0sT0FBTyxTQUFTLENBQUM7QUFBQSxJQUM5QztBQUFBLEVBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxPQUFNLFlBQVc7QUFDN0IsVUFBTSxpQkFBaUIsUUFBUSxPQUFPO0FBQ3RDLFVBQU0sT0FBTyxRQUFRLFFBQVE7QUFDN0IsVUFBTSxNQUFNLFFBQVEsUUFBUTtBQUM1QixVQUFNLFFBQVEsTUFBTSxLQUFLLE9BQU8sS0FBSyxjQUFjO0FBR25ELFVBQU0sU0FBUyxNQUFNLE1BQU0sTUFBTSxHQUFHO0FBQ3BDLFFBQUksUUFBUTtBQUNSLGFBQU87QUFBQSxJQUNYO0FBRUEsUUFBSSxTQUFTLFlBQVk7QUFDckIsVUFBSTtBQUNKLFVBQUksT0FBTztBQUNYLFVBQUk7QUFDSixVQUFJLElBQUksUUFBUSxlQUFPLE9BQU8sTUFBTSxHQUFHO0FBQ25DLGdCQUFRLElBQUksUUFBUSxlQUFPLFNBQVMsRUFBRSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsTUFDeEQsT0FBTztBQUNILGdCQUFTLElBQUksSUFBSSxHQUFHLEVBQUcsU0FBUyxRQUFRLE9BQU8sRUFBRSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsTUFDbkU7QUFDQSxVQUFJLE1BQU0sU0FBUyxLQUFLLGVBQU8sTUFBTSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEdBQUc7QUFDckQsZUFBTyxNQUFNLENBQUM7QUFDZCxjQUFNQyxjQUFhLEdBQUcsZUFBTyxPQUFPLEdBQUcsSUFBSTtBQUMzQyxjQUFNLHFDQUFxQ0EsV0FBVTtBQUNyRCxrQkFBVSxNQUFNLE1BQU0sTUFBTUEsV0FBVTtBQUN0QyxZQUFJLFNBQVM7QUFDVCxpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBRUEsWUFBTSxhQUFhLEdBQUcsZUFBTyxPQUFPO0FBQ3BDLFlBQU0scUNBQXFDLFVBQVU7QUFDckQsYUFBUSxNQUFNLE1BQU0sTUFBTSxVQUFVLEtBQzdCLFNBQVMsTUFBTTtBQUFBLElBQzFCLFdBQVcsU0FBUyxXQUFXLGVBQU8sZUFBZTtBQUNqRCxhQUFRLE1BQU0sTUFBTSxNQUFNLGVBQU8sYUFBYSxLQUN2QyxTQUFTLE1BQU07QUFBQSxJQUMxQjtBQUdBLFdBQU8sU0FBUyxNQUFNO0FBQUEsRUFDMUI7QUFFQSxrQkFBZ0IsT0FBTzsiLAogICJuYW1lcyI6IFsidGFyZ2V0IiwgImhhbmRsZXIiLCAiaGFuZGxlciIsICJoYW5kbGVyIiwgImhhbmRsZXIiLCAiaGFuZGxlciIsICJkZWZhdWx0Um91dGVyIiwgImhhbmRsZXIiLCAiZGVmYXVsdFJvdXRlciIsICJoYW5kbGVyIiwgImVycm9yIiwgIm1lc3NhZ2VzIiwgImhhbmRsZXIiLCAibWVzc2FnZXMiLCAiaGFuZGxlciIsICJtZXNzYWdlcyIsICJoYW5kbGVyIiwgIm1lc3NhZ2VzIiwgImhhbmRsZXIiLCAibWVzc2FnZXMiLCAib2ZmbGluZVVybCJdCn0K
