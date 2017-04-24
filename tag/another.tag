<another>
    <h1>another</h1>


    <script>
        import { install } from 'businessman'
        install( '../build/worker-build.js' )
        import { getState, dispatch, subscribe } from 'businessman'


        // getState( 'counter' )
        // .then( ( state ) => {
        //     // console.log( state )
        //     console.log('getstate');
        // } );

        dispatch('counter', 'increment', 1);
        subscribe('counter', (state, mutationType) => {
            console.log('hit');
            console.log(state);
            // count = state;
        });
    </script>
</another>
