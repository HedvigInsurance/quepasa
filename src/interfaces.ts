export interface SegmentAnalyticsJs {
  identify: (
    userId?: string,
    traits?: object,
    options?: object,
    callback?: () => void,
  ) => void
  track: (
    event: string,
    properties?: object,
    options?: object,
    callback?: () => void,
  ) => void
}

export interface Event {
  name: string
  properties?: { [key: string]: any }
  options?: { [key: string]: any }
}

export type EventCreator = () => Event

export interface Identity {
  userId?: string
  traits?: { [key: string]: any }
  options?: { [key: string]: any }
}

export type IdentityCreator = () => Identity
