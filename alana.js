const envelope = document.getElementById("envelope");
const musica = document.getElementById("musica");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");


  musica.play();
});
