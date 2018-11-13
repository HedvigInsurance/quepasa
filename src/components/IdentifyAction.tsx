import * as merge_ from 'deepmerge'
import * as React from 'react'
import { Identity, IdentityCreator, SegmentAnalyticsJs } from '../interfaces'

const merge = ((merge_ as any).default as typeof merge_) || merge_

export interface IdentifyActionProps {
  identity: Identity | IdentityCreator
  children: (
    props: { identify: (additionalIdentityInformation?: Identity) => void },
  ) => React.ReactNode
}

export const makeIdentifyAction = (analytics: SegmentAnalyticsJs) => {
  const IdentifyAction: React.SFC<IdentifyActionProps> = ({
    identity,
    children,
  }) => (
    <>
      {children({
        identify: (additionalIdentityInformation) => {
          if (typeof identity === 'function') {
            const unwrappedIdentity = identity()
            if (additionalIdentityInformation) {
              const mergedIdentity = merge(
                unwrappedIdentity,
                additionalIdentityInformation,
              )
              analytics.identify(
                mergedIdentity.userId,
                mergedIdentity.traits,
                mergedIdentity.options,
              )
              return
            }
            analytics.identify(
              unwrappedIdentity.userId,
              unwrappedIdentity.traits,
              unwrappedIdentity.options,
            )
            return
          }
          if (additionalIdentityInformation) {
            const mergedIdentity = merge(
              identity,
              additionalIdentityInformation,
            )
            analytics.identify(
              mergedIdentity.userId,
              mergedIdentity.traits,
              mergedIdentity.options,
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
