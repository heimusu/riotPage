<index>
    <button onclick="{ show_count }">click</button>
    <p show="{ result }">{ result }</p>


    <script>
        import { install } from 'businessman'
        install( '../build/worker-build.js' )
        import { getState } from 'businessman'

        self = this;
        let count = 0;


        getState( 'counter' )
        .then( ( state ) => {
            console.log( state )
        } );

        show_count() {
            count += 1;
            self.result = `count: ${count}`;
            console.log(count);
        }
    </script>

    <style type='scss'>
        button {
            font-size: 200%;
        }
    </style>

</index>
