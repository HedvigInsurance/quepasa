import { mount } from 'enzyme'
import * as React from 'react'
import { setup } from '../utils/test'

it('identifies when mounted', () => {
  const {
    mockAnalytics,
    trackers: { Identify },
  } = setup()

  const identity = { userId: '1' }
  mount(<Identify identity={identity} />)
  expect(mockAnalytics.identify).toHaveBeenCalledWith(
    identity.userId,
    undefined,
    undefined,
  )
})

it('identifies when mounted with an identity creator', () => {
  const {
    mockAnalytics,
    trackers: { Identify },
  } = setup()

  const identity = { userId: '1' }
  const identityCreator = () => identity
  mount(<Identify identity={identityCreator} />)
  expect(mockAnalytics.identify).toHaveBeenCalledWith(
    identity.userId,
    undefined,
    undefined,
  )
})
