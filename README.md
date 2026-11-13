# Laboratorio TDD: Carrito de compras

Lógica de un carrito de compras construida con **Desarrollo Guiado por Pruebas (TDD)**, usando JavaScript puro y el ejecutor de pruebas nativo de Node.js (`node:test`). No tiene dependencias externas.

> Taller práctico del Prof. Edwin Rozo Gómez. Repositorio base: [erozog125/Laboratorio_TDD](https://github.com/erozog125/Laboratorio_TDD).

## Requisitos

- Node.js 20 o superior (`node -v`)
- Git

## Cómo ejecutar las pruebas

```bash
git clone https://github.com/BarreritA14/Laboratorio_TDD.git
cd Laboratorio_TDD
npm test
```

Resultado esperado: `tests 18`, `pass 18`, `fail 0`.

Para ejecutar las pruebas en modo observación:

```bash
npm run test:watch
```

## Estructura del proyecto

```
Laboratorio_TDD/
├── package.json         Configuración y comandos de prueba
├── README.md
├── src/
│   └── carrito.js       Código de producción (clase Carrito)
└── test/
    └── carrito.test.js  Pruebas unitarias
```

## Criterios de aceptación

| # | Criterio | Estado |
|---|----------|--------|
| 1 | Un carrito nuevo está vacío: 0 ítems y subtotal $0 | Completo |
| 2 | Se agregan productos con nombre, precio y cantidad (por defecto, 1) | Completo |
| 3 | Si el producto ya está, se suma la cantidad en vez de duplicar la línea | Completo |
| 4 | No se aceptan precios menores o iguales a 0 ni cantidades que no sean enteros positivos | Completo |
| 5 | Se pueden eliminar productos; eliminar uno inexistente es un error | Completo |
| 6 | Cupones válidos: `DESC10` (10 %) y `DESC20` (20 %); cualquier otro es un error | Completo |
| 7 | IVA del 19 % calculado después del descuento; total = base gravable + IVA | Completo |

Los valores están en pesos colombianos (COP), sin decimales. Los cálculos con porcentajes se redondean con `Math.round`.

## API de la clase `Carrito`

| Método | Descripción |
|--------|-------------|
| `agregar(nombre, precio, cantidad = 1)` | Agrega un producto o acumula su cantidad si ya existe |
| `eliminar(nombre)` | Quita un producto; lanza error si no está en el carrito |
| `cantidadDeItems()` | Total de unidades en el carrito |
| `subtotal()` | Suma de precio × cantidad de todos los productos |
| `aplicarCupon(codigo)` | Aplica `DESC10` o `DESC20`; lanza error si no es válido |
| `descuento()` | Valor del descuento según el cupón aplicado |
| `baseGravable()` | Subtotal menos descuento |
| `iva()` | 19 % de la base gravable |
| `total()` | Base gravable más IVA |
| `resumen()` | Objeto con `subtotal`, `descuento`, `iva` y `total` |

## Ejemplo

```js
import { Carrito } from './src/carrito.js';

const carrito = new Carrito();
carrito.agregar('Mouse', 50000, 2);
carrito.aplicarCupon('DESC10');

carrito.resumen();
// { subtotal: 100000, descuento: 10000, iva: 17100, total: 107100 }
```

## Metodología

Cada comportamiento se desarrolló con el ciclo **Rojo → Verde → Refactor**:

1. **Rojo:** se escribe una prueba pequeña y se confirma que falla.
2. **Verde:** se escribe el código mínimo para que pase.
3. **Refactor:** se limpia el código con todas las pruebas en verde.

El historial de commits refleja ese ciclo usando [Conventional Commits](https://www.conventionalcommits.org/):

- `test:` prueba nueva en rojo
- `feat:` código que la hace pasar
- `refactor:` mejora sin cambiar el comportamiento
- `docs:` documentación

Para ver la secuencia completa: `git log --oneline`.

## Autor

Carlos Andres Barrera Rios 