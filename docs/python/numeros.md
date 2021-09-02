# Números

Os principais tipos numéricos do Python são: números inteiros (`#!python int`), com ponto flutuante (`#!python float`) e complexos (`#!python complex`). A sintaxe dos operadores aritméticos são: 

| Operadores Matemáticos - Python | Descrição |
| :---: | :---: |
| + | adição |
| - | subtração |
| * | multiplicação |
| / | divisão |
| // | divisão inteira |
| % | Resto |
| ** | Potenciação |

Podemos verificar os tipos dos objetos no Python usando a função `#!python type()`

```python linenums="1"
type(42)
```

```
int
```

## Int e Float

Um número float, ou de ponto flutuante, é um número real escrito na forma decimal. O Python, como outras linguagens de programação, guarda números `#!python int` e `#!python float` de forma diferente. Ao combinarmos esses tipos, resultamos em um `#!python float`.

Aproximação de $\sqrt{2}$:

```python linenums="1"
2**.5
```

```
1.4142135623730951
```

Podemos usar notações científicas para expressar números com ponto flutuante:

```python linenums="1"
1e-6
```

```
1e-06
```

## Números Complexos

Para criar números complexos no Python podemos:

1. Usar a função `#!python complex()`
2. Utilizar a notação `#!python j`

```python linenums="1"
(1+2j) + (1 - 4j)
```

```
(2-2j)
```

Se quisermos multiplicar números complexos:

```python linenums="1"
(1+2j) * (1-2j)
```

```
(2 + 0j)
```


## Forçando Tipos

Podemos converter os objetos Python em outros tipos. Dessa forma, podemos converter um `#!python float` para um `#!python int` e vice versa.


```python linenums="1"
type(int(42.0))
```

```
int
```


```python linenums="1"
type(float(42))
```

```
float
```

## Exemplos

### Polinômio de Taylor

O polinômio de Taylor de grau 6 para a função $\cos{(x)}$ em x=0 é:

$$P(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!}$$

Vamos calcular para $x=0.1$

```python linenums="1"
1 - 0.1**2/(2) + 0.1**4/(4*3*2) - 0.1**6/(6*5*4*3*2)
```

```
0.9950041652777778
```

## Exercício

!!! Example ""
    1. A série de Taylor de $\sin{(x)}$ avaliado em $x=\frac{\pi}{2}$ é dado por

    $$\sum_{n=0}^\infty \frac{(-1)^n}{(2n)!}\left(x-\frac{\pi}{2}\right)^{2n}$$

    Calcule o polinômio de Taylor de grau 6 avaliado em $x=0$:

    $$\sin(0) \approx 1 - \frac{1}{2!}\left(x-\frac{\pi}{2}\right)^{2} + \frac{1}{4!}\left(x-\frac{\pi}{2}\right)^{4} - \frac{1}{6!}\left(x-\frac{\pi}{2}\right)^{6}$$
