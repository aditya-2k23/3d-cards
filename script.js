const audio = document.getElementById("audio");
const song = document.getElementById("song");
const icon = document.getElementById("icon");

const card = document.querySelectorAll(".card");
const song1 = document.getElementById("song1");

card.forEach((card) => {
  card.addEventListener("mouseover", () => {
    song1.play();
  });
});

audio.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    icon.classList.add("fa-volume-up");
  } else {
    song.pause();
    icon.classList.remove("fa-volume-off");
    icon.classList.remove("fa-volume-up");
    icon.classList.add("fa-volume-mute");
  }
  song.volume = 0.5;
});
