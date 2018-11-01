import * as React from 'react'
import { Mount } from 'react-lifecycle-components'
import { SegmentAnalyticsJs } from './interfaces'

interface Event {
  name: string
  properties?: { [key: string]: any }
  options?: { [key: string]: any }
}

type EventCreator = () => Event

export interface TrackerProps {
  event: Event | EventCreator
}

export const makeTrack = (analytics: SegmentAnalyticsJs) => {
  const Track: React.SFC<TrackerProps> = ({ event, children }) => (
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
