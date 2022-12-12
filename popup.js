let enable = 0;

function injectTheScript() {
  // Query the active tab, which will be only one tab and inject the script in it.
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["script.js"],
    });
  });
  enable = 1;
  chrome.storage.sync.set({ key: enable }, function () {});
}

function stopScript() {
  enable = 0;
  chrome.storage.sync.set({ key: enable }, function () {});
}

document.getElementById("startBtn").addEventListener("click", injectTheScript);

document.getElementById("stopBtn").addEventListener("click", stopScript);
