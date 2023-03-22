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
const SUBSCRIPTION = "subscription";
const PRODUCT = "product";
const ENTERPRISE = "enterprise";
const SPECIAL = "special";
const FREE = "free";
const types$1 = { SUBSCRIPTION, PRODUCT, ENTERPRISE, SPECIAL, FREE };
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
    tags: ["legacy"]
  },
  20123: {
    id: 20123,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Pro Yearly (2022-06)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    tags: ["legacy"]
  },
  20126: {
    id: 20126,
    type: PRODUCT,
    name: "dev.stagetimer.io Event (2022-06)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: ONE_TIME,
    tags: ["legacy"]
  },
  11184: {
    id: 11184,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Pro Monthly (2021-12)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    tags: ["legacy"]
  },
  11170: {
    id: 11170,
    type: SUBSCRIPTION,
    name: "dev.stagetimer.io Pro Yearly (2021-12)",
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    tags: ["legacy"]
  },
  2e3: {
    id: 2e3,
    type: ENTERPRISE,
    name: "stagetimer.io Enterprise Pro",
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: NONE$1,
    tags: ["enterprise"]
  },
  2001: {
    id: 2001,
    type: ENTERPRISE,
    name: "stagetimer.io Enterprise Pro 20",
    label: PRO,
    limits: { rooms: -1, devices: 20, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: NONE$1,
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
    tags: []
  }
};
const changeLookupTable = {
  [PRO + ONE_TIME]: {
    [PRO + ONE_TIME]: [false, "Your plan"],
    [PRO + MONTHLY]: [true, "Get Pro"],
    [PRO + YEARLY]: [true, "Get Pro"],
    [PREMIUM + ONE_TIME]: [true, "Get Premium on top"],
    [PREMIUM + MONTHLY]: [true, "Get Premium"],
    [PREMIUM + YEARLY]: [true, "Get Premium"]
  },
  [PRO + MONTHLY]: {
    [PRO + ONE_TIME]: [false, "Included in your plan"],
    [PRO + MONTHLY]: [false, "Your plan"],
    [PRO + YEARLY]: [true, "Switch to Yearly"],
    [PREMIUM + ONE_TIME]: [true, "Get Premium on top"],
    [PREMIUM + MONTHLY]: [true, "Upgrade to Premium"],
    [PREMIUM + YEARLY]: [true, "Upgrade to Premium"]
  },
  [PRO + YEARLY]: {
    [PRO + ONE_TIME]: [false, "Included in your plan"],
    [PRO + MONTHLY]: [true, "Switch to Monthly"],
    [PRO + YEARLY]: [false, "Your plan"],
    [PREMIUM + ONE_TIME]: [true, "Get Premium on top"],
    [PREMIUM + MONTHLY]: [true, "Upgrade to Premium"],
    [PREMIUM + YEARLY]: [true, "Upgrade to Premium"]
  },
  [PREMIUM + ONE_TIME]: {
    [PRO + ONE_TIME]: [false, "Included in your plan"],
    [PRO + MONTHLY]: [true, "Get Pro"],
    [PRO + YEARLY]: [true, "Get Pro"],
    [PREMIUM + ONE_TIME]: [false, "Your plan"],
    [PREMIUM + MONTHLY]: [true, "Get Premium"],
    [PREMIUM + YEARLY]: [true, "Get Premium"]
  },
  [PREMIUM + MONTHLY]: {
    [PRO + ONE_TIME]: [false, "Included in your plan"],
    [PRO + MONTHLY]: [true, "Downgrade to Pro"],
    [PRO + YEARLY]: [true, "Downgrade to Pro"],
    [PREMIUM + ONE_TIME]: [false, "Included in your plan"],
    [PREMIUM + MONTHLY]: [false, "Your plan"],
    [PREMIUM + YEARLY]: [true, "Switch to Yearly"]
  },
  [PREMIUM + YEARLY]: {
    [PRO + ONE_TIME]: [false, "Included in your plan"],
    [PRO + MONTHLY]: [true, "Downgrade to Pro"],
    [PRO + YEARLY]: [true, "Downgrade to Pro"],
    [PREMIUM + ONE_TIME]: [false, "Included in your plan"],
    [PREMIUM + MONTHLY]: [true, "Switch to Monthly"],
    [PREMIUM + YEARLY]: [false, "Your plan"]
  },
  default: {
    [PRO + ONE_TIME]: [true, "Get Pro"],
    [PRO + MONTHLY]: [true, "Get Pro"],
    [PRO + YEARLY]: [true, "Get Pro"],
    [PREMIUM + ONE_TIME]: [true, "Get Premium"],
    [PREMIUM + MONTHLY]: [true, "Get Premium"],
    [PREMIUM + YEARLY]: [true, "Get Premium"]
  },
  disabled: {
    [PRO + ONE_TIME]: [false, "Disabled"],
    [PRO + MONTHLY]: [false, "Disabled"],
    [PRO + YEARLY]: [false, "Disabled"],
    [PREMIUM + ONE_TIME]: [false, "Disabled"],
    [PREMIUM + MONTHLY]: [false, "Disabled"],
    [PREMIUM + YEARLY]: [false, "Disabled"]
  }
};
const FREE_PLAN = PLANS[0];
const PRODUCT_DAYS = 10;
function getPlan(subscriptionEntity) {
  let id = Number(subscriptionEntity == null ? void 0 : subscriptionEntity.plan_id);
  if ((subscriptionEntity == null ? void 0 : subscriptionEntity.type) === SUBSCRIPTION)
    id = Number(subscriptionEntity == null ? void 0 : subscriptionEntity.subscription_plan_id);
  if ((subscriptionEntity == null ? void 0 : subscriptionEntity.type) === PRODUCT)
    id = Number(subscriptionEntity == null ? void 0 : subscriptionEntity.product_id);
  return getPlanById(id);
}
function getPlanById(id = 0) {
  return PLANS[id] || FREE_PLAN;
}
function planCan(plan, permission = null) {
  if (!permission)
    return true;
  return Boolean((plan == null ? void 0 : plan.permissions.includes(permission)) || (plan == null ? void 0 : plan.permissions.includes(FULL_ACCESS)));
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
  const subs = subscriptions.filter((item) => new Date(item.created) <= now).map((sub) => ({
    ...sub,
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
    const aIndex = planLabelOrder.findIndex((s) => s === getPlan(a).label);
    const bIndex = planLabelOrder.findIndex((s) => s === getPlan(b).label);
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
  if ((payload == null ? void 0 : payload.type) === ENTERPRISE) {
    if (!payload.active_until)
      return true;
    const deadline = payload.active_until;
    return deadline ? now < new Date(deadline) : false;
  }
  if ((payload == null ? void 0 : payload.type) === SPECIAL) {
    if ((plan == null ? void 0 : plan.label) === ADMIN)
      return true;
    const deadline = payload.active_until;
    return deadline ? now < new Date(deadline) : false;
  }
  return false;
}
function productActiveUntil(date) {
  return addDays(new Date(date), PRODUCT_DAYS);
}
function activeUntil(payload = "") {
  if (!payload || planIsArchived(payload) || isAdmin(payload))
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
    return productActiveUntil(payload.created);
  }
  return payload.active_until ? new Date(payload.active_until) : null;
}
function activeUntilLabel(payload) {
  if (!payload || planIsArchived(payload) || isAdmin(payload))
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
function isAdmin(subscriptionEntity) {
  const plan = getPlan(subscriptionEntity);
  return Boolean((plan == null ? void 0 : plan.label) === ADMIN);
}
function isEnterprise(subscriptionEntity) {
  const plan = getPlan(subscriptionEntity);
  return Boolean((plan == null ? void 0 : plan.type) === ENTERPRISE);
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
  const activeSelector = activePlan.label + activePlan.billingInterval;
  const targetSelector = targetPlan.label + targetPlan.billingInterval;
  if (activePlan.label === ADMIN || activePlan.type === ENTERPRISE) {
    const [can2, description2] = changeLookupTable.disabled[targetSelector];
    return { can: can2, description: description2 };
  }
  if ([STARTER, TRIAL].includes(activePlan.label)) {
    const [can2, description2] = changeLookupTable.default[targetSelector];
    return { can: can2, description: description2 };
  }
  const lookupLvl2 = changeLookupTable[activeSelector] || changeLookupTable.default;
  const [can, description] = lookupLvl2[targetSelector];
  return { can, description };
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
  if (plan.type === ENTERPRISE)
    payload.plan_id = planId;
  if (plan.type === SPECIAL)
    payload.plan_id = planId;
  if (plan.type === SUBSCRIPTION)
    payload.next_bill_date = new Date(activeUntil2);
  if (plan.type === PRODUCT)
    payload.created = addDays(new Date(activeUntil2), -PRODUCT_DAYS);
  if (plan.type === ENTERPRISE)
    payload.active_until = new Date(activeUntil2);
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
  ENTERPRISE,
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
  productActiveUntil,
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
const functionQueues = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  QUEUE_EMAIL,
  QUEUE_AIRTABLE,
  QUEUE_STATS,
  QUEUE_DATA
}, Symbol.toStringTag, { value: "Module" }));
export {
  clientLifecycle,
  clientStates,
  clientViews$1 as clientViews,
  countdownFormats$2 as countdownFormats,
  customizeOptions,
  electronConstants$1 as electronConstants,
  functionQueues,
  messageColors$1 as messageColors,
  sortOptions$1 as sortOptions,
  subscriptionHandler,
  timerAppearances$1 as timerAppearances,
  timerBehaviors$1 as timerBehaviors,
  timerChimes$1 as timerChimes,
  timerModes$1 as timerModes,
  timerTriggers$1 as timerTriggers,
  timerTypes$1 as timerTypes,
  todFormats$1 as todFormats
};
