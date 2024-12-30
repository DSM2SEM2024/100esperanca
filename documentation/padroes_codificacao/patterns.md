## Padrões de codificação para o "Projeto Visgo de Jaca"

### Para variáveis, atributos, métodos e funções (PHP e JavaScript)

- Camel Case (camelCase): Camel case deve começar com a primeira letra minúscula e a primeira letra de cada nova palavra subsequente maiúscula.

### Para classes e interfaces (PHP e JavaScript)

- Pascal Case (PascalCase): pascal case combina palavras colocando todas com a primeira letra maiúscula

### Para organização de arquivos (PHP)

1. Diagnóticar a qual camada (pacote) pertence aquele novo arquivo, se é uma classe PHP Controller, Service, ou Repositopry, e assim por diante.
2. Ao nomear o arquivo aplicar o seguinte padrão: "NomeDoObjetoNomeDoPacote" sendo NomeDoObjeto o nome do objeto alvo das lógicas tratadas naquele arquivo, e NomeDoPacote o nome do pacote onde está localizado aquele arquivo. Exemplo: UserRepository, sabemos que este arquivo é um repositório que tratará de todos acessos ao banco de dados referente a entidade usuário.

### Para coding style em PHP

> entenda coding style como identação do código (quantidade e tamanho de tabulações), abertura e fechamento de um bloco de código (função, método, classe e etc.), importações, extends, espaçamentos e etc.

- Seguir a PSR-12 (PHP Standards Recommendations)
  - [documentação PSR-12](https://www.php-fig.org/psr/psr-12/)
  - dica: temos diversas extensṍes no vscode que identam o código automaticamente, sugiro fortemente adicionar uma e configurá-la para o padrão PSR-12
