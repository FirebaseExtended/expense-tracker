"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = require("react");

require("@emotion/cache");

var emotionElement = require("./emotion-element-b9b9378e.cjs.prod.js");

require("@babel/runtime/helpers/extends"), require("@emotion/weak-memoize"), require("hoist-non-react-statics"), 
require("../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.prod.js");

var utils = require("@emotion/utils"), serialize = require("@emotion/serialize");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  return e && Object.keys(e).forEach((function(k) {
    if ("default" !== k) {
      var d = Object.getOwnPropertyDescriptor(e, k);
      Object.defineProperty(n, k, d.get ? d : {
        enumerable: !0,
        get: function() {
          return e[k];
        }
      });
    }
  })), n.default = e, Object.freeze(n);
}

var React__namespace = _interopNamespace(React), pkg = {
  name: "@emotion/react",
  version: "11.8.2",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  types: "types/index.d.ts",
  files: [ "src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.js", "macro.d.ts", "macro.js.flow" ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.13.10",
    "@emotion/babel-plugin": "^11.7.1",
    "@emotion/cache": "^11.7.1",
    "@emotion/serialize": "^1.0.2",
    "@emotion/utils": "^1.1.0",
    "@emotion/weak-memoize": "^0.2.5",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: !0
    },
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@babel/core": "^7.13.10",
    "@emotion/css": "11.7.1",
    "@emotion/css-prettifier": "1.0.1",
    "@emotion/server": "11.4.0",
    "@emotion/styled": "11.8.1",
    "@types/react": "^16.9.11",
    dtslint: "^4.2.1",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [ "./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js" ],
    umdName: "emotionReact"
  }
}, jsx = function(type, props) {
  var args = arguments;
  if (null == props || !emotionElement.hasOwnProperty.call(props, "css")) return React.createElement.apply(void 0, args);
  var argsLength = args.length, createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = emotionElement.Emotion, createElementArgArray[1] = emotionElement.createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) createElementArgArray[i] = args[i];
  return React.createElement.apply(null, createElementArgArray);
}, useInsertionEffect = React__namespace.useInsertionEffect ? React__namespace.useInsertionEffect : React.useLayoutEffect, warnedAboutCssPropForGlobal = !1, Global = emotionElement.withEmotionCache((function(props, cache) {
  var styles = props.styles, serialized = serialize.serializeStyles([ styles ], void 0, React.useContext(emotionElement.ThemeContext));
  if (!emotionElement.isBrowser) {
    for (var _ref, serializedNames = serialized.name, serializedStyles = serialized.styles, next = serialized.next; void 0 !== next; ) serializedNames += " " + next.name, 
    serializedStyles += next.styles, next = next.next;
    var shouldCache = !0 === cache.compat, rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);
    return shouldCache ? null : React.createElement("style", ((_ref = {})["data-emotion"] = cache.key + "-global " + serializedNames, 
    _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  }
  var sheetRef = React.useRef();
  return useInsertionEffect((function() {
    var key = cache.key + "-global", sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    }), rehydrating = !1, node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    return cache.sheet.tags.length && (sheet.before = cache.sheet.tags[0]), null !== node && (rehydrating = !0, 
    node.setAttribute("data-emotion", key), sheet.hydrate([ node ])), sheetRef.current = [ sheet, rehydrating ], 
    function() {
      sheet.flush();
    };
  }), [ cache ]), useInsertionEffect((function() {
    var sheetRefCurrent = sheetRef.current, sheet = sheetRefCurrent[0];
    if (sheetRefCurrent[1]) sheetRefCurrent[1] = !1; else {
      if (void 0 !== serialized.next && utils.insertStyles(cache, serialized.next, !0), 
      sheet.tags.length) {
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element, sheet.flush();
      }
      cache.insert("", serialized, sheet, !1);
    }
  }), [ cache, serialized.name ]), null;
}));

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
  return serialize.serializeStyles(args);
}

var keyframes = function() {
  var insertable = css.apply(void 0, arguments), name = "animation-" + insertable.name;
  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, classnames = function classnames(args) {
  for (var len = args.length, i = 0, cls = ""; i < len; i++) {
    var arg = args[i];
    if (null != arg) {
      var toAdd = void 0;
      switch (typeof arg) {
       case "boolean":
        break;

       case "object":
        if (Array.isArray(arg)) toAdd = classnames(arg); else for (var k in toAdd = "", 
        arg) arg[k] && k && (toAdd && (toAdd += " "), toAdd += k);
        break;

       default:
        toAdd = arg;
      }
      toAdd && (cls && (cls += " "), cls += toAdd);
    }
  }
  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [], rawClassName = utils.getRegisteredStyles(registered, registeredStyles, className);
  return registeredStyles.length < 2 ? className : rawClassName + css(registeredStyles);
}

var isBrowser, isJest, globalContext, globalKey, Insertion = function(_ref) {
  var _ref2, cache = _ref.cache, serializedArr = _ref.serializedArr, rules = emotionElement.useInsertionEffectMaybe((function() {
    for (var rules = "", i = 0; i < serializedArr.length; i++) {
      var res = utils.insertStyles(cache, serializedArr[i], !1);
      emotionElement.isBrowser || void 0 === res || (rules += res);
    }
    if (!emotionElement.isBrowser) return rules;
  }));
  return emotionElement.isBrowser || 0 === rules.length ? null : React.createElement("style", ((_ref2 = {})["data-emotion"] = cache.key + " " + serializedArr.map((function(serialized) {
    return serialized.name;
  })).join(" "), _ref2.dangerouslySetInnerHTML = {
    __html: rules
  }, _ref2.nonce = cache.sheet.nonce, _ref2));
}, ClassNames = emotionElement.withEmotionCache((function(props, cache) {
  var serializedArr = [], css = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
    var serialized = serialize.serializeStyles(args, cache.registered);
    return serializedArr.push(serialized), utils.registerStyles(cache, serialized, !1), 
    cache.key + "-" + serialized.name;
  }, content = {
    css: css,
    cx: function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
      return merge(cache.registered, css, classnames(args));
    },
    theme: React.useContext(emotionElement.ThemeContext)
  }, ele = props.children(content);
  return !0, React.createElement(React.Fragment, null, React.createElement(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
}));

exports.CacheProvider = emotionElement.CacheProvider, exports.ThemeContext = emotionElement.ThemeContext, 
exports.ThemeProvider = emotionElement.ThemeProvider, exports.__unsafe_useEmotionCache = emotionElement.__unsafe_useEmotionCache, 
exports.useTheme = emotionElement.useTheme, Object.defineProperty(exports, "withEmotionCache", {
  enumerable: !0,
  get: function() {
    return emotionElement.withEmotionCache;
  }
}), exports.withTheme = emotionElement.withTheme, exports.ClassNames = ClassNames, 
exports.Global = Global, exports.createElement = jsx, exports.css = css, exports.jsx = jsx, 
exports.keyframes = keyframes;
