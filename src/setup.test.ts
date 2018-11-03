import { setupTrackers } from '.'
import { makeMockAnalytics } from './utils/test'

it('creates a trackers without 💥', () => {
  const mockAnalytics = makeMockAnalytics()

  expect(() => setupTrackers(() => mockAnalytics)).not.toThrow()
})
