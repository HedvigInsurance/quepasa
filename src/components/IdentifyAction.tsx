import * as React from 'react'
import { Identity, IdentityCreator, SegmentAnalyticsJs } from '../interfaces'

export interface IdentifyActionProps {
  identity: Identity | IdentityCreator
  children: (props: { identify: () => void }) => React.ReactNode
}

export const makeIdentifyAction = (analytics: SegmentAnalyticsJs) => {
  const IdentifyAction: React.SFC<IdentifyActionProps> = ({
    identity,
    children,
  }) => (
    <>
      {children({
        identify: () => {
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
        },
      })}
    </>
  )

  return IdentifyAction
}
