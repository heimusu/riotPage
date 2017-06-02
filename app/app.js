import riot from 'riot';
import route from 'riot-route';

import '../tag/app.tag';
import '../tag/index.tag';
import '../tag/another.tag';

route.base('/');

riot.mount('app');

route('/another', ()=>{
    riot.mount('app', 'another');
});


route('/', ()=>{
    riot.mount('app', 'index');
});

route.start(true);
