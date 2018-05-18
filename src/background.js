function action(tab) {
  var prefix = ''
  var url = 'https://twitter.com/intent/tweet?'
    + 'text=' + encodeURIComponent(prefix) + encodeURIComponent(tab.title)
    + '&url=' + encodeURIComponent(tab.url);
  var w = 640;
  var h = 360;
  var x = (screen.width - w) / 2;
  var y = (screen.height - h) / 2;
  window.open(url, null,
      'left='+x+',top='+y+',width='+w+',height='+h
      +',status=no');
}

chrome.browserAction.onClicked.addListener(action);

chrome.commands.onCommand.addListener(function(command) {
  if (command == "tweet" ) {
    // chrome.tabs.getCurrent(action);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      action(tabs[0]);
    });
  }
});

// vim:set ts=8 sts=2 sw=2 tw=0 et:
