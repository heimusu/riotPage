import { worker } from 'businessman'

worker.registerStore( {
    type: 'counter',
    state: 0,
    mutations: {
        increment: ( state, num ) => {
            return state += num
        }
    },
    actions: {
        increment: ( commit, num = 1 ) => {
            commit( 'increment', num )
        }
    },
    getters: {
        absolute: ( state ) => {
            return Math.abs( state )
        }
    }
} )

worker.start()
