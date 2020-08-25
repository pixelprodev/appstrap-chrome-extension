chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  let url = tabs[0].url;
  const urlData = new URL(url)
  document.getElementById('interactor').src = `${urlData.origin}/__interactor`
});