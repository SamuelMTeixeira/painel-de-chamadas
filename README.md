# 🎉 Painel de Chamadas - Prefeitura de Teófilo Otoni

Bem-vindo ao projeto **Painel de Chamadas** - uma aplicação web para gerenciamento de filas da Secretaria Municipal de Saúde do Municipio de Teófilo Otoni. Este projeto utiliza tecnologias, como React, Vite e Tailwind CSS, proporcionando a experiência de usuário limpa, através de uma interface clean e de fácil uso.

## 🌐 Visão Geral

O **Painel de Chamadas** é uma aplicação web desenvolvida para auxiliar no gerenciamento de filas da Prefeitura de Teófilo Otoni. Ele atua como um chamador de senhas, proporcionando uma solução eficaz para organizar o atendimento ao público.

### 💻 Tecnologias Utilizadas

- **React + Vite:** A base do projeto é construída com React, uma biblioteca JavaScript popular para o desenvolvimento de interfaces de usuário. O Vite é utilizado como ambiente de desenvolvimento para melhorar a eficiência durante o ciclo de desenvolvimento.

- **Tailwind CSS:** A estilização da aplicação é feita com Tailwind CSS, uma estrutura de design utilitária que facilita a criação de interfaces responsivas e visualmente agradáveis.

- **Novo Sga 2.0.9:** O servidor do painel é alimentado pelo Novo Sga 2.0.9, uma solução robusta para gerenciamento de filas e atendimento ao público. O Novo Sga oferece recursos avançados para melhorar a eficiência e a experiência do usuário.

- **Vitest:**  O projeto utiliza o Vitest para testes unitários. O Vitest é uma ferramenta simples, leve e eficaz para escrever e executar testes em componentes React.

## ⚙️ Configuração do Projeto

Para executar o projeto localmente, siga as etapas abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/SamuelMTeixeira/painel-de-chamadas.git
   cd painel-de-chamadas
   ```

2. Crie um arquivo .env na raiz do projeto e configure os tokens necessários:
    ```bash
    VITE_CLIENT_ID='put_your_token_here' # Client ID gerado pelo Novo Sga
    VITE_CLIENT_SECRET='put_your_token_here' # Client secret gerado pelo Novo Sga
    VITE_BASE_URL='api_url'
    VITE_SERVICES='1,2' # Número de serviços configurado
    ```

3. Instale as dependências e inicie a aplicação: (O projeto utiliza o pnpm como gerenciador de pacotes, mas fica a seu critério utilizar o npm ou yarn)
    ```bash
    pnpm install
    pnpm dev
    ```

4. Se desejar subir o servidor NovoSGA de desenvolvimento, siga as instruções abaixo:
    ```bash
    docker compose up -d
    ```
    Depois entre no [localhost:80](http://localhost:80) e acesse com as credenciais:
        *user*: admin
        *password*: 123456
    

    Para fazer sair do usuário, basta precionar o comando `ctrl + m` e selecionar a opção sair.

    Para configurações do serviço e de como gerar o token, consulte a [documentação oficial do novoSGA](https://novosga.org/docs/current/)

## 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para enviar sugestões, relatar problemas ou contribuir diretamente para o desenvolvimento do projeto.

---

**Desenvolvido por:** [SamuelMTeixeira](https://github.com/SamuelMTeixeira) e [MarlonTF](https://github.com/marlontf)