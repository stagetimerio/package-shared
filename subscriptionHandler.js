// Plan Type
export const SUBSCRIPTION = 'subscription'
export const PRODUCT = 'product'
export const ENTERPRISE = 'enterprise'
export const SPECIAL = 'special'
export const FREE = 'free'
export const types = { SUBSCRIPTION, PRODUCT, ENTERPRISE, SPECIAL, FREE }

// Paddle States
export const ACTIVE = 'active'
export const TRIALING = 'trialing'
export const PAST_DUE = 'past_due'
export const PAUSED = 'paused'
export const DELETED = 'deleted'
export const statuses = { ACTIVE, TRIALING, PAST_DUE, PAUSED, DELETED }

// Billing Intervals
export const YEARLY = 'YEARLY'
export const MONTHLY = 'MONTHLY'
export const ONE_TIME = 'ONE_TIME'
export const NONE = 'NONE'
export const billingIntervals = { YEARLY, MONTHLY, ONE_TIME, NONE }

// Permissions
export const LICENSED = 'LICENSED'
export const API_ACCESS = 'API_ACCESS'
export const CUSTOM_LOGO = 'CUSTOM_LOGO'
export const CUSTOM_THEMING = 'CUSTOM_THEMING'
export const FULL_ACCESS = 'FULL_ACCESS'
export const permissions = { LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING, FULL_ACCESS }

// Plan Labels
export const PREMIUM = 'PREMIUM'
export const PRO = 'PRO'
export const ADMIN = 'ADMIN'
export const TRIAL = 'TRIAL'
export const STARTER = 'STARTER'
export const planLabels = { STARTER, PRO, PREMIUM, ADMIN, TRIAL }

// Plan Label sort order
export const planLabelOrder = [ADMIN, PREMIUM, TRIAL, PRO, STARTER]

