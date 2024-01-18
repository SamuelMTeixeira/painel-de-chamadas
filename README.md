# 🎉 Painel de Chamadas - Prefeitura de Teófilo Otoni

Bem-vindo ao projeto **Painel de Chamadas** - uma aplicação web para gerenciamento de filas da Secretaria Municipal de Saúde do Municipio de Teófilo Otoni. Este projeto utiliza tecnologias, como React, Vite e Tailwind CSS, proporcionando a experiência de usuário limpa, através de uma interface clean e de fácil uso.

## 🌐 Visão Geral

O **Painel de Chamadas** é uma aplicação web desenvolvida para auxiliar no gerenciamento de filas da Prefeitura de Teófilo Otoni. Ele atua como um chamador de senhas, proporcionando uma solução eficaz para organizar o atendimento ao público.

### 💻 Tecnologias Utilizadas

- **React + Vite:** A base do projeto é construída com React, uma biblioteca JavaScript popular para o desenvolvimento de interfaces de usuário. O Vite é utilizado como ambiente de desenvolvimento para melhorar a eficiência durante o ciclo de desenvolvimento.

- **Tailwind CSS:** A estilização da aplicação é feita com Tailwind CSS, uma estrutura de design utilitária que facilita a criação de interfaces responsivas e visualmente agradáveis.

- **Novo Sga 2.0.9:** O servidor do painel é alimentado pelo Novo Sga 2.0.9, uma solução robusta para gerenciamento de filas e atendimento ao público. O Novo Sga oferece recursos avançados para melhorar a eficiência e a experiência do usuário.

## ⚙️ Configuração do Projeto

Para executar o projeto localmente, siga as etapas abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/SamuelMTeixeira/painel-de-chamadas.git
   cd painel-de-chamadas
   ```

2. Crie um arquivo .env na raiz do projeto e configure os tokens necessários:
    ```bash
    VITE_CLIENT_ID='put_your_token_here'
    VITE_CLIENT_SECRET='put_your_token_here'
    VITE_BASE_URL='api_url'
    VITE_WEBSOCKET_URL='api_url:2020'

    # 🚨 NOTA: O VITE_WEBSOCKET_URL deve ser configurado com o mesmo valor do VITE_BASE_URL, mas com a porta 2020 adicionada ao final.
    # Se você estiver usando SSL, não adicione o https no início do VITE_WEBSOCKET_URL.
    ```

3. Instale as dependências e inicie a aplicação: (O projeto utiliza o pnpm como gerenciador de pacotes, mas fica a seu critério utilizar o npm ou yarn)
    ```bash
    pnpm install
    pnpm dev
    ```

## 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para enviar sugestões, relatar problemas ou contribuir diretamente para o desenvolvimento do projeto.

---

**Desenvolvido por:** [SamuelMTeixeira](https://github.com/SamuelMTeixeira) e [MarlonTF](https://github.com/marlontf)