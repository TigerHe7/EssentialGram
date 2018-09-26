'use strict';

var removeMetrics = () => {
  for(var i = document.links.length - 1; i >= 0; --i) {
    if (document.links[i].href.includes('liked_by') ||
        document.links[i].href.includes('following') ||
        document.links[i].href.includes('followers')) {
      document.links[i].parentNode.removeChild(document.links[i]);
    }
  }

  var profilePhotoOverlays = document.getElementsByClassName("_6S0lP");
  if (profilePhotoOverlays.length && profilePhotoOverlays[0].childNodes.length) {
    profilePhotoOverlays[0].removeChild(profilePhotoOverlays[0].childNodes[0]);
  }

  var popup = document.getElementsByClassName("zV_Nj kCcVy");
  if (popup.length) {
    popup[0].parentNode.removeChild(popup[0]);
  }
}

// There should definitely be a better way to do this - waiting for components
//   to load or watching network requests... but eh it works for now...
setInterval(function() {
  removeMetrics();
}, 100);
