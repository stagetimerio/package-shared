# @stagetimerio/shared

Shared constants and utility functions used across the Stagetimer ecosystem — client, server, electron app, and Firebase functions. Centralizing them here keeps every component in sync on timer modes, access rights, formatting options, and common helpers.

Ships as both ESM and CommonJS, with no build step required for consumers.

## Install

```sh
npm i @stagetimerio/shared
```

## Usage

Constants are exported as namespaces; utilities are exported as named functions:

```js
import { timerModes, accessRights, canAccessTeam, compareVersions } from '@stagetimerio/shared'

if (canAccessTeam(team, uid, 'editor')) {
  // ...
}
```

## Constants

Each is a namespace of related values (e.g. `import { timerModes } from '@stagetimerio/shared'`):

| Namespace | Description |
| --- | --- |
| `accessRights` | Access-right flags |
| `apiPermissions` | API permission scopes |
| `clientLifecycle` | Client lifecycle stages |
| `clientStates` | Client connection states |
| `clientViews` | Available client views |
| `countdownFormats` | Countdown display formats |
| `customizeOptions` | Customization option keys |
| `electronConstants` | Electron-app constants |
| `emailStreams` | Transactional email streams |
| `emailTemplates` | Email template identifiers |
| `folderAccess` | Folder access levels |
| `functionQueues` | Firebase function queue names |
| `logoModes` | Logo display modes |
| `messageColors` | Message color presets |
| `outputElements` | Output screen elements |
| `overtimePrefixes` | Overtime prefix options |
| `sortOptions` | Sort-order options |
| `teamRoles` | Team member roles |
| `timerAppearances` | Timer appearance styles |
| `timerBehaviors` | Timer end behaviors |
| `timerChimes` | Timer chime sounds |
| `timerModes` | Timer counting modes |
| `timerTriggers` | Timer trigger types |
| `timerTypes` | Timer types |
| `todFormats` | Time-of-day formats |

## Utilities

### `canAccessTeam(team, uid, roles?, isAdmin?)`

Check whether a user has access to a team based on their role.

```js
canAccessTeam(team, uid)            // any team member
canAccessTeam(team, uid, 'editor')  // specific role
canAccessTeam(team, uid, ['editor', 'owner'])
canAccessTeam(team, uid, 'owner', true)  // admins always pass
```

### `stepValue(value, step, direction, options?)`

Increment or decrement a value to the next multiple of `step`, with optional `min`, `max`, and floating-point `precision`.

```js
stepValue(0.12, 0.05, 'up')               // → 0.15
stepValue(0.12, 0.05, 'down', { min: 0 }) // → 0.10
```

### `compareVersions(a, b)`

Compare two semver strings. Returns a negative number, `0`, or a positive number — usable directly as an `Array.sort` comparator.

```js
compareVersions('3.4.1', '3.5.0')               // → negative
versions.sort((a, b) => compareVersions(b, a))  // descending
```

### `getPreviewScreenshotUrl(url, options?)`

Convert a URL into its preview-screenshot URL (served by a Cloudflare Worker).

```js
getPreviewScreenshotUrl('https://stagetimer.io/pricing')
// → 'https://preview-screenshot.stagetimer.io/stagetimer.io__pricing.jpg'
```

### `parseDocumentSnapshot(snapshot, options?)`

Parse a Firestore `DocumentSnapshot` into a plain object with its `id` and timestamps converted to `Date`. Returns `null` if the document doesn't exist.

```js
const doc = await firestore.collection('users').doc('123').get()
const user = parseDocumentSnapshot(doc)
// → { id: '123', name: '...', createdAt: Date, updatedAt: Date }
```

## Development

```sh
npm install     # install dependencies
npm run build   # bundle to dist/ (ESM + CJS) via Vite
npm test        # run the Vitest suite
```

See [AGENTS.md](./AGENTS.md) for code style and project conventions.

## License

ISC © Lukas Hermann
