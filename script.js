document.addEventListener("DOMContentLoaded", function () {
  const pianoKeys = document.querySelectorAll(".piano-keys .key");

  
  pianoKeys.forEach((key) => {
    const dataKey = key.getAttribute("data-key");
    console.log(dataKey);
  });
});
