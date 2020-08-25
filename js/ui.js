class Interfaz {
  constructor() {
    this.init();
  }

  init() {
    this.construirSelect();
  }

  construirSelect() {
    COTIZADOR.obtenerMonedasAPI().then((monedas) => {
      console.log(monedas);
    });
  }

  mostrarMensaje(mensaje, clases) {
    const div = document.createElement("div");
    div.classList = clases;
    div.appendChild(document.createTextNode(mensaje));

    const $mensajes = document.querySelector(".mensajes");
    $mensajes.appendChild(div);
    setTimeout(() => {
      document.querySelector(".mensajes div").remove();
    }, 3000);
  }
}
