# Markdown

[Markdown][1] é uma linguagem de marcação com uma sintaxe bem próxima a linguagem humanas natural (português, inglês, frânces e etc). Os Jupyter notebooks reconhecem o markdown e o processam em HTML. Nessa seção, você será apresentado a algumas características do Markdown.

![Markdown Render](../assets/images/markdown.gif)

Veja o [guia do Github][2] para mais informações.

!!! Info
Existem algumas ferramentas como o [Pandoc][3] que funcionam como conversores de arquivos. Na academia, leia-se universidades, é comum o uso do LaTeX para criação de slides, contudo a criação dos chamados [beamers][4] é lenta e relativamente trabalhosa. Para solucionar esse problema e ainda permitir slides de alta qualidade, algumas pessoas escrevem suas [apresentações em markdown][5] e depois as convertem para `.tex` e `.pdf`.

[1]: https://en.wikipedia.org/wiki/Markdown
[2]: https://docs.github.com/pt/github/writing-on-github/basic-writing-and-formatting-syntax
[3]: https://pandoc.org
[4]: http://mirrors.ctan.org/macros/latex/contrib/beamer-contrib/themes/metropolis/demo/demo.pdf
[5]: https://github.com/BPLIM/Workshops/blob/master/BPLIM2019/D2_S1_Sergio_Correia_Markdown.pdf

## Texto

|    Saída    |    Sintaxe     |
| :---------: | :------------: |
|  _itálico_  |  `*itálico*`   |
| **negrito** | `**negrito**`  |
|  `código`   | ``` `código` ``` |

## Cabeçalhos (Headings)

<table>
    <thead>
        <tr>
            <th align="center">Sintaxe</th><th align="center">HTML</th><th align="center">Saída</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center"><code># Cabeçalho 1</code></td>
            <td align="center"><code>&lt;h1&gt; Cabeçalho 1 &lt;/h1&gt;</code></td>
            <td align="center"><h1>Cabeçalho 1</h1></td>
        </tr>
        <tr>
            <td align="center"><code>## Cabeçalho 2</code></td>
            <td align="center"><code>&lt;h1&gt; Cabeçalho 1 &lt;/h1&gt;</code></td>
            <td align="center"><h2>Cabeçalho 2</h2></td>
        </tr>
        <tr>
            <td align="center"><code>### Cabeçalho 3</code></td>
            <td align="center"><code>&lt;h1&gt; Cabeçalho 1 &lt;/h1&gt;</code></td>
            <td align="center"><h3>Cabeçalho 3</h3></td>
        </tr>
        <tr>
            <td align="center"><code>#### Cabeçalho 4</code></td>
            <td align="center"><code>&lt;h1&gt; Cabeçalho 1 &lt;/h1&gt;</code></td>
            <td align="center"><h4>Cabeçalho 4</h4></td>
        </tr>
        <tr>
            <td align="center"><code>##### Cabeçalho 5</code></td>
            <td align="center"><code>&lt;h1&gt; Cabeçalho 1 &lt;/h1&gt;</code></td>
            <td align="center"><h5>Cabeçalho 5</h5></td>
        </tr>
        <tr>
            <td align="center"><code>##### Cabeçalho 6</code></td>
            <td align="center"><code>&lt;h1&gt; Cabeçalho 1 &lt;/h1&gt;</code></td>
            <td align="center"><h6>Cabeçalho 6</h6></td>
        </tr>
    </tbody>
</table>

Como você poder ver, os [octothorpes][6] no markdown é que mandam no nível da seção e nas tabelas de conteúdos (sumários).

[6]: https://pt.wikipedia.org/wiki/Cerquilha

## Listas

As listas podem ser divididas em: listas ordenadas e listas não-ordenadas.

### Listas Não-Ordenadas

Para criar uma lista ordenada basta adicionar um número seguido de um ponto. Os números não precisam seguir uma ordem, mas devem iniciar com o número um. Aumente a indentação para criar sub-listas.

