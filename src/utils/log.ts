import { SegmentAnalyticsJs } from '../interfaces'

// tslint:disable no-console

const redBold = 'color: #ff0000; font-weight: bold'
const blueBold = 'color: #0000ff; font-weight: bold'

export const wrapAnalyticsWithDebugLogging = (
  analytics: SegmentAnalyticsJs,
): SegmentAnalyticsJs => {
  const track: SegmentAnalyticsJs['track'] = (...args) => {
    console.log('%c[TRACK]', redBold, {
      event: args[0],
      properties: args[1],
      options: args[2],
    })
    analytics.track(...args)
  }
  const identify: SegmentAnalyticsJs['identify'] = (...args) => {
    console.log('[IDENTIFY]', blueBold, {
      userId: args[0],
      traits: args[1],
      options: args[2],
    })
    analytics.identify(...args)
  }
  return {
    track,
    identify,
  }
}
