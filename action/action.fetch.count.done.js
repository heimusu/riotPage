import actionFetchCounter from './action.fetch.weather'

actionFetchCounter.done = {
  handler: {
    name: 'actionFetchCounterDone',
    action: counter => 1
  }
}
