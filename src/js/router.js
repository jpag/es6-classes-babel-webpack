import Router from 'routerjs'; 
import {Config} from './models';


// create a namespace for all global references?
var router;
if( !window[Config.appNameSpace + 'Router'] ){
	// not defined so generate the singleton router.

	window[Config.appNameSpace + 'Router'] = new Router();

}

router = window[Config.appNameSpace + 'Router'];

module.exports = router