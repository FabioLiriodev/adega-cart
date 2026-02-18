<h1 align="center"> 🍷 Adega Cart - Programação Orientada a Objetos 🍷 </h1>

<div align="center">

![Adega Cart](<INSERIR_IMAGEM_OU_GIF_DO_PROJETO>)

</div>

<h2> 📖 Índice 📖 </h2>

- Descrição do Projeto  
- Objetivo do Projeto  
- Tecnologias Utilizadas  
- Andamento do Projeto  
- Funcionalidades  
- Regra de Negócio  
- Conceitos Aplicados  
- Como Executar a Aplicação  
- Desafios Encontrados  
- Desenvolvedores  

---

<h2> 🖋️ Descrição do Projeto 🖋️ </h2>

> O **Adega Cart** é uma aplicação desenvolvida em **JavaScript orientado a objetos**, executada com **NodeJS**, que simula um sistema de gestão de estoque integrado a um carrinho de compras para uma adega.

A aplicação permite controlar a quantidade de vinhos disponíveis, calcular valores de compra e garantir que apenas produtos existentes no estoque possam ser comercializados.

O foco do projeto está na modelagem de dados, estruturação de regras de negócio e organização modular do código.

---

<h2> 🎯 Objetivo do Projeto 🎯 </h2>

O projeto foi desenvolvido com o objetivo de construir uma aplicação prática para consolidar conceitos de **Programação Orientada a Objetos (POO)** aplicados a um cenário real de controle de estoque e vendas.

A proposta simula o funcionamento interno de sistemas utilizados por e-commerces e ERPs simplificados.

---

<h2> 🚀 Tecnologias Utilizadas 🚀</h2>

<div>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/NPM-red?style=for-the-badge&logo=npm&logoColor=white">

</div>

---

<h2> 🚧 Andamento do Projeto 🚧 </h2>

<div>

![Badge Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20ANDAMENTO&color=ORANGE&style=for-the-badge)

</div>

---

<h2> ✨ Funcionalidades ✨ </h2>

:heavy_check_mark: Integração entre carrinho de compras e estoque, garantindo consistência nas quantidades disponíveis  

:heavy_check_mark: Sistema de criação de vinhos utilizando a estrutura `new Map()`  

:heavy_check_mark: Cálculo de precificação parcial (subtotal) com base na quantidade de garrafas no carrinho  

:heavy_check_mark: Cálculo de precificação total da compra  

:heavy_check_mark: Cálculo do valor total correspondente ao estoque disponível  

:heavy_check_mark: Estrutura modular que separa responsabilidades da aplicação  

---

<h2> 🧠 Regra de Negócio 🧠 </h2>

O sistema foi projetado para simular o comportamento real de uma adega digital.

### 📦 Estoque
- Cada vinho é registrado com seus atributos (nome, preço, quantidade, etc.).
- O estoque é armazenado em uma estrutura dinâmica baseada em `Map`.
- A quantidade disponível é atualizada sempre que ocorre uma venda.

### 🛒 Carrinho de Compras
- O usuário adiciona vinhos ao carrinho respeitando a disponibilidade do estoque.
- Ao adicionar um item:
  - A quantidade correspondente é reservada do estoque.
- Ao remover um item:
  - A quantidade retorna automaticamente ao estoque.

### 💰 Precificação
- O sistema calcula:
  - Subtotal por item (preço × quantidade).
  - Total geral da compra.
  - Valor total representado pelo estoque disponível.

### 🔄 Consistência
- Não é possível vender mais garrafas do que existem no estoque.
- Toda operação mantém sincronização entre carrinho e inventário.

---

<h2> 📚 Conceitos Aplicados 📚 </h2>

Durante o desenvolvimento foram utilizados os seguintes conceitos:

1. Criação de classes com atributos  
2. Métodos aplicados às classes  
3. Instanciamento de objetos  
4. Implementação de regras de negócio  
5. Arquitetura estruturada e modularizada  
6. Uso do padrão **ESM (import/export)**  
7. Execução com NodeJS e gerenciamento via NPM  
8. Integração com estrutura de banco de dados  

---

<h2> 💨 Como Executar a Aplicação 💨 </h2>

1️⃣ Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2️⃣ Acesse a pasta do projeto:
```bash
cd adega-cart
```


3️⃣ Instale as dependências:
```bash
npm install
```


4️⃣ Execute a aplicação:
```bash
node index.js
```

5️⃣ Os resultados das operações serão exibidos diretamente no terminal.

<h2> 🧗‍♂️ Desafios Encontrados 🧗‍♂️ </h2>

O desenvolvimento do projeto apresentou desafios importantes para a consolidação da lógica orientada a objetos:

- Modelar corretamente a relação entre estoque e carrinho sem gerar inconsistências.

- Garantir sincronização de dados entre diferentes módulos.

- Estruturar o projeto com ESM mantendo organização e baixo acoplamento.

- Trabalhar com Map como estrutura dinâmica para simular persistência.

- Representar regras reais de negócio em código limpo e escalável.

- Planejar uma arquitetura que possa futuramente evoluir para API ou interface web.

Esses desafios contribuíram diretamente para o amadurecimento na construção de aplicações back-end com JavaScript.

<h2> 💻 Desenvolvedores 💻</h2>

<img src="https://avatars.githubusercontent.com/u/140852220?v=4" width=100><br><sub>Fábio Lirio</sub>
<img src="https://avatars.githubusercontent.com/u/45768087?v=4" width=100><br><sub>Felipe Mattos</sub>