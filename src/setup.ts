import { SegmentAnalyticsJs } from './interfaces'
import { makeTrack } from './Track'

export const setupTrackers = (analyticsSelector: () => SegmentAnalyticsJs) => {
  const analytics = analyticsSelector()

  return { Track: makeTrack(analytics) }
}
