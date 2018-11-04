import * as React from 'react'
import { Event, EventCreator, SegmentAnalyticsJs } from '../interfaces'

export interface TrackActionProps<TEventNames extends string> {
  event: Event<TEventNames> | EventCreator<TEventNames>
  children: (props: { track: () => void }) => React.ReactNode
}

export const makeTrackAction = <TEventNames extends string>(
  analytics: SegmentAnalyticsJs,
) => {
  const TrackAction: React.SFC<TrackActionProps<TEventNames>> = ({
    event,
    children,
  }) => (
    <>
      {children({
        track: () => {
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
        },
      })}
    </>
  )
  return TrackAction
}
