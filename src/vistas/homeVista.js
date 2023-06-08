import { Pokemon } from '../bd/clasePokemon'
import Swal from 'sweetalert2'
import { User } from '../bd/user'
import { Partidas } from '../bd/partida'

export default {
  template: `
    <div id="boton">
      <button type="button" class="btn btn-primary btn-lg" id="comenzar">Jugar</button>
    </div>
  `,
  script: () => {
    const pokemons = []
    const comenzar = document.querySelector('#comenzar')
    comenzar.addEventListener('click', (event) => {
      window.puntos = 0
      comenzar.remove()
      const temporizador = setInterval(logica(), 10000)
      setTimeout(function () {
        clearInterval(temporizador);
const confirmarPartida = confirm(
  'Partida con ' + window.puntos + '. ¿Deseas guardar la partida?'
);
if (confirmarPartida) {
  try {
    const usuario =  User.getUser();
    const usuarioLogueado =  User.getUser();
    if (usuarioLogueado) {
      const partida = {
        puntos: window.puntos,
        tiempo: 10,
        usuario_id: usuario.id
      };
      const guardarPartida =  Partidas.create(partida);
      console.log(guardarPartida);
      alert('Partida guardada');
    } else {
      window.location = '#/login';
    }
  } catch (error) {
    console.log(error);
  }
}
    }, 10000)
    })
    function logica () {
      for (let i = 0; i < 20; i++) {
        const nuevoObjeto = new Pokemon(i)
        pokemons.push(nuevoObjeto)
      }

      pokemons.forEach(pokemon => {
        pokemon.insertaPokemon()
      })
    }
  }

}
