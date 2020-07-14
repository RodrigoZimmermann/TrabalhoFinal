Passo a passo

Execute o Windows PowerShell como um administrador. Para fazer isso, clique em Iniciar, clique em todos os programas, clique em Windows, clique com o botão direito do mouse em Windows para Windows PowerShelle, em seguida, clique em Executar como administrador.

Defina a política de execução como Unrestricted. Para fazer isso, digite o seguinte cmdlet e, em seguida, pressione ENTER:
Set-ExecutionPolicy Unrestricted 

Para retornar as política
Set-ExecutionPolicy Restricted

Abrir a pasta TrabalhoFinal no visual Studio. Na pasta JsonServer utilizar a opção direita do mouse "Open in Intregated Terminal" rodar
npm install -g json-server
json-server --watch db.json

Na pasta Vue utilizar a opção direita do mouse "Open in Intregated Terminal" rodar
npm start
