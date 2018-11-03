import { makeIdentify } from './components/Identify'
import { makeTrack } from './components/Track'
import { makeTrackAction } from './components/TrackAction'
import { SegmentAnalyticsJs } from './interfaces'

export const setupTrackers = (analyticsSelector: () => SegmentAnalyticsJs) => {
  const analytics = analyticsSelector()
  if (!analytics) {
    throw new Error('Must provide an analytics selector')
  }

  return {
    Track: makeTrack(analytics),
    TrackAction: makeTrackAction(analytics),
    Identify: makeIdentify(analytics),
  }
}