// Available Plans
export const PLANS = {

  /******************************************
   * Production
   ******************************************/

  //
  // Premium (prod)
  //
  777756: {
    id: 777756,
    type: SUBSCRIPTION,
    name: 'stagetimer.io Premium Monthly',
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    tags: [],
  },
  777755: {
    id: 777755,
    type: SUBSCRIPTION,
    name: 'stagetimer.io Premium Yearly',
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    tags: [],
  },
  777758: {
    id: 777758,
    type: PRODUCT,
    name: 'stagetimer.io Premium (Single-Event, 10-days)',
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: ONE_TIME,
    tags: [],
  },

  //
  // Pro (prod)
  //
  // Current
  777754: {
    id: 777754,
    type: SUBSCRIPTION,
    name: 'stagetimer.io Pro Monthly',
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: MONTHLY,
    tags: [],
  },
  777753: {
    id: 777753,
    type: SUBSCRIPTION,
    name: 'stagetimer.io Pro Yearly',
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: YEARLY,
    tags: [],
  },
  777757: {
    id: 777757,
    type: PRODUCT,
    name: 'stagetimer.io Pro (Single-Event, 10-days)',
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: ONE_TIME,
    tags: [],
  },
  // 2022-06
  746138: {
    id: 746138,
    type: SUBSCRIPTION,
    name: 'stagetimer.io Pro Monthly (2022-06)',
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    tags: [],
  },
  746137: {
    id: 746137,
    type: SUBSCRIPTION,
    name: 'stagetimer.io Pro Yearly (2022-06)',
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    tags: [],
  },
  746139: {
    id: 746139,
    type: PRODUCT,
    name: 'stagetimer.io Event (2022-06)',
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: ONE_TIME,
    tags: [],
  },
  // 2021-12
  652732: {
    id: 652732,
    type: SUBSCRIPTION,
    name: 'stagetimer.io Pro Monthly (2021-12)',
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    tags: [],
  },
  652733: {
    id: 652733,
    type: SUBSCRIPTION,
    name: 'stagetimer.io Pro Yearly (2021-12)',
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    tags: [],
  },

  /******************************************
   * Staging
   ******************************************/

  //
  // Premium (staging)
  //
  31179: {
    id: 31179,
    type: SUBSCRIPTION,
    name: 'dev.stagetimer.io Premium Monthly',
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    tags: [],
  },
  31180: {
    id: 31180,
    type: SUBSCRIPTION,
    name: 'dev.stagetimer.io Premium Yearly',
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    tags: [],
  },
  31211: {
    id: 31211,
    type: PRODUCT,
    name: 'dev.stagetimer.io Premium (Single-Event, 10-days)',
    label: PREMIUM,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: ONE_TIME,
    tags: [],
  },

  //
  // Pro (staging)
  //
  // Current
  31178: {
    id: 31178,
    type: SUBSCRIPTION,
    name: 'dev.stagetimer.io Pro Monthly',
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: MONTHLY,
    tags: [],
  },
  31177: {
    id: 31177,
    type: SUBSCRIPTION,
    name: 'dev.stagetimer.io Pro Yearly',
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: YEARLY,
    tags: [],
  },
  31210: {
    id: 31210,
    type: PRODUCT,
    name: 'dev.stagetimer.io Pro (Single-Event, 10-days)',
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: ONE_TIME,
    tags: [],
  },
  // 2022-06
  20122: {
    id: 20122,
    type: SUBSCRIPTION,
    name: 'dev.stagetimer.io Pro Monthly (2022-06)',
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    tags: ['legacy'],
  },
  20123: {
    id: 20123,
    type: SUBSCRIPTION,
    name: 'dev.stagetimer.io Pro Yearly (2022-06)',
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    tags: ['legacy'],
  },
  20126: {
    id: 20126,
    type: PRODUCT,
    name: 'dev.stagetimer.io Event (2022-06)',
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: ONE_TIME,
    tags: ['legacy'],
  },
  // 2021-12
  11184: {
    id: 11184,
    type: SUBSCRIPTION,
    name: 'dev.stagetimer.io Pro Monthly (2021-12)',
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: MONTHLY,
    tags: ['legacy'],
  },
  11170: {
    id: 11170,
    type: SUBSCRIPTION,
    name: 'dev.stagetimer.io Pro Yearly (2021-12)',
    label: PRO,
    limits: { rooms: -1, devices: 50, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: YEARLY,
    tags: ['legacy'],
  },

  /******************************************
   * Enterprise
   ******************************************/

  2000: {
    id: 2000,
    type: ENTERPRISE,
    name: 'stagetimer.io Enterprise Pro',
    label: PRO,
    limits: { rooms: -1, devices: 10, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: NONE,
    tags: ['enterprise'],
  },

  2001: {
    id: 2001,
    type: ENTERPRISE,
    name: 'stagetimer.io Enterprise Pro 20',
    label: PRO,
    limits: { rooms: -1, devices: 20, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO],
    billingInterval: NONE,
    tags: ['enterprise'],
  },

  /******************************************
   * Special
   ******************************************/

  100: {
    id: 100,
    type: SPECIAL,
    name: 'stagetimer.io Admin',
    label: ADMIN,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [FULL_ACCESS],
    billingInterval: NONE,
    tags: [],
  },
  200: {
    id: 200,
    type: SPECIAL,
    name: 'stagetimer.io Premium Trial',
    label: TRIAL,
    limits: { rooms: -1, devices: 100, timers: -1, messages: -1 },
    permissions: [LICENSED, API_ACCESS, CUSTOM_LOGO, CUSTOM_THEMING],
    billingInterval: NONE,
    tags: [],
  },

  /******************************************
   * Free
   ******************************************/

  0: {
    id: 0,
    type: FREE,
    name: 'stagetimer.io Starter',
    label: STARTER,
    limits: { rooms: 3, devices: 3, timers: 3, messages: 3 },
    permissions: [],
    billingInterval: NONE,
    tags: [],
  },
}

// Constants
export const FREE_PLAN = PLANS[0]
export const PRODUCT_DAYS = 10

export function getPlan (subscriptionEntity) {
  let id = Number(subscriptionEntity?.plan_id)
  if (subscriptionEntity?.type === SUBSCRIPTION) id = Number(subscriptionEntity?.subscription_plan_id)
  if (subscriptionEntity?.type === PRODUCT) id = Number(subscriptionEntity?.product_id)
  return getPlanById(id)
}

export function getPlanById (id = 0) {
  return PLANS[id] || FREE_PLAN
}

export function planCan (plan, permission) {
  return plan?.permissions.includes(permission) || plan?.permissions.includes(FULL_ACCESS)
}

/**
 * Get the plan name by firebase subscription entity
 * @param  {Object} entity
 * @return {String}
 */
export function planName (subscriptionEntity) {
  const plan = getPlan(subscriptionEntity)
  return plan?.name || ''
}

export function planIsPaid (plan) {
  return [PRO, PREMIUM].includes(plan?.label)
}

/**
 * Get subscriptions sorted by status and date
 * @param {object[]} subscriptions
 * @param {Date} now
 * @returns {object[]}
 */
export function getSortedSubscriptions (subscriptions, now = new Date()) {
  if (!subscriptions || !Array.isArray(subscriptions)) return []
  const subs = subscriptions
    .filter(item => new Date(item.created) <= now)
    .map(sub => ({
      ...sub,
      isActive: planIsActive(sub, now),
      isArchived: planIsArchived(sub, now),
    }))

  return subs.sort((a, b) => {
    // Separate by active & archived
    if (a.isActive && !b.isActive) return -1
    if (!a.isActive && b.isActive) return 1
    if (a.isArchived && !b.isArchived) return 1
    if (!a.isArchived && b.isArchived) return -1

    // sort by plan label order
    const aIndex = planLabelOrder.findIndex(s => s === getPlan(a).label)
    const bIndex = planLabelOrder.findIndex(s => s === getPlan(b).label)
    if (aIndex !== bIndex) return aIndex - bIndex

    // sort by updated
    return b.updated - a.updated
  })
}

/**
 * [getActiveSubscription description]
 * @param  {object[]}    subscriptions
 * @return {object|null}
 */
export function getActiveSubscription (subscriptions, now = new Date()) {
  const sortedSubs = getSortedSubscriptions(subscriptions, now)
  return sortedSubs.find(sub => sub.isActive) || null
}

/**
 * Checks is a subscription or product is deleted
 *
 * @param {Object} payload from firestore 'subscription' collection
 * @param {Date} now
 * @return {Boolean}
 */
export function planIsArchived (payload, now = new Date()) {
  if (!payload) return false
  const plan = getPlan(payload)

  // Handle Subscriptions
  if (payload?.type === SUBSCRIPTION) {
    const deleted = payload.status === DELETED
    const deadline = payload.cancellation_effective_date || payload.next_bill_date
    const isAfterDeadline = deadline ? now > new Date(deadline) : false
    return deleted && isAfterDeadline
  }

  // Handle Products
  if (payload?.type === PRODUCT) {
    const deadline = addDays(new Date(payload.created), PRODUCT_DAYS)
    const isAfterDeadline = isValidDate(deadline) ? now > deadline : false
    return isAfterDeadline
  }

  // Handle Specials
  if (payload?.type === SPECIAL) {
    if (plan?.label === ADMIN) return false
    const deadline = payload.active_until
    return plan.label === TRIAL ? now > new Date(deadline) : false
  }

  return false
}

/**
 * Checks if a subscription or productis active (user has pro status)
 * TODO: deactivate on refunds (e.g. u7S0HUaUlFcOtCUwpAl9VtAveKl1)
 *
 * @param  {Object} payload from firestore 'subscription' collection
 * @param {Date} now
 * @return {Boolean}
 */
export function planIsActive (payload, now = new Date()) {
  if (!payload) return false
  const isArchived = planIsArchived(payload, now)
  if (isArchived) return false
  const plan = getPlan(payload)

  // Handle Subscriptions
  if (payload?.type === SUBSCRIPTION) {
    const active = [ACTIVE].includes(payload.status)
    const deadline = payload.cancellation_effective_date || payload.next_bill_date
    const isBeforeDeadline = deadline ? now < new Date(deadline) : false
    return active || isBeforeDeadline
  }

  // Handle Products
  if (payload?.type === PRODUCT) {
    const deadline = addDays(new Date(payload.created), PRODUCT_DAYS)
    const isBeforeDeadline = isValidDate(deadline) ? now < deadline : false
    return isBeforeDeadline
  }

  // Handle Enterprise
  if (payload?.type === ENTERPRISE) {
    if (!payload.active_until) return true
    const deadline = payload.active_until
    return deadline ? now < new Date(deadline) : false
  }

  // Handle Specials
  if (payload?.type === SPECIAL) {
    if (plan?.label === ADMIN) return true
    const deadline = payload.active_until
    return deadline ? now < new Date(deadline) : false
  }

  return false
}

export function activeUntil (payload = '') {
  if (!payload || planIsArchived(payload) || isAdmin(payload)) return null
  if (payload?.type === SUBSCRIPTION) {
    let date = payload.next_bill_date
    if (payload.status === PAST_DUE) date = payload.next_retry_date
    if (payload.status === DELETED) date = payload.cancellation_effective_date
    return date ? new Date(date) : null
  }
  if (payload?.type === PRODUCT) {
    return addDays(new Date(payload.created), PRODUCT_DAYS)
  }
  return payload.active_until ? new Date(payload.active_until) : null
}

export function activeUntilLabel (payload) {
  if (!payload || planIsArchived(payload) || isAdmin(payload)) return ''
  if (payload?.type === FREE) return ''

  const isActive = planIsActive(payload)
  if (payload?.type === SUBSCRIPTION) {
    if (payload?.status === PAST_DUE) return 'Next retry date'
    if (payload?.status === PAUSED) return isActive ? 'Active until' : 'Paused since'
    if (payload?.status !== DELETED) return 'Next due'
  }
  return 'Active until'
}

export function nextBillingAmount (payload) {
  if (!payload) return 0
  if (payload?.type === SUBSCRIPTION) {
    if (planIsArchived(payload)) return 0
    if (payload.status === DELETED) return 0
    return Number(payload.next_payment_amount)
  }
  return 0
}

export function isAdmin (subscriptionEntity) {
  const plan = getPlan(subscriptionEntity)
  return Boolean(plan?.label === ADMIN)
}

export function isEnterprise (subscriptionEntity) {
  const plan = getPlan(subscriptionEntity)
  return Boolean(plan?.type === ENTERPRISE)
}

export function parseFirebaseDocument (payload) {
  if (!payload) return null
  payload.created = parseFirebaseDate(payload?.created)
  payload.updated = parseFirebaseDate(payload?.updated)
  return payload
}

/**
 * Get raw number from paddle price string
 * @param  {String} str
 * @return {Number}
 */
export function parsePaddlePrice ({ gross = '', net = '', tax = '' } = {}) {
  return {
    currency: String(net.match(/^[^\d]+/)).replace('US$', '$'),
    gross: Number(String(gross.match(/[\d.,]+/)).replace(/,/g, '')),
    net: Number(String(net.match(/[\d.,]+/)).replace(/,/g, '')),
    tax: Number(String(tax.match(/[\d.,]+/)).replace(/,/g, '')),
  }
}

/**
 * Check if the user can upgrade/downgrade to tge given plan ID
 * @param  {Number} activePlanId
 * @param  {Number} targetPlanId
 * @return {Object<{ can: Boolean, description: String }> | null}
 */
export function canChangeToPlan (activePlanId, targetPlanId) {
  if (activePlanId === undefined || targetPlanId === undefined) return null

  const activePlan = getPlanById(activePlanId)
  const targetPlan = getPlanById(targetPlanId)

  let can = false
  let description = ''
  let action = null

  if (activePlanId === targetPlanId) {
    can = false
    description = 'Your plan'
  }
  if ([STARTER, TRIAL, ADMIN, PRO].includes(activePlan.label) && targetPlan.label === PREMIUM) {
    can = true
    description = 'Upgrade to Premium'
  }
  if ([STARTER, TRIAL, ADMIN].includes(activePlan.label) && targetPlan.label === PRO) {
    can = true
    description = 'Upgrade to Pro'
  }
  if (activePlan.label === PREMIUM && targetPlan.label === PRO) {
    if (activePlan.type === SUBSCRIPTION && targetPlan.type === SUBSCRIPTION) {
      can = true
      description = 'Downgrade to Pro'
    } else {
      can = false
      description = 'Included in your plan'
    }
  }
  if (activePlan.label === targetPlan.label) {
    if (activePlan.billingInterval !== YEARLY && targetPlan.billingInterval === YEARLY) {
      can = true
      description = 'Change to yearly'
    } else if (activePlan.billingInterval !== MONTHLY && targetPlan.billingInterval === MONTHLY) {
      can = true
      description = 'Change to monthly'
    } else if (activePlan.billingInterval !== ONE_TIME && targetPlan.billingInterval === ONE_TIME) {
      can = false
      description = 'Included in your plan'
    }
  }

  return { can, description, action }
}

export function getElectronSubscription (planId, activeUntil) {
  const plan = getPlanById(planId)
  const payload = {
    type: plan.type,
    status: ACTIVE,
    created: new Date(),
  }

  // planId key
  if (plan.type === SUBSCRIPTION) payload.subscription_plan_id = planId
  if (plan.type === PRODUCT) payload.product_id = planId
  if (plan.type === ENTERPRISE) payload.plan_id = planId
  if (plan.type === SPECIAL) payload.plan_id = planId

  // active until
  if (plan.type === SUBSCRIPTION) payload.next_bill_date = new Date(activeUntil)
  if (plan.type === PRODUCT) payload.created = addDays(new Date(activeUntil), -PRODUCT_DAYS)
  if (plan.type === ENTERPRISE) payload.active_until = new Date(activeUntil)
  if (plan.type === SPECIAL) payload.active_until = new Date(activeUntil)

  return payload
}

//
// Internal helper functions
//

function parseFirebaseDate (date) {
  if (!date) return null
  if (isValidDate(date)) return date
  if (typeof date.toDate === 'function') return date.toDate()
  if (!isNaN(Date.parse(date))) return new Date(date)
  return date
}

function addDays (date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

function isValidDate (date) {
  return date instanceof Date && !isNaN(date)
}



