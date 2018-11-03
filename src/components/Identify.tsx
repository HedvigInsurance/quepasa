import * as React from 'react'
import { Mount } from 'react-lifecycle-components'
import { Identity, IdentityCreator, SegmentAnalyticsJs } from '../interfaces'

export interface IdentifyProps {
  identity: Identity | IdentityCreator
}

export const makeIdentify = (analytics: SegmentAnalyticsJs) => {
  const Identify: React.SFC<IdentifyProps> = ({ identity, children }) => (
    <Mount
      on={() => {
        if (typeof identity === 'function') {
          const unwrappedIdentity = identity()
          analytics.identify(
            unwrappedIdentity.userId,
            unwrappedIdentity.traits,
            unwrappedIdentity.options,
          )
          return
        }
        analytics.identify(identity.userId, identity.traits, identity.options)
      }}
    >
      {children}
    </Mount>
  )
  return Identify
}
