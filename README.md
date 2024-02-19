# Para rodar a aplicação você deve ter o Docker instalado na sua máquina

## Realizar o build da aplicação
- docker build -t vue-app .

## Rodar a aplicação
- docker run -p 5000:8080 vue-app

## Abrir a aplicação
- No seu navegador favorito, abrir a seguinte URL: [http://localhost:5000](http://localhost:5000)

# Instruções
- Para realizar o login no sistema, existem alguns usuários por padrão:
 - Habilitado: 
    - Nome: Funcionario Ativo
    - Senha: 123

# Funcionalidades

- Usuário: Cadastro ✅, edição ✅, listagem ✅ e desativação (soft delete) ✅ e login ✅ / logout ✅
- Clientes: Cadastro ✅, edição ✅, listagem ✅ e desativação (soft delete) ✅
- Filmes: consumir a API da OMDb (https://www.omdbapi.com/) ✅ 
- Locação: Nova locação, listagem de locações ✅

# Requisitos

- Todas as áreas devem possuir uma tela de listagem ✅
- Usuário e clientes devem possuir tela de edição ✅
- Lista de filmes deve possuir busca por nome, filtros por ano e listar APENAS filmes ✅
- Lista de clientes deve possuir busca por nome e documento e filtro por status ✅
- Com o CEP as informações de logradouro, bairro, cidade e uf devem ser buscadas no ViaCEP: https://viacep.com.br/ws/01001000/json (caso não encontre deve permitir a edição) ✅
- Lista de locações deve possuir busca por cliente e filtro de data de locação e de entrega ✅
- Toda alteração em qualquer área (usuário, cliente e locação) deve exibir um feedback visual (modal ou alert toggle) de sucesso ou falha ✅
- Usuários, clientes e locações devem ficar armazenados no local storage do navegador ✅
- Usuários logados devem permanecer logados ao revisitar a aplicação ✅
- Usuários com status desativado não devem logar na aplicação ✅
- Clientes com uma locação em status alugado não podem realizar outra locação ✅
- Nomenclatura de classes, métodos e rotas no padrão americano ✅