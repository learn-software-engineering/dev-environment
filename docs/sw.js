(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // ns-params:@params
  var params_default = { baseURL: "/", bypass: [], caches: { font: { max_age: 2592e3, origins: [], strategy: "network-first" }, image: { max_age: 2592e3, origins: [], strategy: "network-first" }, script: { max_age: 2592e3, origins: [], strategy: "network-first" }, style: { max_age: 2592e3, origins: [], strategy: "network-first" } }, debug: false, langs: ["en", "es"], offline_image: "", precaches: ["/en/offline/", "/es/offline/", "/css/ls.css", "/es/programming/0100-intro/0101-computers/"] };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtcGFyYW1zOkBwYXJhbXMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ZlcnNpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VzLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL1dvcmtib3hFcnJvci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jb3JlL3NyYy9fcHJpdmF0ZS9hc3NlcnQudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvbG9nZ2VyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZS9zcmMvX3ZlcnNpb24udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlL3NyYy9DYWNoZWFibGVSZXNwb25zZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2Uvc3JjL0NhY2hlYWJsZVJlc3BvbnNlUGx1Z2luLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL2RvbnRXYWl0Rm9yLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2pha2VhcmNoaWJhbGQvaWRiQHY4LjAuMCtpbmNvbXBhdGlibGUvc3JjL3V0aWwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjguMC4wK2luY29tcGF0aWJsZS9zcmMvd3JhcC1pZGItdmFsdWUudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjguMC4wK2luY29tcGF0aWJsZS9zcmMvZW50cnkudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9pZGJAdjguMC4wK2luY29tcGF0aWJsZS9zcmMvZGF0YWJhc2UtZXh0cmFzLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2pha2VhcmNoaWJhbGQvaWRiQHY4LjAuMCtpbmNvbXBhdGlibGUvc3JjL2FzeW5jLWl0ZXJhdG9ycy50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1leHBpcmF0aW9uL3NyYy9fdmVyc2lvbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1leHBpcmF0aW9uL3NyYy9tb2RlbHMvQ2FjaGVUaW1lc3RhbXBzTW9kZWwudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtZXhwaXJhdGlvbi9zcmMvQ2FjaGVFeHBpcmF0aW9uLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL2NhY2hlTmFtZXMudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2sudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtZXhwaXJhdGlvbi9zcmMvRXhwaXJhdGlvblBsdWdpbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9fdmVyc2lvbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy91dGlscy9jb25zdGFudHMudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtcm91dGluZy9zcmMvdXRpbHMvbm9ybWFsaXplSGFuZGxlci50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9Sb3V0ZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9SZWdFeHBSb3V0ZS50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1yb3V0aW5nL3NyYy9Sb3V0ZXIudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtcm91dGluZy9zcmMvdXRpbHMvZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXJvdXRpbmcvc3JjL3JlZ2lzdGVyUm91dGUudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtcm91dGluZy9zcmMvc2V0Q2F0Y2hIYW5kbGVyLnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LWNvcmUvc3JjL19wcml2YXRlL2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXMudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvRGVmZXJyZWQudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtY29yZS9zcmMvX3ByaXZhdGUvdGltZW91dC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9fdmVyc2lvbi50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9TdHJhdGVneUhhbmRsZXIudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvU3RyYXRlZ3kudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvdXRpbHMvbWVzc2FnZXMudHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvQ2FjaGVGaXJzdC50cyIsICJucy1odWdvOi90bXAvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS8hZ29vZ2xlIWNocm9tZS93b3JrYm94QHY3LjAuMCtpbmNvbXBhdGlibGUvcGFja2FnZXMvd29ya2JveC1zdHJhdGVnaWVzL3NyYy9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4udHMiLCAibnMtaHVnbzovdG1wL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vIWdvb2dsZSFjaHJvbWUvd29ya2JveEB2Ny4wLjAraW5jb21wYXRpYmxlL3BhY2thZ2VzL3dvcmtib3gtc3RyYXRlZ2llcy9zcmMvTmV0d29ya0ZpcnN0LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL05ldHdvcmtPbmx5LnRzIiwgIm5zLWh1Z286L3RtcC9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tLyFnb29nbGUhY2hyb21lL3dvcmtib3hAdjcuMC4wK2luY29tcGF0aWJsZS9wYWNrYWdlcy93b3JrYm94LXN0cmF0ZWdpZXMvc3JjL1N0YWxlV2hpbGVSZXZhbGlkYXRlLnRzIiwgIjxzdGRpbj4iXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcImJhc2VVUkxcIjpcIi9cIixcImJ5cGFzc1wiOltdLFwiY2FjaGVzXCI6e1wiZm9udFwiOntcIm1heF9hZ2VcIjoyNTkyMDAwLFwib3JpZ2luc1wiOltdLFwic3RyYXRlZ3lcIjpcIm5ldHdvcmstZmlyc3RcIn0sXCJpbWFnZVwiOntcIm1heF9hZ2VcIjoyNTkyMDAwLFwib3JpZ2luc1wiOltdLFwic3RyYXRlZ3lcIjpcIm5ldHdvcmstZmlyc3RcIn0sXCJzY3JpcHRcIjp7XCJtYXhfYWdlXCI6MjU5MjAwMCxcIm9yaWdpbnNcIjpbXSxcInN0cmF0ZWd5XCI6XCJuZXR3b3JrLWZpcnN0XCJ9LFwic3R5bGVcIjp7XCJtYXhfYWdlXCI6MjU5MjAwMCxcIm9yaWdpbnNcIjpbXSxcInN0cmF0ZWd5XCI6XCJuZXR3b3JrLWZpcnN0XCJ9fSxcImRlYnVnXCI6ZmFsc2UsXCJsYW5nc1wiOltcImVuXCIsXCJlc1wiXSxcIm9mZmxpbmVfaW1hZ2VcIjpcIlwiLFwicHJlY2FjaGVzXCI6W1wiL2VuL29mZmxpbmUvXCIsXCIvZXMvb2ZmbGluZS9cIixcIi9jc3MvbHMuY3NzXCIsXCIvZXMvcHJvZ3JhbW1pbmcvMDEwMC1pbnRyby8wMTAxLWNvbXB1dGVycy9cIl19IiwgIi8vIEB0cy1pZ25vcmVcbnRyeXtzZWxmWyd3b3JrYm94OmNvcmU6Ny4wLjAnXSYmXygpfWNhdGNoKGUpe30iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uLy4uL192ZXJzaW9uLmpzJztcblxuaW50ZXJmYWNlIExvZ2dhYmxlT2JqZWN0IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xufVxuaW50ZXJmYWNlIE1lc3NhZ2VNYXAge1xuICBbbWVzc2FnZUlEOiBzdHJpbmddOiAocGFyYW06IExvZ2dhYmxlT2JqZWN0KSA9PiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlczogTWVzc2FnZU1hcCA9IHtcbiAgJ2ludmFsaWQtdmFsdWUnOiAoe3BhcmFtTmFtZSwgdmFsaWRWYWx1ZURlc2NyaXB0aW9uLCB2YWx1ZX0pID0+IHtcbiAgICBpZiAoIXBhcmFtTmFtZSB8fCAhdmFsaWRWYWx1ZURlc2NyaXB0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2ludmFsaWQtdmFsdWUnIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGdpdmVuIGEgdmFsdWUgd2l0aCBhbiBgICtcbiAgICAgIGB1bmV4cGVjdGVkIHZhbHVlLiAke3ZhbGlkVmFsdWVEZXNjcmlwdGlvbn0gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgIGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0uYFxuICAgICk7XG4gIH0sXG5cbiAgJ25vdC1hbi1hcnJheSc6ICh7bW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIGlmICghbW9kdWxlTmFtZSB8fCAhY2xhc3NOYW1lIHx8ICFmdW5jTmFtZSB8fCAhcGFyYW1OYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ25vdC1hbi1hcnJheScgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKScgbXVzdCBiZSBhbiBhcnJheS5gXG4gICAgKTtcbiAgfSxcblxuICAnaW5jb3JyZWN0LXR5cGUnOiAoe1xuICAgIGV4cGVjdGVkVHlwZSxcbiAgICBwYXJhbU5hbWUsXG4gICAgbW9kdWxlTmFtZSxcbiAgICBjbGFzc05hbWUsXG4gICAgZnVuY05hbWUsXG4gIH0pID0+IHtcbiAgICBpZiAoIWV4cGVjdGVkVHlwZSB8fCAhcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbmNvcnJlY3QtdHlwZScgZXJyb3IuYCk7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzTmFtZVN0ciA9IGNsYXNzTmFtZSA/IGAke2NsYXNzTmFtZX0uYCA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZVN0cn1gICtcbiAgICAgIGAke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIG9mIHR5cGUgJHtleHBlY3RlZFR5cGV9LmBcbiAgICApO1xuICB9LFxuXG4gICdpbmNvcnJlY3QtY2xhc3MnOiAoe1xuICAgIGV4cGVjdGVkQ2xhc3NOYW1lLFxuICAgIHBhcmFtTmFtZSxcbiAgICBtb2R1bGVOYW1lLFxuICAgIGNsYXNzTmFtZSxcbiAgICBmdW5jTmFtZSxcbiAgICBpc1JldHVyblZhbHVlUHJvYmxlbSxcbiAgfSkgPT4ge1xuICAgIGlmICghZXhwZWN0ZWRDbGFzc05hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ2luY29ycmVjdC1jbGFzcycgZXJyb3IuYCk7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzTmFtZVN0ciA9IGNsYXNzTmFtZSA/IGAke2NsYXNzTmFtZX0uYCA6ICcnO1xuICAgIGlmIChpc1JldHVyblZhbHVlUHJvYmxlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYFRoZSByZXR1cm4gdmFsdWUgZnJvbSBgICtcbiAgICAgICAgYCcke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lU3RyfSR7ZnVuY05hbWV9KCknIGAgK1xuICAgICAgICBgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBjbGFzcyAke2V4cGVjdGVkQ2xhc3NOYW1lfS5gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZVN0cn0ke2Z1bmNOYW1lfSgpJyBgICtcbiAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzc05hbWV9LmBcbiAgICApO1xuICB9LFxuXG4gICdtaXNzaW5nLWEtbWV0aG9kJzogKHtcbiAgICBleHBlY3RlZE1ldGhvZCxcbiAgICBwYXJhbU5hbWUsXG4gICAgbW9kdWxlTmFtZSxcbiAgICBjbGFzc05hbWUsXG4gICAgZnVuY05hbWUsXG4gIH0pID0+IHtcbiAgICBpZiAoXG4gICAgICAhZXhwZWN0ZWRNZXRob2QgfHxcbiAgICAgICFwYXJhbU5hbWUgfHxcbiAgICAgICFtb2R1bGVOYW1lIHx8XG4gICAgICAhY2xhc3NOYW1lIHx8XG4gICAgICAhZnVuY05hbWVcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnbWlzc2luZy1hLW1ldGhvZCcgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKSBleHBlY3RlZCB0aGUgYCArXG4gICAgICBgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHRvIGV4cG9zZSBhICcke2V4cGVjdGVkTWV0aG9kfScgbWV0aG9kLmBcbiAgICApO1xuICB9LFxuXG4gICdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnOiAoe2VudHJ5fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgQW4gdW5leHBlY3RlZCBlbnRyeSB3YXMgcGFzc2VkIHRvIGAgK1xuICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIFRoZSBlbnRyeSBgICtcbiAgICAgIGAnJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgZW50cnksXG4gICAgICApfScgaXNuJ3Qgc3VwcG9ydGVkLiBZb3UgbXVzdCBzdXBwbHkgYW4gYXJyYXkgb2YgYCArXG4gICAgICBgc3RyaW5ncyB3aXRoIG9uZSBvciBtb3JlIGNoYXJhY3RlcnMsIG9iamVjdHMgd2l0aCBhIHVybCBwcm9wZXJ0eSBvciBgICtcbiAgICAgIGBSZXF1ZXN0IG9iamVjdHMuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWVudHJpZXMnOiAoe2ZpcnN0RW50cnksIHNlY29uZEVudHJ5fSkgPT4ge1xuICAgIGlmICghZmlyc3RFbnRyeSB8fCAhc2Vjb25kRW50cnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArIGAnYWRkLXRvLWNhY2hlLWxpc3QtZHVwbGljYXRlLWVudHJpZXMnIGVycm9yLmAsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBgVHdvIG9mIHRoZSBlbnRyaWVzIHBhc3NlZCB0byBgICtcbiAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBoYWQgdGhlIFVSTCBgICtcbiAgICAgIGAke2ZpcnN0RW50cnl9IGJ1dCBkaWZmZXJlbnQgcmV2aXNpb24gZGV0YWlscy4gV29ya2JveCBpcyBgICtcbiAgICAgIGB1bmFibGUgdG8gY2FjaGUgYW5kIHZlcnNpb24gdGhlIGFzc2V0IGNvcnJlY3RseS4gUGxlYXNlIHJlbW92ZSBvbmUgYCArXG4gICAgICBgb2YgdGhlIGVudHJpZXMuYFxuICAgICk7XG4gIH0sXG5cbiAgJ3BsdWdpbi1lcnJvci1yZXF1ZXN0LXdpbGwtZmV0Y2gnOiAoe3Rocm93bkVycm9yTWVzc2FnZX0pID0+IHtcbiAgICBpZiAoIXRocm93bkVycm9yTWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5leHBlY3RlZCBpbnB1dCB0byBgICsgYCdwbHVnaW4tZXJyb3ItcmVxdWVzdC13aWxsLWZldGNoJywgZXJyb3IuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGBBbiBlcnJvciB3YXMgdGhyb3duIGJ5IGEgcGx1Z2lucyAncmVxdWVzdFdpbGxGZXRjaCgpJyBtZXRob2QuIGAgK1xuICAgICAgYFRoZSB0aHJvd24gZXJyb3IgbWVzc2FnZSB3YXM6ICcke3Rocm93bkVycm9yTWVzc2FnZX0nLmBcbiAgICApO1xuICB9LFxuXG4gICdpbnZhbGlkLWNhY2hlLW5hbWUnOiAoe2NhY2hlTmFtZUlkLCB2YWx1ZX0pID0+IHtcbiAgICBpZiAoIWNhY2hlTmFtZUlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBFeHBlY3RlZCBhICdjYWNoZU5hbWVJZCcgZm9yIGVycm9yICdpbnZhbGlkLWNhY2hlLW5hbWUnYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIGBZb3UgbXVzdCBwcm92aWRlIGEgbmFtZSBjb250YWluaW5nIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgZm9yIGAgK1xuICAgICAgYHNldENhY2hlRGV0YWlscyh7JHtjYWNoZU5hbWVJZH06ICcuLi4nfSkuIFJlY2VpdmVkIGEgdmFsdWUgb2YgYCArXG4gICAgICBgJyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfSdgXG4gICAgKTtcbiAgfSxcblxuICAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJzogKHttZXRob2R9KSA9PiB7XG4gICAgaWYgKCFtZXRob2QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArXG4gICAgICAgICAgYCd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnIGVycm9yLmAsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHJvdXRlIHlvdSdyZSB0cnlpbmcgdG8gdW5yZWdpc3RlciB3YXMgbm90ICBwcmV2aW91c2x5IGAgK1xuICAgICAgYHJlZ2lzdGVyZWQgZm9yIHRoZSBtZXRob2QgdHlwZSAnJHttZXRob2R9Jy5gXG4gICAgKTtcbiAgfSxcblxuICAndW5yZWdpc3Rlci1yb3V0ZS1yb3V0ZS1ub3QtcmVnaXN0ZXJlZCc6ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCBwcmV2aW91c2x5IGAgK1xuICAgICAgYHJlZ2lzdGVyZWQuYFxuICAgICk7XG4gIH0sXG5cbiAgJ3F1ZXVlLXJlcGxheS1mYWlsZWQnOiAoe25hbWV9KSA9PiB7XG4gICAgcmV0dXJuIGBSZXBsYXlpbmcgdGhlIGJhY2tncm91bmQgc3luYyBxdWV1ZSAnJHtuYW1lfScgZmFpbGVkLmA7XG4gIH0sXG5cbiAgJ2R1cGxpY2F0ZS1xdWV1ZS1uYW1lJzogKHtuYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIFF1ZXVlIG5hbWUgJyR7bmFtZX0nIGlzIGFscmVhZHkgYmVpbmcgdXNlZC4gYCArXG4gICAgICBgQWxsIGluc3RhbmNlcyBvZiBiYWNrZ3JvdW5kU3luYy5RdWV1ZSBtdXN0IGJlIGdpdmVuIHVuaXF1ZSBuYW1lcy5gXG4gICAgKTtcbiAgfSxcblxuICAnZXhwaXJlZC10ZXN0LXdpdGhvdXQtbWF4LWFnZSc6ICh7bWV0aG9kTmFtZSwgcGFyYW1OYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlICcke21ldGhvZE5hbWV9KCknIG1ldGhvZCBjYW4gb25seSBiZSB1c2VkIHdoZW4gdGhlIGAgK1xuICAgICAgYCcke3BhcmFtTmFtZX0nIGlzIHVzZWQgaW4gdGhlIGNvbnN0cnVjdG9yLmBcbiAgICApO1xuICB9LFxuXG4gICd1bnN1cHBvcnRlZC1yb3V0ZS10eXBlJzogKHttb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUaGUgc3VwcGxpZWQgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHdhcyBhbiB1bnN1cHBvcnRlZCB0eXBlLiBgICtcbiAgICAgIGBQbGVhc2UgY2hlY2sgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9IGZvciBgICtcbiAgICAgIGB2YWxpZCBpbnB1dCB0eXBlcy5gXG4gICAgKTtcbiAgfSxcblxuICAnbm90LWFycmF5LW9mLWNsYXNzJzogKHtcbiAgICB2YWx1ZSxcbiAgICBleHBlY3RlZENsYXNzLFxuICAgIG1vZHVsZU5hbWUsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZ1bmNOYW1lLFxuICAgIHBhcmFtTmFtZSxcbiAgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHN1cHBsaWVkICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIGAgK1xuICAgICAgYCcke2V4cGVjdGVkQ2xhc3N9JyBvYmplY3RzLiBSZWNlaXZlZCAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LCcuIGAgK1xuICAgICAgYFBsZWFzZSBjaGVjayB0aGUgY2FsbCB0byAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGAgK1xuICAgICAgYHRvIGZpeCB0aGUgaXNzdWUuYFxuICAgICk7XG4gIH0sXG5cbiAgJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCc6ICh7bW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFlvdSBtdXN0IGRlZmluZSBlaXRoZXIgY29uZmlnLm1heEVudHJpZXMgb3IgY29uZmlnLm1heEFnZVNlY29uZHNgICtcbiAgICAgIGBpbiAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfWBcbiAgICApO1xuICB9LFxuXG4gICdzdGF0dXNlcy1vci1oZWFkZXJzLXJlcXVpcmVkJzogKHttb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgWW91IG11c3QgZGVmaW5lIGVpdGhlciBjb25maWcuc3RhdHVzZXMgb3IgY29uZmlnLmhlYWRlcnNgICtcbiAgICAgIGBpbiAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfWBcbiAgICApO1xuICB9LFxuXG4gICdpbnZhbGlkLXN0cmluZyc6ICh7bW9kdWxlTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZX0pID0+IHtcbiAgICBpZiAoIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1zdHJpbmcnIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYFdoZW4gdXNpbmcgc3RyaW5ncywgdGhlICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IHN0YXJ0IHdpdGggYCArXG4gICAgICBgJ2h0dHAnIChmb3IgY3Jvc3Mtb3JpZ2luIG1hdGNoZXMpIG9yICcvJyAoZm9yIHNhbWUtb3JpZ2luIG1hdGNoZXMpLiBgICtcbiAgICAgIGBQbGVhc2Ugc2VlIHRoZSBkb2NzIGZvciAke21vZHVsZU5hbWV9LiR7ZnVuY05hbWV9KCkgZm9yIGAgK1xuICAgICAgYG1vcmUgaW5mby5gXG4gICAgKTtcbiAgfSxcblxuICAnY2hhbm5lbC1uYW1lLXJlcXVpcmVkJzogKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgWW91IG11c3QgcHJvdmlkZSBhIGNoYW5uZWxOYW1lIHRvIGNvbnN0cnVjdCBhIGAgK1xuICAgICAgYEJyb2FkY2FzdENhY2hlVXBkYXRlIGluc3RhbmNlLmBcbiAgICApO1xuICB9LFxuXG4gICdpbnZhbGlkLXJlc3BvbnNlcy1hcmUtc2FtZS1hcmdzJzogKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIGFyZ3VtZW50cyBwYXNzZWQgaW50byByZXNwb25zZXNBcmVTYW1lKCkgYXBwZWFyIHRvIGJlIGAgK1xuICAgICAgYGludmFsaWQuIFBsZWFzZSBlbnN1cmUgdmFsaWQgUmVzcG9uc2VzIGFyZSB1c2VkLmBcbiAgICApO1xuICB9LFxuXG4gICdleHBpcmUtY3VzdG9tLWNhY2hlcy1vbmx5JzogKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgWW91IG11c3QgcHJvdmlkZSBhICdjYWNoZU5hbWUnIHByb3BlcnR5IHdoZW4gdXNpbmcgdGhlIGAgK1xuICAgICAgYGV4cGlyYXRpb24gcGx1Z2luIHdpdGggYSBydW50aW1lIGNhY2hpbmcgc3RyYXRlZ3kuYFxuICAgICk7XG4gIH0sXG5cbiAgJ3VuaXQtbXVzdC1iZS1ieXRlcyc6ICh7bm9ybWFsaXplZFJhbmdlSGVhZGVyfSkgPT4ge1xuICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3VuaXQtbXVzdC1iZS1ieXRlcycgZXJyb3IuYCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBgVGhlICd1bml0JyBwb3J0aW9uIG9mIHRoZSBSYW5nZSBoZWFkZXIgbXVzdCBiZSBzZXQgdG8gJ2J5dGVzJy4gYCArXG4gICAgICBgVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImBcbiAgICApO1xuICB9LFxuXG4gICdzaW5nbGUtcmFuZ2Utb25seSc6ICh7bm9ybWFsaXplZFJhbmdlSGVhZGVyfSkgPT4ge1xuICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3NpbmdsZS1yYW5nZS1vbmx5JyBlcnJvci5gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGBNdWx0aXBsZSByYW5nZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2UgYSAgc2luZ2xlIHN0YXJ0IGAgK1xuICAgICAgYHZhbHVlLCBhbmQgb3B0aW9uYWwgZW5kIHZhbHVlLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYFxuICAgICk7XG4gIH0sXG5cbiAgJ2ludmFsaWQtcmFuZ2UtdmFsdWVzJzogKHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9KSA9PiB7XG4gICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1yYW5nZS12YWx1ZXMnIGVycm9yLmApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBSYW5nZSBoZWFkZXIgaXMgbWlzc2luZyBib3RoIHN0YXJ0IGFuZCBlbmQgdmFsdWVzLiBBdCBsZWFzdCBgICtcbiAgICAgIGBvbmUgb2YgdGhvc2UgdmFsdWVzIGlzIG5lZWRlZC4gVGhlIFJhbmdlIGhlYWRlciBwcm92aWRlZCB3YXMgYCArXG4gICAgICBgXCIke25vcm1hbGl6ZWRSYW5nZUhlYWRlcn1cImBcbiAgICApO1xuICB9LFxuXG4gICduby1yYW5nZS1oZWFkZXInOiAoKSA9PiB7XG4gICAgcmV0dXJuIGBObyBSYW5nZSBoZWFkZXIgd2FzIGZvdW5kIGluIHRoZSBSZXF1ZXN0IHByb3ZpZGVkLmA7XG4gIH0sXG5cbiAgJ3JhbmdlLW5vdC1zYXRpc2ZpYWJsZSc6ICh7c2l6ZSwgc3RhcnQsIGVuZH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFRoZSBzdGFydCAoJHtzdGFydH0pIGFuZCBlbmQgKCR7ZW5kfSkgdmFsdWVzIGluIHRoZSBSYW5nZSBhcmUgYCArXG4gICAgICBgbm90IHNhdGlzZmlhYmxlIGJ5IHRoZSBjYWNoZWQgcmVzcG9uc2UsIHdoaWNoIGlzICR7c2l6ZX0gYnl0ZXMuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2F0dGVtcHQtdG8tY2FjaGUtbm9uLWdldC1yZXF1ZXN0JzogKHt1cmwsIG1ldGhvZH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYFVuYWJsZSB0byBjYWNoZSAnJHt1cmx9JyBiZWNhdXNlIGl0IGlzIGEgJyR7bWV0aG9kfScgcmVxdWVzdCBhbmQgYCArXG4gICAgICBgb25seSAnR0VUJyByZXF1ZXN0cyBjYW4gYmUgY2FjaGVkLmBcbiAgICApO1xuICB9LFxuXG4gICdjYWNoZS1wdXQtd2l0aC1uby1yZXNwb25zZSc6ICh7dXJsfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlcmUgd2FzIGFuIGF0dGVtcHQgdG8gY2FjaGUgJyR7dXJsfScgYnV0IHRoZSByZXNwb25zZSB3YXMgbm90IGAgK1xuICAgICAgYGRlZmluZWQuYFxuICAgICk7XG4gIH0sXG5cbiAgJ25vLXJlc3BvbnNlJzogKHt1cmwsIGVycm9yfSkgPT4ge1xuICAgIGxldCBtZXNzYWdlID0gYFRoZSBzdHJhdGVneSBjb3VsZCBub3QgZ2VuZXJhdGUgYSByZXNwb25zZSBmb3IgJyR7dXJsfScuYDtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UgKz0gYCBUaGUgdW5kZXJseWluZyBlcnJvciBpcyAke2Vycm9yfS5gO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICAnYmFkLXByZWNhY2hpbmctcmVzcG9uc2UnOiAoe3VybCwgc3RhdHVzfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBgVGhlIHByZWNhY2hpbmcgcmVxdWVzdCBmb3IgJyR7dXJsfScgZmFpbGVkYCArXG4gICAgICAoc3RhdHVzID8gYCB3aXRoIGFuIEhUVFAgc3RhdHVzIG9mICR7c3RhdHVzfS5gIDogYC5gKVxuICAgICk7XG4gIH0sXG5cbiAgJ25vbi1wcmVjYWNoZWQtdXJsJzogKHt1cmx9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCgnJHt1cmx9Jykgd2FzIGNhbGxlZCwgYnV0IHRoYXQgVVJMIGlzIGAgK1xuICAgICAgYG5vdCBwcmVjYWNoZWQuIFBsZWFzZSBwYXNzIGluIGEgVVJMIHRoYXQgaXMgcHJlY2FjaGVkIGluc3RlYWQuYFxuICAgICk7XG4gIH0sXG5cbiAgJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWludGVncml0aWVzJzogKHt1cmx9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBUd28gb2YgdGhlIGVudHJpZXMgcGFzc2VkIHRvIGAgK1xuICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIGhhZCB0aGUgVVJMIGAgK1xuICAgICAgYCR7dXJsfSB3aXRoIGRpZmZlcmVudCBpbnRlZ3JpdHkgdmFsdWVzLiBQbGVhc2UgcmVtb3ZlIG9uZSBvZiB0aGVtLmBcbiAgICApO1xuICB9LFxuXG4gICdtaXNzaW5nLXByZWNhY2hlLWVudHJ5JzogKHtjYWNoZU5hbWUsIHVybH0pID0+IHtcbiAgICByZXR1cm4gYFVuYWJsZSB0byBmaW5kIGEgcHJlY2FjaGVkIHJlc3BvbnNlIGluICR7Y2FjaGVOYW1lfSBmb3IgJHt1cmx9LmA7XG4gIH0sXG5cbiAgJ2Nyb3NzLW9yaWdpbi1jb3B5LXJlc3BvbnNlJzogKHtvcmlnaW59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGB3b3JrYm94LWNvcmUuY29weVJlc3BvbnNlKCkgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHNhbWUtb3JpZ2luIGAgK1xuICAgICAgYHJlc3BvbnNlcy4gSXQgd2FzIHBhc3NlZCBhIHJlc3BvbnNlIHdpdGggb3JpZ2luICR7b3JpZ2lufS5gXG4gICAgKTtcbiAgfSxcblxuICAnb3BhcXVlLXN0cmVhbXMtc291cmNlJzogKHt0eXBlfSkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgYE9uZSBvZiB0aGUgd29ya2JveC1zdHJlYW1zIHNvdXJjZXMgcmVzdWx0ZWQgaW4gYW4gYCArXG4gICAgICBgJyR7dHlwZX0nIHJlc3BvbnNlLmA7XG4gICAgaWYgKHR5cGUgPT09ICdvcGFxdWVyZWRpcmVjdCcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGAke21lc3NhZ2V9IFBsZWFzZSBkbyBub3QgdXNlIGEgbmF2aWdhdGlvbiByZXF1ZXN0IHRoYXQgcmVzdWx0cyBgICtcbiAgICAgICAgYGluIGEgcmVkaXJlY3QgYXMgYSBzb3VyY2UuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGAke21lc3NhZ2V9IFBsZWFzZSBlbnN1cmUgeW91ciBzb3VyY2VzIGFyZSBDT1JTLWVuYWJsZWQuYDtcbiAgfSxcbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24uanMnO1xuXG5jb25zdCBmYWxsYmFjayA9IChjb2RlOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIGxldCBtc2cgPSBjb2RlO1xuICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgbXNnICs9IGAgOjogJHtKU09OLnN0cmluZ2lmeShhcmdzKX1gO1xuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5jb25zdCBnZW5lcmF0b3JGdW5jdGlvbiA9IChjb2RlOiBzdHJpbmcsIGRldGFpbHMgPSB7fSkgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZXNbY29kZV07XG4gIGlmICghbWVzc2FnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgbWVzc2FnZSBmb3IgY29kZSAnJHtjb2RlfScuYCk7XG4gIH1cblxuICByZXR1cm4gbWVzc2FnZShkZXRhaWxzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXNzYWdlR2VuZXJhdG9yID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGZhbGxiYWNrIDogZ2VuZXJhdG9yRnVuY3Rpb247XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge21lc3NhZ2VHZW5lcmF0b3J9IGZyb20gJy4uL21vZGVscy9tZXNzYWdlcy9tZXNzYWdlR2VuZXJhdG9yLmpzJztcbmltcG9ydCB7TWFwTGlrZU9iamVjdH0gZnJvbSAnLi4vdHlwZXMuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogV29ya2JveCBlcnJvcnMgc2hvdWxkIGJlIHRocm93biB3aXRoIHRoaXMgY2xhc3MuXG4gKiBUaGlzIGFsbG93cyB1c2UgdG8gZW5zdXJlIHRoZSB0eXBlIGVhc2lseSBpbiB0ZXN0cyxcbiAqIGhlbHBzIGRldmVsb3BlcnMgaWRlbnRpZnkgZXJyb3JzIGZyb20gd29ya2JveFxuICogZWFzaWx5IGFuZCBhbGxvd3MgdXNlIHRvIG9wdGltaXNlIGVycm9yXG4gKiBtZXNzYWdlcyBjb3JyZWN0bHkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgV29ya2JveEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBkZXRhaWxzPzogTWFwTGlrZU9iamVjdDtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yQ29kZSBUaGUgZXJyb3IgY29kZSB0aGF0XG4gICAqIGlkZW50aWZpZXMgdGhpcyBwYXJ0aWN1bGFyIGVycm9yLlxuICAgKiBAcGFyYW0ge09iamVjdD19IGRldGFpbHMgQW55IHJlbGV2YW50IGFyZ3VtZW50c1xuICAgKiB0aGF0IHdpbGwgaGVscCBkZXZlbG9wZXJzIGlkZW50aWZ5IGlzc3VlcyBzaG91bGRcbiAgICogYmUgYWRkZWQgYXMgYSBrZXkgb24gdGhlIGNvbnRleHQgb2JqZWN0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGRldGFpbHM/OiBNYXBMaWtlT2JqZWN0KSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VHZW5lcmF0b3IoZXJyb3JDb2RlLCBkZXRhaWxzKTtcblxuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgdGhpcy5uYW1lID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gIH1cbn1cblxuZXhwb3J0IHtXb3JrYm94RXJyb3J9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJy4uL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge01hcExpa2VPYmplY3R9IGZyb20gJy4uL3R5cGVzLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vKlxuICogVGhpcyBtZXRob2QgdGhyb3dzIGlmIHRoZSBzdXBwbGllZCB2YWx1ZSBpcyBub3QgYW4gYXJyYXkuXG4gKiBUaGUgZGVzdHJ1Y3RlZCB2YWx1ZXMgYXJlIHJlcXVpcmVkIHRvIHByb2R1Y2UgYSBtZWFuaW5nZnVsIGVycm9yIGZvciB1c2Vycy5cbiAqIFRoZSBkZXN0cnVjdGVkIGFuZCByZXN0cnVjdHVyZWQgb2JqZWN0IGlzIHNvIGl0J3MgY2xlYXIgd2hhdCBpc1xuICogbmVlZGVkLlxuICovXG5jb25zdCBpc0FycmF5ID0gKHZhbHVlOiBhbnlbXSwgZGV0YWlsczogTWFwTGlrZU9iamVjdCkgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm90LWFuLWFycmF5JywgZGV0YWlscyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhc01ldGhvZCA9IChcbiAgb2JqZWN0OiBNYXBMaWtlT2JqZWN0LFxuICBleHBlY3RlZE1ldGhvZDogc3RyaW5nLFxuICBkZXRhaWxzOiBNYXBMaWtlT2JqZWN0LFxuKSA9PiB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2Ygb2JqZWN0W2V4cGVjdGVkTWV0aG9kXTtcbiAgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICBkZXRhaWxzWydleHBlY3RlZE1ldGhvZCddID0gZXhwZWN0ZWRNZXRob2Q7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbWlzc2luZy1hLW1ldGhvZCcsIGRldGFpbHMpO1xuICB9XG59O1xuXG5jb25zdCBpc1R5cGUgPSAoXG4gIG9iamVjdDogdW5rbm93bixcbiAgZXhwZWN0ZWRUeXBlOiBzdHJpbmcsXG4gIGRldGFpbHM6IE1hcExpa2VPYmplY3QsXG4pID0+IHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgIGRldGFpbHNbJ2V4cGVjdGVkVHlwZSddID0gZXhwZWN0ZWRUeXBlO1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC10eXBlJywgZGV0YWlscyk7XG4gIH1cbn07XG5cbmNvbnN0IGlzSW5zdGFuY2UgPSAoXG4gIG9iamVjdDogdW5rbm93bixcbiAgLy8gTmVlZCB0aGUgZ2VuZXJhbCB0eXBlIHRvIGRvIHRoZSBjaGVjayBsYXRlci5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgZXhwZWN0ZWRDbGFzczogRnVuY3Rpb24sXG4gIGRldGFpbHM6IE1hcExpa2VPYmplY3QsXG4pID0+IHtcbiAgaWYgKCEob2JqZWN0IGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICBkZXRhaWxzWydleHBlY3RlZENsYXNzTmFtZSddID0gZXhwZWN0ZWRDbGFzcy5uYW1lO1xuICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC1jbGFzcycsIGRldGFpbHMpO1xuICB9XG59O1xuXG5jb25zdCBpc09uZU9mID0gKHZhbHVlOiBhbnksIHZhbGlkVmFsdWVzOiBhbnlbXSwgZGV0YWlsczogTWFwTGlrZU9iamVjdCkgPT4ge1xuICBpZiAoIXZhbGlkVmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgIGRldGFpbHNbJ3ZhbGlkVmFsdWVEZXNjcmlwdGlvbiddID0gYFZhbGlkIHZhbHVlcyBhcmUgJHtKU09OLnN0cmluZ2lmeShcbiAgICAgIHZhbGlkVmFsdWVzLFxuICAgICl9LmA7XG4gICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC12YWx1ZScsIGRldGFpbHMpO1xuICB9XG59O1xuXG5jb25zdCBpc0FycmF5T2ZDbGFzcyA9IChcbiAgdmFsdWU6IGFueSxcbiAgLy8gTmVlZCBnZW5lcmFsIHR5cGUgdG8gZG8gY2hlY2sgbGF0ZXIuXG4gIGV4cGVjdGVkQ2xhc3M6IEZ1bmN0aW9uLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGRldGFpbHM6IE1hcExpa2VPYmplY3QsXG4pID0+IHtcbiAgY29uc3QgZXJyb3IgPSBuZXcgV29ya2JveEVycm9yKCdub3QtYXJyYXktb2YtY2xhc3MnLCBkZXRhaWxzKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgaWYgKCEoaXRlbSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGZpbmFsQXNzZXJ0RXhwb3J0cyA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IG51bGxcbiAgICA6IHtcbiAgICAgICAgaGFzTWV0aG9kLFxuICAgICAgICBpc0FycmF5LFxuICAgICAgICBpc0luc3RhbmNlLFxuICAgICAgICBpc09uZU9mLFxuICAgICAgICBpc1R5cGUsXG4gICAgICAgIGlzQXJyYXlPZkNsYXNzLFxuICAgICAgfTtcblxuZXhwb3J0IHtmaW5hbEFzc2VydEV4cG9ydHMgYXMgYXNzZXJ0fTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5jb25zdCBnZXRGcmllbmRseVVSTCA9ICh1cmw6IFVSTCB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwoU3RyaW5nKHVybCksIGxvY2F0aW9uLmhyZWYpO1xuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yMzIzXG4gIC8vIFdlIHdhbnQgdG8gaW5jbHVkZSBldmVyeXRoaW5nLCBleGNlcHQgZm9yIHRoZSBvcmlnaW4gaWYgaXQncyBzYW1lLW9yaWdpbi5cbiAgcmV0dXJuIHVybE9iai5ocmVmLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7bG9jYXRpb24ub3JpZ2lufWApLCAnJyk7XG59O1xuXG5leHBvcnQge2dldEZyaWVuZGx5VVJMfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLy8gbG9nZ2VyIGlzIHVzZWQgaW5zaWRlIG9mIGJvdGggc2VydmljZSB3b3JrZXJzIGFuZCB0aGUgd2luZG93IGdsb2JhbCBzY29wZS5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdvcmtlckdsb2JhbFNjb3BlIHtcbiAgICBfX1dCX0RJU0FCTEVfREVWX0xPR1M6IGJvb2xlYW47XG4gIH1cblxuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX1dCX0RJU0FCTEVfREVWX0xPR1M6IGJvb2xlYW47XG4gIH1cbn1cblxudHlwZSBMb2dnZXJNZXRob2RzID1cbiAgfCAnZGVidWcnXG4gIHwgJ2xvZydcbiAgfCAnd2FybidcbiAgfCAnZXJyb3InXG4gIHwgJ2dyb3VwQ29sbGFwc2VkJ1xuICB8ICdncm91cEVuZCc7XG5cbmNvbnN0IGxvZ2dlciA9IChcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gbnVsbFxuICAgIDogKCgpID0+IHtcbiAgICAgICAgLy8gRG9uJ3Qgb3ZlcndyaXRlIHRoaXMgdmFsdWUgaWYgaXQncyBhbHJlYWR5IHNldC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9wdWxsLzIyODQjaXNzdWVjb21tZW50LTU2MDQ3MDkyM1xuICAgICAgICBpZiAoISgnX19XQl9ESVNBQkxFX0RFVl9MT0dTJyBpbiBnbG9iYWxUaGlzKSkge1xuICAgICAgICAgIHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5Hcm91cCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGhvZFRvQ29sb3JNYXA6IHtbbWV0aG9kTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVsbH0gPSB7XG4gICAgICAgICAgZGVidWc6IGAjN2Y4YzhkYCwgLy8gR3JheVxuICAgICAgICAgIGxvZzogYCMyZWNjNzFgLCAvLyBHcmVlblxuICAgICAgICAgIHdhcm46IGAjZjM5YzEyYCwgLy8gWWVsbG93XG4gICAgICAgICAgZXJyb3I6IGAjYzAzOTJiYCwgLy8gUmVkXG4gICAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGAjMzQ5OGRiYCwgLy8gQmx1ZVxuICAgICAgICAgIGdyb3VwRW5kOiBudWxsLCAvLyBObyBjb2xvcmVkIHByZWZpeCBvbiBncm91cEVuZFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHByaW50ID0gZnVuY3Rpb24gKG1ldGhvZDogTG9nZ2VyTWV0aG9kcywgYXJnczogYW55W10pIHtcbiAgICAgICAgICBpZiAoc2VsZi5fX1dCX0RJU0FCTEVfREVWX0xPR1MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICAvLyBTYWZhcmkgZG9lc24ndCBwcmludCBhbGwgY29uc29sZS5ncm91cENvbGxhcHNlZCgpIGFyZ3VtZW50czpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODI3NTRcbiAgICAgICAgICAgIGlmICgvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgICAgICAgIGBiYWNrZ3JvdW5kOiAke21ldGhvZFRvQ29sb3JNYXBbbWV0aG9kXSF9YCxcbiAgICAgICAgICAgIGBib3JkZXItcmFkaXVzOiAwLjVlbWAsXG4gICAgICAgICAgICBgY29sb3I6IHdoaXRlYCxcbiAgICAgICAgICAgIGBmb250LXdlaWdodDogYm9sZGAsXG4gICAgICAgICAgICBgcGFkZGluZzogMnB4IDAuNWVtYCxcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgLy8gV2hlbiBpbiBhIGdyb3VwLCB0aGUgd29ya2JveCBwcmVmaXggaXMgbm90IGRpc3BsYXllZC5cbiAgICAgICAgICBjb25zdCBsb2dQcmVmaXggPSBpbkdyb3VwID8gW10gOiBbJyVjd29ya2JveCcsIHN0eWxlcy5qb2luKCc7JyldO1xuXG4gICAgICAgICAgY29uc29sZVttZXRob2RdKC4uLmxvZ1ByZWZpeCwgLi4uYXJncyk7XG5cbiAgICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICBpbkdyb3VwID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwRW5kJykge1xuICAgICAgICAgICAgaW5Hcm91cCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgICAgICAgY29uc3QgYXBpOiB7W21ldGhvZE5hbWU6IHN0cmluZ106IEZ1bmN0aW9ufSA9IHt9O1xuICAgICAgICBjb25zdCBsb2dnZXJNZXRob2RzID0gT2JqZWN0LmtleXMobWV0aG9kVG9Db2xvck1hcCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgbG9nZ2VyTWV0aG9kcykge1xuICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGtleSBhcyBMb2dnZXJNZXRob2RzO1xuXG4gICAgICAgICAgYXBpW21ldGhvZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICAgIHByaW50KG1ldGhvZCwgYXJncyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcGkgYXMgdW5rbm93bjtcbiAgICAgIH0pKClcbikgYXMgQ29uc29sZTtcblxuZXhwb3J0IHtsb2dnZXJ9O1xuIiwgIi8vIEB0cy1pZ25vcmVcbnRyeXtzZWxmWyd3b3JrYm94OmNhY2hlYWJsZS1yZXNwb25zZTo3LjAuMCddJiZfKCl9Y2F0Y2goZSl7fSIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlYWJsZVJlc3BvbnNlT3B0aW9ucyB7XG4gIHN0YXR1c2VzPzogbnVtYmVyW107XG4gIGhlYWRlcnM/OiB7W2hlYWRlck5hbWU6IHN0cmluZ106IHN0cmluZ307XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIHNldCB1cCBydWxlcyBkZXRlcm1pbmluZyB3aGF0XG4gKiBzdGF0dXMgY29kZXMgYW5kL29yIGhlYWRlcnMgbmVlZCB0byBiZSBwcmVzZW50IGluIG9yZGVyIGZvciBhXG4gKiBbYFJlc3BvbnNlYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Jlc3BvbnNlKVxuICogdG8gYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlXG4gKi9cbmNsYXNzIENhY2hlYWJsZVJlc3BvbnNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfc3RhdHVzZXM/OiBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnNbJ3N0YXR1c2VzJ107XG4gIHByaXZhdGUgcmVhZG9ubHkgX2hlYWRlcnM/OiBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnNbJ2hlYWRlcnMnXTtcblxuICAvKipcbiAgICogVG8gY29uc3RydWN0IGEgbmV3IENhY2hlYWJsZVJlc3BvbnNlIGluc3RhbmNlIHlvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3RcbiAgICogb25lIG9mIHRoZSBgY29uZmlnYCBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBJZiBib3RoIGBzdGF0dXNlc2AgYW5kIGBoZWFkZXJzYCBhcmUgc3BlY2lmaWVkLCB0aGVuIGJvdGggY29uZGl0aW9ucyBtdXN0XG4gICAqIGJlIG1ldCBmb3IgdGhlIGBSZXNwb25zZWAgdG8gYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbY29uZmlnLnN0YXR1c2VzXSBPbmUgb3IgbW9yZSBzdGF0dXMgY29kZXMgdGhhdCBhXG4gICAqIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsc3RyaW5nPn0gW2NvbmZpZy5oZWFkZXJzXSBBIG1hcHBpbmcgb2YgaGVhZGVyIG5hbWVzXG4gICAqIGFuZCBleHBlY3RlZCB2YWx1ZXMgdGhhdCBhIGBSZXNwb25zZWAgY2FuIGhhdmUgYW5kIGJlIGNvbnNpZGVyZWQgY2FjaGVhYmxlLlxuICAgKiBJZiBtdWx0aXBsZSBoZWFkZXJzIGFyZSBwcm92aWRlZCwgb25seSBvbmUgbmVlZHMgdG8gYmUgcHJlc2VudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ2FjaGVhYmxlUmVzcG9uc2VPcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoY29uZmlnLnN0YXR1c2VzIHx8IGNvbmZpZy5oZWFkZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdzdGF0dXNlcy1vci1oZWFkZXJzLXJlcXVpcmVkJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVhYmxlUmVzcG9uc2UnLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zdGF0dXNlcykge1xuICAgICAgICBhc3NlcnQhLmlzQXJyYXkoY29uZmlnLnN0YXR1c2VzLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtY2FjaGVhYmxlLXJlc3BvbnNlJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZWFibGVSZXNwb25zZScsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLnN0YXR1c2VzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuaGVhZGVycykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZShjb25maWcuaGVhZGVycywgJ29iamVjdCcsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UnLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcuaGVhZGVycycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXR1c2VzID0gY29uZmlnLnN0YXR1c2VzO1xuICAgIHRoaXMuX2hlYWRlcnMgPSBjb25maWcuaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgYSByZXNwb25zZSB0byBzZWUgd2hldGhlciBpdCdzIGNhY2hlYWJsZSBvciBub3QsIGJhc2VkIG9uIHRoaXNcbiAgICogb2JqZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIHdob3NlIGNhY2hlYWJpbGl0eSBpcyBiZWluZ1xuICAgKiBjaGVja2VkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIGBSZXNwb25zZWAgaXMgY2FjaGVhYmxlLCBhbmQgYGZhbHNlYFxuICAgKiBvdGhlcndpc2UuXG4gICAqL1xuICBpc1Jlc3BvbnNlQ2FjaGVhYmxlKHJlc3BvbnNlOiBSZXNwb25zZSk6IGJvb2xlYW4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVzcG9uc2UsIFJlc3BvbnNlLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNhY2hlYWJsZS1yZXNwb25zZScsXG4gICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlYWJsZVJlc3BvbnNlJyxcbiAgICAgICAgZnVuY05hbWU6ICdpc1Jlc3BvbnNlQ2FjaGVhYmxlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVzcG9uc2UnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGNhY2hlYWJsZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5fc3RhdHVzZXMpIHtcbiAgICAgIGNhY2hlYWJsZSA9IHRoaXMuX3N0YXR1c2VzLmluY2x1ZGVzKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hlYWRlcnMgJiYgY2FjaGVhYmxlKSB7XG4gICAgICBjYWNoZWFibGUgPSBPYmplY3Qua2V5cyh0aGlzLl9oZWFkZXJzKS5zb21lKChoZWFkZXJOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5oZWFkZXJzLmdldChoZWFkZXJOYW1lKSA9PT0gdGhpcy5faGVhZGVycyFbaGVhZGVyTmFtZV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFjYWNoZWFibGUpIHtcbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgIGBUaGUgcmVxdWVzdCBmb3IgYCArXG4gICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVzcG9uc2UudXJsKX0nIHJldHVybmVkIGEgcmVzcG9uc2UgdGhhdCBkb2VzIGAgK1xuICAgICAgICAgICAgYG5vdCBtZWV0IHRoZSBjcml0ZXJpYSBmb3IgYmVpbmcgY2FjaGVkLmAsXG4gICAgICAgICk7XG5cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IGNhY2hlYWJpbGl0eSBjcml0ZXJpYSBoZXJlLmApO1xuICAgICAgICBsb2dnZXIubG9nKGBDYWNoZWFibGUgc3RhdHVzZXM6IGAgKyBKU09OLnN0cmluZ2lmeSh0aGlzLl9zdGF0dXNlcykpO1xuICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgIGBDYWNoZWFibGUgaGVhZGVyczogYCArIEpTT04uc3RyaW5naWZ5KHRoaXMuX2hlYWRlcnMsIG51bGwsIDIpLFxuICAgICAgICApO1xuICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcblxuICAgICAgICBjb25zdCBsb2dGcmllbmRseUhlYWRlcnM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgIGxvZ0ZyaWVuZGx5SGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyByZXNwb25zZSBzdGF0dXMgYW5kIGhlYWRlcnMgaGVyZS5gKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhgUmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgICBgUmVzcG9uc2UgaGVhZGVyczogYCArIEpTT04uc3RyaW5naWZ5KGxvZ0ZyaWVuZGx5SGVhZGVycywgbnVsbCwgMiksXG4gICAgICAgICk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuXG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyBmdWxsIHJlc3BvbnNlIGRldGFpbHMgaGVyZS5gKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuXG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZWFibGU7XG4gIH1cbn1cblxuZXhwb3J0IHtDYWNoZWFibGVSZXNwb25zZX07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1dvcmtib3hQbHVnaW59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5pbXBvcnQge1xuICBDYWNoZWFibGVSZXNwb25zZSxcbiAgQ2FjaGVhYmxlUmVzcG9uc2VPcHRpb25zLFxufSBmcm9tICcuL0NhY2hlYWJsZVJlc3BvbnNlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQSBjbGFzcyBpbXBsZW1lbnRpbmcgdGhlIGBjYWNoZVdpbGxVcGRhdGVgIGxpZmVjeWNsZSBjYWxsYmFjay4gVGhpcyBtYWtlcyBpdFxuICogZWFzaWVyIHRvIGFkZCBpbiBjYWNoZWFiaWxpdHkgY2hlY2tzIHRvIHJlcXVlc3RzIG1hZGUgdmlhIFdvcmtib3gncyBidWlsdC1pblxuICogc3RyYXRlZ2llcy5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2VcbiAqL1xuY2xhc3MgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gaW1wbGVtZW50cyBXb3JrYm94UGx1Z2luIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfY2FjaGVhYmxlUmVzcG9uc2U6IENhY2hlYWJsZVJlc3BvbnNlO1xuXG4gIC8qKlxuICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVhYmxlUmVzcG9uc2VQbHVnaW4gaW5zdGFuY2UgeW91IG11c3QgcHJvdmlkZSBhdFxuICAgKiBsZWFzdCBvbmUgb2YgdGhlIGBjb25maWdgIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIElmIGJvdGggYHN0YXR1c2VzYCBhbmQgYGhlYWRlcnNgIGFyZSBzcGVjaWZpZWQsIHRoZW4gYm90aCBjb25kaXRpb25zIG11c3RcbiAgICogYmUgbWV0IGZvciB0aGUgYFJlc3BvbnNlYCB0byBiZSBjb25zaWRlcmVkIGNhY2hlYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtjb25maWcuc3RhdHVzZXNdIE9uZSBvciBtb3JlIHN0YXR1cyBjb2RlcyB0aGF0IGFcbiAgICogYFJlc3BvbnNlYCBjYW4gaGF2ZSBhbmQgYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZyxzdHJpbmc+fSBbY29uZmlnLmhlYWRlcnNdIEEgbWFwcGluZyBvZiBoZWFkZXIgbmFtZXNcbiAgICogYW5kIGV4cGVjdGVkIHZhbHVlcyB0aGF0IGEgYFJlc3BvbnNlYCBjYW4gaGF2ZSBhbmQgYmUgY29uc2lkZXJlZCBjYWNoZWFibGUuXG4gICAqIElmIG11bHRpcGxlIGhlYWRlcnMgYXJlIHByb3ZpZGVkLCBvbmx5IG9uZSBuZWVkcyB0byBiZSBwcmVzZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBDYWNoZWFibGVSZXNwb25zZU9wdGlvbnMpIHtcbiAgICB0aGlzLl9jYWNoZWFibGVSZXNwb25zZSA9IG5ldyBDYWNoZWFibGVSZXNwb25zZShjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICogQHJldHVybiB7UmVzcG9uc2V8bnVsbH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNhY2hlV2lsbFVwZGF0ZTogV29ya2JveFBsdWdpblsnY2FjaGVXaWxsVXBkYXRlJ10gPSBhc3luYyAoe3Jlc3BvbnNlfSkgPT4ge1xuICAgIGlmICh0aGlzLl9jYWNoZWFibGVSZXNwb25zZS5pc1Jlc3BvbnNlQ2FjaGVhYmxlKHJlc3BvbnNlKSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IHtDYWNoZWFibGVSZXNwb25zZVBsdWdpbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdGhhdCBwcmV2ZW50cyBhIHByb21pc2UgZnJvbSBiZWluZyBmbGFnZ2VkIGFzIHVudXNlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICoqL1xuZXhwb3J0IGZ1bmN0aW9uIGRvbnRXYWl0Rm9yKHByb21pc2U6IFByb21pc2U8YW55Pik6IHZvaWQge1xuICAvLyBFZmZlY3RpdmUgbm8tb3AuXG4gIHZvaWQgcHJvbWlzZS50aGVuKCgpID0+IHt9KTtcbn1cbiIsICJleHBvcnQgdHlwZSBDb25zdHJ1Y3RvciA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IGFueTtcbmV4cG9ydCB0eXBlIEZ1bmMgPSAoLi4uYXJnczogYW55W10pID0+IGFueTtcblxuZXhwb3J0IGNvbnN0IGluc3RhbmNlT2ZBbnkgPSAoXG4gIG9iamVjdDogYW55LFxuICBjb25zdHJ1Y3RvcnM6IENvbnN0cnVjdG9yW10sXG4pOiBib29sZWFuID0+IGNvbnN0cnVjdG9ycy5zb21lKChjKSA9PiBvYmplY3QgaW5zdGFuY2VvZiBjKTtcbiIsICJpbXBvcnQge1xuICBJREJQQ3Vyc29yLFxuICBJREJQQ3Vyc29yV2l0aFZhbHVlLFxuICBJREJQRGF0YWJhc2UsXG4gIElEQlBJbmRleCxcbiAgSURCUE9iamVjdFN0b3JlLFxuICBJREJQVHJhbnNhY3Rpb24sXG59IGZyb20gJy4vZW50cnkuanMnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IsIEZ1bmMsIGluc3RhbmNlT2ZBbnkgfSBmcm9tICcuL3V0aWwuanMnO1xuXG5sZXQgaWRiUHJveHlhYmxlVHlwZXM6IENvbnN0cnVjdG9yW107XG5sZXQgY3Vyc29yQWR2YW5jZU1ldGhvZHM6IEZ1bmNbXTtcblxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRJZGJQcm94eWFibGVUeXBlcygpOiBDb25zdHJ1Y3RvcltdIHtcbiAgcmV0dXJuIChcbiAgICBpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgIChpZGJQcm94eWFibGVUeXBlcyA9IFtcbiAgICAgIElEQkRhdGFiYXNlLFxuICAgICAgSURCT2JqZWN0U3RvcmUsXG4gICAgICBJREJJbmRleCxcbiAgICAgIElEQkN1cnNvcixcbiAgICAgIElEQlRyYW5zYWN0aW9uLFxuICAgIF0pXG4gICk7XG59XG5cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKTogRnVuY1tdIHtcbiAgcmV0dXJuIChcbiAgICBjdXJzb3JBZHZhbmNlTWV0aG9kcyB8fFxuICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICBdKVxuICApO1xufVxuXG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXA6IFdlYWtNYXA8XG4gIElEQlRyYW5zYWN0aW9uLFxuICBQcm9taXNlPHZvaWQ+XG4+ID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmV4cG9ydCBjb25zdCByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0PFQ+KHJlcXVlc3Q6IElEQlJlcXVlc3Q8VD4pOiBQcm9taXNlPFQ+IHtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9O1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHdyYXAocmVxdWVzdC5yZXN1bHQgYXMgYW55KSBhcyBhbnkpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICAgIGNvbnN0IGVycm9yID0gKCkgPT4ge1xuICAgICAgcmVqZWN0KHJlcXVlc3QuZXJyb3IpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gIH0pO1xuXG4gIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgLy8gaXMgYmVjYXVzZSB3ZSBjcmVhdGUgbWFueSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QuXG4gIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odHg6IElEQlRyYW5zYWN0aW9uKTogdm9pZCB7XG4gIC8vIEVhcmx5IGJhaWwgaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIGEgZG9uZSBwcm9taXNlIGZvciB0aGlzIHRyYW5zYWN0aW9uLlxuICBpZiAodHJhbnNhY3Rpb25Eb25lTWFwLmhhcyh0eCkpIHJldHVybjtcblxuICBjb25zdCBkb25lID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgIH07XG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICB9KTtcblxuICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICB0cmFuc2FjdGlvbkRvbmVNYXAuc2V0KHR4LCBkb25lKTtcbn1cblxubGV0IGlkYlByb3h5VHJhcHM6IFByb3h5SGFuZGxlcjxhbnk+ID0ge1xuICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbikge1xuICAgICAgLy8gU3BlY2lhbCBoYW5kbGluZyBmb3IgdHJhbnNhY3Rpb24uZG9uZS5cbiAgICAgIGlmIChwcm9wID09PSAnZG9uZScpIHJldHVybiB0cmFuc2FjdGlvbkRvbmVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgIHJldHVybiByZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzFdXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHJlY2VpdmVyLm9iamVjdFN0b3JlKHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICByZXR1cm4gd3JhcCh0YXJnZXRbcHJvcF0pO1xuICB9LFxuICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKFxuICAgICAgdGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24gJiZcbiAgICAgIChwcm9wID09PSAnZG9uZScgfHwgcHJvcCA9PT0gJ3N0b3JlJylcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVRyYXBzKFxuICBjYWxsYmFjazogKGN1cnJlbnRUcmFwczogUHJveHlIYW5kbGVyPGFueT4pID0+IFByb3h5SGFuZGxlcjxhbnk+LFxuKTogdm9pZCB7XG4gIGlkYlByb3h5VHJhcHMgPSBjYWxsYmFjayhpZGJQcm94eVRyYXBzKTtcbn1cblxuZnVuY3Rpb24gd3JhcEZ1bmN0aW9uPFQgZXh0ZW5kcyBGdW5jPihmdW5jOiBUKTogRnVuY3Rpb24ge1xuICAvLyBEdWUgdG8gZXhwZWN0ZWQgb2JqZWN0IGVxdWFsaXR5ICh3aGljaCBpcyBlbmZvcmNlZCBieSB0aGUgY2FjaGluZyBpbiBgd3JhcGApLCB3ZVxuICAvLyBvbmx5IGNyZWF0ZSBvbmUgbmV3IGZ1bmMgcGVyIGZ1bmMuXG5cbiAgLy8gQ3Vyc29yIG1ldGhvZHMgYXJlIHNwZWNpYWwsIGFzIHRoZSBiZWhhdmlvdXIgaXMgYSBsaXR0bGUgbW9yZSBkaWZmZXJlbnQgdG8gc3RhbmRhcmQgSURCLiBJblxuICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAvLyBjdXJzb3IuIEl0J3Mga2luZGEgbGlrZSBhIHByb21pc2UgdGhhdCBjYW4gcmVzb2x2ZSB3aXRoIG1hbnkgdmFsdWVzLiBUaGF0IGRvZXNuJ3QgbWFrZSBzZW5zZVxuICAvLyB3aXRoIHJlYWwgcHJvbWlzZXMsIHNvIGVhY2ggYWR2YW5jZSBtZXRob2RzIHJldHVybnMgYSBuZXcgcHJvbWlzZSBmb3IgdGhlIGN1cnNvciBvYmplY3QsIG9yXG4gIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgaWYgKGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkuaW5jbHVkZXMoZnVuYykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXM6IElEQlBDdXJzb3IsIC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pIHtcbiAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICByZXR1cm4gd3JhcCh0aGlzLnJlcXVlc3QpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHRoaXM6IGFueSwgLi4uYXJnczogUGFyYW1ldGVyczxUPikge1xuICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAvLyB0aGUgb3JpZ2luYWwgb2JqZWN0LlxuICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWU6IGFueSk6IGFueSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHJldHVybiB3cmFwRnVuY3Rpb24odmFsdWUpO1xuXG4gIC8vIFRoaXMgZG9lc24ndCByZXR1cm4sIGl0IGp1c3QgY3JlYXRlcyBhICdkb25lJyBwcm9taXNlIGZvciB0aGUgdHJhbnNhY3Rpb24sXG4gIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odmFsdWUpO1xuXG4gIGlmIChpbnN0YW5jZU9mQW55KHZhbHVlLCBnZXRJZGJQcm94eWFibGVUeXBlcygpKSlcbiAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcblxuICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogRW5oYW5jZSBhbiBJREIgb2JqZWN0IHdpdGggaGVscGVycy5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHRoaW5nIHRvIGVuaGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHZhbHVlOiBJREJEYXRhYmFzZSk6IElEQlBEYXRhYmFzZTtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHZhbHVlOiBJREJJbmRleCk6IElEQlBJbmRleDtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHZhbHVlOiBJREJPYmplY3RTdG9yZSk6IElEQlBPYmplY3RTdG9yZTtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHZhbHVlOiBJREJUcmFuc2FjdGlvbik6IElEQlBUcmFuc2FjdGlvbjtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKFxuICB2YWx1ZTogSURCT3BlbkRCUmVxdWVzdCxcbik6IFByb21pc2U8SURCUERhdGFiYXNlIHwgdW5kZWZpbmVkPjtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwPFQ+KHZhbHVlOiBJREJSZXF1ZXN0PFQ+KTogUHJvbWlzZTxUPjtcbmV4cG9ydCBmdW5jdGlvbiB3cmFwKHZhbHVlOiBhbnkpOiBhbnkge1xuICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgLy8gSURCIGlzIHdlaXJkIGFuZCBhIHNpbmdsZSBJREJSZXF1ZXN0IGNhbiB5aWVsZCBtYW55IHJlc3BvbnNlcywgc28gdGhlc2UgY2FuJ3QgYmUgY2FjaGVkLlxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJSZXF1ZXN0KSByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdCh2YWx1ZSk7XG5cbiAgLy8gSWYgd2UndmUgYWxyZWFkeSB0cmFuc2Zvcm1lZCB0aGlzIHZhbHVlIGJlZm9yZSwgcmV1c2UgdGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSkgcmV0dXJuIHRyYW5zZm9ybUNhY2hlLmdldCh2YWx1ZSk7XG4gIGNvbnN0IG5ld1ZhbHVlID0gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSk7XG5cbiAgLy8gTm90IGFsbCB0eXBlcyBhcmUgdHJhbnNmb3JtZWQuXG4gIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICBpZiAobmV3VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChuZXdWYWx1ZSwgdmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuXG4vKipcbiAqIFJldmVydCBhbiBlbmhhbmNlZCBJREIgb2JqZWN0IHRvIGEgcGxhaW4gb2xkIG1pc2VyYWJsZSBJREIgb25lLlxuICpcbiAqIFdpbGwgYWxzbyByZXZlcnQgYSBwcm9taXNlIGJhY2sgdG8gYW4gSURCUmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIGVuaGFuY2VkIG9iamVjdCB0byByZXZlcnQuXG4gKi9cbmludGVyZmFjZSBVbndyYXAge1xuICAodmFsdWU6IElEQlBDdXJzb3JXaXRoVmFsdWU8YW55LCBhbnksIGFueSwgYW55LCBhbnk+KTogSURCQ3Vyc29yV2l0aFZhbHVlO1xuICAodmFsdWU6IElEQlBDdXJzb3I8YW55LCBhbnksIGFueSwgYW55LCBhbnk+KTogSURCQ3Vyc29yO1xuICAodmFsdWU6IElEQlBEYXRhYmFzZSk6IElEQkRhdGFiYXNlO1xuICAodmFsdWU6IElEQlBJbmRleDxhbnksIGFueSwgYW55LCBhbnksIGFueT4pOiBJREJJbmRleDtcbiAgKHZhbHVlOiBJREJQT2JqZWN0U3RvcmU8YW55LCBhbnksIGFueSwgYW55Pik6IElEQk9iamVjdFN0b3JlO1xuICAodmFsdWU6IElEQlBUcmFuc2FjdGlvbjxhbnksIGFueSwgYW55Pik6IElEQlRyYW5zYWN0aW9uO1xuICA8VCBleHRlbmRzIGFueT4odmFsdWU6IFByb21pc2U8SURCUERhdGFiYXNlPFQ+Pik6IElEQk9wZW5EQlJlcXVlc3Q7XG4gICh2YWx1ZTogUHJvbWlzZTxJREJQRGF0YWJhc2U+KTogSURCT3BlbkRCUmVxdWVzdDtcbiAgPFQ+KHZhbHVlOiBQcm9taXNlPFQ+KTogSURCUmVxdWVzdDxUPjtcbn1cbmV4cG9ydCBjb25zdCB1bndyYXA6IFVud3JhcCA9ICh2YWx1ZTogYW55KTogYW55ID0+XG4gIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuIiwgImltcG9ydCB7IHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuZXhwb3J0IGludGVyZmFjZSBPcGVuREJDYWxsYmFja3M8REJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bj4ge1xuICAvKipcbiAgICogQ2FsbGVkIGlmIHRoaXMgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UgaGFzIG5ldmVyIGJlZW4gb3BlbmVkIGJlZm9yZS4gVXNlIGl0IHRvIHNwZWNpZnkgdGhlXG4gICAqIHNjaGVtYSBmb3IgdGhlIGRhdGFiYXNlLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YWJhc2UgQSBkYXRhYmFzZSBpbnN0YW5jZSB0aGF0IHlvdSBjYW4gdXNlIHRvIGFkZC9yZW1vdmUgc3RvcmVzIGFuZCBpbmRleGVzLlxuICAgKiBAcGFyYW0gb2xkVmVyc2lvbiBMYXN0IHZlcnNpb24gb2YgdGhlIGRhdGFiYXNlIG9wZW5lZCBieSB0aGUgdXNlci5cbiAgICogQHBhcmFtIG5ld1ZlcnNpb24gV2hhdGV2ZXIgbmV3IHZlcnNpb24geW91IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gdHJhbnNhY3Rpb24gVGhlIHRyYW5zYWN0aW9uIGZvciB0aGlzIHVwZ3JhZGUuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSBuZWVkIHRvIGdldCBkYXRhIGZyb20gb3RoZXIgc3RvcmVzIGFzIHBhcnQgb2YgYSBtaWdyYXRpb24uXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IGZvciB0aGUgYXNzb2NpYXRlZCAndXBncmFkZW5lZWRlZCcgZXZlbnQuXG4gICAqL1xuICB1cGdyYWRlPyhcbiAgICBkYXRhYmFzZTogSURCUERhdGFiYXNlPERCVHlwZXM+LFxuICAgIG9sZFZlcnNpb246IG51bWJlcixcbiAgICBuZXdWZXJzaW9uOiBudW1iZXIgfCBudWxsLFxuICAgIHRyYW5zYWN0aW9uOiBJREJQVHJhbnNhY3Rpb248XG4gICAgICBEQlR5cGVzLFxuICAgICAgU3RvcmVOYW1lczxEQlR5cGVzPltdLFxuICAgICAgJ3ZlcnNpb25jaGFuZ2UnXG4gICAgPixcbiAgICBldmVudDogSURCVmVyc2lvbkNoYW5nZUV2ZW50LFxuICApOiB2b2lkO1xuICAvKipcbiAgICogQ2FsbGVkIGlmIHRoZXJlIGFyZSBvbGRlciB2ZXJzaW9ucyBvZiB0aGUgZGF0YWJhc2Ugb3BlbiBvbiB0aGUgb3JpZ2luLCBzbyB0aGlzIHZlcnNpb24gY2Fubm90XG4gICAqIG9wZW4uXG4gICAqXG4gICAqIEBwYXJhbSBjdXJyZW50VmVyc2lvbiBWZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSB0aGF0J3MgYmxvY2tpbmcgdGhpcyBvbmUuXG4gICAqIEBwYXJhbSBibG9ja2VkVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UgYmVpbmcgYmxvY2tlZCAod2hhdGV2ZXIgdmVyc2lvbiB5b3UgcHJvdmlkZWQgdG8gYG9wZW5EQmApLlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IG9iamVjdCBmb3IgdGhlIGFzc29jaWF0ZWQgYGJsb2NrZWRgIGV2ZW50LlxuICAgKi9cbiAgYmxvY2tlZD8oXG4gICAgY3VycmVudFZlcnNpb246IG51bWJlcixcbiAgICBibG9ja2VkVmVyc2lvbjogbnVtYmVyIHwgbnVsbCxcbiAgICBldmVudDogSURCVmVyc2lvbkNoYW5nZUV2ZW50LFxuICApOiB2b2lkO1xuICAvKipcbiAgICogQ2FsbGVkIGlmIHRoaXMgY29ubmVjdGlvbiBpcyBibG9ja2luZyBhIGZ1dHVyZSB2ZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSBmcm9tIG9wZW5pbmcuXG4gICAqXG4gICAqIEBwYXJhbSBjdXJyZW50VmVyc2lvbiBWZXJzaW9uIG9mIHRoZSBvcGVuIGRhdGFiYXNlICh3aGF0ZXZlciB2ZXJzaW9uIHlvdSBwcm92aWRlZCB0byBgb3BlbkRCYCkuXG4gICAqIEBwYXJhbSBibG9ja2VkVmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgZGF0YWJhc2UgdGhhdCdzIGJlaW5nIGJsb2NrZWQuXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IGZvciB0aGUgYXNzb2NpYXRlZCBgdmVyc2lvbmNoYW5nZWAgZXZlbnQuXG4gICAqL1xuICBibG9ja2luZz8oXG4gICAgY3VycmVudFZlcnNpb246IG51bWJlcixcbiAgICBibG9ja2VkVmVyc2lvbjogbnVtYmVyIHwgbnVsbCxcbiAgICBldmVudDogSURCVmVyc2lvbkNoYW5nZUV2ZW50LFxuICApOiB2b2lkO1xuICAvKipcbiAgICogQ2FsbGVkIGlmIHRoZSBicm93c2VyIGFibm9ybWFsbHkgdGVybWluYXRlcyB0aGUgY29ubmVjdGlvbi5cbiAgICogVGhpcyBpcyBub3QgY2FsbGVkIHdoZW4gYGRiLmNsb3NlKClgIGlzIGNhbGxlZC5cbiAgICovXG4gIHRlcm1pbmF0ZWQ/KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogT3BlbiBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICogQHBhcmFtIHZlcnNpb24gU2NoZW1hIHZlcnNpb24uXG4gKiBAcGFyYW0gY2FsbGJhY2tzIEFkZGl0aW9uYWwgY2FsbGJhY2tzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3BlbkRCPERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duPihcbiAgbmFtZTogc3RyaW5nLFxuICB2ZXJzaW9uPzogbnVtYmVyLFxuICB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH06IE9wZW5EQkNhbGxiYWNrczxEQlR5cGVzPiA9IHt9LFxuKTogUHJvbWlzZTxJREJQRGF0YWJhc2U8REJUeXBlcz4+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKG5hbWUsIHZlcnNpb24pO1xuICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCkgYXMgUHJvbWlzZTxJREJQRGF0YWJhc2U8REJUeXBlcz4+O1xuXG4gIGlmICh1cGdyYWRlKSB7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICB1cGdyYWRlKFxuICAgICAgICB3cmFwKHJlcXVlc3QucmVzdWx0KSBhcyBJREJQRGF0YWJhc2U8REJUeXBlcz4sXG4gICAgICAgIGV2ZW50Lm9sZFZlcnNpb24sXG4gICAgICAgIGV2ZW50Lm5ld1ZlcnNpb24sXG4gICAgICAgIHdyYXAocmVxdWVzdC50cmFuc2FjdGlvbiEpIGFzIHVua25vd24gYXMgSURCUFRyYW5zYWN0aW9uPFxuICAgICAgICAgIERCVHlwZXMsXG4gICAgICAgICAgU3RvcmVOYW1lczxEQlR5cGVzPltdLFxuICAgICAgICAgICd2ZXJzaW9uY2hhbmdlJ1xuICAgICAgICA+LFxuICAgICAgICBldmVudCxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoYmxvY2tlZCkge1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsIChldmVudCkgPT5cbiAgICAgIGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgKGV2ZW50IGFzIElEQlZlcnNpb25DaGFuZ2VFdmVudCkub2xkVmVyc2lvbixcbiAgICAgICAgKGV2ZW50IGFzIElEQlZlcnNpb25DaGFuZ2VFdmVudCkubmV3VmVyc2lvbixcbiAgICAgICAgZXZlbnQgYXMgSURCVmVyc2lvbkNoYW5nZUV2ZW50LFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgb3BlblByb21pc2VcbiAgICAudGhlbigoZGIpID0+IHtcbiAgICAgIGlmICh0ZXJtaW5hdGVkKSBkYi5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHRlcm1pbmF0ZWQoKSk7XG4gICAgICBpZiAoYmxvY2tpbmcpIHtcbiAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcigndmVyc2lvbmNoYW5nZScsIChldmVudCkgPT5cbiAgICAgICAgICBibG9ja2luZyhldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCBldmVudCksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge30pO1xuXG4gIHJldHVybiBvcGVuUHJvbWlzZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxldGVEQkNhbGxiYWNrcyB7XG4gIC8qKlxuICAgKiBDYWxsZWQgaWYgdGhlcmUgYXJlIGNvbm5lY3Rpb25zIHRvIHRoaXMgZGF0YWJhc2Ugb3Blbiwgc28gaXQgY2Fubm90IGJlIGRlbGV0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBjdXJyZW50VmVyc2lvbiBWZXJzaW9uIG9mIHRoZSBkYXRhYmFzZSB0aGF0J3MgYmxvY2tpbmcgdGhlIGRlbGV0ZSBvcGVyYXRpb24uXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgb2JqZWN0IGZvciB0aGUgYXNzb2NpYXRlZCBgYmxvY2tlZGAgZXZlbnQuXG4gICAqL1xuICBibG9ja2VkPyhjdXJyZW50VmVyc2lvbjogbnVtYmVyLCBldmVudDogSURCVmVyc2lvbkNoYW5nZUV2ZW50KTogdm9pZDtcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZURCKFxuICBuYW1lOiBzdHJpbmcsXG4gIHsgYmxvY2tlZCB9OiBEZWxldGVEQkNhbGxiYWNrcyA9IHt9LFxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG5cbiAgaWYgKGJsb2NrZWQpIHtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+XG4gICAgICBibG9ja2VkKFxuICAgICAgICAvLyBDYXN0aW5nIGR1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQtRE9NLWxpYi1nZW5lcmF0b3IvcHVsbC8xNDA1XG4gICAgICAgIChldmVudCBhcyBJREJWZXJzaW9uQ2hhbmdlRXZlbnQpLm9sZFZlcnNpb24sXG4gICAgICAgIGV2ZW50IGFzIElEQlZlcnNpb25DaGFuZ2VFdmVudCxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB3cmFwKHJlcXVlc3QpLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuZXhwb3J0IHsgdW53cmFwLCB3cmFwIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5cbi8vID09PSBUaGUgcmVzdCBvZiB0aGlzIGZpbGUgaXMgdHlwZSBkZWZzID09PVxudHlwZSBLZXlUb0tleU5vSW5kZXg8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdOiBzdHJpbmcgZXh0ZW5kcyBLID8gbmV2ZXIgOiBudW1iZXIgZXh0ZW5kcyBLID8gbmV2ZXIgOiBLO1xufTtcbnR5cGUgVmFsdWVzT2Y8VD4gPSBUIGV4dGVuZHMgeyBbSyBpbiBrZXlvZiBUXTogaW5mZXIgVSB9ID8gVSA6IG5ldmVyO1xudHlwZSBLbm93bktleXM8VD4gPSBWYWx1ZXNPZjxLZXlUb0tleU5vSW5kZXg8VD4+O1xuXG50eXBlIE9taXQ8VCwgSz4gPSBQaWNrPFQsIEV4Y2x1ZGU8a2V5b2YgVCwgSz4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIERCU2NoZW1hIHtcbiAgW3M6IHN0cmluZ106IERCU2NoZW1hVmFsdWU7XG59XG5cbmludGVyZmFjZSBJbmRleEtleXMge1xuICBbczogc3RyaW5nXTogSURCVmFsaWRLZXk7XG59XG5cbmludGVyZmFjZSBEQlNjaGVtYVZhbHVlIHtcbiAga2V5OiBJREJWYWxpZEtleTtcbiAgdmFsdWU6IGFueTtcbiAgaW5kZXhlcz86IEluZGV4S2V5cztcbn1cblxuLyoqXG4gKiBFeHRyYWN0IGtub3duIG9iamVjdCBzdG9yZSBuYW1lcyBmcm9tIHRoZSBEQiBzY2hlbWEgdHlwZS5cbiAqXG4gKiBAdGVtcGxhdGUgREJUeXBlcyBEQiBzY2hlbWEgdHlwZSwgb3IgdW5rbm93biBpZiB0aGUgREIgaXNuJ3QgdHlwZWQuXG4gKi9cbmV4cG9ydCB0eXBlIFN0b3JlTmFtZXM8REJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bj4gPVxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgPyBLbm93bktleXM8REJUeXBlcz4gOiBzdHJpbmc7XG5cbi8qKlxuICogRXh0cmFjdCBkYXRhYmFzZSB2YWx1ZSB0eXBlcyBmcm9tIHRoZSBEQiBzY2hlbWEgdHlwZS5cbiAqXG4gKiBAdGVtcGxhdGUgREJUeXBlcyBEQiBzY2hlbWEgdHlwZSwgb3IgdW5rbm93biBpZiB0aGUgREIgaXNuJ3QgdHlwZWQuXG4gKiBAdGVtcGxhdGUgU3RvcmVOYW1lIE5hbWVzIG9mIHRoZSBvYmplY3Qgc3RvcmVzIHRvIGdldCB0aGUgdHlwZXMgb2YuXG4gKi9cbmV4cG9ydCB0eXBlIFN0b3JlVmFsdWU8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4+ID0gREJUeXBlcyBleHRlbmRzIERCU2NoZW1hID8gREJUeXBlc1tTdG9yZU5hbWVdWyd2YWx1ZSddIDogYW55O1xuXG4vKipcbiAqIEV4dHJhY3QgZGF0YWJhc2Uga2V5IHR5cGVzIGZyb20gdGhlIERCIHNjaGVtYSB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBEQlR5cGVzIERCIHNjaGVtYSB0eXBlLCBvciB1bmtub3duIGlmIHRoZSBEQiBpc24ndCB0eXBlZC5cbiAqIEB0ZW1wbGF0ZSBTdG9yZU5hbWUgTmFtZXMgb2YgdGhlIG9iamVjdCBzdG9yZXMgdG8gZ2V0IHRoZSB0eXBlcyBvZi5cbiAqL1xuZXhwb3J0IHR5cGUgU3RvcmVLZXk8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4+ID0gREJUeXBlcyBleHRlbmRzIERCU2NoZW1hID8gREJUeXBlc1tTdG9yZU5hbWVdWydrZXknXSA6IElEQlZhbGlkS2V5O1xuXG4vKipcbiAqIEV4dHJhY3QgdGhlIG5hbWVzIG9mIGluZGV4ZXMgaW4gY2VydGFpbiBvYmplY3Qgc3RvcmVzIGZyb20gdGhlIERCIHNjaGVtYSB0eXBlLlxuICpcbiAqIEB0ZW1wbGF0ZSBEQlR5cGVzIERCIHNjaGVtYSB0eXBlLCBvciB1bmtub3duIGlmIHRoZSBEQiBpc24ndCB0eXBlZC5cbiAqIEB0ZW1wbGF0ZSBTdG9yZU5hbWUgTmFtZXMgb2YgdGhlIG9iamVjdCBzdG9yZXMgdG8gZ2V0IHRoZSB0eXBlcyBvZi5cbiAqL1xuZXhwb3J0IHR5cGUgSW5kZXhOYW1lczxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93bixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbj4gPSBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgPyBrZXlvZiBEQlR5cGVzW1N0b3JlTmFtZV1bJ2luZGV4ZXMnXSA6IHN0cmluZztcblxuLyoqXG4gKiBFeHRyYWN0IHRoZSB0eXBlcyBvZiBpbmRleGVzIGluIGNlcnRhaW4gb2JqZWN0IHN0b3JlcyBmcm9tIHRoZSBEQiBzY2hlbWEgdHlwZS5cbiAqXG4gKiBAdGVtcGxhdGUgREJUeXBlcyBEQiBzY2hlbWEgdHlwZSwgb3IgdW5rbm93biBpZiB0aGUgREIgaXNuJ3QgdHlwZWQuXG4gKiBAdGVtcGxhdGUgU3RvcmVOYW1lIE5hbWVzIG9mIHRoZSBvYmplY3Qgc3RvcmVzIHRvIGdldCB0aGUgdHlwZXMgb2YuXG4gKiBAdGVtcGxhdGUgSW5kZXhOYW1lIE5hbWVzIG9mIHRoZSBpbmRleGVzIHRvIGdldCB0aGUgdHlwZXMgb2YuXG4gKi9cbmV4cG9ydCB0eXBlIEluZGV4S2V5PFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duLFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4sXG4+ID0gREJUeXBlcyBleHRlbmRzIERCU2NoZW1hXG4gID8gSW5kZXhOYW1lIGV4dGVuZHMga2V5b2YgREJUeXBlc1tTdG9yZU5hbWVdWydpbmRleGVzJ11cbiAgICA/IERCVHlwZXNbU3RvcmVOYW1lXVsnaW5kZXhlcyddW0luZGV4TmFtZV1cbiAgICA6IElEQlZhbGlkS2V5XG4gIDogSURCVmFsaWRLZXk7XG5cbnR5cGUgQ3Vyc29yU291cmNlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+ID0gSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+XG4gID8gSURCUEluZGV4PERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT5cbiAgOiBJREJQT2JqZWN0U3RvcmU8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgTW9kZT47XG5cbnR5cGUgQ3Vyc29yS2V5PFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duLFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duLFxuPiA9IEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPlxuICA/IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPlxuICA6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT47XG5cbnR5cGUgSURCUERhdGFiYXNlRXh0ZW5kcyA9IE9taXQ8XG4gIElEQkRhdGFiYXNlLFxuICAnY3JlYXRlT2JqZWN0U3RvcmUnIHwgJ2RlbGV0ZU9iamVjdFN0b3JlJyB8ICd0cmFuc2FjdGlvbicgfCAnb2JqZWN0U3RvcmVOYW1lcydcbj47XG5cbi8qKlxuICogQSB2YXJpYXRpb24gb2YgRE9NU3RyaW5nTGlzdCB3aXRoIHByZWNpc2Ugc3RyaW5nIHR5cGVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHlwZWRET01TdHJpbmdMaXN0PFQgZXh0ZW5kcyBzdHJpbmc+IGV4dGVuZHMgRE9NU3RyaW5nTGlzdCB7XG4gIGNvbnRhaW5zKHN0cmluZzogVCk6IGJvb2xlYW47XG4gIGl0ZW0oaW5kZXg6IG51bWJlcik6IFQgfCBudWxsO1xuICBbaW5kZXg6IG51bWJlcl06IFQ7XG4gIFtTeW1ib2wuaXRlcmF0b3JdKCk6IEl0ZXJhYmxlSXRlcmF0b3I8VD47XG59XG5cbmludGVyZmFjZSBJREJUcmFuc2FjdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGR1cmFiaWxpdHkgb2YgdGhlIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBUaGUgZGVmYXVsdCBpcyBcImRlZmF1bHRcIi4gVXNpbmcgXCJyZWxheGVkXCIgcHJvdmlkZXMgYmV0dGVyIHBlcmZvcm1hbmNlLCBidXQgd2l0aCBmZXdlclxuICAgKiBndWFyYW50ZWVzLiBXZWIgYXBwbGljYXRpb25zIGFyZSBlbmNvdXJhZ2VkIHRvIHVzZSBcInJlbGF4ZWRcIiBmb3IgZXBoZW1lcmFsIGRhdGEgc3VjaCBhcyBjYWNoZXNcbiAgICogb3IgcXVpY2tseSBjaGFuZ2luZyByZWNvcmRzLCBhbmQgXCJzdHJpY3RcIiBpbiBjYXNlcyB3aGVyZSByZWR1Y2luZyB0aGUgcmlzayBvZiBkYXRhIGxvc3NcbiAgICogb3V0d2VpZ2hzIHRoZSBpbXBhY3QgdG8gcGVyZm9ybWFuY2UgYW5kIHBvd2VyLlxuICAgKi9cbiAgZHVyYWJpbGl0eT86ICdkZWZhdWx0JyB8ICdzdHJpY3QnIHwgJ3JlbGF4ZWQnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBEYXRhYmFzZTxEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bj5cbiAgZXh0ZW5kcyBJREJQRGF0YWJhc2VFeHRlbmRzIHtcbiAgLyoqXG4gICAqIFRoZSBuYW1lcyBvZiBzdG9yZXMgaW4gdGhlIGRhdGFiYXNlLlxuICAgKi9cbiAgcmVhZG9ubHkgb2JqZWN0U3RvcmVOYW1lczogVHlwZWRET01TdHJpbmdMaXN0PFN0b3JlTmFtZXM8REJUeXBlcz4+O1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3Qgc3RvcmUuXG4gICAqXG4gICAqIFRocm93cyBhIFwiSW52YWxpZFN0YXRlRXJyb3JcIiBET01FeGNlcHRpb24gaWYgbm90IGNhbGxlZCB3aXRoaW4gYW4gdXBncmFkZSB0cmFuc2FjdGlvbi5cbiAgICovXG4gIGNyZWF0ZU9iamVjdFN0b3JlPE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBuYW1lOiBOYW1lLFxuICAgIG9wdGlvbmFsUGFyYW1ldGVycz86IElEQk9iamVjdFN0b3JlUGFyYW1ldGVycyxcbiAgKTogSURCUE9iamVjdFN0b3JlPFxuICAgIERCVHlwZXMsXG4gICAgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+LFxuICAgIE5hbWUsXG4gICAgJ3ZlcnNpb25jaGFuZ2UnXG4gID47XG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSBvYmplY3Qgc3RvcmUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICpcbiAgICogVGhyb3dzIGEgXCJJbnZhbGlkU3RhdGVFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiBub3QgY2FsbGVkIHdpdGhpbiBhbiB1cGdyYWRlIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgZGVsZXRlT2JqZWN0U3RvcmUobmFtZTogU3RvcmVOYW1lczxEQlR5cGVzPik6IHZvaWQ7XG4gIC8qKlxuICAgKiBTdGFydCBhIG5ldyB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZXMgVGhlIG9iamVjdCBzdG9yZShzKSB0aGlzIHRyYW5zYWN0aW9uIG5lZWRzLlxuICAgKiBAcGFyYW0gbW9kZVxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgdHJhbnNhY3Rpb248XG4gICAgTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gICAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4gID4oXG4gICAgc3RvcmVOYW1lczogTmFtZSxcbiAgICBtb2RlPzogTW9kZSxcbiAgICBvcHRpb25zPzogSURCVHJhbnNhY3Rpb25PcHRpb25zLFxuICApOiBJREJQVHJhbnNhY3Rpb248REJUeXBlcywgW05hbWVdLCBNb2RlPjtcbiAgdHJhbnNhY3Rpb248XG4gICAgTmFtZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4sXG4gICAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4gID4oXG4gICAgc3RvcmVOYW1lczogTmFtZXMsXG4gICAgbW9kZT86IE1vZGUsXG4gICAgb3B0aW9ucz86IElEQlRyYW5zYWN0aW9uT3B0aW9ucyxcbiAgKTogSURCUFRyYW5zYWN0aW9uPERCVHlwZXMsIE5hbWVzLCBNb2RlPjtcblxuICAvLyBTaG9ydGN1dCBtZXRob2RzXG5cbiAgLyoqXG4gICAqIEFkZCBhIHZhbHVlIHRvIGEgc3RvcmUuXG4gICAqXG4gICAqIFJlamVjdHMgaWYgYW4gaXRlbSBvZiBhIGdpdmVuIGtleSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgc3RvcmUuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIGFkZDxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIE5hbWU+LFxuICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgTmFtZT4+O1xuICAvKipcbiAgICogRGVsZXRlcyBhbGwgcmVjb3JkcyBpbiBhIHN0b3JlLlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqL1xuICBjbGVhcihuYW1lOiBTdG9yZU5hbWVzPERCVHlwZXM+KTogUHJvbWlzZTx2b2lkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgbnVtYmVyIG9mIHJlY29yZHMgbWF0Y2hpbmcgdGhlIGdpdmVuIHF1ZXJ5IGluIGEgc3RvcmUuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgY291bnQ8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBrZXk/OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgKTogUHJvbWlzZTxudW1iZXI+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkgaW4gYW4gaW5kZXguXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGluZGV4TmFtZSBOYW1lIG9mIHRoZSBpbmRleCB3aXRoaW4gdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0ga2V5XG4gICAqL1xuICBjb3VudEZyb21JbmRleDxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIE5hbWU+LFxuICA+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBpbmRleE5hbWU6IEluZGV4TmFtZSxcbiAgICBrZXk/OiBJbmRleEtleTxEQlR5cGVzLCBOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICApOiBQcm9taXNlPG51bWJlcj47XG4gIC8qKlxuICAgKiBEZWxldGVzIHJlY29yZHMgaW4gYSBzdG9yZSBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgZGVsZXRlPE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAga2V5OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPHZvaWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVjb3JkIGluIGEgc3RvcmUgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIGdldDxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHF1ZXJ5OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVjb3JkIGluIGFuIGluZGV4IG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGluZGV4TmFtZSBOYW1lIG9mIHRoZSBpbmRleCB3aXRoaW4gdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIGdldEZyb21JbmRleDxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIE5hbWU+LFxuICA+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBpbmRleE5hbWU6IEluZGV4TmFtZSxcbiAgICBxdWVyeTogSW5kZXhLZXk8REJUeXBlcywgTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCB2YWx1ZXMgaW4gYSBzdG9yZSB0aGF0IG1hdGNoIHRoZSBxdWVyeS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIHZhbHVlcyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGw8TmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgTmFtZT5bXT47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyBpbiBhbiBpbmRleCB0aGF0IG1hdGNoIHRoZSBxdWVyeS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gaW5kZXhOYW1lIE5hbWUgb2YgdGhlIGluZGV4IHdpdGhpbiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2YgdmFsdWVzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbEZyb21JbmRleDxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIE5hbWU+LFxuICA+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBpbmRleE5hbWU6IEluZGV4TmFtZSxcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIE5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5cyBvZiByZWNvcmRzIGluIGEgc3RvcmUgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGlzIGlzIGEgc2hvcnRjdXQgdGhhdCBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gZm9yIHRoaXMgc2luZ2xlIGFjdGlvbi4gSWYgeW91IG5lZWQgdG8gZG8gbW9yZVxuICAgKiB0aGFuIG9uZSBhY3Rpb24sIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2Yga2V5cyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGxLZXlzPE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+PihcbiAgICBzdG9yZU5hbWU6IE5hbWUsXG4gICAgcXVlcnk/OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5cyBvZiByZWNvcmRzIGluIGFuIGluZGV4IG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gaW5kZXhOYW1lIE5hbWUgb2YgdGhlIGluZGV4IHdpdGhpbiB0aGUgc3RvcmUuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2Yga2V5cyB0byByZXR1cm4uXG4gICAqL1xuICBnZXRBbGxLZXlzRnJvbUluZGV4PFxuICAgIE5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICAgIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgTmFtZT4sXG4gID4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIGluZGV4TmFtZTogSW5kZXhOYW1lLFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBjb3VudD86IG51bWJlcixcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5IG9mIHRoZSBmaXJzdCByZWNvcmQgaW4gYSBzdG9yZSB0aGF0IG1hdGNoZXMgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIHVuZGVmaW5lZCBpZiBubyBtYXRjaCBpcyBmb3VuZC5cbiAgICpcbiAgICogVGhpcyBpcyBhIHNob3J0Y3V0IHRoYXQgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIGZvciB0aGlzIHNpbmdsZSBhY3Rpb24uIElmIHlvdSBuZWVkIHRvIGRvIG1vcmVcbiAgICogdGhhbiBvbmUgYWN0aW9uLCBjcmVhdGUgYSB0cmFuc2FjdGlvbiBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gc3RvcmVOYW1lIE5hbWUgb2YgdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIGdldEtleTxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHF1ZXJ5OiBTdG9yZUtleTxEQlR5cGVzLCBOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5IG9mIHRoZSBmaXJzdCByZWNvcmQgaW4gYW4gaW5kZXggdGhhdCBtYXRjaGVzIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIGluZGV4TmFtZSBOYW1lIG9mIHRoZSBpbmRleCB3aXRoaW4gdGhlIHN0b3JlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIGdldEtleUZyb21JbmRleDxcbiAgICBOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIE5hbWU+LFxuICA+KFxuICAgIHN0b3JlTmFtZTogTmFtZSxcbiAgICBpbmRleE5hbWU6IEluZGV4TmFtZSxcbiAgICBxdWVyeTogSW5kZXhLZXk8REJUeXBlcywgTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIFB1dCBhbiBpdGVtIGluIHRoZSBkYXRhYmFzZS5cbiAgICpcbiAgICogUmVwbGFjZXMgYW55IGl0ZW0gd2l0aCB0aGUgc2FtZSBrZXkuXG4gICAqXG4gICAqIFRoaXMgaXMgYSBzaG9ydGN1dCB0aGF0IGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiBmb3IgdGhpcyBzaW5nbGUgYWN0aW9uLiBJZiB5b3UgbmVlZCB0byBkbyBtb3JlXG4gICAqIHRoYW4gb25lIGFjdGlvbiwgY3JlYXRlIGEgdHJhbnNhY3Rpb24gaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIHB1dDxOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPj4oXG4gICAgc3RvcmVOYW1lOiBOYW1lLFxuICAgIHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIE5hbWU+LFxuICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIE5hbWU+IHwgSURCS2V5UmFuZ2UsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgTmFtZT4+O1xufVxuXG50eXBlIElEQlBUcmFuc2FjdGlvbkV4dGVuZHMgPSBPbWl0PFxuICBJREJUcmFuc2FjdGlvbixcbiAgJ2RiJyB8ICdvYmplY3RTdG9yZScgfCAnb2JqZWN0U3RvcmVOYW1lcydcbj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUFRyYW5zYWN0aW9uPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQVHJhbnNhY3Rpb25FeHRlbmRzIHtcbiAgLyoqXG4gICAqIFRoZSB0cmFuc2FjdGlvbidzIG1vZGUuXG4gICAqL1xuICByZWFkb25seSBtb2RlOiBNb2RlO1xuICAvKipcbiAgICogVGhlIG5hbWVzIG9mIHN0b3JlcyBpbiBzY29wZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IG9iamVjdFN0b3JlTmFtZXM6IFR5cGVkRE9NU3RyaW5nTGlzdDxUeFN0b3Jlc1tudW1iZXJdPjtcbiAgLyoqXG4gICAqIFRoZSB0cmFuc2FjdGlvbidzIGNvbm5lY3Rpb24uXG4gICAqL1xuICByZWFkb25seSBkYjogSURCUERhdGFiYXNlPERCVHlwZXM+O1xuICAvKipcbiAgICogUHJvbWlzZSBmb3IgdGhlIGNvbXBsZXRpb24gb2YgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IGRvbmU6IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBUaGUgYXNzb2NpYXRlZCBvYmplY3Qgc3RvcmUsIGlmIHRoZSB0cmFuc2FjdGlvbiBjb3ZlcnMgYSBzaW5nbGUgc3RvcmUsIG90aGVyd2lzZSB1bmRlZmluZWQuXG4gICAqL1xuICByZWFkb25seSBzdG9yZTogVHhTdG9yZXNbMV0gZXh0ZW5kcyB1bmRlZmluZWRcbiAgICA/IElEQlBPYmplY3RTdG9yZTxEQlR5cGVzLCBUeFN0b3JlcywgVHhTdG9yZXNbMF0sIE1vZGU+XG4gICAgOiB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElEQk9iamVjdFN0b3JlIGluIHRoZSB0cmFuc2FjdGlvbidzIHNjb3BlLlxuICAgKi9cbiAgb2JqZWN0U3RvcmU8U3RvcmVOYW1lIGV4dGVuZHMgVHhTdG9yZXNbbnVtYmVyXT4oXG4gICAgbmFtZTogU3RvcmVOYW1lLFxuICApOiBJREJQT2JqZWN0U3RvcmU8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgTW9kZT47XG59XG5cbnR5cGUgSURCUE9iamVjdFN0b3JlRXh0ZW5kcyA9IE9taXQ8XG4gIElEQk9iamVjdFN0b3JlLFxuICB8ICd0cmFuc2FjdGlvbidcbiAgfCAnYWRkJ1xuICB8ICdjbGVhcidcbiAgfCAnY291bnQnXG4gIHwgJ2NyZWF0ZUluZGV4J1xuICB8ICdkZWxldGUnXG4gIHwgJ2dldCdcbiAgfCAnZ2V0QWxsJ1xuICB8ICdnZXRBbGxLZXlzJ1xuICB8ICdnZXRLZXknXG4gIHwgJ2luZGV4J1xuICB8ICdvcGVuQ3Vyc29yJ1xuICB8ICdvcGVuS2V5Q3Vyc29yJ1xuICB8ICdwdXQnXG4gIHwgJ2luZGV4TmFtZXMnXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBPYmplY3RTdG9yZTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBPYmplY3RTdG9yZUV4dGVuZHMge1xuICAvKipcbiAgICogVGhlIG5hbWVzIG9mIGluZGV4ZXMgaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAgcmVhZG9ubHkgaW5kZXhOYW1lczogVHlwZWRET01TdHJpbmdMaXN0PEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPj47XG4gIC8qKlxuICAgKiBUaGUgYXNzb2NpYXRlZCB0cmFuc2FjdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IHRyYW5zYWN0aW9uOiBJREJQVHJhbnNhY3Rpb248REJUeXBlcywgVHhTdG9yZXMsIE1vZGU+O1xuICAvKipcbiAgICogQWRkIGEgdmFsdWUgdG8gdGhlIHN0b3JlLlxuICAgKlxuICAgKiBSZWplY3RzIGlmIGFuIGl0ZW0gb2YgYSBnaXZlbiBrZXkgYWxyZWFkeSBleGlzdHMgaW4gdGhlIHN0b3JlLlxuICAgKi9cbiAgYWRkOiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5J1xuICAgID8gdW5kZWZpbmVkXG4gICAgOiAoXG4gICAgICAgIHZhbHVlOiBTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT4sXG4gICAgICAgIGtleT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgICAgICkgPT4gUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+PjtcbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIHJlY29yZHMgaW4gc3RvcmUuXG4gICAqL1xuICBjbGVhcjogTW9kZSBleHRlbmRzICdyZWFkb25seScgPyB1bmRlZmluZWQgOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBudW1iZXIgb2YgcmVjb3JkcyBtYXRjaGluZyB0aGUgZ2l2ZW4gcXVlcnkuXG4gICAqL1xuICBjb3VudChcbiAgICBrZXk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICApOiBQcm9taXNlPG51bWJlcj47XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluZGV4IGluIHN0b3JlLlxuICAgKlxuICAgKiBUaHJvd3MgYW4gXCJJbnZhbGlkU3RhdGVFcnJvclwiIERPTUV4Y2VwdGlvbiBpZiBub3QgY2FsbGVkIHdpdGhpbiBhbiB1cGdyYWRlIHRyYW5zYWN0aW9uLlxuICAgKi9cbiAgY3JlYXRlSW5kZXg6IE1vZGUgZXh0ZW5kcyAndmVyc2lvbmNoYW5nZSdcbiAgICA/IDxJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4+KFxuICAgICAgICBuYW1lOiBJbmRleE5hbWUsXG4gICAgICAgIGtleVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgICAgICBvcHRpb25zPzogSURCSW5kZXhQYXJhbWV0ZXJzLFxuICAgICAgKSA9PiBJREJQSW5kZXg8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPlxuICAgIDogdW5kZWZpbmVkO1xuICAvKipcbiAgICogRGVsZXRlcyByZWNvcmRzIGluIHN0b3JlIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeS5cbiAgICovXG4gIGRlbGV0ZTogTW9kZSBleHRlbmRzICdyZWFkb25seSdcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKGtleTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlKSA9PiBQcm9taXNlPHZvaWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVjb3JkIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqL1xuICBnZXQoXG4gICAgcXVlcnk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZVZhbHVlPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogUmV0cmlldmVzIGFsbCB2YWx1ZXMgdGhhdCBtYXRjaCB0aGUgcXVlcnkuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gY291bnQgTWF4aW11bSBudW1iZXIgb2YgdmFsdWVzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbChcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+W10+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBrZXlzIG9mIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGNvdW50IE1heGltdW0gbnVtYmVyIG9mIGtleXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsS2V5cyhcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5IG9mIHRoZSBmaXJzdCByZWNvcmQgdGhhdCBtYXRjaGVzIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqL1xuICBnZXRLZXkoXG4gICAgcXVlcnk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSxcbiAgKTogUHJvbWlzZTxTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5kZWZpbmVkPjtcbiAgLyoqXG4gICAqIEdldCBhIHF1ZXJ5IG9mIGEgZ2l2ZW4gbmFtZS5cbiAgICovXG4gIGluZGV4PEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPj4oXG4gICAgbmFtZTogSW5kZXhOYW1lLFxuICApOiBJREJQSW5kZXg8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPjtcbiAgLyoqXG4gICAqIE9wZW5zIGEgY3Vyc29yIG92ZXIgdGhlIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIG51bGwgaWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgb3BlbkN1cnNvcihcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBQcm9taXNlPElEQlBDdXJzb3JXaXRoVmFsdWU8XG4gICAgREJUeXBlcyxcbiAgICBUeFN0b3JlcyxcbiAgICBTdG9yZU5hbWUsXG4gICAgdW5rbm93bixcbiAgICBNb2RlXG4gID4gfCBudWxsPjtcbiAgLyoqXG4gICAqIE9wZW5zIGEgY3Vyc29yIG92ZXIgdGhlIGtleXMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIG51bGwgaWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgb3BlbktleUN1cnNvcihcbiAgICBxdWVyeT86IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBQcm9taXNlPElEQlBDdXJzb3I8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgdW5rbm93biwgTW9kZT4gfCBudWxsPjtcbiAgLyoqXG4gICAqIFB1dCBhbiBpdGVtIGluIHRoZSBzdG9yZS5cbiAgICpcbiAgICogUmVwbGFjZXMgYW55IGl0ZW0gd2l0aCB0aGUgc2FtZSBrZXkuXG4gICAqL1xuICBwdXQ6IE1vZGUgZXh0ZW5kcyAncmVhZG9ubHknXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IChcbiAgICAgICAgdmFsdWU6IFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgICAgICAga2V5PzogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPiB8IElEQktleVJhbmdlLFxuICAgICAgKSA9PiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4+O1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSBzdG9yZS5cbiAgICovXG4gIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFxuICAgIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlPFxuICAgICAgREJUeXBlcyxcbiAgICAgIFR4U3RvcmVzLFxuICAgICAgU3RvcmVOYW1lLFxuICAgICAgdW5rbm93bixcbiAgICAgIE1vZGVcbiAgICA+XG4gID47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIHJlY29yZHMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnkgSWYgbnVsbCwgYWxsIHJlY29yZHMgbWF0Y2guXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICovXG4gIGl0ZXJhdGUoXG4gICAgcXVlcnk/OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGRpcmVjdGlvbj86IElEQkN1cnNvckRpcmVjdGlvbixcbiAgKTogQXN5bmNJdGVyYWJsZUl0ZXJhdG9yPFxuICAgIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlPFxuICAgICAgREJUeXBlcyxcbiAgICAgIFR4U3RvcmVzLFxuICAgICAgU3RvcmVOYW1lLFxuICAgICAgdW5rbm93bixcbiAgICAgIE1vZGVcbiAgICA+XG4gID47XG59XG5cbnR5cGUgSURCUEluZGV4RXh0ZW5kcyA9IE9taXQ8XG4gIElEQkluZGV4LFxuICB8ICdvYmplY3RTdG9yZSdcbiAgfCAnY291bnQnXG4gIHwgJ2dldCdcbiAgfCAnZ2V0QWxsJ1xuICB8ICdnZXRBbGxLZXlzJ1xuICB8ICdnZXRLZXknXG4gIHwgJ29wZW5DdXJzb3InXG4gIHwgJ29wZW5LZXlDdXJzb3InXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBJbmRleDxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiA9IEluZGV4TmFtZXM8XG4gICAgREJUeXBlcyxcbiAgICBTdG9yZU5hbWVcbiAgPixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUEluZGV4RXh0ZW5kcyB7XG4gIC8qKlxuICAgKiBUaGUgSURCT2JqZWN0U3RvcmUgdGhlIGluZGV4IGJlbG9uZ3MgdG8uXG4gICAqL1xuICByZWFkb25seSBvYmplY3RTdG9yZTogSURCUE9iamVjdFN0b3JlPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIE1vZGU+O1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIG51bWJlciBvZiByZWNvcmRzIG1hdGNoaW5nIHRoZSBnaXZlbiBxdWVyeS5cbiAgICovXG4gIGNvdW50KFxuICAgIGtleT86IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgKTogUHJvbWlzZTxudW1iZXI+O1xuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVjb3JkIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqL1xuICBnZXQoXG4gICAgcXVlcnk6IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVuZGVmaW5lZD47XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyB0aGF0IG1hdGNoIHRoZSBxdWVyeS5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiB2YWx1ZXMgdG8gcmV0dXJuLlxuICAgKi9cbiAgZ2V0QWxsKFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGNvdW50PzogbnVtYmVyLFxuICApOiBQcm9taXNlPFN0b3JlVmFsdWU8REJUeXBlcywgU3RvcmVOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5cyBvZiByZWNvcmRzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBjb3VudCBNYXhpbXVtIG51bWJlciBvZiBrZXlzIHRvIHJldHVybi5cbiAgICovXG4gIGdldEFsbEtleXMoXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgY291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8U3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPltdPjtcbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUga2V5IG9mIHRoZSBmaXJzdCByZWNvcmQgdGhhdCBtYXRjaGVzIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCB1bmRlZmluZWQgaWYgbm8gbWF0Y2ggaXMgZm91bmQuXG4gICAqL1xuICBnZXRLZXkoXG4gICAgcXVlcnk6IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlLFxuICApOiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmRlZmluZWQ+O1xuICAvKipcbiAgICogT3BlbnMgYSBjdXJzb3Igb3ZlciB0aGUgcmVjb3JkcyBtYXRjaGluZyB0aGUgcXVlcnkuXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggbnVsbCBpZiBubyBtYXRjaGVzIGFyZSBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IElmIG51bGwsIGFsbCByZWNvcmRzIG1hdGNoLlxuICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAqL1xuICBvcGVuQ3Vyc29yKFxuICAgIHF1ZXJ5PzogSW5kZXhLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+IHwgSURCS2V5UmFuZ2UgfCBudWxsLFxuICAgIGRpcmVjdGlvbj86IElEQkN1cnNvckRpcmVjdGlvbixcbiAgKTogUHJvbWlzZTxJREJQQ3Vyc29yV2l0aFZhbHVlPFxuICAgIERCVHlwZXMsXG4gICAgVHhTdG9yZXMsXG4gICAgU3RvcmVOYW1lLFxuICAgIEluZGV4TmFtZSxcbiAgICBNb2RlXG4gID4gfCBudWxsPjtcbiAgLyoqXG4gICAqIE9wZW5zIGEgY3Vyc29yIG92ZXIgdGhlIGtleXMgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIG51bGwgaWYgbm8gbWF0Y2hlcyBhcmUgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeSBJZiBudWxsLCBhbGwgcmVjb3JkcyBtYXRjaC5cbiAgICogQHBhcmFtIGRpcmVjdGlvblxuICAgKi9cbiAgb3BlbktleUN1cnNvcihcbiAgICBxdWVyeT86IEluZGV4S2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPiB8IElEQktleVJhbmdlIHwgbnVsbCxcbiAgICBkaXJlY3Rpb24/OiBJREJDdXJzb3JEaXJlY3Rpb24sXG4gICk6IFByb21pc2U8SURCUEN1cnNvcjxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+IHwgbnVsbD47XG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgdGhlIGluZGV4LlxuICAgKi9cbiAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8XG4gICAgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gICAgICBEQlR5cGVzLFxuICAgICAgVHhTdG9yZXMsXG4gICAgICBTdG9yZU5hbWUsXG4gICAgICBJbmRleE5hbWUsXG4gICAgICBNb2RlXG4gICAgPlxuICA+O1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSByZWNvcmRzIG1hdGNoaW5nIHRoZSBxdWVyeS5cbiAgICpcbiAgICogUmVzb2x2ZXMgd2l0aCBudWxsIGlmIG5vIG1hdGNoZXMgYXJlIGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gcXVlcnkgSWYgbnVsbCwgYWxsIHJlY29yZHMgbWF0Y2guXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICovXG4gIGl0ZXJhdGUoXG4gICAgcXVlcnk/OiBJbmRleEtleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4gfCBJREJLZXlSYW5nZSB8IG51bGwsXG4gICAgZGlyZWN0aW9uPzogSURCQ3Vyc29yRGlyZWN0aW9uLFxuICApOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8XG4gICAgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWU8XG4gICAgICBEQlR5cGVzLFxuICAgICAgVHhTdG9yZXMsXG4gICAgICBTdG9yZU5hbWUsXG4gICAgICBJbmRleE5hbWUsXG4gICAgICBNb2RlXG4gICAgPlxuICA+O1xufVxuXG50eXBlIElEQlBDdXJzb3JFeHRlbmRzID0gT21pdDxcbiAgSURCQ3Vyc29yLFxuICB8ICdrZXknXG4gIHwgJ3ByaW1hcnlLZXknXG4gIHwgJ3NvdXJjZSdcbiAgfCAnYWR2YW5jZSdcbiAgfCAnY29udGludWUnXG4gIHwgJ2NvbnRpbnVlUHJpbWFyeUtleSdcbiAgfCAnZGVsZXRlJ1xuICB8ICd1cGRhdGUnXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBDdXJzb3I8XG4gIERCVHlwZXMgZXh0ZW5kcyBEQlNjaGVtYSB8IHVua25vd24gPSB1bmtub3duLFxuICBUeFN0b3JlcyBleHRlbmRzIEFycmF5TGlrZTxTdG9yZU5hbWVzPERCVHlwZXM+PiA9IEFycmF5TGlrZTxcbiAgICBTdG9yZU5hbWVzPERCVHlwZXM+XG4gID4sXG4gIFN0b3JlTmFtZSBleHRlbmRzIFN0b3JlTmFtZXM8REJUeXBlcz4gPSBTdG9yZU5hbWVzPERCVHlwZXM+LFxuICBJbmRleE5hbWUgZXh0ZW5kcyBJbmRleE5hbWVzPERCVHlwZXMsIFN0b3JlTmFtZT4gfCB1bmtub3duID0gdW5rbm93bixcbiAgTW9kZSBleHRlbmRzIElEQlRyYW5zYWN0aW9uTW9kZSA9ICdyZWFkb25seScsXG4+IGV4dGVuZHMgSURCUEN1cnNvckV4dGVuZHMge1xuICAvKipcbiAgICogVGhlIGtleSBvZiB0aGUgY3VycmVudCBpbmRleCBvciBvYmplY3Qgc3RvcmUgaXRlbS5cbiAgICovXG4gIHJlYWRvbmx5IGtleTogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPjtcbiAgLyoqXG4gICAqIFRoZSBrZXkgb2YgdGhlIGN1cnJlbnQgb2JqZWN0IHN0b3JlIGl0ZW0uXG4gICAqL1xuICByZWFkb25seSBwcmltYXJ5S2V5OiBTdG9yZUtleTxEQlR5cGVzLCBTdG9yZU5hbWU+O1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgSURCT2JqZWN0U3RvcmUgb3IgSURCSW5kZXggdGhlIGN1cnNvciB3YXMgb3BlbmVkIGZyb20uXG4gICAqL1xuICByZWFkb25seSBzb3VyY2U6IEN1cnNvclNvdXJjZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+O1xuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIGN1cnNvciBhIGdpdmVuIG51bWJlciBvZiByZWNvcmRzLlxuICAgKlxuICAgKiBSZXNvbHZlcyB0byBudWxsIGlmIG5vIG1hdGNoaW5nIHJlY29yZHMgcmVtYWluLlxuICAgKi9cbiAgYWR2YW5jZTxUPih0aGlzOiBULCBjb3VudDogbnVtYmVyKTogUHJvbWlzZTxUIHwgbnVsbD47XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgb25lIHJlY29yZCAodW5sZXNzICdrZXknIGlzIHByb3ZpZGVkKS5cbiAgICpcbiAgICogUmVzb2x2ZXMgdG8gbnVsbCBpZiBubyBtYXRjaGluZyByZWNvcmRzIHJlbWFpbi5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICovXG4gIGNvbnRpbnVlPFQ+KFxuICAgIHRoaXM6IFQsXG4gICAga2V5PzogQ3Vyc29yS2V5PERCVHlwZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lPixcbiAgKTogUHJvbWlzZTxUIHwgbnVsbD47XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgZ2l2ZW4ga2V5cy5cbiAgICpcbiAgICogVGhlIG9wZXJhdGlvbiBpcyAnYW5kJyBcdTIwMTMgYm90aCBrZXlzIG11c3QgYmUgc2F0aXNmaWVkLlxuICAgKlxuICAgKiBSZXNvbHZlcyB0byBudWxsIGlmIG5vIG1hdGNoaW5nIHJlY29yZHMgcmVtYWluLlxuICAgKlxuICAgKiBAcGFyYW0ga2V5IEFkdmFuY2UgdG8gdGhlIGluZGV4IG9yIG9iamVjdCBzdG9yZSB3aXRoIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKiBAcGFyYW0gcHJpbWFyeUtleSBhbmQgd2hlcmUgdGhlIG9iamVjdCBzdG9yZSBoYXMgYSBrZXkgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoaXMgdmFsdWUuXG4gICAqL1xuICBjb250aW51ZVByaW1hcnlLZXk8VD4oXG4gICAgdGhpczogVCxcbiAgICBrZXk6IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4sXG4gICAgcHJpbWFyeUtleTogU3RvcmVLZXk8REJUeXBlcywgU3RvcmVOYW1lPixcbiAgKTogUHJvbWlzZTxUIHwgbnVsbD47XG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIGN1cnJlbnQgcmVjb3JkLlxuICAgKi9cbiAgZGVsZXRlOiBNb2RlIGV4dGVuZHMgJ3JlYWRvbmx5JyA/IHVuZGVmaW5lZCA6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIC8qKlxuICAgKiBVcGRhdGVkIHRoZSBjdXJyZW50IHJlY29yZC5cbiAgICovXG4gIHVwZGF0ZTogTW9kZSBleHRlbmRzICdyZWFkb25seSdcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKFxuICAgICAgICB2YWx1ZTogU3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+LFxuICAgICAgKSA9PiBQcm9taXNlPFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4+O1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSBjdXJzb3IuXG4gICAqL1xuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxcbiAgICBJREJQQ3Vyc29ySXRlcmF0b3JWYWx1ZTxEQlR5cGVzLCBUeFN0b3JlcywgU3RvcmVOYW1lLCBJbmRleE5hbWUsIE1vZGU+XG4gID47XG59XG5cbnR5cGUgSURCUEN1cnNvckl0ZXJhdG9yVmFsdWVFeHRlbmRzPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiA9IE9taXQ8XG4gIElEQlBDdXJzb3I8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPixcbiAgJ2FkdmFuY2UnIHwgJ2NvbnRpbnVlJyB8ICdjb250aW51ZVByaW1hcnlLZXknXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBDdXJzb3JJdGVyYXRvclZhbHVlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBDdXJzb3JJdGVyYXRvclZhbHVlRXh0ZW5kczxcbiAgICBEQlR5cGVzLFxuICAgIFR4U3RvcmVzLFxuICAgIFN0b3JlTmFtZSxcbiAgICBJbmRleE5hbWUsXG4gICAgTW9kZVxuICA+IHtcbiAgLyoqXG4gICAqIEFkdmFuY2VzIHRoZSBjdXJzb3IgYSBnaXZlbiBudW1iZXIgb2YgcmVjb3Jkcy5cbiAgICovXG4gIGFkdmFuY2U8VD4odGhpczogVCwgY291bnQ6IG51bWJlcik6IHZvaWQ7XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgb25lIHJlY29yZCAodW5sZXNzICdrZXknIGlzIHByb3ZpZGVkKS5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICovXG4gIGNvbnRpbnVlPFQ+KHRoaXM6IFQsIGtleT86IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4pOiB2b2lkO1xuICAvKipcbiAgICogQWR2YW5jZSB0aGUgY3Vyc29yIGJ5IGdpdmVuIGtleXMuXG4gICAqXG4gICAqIFRoZSBvcGVyYXRpb24gaXMgJ2FuZCcgXHUyMDEzIGJvdGgga2V5cyBtdXN0IGJlIHNhdGlzZmllZC5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICogQHBhcmFtIHByaW1hcnlLZXkgYW5kIHdoZXJlIHRoZSBvYmplY3Qgc3RvcmUgaGFzIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWVQcmltYXJ5S2V5PFQ+KFxuICAgIHRoaXM6IFQsXG4gICAga2V5OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+LFxuICAgIHByaW1hcnlLZXk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4sXG4gICk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURCUEN1cnNvcldpdGhWYWx1ZTxcbiAgREJUeXBlcyBleHRlbmRzIERCU2NoZW1hIHwgdW5rbm93biA9IHVua25vd24sXG4gIFR4U3RvcmVzIGV4dGVuZHMgQXJyYXlMaWtlPFN0b3JlTmFtZXM8REJUeXBlcz4+ID0gQXJyYXlMaWtlPFxuICAgIFN0b3JlTmFtZXM8REJUeXBlcz5cbiAgPixcbiAgU3RvcmVOYW1lIGV4dGVuZHMgU3RvcmVOYW1lczxEQlR5cGVzPiA9IFN0b3JlTmFtZXM8REJUeXBlcz4sXG4gIEluZGV4TmFtZSBleHRlbmRzIEluZGV4TmFtZXM8REJUeXBlcywgU3RvcmVOYW1lPiB8IHVua25vd24gPSB1bmtub3duLFxuICBNb2RlIGV4dGVuZHMgSURCVHJhbnNhY3Rpb25Nb2RlID0gJ3JlYWRvbmx5Jyxcbj4gZXh0ZW5kcyBJREJQQ3Vyc29yPERCVHlwZXMsIFR4U3RvcmVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZSwgTW9kZT4ge1xuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBjdXJyZW50IGl0ZW0uXG4gICAqL1xuICByZWFkb25seSB2YWx1ZTogU3RvcmVWYWx1ZTxEQlR5cGVzLCBTdG9yZU5hbWU+O1xuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIHRoZSBjdXJzb3IuXG4gICAqL1xuICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCk6IEFzeW5jSXRlcmFibGVJdGVyYXRvcjxcbiAgICBJREJQQ3Vyc29yV2l0aFZhbHVlSXRlcmF0b3JWYWx1ZTxcbiAgICAgIERCVHlwZXMsXG4gICAgICBUeFN0b3JlcyxcbiAgICAgIFN0b3JlTmFtZSxcbiAgICAgIEluZGV4TmFtZSxcbiAgICAgIE1vZGVcbiAgICA+XG4gID47XG59XG5cbi8vIFNvbWUgb2YgdGhhdCBzd2VlZWVldCBKYXZhLWVzcXVlIG5hbWluZy5cbnR5cGUgSURCUEN1cnNvcldpdGhWYWx1ZUl0ZXJhdG9yVmFsdWVFeHRlbmRzPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiA9IE9taXQ8XG4gIElEQlBDdXJzb3JXaXRoVmFsdWU8REJUeXBlcywgVHhTdG9yZXMsIFN0b3JlTmFtZSwgSW5kZXhOYW1lLCBNb2RlPixcbiAgJ2FkdmFuY2UnIHwgJ2NvbnRpbnVlJyB8ICdjb250aW51ZVByaW1hcnlLZXknXG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlPFxuICBEQlR5cGVzIGV4dGVuZHMgREJTY2hlbWEgfCB1bmtub3duID0gdW5rbm93bixcbiAgVHhTdG9yZXMgZXh0ZW5kcyBBcnJheUxpa2U8U3RvcmVOYW1lczxEQlR5cGVzPj4gPSBBcnJheUxpa2U8XG4gICAgU3RvcmVOYW1lczxEQlR5cGVzPlxuICA+LFxuICBTdG9yZU5hbWUgZXh0ZW5kcyBTdG9yZU5hbWVzPERCVHlwZXM+ID0gU3RvcmVOYW1lczxEQlR5cGVzPixcbiAgSW5kZXhOYW1lIGV4dGVuZHMgSW5kZXhOYW1lczxEQlR5cGVzLCBTdG9yZU5hbWU+IHwgdW5rbm93biA9IHVua25vd24sXG4gIE1vZGUgZXh0ZW5kcyBJREJUcmFuc2FjdGlvbk1vZGUgPSAncmVhZG9ubHknLFxuPiBleHRlbmRzIElEQlBDdXJzb3JXaXRoVmFsdWVJdGVyYXRvclZhbHVlRXh0ZW5kczxcbiAgICBEQlR5cGVzLFxuICAgIFR4U3RvcmVzLFxuICAgIFN0b3JlTmFtZSxcbiAgICBJbmRleE5hbWUsXG4gICAgTW9kZVxuICA+IHtcbiAgLyoqXG4gICAqIEFkdmFuY2VzIHRoZSBjdXJzb3IgYSBnaXZlbiBudW1iZXIgb2YgcmVjb3Jkcy5cbiAgICovXG4gIGFkdmFuY2U8VD4odGhpczogVCwgY291bnQ6IG51bWJlcik6IHZvaWQ7XG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSBjdXJzb3IgYnkgb25lIHJlY29yZCAodW5sZXNzICdrZXknIGlzIHByb3ZpZGVkKS5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICovXG4gIGNvbnRpbnVlPFQ+KHRoaXM6IFQsIGtleT86IEN1cnNvcktleTxEQlR5cGVzLCBTdG9yZU5hbWUsIEluZGV4TmFtZT4pOiB2b2lkO1xuICAvKipcbiAgICogQWR2YW5jZSB0aGUgY3Vyc29yIGJ5IGdpdmVuIGtleXMuXG4gICAqXG4gICAqIFRoZSBvcGVyYXRpb24gaXMgJ2FuZCcgXHUyMDEzIGJvdGgga2V5cyBtdXN0IGJlIHNhdGlzZmllZC5cbiAgICpcbiAgICogQHBhcmFtIGtleSBBZHZhbmNlIHRvIHRoZSBpbmRleCBvciBvYmplY3Qgc3RvcmUgd2l0aCBhIGtleSBlcXVhbCB0byBvciBncmVhdGVyIHRoYW4gdGhpcyB2YWx1ZS5cbiAgICogQHBhcmFtIHByaW1hcnlLZXkgYW5kIHdoZXJlIHRoZSBvYmplY3Qgc3RvcmUgaGFzIGEga2V5IGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiB0aGlzIHZhbHVlLlxuICAgKi9cbiAgY29udGludWVQcmltYXJ5S2V5PFQ+KFxuICAgIHRoaXM6IFQsXG4gICAga2V5OiBDdXJzb3JLZXk8REJUeXBlcywgU3RvcmVOYW1lLCBJbmRleE5hbWU+LFxuICAgIHByaW1hcnlLZXk6IFN0b3JlS2V5PERCVHlwZXMsIFN0b3JlTmFtZT4sXG4gICk6IHZvaWQ7XG59XG4iLCAiaW1wb3J0IHsgRnVuYyB9IGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQgeyByZXBsYWNlVHJhcHMgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmltcG9ydCB7IElEQlBEYXRhYmFzZSwgSURCUEluZGV4IH0gZnJvbSAnLi9lbnRyeS5qcyc7XG5cbmNvbnN0IHJlYWRNZXRob2RzID0gWydnZXQnLCAnZ2V0S2V5JywgJ2dldEFsbCcsICdnZXRBbGxLZXlzJywgJ2NvdW50J107XG5jb25zdCB3cml0ZU1ldGhvZHMgPSBbJ3B1dCcsICdhZGQnLCAnZGVsZXRlJywgJ2NsZWFyJ107XG5jb25zdCBjYWNoZWRNZXRob2RzID0gbmV3IE1hcDxzdHJpbmcsIEZ1bmM+KCk7XG5cbmZ1bmN0aW9uIGdldE1ldGhvZChcbiAgdGFyZ2V0OiBhbnksXG4gIHByb3A6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCxcbik6IEZ1bmMgfCB1bmRlZmluZWQge1xuICBpZiAoXG4gICAgIShcbiAgICAgIHRhcmdldCBpbnN0YW5jZW9mIElEQkRhdGFiYXNlICYmXG4gICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgdHlwZW9mIHByb3AgPT09ICdzdHJpbmcnXG4gICAgKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2FjaGVkTWV0aG9kcy5nZXQocHJvcCkpIHJldHVybiBjYWNoZWRNZXRob2RzLmdldChwcm9wKTtcblxuICBjb25zdCB0YXJnZXRGdW5jTmFtZTogc3RyaW5nID0gcHJvcC5yZXBsYWNlKC9Gcm9tSW5kZXgkLywgJycpO1xuICBjb25zdCB1c2VJbmRleCA9IHByb3AgIT09IHRhcmdldEZ1bmNOYW1lO1xuICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcblxuICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICEoaXNXcml0ZSB8fCByZWFkTWV0aG9kcy5pbmNsdWRlcyh0YXJnZXRGdW5jTmFtZSkpXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChcbiAgICB0aGlzOiBJREJQRGF0YWJhc2UsXG4gICAgc3RvcmVOYW1lOiBzdHJpbmcsXG4gICAgLi4uYXJnczogYW55W11cbiAgKSB7XG4gICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgY29uc3QgdHggPSB0aGlzLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogJ3JlYWRvbmx5Jyk7XG4gICAgbGV0IHRhcmdldDpcbiAgICAgIHwgdHlwZW9mIHR4LnN0b3JlXG4gICAgICB8IElEQlBJbmRleDx1bmtub3duLCBzdHJpbmdbXSwgc3RyaW5nLCBzdHJpbmcsICdyZWFkd3JpdGUnIHwgJ3JlYWRvbmx5Jz4gPVxuICAgICAgdHguc3RvcmU7XG4gICAgaWYgKHVzZUluZGV4KSB0YXJnZXQgPSB0YXJnZXQuaW5kZXgoYXJncy5zaGlmdCgpKTtcblxuICAgIC8vIE11c3QgcmVqZWN0IGlmIG9wIHJlamVjdHMuXG4gICAgLy8gSWYgaXQncyBhIHdyaXRlIG9wZXJhdGlvbiwgbXVzdCByZWplY3QgaWYgdHguZG9uZSByZWplY3RzLlxuICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgIC8vIE11c3QgcmVzb2x2ZSB3aXRoIG9wIHZhbHVlLlxuICAgIC8vIE11c3QgaGFuZGxlIGJvdGggcHJvbWlzZXMgKG5vIHVuaGFuZGxlZCByZWplY3Rpb25zKVxuICAgIHJldHVybiAoXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICh0YXJnZXQgYXMgYW55KVt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgIF0pXG4gICAgKVswXTtcbiAgfTtcblxuICBjYWNoZWRNZXRob2RzLnNldChwcm9wLCBtZXRob2QpO1xuICByZXR1cm4gbWV0aG9kO1xufVxuXG5yZXBsYWNlVHJhcHMoKG9sZFRyYXBzKSA9PiAoe1xuICAuLi5vbGRUcmFwcyxcbiAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT5cbiAgICBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQhKHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICBoYXM6ICh0YXJnZXQsIHByb3ApID0+XG4gICAgISFnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5oYXMhKHRhcmdldCwgcHJvcCksXG59KSk7XG4iLCAiaW1wb3J0IHsgaW5zdGFuY2VPZkFueSwgRnVuYyB9IGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQgeyByZXBsYWNlVHJhcHMsIHJldmVyc2VUcmFuc2Zvcm1DYWNoZSwgdW53cmFwIH0gZnJvbSAnLi93cmFwLWlkYi12YWx1ZS5qcyc7XG5pbXBvcnQgeyBJREJQT2JqZWN0U3RvcmUsIElEQlBJbmRleCwgSURCUEN1cnNvciB9IGZyb20gJy4vZW50cnkuanMnO1xuXG5jb25zdCBhZHZhbmNlTWV0aG9kUHJvcHMgPSBbJ2NvbnRpbnVlJywgJ2NvbnRpbnVlUHJpbWFyeUtleScsICdhZHZhbmNlJ107XG5jb25zdCBtZXRob2RNYXA6IHsgW3M6IHN0cmluZ106IEZ1bmMgfSA9IHt9O1xuY29uc3QgYWR2YW5jZVJlc3VsdHMgPSBuZXcgV2Vha01hcDxJREJQQ3Vyc29yLCBQcm9taXNlPElEQlBDdXJzb3IgfCBudWxsPj4oKTtcbmNvbnN0IGl0dHJQcm94aWVkQ3Vyc29yVG9PcmlnaW5hbFByb3h5ID0gbmV3IFdlYWtNYXA8SURCUEN1cnNvciwgSURCUEN1cnNvcj4oKTtcblxuY29uc3QgY3Vyc29ySXRlcmF0b3JUcmFwczogUHJveHlIYW5kbGVyPGFueT4gPSB7XG4gIGdldCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoIWFkdmFuY2VNZXRob2RQcm9wcy5pbmNsdWRlcyhwcm9wIGFzIHN0cmluZykpIHJldHVybiB0YXJnZXRbcHJvcF07XG5cbiAgICBsZXQgY2FjaGVkRnVuYyA9IG1ldGhvZE1hcFtwcm9wIGFzIHN0cmluZ107XG5cbiAgICBpZiAoIWNhY2hlZEZ1bmMpIHtcbiAgICAgIGNhY2hlZEZ1bmMgPSBtZXRob2RNYXBbcHJvcCBhcyBzdHJpbmddID0gZnVuY3Rpb24gKFxuICAgICAgICB0aGlzOiBJREJQQ3Vyc29yLFxuICAgICAgICAuLi5hcmdzOiBhbnlcbiAgICAgICkge1xuICAgICAgICBhZHZhbmNlUmVzdWx0cy5zZXQoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAoaXR0clByb3hpZWRDdXJzb3JUb09yaWdpbmFsUHJveHkuZ2V0KHRoaXMpIGFzIGFueSlbcHJvcF0oLi4uYXJncyksXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBjYWNoZWRGdW5jO1xuICB9LFxufTtcblxuYXN5bmMgZnVuY3Rpb24qIGl0ZXJhdGUoXG4gIHRoaXM6IElEQlBPYmplY3RTdG9yZSB8IElEQlBJbmRleCB8IElEQlBDdXJzb3IsXG4gIC4uLmFyZ3M6IGFueVtdXG4pOiBBc3luY0l0ZXJhYmxlSXRlcmF0b3I8YW55PiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgbGV0IGN1cnNvcjogdHlwZW9mIHRoaXMgfCBudWxsID0gdGhpcztcblxuICBpZiAoIShjdXJzb3IgaW5zdGFuY2VvZiBJREJDdXJzb3IpKSB7XG4gICAgY3Vyc29yID0gYXdhaXQgKGN1cnNvciBhcyBJREJQT2JqZWN0U3RvcmUgfCBJREJQSW5kZXgpLm9wZW5DdXJzb3IoLi4uYXJncyk7XG4gIH1cblxuICBpZiAoIWN1cnNvcikgcmV0dXJuO1xuXG4gIGN1cnNvciA9IGN1cnNvciBhcyBJREJQQ3Vyc29yO1xuICBjb25zdCBwcm94aWVkQ3Vyc29yID0gbmV3IFByb3h5KGN1cnNvciwgY3Vyc29ySXRlcmF0b3JUcmFwcyk7XG4gIGl0dHJQcm94aWVkQ3Vyc29yVG9PcmlnaW5hbFByb3h5LnNldChwcm94aWVkQ3Vyc29yLCBjdXJzb3IpO1xuICAvLyBNYXAgdGhpcyBkb3VibGUtcHJveHkgYmFjayB0byB0aGUgb3JpZ2luYWwsIHNvIG90aGVyIGN1cnNvciBtZXRob2RzIHdvcmsuXG4gIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJveGllZEN1cnNvciwgdW53cmFwKGN1cnNvcikpO1xuXG4gIHdoaWxlIChjdXJzb3IpIHtcbiAgICB5aWVsZCBwcm94aWVkQ3Vyc29yO1xuICAgIC8vIElmIG9uZSBvZiB0aGUgYWR2YW5jaW5nIG1ldGhvZHMgd2FzIG5vdCBjYWxsZWQsIGNhbGwgY29udGludWUoKS5cbiAgICBjdXJzb3IgPSBhd2FpdCAoYWR2YW5jZVJlc3VsdHMuZ2V0KHByb3hpZWRDdXJzb3IpIHx8IGN1cnNvci5jb250aW51ZSgpKTtcbiAgICBhZHZhbmNlUmVzdWx0cy5kZWxldGUocHJveGllZEN1cnNvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJdGVyYXRvclByb3AodGFyZ2V0OiBhbnksIHByb3A6IG51bWJlciB8IHN0cmluZyB8IHN5bWJvbCkge1xuICByZXR1cm4gKFxuICAgIChwcm9wID09PSBTeW1ib2wuYXN5bmNJdGVyYXRvciAmJlxuICAgICAgaW5zdGFuY2VPZkFueSh0YXJnZXQsIFtJREJJbmRleCwgSURCT2JqZWN0U3RvcmUsIElEQkN1cnNvcl0pKSB8fFxuICAgIChwcm9wID09PSAnaXRlcmF0ZScgJiYgaW5zdGFuY2VPZkFueSh0YXJnZXQsIFtJREJJbmRleCwgSURCT2JqZWN0U3RvcmVdKSlcbiAgKTtcbn1cblxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgLi4ub2xkVHJhcHMsXG4gIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgaWYgKGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkpIHJldHVybiBpdGVyYXRlO1xuICAgIHJldHVybiBvbGRUcmFwcy5nZXQhKHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICB9LFxuICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgcmV0dXJuIGlzSXRlcmF0b3JQcm9wKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzISh0YXJnZXQsIHByb3ApO1xuICB9LFxufSkpO1xuIiwgIi8vIEB0cy1pZ25vcmVcbnRyeXtzZWxmWyd3b3JrYm94OmV4cGlyYXRpb246Ny4wLjAnXSYmXygpfWNhdGNoKGUpe30iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge29wZW5EQiwgREJTY2hlbWEsIElEQlBEYXRhYmFzZSwgZGVsZXRlREJ9IGZyb20gJ2lkYic7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuY29uc3QgREJfTkFNRSA9ICd3b3JrYm94LWV4cGlyYXRpb24nO1xuY29uc3QgQ0FDSEVfT0JKRUNUX1NUT1JFID0gJ2NhY2hlLWVudHJpZXMnO1xuXG5jb25zdCBub3JtYWxpemVVUkwgPSAodW5Ob3JtYWxpemVkVXJsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTCh1bk5vcm1hbGl6ZWRVcmwsIGxvY2F0aW9uLmhyZWYpO1xuICB1cmwuaGFzaCA9ICcnO1xuXG4gIHJldHVybiB1cmwuaHJlZjtcbn07XG5cbmludGVyZmFjZSBDYWNoZVRpbWVzdGFtcHNNb2RlbEVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgY2FjaGVOYW1lOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENhY2hlRGJTY2hlbWEgZXh0ZW5kcyBEQlNjaGVtYSB7XG4gICdjYWNoZS1lbnRyaWVzJzoge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHZhbHVlOiBDYWNoZVRpbWVzdGFtcHNNb2RlbEVudHJ5O1xuICAgIGluZGV4ZXM6IHtjYWNoZU5hbWU6IHN0cmluZzsgdGltZXN0YW1wOiBudW1iZXJ9O1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRpbWVzdGFtcCBtb2RlbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NhY2hlTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9kYjogSURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZU5hbWVcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhY2hlTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGFuIHVwZ3JhZGUgb2YgaW5kZXhlZERCLlxuICAgKlxuICAgKiBAcGFyYW0ge0lEQlBEYXRhYmFzZTxDYWNoZURiU2NoZW1hPn0gZGJcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX3VwZ3JhZGVEYihkYjogSURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+KSB7XG4gICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBFZGdlSFRNTCBkb2Vzbid0IHN1cHBvcnQgYXJyYXlzIGFzIGEga2V5UGF0aCwgc28gd2VcbiAgICAvLyBoYXZlIHRvIHVzZSB0aGUgYGlkYCBrZXlQYXRoIGhlcmUgYW5kIGNyZWF0ZSBvdXIgb3duIHZhbHVlcyAoYVxuICAgIC8vIGNvbmNhdGVuYXRpb24gb2YgYHVybCArIGNhY2hlTmFtZWApIGluc3RlYWQgb2Ygc2ltcGx5IHVzaW5nXG4gICAgLy8gYGtleVBhdGg6IFsndXJsJywgJ2NhY2hlTmFtZSddYCwgd2hpY2ggaXMgc3VwcG9ydGVkIGluIG90aGVyIGJyb3dzZXJzLlxuICAgIGNvbnN0IG9ialN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoQ0FDSEVfT0JKRUNUX1NUT1JFLCB7a2V5UGF0aDogJ2lkJ30pO1xuXG4gICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHdlIGRvbid0IGhhdmUgdG8gc3VwcG9ydCBFZGdlSFRNTCwgd2UgY2FuXG4gICAgLy8gY3JlYXRlIGEgc2luZ2xlIGluZGV4IHdpdGggdGhlIGtleVBhdGggYFsnY2FjaGVOYW1lJywgJ3RpbWVzdGFtcCddYFxuICAgIC8vIGluc3RlYWQgb2YgZG9pbmcgYm90aCB0aGVzZSBpbmRleGVzLlxuICAgIG9ialN0b3JlLmNyZWF0ZUluZGV4KCdjYWNoZU5hbWUnLCAnY2FjaGVOYW1lJywge3VuaXF1ZTogZmFsc2V9KTtcbiAgICBvYmpTdG9yZS5jcmVhdGVJbmRleCgndGltZXN0YW1wJywgJ3RpbWVzdGFtcCcsIHt1bmlxdWU6IGZhbHNlfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYW4gdXBncmFkZSBvZiBpbmRleGVkREIgYW5kIGRlbGV0ZXMgZGVwcmVjYXRlZCBEQnMuXG4gICAqXG4gICAqIEBwYXJhbSB7SURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+fSBkYlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfdXBncmFkZURiQW5kRGVsZXRlT2xkRGJzKGRiOiBJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT4pIHtcbiAgICB0aGlzLl91cGdyYWRlRGIoZGIpO1xuICAgIGlmICh0aGlzLl9jYWNoZU5hbWUpIHtcbiAgICAgIHZvaWQgZGVsZXRlREIodGhpcy5fY2FjaGVOYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBzZXRUaW1lc3RhbXAodXJsOiBzdHJpbmcsIHRpbWVzdGFtcDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdXJsID0gbm9ybWFsaXplVVJMKHVybCk7XG5cbiAgICBjb25zdCBlbnRyeTogQ2FjaGVUaW1lc3RhbXBzTW9kZWxFbnRyeSA9IHtcbiAgICAgIHVybCxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIGNhY2hlTmFtZTogdGhpcy5fY2FjaGVOYW1lLFxuICAgICAgLy8gQ3JlYXRpbmcgYW4gSUQgZnJvbSB0aGUgVVJMIGFuZCBjYWNoZSBuYW1lIHdvbid0IGJlIG5lY2Vzc2FyeSBvbmNlXG4gICAgICAvLyBFZGdlIHN3aXRjaGVzIHRvIENocm9taXVtIGFuZCBhbGwgYnJvd3NlcnMgd2Ugc3VwcG9ydCB3b3JrIHdpdGhcbiAgICAgIC8vIGFycmF5IGtleVBhdGhzLlxuICAgICAgaWQ6IHRoaXMuX2dldElkKHVybCksXG4gICAgfTtcbiAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKENBQ0hFX09CSkVDVF9TVE9SRSwgJ3JlYWR3cml0ZScsIHtcbiAgICAgIGR1cmFiaWxpdHk6ICdyZWxheGVkJyxcbiAgICB9KTtcbiAgICBhd2FpdCB0eC5zdG9yZS5wdXQoZW50cnkpO1xuICAgIGF3YWl0IHR4LmRvbmU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGltZXN0YW1wIHN0b3JlZCBmb3IgYSBnaXZlbiBVUkwuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHJldHVybiB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgZ2V0VGltZXN0YW1wKHVybDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXIgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IGRiLmdldChDQUNIRV9PQkpFQ1RfU1RPUkUsIHRoaXMuX2dldElkKHVybCkpO1xuICAgIHJldHVybiBlbnRyeT8udGltZXN0YW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIHRoZSBlbnRyaWVzIGluIHRoZSBvYmplY3Qgc3RvcmUgKGZyb20gbmV3ZXN0IHRvXG4gICAqIG9sZGVzdCkgYW5kIHJlbW92ZXMgZW50cmllcyBvbmNlIGVpdGhlciBgbWF4Q291bnRgIGlzIHJlYWNoZWQgb3IgdGhlXG4gICAqIGVudHJ5J3MgdGltZXN0YW1wIGlzIGxlc3MgdGhhbiBgbWluVGltZXN0YW1wYC5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pblRpbWVzdGFtcFxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4Q291bnRcbiAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIGV4cGlyZUVudHJpZXMoXG4gICAgbWluVGltZXN0YW1wOiBudW1iZXIsXG4gICAgbWF4Q291bnQ/OiBudW1iZXIsXG4gICk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICBsZXQgY3Vyc29yID0gYXdhaXQgZGJcbiAgICAgIC50cmFuc2FjdGlvbihDQUNIRV9PQkpFQ1RfU1RPUkUpXG4gICAgICAuc3RvcmUuaW5kZXgoJ3RpbWVzdGFtcCcpXG4gICAgICAub3BlbkN1cnNvcihudWxsLCAncHJldicpO1xuICAgIGNvbnN0IGVudHJpZXNUb0RlbGV0ZTogQ2FjaGVUaW1lc3RhbXBzTW9kZWxFbnRyeVtdID0gW107XG4gICAgbGV0IGVudHJpZXNOb3REZWxldGVkQ291bnQgPSAwO1xuICAgIHdoaWxlIChjdXJzb3IpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGN1cnNvci52YWx1ZTtcbiAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogb25jZSB3ZSBjYW4gdXNlIGEgbXVsdGkta2V5IGluZGV4LCB3ZVxuICAgICAgLy8gd29uJ3QgaGF2ZSB0byBjaGVjayBgY2FjaGVOYW1lYCBoZXJlLlxuICAgICAgaWYgKHJlc3VsdC5jYWNoZU5hbWUgPT09IHRoaXMuX2NhY2hlTmFtZSkge1xuICAgICAgICAvLyBEZWxldGUgYW4gZW50cnkgaWYgaXQncyBvbGRlciB0aGFuIHRoZSBtYXggYWdlIG9yXG4gICAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSB0aGUgbWF4IG51bWJlciBhbGxvd2VkLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgKG1pblRpbWVzdGFtcCAmJiByZXN1bHQudGltZXN0YW1wIDwgbWluVGltZXN0YW1wKSB8fFxuICAgICAgICAgIChtYXhDb3VudCAmJiBlbnRyaWVzTm90RGVsZXRlZENvdW50ID49IG1heENvdW50KVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IHdlIHNob3VsZCBiZSBhYmxlIHRvIGRlbGV0ZSB0aGVcbiAgICAgICAgICAvLyBlbnRyeSByaWdodCBoZXJlLCBidXQgZG9pbmcgc28gY2F1c2VzIGFuIGl0ZXJhdGlvblxuICAgICAgICAgIC8vIGJ1ZyBpbiBTYWZhcmkgc3RhYmxlIChmaXhlZCBpbiBUUCkuIEluc3RlYWQgd2UgY2FuXG4gICAgICAgICAgLy8gc3RvcmUgdGhlIGtleXMgb2YgdGhlIGVudHJpZXMgdG8gZGVsZXRlLCBhbmQgdGhlblxuICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgc2VwYXJhdGUgdHJhbnNhY3Rpb25zLlxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgICAgICAgIC8vIGN1cnNvci5kZWxldGUoKTtcblxuICAgICAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byByZXR1cm4gdGhlIFVSTCwgbm90IHRoZSB3aG9sZSBlbnRyeS5cbiAgICAgICAgICBlbnRyaWVzVG9EZWxldGUucHVzaChjdXJzb3IudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVudHJpZXNOb3REZWxldGVkQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHRoZSBTYWZhcmkgYnVnIGluIHRoZSBmb2xsb3dpbmcgaXNzdWUgaXMgZml4ZWQsXG4gICAgLy8gd2Ugc2hvdWxkIGJlIGFibGUgdG8gcmVtb3ZlIHRoaXMgbG9vcCBhbmQgZG8gdGhlIGVudHJ5IGRlbGV0aW9uIGluIHRoZVxuICAgIC8vIGN1cnNvciBsb29wIGFib3ZlOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgIGNvbnN0IHVybHNEZWxldGVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllc1RvRGVsZXRlKSB7XG4gICAgICBhd2FpdCBkYi5kZWxldGUoQ0FDSEVfT0JKRUNUX1NUT1JFLCBlbnRyeS5pZCk7XG4gICAgICB1cmxzRGVsZXRlZC5wdXNoKGVudHJ5LnVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybHNEZWxldGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgVVJMIGFuZCByZXR1cm5zIGFuIElEIHRoYXQgd2lsbCBiZSB1bmlxdWUgaW4gdGhlIG9iamVjdCBzdG9yZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF9nZXRJZCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gQ3JlYXRpbmcgYW4gSUQgZnJvbSB0aGUgVVJMIGFuZCBjYWNoZSBuYW1lIHdvbid0IGJlIG5lY2Vzc2FyeSBvbmNlXG4gICAgLy8gRWRnZSBzd2l0Y2hlcyB0byBDaHJvbWl1bSBhbmQgYWxsIGJyb3dzZXJzIHdlIHN1cHBvcnQgd29yayB3aXRoXG4gICAgLy8gYXJyYXkga2V5UGF0aHMuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlTmFtZSArICd8JyArIG5vcm1hbGl6ZVVSTCh1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb3BlbiBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0RGIoKSB7XG4gICAgaWYgKCF0aGlzLl9kYikge1xuICAgICAgdGhpcy5fZGIgPSBhd2FpdCBvcGVuREIoREJfTkFNRSwgMSwge1xuICAgICAgICB1cGdyYWRlOiB0aGlzLl91cGdyYWRlRGJBbmREZWxldGVPbGREYnMuYmluZCh0aGlzKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGI7XG4gIH1cbn1cblxuZXhwb3J0IHtDYWNoZVRpbWVzdGFtcHNNb2RlbH07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2RvbnRXYWl0Rm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZG9udFdhaXRGb3IuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQge0NhY2hlVGltZXN0YW1wc01vZGVsfSBmcm9tICcuL21vZGVscy9DYWNoZVRpbWVzdGFtcHNNb2RlbC5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbmludGVyZmFjZSBDYWNoZUV4cGlyYXRpb25Db25maWcge1xuICBtYXhFbnRyaWVzPzogbnVtYmVyO1xuICBtYXhBZ2VTZWNvbmRzPzogbnVtYmVyO1xuICBtYXRjaE9wdGlvbnM/OiBDYWNoZVF1ZXJ5T3B0aW9ucztcbn1cblxuLyoqXG4gKiBUaGUgYENhY2hlRXhwaXJhdGlvbmAgY2xhc3MgYWxsb3dzIHlvdSBkZWZpbmUgYW4gZXhwaXJhdGlvbiBhbmQgLyBvclxuICogbGltaXQgb24gdGhlIG51bWJlciBvZiByZXNwb25zZXMgc3RvcmVkIGluIGFcbiAqIFtgQ2FjaGVgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUpLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWV4cGlyYXRpb25cbiAqL1xuY2xhc3MgQ2FjaGVFeHBpcmF0aW9uIHtcbiAgcHJpdmF0ZSBfaXNSdW5uaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21heEVudHJpZXM/OiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21heEFnZVNlY29uZHM/OiBudW1iZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgX21hdGNoT3B0aW9ucz86IENhY2hlUXVlcnlPcHRpb25zO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jYWNoZU5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBfdGltZXN0YW1wTW9kZWw6IENhY2hlVGltZXN0YW1wc01vZGVsO1xuXG4gIC8qKlxuICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVFeHBpcmF0aW9uIGluc3RhbmNlIHlvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3RcbiAgICogb25lIG9mIHRoZSBgY29uZmlnYCBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRvIGFwcGx5IHJlc3RyaWN0aW9ucyB0by5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhFbnRyaWVzXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZW50cmllcyB0byBjYWNoZS5cbiAgICogRW50cmllcyB1c2VkIHRoZSBsZWFzdCB3aWxsIGJlIHJlbW92ZWQgYXMgdGhlIG1heGltdW0gaXMgcmVhY2hlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4QWdlU2Vjb25kc10gVGhlIG1heGltdW0gYWdlIG9mIGFuIGVudHJ5IGJlZm9yZVxuICAgKiBpdCdzIHRyZWF0ZWQgYXMgc3RhbGUgYW5kIHJlbW92ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnLm1hdGNoT3B0aW9uc10gVGhlIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUvZGVsZXRlI1BhcmFtZXRlcnMpXG4gICAqIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gY2FsbGluZyBgZGVsZXRlKClgIG9uIHRoZSBjYWNoZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhY2hlTmFtZTogc3RyaW5nLCBjb25maWc6IENhY2hlRXhwaXJhdGlvbkNvbmZpZyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNUeXBlKGNhY2hlTmFtZSwgJ3N0cmluZycsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdjYWNoZU5hbWUnLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghKGNvbmZpZy5tYXhFbnRyaWVzIHx8IGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQnLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4RW50cmllcykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZShjb25maWcubWF4RW50cmllcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhFbnRyaWVzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4QWdlU2Vjb25kcykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZShjb25maWcubWF4QWdlU2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbWF4RW50cmllcyA9IGNvbmZpZy5tYXhFbnRyaWVzO1xuICAgIHRoaXMuX21heEFnZVNlY29uZHMgPSBjb25maWcubWF4QWdlU2Vjb25kcztcbiAgICB0aGlzLl9tYXRjaE9wdGlvbnMgPSBjb25maWcubWF0Y2hPcHRpb25zO1xuICAgIHRoaXMuX2NhY2hlTmFtZSA9IGNhY2hlTmFtZTtcbiAgICB0aGlzLl90aW1lc3RhbXBNb2RlbCA9IG5ldyBDYWNoZVRpbWVzdGFtcHNNb2RlbChjYWNoZU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cGlyZXMgZW50cmllcyBmb3IgdGhlIGdpdmVuIGNhY2hlIGFuZCBnaXZlbiBjcml0ZXJpYS5cbiAgICovXG4gIGFzeW5jIGV4cGlyZUVudHJpZXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuX2lzUnVubmluZykge1xuICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pc1J1bm5pbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgbWluVGltZXN0YW1wID0gdGhpcy5fbWF4QWdlU2Vjb25kc1xuICAgICAgPyBEYXRlLm5vdygpIC0gdGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDBcbiAgICAgIDogMDtcblxuICAgIGNvbnN0IHVybHNFeHBpcmVkID0gYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZXhwaXJlRW50cmllcyhcbiAgICAgIG1pblRpbWVzdGFtcCxcbiAgICAgIHRoaXMuX21heEVudHJpZXMsXG4gICAgKTtcblxuICAgIC8vIERlbGV0ZSBVUkxzIGZyb20gdGhlIGNhY2hlXG4gICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKHRoaXMuX2NhY2hlTmFtZSk7XG4gICAgZm9yIChjb25zdCB1cmwgb2YgdXJsc0V4cGlyZWQpIHtcbiAgICAgIGF3YWl0IGNhY2hlLmRlbGV0ZSh1cmwsIHRoaXMuX21hdGNoT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh1cmxzRXhwaXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICBgRXhwaXJlZCAke3VybHNFeHBpcmVkLmxlbmd0aH0gYCArXG4gICAgICAgICAgICBgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgPyAnZW50cnknIDogJ2VudHJpZXMnfSBhbmQgcmVtb3ZlZCBgICtcbiAgICAgICAgICAgIGAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/ICdpdCcgOiAndGhlbSd9IGZyb20gdGhlIGAgK1xuICAgICAgICAgICAgYCcke3RoaXMuX2NhY2hlTmFtZX0nIGNhY2hlLmAsXG4gICAgICAgICk7XG4gICAgICAgIGxvZ2dlci5sb2coXG4gICAgICAgICAgYEV4cGlyZWQgdGhlIGZvbGxvd2luZyAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/ICdVUkwnIDogJ1VSTHMnfTpgLFxuICAgICAgICApO1xuICAgICAgICB1cmxzRXhwaXJlZC5mb3JFYWNoKCh1cmwpID0+IGxvZ2dlci5sb2coYCAgICAke3VybH1gKSk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBDYWNoZSBleHBpcmF0aW9uIHJhbiBhbmQgZm91bmQgbm8gZW50cmllcyB0byByZW1vdmUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX3JlcnVuUmVxdWVzdGVkKSB7XG4gICAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IGZhbHNlO1xuICAgICAgZG9udFdhaXRGb3IodGhpcy5leHBpcmVFbnRyaWVzKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHRpbWVzdGFtcCBmb3IgdGhlIGdpdmVuIFVSTC4gVGhpcyBlbnN1cmVzIHRoZSB3aGVuXG4gICAqIHJlbW92aW5nIGVudHJpZXMgYmFzZWQgb24gbWF4aW11bSBlbnRyaWVzLCBtb3N0IHJlY2VudGx5IHVzZWRcbiAgICogaXMgYWNjdXJhdGUgb3Igd2hlbiBleHBpcmluZywgdGhlIHRpbWVzdGFtcCBpcyB1cC10by1kYXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBhc3luYyB1cGRhdGVUaW1lc3RhbXAodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUodXJsLCAnc3RyaW5nJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgZnVuY05hbWU6ICd1cGRhdGVUaW1lc3RhbXAnLFxuICAgICAgICBwYXJhbU5hbWU6ICd1cmwnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuc2V0VGltZXN0YW1wKHVybCwgRGF0ZS5ub3coKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gY2hlY2sgaWYgYSBVUkwgaGFzIGV4cGlyZWQgb3Igbm90IGJlZm9yZSBpdCdzIHVzZWQuXG4gICAqXG4gICAqIFRoaXMgcmVxdWlyZXMgYSBsb29rIHVwIGZyb20gSW5kZXhlZERCLCBzbyBjYW4gYmUgc2xvdy5cbiAgICpcbiAgICogTm90ZTogVGhpcyBtZXRob2Qgd2lsbCBub3QgcmVtb3ZlIHRoZSBjYWNoZWQgZW50cnksIGNhbGxcbiAgICogYGV4cGlyZUVudHJpZXMoKWAgdG8gcmVtb3ZlIGluZGV4ZWREQiBhbmQgQ2FjaGUgZW50cmllcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgYXN5bmMgaXNVUkxFeHBpcmVkKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCF0aGlzLl9tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKGBleHBpcmVkLXRlc3Qtd2l0aG91dC1tYXgtYWdlYCwge1xuICAgICAgICAgIG1ldGhvZE5hbWU6ICdpc1VSTEV4cGlyZWQnLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ21heEFnZVNlY29uZHMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gYXdhaXQgdGhpcy5fdGltZXN0YW1wTW9kZWwuZ2V0VGltZXN0YW1wKHVybCk7XG4gICAgICBjb25zdCBleHBpcmVPbGRlclRoYW4gPSBEYXRlLm5vdygpIC0gdGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDA7XG4gICAgICByZXR1cm4gdGltZXN0YW1wICE9PSB1bmRlZmluZWQgPyB0aW1lc3RhbXAgPCBleHBpcmVPbGRlclRoYW4gOiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBJbmRleGVkREIgb2JqZWN0IHN0b3JlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBjYWNoZSBleHBpcmF0aW9uXG4gICAqIG1ldGFkYXRhLlxuICAgKi9cbiAgYXN5bmMgZGVsZXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBhdHRlbXB0IGFub3RoZXIgcmVydW4gaWYgd2UncmUgY2FsbGVkIGluIHRoZSBtaWRkbGUgb2ZcbiAgICAvLyBhIGNhY2hlIGV4cGlyYXRpb24uXG4gICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5leHBpcmVFbnRyaWVzKEluZmluaXR5KTsgLy8gRXhwaXJlcyBhbGwuXG4gIH1cbn1cblxuZXhwb3J0IHtDYWNoZUV4cGlyYXRpb259O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmRlY2xhcmUgbGV0IHJlZ2lzdHJhdGlvbjogU2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiB8IHVuZGVmaW5lZDtcblxuZXhwb3J0IGludGVyZmFjZSBDYWNoZU5hbWVEZXRhaWxzIHtcbiAgZ29vZ2xlQW5hbHl0aWNzOiBzdHJpbmc7XG4gIHByZWNhY2hlOiBzdHJpbmc7XG4gIHByZWZpeDogc3RyaW5nO1xuICBydW50aW1lOiBzdHJpbmc7XG4gIHN1ZmZpeDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnRpYWxDYWNoZU5hbWVEZXRhaWxzIHtcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIENhY2hlTmFtZURldGFpbHNQcm9wID1cbiAgfCAnZ29vZ2xlQW5hbHl0aWNzJ1xuICB8ICdwcmVjYWNoZSdcbiAgfCAncHJlZml4J1xuICB8ICdydW50aW1lJ1xuICB8ICdzdWZmaXgnO1xuXG5jb25zdCBfY2FjaGVOYW1lRGV0YWlsczogQ2FjaGVOYW1lRGV0YWlscyA9IHtcbiAgZ29vZ2xlQW5hbHl0aWNzOiAnZ29vZ2xlQW5hbHl0aWNzJyxcbiAgcHJlY2FjaGU6ICdwcmVjYWNoZS12MicsXG4gIHByZWZpeDogJ3dvcmtib3gnLFxuICBydW50aW1lOiAncnVudGltZScsXG4gIHN1ZmZpeDogdHlwZW9mIHJlZ2lzdHJhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyByZWdpc3RyYXRpb24uc2NvcGUgOiAnJyxcbn07XG5cbmNvbnN0IF9jcmVhdGVDYWNoZU5hbWUgPSAoY2FjaGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gW19jYWNoZU5hbWVEZXRhaWxzLnByZWZpeCwgY2FjaGVOYW1lLCBfY2FjaGVOYW1lRGV0YWlscy5zdWZmaXhdXG4gICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApXG4gICAgLmpvaW4oJy0nKTtcbn07XG5cbmNvbnN0IGVhY2hDYWNoZU5hbWVEZXRhaWwgPSAoZm46IChrZXk6IENhY2hlTmFtZURldGFpbHNQcm9wKSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKF9jYWNoZU5hbWVEZXRhaWxzKSkge1xuICAgIGZuKGtleSBhcyBDYWNoZU5hbWVEZXRhaWxzUHJvcCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjYWNoZU5hbWVzID0ge1xuICB1cGRhdGVEZXRhaWxzOiAoZGV0YWlsczogUGFydGlhbENhY2hlTmFtZURldGFpbHMpOiB2b2lkID0+IHtcbiAgICBlYWNoQ2FjaGVOYW1lRGV0YWlsKChrZXk6IENhY2hlTmFtZURldGFpbHNQcm9wKTogdm9pZCA9PiB7XG4gICAgICBpZiAodHlwZW9mIGRldGFpbHNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgX2NhY2hlTmFtZURldGFpbHNba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0R29vZ2xlQW5hbHl0aWNzTmFtZTogKHVzZXJDYWNoZU5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMuZ29vZ2xlQW5hbHl0aWNzKTtcbiAgfSxcbiAgZ2V0UHJlY2FjaGVOYW1lOiAodXNlckNhY2hlTmFtZT86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5wcmVjYWNoZSk7XG4gIH0sXG4gIGdldFByZWZpeDogKCk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIF9jYWNoZU5hbWVEZXRhaWxzLnByZWZpeDtcbiAgfSxcbiAgZ2V0UnVudGltZU5hbWU6ICh1c2VyQ2FjaGVOYW1lPzogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLnJ1bnRpbWUpO1xuICB9LFxuICBnZXRTdWZmaXg6ICgpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBfY2FjaGVOYW1lRGV0YWlscy5zdWZmaXg7XG4gIH0sXG59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8vIENhbGxiYWNrcyB0byBiZSBleGVjdXRlZCB3aGVuZXZlciB0aGVyZSdzIGEgcXVvdGEgZXJyb3IuXG4vLyBDYW4ndCBjaGFuZ2UgRnVuY3Rpb24gdHlwZSByaWdodCBub3cuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuY29uc3QgcXVvdGFFcnJvckNhbGxiYWNrczogU2V0PEZ1bmN0aW9uPiA9IG5ldyBTZXQoKTtcblxuZXhwb3J0IHtxdW90YUVycm9yQ2FsbGJhY2tzfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bG9nZ2VyfSBmcm9tICcuL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnLi9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtxdW90YUVycm9yQ2FsbGJhY2tzfSBmcm9tICcuL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQWRkcyBhIGZ1bmN0aW9uIHRvIHRoZSBzZXQgb2YgcXVvdGFFcnJvckNhbGxiYWNrcyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaWZcbiAqIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQG1lbWJlcm9mIHdvcmtib3gtY29yZVxuICovXG4vLyBDYW4ndCBjaGFuZ2UgRnVuY3Rpb24gdHlwZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydCEuaXNUeXBlKGNhbGxiYWNrLCAnZnVuY3Rpb24nLCB7XG4gICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jb3JlJyxcbiAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXInLFxuICAgICAgcGFyYW1OYW1lOiAnY2FsbGJhY2snLFxuICAgIH0pO1xuICB9XG5cbiAgcXVvdGFFcnJvckNhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VyLmxvZygnUmVnaXN0ZXJlZCBhIGNhbGxiYWNrIHRvIHJlc3BvbmQgdG8gcXVvdGEgZXJyb3JzLicsIGNhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQge3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7Y2FjaGVOYW1lc30gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHtkb250V2FpdEZvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2RvbnRXYWl0Rm9yLmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrfSBmcm9tICd3b3JrYm94LWNvcmUvcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2suanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHtXb3JrYm94UGx1Z2lufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQge0NhY2hlRXhwaXJhdGlvbn0gZnJvbSAnLi9DYWNoZUV4cGlyYXRpb24uanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4cGlyYXRpb25QbHVnaW5PcHRpb25zIHtcbiAgbWF4RW50cmllcz86IG51bWJlcjtcbiAgbWF4QWdlU2Vjb25kcz86IG51bWJlcjtcbiAgbWF0Y2hPcHRpb25zPzogQ2FjaGVRdWVyeU9wdGlvbnM7XG4gIHB1cmdlT25RdW90YUVycm9yPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGlzIHBsdWdpbiBjYW4gYmUgdXNlZCBpbiBhIGB3b3JrYm94LXN0cmF0ZWd5YCB0byByZWd1bGFybHkgZW5mb3JjZSBhXG4gKiBsaW1pdCBvbiB0aGUgYWdlIGFuZCAvIG9yIHRoZSBudW1iZXIgb2YgY2FjaGVkIHJlcXVlc3RzLlxuICpcbiAqIEl0IGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBgd29ya2JveC1zdHJhdGVneWAgaW5zdGFuY2VzIHRoYXQgaGF2ZSBhXG4gKiBbY3VzdG9tIGBjYWNoZU5hbWVgIHByb3BlcnR5IHNldF0oL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9jb25maWd1cmUtd29ya2JveCNjdXN0b21fY2FjaGVfbmFtZXNfaW5fc3RyYXRlZ2llcykuXG4gKiBJbiBvdGhlciB3b3JkcywgaXQgY2FuJ3QgYmUgdXNlZCB0byBleHBpcmUgZW50cmllcyBpbiBzdHJhdGVneSB0aGF0IHVzZXMgdGhlXG4gKiBkZWZhdWx0IHJ1bnRpbWUgY2FjaGUgbmFtZS5cbiAqXG4gKiBXaGVuZXZlciBhIGNhY2hlZCByZXNwb25zZSBpcyB1c2VkIG9yIHVwZGF0ZWQsIHRoaXMgcGx1Z2luIHdpbGwgbG9va1xuICogYXQgdGhlIGFzc29jaWF0ZWQgY2FjaGUgYW5kIHJlbW92ZSBhbnkgb2xkIG9yIGV4dHJhIHJlc3BvbnNlcy5cbiAqXG4gKiBXaGVuIHVzaW5nIGBtYXhBZ2VTZWNvbmRzYCwgcmVzcG9uc2VzIG1heSBiZSB1c2VkICpvbmNlKiBhZnRlciBleHBpcmluZ1xuICogYmVjYXVzZSB0aGUgZXhwaXJhdGlvbiBjbGVhbiB1cCB3aWxsIG5vdCBoYXZlIG9jY3VycmVkIHVudGlsICphZnRlciogdGhlXG4gKiBjYWNoZWQgcmVzcG9uc2UgaGFzIGJlZW4gdXNlZC4gSWYgdGhlIHJlc3BvbnNlIGhhcyBhIFwiRGF0ZVwiIGhlYWRlciwgdGhlblxuICogYSBsaWdodCB3ZWlnaHQgZXhwaXJhdGlvbiBjaGVjayBpcyBwZXJmb3JtZWQgYW5kIHRoZSByZXNwb25zZSB3aWxsIG5vdCBiZVxuICogdXNlZCBpbW1lZGlhdGVseS5cbiAqXG4gKiBXaGVuIHVzaW5nIGBtYXhFbnRyaWVzYCwgdGhlIGVudHJ5IGxlYXN0LXJlY2VudGx5IHJlcXVlc3RlZCB3aWxsIGJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGNhY2hlIGZpcnN0LlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LWV4cGlyYXRpb25cbiAqL1xuY2xhc3MgRXhwaXJhdGlvblBsdWdpbiBpbXBsZW1lbnRzIFdvcmtib3hQbHVnaW4ge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jb25maWc6IEV4cGlyYXRpb25QbHVnaW5PcHRpb25zO1xuICBwcml2YXRlIHJlYWRvbmx5IF9tYXhBZ2VTZWNvbmRzPzogbnVtYmVyO1xuICBwcml2YXRlIF9jYWNoZUV4cGlyYXRpb25zOiBNYXA8c3RyaW5nLCBDYWNoZUV4cGlyYXRpb24+O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V4cGlyYXRpb25QbHVnaW5PcHRpb25zfSBjb25maWdcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4RW50cmllc10gVGhlIG1heGltdW0gbnVtYmVyIG9mIGVudHJpZXMgdG8gY2FjaGUuXG4gICAqIEVudHJpZXMgdXNlZCB0aGUgbGVhc3Qgd2lsbCBiZSByZW1vdmVkIGFzIHRoZSBtYXhpbXVtIGlzIHJlYWNoZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEFnZVNlY29uZHNdIFRoZSBtYXhpbXVtIGFnZSBvZiBhbiBlbnRyeSBiZWZvcmVcbiAgICogaXQncyB0cmVhdGVkIGFzIHN0YWxlIGFuZCByZW1vdmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZy5tYXRjaE9wdGlvbnNdIFRoZSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlL2RlbGV0ZSNQYXJhbWV0ZXJzKVxuICAgKiB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYGRlbGV0ZSgpYCBvbiB0aGUgY2FjaGUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbmZpZy5wdXJnZU9uUXVvdGFFcnJvcl0gV2hldGhlciB0byBvcHQgdGhpcyBjYWNoZSBpbiB0b1xuICAgKiBhdXRvbWF0aWMgZGVsZXRpb24gaWYgdGhlIGF2YWlsYWJsZSBzdG9yYWdlIHF1b3RhIGhhcyBiZWVuIGV4Y2VlZGVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBFeHBpcmF0aW9uUGx1Z2luT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGNvbmZpZy5tYXhFbnRyaWVzIHx8IGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQnLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4RW50cmllcykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZShjb25maWcubWF4RW50cmllcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhFbnRyaWVzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcubWF4QWdlU2Vjb25kcykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZShjb25maWcubWF4QWdlU2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX21heEFnZVNlY29uZHMgPSBjb25maWcubWF4QWdlU2Vjb25kcztcbiAgICB0aGlzLl9jYWNoZUV4cGlyYXRpb25zID0gbmV3IE1hcCgpO1xuXG4gICAgaWYgKGNvbmZpZy5wdXJnZU9uUXVvdGFFcnJvcikge1xuICAgICAgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2soKCkgPT4gdGhpcy5kZWxldGVDYWNoZUFuZE1ldGFkYXRhKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNpbXBsZSBoZWxwZXIgbWV0aG9kIHRvIHJldHVybiBhIENhY2hlRXhwaXJhdGlvbiBpbnN0YW5jZSBmb3IgYSBnaXZlblxuICAgKiBjYWNoZSBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lXG4gICAqIEByZXR1cm4ge0NhY2hlRXhwaXJhdGlvbn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2dldENhY2hlRXhwaXJhdGlvbihjYWNoZU5hbWU6IHN0cmluZyk6IENhY2hlRXhwaXJhdGlvbiB7XG4gICAgaWYgKGNhY2hlTmFtZSA9PT0gY2FjaGVOYW1lcy5nZXRSdW50aW1lTmFtZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdleHBpcmUtY3VzdG9tLWNhY2hlcy1vbmx5Jyk7XG4gICAgfVxuXG4gICAgbGV0IGNhY2hlRXhwaXJhdGlvbiA9IHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMuZ2V0KGNhY2hlTmFtZSk7XG4gICAgaWYgKCFjYWNoZUV4cGlyYXRpb24pIHtcbiAgICAgIGNhY2hlRXhwaXJhdGlvbiA9IG5ldyBDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lLCB0aGlzLl9jb25maWcpO1xuICAgICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucy5zZXQoY2FjaGVOYW1lLCBjYWNoZUV4cGlyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVFeHBpcmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgXCJsaWZlY3ljbGVcIiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlXG4gICAqIGB3b3JrYm94LXN0cmF0ZWdpZXNgIGhhbmRsZXJzIHdoZW4gYSBgUmVzcG9uc2VgIGlzIGFib3V0IHRvIGJlIHJldHVybmVkXG4gICAqIGZyb20gYSBbQ2FjaGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZSkgdG9cbiAgICogdGhlIGhhbmRsZXIuIEl0IGFsbG93cyB0aGUgYFJlc3BvbnNlYCB0byBiZSBpbnNwZWN0ZWQgZm9yIGZyZXNobmVzcyBhbmRcbiAgICogcHJldmVudHMgaXQgZnJvbSBiZWluZyB1c2VkIGlmIHRoZSBgUmVzcG9uc2VgJ3MgYERhdGVgIGhlYWRlciB2YWx1ZSBpc1xuICAgKiBvbGRlciB0aGFuIHRoZSBjb25maWd1cmVkIGBtYXhBZ2VTZWNvbmRzYC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRoZSByZXNwb25zZSBpcyBpbi5cbiAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5jYWNoZWRSZXNwb25zZSBUaGUgYFJlc3BvbnNlYCBvYmplY3QgdGhhdCdzIGJlZW5cbiAgICogICAgIHJlYWQgZnJvbSBhIGNhY2hlIGFuZCB3aG9zZSBmcmVzaG5lc3Mgc2hvdWxkIGJlIGNoZWNrZWQuXG4gICAqIEByZXR1cm4ge1Jlc3BvbnNlfSBFaXRoZXIgdGhlIGBjYWNoZWRSZXNwb25zZWAsIGlmIGl0J3NcbiAgICogICAgIGZyZXNoLCBvciBgbnVsbGAgaWYgdGhlIGBSZXNwb25zZWAgaXMgb2xkZXIgdGhhbiBgbWF4QWdlU2Vjb25kc2AuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWNoZWRSZXNwb25zZVdpbGxCZVVzZWQ6IFdvcmtib3hQbHVnaW5bJ2NhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZCddID0gYXN5bmMgKHtcbiAgICBldmVudCxcbiAgICByZXF1ZXN0LFxuICAgIGNhY2hlTmFtZSxcbiAgICBjYWNoZWRSZXNwb25zZSxcbiAgfSkgPT4ge1xuICAgIGlmICghY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRnJlc2ggPSB0aGlzLl9pc1Jlc3BvbnNlRGF0ZUZyZXNoKGNhY2hlZFJlc3BvbnNlKTtcblxuICAgIC8vIEV4cGlyZSBlbnRyaWVzIHRvIGVuc3VyZSB0aGF0IGV2ZW4gaWYgdGhlIGV4cGlyYXRpb24gZGF0ZSBoYXNcbiAgICAvLyBleHBpcmVkLCBpdCdsbCBvbmx5IGJlIHVzZWQgb25jZS5cbiAgICBjb25zdCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKTtcbiAgICBkb250V2FpdEZvcihjYWNoZUV4cGlyYXRpb24uZXhwaXJlRW50cmllcygpKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgbWV0YWRhdGEgZm9yIHRoZSByZXF1ZXN0IFVSTCB0byB0aGUgY3VycmVudCB0aW1lc3RhbXAsXG4gICAgLy8gYnV0IGRvbid0IGBhd2FpdGAgaXQgYXMgd2UgZG9uJ3Qgd2FudCB0byBibG9jayB0aGUgcmVzcG9uc2UuXG4gICAgY29uc3QgdXBkYXRlVGltZXN0YW1wRG9uZSA9IGNhY2hlRXhwaXJhdGlvbi51cGRhdGVUaW1lc3RhbXAocmVxdWVzdC51cmwpO1xuICAgIGlmIChldmVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXZlbnQud2FpdFVudGlsKHVwZGF0ZVRpbWVzdGFtcERvbmUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyBUaGUgZXZlbnQgbWF5IG5vdCBiZSBhIGZldGNoIGV2ZW50OyBvbmx5IGxvZyB0aGUgVVJMIGlmIGl0IGlzLlxuICAgICAgICAgIGlmICgncmVxdWVzdCcgaW4gZXZlbnQpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgICAgICBgVW5hYmxlIHRvIGVuc3VyZSBzZXJ2aWNlIHdvcmtlciBzdGF5cyBhbGl2ZSB3aGVuIGAgK1xuICAgICAgICAgICAgICAgIGB1cGRhdGluZyBjYWNoZSBlbnRyeSBmb3IgYCArXG4gICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKChldmVudCBhcyBGZXRjaEV2ZW50KS5yZXF1ZXN0LnVybCl9Jy5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNGcmVzaCA/IGNhY2hlZFJlc3BvbnNlIDogbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gY2FjaGVkUmVzcG9uc2VcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2lzUmVzcG9uc2VEYXRlRnJlc2goY2FjaGVkUmVzcG9uc2U6IFJlc3BvbnNlKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAvLyBXZSBhcmVuJ3QgZXhwaXJpbmcgYnkgYWdlLCBzbyByZXR1cm4gdHJ1ZSwgaXQncyBmcmVzaFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlICdkYXRlJyBoZWFkZXIgd2lsbCBzdWZmaWNlIGEgcXVpY2sgZXhwaXJhdGlvbiBjaGVjay5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvc3ctdG9vbGJveC9pc3N1ZXMvMTY0IGZvclxuICAgIC8vIGRpc2N1c3Npb24uXG4gICAgY29uc3QgZGF0ZUhlYWRlclRpbWVzdGFtcCA9IHRoaXMuX2dldERhdGVIZWFkZXJUaW1lc3RhbXAoY2FjaGVkUmVzcG9uc2UpO1xuICAgIGlmIChkYXRlSGVhZGVyVGltZXN0YW1wID09PSBudWxsKSB7XG4gICAgICAvLyBVbmFibGUgdG8gcGFyc2UgZGF0ZSwgc28gYXNzdW1lIGl0J3MgZnJlc2guXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsaWQgaGVhZGVyVGltZSwgdGhlbiBvdXIgcmVzcG9uc2UgaXMgZnJlc2ggaWZmIHRoZVxuICAgIC8vIGhlYWRlclRpbWUgcGx1cyBtYXhBZ2VTZWNvbmRzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCB0aW1lLlxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIGRhdGVIZWFkZXJUaW1lc3RhbXAgPj0gbm93IC0gdGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDA7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBleHRyYWN0IHRoZSBkYXRhIGhlYWRlciBhbmQgcGFyc2UgaXQgaW50byBhIHVzZWZ1bFxuICAgKiB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gY2FjaGVkUmVzcG9uc2VcbiAgICogQHJldHVybiB7bnVtYmVyfG51bGx9XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIF9nZXREYXRlSGVhZGVyVGltZXN0YW1wKGNhY2hlZFJlc3BvbnNlOiBSZXNwb25zZSk6IG51bWJlciB8IG51bGwge1xuICAgIGlmICghY2FjaGVkUmVzcG9uc2UuaGVhZGVycy5oYXMoJ2RhdGUnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZUhlYWRlciA9IGNhY2hlZFJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdkYXRlJyk7XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGVIZWFkZXIhKTtcbiAgICBjb25zdCBoZWFkZXJUaW1lID0gcGFyc2VkRGF0ZS5nZXRUaW1lKCk7XG5cbiAgICAvLyBJZiB0aGUgRGF0ZSBoZWFkZXIgd2FzIGludmFsaWQgZm9yIHNvbWUgcmVhc29uLCBwYXJzZWREYXRlLmdldFRpbWUoKVxuICAgIC8vIHdpbGwgcmV0dXJuIE5hTi5cbiAgICBpZiAoaXNOYU4oaGVhZGVyVGltZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgXCJsaWZlY3ljbGVcIiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlXG4gICAqIGB3b3JrYm94LXN0cmF0ZWdpZXNgIGhhbmRsZXJzIHdoZW4gYW4gZW50cnkgaXMgYWRkZWQgdG8gYSBjYWNoZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRoYXQgd2FzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgVGhlIFJlcXVlc3QgZm9yIHRoZSBjYWNoZWQgZW50cnkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjYWNoZURpZFVwZGF0ZTogV29ya2JveFBsdWdpblsnY2FjaGVEaWRVcGRhdGUnXSA9IGFzeW5jICh7XG4gICAgY2FjaGVOYW1lLFxuICAgIHJlcXVlc3QsXG4gIH0pID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUoY2FjaGVOYW1lLCAnc3RyaW5nJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgZnVuY05hbWU6ICdjYWNoZURpZFVwZGF0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ2NhY2hlTmFtZScsXG4gICAgICB9KTtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICBmdW5jTmFtZTogJ2NhY2hlRGlkVXBkYXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKTtcbiAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24udXBkYXRlVGltZXN0YW1wKHJlcXVlc3QudXJsKTtcbiAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24uZXhwaXJlRW50cmllcygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgaGVscGVyIG1ldGhvZCB0aGF0IHBlcmZvcm1zIHR3byBvcGVyYXRpb25zOlxuICAgKlxuICAgKiAtIERlbGV0ZXMgKmFsbCogdGhlIHVuZGVybHlpbmcgQ2FjaGUgaW5zdGFuY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHBsdWdpblxuICAgKiBpbnN0YW5jZSwgYnkgY2FsbGluZyBjYWNoZXMuZGVsZXRlKCkgb24geW91ciBiZWhhbGYuXG4gICAqIC0gRGVsZXRlcyB0aGUgbWV0YWRhdGEgZnJvbSBJbmRleGVkREIgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGV4cGlyYXRpb25cbiAgICogZGV0YWlscyBmb3IgZWFjaCBDYWNoZSBpbnN0YW5jZS5cbiAgICpcbiAgICogV2hlbiB1c2luZyBjYWNoZSBleHBpcmF0aW9uLCBjYWxsaW5nIHRoaXMgbWV0aG9kIGlzIHByZWZlcmFibGUgdG8gY2FsbGluZ1xuICAgKiBgY2FjaGVzLmRlbGV0ZSgpYCBkaXJlY3RseSwgc2luY2UgdGhpcyB3aWxsIGVuc3VyZSB0aGF0IHRoZSBJbmRleGVkREJcbiAgICogbWV0YWRhdGEgaXMgYWxzbyBjbGVhbmx5IHJlbW92ZWQgYW5kIG9wZW4gSW5kZXhlZERCIGluc3RhbmNlcyBhcmUgZGVsZXRlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSdyZSAqbm90KiB1c2luZyBjYWNoZSBleHBpcmF0aW9uIGZvciBhIGdpdmVuIGNhY2hlLCBjYWxsaW5nXG4gICAqIGBjYWNoZXMuZGVsZXRlKClgIGFuZCBwYXNzaW5nIGluIHRoZSBjYWNoZSdzIG5hbWUgc2hvdWxkIGJlIHN1ZmZpY2llbnQuXG4gICAqIFRoZXJlIGlzIG5vIFdvcmtib3gtc3BlY2lmaWMgbWV0aG9kIG5lZWRlZCBmb3IgY2xlYW51cCBpbiB0aGF0IGNhc2UuXG4gICAqL1xuICBhc3luYyBkZWxldGVDYWNoZUFuZE1ldGFkYXRhKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIERvIHRoaXMgb25lIGF0IGEgdGltZSBpbnN0ZWFkIG9mIGFsbCBhdCBvbmNlIHZpYSBgUHJvbWlzZS5hbGwoKWAgdG9cbiAgICAvLyByZWR1Y2UgdGhlIGNoYW5jZSBvZiBpbmNvbnNpc3RlbmN5IGlmIGEgcHJvbWlzZSByZWplY3RzLlxuICAgIGZvciAoY29uc3QgW2NhY2hlTmFtZSwgY2FjaGVFeHBpcmF0aW9uXSBvZiB0aGlzLl9jYWNoZUV4cGlyYXRpb25zKSB7XG4gICAgICBhd2FpdCBzZWxmLmNhY2hlcy5kZWxldGUoY2FjaGVOYW1lKTtcbiAgICAgIGF3YWl0IGNhY2hlRXhwaXJhdGlvbi5kZWxldGUoKTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCB0aGlzLl9jYWNoZUV4cGlyYXRpb25zIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgPSBuZXcgTWFwKCk7XG4gIH1cbn1cblxuZXhwb3J0IHtFeHBpcmF0aW9uUGx1Z2lufTtcbiIsICIvLyBAdHMtaWdub3JlXG50cnl7c2VsZlsnd29ya2JveDpyb3V0aW5nOjcuMC4wJ10mJl8oKX1jYXRjaChlKXt9IiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCB0eXBlIEhUVFBNZXRob2QgPSAnREVMRVRFJyB8ICdHRVQnIHwgJ0hFQUQnIHwgJ1BBVENIJyB8ICdQT1NUJyB8ICdQVVQnO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IEhUVFAgbWV0aG9kLCAnR0VUJywgdXNlZCB3aGVuIHRoZXJlJ3Mgbm8gc3BlY2lmaWMgbWV0aG9kXG4gKiBjb25maWd1cmVkIGZvciBhIHJvdXRlLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZXRob2Q6IEhUVFBNZXRob2QgPSAnR0VUJztcblxuLyoqXG4gKiBUaGUgbGlzdCBvZiB2YWxpZCBIVFRQIG1ldGhvZHMgYXNzb2NpYXRlZCB3aXRoIHJlcXVlc3RzIHRoYXQgY291bGQgYmUgcm91dGVkLlxuICpcbiAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZE1ldGhvZHM6IEhUVFBNZXRob2RbXSA9IFtcbiAgJ0RFTEVURScsXG4gICdHRVQnLFxuICAnSEVBRCcsXG4gICdQQVRDSCcsXG4gICdQT1NUJyxcbiAgJ1BVVCcsXG5dO1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtSb3V0ZUhhbmRsZXIsIFJvdXRlSGFuZGxlck9iamVjdH0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbigpfE9iamVjdH0gaGFuZGxlciBFaXRoZXIgYSBmdW5jdGlvbiwgb3IgYW4gb2JqZWN0IHdpdGggYVxuICogJ2hhbmRsZScgbWV0aG9kLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBhIGhhbmRsZSBtZXRob2QuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhhbmRsZXIgPSAoaGFuZGxlcjogUm91dGVIYW5kbGVyKTogUm91dGVIYW5kbGVyT2JqZWN0ID0+IHtcbiAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaGFzTWV0aG9kKGhhbmRsZXIsICdoYW5kbGUnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdoYW5kbGVyJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlcjtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc1R5cGUoaGFuZGxlciwgJ2Z1bmN0aW9uJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGUnLFxuICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnaGFuZGxlcicsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtoYW5kbGU6IGhhbmRsZXJ9O1xuICB9XG59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtIVFRQTWV0aG9kLCBkZWZhdWx0TWV0aG9kLCB2YWxpZE1ldGhvZHN9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7bm9ybWFsaXplSGFuZGxlcn0gZnJvbSAnLi91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzJztcbmltcG9ydCB7XG4gIFJvdXRlSGFuZGxlcixcbiAgUm91dGVIYW5kbGVyT2JqZWN0LFxuICBSb3V0ZU1hdGNoQ2FsbGJhY2ssXG59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEEgYFJvdXRlYCBjb25zaXN0cyBvZiBhIHBhaXIgb2YgY2FsbGJhY2sgZnVuY3Rpb25zLCBcIm1hdGNoXCIgYW5kIFwiaGFuZGxlclwiLlxuICogVGhlIFwibWF0Y2hcIiBjYWxsYmFjayBkZXRlcm1pbmUgaWYgYSByb3V0ZSBzaG91bGQgYmUgdXNlZCB0byBcImhhbmRsZVwiIGFcbiAqIHJlcXVlc3QgYnkgcmV0dXJuaW5nIGEgbm9uLWZhbHN5IHZhbHVlIGlmIGl0IGNhbi4gVGhlIFwiaGFuZGxlclwiIGNhbGxiYWNrXG4gKiBpcyBjYWxsZWQgd2hlbiB0aGVyZSBpcyBhIG1hdGNoIGFuZCBzaG91bGQgcmV0dXJuIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzXG4gKiB0byBhIGBSZXNwb25zZWAuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtcm91dGluZ1xuICovXG5jbGFzcyBSb3V0ZSB7XG4gIGhhbmRsZXI6IFJvdXRlSGFuZGxlck9iamVjdDtcbiAgbWF0Y2g6IFJvdXRlTWF0Y2hDYWxsYmFjaztcbiAgbWV0aG9kOiBIVFRQTWV0aG9kO1xuICBjYXRjaEhhbmRsZXI/OiBSb3V0ZUhhbmRsZXJPYmplY3Q7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBSb3V0ZSBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+bWF0Y2hDYWxsYmFja30gbWF0Y2hcbiAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgcm91dGUgbWF0Y2hlcyBhIGdpdmVuXG4gICAqIGBmZXRjaGAgZXZlbnQgYnkgcmV0dXJuaW5nIGEgbm9uLWZhbHN5IHZhbHVlLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc29sdmluZyB0byBhIFJlc3BvbnNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgKiBhZ2FpbnN0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgbWF0Y2g6IFJvdXRlTWF0Y2hDYWxsYmFjayxcbiAgICBoYW5kbGVyOiBSb3V0ZUhhbmRsZXIsXG4gICAgbWV0aG9kOiBIVFRQTWV0aG9kID0gZGVmYXVsdE1ldGhvZCxcbiAgKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNUeXBlKG1hdGNoLCAnZnVuY3Rpb24nLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdtYXRjaCcsXG4gICAgICB9KTtcblxuICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBhc3NlcnQhLmlzT25lT2YobWV0aG9kLCB2YWxpZE1ldGhvZHMsIHtwYXJhbU5hbWU6ICdtZXRob2QnfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlc2UgdmFsdWVzIGFyZSByZWZlcmVuY2VkIGRpcmVjdGx5IGJ5IFJvdXRlciBzbyBjYW5ub3QgYmVcbiAgICAvLyBhbHRlcmVkIGJ5IG1pbmlmaWNhdG9uLlxuICAgIHRoaXMuaGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgdGhpcy5tYXRjaCA9IG1hdGNoO1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nLWhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzb2x2aW5nIHRvIGEgUmVzcG9uc2VcbiAgICovXG4gIHNldENhdGNoSGFuZGxlcihoYW5kbGVyOiBSb3V0ZUhhbmRsZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNhdGNoSGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gIH1cbn1cblxuZXhwb3J0IHtSb3V0ZX07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1xuICBSb3V0ZUhhbmRsZXIsXG4gIFJvdXRlTWF0Y2hDYWxsYmFjayxcbiAgUm91dGVNYXRjaENhbGxiYWNrT3B0aW9ucyxcbn0gZnJvbSAnd29ya2JveC1jb3JlL3R5cGVzLmpzJztcblxuaW1wb3J0IHtIVFRQTWV0aG9kfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge1JvdXRlfSBmcm9tICcuL1JvdXRlLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBSZWdFeHBSb3V0ZSBtYWtlcyBpdCBlYXN5IHRvIGNyZWF0ZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBiYXNlZFxuICoge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZX0uXG4gKlxuICogRm9yIHNhbWUtb3JpZ2luIHJlcXVlc3RzIHRoZSBSZWdFeHAgb25seSBuZWVkcyB0byBtYXRjaCBwYXJ0IG9mIHRoZSBVUkwuIEZvclxuICogcmVxdWVzdHMgYWdhaW5zdCB0aGlyZC1wYXJ0eSBzZXJ2ZXJzLCB5b3UgbXVzdCBkZWZpbmUgYSBSZWdFeHAgdGhhdCBtYXRjaGVzXG4gKiB0aGUgc3RhcnQgb2YgdGhlIFVSTC5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXJvdXRpbmcuUm91dGVcbiAqL1xuY2xhc3MgUmVnRXhwUm91dGUgZXh0ZW5kcyBSb3V0ZSB7XG4gIC8qKlxuICAgKiBJZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGNvbnRhaW5zXG4gICAqIFtjYXB0dXJlIGdyb3Vwc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUmVnRXhwI2dyb3VwaW5nLWJhY2stcmVmZXJlbmNlc30sXG4gICAqIHRoZSBjYXB0dXJlZCB2YWx1ZXMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gICAqIHtAbGluayB3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBgcGFyYW1zYFxuICAgKiBhcmd1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ0V4cCBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QgVVJMcy5cbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFttZXRob2Q9J0dFVCddIFRoZSBIVFRQIG1ldGhvZCB0byBtYXRjaCB0aGUgUm91dGVcbiAgICogYWdhaW5zdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHJlZ0V4cDogUmVnRXhwLCBoYW5kbGVyOiBSb3V0ZUhhbmRsZXIsIG1ldGhvZD86IEhUVFBNZXRob2QpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlZ0V4cCwgUmVnRXhwLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSZWdFeHBSb3V0ZScsXG4gICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBwYXJhbU5hbWU6ICdwYXR0ZXJuJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoOiBSb3V0ZU1hdGNoQ2FsbGJhY2sgPSAoe3VybH06IFJvdXRlTWF0Y2hDYWxsYmFja09wdGlvbnMpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlZ0V4cC5leGVjKHVybC5ocmVmKTtcblxuICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgbm8gbWF0Y2guXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcXVpcmUgdGhhdCB0aGUgbWF0Y2ggc3RhcnQgYXQgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGUgVVJMIHN0cmluZ1xuICAgICAgLy8gaWYgaXQncyBhIGNyb3NzLW9yaWdpbiByZXF1ZXN0LlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjgxIGZvciB0aGUgY29udGV4dFxuICAgICAgLy8gYmVoaW5kIHRoaXMgYmVoYXZpb3IuXG4gICAgICBpZiAodXJsLm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luICYmIHJlc3VsdC5pbmRleCAhPT0gMCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICAgIGBUaGUgcmVndWxhciBleHByZXNzaW9uICcke3JlZ0V4cC50b1N0cmluZygpfScgb25seSBwYXJ0aWFsbHkgbWF0Y2hlZCBgICtcbiAgICAgICAgICAgICAgYGFnYWluc3QgdGhlIGNyb3NzLW9yaWdpbiBVUkwgJyR7dXJsLnRvU3RyaW5nKCl9Jy4gUmVnRXhwUm91dGUncyB3aWxsIG9ubHkgYCArXG4gICAgICAgICAgICAgIGBoYW5kbGUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgcm91dGUgbWF0Y2hlcywgYnV0IHRoZXJlIGFyZW4ndCBhbnkgY2FwdHVyZSBncm91cHMgZGVmaW5lZCwgdGhlblxuICAgICAgLy8gdGhpcyB3aWxsIHJldHVybiBbXSwgd2hpY2ggaXMgdHJ1dGh5IGFuZCB0aGVyZWZvcmUgc3VmZmljaWVudCB0b1xuICAgICAgLy8gaW5kaWNhdGUgYSBtYXRjaC5cbiAgICAgIC8vIElmIHRoZXJlIGFyZSBjYXB0dXJlIGdyb3VwcywgdGhlbiBpdCB3aWxsIHJldHVybiB0aGVpciB2YWx1ZXMuXG4gICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKDEpO1xuICAgIH07XG5cbiAgICBzdXBlcihtYXRjaCwgaGFuZGxlciwgbWV0aG9kKTtcbiAgfVxufVxuXG5leHBvcnQge1JlZ0V4cFJvdXRlfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQge1xuICBSb3V0ZUhhbmRsZXIsXG4gIFJvdXRlSGFuZGxlck9iamVjdCxcbiAgUm91dGVIYW5kbGVyQ2FsbGJhY2tPcHRpb25zLFxuICBSb3V0ZU1hdGNoQ2FsbGJhY2tPcHRpb25zLFxufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuaW1wb3J0IHtIVFRQTWV0aG9kLCBkZWZhdWx0TWV0aG9kfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge25vcm1hbGl6ZUhhbmRsZXJ9IGZyb20gJy4vdXRpbHMvbm9ybWFsaXplSGFuZGxlci5qcyc7XG5pbXBvcnQge1JvdXRlfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCB7V29ya2JveEVycm9yfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcblxuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxudHlwZSBSZXF1ZXN0QXJncyA9IHN0cmluZyB8IFtzdHJpbmcsIFJlcXVlc3RJbml0P107XG5cbmludGVyZmFjZSBDYWNoZVVSTHNNZXNzYWdlRGF0YSB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZDoge1xuICAgIHVybHNUb0NhY2hlOiBSZXF1ZXN0QXJnc1tdO1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBSb3V0ZXIgY2FuIGJlIHVzZWQgdG8gcHJvY2VzcyBhIGBGZXRjaEV2ZW50YCB1c2luZyBvbmUgb3IgbW9yZVxuICoge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZX0sIHJlc3BvbmRpbmcgd2l0aCBhIGBSZXNwb25zZWAgaWZcbiAqIGEgbWF0Y2hpbmcgcm91dGUgZXhpc3RzLlxuICpcbiAqIElmIG5vIHJvdXRlIG1hdGNoZXMgYSBnaXZlbiBhIHJlcXVlc3QsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImRlZmF1bHRcIlxuICogaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZC5cbiAqXG4gKiBTaG91bGQgdGhlIG1hdGNoaW5nIFJvdXRlIHRocm93IGFuIGVycm9yLCB0aGUgUm91dGVyIHdpbGwgdXNlIGEgXCJjYXRjaFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkIHRvIGdyYWNlZnVsbHkgZGVhbCB3aXRoIGlzc3VlcyBhbmQgcmVzcG9uZCB3aXRoIGFcbiAqIFJlcXVlc3QuXG4gKlxuICogSWYgYSByZXF1ZXN0IG1hdGNoZXMgbXVsdGlwbGUgcm91dGVzLCB0aGUgKiplYXJsaWVzdCoqIHJlZ2lzdGVyZWQgcm91dGUgd2lsbFxuICogYmUgdXNlZCB0byByZXNwb25kIHRvIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuY2xhc3MgUm91dGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfcm91dGVzOiBNYXA8SFRUUE1ldGhvZCwgUm91dGVbXT47XG4gIHByaXZhdGUgcmVhZG9ubHkgX2RlZmF1bHRIYW5kbGVyTWFwOiBNYXA8SFRUUE1ldGhvZCwgUm91dGVIYW5kbGVyT2JqZWN0PjtcbiAgcHJpdmF0ZSBfY2F0Y2hIYW5kbGVyPzogUm91dGVIYW5kbGVyT2JqZWN0O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIG5ldyBSb3V0ZXIuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9yb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAgPSBuZXcgTWFwKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiB7TWFwPHN0cmluZywgQXJyYXk8d29ya2JveC1yb3V0aW5nLlJvdXRlPj59IHJvdXRlcyBBIGBNYXBgIG9mIEhUVFBcbiAgICogbWV0aG9kIG5hbWUgKCdHRVQnLCBldGMuKSB0byBhbiBhcnJheSBvZiBhbGwgdGhlIGNvcnJlc3BvbmRpbmcgYFJvdXRlYFxuICAgKiBpbnN0YW5jZXMgdGhhdCBhcmUgcmVnaXN0ZXJlZC5cbiAgICovXG4gIGdldCByb3V0ZXMoKTogTWFwPEhUVFBNZXRob2QsIFJvdXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5fcm91dGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBmZXRjaCBldmVudCBsaXN0ZW5lciB0byByZXNwb25kIHRvIGV2ZW50cyB3aGVuIGEgcm91dGUgbWF0Y2hlc1xuICAgKiB0aGUgZXZlbnQncyByZXF1ZXN0LlxuICAgKi9cbiAgYWRkRmV0Y2hMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsICgoZXZlbnQ6IEZldGNoRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHtyZXF1ZXN0fSA9IGV2ZW50O1xuICAgICAgY29uc3QgcmVzcG9uc2VQcm9taXNlID0gdGhpcy5oYW5kbGVSZXF1ZXN0KHtyZXF1ZXN0LCBldmVudH0pO1xuICAgICAgaWYgKHJlc3BvbnNlUHJvbWlzZSkge1xuICAgICAgICBldmVudC5yZXNwb25kV2l0aChyZXNwb25zZVByb21pc2UpO1xuICAgICAgfVxuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtZXNzYWdlIGV2ZW50IGxpc3RlbmVyIGZvciBVUkxzIHRvIGNhY2hlIGZyb20gdGhlIHdpbmRvdy5cbiAgICogVGhpcyBpcyB1c2VmdWwgdG8gY2FjaGUgcmVzb3VyY2VzIGxvYWRlZCBvbiB0aGUgcGFnZSBwcmlvciB0byB3aGVuIHRoZVxuICAgKiBzZXJ2aWNlIHdvcmtlciBzdGFydGVkIGNvbnRyb2xsaW5nIGl0LlxuICAgKlxuICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlIGRhdGEgc2VudCBmcm9tIHRoZSB3aW5kb3cgc2hvdWxkIGJlIGFzIGZvbGxvd3MuXG4gICAqIFdoZXJlIHRoZSBgdXJsc1RvQ2FjaGVgIGFycmF5IG1heSBjb25zaXN0IG9mIFVSTCBzdHJpbmdzIG9yIGFuIGFycmF5IG9mXG4gICAqIFVSTCBzdHJpbmcgKyBgcmVxdWVzdEluaXRgIG9iamVjdCAodGhlIHNhbWUgYXMgeW91J2QgcGFzcyB0byBgZmV0Y2goKWApLlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIHR5cGU6ICdDQUNIRV9VUkxTJyxcbiAgICogICBwYXlsb2FkOiB7XG4gICAqICAgICB1cmxzVG9DYWNoZTogW1xuICAgKiAgICAgICAnLi9zY3JpcHQxLmpzJyxcbiAgICogICAgICAgJy4vc2NyaXB0Mi5qcycsXG4gICAqICAgICAgIFsnLi9zY3JpcHQzLmpzJywge21vZGU6ICduby1jb3JzJ31dLFxuICAgKiAgICAgXSxcbiAgICogICB9LFxuICAgKiB9XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkQ2FjaGVMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKChldmVudDogRXh0ZW5kYWJsZU1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgLy8gZXZlbnQuZGF0YSBpcyB0eXBlICdhbnknXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG4gICAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdDQUNIRV9VUkxTJykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgIGNvbnN0IHtwYXlsb2FkfTogQ2FjaGVVUkxzTWVzc2FnZURhdGEgPSBldmVudC5kYXRhO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgbG9nZ2VyLmRlYnVnKGBDYWNoaW5nIFVSTHMgZnJvbSB0aGUgd2luZG93YCwgcGF5bG9hZC51cmxzVG9DYWNoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXF1ZXN0UHJvbWlzZXMgPSBQcm9taXNlLmFsbChcbiAgICAgICAgICBwYXlsb2FkLnVybHNUb0NhY2hlLm1hcCgoZW50cnk6IHN0cmluZyB8IFtzdHJpbmcsIFJlcXVlc3RJbml0P10pID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gW2VudHJ5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KC4uLmVudHJ5KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3Qoe3JlcXVlc3QsIGV2ZW50fSk7XG5cbiAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogVHlwZVNjcmlwdCBlcnJvcnMgd2l0aG91dCB0aGlzIHR5cGVjYXN0IGZvclxuICAgICAgICAgICAgLy8gc29tZSByZWFzb24gKHByb2JhYmx5IGEgYnVnKS4gVGhlIHJlYWwgdHlwZSBoZXJlIHNob3VsZCB3b3JrIGJ1dFxuICAgICAgICAgICAgLy8gZG9lc24ndDogYEFycmF5PFByb21pc2U8UmVzcG9uc2U+IHwgdW5kZWZpbmVkPmAuXG4gICAgICAgICAgfSkgYXMgYW55W10sXG4gICAgICAgICk7IC8vIFR5cGVTY3JpcHRcblxuICAgICAgICBldmVudC53YWl0VW50aWwocmVxdWVzdFByb21pc2VzKTtcblxuICAgICAgICAvLyBJZiBhIE1lc3NhZ2VDaGFubmVsIHdhcyB1c2VkLCByZXBseSB0byB0aGUgbWVzc2FnZSBvbiBzdWNjZXNzLlxuICAgICAgICBpZiAoZXZlbnQucG9ydHMgJiYgZXZlbnQucG9ydHNbMF0pIHtcbiAgICAgICAgICB2b2lkIHJlcXVlc3RQcm9taXNlcy50aGVuKCgpID0+IGV2ZW50LnBvcnRzWzBdLnBvc3RNZXNzYWdlKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pIGFzIEV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSByb3V0aW5nIHJ1bGVzIHRvIGEgRmV0Y2hFdmVudCBvYmplY3QgdG8gZ2V0IGEgUmVzcG9uc2UgZnJvbSBhblxuICAgKiBhcHByb3ByaWF0ZSBSb3V0ZSdzIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0IFRoZSByZXF1ZXN0IHRvIGhhbmRsZS5cbiAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZVxuICAgKiAgICAgcmVxdWVzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT58dW5kZWZpbmVkfSBBIHByb21pc2UgaXMgcmV0dXJuZWQgaWYgYVxuICAgKiAgICAgcmVnaXN0ZXJlZCByb3V0ZSBjYW4gaGFuZGxlIHRoZSByZXF1ZXN0LiBJZiB0aGVyZSBpcyBubyBtYXRjaGluZ1xuICAgKiAgICAgcm91dGUgYW5kIHRoZXJlJ3Mgbm8gYGRlZmF1bHRIYW5kbGVyYCwgYHVuZGVmaW5lZGAgaXMgcmV0dXJuZWQuXG4gICAqL1xuICBoYW5kbGVSZXF1ZXN0KHtcbiAgICByZXF1ZXN0LFxuICAgIGV2ZW50LFxuICB9OiB7XG4gICAgcmVxdWVzdDogUmVxdWVzdDtcbiAgICBldmVudDogRXh0ZW5kYWJsZUV2ZW50O1xuICB9KTogUHJvbWlzZTxSZXNwb25zZT4gfCB1bmRlZmluZWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdoYW5kbGVSZXF1ZXN0JyxcbiAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5yZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgIGBXb3JrYm94IFJvdXRlciBvbmx5IHN1cHBvcnRzIFVSTHMgdGhhdCBzdGFydCB3aXRoICdodHRwJy5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNhbWVPcmlnaW4gPSB1cmwub3JpZ2luID09PSBsb2NhdGlvbi5vcmlnaW47XG4gICAgY29uc3Qge3BhcmFtcywgcm91dGV9ID0gdGhpcy5maW5kTWF0Y2hpbmdSb3V0ZSh7XG4gICAgICBldmVudCxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBzYW1lT3JpZ2luLFxuICAgICAgdXJsLFxuICAgIH0pO1xuICAgIGxldCBoYW5kbGVyID0gcm91dGUgJiYgcm91dGUuaGFuZGxlcjtcblxuICAgIGNvbnN0IGRlYnVnTWVzc2FnZXMgPSBbXTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFtgRm91bmQgYSByb3V0ZSB0byBoYW5kbGUgdGhpcyByZXF1ZXN0OmAsIHJvdXRlXSk7XG5cbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChbXG4gICAgICAgICAgICBgUGFzc2luZyB0aGUgZm9sbG93aW5nIHBhcmFtcyB0byB0aGUgcm91dGUncyBoYW5kbGVyOmAsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgaGFuZGxlciBiZWNhdXNlIHRoZXJlIHdhcyBubyBtYXRjaGluZyByb3V0ZSwgdGhlblxuICAgIC8vIGZhbGwgYmFjayB0byBkZWZhdWx0SGFuZGxlciBpZiB0aGF0J3MgZGVmaW5lZC5cbiAgICBjb25zdCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZCBhcyBIVFRQTWV0aG9kO1xuICAgIGlmICghaGFuZGxlciAmJiB0aGlzLl9kZWZhdWx0SGFuZGxlck1hcC5oYXMobWV0aG9kKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFxuICAgICAgICAgIGBGYWlsZWQgdG8gZmluZCBhIG1hdGNoaW5nIHJvdXRlLiBGYWxsaW5nIGAgK1xuICAgICAgICAgICAgYGJhY2sgdG8gdGhlIGRlZmF1bHQgaGFuZGxlciBmb3IgJHttZXRob2R9LmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBoYW5kbGVyID0gdGhpcy5fZGVmYXVsdEhhbmRsZXJNYXAuZ2V0KG1ldGhvZCk7XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBObyBoYW5kbGVyIHNvIFdvcmtib3ggd2lsbCBkbyBub3RoaW5nLiBJZiBsb2dzIGlzIHNldCBvZiBkZWJ1Z1xuICAgICAgICAvLyBpLmUuIHZlcmJvc2UsIHdlIHNob3VsZCBwcmludCBvdXQgdGhpcyBpbmZvcm1hdGlvbi5cbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBObyByb3V0ZSBmb3VuZCBmb3I6ICR7Z2V0RnJpZW5kbHlVUkwodXJsKX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gV2UgaGF2ZSBhIGhhbmRsZXIsIG1lYW5pbmcgV29ya2JveCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIHJvdXRlLlxuICAgICAgLy8gcHJpbnQgdGhlIHJvdXRpbmcgZGV0YWlscyB0byB0aGUgY29uc29sZS5cbiAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgUm91dGVyIGlzIHJlc3BvbmRpbmcgdG86ICR7Z2V0RnJpZW5kbHlVUkwodXJsKX1gKTtcblxuICAgICAgZGVidWdNZXNzYWdlcy5mb3JFYWNoKChtc2cpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobXNnKSkge1xuICAgICAgICAgIGxvZ2dlci5sb2coLi4ubXNnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2dnZXIubG9nKG1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICAvLyBXcmFwIGluIHRyeSBhbmQgY2F0Y2ggaW4gY2FzZSB0aGUgaGFuZGxlIG1ldGhvZCB0aHJvd3MgYSBzeW5jaHJvbm91c1xuICAgIC8vIGVycm9yLiBJdCBzaG91bGQgc3RpbGwgY2FsbGJhY2sgdG8gdGhlIGNhdGNoIGhhbmRsZXIuXG4gICAgbGV0IHJlc3BvbnNlUHJvbWlzZTtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2VQcm9taXNlID0gaGFuZGxlci5oYW5kbGUoe3VybCwgcmVxdWVzdCwgZXZlbnQsIHBhcmFtc30pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzcG9uc2VQcm9taXNlID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgcm91dGUncyBjYXRjaCBoYW5kbGVyLCBpZiBpdCBleGlzdHNcbiAgICBjb25zdCBjYXRjaEhhbmRsZXIgPSByb3V0ZSAmJiByb3V0ZS5jYXRjaEhhbmRsZXI7XG5cbiAgICBpZiAoXG4gICAgICByZXNwb25zZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlICYmXG4gICAgICAodGhpcy5fY2F0Y2hIYW5kbGVyIHx8IGNhdGNoSGFuZGxlcilcbiAgICApIHtcbiAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IHJlc3BvbnNlUHJvbWlzZS5jYXRjaChhc3luYyAoZXJyKSA9PiB7XG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYSByb3V0ZSBjYXRjaCBoYW5kbGVyLCBwcm9jZXNzIHRoYXQgZmlyc3RcbiAgICAgICAgaWYgKGNhdGNoSGFuZGxlcikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBTdGlsbCBpbmNsdWRlIFVSTCBoZXJlIGFzIGl0IHdpbGwgYmUgYXN5bmMgZnJvbSB0aGUgY29uc29sZSBncm91cFxuICAgICAgICAgICAgLy8gYW5kIG1heSBub3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBVUkxcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICAgYEVycm9yIHRocm93biB3aGVuIHJlc3BvbmRpbmcgdG86IGAgK1xuICAgICAgICAgICAgICAgIGAgJHtnZXRGcmllbmRseVVSTChcbiAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICApfS4gRmFsbGluZyBiYWNrIHRvIHJvdXRlJ3MgQ2F0Y2ggSGFuZGxlci5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRXJyb3IgdGhyb3duIGJ5OmAsIHJvdXRlKTtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYXRjaEhhbmRsZXIuaGFuZGxlKHt1cmwsIHJlcXVlc3QsIGV2ZW50LCBwYXJhbXN9KTtcbiAgICAgICAgICB9IGNhdGNoIChjYXRjaEVycikge1xuICAgICAgICAgICAgaWYgKGNhdGNoRXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgZXJyID0gY2F0Y2hFcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NhdGNoSGFuZGxlcikge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBTdGlsbCBpbmNsdWRlIFVSTCBoZXJlIGFzIGl0IHdpbGwgYmUgYXN5bmMgZnJvbSB0aGUgY29uc29sZSBncm91cFxuICAgICAgICAgICAgLy8gYW5kIG1heSBub3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBVUkxcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICAgYEVycm9yIHRocm93biB3aGVuIHJlc3BvbmRpbmcgdG86IGAgK1xuICAgICAgICAgICAgICAgIGAgJHtnZXRGcmllbmRseVVSTChcbiAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICApfS4gRmFsbGluZyBiYWNrIHRvIGdsb2JhbCBDYXRjaCBIYW5kbGVyLmAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBFcnJvciB0aHJvd24gYnk6YCwgcm91dGUpO1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGNoSGFuZGxlci5oYW5kbGUoe3VybCwgcmVxdWVzdCwgZXZlbnR9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZVByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGEgcmVxdWVzdCBhbmQgVVJMIChhbmQgb3B0aW9uYWxseSBhbiBldmVudCkgYWdhaW5zdCB0aGUgbGlzdCBvZlxuICAgKiByZWdpc3RlcmVkIHJvdXRlcywgYW5kIGlmIHRoZXJlJ3MgYSBtYXRjaCwgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZ1xuICAgKiByb3V0ZSBhbG9uZyB3aXRoIGFueSBwYXJhbXMgZ2VuZXJhdGVkIGJ5IHRoZSBtYXRjaC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtVUkx9IG9wdGlvbnMudXJsXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5zYW1lT3JpZ2luIFRoZSByZXN1bHQgb2YgY29tcGFyaW5nIGB1cmwub3JpZ2luYFxuICAgKiAgICAgYWdhaW5zdCB0aGUgY3VycmVudCBvcmlnaW4uXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0IFRoZSByZXF1ZXN0IHRvIG1hdGNoLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGByb3V0ZWAgYW5kIGBwYXJhbXNgIHByb3BlcnRpZXMuXG4gICAqICAgICBUaGV5IGFyZSBwb3B1bGF0ZWQgaWYgYSBtYXRjaGluZyByb3V0ZSB3YXMgZm91bmQgb3IgYHVuZGVmaW5lZGBcbiAgICogICAgIG90aGVyd2lzZS5cbiAgICovXG4gIGZpbmRNYXRjaGluZ1JvdXRlKHtcbiAgICB1cmwsXG4gICAgc2FtZU9yaWdpbixcbiAgICByZXF1ZXN0LFxuICAgIGV2ZW50LFxuICB9OiBSb3V0ZU1hdGNoQ2FsbGJhY2tPcHRpb25zKToge1xuICAgIHJvdXRlPzogUm91dGU7XG4gICAgcGFyYW1zPzogUm91dGVIYW5kbGVyQ2FsbGJhY2tPcHRpb25zWydwYXJhbXMnXTtcbiAgfSB7XG4gICAgY29uc3Qgcm91dGVzID0gdGhpcy5fcm91dGVzLmdldChyZXF1ZXN0Lm1ldGhvZCBhcyBIVFRQTWV0aG9kKSB8fCBbXTtcbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgbGV0IHBhcmFtczogUHJvbWlzZTxhbnk+IHwgdW5kZWZpbmVkO1xuICAgICAgLy8gcm91dGUubWF0Y2ggcmV0dXJucyB0eXBlIGFueSwgbm90IHBvc3NpYmxlIHRvIGNoYW5nZSByaWdodCBub3cuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHJvdXRlLm1hdGNoKHt1cmwsIHNhbWVPcmlnaW4sIHJlcXVlc3QsIGV2ZW50fSk7XG4gICAgICBpZiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyBXYXJuIGRldmVsb3BlcnMgdGhhdCB1c2luZyBhbiBhc3luYyBtYXRjaENhbGxiYWNrIGlzIGFsbW9zdCBhbHdheXNcbiAgICAgICAgICAvLyBub3QgdGhlIHJpZ2h0IHRoaW5nIHRvIGRvLlxuICAgICAgICAgIGlmIChtYXRjaFJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgICAgICBgV2hpbGUgcm91dGluZyAke2dldEZyaWVuZGx5VVJMKHVybCl9LCBhbiBhc3luYyBgICtcbiAgICAgICAgICAgICAgICBgbWF0Y2hDYWxsYmFjayBmdW5jdGlvbiB3YXMgdXNlZC4gUGxlYXNlIGNvbnZlcnQgdGhlIGAgK1xuICAgICAgICAgICAgICAgIGBmb2xsb3dpbmcgcm91dGUgdG8gdXNlIGEgc3luY2hyb25vdXMgbWF0Y2hDYWxsYmFjayBmdW5jdGlvbjpgLFxuICAgICAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjA3OVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgIHBhcmFtcyA9IG1hdGNoUmVzdWx0O1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXMpICYmIHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyBJbnN0ZWFkIG9mIHBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgaW4gYXMgcGFyYW1zLCB1c2UgdW5kZWZpbmVkLlxuICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBtYXRjaFJlc3VsdC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICBPYmplY3Qua2V5cyhtYXRjaFJlc3VsdCkubGVuZ3RoID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBvYmplY3QgaW4gYXMgcGFyYW1zLCB1c2UgdW5kZWZpbmVkLlxuICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWF0Y2hSZXN1bHQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIC8vIEZvciB0aGUgYm9vbGVhbiB2YWx1ZSB0cnVlIChyYXRoZXIgdGhhbiBqdXN0IHNvbWV0aGluZyB0cnV0aC15KSxcbiAgICAgICAgICAvLyBkb24ndCBzZXQgcGFyYW1zLlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvcHVsbC8yMTM0I2lzc3VlY29tbWVudC01MTM5MjQzNTNcbiAgICAgICAgICBwYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gZWFybHkgaWYgaGF2ZSBhIG1hdGNoLlxuICAgICAgICByZXR1cm4ge3JvdXRlLCBwYXJhbXN9O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiBubyBtYXRjaCB3YXMgZm91bmQgYWJvdmUsIHJldHVybiBhbmQgZW1wdHkgb2JqZWN0LlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYSBkZWZhdWx0IGBoYW5kbGVyYCB0aGF0J3MgY2FsbGVkIHdoZW4gbm8gcm91dGVzIGV4cGxpY2l0bHlcbiAgICogbWF0Y2ggdGhlIGluY29taW5nIHJlcXVlc3QuXG4gICAqXG4gICAqIEVhY2ggSFRUUCBtZXRob2QgKCdHRVQnLCAnUE9TVCcsIGV0Yy4pIGdldHMgaXRzIG93biBkZWZhdWx0IGhhbmRsZXIuXG4gICAqXG4gICAqIFdpdGhvdXQgYSBkZWZhdWx0IGhhbmRsZXIsIHVubWF0Y2hlZCByZXF1ZXN0cyB3aWxsIGdvIGFnYWluc3QgdGhlXG4gICAqIG5ldHdvcmsgYXMgaWYgdGhlcmUgd2VyZSBubyBzZXJ2aWNlIHdvcmtlciBwcmVzZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIGFzc29jaWF0ZSB3aXRoIHRoaXNcbiAgICogZGVmYXVsdCBoYW5kbGVyLiBFYWNoIG1ldGhvZCBoYXMgaXRzIG93biBkZWZhdWx0LlxuICAgKi9cbiAgc2V0RGVmYXVsdEhhbmRsZXIoXG4gICAgaGFuZGxlcjogUm91dGVIYW5kbGVyLFxuICAgIG1ldGhvZDogSFRUUE1ldGhvZCA9IGRlZmF1bHRNZXRob2QsXG4gICk6IHZvaWQge1xuICAgIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLnNldChtZXRob2QsIG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGEgUm91dGUgdGhyb3dzIGFuIGVycm9yIHdoaWxlIGhhbmRsaW5nIGEgcmVxdWVzdCwgdGhpcyBgaGFuZGxlcmBcbiAgICogd2lsbCBiZSBjYWxsZWQgYW5kIGdpdmVuIGEgY2hhbmNlIHRvIHByb3ZpZGUgYSByZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAgICovXG4gIHNldENhdGNoSGFuZGxlcihoYW5kbGVyOiBSb3V0ZUhhbmRsZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9jYXRjaEhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICpcbiAgICogQHBhcmFtIHt3b3JrYm94LXJvdXRpbmcuUm91dGV9IHJvdXRlIFRoZSByb3V0ZSB0byByZWdpc3Rlci5cbiAgICovXG4gIHJlZ2lzdGVyUm91dGUocm91dGU6IFJvdXRlKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNUeXBlKHJvdXRlLCAnb2JqZWN0Jywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgfSk7XG5cbiAgICAgIGFzc2VydCEuaGFzTWV0aG9kKHJvdXRlLCAnbWF0Y2gnLCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICB9KTtcblxuICAgICAgYXNzZXJ0IS5pc1R5cGUocm91dGUuaGFuZGxlciwgJ29iamVjdCcsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgIH0pO1xuXG4gICAgICBhc3NlcnQhLmhhc01ldGhvZChyb3V0ZS5oYW5kbGVyLCAnaGFuZGxlJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUuaGFuZGxlcicsXG4gICAgICB9KTtcblxuICAgICAgYXNzZXJ0IS5pc1R5cGUocm91dGUubWV0aG9kLCAnc3RyaW5nJywge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncm91dGUubWV0aG9kJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcm91dGVzLmhhcyhyb3V0ZS5tZXRob2QpKSB7XG4gICAgICB0aGlzLl9yb3V0ZXMuc2V0KHJvdXRlLm1ldGhvZCwgW10pO1xuICAgIH1cblxuICAgIC8vIEdpdmUgcHJlY2VkZW5jZSB0byBhbGwgb2YgdGhlIGVhcmxpZXIgcm91dGVzIGJ5IGFkZGluZyB0aGlzIGFkZGl0aW9uYWxcbiAgICAvLyByb3V0ZSB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkhLnB1c2gocm91dGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGEgcm91dGUgd2l0aCB0aGUgcm91dGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZy5Sb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRvIHVucmVnaXN0ZXIuXG4gICAqL1xuICB1bnJlZ2lzdGVyUm91dGUocm91dGU6IFJvdXRlKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3VucmVnaXN0ZXItcm91dGUtYnV0LW5vdC1mb3VuZC13aXRoLW1ldGhvZCcsIHtcbiAgICAgICAgbWV0aG9kOiByb3V0ZS5tZXRob2QsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUluZGV4ID0gdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpIS5pbmRleE9mKHJvdXRlKTtcbiAgICBpZiAocm91dGVJbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkhLnNwbGljZShyb3V0ZUluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5yZWdpc3Rlci1yb3V0ZS1yb3V0ZS1ub3QtcmVnaXN0ZXJlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1JvdXRlcn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vUm91dGVyLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5sZXQgZGVmYXVsdFJvdXRlcjogUm91dGVyO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UgaWYgb25lIGRvZXMgbm90IGV4aXN0LiBJZiBvbmVcbiAqIGRvZXMgYWxyZWFkeSBleGlzdCwgdGhhdCBpbnN0YW5jZSBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybiB7Um91dGVyfVxuICovXG5leHBvcnQgY29uc3QgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyID0gKCk6IFJvdXRlciA9PiB7XG4gIGlmICghZGVmYXVsdFJvdXRlcikge1xuICAgIGRlZmF1bHRSb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbiAgICAvLyBUaGUgaGVscGVycyB0aGF0IHVzZSB0aGUgZGVmYXVsdCBSb3V0ZXIgYXNzdW1lIHRoZXNlIGxpc3RlbmVycyBleGlzdC5cbiAgICBkZWZhdWx0Um91dGVyLmFkZEZldGNoTGlzdGVuZXIoKTtcbiAgICBkZWZhdWx0Um91dGVyLmFkZENhY2hlTGlzdGVuZXIoKTtcbiAgfVxuICByZXR1cm4gZGVmYXVsdFJvdXRlcjtcbn07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge1JvdXRlSGFuZGxlciwgUm91dGVNYXRjaENhbGxiYWNrfSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQge1JvdXRlfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCB7UmVnRXhwUm91dGV9IGZyb20gJy4vUmVnRXhwUm91dGUuanMnO1xuaW1wb3J0IHtIVFRQTWV0aG9kfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQge2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcn0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIuanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEVhc2lseSByZWdpc3RlciBhIFJlZ0V4cCwgc3RyaW5nLCBvciBmdW5jdGlvbiB3aXRoIGEgY2FjaGluZ1xuICogc3RyYXRlZ3kgdG8gYSBzaW5nbGV0b24gUm91dGVyIGluc3RhbmNlLlxuICpcbiAqIFRoaXMgbWV0aG9kIHdpbGwgZ2VuZXJhdGUgYSBSb3V0ZSBmb3IgeW91IGlmIG5lZWRlZCBhbmRcbiAqIGNhbGwge0BsaW5rIHdvcmtib3gtcm91dGluZy5Sb3V0ZXIjcmVnaXN0ZXJSb3V0ZX0uXG4gKlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfHdvcmtib3gtcm91dGluZy5Sb3V0ZX5tYXRjaENhbGxiYWNrfHdvcmtib3gtcm91dGluZy5Sb3V0ZX0gY2FwdHVyZVxuICogSWYgdGhlIGNhcHR1cmUgcGFyYW0gaXMgYSBgUm91dGVgLCBhbGwgb3RoZXIgYXJndW1lbnRzIHdpbGwgYmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gW2hhbmRsZXJdIEEgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuIFRoaXMgcGFyYW1ldGVyXG4gKiBpcyByZXF1aXJlZCBpZiBgY2FwdHVyZWAgaXMgbm90IGEgYFJvdXRlYCBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICogYWdhaW5zdC5cbiAqIEByZXR1cm4ge3dvcmtib3gtcm91dGluZy5Sb3V0ZX0gVGhlIGdlbmVyYXRlZCBgUm91dGVgLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXJvdXRpbmdcbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJSb3V0ZShcbiAgY2FwdHVyZTogUmVnRXhwIHwgc3RyaW5nIHwgUm91dGVNYXRjaENhbGxiYWNrIHwgUm91dGUsXG4gIGhhbmRsZXI/OiBSb3V0ZUhhbmRsZXIsXG4gIG1ldGhvZD86IEhUVFBNZXRob2QsXG4pOiBSb3V0ZSB7XG4gIGxldCByb3V0ZTtcblxuICBpZiAodHlwZW9mIGNhcHR1cmUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgY2FwdHVyZVVybCA9IG5ldyBVUkwoY2FwdHVyZSwgbG9jYXRpb24uaHJlZik7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCEoY2FwdHVyZS5zdGFydHNXaXRoKCcvJykgfHwgY2FwdHVyZS5zdGFydHNXaXRoKCdodHRwJykpKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtc3RyaW5nJywge1xuICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnY2FwdHVyZScsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSB3YW50IHRvIGNoZWNrIGlmIEV4cHJlc3Mtc3R5bGUgd2lsZGNhcmRzIGFyZSBpbiB0aGUgcGF0aG5hbWUgb25seS5cbiAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzIGxvZyBtZXNzYWdlIGluIHY0LlxuICAgICAgY29uc3QgdmFsdWVUb0NoZWNrID0gY2FwdHVyZS5zdGFydHNXaXRoKCdodHRwJylcbiAgICAgICAgPyBjYXB0dXJlVXJsLnBhdGhuYW1lXG4gICAgICAgIDogY2FwdHVyZTtcblxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9waWxsYXJqcy9wYXRoLXRvLXJlZ2V4cCNwYXJhbWV0ZXJzXG4gICAgICBjb25zdCB3aWxkY2FyZHMgPSAnWyo6PytdJztcbiAgICAgIGlmIChuZXcgUmVnRXhwKGAke3dpbGRjYXJkc31gKS5leGVjKHZhbHVlVG9DaGVjaykpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICAgIGBUaGUgJyRjYXB0dXJlJyBwYXJhbWV0ZXIgY29udGFpbnMgYW4gRXhwcmVzcy1zdHlsZSB3aWxkY2FyZCBgICtcbiAgICAgICAgICAgIGBjaGFyYWN0ZXIgKCR7d2lsZGNhcmRzfSkuIFN0cmluZ3MgYXJlIG5vdyBhbHdheXMgaW50ZXJwcmV0ZWQgYXMgYCArXG4gICAgICAgICAgICBgZXhhY3QgbWF0Y2hlczsgdXNlIGEgUmVnRXhwIGZvciBwYXJ0aWFsIG9yIHdpbGRjYXJkIG1hdGNoZXMuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaENhbGxiYWNrOiBSb3V0ZU1hdGNoQ2FsbGJhY2sgPSAoe3VybH0pID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB1cmwucGF0aG5hbWUgPT09IGNhcHR1cmVVcmwucGF0aG5hbWUgJiZcbiAgICAgICAgICB1cmwub3JpZ2luICE9PSBjYXB0dXJlVXJsLm9yaWdpblxuICAgICAgICApIHtcbiAgICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgICBgJHtjYXB0dXJlfSBvbmx5IHBhcnRpYWxseSBtYXRjaGVzIHRoZSBjcm9zcy1vcmlnaW4gVVJMIGAgK1xuICAgICAgICAgICAgICBgJHt1cmwudG9TdHJpbmcoKX0uIFRoaXMgcm91dGUgd2lsbCBvbmx5IGhhbmRsZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgYCArXG4gICAgICAgICAgICAgIGBpZiB0aGV5IG1hdGNoIHRoZSBlbnRpcmUgVVJMLmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXJsLmhyZWYgPT09IGNhcHR1cmVVcmwuaHJlZjtcbiAgICB9O1xuXG4gICAgLy8gSWYgYGNhcHR1cmVgIGlzIGEgc3RyaW5nIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgcm91dGUgPSBuZXcgUm91dGUobWF0Y2hDYWxsYmFjaywgaGFuZGxlciEsIG1ldGhvZCk7XG4gIH0gZWxzZSBpZiAoY2FwdHVyZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIGBSZWdFeHBgIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgcm91dGUgPSBuZXcgUmVnRXhwUm91dGUoY2FwdHVyZSwgaGFuZGxlciEsIG1ldGhvZCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNhcHR1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBJZiBgY2FwdHVyZWAgaXMgYSBmdW5jdGlvbiB0aGVuIGBoYW5kbGVyYCBhbmQgYG1ldGhvZGAgbXVzdCBiZSBwcmVzZW50LlxuICAgIHJvdXRlID0gbmV3IFJvdXRlKGNhcHR1cmUsIGhhbmRsZXIhLCBtZXRob2QpO1xuICB9IGVsc2UgaWYgKGNhcHR1cmUgaW5zdGFuY2VvZiBSb3V0ZSkge1xuICAgIHJvdXRlID0gY2FwdHVyZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnN1cHBvcnRlZC1yb3V0ZS10eXBlJywge1xuICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgcGFyYW1OYW1lOiAnY2FwdHVyZScsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gIGRlZmF1bHRSb3V0ZXIucmVnaXN0ZXJSb3V0ZShyb3V0ZSk7XG5cbiAgcmV0dXJuIHJvdXRlO1xufVxuXG5leHBvcnQge3JlZ2lzdGVyUm91dGV9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtSb3V0ZUhhbmRsZXJ9IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7Z2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyc7XG5cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogSWYgYSBSb3V0ZSB0aHJvd3MgYW4gZXJyb3Igd2hpbGUgaGFuZGxpbmcgYSByZXF1ZXN0LCB0aGlzIGBoYW5kbGVyYFxuICogd2lsbCBiZSBjYWxsZWQgYW5kIGdpdmVuIGEgY2hhbmNlIHRvIHByb3ZpZGUgYSByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3dvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1yb3V0aW5nXG4gKi9cbmZ1bmN0aW9uIHNldENhdGNoSGFuZGxlcihoYW5kbGVyOiBSb3V0ZUhhbmRsZXIpOiB2b2lkIHtcbiAgY29uc3QgZGVmYXVsdFJvdXRlciA9IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlcigpO1xuICBkZWZhdWx0Um91dGVyLnNldENhdGNoSGFuZGxlcihoYW5kbGVyKTtcbn1cblxuZXhwb3J0IHtzZXRDYXRjaEhhbmRsZXJ9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG5mdW5jdGlvbiBzdHJpcFBhcmFtcyhmdWxsVVJMOiBzdHJpbmcsIGlnbm9yZVBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3Qgc3RyaXBwZWRVUkwgPSBuZXcgVVJMKGZ1bGxVUkwpO1xuICBmb3IgKGNvbnN0IHBhcmFtIG9mIGlnbm9yZVBhcmFtcykge1xuICAgIHN0cmlwcGVkVVJMLnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW0pO1xuICB9XG4gIHJldHVybiBzdHJpcHBlZFVSTC5ocmVmO1xufVxuXG4vKipcbiAqIE1hdGNoZXMgYW4gaXRlbSBpbiB0aGUgY2FjaGUsIGlnbm9yaW5nIHNwZWNpZmljIFVSTCBwYXJhbXMuIFRoaXMgaXMgc2ltaWxhclxuICogdG8gdGhlIGBpZ25vcmVTZWFyY2hgIG9wdGlvbiwgYnV0IGl0IGFsbG93cyB5b3UgdG8gaWdub3JlIGp1c3Qgc3BlY2lmaWNcbiAqIHBhcmFtcyAod2hpbGUgY29udGludWluZyB0byBtYXRjaCBvbiB0aGUgb3RoZXJzKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtDYWNoZX0gY2FjaGVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICogQHBhcmFtIHtPYmplY3R9IG1hdGNoT3B0aW9uc1xuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBpZ25vcmVQYXJhbXNcbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY2FjaGVNYXRjaElnbm9yZVBhcmFtcyhcbiAgY2FjaGU6IENhY2hlLFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICBpZ25vcmVQYXJhbXM6IHN0cmluZ1tdLFxuICBtYXRjaE9wdGlvbnM/OiBDYWNoZVF1ZXJ5T3B0aW9ucyxcbik6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3Qgc3RyaXBwZWRSZXF1ZXN0VVJMID0gc3RyaXBQYXJhbXMocmVxdWVzdC51cmwsIGlnbm9yZVBhcmFtcyk7XG5cbiAgLy8gSWYgdGhlIHJlcXVlc3QgZG9lc24ndCBpbmNsdWRlIGFueSBpZ25vcmVkIHBhcmFtcywgbWF0Y2ggYXMgbm9ybWFsLlxuICBpZiAocmVxdWVzdC51cmwgPT09IHN0cmlwcGVkUmVxdWVzdFVSTCkge1xuICAgIHJldHVybiBjYWNoZS5tYXRjaChyZXF1ZXN0LCBtYXRjaE9wdGlvbnMpO1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCBtYXRjaCBieSBjb21wYXJpbmcga2V5c1xuICBjb25zdCBrZXlzT3B0aW9ucyA9IHsuLi5tYXRjaE9wdGlvbnMsIGlnbm9yZVNlYXJjaDogdHJ1ZX07XG4gIGNvbnN0IGNhY2hlS2V5cyA9IGF3YWl0IGNhY2hlLmtleXMocmVxdWVzdCwga2V5c09wdGlvbnMpO1xuXG4gIGZvciAoY29uc3QgY2FjaGVLZXkgb2YgY2FjaGVLZXlzKSB7XG4gICAgY29uc3Qgc3RyaXBwZWRDYWNoZUtleVVSTCA9IHN0cmlwUGFyYW1zKGNhY2hlS2V5LnVybCwgaWdub3JlUGFyYW1zKTtcbiAgICBpZiAoc3RyaXBwZWRSZXF1ZXN0VVJMID09PSBzdHJpcHBlZENhY2hlS2V5VVJMKSB7XG4gICAgICByZXR1cm4gY2FjaGUubWF0Y2goY2FjaGVLZXksIG1hdGNoT3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIHJldHVybjtcbn1cblxuZXhwb3J0IHtjYWNoZU1hdGNoSWdub3JlUGFyYW1zfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIFRoZSBEZWZlcnJlZCBjbGFzcyBjb21wb3NlcyBQcm9taXNlcyBpbiBhIHdheSB0aGF0IGFsbG93cyBmb3IgdGhlbSB0byBiZVxuICogcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgZnJvbSBvdXRzaWRlIHRoZSBjb25zdHJ1Y3Rvci4gSW4gbW9zdCBjYXNlcyBwcm9taXNlc1xuICogc2hvdWxkIGJlIHVzZWQgZGlyZWN0bHksIGJ1dCBEZWZlcnJlZHMgY2FuIGJlIG5lY2Vzc2FyeSB3aGVuIHRoZSBsb2dpYyB0b1xuICogcmVzb2x2ZSBhIHByb21pc2UgbXVzdCBiZSBzZXBhcmF0ZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBEZWZlcnJlZDxUPiB7XG4gIHByb21pc2U6IFByb21pc2U8VD47XG4gIHJlc29sdmUhOiAodmFsdWU6IFQpID0+IHZvaWQ7XG4gIHJlamVjdCE6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm9taXNlIGFuZCBleHBvc2VzIGl0cyByZXNvbHZlIGFuZCByZWplY3QgZnVuY3Rpb25zIGFzIG1ldGhvZHMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHtEZWZlcnJlZH07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnLi4vX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7cXVvdGFFcnJvckNhbGxiYWNrc30gZnJvbSAnLi4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogUnVucyBhbGwgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucywgb25lIGF0IGEgdGltZSBzZXF1ZW50aWFsbHksIGluIHRoZSBvcmRlclxuICogaW4gd2hpY2ggdGhleSB3ZXJlIHJlZ2lzdGVyZWQuXG4gKlxuICogQG1lbWJlcm9mIHdvcmtib3gtY29yZVxuICogQHByaXZhdGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VyLmxvZyhcbiAgICAgIGBBYm91dCB0byBydW4gJHtxdW90YUVycm9yQ2FsbGJhY2tzLnNpemV9IGAgK1xuICAgICAgICBgY2FsbGJhY2tzIHRvIGNsZWFuIHVwIGNhY2hlcy5gLFxuICAgICk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHF1b3RhRXJyb3JDYWxsYmFja3MpIHtcbiAgICBhd2FpdCBjYWxsYmFjaygpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIubG9nKGNhbGxiYWNrLCAnaXMgY29tcGxldGUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZXIubG9nKCdGaW5pc2hlZCBydW5uaW5nIGNhbGxiYWNrcy4nKTtcbiAgfVxufVxuXG5leHBvcnQge2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzfTtcbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFuZCB0aGUgcGFzc2VkIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gKiBUaGlzIHV0aWxpdHkgaXMgYW4gYXN5bmMvYXdhaXQtZnJpZW5kbHkgdmVyc2lvbiBvZiBgc2V0VGltZW91dGAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZW91dChtczogbnVtYmVyKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwgIi8vIEB0cy1pZ25vcmVcbnRyeXtzZWxmWyd3b3JrYm94OnN0cmF0ZWdpZXM6Ny4wLjAnXSYmXygpfWNhdGNoKGUpe30iLCAiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQge2NhY2hlTWF0Y2hJZ25vcmVQYXJhbXN9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU1hdGNoSWdub3JlUGFyYW1zLmpzJztcbmltcG9ydCB7RGVmZXJyZWR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9EZWZlcnJlZC5qcyc7XG5pbXBvcnQge2V4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0IHtnZXRGcmllbmRseVVSTH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7dGltZW91dH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL3RpbWVvdXQuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHtcbiAgSGFuZGxlckNhbGxiYWNrT3B0aW9ucyxcbiAgTWFwTGlrZU9iamVjdCxcbiAgV29ya2JveFBsdWdpbixcbiAgV29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW0sXG59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5cbmltcG9ydCB7U3RyYXRlZ3l9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcblxuZnVuY3Rpb24gdG9SZXF1ZXN0KGlucHV0OiBSZXF1ZXN0SW5mbykge1xuICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/IG5ldyBSZXF1ZXN0KGlucHV0KSA6IGlucHV0O1xufVxuXG4vKipcbiAqIEEgY2xhc3MgY3JlYXRlZCBldmVyeSB0aW1lIGEgU3RyYXRlZ3kgaW5zdGFuY2UgaW5zdGFuY2UgY2FsbHNcbiAqIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlfSBvclxuICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGVBbGx9IHRoYXQgd3JhcHMgYWxsIGZldGNoIGFuZFxuICogY2FjaGUgYWN0aW9ucyBhcm91bmQgcGx1Z2luIGNhbGxiYWNrcyBhbmQga2VlcHMgdHJhY2sgb2Ygd2hlbiB0aGUgc3RyYXRlZ3lcbiAqIGlzIFwiZG9uZVwiIChpLmUuIGFsbCBhZGRlZCBgZXZlbnQud2FpdFVudGlsKClgIHByb21pc2VzIGhhdmUgcmVzb2x2ZWQpLlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgU3RyYXRlZ3lIYW5kbGVyIHtcbiAgcHVibGljIHJlcXVlc3QhOiBSZXF1ZXN0O1xuICBwdWJsaWMgdXJsPzogVVJMO1xuICBwdWJsaWMgZXZlbnQ6IEV4dGVuZGFibGVFdmVudDtcbiAgcHVibGljIHBhcmFtcz86IGFueTtcblxuICBwcml2YXRlIF9jYWNoZUtleXM6IFJlY29yZDxzdHJpbmcsIFJlcXVlc3Q+ID0ge307XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfc3RyYXRlZ3k6IFN0cmF0ZWd5O1xuICBwcml2YXRlIHJlYWRvbmx5IF9leHRlbmRMaWZldGltZVByb21pc2VzOiBQcm9taXNlPGFueT5bXTtcbiAgcHJpdmF0ZSByZWFkb25seSBfaGFuZGxlckRlZmVycmVkOiBEZWZlcnJlZDxhbnk+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9wbHVnaW5zOiBXb3JrYm94UGx1Z2luW107XG4gIHByaXZhdGUgcmVhZG9ubHkgX3BsdWdpblN0YXRlTWFwOiBNYXA8V29ya2JveFBsdWdpbiwgTWFwTGlrZU9iamVjdD47XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXNzZWQgc3RyYXRlZ3kgYW5kIGV2ZW50XG4gICAqIHRoYXQncyBoYW5kbGluZyB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogVGhlIGNvbnN0cnVjdG9yIGFsc28gaW5pdGlhbGl6ZXMgdGhlIHN0YXRlIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gZWFjaCBvZlxuICAgKiB0aGUgcGx1Z2lucyBoYW5kbGluZyB0aGlzIHJlcXVlc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5fSBzdHJhdGVneVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICogICAgIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlXG4gICAqICAgICB7QGxpbmsgd29ya2JveC1yb3V0aW5nfm1hdGNoQ2FsbGJhY2t9IChpZiBhcHBsaWNhYmxlKS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0cmF0ZWd5OiBTdHJhdGVneSwgb3B0aW9uczogSGFuZGxlckNhbGxiYWNrT3B0aW9ucykge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IHRoZSBzdHJhdGVneSBpcyBwZXJmb3JtaW5nIChwYXNzZWQgdG8gdGhlIHN0cmF0ZWd5J3NcbiAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgKiBAbmFtZSByZXF1ZXN0XG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHR5cGUge1JlcXVlc3R9XG4gICAgICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcmVxdWVzdC5cbiAgICAgKiBAbmFtZSBldmVudFxuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHtFeHRlbmRhYmxlRXZlbnR9XG4gICAgICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBBIGBVUkxgIGluc3RhbmNlIG9mIGByZXF1ZXN0LnVybGAgKGlmIHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAqIE5vdGU6IHRoZSBgdXJsYCBwYXJhbSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIHN0cmF0ZWd5IHdhcyBpbnZva2VkXG4gICAgICogZnJvbSBhIHdvcmtib3ggYFJvdXRlYCBvYmplY3QuXG4gICAgICogQG5hbWUgdXJsXG4gICAgICogQGluc3RhbmNlXG4gICAgICogQHR5cGUge1VSTHx1bmRlZmluZWR9XG4gICAgICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBBIGBwYXJhbWAgdmFsdWUgKGlmIHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAqIE5vdGU6IHRoZSBgcGFyYW1gIHBhcmFtIHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgc3RyYXRlZ3kgd2FzIGludm9rZWRcbiAgICAgKiBmcm9tIGEgd29ya2JveCBgUm91dGVgIG9iamVjdCBhbmQgdGhlXG4gICAgICoge0BsaW5rIHdvcmtib3gtcm91dGluZ35tYXRjaENhbGxiYWNrfSByZXR1cm5lZFxuICAgICAqIGEgdHJ1dGh5IHZhbHVlIChpdCB3aWxsIGJlIHRoYXQgdmFsdWUpLlxuICAgICAqIEBuYW1lIHBhcmFtc1xuICAgICAqIEBpbnN0YW5jZVxuICAgICAqIEB0eXBlIHsqfHVuZGVmaW5lZH1cbiAgICAgKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2Uob3B0aW9ucy5ldmVudCwgRXh0ZW5kYWJsZUV2ZW50LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6ICdTdHJhdGVneUhhbmRsZXInLFxuICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5ldmVudCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5ldmVudCA9IG9wdGlvbnMuZXZlbnQ7XG4gICAgdGhpcy5fc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICB0aGlzLl9oYW5kbGVyRGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcbiAgICB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzID0gW107XG5cbiAgICAvLyBDb3B5IHRoZSBwbHVnaW5zIGxpc3QgKHNpbmNlIGl0J3MgbXV0YWJsZSBvbiB0aGUgc3RyYXRlZ3kpLFxuICAgIC8vIHNvIGFueSBtdXRhdGlvbnMgZG9uJ3QgYWZmZWN0IHRoaXMgaGFuZGxlciBpbnN0YW5jZS5cbiAgICB0aGlzLl9wbHVnaW5zID0gWy4uLnN0cmF0ZWd5LnBsdWdpbnNdO1xuICAgIHRoaXMuX3BsdWdpblN0YXRlTWFwID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHRoaXMuX3BsdWdpbnMpIHtcbiAgICAgIHRoaXMuX3BsdWdpblN0YXRlTWFwLnNldChwbHVnaW4sIHt9KTtcbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50LndhaXRVbnRpbCh0aGlzLl9oYW5kbGVyRGVmZXJyZWQucHJvbWlzZSk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyBhIGdpdmVuIHJlcXVlc3QgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlIHBsdWdpbiBjYWxsYmFja1xuICAgKiBtZXRob2RzKSB1c2luZyB0aGUgYGZldGNoT3B0aW9uc2AgKGZvciBub24tbmF2aWdhdGlvbiByZXF1ZXN0cykgYW5kXG4gICAqIGBwbHVnaW5zYCBkZWZpbmVkIG9uIHRoZSBgU3RyYXRlZ3lgIG9iamVjdC5cbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICogLSBgcmVxdWVzdFdpbGxGZXRjaCgpYFxuICAgKiAtIGBmZXRjaERpZFN1Y2NlZWQoKWBcbiAgICogLSBgZmV0Y2hEaWRGYWlsKClgXG4gICAqXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGlucHV0IFRoZSBVUkwgb3IgcmVxdWVzdCB0byBmZXRjaC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBmZXRjaChpbnB1dDogUmVxdWVzdEluZm8pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3Qge2V2ZW50fSA9IHRoaXM7XG4gICAgbGV0IHJlcXVlc3Q6IFJlcXVlc3QgPSB0b1JlcXVlc3QoaW5wdXQpO1xuXG4gICAgaWYgKFxuICAgICAgcmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnICYmXG4gICAgICBldmVudCBpbnN0YW5jZW9mIEZldGNoRXZlbnQgJiZcbiAgICAgIGV2ZW50LnByZWxvYWRSZXNwb25zZVxuICAgICkge1xuICAgICAgY29uc3QgcG9zc2libGVQcmVsb2FkUmVzcG9uc2UgPSAoYXdhaXQgZXZlbnQucHJlbG9hZFJlc3BvbnNlKSBhc1xuICAgICAgICB8IFJlc3BvbnNlXG4gICAgICAgIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgICAgIGBVc2luZyBhIHByZWxvYWRlZCBuYXZpZ2F0aW9uIHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NzaWJsZVByZWxvYWRSZXNwb25zZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGZldGNoRGlkRmFpbCBwbHVnaW4sIHdlIG5lZWQgdG8gc2F2ZSBhIGNsb25lIG9mIHRoZVxuICAgIC8vIG9yaWdpbmFsIHJlcXVlc3QgYmVmb3JlIGl0J3MgZWl0aGVyIG1vZGlmaWVkIGJ5IGEgcmVxdWVzdFdpbGxGZXRjaFxuICAgIC8vIHBsdWdpbiBvciBiZWZvcmUgdGhlIG9yaWdpbmFsIHJlcXVlc3QncyBib2R5IGlzIGNvbnN1bWVkIHZpYSBmZXRjaCgpLlxuICAgIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IHRoaXMuaGFzQ2FsbGJhY2soJ2ZldGNoRGlkRmFpbCcpXG4gICAgICA/IHJlcXVlc3QuY2xvbmUoKVxuICAgICAgOiBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoY29uc3QgY2Igb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdyZXF1ZXN0V2lsbEZldGNoJykpIHtcbiAgICAgICAgcmVxdWVzdCA9IGF3YWl0IGNiKHtyZXF1ZXN0OiByZXF1ZXN0LmNsb25lKCksIGV2ZW50fSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCcsIHtcbiAgICAgICAgICB0aHJvd25FcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgcmVxdWVzdCBjYW4gYmUgYWx0ZXJlZCBieSBwbHVnaW5zIHdpdGggYHJlcXVlc3RXaWxsRmV0Y2hgIG1ha2luZ1xuICAgIC8vIHRoZSBvcmlnaW5hbCByZXF1ZXN0IChtb3N0IGxpa2VseSBmcm9tIGEgYGZldGNoYCBldmVudCkgZGlmZmVyZW50XG4gICAgLy8gZnJvbSB0aGUgUmVxdWVzdCB3ZSBtYWtlLiBQYXNzIGJvdGggdG8gYGZldGNoRGlkRmFpbGAgdG8gYWlkIGRlYnVnZ2luZy5cbiAgICBjb25zdCBwbHVnaW5GaWx0ZXJlZFJlcXVlc3Q6IFJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKCk7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGZldGNoUmVzcG9uc2U6IFJlc3BvbnNlO1xuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2XG4gICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIHJlcXVlc3QsXG4gICAgICAgIHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJyA/IHVuZGVmaW5lZCA6IHRoaXMuX3N0cmF0ZWd5LmZldGNoT3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICBgTmV0d29yayByZXF1ZXN0IGZvciBgICtcbiAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9JyByZXR1cm5lZCBhIHJlc3BvbnNlIHdpdGggYCArXG4gICAgICAgICAgICBgc3RhdHVzICcke2ZldGNoUmVzcG9uc2Uuc3RhdHVzfScuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2ZldGNoRGlkU3VjY2VlZCcpKSB7XG4gICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgcmVxdWVzdDogcGx1Z2luRmlsdGVyZWRSZXF1ZXN0LFxuICAgICAgICAgIHJlc3BvbnNlOiBmZXRjaFJlc3BvbnNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmZXRjaFJlc3BvbnNlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgIGBOZXR3b3JrIHJlcXVlc3QgZm9yIGAgK1xuICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nIHRocmV3IGFuIGVycm9yLmAsXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIGBvcmlnaW5hbFJlcXVlc3RgIHdpbGwgb25seSBleGlzdCBpZiBhIGBmZXRjaERpZEZhaWxgIGNhbGxiYWNrXG4gICAgICAvLyBpcyBiZWluZyB1c2VkIChzZWUgYWJvdmUpLlxuICAgICAgaWYgKG9yaWdpbmFsUmVxdWVzdCkge1xuICAgICAgICBhd2FpdCB0aGlzLnJ1bkNhbGxiYWNrcygnZmV0Y2hEaWRGYWlsJywge1xuICAgICAgICAgIGVycm9yOiBlcnJvciBhcyBFcnJvcixcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBvcmlnaW5hbFJlcXVlc3Q6IG9yaWdpbmFsUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICAgIHJlcXVlc3Q6IHBsdWdpbkZpbHRlcmVkUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxscyBgdGhpcy5mZXRjaCgpYCBhbmQgKGluIHRoZSBiYWNrZ3JvdW5kKSBydW5zIGB0aGlzLmNhY2hlUHV0KClgIG9uXG4gICAqIHRoZSByZXNwb25zZSBnZW5lcmF0ZWQgYnkgYHRoaXMuZmV0Y2goKWAuXG4gICAqXG4gICAqIFRoZSBjYWxsIHRvIGB0aGlzLmNhY2hlUHV0KClgIGF1dG9tYXRpY2FsbHkgaW52b2tlcyBgdGhpcy53YWl0VW50aWwoKWAsXG4gICAqIHNvIHlvdSBkbyBub3QgaGF2ZSB0byBtYW51YWxseSBjYWxsIGB3YWl0VW50aWwoKWAgb24gdGhlIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBpbnB1dCBUaGUgcmVxdWVzdCBvciBVUkwgdG8gZmV0Y2ggYW5kIGNhY2hlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIGZldGNoQW5kQ2FjaGVQdXQoaW5wdXQ6IFJlcXVlc3RJbmZvKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaChpbnB1dCk7XG4gICAgY29uc3QgcmVzcG9uc2VDbG9uZSA9IHJlc3BvbnNlLmNsb25lKCk7XG5cbiAgICB2b2lkIHRoaXMud2FpdFVudGlsKHRoaXMuY2FjaGVQdXQoaW5wdXQsIHJlc3BvbnNlQ2xvbmUpKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRjaGVzIGEgcmVxdWVzdCBmcm9tIHRoZSBjYWNoZSAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGUgcGx1Z2luXG4gICAqIGNhbGxiYWNrIG1ldGhvZHMpIHVzaW5nIHRoZSBgY2FjaGVOYW1lYCwgYG1hdGNoT3B0aW9uc2AsIGFuZCBgcGx1Z2luc2BcbiAgICogZGVmaW5lZCBvbiB0aGUgc3RyYXRlZ3kgb2JqZWN0LlxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIHBsdWdpbiBsaWZlY3ljbGUgbWV0aG9kcyBhcmUgaW52b2tlZCB3aGVuIHVzaW5nIHRoaXMgbWV0aG9kOlxuICAgKiAtIGNhY2hlS2V5V2lsbEJ5VXNlZCgpXG4gICAqIC0gY2FjaGVkUmVzcG9uc2VXaWxsQnlVc2VkKClcbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30ga2V5IFRoZSBSZXF1ZXN0IG9yIFVSTCB0byB1c2UgYXMgdGhlIGNhY2hlIGtleS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZXx1bmRlZmluZWQ+fSBBIG1hdGNoaW5nIHJlc3BvbnNlLCBpZiBmb3VuZC5cbiAgICovXG4gIGFzeW5jIGNhY2hlTWF0Y2goa2V5OiBSZXF1ZXN0SW5mbyk6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCByZXF1ZXN0OiBSZXF1ZXN0ID0gdG9SZXF1ZXN0KGtleSk7XG4gICAgbGV0IGNhY2hlZFJlc3BvbnNlOiBSZXNwb25zZSB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7Y2FjaGVOYW1lLCBtYXRjaE9wdGlvbnN9ID0gdGhpcy5fc3RyYXRlZ3k7XG5cbiAgICBjb25zdCBlZmZlY3RpdmVSZXF1ZXN0ID0gYXdhaXQgdGhpcy5nZXRDYWNoZUtleShyZXF1ZXN0LCAncmVhZCcpO1xuICAgIGNvbnN0IG11bHRpTWF0Y2hPcHRpb25zID0gey4uLm1hdGNoT3B0aW9ucywgLi4ue2NhY2hlTmFtZX19O1xuXG4gICAgY2FjaGVkUmVzcG9uc2UgPSBhd2FpdCBjYWNoZXMubWF0Y2goZWZmZWN0aXZlUmVxdWVzdCwgbXVsdGlNYXRjaE9wdGlvbnMpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChjYWNoZWRSZXNwb25zZSkge1xuICAgICAgICBsb2dnZXIuZGVidWcoYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluICcke2NhY2hlTmFtZX0nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBObyBjYWNoZWQgcmVzcG9uc2UgZm91bmQgaW4gJyR7Y2FjaGVOYW1lfScuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlZFJlc3BvbnNlV2lsbEJlVXNlZCcpKSB7XG4gICAgICBjYWNoZWRSZXNwb25zZSA9XG4gICAgICAgIChhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgY2FjaGVOYW1lLFxuICAgICAgICAgIG1hdGNoT3B0aW9ucyxcbiAgICAgICAgICBjYWNoZWRSZXNwb25zZSxcbiAgICAgICAgICByZXF1ZXN0OiBlZmZlY3RpdmVSZXF1ZXN0LFxuICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICB9KSkgfHwgdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkUmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogUHV0cyBhIHJlcXVlc3QvcmVzcG9uc2UgcGFpciBpbiB0aGUgY2FjaGUgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlXG4gICAqIHBsdWdpbiBjYWxsYmFjayBtZXRob2RzKSB1c2luZyB0aGUgYGNhY2hlTmFtZWAgYW5kIGBwbHVnaW5zYCBkZWZpbmVkIG9uXG4gICAqIHRoZSBzdHJhdGVneSBvYmplY3QuXG4gICAqXG4gICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAqIC0gY2FjaGVLZXlXaWxsQnlVc2VkKClcbiAgICogLSBjYWNoZVdpbGxVcGRhdGUoKVxuICAgKiAtIGNhY2hlRGlkVXBkYXRlKClcbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30ga2V5IFRoZSByZXF1ZXN0IG9yIFVSTCB0byB1c2UgYXMgdGhlIGNhY2hlIGtleS5cbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlIHRvIGNhY2hlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBgZmFsc2VgIGlmIGEgY2FjaGVXaWxsVXBkYXRlIGNhdXNlZCB0aGUgcmVzcG9uc2VcbiAgICogbm90IGJlIGNhY2hlZCwgYW5kIGB0cnVlYCBvdGhlcndpc2UuXG4gICAqL1xuICBhc3luYyBjYWNoZVB1dChrZXk6IFJlcXVlc3RJbmZvLCByZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByZXF1ZXN0OiBSZXF1ZXN0ID0gdG9SZXF1ZXN0KGtleSk7XG5cbiAgICAvLyBSdW4gaW4gdGhlIG5leHQgdGFzayB0byBhdm9pZCBibG9ja2luZyBvdGhlciBjYWNoZSByZWFkcy5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL1NlcnZpY2VXb3JrZXIvaXNzdWVzLzEzOTdcbiAgICBhd2FpdCB0aW1lb3V0KDApO1xuXG4gICAgY29uc3QgZWZmZWN0aXZlUmVxdWVzdCA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGVLZXkocmVxdWVzdCwgJ3dyaXRlJyk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kICYmIGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kICE9PSAnR0VUJykge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCcsIHtcbiAgICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKSxcbiAgICAgICAgICBtZXRob2Q6IGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjgxOFxuICAgICAgY29uc3QgdmFyeSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdWYXJ5Jyk7XG4gICAgICBpZiAodmFyeSkge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgYFRoZSByZXNwb25zZSBmb3IgJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9IGAgK1xuICAgICAgICAgICAgYGhhcyBhICdWYXJ5OiAke3Zhcnl9JyBoZWFkZXIuIGAgK1xuICAgICAgICAgICAgYENvbnNpZGVyIHNldHRpbmcgdGhlIHtpZ25vcmVWYXJ5OiB0cnVlfSBvcHRpb24gb24geW91ciBzdHJhdGVneSBgICtcbiAgICAgICAgICAgIGB0byBlbnN1cmUgY2FjaGUgbWF0Y2hpbmcgYW5kIGRlbGV0aW9uIHdvcmtzIGFzIGV4cGVjdGVkLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFxuICAgICAgICAgIGBDYW5ub3QgY2FjaGUgbm9uLWV4aXN0ZW50IHJlc3BvbnNlIGZvciBgICtcbiAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCl9Jy5gLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdjYWNoZS1wdXQtd2l0aC1uby1yZXNwb25zZScsIHtcbiAgICAgICAgdXJsOiBnZXRGcmllbmRseVVSTChlZmZlY3RpdmVSZXF1ZXN0LnVybCksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZVRvQ2FjaGUgPSBhd2FpdCB0aGlzLl9lbnN1cmVSZXNwb25zZVNhZmVUb0NhY2hlKHJlc3BvbnNlKTtcblxuICAgIGlmICghcmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgYFJlc3BvbnNlICcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nIGAgK1xuICAgICAgICAgICAgYHdpbGwgbm90IGJlIGNhY2hlZC5gLFxuICAgICAgICAgIHJlc3BvbnNlVG9DYWNoZSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB7Y2FjaGVOYW1lLCBtYXRjaE9wdGlvbnN9ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKGNhY2hlTmFtZSk7XG5cbiAgICBjb25zdCBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID0gdGhpcy5oYXNDYWxsYmFjaygnY2FjaGVEaWRVcGRhdGUnKTtcbiAgICBjb25zdCBvbGRSZXNwb25zZSA9IGhhc0NhY2hlVXBkYXRlQ2FsbGJhY2tcbiAgICAgID8gYXdhaXQgY2FjaGVNYXRjaElnbm9yZVBhcmFtcyhcbiAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IHRoZSBgX19XQl9SRVZJU0lPTl9fYCBwYXJhbSBpcyBhIHByZWNhY2hpbmdcbiAgICAgICAgICAvLyBmZWF0dXJlLiBDb25zaWRlciBpbnRvIHdheXMgdG8gb25seSBhZGQgdGhpcyBiZWhhdmlvciBpZiB1c2luZ1xuICAgICAgICAgIC8vIHByZWNhY2hpbmcuXG4gICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgZWZmZWN0aXZlUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICAgIFsnX19XQl9SRVZJU0lPTl9fJ10sXG4gICAgICAgICAgbWF0Y2hPcHRpb25zLFxuICAgICAgICApXG4gICAgICA6IG51bGw7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgICBgVXBkYXRpbmcgdGhlICcke2NhY2hlTmFtZX0nIGNhY2hlIHdpdGggYSBuZXcgUmVzcG9uc2UgYCArXG4gICAgICAgICAgYGZvciAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0uYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNhY2hlLnB1dChcbiAgICAgICAgZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgaGFzQ2FjaGVVcGRhdGVDYWxsYmFjayA/IHJlc3BvbnNlVG9DYWNoZS5jbG9uZSgpIDogcmVzcG9uc2VUb0NhY2hlLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9ET01FeGNlcHRpb24jZXhjZXB0aW9uLVF1b3RhRXhjZWVkZWRFcnJvclxuICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicpIHtcbiAgICAgICAgICBhd2FpdCBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZURpZFVwZGF0ZScpKSB7XG4gICAgICBhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgIGNhY2hlTmFtZSxcbiAgICAgICAgb2xkUmVzcG9uc2UsXG4gICAgICAgIG5ld1Jlc3BvbnNlOiByZXNwb25zZVRvQ2FjaGUuY2xvbmUoKSxcbiAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdGhlIGxpc3Qgb2YgcGx1Z2lucyBmb3IgdGhlIGBjYWNoZUtleVdpbGxCZVVzZWRgIGNhbGxiYWNrLCBhbmRcbiAgICogZXhlY3V0ZXMgYW55IG9mIHRob3NlIGNhbGxiYWNrcyBmb3VuZCBpbiBzZXF1ZW5jZS4gVGhlIGZpbmFsIGBSZXF1ZXN0YFxuICAgKiBvYmplY3QgcmV0dXJuZWQgYnkgdGhlIGxhc3QgcGx1Z2luIGlzIHRyZWF0ZWQgYXMgdGhlIGNhY2hlIGtleSBmb3IgY2FjaGVcbiAgICogcmVhZHMgYW5kL29yIHdyaXRlcy4gSWYgbm8gYGNhY2hlS2V5V2lsbEJlVXNlZGAgcGx1Z2luIGNhbGxiYWNrcyBoYXZlXG4gICAqIGJlZW4gcmVnaXN0ZXJlZCwgdGhlIHBhc3NlZCByZXF1ZXN0IGlzIHJldHVybmVkIHVubW9kaWZpZWRcbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVxdWVzdD59XG4gICAqL1xuICBhc3luYyBnZXRDYWNoZUtleShcbiAgICByZXF1ZXN0OiBSZXF1ZXN0LFxuICAgIG1vZGU6ICdyZWFkJyB8ICd3cml0ZScsXG4gICk6IFByb21pc2U8UmVxdWVzdD4ge1xuICAgIGNvbnN0IGtleSA9IGAke3JlcXVlc3QudXJsfSB8ICR7bW9kZX1gO1xuICAgIGlmICghdGhpcy5fY2FjaGVLZXlzW2tleV0pIHtcbiAgICAgIGxldCBlZmZlY3RpdmVSZXF1ZXN0ID0gcmVxdWVzdDtcblxuICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlS2V5V2lsbEJlVXNlZCcpKSB7XG4gICAgICAgIGVmZmVjdGl2ZVJlcXVlc3QgPSB0b1JlcXVlc3QoXG4gICAgICAgICAgYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgIC8vIHBhcmFtcyBoYXMgYSB0eXBlIGFueSBjYW4ndCBjaGFuZ2UgcmlnaHQgbm93LlxuICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jYWNoZUtleXNba2V5XSA9IGVmZmVjdGl2ZVJlcXVlc3Q7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jYWNoZUtleXNba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHN0cmF0ZWd5IGhhcyBhdCBsZWFzdCBvbmUgcGx1Z2luIHdpdGggdGhlIGdpdmVuXG4gICAqIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY2FsbGJhY2sgdG8gY2hlY2sgZm9yLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzQ2FsbGJhY2s8QyBleHRlbmRzIGtleW9mIFdvcmtib3hQbHVnaW4+KG5hbWU6IEMpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLl9zdHJhdGVneS5wbHVnaW5zKSB7XG4gICAgICBpZiAobmFtZSBpbiBwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIGFsbCBwbHVnaW4gY2FsbGJhY2tzIG1hdGNoaW5nIHRoZSBnaXZlbiBuYW1lLCBpbiBvcmRlciwgcGFzc2luZyB0aGVcbiAgICogZ2l2ZW4gcGFyYW0gb2JqZWN0IChtZXJnZWQgaXRoIHRoZSBjdXJyZW50IHBsdWdpbiBzdGF0ZSkgYXMgdGhlIG9ubHlcbiAgICogYXJndW1lbnQuXG4gICAqXG4gICAqIE5vdGU6IHNpbmNlIHRoaXMgbWV0aG9kIHJ1bnMgYWxsIHBsdWdpbnMsIGl0J3Mgbm90IHN1aXRhYmxlIGZvciBjYXNlc1xuICAgKiB3aGVyZSB0aGUgcmV0dXJuIHZhbHVlIG9mIGEgY2FsbGJhY2sgbmVlZHMgdG8gYmUgYXBwbGllZCBwcmlvciB0byBjYWxsaW5nXG4gICAqIHRoZSBuZXh0IGNhbGxiYWNrLiBTZWVcbiAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXIjaXRlcmF0ZUNhbGxiYWNrc31cbiAgICogYmVsb3cgZm9yIGhvdyB0byBoYW5kbGUgdGhhdCBjYXNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY2FsbGJhY2sgdG8gcnVuIHdpdGhpbiBlYWNoIHBsdWdpbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtIFRoZSBvYmplY3QgdG8gcGFzcyBhcyB0aGUgZmlyc3QgKGFuZCBvbmx5KSBwYXJhbVxuICAgKiAgICAgd2hlbiBleGVjdXRpbmcgZWFjaCBjYWxsYmFjay4gVGhpcyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCB0aGVcbiAgICogICAgIGN1cnJlbnQgcGx1Z2luIHN0YXRlIHByaW9yIHRvIGNhbGxiYWNrIGV4ZWN1dGlvbi5cbiAgICovXG4gIGFzeW5jIHJ1bkNhbGxiYWNrczxDIGV4dGVuZHMga2V5b2YgTm9uTnVsbGFibGU8V29ya2JveFBsdWdpbj4+KFxuICAgIG5hbWU6IEMsXG4gICAgcGFyYW06IE9taXQ8V29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ10sICdzdGF0ZSc+LFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcyhuYW1lKSkge1xuICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBub3Qgc3VyZSB3aHkgYGFueWAgaXMgbmVlZGVkLiBJdCBzZWVtcyBsaWtlXG4gICAgICAvLyB0aGlzIHNob3VsZCB3b3JrIHdpdGggYGFzIFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtW0NdYC5cbiAgICAgIGF3YWl0IGNhbGxiYWNrKHBhcmFtIGFzIGFueSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjY2VwdHMgYSBjYWxsYmFjayBhbmQgcmV0dXJucyBhbiBpdGVyYWJsZSBvZiBtYXRjaGluZyBwbHVnaW4gY2FsbGJhY2tzLFxuICAgKiB3aGVyZSBlYWNoIGNhbGxiYWNrIGlzIHdyYXBwZWQgd2l0aCB0aGUgY3VycmVudCBoYW5kbGVyIHN0YXRlIChpLmUuIHdoZW5cbiAgICogeW91IGNhbGwgZWFjaCBjYWxsYmFjaywgd2hhdGV2ZXIgb2JqZWN0IHBhcmFtZXRlciB5b3UgcGFzcyBpdCB3aWxsXG4gICAqIGJlIG1lcmdlZCB3aXRoIHRoZSBwbHVnaW4ncyBjdXJyZW50IHN0YXRlKS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgZm8gdGhlIGNhbGxiYWNrIHRvIHJ1blxuICAgKiBAcmV0dXJuIHtBcnJheTxGdW5jdGlvbj59XG4gICAqL1xuICAqaXRlcmF0ZUNhbGxiYWNrczxDIGV4dGVuZHMga2V5b2YgV29ya2JveFBsdWdpbj4oXG4gICAgbmFtZTogQyxcbiAgKTogR2VuZXJhdG9yPE5vbk51bGxhYmxlPFdvcmtib3hQbHVnaW5bQ10+PiB7XG4gICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fc3RyYXRlZ3kucGx1Z2lucykge1xuICAgICAgaWYgKHR5cGVvZiBwbHVnaW5bbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9wbHVnaW5TdGF0ZU1hcC5nZXQocGx1Z2luKTtcbiAgICAgICAgY29uc3Qgc3RhdGVmdWxDYWxsYmFjayA9IChcbiAgICAgICAgICBwYXJhbTogT21pdDxXb3JrYm94UGx1Z2luQ2FsbGJhY2tQYXJhbVtDXSwgJ3N0YXRlJz4sXG4gICAgICAgICkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZnVsUGFyYW0gPSB7Li4ucGFyYW0sIHN0YXRlfTtcblxuICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogbm90IHN1cmUgd2h5IGBhbnlgIGlzIG5lZWRlZC4gSXQgc2VlbXMgbGlrZVxuICAgICAgICAgIC8vIHRoaXMgc2hvdWxkIHdvcmsgd2l0aCBgYXMgV29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ11gLlxuICAgICAgICAgIHJldHVybiBwbHVnaW5bbmFtZV0hKHN0YXRlZnVsUGFyYW0gYXMgYW55KTtcbiAgICAgICAgfTtcbiAgICAgICAgeWllbGQgc3RhdGVmdWxDYWxsYmFjayBhcyBOb25OdWxsYWJsZTxXb3JrYm94UGx1Z2luW0NdPjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHByb21pc2UgdG8gdGhlXG4gICAqIFtleHRlbmQgbGlmZXRpbWUgcHJvbWlzZXNde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNleHRlbmRhYmxlZXZlbnQtZXh0ZW5kLWxpZmV0aW1lLXByb21pc2VzfVxuICAgKiBvZiB0aGUgZXZlbnQgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZSByZXF1ZXN0IGJlaW5nIGhhbmRsZWQgKHVzdWFsbHkgYVxuICAgKiBgRmV0Y2hFdmVudGApLlxuICAgKlxuICAgKiBOb3RlOiB5b3UgY2FuIGF3YWl0XG4gICAqIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfmRvbmVXYWl0aW5nfVxuICAgKiB0byBrbm93IHdoZW4gYWxsIGFkZGVkIHByb21pc2VzIGhhdmUgc2V0dGxlZC5cbiAgICpcbiAgICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlIEEgcHJvbWlzZSB0byBhZGQgdG8gdGhlIGV4dGVuZCBsaWZldGltZSBwcm9taXNlc1xuICAgKiAgICAgb2YgdGhlIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgKi9cbiAgd2FpdFVudGlsPFQ+KHByb21pc2U6IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCBwcm9taXNlcyBwYXNzZWQgdG9cbiAgICoge0BsaW5rIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ+d2FpdFVudGlsfVxuICAgKiBoYXZlIHNldHRsZWQuXG4gICAqXG4gICAqIE5vdGU6IGFueSB3b3JrIGRvbmUgYWZ0ZXIgYGRvbmVXYWl0aW5nKClgIHNldHRsZXMgc2hvdWxkIGJlIG1hbnVhbGx5XG4gICAqIHBhc3NlZCB0byBhbiBldmVudCdzIGB3YWl0VW50aWwoKWAgbWV0aG9kIChub3QgdGhpcyBoYW5kbGVyJ3NcbiAgICogYHdhaXRVbnRpbCgpYCBtZXRob2QpLCBvdGhlcndpc2UgdGhlIHNlcnZpY2Ugd29ya2VyIHRocmVhZCBteSBiZSBraWxsZWRcbiAgICogcHJpb3IgdG8geW91ciB3b3JrIGNvbXBsZXRpbmcuXG4gICAqL1xuICBhc3luYyBkb25lV2FpdGluZygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcHJvbWlzZTtcbiAgICB3aGlsZSAoKHByb21pc2UgPSB0aGlzLl9leHRlbmRMaWZldGltZVByb21pc2VzLnNoaWZ0KCkpKSB7XG4gICAgICBhd2FpdCBwcm9taXNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBydW5uaW5nIHRoZSBzdHJhdGVneSBhbmQgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgYW55IHBlbmRpbmdcbiAgICogYHdhaXRVbnRpbCgpYCBwcm9taXNlcy5cbiAgICovXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5faGFuZGxlckRlZmVycmVkLnJlc29sdmUobnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBjYWxsIGNhY2hlV2lsbFVwZGF0ZSBvbiB0aGUgYXZhaWxhYmxlIHBsdWdpbnMgKG9yIHVzZVxuICAgKiBzdGF0dXMgPT09IDIwMCkgdG8gZGV0ZXJtaW5lIGlmIHRoZSBSZXNwb25zZSBpcyBzYWZlIGFuZCB2YWxpZCB0byBjYWNoZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3RcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBfZW5zdXJlUmVzcG9uc2VTYWZlVG9DYWNoZShcbiAgICByZXNwb25zZTogUmVzcG9uc2UsXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+IHtcbiAgICBsZXQgcmVzcG9uc2VUb0NhY2hlOiBSZXNwb25zZSB8IHVuZGVmaW5lZCA9IHJlc3BvbnNlO1xuICAgIGxldCBwbHVnaW5zVXNlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlV2lsbFVwZGF0ZScpKSB7XG4gICAgICByZXNwb25zZVRvQ2FjaGUgPVxuICAgICAgICAoYXdhaXQgY2FsbGJhY2soe1xuICAgICAgICAgIHJlcXVlc3Q6IHRoaXMucmVxdWVzdCxcbiAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VUb0NhY2hlLFxuICAgICAgICAgIGV2ZW50OiB0aGlzLmV2ZW50LFxuICAgICAgICB9KSkgfHwgdW5kZWZpbmVkO1xuICAgICAgcGx1Z2luc1VzZWQgPSB0cnVlO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBsdWdpbnNVc2VkKSB7XG4gICAgICBpZiAocmVzcG9uc2VUb0NhY2hlICYmIHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICByZXNwb25zZVRvQ2FjaGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlVG9DYWNoZS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oXG4gICAgICAgICAgICAgICAgYFRoZSByZXNwb25zZSBmb3IgJyR7dGhpcy5yZXF1ZXN0LnVybH0nIGAgK1xuICAgICAgICAgICAgICAgICAgYGlzIGFuIG9wYXF1ZSByZXNwb25zZS4gVGhlIGNhY2hpbmcgc3RyYXRlZ3kgdGhhdCB5b3UncmUgYCArXG4gICAgICAgICAgICAgICAgICBgdXNpbmcgd2lsbCBub3QgY2FjaGUgb3BhcXVlIHJlc3BvbnNlcyBieSBkZWZhdWx0LmAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoXG4gICAgICAgICAgICAgICAgYFRoZSByZXNwb25zZSBmb3IgJyR7dGhpcy5yZXF1ZXN0LnVybH0nIGAgK1xuICAgICAgICAgICAgICAgICAgYHJldHVybmVkIGEgc3RhdHVzIGNvZGUgb2YgJyR7cmVzcG9uc2Uuc3RhdHVzfScgYW5kIHdvbid0IGAgK1xuICAgICAgICAgICAgICAgICAgYGJlIGNhY2hlZCBhcyBhIHJlc3VsdC5gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZVRvQ2FjaGU7XG4gIH1cbn1cblxuZXhwb3J0IHtTdHJhdGVneUhhbmRsZXJ9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHtjYWNoZU5hbWVzfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQge2xvZ2dlcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQge2dldEZyaWVuZGx5VVJMfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHtcbiAgSGFuZGxlckNhbGxiYWNrT3B0aW9ucyxcbiAgUm91dGVIYW5kbGVyT2JqZWN0LFxuICBXb3JrYm94UGx1Z2luLFxufSBmcm9tICd3b3JrYm94LWNvcmUvdHlwZXMuanMnO1xuXG5pbXBvcnQge1N0cmF0ZWd5SGFuZGxlcn0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuXG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmF0ZWd5T3B0aW9ucyB7XG4gIGNhY2hlTmFtZT86IHN0cmluZztcbiAgcGx1Z2lucz86IFdvcmtib3hQbHVnaW5bXTtcbiAgZmV0Y2hPcHRpb25zPzogUmVxdWVzdEluaXQ7XG4gIG1hdGNoT3B0aW9ucz86IENhY2hlUXVlcnlPcHRpb25zO1xufVxuXG4vKipcbiAqIEFuIGFic3RyYWN0IGJhc2UgY2xhc3MgdGhhdCBhbGwgb3RoZXIgc3RyYXRlZ3kgY2xhc3NlcyBtdXN0IGV4dGVuZCBmcm9tOlxuICpcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuYWJzdHJhY3QgY2xhc3MgU3RyYXRlZ3kgaW1wbGVtZW50cyBSb3V0ZUhhbmRsZXJPYmplY3Qge1xuICBjYWNoZU5hbWU6IHN0cmluZztcbiAgcGx1Z2luczogV29ya2JveFBsdWdpbltdO1xuICBmZXRjaE9wdGlvbnM/OiBSZXF1ZXN0SW5pdDtcbiAgbWF0Y2hPcHRpb25zPzogQ2FjaGVRdWVyeU9wdGlvbnM7XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IF9oYW5kbGUoXG4gICAgcmVxdWVzdDogUmVxdWVzdCxcbiAgICBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIsXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBzdHJhdGVneSBhbmQgc2V0cyBhbGwgZG9jdW1lbnRlZCBvcHRpb25cbiAgICogcHJvcGVydGllcyBhcyBwdWJsaWMgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAgICpcbiAgICogTm90ZTogaWYgYSBjdXN0b20gc3RyYXRlZ3kgY2xhc3MgZXh0ZW5kcyB0aGUgYmFzZSBTdHJhdGVneSBjbGFzcyBhbmQgZG9lc1xuICAgKiBub3QgbmVlZCBtb3JlIHRoYW4gdGhlc2UgcHJvcGVydGllcywgaXQgZG9lcyBub3QgbmVlZCB0byBkZWZpbmUgaXRzIG93blxuICAgKiBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FjaGVOYW1lXSBDYWNoZSBuYW1lIHRvIHN0b3JlIGFuZCByZXRyaWV2ZVxuICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gdGhlIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBUaGVcbiAgICogW2BDYWNoZVF1ZXJ5T3B0aW9uc2Bde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zfVxuICAgKiBmb3IgYW55IGBjYWNoZS5tYXRjaCgpYCBvciBgY2FjaGUucHV0KClgIGNhbGxzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFN0cmF0ZWd5T3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gdGhlIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICoge0BsaW5rIHdvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdFxuICAgICAqIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB1c2VkIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7QXJyYXk8T2JqZWN0Pn1cbiAgICAgKi9cbiAgICB0aGlzLnBsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnMgfHwgW107XG4gICAgLyoqXG4gICAgICogVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiBbYGluaXRgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzfVxuICAgICAqIG9mIGFsbCBmZXRjaCgpIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5mZXRjaE9wdGlvbnMgPSBvcHRpb25zLmZldGNoT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBUaGVcbiAgICAgKiBbYENhY2hlUXVlcnlPcHRpb25zYF17QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnN9XG4gICAgICogZm9yIGFueSBgY2FjaGUubWF0Y2goKWAgb3IgYGNhY2hlLnB1dCgpYCBjYWxscyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMubWF0Y2hPcHRpb25zID0gb3B0aW9ucy5tYXRjaE9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHJlcXVlc3Qgc3RyYXRlZ3kgYW5kIHJldHVybnMgYSBgUHJvbWlzZWAgdGhhdCB3aWxsIHJlc29sdmUgd2l0aFxuICAgKiBhIGBSZXNwb25zZWAsIGludm9raW5nIGFsbCByZWxldmFudCBwbHVnaW4gY2FsbGJhY2tzLlxuICAgKlxuICAgKiBXaGVuIGEgc3RyYXRlZ3kgaW5zdGFuY2UgaXMgcmVnaXN0ZXJlZCB3aXRoIGEgV29ya2JveFxuICAgKiB7QGxpbmsgd29ya2JveC1yb3V0aW5nLlJvdXRlfSwgdGhpcyBtZXRob2QgaXMgYXV0b21hdGljYWxseVxuICAgKiBjYWxsZWQgd2hlbiB0aGUgcm91dGUgbWF0Y2hlcy5cbiAgICpcbiAgICogQWx0ZXJuYXRpdmVseSwgdGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgaW4gYSBzdGFuZGFsb25lIGBGZXRjaEV2ZW50YFxuICAgKiBsaXN0ZW5lciBieSBwYXNzaW5nIGl0IHRvIGBldmVudC5yZXNwb25kV2l0aCgpYC5cbiAgICpcbiAgICogQHBhcmFtIHtGZXRjaEV2ZW50fE9iamVjdH0gb3B0aW9ucyBBIGBGZXRjaEV2ZW50YCBvciBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICogICAgIHByb3BlcnRpZXMgbGlzdGVkIGJlbG93LlxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICogICAgIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXVxuICAgKi9cbiAgaGFuZGxlKG9wdGlvbnM6IEZldGNoRXZlbnQgfCBIYW5kbGVyQ2FsbGJhY2tPcHRpb25zKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IFtyZXNwb25zZURvbmVdID0gdGhpcy5oYW5kbGVBbGwob3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRG9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1pbGFyIHRvIHtAbGluayB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlfSwgYnV0XG4gICAqIGluc3RlYWQgb2YganVzdCByZXR1cm5pbmcgYSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyB0byBhIGBSZXNwb25zZWAgaXRcbiAgICogaXQgd2lsbCByZXR1cm4gYW4gdHVwbGUgb2YgYFtyZXNwb25zZSwgZG9uZV1gIHByb21pc2VzLCB3aGVyZSB0aGUgZm9ybWVyXG4gICAqIChgcmVzcG9uc2VgKSBpcyBlcXVpdmFsZW50IHRvIHdoYXQgYGhhbmRsZSgpYCByZXR1cm5zLCBhbmQgdGhlIGxhdHRlciBpcyBhXG4gICAqIFByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgb25jZSBhbnkgcHJvbWlzZXMgdGhhdCB3ZXJlIGFkZGVkIHRvXG4gICAqIGBldmVudC53YWl0VW50aWwoKWAgYXMgcGFydCBvZiBwZXJmb3JtaW5nIHRoZSBzdHJhdGVneSBoYXZlIGNvbXBsZXRlZC5cbiAgICpcbiAgICogWW91IGNhbiBhd2FpdCB0aGUgYGRvbmVgIHByb21pc2UgdG8gZW5zdXJlIGFueSBleHRyYSB3b3JrIHBlcmZvcm1lZCBieVxuICAgKiB0aGUgc3RyYXRlZ3kgKHVzdWFsbHkgY2FjaGluZyByZXNwb25zZXMpIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7RmV0Y2hFdmVudHxPYmplY3R9IG9wdGlvbnMgQSBgRmV0Y2hFdmVudGAgb3IgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAqICAgICBwcm9wZXJ0aWVzIGxpc3RlZCBiZWxvdy5cbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAqICAgICByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLnBhcmFtc11cbiAgICogQHJldHVybiB7QXJyYXk8UHJvbWlzZT59IEEgdHVwbGUgb2YgW3Jlc3BvbnNlLCBkb25lXVxuICAgKiAgICAgcHJvbWlzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiB0aGUgcmVzcG9uc2UgcmVzb2x2ZXMgYXNcbiAgICogICAgIHdlbGwgYXMgd2hlbiB0aGUgaGFuZGxlciBoYXMgY29tcGxldGVkIGFsbCBpdHMgd29yay5cbiAgICovXG4gIGhhbmRsZUFsbChcbiAgICBvcHRpb25zOiBGZXRjaEV2ZW50IHwgSGFuZGxlckNhbGxiYWNrT3B0aW9ucyxcbiAgKTogW1Byb21pc2U8UmVzcG9uc2U+LCBQcm9taXNlPHZvaWQ+XSB7XG4gICAgLy8gQWxsb3cgZm9yIGZsZXhpYmxlIG9wdGlvbnMgdG8gYmUgcGFzc2VkLlxuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRmV0Y2hFdmVudCkge1xuICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgZXZlbnQ6IG9wdGlvbnMsXG4gICAgICAgIHJlcXVlc3Q6IG9wdGlvbnMucmVxdWVzdCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnQgPSBvcHRpb25zLmV2ZW50O1xuICAgIGNvbnN0IHJlcXVlc3QgPVxuICAgICAgdHlwZW9mIG9wdGlvbnMucmVxdWVzdCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBuZXcgUmVxdWVzdChvcHRpb25zLnJlcXVlc3QpXG4gICAgICAgIDogb3B0aW9ucy5yZXF1ZXN0O1xuICAgIGNvbnN0IHBhcmFtcyA9ICdwYXJhbXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnBhcmFtcyA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgU3RyYXRlZ3lIYW5kbGVyKHRoaXMsIHtldmVudCwgcmVxdWVzdCwgcGFyYW1zfSk7XG5cbiAgICBjb25zdCByZXNwb25zZURvbmUgPSB0aGlzLl9nZXRSZXNwb25zZShoYW5kbGVyLCByZXF1ZXN0LCBldmVudCk7XG4gICAgY29uc3QgaGFuZGxlckRvbmUgPSB0aGlzLl9hd2FpdENvbXBsZXRlKFxuICAgICAgcmVzcG9uc2VEb25lLFxuICAgICAgaGFuZGxlcixcbiAgICAgIHJlcXVlc3QsXG4gICAgICBldmVudCxcbiAgICApO1xuXG4gICAgLy8gUmV0dXJuIGFuIGFycmF5IG9mIHByb21pc2VzLCBzdWl0YWJsZSBmb3IgdXNlIHdpdGggUHJvbWlzZS5hbGwoKS5cbiAgICByZXR1cm4gW3Jlc3BvbnNlRG9uZSwgaGFuZGxlckRvbmVdO1xuICB9XG5cbiAgYXN5bmMgX2dldFJlc3BvbnNlKFxuICAgIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcixcbiAgICByZXF1ZXN0OiBSZXF1ZXN0LFxuICAgIGV2ZW50OiBFeHRlbmRhYmxlRXZlbnQsXG4gICk6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlcldpbGxTdGFydCcsIHtldmVudCwgcmVxdWVzdH0pO1xuXG4gICAgbGV0IHJlc3BvbnNlOiBSZXNwb25zZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgICAvLyBUaGUgXCJvZmZpY2lhbFwiIFN0cmF0ZWd5IHN1YmNsYXNzZXMgYWxsIHRocm93IHRoaXMgZXJyb3IgYXV0b21hdGljYWxseSxcbiAgICAgIC8vIGJ1dCBpbiBjYXNlIGEgdGhpcmQtcGFydHkgU3RyYXRlZ3kgZG9lc24ndCwgZW5zdXJlIHRoYXQgd2UgaGF2ZSBhXG4gICAgICAvLyBjb25zaXN0ZW50IGZhaWx1cmUgd2hlbiB0aGVyZSdzIG5vIHJlc3BvbnNlIG9yIGFuIGVycm9yIHJlc3BvbnNlLlxuICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywge3VybDogcmVxdWVzdC51cmx9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBoYW5kbGVyLml0ZXJhdGVDYWxsYmFja3MoJ2hhbmRsZXJEaWRFcnJvcicpKSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFjayh7ZXJyb3IsIGV2ZW50LCByZXF1ZXN0fSk7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgIGBXaGlsZSByZXNwb25kaW5nIHRvICcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nLCBgICtcbiAgICAgICAgICAgIGBhbiAke1xuICAgICAgICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IudG9TdHJpbmcoKSA6ICcnXG4gICAgICAgICAgICB9IGVycm9yIG9jY3VycmVkLiBVc2luZyBhIGZhbGxiYWNrIHJlc3BvbnNlIHByb3ZpZGVkIGJ5IGAgK1xuICAgICAgICAgICAgYGEgaGFuZGxlckRpZEVycm9yIHBsdWdpbi5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgaGFuZGxlci5pdGVyYXRlQ2FsbGJhY2tzKCdoYW5kbGVyV2lsbFJlc3BvbmQnKSkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFjayh7ZXZlbnQsIHJlcXVlc3QsIHJlc3BvbnNlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgYXN5bmMgX2F3YWl0Q29tcGxldGUoXG4gICAgcmVzcG9uc2VEb25lOiBQcm9taXNlPFJlc3BvbnNlPixcbiAgICBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIsXG4gICAgcmVxdWVzdDogUmVxdWVzdCxcbiAgICBldmVudDogRXh0ZW5kYWJsZUV2ZW50LFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgbGV0IGVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2VEb25lO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZ25vcmUgZXJyb3JzLCBhcyByZXNwb25zZSBlcnJvcnMgc2hvdWxkIGJlIGNhdWdodCB2aWEgdGhlIGByZXNwb25zZWBcbiAgICAgIC8vIHByb21pc2UgYWJvdmUuIFRoZSBgZG9uZWAgcHJvbWlzZSB3aWxsIG9ubHkgdGhyb3cgZm9yIGVycm9ycyBpblxuICAgICAgLy8gcHJvbWlzZXMgcGFzc2VkIHRvIGBoYW5kbGVyLndhaXRVbnRpbCgpYC5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgaGFuZGxlci5ydW5DYWxsYmFja3MoJ2hhbmRsZXJEaWRSZXNwb25kJywge1xuICAgICAgICBldmVudCxcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGhhbmRsZXIuZG9uZVdhaXRpbmcoKTtcbiAgICB9IGNhdGNoICh3YWl0VW50aWxFcnJvcikge1xuICAgICAgaWYgKHdhaXRVbnRpbEVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSB3YWl0VW50aWxFcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlckRpZENvbXBsZXRlJywge1xuICAgICAgZXZlbnQsXG4gICAgICByZXF1ZXN0LFxuICAgICAgcmVzcG9uc2UsXG4gICAgICBlcnJvcjogZXJyb3IgYXMgRXJyb3IsXG4gICAgfSk7XG4gICAgaGFuZGxlci5kZXN0cm95KCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1N0cmF0ZWd5fTtcblxuLyoqXG4gKiBDbGFzc2VzIGV4dGVuZGluZyB0aGUgYFN0cmF0ZWd5YCBiYXNlZCBjbGFzcyBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kLFxuICogYW5kIGxldmVyYWdlIHRoZSB7QGxpbmsgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn1cbiAqIGFyZyB0byBwZXJmb3JtIGFsbCBmZXRjaGluZyBhbmQgY2FjaGUgbG9naWMsIHdoaWNoIHdpbGwgZW5zdXJlIGFsbCByZWxldmFudFxuICogY2FjaGUsIGNhY2hlIG9wdGlvbnMsIGZldGNoIG9wdGlvbnMgYW5kIHBsdWdpbnMgYXJlIHVzZWQgKHBlciB0aGUgY3VycmVudFxuICogc3RyYXRlZ3kgaW5zdGFuY2UpLlxuICpcbiAqIEBuYW1lIF9oYW5kbGVcbiAqIEBpbnN0YW5jZVxuICogQGFic3RyYWN0XG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyXG4gKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAqXG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKi9cbiIsICIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5cbmltcG9ydCB7bG9nZ2VyfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7Z2V0RnJpZW5kbHlVUkx9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzID0ge1xuICBzdHJhdGVneVN0YXJ0OiAoc3RyYXRlZ3lOYW1lOiBzdHJpbmcsIHJlcXVlc3Q6IFJlcXVlc3QpOiBzdHJpbmcgPT5cbiAgICBgVXNpbmcgJHtzdHJhdGVneU5hbWV9IHRvIHJlc3BvbmQgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgLFxuICBwcmludEZpbmFsUmVzcG9uc2U6IChyZXNwb25zZT86IFJlc3BvbnNlKTogdm9pZCA9PiB7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFZpZXcgdGhlIGZpbmFsIHJlc3BvbnNlIGhlcmUuYCk7XG4gICAgICBsb2dnZXIubG9nKHJlc3BvbnNlIHx8ICdbTm8gcmVzcG9uc2UgcmV0dXJuZWRdJyk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG4gIH0sXG59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQge1N0cmF0ZWd5fSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7U3RyYXRlZ3lIYW5kbGVyfSBmcm9tICcuL1N0cmF0ZWd5SGFuZGxlci5qcyc7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBbY2FjaGUtZmlyc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jY2FjaGUtZmlyc3QtZmFsbGluZy1iYWNrLXRvLW5ldHdvcmspXG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIEEgY2FjaGUgZmlyc3Qgc3RyYXRlZ3kgaXMgdXNlZnVsIGZvciBhc3NldHMgdGhhdCBoYXZlIGJlZW4gcmV2aXNpb25lZCxcbiAqIHN1Y2ggYXMgVVJMcyBsaWtlIGAvc3R5bGVzL2V4YW1wbGUuYThmNWYxLmNzc2AsIHNpbmNlIHRoZXlcbiAqIGNhbiBiZSBjYWNoZWQgZm9yIGxvbmcgcGVyaW9kcyBvZiB0aW1lLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyB3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiB3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgQ2FjaGVGaXJzdCBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0OiBSZXF1ZXN0LCBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgbG9ncyA9IFtdO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydCEuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgZnVuY05hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuXG4gICAgbGV0IGVycm9yOiBFcnJvciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLiBgICtcbiAgICAgICAgICAgIGBXaWxsIHJlc3BvbmQgd2l0aCBhIG5ldHdvcmsgcmVxdWVzdC5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmZldGNoQW5kQ2FjaGVQdXQocmVxdWVzdCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgbG9ncy5wdXNoKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ3MucHVzaChgVW5hYmxlIHRvIGdldCBhIHJlc3BvbnNlIGZyb20gdGhlIG5ldHdvcmsuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9ncy5wdXNoKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICBtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCksXG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICB9XG4gICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7dXJsOiByZXF1ZXN0LnVybCwgZXJyb3J9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB7Q2FjaGVGaXJzdH07XG4iLCAiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuXG5pbXBvcnQge1dvcmtib3hQbHVnaW59IGZyb20gJ3dvcmtib3gtY29yZS90eXBlcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcblxuZXhwb3J0IGNvbnN0IGNhY2hlT2tBbmRPcGFxdWVQbHVnaW46IFdvcmtib3hQbHVnaW4gPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgdmFsaWQgcmVzcG9uc2UgKHRvIGFsbG93IGNhY2hpbmcpIGlmIHRoZSBzdGF0dXMgaXMgMjAwIChPSykgb3JcbiAgICogMCAob3BhcXVlKS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gb3B0aW9ucy5yZXNwb25zZVxuICAgKiBAcmV0dXJuIHtSZXNwb25zZXxudWxsfVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FjaGVXaWxsVXBkYXRlOiBhc3luYyAoe3Jlc3BvbnNlfSkgPT4ge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDApIHtcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG59O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQge2NhY2hlT2tBbmRPcGFxdWVQbHVnaW59IGZyb20gJy4vcGx1Z2lucy9jYWNoZU9rQW5kT3BhcXVlUGx1Z2luLmpzJztcbmltcG9ydCB7U3RyYXRlZ3ksIFN0cmF0ZWd5T3B0aW9uc30gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQge1N0cmF0ZWd5SGFuZGxlcn0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5ldHdvcmtGaXJzdE9wdGlvbnMgZXh0ZW5kcyBTdHJhdGVneU9wdGlvbnMge1xuICBuZXR3b3JrVGltZW91dFNlY29uZHM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYVxuICogW25ldHdvcmsgZmlyc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jbmV0d29yay1maXJzdC1mYWxsaW5nLWJhY2stdG8tY2FjaGUpXG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoaXMgc3RyYXRlZ3kgd2lsbCBjYWNoZSByZXNwb25zZXMgd2l0aCBhIDIwMCBzdGF0dXMgY29kZSBhc1xuICogd2VsbCBhcyBbb3BhcXVlIHJlc3BvbnNlc10oaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kb2NzL3dvcmtib3gvY2FjaGluZy1yZXNvdXJjZXMtZHVyaW5nLXJ1bnRpbWUvI29wYXF1ZS1yZXNwb25zZXMpLlxuICogT3BhcXVlIHJlc3BvbnNlcyBhcmUgYXJlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyB3aGVyZSB0aGUgcmVzcG9uc2UgZG9lc24ndFxuICogc3VwcG9ydCBbQ09SU10oaHR0cHM6Ly9lbmFibGUtY29ycy5vcmcvKS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCBhbmQgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvd1xuICogYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIE5ldHdvcmtGaXJzdCBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBfbmV0d29ya1RpbWVvdXRTZWNvbmRzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHNdIElmIHNldCwgYW55IG5ldHdvcmsgcmVxdWVzdHNcbiAgICogdGhhdCBmYWlsIHRvIHJlc3BvbmQgd2l0aGluIHRoZSB0aW1lb3V0IHdpbGwgZmFsbGJhY2sgdG8gdGhlIGNhY2hlLlxuICAgKlxuICAgKiBUaGlzIG9wdGlvbiBjYW4gYmUgdXNlZCB0byBjb21iYXRcbiAgICogXCJbbGllLWZpXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3BlcmZvcm1hbmNlL3Bvb3ItY29ubmVjdGl2aXR5LyNsaWUtZml9XCJcbiAgICogc2NlbmFyaW9zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmV0d29ya0ZpcnN0T3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICAvLyBJZiB0aGlzIGluc3RhbmNlIGNvbnRhaW5zIG5vIHBsdWdpbnMgd2l0aCBhICdjYWNoZVdpbGxVcGRhdGUnIGNhbGxiYWNrLFxuICAgIC8vIHByZXBlbmQgdGhlIGBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luYCBwbHVnaW4gdG8gdGhlIHBsdWdpbnMgbGlzdC5cbiAgICBpZiAoIXRoaXMucGx1Z2lucy5zb21lKChwKSA9PiAnY2FjaGVXaWxsVXBkYXRlJyBpbiBwKSkge1xuICAgICAgdGhpcy5wbHVnaW5zLnVuc2hpZnQoY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbik7XG4gICAgfVxuXG4gICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzID0gb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHMgfHwgMDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICBhc3NlcnQhLmlzVHlwZSh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMsICdudW1iZXInLCB7XG4gICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgcGFyYW1OYW1lOiAnbmV0d29ya1RpbWVvdXRTZWNvbmRzJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICogQHBhcmFtIHt3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgKi9cbiAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0OiBSZXF1ZXN0LCBoYW5kbGVyOiBTdHJhdGVneUhhbmRsZXIpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29uc3QgbG9nczogYW55W10gPSBbXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAnbWFrZVJlcXVlc3QnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+W10gPSBbXTtcbiAgICBsZXQgdGltZW91dElkOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICBjb25zdCB7aWQsIHByb21pc2V9ID0gdGhpcy5fZ2V0VGltZW91dFByb21pc2Uoe3JlcXVlc3QsIGxvZ3MsIGhhbmRsZXJ9KTtcbiAgICAgIHRpbWVvdXRJZCA9IGlkO1xuICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXR3b3JrUHJvbWlzZSA9IHRoaXMuX2dldE5ldHdvcmtQcm9taXNlKHtcbiAgICAgIHRpbWVvdXRJZCxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBsb2dzLFxuICAgICAgaGFuZGxlcixcbiAgICB9KTtcblxuICAgIHByb21pc2VzLnB1c2gobmV0d29ya1Byb21pc2UpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLndhaXRVbnRpbChcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIFByb21pc2UucmFjZSgpIHdpbGwgcmVzb2x2ZSBhcyBzb29uIGFzIHRoZSBmaXJzdCBwcm9taXNlIHJlc29sdmVzLlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIChhd2FpdCBoYW5kbGVyLndhaXRVbnRpbChQcm9taXNlLnJhY2UocHJvbWlzZXMpKSkgfHxcbiAgICAgICAgICAvLyBJZiBQcm9taXNlLnJhY2UoKSByZXNvbHZlZCB3aXRoIG51bGwsIGl0IG1pZ2h0IGJlIGR1ZSB0byBhIG5ldHdvcmtcbiAgICAgICAgICAvLyB0aW1lb3V0ICsgYSBjYWNoZSBtaXNzLiBJZiB0aGF0IHdlcmUgdG8gaGFwcGVuLCB3ZSdkIHJhdGhlciB3YWl0IHVudGlsXG4gICAgICAgICAgLy8gdGhlIG5ldHdvcmtQcm9taXNlIHJlc29sdmVzIGluc3RlYWQgb2YgcmV0dXJuaW5nIG51bGwuXG4gICAgICAgICAgLy8gTm90ZSB0aGF0IGl0J3MgZmluZSB0byBhd2FpdCBhbiBhbHJlYWR5LXJlc29sdmVkIHByb21pc2UsIHNvIHdlIGRvbid0XG4gICAgICAgICAgLy8gaGF2ZSB0byBjaGVjayB0byBzZWUgaWYgaXQncyBzdGlsbCBcImluIGZsaWdodFwiLlxuICAgICAgICAgIChhd2FpdCBuZXR3b3JrUHJvbWlzZSlcbiAgICAgICAgKTtcbiAgICAgIH0pKCksXG4gICAgKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSxcbiAgICAgICk7XG4gICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHt1cmw6IHJlcXVlc3QudXJsfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zLmxvZ3MgQSByZWZlcmVuY2UgdG8gdGhlIGxvZ3MgYXJyYXlcbiAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgX2dldFRpbWVvdXRQcm9taXNlKHtcbiAgICByZXF1ZXN0LFxuICAgIGxvZ3MsXG4gICAgaGFuZGxlcixcbiAgfToge1xuICAgIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gICAgbG9nczogYW55W107XG4gICAgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyO1xuICB9KToge3Byb21pc2U6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+OyBpZD86IG51bWJlcn0ge1xuICAgIGxldCB0aW1lb3V0SWQ7XG4gICAgY29uc3QgdGltZW91dFByb21pc2U6IFByb21pc2U8UmVzcG9uc2UgfCB1bmRlZmluZWQ+ID0gbmV3IFByb21pc2UoXG4gICAgICAocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBvbk5ldHdvcmtUaW1lb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgICAgIGBUaW1pbmcgb3V0IHRoZSBuZXR3b3JrIHJlc3BvbnNlIGF0IGAgK1xuICAgICAgICAgICAgICAgIGAke3RoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kc30gc2Vjb25kcy5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCkpO1xuICAgICAgICB9O1xuICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgIG9uTmV0d29ya1RpbWVvdXQsXG4gICAgICAgICAgdGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMCxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9taXNlOiB0aW1lb3V0UHJvbWlzZSxcbiAgICAgIGlkOiB0aW1lb3V0SWQsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IG9wdGlvbnMudGltZW91dElkXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMubG9ncyBBIHJlZmVyZW5jZSB0byB0aGUgbG9ncyBBcnJheS5cbiAgICogQHBhcmFtIHtFdmVudH0gb3B0aW9ucy5ldmVudFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIF9nZXROZXR3b3JrUHJvbWlzZSh7XG4gICAgdGltZW91dElkLFxuICAgIHJlcXVlc3QsXG4gICAgbG9ncyxcbiAgICBoYW5kbGVyLFxuICB9OiB7XG4gICAgcmVxdWVzdDogUmVxdWVzdDtcbiAgICBsb2dzOiBhbnlbXTtcbiAgICB0aW1lb3V0SWQ/OiBudW1iZXI7XG4gICAgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyO1xuICB9KTogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD4ge1xuICAgIGxldCBlcnJvcjtcbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5mZXRjaEFuZENhY2hlUHV0KHJlcXVlc3QpO1xuICAgIH0gY2F0Y2ggKGZldGNoRXJyb3IpIHtcbiAgICAgIGlmIChmZXRjaEVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSBmZXRjaEVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgbG9ncy5wdXNoKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9ncy5wdXNoKFxuICAgICAgICAgIGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay4gV2lsbCByZXNwb25kIGAgK1xuICAgICAgICAgICAgYHdpdGggYSBjYWNoZWQgcmVzcG9uc2UuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXJyb3IgfHwgIXJlc3BvbnNlKSB7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgbG9ncy5wdXNoKFxuICAgICAgICAgICAgYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nYCArIGAgY2FjaGUuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ3MucHVzaChgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbn1cblxuZXhwb3J0IHtOZXR3b3JrRmlyc3R9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHt0aW1lb3V0fSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvdGltZW91dC5qcyc7XG5pbXBvcnQge1dvcmtib3hFcnJvcn0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5cbmltcG9ydCB7U3RyYXRlZ3ksIFN0cmF0ZWd5T3B0aW9uc30gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQge1N0cmF0ZWd5SGFuZGxlcn0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG5pbnRlcmZhY2UgTmV0d29ya09ubHlPcHRpb25zXG4gIGV4dGVuZHMgT21pdDxTdHJhdGVneU9wdGlvbnMsICdjYWNoZU5hbWUnIHwgJ21hdGNoT3B0aW9ucyc+IHtcbiAgbmV0d29ya1RpbWVvdXRTZWNvbmRzPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtuZXR3b3JrLW9ubHldKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L2NhY2hpbmctc3RyYXRlZ2llcy1vdmVydmlldy8jbmV0d29yay1vbmx5KVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byB0YWtlIGFkdmFudGFnZSBvZiBhbnlcbiAqIFtXb3JrYm94IHBsdWdpbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZG9jcy93b3JrYm94L3VzaW5nLXBsdWdpbnMvKS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCB0aGlzIHdpbGwgdGhyb3cgYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgd29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2Ygd29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIE5ldHdvcmtPbmx5IGV4dGVuZHMgU3RyYXRlZ3kge1xuICBwcml2YXRlIHJlYWRvbmx5IF9uZXR3b3JrVGltZW91dFNlY29uZHM6IG51bWJlcjtcblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgKiBvZiBbbm9uLW5hdmlnYXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTc5NilcbiAgICogYGZldGNoKClgIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm5ldHdvcmtUaW1lb3V0U2Vjb25kc10gSWYgc2V0LCBhbnkgbmV0d29yayByZXF1ZXN0c1xuICAgKiB0aGF0IGZhaWwgdG8gcmVzcG9uZCB3aXRoaW4gdGhlIHRpbWVvdXQgd2lsbCByZXN1bHQgaW4gYSBuZXR3b3JrIGVycm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogTmV0d29ya09ubHlPcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKTtcblxuICAgIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IG9wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgKiBAcGFyYW0ge3dvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBfaGFuZGxlKHJlcXVlc3Q6IFJlcXVlc3QsIGhhbmRsZXI6IFN0cmF0ZWd5SGFuZGxlcik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0IS5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICBmdW5jTmFtZTogJ19oYW5kbGUnLFxuICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBlcnJvcjogRXJyb3IgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHJlc3BvbnNlOiBSZXNwb25zZSB8IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxSZXNwb25zZSB8IHVuZGVmaW5lZD5bXSA9IFtcbiAgICAgICAgaGFuZGxlci5mZXRjaChyZXF1ZXN0KSxcbiAgICAgIF07XG5cbiAgICAgIGlmICh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMpIHtcbiAgICAgICAgY29uc3QgdGltZW91dFByb21pc2UgPSB0aW1lb3V0KFxuICAgICAgICAgIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyAqIDEwMDAsXG4gICAgICAgICkgYXMgUHJvbWlzZTx1bmRlZmluZWQ+O1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRpbWVvdXRQcm9taXNlKTtcbiAgICAgIH1cblxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UocHJvbWlzZXMpO1xuICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYFRpbWVkIG91dCB0aGUgbmV0d29yayByZXNwb25zZSBhZnRlciBgICtcbiAgICAgICAgICAgIGAke3RoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kc30gc2Vjb25kcy5gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoXG4gICAgICAgIG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSxcbiAgICAgICk7XG4gICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhgR290IHJlc3BvbnNlIGZyb20gbmV0d29yay5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlci5sb2coYFVuYWJsZSB0byBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrLmApO1xuICAgICAgfVxuICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywge3VybDogcmVxdWVzdC51cmwsIGVycm9yfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQge05ldHdvcmtPbmx5LCBOZXR3b3JrT25seU9wdGlvbnN9O1xuIiwgIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHtsb2dnZXJ9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHtXb3JrYm94RXJyb3J9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuXG5pbXBvcnQge2NhY2hlT2tBbmRPcGFxdWVQbHVnaW59IGZyb20gJy4vcGx1Z2lucy9jYWNoZU9rQW5kT3BhcXVlUGx1Z2luLmpzJztcbmltcG9ydCB7U3RyYXRlZ3ksIFN0cmF0ZWd5T3B0aW9uc30gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQge1N0cmF0ZWd5SGFuZGxlcn0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtzdGFsZS13aGlsZS1yZXZhbGlkYXRlXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXN0cmF0ZWdpZXMtb3ZlcnZpZXcvI3N0YWxlLXdoaWxlLXJldmFsaWRhdGUpXG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIFJlc291cmNlcyBhcmUgcmVxdWVzdGVkIGZyb20gYm90aCB0aGUgY2FjaGUgYW5kIHRoZSBuZXR3b3JrIGluIHBhcmFsbGVsLlxuICogVGhlIHN0cmF0ZWd5IHdpbGwgcmVzcG9uZCB3aXRoIHRoZSBjYWNoZWQgdmVyc2lvbiBpZiBhdmFpbGFibGUsIG90aGVyd2lzZVxuICogd2FpdCBmb3IgdGhlIG5ldHdvcmsgcmVzcG9uc2UuIFRoZSBjYWNoZSBpcyB1cGRhdGVkIHdpdGggdGhlIG5ldHdvcmsgcmVzcG9uc2VcbiAqIHdpdGggZWFjaCBzdWNjZXNzZnVsIHJlcXVlc3QuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBzdHJhdGVneSB3aWxsIGNhY2hlIHJlc3BvbnNlcyB3aXRoIGEgMjAwIHN0YXR1cyBjb2RlIGFzXG4gKiB3ZWxsIGFzIFtvcGFxdWUgcmVzcG9uc2VzXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RvY3Mvd29ya2JveC9jYWNoaW5nLXJlc291cmNlcy1kdXJpbmctcnVudGltZS8jb3BhcXVlLXJlc3BvbnNlcykuXG4gKiBPcGFxdWUgcmVzcG9uc2VzIGFyZSBjcm9zcy1vcmlnaW4gcmVxdWVzdHMgd2hlcmUgdGhlIHJlc3BvbnNlIGRvZXNuJ3RcbiAqIHN1cHBvcnQgW0NPUlNdKGh0dHBzOi8vZW5hYmxlLWNvcnMub3JnLykuXG4gKlxuICogSWYgdGhlIG5ldHdvcmsgcmVxdWVzdCBmYWlscywgYW5kIHRoZXJlIGlzIG5vIGNhY2hlIG1hdGNoLCB0aGlzIHdpbGwgdGhyb3dcbiAqIGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIHdvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAqIHtAbGluayB3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgKiBgZmV0Y2goKWAgcmVxdWVzdHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubWF0Y2hPcHRpb25zXSBbYENhY2hlUXVlcnlPcHRpb25zYF0oaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2RpY3RkZWYtY2FjaGVxdWVyeW9wdGlvbnMpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBTdHJhdGVneU9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgLy8gSWYgdGhpcyBpbnN0YW5jZSBjb250YWlucyBubyBwbHVnaW5zIHdpdGggYSAnY2FjaGVXaWxsVXBkYXRlJyBjYWxsYmFjayxcbiAgICAvLyBwcmVwZW5kIHRoZSBgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbmAgcGx1Z2luIHRvIHRoZSBwbHVnaW5zIGxpc3QuXG4gICAgaWYgKCF0aGlzLnBsdWdpbnMuc29tZSgocCkgPT4gJ2NhY2hlV2lsbFVwZGF0ZScgaW4gcCkpIHtcbiAgICAgIHRoaXMucGx1Z2lucy51bnNoaWZ0KGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAqIEBwYXJhbSB7d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIF9oYW5kbGUocmVxdWVzdDogUmVxdWVzdCwgaGFuZGxlcjogU3RyYXRlZ3lIYW5kbGVyKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgIGNvbnN0IGxvZ3MgPSBbXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQhLmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaEFuZENhY2hlUHJvbWlzZSA9IGhhbmRsZXIuZmV0Y2hBbmRDYWNoZVB1dChyZXF1ZXN0KS5jYXRjaCgoKSA9PiB7XG4gICAgICAvLyBTd2FsbG93IHRoaXMgZXJyb3IgYmVjYXVzZSBhICduby1yZXNwb25zZScgZXJyb3Igd2lsbCBiZSB0aHJvd24gaW5cbiAgICAgIC8vIG1haW4gaGFuZGxlciByZXR1cm4gZmxvdy4gVGhpcyB3aWxsIGJlIGluIHRoZSBgd2FpdFVudGlsKClgIGZsb3cuXG4gICAgfSk7XG4gICAgdm9pZCBoYW5kbGVyLndhaXRVbnRpbChmZXRjaEFuZENhY2hlUHJvbWlzZSk7XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG5cbiAgICBsZXQgZXJyb3I7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dzLnB1c2goXG4gICAgICAgICAgYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nYCArXG4gICAgICAgICAgICBgIGNhY2hlLiBXaWxsIHVwZGF0ZSB3aXRoIHRoZSBuZXR3b3JrIHJlc3BvbnNlIGluIHRoZSBiYWNrZ3JvdW5kLmAsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ3MucHVzaChcbiAgICAgICAgICBgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuIGAgK1xuICAgICAgICAgICAgYFdpbGwgd2FpdCBmb3IgdGhlIG5ldHdvcmsgcmVzcG9uc2UuYCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIE5PVEUocGhpbGlwd2FsdG9uKTogUmVhbGx5IGFubm95aW5nIHRoYXQgd2UgaGF2ZSB0byB0eXBlIGNhc3QgaGVyZS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yMDAwNlxuICAgICAgICByZXNwb25zZSA9IChhd2FpdCBmZXRjaEFuZENhY2hlUHJvbWlzZSkgYXMgUmVzcG9uc2UgfCB1bmRlZmluZWQ7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICBtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCksXG4gICAgICApO1xuICAgICAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgICAgICBsb2dnZXIubG9nKGxvZyk7XG4gICAgICB9XG4gICAgICBtZXNzYWdlcy5wcmludEZpbmFsUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7dXJsOiByZXF1ZXN0LnVybCwgZXJyb3J9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG5cbmV4cG9ydCB7U3RhbGVXaGlsZVJldmFsaWRhdGV9O1xuIiwgImltcG9ydCB7IGRlZmF1bHQgYXMgcGFyYW1zIH0gZnJvbSAnQHBhcmFtcydcbmltcG9ydCB7IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luIH0gZnJvbSAnd29ya2JveC1jYWNoZWFibGUtcmVzcG9uc2UnXG5pbXBvcnQgeyBFeHBpcmF0aW9uUGx1Z2luIH0gZnJvbSAnd29ya2JveC1leHBpcmF0aW9uJ1xuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSwgc2V0Q2F0Y2hIYW5kbGVyIH0gZnJvbSAnd29ya2JveC1yb3V0aW5nJ1xuaW1wb3J0IHsgQ2FjaGVGaXJzdCwgTmV0d29ya0ZpcnN0LCBOZXR3b3JrT25seSwgU3RhbGVXaGlsZVJldmFsaWRhdGUgfSBmcm9tICd3b3JrYm94LXN0cmF0ZWdpZXMnXG5cbnNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTID0gIXBhcmFtcy5kZWJ1Z1xuXG5jb25zdCBkZWJ1ZyA9ICguLi5kYXRhOiBhbnlbXSk6IHZvaWQgPT4ge1xuICAgIGlmIChzZWxmLl9fV0JfRElTQUJMRV9ERVZfTE9HUykge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zb2xlLmRlYnVnKCdbcHdhXScsIC4uLmRhdGEpO1xufVxuXG5jb25zdCBjYWNoZVByZWZpeCA9ICdodWdvLXB3YS0nXG5jb25zdCBmYWxsYmFja3NDYWNoZSA9IGNhY2hlUHJlZml4ICsgJ2ZhbGxiYWNrcydcbi8vIEZpbHRlciB0aGUgaW52YWxpZCBVUkxzLCBzdWNoIGFzIHRlbXBvcmFyeSBVUkxzIGdlbmVyYXRlZCBieSBIdWdvIFBvc3RQcm9ncmVzcy5cbmNvbnN0IHByZWNhY2hlcyA9IHBhcmFtcy5wcmVjYWNoZXMuZmlsdGVyKCh1cmwpID0+IHVybC5pbmRleE9mKCdfX2hfcHBfbDEnKSAhPT0gMClcbmRlYnVnKCdwcmVjYWNoZXMnLCBwcmVjYWNoZXMpXG5kZWJ1ZygnYnlwYXNzJywgcGFyYW1zLmJ5cGFzcylcblxuLy8gUmVnaXN0ZXIgcGFnZSByb3V0ZSB3aXRoIE5ldHdvcmtGaXJzdCBzdHJhdGVneS5cbi8vIFRoZXJlIHdpbGwgYmUgYSBwcm9ibGVtIHdpdGggQ2FjaGVGaXJzdCBvciBTdGFsZVdoaWxlUmV2YWxpZGF0ZSBzdHJhdGVneVxuLy8gaWYgdGhlIGNhY2hlZCBwYWdlIGxvYWRzIG5vIGxvbmdlciBleGlzdCBvciBleHBpcmVkIGFzc2V0cywgc3VjaCBhcyBDU1MgYW5kIEpTLlxucmVnaXN0ZXJSb3V0ZShcbiAgICAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJztcbiAgICB9LFxuICAgIG5ldyBOZXR3b3JrRmlyc3Qoe1xuICAgICAgICBjYWNoZU5hbWU6IGNhY2hlUHJlZml4ICsgJ3BhZ2VzJyxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgbmV3IENhY2hlYWJsZVJlc3BvbnNlUGx1Z2luKHtcbiAgICAgICAgICAgICAgICBzdGF0dXNlczogWzIwMF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KVxuKVxuXG4vLyBSZWdpc3RlciBhc3NldHMgcm91dGVzLlxuY29uc3QgYXNzZXRzID0gWydmb250JywgJ2ltYWdlJywgJ3NjcmlwdCcsICdzdHlsZSddXG5cbmNvbnN0IGlzQnlwYXNzID0gKHVybCkgPT4ge1xuICAgIGlmIChwYXJhbXMuYnlwYXNzICYmIHBhcmFtcy5ieXBhc3MuaW5jbHVkZXModXJsLmhyZWYpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbmlmIChwYXJhbXMuYnlwYXNzKSB7XG4gICAgcmVnaXN0ZXJSb3V0ZShcbiAgICAgICAgKHsgcmVxdWVzdCwgc2FtZU9yaWdpbiwgdXJsIH0pID0+IHtcbiAgICAgICAgICAgIGlmICghaXNCeXBhc3ModXJsKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBvcmlnaW5zXG4gICAgICAgICAgICBpZiAoc2FtZU9yaWdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBuZXcgTmV0d29ya09ubHkoKSxcbiAgICApO1xufVxuXG5mb3IgKGxldCBpIGluIGFzc2V0cykge1xuICAgIGNvbnN0IGtpbmQgPSBhc3NldHNbaV1cbiAgICBjb25zdCBjYWNoZSA9IHBhcmFtcy5jYWNoZXNba2luZF1cbiAgICAvLyBSZW1vdmUgdGhlIHRyYWlsaW5nIHNsYXNoIGZyb20gb3JpZ2luLlxuICAgIGNvbnN0IG9yaWdpbnMgPSBjYWNoZS5vcmlnaW5zID8gY2FjaGUub3JpZ2lucy5tYXAoKG9yaWdpbikgPT4gb3JpZ2luLnJlcGxhY2UoL1xcLyQvLCAnJykpIDogW11cbiAgICBjb25zdCBjYWNoZU5hbWUgPSBjYWNoZVByZWZpeCArIGtpbmQgKyAncydcbiAgICBsZXQgc3RyYXRlZ3kgPSBudWxsXG4gICAgbGV0IHBsdWdpbnMgPSBbXG4gICAgICAgIG5ldyBDYWNoZWFibGVSZXNwb25zZVBsdWdpbih7XG4gICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgRXhwaXJhdGlvblBsdWdpbih7XG4gICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiBjYWNoZS5tYXhfYWdlID8/IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICB9KVxuICAgIF1cbiAgICBzd2l0Y2ggKGNhY2hlLnN0cmF0ZWd5KSB7XG4gICAgICAgIGNhc2UgJ25ldHdvcmstZmlyc3QnOlxuICAgICAgICAgICAgc3RyYXRlZ3kgPSBuZXcgTmV0d29ya0ZpcnN0KHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWU6IGNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBwbHVnaW5zLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2NhY2hlLWZpcnN0JzpcbiAgICAgICAgICAgIHN0cmF0ZWd5ID0gbmV3IENhY2hlRmlyc3Qoe1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZTogY2FjaGVOYW1lLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHBsdWdpbnMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZSc6XG4gICAgICAgICAgICBzdHJhdGVneSA9IG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiBjYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIHN0cmF0ZWd5IGZvciBraW5kIFwiJHtraW5kfVwiOiBgICsgY2FjaGUuc3RyYXRlZ3kpXG4gICAgfVxuICAgIHJlZ2lzdGVyUm91dGUoXG4gICAgICAgICh7IHJlcXVlc3QsIHNhbWVPcmlnaW4sIHVybCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5kZXN0aW5hdGlvbiAhPT0ga2luZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBvcmlnaW5zXG4gICAgICAgICAgICBpZiAoc2FtZU9yaWdpbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcmlnaW5zICYmIG9yaWdpbnMuaW5jbHVkZXModXJsLm9yaWdpbi5yZXBsYWNlKC9cXC8kLywgJycpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlYnVnKGAke3VybH0gd2lsbCBub3QgYmUgY2FjaGVkLmApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc3RyYXRlZ3lcbiAgICApO1xufVxuXG4vLyBSZWdpc3RlciBkZWZhdWx0IGhhbmRsZXIuXG5yZWdpc3RlclJvdXRlKCgpID0+IHRydWUsIG5ldyBOZXR3b3JrT25seSgpKVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG4gICAgZXZlbnQud2FpdFVudGlsKFxuICAgICAgICBzZWxmLmNhY2hlc1xuICAgICAgICAgICAgLm9wZW4oZmFsbGJhY2tzQ2FjaGUpXG4gICAgICAgICAgICAudGhlbihjYWNoZSA9PiBjYWNoZS5hZGRBbGwocHJlY2FjaGVzKSlcbiAgICApO1xufSk7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyBvcHRpb25zID0+IHtcbiAgICBkZWJ1ZygnY2F0Y2ggaGFuZGxlcicsIG9wdGlvbnMucmVxdWVzdClcbiAgICBjb25zdCBkZXN0ID0gb3B0aW9ucy5yZXF1ZXN0LmRlc3RpbmF0aW9uXG4gICAgY29uc3QgdXJsID0gb3B0aW9ucy5yZXF1ZXN0LnVybFxuICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3BlbihmYWxsYmFja3NDYWNoZSlcblxuICAgIC8vIFJldHVybiB0aGUgY2FjaGVkIGl0ZW0gaWYgZm91bmQuXG4gICAgY29uc3QgY2FjaGVkID0gYXdhaXQgY2FjaGUubWF0Y2godXJsKVxuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFxuICAgIH1cblxuICAgIGlmIChkZXN0ID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICAgIGxldCBvZmZsaW5lOiBSZXNwb25zZSB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IGxhbmcgPSAnJ1xuICAgICAgICBsZXQgcGF0aHM6IHN0cmluZ1tdXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihwYXJhbXMuYmFzZVVSTCkgPT09IDApIHtcbiAgICAgICAgICAgIHBhdGhzID0gdXJsLnJlcGxhY2UocGFyYW1zLmJhc2VVUkwsICcnKS5zcGxpdCgnLycsIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRocyA9IChuZXcgVVJMKHVybCkpLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJy8nLCAxKVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRocy5sZW5ndGggPiAwICYmIHBhcmFtcy5sYW5ncy5pbmNsdWRlcyhwYXRoc1swXSkpIHtcbiAgICAgICAgICAgIGxhbmcgPSBwYXRoc1swXVxuICAgICAgICAgICAgY29uc3Qgb2ZmbGluZVVybCA9IGAke3BhcmFtcy5iYXNlVVJMfSR7bGFuZ30vb2ZmbGluZS9gXG4gICAgICAgICAgICBkZWJ1ZygnbG9hZGluZyBtdWx0aWxpbmd1YWwgb2ZmbGluZSBwYWdlJywgb2ZmbGluZVVybClcbiAgICAgICAgICAgIG9mZmxpbmUgPSBhd2FpdCBjYWNoZS5tYXRjaChvZmZsaW5lVXJsKVxuICAgICAgICAgICAgaWYgKG9mZmxpbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2ZmbGluZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2ZmbGluZVVybCA9IGAke3BhcmFtcy5iYXNlVVJMfW9mZmxpbmUvYFxuICAgICAgICBkZWJ1ZygnbG9hZGluZyB0aGUgZmFsbGJhY2sgb2ZmbGluZSBwYWdlJywgb2ZmbGluZVVybClcbiAgICAgICAgcmV0dXJuIChhd2FpdCBjYWNoZS5tYXRjaChvZmZsaW5lVXJsKSlcbiAgICAgICAgICAgIHx8IFJlc3BvbnNlLmVycm9yKClcbiAgICB9IGVsc2UgaWYgKGRlc3QgPT09ICdpbWFnZScgJiYgcGFyYW1zLm9mZmxpbmVfaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBjYWNoZS5tYXRjaChwYXJhbXMub2ZmbGluZV9pbWFnZSkpXG4gICAgICAgICAgICB8fCBSZXNwb25zZS5lcnJvcigpXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGEgZXJyb3IgcmVzcG9uc2UuXG4gICAgcmV0dXJuIFJlc3BvbnNlLmVycm9yKClcbn07XG5cbnNldENhdGNoSGFuZGxlcihoYW5kbGVyKVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUEseUJBQUMsU0FBVSxLQUFJLFFBQVMsQ0FBQyxHQUFFLFFBQVMsRUFBQyxNQUFPLEVBQUMsU0FBVSxRQUFRLFNBQVUsQ0FBQyxHQUFFLFVBQVcsZ0JBQWUsR0FBRSxPQUFRLEVBQUMsU0FBVSxRQUFRLFNBQVUsQ0FBQyxHQUFFLFVBQVcsZ0JBQWUsR0FBRSxRQUFTLEVBQUMsU0FBVSxRQUFRLFNBQVUsQ0FBQyxHQUFFLFVBQVcsZ0JBQWUsR0FBRSxPQUFRLEVBQUMsU0FBVSxRQUFRLFNBQVUsQ0FBQyxHQUFFLFVBQVcsZ0JBQWUsRUFBQyxHQUFFLE9BQVEsT0FBTSxPQUFRLENBQUMsTUFBSyxJQUFJLEdBQUUsZUFBZ0IsSUFBRyxXQUFZLENBQUMsZ0JBQWUsZ0JBQWUsZUFBYyw0Q0FBNEMsRUFBQzs7O0FDQ2pkLE1BQUc7QUFBQyxTQUFLLG9CQUFvQixLQUFHLEVBQUU7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TUEsV0FBVTtBQUN0QyxZQUFJLFNBQVM7QUFDVCxpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBRUEsWUFBTSxhQUFhLEdBQUcsZUFBTyxPQUFPO0FBQ3BDLFlBQU0scUNBQXFDLFVBQVU7QUFDckQsYUFBUSxNQUFNLE1BQU0sTUFBTSxVQUFVLEtBQzdCLFNBQVMsTUFBTTtBQUFBLElBQzFCLFdBQVcsU0FBUyxXQUFXLGVBQU8sZUFBZTtBQUNqRCxhQUFRLE1BQU0sTUFBTSxNQUFNLGVBQU8sYUFBYSxLQUN2QyxTQUFTLE1BQU07QUFBQSxJQUMxQjtBQUdBLFdBQU8sU0FBUyxNQUFNO0FBQUEsRUFDMUI7QUFFQSxrQkFBZ0IsT0FBTzsiLAogICJuYW1lcyI6IFsidGFyZ2V0IiwgImhhbmRsZXIiLCAiaGFuZGxlciIsICJoYW5kbGVyIiwgImhhbmRsZXIiLCAiaGFuZGxlciIsICJkZWZhdWx0Um91dGVyIiwgImhhbmRsZXIiLCAiZGVmYXVsdFJvdXRlciIsICJoYW5kbGVyIiwgImVycm9yIiwgIm1lc3NhZ2VzIiwgImhhbmRsZXIiLCAibWVzc2FnZXMiLCAiaGFuZGxlciIsICJtZXNzYWdlcyIsICJoYW5kbGVyIiwgIm1lc3NhZ2VzIiwgImhhbmRsZXIiLCAibWVzc2FnZXMiLCAib2ZmbGluZVVybCJdCn0K
