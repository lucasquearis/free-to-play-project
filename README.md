# Projeto Free to play Games

![Hero Project](/src/images/Readme/hero.png)

Esse é o repositório do meu projeto pessoal sobre games gratuitos, resolvi praticar um pouco das habilidades de front-end, consumindo uma API de terceiro e projetando a ideia na minha aplicação.

## Sumário

- [Iniciando a Aplicação](#initapp)
- [Introdução](#introducao)
- [API Utilizada](#api-info)
- [Técnologias Utilizadas](#tecnologies)

# <a name="initapp"></a> Iniciando a Aplicação

A aplicação está hospedada no site vercel, você pode acessá-la através deste [link](https://free-to-play-project.vercel.app/).

Caso você queria rodá-la localmente:

- Basta executar esse código no seu terminal <code>git clone git@github.com:lucasquearis/free-to-play-project.git</code>
- Abrir a pasta do projeto free-to-play-games.
- Rodar no seu terminal o comando <code>npm start</code>
- Caso queria rodar os testes <code>npm test</code>
- Caso queria ver a cobertura de testes <code>npm run coverage</code>

# <a name="introducao"></a> Introdução

Sempre fui apaixonado por jogos e sempre tive muita dificuldade para encontrar jogos gratuitos que me agradem, resolvi criar uma aplicação nesse formato, que facilite as pessoas a encontrarem os melhores jogos para passar o tempo.

Nessa Aplicação o usuário poderá filtrar uma lista com mais de 350 jogos gratuitos, podendo optar por encontrar jogos pela plataforma ou seu gênero, uma excelente forma para descobrir um novo jogo.

A aplicação oferece informações sobre requisitos mínimos para rodar o jogo, descrição, imagens e screenshots in game.

# <a name="api-info"></a> API utilizada

Nessa aplicação utilizei dois endpoints da api [Free-To-Play Games Database API](https://www.freetogame.com/api-doc/?ref=devresourc.es).

Utilizei o GET por relevância, para qualificar os games em ordem de relevância e outro GET por id do game, para criação da página em que mostra mais informações do game.

## <a name="tecnologies"></a> Técnologias Útilizadas

- React
- React Router Dom
- Context API
- Bootstrap
- ESLint
- Deploy com Vercel
