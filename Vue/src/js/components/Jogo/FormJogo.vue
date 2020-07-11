<template>
  <div>
      <h1>Formulário de Jogos</h1>
    <form id="form-jogo" v-on:submit.prevent="onSubmit">
        <h2>Cadastrar um Jogo</h2>
    <p>
      <label for="titulo">Título:</label>
      <input name="titulo" v-model="titulo" type="text" />
    </p>
    <p>
      <label for="tipo">Tipo:</label>
      <input name="tipo" v-model="tipo" type="text" />
    </p>
    <p>
      <label for="preco">Preço:</label>
      <input name="preco" v-model="preco" type="number" />
    </p>
    <p>
      <label for="plataforma">Plataforma:</label>
      <input name="plataforma" v-model="plataforma" type="text" />
    </p>
    <p>
      <label for="quantidade">Quantidade:</label>
      <input name="quantidade" v-model="quantidade" type="number" />
    </p>
    <p>
      <div class="error">{{errorMessage}}</div>
      <input type="submit" value="Salvar" />
    </p>
  </form>
  </div>
</template>

<script>

//import Jogo from '../../models/Jogo';
export default {
  data() {
    return {
      errorMessage: "",
      id: "",
      titulo: "",
      tipo: "",
      preco: "",
      plataforma: "",
      quantidade: ""
    };
  },
  methods: {
    onSubmit(e) {
      this.errorMessage = "";
      if (!this.titulo) {
        this.errorMessage = "Informe o título"
        return;
      } else if (!this.tipo){
        this.errorMessage = "Informe o tipo"
        return;
      } else if (!this.preco){
        this.errorMessage = "Informe o preço"
        return;
      } else if (!this.plataforma){
        this.errorMessage = "Informe a plataforma"
        return;
      } else if (!this.quantidade){
        this.errorMessage = "Informe a quantidade em estoque"
        return;
      }
      const jogo = new Jogo(this.id, this.titulo, this.tipo, this.preco, this.plataforma, this.quantidade);
      this.$parent.salvar(jogo);
      this.id = 0;
      this.titulo = "";
      this.tipo = "",
      this.preco = "",
      this.plataforma = "",
      this.quantidade = "";
    },
    carregar(jogo) {
      this.id = aluno.id;
      this.titulo = jogo.titulo;
      this.tipo = jogo.tipo,
      this.preco = jogo.preco,
      this.plataforma = jogo.plataforma,
      this.quantidade = jogo.quantidade;
    }
  }
};

</script>

<style>
.error {
  color: red;
}
#form-alunos {
  border: 1px solid #aaa;
  padding: 10px;
}
label {
  display: block;
}
</style>