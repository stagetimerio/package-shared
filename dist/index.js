"use strict";
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
const ANONYMOUS = "ANONYMOUS";
const views = { VIEWER, CONTROLLER, AGENDA, MODERATOR, ANONYMOUS };
const clientViews = { ...views };
const clientViews$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VIEWER,
  CONTROLLER,
  AGENDA,
  MODERATOR,
  ANONYMOUS,
  views,
  default: clientViews
}, Symbol.toStringTag, { value: "Module" }));
const DHHMMSS = "DHHMMSS";
const DHHMMSSF = "DHHMMSSF";
const HHHMMSS = "HHHMMSS";
const HHHMMSSF = "HHHMMSSF";
const MMMSS = "MMMSS";
const MMMSSF = "MMMSSF";
const SSS = "SSS";
const SSSF = "SSSF";
const L_DHMS = "L_DHMS";
const L_HMS = "L_HMS";
const L_MS = "L_MS";
const L_S = "L_S";
const HHMMSS$1 = "HHMMSS";
const countdownFormats = { DHHMMSS, DHHMMSSF, HHHMMSS, HHHMMSSF, MMMSS, MMMSSF, SSS, SSSF, L_DHMS, L_HMS, L_MS, L_S };
const DEFAULT_COUNTDOWN_FORMAT = HHHMMSS;
const countdownFormats$1 = {
  ...countdownFormats,
  countdownFormats,
  DEFAULT_COUNTDOWN_FORMAT
};
const countdownFormats$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DHHMMSS,
  DHHMMSSF,
  HHHMMSS,
  HHHMMSSF,
  MMMSS,
  MMMSSF,
  SSS,
  SSSF,
  L_DHMS,
  L_HMS,
  L_MS,
  L_S,
  HHMMSS: HHMMSS$1,
  countdownFormats,
  DEFAULT_COUNTDOWN_FORMAT,
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
const uid = "STAGETIMERUSER0001";
const electronConstants = {
  uid
};
const electronConstants$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  uid,
  default: electronConstants
}, Symbol.toStringTag, { value: "Module" }));
const WHITE = "white";
const GREEN = "green";
const RED = "red";
const colors = { WHITE, GREEN, RED };
const messageColors = { ...colors };
const messageColors$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WHITE,
  GREEN,
  RED,
  colors,
  default: messageColors
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
const timerAppearances = { ...appearances };
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
const STOP = "stop";
const CONTINUE = "continue";
const behaviors = { STOP, CONTINUE };
const timerBehaviors = { ...behaviors };
const timerBehaviors$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  STOP,
  CONTINUE,
  behaviors,
  default: timerBehaviors
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
const timerChimes = { ...chimes };
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
const timerModes = {
  ...modes,
  isCountdown,
  isCountup
};
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
const timerTriggers = { ...triggers };
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
const timerTypes = { ...types };
const timerTypes$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DURATION,
  FINISH_TIME,
  types,
  default: timerTypes
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
const todFormats = {
  ...formats,
  DEFAULT_H12,
  DEFAULT_H24,
  isH12,
  isH24
};
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
const QUEUE_EMAIL = "functions-queue-email";
const QUEUE_AIRTABLE = "functions-queue-airtable";
const QUEUE_STATS = "functions-queue-stats";
const QUEUE_DATA = "functions-queue-data";
const QUEUE_CLEANUP = "functions-queue-cleanup";
const functionQueues = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  QUEUE_EMAIL,
  QUEUE_AIRTABLE,
  QUEUE_STATS,
  QUEUE_DATA,
  QUEUE_CLEANUP
}, Symbol.toStringTag, { value: "Module" }));
const TEAM_OWNER = "TEAM_OWNER";
const TEAM_BILLING = "TEAM_BILLING";
const TEAM_MODERATOR = "TEAM_MODERATOR";
const TEAM_OPERATOR = "TEAM_OPERATOR";
const roles = { TEAM_OWNER, TEAM_BILLING, TEAM_MODERATOR, TEAM_OPERATOR };
const teamRoles = { ...roles };
const teamRoles$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TEAM_OWNER,
  TEAM_BILLING,
  TEAM_MODERATOR,
  TEAM_OPERATOR,
  roles,
  default: teamRoles
}, Symbol.toStringTag, { value: "Module" }));
exports.clientLifecycle = clientLifecycle;
exports.clientStates = clientStates;
exports.clientViews = clientViews$1;
exports.countdownFormats = countdownFormats$2;
exports.customizeOptions = customizeOptions;
exports.electronConstants = electronConstants$1;
exports.functionQueues = functionQueues;
exports.messageColors = messageColors$1;
exports.sortOptions = sortOptions$1;
exports.teamRoles = teamRoles$1;
exports.timerAppearances = timerAppearances$1;
exports.timerBehaviors = timerBehaviors$1;
exports.timerChimes = timerChimes$1;
exports.timerModes = timerModes$1;
exports.timerTriggers = timerTriggers$1;
exports.timerTypes = timerTypes$1;
exports.todFormats = todFormats$1;
