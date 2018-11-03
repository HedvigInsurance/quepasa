import { wrapAnalyticsWithDebugLogging } from './log'
import { makeMockAnalytics } from './test'

// tslint:disable no-console

it('Matches snapshot for track', () => {
  const spy = jest.spyOn(console, 'log')

  const debugLogAnalytics = wrapAnalyticsWithDebugLogging(makeMockAnalytics())
  debugLogAnalytics.track('foo')
  expect(spy.mock.calls[0]).toMatchSnapshot()
  jest.clearAllMocks()
})

it('Matches snapshot for identify', () => {
  const spy = jest.spyOn(console, 'log')

  const debugLogAnalytics = wrapAnalyticsWithDebugLogging(makeMockAnalytics())
  debugLogAnalytics.identify('1')
  expect(spy.mock.calls[0]).toMatchSnapshot()
  jest.clearAllMocks()
})
