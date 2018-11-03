import { setupTrackers } from '..'
import { SegmentAnalyticsJs } from '../interfaces'

export const setup = () => {
  const mockAnalytics = makeMockAnalytics()
  const trackers = setupTrackers(() => mockAnalytics)
  return {
    mockAnalytics,
    trackers,
  }
}

export const makeMockAnalytics = () => ({
  identify: jest.fn<SegmentAnalyticsJs['identify']>(),
  track: jest.fn<SegmentAnalyticsJs['track']>(),
})
