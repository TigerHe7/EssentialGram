'use strict';

var removeMetrics = () => {
  for(var i = document.links.length - 1; i >= 0; i--) {
    if (document.links[i].href.includes('liked_by') ||
        document.links[i].href.includes('following') ||
        document.links[i].href.includes('followers')) {
      document.links[i].parentNode.removeChild(document.links[i]);
    }
  }
}

// There should definitely be a better way to do this - waiting for components
//   to load or watching network requests... but eh it works for now...
setInterval(function() {
  removeMetrics();
}, 100);
