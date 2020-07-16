# LaTeX

O [LaTeX][1] é um sistema de escrita de alta qualidade. Aqui vamos fazer um apanhado geral de como começar a escrever no LaTeX. Os Jupyter Notebook reconhecem o código LaTeX escrito no markdown e então [*renderiza*][2] todos os símbolos no navegador utilizando [MathJax][3]. O Mathjax é um módulo [JavaScript][4], logo mantenha JS habilitado.

[1]: https://www.latex-project.org
[2]: https://pt.wikipedia.org/wiki/Renderização
[3]: https://www.mathjax.org
[4]: https://pt.wikipedia.org/wiki/JavaScript

## Expressões Matemáticas

Para escrever expressões na mesma linha que os textos, você precisa cercar o código LaTeX com cifrões `$ ... $`. Por exemplo, o código `$\frac{d}{dx}\displaystyle\int_0^x f(t) dt = f(x)$` aparecerá na linha como $\frac{d}{dx}\displaystyle\int_0^x f(t) dt = f(x)$.

Para quebrar a linha e centralizar a expressão matemática, cerque o código com dois cifrões `$$ ... $$`. Por exemplo, a transformada de Laplace,

```latex
$$ \mathcal{L}\{f(t)\} = \int_0^{+\infty}e^{-st}f(t)dt $$
```

renderizará como:

$$\mathcal{L}\{f(t)\} = \int_0^{+\infty}e^{-st}f(t)dt$$

Veja a [WikiBook LaTeX][5] para mais informações.

[5]: https://en.wikibooks.org/wiki/LaTeX

## Símbolos Recorrentes

A seguir você verá uma pequena lista com os símbolos matemáticos mais usados. A grande maioria dos símbolos pode ser adivinhada somente traduzindo o nome como você verá. Você ainda pode usar o [Detexify][6] para achar os símbolos que procura.

[6]: http://detexify.kirelabs.org/classify.html

| Sintaxe | Símbolo |
| :---: | :---: |
| `$x_n$` | $x_n$ |
| `$x_{n+1}$` | $x_{n+1}$ |
| `$x^2$` | $x^2$ |
| `$\infty$` | $\infty$ |
| `$dfrac{d}{dx}$` | $\dfrac{a}{b}$ |
| `$\partial$` | $\partial$ |
| `$\alpha$` | $\alpha$ |
| `$\beta$` | $\beta$ |
| `$\gamma$` | $\gamma$ |
| `$\Delta$` | $\Delta$ |
| `$\nabla$` | $\nabla$ |
| `$\sin$`| $\sin$ |
| `$\cos$`| $\cos$ |
| `$\tan$`| $\tan$ |
| `$\sum_{n=0}^{\infty}$` | $\sum_{n=0}^{\infty}$ |
| `$\prod_{n=0}^{\infty}$$`| $\prod_{n=0}^{\infty}$$ |
| `$\int_a^b$`| $\displaystyle\int_a^b$ |
| `$\lim_{x \to a}$`| $\lim_{x \to a}$ |
| `$\mathrm{IV}$`| $\mathrm{IV}$ |
| `$\mathbb{Z}$`| $\mathbb{Z}$ |
| `$\mathscr{L}$`| $\mathscr{L}$ |
| `$\dots$`| $\dots$ |
| `$\vdots$`| $\vdots$ |
| `$\ddots$`| $\ddots$ |
| `$\cdot$`| $\cdot$ |
| `$\times$` | $\times$ |

## Matrizes e Parênteses

Use `\left` e `\right` para que os parênteses abranjam completamente as expressões:

```latex
$$\left(\dfrac{p}{q}\right)$$
```

$$\left(\dfrac{p}{q}\right)$$

Para matrizes com parênteses redondos:

```latex
$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}$$
```

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}$$

!!! Attention "De Olho na Sintaxe"
    Note que usamos `\begin{environment} ... \end{environment}` para habilitar um ambiente LaTeX. Esses ambientes fornecem maiores possibilidades no LaTeX. O "E" comercial (&amp;) é usado para indicar uma quebra de coluna e a dupla contra barra (\\\\) para indicar uma quebra de linha.

Para matrizes com parênteses quadrados:

```latex
$$\begin{bmatrix}
    a & b & c \\
    d & e & f \\
    g & h & i
\end{bmatrix}$$
```

$$\begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix}$$

## Exemplos

### Derivada

A derivada de $f(x)$ avaliada em $x=a$

```latex
$$f^\prime(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a} = \frac{df(x)}{dx}\vert_{x=a}$$
```

$$f^\prime(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a} = \frac{df(x)}{dx}\vert_{x=a}$$

### Polinômio de Taylor

O [polinômio de Taylor][7] calculado entorno de a.

```latex
$$f(x; x=a) \approx f(a) + f^\prime(a)\frac{(x-a)}{1!} + f^{\prime\prime}(a)\frac{(x-a)^2}{2!} + \dots + f^{(n)}(a)\frac{(x-a)^n}{n!}$$
```

$$f(x; x=a) \approx f(a) + f^\prime(a)\frac{(x-a)}{1!} + f^{\prime\prime}(a)\frac{(x-a)^2}{2!} + \dots + f^{(n)}(a)\frac{(x-a)^n}{n!}$$

### A transformada de Fourier

A [transformada de Fourier][8] da função f(x)

```latex
$$F(\omega) = \int_{-\infty}^{+\infty} f(t)e^{-j\omega t} dt$$
```

$$F(\omega) = \displaystyle\int_{-\infty}^{+\infty} f(t)e^{-j\omega t} dt$$

!!! Alert "Notações"
    Por convenção, na engenharia costuma-se usar $j=\sqrt{-1}$ ao invés de $i$. Isso acontece, pois na engenharia $i$ ou $I$ são notações de corrente.

[7]: https://www.youtube.com/watch?v=3d6DsjIBzJ4
[8]: https://www.youtube.com/watch?v=spUNpyF58BY

# Exercícios

!!! Example ""
    1. Faça a demonstração, usando LaTeX, de $\cos^2{(x)} = \dfrac{1 + \cos{(2x)}}{2}$
    2. Escreva o polinômio de Taylor de grau 5, usando LaTeX, para $f(x) = \sin{(x)}$