import actionFetch from './action.fetch';
import obseriot from 'obseriot';

actionFetch.counter = {
  handler: {
    name: 'actionFetchCounter',
    action: () =>{
       counter => obseriot.notify( actionFetch.counter.done, 1 )
    }
  }
}

export default actionFetch.counter;
