import {Routes} from './models';
import {dispatchEvent} from './helpers';

// https://www.npmjs.com/package/history
// http://rackt.github.io/history/stable/GettingStarted.html
// http://rackt.github.io/history/stable/Location.html


// Browser history
// import createHistory from 'history/lib/createBrowserHistory';
// Hash history
// import createHashHistory from 'history/lib/createHashHistory';
 


class Router {
	
	constructor() {

		// determine how we do the routing
		this.browser_history_support = (window.history != null ? window.history.pushState : null) != null;

		trace(' construct router push support: ' + this.browser_history_support);

		trace( Routes );

		if( !this.browser_history_support ){
			// if you don't have push state support no routing.
			// we could expand on this however later.
			return;
		}else{
			
		}


		// this.listener = this.history.listen(this.dispatchChange.bind(this));

		// var a = document.querySelectorAll('a[href^="/"]');
		// for( var _ = 0; _ < a.length; _++){
		// 	trace( a[_] );
		// 	a[_].addEventListener('click', this.preventDefault.bind(this), false);
		// }

		// bind to the document click event that is propagated up. Check if it has a href.
		this.preventDefaultOnHrefsBind = this.preventDefaultOnHrefs.bind(this);
		document.addEventListener('click', this.preventDefaultOnHrefsBind );
		
		this.dispatchChangeBind = this.dispatchChange.bind(this);
		window.addEventListener('popstate', this.dispatchChangeBind );

		// run on start:
		this.dispatchChange({});

	}

	preventDefaultOnHrefs(e) {
		if( e.target.nodeName.toUpperCase() == 'A' ){
			e.preventDefault();
			trace(' clicked preventDefault doc.');
			var url = e.target.getAttribute('href'),
				state = {url:url};
			history.pushState(state, null, url);

			this.dispatchChange({});
		}
	}

	dispatchChange(e){
		// state was popped, back button or forward.
		// e.state
		trace('\n\n\n dispatchChange - ');
		
		// trace( e );
		// trace( history.state );
		trace( window.location.pathname );
		
		var path = window.location.pathname;
		if(path.substr(path.length - 1) === '/') {
			path = path.substr(0, path.length - 1 );
		}

		// loop through the event list and find the event to dispatch:
		for( var r = 0; r < Routes.length; r++){
			if( path == Routes[r].path ){
				trace("match " + Routes[r].path );
				// match
				dispatchEvent(Routes[r].evt, {});
				break;
			}
		}
	}

	unlisten() {
		document.removeEventListener('click', this.preventDefaultOnHrefsBind );
		window.removeEventListener('popstate', this.dispatchChangeBind);
	}


}



// create a namespace for all global references?
// if( !window[Config.appNameSpace + 'Router'] ){

	// not defined so generate the singleton router.
	// window[Config.appNameSpace + 'Router'] = router;
// }
// module.exports = window[Config.appNameSpace + 'Router']


module.exports = Router