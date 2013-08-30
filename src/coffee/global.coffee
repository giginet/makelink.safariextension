console.log 'global page'
safari.application.addEventListener 'command', (event) ->
  console.log 'pressed'
  if event.command is 'makelink-setting'
    settingTab = safari.application.activeBrowserWindow.openTab()
    url = location.href
    settingTab.url = "#{url}/../setting.html"
, false
