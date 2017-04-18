<index>
    <button onclick="{ show_count }">click</button>
    <p show="{ result }">{ result }</p>


    <script>
        self = this;
        let count = 0;

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
