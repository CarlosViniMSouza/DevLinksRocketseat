function toggleMode() {
    const html = document.documentElement;

    html.classList.toggle("light");
  
    // pegar a tag img
    const img = document.querySelector("#profile img");
  
    // substituir a imagem
    if (html.classList.contains("light")) {

      // adicionar imagem light
      img.setAttribute("./assets/profile.png");
    } else {

      // Manter imagem normal
      img.setAttribute("./assets/profile.png");
    }
}