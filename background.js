'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({
    likesEnabled: false,
    followersEnabled: false
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.instagram.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
