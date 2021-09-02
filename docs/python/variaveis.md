# Variáveis

Assim como as variáveis $x$ e $y$ na matemática, podemos usar variáveis na programação. Agora vamos aprender a como facilitar as nossas contas. 

## Atribuindo Valores Às Variáveis

Para atribuir um valor a uma variável você usará o operador `#!python =`. Por exemplo, nós atribuímos o valor 42 à variável `#!python x` da seguinte forma:

```python linenums="1"
x = 42
```

Ao atribuirmos o valor, não temos nenhuma saída. Para visualizar o valor atribuído à variável `#!python x`podemos usar a função `#!python print()`.

```python linenums="1"
print(x)
```

```
42
```

Vamos calcular a raíz da função

$$f(x) = x^2 - 10x + 16$$

```python linenums="1"
delta = (-10) ** 2 - 4 * 1 * 16
x1 = (10 + delta**.5) / 2 * 1
x2 = (10 - delta**.5) / 2 * 1
print(x1)
print(x2)
```

```
8.0
2.0
```

## Formatando Saídas

É comum utilizarmos a função `#!python print()` para mostrarmos alertas, visualizarmos variáveis ou ainda, debbugar códigos. Porém, podemos melhorar essas saídas. O Python traz a possibilidade de formatarmos as saídas.

As strings (`#!python str`), isso é, os textos no Python são um outro tipo de objeto. Os textos, diferentemente dos números precisam estar entre aspas para que o Python saiba que aquilo é um texto e não variáveis. Por exemplo, se quisermos falar um **Olá, mundo!** deveremos fazer da seguinte forma:

```python linenums="1"
print("Olá, mundo!")
```

```
Olá, mundo"
```

!!! Warning "Notação de Strings"
    No python temos algumas formas de declarar uma string. Podemos fazer isso aspas duplas `#!python "Olá"` ou com aspas simples `#!python 'Mundo!'`. Se quisermos declarar um texto com mais de uma linha
    podemos usar podemos fazer da seguinte forma:

    ```python linenums="1"
    '''
    Olá, mundo!

    Tudo bem com vocês?
    '''
    ```

    Assim como antes, podemos usar aspas simples ou aspas duplas.

Um jeito fácil de formatarmos saídas é pa seguinte forma:

```python linenums="1"
print(f'Raíz 1: {x1}\nRaíz 2: {x2}')
```

```
Raíz 1: 8.0
Raíz 2: 2.0
```

Para entendermos o que está acontecendo vamos por partes. A letra `#!python f` antes da aspa simples indica que é uma string que será formatada. As chaves `#!python {}` são os chamados placeholders, a função é indicar que ali terá uma variável. O `#!python \n` simplesmente indica uma quebra de linha, como se tivéssemos apertado o `ENTER` no teclado.

!!! BUG
    É muito comum misturarmos tipos no Python e algumas vezes ele acaba quebrando. Por exemplo:

    ```python linenums="1"
    print('2' + 1)
    ```
    
    ```
    Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
    TypeError: can only concatenate str (not "int") to str
    ```

    Esse error acontece pois estamos tentando somar um texto, `#!python '2'`, com um número, `#!python 1`. Caso queiramos juntar esses valores, ou concatená-los, podemos fazer o seguinte:

    ```python linenums="1"
    print('2',1)
    print('2' + str(1))
    print(f'2{1}')
    ```

    ```
    2 1
    21
    21
    ```

    Já se quisermos somá-los:
    ```python linenums="1"
    print(int('2')+1)
    ```

    ```
    3
    ```

## Evite Esses Nomes

É uma boa prática darmos nomes que descrevam os valores guardados nas variáveis. Contudo, existem algumas palavras que não devem ser usadas como nomes de variáveis. Essas palavras tem significados especiais no Python.

### Palavras Reservadas

Abaixo estão algumas [palavras reservadas no Python][1]. O Python irá retornar um erro caso você tente atribuir um valor a qualquer uma dessas palavras.

|       |       |       |       |       |
| :---: | :---: | :---: | :---: | :---: |
| False | class | finally | is | return |
| None | continue | for | lambda | try |
| True | def | from | nonlocal | while |
| and | del | global | not | with |
| as | elif | if | or | yield |
| assert | else | import | pass | break |
| except | in | raise | 	 | |

Como são palavras em inglês, caso você dê nomes somente em português jamais terá problemas. Todavia, caso você tenha o intuito de disponibilizar seus códigos depois, é um boa prática dar nomes em inglês.

### Funções Nativas

Além dessas palavras reservadas, o Python possui algumas funções nativas. ***Não use*** esses nomes para atribuir variáveis, caso contrário, você perderá a referência dessas variáveis. Por exemplo, não use `#!python sum`, `#!python min`, `#!python max`, `#!python list` ou `#!python sorted` como nomes de variáveis. Veja a lista completa de [funções nativas][2].

[1]: https://docs.python.org/3.3/reference/lexical_analysis.html#keywords
[2]: https://docs.python.org/3/library/functions.html