<table>
  <thead>
    <tr>
      <th align="center">Sintaxe</th>
      <th align="center">HTML</th>
      <th align="center">Saída</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>
      <code>
        1. Primeiro item<br />
        2. Segundo item<br />
        3. Terceiro item<br />
        4. Quarto item
      </code>
    </td>
    <td>
      <code>
        &lt;ol&gt;<br />
          &lt;li&gt;Primeiro item&lt;/li&gt;<br />
          &lt;li&gt;Segundo item&lt;/li&gt;<br />
          &lt;li&gt;Terceiro item&lt;/li&gt;<br />
          &lt;li&gt;Quarto item&lt;/li&gt;<br />
        &lt;/ol&gt;
      </code>
    </td>
    <td>
      <ol>
        <li>Primeiro item</li>
        <li>Segundo item</li>
        <li>Terceiro item</li>
        <li>Quarto item</li>
      </ol>
    </td>
    </tr>
    <tr>
      <td>
        <code>
          1. Primeiro item<br />
          1. Segundo item<br />
          1. Terceiro item<br />
          1. Quarto item
        </code>
      </td>
      <td>
        <code>
          &lt;ol&gt;<br />
            &lt;li&gt;Primeiro item&lt;/li&gt;<br />
            &lt;li&gt;Segundo item&lt;/li&gt;<br />
            &lt;li&gt;Terceiro item&lt;/li&gt;<br />
            &lt;li&gt;Quarto item&lt;/li&gt;<br />
          &lt;/ol&gt;
        </code>
      </td>
      <td>
        <ol>
          <li>Primeiro item</li>
          <li>Segundo item</li>
          <li>Terceiro item</li>
          <li>Quarto item</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          1. Primeiro item<br />
          8. Segundo item<br />
          3. Terceiro item<br />
          5. Quarto item
        </code>
      </td>
      <td>
        <code>
          &lt;ol&gt;<br />
            &lt;li&gt;Primeiro item&lt;/li&gt;<br />
            &lt;li&gt;Segundo item&lt;/li&gt;<br />
            &lt;li&gt;Terceiro item&lt;/li&gt;<br />
            &lt;li&gt;Quarto item&lt;/li&gt;<br />
          &lt;/ol&gt;
        </code>
      </td>
      <td>
        <ol>
          <li>Primeiro item</li>
          <li>Segundo item</li>
          <li>Terceiro item</li>
          <li>Quarto item</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          1. Primeiro item<br />
          2. Segundo item<br />
          3. Terceiro item<br />
          &nbsp;&nbsp;&nbsp;&nbsp;1. Sub-item<br />
          &nbsp;&nbsp;&nbsp;&nbsp;2. Sub-item<br />
          4. Quarto item
        </code>
      </td>
      <td>
        <code>
          &lt;ol&gt;<br />
            &lt;li&gt;Primeiro item&lt;/li&gt;<br />
            &lt;li&gt;Segundo item&lt;/li&gt;<br />
            &lt;li&gt;Terceiro item<br />
              &lt;ol&gt;<br />
                &lt;li&gt;Sub-item&lt;/li&gt;<br />
                &lt;li&gt;Sub-item&lt;/li&gt;<br />
              &lt;/ol&gt;<br />
            &lt;/li&gt;<br />
            &lt;li&gt;Quarto item&lt;/li&gt;<br />
          &lt;/ol&gt;
        </code>
      </td>
      <td>
        <ol>
          <li>Primeiro item</li>
          <li>Segundo item</li>
          <li>Terceiro item
            <ol>
              <li>Sub-item</li>
              <li>Sub-item</li>
            </ol>
          </li>
          <li>Quarto item</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### Listas Ordenadas

Para criar listas não-ordenadas basta adicionar traços (-), asteriscos (*), ou símbolos de mais (+) antes dos itens. Aumente a indentação para criar sub-listas.

