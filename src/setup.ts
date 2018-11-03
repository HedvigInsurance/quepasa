import { makeIdentify } from './components/Identify'
import { makeTrack } from './components/Track'
import { makeTrackAction } from './components/TrackAction'
import { SegmentAnalyticsJs } from './interfaces'
import { wrapAnalyticsWithDebugLogging } from './utils/log'

interface QuepasaOptions {
  debug: boolean | undefined
}

export const setupTrackers = (
  analyticsSelector: () => SegmentAnalyticsJs,
  options?: QuepasaOptions,
) => {
  let analytics = analyticsSelector()
  if (options) {
    if (options.debug) {
      analytics = wrapAnalyticsWithDebugLogging(analytics)
    }
  }
  if (!analytics) {
    throw new Error('Must provide an analytics selector')
  }

  return {
    Track: makeTrack(analytics),
    TrackAction: makeTrackAction(analytics),
    Identify: makeIdentify(analytics),
  }
}
