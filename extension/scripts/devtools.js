chrome.devtools.network.onRequestFinished.addListener(function(req) {
  // Displayed sample TCP connection time here
  chrome.devtools.inspectedWindow.eval(
    "console.log('TCP connection time: " + req.time + "ms');"
  );
});
