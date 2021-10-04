# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Os componentes que fazem parte da solução são apresentados na figura abaixo:

![ARQUITETURA DA SOLUÇÃO - PROJETO - ABASTEÇA AGORA](https://user-images.githubusercontent.com/89323922/135698420-ef185b0a-beb7-4349-98f5-c30b8d1cdaf4.png)

<center>Figura ilustrativa - Arquitetura da Solução</center>


A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Dados do usuário** - Informações sobre o usuário. (Nome, CNPJ/CPF, telefone, senha, etc.)
     - **Preços** - Preços que serão cadastrados pelo fornecedor.
     - **Comentários** - Feedback do consumidor acerca dos serviços e produtos do fornecedor.
     - **Avaliações** - Feedback do consumidor por meio de estrelas.
 - **APIs** - Ferramenta que permite criar um mapa personalizado, pesquisar itinerários ou dados de localização ao vivo no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador.


## Hospedagem

O "Abasteça Agora" está no Github Pages - serviço de hospedagem que usa arquivos HTML, CSS e JavaScript diretamente de um repositório no GitHub.

O site é mantido no ambiente da URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g3-controle-precos

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Criar um site do GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/creating-a-github-pages-site)
> - [Sobre domínios personalizados e GitHub Pages](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
