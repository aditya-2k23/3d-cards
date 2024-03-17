const audio = document.getElementById("audio");
const song = document.getElementById("song");
const icon = document.getElementById("icon");

const card = document.querySelectorAll(".card");
const song1 = document.getElementById("song1");
const popup = document.getElementById("popup");

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

function togglePopup(cardId) {
  var popup = document.getElementById("popup");
  var text = document.getElementById("text");

  if (popup.style.display === "block") {
    popup.style.animation = "fadeOut 0.5s forwards";
    setTimeout(function () {
      popup.style.display = "none";
      popup.style.animation = "";
    }, 500);
  } else {
    popup.style.display = "block";
    popup.style.animation = "fadeIn 0.5s forwards";

    if (cardId === "card1") {
      text.innerHTML = "The Dark Rider";
      if (!document.querySelector(".popup-card")) {
        const div = document.createElement("div");
        div.classList.add("card");
        div.classList.add("popup-card");
        div.innerHTML = `
        <div class="wrapper">
        <img class="cover-image" src="img/dark_rider-cover.jpg" />
        </div>
        <img class="title" src="img/dark_rider-title.png" />
        <img class="character" src="img/dark_rider-character.webp" />`;
        popup.appendChild(div);
      }
      const characterContent = document.createElement("div");
      characterContent.classList.add("character-content");
      characterContent.innerHTML = `
      <p><strong>Gareth</strong> kneels on a windswept hillock, his crimson cape billowing like a predator's mane. Sunlight glints off his armor, polished to a mirror sheen. A griffin, the sigil of the Falcon Knights, gleams on his breastplate. This ain't your average knight.
      </p>
      <p>
      He is a master of the lance, a weapon that demands strength, skill, and courage. He's also a master of the battlefield, a strategist who can read the ebb and flow of combat. His steed, a black destrier, is a warhorse of rare intelligence and courage. Together, they are a force to be reckoned with.
      </p>
      `;
      popup.appendChild(characterContent);
    } else if (cardId === "card2") {
      text.innerHTML = "Force Mage";
    }
  }
}

window.onclick = function (event) {
  if (event.target !== popup && !popup.contains(event.target)) {
    popup.style.display = "none";
  }
};

document.onkeydown = function (event) {
  if (event.key === "Escape") {
    popup.style.display = "none";
  }
};

document.querySelector(".card").addEventListener("click", function (event) {
  event.stopPropagation();
});
