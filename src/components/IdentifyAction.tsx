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
          const unwrappedIdentity =
            typeof identity === 'function' ? identity() : identity
          const mergedIdentity = merge(
            unwrappedIdentity,
            additionalIdentityInformation || {},
          )
          analytics.identify(
            mergedIdentity.userId,
            mergedIdentity.traits,
            mergedIdentity.options,
          )
        },
      })}
    </>
  )

  return IdentifyAction
}
