<template>
  <div>
    <h2>Lista de Jogos</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Título</th>
          <th>Tipo</th>
          <th>Preço</th>
          <th>Plataforma</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!possuiJogos">
          <td colspan="4">Nenhum registro encontrado</td>
        </tr>
        <tr v-for="jogo in jogos" v-bind:key="jogo.id">
          <td>{{jogo.id}}</td>
          <td>{{jogo.titulo}}</td>
          <td>{{jogo.tipo}}</td>
          <td>{{jogo.preco}}</td>
          <td>{{jogo.plataforma}}</td>
          <td>{{jogo.quantidade}}</td>
          <td>
            <a href="#" v-on:click.prevent="editar(jogo)">editar</a> |
            <a href="#" v-on:click.prevent="excluir(jogo.id)">excluir</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    possuiJogos() {
      return this.jogos && this.jogos.length > 0;
    }
  },
  methods: {
    editar(jogo) {
      this.$parent.carregar(jogo);
    },
    excluir(id) {
      if (confirm("Deseja realmente excluir o jogo?")) {
        this.$parent.excluir(id);
      }
    }
  },
  props: { jogos: Array }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th {
  background: black;
  color: white;
}
td,
th {
  border: 1px solid #ddd;
  padding: 8px;
}
tr:nth-child(even) {
  background: #ddd;
}
tr:hover {
  background-color: #aaa;
}
</style>