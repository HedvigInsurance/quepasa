import { mount } from 'enzyme'
import * as React from 'react'
import { Mount } from 'react-lifecycle-components'
import { setup } from '../utils/test'

it('Identifies when render prop function is called', () => {
  const {
    mockAnalytics,
    trackers: { IdentifyAction },
  } = setup()

  const identity = { userId: '1' }

  mount(
    <IdentifyAction identity={identity}>
      {({ identify }) => <Mount on={identify} />}
    </IdentifyAction>,
  )

  expect(mockAnalytics.identify).toHaveBeenCalledWith(
    identity.userId,
    undefined,
    undefined,
  )
  expect(mockAnalytics.identify).toHaveBeenCalledTimes(1)
})

it('Identifies when render prop function is called with an identity creator', () => {
  const {
    mockAnalytics,
    trackers: { IdentifyAction },
  } = setup()

  const identity = { userId: '1' }
  const identityCreator = () => identity

  mount(
    <IdentifyAction identity={identityCreator}>
      {({ identify }) => <Mount on={identify} />}
    </IdentifyAction>,
  )

  expect(mockAnalytics.identify).toHaveBeenCalledWith(
    identity.userId,
    undefined,
    undefined,
  )
  expect(mockAnalytics.identify).toHaveBeenCalledTimes(1)
})

it('Identifies with information from both the identity and the additional identity information passed in the render prop when render prop function is called', () => {
  const {
    mockAnalytics,
    trackers: { IdentifyAction },
  } = setup()

  const identity = { userId: '1' }
  const additionalIdentityInformation = { traits: { foo: 'bar' } }

  mount(
    <IdentifyAction identity={identity}>
      {({ identify }) => (
        <Mount on={() => identify(additionalIdentityInformation)} />
      )}
    </IdentifyAction>,
  )

  expect(mockAnalytics.identify).toHaveBeenCalledWith(
    identity.userId,
    additionalIdentityInformation.traits,
    undefined,
  )
  expect(mockAnalytics.identify).toHaveBeenCalledTimes(1)
})

it('Identifies with information from both the identity and the additional identity information passed in the render prop when the render prop function is called with an identity creator', () => {
  const {
    mockAnalytics,
    trackers: { IdentifyAction },
  } = setup()

  const identity = { userId: '1' }
  const additionalIdentityInformation = { traits: { foo: 'bar' } }
  const identityCreator = () => identity

  mount(
    <IdentifyAction identity={identityCreator}>
      {({ identify }) => (
        <Mount on={() => identify(additionalIdentityInformation)} />
      )}
    </IdentifyAction>,
  )

  expect(mockAnalytics.identify).toHaveBeenCalledWith(
    identity.userId,
    additionalIdentityInformation.traits,
    undefined,
  )
  expect(mockAnalytics.identify).toHaveBeenCalledTimes(1)
})
