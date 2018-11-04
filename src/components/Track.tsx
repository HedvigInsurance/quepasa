import * as React from 'react'
import { Mount } from 'react-lifecycle-components'
import { Event, EventCreator, SegmentAnalyticsJs } from '../interfaces'

export interface TrackProps<TNames extends string> {
  event: Event<TNames> | EventCreator<TNames>
}

export const makeTrack = <TNames extends string>(
  analytics: SegmentAnalyticsJs,
) => {
  const Track: React.SFC<TrackProps<TNames>> = ({ event, children }) => (
    <Mount
      on={() => {
        if (typeof event === 'function') {
          const unwrappedEvent = event()
          analytics.track(
            unwrappedEvent.name,
            unwrappedEvent.properties,
            unwrappedEvent.options,
          )
          return
        }
        analytics.track(event.name, event.properties, event.options)
      }}
    >
      {children}
    </Mount>
  )
  return Track
}
