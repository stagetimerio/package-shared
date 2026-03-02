// Room-scope API permissions
export const ROOM_READ = 1
export const ROOM_SHOWCALL = 2
export const ROOM_EDIT = 4
export const ROOM_ALL = 7

// Team-scope API permissions (future)
export const TEAM_READ = 8
export const TEAM_EDIT = 16

// Combined bitmasks
export const ALL = 31 // ROOM_ALL | TEAM_READ | TEAM_EDIT

// Permission name lookup
export const NAME_LOOKUP = {
  [ROOM_READ]: 'ROOM_READ',
  [ROOM_SHOWCALL]: 'ROOM_SHOWCALL',
  [ROOM_EDIT]: 'ROOM_EDIT',
  [TEAM_READ]: 'TEAM_READ',
  [TEAM_EDIT]: 'TEAM_EDIT',
}
