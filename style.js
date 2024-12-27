<script>
  const sliderTrack = document.querySelector('.slider-track');
  const images = Array.from(sliderTrack.children);

  // Fonction pour déplacer les images
  function moveImages() {
    const firstImage = images[0];
    sliderTrack.appendChild(firstImage); // Déplace la première image à la fin
  }

  // Intervalle de temps pour déplacer les images
  setInterval(moveImages, 2500); // Ajuste la vitesse en millisecondes
</script>