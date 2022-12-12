var enable = 0;
function setEnable(value) {
  enable = value;
}
chrome.storage.sync.get(["key"], function (result) {
  setEnable(result.key);
  console.log("Enable currently is " + result.key);
  skipper();
});

const skipRecap = document.querySelector('[data-uia="player-skip-recap"]');
function sleep(seconds) {
  var start = new Date().getTime();
  while (new Date() < start + seconds * 1000) {}
  return 0;
}

function skipper() {
  while (enable == true) {
    console.log("Enable currently is3" + enable);
    if (typeof skipRecap == "undefined" || skipRecap == null) {
    } else {
      skipRecap.click();
    }
    chrome.storage.sync.get(["key"], function (result) {
      setEnable(result.key);
      console.log("Enable currently is " + enable);
    });
    sleep(20);
  }
}
