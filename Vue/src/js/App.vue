
<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper black darken-1">
        <a href="#" class="brand-logo center">Game Center</a>
      </div>
    </nav>
    <div class="container">
      <form @submit.prevent="Salvar">
          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="jogo.nome" >
          <label>Tipo</label>
          <input type="text" placeholder="Nome" v-model="jogo.tipo">
          <label>Valor</label>
          <input type="text" placeholder="Valor" v-model="jogo.preco">
          <label>Quantidade</label>
          <input type="number" placeholder="QTD" v-model="jogo.quantidade">
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>
      </form >
      <table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogo of loadJogos" :key="jogo.id">
            <td>{{jogo.id}}</td>
            <td>{{jogo.nome}}</td>
            <td>{{jogo.tipo}}</td>
            <td>{{jogo.preco}}</td>
            <td>{{jogo.quantidade}}</td>
            <td>
              <button @click="editar(jogo)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(jogo)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>
<script>

import Jogos from './jogos'
export default {

  data(){
    return{
      jogo: {
         id:'',
         nome:'',
         tipo:'',
         preco:'',
         quantidade:''
      },
      loadJogos:[]
    }
  },

  mounted(){
    this.listar();
  },
  methods:{
    listar(){
      Jogos.listar().then(res => {
      this.loadJogos = res.data
    })
    },
    Salvar(){
      if(!this.jogo.id){
        Jogos.salvar(this.jogo).then(res =>{
          alert('Salvo com sucesso!')
          this.jogo = []
          this.listar();
        })
      }else{
      Jogos.atualizar(this.jogo).then(res =>{
        alert('Atualizado com sucesso!')
          this.listar();
          this.jogo = []
        })
      }
    },
    editar(jogo){
      this.jogo = jogo
    },
    remover(jogo){
      Jogos.apagar(jogo).then(res =>{
        this.listar();
      })
    }
  }

}

</script>