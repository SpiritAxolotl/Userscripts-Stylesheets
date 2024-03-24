const timesToClick = 1000;
for (let i=0; i<timesToClick; i++) {
  document.querySelector("button[onclick='javascript:swapElements()']").click();
  //alternatively:
  //swapElements();
}