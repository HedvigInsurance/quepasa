import { mount } from 'enzyme'
import * as React from 'react'
import { Mount } from 'react-lifecycle-components'
import { setup } from '../utils/test'

it('Tracks when render prop function is called', () => {
  const {
    mockAnalytics,
    trackers: { TrackAction },
  } = setup()
  const event = { name: 'something' }

  mount(
    <TrackAction event={event}>
      {({ track }) => <Mount on={track} />}
    </TrackAction>,
  )

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
  const event = { name: 'something' }
  const eventCreator = () => event

  mount(
    <TrackAction event={eventCreator}>
      {({ track }) => <Mount on={track} />}
    </TrackAction>,
  )

  expect(mockAnalytics.track).toHaveBeenCalledWith(
    event.name,
    undefined,
    undefined,
  )
})
