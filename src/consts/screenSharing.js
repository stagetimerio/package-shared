export const phases = Object.freeze({
  IDLE: 'idle',
  PAIRED: 'paired',
  PREVIEW: 'preview',
  CONNECTING: 'connecting',
  LIVE: 'live',
  STOPPED: 'stopped',
})

export const reasons = Object.freeze({
  SOURCE_ENDED: 'source-ended',
  CAPTURE_FAILED: 'capture-failed',
  SENDER_LOST: 'sender-lost',
  SENDER_STOPPED: 'sender-stopped',
  OPERATOR_STOPPED: 'operator-stopped',
  OUTPUT_REMOVED: 'output-removed',
  RECEIVER_LIMIT: 'receiver-limit',
  TAKEN_OVER: 'taken-over',
})

export const surfaces = Object.freeze({
  WINDOW: 'window',
  MONITOR: 'monitor',
  BROWSER: 'browser',
})

export const qualities = Object.freeze({
  GOOD: 'good',
  FAIR: 'fair',
  POOR: 'poor',
})

export const limits = Object.freeze({
  MAX_RECEIVERS: 8,
  MAX_SIGNALS_PER_POLL: 32,
  MAX_LOG_LINES: 10,
  MAX_LOG_LINE_LENGTH: 300,
  NAME_MAX_LENGTH: 120,
})
