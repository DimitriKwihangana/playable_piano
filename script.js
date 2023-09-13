document.addEventListener("DOMContentLoaded", function () {
  const pianoKeys = document.querySelectorAll(".piano-keys .key");

  let audio = new Audio("tunes/a.wav");

  const playTune = (key) => {
    audio.play(key);
  };
  pianoKeys.forEach((key) => {
    const dataKey = key.getAttribute("data-key");
    // console.log(dataKey);
    key.addEventListener("click", () => playTune(dataKey));
  });
});

