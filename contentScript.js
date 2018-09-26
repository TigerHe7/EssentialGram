'use strict';

var removeMetrics = () => {
  var links = document.links;
  for (var i = links.length - 1; i >= 0; --i) {
    if (links[i].href.includes('liked_by') ||
        links[i].href.includes('following') ||
        links[i].href.includes('followers')) {
      links[i].parentNode.removeChild(links[i]);
    }
  }
}

// TODO: Should wait for components to load or watch network requests.
// works for now tho
setInterval(function() {
  removeMetrics();
}, 100);
