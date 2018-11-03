import * as React from 'react'
import { Mount } from 'react-lifecycle-components'
import { Event, EventCreator, SegmentAnalyticsJs } from '../interfaces'

export interface TrackProps {
  event: Event | EventCreator
}

export const makeTrack = (analytics: SegmentAnalyticsJs) => {
  const Track: React.SFC<TrackProps> = ({ event, children }) => (
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
