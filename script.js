let seconds = 0;
setInterval(() => {
  seconds++;
  document.getElementById("counter").textContent = "you've watched this for " + seconds + " seconds";
}, 1000); 

const audio = document.getElementById("bg-audio");
const enableAudioButton = document.getElementById("enable-audio");

if (audio && enableAudioButton) {
  const setButtonText = () => {
    if (audio.paused || audio.muted) {
      enableAudioButton.textContent = "Enable audio";
      return;
    }
    enableAudioButton.textContent = "Disable audio";
  };

  const tryAutoplay = () => {
    audio.muted = false;
    audio.play()
      .then(() => {
        setButtonText();
      })
      .catch(() => {
        setButtonText();
      });
  };

  enableAudioButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.muted = false;
      audio.play().then(setButtonText).catch(setButtonText);
      return;
    }

    audio.muted = !audio.muted;
    setButtonText();
  });

  tryAutoplay();
}
