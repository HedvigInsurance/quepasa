import { wrapAnalyticsWithDebugLogging } from './log'
import { makeMockAnalytics } from './test'

// tslint:disable no-console

it('Matches snapshot for track', () => {
  const groupSpy = jest.spyOn(console, 'group')
  const logSpy = jest.spyOn(console, 'log')

  const debugLogAnalytics = wrapAnalyticsWithDebugLogging(makeMockAnalytics())
  debugLogAnalytics.track('foo')
  expect(groupSpy.mock.calls[0]).toMatchSnapshot()
  expect(logSpy.mock.calls[0]).toMatchSnapshot()
  expect(logSpy.mock.calls[1]).toMatchSnapshot()
  expect(logSpy.mock.calls[2]).toMatchSnapshot()
  groupSpy.mockClear()
  logSpy.mockClear()
})

it('Matches snapshot for identify', () => {
  const groupSpy = jest.spyOn(console, 'group')
  const logSpy = jest.spyOn(console, 'log')

  const debugLogAnalytics = wrapAnalyticsWithDebugLogging(makeMockAnalytics())
  debugLogAnalytics.identify('1')
  expect(groupSpy.mock.calls[0]).toMatchSnapshot()
  expect(logSpy.mock.calls[0]).toMatchSnapshot()
  expect(logSpy.mock.calls[1]).toMatchSnapshot()
  expect(logSpy.mock.calls[2]).toMatchSnapshot()
  groupSpy.mockClear()
  logSpy.mockClear()
})
