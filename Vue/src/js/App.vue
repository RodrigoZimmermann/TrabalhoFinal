<template>
<div>
  <Jogo>
</div>
</template>

<script>
import Vue from "vue";
import Jogo from "./components/Jogo/Jogo";

export default Vue.extend({
  data() {
    return {
      contador: 1
    };
  },
  methods : {
      incrementar(){
          this.contador = this.contador + 1
      }
  },
  components: {
      Jogo
  }
});
</script>

<style>
h1 {
  color: green;
}
</style>