(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // ns-params:@params
  var params_default = { baseURL: "/", caches: { font: { max_age: 2592e3, origins: [], strategy: "network-first" }, image: { max_age: 2592e3, origins: [], strategy: "network-first" }, script: { max_age: 2592e3, origins: [], strategy: "network-first" }, style: { max_age: 2592e3, origins: [], strategy: "network-first" } }, debug: false, langs: ["en", "es"], offline_image: "", precaches: ["/en/offline/", "/es/offline/", "/css/ls.css", "/es/programming/0100-intro/0101-computers/", "/js/ls.js"] };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtcGFyYW1zOkBwYXJhbXMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ZlcnNpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VzLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL1dvcmtib3hFcnJvci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9hc3NlcnQudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvbG9nZ2VyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZS9zcmMvX3ZlcnNpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL3NyYy9DYWNoZWFibGVSZXNwb25zZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2Uvc3JjL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL2RvbnRXYWl0Rm9yLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2pha2VhcmNoaWJhbGQvaWRiQHY3LjEuMStpbmNvbXBhdGlibGUvc3JjL3V0aWwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjcuMS4xK2luY29tcGF0aWJsZS9zcmMvd3JhcC1pZGItdmFsdWUudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjcuMS4xK2luY29tcGF0aWJsZS9zcmMvZW50cnkudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjcuMS4xK2luY29tcGF0aWJsZS9zcmMvZGF0YWJhc2UtZXh0cmFzLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWV4cGlyYXRpb24vc3JjL192ZXJzaW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWV4cGlyYXRpb24vc3JjL21vZGVscy9DYWNoZVRpbWVzdGFtcHNNb2RlbC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1leHBpcmF0aW9uL3NyYy9DYWNoZUV4cGlyYXRpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvY2FjaGVOYW1lcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9yZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjay50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1leHBpcmF0aW9uL3NyYy9FeHBpcmF0aW9uUGx1Z2luLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL192ZXJzaW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL3V0aWxzL2NvbnN0YW50cy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy91dGlscy9ub3JtYWxpemVIYW5kbGVyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL1JvdXRlLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL1JlZ0V4cFJvdXRlLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL1JvdXRlci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtcm91dGluZy9zcmMvcmVnaXN0ZXJSb3V0ZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9zZXRDYXRjaEhhbmRsZXIudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvY2FjaGVNYXRjaElnbm9yZVBhcmFtcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9EZWZlcnJlZC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS90aW1lb3V0LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL192ZXJzaW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL1N0cmF0ZWd5SGFuZGxlci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9TdHJhdGVneS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy91dGlscy9tZXNzYWdlcy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9DYWNoZUZpcnN0LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL3BsdWdpbnMvY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9OZXR3b3JrRmlyc3QudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvTmV0d29ya09ubHkudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvU3RhbGVXaGlsZVJldmFsaWRhdGUudHMiLCAiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1wiYmFzZVVSTFwiOlwiL1wiLFwiY2FjaGVzXCI6e1wiZm9udFwiOntcIm1heF9hZ2VcIjoyNTkyMDAwLFwib3JpZ2luc1wiOltdLFwic3RyYXRlZ3lcIjpcIm5ldHdvcmstZmlyc3RcIn0sXCJpbWFnZVwiOntcIm1heF9hZ2VcIjoyNTkyMDAwLFwib3JpZ2luc1wiOltdLFwic3RyYXRlZ3lcIjpcIm5ldHdvcmstZmlyc3RcIn0sXCJzY3JpcHRcIjp7XCJtYXhfYWdlXCI6MjU5MjAwMCxcIm9yaWdpbnNcIjpbXSxcInN0cmF0ZWd5XCI6XCJuZXR3b3JrLWZpcnN0XCJ9LFwic3R5bGVcIjp7XCJtYXhfYWdlXCI6MjU5MjAwMCxcIm9yaWdpbnNcIjpbXSxcInN0cmF0ZWd5XCI6XCJuZXR3b3JrLWZpcnN0XCJ9fSxcImRlYnVnXCI6ZmFsc2UsXCJsYW5nc1wiOltcImVuXCIsXCJlc1wiXSxcIm9mZmxpbmVfaW1hZ2VcIjpcIlwiLFwicHJlY2FjaGVzXCI6W1wiL2VuL29mZmxpbmUvXCIsXCIvZXMvb2ZmbGluZS9cIixcIi9jc3MvbHMuY3NzXCIsXCIvZXMvcHJvZ3JhbW1pbmcvMDEwMC1pbnRyby8wMTAxLWNvbXB1dGVycy9cIixcIi9qcy9scy5qc1wiXX0iLCAiLy8gQHRzLWlnbm9yZVxudHJ5e3NlbGZbJ3dvcmtib3g6Y29yZTo3LjAuMCddJiZfKCl9Y2F0Y2goZSl7fSIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24uanMnO1xuXG5pbnRlcmZhY2UgTG9nZ2FibGVPYmplY3Qge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XG59XG5pbnRlcmZhY2UgTWVzc2FnZU1hcCB7XG4gIFttZXNzYWdlSUQ6IHN0cmluZ106IChwYXJhbTogTG9nZ2FibGVPYmplY3QpID0+IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzOiBNZXNzYWdlTWFwID0ge1xuICAnaW52YWxpZC12YWx1ZSc6ICh7cGFyYW1OYW1lLCB2YWxpZFZhbHVlRGVzY3JpcHRpb24sIHZhbHVlfSkgPT4ge1xuICAgIGlmICghcGFyYW1OYW1lIHx8ICF2YWxpZFZhbHVlRGVzY3JpcHRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC12YWx1ZScgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgVGhlICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB3YXMgZ2l2ZW4gYSB2YWx1ZSB3aXRoIGFuIGAgK1xuICAgICAgYHVuZXhwZWN0ZWQgdmFsdWUuICR7dmFsaWRWYWx1ZURlc2NyaXB0aW9ufSBSZWNlaXZlZCBhIHZhbHVlIG9mIGAgK1xuICAgICAgYCR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfS5gXG4gICAgKTtcbiAgfSxcblxuICAnbm90LWFuLWFycmF5JzogKHttb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWV9KSA9PiB7XG4gICAgaWYgKCFtb2R1bGVOYW1lIHx8ICFjbGFzc05hbWUgfHwgIWZ1bmNOYW1lIHx8ICFwYXJhbU5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnbm90LWFuLWFycmF5JyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIGFuIGFycmF5LmBcbiAgICApO1xuICB9LFxuXG4gICdpbmNvcnJlY3QtdHlwZSc6ICh7XG4gICAgZXhwZWN0ZWRUeXBlLFxuICAgIHBhcmFtTmFtZSxcbiAgICBtb2R1bGVOYW1lLFxuICAgIGNsYXNzTmFtZSxcbiAgICBmdW5jTmFtZSxcbiAgfSkgPT4ge1xuICAgIGlmICghZXhwZWN0ZWRUeXBlIHx8ICFwYXJhbU5hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2luY29ycmVjdC10eXBlJyBlcnJvci5gKTtcbiAgICB9XG4gICAgY29uc3QgY2xhc3NOYW1lU3RyID0gY2xhc3NOYW1lID8gYCR7Y2xhc3NOYW1lfS5gIDogJyc7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfWAgK1xuICAgICAgYCR7ZnVuY05hbWV9KCknIG11c3QgYmUgb2YgdHlwZSAke2V4cGVjdGVkVHlwZX0uYFxuICAgICk7XG4gIH0sXG5cbiAgJ2luY29ycmVjdC1jbGFzcyc6ICh7XG4gICAgZXhwZWN0ZWRDbGFzc05hbWUsXG4gICAgcGFyYW1OYW1lLFxuICAgIG1vZHVsZU5hbWUsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZ1bmNOYW1lLFxuICAgIGlzUmV0dXJuVmFsdWVQcm9ibGVtLFxuICB9KSA9PiB7XG4gICAgaWYgKCFleHBlY3RlZENsYXNzTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW5jb3JyZWN0LWNsYXNzJyBlcnJvci5gKTtcbiAgICB9XG4gICAgY29uc3QgY2xhc3NOYW1lU3RyID0gY2xhc3NOYW1lID8gYCR7Y2xhc3NOYW1lfS5gIDogJyc7XG4gICAgaWYgKGlzUmV0dXJuVmFsdWVQcm9ibGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBgVGhlIHJldHVybiB2YWx1ZSBmcm9tIGAgK1xuICAgICAgICBgJyR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWVTdHJ9JHtmdW5jTmFtZX0oKScgYCArXG4gICAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzc05hbWV9LmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfSR7ZnVuY05hbWV9KCknIGAgK1xuICAgICAgYG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgY2xhc3MgJHtleHBlY3RlZENsYXNzTmFtZX0uYFxuICAgICk7XG4gIH0sXG5cbiAgJ21pc3NpbmctYS1tZXRob2QnOiAoe1xuICAgIGV4cGVjdGVkTWV0aG9kLFxuICAgIHBhcmFtTmFtZSxcbiAgICBtb2R1bGVOYW1lLFxuICAgIGNsYXNzTmFtZSxcbiAgICBmdW5jTmFtZSxcbiAgfSkgPT4ge1xuICAgIGlmIChcbiAgICAgICFleHBlY3RlZE1ldGhvZCB8fFxuICAgICAgIXBhcmFtTmFtZSB8fFxuICAgICAgIW1vZHVsZU5hbWUgfHxcbiAgICAgICFjbGFzc05hbWUgfHxcbiAgICAgICFmdW5jTmFtZVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdtaXNzaW5nLWEtbWV0aG9kJyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGV4cGVjdGVkIHRoZSBgICtcbiAgICAgIGAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgdG8gZXhwb3NlIGEgJyR7ZXhwZWN0ZWRNZXRob2R9JyBtZXRob2QuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZSc6ICh7ZW50cnl9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBBbiB1bmV4cGVjdGVkIGVudHJ5IHdhcyBwYXNzZWQgdG8gYCArXG4gICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgVGhlIGVudHJ5IGAgK1xuICAgICAgYCcke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICBlbnRyeSxcbiAgICAgICl9JyBpc24ndCBzdXBwb3J0ZWQuIFlvdSBtdXN0IHN1cHBseSBhbiBhcnJheSBvZiBgICtcbiAgICAgIGBzdHJpbmdzIHdpdGggb25lIG9yIG1vcmUgY2hhcmFjdGVycywgb2JqZWN0cyB3aXRoIGEgdXJsIHByb3BlcnR5IG9yIGAgK1xuICAgICAgYFJlcXVlc3Qgb2JqZWN0cy5gXG4gICAgKTtcbiAgfSxcblxuICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcyc6ICh7Zmlyc3RFbnRyeSwgc2Vjb25kRW50cnl9KSA9PiB7XG4gICAgaWYgKCFmaXJzdEVudHJ5IHx8ICFzZWNvbmRFbnRyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5leHBlY3RlZCBpbnB1dCB0byBgICsgYCdhZGQtdG8tY2FjaGUtbGlzdC1kdXBsaWNhdGUtZW50cmllcycgZXJyb3IuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGBUd28gb2YgdGhlIGVudHJpZXMgcGFzc2VkIHRvIGAgK1xuICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIGhhZCB0aGUgVVJMIGAgK1xuICAgICAgYCR7Zmlyc3RFbnRyeX0gYnV0IGRpZmZlcmVudCByZXZpc2lvbiBkZXRhaWxzLiBXb3JrYm94IGlzIGAgK1xuICAgICAgYHVuYWJsZSB0byBjYWNoZSBhbmQgdmVyc2lvbiB0aGUgYXNzZXQgY29ycmVjdGx5LiBQbGVhc2UgcmVtb3ZlIG9uZSBgICtcbiAgICAgIGBvZiB0aGUgZW50cmllcy5gXG4gICAgKTtcbiAgfSxcblxuICAncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCc6ICh7dGhyb3duRXJyb3JNZXNzYWdlfSkgPT4ge1xuICAgIGlmICghdGhyb3duRXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgKyBgJ3BsdWdpbi1lcnJvci1yZXF1ZXN0LXdpbGwtZmV0Y2gnLCBlcnJvci5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgYEFuIGVycm9yIHdhcyB0aHJvd24gYnkgYSBwbHVnaW5zICdyZXF1ZXN0V2lsbEZldGNoKCknIG1ldGhvZC4gYCArXG4gICAgICBgVGhlIHRocm93biBlcnJvciBtZXNzYWdlIHdhczogJyR7dGhyb3duRXJyb3JNZXNzYWdlfScuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2ludmFsaWQtY2FjaGUtbmFtZSc6ICh7Y2FjaGVOYW1lSWQsIHZhbHVlfSkgPT4ge1xuICAgIGlmICghY2FjaGVOYW1lSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEV4cGVjdGVkIGEgJ2NhY2hlTmFtZUlkJyBmb3IgZXJyb3IgJ2ludmFsaWQtY2FjaGUtbmFtZSdgLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgYFlvdSBtdXN0IHByb3ZpZGUgYSBuYW1lIGNvbnRhaW5pbmcgYXQgbGVhc3Qgb25lIGNoYXJhY3RlciBmb3IgYCArXG4gICAgICBgc2V0Q2FjaGVEZXRhaWxzKHske2NhY2hlTmFtZUlkfTogJy4uLid9KS4gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgIGAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9J2BcbiAgICApO1xuICB9LFxuXG4gICd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnOiAoe21ldGhvZH0pID0+IHtcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5leHBlY3RlZCBpbnB1dCB0byBgICtcbiAgICAgICAgICBgJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCcgZXJyb3IuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcm91dGUgeW91J3JlIHRyeWluZyB0byB1bnJlZ2lzdGVyIHdhcyBub3QgIHByZXZpb3VzbHkgYCArXG4gICAgICBgcmVnaXN0ZXJlZCBmb3IgdGhlIG1ldGhvZCB0eXBlICcke21ldGhvZH0nLmBcbiAgICApO1xuICB9LFxuXG4gICd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJzogKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHJvdXRlIHlvdSdyZSB0cnlpbmcgdG8gdW5yZWdpc3RlciB3YXMgbm90IHByZXZpb3VzbHkgYCArXG4gICAgICBgcmVnaXN0ZXJlZC5gXG4gICAgKTtcbiAgfSxcblxuICAncXVldWUtcmVwbGF5LWZhaWxlZCc6ICh7bmFtZX0pID0+IHtcbiAgICByZXR1cm4gYFJlcGxheWluZyB0aGUgYmFja2dyb3VuZCBzeW5jIHF1ZXVlICcke25hbWV9JyBmYWlsZWQuYDtcbiAgfSxcblxuICAnZHVwbGljYXRlLXF1ZXVlLW5hbWUnOiAoe25hbWV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgUXVldWUgbmFtZSAnJHtuYW1lfScgaXMgYWxyZWFkeSBiZWluZyB1c2VkLiBgICtcbiAgICAgIGBBbGwgaW5zdGFuY2VzIG9mIGJhY2tncm91bmRTeW5jLlF1ZXVlIG11c3QgYmUgZ2l2ZW4gdW5pcXVlIG5hbWVzLmBcbiAgICApO1xuICB9LFxuXG4gICdleHBpcmVkLXRlc3Qtd2l0aG91dC1tYXgtYWdlJzogKHttZXRob2ROYW1lLCBwYXJhbU5hbWV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgJyR7bWV0aG9kTmFtZX0oKScgbWV0aG9kIGNhbiBvbmx5IGJlIHVzZWQgd2hlbiB0aGUgYCArXG4gICAgICBgJyR7cGFyYW1OYW1lfScgaXMgdXNlZCBpbiB0aGUgY29uc3RydWN0b3IuYFxuICAgICk7XG4gIH0sXG5cbiAgJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnOiAoe21vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGFuIHVuc3VwcG9ydGVkIHR5cGUuIGAgK1xuICAgICAgYFBsZWFzZSBjaGVjayB0aGUgZG9jcyBmb3IgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0gZm9yIGAgK1xuICAgICAgYHZhbGlkIGlucHV0IHR5cGVzLmBcbiAgICApO1xuICB9LFxuXG4gICdub3QtYXJyYXktb2YtY2xhc3MnOiAoe1xuICAgIHZhbHVlLFxuICAgIGV4cGVjdGVkQ2xhc3MsXG4gICAgbW9kdWxlTmFtZSxcbiAgICBjbGFzc05hbWUsXG4gICAgZnVuY05hbWUsXG4gICAgcGFyYW1OYW1lLFxuICB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgc3VwcGxpZWQgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3QgYmUgYW4gYXJyYXkgb2YgYCArXG4gICAgICBgJyR7ZXhwZWN0ZWRDbGFzc30nIG9iamVjdHMuIFJlY2VpdmVkICcke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0sJy4gYCArXG4gICAgICBgUGxlYXNlIGNoZWNrIHRoZSBjYWxsIHRvICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCkgYCArXG4gICAgICBgdG8gZml4IHRoZSBpc3N1ZS5gXG4gICAgKTtcbiAgfSxcblxuICAnbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJzogKHttb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgWW91IG11c3QgZGVmaW5lIGVpdGhlciBjb25maWcubWF4RW50cmllcyBvciBjb25maWcubWF4QWdlU2Vjb25kc2AgK1xuICAgICAgYGluICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9YFxuICAgICk7XG4gIH0sXG5cbiAgJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnOiAoe21vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBZb3UgbXVzdCBkZWZpbmUgZWl0aGVyIGNvbmZpZy5zdGF0dXNlcyBvciBjb25maWcuaGVhZGVyc2AgK1xuICAgICAgYGluICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9YFxuICAgICk7XG4gIH0sXG5cbiAgJ2ludmFsaWQtc3RyaW5nJzogKHttb2R1bGVOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIGlmICghcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXN0cmluZycgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgV2hlbiB1c2luZyBzdHJpbmdzLCB0aGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3Qgc3RhcnQgd2l0aCBgICtcbiAgICAgIGAnaHR0cCcgKGZvciBjcm9zcy1vcmlnaW4gbWF0Y2hlcykgb3IgJy8nIChmb3Igc2FtZS1vcmlnaW4gbWF0Y2hlcykuIGAgK1xuICAgICAgYFBsZWFzZSBzZWUgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtmdW5jTmFtZX0oKSBmb3IgYCArXG4gICAgICBgbW9yZSBpbmZvLmBcbiAgICApO1xuICB9LFxuXG4gICdjaGFubmVsLW5hbWUtcmVxdWlyZWQnOiAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBZb3UgbXVzdCBwcm92aWRlIGEgY2hhbm5lbE5hbWUgdG8gY29uc3RydWN0IGEgYCArXG4gICAgICBgQnJvYWRjYXN0Q2FjaGVVcGRhdGUgaW5zdGFuY2UuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2ludmFsaWQtcmVzcG9uc2VzLWFyZS1zYW1lLWFyZ3MnOiAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgYXJndW1lbnRzIHBhc3NlZCBpbnRvIHJlc3BvbnNlc0FyZVNhbWUoKSBhcHBlYXIgdG8gYmUgYCArXG4gICAgICBgaW52YWxpZC4gUGxlYXNlIGVuc3VyZSB2YWxpZCBSZXNwb25zZXMgYXJlIHVzZWQuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2V4cGlyZS1jdXN0b20tY2FjaGVzLW9ubHknOiAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBZb3UgbXVzdCBwcm92aWRlIGEgJ2NhY2hlTmFtZScgcHJvcGVydHkgd2hlbiB1c2luZyB0aGUgYCArXG4gICAgICBgZXhwaXJhdGlvbiBwbHVnaW4gd2l0aCBhIHJ1bnRpbWUgY2FjaGluZyBzdHJhdGVneS5gXG4gICAgKTtcbiAgfSxcblxuICAndW5pdC1tdXN0LWJlLWJ5dGVzJzogKHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9KSA9PiB7XG4gICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAndW5pdC1tdXN0LWJlLWJ5dGVzJyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgJ3VuaXQnIHBvcnRpb24gb2YgdGhlIFJhbmdlIGhlYWRlciBtdXN0IGJlIHNldCB0byAnYnl0ZXMnLiBgICtcbiAgICAgIGBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYFxuICAgICk7XG4gIH0sXG5cbiAgJ3NpbmdsZS1yYW5nZS1vbmx5JzogKHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9KSA9PiB7XG4gICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnc2luZ2xlLXJhbmdlLW9ubHknIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYE11bHRpcGxlIHJhbmdlcyBhcmUgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBhICBzaW5nbGUgc3RhcnQgYCArXG4gICAgICBgdmFsdWUsIGFuZCBvcHRpb25hbCBlbmQgdmFsdWUuIFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIGAgK1xuICAgICAgYFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgXG4gICAgKTtcbiAgfSxcblxuICAnaW52YWxpZC1yYW5nZS12YWx1ZXMnOiAoe25vcm1hbGl6ZWRSYW5nZUhlYWRlcn0pID0+IHtcbiAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXJhbmdlLXZhbHVlcycgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgVGhlIFJhbmdlIGhlYWRlciBpcyBtaXNzaW5nIGJvdGggc3RhcnQgYW5kIGVuZCB2YWx1ZXMuIEF0IGxlYXN0IGAgK1xuICAgICAgYG9uZSBvZiB0aG9zZSB2YWx1ZXMgaXMgbmVlZGVkLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYFxuICAgICk7XG4gIH0sXG5cbiAgJ25vLXJhbmdlLWhlYWRlcic6ICgpID0+IHtcbiAgICByZXR1cm4gYE5vIFJhbmdlIGhlYWRlciB3YXMgZm91bmQgaW4gdGhlIFJlcXVlc3QgcHJvdmlkZWQuYDtcbiAgfSxcblxuICAncmFuZ2Utbm90LXNhdGlzZmlhYmxlJzogKHtzaXplLCBzdGFydCwgZW5kfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHN0YXJ0ICgke3N0YXJ0fSkgYW5kIGVuZCAoJHtlbmR9KSB2YWx1ZXMgaW4gdGhlIFJhbmdlIGFyZSBgICtcbiAgICAgIGBub3Qgc2F0aXNmaWFibGUgYnkgdGhlIGNhY2hlZCByZXNwb25zZSwgd2hpY2ggaXMgJHtzaXplfSBieXRlcy5gXG4gICAgKTtcbiAgfSxcblxuICAnYXR0ZW1wdC10by1jYWNoZS1ub24tZ2V0LXJlcXVlc3QnOiAoe3VybCwgbWV0aG9kfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVW5hYmxlIHRvIGNhY2hlICcke3VybH0nIGJlY2F1c2UgaXQgaXMgYSAnJHttZXRob2R9JyByZXF1ZXN0IGFuZCBgICtcbiAgICAgIGBvbmx5ICdHRVQnIHJlcXVlc3RzIGNhbiBiZSBjYWNoZWQuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2NhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlJzogKHt1cmx9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGVyZSB3YXMgYW4gYXR0ZW1wdCB0byBjYWNoZSAnJHt1cmx9JyBidXQgdGhlIHJlc3BvbnNlIHdhcyBub3QgYCArXG4gICAgICBgZGVmaW5lZC5gXG4gICAgKTtcbiAgfSxcblxuICAnbm8tcmVzcG9uc2UnOiAoe3VybCwgZXJyb3J9KSA9PiB7XG4gICAgbGV0IG1lc3NhZ2UgPSBgVGhlIHN0cmF0ZWd5IGNvdWxkIG5vdCBnZW5lcmF0ZSBhIHJlc3BvbnNlIGZvciAnJHt1cmx9Jy5gO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgbWVzc2FnZSArPSBgIFRoZSB1bmRlcmx5aW5nIGVycm9yIGlzICR7ZXJyb3J9LmA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gICdiYWQtcHJlY2FjaGluZy1yZXNwb25zZSc6ICh7dXJsLCBzdGF0dXN9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcHJlY2FjaGluZyByZXF1ZXN0IGZvciAnJHt1cmx9JyBmYWlsZWRgICtcbiAgICAgIChzdGF0dXMgPyBgIHdpdGggYW4gSFRUUCBzdGF0dXMgb2YgJHtzdGF0dXN9LmAgOiBgLmApXG4gICAgKTtcbiAgfSxcblxuICAnbm9uLXByZWNhY2hlZC11cmwnOiAoe3VybH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKCcke3VybH0nKSB3YXMgY2FsbGVkLCBidXQgdGhhdCBVUkwgaXMgYCArXG4gICAgICBgbm90IHByZWNhY2hlZC4gUGxlYXNlIHBhc3MgaW4gYSBVUkwgdGhhdCBpcyBwcmVjYWNoZWQgaW5zdGVhZC5gXG4gICAgKTtcbiAgfSxcblxuICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctaW50ZWdyaXRpZXMnOiAoe3VybH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFR3byBvZiB0aGUgZW50cmllcyBwYXNzZWQgdG8gYCArXG4gICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgaGFkIHRoZSBVUkwgYCArXG4gICAgICBgJHt1cmx9IHdpdGggZGlmZmVyZW50IGludGVncml0eSB2YWx1ZXMuIFBsZWFzZSByZW1vdmUgb25lIG9mIHRoZW0uYFxuICAgICk7XG4gIH0sXG5cbiAgJ21pc3NpbmctcHJlY2FjaGUtZW50cnknOiAoe2NhY2hlTmFtZSwgdXJsfSkgPT4ge1xuICAgIHJldHVybiBgVW5hYmxlIHRvIGZpbmQgYSBwcmVjYWNoZWQgcmVzcG9uc2UgaW4gJHtjYWNoZU5hbWV9IGZvciAke3VybH0uYDtcbiAgfSxcblxuICAnY3Jvc3Mtb3JpZ2luLWNvcHktcmVzcG9uc2UnOiAoe29yaWdpbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYHdvcmtib3gtY29yZS5jb3B5UmVzcG9uc2UoKSBjYW4gb25seSBiZSB1c2VkIHdpdGggc2FtZS1vcmlnaW4gYCArXG4gICAgICBgcmVzcG9uc2VzLiBJdCB3YXMgcGFzc2VkIGEgcmVzcG9uc2Ugd2l0aCBvcmlnaW4gJHtvcmlnaW59LmBcbiAgICApO1xuICB9LFxuXG4gICdvcGFxdWUtc3RyZWFtcy1zb3VyY2UnOiAoe3R5cGV9KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICBgT25lIG9mIHRoZSB3b3JrYm94LXN0cmVhbXMgc291cmNlcyByZXN1bHRlZCBpbiBhbiBgICtcbiAgICAgIGAnJHt0eXBlfScgcmVzcG9uc2UuYDtcbiAgICBpZiAodHlwZSA9PT0gJ29wYXF1ZXJlZGlyZWN0Jykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYCR7bWVzc2FnZX0gUGxlYXNlIGRvIG5vdCB1c2UgYSBuYXZpZ2F0aW9uIHJlcXVlc3QgdGhhdCByZXN1bHRzIGAgK1xuICAgICAgICBgaW4gYSByZWRpcmVjdCBhcyBhIHNvdXJjZS5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bWVzc2FnZX0gUGxlYXNlIGVuc3VyZSB5b3VyIHNvdXJjZXMgYXJlIENPUlMtZW5hYmxlZC5gO1xuICB9LFxufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5cbmNvbnN0IGZhbGxiYWNrID0gKGNvZGU6IHN0cmluZywgLi4uYXJnczogYW55W10pID0+IHtcbiAgbGV0IG1zZyA9IGNvZGU7XG4gIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICBtc2cgKz0gYCA6OiAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWA7XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cbmNvbnN0IGdlbmVyYXRvckZ1bmN0aW9uID0gKGNvZGU6IHN0cmluZywgZGV0YWlscyA9IHt9KSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlc1tjb2RlXTtcbiAgaWYgKCFtZXNzYWdlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBtZXNzYWdlIGZvciBjb2RlICcke2NvZGV9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlKGRldGFpbHMpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VHZW5lcmF0b3IgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gZmFsbGJhY2sgOiBnZW5lcmF0b3JGdW5jdGlvbjtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bWVzc2FnZUdlbmVyYXRvcn0gZnJvbSAnLi4vbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VHZW5lcmF0b3IuanMnO1xuaW1wb3J0IHtNYXBMaWtlT2JqZWN0fSBmcm9tICcuLi90eXBlcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBXb3JrYm94IGVycm9ycyBzaG91bGQgYmUgdGhyb3duIHdpdGggdGhpcyBjbGFzcy5cbiAqIFRoaXMgYWxsb3dzIHVzZSB0byBlbnN1cmUgdGhlIHR5cGUgZWFzaWx5IGluIHRlc3RzLFxuICogaGVscHMgZGV2ZWxvcGVycyBpZGVudGlmeSBlcnJvcnMgZnJvbSB3b3JrYm94XG4gKiBlYXNpbHkgYW5kIGFsbG93cyB1c2UgdG8gb3B0aW1pc2UgZXJyb3JcbiAqIG1lc3NhZ2VzIGNvcnJlY3RseS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBXb3JrYm94RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGRldGFpbHM/OiBNYXBMaWtlT2JqZWN0O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JDb2RlIFRoZSBlcnJvciBjb2RlIHRoYXRcbiAgICogaWRlbnRpZmllcyB0aGlzIHBhcnRpY3VsYXIgZXJyb3IuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gZGV0YWlscyBBbnkgcmVsZXZhbnQgYXJndW1lbnRzXG4gICAqIHRoYXQgd2lsbCBoZWxwIGRldmVsb3BlcnMgaWRlbnRpZnkgaXNzdWVzIHNob3VsZFxuICAgKiBiZSBhZGRlZCBhcyBhIGtleSBvbiB0aGUgY29udGV4dCBvYmplY3QuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZGV0YWlscz86IE1hcExpa2VPYmplY3QpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUdlbmVyYXRvcihlcnJvckNvZGUsIGRldGFpbHMpO1xuXG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBlcnJvckNvZGU7XG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgfVxufVxuXG5leHBvcnQge1dvcmtib3hFcnJvcn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnLi4vX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7TWFwTGlrZU9iamVjdH0gZnJvbSAnLi4vdHlwZXMuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qXG4gKiBUaGlzIG1ldGhvZCB0aHJvd3MgaWYgdGhlIHN1cHBsaWVkIHZhbHVlIGlzIG5vdCBhbiBhcnJheS5cbiAqIFRoZSBkZXN0cnVjdGVkIHZhbHVlcyBhcmUgcmVxdWlyZWQgdG8gcHJvZHVjZSBhIG1lYW5pbmdmdWwgZXJyb3IgZm9yIHVzZXJzLlxuICogVGhlIGRlc3RydWN0ZWQgYW5kIHJlc3RydWN0dXJlZCBvYmplY3QgaXMgc28gaXQncyBjbGVhciB3aGF0IGlzXG4gKiBuZWVkZWQuXG4gKi9cbmNvbnN0IGlzQXJyYXkgPSAodmFsdWU6IGFueVtdLCBkZXRhaWxzOiBNYXBMaWtlT2JqZWN0KSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdub3QtYW4tYXJyYXknLCBkZXRhaWxzKTtcbiAgfVxufTtcblxuY29uc3QgaGFzTWV0aG9kID0gKFxuICBvYmplY3Q6IE1hcExpa2VPYmplY3QsXG4gIGV4cGVjdGVkTWV0aG9kOiBzdHJpbmcsXG4gIGRldGFpbHM6IE1hcExpa2VPYmplY3QsXG4pID0+IHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmplY3RbZXhwZWN0ZWRNZXRob2RdO1xuICBpZiAodHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGRldGFpbHNbJ2V4cGVjdGVkTWV0aG9kJ10gPSBleHBlY3RlZE1ldGhvZDtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtaXNzaW5nLWEtbWV0aG9kJywgZGV0YWlscyk7XG4gIH1cbn07XG5cbmNvbnN0IGlzVHlwZSA9IChcbiAgb2JqZWN0OiB1bmtub3duLFxuICBleHBlY3RlZFR5cGU6IHN0cmluZyxcbiAgZGV0YWlsczogTWFwTGlrZU9iamVjdCxcbikgPT4ge1xuICBpZiAodHlwZW9mIG9iamVjdCAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgZGV0YWlsc1snZXhwZWN0ZWRUeXBlJ10gPSBleHBlY3RlZFR5cGU7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW5jb3JyZWN0LXR5cGUnLCBkZXRhaWxzKTtcbiAgfVxufTtcblxuY29uc3QgaXNJbnN0YW5jZSA9IChcbiAgb2JqZWN0OiB1bmtub3duLFxuICAvLyBOZWVkIHRoZSBnZW5lcmFsIHR5cGUgdG8gZG8gdGhlIGNoZWNrIGxhdGVyLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICBleHBlY3RlZENsYXNzOiBGdW5jdGlvbixcbiAgZGV0YWlsczogTWFwTGlrZU9iamVjdCxcbikgPT4ge1xuICBpZiAoIShvYmplY3QgaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgIGRldGFpbHNbJ2V4cGVjdGVkQ2xhc3NOYW1lJ10gPSBleHBlY3RlZENsYXNzLm5hbWU7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW5jb3JyZWN0LWNsYXNzJywgZGV0YWlscyk7XG4gIH1cbn07XG5cbmNvbnN0IGlzT25lT2YgPSAodmFsdWU6IGFueSwgdmFsaWRWYWx1ZXM6IGFueVtdLCBkZXRhaWxzOiBNYXBMaWtlT2JqZWN0KSA9PiB7XG4gIGlmICghdmFsaWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgZGV0YWlsc1sndmFsaWRWYWx1ZURlc2NyaXB0aW9uJ10gPSBgVmFsaWQgdmFsdWVzIGFyZSAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgdmFsaWRWYWx1ZXMsXG4gICAgKX0uYDtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLXZhbHVlJywgZGV0YWlscyk7XG4gIH1cbn07XG5cbmNvbnN0IGlzQXJyYXlPZkNsYXNzID0gKFxuICB2YWx1ZTogYW55LFxuICAvLyBOZWVkIGdlbmVyYWwgdHlwZSB0byBkbyBjaGVjayBsYXRlci5cbiAgZXhwZWN0ZWRDbGFzczogRnVuY3Rpb24sIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgZGV0YWlsczogTWFwTGlrZU9iamVjdCxcbikgPT4ge1xuICBjb25zdCBlcnJvciA9IG5ldyBXb3JrYm94RXJyb3IoJ25vdC1hcnJheS1vZi1jbGFzcycsIGRldGFpbHMpO1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZmluYWxBc3NlcnRFeHBvcnRzID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gbnVsbFxuICAgIDoge1xuICAgICAgICBoYXNNZXRob2QsXG4gICAgICAgIGlzQXJyYXksXG4gICAgICAgIGlzSW5zdGFuY2UsXG4gICAgICAgIGlzT25lT2YsXG4gICAgICAgIGlzVHlwZSxcbiAgICAgICAgaXNBcnJheU9mQ2xhc3MsXG4gICAgICB9O1xuXG5leHBvcnQge2ZpbmFsQXNzZXJ0RXhwb3J0cyBhcyBhc3NlcnR9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmNvbnN0IGdldEZyaWVuZGx5VVJMID0gKHVybDogVVJMIHwgc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgdXJsT2JqID0gbmV3IFVSTChTdHJpbmcodXJsKSwgbG9jYXRpb24uaHJlZik7XG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIzMjNcbiAgLy8gV2Ugd2FudCB0byBpbmNsdWRlIGV2ZXJ5dGhpbmcsIGV4Y2VwdCBmb3IgdGhlIG9yaWdpbiBpZiBpdCdzIHNhbWUtb3JpZ2luLlxuICByZXR1cm4gdXJsT2JqLmhyZWYucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtsb2NhdGlvbi5vcmlnaW59YCksICcnKTtcbn07XG5cbmV4cG9ydCB7Z2V0RnJpZW5kbHlVUkx9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vLyBsb2dnZXIgaXMgdXNlZCBpbnNpZGUgb2YgYm90aCBzZXJ2aWNlIHdvcmtlcnMgYW5kIHRoZSB3aW5kb3cgZ2xvYmFsIHNjb3BlLlxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV29ya2VyR2xvYmFsU2NvcGUge1xuICAgIF9fV0JfRElTQUJMRV9ERVZfTE9HUzogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fV0JfRElTQUJMRV9ERVZfTE9HUzogYm9vbGVhbjtcbiAgfVxufVxuXG50eXBlIExvZ2dlck1ldGhvZHMgPVxuICB8ICdkZWJ1ZydcbiAgfCAnbG9nJ1xuICB8ICd3YXJuJ1xuICB8ICdlcnJvcidcbiAgfCAnZ3JvdXBDb2xsYXBzZWQnXG4gIHwgJ2dyb3VwRW5kJztcblxuY29uc3QgbG9nZ2VyID0gKFxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBudWxsXG4gICAgOiAoKCkgPT4ge1xuICAgICAgICAvLyBEb24ndCBvdmVyd3JpdGUgdGhpcyB2YWx1ZSBpZiBpdCdzIGFscmVhZHkgc2V0LlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L3B1bGwvMjI4NCNpc3N1ZWNvbW1lbnQtNTYwNDcwOTIzXG4gICAgICAgIGlmICghKCdfX1dCX0RJU0FCTEVfREVWX0xPR1MnIGluIGdsb2JhbFRoaXMpKSB7XG4gICAgICAgICAgc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbkdyb3VwID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0aG9kVG9Db2xvck1hcDoge1ttZXRob2ROYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBudWxsfSA9IHtcbiAgICAgICAgICBkZWJ1ZzogYCM3ZjhjOGRgLCAvLyBHcmF5XG4gICAgICAgICAgbG9nOiBgIzJlY2M3MWAsIC8vIEdyZWVuXG4gICAgICAgICAgd2FybjogYCNmMzljMTJgLCAvLyBZZWxsb3dcbiAgICAgICAgICBlcnJvcjogYCNjMDM5MmJgLCAvLyBSZWRcbiAgICAgICAgICBncm91cENvbGxhcHNlZDogYCMzNDk4ZGJgLCAvLyBCbHVlXG4gICAgICAgICAgZ3JvdXBFbmQ6IG51bGwsIC8vIE5vIGNvbG9yZWQgcHJlZml4IG9uIGdyb3VwRW5kXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcHJpbnQgPSBmdW5jdGlvbiAobWV0aG9kOiBMb2dnZXJNZXRob2RzLCBhcmdzOiBhbnlbXSkge1xuICAgICAgICAgIGlmIChzZWxmLl9fV0JfRElTQUJMRV9ERVZfTE9HUykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cENvbGxhcHNlZCcpIHtcbiAgICAgICAgICAgIC8vIFNhZmFyaSBkb2Vzbid0IHByaW50IGFsbCBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCkgYXJndW1lbnRzOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4Mjc1NFxuICAgICAgICAgICAgaWYgKC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZVttZXRob2RdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgICAgICAgYGJhY2tncm91bmQ6ICR7bWV0aG9kVG9Db2xvck1hcFttZXRob2RdIX1gLFxuICAgICAgICAgICAgYGJvcmRlci1yYWRpdXM6IDAuNWVtYCxcbiAgICAgICAgICAgIGBjb2xvcjogd2hpdGVgLFxuICAgICAgICAgICAgYGZvbnQtd2VpZ2h0OiBib2xkYCxcbiAgICAgICAgICAgIGBwYWRkaW5nOiAycHggMC41ZW1gLFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICAvLyBXaGVuIGluIGEgZ3JvdXAsIHRoZSB3b3JrYm94IHByZWZpeCBpcyBub3QgZGlzcGxheWVkLlxuICAgICAgICAgIGNvbnN0IGxvZ1ByZWZpeCA9IGluR3JvdXAgPyBbXSA6IFsnJWN3b3JrYm94Jywgc3R5bGVzLmpvaW4oJzsnKV07XG5cbiAgICAgICAgICBjb25zb2xlW21ldGhvZF0oLi4ubG9nUHJlZml4LCAuLi5hcmdzKTtcblxuICAgICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cENvbGxhcHNlZCcpIHtcbiAgICAgICAgICAgIGluR3JvdXAgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBFbmQnKSB7XG4gICAgICAgICAgICBpbkdyb3VwID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICAgICAgICBjb25zdCBhcGk6IHtbbWV0aG9kTmFtZTogc3RyaW5nXTogRnVuY3Rpb259ID0ge307XG4gICAgICAgIGNvbnN0IGxvZ2dlck1ldGhvZHMgPSBPYmplY3Qua2V5cyhtZXRob2RUb0NvbG9yTWFwKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBsb2dnZXJNZXRob2RzKSB7XG4gICAgICAgICAgY29uc3QgbWV0aG9kID0ga2V5IGFzIExvZ2dlck1ldGhvZHM7XG5cbiAgICAgICAgICBhcGlbbWV0aG9kXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgcHJpbnQobWV0aG9kLCBhcmdzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwaSBhcyB1bmtub3duO1xuICAgICAgfSkoKVxuKSBhcyBDb25zb2xlO1xuXG5leHBvcnQge2xvZ2dlcn07XG4iLCAiLy8gQHRzLWlnbm9yZVxudHJ5e3NlbGZbJ3dvcmtib3g6Y2FjaGVhYmxlLXJlc3BvbnNlOjcuMC4wJ10mJl8oKX1jYXRjaChlKXt9IiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVhYmxlUmVzcG9uc2VPcHRpb25zIHtcbiAgc3RhdHVzZXM/OiBudW1iZXJbXTtcbiAgaGVhZGVycz86IHtbaGVhZGVyTmFtZTogc3RyaW5nXTogc3RyaW5nfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gc2V0IHVwIHJ1bGVzIGRldGVybWluaW5nIHdoYXRcbiAqIHN0YXR1cyBjb2RlcyBhbmQvb3IgaGVhZGVycyBuZWVkIHRvIGJlIHByZXNlbnQgaW4gb3JkZXIgZm9yIGFcbiAqIFtgUmVzcG9uc2VgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzcG9uc2UpXG4gKiB0byBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2VcbiAqL1xuY2xhc3MgQ2FjaGVhYmxlUmVzcG9uc2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdGF0dXNlcz86IENhY2hlYWJsZVJlc3BvbnNlT3B0aW9uc1snc3RhdHVzZXMnXTtcbiAgcHJpdmF0ZSByZWFkb25seSBfaGVhZGVycz86IENhY2hlYWJsZVJlc3BvbnNlT3B0aW9uc1snaGVhZGVycyddO1xuXG4gIC8qKlxuICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVhYmxlUmVzcG9uc2UgaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdCBsZWFzdFxuICAgKiBvbmUgb2YgdGhlIGBjb25maWdgIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIElmIGJvdGggYHN0YXR1c2VzYCBhbmQgYGhlYWRlcnNgIGFyZSBzcGVjaWZpZWQsIHRoZW4gYm90aCBjb25kaXRpb25zIG11c3RcbiAgICogYmUgbWV0IGZvciB0aGUgYFJlc3BvbnNlYCB0byBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtjb25maWcuc3RhdHVzZXNdIE9uZSBvciBtb3JlIHN0YXR1cyBjb2RlcyB0aGF0IGFcbiAgICogYFJlc3BvbnNlYCBjYW4gaGF2ZSBhbmQgYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fSBbY29uZmlnLmhlYWRlcnNdIEEgbWFwcGluZyBvZiBoZWFkZXIgbmFtZXNcbiAgICogYW5kIGV4cGVjdGVkIHZhbHVlcyB0aGF0IGEgYFJlc3BvbnNlYCBjYW4gaGF2ZSBhbmQgYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqIElmIG11bHRpcGxlIGhlYWRlcnMgYXJlIHByb3ZpZGVkLCBvbmx5IG9uZSBuZWVkcyB0byBiZSBwcmVzZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIShjb25maWcuc3RhdHVzZXMgfHwgY29uZmlnLmhlYWRlcnMpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZWFibGVSZXNwb25zZScsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnN0YXR1c2VzKSB7XG4gICAgICAgIGFzc2VydCEuaXNBcnJheShjb25maWcuc3RhdHVzZXMsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcuc3RhdHVzZXMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5oZWFkZXJzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKGNvbmZpZy5oZWFkZXJzLCAnb2JqZWN0Jywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5oZWFkZXJzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdHVzZXMgPSBjb25maWcuc3RhdHVzZXM7XG4gICAgdGhpcy5faGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBhIHJlc3BvbnNlIHRvIHNlZSB3aGV0aGVyIGl0J3MgY2FjaGVhYmxlIG9yIG5vdCwgYmFzZWQgb24gdGhpc1xuICAgKiBvYmplY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZSBUaGUgcmVzcG9uc2Ugd2hvc2UgY2FjaGVhYmlsaXR5IGlzIGJlaW5nXG4gICAqIGNoZWNrZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYFJlc3BvbnNlYCBpcyBjYWNoZWFibGUsIGFuZCBgZmFsc2VgXG4gICAqIG90aGVyd2lzZS5cbiAgICovXG4gIGlzUmVzcG9uc2VDYWNoZWFibGUocmVzcG9uc2U6IFJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXNwb25zZSwgUmVzcG9uc2UsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICBmdW5jTmFtZTogJ2lzUmVzcG9uc2VDYWNoZWFibGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyZXNwb25zZScsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgY2FjaGVhYmxlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9zdGF0dXNlcykge1xuICAgICAgY2FjaGVhYmxlID0gdGhpcy5fc3RhdHVzZXMuaW5jbHVkZXMocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGVhZGVycyAmJiBjYWNoZWFibGUpIHtcbiAgICAgIGNhY2hlYWJsZSA9IE9iamVjdC5rZXlzKHRoaXMuX2hlYWRlcnMpLnNvbWUoKGhlYWRlck5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KGhlYWRlck5hbWUpID09PSB0aGlzLl9oZWFkZXJzIVtoZWFkZXJOYW1lXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIWNhY2hlYWJsZSkge1xuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgYFRoZSByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXNwb25zZS51cmwpfScgcmV0dXJuZWQgYSByZXNwb25zZSB0aGF0IGRvZXMgYCArXG4gICAgICAgICAgICBgbm90IG1lZXQgdGhlIGNyaXRlcmlhIGZvciBiZWluZyBjYWNoZWQuYCxcbiAgICAgICAgKTtcblxuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgY2FjaGVhYmlsaXR5IGNyaXRlcmlhIGhlcmUuYCk7XG4gICAgICAgIGxvZ2dlci5sb2coYENhY2hlYWJsZSBzdGF0dXNlczogYCArIEpTT04uc3RyaW5naWZ5KHRoaXMuX3N0YXR1c2VzKSk7XG4gICAgICAgIGxvZ2dlci5sb2coXG4gICAgICAgICAgYENhY2hlYWJsZSBoZWFkZXJzOiBgICsgSlNPTi5zdHJpbmdpZnkodGhpcy5faGVhZGVycywgbnVsbCwgMiksXG4gICAgICAgICk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuXG4gICAgICAgIGNvbnN0IGxvZ0ZyaWVuZGx5SGVhZGVyczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgbG9nRnJpZW5kbHlIZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlc3BvbnNlIHN0YXR1cyBhbmQgaGVhZGVycyBoZXJlLmApO1xuICAgICAgICBsb2dnZXIubG9nKGBSZXNwb25zZSBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgIGBSZXNwb25zZSBoZWFkZXJzOiBgICsgSlNPTi5zdHJpbmdpZnkobG9nRnJpZW5kbHlIZWFkZXJzLCBudWxsLCAyKSxcbiAgICAgICAgKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG5cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IGZ1bGwgcmVzcG9uc2UgZGV0YWlscyBoZXJlLmApO1xuICAgICAgICBsb2dnZXIubG9nKHJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgICBsb2dnZXIubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG5cbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlYWJsZTtcbiAgfVxufVxuXG5leHBvcnQge0NhY2hlYWJsZVJlc3BvbnNlfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7V29ya2JveFBsdWdpbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcbmltcG9ydCB7XG4gIENhY2hlYWJsZVJlc3BvbnNlLFxuICBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnMsXG59IGZyb20gJy4vQ2FjaGVhYmxlUmVzcG9uc2UuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBBIGNsYXNzIGltcGxlbWVudGluZyB0aGUgYGNhY2hlV2lsbFVwZGF0ZWAgbGlmZWN5Y2xlIGNhbGxiYWNrLiBUaGlzIG1ha2VzIGl0XG4gKiBlYXNpZXIgdG8gYWRkIGluIGNhY2hlYWJpbGl0eSBjaGVja3MgdG8gcmVxdWVzdHMgbWFkZSB2aWEgV29ya2JveCdzIGJ1aWx0LWluXG4gKiBzdHJhdGVnaWVzLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZVxuICovXG5jbGFzcyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiBpbXBsZW1lbnRzIFdvcmtib3hQbHVnaW4ge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jYWNoZWFibGVSZXNwb25zZTogQ2FjaGVhYmxlUmVzcG9uc2U7XG5cbiAgLyoqXG4gICAqIFRvIGNvbnN0cnVjdCBhIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiBpbnN0YW5jZSB5b3UgbXVzdCBwcm92aWRlIGF0XG4gICAqIGxlYXN0IG9uZSBvZiB0aGUgYGNvbmZpZ2AgcHJvcGVydGllcy5cbiAgICpcbiAgICogSWYgYm90aCBgc3RhdHVzZXNgIGFuZCBgaGVhZGVyc2AgYXJlIHNwZWNpZmllZCwgdGhlbiBib3RoIGNvbmRpdGlvbnMgbXVzdFxuICAgKiBiZSBtZXQgZm9yIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2NvbmZpZy5zdGF0dXNlc10gT25lIG9yIG1vcmUgc3RhdHVzIGNvZGVzIHRoYXQgYVxuICAgKiBgUmVzcG9uc2VgIGNhbiBoYXZlIGFuZCBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLHN0cmluZz59IFtjb25maWcuaGVhZGVyc10gQSBtYXBwaW5nIG9mIGhlYWRlciBuYW1lc1xuICAgKiBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRoYXQgYSBgUmVzcG9uc2VgIGNhbiBoYXZlIGFuZCBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICogSWYgbXVsdGlwbGUgaGVhZGVycyBhcmUgcHJvdmlkZWQsIG9ubHkgb25lIG5lZWRzIHRvIGJlIHByZXNlbnQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IENhY2hlYWJsZVJlc3BvbnNlT3B0aW9ucykge1xuICAgIHRoaXMuX2NhY2hlYWJsZVJlc3BvbnNlID0gbmV3IENhY2hlYWJsZVJlc3BvbnNlKGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgKiBAcmV0dXJuIHtSZXNwb25zZXxudWxsfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FjaGVXaWxsVXBkYXRlOiBXb3JrYm94UGx1Z2luWydjYWNoZVdpbGxVcGRhdGUnXSA9IGFzeW5jICh7cmVzcG9uc2V9KSA9PiB7XG4gICAgaWYgKHRoaXMuX2NhY2hlYWJsZVJlc3BvbnNlLmlzUmVzcG9uc2VDYWNoZWFibGUocmVzcG9uc2UpKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG5leHBvcnQge0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2lufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiB0aGF0IHByZXZlbnRzIGEgcHJvbWlzZSBmcm9tIGJlaW5nIGZsYWdnZWQgYXMgdW51c2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiovXG5leHBvcnQgZnVuY3Rpb24gZG9udFdhaXRGb3IocHJvbWlzZTogUHJvbWlzZTxhbnk+KTogdm9pZCB7XG4gIC8vIEVmZmVjdGl2ZSBuby1vcC5cbiAgdm9pZCBwcm9taXNlLnRoZW4oKCkgPT4ge30pO1xufVxuIiwgImV4cG9ydCB0eXBlIENvbnN0cnVjdG9yID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuZXhwb3J0IHR5cGUgRnVuYyA9ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuXG5leHBvcnQgY29uc3QgaW5zdGFuY2VPZkFueSA9IChcbiAgb2JqZWN0OiBhbnksXG4gIGNvbnN0cnVjdG9yczogQ29uc3RydWN0b3JbXSxcbik6IGJvb2xlYW4gPT4gY29uc3RydWN0b3JzLnNvbWUoKGMpID0+IG9iamVjdCBpbnN0YW5jZW9mIGMpO1xuIiwgImltcG9ydCB7XG4gIElEQlBDdXJzb3IsXG4gIElEQlBDdXJzb3JXaXRoVmFsdWUsXG4gIElEQlBEYXRhYmFzZSxcbiAgSURCUEluZGV4LFxuICBJREJQT2JqZWN0U3RvcmUsXG4gIElEQlBUcmFuc2FjdGlvbixcbn0gZnJvbSAnLi9lbnRyeS5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgRnVuYywgaW5zdGFuY2VPZkFueSB9IGZyb20gJy4vdXRpbC5qcyc7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlczogQ29uc3RydWN0b3JbXTtcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kczogRnVuY1tdO1xuXG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldElkYlByb3h5YWJsZVR5cGVzKCk6IENvbnN0cnVjdG9yW10ge1xuICByZXR1cm4gKFxuICAgIGlkYlByb3h5YWJsZVR5cGVzIHx8XG4gICAgKGlkYlByb3h5YWJsZVR5cGVzID0gW1xuICAgICAgSURCRGF0YWJhc2UsXG4gICAgICBJREJPYmplY3RTdG9yZSxcbiAgICAgIElEQkluZGV4LFxuICAgICAgSURCQ3Vyc29yLFxuICAgICAgSURCVHJhbnNhY3Rpb24sXG4gICAgXSlcbiAgKTtcbn1cblxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpOiBGdW5jW10ge1xuICByZXR1cm4gKFxuICAgIGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgKGN1cnNvckFkdmFuY2VNZXRob2RzID0gW1xuICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5hZHZhbmNlLFxuICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZSxcbiAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWVQcmltYXJ5S2V5LFxuICAgIF0pXG4gICk7XG59XG5cbmNvbnN0IGN1cnNvclJlcXVlc3RNYXA6IFdlYWtNYXA8SURCUEN1cnNvciwgSURCUmVxdWVzdDxJREJDdXJzb3I+PiA9XG4gIG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXA6IFdlYWtNYXA8SURCVHJhbnNhY3Rpb24sIFByb21pc2U8dm9pZD4+ID1cbiAgbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcDogV2Vha01hcDxJREJUcmFuc2FjdGlvbiwgc3RyaW5nW10+ID1cbiAgbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBjb25zdCByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0PFQ+KHJlcXVlc3Q6IElEQlJlcXVlc3Q8VD4pOiBQcm9taXNlPFQ+IHtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9O1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHdyYXAocmVxdWVzdC5yZXN1bHQgYXMgYW55KSBhcyBhbnkpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gIH0pO1xuXG4gIHByb21pc2VcbiAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgIC8vIFNpbmNlIGN1cnNvcmluZyByZXVzZXMgdGhlIElEQlJlcXVlc3QgKCpzaWdoKiksIHdlIGNhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWxcbiAgICAgIC8vIChzZWUgd3JhcEZ1bmN0aW9uKS5cbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQkN1cnNvcikge1xuICAgICAgICBjdXJzb3JSZXF1ZXN0TWFwLnNldChcbiAgICAgICAgICB2YWx1ZSBhcyB1bmtub3duIGFzIElEQlBDdXJzb3IsXG4gICAgICAgICAgcmVxdWVzdCBhcyB1bmtub3duIGFzIElEQlJlcXVlc3Q8SURCQ3Vyc29yPixcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIENhdGNoaW5nIHRvIGF2b2lkIFwiVW5jYXVnaHQgUHJvbWlzZSBleGNlcHRpb25zXCJcbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7fSk7XG5cbiAgLy8gVGhpcyBtYXBwaW5nIGV4aXN0cyBpbiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYnV0IGRvZXNuJ3QgZG9lc24ndCBleGlzdCBpbiB0cmFuc2Zvcm1DYWNoZS4gVGhpc1xuICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm9taXNlLCByZXF1ZXN0KTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih0eDogSURCVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gIGlmICh0cmFuc2FjdGlvbkRvbmVNYXAuaGFzKHR4KSkgcmV0dXJuO1xuXG4gIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgfTtcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydEVycm9yJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgdHguYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gIH0pO1xuXG4gIC8vIENhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWwuXG4gIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxuXG5sZXQgaWRiUHJveHlUcmFwczogUHJveHlIYW5kbGVyPGFueT4gPSB7XG4gIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgaWYgKHByb3AgPT09ICdkb25lJykgcmV0dXJuIHRyYW5zYWN0aW9uRG9uZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgIC8vIFBvbHlmaWxsIGZvciBvYmplY3RTdG9yZU5hbWVzIGJlY2F1c2Ugb2YgRWRnZS5cbiAgICAgIGlmIChwcm9wID09PSAnb2JqZWN0U3RvcmVOYW1lcycpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5vYmplY3RTdG9yZU5hbWVzIHx8IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcC5nZXQodGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIC8vIE1ha2UgdHguc3RvcmUgcmV0dXJuIHRoZSBvbmx5IHN0b3JlIGluIHRoZSB0cmFuc2FjdGlvbiwgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGFyZSBtYW55LlxuICAgICAgaWYgKHByb3AgPT09ICdzdG9yZScpIHtcbiAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogcmVjZWl2ZXIub2JqZWN0U3RvcmUocmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1swXSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEVsc2UgdHJhbnNmb3JtIHdoYXRldmVyIHdlIGdldCBiYWNrLlxuICAgIHJldHVybiB3cmFwKHRhcmdldFtwcm9wXSk7XG4gIH0sXG4gIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbiAmJlxuICAgICAgKHByb3AgPT09ICdkb25lJyB8fCBwcm9wID09PSAnc3RvcmUnKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBwcm9wIGluIHRhcmdldDtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVHJhcHMoXG4gIGNhbGxiYWNrOiAoY3VycmVudFRyYXBzOiBQcm94eUhhbmRsZXI8YW55PikgPT4gUHJveHlIYW5kbGVyPGFueT4sXG4pOiB2b2lkIHtcbiAgaWRiUHJveHlUcmFwcyA9IGNhbGxiYWNrKGlkYlByb3h5VHJhcHMpO1xufVxuXG5mdW5jdGlvbiB3cmFwRnVuY3Rpb248VCBleHRlbmRzIEZ1bmM+KGZ1bmM6IFQpOiBGdW5jdGlvbiB7XG4gIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gIC8vIG9ubHkgY3JlYXRlIG9uZSBuZXcgZnVuYyBwZXIgZnVuYy5cblxuICAvLyBFZGdlIGRvZXNuJ3Qgc3VwcG9ydCBvYmplY3RTdG9yZU5hbWVzIChib29vKSwgc28gd2UgcG9seWZpbGwgaXQgaGVyZS5cbiAgaWYgKFxuICAgIGZ1bmMgPT09IElEQkRhdGFiYXNlLnByb3RvdHlwZS50cmFuc2FjdGlvbiAmJlxuICAgICEoJ29iamVjdFN0b3JlTmFtZXMnIGluIElEQlRyYW5zYWN0aW9uLnByb3RvdHlwZSlcbiAgKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChcbiAgICAgIHRoaXM6IElEQlBEYXRhYmFzZSxcbiAgICAgIHN0b3JlTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgICAgLi4uYXJnczogYW55W11cbiAgICApIHtcbiAgICAgIGNvbnN0IHR4ID0gZnVuYy5jYWxsKHVud3JhcCh0aGlzKSwgc3RvcmVOYW1lcywgLi4uYXJncyk7XG4gICAgICB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuc2V0KFxuICAgICAgICB0eCxcbiAgICAgICAgKHN0b3JlTmFtZXMgYXMgYW55KS5zb3J0ID8gKHN0b3JlTmFtZXMgYXMgYW55W10pLnNvcnQoKSA6IFtzdG9yZU5hbWVzXSxcbiAgICAgICk7XG4gICAgICByZXR1cm4gd3JhcCh0eCk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgLy8gSURCLCB5b3UgYWR2YW5jZSB0aGUgY3Vyc29yIGFuZCB3YWl0IGZvciBhIG5ldyAnc3VjY2Vzcycgb24gdGhlIElEQlJlcXVlc3QgdGhhdCBnYXZlIHlvdSB0aGVcbiAgLy8gY3Vyc29yLiBJdCdzIGtpbmRhIGxpa2UgYSBwcm9taXNlIHRoYXQgY2FuIHJlc29sdmUgd2l0aCBtYW55IHZhbHVlcy4gVGhhdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAvLyB1bmRlZmluZWQgaWYgdGhlIGVuZCBvZiB0aGUgY3Vyc29yIGhhcyBiZWVuIHJlYWNoZWQuXG4gIGlmIChnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpLmluY2x1ZGVzKGZ1bmMpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzOiBJREJQQ3Vyc29yLCAuLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSB7XG4gICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgICAgZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpO1xuICAgICAgcmV0dXJuIHdyYXAoY3Vyc29yUmVxdWVzdE1hcC5nZXQodGhpcykhKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzOiBhbnksIC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pIHtcbiAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICByZXR1cm4gd3JhcChmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncykpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcblxuICAvLyBUaGlzIGRvZXNuJ3QgcmV0dXJuLCBpdCBqdXN0IGNyZWF0ZXMgYSAnZG9uZScgcHJvbWlzZSBmb3IgdGhlIHRyYW5zYWN0aW9uLFxuICAvLyB3aGljaCBpcyBsYXRlciByZXR1cm5lZCBmb3IgdHJhbnNhY3Rpb24uZG9uZSAoc2VlIGlkYk9iamVjdEhhbmRsZXIpLlxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbikgY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHZhbHVlKTtcblxuICBpZiAoaW5zdGFuY2VPZkFueSh2YWx1ZSwgZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSkpXG4gICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaWRiUHJveHlUcmFwcyk7XG5cbiAgLy8gUmV0dXJuIHRoZSBzYW1lIHZhbHVlIGJhY2sgaWYgd2UncmUgbm90IGdvaW5nIHRvIHRyYW5zZm9ybSBpdC5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEVuaGFuY2UgYW4gSURCIG9iamVjdCB3aXRoIGhlbHBlcnMuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSB0aGluZyB0byBlbmhhbmNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd3JhcCh2YWx1ZTogSURCRGF0YWJhc2UpOiBJREJQRGF0YWJhc2U7XG5leHBvcnQgZnVuY3Rpb24gd3JhcCh2YWx1ZTogSURCSW5kZXgpOiBJREJQSW5kZXg7XG5leHBvcnQgZnVuY3Rpb24gd3JhcCh2YWx1ZTogSURCT2JqZWN0U3RvcmUpOiBJREJQT2JqZWN0U3RvcmU7XG5leHBvcnQgZnVuY3Rpb24gd3JhcCh2YWx1ZTogSURCVHJhbnNhY3Rpb24pOiBJREJQVHJhbnNhY3Rpb247XG5leHBvcnQgZnVuY3Rpb24gd3JhcChcbiAgdmFsdWU6IElEQk9wZW5EQlJlcXVlc3QsXG4pOiBQcm9taXNlPElEQlBEYXRhYmFzZSB8IHVuZGVmaW5lZD47XG5leHBvcnQgZnVuY3Rpb24gd3JhcDxUPih2YWx1ZTogSURCUmVxdWVzdDxUPik6IFByb21pc2U8VD47XG5leHBvcnQgZnVuY3Rpb24gd3JhcCh2YWx1ZTogYW55KTogYW55IHtcbiAgLy8gV2Ugc29tZXRpbWVzIGdlbmVyYXRlIG11bHRpcGxlIHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdCAoZWcgd2hlbiBjdXJzb3JpbmcpLCBiZWNhdXNlXG4gIC8vIElEQiBpcyB3ZWlyZCBhbmQgYSBzaW5nbGUgSURCUmVxdWVzdCBjYW4geWllbGQgbWFueSByZXNwb25zZXMsIHNvIHRoZXNlIGNhbid0IGJlIGNhY2hlZC5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCUmVxdWVzdCkgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuXG4gIC8vIElmIHdlJ3ZlIGFscmVhZHkgdHJhbnNmb3JtZWQgdGhpcyB2YWx1ZSBiZWZvcmUsIHJldXNlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgLy8gVGhpcyBpcyBmYXN0ZXIsIGJ1dCBpdCBhbHNvIHByb3ZpZGVzIG9iamVjdCBlcXVhbGl0eS5cbiAgaWYgKHRyYW5zZm9ybUNhY2hlLmhhcyh2YWx1ZSkpIHJldHVybiB0cmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuICBjb25zdCBuZXdWYWx1ZSA9IHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpO1xuXG4gIC8vIE5vdCBhbGwgdHlwZXMgYXJlIHRyYW5zZm9ybWVkLlxuICAvLyBUaGVzZSBtYXkgYmUgcHJpbWl0aXZlIHR5cGVzLCBzbyB0aGV5IGNhbid0IGJlIFdlYWtNYXAga2V5cy5cbiAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBuZXdWYWx1ZTtcbn1cblxuLyoqXG4gKiBSZXZlcnQgYW4gZW5oYW5jZWQgSURCIG9iamVjdCB0byBhIHBsYWluIG9sZCBtaXNlcmFibGUgSURCIG9uZS5cbiAqXG4gKiBXaWxsIGFsc28gcmV2ZXJ0IGEgcHJvbWlzZSBiYWNrIHRvIGFuIElEQlJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSBlbmhhbmNlZCBvYmplY3QgdG8gcmV2ZXJ0LlxuICovXG5pbnRlcmZhY2UgVW53cmFwIHtcbiAgKHZhbHVlOiBJREJQQ3Vyc29yV2l0aFZhbHVlPGFueSwgYW55LCBhbnksIGFueSwgYW55Pik6IElEQkN1cnNvcldpdGhWYWx1ZTtcbiAgKHZhbHVlOiBJREJQQ3Vyc29yPGFueSwgYW55LCBhbnksIGFueSwgYW55Pik6IElEQkN1cnNvcjtcbiAgKHZhbHVlOiBJREJQRGF0YWJhc2UpOiBJREJEYXRhYmFzZTtcbiAgKHZhbHVlOiBJREJQSW5kZXg8YW55LCBhbnksIGFueSwgYW55LCBhbnk+KTogSURCSW5kZXg7XG4gICh2YWx1ZTogSURCUE9iamVjdFN0b3JlPGFueSwgYW55LCBhbnksIGFueT4pOiBJREJPYmplY3RTdG9yZTtcbiAgKHZhbHVlOiBJREJQVHJhbnNhY3Rpb248YW55LCBhbnksIGFueT4pOiBJREJUcmFuc2FjdGlvbjtcbiAgPFQgZXh0ZW5kcyBhbnk+KHZhbHVlOiBQcm9taXNlPElEQlBEYXRhYmFzZTxUPj4pOiBJREJPcGVuREJSZXF1ZXN0O1xuICAodmFsdWU6IFByb21pc2U8SURCUERhdGFiYXNlPik6IElEQk9wZW5EQlJlcXVlc3Q7XG4gIDxUPih2YWx1ZTogUHJvbWlzZTxUPik6IElEQlJlcXVlc3Q8VD47XG59XG5leHBvcnQgY29uc3QgdW53cmFwOiBVbndyYXAgPSAodmFsdWU6IGFueSk6IGFueSA9PlxuICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiIsICJpbXBvcnQgeyB3cmFwIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BlbkRCQ2FsbGJhY2tzPERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24+IHtcbiAgLyoqXG4gICAqIENhbGxlZCBpZiB0aGlzIHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIGhhcyBuZXZlciBiZWVuIG9wZW5lZCBiZWZvcmUuIFVzZSBpdCB0byBzcGVjaWZ5IHRoZVxuICAgKiBzY2hlbWEgZm9yIHRoZSBkYXRhYmFzZS5cbiAgICpcbiAgICogQHBhcmFtIGRhdGFiYXNlIEEgZGF0YWJhc2UgaW5zdGFuY2UgdGhhdCB5b3UgY2FuIHVzZSB0byBhZGQvcmVtb3ZlIHN0b3JlcyBhbmQgaW5kZXhlcy5cbiAgICogQHBhcmFtIG9sZFZlcnNpb24gTGFzdCB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSBvcGVuZWQgYnkgdGhlIHVzZXIuXG4gICAqIEBwYXJhbSBuZXdWZXJzaW9uIFdoYXRldmVyIG5ldyB2ZXJzaW9uIHlvdSBwcm92aWRlZC5cbiAgICogQHBhcmFtIHRyYW5zYWN0aW9uIFRoZSB0cmFuc2FjdGlvbiBmb3IgdGhpcyB1cGdyYWRlLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3UgbmVlZCB0byBnZXQgZGF0YSBmcm9tIG90aGVyIHN0b3JlcyBhcyBwYXJ0IG9mIGEgbWlncmF0aW9uLlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IG9iamVjdCBmb3IgdGhlIGFzc29jaWF0ZWQgJ3VwZ3JhZGVuZWVkZWQnIGV2ZW50LlxuICAgKi9cbiAgdXBncmFkZT8oXG4gICAgZGF0YWJhc2U6IElEQlBEYXRhYmFzZTxEQlR5cGVzPixcbiAgICBvbGRWZXJzaW9uOiBudW1iZXIsXG4gICAgbmV3VmVyc2lvbjogbnVtYmVyIHwgbnVsbCxcbiAgICB0cmFuc2FjdGlvbjogSURCUFRyYW5zYWN0aW9uPFxuICAgICAgREJUeXBlcyxcbiAgICAgIFN0b3JlTmFtZXM8REJUeXBlcz5bXSxcbiAgICAgICd2ZXJzaW9uY2hhbmdlJ1xuICAgID4sXG4gICAgZXZlbnQ6IElEQlZlcnNpb25DaGFuZ2VFdmVudCxcbiAgKTogdm9pZDtcbiAgLyoqXG4gICAqIENhbGxlZCBpZiB0aGVyZSBhcmUgb2xkZXIgdmVyc2lvbnMgb2YgdGhlIGRhdGFiYXNlIG9wZW4gb24gdGhlIG9yaWdpbiwgc28gdGhpcyB2ZXJzaW9uIGNhbm5vdFxuICAgKiBvcGVuLlxuICAgKlxuICAgKiBAcGFyYW0gY3VycmVudFZlcnNpb24gVmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UgdGhhdCdzIGJsb2NraW5nIHRoaXMgb25lLlxuICAgKiBAcGFyYW0gYmxvY2tlZFZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIGJlaW5nIGJsb2NrZWQgKHdoYXRldmVyIHZlcnNpb24geW91IHByb3ZpZGVkIHRvIGBvcGVuREJgKS5cbiAgICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCBvYmplY3QgZm9yIHRoZSBhc3NvY2lhdGVkIGBibG9ja2VkYCBldmVudC5cbiAgICovXG4gIGJsb2NrZWQ/KFxuICAgIGN1cnJlbnRWZXJzaW9uOiBudW1iZXIsXG4gICAgYmxvY2tlZFZlcnNpb246IG51bWJlciB8IG51bGwsXG4gICAgZXZlbnQ6IElEQlZlcnNpb25DaGFuZ2VFdmVudCxcbiAgKTogdm9pZDtcbiAgLyoqXG4gICAqIENhbGxlZCBpZiB0aGlzIGNvbm5lY3Rpb24gaXMgYmxvY2tpbmcgYSBmdXR1cmUgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UgZnJvbSBvcGVuaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gY3VycmVudFZlcnNpb24gVmVyc2lvbiBvZiB0aGUgb3BlbiBkYXRhYmFzZSAod2hhdGV2ZXIgdmVyc2lvbiB5b3UgcHJvdmlkZWQgdG8gYG9wZW5EQmApLlxuICAgKiBAcGFyYW0gYmxvY2tlZFZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIHRoYXQncyBiZWluZyBibG9ja2VkLlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IG9iamVjdCBmb3IgdGhlIGFzc29jaWF0ZWQgYHZlcnNpb25jaGFuZ2VgIGV2ZW50LlxuICAgKi9cbiAgYmxvY2tpbmc/KFxuICAgIGN1cnJlbnRWZXJzaW9uOiBudW1iZXIsXG4gICAgYmxvY2tlZFZlcnNpb246IG51bWJlciB8IG51bGwsXG4gICAgZXZlbnQ6IElEQlZlcnNpb25DaGFuZ2VFdmVudCxcbiAgKTogdm9pZDtcbiAgLyoqXG4gICAqIENhbGxlZCBpZiB0aGUgYnJvd3NlciBhYm5vcm1hbGx5IHRlcm1pbmF0ZXMgdGhlIGNvbm5lY3Rpb24uXG4gICAqIFRoaXMgaXMgbm90IGNhbGxlZCB3aGVuIGBkYi5jbG9zZSgpYCBpcyBjYWxsZWQuXG4gICAqL1xuICB0ZXJtaW5hdGVkPygpOiB2b2lkO1xufVxuXG4vKipcbiAqIE9wZW4gYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqIEBwYXJhbSB2ZXJzaW9uIFNjaGVtYSB2ZXJzaW9uLlxuICogQHBhcmFtIGNhbGxiYWNrcyBBZGRpdGlvbmFsIGNhbGxiYWNrcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9wZW5EQjxEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bj4oXG4gIG5hbWU6IHN0cmluZyxcbiAgdmVyc2lvbj86IG51bWJlcixcbiAgeyBibG9ja2VkLCB1cGdyYWRlLCBibG9ja2luZywgdGVybWluYXRlZCB9OiBPcGVuREJDYWxsYmFja3M8REJUeXBlcz4gPSB7fSxcbik6IFByb21pc2U8SURCUERhdGFiYXNlPERCVHlwZXM+PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpIGFzIFByb21pc2U8SURCUERhdGFiYXNlPERCVHlwZXM+PjtcblxuICBpZiAodXBncmFkZSkge1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigndXBncmFkZW5lZWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgdXBncmFkZShcbiAgICAgICAgd3JhcChyZXF1ZXN0LnJlc3VsdCkgYXMgSURCUERhdGFiYXNlPERCVHlwZXM+LFxuICAgICAgICBldmVudC5vbGRWZXJzaW9uLFxuICAgICAgICBldmVudC5uZXdWZXJzaW9uLFxuICAgICAgICB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24hKSBhcyB1bmtub3duIGFzIElEQlBUcmFuc2FjdGlvbjxcbiAgICAgICAgICBEQlR5cGVzLFxuICAgICAgICAgIFN0b3JlTmFtZXM8REJUeXBlcz5bXSxcbiAgICAgICAgICAndmVyc2lvbmNoYW5nZSdcbiAgICAgICAgPixcbiAgICAgICAgZXZlbnQsXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGJsb2NrZWQpIHtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+XG4gICAgICBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIChldmVudCBhcyBJREJWZXJzaW9uQ2hhbmdlRXZlbnQpLm9sZFZlcnNpb24sXG4gICAgICAgIChldmVudCBhcyBJREJWZXJzaW9uQ2hhbmdlRXZlbnQpLm5ld1ZlcnNpb24sXG4gICAgICAgIGV2ZW50IGFzIElEQlZlcnNpb25DaGFuZ2VFdmVudCxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIG9wZW5Qcm9taXNlXG4gICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICBpZiAodGVybWluYXRlZCkgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgaWYgKGJsb2NraW5nKSB7XG4gICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ3ZlcnNpb25jaGFuZ2UnLCAoZXZlbnQpID0+XG4gICAgICAgICAgYmxvY2tpbmcoZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgZXZlbnQpLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHt9KTtcblxuICByZXR1cm4gb3BlblByb21pc2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsZXRlREJDYWxsYmFja3Mge1xuICAvKipcbiAgICogQ2FsbGVkIGlmIHRoZXJlIGFyZSBjb25uZWN0aW9ucyB0byB0aGlzIGRhdGFiYXNlIG9wZW4sIHNvIGl0IGNhbm5vdCBiZSBkZWxldGVkLlxuICAgKlxuICAgKiBAcGFyYW0gY3VycmVudFZlcnNpb24gVmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UgdGhhdCdzIGJsb2NraW5nIHRoZSBkZWxldGUgb3BlcmF0aW9uLlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IG9iamVjdCBmb3IgdGhlIGFzc29jaWF0ZWQgYGJsb2NrZWRgIGV2ZW50LlxuICAgKi9cbiAgYmxvY2tlZD8oY3VycmVudFZlcnNpb246IG51bWJlciwgZXZlbnQ6IElEQlZlcnNpb25DaGFuZ2VFdmVudCk6IHZvaWQ7XG59XG5cbi8qKlxuICogRGVsZXRlIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEQihcbiAgbmFtZTogc3RyaW5nLFxuICB7IGJsb2NrZWQgfTogRGVsZXRlREJDYWxsYmFja3MgPSB7fSxcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKG5hbWUpO1xuXG4gIGlmIChibG9ja2VkKSB7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PlxuICAgICAgYmxvY2tlZChcbiAgICAgICAgLy8gQ2FzdGluZyBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0LURPTS1saWItZ2VuZXJhdG9yL3B1bGwvMTQwNVxuICAgICAgICAoZXZlbnQgYXMgSURCVmVyc2lvbkNoYW5nZUV2ZW50KS5vbGRWZXJzaW9uLFxuICAgICAgICBldmVudCBhcyBJREJWZXJzaW9uQ2hhbmdlRXZlbnQsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gd3JhcChyZXF1ZXN0KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG59XG5cbmV4cG9ydCB7IHVud3JhcCwgd3JhcCB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuXG4vLyA9PT0gVGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlzIHR5cGUgZGVmcyA9PT1cbnR5cGUgS2V5VG9LZXlOb0luZGV4PFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXTogc3RyaW5nIGV4dGVuZHMgSyA/IG5ldmVyIDogbnVtYmVyIGV4dGVuZHMgSyA/IG5ldmVyIDogSztcbn07XG50eXBlIFZhbHVlc09mPFQ+ID0gVCBleHRlbmRzIHsgW0sgaW4ga2V5b2YgVF06IGluZmVyIFUgfSA/IFUgOiBuZXZlcjtcbnR5cGUgS25vd25LZXlzPFQ+ID0gVmFsdWVzT2Y8S2V5VG9LZXlOb0luZGV4PFQ+PjtcblxudHlwZSBPbWl0PFQsIEs+ID0gUGljazxULCBFeGNsdWRlPGtleW9mIFQsIEs+PjtcblxuZXhwb3J0IGludGVyZmFjZSBEQlNjaGVtYSB7XG4gIFtzOiBzdHJpbmddOiBEQlNjaGVtYVZhbHVlO1xufVxuXG5pbnRlcmZhY2UgSW5kZXhLZXlzIHtcbiAgW3M6IHN0cmluZ106IElEQlZhbGlkS2V5O1xufVxuXG5pbnRlcmZhY2UgREJTY2hlbWFWYWx1ZSB7XG4gIGtleTogSURCVmFsaWRLZXk7XG4gIHZhbHVlOiBhbnk7XG4gIGluZGV4ZXM/OiBJbmRleEtleXM7XG59XG5cbi8qKlxuICogRXh0cmFjdCBrbm93biBvYmplY3Qgc3RvcmUgbmFtZXMgZnJvbSB0aGUgREIgc2NoZW1hIHR5cGUuXG4gKlxuICogQHRlbXBsYXRlIERCVHlwZXMgREIgc2NoZW1hIHR5cGUsIG9yIHVua25vd24gaWYgdGhlIERCIGlzbid0IHR5cGVkLlxuICovXG5leHBvcnQgdHlwZSBTdG9yZU5hbWVzPERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24+ID1cbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hID8gS25vd25LZXlzPERCVHlwZXM+IDogc3RyaW5nO1xuXG4vKipcbiAqIEV4dHJhY3QgZGF0YWJhc2UgdmFsdWUgdHlwZXMgZnJvbSB0aGUgREIgc2NoZW1hIHR5cGUuXG4gKlxuICogQHRlbXBsYXRlIERCVHlwZXMgREIgc2NoZW1hIHR5cGUsIG9yIHVua25vd24gaWYgdGhlIERCIGlzbid0IHR5cGVkLlxuICogQHRlbXBsYXRlIFN0b3JlTmFtZSBOYW1lcyBvZiB0aGUgb2JqZWN0IHN0b3JlcyB0byBnZXQgdGhlIHR5cGVzIG9mLlxuICovXG5leHBvcnQgdHlwZSBTdG9yZVZhbHVlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duLFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuPiA9IERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSA/IERCVHlwZXNbU3RvcmVOYW1lXVsndmFsdWUnXSA6IGFueTtcblxuLyoqXG4gKiBFeHRyYWN0IGRhdGFiYXNlIGtleSB0eXBlcyBmcm9tIHRoZSBEQiBzY2hlbWEgdHlwZS5cbiAqXG4gKiBAdGVtcGxhdGUgREJUeXBlcyBEQiBzY2hlbWEgdHlwZSwgb3IgdW5rbm93biBpZiB0aGUgREIgaXNuJ3QgdHlwZWQuXG4gKiBAdGVtcGxhdGUgU3RvcmVOYW1lIE5hbWVzIG9mIHRoZSBvYmplY3Qgc3RvcmVzIHRvIGdldCB0aGUgdHlwZXMgb2YuXG4gKi9cbmV4cG9ydCB0eXBlIFN0b3JlS2V5PFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duLFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuPiA9IERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSA/IERCVHlwZXNbU3RvcmVOYW1lXVsna2V5J10gOiBJREJWYWxpZEtleTtcblxuLyoqXG4gKiBFeHRyYWN0IHRoZSBuYW1lcyBvZiBpbmRleGVzIGluIGNlcnRhaW4gb2JqZWN0IHN0b3JlcyBmcm9tIHRoZSBEQiBzY2hlbWEgdHlwZS5cbiAqXG4gKiBAdGVtcGxhdGUgREJUeXBlcyBEQiBzY2hlbWEgdHlwZSwgb3IgdW5rbm93biBpZiB0aGUgREIgaXNuJ3QgdHlwZWQuXG4gKiBAdGVtcGxhdGUgU3RvcmVOYW1lIE5hbWVzIG9mIHRoZSBvYmplY3Qgc3RvcmVzIHRvIGdldCB0aGUgdHlwZXMgb2YuXG4gKi9cbmV4cG9ydCB0eXBlIEluZGV4TmFtZXM8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4+ID0gREJUeXBlcyBleHRlbmRzIERCU2NoZW1hID8ga2V5b2YgREJUeXBlc1tTdG9yZU5hbWVdWydpbmRleGVzJ10gOiBzdHJpbmc7XG5cbi8qKlxuICogRXh0cmFjdCB0aGUgdHlwZXMgb2YgaW5kZXhlcyBpbiBjZXJ0YWluIG9iamVjdCBzdG9yZXMgZnJvbSB0aGUgREIgc2NoZW1hIHR5cGUuXG4gKlxuICogQHRlbXBsYXRlIERCVHlwZXMgREIgc2NoZW1hIHR5cGUsIG9yIHVua25vd24gaWYgdGhlIERCIGlzbid0IHR5cGVkLlxuICogQHRlbXBsYXRlIFN0b3JlTmFtZSBOYW1lcyBvZiB0aGUgb2JqZWN0IHN0b3JlcyB0byBnZXQgdGhlIHR5cGVzIG9mLlxuICogQHRlbXBsYXRlIEluZGV4TmFtZSBOYW1lcyBvZiB0aGUgaW5kZXhlcyB0byBnZXQgdGhlIHR5cGVzIG9mLlxuICovXG5leHBvcnQgdHlwZSBJbmRleEtleTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+LFxuPiA9IERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYVxuICA/IEluZGV4TmFtZSBleHRlbmRzIGtleW9mIERCVHlwZXNbU3RvcmVOYW1lXVsnaW5kZXhlcyddXG4gICAgPyBEQlR5cGVzW1N0b3JlTmFtZV1bJ2luZGV4ZXMnXVtJbmRleE5hbWVdXG4gICAgOiBJREJWYWxpZEtleVxuICA6IElEQlZhbGlkS2V5O1xuXG50eXBlIEN1cnNvclNvdXJjZTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiA9IEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPlxuICA/IElEQlBJbmRleDxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+XG4gIDogSURCUE9iamVjdFN0b3JlPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIE1vZGU+O1xuXG50eXBlIEN1cnNvcktleTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93bixcbj4gPSBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT5cbiAgPyBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT5cbiAgOiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+O1xuXG50eXBlIElEQlBEYXRhYmFzZUV4dGVuZHMgPSBPbWl0PFxuICBJREJEYXRhYmFzZSxcbiAgJ2NyZWF0ZU9iamVjdFN0b3JlJyB8ICdkZWxldGVPYmplY3RTdG9yZScgfCAndHJhbnNhY3Rpb24nIHwgJ29iamVjdFN0b3JlTmFtZXMnXG4+O1xuXG4vKipcbiAqIEEgdmFyaWF0aW9uIG9mIERPTVN0cmluZ0xpc3Qgd2l0aCBwcmVjaXNlIHN0cmluZyB0eXBlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFR5cGVkRE9NU3RyaW5nTGlzdDxUIGV4dGVuZHMgc3RyaW5nPiBleHRlbmRzIERPTVN0cmluZ0xpc3Qge1xuICBjb250YWlucyhzdHJpbmc6IFQpOiBib29sZWFuO1xuICBpdGVtKGluZGV4OiBudW1iZXIpOiBUIHwgbnVsbDtcbiAgW2luZGV4OiBudW1iZXJdOiBUO1xuICBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYWJsZUl0ZXJhdG9yPFQ+O1xufVxuXG5pbnRlcmZhY2UgSURCVHJhbnNhY3Rpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBkdXJhYmlsaXR5IG9mIHRoZSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogVGhlIGRlZmF1bHQgaXMgXCJkZWZhdWx0XCIuIFVzaW5nIFwicmVsYXhlZFwiIHByb3ZpZGVzIGJldHRlciBwZXJmb3JtYW5jZSwgYnV0IHdpdGggZmV3ZXJcbiAgICogZ3VhcmFudGVlcy4gV2ViIGFwcGxpY2F0aW9ucyBhcmUgZW5jb3VyYWdlZCB0byB1c2UgXCJyZWxheGVkXCIgZm9yIGVwaGVtZXJhbCBkYXRhIHN1Y2ggYXMgY2FjaGVzXG4gICAqIG9yIHF1aWNrbHkgY2hhbmdpbmcgcmVjb3JkcywgYW5kIFwic3RyaWN0XCIgaW4gY2FzZXMgd2hlcmUgcmVkdWNpbmcgdGhlIHJpc2sgb2YgZGF0YSBsb3NzXG4gICAqIG91dHdlaWdocyB0aGUgaW1wYWN0IHRvIHBlcmZvcm1hbmNlIGFuZCBwb3dlci5cbiAgICovXG4gIGR1cmFiaWxpdHk/OiAnZGVmYXVsdCcgfCAnc3RyaWN0JyB8ICdyZWxheGVkJztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJREJQRGF0YWJhc2U8REJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24+XG4gIGV4dGVuZHMgSURCUERhdGFiYXNlRXh0ZW5kcyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZXMgb2Ygc3RvcmVzIGluIHRoZSBkYXRhYmFzZS5cbiAgICovXG4gIHJlYWRvbmx5IG9iamVjdFN0b3JlTmFtZXM6IFR5cGVkRE9NU3RyaW5nTGlzdDxTdG9yZU5hbWVzPERCVHlwZXM+PjtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHN0b3JlLlxuICAgKlxuICAgKiBUaHJvd3MgYSBcIkludmFsaWRTdGF0ZUVycm9yXCIgRE9NRXhjZXB0aW9uIGlmIG5vdCBjYWxsZWQgd2l0aGluIGFuIHVwZ3JhZGUgdHJhbnNhY3Rpb24uXG4gICAqL1xuICBjcmVhdGVPYmplY3RTdG9yZTxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgbmFtZTogTmFtZSxcbiAgICBvcHRpb25hbFBhcmFtZXRlcnM/OiBJREJPYmplY3RTdG9yZVBhcmFtZXRlcnMsXG4gICk6IElEQlBPYmplY3RTdG9yZTxcbiAgICBEQlR5cGVzLFxuICAgIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PixcbiAgICBOYW1lLFxuICAgICd2ZXJzaW9uY2hhbmdlJ1xuICA+O1xuICAvKipcbiAgICogRGVsZXRlcyB0aGUgb2JqZWN0IHN0b3JlIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAqXG4gICAqIFRocm93cyBhIFwiSW52YWxpZFN0YXRlRXJyb3JcIiBET01FeGNlcHRpb24gaWYgbm90IGNhbGxlZCB3aXRoaW4gYW4gdXBncmFkZSB0cmFuc2FjdGlvbi5cbiAgICovXG4gIGRlbGV0ZU9iamVjdFN0b3JlKG5hbWU6IFN0b3JlTmFtZXM8REJUeXBlcz4pOiB2b2lkO1xuICAvKipcbiAgICogU3RhcnQgYSBuZXcgdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWVzIFRoZSBvYmplY3Qgc3RvcmUocykgdGhpcyB0cmFuc2FjdGlvbiBuZWVkcy5cbiAgICogQHBhcmFtIG1vZGVcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHRyYW5zYWN0aW9uPFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuICA+KFxuICAgIHN0b3JlTmFtZXM6IE5hbWUsXG4gICAgbW9kZT86IE1vZGUsXG4gICAgb3B0aW9ucz86IElEQlRyYW5zYWN0aW9uT3B0aW9ucyxcbiAgKTogSURCUFRyYW5zYWN0aW9uPERCVHlwZXMsIFtOYW1lXSwgTW9kZT47XG4gIHRyYW5zYWN0aW9uPFxuICAgIE5hbWVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+LFxuICAgIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuICA+KFxuICAgIHN0b3JlTmFtZXM6IE5hbWVzLFxuICAgIG1vZGU/OiBNb2RlLFxuICAgIG9wdGlvbnM/OiBJREJUcmFuc2FjdGlvbk9wdGlvbnMsXG4gICk6IElEQlBUcmFuc2FjdGlvbjxEQlR5cGVzLCBOYW1lcywgTW9kZT47XG5cbiAgLy8gU2hvcnRjdXQgbWV0aG9kc1xuXG4gIC8qKlxuICAgKiBBZGQgYSB2YWx1ZSB0byBhIHN0b3JlLlxuICAgKlxuICAgKiBSZWplY3RzIGlmIGFuIGl0ZW0gb2YgYSBnaXZlbiBrZXkgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHN0b3JlLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0ga2V5XG4gICAqL1xuICBhZGQ8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICB2YWx1ZTogU3RvcmVWYWx1ZTxEQlR5cGVzLCBOYW1lPixcbiAgICBrZXk/OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+PjtcbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHJlY29yZHMgaW4gYSBzdG9yZS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKi9cbiAgY2xlYXIobmFtZTogU3RvcmVOYW1lczxEQlR5cGVzPik6IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIG51bWJlciBvZiByZWNvcmRzIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeSBpbiBhIHN0b3JlLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIGNvdW50PE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAga2V5PzogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICk6IFByb21pc2U8bnVtYmVyPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgbnVtYmVyIG9mIHJlY29yZHMgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5IGluIGFuIGluZGV4LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBpbmRleE5hbWUgTmFtZSBvZiB0aGUgaW5kZXggd2l0aGluIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgY291bnRGcm9tSW5kZXg8XG4gICAgTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gICAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBOYW1lPixcbiAgPihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgaW5kZXhOYW1lOiBJbmRleE5hbWUsXG4gICAga2V5PzogSW5kZXhLZXk8REJUeXBlcywgTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgKTogUHJvbWlzZTxudW1iZXI+O1xuICAvKipcbiAgICogRGVsZXRlcyByZWNvcmRzIGluIGEgc3RvcmUgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIGRlbGV0ZTxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGtleTogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTx2b2lkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHJlY29yZCBpbiBhIHN0b3JlIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqL1xuICBnZXQ8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBxdWVyeTogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIE5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHJlY29yZCBpbiBhbiBpbmRleCBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggdW5kZWZpbmVkIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBpbmRleE5hbWUgTmFtZSBvZiB0aGUgaW5kZXggd2l0aGluIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqL1xuICBnZXRGcm9tSW5kZXg8XG4gICAgTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gICAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBOYW1lPixcbiAgPihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgaW5kZXhOYW1lOiBJbmRleE5hbWUsXG4gICAgcXVlcnk6IEluZGV4S2V5PERCVHlwZXMsIE5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIE5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbGwgdmFsdWVzIGluIGEgc3RvcmUgdGhhdCBtYXRjaCB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiB2YWx1ZXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsPE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgcXVlcnk/OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIE5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCB2YWx1ZXMgaW4gYW4gaW5kZXggdGhhdCBtYXRjaCB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGluZGV4TmFtZSBOYW1lIG9mIHRoZSBpbmRleCB3aXRoaW4gdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIHZhbHVlcyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGxGcm9tSW5kZXg8XG4gICAgTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gICAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBOYW1lPixcbiAgPihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgaW5kZXhOYW1lOiBJbmRleE5hbWUsXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT5bXT47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGtleXMgb2YgcmVjb3JkcyBpbiBhIHN0b3JlIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIGtleXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsS2V5czxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgTmFtZT5bXT47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGtleXMgb2YgcmVjb3JkcyBpbiBhbiBpbmRleCBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGluZGV4TmFtZSBOYW1lIG9mIHRoZSBpbmRleCB3aXRoaW4gdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIGtleXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsS2V5c0Zyb21JbmRleDxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIE5hbWU+LFxuICA+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBpbmRleE5hbWU6IEluZGV4TmFtZSxcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIE5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgTmFtZT5bXT47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGtleSBvZiB0aGUgZmlyc3QgcmVjb3JkIGluIGEgc3RvcmUgdGhhdCBtYXRjaGVzIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqL1xuICBnZXRLZXk8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBxdWVyeTogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGtleSBvZiB0aGUgZmlyc3QgcmVjb3JkIGluIGFuIGluZGV4IHRoYXQgbWF0Y2hlcyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggdW5kZWZpbmVkIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBpbmRleE5hbWUgTmFtZSBvZiB0aGUgaW5kZXggd2l0aGluIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqL1xuICBnZXRLZXlGcm9tSW5kZXg8XG4gICAgTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gICAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBOYW1lPixcbiAgPihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgaW5kZXhOYW1lOiBJbmRleE5hbWUsXG4gICAgcXVlcnk6IEluZGV4S2V5PERCVHlwZXMsIE5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBQdXQgYW4gaXRlbSBpbiB0aGUgZGF0YWJhc2UuXG4gICAqXG4gICAqIFJlcGxhY2VzIGFueSBpdGVtIHdpdGggdGhlIHNhbWUga2V5LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcGFyYW0ga2V5XG4gICAqL1xuICBwdXQ8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICB2YWx1ZTogU3RvcmVWYWx1ZTxEQlR5cGVzLCBOYW1lPixcbiAgICBrZXk/OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+Pjtcbn1cblxudHlwZSBJREJQVHJhbnNhY3Rpb25FeHRlbmRzID0gT21pdDxcbiAgSURCVHJhbnNhY3Rpb24sXG4gICdkYicgfCAnb2JqZWN0U3RvcmUnIHwgJ29iamVjdFN0b3JlTmFtZXMnXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBUcmFuc2FjdGlvbjxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUFRyYW5zYWN0aW9uRXh0ZW5kcyB7XG4gIC8qKlxuICAgKiBUaGUgdHJhbnNhY3Rpb24ncyBtb2RlLlxuICAgKi9cbiAgcmVhZG9ubHkgbW9kZTogTW9kZTtcbiAgLyoqXG4gICAqIFRoZSBuYW1lcyBvZiBzdG9yZXMgaW4gc2NvcGUgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAqL1xuICByZWFkb25seSBvYmplY3RTdG9yZU5hbWVzOiBUeXBlZERPTVN0cmluZ0xpc3Q8VHhTdG9yZXNbbnVtYmVyXT47XG4gIC8qKlxuICAgKiBUaGUgdHJhbnNhY3Rpb24ncyBjb25uZWN0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgZGI6IElEQlBEYXRhYmFzZTxEQlR5cGVzPjtcbiAgLyoqXG4gICAqIFByb21pc2UgZm9yIHRoZSBjb21wbGV0aW9uIG9mIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAqL1xuICByZWFkb25seSBkb25lOiBQcm9taXNlPHZvaWQ+O1xuICAvKipcbiAgICogVGhlIGFzc29jaWF0ZWQgb2JqZWN0IHN0b3JlLCBpZiB0aGUgdHJhbnNhY3Rpb24gY292ZXJzIGEgc2luZ2xlIHN0b3JlLCBvdGhlcndpc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgcmVhZG9ubHkgc3RvcmU6IFR4U3RvcmVzWzFdIGV4dGVuZHMgdW5kZWZpbmVkXG4gICAgPyBJREJQT2JqZWN0U3RvcmU8REJUeXBlcywgVHhTdG9yZXMsIFR4U3RvcmVzWzBdLCBNb2RlPlxuICAgIDogdW5kZWZpbmVkO1xuICAvKipcbiAgICogUmV0dXJucyBhbiBJREJPYmplY3RTdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24ncyBzY29wZS5cbiAgICovXG4gIG9iamVjdFN0b3JlPFN0b3JlTmFtZSBleHRlbmRzIFR4U3RvcmVzW251bWJlcl0+KFxuICAgIG5hbWU6IFN0b3JlTmFtZSxcbiAgKTogSURCUE9iamVjdFN0b3JlPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIE1vZGU+O1xufVxuXG50eXBlIElEQlBPYmplY3RTdG9yZUV4dGVuZHMgPSBPbWl0PFxuICBJREJPYmplY3RTdG9yZSxcbiAgfCAndHJhbnNhY3Rpb24nXG4gIHwgJ2FkZCdcbiAgfCAnY2xlYXInXG4gIHwgJ2NvdW50J1xuICB8ICdjcmVhdGVJbmRleCdcbiAgfCAnZGVsZXRlJ1xuICB8ICdnZXQnXG4gIHwgJ2dldEFsbCdcbiAgfCAnZ2V0QWxsS2V5cydcbiAgfCAnZ2V0S2V5J1xuICB8ICdpbmRleCdcbiAgfCAnb3BlbkN1cnNvcidcbiAgfCAnb3BlbktleUN1cnNvcidcbiAgfCAncHV0J1xuICB8ICdpbmRleE5hbWVzJ1xuPjtcblxuZXhwb3J0IGludGVyZmFjZSBJREJQT2JqZWN0U3RvcmU8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQT2JqZWN0U3RvcmVFeHRlbmRzIHtcbiAgLyoqXG4gICAqIFRoZSBuYW1lcyBvZiBpbmRleGVzIGluIHRoZSBzdG9yZS5cbiAgICovXG4gIHJlYWRvbmx5IGluZGV4TmFtZXM6IFR5cGVkRE9NU3RyaW5nTGlzdDxJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4+O1xuICAvKipcbiAgICogVGhlIGFzc29jaWF0ZWQgdHJhbnNhY3Rpb24uXG4gICAqL1xuICByZWFkb25seSB0cmFuc2FjdGlvbjogSURCUFRyYW5zYWN0aW9uPERCVHlwZXMsIFR4U3RvcmVzLCBNb2RlPjtcbiAgLyoqXG4gICAqIEFkZCBhIHZhbHVlIHRvIHRoZSBzdG9yZS5cbiAgICpcbiAgICogUmVqZWN0cyBpZiBhbiBpdGVtIG9mIGEgZ2l2ZW4ga2V5IGFscmVhZHkgZXhpc3RzIGluIHRoZSBzdG9yZS5cbiAgICovXG4gIGFkZDogTW9kZSBleHRlbmRzICdyZWFkb25seSdcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKFxuICAgICAgICB2YWx1ZTogU3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+LFxuICAgICAgICBrZXk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICAgICApID0+IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPj47XG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCByZWNvcmRzIGluIHN0b3JlLlxuICAgKi9cbiAgY2xlYXI6IE1vZGUgZXh0ZW5kcyAncmVhZG9ubHknID8gdW5kZWZpbmVkIDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgbnVtYmVyIG9mIHJlY29yZHMgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5LlxuICAgKi9cbiAgY291bnQoXG4gICAga2V5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgKTogUHJvbWlzZTxudW1iZXI+O1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbmRleCBpbiBzdG9yZS5cbiAgICpcbiAgICogVGhyb3dzIGFuIFwiSW52YWxpZFN0YXRlRXJyb3JcIiBET01FeGNlcHRpb24gaWYgbm90IGNhbGxlZCB3aXRoaW4gYW4gdXBncmFkZSB0cmFuc2FjdGlvbi5cbiAgICovXG4gIGNyZWF0ZUluZGV4OiBNb2RlIGV4dGVuZHMgJ3ZlcnNpb25jaGFuZ2UnXG4gICAgPyA8SW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+PihcbiAgICAgICAgbmFtZTogSW5kZXhOYW1lLFxuICAgICAgICBrZXlQYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICAgICAgb3B0aW9ucz86IElEQkluZGV4UGFyYW1ldGVycyxcbiAgICAgICkgPT4gSURCUEluZGV4PERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT5cbiAgICA6IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIERlbGV0ZXMgcmVjb3JkcyBpbiBzdG9yZSBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkuXG4gICAqL1xuICBkZWxldGU6IE1vZGUgZXh0ZW5kcyAncmVhZG9ubHknXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IChrZXk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHJlY29yZCBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggdW5kZWZpbmVkIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgKi9cbiAgZ2V0KFxuICAgIHF1ZXJ5OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbGwgdmFsdWVzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIHZhbHVlcyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGwoXG4gICAgcXVlcnk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5cyBvZiByZWNvcmRzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiBrZXlzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbEtleXMoXG4gICAgcXVlcnk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT5bXT47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGtleSBvZiB0aGUgZmlyc3QgcmVjb3JkIHRoYXQgbWF0Y2hlcyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggdW5kZWZpbmVkIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgKi9cbiAgZ2V0S2V5KFxuICAgIHF1ZXJ5OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBHZXQgYSBxdWVyeSBvZiBhIGdpdmVuIG5hbWUuXG4gICAqL1xuICBpbmRleDxJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4+KFxuICAgIG5hbWU6IEluZGV4TmFtZSxcbiAgKTogSURCUEluZGV4PERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT47XG4gIC8qKlxuICAgKiBPcGVucyBhIGN1cnNvciBvdmVyIHRoZSByZWNvcmRzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCBudWxsIGlmIG5vIG1hdGNoZXMgYXJlIGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnkgSWYgbnVsbCwgYWxsIHJlY29yZHMgbWF0Y2guXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICovXG4gIG9wZW5DdXJzb3IoXG4gICAgcXVlcnk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGRpcmVjdGlvbj86IElEQkN1cnNvckRpcmVjdGlvbixcbiAgKTogUHJvbWlzZTxJREJQQ3Vyc29yV2l0aFZhbHVlPFxuICAgIERCVHlwZXMsXG4gICAgVHhTdG9yZXMsXG4gICAgU3RvcmVOYW1lLFxuICAgIHVua25vd24sXG4gICAgTW9kZVxuICA+IHwgbnVsbD47XG4gIC8qKlxuICAgKiBPcGVucyBhIGN1cnNvciBvdmVyIHRoZSBrZXlzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCBudWxsIGlmIG5vIG1hdGNoZXMgYXJlIGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnkgSWYgbnVsbCwgYWxsIHJlY29yZHMgbWF0Y2guXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICovXG4gIG9wZW5LZXlDdXJzb3IoXG4gICAgcXVlcnk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGRpcmVjdGlvbj86IElEQkN1cnNvckRpcmVjdGlvbixcbiAgKTogUHJvbWlzZTxJREJQQ3Vyc29yPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIHVua25vd24sIE1vZGU+IHwgbnVsbD47XG4gIC8qKlxuICAgKiBQdXQgYW4gaXRlbSBpbiB0aGUgc3RvcmUuXG4gICAqXG4gICAqIFJlcGxhY2VzIGFueSBpdGVtIHdpdGggdGhlIHNhbWUga2V5LlxuICAgKi9cbiAgcHV0OiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5J1xuICAgID8gdW5kZWZpbmVkXG4gICAgOiAoXG4gICAgICAgIHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT4sXG4gICAgICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgICAgICkgPT4gUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+PjtcbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciB0aGUgc3RvcmUuXG4gICAqL1xuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxcbiAgICBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZTxcbiAgICAgIERCVHlwZXMsXG4gICAgICBUeFN0b3JlcyxcbiAgICAgIFN0b3JlTmFtZSxcbiAgICAgIHVua25vd24sXG4gICAgICBNb2RlXG4gICAgPlxuICA+O1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSByZWNvcmRzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IElmIG51bGwsIGFsbCByZWNvcmRzIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAqL1xuICBpdGVyYXRlKFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBkaXJlY3Rpb24/OiBJREJDdXJzb3JEaXJlY3Rpb24sXG4gICk6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxcbiAgICBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZTxcbiAgICAgIERCVHlwZXMsXG4gICAgICBUeFN0b3JlcyxcbiAgICAgIFN0b3JlTmFtZSxcbiAgICAgIHVua25vd24sXG4gICAgICBNb2RlXG4gICAgPlxuICA+O1xufVxuXG50eXBlIElEQlBJbmRleEV4dGVuZHMgPSBPbWl0PFxuICBJREJJbmRleCxcbiAgfCAnb2JqZWN0U3RvcmUnXG4gIHwgJ2NvdW50J1xuICB8ICdnZXQnXG4gIHwgJ2dldEFsbCdcbiAgfCAnZ2V0QWxsS2V5cydcbiAgfCAnZ2V0S2V5J1xuICB8ICdvcGVuQ3Vyc29yJ1xuICB8ICdvcGVuS2V5Q3Vyc29yJ1xuPjtcblxuZXhwb3J0IGludGVyZmFjZSBJREJQSW5kZXg8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gPSBJbmRleE5hbWVzPFxuICAgIERCVHlwZXMsXG4gICAgU3RvcmVOYW1lXG4gID4sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBJbmRleEV4dGVuZHMge1xuICAvKipcbiAgICogVGhlIElEQk9iamVjdFN0b3JlIHRoZSBpbmRleCBiZWxvbmdzIHRvLlxuICAgKi9cbiAgcmVhZG9ubHkgb2JqZWN0U3RvcmU6IElEQlBPYmplY3RTdG9yZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBNb2RlPjtcblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkuXG4gICAqL1xuICBjb3VudChcbiAgICBrZXk/OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICk6IFByb21pc2U8bnVtYmVyPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHJlY29yZCBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggdW5kZWZpbmVkIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgKi9cbiAgZ2V0KFxuICAgIHF1ZXJ5OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCB2YWx1ZXMgdGhhdCBtYXRjaCB0aGUgcXVlcnkuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2YgdmFsdWVzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbChcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT5bXT47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGtleXMgb2YgcmVjb3JkcyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2Yga2V5cyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGxLZXlzKFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT5bXT47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGtleSBvZiB0aGUgZmlyc3QgcmVjb3JkIHRoYXQgbWF0Y2hlcyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggdW5kZWZpbmVkIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgKi9cbiAgZ2V0S2V5KFxuICAgIHF1ZXJ5OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIE9wZW5zIGEgY3Vyc29yIG92ZXIgdGhlIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIG51bGwgaWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgb3BlbkN1cnNvcihcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBkaXJlY3Rpb24/OiBJREJDdXJzb3JEaXJlY3Rpb24sXG4gICk6IFByb21pc2U8SURCUEN1cnNvcldpdGhWYWx1ZTxcbiAgICBEQlR5cGVzLFxuICAgIFR4U3RvcmVzLFxuICAgIFN0b3JlTmFtZSxcbiAgICBJbmRleE5hbWUsXG4gICAgTW9kZVxuICA+IHwgbnVsbD47XG4gIC8qKlxuICAgKiBPcGVucyBhIGN1cnNvciBvdmVyIHRoZSBrZXlzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCBudWxsIGlmIG5vIG1hdGNoZXMgYXJlIGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnkgSWYgbnVsbCwgYWxsIHJlY29yZHMgbWF0Y2guXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICovXG4gIG9wZW5LZXlDdXJzb3IoXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBQcm9taXNlPElEQlBDdXJzb3I8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPiB8IG51bGw+O1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSBpbmRleC5cbiAgICovXG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFxuICAgIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlPFxuICAgICAgREJUeXBlcyxcbiAgICAgIFR4U3RvcmVzLFxuICAgICAgU3RvcmVOYW1lLFxuICAgICAgSW5kZXhOYW1lLFxuICAgICAgTW9kZVxuICAgID5cbiAgPjtcbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciB0aGUgcmVjb3JkcyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggbnVsbCBpZiBubyBtYXRjaGVzIGFyZSBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IElmIG51bGwsIGFsbCByZWNvcmRzIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAqL1xuICBpdGVyYXRlKFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGRpcmVjdGlvbj86IElEQkN1cnNvckRpcmVjdGlvbixcbiAgKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFxuICAgIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlPFxuICAgICAgREJUeXBlcyxcbiAgICAgIFR4U3RvcmVzLFxuICAgICAgU3RvcmVOYW1lLFxuICAgICAgSW5kZXhOYW1lLFxuICAgICAgTW9kZVxuICAgID5cbiAgPjtcbn1cblxudHlwZSBJREJQQ3Vyc29yRXh0ZW5kcyA9IE9taXQ8XG4gIElEQkN1cnNvcixcbiAgfCAna2V5J1xuICB8ICdwcmltYXJ5S2V5J1xuICB8ICdzb3VyY2UnXG4gIHwgJ2FkdmFuY2UnXG4gIHwgJ2NvbnRpbnVlJ1xuICB8ICdjb250aW51ZVByaW1hcnlLZXknXG4gIHwgJ2RlbGV0ZSdcbiAgfCAndXBkYXRlJ1xuPjtcblxuZXhwb3J0IGludGVyZmFjZSBJREJQQ3Vyc29yPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBDdXJzb3JFeHRlbmRzIHtcbiAgLyoqXG4gICAqIFRoZSBrZXkgb2YgdGhlIGN1cnJlbnQgaW5kZXggb3Igb2JqZWN0IHN0b3JlIGl0ZW0uXG4gICAqL1xuICByZWFkb25seSBrZXk6IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT47XG4gIC8qKlxuICAgKiBUaGUga2V5IG9mIHRoZSBjdXJyZW50IG9iamVjdCBzdG9yZSBpdGVtLlxuICAgKi9cbiAgcmVhZG9ubHkgcHJpbWFyeUtleTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPjtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEQk9iamVjdFN0b3JlIG9yIElEQkluZGV4IHRoZSBjdXJzb3Igd2FzIG9wZW5lZCBmcm9tLlxuICAgKi9cbiAgcmVhZG9ubHkgc291cmNlOiBDdXJzb3JTb3VyY2U8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPjtcbiAgLyoqXG4gICAqIEFkdmFuY2VzIHRoZSBjdXJzb3IgYSBnaXZlbiBudW1iZXIgb2YgcmVjb3Jkcy5cbiAgICpcbiAgICogUmVzb2x2ZXMgdG8gbnVsbCBpZiBubyBtYXRjaGluZyByZWNvcmRzIHJlbWFpbi5cbiAgICovXG4gIGFkdmFuY2U8VD4odGhpczogVCwgY291bnQ6IG51bWJlcik6IFByb21pc2U8VCB8IG51bGw+O1xuICAvKipcbiAgICogQWR2YW5jZSB0aGUgY3Vyc29yIGJ5IG9uZSByZWNvcmQgKHVubGVzcyAna2V5JyBpcyBwcm92aWRlZCkuXG4gICAqXG4gICAqIFJlc29sdmVzIHRvIG51bGwgaWYgbm8gbWF0Y2hpbmcgcmVjb3JkcyByZW1haW4uXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgQWR2YW5jZSB0byB0aGUgaW5kZXggb3Igb2JqZWN0IHN0b3JlIHdpdGggYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqL1xuICBjb250aW51ZTxUPihcbiAgICB0aGlzOiBULFxuICAgIGtleT86IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4sXG4gICk6IFByb21pc2U8VCB8IG51bGw+O1xuICAvKipcbiAgICogQWR2YW5jZSB0aGUgY3Vyc29yIGJ5IGdpdmVuIGtleXMuXG4gICAqXG4gICAqIFRoZSBvcGVyYXRpb24gaXMgJ2FuZCcgXHUyMDEzIGJvdGgga2V5cyBtdXN0IGJlIHNhdGlzZmllZC5cbiAgICpcbiAgICogUmVzb2x2ZXMgdG8gbnVsbCBpZiBubyBtYXRjaGluZyByZWNvcmRzIHJlbWFpbi5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICogQHBhcmFtIHByaW1hcnlLZXkgYW5kIHdoZXJlIHRoZSBvYmplY3Qgc3RvcmUgaGFzIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWVQcmltYXJ5S2V5PFQ+KFxuICAgIHRoaXM6IFQsXG4gICAga2V5OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+LFxuICAgIHByaW1hcnlLZXk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4sXG4gICk6IFByb21pc2U8VCB8IG51bGw+O1xuICAvKipcbiAgICogRGVsZXRlIHRoZSBjdXJyZW50IHJlY29yZC5cbiAgICovXG4gIGRlbGV0ZTogTW9kZSBleHRlbmRzICdyZWFkb25seScgPyB1bmRlZmluZWQgOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAvKipcbiAgICogVXBkYXRlZCB0aGUgY3VycmVudCByZWNvcmQuXG4gICAqL1xuICB1cGRhdGU6IE1vZGUgZXh0ZW5kcyAncmVhZG9ubHknXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IChcbiAgICAgICAgdmFsdWU6IFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgICAgICkgPT4gUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+PjtcbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciB0aGUgY3Vyc29yLlxuICAgKi9cbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8XG4gICAgSURCUEN1cnNvckl0ZXJhdG9yVmFsdWU8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPlxuICA+O1xufVxuXG50eXBlIElEQlBDdXJzb3JJdGVyYXRvclZhbHVlRXh0ZW5kczxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24gPSB1bmtub3duLFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gPSBPbWl0PFxuICBJREJQQ3Vyc29yPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT4sXG4gICdhZHZhbmNlJyB8ICdjb250aW51ZScgfCAnY29udGludWVQcmltYXJ5S2V5J1xuPjtcblxuZXhwb3J0IGludGVyZmFjZSBJREJQQ3Vyc29ySXRlcmF0b3JWYWx1ZTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24gPSB1bmtub3duLFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQQ3Vyc29ySXRlcmF0b3JWYWx1ZUV4dGVuZHM8XG4gICAgREJUeXBlcyxcbiAgICBUeFN0b3JlcyxcbiAgICBTdG9yZU5hbWUsXG4gICAgSW5kZXhOYW1lLFxuICAgIE1vZGVcbiAgPiB7XG4gIC8qKlxuICAgKiBBZHZhbmNlcyB0aGUgY3Vyc29yIGEgZ2l2ZW4gbnVtYmVyIG9mIHJlY29yZHMuXG4gICAqL1xuICBhZHZhbmNlPFQ+KHRoaXM6IFQsIGNvdW50OiBudW1iZXIpOiB2b2lkO1xuICAvKipcbiAgICogQWR2YW5jZSB0aGUgY3Vyc29yIGJ5IG9uZSByZWNvcmQgKHVubGVzcyAna2V5JyBpcyBwcm92aWRlZCkuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgQWR2YW5jZSB0byB0aGUgaW5kZXggb3Igb2JqZWN0IHN0b3JlIHdpdGggYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqL1xuICBjb250aW51ZTxUPih0aGlzOiBULCBrZXk/OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+KTogdm9pZDtcbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIGN1cnNvciBieSBnaXZlbiBrZXlzLlxuICAgKlxuICAgKiBUaGUgb3BlcmF0aW9uIGlzICdhbmQnIFx1MjAxMyBib3RoIGtleXMgbXVzdCBiZSBzYXRpc2ZpZWQuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgQWR2YW5jZSB0byB0aGUgaW5kZXggb3Igb2JqZWN0IHN0b3JlIHdpdGggYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqIEBwYXJhbSBwcmltYXJ5S2V5IGFuZCB3aGVyZSB0aGUgb2JqZWN0IHN0b3JlIGhhcyBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICovXG4gIGNvbnRpbnVlUHJpbWFyeUtleTxUPihcbiAgICB0aGlzOiBULFxuICAgIGtleTogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPixcbiAgICBwcmltYXJ5S2V5OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+LFxuICApOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBDdXJzb3JXaXRoVmFsdWU8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUEN1cnNvcjxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+IHtcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudCBpdGVtLlxuICAgKi9cbiAgcmVhZG9ubHkgdmFsdWU6IFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPjtcbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciB0aGUgY3Vyc29yLlxuICAgKi9cbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8XG4gICAgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gICAgICBEQlR5cGVzLFxuICAgICAgVHhTdG9yZXMsXG4gICAgICBTdG9yZU5hbWUsXG4gICAgICBJbmRleE5hbWUsXG4gICAgICBNb2RlXG4gICAgPlxuICA+O1xufVxuXG4vLyBTb21lIG9mIHRoYXQgc3dlZWVlZXQgSmF2YS1lc3F1ZSBuYW1pbmcuXG50eXBlIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlRXh0ZW5kczxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24gPSB1bmtub3duLFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gPSBPbWl0PFxuICBJREJQQ3Vyc29yV2l0aFZhbHVlPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT4sXG4gICdhZHZhbmNlJyB8ICdjb250aW51ZScgfCAnY29udGludWVQcmltYXJ5S2V5J1xuPjtcblxuZXhwb3J0IGludGVyZmFjZSBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24gPSB1bmtub3duLFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZUV4dGVuZHM8XG4gICAgREJUeXBlcyxcbiAgICBUeFN0b3JlcyxcbiAgICBTdG9yZU5hbWUsXG4gICAgSW5kZXhOYW1lLFxuICAgIE1vZGVcbiAgPiB7XG4gIC8qKlxuICAgKiBBZHZhbmNlcyB0aGUgY3Vyc29yIGEgZ2l2ZW4gbnVtYmVyIG9mIHJlY29yZHMuXG4gICAqL1xuICBhZHZhbmNlPFQ+KHRoaXM6IFQsIGNvdW50OiBudW1iZXIpOiB2b2lkO1xuICAvKipcbiAgICogQWR2YW5jZSB0aGUgY3Vyc29yIGJ5IG9uZSByZWNvcmQgKHVubGVzcyAna2V5JyBpcyBwcm92aWRlZCkuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgQWR2YW5jZSB0byB0aGUgaW5kZXggb3Igb2JqZWN0IHN0b3JlIHdpdGggYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqL1xuICBjb250aW51ZTxUPih0aGlzOiBULCBrZXk/OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+KTogdm9pZDtcbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIGN1cnNvciBieSBnaXZlbiBrZXlzLlxuICAgKlxuICAgKiBUaGUgb3BlcmF0aW9uIGlzICdhbmQnIFx1MjAxMyBib3RoIGtleXMgbXVzdCBiZSBzYXRpc2ZpZWQuXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgQWR2YW5jZSB0byB0aGUgaW5kZXggb3Igb2JqZWN0IHN0b3JlIHdpdGggYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqIEBwYXJhbSBwcmltYXJ5S2V5IGFuZCB3aGVyZSB0aGUgb2JqZWN0IHN0b3JlIGhhcyBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICovXG4gIGNvbnRpbnVlUHJpbWFyeUtleTxUPihcbiAgICB0aGlzOiBULFxuICAgIGtleTogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPixcbiAgICBwcmltYXJ5S2V5OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+LFxuICApOiB2b2lkO1xufVxuIiwgImltcG9ydCB7IEZ1bmMgfSBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0IHsgcmVwbGFjZVRyYXBzIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5pbXBvcnQgeyBJREJQRGF0YWJhc2UsIElEQlBJbmRleCB9IGZyb20gJy4vZW50cnkuanMnO1xuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXA8c3RyaW5nLCBGdW5jPigpO1xuXG5mdW5jdGlvbiBnZXRNZXRob2QoXG4gIHRhcmdldDogYW55LFxuICBwcm9wOiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wsXG4pOiBGdW5jIHwgdW5kZWZpbmVkIHtcbiAgaWYgKFxuICAgICEoXG4gICAgICB0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgIShwcm9wIGluIHRhcmdldCkgJiZcbiAgICAgIHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJ1xuICAgIClcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKSByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG5cbiAgY29uc3QgdGFyZ2V0RnVuY05hbWU6IHN0cmluZyA9IHByb3AucmVwbGFjZSgvRnJvbUluZGV4JC8sICcnKTtcbiAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgY29uc3QgaXNXcml0ZSA9IHdyaXRlTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSk7XG5cbiAgaWYgKFxuICAgIC8vIEJhaWwgaWYgdGhlIHRhcmdldCBkb2Vzbid0IGV4aXN0IG9uIHRoZSB0YXJnZXQuIEVnLCBnZXRBbGwgaXNuJ3QgaW4gRWRnZS5cbiAgICAhKHRhcmdldEZ1bmNOYW1lIGluICh1c2VJbmRleCA/IElEQkluZGV4IDogSURCT2JqZWN0U3RvcmUpLnByb3RvdHlwZSkgfHxcbiAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoXG4gICAgdGhpczogSURCUERhdGFiYXNlLFxuICAgIHN0b3JlTmFtZTogc3RyaW5nLFxuICAgIC4uLmFyZ3M6IGFueVtdXG4gICkge1xuICAgIC8vIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6IHVuZGVmaW5lZCBnemlwcHMgYmV0dGVyLCBidXQgZmFpbHMgaW4gRWRnZSA6KFxuICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgIGxldCB0YXJnZXQ6XG4gICAgICB8IHR5cGVvZiB0eC5zdG9yZVxuICAgICAgfCBJREJQSW5kZXg8dW5rbm93biwgc3RyaW5nW10sIHN0cmluZywgc3RyaW5nLCAncmVhZHdyaXRlJyB8ICdyZWFkb25seSc+ID1cbiAgICAgIHR4LnN0b3JlO1xuICAgIGlmICh1c2VJbmRleCkgdGFyZ2V0ID0gdGFyZ2V0LmluZGV4KGFyZ3Muc2hpZnQoKSk7XG5cbiAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgIC8vIElmIGl0J3MgYSB3cml0ZSBvcGVyYXRpb24sIG11c3QgcmVqZWN0IGlmIHR4LmRvbmUgcmVqZWN0cy5cbiAgICAvLyBNdXN0IHJlamVjdCB3aXRoIG9wIHJlamVjdGlvbiBmaXJzdC5cbiAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAvLyBNdXN0IGhhbmRsZSBib3RoIHByb21pc2VzIChubyB1bmhhbmRsZWQgcmVqZWN0aW9ucylcbiAgICByZXR1cm4gKFxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAodGFyZ2V0IGFzIGFueSlbdGFyZ2V0RnVuY05hbWVdKC4uLmFyZ3MpLFxuICAgICAgICBpc1dyaXRlICYmIHR4LmRvbmUsXG4gICAgICBdKVxuICAgIClbMF07XG4gIH07XG5cbiAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgcmV0dXJuIG1ldGhvZDtcbn1cblxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgLi4ub2xkVHJhcHMsXG4gIGdldDogKHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpID0+XG4gICAgZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0ISh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSxcbiAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PlxuICAgICEhZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzISh0YXJnZXQsIHByb3ApLFxufSkpO1xuIiwgIi8vIEB0cy1pZ25vcmVcbnRyeXtzZWxmWyd3b3JrYm94OmV4cGlyYXRpb246Ny4wLjAnXSYmXygpfWNhdGNoKGUpe30iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge29wZW5EQiwgREJTY2hlbWEsIElEQlBEYXRhYmFzZSwgZGVsZXRlREJ9IGZyb20gJ2lkYic7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuY29uc3QgREJfTkFNRSA9ICd3b3JrYm94LWV4cGlyYXRpb24nO1xuY29uc3QgQ0FDSEVfT0JKRUNUX1NUT1JFID0gJ2NhY2hlLWVudHJpZXMnO1xuXG5jb25zdCBub3JtYWxpemVVUkwgPSAodW5Ob3JtYWxpemVkVXJsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTCh1bk5vcm1hbGl6ZWRVcmwsIGxvY2F0aW9uLmhyZWYpO1xuICB1cmwuaGFzaCA9ICcnO1xuXG4gIHJldHVybiB1cmwuaHJlZjtcbn07XG5cbmludGVyZmFjZSBDYWNoZVRpbWVzdGFtcHNNb2RlbEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgY2FjaGVOYW1lOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENhY2hlRGJTY2hlbWEgZXh0ZW5kcyBEQlNjaGVtYSB7XG4gICdjYWNoZS1lbnRyaWVzJzoge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHZhbHVlOiBDYWNoZVRpbWVzdGFtcHNNb2RlbEVudHJ5O1xuICAgIGluZGV4ZXM6IHtjYWNoZU5hbWU6IHN0cmluZzsgdGltZXN0YW1wOiBudW1iZXJ9O1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRpbWVzdGFtcCBtb2RlbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NhY2hlTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9kYjogSURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWVcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhY2hlTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGFuIHVwZ3JhZGUgb2YgaW5kZXhlZERCLlxuICAgKlxuICAgKiBAcGFyYW0ge0lEQlBEYXRhYmFzZTxDYWNoZURiU2NoZW1hPn0gZGJcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX3VwZ3JhZGVEYihkYjogSURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+KSB7XG4gICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBFZGdlSFRNTCBkb2Vzbid0IHN1cHBvcnQgYXJyYXlzIGFzIGEga2V5UGF0aCwgc28gd2VcbiAgICAvLyBoYXZlIHRvIHVzZSB0aGUgYGlkYCBrZXlQYXRoIGhlcmUgYW5kIGNyZWF0ZSBvdXIgb3duIHZhbHVlcyAoYVxuICAgIC8vIGNvbmNhdGVuYXRpb24gb2YgYHVybCArIGNhY2hlTmFtZWApIGluc3RlYWQgb2Ygc2ltcGx5IHVzaW5nXG4gICAgLy8gYGtleVBhdGg6IFsndXJsJywgJ2NhY2hlTmFtZSddYCwgd2hpY2ggaXMgc3VwcG9ydGVkIGluIG90aGVyIGJyb3dzZXJzLlxuICAgIGNvbnN0IG9ialN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoQ0FDSEVfT0JKRUNUX1NUT1JFLCB7a2V5UGF0aDogJ2lkJ30pO1xuXG4gICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHdlIGRvbid0IGhhdmUgdG8gc3VwcG9ydCBFZGdlSFRNTCwgd2UgY2FuXG4gICAgLy8gY3JlYXRlIGEgc2luZ2xlIGluZGV4IHdpdGggdGhlIGtleVBhdGggYFsnY2FjaGVOYW1lJywgJ3RpbWVzdGFtcCddYFxuICAgIC8vIGluc3RlYWQgb2YgZG9pbmcgYm90aCB0aGVzZSBpbmRleGVzLlxuICAgIG9ialN0b3JlLmNyZWF0ZUluZGV4KCdjYWNoZU5hbWUnLCAnY2FjaGVOYW1lJywge3VuaXF1ZTogZmFsc2V9KTtcbiAgICBvYmpTdG9yZS5jcmVhdGVJbmRleCgndGltZXN0YW1wJywgJ3RpbWVzdGFtcCcsIHt1bmlxdWU6IGZhbHNlfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYW4gdXBncmFkZSBvZiBpbmRleGVkREIgYW5kIGRlbGV0ZXMgZGVwcmVjYXRlZCBEQnMuXG4gICAqXG4gICAqIEBwYXJhbSB7SURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+fSBkYlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfdXBncmFkZURiQW5kRGVsZXRlT2xkRGJzKGRiOiBJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT4pIHtcbiAgICB0aGlzLl91cGdyYWRlRGIoZGIpO1xuICAgIGlmICh0aGlzLl9jYWNoZU5hbWUpIHtcbiAgICAgIHZvaWQgZGVsZXRlREIodGhpcy5fY2FjaGVOYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBzZXRUaW1lc3RhbXAodXJsOiBzdHJpbmcsIHRpbWVzdGFtcDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdXJsID0gbm9ybWFsaXplVVJMKHVybCk7XG5cbiAgICBjb25zdCBlbnRyeTogQ2FjaGVUaW1lc3RhbXBzTW9kZWxFbnRyeSA9IHtcbiAgICAgIHVybCxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgLy8gQ3JlYXRpbmcgYW4gSUQgZnJvbSB0aGUgVVJMIGFuZCBjYWNoZSBuYW1lIHdvbid0IGJlIG5lY2Vzc2FyeSBvbmNlXG4gICAgICAvLyBFZGdlIHN3aXRjaGVzIHRvIENocm9taXVtIGFuZCBhbGwgYnJvd3NlcnMgd2Ugc3VwcG9ydCB3b3JrIHdpdGhcbiAgICAgIC8vIGFycmF5IGtleVBhdGhzLlxuICAgICAgaWQ6IHRoaXMuX2dldElkKHVybCksXG4gICAgfTtcbiAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKENBQ0hFX09CSkVDVF9TVE9SRSwgJ3JlYWR3cml0ZScsIHtcbiAgICAgIGR1cmFiaWxpdHk6ICdyZWxheGVkJyxcbiAgICB9KTtcbiAgICBhd2FpdCB0eC5zdG9yZS5wdXQoZW50cnkpO1xuICAgIGF3YWl0IHR4LmRvbmU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGltZXN0YW1wIHN0b3JlZCBmb3IgYSBnaXZlbiBVUkwuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHJldHVybiB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgZ2V0VGltZXN0YW1wKHVybDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXIgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IGRiLmdldChDQUNIRV9PQkpFQ1RfU1RPUkUsIHRoaXMuX2dldElkKHVybCkpO1xuICAgIHJldHVybiBlbnRyeT8udGltZXN0YW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIHRoZSBlbnRyaWVzIGluIHRoZSBvYmplY3Qgc3RvcmUgKGZyb20gbmV3ZXN0IHRvXG4gICAqIG9sZGVzdCkgYW5kIHJlbW92ZXMgZW50cmllcyBvbmNlIGVpdGhlciBgbWF4Q291bnRgIGlzIHJlYWNoZWQgb3IgdGhlXG4gICAqIGVudHJ5J3MgdGltZXN0YW1wIGlzIGxlc3MgdGhhbiBgbWluVGltZXN0YW1wYC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pblRpbWVzdGFtcFxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4Q291bnRcbiAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIGV4cGlyZUVudHJpZXMoXG4gICAgbWluVGltZXN0YW1wOiBudW1iZXIsXG4gICAgbWF4Q291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICBsZXQgY3Vyc29yID0gYXdhaXQgZGJcbiAgICAgIC50cmFuc2FjdGlvbihDQUNIRV9PQkpFQ1RfU1RPUkUpXG4gICAgICAuc3RvcmUuaW5kZXgoJ3RpbWVzdGFtcCcpXG4gICAgICAub3BlbkN1cnNvcihudWxsLCAncHJldicpO1xuICAgIGNvbnN0IGVudHJpZXNUb0RlbGV0ZTogQ2FjaGVUaW1lc3RhbXBzTW9kZWxFbnRyeVtdID0gW107XG4gICAgbGV0IGVudHJpZXNOb3REZWxldGVkQ291bnQgPSAwO1xuICAgIHdoaWxlIChjdXJzb3IpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGN1cnNvci52YWx1ZTtcbiAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogb25jZSB3ZSBjYW4gdXNlIGEgbXVsdGkta2V5IGluZGV4LCB3ZVxuICAgICAgLy8gd29uJ3QgaGF2ZSB0byBjaGVjayBgY2FjaGVOYW1lYCBoZXJlLlxuICAgICAgaWYgKHJlc3VsdC5jYWNoZU5hbWUgPT09IHRoaXMuX2NhY2hlTmFtZSkge1xuICAgICAgICAvLyBEZWxldGUgYW4gZW50cnkgaWYgaXQncyBvbGRlciB0aGFuIHRoZSBtYXggYWdlIG9yXG4gICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSB0aGUgbWF4IG51bWJlciBhbGxvd2VkLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgKG1pblRpbWVzdGFtcCAmJiByZXN1bHQudGltZXN0YW1wIDwgbWluVGltZXN0YW1wKSB8fFxuICAgICAgICAgIChtYXhDb3VudCAmJiBlbnRyaWVzTm90RGVsZXRlZENvdW50ID49IG1heENvdW50KVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IHdlIHNob3VsZCBiZSBhYmxlIHRvIGRlbGV0ZSB0aGVcbiAgICAgICAgICAvLyBlbnRyeSByaWdodCBoZXJlLCBidXQgZG9pbmcgc28gY2F1c2VzIGFuIGl0ZXJhdGlvblxuICAgICAgICAgIC8vIGJ1ZyBpbiBTYWZhcmkgc3RhYmxlIChmaXhlZCBpbiBUUCkuIEluc3RlYWQgd2UgY2FuXG4gICAgICAgICAgLy8gc3RvcmUgdGhlIGtleXMgb2YgdGhlIGVudHJpZXMgdG8gZGVsZXRlLCBhbmQgdGhlblxuICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgc2VwYXJhdGUgdHJhbnNhY3Rpb25zLlxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgICAgICAgIC8vIGN1cnNvci5kZWxldGUoKTtcblxuICAgICAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byByZXR1cm4gdGhlIFVSTCwgbm90IHRoZSB3aG9sZSBlbnRyeS5cbiAgICAgICAgICBlbnRyaWVzVG9EZWxldGUucHVzaChjdXJzb3IudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVudHJpZXNOb3REZWxldGVkQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHRoZSBTYWZhcmkgYnVnIGluIHRoZSBmb2xsb3dpbmcgaXNzdWUgaXMgZml4ZWQsXG4gICAgLy8gd2Ugc2hvdWxkIGJlIGFibGUgdG8gcmVtb3ZlIHRoaXMgbG9vcCBhbmQgZG8gdGhlIGVudHJ5IGRlbGV0aW9uIGluIHRoZVxuICAgIC8vIGN1cnNvciBsb29wIGFib3ZlOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgIGNvbnN0IHVybHNEZWxldGVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllc1RvRGVsZXRlKSB7XG4gICAgICBhd2FpdCBkYi5kZWxldGUoQ0FDSEVfT0JKRUNUX1NUT1JFLCBlbnRyeS5pZCk7XG4gICAgICB1cmxzRGVsZXRlZC5wdXNoKGVudHJ5LnVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybHNEZWxldGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgVVJMIGFuZCByZXR1cm5zIGFuIElEIHRoYXQgd2lsbCBiZSB1bmlxdWUgaW4gdGhlIG9iamVjdCBzdG9yZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF9nZXRJZCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gQ3JlYXRpbmcgYW4gSUQgZnJvbSB0aGUgVVJMIGFuZCBjYWNoZSBuYW1lIHdvbid0IGJlIG5lY2Vzc2FyeSBvbmNlXG4gICAgLy8gRWRnZSBzd2l0Y2hlcyB0byBDaHJvbWl1bSBhbmQgYWxsIGJyb3dzZXJzIHdlIHN1cHBvcnQgd29yayB3aXRoXG4gICAgLy8gYXJyYXkga2V5UGF0aHMuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlTmFtZSArICd8JyArIG5vcm1hbGl6ZVVSTCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb3BlbiBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0RGIoKSB7XG4gICAgaWYgKCF0aGlzLl9kYikge1xuICAgICAgdGhpcy5fZGIgPSBhd2FpdCBvcGVuREIoREJfTkFNRSwgMSwge1xuICAgICAgICB1cGdyYWRlOiB0aGlzLl91cGdyYWRlRGJBbmREZWxldGVPbGREYnMuYmluZCh0aGlzKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGI7XG4gIH1cbn1cblxuZXhwb3J0IHtDYWNoZVRpbWVzdGFtcHNNb2RlbH07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2RvbnRXYWl0Rm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZG9udFdhaXRGb3IuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQge0NhY2hlVGltZXN0YW1wc01vZGVsfSBmcm9tICcuL21vZGVscy9DYWNoZVRpbWVzdGFtcHNNb2RlbC5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmludGVyZmFjZSBDYWNoZUV4cGlyYXRpb25Db25maWcge1xuICBtYXhFbnRyaWVzPzogbnVtYmVyO1xuICBtYXhBZ2VTZWNvbmRzPzogbnVtYmVyO1xuICBtYXRjaE9wdGlvbnM/OiBDYWNoZVF1ZXJ5T3B0aW9ucztcbn1cblxuLyoqXG4gKiBUaGUgYENhY2hlRXhwaXJhdGlvbmAgY2xhc3MgYWxsb3dzIHlvdSBkZWZpbmUgYW4gZXhwaXJhdGlvbiBhbmQgLyBvclxuICogbGltaXQgb24gdGhlIG51bWJlciBvZiByZXNwb25zZXMgc3RvcmVkIGluIGFcbiAqIFtgQ2FjaGVgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUpLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWV4cGlyYXRpb25cbiAqL1xuY2xhc3MgQ2FjaGVFeHBpcmF0aW9uIHtcbiAgcHJpdmF0ZSBfaXNSdW5uaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21heEVudHJpZXM/OiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21heEFnZVNlY29uZHM/OiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21hdGNoT3B0aW9ucz86IENhY2hlUXVlcnlPcHRpb25zO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jYWNoZU5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfdGltZXN0YW1wTW9kZWw6IENhY2hlVGltZXN0YW1wc01vZGVsO1xuXG4gIC8qKlxuICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVFeHBpcmF0aW9uIGluc3RhbmNlIHlvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3RcbiAgICogb25lIG9mIHRoZSBgY29uZmlnYCBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRvIGFwcGx5IHJlc3RyaWN0aW9ucyB0by5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhFbnRyaWVzXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZW50cmllcyB0byBjYWNoZS5cbiAgICogRW50cmllcyB1c2VkIHRoZSBsZWFzdCB3aWxsIGJlIHJlbW92ZWQgYXMgdGhlIG1heGltdW0gaXMgcmVhY2hlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4QWdlU2Vjb25kc10gVGhlIG1heGltdW0gYWdlIG9mIGFuIGVudHJ5IGJlZm9yZVxuICAgKiBpdCdzIHRyZWF0ZWQgYXMgc3RhbGUgYW5kIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnLm1hdGNoT3B0aW9uc10gVGhlIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUvZGVsZXRlI1BhcmFtZXRlcnMpXG4gICAqIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gY2FsbGluZyBgZGVsZXRlKClgIG9uIHRoZSBjYWNoZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhY2hlTmFtZTogc3RyaW5nLCBjb25maWc6IENhY2hlRXhwaXJhdGlvbkNvbmZpZyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNUeXBlKGNhY2hlTmFtZSwgJ3N0cmluZycsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdjYWNoZU5hbWUnLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghKGNvbmZpZy5tYXhFbnRyaWVzIHx8IGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQnLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4RW50cmllcykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZShjb25maWcubWF4RW50cmllcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhFbnRyaWVzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4QWdlU2Vjb25kcykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZShjb25maWcubWF4QWdlU2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbWF4RW50cmllcyA9IGNvbmZpZy5tYXhFbnRyaWVzO1xuICAgIHRoaXMuX21heEFnZVNlY29uZHMgPSBjb25maWcubWF4QWdlU2Vjb25kcztcbiAgICB0aGlzLl9tYXRjaE9wdGlvbnMgPSBjb25maWcubWF0Y2hPcHRpb25zO1xuICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZTtcbiAgICB0aGlzLl90aW1lc3RhbXBNb2RlbCA9IG5ldyBDYWNoZVRpbWVzdGFtcHNNb2RlbChjYWNoZU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cGlyZXMgZW50cmllcyBmb3IgdGhlIGdpdmVuIGNhY2hlIGFuZCBnaXZlbiBjcml0ZXJpYS5cbiAgICovXG4gIGFzeW5jIGV4cGlyZUVudHJpZXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuX2lzUnVubmluZykge1xuICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pc1J1bm5pbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgbWluVGltZXN0YW1wID0gdGhpcy5fbWF4QWdlU2Vjb25kc1xuICAgICAgPyBEYXRlLm5vdygpIC0gdGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDBcbiAgICAgIDogMDtcblxuICAgIGNvbnN0IHVybHNFeHBpcmVkID0gYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZXhwaXJlRW50cmllcyhcbiAgICAgIG1pblRpbWVzdGFtcCxcbiAgICAgIHRoaXMuX21heEVudHJpZXMsXG4gICAgKTtcblxuICAgIC8vIERlbGV0ZSBVUkxzIGZyb20gdGhlIGNhY2hlXG4gICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKHRoaXMuX2NhY2hlTmFtZSk7XG4gICAgZm9yIChjb25zdCB1cmwgb2YgdXJsc0V4cGlyZWQpIHtcbiAgICAgIGF3YWl0IGNhY2hlLmRlbGV0ZSh1cmwsIHRoaXMuX21hdGNoT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh1cmxzRXhwaXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICBgRXhwaXJlZCAke3VybHNFeHBpcmVkLmxlbmd0aH0gYCArXG4gICAgICAgICAgICBgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgPyAnZW50cnknIDogJ2VudHJpZXMnfSBhbmQgcmVtb3ZlZCBgICtcbiAgICAgICAgICAgIGAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/ICdpdCcgOiAndGhlbSd9IGZyb20gdGhlIGAgK1xuICAgICAgICAgICAgYCcke3RoaXMuX2NhY2hlTmFtZX0nIGNhY2hlLmAsXG4gICAgICAgICk7XG4gICAgICAgIGxvZ2dlci5sb2coXG4gICAgICAgICAgYEV4cGlyZWQgdGhlIGZvbGxvd2luZyAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/ICdVUkwnIDogJ1VSTHMnfTpgLFxuICAgICAgICApO1xuICAgICAgICB1cmxzRXhwaXJlZC5mb3JFYWNoKCh1cmwpID0+IGxvZ2dlci5sb2coYCAgICAke3VybH1gKSk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBDYWNoZSBleHBpcmF0aW9uIHJhbiBhbmQgZm91bmQgbm8gZW50cmllcyB0byByZW1vdmUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX3JlcnVuUmVxdWVzdGVkKSB7XG4gICAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IGZhbHNlO1xuICAgICAgZG9udFdhaXRGb3IodGhpcy5leHBpcmVFbnRyaWVzKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHRpbWVzdGFtcCBmb3IgdGhlIGdpdmVuIFVSTC4gVGhpcyBlbnN1cmVzIHRoZSB3aGVuXG4gICAqIHJlbW92aW5nIGVudHJpZXMgYmFzZWQgb24gbWF4aW11bSBlbnRyaWVzLCBtb3N0IHJlY2VudGx5IHVzZWRcbiAgICogaXMgYWNjdXJhdGUgb3Igd2hlbiBleHBpcmluZywgdGhlIHRpbWVzdGFtcCBpcyB1cC10by1kYXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBhc3luYyB1cGRhdGVUaW1lc3RhbXAodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUodXJsLCAnc3RyaW5nJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgZnVuY05hbWU6ICd1cGRhdGVUaW1lc3RhbXAnLFxuICAgICAgICBwYXJhbU5hbWU6ICd1cmwnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuc2V0VGltZXN0YW1wKHVybCwgRGF0ZS5ub3coKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gY2hlY2sgaWYgYSBVUkwgaGFzIGV4cGlyZWQgb3Igbm90IGJlZm9yZSBpdCdzIHVzZWQuXG4gICAqXG4gICAqIFRoaXMgcmVxdWlyZXMgYSBsb29rIHVwIGZyb20gSW5kZXhlZERCLCBzbyBjYW4gYmUgc2xvdy5cbiAgICpcbiAgICogTm90ZTogVGhpcyBtZXRob2Qgd2lsbCBub3QgcmVtb3ZlIHRoZSBjYWNoZWQgZW50cnksIGNhbGxcbiAgICogYGV4cGlyZUVudHJpZXMoKWAgdG8gcmVtb3ZlIGluZGV4ZWREQiBhbmQgQ2FjaGUgZW50cmllcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgYXN5bmMgaXNVUkxFeHBpcmVkKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCF0aGlzLl9tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKGBleHBpcmVkLXRlc3Qtd2l0aG91dC1tYXgtYWdlYCwge1xuICAgICAgICAgIG1ldGhvZE5hbWU6ICdpc1VSTEV4cGlyZWQnLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ21heEFnZVNlY29uZHMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZ2V0VGltZXN0YW1wKHVybCk7XG4gICAgICBjb25zdCBleHBpcmVPbGRlclRoYW4gPSBEYXRlLm5vdygpIC0gdGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDA7XG4gICAgICByZXR1cm4gdGltZXN0YW1wICE9PSB1bmRlZmluZWQgPyB0aW1lc3RhbXAgPCBleHBpcmVPbGRlclRoYW4gOiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBJbmRleGVkREIgb2JqZWN0IHN0b3JlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBjYWNoZSBleHBpcmF0aW9uXG4gICAqIG1ldGFkYXRhLlxuICAgKi9cbiAgYXN5bmMgZGVsZXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBhdHRlbXB0IGFub3RoZXIgcmVydW4gaWYgd2UncmUgY2FsbGVkIGluIHRoZSBtaWRkbGUgb2ZcbiAgICAvLyBhIGNhY2hlIGV4cGlyYXRpb24uXG4gICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5leHBpcmVFbnRyaWVzKEluZmluaXR5KTsgLy8gRXhwaXJlcyBhbGwuXG4gIH1cbn1cblxuZXhwb3J0IHtDYWNoZUV4cGlyYXRpb259O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmRlY2xhcmUgbGV0IHJlZ2lzdHJhdGlvbjogU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGludGVyZmFjZSBDYWNoZU5hbWVEZXRhaWxzIHtcbiAgZ29vZ2xlQW5hbHl0aWNzOiBzdHJpbmc7XG4gIHByZWNhY2hlOiBzdHJpbmc7XG4gIHByZWZpeDogc3RyaW5nO1xuICBydW50aW1lOiBzdHJpbmc7XG4gIHN1ZmZpeDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnRpYWxDYWNoZU5hbWVEZXRhaWxzIHtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIENhY2hlTmFtZURldGFpbHNQcm9wID1cbiAgfCAnZ29vZ2xlQW5hbHl0aWNzJ1xuICB8ICdwcmVjYWNoZSdcbiAgfCAncHJlZml4J1xuICB8ICdydW50aW1lJ1xuICB8ICdzdWZmaXgnO1xuXG5jb25zdCBfY2FjaGVOYW1lRGV0YWlsczogQ2FjaGVOYW1lRGV0YWlscyA9IHtcbiAgZ29vZ2xlQW5hbHl0aWNzOiAnZ29vZ2xlQW5hbHl0aWNzJyxcbiAgcHJlY2FjaGU6ICdwcmVjYWNoZS12MicsXG4gIHByZWZpeDogJ3dvcmtib3gnLFxuICBydW50aW1lOiAncnVudGltZScsXG4gIHN1ZmZpeDogdHlwZW9mIHJlZ2lzdHJhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyByZWdpc3RyYXRpb24uc2NvcGUgOiAnJyxcbn07XG5cbmNvbnN0IF9jcmVhdGVDYWNoZU5hbWUgPSAoY2FjaGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gW19jYWNoZU5hbWVEZXRhaWxzLnByZWZpeCwgY2FjaGVOYW1lLCBfY2FjaGVOYW1lRGV0YWlscy5zdWZmaXhdXG4gICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApXG4gICAgLmpvaW4oJy0nKTtcbn07XG5cbmNvbnN0IGVhY2hDYWNoZU5hbWVEZXRhaWwgPSAoZm46IChrZXk6IENhY2hlTmFtZURldGFpbHNQcm9wKSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKF9jYWNoZU5hbWVEZXRhaWxzKSkge1xuICAgIGZuKGtleSBhcyBDYWNoZU5hbWVEZXRhaWxzUHJvcCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjYWNoZU5hbWVzID0ge1xuICB1cGRhdGVEZXRhaWxzOiAoZGV0YWlsczogUGFydGlhbENhY2hlTmFtZURldGFpbHMpOiB2b2lkID0+IHtcbiAgICBlYWNoQ2FjaGVOYW1lRGV0YWlsKChrZXk6IENhY2hlTmFtZURldGFpbHNQcm9wKTogdm9pZCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGRldGFpbHNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgX2NhY2hlTmFtZURldGFpbHNba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0R29vZ2xlQW5hbHl0aWNzTmFtZTogKHVzZXJDYWNoZU5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMuZ29vZ2xlQW5hbHl0aWNzKTtcbiAgfSxcbiAgZ2V0UHJlY2FjaGVOYW1lOiAodXNlckNhY2hlTmFtZT86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5wcmVjYWNoZSk7XG4gIH0sXG4gIGdldFByZWZpeDogKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIF9jYWNoZU5hbWVEZXRhaWxzLnByZWZpeDtcbiAgfSxcbiAgZ2V0UnVudGltZU5hbWU6ICh1c2VyQ2FjaGVOYW1lPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLnJ1bnRpbWUpO1xuICB9LFxuICBnZXRTdWZmaXg6ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBfY2FjaGVOYW1lRGV0YWlscy5zdWZmaXg7XG4gIH0sXG59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8vIENhbGxiYWNrcyB0byBiZSBleGVjdXRlZCB3aGVuZXZlciB0aGVyZSdzIGEgcXVvdGEgZXJyb3IuXG4vLyBDYW4ndCBjaGFuZ2UgRnVuY3Rpb24gdHlwZSByaWdodCBub3cuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuY29uc3QgcXVvdGFFcnJvckNhbGxiYWNrczogU2V0PEZ1bmN0aW9uPiA9IG5ldyBTZXQoKTtcblxuZXhwb3J0IHtxdW90YUVycm9yQ2FsbGJhY2tzfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bG9nZ2VyfSBmcm9tICcuL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnLi9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtxdW90YUVycm9yQ2FsbGJhY2tzfSBmcm9tICcuL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQWRkcyBhIGZ1bmN0aW9uIHRvIHRoZSBzZXQgb2YgcXVvdGFFcnJvckNhbGxiYWNrcyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaWZcbiAqIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQG1lbWJlcm9mIHdvcmtib3gtY29yZVxuICovXG4vLyBDYW4ndCBjaGFuZ2UgRnVuY3Rpb24gdHlwZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydCEuaXNUeXBlKGNhbGxiYWNrLCAnZnVuY3Rpb24nLCB7XG4gICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jb3JlJyxcbiAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXInLFxuICAgICAgcGFyYW1OYW1lOiAnY2FsbGJhY2snLFxuICAgIH0pO1xuICB9XG5cbiAgcXVvdGFFcnJvckNhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VyLmxvZygnUmVnaXN0ZXJlZCBhIGNhbGxiYWNrIHRvIHJlc3BvbmQgdG8gcXVvdGEgZXJyb3JzLicsIGNhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQge3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7Y2FjaGVOYW1lc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHtkb250V2FpdEZvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2RvbnRXYWl0Rm9yLmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrfSBmcm9tICd3b3JrYm94LWNvcmUvcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2suanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHtXb3JrYm94UGx1Z2lufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQge0NhY2hlRXhwaXJhdGlvbn0gZnJvbSAnLi9DYWNoZUV4cGlyYXRpb24uanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4cGlyYXRpb25QbHVnaW5PcHRpb25zIHtcbiAgbWF4RW50cmllcz86IG51bWJlcjtcbiAgbWF4QWdlU2Vjb25kcz86IG51bWJlcjtcbiAgbWF0Y2hPcHRpb25zPzogQ2FjaGVRdWVyeU9wdGlvbnM7XG4gIHB1cmdlT25RdW90YUVycm9yPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGlzIHBsdWdpbiBjYW4gYmUgdXNlZCBpbiBhIGB3b3JrYm94LXN0cmF0ZWd5YCB0byByZWd1bGFybHkgZW5mb3JjZSBhXG4gKiBsaW1pdCBvbiB0aGUgYWdlIGFuZCAvIG9yIHRoZSBudW1iZXIgb2YgY2FjaGVkIHJlcXVlc3RzLlxuICpcbiAqIEl0IGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBgd29ya2JveC1zdHJhdGVneWAgaW5zdGFuY2VzIHRoYXQgaGF2ZSBhXG4gKiBbY3VzdG9tIGBjYWNoZU5hbWVgIHByb3BlcnR5IHNldF0oL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9jb25maWd1cmUtd29ya2JveCNjdXN0b21fY2FjaGVfbmFtZXNfaW5fc3RyYXRlZ2llcykuXG4gKiBJbiBvdGhlciB3b3JkcywgaXQgY2FuJ3QgYmUgdXNlZCB0byBleHBpcmUgZW50cmllcyBpbiBzdHJhdGVneSB0aGF0IHVzZXMgdGhlXG4gKiBkZWZhdWx0IHJ1bnRpbWUgY2FjaGUgbmFtZS5cbiAqXG4gKiBXaGVuZXZlciBhIGNhY2hlZCByZXNwb25zZSBpcyB1c2VkIG9yIHVwZGF0ZWQsIHRoaXMgcGx1Z2luIHdpbGwgbG9va1xuICogYXQgdGhlIGFzc29jaWF0ZWQgY2FjaGUgYW5kIHJlbW92ZSBhbnkgb2xkIG9yIGV4dHJhIHJlc3BvbnNlcy5cbiAqXG4gKiBXaGVuIHVzaW5nIGBtYXhBZ2VTZWNvbmRzYCwgcmVzcG9uc2VzIG1heSBiZSB1c2VkICpvbmNlKiBhZnRlciBleHBpcmluZ1xuICogYmVjYXVzZSB0aGUgZXhwaXJhdGlvbiBjbGVhbiB1cCB3aWxsIG5vdCBoYXZlIG9jY3VycmVkIHVudGlsICphZnRlciogdGhlXG4gKiBjYWNoZWQgcmVzcG9uc2UgaGFzIGJlZW4gdXNlZC4gSWYgdGhlIHJlc3BvbnNlIGhhcyBhIFwiRGF0ZVwiIGhlYWRlciwgdGhlblxuICogYSBsaWdodCB3ZWlnaHQgZXhwaXJhdGlvbiBjaGVjayBpcyBwZXJmb3JtZWQgYW5kIHRoZSByZXNwb25zZSB3aWxsIG5vdCBiZVxuICogdXNlZCBpbW1lZGlhdGVseS5cbiAqXG4gKiBXaGVuIHVzaW5nIGBtYXhFbnRyaWVzYCwgdGhlIGVudHJ5IGxlYXN0LXJlY2VudGx5IHJlcXVlc3RlZCB3aWxsIGJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGNhY2hlIGZpcnN0LlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWV4cGlyYXRpb25cbiAqL1xuY2xhc3MgRXhwaXJhdGlvblBsdWdpbiBpbXBsZW1lbnRzIFdvcmtib3hQbHVnaW4ge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWc6IEV4cGlyYXRpb25QbHVnaW5PcHRpb25zO1xuICBwcml2YXRlIHJlYWRvbmx5IF9tYXhBZ2VTZWNvbmRzPzogbnVtYmVyO1xuICBwcml2YXRlIF9jYWNoZUV4cGlyYXRpb25zOiBNYXA8c3RyaW5nLCBDYWNoZUV4cGlyYXRpb24+O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V4cGlyYXRpb25QbHVnaW5PcHRpb25zfSBjb25maWdcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4RW50cmllc10gVGhlIG1heGltdW0gbnVtYmVyIG9mIGVudHJpZXMgdG8gY2FjaGUuXG4gICAqIEVudHJpZXMgdXNlZCB0aGUgbGVhc3Qgd2lsbCBiZSByZW1vdmVkIGFzIHRoZSBtYXhpbXVtIGlzIHJlYWNoZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEFnZVNlY29uZHNdIFRoZSBtYXhpbXVtIGFnZSBvZiBhbiBlbnRyeSBiZWZvcmVcbiAgICogaXQncyB0cmVhdGVkIGFzIHN0YWxlIGFuZCByZW1vdmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZy5tYXRjaE9wdGlvbnNdIFRoZSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlL2RlbGV0ZSNQYXJhbWV0ZXJzKVxuICAgKiB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYGRlbGV0ZSgpYCBvbiB0aGUgY2FjaGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbmZpZy5wdXJnZU9uUXVvdGFFcnJvcl0gV2hldGhlciB0byBvcHQgdGhpcyBjYWNoZSBpbiB0b1xuICAgKiBhdXRvbWF0aWMgZGVsZXRpb24gaWYgdGhlIGF2YWlsYWJsZSBzdG9yYWdlIHF1b3RhIGhhcyBiZWVuIGV4Y2VlZGVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBFeHBpcmF0aW9uUGx1Z2luT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGNvbmZpZy5tYXhFbnRyaWVzIHx8IGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQnLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4RW50cmllcykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZShjb25maWcubWF4RW50cmllcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhFbnRyaWVzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4QWdlU2Vjb25kcykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZShjb25maWcubWF4QWdlU2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX21heEFnZVNlY29uZHMgPSBjb25maWcubWF4QWdlU2Vjb25kcztcbiAgICB0aGlzLl9jYWNoZUV4cGlyYXRpb25zID0gbmV3IE1hcCgpO1xuXG4gICAgaWYgKGNvbmZpZy5wdXJnZU9uUXVvdGFFcnJvcikge1xuICAgICAgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2soKCkgPT4gdGhpcy5kZWxldGVDYWNoZUFuZE1ldGFkYXRhKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNpbXBsZSBoZWxwZXIgbWV0aG9kIHRvIHJldHVybiBhIENhY2hlRXhwaXJhdGlvbiBpbnN0YW5jZSBmb3IgYSBnaXZlblxuICAgKiBjYWNoZSBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lXG4gICAqIEByZXR1cm4ge0NhY2hlRXhwaXJhdGlvbn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2dldENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWU6IHN0cmluZyk6IENhY2hlRXhwaXJhdGlvbiB7XG4gICAgaWYgKGNhY2hlTmFtZSA9PT0gY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdleHBpcmUtY3VzdG9tLWNhY2hlcy1vbmx5Jyk7XG4gICAgfVxuXG4gICAgbGV0IGNhY2hlRXhwaXJhdGlvbiA9IHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMuZ2V0KGNhY2hlTmFtZSk7XG4gICAgaWYgKCFjYWNoZUV4cGlyYXRpb24pIHtcbiAgICAgIGNhY2hlRXhwaXJhdGlvbiA9IG5ldyBDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lLCB0aGlzLl9jb25maWcpO1xuICAgICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucy5zZXQoY2FjaGVOYW1lLCBjYWNoZUV4cGlyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVFeHBpcmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgXCJsaWZlY3ljbGVcIiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlXG4gICAqIGB3b3JrYm94LXN0cmF0ZWdpZXNgIGhhbmRsZXJzIHdoZW4gYSBgUmVzcG9uc2VgIGlzIGFib3V0IHRvIGJlIHJldHVybmVkXG4gICAqIGZyb20gYSBbQ2FjaGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZSkgdG9cbiAgICogdGhlIGhhbmRsZXIuIEl0IGFsbG93cyB0aGUgYFJlc3BvbnNlYCB0byBiZSBpbnNwZWN0ZWQgZm9yIGZyZXNobmVzcyBhbmRcbiAgICogcHJldmVudHMgaXQgZnJvbSBiZWluZyB1c2VkIGlmIHRoZSBgUmVzcG9uc2VgJ3MgYERhdGVgIGhlYWRlciB2YWx1ZSBpc1xuICAgKiBvbGRlciB0aGFuIHRoZSBjb25maWd1cmVkIGBtYXhBZ2VTZWNvbmRzYC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRoZSByZXNwb25zZSBpcyBpbi5cbiAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5jYWNoZWRSZXNwb25zZSBUaGUgYFJlc3BvbnNlYCBvYmplY3QgdGhhdCdzIGJlZW5cbiAgICogICAgIHJlYWQgZnJvbSBhIGNhY2hlIGFuZCB3aG9zZSBmcmVzaG5lc3Mgc2hvdWxkIGJlIGNoZWNrZWQuXG4gICAqIEByZXR1cm4ge1Jlc3BvbnNlfSBFaXRoZXIgdGhlIGBjYWNoZWRSZXNwb25zZWAsIGlmIGl0J3NcbiAgICogICAgIGZyZXNoLCBvciBgbnVsbGAgaWYgdGhlIGBSZXNwb25zZWAgaXMgb2xkZXIgdGhhbiBgbWF4QWdlU2Vjb25kc2AuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQ6IFdvcmtib3hQbHVnaW5bJ2NhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZCddID0gYXN5bmMgKHtcbiAgICBldmVudCxcbiAgICByZXF1ZXN0LFxuICAgIGNhY2hlTmFtZSxcbiAgICBjYWNoZWRSZXNwb25zZSxcbiAgfSkgPT4ge1xuICAgIGlmICghY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRnJlc2ggPSB0aGlzLl9pc1Jlc3BvbnNlRGF0ZUZyZXNoKGNhY2hlZFJlc3BvbnNlKTtcblxuICAgIC8vIEV4cGlyZSBlbnRyaWVzIHRvIGVuc3VyZSB0aGF0IGV2ZW4gaWYgdGhlIGV4cGlyYXRpb24gZGF0ZSBoYXNcbiAgICAvLyBleHBpcmVkLCBpdCdsbCBvbmx5IGJlIHVzZWQgb25jZS5cbiAgICBjb25zdCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKTtcbiAgICBkb250V2FpdEZvcihjYWNoZUV4cGlyYXRpb24uZXhwaXJlRW50cmllcygpKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgbWV0YWRhdGEgZm9yIHRoZSByZXF1ZXN0IFVSTCB0byB0aGUgY3VycmVudCB0aW1lc3RhbXAsXG4gICAgLy8gYnV0IGRvbid0IGBhd2FpdGAgaXQgYXMgd2UgZG9uJ3Qgd2FudCB0byBibG9jayB0aGUgcmVzcG9uc2UuXG4gICAgY29uc3QgdXBkYXRlVGltZXN0YW1wRG9uZSA9IGNhY2hlRXhwaXJhdGlvbi51cGRhdGVUaW1lc3RhbXAocmVxdWVzdC51cmwpO1xuICAgIGlmIChldmVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXZlbnQud2FpdFVudGlsKHVwZGF0ZVRpbWVzdGFtcERvbmUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyBUaGUgZXZlbnQgbWF5IG5vdCBiZSBhIGZldGNoIGV2ZW50OyBvbmx5IGxvZyB0aGUgVVJMIGlmIGl0IGlzLlxuICAgICAgICAgIGlmICgncmVxdWVzdCcgaW4gZXZlbnQpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgICAgICBgVW5hYmxlIHRvIGVuc3VyZSBzZXJ2aWNlIHdvcmtlciBzdGF5cyBhbGl2ZSB3aGVuIGAgK1xuICAgICAgICAgICAgICAgIGB1cGRhdGluZyBjYWNoZSBlbnRyeSBmb3IgYCArXG4gICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKChldmVudCBhcyBGZXRjaEV2ZW50KS5yZXF1ZXN0LnVybCl9Jy5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNGcmVzaCA/IGNhY2hlZFJlc3BvbnNlIDogbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gY2FjaGVkUmVzcG9uc2VcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2lzUmVzcG9uc2VEYXRlRnJlc2goY2FjaGVkUmVzcG9uc2U6IFJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAvLyBXZSBhcmVuJ3QgZXhwaXJpbmcgYnkgYWdlLCBzbyByZXR1cm4gdHJ1ZSwgaXQncyBmcmVzaFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlICdkYXRlJyBoZWFkZXIgd2lsbCBzdWZmaWNlIGEgcXVpY2sgZXhwaXJhdGlvbiBjaGVjay5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvc3ctdG9vbGJveC9pc3N1ZXMvMTY0IGZvclxuICAgIC8vIGRpc2N1c3Npb24uXG4gICAgY29uc3QgZGF0ZUhlYWRlclRpbWVzdGFtcCA9IHRoaXMuX2dldERhdGVIZWFkZXJUaW1lc3RhbXAoY2FjaGVkUmVzcG9uc2UpO1xuICAgIGlmIChkYXRlSGVhZGVyVGltZXN0YW1wID09PSBudWxsKSB7XG4gICAgICAvLyBVbmFibGUgdG8gcGFyc2UgZGF0ZSwgc28gYXNzdW1lIGl0J3MgZnJlc2guXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsaWQgaGVhZGVyVGltZSwgdGhlbiBvdXIgcmVzcG9uc2UgaXMgZnJlc2ggaWZmIHRoZVxuICAgIC8vIGhlYWRlclRpbWUgcGx1cyBtYXhBZ2VTZWNvbmRzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lLlxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIGRhdGVIZWFkZXJUaW1lc3RhbXAgPj0gbm93IC0gdGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDA7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBleHRyYWN0IHRoZSBkYXRhIGhlYWRlciBhbmQgcGFyc2UgaXQgaW50byBhIHVzZWZ1bFxuICAgKiB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gY2FjaGVkUmVzcG9uc2VcbiAgICogQHJldHVybiB7bnVtYmVyfG51bGx9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF9nZXREYXRlSGVhZGVyVGltZXN0YW1wKGNhY2hlZFJlc3BvbnNlOiBSZXNwb25zZSk6IG51bWJlciB8IG51bGwge1xuICAgIGlmICghY2FjaGVkUmVzcG9uc2UuaGVhZGVycy5oYXMoJ2RhdGUnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZUhlYWRlciA9IGNhY2hlZFJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdkYXRlJyk7XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGVIZWFkZXIhKTtcbiAgICBjb25zdCBoZWFkZXJUaW1lID0gcGFyc2VkRGF0ZS5nZXRUaW1lKCk7XG5cbiAgICAvLyBJZiB0aGUgRGF0ZSBoZWFkZXIgd2FzIGludmFsaWQgZm9yIHNvbWUgcmVhc29uLCBwYXJzZWREYXRlLmdldFRpbWUoKVxuICAgIC8vIHdpbGwgcmV0dXJuIE5hTi5cbiAgICBpZiAoaXNOYU4oaGVhZGVyVGltZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgXCJsaWZlY3ljbGVcIiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlXG4gICAqIGB3b3JrYm94LXN0cmF0ZWdpZXNgIGhhbmRsZXJzIHdoZW4gYW4gZW50cnkgaXMgYWRkZWQgdG8gYSBjYWNoZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRoYXQgd2FzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgVGhlIFJlcXVlc3QgZm9yIHRoZSBjYWNoZWQgZW50cnkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWNoZURpZFVwZGF0ZTogV29ya2JveFBsdWdpblsnY2FjaGVEaWRVcGRhdGUnXSA9IGFzeW5jICh7XG4gICAgY2FjaGVOYW1lLFxuICAgIHJlcXVlc3QsXG4gIH0pID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUoY2FjaGVOYW1lLCAnc3RyaW5nJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgZnVuY05hbWU6ICdjYWNoZURpZFVwZGF0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ2NhY2hlTmFtZScsXG4gICAgICB9KTtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICBmdW5jTmFtZTogJ2NhY2hlRGlkVXBkYXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKTtcbiAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24udXBkYXRlVGltZXN0YW1wKHJlcXVlc3QudXJsKTtcbiAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24uZXhwaXJlRW50cmllcygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgaGVscGVyIG1ldGhvZCB0aGF0IHBlcmZvcm1zIHR3byBvcGVyYXRpb25zOlxuICAgKlxuICAgKiAtIERlbGV0ZXMgKmFsbCogdGhlIHVuZGVybHlpbmcgQ2FjaGUgaW5zdGFuY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHBsdWdpblxuICAgKiBpbnN0YW5jZSwgYnkgY2FsbGluZyBjYWNoZXMuZGVsZXRlKCkgb24geW91ciBiZWhhbGYuXG4gICAqIC0gRGVsZXRlcyB0aGUgbWV0YWRhdGEgZnJvbSBJbmRleGVkREIgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGV4cGlyYXRpb25cbiAgICogZGV0YWlscyBmb3IgZWFjaCBDYWNoZSBpbnN0YW5jZS5cbiAgICpcbiAgICogV2hlbiB1c2luZyBjYWNoZSBleHBpcmF0aW9uLCBjYWxsaW5nIHRoaXMgbWV0aG9kIGlzIHByZWZlcmFibGUgdG8gY2FsbGluZ1xuICAgKiBgY2FjaGVzLmRlbGV0ZSgpYCBkaXJlY3RseSwgc2luY2UgdGhpcyB3aWxsIGVuc3VyZSB0aGF0IHRoZSBJbmRleGVkREJcbiAgICogbWV0YWRhdGEgaXMgYWxzbyBjbGVhbmx5IHJlbW92ZWQgYW5kIG9wZW4gSW5kZXhlZERCIGluc3RhbmNlcyBhcmUgZGVsZXRlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSdyZSAqbm90KiB1c2luZyBjYWNoZSBleHBpcmF0aW9uIGZvciBhIGdpdmVuIGNhY2hlLCBjYWxsaW5nXG4gICAqIGBjYWNoZXMuZGVsZXRlKClgIGFuZCBwYXNzaW5nIGluIHRoZSBjYWNoZSdzIG5hbWUgc2hvdWxkIGJlIHN1ZmZpY2llbnQuXG4gICAqIFRoZXJlIGlzIG5vIFdvcmtib3gtc3BlY2lmaWMgbWV0aG9kIG5lZWRlZCBmb3IgY2xlYW51cCBpbiB0aGF0IGNhc2UuXG4gICAqL1xuICBhc3luYyBkZWxldGVDYWNoZUFuZE1ldGFkYXRhKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIERvIHRoaXMgb25lIGF0IGEgdGltZSBpbnN0ZWFkIG9mIGFsbCBhdCBvbmNlIHZpYSBgUHJvbWlzZS5hbGwoKWAgdG9cbiAgICAvLyByZWR1Y2UgdGhlIGNoYW5jZSBvZiBpbmNvbnNpc3RlbmN5IGlmIGEgcHJvbWlzZSByZWplY3RzLlxuICAgIGZvciAoY29uc3QgW2NhY2hlTmFtZSwgY2FjaGVFeHBpcmF0aW9uXSBvZiB0aGlzLl9jYWNoZUV4cGlyYXRpb25zKSB7XG4gICAgICBhd2FpdCBzZWxmLmNhY2hlcy5kZWxldGUoY2FjaGVOYW1lKTtcbiAgICAgIGF3YWl0IGNhY2hlRXhwaXJhdGlvbi5kZWxldGUoKTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCB0aGlzLl9jYWNoZUV4cGlyYXRpb25zIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgPSBuZXcgTWFwKCk7XG4gIH1cbn1cblxuZXhwb3J0IHtFeHBpcmF0aW9uUGx1Z2lufTtcbiIsICIvLyBAdHMtaWdub3JlXG50cnl7c2VsZlsnd29ya2JveDpyb3V0aW5nOjcuMC4wJ10mJl8oKX1jYXRjaChlKXt9IiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCB0eXBlIEhUVFBNZXRob2QgPSAnREVMRVRFJyB8ICdHRVQnIHwgJ0hFQUQnIHwgJ1BBVENIJyB8ICdQT1NUJyB8ICdQVVQnO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IEhUVFAgbWV0aG9kLCAnR0VUJywgdXNlZCB3aGVuIHRoZXJlJ3Mgbm8gc3BlY2lmaWMgbWV0aG9kXG4gKiBjb25maWd1cmVkIGZvciBhIHJvdXRlLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZXRob2Q6IEhUVFBNZXRob2QgPSAnR0VUJztcblxuLyoqXG4gKiBUaGUgbGlzdCBvZiB2YWxpZCBIVFRQIG1ldGhvZHMgYXNzb2NpYXRlZCB3aXRoIHJlcXVlc3RzIHRoYXQgY291bGQgYmUgcm91dGVkLlxuICpcbiAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZE1ldGhvZHM6IEhUVFBNZXRob2RbXSA9IFtcbiAgJ0RFTEVURScsXG4gICdHRVQnLFxuICAnSEVBRCcsXG4gICdQQVRDSCcsXG4gICdQT1NUJyxcbiAgJ1BVVCcsXG5dO1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtSb3V0ZUhhbmRsZXIsIFJvdXRlSGFuZGxlck9iamVjdH0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbigpfE9iamVjdH0gaGFuZGxlciBFaXRoZXIgYSBmdW5jdGlvbiwgb3IgYW4gb2JqZWN0IHdpdGggYVxuICogJ2hhbmRsZScgbWV0aG9kLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBhIGhhbmRsZSBtZXRob2QuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhhbmRsZXIgPSAoaGFuZGxlcjogUm91dGVIYW5kbGVyKTogUm91dGVIYW5kbGVyT2JqZWN0ID0+IHtcbiAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaGFzTWV0aG9kKGhhbmRsZXIsICdoYW5kbGUnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdoYW5kbGVyJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUoaGFuZGxlciwgJ2Z1bmN0aW9uJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnaGFuZGxlcicsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtoYW5kbGU6IGhhbmRsZXJ9O1xuICB9XG59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtIVFRQTWV0aG9kLCBkZWZhdWx0TWV0aG9kLCB2YWxpZE1ldGhvZHN9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7bm9ybWFsaXplSGFuZGxlcn0gZnJvbSAnLi91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzJztcbmltcG9ydCB7XG4gIFJvdXRlSGFuZGxlcixcbiAgUm91dGVIYW5kbGVyT2JqZWN0LFxuICBSb3V0ZU1hdGNoQ2FsbGJhY2ssXG59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEEgYFJvdXRlYCBjb25zaXN0cyBvZiBhIHBhaXIgb2YgY2FsbGJhY2sgZnVuY3Rpb25zLCBcIm1hdGNoXCIgYW5kIFwiaGFuZGxlclwiLlxuICogVGhlIFwibWF0Y2hcIiBjYWxsYmFjayBkZXRlcm1pbmUgaWYgYSByb3V0ZSBzaG91bGQgYmUgdXNlZCB0byBcImhhbmRsZVwiIGFcbiAqIHJlcXVlc3QgYnkgcmV0dXJuaW5nIGEgbm9uLWZhbHN5IHZhbHVlIGlmIGl0IGNhbi4gVGhlIFwiaGFuZGxlclwiIGNhbGxiYWNrXG4gKiBpcyBjYWxsZWQgd2hlbiB0aGVyZSBpcyBhIG1hdGNoIGFuZCBzaG91bGQgcmV0dXJuIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzXG4gKiB0byBhIGBSZXNwb25zZWAuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5jbGFzcyBSb3V0ZSB7XG4gIGhhbmRsZXI6IFJvdXRlSGFuZGxlck9iamVjdDtcbiAgbWF0Y2g6IFJvdXRlTWF0Y2hDYWxsYmFjaztcbiAgbWV0aG9kOiBIVFRQTWV0aG9kO1xuICBjYXRjaEhhbmRsZXI/OiBSb3V0ZUhhbmRsZXJPYmplY3Q7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBSb3V0ZSBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gbWF0Y2hcbiAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgcm91dGUgbWF0Y2hlcyBhIGdpdmVuXG4gICAqIGBmZXRjaGAgZXZlbnQgYnkgcmV0dXJuaW5nIGEgbm9uLWZhbHN5IHZhbHVlLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc29sdmluZyB0byBhIFJlc3BvbnNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgKiBhZ2FpbnN0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgbWF0Y2g6IFJvdXRlTWF0Y2hDYWxsYmFjayxcbiAgICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXIsXG4gICAgbWV0aG9kOiBIVFRQTWV0aG9kID0gZGVmYXVsdE1ldGhvZCxcbiAgKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNUeXBlKG1hdGNoLCAnZnVuY3Rpb24nLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdtYXRjaCcsXG4gICAgICB9KTtcblxuICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBhc3NlcnQhLmlzT25lT2YobWV0aG9kLCB2YWxpZE1ldGhvZHMsIHtwYXJhbU5hbWU6ICdtZXRob2QnfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlc2UgdmFsdWVzIGFyZSByZWZlcmVuY2VkIGRpcmVjdGx5IGJ5IFJvdXRlciBzbyBjYW5ub3QgYmVcbiAgICAvLyBhbHRlcmVkIGJ5IG1pbmlmaWNhdG9uLlxuICAgIHRoaXMuaGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgdGhpcy5tYXRjaCA9IG1hdGNoO1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLWhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzb2x2aW5nIHRvIGEgUmVzcG9uc2VcbiAgICovXG4gIHNldENhdGNoSGFuZGxlcihoYW5kbGVyOiBSb3V0ZUhhbmRsZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNhdGNoSGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gIH1cbn1cblxuZXhwb3J0IHtSb3V0ZX07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1xuICBSb3V0ZUhhbmRsZXIsXG4gIFJvdXRlTWF0Y2hDYWxsYmFjayxcbiAgUm91dGVNYXRjaENhbGxiYWNrT3B0aW9ucyxcbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0IHtIVFRQTWV0aG9kfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge1JvdXRlfSBmcm9tICcuL1JvdXRlLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBSZWdFeHBSb3V0ZSBtYWtlcyBpdCBlYXN5IHRvIGNyZWF0ZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBiYXNlZFxuICoge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZX0uXG4gKlxuICogRm9yIHNhbWUtb3JpZ2luIHJlcXVlc3RzIHRoZSBSZWdFeHAgb25seSBuZWVkcyB0byBtYXRjaCBwYXJ0IG9mIHRoZSBVUkwuIEZvclxuICogcmVxdWVzdHMgYWdhaW5zdCB0aGlyZC1wYXJ0eSBzZXJ2ZXJzLCB5b3UgbXVzdCBkZWZpbmUgYSBSZWdFeHAgdGhhdCBtYXRjaGVzXG4gKiB0aGUgc3RhcnQgb2YgdGhlIFVSTC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXJvdXRpbmcuUm91dGVcbiAqL1xuY2xhc3MgUmVnRXhwUm91dGUgZXh0ZW5kcyBSb3V0ZSB7XG4gIC8qKlxuICAgKiBJZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGNvbnRhaW5zXG4gICAqIFtjYXB0dXJlIGdyb3Vwc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUmVnRXhwI2dyb3VwaW5nLWJhY2stcmVmZXJlbmNlc30sXG4gICAqIHRoZSBjYXB0dXJlZCB2YWx1ZXMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gICAqIHtAbGluayB3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBgcGFyYW1zYFxuICAgKiBhcmd1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ0V4cCBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QgVVJMcy5cbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBtYXRjaCB0aGUgUm91dGVcbiAgICogYWdhaW5zdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHJlZ0V4cDogUmVnRXhwLCBoYW5kbGVyOiBSb3V0ZUhhbmRsZXIsIG1ldGhvZD86IEhUVFBNZXRob2QpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlZ0V4cCwgUmVnRXhwLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSZWdFeHBSb3V0ZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdwYXR0ZXJuJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoOiBSb3V0ZU1hdGNoQ2FsbGJhY2sgPSAoe3VybH06IFJvdXRlTWF0Y2hDYWxsYmFja09wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlZ0V4cC5leGVjKHVybC5ocmVmKTtcblxuICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgbm8gbWF0Y2guXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcXVpcmUgdGhhdCB0aGUgbWF0Y2ggc3RhcnQgYXQgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGUgVVJMIHN0cmluZ1xuICAgICAgLy8gaWYgaXQncyBhIGNyb3NzLW9yaWdpbiByZXF1ZXN0LlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjgxIGZvciB0aGUgY29udGV4dFxuICAgICAgLy8gYmVoaW5kIHRoaXMgYmVoYXZpb3IuXG4gICAgICBpZiAodXJsLm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luICYmIHJlc3VsdC5pbmRleCAhPT0gMCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgIGBUaGUgcmVndWxhciBleHByZXNzaW9uICcke3JlZ0V4cC50b1N0cmluZygpfScgb25seSBwYXJ0aWFsbHkgbWF0Y2hlZCBgICtcbiAgICAgICAgICAgICAgYGFnYWluc3QgdGhlIGNyb3NzLW9yaWdpbiBVUkwgJyR7dXJsLnRvU3RyaW5nKCl9Jy4gUmVnRXhwUm91dGUncyB3aWxsIG9ubHkgYCArXG4gICAgICAgICAgICAgIGBoYW5kbGUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgcm91dGUgbWF0Y2hlcywgYnV0IHRoZXJlIGFyZW4ndCBhbnkgY2FwdHVyZSBncm91cHMgZGVmaW5lZCwgdGhlblxuICAgICAgLy8gdGhpcyB3aWxsIHJldHVybiBbXSwgd2hpY2ggaXMgdHJ1dGh5IGFuZCB0aGVyZWZvcmUgc3VmZmljaWVudCB0b1xuICAgICAgLy8gaW5kaWNhdGUgYSBtYXRjaC5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBjYXB0dXJlIGdyb3VwcywgdGhlbiBpdCB3aWxsIHJldHVybiB0aGVpciB2YWx1ZXMuXG4gICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKDEpO1xuICAgIH07XG5cbiAgICBzdXBlcihtYXRjaCwgaGFuZGxlciwgbWV0aG9kKTtcbiAgfVxufVxuXG5leHBvcnQge1JlZ0V4cFJvdXRlfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQge1xuICBSb3V0ZUhhbmRsZXIsXG4gIFJvdXRlSGFuZGxlck9iamVjdCxcbiAgUm91dGVIYW5kbGVyQ2FsbGJhY2tPcHRpb25zLFxuICBSb3V0ZU1hdGNoQ2FsbGJhY2tPcHRpb25zLFxufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuaW1wb3J0IHtIVFRQTWV0aG9kLCBkZWZhdWx0TWV0aG9kfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZUhhbmRsZXJ9IGZyb20gJy4vdXRpbHMvbm9ybWFsaXplSGFuZGxlci5qcyc7XG5pbXBvcnQge1JvdXRlfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxudHlwZSBSZXF1ZXN0QXJncyA9IHN0cmluZyB8IFtzdHJpbmcsIFJlcXVlc3RJbml0P107XG5cbmludGVyZmFjZSBDYWNoZVVSTHNNZXNzYWdlRGF0YSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZDoge1xuICAgIHVybHNUb0NhY2hlOiBSZXF1ZXN0QXJnc1tdO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBSb3V0ZXIgY2FuIGJlIHVzZWQgdG8gcHJvY2VzcyBhIGBGZXRjaEV2ZW50YCB1c2luZyBvbmUgb3IgbW9yZVxuICoge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZX0sIHJlc3BvbmRpbmcgd2l0aCBhIGBSZXNwb25zZWAgaWZcbiAqIGEgbWF0Y2hpbmcgcm91dGUgZXhpc3RzLlxuICpcbiAqIElmIG5vIHJvdXRlIG1hdGNoZXMgYSBnaXZlbiBhIHJlcXVlc3QsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImRlZmF1bHRcIlxuICogaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZC5cbiAqXG4gKiBTaG91bGQgdGhlIG1hdGNoaW5nIFJvdXRlIHRocm93IGFuIGVycm9yLCB0aGUgUm91dGVyIHdpbGwgdXNlIGEgXCJjYXRjaFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkIHRvIGdyYWNlZnVsbHkgZGVhbCB3aXRoIGlzc3VlcyBhbmQgcmVzcG9uZCB3aXRoIGFcbiAqIFJlcXVlc3QuXG4gKlxuICogSWYgYSByZXF1ZXN0IG1hdGNoZXMgbXVsdGlwbGUgcm91dGVzLCB0aGUgKiplYXJsaWVzdCoqIHJlZ2lzdGVyZWQgcm91dGUgd2lsbFxuICogYmUgdXNlZCB0byByZXNwb25kIHRvIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuY2xhc3MgUm91dGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfcm91dGVzOiBNYXA8SFRUUE1ldGhvZCwgUm91dGVbXT47XG4gIHByaXZhdGUgcmVhZG9ubHkgX2RlZmF1bHRIYW5kbGVyTWFwOiBNYXA8SFRUUE1ldGhvZCwgUm91dGVIYW5kbGVyT2JqZWN0PjtcbiAgcHJpdmF0ZSBfY2F0Y2hIYW5kbGVyPzogUm91dGVIYW5kbGVyT2JqZWN0O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIG5ldyBSb3V0ZXIuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9yb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAgPSBuZXcgTWFwKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7TWFwPHN0cmluZywgQXJyYXk8d29ya2JveC1yb3V0aW5nLlJvdXRlPj59IHJvdXRlcyBBIGBNYXBgIG9mIEhUVFBcbiAgICogbWV0aG9kIG5hbWUgKCdHRVQnLCBldGMuKSB0byBhbiBhcnJheSBvZiBhbGwgdGhlIGNvcnJlc3BvbmRpbmcgYFJvdXRlYFxuICAgKiBpbnN0YW5jZXMgdGhhdCBhcmUgcmVnaXN0ZXJlZC5cbiAgICovXG4gIGdldCByb3V0ZXMoKTogTWFwPEhUVFBNZXRob2QsIFJvdXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5fcm91dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBmZXRjaCBldmVudCBsaXN0ZW5lciB0byByZXNwb25kIHRvIGV2ZW50cyB3aGVuIGEgcm91dGUgbWF0Y2hlc1xuICAgKiB0aGUgZXZlbnQncyByZXF1ZXN0LlxuICAgKi9cbiAgYWRkRmV0Y2hMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsICgoZXZlbnQ6IEZldGNoRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHtyZXF1ZXN0fSA9IGV2ZW50O1xuICAgICAgY29uc3QgcmVzcG9uc2VQcm9taXNlID0gdGhpcy5oYW5kbGVSZXF1ZXN0KHtyZXF1ZXN0LCBldmVudH0pO1xuICAgICAgaWYgKHJlc3BvbnNlUHJvbWlzZSkge1xuICAgICAgICBldmVudC5yZXNwb25kV2l0aChyZXNwb25zZVByb21pc2UpO1xuICAgICAgfVxuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtZXNzYWdlIGV2ZW50IGxpc3RlbmVyIGZvciBVUkxzIHRvIGNhY2hlIGZyb20gdGhlIHdpbmRvdy5cbiAgICogVGhpcyBpcyB1c2VmdWwgdG8gY2FjaGUgcmVzb3VyY2VzIGxvYWRlZCBvbiB0aGUgcGFnZSBwcmlvciB0byB3aGVuIHRoZVxuICAgKiBzZXJ2aWNlIHdvcmtlciBzdGFydGVkIGNvbnRyb2xsaW5nIGl0LlxuICAgKlxuICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlIGRhdGEgc2VudCBmcm9tIHRoZSB3aW5kb3cgc2hvdWxkIGJlIGFzIGZvbGxvd3MuXG4gICAqIFdoZXJlIHRoZSBgdXJsc1RvQ2FjaGVgIGFycmF5IG1heSBjb25zaXN0IG9mIFVSTCBzdHJpbmdzIG9yIGFuIGFycmF5IG9mXG4gICAqIFVSTCBzdHJpbmcgKyBgcmVxdWVzdEluaXRgIG9iamVjdCAodGhlIHNhbWUgYXMgeW91J2QgcGFzcyB0byBgZmV0Y2goKWApLlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIHR5cGU6ICdDQUNIRV9VUkxTJyxcbiAgICogICBwYXlsb2FkOiB7XG4gICAqICAgICB1cmxzVG9DYWNoZTogW1xuICAgKiAgICAgICAnLi9zY3JpcHQxLmpzJyxcbiAgICogICAgICAgJy4vc2NyaXB0Mi5qcycsXG4gICAqICAgICAgIFsnLi9zY3JpcHQzLmpzJywge21vZGU6ICduby1jb3JzJ31dLFxuICAgKiAgICAgXSxcbiAgICogICB9LFxuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkQ2FjaGVMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKChldmVudDogRXh0ZW5kYWJsZU1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgLy8gZXZlbnQuZGF0YSBpcyB0eXBlICdhbnknXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG4gICAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdDQUNIRV9VUkxTJykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgIGNvbnN0IHtwYXlsb2FkfTogQ2FjaGVVUkxzTWVzc2FnZURhdGEgPSBldmVudC5kYXRhO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgbG9nZ2VyLmRlYnVnKGBDYWNoaW5nIFVSTHMgZnJvbSB0aGUgd2luZG93YCwgcGF5bG9hZC51cmxzVG9DYWNoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXF1ZXN0UHJvbWlzZXMgPSBQcm9taXNlLmFsbChcbiAgICAgICAgICBwYXlsb2FkLnVybHNUb0NhY2hlLm1hcCgoZW50cnk6IHN0cmluZyB8IFtzdHJpbmcsIFJlcXVlc3RJbml0P10pID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gW2VudHJ5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KC4uLmVudHJ5KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3Qoe3JlcXVlc3QsIGV2ZW50fSk7XG5cbiAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogVHlwZVNjcmlwdCBlcnJvcnMgd2l0aG91dCB0aGlzIHR5cGVjYXN0IGZvclxuICAgICAgICAgICAgLy8gc29tZSByZWFzb24gKHByb2JhYmx5IGEgYnVnKS4gVGhlIHJlYWwgdHlwZSBoZXJlIHNob3VsZCB3b3JrIGJ1dFxuICAgICAgICAgICAgLy8gZG9lc24ndDogYEFycmF5PFByb21pc2U8UmVzcG9uc2U+IHwgdW5kZWZpbmVkPmAuXG4gICAgICAgICAgfSkgYXMgYW55W10sXG4gICAgICAgICk7IC8vIFR5cGVTY3JpcHRcblxuICAgICAgICBldmVudC53YWl0VW50aWwocmVxdWVzdFByb21pc2VzKTtcblxuICAgICAgICAvLyBJZiBhIE1lc3NhZ2VDaGFubmVsIHdhcyB1c2VkLCByZXBseSB0byB0aGUgbWVzc2FnZSBvbiBzdWNjZXNzLlxuICAgICAgICBpZiAoZXZlbnQucG9ydHMgJiYgZXZlbnQucG9ydHNbMF0pIHtcbiAgICAgICAgICB2b2lkIHJlcXVlc3RQcm9taXNlcy50aGVuKCgpID0+IGV2ZW50LnBvcnRzWzBdLnBvc3RNZXNzYWdlKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSByb3V0aW5nIHJ1bGVzIHRvIGEgRmV0Y2hFdmVudCBvYmplY3QgdG8gZ2V0IGEgUmVzcG9uc2UgZnJvbSBhblxuICAgKiBhcHByb3ByaWF0ZSBSb3V0ZSdzIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0IFRoZSByZXF1ZXN0IHRvIGhhbmRsZS5cbiAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZVxuICAgKiAgICAgcmVxdWVzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT58dW5kZWZpbmVkfSBBIHByb21pc2UgaXMgcmV0dXJuZWQgaWYgYVxuICAgKiAgICAgcmVnaXN0ZXJlZCByb3V0ZSBjYW4gaGFuZGxlIHRoZSByZXF1ZXN0LiBJZiB0aGVyZSBpcyBubyBtYXRjaGluZ1xuICAgKiAgICAgcm91dGUgYW5kIHRoZXJlJ3Mgbm8gYGRlZmF1bHRIYW5kbGVyYCwgYHVuZGVmaW5lZGAgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBoYW5kbGVSZXF1ZXN0KHtcbiAgICByZXF1ZXN0LFxuICAgIGV2ZW50LFxuICB9OiB7XG4gICAgcmVxdWVzdDogUmVxdWVzdDtcbiAgICBldmVudDogRXh0ZW5kYWJsZUV2ZW50O1xuICB9KTogUHJvbWlzZTxSZXNwb25zZT4gfCB1bmRlZmluZWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdoYW5kbGVSZXF1ZXN0JyxcbiAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5yZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgIGBXb3JrYm94IFJvdXRlciBvbmx5IHN1cHBvcnRzIFVSTHMgdGhhdCBzdGFydCB3aXRoICdodHRwJy5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbWVPcmlnaW4gPSB1cmwub3JpZ2luID09PSBsb2NhdGlvbi5vcmlnaW47XG4gICAgY29uc3Qge3BhcmFtcywgcm91dGV9ID0gdGhpcy5maW5kTWF0Y2hpbmdSb3V0ZSh7XG4gICAgICBldmVudCxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBzYW1lT3JpZ2luLFxuICAgICAgdXJsLFxuICAgIH0pO1xuICAgIGxldCBoYW5kbGVyID0gcm91dGUgJiYgcm91dGUuaGFuZGxlcjtcblxuICAgIGNvbnN0IGRlYnVnTWVzc2FnZXMgPSBbXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFtgRm91bmQgYSByb3V0ZSB0byBoYW5kbGUgdGhpcyByZXF1ZXN0OmAsIHJvdXRlXSk7XG5cbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChbXG4gICAgICAgICAgICBgUGFzc2luZyB0aGUgZm9sbG93aW5nIHBhcmFtcyB0byB0aGUgcm91dGUncyBoYW5kbGVyOmAsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgaGFuZGxlciBiZWNhdXNlIHRoZXJlIHdhcyBubyBtYXRjaGluZyByb3V0ZSwgdGhlblxuICAgIC8vIGZhbGwgYmFjayB0byBkZWZhdWx0SGFuZGxlciBpZiB0aGF0J3MgZGVmaW5lZC5cbiAgICBjb25zdCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZCBhcyBIVFRQTWV0aG9kO1xuICAgIGlmICghaGFuZGxlciAmJiB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcC5oYXMobWV0aG9kKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFxuICAgICAgICAgIGBGYWlsZWQgdG8gZmluZCBhIG1hdGNoaW5nIHJvdXRlLiBGYWxsaW5nIGAgK1xuICAgICAgICAgICAgYGJhY2sgdG8gdGhlIGRlZmF1bHQgaGFuZGxlciBmb3IgJHttZXRob2R9LmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBoYW5kbGVyID0gdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAuZ2V0KG1ldGhvZCk7XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBObyBoYW5kbGVyIHNvIFdvcmtib3ggd2lsbCBkbyBub3RoaW5nLiBJZiBsb2dzIGlzIHNldCBvZiBkZWJ1Z1xuICAgICAgICAvLyBpLmUuIHZlcmJvc2UsIHdlIHNob3VsZCBwcmludCBvdXQgdGhpcyBpbmZvcm1hdGlvbi5cbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBObyByb3V0ZSBmb3VuZCBmb3I6ICR7Z2V0RnJpZW5kbHlVUkwodXJsKX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gV2UgaGF2ZSBhIGhhbmRsZXIsIG1lYW5pbmcgV29ya2JveCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIHJvdXRlLlxuICAgICAgLy8gcHJpbnQgdGhlIHJvdXRpbmcgZGV0YWlscyB0byB0aGUgY29uc29sZS5cbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgUm91dGVyIGlzIHJlc3BvbmRpbmcgdG86ICR7Z2V0RnJpZW5kbHlVUkwodXJsKX1gKTtcblxuICAgICAgZGVidWdNZXNzYWdlcy5mb3JFYWNoKChtc2cpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobXNnKSkge1xuICAgICAgICAgIGxvZ2dlci5sb2coLi4ubXNnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2dnZXIubG9nKG1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICAvLyBXcmFwIGluIHRyeSBhbmQgY2F0Y2ggaW4gY2FzZSB0aGUgaGFuZGxlIG1ldGhvZCB0aHJvd3MgYSBzeW5jaHJvbm91c1xuICAgIC8vIGVycm9yLiBJdCBzaG91bGQgc3RpbGwgY2FsbGJhY2sgdG8gdGhlIGNhdGNoIGhhbmRsZXIuXG4gICAgbGV0IHJlc3BvbnNlUHJvbWlzZTtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2VQcm9taXNlID0gaGFuZGxlci5oYW5kbGUoe3VybCwgcmVxdWVzdCwgZXZlbnQsIHBhcmFtc30pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzcG9uc2VQcm9taXNlID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcm91dGUncyBjYXRjaCBoYW5kbGVyLCBpZiBpdCBleGlzdHNcbiAgICBjb25zdCBjYXRjaEhhbmRsZXIgPSByb3V0ZSAmJiByb3V0ZS5jYXRjaEhhbmRsZXI7XG5cbiAgICBpZiAoXG4gICAgICByZXNwb25zZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlICYmXG4gICAgICAodGhpcy5fY2F0Y2hIYW5kbGVyIHx8IGNhdGNoSGFuZGxlcilcbiAgICApIHtcbiAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IHJlc3BvbnNlUHJvbWlzZS5jYXRjaChhc3luYyAoZXJyKSA9PiB7XG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYSByb3V0ZSBjYXRjaCBoYW5kbGVyLCBwcm9jZXNzIHRoYXQgZmlyc3RcbiAgICAgICAgaWYgKGNhdGNoSGFuZGxlcikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBTdGlsbCBpbmNsdWRlIFVSTCBoZXJlIGFzIGl0IHdpbGwgYmUgYXN5bmMgZnJvbSB0aGUgY29uc29sZSBncm91cFxuICAgICAgICAgICAgLy8gYW5kIG1heSBub3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBVUkxcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICAgYEVycm9yIHRocm93biB3aGVuIHJlc3BvbmRpbmcgdG86IGAgK1xuICAgICAgICAgICAgICAgIGAgJHtnZXRGcmllbmRseVVSTChcbiAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICApfS4gRmFsbGluZyBiYWNrIHRvIHJvdXRlJ3MgQ2F0Y2ggSGFuZGxlci5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRXJyb3IgdGhyb3duIGJ5OmAsIHJvdXRlKTtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYXRjaEhhbmRsZXIuaGFuZGxlKHt1cmwsIHJlcXVlc3QsIGV2ZW50LCBwYXJhbXN9KTtcbiAgICAgICAgICB9IGNhdGNoIChjYXRjaEVycikge1xuICAgICAgICAgICAgaWYgKGNhdGNoRXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyID0gY2F0Y2hFcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NhdGNoSGFuZGxlcikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBTdGlsbCBpbmNsdWRlIFVSTCBoZXJlIGFzIGl0IHdpbGwgYmUgYXN5bmMgZnJvbSB0aGUgY29uc29sZSBncm91cFxuICAgICAgICAgICAgLy8gYW5kIG1heSBub3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBVUkxcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICAgYEVycm9yIHRocm93biB3aGVuIHJlc3BvbmRpbmcgdG86IGAgK1xuICAgICAgICAgICAgICAgIGAgJHtnZXRGcmllbmRseVVSTChcbiAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICApfS4gRmFsbGluZyBiYWNrIHRvIGdsb2JhbCBDYXRjaCBIYW5kbGVyLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBFcnJvciB0aHJvd24gYnk6YCwgcm91dGUpO1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGNoSGFuZGxlci5oYW5kbGUoe3VybCwgcmVxdWVzdCwgZXZlbnR9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZVByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGEgcmVxdWVzdCBhbmQgVVJMIChhbmQgb3B0aW9uYWxseSBhbiBldmVudCkgYWdhaW5zdCB0aGUgbGlzdCBvZlxuICAgKiByZWdpc3RlcmVkIHJvdXRlcywgYW5kIGlmIHRoZXJlJ3MgYSBtYXRjaCwgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiByb3V0ZSBhbG9uZyB3aXRoIGFueSBwYXJhbXMgZ2VuZXJhdGVkIGJ5IHRoZSBtYXRjaC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtVUkx9IG9wdGlvbnMudXJsXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5zYW1lT3JpZ2luIFRoZSByZXN1bHQgb2YgY29tcGFyaW5nIGB1cmwub3JpZ2luYFxuICAgKiAgICAgYWdhaW5zdCB0aGUgY3VycmVudCBvcmlnaW4uXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0IFRoZSByZXF1ZXN0IHRvIG1hdGNoLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGByb3V0ZWAgYW5kIGBwYXJhbXNgIHByb3BlcnRpZXMuXG4gICAqICAgICBUaGV5IGFyZSBwb3B1bGF0ZWQgaWYgYSBtYXRjaGluZyByb3V0ZSB3YXMgZm91bmQgb3IgYHVuZGVmaW5lZGBcbiAgICogICAgIG90aGVyd2lzZS5cbiAgICovXG4gIGZpbmRNYXRjaGluZ1JvdXRlKHtcbiAgICB1cmwsXG4gICAgc2FtZU9yaWdpbixcbiAgICByZXF1ZXN0LFxuICAgIGV2ZW50LFxuICB9OiBSb3V0ZU1hdGNoQ2FsbGJhY2tPcHRpb25zKToge1xuICAgIHJvdXRlPzogUm91dGU7XG4gICAgcGFyYW1zPzogUm91dGVIYW5kbGVyQ2FsbGJhY2tPcHRpb25zWydwYXJhbXMnXTtcbiAgfSB7XG4gICAgY29uc3Qgcm91dGVzID0gdGhpcy5fcm91dGVzLmdldChyZXF1ZXN0Lm1ldGhvZCBhcyBIVFRQTWV0aG9kKSB8fCBbXTtcbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgbGV0IHBhcmFtczogUHJvbWlzZTxhbnk+IHwgdW5kZWZpbmVkO1xuICAgICAgLy8gcm91dGUubWF0Y2ggcmV0dXJucyB0eXBlIGFueSwgbm90IHBvc3NpYmxlIHRvIGNoYW5nZSByaWdodCBub3cuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHJvdXRlLm1hdGNoKHt1cmwsIHNhbWVPcmlnaW4sIHJlcXVlc3QsIGV2ZW50fSk7XG4gICAgICBpZiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyBXYXJuIGRldmVsb3BlcnMgdGhhdCB1c2luZyBhbiBhc3luYyBtYXRjaENhbGxiYWNrIGlzIGFsbW9zdCBhbHdheXNcbiAgICAgICAgICAvLyBub3QgdGhlIHJpZ2h0IHRoaW5nIHRvIGRvLlxuICAgICAgICAgIGlmIChtYXRjaFJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgICAgICBgV2hpbGUgcm91dGluZyAke2dldEZyaWVuZGx5VVJMKHVybCl9LCBhbiBhc3luYyBgICtcbiAgICAgICAgICAgICAgICBgbWF0Y2hDYWxsYmFjayBmdW5jdGlvbiB3YXMgdXNlZC4gUGxlYXNlIGNvbnZlcnQgdGhlIGAgK1xuICAgICAgICAgICAgICAgIGBmb2xsb3dpbmcgcm91dGUgdG8gdXNlIGEgc3luY2hyb25vdXMgbWF0Y2hDYWxsYmFjayBmdW5jdGlvbjpgLFxuICAgICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjA3OVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgIHBhcmFtcyA9IG1hdGNoUmVzdWx0O1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpICYmIHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyBJbnN0ZWFkIG9mIHBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgaW4gYXMgcGFyYW1zLCB1c2UgdW5kZWZpbmVkLlxuICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBtYXRjaFJlc3VsdC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICBPYmplY3Qua2V5cyhtYXRjaFJlc3VsdCkubGVuZ3RoID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBvYmplY3QgaW4gYXMgcGFyYW1zLCB1c2UgdW5kZWZpbmVkLlxuICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWF0Y2hSZXN1bHQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIC8vIEZvciB0aGUgYm9vbGVhbiB2YWx1ZSB0cnVlIChyYXRoZXIgdGhhbiBqdXN0IHNvbWV0aGluZyB0cnV0aC15KSxcbiAgICAgICAgICAvLyBkb24ndCBzZXQgcGFyYW1zLlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvcHVsbC8yMTM0I2lzc3VlY29tbWVudC01MTM5MjQzNTNcbiAgICAgICAgICBwYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gZWFybHkgaWYgaGF2ZSBhIG1hdGNoLlxuICAgICAgICByZXR1cm4ge3JvdXRlLCBwYXJhbXN9O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiBubyBtYXRjaCB3YXMgZm91bmQgYWJvdmUsIHJldHVybiBhbmQgZW1wdHkgb2JqZWN0LlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYSBkZWZhdWx0IGBoYW5kbGVyYCB0aGF0J3MgY2FsbGVkIHdoZW4gbm8gcm91dGVzIGV4cGxpY2l0bHlcbiAgICogbWF0Y2ggdGhlIGluY29taW5nIHJlcXVlc3QuXG4gICAqXG4gICAqIEVhY2ggSFRUUCBtZXRob2QgKCdHRVQnLCAnUE9TVCcsIGV0Yy4pIGdldHMgaXRzIG93biBkZWZhdWx0IGhhbmRsZXIuXG4gICAqXG4gICAqIFdpdGhvdXQgYSBkZWZhdWx0IGhhbmRsZXIsIHVubWF0Y2hlZCByZXF1ZXN0cyB3aWxsIGdvIGFnYWluc3QgdGhlXG4gICAqIG5ldHdvcmsgYXMgaWYgdGhlcmUgd2VyZSBubyBzZXJ2aWNlIHdvcmtlciBwcmVzZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIGFzc29jaWF0ZSB3aXRoIHRoaXNcbiAgICogZGVmYXVsdCBoYW5kbGVyLiBFYWNoIG1ldGhvZCBoYXMgaXRzIG93biBkZWZhdWx0LlxuICAgKi9cbiAgc2V0RGVmYXVsdEhhbmRsZXIoXG4gICAgaGFuZGxlcjogUm91dGVIYW5kbGVyLFxuICAgIG1ldGhvZDogSFRUUE1ldGhvZCA9IGRlZmF1bHRNZXRob2QsXG4gICk6IHZvaWQge1xuICAgIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLnNldChtZXRob2QsIG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGEgUm91dGUgdGhyb3dzIGFuIGVycm9yIHdoaWxlIGhhbmRsaW5nIGEgcmVxdWVzdCwgdGhpcyBgaGFuZGxlcmBcbiAgICogd2lsbCBiZSBjYWxsZWQgYW5kIGdpdmVuIGEgY2hhbmNlIHRvIHByb3ZpZGUgYSByZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICovXG4gIHNldENhdGNoSGFuZGxlcihoYW5kbGVyOiBSb3V0ZUhhbmRsZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9jYXRjaEhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmcuUm91dGV9IHJvdXRlIFRoZSByb3V0ZSB0byByZWdpc3Rlci5cbiAgICovXG4gIHJlZ2lzdGVyUm91dGUocm91dGU6IFJvdXRlKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNUeXBlKHJvdXRlLCAnb2JqZWN0Jywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgfSk7XG5cbiAgICAgIGFzc2VydCEuaGFzTWV0aG9kKHJvdXRlLCAnbWF0Y2gnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICB9KTtcblxuICAgICAgYXNzZXJ0IS5pc1R5cGUocm91dGUuaGFuZGxlciwgJ29iamVjdCcsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgIH0pO1xuXG4gICAgICBhc3NlcnQhLmhhc01ldGhvZChyb3V0ZS5oYW5kbGVyLCAnaGFuZGxlJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUuaGFuZGxlcicsXG4gICAgICB9KTtcblxuICAgICAgYXNzZXJ0IS5pc1R5cGUocm91dGUubWV0aG9kLCAnc3RyaW5nJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUubWV0aG9kJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcm91dGVzLmhhcyhyb3V0ZS5tZXRob2QpKSB7XG4gICAgICB0aGlzLl9yb3V0ZXMuc2V0KHJvdXRlLm1ldGhvZCwgW10pO1xuICAgIH1cblxuICAgIC8vIEdpdmUgcHJlY2VkZW5jZSB0byBhbGwgb2YgdGhlIGVhcmxpZXIgcm91dGVzIGJ5IGFkZGluZyB0aGlzIGFkZGl0aW9uYWxcbiAgICAvLyByb3V0ZSB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkhLnB1c2gocm91dGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGEgcm91dGUgd2l0aCB0aGUgcm91dGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZy5Sb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRvIHVucmVnaXN0ZXIuXG4gICAqL1xuICB1bnJlZ2lzdGVyUm91dGUocm91dGU6IFJvdXRlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCcsIHtcbiAgICAgICAgbWV0aG9kOiByb3V0ZS5tZXRob2QsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUluZGV4ID0gdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpIS5pbmRleE9mKHJvdXRlKTtcbiAgICBpZiAocm91dGVJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkhLnNwbGljZShyb3V0ZUluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5yZWdpc3Rlci1yb3V0ZS1yb3V0ZS1ub3QtcmVnaXN0ZXJlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1JvdXRlcn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vUm91dGVyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5sZXQgZGVmYXVsdFJvdXRlcjogUm91dGVyO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UgaWYgb25lIGRvZXMgbm90IGV4aXN0LiBJZiBvbmVcbiAqIGRvZXMgYWxyZWFkeSBleGlzdCwgdGhhdCBpbnN0YW5jZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Um91dGVyfVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyID0gKCk6IFJvdXRlciA9PiB7XG4gIGlmICghZGVmYXVsdFJvdXRlcikge1xuICAgIGRlZmF1bHRSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbiAgICAvLyBUaGUgaGVscGVycyB0aGF0IHVzZSB0aGUgZGVmYXVsdCBSb3V0ZXIgYXNzdW1lIHRoZXNlIGxpc3RlbmVycyBleGlzdC5cbiAgICBkZWZhdWx0Um91dGVyLmFkZEZldGNoTGlzdGVuZXIoKTtcbiAgICBkZWZhdWx0Um91dGVyLmFkZENhY2hlTGlzdGVuZXIoKTtcbiAgfVxuICByZXR1cm4gZGVmYXVsdFJvdXRlcjtcbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge1JvdXRlSGFuZGxlciwgUm91dGVNYXRjaENhbGxiYWNrfSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQge1JvdXRlfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCB7UmVnRXhwUm91dGV9IGZyb20gJy4vUmVnRXhwUm91dGUuanMnO1xuaW1wb3J0IHtIVFRQTWV0aG9kfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcn0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIuanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEVhc2lseSByZWdpc3RlciBhIFJlZ0V4cCwgc3RyaW5nLCBvciBmdW5jdGlvbiB3aXRoIGEgY2FjaGluZ1xuICogc3RyYXRlZ3kgdG8gYSBzaW5nbGV0b24gUm91dGVyIGluc3RhbmNlLlxuICpcbiAqIFRoaXMgbWV0aG9kIHdpbGwgZ2VuZXJhdGUgYSBSb3V0ZSBmb3IgeW91IGlmIG5lZWRlZCBhbmRcbiAqIGNhbGwge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZXIjcmVnaXN0ZXJSb3V0ZX0uXG4gKlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfHdvcmtib3gtcm91dGluZy5Sb3V0ZX5tYXRjaENhbGxiYWNrfHdvcmtib3gtcm91dGluZy5Sb3V0ZX0gY2FwdHVyZVxuICogSWYgdGhlIGNhcHR1cmUgcGFyYW0gaXMgYSBgUm91dGVgLCBhbGwgb3RoZXIgYXJndW1lbnRzIHdpbGwgYmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gW2hhbmRsZXJdIEEgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuIFRoaXMgcGFyYW1ldGVyXG4gKiBpcyByZXF1aXJlZCBpZiBgY2FwdHVyZWAgaXMgbm90IGEgYFJvdXRlYCBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICogYWdhaW5zdC5cbiAqIEByZXR1cm4ge3dvcmtib3gtcm91dGluZy5Sb3V0ZX0gVGhlIGdlbmVyYXRlZCBgUm91dGVgLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJSb3V0ZShcbiAgY2FwdHVyZTogUmVnRXhwIHwgc3RyaW5nIHwgUm91dGVNYXRjaENhbGxiYWNrIHwgUm91dGUsXG4gIGhhbmRsZXI/OiBSb3V0ZUhhbmRsZXIsXG4gIG1ldGhvZD86IEhUVFBNZXRob2QsXG4pOiBSb3V0ZSB7XG4gIGxldCByb3V0ZTtcblxuICBpZiAodHlwZW9mIGNhcHR1cmUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgY2FwdHVyZVVybCA9IG5ldyBVUkwoY2FwdHVyZSwgbG9jYXRpb24uaHJlZik7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoY2FwdHVyZS5zdGFydHNXaXRoKCcvJykgfHwgY2FwdHVyZS5zdGFydHNXaXRoKCdodHRwJykpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtc3RyaW5nJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY2FwdHVyZScsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSB3YW50IHRvIGNoZWNrIGlmIEV4cHJlc3Mtc3R5bGUgd2lsZGNhcmRzIGFyZSBpbiB0aGUgcGF0aG5hbWUgb25seS5cbiAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIGxvZyBtZXNzYWdlIGluIHY0LlxuICAgICAgY29uc3QgdmFsdWVUb0NoZWNrID0gY2FwdHVyZS5zdGFydHNXaXRoKCdodHRwJylcbiAgICAgICAgPyBjYXB0dXJlVXJsLnBhdGhuYW1lXG4gICAgICAgIDogY2FwdHVyZTtcblxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cCNwYXJhbWV0ZXJzXG4gICAgICBjb25zdCB3aWxkY2FyZHMgPSAnWyo6PytdJztcbiAgICAgIGlmIChuZXcgUmVnRXhwKGAke3dpbGRjYXJkc31gKS5leGVjKHZhbHVlVG9DaGVjaykpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgIGBUaGUgJyRjYXB0dXJlJyBwYXJhbWV0ZXIgY29udGFpbnMgYW4gRXhwcmVzcy1zdHlsZSB3aWxkY2FyZCBgICtcbiAgICAgICAgICAgIGBjaGFyYWN0ZXIgKCR7d2lsZGNhcmRzfSkuIFN0cmluZ3MgYXJlIG5vdyBhbHdheXMgaW50ZXJwcmV0ZWQgYXMgYCArXG4gICAgICAgICAgICBgZXhhY3QgbWF0Y2hlczsgdXNlIGEgUmVnRXhwIGZvciBwYXJ0aWFsIG9yIHdpbGRjYXJkIG1hdGNoZXMuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaENhbGxiYWNrOiBSb3V0ZU1hdGNoQ2FsbGJhY2sgPSAoe3VybH0pID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB1cmwucGF0aG5hbWUgPT09IGNhcHR1cmVVcmwucGF0aG5hbWUgJiZcbiAgICAgICAgICB1cmwub3JpZ2luICE9PSBjYXB0dXJlVXJsLm9yaWdpblxuICAgICAgICApIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgICBgJHtjYXB0dXJlfSBvbmx5IHBhcnRpYWxseSBtYXRjaGVzIHRoZSBjcm9zcy1vcmlnaW4gVVJMIGAgK1xuICAgICAgICAgICAgICBgJHt1cmwudG9TdHJpbmcoKX0uIFRoaXMgcm91dGUgd2lsbCBvbmx5IGhhbmRsZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgYCArXG4gICAgICAgICAgICAgIGBpZiB0aGV5IG1hdGNoIHRoZSBlbnRpcmUgVVJMLmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXJsLmhyZWYgPT09IGNhcHR1cmVVcmwuaHJlZjtcbiAgICB9O1xuXG4gICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgc3RyaW5nIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgcm91dGUgPSBuZXcgUm91dGUobWF0Y2hDYWxsYmFjaywgaGFuZGxlciEsIG1ldGhvZCk7XG4gIH0gZWxzZSBpZiAoY2FwdHVyZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIGBSZWdFeHBgIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgcm91dGUgPSBuZXcgUmVnRXhwUm91dGUoY2FwdHVyZSwgaGFuZGxlciEsIG1ldGhvZCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNhcHR1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBmdW5jdGlvbiB0aGVuIGBoYW5kbGVyYCBhbmQgYG1ldGhvZGAgbXVzdCBiZSBwcmVzZW50LlxuICAgIHJvdXRlID0gbmV3IFJvdXRlKGNhcHR1cmUsIGhhbmRsZXIhLCBtZXRob2QpO1xuICB9IGVsc2UgaWYgKGNhcHR1cmUgaW5zdGFuY2VvZiBSb3V0ZSkge1xuICAgIHJvdXRlID0gY2FwdHVyZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnN1cHBvcnRlZC1yb3V0ZS10eXBlJywge1xuICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgcGFyYW1OYW1lOiAnY2FwdHVyZScsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gIGRlZmF1bHRSb3V0ZXIucmVnaXN0ZXJSb3V0ZShyb3V0ZSk7XG5cbiAgcmV0dXJuIHJvdXRlO1xufVxuXG5leHBvcnQge3JlZ2lzdGVyUm91dGV9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtSb3V0ZUhhbmRsZXJ9IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7Z2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogSWYgYSBSb3V0ZSB0aHJvd3MgYW4gZXJyb3Igd2hpbGUgaGFuZGxpbmcgYSByZXF1ZXN0LCB0aGlzIGBoYW5kbGVyYFxuICogd2lsbCBiZSBjYWxsZWQgYW5kIGdpdmVuIGEgY2hhbmNlIHRvIHByb3ZpZGUgYSByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmZ1bmN0aW9uIHNldENhdGNoSGFuZGxlcihoYW5kbGVyOiBSb3V0ZUhhbmRsZXIpOiB2b2lkIHtcbiAgY29uc3QgZGVmYXVsdFJvdXRlciA9IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcigpO1xuICBkZWZhdWx0Um91dGVyLnNldENhdGNoSGFuZGxlcihoYW5kbGVyKTtcbn1cblxuZXhwb3J0IHtzZXRDYXRjaEhhbmRsZXJ9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5mdW5jdGlvbiBzdHJpcFBhcmFtcyhmdWxsVVJMOiBzdHJpbmcsIGlnbm9yZVBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3Qgc3RyaXBwZWRVUkwgPSBuZXcgVVJMKGZ1bGxVUkwpO1xuICBmb3IgKGNvbnN0IHBhcmFtIG9mIGlnbm9yZVBhcmFtcykge1xuICAgIHN0cmlwcGVkVVJMLnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW0pO1xuICB9XG4gIHJldHVybiBzdHJpcHBlZFVSTC5ocmVmO1xufVxuXG4vKipcbiAqIE1hdGNoZXMgYW4gaXRlbSBpbiB0aGUgY2FjaGUsIGlnbm9yaW5nIHNwZWNpZmljIFVSTCBwYXJhbXMuIFRoaXMgaXMgc2ltaWxhclxuICogdG8gdGhlIGBpZ25vcmVTZWFyY2hgIG9wdGlvbiwgYnV0IGl0IGFsbG93cyB5b3UgdG8gaWdub3JlIGp1c3Qgc3BlY2lmaWNcbiAqIHBhcmFtcyAod2hpbGUgY29udGludWluZyB0byBtYXRjaCBvbiB0aGUgb3RoZXJzKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtDYWNoZX0gY2FjaGVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICogQHBhcmFtIHtPYmplY3R9IG1hdGNoT3B0aW9uc1xuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpZ25vcmVQYXJhbXNcbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2FjaGVNYXRjaElnbm9yZVBhcmFtcyhcbiAgY2FjaGU6IENhY2hlLFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICBpZ25vcmVQYXJhbXM6IHN0cmluZ1tdLFxuICBtYXRjaE9wdGlvbnM/OiBDYWNoZVF1ZXJ5T3B0aW9ucyxcbik6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3Qgc3RyaXBwZWRSZXF1ZXN0VVJMID0gc3RyaXBQYXJhbXMocmVxdWVzdC51cmwsIGlnbm9yZVBhcmFtcyk7XG5cbiAgLy8gSWYgdGhlIHJlcXVlc3QgZG9lc24ndCBpbmNsdWRlIGFueSBpZ25vcmVkIHBhcmFtcywgbWF0Y2ggYXMgbm9ybWFsLlxuICBpZiAocmVxdWVzdC51cmwgPT09IHN0cmlwcGVkUmVxdWVzdFVSTCkge1xuICAgIHJldHVybiBjYWNoZS5tYXRjaChyZXF1ZXN0LCBtYXRjaE9wdGlvbnMpO1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCBtYXRjaCBieSBjb21wYXJpbmcga2V5c1xuICBjb25zdCBrZXlzT3B0aW9ucyA9IHsuLi5tYXRjaE9wdGlvbnMsIGlnbm9yZVNlYXJjaDogdHJ1ZX07XG4gIGNvbnN0IGNhY2hlS2V5cyA9IGF3YWl0IGNhY2hlLmtleXMocmVxdWVzdCwga2V5c09wdGlvbnMpO1xuXG4gIGZvciAoY29uc3QgY2FjaGVLZXkgb2YgY2FjaGVLZXlzKSB7XG4gICAgY29uc3Qgc3RyaXBwZWRDYWNoZUtleVVSTCA9IHN0cmlwUGFyYW1zKGNhY2hlS2V5LnVybCwgaWdub3JlUGFyYW1zKTtcbiAgICBpZiAoc3RyaXBwZWRSZXF1ZXN0VVJMID09PSBzdHJpcHBlZENhY2hlS2V5VVJMKSB7XG4gICAgICByZXR1cm4gY2FjaGUubWF0Y2goY2FjaGVLZXksIG1hdGNoT3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIHJldHVybjtcbn1cblxuZXhwb3J0IHtjYWNoZU1hdGNoSWdub3JlUGFyYW1zfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIFRoZSBEZWZlcnJlZCBjbGFzcyBjb21wb3NlcyBQcm9taXNlcyBpbiBhIHdheSB0aGF0IGFsbG93cyBmb3IgdGhlbSB0byBiZVxuICogcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgZnJvbSBvdXRzaWRlIHRoZSBjb25zdHJ1Y3Rvci4gSW4gbW9zdCBjYXNlcyBwcm9taXNlc1xuICogc2hvdWxkIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCBEZWZlcnJlZHMgY2FuIGJlIG5lY2Vzc2FyeSB3aGVuIHRoZSBsb2dpYyB0b1xuICogcmVzb2x2ZSBhIHByb21pc2UgbXVzdCBiZSBzZXBhcmF0ZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBEZWZlcnJlZDxUPiB7XG4gIHByb21pc2U6IFByb21pc2U8VD47XG4gIHJlc29sdmUhOiAodmFsdWU6IFQpID0+IHZvaWQ7XG4gIHJlamVjdCE6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm9taXNlIGFuZCBleHBvc2VzIGl0cyByZXNvbHZlIGFuZCByZWplY3QgZnVuY3Rpb25zIGFzIG1ldGhvZHMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHtEZWZlcnJlZH07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnLi4vX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7cXVvdGFFcnJvckNhbGxiYWNrc30gZnJvbSAnLi4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogUnVucyBhbGwgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucywgb25lIGF0IGEgdGltZSBzZXF1ZW50aWFsbHksIGluIHRoZSBvcmRlclxuICogaW4gd2hpY2ggdGhleSB3ZXJlIHJlZ2lzdGVyZWQuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtY29yZVxuICogQHByaXZhdGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VyLmxvZyhcbiAgICAgIGBBYm91dCB0byBydW4gJHtxdW90YUVycm9yQ2FsbGJhY2tzLnNpemV9IGAgK1xuICAgICAgICBgY2FsbGJhY2tzIHRvIGNsZWFuIHVwIGNhY2hlcy5gLFxuICAgICk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHF1b3RhRXJyb3JDYWxsYmFja3MpIHtcbiAgICBhd2FpdCBjYWxsYmFjaygpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIubG9nKGNhbGxiYWNrLCAnaXMgY29tcGxldGUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZXIubG9nKCdGaW5pc2hlZCBydW5uaW5nIGNhbGxiYWNrcy4nKTtcbiAgfVxufVxuXG5leHBvcnQge2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFuZCB0aGUgcGFzc2VkIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gKiBUaGlzIHV0aWxpdHkgaXMgYW4gYXN5bmMvYXdhaXQtZnJpZW5kbHkgdmVyc2lvbiBvZiBgc2V0VGltZW91dGAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZW91dChtczogbnVtYmVyKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwgIi8vIEB0cy1pZ25vcmVcbnRyeXtzZWxmWyd3b3JrYm94OnN0cmF0ZWdpZXM6Ny4wLjAnXSYmXygpfWNhdGNoKGUpe30iLCAiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXN9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU1hdGNoSWdub3JlUGFyYW1zLmpzJztcbmltcG9ydCB7RGVmZXJyZWR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9EZWZlcnJlZC5qcyc7XG5pbXBvcnQge2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7dGltZW91dH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL3RpbWVvdXQuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHtcbiAgSGFuZGxlckNhbGxiYWNrT3B0aW9ucyxcbiAgTWFwTGlrZU9iamVjdCxcbiAgV29ya2JveFBsdWdpbixcbiAgV29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW0sXG59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7U3RyYXRlZ3l9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuZnVuY3Rpb24gdG9SZXF1ZXN0KGlucHV0OiBSZXF1ZXN0SW5mbykge1xuICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/IG5ldyBSZXF1ZXN0KGlucHV0KSA6IGlucHV0O1xufVxuXG4vKipcbiAqIEEgY2xhc3MgY3JlYXRlZCBldmVyeSB0aW1lIGEgU3RyYXRlZ3kgaW5zdGFuY2UgaW5zdGFuY2UgY2FsbHNcbiAqIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlfSBvclxuICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGVBbGx9IHRoYXQgd3JhcHMgYWxsIGZldGNoIGFuZFxuICogY2FjaGUgYWN0aW9ucyBhcm91bmQgcGx1Z2luIGNhbGxiYWNrcyBhbmQga2VlcHMgdHJhY2sgb2Ygd2hlbiB0aGUgc3RyYXRlZ3lcbiAqIGlzIFwiZG9uZVwiIChpLmUuIGFsbCBhZGRlZCBgZXZlbnQud2FpdFVudGlsKClgIHByb21pc2VzIGhhdmUgcmVzb2x2ZWQpLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgU3RyYXRlZ3lIYW5kbGVyIHtcbiAgcHVibGljIHJlcXVlc3QhOiBSZXF1ZXN0O1xuICBwdWJsaWMgdXJsPzogVVJMO1xuICBwdWJsaWMgZXZlbnQ6IEV4dGVuZGFibGVFdmVudDtcbiAgcHVibGljIHBhcmFtcz86IGFueTtcblxuICBwcml2YXRlIF9jYWNoZUtleXM6IFJlY29yZDxzdHJpbmcsIFJlcXVlc3Q+ID0ge307XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfc3RyYXRlZ3k6IFN0cmF0ZWd5O1xuICBwcml2YXRlIHJlYWRvbmx5IF9leHRlbmRMaWZldGltZVByb21pc2VzOiBQcm9taXNlPGFueT5bXTtcbiAgcHJpdmF0ZSByZWFkb25seSBfaGFuZGxlckRlZmVycmVkOiBEZWZlcnJlZDxhbnk+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9wbHVnaW5zOiBXb3JrYm94UGx1Z2luW107XG4gIHByaXZhdGUgcmVhZG9ubHkgX3BsdWdpblN0YXRlTWFwOiBNYXA8V29ya2JveFBsdWdpbiwgTWFwTGlrZU9iamVjdD47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXNzZWQgc3RyYXRlZ3kgYW5kIGV2ZW50XG4gICAqIHRoYXQncyBoYW5kbGluZyB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogVGhlIGNvbnN0cnVjdG9yIGFsc28gaW5pdGlhbGl6ZXMgdGhlIHN0YXRlIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gZWFjaCBvZlxuICAgKiB0aGUgcGx1Z2lucyBoYW5kbGluZyB0aGlzIHJlcXVlc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fSBzdHJhdGVneVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICogICAgIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlXG4gICAqICAgICB7QGxpbmsgd29ya2JveC1yb3V0aW5nfm1hdGNoQ2FsbGJhY2t9IChpZiBhcHBsaWNhYmxlKS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0cmF0ZWd5OiBTdHJhdGVneSwgb3B0aW9uczogSGFuZGxlckNhbGxiYWNrT3B0aW9ucykge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IHRoZSBzdHJhdGVneSBpcyBwZXJmb3JtaW5nIChwYXNzZWQgdG8gdGhlIHN0cmF0ZWd5J3NcbiAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgKiBAbmFtZSByZXF1ZXN0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlcXVlc3R9XG4gICAgICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcmVxdWVzdC5cbiAgICAgKiBAbmFtZSBldmVudFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtFeHRlbmRhYmxlRXZlbnR9XG4gICAgICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBBIGBVUkxgIGluc3RhbmNlIG9mIGByZXF1ZXN0LnVybGAgKGlmIHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAqIE5vdGU6IHRoZSBgdXJsYCBwYXJhbSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIHN0cmF0ZWd5IHdhcyBpbnZva2VkXG4gICAgICogZnJvbSBhIHdvcmtib3ggYFJvdXRlYCBvYmplY3QuXG4gICAgICogQG5hbWUgdXJsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHR5cGUge1VSTHx1bmRlZmluZWR9XG4gICAgICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBBIGBwYXJhbWAgdmFsdWUgKGlmIHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAqIE5vdGU6IHRoZSBgcGFyYW1gIHBhcmFtIHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgc3RyYXRlZ3kgd2FzIGludm9rZWRcbiAgICAgKiBmcm9tIGEgd29ya2JveCBgUm91dGVgIG9iamVjdCBhbmQgdGhlXG4gICAgICoge0BsaW5rIHdvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSByZXR1cm5lZFxuICAgICAqIGEgdHJ1dGh5IHZhbHVlIChpdCB3aWxsIGJlIHRoYXQgdmFsdWUpLlxuICAgICAqIEBuYW1lIHBhcmFtc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHsqfHVuZGVmaW5lZH1cbiAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2Uob3B0aW9ucy5ldmVudCwgRXh0ZW5kYWJsZUV2ZW50LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6ICdTdHJhdGVneUhhbmRsZXInLFxuICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5ldmVudCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5ldmVudCA9IG9wdGlvbnMuZXZlbnQ7XG4gICAgdGhpcy5fc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICB0aGlzLl9oYW5kbGVyRGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcbiAgICB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzID0gW107XG5cbiAgICAvLyBDb3B5IHRoZSBwbHVnaW5zIGxpc3QgKHNpbmNlIGl0J3MgbXV0YWJsZSBvbiB0aGUgc3RyYXRlZ3kpLFxuICAgIC8vIHNvIGFueSBtdXRhdGlvbnMgZG9uJ3QgYWZmZWN0IHRoaXMgaGFuZGxlciBpbnN0YW5jZS5cbiAgICB0aGlzLl9wbHVnaW5zID0gWy4uLnN0cmF0ZWd5LnBsdWdpbnNdO1xuICAgIHRoaXMuX3BsdWdpblN0YXRlTWFwID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3BsdWdpbnMpIHtcbiAgICAgIHRoaXMuX3BsdWdpblN0YXRlTWFwLnNldChwbHVnaW4sIHt9KTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50LndhaXRVbnRpbCh0aGlzLl9oYW5kbGVyRGVmZXJyZWQucHJvbWlzZSk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyBhIGdpdmVuIHJlcXVlc3QgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlIHBsdWdpbiBjYWxsYmFja1xuICAgKiBtZXRob2RzKSB1c2luZyB0aGUgYGZldGNoT3B0aW9uc2AgKGZvciBub24tbmF2aWdhdGlvbiByZXF1ZXN0cykgYW5kXG4gICAqIGBwbHVnaW5zYCBkZWZpbmVkIG9uIHRoZSBgU3RyYXRlZ3lgIG9iamVjdC5cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICogLSBgcmVxdWVzdFdpbGxGZXRjaCgpYFxuICAgKiAtIGBmZXRjaERpZFN1Y2NlZWQoKWBcbiAgICogLSBgZmV0Y2hEaWRGYWlsKClgXG4gICAqXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGlucHV0IFRoZSBVUkwgb3IgcmVxdWVzdCB0byBmZXRjaC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBmZXRjaChpbnB1dDogUmVxdWVzdEluZm8pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3Qge2V2ZW50fSA9IHRoaXM7XG4gICAgbGV0IHJlcXVlc3Q6IFJlcXVlc3QgPSB0b1JlcXVlc3QoaW5wdXQpO1xuXG4gICAgaWYgKFxuICAgICAgcmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnICYmXG4gICAgICBldmVudCBpbnN0YW5jZW9mIEZldGNoRXZlbnQgJiZcbiAgICAgIGV2ZW50LnByZWxvYWRSZXNwb25zZVxuICAgICkge1xuICAgICAgY29uc3QgcG9zc2libGVQcmVsb2FkUmVzcG9uc2UgPSAoYXdhaXQgZXZlbnQucHJlbG9hZFJlc3BvbnNlKSBhc1xuICAgICAgICB8IFJlc3BvbnNlXG4gICAgICAgIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgICAgIGBVc2luZyBhIHByZWxvYWRlZCBuYXZpZ2F0aW9uIHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NzaWJsZVByZWxvYWRSZXNwb25zZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGZldGNoRGlkRmFpbCBwbHVnaW4sIHdlIG5lZWQgdG8gc2F2ZSBhIGNsb25lIG9mIHRoZVxuICAgIC8vIG9yaWdpbmFsIHJlcXVlc3QgYmVmb3JlIGl0J3MgZWl0aGVyIG1vZGlmaWVkIGJ5IGEgcmVxdWVzdFdpbGxGZXRjaFxuICAgIC8vIHBsdWdpbiBvciBiZWZvcmUgdGhlIG9yaWdpbmFsIHJlcXVlc3QncyBib2R5IGlzIGNvbnN1bWVkIHZpYSBmZXRjaCgpLlxuICAgIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IHRoaXMuaGFzQ2FsbGJhY2soJ2ZldGNoRGlkRmFpbCcpXG4gICAgICA/IHJlcXVlc3QuY2xvbmUoKVxuICAgICAgOiBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoY29uc3QgY2Igb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdyZXF1ZXN0V2lsbEZldGNoJykpIHtcbiAgICAgICAgcmVxdWVzdCA9IGF3YWl0IGNiKHtyZXF1ZXN0OiByZXF1ZXN0LmNsb25lKCksIGV2ZW50fSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCcsIHtcbiAgICAgICAgICB0aHJvd25FcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgcmVxdWVzdCBjYW4gYmUgYWx0ZXJlZCBieSBwbHVnaW5zIHdpdGggYHJlcXVlc3RXaWxsRmV0Y2hgIG1ha2luZ1xuICAgIC8vIHRoZSBvcmlnaW5hbCByZXF1ZXN0IChtb3N0IGxpa2VseSBmcm9tIGEgYGZldGNoYCBldmVudCkgZGlmZmVyZW50XG4gICAgLy8gZnJvbSB0aGUgUmVxdWVzdCB3ZSBtYWtlLiBQYXNzIGJvdGggdG8gYGZldGNoRGlkRmFpbGAgdG8gYWlkIGRlYnVnZ2luZy5cbiAgICBjb25zdCBwbHVnaW5GaWx0ZXJlZFJlcXVlc3Q6IFJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKCk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGZldGNoUmVzcG9uc2U6IFJlc3BvbnNlO1xuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2XG4gICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJyA/IHVuZGVmaW5lZCA6IHRoaXMuX3N0cmF0ZWd5LmZldGNoT3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICBgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9JyByZXR1cm5lZCBhIHJlc3BvbnNlIHdpdGggYCArXG4gICAgICAgICAgICBgc3RhdHVzICcke2ZldGNoUmVzcG9uc2Uuc3RhdHVzfScuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2ZldGNoRGlkU3VjY2VlZCcpKSB7XG4gICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgcmVxdWVzdDogcGx1Z2luRmlsdGVyZWRSZXF1ZXN0LFxuICAgICAgICAgIHJlc3BvbnNlOiBmZXRjaFJlc3BvbnNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmZXRjaFJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgIGBOZXR3b3JrIHJlcXVlc3QgZm9yIGAgK1xuICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHRocmV3IGFuIGVycm9yLmAsXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIGBvcmlnaW5hbFJlcXVlc3RgIHdpbGwgb25seSBleGlzdCBpZiBhIGBmZXRjaERpZEZhaWxgIGNhbGxiYWNrXG4gICAgICAvLyBpcyBiZWluZyB1c2VkIChzZWUgYWJvdmUpLlxuICAgICAgaWYgKG9yaWdpbmFsUmVxdWVzdCkge1xuICAgICAgICBhd2FpdCB0aGlzLnJ1bkNhbGxiYWNrcygnZmV0Y2hEaWRGYWlsJywge1xuICAgICAgICAgIGVycm9yOiBlcnJvciBhcyBFcnJvcixcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBvcmlnaW5hbFJlcXVlc3Q6IG9yaWdpbmFsUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICAgIHJlcXVlc3Q6IHBsdWdpbkZpbHRlcmVkUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyBgdGhpcy5mZXRjaCgpYCBhbmQgKGluIHRoZSBiYWNrZ3JvdW5kKSBydW5zIGB0aGlzLmNhY2hlUHV0KClgIG9uXG4gICAqIHRoZSByZXNwb25zZSBnZW5lcmF0ZWQgYnkgYHRoaXMuZmV0Y2goKWAuXG4gICAqXG4gICAqIFRoZSBjYWxsIHRvIGB0aGlzLmNhY2hlUHV0KClgIGF1dG9tYXRpY2FsbHkgaW52b2tlcyBgdGhpcy53YWl0VW50aWwoKWAsXG4gICAqIHNvIHlvdSBkbyBub3QgaGF2ZSB0byBtYW51YWxseSBjYWxsIGB3YWl0VW50aWwoKWAgb24gdGhlIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBpbnB1dCBUaGUgcmVxdWVzdCBvciBVUkwgdG8gZmV0Y2ggYW5kIGNhY2hlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIGZldGNoQW5kQ2FjaGVQdXQoaW5wdXQ6IFJlcXVlc3RJbmZvKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaChpbnB1dCk7XG4gICAgY29uc3QgcmVzcG9uc2VDbG9uZSA9IHJlc3BvbnNlLmNsb25lKCk7XG5cbiAgICB2b2lkIHRoaXMud2FpdFVudGlsKHRoaXMuY2FjaGVQdXQoaW5wdXQsIHJlc3BvbnNlQ2xvbmUpKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRjaGVzIGEgcmVxdWVzdCBmcm9tIHRoZSBjYWNoZSAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGUgcGx1Z2luXG4gICAqIGNhbGxiYWNrIG1ldGhvZHMpIHVzaW5nIHRoZSBgY2FjaGVOYW1lYCwgYG1hdGNoT3B0aW9uc2AsIGFuZCBgcGx1Z2luc2BcbiAgICogZGVmaW5lZCBvbiB0aGUgc3RyYXRlZ3kgb2JqZWN0LlxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIHBsdWdpbiBsaWZlY3ljbGUgbWV0aG9kcyBhcmUgaW52b2tlZCB3aGVuIHVzaW5nIHRoaXMgbWV0aG9kOlxuICAgKiAtIGNhY2hlS2V5V2lsbEJ5VXNlZCgpXG4gICAqIC0gY2FjaGVkUmVzcG9uc2VXaWxsQnlVc2VkKClcbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30ga2V5IFRoZSBSZXF1ZXN0IG9yIFVSTCB0byB1c2UgYXMgdGhlIGNhY2hlIGtleS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fSBBIG1hdGNoaW5nIHJlc3BvbnNlLCBpZiBmb3VuZC5cbiAgICovXG4gIGFzeW5jIGNhY2hlTWF0Y2goa2V5OiBSZXF1ZXN0SW5mbyk6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCByZXF1ZXN0OiBSZXF1ZXN0ID0gdG9SZXF1ZXN0KGtleSk7XG4gICAgbGV0IGNhY2hlZFJlc3BvbnNlOiBSZXNwb25zZSB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7Y2FjaGVOYW1lLCBtYXRjaE9wdGlvbnN9ID0gdGhpcy5fc3RyYXRlZ3k7XG5cbiAgICBjb25zdCBlZmZlY3RpdmVSZXF1ZXN0ID0gYXdhaXQgdGhpcy5nZXRDYWNoZUtleShyZXF1ZXN0LCAncmVhZCcpO1xuICAgIGNvbnN0IG11bHRpTWF0Y2hPcHRpb25zID0gey4uLm1hdGNoT3B0aW9ucywgLi4ue2NhY2hlTmFtZX19O1xuXG4gICAgY2FjaGVkUmVzcG9uc2UgPSBhd2FpdCBjYWNoZXMubWF0Y2goZWZmZWN0aXZlUmVxdWVzdCwgbXVsdGlNYXRjaE9wdGlvbnMpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChjYWNoZWRSZXNwb25zZSkge1xuICAgICAgICBsb2dnZXIuZGVidWcoYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluICcke2NhY2hlTmFtZX0nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBObyBjYWNoZWQgcmVzcG9uc2UgZm91bmQgaW4gJyR7Y2FjaGVOYW1lfScuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZCcpKSB7XG4gICAgICBjYWNoZWRSZXNwb25zZSA9XG4gICAgICAgIChhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICAgIG1hdGNoT3B0aW9ucyxcbiAgICAgICAgICBjYWNoZWRSZXNwb25zZSxcbiAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICB9KSkgfHwgdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkUmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogUHV0cyBhIHJlcXVlc3QvcmVzcG9uc2UgcGFpciBpbiB0aGUgY2FjaGUgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlXG4gICAqIHBsdWdpbiBjYWxsYmFjayBtZXRob2RzKSB1c2luZyB0aGUgYGNhY2hlTmFtZWAgYW5kIGBwbHVnaW5zYCBkZWZpbmVkIG9uXG4gICAqIHRoZSBzdHJhdGVneSBvYmplY3QuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAqIC0gY2FjaGVLZXlXaWxsQnlVc2VkKClcbiAgICogLSBjYWNoZVdpbGxVcGRhdGUoKVxuICAgKiAtIGNhY2hlRGlkVXBkYXRlKClcbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30ga2V5IFRoZSByZXF1ZXN0IG9yIFVSTCB0byB1c2UgYXMgdGhlIGNhY2hlIGtleS5cbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIHRvIGNhY2hlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBgZmFsc2VgIGlmIGEgY2FjaGVXaWxsVXBkYXRlIGNhdXNlZCB0aGUgcmVzcG9uc2VcbiAgICogbm90IGJlIGNhY2hlZCwgYW5kIGB0cnVlYCBvdGhlcndpc2UuXG4gICAqL1xuICBhc3luYyBjYWNoZVB1dChrZXk6IFJlcXVlc3RJbmZvLCByZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByZXF1ZXN0OiBSZXF1ZXN0ID0gdG9SZXF1ZXN0KGtleSk7XG5cbiAgICAvLyBSdW4gaW4gdGhlIG5leHQgdGFzayB0byBhdm9pZCBibG9ja2luZyBvdGhlciBjYWNoZSByZWFkcy5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL1NlcnZpY2VXb3JrZXIvaXNzdWVzLzEzOTdcbiAgICBhd2FpdCB0aW1lb3V0KDApO1xuXG4gICAgY29uc3QgZWZmZWN0aXZlUmVxdWVzdCA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGVLZXkocmVxdWVzdCwgJ3dyaXRlJyk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kICYmIGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCcsIHtcbiAgICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKSxcbiAgICAgICAgICBtZXRob2Q6IGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjgxOFxuICAgICAgY29uc3QgdmFyeSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdWYXJ5Jyk7XG4gICAgICBpZiAodmFyeSkge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgYFRoZSByZXNwb25zZSBmb3IgJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9IGAgK1xuICAgICAgICAgICAgYGhhcyBhICdWYXJ5OiAke3Zhcnl9JyBoZWFkZXIuIGAgK1xuICAgICAgICAgICAgYENvbnNpZGVyIHNldHRpbmcgdGhlIHtpZ25vcmVWYXJ5OiB0cnVlfSBvcHRpb24gb24geW91ciBzdHJhdGVneSBgICtcbiAgICAgICAgICAgIGB0byBlbnN1cmUgY2FjaGUgbWF0Y2hpbmcgYW5kIGRlbGV0aW9uIHdvcmtzIGFzIGV4cGVjdGVkLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFxuICAgICAgICAgIGBDYW5ub3QgY2FjaGUgbm9uLWV4aXN0ZW50IHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9Jy5gLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdjYWNoZS1wdXQtd2l0aC1uby1yZXNwb25zZScsIHtcbiAgICAgICAgdXJsOiBnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZVRvQ2FjaGUgPSBhd2FpdCB0aGlzLl9lbnN1cmVSZXNwb25zZVNhZmVUb0NhY2hlKHJlc3BvbnNlKTtcblxuICAgIGlmICghcmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgYFJlc3BvbnNlICcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nIGAgK1xuICAgICAgICAgICAgYHdpbGwgbm90IGJlIGNhY2hlZC5gLFxuICAgICAgICAgIHJlc3BvbnNlVG9DYWNoZSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB7Y2FjaGVOYW1lLCBtYXRjaE9wdGlvbnN9ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKGNhY2hlTmFtZSk7XG5cbiAgICBjb25zdCBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID0gdGhpcy5oYXNDYWxsYmFjaygnY2FjaGVEaWRVcGRhdGUnKTtcbiAgICBjb25zdCBvbGRSZXNwb25zZSA9IGhhc0NhY2hlVXBkYXRlQ2FsbGJhY2tcbiAgICAgID8gYXdhaXQgY2FjaGVNYXRjaElnbm9yZVBhcmFtcyhcbiAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IHRoZSBgX19XQl9SRVZJU0lPTl9fYCBwYXJhbSBpcyBhIHByZWNhY2hpbmdcbiAgICAgICAgICAvLyBmZWF0dXJlLiBDb25zaWRlciBpbnRvIHdheXMgdG8gb25seSBhZGQgdGhpcyBiZWhhdmlvciBpZiB1c2luZ1xuICAgICAgICAgIC8vIHByZWNhY2hpbmcuXG4gICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgZWZmZWN0aXZlUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICAgIFsnX19XQl9SRVZJU0lPTl9fJ10sXG4gICAgICAgICAgbWF0Y2hPcHRpb25zLFxuICAgICAgICApXG4gICAgICA6IG51bGw7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICBgVXBkYXRpbmcgdGhlICcke2NhY2hlTmFtZX0nIGNhY2hlIHdpdGggYSBuZXcgUmVzcG9uc2UgYCArXG4gICAgICAgICAgYGZvciAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0uYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNhY2hlLnB1dChcbiAgICAgICAgZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgaGFzQ2FjaGVVcGRhdGVDYWxsYmFjayA/IHJlc3BvbnNlVG9DYWNoZS5jbG9uZSgpIDogcmVzcG9uc2VUb0NhY2hlLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01FeGNlcHRpb24jZXhjZXB0aW9uLVF1b3RhRXhjZWVkZWRFcnJvclxuICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicpIHtcbiAgICAgICAgICBhd2FpdCBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZURpZFVwZGF0ZScpKSB7XG4gICAgICBhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgb2xkUmVzcG9uc2UsXG4gICAgICAgIG5ld1Jlc3BvbnNlOiByZXNwb25zZVRvQ2FjaGUuY2xvbmUoKSxcbiAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIGxpc3Qgb2YgcGx1Z2lucyBmb3IgdGhlIGBjYWNoZUtleVdpbGxCZVVzZWRgIGNhbGxiYWNrLCBhbmRcbiAgICogZXhlY3V0ZXMgYW55IG9mIHRob3NlIGNhbGxiYWNrcyBmb3VuZCBpbiBzZXF1ZW5jZS4gVGhlIGZpbmFsIGBSZXF1ZXN0YFxuICAgKiBvYmplY3QgcmV0dXJuZWQgYnkgdGhlIGxhc3QgcGx1Z2luIGlzIHRyZWF0ZWQgYXMgdGhlIGNhY2hlIGtleSBmb3IgY2FjaGVcbiAgICogcmVhZHMgYW5kL29yIHdyaXRlcy4gSWYgbm8gYGNhY2hlS2V5V2lsbEJlVXNlZGAgcGx1Z2luIGNhbGxiYWNrcyBoYXZlXG4gICAqIGJlZW4gcmVnaXN0ZXJlZCwgdGhlIHBhc3NlZCByZXF1ZXN0IGlzIHJldHVybmVkIHVubW9kaWZpZWRcbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVxdWVzdD59XG4gICAqL1xuICBhc3luYyBnZXRDYWNoZUtleShcbiAgICByZXF1ZXN0OiBSZXF1ZXN0LFxuICAgIG1vZGU6ICdyZWFkJyB8ICd3cml0ZScsXG4gICk6IFByb21pc2U8UmVxdWVzdD4ge1xuICAgIGNvbnN0IGtleSA9IGAke3JlcXVlc3QudXJsfSB8ICR7bW9kZX1gO1xuICAgIGlmICghdGhpcy5fY2FjaGVLZXlzW2tleV0pIHtcbiAgICAgIGxldCBlZmZlY3RpdmVSZXF1ZXN0ID0gcmVxdWVzdDtcblxuICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlS2V5V2lsbEJlVXNlZCcpKSB7XG4gICAgICAgIGVmZmVjdGl2ZVJlcXVlc3QgPSB0b1JlcXVlc3QoXG4gICAgICAgICAgYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgIC8vIHBhcmFtcyBoYXMgYSB0eXBlIGFueSBjYW4ndCBjaGFuZ2UgcmlnaHQgbm93LlxuICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jYWNoZUtleXNba2V5XSA9IGVmZmVjdGl2ZVJlcXVlc3Q7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jYWNoZUtleXNba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHN0cmF0ZWd5IGhhcyBhdCBsZWFzdCBvbmUgcGx1Z2luIHdpdGggdGhlIGdpdmVuXG4gICAqIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY2FsbGJhY2sgdG8gY2hlY2sgZm9yLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2FsbGJhY2s8QyBleHRlbmRzIGtleW9mIFdvcmtib3hQbHVnaW4+KG5hbWU6IEMpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLl9zdHJhdGVneS5wbHVnaW5zKSB7XG4gICAgICBpZiAobmFtZSBpbiBwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIGFsbCBwbHVnaW4gY2FsbGJhY2tzIG1hdGNoaW5nIHRoZSBnaXZlbiBuYW1lLCBpbiBvcmRlciwgcGFzc2luZyB0aGVcbiAgICogZ2l2ZW4gcGFyYW0gb2JqZWN0IChtZXJnZWQgaXRoIHRoZSBjdXJyZW50IHBsdWdpbiBzdGF0ZSkgYXMgdGhlIG9ubHlcbiAgICogYXJndW1lbnQuXG4gICAqXG4gICAqIE5vdGU6IHNpbmNlIHRoaXMgbWV0aG9kIHJ1bnMgYWxsIHBsdWdpbnMsIGl0J3Mgbm90IHN1aXRhYmxlIGZvciBjYXNlc1xuICAgKiB3aGVyZSB0aGUgcmV0dXJuIHZhbHVlIG9mIGEgY2FsbGJhY2sgbmVlZHMgdG8gYmUgYXBwbGllZCBwcmlvciB0byBjYWxsaW5nXG4gICAqIHRoZSBuZXh0IGNhbGxiYWNrLiBTZWVcbiAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXIjaXRlcmF0ZUNhbGxiYWNrc31cbiAgICogYmVsb3cgZm9yIGhvdyB0byBoYW5kbGUgdGhhdCBjYXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY2FsbGJhY2sgdG8gcnVuIHdpdGhpbiBlYWNoIHBsdWdpbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtIFRoZSBvYmplY3QgdG8gcGFzcyBhcyB0aGUgZmlyc3QgKGFuZCBvbmx5KSBwYXJhbVxuICAgKiAgICAgd2hlbiBleGVjdXRpbmcgZWFjaCBjYWxsYmFjay4gVGhpcyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGVcbiAgICogICAgIGN1cnJlbnQgcGx1Z2luIHN0YXRlIHByaW9yIHRvIGNhbGxiYWNrIGV4ZWN1dGlvbi5cbiAgICovXG4gIGFzeW5jIHJ1bkNhbGxiYWNrczxDIGV4dGVuZHMga2V5b2YgTm9uTnVsbGFibGU8V29ya2JveFBsdWdpbj4+KFxuICAgIG5hbWU6IEMsXG4gICAgcGFyYW06IE9taXQ8V29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ10sICdzdGF0ZSc+LFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcyhuYW1lKSkge1xuICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBub3Qgc3VyZSB3aHkgYGFueWAgaXMgbmVlZGVkLiBJdCBzZWVtcyBsaWtlXG4gICAgICAvLyB0aGlzIHNob3VsZCB3b3JrIHdpdGggYGFzIFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtW0NdYC5cbiAgICAgIGF3YWl0IGNhbGxiYWNrKHBhcmFtIGFzIGFueSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYSBjYWxsYmFjayBhbmQgcmV0dXJucyBhbiBpdGVyYWJsZSBvZiBtYXRjaGluZyBwbHVnaW4gY2FsbGJhY2tzLFxuICAgKiB3aGVyZSBlYWNoIGNhbGxiYWNrIGlzIHdyYXBwZWQgd2l0aCB0aGUgY3VycmVudCBoYW5kbGVyIHN0YXRlIChpLmUuIHdoZW5cbiAgICogeW91IGNhbGwgZWFjaCBjYWxsYmFjaywgd2hhdGV2ZXIgb2JqZWN0IHBhcmFtZXRlciB5b3UgcGFzcyBpdCB3aWxsXG4gICAqIGJlIG1lcmdlZCB3aXRoIHRoZSBwbHVnaW4ncyBjdXJyZW50IHN0YXRlKS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgZm8gdGhlIGNhbGxiYWNrIHRvIHJ1blxuICAgKiBAcmV0dXJuIHtBcnJheTxGdW5jdGlvbj59XG4gICAqL1xuICAqaXRlcmF0ZUNhbGxiYWNrczxDIGV4dGVuZHMga2V5b2YgV29ya2JveFBsdWdpbj4oXG4gICAgbmFtZTogQyxcbiAgKTogR2VuZXJhdG9yPE5vbk51bGxhYmxlPFdvcmtib3hQbHVnaW5bQ10+PiB7XG4gICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fc3RyYXRlZ3kucGx1Z2lucykge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW5bbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9wbHVnaW5TdGF0ZU1hcC5nZXQocGx1Z2luKTtcbiAgICAgICAgY29uc3Qgc3RhdGVmdWxDYWxsYmFjayA9IChcbiAgICAgICAgICBwYXJhbTogT21pdDxXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXSwgJ3N0YXRlJz4sXG4gICAgICAgICkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZnVsUGFyYW0gPSB7Li4ucGFyYW0sIHN0YXRlfTtcblxuICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogbm90IHN1cmUgd2h5IGBhbnlgIGlzIG5lZWRlZC4gSXQgc2VlbXMgbGlrZVxuICAgICAgICAgIC8vIHRoaXMgc2hvdWxkIHdvcmsgd2l0aCBgYXMgV29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ11gLlxuICAgICAgICAgIHJldHVybiBwbHVnaW5bbmFtZV0hKHN0YXRlZnVsUGFyYW0gYXMgYW55KTtcbiAgICAgICAgfTtcbiAgICAgICAgeWllbGQgc3RhdGVmdWxDYWxsYmFjayBhcyBOb25OdWxsYWJsZTxXb3JrYm94UGx1Z2luW0NdPjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHByb21pc2UgdG8gdGhlXG4gICAqIFtleHRlbmQgbGlmZXRpbWUgcHJvbWlzZXNde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNleHRlbmRhYmxlZXZlbnQtZXh0ZW5kLWxpZmV0aW1lLXByb21pc2VzfVxuICAgKiBvZiB0aGUgZXZlbnQgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXF1ZXN0IGJlaW5nIGhhbmRsZWQgKHVzdWFsbHkgYVxuICAgKiBgRmV0Y2hFdmVudGApLlxuICAgKlxuICAgKiBOb3RlOiB5b3UgY2FuIGF3YWl0XG4gICAqIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfmRvbmVXYWl0aW5nfVxuICAgKiB0byBrbm93IHdoZW4gYWxsIGFkZGVkIHByb21pc2VzIGhhdmUgc2V0dGxlZC5cbiAgICpcbiAgICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlIEEgcHJvbWlzZSB0byBhZGQgdG8gdGhlIGV4dGVuZCBsaWZldGltZSBwcm9taXNlc1xuICAgKiAgICAgb2YgdGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgKi9cbiAgd2FpdFVudGlsPFQ+KHByb21pc2U6IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCBwcm9taXNlcyBwYXNzZWQgdG9cbiAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ+d2FpdFVudGlsfVxuICAgKiBoYXZlIHNldHRsZWQuXG4gICAqXG4gICAqIE5vdGU6IGFueSB3b3JrIGRvbmUgYWZ0ZXIgYGRvbmVXYWl0aW5nKClgIHNldHRsZXMgc2hvdWxkIGJlIG1hbnVhbGx5XG4gICAqIHBhc3NlZCB0byBhbiBldmVudCdzIGB3YWl0VW50aWwoKWAgbWV0aG9kIChub3QgdGhpcyBoYW5kbGVyJ3NcbiAgICogYHdhaXRVbnRpbCgpYCBtZXRob2QpLCBvdGhlcndpc2UgdGhlIHNlcnZpY2Ugd29ya2VyIHRocmVhZCBteSBiZSBraWxsZWRcbiAgICogcHJpb3IgdG8geW91ciB3b3JrIGNvbXBsZXRpbmcuXG4gICAqL1xuICBhc3luYyBkb25lV2FpdGluZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcHJvbWlzZTtcbiAgICB3aGlsZSAoKHByb21pc2UgPSB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzLnNoaWZ0KCkpKSB7XG4gICAgICBhd2FpdCBwcm9taXNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBydW5uaW5nIHRoZSBzdHJhdGVneSBhbmQgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgYW55IHBlbmRpbmdcbiAgICogYHdhaXRVbnRpbCgpYCBwcm9taXNlcy5cbiAgICovXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5faGFuZGxlckRlZmVycmVkLnJlc29sdmUobnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBjYWxsIGNhY2hlV2lsbFVwZGF0ZSBvbiB0aGUgYXZhaWxhYmxlIHBsdWdpbnMgKG9yIHVzZVxuICAgKiBzdGF0dXMgPT09IDIwMCkgdG8gZGV0ZXJtaW5lIGlmIHRoZSBSZXNwb25zZSBpcyBzYWZlIGFuZCB2YWxpZCB0byBjYWNoZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBfZW5zdXJlUmVzcG9uc2VTYWZlVG9DYWNoZShcbiAgICByZXNwb25zZTogUmVzcG9uc2UsXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+IHtcbiAgICBsZXQgcmVzcG9uc2VUb0NhY2hlOiBSZXNwb25zZSB8IHVuZGVmaW5lZCA9IHJlc3BvbnNlO1xuICAgIGxldCBwbHVnaW5zVXNlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlV2lsbFVwZGF0ZScpKSB7XG4gICAgICByZXNwb25zZVRvQ2FjaGUgPVxuICAgICAgICAoYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgIHJlcXVlc3Q6IHRoaXMucmVxdWVzdCxcbiAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VUb0NhY2hlLFxuICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICB9KSkgfHwgdW5kZWZpbmVkO1xuICAgICAgcGx1Z2luc1VzZWQgPSB0cnVlO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBsdWdpbnNVc2VkKSB7XG4gICAgICBpZiAocmVzcG9uc2VUb0NhY2hlICYmIHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICByZXNwb25zZVRvQ2FjaGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oXG4gICAgICAgICAgICAgICAgYFRoZSByZXNwb25zZSBmb3IgJyR7dGhpcy5yZXF1ZXN0LnVybH0nIGAgK1xuICAgICAgICAgICAgICAgICAgYGlzIGFuIG9wYXF1ZSByZXNwb25zZS4gVGhlIGNhY2hpbmcgc3RyYXRlZ3kgdGhhdCB5b3UncmUgYCArXG4gICAgICAgICAgICAgICAgICBgdXNpbmcgd2lsbCBub3QgY2FjaGUgb3BhcXVlIHJlc3BvbnNlcyBieSBkZWZhdWx0LmAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAgICAgYFRoZSByZXNwb25zZSBmb3IgJyR7dGhpcy5yZXF1ZXN0LnVybH0nIGAgK1xuICAgICAgICAgICAgICAgICAgYHJldHVybmVkIGEgc3RhdHVzIGNvZGUgb2YgJyR7cmVzcG9uc2Uuc3RhdHVzfScgYW5kIHdvbid0IGAgK1xuICAgICAgICAgICAgICAgICAgYGJlIGNhY2hlZCBhcyBhIHJlc3VsdC5gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZVRvQ2FjaGU7XG4gIH1cbn1cblxuZXhwb3J0IHtTdHJhdGVneUhhbmRsZXJ9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtjYWNoZU5hbWVzfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHtcbiAgSGFuZGxlckNhbGxiYWNrT3B0aW9ucyxcbiAgUm91dGVIYW5kbGVyT2JqZWN0LFxuICBXb3JrYm94UGx1Z2luLFxufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQge1N0cmF0ZWd5SGFuZGxlcn0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmF0ZWd5T3B0aW9ucyB7XG4gIGNhY2hlTmFtZT86IHN0cmluZztcbiAgcGx1Z2lucz86IFdvcmtib3hQbHVnaW5bXTtcbiAgZmV0Y2hPcHRpb25zPzogUmVxdWVzdEluaXQ7XG4gIG1hdGNoT3B0aW9ucz86IENhY2hlUXVlcnlPcHRpb25zO1xufVxuXG4vKipcbiAqIEFuIGFic3RyYWN0IGJhc2UgY2xhc3MgdGhhdCBhbGwgb3RoZXIgc3RyYXRlZ3kgY2xhc3NlcyBtdXN0IGV4dGVuZCBmcm9tOlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuYWJzdHJhY3QgY2xhc3MgU3RyYXRlZ3kgaW1wbGVtZW50cyBSb3V0ZUhhbmRsZXJPYmplY3Qge1xuICBjYWNoZU5hbWU6IHN0cmluZztcbiAgcGx1Z2luczogV29ya2JveFBsdWdpbltdO1xuICBmZXRjaE9wdGlvbnM/OiBSZXF1ZXN0SW5pdDtcbiAgbWF0Y2hPcHRpb25zPzogQ2FjaGVRdWVyeU9wdGlvbnM7XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IF9oYW5kbGUoXG4gICAgcmVxdWVzdDogUmVxdWVzdCxcbiAgICBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIsXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBzdHJhdGVneSBhbmQgc2V0cyBhbGwgZG9jdW1lbnRlZCBvcHRpb25cbiAgICogcHJvcGVydGllcyBhcyBwdWJsaWMgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICpcbiAgICogTm90ZTogaWYgYSBjdXN0b20gc3RyYXRlZ3kgY2xhc3MgZXh0ZW5kcyB0aGUgYmFzZSBTdHJhdGVneSBjbGFzcyBhbmQgZG9lc1xuICAgKiBub3QgbmVlZCBtb3JlIHRoYW4gdGhlc2UgcHJvcGVydGllcywgaXQgZG9lcyBub3QgbmVlZCB0byBkZWZpbmUgaXRzIG93blxuICAgKiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gdGhlIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBUaGVcbiAgICogW2BDYWNoZVF1ZXJ5T3B0aW9uc2Bde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zfVxuICAgKiBmb3IgYW55IGBjYWNoZS5tYXRjaCgpYCBvciBgY2FjaGUucHV0KClgIGNhbGxzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFN0cmF0ZWd5T3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gdGhlIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdFxuICAgICAqIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB1c2VkIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7QXJyYXk8T2JqZWN0Pn1cbiAgICAgKi9cbiAgICB0aGlzLnBsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnMgfHwgW107XG4gICAgLyoqXG4gICAgICogVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiBbYGluaXRgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzfVxuICAgICAqIG9mIGFsbCBmZXRjaCgpIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5mZXRjaE9wdGlvbnMgPSBvcHRpb25zLmZldGNoT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBUaGVcbiAgICAgKiBbYENhY2hlUXVlcnlPcHRpb25zYF17QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnN9XG4gICAgICogZm9yIGFueSBgY2FjaGUubWF0Y2goKWAgb3IgYGNhY2hlLnB1dCgpYCBjYWxscyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMubWF0Y2hPcHRpb25zID0gb3B0aW9ucy5tYXRjaE9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHJlcXVlc3Qgc3RyYXRlZ3kgYW5kIHJldHVybnMgYSBgUHJvbWlzZWAgdGhhdCB3aWxsIHJlc29sdmUgd2l0aFxuICAgKiBhIGBSZXNwb25zZWAsIGludm9raW5nIGFsbCByZWxldmFudCBwbHVnaW4gY2FsbGJhY2tzLlxuICAgKlxuICAgKiBXaGVuIGEgc3RyYXRlZ3kgaW5zdGFuY2UgaXMgcmVnaXN0ZXJlZCB3aXRoIGEgV29ya2JveFxuICAgKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfSwgdGhpcyBtZXRob2QgaXMgYXV0b21hdGljYWxseVxuICAgKiBjYWxsZWQgd2hlbiB0aGUgcm91dGUgbWF0Y2hlcy5cbiAgICpcbiAgICogQWx0ZXJuYXRpdmVseSwgdGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgaW4gYSBzdGFuZGFsb25lIGBGZXRjaEV2ZW50YFxuICAgKiBsaXN0ZW5lciBieSBwYXNzaW5nIGl0IHRvIGBldmVudC5yZXNwb25kV2l0aCgpYC5cbiAgICpcbiAgICogQHBhcmFtIHtGZXRjaEV2ZW50fE9iamVjdH0gb3B0aW9ucyBBIGBGZXRjaEV2ZW50YCBvciBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICogICAgIHByb3BlcnRpZXMgbGlzdGVkIGJlbG93LlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICogICAgIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXVxuICAgKi9cbiAgaGFuZGxlKG9wdGlvbnM6IEZldGNoRXZlbnQgfCBIYW5kbGVyQ2FsbGJhY2tPcHRpb25zKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IFtyZXNwb25zZURvbmVdID0gdGhpcy5oYW5kbGVBbGwob3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRG9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlfSwgYnV0XG4gICAqIGluc3RlYWQgb2YganVzdCByZXR1cm5pbmcgYSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyB0byBhIGBSZXNwb25zZWAgaXRcbiAgICogaXQgd2lsbCByZXR1cm4gYW4gdHVwbGUgb2YgYFtyZXNwb25zZSwgZG9uZV1gIHByb21pc2VzLCB3aGVyZSB0aGUgZm9ybWVyXG4gICAqIChgcmVzcG9uc2VgKSBpcyBlcXVpdmFsZW50IHRvIHdoYXQgYGhhbmRsZSgpYCByZXR1cm5zLCBhbmQgdGhlIGxhdHRlciBpcyBhXG4gICAqIFByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb25jZSBhbnkgcHJvbWlzZXMgdGhhdCB3ZXJlIGFkZGVkIHRvXG4gICAqIGBldmVudC53YWl0VW50aWwoKWAgYXMgcGFydCBvZiBwZXJmb3JtaW5nIHRoZSBzdHJhdGVneSBoYXZlIGNvbXBsZXRlZC5cbiAgICpcbiAgICogWW91IGNhbiBhd2FpdCB0aGUgYGRvbmVgIHByb21pc2UgdG8gZW5zdXJlIGFueSBleHRyYSB3b3JrIHBlcmZvcm1lZCBieVxuICAgKiB0aGUgc3RyYXRlZ3kgKHVzdWFsbHkgY2FjaGluZyByZXNwb25zZXMpIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7RmV0Y2hFdmVudHxPYmplY3R9IG9wdGlvbnMgQSBgRmV0Y2hFdmVudGAgb3IgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAqICAgICBwcm9wZXJ0aWVzIGxpc3RlZCBiZWxvdy5cbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAqICAgICByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLnBhcmFtc11cbiAgICogQHJldHVybiB7QXJyYXk8UHJvbWlzZT59IEEgdHVwbGUgb2YgW3Jlc3BvbnNlLCBkb25lXVxuICAgKiAgICAgcHJvbWlzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiB0aGUgcmVzcG9uc2UgcmVzb2x2ZXMgYXNcbiAgICogICAgIHdlbGwgYXMgd2hlbiB0aGUgaGFuZGxlciBoYXMgY29tcGxldGVkIGFsbCBpdHMgd29yay5cbiAgICovXG4gIGhhbmRsZUFsbChcbiAgICBvcHRpb25zOiBGZXRjaEV2ZW50IHwgSGFuZGxlckNhbGxiYWNrT3B0aW9ucyxcbiAgKTogW1Byb21pc2U8UmVzcG9uc2U+LCBQcm9taXNlPHZvaWQ+XSB7XG4gICAgLy8gQWxsb3cgZm9yIGZsZXhpYmxlIG9wdGlvbnMgdG8gYmUgcGFzc2VkLlxuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRmV0Y2hFdmVudCkge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgZXZlbnQ6IG9wdGlvbnMsXG4gICAgICAgIHJlcXVlc3Q6IG9wdGlvbnMucmVxdWVzdCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnQgPSBvcHRpb25zLmV2ZW50O1xuICAgIGNvbnN0IHJlcXVlc3QgPVxuICAgICAgdHlwZW9mIG9wdGlvbnMucmVxdWVzdCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBuZXcgUmVxdWVzdChvcHRpb25zLnJlcXVlc3QpXG4gICAgICAgIDogb3B0aW9ucy5yZXF1ZXN0O1xuICAgIGNvbnN0IHBhcmFtcyA9ICdwYXJhbXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnBhcmFtcyA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgU3RyYXRlZ3lIYW5kbGVyKHRoaXMsIHtldmVudCwgcmVxdWVzdCwgcGFyYW1zfSk7XG5cbiAgICBjb25zdCByZXNwb25zZURvbmUgPSB0aGlzLl9nZXRSZXNwb25zZShoYW5kbGVyLCByZXF1ZXN0LCBldmVudCk7XG4gICAgY29uc3QgaGFuZGxlckRvbmUgPSB0aGlzLl9hd2FpdENvbXBsZXRlKFxuICAgICAgcmVzcG9uc2VEb25lLFxuICAgICAgaGFuZGxlcixcbiAgICAgIHJlcXVlc3QsXG4gICAgICBldmVudCxcbiAgICApO1xuXG4gICAgLy8gUmV0dXJuIGFuIGFycmF5IG9mIHByb21pc2VzLCBzdWl0YWJsZSBmb3IgdXNlIHdpdGggUHJvbWlzZS5hbGwoKS5cbiAgICByZXR1cm4gW3Jlc3BvbnNlRG9uZSwgaGFuZGxlckRvbmVdO1xuICB9XG5cbiAgYXN5bmMgX2dldFJlc3BvbnNlKFxuICAgIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcixcbiAgICByZXF1ZXN0OiBSZXF1ZXN0LFxuICAgIGV2ZW50OiBFeHRlbmRhYmxlRXZlbnQsXG4gICk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlcldpbGxTdGFydCcsIHtldmVudCwgcmVxdWVzdH0pO1xuXG4gICAgbGV0IHJlc3BvbnNlOiBSZXNwb25zZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgICAvLyBUaGUgXCJvZmZpY2lhbFwiIFN0cmF0ZWd5IHN1YmNsYXNzZXMgYWxsIHRocm93IHRoaXMgZXJyb3IgYXV0b21hdGljYWxseSxcbiAgICAgIC8vIGJ1dCBpbiBjYXNlIGEgdGhpcmQtcGFydHkgU3RyYXRlZ3kgZG9lc24ndCwgZW5zdXJlIHRoYXQgd2UgaGF2ZSBhXG4gICAgICAvLyBjb25zaXN0ZW50IGZhaWx1cmUgd2hlbiB0aGVyZSdzIG5vIHJlc3BvbnNlIG9yIGFuIGVycm9yIHJlc3BvbnNlLlxuICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywge3VybDogcmVxdWVzdC51cmx9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBoYW5kbGVyLml0ZXJhdGVDYWxsYmFja3MoJ2hhbmRsZXJEaWRFcnJvcicpKSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFjayh7ZXJyb3IsIGV2ZW50LCByZXF1ZXN0fSk7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgIGBXaGlsZSByZXNwb25kaW5nIHRvICcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nLCBgICtcbiAgICAgICAgICAgIGBhbiAke1xuICAgICAgICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IudG9TdHJpbmcoKSA6ICcnXG4gICAgICAgICAgICB9IGVycm9yIG9jY3VycmVkLiBVc2luZyBhIGZhbGxiYWNrIHJlc3BvbnNlIHByb3ZpZGVkIGJ5IGAgK1xuICAgICAgICAgICAgYGEgaGFuZGxlckRpZEVycm9yIHBsdWdpbi5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgaGFuZGxlci5pdGVyYXRlQ2FsbGJhY2tzKCdoYW5kbGVyV2lsbFJlc3BvbmQnKSkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFjayh7ZXZlbnQsIHJlcXVlc3QsIHJlc3BvbnNlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgX2F3YWl0Q29tcGxldGUoXG4gICAgcmVzcG9uc2VEb25lOiBQcm9taXNlPFJlc3BvbnNlPixcbiAgICBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIsXG4gICAgcmVxdWVzdDogUmVxdWVzdCxcbiAgICBldmVudDogRXh0ZW5kYWJsZUV2ZW50LFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgbGV0IGVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2VEb25lO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZ25vcmUgZXJyb3JzLCBhcyByZXNwb25zZSBlcnJvcnMgc2hvdWxkIGJlIGNhdWdodCB2aWEgdGhlIGByZXNwb25zZWBcbiAgICAgIC8vIHByb21pc2UgYWJvdmUuIFRoZSBgZG9uZWAgcHJvbWlzZSB3aWxsIG9ubHkgdGhyb3cgZm9yIGVycm9ycyBpblxuICAgICAgLy8gcHJvbWlzZXMgcGFzc2VkIHRvIGBoYW5kbGVyLndhaXRVbnRpbCgpYC5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgaGFuZGxlci5ydW5DYWxsYmFja3MoJ2hhbmRsZXJEaWRSZXNwb25kJywge1xuICAgICAgICBldmVudCxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGhhbmRsZXIuZG9uZVdhaXRpbmcoKTtcbiAgICB9IGNhdGNoICh3YWl0VW50aWxFcnJvcikge1xuICAgICAgaWYgKHdhaXRVbnRpbEVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSB3YWl0VW50aWxFcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlckRpZENvbXBsZXRlJywge1xuICAgICAgZXZlbnQsXG4gICAgICByZXF1ZXN0LFxuICAgICAgcmVzcG9uc2UsXG4gICAgICBlcnJvcjogZXJyb3IgYXMgRXJyb3IsXG4gICAgfSk7XG4gICAgaGFuZGxlci5kZXN0cm95KCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1N0cmF0ZWd5fTtcblxuLyoqXG4gKiBDbGFzc2VzIGV4dGVuZGluZyB0aGUgYFN0cmF0ZWd5YCBiYXNlZCBjbGFzcyBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kLFxuICogYW5kIGxldmVyYWdlIHRoZSB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn1cbiAqIGFyZyB0byBwZXJmb3JtIGFsbCBmZXRjaGluZyBhbmQgY2FjaGUgbG9naWMsIHdoaWNoIHdpbGwgZW5zdXJlIGFsbCByZWxldmFudFxuICogY2FjaGUsIGNhY2hlIG9wdGlvbnMsIGZldGNoIG9wdGlvbnMgYW5kIHBsdWdpbnMgYXJlIHVzZWQgKHBlciB0aGUgY3VycmVudFxuICogc3RyYXRlZ3kgaW5zdGFuY2UpLlxuICpcbiAqIEBuYW1lIF9oYW5kbGVcbiAqIEBpbnN0YW5jZVxuICogQGFic3RyYWN0XG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyXG4gKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKi9cbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzID0ge1xuICBzdHJhdGVneVN0YXJ0OiAoc3RyYXRlZ3lOYW1lOiBzdHJpbmcsIHJlcXVlc3Q6IFJlcXVlc3QpOiBzdHJpbmcgPT5cbiAgICBgVXNpbmcgJHtzdHJhdGVneU5hbWV9IHRvIHJlc3BvbmQgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgLFxuICBwcmludEZpbmFsUmVzcG9uc2U6IChyZXNwb25zZT86IFJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgdGhlIGZpbmFsIHJlc3BvbnNlIGhlcmUuYCk7XG4gICAgICBsb2dnZXIubG9nKHJlc3BvbnNlIHx8ICdbTm8gcmVzcG9uc2UgcmV0dXJuZWRdJyk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG4gIH0sXG59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQge1N0cmF0ZWd5fSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7U3RyYXRlZ3lIYW5kbGVyfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBbY2FjaGUtZmlyc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jY2FjaGUtZmlyc3QtZmFsbGluZy1iYWNrLXRvLW5ldHdvcmspXG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIEEgY2FjaGUgZmlyc3Qgc3RyYXRlZ3kgaXMgdXNlZnVsIGZvciBhc3NldHMgdGhhdCBoYXZlIGJlZW4gcmV2aXNpb25lZCxcbiAqIHN1Y2ggYXMgVVJMcyBsaWtlIGAvc3R5bGVzL2V4YW1wbGUuYThmNWYxLmNzc2AsIHNpbmNlIHRoZXlcbiAqIGNhbiBiZSBjYWNoZWQgZm9yIGxvbmcgcGVyaW9kcyBvZiB0aW1lLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgQ2FjaGVGaXJzdCBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0OiBSZXF1ZXN0LCBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgbG9ncyA9IFtdO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgZnVuY05hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuXG4gICAgbGV0IGVycm9yOiBFcnJvciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLiBgICtcbiAgICAgICAgICAgIGBXaWxsIHJlc3BvbmQgd2l0aCBhIG5ldHdvcmsgcmVxdWVzdC5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoQW5kQ2FjaGVQdXQocmVxdWVzdCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgbG9ncy5wdXNoKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ3MucHVzaChgVW5hYmxlIHRvIGdldCBhIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9ncy5wdXNoKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICBtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCksXG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICB9XG4gICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7dXJsOiByZXF1ZXN0LnVybCwgZXJyb3J9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB7Q2FjaGVGaXJzdH07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1dvcmtib3hQbHVnaW59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuZXhwb3J0IGNvbnN0IGNhY2hlT2tBbmRPcGFxdWVQbHVnaW46IFdvcmtib3hQbHVnaW4gPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmFsaWQgcmVzcG9uc2UgKHRvIGFsbG93IGNhY2hpbmcpIGlmIHRoZSBzdGF0dXMgaXMgMjAwIChPSykgb3JcbiAgICogMCAob3BhcXVlKS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgKiBAcmV0dXJuIHtSZXNwb25zZXxudWxsfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FjaGVXaWxsVXBkYXRlOiBhc3luYyAoe3Jlc3BvbnNlfSkgPT4ge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQge2NhY2hlT2tBbmRPcGFxdWVQbHVnaW59IGZyb20gJy4vcGx1Z2lucy9jYWNoZU9rQW5kT3BhcXVlUGx1Z2luLmpzJztcbmltcG9ydCB7U3RyYXRlZ3ksIFN0cmF0ZWd5T3B0aW9uc30gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQge1N0cmF0ZWd5SGFuZGxlcn0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtGaXJzdE9wdGlvbnMgZXh0ZW5kcyBTdHJhdGVneU9wdGlvbnMge1xuICBuZXR3b3JrVGltZW91dFNlY29uZHM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYVxuICogW25ldHdvcmsgZmlyc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jbmV0d29yay1maXJzdC1mYWxsaW5nLWJhY2stdG8tY2FjaGUpXG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoaXMgc3RyYXRlZ3kgd2lsbCBjYWNoZSByZXNwb25zZXMgd2l0aCBhIDIwMCBzdGF0dXMgY29kZSBhc1xuICogd2VsbCBhcyBbb3BhcXVlIHJlc3BvbnNlc10oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1yZXNvdXJjZXMtZHVyaW5nLXJ1bnRpbWUvI29wYXF1ZS1yZXNwb25zZXMpLlxuICogT3BhcXVlIHJlc3BvbnNlcyBhcmUgYXJlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyB3aGVyZSB0aGUgcmVzcG9uc2UgZG9lc24ndFxuICogc3VwcG9ydCBbQ09SU10oaHR0cHM6Ly9lbmFibGUtY29ycy5vcmcvKS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCBhbmQgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvd1xuICogYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIE5ldHdvcmtGaXJzdCBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbmV0d29ya1RpbWVvdXRTZWNvbmRzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHNdIElmIHNldCwgYW55IG5ldHdvcmsgcmVxdWVzdHNcbiAgICogdGhhdCBmYWlsIHRvIHJlc3BvbmQgd2l0aGluIHRoZSB0aW1lb3V0IHdpbGwgZmFsbGJhY2sgdG8gdGhlIGNhY2hlLlxuICAgKlxuICAgKiBUaGlzIG9wdGlvbiBjYW4gYmUgdXNlZCB0byBjb21iYXRcbiAgICogXCJbbGllLWZpXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3BlcmZvcm1hbmNlL3Bvb3ItY29ubmVjdGl2aXR5LyNsaWUtZml9XCJcbiAgICogc2NlbmFyaW9zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmV0d29ya0ZpcnN0T3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAvLyBJZiB0aGlzIGluc3RhbmNlIGNvbnRhaW5zIG5vIHBsdWdpbnMgd2l0aCBhICdjYWNoZVdpbGxVcGRhdGUnIGNhbGxiYWNrLFxuICAgIC8vIHByZXBlbmQgdGhlIGBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luYCBwbHVnaW4gdG8gdGhlIHBsdWdpbnMgbGlzdC5cbiAgICBpZiAoIXRoaXMucGx1Z2lucy5zb21lKChwKSA9PiAnY2FjaGVXaWxsVXBkYXRlJyBpbiBwKSkge1xuICAgICAgdGhpcy5wbHVnaW5zLnVuc2hpZnQoY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbik7XG4gICAgfVxuXG4gICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHMgfHwgMDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZSh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMsICdudW1iZXInLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnbmV0d29ya1RpbWVvdXRTZWNvbmRzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0OiBSZXF1ZXN0LCBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgbG9nczogYW55W10gPSBbXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnbWFrZVJlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+W10gPSBbXTtcbiAgICBsZXQgdGltZW91dElkOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICBjb25zdCB7aWQsIHByb21pc2V9ID0gdGhpcy5fZ2V0VGltZW91dFByb21pc2Uoe3JlcXVlc3QsIGxvZ3MsIGhhbmRsZXJ9KTtcbiAgICAgIHRpbWVvdXRJZCA9IGlkO1xuICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXR3b3JrUHJvbWlzZSA9IHRoaXMuX2dldE5ldHdvcmtQcm9taXNlKHtcbiAgICAgIHRpbWVvdXRJZCxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBsb2dzLFxuICAgICAgaGFuZGxlcixcbiAgICB9KTtcblxuICAgIHByb21pc2VzLnB1c2gobmV0d29ya1Byb21pc2UpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLndhaXRVbnRpbChcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIFByb21pc2UucmFjZSgpIHdpbGwgcmVzb2x2ZSBhcyBzb29uIGFzIHRoZSBmaXJzdCBwcm9taXNlIHJlc29sdmVzLlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIChhd2FpdCBoYW5kbGVyLndhaXRVbnRpbChQcm9taXNlLnJhY2UocHJvbWlzZXMpKSkgfHxcbiAgICAgICAgICAvLyBJZiBQcm9taXNlLnJhY2UoKSByZXNvbHZlZCB3aXRoIG51bGwsIGl0IG1pZ2h0IGJlIGR1ZSB0byBhIG5ldHdvcmtcbiAgICAgICAgICAvLyB0aW1lb3V0ICsgYSBjYWNoZSBtaXNzLiBJZiB0aGF0IHdlcmUgdG8gaGFwcGVuLCB3ZSdkIHJhdGhlciB3YWl0IHVudGlsXG4gICAgICAgICAgLy8gdGhlIG5ldHdvcmtQcm9taXNlIHJlc29sdmVzIGluc3RlYWQgb2YgcmV0dXJuaW5nIG51bGwuXG4gICAgICAgICAgLy8gTm90ZSB0aGF0IGl0J3MgZmluZSB0byBhd2FpdCBhbiBhbHJlYWR5LXJlc29sdmVkIHByb21pc2UsIHNvIHdlIGRvbid0XG4gICAgICAgICAgLy8gaGF2ZSB0byBjaGVjayB0byBzZWUgaWYgaXQncyBzdGlsbCBcImluIGZsaWdodFwiLlxuICAgICAgICAgIChhd2FpdCBuZXR3b3JrUHJvbWlzZSlcbiAgICAgICAgKTtcbiAgICAgIH0pKCksXG4gICAgKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSxcbiAgICAgICk7XG4gICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHt1cmw6IHJlcXVlc3QudXJsfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmxvZ3MgQSByZWZlcmVuY2UgdG8gdGhlIGxvZ3MgYXJyYXlcbiAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2dldFRpbWVvdXRQcm9taXNlKHtcbiAgICByZXF1ZXN0LFxuICAgIGxvZ3MsXG4gICAgaGFuZGxlcixcbiAgfToge1xuICAgIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gICAgbG9nczogYW55W107XG4gICAgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyO1xuICB9KToge3Byb21pc2U6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+OyBpZD86IG51bWJlcn0ge1xuICAgIGxldCB0aW1lb3V0SWQ7XG4gICAgY29uc3QgdGltZW91dFByb21pc2U6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+ID0gbmV3IFByb21pc2UoXG4gICAgICAocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBvbk5ldHdvcmtUaW1lb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgICAgIGBUaW1pbmcgb3V0IHRoZSBuZXR3b3JrIHJlc3BvbnNlIGF0IGAgK1xuICAgICAgICAgICAgICAgIGAke3RoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kc30gc2Vjb25kcy5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCkpO1xuICAgICAgICB9O1xuICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgIG9uTmV0d29ya1RpbWVvdXQsXG4gICAgICAgICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMCxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9taXNlOiB0aW1lb3V0UHJvbWlzZSxcbiAgICAgIGlkOiB0aW1lb3V0SWQsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IG9wdGlvbnMudGltZW91dElkXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMubG9ncyBBIHJlZmVyZW5jZSB0byB0aGUgbG9ncyBBcnJheS5cbiAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIF9nZXROZXR3b3JrUHJvbWlzZSh7XG4gICAgdGltZW91dElkLFxuICAgIHJlcXVlc3QsXG4gICAgbG9ncyxcbiAgICBoYW5kbGVyLFxuICB9OiB7XG4gICAgcmVxdWVzdDogUmVxdWVzdDtcbiAgICBsb2dzOiBhbnlbXTtcbiAgICB0aW1lb3V0SWQ/OiBudW1iZXI7XG4gICAgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyO1xuICB9KTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4ge1xuICAgIGxldCBlcnJvcjtcbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5mZXRjaEFuZENhY2hlUHV0KHJlcXVlc3QpO1xuICAgIH0gY2F0Y2ggKGZldGNoRXJyb3IpIHtcbiAgICAgIGlmIChmZXRjaEVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSBmZXRjaEVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgbG9ncy5wdXNoKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9ncy5wdXNoKFxuICAgICAgICAgIGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay4gV2lsbCByZXNwb25kIGAgK1xuICAgICAgICAgICAgYHdpdGggYSBjYWNoZWQgcmVzcG9uc2UuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXJyb3IgfHwgIXJlc3BvbnNlKSB7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgbG9ncy5wdXNoKFxuICAgICAgICAgICAgYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nYCArIGAgY2FjaGUuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ3MucHVzaChgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHtOZXR3b3JrRmlyc3R9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHt0aW1lb3V0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvdGltZW91dC5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCB7U3RyYXRlZ3ksIFN0cmF0ZWd5T3B0aW9uc30gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQge1N0cmF0ZWd5SGFuZGxlcn0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5pbnRlcmZhY2UgTmV0d29ya09ubHlPcHRpb25zXG4gIGV4dGVuZHMgT21pdDxTdHJhdGVneU9wdGlvbnMsICdjYWNoZU5hbWUnIHwgJ21hdGNoT3B0aW9ucyc+IHtcbiAgbmV0d29ya1RpbWVvdXRTZWNvbmRzPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtuZXR3b3JrLW9ubHldKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jbmV0d29yay1vbmx5KVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byB0YWtlIGFkdmFudGFnZSBvZiBhbnlcbiAqIFtXb3JrYm94IHBsdWdpbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L3VzaW5nLXBsdWdpbnMvKS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCB0aGlzIHdpbGwgdGhyb3cgYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIE5ldHdvcmtPbmx5IGV4dGVuZHMgU3RyYXRlZ3kge1xuICBwcml2YXRlIHJlYWRvbmx5IF9uZXR3b3JrVGltZW91dFNlY29uZHM6IG51bWJlcjtcblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICogYGZldGNoKClgIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kc10gSWYgc2V0LCBhbnkgbmV0d29yayByZXF1ZXN0c1xuICAgKiB0aGF0IGZhaWwgdG8gcmVzcG9uZCB3aXRoaW4gdGhlIHRpbWVvdXQgd2lsbCByZXN1bHQgaW4gYSBuZXR3b3JrIGVycm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmV0d29ya09ubHlPcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKTtcblxuICAgIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IG9wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBfaGFuZGxlKHJlcXVlc3Q6IFJlcXVlc3QsIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICBmdW5jTmFtZTogJ19oYW5kbGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBlcnJvcjogRXJyb3IgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHJlc3BvbnNlOiBSZXNwb25zZSB8IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD5bXSA9IFtcbiAgICAgICAgaGFuZGxlci5mZXRjaChyZXF1ZXN0KSxcbiAgICAgIF07XG5cbiAgICAgIGlmICh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMpIHtcbiAgICAgICAgY29uc3QgdGltZW91dFByb21pc2UgPSB0aW1lb3V0KFxuICAgICAgICAgIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDAsXG4gICAgICAgICkgYXMgUHJvbWlzZTx1bmRlZmluZWQ+O1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRpbWVvdXRQcm9taXNlKTtcbiAgICAgIH1cblxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UocHJvbWlzZXMpO1xuICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFRpbWVkIG91dCB0aGUgbmV0d29yayByZXNwb25zZSBhZnRlciBgICtcbiAgICAgICAgICAgIGAke3RoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kc30gc2Vjb25kcy5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSxcbiAgICAgICk7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhgR290IHJlc3BvbnNlIGZyb20gbmV0d29yay5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlci5sb2coYFVuYWJsZSB0byBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrLmApO1xuICAgICAgfVxuICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywge3VybDogcmVxdWVzdC51cmwsIGVycm9yfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQge05ldHdvcmtPbmx5LCBOZXR3b3JrT25seU9wdGlvbnN9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQge2NhY2hlT2tBbmRPcGFxdWVQbHVnaW59IGZyb20gJy4vcGx1Z2lucy9jYWNoZU9rQW5kT3BhcXVlUGx1Z2luLmpzJztcbmltcG9ydCB7U3RyYXRlZ3ksIFN0cmF0ZWd5T3B0aW9uc30gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQge1N0cmF0ZWd5SGFuZGxlcn0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtzdGFsZS13aGlsZS1yZXZhbGlkYXRlXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXN0cmF0ZWdpZXMtb3ZlcnZpZXcvI3N0YWxlLXdoaWxlLXJldmFsaWRhdGUpXG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIFJlc291cmNlcyBhcmUgcmVxdWVzdGVkIGZyb20gYm90aCB0aGUgY2FjaGUgYW5kIHRoZSBuZXR3b3JrIGluIHBhcmFsbGVsLlxuICogVGhlIHN0cmF0ZWd5IHdpbGwgcmVzcG9uZCB3aXRoIHRoZSBjYWNoZWQgdmVyc2lvbiBpZiBhdmFpbGFibGUsIG90aGVyd2lzZVxuICogd2FpdCBmb3IgdGhlIG5ldHdvcmsgcmVzcG9uc2UuIFRoZSBjYWNoZSBpcyB1cGRhdGVkIHdpdGggdGhlIG5ldHdvcmsgcmVzcG9uc2VcbiAqIHdpdGggZWFjaCBzdWNjZXNzZnVsIHJlcXVlc3QuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBzdHJhdGVneSB3aWxsIGNhY2hlIHJlc3BvbnNlcyB3aXRoIGEgMjAwIHN0YXR1cyBjb2RlIGFzXG4gKiB3ZWxsIGFzIFtvcGFxdWUgcmVzcG9uc2VzXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXJlc291cmNlcy1kdXJpbmctcnVudGltZS8jb3BhcXVlLXJlc3BvbnNlcykuXG4gKiBPcGFxdWUgcmVzcG9uc2VzIGFyZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgd2hlcmUgdGhlIHJlc3BvbnNlIGRvZXNuJ3RcbiAqIHN1cHBvcnQgW0NPUlNdKGh0dHBzOi8vZW5hYmxlLWNvcnMub3JnLykuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgYW5kIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3dcbiAqIGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBTdHJhdGVneU9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgLy8gSWYgdGhpcyBpbnN0YW5jZSBjb250YWlucyBubyBwbHVnaW5zIHdpdGggYSAnY2FjaGVXaWxsVXBkYXRlJyBjYWxsYmFjayxcbiAgICAvLyBwcmVwZW5kIHRoZSBgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbmAgcGx1Z2luIHRvIHRoZSBwbHVnaW5zIGxpc3QuXG4gICAgaWYgKCF0aGlzLnBsdWdpbnMuc29tZSgocCkgPT4gJ2NhY2hlV2lsbFVwZGF0ZScgaW4gcCkpIHtcbiAgICAgIHRoaXMucGx1Z2lucy51bnNoaWZ0KGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIF9oYW5kbGUocmVxdWVzdDogUmVxdWVzdCwgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGxvZ3MgPSBbXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaEFuZENhY2hlUHJvbWlzZSA9IGhhbmRsZXIuZmV0Y2hBbmRDYWNoZVB1dChyZXF1ZXN0KS5jYXRjaCgoKSA9PiB7XG4gICAgICAvLyBTd2FsbG93IHRoaXMgZXJyb3IgYmVjYXVzZSBhICduby1yZXNwb25zZScgZXJyb3Igd2lsbCBiZSB0aHJvd24gaW5cbiAgICAgIC8vIG1haW4gaGFuZGxlciByZXR1cm4gZmxvdy4gVGhpcyB3aWxsIGJlIGluIHRoZSBgd2FpdFVudGlsKClgIGZsb3cuXG4gICAgfSk7XG4gICAgdm9pZCBoYW5kbGVyLndhaXRVbnRpbChmZXRjaEFuZENhY2hlUHJvbWlzZSk7XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG5cbiAgICBsZXQgZXJyb3I7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nYCArXG4gICAgICAgICAgICBgIGNhY2hlLiBXaWxsIHVwZGF0ZSB3aXRoIHRoZSBuZXR3b3JrIHJlc3BvbnNlIGluIHRoZSBiYWNrZ3JvdW5kLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICBgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuIGAgK1xuICAgICAgICAgICAgYFdpbGwgd2FpdCBmb3IgdGhlIG5ldHdvcmsgcmVzcG9uc2UuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIE5PVEUocGhpbGlwd2FsdG9uKTogUmVhbGx5IGFubm95aW5nIHRoYXQgd2UgaGF2ZSB0byB0eXBlIGNhc3QgaGVyZS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yMDAwNlxuICAgICAgICByZXNwb25zZSA9IChhd2FpdCBmZXRjaEFuZENhY2hlUHJvbWlzZSkgYXMgUmVzcG9uc2UgfCB1bmRlZmluZWQ7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICBtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCksXG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICB9XG4gICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7dXJsOiByZXF1ZXN0LnVybCwgZXJyb3J9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB7U3RhbGVXaGlsZVJldmFsaWRhdGV9O1xuIiwgImltcG9ydCB7IGRlZmF1bHQgYXMgcGFyYW1zIH0gZnJvbSAnQHBhcmFtcydcbmltcG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIH0gZnJvbSAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UnXG5pbXBvcnQgeyBFeHBpcmF0aW9uUGx1Z2luIH0gZnJvbSAnd29ya2JveC1leHBpcmF0aW9uJ1xuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSwgc2V0Q2F0Y2hIYW5kbGVyIH0gZnJvbSAnd29ya2JveC1yb3V0aW5nJ1xuaW1wb3J0IHsgQ2FjaGVGaXJzdCwgTmV0d29ya0ZpcnN0LCBOZXR3b3JrT25seSwgU3RhbGVXaGlsZVJldmFsaWRhdGUgfSBmcm9tICd3b3JrYm94LXN0cmF0ZWdpZXMnXG5cbnNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTID0gIXBhcmFtcy5kZWJ1Z1xuXG5jb25zdCBkZWJ1ZyA9ICguLi5kYXRhOiBhbnlbXSk6IHZvaWQgPT4ge1xuICAgIGlmIChzZWxmLl9fV0JfRElTQUJMRV9ERVZfTE9HUykge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zb2xlLmRlYnVnKCdbcHdhXScsIC4uLmRhdGEpO1xufVxuXG5jb25zdCBjYWNoZVByZWZpeCA9ICdodWdvLXB3YS0nXG5jb25zdCBmYWxsYmFja3NDYWNoZSA9IGNhY2hlUHJlZml4ICsgJ2ZhbGxiYWNrcydcbi8vIEZpbHRlciB0aGUgaW52YWxpZCBVUkxzLCBzdWNoIGFzIHRlbXBvcmFyeSBVUkxzIGdlbmVyYXRlZCBieSBIdWdvIFBvc3RQcm9ncmVzcy5cbmNvbnN0IHByZWNhY2hlcyA9IHBhcmFtcy5wcmVjYWNoZXMuZmlsdGVyKCh1cmwpID0+IHVybC5pbmRleE9mKCdfX2hfcHBfbDEnKSAhPT0gMClcbmRlYnVnKCdwcmVjYWNoZXMnLCBwcmVjYWNoZXMpXG5cbi8vIFJlZ2lzdGVyIHBhZ2Ugcm91dGUgd2l0aCBOZXR3b3JrRmlyc3Qgc3RyYXRlZ3kuXG4vLyBUaGVyZSB3aWxsIGJlIGEgcHJvYmxlbSB3aXRoIENhY2hlRmlyc3Qgb3IgU3RhbGVXaGlsZVJldmFsaWRhdGUgc3RyYXRlZ3lcbi8vIGlmIHRoZSBjYWNoZWQgcGFnZSBsb2FkcyBubyBsb25nZXIgZXhpc3Qgb3IgZXhwaXJlZCBhc3NldHMsIHN1Y2ggYXMgQ1NTIGFuZCBKUy5cbnJlZ2lzdGVyUm91dGUoXG4gICAgKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZSc7XG4gICAgfSxcbiAgICBuZXcgTmV0d29ya0ZpcnN0KHtcbiAgICAgICAgY2FjaGVOYW1lOiBjYWNoZVByZWZpeCArICdwYWdlcycsXG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbih7XG4gICAgICAgICAgICAgICAgc3RhdHVzZXM6IFsyMDBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbilcblxuLy8gUmVnaXN0ZXIgYXNzZXRzIHJvdXRlcy5cbmNvbnN0IGFzc2V0cyA9IFsnZm9udCcsICdpbWFnZScsICdzY3JpcHQnLCAnc3R5bGUnXVxuZm9yIChsZXQgaSBpbiBhc3NldHMpIHtcbiAgICBjb25zdCBraW5kID0gYXNzZXRzW2ldXG4gICAgY29uc3QgY2FjaGUgPSBwYXJhbXMuY2FjaGVzW2tpbmRdXG4gICAgLy8gUmVtb3ZlIHRoZSB0cmFpbGluZyBzbGFzaCBmcm9tIG9yaWdpbi5cbiAgICBjb25zdCBvcmlnaW5zID0gY2FjaGUub3JpZ2lucyA/IGNhY2hlLm9yaWdpbnMubWFwKChvcmlnaW4pID0+IG9yaWdpbi5yZXBsYWNlKC9cXC8kLywgJycpKSA6IFtdXG4gICAgY29uc3QgY2FjaGVOYW1lID0gY2FjaGVQcmVmaXggKyBraW5kICsgJ3MnXG4gICAgbGV0IHN0cmF0ZWd5ID0gbnVsbFxuICAgIGxldCBwbHVnaW5zID0gW1xuICAgICAgICBuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4oe1xuICAgICAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IEV4cGlyYXRpb25QbHVnaW4oe1xuICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogY2FjaGUubWF4X2FnZSA/PyA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgfSlcbiAgICBdXG4gICAgc3dpdGNoIChjYWNoZS5zdHJhdGVneSkge1xuICAgICAgICBjYXNlICduZXR3b3JrLWZpcnN0JzpcbiAgICAgICAgICAgIHN0cmF0ZWd5ID0gbmV3IE5ldHdvcmtGaXJzdCh7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBjYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdjYWNoZS1maXJzdCc6XG4gICAgICAgICAgICBzdHJhdGVneSA9IG5ldyBDYWNoZUZpcnN0KHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IGNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3N0YWxlLXdoaWxlLXJldmFsaWRhdGUnOlxuICAgICAgICAgICAgc3RyYXRlZ3kgPSBuZXcgU3RhbGVXaGlsZVJldmFsaWRhdGUoe1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBzdHJhdGVneSBmb3Iga2luZCBcIiR7a2luZH1cIjogYCArIGNhY2hlLnN0cmF0ZWd5KVxuICAgIH1cbiAgICByZWdpc3RlclJvdXRlKFxuICAgICAgICAoeyByZXF1ZXN0LCBzYW1lT3JpZ2luLCB1cmwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QuZGVzdGluYXRpb24gIT09IGtpbmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdmFsaWRhdGUgb3JpZ2luc1xuICAgICAgICAgICAgaWYgKHNhbWVPcmlnaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3JpZ2lucyAmJiBvcmlnaW5zLmluY2x1ZGVzKHVybC5vcmlnaW4ucmVwbGFjZSgvXFwvJC8sICcnKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWJ1ZyhgJHt1cmx9IHdpbGwgbm90IGJlIGNhY2hlZC5gKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHN0cmF0ZWd5XG4gICAgKTtcbn1cblxuLy8gUmVnaXN0ZXIgZGVmYXVsdCBoYW5kbGVyLlxucmVnaXN0ZXJSb3V0ZSgoKSA9PiB0cnVlLCBuZXcgTmV0d29ya09ubHkoKSlcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4ge1xuICAgIGV2ZW50LndhaXRVbnRpbChcbiAgICAgICAgc2VsZi5jYWNoZXNcbiAgICAgICAgICAgIC5vcGVuKGZhbGxiYWNrc0NhY2hlKVxuICAgICAgICAgICAgLnRoZW4oY2FjaGUgPT4gY2FjaGUuYWRkQWxsKHByZWNhY2hlcykpXG4gICAgKTtcbn0pO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgb3B0aW9ucyA9PiB7XG4gICAgZGVidWcoJ2NhdGNoIGhhbmRsZXInLCBvcHRpb25zLnJlcXVlc3QpXG4gICAgY29uc3QgZGVzdCA9IG9wdGlvbnMucmVxdWVzdC5kZXN0aW5hdGlvblxuICAgIGNvbnN0IHVybCA9IG9wdGlvbnMucmVxdWVzdC51cmxcbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4oZmFsbGJhY2tzQ2FjaGUpXG5cbiAgICAvLyBSZXR1cm4gdGhlIGNhY2hlZCBpdGVtIGlmIGZvdW5kLlxuICAgIGNvbnN0IGNhY2hlZCA9IGF3YWl0IGNhY2hlLm1hdGNoKHVybClcbiAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRcbiAgICB9XG5cbiAgICBpZiAoZGVzdCA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgICBsZXQgb2ZmbGluZTogUmVzcG9uc2UgfCB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBsYW5nID0gJydcbiAgICAgICAgbGV0IHBhdGhzOiBzdHJpbmdbXVxuICAgICAgICBpZiAodXJsLmluZGV4T2YocGFyYW1zLmJhc2VVUkwpID09PSAwKSB7XG4gICAgICAgICAgICBwYXRocyA9IHVybC5yZXBsYWNlKHBhcmFtcy5iYXNlVVJMLCAnJykuc3BsaXQoJy8nLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aHMgPSAobmV3IFVSTCh1cmwpKS5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJywgMSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aHMubGVuZ3RoID4gMCAmJiBwYXJhbXMubGFuZ3MuaW5jbHVkZXMocGF0aHNbMF0pKSB7XG4gICAgICAgICAgICBsYW5nID0gcGF0aHNbMF1cbiAgICAgICAgICAgIGNvbnN0IG9mZmxpbmVVcmwgPSBgJHtwYXJhbXMuYmFzZVVSTH0ke2xhbmd9L29mZmxpbmUvYFxuICAgICAgICAgICAgZGVidWcoJ2xvYWRpbmcgbXVsdGlsaW5ndWFsIG9mZmxpbmUgcGFnZScsIG9mZmxpbmVVcmwpXG4gICAgICAgICAgICBvZmZsaW5lID0gYXdhaXQgY2FjaGUubWF0Y2gob2ZmbGluZVVybClcbiAgICAgICAgICAgIGlmIChvZmZsaW5lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZmxpbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9mZmxpbmVVcmwgPSBgJHtwYXJhbXMuYmFzZVVSTH1vZmZsaW5lL2BcbiAgICAgICAgZGVidWcoJ2xvYWRpbmcgdGhlIGZhbGxiYWNrIG9mZmxpbmUgcGFnZScsIG9mZmxpbmVVcmwpXG4gICAgICAgIHJldHVybiAoYXdhaXQgY2FjaGUubWF0Y2gob2ZmbGluZVVybCkpXG4gICAgICAgICAgICB8fCBSZXNwb25zZS5lcnJvcigpXG4gICAgfSBlbHNlIGlmIChkZXN0ID09PSAnaW1hZ2UnICYmIHBhcmFtcy5vZmZsaW5lX2ltYWdlKSB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgY2FjaGUubWF0Y2gocGFyYW1zLm9mZmxpbmVfaW1hZ2UpKVxuICAgICAgICAgICAgfHwgUmVzcG9uc2UuZXJyb3IoKVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhIGVycm9yIHJlc3BvbnNlLlxuICAgIHJldHVybiBSZXNwb25zZS5lcnJvcigpXG59O1xuXG5zZXRDYXRjaEhhbmRsZXIoaGFuZGxlcilcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBLHlCQUFDLFNBQVUsS0FBSSxRQUFTLEVBQUMsTUFBTyxFQUFDLFNBQVUsUUFBUSxTQUFVLENBQUMsR0FBRSxVQUFXLGdCQUFlLEdBQUUsT0FBUSxFQUFDLFNBQVUsUUFBUSxTQUFVLENBQUMsR0FBRSxVQUFXLGdCQUFlLEdBQUUsUUFBUyxFQUFDLFNBQVUsUUFBUSxTQUFVLENBQUMsR0FBRSxVQUFXLGdCQUFlLEdBQUUsT0FBUSxFQUFDLFNBQVUsUUFBUSxTQUFVLENBQUMsR0FBRSxVQUFXLGdCQUFlLEVBQUMsR0FBRSxPQUFRLE9BQU0sT0FBUSxDQUFDLE1BQUssSUFBSSxHQUFFLGVBQWdCLElBQUcsV0FBWSxDQUFDLGdCQUFlLGdCQUFlLGVBQWMsOENBQTZDLFdBQVcsRUFBQzs7O0FDQ2pkLE1BQUc7QUFBQyxTQUFLLG9CQUFvQixLQUFHLEVBQUU7QUFBQSxFQUFDLFNBQU8sR0FBRTtBQUFBLEVBQUM7OztBQ2dCdEMsTUFBTSxXQUF1QjtBQUFB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LE1BQ0YsS0FBSyxPQUNBLEtBQUssY0FBYyxFQUNuQixLQUFLLFdBQVMsTUFBTSxPQUFPLFNBQVMsQ0FBQztBQUFBLElBQzlDO0FBQUEsRUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLE9BQU0sWUFBVztBQUM3QixVQUFNLGlCQUFpQixRQUFRLE9BQU87QUFDdEMsVUFBTSxPQUFPLFFBQVEsUUFBUTtBQUM3QixVQUFNLE1BQU0sUUFBUSxRQUFRO0FBQzVCLFVBQU0sUUFBUSxNQUFNLEtBQUssT0FBTyxLQUFLLGNBQWM7QUFHbkQsVUFBTSxTQUFTLE1BQU0sTUFBTSxNQUFNLEdBQUc7QUFDcEMsUUFBSSxRQUFRO0FBQ1IsYUFBTztBQUFBLElBQ1g7QUFFQSxRQUFJLFNBQVMsWUFBWTtBQUNyQixVQUFJO0FBQ0osVUFBSSxPQUFPO0FBQ1gsVUFBSTtBQUNKLFVBQUksSUFBSSxRQUFRLGVBQU8sT0FBTyxNQUFNLEdBQUc7QUFDbkMsZ0JBQVEsSUFBSSxRQUFRLGVBQU8sU0FBUyxFQUFFLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxNQUN4RCxPQUFPO0FBQ0gsZ0JBQVMsSUFBSSxJQUFJLEdBQUcsRUFBRyxTQUFTLFFBQVEsT0FBTyxFQUFFLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxNQUNuRTtBQUNBLFVBQUksTUFBTSxTQUFTLEtBQUssZUFBTyxNQUFNLFNBQVMsTUFBTSxDQUFDLENBQUMsR0FBRztBQUNyRCxlQUFPLE1BQU0sQ0FBQztBQUNkLGNBQU1DLGNBQWEsR0FBRyxlQUFPLE9BQU8sR0FBRyxJQUFJO0FBQzNDLGNBQU0scUNBQXFDQSxXQUFVO0FBQ3JELGtCQUFVLE1BQU0sTUFBTSxNQUFNQSxXQUFVO0FBQ3RDLFlBQUksU0FBUztBQUNULGlCQUFPO0FBQUEsUUFDWDtBQUFBLE1BQ0o7QUFFQSxZQUFNLGFBQWEsR0FBRyxlQUFPLE9BQU87QUFDcEMsWUFBTSxxQ0FBcUMsVUFBVTtBQUNyRCxhQUFRLE1BQU0sTUFBTSxNQUFNLFVBQVUsS0FDN0IsU0FBUyxNQUFNO0FBQUEsSUFDMUIsV0FBVyxTQUFTLFdBQVcsZUFBTyxlQUFlO0FBQ2pELGFBQVEsTUFBTSxNQUFNLE1BQU0sZUFBTyxhQUFhLEtBQ3ZDLFNBQVMsTUFBTTtBQUFBLElBQzFCO0FBR0EsV0FBTyxTQUFTLE1BQU07QUFBQSxFQUMxQjtBQUVBLGtCQUFnQixPQUFPOyIsCiAgIm5hbWVzIjogWyJ0YXJnZXQiLCAiaGFuZGxlciIsICJoYW5kbGVyIiwgImhhbmRsZXIiLCAiaGFuZGxlciIsICJoYW5kbGVyIiwgImRlZmF1bHRSb3V0ZXIiLCAiaGFuZGxlciIsICJkZWZhdWx0Um91dGVyIiwgImhhbmRsZXIiLCAiZXJyb3IiLCAibWVzc2FnZXMiLCAiaGFuZGxlciIsICJtZXNzYWdlcyIsICJoYW5kbGVyIiwgIm1lc3NhZ2VzIiwgImhhbmRsZXIiLCAibWVzc2FnZXMiLCAiaGFuZGxlciIsICJtZXNzYWdlcyIsICJvZmZsaW5lVXJsIl0KfQo=
