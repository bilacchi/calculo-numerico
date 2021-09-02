# Sequências

O python possui 3 tipos de [sequências][1] por padrão. Os tipos são: tuplas, listas e ranges. A principal diferença desses objetos são:

- Listas são [mutáveis][2], logo podemos adicionar, remover e ainda mudar os valores já existentes nela.
- Tuplas são [imutáveis][3], assim, diferentemente das listas não podemos remover, adicionar e nem trocar os valores já atribuídos a uma tupla.
- Ranges são objetos Python que geram uma lista de números inteiros (usados muito em loops `#!python for`) de forma eficiente, usam pouca memória no computador e calculam as coisas só quando precisamos.


[1]: https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range
[2]: https://docs.python.org/3/glossary.html#term-mutable
[3]: https://docs.python.org/3/glossary.html#term-immutable

## Listas
Para criarmos uma lista podemos usar os parênteses quadrados `#!python [ ... ]` com os elementos/itens separados por vírgulas (","). Por exemplo, para fazermos uma lista com os primeiros números ímpares podemos fazer:

```python
impares = [1, 3, 5, 7, 9, 11, 13]
print(impares)
```

```
[1, 3, 5 , 7 ,9, 11, 13]
```

Ou, por exemplo, fazer a lista dos pares ordenados de uma função de poder

$$f(x)=x^2,\text{para }x\in\{1,2,3,4,5\}$$

```python
quadrados = [[1, 1], [2, 4], [3, 9], [4, 16], [5, 25]]
print(quadrados)
```

```
[[1, 1], [2, 4], [3, 9], [4, 16], [5, 25]]
```

!!! Warning
    Como podemos ver, listas podem conter outras listas. Na realidades, listas podem conter qualquer tipo de dado dentro delas, sejam eles outras listas, números, texto, funções e etc. Dessa forma, listas são uma forma muito útil de agrupar seus dados num local só. 

    Diferentemente de outras linguagens como C, Java e outras linguagens que precisamos declarar as variáveis para alocarmos o espaço na memória, o Python não necessita disso. Dessa forma, listas podem ser tão grandes quanto queiramos, ou ainda não conterem nada. Para criamos uma lista vazia podemos usar a seguinte sintaxe:

    ```python
    listaVazia = []
    outraListaVazia = list()
    ```

    Ambas as formas retornarão uma lista vazia, cabe você escolher qual você gosta mais!

### Índices

Para acessarmos os itens dentro de uma lista podemos usar uma indexação da seguinte forma:

```python
x = [1, 2, 3, 4, 5]
print(x[0])
```

```
1
```

Como podemos ver, as listas começam pelo índice 0.

```python
y = [2, 4, 6, 8, 10]
print(y[-1])
print(y[-2])
```

```
10
8
```

Se usarmos indíces negativos, o python começa a indexar do fim para o início da lista.

Devido a listas serem mutáveis podemos alterar o seu conteúdo somente mudando o valor num dado índice:

```python
y = [2, 4, 5, 8, 10]
print(y)
y[2] = 6
print(y)
```

```
[2, 4, 5, 8, 10]
[2, 4, 6, 8, 10]
```

E, para acessarmos indíces duplos basta acrescentarmos mais um índice após o primeiro:

```python
quadrados = [[1, 1], [2, 4], [3, 9], [4, 16], [5, 25]]
print(quadrados[3][1])
```

```
16
```

### Criando Fatias

