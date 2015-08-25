import {Routes} from './models';


// https://www.npmjs.com/package/history
// http://rackt.github.io/history/stable/GettingStarted.html
// http://rackt.github.io/history/stable/Location.html


// Browser history
import createHistory from 'history/lib/createBrowserHistory';
// Hash history
import createHashHistory from 'history/lib/createHashHistory';
 


class Router {
	
	constructor() {

		// determine how we do the routing
		this.browser_history_support = (window.history != null ? window.history.pushState : null) != null;

		trace(' construct router push support: ' + this.browser_history_support);

		trace( Routes );

		if( this.browser_history_support ){
			this.history = createHistory();
		}else{
			this.history = createHashHistory();
		}


		this.listener = this.history.listen(this.dispatchChange.bind(this));

		// var a = document.querySelectorAll('a[href^="/"]');
		// for( var _ = 0; _ < a.length; _++){
		// 	trace( a[_] );
		// 	a[_].addEventListener('click', this.preventDefault.bind(this), false);
		// }

		// bind to the document click event that is propagated up. Check if it has a href.
		this.preventDefaultOnHrefsBind = this.preventDefaultOnHrefs.bind(this);
		document.addEventListener('click', this.preventDefaultOnHrefsBind );
	}

	preventDefaultOnHrefs(e) {
		trace(' click ');
		e.preventDefault();
		if( e.target.nodeName.toUpperCase() == 'A' ){
			e.preventDefault();
			trace(' clicked preventDefault doc.');
			var url = e.target.getAttribute('href');
			this.history.pushState({ some: 'state' }, url);
		}
	}

	dispatchChange(location){
		trace(' dispatchChange - ');
		trace( location );
	}

	unlisten() {
		// When you're finished, stop the listener.
		this.listener();
		document.removeEventListener('click', this.preventDefaultOnHrefsBind );
		window.removeEventListener('popstate', this.checkUrlBind, false);
	}


	
	
}



// create a namespace for all global references?
// if( !window[Config.appNameSpace + 'Router'] ){

	// not defined so generate the singleton router.
	// window[Config.appNameSpace + 'Router'] = router;
// }
// module.exports = window[Config.appNameSpace + 'Router']


module.exports = Router