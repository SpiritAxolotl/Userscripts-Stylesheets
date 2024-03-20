let showPersonal = true;
const personal = ["groupname","userip","connectionip","username"];
const denied = document.getElementById("denied_msg").children[0];
const urlParams = new URLSearchParams(window.location.search);
const order = ["reason"];
if (denied.innerHTML.includes("Your administrator has blocked this site."))
  urlParams.set("reason", "not given");
else
  urlParams.set("reason", denied.innerHTML.substring(denied.innerHTML.lastIndexOf(":")+2).toLowerCase());
let output = "";
let longestKeyLength = 0;
for (const key of urlParams.keys())
  longestKeyLength = Math.max(longestKeyLength, key.length);
for (const key of order) {
  output += `\n`;
  output += " ".repeat(longestKeyLength-key.length);
  output += `${key}: <span class="darker">`;
  if (key === "url")
    output += `<a href="${urlParams.get(key)}">${urlParams.get(key)}</a>`;
  else if (showPersonal || !personal.includes(key))
    output += urlParams.get(key);
  output += `</span>`;
}
for (const [key, value] of urlParams.entries()) {
  if (order.includes(key)) continue;
  output += `\n`;
  output += " ".repeat(longestKeyLength-key.length);
  output += `${key}: <span class="darker">`;
  if (key === "url")
    output += `<a href="${value}">${value}</a>`;
  else if (showPersonal || !personal.includes(key))
    output += value;
  output += `</span>`;
}
output = output.substring(1); //removes newline at the beginning
denied.innerHTML = output;
document.head.innerHTML += `<link rel="icon" href="${document.querySelector("img[title='ACCESS DENIED']").src}"></link>`;