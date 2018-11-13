import { mount } from 'enzyme'
import * as React from 'react'
import { Mount } from 'react-lifecycle-components'
import { setup, TestEvents } from '../utils/test'

it('Tracks when render prop function is called', () => {
  const {
    mockAnalytics,
    trackers: { TrackAction },
  } = setup()
  const event = { name: TestEvents.SomethingElse }

  mount(
    <TrackAction event={event}>
      {({ track }) => <Mount on={track} />}
    </TrackAction>,
  )

  expect(mockAnalytics.track).toHaveBeenCalledTimes(1)
  expect(mockAnalytics.track).toHaveBeenCalledWith(
    event.name,
    undefined,
    undefined,
  )
})

it('Tracks when render prop function is called with an event creator', () => {
  const {
    mockAnalytics,
    trackers: { TrackAction },
  } = setup()
  const event = { name: TestEvents.SomethingElse }
  const eventCreator = () => event

  mount(
    <TrackAction event={eventCreator}>
      {({ track }) => <Mount on={track} />}
    </TrackAction>,
  )

  expect(mockAnalytics.track).toHaveBeenCalledTimes(1)
  expect(mockAnalytics.track).toHaveBeenCalledWith(
    event.name,
    undefined,
    undefined,
  )
})
