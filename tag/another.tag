<another>
    <h1>another</h1>


    <script>
        import { getState, dispatch, subscribe } from 'businessman'


            getState( 'counter' )
            .then( ( state ) => {
                console.log( state )
                console.log('getstate');
            } );
    </script>
</another>
