<index>
    <button onclick="{ show_count }">click</button>
    <p show="{ result }">{ result }</p>


    <script>
        import { install } from 'businessman'
        install( '../build/worker-build.js' )
        import { getState, dispatch, subscribe } from 'businessman'

        self = this;
        let count = 0;


        getState( 'counter' )
        .then( ( state ) => {
            // console.log( state )
        } );

        subscribe('counter', (state, mutationType) => {
            // console.log(state);
            count = state;
        });

        show_count() {
            count += 1;
            dispatch('counter', 'increment', 1);
            self.result = `count: ${count}`;
            // console.log(count);
        }
    </script>

    <style type='scss'>
        button {
            font-size: 200%;
        }
    </style>

</index>
