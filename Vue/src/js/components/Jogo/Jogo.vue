<template>
  <div>
      <FormJogo ref="FormJogo"></FormJogo>
      <ListaJogos v-bind:jogos="jogos"></ListaJogos>
    </div>
</template>

<script>
import FormJogo from './FormJogo';
import ListaJogos from './ListaJogos';
import Jogo from "../../models/Jogo";

export default {
    data(){
        return{
            proxId: 4,
            jogos: [
                new Jogo (1, 'Counter Strike Global Offencive', 'FPS', 24.50 , 'PC', 10),
                new Jogo (2, 'Grand Theft Auto V', 'Simulador', 60.00, 'PS3', 5),
                new Jogo (3, 'Red dead redemption 2', 'Simulador', 210.00 , 'PS4', 3),
            ]
        }
    },
    methods: {
    carregar(jogo) {
      this.$refs.FormJogo.carregar(jogo);
    },
    salvar(jogo) {
      if (jogo.id) {
        const index = this.jogos.findIndex(x => x.id==jogo.id);
        const jogos = [...this.jogos]; //cria copia do jogo
        jogos[index] = jogo; //edita o jogo pelo indice
        this.jogos = jogos; //atualiza o construtor do jogo
      }
      else {
        jogo.id = this.proxId;
        this.proxId++;
        this.jogos.push(jogo);
      }
    },
    excluir(id) {
      const index = this.jogos.findIndex(x => x.id==id);
      this.jogos.splice(index, 1);
    }
  },
    components: {
        FormJogo,
        ListaJogos
    }
}
</script>

<style>

</style>