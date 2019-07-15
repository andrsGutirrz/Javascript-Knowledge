const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10


class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this)
    this.inicializar()
    this.generarSecuencia()
    setTimeout(this.siguienteNivel, 500)
  }

  inicializar() {
    console.log('Game started!')
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.elegirColor = this.elegirColor.bind(this)
    btnEmpezar.classList.add('hide');
    this.toggleBtnEmpezar()
    this.nivel = 1
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde,
    }
  }

  toggleBtnEmpezar(){
    if (btnEmpezar.classList.contains('hide')) {
      btnEmpezar.classList.remove('hide')
    }else{
      btnEmpezar.classList.add('hide')
    }
  }

  generarSecuencia(){
    this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  siguienteNivel(){
    this.subnivel = 0
    this.iluminarSecuencia()
    this.agregarEventosClick()
  }

  transformarNumeroAColor(num){
    switch (num) {
      case 0:
        return 'celeste'
        break;
      case 1:
        return 'violeta'
        break;
      case 2:
        return 'naranja'
        break;
      case 3:
        return 'verde'
        break;
      default:

    }

  }

  transformarColorANumero(color){
    switch (color) {
      case 'celeste':
        return 0
        break;
      case 'violeta':
        return 1
        break;
      case 'naranja':
        return 2
        break;
      case 'verde':
        return 3
        break;
      default:

    }

  }

  iluminarSecuencia(){
    for (let i=0;i<this.nivel; i++){
      const color = this.transformarNumeroAColor(this.secuencia[i])
      setTimeout(() => this.iluminaColor(color), 1000 * i)
    }
  }

  iluminaColor(color){
      this.colores[color].classList.add('light')
      setTimeout(() => this.apagarColor(color), 350)
  }

  apagarColor(color){
    this.colores[color].classList.remove('light')
  }

  agregarEventosClick(){
    this.colores.celeste.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor)
    this.colores.naranja.addEventListener('click', this.elegirColor)
  }

  eliminarEventosClick(){
    this.colores.celeste.removeEventListener('click', this.elegirColor)
    this.colores.verde.removeEventListener('click', this.elegirColor)
    this.colores.violeta.removeEventListener('click', this.elegirColor)
    this.colores.naranja.removeEventListener('click', this.elegirColor)
  }


  elegirColor(ev){
    const nombreColor = ev.target.dataset.color
    const numeroColor = this.transformarColorANumero(nombreColor)
    this.iluminaColor(nombreColor)
    if (numeroColor === this.secuencia[this.subnivel] ) {
      this.subnivel++
      if (this.subnivel === this.nivel) {
        //pasa de nivel
        this.nivel++
        console.log(`actual level ${this.level}`)
        this.eliminarEventosClick()
        if (this.nivel === ULTIMO_NIVEL+1) {
          // gano todo el juego
          this.ganoJuego()
        }else{
          setTimeout(this.siguienteNivel,2000)
        }
      }
    }else{
      // game over
      this.perdioJuego()
    }
  }

  ganojuego(){
    swal('Platzi', 'Felicidades', 'Success')
    .then(() => {
      this.eliminarEventosClick()
      this.inicializar()
    })

  perdiojuego(){
    swal('Platzi', 'Perdiste!', 'Success')
    .then(() => {
      this.eliminarEventosClick()
      this.inicializar()
    })
  }

}//end class

function empezarJuego() {
  window.juego = new Juego()
}
