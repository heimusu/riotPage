import store from './store';
import action from '../lib/action/action';
import obseriot from 'obseriot';

store.counter = {
  state: {},
  handler: {
    name: 'storeCounter',
    action: () => store.counter.state
  }
}

obseriot.listen( action.fetch.counter.done, results => {
  store.weather.state += results;
  obseriot.notify( store.counter );
} );
