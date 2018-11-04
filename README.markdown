# quepasa - Declarative tracking with Segment 📊

## Install

```shell
  yarn add quepasa
```

## Usage

Setup the trackers:

```ts
  const segment = window.analytics // If using analytics.js on web
  const segment = require('react-native-segment-analytics-io') // If using Segment on react-native
  const { Track, TrackAction, Identify } = setupTrackers(() => segment)
```

`<Track />`:

```jsx
  <Track event={{ name: 'some-kind-of-event' }} />
```

`<TrackAction />`:

```jsx
  <TrackAction event={{ name: 'some-event' }}>
    {({track}) => <button onClick={() => track()} />}
  </TrackAction>
```

`<Identify />`:

```jsx
  <Identify identity={{userId: '1'}} />
```

## API

- `setupTrackers<TEvents>(segment: SegmentAnalyticsJs): { Track, TrackAction, Identify }`

Creates trackers with the provided `SegmentAnalyticsJs`-instance. You may provide an enum `TEvents`,
in which case the created components will only accept events in that enum, or any of the `SemanticEvents`.

- `<Track event={Event | EventCreator} />`

Tracks the provided event when mounted. You can provide event as a literal object or a function.
If a function is provided, the function will be called to construct the event when tracking should occur.

- `<TrackAction event={Event | EventCreator}>{(track: (event) => void) => children}</TrackAction>`

Provides a function `track` as a render prop, which you may then call to perform the desired track

- `<Identify identity={Identity | IdentityCreator} />`

Sets the identity for the current user when mounted.

- SemanticEvents

Object of enums of all the semantic events, provided for convenience. These are by default accepted
as event names for components that track events.
