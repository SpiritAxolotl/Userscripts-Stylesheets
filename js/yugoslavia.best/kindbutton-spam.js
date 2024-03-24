//it's better to just paste this in the console than use it as a userscript tbh

const timesToClick = 1000;

for (let i=0; i<timesToClick; i++)
  document.querySelector("button[onclick='javascript:swapElements()']").click();

//alternatively:

for (let i=0; i<timesToClick; i++)
  swapElements();