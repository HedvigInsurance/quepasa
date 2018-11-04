import { mount } from 'enzyme'
import * as React from 'react'
import { setup, TestEvents } from '../utils/test'

it('tracks when mounted', () => {
  const {
    mockAnalytics,
    trackers: { Track },
  } = setup()
  const event = { name: TestEvents.Something }
  mount(<Track event={event} />)
  expect(mockAnalytics.track).toHaveBeenCalledWith(
    event.name,
    undefined,
    undefined,
  )
})

it('tracks when mounted with an event creator', () => {
  const {
    mockAnalytics,
    trackers: { Track },
  } = setup()

  const event = { name: TestEvents.Something }
  const eventCreator = () => event
  mount(<Track event={eventCreator} />)

  expect(mockAnalytics.track).toHaveBeenCalledWith(
    event.name,
    undefined,
    undefined,
  )
})
