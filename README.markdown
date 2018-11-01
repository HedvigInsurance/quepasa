# quepasa - declarative tracking

## Install

```shell
  yarn add quepasa
```

## Usage

Setup the trackers:

```js
  const segment = window.analytics // If using analytics.js on web
  const segment = require('react-native-segment-analytics-io') // If using Segment on react-native
  const { Track } = setupTrackers(segment)
```

`<Track />`:

```jsx
  <Track event={{ name: 'some-kind-of-event' }} />
```

## API

- `setupTrackers(segment: SegmentAnalyticsJs): { Track }`

Creates trackers with the provided `SegmentAnalyticsJs`-instance.

- `<Track event={Event | EventCreator} />

Tracks the provided event when mounted. You can provide event as a literal object or a function.
If a function is provided, the function will be called to construct the event when tracking should occur.
