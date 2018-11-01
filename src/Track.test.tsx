import { mount } from 'enzyme'
import * as React from 'react'
import { SegmentAnalyticsJs } from './interfaces'
import { setupTrackers } from './setup'

const makeMockAnalytics = () => ({
  identify: jest.fn<SegmentAnalyticsJs['identify']>(),
  track: jest.fn<SegmentAnalyticsJs['track']>(),
})

it('creates a tracker without 💥', () => {
  const mockAnalytics = makeMockAnalytics()
  setupTrackers(() => mockAnalytics)
})

it('tracks when mounted', () => {
  const mockAnalytics = makeMockAnalytics()
  const Track = setupTrackers(() => mockAnalytics).Track
  const event = { name: 'something' }
  mount(<Track event={event} />)
  expect(mockAnalytics.track).toHaveBeenCalledWith(
    event.name,
    undefined,
    undefined,
  )
})
