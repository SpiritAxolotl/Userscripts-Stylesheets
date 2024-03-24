//paste in the extension console
let region = "US";
chrome.storage.local.get(region).then(t => {console.log(t?.[region]?.l)}).catch(e => {console.error(e)});