import { STREAM_BROADCAST, STREAM_TRANSACTIONAL, STREAM_MARKETING } from './emailStreams.js'

export const TEMPLATE_LICENSE_EVENT = 'event-license'
export const TEMPLATE_LICENSE_LIFETIME = 'desktop-app-lifetime-license'
export const TEMPLATE_MAINTENANCE_NOTICE = 'maintenance-notice'
export const TEMPLATE_MEMBER_INVITE = 'member-invite'
export const TEMPLATE_DRIP_WELCOME = 'drip-welcome'
export const TEMPLATE_DRIP_SHARING = 'drip-sharing'
export const TEMPLATE_DRIP_OFFLINE = 'drip-offline'
export const TEMPLATE_DRIP_CUSTOMIZE = 'drip-customize'
export const TEMPLATE_DRIP_RUNDOWN = 'drip-rundown'
export const TEMPLATE_DRIP_COMPANION = 'drip-companion'

export const templateStreamMap = {
  [TEMPLATE_LICENSE_EVENT]: STREAM_TRANSACTIONAL,
  [TEMPLATE_LICENSE_LIFETIME]: STREAM_TRANSACTIONAL,
  [TEMPLATE_MAINTENANCE_NOTICE]: STREAM_BROADCAST,
  [TEMPLATE_MEMBER_INVITE]: STREAM_TRANSACTIONAL,
  [TEMPLATE_DRIP_WELCOME]: STREAM_TRANSACTIONAL,
  [TEMPLATE_DRIP_SHARING]: STREAM_MARKETING,
  [TEMPLATE_DRIP_OFFLINE]: STREAM_MARKETING,
  [TEMPLATE_DRIP_CUSTOMIZE]: STREAM_MARKETING,
  [TEMPLATE_DRIP_RUNDOWN]: STREAM_MARKETING,
  [TEMPLATE_DRIP_COMPANION]: STREAM_MARKETING,
}
