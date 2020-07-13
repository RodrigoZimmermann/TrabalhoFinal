import { http } from './config'

export default {
   listar:() => {
       return http.get('jogos')
   },
   salvar:(jogo) => {
       return http.post('jogos', jogo)
   },
   atualizar:(jogo) => {
       return http.put('jogos', jogo)
   },
   apagar:(jogo) => {
       return http.delete('jogos', {data:jogo} )
   }
}