<table>
  <thead>
    <tr>
      <th>Markdown</th>
      <th>HTML</th>
      <th>Rendered Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>
          - Primeiro item<br />
          - Segundo item<br />
          - Terceiro item<br />
          - Quarto item
        </code>
      </td>
      <td>
        <code>
          &lt;ul&gt;<br />
            &lt;li&gt;Primeiro item&lt;/li&gt;<br />
            &lt;li&gt;Segundo item&lt;/li&gt;<br />
            &lt;li&gt;Terceiro item&lt;/li&gt;<br />
            &lt;li&gt;Quarto item&lt;/li&gt;<br />
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>Primeiro item</li>
          <li>Segundo item</li>
          <li>Terceiro item</li>
          <li>Quarto item</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          * Primeiro item<br />
          * Segundo item<br />
          * Terceiro item<br />
          * Quarto item
        </code>
      </td>
      <td>
        <code>
          &lt;ul&gt;<br />
            &lt;li&gt;Primeiro item&lt;/li&gt;<br />
            &lt;li&gt;Segundo item&lt;/li&gt;<br />
            &lt;li&gt;Terceiro item&lt;/li&gt;<br />
            &lt;li&gt;Quarto item&lt;/li&gt;<br />
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>Primeiro item</li>
          <li>Segundo item</li>
          <li>Terceiro item</li>
          <li>Quarto item</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          + Primeiro item<br />
          * Segundo item<br />
          - Terceiro item<br />
          + Quarto item
        </code>
      </td>
      <td>
        <code>
          &lt;ul&gt;<br />
            &lt;li&gt;Primeiro item&lt;/li&gt;<br />
            &lt;li&gt;Segundo item&lt;/li&gt;<br />
            &lt;li&gt;Terceiro item&lt;/li&gt;<br />
            &lt;li&gt;Quarto item&lt;/li&gt;<br />
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>Primeiro item</li>
          <li>Segundo item</li>
          <li>Terceiro item</li>
          <li>Quarto item</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code>
          - Primeiro item<br />
          - Segundo item<br />
          - Terceiro item<br />
          &nbsp;&nbsp;&nbsp;&nbsp;- Sub-item<br />
          &nbsp;&nbsp;&nbsp;&nbsp;- Sub-item<br />
          - Quarto item
        </code>
      </td>
      <td>
        <code>
          &lt;ul&gt;<br />
            &lt;li&gt;Primeiro item&lt;/li&gt;<br />
            &lt;li&gt;Segundo item&lt;/li&gt;<br />
            &lt;li&gt;Terceiro item<br />
              &lt;ul&gt;<br />
                &lt;li&gt;Sub-item&lt;/li&gt;<br />
                &lt;li&gt;Sub-item&lt;/li&gt;<br />
              &lt;/ul&gt;<br />
            &lt;/li&gt;<br />
            &lt;li&gt;Quarto item&lt;/li&gt;<br />
          &lt;/ul&gt;
        </code>
      </td>
      <td>
        <ul>
          <li>Primeiro item</li>
          <li>Segundo item</li>
          <li>Terceiro item
            <ul>
              <li>Sub-item</li>
              <li>Sub-item</li>
            </ul>
          </li>
          <li>Quarto item</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Links

É possível adicionar links e hyperlinks com a seguinte sintaxe `[descrição](url)`. Por exemplo:

```markdown
[UFABC](http://ufabc.edu.br)
```

criará um link [UFABC](http://ufabc.edu.br).

## Imagens

Inclua imagens usando a sintaxe `![descrição](url)`. Por exemplo:

```markdown
![Logo Timing](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)
```

gerará a imagem

![Logo Timing](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)

## Tabelas

Para criar tabelas basta separar os itens com barras verticais `|`:

```markdown
| Operadores Matemáticos - Python | Descrição |
| :---: | :---: |
| + | adição |
| - | subtração |
| * | multiplicação |
| / | divisão |
| // | divisão inteira |
| % | Resto |
| ** | Potenciação |
```

| Operadores Matemáticos Python | Descrição |
| :---: | :---: |
| + | adição |
| - | subtração |
| * | multiplicação |
| / | divisão |
| // | divisão inteira |
| % | Resto |
| ** | Potenciação |

O marcador `:---:` especifica o alinhamento (alinhado ao centro neste caso) da coluna. Para mais detalhes, acesse [o guia do Github][7].

[7]: https://docs.github.com/en/github/writing-on-github/organizing-information-with-tables

## Exercícios

!!! Example ""
    1. Crie uma lista com os 4 áreas da matemática (e.g., cálculo, estatística) e elenque alguns tópicos abordados em cada uma dessas grandes áreas.
    2. Escreva uma pequena sinópse sobre um filme qualquer e adicione o uma foto, cabeçalhos e um link direcionando ao [IMDb](https://www.imdb.com).
    3. Crie uma tabela com as disciplinas que você mais gostou e mais detestou até agora. Inclua as colunas: Nome, Professor e Nota da Disciplina.