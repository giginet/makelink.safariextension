// Generated by CoffeeScript 1.6.3
(function() {
  console.log('global page');

  safari.application.addEventListener('command', function(event) {
    var settingTab, url;
    console.log('pressed');
    if (event.command === 'makelink-setting') {
      settingTab = safari.application.activeBrowserWindow.openTab();
      url = location.href;
      return settingTab.url = "" + url + "/../setting.html";
    }
  }, false);

}).call(this);
