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
