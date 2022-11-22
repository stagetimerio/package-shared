const ae = "UNKNOWN", ge = "CONNECTED", ue = "DISCONNECTED", Lt = {
  UNKNOWN: ae,
  CONNECTED: ge,
  DISCONNECTED: ue
}, Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UNKNOWN: ae,
  CONNECTED: ge,
  DISCONNECTED: ue,
  lifecycle: Lt
}, Symbol.toStringTag, { value: "Module" })), Te = "JOINED", Oe = "LEFT", De = "DENIED_ROOM_PROTECTED", fe = "DENIED_ROOM_FULL", _e = "DENIED_KICKED", Ht = {
  JOINED: Te,
  LEFT: Oe,
  DENIED_ROOM_PROTECTED: De,
  DENIED_ROOM_FULL: fe,
  DENIED_KICKED: _e
}, pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  JOINED: Te,
  LEFT: Oe,
  DENIED_ROOM_PROTECTED: De,
  DENIED_ROOM_FULL: fe,
  DENIED_KICKED: _e,
  states: Ht
}, Symbol.toStringTag, { value: "Module" })), Ee = "VIEWER", de = "CONTROLLER", Se = "AGENDA", Fe = "MODERATOR", Ne = { VIEWER: Ee, CONTROLLER: de, AGENDA: Se, MODERATOR: Fe }, Bt = { ...Ne }, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VIEWER: Ee,
  CONTROLLER: de,
  AGENDA: Se,
  MODERATOR: Fe,
  views: Ne,
  default: Bt
}, Symbol.toStringTag, { value: "Module" })), Y = "MMMSSF", be = "MMMSS", R = "HHMMSSF", U = "HHMMSS", H = "DHMS", P = "DHHMMSSF", p = "DHHMMSS", W = { MMMSSF: Y, MMMSS: be, HHMMSSF: R, HHMMSS: U, DHMS: H, DHHMMSSF: P, DHHMMSS: p }, Ae = U, Me = (e) => [Y, R, P].includes(e), Ie = (e) => [R, U, H, P, p].includes(e), ve = (e) => [H, P, p].includes(e), jt = {
  ...W,
  DEFAULT_COUNTDOWN_FORMAT: Ae,
  countdownFormats: W,
  withDecimals: Me,
  withHours: Ie,
  withDays: ve
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MMMSSF: Y,
  MMMSS: be,
  HHMMSSF: R,
  HHMMSS: U,
  DHMS: H,
  DHHMMSSF: P,
  DHHMMSS: p,
  countdownFormats: W,
  DEFAULT_COUNTDOWN_FORMAT: Ae,
  withDecimals: Me,
  withHours: Ie,
  withDays: ve,
  default: jt
}, Symbol.toStringTag, { value: "Module" })), Gt = {
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
}, yt = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700
}, xt = {
  SM: "sm",
  MD: "md",
  LG: "lg"
}, f = {
  DEFAULT: "TEXT_STYLE_DEFAULT",
  OUTLINE: "TEXT_STYLE_OUTLINE",
  SHADOW: "TEXT_STYLE_SHADOW"
}, zt = {
  TOP: "top",
  CENTER: "center",
  BOTTOM: "bottom"
}, Wt = {
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
}, $t = {
  HEADER: "HEADER",
  FOOTER: "FOOTER",
  NONE: "NONE"
}, Yt = {
  TOP_LEFT: "topLeft",
  TOP_CENTER: "topCenter",
  TOP_RIGHT: "topRight",
  CENTER_LEFT: "centerLeft",
  CENTER: "center",
  CENTER_RIGHT: "centerRight",
  BOTTOM_LEFT: "bottomLeft",
  BOTTOM_CENTER: "bottomCenter",
  BOTTOM_RIGHT: "bottomRight"
}, kt = {
  BAR_TOP: "BAR_TOP",
  BAR_BOTTOM: "BAR_BOTTOM",
  RING: "RING",
  NONE: "NONE"
}, _ = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
  LIGHT: "LIGHT",
  CONTRAST_LIGHT: "CONTRAST_LIGHT",
  CONTRAST_DARK: "CONTRAST_DARK",
  CANDY: "CANDY",
  MATRIX: "MATRIX",
  MONOKAI: "MONOKAI",
  GRUVBOX: "GRUVBOX"
}, Kt = {
  [_.CUSTOM]: {
    header: "#38BDF8",
    footer: "#38BDF8",
    countdown: "#FFFFFF",
    tod: "#FFFFFF",
    message: "#FFFFFF",
    progress: ["#22C55D", "#F59E0C", "#EF4444"],
    bg: "#1C1918",
    textStyle: f.DEFAULT
  },
  [_.DEFAULT]: {
    header: "#38BDF8",
    footer: "#38BDF8",
    countdown: "#FFFFFF",
    tod: "#FFFFFF",
    message: "#FFFFFF",
    progress: ["#22C55D", "#F59E0C", "#EF4444"],
    bg: "#1C1918",
    textStyle: f.DEFAULT
  },
  [_.LIGHT]: {
    header: "#0891B2",
    footer: "#0891B2",
    countdown: "#262626",
    tod: "#262626",
    message: "#262626",
    progress: ["#16A34A", "#F59E0B", "#DC2626"],
    bg: "#F5F5F5",
    textStyle: f.DEFAULT
  },
  [_.CONTRAST_DARK]: {
    header: "#FFFFFF",
    footer: "#FFFFFF",
    countdown: "#FFFFFF",
    tod: "#FFFFFF",
    message: "#FFFFFF",
    progress: ["#39E039", "#F2C420", "#FF3838"],
    bg: "#000000",
    textStyle: f.DEFAULT
  },
  [_.CONTRAST_LIGHT]: {
    header: "#000000",
    footer: "#000000",
    countdown: "#000000",
    tod: "#000000",
    message: "#000000",
    progress: ["#00C600", "#F5B206", "#EA0000"],
    bg: "#FFFFFF",
    textStyle: f.DEFAULT
  },
  [_.CANDY]: {
    header: "#81F1FD",
    footer: "#81F1FD",
    countdown: "#FFFFFF",
    tod: "#FFFFFF",
    message: "#FFFFFF",
    progress: ["#59EE85", "#FC9091", "#FA6CBD"],
    bg: "#24252F",
    textStyle: f.DEFAULT
  },
  [_.MATRIX]: {
    header: "#0D7C1C",
    footer: "#0D7C1C",
    countdown: "#71F080",
    tod: "#71F080",
    message: "#71F080",
    progress: ["#15BF2D", "#E4AC1D", "#B23D40"],
    bg: "#0D0D0D",
    textStyle: f.DEFAULT
  },
  [_.MONOKAI]: {
    header: "#A193EB",
    footer: "#A193EB",
    countdown: "#FDF8F2",
    tod: "#FDF8F2",
    message: "#FDF8F2",
    progress: ["#A0D774", "#FB8E62", "#FE577D"],
    bg: "#272528",
    textStyle: f.DEFAULT
  },
  [_.GRUVBOX]: {
    header: "#8EC07C",
    footer: "#8EC07C",
    countdown: "#EBDBB2",
    tod: "#EBDBB2",
    message: "#EBDBB2",
    progress: ["#B8BB26", "#FABD2F", "#FB4934"],
    bg: "#282828",
    textStyle: f.DEFAULT
  }
}, Vt = 90, Xt = 75, Zt = 20, Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fonts: Gt,
  fontWeights: yt,
  fontSizes: xt,
  textStyles: f,
  textAlignments: zt,
  backgrounds: Wt,
  headerFooterPositions: $t,
  logoPosition: Yt,
  progressTypes: kt,
  themeNames: _,
  themeObjects: Kt,
  DEFAULT_TIMER_SIZE: Vt,
  DEFAULT_MESSAGE_SIZE: Xt,
  DEFAULT_LOGO_SIZE: Zt
}, Symbol.toStringTag, { value: "Module" })), qt = "STAGETIMERUSER0001", Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qt
}, Symbol.toStringTag, { value: "Module" })), Ce = "white", Ue = "green", Pe = "red", Le = { WHITE: Ce, GREEN: Ue, RED: Pe }, es = { ...Le }, ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WHITE: Ce,
  GREEN: Ue,
  RED: Pe,
  colors: Le,
  default: es
}, Symbol.toStringTag, { value: "Module" })), Re = "@stagetimer/shared", He = "1.0.0", pe = "Shared Library for stagetimer.io", Be = "index.js", he = "Lukas Hermann <hey@lukashermann.dev>", je = {
  type: "git",
  url: "git+https://github.com/lhermann/stagetimer-shared.git"
}, we = "module", Ge = {
  jsonwebtoken: "^8.5.1"
}, ye = {
  vite: "^3.2.4"
}, ss = {
  name: Re,
  version: He,
  description: pe,
  main: Be,
  author: he,
  private: !0,
  repository: je,
  type: we,
  dependencies: Ge,
  devDependencies: ye
}, ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  name: Re,
  version: He,
  description: pe,
  main: Be,
  author: he,
  repository: je,
  type: we,
  dependencies: Ge,
  devDependencies: ye,
  default: ss
}, Symbol.toStringTag, { value: "Module" })), xe = "stop", k = "continue", ze = { STOP: xe, CONTINUE: k }, rs = { ...ze }, is = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  STOP: xe,
  CONTINUE: k,
  behaviors: ze,
  default: rs
}, Symbol.toStringTag, { value: "Module" })), K = "AUTO", B = "H:mm:ss", V = "H:mm", h = "h:mm:ss aa", X = "h:mm aa", Z = "h:mm:ss", J = "h:mm", We = h, $e = B, Ye = (e) => [h, X, Z, J].includes(e), ke = (e) => [B, V].includes(e), Ke = { AUTO: K, HHMMSS: B, HHMM: V, HHMMSS_AM: h, HHMM_AM: X, HHMMSS_12H: Z, HHMM_12H: J }, os = {
  ...Ke,
  DEFAULT_H12: We,
  DEFAULT_H24: $e,
  isH12: Ye,
  isH24: ke
}, cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AUTO: K,
  HHMMSS: B,
  HHMM: V,
  HHMMSS_AM: h,
  HHMM_AM: X,
  HHMMSS_12H: Z,
  HHMM_12H: J,
  DEFAULT_H12: We,
  DEFAULT_H24: $e,
  isH12: Ye,
  isH24: ke,
  formats: Ke,
  default: os
}, Symbol.toStringTag, { value: "Module" })), le = {
  countdownFormat: { type: String, default: U },
  todFormat: { type: String, default: K },
  behavior: { type: String, default: k }
}, ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  timersSettings: le,
  default: le
}, Symbol.toStringTag, { value: "Module" })), Ve = "updated_desc", Xe = "created_desc", Ze = "created_asc", Je = "name_asc", ms = {
  UPDATED_DESC: Ve,
  CREATED_DESC: Xe,
  CREATED_ASC: Ze,
  NAME_ASC: Je
}, as = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  UPDATED_DESC: Ve,
  CREATED_DESC: Xe,
  CREATED_ASC: Ze,
  NAME_ASC: Je,
  default: ms
}, Symbol.toStringTag, { value: "Module" })), r = "subscription", u = "product", d = "special", j = "free", gs = { SUBSCRIPTION: r, PRODUCT: u, SPECIAL: d, FREE: j }, w = "active", qe = "trialing", G = "past_due", q = "paused", M = "deleted", us = { ACTIVE: w, TRIALING: qe, PAST_DUE: G, PAUSED: q, DELETED: M }, T = "YEARLY", O = "MONTHLY", E = "ONE_TIME", v = "NONE", Ts = { YEARLY: T, MONTHLY: O, ONE_TIME: E, NONE: v }, o = "LICENSED", c = "API_ACCESS", l = "CUSTOM_LOGO", a = "CUSTOM_THEMING", y = "FULL_ACCESS", Os = { LICENSED: o, API_ACCESS: c, CUSTOM_LOGO: l, CUSTOM_THEMING: a, FULL_ACCESS: y }, D = "PREMIUM", m = "PRO", S = "ADMIN", N = "TRIAL", A = "STARTER", Ds = { STARTER: A, PRO: m, PREMIUM: D, ADMIN: S, TRIAL: N }, $ = [S, D, N, m, A], Q = {
  777756: {
    id: 777756,
    type: r,
    name: "stagetimer.io Premium Monthly",
    label: D,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: O,
    legacy: !1,
    tags: []
  },
  777755: {
    id: 777755,
    type: r,
    name: "stagetimer.io Premium Yearly",
    label: D,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: T,
    legacy: !1,
    tags: []
  },
  777758: {
    id: 777758,
    type: u,
    name: "stagetimer.io Premium (Single-Event, 10-days)",
    label: D,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: E,
    legacy: !1,
    tags: []
  },
  777754: {
    id: 777754,
    type: r,
    name: "stagetimer.io Pro Monthly",
    label: m,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [o, c, l],
    billingInterval: O,
    legacy: !1,
    tags: []
  },
  777753: {
    id: 777753,
    type: r,
    name: "stagetimer.io Pro Yearly",
    label: m,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [o, c, l],
    billingInterval: T,
    legacy: !1,
    tags: []
  },
  777757: {
    id: 777757,
    type: u,
    name: "stagetimer.io Pro (Single-Event, 10-days)",
    label: m,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [o, c, l],
    billingInterval: E,
    legacy: !1,
    tags: []
  },
  746138: {
    id: 746138,
    type: r,
    name: "stagetimer.io Pro Monthly (2022-06)",
    label: m,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: O,
    legacy: !0,
    tags: []
  },
  746137: {
    id: 746137,
    type: r,
    name: "stagetimer.io Pro Yearly (2022-06)",
    label: m,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: T,
    legacy: !0,
    tags: []
  },
  746139: {
    id: 746139,
    type: u,
    name: "stagetimer.io Event (2022-06)",
    label: m,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: E,
    legacy: !0,
    tags: []
  },
  652732: {
    id: 652732,
    type: r,
    name: "stagetimer.io Pro Monthly (2021-12)",
    label: m,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: O,
    legacy: !0,
    tags: []
  },
  652733: {
    id: 652733,
    type: r,
    name: "stagetimer.io Pro Yearly (2021-12)",
    label: m,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: T,
    legacy: !0,
    tags: []
  },
  31179: {
    id: 31179,
    type: r,
    name: "dev.stagetimer.io Premium Monthly",
    label: D,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: O,
    legacy: !1,
    tags: []
  },
  31180: {
    id: 31180,
    type: r,
    name: "dev.stagetimer.io Premium Yearly",
    label: D,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: T,
    legacy: !1,
    tags: []
  },
  31211: {
    id: 31211,
    type: u,
    name: "dev.stagetimer.io Premium (Single-Event, 10-days)",
    label: D,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: E,
    legacy: !1,
    tags: []
  },
  31178: {
    id: 31178,
    type: r,
    name: "dev.stagetimer.io Pro Monthly",
    label: m,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [o, c, l],
    billingInterval: O,
    legacy: !1,
    tags: []
  },
  31177: {
    id: 31177,
    type: r,
    name: "dev.stagetimer.io Pro Yearly",
    label: m,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [o, c, l],
    billingInterval: T,
    legacy: !1,
    tags: []
  },
  31210: {
    id: 31210,
    type: u,
    name: "dev.stagetimer.io Pro (Single-Event, 10-days)",
    label: m,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [o, c, l],
    billingInterval: E,
    legacy: !1,
    tags: []
  },
  20122: {
    id: 20122,
    type: r,
    name: "dev.stagetimer.io Pro Monthly (2022-06)",
    label: m,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: O,
    legacy: !0,
    tags: []
  },
  20123: {
    id: 20123,
    type: r,
    name: "dev.stagetimer.io Pro Yearly (2022-06)",
    label: m,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: T,
    legacy: !0,
    tags: []
  },
  20126: {
    id: 20126,
    type: u,
    name: "dev.stagetimer.io Event (2022-06)",
    label: m,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: E,
    legacy: !0,
    tags: []
  },
  11184: {
    id: 11184,
    type: r,
    name: "dev.stagetimer.io Pro Monthly (2021-12)",
    label: m,
    limits: { rooms: -1, devices: -1, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: O,
    legacy: !0,
    tags: []
  },
  11170: {
    id: 11170,
    type: r,
    name: "dev.stagetimer.io Pro Yearly (2021-12)",
    label: m,
    limits: { rooms: -1, devices: -1, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: T,
    legacy: !0,
    tags: []
  },
  2001: {
    id: 2001,
    type: r,
    name: "stagetimer.io Enterprise Pro 20",
    label: m,
    limits: { rooms: -1, devices: 20, timers: -1, messages: -1 },
    permissions: [o, c, l],
    billingInterval: T,
    legacy: !1,
    tags: ["enterprise"]
  },
  100: {
    id: 100,
    type: d,
    name: "stagetimer.io Admin",
    label: S,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [y],
    billingInterval: v,
    legacy: !1,
    tags: []
  },
  200: {
    id: 200,
    type: d,
    name: "stagetimer.io Premium Trial",
    label: N,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [o, c, l, a],
    billingInterval: v,
    legacy: !1,
    tags: []
  },
  0: {
    id: 0,
    type: j,
    name: "stagetimer.io Starter",
    label: A,
    limits: { rooms: 3, devices: 3, timers: 3, messages: 3 },
    permissions: [],
    billingInterval: v,
    legacy: !1,
    tags: []
  }
}, Qe = Q[0], L = 10;
function F(e) {
  let t = 0;
  return (e == null ? void 0 : e.type) === r && (t = Number(e == null ? void 0 : e.subscription_plan_id)), (e == null ? void 0 : e.type) === u && (t = Number(e == null ? void 0 : e.product_id)), (e == null ? void 0 : e.type) === d && (t = Number(e == null ? void 0 : e.plan_id)), C(t);
}
function C(e = 0) {
  return Q[e] || Qe;
}
function fs(e, t) {
  return (e == null ? void 0 : e.permissions.includes(t)) || (e == null ? void 0 : e.permissions.includes(y));
}
function _s(e) {
  const t = F(e);
  return (t == null ? void 0 : t.name) || "";
}
function Es(e) {
  return [m, D].includes(e == null ? void 0 : e.label);
}
function et(e, t = new Date()) {
  return !e || !Array.isArray(e) ? [] : e.filter((s) => new Date(s.created) <= t).map((s) => ({
    ...s,
    isActive: ee(s, t),
    isArchived: I(s, t)
  })).sort((s, i) => {
    if (s.isActive && !i.isActive)
      return -1;
    if (!s.isActive && i.isActive || s.isArchived && !i.isArchived)
      return 1;
    if (!s.isArchived && i.isArchived)
      return -1;
    const g = $.findIndex((z) => z === F(s).label), b = $.findIndex((z) => z === F(i).label);
    return g !== b ? g - b : i.updated - s.updated;
  });
}
function ds(e, t = new Date()) {
  return et(e, t).find((s) => s.isActive) || null;
}
function I(e, t = new Date()) {
  if (!e)
    return !1;
  const n = F(e);
  if ((e == null ? void 0 : e.type) === r) {
    const s = e.status === M, i = e.cancellation_effective_date || e.next_bill_date, g = i ? t > new Date(i) : !1;
    return s && g;
  }
  if ((e == null ? void 0 : e.type) === u) {
    const s = x(new Date(e.created), L);
    return ne(s) ? t > s : !1;
  }
  if ((e == null ? void 0 : e.type) === d) {
    if ((n == null ? void 0 : n.label) === S)
      return !1;
    const s = e.active_until;
    return n.label === N ? t > new Date(s) : !1;
  }
  return !1;
}
function ee(e, t = new Date()) {
  if (!e || I(e, t))
    return !1;
  const s = F(e);
  if ((e == null ? void 0 : e.type) === r) {
    const i = [w].includes(e.status), g = e.cancellation_effective_date || e.next_bill_date, b = g ? t < new Date(g) : !1;
    return i || b;
  }
  if ((e == null ? void 0 : e.type) === u) {
    const i = x(new Date(e.created), L);
    return ne(i) ? t < i : !1;
  }
  if ((e == null ? void 0 : e.type) === d) {
    if ((s == null ? void 0 : s.label) === S)
      return !0;
    const i = e.active_until;
    return i ? t < new Date(i) : !1;
  }
  return !1;
}
function Ss(e = "") {
  if (!e || I(e) || se(e))
    return null;
  if ((e == null ? void 0 : e.type) === r) {
    let t = e.next_bill_date;
    return e.status === G && (t = e.next_retry_date), e.status === M && (t = e.cancellation_effective_date), t ? new Date(t) : null;
  }
  return (e == null ? void 0 : e.type) === u ? x(new Date(e.created), L) : (e == null ? void 0 : e.type) === d ? te(e) ? null : e.active_until ? new Date(e.active_until) : null : null;
}
function Fs(e) {
  if (!e || I(e) || te(e) || se(e) || (e == null ? void 0 : e.type) === j)
    return "";
  const t = ee(e);
  if ((e == null ? void 0 : e.type) === r) {
    if ((e == null ? void 0 : e.status) === G)
      return "Next retry date";
    if ((e == null ? void 0 : e.status) === q)
      return t ? "Active until" : "Paused since";
    if ((e == null ? void 0 : e.status) !== M)
      return "Next due";
  }
  return "Active until";
}
function Ns(e) {
  return e && (e == null ? void 0 : e.type) === r ? I(e) || e.status === M ? 0 : Number(e.next_payment_amount) : 0;
}
function te(e) {
  const t = F(e);
  return Boolean((t == null ? void 0 : t.label) === S);
}
function se(e, t = new Date()) {
  return F(e).tags.includes("enterprise");
}
function bs(e) {
  return e ? (e.created = me(e == null ? void 0 : e.created), e.updated = me(e == null ? void 0 : e.updated), e) : null;
}
function As({ gross: e = "", net: t = "", tax: n = "" } = {}) {
  return {
    currency: String(t.match(/^[^\d]+/)).replace("US$", "$"),
    gross: Number(String(e.match(/[\d.,]+/)).replace(/,/g, "")),
    net: Number(String(t.match(/[\d.,]+/)).replace(/,/g, "")),
    tax: Number(String(n.match(/[\d.,]+/)).replace(/,/g, ""))
  };
}
function Ms(e, t) {
  if (e === void 0 || t === void 0)
    return null;
  const n = C(e), s = C(t);
  let i = !1, g = "", b = null;
  return e === t && (i = !1, g = "Your plan"), [A, N, S, m].includes(n.label) && s.label === D && (i = !0, g = "Upgrade to Premium"), [A, N, S].includes(n.label) && s.label === m && (i = !0, g = "Upgrade to Pro"), n.label === D && s.label === m && (n.type === r && s.type === r ? (i = !0, g = "Downgrade to Pro") : (i = !1, g = "Included in your plan")), n.label === s.label && (n.billingInterval !== T && s.billingInterval === T ? (i = !0, g = "Change to yearly") : n.billingInterval !== O && s.billingInterval === O ? (i = !0, g = "Change to monthly") : n.billingInterval !== E && s.billingInterval === E && (i = !1, g = "Included in your plan")), { can: i, description: g, action: b };
}
function Is(e, t) {
  const n = C(e), s = {
    type: n.type,
    status: w,
    created: new Date()
  };
  return n.type === r && (s.subscription_plan_id = e), n.type === u && (s.product_id = e), n.type === d && (s.plan_id = e), n.type === r && (s.next_bill_date = new Date(t)), n.type === u && (s.created = x(new Date(t), -L)), n.type === d && (s.active_until = new Date(t)), s;
}
function me(e) {
  return e ? ne(e) ? e : typeof e.toDate == "function" ? e.toDate() : isNaN(Date.parse(e)) ? e : new Date(e) : null;
}
function x(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function ne(e) {
  return e instanceof Date && !isNaN(e);
}
const vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SUBSCRIPTION: r,
  PRODUCT: u,
  SPECIAL: d,
  FREE: j,
  types: gs,
  ACTIVE: w,
  TRIALING: qe,
  PAST_DUE: G,
  PAUSED: q,
  DELETED: M,
  statuses: us,
  YEARLY: T,
  MONTHLY: O,
  ONE_TIME: E,
  NONE: v,
  billingIntervals: Ts,
  LICENSED: o,
  API_ACCESS: c,
  CUSTOM_LOGO: l,
  CUSTOM_THEMING: a,
  FULL_ACCESS: y,
  permissions: Os,
  PREMIUM: D,
  PRO: m,
  ADMIN: S,
  TRIAL: N,
  STARTER: A,
  planLabels: Ds,
  planLabelOrder: $,
  PLANS: Q,
  FREE_PLAN: Qe,
  PRODUCT_DAYS: L,
  getPlan: F,
  getPlanById: C,
  planCan: fs,
  planName: _s,
  planIsPaid: Es,
  getSortedSubscriptions: et,
  getActiveSubscription: ds,
  planIsArchived: I,
  planIsActive: ee,
  activeUntil: Ss,
  activeUntilLabel: Fs,
  nextBillingAmount: Ns,
  isAdmin: te,
  isEnterprise: se,
  parseFirebaseDocument: bs,
  parsePaddlePrice: As,
  canChangeToPlan: Ms,
  getElectronSubscription: Is
}, Symbol.toStringTag, { value: "Module" })), tt = "COUNTDOWN", st = "COUNTUP", nt = "TOD", rt = "COUNTDOWN_TOD", it = "COUNTUP_TOD", ot = "HIDDEN", ct = { COUNTDOWN: tt, COUNTUP: st, TOD: nt, COUNTDOWN_TOD: rt, COUNTUP_TOD: it, HIDDEN: ot }, Cs = { ...ct }, Us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  COUNTDOWN: tt,
  COUNTUP: st,
  TOD: nt,
  COUNTDOWN_TOD: rt,
  COUNTUP_TOD: it,
  HIDDEN: ot,
  appearances: ct,
  default: Cs
}, Symbol.toStringTag, { value: "Module" })), lt = "NONE", mt = "BELL", at = "DING", gt = "BEEP", ut = "BUZZER", Tt = "GONG", Ot = "WINDCHIME", Dt = "ITSTIME", ft = "SILENCE", _t = { NONE: lt, BELL: mt, DING: at, WINDCHIME: Ot, BEEP: gt, BUZZER: ut, GONG: Tt, ITSTIME: Dt, SILENCE: ft }, Ps = { ..._t }, Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NONE: lt,
  BELL: mt,
  DING: at,
  BEEP: gt,
  BUZZER: ut,
  GONG: Tt,
  WINDCHIME: Ot,
  ITSTIME: Dt,
  SILENCE: ft,
  chimes: _t,
  default: Ps
}, Symbol.toStringTag, { value: "Module" })), re = "COUNTDOWN", ie = "COUNTUP", Et = "TOD", oe = "COUNTDOWN_TOD", ce = "COUNTUP_TOD", dt = "HIDDEN", St = { COUNTDOWN: re, COUNTUP: ie, TOD: Et, COUNTDOWN_TOD: oe, COUNTUP_TOD: ce, HIDDEN: dt }, Ft = (e) => [re, oe].includes(e), Nt = (e) => [ie, ce].includes(e), Rs = {
  ...St,
  isCountdown: Ft,
  isCountup: Nt
}, Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  COUNTDOWN: re,
  COUNTUP: ie,
  TOD: Et,
  COUNTDOWN_TOD: oe,
  COUNTUP_TOD: ce,
  HIDDEN: dt,
  modes: St,
  isCountdown: Ft,
  isCountup: Nt,
  default: Rs
}, Symbol.toStringTag, { value: "Module" })), bt = "MANUAL", At = "LINKED", Mt = "SCHEDULED", It = "UNTIL", vt = { MANUAL: bt, LINKED: At, SCHEDULED: Mt, UNTIL: It }, ps = { ...vt }, Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MANUAL: bt,
  LINKED: At,
  SCHEDULED: Mt,
  UNTIL: It,
  triggers: vt,
  default: ps
}, Symbol.toStringTag, { value: "Module" })), Ct = "DURATION", Ut = "FINISH_TIME", Pt = { DURATION: Ct, FINISH_TIME: Ut }, hs = { ...Pt }, js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DURATION: Ct,
  FINISH_TIME: Ut,
  types: Pt,
  default: hs
}, Symbol.toStringTag, { value: "Module" })), ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clientLifecycle: Rt,
  clientStates: pt,
  clientViews: ht,
  countdownFormats: wt,
  customizeOptions: Jt,
  electronUid: Qt,
  index: ws,
  messageColors: ts,
  package: ns,
  settings: ls,
  sortOptions: as,
  subscriptionHandler: vs,
  timerAppearances: Us,
  timerBehaviors: is,
  timerChimes: Ls,
  timerModes: Hs,
  timerTriggers: Bs,
  timerTypes: js,
  todFormats: cs
}, Symbol.toStringTag, { value: "Module" }));
export {
  Rt as clientLifecycle,
  pt as clientStates,
  ht as clientViews,
  wt as countdownFormats,
  Jt as customizeOptions,
  Qt as electronUid,
  ws as index,
  ts as messageColors,
  ns as package,
  ls as settings,
  as as sortOptions,
  vs as subscriptionHandler,
  Us as timerAppearances,
  is as timerBehaviors,
  Ls as timerChimes,
  Hs as timerModes,
  Bs as timerTriggers,
  js as timerTypes,
  cs as todFormats
};
