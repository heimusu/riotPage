<another>
    <h1>another</h1>
    <h2>{count}</h2>
    <a href="/">back to top</a>
    <script>
        import { getState, dispatch, subscribe } from 'businessman'

        const self = this;
        this.count = 0;

        getState( 'counter' )
        .then( ( state ) => {
            console.log( state )
            console.log('getstate');
            self.count = state;
            self.update();
        } );
    </script>
</another>
