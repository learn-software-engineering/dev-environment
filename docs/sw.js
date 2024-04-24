(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // ns-params:@params
  var params_default = { baseURL: "/", bypass: [], caches: { font: { max_age: 2592e3, origins: [], strategy: "network-first" }, image: { max_age: 2592e3, origins: [], strategy: "network-first" }, script: { max_age: 2592e3, origins: [], strategy: "network-first" }, style: { max_age: 2592e3, origins: [], strategy: "network-first" } }, debug: false, langs: ["en", "es"], offline_image: "", precaches: ["/en/offline/", "/es/offline/", "/css/ls.css", "/es/404.html", "/js/ls.js"] };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_version.ts
  try {
    self["workbox:core:7.1.0"] && _();
  } catch (e) {
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/models/messages/messages.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/models/messages/messageGenerator.ts
  var generatorFunction = (code, details = {}) => {
    const message = messages[code];
    if (!message) {
      throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
  };
  var messageGenerator = false ? fallback : generatorFunction;

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_private/WorkboxError.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_private/assert.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_private/getFriendlyURL.ts
  var getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_private/logger.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-cacheable-response/src/_version.ts
  try {
    self["workbox:cacheable-response:7.1.0"] && _();
  } catch (e) {
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-cacheable-response/src/CacheableResponse.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-cacheable-response/src/CacheableResponsePlugin.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_private/dontWaitFor.ts
  function dontWaitFor(promise) {
    void promise.then(() => {
    });
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/jakearchibald/idb@v8.0.0+incompatible/src/util.ts
  var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/jakearchibald/idb@v8.0.0+incompatible/src/wrap-idb-value.ts
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
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
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
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(this.request);
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/jakearchibald/idb@v8.0.0+incompatible/src/entry.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/jakearchibald/idb@v8.0.0+incompatible/src/database-extras.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/jakearchibald/idb@v8.0.0+incompatible/src/async-iterators.ts
  var advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
  var methodMap = {};
  var advanceResults = /* @__PURE__ */ new WeakMap();
  var ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
  var cursorIteratorTraps = {
    get(target, prop) {
      if (!advanceMethodProps.includes(prop))
        return target[prop];
      let cachedFunc = methodMap[prop];
      if (!cachedFunc) {
        cachedFunc = methodMap[prop] = function(...args) {
          advanceResults.set(
            this,
            ittrProxiedCursorToOriginalProxy.get(this)[prop](...args)
          );
        };
      }
      return cachedFunc;
    }
  };
  async function* iterate(...args) {
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
      cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
      return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while (cursor) {
      yield proxiedCursor;
      cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
      advanceResults.delete(proxiedCursor);
    }
  }
  function isIteratorProp(target, prop) {
    return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get(target, prop, receiver) {
      if (isIteratorProp(target, prop))
        return iterate;
      return oldTraps.get(target, prop, receiver);
    },
    has(target, prop) {
      return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    }
  }));

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-expiration/src/_version.ts
  try {
    self["workbox:expiration:7.1.0"] && _();
  } catch (e) {
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-expiration/src/models/CacheTimestampsModel.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-expiration/src/CacheExpiration.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_private/cacheNames.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/models/quotaErrorCallbacks.ts
  var quotaErrorCallbacks = /* @__PURE__ */ new Set();

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/registerQuotaErrorCallback.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-expiration/src/ExpirationPlugin.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-routing/src/_version.ts
  try {
    self["workbox:routing:7.1.0"] && _();
  } catch (e) {
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-routing/src/utils/constants.ts
  var defaultMethod = "GET";
  var validMethods = [
    "DELETE",
    "GET",
    "HEAD",
    "PATCH",
    "POST",
    "PUT"
  ];

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-routing/src/utils/normalizeHandler.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-routing/src/Route.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-routing/src/RegExpRoute.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-routing/src/Router.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-routing/src/utils/getOrCreateDefaultRouter.ts
  var defaultRouter;
  var getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
      defaultRouter = new Router();
      defaultRouter.addFetchListener();
      defaultRouter.addCacheListener();
    }
    return defaultRouter;
  };

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-routing/src/registerRoute.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-routing/src/setCatchHandler.ts
  function setCatchHandler(handler2) {
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.setCatchHandler(handler2);
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_private/cacheMatchIgnoreParams.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_private/Deferred.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_private/executeQuotaErrorCallbacks.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-core/src/_private/timeout.ts
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-strategies/src/_version.ts
  try {
    self["workbox:strategies:7.1.0"] && _();
  } catch (e) {
  }

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-strategies/src/StrategyHandler.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-strategies/src/Strategy.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-strategies/src/utils/messages.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-strategies/src/CacheFirst.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-strategies/src/plugins/cacheOkAndOpaquePlugin.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-strategies/src/NetworkFirst.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-strategies/src/NetworkOnly.ts
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

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/!google!chrome/workbox@v7.1.0+incompatible/packages/workbox-strategies/src/StaleWhileRevalidate.ts
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtcGFyYW1zOkBwYXJhbXMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ZlcnNpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VzLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMS4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMS4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL1dvcmtib3hFcnJvci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9hc3NlcnQudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvbG9nZ2VyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMS4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZS9zcmMvX3ZlcnNpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL3NyYy9DYWNoZWFibGVSZXNwb25zZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2Uvc3JjL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMS4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL2RvbnRXYWl0Rm9yLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2pha2VhcmNoaWJhbGQvaWRiQHY4LjAuMCtpbmNvbXBhdGlibGUvc3JjL3V0aWwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjguMC4wK2luY29tcGF0aWJsZS9zcmMvd3JhcC1pZGItdmFsdWUudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjguMC4wK2luY29tcGF0aWJsZS9zcmMvZW50cnkudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjguMC4wK2luY29tcGF0aWJsZS9zcmMvZGF0YWJhc2UtZXh0cmFzLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2pha2VhcmNoaWJhbGQvaWRiQHY4LjAuMCtpbmNvbXBhdGlibGUvc3JjL2FzeW5jLWl0ZXJhdG9ycy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1leHBpcmF0aW9uL3NyYy9fdmVyc2lvbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1leHBpcmF0aW9uL3NyYy9tb2RlbHMvQ2FjaGVUaW1lc3RhbXBzTW9kZWwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtZXhwaXJhdGlvbi9zcmMvQ2FjaGVFeHBpcmF0aW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMS4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL2NhY2hlTmFtZXMudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2sudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtZXhwaXJhdGlvbi9zcmMvRXhwaXJhdGlvblBsdWdpbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9fdmVyc2lvbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy91dGlscy9jb25zdGFudHMudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtcm91dGluZy9zcmMvdXRpbHMvbm9ybWFsaXplSGFuZGxlci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9Sb3V0ZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9SZWdFeHBSb3V0ZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9Sb3V0ZXIudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtcm91dGluZy9zcmMvdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMS4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL3JlZ2lzdGVyUm91dGUudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtcm91dGluZy9zcmMvc2V0Q2F0Y2hIYW5kbGVyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMS4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXMudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvRGVmZXJyZWQudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvdGltZW91dC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9fdmVyc2lvbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9TdHJhdGVneUhhbmRsZXIudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvU3RyYXRlZ3kudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvdXRpbHMvbWVzc2FnZXMudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvQ2FjaGVGaXJzdC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjEuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4xLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvTmV0d29ya0ZpcnN0LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMS4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL05ldHdvcmtPbmx5LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMS4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL1N0YWxlV2hpbGVSZXZhbGlkYXRlLnRzIiwgIjxzdGRpbj4iXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcImJhc2VVUkxcIjpcIi9cIixcImJ5cGFzc1wiOltdLFwiY2FjaGVzXCI6e1wiZm9udFwiOntcIm1heF9hZ2VcIjoyNTkyMDAwLFwib3JpZ2luc1wiOltdLFwic3RyYXRlZ3lcIjpcIm5ldHdvcmstZmlyc3RcIn0sXCJpbWFnZVwiOntcIm1heF9hZ2VcIjoyNTkyMDAwLFwib3JpZ2luc1wiOltdLFwic3RyYXRlZ3lcIjpcIm5ldHdvcmstZmlyc3RcIn0sXCJzY3JpcHRcIjp7XCJtYXhfYWdlXCI6MjU5MjAwMCxcIm9yaWdpbnNcIjpbXSxcInN0cmF0ZWd5XCI6XCJuZXR3b3JrLWZpcnN0XCJ9LFwic3R5bGVcIjp7XCJtYXhfYWdlXCI6MjU5MjAwMCxcIm9yaWdpbnNcIjpbXSxcInN0cmF0ZWd5XCI6XCJuZXR3b3JrLWZpcnN0XCJ9fSxcImRlYnVnXCI6ZmFsc2UsXCJsYW5nc1wiOltcImVuXCIsXCJlc1wiXSxcIm9mZmxpbmVfaW1hZ2VcIjpcIlwiLFwicHJlY2FjaGVzXCI6W1wiL2VuL29mZmxpbmUvXCIsXCIvZXMvb2ZmbGluZS9cIixcIi9jc3MvbHMuY3NzXCIsXCIvZXMvNDA0Lmh0bWxcIixcIi9qcy9scy5qc1wiXX0iLCAiLy8gQHRzLWlnbm9yZVxudHJ5e3NlbGZbJ3dvcmtib3g6Y29yZTo3LjEuMCddJiZfKCl9Y2F0Y2goZSl7fSIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24uanMnO1xuXG5pbnRlcmZhY2UgTG9nZ2FibGVPYmplY3Qge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XG59XG5pbnRlcmZhY2UgTWVzc2FnZU1hcCB7XG4gIFttZXNzYWdlSUQ6IHN0cmluZ106IChwYXJhbTogTG9nZ2FibGVPYmplY3QpID0+IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzOiBNZXNzYWdlTWFwID0ge1xuICAnaW52YWxpZC12YWx1ZSc6ICh7cGFyYW1OYW1lLCB2YWxpZFZhbHVlRGVzY3JpcHRpb24sIHZhbHVlfSkgPT4ge1xuICAgIGlmICghcGFyYW1OYW1lIHx8ICF2YWxpZFZhbHVlRGVzY3JpcHRpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC12YWx1ZScgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgVGhlICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciB3YXMgZ2l2ZW4gYSB2YWx1ZSB3aXRoIGFuIGAgK1xuICAgICAgYHVuZXhwZWN0ZWQgdmFsdWUuICR7dmFsaWRWYWx1ZURlc2NyaXB0aW9ufSBSZWNlaXZlZCBhIHZhbHVlIG9mIGAgK1xuICAgICAgYCR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfS5gXG4gICAgKTtcbiAgfSxcblxuICAnbm90LWFuLWFycmF5JzogKHttb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWV9KSA9PiB7XG4gICAgaWYgKCFtb2R1bGVOYW1lIHx8ICFjbGFzc05hbWUgfHwgIWZ1bmNOYW1lIHx8ICFwYXJhbU5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnbm90LWFuLWFycmF5JyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIGFuIGFycmF5LmBcbiAgICApO1xuICB9LFxuXG4gICdpbmNvcnJlY3QtdHlwZSc6ICh7XG4gICAgZXhwZWN0ZWRUeXBlLFxuICAgIHBhcmFtTmFtZSxcbiAgICBtb2R1bGVOYW1lLFxuICAgIGNsYXNzTmFtZSxcbiAgICBmdW5jTmFtZSxcbiAgfSkgPT4ge1xuICAgIGlmICghZXhwZWN0ZWRUeXBlIHx8ICFwYXJhbU5hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2luY29ycmVjdC10eXBlJyBlcnJvci5gKTtcbiAgICB9XG4gICAgY29uc3QgY2xhc3NOYW1lU3RyID0gY2xhc3NOYW1lID8gYCR7Y2xhc3NOYW1lfS5gIDogJyc7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfWAgK1xuICAgICAgYCR7ZnVuY05hbWV9KCknIG11c3QgYmUgb2YgdHlwZSAke2V4cGVjdGVkVHlwZX0uYFxuICAgICk7XG4gIH0sXG5cbiAgJ2luY29ycmVjdC1jbGFzcyc6ICh7XG4gICAgZXhwZWN0ZWRDbGFzc05hbWUsXG4gICAgcGFyYW1OYW1lLFxuICAgIG1vZHVsZU5hbWUsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZ1bmNOYW1lLFxuICAgIGlzUmV0dXJuVmFsdWVQcm9ibGVtLFxuICB9KSA9PiB7XG4gICAgaWYgKCFleHBlY3RlZENsYXNzTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW5jb3JyZWN0LWNsYXNzJyBlcnJvci5gKTtcbiAgICB9XG4gICAgY29uc3QgY2xhc3NOYW1lU3RyID0gY2xhc3NOYW1lID8gYCR7Y2xhc3NOYW1lfS5gIDogJyc7XG4gICAgaWYgKGlzUmV0dXJuVmFsdWVQcm9ibGVtKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBgVGhlIHJldHVybiB2YWx1ZSBmcm9tIGAgK1xuICAgICAgICBgJyR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWVTdHJ9JHtmdW5jTmFtZX0oKScgYCArXG4gICAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzc05hbWV9LmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcGFyYW1ldGVyICcke3BhcmFtTmFtZX0nIHBhc3NlZCBpbnRvIGAgK1xuICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfSR7ZnVuY05hbWV9KCknIGAgK1xuICAgICAgYG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgY2xhc3MgJHtleHBlY3RlZENsYXNzTmFtZX0uYFxuICAgICk7XG4gIH0sXG5cbiAgJ21pc3NpbmctYS1tZXRob2QnOiAoe1xuICAgIGV4cGVjdGVkTWV0aG9kLFxuICAgIHBhcmFtTmFtZSxcbiAgICBtb2R1bGVOYW1lLFxuICAgIGNsYXNzTmFtZSxcbiAgICBmdW5jTmFtZSxcbiAgfSkgPT4ge1xuICAgIGlmIChcbiAgICAgICFleHBlY3RlZE1ldGhvZCB8fFxuICAgICAgIXBhcmFtTmFtZSB8fFxuICAgICAgIW1vZHVsZU5hbWUgfHxcbiAgICAgICFjbGFzc05hbWUgfHxcbiAgICAgICFmdW5jTmFtZVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdtaXNzaW5nLWEtbWV0aG9kJyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGV4cGVjdGVkIHRoZSBgICtcbiAgICAgIGAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgdG8gZXhwb3NlIGEgJyR7ZXhwZWN0ZWRNZXRob2R9JyBtZXRob2QuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZSc6ICh7ZW50cnl9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBBbiB1bmV4cGVjdGVkIGVudHJ5IHdhcyBwYXNzZWQgdG8gYCArXG4gICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgVGhlIGVudHJ5IGAgK1xuICAgICAgYCcke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICBlbnRyeSxcbiAgICAgICl9JyBpc24ndCBzdXBwb3J0ZWQuIFlvdSBtdXN0IHN1cHBseSBhbiBhcnJheSBvZiBgICtcbiAgICAgIGBzdHJpbmdzIHdpdGggb25lIG9yIG1vcmUgY2hhcmFjdGVycywgb2JqZWN0cyB3aXRoIGEgdXJsIHByb3BlcnR5IG9yIGAgK1xuICAgICAgYFJlcXVlc3Qgb2JqZWN0cy5gXG4gICAgKTtcbiAgfSxcblxuICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctZW50cmllcyc6ICh7Zmlyc3RFbnRyeSwgc2Vjb25kRW50cnl9KSA9PiB7XG4gICAgaWYgKCFmaXJzdEVudHJ5IHx8ICFzZWNvbmRFbnRyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5leHBlY3RlZCBpbnB1dCB0byBgICsgYCdhZGQtdG8tY2FjaGUtbGlzdC1kdXBsaWNhdGUtZW50cmllcycgZXJyb3IuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGBUd28gb2YgdGhlIGVudHJpZXMgcGFzc2VkIHRvIGAgK1xuICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIGhhZCB0aGUgVVJMIGAgK1xuICAgICAgYCR7Zmlyc3RFbnRyeX0gYnV0IGRpZmZlcmVudCByZXZpc2lvbiBkZXRhaWxzLiBXb3JrYm94IGlzIGAgK1xuICAgICAgYHVuYWJsZSB0byBjYWNoZSBhbmQgdmVyc2lvbiB0aGUgYXNzZXQgY29ycmVjdGx5LiBQbGVhc2UgcmVtb3ZlIG9uZSBgICtcbiAgICAgIGBvZiB0aGUgZW50cmllcy5gXG4gICAgKTtcbiAgfSxcblxuICAncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCc6ICh7dGhyb3duRXJyb3JNZXNzYWdlfSkgPT4ge1xuICAgIGlmICghdGhyb3duRXJyb3JNZXNzYWdlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgKyBgJ3BsdWdpbi1lcnJvci1yZXF1ZXN0LXdpbGwtZmV0Y2gnLCBlcnJvci5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgYEFuIGVycm9yIHdhcyB0aHJvd24gYnkgYSBwbHVnaW5zICdyZXF1ZXN0V2lsbEZldGNoKCknIG1ldGhvZC4gYCArXG4gICAgICBgVGhlIHRocm93biBlcnJvciBtZXNzYWdlIHdhczogJyR7dGhyb3duRXJyb3JNZXNzYWdlfScuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2ludmFsaWQtY2FjaGUtbmFtZSc6ICh7Y2FjaGVOYW1lSWQsIHZhbHVlfSkgPT4ge1xuICAgIGlmICghY2FjaGVOYW1lSWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEV4cGVjdGVkIGEgJ2NhY2hlTmFtZUlkJyBmb3IgZXJyb3IgJ2ludmFsaWQtY2FjaGUtbmFtZSdgLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgYFlvdSBtdXN0IHByb3ZpZGUgYSBuYW1lIGNvbnRhaW5pbmcgYXQgbGVhc3Qgb25lIGNoYXJhY3RlciBmb3IgYCArXG4gICAgICBgc2V0Q2FjaGVEZXRhaWxzKHske2NhY2hlTmFtZUlkfTogJy4uLid9KS4gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgIGAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9J2BcbiAgICApO1xuICB9LFxuXG4gICd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnOiAoe21ldGhvZH0pID0+IHtcbiAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5leHBlY3RlZCBpbnB1dCB0byBgICtcbiAgICAgICAgICBgJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCcgZXJyb3IuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcm91dGUgeW91J3JlIHRyeWluZyB0byB1bnJlZ2lzdGVyIHdhcyBub3QgIHByZXZpb3VzbHkgYCArXG4gICAgICBgcmVnaXN0ZXJlZCBmb3IgdGhlIG1ldGhvZCB0eXBlICcke21ldGhvZH0nLmBcbiAgICApO1xuICB9LFxuXG4gICd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJzogKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHJvdXRlIHlvdSdyZSB0cnlpbmcgdG8gdW5yZWdpc3RlciB3YXMgbm90IHByZXZpb3VzbHkgYCArXG4gICAgICBgcmVnaXN0ZXJlZC5gXG4gICAgKTtcbiAgfSxcblxuICAncXVldWUtcmVwbGF5LWZhaWxlZCc6ICh7bmFtZX0pID0+IHtcbiAgICByZXR1cm4gYFJlcGxheWluZyB0aGUgYmFja2dyb3VuZCBzeW5jIHF1ZXVlICcke25hbWV9JyBmYWlsZWQuYDtcbiAgfSxcblxuICAnZHVwbGljYXRlLXF1ZXVlLW5hbWUnOiAoe25hbWV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgUXVldWUgbmFtZSAnJHtuYW1lfScgaXMgYWxyZWFkeSBiZWluZyB1c2VkLiBgICtcbiAgICAgIGBBbGwgaW5zdGFuY2VzIG9mIGJhY2tncm91bmRTeW5jLlF1ZXVlIG11c3QgYmUgZ2l2ZW4gdW5pcXVlIG5hbWVzLmBcbiAgICApO1xuICB9LFxuXG4gICdleHBpcmVkLXRlc3Qtd2l0aG91dC1tYXgtYWdlJzogKHttZXRob2ROYW1lLCBwYXJhbU5hbWV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgJyR7bWV0aG9kTmFtZX0oKScgbWV0aG9kIGNhbiBvbmx5IGJlIHVzZWQgd2hlbiB0aGUgYCArXG4gICAgICBgJyR7cGFyYW1OYW1lfScgaXMgdXNlZCBpbiB0aGUgY29uc3RydWN0b3IuYFxuICAgICk7XG4gIH0sXG5cbiAgJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnOiAoe21vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGFuIHVuc3VwcG9ydGVkIHR5cGUuIGAgK1xuICAgICAgYFBsZWFzZSBjaGVjayB0aGUgZG9jcyBmb3IgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0gZm9yIGAgK1xuICAgICAgYHZhbGlkIGlucHV0IHR5cGVzLmBcbiAgICApO1xuICB9LFxuXG4gICdub3QtYXJyYXktb2YtY2xhc3MnOiAoe1xuICAgIHZhbHVlLFxuICAgIGV4cGVjdGVkQ2xhc3MsXG4gICAgbW9kdWxlTmFtZSxcbiAgICBjbGFzc05hbWUsXG4gICAgZnVuY05hbWUsXG4gICAgcGFyYW1OYW1lLFxuICB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgc3VwcGxpZWQgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3QgYmUgYW4gYXJyYXkgb2YgYCArXG4gICAgICBgJyR7ZXhwZWN0ZWRDbGFzc30nIG9iamVjdHMuIFJlY2VpdmVkICcke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0sJy4gYCArXG4gICAgICBgUGxlYXNlIGNoZWNrIHRoZSBjYWxsIHRvICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9KCkgYCArXG4gICAgICBgdG8gZml4IHRoZSBpc3N1ZS5gXG4gICAgKTtcbiAgfSxcblxuICAnbWF4LWVudHJpZXMtb3ItYWdlLXJlcXVpcmVkJzogKHttb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgWW91IG11c3QgZGVmaW5lIGVpdGhlciBjb25maWcubWF4RW50cmllcyBvciBjb25maWcubWF4QWdlU2Vjb25kc2AgK1xuICAgICAgYGluICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9YFxuICAgICk7XG4gIH0sXG5cbiAgJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnOiAoe21vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBZb3UgbXVzdCBkZWZpbmUgZWl0aGVyIGNvbmZpZy5zdGF0dXNlcyBvciBjb25maWcuaGVhZGVyc2AgK1xuICAgICAgYGluICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9YFxuICAgICk7XG4gIH0sXG5cbiAgJ2ludmFsaWQtc3RyaW5nJzogKHttb2R1bGVOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIGlmICghcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXN0cmluZycgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgV2hlbiB1c2luZyBzdHJpbmdzLCB0aGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3Qgc3RhcnQgd2l0aCBgICtcbiAgICAgIGAnaHR0cCcgKGZvciBjcm9zcy1vcmlnaW4gbWF0Y2hlcykgb3IgJy8nIChmb3Igc2FtZS1vcmlnaW4gbWF0Y2hlcykuIGAgK1xuICAgICAgYFBsZWFzZSBzZWUgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtmdW5jTmFtZX0oKSBmb3IgYCArXG4gICAgICBgbW9yZSBpbmZvLmBcbiAgICApO1xuICB9LFxuXG4gICdjaGFubmVsLW5hbWUtcmVxdWlyZWQnOiAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBZb3UgbXVzdCBwcm92aWRlIGEgY2hhbm5lbE5hbWUgdG8gY29uc3RydWN0IGEgYCArXG4gICAgICBgQnJvYWRjYXN0Q2FjaGVVcGRhdGUgaW5zdGFuY2UuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2ludmFsaWQtcmVzcG9uc2VzLWFyZS1zYW1lLWFyZ3MnOiAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgYXJndW1lbnRzIHBhc3NlZCBpbnRvIHJlc3BvbnNlc0FyZVNhbWUoKSBhcHBlYXIgdG8gYmUgYCArXG4gICAgICBgaW52YWxpZC4gUGxlYXNlIGVuc3VyZSB2YWxpZCBSZXNwb25zZXMgYXJlIHVzZWQuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2V4cGlyZS1jdXN0b20tY2FjaGVzLW9ubHknOiAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBZb3UgbXVzdCBwcm92aWRlIGEgJ2NhY2hlTmFtZScgcHJvcGVydHkgd2hlbiB1c2luZyB0aGUgYCArXG4gICAgICBgZXhwaXJhdGlvbiBwbHVnaW4gd2l0aCBhIHJ1bnRpbWUgY2FjaGluZyBzdHJhdGVneS5gXG4gICAgKTtcbiAgfSxcblxuICAndW5pdC1tdXN0LWJlLWJ5dGVzJzogKHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9KSA9PiB7XG4gICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAndW5pdC1tdXN0LWJlLWJ5dGVzJyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgJ3VuaXQnIHBvcnRpb24gb2YgdGhlIFJhbmdlIGhlYWRlciBtdXN0IGJlIHNldCB0byAnYnl0ZXMnLiBgICtcbiAgICAgIGBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYFxuICAgICk7XG4gIH0sXG5cbiAgJ3NpbmdsZS1yYW5nZS1vbmx5JzogKHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9KSA9PiB7XG4gICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnc2luZ2xlLXJhbmdlLW9ubHknIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYE11bHRpcGxlIHJhbmdlcyBhcmUgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBhICBzaW5nbGUgc3RhcnQgYCArXG4gICAgICBgdmFsdWUsIGFuZCBvcHRpb25hbCBlbmQgdmFsdWUuIFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIGAgK1xuICAgICAgYFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgXG4gICAgKTtcbiAgfSxcblxuICAnaW52YWxpZC1yYW5nZS12YWx1ZXMnOiAoe25vcm1hbGl6ZWRSYW5nZUhlYWRlcn0pID0+IHtcbiAgICBpZiAoIW5vcm1hbGl6ZWRSYW5nZUhlYWRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXJhbmdlLXZhbHVlcycgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgVGhlIFJhbmdlIGhlYWRlciBpcyBtaXNzaW5nIGJvdGggc3RhcnQgYW5kIGVuZCB2YWx1ZXMuIEF0IGxlYXN0IGAgK1xuICAgICAgYG9uZSBvZiB0aG9zZSB2YWx1ZXMgaXMgbmVlZGVkLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYFxuICAgICk7XG4gIH0sXG5cbiAgJ25vLXJhbmdlLWhlYWRlcic6ICgpID0+IHtcbiAgICByZXR1cm4gYE5vIFJhbmdlIGhlYWRlciB3YXMgZm91bmQgaW4gdGhlIFJlcXVlc3QgcHJvdmlkZWQuYDtcbiAgfSxcblxuICAncmFuZ2Utbm90LXNhdGlzZmlhYmxlJzogKHtzaXplLCBzdGFydCwgZW5kfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHN0YXJ0ICgke3N0YXJ0fSkgYW5kIGVuZCAoJHtlbmR9KSB2YWx1ZXMgaW4gdGhlIFJhbmdlIGFyZSBgICtcbiAgICAgIGBub3Qgc2F0aXNmaWFibGUgYnkgdGhlIGNhY2hlZCByZXNwb25zZSwgd2hpY2ggaXMgJHtzaXplfSBieXRlcy5gXG4gICAgKTtcbiAgfSxcblxuICAnYXR0ZW1wdC10by1jYWNoZS1ub24tZ2V0LXJlcXVlc3QnOiAoe3VybCwgbWV0aG9kfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVW5hYmxlIHRvIGNhY2hlICcke3VybH0nIGJlY2F1c2UgaXQgaXMgYSAnJHttZXRob2R9JyByZXF1ZXN0IGFuZCBgICtcbiAgICAgIGBvbmx5ICdHRVQnIHJlcXVlc3RzIGNhbiBiZSBjYWNoZWQuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2NhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlJzogKHt1cmx9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGVyZSB3YXMgYW4gYXR0ZW1wdCB0byBjYWNoZSAnJHt1cmx9JyBidXQgdGhlIHJlc3BvbnNlIHdhcyBub3QgYCArXG4gICAgICBgZGVmaW5lZC5gXG4gICAgKTtcbiAgfSxcblxuICAnbm8tcmVzcG9uc2UnOiAoe3VybCwgZXJyb3J9KSA9PiB7XG4gICAgbGV0IG1lc3NhZ2UgPSBgVGhlIHN0cmF0ZWd5IGNvdWxkIG5vdCBnZW5lcmF0ZSBhIHJlc3BvbnNlIGZvciAnJHt1cmx9Jy5gO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgbWVzc2FnZSArPSBgIFRoZSB1bmRlcmx5aW5nIGVycm9yIGlzICR7ZXJyb3J9LmA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gICdiYWQtcHJlY2FjaGluZy1yZXNwb25zZSc6ICh7dXJsLCBzdGF0dXN9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgcHJlY2FjaGluZyByZXF1ZXN0IGZvciAnJHt1cmx9JyBmYWlsZWRgICtcbiAgICAgIChzdGF0dXMgPyBgIHdpdGggYW4gSFRUUCBzdGF0dXMgb2YgJHtzdGF0dXN9LmAgOiBgLmApXG4gICAgKTtcbiAgfSxcblxuICAnbm9uLXByZWNhY2hlZC11cmwnOiAoe3VybH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKCcke3VybH0nKSB3YXMgY2FsbGVkLCBidXQgdGhhdCBVUkwgaXMgYCArXG4gICAgICBgbm90IHByZWNhY2hlZC4gUGxlYXNlIHBhc3MgaW4gYSBVUkwgdGhhdCBpcyBwcmVjYWNoZWQgaW5zdGVhZC5gXG4gICAgKTtcbiAgfSxcblxuICAnYWRkLXRvLWNhY2hlLWxpc3QtY29uZmxpY3RpbmctaW50ZWdyaXRpZXMnOiAoe3VybH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFR3byBvZiB0aGUgZW50cmllcyBwYXNzZWQgdG8gYCArXG4gICAgICBgJ3dvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZUNvbnRyb2xsZXIuYWRkVG9DYWNoZUxpc3QoKScgaGFkIHRoZSBVUkwgYCArXG4gICAgICBgJHt1cmx9IHdpdGggZGlmZmVyZW50IGludGVncml0eSB2YWx1ZXMuIFBsZWFzZSByZW1vdmUgb25lIG9mIHRoZW0uYFxuICAgICk7XG4gIH0sXG5cbiAgJ21pc3NpbmctcHJlY2FjaGUtZW50cnknOiAoe2NhY2hlTmFtZSwgdXJsfSkgPT4ge1xuICAgIHJldHVybiBgVW5hYmxlIHRvIGZpbmQgYSBwcmVjYWNoZWQgcmVzcG9uc2UgaW4gJHtjYWNoZU5hbWV9IGZvciAke3VybH0uYDtcbiAgfSxcblxuICAnY3Jvc3Mtb3JpZ2luLWNvcHktcmVzcG9uc2UnOiAoe29yaWdpbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYHdvcmtib3gtY29yZS5jb3B5UmVzcG9uc2UoKSBjYW4gb25seSBiZSB1c2VkIHdpdGggc2FtZS1vcmlnaW4gYCArXG4gICAgICBgcmVzcG9uc2VzLiBJdCB3YXMgcGFzc2VkIGEgcmVzcG9uc2Ugd2l0aCBvcmlnaW4gJHtvcmlnaW59LmBcbiAgICApO1xuICB9LFxuXG4gICdvcGFxdWUtc3RyZWFtcy1zb3VyY2UnOiAoe3R5cGV9KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICBgT25lIG9mIHRoZSB3b3JrYm94LXN0cmVhbXMgc291cmNlcyByZXN1bHRlZCBpbiBhbiBgICtcbiAgICAgIGAnJHt0eXBlfScgcmVzcG9uc2UuYDtcbiAgICBpZiAodHlwZSA9PT0gJ29wYXF1ZXJlZGlyZWN0Jykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYCR7bWVzc2FnZX0gUGxlYXNlIGRvIG5vdCB1c2UgYSBuYXZpZ2F0aW9uIHJlcXVlc3QgdGhhdCByZXN1bHRzIGAgK1xuICAgICAgICBgaW4gYSByZWRpcmVjdCBhcyBhIHNvdXJjZS5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bWVzc2FnZX0gUGxlYXNlIGVuc3VyZSB5b3VyIHNvdXJjZXMgYXJlIENPUlMtZW5hYmxlZC5gO1xuICB9LFxufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5cbmNvbnN0IGZhbGxiYWNrID0gKGNvZGU6IHN0cmluZywgLi4uYXJnczogYW55W10pID0+IHtcbiAgbGV0IG1zZyA9IGNvZGU7XG4gIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICBtc2cgKz0gYCA6OiAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWA7XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cbmNvbnN0IGdlbmVyYXRvckZ1bmN0aW9uID0gKGNvZGU6IHN0cmluZywgZGV0YWlscyA9IHt9KSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlc1tjb2RlXTtcbiAgaWYgKCFtZXNzYWdlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBtZXNzYWdlIGZvciBjb2RlICcke2NvZGV9Jy5gKTtcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlKGRldGFpbHMpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VHZW5lcmF0b3IgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gZmFsbGJhY2sgOiBnZW5lcmF0b3JGdW5jdGlvbjtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bWVzc2FnZUdlbmVyYXRvcn0gZnJvbSAnLi4vbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VHZW5lcmF0b3IuanMnO1xuaW1wb3J0IHtNYXBMaWtlT2JqZWN0fSBmcm9tICcuLi90eXBlcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBXb3JrYm94IGVycm9ycyBzaG91bGQgYmUgdGhyb3duIHdpdGggdGhpcyBjbGFzcy5cbiAqIFRoaXMgYWxsb3dzIHVzZSB0byBlbnN1cmUgdGhlIHR5cGUgZWFzaWx5IGluIHRlc3RzLFxuICogaGVscHMgZGV2ZWxvcGVycyBpZGVudGlmeSBlcnJvcnMgZnJvbSB3b3JrYm94XG4gKiBlYXNpbHkgYW5kIGFsbG93cyB1c2UgdG8gb3B0aW1pc2UgZXJyb3JcbiAqIG1lc3NhZ2VzIGNvcnJlY3RseS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBXb3JrYm94RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGRldGFpbHM/OiBNYXBMaWtlT2JqZWN0O1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JDb2RlIFRoZSBlcnJvciBjb2RlIHRoYXRcbiAgICogaWRlbnRpZmllcyB0aGlzIHBhcnRpY3VsYXIgZXJyb3IuXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gZGV0YWlscyBBbnkgcmVsZXZhbnQgYXJndW1lbnRzXG4gICAqIHRoYXQgd2lsbCBoZWxwIGRldmVsb3BlcnMgaWRlbnRpZnkgaXNzdWVzIHNob3VsZFxuICAgKiBiZSBhZGRlZCBhcyBhIGtleSBvbiB0aGUgY29udGV4dCBvYmplY3QuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZGV0YWlscz86IE1hcExpa2VPYmplY3QpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUdlbmVyYXRvcihlcnJvckNvZGUsIGRldGFpbHMpO1xuXG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBlcnJvckNvZGU7XG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgfVxufVxuXG5leHBvcnQge1dvcmtib3hFcnJvcn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnLi4vX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7TWFwTGlrZU9iamVjdH0gZnJvbSAnLi4vdHlwZXMuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qXG4gKiBUaGlzIG1ldGhvZCB0aHJvd3MgaWYgdGhlIHN1cHBsaWVkIHZhbHVlIGlzIG5vdCBhbiBhcnJheS5cbiAqIFRoZSBkZXN0cnVjdGVkIHZhbHVlcyBhcmUgcmVxdWlyZWQgdG8gcHJvZHVjZSBhIG1lYW5pbmdmdWwgZXJyb3IgZm9yIHVzZXJzLlxuICogVGhlIGRlc3RydWN0ZWQgYW5kIHJlc3RydWN0dXJlZCBvYmplY3QgaXMgc28gaXQncyBjbGVhciB3aGF0IGlzXG4gKiBuZWVkZWQuXG4gKi9cbmNvbnN0IGlzQXJyYXkgPSAodmFsdWU6IGFueVtdLCBkZXRhaWxzOiBNYXBMaWtlT2JqZWN0KSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdub3QtYW4tYXJyYXknLCBkZXRhaWxzKTtcbiAgfVxufTtcblxuY29uc3QgaGFzTWV0aG9kID0gKFxuICBvYmplY3Q6IE1hcExpa2VPYmplY3QsXG4gIGV4cGVjdGVkTWV0aG9kOiBzdHJpbmcsXG4gIGRldGFpbHM6IE1hcExpa2VPYmplY3QsXG4pID0+IHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmplY3RbZXhwZWN0ZWRNZXRob2RdO1xuICBpZiAodHlwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGRldGFpbHNbJ2V4cGVjdGVkTWV0aG9kJ10gPSBleHBlY3RlZE1ldGhvZDtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtaXNzaW5nLWEtbWV0aG9kJywgZGV0YWlscyk7XG4gIH1cbn07XG5cbmNvbnN0IGlzVHlwZSA9IChcbiAgb2JqZWN0OiB1bmtub3duLFxuICBleHBlY3RlZFR5cGU6IHN0cmluZyxcbiAgZGV0YWlsczogTWFwTGlrZU9iamVjdCxcbikgPT4ge1xuICBpZiAodHlwZW9mIG9iamVjdCAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgZGV0YWlsc1snZXhwZWN0ZWRUeXBlJ10gPSBleHBlY3RlZFR5cGU7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW5jb3JyZWN0LXR5cGUnLCBkZXRhaWxzKTtcbiAgfVxufTtcblxuY29uc3QgaXNJbnN0YW5jZSA9IChcbiAgb2JqZWN0OiB1bmtub3duLFxuICAvLyBOZWVkIHRoZSBnZW5lcmFsIHR5cGUgdG8gZG8gdGhlIGNoZWNrIGxhdGVyLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICBleHBlY3RlZENsYXNzOiBGdW5jdGlvbixcbiAgZGV0YWlsczogTWFwTGlrZU9iamVjdCxcbikgPT4ge1xuICBpZiAoIShvYmplY3QgaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgIGRldGFpbHNbJ2V4cGVjdGVkQ2xhc3NOYW1lJ10gPSBleHBlY3RlZENsYXNzLm5hbWU7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW5jb3JyZWN0LWNsYXNzJywgZGV0YWlscyk7XG4gIH1cbn07XG5cbmNvbnN0IGlzT25lT2YgPSAodmFsdWU6IGFueSwgdmFsaWRWYWx1ZXM6IGFueVtdLCBkZXRhaWxzOiBNYXBMaWtlT2JqZWN0KSA9PiB7XG4gIGlmICghdmFsaWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgZGV0YWlsc1sndmFsaWRWYWx1ZURlc2NyaXB0aW9uJ10gPSBgVmFsaWQgdmFsdWVzIGFyZSAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgdmFsaWRWYWx1ZXMsXG4gICAgKX0uYDtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLXZhbHVlJywgZGV0YWlscyk7XG4gIH1cbn07XG5cbmNvbnN0IGlzQXJyYXlPZkNsYXNzID0gKFxuICB2YWx1ZTogYW55LFxuICAvLyBOZWVkIGdlbmVyYWwgdHlwZSB0byBkbyBjaGVjayBsYXRlci5cbiAgZXhwZWN0ZWRDbGFzczogRnVuY3Rpb24sIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgZGV0YWlsczogTWFwTGlrZU9iamVjdCxcbikgPT4ge1xuICBjb25zdCBlcnJvciA9IG5ldyBXb3JrYm94RXJyb3IoJ25vdC1hcnJheS1vZi1jbGFzcycsIGRldGFpbHMpO1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZmluYWxBc3NlcnRFeHBvcnRzID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gbnVsbFxuICAgIDoge1xuICAgICAgICBoYXNNZXRob2QsXG4gICAgICAgIGlzQXJyYXksXG4gICAgICAgIGlzSW5zdGFuY2UsXG4gICAgICAgIGlzT25lT2YsXG4gICAgICAgIGlzVHlwZSxcbiAgICAgICAgaXNBcnJheU9mQ2xhc3MsXG4gICAgICB9O1xuXG5leHBvcnQge2ZpbmFsQXNzZXJ0RXhwb3J0cyBhcyBhc3NlcnR9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmNvbnN0IGdldEZyaWVuZGx5VVJMID0gKHVybDogVVJMIHwgc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgdXJsT2JqID0gbmV3IFVSTChTdHJpbmcodXJsKSwgbG9jYXRpb24uaHJlZik7XG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIzMjNcbiAgLy8gV2Ugd2FudCB0byBpbmNsdWRlIGV2ZXJ5dGhpbmcsIGV4Y2VwdCBmb3IgdGhlIG9yaWdpbiBpZiBpdCdzIHNhbWUtb3JpZ2luLlxuICByZXR1cm4gdXJsT2JqLmhyZWYucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtsb2NhdGlvbi5vcmlnaW59YCksICcnKTtcbn07XG5cbmV4cG9ydCB7Z2V0RnJpZW5kbHlVUkx9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vLyBsb2dnZXIgaXMgdXNlZCBpbnNpZGUgb2YgYm90aCBzZXJ2aWNlIHdvcmtlcnMgYW5kIHRoZSB3aW5kb3cgZ2xvYmFsIHNjb3BlLlxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV29ya2VyR2xvYmFsU2NvcGUge1xuICAgIF9fV0JfRElTQUJMRV9ERVZfTE9HUzogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fV0JfRElTQUJMRV9ERVZfTE9HUzogYm9vbGVhbjtcbiAgfVxufVxuXG50eXBlIExvZ2dlck1ldGhvZHMgPVxuICB8ICdkZWJ1ZydcbiAgfCAnbG9nJ1xuICB8ICd3YXJuJ1xuICB8ICdlcnJvcidcbiAgfCAnZ3JvdXBDb2xsYXBzZWQnXG4gIHwgJ2dyb3VwRW5kJztcblxuY29uc3QgbG9nZ2VyID0gKFxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBudWxsXG4gICAgOiAoKCkgPT4ge1xuICAgICAgICAvLyBEb24ndCBvdmVyd3JpdGUgdGhpcyB2YWx1ZSBpZiBpdCdzIGFscmVhZHkgc2V0LlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L3B1bGwvMjI4NCNpc3N1ZWNvbW1lbnQtNTYwNDcwOTIzXG4gICAgICAgIGlmICghKCdfX1dCX0RJU0FCTEVfREVWX0xPR1MnIGluIGdsb2JhbFRoaXMpKSB7XG4gICAgICAgICAgc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbkdyb3VwID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0aG9kVG9Db2xvck1hcDoge1ttZXRob2ROYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBudWxsfSA9IHtcbiAgICAgICAgICBkZWJ1ZzogYCM3ZjhjOGRgLCAvLyBHcmF5XG4gICAgICAgICAgbG9nOiBgIzJlY2M3MWAsIC8vIEdyZWVuXG4gICAgICAgICAgd2FybjogYCNmMzljMTJgLCAvLyBZZWxsb3dcbiAgICAgICAgICBlcnJvcjogYCNjMDM5MmJgLCAvLyBSZWRcbiAgICAgICAgICBncm91cENvbGxhcHNlZDogYCMzNDk4ZGJgLCAvLyBCbHVlXG4gICAgICAgICAgZ3JvdXBFbmQ6IG51bGwsIC8vIE5vIGNvbG9yZWQgcHJlZml4IG9uIGdyb3VwRW5kXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcHJpbnQgPSBmdW5jdGlvbiAobWV0aG9kOiBMb2dnZXJNZXRob2RzLCBhcmdzOiBhbnlbXSkge1xuICAgICAgICAgIGlmIChzZWxmLl9fV0JfRElTQUJMRV9ERVZfTE9HUykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cENvbGxhcHNlZCcpIHtcbiAgICAgICAgICAgIC8vIFNhZmFyaSBkb2Vzbid0IHByaW50IGFsbCBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCkgYXJndW1lbnRzOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4Mjc1NFxuICAgICAgICAgICAgaWYgKC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgY29uc29sZVttZXRob2RdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgICAgICAgYGJhY2tncm91bmQ6ICR7bWV0aG9kVG9Db2xvck1hcFttZXRob2RdIX1gLFxuICAgICAgICAgICAgYGJvcmRlci1yYWRpdXM6IDAuNWVtYCxcbiAgICAgICAgICAgIGBjb2xvcjogd2hpdGVgLFxuICAgICAgICAgICAgYGZvbnQtd2VpZ2h0OiBib2xkYCxcbiAgICAgICAgICAgIGBwYWRkaW5nOiAycHggMC41ZW1gLFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICAvLyBXaGVuIGluIGEgZ3JvdXAsIHRoZSB3b3JrYm94IHByZWZpeCBpcyBub3QgZGlzcGxheWVkLlxuICAgICAgICAgIGNvbnN0IGxvZ1ByZWZpeCA9IGluR3JvdXAgPyBbXSA6IFsnJWN3b3JrYm94Jywgc3R5bGVzLmpvaW4oJzsnKV07XG5cbiAgICAgICAgICBjb25zb2xlW21ldGhvZF0oLi4ubG9nUHJlZml4LCAuLi5hcmdzKTtcblxuICAgICAgICAgIGlmIChtZXRob2QgPT09ICdncm91cENvbGxhcHNlZCcpIHtcbiAgICAgICAgICAgIGluR3JvdXAgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBFbmQnKSB7XG4gICAgICAgICAgICBpbkdyb3VwID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuICAgICAgICBjb25zdCBhcGk6IHtbbWV0aG9kTmFtZTogc3RyaW5nXTogRnVuY3Rpb259ID0ge307XG4gICAgICAgIGNvbnN0IGxvZ2dlck1ldGhvZHMgPSBPYmplY3Qua2V5cyhtZXRob2RUb0NvbG9yTWFwKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBsb2dnZXJNZXRob2RzKSB7XG4gICAgICAgICAgY29uc3QgbWV0aG9kID0ga2V5IGFzIExvZ2dlck1ldGhvZHM7XG5cbiAgICAgICAgICBhcGlbbWV0aG9kXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgcHJpbnQobWV0aG9kLCBhcmdzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwaSBhcyB1bmtub3duO1xuICAgICAgfSkoKVxuKSBhcyBDb25zb2xlO1xuXG5leHBvcnQge2xvZ2dlcn07XG4iLCAiLy8gQHRzLWlnbm9yZVxudHJ5e3NlbGZbJ3dvcmtib3g6Y2FjaGVhYmxlLXJlc3BvbnNlOjcuMS4wJ10mJl8oKX1jYXRjaChlKXt9IiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVhYmxlUmVzcG9uc2VPcHRpb25zIHtcbiAgc3RhdHVzZXM/OiBudW1iZXJbXTtcbiAgaGVhZGVycz86IHtbaGVhZGVyTmFtZTogc3RyaW5nXTogc3RyaW5nfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gc2V0IHVwIHJ1bGVzIGRldGVybWluaW5nIHdoYXRcbiAqIHN0YXR1cyBjb2RlcyBhbmQvb3IgaGVhZGVycyBuZWVkIHRvIGJlIHByZXNlbnQgaW4gb3JkZXIgZm9yIGFcbiAqIFtgUmVzcG9uc2VgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzcG9uc2UpXG4gKiB0byBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2VcbiAqL1xuY2xhc3MgQ2FjaGVhYmxlUmVzcG9uc2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdGF0dXNlcz86IENhY2hlYWJsZVJlc3BvbnNlT3B0aW9uc1snc3RhdHVzZXMnXTtcbiAgcHJpdmF0ZSByZWFkb25seSBfaGVhZGVycz86IENhY2hlYWJsZVJlc3BvbnNlT3B0aW9uc1snaGVhZGVycyddO1xuXG4gIC8qKlxuICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVhYmxlUmVzcG9uc2UgaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdCBsZWFzdFxuICAgKiBvbmUgb2YgdGhlIGBjb25maWdgIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIElmIGJvdGggYHN0YXR1c2VzYCBhbmQgYGhlYWRlcnNgIGFyZSBzcGVjaWZpZWQsIHRoZW4gYm90aCBjb25kaXRpb25zIG11c3RcbiAgICogYmUgbWV0IGZvciB0aGUgYFJlc3BvbnNlYCB0byBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtjb25maWcuc3RhdHVzZXNdIE9uZSBvciBtb3JlIHN0YXR1cyBjb2RlcyB0aGF0IGFcbiAgICogYFJlc3BvbnNlYCBjYW4gaGF2ZSBhbmQgYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fSBbY29uZmlnLmhlYWRlcnNdIEEgbWFwcGluZyBvZiBoZWFkZXIgbmFtZXNcbiAgICogYW5kIGV4cGVjdGVkIHZhbHVlcyB0aGF0IGEgYFJlc3BvbnNlYCBjYW4gaGF2ZSBhbmQgYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqIElmIG11bHRpcGxlIGhlYWRlcnMgYXJlIHByb3ZpZGVkLCBvbmx5IG9uZSBuZWVkcyB0byBiZSBwcmVzZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIShjb25maWcuc3RhdHVzZXMgfHwgY29uZmlnLmhlYWRlcnMpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZWFibGVSZXNwb25zZScsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLnN0YXR1c2VzKSB7XG4gICAgICAgIGFzc2VydCEuaXNBcnJheShjb25maWcuc3RhdHVzZXMsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcuc3RhdHVzZXMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5oZWFkZXJzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKGNvbmZpZy5oZWFkZXJzLCAnb2JqZWN0Jywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5oZWFkZXJzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdHVzZXMgPSBjb25maWcuc3RhdHVzZXM7XG4gICAgdGhpcy5faGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBhIHJlc3BvbnNlIHRvIHNlZSB3aGV0aGVyIGl0J3MgY2FjaGVhYmxlIG9yIG5vdCwgYmFzZWQgb24gdGhpc1xuICAgKiBvYmplY3QncyBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZSBUaGUgcmVzcG9uc2Ugd2hvc2UgY2FjaGVhYmlsaXR5IGlzIGJlaW5nXG4gICAqIGNoZWNrZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgYFJlc3BvbnNlYCBpcyBjYWNoZWFibGUsIGFuZCBgZmFsc2VgXG4gICAqIG90aGVyd2lzZS5cbiAgICovXG4gIGlzUmVzcG9uc2VDYWNoZWFibGUocmVzcG9uc2U6IFJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXNwb25zZSwgUmVzcG9uc2UsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICBmdW5jTmFtZTogJ2lzUmVzcG9uc2VDYWNoZWFibGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyZXNwb25zZScsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgY2FjaGVhYmxlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLl9zdGF0dXNlcykge1xuICAgICAgY2FjaGVhYmxlID0gdGhpcy5fc3RhdHVzZXMuaW5jbHVkZXMocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGVhZGVycyAmJiBjYWNoZWFibGUpIHtcbiAgICAgIGNhY2hlYWJsZSA9IE9iamVjdC5rZXlzKHRoaXMuX2hlYWRlcnMpLnNvbWUoKGhlYWRlck5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KGhlYWRlck5hbWUpID09PSB0aGlzLl9oZWFkZXJzIVtoZWFkZXJOYW1lXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIWNhY2hlYWJsZSkge1xuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgICAgYFRoZSByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXNwb25zZS51cmwpfScgcmV0dXJuZWQgYSByZXNwb25zZSB0aGF0IGRvZXMgYCArXG4gICAgICAgICAgICBgbm90IG1lZXQgdGhlIGNyaXRlcmlhIGZvciBiZWluZyBjYWNoZWQuYCxcbiAgICAgICAgKTtcblxuICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgY2FjaGVhYmlsaXR5IGNyaXRlcmlhIGhlcmUuYCk7XG4gICAgICAgIGxvZ2dlci5sb2coYENhY2hlYWJsZSBzdGF0dXNlczogYCArIEpTT04uc3RyaW5naWZ5KHRoaXMuX3N0YXR1c2VzKSk7XG4gICAgICAgIGxvZ2dlci5sb2coXG4gICAgICAgICAgYENhY2hlYWJsZSBoZWFkZXJzOiBgICsgSlNPTi5zdHJpbmdpZnkodGhpcy5faGVhZGVycywgbnVsbCwgMiksXG4gICAgICAgICk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuXG4gICAgICAgIGNvbnN0IGxvZ0ZyaWVuZGx5SGVhZGVyczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgbG9nRnJpZW5kbHlIZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlc3BvbnNlIHN0YXR1cyBhbmQgaGVhZGVycyBoZXJlLmApO1xuICAgICAgICBsb2dnZXIubG9nKGBSZXNwb25zZSBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgIGBSZXNwb25zZSBoZWFkZXJzOiBgICsgSlNPTi5zdHJpbmdpZnkobG9nRnJpZW5kbHlIZWFkZXJzLCBudWxsLCAyKSxcbiAgICAgICAgKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG5cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IGZ1bGwgcmVzcG9uc2UgZGV0YWlscyBoZXJlLmApO1xuICAgICAgICBsb2dnZXIubG9nKHJlc3BvbnNlLmhlYWRlcnMpO1xuICAgICAgICBsb2dnZXIubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG5cbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlYWJsZTtcbiAgfVxufVxuXG5leHBvcnQge0NhY2hlYWJsZVJlc3BvbnNlfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7V29ya2JveFBsdWdpbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcbmltcG9ydCB7XG4gIENhY2hlYWJsZVJlc3BvbnNlLFxuICBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnMsXG59IGZyb20gJy4vQ2FjaGVhYmxlUmVzcG9uc2UuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBBIGNsYXNzIGltcGxlbWVudGluZyB0aGUgYGNhY2hlV2lsbFVwZGF0ZWAgbGlmZWN5Y2xlIGNhbGxiYWNrLiBUaGlzIG1ha2VzIGl0XG4gKiBlYXNpZXIgdG8gYWRkIGluIGNhY2hlYWJpbGl0eSBjaGVja3MgdG8gcmVxdWVzdHMgbWFkZSB2aWEgV29ya2JveCdzIGJ1aWx0LWluXG4gKiBzdHJhdGVnaWVzLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZVxuICovXG5jbGFzcyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiBpbXBsZW1lbnRzIFdvcmtib3hQbHVnaW4ge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jYWNoZWFibGVSZXNwb25zZTogQ2FjaGVhYmxlUmVzcG9uc2U7XG5cbiAgLyoqXG4gICAqIFRvIGNvbnN0cnVjdCBhIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbiBpbnN0YW5jZSB5b3UgbXVzdCBwcm92aWRlIGF0XG4gICAqIGxlYXN0IG9uZSBvZiB0aGUgYGNvbmZpZ2AgcHJvcGVydGllcy5cbiAgICpcbiAgICogSWYgYm90aCBgc3RhdHVzZXNgIGFuZCBgaGVhZGVyc2AgYXJlIHNwZWNpZmllZCwgdGhlbiBib3RoIGNvbmRpdGlvbnMgbXVzdFxuICAgKiBiZSBtZXQgZm9yIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2NvbmZpZy5zdGF0dXNlc10gT25lIG9yIG1vcmUgc3RhdHVzIGNvZGVzIHRoYXQgYVxuICAgKiBgUmVzcG9uc2VgIGNhbiBoYXZlIGFuZCBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLHN0cmluZz59IFtjb25maWcuaGVhZGVyc10gQSBtYXBwaW5nIG9mIGhlYWRlciBuYW1lc1xuICAgKiBhbmQgZXhwZWN0ZWQgdmFsdWVzIHRoYXQgYSBgUmVzcG9uc2VgIGNhbiBoYXZlIGFuZCBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICogSWYgbXVsdGlwbGUgaGVhZGVycyBhcmUgcHJvdmlkZWQsIG9ubHkgb25lIG5lZWRzIHRvIGJlIHByZXNlbnQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IENhY2hlYWJsZVJlc3BvbnNlT3B0aW9ucykge1xuICAgIHRoaXMuX2NhY2hlYWJsZVJlc3BvbnNlID0gbmV3IENhY2hlYWJsZVJlc3BvbnNlKGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgKiBAcmV0dXJuIHtSZXNwb25zZXxudWxsfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FjaGVXaWxsVXBkYXRlOiBXb3JrYm94UGx1Z2luWydjYWNoZVdpbGxVcGRhdGUnXSA9IGFzeW5jICh7cmVzcG9uc2V9KSA9PiB7XG4gICAgaWYgKHRoaXMuX2NhY2hlYWJsZVJlc3BvbnNlLmlzUmVzcG9uc2VDYWNoZWFibGUocmVzcG9uc2UpKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG5leHBvcnQge0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2lufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiB0aGF0IHByZXZlbnRzIGEgcHJvbWlzZSBmcm9tIGJlaW5nIGZsYWdnZWQgYXMgdW51c2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiovXG5leHBvcnQgZnVuY3Rpb24gZG9udFdhaXRGb3IocHJvbWlzZTogUHJvbWlzZTxhbnk+KTogdm9pZCB7XG4gIC8vIEVmZmVjdGl2ZSBuby1vcC5cbiAgdm9pZCBwcm9taXNlLnRoZW4oKCkgPT4ge30pO1xufVxuIiwgImV4cG9ydCB0eXBlIENvbnN0cnVjdG9yID0gbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuZXhwb3J0IHR5cGUgRnVuYyA9ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuXG5leHBvcnQgY29uc3QgaW5zdGFuY2VPZkFueSA9IChcbiAgb2JqZWN0OiBhbnksXG4gIGNvbnN0cnVjdG9yczogQ29uc3RydWN0b3JbXSxcbik6IGJvb2xlYW4gPT4gY29uc3RydWN0b3JzLnNvbWUoKGMpID0+IG9iamVjdCBpbnN0YW5jZW9mIGMpO1xuIiwgImltcG9ydCB7XG4gIElEQlBDdXJzb3IsXG4gIElEQlBDdXJzb3JXaXRoVmFsdWUsXG4gIElEQlBEYXRhYmFzZSxcbiAgSURCUEluZGV4LFxuICBJREJQT2JqZWN0U3RvcmUsXG4gIElEQlBUcmFuc2FjdGlvbixcbn0gZnJvbSAnLi9lbnRyeS5qcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciwgRnVuYywgaW5zdGFuY2VPZkFueSB9IGZyb20gJy4vdXRpbC5qcyc7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlczogQ29uc3RydWN0b3JbXTtcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kczogRnVuY1tdO1xuXG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldElkYlByb3h5YWJsZVR5cGVzKCk6IENvbnN0cnVjdG9yW10ge1xuICByZXR1cm4gKFxuICAgIGlkYlByb3h5YWJsZVR5cGVzIHx8XG4gICAgKGlkYlByb3h5YWJsZVR5cGVzID0gW1xuICAgICAgSURCRGF0YWJhc2UsXG4gICAgICBJREJPYmplY3RTdG9yZSxcbiAgICAgIElEQkluZGV4LFxuICAgICAgSURCQ3Vyc29yLFxuICAgICAgSURCVHJhbnNhY3Rpb24sXG4gICAgXSlcbiAgKTtcbn1cblxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpOiBGdW5jW10ge1xuICByZXR1cm4gKFxuICAgIGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgKGN1cnNvckFkdmFuY2VNZXRob2RzID0gW1xuICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5hZHZhbmNlLFxuICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZSxcbiAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWVQcmltYXJ5S2V5LFxuICAgIF0pXG4gICk7XG59XG5cbmNvbnN0IHRyYW5zYWN0aW9uRG9uZU1hcDogV2Vha01hcDxcbiAgSURCVHJhbnNhY3Rpb24sXG4gIFByb21pc2U8dm9pZD5cbj4gPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3Q8VD4ocmVxdWVzdDogSURCUmVxdWVzdDxUPik6IFByb21pc2U8VD4ge1xuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH07XG4gICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCBhcyBhbnkpIGFzIGFueSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgfSk7XG5cbiAgLy8gVGhpcyBtYXBwaW5nIGV4aXN0cyBpbiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYnV0IGRvZXNuJ3QgZG9lc24ndCBleGlzdCBpbiB0cmFuc2Zvcm1DYWNoZS4gVGhpc1xuICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm9taXNlLCByZXF1ZXN0KTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih0eDogSURCVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gIGlmICh0cmFuc2FjdGlvbkRvbmVNYXAuaGFzKHR4KSkgcmV0dXJuO1xuXG4gIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgfTtcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydEVycm9yJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgdHguYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gIH0pO1xuXG4gIC8vIENhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWwuXG4gIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxuXG5sZXQgaWRiUHJveHlUcmFwczogUHJveHlIYW5kbGVyPGFueT4gPSB7XG4gIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgaWYgKHByb3AgPT09ICdkb25lJykgcmV0dXJuIHRyYW5zYWN0aW9uRG9uZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgIC8vIE1ha2UgdHguc3RvcmUgcmV0dXJuIHRoZSBvbmx5IHN0b3JlIGluIHRoZSB0cmFuc2FjdGlvbiwgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGFyZSBtYW55LlxuICAgICAgaWYgKHByb3AgPT09ICdzdG9yZScpIHtcbiAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogcmVjZWl2ZXIub2JqZWN0U3RvcmUocmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1swXSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEVsc2UgdHJhbnNmb3JtIHdoYXRldmVyIHdlIGdldCBiYWNrLlxuICAgIHJldHVybiB3cmFwKHRhcmdldFtwcm9wXSk7XG4gIH0sXG4gIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbiAmJlxuICAgICAgKHByb3AgPT09ICdkb25lJyB8fCBwcm9wID09PSAnc3RvcmUnKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBwcm9wIGluIHRhcmdldDtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVHJhcHMoXG4gIGNhbGxiYWNrOiAoY3VycmVudFRyYXBzOiBQcm94eUhhbmRsZXI8YW55PikgPT4gUHJveHlIYW5kbGVyPGFueT4sXG4pOiB2b2lkIHtcbiAgaWRiUHJveHlUcmFwcyA9IGNhbGxiYWNrKGlkYlByb3h5VHJhcHMpO1xufVxuXG5mdW5jdGlvbiB3cmFwRnVuY3Rpb248VCBleHRlbmRzIEZ1bmM+KGZ1bmM6IFQpOiBGdW5jdGlvbiB7XG4gIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gIC8vIG9ubHkgY3JlYXRlIG9uZSBuZXcgZnVuYyBwZXIgZnVuYy5cblxuICAvLyBDdXJzb3IgbWV0aG9kcyBhcmUgc3BlY2lhbCwgYXMgdGhlIGJlaGF2aW91ciBpcyBhIGxpdHRsZSBtb3JlIGRpZmZlcmVudCB0byBzdGFuZGFyZCBJREIuIEluXG4gIC8vIElEQiwgeW91IGFkdmFuY2UgdGhlIGN1cnNvciBhbmQgd2FpdCBmb3IgYSBuZXcgJ3N1Y2Nlc3MnIG9uIHRoZSBJREJSZXF1ZXN0IHRoYXQgZ2F2ZSB5b3UgdGhlXG4gIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gIC8vIHdpdGggcmVhbCBwcm9taXNlcywgc28gZWFjaCBhZHZhbmNlIG1ldGhvZHMgcmV0dXJucyBhIG5ldyBwcm9taXNlIGZvciB0aGUgY3Vyc29yIG9iamVjdCwgb3JcbiAgLy8gdW5kZWZpbmVkIGlmIHRoZSBlbmQgb2YgdGhlIGN1cnNvciBoYXMgYmVlbiByZWFjaGVkLlxuICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGhpczogSURCUEN1cnNvciwgLi4uYXJnczogUGFyYW1ldGVyczxUPikge1xuICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgIGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKTtcbiAgICAgIHJldHVybiB3cmFwKHRoaXMucmVxdWVzdCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodGhpczogYW55LCAuLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSB7XG4gICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgcmV0dXJuIHdyYXAoZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZTogYW55KTogYW55IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHdyYXBGdW5jdGlvbih2YWx1ZSk7XG5cbiAgLy8gVGhpcyBkb2Vzbid0IHJldHVybiwgaXQganVzdCBjcmVhdGVzIGEgJ2RvbmUnIHByb21pc2UgZm9yIHRoZSB0cmFuc2FjdGlvbixcbiAgLy8gd2hpY2ggaXMgbGF0ZXIgcmV0dXJuZWQgZm9yIHRyYW5zYWN0aW9uLmRvbmUgKHNlZSBpZGJPYmplY3RIYW5kbGVyKS5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG5cbiAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGlkYlByb3h5VHJhcHMpO1xuXG4gIC8vIFJldHVybiB0aGUgc2FtZSB2YWx1ZSBiYWNrIGlmIHdlJ3JlIG5vdCBnb2luZyB0byB0cmFuc2Zvcm0gaXQuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBFbmhhbmNlIGFuIElEQiBvYmplY3Qgd2l0aCBoZWxwZXJzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdGhpbmcgdG8gZW5oYW5jZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAodmFsdWU6IElEQkRhdGFiYXNlKTogSURCUERhdGFiYXNlO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAodmFsdWU6IElEQkluZGV4KTogSURCUEluZGV4O1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAodmFsdWU6IElEQk9iamVjdFN0b3JlKTogSURCUE9iamVjdFN0b3JlO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAodmFsdWU6IElEQlRyYW5zYWN0aW9uKTogSURCUFRyYW5zYWN0aW9uO1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAoXG4gIHZhbHVlOiBJREJPcGVuREJSZXF1ZXN0LFxuKTogUHJvbWlzZTxJREJQRGF0YWJhc2UgfCB1bmRlZmluZWQ+O1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXA8VD4odmFsdWU6IElEQlJlcXVlc3Q8VD4pOiBQcm9taXNlPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXAodmFsdWU6IGFueSk6IGFueSB7XG4gIC8vIFdlIHNvbWV0aW1lcyBnZW5lcmF0ZSBtdWx0aXBsZSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QgKGVnIHdoZW4gY3Vyc29yaW5nKSwgYmVjYXVzZVxuICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KHZhbHVlKTtcblxuICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IHRyYW5zZm9ybWVkIHRoaXMgdmFsdWUgYmVmb3JlLCByZXVzZSB0aGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gIC8vIFRoaXMgaXMgZmFzdGVyLCBidXQgaXQgYWxzbyBwcm92aWRlcyBvYmplY3QgZXF1YWxpdHkuXG4gIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKSByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcblxuICAvLyBOb3QgYWxsIHR5cGVzIGFyZSB0cmFuc2Zvcm1lZC5cbiAgLy8gVGhlc2UgbWF5IGJlIHByaW1pdGl2ZSB0eXBlcywgc28gdGhleSBjYW4ndCBiZSBXZWFrTWFwIGtleXMuXG4gIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICB0cmFuc2Zvcm1DYWNoZS5zZXQodmFsdWUsIG5ld1ZhbHVlKTtcbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KG5ld1ZhbHVlLCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gbmV3VmFsdWU7XG59XG5cbi8qKlxuICogUmV2ZXJ0IGFuIGVuaGFuY2VkIElEQiBvYmplY3QgdG8gYSBwbGFpbiBvbGQgbWlzZXJhYmxlIElEQiBvbmUuXG4gKlxuICogV2lsbCBhbHNvIHJldmVydCBhIHByb21pc2UgYmFjayB0byBhbiBJREJSZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5oYW5jZWQgb2JqZWN0IHRvIHJldmVydC5cbiAqL1xuaW50ZXJmYWNlIFVud3JhcCB7XG4gICh2YWx1ZTogSURCUEN1cnNvcldpdGhWYWx1ZTxhbnksIGFueSwgYW55LCBhbnksIGFueT4pOiBJREJDdXJzb3JXaXRoVmFsdWU7XG4gICh2YWx1ZTogSURCUEN1cnNvcjxhbnksIGFueSwgYW55LCBhbnksIGFueT4pOiBJREJDdXJzb3I7XG4gICh2YWx1ZTogSURCUERhdGFiYXNlKTogSURCRGF0YWJhc2U7XG4gICh2YWx1ZTogSURCUEluZGV4PGFueSwgYW55LCBhbnksIGFueSwgYW55Pik6IElEQkluZGV4O1xuICAodmFsdWU6IElEQlBPYmplY3RTdG9yZTxhbnksIGFueSwgYW55LCBhbnk+KTogSURCT2JqZWN0U3RvcmU7XG4gICh2YWx1ZTogSURCUFRyYW5zYWN0aW9uPGFueSwgYW55LCBhbnk+KTogSURCVHJhbnNhY3Rpb247XG4gIDxUIGV4dGVuZHMgYW55Pih2YWx1ZTogUHJvbWlzZTxJREJQRGF0YWJhc2U8VD4+KTogSURCT3BlbkRCUmVxdWVzdDtcbiAgKHZhbHVlOiBQcm9taXNlPElEQlBEYXRhYmFzZT4pOiBJREJPcGVuREJSZXF1ZXN0O1xuICA8VD4odmFsdWU6IFByb21pc2U8VD4pOiBJREJSZXF1ZXN0PFQ+O1xufVxuZXhwb3J0IGNvbnN0IHVud3JhcDogVW53cmFwID0gKHZhbHVlOiBhbnkpOiBhbnkgPT5cbiAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4iLCAiaW1wb3J0IHsgd3JhcCB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5EQkNhbGxiYWNrczxEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duPiB7XG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgdGhpcyB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSBoYXMgbmV2ZXIgYmVlbiBvcGVuZWQgYmVmb3JlLiBVc2UgaXQgdG8gc3BlY2lmeSB0aGVcbiAgICogc2NoZW1hIGZvciB0aGUgZGF0YWJhc2UuXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhYmFzZSBBIGRhdGFiYXNlIGluc3RhbmNlIHRoYXQgeW91IGNhbiB1c2UgdG8gYWRkL3JlbW92ZSBzdG9yZXMgYW5kIGluZGV4ZXMuXG4gICAqIEBwYXJhbSBvbGRWZXJzaW9uIExhc3QgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2Ugb3BlbmVkIGJ5IHRoZSB1c2VyLlxuICAgKiBAcGFyYW0gbmV3VmVyc2lvbiBXaGF0ZXZlciBuZXcgdmVyc2lvbiB5b3UgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB0cmFuc2FjdGlvbiBUaGUgdHJhbnNhY3Rpb24gZm9yIHRoaXMgdXBncmFkZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgaWYgeW91IG5lZWQgdG8gZ2V0IGRhdGEgZnJvbSBvdGhlciBzdG9yZXMgYXMgcGFydCBvZiBhIG1pZ3JhdGlvbi5cbiAgICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCBvYmplY3QgZm9yIHRoZSBhc3NvY2lhdGVkICd1cGdyYWRlbmVlZGVkJyBldmVudC5cbiAgICovXG4gIHVwZ3JhZGU/KFxuICAgIGRhdGFiYXNlOiBJREJQRGF0YWJhc2U8REJUeXBlcz4sXG4gICAgb2xkVmVyc2lvbjogbnVtYmVyLFxuICAgIG5ld1ZlcnNpb246IG51bWJlciB8IG51bGwsXG4gICAgdHJhbnNhY3Rpb246IElEQlBUcmFuc2FjdGlvbjxcbiAgICAgIERCVHlwZXMsXG4gICAgICBTdG9yZU5hbWVzPERCVHlwZXM+W10sXG4gICAgICAndmVyc2lvbmNoYW5nZSdcbiAgICA+LFxuICAgIGV2ZW50OiBJREJWZXJzaW9uQ2hhbmdlRXZlbnQsXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgdGhlcmUgYXJlIG9sZGVyIHZlcnNpb25zIG9mIHRoZSBkYXRhYmFzZSBvcGVuIG9uIHRoZSBvcmlnaW4sIHNvIHRoaXMgdmVyc2lvbiBjYW5ub3RcbiAgICogb3Blbi5cbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRWZXJzaW9uIFZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIHRoYXQncyBibG9ja2luZyB0aGlzIG9uZS5cbiAgICogQHBhcmFtIGJsb2NrZWRWZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSBiZWluZyBibG9ja2VkICh3aGF0ZXZlciB2ZXJzaW9uIHlvdSBwcm92aWRlZCB0byBgb3BlbkRCYCkuXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IGZvciB0aGUgYXNzb2NpYXRlZCBgYmxvY2tlZGAgZXZlbnQuXG4gICAqL1xuICBibG9ja2VkPyhcbiAgICBjdXJyZW50VmVyc2lvbjogbnVtYmVyLFxuICAgIGJsb2NrZWRWZXJzaW9uOiBudW1iZXIgfCBudWxsLFxuICAgIGV2ZW50OiBJREJWZXJzaW9uQ2hhbmdlRXZlbnQsXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgdGhpcyBjb25uZWN0aW9uIGlzIGJsb2NraW5nIGEgZnV0dXJlIHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIGZyb20gb3BlbmluZy5cbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRWZXJzaW9uIFZlcnNpb24gb2YgdGhlIG9wZW4gZGF0YWJhc2UgKHdoYXRldmVyIHZlcnNpb24geW91IHByb3ZpZGVkIHRvIGBvcGVuREJgKS5cbiAgICogQHBhcmFtIGJsb2NrZWRWZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSB0aGF0J3MgYmVpbmcgYmxvY2tlZC5cbiAgICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCBvYmplY3QgZm9yIHRoZSBhc3NvY2lhdGVkIGB2ZXJzaW9uY2hhbmdlYCBldmVudC5cbiAgICovXG4gIGJsb2NraW5nPyhcbiAgICBjdXJyZW50VmVyc2lvbjogbnVtYmVyLFxuICAgIGJsb2NrZWRWZXJzaW9uOiBudW1iZXIgfCBudWxsLFxuICAgIGV2ZW50OiBJREJWZXJzaW9uQ2hhbmdlRXZlbnQsXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgdGhlIGJyb3dzZXIgYWJub3JtYWxseSB0ZXJtaW5hdGVzIHRoZSBjb25uZWN0aW9uLlxuICAgKiBUaGlzIGlzIG5vdCBjYWxsZWQgd2hlbiBgZGIuY2xvc2UoKWAgaXMgY2FsbGVkLlxuICAgKi9cbiAgdGVybWluYXRlZD8oKTogdm9pZDtcbn1cblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcGVuREI8REJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24+KFxuICBuYW1lOiBzdHJpbmcsXG4gIHZlcnNpb24/OiBudW1iZXIsXG4gIHsgYmxvY2tlZCwgdXBncmFkZSwgYmxvY2tpbmcsIHRlcm1pbmF0ZWQgfTogT3BlbkRCQ2FsbGJhY2tzPERCVHlwZXM+ID0ge30sXG4pOiBQcm9taXNlPElEQlBEYXRhYmFzZTxEQlR5cGVzPj4ge1xuICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4obmFtZSwgdmVyc2lvbik7XG4gIGNvbnN0IG9wZW5Qcm9taXNlID0gd3JhcChyZXF1ZXN0KSBhcyBQcm9taXNlPElEQlBEYXRhYmFzZTxEQlR5cGVzPj47XG5cbiAgaWYgKHVwZ3JhZGUpIHtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZ3JhZGVuZWVkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgIHVwZ3JhZGUoXG4gICAgICAgIHdyYXAocmVxdWVzdC5yZXN1bHQpIGFzIElEQlBEYXRhYmFzZTxEQlR5cGVzPixcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbixcbiAgICAgICAgZXZlbnQubmV3VmVyc2lvbixcbiAgICAgICAgd3JhcChyZXF1ZXN0LnRyYW5zYWN0aW9uISkgYXMgdW5rbm93biBhcyBJREJQVHJhbnNhY3Rpb248XG4gICAgICAgICAgREJUeXBlcyxcbiAgICAgICAgICBTdG9yZU5hbWVzPERCVHlwZXM+W10sXG4gICAgICAgICAgJ3ZlcnNpb25jaGFuZ2UnXG4gICAgICAgID4sXG4gICAgICAgIGV2ZW50LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChibG9ja2VkKSB7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdibG9ja2VkJywgKGV2ZW50KSA9PlxuICAgICAgYmxvY2tlZChcbiAgICAgICAgLy8gQ2FzdGluZyBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0LURPTS1saWItZ2VuZXJhdG9yL3B1bGwvMTQwNVxuICAgICAgICAoZXZlbnQgYXMgSURCVmVyc2lvbkNoYW5nZUV2ZW50KS5vbGRWZXJzaW9uLFxuICAgICAgICAoZXZlbnQgYXMgSURCVmVyc2lvbkNoYW5nZUV2ZW50KS5uZXdWZXJzaW9uLFxuICAgICAgICBldmVudCBhcyBJREJWZXJzaW9uQ2hhbmdlRXZlbnQsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICBvcGVuUHJvbWlzZVxuICAgIC50aGVuKChkYikgPT4ge1xuICAgICAgaWYgKHRlcm1pbmF0ZWQpIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gdGVybWluYXRlZCgpKTtcbiAgICAgIGlmIChibG9ja2luZykge1xuICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKGV2ZW50KSA9PlxuICAgICAgICAgIGJsb2NraW5nKGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7fSk7XG5cbiAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbGV0ZURCQ2FsbGJhY2tzIHtcbiAgLyoqXG4gICAqIENhbGxlZCBpZiB0aGVyZSBhcmUgY29ubmVjdGlvbnMgdG8gdGhpcyBkYXRhYmFzZSBvcGVuLCBzbyBpdCBjYW5ub3QgYmUgZGVsZXRlZC5cbiAgICpcbiAgICogQHBhcmFtIGN1cnJlbnRWZXJzaW9uIFZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIHRoYXQncyBibG9ja2luZyB0aGUgZGVsZXRlIG9wZXJhdGlvbi5cbiAgICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCBvYmplY3QgZm9yIHRoZSBhc3NvY2lhdGVkIGBibG9ja2VkYCBldmVudC5cbiAgICovXG4gIGJsb2NrZWQ/KGN1cnJlbnRWZXJzaW9uOiBudW1iZXIsIGV2ZW50OiBJREJWZXJzaW9uQ2hhbmdlRXZlbnQpOiB2b2lkO1xufVxuXG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlREIoXG4gIG5hbWU6IHN0cmluZyxcbiAgeyBibG9ja2VkIH06IERlbGV0ZURCQ2FsbGJhY2tzID0ge30sXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcblxuICBpZiAoYmxvY2tlZCkge1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsIChldmVudCkgPT5cbiAgICAgIGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgKGV2ZW50IGFzIElEQlZlcnNpb25DaGFuZ2VFdmVudCkub2xkVmVyc2lvbixcbiAgICAgICAgZXZlbnQgYXMgSURCVmVyc2lvbkNoYW5nZUV2ZW50LFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5leHBvcnQgeyB1bndyYXAsIHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuLy8gPT09IFRoZSByZXN0IG9mIHRoaXMgZmlsZSBpcyB0eXBlIGRlZnMgPT09XG50eXBlIEtleVRvS2V5Tm9JbmRleDxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF06IHN0cmluZyBleHRlbmRzIEsgPyBuZXZlciA6IG51bWJlciBleHRlbmRzIEsgPyBuZXZlciA6IEs7XG59O1xudHlwZSBWYWx1ZXNPZjxUPiA9IFQgZXh0ZW5kcyB7IFtLIGluIGtleW9mIFRdOiBpbmZlciBVIH0gPyBVIDogbmV2ZXI7XG50eXBlIEtub3duS2V5czxUPiA9IFZhbHVlc09mPEtleVRvS2V5Tm9JbmRleDxUPj47XG5cbnR5cGUgT21pdDxULCBLPiA9IFBpY2s8VCwgRXhjbHVkZTxrZXlvZiBULCBLPj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgREJTY2hlbWEge1xuICBbczogc3RyaW5nXTogREJTY2hlbWFWYWx1ZTtcbn1cblxuaW50ZXJmYWNlIEluZGV4S2V5cyB7XG4gIFtzOiBzdHJpbmddOiBJREJWYWxpZEtleTtcbn1cblxuaW50ZXJmYWNlIERCU2NoZW1hVmFsdWUge1xuICBrZXk6IElEQlZhbGlkS2V5O1xuICB2YWx1ZTogYW55O1xuICBpbmRleGVzPzogSW5kZXhLZXlzO1xufVxuXG4vKipcbiAqIEV4dHJhY3Qga25vd24gb2JqZWN0IHN0b3JlIG5hbWVzIGZyb20gdGhlIERCIHNjaGVtYSB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBEQlR5cGVzIERCIHNjaGVtYSB0eXBlLCBvciB1bmtub3duIGlmIHRoZSBEQiBpc24ndCB0eXBlZC5cbiAqL1xuZXhwb3J0IHR5cGUgU3RvcmVOYW1lczxEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duPiA9XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSA/IEtub3duS2V5czxEQlR5cGVzPiA6IHN0cmluZztcblxuLyoqXG4gKiBFeHRyYWN0IGRhdGFiYXNlIHZhbHVlIHR5cGVzIGZyb20gdGhlIERCIHNjaGVtYSB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBEQlR5cGVzIERCIHNjaGVtYSB0eXBlLCBvciB1bmtub3duIGlmIHRoZSBEQiBpc24ndCB0eXBlZC5cbiAqIEB0ZW1wbGF0ZSBTdG9yZU5hbWUgTmFtZXMgb2YgdGhlIG9iamVjdCBzdG9yZXMgdG8gZ2V0IHRoZSB0eXBlcyBvZi5cbiAqL1xuZXhwb3J0IHR5cGUgU3RvcmVWYWx1ZTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbj4gPSBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgPyBEQlR5cGVzW1N0b3JlTmFtZV1bJ3ZhbHVlJ10gOiBhbnk7XG5cbi8qKlxuICogRXh0cmFjdCBkYXRhYmFzZSBrZXkgdHlwZXMgZnJvbSB0aGUgREIgc2NoZW1hIHR5cGUuXG4gKlxuICogQHRlbXBsYXRlIERCVHlwZXMgREIgc2NoZW1hIHR5cGUsIG9yIHVua25vd24gaWYgdGhlIERCIGlzbid0IHR5cGVkLlxuICogQHRlbXBsYXRlIFN0b3JlTmFtZSBOYW1lcyBvZiB0aGUgb2JqZWN0IHN0b3JlcyB0byBnZXQgdGhlIHR5cGVzIG9mLlxuICovXG5leHBvcnQgdHlwZSBTdG9yZUtleTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbj4gPSBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgPyBEQlR5cGVzW1N0b3JlTmFtZV1bJ2tleSddIDogSURCVmFsaWRLZXk7XG5cbi8qKlxuICogRXh0cmFjdCB0aGUgbmFtZXMgb2YgaW5kZXhlcyBpbiBjZXJ0YWluIG9iamVjdCBzdG9yZXMgZnJvbSB0aGUgREIgc2NoZW1hIHR5cGUuXG4gKlxuICogQHRlbXBsYXRlIERCVHlwZXMgREIgc2NoZW1hIHR5cGUsIG9yIHVua25vd24gaWYgdGhlIERCIGlzbid0IHR5cGVkLlxuICogQHRlbXBsYXRlIFN0b3JlTmFtZSBOYW1lcyBvZiB0aGUgb2JqZWN0IHN0b3JlcyB0byBnZXQgdGhlIHR5cGVzIG9mLlxuICovXG5leHBvcnQgdHlwZSBJbmRleE5hbWVzPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duLFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuPiA9IERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSA/IGtleW9mIERCVHlwZXNbU3RvcmVOYW1lXVsnaW5kZXhlcyddIDogc3RyaW5nO1xuXG4vKipcbiAqIEV4dHJhY3QgdGhlIHR5cGVzIG9mIGluZGV4ZXMgaW4gY2VydGFpbiBvYmplY3Qgc3RvcmVzIGZyb20gdGhlIERCIHNjaGVtYSB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBEQlR5cGVzIERCIHNjaGVtYSB0eXBlLCBvciB1bmtub3duIGlmIHRoZSBEQiBpc24ndCB0eXBlZC5cbiAqIEB0ZW1wbGF0ZSBTdG9yZU5hbWUgTmFtZXMgb2YgdGhlIG9iamVjdCBzdG9yZXMgdG8gZ2V0IHRoZSB0eXBlcyBvZi5cbiAqIEB0ZW1wbGF0ZSBJbmRleE5hbWUgTmFtZXMgb2YgdGhlIGluZGV4ZXMgdG8gZ2V0IHRoZSB0eXBlcyBvZi5cbiAqL1xuZXhwb3J0IHR5cGUgSW5kZXhLZXk8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPixcbj4gPSBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWFcbiAgPyBJbmRleE5hbWUgZXh0ZW5kcyBrZXlvZiBEQlR5cGVzW1N0b3JlTmFtZV1bJ2luZGV4ZXMnXVxuICAgID8gREJUeXBlc1tTdG9yZU5hbWVdWydpbmRleGVzJ11bSW5kZXhOYW1lXVxuICAgIDogSURCVmFsaWRLZXlcbiAgOiBJREJWYWxpZEtleTtcblxudHlwZSBDdXJzb3JTb3VyY2U8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duLFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gPSBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT5cbiAgPyBJREJQSW5kZXg8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPlxuICA6IElEQlBPYmplY3RTdG9yZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBNb2RlPjtcblxudHlwZSBDdXJzb3JLZXk8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24sXG4+ID0gSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+XG4gID8gSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+XG4gIDogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPjtcblxudHlwZSBJREJQRGF0YWJhc2VFeHRlbmRzID0gT21pdDxcbiAgSURCRGF0YWJhc2UsXG4gICdjcmVhdGVPYmplY3RTdG9yZScgfCAnZGVsZXRlT2JqZWN0U3RvcmUnIHwgJ3RyYW5zYWN0aW9uJyB8ICdvYmplY3RTdG9yZU5hbWVzJ1xuPjtcblxuLyoqXG4gKiBBIHZhcmlhdGlvbiBvZiBET01TdHJpbmdMaXN0IHdpdGggcHJlY2lzZSBzdHJpbmcgdHlwZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUeXBlZERPTVN0cmluZ0xpc3Q8VCBleHRlbmRzIHN0cmluZz4gZXh0ZW5kcyBET01TdHJpbmdMaXN0IHtcbiAgY29udGFpbnMoc3RyaW5nOiBUKTogYm9vbGVhbjtcbiAgaXRlbShpbmRleDogbnVtYmVyKTogVCB8IG51bGw7XG4gIFtpbmRleDogbnVtYmVyXTogVDtcbiAgW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmFibGVJdGVyYXRvcjxUPjtcbn1cblxuaW50ZXJmYWNlIElEQlRyYW5zYWN0aW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgZHVyYWJpbGl0eSBvZiB0aGUgdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFRoZSBkZWZhdWx0IGlzIFwiZGVmYXVsdFwiLiBVc2luZyBcInJlbGF4ZWRcIiBwcm92aWRlcyBiZXR0ZXIgcGVyZm9ybWFuY2UsIGJ1dCB3aXRoIGZld2VyXG4gICAqIGd1YXJhbnRlZXMuIFdlYiBhcHBsaWNhdGlvbnMgYXJlIGVuY291cmFnZWQgdG8gdXNlIFwicmVsYXhlZFwiIGZvciBlcGhlbWVyYWwgZGF0YSBzdWNoIGFzIGNhY2hlc1xuICAgKiBvciBxdWlja2x5IGNoYW5naW5nIHJlY29yZHMsIGFuZCBcInN0cmljdFwiIGluIGNhc2VzIHdoZXJlIHJlZHVjaW5nIHRoZSByaXNrIG9mIGRhdGEgbG9zc1xuICAgKiBvdXR3ZWlnaHMgdGhlIGltcGFjdCB0byBwZXJmb3JtYW5jZSBhbmQgcG93ZXIuXG4gICAqL1xuICBkdXJhYmlsaXR5PzogJ2RlZmF1bHQnIHwgJ3N0cmljdCcgfCAncmVsYXhlZCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUERhdGFiYXNlPERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duPlxuICBleHRlbmRzIElEQlBEYXRhYmFzZUV4dGVuZHMge1xuICAvKipcbiAgICogVGhlIG5hbWVzIG9mIHN0b3JlcyBpbiB0aGUgZGF0YWJhc2UuXG4gICAqL1xuICByZWFkb25seSBvYmplY3RTdG9yZU5hbWVzOiBUeXBlZERPTVN0cmluZ0xpc3Q8U3RvcmVOYW1lczxEQlR5cGVzPj47XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCBzdG9yZS5cbiAgICpcbiAgICogVGhyb3dzIGEgXCJJbnZhbGlkU3RhdGVFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiBub3QgY2FsbGVkIHdpdGhpbiBhbiB1cGdyYWRlIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgY3JlYXRlT2JqZWN0U3RvcmU8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIG5hbWU6IE5hbWUsXG4gICAgb3B0aW9uYWxQYXJhbWV0ZXJzPzogSURCT2JqZWN0U3RvcmVQYXJhbWV0ZXJzLFxuICApOiBJREJQT2JqZWN0U3RvcmU8XG4gICAgREJUeXBlcyxcbiAgICBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4sXG4gICAgTmFtZSxcbiAgICAndmVyc2lvbmNoYW5nZSdcbiAgPjtcbiAgLyoqXG4gICAqIERlbGV0ZXMgdGhlIG9iamVjdCBzdG9yZSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgKlxuICAgKiBUaHJvd3MgYSBcIkludmFsaWRTdGF0ZUVycm9yXCIgRE9NRXhjZXB0aW9uIGlmIG5vdCBjYWxsZWQgd2l0aGluIGFuIHVwZ3JhZGUgdHJhbnNhY3Rpb24uXG4gICAqL1xuICBkZWxldGVPYmplY3RTdG9yZShuYW1lOiBTdG9yZU5hbWVzPERCVHlwZXM+KTogdm9pZDtcbiAgLyoqXG4gICAqIFN0YXJ0IGEgbmV3IHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lcyBUaGUgb2JqZWN0IHN0b3JlKHMpIHRoaXMgdHJhbnNhY3Rpb24gbmVlZHMuXG4gICAqIEBwYXJhbSBtb2RlXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICB0cmFuc2FjdGlvbjxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5JyxcbiAgPihcbiAgICBzdG9yZU5hbWVzOiBOYW1lLFxuICAgIG1vZGU/OiBNb2RlLFxuICAgIG9wdGlvbnM/OiBJREJUcmFuc2FjdGlvbk9wdGlvbnMsXG4gICk6IElEQlBUcmFuc2FjdGlvbjxEQlR5cGVzLCBbTmFtZV0sIE1vZGU+O1xuICB0cmFuc2FjdGlvbjxcbiAgICBOYW1lcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PixcbiAgICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5JyxcbiAgPihcbiAgICBzdG9yZU5hbWVzOiBOYW1lcyxcbiAgICBtb2RlPzogTW9kZSxcbiAgICBvcHRpb25zPzogSURCVHJhbnNhY3Rpb25PcHRpb25zLFxuICApOiBJREJQVHJhbnNhY3Rpb248REJUeXBlcywgTmFtZXMsIE1vZGU+O1xuXG4gIC8vIFNob3J0Y3V0IG1ldGhvZHNcblxuICAvKipcbiAgICogQWRkIGEgdmFsdWUgdG8gYSBzdG9yZS5cbiAgICpcbiAgICogUmVqZWN0cyBpZiBhbiBpdGVtIG9mIGEgZ2l2ZW4ga2V5IGFscmVhZHkgZXhpc3RzIGluIHRoZSBzdG9yZS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgYWRkPE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgdmFsdWU6IFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT4sXG4gICAga2V5PzogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBOYW1lPj47XG4gIC8qKlxuICAgKiBEZWxldGVzIGFsbCByZWNvcmRzIGluIGEgc3RvcmUuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICovXG4gIGNsZWFyKG5hbWU6IFN0b3JlTmFtZXM8REJUeXBlcz4pOiBQcm9taXNlPHZvaWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkgaW4gYSBzdG9yZS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0ga2V5XG4gICAqL1xuICBjb3VudDxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICApOiBQcm9taXNlPG51bWJlcj47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIG51bWJlciBvZiByZWNvcmRzIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeSBpbiBhbiBpbmRleC5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gaW5kZXhOYW1lIE5hbWUgb2YgdGhlIGluZGV4IHdpdGhpbiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIGNvdW50RnJvbUluZGV4PFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgTmFtZT4sXG4gID4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGluZGV4TmFtZTogSW5kZXhOYW1lLFxuICAgIGtleT86IEluZGV4S2V5PERCVHlwZXMsIE5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICk6IFByb21pc2U8bnVtYmVyPjtcbiAgLyoqXG4gICAqIERlbGV0ZXMgcmVjb3JkcyBpbiBhIHN0b3JlIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0ga2V5XG4gICAqL1xuICBkZWxldGU8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBrZXk6IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCByZWNvcmQgaW4gYSBzdG9yZSBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggdW5kZWZpbmVkIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgZ2V0PE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgcXVlcnk6IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCByZWNvcmQgaW4gYW4gaW5kZXggbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gaW5kZXhOYW1lIE5hbWUgb2YgdGhlIGluZGV4IHdpdGhpbiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgZ2V0RnJvbUluZGV4PFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgTmFtZT4sXG4gID4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGluZGV4TmFtZTogSW5kZXhOYW1lLFxuICAgIHF1ZXJ5OiBJbmRleEtleTxEQlR5cGVzLCBOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyBpbiBhIHN0b3JlIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2YgdmFsdWVzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbDxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbGwgdmFsdWVzIGluIGFuIGluZGV4IHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBpbmRleE5hbWUgTmFtZSBvZiB0aGUgaW5kZXggd2l0aGluIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiB2YWx1ZXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsRnJvbUluZGV4PFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgTmFtZT4sXG4gID4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGluZGV4TmFtZTogSW5kZXhOYW1lLFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIE5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXlzIG9mIHJlY29yZHMgaW4gYSBzdG9yZSBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiBrZXlzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbEtleXM8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXlzIG9mIHJlY29yZHMgaW4gYW4gaW5kZXggbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBpbmRleE5hbWUgTmFtZSBvZiB0aGUgaW5kZXggd2l0aGluIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiBrZXlzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbEtleXNGcm9tSW5kZXg8XG4gICAgTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gICAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBOYW1lPixcbiAgPihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgaW5kZXhOYW1lOiBJbmRleE5hbWUsXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHJlY29yZCBpbiBhIHN0b3JlIHRoYXQgbWF0Y2hlcyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggdW5kZWZpbmVkIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgZ2V0S2V5PE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgcXVlcnk6IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHJlY29yZCBpbiBhbiBpbmRleCB0aGF0IG1hdGNoZXMgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gaW5kZXhOYW1lIE5hbWUgb2YgdGhlIGluZGV4IHdpdGhpbiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgZ2V0S2V5RnJvbUluZGV4PFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgTmFtZT4sXG4gID4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGluZGV4TmFtZTogSW5kZXhOYW1lLFxuICAgIHF1ZXJ5OiBJbmRleEtleTxEQlR5cGVzLCBOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUHV0IGFuIGl0ZW0gaW4gdGhlIGRhdGFiYXNlLlxuICAgKlxuICAgKiBSZXBsYWNlcyBhbnkgaXRlbSB3aXRoIHRoZSBzYW1lIGtleS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgcHV0PE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgdmFsdWU6IFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT4sXG4gICAga2V5PzogU3RvcmVLZXk8REJUeXBlcywgTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBOYW1lPj47XG59XG5cbnR5cGUgSURCUFRyYW5zYWN0aW9uRXh0ZW5kcyA9IE9taXQ8XG4gIElEQlRyYW5zYWN0aW9uLFxuICAnZGInIHwgJ29iamVjdFN0b3JlJyB8ICdvYmplY3RTdG9yZU5hbWVzJ1xuPjtcblxuZXhwb3J0IGludGVyZmFjZSBJREJQVHJhbnNhY3Rpb248XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBUcmFuc2FjdGlvbkV4dGVuZHMge1xuICAvKipcbiAgICogVGhlIHRyYW5zYWN0aW9uJ3MgbW9kZS5cbiAgICovXG4gIHJlYWRvbmx5IG1vZGU6IE1vZGU7XG4gIC8qKlxuICAgKiBUaGUgbmFtZXMgb2Ygc3RvcmVzIGluIHNjb3BlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgb2JqZWN0U3RvcmVOYW1lczogVHlwZWRET01TdHJpbmdMaXN0PFR4U3RvcmVzW251bWJlcl0+O1xuICAvKipcbiAgICogVGhlIHRyYW5zYWN0aW9uJ3MgY29ubmVjdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IGRiOiBJREJQRGF0YWJhc2U8REJUeXBlcz47XG4gIC8qKlxuICAgKiBQcm9taXNlIGZvciB0aGUgY29tcGxldGlvbiBvZiB0aGlzIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgZG9uZTogUHJvbWlzZTx2b2lkPjtcbiAgLyoqXG4gICAqIFRoZSBhc3NvY2lhdGVkIG9iamVjdCBzdG9yZSwgaWYgdGhlIHRyYW5zYWN0aW9uIGNvdmVycyBhIHNpbmdsZSBzdG9yZSwgb3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICovXG4gIHJlYWRvbmx5IHN0b3JlOiBUeFN0b3Jlc1sxXSBleHRlbmRzIHVuZGVmaW5lZFxuICAgID8gSURCUE9iamVjdFN0b3JlPERCVHlwZXMsIFR4U3RvcmVzLCBUeFN0b3Jlc1swXSwgTW9kZT5cbiAgICA6IHVuZGVmaW5lZDtcbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSURCT2JqZWN0U3RvcmUgaW4gdGhlIHRyYW5zYWN0aW9uJ3Mgc2NvcGUuXG4gICAqL1xuICBvYmplY3RTdG9yZTxTdG9yZU5hbWUgZXh0ZW5kcyBUeFN0b3Jlc1tudW1iZXJdPihcbiAgICBuYW1lOiBTdG9yZU5hbWUsXG4gICk6IElEQlBPYmplY3RTdG9yZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBNb2RlPjtcbn1cblxudHlwZSBJREJQT2JqZWN0U3RvcmVFeHRlbmRzID0gT21pdDxcbiAgSURCT2JqZWN0U3RvcmUsXG4gIHwgJ3RyYW5zYWN0aW9uJ1xuICB8ICdhZGQnXG4gIHwgJ2NsZWFyJ1xuICB8ICdjb3VudCdcbiAgfCAnY3JlYXRlSW5kZXgnXG4gIHwgJ2RlbGV0ZSdcbiAgfCAnZ2V0J1xuICB8ICdnZXRBbGwnXG4gIHwgJ2dldEFsbEtleXMnXG4gIHwgJ2dldEtleSdcbiAgfCAnaW5kZXgnXG4gIHwgJ29wZW5DdXJzb3InXG4gIHwgJ29wZW5LZXlDdXJzb3InXG4gIHwgJ3B1dCdcbiAgfCAnaW5kZXhOYW1lcydcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUE9iamVjdFN0b3JlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUE9iamVjdFN0b3JlRXh0ZW5kcyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZXMgb2YgaW5kZXhlcyBpbiB0aGUgc3RvcmUuXG4gICAqL1xuICByZWFkb25seSBpbmRleE5hbWVzOiBUeXBlZERPTVN0cmluZ0xpc3Q8SW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+PjtcbiAgLyoqXG4gICAqIFRoZSBhc3NvY2lhdGVkIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgdHJhbnNhY3Rpb246IElEQlBUcmFuc2FjdGlvbjxEQlR5cGVzLCBUeFN0b3JlcywgTW9kZT47XG4gIC8qKlxuICAgKiBBZGQgYSB2YWx1ZSB0byB0aGUgc3RvcmUuXG4gICAqXG4gICAqIFJlamVjdHMgaWYgYW4gaXRlbSBvZiBhIGdpdmVuIGtleSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgc3RvcmUuXG4gICAqL1xuICBhZGQ6IE1vZGUgZXh0ZW5kcyAncmVhZG9ubHknXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IChcbiAgICAgICAgdmFsdWU6IFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgICAgICAga2V5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlLFxuICAgICAgKSA9PiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4+O1xuICAvKipcbiAgICogRGVsZXRlcyBhbGwgcmVjb3JkcyBpbiBzdG9yZS5cbiAgICovXG4gIGNsZWFyOiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5JyA/IHVuZGVmaW5lZCA6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIG51bWJlciBvZiByZWNvcmRzIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeS5cbiAgICovXG4gIGNvdW50KFxuICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICk6IFByb21pc2U8bnVtYmVyPjtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5kZXggaW4gc3RvcmUuXG4gICAqXG4gICAqIFRocm93cyBhbiBcIkludmFsaWRTdGF0ZUVycm9yXCIgRE9NRXhjZXB0aW9uIGlmIG5vdCBjYWxsZWQgd2l0aGluIGFuIHVwZ3JhZGUgdHJhbnNhY3Rpb24uXG4gICAqL1xuICBjcmVhdGVJbmRleDogTW9kZSBleHRlbmRzICd2ZXJzaW9uY2hhbmdlJ1xuICAgID8gPEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPj4oXG4gICAgICAgIG5hbWU6IEluZGV4TmFtZSxcbiAgICAgICAga2V5UGF0aDogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgICAgIG9wdGlvbnM/OiBJREJJbmRleFBhcmFtZXRlcnMsXG4gICAgICApID0+IElEQlBJbmRleDxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+XG4gICAgOiB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBEZWxldGVzIHJlY29yZHMgaW4gc3RvcmUgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5LlxuICAgKi9cbiAgZGVsZXRlOiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5J1xuICAgID8gdW5kZWZpbmVkXG4gICAgOiAoa2V5OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UpID0+IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCByZWNvcmQgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICovXG4gIGdldChcbiAgICBxdWVyeTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyB0aGF0IG1hdGNoIHRoZSBxdWVyeS5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiB2YWx1ZXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsKFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT5bXT47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGtleXMgb2YgcmVjb3JkcyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2Yga2V5cyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGxLZXlzKFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHJlY29yZCB0aGF0IG1hdGNoZXMgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICovXG4gIGdldEtleShcbiAgICBxdWVyeTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogR2V0IGEgcXVlcnkgb2YgYSBnaXZlbiBuYW1lLlxuICAgKi9cbiAgaW5kZXg8SW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+PihcbiAgICBuYW1lOiBJbmRleE5hbWUsXG4gICk6IElEQlBJbmRleDxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+O1xuICAvKipcbiAgICogT3BlbnMgYSBjdXJzb3Igb3ZlciB0aGUgcmVjb3JkcyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggbnVsbCBpZiBubyBtYXRjaGVzIGFyZSBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IElmIG51bGwsIGFsbCByZWNvcmRzIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAqL1xuICBvcGVuQ3Vyc29yKFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBkaXJlY3Rpb24/OiBJREJDdXJzb3JEaXJlY3Rpb24sXG4gICk6IFByb21pc2U8SURCUEN1cnNvcldpdGhWYWx1ZTxcbiAgICBEQlR5cGVzLFxuICAgIFR4U3RvcmVzLFxuICAgIFN0b3JlTmFtZSxcbiAgICB1bmtub3duLFxuICAgIE1vZGVcbiAgPiB8IG51bGw+O1xuICAvKipcbiAgICogT3BlbnMgYSBjdXJzb3Igb3ZlciB0aGUga2V5cyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggbnVsbCBpZiBubyBtYXRjaGVzIGFyZSBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IElmIG51bGwsIGFsbCByZWNvcmRzIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAqL1xuICBvcGVuS2V5Q3Vyc29yKFxuICAgIHF1ZXJ5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBkaXJlY3Rpb24/OiBJREJDdXJzb3JEaXJlY3Rpb24sXG4gICk6IFByb21pc2U8SURCUEN1cnNvcjxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCB1bmtub3duLCBNb2RlPiB8IG51bGw+O1xuICAvKipcbiAgICogUHV0IGFuIGl0ZW0gaW4gdGhlIHN0b3JlLlxuICAgKlxuICAgKiBSZXBsYWNlcyBhbnkgaXRlbSB3aXRoIHRoZSBzYW1lIGtleS5cbiAgICovXG4gIHB1dDogTW9kZSBleHRlbmRzICdyZWFkb25seSdcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKFxuICAgICAgICB2YWx1ZTogU3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+LFxuICAgICAgICBrZXk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICAgICApID0+IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPj47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIHN0b3JlLlxuICAgKi9cbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8XG4gICAgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gICAgICBEQlR5cGVzLFxuICAgICAgVHhTdG9yZXMsXG4gICAgICBTdG9yZU5hbWUsXG4gICAgICB1bmtub3duLFxuICAgICAgTW9kZVxuICAgID5cbiAgPjtcbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciB0aGUgcmVjb3JkcyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgaXRlcmF0ZShcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8XG4gICAgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gICAgICBEQlR5cGVzLFxuICAgICAgVHhTdG9yZXMsXG4gICAgICBTdG9yZU5hbWUsXG4gICAgICB1bmtub3duLFxuICAgICAgTW9kZVxuICAgID5cbiAgPjtcbn1cblxudHlwZSBJREJQSW5kZXhFeHRlbmRzID0gT21pdDxcbiAgSURCSW5kZXgsXG4gIHwgJ29iamVjdFN0b3JlJ1xuICB8ICdjb3VudCdcbiAgfCAnZ2V0J1xuICB8ICdnZXRBbGwnXG4gIHwgJ2dldEFsbEtleXMnXG4gIHwgJ2dldEtleSdcbiAgfCAnb3BlbkN1cnNvcidcbiAgfCAnb3BlbktleUN1cnNvcidcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUEluZGV4PFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+ID0gSW5kZXhOYW1lczxcbiAgICBEQlR5cGVzLFxuICAgIFN0b3JlTmFtZVxuICA+LFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQSW5kZXhFeHRlbmRzIHtcbiAgLyoqXG4gICAqIFRoZSBJREJPYmplY3RTdG9yZSB0aGUgaW5kZXggYmVsb25ncyB0by5cbiAgICovXG4gIHJlYWRvbmx5IG9iamVjdFN0b3JlOiBJREJQT2JqZWN0U3RvcmU8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgTW9kZT47XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgbnVtYmVyIG9mIHJlY29yZHMgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5LlxuICAgKi9cbiAgY291bnQoXG4gICAga2V5PzogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICApOiBQcm9taXNlPG51bWJlcj47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCByZWNvcmQgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICovXG4gIGdldChcbiAgICBxdWVyeTogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyBhbGwgdmFsdWVzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIHZhbHVlcyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGwoXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXlzIG9mIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIGtleXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsS2V5cyhcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXkgb2YgdGhlIGZpcnN0IHJlY29yZCB0aGF0IG1hdGNoZXMgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICovXG4gIGdldEtleShcbiAgICBxdWVyeTogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBPcGVucyBhIGN1cnNvciBvdmVyIHRoZSByZWNvcmRzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCBudWxsIGlmIG5vIG1hdGNoZXMgYXJlIGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnkgSWYgbnVsbCwgYWxsIHJlY29yZHMgbWF0Y2guXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICovXG4gIG9wZW5DdXJzb3IoXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBQcm9taXNlPElEQlBDdXJzb3JXaXRoVmFsdWU8XG4gICAgREJUeXBlcyxcbiAgICBUeFN0b3JlcyxcbiAgICBTdG9yZU5hbWUsXG4gICAgSW5kZXhOYW1lLFxuICAgIE1vZGVcbiAgPiB8IG51bGw+O1xuICAvKipcbiAgICogT3BlbnMgYSBjdXJzb3Igb3ZlciB0aGUga2V5cyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggbnVsbCBpZiBubyBtYXRjaGVzIGFyZSBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IElmIG51bGwsIGFsbCByZWNvcmRzIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAqL1xuICBvcGVuS2V5Q3Vyc29yKFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGRpcmVjdGlvbj86IElEQkN1cnNvckRpcmVjdGlvbixcbiAgKTogUHJvbWlzZTxJREJQQ3Vyc29yPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT4gfCBudWxsPjtcbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciB0aGUgaW5kZXguXG4gICAqL1xuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxcbiAgICBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZTxcbiAgICAgIERCVHlwZXMsXG4gICAgICBUeFN0b3JlcyxcbiAgICAgIFN0b3JlTmFtZSxcbiAgICAgIEluZGV4TmFtZSxcbiAgICAgIE1vZGVcbiAgICA+XG4gID47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIG51bGwgaWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgaXRlcmF0ZShcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBkaXJlY3Rpb24/OiBJREJDdXJzb3JEaXJlY3Rpb24sXG4gICk6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxcbiAgICBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZTxcbiAgICAgIERCVHlwZXMsXG4gICAgICBUeFN0b3JlcyxcbiAgICAgIFN0b3JlTmFtZSxcbiAgICAgIEluZGV4TmFtZSxcbiAgICAgIE1vZGVcbiAgICA+XG4gID47XG59XG5cbnR5cGUgSURCUEN1cnNvckV4dGVuZHMgPSBPbWl0PFxuICBJREJDdXJzb3IsXG4gIHwgJ2tleSdcbiAgfCAncHJpbWFyeUtleSdcbiAgfCAnc291cmNlJ1xuICB8ICdhZHZhbmNlJ1xuICB8ICdjb250aW51ZSdcbiAgfCAnY29udGludWVQcmltYXJ5S2V5J1xuICB8ICdkZWxldGUnXG4gIHwgJ3VwZGF0ZSdcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUEN1cnNvcjxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24gPSB1bmtub3duLFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQQ3Vyc29yRXh0ZW5kcyB7XG4gIC8qKlxuICAgKiBUaGUga2V5IG9mIHRoZSBjdXJyZW50IGluZGV4IG9yIG9iamVjdCBzdG9yZSBpdGVtLlxuICAgKi9cbiAgcmVhZG9ubHkga2V5OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+O1xuICAvKipcbiAgICogVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3Qgc3RvcmUgaXRlbS5cbiAgICovXG4gIHJlYWRvbmx5IHByaW1hcnlLZXk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT47XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJREJPYmplY3RTdG9yZSBvciBJREJJbmRleCB0aGUgY3Vyc29yIHdhcyBvcGVuZWQgZnJvbS5cbiAgICovXG4gIHJlYWRvbmx5IHNvdXJjZTogQ3Vyc29yU291cmNlPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT47XG4gIC8qKlxuICAgKiBBZHZhbmNlcyB0aGUgY3Vyc29yIGEgZ2l2ZW4gbnVtYmVyIG9mIHJlY29yZHMuXG4gICAqXG4gICAqIFJlc29sdmVzIHRvIG51bGwgaWYgbm8gbWF0Y2hpbmcgcmVjb3JkcyByZW1haW4uXG4gICAqL1xuICBhZHZhbmNlPFQ+KHRoaXM6IFQsIGNvdW50OiBudW1iZXIpOiBQcm9taXNlPFQgfCBudWxsPjtcbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIGN1cnNvciBieSBvbmUgcmVjb3JkICh1bmxlc3MgJ2tleScgaXMgcHJvdmlkZWQpLlxuICAgKlxuICAgKiBSZXNvbHZlcyB0byBudWxsIGlmIG5vIG1hdGNoaW5nIHJlY29yZHMgcmVtYWluLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWU8VD4oXG4gICAgdGhpczogVCxcbiAgICBrZXk/OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+LFxuICApOiBQcm9taXNlPFQgfCBudWxsPjtcbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIGN1cnNvciBieSBnaXZlbiBrZXlzLlxuICAgKlxuICAgKiBUaGUgb3BlcmF0aW9uIGlzICdhbmQnIFx1MjAxMyBib3RoIGtleXMgbXVzdCBiZSBzYXRpc2ZpZWQuXG4gICAqXG4gICAqIFJlc29sdmVzIHRvIG51bGwgaWYgbm8gbWF0Y2hpbmcgcmVjb3JkcyByZW1haW4uXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgQWR2YW5jZSB0byB0aGUgaW5kZXggb3Igb2JqZWN0IHN0b3JlIHdpdGggYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqIEBwYXJhbSBwcmltYXJ5S2V5IGFuZCB3aGVyZSB0aGUgb2JqZWN0IHN0b3JlIGhhcyBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICovXG4gIGNvbnRpbnVlUHJpbWFyeUtleTxUPihcbiAgICB0aGlzOiBULFxuICAgIGtleTogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPixcbiAgICBwcmltYXJ5S2V5OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+LFxuICApOiBQcm9taXNlPFQgfCBudWxsPjtcbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgY3VycmVudCByZWNvcmQuXG4gICAqL1xuICBkZWxldGU6IE1vZGUgZXh0ZW5kcyAncmVhZG9ubHknID8gdW5kZWZpbmVkIDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgLyoqXG4gICAqIFVwZGF0ZWQgdGhlIGN1cnJlbnQgcmVjb3JkLlxuICAgKi9cbiAgdXBkYXRlOiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5J1xuICAgID8gdW5kZWZpbmVkXG4gICAgOiAoXG4gICAgICAgIHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT4sXG4gICAgICApID0+IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPj47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIGN1cnNvci5cbiAgICovXG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFxuICAgIElEQlBDdXJzb3JJdGVyYXRvclZhbHVlPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT5cbiAgPjtcbn1cblxudHlwZSBJREJQQ3Vyc29ySXRlcmF0b3JWYWx1ZUV4dGVuZHM8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+ID0gT21pdDxcbiAgSURCUEN1cnNvcjxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+LFxuICAnYWR2YW5jZScgfCAnY29udGludWUnIHwgJ2NvbnRpbnVlUHJpbWFyeUtleSdcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUEN1cnNvckl0ZXJhdG9yVmFsdWU8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUEN1cnNvckl0ZXJhdG9yVmFsdWVFeHRlbmRzPFxuICAgIERCVHlwZXMsXG4gICAgVHhTdG9yZXMsXG4gICAgU3RvcmVOYW1lLFxuICAgIEluZGV4TmFtZSxcbiAgICBNb2RlXG4gID4ge1xuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIGN1cnNvciBhIGdpdmVuIG51bWJlciBvZiByZWNvcmRzLlxuICAgKi9cbiAgYWR2YW5jZTxUPih0aGlzOiBULCBjb3VudDogbnVtYmVyKTogdm9pZDtcbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIGN1cnNvciBieSBvbmUgcmVjb3JkICh1bmxlc3MgJ2tleScgaXMgcHJvdmlkZWQpLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWU8VD4odGhpczogVCwga2V5PzogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPik6IHZvaWQ7XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgZ2l2ZW4ga2V5cy5cbiAgICpcbiAgICogVGhlIG9wZXJhdGlvbiBpcyAnYW5kJyBcdTIwMTMgYm90aCBrZXlzIG11c3QgYmUgc2F0aXNmaWVkLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKiBAcGFyYW0gcHJpbWFyeUtleSBhbmQgd2hlcmUgdGhlIG9iamVjdCBzdG9yZSBoYXMgYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqL1xuICBjb250aW51ZVByaW1hcnlLZXk8VD4oXG4gICAgdGhpczogVCxcbiAgICBrZXk6IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4sXG4gICAgcHJpbWFyeUtleTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJREJQQ3Vyc29yV2l0aFZhbHVlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBDdXJzb3I8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPiB7XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgaXRlbS5cbiAgICovXG4gIHJlYWRvbmx5IHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIGN1cnNvci5cbiAgICovXG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFxuICAgIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlPFxuICAgICAgREJUeXBlcyxcbiAgICAgIFR4U3RvcmVzLFxuICAgICAgU3RvcmVOYW1lLFxuICAgICAgSW5kZXhOYW1lLFxuICAgICAgTW9kZVxuICAgID5cbiAgPjtcbn1cblxuLy8gU29tZSBvZiB0aGF0IHN3ZWVlZWV0IEphdmEtZXNxdWUgbmFtaW5nLlxudHlwZSBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZUV4dGVuZHM8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+ID0gT21pdDxcbiAgSURCUEN1cnNvcldpdGhWYWx1ZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+LFxuICAnYWR2YW5jZScgfCAnY29udGludWUnIHwgJ2NvbnRpbnVlUHJpbWFyeUtleSdcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWVFeHRlbmRzPFxuICAgIERCVHlwZXMsXG4gICAgVHhTdG9yZXMsXG4gICAgU3RvcmVOYW1lLFxuICAgIEluZGV4TmFtZSxcbiAgICBNb2RlXG4gID4ge1xuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIGN1cnNvciBhIGdpdmVuIG51bWJlciBvZiByZWNvcmRzLlxuICAgKi9cbiAgYWR2YW5jZTxUPih0aGlzOiBULCBjb3VudDogbnVtYmVyKTogdm9pZDtcbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIGN1cnNvciBieSBvbmUgcmVjb3JkICh1bmxlc3MgJ2tleScgaXMgcHJvdmlkZWQpLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWU8VD4odGhpczogVCwga2V5PzogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPik6IHZvaWQ7XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgZ2l2ZW4ga2V5cy5cbiAgICpcbiAgICogVGhlIG9wZXJhdGlvbiBpcyAnYW5kJyBcdTIwMTMgYm90aCBrZXlzIG11c3QgYmUgc2F0aXNmaWVkLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKiBAcGFyYW0gcHJpbWFyeUtleSBhbmQgd2hlcmUgdGhlIG9iamVjdCBzdG9yZSBoYXMgYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqL1xuICBjb250aW51ZVByaW1hcnlLZXk8VD4oXG4gICAgdGhpczogVCxcbiAgICBrZXk6IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4sXG4gICAgcHJpbWFyeUtleTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgKTogdm9pZDtcbn1cbiIsICJpbXBvcnQgeyBGdW5jIH0gZnJvbSAnLi91dGlsLmpzJztcbmltcG9ydCB7IHJlcGxhY2VUcmFwcyB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuaW1wb3J0IHsgSURCUERhdGFiYXNlLCBJREJQSW5kZXggfSBmcm9tICcuL2VudHJ5LmpzJztcblxuY29uc3QgcmVhZE1ldGhvZHMgPSBbJ2dldCcsICdnZXRLZXknLCAnZ2V0QWxsJywgJ2dldEFsbEtleXMnLCAnY291bnQnXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFsncHV0JywgJ2FkZCcsICdkZWxldGUnLCAnY2xlYXInXTtcbmNvbnN0IGNhY2hlZE1ldGhvZHMgPSBuZXcgTWFwPHN0cmluZywgRnVuYz4oKTtcblxuZnVuY3Rpb24gZ2V0TWV0aG9kKFxuICB0YXJnZXQ6IGFueSxcbiAgcHJvcDogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sLFxuKTogRnVuYyB8IHVuZGVmaW5lZCB7XG4gIGlmIChcbiAgICAhKFxuICAgICAgdGFyZ2V0IGluc3RhbmNlb2YgSURCRGF0YWJhc2UgJiZcbiAgICAgICEocHJvcCBpbiB0YXJnZXQpICYmXG4gICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZydcbiAgICApXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjYWNoZWRNZXRob2RzLmdldChwcm9wKSkgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuXG4gIGNvbnN0IHRhcmdldEZ1bmNOYW1lOiBzdHJpbmcgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gIGNvbnN0IHVzZUluZGV4ID0gcHJvcCAhPT0gdGFyZ2V0RnVuY05hbWU7XG4gIGNvbnN0IGlzV3JpdGUgPSB3cml0ZU1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpO1xuXG4gIGlmIChcbiAgICAvLyBCYWlsIGlmIHRoZSB0YXJnZXQgZG9lc24ndCBleGlzdCBvbiB0aGUgdGFyZ2V0LiBFZywgZ2V0QWxsIGlzbid0IGluIEVkZ2UuXG4gICAgISh0YXJnZXRGdW5jTmFtZSBpbiAodXNlSW5kZXggPyBJREJJbmRleCA6IElEQk9iamVjdFN0b3JlKS5wcm90b3R5cGUpIHx8XG4gICAgIShpc1dyaXRlIHx8IHJlYWRNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKSlcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gYXN5bmMgZnVuY3Rpb24gKFxuICAgIHRoaXM6IElEQlBEYXRhYmFzZSxcbiAgICBzdG9yZU5hbWU6IHN0cmluZyxcbiAgICAuLi5hcmdzOiBhbnlbXVxuICApIHtcbiAgICAvLyBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiB1bmRlZmluZWQgZ3ppcHBzIGJldHRlciwgYnV0IGZhaWxzIGluIEVkZ2UgOihcbiAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gJ3JlYWR3cml0ZScgOiAncmVhZG9ubHknKTtcbiAgICBsZXQgdGFyZ2V0OlxuICAgICAgfCB0eXBlb2YgdHguc3RvcmVcbiAgICAgIHwgSURCUEluZGV4PHVua25vd24sIHN0cmluZ1tdLCBzdHJpbmcsIHN0cmluZywgJ3JlYWR3cml0ZScgfCAncmVhZG9ubHknPiA9XG4gICAgICB0eC5zdG9yZTtcbiAgICBpZiAodXNlSW5kZXgpIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuXG4gICAgLy8gTXVzdCByZWplY3QgaWYgb3AgcmVqZWN0cy5cbiAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgLy8gTXVzdCByZWplY3Qgd2l0aCBvcCByZWplY3Rpb24gZmlyc3QuXG4gICAgLy8gTXVzdCByZXNvbHZlIHdpdGggb3AgdmFsdWUuXG4gICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgcmV0dXJuIChcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgKHRhcmdldCBhcyBhbnkpW3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgaXNXcml0ZSAmJiB0eC5kb25lLFxuICAgICAgXSlcbiAgICApWzBdO1xuICB9O1xuXG4gIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gIHJldHVybiBtZXRob2Q7XG59XG5cbnJlcGxhY2VUcmFwcygob2xkVHJhcHMpID0+ICh7XG4gIC4uLm9sZFRyYXBzLFxuICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PlxuICAgIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmdldCEodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gIGhhczogKHRhcmdldCwgcHJvcCkgPT5cbiAgICAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyEodGFyZ2V0LCBwcm9wKSxcbn0pKTtcbiIsICJpbXBvcnQgeyBpbnN0YW5jZU9mQW55LCBGdW5jIH0gZnJvbSAnLi91dGlsLmpzJztcbmltcG9ydCB7IHJlcGxhY2VUcmFwcywgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLCB1bndyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmltcG9ydCB7IElEQlBPYmplY3RTdG9yZSwgSURCUEluZGV4LCBJREJQQ3Vyc29yIH0gZnJvbSAnLi9lbnRyeS5qcyc7XG5cbmNvbnN0IGFkdmFuY2VNZXRob2RQcm9wcyA9IFsnY29udGludWUnLCAnY29udGludWVQcmltYXJ5S2V5JywgJ2FkdmFuY2UnXTtcbmNvbnN0IG1ldGhvZE1hcDogeyBbczogc3RyaW5nXTogRnVuYyB9ID0ge307XG5jb25zdCBhZHZhbmNlUmVzdWx0cyA9IG5ldyBXZWFrTWFwPElEQlBDdXJzb3IsIFByb21pc2U8SURCUEN1cnNvciB8IG51bGw+PigpO1xuY29uc3QgaXR0clByb3hpZWRDdXJzb3JUb09yaWdpbmFsUHJveHkgPSBuZXcgV2Vha01hcDxJREJQQ3Vyc29yLCBJREJQQ3Vyc29yPigpO1xuXG5jb25zdCBjdXJzb3JJdGVyYXRvclRyYXBzOiBQcm94eUhhbmRsZXI8YW55PiA9IHtcbiAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgIGlmICghYWR2YW5jZU1ldGhvZFByb3BzLmluY2x1ZGVzKHByb3AgYXMgc3RyaW5nKSkgcmV0dXJuIHRhcmdldFtwcm9wXTtcblxuICAgIGxldCBjYWNoZWRGdW5jID0gbWV0aG9kTWFwW3Byb3AgYXMgc3RyaW5nXTtcblxuICAgIGlmICghY2FjaGVkRnVuYykge1xuICAgICAgY2FjaGVkRnVuYyA9IG1ldGhvZE1hcFtwcm9wIGFzIHN0cmluZ10gPSBmdW5jdGlvbiAoXG4gICAgICAgIHRoaXM6IElEQlBDdXJzb3IsXG4gICAgICAgIC4uLmFyZ3M6IGFueVxuICAgICAgKSB7XG4gICAgICAgIGFkdmFuY2VSZXN1bHRzLnNldChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChpdHRyUHJveGllZEN1cnNvclRvT3JpZ2luYWxQcm94eS5nZXQodGhpcykgYXMgYW55KVtwcm9wXSguLi5hcmdzKSxcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlZEZ1bmM7XG4gIH0sXG59O1xuXG5hc3luYyBmdW5jdGlvbiogaXRlcmF0ZShcbiAgdGhpczogSURCUE9iamVjdFN0b3JlIHwgSURCUEluZGV4IHwgSURCUEN1cnNvcixcbiAgLi4uYXJnczogYW55W11cbik6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxhbnk+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXRoaXMtYXNzaWdubWVudFxuICBsZXQgY3Vyc29yOiB0eXBlb2YgdGhpcyB8IG51bGwgPSB0aGlzO1xuXG4gIGlmICghKGN1cnNvciBpbnN0YW5jZW9mIElEQkN1cnNvcikpIHtcbiAgICBjdXJzb3IgPSBhd2FpdCAoY3Vyc29yIGFzIElEQlBPYmplY3RTdG9yZSB8IElEQlBJbmRleCkub3BlbkN1cnNvciguLi5hcmdzKTtcbiAgfVxuXG4gIGlmICghY3Vyc29yKSByZXR1cm47XG5cbiAgY3Vyc29yID0gY3Vyc29yIGFzIElEQlBDdXJzb3I7XG4gIGNvbnN0IHByb3hpZWRDdXJzb3IgPSBuZXcgUHJveHkoY3Vyc29yLCBjdXJzb3JJdGVyYXRvclRyYXBzKTtcbiAgaXR0clByb3hpZWRDdXJzb3JUb09yaWdpbmFsUHJveHkuc2V0KHByb3hpZWRDdXJzb3IsIGN1cnNvcik7XG4gIC8vIE1hcCB0aGlzIGRvdWJsZS1wcm94eSBiYWNrIHRvIHRoZSBvcmlnaW5hbCwgc28gb3RoZXIgY3Vyc29yIG1ldGhvZHMgd29yay5cbiAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChwcm94aWVkQ3Vyc29yLCB1bndyYXAoY3Vyc29yKSk7XG5cbiAgd2hpbGUgKGN1cnNvcikge1xuICAgIHlpZWxkIHByb3hpZWRDdXJzb3I7XG4gICAgLy8gSWYgb25lIG9mIHRoZSBhZHZhbmNpbmcgbWV0aG9kcyB3YXMgbm90IGNhbGxlZCwgY2FsbCBjb250aW51ZSgpLlxuICAgIGN1cnNvciA9IGF3YWl0IChhZHZhbmNlUmVzdWx0cy5nZXQocHJveGllZEN1cnNvcikgfHwgY3Vyc29yLmNvbnRpbnVlKCkpO1xuICAgIGFkdmFuY2VSZXN1bHRzLmRlbGV0ZShwcm94aWVkQ3Vyc29yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0l0ZXJhdG9yUHJvcCh0YXJnZXQ6IGFueSwgcHJvcDogbnVtYmVyIHwgc3RyaW5nIHwgc3ltYm9sKSB7XG4gIHJldHVybiAoXG4gICAgKHByb3AgPT09IFN5bWJvbC5hc3luY0l0ZXJhdG9yICYmXG4gICAgICBpbnN0YW5jZU9mQW55KHRhcmdldCwgW0lEQkluZGV4LCBJREJPYmplY3RTdG9yZSwgSURCQ3Vyc29yXSkpIHx8XG4gICAgKHByb3AgPT09ICdpdGVyYXRlJyAmJiBpbnN0YW5jZU9mQW55KHRhcmdldCwgW0lEQkluZGV4LCBJREJPYmplY3RTdG9yZV0pKVxuICApO1xufVxuXG5yZXBsYWNlVHJhcHMoKG9sZFRyYXBzKSA9PiAoe1xuICAuLi5vbGRUcmFwcyxcbiAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICBpZiAoaXNJdGVyYXRvclByb3AodGFyZ2V0LCBwcm9wKSkgcmV0dXJuIGl0ZXJhdGU7XG4gICAgcmV0dXJuIG9sZFRyYXBzLmdldCEodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gIH0sXG4gIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICByZXR1cm4gaXNJdGVyYXRvclByb3AodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXMhKHRhcmdldCwgcHJvcCk7XG4gIH0sXG59KSk7XG4iLCAiLy8gQHRzLWlnbm9yZVxudHJ5e3NlbGZbJ3dvcmtib3g6ZXhwaXJhdGlvbjo3LjEuMCddJiZfKCl9Y2F0Y2goZSl7fSIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7b3BlbkRCLCBEQlNjaGVtYSwgSURCUERhdGFiYXNlLCBkZWxldGVEQn0gZnJvbSAnaWRiJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5jb25zdCBEQl9OQU1FID0gJ3dvcmtib3gtZXhwaXJhdGlvbic7XG5jb25zdCBDQUNIRV9PQkpFQ1RfU1RPUkUgPSAnY2FjaGUtZW50cmllcyc7XG5cbmNvbnN0IG5vcm1hbGl6ZVVSTCA9ICh1bk5vcm1hbGl6ZWRVcmw6IHN0cmluZykgPT4ge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHVuTm9ybWFsaXplZFVybCwgbG9jYXRpb24uaHJlZik7XG4gIHVybC5oYXNoID0gJyc7XG5cbiAgcmV0dXJuIHVybC5ocmVmO1xufTtcblxuaW50ZXJmYWNlIENhY2hlVGltZXN0YW1wc01vZGVsRW50cnkge1xuICBpZDogc3RyaW5nO1xuICBjYWNoZU5hbWU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2FjaGVEYlNjaGVtYSBleHRlbmRzIERCU2NoZW1hIHtcbiAgJ2NhY2hlLWVudHJpZXMnOiB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgdmFsdWU6IENhY2hlVGltZXN0YW1wc01vZGVsRW50cnk7XG4gICAgaW5kZXhlczoge2NhY2hlTmFtZTogc3RyaW5nOyB0aW1lc3RhbXA6IG51bWJlcn07XG4gIH07XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdGltZXN0YW1wIG1vZGVsLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIENhY2hlVGltZXN0YW1wc01vZGVsIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfY2FjaGVOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2RiOiBJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT4gfCBudWxsID0gbnVsbDtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhY2hlTmFtZVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY2FjaGVOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWU7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYW4gdXBncmFkZSBvZiBpbmRleGVkREIuXG4gICAqXG4gICAqIEBwYXJhbSB7SURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+fSBkYlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfdXBncmFkZURiKGRiOiBJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT4pIHtcbiAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IEVkZ2VIVE1MIGRvZXNuJ3Qgc3VwcG9ydCBhcnJheXMgYXMgYSBrZXlQYXRoLCBzbyB3ZVxuICAgIC8vIGhhdmUgdG8gdXNlIHRoZSBgaWRgIGtleVBhdGggaGVyZSBhbmQgY3JlYXRlIG91ciBvd24gdmFsdWVzIChhXG4gICAgLy8gY29uY2F0ZW5hdGlvbiBvZiBgdXJsICsgY2FjaGVOYW1lYCkgaW5zdGVhZCBvZiBzaW1wbHkgdXNpbmdcbiAgICAvLyBga2V5UGF0aDogWyd1cmwnLCAnY2FjaGVOYW1lJ11gLCB3aGljaCBpcyBzdXBwb3J0ZWQgaW4gb3RoZXIgYnJvd3NlcnMuXG4gICAgY29uc3Qgb2JqU3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShDQUNIRV9PQkpFQ1RfU1RPUkUsIHtrZXlQYXRoOiAnaWQnfSk7XG5cbiAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG9uY2Ugd2UgZG9uJ3QgaGF2ZSB0byBzdXBwb3J0IEVkZ2VIVE1MLCB3ZSBjYW5cbiAgICAvLyBjcmVhdGUgYSBzaW5nbGUgaW5kZXggd2l0aCB0aGUga2V5UGF0aCBgWydjYWNoZU5hbWUnLCAndGltZXN0YW1wJ11gXG4gICAgLy8gaW5zdGVhZCBvZiBkb2luZyBib3RoIHRoZXNlIGluZGV4ZXMuXG4gICAgb2JqU3RvcmUuY3JlYXRlSW5kZXgoJ2NhY2hlTmFtZScsICdjYWNoZU5hbWUnLCB7dW5pcXVlOiBmYWxzZX0pO1xuICAgIG9ialN0b3JlLmNyZWF0ZUluZGV4KCd0aW1lc3RhbXAnLCAndGltZXN0YW1wJywge3VuaXF1ZTogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhbiB1cGdyYWRlIG9mIGluZGV4ZWREQiBhbmQgZGVsZXRlcyBkZXByZWNhdGVkIERCcy5cbiAgICpcbiAgICogQHBhcmFtIHtJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT59IGRiXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF91cGdyYWRlRGJBbmREZWxldGVPbGREYnMoZGI6IElEQlBEYXRhYmFzZTxDYWNoZURiU2NoZW1hPikge1xuICAgIHRoaXMuX3VwZ3JhZGVEYihkYik7XG4gICAgaWYgKHRoaXMuX2NhY2hlTmFtZSkge1xuICAgICAgdm9pZCBkZWxldGVEQih0aGlzLl9jYWNoZU5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIHNldFRpbWVzdGFtcCh1cmw6IHN0cmluZywgdGltZXN0YW1wOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB1cmwgPSBub3JtYWxpemVVUkwodXJsKTtcblxuICAgIGNvbnN0IGVudHJ5OiBDYWNoZVRpbWVzdGFtcHNNb2RlbEVudHJ5ID0ge1xuICAgICAgdXJsLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgY2FjaGVOYW1lOiB0aGlzLl9jYWNoZU5hbWUsXG4gICAgICAvLyBDcmVhdGluZyBhbiBJRCBmcm9tIHRoZSBVUkwgYW5kIGNhY2hlIG5hbWUgd29uJ3QgYmUgbmVjZXNzYXJ5IG9uY2VcbiAgICAgIC8vIEVkZ2Ugc3dpdGNoZXMgdG8gQ2hyb21pdW0gYW5kIGFsbCBicm93c2VycyB3ZSBzdXBwb3J0IHdvcmsgd2l0aFxuICAgICAgLy8gYXJyYXkga2V5UGF0aHMuXG4gICAgICBpZDogdGhpcy5fZ2V0SWQodXJsKSxcbiAgICB9O1xuICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXREYigpO1xuICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oQ0FDSEVfT0JKRUNUX1NUT1JFLCAncmVhZHdyaXRlJywge1xuICAgICAgZHVyYWJpbGl0eTogJ3JlbGF4ZWQnLFxuICAgIH0pO1xuICAgIGF3YWl0IHR4LnN0b3JlLnB1dChlbnRyeSk7XG4gICAgYXdhaXQgdHguZG9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0aW1lc3RhbXAgc3RvcmVkIGZvciBhIGdpdmVuIFVSTC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcmV0dXJuIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBnZXRUaW1lc3RhbXAodXJsOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlciB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXREYigpO1xuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgZGIuZ2V0KENBQ0hFX09CSkVDVF9TVE9SRSwgdGhpcy5fZ2V0SWQodXJsKSk7XG4gICAgcmV0dXJuIGVudHJ5Py50aW1lc3RhbXA7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZXMgdGhyb3VnaCBhbGwgdGhlIGVudHJpZXMgaW4gdGhlIG9iamVjdCBzdG9yZSAoZnJvbSBuZXdlc3QgdG9cbiAgICogb2xkZXN0KSBhbmQgcmVtb3ZlcyBlbnRyaWVzIG9uY2UgZWl0aGVyIGBtYXhDb3VudGAgaXMgcmVhY2hlZCBvciB0aGVcbiAgICogZW50cnkncyB0aW1lc3RhbXAgaXMgbGVzcyB0aGFuIGBtaW5UaW1lc3RhbXBgLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWluVGltZXN0YW1wXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhDb3VudFxuICAgKiBAcmV0dXJuIHtBcnJheTxzdHJpbmc+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgZXhwaXJlRW50cmllcyhcbiAgICBtaW5UaW1lc3RhbXA6IG51bWJlcixcbiAgICBtYXhDb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXREYigpO1xuICAgIGxldCBjdXJzb3IgPSBhd2FpdCBkYlxuICAgICAgLnRyYW5zYWN0aW9uKENBQ0hFX09CSkVDVF9TVE9SRSlcbiAgICAgIC5zdG9yZS5pbmRleCgndGltZXN0YW1wJylcbiAgICAgIC5vcGVuQ3Vyc29yKG51bGwsICdwcmV2Jyk7XG4gICAgY29uc3QgZW50cmllc1RvRGVsZXRlOiBDYWNoZVRpbWVzdGFtcHNNb2RlbEVudHJ5W10gPSBbXTtcbiAgICBsZXQgZW50cmllc05vdERlbGV0ZWRDb3VudCA9IDA7XG4gICAgd2hpbGUgKGN1cnNvcikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gY3Vyc29yLnZhbHVlO1xuICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHdlIGNhbiB1c2UgYSBtdWx0aS1rZXkgaW5kZXgsIHdlXG4gICAgICAvLyB3b24ndCBoYXZlIHRvIGNoZWNrIGBjYWNoZU5hbWVgIGhlcmUuXG4gICAgICBpZiAocmVzdWx0LmNhY2hlTmFtZSA9PT0gdGhpcy5fY2FjaGVOYW1lKSB7XG4gICAgICAgIC8vIERlbGV0ZSBhbiBlbnRyeSBpZiBpdCdzIG9sZGVyIHRoYW4gdGhlIG1heCBhZ2Ugb3JcbiAgICAgICAgLy8gaWYgd2UgYWxyZWFkeSBoYXZlIHRoZSBtYXggbnVtYmVyIGFsbG93ZWQuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAobWluVGltZXN0YW1wICYmIHJlc3VsdC50aW1lc3RhbXAgPCBtaW5UaW1lc3RhbXApIHx8XG4gICAgICAgICAgKG1heENvdW50ICYmIGVudHJpZXNOb3REZWxldGVkQ291bnQgPj0gbWF4Q291bnQpXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogd2Ugc2hvdWxkIGJlIGFibGUgdG8gZGVsZXRlIHRoZVxuICAgICAgICAgIC8vIGVudHJ5IHJpZ2h0IGhlcmUsIGJ1dCBkb2luZyBzbyBjYXVzZXMgYW4gaXRlcmF0aW9uXG4gICAgICAgICAgLy8gYnVnIGluIFNhZmFyaSBzdGFibGUgKGZpeGVkIGluIFRQKS4gSW5zdGVhZCB3ZSBjYW5cbiAgICAgICAgICAvLyBzdG9yZSB0aGUga2V5cyBvZiB0aGUgZW50cmllcyB0byBkZWxldGUsIGFuZCB0aGVuXG4gICAgICAgICAgLy8gZGVsZXRlIHRoZSBzZXBhcmF0ZSB0cmFuc2FjdGlvbnMuXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xOTc4XG4gICAgICAgICAgLy8gY3Vyc29yLmRlbGV0ZSgpO1xuXG4gICAgICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIHJldHVybiB0aGUgVVJMLCBub3QgdGhlIHdob2xlIGVudHJ5LlxuICAgICAgICAgIGVudHJpZXNUb0RlbGV0ZS5wdXNoKGN1cnNvci52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW50cmllc05vdERlbGV0ZWRDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG9uY2UgdGhlIFNhZmFyaSBidWcgaW4gdGhlIGZvbGxvd2luZyBpc3N1ZSBpcyBmaXhlZCxcbiAgICAvLyB3ZSBzaG91bGQgYmUgYWJsZSB0byByZW1vdmUgdGhpcyBsb29wIGFuZCBkbyB0aGUgZW50cnkgZGVsZXRpb24gaW4gdGhlXG4gICAgLy8gY3Vyc29yIGxvb3AgYWJvdmU6XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xOTc4XG4gICAgY29uc3QgdXJsc0RlbGV0ZWQ6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzVG9EZWxldGUpIHtcbiAgICAgIGF3YWl0IGRiLmRlbGV0ZShDQUNIRV9PQkpFQ1RfU1RPUkUsIGVudHJ5LmlkKTtcbiAgICAgIHVybHNEZWxldGVkLnB1c2goZW50cnkudXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsc0RlbGV0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgYSBVUkwgYW5kIHJldHVybnMgYW4gSUQgdGhhdCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGUgb2JqZWN0IHN0b3JlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2dldElkKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBDcmVhdGluZyBhbiBJRCBmcm9tIHRoZSBVUkwgYW5kIGNhY2hlIG5hbWUgd29uJ3QgYmUgbmVjZXNzYXJ5IG9uY2VcbiAgICAvLyBFZGdlIHN3aXRjaGVzIHRvIENocm9taXVtIGFuZCBhbGwgYnJvd3NlcnMgd2Ugc3VwcG9ydCB3b3JrIHdpdGhcbiAgICAvLyBhcnJheSBrZXlQYXRocy5cbiAgICByZXR1cm4gdGhpcy5fY2FjaGVOYW1lICsgJ3wnICsgbm9ybWFsaXplVVJMKHVybCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvcGVuIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBnZXREYigpIHtcbiAgICBpZiAoIXRoaXMuX2RiKSB7XG4gICAgICB0aGlzLl9kYiA9IGF3YWl0IG9wZW5EQihEQl9OQU1FLCAxLCB7XG4gICAgICAgIHVwZ3JhZGU6IHRoaXMuX3VwZ3JhZGVEYkFuZERlbGV0ZU9sZERicy5iaW5kKHRoaXMpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kYjtcbiAgfVxufVxuXG5leHBvcnQge0NhY2hlVGltZXN0YW1wc01vZGVsfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7ZG9udFdhaXRGb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCB7Q2FjaGVUaW1lc3RhbXBzTW9kZWx9IGZyb20gJy4vbW9kZWxzL0NhY2hlVGltZXN0YW1wc01vZGVsLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuaW50ZXJmYWNlIENhY2hlRXhwaXJhdGlvbkNvbmZpZyB7XG4gIG1heEVudHJpZXM/OiBudW1iZXI7XG4gIG1heEFnZVNlY29uZHM/OiBudW1iZXI7XG4gIG1hdGNoT3B0aW9ucz86IENhY2hlUXVlcnlPcHRpb25zO1xufVxuXG4vKipcbiAqIFRoZSBgQ2FjaGVFeHBpcmF0aW9uYCBjbGFzcyBhbGxvd3MgeW91IGRlZmluZSBhbiBleHBpcmF0aW9uIGFuZCAvIG9yXG4gKiBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIHJlc3BvbnNlcyBzdG9yZWQgaW4gYVxuICogW2BDYWNoZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZSkuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtZXhwaXJhdGlvblxuICovXG5jbGFzcyBDYWNoZUV4cGlyYXRpb24ge1xuICBwcml2YXRlIF9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWF4RW50cmllcz86IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWF4QWdlU2Vjb25kcz86IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBfbWF0Y2hPcHRpb25zPzogQ2FjaGVRdWVyeU9wdGlvbnM7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NhY2hlTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IF90aW1lc3RhbXBNb2RlbDogQ2FjaGVUaW1lc3RhbXBzTW9kZWw7XG5cbiAgLyoqXG4gICAqIFRvIGNvbnN0cnVjdCBhIG5ldyBDYWNoZUV4cGlyYXRpb24gaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdCBsZWFzdFxuICAgKiBvbmUgb2YgdGhlIGBjb25maWdgIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdG8gYXBwbHkgcmVzdHJpY3Rpb25zIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEVudHJpZXNdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBlbnRyaWVzIHRvIGNhY2hlLlxuICAgKiBFbnRyaWVzIHVzZWQgdGhlIGxlYXN0IHdpbGwgYmUgcmVtb3ZlZCBhcyB0aGUgbWF4aW11bSBpcyByZWFjaGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhBZ2VTZWNvbmRzXSBUaGUgbWF4aW11bSBhZ2Ugb2YgYW4gZW50cnkgYmVmb3JlXG4gICAqIGl0J3MgdHJlYXRlZCBhcyBzdGFsZSBhbmQgcmVtb3ZlZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWcubWF0Y2hPcHRpb25zXSBUaGUgW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZS9kZWxldGUjUGFyYW1ldGVycylcbiAgICogdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBjYWxsaW5nIGBkZWxldGUoKWAgb24gdGhlIGNhY2hlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY2FjaGVOYW1lOiBzdHJpbmcsIGNvbmZpZzogQ2FjaGVFeHBpcmF0aW9uQ29uZmlnID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUoY2FjaGVOYW1lLCAnc3RyaW5nJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ2NhY2hlTmFtZScsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCEoY29uZmlnLm1heEVudHJpZXMgfHwgY29uZmlnLm1heEFnZVNlY29uZHMpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCcsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5tYXhFbnRyaWVzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKGNvbmZpZy5tYXhFbnRyaWVzLCAnbnVtYmVyJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEVudHJpZXMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKGNvbmZpZy5tYXhBZ2VTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEFnZVNlY29uZHMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9tYXhFbnRyaWVzID0gY29uZmlnLm1heEVudHJpZXM7XG4gICAgdGhpcy5fbWF4QWdlU2Vjb25kcyA9IGNvbmZpZy5tYXhBZ2VTZWNvbmRzO1xuICAgIHRoaXMuX21hdGNoT3B0aW9ucyA9IGNvbmZpZy5tYXRjaE9wdGlvbnM7XG4gICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lO1xuICAgIHRoaXMuX3RpbWVzdGFtcE1vZGVsID0gbmV3IENhY2hlVGltZXN0YW1wc01vZGVsKGNhY2hlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogRXhwaXJlcyBlbnRyaWVzIGZvciB0aGUgZ2l2ZW4gY2FjaGUgYW5kIGdpdmVuIGNyaXRlcmlhLlxuICAgKi9cbiAgYXN5bmMgZXhwaXJlRW50cmllcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5faXNSdW5uaW5nKSB7XG4gICAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XG5cbiAgICBjb25zdCBtaW5UaW1lc3RhbXAgPSB0aGlzLl9tYXhBZ2VTZWNvbmRzXG4gICAgICA/IERhdGUubm93KCkgLSB0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMFxuICAgICAgOiAwO1xuXG4gICAgY29uc3QgdXJsc0V4cGlyZWQgPSBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5leHBpcmVFbnRyaWVzKFxuICAgICAgbWluVGltZXN0YW1wLFxuICAgICAgdGhpcy5fbWF4RW50cmllcyxcbiAgICApO1xuXG4gICAgLy8gRGVsZXRlIFVSTHMgZnJvbSB0aGUgY2FjaGVcbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4odGhpcy5fY2FjaGVOYW1lKTtcbiAgICBmb3IgKGNvbnN0IHVybCBvZiB1cmxzRXhwaXJlZCkge1xuICAgICAgYXdhaXQgY2FjaGUuZGVsZXRlKHVybCwgdGhpcy5fbWF0Y2hPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHVybHNFeHBpcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgIGBFeHBpcmVkICR7dXJsc0V4cGlyZWQubGVuZ3RofSBgICtcbiAgICAgICAgICAgIGAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/ICdlbnRyeScgOiAnZW50cmllcyd9IGFuZCByZW1vdmVkIGAgK1xuICAgICAgICAgICAgYCR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID8gJ2l0JyA6ICd0aGVtJ30gZnJvbSB0aGUgYCArXG4gICAgICAgICAgICBgJyR7dGhpcy5fY2FjaGVOYW1lfScgY2FjaGUuYCxcbiAgICAgICAgKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgICBgRXhwaXJlZCB0aGUgZm9sbG93aW5nICR7dXJsc0V4cGlyZWQubGVuZ3RoID09PSAxID8gJ1VSTCcgOiAnVVJMcyd9OmAsXG4gICAgICAgICk7XG4gICAgICAgIHVybHNFeHBpcmVkLmZvckVhY2goKHVybCkgPT4gbG9nZ2VyLmxvZyhgICAgICR7dXJsfWApKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dnZXIuZGVidWcoYENhY2hlIGV4cGlyYXRpb24gcmFuIGFuZCBmb3VuZCBubyBlbnRyaWVzIHRvIHJlbW92ZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5fcmVydW5SZXF1ZXN0ZWQpIHtcbiAgICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICBkb250V2FpdEZvcih0aGlzLmV4cGlyZUVudHJpZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgdGltZXN0YW1wIGZvciB0aGUgZ2l2ZW4gVVJMLiBUaGlzIGVuc3VyZXMgdGhlIHdoZW5cbiAgICogcmVtb3ZpbmcgZW50cmllcyBiYXNlZCBvbiBtYXhpbXVtIGVudHJpZXMsIG1vc3QgcmVjZW50bHkgdXNlZFxuICAgKiBpcyBhY2N1cmF0ZSBvciB3aGVuIGV4cGlyaW5nLCB0aGUgdGltZXN0YW1wIGlzIHVwLXRvLWRhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGFzeW5jIHVwZGF0ZVRpbWVzdGFtcCh1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzVHlwZSh1cmwsICdzdHJpbmcnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICBmdW5jTmFtZTogJ3VwZGF0ZVRpbWVzdGFtcCcsXG4gICAgICAgIHBhcmFtTmFtZTogJ3VybCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5zZXRUaW1lc3RhbXAodXJsLCBEYXRlLm5vdygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byBjaGVjayBpZiBhIFVSTCBoYXMgZXhwaXJlZCBvciBub3QgYmVmb3JlIGl0J3MgdXNlZC5cbiAgICpcbiAgICogVGhpcyByZXF1aXJlcyBhIGxvb2sgdXAgZnJvbSBJbmRleGVkREIsIHNvIGNhbiBiZSBzbG93LlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIG1ldGhvZCB3aWxsIG5vdCByZW1vdmUgdGhlIGNhY2hlZCBlbnRyeSwgY2FsbFxuICAgKiBgZXhwaXJlRW50cmllcygpYCB0byByZW1vdmUgaW5kZXhlZERCIGFuZCBDYWNoZSBlbnRyaWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBhc3luYyBpc1VSTEV4cGlyZWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIXRoaXMuX21heEFnZVNlY29uZHMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoYGV4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2VgLCB7XG4gICAgICAgICAgbWV0aG9kTmFtZTogJ2lzVVJMRXhwaXJlZCcsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnbWF4QWdlU2Vjb25kcycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5nZXRUaW1lc3RhbXAodXJsKTtcbiAgICAgIGNvbnN0IGV4cGlyZU9sZGVyVGhhbiA9IERhdGUubm93KCkgLSB0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMDtcbiAgICAgIHJldHVybiB0aW1lc3RhbXAgIT09IHVuZGVmaW5lZCA/IHRpbWVzdGFtcCA8IGV4cGlyZU9sZGVyVGhhbiA6IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIEluZGV4ZWREQiBvYmplY3Qgc3RvcmUgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGNhY2hlIGV4cGlyYXRpb25cbiAgICogbWV0YWRhdGEuXG4gICAqL1xuICBhc3luYyBkZWxldGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IGF0dGVtcHQgYW5vdGhlciByZXJ1biBpZiB3ZSdyZSBjYWxsZWQgaW4gdGhlIG1pZGRsZSBvZlxuICAgIC8vIGEgY2FjaGUgZXhwaXJhdGlvbi5cbiAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IGZhbHNlO1xuICAgIGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmV4cGlyZUVudHJpZXMoSW5maW5pdHkpOyAvLyBFeHBpcmVzIGFsbC5cbiAgfVxufVxuXG5leHBvcnQge0NhY2hlRXhwaXJhdGlvbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuZGVjbGFyZSBsZXQgcmVnaXN0cmF0aW9uOiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uIHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlTmFtZURldGFpbHMge1xuICBnb29nbGVBbmFseXRpY3M6IHN0cmluZztcbiAgcHJlY2FjaGU6IHN0cmluZztcbiAgcHJlZml4OiBzdHJpbmc7XG4gIHJ1bnRpbWU6IHN0cmluZztcbiAgc3VmZml4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFydGlhbENhY2hlTmFtZURldGFpbHMge1xuICBbcHJvcE5hbWU6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQ2FjaGVOYW1lRGV0YWlsc1Byb3AgPVxuICB8ICdnb29nbGVBbmFseXRpY3MnXG4gIHwgJ3ByZWNhY2hlJ1xuICB8ICdwcmVmaXgnXG4gIHwgJ3J1bnRpbWUnXG4gIHwgJ3N1ZmZpeCc7XG5cbmNvbnN0IF9jYWNoZU5hbWVEZXRhaWxzOiBDYWNoZU5hbWVEZXRhaWxzID0ge1xuICBnb29nbGVBbmFseXRpY3M6ICdnb29nbGVBbmFseXRpY3MnLFxuICBwcmVjYWNoZTogJ3ByZWNhY2hlLXYyJyxcbiAgcHJlZml4OiAnd29ya2JveCcsXG4gIHJ1bnRpbWU6ICdydW50aW1lJyxcbiAgc3VmZml4OiB0eXBlb2YgcmVnaXN0cmF0aW9uICE9PSAndW5kZWZpbmVkJyA/IHJlZ2lzdHJhdGlvbi5zY29wZSA6ICcnLFxufTtcblxuY29uc3QgX2NyZWF0ZUNhY2hlTmFtZSA9IChjYWNoZU5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBbX2NhY2hlTmFtZURldGFpbHMucHJlZml4LCBjYWNoZU5hbWUsIF9jYWNoZU5hbWVEZXRhaWxzLnN1ZmZpeF1cbiAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMClcbiAgICAuam9pbignLScpO1xufTtcblxuY29uc3QgZWFjaENhY2hlTmFtZURldGFpbCA9IChmbjogKGtleTogQ2FjaGVOYW1lRGV0YWlsc1Byb3ApID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoX2NhY2hlTmFtZURldGFpbHMpKSB7XG4gICAgZm4oa2V5IGFzIENhY2hlTmFtZURldGFpbHNQcm9wKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNhY2hlTmFtZXMgPSB7XG4gIHVwZGF0ZURldGFpbHM6IChkZXRhaWxzOiBQYXJ0aWFsQ2FjaGVOYW1lRGV0YWlscyk6IHZvaWQgPT4ge1xuICAgIGVhY2hDYWNoZU5hbWVEZXRhaWwoKGtleTogQ2FjaGVOYW1lRGV0YWlsc1Byb3ApOiB2b2lkID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZGV0YWlsc1trZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICBfY2FjaGVOYW1lRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBnZXRHb29nbGVBbmFseXRpY3NOYW1lOiAodXNlckNhY2hlTmFtZT86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5nb29nbGVBbmFseXRpY3MpO1xuICB9LFxuICBnZXRQcmVjYWNoZU5hbWU6ICh1c2VyQ2FjaGVOYW1lPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLnByZWNhY2hlKTtcbiAgfSxcbiAgZ2V0UHJlZml4OiAoKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gX2NhY2hlTmFtZURldGFpbHMucHJlZml4O1xuICB9LFxuICBnZXRSdW50aW1lTmFtZTogKHVzZXJDYWNoZU5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMucnVudGltZSk7XG4gIH0sXG4gIGdldFN1ZmZpeDogKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIF9jYWNoZU5hbWVEZXRhaWxzLnN1ZmZpeDtcbiAgfSxcbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLy8gQ2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIHdoZW5ldmVyIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbi8vIENhbid0IGNoYW5nZSBGdW5jdGlvbiB0eXBlIHJpZ2h0IG5vdy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5jb25zdCBxdW90YUVycm9yQ2FsbGJhY2tzOiBTZXQ8RnVuY3Rpb24+ID0gbmV3IFNldCgpO1xuXG5leHBvcnQge3F1b3RhRXJyb3JDYWxsYmFja3N9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJy4vX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge3F1b3RhRXJyb3JDYWxsYmFja3N9IGZyb20gJy4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBBZGRzIGEgZnVuY3Rpb24gdG8gdGhlIHNldCBvZiBxdW90YUVycm9yQ2FsbGJhY2tzIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpZlxuICogdGhlcmUncyBhIHF1b3RhIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jb3JlXG4gKi9cbi8vIENhbid0IGNoYW5nZSBGdW5jdGlvbiB0eXBlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZnVuY3Rpb24gcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2soY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0IS5pc1R5cGUoY2FsbGJhY2ssICdmdW5jdGlvbicsIHtcbiAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNvcmUnLFxuICAgICAgZnVuY05hbWU6ICdyZWdpc3RlcicsXG4gICAgICBwYXJhbU5hbWU6ICdjYWxsYmFjaycsXG4gICAgfSk7XG4gIH1cblxuICBxdW90YUVycm9yQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZXIubG9nKCdSZWdpc3RlcmVkIGEgY2FsbGJhY2sgdG8gcmVzcG9uZCB0byBxdW90YSBlcnJvcnMuJywgY2FsbGJhY2spO1xuICB9XG59XG5cbmV4cG9ydCB7cmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2t9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtjYWNoZU5hbWVzfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQge2RvbnRXYWl0Rm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZG9udFdhaXRGb3IuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7cmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2t9IGZyb20gJ3dvcmtib3gtY29yZS9yZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjay5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge1dvcmtib3hQbHVnaW59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7Q2FjaGVFeHBpcmF0aW9ufSBmcm9tICcuL0NhY2hlRXhwaXJhdGlvbi5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwaXJhdGlvblBsdWdpbk9wdGlvbnMge1xuICBtYXhFbnRyaWVzPzogbnVtYmVyO1xuICBtYXhBZ2VTZWNvbmRzPzogbnVtYmVyO1xuICBtYXRjaE9wdGlvbnM/OiBDYWNoZVF1ZXJ5T3B0aW9ucztcbiAgcHVyZ2VPblF1b3RhRXJyb3I/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFRoaXMgcGx1Z2luIGNhbiBiZSB1c2VkIGluIGEgYHdvcmtib3gtc3RyYXRlZ3lgIHRvIHJlZ3VsYXJseSBlbmZvcmNlIGFcbiAqIGxpbWl0IG9uIHRoZSBhZ2UgYW5kIC8gb3IgdGhlIG51bWJlciBvZiBjYWNoZWQgcmVxdWVzdHMuXG4gKlxuICogSXQgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGB3b3JrYm94LXN0cmF0ZWd5YCBpbnN0YW5jZXMgdGhhdCBoYXZlIGFcbiAqIFtjdXN0b20gYGNhY2hlTmFtZWAgcHJvcGVydHkgc2V0XSgvd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2NvbmZpZ3VyZS13b3JrYm94I2N1c3RvbV9jYWNoZV9uYW1lc19pbl9zdHJhdGVnaWVzKS5cbiAqIEluIG90aGVyIHdvcmRzLCBpdCBjYW4ndCBiZSB1c2VkIHRvIGV4cGlyZSBlbnRyaWVzIGluIHN0cmF0ZWd5IHRoYXQgdXNlcyB0aGVcbiAqIGRlZmF1bHQgcnVudGltZSBjYWNoZSBuYW1lLlxuICpcbiAqIFdoZW5ldmVyIGEgY2FjaGVkIHJlc3BvbnNlIGlzIHVzZWQgb3IgdXBkYXRlZCwgdGhpcyBwbHVnaW4gd2lsbCBsb29rXG4gKiBhdCB0aGUgYXNzb2NpYXRlZCBjYWNoZSBhbmQgcmVtb3ZlIGFueSBvbGQgb3IgZXh0cmEgcmVzcG9uc2VzLlxuICpcbiAqIFdoZW4gdXNpbmcgYG1heEFnZVNlY29uZHNgLCByZXNwb25zZXMgbWF5IGJlIHVzZWQgKm9uY2UqIGFmdGVyIGV4cGlyaW5nXG4gKiBiZWNhdXNlIHRoZSBleHBpcmF0aW9uIGNsZWFuIHVwIHdpbGwgbm90IGhhdmUgb2NjdXJyZWQgdW50aWwgKmFmdGVyKiB0aGVcbiAqIGNhY2hlZCByZXNwb25zZSBoYXMgYmVlbiB1c2VkLiBJZiB0aGUgcmVzcG9uc2UgaGFzIGEgXCJEYXRlXCIgaGVhZGVyLCB0aGVuXG4gKiBhIGxpZ2h0IHdlaWdodCBleHBpcmF0aW9uIGNoZWNrIGlzIHBlcmZvcm1lZCBhbmQgdGhlIHJlc3BvbnNlIHdpbGwgbm90IGJlXG4gKiB1c2VkIGltbWVkaWF0ZWx5LlxuICpcbiAqIFdoZW4gdXNpbmcgYG1heEVudHJpZXNgLCB0aGUgZW50cnkgbGVhc3QtcmVjZW50bHkgcmVxdWVzdGVkIHdpbGwgYmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgY2FjaGUgZmlyc3QuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtZXhwaXJhdGlvblxuICovXG5jbGFzcyBFeHBpcmF0aW9uUGx1Z2luIGltcGxlbWVudHMgV29ya2JveFBsdWdpbiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvbmZpZzogRXhwaXJhdGlvblBsdWdpbk9wdGlvbnM7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21heEFnZVNlY29uZHM/OiBudW1iZXI7XG4gIHByaXZhdGUgX2NhY2hlRXhwaXJhdGlvbnM6IE1hcDxzdHJpbmcsIENhY2hlRXhwaXJhdGlvbj47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXhwaXJhdGlvblBsdWdpbk9wdGlvbnN9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhFbnRyaWVzXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZW50cmllcyB0byBjYWNoZS5cbiAgICogRW50cmllcyB1c2VkIHRoZSBsZWFzdCB3aWxsIGJlIHJlbW92ZWQgYXMgdGhlIG1heGltdW0gaXMgcmVhY2hlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4QWdlU2Vjb25kc10gVGhlIG1heGltdW0gYWdlIG9mIGFuIGVudHJ5IGJlZm9yZVxuICAgKiBpdCdzIHRyZWF0ZWQgYXMgc3RhbGUgYW5kIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnLm1hdGNoT3B0aW9uc10gVGhlIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUvZGVsZXRlI1BhcmFtZXRlcnMpXG4gICAqIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gY2FsbGluZyBgZGVsZXRlKClgIG9uIHRoZSBjYWNoZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbY29uZmlnLnB1cmdlT25RdW90YUVycm9yXSBXaGV0aGVyIHRvIG9wdCB0aGlzIGNhY2hlIGluIHRvXG4gICAqIGF1dG9tYXRpYyBkZWxldGlvbiBpZiB0aGUgYXZhaWxhYmxlIHN0b3JhZ2UgcXVvdGEgaGFzIGJlZW4gZXhjZWVkZWQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IEV4cGlyYXRpb25QbHVnaW5PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoY29uZmlnLm1heEVudHJpZXMgfHwgY29uZmlnLm1heEFnZVNlY29uZHMpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCcsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5tYXhFbnRyaWVzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKGNvbmZpZy5tYXhFbnRyaWVzLCAnbnVtYmVyJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEVudHJpZXMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKGNvbmZpZy5tYXhBZ2VTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEFnZVNlY29uZHMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fbWF4QWdlU2Vjb25kcyA9IGNvbmZpZy5tYXhBZ2VTZWNvbmRzO1xuICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgPSBuZXcgTWFwKCk7XG5cbiAgICBpZiAoY29uZmlnLnB1cmdlT25RdW90YUVycm9yKSB7XG4gICAgICByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjaygoKSA9PiB0aGlzLmRlbGV0ZUNhY2hlQW5kTWV0YWRhdGEoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgc2ltcGxlIGhlbHBlciBtZXRob2QgdG8gcmV0dXJuIGEgQ2FjaGVFeHBpcmF0aW9uIGluc3RhbmNlIGZvciBhIGdpdmVuXG4gICAqIGNhY2hlIG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWVcbiAgICogQHJldHVybiB7Q2FjaGVFeHBpcmF0aW9ufVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0Q2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZTogc3RyaW5nKTogQ2FjaGVFeHBpcmF0aW9uIHtcbiAgICBpZiAoY2FjaGVOYW1lID09PSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKCkpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2V4cGlyZS1jdXN0b20tY2FjaGVzLW9ubHknKTtcbiAgICB9XG5cbiAgICBsZXQgY2FjaGVFeHBpcmF0aW9uID0gdGhpcy5fY2FjaGVFeHBpcmF0aW9ucy5nZXQoY2FjaGVOYW1lKTtcbiAgICBpZiAoIWNhY2hlRXhwaXJhdGlvbikge1xuICAgICAgY2FjaGVFeHBpcmF0aW9uID0gbmV3IENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUsIHRoaXMuX2NvbmZpZyk7XG4gICAgICB0aGlzLl9jYWNoZUV4cGlyYXRpb25zLnNldChjYWNoZU5hbWUsIGNhY2hlRXhwaXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZUV4cGlyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogQSBcImxpZmVjeWNsZVwiIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYXV0b21hdGljYWxseSBieSB0aGVcbiAgICogYHdvcmtib3gtc3RyYXRlZ2llc2AgaGFuZGxlcnMgd2hlbiBhIGBSZXNwb25zZWAgaXMgYWJvdXQgdG8gYmUgcmV0dXJuZWRcbiAgICogZnJvbSBhIFtDYWNoZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlKSB0b1xuICAgKiB0aGUgaGFuZGxlci4gSXQgYWxsb3dzIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGluc3BlY3RlZCBmb3IgZnJlc2huZXNzIGFuZFxuICAgKiBwcmV2ZW50cyBpdCBmcm9tIGJlaW5nIHVzZWQgaWYgdGhlIGBSZXNwb25zZWAncyBgRGF0ZWAgaGVhZGVyIHZhbHVlIGlzXG4gICAqIG9sZGVyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgYG1heEFnZVNlY29uZHNgLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdGhlIHJlc3BvbnNlIGlzIGluLlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLmNhY2hlZFJlc3BvbnNlIFRoZSBgUmVzcG9uc2VgIG9iamVjdCB0aGF0J3MgYmVlblxuICAgKiAgICAgcmVhZCBmcm9tIGEgY2FjaGUgYW5kIHdob3NlIGZyZXNobmVzcyBzaG91bGQgYmUgY2hlY2tlZC5cbiAgICogQHJldHVybiB7UmVzcG9uc2V9IEVpdGhlciB0aGUgYGNhY2hlZFJlc3BvbnNlYCwgaWYgaXQnc1xuICAgKiAgICAgZnJlc2gsIG9yIGBudWxsYCBpZiB0aGUgYFJlc3BvbnNlYCBpcyBvbGRlciB0aGFuIGBtYXhBZ2VTZWNvbmRzYC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZDogV29ya2JveFBsdWdpblsnY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkJ10gPSBhc3luYyAoe1xuICAgIGV2ZW50LFxuICAgIHJlcXVlc3QsXG4gICAgY2FjaGVOYW1lLFxuICAgIGNhY2hlZFJlc3BvbnNlLFxuICB9KSA9PiB7XG4gICAgaWYgKCFjYWNoZWRSZXNwb25zZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGcmVzaCA9IHRoaXMuX2lzUmVzcG9uc2VEYXRlRnJlc2goY2FjaGVkUmVzcG9uc2UpO1xuXG4gICAgLy8gRXhwaXJlIGVudHJpZXMgdG8gZW5zdXJlIHRoYXQgZXZlbiBpZiB0aGUgZXhwaXJhdGlvbiBkYXRlIGhhc1xuICAgIC8vIGV4cGlyZWQsIGl0J2xsIG9ubHkgYmUgdXNlZCBvbmNlLlxuICAgIGNvbnN0IGNhY2hlRXhwaXJhdGlvbiA9IHRoaXMuX2dldENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUpO1xuICAgIGRvbnRXYWl0Rm9yKGNhY2hlRXhwaXJhdGlvbi5leHBpcmVFbnRyaWVzKCkpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBtZXRhZGF0YSBmb3IgdGhlIHJlcXVlc3QgVVJMIHRvIHRoZSBjdXJyZW50IHRpbWVzdGFtcCxcbiAgICAvLyBidXQgZG9uJ3QgYGF3YWl0YCBpdCBhcyB3ZSBkb24ndCB3YW50IHRvIGJsb2NrIHRoZSByZXNwb25zZS5cbiAgICBjb25zdCB1cGRhdGVUaW1lc3RhbXBEb25lID0gY2FjaGVFeHBpcmF0aW9uLnVwZGF0ZVRpbWVzdGFtcChyZXF1ZXN0LnVybCk7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBldmVudC53YWl0VW50aWwodXBkYXRlVGltZXN0YW1wRG9uZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIFRoZSBldmVudCBtYXkgbm90IGJlIGEgZmV0Y2ggZXZlbnQ7IG9ubHkgbG9nIHRoZSBVUkwgaWYgaXQgaXMuXG4gICAgICAgICAgaWYgKCdyZXF1ZXN0JyBpbiBldmVudCkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXG4gICAgICAgICAgICAgIGBVbmFibGUgdG8gZW5zdXJlIHNlcnZpY2Ugd29ya2VyIHN0YXlzIGFsaXZlIHdoZW4gYCArXG4gICAgICAgICAgICAgICAgYHVwZGF0aW5nIGNhY2hlIGVudHJ5IGZvciBgICtcbiAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwoKGV2ZW50IGFzIEZldGNoRXZlbnQpLnJlcXVlc3QudXJsKX0nLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc0ZyZXNoID8gY2FjaGVkUmVzcG9uc2UgOiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBjYWNoZWRSZXNwb25zZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfaXNSZXNwb25zZURhdGVGcmVzaChjYWNoZWRSZXNwb25zZTogUmVzcG9uc2UpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX21heEFnZVNlY29uZHMpIHtcbiAgICAgIC8vIFdlIGFyZW4ndCBleHBpcmluZyBieSBhZ2UsIHNvIHJldHVybiB0cnVlLCBpdCdzIGZyZXNoXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgJ2RhdGUnIGhlYWRlciB3aWxsIHN1ZmZpY2UgYSBxdWljayBleHBpcmF0aW9uIGNoZWNrLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9zdy10b29sYm94L2lzc3Vlcy8xNjQgZm9yXG4gICAgLy8gZGlzY3Vzc2lvbi5cbiAgICBjb25zdCBkYXRlSGVhZGVyVGltZXN0YW1wID0gdGhpcy5fZ2V0RGF0ZUhlYWRlclRpbWVzdGFtcChjYWNoZWRSZXNwb25zZSk7XG4gICAgaWYgKGRhdGVIZWFkZXJUaW1lc3RhbXAgPT09IG51bGwpIHtcbiAgICAgIC8vIFVuYWJsZSB0byBwYXJzZSBkYXRlLCBzbyBhc3N1bWUgaXQncyBmcmVzaC5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCBoZWFkZXJUaW1lLCB0aGVuIG91ciByZXNwb25zZSBpcyBmcmVzaCBpZmYgdGhlXG4gICAgLy8gaGVhZGVyVGltZSBwbHVzIG1heEFnZVNlY29uZHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IHRpbWUuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gZGF0ZUhlYWRlclRpbWVzdGFtcCA+PSBub3cgLSB0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGV4dHJhY3QgdGhlIGRhdGEgaGVhZGVyIGFuZCBwYXJzZSBpdCBpbnRvIGEgdXNlZnVsXG4gICAqIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBjYWNoZWRSZXNwb25zZVxuICAgKiBAcmV0dXJuIHtudW1iZXJ8bnVsbH1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2dldERhdGVIZWFkZXJUaW1lc3RhbXAoY2FjaGVkUmVzcG9uc2U6IFJlc3BvbnNlKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgaWYgKCFjYWNoZWRSZXNwb25zZS5oZWFkZXJzLmhhcygnZGF0ZScpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlSGVhZGVyID0gY2FjaGVkUmVzcG9uc2UuaGVhZGVycy5nZXQoJ2RhdGUnKTtcbiAgICBjb25zdCBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZUhlYWRlciEpO1xuICAgIGNvbnN0IGhlYWRlclRpbWUgPSBwYXJzZWREYXRlLmdldFRpbWUoKTtcblxuICAgIC8vIElmIHRoZSBEYXRlIGhlYWRlciB3YXMgaW52YWxpZCBmb3Igc29tZSByZWFzb24sIHBhcnNlZERhdGUuZ2V0VGltZSgpXG4gICAgLy8gd2lsbCByZXR1cm4gTmFOLlxuICAgIGlmIChpc05hTihoZWFkZXJUaW1lKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlclRpbWU7XG4gIH1cblxuICAvKipcbiAgICogQSBcImxpZmVjeWNsZVwiIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYXV0b21hdGljYWxseSBieSB0aGVcbiAgICogYHdvcmtib3gtc3RyYXRlZ2llc2AgaGFuZGxlcnMgd2hlbiBhbiBlbnRyeSBpcyBhZGRlZCB0byBhIGNhY2hlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdGhhdCB3YXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBUaGUgUmVxdWVzdCBmb3IgdGhlIGNhY2hlZCBlbnRyeS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhY2hlRGlkVXBkYXRlOiBXb3JrYm94UGx1Z2luWydjYWNoZURpZFVwZGF0ZSddID0gYXN5bmMgKHtcbiAgICBjYWNoZU5hbWUsXG4gICAgcmVxdWVzdCxcbiAgfSkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzVHlwZShjYWNoZU5hbWUsICdzdHJpbmcnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICBmdW5jTmFtZTogJ2NhY2hlRGlkVXBkYXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnY2FjaGVOYW1lJyxcbiAgICAgIH0pO1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgIGZ1bmNOYW1lOiAnY2FjaGVEaWRVcGRhdGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNhY2hlRXhwaXJhdGlvbiA9IHRoaXMuX2dldENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWUpO1xuICAgIGF3YWl0IGNhY2hlRXhwaXJhdGlvbi51cGRhdGVUaW1lc3RhbXAocmVxdWVzdC51cmwpO1xuICAgIGF3YWl0IGNhY2hlRXhwaXJhdGlvbi5leHBpcmVFbnRyaWVzKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBoZWxwZXIgbWV0aG9kIHRoYXQgcGVyZm9ybXMgdHdvIG9wZXJhdGlvbnM6XG4gICAqXG4gICAqIC0gRGVsZXRlcyAqYWxsKiB0aGUgdW5kZXJseWluZyBDYWNoZSBpbnN0YW5jZXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcGx1Z2luXG4gICAqIGluc3RhbmNlLCBieSBjYWxsaW5nIGNhY2hlcy5kZWxldGUoKSBvbiB5b3VyIGJlaGFsZi5cbiAgICogLSBEZWxldGVzIHRoZSBtZXRhZGF0YSBmcm9tIEluZGV4ZWREQiB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgZXhwaXJhdGlvblxuICAgKiBkZXRhaWxzIGZvciBlYWNoIENhY2hlIGluc3RhbmNlLlxuICAgKlxuICAgKiBXaGVuIHVzaW5nIGNhY2hlIGV4cGlyYXRpb24sIGNhbGxpbmcgdGhpcyBtZXRob2QgaXMgcHJlZmVyYWJsZSB0byBjYWxsaW5nXG4gICAqIGBjYWNoZXMuZGVsZXRlKClgIGRpcmVjdGx5LCBzaW5jZSB0aGlzIHdpbGwgZW5zdXJlIHRoYXQgdGhlIEluZGV4ZWREQlxuICAgKiBtZXRhZGF0YSBpcyBhbHNvIGNsZWFubHkgcmVtb3ZlZCBhbmQgb3BlbiBJbmRleGVkREIgaW5zdGFuY2VzIGFyZSBkZWxldGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgeW91J3JlICpub3QqIHVzaW5nIGNhY2hlIGV4cGlyYXRpb24gZm9yIGEgZ2l2ZW4gY2FjaGUsIGNhbGxpbmdcbiAgICogYGNhY2hlcy5kZWxldGUoKWAgYW5kIHBhc3NpbmcgaW4gdGhlIGNhY2hlJ3MgbmFtZSBzaG91bGQgYmUgc3VmZmljaWVudC5cbiAgICogVGhlcmUgaXMgbm8gV29ya2JveC1zcGVjaWZpYyBtZXRob2QgbmVlZGVkIGZvciBjbGVhbnVwIGluIHRoYXQgY2FzZS5cbiAgICovXG4gIGFzeW5jIGRlbGV0ZUNhY2hlQW5kTWV0YWRhdGEoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gRG8gdGhpcyBvbmUgYXQgYSB0aW1lIGluc3RlYWQgb2YgYWxsIGF0IG9uY2UgdmlhIGBQcm9taXNlLmFsbCgpYCB0b1xuICAgIC8vIHJlZHVjZSB0aGUgY2hhbmNlIG9mIGluY29uc2lzdGVuY3kgaWYgYSBwcm9taXNlIHJlamVjdHMuXG4gICAgZm9yIChjb25zdCBbY2FjaGVOYW1lLCBjYWNoZUV4cGlyYXRpb25dIG9mIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMpIHtcbiAgICAgIGF3YWl0IHNlbGYuY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpO1xuICAgICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLmRlbGV0ZSgpO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucyA9IG5ldyBNYXAoKTtcbiAgfVxufVxuXG5leHBvcnQge0V4cGlyYXRpb25QbHVnaW59O1xuIiwgIi8vIEB0cy1pZ25vcmVcbnRyeXtzZWxmWyd3b3JrYm94OnJvdXRpbmc6Ny4xLjAnXSYmXygpfWNhdGNoKGUpe30iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuZXhwb3J0IHR5cGUgSFRUUE1ldGhvZCA9ICdERUxFVEUnIHwgJ0dFVCcgfCAnSEVBRCcgfCAnUEFUQ0gnIHwgJ1BPU1QnIHwgJ1BVVCc7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgSFRUUCBtZXRob2QsICdHRVQnLCB1c2VkIHdoZW4gdGhlcmUncyBubyBzcGVjaWZpYyBtZXRob2RcbiAqIGNvbmZpZ3VyZWQgZm9yIGEgcm91dGUuXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZGVmYXVsdE1ldGhvZDogSFRUUE1ldGhvZCA9ICdHRVQnO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIHZhbGlkIEhUVFAgbWV0aG9kcyBhc3NvY2lhdGVkIHdpdGggcmVxdWVzdHMgdGhhdCBjb3VsZCBiZSByb3V0ZWQuXG4gKlxuICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkTWV0aG9kczogSFRUUE1ldGhvZFtdID0gW1xuICAnREVMRVRFJyxcbiAgJ0dFVCcsXG4gICdIRUFEJyxcbiAgJ1BBVENIJyxcbiAgJ1BPU1QnLFxuICAnUFVUJyxcbl07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge1JvdXRlSGFuZGxlciwgUm91dGVIYW5kbGVyT2JqZWN0fSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCl8T2JqZWN0fSBoYW5kbGVyIEVpdGhlciBhIGZ1bmN0aW9uLCBvciBhbiBvYmplY3Qgd2l0aCBhXG4gKiAnaGFuZGxlJyBtZXRob2QuXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGEgaGFuZGxlIG1ldGhvZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGFuZGxlciA9IChoYW5kbGVyOiBSb3V0ZUhhbmRsZXIpOiBSb3V0ZUhhbmRsZXJPYmplY3QgPT4ge1xuICBpZiAoaGFuZGxlciAmJiB0eXBlb2YgaGFuZGxlciA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5oYXNNZXRob2QoaGFuZGxlciwgJ2hhbmRsZScsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ2hhbmRsZXInLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGVyO1xuICB9IGVsc2Uge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzVHlwZShoYW5kbGVyLCAnZnVuY3Rpb24nLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdoYW5kbGVyJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge2hhbmRsZTogaGFuZGxlcn07XG4gIH1cbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge0hUVFBNZXRob2QsIGRlZmF1bHRNZXRob2QsIHZhbGlkTWV0aG9kc30gZnJvbSAnLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHtub3JtYWxpemVIYW5kbGVyfSBmcm9tICcuL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIuanMnO1xuaW1wb3J0IHtcbiAgUm91dGVIYW5kbGVyLFxuICBSb3V0ZUhhbmRsZXJPYmplY3QsXG4gIFJvdXRlTWF0Y2hDYWxsYmFjayxcbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQSBgUm91dGVgIGNvbnNpc3RzIG9mIGEgcGFpciBvZiBjYWxsYmFjayBmdW5jdGlvbnMsIFwibWF0Y2hcIiBhbmQgXCJoYW5kbGVyXCIuXG4gKiBUaGUgXCJtYXRjaFwiIGNhbGxiYWNrIGRldGVybWluZSBpZiBhIHJvdXRlIHNob3VsZCBiZSB1c2VkIHRvIFwiaGFuZGxlXCIgYVxuICogcmVxdWVzdCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUgaWYgaXQgY2FuLiBUaGUgXCJoYW5kbGVyXCIgY2FsbGJhY2tcbiAqIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbWF0Y2ggYW5kIHNob3VsZCByZXR1cm4gYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXNcbiAqIHRvIGEgYFJlc3BvbnNlYC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmNsYXNzIFJvdXRlIHtcbiAgaGFuZGxlcjogUm91dGVIYW5kbGVyT2JqZWN0O1xuICBtYXRjaDogUm91dGVNYXRjaENhbGxiYWNrO1xuICBtZXRob2Q6IEhUVFBNZXRob2Q7XG4gIGNhdGNoSGFuZGxlcj86IFJvdXRlSGFuZGxlck9iamVjdDtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgZm9yIFJvdXRlIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSBtYXRjaFxuICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByb3V0ZSBtYXRjaGVzIGEgZ2l2ZW5cbiAgICogYGZldGNoYCBldmVudCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUuXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzb2x2aW5nIHRvIGEgUmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gICAqIGFnYWluc3QuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBtYXRjaDogUm91dGVNYXRjaENhbGxiYWNrLFxuICAgIGhhbmRsZXI6IFJvdXRlSGFuZGxlcixcbiAgICBtZXRob2Q6IEhUVFBNZXRob2QgPSBkZWZhdWx0TWV0aG9kLFxuICApIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUobWF0Y2gsICdmdW5jdGlvbicsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ21hdGNoJyxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgIGFzc2VydCEuaXNPbmVPZihtZXRob2QsIHZhbGlkTWV0aG9kcywge3BhcmFtTmFtZTogJ21ldGhvZCd9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGVzZSB2YWx1ZXMgYXJlIHJlZmVyZW5jZWQgZGlyZWN0bHkgYnkgUm91dGVyIHNvIGNhbm5vdCBiZVxuICAgIC8vIGFsdGVyZWQgYnkgbWluaWZpY2F0b24uXG4gICAgdGhpcy5oYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgICB0aGlzLm1hdGNoID0gbWF0Y2g7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmctaGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBSZXNwb25zZVxuICAgKi9cbiAgc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXI6IFJvdXRlSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuY2F0Y2hIYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgfVxufVxuXG5leHBvcnQge1JvdXRlfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7XG4gIFJvdXRlSGFuZGxlcixcbiAgUm91dGVNYXRjaENhbGxiYWNrLFxuICBSb3V0ZU1hdGNoQ2FsbGJhY2tPcHRpb25zLFxufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQge0hUVFBNZXRob2R9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7Um91dGV9IGZyb20gJy4vUm91dGUuanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIFJlZ0V4cFJvdXRlIG1ha2VzIGl0IGVhc3kgdG8gY3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIGJhc2VkXG4gKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfS5cbiAqXG4gKiBGb3Igc2FtZS1vcmlnaW4gcmVxdWVzdHMgdGhlIFJlZ0V4cCBvbmx5IG5lZWRzIHRvIG1hdGNoIHBhcnQgb2YgdGhlIFVSTC4gRm9yXG4gKiByZXF1ZXN0cyBhZ2FpbnN0IHRoaXJkLXBhcnR5IHNlcnZlcnMsIHlvdSBtdXN0IGRlZmluZSBhIFJlZ0V4cCB0aGF0IG1hdGNoZXNcbiAqIHRoZSBzdGFydCBvZiB0aGUgVVJMLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqIEBleHRlbmRzIHdvcmtib3gtcm91dGluZy5Sb3V0ZVxuICovXG5jbGFzcyBSZWdFeHBSb3V0ZSBleHRlbmRzIFJvdXRlIHtcbiAgLyoqXG4gICAqIElmIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gY29udGFpbnNcbiAgICogW2NhcHR1cmUgZ3JvdXBzXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9SZWdFeHAjZ3JvdXBpbmctYmFjay1yZWZlcmVuY2VzfSxcbiAgICogdGhlIGNhcHR1cmVkIHZhbHVlcyB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAgICoge0BsaW5rIHdvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGBwYXJhbXNgXG4gICAqIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnRXhwIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdCBVUkxzLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgKiBhZ2FpbnN0LlxuICAgKi9cbiAgY29uc3RydWN0b3IocmVnRXhwOiBSZWdFeHAsIGhhbmRsZXI6IFJvdXRlSGFuZGxlciwgbWV0aG9kPzogSFRUUE1ldGhvZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVnRXhwLCBSZWdFeHAsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlZ0V4cFJvdXRlJyxcbiAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgIHBhcmFtTmFtZTogJ3BhdHRlcm4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2g6IFJvdXRlTWF0Y2hDYWxsYmFjayA9ICh7dXJsfTogUm91dGVNYXRjaENhbGxiYWNrT3B0aW9ucykgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gcmVnRXhwLmV4ZWModXJsLmhyZWYpO1xuXG4gICAgICAvLyBSZXR1cm4gaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBubyBtYXRjaC5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUmVxdWlyZSB0aGF0IHRoZSBtYXRjaCBzdGFydCBhdCB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSBVUkwgc3RyaW5nXG4gICAgICAvLyBpZiBpdCdzIGEgY3Jvc3Mtb3JpZ2luIHJlcXVlc3QuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yODEgZm9yIHRoZSBjb250ZXh0XG4gICAgICAvLyBiZWhpbmQgdGhpcyBiZWhhdmlvci5cbiAgICAgIGlmICh1cmwub3JpZ2luICE9PSBsb2NhdGlvbi5vcmlnaW4gJiYgcmVzdWx0LmluZGV4ICE9PSAwKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgICAgYFRoZSByZWd1bGFyIGV4cHJlc3Npb24gJyR7cmVnRXhwLnRvU3RyaW5nKCl9JyBvbmx5IHBhcnRpYWxseSBtYXRjaGVkIGAgK1xuICAgICAgICAgICAgICBgYWdhaW5zdCB0aGUgY3Jvc3Mtb3JpZ2luIFVSTCAnJHt1cmwudG9TdHJpbmcoKX0nLiBSZWdFeHBSb3V0ZSdzIHdpbGwgb25seSBgICtcbiAgICAgICAgICAgICAgYGhhbmRsZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgaWYgdGhleSBtYXRjaCB0aGUgZW50aXJlIFVSTC5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSByb3V0ZSBtYXRjaGVzLCBidXQgdGhlcmUgYXJlbid0IGFueSBjYXB0dXJlIGdyb3VwcyBkZWZpbmVkLCB0aGVuXG4gICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIFtdLCB3aGljaCBpcyB0cnV0aHkgYW5kIHRoZXJlZm9yZSBzdWZmaWNpZW50IHRvXG4gICAgICAvLyBpbmRpY2F0ZSBhIG1hdGNoLlxuICAgICAgLy8gSWYgdGhlcmUgYXJlIGNhcHR1cmUgZ3JvdXBzLCB0aGVuIGl0IHdpbGwgcmV0dXJuIHRoZWlyIHZhbHVlcy5cbiAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoMSk7XG4gICAgfTtcblxuICAgIHN1cGVyKG1hdGNoLCBoYW5kbGVyLCBtZXRob2QpO1xuICB9XG59XG5cbmV4cG9ydCB7UmVnRXhwUm91dGV9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7XG4gIFJvdXRlSGFuZGxlcixcbiAgUm91dGVIYW5kbGVyT2JqZWN0LFxuICBSb3V0ZUhhbmRsZXJDYWxsYmFja09wdGlvbnMsXG4gIFJvdXRlTWF0Y2hDYWxsYmFja09wdGlvbnMsXG59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5pbXBvcnQge0hUVFBNZXRob2QsIGRlZmF1bHRNZXRob2R9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7bm9ybWFsaXplSGFuZGxlcn0gZnJvbSAnLi91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzJztcbmltcG9ydCB7Um91dGV9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG50eXBlIFJlcXVlc3RBcmdzID0gc3RyaW5nIHwgW3N0cmluZywgUmVxdWVzdEluaXQ/XTtcblxuaW50ZXJmYWNlIENhY2hlVVJMc01lc3NhZ2VEYXRhIHtcbiAgdHlwZTogc3RyaW5nO1xuICBwYXlsb2FkOiB7XG4gICAgdXJsc1RvQ2FjaGU6IFJlcXVlc3RBcmdzW107XG4gIH07XG59XG5cbi8qKlxuICogVGhlIFJvdXRlciBjYW4gYmUgdXNlZCB0byBwcm9jZXNzIGEgYEZldGNoRXZlbnRgIHVzaW5nIG9uZSBvciBtb3JlXG4gKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfSwgcmVzcG9uZGluZyB3aXRoIGEgYFJlc3BvbnNlYCBpZlxuICogYSBtYXRjaGluZyByb3V0ZSBleGlzdHMuXG4gKlxuICogSWYgbm8gcm91dGUgbWF0Y2hlcyBhIGdpdmVuIGEgcmVxdWVzdCwgdGhlIFJvdXRlciB3aWxsIHVzZSBhIFwiZGVmYXVsdFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkLlxuICpcbiAqIFNob3VsZCB0aGUgbWF0Y2hpbmcgUm91dGUgdGhyb3cgYW4gZXJyb3IsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImNhdGNoXCJcbiAqIGhhbmRsZXIgaWYgb25lIGlzIGRlZmluZWQgdG8gZ3JhY2VmdWxseSBkZWFsIHdpdGggaXNzdWVzIGFuZCByZXNwb25kIHdpdGggYVxuICogUmVxdWVzdC5cbiAqXG4gKiBJZiBhIHJlcXVlc3QgbWF0Y2hlcyBtdWx0aXBsZSByb3V0ZXMsIHRoZSAqKmVhcmxpZXN0KiogcmVnaXN0ZXJlZCByb3V0ZSB3aWxsXG4gKiBiZSB1c2VkIHRvIHJlc3BvbmQgdG8gdGhlIHJlcXVlc3QuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5jbGFzcyBSb3V0ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IF9yb3V0ZXM6IE1hcDxIVFRQTWV0aG9kLCBSb3V0ZVtdPjtcbiAgcHJpdmF0ZSByZWFkb25seSBfZGVmYXVsdEhhbmRsZXJNYXA6IE1hcDxIVFRQTWV0aG9kLCBSb3V0ZUhhbmRsZXJPYmplY3Q+O1xuICBwcml2YXRlIF9jYXRjaEhhbmRsZXI/OiBSb3V0ZUhhbmRsZXJPYmplY3Q7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgbmV3IFJvdXRlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3JvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtNYXA8c3RyaW5nLCBBcnJheTx3b3JrYm94LXJvdXRpbmcuUm91dGU+Pn0gcm91dGVzIEEgYE1hcGAgb2YgSFRUUFxuICAgKiBtZXRob2QgbmFtZSAoJ0dFVCcsIGV0Yy4pIHRvIGFuIGFycmF5IG9mIGFsbCB0aGUgY29ycmVzcG9uZGluZyBgUm91dGVgXG4gICAqIGluc3RhbmNlcyB0aGF0IGFyZSByZWdpc3RlcmVkLlxuICAgKi9cbiAgZ2V0IHJvdXRlcygpOiBNYXA8SFRUUE1ldGhvZCwgUm91dGVbXT4ge1xuICAgIHJldHVybiB0aGlzLl9yb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGZldGNoIGV2ZW50IGxpc3RlbmVyIHRvIHJlc3BvbmQgdG8gZXZlbnRzIHdoZW4gYSByb3V0ZSBtYXRjaGVzXG4gICAqIHRoZSBldmVudCdzIHJlcXVlc3QuXG4gICAqL1xuICBhZGRGZXRjaExpc3RlbmVyKCk6IHZvaWQge1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKChldmVudDogRmV0Y2hFdmVudCkgPT4ge1xuICAgICAgY29uc3Qge3JlcXVlc3R9ID0gZXZlbnQ7XG4gICAgICBjb25zdCByZXNwb25zZVByb21pc2UgPSB0aGlzLmhhbmRsZVJlcXVlc3Qoe3JlcXVlc3QsIGV2ZW50fSk7XG4gICAgICBpZiAocmVzcG9uc2VQcm9taXNlKSB7XG4gICAgICAgIGV2ZW50LnJlc3BvbmRXaXRoKHJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICB9XG4gICAgfSkgYXMgRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1lc3NhZ2UgZXZlbnQgbGlzdGVuZXIgZm9yIFVSTHMgdG8gY2FjaGUgZnJvbSB0aGUgd2luZG93LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB0byBjYWNoZSByZXNvdXJjZXMgbG9hZGVkIG9uIHRoZSBwYWdlIHByaW9yIHRvIHdoZW4gdGhlXG4gICAqIHNlcnZpY2Ugd29ya2VyIHN0YXJ0ZWQgY29udHJvbGxpbmcgaXQuXG4gICAqXG4gICAqIFRoZSBmb3JtYXQgb2YgdGhlIG1lc3NhZ2UgZGF0YSBzZW50IGZyb20gdGhlIHdpbmRvdyBzaG91bGQgYmUgYXMgZm9sbG93cy5cbiAgICogV2hlcmUgdGhlIGB1cmxzVG9DYWNoZWAgYXJyYXkgbWF5IGNvbnNpc3Qgb2YgVVJMIHN0cmluZ3Mgb3IgYW4gYXJyYXkgb2ZcbiAgICogVVJMIHN0cmluZyArIGByZXF1ZXN0SW5pdGAgb2JqZWN0ICh0aGUgc2FtZSBhcyB5b3UnZCBwYXNzIHRvIGBmZXRjaCgpYCkuXG4gICAqXG4gICAqIGBgYFxuICAgKiB7XG4gICAqICAgdHlwZTogJ0NBQ0hFX1VSTFMnLFxuICAgKiAgIHBheWxvYWQ6IHtcbiAgICogICAgIHVybHNUb0NhY2hlOiBbXG4gICAqICAgICAgICcuL3NjcmlwdDEuanMnLFxuICAgKiAgICAgICAnLi9zY3JpcHQyLmpzJyxcbiAgICogICAgICAgWycuL3NjcmlwdDMuanMnLCB7bW9kZTogJ25vLWNvcnMnfV0sXG4gICAqICAgICBdLFxuICAgKiAgIH0sXG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBhZGRDYWNoZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoKGV2ZW50OiBFeHRlbmRhYmxlTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAvLyBldmVudC5kYXRhIGlzIHR5cGUgJ2FueSdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcbiAgICAgIGlmIChldmVudC5kYXRhICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0NBQ0hFX1VSTFMnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgICAgY29uc3Qge3BheWxvYWR9OiBDYWNoZVVSTHNNZXNzYWdlRGF0YSA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoYENhY2hpbmcgVVJMcyBmcm9tIHRoZSB3aW5kb3dgLCBwYXlsb2FkLnVybHNUb0NhY2hlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RQcm9taXNlcyA9IFByb21pc2UuYWxsKFxuICAgICAgICAgIHBheWxvYWQudXJsc1RvQ2FjaGUubWFwKChlbnRyeTogc3RyaW5nIHwgW3N0cmluZywgUmVxdWVzdEluaXQ/XSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgZW50cnkgPSBbZW50cnldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoLi4uZW50cnkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVxdWVzdCh7cmVxdWVzdCwgZXZlbnR9KTtcblxuICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBUeXBlU2NyaXB0IGVycm9ycyB3aXRob3V0IHRoaXMgdHlwZWNhc3QgZm9yXG4gICAgICAgICAgICAvLyBzb21lIHJlYXNvbiAocHJvYmFibHkgYSBidWcpLiBUaGUgcmVhbCB0eXBlIGhlcmUgc2hvdWxkIHdvcmsgYnV0XG4gICAgICAgICAgICAvLyBkb2Vzbid0OiBgQXJyYXk8UHJvbWlzZTxSZXNwb25zZT4gfCB1bmRlZmluZWQ+YC5cbiAgICAgICAgICB9KSBhcyBhbnlbXSxcbiAgICAgICAgKTsgLy8gVHlwZVNjcmlwdFxuXG4gICAgICAgIGV2ZW50LndhaXRVbnRpbChyZXF1ZXN0UHJvbWlzZXMpO1xuXG4gICAgICAgIC8vIElmIGEgTWVzc2FnZUNoYW5uZWwgd2FzIHVzZWQsIHJlcGx5IHRvIHRoZSBtZXNzYWdlIG9uIHN1Y2Nlc3MuXG4gICAgICAgIGlmIChldmVudC5wb3J0cyAmJiBldmVudC5wb3J0c1swXSkge1xuICAgICAgICAgIHZvaWQgcmVxdWVzdFByb21pc2VzLnRoZW4oKCkgPT4gZXZlbnQucG9ydHNbMF0ucG9zdE1lc3NhZ2UodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgYXMgRXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIHJvdXRpbmcgcnVsZXMgdG8gYSBGZXRjaEV2ZW50IG9iamVjdCB0byBnZXQgYSBSZXNwb25zZSBmcm9tIGFuXG4gICAqIGFwcHJvcHJpYXRlIFJvdXRlJ3MgaGFuZGxlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gaGFuZGxlLlxuICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlXG4gICAqICAgICByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPnx1bmRlZmluZWR9IEEgcHJvbWlzZSBpcyByZXR1cm5lZCBpZiBhXG4gICAqICAgICByZWdpc3RlcmVkIHJvdXRlIGNhbiBoYW5kbGUgdGhlIHJlcXVlc3QuIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nXG4gICAqICAgICByb3V0ZSBhbmQgdGhlcmUncyBubyBgZGVmYXVsdEhhbmRsZXJgLCBgdW5kZWZpbmVkYCBpcyByZXR1cm5lZC5cbiAgICovXG4gIGhhbmRsZVJlcXVlc3Qoe1xuICAgIHJlcXVlc3QsXG4gICAgZXZlbnQsXG4gIH06IHtcbiAgICByZXF1ZXN0OiBSZXF1ZXN0O1xuICAgIGV2ZW50OiBFeHRlbmRhYmxlRXZlbnQ7XG4gIH0pOiBQcm9taXNlPFJlc3BvbnNlPiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZVJlcXVlc3QnLFxuICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLnJlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgaWYgKCF1cmwucHJvdG9jb2wuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgYFdvcmtib3ggUm91dGVyIG9ubHkgc3VwcG9ydHMgVVJMcyB0aGF0IHN0YXJ0IHdpdGggJ2h0dHAnLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2FtZU9yaWdpbiA9IHVybC5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbjtcbiAgICBjb25zdCB7cGFyYW1zLCByb3V0ZX0gPSB0aGlzLmZpbmRNYXRjaGluZ1JvdXRlKHtcbiAgICAgIGV2ZW50LFxuICAgICAgcmVxdWVzdCxcbiAgICAgIHNhbWVPcmlnaW4sXG4gICAgICB1cmwsXG4gICAgfSk7XG4gICAgbGV0IGhhbmRsZXIgPSByb3V0ZSAmJiByb3V0ZS5oYW5kbGVyO1xuXG4gICAgY29uc3QgZGVidWdNZXNzYWdlcyA9IFtdO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goW2BGb3VuZCBhIHJvdXRlIHRvIGhhbmRsZSB0aGlzIHJlcXVlc3Q6YCwgcm91dGVdKTtcblxuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFtcbiAgICAgICAgICAgIGBQYXNzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1zIHRvIHRoZSByb3V0ZSdzIGhhbmRsZXI6YCxcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBoYW5kbGVyIGJlY2F1c2UgdGhlcmUgd2FzIG5vIG1hdGNoaW5nIHJvdXRlLCB0aGVuXG4gICAgLy8gZmFsbCBiYWNrIHRvIGRlZmF1bHRIYW5kbGVyIGlmIHRoYXQncyBkZWZpbmVkLlxuICAgIGNvbnN0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kIGFzIEhUVFBNZXRob2Q7XG4gICAgaWYgKCFoYW5kbGVyICYmIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLmhhcyhtZXRob2QpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goXG4gICAgICAgICAgYEZhaWxlZCB0byBmaW5kIGEgbWF0Y2hpbmcgcm91dGUuIEZhbGxpbmcgYCArXG4gICAgICAgICAgICBgYmFjayB0byB0aGUgZGVmYXVsdCBoYW5kbGVyIGZvciAke21ldGhvZH0uYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIgPSB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcC5nZXQobWV0aG9kKTtcbiAgICB9XG5cbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIE5vIGhhbmRsZXIgc28gV29ya2JveCB3aWxsIGRvIG5vdGhpbmcuIElmIGxvZ3MgaXMgc2V0IG9mIGRlYnVnXG4gICAgICAgIC8vIGkuZS4gdmVyYm9zZSwgd2Ugc2hvdWxkIHByaW50IG91dCB0aGlzIGluZm9ybWF0aW9uLlxuICAgICAgICBsb2dnZXIuZGVidWcoYE5vIHJvdXRlIGZvdW5kIGZvcjogJHtnZXRGcmllbmRseVVSTCh1cmwpfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBXZSBoYXZlIGEgaGFuZGxlciwgbWVhbmluZyBXb3JrYm94IGlzIGdvaW5nIHRvIGhhbmRsZSB0aGUgcm91dGUuXG4gICAgICAvLyBwcmludCB0aGUgcm91dGluZyBkZXRhaWxzIHRvIHRoZSBjb25zb2xlLlxuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBSb3V0ZXIgaXMgcmVzcG9uZGluZyB0bzogJHtnZXRGcmllbmRseVVSTCh1cmwpfWApO1xuXG4gICAgICBkZWJ1Z01lc3NhZ2VzLmZvckVhY2goKG1zZykgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtc2cpKSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZyguLi5tc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ2dlci5sb2cobXNnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIC8vIFdyYXAgaW4gdHJ5IGFuZCBjYXRjaCBpbiBjYXNlIHRoZSBoYW5kbGUgbWV0aG9kIHRocm93cyBhIHN5bmNocm9ub3VzXG4gICAgLy8gZXJyb3IuIEl0IHNob3VsZCBzdGlsbCBjYWxsYmFjayB0byB0aGUgY2F0Y2ggaGFuZGxlci5cbiAgICBsZXQgcmVzcG9uc2VQcm9taXNlO1xuICAgIHRyeSB7XG4gICAgICByZXNwb25zZVByb21pc2UgPSBoYW5kbGVyLmhhbmRsZSh7dXJsLCByZXF1ZXN0LCBldmVudCwgcGFyYW1zfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXNwb25zZVByb21pc2UgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIC8vIEdldCByb3V0ZSdzIGNhdGNoIGhhbmRsZXIsIGlmIGl0IGV4aXN0c1xuICAgIGNvbnN0IGNhdGNoSGFuZGxlciA9IHJvdXRlICYmIHJvdXRlLmNhdGNoSGFuZGxlcjtcblxuICAgIGlmIChcbiAgICAgIHJlc3BvbnNlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICh0aGlzLl9jYXRjaEhhbmRsZXIgfHwgY2F0Y2hIYW5kbGVyKVxuICAgICkge1xuICAgICAgcmVzcG9uc2VQcm9taXNlID0gcmVzcG9uc2VQcm9taXNlLmNhdGNoKGFzeW5jIChlcnIpID0+IHtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJvdXRlIGNhdGNoIGhhbmRsZXIsIHByb2Nlc3MgdGhhdCBmaXJzdFxuICAgICAgICBpZiAoY2F0Y2hIYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIFN0aWxsIGluY2x1ZGUgVVJMIGhlcmUgYXMgaXQgd2lsbCBiZSBhc3luYyBmcm9tIHRoZSBjb25zb2xlIGdyb3VwXG4gICAgICAgICAgICAvLyBhbmQgbWF5IG5vdCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIFVSTFxuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIHdoZW4gcmVzcG9uZGluZyB0bzogYCArXG4gICAgICAgICAgICAgICAgYCAke2dldEZyaWVuZGx5VVJMKFxuICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICl9LiBGYWxsaW5nIGJhY2sgdG8gcm91dGUncyBDYXRjaCBIYW5kbGVyLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBFcnJvciB0aHJvd24gYnk6YCwgcm91dGUpO1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhdGNoSGFuZGxlci5oYW5kbGUoe3VybCwgcmVxdWVzdCwgZXZlbnQsIHBhcmFtc30pO1xuICAgICAgICAgIH0gY2F0Y2ggKGNhdGNoRXJyKSB7XG4gICAgICAgICAgICBpZiAoY2F0Y2hFcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICBlcnIgPSBjYXRjaEVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY2F0Y2hIYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIFN0aWxsIGluY2x1ZGUgVVJMIGhlcmUgYXMgaXQgd2lsbCBiZSBhc3luYyBmcm9tIHRoZSBjb25zb2xlIGdyb3VwXG4gICAgICAgICAgICAvLyBhbmQgbWF5IG5vdCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIFVSTFxuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIHdoZW4gcmVzcG9uZGluZyB0bzogYCArXG4gICAgICAgICAgICAgICAgYCAke2dldEZyaWVuZGx5VVJMKFxuICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICl9LiBGYWxsaW5nIGJhY2sgdG8gZ2xvYmFsIENhdGNoIEhhbmRsZXIuYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYEVycm9yIHRocm93biBieTpgLCByb3V0ZSk7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2F0Y2hIYW5kbGVyLmhhbmRsZSh7dXJsLCByZXF1ZXN0LCBldmVudH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlUHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgYSByZXF1ZXN0IGFuZCBVUkwgKGFuZCBvcHRpb25hbGx5IGFuIGV2ZW50KSBhZ2FpbnN0IHRoZSBsaXN0IG9mXG4gICAqIHJlZ2lzdGVyZWQgcm91dGVzLCBhbmQgaWYgdGhlcmUncyBhIG1hdGNoLCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHJvdXRlIGFsb25nIHdpdGggYW55IHBhcmFtcyBnZW5lcmF0ZWQgYnkgdGhlIG1hdGNoLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1VSTH0gb3B0aW9ucy51cmxcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnNhbWVPcmlnaW4gVGhlIHJlc3VsdCBvZiBjb21wYXJpbmcgYHVybC5vcmlnaW5gXG4gICAqICAgICBhZ2FpbnN0IHRoZSBjdXJyZW50IG9yaWdpbi5cbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gbWF0Y2guXG4gICAqIEBwYXJhbSB7RXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGNvcnJlc3BvbmRpbmcgZXZlbnQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYHJvdXRlYCBhbmQgYHBhcmFtc2AgcHJvcGVydGllcy5cbiAgICogICAgIFRoZXkgYXJlIHBvcHVsYXRlZCBpZiBhIG1hdGNoaW5nIHJvdXRlIHdhcyBmb3VuZCBvciBgdW5kZWZpbmVkYFxuICAgKiAgICAgb3RoZXJ3aXNlLlxuICAgKi9cbiAgZmluZE1hdGNoaW5nUm91dGUoe1xuICAgIHVybCxcbiAgICBzYW1lT3JpZ2luLFxuICAgIHJlcXVlc3QsXG4gICAgZXZlbnQsXG4gIH06IFJvdXRlTWF0Y2hDYWxsYmFja09wdGlvbnMpOiB7XG4gICAgcm91dGU/OiBSb3V0ZTtcbiAgICBwYXJhbXM/OiBSb3V0ZUhhbmRsZXJDYWxsYmFja09wdGlvbnNbJ3BhcmFtcyddO1xuICB9IHtcbiAgICBjb25zdCByb3V0ZXMgPSB0aGlzLl9yb3V0ZXMuZ2V0KHJlcXVlc3QubWV0aG9kIGFzIEhUVFBNZXRob2QpIHx8IFtdO1xuICAgIGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XG4gICAgICBsZXQgcGFyYW1zOiBQcm9taXNlPGFueT4gfCB1bmRlZmluZWQ7XG4gICAgICAvLyByb3V0ZS5tYXRjaCByZXR1cm5zIHR5cGUgYW55LCBub3QgcG9zc2libGUgdG8gY2hhbmdlIHJpZ2h0IG5vdy5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gcm91dGUubWF0Y2goe3VybCwgc2FtZU9yaWdpbiwgcmVxdWVzdCwgZXZlbnR9KTtcbiAgICAgIGlmIChtYXRjaFJlc3VsdCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIFdhcm4gZGV2ZWxvcGVycyB0aGF0IHVzaW5nIGFuIGFzeW5jIG1hdGNoQ2FsbGJhY2sgaXMgYWxtb3N0IGFsd2F5c1xuICAgICAgICAgIC8vIG5vdCB0aGUgcmlnaHQgdGhpbmcgdG8gZG8uXG4gICAgICAgICAgaWYgKG1hdGNoUmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXG4gICAgICAgICAgICAgIGBXaGlsZSByb3V0aW5nICR7Z2V0RnJpZW5kbHlVUkwodXJsKX0sIGFuIGFzeW5jIGAgK1xuICAgICAgICAgICAgICAgIGBtYXRjaENhbGxiYWNrIGZ1bmN0aW9uIHdhcyB1c2VkLiBQbGVhc2UgY29udmVydCB0aGUgYCArXG4gICAgICAgICAgICAgICAgYGZvbGxvd2luZyByb3V0ZSB0byB1c2UgYSBzeW5jaHJvbm91cyBtYXRjaENhbGxiYWNrIGZ1bmN0aW9uOmAsXG4gICAgICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yMDc5XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgICAgcGFyYW1zID0gbWF0Y2hSZXN1bHQ7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtcykgJiYgcGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBhcnJheSBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIG1hdGNoUmVzdWx0LmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgIE9iamVjdC5rZXlzKG1hdGNoUmVzdWx0KS5sZW5ndGggPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gSW5zdGVhZCBvZiBwYXNzaW5nIGFuIGVtcHR5IG9iamVjdCBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXRjaFJlc3VsdCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgLy8gRm9yIHRoZSBib29sZWFuIHZhbHVlIHRydWUgKHJhdGhlciB0aGFuIGp1c3Qgc29tZXRoaW5nIHRydXRoLXkpLFxuICAgICAgICAgIC8vIGRvbid0IHNldCBwYXJhbXMuXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9wdWxsLzIxMzQjaXNzdWVjb21tZW50LTUxMzkyNDM1M1xuICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiBlYXJseSBpZiBoYXZlIGEgbWF0Y2guXG4gICAgICAgIHJldHVybiB7cm91dGUsIHBhcmFtc307XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIG5vIG1hdGNoIHdhcyBmb3VuZCBhYm92ZSwgcmV0dXJuIGFuZCBlbXB0eSBvYmplY3QuXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhIGRlZmF1bHQgYGhhbmRsZXJgIHRoYXQncyBjYWxsZWQgd2hlbiBubyByb3V0ZXMgZXhwbGljaXRseVxuICAgKiBtYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdC5cbiAgICpcbiAgICogRWFjaCBIVFRQIG1ldGhvZCAoJ0dFVCcsICdQT1NUJywgZXRjLikgZ2V0cyBpdHMgb3duIGRlZmF1bHQgaGFuZGxlci5cbiAgICpcbiAgICogV2l0aG91dCBhIGRlZmF1bHQgaGFuZGxlciwgdW5tYXRjaGVkIHJlcXVlc3RzIHdpbGwgZ28gYWdhaW5zdCB0aGVcbiAgICogbmV0d29yayBhcyBpZiB0aGVyZSB3ZXJlIG5vIHNlcnZpY2Ugd29ya2VyIHByZXNlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gYXNzb2NpYXRlIHdpdGggdGhpc1xuICAgKiBkZWZhdWx0IGhhbmRsZXIuIEVhY2ggbWV0aG9kIGhhcyBpdHMgb3duIGRlZmF1bHQuXG4gICAqL1xuICBzZXREZWZhdWx0SGFuZGxlcihcbiAgICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXIsXG4gICAgbWV0aG9kOiBIVFRQTWV0aG9kID0gZGVmYXVsdE1ldGhvZCxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAuc2V0KG1ldGhvZCwgbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogSWYgYSBSb3V0ZSB0aHJvd3MgYW4gZXJyb3Igd2hpbGUgaGFuZGxpbmcgYSByZXF1ZXN0LCB0aGlzIGBoYW5kbGVyYFxuICAgKiB3aWxsIGJlIGNhbGxlZCBhbmQgZ2l2ZW4gYSBjaGFuY2UgdG8gcHJvdmlkZSBhIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgKi9cbiAgc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXI6IFJvdXRlSGFuZGxlcik6IHZvaWQge1xuICAgIHRoaXMuX2NhdGNoSGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgcm91dGUgd2l0aCB0aGUgcm91dGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZy5Sb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRvIHJlZ2lzdGVyLlxuICAgKi9cbiAgcmVnaXN0ZXJSb3V0ZShyb3V0ZTogUm91dGUpOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUocm91dGUsICdvYmplY3QnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICB9KTtcblxuICAgICAgYXNzZXJ0IS5oYXNNZXRob2Qocm91dGUsICdtYXRjaCcsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgIH0pO1xuXG4gICAgICBhc3NlcnQhLmlzVHlwZShyb3V0ZS5oYW5kbGVyLCAnb2JqZWN0Jywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgfSk7XG5cbiAgICAgIGFzc2VydCEuaGFzTWV0aG9kKHJvdXRlLmhhbmRsZXIsICdoYW5kbGUnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZS5oYW5kbGVyJyxcbiAgICAgIH0pO1xuXG4gICAgICBhc3NlcnQhLmlzVHlwZShyb3V0ZS5tZXRob2QsICdzdHJpbmcnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZS5tZXRob2QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgIHRoaXMuX3JvdXRlcy5zZXQocm91dGUubWV0aG9kLCBbXSk7XG4gICAgfVxuXG4gICAgLy8gR2l2ZSBwcmVjZWRlbmNlIHRvIGFsbCBvZiB0aGUgZWFybGllciByb3V0ZXMgYnkgYWRkaW5nIHRoaXMgYWRkaXRpb25hbFxuICAgIC8vIHJvdXRlIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgIHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKSEucHVzaChyb3V0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVW5yZWdpc3RlcnMgYSByb3V0ZSB3aXRoIHRoZSByb3V0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gdW5yZWdpc3Rlci5cbiAgICovXG4gIHVucmVnaXN0ZXJSb3V0ZShyb3V0ZTogUm91dGUpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3JvdXRlcy5oYXMocm91dGUubWV0aG9kKSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJywge1xuICAgICAgICBtZXRob2Q6IHJvdXRlLm1ldGhvZCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlSW5kZXggPSB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkhLmluZGV4T2Yocm91dGUpO1xuICAgIGlmIChyb3V0ZUluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX3JvdXRlcy5nZXQocm91dGUubWV0aG9kKSEuc3BsaWNlKHJvdXRlSW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7Um91dGVyfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9Sb3V0ZXIuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmxldCBkZWZhdWx0Um91dGVyOiBSb3V0ZXI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgc2luZ2xldG9uIFJvdXRlciBpbnN0YW5jZSBpZiBvbmUgZG9lcyBub3QgZXhpc3QuIElmIG9uZVxuICogZG9lcyBhbHJlYWR5IGV4aXN0LCB0aGF0IGluc3RhbmNlIGlzIHJldHVybmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJuIHtSb3V0ZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIgPSAoKTogUm91dGVyID0+IHtcbiAgaWYgKCFkZWZhdWx0Um91dGVyKSB7XG4gICAgZGVmYXVsdFJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuICAgIC8vIFRoZSBoZWxwZXJzIHRoYXQgdXNlIHRoZSBkZWZhdWx0IFJvdXRlciBhc3N1bWUgdGhlc2UgbGlzdGVuZXJzIGV4aXN0LlxuICAgIGRlZmF1bHRSb3V0ZXIuYWRkRmV0Y2hMaXN0ZW5lcigpO1xuICAgIGRlZmF1bHRSb3V0ZXIuYWRkQ2FjaGVMaXN0ZW5lcigpO1xuICB9XG4gIHJldHVybiBkZWZhdWx0Um91dGVyO1xufTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7Um91dGVIYW5kbGVyLCBSb3V0ZU1hdGNoQ2FsbGJhY2t9IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7Um91dGV9IGZyb20gJy4vUm91dGUuanMnO1xuaW1wb3J0IHtSZWdFeHBSb3V0ZX0gZnJvbSAnLi9SZWdFeHBSb3V0ZS5qcyc7XG5pbXBvcnQge0hUVFBNZXRob2R9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7Z2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogRWFzaWx5IHJlZ2lzdGVyIGEgUmVnRXhwLCBzdHJpbmcsIG9yIGZ1bmN0aW9uIHdpdGggYSBjYWNoaW5nXG4gKiBzdHJhdGVneSB0byBhIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UuXG4gKlxuICogVGhpcyBtZXRob2Qgd2lsbCBnZW5lcmF0ZSBhIFJvdXRlIGZvciB5b3UgaWYgbmVlZGVkIGFuZFxuICogY2FsbCB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlciNyZWdpc3RlclJvdXRlfS5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd8d29ya2JveC1yb3V0aW5nLlJvdXRlfm1hdGNoQ2FsbGJhY2t8d29ya2JveC1yb3V0aW5nLlJvdXRlfSBjYXB0dXJlXG4gKiBJZiB0aGUgY2FwdHVyZSBwYXJhbSBpcyBhIGBSb3V0ZWAsIGFsbCBvdGhlciBhcmd1bWVudHMgd2lsbCBiZSBpZ25vcmVkLlxuICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBbaGFuZGxlcl0gQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS4gVGhpcyBwYXJhbWV0ZXJcbiAqIGlzIHJlcXVpcmVkIGlmIGBjYXB0dXJlYCBpcyBub3QgYSBgUm91dGVgIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gKiBhZ2FpbnN0LlxuICogQHJldHVybiB7d29ya2JveC1yb3V0aW5nLlJvdXRlfSBUaGUgZ2VuZXJhdGVkIGBSb3V0ZWAuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5mdW5jdGlvbiByZWdpc3RlclJvdXRlKFxuICBjYXB0dXJlOiBSZWdFeHAgfCBzdHJpbmcgfCBSb3V0ZU1hdGNoQ2FsbGJhY2sgfCBSb3V0ZSxcbiAgaGFuZGxlcj86IFJvdXRlSGFuZGxlcixcbiAgbWV0aG9kPzogSFRUUE1ldGhvZCxcbik6IFJvdXRlIHtcbiAgbGV0IHJvdXRlO1xuXG4gIGlmICh0eXBlb2YgY2FwdHVyZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBjYXB0dXJlVXJsID0gbmV3IFVSTChjYXB0dXJlLCBsb2NhdGlvbi5ocmVmKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIShjYXB0dXJlLnN0YXJ0c1dpdGgoJy8nKSB8fCBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC1zdHJpbmcnLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjYXB0dXJlJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIHdhbnQgdG8gY2hlY2sgaWYgRXhwcmVzcy1zdHlsZSB3aWxkY2FyZHMgYXJlIGluIHRoZSBwYXRobmFtZSBvbmx5LlxuICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgbG9nIG1lc3NhZ2UgaW4gdjQuXG4gICAgICBjb25zdCB2YWx1ZVRvQ2hlY2sgPSBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKVxuICAgICAgICA/IGNhcHR1cmVVcmwucGF0aG5hbWVcbiAgICAgICAgOiBjYXB0dXJlO1xuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwI3BhcmFtZXRlcnNcbiAgICAgIGNvbnN0IHdpbGRjYXJkcyA9ICdbKjo/K10nO1xuICAgICAgaWYgKG5ldyBSZWdFeHAoYCR7d2lsZGNhcmRzfWApLmV4ZWModmFsdWVUb0NoZWNrKSkge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgYFRoZSAnJGNhcHR1cmUnIHBhcmFtZXRlciBjb250YWlucyBhbiBFeHByZXNzLXN0eWxlIHdpbGRjYXJkIGAgK1xuICAgICAgICAgICAgYGNoYXJhY3RlciAoJHt3aWxkY2FyZHN9KS4gU3RyaW5ncyBhcmUgbm93IGFsd2F5cyBpbnRlcnByZXRlZCBhcyBgICtcbiAgICAgICAgICAgIGBleGFjdCBtYXRjaGVzOyB1c2UgYSBSZWdFeHAgZm9yIHBhcnRpYWwgb3Igd2lsZGNhcmQgbWF0Y2hlcy5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoQ2FsbGJhY2s6IFJvdXRlTWF0Y2hDYWxsYmFjayA9ICh7dXJsfSkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHVybC5wYXRobmFtZSA9PT0gY2FwdHVyZVVybC5wYXRobmFtZSAmJlxuICAgICAgICAgIHVybC5vcmlnaW4gIT09IGNhcHR1cmVVcmwub3JpZ2luXG4gICAgICAgICkge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgIGAke2NhcHR1cmV9IG9ubHkgcGFydGlhbGx5IG1hdGNoZXMgdGhlIGNyb3NzLW9yaWdpbiBVUkwgYCArXG4gICAgICAgICAgICAgIGAke3VybC50b1N0cmluZygpfS4gVGhpcyByb3V0ZSB3aWxsIG9ubHkgaGFuZGxlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyBgICtcbiAgICAgICAgICAgICAgYGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1cmwuaHJlZiA9PT0gY2FwdHVyZVVybC5ocmVmO1xuICAgIH07XG5cbiAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBzdHJpbmcgdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICByb3V0ZSA9IG5ldyBSb3V0ZShtYXRjaENhbGxiYWNrLCBoYW5kbGVyISwgbWV0aG9kKTtcbiAgfSBlbHNlIGlmIChjYXB0dXJlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgYFJlZ0V4cGAgdGhlbiBgaGFuZGxlcmAgYW5kIGBtZXRob2RgIG11c3QgYmUgcHJlc2VudC5cbiAgICByb3V0ZSA9IG5ldyBSZWdFeHBSb3V0ZShjYXB0dXJlLCBoYW5kbGVyISwgbWV0aG9kKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY2FwdHVyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIGZ1bmN0aW9uIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgcm91dGUgPSBuZXcgUm91dGUoY2FwdHVyZSwgaGFuZGxlciEsIG1ldGhvZCk7XG4gIH0gZWxzZSBpZiAoY2FwdHVyZSBpbnN0YW5jZW9mIFJvdXRlKSB7XG4gICAgcm91dGUgPSBjYXB0dXJlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnLCB7XG4gICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICBwYXJhbU5hbWU6ICdjYXB0dXJlJyxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGRlZmF1bHRSb3V0ZXIgPSBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIoKTtcbiAgZGVmYXVsdFJvdXRlci5yZWdpc3RlclJvdXRlKHJvdXRlKTtcblxuICByZXR1cm4gcm91dGU7XG59XG5cbmV4cG9ydCB7cmVnaXN0ZXJSb3V0ZX07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1JvdXRlSGFuZGxlcn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0IHtnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXJ9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBJZiBhIFJvdXRlIHRocm93cyBhbiBlcnJvciB3aGlsZSBoYW5kbGluZyBhIHJlcXVlc3QsIHRoaXMgYGhhbmRsZXJgXG4gKiB3aWxsIGJlIGNhbGxlZCBhbmQgZ2l2ZW4gYSBjaGFuY2UgdG8gcHJvdmlkZSBhIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuZnVuY3Rpb24gc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXI6IFJvdXRlSGFuZGxlcik6IHZvaWQge1xuICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gIGRlZmF1bHRSb3V0ZXIuc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXIpO1xufVxuXG5leHBvcnQge3NldENhdGNoSGFuZGxlcn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmZ1bmN0aW9uIHN0cmlwUGFyYW1zKGZ1bGxVUkw6IHN0cmluZywgaWdub3JlUGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBzdHJpcHBlZFVSTCA9IG5ldyBVUkwoZnVsbFVSTCk7XG4gIGZvciAoY29uc3QgcGFyYW0gb2YgaWdub3JlUGFyYW1zKSB7XG4gICAgc3RyaXBwZWRVUkwuc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbSk7XG4gIH1cbiAgcmV0dXJuIHN0cmlwcGVkVVJMLmhyZWY7XG59XG5cbi8qKlxuICogTWF0Y2hlcyBhbiBpdGVtIGluIHRoZSBjYWNoZSwgaWdub3Jpbmcgc3BlY2lmaWMgVVJMIHBhcmFtcy4gVGhpcyBpcyBzaW1pbGFyXG4gKiB0byB0aGUgYGlnbm9yZVNlYXJjaGAgb3B0aW9uLCBidXQgaXQgYWxsb3dzIHlvdSB0byBpZ25vcmUganVzdCBzcGVjaWZpY1xuICogcGFyYW1zICh3aGlsZSBjb250aW51aW5nIHRvIG1hdGNoIG9uIHRoZSBvdGhlcnMpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0NhY2hlfSBjYWNoZVxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge09iamVjdH0gbWF0Y2hPcHRpb25zXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGlnbm9yZVBhcmFtc1xuICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fVxuICovXG5hc3luYyBmdW5jdGlvbiBjYWNoZU1hdGNoSWdub3JlUGFyYW1zKFxuICBjYWNoZTogQ2FjaGUsXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIGlnbm9yZVBhcmFtczogc3RyaW5nW10sXG4gIG1hdGNoT3B0aW9ucz86IENhY2hlUXVlcnlPcHRpb25zLFxuKTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCBzdHJpcHBlZFJlcXVlc3RVUkwgPSBzdHJpcFBhcmFtcyhyZXF1ZXN0LnVybCwgaWdub3JlUGFyYW1zKTtcblxuICAvLyBJZiB0aGUgcmVxdWVzdCBkb2Vzbid0IGluY2x1ZGUgYW55IGlnbm9yZWQgcGFyYW1zLCBtYXRjaCBhcyBub3JtYWwuXG4gIGlmIChyZXF1ZXN0LnVybCA9PT0gc3RyaXBwZWRSZXF1ZXN0VVJMKSB7XG4gICAgcmV0dXJuIGNhY2hlLm1hdGNoKHJlcXVlc3QsIG1hdGNoT3B0aW9ucyk7XG4gIH1cblxuICAvLyBPdGhlcndpc2UsIG1hdGNoIGJ5IGNvbXBhcmluZyBrZXlzXG4gIGNvbnN0IGtleXNPcHRpb25zID0gey4uLm1hdGNoT3B0aW9ucywgaWdub3JlU2VhcmNoOiB0cnVlfTtcbiAgY29uc3QgY2FjaGVLZXlzID0gYXdhaXQgY2FjaGUua2V5cyhyZXF1ZXN0LCBrZXlzT3B0aW9ucyk7XG5cbiAgZm9yIChjb25zdCBjYWNoZUtleSBvZiBjYWNoZUtleXMpIHtcbiAgICBjb25zdCBzdHJpcHBlZENhY2hlS2V5VVJMID0gc3RyaXBQYXJhbXMoY2FjaGVLZXkudXJsLCBpZ25vcmVQYXJhbXMpO1xuICAgIGlmIChzdHJpcHBlZFJlcXVlc3RVUkwgPT09IHN0cmlwcGVkQ2FjaGVLZXlVUkwpIHtcbiAgICAgIHJldHVybiBjYWNoZS5tYXRjaChjYWNoZUtleSwgbWF0Y2hPcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5leHBvcnQge2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXN9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogVGhlIERlZmVycmVkIGNsYXNzIGNvbXBvc2VzIFByb21pc2VzIGluIGEgd2F5IHRoYXQgYWxsb3dzIGZvciB0aGVtIHRvIGJlXG4gKiByZXNvbHZlZCBvciByZWplY3RlZCBmcm9tIG91dHNpZGUgdGhlIGNvbnN0cnVjdG9yLiBJbiBtb3N0IGNhc2VzIHByb21pc2VzXG4gKiBzaG91bGQgYmUgdXNlZCBkaXJlY3RseSwgYnV0IERlZmVycmVkcyBjYW4gYmUgbmVjZXNzYXJ5IHdoZW4gdGhlIGxvZ2ljIHRvXG4gKiByZXNvbHZlIGEgcHJvbWlzZSBtdXN0IGJlIHNlcGFyYXRlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIERlZmVycmVkPFQ+IHtcbiAgcHJvbWlzZTogUHJvbWlzZTxUPjtcbiAgcmVzb2x2ZSE6ICh2YWx1ZTogVCkgPT4gdm9pZDtcbiAgcmVqZWN0ITogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHByb21pc2UgYW5kIGV4cG9zZXMgaXRzIHJlc29sdmUgYW5kIHJlamVjdCBmdW5jdGlvbnMgYXMgbWV0aG9kcy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQge0RlZmVycmVkfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bG9nZ2VyfSBmcm9tICcuLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtxdW90YUVycm9yQ2FsbGJhY2tzfSBmcm9tICcuLi9tb2RlbHMvcXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBSdW5zIGFsbCBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zLCBvbmUgYXQgYSB0aW1lIHNlcXVlbnRpYWxseSwgaW4gdGhlIG9yZGVyXG4gKiBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jb3JlXG4gKiBAcHJpdmF0ZVxuICovXG5hc3luYyBmdW5jdGlvbiBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZXIubG9nKFxuICAgICAgYEFib3V0IHRvIHJ1biAke3F1b3RhRXJyb3JDYWxsYmFja3Muc2l6ZX0gYCArXG4gICAgICAgIGBjYWxsYmFja3MgdG8gY2xlYW4gdXAgY2FjaGVzLmAsXG4gICAgKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgcXVvdGFFcnJvckNhbGxiYWNrcykge1xuICAgIGF3YWl0IGNhbGxiYWNrKCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGxvZ2dlci5sb2coY2FsbGJhY2ssICdpcyBjb21wbGV0ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlci5sb2coJ0ZpbmlzaGVkIHJ1bm5pbmcgY2FsbGJhY2tzLicpO1xuICB9XG59XG5cbmV4cG9ydCB7ZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3N9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYW5kIHRoZSBwYXNzZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAqIFRoaXMgdXRpbGl0eSBpcyBhbiBhc3luYy9hd2FpdC1mcmllbmRseSB2ZXJzaW9uIG9mIGBzZXRUaW1lb3V0YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbXNcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0KG1zOiBudW1iZXIpOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCAiLy8gQHRzLWlnbm9yZVxudHJ5e3NlbGZbJ3dvcmtib3g6c3RyYXRlZ2llczo3LjEuMCddJiZfKCl9Y2F0Y2goZSl7fSIsICIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7Y2FjaGVNYXRjaElnbm9yZVBhcmFtc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXMuanMnO1xuaW1wb3J0IHtEZWZlcnJlZH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL0RlZmVycmVkLmpzJztcbmltcG9ydCB7ZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3N9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHt0aW1lb3V0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvdGltZW91dC5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge1xuICBIYW5kbGVyQ2FsbGJhY2tPcHRpb25zLFxuICBNYXBMaWtlT2JqZWN0LFxuICBXb3JrYm94UGx1Z2luLFxuICBXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbSxcbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0IHtTdHJhdGVneX0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5mdW5jdGlvbiB0b1JlcXVlc3QoaW5wdXQ6IFJlcXVlc3RJbmZvKSB7XG4gIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gbmV3IFJlcXVlc3QoaW5wdXQpIDogaW5wdXQ7XG59XG5cbi8qKlxuICogQSBjbGFzcyBjcmVhdGVkIGV2ZXJ5IHRpbWUgYSBTdHJhdGVneSBpbnN0YW5jZSBpbnN0YW5jZSBjYWxsc1xuICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGV9IG9yXG4gKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fmhhbmRsZUFsbH0gdGhhdCB3cmFwcyBhbGwgZmV0Y2ggYW5kXG4gKiBjYWNoZSBhY3Rpb25zIGFyb3VuZCBwbHVnaW4gY2FsbGJhY2tzIGFuZCBrZWVwcyB0cmFjayBvZiB3aGVuIHRoZSBzdHJhdGVneVxuICogaXMgXCJkb25lXCIgKGkuZS4gYWxsIGFkZGVkIGBldmVudC53YWl0VW50aWwoKWAgcHJvbWlzZXMgaGF2ZSByZXNvbHZlZCkuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBTdHJhdGVneUhhbmRsZXIge1xuICBwdWJsaWMgcmVxdWVzdCE6IFJlcXVlc3Q7XG4gIHB1YmxpYyB1cmw/OiBVUkw7XG4gIHB1YmxpYyBldmVudDogRXh0ZW5kYWJsZUV2ZW50O1xuICBwdWJsaWMgcGFyYW1zPzogYW55O1xuXG4gIHByaXZhdGUgX2NhY2hlS2V5czogUmVjb3JkPHN0cmluZywgUmVxdWVzdD4gPSB7fTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9zdHJhdGVneTogU3RyYXRlZ3k7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2V4dGVuZExpZmV0aW1lUHJvbWlzZXM6IFByb21pc2U8YW55PltdO1xuICBwcml2YXRlIHJlYWRvbmx5IF9oYW5kbGVyRGVmZXJyZWQ6IERlZmVycmVkPGFueT47XG4gIHByaXZhdGUgcmVhZG9ubHkgX3BsdWdpbnM6IFdvcmtib3hQbHVnaW5bXTtcbiAgcHJpdmF0ZSByZWFkb25seSBfcGx1Z2luU3RhdGVNYXA6IE1hcDxXb3JrYm94UGx1Z2luLCBNYXBMaWtlT2JqZWN0PjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIHBhc3NlZCBzdHJhdGVneSBhbmQgZXZlbnRcbiAgICogdGhhdCdzIGhhbmRsaW5nIHRoZSByZXF1ZXN0LlxuICAgKlxuICAgKiBUaGUgY29uc3RydWN0b3IgYWxzbyBpbml0aWFsaXplcyB0aGUgc3RhdGUgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byBlYWNoIG9mXG4gICAqIHRoZSBwbHVnaW5zIGhhbmRsaW5nIHRoaXMgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l9IHN0cmF0ZWd5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgKiAgICAgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtVUkx9IFtvcHRpb25zLnVybF1cbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5wYXJhbXNdIFRoZSByZXR1cm4gdmFsdWUgZnJvbSB0aGVcbiAgICogICAgIHtAbGluayB3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gKGlmIGFwcGxpY2FibGUpLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RyYXRlZ3k6IFN0cmF0ZWd5LCBvcHRpb25zOiBIYW5kbGVyQ2FsbGJhY2tPcHRpb25zKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlcXVlc3QgdGhlIHN0cmF0ZWd5IGlzIHBlcmZvcm1pbmcgKHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAqIEBuYW1lIHJlcXVlc3RcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7UmVxdWVzdH1cbiAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyByZXF1ZXN0LlxuICAgICAqIEBuYW1lIGV2ZW50XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHR5cGUge0V4dGVuZGFibGVFdmVudH1cbiAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEEgYFVSTGAgaW5zdGFuY2Ugb2YgYHJlcXVlc3QudXJsYCAoaWYgcGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICogYGhhbmRsZSgpYCBvciBgaGFuZGxlQWxsKClgIG1ldGhvZCkuXG4gICAgICogTm90ZTogdGhlIGB1cmxgIHBhcmFtIHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgc3RyYXRlZ3kgd2FzIGludm9rZWRcbiAgICAgKiBmcm9tIGEgd29ya2JveCBgUm91dGVgIG9iamVjdC5cbiAgICAgKiBAbmFtZSB1cmxcbiAgICAgKiBAaW5zdGFuY2VcbiAgICAgKiBAdHlwZSB7VVJMfHVuZGVmaW5lZH1cbiAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEEgYHBhcmFtYCB2YWx1ZSAoaWYgcGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICogYGhhbmRsZSgpYCBvciBgaGFuZGxlQWxsKClgIG1ldGhvZCkuXG4gICAgICogTm90ZTogdGhlIGBwYXJhbWAgcGFyYW0gd2lsbCBiZSBwcmVzZW50IGlmIHRoZSBzdHJhdGVneSB3YXMgaW52b2tlZFxuICAgICAqIGZyb20gYSB3b3JrYm94IGBSb3V0ZWAgb2JqZWN0IGFuZCB0aGVcbiAgICAgKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nfm1hdGNoQ2FsbGJhY2t9IHJldHVybmVkXG4gICAgICogYSB0cnV0aHkgdmFsdWUgKGl0IHdpbGwgYmUgdGhhdCB2YWx1ZSkuXG4gICAgICogQG5hbWUgcGFyYW1zXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHR5cGUgeyp8dW5kZWZpbmVkfVxuICAgICAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShvcHRpb25zLmV2ZW50LCBFeHRlbmRhYmxlRXZlbnQsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1N0cmF0ZWd5SGFuZGxlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLmV2ZW50JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLmV2ZW50ID0gb3B0aW9ucy5ldmVudDtcbiAgICB0aGlzLl9zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgIHRoaXMuX2hhbmRsZXJEZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCgpO1xuICAgIHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMgPSBbXTtcblxuICAgIC8vIENvcHkgdGhlIHBsdWdpbnMgbGlzdCAoc2luY2UgaXQncyBtdXRhYmxlIG9uIHRoZSBzdHJhdGVneSksXG4gICAgLy8gc28gYW55IG11dGF0aW9ucyBkb24ndCBhZmZlY3QgdGhpcyBoYW5kbGVyIGluc3RhbmNlLlxuICAgIHRoaXMuX3BsdWdpbnMgPSBbLi4uc3RyYXRlZ3kucGx1Z2luc107XG4gICAgdGhpcy5fcGx1Z2luU3RhdGVNYXAgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fcGx1Z2lucykge1xuICAgICAgdGhpcy5fcGx1Z2luU3RhdGVNYXAuc2V0KHBsdWdpbiwge30pO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnQud2FpdFVudGlsKHRoaXMuX2hhbmRsZXJEZWZlcnJlZC5wcm9taXNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgZ2l2ZW4gcmVxdWVzdCAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGUgcGx1Z2luIGNhbGxiYWNrXG4gICAqIG1ldGhvZHMpIHVzaW5nIHRoZSBgZmV0Y2hPcHRpb25zYCAoZm9yIG5vbi1uYXZpZ2F0aW9uIHJlcXVlc3RzKSBhbmRcbiAgICogYHBsdWdpbnNgIGRlZmluZWQgb24gdGhlIGBTdHJhdGVneWAgb2JqZWN0LlxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIHBsdWdpbiBsaWZlY3ljbGUgbWV0aG9kcyBhcmUgaW52b2tlZCB3aGVuIHVzaW5nIHRoaXMgbWV0aG9kOlxuICAgKiAtIGByZXF1ZXN0V2lsbEZldGNoKClgXG4gICAqIC0gYGZldGNoRGlkU3VjY2VlZCgpYFxuICAgKiAtIGBmZXRjaERpZEZhaWwoKWBcbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gaW5wdXQgVGhlIFVSTCBvciByZXF1ZXN0IHRvIGZldGNoLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIGZldGNoKGlucHV0OiBSZXF1ZXN0SW5mbyk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCB7ZXZlbnR9ID0gdGhpcztcbiAgICBsZXQgcmVxdWVzdDogUmVxdWVzdCA9IHRvUmVxdWVzdChpbnB1dCk7XG5cbiAgICBpZiAoXG4gICAgICByZXF1ZXN0Lm1vZGUgPT09ICduYXZpZ2F0ZScgJiZcbiAgICAgIGV2ZW50IGluc3RhbmNlb2YgRmV0Y2hFdmVudCAmJlxuICAgICAgZXZlbnQucHJlbG9hZFJlc3BvbnNlXG4gICAgKSB7XG4gICAgICBjb25zdCBwb3NzaWJsZVByZWxvYWRSZXNwb25zZSA9IChhd2FpdCBldmVudC5wcmVsb2FkUmVzcG9uc2UpIGFzXG4gICAgICAgIHwgUmVzcG9uc2VcbiAgICAgICAgfCB1bmRlZmluZWQ7XG4gICAgICBpZiAocG9zc2libGVQcmVsb2FkUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgICAgYFVzaW5nIGEgcHJlbG9hZGVkIG5hdmlnYXRpb24gcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgZmV0Y2hEaWRGYWlsIHBsdWdpbiwgd2UgbmVlZCB0byBzYXZlIGEgY2xvbmUgb2YgdGhlXG4gICAgLy8gb3JpZ2luYWwgcmVxdWVzdCBiZWZvcmUgaXQncyBlaXRoZXIgbW9kaWZpZWQgYnkgYSByZXF1ZXN0V2lsbEZldGNoXG4gICAgLy8gcGx1Z2luIG9yIGJlZm9yZSB0aGUgb3JpZ2luYWwgcmVxdWVzdCdzIGJvZHkgaXMgY29uc3VtZWQgdmlhIGZldGNoKCkuXG4gICAgY29uc3Qgb3JpZ2luYWxSZXF1ZXN0ID0gdGhpcy5oYXNDYWxsYmFjaygnZmV0Y2hEaWRGYWlsJylcbiAgICAgID8gcmVxdWVzdC5jbG9uZSgpXG4gICAgICA6IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgZm9yIChjb25zdCBjYiBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ3JlcXVlc3RXaWxsRmV0Y2gnKSkge1xuICAgICAgICByZXF1ZXN0ID0gYXdhaXQgY2Ioe3JlcXVlc3Q6IHJlcXVlc3QuY2xvbmUoKSwgZXZlbnR9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywge1xuICAgICAgICAgIHRocm93bkVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSByZXF1ZXN0IGNhbiBiZSBhbHRlcmVkIGJ5IHBsdWdpbnMgd2l0aCBgcmVxdWVzdFdpbGxGZXRjaGAgbWFraW5nXG4gICAgLy8gdGhlIG9yaWdpbmFsIHJlcXVlc3QgKG1vc3QgbGlrZWx5IGZyb20gYSBgZmV0Y2hgIGV2ZW50KSBkaWZmZXJlbnRcbiAgICAvLyBmcm9tIHRoZSBSZXF1ZXN0IHdlIG1ha2UuIFBhc3MgYm90aCB0byBgZmV0Y2hEaWRGYWlsYCB0byBhaWQgZGVidWdnaW5nLlxuICAgIGNvbnN0IHBsdWdpbkZpbHRlcmVkUmVxdWVzdDogUmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoKTtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgZmV0Y2hSZXNwb25zZTogUmVzcG9uc2U7XG5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTZcbiAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgcmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnID8gdW5kZWZpbmVkIDogdGhpcy5fc3RyYXRlZ3kuZmV0Y2hPcHRpb25zLFxuICAgICAgKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgIGBOZXR3b3JrIHJlcXVlc3QgZm9yIGAgK1xuICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHJldHVybmVkIGEgcmVzcG9uc2Ugd2l0aCBgICtcbiAgICAgICAgICAgIGBzdGF0dXMgJyR7ZmV0Y2hSZXNwb25zZS5zdGF0dXN9Jy5gLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnZmV0Y2hEaWRTdWNjZWVkJykpIHtcbiAgICAgICAgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICByZXF1ZXN0OiBwbHVnaW5GaWx0ZXJlZFJlcXVlc3QsXG4gICAgICAgICAgcmVzcG9uc2U6IGZldGNoUmVzcG9uc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZldGNoUmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coXG4gICAgICAgICAgYE5ldHdvcmsgcmVxdWVzdCBmb3IgYCArXG4gICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScgdGhyZXcgYW4gZXJyb3IuYCxcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gYG9yaWdpbmFsUmVxdWVzdGAgd2lsbCBvbmx5IGV4aXN0IGlmIGEgYGZldGNoRGlkRmFpbGAgY2FsbGJhY2tcbiAgICAgIC8vIGlzIGJlaW5nIHVzZWQgKHNlZSBhYm92ZSkuXG4gICAgICBpZiAob3JpZ2luYWxSZXF1ZXN0KSB7XG4gICAgICAgIGF3YWl0IHRoaXMucnVuQ2FsbGJhY2tzKCdmZXRjaERpZEZhaWwnLCB7XG4gICAgICAgICAgZXJyb3I6IGVycm9yIGFzIEVycm9yLFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9yaWdpbmFsUmVxdWVzdDogb3JpZ2luYWxSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgcmVxdWVzdDogcGx1Z2luRmlsdGVyZWRSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIGB0aGlzLmZldGNoKClgIGFuZCAoaW4gdGhlIGJhY2tncm91bmQpIHJ1bnMgYHRoaXMuY2FjaGVQdXQoKWAgb25cbiAgICogdGhlIHJlc3BvbnNlIGdlbmVyYXRlZCBieSBgdGhpcy5mZXRjaCgpYC5cbiAgICpcbiAgICogVGhlIGNhbGwgdG8gYHRoaXMuY2FjaGVQdXQoKWAgYXV0b21hdGljYWxseSBpbnZva2VzIGB0aGlzLndhaXRVbnRpbCgpYCxcbiAgICogc28geW91IGRvIG5vdCBoYXZlIHRvIG1hbnVhbGx5IGNhbGwgYHdhaXRVbnRpbCgpYCBvbiB0aGUgZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGlucHV0IFRoZSByZXF1ZXN0IG9yIFVSTCB0byBmZXRjaCBhbmQgY2FjaGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgZmV0Y2hBbmRDYWNoZVB1dChpbnB1dDogUmVxdWVzdEluZm8pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoKGlucHV0KTtcbiAgICBjb25zdCByZXNwb25zZUNsb25lID0gcmVzcG9uc2UuY2xvbmUoKTtcblxuICAgIHZvaWQgdGhpcy53YWl0VW50aWwodGhpcy5jYWNoZVB1dChpbnB1dCwgcmVzcG9uc2VDbG9uZSkpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hdGNoZXMgYSByZXF1ZXN0IGZyb20gdGhlIGNhY2hlIChhbmQgaW52b2tlcyBhbnkgYXBwbGljYWJsZSBwbHVnaW5cbiAgICogY2FsbGJhY2sgbWV0aG9kcykgdXNpbmcgdGhlIGBjYWNoZU5hbWVgLCBgbWF0Y2hPcHRpb25zYCwgYW5kIGBwbHVnaW5zYFxuICAgKiBkZWZpbmVkIG9uIHRoZSBzdHJhdGVneSBvYmplY3QuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAqIC0gY2FjaGVLZXlXaWxsQnlVc2VkKClcbiAgICogLSBjYWNoZWRSZXNwb25zZVdpbGxCeVVzZWQoKVxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBrZXkgVGhlIFJlcXVlc3Qgb3IgVVJMIHRvIHVzZSBhcyB0aGUgY2FjaGUga2V5LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59IEEgbWF0Y2hpbmcgcmVzcG9uc2UsIGlmIGZvdW5kLlxuICAgKi9cbiAgYXN5bmMgY2FjaGVNYXRjaChrZXk6IFJlcXVlc3RJbmZvKTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IFJlcXVlc3QgPSB0b1JlcXVlc3Qoa2V5KTtcbiAgICBsZXQgY2FjaGVkUmVzcG9uc2U6IFJlc3BvbnNlIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IHtjYWNoZU5hbWUsIG1hdGNoT3B0aW9uc30gPSB0aGlzLl9zdHJhdGVneTtcblxuICAgIGNvbnN0IGVmZmVjdGl2ZVJlcXVlc3QgPSBhd2FpdCB0aGlzLmdldENhY2hlS2V5KHJlcXVlc3QsICdyZWFkJyk7XG4gICAgY29uc3QgbXVsdGlNYXRjaE9wdGlvbnMgPSB7Li4ubWF0Y2hPcHRpb25zLCAuLi57Y2FjaGVOYW1lfX07XG5cbiAgICBjYWNoZWRSZXNwb25zZSA9IGF3YWl0IGNhY2hlcy5tYXRjaChlZmZlY3RpdmVSZXF1ZXN0LCBtdWx0aU1hdGNoT3B0aW9ucyk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gJyR7Y2FjaGVOYW1lfScuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dnZXIuZGVidWcoYE5vIGNhY2hlZCByZXNwb25zZSBmb3VuZCBpbiAnJHtjYWNoZU5hbWV9Jy5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkJykpIHtcbiAgICAgIGNhY2hlZFJlc3BvbnNlID1cbiAgICAgICAgKGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICBjYWNoZU5hbWUsXG4gICAgICAgICAgbWF0Y2hPcHRpb25zLFxuICAgICAgICAgIGNhY2hlZFJlc3BvbnNlLFxuICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgIH0pKSB8fCB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRSZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXRzIGEgcmVxdWVzdC9yZXNwb25zZSBwYWlyIGluIHRoZSBjYWNoZSAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGVcbiAgICogcGx1Z2luIGNhbGxiYWNrIG1ldGhvZHMpIHVzaW5nIHRoZSBgY2FjaGVOYW1lYCBhbmQgYHBsdWdpbnNgIGRlZmluZWQgb25cbiAgICogdGhlIHN0cmF0ZWd5IG9iamVjdC5cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICogLSBjYWNoZUtleVdpbGxCeVVzZWQoKVxuICAgKiAtIGNhY2hlV2lsbFVwZGF0ZSgpXG4gICAqIC0gY2FjaGVEaWRVcGRhdGUoKVxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBrZXkgVGhlIHJlcXVlc3Qgb3IgVVJMIHRvIHVzZSBhcyB0aGUgY2FjaGUga2V5LlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZSBUaGUgcmVzcG9uc2UgdG8gY2FjaGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IGBmYWxzZWAgaWYgYSBjYWNoZVdpbGxVcGRhdGUgY2F1c2VkIHRoZSByZXNwb25zZVxuICAgKiBub3QgYmUgY2FjaGVkLCBhbmQgYHRydWVgIG90aGVyd2lzZS5cbiAgICovXG4gIGFzeW5jIGNhY2hlUHV0KGtleTogUmVxdWVzdEluZm8sIHJlc3BvbnNlOiBSZXNwb25zZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IFJlcXVlc3QgPSB0b1JlcXVlc3Qoa2V5KTtcblxuICAgIC8vIFJ1biBpbiB0aGUgbmV4dCB0YXNrIHRvIGF2b2lkIGJsb2NraW5nIG90aGVyIGNhY2hlIHJlYWRzLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvU2VydmljZVdvcmtlci9pc3N1ZXMvMTM5N1xuICAgIGF3YWl0IHRpbWVvdXQoMCk7XG5cbiAgICBjb25zdCBlZmZlY3RpdmVSZXF1ZXN0ID0gYXdhaXQgdGhpcy5nZXRDYWNoZUtleShyZXF1ZXN0LCAnd3JpdGUnKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QgJiYgZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2F0dGVtcHQtdG8tY2FjaGUtbm9uLWdldC1yZXF1ZXN0Jywge1xuICAgICAgICAgIHVybDogZ2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpLFxuICAgICAgICAgIG1ldGhvZDogZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yODE4XG4gICAgICBjb25zdCB2YXJ5ID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1ZhcnknKTtcbiAgICAgIGlmICh2YXJ5KSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICBgVGhlIHJlc3BvbnNlIGZvciAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0gYCArXG4gICAgICAgICAgICBgaGFzIGEgJ1Zhcnk6ICR7dmFyeX0nIGhlYWRlci4gYCArXG4gICAgICAgICAgICBgQ29uc2lkZXIgc2V0dGluZyB0aGUge2lnbm9yZVZhcnk6IHRydWV9IG9wdGlvbiBvbiB5b3VyIHN0cmF0ZWd5IGAgK1xuICAgICAgICAgICAgYHRvIGVuc3VyZSBjYWNoZSBtYXRjaGluZyBhbmQgZGVsZXRpb24gd29ya3MgYXMgZXhwZWN0ZWQuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZXJyb3IoXG4gICAgICAgICAgYENhbm5vdCBjYWNoZSBub24tZXhpc3RlbnQgcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nLmAsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2NhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlJywge1xuICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlVG9DYWNoZSA9IGF3YWl0IHRoaXMuX2Vuc3VyZVJlc3BvbnNlU2FmZVRvQ2FjaGUocmVzcG9uc2UpO1xuXG4gICAgaWYgKCFyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICBgUmVzcG9uc2UgJyR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfScgYCArXG4gICAgICAgICAgICBgd2lsbCBub3QgYmUgY2FjaGVkLmAsXG4gICAgICAgICAgcmVzcG9uc2VUb0NhY2hlLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHtjYWNoZU5hbWUsIG1hdGNoT3B0aW9uc30gPSB0aGlzLl9zdHJhdGVneTtcbiAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4oY2FjaGVOYW1lKTtcblxuICAgIGNvbnN0IGhhc0NhY2hlVXBkYXRlQ2FsbGJhY2sgPSB0aGlzLmhhc0NhbGxiYWNrKCdjYWNoZURpZFVwZGF0ZScpO1xuICAgIGNvbnN0IG9sZFJlc3BvbnNlID0gaGFzQ2FjaGVVcGRhdGVDYWxsYmFja1xuICAgICAgPyBhd2FpdCBjYWNoZU1hdGNoSWdub3JlUGFyYW1zKFxuICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogdGhlIGBfX1dCX1JFVklTSU9OX19gIHBhcmFtIGlzIGEgcHJlY2FjaGluZ1xuICAgICAgICAgIC8vIGZlYXR1cmUuIENvbnNpZGVyIGludG8gd2F5cyB0byBvbmx5IGFkZCB0aGlzIGJlaGF2aW9yIGlmIHVzaW5nXG4gICAgICAgICAgLy8gcHJlY2FjaGluZy5cbiAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICBlZmZlY3RpdmVSZXF1ZXN0LmNsb25lKCksXG4gICAgICAgICAgWydfX1dCX1JFVklTSU9OX18nXSxcbiAgICAgICAgICBtYXRjaE9wdGlvbnMsXG4gICAgICAgIClcbiAgICAgIDogbnVsbDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgIGBVcGRhdGluZyB0aGUgJyR7Y2FjaGVOYW1lfScgY2FjaGUgd2l0aCBhIG5ldyBSZXNwb25zZSBgICtcbiAgICAgICAgICBgZm9yICR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfS5gLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2FjaGUucHV0KFxuICAgICAgICBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID8gcmVzcG9uc2VUb0NhY2hlLmNsb25lKCkgOiByZXNwb25zZVRvQ2FjaGUsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RPTUV4Y2VwdGlvbiNleGNlcHRpb24tUXVvdGFFeGNlZWRlZEVycm9yXG4gICAgICAgIGlmIChlcnJvci5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJykge1xuICAgICAgICAgIGF3YWl0IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlRGlkVXBkYXRlJykpIHtcbiAgICAgIGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICBvbGRSZXNwb25zZSxcbiAgICAgICAgbmV3UmVzcG9uc2U6IHJlc3BvbnNlVG9DYWNoZS5jbG9uZSgpLFxuICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgbGlzdCBvZiBwbHVnaW5zIGZvciB0aGUgYGNhY2hlS2V5V2lsbEJlVXNlZGAgY2FsbGJhY2ssIGFuZFxuICAgKiBleGVjdXRlcyBhbnkgb2YgdGhvc2UgY2FsbGJhY2tzIGZvdW5kIGluIHNlcXVlbmNlLiBUaGUgZmluYWwgYFJlcXVlc3RgXG4gICAqIG9iamVjdCByZXR1cm5lZCBieSB0aGUgbGFzdCBwbHVnaW4gaXMgdHJlYXRlZCBhcyB0aGUgY2FjaGUga2V5IGZvciBjYWNoZVxuICAgKiByZWFkcyBhbmQvb3Igd3JpdGVzLiBJZiBubyBgY2FjaGVLZXlXaWxsQmVVc2VkYCBwbHVnaW4gY2FsbGJhY2tzIGhhdmVcbiAgICogYmVlbiByZWdpc3RlcmVkLCB0aGUgcGFzc2VkIHJlcXVlc3QgaXMgcmV0dXJuZWQgdW5tb2RpZmllZFxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXF1ZXN0Pn1cbiAgICovXG4gIGFzeW5jIGdldENhY2hlS2V5KFxuICAgIHJlcXVlc3Q6IFJlcXVlc3QsXG4gICAgbW9kZTogJ3JlYWQnIHwgJ3dyaXRlJyxcbiAgKTogUHJvbWlzZTxSZXF1ZXN0PiB7XG4gICAgY29uc3Qga2V5ID0gYCR7cmVxdWVzdC51cmx9IHwgJHttb2RlfWA7XG4gICAgaWYgKCF0aGlzLl9jYWNoZUtleXNba2V5XSkge1xuICAgICAgbGV0IGVmZmVjdGl2ZVJlcXVlc3QgPSByZXF1ZXN0O1xuXG4gICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVLZXlXaWxsQmVVc2VkJykpIHtcbiAgICAgICAgZWZmZWN0aXZlUmVxdWVzdCA9IHRvUmVxdWVzdChcbiAgICAgICAgICBhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICAgICAgLy8gcGFyYW1zIGhhcyBhIHR5cGUgYW55IGNhbid0IGNoYW5nZSByaWdodCBub3cuXG4gICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhY2hlS2V5c1trZXldID0gZWZmZWN0aXZlUmVxdWVzdDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlS2V5c1trZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyYXRlZ3kgaGFzIGF0IGxlYXN0IG9uZSBwbHVnaW4gd2l0aCB0aGUgZ2l2ZW5cbiAgICogY2FsbGJhY2suXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYmFjayB0byBjaGVjayBmb3IuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNDYWxsYmFjazxDIGV4dGVuZHMga2V5b2YgV29ya2JveFBsdWdpbj4obmFtZTogQyk6IGJvb2xlYW4ge1xuICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3N0cmF0ZWd5LnBsdWdpbnMpIHtcbiAgICAgIGlmIChuYW1lIGluIHBsdWdpbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgYWxsIHBsdWdpbiBjYWxsYmFja3MgbWF0Y2hpbmcgdGhlIGdpdmVuIG5hbWUsIGluIG9yZGVyLCBwYXNzaW5nIHRoZVxuICAgKiBnaXZlbiBwYXJhbSBvYmplY3QgKG1lcmdlZCBpdGggdGhlIGN1cnJlbnQgcGx1Z2luIHN0YXRlKSBhcyB0aGUgb25seVxuICAgKiBhcmd1bWVudC5cbiAgICpcbiAgICogTm90ZTogc2luY2UgdGhpcyBtZXRob2QgcnVucyBhbGwgcGx1Z2lucywgaXQncyBub3Qgc3VpdGFibGUgZm9yIGNhc2VzXG4gICAqIHdoZXJlIHRoZSByZXR1cm4gdmFsdWUgb2YgYSBjYWxsYmFjayBuZWVkcyB0byBiZSBhcHBsaWVkIHByaW9yIHRvIGNhbGxpbmdcbiAgICogdGhlIG5leHQgY2FsbGJhY2suIFNlZVxuICAgKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlciNpdGVyYXRlQ2FsbGJhY2tzfVxuICAgKiBiZWxvdyBmb3IgaG93IHRvIGhhbmRsZSB0aGF0IGNhc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjYWxsYmFjayB0byBydW4gd2l0aGluIGVhY2ggcGx1Z2luLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0gVGhlIG9iamVjdCB0byBwYXNzIGFzIHRoZSBmaXJzdCAoYW5kIG9ubHkpIHBhcmFtXG4gICAqICAgICB3aGVuIGV4ZWN1dGluZyBlYWNoIGNhbGxiYWNrLiBUaGlzIG9iamVjdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZVxuICAgKiAgICAgY3VycmVudCBwbHVnaW4gc3RhdGUgcHJpb3IgdG8gY2FsbGJhY2sgZXhlY3V0aW9uLlxuICAgKi9cbiAgYXN5bmMgcnVuQ2FsbGJhY2tzPEMgZXh0ZW5kcyBrZXlvZiBOb25OdWxsYWJsZTxXb3JrYm94UGx1Z2luPj4oXG4gICAgbmFtZTogQyxcbiAgICBwYXJhbTogT21pdDxXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXSwgJ3N0YXRlJz4sXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKG5hbWUpKSB7XG4gICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG5vdCBzdXJlIHdoeSBgYW55YCBpcyBuZWVkZWQuIEl0IHNlZW1zIGxpa2VcbiAgICAgIC8vIHRoaXMgc2hvdWxkIHdvcmsgd2l0aCBgYXMgV29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ11gLlxuICAgICAgYXdhaXQgY2FsbGJhY2socGFyYW0gYXMgYW55KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWNjZXB0cyBhIGNhbGxiYWNrIGFuZCByZXR1cm5zIGFuIGl0ZXJhYmxlIG9mIG1hdGNoaW5nIHBsdWdpbiBjYWxsYmFja3MsXG4gICAqIHdoZXJlIGVhY2ggY2FsbGJhY2sgaXMgd3JhcHBlZCB3aXRoIHRoZSBjdXJyZW50IGhhbmRsZXIgc3RhdGUgKGkuZS4gd2hlblxuICAgKiB5b3UgY2FsbCBlYWNoIGNhbGxiYWNrLCB3aGF0ZXZlciBvYmplY3QgcGFyYW1ldGVyIHlvdSBwYXNzIGl0IHdpbGxcbiAgICogYmUgbWVyZ2VkIHdpdGggdGhlIHBsdWdpbidzIGN1cnJlbnQgc3RhdGUpLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBmbyB0aGUgY2FsbGJhY2sgdG8gcnVuXG4gICAqIEByZXR1cm4ge0FycmF5PEZ1bmN0aW9uPn1cbiAgICovXG4gICppdGVyYXRlQ2FsbGJhY2tzPEMgZXh0ZW5kcyBrZXlvZiBXb3JrYm94UGx1Z2luPihcbiAgICBuYW1lOiBDLFxuICApOiBHZW5lcmF0b3I8Tm9uTnVsbGFibGU8V29ya2JveFBsdWdpbltDXT4+IHtcbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLl9zdHJhdGVneS5wbHVnaW5zKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbltuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3BsdWdpblN0YXRlTWFwLmdldChwbHVnaW4pO1xuICAgICAgICBjb25zdCBzdGF0ZWZ1bENhbGxiYWNrID0gKFxuICAgICAgICAgIHBhcmFtOiBPbWl0PFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtW0NdLCAnc3RhdGUnPixcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVmdWxQYXJhbSA9IHsuLi5wYXJhbSwgc3RhdGV9O1xuXG4gICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBub3Qgc3VyZSB3aHkgYGFueWAgaXMgbmVlZGVkLiBJdCBzZWVtcyBsaWtlXG4gICAgICAgICAgLy8gdGhpcyBzaG91bGQgd29yayB3aXRoIGBhcyBXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXWAuXG4gICAgICAgICAgcmV0dXJuIHBsdWdpbltuYW1lXSEoc3RhdGVmdWxQYXJhbSBhcyBhbnkpO1xuICAgICAgICB9O1xuICAgICAgICB5aWVsZCBzdGF0ZWZ1bENhbGxiYWNrIGFzIE5vbk51bGxhYmxlPFdvcmtib3hQbHVnaW5bQ10+O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcHJvbWlzZSB0byB0aGVcbiAgICogW2V4dGVuZCBsaWZldGltZSBwcm9taXNlc117QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2V4dGVuZGFibGVldmVudC1leHRlbmQtbGlmZXRpbWUtcHJvbWlzZXN9XG4gICAqIG9mIHRoZSBldmVudCBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcXVlc3QgYmVpbmcgaGFuZGxlZCAodXN1YWxseSBhXG4gICAqIGBGZXRjaEV2ZW50YCkuXG4gICAqXG4gICAqIE5vdGU6IHlvdSBjYW4gYXdhaXRcbiAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ+ZG9uZVdhaXRpbmd9XG4gICAqIHRvIGtub3cgd2hlbiBhbGwgYWRkZWQgcHJvbWlzZXMgaGF2ZSBzZXR0bGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge1Byb21pc2V9IHByb21pc2UgQSBwcm9taXNlIHRvIGFkZCB0byB0aGUgZXh0ZW5kIGxpZmV0aW1lIHByb21pc2VzXG4gICAqICAgICBvZiB0aGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqL1xuICB3YWl0VW50aWw8VD4ocHJvbWlzZTogUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgYWxsIHByb21pc2VzIHBhc3NlZCB0b1xuICAgKiB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn53YWl0VW50aWx9XG4gICAqIGhhdmUgc2V0dGxlZC5cbiAgICpcbiAgICogTm90ZTogYW55IHdvcmsgZG9uZSBhZnRlciBgZG9uZVdhaXRpbmcoKWAgc2V0dGxlcyBzaG91bGQgYmUgbWFudWFsbHlcbiAgICogcGFzc2VkIHRvIGFuIGV2ZW50J3MgYHdhaXRVbnRpbCgpYCBtZXRob2QgKG5vdCB0aGlzIGhhbmRsZXInc1xuICAgKiBgd2FpdFVudGlsKClgIG1ldGhvZCksIG90aGVyd2lzZSB0aGUgc2VydmljZSB3b3JrZXIgdGhyZWFkIG15IGJlIGtpbGxlZFxuICAgKiBwcmlvciB0byB5b3VyIHdvcmsgY29tcGxldGluZy5cbiAgICovXG4gIGFzeW5jIGRvbmVXYWl0aW5nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwcm9taXNlO1xuICAgIHdoaWxlICgocHJvbWlzZSA9IHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMuc2hpZnQoKSkpIHtcbiAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHJ1bm5pbmcgdGhlIHN0cmF0ZWd5IGFuZCBpbW1lZGlhdGVseSByZXNvbHZlcyBhbnkgcGVuZGluZ1xuICAgKiBgd2FpdFVudGlsKClgIHByb21pc2VzLlxuICAgKi9cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9oYW5kbGVyRGVmZXJyZWQucmVzb2x2ZShudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGNhbGwgY2FjaGVXaWxsVXBkYXRlIG9uIHRoZSBhdmFpbGFibGUgcGx1Z2lucyAob3IgdXNlXG4gICAqIHN0YXR1cyA9PT0gMjAwKSB0byBkZXRlcm1pbmUgaWYgdGhlIFJlc3BvbnNlIGlzIHNhZmUgYW5kIHZhbGlkIHRvIGNhY2hlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLnJlc3BvbnNlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIF9lbnN1cmVSZXNwb25zZVNhZmVUb0NhY2hlKFxuICAgIHJlc3BvbnNlOiBSZXNwb25zZSxcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4ge1xuICAgIGxldCByZXNwb25zZVRvQ2FjaGU6IFJlc3BvbnNlIHwgdW5kZWZpbmVkID0gcmVzcG9uc2U7XG4gICAgbGV0IHBsdWdpbnNVc2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVXaWxsVXBkYXRlJykpIHtcbiAgICAgIHJlc3BvbnNlVG9DYWNoZSA9XG4gICAgICAgIChhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgcmVxdWVzdDogdGhpcy5yZXF1ZXN0LFxuICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZVRvQ2FjaGUsXG4gICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgIH0pKSB8fCB1bmRlZmluZWQ7XG4gICAgICBwbHVnaW5zVXNlZCA9IHRydWU7XG5cbiAgICAgIGlmICghcmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGx1Z2luc1VzZWQpIHtcbiAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUgJiYgcmVzcG9uc2VUb0NhY2hlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHJlc3BvbnNlVG9DYWNoZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUpIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICBsb2dnZXIud2FybihcbiAgICAgICAgICAgICAgICBgVGhlIHJlc3BvbnNlIGZvciAnJHt0aGlzLnJlcXVlc3QudXJsfScgYCArXG4gICAgICAgICAgICAgICAgICBgaXMgYW4gb3BhcXVlIHJlc3BvbnNlLiBUaGUgY2FjaGluZyBzdHJhdGVneSB0aGF0IHlvdSdyZSBgICtcbiAgICAgICAgICAgICAgICAgIGB1c2luZyB3aWxsIG5vdCBjYWNoZSBvcGFxdWUgcmVzcG9uc2VzIGJ5IGRlZmF1bHQuYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgICAgICBgVGhlIHJlc3BvbnNlIGZvciAnJHt0aGlzLnJlcXVlc3QudXJsfScgYCArXG4gICAgICAgICAgICAgICAgICBgcmV0dXJuZWQgYSBzdGF0dXMgY29kZSBvZiAnJHtyZXNwb25zZS5zdGF0dXN9JyBhbmQgd29uJ3QgYCArXG4gICAgICAgICAgICAgICAgICBgYmUgY2FjaGVkIGFzIGEgcmVzdWx0LmAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlVG9DYWNoZTtcbiAgfVxufVxuXG5leHBvcnQge1N0cmF0ZWd5SGFuZGxlcn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2NhY2hlTmFtZXN9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQge1xuICBIYW5kbGVyQ2FsbGJhY2tPcHRpb25zLFxuICBSb3V0ZUhhbmRsZXJPYmplY3QsXG4gIFdvcmtib3hQbHVnaW4sXG59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7U3RyYXRlZ3lIYW5kbGVyfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyYXRlZ3lPcHRpb25zIHtcbiAgY2FjaGVOYW1lPzogc3RyaW5nO1xuICBwbHVnaW5zPzogV29ya2JveFBsdWdpbltdO1xuICBmZXRjaE9wdGlvbnM/OiBSZXF1ZXN0SW5pdDtcbiAgbWF0Y2hPcHRpb25zPzogQ2FjaGVRdWVyeU9wdGlvbnM7XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3QgYmFzZSBjbGFzcyB0aGF0IGFsbCBvdGhlciBzdHJhdGVneSBjbGFzc2VzIG11c3QgZXh0ZW5kIGZyb206XG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5hYnN0cmFjdCBjbGFzcyBTdHJhdGVneSBpbXBsZW1lbnRzIFJvdXRlSGFuZGxlck9iamVjdCB7XG4gIGNhY2hlTmFtZTogc3RyaW5nO1xuICBwbHVnaW5zOiBXb3JrYm94UGx1Z2luW107XG4gIGZldGNoT3B0aW9ucz86IFJlcXVlc3RJbml0O1xuICBtYXRjaE9wdGlvbnM/OiBDYWNoZVF1ZXJ5T3B0aW9ucztcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgX2hhbmRsZShcbiAgICByZXF1ZXN0OiBSZXF1ZXN0LFxuICAgIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHN0cmF0ZWd5IGFuZCBzZXRzIGFsbCBkb2N1bWVudGVkIG9wdGlvblxuICAgKiBwcm9wZXJ0aWVzIGFzIHB1YmxpYyBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBOb3RlOiBpZiBhIGN1c3RvbSBzdHJhdGVneSBjbGFzcyBleHRlbmRzIHRoZSBiYXNlIFN0cmF0ZWd5IGNsYXNzIGFuZCBkb2VzXG4gICAqIG5vdCBuZWVkIG1vcmUgdGhhbiB0aGVzZSBwcm9wZXJ0aWVzLCBpdCBkb2VzIG5vdCBuZWVkIHRvIGRlZmluZSBpdHMgb3duXG4gICAqIGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFRoZVxuICAgKiBbYENhY2hlUXVlcnlPcHRpb25zYF17QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnN9XG4gICAqIGZvciBhbnkgYGNhY2hlLm1hdGNoKClgIG9yIGBjYWNoZS5wdXQoKWAgY2FsbHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogU3RyYXRlZ3lPcHRpb25zID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgICAqIHJlcXVlc3RzLiBEZWZhdWx0cyB0byB0aGUgY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICAgKiB7QGxpbmsgd29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUob3B0aW9ucy5jYWNoZU5hbWUpO1xuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0XG4gICAgICogW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgICAqIHVzZWQgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtBcnJheTxPYmplY3Q+fVxuICAgICAqL1xuICAgIHRoaXMucGx1Z2lucyA9IG9wdGlvbnMucGx1Z2lucyB8fCBbXTtcbiAgICAvKipcbiAgICAgKiBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnN9XG4gICAgICogb2YgYWxsIGZldGNoKCkgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmZldGNoT3B0aW9ucyA9IG9wdGlvbnMuZmV0Y2hPcHRpb25zO1xuICAgIC8qKlxuICAgICAqIFRoZVxuICAgICAqIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXXtAbGluayBodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9uc31cbiAgICAgKiBmb3IgYW55IGBjYWNoZS5tYXRjaCgpYCBvciBgY2FjaGUucHV0KClgIGNhbGxzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5tYXRjaE9wdGlvbnMgPSBvcHRpb25zLm1hdGNoT3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgcmVxdWVzdCBzdHJhdGVneSBhbmQgcmV0dXJucyBhIGBQcm9taXNlYCB0aGF0IHdpbGwgcmVzb2x2ZSB3aXRoXG4gICAqIGEgYFJlc3BvbnNlYCwgaW52b2tpbmcgYWxsIHJlbGV2YW50IHBsdWdpbiBjYWxsYmFja3MuXG4gICAqXG4gICAqIFdoZW4gYSBzdHJhdGVneSBpbnN0YW5jZSBpcyByZWdpc3RlcmVkIHdpdGggYSBXb3JrYm94XG4gICAqIHtAbGluayB3b3JrYm94LXJvdXRpbmcuUm91dGV9LCB0aGlzIG1ldGhvZCBpcyBhdXRvbWF0aWNhbGx5XG4gICAqIGNhbGxlZCB3aGVuIHRoZSByb3V0ZSBtYXRjaGVzLlxuICAgKlxuICAgKiBBbHRlcm5hdGl2ZWx5LCB0aGlzIG1ldGhvZCBjYW4gYmUgdXNlZCBpbiBhIHN0YW5kYWxvbmUgYEZldGNoRXZlbnRgXG4gICAqIGxpc3RlbmVyIGJ5IHBhc3NpbmcgaXQgdG8gYGV2ZW50LnJlc3BvbmRXaXRoKClgLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZldGNoRXZlbnR8T2JqZWN0fSBvcHRpb25zIEEgYEZldGNoRXZlbnRgIG9yIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgKiAgICAgcHJvcGVydGllcyBsaXN0ZWQgYmVsb3cuXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgKiAgICAgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtVUkx9IFtvcHRpb25zLnVybF1cbiAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5wYXJhbXNdXG4gICAqL1xuICBoYW5kbGUob3B0aW9uczogRmV0Y2hFdmVudCB8IEhhbmRsZXJDYWxsYmFja09wdGlvbnMpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgW3Jlc3BvbnNlRG9uZV0gPSB0aGlzLmhhbmRsZUFsbChvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzcG9uc2VEb25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbWlsYXIgdG8ge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGV9LCBidXRcbiAgICogaW5zdGVhZCBvZiBqdXN0IHJldHVybmluZyBhIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHRvIGEgYFJlc3BvbnNlYCBpdFxuICAgKiBpdCB3aWxsIHJldHVybiBhbiB0dXBsZSBvZiBgW3Jlc3BvbnNlLCBkb25lXWAgcHJvbWlzZXMsIHdoZXJlIHRoZSBmb3JtZXJcbiAgICogKGByZXNwb25zZWApIGlzIGVxdWl2YWxlbnQgdG8gd2hhdCBgaGFuZGxlKClgIHJldHVybnMsIGFuZCB0aGUgbGF0dGVyIGlzIGFcbiAgICogUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbmNlIGFueSBwcm9taXNlcyB0aGF0IHdlcmUgYWRkZWQgdG9cbiAgICogYGV2ZW50LndhaXRVbnRpbCgpYCBhcyBwYXJ0IG9mIHBlcmZvcm1pbmcgdGhlIHN0cmF0ZWd5IGhhdmUgY29tcGxldGVkLlxuICAgKlxuICAgKiBZb3UgY2FuIGF3YWl0IHRoZSBgZG9uZWAgcHJvbWlzZSB0byBlbnN1cmUgYW55IGV4dHJhIHdvcmsgcGVyZm9ybWVkIGJ5XG4gICAqIHRoZSBzdHJhdGVneSAodXN1YWxseSBjYWNoaW5nIHJlc3BvbnNlcykgY29tcGxldGVzIHN1Y2Nlc3NmdWxseS5cbiAgICpcbiAgICogQHBhcmFtIHtGZXRjaEV2ZW50fE9iamVjdH0gb3B0aW9ucyBBIGBGZXRjaEV2ZW50YCBvciBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICogICAgIHByb3BlcnRpZXMgbGlzdGVkIGJlbG93LlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICogICAgIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXVxuICAgKiBAcmV0dXJuIHtBcnJheTxQcm9taXNlPn0gQSB0dXBsZSBvZiBbcmVzcG9uc2UsIGRvbmVdXG4gICAqICAgICBwcm9taXNlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGRldGVybWluZSB3aGVuIHRoZSByZXNwb25zZSByZXNvbHZlcyBhc1xuICAgKiAgICAgd2VsbCBhcyB3aGVuIHRoZSBoYW5kbGVyIGhhcyBjb21wbGV0ZWQgYWxsIGl0cyB3b3JrLlxuICAgKi9cbiAgaGFuZGxlQWxsKFxuICAgIG9wdGlvbnM6IEZldGNoRXZlbnQgfCBIYW5kbGVyQ2FsbGJhY2tPcHRpb25zLFxuICApOiBbUHJvbWlzZTxSZXNwb25zZT4sIFByb21pc2U8dm9pZD5dIHtcbiAgICAvLyBBbGxvdyBmb3IgZmxleGlibGUgb3B0aW9ucyB0byBiZSBwYXNzZWQuXG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGZXRjaEV2ZW50KSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBldmVudDogb3B0aW9ucyxcbiAgICAgICAgcmVxdWVzdDogb3B0aW9ucy5yZXF1ZXN0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudCA9IG9wdGlvbnMuZXZlbnQ7XG4gICAgY29uc3QgcmVxdWVzdCA9XG4gICAgICB0eXBlb2Ygb3B0aW9ucy5yZXF1ZXN0ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IG5ldyBSZXF1ZXN0KG9wdGlvbnMucmVxdWVzdClcbiAgICAgICAgOiBvcHRpb25zLnJlcXVlc3Q7XG4gICAgY29uc3QgcGFyYW1zID0gJ3BhcmFtcycgaW4gb3B0aW9ucyA/IG9wdGlvbnMucGFyYW1zIDogdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgaGFuZGxlciA9IG5ldyBTdHJhdGVneUhhbmRsZXIodGhpcywge2V2ZW50LCByZXF1ZXN0LCBwYXJhbXN9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlRG9uZSA9IHRoaXMuX2dldFJlc3BvbnNlKGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KTtcbiAgICBjb25zdCBoYW5kbGVyRG9uZSA9IHRoaXMuX2F3YWl0Q29tcGxldGUoXG4gICAgICByZXNwb25zZURvbmUsXG4gICAgICBoYW5kbGVyLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIGV2ZW50LFxuICAgICk7XG5cbiAgICAvLyBSZXR1cm4gYW4gYXJyYXkgb2YgcHJvbWlzZXMsIHN1aXRhYmxlIGZvciB1c2Ugd2l0aCBQcm9taXNlLmFsbCgpLlxuICAgIHJldHVybiBbcmVzcG9uc2VEb25lLCBoYW5kbGVyRG9uZV07XG4gIH1cblxuICBhc3luYyBfZ2V0UmVzcG9uc2UoXG4gICAgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyLFxuICAgIHJlcXVlc3Q6IFJlcXVlc3QsXG4gICAgZXZlbnQ6IEV4dGVuZGFibGVFdmVudCxcbiAgKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyV2lsbFN0YXJ0Jywge2V2ZW50LCByZXF1ZXN0fSk7XG5cbiAgICBsZXQgcmVzcG9uc2U6IFJlc3BvbnNlIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKTtcbiAgICAgIC8vIFRoZSBcIm9mZmljaWFsXCIgU3RyYXRlZ3kgc3ViY2xhc3NlcyBhbGwgdGhyb3cgdGhpcyBlcnJvciBhdXRvbWF0aWNhbGx5LFxuICAgICAgLy8gYnV0IGluIGNhc2UgYSB0aGlyZC1wYXJ0eSBTdHJhdGVneSBkb2Vzbid0LCBlbnN1cmUgdGhhdCB3ZSBoYXZlIGFcbiAgICAgIC8vIGNvbnNpc3RlbnQgZmFpbHVyZSB3aGVuIHRoZXJlJ3Mgbm8gcmVzcG9uc2Ugb3IgYW4gZXJyb3IgcmVzcG9uc2UuXG4gICAgICBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7dXJsOiByZXF1ZXN0LnVybH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGhhbmRsZXIuaXRlcmF0ZUNhbGxiYWNrcygnaGFuZGxlckRpZEVycm9yJykpIHtcbiAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHtlcnJvciwgZXZlbnQsIHJlcXVlc3R9KTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coXG4gICAgICAgICAgYFdoaWxlIHJlc3BvbmRpbmcgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScsIGAgK1xuICAgICAgICAgICAgYGFuICR7XG4gICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci50b1N0cmluZygpIDogJydcbiAgICAgICAgICAgIH0gZXJyb3Igb2NjdXJyZWQuIFVzaW5nIGEgZmFsbGJhY2sgcmVzcG9uc2UgcHJvdmlkZWQgYnkgYCArXG4gICAgICAgICAgICBgYSBoYW5kbGVyRGlkRXJyb3IgcGx1Z2luLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBoYW5kbGVyLml0ZXJhdGVDYWxsYmFja3MoJ2hhbmRsZXJXaWxsUmVzcG9uZCcpKSB7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHtldmVudCwgcmVxdWVzdCwgcmVzcG9uc2V9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBhc3luYyBfYXdhaXRDb21wbGV0ZShcbiAgICByZXNwb25zZURvbmU6IFByb21pc2U8UmVzcG9uc2U+LFxuICAgIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcixcbiAgICByZXF1ZXN0OiBSZXF1ZXN0LFxuICAgIGV2ZW50OiBFeHRlbmRhYmxlRXZlbnQsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCByZXNwb25zZTtcbiAgICBsZXQgZXJyb3I7XG5cbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZURvbmU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElnbm9yZSBlcnJvcnMsIGFzIHJlc3BvbnNlIGVycm9ycyBzaG91bGQgYmUgY2F1Z2h0IHZpYSB0aGUgYHJlc3BvbnNlYFxuICAgICAgLy8gcHJvbWlzZSBhYm92ZS4gVGhlIGBkb25lYCBwcm9taXNlIHdpbGwgb25seSB0aHJvdyBmb3IgZXJyb3JzIGluXG4gICAgICAvLyBwcm9taXNlcyBwYXNzZWQgdG8gYGhhbmRsZXIud2FpdFVudGlsKClgLlxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlckRpZFJlc3BvbmQnLCB7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICByZXF1ZXN0LFxuICAgICAgICByZXNwb25zZSxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgaGFuZGxlci5kb25lV2FpdGluZygpO1xuICAgIH0gY2F0Y2ggKHdhaXRVbnRpbEVycm9yKSB7XG4gICAgICBpZiAod2FpdFVudGlsRXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBlcnJvciA9IHdhaXRVbnRpbEVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyRGlkQ29tcGxldGUnLCB7XG4gICAgICBldmVudCxcbiAgICAgIHJlcXVlc3QsXG4gICAgICByZXNwb25zZSxcbiAgICAgIGVycm9yOiBlcnJvciBhcyBFcnJvcixcbiAgICB9KTtcbiAgICBoYW5kbGVyLmRlc3Ryb3koKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7U3RyYXRlZ3l9O1xuXG4vKipcbiAqIENsYXNzZXMgZXh0ZW5kaW5nIHRoZSBgU3RyYXRlZ3lgIGJhc2VkIGNsYXNzIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QsXG4gKiBhbmQgbGV2ZXJhZ2UgdGhlIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfVxuICogYXJnIHRvIHBlcmZvcm0gYWxsIGZldGNoaW5nIGFuZCBjYWNoZSBsb2dpYywgd2hpY2ggd2lsbCBlbnN1cmUgYWxsIHJlbGV2YW50XG4gKiBjYWNoZSwgY2FjaGUgb3B0aW9ucywgZmV0Y2ggb3B0aW9ucyBhbmQgcGx1Z2lucyBhcmUgdXNlZCAocGVyIHRoZSBjdXJyZW50XG4gKiBzdHJhdGVneSBpbnN0YW5jZSkuXG4gKlxuICogQG5hbWUgX2hhbmRsZVxuICogQGluc3RhbmNlXG4gKiBAYWJzdHJhY3RcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXJcbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqL1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSB7XG4gIHN0cmF0ZWd5U3RhcnQ6IChzdHJhdGVneU5hbWU6IHN0cmluZywgcmVxdWVzdDogUmVxdWVzdCk6IHN0cmluZyA9PlxuICAgIGBVc2luZyAke3N0cmF0ZWd5TmFtZX0gdG8gcmVzcG9uZCB0byAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9J2AsXG4gIHByaW50RmluYWxSZXNwb25zZTogKHJlc3BvbnNlPzogUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyB0aGUgZmluYWwgcmVzcG9uc2UgaGVyZS5gKTtcbiAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UgfHwgJ1tObyByZXNwb25zZSByZXR1cm5lZF0nKTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbiAgfSxcbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCB7U3RyYXRlZ3l9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHtTdHJhdGVneUhhbmRsZXJ9IGZyb20gJy4vU3RyYXRlZ3lIYW5kbGVyLmpzJztcbmltcG9ydCB7bWVzc2FnZXN9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhIFtjYWNoZS1maXJzdF0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1zdHJhdGVnaWVzLW92ZXJ2aWV3LyNjYWNoZS1maXJzdC1mYWxsaW5nLWJhY2stdG8tbmV0d29yaylcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogQSBjYWNoZSBmaXJzdCBzdHJhdGVneSBpcyB1c2VmdWwgZm9yIGFzc2V0cyB0aGF0IGhhdmUgYmVlbiByZXZpc2lvbmVkLFxuICogc3VjaCBhcyBVUkxzIGxpa2UgYC9zdHlsZXMvZXhhbXBsZS5hOGY1ZjEuY3NzYCwgc2luY2UgdGhleVxuICogY2FuIGJlIGNhY2hlZCBmb3IgbG9uZyBwZXJpb2RzIG9mIHRpbWUuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgYW5kIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3dcbiAqIGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBDYWNoZUZpcnN0IGV4dGVuZHMgU3RyYXRlZ3kge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBfaGFuZGxlKHJlcXVlc3Q6IFJlcXVlc3QsIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBsb2dzID0gW107XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICBmdW5jTmFtZTogJ21ha2VSZXF1ZXN0JyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG5cbiAgICBsZXQgZXJyb3I6IEVycm9yIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICBgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuIGAgK1xuICAgICAgICAgICAgYFdpbGwgcmVzcG9uZCB3aXRoIGEgbmV0d29yayByZXF1ZXN0LmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZmV0Y2hBbmRDYWNoZVB1dChyZXF1ZXN0KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBsb2dzLnB1c2goYEdvdCByZXNwb25zZSBmcm9tIG5ldHdvcmsuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9ncy5wdXNoKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dzLnB1c2goYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSxcbiAgICAgICk7XG4gICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHt1cmw6IHJlcXVlc3QudXJsLCBlcnJvcn0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHtDYWNoZUZpcnN0fTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7V29ya2JveFBsdWdpbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgY29uc3QgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbjogV29ya2JveFBsdWdpbiA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSB2YWxpZCByZXNwb25zZSAodG8gYWxsb3cgY2FjaGluZykgaWYgdGhlIHN0YXR1cyBpcyAyMDAgKE9LKSBvclxuICAgKiAwIChvcGFxdWUpLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLnJlc3BvbnNlXG4gICAqIEByZXR1cm4ge1Jlc3BvbnNlfG51bGx9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWNoZVdpbGxVcGRhdGU6IGFzeW5jICh7cmVzcG9uc2V9KSA9PiB7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gMCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCB7Y2FjaGVPa0FuZE9wYXF1ZVBsdWdpbn0gZnJvbSAnLi9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4uanMnO1xuaW1wb3J0IHtTdHJhdGVneSwgU3RyYXRlZ3lPcHRpb25zfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7U3RyYXRlZ3lIYW5kbGVyfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya0ZpcnN0T3B0aW9ucyBleHRlbmRzIFN0cmF0ZWd5T3B0aW9ucyB7XG4gIG5ldHdvcmtUaW1lb3V0U2Vjb25kcz86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbbmV0d29yayBmaXJzdF0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1zdHJhdGVnaWVzLW92ZXJ2aWV3LyNuZXR3b3JrLWZpcnN0LWZhbGxpbmctYmFjay10by1jYWNoZSlcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBzdHJhdGVneSB3aWxsIGNhY2hlIHJlc3BvbnNlcyB3aXRoIGEgMjAwIHN0YXR1cyBjb2RlIGFzXG4gKiB3ZWxsIGFzIFtvcGFxdWUgcmVzcG9uc2VzXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXJlc291cmNlcy1kdXJpbmctcnVudGltZS8jb3BhcXVlLXJlc3BvbnNlcykuXG4gKiBPcGFxdWUgcmVzcG9uc2VzIGFyZSBhcmUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIHdoZXJlIHRoZSByZXNwb25zZSBkb2Vzbid0XG4gKiBzdXBwb3J0IFtDT1JTXShodHRwczovL2VuYWJsZS1jb3JzLm9yZy8pLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgTmV0d29ya0ZpcnN0IGV4dGVuZHMgU3RyYXRlZ3kge1xuICBwcml2YXRlIHJlYWRvbmx5IF9uZXR3b3JrVGltZW91dFNlY29uZHM6IG51bWJlcjtcblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9ucylcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kc10gSWYgc2V0LCBhbnkgbmV0d29yayByZXF1ZXN0c1xuICAgKiB0aGF0IGZhaWwgdG8gcmVzcG9uZCB3aXRoaW4gdGhlIHRpbWVvdXQgd2lsbCBmYWxsYmFjayB0byB0aGUgY2FjaGUuXG4gICAqXG4gICAqIFRoaXMgb3B0aW9uIGNhbiBiZSB1c2VkIHRvIGNvbWJhdFxuICAgKiBcIltsaWUtZmlde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcGVyZm9ybWFuY2UvcG9vci1jb25uZWN0aXZpdHkvI2xpZS1maX1cIlxuICAgKiBzY2VuYXJpb3MuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZXR3b3JrRmlyc3RPcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKTtcblxuICAgIC8vIElmIHRoaXMgaW5zdGFuY2UgY29udGFpbnMgbm8gcGx1Z2lucyB3aXRoIGEgJ2NhY2hlV2lsbFVwZGF0ZScgY2FsbGJhY2ssXG4gICAgLy8gcHJlcGVuZCB0aGUgYGNhY2hlT2tBbmRPcGFxdWVQbHVnaW5gIHBsdWdpbiB0byB0aGUgcGx1Z2lucyBsaXN0LlxuICAgIGlmICghdGhpcy5wbHVnaW5zLnNvbWUoKHApID0+ICdjYWNoZVdpbGxVcGRhdGUnIGluIHApKSB7XG4gICAgICB0aGlzLnBsdWdpbnMudW5zaGlmdChjYWNoZU9rQW5kT3BhcXVlUGx1Z2luKTtcbiAgICB9XG5cbiAgICB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgPSBvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kcyB8fCAwO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICAgIGFzc2VydCEuaXNUeXBlKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICduZXR3b3JrVGltZW91dFNlY29uZHMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBfaGFuZGxlKHJlcXVlc3Q6IFJlcXVlc3QsIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBjb25zdCBsb2dzOiBhbnlbXSA9IFtdO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgZnVuY05hbWU6ICdoYW5kbGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD5bXSA9IFtdO1xuICAgIGxldCB0aW1lb3V0SWQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMpIHtcbiAgICAgIGNvbnN0IHtpZCwgcHJvbWlzZX0gPSB0aGlzLl9nZXRUaW1lb3V0UHJvbWlzZSh7cmVxdWVzdCwgbG9ncywgaGFuZGxlcn0pO1xuICAgICAgdGltZW91dElkID0gaWQ7XG4gICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IG5ldHdvcmtQcm9taXNlID0gdGhpcy5fZ2V0TmV0d29ya1Byb21pc2Uoe1xuICAgICAgdGltZW91dElkLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIGxvZ3MsXG4gICAgICBoYW5kbGVyLFxuICAgIH0pO1xuXG4gICAgcHJvbWlzZXMucHVzaChuZXR3b3JrUHJvbWlzZSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIud2FpdFVudGlsKFxuICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gUHJvbWlzZS5yYWNlKCkgd2lsbCByZXNvbHZlIGFzIHNvb24gYXMgdGhlIGZpcnN0IHByb21pc2UgcmVzb2x2ZXMuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGF3YWl0IGhhbmRsZXIud2FpdFVudGlsKFByb21pc2UucmFjZShwcm9taXNlcykpKSB8fFxuICAgICAgICAgIC8vIElmIFByb21pc2UucmFjZSgpIHJlc29sdmVkIHdpdGggbnVsbCwgaXQgbWlnaHQgYmUgZHVlIHRvIGEgbmV0d29ya1xuICAgICAgICAgIC8vIHRpbWVvdXQgKyBhIGNhY2hlIG1pc3MuIElmIHRoYXQgd2VyZSB0byBoYXBwZW4sIHdlJ2QgcmF0aGVyIHdhaXQgdW50aWxcbiAgICAgICAgICAvLyB0aGUgbmV0d29ya1Byb21pc2UgcmVzb2x2ZXMgaW5zdGVhZCBvZiByZXR1cm5pbmcgbnVsbC5cbiAgICAgICAgICAvLyBOb3RlIHRoYXQgaXQncyBmaW5lIHRvIGF3YWl0IGFuIGFscmVhZHktcmVzb2x2ZWQgcHJvbWlzZSwgc28gd2UgZG9uJ3RcbiAgICAgICAgICAvLyBoYXZlIHRvIGNoZWNrIHRvIHNlZSBpZiBpdCdzIHN0aWxsIFwiaW4gZmxpZ2h0XCIuXG4gICAgICAgICAgKGF3YWl0IG5ldHdvcmtQcm9taXNlKVxuICAgICAgICApO1xuICAgICAgfSkoKSxcbiAgICApO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgbWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpLFxuICAgICAgKTtcbiAgICAgIGZvciAoY29uc3QgbG9nIG9mIGxvZ3MpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhsb2cpO1xuICAgICAgfVxuICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywge3VybDogcmVxdWVzdC51cmx9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMubG9ncyBBIHJlZmVyZW5jZSB0byB0aGUgbG9ncyBhcnJheVxuICAgKiBAcGFyYW0ge0V2ZW50fSBvcHRpb25zLmV2ZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0VGltZW91dFByb21pc2Uoe1xuICAgIHJlcXVlc3QsXG4gICAgbG9ncyxcbiAgICBoYW5kbGVyLFxuICB9OiB7XG4gICAgcmVxdWVzdDogUmVxdWVzdDtcbiAgICBsb2dzOiBhbnlbXTtcbiAgICBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXI7XG4gIH0pOiB7cHJvbWlzZTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD47IGlkPzogbnVtYmVyfSB7XG4gICAgbGV0IHRpbWVvdXRJZDtcbiAgICBjb25zdCB0aW1lb3V0UHJvbWlzZTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4gPSBuZXcgUHJvbWlzZShcbiAgICAgIChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uTmV0d29ya1RpbWVvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICAgICAgYFRpbWluZyBvdXQgdGhlIG5ldHdvcmsgcmVzcG9uc2UgYXQgYCArXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzfSBzZWNvbmRzLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgb25OZXR3b3JrVGltZW91dCxcbiAgICAgICAgICB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb21pc2U6IHRpbWVvdXRQcm9taXNlLFxuICAgICAgaWQ6IHRpbWVvdXRJZCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7bnVtYmVyfHVuZGVmaW5lZH0gb3B0aW9ucy50aW1lb3V0SWRcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5sb2dzIEEgcmVmZXJlbmNlIHRvIHRoZSBsb2dzIEFycmF5LlxuICAgKiBAcGFyYW0ge0V2ZW50fSBvcHRpb25zLmV2ZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgX2dldE5ldHdvcmtQcm9taXNlKHtcbiAgICB0aW1lb3V0SWQsXG4gICAgcmVxdWVzdCxcbiAgICBsb2dzLFxuICAgIGhhbmRsZXIsXG4gIH06IHtcbiAgICByZXF1ZXN0OiBSZXF1ZXN0O1xuICAgIGxvZ3M6IGFueVtdO1xuICAgIHRpbWVvdXRJZD86IG51bWJlcjtcbiAgICBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXI7XG4gIH0pOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPiB7XG4gICAgbGV0IGVycm9yO1xuICAgIGxldCByZXNwb25zZTtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoQW5kQ2FjaGVQdXQocmVxdWVzdCk7XG4gICAgfSBjYXRjaCAoZmV0Y2hFcnJvcikge1xuICAgICAgaWYgKGZldGNoRXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBlcnJvciA9IGZldGNoRXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBsb2dzLnB1c2goYEdvdCByZXNwb25zZSBmcm9tIG5ldHdvcmsuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgYFVuYWJsZSB0byBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrLiBXaWxsIHJlc3BvbmQgYCArXG4gICAgICAgICAgICBgd2l0aCBhIGNhY2hlZCByZXNwb25zZS5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlcnJvciB8fCAhcmVzcG9uc2UpIHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgICBgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfSdgICsgYCBjYWNoZS5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9ncy5wdXNoKGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQge05ldHdvcmtGaXJzdH07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge3RpbWVvdXR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcblxuaW1wb3J0IHtTdHJhdGVneSwgU3RyYXRlZ3lPcHRpb25zfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7U3RyYXRlZ3lIYW5kbGVyfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmludGVyZmFjZSBOZXR3b3JrT25seU9wdGlvbnNcbiAgZXh0ZW5kcyBPbWl0PFN0cmF0ZWd5T3B0aW9ucywgJ2NhY2hlTmFtZScgfCAnbWF0Y2hPcHRpb25zJz4ge1xuICBuZXR3b3JrVGltZW91dFNlY29uZHM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYVxuICogW25ldHdvcmstb25seV0oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1zdHJhdGVnaWVzLW92ZXJ2aWV3LyNuZXR3b3JrLW9ubHkpXG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHRha2UgYWR2YW50YWdlIG9mIGFueVxuICogW1dvcmtib3ggcGx1Z2luc10oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvdXNpbmctcGx1Z2lucy8pLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIHRoaXMgd2lsbCB0aHJvdyBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgTmV0d29ya09ubHkgZXh0ZW5kcyBTdHJhdGVneSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX25ldHdvcmtUaW1lb3V0U2Vjb25kczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzXSBJZiBzZXQsIGFueSBuZXR3b3JrIHJlcXVlc3RzXG4gICAqIHRoYXQgZmFpbCB0byByZXNwb25kIHdpdGhpbiB0aGUgdGltZW91dCB3aWxsIHJlc3VsdCBpbiBhIG5ldHdvcmsgZXJyb3IuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBOZXR3b3JrT25seU9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHMgfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIF9oYW5kbGUocmVxdWVzdDogUmVxdWVzdCwgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgIGZ1bmNOYW1lOiAnX2hhbmRsZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGVycm9yOiBFcnJvciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgcmVzcG9uc2U6IFJlc3BvbnNlIHwgdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPFJlc3BvbnNlIHwgdW5kZWZpbmVkPltdID0gW1xuICAgICAgICBoYW5kbGVyLmZldGNoKHJlcXVlc3QpLFxuICAgICAgXTtcblxuICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IHRpbWVvdXQoXG4gICAgICAgICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMCxcbiAgICAgICAgKSBhcyBQcm9taXNlPHVuZGVmaW5lZD47XG4gICAgICAgIHByb21pc2VzLnB1c2godGltZW91dFByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICByZXNwb25zZSA9IGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgVGltZWQgb3V0IHRoZSBuZXR3b3JrIHJlc3BvbnNlIGFmdGVyIGAgK1xuICAgICAgICAgICAgYCR7dGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzfSBzZWNvbmRzLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgbWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpLFxuICAgICAgKTtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBsb2dnZXIubG9nKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhgVW5hYmxlIHRvIGdldCBhIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsuYCk7XG4gICAgICB9XG4gICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7dXJsOiByZXF1ZXN0LnVybCwgZXJyb3J9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB7TmV0d29ya09ubHksIE5ldHdvcmtPbmx5T3B0aW9uc307XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCB7Y2FjaGVPa0FuZE9wYXF1ZVBsdWdpbn0gZnJvbSAnLi9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4uanMnO1xuaW1wb3J0IHtTdHJhdGVneSwgU3RyYXRlZ3lPcHRpb25zfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7U3RyYXRlZ3lIYW5kbGVyfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYVxuICogW3N0YWxlLXdoaWxlLXJldmFsaWRhdGVdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZSlcbiAqIHJlcXVlc3Qgc3RyYXRlZ3kuXG4gKlxuICogUmVzb3VyY2VzIGFyZSByZXF1ZXN0ZWQgZnJvbSBib3RoIHRoZSBjYWNoZSBhbmQgdGhlIG5ldHdvcmsgaW4gcGFyYWxsZWwuXG4gKiBUaGUgc3RyYXRlZ3kgd2lsbCByZXNwb25kIHdpdGggdGhlIGNhY2hlZCB2ZXJzaW9uIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlXG4gKiB3YWl0IGZvciB0aGUgbmV0d29yayByZXNwb25zZS4gVGhlIGNhY2hlIGlzIHVwZGF0ZWQgd2l0aCB0aGUgbmV0d29yayByZXNwb25zZVxuICogd2l0aCBlYWNoIHN1Y2Nlc3NmdWwgcmVxdWVzdC5cbiAqXG4gKiBCeSBkZWZhdWx0LCB0aGlzIHN0cmF0ZWd5IHdpbGwgY2FjaGUgcmVzcG9uc2VzIHdpdGggYSAyMDAgc3RhdHVzIGNvZGUgYXNcbiAqIHdlbGwgYXMgW29wYXF1ZSByZXNwb25zZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctcmVzb3VyY2VzLWR1cmluZy1ydW50aW1lLyNvcGFxdWUtcmVzcG9uc2VzKS5cbiAqIE9wYXF1ZSByZXNwb25zZXMgYXJlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyB3aGVyZSB0aGUgcmVzcG9uc2UgZG9lc24ndFxuICogc3VwcG9ydCBbQ09SU10oaHR0cHM6Ly9lbmFibGUtY29ycy5vcmcvKS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCBhbmQgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvd1xuICogYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIFN0YWxlV2hpbGVSZXZhbGlkYXRlIGV4dGVuZHMgU3RyYXRlZ3kge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gY2FjaGUgbmFtZXMgcHJvdmlkZWQgYnlcbiAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICogW2Bpbml0YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVycylcbiAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5tYXRjaE9wdGlvbnNdIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL3czYy5naXRodWIuaW8vU2VydmljZVdvcmtlci8jZGljdGRlZi1jYWNoZXF1ZXJ5b3B0aW9ucylcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFN0cmF0ZWd5T3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAvLyBJZiB0aGlzIGluc3RhbmNlIGNvbnRhaW5zIG5vIHBsdWdpbnMgd2l0aCBhICdjYWNoZVdpbGxVcGRhdGUnIGNhbGxiYWNrLFxuICAgIC8vIHByZXBlbmQgdGhlIGBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luYCBwbHVnaW4gdG8gdGhlIHBsdWdpbnMgbGlzdC5cbiAgICBpZiAoIXRoaXMucGx1Z2lucy5zb21lKChwKSA9PiAnY2FjaGVXaWxsVXBkYXRlJyBpbiBwKSkge1xuICAgICAgdGhpcy5wbHVnaW5zLnVuc2hpZnQoY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0OiBSZXF1ZXN0LCBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgbG9ncyA9IFtdO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgZnVuY05hbWU6ICdoYW5kbGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZldGNoQW5kQ2FjaGVQcm9taXNlID0gaGFuZGxlci5mZXRjaEFuZENhY2hlUHV0KHJlcXVlc3QpLmNhdGNoKCgpID0+IHtcbiAgICAgIC8vIFN3YWxsb3cgdGhpcyBlcnJvciBiZWNhdXNlIGEgJ25vLXJlc3BvbnNlJyBlcnJvciB3aWxsIGJlIHRocm93biBpblxuICAgICAgLy8gbWFpbiBoYW5kbGVyIHJldHVybiBmbG93LiBUaGlzIHdpbGwgYmUgaW4gdGhlIGB3YWl0VW50aWwoKWAgZmxvdy5cbiAgICB9KTtcbiAgICB2b2lkIGhhbmRsZXIud2FpdFVudGlsKGZldGNoQW5kQ2FjaGVQcm9taXNlKTtcblxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcblxuICAgIGxldCBlcnJvcjtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICBgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfSdgICtcbiAgICAgICAgICAgIGAgY2FjaGUuIFdpbGwgdXBkYXRlIHdpdGggdGhlIG5ldHdvcmsgcmVzcG9uc2UgaW4gdGhlIGJhY2tncm91bmQuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9ncy5wdXNoKFxuICAgICAgICAgIGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS4gYCArXG4gICAgICAgICAgICBgV2lsbCB3YWl0IGZvciB0aGUgbmV0d29yayByZXNwb25zZS5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gTk9URShwaGlsaXB3YWx0b24pOiBSZWFsbHkgYW5ub3lpbmcgdGhhdCB3ZSBoYXZlIHRvIHR5cGUgY2FzdCBoZXJlLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzIwMDA2XG4gICAgICAgIHJlc3BvbnNlID0gKGF3YWl0IGZldGNoQW5kQ2FjaGVQcm9taXNlKSBhcyBSZXNwb25zZSB8IHVuZGVmaW5lZDtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSxcbiAgICAgICk7XG4gICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHt1cmw6IHJlcXVlc3QudXJsLCBlcnJvcn0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHtTdGFsZVdoaWxlUmV2YWxpZGF0ZX07XG4iLCAiaW1wb3J0IHsgZGVmYXVsdCBhcyBwYXJhbXMgfSBmcm9tICdAcGFyYW1zJ1xuaW1wb3J0IHsgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gfSBmcm9tICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZSdcbmltcG9ydCB7IEV4cGlyYXRpb25QbHVnaW4gfSBmcm9tICd3b3JrYm94LWV4cGlyYXRpb24nXG5pbXBvcnQgeyByZWdpc3RlclJvdXRlLCBzZXRDYXRjaEhhbmRsZXIgfSBmcm9tICd3b3JrYm94LXJvdXRpbmcnXG5pbXBvcnQgeyBDYWNoZUZpcnN0LCBOZXR3b3JrRmlyc3QsIE5ldHdvcmtPbmx5LCBTdGFsZVdoaWxlUmV2YWxpZGF0ZSB9IGZyb20gJ3dvcmtib3gtc3RyYXRlZ2llcydcblxuc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MgPSAhcGFyYW1zLmRlYnVnXG5cbmNvbnN0IGRlYnVnID0gKC4uLmRhdGE6IGFueVtdKTogdm9pZCA9PiB7XG4gICAgaWYgKHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnNvbGUuZGVidWcoJ1twd2FdJywgLi4uZGF0YSk7XG59XG5cbmNvbnN0IGNhY2hlUHJlZml4ID0gJ2h1Z28tcHdhLSdcbmNvbnN0IGZhbGxiYWNrc0NhY2hlID0gY2FjaGVQcmVmaXggKyAnZmFsbGJhY2tzJ1xuLy8gRmlsdGVyIHRoZSBpbnZhbGlkIFVSTHMsIHN1Y2ggYXMgdGVtcG9yYXJ5IFVSTHMgZ2VuZXJhdGVkIGJ5IEh1Z28gUG9zdFByb2dyZXNzLlxuY29uc3QgcHJlY2FjaGVzID0gcGFyYW1zLnByZWNhY2hlcy5maWx0ZXIoKHVybCkgPT4gdXJsLmluZGV4T2YoJ19faF9wcF9sMScpICE9PSAwKVxuZGVidWcoJ3ByZWNhY2hlcycsIHByZWNhY2hlcylcbmRlYnVnKCdieXBhc3MnLCBwYXJhbXMuYnlwYXNzKVxuXG4vLyBSZWdpc3RlciBwYWdlIHJvdXRlIHdpdGggTmV0d29ya0ZpcnN0IHN0cmF0ZWd5LlxuLy8gVGhlcmUgd2lsbCBiZSBhIHByb2JsZW0gd2l0aCBDYWNoZUZpcnN0IG9yIFN0YWxlV2hpbGVSZXZhbGlkYXRlIHN0cmF0ZWd5XG4vLyBpZiB0aGUgY2FjaGVkIHBhZ2UgbG9hZHMgbm8gbG9uZ2VyIGV4aXN0IG9yIGV4cGlyZWQgYXNzZXRzLCBzdWNoIGFzIENTUyBhbmQgSlMuXG5yZWdpc3RlclJvdXRlKFxuICAgICh7IHJlcXVlc3QgfSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnO1xuICAgIH0sXG4gICAgbmV3IE5ldHdvcmtGaXJzdCh7XG4gICAgICAgIGNhY2hlTmFtZTogY2FjaGVQcmVmaXggKyAncGFnZXMnLFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICBuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4oe1xuICAgICAgICAgICAgICAgIHN0YXR1c2VzOiBbMjAwXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pXG4pXG5cbi8vIFJlZ2lzdGVyIGFzc2V0cyByb3V0ZXMuXG5jb25zdCBhc3NldHMgPSBbJ2ZvbnQnLCAnaW1hZ2UnLCAnc2NyaXB0JywgJ3N0eWxlJ11cblxuY29uc3QgaXNCeXBhc3MgPSAodXJsKSA9PiB7XG4gICAgaWYgKHBhcmFtcy5ieXBhc3MgJiYgcGFyYW1zLmJ5cGFzcy5pbmNsdWRlcyh1cmwuaHJlZikpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuaWYgKHBhcmFtcy5ieXBhc3MpIHtcbiAgICByZWdpc3RlclJvdXRlKFxuICAgICAgICAoeyByZXF1ZXN0LCBzYW1lT3JpZ2luLCB1cmwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0J5cGFzcyh1cmwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIG9yaWdpbnNcbiAgICAgICAgICAgIGlmIChzYW1lT3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIG5ldyBOZXR3b3JrT25seSgpLFxuICAgICk7XG59XG5cbmZvciAobGV0IGkgaW4gYXNzZXRzKSB7XG4gICAgY29uc3Qga2luZCA9IGFzc2V0c1tpXVxuICAgIGNvbnN0IGNhY2hlID0gcGFyYW1zLmNhY2hlc1traW5kXVxuICAgIC8vIFJlbW92ZSB0aGUgdHJhaWxpbmcgc2xhc2ggZnJvbSBvcmlnaW4uXG4gICAgY29uc3Qgb3JpZ2lucyA9IGNhY2hlLm9yaWdpbnMgPyBjYWNoZS5vcmlnaW5zLm1hcCgob3JpZ2luKSA9PiBvcmlnaW4ucmVwbGFjZSgvXFwvJC8sICcnKSkgOiBbXVxuICAgIGNvbnN0IGNhY2hlTmFtZSA9IGNhY2hlUHJlZml4ICsga2luZCArICdzJ1xuICAgIGxldCBzdHJhdGVneSA9IG51bGxcbiAgICBsZXQgcGx1Z2lucyA9IFtcbiAgICAgICAgbmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBFeHBpcmF0aW9uUGx1Z2luKHtcbiAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IGNhY2hlLm1heF9hZ2UgPz8gNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgICAgIH0pXG4gICAgXVxuICAgIHN3aXRjaCAoY2FjaGUuc3RyYXRlZ3kpIHtcbiAgICAgICAgY2FzZSAnbmV0d29yay1maXJzdCc6XG4gICAgICAgICAgICBzdHJhdGVneSA9IG5ldyBOZXR3b3JrRmlyc3Qoe1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnY2FjaGUtZmlyc3QnOlxuICAgICAgICAgICAgc3RyYXRlZ3kgPSBuZXcgQ2FjaGVGaXJzdCh7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBjYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdzdGFsZS13aGlsZS1yZXZhbGlkYXRlJzpcbiAgICAgICAgICAgIHN0cmF0ZWd5ID0gbmV3IFN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IGNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgc3RyYXRlZ3kgZm9yIGtpbmQgXCIke2tpbmR9XCI6IGAgKyBjYWNoZS5zdHJhdGVneSlcbiAgICB9XG4gICAgcmVnaXN0ZXJSb3V0ZShcbiAgICAgICAgKHsgcmVxdWVzdCwgc2FtZU9yaWdpbiwgdXJsIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmRlc3RpbmF0aW9uICE9PSBraW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIG9yaWdpbnNcbiAgICAgICAgICAgIGlmIChzYW1lT3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9yaWdpbnMgJiYgb3JpZ2lucy5pbmNsdWRlcyh1cmwub3JpZ2luLnJlcGxhY2UoL1xcLyQvLCAnJykpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVidWcoYCR7dXJsfSB3aWxsIG5vdCBiZSBjYWNoZWQuYClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzdHJhdGVneVxuICAgICk7XG59XG5cbi8vIFJlZ2lzdGVyIGRlZmF1bHQgaGFuZGxlci5cbnJlZ2lzdGVyUm91dGUoKCkgPT4gdHJ1ZSwgbmV3IE5ldHdvcmtPbmx5KCkpXG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGV2ZW50ID0+IHtcbiAgICBldmVudC53YWl0VW50aWwoXG4gICAgICAgIHNlbGYuY2FjaGVzXG4gICAgICAgICAgICAub3BlbihmYWxsYmFja3NDYWNoZSlcbiAgICAgICAgICAgIC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbChwcmVjYWNoZXMpKVxuICAgICk7XG59KTtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIG9wdGlvbnMgPT4ge1xuICAgIGRlYnVnKCdjYXRjaCBoYW5kbGVyJywgb3B0aW9ucy5yZXF1ZXN0KVxuICAgIGNvbnN0IGRlc3QgPSBvcHRpb25zLnJlcXVlc3QuZGVzdGluYXRpb25cbiAgICBjb25zdCB1cmwgPSBvcHRpb25zLnJlcXVlc3QudXJsXG4gICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKGZhbGxiYWNrc0NhY2hlKVxuXG4gICAgLy8gUmV0dXJuIHRoZSBjYWNoZWQgaXRlbSBpZiBmb3VuZC5cbiAgICBjb25zdCBjYWNoZWQgPSBhd2FpdCBjYWNoZS5tYXRjaCh1cmwpXG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgICByZXR1cm4gY2FjaGVkXG4gICAgfVxuXG4gICAgaWYgKGRlc3QgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgICAgbGV0IG9mZmxpbmU6IFJlc3BvbnNlIHwgdW5kZWZpbmVkO1xuICAgICAgICBsZXQgbGFuZyA9ICcnXG4gICAgICAgIGxldCBwYXRoczogc3RyaW5nW11cbiAgICAgICAgaWYgKHVybC5pbmRleE9mKHBhcmFtcy5iYXNlVVJMKSA9PT0gMCkge1xuICAgICAgICAgICAgcGF0aHMgPSB1cmwucmVwbGFjZShwYXJhbXMuYmFzZVVSTCwgJycpLnNwbGl0KCcvJywgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdGhzID0gKG5ldyBVUkwodXJsKSkucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycsIDEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCA+IDAgJiYgcGFyYW1zLmxhbmdzLmluY2x1ZGVzKHBhdGhzWzBdKSkge1xuICAgICAgICAgICAgbGFuZyA9IHBhdGhzWzBdXG4gICAgICAgICAgICBjb25zdCBvZmZsaW5lVXJsID0gYCR7cGFyYW1zLmJhc2VVUkx9JHtsYW5nfS9vZmZsaW5lL2BcbiAgICAgICAgICAgIGRlYnVnKCdsb2FkaW5nIG11bHRpbGluZ3VhbCBvZmZsaW5lIHBhZ2UnLCBvZmZsaW5lVXJsKVxuICAgICAgICAgICAgb2ZmbGluZSA9IGF3YWl0IGNhY2hlLm1hdGNoKG9mZmxpbmVVcmwpXG4gICAgICAgICAgICBpZiAob2ZmbGluZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvZmZsaW5lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZsaW5lVXJsID0gYCR7cGFyYW1zLmJhc2VVUkx9b2ZmbGluZS9gXG4gICAgICAgIGRlYnVnKCdsb2FkaW5nIHRoZSBmYWxsYmFjayBvZmZsaW5lIHBhZ2UnLCBvZmZsaW5lVXJsKVxuICAgICAgICByZXR1cm4gKGF3YWl0IGNhY2hlLm1hdGNoKG9mZmxpbmVVcmwpKVxuICAgICAgICAgICAgfHwgUmVzcG9uc2UuZXJyb3IoKVxuICAgIH0gZWxzZSBpZiAoZGVzdCA9PT0gJ2ltYWdlJyAmJiBwYXJhbXMub2ZmbGluZV9pbWFnZSkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IGNhY2hlLm1hdGNoKHBhcmFtcy5vZmZsaW5lX2ltYWdlKSlcbiAgICAgICAgICAgIHx8IFJlc3BvbnNlLmVycm9yKClcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYSBlcnJvciByZXNwb25zZS5cbiAgICByZXR1cm4gUmVzcG9uc2UuZXJyb3IoKVxufTtcblxuc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXIpXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQSx5QkFBQyxTQUFVLEtBQUksUUFBUyxDQUFDLEdBQUUsUUFBUyxFQUFDLE1BQU8sRUFBQyxTQUFVLFFBQVEsU0FBVSxDQUFDLEdBQUUsVUFBVyxnQkFBZSxHQUFFLE9BQVEsRUFBQyxTQUFVLFFBQVEsU0FBVSxDQUFDLEdBQUUsVUFBVyxnQkFBZSxHQUFFLFFBQVMsRUFBQyxTQUFVLFFBQVEsU0FBVSxDQUFDLEdBQUUsVUFBVyxnQkFBZSxHQUFFLE9BQVEsRUFBQyxTQUFVLFFBQVEsU0FBVSxDQUFDLEdBQUUsVUFBVyxnQkFBZSxFQUFDLEdBQUUsT0FBUSxPQUFNLE9BQVEsQ0FBQyxNQUFLLElBQUksR0FBRSxlQUFnQixJQUFHLFdBQVksQ0FBQyxnQkFBZSxnQkFBZSxlQUFjLGdCQUFlLFdBQVcsRUFBQzs7O0FDQy9iLE1BQUc7QUFBQyxTQUFLLG9CQUFvQixLQUFHLEVBQUU7QUFBQSxFQUFDLFNB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QyxZQUFJLFNBQVM7QUFDVCxpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBRUEsWUFBTSxhQUFhLEdBQUcsZUFBTyxPQUFPO0FBQ3BDLFlBQU0scUNBQXFDLFVBQVU7QUFDckQsYUFBUSxNQUFNLE1BQU0sTUFBTSxVQUFVLEtBQzdCLFNBQVMsTUFBTTtBQUFBLElBQzFCLFdBQVcsU0FBUyxXQUFXLGVBQU8sZUFBZTtBQUNqRCxhQUFRLE1BQU0sTUFBTSxNQUFNLGVBQU8sYUFBYSxLQUN2QyxTQUFTLE1BQU07QUFBQSxJQUMxQjtBQUdBLFdBQU8sU0FBUyxNQUFNO0FBQUEsRUFDMUI7QUFFQSxrQkFBZ0IsT0FBTzsiLAogICJuYW1lcyI6IFsidGFyZ2V0IiwgImhhbmRsZXIiLCAiaGFuZGxlciIsICJoYW5kbGVyIiwgImhhbmRsZXIiLCAiaGFuZGxlciIsICJkZWZhdWx0Um91dGVyIiwgImhhbmRsZXIiLCAiZGVmYXVsdFJvdXRlciIsICJoYW5kbGVyIiwgImVycm9yIiwgIm1lc3NhZ2VzIiwgImhhbmRsZXIiLCAibWVzc2FnZXMiLCAiaGFuZGxlciIsICJtZXNzYWdlcyIsICJoYW5kbGVyIiwgIm1lc3NhZ2VzIiwgImhhbmRsZXIiLCAibWVzc2FnZXMiLCAib2ZmbGluZVVybCJdCn0K
