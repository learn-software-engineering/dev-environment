(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // ns-params:@params
  var params_default = { baseURL: "/", caches: { font: { max_age: 2592e3, origins: [], strategy: "network-first" }, image: { max_age: 2592e3, origins: [], strategy: "network-first" }, script: { max_age: 2592e3, origins: [], strategy: "network-first" }, style: { max_age: 2592e3, origins: [], strategy: "network-first" } }, debug: false, langs: ["en", "es"], offline_image: "", precaches: ["/en/offline/", "/es/offline/", "/hb/scss/index.tmpl.scss", "/es/archives/", "/js/ls.js"] };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtcGFyYW1zOkBwYXJhbXMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ZlcnNpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VzLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL1dvcmtib3hFcnJvci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9hc3NlcnQudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvbG9nZ2VyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZS9zcmMvX3ZlcnNpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL3NyYy9DYWNoZWFibGVSZXNwb25zZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2Uvc3JjL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL2RvbnRXYWl0Rm9yLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2pha2VhcmNoaWJhbGQvaWRiQHY3LjEuMStpbmNvbXBhdGlibGUvc3JjL3V0aWwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjcuMS4xK2luY29tcGF0aWJsZS9zcmMvd3JhcC1pZGItdmFsdWUudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjcuMS4xK2luY29tcGF0aWJsZS9zcmMvZW50cnkudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjcuMS4xK2luY29tcGF0aWJsZS9zcmMvZGF0YWJhc2UtZXh0cmFzLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWV4cGlyYXRpb24vc3JjL192ZXJzaW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWV4cGlyYXRpb24vc3JjL21vZGVscy9DYWNoZVRpbWVzdGFtcHNNb2RlbC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1leHBpcmF0aW9uL3NyYy9DYWNoZUV4cGlyYXRpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvY2FjaGVOYW1lcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9yZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjay50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1leHBpcmF0aW9uL3NyYy9FeHBpcmF0aW9uUGx1Z2luLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL192ZXJzaW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL3V0aWxzL2NvbnN0YW50cy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy91dGlscy9ub3JtYWxpemVIYW5kbGVyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL1JvdXRlLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL1JlZ0V4cFJvdXRlLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL1JvdXRlci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtcm91dGluZy9zcmMvcmVnaXN0ZXJSb3V0ZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9zZXRDYXRjaEhhbmRsZXIudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvY2FjaGVNYXRjaElnbm9yZVBhcmFtcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9EZWZlcnJlZC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS90aW1lb3V0LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL192ZXJzaW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL1N0cmF0ZWd5SGFuZGxlci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9TdHJhdGVneS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy91dGlscy9tZXNzYWdlcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9DYWNoZUZpcnN0LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL3BsdWdpbnMvY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9OZXR3b3JrRmlyc3QudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvTmV0d29ya09ubHkudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvU3RhbGVXaGlsZVJldmFsaWRhdGUudHMiLCAiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1wiYmFzZVVSTFwiOlwiL1wiLFwiY2FjaGVzXCI6e1wiZm9udFwiOntcIm1heF9hZ2VcIjoyNTkyMDAwLFwib3JpZ2luc1wiOltdLFwic3RyYXRlZ3lcIjpcIm5ldHdvcmstZmlyc3RcIn0sXCJpbWFnZVwiOntcIm1heF9hZ2VcIjoyNTkyMDAwLFwib3JpZ2luc1wiOltdLFwic3RyYXRlZ3lcIjpcIm5ldHdvcmstZmlyc3RcIn0sXCJzY3JpcHRcIjp7XCJtYXhfYWdlXCI6MjU5MjAwMCxcIm9yaWdpbnNcIjpbXSxcInN0cmF0ZWd5XCI6XCJuZXR3b3JrLWZpcnN0XCJ9LFwic3R5bGVcIjp7XCJtYXhfYWdlXCI6MjU5MjAwMCxcIm9yaWdpbnNcIjpbXSxcInN0cmF0ZWd5XCI6XCJuZXR3b3JrLWZpcnN0XCJ9fSxcImRlYnVnXCI6ZmFsc2UsXCJsYW5nc1wiOltcImVuXCIsXCJlc1wiXSxcIm9mZmxpbmVfaW1hZ2VcIjpcIlwiLFwicHJlY2FjaGVzXCI6W1wiL2VuL29mZmxpbmUvXCIsXCIvZXMvb2ZmbGluZS9cIixcIi9oYi9zY3NzL2luZGV4LnRtcGwuc2Nzc1wiLFwiL2VzL2FyY2hpdmVzL1wiLFwiL2pzL2xzLmpzXCJdfSIsICIvLyBAdHMtaWdub3JlXG50cnl7c2VsZlsnd29ya2JveDpjb3JlOjcuMC4wJ10mJl8oKX1jYXRjaChlKXt9IiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5cbmludGVyZmFjZSBMb2dnYWJsZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbn1cbmludGVyZmFjZSBNZXNzYWdlTWFwIHtcbiAgW21lc3NhZ2VJRDogc3RyaW5nXTogKHBhcmFtOiBMb2dnYWJsZU9iamVjdCkgPT4gc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgbWVzc2FnZXM6IE1lc3NhZ2VNYXAgPSB7XG4gICdpbnZhbGlkLXZhbHVlJzogKHtwYXJhbU5hbWUsIHZhbGlkVmFsdWVEZXNjcmlwdGlvbiwgdmFsdWV9KSA9PiB7XG4gICAgaWYgKCFwYXJhbU5hbWUgfHwgIXZhbGlkVmFsdWVEZXNjcmlwdGlvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXZhbHVlJyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHdhcyBnaXZlbiBhIHZhbHVlIHdpdGggYW4gYCArXG4gICAgICBgdW5leHBlY3RlZCB2YWx1ZS4gJHt2YWxpZFZhbHVlRGVzY3JpcHRpb259IFJlY2VpdmVkIGEgdmFsdWUgb2YgYCArXG4gICAgICBgJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LmBcbiAgICApO1xuICB9LFxuXG4gICdub3QtYW4tYXJyYXknOiAoe21vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZX0pID0+IHtcbiAgICBpZiAoIW1vZHVsZU5hbWUgfHwgIWNsYXNzTmFtZSB8fCAhZnVuY05hbWUgfHwgIXBhcmFtTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdub3QtYW4tYXJyYXknIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBwYXJhbWV0ZXIgJyR7cGFyYW1OYW1lfScgcGFzc2VkIGludG8gYCArXG4gICAgICBgJyR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCknIG11c3QgYmUgYW4gYXJyYXkuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2luY29ycmVjdC10eXBlJzogKHtcbiAgICBleHBlY3RlZFR5cGUsXG4gICAgcGFyYW1OYW1lLFxuICAgIG1vZHVsZU5hbWUsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZ1bmNOYW1lLFxuICB9KSA9PiB7XG4gICAgaWYgKCFleHBlY3RlZFR5cGUgfHwgIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW5jb3JyZWN0LXR5cGUnIGVycm9yLmApO1xuICAgIH1cbiAgICBjb25zdCBjbGFzc05hbWVTdHIgPSBjbGFzc05hbWUgPyBgJHtjbGFzc05hbWV9LmAgOiAnJztcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBwYXJhbWV0ZXIgJyR7cGFyYW1OYW1lfScgcGFzc2VkIGludG8gYCArXG4gICAgICBgJyR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWVTdHJ9YCArXG4gICAgICBgJHtmdW5jTmFtZX0oKScgbXVzdCBiZSBvZiB0eXBlICR7ZXhwZWN0ZWRUeXBlfS5gXG4gICAgKTtcbiAgfSxcblxuICAnaW5jb3JyZWN0LWNsYXNzJzogKHtcbiAgICBleHBlY3RlZENsYXNzTmFtZSxcbiAgICBwYXJhbU5hbWUsXG4gICAgbW9kdWxlTmFtZSxcbiAgICBjbGFzc05hbWUsXG4gICAgZnVuY05hbWUsXG4gICAgaXNSZXR1cm5WYWx1ZVByb2JsZW0sXG4gIH0pID0+IHtcbiAgICBpZiAoIWV4cGVjdGVkQ2xhc3NOYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbmNvcnJlY3QtY2xhc3MnIGVycm9yLmApO1xuICAgIH1cbiAgICBjb25zdCBjbGFzc05hbWVTdHIgPSBjbGFzc05hbWUgPyBgJHtjbGFzc05hbWV9LmAgOiAnJztcbiAgICBpZiAoaXNSZXR1cm5WYWx1ZVByb2JsZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGBUaGUgcmV0dXJuIHZhbHVlIGZyb20gYCArXG4gICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZVN0cn0ke2Z1bmNOYW1lfSgpJyBgICtcbiAgICAgICAgYG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgY2xhc3MgJHtleHBlY3RlZENsYXNzTmFtZX0uYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBwYXJhbWV0ZXIgJyR7cGFyYW1OYW1lfScgcGFzc2VkIGludG8gYCArXG4gICAgICBgJyR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWVTdHJ9JHtmdW5jTmFtZX0oKScgYCArXG4gICAgICBgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBjbGFzcyAke2V4cGVjdGVkQ2xhc3NOYW1lfS5gXG4gICAgKTtcbiAgfSxcblxuICAnbWlzc2luZy1hLW1ldGhvZCc6ICh7XG4gICAgZXhwZWN0ZWRNZXRob2QsXG4gICAgcGFyYW1OYW1lLFxuICAgIG1vZHVsZU5hbWUsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZ1bmNOYW1lLFxuICB9KSA9PiB7XG4gICAgaWYgKFxuICAgICAgIWV4cGVjdGVkTWV0aG9kIHx8XG4gICAgICAhcGFyYW1OYW1lIHx8XG4gICAgICAhbW9kdWxlTmFtZSB8fFxuICAgICAgIWNsYXNzTmFtZSB8fFxuICAgICAgIWZ1bmNOYW1lXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ21pc3NpbmctYS1tZXRob2QnIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYCR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCkgZXhwZWN0ZWQgdGhlIGAgK1xuICAgICAgYCcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB0byBleHBvc2UgYSAnJHtleHBlY3RlZE1ldGhvZH0nIG1ldGhvZC5gXG4gICAgKTtcbiAgfSxcblxuICAnYWRkLXRvLWNhY2hlLWxpc3QtdW5leHBlY3RlZC10eXBlJzogKHtlbnRyeX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYEFuIHVuZXhwZWN0ZWQgZW50cnkgd2FzIHBhc3NlZCB0byBgICtcbiAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBUaGUgZW50cnkgYCArXG4gICAgICBgJyR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIGVudHJ5LFxuICAgICAgKX0nIGlzbid0IHN1cHBvcnRlZC4gWW91IG11c3Qgc3VwcGx5IGFuIGFycmF5IG9mIGAgK1xuICAgICAgYHN0cmluZ3Mgd2l0aCBvbmUgb3IgbW9yZSBjaGFyYWN0ZXJzLCBvYmplY3RzIHdpdGggYSB1cmwgcHJvcGVydHkgb3IgYCArXG4gICAgICBgUmVxdWVzdCBvYmplY3RzLmBcbiAgICApO1xuICB9LFxuXG4gICdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1lbnRyaWVzJzogKHtmaXJzdEVudHJ5LCBzZWNvbmRFbnRyeX0pID0+IHtcbiAgICBpZiAoIWZpcnN0RW50cnkgfHwgIXNlY29uZEVudHJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgKyBgJ2FkZC10by1jYWNoZS1saXN0LWR1cGxpY2F0ZS1lbnRyaWVzJyBlcnJvci5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgYFR3byBvZiB0aGUgZW50cmllcyBwYXNzZWQgdG8gYCArXG4gICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgaGFkIHRoZSBVUkwgYCArXG4gICAgICBgJHtmaXJzdEVudHJ5fSBidXQgZGlmZmVyZW50IHJldmlzaW9uIGRldGFpbHMuIFdvcmtib3ggaXMgYCArXG4gICAgICBgdW5hYmxlIHRvIGNhY2hlIGFuZCB2ZXJzaW9uIHRoZSBhc3NldCBjb3JyZWN0bHkuIFBsZWFzZSByZW1vdmUgb25lIGAgK1xuICAgICAgYG9mIHRoZSBlbnRyaWVzLmBcbiAgICApO1xuICB9LFxuXG4gICdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJzogKHt0aHJvd25FcnJvck1lc3NhZ2V9KSA9PiB7XG4gICAgaWYgKCF0aHJvd25FcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArIGAncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCcsIGVycm9yLmAsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBgQW4gZXJyb3Igd2FzIHRocm93biBieSBhIHBsdWdpbnMgJ3JlcXVlc3RXaWxsRmV0Y2goKScgbWV0aG9kLiBgICtcbiAgICAgIGBUaGUgdGhyb3duIGVycm9yIG1lc3NhZ2Ugd2FzOiAnJHt0aHJvd25FcnJvck1lc3NhZ2V9Jy5gXG4gICAgKTtcbiAgfSxcblxuICAnaW52YWxpZC1jYWNoZS1uYW1lJzogKHtjYWNoZU5hbWVJZCwgdmFsdWV9KSA9PiB7XG4gICAgaWYgKCFjYWNoZU5hbWVJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRXhwZWN0ZWQgYSAnY2FjaGVOYW1lSWQnIGZvciBlcnJvciAnaW52YWxpZC1jYWNoZS1uYW1lJ2AsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBgWW91IG11c3QgcHJvdmlkZSBhIG5hbWUgY29udGFpbmluZyBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGZvciBgICtcbiAgICAgIGBzZXRDYWNoZURldGFpbHMoeyR7Y2FjaGVOYW1lSWR9OiAnLi4uJ30pLiBSZWNlaXZlZCBhIHZhbHVlIG9mIGAgK1xuICAgICAgYCcke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0nYFxuICAgICk7XG4gIH0sXG5cbiAgJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCc6ICh7bWV0aG9kfSkgPT4ge1xuICAgIGlmICghbWV0aG9kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICAgIGAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJyBlcnJvci5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCAgcHJldmlvdXNseSBgICtcbiAgICAgIGByZWdpc3RlcmVkIGZvciB0aGUgbWV0aG9kIHR5cGUgJyR7bWV0aG9kfScuYFxuICAgICk7XG4gIH0sXG5cbiAgJ3VucmVnaXN0ZXItcm91dGUtcm91dGUtbm90LXJlZ2lzdGVyZWQnOiAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcm91dGUgeW91J3JlIHRyeWluZyB0byB1bnJlZ2lzdGVyIHdhcyBub3QgcHJldmlvdXNseSBgICtcbiAgICAgIGByZWdpc3RlcmVkLmBcbiAgICApO1xuICB9LFxuXG4gICdxdWV1ZS1yZXBsYXktZmFpbGVkJzogKHtuYW1lfSkgPT4ge1xuICAgIHJldHVybiBgUmVwbGF5aW5nIHRoZSBiYWNrZ3JvdW5kIHN5bmMgcXVldWUgJyR7bmFtZX0nIGZhaWxlZC5gO1xuICB9LFxuXG4gICdkdXBsaWNhdGUtcXVldWUtbmFtZSc6ICh7bmFtZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBRdWV1ZSBuYW1lICcke25hbWV9JyBpcyBhbHJlYWR5IGJlaW5nIHVzZWQuIGAgK1xuICAgICAgYEFsbCBpbnN0YW5jZXMgb2YgYmFja2dyb3VuZFN5bmMuUXVldWUgbXVzdCBiZSBnaXZlbiB1bmlxdWUgbmFtZXMuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2V4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2UnOiAoe21ldGhvZE5hbWUsIHBhcmFtTmFtZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSAnJHttZXRob2ROYW1lfSgpJyBtZXRob2QgY2FuIG9ubHkgYmUgdXNlZCB3aGVuIHRoZSBgICtcbiAgICAgIGAnJHtwYXJhbU5hbWV9JyBpcyB1c2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5gXG4gICAgKTtcbiAgfSxcblxuICAndW5zdXBwb3J0ZWQtcm91dGUtdHlwZSc6ICh7bW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHN1cHBsaWVkICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB3YXMgYW4gdW5zdXBwb3J0ZWQgdHlwZS4gYCArXG4gICAgICBgUGxlYXNlIGNoZWNrIHRoZSBkb2NzIGZvciAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSBmb3IgYCArXG4gICAgICBgdmFsaWQgaW5wdXQgdHlwZXMuYFxuICAgICk7XG4gIH0sXG5cbiAgJ25vdC1hcnJheS1vZi1jbGFzcyc6ICh7XG4gICAgdmFsdWUsXG4gICAgZXhwZWN0ZWRDbGFzcyxcbiAgICBtb2R1bGVOYW1lLFxuICAgIGNsYXNzTmFtZSxcbiAgICBmdW5jTmFtZSxcbiAgICBwYXJhbU5hbWUsXG4gIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBhcnJheSBvZiBgICtcbiAgICAgIGAnJHtleHBlY3RlZENsYXNzfScgb2JqZWN0cy4gUmVjZWl2ZWQgJyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfSwnLiBgICtcbiAgICAgIGBQbGVhc2UgY2hlY2sgdGhlIGNhbGwgdG8gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKSBgICtcbiAgICAgIGB0byBmaXggdGhlIGlzc3VlLmBcbiAgICApO1xuICB9LFxuXG4gICdtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQnOiAoe21vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBZb3UgbXVzdCBkZWZpbmUgZWl0aGVyIGNvbmZpZy5tYXhFbnRyaWVzIG9yIGNvbmZpZy5tYXhBZ2VTZWNvbmRzYCArXG4gICAgICBgaW4gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX1gXG4gICAgKTtcbiAgfSxcblxuICAnc3RhdHVzZXMtb3ItaGVhZGVycy1yZXF1aXJlZCc6ICh7bW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFlvdSBtdXN0IGRlZmluZSBlaXRoZXIgY29uZmlnLnN0YXR1c2VzIG9yIGNvbmZpZy5oZWFkZXJzYCArXG4gICAgICBgaW4gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX1gXG4gICAgKTtcbiAgfSxcblxuICAnaW52YWxpZC1zdHJpbmcnOiAoe21vZHVsZU5hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWV9KSA9PiB7XG4gICAgaWYgKCFwYXJhbU5hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2ludmFsaWQtc3RyaW5nJyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGBXaGVuIHVzaW5nIHN0cmluZ3MsIHRoZSAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgbXVzdCBzdGFydCB3aXRoIGAgK1xuICAgICAgYCdodHRwJyAoZm9yIGNyb3NzLW9yaWdpbiBtYXRjaGVzKSBvciAnLycgKGZvciBzYW1lLW9yaWdpbiBtYXRjaGVzKS4gYCArXG4gICAgICBgUGxlYXNlIHNlZSB0aGUgZG9jcyBmb3IgJHttb2R1bGVOYW1lfS4ke2Z1bmNOYW1lfSgpIGZvciBgICtcbiAgICAgIGBtb3JlIGluZm8uYFxuICAgICk7XG4gIH0sXG5cbiAgJ2NoYW5uZWwtbmFtZS1yZXF1aXJlZCc6ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFlvdSBtdXN0IHByb3ZpZGUgYSBjaGFubmVsTmFtZSB0byBjb25zdHJ1Y3QgYSBgICtcbiAgICAgIGBCcm9hZGNhc3RDYWNoZVVwZGF0ZSBpbnN0YW5jZS5gXG4gICAgKTtcbiAgfSxcblxuICAnaW52YWxpZC1yZXNwb25zZXMtYXJlLXNhbWUtYXJncyc6ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBhcmd1bWVudHMgcGFzc2VkIGludG8gcmVzcG9uc2VzQXJlU2FtZSgpIGFwcGVhciB0byBiZSBgICtcbiAgICAgIGBpbnZhbGlkLiBQbGVhc2UgZW5zdXJlIHZhbGlkIFJlc3BvbnNlcyBhcmUgdXNlZC5gXG4gICAgKTtcbiAgfSxcblxuICAnZXhwaXJlLWN1c3RvbS1jYWNoZXMtb25seSc6ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFlvdSBtdXN0IHByb3ZpZGUgYSAnY2FjaGVOYW1lJyBwcm9wZXJ0eSB3aGVuIHVzaW5nIHRoZSBgICtcbiAgICAgIGBleHBpcmF0aW9uIHBsdWdpbiB3aXRoIGEgcnVudGltZSBjYWNoaW5nIHN0cmF0ZWd5LmBcbiAgICApO1xuICB9LFxuXG4gICd1bml0LW11c3QtYmUtYnl0ZXMnOiAoe25vcm1hbGl6ZWRSYW5nZUhlYWRlcn0pID0+IHtcbiAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICd1bml0LW11c3QtYmUtYnl0ZXMnIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSAndW5pdCcgcG9ydGlvbiBvZiB0aGUgUmFuZ2UgaGVhZGVyIG11c3QgYmUgc2V0IHRvICdieXRlcycuIGAgK1xuICAgICAgYFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgXG4gICAgKTtcbiAgfSxcblxuICAnc2luZ2xlLXJhbmdlLW9ubHknOiAoe25vcm1hbGl6ZWRSYW5nZUhlYWRlcn0pID0+IHtcbiAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdzaW5nbGUtcmFuZ2Utb25seScgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgTXVsdGlwbGUgcmFuZ2VzIGFyZSBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlIGEgIHNpbmdsZSBzdGFydCBgICtcbiAgICAgIGB2YWx1ZSwgYW5kIG9wdGlvbmFsIGVuZCB2YWx1ZS4gVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgYCArXG4gICAgICBgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImBcbiAgICApO1xuICB9LFxuXG4gICdpbnZhbGlkLXJhbmdlLXZhbHVlcyc6ICh7bm9ybWFsaXplZFJhbmdlSGVhZGVyfSkgPT4ge1xuICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2ludmFsaWQtcmFuZ2UtdmFsdWVzJyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgUmFuZ2UgaGVhZGVyIGlzIG1pc3NpbmcgYm90aCBzdGFydCBhbmQgZW5kIHZhbHVlcy4gQXQgbGVhc3QgYCArXG4gICAgICBgb25lIG9mIHRob3NlIHZhbHVlcyBpcyBuZWVkZWQuIFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIGAgK1xuICAgICAgYFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgXG4gICAgKTtcbiAgfSxcblxuICAnbm8tcmFuZ2UtaGVhZGVyJzogKCkgPT4ge1xuICAgIHJldHVybiBgTm8gUmFuZ2UgaGVhZGVyIHdhcyBmb3VuZCBpbiB0aGUgUmVxdWVzdCBwcm92aWRlZC5gO1xuICB9LFxuXG4gICdyYW5nZS1ub3Qtc2F0aXNmaWFibGUnOiAoe3NpemUsIHN0YXJ0LCBlbmR9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgc3RhcnQgKCR7c3RhcnR9KSBhbmQgZW5kICgke2VuZH0pIHZhbHVlcyBpbiB0aGUgUmFuZ2UgYXJlIGAgK1xuICAgICAgYG5vdCBzYXRpc2ZpYWJsZSBieSB0aGUgY2FjaGVkIHJlc3BvbnNlLCB3aGljaCBpcyAke3NpemV9IGJ5dGVzLmBcbiAgICApO1xuICB9LFxuXG4gICdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCc6ICh7dXJsLCBtZXRob2R9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBVbmFibGUgdG8gY2FjaGUgJyR7dXJsfScgYmVjYXVzZSBpdCBpcyBhICcke21ldGhvZH0nIHJlcXVlc3QgYW5kIGAgK1xuICAgICAgYG9ubHkgJ0dFVCcgcmVxdWVzdHMgY2FuIGJlIGNhY2hlZC5gXG4gICAgKTtcbiAgfSxcblxuICAnY2FjaGUtcHV0LXdpdGgtbm8tcmVzcG9uc2UnOiAoe3VybH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZXJlIHdhcyBhbiBhdHRlbXB0IHRvIGNhY2hlICcke3VybH0nIGJ1dCB0aGUgcmVzcG9uc2Ugd2FzIG5vdCBgICtcbiAgICAgIGBkZWZpbmVkLmBcbiAgICApO1xuICB9LFxuXG4gICduby1yZXNwb25zZSc6ICh7dXJsLCBlcnJvcn0pID0+IHtcbiAgICBsZXQgbWVzc2FnZSA9IGBUaGUgc3RyYXRlZ3kgY291bGQgbm90IGdlbmVyYXRlIGEgcmVzcG9uc2UgZm9yICcke3VybH0nLmA7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBtZXNzYWdlICs9IGAgVGhlIHVuZGVybHlpbmcgZXJyb3IgaXMgJHtlcnJvcn0uYDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgJ2JhZC1wcmVjYWNoaW5nLXJlc3BvbnNlJzogKHt1cmwsIHN0YXR1c30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBwcmVjYWNoaW5nIHJlcXVlc3QgZm9yICcke3VybH0nIGZhaWxlZGAgK1xuICAgICAgKHN0YXR1cyA/IGAgd2l0aCBhbiBIVFRQIHN0YXR1cyBvZiAke3N0YXR1c30uYCA6IGAuYClcbiAgICApO1xuICB9LFxuXG4gICdub24tcHJlY2FjaGVkLXVybCc6ICh7dXJsfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwoJyR7dXJsfScpIHdhcyBjYWxsZWQsIGJ1dCB0aGF0IFVSTCBpcyBgICtcbiAgICAgIGBub3QgcHJlY2FjaGVkLiBQbGVhc2UgcGFzcyBpbiBhIFVSTCB0aGF0IGlzIHByZWNhY2hlZCBpbnN0ZWFkLmBcbiAgICApO1xuICB9LFxuXG4gICdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1pbnRlZ3JpdGllcyc6ICh7dXJsfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVHdvIG9mIHRoZSBlbnRyaWVzIHBhc3NlZCB0byBgICtcbiAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBoYWQgdGhlIFVSTCBgICtcbiAgICAgIGAke3VybH0gd2l0aCBkaWZmZXJlbnQgaW50ZWdyaXR5IHZhbHVlcy4gUGxlYXNlIHJlbW92ZSBvbmUgb2YgdGhlbS5gXG4gICAgKTtcbiAgfSxcblxuICAnbWlzc2luZy1wcmVjYWNoZS1lbnRyeSc6ICh7Y2FjaGVOYW1lLCB1cmx9KSA9PiB7XG4gICAgcmV0dXJuIGBVbmFibGUgdG8gZmluZCBhIHByZWNhY2hlZCByZXNwb25zZSBpbiAke2NhY2hlTmFtZX0gZm9yICR7dXJsfS5gO1xuICB9LFxuXG4gICdjcm9zcy1vcmlnaW4tY29weS1yZXNwb25zZSc6ICh7b3JpZ2lufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgd29ya2JveC1jb3JlLmNvcHlSZXNwb25zZSgpIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBzYW1lLW9yaWdpbiBgICtcbiAgICAgIGByZXNwb25zZXMuIEl0IHdhcyBwYXNzZWQgYSByZXNwb25zZSB3aXRoIG9yaWdpbiAke29yaWdpbn0uYFxuICAgICk7XG4gIH0sXG5cbiAgJ29wYXF1ZS1zdHJlYW1zLXNvdXJjZSc6ICh7dHlwZX0pID0+IHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgIGBPbmUgb2YgdGhlIHdvcmtib3gtc3RyZWFtcyBzb3VyY2VzIHJlc3VsdGVkIGluIGFuIGAgK1xuICAgICAgYCcke3R5cGV9JyByZXNwb25zZS5gO1xuICAgIGlmICh0eXBlID09PSAnb3BhcXVlcmVkaXJlY3QnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBgJHttZXNzYWdlfSBQbGVhc2UgZG8gbm90IHVzZSBhIG5hdmlnYXRpb24gcmVxdWVzdCB0aGF0IHJlc3VsdHMgYCArXG4gICAgICAgIGBpbiBhIHJlZGlyZWN0IGFzIGEgc291cmNlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBgJHttZXNzYWdlfSBQbGVhc2UgZW5zdXJlIHlvdXIgc291cmNlcyBhcmUgQ09SUy1lbmFibGVkLmA7XG4gIH0sXG59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4uLy4uL192ZXJzaW9uLmpzJztcblxuY29uc3QgZmFsbGJhY2sgPSAoY29kZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkgPT4ge1xuICBsZXQgbXNnID0gY29kZTtcbiAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgIG1zZyArPSBgIDo6ICR7SlNPTi5zdHJpbmdpZnkoYXJncyl9YDtcbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuY29uc3QgZ2VuZXJhdG9yRnVuY3Rpb24gPSAoY29kZTogc3RyaW5nLCBkZXRhaWxzID0ge30pID0+IHtcbiAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VzW2NvZGVdO1xuICBpZiAoIW1lc3NhZ2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIG1lc3NhZ2UgZm9yIGNvZGUgJyR7Y29kZX0nLmApO1xuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2UoZGV0YWlscyk7XG59O1xuXG5leHBvcnQgY29uc3QgbWVzc2FnZUdlbmVyYXRvciA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBmYWxsYmFjayA6IGdlbmVyYXRvckZ1bmN0aW9uO1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHttZXNzYWdlR2VuZXJhdG9yfSBmcm9tICcuLi9tb2RlbHMvbWVzc2FnZXMvbWVzc2FnZUdlbmVyYXRvci5qcyc7XG5pbXBvcnQge01hcExpa2VPYmplY3R9IGZyb20gJy4uL3R5cGVzLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIFdvcmtib3ggZXJyb3JzIHNob3VsZCBiZSB0aHJvd24gd2l0aCB0aGlzIGNsYXNzLlxuICogVGhpcyBhbGxvd3MgdXNlIHRvIGVuc3VyZSB0aGUgdHlwZSBlYXNpbHkgaW4gdGVzdHMsXG4gKiBoZWxwcyBkZXZlbG9wZXJzIGlkZW50aWZ5IGVycm9ycyBmcm9tIHdvcmtib3hcbiAqIGVhc2lseSBhbmQgYWxsb3dzIHVzZSB0byBvcHRpbWlzZSBlcnJvclxuICogbWVzc2FnZXMgY29ycmVjdGx5LlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFdvcmtib3hFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgZGV0YWlscz86IE1hcExpa2VPYmplY3Q7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvckNvZGUgVGhlIGVycm9yIGNvZGUgdGhhdFxuICAgKiBpZGVudGlmaWVzIHRoaXMgcGFydGljdWxhciBlcnJvci5cbiAgICogQHBhcmFtIHtPYmplY3Q9fSBkZXRhaWxzIEFueSByZWxldmFudCBhcmd1bWVudHNcbiAgICogdGhhdCB3aWxsIGhlbHAgZGV2ZWxvcGVycyBpZGVudGlmeSBpc3N1ZXMgc2hvdWxkXG4gICAqIGJlIGFkZGVkIGFzIGEga2V5IG9uIHRoZSBjb250ZXh0IG9iamVjdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBkZXRhaWxzPzogTWFwTGlrZU9iamVjdCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlR2VuZXJhdG9yKGVycm9yQ29kZSwgZGV0YWlscyk7XG5cbiAgICBzdXBlcihtZXNzYWdlKTtcblxuICAgIHRoaXMubmFtZSA9IGVycm9yQ29kZTtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICB9XG59XG5cbmV4cG9ydCB7V29ya2JveEVycm9yfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICcuLi9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHtNYXBMaWtlT2JqZWN0fSBmcm9tICcuLi90eXBlcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLypcbiAqIFRoaXMgbWV0aG9kIHRocm93cyBpZiB0aGUgc3VwcGxpZWQgdmFsdWUgaXMgbm90IGFuIGFycmF5LlxuICogVGhlIGRlc3RydWN0ZWQgdmFsdWVzIGFyZSByZXF1aXJlZCB0byBwcm9kdWNlIGEgbWVhbmluZ2Z1bCBlcnJvciBmb3IgdXNlcnMuXG4gKiBUaGUgZGVzdHJ1Y3RlZCBhbmQgcmVzdHJ1Y3R1cmVkIG9iamVjdCBpcyBzbyBpdCdzIGNsZWFyIHdoYXQgaXNcbiAqIG5lZWRlZC5cbiAqL1xuY29uc3QgaXNBcnJheSA9ICh2YWx1ZTogYW55W10sIGRldGFpbHM6IE1hcExpa2VPYmplY3QpID0+IHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vdC1hbi1hcnJheScsIGRldGFpbHMpO1xuICB9XG59O1xuXG5jb25zdCBoYXNNZXRob2QgPSAoXG4gIG9iamVjdDogTWFwTGlrZU9iamVjdCxcbiAgZXhwZWN0ZWRNZXRob2Q6IHN0cmluZyxcbiAgZGV0YWlsczogTWFwTGlrZU9iamVjdCxcbikgPT4ge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIG9iamVjdFtleHBlY3RlZE1ldGhvZF07XG4gIGlmICh0eXBlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgZGV0YWlsc1snZXhwZWN0ZWRNZXRob2QnXSA9IGV4cGVjdGVkTWV0aG9kO1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21pc3NpbmctYS1tZXRob2QnLCBkZXRhaWxzKTtcbiAgfVxufTtcblxuY29uc3QgaXNUeXBlID0gKFxuICBvYmplY3Q6IHVua25vd24sXG4gIGV4cGVjdGVkVHlwZTogc3RyaW5nLFxuICBkZXRhaWxzOiBNYXBMaWtlT2JqZWN0LFxuKSA9PiB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICBkZXRhaWxzWydleHBlY3RlZFR5cGUnXSA9IGV4cGVjdGVkVHlwZTtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbmNvcnJlY3QtdHlwZScsIGRldGFpbHMpO1xuICB9XG59O1xuXG5jb25zdCBpc0luc3RhbmNlID0gKFxuICBvYmplY3Q6IHVua25vd24sXG4gIC8vIE5lZWQgdGhlIGdlbmVyYWwgdHlwZSB0byBkbyB0aGUgY2hlY2sgbGF0ZXIuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gIGV4cGVjdGVkQ2xhc3M6IEZ1bmN0aW9uLFxuICBkZXRhaWxzOiBNYXBMaWtlT2JqZWN0LFxuKSA9PiB7XG4gIGlmICghKG9iamVjdCBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgZGV0YWlsc1snZXhwZWN0ZWRDbGFzc05hbWUnXSA9IGV4cGVjdGVkQ2xhc3MubmFtZTtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbmNvcnJlY3QtY2xhc3MnLCBkZXRhaWxzKTtcbiAgfVxufTtcblxuY29uc3QgaXNPbmVPZiA9ICh2YWx1ZTogYW55LCB2YWxpZFZhbHVlczogYW55W10sIGRldGFpbHM6IE1hcExpa2VPYmplY3QpID0+IHtcbiAgaWYgKCF2YWxpZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICBkZXRhaWxzWyd2YWxpZFZhbHVlRGVzY3JpcHRpb24nXSA9IGBWYWxpZCB2YWx1ZXMgYXJlICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICB2YWxpZFZhbHVlcyxcbiAgICApfS5gO1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtdmFsdWUnLCBkZXRhaWxzKTtcbiAgfVxufTtcblxuY29uc3QgaXNBcnJheU9mQ2xhc3MgPSAoXG4gIHZhbHVlOiBhbnksXG4gIC8vIE5lZWQgZ2VuZXJhbCB0eXBlIHRvIGRvIGNoZWNrIGxhdGVyLlxuICBleHBlY3RlZENsYXNzOiBGdW5jdGlvbiwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBkZXRhaWxzOiBNYXBMaWtlT2JqZWN0LFxuKSA9PiB7XG4gIGNvbnN0IGVycm9yID0gbmV3IFdvcmtib3hFcnJvcignbm90LWFycmF5LW9mLWNsYXNzJywgZGV0YWlscyk7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgIGlmICghKGl0ZW0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBmaW5hbEFzc2VydEV4cG9ydHMgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBudWxsXG4gICAgOiB7XG4gICAgICAgIGhhc01ldGhvZCxcbiAgICAgICAgaXNBcnJheSxcbiAgICAgICAgaXNJbnN0YW5jZSxcbiAgICAgICAgaXNPbmVPZixcbiAgICAgICAgaXNUeXBlLFxuICAgICAgICBpc0FycmF5T2ZDbGFzcyxcbiAgICAgIH07XG5cbmV4cG9ydCB7ZmluYWxBc3NlcnRFeHBvcnRzIGFzIGFzc2VydH07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuY29uc3QgZ2V0RnJpZW5kbHlVUkwgPSAodXJsOiBVUkwgfCBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKFN0cmluZyh1cmwpLCBsb2NhdGlvbi5ocmVmKTtcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjMyM1xuICAvLyBXZSB3YW50IHRvIGluY2x1ZGUgZXZlcnl0aGluZywgZXhjZXB0IGZvciB0aGUgb3JpZ2luIGlmIGl0J3Mgc2FtZS1vcmlnaW4uXG4gIHJldHVybiB1cmxPYmouaHJlZi5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke2xvY2F0aW9uLm9yaWdpbn1gKSwgJycpO1xufTtcblxuZXhwb3J0IHtnZXRGcmllbmRseVVSTH07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8vIGxvZ2dlciBpcyB1c2VkIGluc2lkZSBvZiBib3RoIHNlcnZpY2Ugd29ya2VycyBhbmQgdGhlIHdpbmRvdyBnbG9iYWwgc2NvcGUuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXb3JrZXJHbG9iYWxTY29wZSB7XG4gICAgX19XQl9ESVNBQkxFX0RFVl9MT0dTOiBib29sZWFuO1xuICB9XG5cbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19XQl9ESVNBQkxFX0RFVl9MT0dTOiBib29sZWFuO1xuICB9XG59XG5cbnR5cGUgTG9nZ2VyTWV0aG9kcyA9XG4gIHwgJ2RlYnVnJ1xuICB8ICdsb2cnXG4gIHwgJ3dhcm4nXG4gIHwgJ2Vycm9yJ1xuICB8ICdncm91cENvbGxhcHNlZCdcbiAgfCAnZ3JvdXBFbmQnO1xuXG5jb25zdCBsb2dnZXIgPSAoXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IG51bGxcbiAgICA6ICgoKSA9PiB7XG4gICAgICAgIC8vIERvbid0IG92ZXJ3cml0ZSB0aGlzIHZhbHVlIGlmIGl0J3MgYWxyZWFkeSBzZXQuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvcHVsbC8yMjg0I2lzc3VlY29tbWVudC01NjA0NzA5MjNcbiAgICAgICAgaWYgKCEoJ19fV0JfRElTQUJMRV9ERVZfTE9HUycgaW4gZ2xvYmFsVGhpcykpIHtcbiAgICAgICAgICBzZWxmLl9fV0JfRElTQUJMRV9ERVZfTE9HUyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGluR3JvdXAgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRob2RUb0NvbG9yTWFwOiB7W21ldGhvZE5hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bGx9ID0ge1xuICAgICAgICAgIGRlYnVnOiBgIzdmOGM4ZGAsIC8vIEdyYXlcbiAgICAgICAgICBsb2c6IGAjMmVjYzcxYCwgLy8gR3JlZW5cbiAgICAgICAgICB3YXJuOiBgI2YzOWMxMmAsIC8vIFllbGxvd1xuICAgICAgICAgIGVycm9yOiBgI2MwMzkyYmAsIC8vIFJlZFxuICAgICAgICAgIGdyb3VwQ29sbGFwc2VkOiBgIzM0OThkYmAsIC8vIEJsdWVcbiAgICAgICAgICBncm91cEVuZDogbnVsbCwgLy8gTm8gY29sb3JlZCBwcmVmaXggb24gZ3JvdXBFbmRcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwcmludCA9IGZ1bmN0aW9uIChtZXRob2Q6IExvZ2dlck1ldGhvZHMsIGFyZ3M6IGFueVtdKSB7XG4gICAgICAgICAgaWYgKHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwQ29sbGFwc2VkJykge1xuICAgICAgICAgICAgLy8gU2FmYXJpIGRvZXNuJ3QgcHJpbnQgYWxsIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoKSBhcmd1bWVudHM6XG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTgyNzU0XG4gICAgICAgICAgICBpZiAoL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICBjb25zb2xlW21ldGhvZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzdHlsZXMgPSBbXG4gICAgICAgICAgICBgYmFja2dyb3VuZDogJHttZXRob2RUb0NvbG9yTWFwW21ldGhvZF0hfWAsXG4gICAgICAgICAgICBgYm9yZGVyLXJhZGl1czogMC41ZW1gLFxuICAgICAgICAgICAgYGNvbG9yOiB3aGl0ZWAsXG4gICAgICAgICAgICBgZm9udC13ZWlnaHQ6IGJvbGRgLFxuICAgICAgICAgICAgYHBhZGRpbmc6IDJweCAwLjVlbWAsXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIC8vIFdoZW4gaW4gYSBncm91cCwgdGhlIHdvcmtib3ggcHJlZml4IGlzIG5vdCBkaXNwbGF5ZWQuXG4gICAgICAgICAgY29uc3QgbG9nUHJlZml4ID0gaW5Hcm91cCA/IFtdIDogWyclY3dvcmtib3gnLCBzdHlsZXMuam9pbignOycpXTtcblxuICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5sb2dQcmVmaXgsIC4uLmFyZ3MpO1xuXG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwQ29sbGFwc2VkJykge1xuICAgICAgICAgICAgaW5Hcm91cCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cEVuZCcpIHtcbiAgICAgICAgICAgIGluR3JvdXAgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gICAgICAgIGNvbnN0IGFwaToge1ttZXRob2ROYW1lOiBzdHJpbmddOiBGdW5jdGlvbn0gPSB7fTtcbiAgICAgICAgY29uc3QgbG9nZ2VyTWV0aG9kcyA9IE9iamVjdC5rZXlzKG1ldGhvZFRvQ29sb3JNYXApO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGxvZ2dlck1ldGhvZHMpIHtcbiAgICAgICAgICBjb25zdCBtZXRob2QgPSBrZXkgYXMgTG9nZ2VyTWV0aG9kcztcblxuICAgICAgICAgIGFwaVttZXRob2RdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgICBwcmludChtZXRob2QsIGFyZ3MpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXBpIGFzIHVua25vd247XG4gICAgICB9KSgpXG4pIGFzIENvbnNvbGU7XG5cbmV4cG9ydCB7bG9nZ2VyfTtcbiIsICIvLyBAdHMtaWdub3JlXG50cnl7c2VsZlsnd29ya2JveDpjYWNoZWFibGUtcmVzcG9uc2U6Ny4wLjAnXSYmXygpfWNhdGNoKGUpe30iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuZXhwb3J0IGludGVyZmFjZSBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnMge1xuICBzdGF0dXNlcz86IG51bWJlcltdO1xuICBoZWFkZXJzPzoge1toZWFkZXJOYW1lOiBzdHJpbmddOiBzdHJpbmd9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBzZXQgdXAgcnVsZXMgZGV0ZXJtaW5pbmcgd2hhdFxuICogc3RhdHVzIGNvZGVzIGFuZC9vciBoZWFkZXJzIG5lZWQgdG8gYmUgcHJlc2VudCBpbiBvcmRlciBmb3IgYVxuICogW2BSZXNwb25zZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNwb25zZSlcbiAqIHRvIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZVxuICovXG5jbGFzcyBDYWNoZWFibGVSZXNwb25zZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0YXR1c2VzPzogQ2FjaGVhYmxlUmVzcG9uc2VPcHRpb25zWydzdGF0dXNlcyddO1xuICBwcml2YXRlIHJlYWRvbmx5IF9oZWFkZXJzPzogQ2FjaGVhYmxlUmVzcG9uc2VPcHRpb25zWydoZWFkZXJzJ107XG5cbiAgLyoqXG4gICAqIFRvIGNvbnN0cnVjdCBhIG5ldyBDYWNoZWFibGVSZXNwb25zZSBpbnN0YW5jZSB5b3UgbXVzdCBwcm92aWRlIGF0IGxlYXN0XG4gICAqIG9uZSBvZiB0aGUgYGNvbmZpZ2AgcHJvcGVydGllcy5cbiAgICpcbiAgICogSWYgYm90aCBgc3RhdHVzZXNgIGFuZCBgaGVhZGVyc2AgYXJlIHNwZWNpZmllZCwgdGhlbiBib3RoIGNvbmRpdGlvbnMgbXVzdFxuICAgKiBiZSBtZXQgZm9yIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2NvbmZpZy5zdGF0dXNlc10gT25lIG9yIG1vcmUgc3RhdHVzIGNvZGVzIHRoYXQgYVxuICAgKiBgUmVzcG9uc2VgIGNhbiBoYXZlIGFuZCBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLHN0cmluZz59IFtjb25maWcuaGVhZGVyc10gQSBtYXBwaW5nIG9mIGhlYWRlciBuYW1lc1xuICAgKiBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRoYXQgYSBgUmVzcG9uc2VgIGNhbiBoYXZlIGFuZCBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICogSWYgbXVsdGlwbGUgaGVhZGVycyBhcmUgcHJvdmlkZWQsIG9ubHkgb25lIG5lZWRzIHRvIGJlIHByZXNlbnQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IENhY2hlYWJsZVJlc3BvbnNlT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGNvbmZpZy5zdGF0dXNlcyB8fCBjb25maWcuaGVhZGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignc3RhdHVzZXMtb3ItaGVhZGVycy1yZXF1aXJlZCcsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuc3RhdHVzZXMpIHtcbiAgICAgICAgYXNzZXJ0IS5pc0FycmF5KGNvbmZpZy5zdGF0dXNlcywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5zdGF0dXNlcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmhlYWRlcnMpIHtcbiAgICAgICAgYXNzZXJ0IS5pc1R5cGUoY29uZmlnLmhlYWRlcnMsICdvYmplY3QnLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZWFibGVSZXNwb25zZScsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLmhlYWRlcnMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zdGF0dXNlcyA9IGNvbmZpZy5zdGF0dXNlcztcbiAgICB0aGlzLl9oZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGEgcmVzcG9uc2UgdG8gc2VlIHdoZXRoZXIgaXQncyBjYWNoZWFibGUgb3Igbm90LCBiYXNlZCBvbiB0aGlzXG4gICAqIG9iamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc3BvbnNlIFRoZSByZXNwb25zZSB3aG9zZSBjYWNoZWFiaWxpdHkgaXMgYmVpbmdcbiAgICogY2hlY2tlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBgUmVzcG9uc2VgIGlzIGNhY2hlYWJsZSwgYW5kIGBmYWxzZWBcbiAgICogb3RoZXJ3aXNlLlxuICAgKi9cbiAgaXNSZXNwb25zZUNhY2hlYWJsZShyZXNwb25zZTogUmVzcG9uc2UpOiBib29sZWFuIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlc3BvbnNlLCBSZXNwb25zZSwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UnLFxuICAgICAgICBjbGFzc05hbWU6ICdDYWNoZWFibGVSZXNwb25zZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnaXNSZXNwb25zZUNhY2hlYWJsZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3Jlc3BvbnNlJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBjYWNoZWFibGUgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX3N0YXR1c2VzKSB7XG4gICAgICBjYWNoZWFibGUgPSB0aGlzLl9zdGF0dXNlcy5pbmNsdWRlcyhyZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oZWFkZXJzICYmIGNhY2hlYWJsZSkge1xuICAgICAgY2FjaGVhYmxlID0gT2JqZWN0LmtleXModGhpcy5faGVhZGVycykuc29tZSgoaGVhZGVyTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuaGVhZGVycy5nZXQoaGVhZGVyTmFtZSkgPT09IHRoaXMuX2hlYWRlcnMhW2hlYWRlck5hbWVdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghY2FjaGVhYmxlKSB7XG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICBgVGhlIHJlcXVlc3QgZm9yIGAgK1xuICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlc3BvbnNlLnVybCl9JyByZXR1cm5lZCBhIHJlc3BvbnNlIHRoYXQgZG9lcyBgICtcbiAgICAgICAgICAgIGBub3QgbWVldCB0aGUgY3JpdGVyaWEgZm9yIGJlaW5nIGNhY2hlZC5gLFxuICAgICAgICApO1xuXG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyBjYWNoZWFiaWxpdHkgY3JpdGVyaWEgaGVyZS5gKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhgQ2FjaGVhYmxlIHN0YXR1c2VzOiBgICsgSlNPTi5zdHJpbmdpZnkodGhpcy5fc3RhdHVzZXMpKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgICBgQ2FjaGVhYmxlIGhlYWRlcnM6IGAgKyBKU09OLnN0cmluZ2lmeSh0aGlzLl9oZWFkZXJzLCBudWxsLCAyKSxcbiAgICAgICAgKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG5cbiAgICAgICAgY29uc3QgbG9nRnJpZW5kbHlIZWFkZXJzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICAgICAgICByZXNwb25zZS5oZWFkZXJzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICBsb2dGcmllbmRseUhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgcmVzcG9uc2Ugc3RhdHVzIGFuZCBoZWFkZXJzIGhlcmUuYCk7XG4gICAgICAgIGxvZ2dlci5sb2coYFJlc3BvbnNlIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIGxvZ2dlci5sb2coXG4gICAgICAgICAgYFJlc3BvbnNlIGhlYWRlcnM6IGAgKyBKU09OLnN0cmluZ2lmeShsb2dGcmllbmRseUhlYWRlcnMsIG51bGwsIDIpLFxuICAgICAgICApO1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcblxuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgZnVsbCByZXNwb25zZSBkZXRhaWxzIGhlcmUuYCk7XG4gICAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UpO1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcblxuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVhYmxlO1xuICB9XG59XG5cbmV4cG9ydCB7Q2FjaGVhYmxlUmVzcG9uc2V9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtXb3JrYm94UGx1Z2lufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuaW1wb3J0IHtcbiAgQ2FjaGVhYmxlUmVzcG9uc2UsXG4gIENhY2hlYWJsZVJlc3BvbnNlT3B0aW9ucyxcbn0gZnJvbSAnLi9DYWNoZWFibGVSZXNwb25zZS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEEgY2xhc3MgaW1wbGVtZW50aW5nIHRoZSBgY2FjaGVXaWxsVXBkYXRlYCBsaWZlY3ljbGUgY2FsbGJhY2suIFRoaXMgbWFrZXMgaXRcbiAqIGVhc2llciB0byBhZGQgaW4gY2FjaGVhYmlsaXR5IGNoZWNrcyB0byByZXF1ZXN0cyBtYWRlIHZpYSBXb3JrYm94J3MgYnVpbHQtaW5cbiAqIHN0cmF0ZWdpZXMuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlXG4gKi9cbmNsYXNzIENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIGltcGxlbWVudHMgV29ya2JveFBsdWdpbiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NhY2hlYWJsZVJlc3BvbnNlOiBDYWNoZWFibGVSZXNwb25zZTtcblxuICAvKipcbiAgICogVG8gY29uc3RydWN0IGEgbmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIGluc3RhbmNlIHlvdSBtdXN0IHByb3ZpZGUgYXRcbiAgICogbGVhc3Qgb25lIG9mIHRoZSBgY29uZmlnYCBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBJZiBib3RoIGBzdGF0dXNlc2AgYW5kIGBoZWFkZXJzYCBhcmUgc3BlY2lmaWVkLCB0aGVuIGJvdGggY29uZGl0aW9ucyBtdXN0XG4gICAqIGJlIG1ldCBmb3IgdGhlIGBSZXNwb25zZWAgdG8gYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbY29uZmlnLnN0YXR1c2VzXSBPbmUgb3IgbW9yZSBzdGF0dXMgY29kZXMgdGhhdCBhXG4gICAqIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsc3RyaW5nPn0gW2NvbmZpZy5oZWFkZXJzXSBBIG1hcHBpbmcgb2YgaGVhZGVyIG5hbWVzXG4gICAqIGFuZCBleHBlY3RlZCB2YWx1ZXMgdGhhdCBhIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgKiBJZiBtdWx0aXBsZSBoZWFkZXJzIGFyZSBwcm92aWRlZCwgb25seSBvbmUgbmVlZHMgdG8gYmUgcHJlc2VudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ2FjaGVhYmxlUmVzcG9uc2VPcHRpb25zKSB7XG4gICAgdGhpcy5fY2FjaGVhYmxlUmVzcG9uc2UgPSBuZXcgQ2FjaGVhYmxlUmVzcG9uc2UoY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLnJlc3BvbnNlXG4gICAqIEByZXR1cm4ge1Jlc3BvbnNlfG51bGx9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWNoZVdpbGxVcGRhdGU6IFdvcmtib3hQbHVnaW5bJ2NhY2hlV2lsbFVwZGF0ZSddID0gYXN5bmMgKHtyZXNwb25zZX0pID0+IHtcbiAgICBpZiAodGhpcy5fY2FjaGVhYmxlUmVzcG9uc2UuaXNSZXNwb25zZUNhY2hlYWJsZShyZXNwb25zZSkpIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG5cbmV4cG9ydCB7Q2FjaGVhYmxlUmVzcG9uc2VQbHVnaW59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgcHJldmVudHMgYSBwcm9taXNlIGZyb20gYmVpbmcgZmxhZ2dlZCBhcyB1bnVzZWQuXG4gKlxuICogQHByaXZhdGVcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBkb250V2FpdEZvcihwcm9taXNlOiBQcm9taXNlPGFueT4pOiB2b2lkIHtcbiAgLy8gRWZmZWN0aXZlIG5vLW9wLlxuICB2b2lkIHByb21pc2UudGhlbigoKSA9PiB7fSk7XG59XG4iLCAiZXhwb3J0IHR5cGUgQ29uc3RydWN0b3IgPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XG5leHBvcnQgdHlwZSBGdW5jID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZU9mQW55ID0gKFxuICBvYmplY3Q6IGFueSxcbiAgY29uc3RydWN0b3JzOiBDb25zdHJ1Y3RvcltdLFxuKTogYm9vbGVhbiA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG4iLCAiaW1wb3J0IHtcbiAgSURCUEN1cnNvcixcbiAgSURCUEN1cnNvcldpdGhWYWx1ZSxcbiAgSURCUERhdGFiYXNlLFxuICBJREJQSW5kZXgsXG4gIElEQlBPYmplY3RTdG9yZSxcbiAgSURCUFRyYW5zYWN0aW9uLFxufSBmcm9tICcuL2VudHJ5LmpzJztcbmltcG9ydCB7IENvbnN0cnVjdG9yLCBGdW5jLCBpbnN0YW5jZU9mQW55IH0gZnJvbSAnLi91dGlsLmpzJztcblxubGV0IGlkYlByb3h5YWJsZVR5cGVzOiBDb25zdHJ1Y3RvcltdO1xubGV0IGN1cnNvckFkdmFuY2VNZXRob2RzOiBGdW5jW107XG5cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKTogQ29uc3RydWN0b3JbXSB7XG4gIHJldHVybiAoXG4gICAgaWRiUHJveHlhYmxlVHlwZXMgfHxcbiAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICBJREJEYXRhYmFzZSxcbiAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgSURCSW5kZXgsXG4gICAgICBJREJDdXJzb3IsXG4gICAgICBJREJUcmFuc2FjdGlvbixcbiAgICBdKVxuICApO1xufVxuXG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCk6IEZ1bmNbXSB7XG4gIHJldHVybiAoXG4gICAgY3Vyc29yQWR2YW5jZU1ldGhvZHMgfHxcbiAgICAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgPSBbXG4gICAgICBJREJDdXJzb3IucHJvdG90eXBlLmFkdmFuY2UsXG4gICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlLFxuICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZVByaW1hcnlLZXksXG4gICAgXSlcbiAgKTtcbn1cblxuY29uc3QgY3Vyc29yUmVxdWVzdE1hcDogV2Vha01hcDxJREJQQ3Vyc29yLCBJREJSZXF1ZXN0PElEQkN1cnNvcj4+ID1cbiAgbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uRG9uZU1hcDogV2Vha01hcDxJREJUcmFuc2FjdGlvbiwgUHJvbWlzZTx2b2lkPj4gPVxuICBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwOiBXZWFrTWFwPElEQlRyYW5zYWN0aW9uLCBzdHJpbmdbXT4gPVxuICBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3Q8VD4ocmVxdWVzdDogSURCUmVxdWVzdDxUPik6IFByb21pc2U8VD4ge1xuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH07XG4gICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCBhcyBhbnkpIGFzIGFueSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgfSk7XG5cbiAgcHJvbWlzZVxuICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgLy8gU2luY2UgY3Vyc29yaW5nIHJldXNlcyB0aGUgSURCUmVxdWVzdCAoKnNpZ2gqKSwgd2UgY2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbFxuICAgICAgLy8gKHNlZSB3cmFwRnVuY3Rpb24pLlxuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCQ3Vyc29yKSB7XG4gICAgICAgIGN1cnNvclJlcXVlc3RNYXAuc2V0KFxuICAgICAgICAgIHZhbHVlIGFzIHVua25vd24gYXMgSURCUEN1cnNvcixcbiAgICAgICAgICByZXF1ZXN0IGFzIHVua25vd24gYXMgSURCUmVxdWVzdDxJREJDdXJzb3I+LFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgLy8gQ2F0Y2hpbmcgdG8gYXZvaWQgXCJVbmNhdWdodCBQcm9taXNlIGV4Y2VwdGlvbnNcIlxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHt9KTtcblxuICAvLyBUaGlzIG1hcHBpbmcgZXhpc3RzIGluIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSBidXQgZG9lc24ndCBkb2Vzbid0IGV4aXN0IGluIHRyYW5zZm9ybUNhY2hlLiBUaGlzXG4gIC8vIGlzIGJlY2F1c2Ugd2UgY3JlYXRlIG1hbnkgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0LlxuICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb21pc2UsIHJlcXVlc3QpO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4OiBJREJUcmFuc2FjdGlvbik6IHZvaWQge1xuICAvLyBFYXJseSBiYWlsIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCBhIGRvbmUgcHJvbWlzZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgaWYgKHRyYW5zYWN0aW9uRG9uZU1hcC5oYXModHgpKSByZXR1cm47XG5cbiAgY29uc3QgZG9uZSA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICB9O1xuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KHR4LmVycm9yIHx8IG5ldyBET01FeGNlcHRpb24oJ0Fib3J0RXJyb3InLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgfSk7XG5cbiAgLy8gQ2FjaGUgaXQgZm9yIGxhdGVyIHJldHJpZXZhbC5cbiAgdHJhbnNhY3Rpb25Eb25lTWFwLnNldCh0eCwgZG9uZSk7XG59XG5cbmxldCBpZGJQcm94eVRyYXBzOiBQcm94eUhhbmRsZXI8YW55PiA9IHtcbiAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIHtcbiAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyYW5zYWN0aW9uLmRvbmUuXG4gICAgICBpZiAocHJvcCA9PT0gJ2RvbmUnKSByZXR1cm4gdHJhbnNhY3Rpb25Eb25lTWFwLmdldCh0YXJnZXQpO1xuICAgICAgLy8gUG9seWZpbGwgZm9yIG9iamVjdFN0b3JlTmFtZXMgYmVjYXVzZSBvZiBFZGdlLlxuICAgICAgaWYgKHByb3AgPT09ICdvYmplY3RTdG9yZU5hbWVzJykge1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lm9iamVjdFN0b3JlTmFtZXMgfHwgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgfVxuICAgICAgLy8gTWFrZSB0eC5zdG9yZSByZXR1cm4gdGhlIG9ubHkgc3RvcmUgaW4gdGhlIHRyYW5zYWN0aW9uLCBvciB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG1hbnkuXG4gICAgICBpZiAocHJvcCA9PT0gJ3N0b3JlJykge1xuICAgICAgICByZXR1cm4gcmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1sxXVxuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRWxzZSB0cmFuc2Zvcm0gd2hhdGV2ZXIgd2UgZ2V0IGJhY2suXG4gICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgfSxcbiAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgIGlmIChcbiAgICAgIHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0O1xuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUcmFwcyhcbiAgY2FsbGJhY2s6IChjdXJyZW50VHJhcHM6IFByb3h5SGFuZGxlcjxhbnk+KSA9PiBQcm94eUhhbmRsZXI8YW55Pixcbik6IHZvaWQge1xuICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5cbmZ1bmN0aW9uIHdyYXBGdW5jdGlvbjxUIGV4dGVuZHMgRnVuYz4oZnVuYzogVCk6IEZ1bmN0aW9uIHtcbiAgLy8gRHVlIHRvIGV4cGVjdGVkIG9iamVjdCBlcXVhbGl0eSAod2hpY2ggaXMgZW5mb3JjZWQgYnkgdGhlIGNhY2hpbmcgaW4gYHdyYXBgKSwgd2VcbiAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuXG4gIC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG9iamVjdFN0b3JlTmFtZXMgKGJvb28pLCBzbyB3ZSBwb2x5ZmlsbCBpdCBoZXJlLlxuICBpZiAoXG4gICAgZnVuYyA9PT0gSURCRGF0YWJhc2UucHJvdG90eXBlLnRyYW5zYWN0aW9uICYmXG4gICAgISgnb2JqZWN0U3RvcmVOYW1lcycgaW4gSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlKVxuICApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKFxuICAgICAgdGhpczogSURCUERhdGFiYXNlLFxuICAgICAgc3RvcmVOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgICAuLi5hcmdzOiBhbnlbXVxuICAgICkge1xuICAgICAgY29uc3QgdHggPSBmdW5jLmNhbGwodW53cmFwKHRoaXMpLCBzdG9yZU5hbWVzLCAuLi5hcmdzKTtcbiAgICAgIHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcC5zZXQoXG4gICAgICAgIHR4LFxuICAgICAgICAoc3RvcmVOYW1lcyBhcyBhbnkpLnNvcnQgPyAoc3RvcmVOYW1lcyBhcyBhbnlbXSkuc29ydCgpIDogW3N0b3JlTmFtZXNdLFxuICAgICAgKTtcbiAgICAgIHJldHVybiB3cmFwKHR4KTtcbiAgICB9O1xuICB9XG5cbiAgLy8gQ3Vyc29yIG1ldGhvZHMgYXJlIHNwZWNpYWwsIGFzIHRoZSBiZWhhdmlvdXIgaXMgYSBsaXR0bGUgbW9yZSBkaWZmZXJlbnQgdG8gc3RhbmRhcmQgSURCLiBJblxuICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAvLyBjdXJzb3IuIEl0J3Mga2luZGEgbGlrZSBhIHByb21pc2UgdGhhdCBjYW4gcmVzb2x2ZSB3aXRoIG1hbnkgdmFsdWVzLiBUaGF0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAvLyB3aXRoIHJlYWwgcHJvbWlzZXMsIHNvIGVhY2ggYWR2YW5jZSBtZXRob2RzIHJldHVybnMgYSBuZXcgcHJvbWlzZSBmb3IgdGhlIGN1cnNvciBvYmplY3QsIG9yXG4gIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgaWYgKGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkuaW5jbHVkZXMoZnVuYykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXM6IElEQlBDdXJzb3IsIC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pIHtcbiAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICByZXR1cm4gd3JhcChjdXJzb3JSZXF1ZXN0TWFwLmdldCh0aGlzKSEpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHRoaXM6IGFueSwgLi4uYXJnczogUGFyYW1ldGVyczxUPikge1xuICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHJldHVybiB3cmFwRnVuY3Rpb24odmFsdWUpO1xuXG4gIC8vIFRoaXMgZG9lc24ndCByZXR1cm4sIGl0IGp1c3QgY3JlYXRlcyBhICdkb25lJyBwcm9taXNlIGZvciB0aGUgdHJhbnNhY3Rpb24sXG4gIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuXG4gIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcblxuICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogRW5oYW5jZSBhbiBJREIgb2JqZWN0IHdpdGggaGVscGVycy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHRoaW5nIHRvIGVuaGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHZhbHVlOiBJREJEYXRhYmFzZSk6IElEQlBEYXRhYmFzZTtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHZhbHVlOiBJREJJbmRleCk6IElEQlBJbmRleDtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHZhbHVlOiBJREJPYmplY3RTdG9yZSk6IElEQlBPYmplY3RTdG9yZTtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHZhbHVlOiBJREJUcmFuc2FjdGlvbik6IElEQlBUcmFuc2FjdGlvbjtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKFxuICB2YWx1ZTogSURCT3BlbkRCUmVxdWVzdCxcbik6IFByb21pc2U8SURCUERhdGFiYXNlIHwgdW5kZWZpbmVkPjtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwPFQ+KHZhbHVlOiBJREJSZXF1ZXN0PFQ+KTogUHJvbWlzZTxUPjtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHZhbHVlOiBhbnkpOiBhbnkge1xuICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJSZXF1ZXN0KSByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdCh2YWx1ZSk7XG5cbiAgLy8gSWYgd2UndmUgYWxyZWFkeSB0cmFuc2Zvcm1lZCB0aGlzIHZhbHVlIGJlZm9yZSwgcmV1c2UgdGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSkgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gIGNvbnN0IG5ld1ZhbHVlID0gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSk7XG5cbiAgLy8gTm90IGFsbCB0eXBlcyBhcmUgdHJhbnNmb3JtZWQuXG4gIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChuZXdWYWx1ZSwgdmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuXG4vKipcbiAqIFJldmVydCBhbiBlbmhhbmNlZCBJREIgb2JqZWN0IHRvIGEgcGxhaW4gb2xkIG1pc2VyYWJsZSBJREIgb25lLlxuICpcbiAqIFdpbGwgYWxzbyByZXZlcnQgYSBwcm9taXNlIGJhY2sgdG8gYW4gSURCUmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIGVuaGFuY2VkIG9iamVjdCB0byByZXZlcnQuXG4gKi9cbmludGVyZmFjZSBVbndyYXAge1xuICAodmFsdWU6IElEQlBDdXJzb3JXaXRoVmFsdWU8YW55LCBhbnksIGFueSwgYW55LCBhbnk+KTogSURCQ3Vyc29yV2l0aFZhbHVlO1xuICAodmFsdWU6IElEQlBDdXJzb3I8YW55LCBhbnksIGFueSwgYW55LCBhbnk+KTogSURCQ3Vyc29yO1xuICAodmFsdWU6IElEQlBEYXRhYmFzZSk6IElEQkRhdGFiYXNlO1xuICAodmFsdWU6IElEQlBJbmRleDxhbnksIGFueSwgYW55LCBhbnksIGFueT4pOiBJREJJbmRleDtcbiAgKHZhbHVlOiBJREJQT2JqZWN0U3RvcmU8YW55LCBhbnksIGFueSwgYW55Pik6IElEQk9iamVjdFN0b3JlO1xuICAodmFsdWU6IElEQlBUcmFuc2FjdGlvbjxhbnksIGFueSwgYW55Pik6IElEQlRyYW5zYWN0aW9uO1xuICA8VCBleHRlbmRzIGFueT4odmFsdWU6IFByb21pc2U8SURCUERhdGFiYXNlPFQ+Pik6IElEQk9wZW5EQlJlcXVlc3Q7XG4gICh2YWx1ZTogUHJvbWlzZTxJREJQRGF0YWJhc2U+KTogSURCT3BlbkRCUmVxdWVzdDtcbiAgPFQ+KHZhbHVlOiBQcm9taXNlPFQ+KTogSURCUmVxdWVzdDxUPjtcbn1cbmV4cG9ydCBjb25zdCB1bndyYXA6IFVud3JhcCA9ICh2YWx1ZTogYW55KTogYW55ID0+XG4gIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuIiwgImltcG9ydCB7IHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuZXhwb3J0IGludGVyZmFjZSBPcGVuREJDYWxsYmFja3M8REJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bj4ge1xuICAvKipcbiAgICogQ2FsbGVkIGlmIHRoaXMgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UgaGFzIG5ldmVyIGJlZW4gb3BlbmVkIGJlZm9yZS4gVXNlIGl0IHRvIHNwZWNpZnkgdGhlXG4gICAqIHNjaGVtYSBmb3IgdGhlIGRhdGFiYXNlLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YWJhc2UgQSBkYXRhYmFzZSBpbnN0YW5jZSB0aGF0IHlvdSBjYW4gdXNlIHRvIGFkZC9yZW1vdmUgc3RvcmVzIGFuZCBpbmRleGVzLlxuICAgKiBAcGFyYW0gb2xkVmVyc2lvbiBMYXN0IHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIG9wZW5lZCBieSB0aGUgdXNlci5cbiAgICogQHBhcmFtIG5ld1ZlcnNpb24gV2hhdGV2ZXIgbmV3IHZlcnNpb24geW91IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gVGhlIHRyYW5zYWN0aW9uIGZvciB0aGlzIHVwZ3JhZGUuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSBuZWVkIHRvIGdldCBkYXRhIGZyb20gb3RoZXIgc3RvcmVzIGFzIHBhcnQgb2YgYSBtaWdyYXRpb24uXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IGZvciB0aGUgYXNzb2NpYXRlZCAndXBncmFkZW5lZWRlZCcgZXZlbnQuXG4gICAqL1xuICB1cGdyYWRlPyhcbiAgICBkYXRhYmFzZTogSURCUERhdGFiYXNlPERCVHlwZXM+LFxuICAgIG9sZFZlcnNpb246IG51bWJlcixcbiAgICBuZXdWZXJzaW9uOiBudW1iZXIgfCBudWxsLFxuICAgIHRyYW5zYWN0aW9uOiBJREJQVHJhbnNhY3Rpb248XG4gICAgICBEQlR5cGVzLFxuICAgICAgU3RvcmVOYW1lczxEQlR5cGVzPltdLFxuICAgICAgJ3ZlcnNpb25jaGFuZ2UnXG4gICAgPixcbiAgICBldmVudDogSURCVmVyc2lvbkNoYW5nZUV2ZW50LFxuICApOiB2b2lkO1xuICAvKipcbiAgICogQ2FsbGVkIGlmIHRoZXJlIGFyZSBvbGRlciB2ZXJzaW9ucyBvZiB0aGUgZGF0YWJhc2Ugb3BlbiBvbiB0aGUgb3JpZ2luLCBzbyB0aGlzIHZlcnNpb24gY2Fubm90XG4gICAqIG9wZW4uXG4gICAqXG4gICAqIEBwYXJhbSBjdXJyZW50VmVyc2lvbiBWZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSB0aGF0J3MgYmxvY2tpbmcgdGhpcyBvbmUuXG4gICAqIEBwYXJhbSBibG9ja2VkVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UgYmVpbmcgYmxvY2tlZCAod2hhdGV2ZXIgdmVyc2lvbiB5b3UgcHJvdmlkZWQgdG8gYG9wZW5EQmApLlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IG9iamVjdCBmb3IgdGhlIGFzc29jaWF0ZWQgYGJsb2NrZWRgIGV2ZW50LlxuICAgKi9cbiAgYmxvY2tlZD8oXG4gICAgY3VycmVudFZlcnNpb246IG51bWJlcixcbiAgICBibG9ja2VkVmVyc2lvbjogbnVtYmVyIHwgbnVsbCxcbiAgICBldmVudDogSURCVmVyc2lvbkNoYW5nZUV2ZW50LFxuICApOiB2b2lkO1xuICAvKipcbiAgICogQ2FsbGVkIGlmIHRoaXMgY29ubmVjdGlvbiBpcyBibG9ja2luZyBhIGZ1dHVyZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSBmcm9tIG9wZW5pbmcuXG4gICAqXG4gICAqIEBwYXJhbSBjdXJyZW50VmVyc2lvbiBWZXJzaW9uIG9mIHRoZSBvcGVuIGRhdGFiYXNlICh3aGF0ZXZlciB2ZXJzaW9uIHlvdSBwcm92aWRlZCB0byBgb3BlbkRCYCkuXG4gICAqIEBwYXJhbSBibG9ja2VkVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UgdGhhdCdzIGJlaW5nIGJsb2NrZWQuXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IGZvciB0aGUgYXNzb2NpYXRlZCBgdmVyc2lvbmNoYW5nZWAgZXZlbnQuXG4gICAqL1xuICBibG9ja2luZz8oXG4gICAgY3VycmVudFZlcnNpb246IG51bWJlcixcbiAgICBibG9ja2VkVmVyc2lvbjogbnVtYmVyIHwgbnVsbCxcbiAgICBldmVudDogSURCVmVyc2lvbkNoYW5nZUV2ZW50LFxuICApOiB2b2lkO1xuICAvKipcbiAgICogQ2FsbGVkIGlmIHRoZSBicm93c2VyIGFibm9ybWFsbHkgdGVybWluYXRlcyB0aGUgY29ubmVjdGlvbi5cbiAgICogVGhpcyBpcyBub3QgY2FsbGVkIHdoZW4gYGRiLmNsb3NlKClgIGlzIGNhbGxlZC5cbiAgICovXG4gIHRlcm1pbmF0ZWQ/KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3BlbkRCPERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duPihcbiAgbmFtZTogc3RyaW5nLFxuICB2ZXJzaW9uPzogbnVtYmVyLFxuICB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH06IE9wZW5EQkNhbGxiYWNrczxEQlR5cGVzPiA9IHt9LFxuKTogUHJvbWlzZTxJREJQRGF0YWJhc2U8REJUeXBlcz4+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKG5hbWUsIHZlcnNpb24pO1xuICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCkgYXMgUHJvbWlzZTxJREJQRGF0YWJhc2U8REJUeXBlcz4+O1xuXG4gIGlmICh1cGdyYWRlKSB7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICB1cGdyYWRlKFxuICAgICAgICB3cmFwKHJlcXVlc3QucmVzdWx0KSBhcyBJREJQRGF0YWJhc2U8REJUeXBlcz4sXG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sXG4gICAgICAgIGV2ZW50Lm5ld1ZlcnNpb24sXG4gICAgICAgIHdyYXAocmVxdWVzdC50cmFuc2FjdGlvbiEpIGFzIHVua25vd24gYXMgSURCUFRyYW5zYWN0aW9uPFxuICAgICAgICAgIERCVHlwZXMsXG4gICAgICAgICAgU3RvcmVOYW1lczxEQlR5cGVzPltdLFxuICAgICAgICAgICd2ZXJzaW9uY2hhbmdlJ1xuICAgICAgICA+LFxuICAgICAgICBldmVudCxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoYmxvY2tlZCkge1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsIChldmVudCkgPT5cbiAgICAgIGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgKGV2ZW50IGFzIElEQlZlcnNpb25DaGFuZ2VFdmVudCkub2xkVmVyc2lvbixcbiAgICAgICAgKGV2ZW50IGFzIElEQlZlcnNpb25DaGFuZ2VFdmVudCkubmV3VmVyc2lvbixcbiAgICAgICAgZXZlbnQgYXMgSURCVmVyc2lvbkNoYW5nZUV2ZW50LFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgb3BlblByb21pc2VcbiAgICAudGhlbigoZGIpID0+IHtcbiAgICAgIGlmICh0ZXJtaW5hdGVkKSBkYi5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHRlcm1pbmF0ZWQoKSk7XG4gICAgICBpZiAoYmxvY2tpbmcpIHtcbiAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcigndmVyc2lvbmNoYW5nZScsIChldmVudCkgPT5cbiAgICAgICAgICBibG9ja2luZyhldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge30pO1xuXG4gIHJldHVybiBvcGVuUHJvbWlzZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxldGVEQkNhbGxiYWNrcyB7XG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgdGhlcmUgYXJlIGNvbm5lY3Rpb25zIHRvIHRoaXMgZGF0YWJhc2Ugb3Blbiwgc28gaXQgY2Fubm90IGJlIGRlbGV0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBjdXJyZW50VmVyc2lvbiBWZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSB0aGF0J3MgYmxvY2tpbmcgdGhlIGRlbGV0ZSBvcGVyYXRpb24uXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IGZvciB0aGUgYXNzb2NpYXRlZCBgYmxvY2tlZGAgZXZlbnQuXG4gICAqL1xuICBibG9ja2VkPyhjdXJyZW50VmVyc2lvbjogbnVtYmVyLCBldmVudDogSURCVmVyc2lvbkNoYW5nZUV2ZW50KTogdm9pZDtcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZURCKFxuICBuYW1lOiBzdHJpbmcsXG4gIHsgYmxvY2tlZCB9OiBEZWxldGVEQkNhbGxiYWNrcyA9IHt9LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG5cbiAgaWYgKGJsb2NrZWQpIHtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+XG4gICAgICBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIChldmVudCBhcyBJREJWZXJzaW9uQ2hhbmdlRXZlbnQpLm9sZFZlcnNpb24sXG4gICAgICAgIGV2ZW50IGFzIElEQlZlcnNpb25DaGFuZ2VFdmVudCxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuZXhwb3J0IHsgdW53cmFwLCB3cmFwIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5cbi8vID09PSBUaGUgcmVzdCBvZiB0aGlzIGZpbGUgaXMgdHlwZSBkZWZzID09PVxudHlwZSBLZXlUb0tleU5vSW5kZXg8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdOiBzdHJpbmcgZXh0ZW5kcyBLID8gbmV2ZXIgOiBudW1iZXIgZXh0ZW5kcyBLID8gbmV2ZXIgOiBLO1xufTtcbnR5cGUgVmFsdWVzT2Y8VD4gPSBUIGV4dGVuZHMgeyBbSyBpbiBrZXlvZiBUXTogaW5mZXIgVSB9ID8gVSA6IG5ldmVyO1xudHlwZSBLbm93bktleXM8VD4gPSBWYWx1ZXNPZjxLZXlUb0tleU5vSW5kZXg8VD4+O1xuXG50eXBlIE9taXQ8VCwgSz4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIERCU2NoZW1hIHtcbiAgW3M6IHN0cmluZ106IERCU2NoZW1hVmFsdWU7XG59XG5cbmludGVyZmFjZSBJbmRleEtleXMge1xuICBbczogc3RyaW5nXTogSURCVmFsaWRLZXk7XG59XG5cbmludGVyZmFjZSBEQlNjaGVtYVZhbHVlIHtcbiAga2V5OiBJREJWYWxpZEtleTtcbiAgdmFsdWU6IGFueTtcbiAgaW5kZXhlcz86IEluZGV4S2V5cztcbn1cblxuLyoqXG4gKiBFeHRyYWN0IGtub3duIG9iamVjdCBzdG9yZSBuYW1lcyBmcm9tIHRoZSBEQiBzY2hlbWEgdHlwZS5cbiAqXG4gKiBAdGVtcGxhdGUgREJUeXBlcyBEQiBzY2hlbWEgdHlwZSwgb3IgdW5rbm93biBpZiB0aGUgREIgaXNuJ3QgdHlwZWQuXG4gKi9cbmV4cG9ydCB0eXBlIFN0b3JlTmFtZXM8REJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bj4gPVxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgPyBLbm93bktleXM8REJUeXBlcz4gOiBzdHJpbmc7XG5cbi8qKlxuICogRXh0cmFjdCBkYXRhYmFzZSB2YWx1ZSB0eXBlcyBmcm9tIHRoZSBEQiBzY2hlbWEgdHlwZS5cbiAqXG4gKiBAdGVtcGxhdGUgREJUeXBlcyBEQiBzY2hlbWEgdHlwZSwgb3IgdW5rbm93biBpZiB0aGUgREIgaXNuJ3QgdHlwZWQuXG4gKiBAdGVtcGxhdGUgU3RvcmVOYW1lIE5hbWVzIG9mIHRoZSBvYmplY3Qgc3RvcmVzIHRvIGdldCB0aGUgdHlwZXMgb2YuXG4gKi9cbmV4cG9ydCB0eXBlIFN0b3JlVmFsdWU8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4+ID0gREJUeXBlcyBleHRlbmRzIERCU2NoZW1hID8gREJUeXBlc1tTdG9yZU5hbWVdWyd2YWx1ZSddIDogYW55O1xuXG4vKipcbiAqIEV4dHJhY3QgZGF0YWJhc2Uga2V5IHR5cGVzIGZyb20gdGhlIERCIHNjaGVtYSB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBEQlR5cGVzIERCIHNjaGVtYSB0eXBlLCBvciB1bmtub3duIGlmIHRoZSBEQiBpc24ndCB0eXBlZC5cbiAqIEB0ZW1wbGF0ZSBTdG9yZU5hbWUgTmFtZXMgb2YgdGhlIG9iamVjdCBzdG9yZXMgdG8gZ2V0IHRoZSB0eXBlcyBvZi5cbiAqL1xuZXhwb3J0IHR5cGUgU3RvcmVLZXk8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4+ID0gREJUeXBlcyBleHRlbmRzIERCU2NoZW1hID8gREJUeXBlc1tTdG9yZU5hbWVdWydrZXknXSA6IElEQlZhbGlkS2V5O1xuXG4vKipcbiAqIEV4dHJhY3QgdGhlIG5hbWVzIG9mIGluZGV4ZXMgaW4gY2VydGFpbiBvYmplY3Qgc3RvcmVzIGZyb20gdGhlIERCIHNjaGVtYSB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBEQlR5cGVzIERCIHNjaGVtYSB0eXBlLCBvciB1bmtub3duIGlmIHRoZSBEQiBpc24ndCB0eXBlZC5cbiAqIEB0ZW1wbGF0ZSBTdG9yZU5hbWUgTmFtZXMgb2YgdGhlIG9iamVjdCBzdG9yZXMgdG8gZ2V0IHRoZSB0eXBlcyBvZi5cbiAqL1xuZXhwb3J0IHR5cGUgSW5kZXhOYW1lczxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbj4gPSBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgPyBrZXlvZiBEQlR5cGVzW1N0b3JlTmFtZV1bJ2luZGV4ZXMnXSA6IHN0cmluZztcblxuLyoqXG4gKiBFeHRyYWN0IHRoZSB0eXBlcyBvZiBpbmRleGVzIGluIGNlcnRhaW4gb2JqZWN0IHN0b3JlcyBmcm9tIHRoZSBEQiBzY2hlbWEgdHlwZS5cbiAqXG4gKiBAdGVtcGxhdGUgREJUeXBlcyBEQiBzY2hlbWEgdHlwZSwgb3IgdW5rbm93biBpZiB0aGUgREIgaXNuJ3QgdHlwZWQuXG4gKiBAdGVtcGxhdGUgU3RvcmVOYW1lIE5hbWVzIG9mIHRoZSBvYmplY3Qgc3RvcmVzIHRvIGdldCB0aGUgdHlwZXMgb2YuXG4gKiBAdGVtcGxhdGUgSW5kZXhOYW1lIE5hbWVzIG9mIHRoZSBpbmRleGVzIHRvIGdldCB0aGUgdHlwZXMgb2YuXG4gKi9cbmV4cG9ydCB0eXBlIEluZGV4S2V5PFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duLFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4sXG4+ID0gREJUeXBlcyBleHRlbmRzIERCU2NoZW1hXG4gID8gSW5kZXhOYW1lIGV4dGVuZHMga2V5b2YgREJUeXBlc1tTdG9yZU5hbWVdWydpbmRleGVzJ11cbiAgICA/IERCVHlwZXNbU3RvcmVOYW1lXVsnaW5kZXhlcyddW0luZGV4TmFtZV1cbiAgICA6IElEQlZhbGlkS2V5XG4gIDogSURCVmFsaWRLZXk7XG5cbnR5cGUgQ3Vyc29yU291cmNlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+ID0gSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+XG4gID8gSURCUEluZGV4PERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT5cbiAgOiBJREJQT2JqZWN0U3RvcmU8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgTW9kZT47XG5cbnR5cGUgQ3Vyc29yS2V5PFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duLFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duLFxuPiA9IEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPlxuICA/IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPlxuICA6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT47XG5cbnR5cGUgSURCUERhdGFiYXNlRXh0ZW5kcyA9IE9taXQ8XG4gIElEQkRhdGFiYXNlLFxuICAnY3JlYXRlT2JqZWN0U3RvcmUnIHwgJ2RlbGV0ZU9iamVjdFN0b3JlJyB8ICd0cmFuc2FjdGlvbicgfCAnb2JqZWN0U3RvcmVOYW1lcydcbj47XG5cbi8qKlxuICogQSB2YXJpYXRpb24gb2YgRE9NU3RyaW5nTGlzdCB3aXRoIHByZWNpc2Ugc3RyaW5nIHR5cGVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHlwZWRET01TdHJpbmdMaXN0PFQgZXh0ZW5kcyBzdHJpbmc+IGV4dGVuZHMgRE9NU3RyaW5nTGlzdCB7XG4gIGNvbnRhaW5zKHN0cmluZzogVCk6IGJvb2xlYW47XG4gIGl0ZW0oaW5kZXg6IG51bWJlcik6IFQgfCBudWxsO1xuICBbaW5kZXg6IG51bWJlcl06IFQ7XG4gIFtTeW1ib2wuaXRlcmF0b3JdKCk6IEl0ZXJhYmxlSXRlcmF0b3I8VD47XG59XG5cbmludGVyZmFjZSBJREJUcmFuc2FjdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGR1cmFiaWxpdHkgb2YgdGhlIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBUaGUgZGVmYXVsdCBpcyBcImRlZmF1bHRcIi4gVXNpbmcgXCJyZWxheGVkXCIgcHJvdmlkZXMgYmV0dGVyIHBlcmZvcm1hbmNlLCBidXQgd2l0aCBmZXdlclxuICAgKiBndWFyYW50ZWVzLiBXZWIgYXBwbGljYXRpb25zIGFyZSBlbmNvdXJhZ2VkIHRvIHVzZSBcInJlbGF4ZWRcIiBmb3IgZXBoZW1lcmFsIGRhdGEgc3VjaCBhcyBjYWNoZXNcbiAgICogb3IgcXVpY2tseSBjaGFuZ2luZyByZWNvcmRzLCBhbmQgXCJzdHJpY3RcIiBpbiBjYXNlcyB3aGVyZSByZWR1Y2luZyB0aGUgcmlzayBvZiBkYXRhIGxvc3NcbiAgICogb3V0d2VpZ2hzIHRoZSBpbXBhY3QgdG8gcGVyZm9ybWFuY2UgYW5kIHBvd2VyLlxuICAgKi9cbiAgZHVyYWJpbGl0eT86ICdkZWZhdWx0JyB8ICdzdHJpY3QnIHwgJ3JlbGF4ZWQnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBEYXRhYmFzZTxEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bj5cbiAgZXh0ZW5kcyBJREJQRGF0YWJhc2VFeHRlbmRzIHtcbiAgLyoqXG4gICAqIFRoZSBuYW1lcyBvZiBzdG9yZXMgaW4gdGhlIGRhdGFiYXNlLlxuICAgKi9cbiAgcmVhZG9ubHkgb2JqZWN0U3RvcmVOYW1lczogVHlwZWRET01TdHJpbmdMaXN0PFN0b3JlTmFtZXM8REJUeXBlcz4+O1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3Qgc3RvcmUuXG4gICAqXG4gICAqIFRocm93cyBhIFwiSW52YWxpZFN0YXRlRXJyb3JcIiBET01FeGNlcHRpb24gaWYgbm90IGNhbGxlZCB3aXRoaW4gYW4gdXBncmFkZSB0cmFuc2FjdGlvbi5cbiAgICovXG4gIGNyZWF0ZU9iamVjdFN0b3JlPE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBuYW1lOiBOYW1lLFxuICAgIG9wdGlvbmFsUGFyYW1ldGVycz86IElEQk9iamVjdFN0b3JlUGFyYW1ldGVycyxcbiAgKTogSURCUE9iamVjdFN0b3JlPFxuICAgIERCVHlwZXMsXG4gICAgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+LFxuICAgIE5hbWUsXG4gICAgJ3ZlcnNpb25jaGFuZ2UnXG4gID47XG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSBvYmplY3Qgc3RvcmUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICpcbiAgICogVGhyb3dzIGEgXCJJbnZhbGlkU3RhdGVFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiBub3QgY2FsbGVkIHdpdGhpbiBhbiB1cGdyYWRlIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgZGVsZXRlT2JqZWN0U3RvcmUobmFtZTogU3RvcmVOYW1lczxEQlR5cGVzPik6IHZvaWQ7XG4gIC8qKlxuICAgKiBTdGFydCBhIG5ldyB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZXMgVGhlIG9iamVjdCBzdG9yZShzKSB0aGlzIHRyYW5zYWN0aW9uIG5lZWRzLlxuICAgKiBAcGFyYW0gbW9kZVxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgdHJhbnNhY3Rpb248XG4gICAgTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gICAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4gID4oXG4gICAgc3RvcmVOYW1lczogTmFtZSxcbiAgICBtb2RlPzogTW9kZSxcbiAgICBvcHRpb25zPzogSURCVHJhbnNhY3Rpb25PcHRpb25zLFxuICApOiBJREJQVHJhbnNhY3Rpb248REJUeXBlcywgW05hbWVdLCBNb2RlPjtcbiAgdHJhbnNhY3Rpb248XG4gICAgTmFtZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4sXG4gICAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4gID4oXG4gICAgc3RvcmVOYW1lczogTmFtZXMsXG4gICAgbW9kZT86IE1vZGUsXG4gICAgb3B0aW9ucz86IElEQlRyYW5zYWN0aW9uT3B0aW9ucyxcbiAgKTogSURCUFRyYW5zYWN0aW9uPERCVHlwZXMsIE5hbWVzLCBNb2RlPjtcblxuICAvLyBTaG9ydGN1dCBtZXRob2RzXG5cbiAgLyoqXG4gICAqIEFkZCBhIHZhbHVlIHRvIGEgc3RvcmUuXG4gICAqXG4gICAqIFJlamVjdHMgaWYgYW4gaXRlbSBvZiBhIGdpdmVuIGtleSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgc3RvcmUuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIGFkZDxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIE5hbWU+LFxuICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgTmFtZT4+O1xuICAvKipcbiAgICogRGVsZXRlcyBhbGwgcmVjb3JkcyBpbiBhIHN0b3JlLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqL1xuICBjbGVhcihuYW1lOiBTdG9yZU5hbWVzPERCVHlwZXM+KTogUHJvbWlzZTx2b2lkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgbnVtYmVyIG9mIHJlY29yZHMgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5IGluIGEgc3RvcmUuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgY291bnQ8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBrZXk/OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgKTogUHJvbWlzZTxudW1iZXI+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkgaW4gYW4gaW5kZXguXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGluZGV4TmFtZSBOYW1lIG9mIHRoZSBpbmRleCB3aXRoaW4gdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0ga2V5XG4gICAqL1xuICBjb3VudEZyb21JbmRleDxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIE5hbWU+LFxuICA+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBpbmRleE5hbWU6IEluZGV4TmFtZSxcbiAgICBrZXk/OiBJbmRleEtleTxEQlR5cGVzLCBOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICApOiBQcm9taXNlPG51bWJlcj47XG4gIC8qKlxuICAgKiBEZWxldGVzIHJlY29yZHMgaW4gYSBzdG9yZSBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgZGVsZXRlPE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAga2V5OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPHZvaWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVjb3JkIGluIGEgc3RvcmUgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIGdldDxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHF1ZXJ5OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVjb3JkIGluIGFuIGluZGV4IG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGluZGV4TmFtZSBOYW1lIG9mIHRoZSBpbmRleCB3aXRoaW4gdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIGdldEZyb21JbmRleDxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIE5hbWU+LFxuICA+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBpbmRleE5hbWU6IEluZGV4TmFtZSxcbiAgICBxdWVyeTogSW5kZXhLZXk8REJUeXBlcywgTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCB2YWx1ZXMgaW4gYSBzdG9yZSB0aGF0IG1hdGNoIHRoZSBxdWVyeS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIHZhbHVlcyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGw8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT5bXT47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyBpbiBhbiBpbmRleCB0aGF0IG1hdGNoIHRoZSBxdWVyeS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gaW5kZXhOYW1lIE5hbWUgb2YgdGhlIGluZGV4IHdpdGhpbiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2YgdmFsdWVzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbEZyb21JbmRleDxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIE5hbWU+LFxuICA+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBpbmRleE5hbWU6IEluZGV4TmFtZSxcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIE5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5cyBvZiByZWNvcmRzIGluIGEgc3RvcmUgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2Yga2V5cyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGxLZXlzPE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgcXVlcnk/OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5cyBvZiByZWNvcmRzIGluIGFuIGluZGV4IG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gaW5kZXhOYW1lIE5hbWUgb2YgdGhlIGluZGV4IHdpdGhpbiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2Yga2V5cyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGxLZXlzRnJvbUluZGV4PFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgTmFtZT4sXG4gID4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGluZGV4TmFtZTogSW5kZXhOYW1lLFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5IG9mIHRoZSBmaXJzdCByZWNvcmQgaW4gYSBzdG9yZSB0aGF0IG1hdGNoZXMgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIGdldEtleTxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHF1ZXJ5OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5IG9mIHRoZSBmaXJzdCByZWNvcmQgaW4gYW4gaW5kZXggdGhhdCBtYXRjaGVzIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGluZGV4TmFtZSBOYW1lIG9mIHRoZSBpbmRleCB3aXRoaW4gdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIGdldEtleUZyb21JbmRleDxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIE5hbWU+LFxuICA+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBpbmRleE5hbWU6IEluZGV4TmFtZSxcbiAgICBxdWVyeTogSW5kZXhLZXk8REJUeXBlcywgTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIFB1dCBhbiBpdGVtIGluIHRoZSBkYXRhYmFzZS5cbiAgICpcbiAgICogUmVwbGFjZXMgYW55IGl0ZW0gd2l0aCB0aGUgc2FtZSBrZXkuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIHB1dDxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIE5hbWU+LFxuICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgTmFtZT4+O1xufVxuXG50eXBlIElEQlBUcmFuc2FjdGlvbkV4dGVuZHMgPSBPbWl0PFxuICBJREJUcmFuc2FjdGlvbixcbiAgJ2RiJyB8ICdvYmplY3RTdG9yZScgfCAnb2JqZWN0U3RvcmVOYW1lcydcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUFRyYW5zYWN0aW9uPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQVHJhbnNhY3Rpb25FeHRlbmRzIHtcbiAgLyoqXG4gICAqIFRoZSB0cmFuc2FjdGlvbidzIG1vZGUuXG4gICAqL1xuICByZWFkb25seSBtb2RlOiBNb2RlO1xuICAvKipcbiAgICogVGhlIG5hbWVzIG9mIHN0b3JlcyBpbiBzY29wZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IG9iamVjdFN0b3JlTmFtZXM6IFR5cGVkRE9NU3RyaW5nTGlzdDxUeFN0b3Jlc1tudW1iZXJdPjtcbiAgLyoqXG4gICAqIFRoZSB0cmFuc2FjdGlvbidzIGNvbm5lY3Rpb24uXG4gICAqL1xuICByZWFkb25seSBkYjogSURCUERhdGFiYXNlPERCVHlwZXM+O1xuICAvKipcbiAgICogUHJvbWlzZSBmb3IgdGhlIGNvbXBsZXRpb24gb2YgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IGRvbmU6IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBUaGUgYXNzb2NpYXRlZCBvYmplY3Qgc3RvcmUsIGlmIHRoZSB0cmFuc2FjdGlvbiBjb3ZlcnMgYSBzaW5nbGUgc3RvcmUsIG90aGVyd2lzZSB1bmRlZmluZWQuXG4gICAqL1xuICByZWFkb25seSBzdG9yZTogVHhTdG9yZXNbMV0gZXh0ZW5kcyB1bmRlZmluZWRcbiAgICA/IElEQlBPYmplY3RTdG9yZTxEQlR5cGVzLCBUeFN0b3JlcywgVHhTdG9yZXNbMF0sIE1vZGU+XG4gICAgOiB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElEQk9iamVjdFN0b3JlIGluIHRoZSB0cmFuc2FjdGlvbidzIHNjb3BlLlxuICAgKi9cbiAgb2JqZWN0U3RvcmU8U3RvcmVOYW1lIGV4dGVuZHMgVHhTdG9yZXNbbnVtYmVyXT4oXG4gICAgbmFtZTogU3RvcmVOYW1lLFxuICApOiBJREJQT2JqZWN0U3RvcmU8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgTW9kZT47XG59XG5cbnR5cGUgSURCUE9iamVjdFN0b3JlRXh0ZW5kcyA9IE9taXQ8XG4gIElEQk9iamVjdFN0b3JlLFxuICB8ICd0cmFuc2FjdGlvbidcbiAgfCAnYWRkJ1xuICB8ICdjbGVhcidcbiAgfCAnY291bnQnXG4gIHwgJ2NyZWF0ZUluZGV4J1xuICB8ICdkZWxldGUnXG4gIHwgJ2dldCdcbiAgfCAnZ2V0QWxsJ1xuICB8ICdnZXRBbGxLZXlzJ1xuICB8ICdnZXRLZXknXG4gIHwgJ2luZGV4J1xuICB8ICdvcGVuQ3Vyc29yJ1xuICB8ICdvcGVuS2V5Q3Vyc29yJ1xuICB8ICdwdXQnXG4gIHwgJ2luZGV4TmFtZXMnXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBPYmplY3RTdG9yZTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBPYmplY3RTdG9yZUV4dGVuZHMge1xuICAvKipcbiAgICogVGhlIG5hbWVzIG9mIGluZGV4ZXMgaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAgcmVhZG9ubHkgaW5kZXhOYW1lczogVHlwZWRET01TdHJpbmdMaXN0PEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPj47XG4gIC8qKlxuICAgKiBUaGUgYXNzb2NpYXRlZCB0cmFuc2FjdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IHRyYW5zYWN0aW9uOiBJREJQVHJhbnNhY3Rpb248REJUeXBlcywgVHhTdG9yZXMsIE1vZGU+O1xuICAvKipcbiAgICogQWRkIGEgdmFsdWUgdG8gdGhlIHN0b3JlLlxuICAgKlxuICAgKiBSZWplY3RzIGlmIGFuIGl0ZW0gb2YgYSBnaXZlbiBrZXkgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAgYWRkOiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5J1xuICAgID8gdW5kZWZpbmVkXG4gICAgOiAoXG4gICAgICAgIHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT4sXG4gICAgICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgICAgICkgPT4gUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+PjtcbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHJlY29yZHMgaW4gc3RvcmUuXG4gICAqL1xuICBjbGVhcjogTW9kZSBleHRlbmRzICdyZWFkb25seScgPyB1bmRlZmluZWQgOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkuXG4gICAqL1xuICBjb3VudChcbiAgICBrZXk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICApOiBQcm9taXNlPG51bWJlcj47XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluZGV4IGluIHN0b3JlLlxuICAgKlxuICAgKiBUaHJvd3MgYW4gXCJJbnZhbGlkU3RhdGVFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiBub3QgY2FsbGVkIHdpdGhpbiBhbiB1cGdyYWRlIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgY3JlYXRlSW5kZXg6IE1vZGUgZXh0ZW5kcyAndmVyc2lvbmNoYW5nZSdcbiAgICA/IDxJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4+KFxuICAgICAgICBuYW1lOiBJbmRleE5hbWUsXG4gICAgICAgIGtleVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgICAgICBvcHRpb25zPzogSURCSW5kZXhQYXJhbWV0ZXJzLFxuICAgICAgKSA9PiBJREJQSW5kZXg8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPlxuICAgIDogdW5kZWZpbmVkO1xuICAvKipcbiAgICogRGVsZXRlcyByZWNvcmRzIGluIHN0b3JlIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeS5cbiAgICovXG4gIGRlbGV0ZTogTW9kZSBleHRlbmRzICdyZWFkb25seSdcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKGtleTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVjb3JkIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqL1xuICBnZXQoXG4gICAgcXVlcnk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCB2YWx1ZXMgdGhhdCBtYXRjaCB0aGUgcXVlcnkuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2YgdmFsdWVzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbChcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXlzIG9mIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIGtleXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsS2V5cyhcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5IG9mIHRoZSBmaXJzdCByZWNvcmQgdGhhdCBtYXRjaGVzIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqL1xuICBnZXRLZXkoXG4gICAgcXVlcnk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIEdldCBhIHF1ZXJ5IG9mIGEgZ2l2ZW4gbmFtZS5cbiAgICovXG4gIGluZGV4PEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPj4oXG4gICAgbmFtZTogSW5kZXhOYW1lLFxuICApOiBJREJQSW5kZXg8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPjtcbiAgLyoqXG4gICAqIE9wZW5zIGEgY3Vyc29yIG92ZXIgdGhlIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIG51bGwgaWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgb3BlbkN1cnNvcihcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBQcm9taXNlPElEQlBDdXJzb3JXaXRoVmFsdWU8XG4gICAgREJUeXBlcyxcbiAgICBUeFN0b3JlcyxcbiAgICBTdG9yZU5hbWUsXG4gICAgdW5rbm93bixcbiAgICBNb2RlXG4gID4gfCBudWxsPjtcbiAgLyoqXG4gICAqIE9wZW5zIGEgY3Vyc29yIG92ZXIgdGhlIGtleXMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIG51bGwgaWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgb3BlbktleUN1cnNvcihcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBQcm9taXNlPElEQlBDdXJzb3I8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgdW5rbm93biwgTW9kZT4gfCBudWxsPjtcbiAgLyoqXG4gICAqIFB1dCBhbiBpdGVtIGluIHRoZSBzdG9yZS5cbiAgICpcbiAgICogUmVwbGFjZXMgYW55IGl0ZW0gd2l0aCB0aGUgc2FtZSBrZXkuXG4gICAqL1xuICBwdXQ6IE1vZGUgZXh0ZW5kcyAncmVhZG9ubHknXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IChcbiAgICAgICAgdmFsdWU6IFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgICAgICAga2V5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlLFxuICAgICAgKSA9PiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4+O1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSBzdG9yZS5cbiAgICovXG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFxuICAgIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlPFxuICAgICAgREJUeXBlcyxcbiAgICAgIFR4U3RvcmVzLFxuICAgICAgU3RvcmVOYW1lLFxuICAgICAgdW5rbm93bixcbiAgICAgIE1vZGVcbiAgICA+XG4gID47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnkgSWYgbnVsbCwgYWxsIHJlY29yZHMgbWF0Y2guXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICovXG4gIGl0ZXJhdGUoXG4gICAgcXVlcnk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGRpcmVjdGlvbj86IElEQkN1cnNvckRpcmVjdGlvbixcbiAgKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFxuICAgIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlPFxuICAgICAgREJUeXBlcyxcbiAgICAgIFR4U3RvcmVzLFxuICAgICAgU3RvcmVOYW1lLFxuICAgICAgdW5rbm93bixcbiAgICAgIE1vZGVcbiAgICA+XG4gID47XG59XG5cbnR5cGUgSURCUEluZGV4RXh0ZW5kcyA9IE9taXQ8XG4gIElEQkluZGV4LFxuICB8ICdvYmplY3RTdG9yZSdcbiAgfCAnY291bnQnXG4gIHwgJ2dldCdcbiAgfCAnZ2V0QWxsJ1xuICB8ICdnZXRBbGxLZXlzJ1xuICB8ICdnZXRLZXknXG4gIHwgJ29wZW5DdXJzb3InXG4gIHwgJ29wZW5LZXlDdXJzb3InXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBJbmRleDxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiA9IEluZGV4TmFtZXM8XG4gICAgREJUeXBlcyxcbiAgICBTdG9yZU5hbWVcbiAgPixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUEluZGV4RXh0ZW5kcyB7XG4gIC8qKlxuICAgKiBUaGUgSURCT2JqZWN0U3RvcmUgdGhlIGluZGV4IGJlbG9uZ3MgdG8uXG4gICAqL1xuICByZWFkb25seSBvYmplY3RTdG9yZTogSURCUE9iamVjdFN0b3JlPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIE1vZGU+O1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIG51bWJlciBvZiByZWNvcmRzIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeS5cbiAgICovXG4gIGNvdW50KFxuICAgIGtleT86IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgKTogUHJvbWlzZTxudW1iZXI+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVjb3JkIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqL1xuICBnZXQoXG4gICAgcXVlcnk6IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyB0aGF0IG1hdGNoIHRoZSBxdWVyeS5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiB2YWx1ZXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsKFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5cyBvZiByZWNvcmRzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiBrZXlzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbEtleXMoXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5IG9mIHRoZSBmaXJzdCByZWNvcmQgdGhhdCBtYXRjaGVzIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqL1xuICBnZXRLZXkoXG4gICAgcXVlcnk6IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogT3BlbnMgYSBjdXJzb3Igb3ZlciB0aGUgcmVjb3JkcyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggbnVsbCBpZiBubyBtYXRjaGVzIGFyZSBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IElmIG51bGwsIGFsbCByZWNvcmRzIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAqL1xuICBvcGVuQ3Vyc29yKFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGRpcmVjdGlvbj86IElEQkN1cnNvckRpcmVjdGlvbixcbiAgKTogUHJvbWlzZTxJREJQQ3Vyc29yV2l0aFZhbHVlPFxuICAgIERCVHlwZXMsXG4gICAgVHhTdG9yZXMsXG4gICAgU3RvcmVOYW1lLFxuICAgIEluZGV4TmFtZSxcbiAgICBNb2RlXG4gID4gfCBudWxsPjtcbiAgLyoqXG4gICAqIE9wZW5zIGEgY3Vyc29yIG92ZXIgdGhlIGtleXMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIG51bGwgaWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgb3BlbktleUN1cnNvcihcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBkaXJlY3Rpb24/OiBJREJDdXJzb3JEaXJlY3Rpb24sXG4gICk6IFByb21pc2U8SURCUEN1cnNvcjxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+IHwgbnVsbD47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIGluZGV4LlxuICAgKi9cbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8XG4gICAgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gICAgICBEQlR5cGVzLFxuICAgICAgVHhTdG9yZXMsXG4gICAgICBTdG9yZU5hbWUsXG4gICAgICBJbmRleE5hbWUsXG4gICAgICBNb2RlXG4gICAgPlxuICA+O1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSByZWNvcmRzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCBudWxsIGlmIG5vIG1hdGNoZXMgYXJlIGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnkgSWYgbnVsbCwgYWxsIHJlY29yZHMgbWF0Y2guXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICovXG4gIGl0ZXJhdGUoXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8XG4gICAgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gICAgICBEQlR5cGVzLFxuICAgICAgVHhTdG9yZXMsXG4gICAgICBTdG9yZU5hbWUsXG4gICAgICBJbmRleE5hbWUsXG4gICAgICBNb2RlXG4gICAgPlxuICA+O1xufVxuXG50eXBlIElEQlBDdXJzb3JFeHRlbmRzID0gT21pdDxcbiAgSURCQ3Vyc29yLFxuICB8ICdrZXknXG4gIHwgJ3ByaW1hcnlLZXknXG4gIHwgJ3NvdXJjZSdcbiAgfCAnYWR2YW5jZSdcbiAgfCAnY29udGludWUnXG4gIHwgJ2NvbnRpbnVlUHJpbWFyeUtleSdcbiAgfCAnZGVsZXRlJ1xuICB8ICd1cGRhdGUnXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBDdXJzb3I8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUEN1cnNvckV4dGVuZHMge1xuICAvKipcbiAgICogVGhlIGtleSBvZiB0aGUgY3VycmVudCBpbmRleCBvciBvYmplY3Qgc3RvcmUgaXRlbS5cbiAgICovXG4gIHJlYWRvbmx5IGtleTogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPjtcbiAgLyoqXG4gICAqIFRoZSBrZXkgb2YgdGhlIGN1cnJlbnQgb2JqZWN0IHN0b3JlIGl0ZW0uXG4gICAqL1xuICByZWFkb25seSBwcmltYXJ5S2V5OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+O1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgSURCT2JqZWN0U3RvcmUgb3IgSURCSW5kZXggdGhlIGN1cnNvciB3YXMgb3BlbmVkIGZyb20uXG4gICAqL1xuICByZWFkb25seSBzb3VyY2U6IEN1cnNvclNvdXJjZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+O1xuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIGN1cnNvciBhIGdpdmVuIG51bWJlciBvZiByZWNvcmRzLlxuICAgKlxuICAgKiBSZXNvbHZlcyB0byBudWxsIGlmIG5vIG1hdGNoaW5nIHJlY29yZHMgcmVtYWluLlxuICAgKi9cbiAgYWR2YW5jZTxUPih0aGlzOiBULCBjb3VudDogbnVtYmVyKTogUHJvbWlzZTxUIHwgbnVsbD47XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgb25lIHJlY29yZCAodW5sZXNzICdrZXknIGlzIHByb3ZpZGVkKS5cbiAgICpcbiAgICogUmVzb2x2ZXMgdG8gbnVsbCBpZiBubyBtYXRjaGluZyByZWNvcmRzIHJlbWFpbi5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICovXG4gIGNvbnRpbnVlPFQ+KFxuICAgIHRoaXM6IFQsXG4gICAga2V5PzogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPixcbiAgKTogUHJvbWlzZTxUIHwgbnVsbD47XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgZ2l2ZW4ga2V5cy5cbiAgICpcbiAgICogVGhlIG9wZXJhdGlvbiBpcyAnYW5kJyBcdTIwMTMgYm90aCBrZXlzIG11c3QgYmUgc2F0aXNmaWVkLlxuICAgKlxuICAgKiBSZXNvbHZlcyB0byBudWxsIGlmIG5vIG1hdGNoaW5nIHJlY29yZHMgcmVtYWluLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKiBAcGFyYW0gcHJpbWFyeUtleSBhbmQgd2hlcmUgdGhlIG9iamVjdCBzdG9yZSBoYXMgYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqL1xuICBjb250aW51ZVByaW1hcnlLZXk8VD4oXG4gICAgdGhpczogVCxcbiAgICBrZXk6IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4sXG4gICAgcHJpbWFyeUtleTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgKTogUHJvbWlzZTxUIHwgbnVsbD47XG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIGN1cnJlbnQgcmVjb3JkLlxuICAgKi9cbiAgZGVsZXRlOiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5JyA/IHVuZGVmaW5lZCA6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBVcGRhdGVkIHRoZSBjdXJyZW50IHJlY29yZC5cbiAgICovXG4gIHVwZGF0ZTogTW9kZSBleHRlbmRzICdyZWFkb25seSdcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKFxuICAgICAgICB2YWx1ZTogU3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+LFxuICAgICAgKSA9PiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4+O1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSBjdXJzb3IuXG4gICAqL1xuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxcbiAgICBJREJQQ3Vyc29ySXRlcmF0b3JWYWx1ZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+XG4gID47XG59XG5cbnR5cGUgSURCUEN1cnNvckl0ZXJhdG9yVmFsdWVFeHRlbmRzPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiA9IE9taXQ8XG4gIElEQlBDdXJzb3I8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPixcbiAgJ2FkdmFuY2UnIHwgJ2NvbnRpbnVlJyB8ICdjb250aW51ZVByaW1hcnlLZXknXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBDdXJzb3JJdGVyYXRvclZhbHVlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBDdXJzb3JJdGVyYXRvclZhbHVlRXh0ZW5kczxcbiAgICBEQlR5cGVzLFxuICAgIFR4U3RvcmVzLFxuICAgIFN0b3JlTmFtZSxcbiAgICBJbmRleE5hbWUsXG4gICAgTW9kZVxuICA+IHtcbiAgLyoqXG4gICAqIEFkdmFuY2VzIHRoZSBjdXJzb3IgYSBnaXZlbiBudW1iZXIgb2YgcmVjb3Jkcy5cbiAgICovXG4gIGFkdmFuY2U8VD4odGhpczogVCwgY291bnQ6IG51bWJlcik6IHZvaWQ7XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgb25lIHJlY29yZCAodW5sZXNzICdrZXknIGlzIHByb3ZpZGVkKS5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICovXG4gIGNvbnRpbnVlPFQ+KHRoaXM6IFQsIGtleT86IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4pOiB2b2lkO1xuICAvKipcbiAgICogQWR2YW5jZSB0aGUgY3Vyc29yIGJ5IGdpdmVuIGtleXMuXG4gICAqXG4gICAqIFRoZSBvcGVyYXRpb24gaXMgJ2FuZCcgXHUyMDEzIGJvdGgga2V5cyBtdXN0IGJlIHNhdGlzZmllZC5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICogQHBhcmFtIHByaW1hcnlLZXkgYW5kIHdoZXJlIHRoZSBvYmplY3Qgc3RvcmUgaGFzIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWVQcmltYXJ5S2V5PFQ+KFxuICAgIHRoaXM6IFQsXG4gICAga2V5OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+LFxuICAgIHByaW1hcnlLZXk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4sXG4gICk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUEN1cnNvcldpdGhWYWx1ZTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24gPSB1bmtub3duLFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQQ3Vyc29yPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT4ge1xuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50IGl0ZW0uXG4gICAqL1xuICByZWFkb25seSB2YWx1ZTogU3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+O1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSBjdXJzb3IuXG4gICAqL1xuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxcbiAgICBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZTxcbiAgICAgIERCVHlwZXMsXG4gICAgICBUeFN0b3JlcyxcbiAgICAgIFN0b3JlTmFtZSxcbiAgICAgIEluZGV4TmFtZSxcbiAgICAgIE1vZGVcbiAgICA+XG4gID47XG59XG5cbi8vIFNvbWUgb2YgdGhhdCBzd2VlZWVldCBKYXZhLWVzcXVlIG5hbWluZy5cbnR5cGUgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWVFeHRlbmRzPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiA9IE9taXQ8XG4gIElEQlBDdXJzb3JXaXRoVmFsdWU8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPixcbiAgJ2FkdmFuY2UnIHwgJ2NvbnRpbnVlJyB8ICdjb250aW51ZVByaW1hcnlLZXknXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlRXh0ZW5kczxcbiAgICBEQlR5cGVzLFxuICAgIFR4U3RvcmVzLFxuICAgIFN0b3JlTmFtZSxcbiAgICBJbmRleE5hbWUsXG4gICAgTW9kZVxuICA+IHtcbiAgLyoqXG4gICAqIEFkdmFuY2VzIHRoZSBjdXJzb3IgYSBnaXZlbiBudW1iZXIgb2YgcmVjb3Jkcy5cbiAgICovXG4gIGFkdmFuY2U8VD4odGhpczogVCwgY291bnQ6IG51bWJlcik6IHZvaWQ7XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgb25lIHJlY29yZCAodW5sZXNzICdrZXknIGlzIHByb3ZpZGVkKS5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICovXG4gIGNvbnRpbnVlPFQ+KHRoaXM6IFQsIGtleT86IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4pOiB2b2lkO1xuICAvKipcbiAgICogQWR2YW5jZSB0aGUgY3Vyc29yIGJ5IGdpdmVuIGtleXMuXG4gICAqXG4gICAqIFRoZSBvcGVyYXRpb24gaXMgJ2FuZCcgXHUyMDEzIGJvdGgga2V5cyBtdXN0IGJlIHNhdGlzZmllZC5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICogQHBhcmFtIHByaW1hcnlLZXkgYW5kIHdoZXJlIHRoZSBvYmplY3Qgc3RvcmUgaGFzIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWVQcmltYXJ5S2V5PFQ+KFxuICAgIHRoaXM6IFQsXG4gICAga2V5OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+LFxuICAgIHByaW1hcnlLZXk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4sXG4gICk6IHZvaWQ7XG59XG4iLCAiaW1wb3J0IHsgRnVuYyB9IGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQgeyByZXBsYWNlVHJhcHMgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmltcG9ydCB7IElEQlBEYXRhYmFzZSwgSURCUEluZGV4IH0gZnJvbSAnLi9lbnRyeS5qcyc7XG5cbmNvbnN0IHJlYWRNZXRob2RzID0gWydnZXQnLCAnZ2V0S2V5JywgJ2dldEFsbCcsICdnZXRBbGxLZXlzJywgJ2NvdW50J107XG5jb25zdCB3cml0ZU1ldGhvZHMgPSBbJ3B1dCcsICdhZGQnLCAnZGVsZXRlJywgJ2NsZWFyJ107XG5jb25zdCBjYWNoZWRNZXRob2RzID0gbmV3IE1hcDxzdHJpbmcsIEZ1bmM+KCk7XG5cbmZ1bmN0aW9uIGdldE1ldGhvZChcbiAgdGFyZ2V0OiBhbnksXG4gIHByb3A6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCxcbik6IEZ1bmMgfCB1bmRlZmluZWQge1xuICBpZiAoXG4gICAgIShcbiAgICAgIHRhcmdldCBpbnN0YW5jZW9mIElEQkRhdGFiYXNlICYmXG4gICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnXG4gICAgKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2FjaGVkTWV0aG9kcy5nZXQocHJvcCkpIHJldHVybiBjYWNoZWRNZXRob2RzLmdldChwcm9wKTtcblxuICBjb25zdCB0YXJnZXRGdW5jTmFtZTogc3RyaW5nID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICBjb25zdCB1c2VJbmRleCA9IHByb3AgIT09IHRhcmdldEZ1bmNOYW1lO1xuICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcblxuICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICEoaXNXcml0ZSB8fCByZWFkTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSkpXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChcbiAgICB0aGlzOiBJREJQRGF0YWJhc2UsXG4gICAgc3RvcmVOYW1lOiBzdHJpbmcsXG4gICAgLi4uYXJnczogYW55W11cbiAgKSB7XG4gICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgY29uc3QgdHggPSB0aGlzLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogJ3JlYWRvbmx5Jyk7XG4gICAgbGV0IHRhcmdldDpcbiAgICAgIHwgdHlwZW9mIHR4LnN0b3JlXG4gICAgICB8IElEQlBJbmRleDx1bmtub3duLCBzdHJpbmdbXSwgc3RyaW5nLCBzdHJpbmcsICdyZWFkd3JpdGUnIHwgJ3JlYWRvbmx5Jz4gPVxuICAgICAgdHguc3RvcmU7XG4gICAgaWYgKHVzZUluZGV4KSB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcblxuICAgIC8vIE11c3QgcmVqZWN0IGlmIG9wIHJlamVjdHMuXG4gICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgIC8vIE11c3QgcmVzb2x2ZSB3aXRoIG9wIHZhbHVlLlxuICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgIHJldHVybiAoXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICh0YXJnZXQgYXMgYW55KVt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgIF0pXG4gICAgKVswXTtcbiAgfTtcblxuICBjYWNoZWRNZXRob2RzLnNldChwcm9wLCBtZXRob2QpO1xuICByZXR1cm4gbWV0aG9kO1xufVxuXG5yZXBsYWNlVHJhcHMoKG9sZFRyYXBzKSA9PiAoe1xuICAuLi5vbGRUcmFwcyxcbiAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT5cbiAgICBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQhKHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICBoYXM6ICh0YXJnZXQsIHByb3ApID0+XG4gICAgISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXMhKHRhcmdldCwgcHJvcCksXG59KSk7XG4iLCAiLy8gQHRzLWlnbm9yZVxudHJ5e3NlbGZbJ3dvcmtib3g6ZXhwaXJhdGlvbjo3LjAuMCddJiZfKCl9Y2F0Y2goZSl7fSIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7b3BlbkRCLCBEQlNjaGVtYSwgSURCUERhdGFiYXNlLCBkZWxldGVEQn0gZnJvbSAnaWRiJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5jb25zdCBEQl9OQU1FID0gJ3dvcmtib3gtZXhwaXJhdGlvbic7XG5jb25zdCBDQUNIRV9PQkpFQ1RfU1RPUkUgPSAnY2FjaGUtZW50cmllcyc7XG5cbmNvbnN0IG5vcm1hbGl6ZVVSTCA9ICh1bk5vcm1hbGl6ZWRVcmw6IHN0cmluZykgPT4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHVuTm9ybWFsaXplZFVybCwgbG9jYXRpb24uaHJlZik7XG4gIHVybC5oYXNoID0gJyc7XG5cbiAgcmV0dXJuIHVybC5ocmVmO1xufTtcblxuaW50ZXJmYWNlIENhY2hlVGltZXN0YW1wc01vZGVsRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBjYWNoZU5hbWU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2FjaGVEYlNjaGVtYSBleHRlbmRzIERCU2NoZW1hIHtcbiAgJ2NhY2hlLWVudHJpZXMnOiB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgdmFsdWU6IENhY2hlVGltZXN0YW1wc01vZGVsRW50cnk7XG4gICAgaW5kZXhlczoge2NhY2hlTmFtZTogc3RyaW5nOyB0aW1lc3RhbXA6IG51bWJlcn07XG4gIH07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdGltZXN0YW1wIG1vZGVsLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIENhY2hlVGltZXN0YW1wc01vZGVsIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfY2FjaGVOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RiOiBJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT4gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhY2hlTmFtZVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY2FjaGVOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWU7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYW4gdXBncmFkZSBvZiBpbmRleGVkREIuXG4gICAqXG4gICAqIEBwYXJhbSB7SURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+fSBkYlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfdXBncmFkZURiKGRiOiBJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT4pIHtcbiAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IEVkZ2VIVE1MIGRvZXNuJ3Qgc3VwcG9ydCBhcnJheXMgYXMgYSBrZXlQYXRoLCBzbyB3ZVxuICAgIC8vIGhhdmUgdG8gdXNlIHRoZSBgaWRgIGtleVBhdGggaGVyZSBhbmQgY3JlYXRlIG91ciBvd24gdmFsdWVzIChhXG4gICAgLy8gY29uY2F0ZW5hdGlvbiBvZiBgdXJsICsgY2FjaGVOYW1lYCkgaW5zdGVhZCBvZiBzaW1wbHkgdXNpbmdcbiAgICAvLyBga2V5UGF0aDogWyd1cmwnLCAnY2FjaGVOYW1lJ11gLCB3aGljaCBpcyBzdXBwb3J0ZWQgaW4gb3RoZXIgYnJvd3NlcnMuXG4gICAgY29uc3Qgb2JqU3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShDQUNIRV9PQkpFQ1RfU1RPUkUsIHtrZXlQYXRoOiAnaWQnfSk7XG5cbiAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG9uY2Ugd2UgZG9uJ3QgaGF2ZSB0byBzdXBwb3J0IEVkZ2VIVE1MLCB3ZSBjYW5cbiAgICAvLyBjcmVhdGUgYSBzaW5nbGUgaW5kZXggd2l0aCB0aGUga2V5UGF0aCBgWydjYWNoZU5hbWUnLCAndGltZXN0YW1wJ11gXG4gICAgLy8gaW5zdGVhZCBvZiBkb2luZyBib3RoIHRoZXNlIGluZGV4ZXMuXG4gICAgb2JqU3RvcmUuY3JlYXRlSW5kZXgoJ2NhY2hlTmFtZScsICdjYWNoZU5hbWUnLCB7dW5pcXVlOiBmYWxzZX0pO1xuICAgIG9ialN0b3JlLmNyZWF0ZUluZGV4KCd0aW1lc3RhbXAnLCAndGltZXN0YW1wJywge3VuaXF1ZTogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhbiB1cGdyYWRlIG9mIGluZGV4ZWREQiBhbmQgZGVsZXRlcyBkZXByZWNhdGVkIERCcy5cbiAgICpcbiAgICogQHBhcmFtIHtJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT59IGRiXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF91cGdyYWRlRGJBbmREZWxldGVPbGREYnMoZGI6IElEQlBEYXRhYmFzZTxDYWNoZURiU2NoZW1hPikge1xuICAgIHRoaXMuX3VwZ3JhZGVEYihkYik7XG4gICAgaWYgKHRoaXMuX2NhY2hlTmFtZSkge1xuICAgICAgdm9pZCBkZWxldGVEQih0aGlzLl9jYWNoZU5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIHNldFRpbWVzdGFtcCh1cmw6IHN0cmluZywgdGltZXN0YW1wOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB1cmwgPSBub3JtYWxpemVVUkwodXJsKTtcblxuICAgIGNvbnN0IGVudHJ5OiBDYWNoZVRpbWVzdGFtcHNNb2RlbEVudHJ5ID0ge1xuICAgICAgdXJsLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgY2FjaGVOYW1lOiB0aGlzLl9jYWNoZU5hbWUsXG4gICAgICAvLyBDcmVhdGluZyBhbiBJRCBmcm9tIHRoZSBVUkwgYW5kIGNhY2hlIG5hbWUgd29uJ3QgYmUgbmVjZXNzYXJ5IG9uY2VcbiAgICAgIC8vIEVkZ2Ugc3dpdGNoZXMgdG8gQ2hyb21pdW0gYW5kIGFsbCBicm93c2VycyB3ZSBzdXBwb3J0IHdvcmsgd2l0aFxuICAgICAgLy8gYXJyYXkga2V5UGF0aHMuXG4gICAgICBpZDogdGhpcy5fZ2V0SWQodXJsKSxcbiAgICB9O1xuICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXREYigpO1xuICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oQ0FDSEVfT0JKRUNUX1NUT1JFLCAncmVhZHdyaXRlJywge1xuICAgICAgZHVyYWJpbGl0eTogJ3JlbGF4ZWQnLFxuICAgIH0pO1xuICAgIGF3YWl0IHR4LnN0b3JlLnB1dChlbnRyeSk7XG4gICAgYXdhaXQgdHguZG9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0aW1lc3RhbXAgc3RvcmVkIGZvciBhIGdpdmVuIFVSTC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcmV0dXJuIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBnZXRUaW1lc3RhbXAodXJsOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlciB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXREYigpO1xuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgZGIuZ2V0KENBQ0hFX09CSkVDVF9TVE9SRSwgdGhpcy5fZ2V0SWQodXJsKSk7XG4gICAgcmV0dXJuIGVudHJ5Py50aW1lc3RhbXA7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBhbGwgdGhlIGVudHJpZXMgaW4gdGhlIG9iamVjdCBzdG9yZSAoZnJvbSBuZXdlc3QgdG9cbiAgICogb2xkZXN0KSBhbmQgcmVtb3ZlcyBlbnRyaWVzIG9uY2UgZWl0aGVyIGBtYXhDb3VudGAgaXMgcmVhY2hlZCBvciB0aGVcbiAgICogZW50cnkncyB0aW1lc3RhbXAgaXMgbGVzcyB0aGFuIGBtaW5UaW1lc3RhbXBgLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWluVGltZXN0YW1wXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhDb3VudFxuICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgZXhwaXJlRW50cmllcyhcbiAgICBtaW5UaW1lc3RhbXA6IG51bWJlcixcbiAgICBtYXhDb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXREYigpO1xuICAgIGxldCBjdXJzb3IgPSBhd2FpdCBkYlxuICAgICAgLnRyYW5zYWN0aW9uKENBQ0hFX09CSkVDVF9TVE9SRSlcbiAgICAgIC5zdG9yZS5pbmRleCgndGltZXN0YW1wJylcbiAgICAgIC5vcGVuQ3Vyc29yKG51bGwsICdwcmV2Jyk7XG4gICAgY29uc3QgZW50cmllc1RvRGVsZXRlOiBDYWNoZVRpbWVzdGFtcHNNb2RlbEVudHJ5W10gPSBbXTtcbiAgICBsZXQgZW50cmllc05vdERlbGV0ZWRDb3VudCA9IDA7XG4gICAgd2hpbGUgKGN1cnNvcikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY3Vyc29yLnZhbHVlO1xuICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHdlIGNhbiB1c2UgYSBtdWx0aS1rZXkgaW5kZXgsIHdlXG4gICAgICAvLyB3b24ndCBoYXZlIHRvIGNoZWNrIGBjYWNoZU5hbWVgIGhlcmUuXG4gICAgICBpZiAocmVzdWx0LmNhY2hlTmFtZSA9PT0gdGhpcy5fY2FjaGVOYW1lKSB7XG4gICAgICAgIC8vIERlbGV0ZSBhbiBlbnRyeSBpZiBpdCdzIG9sZGVyIHRoYW4gdGhlIG1heCBhZ2Ugb3JcbiAgICAgICAgLy8gaWYgd2UgYWxyZWFkeSBoYXZlIHRoZSBtYXggbnVtYmVyIGFsbG93ZWQuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAobWluVGltZXN0YW1wICYmIHJlc3VsdC50aW1lc3RhbXAgPCBtaW5UaW1lc3RhbXApIHx8XG4gICAgICAgICAgKG1heENvdW50ICYmIGVudHJpZXNOb3REZWxldGVkQ291bnQgPj0gbWF4Q291bnQpXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogd2Ugc2hvdWxkIGJlIGFibGUgdG8gZGVsZXRlIHRoZVxuICAgICAgICAgIC8vIGVudHJ5IHJpZ2h0IGhlcmUsIGJ1dCBkb2luZyBzbyBjYXVzZXMgYW4gaXRlcmF0aW9uXG4gICAgICAgICAgLy8gYnVnIGluIFNhZmFyaSBzdGFibGUgKGZpeGVkIGluIFRQKS4gSW5zdGVhZCB3ZSBjYW5cbiAgICAgICAgICAvLyBzdG9yZSB0aGUga2V5cyBvZiB0aGUgZW50cmllcyB0byBkZWxldGUsIGFuZCB0aGVuXG4gICAgICAgICAgLy8gZGVsZXRlIHRoZSBzZXBhcmF0ZSB0cmFuc2FjdGlvbnMuXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xOTc4XG4gICAgICAgICAgLy8gY3Vyc29yLmRlbGV0ZSgpO1xuXG4gICAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIHJldHVybiB0aGUgVVJMLCBub3QgdGhlIHdob2xlIGVudHJ5LlxuICAgICAgICAgIGVudHJpZXNUb0RlbGV0ZS5wdXNoKGN1cnNvci52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW50cmllc05vdERlbGV0ZWRDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG9uY2UgdGhlIFNhZmFyaSBidWcgaW4gdGhlIGZvbGxvd2luZyBpc3N1ZSBpcyBmaXhlZCxcbiAgICAvLyB3ZSBzaG91bGQgYmUgYWJsZSB0byByZW1vdmUgdGhpcyBsb29wIGFuZCBkbyB0aGUgZW50cnkgZGVsZXRpb24gaW4gdGhlXG4gICAgLy8gY3Vyc29yIGxvb3AgYWJvdmU6XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xOTc4XG4gICAgY29uc3QgdXJsc0RlbGV0ZWQ6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzVG9EZWxldGUpIHtcbiAgICAgIGF3YWl0IGRiLmRlbGV0ZShDQUNIRV9PQkpFQ1RfU1RPUkUsIGVudHJ5LmlkKTtcbiAgICAgIHVybHNEZWxldGVkLnB1c2goZW50cnkudXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsc0RlbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgYSBVUkwgYW5kIHJldHVybnMgYW4gSUQgdGhhdCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGUgb2JqZWN0IHN0b3JlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2dldElkKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBDcmVhdGluZyBhbiBJRCBmcm9tIHRoZSBVUkwgYW5kIGNhY2hlIG5hbWUgd29uJ3QgYmUgbmVjZXNzYXJ5IG9uY2VcbiAgICAvLyBFZGdlIHN3aXRjaGVzIHRvIENocm9taXVtIGFuZCBhbGwgYnJvd3NlcnMgd2Ugc3VwcG9ydCB3b3JrIHdpdGhcbiAgICAvLyBhcnJheSBrZXlQYXRocy5cbiAgICByZXR1cm4gdGhpcy5fY2FjaGVOYW1lICsgJ3wnICsgbm9ybWFsaXplVVJMKHVybCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvcGVuIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBnZXREYigpIHtcbiAgICBpZiAoIXRoaXMuX2RiKSB7XG4gICAgICB0aGlzLl9kYiA9IGF3YWl0IG9wZW5EQihEQl9OQU1FLCAxLCB7XG4gICAgICAgIHVwZ3JhZGU6IHRoaXMuX3VwZ3JhZGVEYkFuZERlbGV0ZU9sZERicy5iaW5kKHRoaXMpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kYjtcbiAgfVxufVxuXG5leHBvcnQge0NhY2hlVGltZXN0YW1wc01vZGVsfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7ZG9udFdhaXRGb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCB7Q2FjaGVUaW1lc3RhbXBzTW9kZWx9IGZyb20gJy4vbW9kZWxzL0NhY2hlVGltZXN0YW1wc01vZGVsLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuaW50ZXJmYWNlIENhY2hlRXhwaXJhdGlvbkNvbmZpZyB7XG4gIG1heEVudHJpZXM/OiBudW1iZXI7XG4gIG1heEFnZVNlY29uZHM/OiBudW1iZXI7XG4gIG1hdGNoT3B0aW9ucz86IENhY2hlUXVlcnlPcHRpb25zO1xufVxuXG4vKipcbiAqIFRoZSBgQ2FjaGVFeHBpcmF0aW9uYCBjbGFzcyBhbGxvd3MgeW91IGRlZmluZSBhbiBleHBpcmF0aW9uIGFuZCAvIG9yXG4gKiBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIHJlc3BvbnNlcyBzdG9yZWQgaW4gYVxuICogW2BDYWNoZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZSkuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtZXhwaXJhdGlvblxuICovXG5jbGFzcyBDYWNoZUV4cGlyYXRpb24ge1xuICBwcml2YXRlIF9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWF4RW50cmllcz86IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWF4QWdlU2Vjb25kcz86IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWF0Y2hPcHRpb25zPzogQ2FjaGVRdWVyeU9wdGlvbnM7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NhY2hlTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF90aW1lc3RhbXBNb2RlbDogQ2FjaGVUaW1lc3RhbXBzTW9kZWw7XG5cbiAgLyoqXG4gICAqIFRvIGNvbnN0cnVjdCBhIG5ldyBDYWNoZUV4cGlyYXRpb24gaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdCBsZWFzdFxuICAgKiBvbmUgb2YgdGhlIGBjb25maWdgIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdG8gYXBwbHkgcmVzdHJpY3Rpb25zIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEVudHJpZXNdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBlbnRyaWVzIHRvIGNhY2hlLlxuICAgKiBFbnRyaWVzIHVzZWQgdGhlIGxlYXN0IHdpbGwgYmUgcmVtb3ZlZCBhcyB0aGUgbWF4aW11bSBpcyByZWFjaGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhBZ2VTZWNvbmRzXSBUaGUgbWF4aW11bSBhZ2Ugb2YgYW4gZW50cnkgYmVmb3JlXG4gICAqIGl0J3MgdHJlYXRlZCBhcyBzdGFsZSBhbmQgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWcubWF0Y2hPcHRpb25zXSBUaGUgW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZS9kZWxldGUjUGFyYW1ldGVycylcbiAgICogdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBjYWxsaW5nIGBkZWxldGUoKWAgb24gdGhlIGNhY2hlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY2FjaGVOYW1lOiBzdHJpbmcsIGNvbmZpZzogQ2FjaGVFeHBpcmF0aW9uQ29uZmlnID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUoY2FjaGVOYW1lLCAnc3RyaW5nJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ2NhY2hlTmFtZScsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCEoY29uZmlnLm1heEVudHJpZXMgfHwgY29uZmlnLm1heEFnZVNlY29uZHMpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCcsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5tYXhFbnRyaWVzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKGNvbmZpZy5tYXhFbnRyaWVzLCAnbnVtYmVyJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEVudHJpZXMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKGNvbmZpZy5tYXhBZ2VTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEFnZVNlY29uZHMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9tYXhFbnRyaWVzID0gY29uZmlnLm1heEVudHJpZXM7XG4gICAgdGhpcy5fbWF4QWdlU2Vjb25kcyA9IGNvbmZpZy5tYXhBZ2VTZWNvbmRzO1xuICAgIHRoaXMuX21hdGNoT3B0aW9ucyA9IGNvbmZpZy5tYXRjaE9wdGlvbnM7XG4gICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lO1xuICAgIHRoaXMuX3RpbWVzdGFtcE1vZGVsID0gbmV3IENhY2hlVGltZXN0YW1wc01vZGVsKGNhY2hlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogRXhwaXJlcyBlbnRyaWVzIGZvciB0aGUgZ2l2ZW4gY2FjaGUgYW5kIGdpdmVuIGNyaXRlcmlhLlxuICAgKi9cbiAgYXN5bmMgZXhwaXJlRW50cmllcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5faXNSdW5uaW5nKSB7XG4gICAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XG5cbiAgICBjb25zdCBtaW5UaW1lc3RhbXAgPSB0aGlzLl9tYXhBZ2VTZWNvbmRzXG4gICAgICA/IERhdGUubm93KCkgLSB0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMFxuICAgICAgOiAwO1xuXG4gICAgY29uc3QgdXJsc0V4cGlyZWQgPSBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5leHBpcmVFbnRyaWVzKFxuICAgICAgbWluVGltZXN0YW1wLFxuICAgICAgdGhpcy5fbWF4RW50cmllcyxcbiAgICApO1xuXG4gICAgLy8gRGVsZXRlIFVSTHMgZnJvbSB0aGUgY2FjaGVcbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4odGhpcy5fY2FjaGVOYW1lKTtcbiAgICBmb3IgKGNvbnN0IHVybCBvZiB1cmxzRXhwaXJlZCkge1xuICAgICAgYXdhaXQgY2FjaGUuZGVsZXRlKHVybCwgdGhpcy5fbWF0Y2hPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHVybHNFeHBpcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgIGBFeHBpcmVkICR7dXJsc0V4cGlyZWQubGVuZ3RofSBgICtcbiAgICAgICAgICAgIGAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/ICdlbnRyeScgOiAnZW50cmllcyd9IGFuZCByZW1vdmVkIGAgK1xuICAgICAgICAgICAgYCR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID8gJ2l0JyA6ICd0aGVtJ30gZnJvbSB0aGUgYCArXG4gICAgICAgICAgICBgJyR7dGhpcy5fY2FjaGVOYW1lfScgY2FjaGUuYCxcbiAgICAgICAgKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgICBgRXhwaXJlZCB0aGUgZm9sbG93aW5nICR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID8gJ1VSTCcgOiAnVVJMcyd9OmAsXG4gICAgICAgICk7XG4gICAgICAgIHVybHNFeHBpcmVkLmZvckVhY2goKHVybCkgPT4gbG9nZ2VyLmxvZyhgICAgICR7dXJsfWApKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dnZXIuZGVidWcoYENhY2hlIGV4cGlyYXRpb24gcmFuIGFuZCBmb3VuZCBubyBlbnRyaWVzIHRvIHJlbW92ZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fcmVydW5SZXF1ZXN0ZWQpIHtcbiAgICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICBkb250V2FpdEZvcih0aGlzLmV4cGlyZUVudHJpZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgdGltZXN0YW1wIGZvciB0aGUgZ2l2ZW4gVVJMLiBUaGlzIGVuc3VyZXMgdGhlIHdoZW5cbiAgICogcmVtb3ZpbmcgZW50cmllcyBiYXNlZCBvbiBtYXhpbXVtIGVudHJpZXMsIG1vc3QgcmVjZW50bHkgdXNlZFxuICAgKiBpcyBhY2N1cmF0ZSBvciB3aGVuIGV4cGlyaW5nLCB0aGUgdGltZXN0YW1wIGlzIHVwLXRvLWRhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGFzeW5jIHVwZGF0ZVRpbWVzdGFtcCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzVHlwZSh1cmwsICdzdHJpbmcnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICBmdW5jTmFtZTogJ3VwZGF0ZVRpbWVzdGFtcCcsXG4gICAgICAgIHBhcmFtTmFtZTogJ3VybCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5zZXRUaW1lc3RhbXAodXJsLCBEYXRlLm5vdygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byBjaGVjayBpZiBhIFVSTCBoYXMgZXhwaXJlZCBvciBub3QgYmVmb3JlIGl0J3MgdXNlZC5cbiAgICpcbiAgICogVGhpcyByZXF1aXJlcyBhIGxvb2sgdXAgZnJvbSBJbmRleGVkREIsIHNvIGNhbiBiZSBzbG93LlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIG1ldGhvZCB3aWxsIG5vdCByZW1vdmUgdGhlIGNhY2hlZCBlbnRyeSwgY2FsbFxuICAgKiBgZXhwaXJlRW50cmllcygpYCB0byByZW1vdmUgaW5kZXhlZERCIGFuZCBDYWNoZSBlbnRyaWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBhc3luYyBpc1VSTEV4cGlyZWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIXRoaXMuX21heEFnZVNlY29uZHMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoYGV4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2VgLCB7XG4gICAgICAgICAgbWV0aG9kTmFtZTogJ2lzVVJMRXhwaXJlZCcsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnbWF4QWdlU2Vjb25kcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5nZXRUaW1lc3RhbXAodXJsKTtcbiAgICAgIGNvbnN0IGV4cGlyZU9sZGVyVGhhbiA9IERhdGUubm93KCkgLSB0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMDtcbiAgICAgIHJldHVybiB0aW1lc3RhbXAgIT09IHVuZGVmaW5lZCA/IHRpbWVzdGFtcCA8IGV4cGlyZU9sZGVyVGhhbiA6IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIEluZGV4ZWREQiBvYmplY3Qgc3RvcmUgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGNhY2hlIGV4cGlyYXRpb25cbiAgICogbWV0YWRhdGEuXG4gICAqL1xuICBhc3luYyBkZWxldGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IGF0dGVtcHQgYW5vdGhlciByZXJ1biBpZiB3ZSdyZSBjYWxsZWQgaW4gdGhlIG1pZGRsZSBvZlxuICAgIC8vIGEgY2FjaGUgZXhwaXJhdGlvbi5cbiAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IGZhbHNlO1xuICAgIGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmV4cGlyZUVudHJpZXMoSW5maW5pdHkpOyAvLyBFeHBpcmVzIGFsbC5cbiAgfVxufVxuXG5leHBvcnQge0NhY2hlRXhwaXJhdGlvbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuZGVjbGFyZSBsZXQgcmVnaXN0cmF0aW9uOiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlTmFtZURldGFpbHMge1xuICBnb29nbGVBbmFseXRpY3M6IHN0cmluZztcbiAgcHJlY2FjaGU6IHN0cmluZztcbiAgcHJlZml4OiBzdHJpbmc7XG4gIHJ1bnRpbWU6IHN0cmluZztcbiAgc3VmZml4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFydGlhbENhY2hlTmFtZURldGFpbHMge1xuICBbcHJvcE5hbWU6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQ2FjaGVOYW1lRGV0YWlsc1Byb3AgPVxuICB8ICdnb29nbGVBbmFseXRpY3MnXG4gIHwgJ3ByZWNhY2hlJ1xuICB8ICdwcmVmaXgnXG4gIHwgJ3J1bnRpbWUnXG4gIHwgJ3N1ZmZpeCc7XG5cbmNvbnN0IF9jYWNoZU5hbWVEZXRhaWxzOiBDYWNoZU5hbWVEZXRhaWxzID0ge1xuICBnb29nbGVBbmFseXRpY3M6ICdnb29nbGVBbmFseXRpY3MnLFxuICBwcmVjYWNoZTogJ3ByZWNhY2hlLXYyJyxcbiAgcHJlZml4OiAnd29ya2JveCcsXG4gIHJ1bnRpbWU6ICdydW50aW1lJyxcbiAgc3VmZml4OiB0eXBlb2YgcmVnaXN0cmF0aW9uICE9PSAndW5kZWZpbmVkJyA/IHJlZ2lzdHJhdGlvbi5zY29wZSA6ICcnLFxufTtcblxuY29uc3QgX2NyZWF0ZUNhY2hlTmFtZSA9IChjYWNoZU5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBbX2NhY2hlTmFtZURldGFpbHMucHJlZml4LCBjYWNoZU5hbWUsIF9jYWNoZU5hbWVEZXRhaWxzLnN1ZmZpeF1cbiAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMClcbiAgICAuam9pbignLScpO1xufTtcblxuY29uc3QgZWFjaENhY2hlTmFtZURldGFpbCA9IChmbjogKGtleTogQ2FjaGVOYW1lRGV0YWlsc1Byb3ApID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoX2NhY2hlTmFtZURldGFpbHMpKSB7XG4gICAgZm4oa2V5IGFzIENhY2hlTmFtZURldGFpbHNQcm9wKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNhY2hlTmFtZXMgPSB7XG4gIHVwZGF0ZURldGFpbHM6IChkZXRhaWxzOiBQYXJ0aWFsQ2FjaGVOYW1lRGV0YWlscyk6IHZvaWQgPT4ge1xuICAgIGVhY2hDYWNoZU5hbWVEZXRhaWwoKGtleTogQ2FjaGVOYW1lRGV0YWlsc1Byb3ApOiB2b2lkID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZGV0YWlsc1trZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICBfY2FjaGVOYW1lRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBnZXRHb29nbGVBbmFseXRpY3NOYW1lOiAodXNlckNhY2hlTmFtZT86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5nb29nbGVBbmFseXRpY3MpO1xuICB9LFxuICBnZXRQcmVjYWNoZU5hbWU6ICh1c2VyQ2FjaGVOYW1lPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLnByZWNhY2hlKTtcbiAgfSxcbiAgZ2V0UHJlZml4OiAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gX2NhY2hlTmFtZURldGFpbHMucHJlZml4O1xuICB9LFxuICBnZXRSdW50aW1lTmFtZTogKHVzZXJDYWNoZU5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMucnVudGltZSk7XG4gIH0sXG4gIGdldFN1ZmZpeDogKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIF9jYWNoZU5hbWVEZXRhaWxzLnN1ZmZpeDtcbiAgfSxcbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLy8gQ2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIHdoZW5ldmVyIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbi8vIENhbid0IGNoYW5nZSBGdW5jdGlvbiB0eXBlIHJpZ2h0IG5vdy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5jb25zdCBxdW90YUVycm9yQ2FsbGJhY2tzOiBTZXQ8RnVuY3Rpb24+ID0gbmV3IFNldCgpO1xuXG5leHBvcnQge3F1b3RhRXJyb3JDYWxsYmFja3N9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJy4vX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge3F1b3RhRXJyb3JDYWxsYmFja3N9IGZyb20gJy4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBBZGRzIGEgZnVuY3Rpb24gdG8gdGhlIHNldCBvZiBxdW90YUVycm9yQ2FsbGJhY2tzIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpZlxuICogdGhlcmUncyBhIHF1b3RhIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jb3JlXG4gKi9cbi8vIENhbid0IGNoYW5nZSBGdW5jdGlvbiB0eXBlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZnVuY3Rpb24gcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2soY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0IS5pc1R5cGUoY2FsbGJhY2ssICdmdW5jdGlvbicsIHtcbiAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNvcmUnLFxuICAgICAgZnVuY05hbWU6ICdyZWdpc3RlcicsXG4gICAgICBwYXJhbU5hbWU6ICdjYWxsYmFjaycsXG4gICAgfSk7XG4gIH1cblxuICBxdW90YUVycm9yQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZXIubG9nKCdSZWdpc3RlcmVkIGEgY2FsbGJhY2sgdG8gcmVzcG9uZCB0byBxdW90YSBlcnJvcnMuJywgY2FsbGJhY2spO1xuICB9XG59XG5cbmV4cG9ydCB7cmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2t9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtjYWNoZU5hbWVzfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQge2RvbnRXYWl0Rm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZG9udFdhaXRGb3IuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7cmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2t9IGZyb20gJ3dvcmtib3gtY29yZS9yZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjay5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge1dvcmtib3hQbHVnaW59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7Q2FjaGVFeHBpcmF0aW9ufSBmcm9tICcuL0NhY2hlRXhwaXJhdGlvbi5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwaXJhdGlvblBsdWdpbk9wdGlvbnMge1xuICBtYXhFbnRyaWVzPzogbnVtYmVyO1xuICBtYXhBZ2VTZWNvbmRzPzogbnVtYmVyO1xuICBtYXRjaE9wdGlvbnM/OiBDYWNoZVF1ZXJ5T3B0aW9ucztcbiAgcHVyZ2VPblF1b3RhRXJyb3I/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFRoaXMgcGx1Z2luIGNhbiBiZSB1c2VkIGluIGEgYHdvcmtib3gtc3RyYXRlZ3lgIHRvIHJlZ3VsYXJseSBlbmZvcmNlIGFcbiAqIGxpbWl0IG9uIHRoZSBhZ2UgYW5kIC8gb3IgdGhlIG51bWJlciBvZiBjYWNoZWQgcmVxdWVzdHMuXG4gKlxuICogSXQgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGB3b3JrYm94LXN0cmF0ZWd5YCBpbnN0YW5jZXMgdGhhdCBoYXZlIGFcbiAqIFtjdXN0b20gYGNhY2hlTmFtZWAgcHJvcGVydHkgc2V0XSgvd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2NvbmZpZ3VyZS13b3JrYm94I2N1c3RvbV9jYWNoZV9uYW1lc19pbl9zdHJhdGVnaWVzKS5cbiAqIEluIG90aGVyIHdvcmRzLCBpdCBjYW4ndCBiZSB1c2VkIHRvIGV4cGlyZSBlbnRyaWVzIGluIHN0cmF0ZWd5IHRoYXQgdXNlcyB0aGVcbiAqIGRlZmF1bHQgcnVudGltZSBjYWNoZSBuYW1lLlxuICpcbiAqIFdoZW5ldmVyIGEgY2FjaGVkIHJlc3BvbnNlIGlzIHVzZWQgb3IgdXBkYXRlZCwgdGhpcyBwbHVnaW4gd2lsbCBsb29rXG4gKiBhdCB0aGUgYXNzb2NpYXRlZCBjYWNoZSBhbmQgcmVtb3ZlIGFueSBvbGQgb3IgZXh0cmEgcmVzcG9uc2VzLlxuICpcbiAqIFdoZW4gdXNpbmcgYG1heEFnZVNlY29uZHNgLCByZXNwb25zZXMgbWF5IGJlIHVzZWQgKm9uY2UqIGFmdGVyIGV4cGlyaW5nXG4gKiBiZWNhdXNlIHRoZSBleHBpcmF0aW9uIGNsZWFuIHVwIHdpbGwgbm90IGhhdmUgb2NjdXJyZWQgdW50aWwgKmFmdGVyKiB0aGVcbiAqIGNhY2hlZCByZXNwb25zZSBoYXMgYmVlbiB1c2VkLiBJZiB0aGUgcmVzcG9uc2UgaGFzIGEgXCJEYXRlXCIgaGVhZGVyLCB0aGVuXG4gKiBhIGxpZ2h0IHdlaWdodCBleHBpcmF0aW9uIGNoZWNrIGlzIHBlcmZvcm1lZCBhbmQgdGhlIHJlc3BvbnNlIHdpbGwgbm90IGJlXG4gKiB1c2VkIGltbWVkaWF0ZWx5LlxuICpcbiAqIFdoZW4gdXNpbmcgYG1heEVudHJpZXNgLCB0aGUgZW50cnkgbGVhc3QtcmVjZW50bHkgcmVxdWVzdGVkIHdpbGwgYmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgY2FjaGUgZmlyc3QuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtZXhwaXJhdGlvblxuICovXG5jbGFzcyBFeHBpcmF0aW9uUGx1Z2luIGltcGxlbWVudHMgV29ya2JveFBsdWdpbiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvbmZpZzogRXhwaXJhdGlvblBsdWdpbk9wdGlvbnM7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21heEFnZVNlY29uZHM/OiBudW1iZXI7XG4gIHByaXZhdGUgX2NhY2hlRXhwaXJhdGlvbnM6IE1hcDxzdHJpbmcsIENhY2hlRXhwaXJhdGlvbj47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXhwaXJhdGlvblBsdWdpbk9wdGlvbnN9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhFbnRyaWVzXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZW50cmllcyB0byBjYWNoZS5cbiAgICogRW50cmllcyB1c2VkIHRoZSBsZWFzdCB3aWxsIGJlIHJlbW92ZWQgYXMgdGhlIG1heGltdW0gaXMgcmVhY2hlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4QWdlU2Vjb25kc10gVGhlIG1heGltdW0gYWdlIG9mIGFuIGVudHJ5IGJlZm9yZVxuICAgKiBpdCdzIHRyZWF0ZWQgYXMgc3RhbGUgYW5kIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnLm1hdGNoT3B0aW9uc10gVGhlIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUvZGVsZXRlI1BhcmFtZXRlcnMpXG4gICAqIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gY2FsbGluZyBgZGVsZXRlKClgIG9uIHRoZSBjYWNoZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbY29uZmlnLnB1cmdlT25RdW90YUVycm9yXSBXaGV0aGVyIHRvIG9wdCB0aGlzIGNhY2hlIGluIHRvXG4gICAqIGF1dG9tYXRpYyBkZWxldGlvbiBpZiB0aGUgYXZhaWxhYmxlIHN0b3JhZ2UgcXVvdGEgaGFzIGJlZW4gZXhjZWVkZWQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IEV4cGlyYXRpb25QbHVnaW5PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoY29uZmlnLm1heEVudHJpZXMgfHwgY29uZmlnLm1heEFnZVNlY29uZHMpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCcsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5tYXhFbnRyaWVzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKGNvbmZpZy5tYXhFbnRyaWVzLCAnbnVtYmVyJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEVudHJpZXMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKGNvbmZpZy5tYXhBZ2VTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEFnZVNlY29uZHMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fbWF4QWdlU2Vjb25kcyA9IGNvbmZpZy5tYXhBZ2VTZWNvbmRzO1xuICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgPSBuZXcgTWFwKCk7XG5cbiAgICBpZiAoY29uZmlnLnB1cmdlT25RdW90YUVycm9yKSB7XG4gICAgICByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjaygoKSA9PiB0aGlzLmRlbGV0ZUNhY2hlQW5kTWV0YWRhdGEoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgc2ltcGxlIGhlbHBlciBtZXRob2QgdG8gcmV0dXJuIGEgQ2FjaGVFeHBpcmF0aW9uIGluc3RhbmNlIGZvciBhIGdpdmVuXG4gICAqIGNhY2hlIG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWVcbiAgICogQHJldHVybiB7Q2FjaGVFeHBpcmF0aW9ufVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0Q2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZTogc3RyaW5nKTogQ2FjaGVFeHBpcmF0aW9uIHtcbiAgICBpZiAoY2FjaGVOYW1lID09PSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKCkpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2V4cGlyZS1jdXN0b20tY2FjaGVzLW9ubHknKTtcbiAgICB9XG5cbiAgICBsZXQgY2FjaGVFeHBpcmF0aW9uID0gdGhpcy5fY2FjaGVFeHBpcmF0aW9ucy5nZXQoY2FjaGVOYW1lKTtcbiAgICBpZiAoIWNhY2hlRXhwaXJhdGlvbikge1xuICAgICAgY2FjaGVFeHBpcmF0aW9uID0gbmV3IENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUsIHRoaXMuX2NvbmZpZyk7XG4gICAgICB0aGlzLl9jYWNoZUV4cGlyYXRpb25zLnNldChjYWNoZU5hbWUsIGNhY2hlRXhwaXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZUV4cGlyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogQSBcImxpZmVjeWNsZVwiIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYXV0b21hdGljYWxseSBieSB0aGVcbiAgICogYHdvcmtib3gtc3RyYXRlZ2llc2AgaGFuZGxlcnMgd2hlbiBhIGBSZXNwb25zZWAgaXMgYWJvdXQgdG8gYmUgcmV0dXJuZWRcbiAgICogZnJvbSBhIFtDYWNoZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlKSB0b1xuICAgKiB0aGUgaGFuZGxlci4gSXQgYWxsb3dzIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGluc3BlY3RlZCBmb3IgZnJlc2huZXNzIGFuZFxuICAgKiBwcmV2ZW50cyBpdCBmcm9tIGJlaW5nIHVzZWQgaWYgdGhlIGBSZXNwb25zZWAncyBgRGF0ZWAgaGVhZGVyIHZhbHVlIGlzXG4gICAqIG9sZGVyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgYG1heEFnZVNlY29uZHNgLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdGhlIHJlc3BvbnNlIGlzIGluLlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLmNhY2hlZFJlc3BvbnNlIFRoZSBgUmVzcG9uc2VgIG9iamVjdCB0aGF0J3MgYmVlblxuICAgKiAgICAgcmVhZCBmcm9tIGEgY2FjaGUgYW5kIHdob3NlIGZyZXNobmVzcyBzaG91bGQgYmUgY2hlY2tlZC5cbiAgICogQHJldHVybiB7UmVzcG9uc2V9IEVpdGhlciB0aGUgYGNhY2hlZFJlc3BvbnNlYCwgaWYgaXQnc1xuICAgKiAgICAgZnJlc2gsIG9yIGBudWxsYCBpZiB0aGUgYFJlc3BvbnNlYCBpcyBvbGRlciB0aGFuIGBtYXhBZ2VTZWNvbmRzYC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZDogV29ya2JveFBsdWdpblsnY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkJ10gPSBhc3luYyAoe1xuICAgIGV2ZW50LFxuICAgIHJlcXVlc3QsXG4gICAgY2FjaGVOYW1lLFxuICAgIGNhY2hlZFJlc3BvbnNlLFxuICB9KSA9PiB7XG4gICAgaWYgKCFjYWNoZWRSZXNwb25zZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGcmVzaCA9IHRoaXMuX2lzUmVzcG9uc2VEYXRlRnJlc2goY2FjaGVkUmVzcG9uc2UpO1xuXG4gICAgLy8gRXhwaXJlIGVudHJpZXMgdG8gZW5zdXJlIHRoYXQgZXZlbiBpZiB0aGUgZXhwaXJhdGlvbiBkYXRlIGhhc1xuICAgIC8vIGV4cGlyZWQsIGl0J2xsIG9ubHkgYmUgdXNlZCBvbmNlLlxuICAgIGNvbnN0IGNhY2hlRXhwaXJhdGlvbiA9IHRoaXMuX2dldENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUpO1xuICAgIGRvbnRXYWl0Rm9yKGNhY2hlRXhwaXJhdGlvbi5leHBpcmVFbnRyaWVzKCkpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBtZXRhZGF0YSBmb3IgdGhlIHJlcXVlc3QgVVJMIHRvIHRoZSBjdXJyZW50IHRpbWVzdGFtcCxcbiAgICAvLyBidXQgZG9uJ3QgYGF3YWl0YCBpdCBhcyB3ZSBkb24ndCB3YW50IHRvIGJsb2NrIHRoZSByZXNwb25zZS5cbiAgICBjb25zdCB1cGRhdGVUaW1lc3RhbXBEb25lID0gY2FjaGVFeHBpcmF0aW9uLnVwZGF0ZVRpbWVzdGFtcChyZXF1ZXN0LnVybCk7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBldmVudC53YWl0VW50aWwodXBkYXRlVGltZXN0YW1wRG9uZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIFRoZSBldmVudCBtYXkgbm90IGJlIGEgZmV0Y2ggZXZlbnQ7IG9ubHkgbG9nIHRoZSBVUkwgaWYgaXQgaXMuXG4gICAgICAgICAgaWYgKCdyZXF1ZXN0JyBpbiBldmVudCkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXG4gICAgICAgICAgICAgIGBVbmFibGUgdG8gZW5zdXJlIHNlcnZpY2Ugd29ya2VyIHN0YXlzIGFsaXZlIHdoZW4gYCArXG4gICAgICAgICAgICAgICAgYHVwZGF0aW5nIGNhY2hlIGVudHJ5IGZvciBgICtcbiAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwoKGV2ZW50IGFzIEZldGNoRXZlbnQpLnJlcXVlc3QudXJsKX0nLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc0ZyZXNoID8gY2FjaGVkUmVzcG9uc2UgOiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBjYWNoZWRSZXNwb25zZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfaXNSZXNwb25zZURhdGVGcmVzaChjYWNoZWRSZXNwb25zZTogUmVzcG9uc2UpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX21heEFnZVNlY29uZHMpIHtcbiAgICAgIC8vIFdlIGFyZW4ndCBleHBpcmluZyBieSBhZ2UsIHNvIHJldHVybiB0cnVlLCBpdCdzIGZyZXNoXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgJ2RhdGUnIGhlYWRlciB3aWxsIHN1ZmZpY2UgYSBxdWljayBleHBpcmF0aW9uIGNoZWNrLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9zdy10b29sYm94L2lzc3Vlcy8xNjQgZm9yXG4gICAgLy8gZGlzY3Vzc2lvbi5cbiAgICBjb25zdCBkYXRlSGVhZGVyVGltZXN0YW1wID0gdGhpcy5fZ2V0RGF0ZUhlYWRlclRpbWVzdGFtcChjYWNoZWRSZXNwb25zZSk7XG4gICAgaWYgKGRhdGVIZWFkZXJUaW1lc3RhbXAgPT09IG51bGwpIHtcbiAgICAgIC8vIFVuYWJsZSB0byBwYXJzZSBkYXRlLCBzbyBhc3N1bWUgaXQncyBmcmVzaC5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCBoZWFkZXJUaW1lLCB0aGVuIG91ciByZXNwb25zZSBpcyBmcmVzaCBpZmYgdGhlXG4gICAgLy8gaGVhZGVyVGltZSBwbHVzIG1heEFnZVNlY29uZHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IHRpbWUuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gZGF0ZUhlYWRlclRpbWVzdGFtcCA+PSBub3cgLSB0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGV4dHJhY3QgdGhlIGRhdGEgaGVhZGVyIGFuZCBwYXJzZSBpdCBpbnRvIGEgdXNlZnVsXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBjYWNoZWRSZXNwb25zZVxuICAgKiBAcmV0dXJuIHtudW1iZXJ8bnVsbH1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2dldERhdGVIZWFkZXJUaW1lc3RhbXAoY2FjaGVkUmVzcG9uc2U6IFJlc3BvbnNlKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgaWYgKCFjYWNoZWRSZXNwb25zZS5oZWFkZXJzLmhhcygnZGF0ZScpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlSGVhZGVyID0gY2FjaGVkUmVzcG9uc2UuaGVhZGVycy5nZXQoJ2RhdGUnKTtcbiAgICBjb25zdCBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZUhlYWRlciEpO1xuICAgIGNvbnN0IGhlYWRlclRpbWUgPSBwYXJzZWREYXRlLmdldFRpbWUoKTtcblxuICAgIC8vIElmIHRoZSBEYXRlIGhlYWRlciB3YXMgaW52YWxpZCBmb3Igc29tZSByZWFzb24sIHBhcnNlZERhdGUuZ2V0VGltZSgpXG4gICAgLy8gd2lsbCByZXR1cm4gTmFOLlxuICAgIGlmIChpc05hTihoZWFkZXJUaW1lKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlclRpbWU7XG4gIH1cblxuICAvKipcbiAgICogQSBcImxpZmVjeWNsZVwiIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYXV0b21hdGljYWxseSBieSB0aGVcbiAgICogYHdvcmtib3gtc3RyYXRlZ2llc2AgaGFuZGxlcnMgd2hlbiBhbiBlbnRyeSBpcyBhZGRlZCB0byBhIGNhY2hlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdGhhdCB3YXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBUaGUgUmVxdWVzdCBmb3IgdGhlIGNhY2hlZCBlbnRyeS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhY2hlRGlkVXBkYXRlOiBXb3JrYm94UGx1Z2luWydjYWNoZURpZFVwZGF0ZSddID0gYXN5bmMgKHtcbiAgICBjYWNoZU5hbWUsXG4gICAgcmVxdWVzdCxcbiAgfSkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzVHlwZShjYWNoZU5hbWUsICdzdHJpbmcnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICBmdW5jTmFtZTogJ2NhY2hlRGlkVXBkYXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnY2FjaGVOYW1lJyxcbiAgICAgIH0pO1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgIGZ1bmNOYW1lOiAnY2FjaGVEaWRVcGRhdGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlRXhwaXJhdGlvbiA9IHRoaXMuX2dldENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUpO1xuICAgIGF3YWl0IGNhY2hlRXhwaXJhdGlvbi51cGRhdGVUaW1lc3RhbXAocmVxdWVzdC51cmwpO1xuICAgIGF3YWl0IGNhY2hlRXhwaXJhdGlvbi5leHBpcmVFbnRyaWVzKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBoZWxwZXIgbWV0aG9kIHRoYXQgcGVyZm9ybXMgdHdvIG9wZXJhdGlvbnM6XG4gICAqXG4gICAqIC0gRGVsZXRlcyAqYWxsKiB0aGUgdW5kZXJseWluZyBDYWNoZSBpbnN0YW5jZXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcGx1Z2luXG4gICAqIGluc3RhbmNlLCBieSBjYWxsaW5nIGNhY2hlcy5kZWxldGUoKSBvbiB5b3VyIGJlaGFsZi5cbiAgICogLSBEZWxldGVzIHRoZSBtZXRhZGF0YSBmcm9tIEluZGV4ZWREQiB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgZXhwaXJhdGlvblxuICAgKiBkZXRhaWxzIGZvciBlYWNoIENhY2hlIGluc3RhbmNlLlxuICAgKlxuICAgKiBXaGVuIHVzaW5nIGNhY2hlIGV4cGlyYXRpb24sIGNhbGxpbmcgdGhpcyBtZXRob2QgaXMgcHJlZmVyYWJsZSB0byBjYWxsaW5nXG4gICAqIGBjYWNoZXMuZGVsZXRlKClgIGRpcmVjdGx5LCBzaW5jZSB0aGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIEluZGV4ZWREQlxuICAgKiBtZXRhZGF0YSBpcyBhbHNvIGNsZWFubHkgcmVtb3ZlZCBhbmQgb3BlbiBJbmRleGVkREIgaW5zdGFuY2VzIGFyZSBkZWxldGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgeW91J3JlICpub3QqIHVzaW5nIGNhY2hlIGV4cGlyYXRpb24gZm9yIGEgZ2l2ZW4gY2FjaGUsIGNhbGxpbmdcbiAgICogYGNhY2hlcy5kZWxldGUoKWAgYW5kIHBhc3NpbmcgaW4gdGhlIGNhY2hlJ3MgbmFtZSBzaG91bGQgYmUgc3VmZmljaWVudC5cbiAgICogVGhlcmUgaXMgbm8gV29ya2JveC1zcGVjaWZpYyBtZXRob2QgbmVlZGVkIGZvciBjbGVhbnVwIGluIHRoYXQgY2FzZS5cbiAgICovXG4gIGFzeW5jIGRlbGV0ZUNhY2hlQW5kTWV0YWRhdGEoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gRG8gdGhpcyBvbmUgYXQgYSB0aW1lIGluc3RlYWQgb2YgYWxsIGF0IG9uY2UgdmlhIGBQcm9taXNlLmFsbCgpYCB0b1xuICAgIC8vIHJlZHVjZSB0aGUgY2hhbmNlIG9mIGluY29uc2lzdGVuY3kgaWYgYSBwcm9taXNlIHJlamVjdHMuXG4gICAgZm9yIChjb25zdCBbY2FjaGVOYW1lLCBjYWNoZUV4cGlyYXRpb25dIG9mIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMpIHtcbiAgICAgIGF3YWl0IHNlbGYuY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpO1xuICAgICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLmRlbGV0ZSgpO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgfVxufVxuXG5leHBvcnQge0V4cGlyYXRpb25QbHVnaW59O1xuIiwgIi8vIEB0cy1pZ25vcmVcbnRyeXtzZWxmWyd3b3JrYm94OnJvdXRpbmc6Ny4wLjAnXSYmXygpfWNhdGNoKGUpe30iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuZXhwb3J0IHR5cGUgSFRUUE1ldGhvZCA9ICdERUxFVEUnIHwgJ0dFVCcgfCAnSEVBRCcgfCAnUEFUQ0gnIHwgJ1BPU1QnIHwgJ1BVVCc7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgSFRUUCBtZXRob2QsICdHRVQnLCB1c2VkIHdoZW4gdGhlcmUncyBubyBzcGVjaWZpYyBtZXRob2RcbiAqIGNvbmZpZ3VyZWQgZm9yIGEgcm91dGUuXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZGVmYXVsdE1ldGhvZDogSFRUUE1ldGhvZCA9ICdHRVQnO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIHZhbGlkIEhUVFAgbWV0aG9kcyBhc3NvY2lhdGVkIHdpdGggcmVxdWVzdHMgdGhhdCBjb3VsZCBiZSByb3V0ZWQuXG4gKlxuICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkTWV0aG9kczogSFRUUE1ldGhvZFtdID0gW1xuICAnREVMRVRFJyxcbiAgJ0dFVCcsXG4gICdIRUFEJyxcbiAgJ1BBVENIJyxcbiAgJ1BPU1QnLFxuICAnUFVUJyxcbl07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge1JvdXRlSGFuZGxlciwgUm91dGVIYW5kbGVyT2JqZWN0fSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCl8T2JqZWN0fSBoYW5kbGVyIEVpdGhlciBhIGZ1bmN0aW9uLCBvciBhbiBvYmplY3Qgd2l0aCBhXG4gKiAnaGFuZGxlJyBtZXRob2QuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGEgaGFuZGxlIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGFuZGxlciA9IChoYW5kbGVyOiBSb3V0ZUhhbmRsZXIpOiBSb3V0ZUhhbmRsZXJPYmplY3QgPT4ge1xuICBpZiAoaGFuZGxlciAmJiB0eXBlb2YgaGFuZGxlciA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5oYXNNZXRob2QoaGFuZGxlciwgJ2hhbmRsZScsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGVyO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzVHlwZShoYW5kbGVyLCAnZnVuY3Rpb24nLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdoYW5kbGVyJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge2hhbmRsZTogaGFuZGxlcn07XG4gIH1cbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge0hUVFBNZXRob2QsIGRlZmF1bHRNZXRob2QsIHZhbGlkTWV0aG9kc30gZnJvbSAnLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHtub3JtYWxpemVIYW5kbGVyfSBmcm9tICcuL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIuanMnO1xuaW1wb3J0IHtcbiAgUm91dGVIYW5kbGVyLFxuICBSb3V0ZUhhbmRsZXJPYmplY3QsXG4gIFJvdXRlTWF0Y2hDYWxsYmFjayxcbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQSBgUm91dGVgIGNvbnNpc3RzIG9mIGEgcGFpciBvZiBjYWxsYmFjayBmdW5jdGlvbnMsIFwibWF0Y2hcIiBhbmQgXCJoYW5kbGVyXCIuXG4gKiBUaGUgXCJtYXRjaFwiIGNhbGxiYWNrIGRldGVybWluZSBpZiBhIHJvdXRlIHNob3VsZCBiZSB1c2VkIHRvIFwiaGFuZGxlXCIgYVxuICogcmVxdWVzdCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUgaWYgaXQgY2FuLiBUaGUgXCJoYW5kbGVyXCIgY2FsbGJhY2tcbiAqIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbWF0Y2ggYW5kIHNob3VsZCByZXR1cm4gYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXNcbiAqIHRvIGEgYFJlc3BvbnNlYC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmNsYXNzIFJvdXRlIHtcbiAgaGFuZGxlcjogUm91dGVIYW5kbGVyT2JqZWN0O1xuICBtYXRjaDogUm91dGVNYXRjaENhbGxiYWNrO1xuICBtZXRob2Q6IEhUVFBNZXRob2Q7XG4gIGNhdGNoSGFuZGxlcj86IFJvdXRlSGFuZGxlck9iamVjdDtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIFJvdXRlIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSBtYXRjaFxuICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByb3V0ZSBtYXRjaGVzIGEgZ2l2ZW5cbiAgICogYGZldGNoYCBldmVudCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUuXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzb2x2aW5nIHRvIGEgUmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gICAqIGFnYWluc3QuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBtYXRjaDogUm91dGVNYXRjaENhbGxiYWNrLFxuICAgIGhhbmRsZXI6IFJvdXRlSGFuZGxlcixcbiAgICBtZXRob2Q6IEhUVFBNZXRob2QgPSBkZWZhdWx0TWV0aG9kLFxuICApIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUobWF0Y2gsICdmdW5jdGlvbicsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ21hdGNoJyxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIGFzc2VydCEuaXNPbmVPZihtZXRob2QsIHZhbGlkTWV0aG9kcywge3BhcmFtTmFtZTogJ21ldGhvZCd9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGVzZSB2YWx1ZXMgYXJlIHJlZmVyZW5jZWQgZGlyZWN0bHkgYnkgUm91dGVyIHNvIGNhbm5vdCBiZVxuICAgIC8vIGFsdGVyZWQgYnkgbWluaWZpY2F0b24uXG4gICAgdGhpcy5oYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgICB0aGlzLm1hdGNoID0gbWF0Y2g7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmctaGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBSZXNwb25zZVxuICAgKi9cbiAgc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXI6IFJvdXRlSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuY2F0Y2hIYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgfVxufVxuXG5leHBvcnQge1JvdXRlfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7XG4gIFJvdXRlSGFuZGxlcixcbiAgUm91dGVNYXRjaENhbGxiYWNrLFxuICBSb3V0ZU1hdGNoQ2FsbGJhY2tPcHRpb25zLFxufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQge0hUVFBNZXRob2R9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7Um91dGV9IGZyb20gJy4vUm91dGUuanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIFJlZ0V4cFJvdXRlIG1ha2VzIGl0IGVhc3kgdG8gY3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIGJhc2VkXG4gKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfS5cbiAqXG4gKiBGb3Igc2FtZS1vcmlnaW4gcmVxdWVzdHMgdGhlIFJlZ0V4cCBvbmx5IG5lZWRzIHRvIG1hdGNoIHBhcnQgb2YgdGhlIFVSTC4gRm9yXG4gKiByZXF1ZXN0cyBhZ2FpbnN0IHRoaXJkLXBhcnR5IHNlcnZlcnMsIHlvdSBtdXN0IGRlZmluZSBhIFJlZ0V4cCB0aGF0IG1hdGNoZXNcbiAqIHRoZSBzdGFydCBvZiB0aGUgVVJMLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqIEBleHRlbmRzIHdvcmtib3gtcm91dGluZy5Sb3V0ZVxuICovXG5jbGFzcyBSZWdFeHBSb3V0ZSBleHRlbmRzIFJvdXRlIHtcbiAgLyoqXG4gICAqIElmIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gY29udGFpbnNcbiAgICogW2NhcHR1cmUgZ3JvdXBzXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9SZWdFeHAjZ3JvdXBpbmctYmFjay1yZWZlcmVuY2VzfSxcbiAgICogdGhlIGNhcHR1cmVkIHZhbHVlcyB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAgICoge0BsaW5rIHdvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGBwYXJhbXNgXG4gICAqIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnRXhwIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdCBVUkxzLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgKiBhZ2FpbnN0LlxuICAgKi9cbiAgY29uc3RydWN0b3IocmVnRXhwOiBSZWdFeHAsIGhhbmRsZXI6IFJvdXRlSGFuZGxlciwgbWV0aG9kPzogSFRUUE1ldGhvZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVnRXhwLCBSZWdFeHAsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlZ0V4cFJvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ3BhdHRlcm4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2g6IFJvdXRlTWF0Y2hDYWxsYmFjayA9ICh7dXJsfTogUm91dGVNYXRjaENhbGxiYWNrT3B0aW9ucykgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVnRXhwLmV4ZWModXJsLmhyZWYpO1xuXG4gICAgICAvLyBSZXR1cm4gaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBubyBtYXRjaC5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUmVxdWlyZSB0aGF0IHRoZSBtYXRjaCBzdGFydCBhdCB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSBVUkwgc3RyaW5nXG4gICAgICAvLyBpZiBpdCdzIGEgY3Jvc3Mtb3JpZ2luIHJlcXVlc3QuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yODEgZm9yIHRoZSBjb250ZXh0XG4gICAgICAvLyBiZWhpbmQgdGhpcyBiZWhhdmlvci5cbiAgICAgIGlmICh1cmwub3JpZ2luICE9PSBsb2NhdGlvbi5vcmlnaW4gJiYgcmVzdWx0LmluZGV4ICE9PSAwKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgYFRoZSByZWd1bGFyIGV4cHJlc3Npb24gJyR7cmVnRXhwLnRvU3RyaW5nKCl9JyBvbmx5IHBhcnRpYWxseSBtYXRjaGVkIGAgK1xuICAgICAgICAgICAgICBgYWdhaW5zdCB0aGUgY3Jvc3Mtb3JpZ2luIFVSTCAnJHt1cmwudG9TdHJpbmcoKX0nLiBSZWdFeHBSb3V0ZSdzIHdpbGwgb25seSBgICtcbiAgICAgICAgICAgICAgYGhhbmRsZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgaWYgdGhleSBtYXRjaCB0aGUgZW50aXJlIFVSTC5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSByb3V0ZSBtYXRjaGVzLCBidXQgdGhlcmUgYXJlbid0IGFueSBjYXB0dXJlIGdyb3VwcyBkZWZpbmVkLCB0aGVuXG4gICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIFtdLCB3aGljaCBpcyB0cnV0aHkgYW5kIHRoZXJlZm9yZSBzdWZmaWNpZW50IHRvXG4gICAgICAvLyBpbmRpY2F0ZSBhIG1hdGNoLlxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGNhcHR1cmUgZ3JvdXBzLCB0aGVuIGl0IHdpbGwgcmV0dXJuIHRoZWlyIHZhbHVlcy5cbiAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoMSk7XG4gICAgfTtcblxuICAgIHN1cGVyKG1hdGNoLCBoYW5kbGVyLCBtZXRob2QpO1xuICB9XG59XG5cbmV4cG9ydCB7UmVnRXhwUm91dGV9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7XG4gIFJvdXRlSGFuZGxlcixcbiAgUm91dGVIYW5kbGVyT2JqZWN0LFxuICBSb3V0ZUhhbmRsZXJDYWxsYmFja09wdGlvbnMsXG4gIFJvdXRlTWF0Y2hDYWxsYmFja09wdGlvbnMsXG59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5pbXBvcnQge0hUVFBNZXRob2QsIGRlZmF1bHRNZXRob2R9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7bm9ybWFsaXplSGFuZGxlcn0gZnJvbSAnLi91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzJztcbmltcG9ydCB7Um91dGV9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG50eXBlIFJlcXVlc3RBcmdzID0gc3RyaW5nIHwgW3N0cmluZywgUmVxdWVzdEluaXQ/XTtcblxuaW50ZXJmYWNlIENhY2hlVVJMc01lc3NhZ2VEYXRhIHtcbiAgdHlwZTogc3RyaW5nO1xuICBwYXlsb2FkOiB7XG4gICAgdXJsc1RvQ2FjaGU6IFJlcXVlc3RBcmdzW107XG4gIH07XG59XG5cbi8qKlxuICogVGhlIFJvdXRlciBjYW4gYmUgdXNlZCB0byBwcm9jZXNzIGEgYEZldGNoRXZlbnRgIHVzaW5nIG9uZSBvciBtb3JlXG4gKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfSwgcmVzcG9uZGluZyB3aXRoIGEgYFJlc3BvbnNlYCBpZlxuICogYSBtYXRjaGluZyByb3V0ZSBleGlzdHMuXG4gKlxuICogSWYgbm8gcm91dGUgbWF0Y2hlcyBhIGdpdmVuIGEgcmVxdWVzdCwgdGhlIFJvdXRlciB3aWxsIHVzZSBhIFwiZGVmYXVsdFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkLlxuICpcbiAqIFNob3VsZCB0aGUgbWF0Y2hpbmcgUm91dGUgdGhyb3cgYW4gZXJyb3IsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImNhdGNoXCJcbiAqIGhhbmRsZXIgaWYgb25lIGlzIGRlZmluZWQgdG8gZ3JhY2VmdWxseSBkZWFsIHdpdGggaXNzdWVzIGFuZCByZXNwb25kIHdpdGggYVxuICogUmVxdWVzdC5cbiAqXG4gKiBJZiBhIHJlcXVlc3QgbWF0Y2hlcyBtdWx0aXBsZSByb3V0ZXMsIHRoZSAqKmVhcmxpZXN0KiogcmVnaXN0ZXJlZCByb3V0ZSB3aWxsXG4gKiBiZSB1c2VkIHRvIHJlc3BvbmQgdG8gdGhlIHJlcXVlc3QuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5jbGFzcyBSb3V0ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IF9yb3V0ZXM6IE1hcDxIVFRQTWV0aG9kLCBSb3V0ZVtdPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfZGVmYXVsdEhhbmRsZXJNYXA6IE1hcDxIVFRQTWV0aG9kLCBSb3V0ZUhhbmRsZXJPYmplY3Q+O1xuICBwcml2YXRlIF9jYXRjaEhhbmRsZXI/OiBSb3V0ZUhhbmRsZXJPYmplY3Q7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgbmV3IFJvdXRlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3JvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtNYXA8c3RyaW5nLCBBcnJheTx3b3JrYm94LXJvdXRpbmcuUm91dGU+Pn0gcm91dGVzIEEgYE1hcGAgb2YgSFRUUFxuICAgKiBtZXRob2QgbmFtZSAoJ0dFVCcsIGV0Yy4pIHRvIGFuIGFycmF5IG9mIGFsbCB0aGUgY29ycmVzcG9uZGluZyBgUm91dGVgXG4gICAqIGluc3RhbmNlcyB0aGF0IGFyZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgZ2V0IHJvdXRlcygpOiBNYXA8SFRUUE1ldGhvZCwgUm91dGVbXT4ge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGZldGNoIGV2ZW50IGxpc3RlbmVyIHRvIHJlc3BvbmQgdG8gZXZlbnRzIHdoZW4gYSByb3V0ZSBtYXRjaGVzXG4gICAqIHRoZSBldmVudCdzIHJlcXVlc3QuXG4gICAqL1xuICBhZGRGZXRjaExpc3RlbmVyKCk6IHZvaWQge1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKChldmVudDogRmV0Y2hFdmVudCkgPT4ge1xuICAgICAgY29uc3Qge3JlcXVlc3R9ID0gZXZlbnQ7XG4gICAgICBjb25zdCByZXNwb25zZVByb21pc2UgPSB0aGlzLmhhbmRsZVJlcXVlc3Qoe3JlcXVlc3QsIGV2ZW50fSk7XG4gICAgICBpZiAocmVzcG9uc2VQcm9taXNlKSB7XG4gICAgICAgIGV2ZW50LnJlc3BvbmRXaXRoKHJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICB9XG4gICAgfSkgYXMgRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1lc3NhZ2UgZXZlbnQgbGlzdGVuZXIgZm9yIFVSTHMgdG8gY2FjaGUgZnJvbSB0aGUgd2luZG93LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB0byBjYWNoZSByZXNvdXJjZXMgbG9hZGVkIG9uIHRoZSBwYWdlIHByaW9yIHRvIHdoZW4gdGhlXG4gICAqIHNlcnZpY2Ugd29ya2VyIHN0YXJ0ZWQgY29udHJvbGxpbmcgaXQuXG4gICAqXG4gICAqIFRoZSBmb3JtYXQgb2YgdGhlIG1lc3NhZ2UgZGF0YSBzZW50IGZyb20gdGhlIHdpbmRvdyBzaG91bGQgYmUgYXMgZm9sbG93cy5cbiAgICogV2hlcmUgdGhlIGB1cmxzVG9DYWNoZWAgYXJyYXkgbWF5IGNvbnNpc3Qgb2YgVVJMIHN0cmluZ3Mgb3IgYW4gYXJyYXkgb2ZcbiAgICogVVJMIHN0cmluZyArIGByZXF1ZXN0SW5pdGAgb2JqZWN0ICh0aGUgc2FtZSBhcyB5b3UnZCBwYXNzIHRvIGBmZXRjaCgpYCkuXG4gICAqXG4gICAqIGBgYFxuICAgKiB7XG4gICAqICAgdHlwZTogJ0NBQ0hFX1VSTFMnLFxuICAgKiAgIHBheWxvYWQ6IHtcbiAgICogICAgIHVybHNUb0NhY2hlOiBbXG4gICAqICAgICAgICcuL3NjcmlwdDEuanMnLFxuICAgKiAgICAgICAnLi9zY3JpcHQyLmpzJyxcbiAgICogICAgICAgWycuL3NjcmlwdDMuanMnLCB7bW9kZTogJ25vLWNvcnMnfV0sXG4gICAqICAgICBdLFxuICAgKiAgIH0sXG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBhZGRDYWNoZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoKGV2ZW50OiBFeHRlbmRhYmxlTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAvLyBldmVudC5kYXRhIGlzIHR5cGUgJ2FueSdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgIGlmIChldmVudC5kYXRhICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0NBQ0hFX1VSTFMnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgICAgY29uc3Qge3BheWxvYWR9OiBDYWNoZVVSTHNNZXNzYWdlRGF0YSA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoYENhY2hpbmcgVVJMcyBmcm9tIHRoZSB3aW5kb3dgLCBwYXlsb2FkLnVybHNUb0NhY2hlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RQcm9taXNlcyA9IFByb21pc2UuYWxsKFxuICAgICAgICAgIHBheWxvYWQudXJsc1RvQ2FjaGUubWFwKChlbnRyeTogc3RyaW5nIHwgW3N0cmluZywgUmVxdWVzdEluaXQ/XSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgZW50cnkgPSBbZW50cnldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoLi4uZW50cnkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCh7cmVxdWVzdCwgZXZlbnR9KTtcblxuICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBUeXBlU2NyaXB0IGVycm9ycyB3aXRob3V0IHRoaXMgdHlwZWNhc3QgZm9yXG4gICAgICAgICAgICAvLyBzb21lIHJlYXNvbiAocHJvYmFibHkgYSBidWcpLiBUaGUgcmVhbCB0eXBlIGhlcmUgc2hvdWxkIHdvcmsgYnV0XG4gICAgICAgICAgICAvLyBkb2Vzbid0OiBgQXJyYXk8UHJvbWlzZTxSZXNwb25zZT4gfCB1bmRlZmluZWQ+YC5cbiAgICAgICAgICB9KSBhcyBhbnlbXSxcbiAgICAgICAgKTsgLy8gVHlwZVNjcmlwdFxuXG4gICAgICAgIGV2ZW50LndhaXRVbnRpbChyZXF1ZXN0UHJvbWlzZXMpO1xuXG4gICAgICAgIC8vIElmIGEgTWVzc2FnZUNoYW5uZWwgd2FzIHVzZWQsIHJlcGx5IHRvIHRoZSBtZXNzYWdlIG9uIHN1Y2Nlc3MuXG4gICAgICAgIGlmIChldmVudC5wb3J0cyAmJiBldmVudC5wb3J0c1swXSkge1xuICAgICAgICAgIHZvaWQgcmVxdWVzdFByb21pc2VzLnRoZW4oKCkgPT4gZXZlbnQucG9ydHNbMF0ucG9zdE1lc3NhZ2UodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgYXMgRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHJvdXRpbmcgcnVsZXMgdG8gYSBGZXRjaEV2ZW50IG9iamVjdCB0byBnZXQgYSBSZXNwb25zZSBmcm9tIGFuXG4gICAqIGFwcHJvcHJpYXRlIFJvdXRlJ3MgaGFuZGxlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gaGFuZGxlLlxuICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlXG4gICAqICAgICByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPnx1bmRlZmluZWR9IEEgcHJvbWlzZSBpcyByZXR1cm5lZCBpZiBhXG4gICAqICAgICByZWdpc3RlcmVkIHJvdXRlIGNhbiBoYW5kbGUgdGhlIHJlcXVlc3QuIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nXG4gICAqICAgICByb3V0ZSBhbmQgdGhlcmUncyBubyBgZGVmYXVsdEhhbmRsZXJgLCBgdW5kZWZpbmVkYCBpcyByZXR1cm5lZC5cbiAgICovXG4gIGhhbmRsZVJlcXVlc3Qoe1xuICAgIHJlcXVlc3QsXG4gICAgZXZlbnQsXG4gIH06IHtcbiAgICByZXF1ZXN0OiBSZXF1ZXN0O1xuICAgIGV2ZW50OiBFeHRlbmRhYmxlRXZlbnQ7XG4gIH0pOiBQcm9taXNlPFJlc3BvbnNlPiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZVJlcXVlc3QnLFxuICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLnJlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgaWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgYFdvcmtib3ggUm91dGVyIG9ubHkgc3VwcG9ydHMgVVJMcyB0aGF0IHN0YXJ0IHdpdGggJ2h0dHAnLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2FtZU9yaWdpbiA9IHVybC5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbjtcbiAgICBjb25zdCB7cGFyYW1zLCByb3V0ZX0gPSB0aGlzLmZpbmRNYXRjaGluZ1JvdXRlKHtcbiAgICAgIGV2ZW50LFxuICAgICAgcmVxdWVzdCxcbiAgICAgIHNhbWVPcmlnaW4sXG4gICAgICB1cmwsXG4gICAgfSk7XG4gICAgbGV0IGhhbmRsZXIgPSByb3V0ZSAmJiByb3V0ZS5oYW5kbGVyO1xuXG4gICAgY29uc3QgZGVidWdNZXNzYWdlcyA9IFtdO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goW2BGb3VuZCBhIHJvdXRlIHRvIGhhbmRsZSB0aGlzIHJlcXVlc3Q6YCwgcm91dGVdKTtcblxuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFtcbiAgICAgICAgICAgIGBQYXNzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1zIHRvIHRoZSByb3V0ZSdzIGhhbmRsZXI6YCxcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBoYW5kbGVyIGJlY2F1c2UgdGhlcmUgd2FzIG5vIG1hdGNoaW5nIHJvdXRlLCB0aGVuXG4gICAgLy8gZmFsbCBiYWNrIHRvIGRlZmF1bHRIYW5kbGVyIGlmIHRoYXQncyBkZWZpbmVkLlxuICAgIGNvbnN0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kIGFzIEhUVFBNZXRob2Q7XG4gICAgaWYgKCFoYW5kbGVyICYmIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLmhhcyhtZXRob2QpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goXG4gICAgICAgICAgYEZhaWxlZCB0byBmaW5kIGEgbWF0Y2hpbmcgcm91dGUuIEZhbGxpbmcgYCArXG4gICAgICAgICAgICBgYmFjayB0byB0aGUgZGVmYXVsdCBoYW5kbGVyIGZvciAke21ldGhvZH0uYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIgPSB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcC5nZXQobWV0aG9kKTtcbiAgICB9XG5cbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIE5vIGhhbmRsZXIgc28gV29ya2JveCB3aWxsIGRvIG5vdGhpbmcuIElmIGxvZ3MgaXMgc2V0IG9mIGRlYnVnXG4gICAgICAgIC8vIGkuZS4gdmVyYm9zZSwgd2Ugc2hvdWxkIHByaW50IG91dCB0aGlzIGluZm9ybWF0aW9uLlxuICAgICAgICBsb2dnZXIuZGVidWcoYE5vIHJvdXRlIGZvdW5kIGZvcjogJHtnZXRGcmllbmRseVVSTCh1cmwpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBXZSBoYXZlIGEgaGFuZGxlciwgbWVhbmluZyBXb3JrYm94IGlzIGdvaW5nIHRvIGhhbmRsZSB0aGUgcm91dGUuXG4gICAgICAvLyBwcmludCB0aGUgcm91dGluZyBkZXRhaWxzIHRvIHRoZSBjb25zb2xlLlxuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBSb3V0ZXIgaXMgcmVzcG9uZGluZyB0bzogJHtnZXRGcmllbmRseVVSTCh1cmwpfWApO1xuXG4gICAgICBkZWJ1Z01lc3NhZ2VzLmZvckVhY2goKG1zZykgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtc2cpKSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZyguLi5tc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ2dlci5sb2cobXNnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIC8vIFdyYXAgaW4gdHJ5IGFuZCBjYXRjaCBpbiBjYXNlIHRoZSBoYW5kbGUgbWV0aG9kIHRocm93cyBhIHN5bmNocm9ub3VzXG4gICAgLy8gZXJyb3IuIEl0IHNob3VsZCBzdGlsbCBjYWxsYmFjayB0byB0aGUgY2F0Y2ggaGFuZGxlci5cbiAgICBsZXQgcmVzcG9uc2VQcm9taXNlO1xuICAgIHRyeSB7XG4gICAgICByZXNwb25zZVByb21pc2UgPSBoYW5kbGVyLmhhbmRsZSh7dXJsLCByZXF1ZXN0LCBldmVudCwgcGFyYW1zfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXNwb25zZVByb21pc2UgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIC8vIEdldCByb3V0ZSdzIGNhdGNoIGhhbmRsZXIsIGlmIGl0IGV4aXN0c1xuICAgIGNvbnN0IGNhdGNoSGFuZGxlciA9IHJvdXRlICYmIHJvdXRlLmNhdGNoSGFuZGxlcjtcblxuICAgIGlmIChcbiAgICAgIHJlc3BvbnNlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICh0aGlzLl9jYXRjaEhhbmRsZXIgfHwgY2F0Y2hIYW5kbGVyKVxuICAgICkge1xuICAgICAgcmVzcG9uc2VQcm9taXNlID0gcmVzcG9uc2VQcm9taXNlLmNhdGNoKGFzeW5jIChlcnIpID0+IHtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJvdXRlIGNhdGNoIGhhbmRsZXIsIHByb2Nlc3MgdGhhdCBmaXJzdFxuICAgICAgICBpZiAoY2F0Y2hIYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIFN0aWxsIGluY2x1ZGUgVVJMIGhlcmUgYXMgaXQgd2lsbCBiZSBhc3luYyBmcm9tIHRoZSBjb25zb2xlIGdyb3VwXG4gICAgICAgICAgICAvLyBhbmQgbWF5IG5vdCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIFVSTFxuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIHdoZW4gcmVzcG9uZGluZyB0bzogYCArXG4gICAgICAgICAgICAgICAgYCAke2dldEZyaWVuZGx5VVJMKFxuICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICl9LiBGYWxsaW5nIGJhY2sgdG8gcm91dGUncyBDYXRjaCBIYW5kbGVyLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBFcnJvciB0aHJvd24gYnk6YCwgcm91dGUpO1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhdGNoSGFuZGxlci5oYW5kbGUoe3VybCwgcmVxdWVzdCwgZXZlbnQsIHBhcmFtc30pO1xuICAgICAgICAgIH0gY2F0Y2ggKGNhdGNoRXJyKSB7XG4gICAgICAgICAgICBpZiAoY2F0Y2hFcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICBlcnIgPSBjYXRjaEVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY2F0Y2hIYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIFN0aWxsIGluY2x1ZGUgVVJMIGhlcmUgYXMgaXQgd2lsbCBiZSBhc3luYyBmcm9tIHRoZSBjb25zb2xlIGdyb3VwXG4gICAgICAgICAgICAvLyBhbmQgbWF5IG5vdCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIFVSTFxuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIHdoZW4gcmVzcG9uZGluZyB0bzogYCArXG4gICAgICAgICAgICAgICAgYCAke2dldEZyaWVuZGx5VVJMKFxuICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICl9LiBGYWxsaW5nIGJhY2sgdG8gZ2xvYmFsIENhdGNoIEhhbmRsZXIuYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEVycm9yIHRocm93biBieTpgLCByb3V0ZSk7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2F0Y2hIYW5kbGVyLmhhbmRsZSh7dXJsLCByZXF1ZXN0LCBldmVudH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlUHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgYSByZXF1ZXN0IGFuZCBVUkwgKGFuZCBvcHRpb25hbGx5IGFuIGV2ZW50KSBhZ2FpbnN0IHRoZSBsaXN0IG9mXG4gICAqIHJlZ2lzdGVyZWQgcm91dGVzLCBhbmQgaWYgdGhlcmUncyBhIG1hdGNoLCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHJvdXRlIGFsb25nIHdpdGggYW55IHBhcmFtcyBnZW5lcmF0ZWQgYnkgdGhlIG1hdGNoLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1VSTH0gb3B0aW9ucy51cmxcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnNhbWVPcmlnaW4gVGhlIHJlc3VsdCBvZiBjb21wYXJpbmcgYHVybC5vcmlnaW5gXG4gICAqICAgICBhZ2FpbnN0IHRoZSBjdXJyZW50IG9yaWdpbi5cbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gbWF0Y2guXG4gICAqIEBwYXJhbSB7RXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGNvcnJlc3BvbmRpbmcgZXZlbnQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYHJvdXRlYCBhbmQgYHBhcmFtc2AgcHJvcGVydGllcy5cbiAgICogICAgIFRoZXkgYXJlIHBvcHVsYXRlZCBpZiBhIG1hdGNoaW5nIHJvdXRlIHdhcyBmb3VuZCBvciBgdW5kZWZpbmVkYFxuICAgKiAgICAgb3RoZXJ3aXNlLlxuICAgKi9cbiAgZmluZE1hdGNoaW5nUm91dGUoe1xuICAgIHVybCxcbiAgICBzYW1lT3JpZ2luLFxuICAgIHJlcXVlc3QsXG4gICAgZXZlbnQsXG4gIH06IFJvdXRlTWF0Y2hDYWxsYmFja09wdGlvbnMpOiB7XG4gICAgcm91dGU/OiBSb3V0ZTtcbiAgICBwYXJhbXM/OiBSb3V0ZUhhbmRsZXJDYWxsYmFja09wdGlvbnNbJ3BhcmFtcyddO1xuICB9IHtcbiAgICBjb25zdCByb3V0ZXMgPSB0aGlzLl9yb3V0ZXMuZ2V0KHJlcXVlc3QubWV0aG9kIGFzIEhUVFBNZXRob2QpIHx8IFtdO1xuICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XG4gICAgICBsZXQgcGFyYW1zOiBQcm9taXNlPGFueT4gfCB1bmRlZmluZWQ7XG4gICAgICAvLyByb3V0ZS5tYXRjaCByZXR1cm5zIHR5cGUgYW55LCBub3QgcG9zc2libGUgdG8gY2hhbmdlIHJpZ2h0IG5vdy5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gcm91dGUubWF0Y2goe3VybCwgc2FtZU9yaWdpbiwgcmVxdWVzdCwgZXZlbnR9KTtcbiAgICAgIGlmIChtYXRjaFJlc3VsdCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIFdhcm4gZGV2ZWxvcGVycyB0aGF0IHVzaW5nIGFuIGFzeW5jIG1hdGNoQ2FsbGJhY2sgaXMgYWxtb3N0IGFsd2F5c1xuICAgICAgICAgIC8vIG5vdCB0aGUgcmlnaHQgdGhpbmcgdG8gZG8uXG4gICAgICAgICAgaWYgKG1hdGNoUmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXG4gICAgICAgICAgICAgIGBXaGlsZSByb3V0aW5nICR7Z2V0RnJpZW5kbHlVUkwodXJsKX0sIGFuIGFzeW5jIGAgK1xuICAgICAgICAgICAgICAgIGBtYXRjaENhbGxiYWNrIGZ1bmN0aW9uIHdhcyB1c2VkLiBQbGVhc2UgY29udmVydCB0aGUgYCArXG4gICAgICAgICAgICAgICAgYGZvbGxvd2luZyByb3V0ZSB0byB1c2UgYSBzeW5jaHJvbm91cyBtYXRjaENhbGxiYWNrIGZ1bmN0aW9uOmAsXG4gICAgICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yMDc5XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgICAgcGFyYW1zID0gbWF0Y2hSZXN1bHQ7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtcykgJiYgcGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBhcnJheSBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIG1hdGNoUmVzdWx0LmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgIE9iamVjdC5rZXlzKG1hdGNoUmVzdWx0KS5sZW5ndGggPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gSW5zdGVhZCBvZiBwYXNzaW5nIGFuIGVtcHR5IG9iamVjdCBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXRjaFJlc3VsdCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgLy8gRm9yIHRoZSBib29sZWFuIHZhbHVlIHRydWUgKHJhdGhlciB0aGFuIGp1c3Qgc29tZXRoaW5nIHRydXRoLXkpLFxuICAgICAgICAgIC8vIGRvbid0IHNldCBwYXJhbXMuXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9wdWxsLzIxMzQjaXNzdWVjb21tZW50LTUxMzkyNDM1M1xuICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiBlYXJseSBpZiBoYXZlIGEgbWF0Y2guXG4gICAgICAgIHJldHVybiB7cm91dGUsIHBhcmFtc307XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIG5vIG1hdGNoIHdhcyBmb3VuZCBhYm92ZSwgcmV0dXJuIGFuZCBlbXB0eSBvYmplY3QuXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhIGRlZmF1bHQgYGhhbmRsZXJgIHRoYXQncyBjYWxsZWQgd2hlbiBubyByb3V0ZXMgZXhwbGljaXRseVxuICAgKiBtYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdC5cbiAgICpcbiAgICogRWFjaCBIVFRQIG1ldGhvZCAoJ0dFVCcsICdQT1NUJywgZXRjLikgZ2V0cyBpdHMgb3duIGRlZmF1bHQgaGFuZGxlci5cbiAgICpcbiAgICogV2l0aG91dCBhIGRlZmF1bHQgaGFuZGxlciwgdW5tYXRjaGVkIHJlcXVlc3RzIHdpbGwgZ28gYWdhaW5zdCB0aGVcbiAgICogbmV0d29yayBhcyBpZiB0aGVyZSB3ZXJlIG5vIHNlcnZpY2Ugd29ya2VyIHByZXNlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gYXNzb2NpYXRlIHdpdGggdGhpc1xuICAgKiBkZWZhdWx0IGhhbmRsZXIuIEVhY2ggbWV0aG9kIGhhcyBpdHMgb3duIGRlZmF1bHQuXG4gICAqL1xuICBzZXREZWZhdWx0SGFuZGxlcihcbiAgICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXIsXG4gICAgbWV0aG9kOiBIVFRQTWV0aG9kID0gZGVmYXVsdE1ldGhvZCxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAuc2V0KG1ldGhvZCwgbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogSWYgYSBSb3V0ZSB0aHJvd3MgYW4gZXJyb3Igd2hpbGUgaGFuZGxpbmcgYSByZXF1ZXN0LCB0aGlzIGBoYW5kbGVyYFxuICAgKiB3aWxsIGJlIGNhbGxlZCBhbmQgZ2l2ZW4gYSBjaGFuY2UgdG8gcHJvdmlkZSBhIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgKi9cbiAgc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXI6IFJvdXRlSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuX2NhdGNoSGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgcm91dGUgd2l0aCB0aGUgcm91dGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZy5Sb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRvIHJlZ2lzdGVyLlxuICAgKi9cbiAgcmVnaXN0ZXJSb3V0ZShyb3V0ZTogUm91dGUpOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUocm91dGUsICdvYmplY3QnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICB9KTtcblxuICAgICAgYXNzZXJ0IS5oYXNNZXRob2Qocm91dGUsICdtYXRjaCcsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgIH0pO1xuXG4gICAgICBhc3NlcnQhLmlzVHlwZShyb3V0ZS5oYW5kbGVyLCAnb2JqZWN0Jywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgfSk7XG5cbiAgICAgIGFzc2VydCEuaGFzTWV0aG9kKHJvdXRlLmhhbmRsZXIsICdoYW5kbGUnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZS5oYW5kbGVyJyxcbiAgICAgIH0pO1xuXG4gICAgICBhc3NlcnQhLmlzVHlwZShyb3V0ZS5tZXRob2QsICdzdHJpbmcnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZS5tZXRob2QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgIHRoaXMuX3JvdXRlcy5zZXQocm91dGUubWV0aG9kLCBbXSk7XG4gICAgfVxuXG4gICAgLy8gR2l2ZSBwcmVjZWRlbmNlIHRvIGFsbCBvZiB0aGUgZWFybGllciByb3V0ZXMgYnkgYWRkaW5nIHRoaXMgYWRkaXRpb25hbFxuICAgIC8vIHJvdXRlIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgIHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKSEucHVzaChyb3V0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgYSByb3V0ZSB3aXRoIHRoZSByb3V0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gdW5yZWdpc3Rlci5cbiAgICovXG4gIHVucmVnaXN0ZXJSb3V0ZShyb3V0ZTogUm91dGUpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3JvdXRlcy5oYXMocm91dGUubWV0aG9kKSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJywge1xuICAgICAgICBtZXRob2Q6IHJvdXRlLm1ldGhvZCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlSW5kZXggPSB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkhLmluZGV4T2Yocm91dGUpO1xuICAgIGlmIChyb3V0ZUluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKSEuc3BsaWNlKHJvdXRlSW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7Um91dGVyfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9Sb3V0ZXIuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmxldCBkZWZhdWx0Um91dGVyOiBSb3V0ZXI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgc2luZ2xldG9uIFJvdXRlciBpbnN0YW5jZSBpZiBvbmUgZG9lcyBub3QgZXhpc3QuIElmIG9uZVxuICogZG9lcyBhbHJlYWR5IGV4aXN0LCB0aGF0IGluc3RhbmNlIGlzIHJldHVybmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJuIHtSb3V0ZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIgPSAoKTogUm91dGVyID0+IHtcbiAgaWYgKCFkZWZhdWx0Um91dGVyKSB7XG4gICAgZGVmYXVsdFJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuICAgIC8vIFRoZSBoZWxwZXJzIHRoYXQgdXNlIHRoZSBkZWZhdWx0IFJvdXRlciBhc3N1bWUgdGhlc2UgbGlzdGVuZXJzIGV4aXN0LlxuICAgIGRlZmF1bHRSb3V0ZXIuYWRkRmV0Y2hMaXN0ZW5lcigpO1xuICAgIGRlZmF1bHRSb3V0ZXIuYWRkQ2FjaGVMaXN0ZW5lcigpO1xuICB9XG4gIHJldHVybiBkZWZhdWx0Um91dGVyO1xufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7Um91dGVIYW5kbGVyLCBSb3V0ZU1hdGNoQ2FsbGJhY2t9IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7Um91dGV9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0IHtSZWdFeHBSb3V0ZX0gZnJvbSAnLi9SZWdFeHBSb3V0ZS5qcyc7XG5pbXBvcnQge0hUVFBNZXRob2R9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7Z2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogRWFzaWx5IHJlZ2lzdGVyIGEgUmVnRXhwLCBzdHJpbmcsIG9yIGZ1bmN0aW9uIHdpdGggYSBjYWNoaW5nXG4gKiBzdHJhdGVneSB0byBhIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UuXG4gKlxuICogVGhpcyBtZXRob2Qgd2lsbCBnZW5lcmF0ZSBhIFJvdXRlIGZvciB5b3UgaWYgbmVlZGVkIGFuZFxuICogY2FsbCB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlciNyZWdpc3RlclJvdXRlfS5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd8d29ya2JveC1yb3V0aW5nLlJvdXRlfm1hdGNoQ2FsbGJhY2t8d29ya2JveC1yb3V0aW5nLlJvdXRlfSBjYXB0dXJlXG4gKiBJZiB0aGUgY2FwdHVyZSBwYXJhbSBpcyBhIGBSb3V0ZWAsIGFsbCBvdGhlciBhcmd1bWVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBbaGFuZGxlcl0gQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS4gVGhpcyBwYXJhbWV0ZXJcbiAqIGlzIHJlcXVpcmVkIGlmIGBjYXB0dXJlYCBpcyBub3QgYSBgUm91dGVgIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gKiBhZ2FpbnN0LlxuICogQHJldHVybiB7d29ya2JveC1yb3V0aW5nLlJvdXRlfSBUaGUgZ2VuZXJhdGVkIGBSb3V0ZWAuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5mdW5jdGlvbiByZWdpc3RlclJvdXRlKFxuICBjYXB0dXJlOiBSZWdFeHAgfCBzdHJpbmcgfCBSb3V0ZU1hdGNoQ2FsbGJhY2sgfCBSb3V0ZSxcbiAgaGFuZGxlcj86IFJvdXRlSGFuZGxlcixcbiAgbWV0aG9kPzogSFRUUE1ldGhvZCxcbik6IFJvdXRlIHtcbiAgbGV0IHJvdXRlO1xuXG4gIGlmICh0eXBlb2YgY2FwdHVyZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBjYXB0dXJlVXJsID0gbmV3IFVSTChjYXB0dXJlLCBsb2NhdGlvbi5ocmVmKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIShjYXB0dXJlLnN0YXJ0c1dpdGgoJy8nKSB8fCBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC1zdHJpbmcnLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjYXB0dXJlJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIHdhbnQgdG8gY2hlY2sgaWYgRXhwcmVzcy1zdHlsZSB3aWxkY2FyZHMgYXJlIGluIHRoZSBwYXRobmFtZSBvbmx5LlxuICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgbG9nIG1lc3NhZ2UgaW4gdjQuXG4gICAgICBjb25zdCB2YWx1ZVRvQ2hlY2sgPSBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKVxuICAgICAgICA/IGNhcHR1cmVVcmwucGF0aG5hbWVcbiAgICAgICAgOiBjYXB0dXJlO1xuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwI3BhcmFtZXRlcnNcbiAgICAgIGNvbnN0IHdpbGRjYXJkcyA9ICdbKjo/K10nO1xuICAgICAgaWYgKG5ldyBSZWdFeHAoYCR7d2lsZGNhcmRzfWApLmV4ZWModmFsdWVUb0NoZWNrKSkge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgYFRoZSAnJGNhcHR1cmUnIHBhcmFtZXRlciBjb250YWlucyBhbiBFeHByZXNzLXN0eWxlIHdpbGRjYXJkIGAgK1xuICAgICAgICAgICAgYGNoYXJhY3RlciAoJHt3aWxkY2FyZHN9KS4gU3RyaW5ncyBhcmUgbm93IGFsd2F5cyBpbnRlcnByZXRlZCBhcyBgICtcbiAgICAgICAgICAgIGBleGFjdCBtYXRjaGVzOyB1c2UgYSBSZWdFeHAgZm9yIHBhcnRpYWwgb3Igd2lsZGNhcmQgbWF0Y2hlcy5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoQ2FsbGJhY2s6IFJvdXRlTWF0Y2hDYWxsYmFjayA9ICh7dXJsfSkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHVybC5wYXRobmFtZSA9PT0gY2FwdHVyZVVybC5wYXRobmFtZSAmJlxuICAgICAgICAgIHVybC5vcmlnaW4gIT09IGNhcHR1cmVVcmwub3JpZ2luXG4gICAgICAgICkge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgIGAke2NhcHR1cmV9IG9ubHkgcGFydGlhbGx5IG1hdGNoZXMgdGhlIGNyb3NzLW9yaWdpbiBVUkwgYCArXG4gICAgICAgICAgICAgIGAke3VybC50b1N0cmluZygpfS4gVGhpcyByb3V0ZSB3aWxsIG9ubHkgaGFuZGxlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyBgICtcbiAgICAgICAgICAgICAgYGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1cmwuaHJlZiA9PT0gY2FwdHVyZVVybC5ocmVmO1xuICAgIH07XG5cbiAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBzdHJpbmcgdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICByb3V0ZSA9IG5ldyBSb3V0ZShtYXRjaENhbGxiYWNrLCBoYW5kbGVyISwgbWV0aG9kKTtcbiAgfSBlbHNlIGlmIChjYXB0dXJlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgYFJlZ0V4cGAgdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICByb3V0ZSA9IG5ldyBSZWdFeHBSb3V0ZShjYXB0dXJlLCBoYW5kbGVyISwgbWV0aG9kKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY2FwdHVyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIGZ1bmN0aW9uIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgcm91dGUgPSBuZXcgUm91dGUoY2FwdHVyZSwgaGFuZGxlciEsIG1ldGhvZCk7XG4gIH0gZWxzZSBpZiAoY2FwdHVyZSBpbnN0YW5jZW9mIFJvdXRlKSB7XG4gICAgcm91dGUgPSBjYXB0dXJlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnLCB7XG4gICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICBwYXJhbU5hbWU6ICdjYXB0dXJlJyxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRSb3V0ZXIgPSBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIoKTtcbiAgZGVmYXVsdFJvdXRlci5yZWdpc3RlclJvdXRlKHJvdXRlKTtcblxuICByZXR1cm4gcm91dGU7XG59XG5cbmV4cG9ydCB7cmVnaXN0ZXJSb3V0ZX07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1JvdXRlSGFuZGxlcn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0IHtnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXJ9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBJZiBhIFJvdXRlIHRocm93cyBhbiBlcnJvciB3aGlsZSBoYW5kbGluZyBhIHJlcXVlc3QsIHRoaXMgYGhhbmRsZXJgXG4gKiB3aWxsIGJlIGNhbGxlZCBhbmQgZ2l2ZW4gYSBjaGFuY2UgdG8gcHJvdmlkZSBhIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuZnVuY3Rpb24gc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXI6IFJvdXRlSGFuZGxlcik6IHZvaWQge1xuICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gIGRlZmF1bHRSb3V0ZXIuc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXIpO1xufVxuXG5leHBvcnQge3NldENhdGNoSGFuZGxlcn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmZ1bmN0aW9uIHN0cmlwUGFyYW1zKGZ1bGxVUkw6IHN0cmluZywgaWdub3JlUGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBzdHJpcHBlZFVSTCA9IG5ldyBVUkwoZnVsbFVSTCk7XG4gIGZvciAoY29uc3QgcGFyYW0gb2YgaWdub3JlUGFyYW1zKSB7XG4gICAgc3RyaXBwZWRVUkwuc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbSk7XG4gIH1cbiAgcmV0dXJuIHN0cmlwcGVkVVJMLmhyZWY7XG59XG5cbi8qKlxuICogTWF0Y2hlcyBhbiBpdGVtIGluIHRoZSBjYWNoZSwgaWdub3Jpbmcgc3BlY2lmaWMgVVJMIHBhcmFtcy4gVGhpcyBpcyBzaW1pbGFyXG4gKiB0byB0aGUgYGlnbm9yZVNlYXJjaGAgb3B0aW9uLCBidXQgaXQgYWxsb3dzIHlvdSB0byBpZ25vcmUganVzdCBzcGVjaWZpY1xuICogcGFyYW1zICh3aGlsZSBjb250aW51aW5nIHRvIG1hdGNoIG9uIHRoZSBvdGhlcnMpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0NhY2hlfSBjYWNoZVxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gbWF0Y2hPcHRpb25zXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGlnbm9yZVBhcmFtc1xuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fVxuICovXG5hc3luYyBmdW5jdGlvbiBjYWNoZU1hdGNoSWdub3JlUGFyYW1zKFxuICBjYWNoZTogQ2FjaGUsXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIGlnbm9yZVBhcmFtczogc3RyaW5nW10sXG4gIG1hdGNoT3B0aW9ucz86IENhY2hlUXVlcnlPcHRpb25zLFxuKTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCBzdHJpcHBlZFJlcXVlc3RVUkwgPSBzdHJpcFBhcmFtcyhyZXF1ZXN0LnVybCwgaWdub3JlUGFyYW1zKTtcblxuICAvLyBJZiB0aGUgcmVxdWVzdCBkb2Vzbid0IGluY2x1ZGUgYW55IGlnbm9yZWQgcGFyYW1zLCBtYXRjaCBhcyBub3JtYWwuXG4gIGlmIChyZXF1ZXN0LnVybCA9PT0gc3RyaXBwZWRSZXF1ZXN0VVJMKSB7XG4gICAgcmV0dXJuIGNhY2hlLm1hdGNoKHJlcXVlc3QsIG1hdGNoT3B0aW9ucyk7XG4gIH1cblxuICAvLyBPdGhlcndpc2UsIG1hdGNoIGJ5IGNvbXBhcmluZyBrZXlzXG4gIGNvbnN0IGtleXNPcHRpb25zID0gey4uLm1hdGNoT3B0aW9ucywgaWdub3JlU2VhcmNoOiB0cnVlfTtcbiAgY29uc3QgY2FjaGVLZXlzID0gYXdhaXQgY2FjaGUua2V5cyhyZXF1ZXN0LCBrZXlzT3B0aW9ucyk7XG5cbiAgZm9yIChjb25zdCBjYWNoZUtleSBvZiBjYWNoZUtleXMpIHtcbiAgICBjb25zdCBzdHJpcHBlZENhY2hlS2V5VVJMID0gc3RyaXBQYXJhbXMoY2FjaGVLZXkudXJsLCBpZ25vcmVQYXJhbXMpO1xuICAgIGlmIChzdHJpcHBlZFJlcXVlc3RVUkwgPT09IHN0cmlwcGVkQ2FjaGVLZXlVUkwpIHtcbiAgICAgIHJldHVybiBjYWNoZS5tYXRjaChjYWNoZUtleSwgbWF0Y2hPcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5leHBvcnQge2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXN9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogVGhlIERlZmVycmVkIGNsYXNzIGNvbXBvc2VzIFByb21pc2VzIGluIGEgd2F5IHRoYXQgYWxsb3dzIGZvciB0aGVtIHRvIGJlXG4gKiByZXNvbHZlZCBvciByZWplY3RlZCBmcm9tIG91dHNpZGUgdGhlIGNvbnN0cnVjdG9yLiBJbiBtb3N0IGNhc2VzIHByb21pc2VzXG4gKiBzaG91bGQgYmUgdXNlZCBkaXJlY3RseSwgYnV0IERlZmVycmVkcyBjYW4gYmUgbmVjZXNzYXJ5IHdoZW4gdGhlIGxvZ2ljIHRvXG4gKiByZXNvbHZlIGEgcHJvbWlzZSBtdXN0IGJlIHNlcGFyYXRlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIERlZmVycmVkPFQ+IHtcbiAgcHJvbWlzZTogUHJvbWlzZTxUPjtcbiAgcmVzb2x2ZSE6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbiAgcmVqZWN0ITogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHByb21pc2UgYW5kIGV4cG9zZXMgaXRzIHJlc29sdmUgYW5kIHJlamVjdCBmdW5jdGlvbnMgYXMgbWV0aG9kcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge0RlZmVycmVkfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bG9nZ2VyfSBmcm9tICcuLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtxdW90YUVycm9yQ2FsbGJhY2tzfSBmcm9tICcuLi9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBSdW5zIGFsbCBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zLCBvbmUgYXQgYSB0aW1lIHNlcXVlbnRpYWxseSwgaW4gdGhlIG9yZGVyXG4gKiBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jb3JlXG4gKiBAcHJpdmF0ZVxuICovXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZXIubG9nKFxuICAgICAgYEFib3V0IHRvIHJ1biAke3F1b3RhRXJyb3JDYWxsYmFja3Muc2l6ZX0gYCArXG4gICAgICAgIGBjYWxsYmFja3MgdG8gY2xlYW4gdXAgY2FjaGVzLmAsXG4gICAgKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgcXVvdGFFcnJvckNhbGxiYWNrcykge1xuICAgIGF3YWl0IGNhbGxiYWNrKCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGxvZ2dlci5sb2coY2FsbGJhY2ssICdpcyBjb21wbGV0ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlci5sb2coJ0ZpbmlzaGVkIHJ1bm5pbmcgY2FsbGJhY2tzLicpO1xuICB9XG59XG5cbmV4cG9ydCB7ZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3N9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYW5kIHRoZSBwYXNzZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAqIFRoaXMgdXRpbGl0eSBpcyBhbiBhc3luYy9hd2FpdC1mcmllbmRseSB2ZXJzaW9uIG9mIGBzZXRUaW1lb3V0YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbXNcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0KG1zOiBudW1iZXIpOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCAiLy8gQHRzLWlnbm9yZVxudHJ5e3NlbGZbJ3dvcmtib3g6c3RyYXRlZ2llczo3LjAuMCddJiZfKCl9Y2F0Y2goZSl7fSIsICIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7Y2FjaGVNYXRjaElnbm9yZVBhcmFtc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXMuanMnO1xuaW1wb3J0IHtEZWZlcnJlZH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL0RlZmVycmVkLmpzJztcbmltcG9ydCB7ZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3N9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHt0aW1lb3V0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvdGltZW91dC5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge1xuICBIYW5kbGVyQ2FsbGJhY2tPcHRpb25zLFxuICBNYXBMaWtlT2JqZWN0LFxuICBXb3JrYm94UGx1Z2luLFxuICBXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbSxcbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0IHtTdHJhdGVneX0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5mdW5jdGlvbiB0b1JlcXVlc3QoaW5wdXQ6IFJlcXVlc3RJbmZvKSB7XG4gIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gbmV3IFJlcXVlc3QoaW5wdXQpIDogaW5wdXQ7XG59XG5cbi8qKlxuICogQSBjbGFzcyBjcmVhdGVkIGV2ZXJ5IHRpbWUgYSBTdHJhdGVneSBpbnN0YW5jZSBpbnN0YW5jZSBjYWxsc1xuICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGV9IG9yXG4gKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fmhhbmRsZUFsbH0gdGhhdCB3cmFwcyBhbGwgZmV0Y2ggYW5kXG4gKiBjYWNoZSBhY3Rpb25zIGFyb3VuZCBwbHVnaW4gY2FsbGJhY2tzIGFuZCBrZWVwcyB0cmFjayBvZiB3aGVuIHRoZSBzdHJhdGVneVxuICogaXMgXCJkb25lXCIgKGkuZS4gYWxsIGFkZGVkIGBldmVudC53YWl0VW50aWwoKWAgcHJvbWlzZXMgaGF2ZSByZXNvbHZlZCkuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBTdHJhdGVneUhhbmRsZXIge1xuICBwdWJsaWMgcmVxdWVzdCE6IFJlcXVlc3Q7XG4gIHB1YmxpYyB1cmw/OiBVUkw7XG4gIHB1YmxpYyBldmVudDogRXh0ZW5kYWJsZUV2ZW50O1xuICBwdWJsaWMgcGFyYW1zPzogYW55O1xuXG4gIHByaXZhdGUgX2NhY2hlS2V5czogUmVjb3JkPHN0cmluZywgUmVxdWVzdD4gPSB7fTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9zdHJhdGVneTogU3RyYXRlZ3k7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2V4dGVuZExpZmV0aW1lUHJvbWlzZXM6IFByb21pc2U8YW55PltdO1xuICBwcml2YXRlIHJlYWRvbmx5IF9oYW5kbGVyRGVmZXJyZWQ6IERlZmVycmVkPGFueT47XG4gIHByaXZhdGUgcmVhZG9ubHkgX3BsdWdpbnM6IFdvcmtib3hQbHVnaW5bXTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcGx1Z2luU3RhdGVNYXA6IE1hcDxXb3JrYm94UGx1Z2luLCBNYXBMaWtlT2JqZWN0PjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIHBhc3NlZCBzdHJhdGVneSBhbmQgZXZlbnRcbiAgICogdGhhdCdzIGhhbmRsaW5nIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBUaGUgY29uc3RydWN0b3IgYWxzbyBpbml0aWFsaXplcyB0aGUgc3RhdGUgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBlYWNoIG9mXG4gICAqIHRoZSBwbHVnaW5zIGhhbmRsaW5nIHRoaXMgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l9IHN0cmF0ZWd5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgKiAgICAgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtVUkx9IFtvcHRpb25zLnVybF1cbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5wYXJhbXNdIFRoZSByZXR1cm4gdmFsdWUgZnJvbSB0aGVcbiAgICogICAgIHtAbGluayB3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gKGlmIGFwcGxpY2FibGUpLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RyYXRlZ3k6IFN0cmF0ZWd5LCBvcHRpb25zOiBIYW5kbGVyQ2FsbGJhY2tPcHRpb25zKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3QgdGhlIHN0cmF0ZWd5IGlzIHBlcmZvcm1pbmcgKHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAqIEBuYW1lIHJlcXVlc3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7UmVxdWVzdH1cbiAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyByZXF1ZXN0LlxuICAgICAqIEBuYW1lIGV2ZW50XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHR5cGUge0V4dGVuZGFibGVFdmVudH1cbiAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEEgYFVSTGAgaW5zdGFuY2Ugb2YgYHJlcXVlc3QudXJsYCAoaWYgcGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICogYGhhbmRsZSgpYCBvciBgaGFuZGxlQWxsKClgIG1ldGhvZCkuXG4gICAgICogTm90ZTogdGhlIGB1cmxgIHBhcmFtIHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgc3RyYXRlZ3kgd2FzIGludm9rZWRcbiAgICAgKiBmcm9tIGEgd29ya2JveCBgUm91dGVgIG9iamVjdC5cbiAgICAgKiBAbmFtZSB1cmxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7VVJMfHVuZGVmaW5lZH1cbiAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEEgYHBhcmFtYCB2YWx1ZSAoaWYgcGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICogYGhhbmRsZSgpYCBvciBgaGFuZGxlQWxsKClgIG1ldGhvZCkuXG4gICAgICogTm90ZTogdGhlIGBwYXJhbWAgcGFyYW0gd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBzdHJhdGVneSB3YXMgaW52b2tlZFxuICAgICAqIGZyb20gYSB3b3JrYm94IGBSb3V0ZWAgb2JqZWN0IGFuZCB0aGVcbiAgICAgKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nfm1hdGNoQ2FsbGJhY2t9IHJldHVybmVkXG4gICAgICogYSB0cnV0aHkgdmFsdWUgKGl0IHdpbGwgYmUgdGhhdCB2YWx1ZSkuXG4gICAgICogQG5hbWUgcGFyYW1zXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHR5cGUgeyp8dW5kZWZpbmVkfVxuICAgICAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShvcHRpb25zLmV2ZW50LCBFeHRlbmRhYmxlRXZlbnQsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1N0cmF0ZWd5SGFuZGxlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLmV2ZW50JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmV2ZW50ID0gb3B0aW9ucy5ldmVudDtcbiAgICB0aGlzLl9zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgIHRoaXMuX2hhbmRsZXJEZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCgpO1xuICAgIHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMgPSBbXTtcblxuICAgIC8vIENvcHkgdGhlIHBsdWdpbnMgbGlzdCAoc2luY2UgaXQncyBtdXRhYmxlIG9uIHRoZSBzdHJhdGVneSksXG4gICAgLy8gc28gYW55IG11dGF0aW9ucyBkb24ndCBhZmZlY3QgdGhpcyBoYW5kbGVyIGluc3RhbmNlLlxuICAgIHRoaXMuX3BsdWdpbnMgPSBbLi4uc3RyYXRlZ3kucGx1Z2luc107XG4gICAgdGhpcy5fcGx1Z2luU3RhdGVNYXAgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fcGx1Z2lucykge1xuICAgICAgdGhpcy5fcGx1Z2luU3RhdGVNYXAuc2V0KHBsdWdpbiwge30pO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnQud2FpdFVudGlsKHRoaXMuX2hhbmRsZXJEZWZlcnJlZC5wcm9taXNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgZ2l2ZW4gcmVxdWVzdCAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGUgcGx1Z2luIGNhbGxiYWNrXG4gICAqIG1ldGhvZHMpIHVzaW5nIHRoZSBgZmV0Y2hPcHRpb25zYCAoZm9yIG5vbi1uYXZpZ2F0aW9uIHJlcXVlc3RzKSBhbmRcbiAgICogYHBsdWdpbnNgIGRlZmluZWQgb24gdGhlIGBTdHJhdGVneWAgb2JqZWN0LlxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIHBsdWdpbiBsaWZlY3ljbGUgbWV0aG9kcyBhcmUgaW52b2tlZCB3aGVuIHVzaW5nIHRoaXMgbWV0aG9kOlxuICAgKiAtIGByZXF1ZXN0V2lsbEZldGNoKClgXG4gICAqIC0gYGZldGNoRGlkU3VjY2VlZCgpYFxuICAgKiAtIGBmZXRjaERpZEZhaWwoKWBcbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gaW5wdXQgVGhlIFVSTCBvciByZXF1ZXN0IHRvIGZldGNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIGZldGNoKGlucHV0OiBSZXF1ZXN0SW5mbyk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCB7ZXZlbnR9ID0gdGhpcztcbiAgICBsZXQgcmVxdWVzdDogUmVxdWVzdCA9IHRvUmVxdWVzdChpbnB1dCk7XG5cbiAgICBpZiAoXG4gICAgICByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScgJiZcbiAgICAgIGV2ZW50IGluc3RhbmNlb2YgRmV0Y2hFdmVudCAmJlxuICAgICAgZXZlbnQucHJlbG9hZFJlc3BvbnNlXG4gICAgKSB7XG4gICAgICBjb25zdCBwb3NzaWJsZVByZWxvYWRSZXNwb25zZSA9IChhd2FpdCBldmVudC5wcmVsb2FkUmVzcG9uc2UpIGFzXG4gICAgICAgIHwgUmVzcG9uc2VcbiAgICAgICAgfCB1bmRlZmluZWQ7XG4gICAgICBpZiAocG9zc2libGVQcmVsb2FkUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgICAgYFVzaW5nIGEgcHJlbG9hZGVkIG5hdmlnYXRpb24gcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgZmV0Y2hEaWRGYWlsIHBsdWdpbiwgd2UgbmVlZCB0byBzYXZlIGEgY2xvbmUgb2YgdGhlXG4gICAgLy8gb3JpZ2luYWwgcmVxdWVzdCBiZWZvcmUgaXQncyBlaXRoZXIgbW9kaWZpZWQgYnkgYSByZXF1ZXN0V2lsbEZldGNoXG4gICAgLy8gcGx1Z2luIG9yIGJlZm9yZSB0aGUgb3JpZ2luYWwgcmVxdWVzdCdzIGJvZHkgaXMgY29uc3VtZWQgdmlhIGZldGNoKCkuXG4gICAgY29uc3Qgb3JpZ2luYWxSZXF1ZXN0ID0gdGhpcy5oYXNDYWxsYmFjaygnZmV0Y2hEaWRGYWlsJylcbiAgICAgID8gcmVxdWVzdC5jbG9uZSgpXG4gICAgICA6IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgZm9yIChjb25zdCBjYiBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ3JlcXVlc3RXaWxsRmV0Y2gnKSkge1xuICAgICAgICByZXF1ZXN0ID0gYXdhaXQgY2Ioe3JlcXVlc3Q6IHJlcXVlc3QuY2xvbmUoKSwgZXZlbnR9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywge1xuICAgICAgICAgIHRocm93bkVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSByZXF1ZXN0IGNhbiBiZSBhbHRlcmVkIGJ5IHBsdWdpbnMgd2l0aCBgcmVxdWVzdFdpbGxGZXRjaGAgbWFraW5nXG4gICAgLy8gdGhlIG9yaWdpbmFsIHJlcXVlc3QgKG1vc3QgbGlrZWx5IGZyb20gYSBgZmV0Y2hgIGV2ZW50KSBkaWZmZXJlbnRcbiAgICAvLyBmcm9tIHRoZSBSZXF1ZXN0IHdlIG1ha2UuIFBhc3MgYm90aCB0byBgZmV0Y2hEaWRGYWlsYCB0byBhaWQgZGVidWdnaW5nLlxuICAgIGNvbnN0IHBsdWdpbkZpbHRlcmVkUmVxdWVzdDogUmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoKTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgZmV0Y2hSZXNwb25zZTogUmVzcG9uc2U7XG5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTZcbiAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgcmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnID8gdW5kZWZpbmVkIDogdGhpcy5fc3RyYXRlZ3kuZmV0Y2hPcHRpb25zLFxuICAgICAgKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgIGBOZXR3b3JrIHJlcXVlc3QgZm9yIGAgK1xuICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHJldHVybmVkIGEgcmVzcG9uc2Ugd2l0aCBgICtcbiAgICAgICAgICAgIGBzdGF0dXMgJyR7ZmV0Y2hSZXNwb25zZS5zdGF0dXN9Jy5gLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnZmV0Y2hEaWRTdWNjZWVkJykpIHtcbiAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICByZXF1ZXN0OiBwbHVnaW5GaWx0ZXJlZFJlcXVlc3QsXG4gICAgICAgICAgcmVzcG9uc2U6IGZldGNoUmVzcG9uc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZldGNoUmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coXG4gICAgICAgICAgYE5ldHdvcmsgcmVxdWVzdCBmb3IgYCArXG4gICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScgdGhyZXcgYW4gZXJyb3IuYCxcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gYG9yaWdpbmFsUmVxdWVzdGAgd2lsbCBvbmx5IGV4aXN0IGlmIGEgYGZldGNoRGlkRmFpbGAgY2FsbGJhY2tcbiAgICAgIC8vIGlzIGJlaW5nIHVzZWQgKHNlZSBhYm92ZSkuXG4gICAgICBpZiAob3JpZ2luYWxSZXF1ZXN0KSB7XG4gICAgICAgIGF3YWl0IHRoaXMucnVuQ2FsbGJhY2tzKCdmZXRjaERpZEZhaWwnLCB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yIGFzIEVycm9yLFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9yaWdpbmFsUmVxdWVzdDogb3JpZ2luYWxSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgcmVxdWVzdDogcGx1Z2luRmlsdGVyZWRSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIGB0aGlzLmZldGNoKClgIGFuZCAoaW4gdGhlIGJhY2tncm91bmQpIHJ1bnMgYHRoaXMuY2FjaGVQdXQoKWAgb25cbiAgICogdGhlIHJlc3BvbnNlIGdlbmVyYXRlZCBieSBgdGhpcy5mZXRjaCgpYC5cbiAgICpcbiAgICogVGhlIGNhbGwgdG8gYHRoaXMuY2FjaGVQdXQoKWAgYXV0b21hdGljYWxseSBpbnZva2VzIGB0aGlzLndhaXRVbnRpbCgpYCxcbiAgICogc28geW91IGRvIG5vdCBoYXZlIHRvIG1hbnVhbGx5IGNhbGwgYHdhaXRVbnRpbCgpYCBvbiB0aGUgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGlucHV0IFRoZSByZXF1ZXN0IG9yIFVSTCB0byBmZXRjaCBhbmQgY2FjaGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgZmV0Y2hBbmRDYWNoZVB1dChpbnB1dDogUmVxdWVzdEluZm8pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoKGlucHV0KTtcbiAgICBjb25zdCByZXNwb25zZUNsb25lID0gcmVzcG9uc2UuY2xvbmUoKTtcblxuICAgIHZvaWQgdGhpcy53YWl0VW50aWwodGhpcy5jYWNoZVB1dChpbnB1dCwgcmVzcG9uc2VDbG9uZSkpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdGNoZXMgYSByZXF1ZXN0IGZyb20gdGhlIGNhY2hlIChhbmQgaW52b2tlcyBhbnkgYXBwbGljYWJsZSBwbHVnaW5cbiAgICogY2FsbGJhY2sgbWV0aG9kcykgdXNpbmcgdGhlIGBjYWNoZU5hbWVgLCBgbWF0Y2hPcHRpb25zYCwgYW5kIGBwbHVnaW5zYFxuICAgKiBkZWZpbmVkIG9uIHRoZSBzdHJhdGVneSBvYmplY3QuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAqIC0gY2FjaGVLZXlXaWxsQnlVc2VkKClcbiAgICogLSBjYWNoZWRSZXNwb25zZVdpbGxCeVVzZWQoKVxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBrZXkgVGhlIFJlcXVlc3Qgb3IgVVJMIHRvIHVzZSBhcyB0aGUgY2FjaGUga2V5LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59IEEgbWF0Y2hpbmcgcmVzcG9uc2UsIGlmIGZvdW5kLlxuICAgKi9cbiAgYXN5bmMgY2FjaGVNYXRjaChrZXk6IFJlcXVlc3RJbmZvKTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IFJlcXVlc3QgPSB0b1JlcXVlc3Qoa2V5KTtcbiAgICBsZXQgY2FjaGVkUmVzcG9uc2U6IFJlc3BvbnNlIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IHtjYWNoZU5hbWUsIG1hdGNoT3B0aW9uc30gPSB0aGlzLl9zdHJhdGVneTtcblxuICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCB0aGlzLmdldENhY2hlS2V5KHJlcXVlc3QsICdyZWFkJyk7XG4gICAgY29uc3QgbXVsdGlNYXRjaE9wdGlvbnMgPSB7Li4ubWF0Y2hPcHRpb25zLCAuLi57Y2FjaGVOYW1lfX07XG5cbiAgICBjYWNoZWRSZXNwb25zZSA9IGF3YWl0IGNhY2hlcy5tYXRjaChlZmZlY3RpdmVSZXF1ZXN0LCBtdWx0aU1hdGNoT3B0aW9ucyk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gJyR7Y2FjaGVOYW1lfScuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dnZXIuZGVidWcoYE5vIGNhY2hlZCByZXNwb25zZSBmb3VuZCBpbiAnJHtjYWNoZU5hbWV9Jy5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkJykpIHtcbiAgICAgIGNhY2hlZFJlc3BvbnNlID1cbiAgICAgICAgKGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICBjYWNoZU5hbWUsXG4gICAgICAgICAgbWF0Y2hPcHRpb25zLFxuICAgICAgICAgIGNhY2hlZFJlc3BvbnNlLFxuICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgIH0pKSB8fCB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRSZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXRzIGEgcmVxdWVzdC9yZXNwb25zZSBwYWlyIGluIHRoZSBjYWNoZSAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGVcbiAgICogcGx1Z2luIGNhbGxiYWNrIG1ldGhvZHMpIHVzaW5nIHRoZSBgY2FjaGVOYW1lYCBhbmQgYHBsdWdpbnNgIGRlZmluZWQgb25cbiAgICogdGhlIHN0cmF0ZWd5IG9iamVjdC5cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICogLSBjYWNoZUtleVdpbGxCeVVzZWQoKVxuICAgKiAtIGNhY2hlV2lsbFVwZGF0ZSgpXG4gICAqIC0gY2FjaGVEaWRVcGRhdGUoKVxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBrZXkgVGhlIHJlcXVlc3Qgb3IgVVJMIHRvIHVzZSBhcyB0aGUgY2FjaGUga2V5LlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZSBUaGUgcmVzcG9uc2UgdG8gY2FjaGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IGBmYWxzZWAgaWYgYSBjYWNoZVdpbGxVcGRhdGUgY2F1c2VkIHRoZSByZXNwb25zZVxuICAgKiBub3QgYmUgY2FjaGVkLCBhbmQgYHRydWVgIG90aGVyd2lzZS5cbiAgICovXG4gIGFzeW5jIGNhY2hlUHV0KGtleTogUmVxdWVzdEluZm8sIHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IFJlcXVlc3QgPSB0b1JlcXVlc3Qoa2V5KTtcblxuICAgIC8vIFJ1biBpbiB0aGUgbmV4dCB0YXNrIHRvIGF2b2lkIGJsb2NraW5nIG90aGVyIGNhY2hlIHJlYWRzLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvU2VydmljZVdvcmtlci9pc3N1ZXMvMTM5N1xuICAgIGF3YWl0IHRpbWVvdXQoMCk7XG5cbiAgICBjb25zdCBlZmZlY3RpdmVSZXF1ZXN0ID0gYXdhaXQgdGhpcy5nZXRDYWNoZUtleShyZXF1ZXN0LCAnd3JpdGUnKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QgJiYgZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2F0dGVtcHQtdG8tY2FjaGUtbm9uLWdldC1yZXF1ZXN0Jywge1xuICAgICAgICAgIHVybDogZ2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpLFxuICAgICAgICAgIG1ldGhvZDogZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yODE4XG4gICAgICBjb25zdCB2YXJ5ID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1ZhcnknKTtcbiAgICAgIGlmICh2YXJ5KSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICBgVGhlIHJlc3BvbnNlIGZvciAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0gYCArXG4gICAgICAgICAgICBgaGFzIGEgJ1Zhcnk6ICR7dmFyeX0nIGhlYWRlci4gYCArXG4gICAgICAgICAgICBgQ29uc2lkZXIgc2V0dGluZyB0aGUge2lnbm9yZVZhcnk6IHRydWV9IG9wdGlvbiBvbiB5b3VyIHN0cmF0ZWd5IGAgK1xuICAgICAgICAgICAgYHRvIGVuc3VyZSBjYWNoZSBtYXRjaGluZyBhbmQgZGVsZXRpb24gd29ya3MgYXMgZXhwZWN0ZWQuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZXJyb3IoXG4gICAgICAgICAgYENhbm5vdCBjYWNoZSBub24tZXhpc3RlbnQgcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nLmAsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2NhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlJywge1xuICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlVG9DYWNoZSA9IGF3YWl0IHRoaXMuX2Vuc3VyZVJlc3BvbnNlU2FmZVRvQ2FjaGUocmVzcG9uc2UpO1xuXG4gICAgaWYgKCFyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICBgUmVzcG9uc2UgJyR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfScgYCArXG4gICAgICAgICAgICBgd2lsbCBub3QgYmUgY2FjaGVkLmAsXG4gICAgICAgICAgcmVzcG9uc2VUb0NhY2hlLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHtjYWNoZU5hbWUsIG1hdGNoT3B0aW9uc30gPSB0aGlzLl9zdHJhdGVneTtcbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4oY2FjaGVOYW1lKTtcblxuICAgIGNvbnN0IGhhc0NhY2hlVXBkYXRlQ2FsbGJhY2sgPSB0aGlzLmhhc0NhbGxiYWNrKCdjYWNoZURpZFVwZGF0ZScpO1xuICAgIGNvbnN0IG9sZFJlc3BvbnNlID0gaGFzQ2FjaGVVcGRhdGVDYWxsYmFja1xuICAgICAgPyBhd2FpdCBjYWNoZU1hdGNoSWdub3JlUGFyYW1zKFxuICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogdGhlIGBfX1dCX1JFVklTSU9OX19gIHBhcmFtIGlzIGEgcHJlY2FjaGluZ1xuICAgICAgICAgIC8vIGZlYXR1cmUuIENvbnNpZGVyIGludG8gd2F5cyB0byBvbmx5IGFkZCB0aGlzIGJlaGF2aW9yIGlmIHVzaW5nXG4gICAgICAgICAgLy8gcHJlY2FjaGluZy5cbiAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICBlZmZlY3RpdmVSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgWydfX1dCX1JFVklTSU9OX18nXSxcbiAgICAgICAgICBtYXRjaE9wdGlvbnMsXG4gICAgICAgIClcbiAgICAgIDogbnVsbDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgIGBVcGRhdGluZyB0aGUgJyR7Y2FjaGVOYW1lfScgY2FjaGUgd2l0aCBhIG5ldyBSZXNwb25zZSBgICtcbiAgICAgICAgICBgZm9yICR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfS5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2FjaGUucHV0KFxuICAgICAgICBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID8gcmVzcG9uc2VUb0NhY2hlLmNsb25lKCkgOiByZXNwb25zZVRvQ2FjaGUsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUV4Y2VwdGlvbiNleGNlcHRpb24tUXVvdGFFeGNlZWRlZEVycm9yXG4gICAgICAgIGlmIChlcnJvci5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJykge1xuICAgICAgICAgIGF3YWl0IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlRGlkVXBkYXRlJykpIHtcbiAgICAgIGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICBvbGRSZXNwb25zZSxcbiAgICAgICAgbmV3UmVzcG9uc2U6IHJlc3BvbnNlVG9DYWNoZS5jbG9uZSgpLFxuICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgbGlzdCBvZiBwbHVnaW5zIGZvciB0aGUgYGNhY2hlS2V5V2lsbEJlVXNlZGAgY2FsbGJhY2ssIGFuZFxuICAgKiBleGVjdXRlcyBhbnkgb2YgdGhvc2UgY2FsbGJhY2tzIGZvdW5kIGluIHNlcXVlbmNlLiBUaGUgZmluYWwgYFJlcXVlc3RgXG4gICAqIG9iamVjdCByZXR1cm5lZCBieSB0aGUgbGFzdCBwbHVnaW4gaXMgdHJlYXRlZCBhcyB0aGUgY2FjaGUga2V5IGZvciBjYWNoZVxuICAgKiByZWFkcyBhbmQvb3Igd3JpdGVzLiBJZiBubyBgY2FjaGVLZXlXaWxsQmVVc2VkYCBwbHVnaW4gY2FsbGJhY2tzIGhhdmVcbiAgICogYmVlbiByZWdpc3RlcmVkLCB0aGUgcGFzc2VkIHJlcXVlc3QgaXMgcmV0dXJuZWQgdW5tb2RpZmllZFxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXF1ZXN0Pn1cbiAgICovXG4gIGFzeW5jIGdldENhY2hlS2V5KFxuICAgIHJlcXVlc3Q6IFJlcXVlc3QsXG4gICAgbW9kZTogJ3JlYWQnIHwgJ3dyaXRlJyxcbiAgKTogUHJvbWlzZTxSZXF1ZXN0PiB7XG4gICAgY29uc3Qga2V5ID0gYCR7cmVxdWVzdC51cmx9IHwgJHttb2RlfWA7XG4gICAgaWYgKCF0aGlzLl9jYWNoZUtleXNba2V5XSkge1xuICAgICAgbGV0IGVmZmVjdGl2ZVJlcXVlc3QgPSByZXF1ZXN0O1xuXG4gICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVLZXlXaWxsQmVVc2VkJykpIHtcbiAgICAgICAgZWZmZWN0aXZlUmVxdWVzdCA9IHRvUmVxdWVzdChcbiAgICAgICAgICBhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgLy8gcGFyYW1zIGhhcyBhIHR5cGUgYW55IGNhbid0IGNoYW5nZSByaWdodCBub3cuXG4gICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhY2hlS2V5c1trZXldID0gZWZmZWN0aXZlUmVxdWVzdDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlS2V5c1trZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyYXRlZ3kgaGFzIGF0IGxlYXN0IG9uZSBwbHVnaW4gd2l0aCB0aGUgZ2l2ZW5cbiAgICogY2FsbGJhY2suXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYmFjayB0byBjaGVjayBmb3IuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDYWxsYmFjazxDIGV4dGVuZHMga2V5b2YgV29ya2JveFBsdWdpbj4obmFtZTogQyk6IGJvb2xlYW4ge1xuICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3N0cmF0ZWd5LnBsdWdpbnMpIHtcbiAgICAgIGlmIChuYW1lIGluIHBsdWdpbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgYWxsIHBsdWdpbiBjYWxsYmFja3MgbWF0Y2hpbmcgdGhlIGdpdmVuIG5hbWUsIGluIG9yZGVyLCBwYXNzaW5nIHRoZVxuICAgKiBnaXZlbiBwYXJhbSBvYmplY3QgKG1lcmdlZCBpdGggdGhlIGN1cnJlbnQgcGx1Z2luIHN0YXRlKSBhcyB0aGUgb25seVxuICAgKiBhcmd1bWVudC5cbiAgICpcbiAgICogTm90ZTogc2luY2UgdGhpcyBtZXRob2QgcnVucyBhbGwgcGx1Z2lucywgaXQncyBub3Qgc3VpdGFibGUgZm9yIGNhc2VzXG4gICAqIHdoZXJlIHRoZSByZXR1cm4gdmFsdWUgb2YgYSBjYWxsYmFjayBuZWVkcyB0byBiZSBhcHBsaWVkIHByaW9yIHRvIGNhbGxpbmdcbiAgICogdGhlIG5leHQgY2FsbGJhY2suIFNlZVxuICAgKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlciNpdGVyYXRlQ2FsbGJhY2tzfVxuICAgKiBiZWxvdyBmb3IgaG93IHRvIGhhbmRsZSB0aGF0IGNhc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYmFjayB0byBydW4gd2l0aGluIGVhY2ggcGx1Z2luLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0gVGhlIG9iamVjdCB0byBwYXNzIGFzIHRoZSBmaXJzdCAoYW5kIG9ubHkpIHBhcmFtXG4gICAqICAgICB3aGVuIGV4ZWN1dGluZyBlYWNoIGNhbGxiYWNrLiBUaGlzIG9iamVjdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZVxuICAgKiAgICAgY3VycmVudCBwbHVnaW4gc3RhdGUgcHJpb3IgdG8gY2FsbGJhY2sgZXhlY3V0aW9uLlxuICAgKi9cbiAgYXN5bmMgcnVuQ2FsbGJhY2tzPEMgZXh0ZW5kcyBrZXlvZiBOb25OdWxsYWJsZTxXb3JrYm94UGx1Z2luPj4oXG4gICAgbmFtZTogQyxcbiAgICBwYXJhbTogT21pdDxXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXSwgJ3N0YXRlJz4sXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKG5hbWUpKSB7XG4gICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG5vdCBzdXJlIHdoeSBgYW55YCBpcyBuZWVkZWQuIEl0IHNlZW1zIGxpa2VcbiAgICAgIC8vIHRoaXMgc2hvdWxkIHdvcmsgd2l0aCBgYXMgV29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ11gLlxuICAgICAgYXdhaXQgY2FsbGJhY2socGFyYW0gYXMgYW55KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhIGNhbGxiYWNrIGFuZCByZXR1cm5zIGFuIGl0ZXJhYmxlIG9mIG1hdGNoaW5nIHBsdWdpbiBjYWxsYmFja3MsXG4gICAqIHdoZXJlIGVhY2ggY2FsbGJhY2sgaXMgd3JhcHBlZCB3aXRoIHRoZSBjdXJyZW50IGhhbmRsZXIgc3RhdGUgKGkuZS4gd2hlblxuICAgKiB5b3UgY2FsbCBlYWNoIGNhbGxiYWNrLCB3aGF0ZXZlciBvYmplY3QgcGFyYW1ldGVyIHlvdSBwYXNzIGl0IHdpbGxcbiAgICogYmUgbWVyZ2VkIHdpdGggdGhlIHBsdWdpbidzIGN1cnJlbnQgc3RhdGUpLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBmbyB0aGUgY2FsbGJhY2sgdG8gcnVuXG4gICAqIEByZXR1cm4ge0FycmF5PEZ1bmN0aW9uPn1cbiAgICovXG4gICppdGVyYXRlQ2FsbGJhY2tzPEMgZXh0ZW5kcyBrZXlvZiBXb3JrYm94UGx1Z2luPihcbiAgICBuYW1lOiBDLFxuICApOiBHZW5lcmF0b3I8Tm9uTnVsbGFibGU8V29ya2JveFBsdWdpbltDXT4+IHtcbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLl9zdHJhdGVneS5wbHVnaW5zKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbltuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3BsdWdpblN0YXRlTWFwLmdldChwbHVnaW4pO1xuICAgICAgICBjb25zdCBzdGF0ZWZ1bENhbGxiYWNrID0gKFxuICAgICAgICAgIHBhcmFtOiBPbWl0PFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtW0NdLCAnc3RhdGUnPixcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVmdWxQYXJhbSA9IHsuLi5wYXJhbSwgc3RhdGV9O1xuXG4gICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBub3Qgc3VyZSB3aHkgYGFueWAgaXMgbmVlZGVkLiBJdCBzZWVtcyBsaWtlXG4gICAgICAgICAgLy8gdGhpcyBzaG91bGQgd29yayB3aXRoIGBhcyBXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXWAuXG4gICAgICAgICAgcmV0dXJuIHBsdWdpbltuYW1lXSEoc3RhdGVmdWxQYXJhbSBhcyBhbnkpO1xuICAgICAgICB9O1xuICAgICAgICB5aWVsZCBzdGF0ZWZ1bENhbGxiYWNrIGFzIE5vbk51bGxhYmxlPFdvcmtib3hQbHVnaW5bQ10+O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcHJvbWlzZSB0byB0aGVcbiAgICogW2V4dGVuZCBsaWZldGltZSBwcm9taXNlc117QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2V4dGVuZGFibGVldmVudC1leHRlbmQtbGlmZXRpbWUtcHJvbWlzZXN9XG4gICAqIG9mIHRoZSBldmVudCBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcXVlc3QgYmVpbmcgaGFuZGxlZCAodXN1YWxseSBhXG4gICAqIGBGZXRjaEV2ZW50YCkuXG4gICAqXG4gICAqIE5vdGU6IHlvdSBjYW4gYXdhaXRcbiAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ+ZG9uZVdhaXRpbmd9XG4gICAqIHRvIGtub3cgd2hlbiBhbGwgYWRkZWQgcHJvbWlzZXMgaGF2ZSBzZXR0bGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge1Byb21pc2V9IHByb21pc2UgQSBwcm9taXNlIHRvIGFkZCB0byB0aGUgZXh0ZW5kIGxpZmV0aW1lIHByb21pc2VzXG4gICAqICAgICBvZiB0aGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqL1xuICB3YWl0VW50aWw8VD4ocHJvbWlzZTogUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgYWxsIHByb21pc2VzIHBhc3NlZCB0b1xuICAgKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn53YWl0VW50aWx9XG4gICAqIGhhdmUgc2V0dGxlZC5cbiAgICpcbiAgICogTm90ZTogYW55IHdvcmsgZG9uZSBhZnRlciBgZG9uZVdhaXRpbmcoKWAgc2V0dGxlcyBzaG91bGQgYmUgbWFudWFsbHlcbiAgICogcGFzc2VkIHRvIGFuIGV2ZW50J3MgYHdhaXRVbnRpbCgpYCBtZXRob2QgKG5vdCB0aGlzIGhhbmRsZXInc1xuICAgKiBgd2FpdFVudGlsKClgIG1ldGhvZCksIG90aGVyd2lzZSB0aGUgc2VydmljZSB3b3JrZXIgdGhyZWFkIG15IGJlIGtpbGxlZFxuICAgKiBwcmlvciB0byB5b3VyIHdvcmsgY29tcGxldGluZy5cbiAgICovXG4gIGFzeW5jIGRvbmVXYWl0aW5nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwcm9taXNlO1xuICAgIHdoaWxlICgocHJvbWlzZSA9IHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMuc2hpZnQoKSkpIHtcbiAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHJ1bm5pbmcgdGhlIHN0cmF0ZWd5IGFuZCBpbW1lZGlhdGVseSByZXNvbHZlcyBhbnkgcGVuZGluZ1xuICAgKiBgd2FpdFVudGlsKClgIHByb21pc2VzLlxuICAgKi9cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9oYW5kbGVyRGVmZXJyZWQucmVzb2x2ZShudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGNhbGwgY2FjaGVXaWxsVXBkYXRlIG9uIHRoZSBhdmFpbGFibGUgcGx1Z2lucyAob3IgdXNlXG4gICAqIHN0YXR1cyA9PT0gMjAwKSB0byBkZXRlcm1pbmUgaWYgdGhlIFJlc3BvbnNlIGlzIHNhZmUgYW5kIHZhbGlkIHRvIGNhY2hlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLnJlc3BvbnNlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIF9lbnN1cmVSZXNwb25zZVNhZmVUb0NhY2hlKFxuICAgIHJlc3BvbnNlOiBSZXNwb25zZSxcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4ge1xuICAgIGxldCByZXNwb25zZVRvQ2FjaGU6IFJlc3BvbnNlIHwgdW5kZWZpbmVkID0gcmVzcG9uc2U7XG4gICAgbGV0IHBsdWdpbnNVc2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVXaWxsVXBkYXRlJykpIHtcbiAgICAgIHJlc3BvbnNlVG9DYWNoZSA9XG4gICAgICAgIChhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgcmVxdWVzdDogdGhpcy5yZXF1ZXN0LFxuICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZVRvQ2FjaGUsXG4gICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgIH0pKSB8fCB1bmRlZmluZWQ7XG4gICAgICBwbHVnaW5zVXNlZCA9IHRydWU7XG5cbiAgICAgIGlmICghcmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGx1Z2luc1VzZWQpIHtcbiAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUgJiYgcmVzcG9uc2VUb0NhY2hlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHJlc3BvbnNlVG9DYWNoZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICBsb2dnZXIud2FybihcbiAgICAgICAgICAgICAgICBgVGhlIHJlc3BvbnNlIGZvciAnJHt0aGlzLnJlcXVlc3QudXJsfScgYCArXG4gICAgICAgICAgICAgICAgICBgaXMgYW4gb3BhcXVlIHJlc3BvbnNlLiBUaGUgY2FjaGluZyBzdHJhdGVneSB0aGF0IHlvdSdyZSBgICtcbiAgICAgICAgICAgICAgICAgIGB1c2luZyB3aWxsIG5vdCBjYWNoZSBvcGFxdWUgcmVzcG9uc2VzIGJ5IGRlZmF1bHQuYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgICBgVGhlIHJlc3BvbnNlIGZvciAnJHt0aGlzLnJlcXVlc3QudXJsfScgYCArXG4gICAgICAgICAgICAgICAgICBgcmV0dXJuZWQgYSBzdGF0dXMgY29kZSBvZiAnJHtyZXNwb25zZS5zdGF0dXN9JyBhbmQgd29uJ3QgYCArXG4gICAgICAgICAgICAgICAgICBgYmUgY2FjaGVkIGFzIGEgcmVzdWx0LmAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlVG9DYWNoZTtcbiAgfVxufVxuXG5leHBvcnQge1N0cmF0ZWd5SGFuZGxlcn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2NhY2hlTmFtZXN9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQge1xuICBIYW5kbGVyQ2FsbGJhY2tPcHRpb25zLFxuICBSb3V0ZUhhbmRsZXJPYmplY3QsXG4gIFdvcmtib3hQbHVnaW4sXG59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7U3RyYXRlZ3lIYW5kbGVyfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyYXRlZ3lPcHRpb25zIHtcbiAgY2FjaGVOYW1lPzogc3RyaW5nO1xuICBwbHVnaW5zPzogV29ya2JveFBsdWdpbltdO1xuICBmZXRjaE9wdGlvbnM/OiBSZXF1ZXN0SW5pdDtcbiAgbWF0Y2hPcHRpb25zPzogQ2FjaGVRdWVyeU9wdGlvbnM7XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3QgYmFzZSBjbGFzcyB0aGF0IGFsbCBvdGhlciBzdHJhdGVneSBjbGFzc2VzIG11c3QgZXh0ZW5kIGZyb206XG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5hYnN0cmFjdCBjbGFzcyBTdHJhdGVneSBpbXBsZW1lbnRzIFJvdXRlSGFuZGxlck9iamVjdCB7XG4gIGNhY2hlTmFtZTogc3RyaW5nO1xuICBwbHVnaW5zOiBXb3JrYm94UGx1Z2luW107XG4gIGZldGNoT3B0aW9ucz86IFJlcXVlc3RJbml0O1xuICBtYXRjaE9wdGlvbnM/OiBDYWNoZVF1ZXJ5T3B0aW9ucztcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2hhbmRsZShcbiAgICByZXF1ZXN0OiBSZXF1ZXN0LFxuICAgIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHN0cmF0ZWd5IGFuZCBzZXRzIGFsbCBkb2N1bWVudGVkIG9wdGlvblxuICAgKiBwcm9wZXJ0aWVzIGFzIHB1YmxpYyBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBOb3RlOiBpZiBhIGN1c3RvbSBzdHJhdGVneSBjbGFzcyBleHRlbmRzIHRoZSBiYXNlIFN0cmF0ZWd5IGNsYXNzIGFuZCBkb2VzXG4gICAqIG5vdCBuZWVkIG1vcmUgdGhhbiB0aGVzZSBwcm9wZXJ0aWVzLCBpdCBkb2VzIG5vdCBuZWVkIHRvIGRlZmluZSBpdHMgb3duXG4gICAqIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFRoZVxuICAgKiBbYENhY2hlUXVlcnlPcHRpb25zYF17QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnN9XG4gICAqIGZvciBhbnkgYGNhY2hlLm1hdGNoKClgIG9yIGBjYWNoZS5wdXQoKWAgY2FsbHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogU3RyYXRlZ3lPcHRpb25zID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgKiB7QGxpbmsgd29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUob3B0aW9ucy5jYWNoZU5hbWUpO1xuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0XG4gICAgICogW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgICAqIHVzZWQgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtBcnJheTxPYmplY3Q+fVxuICAgICAqL1xuICAgIHRoaXMucGx1Z2lucyA9IG9wdGlvbnMucGx1Z2lucyB8fCBbXTtcbiAgICAvKipcbiAgICAgKiBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnN9XG4gICAgICogb2YgYWxsIGZldGNoKCkgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmZldGNoT3B0aW9ucyA9IG9wdGlvbnMuZmV0Y2hPcHRpb25zO1xuICAgIC8qKlxuICAgICAqIFRoZVxuICAgICAqIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9uc31cbiAgICAgKiBmb3IgYW55IGBjYWNoZS5tYXRjaCgpYCBvciBgY2FjaGUucHV0KClgIGNhbGxzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5tYXRjaE9wdGlvbnMgPSBvcHRpb25zLm1hdGNoT3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgcmVxdWVzdCBzdHJhdGVneSBhbmQgcmV0dXJucyBhIGBQcm9taXNlYCB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoXG4gICAqIGEgYFJlc3BvbnNlYCwgaW52b2tpbmcgYWxsIHJlbGV2YW50IHBsdWdpbiBjYWxsYmFja3MuXG4gICAqXG4gICAqIFdoZW4gYSBzdHJhdGVneSBpbnN0YW5jZSBpcyByZWdpc3RlcmVkIHdpdGggYSBXb3JrYm94XG4gICAqIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGV9LCB0aGlzIG1ldGhvZCBpcyBhdXRvbWF0aWNhbGx5XG4gICAqIGNhbGxlZCB3aGVuIHRoZSByb3V0ZSBtYXRjaGVzLlxuICAgKlxuICAgKiBBbHRlcm5hdGl2ZWx5LCB0aGlzIG1ldGhvZCBjYW4gYmUgdXNlZCBpbiBhIHN0YW5kYWxvbmUgYEZldGNoRXZlbnRgXG4gICAqIGxpc3RlbmVyIGJ5IHBhc3NpbmcgaXQgdG8gYGV2ZW50LnJlc3BvbmRXaXRoKClgLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZldGNoRXZlbnR8T2JqZWN0fSBvcHRpb25zIEEgYEZldGNoRXZlbnRgIG9yIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgKiAgICAgcHJvcGVydGllcyBsaXN0ZWQgYmVsb3cuXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgKiAgICAgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtVUkx9IFtvcHRpb25zLnVybF1cbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5wYXJhbXNdXG4gICAqL1xuICBoYW5kbGUob3B0aW9uczogRmV0Y2hFdmVudCB8IEhhbmRsZXJDYWxsYmFja09wdGlvbnMpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgW3Jlc3BvbnNlRG9uZV0gPSB0aGlzLmhhbmRsZUFsbChvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzcG9uc2VEb25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbWlsYXIgdG8ge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGV9LCBidXRcbiAgICogaW5zdGVhZCBvZiBqdXN0IHJldHVybmluZyBhIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHRvIGEgYFJlc3BvbnNlYCBpdFxuICAgKiBpdCB3aWxsIHJldHVybiBhbiB0dXBsZSBvZiBgW3Jlc3BvbnNlLCBkb25lXWAgcHJvbWlzZXMsIHdoZXJlIHRoZSBmb3JtZXJcbiAgICogKGByZXNwb25zZWApIGlzIGVxdWl2YWxlbnQgdG8gd2hhdCBgaGFuZGxlKClgIHJldHVybnMsIGFuZCB0aGUgbGF0dGVyIGlzIGFcbiAgICogUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbmNlIGFueSBwcm9taXNlcyB0aGF0IHdlcmUgYWRkZWQgdG9cbiAgICogYGV2ZW50LndhaXRVbnRpbCgpYCBhcyBwYXJ0IG9mIHBlcmZvcm1pbmcgdGhlIHN0cmF0ZWd5IGhhdmUgY29tcGxldGVkLlxuICAgKlxuICAgKiBZb3UgY2FuIGF3YWl0IHRoZSBgZG9uZWAgcHJvbWlzZSB0byBlbnN1cmUgYW55IGV4dHJhIHdvcmsgcGVyZm9ybWVkIGJ5XG4gICAqIHRoZSBzdHJhdGVneSAodXN1YWxseSBjYWNoaW5nIHJlc3BvbnNlcykgY29tcGxldGVzIHN1Y2Nlc3NmdWxseS5cbiAgICpcbiAgICogQHBhcmFtIHtGZXRjaEV2ZW50fE9iamVjdH0gb3B0aW9ucyBBIGBGZXRjaEV2ZW50YCBvciBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICogICAgIHByb3BlcnRpZXMgbGlzdGVkIGJlbG93LlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICogICAgIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXVxuICAgKiBAcmV0dXJuIHtBcnJheTxQcm9taXNlPn0gQSB0dXBsZSBvZiBbcmVzcG9uc2UsIGRvbmVdXG4gICAqICAgICBwcm9taXNlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGRldGVybWluZSB3aGVuIHRoZSByZXNwb25zZSByZXNvbHZlcyBhc1xuICAgKiAgICAgd2VsbCBhcyB3aGVuIHRoZSBoYW5kbGVyIGhhcyBjb21wbGV0ZWQgYWxsIGl0cyB3b3JrLlxuICAgKi9cbiAgaGFuZGxlQWxsKFxuICAgIG9wdGlvbnM6IEZldGNoRXZlbnQgfCBIYW5kbGVyQ2FsbGJhY2tPcHRpb25zLFxuICApOiBbUHJvbWlzZTxSZXNwb25zZT4sIFByb21pc2U8dm9pZD5dIHtcbiAgICAvLyBBbGxvdyBmb3IgZmxleGlibGUgb3B0aW9ucyB0byBiZSBwYXNzZWQuXG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGZXRjaEV2ZW50KSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBldmVudDogb3B0aW9ucyxcbiAgICAgICAgcmVxdWVzdDogb3B0aW9ucy5yZXF1ZXN0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudCA9IG9wdGlvbnMuZXZlbnQ7XG4gICAgY29uc3QgcmVxdWVzdCA9XG4gICAgICB0eXBlb2Ygb3B0aW9ucy5yZXF1ZXN0ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IG5ldyBSZXF1ZXN0KG9wdGlvbnMucmVxdWVzdClcbiAgICAgICAgOiBvcHRpb25zLnJlcXVlc3Q7XG4gICAgY29uc3QgcGFyYW1zID0gJ3BhcmFtcycgaW4gb3B0aW9ucyA/IG9wdGlvbnMucGFyYW1zIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgaGFuZGxlciA9IG5ldyBTdHJhdGVneUhhbmRsZXIodGhpcywge2V2ZW50LCByZXF1ZXN0LCBwYXJhbXN9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlRG9uZSA9IHRoaXMuX2dldFJlc3BvbnNlKGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KTtcbiAgICBjb25zdCBoYW5kbGVyRG9uZSA9IHRoaXMuX2F3YWl0Q29tcGxldGUoXG4gICAgICByZXNwb25zZURvbmUsXG4gICAgICBoYW5kbGVyLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIGV2ZW50LFxuICAgICk7XG5cbiAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgcHJvbWlzZXMsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQcm9taXNlLmFsbCgpLlxuICAgIHJldHVybiBbcmVzcG9uc2VEb25lLCBoYW5kbGVyRG9uZV07XG4gIH1cblxuICBhc3luYyBfZ2V0UmVzcG9uc2UoXG4gICAgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyLFxuICAgIHJlcXVlc3Q6IFJlcXVlc3QsXG4gICAgZXZlbnQ6IEV4dGVuZGFibGVFdmVudCxcbiAgKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyV2lsbFN0YXJ0Jywge2V2ZW50LCByZXF1ZXN0fSk7XG5cbiAgICBsZXQgcmVzcG9uc2U6IFJlc3BvbnNlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKTtcbiAgICAgIC8vIFRoZSBcIm9mZmljaWFsXCIgU3RyYXRlZ3kgc3ViY2xhc3NlcyBhbGwgdGhyb3cgdGhpcyBlcnJvciBhdXRvbWF0aWNhbGx5LFxuICAgICAgLy8gYnV0IGluIGNhc2UgYSB0aGlyZC1wYXJ0eSBTdHJhdGVneSBkb2Vzbid0LCBlbnN1cmUgdGhhdCB3ZSBoYXZlIGFcbiAgICAgIC8vIGNvbnNpc3RlbnQgZmFpbHVyZSB3aGVuIHRoZXJlJ3Mgbm8gcmVzcG9uc2Ugb3IgYW4gZXJyb3IgcmVzcG9uc2UuXG4gICAgICBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7dXJsOiByZXF1ZXN0LnVybH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGhhbmRsZXIuaXRlcmF0ZUNhbGxiYWNrcygnaGFuZGxlckRpZEVycm9yJykpIHtcbiAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHtlcnJvciwgZXZlbnQsIHJlcXVlc3R9KTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coXG4gICAgICAgICAgYFdoaWxlIHJlc3BvbmRpbmcgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScsIGAgK1xuICAgICAgICAgICAgYGFuICR7XG4gICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci50b1N0cmluZygpIDogJydcbiAgICAgICAgICAgIH0gZXJyb3Igb2NjdXJyZWQuIFVzaW5nIGEgZmFsbGJhY2sgcmVzcG9uc2UgcHJvdmlkZWQgYnkgYCArXG4gICAgICAgICAgICBgYSBoYW5kbGVyRGlkRXJyb3IgcGx1Z2luLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBoYW5kbGVyLml0ZXJhdGVDYWxsYmFja3MoJ2hhbmRsZXJXaWxsUmVzcG9uZCcpKSB7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHtldmVudCwgcmVxdWVzdCwgcmVzcG9uc2V9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBfYXdhaXRDb21wbGV0ZShcbiAgICByZXNwb25zZURvbmU6IFByb21pc2U8UmVzcG9uc2U+LFxuICAgIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcixcbiAgICByZXF1ZXN0OiBSZXF1ZXN0LFxuICAgIGV2ZW50OiBFeHRlbmRhYmxlRXZlbnQsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCByZXNwb25zZTtcbiAgICBsZXQgZXJyb3I7XG5cbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZURvbmU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElnbm9yZSBlcnJvcnMsIGFzIHJlc3BvbnNlIGVycm9ycyBzaG91bGQgYmUgY2F1Z2h0IHZpYSB0aGUgYHJlc3BvbnNlYFxuICAgICAgLy8gcHJvbWlzZSBhYm92ZS4gVGhlIGBkb25lYCBwcm9taXNlIHdpbGwgb25seSB0aHJvdyBmb3IgZXJyb3JzIGluXG4gICAgICAvLyBwcm9taXNlcyBwYXNzZWQgdG8gYGhhbmRsZXIud2FpdFVudGlsKClgLlxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlckRpZFJlc3BvbmQnLCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICByZXNwb25zZSxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgaGFuZGxlci5kb25lV2FpdGluZygpO1xuICAgIH0gY2F0Y2ggKHdhaXRVbnRpbEVycm9yKSB7XG4gICAgICBpZiAod2FpdFVudGlsRXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBlcnJvciA9IHdhaXRVbnRpbEVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyRGlkQ29tcGxldGUnLCB7XG4gICAgICBldmVudCxcbiAgICAgIHJlcXVlc3QsXG4gICAgICByZXNwb25zZSxcbiAgICAgIGVycm9yOiBlcnJvciBhcyBFcnJvcixcbiAgICB9KTtcbiAgICBoYW5kbGVyLmRlc3Ryb3koKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7U3RyYXRlZ3l9O1xuXG4vKipcbiAqIENsYXNzZXMgZXh0ZW5kaW5nIHRoZSBgU3RyYXRlZ3lgIGJhc2VkIGNsYXNzIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QsXG4gKiBhbmQgbGV2ZXJhZ2UgdGhlIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfVxuICogYXJnIHRvIHBlcmZvcm0gYWxsIGZldGNoaW5nIGFuZCBjYWNoZSBsb2dpYywgd2hpY2ggd2lsbCBlbnN1cmUgYWxsIHJlbGV2YW50XG4gKiBjYWNoZSwgY2FjaGUgb3B0aW9ucywgZmV0Y2ggb3B0aW9ucyBhbmQgcGx1Z2lucyBhcmUgdXNlZCAocGVyIHRoZSBjdXJyZW50XG4gKiBzdHJhdGVneSBpbnN0YW5jZSkuXG4gKlxuICogQG5hbWUgX2hhbmRsZVxuICogQGluc3RhbmNlXG4gKiBAYWJzdHJhY3RcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXJcbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqL1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSB7XG4gIHN0cmF0ZWd5U3RhcnQ6IChzdHJhdGVneU5hbWU6IHN0cmluZywgcmVxdWVzdDogUmVxdWVzdCk6IHN0cmluZyA9PlxuICAgIGBVc2luZyAke3N0cmF0ZWd5TmFtZX0gdG8gcmVzcG9uZCB0byAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9J2AsXG4gIHByaW50RmluYWxSZXNwb25zZTogKHJlc3BvbnNlPzogUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyB0aGUgZmluYWwgcmVzcG9uc2UgaGVyZS5gKTtcbiAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UgfHwgJ1tObyByZXNwb25zZSByZXR1cm5lZF0nKTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbiAgfSxcbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCB7U3RyYXRlZ3l9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHtTdHJhdGVneUhhbmRsZXJ9IGZyb20gJy4vU3RyYXRlZ3lIYW5kbGVyLmpzJztcbmltcG9ydCB7bWVzc2FnZXN9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhIFtjYWNoZS1maXJzdF0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1zdHJhdGVnaWVzLW92ZXJ2aWV3LyNjYWNoZS1maXJzdC1mYWxsaW5nLWJhY2stdG8tbmV0d29yaylcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogQSBjYWNoZSBmaXJzdCBzdHJhdGVneSBpcyB1c2VmdWwgZm9yIGFzc2V0cyB0aGF0IGhhdmUgYmVlbiByZXZpc2lvbmVkLFxuICogc3VjaCBhcyBVUkxzIGxpa2UgYC9zdHlsZXMvZXhhbXBsZS5hOGY1ZjEuY3NzYCwgc2luY2UgdGhleVxuICogY2FuIGJlIGNhY2hlZCBmb3IgbG9uZyBwZXJpb2RzIG9mIHRpbWUuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgYW5kIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3dcbiAqIGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBDYWNoZUZpcnN0IGV4dGVuZHMgU3RyYXRlZ3kge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBfaGFuZGxlKHJlcXVlc3Q6IFJlcXVlc3QsIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBsb2dzID0gW107XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICBmdW5jTmFtZTogJ21ha2VSZXF1ZXN0JyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG5cbiAgICBsZXQgZXJyb3I6IEVycm9yIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICBgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuIGAgK1xuICAgICAgICAgICAgYFdpbGwgcmVzcG9uZCB3aXRoIGEgbmV0d29yayByZXF1ZXN0LmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZmV0Y2hBbmRDYWNoZVB1dChyZXF1ZXN0KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBsb2dzLnB1c2goYEdvdCByZXNwb25zZSBmcm9tIG5ldHdvcmsuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9ncy5wdXNoKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dzLnB1c2goYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSxcbiAgICAgICk7XG4gICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHt1cmw6IHJlcXVlc3QudXJsLCBlcnJvcn0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHtDYWNoZUZpcnN0fTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7V29ya2JveFBsdWdpbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgY29uc3QgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbjogV29ya2JveFBsdWdpbiA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSB2YWxpZCByZXNwb25zZSAodG8gYWxsb3cgY2FjaGluZykgaWYgdGhlIHN0YXR1cyBpcyAyMDAgKE9LKSBvclxuICAgKiAwIChvcGFxdWUpLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLnJlc3BvbnNlXG4gICAqIEByZXR1cm4ge1Jlc3BvbnNlfG51bGx9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWNoZVdpbGxVcGRhdGU6IGFzeW5jICh7cmVzcG9uc2V9KSA9PiB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCB7Y2FjaGVPa0FuZE9wYXF1ZVBsdWdpbn0gZnJvbSAnLi9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4uanMnO1xuaW1wb3J0IHtTdHJhdGVneSwgU3RyYXRlZ3lPcHRpb25zfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7U3RyYXRlZ3lIYW5kbGVyfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya0ZpcnN0T3B0aW9ucyBleHRlbmRzIFN0cmF0ZWd5T3B0aW9ucyB7XG4gIG5ldHdvcmtUaW1lb3V0U2Vjb25kcz86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbbmV0d29yayBmaXJzdF0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1zdHJhdGVnaWVzLW92ZXJ2aWV3LyNuZXR3b3JrLWZpcnN0LWZhbGxpbmctYmFjay10by1jYWNoZSlcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBzdHJhdGVneSB3aWxsIGNhY2hlIHJlc3BvbnNlcyB3aXRoIGEgMjAwIHN0YXR1cyBjb2RlIGFzXG4gKiB3ZWxsIGFzIFtvcGFxdWUgcmVzcG9uc2VzXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXJlc291cmNlcy1kdXJpbmctcnVudGltZS8jb3BhcXVlLXJlc3BvbnNlcykuXG4gKiBPcGFxdWUgcmVzcG9uc2VzIGFyZSBhcmUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIHdoZXJlIHRoZSByZXNwb25zZSBkb2Vzbid0XG4gKiBzdXBwb3J0IFtDT1JTXShodHRwczovL2VuYWJsZS1jb3JzLm9yZy8pLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgTmV0d29ya0ZpcnN0IGV4dGVuZHMgU3RyYXRlZ3kge1xuICBwcml2YXRlIHJlYWRvbmx5IF9uZXR3b3JrVGltZW91dFNlY29uZHM6IG51bWJlcjtcblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9ucylcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kc10gSWYgc2V0LCBhbnkgbmV0d29yayByZXF1ZXN0c1xuICAgKiB0aGF0IGZhaWwgdG8gcmVzcG9uZCB3aXRoaW4gdGhlIHRpbWVvdXQgd2lsbCBmYWxsYmFjayB0byB0aGUgY2FjaGUuXG4gICAqXG4gICAqIFRoaXMgb3B0aW9uIGNhbiBiZSB1c2VkIHRvIGNvbWJhdFxuICAgKiBcIltsaWUtZmlde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcGVyZm9ybWFuY2UvcG9vci1jb25uZWN0aXZpdHkvI2xpZS1maX1cIlxuICAgKiBzY2VuYXJpb3MuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZXR3b3JrRmlyc3RPcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKTtcblxuICAgIC8vIElmIHRoaXMgaW5zdGFuY2UgY29udGFpbnMgbm8gcGx1Z2lucyB3aXRoIGEgJ2NhY2hlV2lsbFVwZGF0ZScgY2FsbGJhY2ssXG4gICAgLy8gcHJlcGVuZCB0aGUgYGNhY2hlT2tBbmRPcGFxdWVQbHVnaW5gIHBsdWdpbiB0byB0aGUgcGx1Z2lucyBsaXN0LlxuICAgIGlmICghdGhpcy5wbHVnaW5zLnNvbWUoKHApID0+ICdjYWNoZVdpbGxVcGRhdGUnIGluIHApKSB7XG4gICAgICB0aGlzLnBsdWdpbnMudW5zaGlmdChjYWNoZU9rQW5kT3BhcXVlUGx1Z2luKTtcbiAgICB9XG5cbiAgICB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgPSBvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kcyB8fCAwO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICduZXR3b3JrVGltZW91dFNlY29uZHMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBfaGFuZGxlKHJlcXVlc3Q6IFJlcXVlc3QsIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBsb2dzOiBhbnlbXSA9IFtdO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgZnVuY05hbWU6ICdoYW5kbGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD5bXSA9IFtdO1xuICAgIGxldCB0aW1lb3V0SWQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMpIHtcbiAgICAgIGNvbnN0IHtpZCwgcHJvbWlzZX0gPSB0aGlzLl9nZXRUaW1lb3V0UHJvbWlzZSh7cmVxdWVzdCwgbG9ncywgaGFuZGxlcn0pO1xuICAgICAgdGltZW91dElkID0gaWQ7XG4gICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IG5ldHdvcmtQcm9taXNlID0gdGhpcy5fZ2V0TmV0d29ya1Byb21pc2Uoe1xuICAgICAgdGltZW91dElkLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIGxvZ3MsXG4gICAgICBoYW5kbGVyLFxuICAgIH0pO1xuXG4gICAgcHJvbWlzZXMucHVzaChuZXR3b3JrUHJvbWlzZSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIud2FpdFVudGlsKFxuICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gUHJvbWlzZS5yYWNlKCkgd2lsbCByZXNvbHZlIGFzIHNvb24gYXMgdGhlIGZpcnN0IHByb21pc2UgcmVzb2x2ZXMuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGF3YWl0IGhhbmRsZXIud2FpdFVudGlsKFByb21pc2UucmFjZShwcm9taXNlcykpKSB8fFxuICAgICAgICAgIC8vIElmIFByb21pc2UucmFjZSgpIHJlc29sdmVkIHdpdGggbnVsbCwgaXQgbWlnaHQgYmUgZHVlIHRvIGEgbmV0d29ya1xuICAgICAgICAgIC8vIHRpbWVvdXQgKyBhIGNhY2hlIG1pc3MuIElmIHRoYXQgd2VyZSB0byBoYXBwZW4sIHdlJ2QgcmF0aGVyIHdhaXQgdW50aWxcbiAgICAgICAgICAvLyB0aGUgbmV0d29ya1Byb21pc2UgcmVzb2x2ZXMgaW5zdGVhZCBvZiByZXR1cm5pbmcgbnVsbC5cbiAgICAgICAgICAvLyBOb3RlIHRoYXQgaXQncyBmaW5lIHRvIGF3YWl0IGFuIGFscmVhZHktcmVzb2x2ZWQgcHJvbWlzZSwgc28gd2UgZG9uJ3RcbiAgICAgICAgICAvLyBoYXZlIHRvIGNoZWNrIHRvIHNlZSBpZiBpdCdzIHN0aWxsIFwiaW4gZmxpZ2h0XCIuXG4gICAgICAgICAgKGF3YWl0IG5ldHdvcmtQcm9taXNlKVxuICAgICAgICApO1xuICAgICAgfSkoKSxcbiAgICApO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgbWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpLFxuICAgICAgKTtcbiAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhsb2cpO1xuICAgICAgfVxuICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywge3VybDogcmVxdWVzdC51cmx9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMubG9ncyBBIHJlZmVyZW5jZSB0byB0aGUgbG9ncyBhcnJheVxuICAgKiBAcGFyYW0ge0V2ZW50fSBvcHRpb25zLmV2ZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0VGltZW91dFByb21pc2Uoe1xuICAgIHJlcXVlc3QsXG4gICAgbG9ncyxcbiAgICBoYW5kbGVyLFxuICB9OiB7XG4gICAgcmVxdWVzdDogUmVxdWVzdDtcbiAgICBsb2dzOiBhbnlbXTtcbiAgICBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXI7XG4gIH0pOiB7cHJvbWlzZTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD47IGlkPzogbnVtYmVyfSB7XG4gICAgbGV0IHRpbWVvdXRJZDtcbiAgICBjb25zdCB0aW1lb3V0UHJvbWlzZTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4gPSBuZXcgUHJvbWlzZShcbiAgICAgIChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uTmV0d29ya1RpbWVvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICAgICAgYFRpbWluZyBvdXQgdGhlIG5ldHdvcmsgcmVzcG9uc2UgYXQgYCArXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzfSBzZWNvbmRzLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgb25OZXR3b3JrVGltZW91dCxcbiAgICAgICAgICB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb21pc2U6IHRpbWVvdXRQcm9taXNlLFxuICAgICAgaWQ6IHRpbWVvdXRJZCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7bnVtYmVyfHVuZGVmaW5lZH0gb3B0aW9ucy50aW1lb3V0SWRcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5sb2dzIEEgcmVmZXJlbmNlIHRvIHRoZSBsb2dzIEFycmF5LlxuICAgKiBAcGFyYW0ge0V2ZW50fSBvcHRpb25zLmV2ZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgX2dldE5ldHdvcmtQcm9taXNlKHtcbiAgICB0aW1lb3V0SWQsXG4gICAgcmVxdWVzdCxcbiAgICBsb2dzLFxuICAgIGhhbmRsZXIsXG4gIH06IHtcbiAgICByZXF1ZXN0OiBSZXF1ZXN0O1xuICAgIGxvZ3M6IGFueVtdO1xuICAgIHRpbWVvdXRJZD86IG51bWJlcjtcbiAgICBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXI7XG4gIH0pOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPiB7XG4gICAgbGV0IGVycm9yO1xuICAgIGxldCByZXNwb25zZTtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoQW5kQ2FjaGVQdXQocmVxdWVzdCk7XG4gICAgfSBjYXRjaCAoZmV0Y2hFcnJvcikge1xuICAgICAgaWYgKGZldGNoRXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBlcnJvciA9IGZldGNoRXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBsb2dzLnB1c2goYEdvdCByZXNwb25zZSBmcm9tIG5ldHdvcmsuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgYFVuYWJsZSB0byBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrLiBXaWxsIHJlc3BvbmQgYCArXG4gICAgICAgICAgICBgd2l0aCBhIGNhY2hlZCByZXNwb25zZS5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlcnJvciB8fCAhcmVzcG9uc2UpIHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgICBgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfSdgICsgYCBjYWNoZS5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9ncy5wdXNoKGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQge05ldHdvcmtGaXJzdH07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge3RpbWVvdXR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcblxuaW1wb3J0IHtTdHJhdGVneSwgU3RyYXRlZ3lPcHRpb25zfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7U3RyYXRlZ3lIYW5kbGVyfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmludGVyZmFjZSBOZXR3b3JrT25seU9wdGlvbnNcbiAgZXh0ZW5kcyBPbWl0PFN0cmF0ZWd5T3B0aW9ucywgJ2NhY2hlTmFtZScgfCAnbWF0Y2hPcHRpb25zJz4ge1xuICBuZXR3b3JrVGltZW91dFNlY29uZHM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYVxuICogW25ldHdvcmstb25seV0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1zdHJhdGVnaWVzLW92ZXJ2aWV3LyNuZXR3b3JrLW9ubHkpXG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHRha2UgYWR2YW50YWdlIG9mIGFueVxuICogW1dvcmtib3ggcGx1Z2luc10oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvdXNpbmctcGx1Z2lucy8pLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIHRoaXMgd2lsbCB0aHJvdyBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgTmV0d29ya09ubHkgZXh0ZW5kcyBTdHJhdGVneSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX25ldHdvcmtUaW1lb3V0U2Vjb25kczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzXSBJZiBzZXQsIGFueSBuZXR3b3JrIHJlcXVlc3RzXG4gICAqIHRoYXQgZmFpbCB0byByZXNwb25kIHdpdGhpbiB0aGUgdGltZW91dCB3aWxsIHJlc3VsdCBpbiBhIG5ldHdvcmsgZXJyb3IuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZXR3b3JrT25seU9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHMgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIF9oYW5kbGUocmVxdWVzdDogUmVxdWVzdCwgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgIGZ1bmNOYW1lOiAnX2hhbmRsZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGVycm9yOiBFcnJvciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgcmVzcG9uc2U6IFJlc3BvbnNlIHwgdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPltdID0gW1xuICAgICAgICBoYW5kbGVyLmZldGNoKHJlcXVlc3QpLFxuICAgICAgXTtcblxuICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IHRpbWVvdXQoXG4gICAgICAgICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMCxcbiAgICAgICAgKSBhcyBQcm9taXNlPHVuZGVmaW5lZD47XG4gICAgICAgIHByb21pc2VzLnB1c2godGltZW91dFByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICByZXNwb25zZSA9IGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVGltZWQgb3V0IHRoZSBuZXR3b3JrIHJlc3BvbnNlIGFmdGVyIGAgK1xuICAgICAgICAgICAgYCR7dGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzfSBzZWNvbmRzLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgbWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpLFxuICAgICAgKTtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBsb2dnZXIubG9nKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhgVW5hYmxlIHRvIGdldCBhIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsuYCk7XG4gICAgICB9XG4gICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7dXJsOiByZXF1ZXN0LnVybCwgZXJyb3J9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB7TmV0d29ya09ubHksIE5ldHdvcmtPbmx5T3B0aW9uc307XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCB7Y2FjaGVPa0FuZE9wYXF1ZVBsdWdpbn0gZnJvbSAnLi9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4uanMnO1xuaW1wb3J0IHtTdHJhdGVneSwgU3RyYXRlZ3lPcHRpb25zfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7U3RyYXRlZ3lIYW5kbGVyfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYVxuICogW3N0YWxlLXdoaWxlLXJldmFsaWRhdGVdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZSlcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogUmVzb3VyY2VzIGFyZSByZXF1ZXN0ZWQgZnJvbSBib3RoIHRoZSBjYWNoZSBhbmQgdGhlIG5ldHdvcmsgaW4gcGFyYWxsZWwuXG4gKiBUaGUgc3RyYXRlZ3kgd2lsbCByZXNwb25kIHdpdGggdGhlIGNhY2hlZCB2ZXJzaW9uIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlXG4gKiB3YWl0IGZvciB0aGUgbmV0d29yayByZXNwb25zZS4gVGhlIGNhY2hlIGlzIHVwZGF0ZWQgd2l0aCB0aGUgbmV0d29yayByZXNwb25zZVxuICogd2l0aCBlYWNoIHN1Y2Nlc3NmdWwgcmVxdWVzdC5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIHN0cmF0ZWd5IHdpbGwgY2FjaGUgcmVzcG9uc2VzIHdpdGggYSAyMDAgc3RhdHVzIGNvZGUgYXNcbiAqIHdlbGwgYXMgW29wYXF1ZSByZXNwb25zZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctcmVzb3VyY2VzLWR1cmluZy1ydW50aW1lLyNvcGFxdWUtcmVzcG9uc2VzKS5cbiAqIE9wYXF1ZSByZXNwb25zZXMgYXJlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyB3aGVyZSB0aGUgcmVzcG9uc2UgZG9lc24ndFxuICogc3VwcG9ydCBbQ09SU10oaHR0cHM6Ly9lbmFibGUtY29ycy5vcmcvKS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCBhbmQgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvd1xuICogYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIFN0YWxlV2hpbGVSZXZhbGlkYXRlIGV4dGVuZHMgU3RyYXRlZ3kge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9ucylcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFN0cmF0ZWd5T3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAvLyBJZiB0aGlzIGluc3RhbmNlIGNvbnRhaW5zIG5vIHBsdWdpbnMgd2l0aCBhICdjYWNoZVdpbGxVcGRhdGUnIGNhbGxiYWNrLFxuICAgIC8vIHByZXBlbmQgdGhlIGBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luYCBwbHVnaW4gdG8gdGhlIHBsdWdpbnMgbGlzdC5cbiAgICBpZiAoIXRoaXMucGx1Z2lucy5zb21lKChwKSA9PiAnY2FjaGVXaWxsVXBkYXRlJyBpbiBwKSkge1xuICAgICAgdGhpcy5wbHVnaW5zLnVuc2hpZnQoY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0OiBSZXF1ZXN0LCBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgbG9ncyA9IFtdO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgZnVuY05hbWU6ICdoYW5kbGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZldGNoQW5kQ2FjaGVQcm9taXNlID0gaGFuZGxlci5mZXRjaEFuZENhY2hlUHV0KHJlcXVlc3QpLmNhdGNoKCgpID0+IHtcbiAgICAgIC8vIFN3YWxsb3cgdGhpcyBlcnJvciBiZWNhdXNlIGEgJ25vLXJlc3BvbnNlJyBlcnJvciB3aWxsIGJlIHRocm93biBpblxuICAgICAgLy8gbWFpbiBoYW5kbGVyIHJldHVybiBmbG93LiBUaGlzIHdpbGwgYmUgaW4gdGhlIGB3YWl0VW50aWwoKWAgZmxvdy5cbiAgICB9KTtcbiAgICB2b2lkIGhhbmRsZXIud2FpdFVudGlsKGZldGNoQW5kQ2FjaGVQcm9taXNlKTtcblxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcblxuICAgIGxldCBlcnJvcjtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICBgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfSdgICtcbiAgICAgICAgICAgIGAgY2FjaGUuIFdpbGwgdXBkYXRlIHdpdGggdGhlIG5ldHdvcmsgcmVzcG9uc2UgaW4gdGhlIGJhY2tncm91bmQuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9ncy5wdXNoKFxuICAgICAgICAgIGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS4gYCArXG4gICAgICAgICAgICBgV2lsbCB3YWl0IGZvciB0aGUgbmV0d29yayByZXNwb25zZS5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gTk9URShwaGlsaXB3YWx0b24pOiBSZWFsbHkgYW5ub3lpbmcgdGhhdCB3ZSBoYXZlIHRvIHR5cGUgY2FzdCBoZXJlLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzIwMDA2XG4gICAgICAgIHJlc3BvbnNlID0gKGF3YWl0IGZldGNoQW5kQ2FjaGVQcm9taXNlKSBhcyBSZXNwb25zZSB8IHVuZGVmaW5lZDtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSxcbiAgICAgICk7XG4gICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHt1cmw6IHJlcXVlc3QudXJsLCBlcnJvcn0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHtTdGFsZVdoaWxlUmV2YWxpZGF0ZX07XG4iLCAiaW1wb3J0IHsgZGVmYXVsdCBhcyBwYXJhbXMgfSBmcm9tICdAcGFyYW1zJ1xuaW1wb3J0IHsgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gfSBmcm9tICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZSdcbmltcG9ydCB7IEV4cGlyYXRpb25QbHVnaW4gfSBmcm9tICd3b3JrYm94LWV4cGlyYXRpb24nXG5pbXBvcnQgeyByZWdpc3RlclJvdXRlLCBzZXRDYXRjaEhhbmRsZXIgfSBmcm9tICd3b3JrYm94LXJvdXRpbmcnXG5pbXBvcnQgeyBDYWNoZUZpcnN0LCBOZXR3b3JrRmlyc3QsIE5ldHdvcmtPbmx5LCBTdGFsZVdoaWxlUmV2YWxpZGF0ZSB9IGZyb20gJ3dvcmtib3gtc3RyYXRlZ2llcydcblxuc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MgPSAhcGFyYW1zLmRlYnVnXG5cbmNvbnN0IGRlYnVnID0gKC4uLmRhdGE6IGFueVtdKTogdm9pZCA9PiB7XG4gICAgaWYgKHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnNvbGUuZGVidWcoJ1twd2FdJywgLi4uZGF0YSk7XG59XG5cbmNvbnN0IGNhY2hlUHJlZml4ID0gJ2h1Z28tcHdhLSdcbmNvbnN0IGZhbGxiYWNrc0NhY2hlID0gY2FjaGVQcmVmaXggKyAnZmFsbGJhY2tzJ1xuLy8gRmlsdGVyIHRoZSBpbnZhbGlkIFVSTHMsIHN1Y2ggYXMgdGVtcG9yYXJ5IFVSTHMgZ2VuZXJhdGVkIGJ5IEh1Z28gUG9zdFByb2dyZXNzLlxuY29uc3QgcHJlY2FjaGVzID0gcGFyYW1zLnByZWNhY2hlcy5maWx0ZXIoKHVybCkgPT4gdXJsLmluZGV4T2YoJ19faF9wcF9sMScpICE9PSAwKVxuZGVidWcoJ3ByZWNhY2hlcycsIHByZWNhY2hlcylcblxuLy8gUmVnaXN0ZXIgcGFnZSByb3V0ZSB3aXRoIE5ldHdvcmtGaXJzdCBzdHJhdGVneS5cbi8vIFRoZXJlIHdpbGwgYmUgYSBwcm9ibGVtIHdpdGggQ2FjaGVGaXJzdCBvciBTdGFsZVdoaWxlUmV2YWxpZGF0ZSBzdHJhdGVneVxuLy8gaWYgdGhlIGNhY2hlZCBwYWdlIGxvYWRzIG5vIGxvbmdlciBleGlzdCBvciBleHBpcmVkIGFzc2V0cywgc3VjaCBhcyBDU1MgYW5kIEpTLlxucmVnaXN0ZXJSb3V0ZShcbiAgICAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJztcbiAgICB9LFxuICAgIG5ldyBOZXR3b3JrRmlyc3Qoe1xuICAgICAgICBjYWNoZU5hbWU6IGNhY2hlUHJlZml4ICsgJ3BhZ2VzJyxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgbmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgICAgICAgICBzdGF0dXNlczogWzIwMF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KVxuKVxuXG4vLyBSZWdpc3RlciBhc3NldHMgcm91dGVzLlxuY29uc3QgYXNzZXRzID0gWydmb250JywgJ2ltYWdlJywgJ3NjcmlwdCcsICdzdHlsZSddXG5mb3IgKGxldCBpIGluIGFzc2V0cykge1xuICAgIGNvbnN0IGtpbmQgPSBhc3NldHNbaV1cbiAgICBjb25zdCBjYWNoZSA9IHBhcmFtcy5jYWNoZXNba2luZF1cbiAgICAvLyBSZW1vdmUgdGhlIHRyYWlsaW5nIHNsYXNoIGZyb20gb3JpZ2luLlxuICAgIGNvbnN0IG9yaWdpbnMgPSBjYWNoZS5vcmlnaW5zID8gY2FjaGUub3JpZ2lucy5tYXAoKG9yaWdpbikgPT4gb3JpZ2luLnJlcGxhY2UoL1xcLyQvLCAnJykpIDogW11cbiAgICBjb25zdCBjYWNoZU5hbWUgPSBjYWNoZVByZWZpeCArIGtpbmQgKyAncydcbiAgICBsZXQgc3RyYXRlZ3kgPSBudWxsXG4gICAgbGV0IHBsdWdpbnMgPSBbXG4gICAgICAgIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbih7XG4gICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRXhwaXJhdGlvblBsdWdpbih7XG4gICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiBjYWNoZS5tYXhfYWdlID8/IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICB9KVxuICAgIF1cbiAgICBzd2l0Y2ggKGNhY2hlLnN0cmF0ZWd5KSB7XG4gICAgICAgIGNhc2UgJ25ldHdvcmstZmlyc3QnOlxuICAgICAgICAgICAgc3RyYXRlZ3kgPSBuZXcgTmV0d29ya0ZpcnN0KHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IGNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2NhY2hlLWZpcnN0JzpcbiAgICAgICAgICAgIHN0cmF0ZWd5ID0gbmV3IENhY2hlRmlyc3Qoe1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZSc6XG4gICAgICAgICAgICBzdHJhdGVneSA9IG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBjYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHN0cmF0ZWd5IGZvciBraW5kIFwiJHtraW5kfVwiOiBgICsgY2FjaGUuc3RyYXRlZ3kpXG4gICAgfVxuICAgIHJlZ2lzdGVyUm91dGUoXG4gICAgICAgICh7IHJlcXVlc3QsIHNhbWVPcmlnaW4sIHVybCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5kZXN0aW5hdGlvbiAhPT0ga2luZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBvcmlnaW5zXG4gICAgICAgICAgICBpZiAoc2FtZU9yaWdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcmlnaW5zICYmIG9yaWdpbnMuaW5jbHVkZXModXJsLm9yaWdpbi5yZXBsYWNlKC9cXC8kLywgJycpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlYnVnKGAke3VybH0gd2lsbCBub3QgYmUgY2FjaGVkLmApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc3RyYXRlZ3lcbiAgICApO1xufVxuXG4vLyBSZWdpc3RlciBkZWZhdWx0IGhhbmRsZXIuXG5yZWdpc3RlclJvdXRlKCgpID0+IHRydWUsIG5ldyBOZXR3b3JrT25seSgpKVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG4gICAgZXZlbnQud2FpdFVudGlsKFxuICAgICAgICBzZWxmLmNhY2hlc1xuICAgICAgICAgICAgLm9wZW4oZmFsbGJhY2tzQ2FjaGUpXG4gICAgICAgICAgICAudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwocHJlY2FjaGVzKSlcbiAgICApO1xufSk7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyBvcHRpb25zID0+IHtcbiAgICBkZWJ1ZygnY2F0Y2ggaGFuZGxlcicsIG9wdGlvbnMucmVxdWVzdClcbiAgICBjb25zdCBkZXN0ID0gb3B0aW9ucy5yZXF1ZXN0LmRlc3RpbmF0aW9uXG4gICAgY29uc3QgdXJsID0gb3B0aW9ucy5yZXF1ZXN0LnVybFxuICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3BlbihmYWxsYmFja3NDYWNoZSlcblxuICAgIC8vIFJldHVybiB0aGUgY2FjaGVkIGl0ZW0gaWYgZm91bmQuXG4gICAgY29uc3QgY2FjaGVkID0gYXdhaXQgY2FjaGUubWF0Y2godXJsKVxuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFxuICAgIH1cblxuICAgIGlmIChkZXN0ID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICAgIGxldCBvZmZsaW5lOiBSZXNwb25zZSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGxhbmcgPSAnJ1xuICAgICAgICBsZXQgcGF0aHM6IHN0cmluZ1tdXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihwYXJhbXMuYmFzZVVSTCkgPT09IDApIHtcbiAgICAgICAgICAgIHBhdGhzID0gdXJsLnJlcGxhY2UocGFyYW1zLmJhc2VVUkwsICcnKS5zcGxpdCgnLycsIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRocyA9IChuZXcgVVJMKHVybCkpLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJy8nLCAxKVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRocy5sZW5ndGggPiAwICYmIHBhcmFtcy5sYW5ncy5pbmNsdWRlcyhwYXRoc1swXSkpIHtcbiAgICAgICAgICAgIGxhbmcgPSBwYXRoc1swXVxuICAgICAgICAgICAgY29uc3Qgb2ZmbGluZVVybCA9IGAke3BhcmFtcy5iYXNlVVJMfSR7bGFuZ30vb2ZmbGluZS9gXG4gICAgICAgICAgICBkZWJ1ZygnbG9hZGluZyBtdWx0aWxpbmd1YWwgb2ZmbGluZSBwYWdlJywgb2ZmbGluZVVybClcbiAgICAgICAgICAgIG9mZmxpbmUgPSBhd2FpdCBjYWNoZS5tYXRjaChvZmZsaW5lVXJsKVxuICAgICAgICAgICAgaWYgKG9mZmxpbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2ZmbGluZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2ZmbGluZVVybCA9IGAke3BhcmFtcy5iYXNlVVJMfW9mZmxpbmUvYFxuICAgICAgICBkZWJ1ZygnbG9hZGluZyB0aGUgZmFsbGJhY2sgb2ZmbGluZSBwYWdlJywgb2ZmbGluZVVybClcbiAgICAgICAgcmV0dXJuIChhd2FpdCBjYWNoZS5tYXRjaChvZmZsaW5lVXJsKSlcbiAgICAgICAgICAgIHx8IFJlc3BvbnNlLmVycm9yKClcbiAgICB9IGVsc2UgaWYgKGRlc3QgPT09ICdpbWFnZScgJiYgcGFyYW1zLm9mZmxpbmVfaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBjYWNoZS5tYXRjaChwYXJhbXMub2ZmbGluZV9pbWFnZSkpXG4gICAgICAgICAgICB8fCBSZXNwb25zZS5lcnJvcigpXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGEgZXJyb3IgcmVzcG9uc2UuXG4gICAgcmV0dXJuIFJlc3BvbnNlLmVycm9yKClcbn07XG5cbnNldENhdGNoSGFuZGxlcihoYW5kbGVyKVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUEseUJBQUMsU0FBVSxLQUFJLFFBQVMsRUFBQyxNQUFPLEVBQUMsU0FBVSxRQUFRLFNBQVUsQ0FBQyxHQUFFLFVBQVcsZ0JBQWUsR0FBRSxPQUFRLEVBQUMsU0FBVSxRQUFRLFNBQVUsQ0FBQyxHQUFFLFVBQVcsZ0JBQWUsR0FBRSxRQUFTLEVBQUMsU0FBVSxRQUFRLFNBQVUsQ0FBQyxHQUFFLFVBQVcsZ0JBQWUsR0FBRSxPQUFRLEVBQUMsU0FBVSxRQUFRLFNBQVUsQ0FBQyxHQUFFLFVBQVcsZ0JBQWUsRUFBQyxHQUFFLE9BQVEsT0FBTSxPQUFRLENBQUMsTUFBSyxJQUFJLEdBQUUsZUFBZ0IsSUFBRyxXQUFZLENBQUMsZ0JBQWUsZ0JBQWUsNEJBQTJCLGlCQUFnQixXQUFXLEVBQUM7OztBQ0NqYyxNQUFHO0FBQUMsU0FBSyxvQkFBb0IsS0FBRyxFQUFFO0FBQUEsRUFBQyxTQUFPLEdBQUU7QUFBQSxFQUFDOzs7QUNnQnRDLE1BQU0sV0FBdUI7QUFBQSxJQUNsQyxpQkFBaUIs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QSxLQUFLLGNBQWMsRUFDbkIsS0FBSyxXQUFTLE1BQU0sT0FBTyxTQUFTLENBQUM7QUFBQSxJQUM5QztBQUFBLEVBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxPQUFNLFlBQVc7QUFDN0IsVUFBTSxpQkFBaUIsUUFBUSxPQUFPO0FBQ3RDLFVBQU0sT0FBTyxRQUFRLFFBQVE7QUFDN0IsVUFBTSxNQUFNLFFBQVEsUUFBUTtBQUM1QixVQUFNLFFBQVEsTUFBTSxLQUFLLE9BQU8sS0FBSyxjQUFjO0FBR25ELFVBQU0sU0FBUyxNQUFNLE1BQU0sTUFBTSxHQUFHO0FBQ3BDLFFBQUksUUFBUTtBQUNSLGFBQU87QUFBQSxJQUNYO0FBRUEsUUFBSSxTQUFTLFlBQVk7QUFDckIsVUFBSTtBQUNKLFVBQUksT0FBTztBQUNYLFVBQUk7QUFDSixVQUFJLElBQUksUUFBUSxlQUFPLE9BQU8sTUFBTSxHQUFHO0FBQ25DLGdCQUFRLElBQUksUUFBUSxlQUFPLFNBQVMsRUFBRSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsTUFDeEQsT0FBTztBQUNILGdCQUFTLElBQUksSUFBSSxHQUFHLEVBQUcsU0FBUyxRQUFRLE9BQU8sRUFBRSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsTUFDbkU7QUFDQSxVQUFJLE1BQU0sU0FBUyxLQUFLLGVBQU8sTUFBTSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEdBQUc7QUFDckQsZUFBTyxNQUFNLENBQUM7QUFDZCxjQUFNQyxjQUFhLEdBQUcsZUFBTyxPQUFPLEdBQUcsSUFBSTtBQUMzQyxjQUFNLHFDQUFxQ0EsV0FBVTtBQUNyRCxrQkFBVSxNQUFNLE1BQU0sTUFBTUEsV0FBVTtBQUN0QyxZQUFJLFNBQVM7QUFDVCxpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBRUEsWUFBTSxhQUFhLEdBQUcsZUFBTyxPQUFPO0FBQ3BDLFlBQU0scUNBQXFDLFVBQVU7QUFDckQsYUFBUSxNQUFNLE1BQU0sTUFBTSxVQUFVLEtBQzdCLFNBQVMsTUFBTTtBQUFBLElBQzFCLFdBQVcsU0FBUyxXQUFXLGVBQU8sZUFBZTtBQUNqRCxhQUFRLE1BQU0sTUFBTSxNQUFNLGVBQU8sYUFBYSxLQUN2QyxTQUFTLE1BQU07QUFBQSxJQUMxQjtBQUdBLFdBQU8sU0FBUyxNQUFNO0FBQUEsRUFDMUI7QUFFQSxrQkFBZ0IsT0FBTzsiLAogICJuYW1lcyI6IFsidGFyZ2V0IiwgImhhbmRsZXIiLCAiaGFuZGxlciIsICJoYW5kbGVyIiwgImhhbmRsZXIiLCAiaGFuZGxlciIsICJkZWZhdWx0Um91dGVyIiwgImhhbmRsZXIiLCAiZGVmYXVsdFJvdXRlciIsICJoYW5kbGVyIiwgImVycm9yIiwgIm1lc3NhZ2VzIiwgImhhbmRsZXIiLCAibWVzc2FnZXMiLCAiaGFuZGxlciIsICJtZXNzYWdlcyIsICJoYW5kbGVyIiwgIm1lc3NhZ2VzIiwgImhhbmRsZXIiLCAibWVzc2FnZXMiLCAib2ZmbGluZVVybCJdCn0K
