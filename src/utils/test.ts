import { setupTrackers } from '..'
import { SegmentAnalyticsJs } from '../interfaces'

export enum TestEvents {
  Something = 'something',
  SomethingElse = 'something-else',
}

export const setup = () => {
  const mockAnalytics = makeMockAnalytics()
  const trackers = setupTrackers<TestEvents>(() => mockAnalytics)
  return {
    mockAnalytics,
    trackers,
  }
}

export const makeMockAnalytics = () => ({
  identify: jest.fn<SegmentAnalyticsJs['identify']>(),
  track: jest.fn<SegmentAnalyticsJs['track']>(),
})
