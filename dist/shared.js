"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const UNKNOWN = "UNKNOWN";
const CONNECTED = "CONNECTED";
const DISCONNECTED = "DISCONNECTED";
const lifecycle = {
  UNKNOWN,
  CONNECTED,
  DISCONNECTED
};
const clientLifecycle = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UNKNOWN,
  CONNECTED,
  DISCONNECTED,
  lifecycle
}, Symbol.toStringTag, { value: "Module" }));
const JOINED = "JOINED";
const LEFT = "LEFT";
const DENIED_ROOM_PROTECTED = "DENIED_ROOM_PROTECTED";
const DENIED_ROOM_FULL = "DENIED_ROOM_FULL";
const DENIED_KICKED = "DENIED_KICKED";
const states = {
  JOINED,
  LEFT,
  DENIED_ROOM_PROTECTED,
  DENIED_ROOM_FULL,
  DENIED_KICKED
};
const clientStates = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JOINED,
  LEFT,
  DENIED_ROOM_PROTECTED,
  DENIED_ROOM_FULL,
  DENIED_KICKED,
  states
}, Symbol.toStringTag, { value: "Module" }));
const VIEWER = "VIEWER";
const CONTROLLER = "CONTROLLER";
const AGENDA = "AGENDA";
const MODERATOR = "MODERATOR";
const views = { VIEWER, CONTROLLER, AGENDA, MODERATOR };
const clientViews = __spreadValues({}, views);
const clientViews$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VIEWER,
  CONTROLLER,
  AGENDA,
  MODERATOR,
  views,
  default: clientViews
}, Symbol.toStringTag, { value: "Module" }));
const MMMSSF = "MMMSSF";
const MMMSS = "MMMSS";
const HHMMSSF = "HHMMSSF";
const HHMMSS$1 = "HHMMSS";
const DHMS = "DHMS";
const DHHMMSSF = "DHHMMSSF";
const DHHMMSS = "DHHMMSS";
const countdownFormats = { MMMSSF, MMMSS, HHMMSSF, HHMMSS: HHMMSS$1, DHMS, DHHMMSSF, DHHMMSS };
const DEFAULT_COUNTDOWN_FORMAT = HHMMSS$1;
const withDecimals = (val) => [MMMSSF, HHMMSSF, DHHMMSSF].includes(val);
const withHours = (val) => [HHMMSSF, HHMMSS$1, DHMS, DHHMMSSF, DHHMMSS].includes(val);
const withDays = (val) => [DHMS, DHHMMSSF, DHHMMSS].includes(val);
const countdownFormats$1 = __spreadProps(__spreadValues({}, countdownFormats), {
  DEFAULT_COUNTDOWN_FORMAT,
  countdownFormats,
  withDecimals,
  withHours,
  withDays
});
const countdownFormats$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MMMSSF,
  MMMSS,
  HHMMSSF,
  HHMMSS: HHMMSS$1,
  DHMS,
  DHHMMSSF,
  DHHMMSS,
  countdownFormats,
  DEFAULT_COUNTDOWN_FORMAT,
  withDecimals,
  withHours,
  withDays,
  default: countdownFormats$1
}, Symbol.toStringTag, { value: "Module" }));
const fonts = {
  INTER: "Inter",
  IBM_PLEX_MONO: "IBM Plex Mono",
  OPEN_SANS: "Open Sans",
  POPPINS: "Poppins",
  DSEG7: "DSEG7 7-Segment Display",
  DSEG14: "DSEG14 14-Segment Display",
  INDIE_FLOWER: "Indie Flower",
  BALSAMIQ_SANS: "Balsamiq Sans",
  BALOO_2: "Baloo 2",
  PRESS_START_2P: "Press Start 2P",
  CUTIVE_MONO: "Cutive Mono",
  UBUNTU_MONO: "Ubuntu Mono"
};
const fontWeights = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700
};
const fontSizes = {
  SM: "sm",
  MD: "md",
  LG: "lg"
};
const textStyles = {
  DEFAULT: "TEXT_STYLE_DEFAULT",
  OUTLINE: "TEXT_STYLE_OUTLINE",
  SHADOW: "TEXT_STYLE_SHADOW"
};
const textAlignments = {
  TOP: "top",
  CENTER: "center",
  BOTTOM: "bottom"
};
const backgrounds = {
  CUSTOM: "BG_CUSTOM",
  DEFAULT: "BG_DEFAULT",
  TRANSPARENT: "BG_TRANSPARENT",
  CROWD: "/assets/customize/background-crowd-1920.jpg",
  CITY: "/assets/customize/background-new-york-1920.jpg",
  STARS: "/assets/customize/background-stars-1920.jpg",
  PENCILS: "/assets/customize/background-pencils-1920.jpg",
  STREET: "/assets/customize/background-street-1920.jpg",
  BLUE: "/assets/customize/background-blue-1920.jpg",
  PARCHMENT: "/assets/customize/background-parchment-1920.jpg"
};
const headerFooterPositions = {
  HEADER: "HEADER",
  FOOTER: "FOOTER",
  NONE: "NONE"
};
const logoPosition = {
  TOP_LEFT: "topLeft",
  TOP_CENTER: "topCenter",
  TOP_RIGHT: "topRight",
  CENTER_LEFT: "centerLeft",
  CENTER: "center",
  CENTER_RIGHT: "centerRight",
  BOTTOM_LEFT: "bottomLeft",
  BOTTOM_CENTER: "bottomCenter",
  BOTTOM_RIGHT: "bottomRight"
};
const progressTypes = {
  BAR_TOP: "BAR_TOP",
  BAR_BOTTOM: "BAR_BOTTOM",
  RING: "RING",
  NONE: "NONE"
};
const themeNames = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
  LIGHT: "LIGHT",
  CONTRAST_LIGHT: "CONTRAST_LIGHT",
  CONTRAST_DARK: "CONTRAST_DARK",
  CANDY: "CANDY",
  MATRIX: "MATRIX",
  MONOKAI: "MONOKAI",
  GRUVBOX: "GRUVBOX"
};
const themeObjects = {
  [themeNames.CUSTOM]: {
    header: "#38BDF8",
    footer: "#38BDF8",
    countdown: "#FFFFFF",
    tod: "#FFFFFF",
    message: "#FFFFFF",
    progress: ["#22C55D", "#F59E0C", "#EF4444"],
    bg: "#1C1918",
    textStyle: textStyles.DEFAULT
  },
  [themeNames.DEFAULT]: {
    header: "#38BDF8",
    footer: "#38BDF8",
    countdown: "#FFFFFF",
    tod: "#FFFFFF",
    message: "#FFFFFF",
    progress: ["#22C55D", "#F59E0C", "#EF4444"],
    bg: "#1C1918",
    textStyle: textStyles.DEFAULT
  },
  [themeNames.LIGHT]: {
    header: "#0891B2",
    footer: "#0891B2",
    countdown: "#262626",
    tod: "#262626",
    message: "#262626",
    progress: ["#16A34A", "#F59E0B", "#DC2626"],
    bg: "#F5F5F5",
    textStyle: textStyles.DEFAULT
  },
  [themeNames.CONTRAST_DARK]: {
    header: "#FFFFFF",
    footer: "#FFFFFF",
    countdown: "#FFFFFF",
    tod: "#FFFFFF",
    message: "#FFFFFF",
    progress: ["#39E039", "#F2C420", "#FF3838"],
    bg: "#000000",
    textStyle: textStyles.DEFAULT
  },
  [themeNames.CONTRAST_LIGHT]: {
    header: "#000000",
    footer: "#000000",
    countdown: "#000000",
    tod: "#000000",
    message: "#000000",
    progress: ["#00C600", "#F5B206", "#EA0000"],
    bg: "#FFFFFF",
    textStyle: textStyles.DEFAULT
  },
  [themeNames.CANDY]: {
    header: "#81F1FD",
    footer: "#81F1FD",
    countdown: "#FFFFFF",
    tod: "#FFFFFF",
    message: "#FFFFFF",
    progress: ["#59EE85", "#FC9091", "#FA6CBD"],
    bg: "#24252F",
    textStyle: textStyles.DEFAULT
  },
  [themeNames.MATRIX]: {
    header: "#0D7C1C",
    footer: "#0D7C1C",
    countdown: "#71F080",
    tod: "#71F080",
    message: "#71F080",
    progress: ["#15BF2D", "#E4AC1D", "#B23D40"],
    bg: "#0D0D0D",
    textStyle: textStyles.DEFAULT
  },
  [themeNames.MONOKAI]: {
    header: "#A193EB",
    footer: "#A193EB",
    countdown: "#FDF8F2",
    tod: "#FDF8F2",
    message: "#FDF8F2",
    progress: ["#A0D774", "#FB8E62", "#FE577D"],
    bg: "#272528",
    textStyle: textStyles.DEFAULT
  },
  [themeNames.GRUVBOX]: {
    header: "#8EC07C",
    footer: "#8EC07C",
    countdown: "#EBDBB2",
    tod: "#EBDBB2",
    message: "#EBDBB2",
    progress: ["#B8BB26", "#FABD2F", "#FB4934"],
    bg: "#282828",
    textStyle: textStyles.DEFAULT
  }
};
const DEFAULT_TIMER_SIZE = 90;
const DEFAULT_MESSAGE_SIZE = 75;
const DEFAULT_LOGO_SIZE = 20;
const customizeOptions = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fonts,
  fontWeights,
  fontSizes,
  textStyles,
  textAlignments,
  backgrounds,
  headerFooterPositions,
  logoPosition,
  progressTypes,
  themeNames,
  themeObjects,
  DEFAULT_TIMER_SIZE,
  DEFAULT_MESSAGE_SIZE,
  DEFAULT_LOGO_SIZE
}, Symbol.toStringTag, { value: "Module" }));
const electronUid = "STAGETIMERUSER0001";
const electronUid$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: electronUid
}, Symbol.toStringTag, { value: "Module" }));
function getAugmentedNamespace(n) {
  var f = n.default;
  if (typeof f == "function") {
    var a = function() {
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d2 = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var jws$3 = {};
var safeBuffer = { exports: {} };
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$5 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(module2, exports2) {
  var buffer = require$$5;
  var Buffer2 = buffer.Buffer;
  function copyProps(src, dst) {
    for (var key in src) {
      dst[key] = src[key];
    }
  }
  if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
    module2.exports = buffer;
  } else {
    copyProps(buffer, exports2);
    exports2.Buffer = SafeBuffer;
  }
  function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer2(arg, encodingOrOffset, length);
  }
  SafeBuffer.prototype = Object.create(Buffer2.prototype);
  copyProps(Buffer2, SafeBuffer);
  SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      throw new TypeError("Argument must not be a number");
    }
    return Buffer2(arg, encodingOrOffset, length);
  };
  SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    var buf = Buffer2(size);
    if (fill !== void 0) {
      if (typeof encoding === "string") {
        buf.fill(fill, encoding);
      } else {
        buf.fill(fill);
      }
    } else {
      buf.fill(0);
    }
    return buf;
  };
  SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return Buffer2(size);
  };
  SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return buffer.SlowBuffer(size);
  };
})(safeBuffer, safeBuffer.exports);
var Buffer$7 = safeBuffer.exports.Buffer;
var Stream$2 = require$$5;
var util$3 = require$$5;
function DataStream$2(data) {
  this.buffer = null;
  this.writable = true;
  this.readable = true;
  if (!data) {
    this.buffer = Buffer$7.alloc(0);
    return this;
  }
  if (typeof data.pipe === "function") {
    this.buffer = Buffer$7.alloc(0);
    data.pipe(this);
    return this;
  }
  if (data.length || typeof data === "object") {
    this.buffer = data;
    this.writable = false;
    process.nextTick(function() {
      this.emit("end", data);
      this.readable = false;
      this.emit("close");
    }.bind(this));
    return this;
  }
  throw new TypeError("Unexpected data type (" + typeof data + ")");
}
util$3.inherits(DataStream$2, Stream$2);
DataStream$2.prototype.write = function write(data) {
  this.buffer = Buffer$7.concat([this.buffer, Buffer$7.from(data)]);
  this.emit("data", data);
};
DataStream$2.prototype.end = function end(data) {
  if (data)
    this.write(data);
  this.emit("end", data);
  this.emit("close");
  this.writable = false;
  this.readable = false;
};
var dataStream = DataStream$2;
var Buffer$6 = require$$5.Buffer;
var SlowBuffer = require$$5.SlowBuffer;
var bufferEqualConstantTime = bufferEq;
function bufferEq(a, b) {
  if (!Buffer$6.isBuffer(a) || !Buffer$6.isBuffer(b)) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }
  var c = 0;
  for (var i = 0; i < a.length; i++) {
    c |= a[i] ^ b[i];
  }
  return c === 0;
}
bufferEq.install = function() {
  Buffer$6.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
    return bufferEq(this, that);
  };
};
var origBufEqual = Buffer$6.prototype.equal;
var origSlowBufEqual = SlowBuffer.prototype.equal;
bufferEq.restore = function() {
  Buffer$6.prototype.equal = origBufEqual;
  SlowBuffer.prototype.equal = origSlowBufEqual;
};
function getParamSize(keySize) {
  var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
  return result;
}
var paramBytesForAlg = {
  ES256: getParamSize(256),
  ES384: getParamSize(384),
  ES512: getParamSize(521)
};
function getParamBytesForAlg$1(alg) {
  var paramBytes = paramBytesForAlg[alg];
  if (paramBytes) {
    return paramBytes;
  }
  throw new Error('Unknown algorithm "' + alg + '"');
}
var paramBytesForAlg_1 = getParamBytesForAlg$1;
var Buffer$5 = safeBuffer.exports.Buffer;
var getParamBytesForAlg = paramBytesForAlg_1;
var MAX_OCTET = 128, CLASS_UNIVERSAL = 0, PRIMITIVE_BIT = 32, TAG_SEQ = 16, TAG_INT = 2, ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6, ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
function base64Url(base64) {
  return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function signatureAsBuffer(signature) {
  if (Buffer$5.isBuffer(signature)) {
    return signature;
  } else if ("string" === typeof signature) {
    return Buffer$5.from(signature, "base64");
  }
  throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
}
function derToJose(signature, alg) {
  signature = signatureAsBuffer(signature);
  var paramBytes = getParamBytesForAlg(alg);
  var maxEncodedParamLength = paramBytes + 1;
  var inputLength = signature.length;
  var offset = 0;
  if (signature[offset++] !== ENCODED_TAG_SEQ) {
    throw new Error('Could not find expected "seq"');
  }
  var seqLength = signature[offset++];
  if (seqLength === (MAX_OCTET | 1)) {
    seqLength = signature[offset++];
  }
  if (inputLength - offset < seqLength) {
    throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
  }
  if (signature[offset++] !== ENCODED_TAG_INT) {
    throw new Error('Could not find expected "int" for "r"');
  }
  var rLength = signature[offset++];
  if (inputLength - offset - 2 < rLength) {
    throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
  }
  if (maxEncodedParamLength < rLength) {
    throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
  }
  var rOffset = offset;
  offset += rLength;
  if (signature[offset++] !== ENCODED_TAG_INT) {
    throw new Error('Could not find expected "int" for "s"');
  }
  var sLength = signature[offset++];
  if (inputLength - offset !== sLength) {
    throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
  }
  if (maxEncodedParamLength < sLength) {
    throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
  }
  var sOffset = offset;
  offset += sLength;
  if (offset !== inputLength) {
    throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
  }
  var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
  var dst = Buffer$5.allocUnsafe(rPadding + rLength + sPadding + sLength);
  for (offset = 0; offset < rPadding; ++offset) {
    dst[offset] = 0;
  }
  signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
  offset = paramBytes;
  for (var o = offset; offset < o + sPadding; ++offset) {
    dst[offset] = 0;
  }
  signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
  dst = dst.toString("base64");
  dst = base64Url(dst);
  return dst;
}
function countPadding(buf, start, stop) {
  var padding = 0;
  while (start + padding < stop && buf[start + padding] === 0) {
    ++padding;
  }
  var needsSign = buf[start + padding] >= MAX_OCTET;
  if (needsSign) {
    --padding;
  }
  return padding;
}
function joseToDer(signature, alg) {
  signature = signatureAsBuffer(signature);
  var paramBytes = getParamBytesForAlg(alg);
  var signatureBytes = signature.length;
  if (signatureBytes !== paramBytes * 2) {
    throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
  }
  var rPadding = countPadding(signature, 0, paramBytes);
  var sPadding = countPadding(signature, paramBytes, signature.length);
  var rLength = paramBytes - rPadding;
  var sLength = paramBytes - sPadding;
  var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
  var shortLength = rsBytes < MAX_OCTET;
  var dst = Buffer$5.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
  var offset = 0;
  dst[offset++] = ENCODED_TAG_SEQ;
  if (shortLength) {
    dst[offset++] = rsBytes;
  } else {
    dst[offset++] = MAX_OCTET | 1;
    dst[offset++] = rsBytes & 255;
  }
  dst[offset++] = ENCODED_TAG_INT;
  dst[offset++] = rLength;
  if (rPadding < 0) {
    dst[offset++] = 0;
    offset += signature.copy(dst, offset, 0, paramBytes);
  } else {
    offset += signature.copy(dst, offset, rPadding, paramBytes);
  }
  dst[offset++] = ENCODED_TAG_INT;
  dst[offset++] = sLength;
  if (sPadding < 0) {
    dst[offset++] = 0;
    signature.copy(dst, offset, paramBytes);
  } else {
    signature.copy(dst, offset, paramBytes + sPadding);
  }
  return dst;
}
var ecdsaSigFormatter = {
  derToJose,
  joseToDer
};
var bufferEqual = bufferEqualConstantTime;
var Buffer$4 = safeBuffer.exports.Buffer;
var crypto = require$$5;
var formatEcdsa = ecdsaSigFormatter;
var util$2 = require$$5;
var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
var MSG_INVALID_SECRET = "secret must be a string or buffer";
var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
var supportsKeyObjects = typeof crypto.createPublicKey === "function";
if (supportsKeyObjects) {
  MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
  MSG_INVALID_SECRET += "or a KeyObject";
}
function checkIsPublicKey(key) {
  if (Buffer$4.isBuffer(key)) {
    return;
  }
  if (typeof key === "string") {
    return;
  }
  if (!supportsKeyObjects) {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }
  if (typeof key !== "object") {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }
  if (typeof key.type !== "string") {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }
  if (typeof key.asymmetricKeyType !== "string") {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }
  if (typeof key.export !== "function") {
    throw typeError(MSG_INVALID_VERIFIER_KEY);
  }
}
function checkIsPrivateKey(key) {
  if (Buffer$4.isBuffer(key)) {
    return;
  }
  if (typeof key === "string") {
    return;
  }
  if (typeof key === "object") {
    return;
  }
  throw typeError(MSG_INVALID_SIGNER_KEY);
}
function checkIsSecretKey(key) {
  if (Buffer$4.isBuffer(key)) {
    return;
  }
  if (typeof key === "string") {
    return key;
  }
  if (!supportsKeyObjects) {
    throw typeError(MSG_INVALID_SECRET);
  }
  if (typeof key !== "object") {
    throw typeError(MSG_INVALID_SECRET);
  }
  if (key.type !== "secret") {
    throw typeError(MSG_INVALID_SECRET);
  }
  if (typeof key.export !== "function") {
    throw typeError(MSG_INVALID_SECRET);
  }
}
function fromBase64(base64) {
  return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function toBase64(base64url2) {
  base64url2 = base64url2.toString();
  var padding = 4 - base64url2.length % 4;
  if (padding !== 4) {
    for (var i = 0; i < padding; ++i) {
      base64url2 += "=";
    }
  }
  return base64url2.replace(/\-/g, "+").replace(/_/g, "/");
}
function typeError(template) {
  var args = [].slice.call(arguments, 1);
  var errMsg = util$2.format.bind(util$2, template).apply(null, args);
  return new TypeError(errMsg);
}
function bufferOrString(obj) {
  return Buffer$4.isBuffer(obj) || typeof obj === "string";
}
function normalizeInput(thing) {
  if (!bufferOrString(thing))
    thing = JSON.stringify(thing);
  return thing;
}
function createHmacSigner(bits) {
  return function sign3(thing, secret) {
    checkIsSecretKey(secret);
    thing = normalizeInput(thing);
    var hmac = crypto.createHmac("sha" + bits, secret);
    var sig = (hmac.update(thing), hmac.digest("base64"));
    return fromBase64(sig);
  };
}
function createHmacVerifier(bits) {
  return function verify3(thing, signature, secret) {
    var computedSig = createHmacSigner(bits)(thing, secret);
    return bufferEqual(Buffer$4.from(signature), Buffer$4.from(computedSig));
  };
}
function createKeySigner(bits) {
  return function sign3(thing, privateKey) {
    checkIsPrivateKey(privateKey);
    thing = normalizeInput(thing);
    var signer = crypto.createSign("RSA-SHA" + bits);
    var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
    return fromBase64(sig);
  };
}
function createKeyVerifier(bits) {
  return function verify3(thing, signature, publicKey) {
    checkIsPublicKey(publicKey);
    thing = normalizeInput(thing);
    signature = toBase64(signature);
    var verifier = crypto.createVerify("RSA-SHA" + bits);
    verifier.update(thing);
    return verifier.verify(publicKey, signature, "base64");
  };
}
function createPSSKeySigner(bits) {
  return function sign3(thing, privateKey) {
    checkIsPrivateKey(privateKey);
    thing = normalizeInput(thing);
    var signer = crypto.createSign("RSA-SHA" + bits);
    var sig = (signer.update(thing), signer.sign({
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    }, "base64"));
    return fromBase64(sig);
  };
}
function createPSSKeyVerifier(bits) {
  return function verify3(thing, signature, publicKey) {
    checkIsPublicKey(publicKey);
    thing = normalizeInput(thing);
    signature = toBase64(signature);
    var verifier = crypto.createVerify("RSA-SHA" + bits);
    verifier.update(thing);
    return verifier.verify({
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
    }, signature, "base64");
  };
}
function createECDSASigner(bits) {
  var inner = createKeySigner(bits);
  return function sign3() {
    var signature = inner.apply(null, arguments);
    signature = formatEcdsa.derToJose(signature, "ES" + bits);
    return signature;
  };
}
function createECDSAVerifer(bits) {
  var inner = createKeyVerifier(bits);
  return function verify3(thing, signature, publicKey) {
    signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
    var result = inner(thing, signature, publicKey);
    return result;
  };
}
function createNoneSigner() {
  return function sign3() {
    return "";
  };
}
function createNoneVerifier() {
  return function verify3(thing, signature) {
    return signature === "";
  };
}
var jwa$2 = function jwa(algorithm) {
  var signerFactories = {
    hs: createHmacSigner,
    rs: createKeySigner,
    ps: createPSSKeySigner,
    es: createECDSASigner,
    none: createNoneSigner
  };
  var verifierFactories = {
    hs: createHmacVerifier,
    rs: createKeyVerifier,
    ps: createPSSKeyVerifier,
    es: createECDSAVerifer,
    none: createNoneVerifier
  };
  var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
  if (!match)
    throw typeError(MSG_INVALID_ALGORITHM, algorithm);
  var algo = (match[1] || match[3]).toLowerCase();
  var bits = match[2];
  return {
    sign: signerFactories[algo](bits),
    verify: verifierFactories[algo](bits)
  };
};
var Buffer$3 = require$$5.Buffer;
var tostring = function toString(obj) {
  if (typeof obj === "string")
    return obj;
  if (typeof obj === "number" || Buffer$3.isBuffer(obj))
    return obj.toString();
  return JSON.stringify(obj);
};
var Buffer$2 = safeBuffer.exports.Buffer;
var DataStream$1 = dataStream;
var jwa$1 = jwa$2;
var Stream$1 = require$$5;
var toString$1 = tostring;
var util$1 = require$$5;
function base64url(string, encoding) {
  return Buffer$2.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function jwsSecuredInput(header, payload, encoding) {
  encoding = encoding || "utf8";
  var encodedHeader = base64url(toString$1(header), "binary");
  var encodedPayload = base64url(toString$1(payload), encoding);
  return util$1.format("%s.%s", encodedHeader, encodedPayload);
}
function jwsSign(opts) {
  var header = opts.header;
  var payload = opts.payload;
  var secretOrKey = opts.secret || opts.privateKey;
  var encoding = opts.encoding;
  var algo = jwa$1(header.alg);
  var securedInput = jwsSecuredInput(header, payload, encoding);
  var signature = algo.sign(securedInput, secretOrKey);
  return util$1.format("%s.%s", securedInput, signature);
}
function SignStream$1(opts) {
  var secret = opts.secret || opts.privateKey || opts.key;
  var secretStream = new DataStream$1(secret);
  this.readable = true;
  this.header = opts.header;
  this.encoding = opts.encoding;
  this.secret = this.privateKey = this.key = secretStream;
  this.payload = new DataStream$1(opts.payload);
  this.secret.once("close", function() {
    if (!this.payload.writable && this.readable)
      this.sign();
  }.bind(this));
  this.payload.once("close", function() {
    if (!this.secret.writable && this.readable)
      this.sign();
  }.bind(this));
}
util$1.inherits(SignStream$1, Stream$1);
SignStream$1.prototype.sign = function sign() {
  try {
    var signature = jwsSign({
      header: this.header,
      payload: this.payload.buffer,
      secret: this.secret.buffer,
      encoding: this.encoding
    });
    this.emit("done", signature);
    this.emit("data", signature);
    this.emit("end");
    this.readable = false;
    return signature;
  } catch (e) {
    this.readable = false;
    this.emit("error", e);
    this.emit("close");
  }
};
SignStream$1.sign = jwsSign;
var signStream = SignStream$1;
var Buffer$1 = safeBuffer.exports.Buffer;
var DataStream = dataStream;
var jwa2 = jwa$2;
var Stream = require$$5;
var toString2 = tostring;
var util = require$$5;
var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
function isObject$3(thing) {
  return Object.prototype.toString.call(thing) === "[object Object]";
}
function safeJsonParse(thing) {
  if (isObject$3(thing))
    return thing;
  try {
    return JSON.parse(thing);
  } catch (e) {
    return void 0;
  }
}
function headerFromJWS(jwsSig) {
  var encodedHeader = jwsSig.split(".", 1)[0];
  return safeJsonParse(Buffer$1.from(encodedHeader, "base64").toString("binary"));
}
function securedInputFromJWS(jwsSig) {
  return jwsSig.split(".", 2).join(".");
}
function signatureFromJWS(jwsSig) {
  return jwsSig.split(".")[2];
}
function payloadFromJWS(jwsSig, encoding) {
  encoding = encoding || "utf8";
  var payload = jwsSig.split(".")[1];
  return Buffer$1.from(payload, "base64").toString(encoding);
}
function isValidJws(string) {
  return JWS_REGEX.test(string) && !!headerFromJWS(string);
}
function jwsVerify(jwsSig, algorithm, secretOrKey) {
  if (!algorithm) {
    var err = new Error("Missing algorithm parameter for jws.verify");
    err.code = "MISSING_ALGORITHM";
    throw err;
  }
  jwsSig = toString2(jwsSig);
  var signature = signatureFromJWS(jwsSig);
  var securedInput = securedInputFromJWS(jwsSig);
  var algo = jwa2(algorithm);
  return algo.verify(securedInput, signature, secretOrKey);
}
function jwsDecode(jwsSig, opts) {
  opts = opts || {};
  jwsSig = toString2(jwsSig);
  if (!isValidJws(jwsSig))
    return null;
  var header = headerFromJWS(jwsSig);
  if (!header)
    return null;
  var payload = payloadFromJWS(jwsSig);
  if (header.typ === "JWT" || opts.json)
    payload = JSON.parse(payload, opts.encoding);
  return {
    header,
    payload,
    signature: signatureFromJWS(jwsSig)
  };
}
function VerifyStream$1(opts) {
  opts = opts || {};
  var secretOrKey = opts.secret || opts.publicKey || opts.key;
  var secretStream = new DataStream(secretOrKey);
  this.readable = true;
  this.algorithm = opts.algorithm;
  this.encoding = opts.encoding;
  this.secret = this.publicKey = this.key = secretStream;
  this.signature = new DataStream(opts.signature);
  this.secret.once("close", function() {
    if (!this.signature.writable && this.readable)
      this.verify();
  }.bind(this));
  this.signature.once("close", function() {
    if (!this.secret.writable && this.readable)
      this.verify();
  }.bind(this));
}
util.inherits(VerifyStream$1, Stream);
VerifyStream$1.prototype.verify = function verify() {
  try {
    var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
    var obj = jwsDecode(this.signature.buffer, this.encoding);
    this.emit("done", valid, obj);
    this.emit("data", valid);
    this.emit("end");
    this.readable = false;
    return valid;
  } catch (e) {
    this.readable = false;
    this.emit("error", e);
    this.emit("close");
  }
};
VerifyStream$1.decode = jwsDecode;
VerifyStream$1.isValid = isValidJws;
VerifyStream$1.verify = jwsVerify;
var verifyStream = VerifyStream$1;
var SignStream = signStream;
var VerifyStream = verifyStream;
var ALGORITHMS = [
  "HS256",
  "HS384",
  "HS512",
  "RS256",
  "RS384",
  "RS512",
  "PS256",
  "PS384",
  "PS512",
  "ES256",
  "ES384",
  "ES512"
];
jws$3.ALGORITHMS = ALGORITHMS;
jws$3.sign = SignStream.sign;
jws$3.verify = VerifyStream.verify;
jws$3.decode = VerifyStream.decode;
jws$3.isValid = VerifyStream.isValid;
jws$3.createSign = function createSign(opts) {
  return new SignStream(opts);
};
jws$3.createVerify = function createVerify(opts) {
  return new VerifyStream(opts);
};
var jws$2 = jws$3;
var decode$1 = function(jwt, options) {
  options = options || {};
  var decoded = jws$2.decode(jwt, options);
  if (!decoded) {
    return null;
  }
  var payload = decoded.payload;
  if (typeof payload === "string") {
    try {
      var obj = JSON.parse(payload);
      if (obj !== null && typeof obj === "object") {
        payload = obj;
      }
    } catch (e) {
    }
  }
  if (options.complete === true) {
    return {
      header: decoded.header,
      payload,
      signature: decoded.signature
    };
  }
  return payload;
};
var JsonWebTokenError$3 = function(message, error) {
  Error.call(this, message);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  }
  this.name = "JsonWebTokenError";
  this.message = message;
  if (error)
    this.inner = error;
};
JsonWebTokenError$3.prototype = Object.create(Error.prototype);
JsonWebTokenError$3.prototype.constructor = JsonWebTokenError$3;
var JsonWebTokenError_1 = JsonWebTokenError$3;
var JsonWebTokenError$2 = JsonWebTokenError_1;
var NotBeforeError$1 = function(message, date) {
  JsonWebTokenError$2.call(this, message);
  this.name = "NotBeforeError";
  this.date = date;
};
NotBeforeError$1.prototype = Object.create(JsonWebTokenError$2.prototype);
NotBeforeError$1.prototype.constructor = NotBeforeError$1;
var NotBeforeError_1 = NotBeforeError$1;
var JsonWebTokenError$1 = JsonWebTokenError_1;
var TokenExpiredError$1 = function(message, expiredAt) {
  JsonWebTokenError$1.call(this, message);
  this.name = "TokenExpiredError";
  this.expiredAt = expiredAt;
};
TokenExpiredError$1.prototype = Object.create(JsonWebTokenError$1.prototype);
TokenExpiredError$1.prototype.constructor = TokenExpiredError$1;
var TokenExpiredError_1 = TokenExpiredError$1;
var s = 1e3;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
var ms$1 = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === "string" && val.length > 0) {
    return parse(val);
  } else if (type === "number" && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
  );
};
function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || "ms").toLowerCase();
  switch (type) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return n * y;
    case "weeks":
    case "week":
    case "w":
      return n * w;
    case "days":
    case "day":
    case "d":
      return n * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return n * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return n * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return n * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return n;
    default:
      return void 0;
  }
}
function fmtShort(ms2) {
  var msAbs = Math.abs(ms2);
  if (msAbs >= d) {
    return Math.round(ms2 / d) + "d";
  }
  if (msAbs >= h) {
    return Math.round(ms2 / h) + "h";
  }
  if (msAbs >= m) {
    return Math.round(ms2 / m) + "m";
  }
  if (msAbs >= s) {
    return Math.round(ms2 / s) + "s";
  }
  return ms2 + "ms";
}
function fmtLong(ms2) {
  var msAbs = Math.abs(ms2);
  if (msAbs >= d) {
    return plural(ms2, msAbs, d, "day");
  }
  if (msAbs >= h) {
    return plural(ms2, msAbs, h, "hour");
  }
  if (msAbs >= m) {
    return plural(ms2, msAbs, m, "minute");
  }
  if (msAbs >= s) {
    return plural(ms2, msAbs, s, "second");
  }
  return ms2 + " ms";
}
function plural(ms2, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms2 / n) + " " + name + (isPlural ? "s" : "");
}
var ms = ms$1;
var timespan$2 = function(time, iat) {
  var timestamp = iat || Math.floor(Date.now() / 1e3);
  if (typeof time === "string") {
    var milliseconds = ms(time);
    if (typeof milliseconds === "undefined") {
      return;
    }
    return Math.floor(timestamp + milliseconds / 1e3);
  } else if (typeof time === "number") {
    return timestamp + time;
  } else {
    return;
  }
};
var semver$1 = { exports: {} };
(function(module2, exports2) {
  exports2 = module2.exports = SemVer;
  var debug;
  if (typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
    debug = function() {
      var args = Array.prototype.slice.call(arguments, 0);
      args.unshift("SEMVER");
      console.log.apply(console, args);
    };
  } else {
    debug = function() {
    };
  }
  exports2.SEMVER_SPEC_VERSION = "2.0.0";
  var MAX_LENGTH = 256;
  var MAX_SAFE_INTEGER2 = Number.MAX_SAFE_INTEGER || 9007199254740991;
  var MAX_SAFE_COMPONENT_LENGTH = 16;
  var re = exports2.re = [];
  var src = exports2.src = [];
  var R = 0;
  var NUMERICIDENTIFIER = R++;
  src[NUMERICIDENTIFIER] = "0|[1-9]\\d*";
  var NUMERICIDENTIFIERLOOSE = R++;
  src[NUMERICIDENTIFIERLOOSE] = "[0-9]+";
  var NONNUMERICIDENTIFIER = R++;
  src[NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
  var MAINVERSION = R++;
  src[MAINVERSION] = "(" + src[NUMERICIDENTIFIER] + ")\\.(" + src[NUMERICIDENTIFIER] + ")\\.(" + src[NUMERICIDENTIFIER] + ")";
  var MAINVERSIONLOOSE = R++;
  src[MAINVERSIONLOOSE] = "(" + src[NUMERICIDENTIFIERLOOSE] + ")\\.(" + src[NUMERICIDENTIFIERLOOSE] + ")\\.(" + src[NUMERICIDENTIFIERLOOSE] + ")";
  var PRERELEASEIDENTIFIER = R++;
  src[PRERELEASEIDENTIFIER] = "(?:" + src[NUMERICIDENTIFIER] + "|" + src[NONNUMERICIDENTIFIER] + ")";
  var PRERELEASEIDENTIFIERLOOSE = R++;
  src[PRERELEASEIDENTIFIERLOOSE] = "(?:" + src[NUMERICIDENTIFIERLOOSE] + "|" + src[NONNUMERICIDENTIFIER] + ")";
  var PRERELEASE = R++;
  src[PRERELEASE] = "(?:-(" + src[PRERELEASEIDENTIFIER] + "(?:\\." + src[PRERELEASEIDENTIFIER] + ")*))";
  var PRERELEASELOOSE = R++;
  src[PRERELEASELOOSE] = "(?:-?(" + src[PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + src[PRERELEASEIDENTIFIERLOOSE] + ")*))";
  var BUILDIDENTIFIER = R++;
  src[BUILDIDENTIFIER] = "[0-9A-Za-z-]+";
  var BUILD = R++;
  src[BUILD] = "(?:\\+(" + src[BUILDIDENTIFIER] + "(?:\\." + src[BUILDIDENTIFIER] + ")*))";
  var FULL = R++;
  var FULLPLAIN = "v?" + src[MAINVERSION] + src[PRERELEASE] + "?" + src[BUILD] + "?";
  src[FULL] = "^" + FULLPLAIN + "$";
  var LOOSEPLAIN = "[v=\\s]*" + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + "?" + src[BUILD] + "?";
  var LOOSE = R++;
  src[LOOSE] = "^" + LOOSEPLAIN + "$";
  var GTLT = R++;
  src[GTLT] = "((?:<|>)?=?)";
  var XRANGEIDENTIFIERLOOSE = R++;
  src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
  var XRANGEIDENTIFIER = R++;
  src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + "|x|X|\\*";
  var XRANGEPLAIN = R++;
  src[XRANGEPLAIN] = "[v=\\s]*(" + src[XRANGEIDENTIFIER] + ")(?:\\.(" + src[XRANGEIDENTIFIER] + ")(?:\\.(" + src[XRANGEIDENTIFIER] + ")(?:" + src[PRERELEASE] + ")?" + src[BUILD] + "?)?)?";
  var XRANGEPLAINLOOSE = R++;
  src[XRANGEPLAINLOOSE] = "[v=\\s]*(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + src[XRANGEIDENTIFIERLOOSE] + ")(?:" + src[PRERELEASELOOSE] + ")?" + src[BUILD] + "?)?)?";
  var XRANGE = R++;
  src[XRANGE] = "^" + src[GTLT] + "\\s*" + src[XRANGEPLAIN] + "$";
  var XRANGELOOSE = R++;
  src[XRANGELOOSE] = "^" + src[GTLT] + "\\s*" + src[XRANGEPLAINLOOSE] + "$";
  var COERCE = R++;
  src[COERCE] = "(?:^|[^\\d])(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "})(?:\\.(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "}))?(?:\\.(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "}))?(?:$|[^\\d])";
  var LONETILDE = R++;
  src[LONETILDE] = "(?:~>?)";
  var TILDETRIM = R++;
  src[TILDETRIM] = "(\\s*)" + src[LONETILDE] + "\\s+";
  re[TILDETRIM] = new RegExp(src[TILDETRIM], "g");
  var tildeTrimReplace = "$1~";
  var TILDE = R++;
  src[TILDE] = "^" + src[LONETILDE] + src[XRANGEPLAIN] + "$";
  var TILDELOOSE = R++;
  src[TILDELOOSE] = "^" + src[LONETILDE] + src[XRANGEPLAINLOOSE] + "$";
  var LONECARET = R++;
  src[LONECARET] = "(?:\\^)";
  var CARETTRIM = R++;
  src[CARETTRIM] = "(\\s*)" + src[LONECARET] + "\\s+";
  re[CARETTRIM] = new RegExp(src[CARETTRIM], "g");
  var caretTrimReplace = "$1^";
  var CARET = R++;
  src[CARET] = "^" + src[LONECARET] + src[XRANGEPLAIN] + "$";
  var CARETLOOSE = R++;
  src[CARETLOOSE] = "^" + src[LONECARET] + src[XRANGEPLAINLOOSE] + "$";
  var COMPARATORLOOSE = R++;
  src[COMPARATORLOOSE] = "^" + src[GTLT] + "\\s*(" + LOOSEPLAIN + ")$|^$";
  var COMPARATOR = R++;
  src[COMPARATOR] = "^" + src[GTLT] + "\\s*(" + FULLPLAIN + ")$|^$";
  var COMPARATORTRIM = R++;
  src[COMPARATORTRIM] = "(\\s*)" + src[GTLT] + "\\s*(" + LOOSEPLAIN + "|" + src[XRANGEPLAIN] + ")";
  re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], "g");
  var comparatorTrimReplace = "$1$2$3";
  var HYPHENRANGE = R++;
  src[HYPHENRANGE] = "^\\s*(" + src[XRANGEPLAIN] + ")\\s+-\\s+(" + src[XRANGEPLAIN] + ")\\s*$";
  var HYPHENRANGELOOSE = R++;
  src[HYPHENRANGELOOSE] = "^\\s*(" + src[XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + src[XRANGEPLAINLOOSE] + ")\\s*$";
  var STAR = R++;
  src[STAR] = "(<|>)?=?\\s*\\*";
  for (var i = 0; i < R; i++) {
    debug(i, src[i]);
    if (!re[i]) {
      re[i] = new RegExp(src[i]);
    }
  }
  exports2.parse = parse2;
  function parse2(version, options) {
    if (!options || typeof options !== "object") {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version !== "string") {
      return null;
    }
    if (version.length > MAX_LENGTH) {
      return null;
    }
    var r = options.loose ? re[LOOSE] : re[FULL];
    if (!r.test(version)) {
      return null;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      return null;
    }
  }
  exports2.valid = valid;
  function valid(version, options) {
    var v = parse2(version, options);
    return v ? v.version : null;
  }
  exports2.clean = clean;
  function clean(version, options) {
    var s2 = parse2(version.trim().replace(/^[=v]+/, ""), options);
    return s2 ? s2.version : null;
  }
  exports2.SemVer = SemVer;
  function SemVer(version, options) {
    if (!options || typeof options !== "object") {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (version instanceof SemVer) {
      if (version.loose === options.loose) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== "string") {
      throw new TypeError("Invalid Version: " + version);
    }
    if (version.length > MAX_LENGTH) {
      throw new TypeError("version is longer than " + MAX_LENGTH + " characters");
    }
    if (!(this instanceof SemVer)) {
      return new SemVer(version, options);
    }
    debug("SemVer", version, options);
    this.options = options;
    this.loose = !!options.loose;
    var m2 = version.trim().match(options.loose ? re[LOOSE] : re[FULL]);
    if (!m2) {
      throw new TypeError("Invalid Version: " + version);
    }
    this.raw = version;
    this.major = +m2[1];
    this.minor = +m2[2];
    this.patch = +m2[3];
    if (this.major > MAX_SAFE_INTEGER2 || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER2 || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER2 || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m2[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m2[4].split(".").map(function(id) {
        if (/^[0-9]+$/.test(id)) {
          var num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER2) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m2[5] ? m2[5].split(".") : [];
    this.format();
  }
  SemVer.prototype.format = function() {
    this.version = this.major + "." + this.minor + "." + this.patch;
    if (this.prerelease.length) {
      this.version += "-" + this.prerelease.join(".");
    }
    return this.version;
  };
  SemVer.prototype.toString = function() {
    return this.version;
  };
  SemVer.prototype.compare = function(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return this.compareMain(other) || this.comparePre(other);
  };
  SemVer.prototype.compareMain = function(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  };
  SemVer.prototype.comparePre = function(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    var i2 = 0;
    do {
      var a = this.prerelease[i2];
      var b = other.prerelease[i2];
      debug("prerelease compare", i2, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i2);
  };
  SemVer.prototype.inc = function(release, identifier) {
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier);
        this.inc("pre", identifier);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier);
        }
        this.inc("pre", identifier);
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre":
        if (this.prerelease.length === 0) {
          this.prerelease = [0];
        } else {
          var i2 = this.prerelease.length;
          while (--i2 >= 0) {
            if (typeof this.prerelease[i2] === "number") {
              this.prerelease[i2]++;
              i2 = -2;
            }
          }
          if (i2 === -1) {
            this.prerelease.push(0);
          }
        }
        if (identifier) {
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0];
            }
          } else {
            this.prerelease = [identifier, 0];
          }
        }
        break;
      default:
        throw new Error("invalid increment argument: " + release);
    }
    this.format();
    this.raw = this.version;
    return this;
  };
  exports2.inc = inc;
  function inc(version, release, loose, identifier) {
    if (typeof loose === "string") {
      identifier = loose;
      loose = void 0;
    }
    try {
      return new SemVer(version, loose).inc(release, identifier).version;
    } catch (er) {
      return null;
    }
  }
  exports2.diff = diff;
  function diff(version1, version2) {
    if (eq(version1, version2)) {
      return null;
    } else {
      var v1 = parse2(version1);
      var v2 = parse2(version2);
      var prefix = "";
      if (v1.prerelease.length || v2.prerelease.length) {
        prefix = "pre";
        var defaultResult = "prerelease";
      }
      for (var key in v1) {
        if (key === "major" || key === "minor" || key === "patch") {
          if (v1[key] !== v2[key]) {
            return prefix + key;
          }
        }
      }
      return defaultResult;
    }
  }
  exports2.compareIdentifiers = compareIdentifiers;
  var numeric = /^[0-9]+$/;
  function compareIdentifiers(a, b) {
    var anum = numeric.test(a);
    var bnum = numeric.test(b);
    if (anum && bnum) {
      a = +a;
      b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  }
  exports2.rcompareIdentifiers = rcompareIdentifiers;
  function rcompareIdentifiers(a, b) {
    return compareIdentifiers(b, a);
  }
  exports2.major = major;
  function major(a, loose) {
    return new SemVer(a, loose).major;
  }
  exports2.minor = minor;
  function minor(a, loose) {
    return new SemVer(a, loose).minor;
  }
  exports2.patch = patch;
  function patch(a, loose) {
    return new SemVer(a, loose).patch;
  }
  exports2.compare = compare;
  function compare(a, b, loose) {
    return new SemVer(a, loose).compare(new SemVer(b, loose));
  }
  exports2.compareLoose = compareLoose;
  function compareLoose(a, b) {
    return compare(a, b, true);
  }
  exports2.rcompare = rcompare;
  function rcompare(a, b, loose) {
    return compare(b, a, loose);
  }
  exports2.sort = sort;
  function sort(list, loose) {
    return list.sort(function(a, b) {
      return exports2.compare(a, b, loose);
    });
  }
  exports2.rsort = rsort;
  function rsort(list, loose) {
    return list.sort(function(a, b) {
      return exports2.rcompare(a, b, loose);
    });
  }
  exports2.gt = gt;
  function gt(a, b, loose) {
    return compare(a, b, loose) > 0;
  }
  exports2.lt = lt;
  function lt(a, b, loose) {
    return compare(a, b, loose) < 0;
  }
  exports2.eq = eq;
  function eq(a, b, loose) {
    return compare(a, b, loose) === 0;
  }
  exports2.neq = neq;
  function neq(a, b, loose) {
    return compare(a, b, loose) !== 0;
  }
  exports2.gte = gte;
  function gte(a, b, loose) {
    return compare(a, b, loose) >= 0;
  }
  exports2.lte = lte;
  function lte(a, b, loose) {
    return compare(a, b, loose) <= 0;
  }
  exports2.cmp = cmp;
  function cmp(a, op, b, loose) {
    switch (op) {
      case "===":
        if (typeof a === "object")
          a = a.version;
        if (typeof b === "object")
          b = b.version;
        return a === b;
      case "!==":
        if (typeof a === "object")
          a = a.version;
        if (typeof b === "object")
          b = b.version;
        return a !== b;
      case "":
      case "=":
      case "==":
        return eq(a, b, loose);
      case "!=":
        return neq(a, b, loose);
      case ">":
        return gt(a, b, loose);
      case ">=":
        return gte(a, b, loose);
      case "<":
        return lt(a, b, loose);
      case "<=":
        return lte(a, b, loose);
      default:
        throw new TypeError("Invalid operator: " + op);
    }
  }
  exports2.Comparator = Comparator;
  function Comparator(comp, options) {
    if (!options || typeof options !== "object") {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp;
      } else {
        comp = comp.value;
      }
    }
    if (!(this instanceof Comparator)) {
      return new Comparator(comp, options);
    }
    debug("comparator", comp, options);
    this.options = options;
    this.loose = !!options.loose;
    this.parse(comp);
    if (this.semver === ANY) {
      this.value = "";
    } else {
      this.value = this.operator + this.semver.version;
    }
    debug("comp", this);
  }
  var ANY = {};
  Comparator.prototype.parse = function(comp) {
    var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
    var m2 = comp.match(r);
    if (!m2) {
      throw new TypeError("Invalid comparator: " + comp);
    }
    this.operator = m2[1];
    if (this.operator === "=") {
      this.operator = "";
    }
    if (!m2[2]) {
      this.semver = ANY;
    } else {
      this.semver = new SemVer(m2[2], this.options.loose);
    }
  };
  Comparator.prototype.toString = function() {
    return this.value;
  };
  Comparator.prototype.test = function(version) {
    debug("Comparator.test", version, this.options.loose);
    if (this.semver === ANY) {
      return true;
    }
    if (typeof version === "string") {
      version = new SemVer(version, this.options);
    }
    return cmp(version, this.operator, this.semver, this.options);
  };
  Comparator.prototype.intersects = function(comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError("a Comparator is required");
    }
    if (!options || typeof options !== "object") {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    var rangeTmp;
    if (this.operator === "") {
      rangeTmp = new Range(comp.value, options);
      return satisfies(this.value, rangeTmp, options);
    } else if (comp.operator === "") {
      rangeTmp = new Range(this.value, options);
      return satisfies(comp.semver, rangeTmp, options);
    }
    var sameDirectionIncreasing = (this.operator === ">=" || this.operator === ">") && (comp.operator === ">=" || comp.operator === ">");
    var sameDirectionDecreasing = (this.operator === "<=" || this.operator === "<") && (comp.operator === "<=" || comp.operator === "<");
    var sameSemVer = this.semver.version === comp.semver.version;
    var differentDirectionsInclusive = (this.operator === ">=" || this.operator === "<=") && (comp.operator === ">=" || comp.operator === "<=");
    var oppositeDirectionsLessThan = cmp(this.semver, "<", comp.semver, options) && ((this.operator === ">=" || this.operator === ">") && (comp.operator === "<=" || comp.operator === "<"));
    var oppositeDirectionsGreaterThan = cmp(this.semver, ">", comp.semver, options) && ((this.operator === "<=" || this.operator === "<") && (comp.operator === ">=" || comp.operator === ">"));
    return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
  };
  exports2.Range = Range;
  function Range(range, options) {
    if (!options || typeof options !== "object") {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }
    if (range instanceof Range) {
      if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
        return range;
      } else {
        return new Range(range.raw, options);
      }
    }
    if (range instanceof Comparator) {
      return new Range(range.value, options);
    }
    if (!(this instanceof Range)) {
      return new Range(range, options);
    }
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    this.raw = range;
    this.set = range.split(/\s*\|\|\s*/).map(function(range2) {
      return this.parseRange(range2.trim());
    }, this).filter(function(c) {
      return c.length;
    });
    if (!this.set.length) {
      throw new TypeError("Invalid SemVer Range: " + range);
    }
    this.format();
  }
  Range.prototype.format = function() {
    this.range = this.set.map(function(comps) {
      return comps.join(" ").trim();
    }).join("||").trim();
    return this.range;
  };
  Range.prototype.toString = function() {
    return this.range;
  };
  Range.prototype.parseRange = function(range) {
    var loose = this.options.loose;
    range = range.trim();
    var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
    range = range.replace(hr, hyphenReplace);
    debug("hyphen replace", range);
    range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
    debug("comparator trim", range, re[COMPARATORTRIM]);
    range = range.replace(re[TILDETRIM], tildeTrimReplace);
    range = range.replace(re[CARETTRIM], caretTrimReplace);
    range = range.split(/\s+/).join(" ");
    var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
    var set = range.split(" ").map(function(comp) {
      return parseComparator(comp, this.options);
    }, this).join(" ").split(/\s+/);
    if (this.options.loose) {
      set = set.filter(function(comp) {
        return !!comp.match(compRe);
      });
    }
    set = set.map(function(comp) {
      return new Comparator(comp, this.options);
    }, this);
    return set;
  };
  Range.prototype.intersects = function(range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError("a Range is required");
    }
    return this.set.some(function(thisComparators) {
      return thisComparators.every(function(thisComparator) {
        return range.set.some(function(rangeComparators) {
          return rangeComparators.every(function(rangeComparator) {
            return thisComparator.intersects(rangeComparator, options);
          });
        });
      });
    });
  };
  exports2.toComparators = toComparators;
  function toComparators(range, options) {
    return new Range(range, options).set.map(function(comp) {
      return comp.map(function(c) {
        return c.value;
      }).join(" ").trim().split(" ");
    });
  }
  function parseComparator(comp, options) {
    debug("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug("caret", comp);
    comp = replaceTildes(comp, options);
    debug("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug("xrange", comp);
    comp = replaceStars(comp, options);
    debug("stars", comp);
    return comp;
  }
  function isX(id) {
    return !id || id.toLowerCase() === "x" || id === "*";
  }
  function replaceTildes(comp, options) {
    return comp.trim().split(/\s+/).map(function(comp2) {
      return replaceTilde(comp2, options);
    }).join(" ");
  }
  function replaceTilde(comp, options) {
    var r = options.loose ? re[TILDELOOSE] : re[TILDE];
    return comp.replace(r, function(_, M, m2, p, pr) {
      debug("tilde", comp, _, M, m2, p, pr);
      var ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m2)) {
        ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
      } else if (isX(p)) {
        ret = ">=" + M + "." + m2 + ".0 <" + M + "." + (+m2 + 1) + ".0";
      } else if (pr) {
        debug("replaceTilde pr", pr);
        ret = ">=" + M + "." + m2 + "." + p + "-" + pr + " <" + M + "." + (+m2 + 1) + ".0";
      } else {
        ret = ">=" + M + "." + m2 + "." + p + " <" + M + "." + (+m2 + 1) + ".0";
      }
      debug("tilde return", ret);
      return ret;
    });
  }
  function replaceCarets(comp, options) {
    return comp.trim().split(/\s+/).map(function(comp2) {
      return replaceCaret(comp2, options);
    }).join(" ");
  }
  function replaceCaret(comp, options) {
    debug("caret", comp, options);
    var r = options.loose ? re[CARETLOOSE] : re[CARET];
    return comp.replace(r, function(_, M, m2, p, pr) {
      debug("caret", comp, _, M, m2, p, pr);
      var ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m2)) {
        ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
      } else if (isX(p)) {
        if (M === "0") {
          ret = ">=" + M + "." + m2 + ".0 <" + M + "." + (+m2 + 1) + ".0";
        } else {
          ret = ">=" + M + "." + m2 + ".0 <" + (+M + 1) + ".0.0";
        }
      } else if (pr) {
        debug("replaceCaret pr", pr);
        if (M === "0") {
          if (m2 === "0") {
            ret = ">=" + M + "." + m2 + "." + p + "-" + pr + " <" + M + "." + m2 + "." + (+p + 1);
          } else {
            ret = ">=" + M + "." + m2 + "." + p + "-" + pr + " <" + M + "." + (+m2 + 1) + ".0";
          }
        } else {
          ret = ">=" + M + "." + m2 + "." + p + "-" + pr + " <" + (+M + 1) + ".0.0";
        }
      } else {
        debug("no pr");
        if (M === "0") {
          if (m2 === "0") {
            ret = ">=" + M + "." + m2 + "." + p + " <" + M + "." + m2 + "." + (+p + 1);
          } else {
            ret = ">=" + M + "." + m2 + "." + p + " <" + M + "." + (+m2 + 1) + ".0";
          }
        } else {
          ret = ">=" + M + "." + m2 + "." + p + " <" + (+M + 1) + ".0.0";
        }
      }
      debug("caret return", ret);
      return ret;
    });
  }
  function replaceXRanges(comp, options) {
    debug("replaceXRanges", comp, options);
    return comp.split(/\s+/).map(function(comp2) {
      return replaceXRange(comp2, options);
    }).join(" ");
  }
  function replaceXRange(comp, options) {
    comp = comp.trim();
    var r = options.loose ? re[XRANGELOOSE] : re[XRANGE];
    return comp.replace(r, function(ret, gtlt, M, m2, p, pr) {
      debug("xRange", comp, ret, gtlt, M, m2, p, pr);
      var xM = isX(M);
      var xm = xM || isX(m2);
      var xp = xm || isX(p);
      var anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m2 = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M = +M + 1;
            m2 = 0;
            p = 0;
          } else {
            m2 = +m2 + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M = +M + 1;
          } else {
            m2 = +m2 + 1;
          }
        }
        ret = gtlt + M + "." + m2 + "." + p;
      } else if (xm) {
        ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
      } else if (xp) {
        ret = ">=" + M + "." + m2 + ".0 <" + M + "." + (+m2 + 1) + ".0";
      }
      debug("xRange return", ret);
      return ret;
    });
  }
  function replaceStars(comp, options) {
    debug("replaceStars", comp, options);
    return comp.trim().replace(re[STAR], "");
  }
  function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = ">=" + fM + ".0.0";
    } else if (isX(fp)) {
      from = ">=" + fM + "." + fm + ".0";
    } else {
      from = ">=" + from;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = "<" + (+tM + 1) + ".0.0";
    } else if (isX(tp)) {
      to = "<" + tM + "." + (+tm + 1) + ".0";
    } else if (tpr) {
      to = "<=" + tM + "." + tm + "." + tp + "-" + tpr;
    } else {
      to = "<=" + to;
    }
    return (from + " " + to).trim();
  }
  Range.prototype.test = function(version) {
    if (!version) {
      return false;
    }
    if (typeof version === "string") {
      version = new SemVer(version, this.options);
    }
    for (var i2 = 0; i2 < this.set.length; i2++) {
      if (testSet(this.set[i2], version, this.options)) {
        return true;
      }
    }
    return false;
  };
  function testSet(set, version, options) {
    for (var i2 = 0; i2 < set.length; i2++) {
      if (!set[i2].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      for (i2 = 0; i2 < set.length; i2++) {
        debug(set[i2].semver);
        if (set[i2].semver === ANY) {
          continue;
        }
        if (set[i2].semver.prerelease.length > 0) {
          var allowed = set[i2].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  }
  exports2.satisfies = satisfies;
  function satisfies(version, range, options) {
    try {
      range = new Range(range, options);
    } catch (er) {
      return false;
    }
    return range.test(version);
  }
  exports2.maxSatisfying = maxSatisfying;
  function maxSatisfying(versions, range, options) {
    var max = null;
    var maxSV = null;
    try {
      var rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }
    versions.forEach(function(v) {
      if (rangeObj.test(v)) {
        if (!max || maxSV.compare(v) === -1) {
          max = v;
          maxSV = new SemVer(max, options);
        }
      }
    });
    return max;
  }
  exports2.minSatisfying = minSatisfying;
  function minSatisfying(versions, range, options) {
    var min = null;
    var minSV = null;
    try {
      var rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }
    versions.forEach(function(v) {
      if (rangeObj.test(v)) {
        if (!min || minSV.compare(v) === 1) {
          min = v;
          minSV = new SemVer(min, options);
        }
      }
    });
    return min;
  }
  exports2.minVersion = minVersion;
  function minVersion(range, loose) {
    range = new Range(range, loose);
    var minver = new SemVer("0.0.0");
    if (range.test(minver)) {
      return minver;
    }
    minver = new SemVer("0.0.0-0");
    if (range.test(minver)) {
      return minver;
    }
    minver = null;
    for (var i2 = 0; i2 < range.set.length; ++i2) {
      var comparators = range.set[i2];
      comparators.forEach(function(comparator) {
        var compver = new SemVer(comparator.semver.version);
        switch (comparator.operator) {
          case ">":
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }
            compver.raw = compver.format();
          case "":
          case ">=":
            if (!minver || gt(minver, compver)) {
              minver = compver;
            }
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error("Unexpected operation: " + comparator.operator);
        }
      });
    }
    if (minver && range.test(minver)) {
      return minver;
    }
    return null;
  }
  exports2.validRange = validRange;
  function validRange(range, options) {
    try {
      return new Range(range, options).range || "*";
    } catch (er) {
      return null;
    }
  }
  exports2.ltr = ltr;
  function ltr(version, range, options) {
    return outside(version, range, "<", options);
  }
  exports2.gtr = gtr;
  function gtr(version, range, options) {
    return outside(version, range, ">", options);
  }
  exports2.outside = outside;
  function outside(version, range, hilo, options) {
    version = new SemVer(version, options);
    range = new Range(range, options);
    var gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case ">":
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = ">";
        ecomp = ">=";
        break;
      case "<":
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = "<";
        ecomp = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version, range, options)) {
      return false;
    }
    for (var i2 = 0; i2 < range.set.length; ++i2) {
      var comparators = range.set[i2];
      var high = null;
      var low = null;
      comparators.forEach(function(comparator) {
        if (comparator.semver === ANY) {
          comparator = new Comparator(">=0.0.0");
        }
        high = high || comparator;
        low = low || comparator;
        if (gtfn(comparator.semver, high.semver, options)) {
          high = comparator;
        } else if (ltfn(comparator.semver, low.semver, options)) {
          low = comparator;
        }
      });
      if (high.operator === comp || high.operator === ecomp) {
        return false;
      }
      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }
    return true;
  }
  exports2.prerelease = prerelease;
  function prerelease(version, options) {
    var parsed = parse2(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  }
  exports2.intersects = intersects;
  function intersects(r1, r2, options) {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2);
  }
  exports2.coerce = coerce;
  function coerce(version) {
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version !== "string") {
      return null;
    }
    var match = version.match(re[COERCE]);
    if (match == null) {
      return null;
    }
    return parse2(match[1] + "." + (match[2] || "0") + "." + (match[3] || "0"));
  }
})(semver$1, semver$1.exports);
var semver = semver$1.exports;
var psSupported = semver.satisfies(process.version, "^6.12.0 || >=8.0.0");
var JsonWebTokenError = JsonWebTokenError_1;
var NotBeforeError = NotBeforeError_1;
var TokenExpiredError = TokenExpiredError_1;
var decode = decode$1;
var timespan$1 = timespan$2;
var PS_SUPPORTED$1 = psSupported;
var jws$1 = jws$3;
var PUB_KEY_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512"];
var RSA_KEY_ALGS = ["RS256", "RS384", "RS512"];
var HS_ALGS = ["HS256", "HS384", "HS512"];
if (PS_SUPPORTED$1) {
  PUB_KEY_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
  RSA_KEY_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
}
var verify2 = function(jwtString, secretOrPublicKey, options, callback) {
  if (typeof options === "function" && !callback) {
    callback = options;
    options = {};
  }
  if (!options) {
    options = {};
  }
  options = Object.assign({}, options);
  var done;
  if (callback) {
    done = callback;
  } else {
    done = function(err, data) {
      if (err)
        throw err;
      return data;
    };
  }
  if (options.clockTimestamp && typeof options.clockTimestamp !== "number") {
    return done(new JsonWebTokenError("clockTimestamp must be a number"));
  }
  if (options.nonce !== void 0 && (typeof options.nonce !== "string" || options.nonce.trim() === "")) {
    return done(new JsonWebTokenError("nonce must be a non-empty string"));
  }
  var clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1e3);
  if (!jwtString) {
    return done(new JsonWebTokenError("jwt must be provided"));
  }
  if (typeof jwtString !== "string") {
    return done(new JsonWebTokenError("jwt must be a string"));
  }
  var parts = jwtString.split(".");
  if (parts.length !== 3) {
    return done(new JsonWebTokenError("jwt malformed"));
  }
  var decodedToken;
  try {
    decodedToken = decode(jwtString, { complete: true });
  } catch (err) {
    return done(err);
  }
  if (!decodedToken) {
    return done(new JsonWebTokenError("invalid token"));
  }
  var header = decodedToken.header;
  var getSecret;
  if (typeof secretOrPublicKey === "function") {
    if (!callback) {
      return done(new JsonWebTokenError("verify must be called asynchronous if secret or public key is provided as a callback"));
    }
    getSecret = secretOrPublicKey;
  } else {
    getSecret = function(header2, secretCallback) {
      return secretCallback(null, secretOrPublicKey);
    };
  }
  return getSecret(header, function(err, secretOrPublicKey2) {
    if (err) {
      return done(new JsonWebTokenError("error in secret or public key callback: " + err.message));
    }
    var hasSignature = parts[2].trim() !== "";
    if (!hasSignature && secretOrPublicKey2) {
      return done(new JsonWebTokenError("jwt signature is required"));
    }
    if (hasSignature && !secretOrPublicKey2) {
      return done(new JsonWebTokenError("secret or public key must be provided"));
    }
    if (!hasSignature && !options.algorithms) {
      options.algorithms = ["none"];
    }
    if (!options.algorithms) {
      options.algorithms = ~secretOrPublicKey2.toString().indexOf("BEGIN CERTIFICATE") || ~secretOrPublicKey2.toString().indexOf("BEGIN PUBLIC KEY") ? PUB_KEY_ALGS : ~secretOrPublicKey2.toString().indexOf("BEGIN RSA PUBLIC KEY") ? RSA_KEY_ALGS : HS_ALGS;
    }
    if (!~options.algorithms.indexOf(decodedToken.header.alg)) {
      return done(new JsonWebTokenError("invalid algorithm"));
    }
    var valid;
    try {
      valid = jws$1.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
    } catch (e) {
      return done(e);
    }
    if (!valid) {
      return done(new JsonWebTokenError("invalid signature"));
    }
    var payload = decodedToken.payload;
    if (typeof payload.nbf !== "undefined" && !options.ignoreNotBefore) {
      if (typeof payload.nbf !== "number") {
        return done(new JsonWebTokenError("invalid nbf value"));
      }
      if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
        return done(new NotBeforeError("jwt not active", new Date(payload.nbf * 1e3)));
      }
    }
    if (typeof payload.exp !== "undefined" && !options.ignoreExpiration) {
      if (typeof payload.exp !== "number") {
        return done(new JsonWebTokenError("invalid exp value"));
      }
      if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
        return done(new TokenExpiredError("jwt expired", new Date(payload.exp * 1e3)));
      }
    }
    if (options.audience) {
      var audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
      var target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
      var match = target.some(function(targetAudience) {
        return audiences.some(function(audience) {
          return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
        });
      });
      if (!match) {
        return done(new JsonWebTokenError("jwt audience invalid. expected: " + audiences.join(" or ")));
      }
    }
    if (options.issuer) {
      var invalid_issuer = typeof options.issuer === "string" && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
      if (invalid_issuer) {
        return done(new JsonWebTokenError("jwt issuer invalid. expected: " + options.issuer));
      }
    }
    if (options.subject) {
      if (payload.sub !== options.subject) {
        return done(new JsonWebTokenError("jwt subject invalid. expected: " + options.subject));
      }
    }
    if (options.jwtid) {
      if (payload.jti !== options.jwtid) {
        return done(new JsonWebTokenError("jwt jwtid invalid. expected: " + options.jwtid));
      }
    }
    if (options.nonce) {
      if (payload.nonce !== options.nonce) {
        return done(new JsonWebTokenError("jwt nonce invalid. expected: " + options.nonce));
      }
    }
    if (options.maxAge) {
      if (typeof payload.iat !== "number") {
        return done(new JsonWebTokenError("iat required when maxAge is specified"));
      }
      var maxAgeTimestamp = timespan$1(options.maxAge, payload.iat);
      if (typeof maxAgeTimestamp === "undefined") {
        return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
      }
      if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
        return done(new TokenExpiredError("maxAge exceeded", new Date(maxAgeTimestamp * 1e3)));
      }
    }
    if (options.complete === true) {
      var signature = decodedToken.signature;
      return done(null, {
        header,
        payload,
        signature
      });
    }
    return done(null, payload);
  });
};
var INFINITY$2 = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER$2 = 17976931348623157e292, NAN$2 = 0 / 0;
var argsTag = "[object Arguments]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", stringTag$1 = "[object String]", symbolTag$2 = "[object Symbol]";
var reTrim$2 = /^\s+|\s+$/g;
var reIsBadHex$2 = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary$2 = /^0b[01]+$/i;
var reIsOctal$2 = /^0o[0-7]+$/i;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var freeParseInt$2 = parseInt;
function arrayMap(array, iteratee) {
  var index = -1, length = array ? array.length : 0, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
function baseIsNaN(value) {
  return value !== value;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$1 = objectProto$6.hasOwnProperty;
var objectToString$6 = objectProto$6.toString;
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
var nativeKeys = overArg$1(Object.keys, Object), nativeMax = Math.max;
function arrayLikeKeys(value, inherited) {
  var result = isArray$1(value) || isArguments(value) ? baseTimes(value.length, String) : [];
  var length = result.length, skipIndexes = !!length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$6;
  return value === proto;
}
function includes$1(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = fromIndex && !guard ? toInteger$2(fromIndex) : 0;
  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString$2(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
}
function isArguments(value) {
  return isArrayLikeObject(value) && hasOwnProperty$1.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString$6.call(value) == argsTag);
}
var isArray$1 = Array.isArray;
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isArrayLikeObject(value) {
  return isObjectLike$6(value) && isArrayLike(value);
}
function isFunction(value) {
  var tag = isObject$2(value) ? objectToString$6.call(value) : "";
  return tag == funcTag || tag == genTag;
}
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isObject$2(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike$6(value) {
  return !!value && typeof value == "object";
}
function isString$2(value) {
  return typeof value == "string" || !isArray$1(value) && isObjectLike$6(value) && objectToString$6.call(value) == stringTag$1;
}
function isSymbol$2(value) {
  return typeof value == "symbol" || isObjectLike$6(value) && objectToString$6.call(value) == symbolTag$2;
}
function toFinite$2(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber$2(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign3 = value < 0 ? -1 : 1;
    return sign3 * MAX_INTEGER$2;
  }
  return value === value ? value : 0;
}
function toInteger$2(value) {
  var result = toFinite$2(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
function toNumber$2(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$2(value)) {
    return NAN$2;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$2, "");
  var isBinary = reIsBinary$2.test(value);
  return isBinary || reIsOctal$2.test(value) ? freeParseInt$2(value.slice(2), isBinary ? 2 : 8) : reIsBadHex$2.test(value) ? NAN$2 : +value;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}
var lodash_includes = includes$1;
var boolTag = "[object Boolean]";
var objectProto$5 = Object.prototype;
var objectToString$5 = objectProto$5.toString;
function isBoolean$1(value) {
  return value === true || value === false || isObjectLike$5(value) && objectToString$5.call(value) == boolTag;
}
function isObjectLike$5(value) {
  return !!value && typeof value == "object";
}
var lodash_isboolean = isBoolean$1;
var INFINITY$1 = 1 / 0, MAX_INTEGER$1 = 17976931348623157e292, NAN$1 = 0 / 0;
var symbolTag$1 = "[object Symbol]";
var reTrim$1 = /^\s+|\s+$/g;
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary$1 = /^0b[01]+$/i;
var reIsOctal$1 = /^0o[0-7]+$/i;
var freeParseInt$1 = parseInt;
var objectProto$4 = Object.prototype;
var objectToString$4 = objectProto$4.toString;
function isInteger$1(value) {
  return typeof value == "number" && value == toInteger$1(value);
}
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike$4(value) {
  return !!value && typeof value == "object";
}
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike$4(value) && objectToString$4.call(value) == symbolTag$1;
}
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber$1(value);
  if (value === INFINITY$1 || value === -INFINITY$1) {
    var sign3 = value < 0 ? -1 : 1;
    return sign3 * MAX_INTEGER$1;
  }
  return value === value ? value : 0;
}
function toInteger$1(value) {
  var result = toFinite$1(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN$1;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$1, "");
  var isBinary = reIsBinary$1.test(value);
  return isBinary || reIsOctal$1.test(value) ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8) : reIsBadHex$1.test(value) ? NAN$1 : +value;
}
var lodash_isinteger = isInteger$1;
var numberTag = "[object Number]";
var objectProto$3 = Object.prototype;
var objectToString$3 = objectProto$3.toString;
function isObjectLike$3(value) {
  return !!value && typeof value == "object";
}
function isNumber$1(value) {
  return typeof value == "number" || isObjectLike$3(value) && objectToString$3.call(value) == numberTag;
}
var lodash_isnumber = isNumber$1;
var objectTag = "[object Object]";
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!(value + "");
    } catch (e) {
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto$2.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
var objectToString$2 = objectProto$2.toString;
var getPrototype = overArg(Object.getPrototypeOf, Object);
function isObjectLike$2(value) {
  return !!value && typeof value == "object";
}
function isPlainObject$1(value) {
  if (!isObjectLike$2(value) || objectToString$2.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var lodash_isplainobject = isPlainObject$1;
var stringTag = "[object String]";
var objectProto$1 = Object.prototype;
var objectToString$1 = objectProto$1.toString;
var isArray = Array.isArray;
function isObjectLike$1(value) {
  return !!value && typeof value == "object";
}
function isString$1(value) {
  return typeof value == "string" || !isArray(value) && isObjectLike$1(value) && objectToString$1.call(value) == stringTag;
}
var lodash_isstring = isString$1;
var FUNC_ERROR_TEXT = "Expected a function";
var INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
var symbolTag = "[object Symbol]";
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function before(n, func) {
  var result;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = void 0;
    }
    return result;
  };
}
function once$1(func) {
  return before(2, func);
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign3 = value < 0 ? -1 : 1;
    return sign3 * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
function toInteger(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var lodash_once = once$1;
var timespan = timespan$2;
var PS_SUPPORTED = psSupported;
var jws = jws$3;
var includes = lodash_includes;
var isBoolean = lodash_isboolean;
var isInteger = lodash_isinteger;
var isNumber = lodash_isnumber;
var isPlainObject = lodash_isplainobject;
var isString = lodash_isstring;
var once = lodash_once;
var SUPPORTED_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
if (PS_SUPPORTED) {
  SUPPORTED_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
}
var sign_options_schema = {
  expiresIn: { isValid: function(value) {
    return isInteger(value) || isString(value) && value;
  }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
  notBefore: { isValid: function(value) {
    return isInteger(value) || isString(value) && value;
  }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
  audience: { isValid: function(value) {
    return isString(value) || Array.isArray(value);
  }, message: '"audience" must be a string or array' },
  algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
  header: { isValid: isPlainObject, message: '"header" must be an object' },
  encoding: { isValid: isString, message: '"encoding" must be a string' },
  issuer: { isValid: isString, message: '"issuer" must be a string' },
  subject: { isValid: isString, message: '"subject" must be a string' },
  jwtid: { isValid: isString, message: '"jwtid" must be a string' },
  noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
  keyid: { isValid: isString, message: '"keyid" must be a string' },
  mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' }
};
var registered_claims_schema = {
  iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
  exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
  nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
};
function validate(schema2, allowUnknown, object, parameterName) {
  if (!isPlainObject(object)) {
    throw new Error('Expected "' + parameterName + '" to be a plain object.');
  }
  Object.keys(object).forEach(function(key) {
    var validator = schema2[key];
    if (!validator) {
      if (!allowUnknown) {
        throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
      }
      return;
    }
    if (!validator.isValid(object[key])) {
      throw new Error(validator.message);
    }
  });
}
function validateOptions(options) {
  return validate(sign_options_schema, false, options, "options");
}
function validatePayload(payload) {
  return validate(registered_claims_schema, true, payload, "payload");
}
var options_to_payload = {
  "audience": "aud",
  "issuer": "iss",
  "subject": "sub",
  "jwtid": "jti"
};
var options_for_objects = [
  "expiresIn",
  "notBefore",
  "noTimestamp",
  "audience",
  "issuer",
  "subject",
  "jwtid"
];
var sign2 = function(payload, secretOrPrivateKey, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = {};
  } else {
    options = options || {};
  }
  var isObjectPayload = typeof payload === "object" && !Buffer.isBuffer(payload);
  var header = Object.assign({
    alg: options.algorithm || "HS256",
    typ: isObjectPayload ? "JWT" : void 0,
    kid: options.keyid
  }, options.header);
  function failure(err) {
    if (callback) {
      return callback(err);
    }
    throw err;
  }
  if (!secretOrPrivateKey && options.algorithm !== "none") {
    return failure(new Error("secretOrPrivateKey must have a value"));
  }
  if (typeof payload === "undefined") {
    return failure(new Error("payload is required"));
  } else if (isObjectPayload) {
    try {
      validatePayload(payload);
    } catch (error) {
      return failure(error);
    }
    if (!options.mutatePayload) {
      payload = Object.assign({}, payload);
    }
  } else {
    var invalid_options = options_for_objects.filter(function(opt) {
      return typeof options[opt] !== "undefined";
    });
    if (invalid_options.length > 0) {
      return failure(new Error("invalid " + invalid_options.join(",") + " option for " + typeof payload + " payload"));
    }
  }
  if (typeof payload.exp !== "undefined" && typeof options.expiresIn !== "undefined") {
    return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
  }
  if (typeof payload.nbf !== "undefined" && typeof options.notBefore !== "undefined") {
    return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
  }
  try {
    validateOptions(options);
  } catch (error) {
    return failure(error);
  }
  var timestamp = payload.iat || Math.floor(Date.now() / 1e3);
  if (options.noTimestamp) {
    delete payload.iat;
  } else if (isObjectPayload) {
    payload.iat = timestamp;
  }
  if (typeof options.notBefore !== "undefined") {
    try {
      payload.nbf = timespan(options.notBefore, timestamp);
    } catch (err) {
      return failure(err);
    }
    if (typeof payload.nbf === "undefined") {
      return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
  }
  if (typeof options.expiresIn !== "undefined" && typeof payload === "object") {
    try {
      payload.exp = timespan(options.expiresIn, timestamp);
    } catch (err) {
      return failure(err);
    }
    if (typeof payload.exp === "undefined") {
      return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
  }
  Object.keys(options_to_payload).forEach(function(key) {
    var claim = options_to_payload[key];
    if (typeof options[key] !== "undefined") {
      if (typeof payload[claim] !== "undefined") {
        return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
      }
      payload[claim] = options[key];
    }
  });
  var encoding = options.encoding || "utf8";
  if (typeof callback === "function") {
    callback = callback && once(callback);
    jws.createSign({
      header,
      privateKey: secretOrPrivateKey,
      payload,
      encoding
    }).once("error", callback).once("done", function(signature) {
      callback(null, signature);
    });
  } else {
    return jws.sign({ header, payload, secret: secretOrPrivateKey, encoding });
  }
};
var jsonwebtoken = {
  decode: decode$1,
  verify: verify2,
  sign: sign2,
  JsonWebTokenError: JsonWebTokenError_1,
  NotBeforeError: NotBeforeError_1,
  TokenExpiredError: TokenExpiredError_1
};
const SUBSCRIPTION = "subscription";
const PRODUCT = "product";
const SPECIAL = "special";
const FREE = "free";
const types$1 = { SUBSCRIPTION, PRODUCT, SPECIAL, FREE };
const ACTIVE = "active";
const TRIALING = "trialing";
const PAST_DUE = "past_due";
const PAUSED = "paused";
const DELETED = "deleted";
const statuses = { ACTIVE, TRIALING, PAST_DUE, PAUSED, DELETED };
const YEARLY = "YEARLY";
const MONTHLY = "MONTHLY";
const ONE_TIME = "ONE_TIME";
const NONE$1 = "NONE";
const billingIntervals = { YEARLY, MONTHLY, ONE_TIME, NONE: NONE$1 };
const LICENSED = "LICENSED";
const API_ACCESS = "API_ACCESS";
const CUSTOM_LOGO = "CUSTOM_LOGO";
const CUSTOM_THEMING = "CUSTOM_THEMING";
const FULL_ACCESS = "FULL_ACCESS";
const permissions = { LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING, FULL_ACCESS };
const PREMIUM = "PREMIUM";
const PRO = "PRO";
const ADMIN = "ADMIN";
const TRIAL = "TRIAL";
const STARTER = "STARTER";
const planLabels = { STARTER, PRO, PREMIUM, ADMIN, TRIAL };
const planLabelOrder = [ADMIN, PREMIUM, TRIAL, PRO, STARTER];
const PLANS = {
  777756: {
    id: 777756,
    type: SUBSCRIPTION,
    name: "stagetimer.io Premium Monthly",
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    legacy: false,
    tags: []
  },
  777755: {
    id: 777755,
    type: SUBSCRIPTION,
    name: "stagetimer.io Premium Yearly",
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    legacy: false,
    tags: []
  },
  777758: {
    id: 777758,
    type: PRODUCT,
    name: "stagetimer.io Premium (Single-Event, 10-days)",
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: ONE_TIME,
    legacy: false,
    tags: []
  },
  777754: {
    id: 777754,
    type: SUBSCRIPTION,
    name: "stagetimer.io Pro Monthly",
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: MONTHLY,
    legacy: false,
    tags: []
  },
  777753: {
    id: 777753,
    type: SUBSCRIPTION,
    name: "stagetimer.io Pro Yearly",
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: YEARLY,
    legacy: false,
    tags: []
  },
  777757: {
    id: 777757,
    type: PRODUCT,
    name: "stagetimer.io Pro (Single-Event, 10-days)",
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: ONE_TIME,
    legacy: false,
    tags: []
  },
  746138: {
    id: 746138,
    type: SUBSCRIPTION,
    name: "stagetimer.io Pro Monthly (2022-06)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    legacy: true,
    tags: []
  },
  746137: {
    id: 746137,
    type: SUBSCRIPTION,
    name: "stagetimer.io Pro Yearly (2022-06)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    legacy: true,
    tags: []
  },
  746139: {
    id: 746139,
    type: PRODUCT,
    name: "stagetimer.io Event (2022-06)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: ONE_TIME,
    legacy: true,
    tags: []
  },
  652732: {
    id: 652732,
    type: SUBSCRIPTION,
    name: "stagetimer.io Pro Monthly (2021-12)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    legacy: true,
    tags: []
  },
  652733: {
    id: 652733,
    type: SUBSCRIPTION,
    name: "stagetimer.io Pro Yearly (2021-12)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    legacy: true,
    tags: []
  },
  31179: {
    id: 31179,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Premium Monthly",
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    legacy: false,
    tags: []
  },
  31180: {
    id: 31180,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Premium Yearly",
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    legacy: false,
    tags: []
  },
  31211: {
    id: 31211,
    type: PRODUCT,
    name: "dev.stagetimer.io Premium (Single-Event, 10-days)",
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: ONE_TIME,
    legacy: false,
    tags: []
  },
  31178: {
    id: 31178,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Pro Monthly",
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: MONTHLY,
    legacy: false,
    tags: []
  },
  31177: {
    id: 31177,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Pro Yearly",
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: YEARLY,
    legacy: false,
    tags: []
  },
  31210: {
    id: 31210,
    type: PRODUCT,
    name: "dev.stagetimer.io Pro (Single-Event, 10-days)",
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: ONE_TIME,
    legacy: false,
    tags: []
  },
  20122: {
    id: 20122,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Pro Monthly (2022-06)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    legacy: true,
    tags: []
  },
  20123: {
    id: 20123,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Pro Yearly (2022-06)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    legacy: true,
    tags: []
  },
  20126: {
    id: 20126,
    type: PRODUCT,
    name: "dev.stagetimer.io Event (2022-06)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: ONE_TIME,
    legacy: true,
    tags: []
  },
  11184: {
    id: 11184,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Pro Monthly (2021-12)",
    label: PRO,
    limits: { rooms: -1, devices: -1, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    legacy: true,
    tags: []
  },
  11170: {
    id: 11170,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Pro Yearly (2021-12)",
    label: PRO,
    limits: { rooms: -1, devices: -1, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    legacy: true,
    tags: []
  },
  2001: {
    id: 2001,
    type: SUBSCRIPTION,
    name: "stagetimer.io Enterprise Pro 20",
    label: PRO,
    limits: { rooms: -1, devices: 20, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: YEARLY,
    legacy: false,
    tags: ["enterprise"]
  },
  100: {
    id: 100,
    type: SPECIAL,
    name: "stagetimer.io Admin",
    label: ADMIN,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [FULL_ACCESS],
    billingInterval: NONE$1,
    legacy: false,
    tags: []
  },
  200: {
    id: 200,
    type: SPECIAL,
    name: "stagetimer.io Premium Trial",
    label: TRIAL,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: NONE$1,
    legacy: false,
    tags: []
  },
  0: {
    id: 0,
    type: FREE,
    name: "stagetimer.io Starter",
    label: STARTER,
    limits: { rooms: 3, devices: 3, timers: 3, messages: 3 },
    permissions: [],
    billingInterval: NONE$1,
    legacy: false,
    tags: []
  }
};
const FREE_PLAN = PLANS[0];
const PRODUCT_DAYS = 10;
function getPlan(subscriptionEntity) {
  let id = 0;
  if ((subscriptionEntity == null ? void 0 : subscriptionEntity.type) === SUBSCRIPTION)
    id = Number(subscriptionEntity == null ? void 0 : subscriptionEntity.subscription_plan_id);
  if ((subscriptionEntity == null ? void 0 : subscriptionEntity.type) === PRODUCT)
    id = Number(subscriptionEntity == null ? void 0 : subscriptionEntity.product_id);
  if ((subscriptionEntity == null ? void 0 : subscriptionEntity.type) === SPECIAL)
    id = Number(subscriptionEntity == null ? void 0 : subscriptionEntity.plan_id);
  return getPlanById(id);
}
function getPlanById(id = 0) {
  return PLANS[id] || FREE_PLAN;
}
function planCan(plan, permission) {
  return (plan == null ? void 0 : plan.permissions.includes(permission)) || (plan == null ? void 0 : plan.permissions.includes(FULL_ACCESS));
}
function planName(subscriptionEntity) {
  const plan = getPlan(subscriptionEntity);
  return (plan == null ? void 0 : plan.name) || "";
}
function planIsPaid(plan) {
  return [PRO, PREMIUM].includes(plan == null ? void 0 : plan.label);
}
function getSortedSubscriptions(subscriptions, now = new Date()) {
  if (!subscriptions || !Array.isArray(subscriptions))
    return [];
  const subs = subscriptions.filter((item) => new Date(item.created) <= now).map((sub) => __spreadProps(__spreadValues({}, sub), {
    isActive: planIsActive(sub, now),
    isArchived: planIsArchived(sub, now)
  }));
  return subs.sort((a, b) => {
    if (a.isActive && !b.isActive)
      return -1;
    if (!a.isActive && b.isActive)
      return 1;
    if (a.isArchived && !b.isArchived)
      return 1;
    if (!a.isArchived && b.isArchived)
      return -1;
    const aIndex = planLabelOrder.findIndex((s2) => s2 === getPlan(a).label);
    const bIndex = planLabelOrder.findIndex((s2) => s2 === getPlan(b).label);
    if (aIndex !== bIndex)
      return aIndex - bIndex;
    return b.updated - a.updated;
  });
}
function getActiveSubscription(subscriptions, now = new Date()) {
  const sortedSubs = getSortedSubscriptions(subscriptions, now);
  return sortedSubs.find((sub) => sub.isActive) || null;
}
function planIsArchived(payload, now = new Date()) {
  if (!payload)
    return false;
  const plan = getPlan(payload);
  if ((payload == null ? void 0 : payload.type) === SUBSCRIPTION) {
    const deleted = payload.status === DELETED;
    const deadline = payload.cancellation_effective_date || payload.next_bill_date;
    const isAfterDeadline = deadline ? now > new Date(deadline) : false;
    return deleted && isAfterDeadline;
  }
  if ((payload == null ? void 0 : payload.type) === PRODUCT) {
    const deadline = addDays(new Date(payload.created), PRODUCT_DAYS);
    const isAfterDeadline = isValidDate(deadline) ? now > deadline : false;
    return isAfterDeadline;
  }
  if ((payload == null ? void 0 : payload.type) === SPECIAL) {
    if ((plan == null ? void 0 : plan.label) === ADMIN)
      return false;
    const deadline = payload.active_until;
    return plan.label === TRIAL ? now > new Date(deadline) : false;
  }
  return false;
}
function planIsActive(payload, now = new Date()) {
  if (!payload)
    return false;
  const isArchived = planIsArchived(payload, now);
  if (isArchived)
    return false;
  const plan = getPlan(payload);
  if ((payload == null ? void 0 : payload.type) === SUBSCRIPTION) {
    const active = [ACTIVE].includes(payload.status);
    const deadline = payload.cancellation_effective_date || payload.next_bill_date;
    const isBeforeDeadline = deadline ? now < new Date(deadline) : false;
    return active || isBeforeDeadline;
  }
  if ((payload == null ? void 0 : payload.type) === PRODUCT) {
    const deadline = addDays(new Date(payload.created), PRODUCT_DAYS);
    const isBeforeDeadline = isValidDate(deadline) ? now < deadline : false;
    return isBeforeDeadline;
  }
  if ((payload == null ? void 0 : payload.type) === SPECIAL) {
    if ((plan == null ? void 0 : plan.label) === ADMIN)
      return true;
    const deadline = payload.active_until;
    return deadline ? now < new Date(deadline) : false;
  }
  return false;
}
function activeUntil(payload = "") {
  if (!payload || planIsArchived(payload) || isEnterprise(payload))
    return null;
  if ((payload == null ? void 0 : payload.type) === SUBSCRIPTION) {
    let date = payload.next_bill_date;
    if (payload.status === PAST_DUE)
      date = payload.next_retry_date;
    if (payload.status === DELETED)
      date = payload.cancellation_effective_date;
    return date ? new Date(date) : null;
  }
  if ((payload == null ? void 0 : payload.type) === PRODUCT) {
    return addDays(new Date(payload.created), PRODUCT_DAYS);
  }
  if ((payload == null ? void 0 : payload.type) === SPECIAL) {
    if (isAdmin(payload))
      return null;
    return payload.active_until ? new Date(payload.active_until) : null;
  }
  return null;
}
function activeUntilLabel(payload) {
  if (!payload || planIsArchived(payload) || isAdmin(payload) || isEnterprise(payload))
    return "";
  if ((payload == null ? void 0 : payload.type) === FREE)
    return "";
  const isActive = planIsActive(payload);
  if ((payload == null ? void 0 : payload.type) === SUBSCRIPTION) {
    if ((payload == null ? void 0 : payload.status) === PAST_DUE)
      return "Next retry date";
    if ((payload == null ? void 0 : payload.status) === PAUSED)
      return isActive ? "Active until" : "Paused since";
    if ((payload == null ? void 0 : payload.status) !== DELETED)
      return "Next due";
  }
  return "Active until";
}
function nextBillingAmount(payload) {
  if (!payload)
    return 0;
  if ((payload == null ? void 0 : payload.type) === SUBSCRIPTION) {
    if (planIsArchived(payload))
      return 0;
    if (payload.status === DELETED)
      return 0;
    return Number(payload.next_payment_amount);
  }
  return 0;
}
function isAdmin(payload) {
  const plan = getPlan(payload);
  return Boolean((plan == null ? void 0 : plan.label) === ADMIN);
}
function isEnterprise(payload, now = new Date()) {
  const plan = getPlan(payload);
  return plan.tags.includes("enterprise");
}
function parseFirebaseDocument(payload) {
  if (!payload)
    return null;
  payload.created = parseFirebaseDate(payload == null ? void 0 : payload.created);
  payload.updated = parseFirebaseDate(payload == null ? void 0 : payload.updated);
  return payload;
}
function parsePaddlePrice({ gross = "", net = "", tax = "" } = {}) {
  return {
    currency: String(net.match(/^[^\d]+/)).replace("US$", "$"),
    gross: Number(String(gross.match(/[\d.,]+/)).replace(/,/g, "")),
    net: Number(String(net.match(/[\d.,]+/)).replace(/,/g, "")),
    tax: Number(String(tax.match(/[\d.,]+/)).replace(/,/g, ""))
  };
}
function canChangeToPlan(activePlanId, targetPlanId) {
  if (activePlanId === void 0 || targetPlanId === void 0)
    return null;
  const activePlan = getPlanById(activePlanId);
  const targetPlan = getPlanById(targetPlanId);
  let can = false;
  let description = "";
  let action = null;
  if (activePlanId === targetPlanId) {
    can = false;
    description = "Your plan";
  }
  if ([STARTER, TRIAL, ADMIN, PRO].includes(activePlan.label) && targetPlan.label === PREMIUM) {
    can = true;
    description = "Upgrade to Premium";
  }
  if ([STARTER, TRIAL, ADMIN].includes(activePlan.label) && targetPlan.label === PRO) {
    can = true;
    description = "Upgrade to Pro";
  }
  if (activePlan.label === PREMIUM && targetPlan.label === PRO) {
    if (activePlan.type === SUBSCRIPTION && targetPlan.type === SUBSCRIPTION) {
      can = true;
      description = "Downgrade to Pro";
    } else {
      can = false;
      description = "Included in your plan";
    }
  }
  if (activePlan.label === targetPlan.label) {
    if (activePlan.billingInterval !== YEARLY && targetPlan.billingInterval === YEARLY) {
      can = true;
      description = "Change to yearly";
    } else if (activePlan.billingInterval !== MONTHLY && targetPlan.billingInterval === MONTHLY) {
      can = true;
      description = "Change to monthly";
    } else if (activePlan.billingInterval !== ONE_TIME && targetPlan.billingInterval === ONE_TIME) {
      can = false;
      description = "Included in your plan";
    }
  }
  return { can, description, action };
}
function getElectronSubscription(planId, activeUntil2) {
  const plan = getPlanById(planId);
  const payload = {
    type: plan.type,
    status: ACTIVE,
    created: new Date()
  };
  if (plan.type === SUBSCRIPTION)
    payload.subscription_plan_id = planId;
  if (plan.type === PRODUCT)
    payload.product_id = planId;
  if (plan.type === SPECIAL)
    payload.plan_id = planId;
  if (plan.type === SUBSCRIPTION)
    payload.next_bill_date = new Date(activeUntil2);
  if (plan.type === PRODUCT)
    payload.created = addDays(new Date(activeUntil2), -PRODUCT_DAYS);
  if (plan.type === SPECIAL)
    payload.active_until = new Date(activeUntil2);
  return payload;
}
function parseFirebaseDate(date) {
  if (!date)
    return null;
  if (isValidDate(date))
    return date;
  if (typeof date.toDate === "function")
    return date.toDate();
  if (!isNaN(Date.parse(date)))
    return new Date(date);
  return date;
}
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}
const subscriptionHandler = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SUBSCRIPTION,
  PRODUCT,
  SPECIAL,
  FREE,
  types: types$1,
  ACTIVE,
  TRIALING,
  PAST_DUE,
  PAUSED,
  DELETED,
  statuses,
  YEARLY,
  MONTHLY,
  ONE_TIME,
  NONE: NONE$1,
  billingIntervals,
  LICENSED,
  API_ACCESS,
  CUSTOM_LOGO,
  CUSTOM_THEMING,
  FULL_ACCESS,
  permissions,
  PREMIUM,
  PRO,
  ADMIN,
  TRIAL,
  STARTER,
  planLabels,
  planLabelOrder,
  PLANS,
  FREE_PLAN,
  PRODUCT_DAYS,
  getPlan,
  getPlanById,
  planCan,
  planName,
  planIsPaid,
  getSortedSubscriptions,
  getActiveSubscription,
  planIsArchived,
  planIsActive,
  activeUntil,
  activeUntilLabel,
  nextBillingAmount,
  isAdmin,
  isEnterprise,
  parseFirebaseDocument,
  parsePaddlePrice,
  canChangeToPlan,
  getElectronSubscription
}, Symbol.toStringTag, { value: "Module" }));
const schema = {
  planId: { type: Number, default: 0 },
  email: { type: String, default: null },
  uid: { type: String, default: null }
};
function signToken(payload, privateKey, expiresIn = "1 month") {
  return jsonwebtoken.sign(_applySchema(payload), privateKey, { algorithm: "RS256", expiresIn });
}
function validateToken(tokenString, publicKey) {
  let decoded, valid;
  try {
    decoded = jsonwebtoken.verify(tokenString, publicKey, { algorithms: ["RS256"] });
    decoded.exp = new Date(decoded.exp * 1e3);
    valid = true;
  } catch (err) {
    if (!err.message.includes("jwt must be provided"))
      console.error("[shared/licenseTokenHandler.js]", err.message);
    decoded = { exp: err.expiredAt || null };
    valid = false;
  }
  return __spreadProps(__spreadValues({}, _applySchema(decoded)), {
    exp: decoded.exp,
    plan: getPlanById(decoded.planId),
    token: tokenString,
    valid,
    active: new Date() < decoded.exp
  });
}
function _applySchema(payload = {}) {
  const result = {};
  for (const key in schema) {
    result[key] = payload[key] || schema[key].default;
  }
  return result;
}
const licenseTokenHandler = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  signToken,
  validateToken
}, Symbol.toStringTag, { value: "Module" }));
const WHITE = "white";
const GREEN = "green";
const RED = "red";
const colors = { WHITE, GREEN, RED };
const messageColors = __spreadValues({}, colors);
const messageColors$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WHITE,
  GREEN,
  RED,
  colors,
  default: messageColors
}, Symbol.toStringTag, { value: "Module" }));
const STOP = "stop";
const CONTINUE = "continue";
const behaviors = { STOP, CONTINUE };
const timerBehaviors = __spreadValues({}, behaviors);
const timerBehaviors$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  STOP,
  CONTINUE,
  behaviors,
  default: timerBehaviors
}, Symbol.toStringTag, { value: "Module" }));
const AUTO = "AUTO";
const HHMMSS = "H:mm:ss";
const HHMM = "H:mm";
const HHMMSS_AM = "h:mm:ss aa";
const HHMM_AM = "h:mm aa";
const HHMMSS_12H = "h:mm:ss";
const HHMM_12H = "h:mm";
const DEFAULT_H12 = HHMMSS_AM;
const DEFAULT_H24 = HHMMSS;
const isH12 = (todFormat) => [HHMMSS_AM, HHMM_AM, HHMMSS_12H, HHMM_12H].includes(todFormat);
const isH24 = (todFormat) => [HHMMSS, HHMM].includes(todFormat);
const formats = { AUTO, HHMMSS, HHMM, HHMMSS_AM, HHMM_AM, HHMMSS_12H, HHMM_12H };
const todFormats = __spreadProps(__spreadValues({}, formats), {
  DEFAULT_H12,
  DEFAULT_H24,
  isH12,
  isH24
});
const todFormats$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AUTO,
  HHMMSS,
  HHMM,
  HHMMSS_AM,
  HHMM_AM,
  HHMMSS_12H,
  HHMM_12H,
  DEFAULT_H12,
  DEFAULT_H24,
  isH12,
  isH24,
  formats,
  default: todFormats
}, Symbol.toStringTag, { value: "Module" }));
const timersSettings = {
  countdownFormat: { type: String, default: HHMMSS$1 },
  todFormat: { type: String, default: AUTO },
  behavior: { type: String, default: CONTINUE }
};
const timersSettings$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: timersSettings
}, Symbol.toStringTag, { value: "Module" }));
const UPDATED_DESC = "updated_desc";
const CREATED_DESC = "created_desc";
const CREATED_ASC = "created_asc";
const NAME_ASC = "name_asc";
const sortOptions = {
  UPDATED_DESC,
  CREATED_DESC,
  CREATED_ASC,
  NAME_ASC
};
const sortOptions$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UPDATED_DESC,
  CREATED_DESC,
  CREATED_ASC,
  NAME_ASC,
  default: sortOptions
}, Symbol.toStringTag, { value: "Module" }));
const COUNTDOWN$1 = "COUNTDOWN";
const COUNTUP$1 = "COUNTUP";
const TOD$1 = "TOD";
const COUNTDOWN_TOD$1 = "COUNTDOWN_TOD";
const COUNTUP_TOD$1 = "COUNTUP_TOD";
const HIDDEN$1 = "HIDDEN";
const appearances = { COUNTDOWN: COUNTDOWN$1, COUNTUP: COUNTUP$1, TOD: TOD$1, COUNTDOWN_TOD: COUNTDOWN_TOD$1, COUNTUP_TOD: COUNTUP_TOD$1, HIDDEN: HIDDEN$1 };
const timerAppearances = __spreadValues({}, appearances);
const timerAppearances$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  COUNTDOWN: COUNTDOWN$1,
  COUNTUP: COUNTUP$1,
  TOD: TOD$1,
  COUNTDOWN_TOD: COUNTDOWN_TOD$1,
  COUNTUP_TOD: COUNTUP_TOD$1,
  HIDDEN: HIDDEN$1,
  appearances,
  default: timerAppearances
}, Symbol.toStringTag, { value: "Module" }));
const NONE = "NONE";
const BELL = "BELL";
const DING = "DING";
const BEEP = "BEEP";
const BUZZER = "BUZZER";
const GONG = "GONG";
const WINDCHIME = "WINDCHIME";
const ITSTIME = "ITSTIME";
const SILENCE = "SILENCE";
const chimes = { NONE, BELL, DING, WINDCHIME, BEEP, BUZZER, GONG, ITSTIME, SILENCE };
const timerChimes = __spreadValues({}, chimes);
const timerChimes$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NONE,
  BELL,
  DING,
  BEEP,
  BUZZER,
  GONG,
  WINDCHIME,
  ITSTIME,
  SILENCE,
  chimes,
  default: timerChimes
}, Symbol.toStringTag, { value: "Module" }));
const COUNTDOWN = "COUNTDOWN";
const COUNTUP = "COUNTUP";
const TOD = "TOD";
const COUNTDOWN_TOD = "COUNTDOWN_TOD";
const COUNTUP_TOD = "COUNTUP_TOD";
const HIDDEN = "HIDDEN";
const modes = { COUNTDOWN, COUNTUP, TOD, COUNTDOWN_TOD, COUNTUP_TOD, HIDDEN };
const isCountdown = (val) => [COUNTDOWN, COUNTDOWN_TOD].includes(val);
const isCountup = (val) => [COUNTUP, COUNTUP_TOD].includes(val);
const timerModes = __spreadProps(__spreadValues({}, modes), {
  isCountdown,
  isCountup
});
const timerModes$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  COUNTDOWN,
  COUNTUP,
  TOD,
  COUNTDOWN_TOD,
  COUNTUP_TOD,
  HIDDEN,
  modes,
  isCountdown,
  isCountup,
  default: timerModes
}, Symbol.toStringTag, { value: "Module" }));
const MANUAL = "MANUAL";
const LINKED = "LINKED";
const SCHEDULED = "SCHEDULED";
const UNTIL = "UNTIL";
const triggers = { MANUAL, LINKED, SCHEDULED, UNTIL };
const timerTriggers = __spreadValues({}, triggers);
const timerTriggers$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MANUAL,
  LINKED,
  SCHEDULED,
  UNTIL,
  triggers,
  default: timerTriggers
}, Symbol.toStringTag, { value: "Module" }));
const DURATION = "DURATION";
const FINISH_TIME = "FINISH_TIME";
const types = { DURATION, FINISH_TIME };
const timerTypes = __spreadValues({}, types);
const timerTypes$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DURATION,
  FINISH_TIME,
  types,
  default: timerTypes
}, Symbol.toStringTag, { value: "Module" }));
exports.clientLifecycle = clientLifecycle;
exports.clientStates = clientStates;
exports.clientViews = clientViews$1;
exports.countdownFormats = countdownFormats$2;
exports.customizeOptions = customizeOptions;
exports.electronUid = electronUid$1;
exports.licenseTokenHandler = licenseTokenHandler;
exports.messageColors = messageColors$1;
exports.sortOptions = sortOptions$1;
exports.subscriptionHandler = subscriptionHandler;
exports.timerAppearances = timerAppearances$1;
exports.timerBehaviors = timerBehaviors$1;
exports.timerChimes = timerChimes$1;
exports.timerModes = timerModes$1;
exports.timerTriggers = timerTriggers$1;
exports.timerTypes = timerTypes$1;
exports.timersSettings = timersSettings$1;
exports.todFormats = todFormats$1;
