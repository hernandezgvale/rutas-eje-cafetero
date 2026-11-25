# Mis aprendizajes · Rutas del Eje

> Las pruebas automáticas dicen si tu código **funciona**. Este archivo muestra si **entiendes por qué funciona**.
> Responde con tus palabras, en 2 a 5 líneas por pregunta. No copies la documentación: explícala.
> En cada issue anota también **qué consultaste** (enlace) y **qué encontraste ahí**.
>
> Este archivo forma parte de la calificación del reto (criterio *Comprensión*).

**Aprendiz:** _Valeria Galindo Hernandez_

---

## Issue #1 · G1 Guía de estilo

**Consulté:** _enlace(s)_ → _qué encontré_
**Consulté:**
- [MDN: Variables CSS](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties) → Explica cómo crear variables en `:root` y utilizarlas con `var()`.
- [Bootstrap: CSS variables](https://getbootstrap.com/docs/5.3/customize/css-variables/) → Explica cómo personalizar los estilos de Bootstrap.
- [Bootstrap: Buttons](https://getbootstrap.com/docs/5.3/components/buttons/#variables) → Muestra las variables que controlan los botones.
- [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/) → Permite comprobar el contraste entre los colores.

1. **Explica:** ¿qué ventaja tiene escribir los colores como variables en `:root` en vez de escribir el hex directamente en cada regla?
   _La ventaja es que podemos guardar los colores en un solo lugar y utilizarlos en diferentes partes de la página. Si queremos cambiar un color, solo modificamos la variable y el cambio se aplica a todos los elementos que la utilizan. Así evitamos repetir el mismo código._

2. **Experimenta y explica:** en DevTools selecciona el botón "Ver rutas", pestaña *Computed* (o *Calculado*) y busca `--bs-btn-bg`. ¿De dónde sale su valor? ¿Por qué cambiar `--bs-primary` no habría cambiado el color del botón?
   _El color del botón viene de la variable `--eje-primario`, que definimos en nuestro archivo CSS con el color verde `#1f5f3a`. Bootstrap utiliza ese valor mediante `--bs-btn-bg`. No basta con cambiar `--bs-primary` porque el botón tiene sus propias variables para controlar sus colores._

3. **¿Qué pasaría si…** enlazas `estilos.css` ANTES de `bootstrap.min.css` en el `<head>`? Pruébalo, describe lo que ves y vuelve a dejarlo como estaba.
   _Si ponemos `estilos.css` antes de Bootstrap, algunos colores de la página pueden cambiar porque Bootstrap pone sus propios colores. Por eso debemos colocar primero Bootstrap y después nuestro archivo, para que la página se vea con los colores que nosotros elegimos._

---

## Issue #2 · G2 Componentes

**Consulté:** _enlace(s)_ → _qué encontré_

**Consulté:**

- [Bootstrap: Navbar](https://getbootstrap.com/docs/5.3/components/navbar/#responsive-behaviors) → Explica cómo hacer que el menú se abra y se cierre en el celular.

- [Bootstrap: Button group](https://getbootstrap.com/docs/5.3/components/button-group/) → Muestra cómo organizar varios botones juntos.

- [MDN: aria-pressed](https://developer.mozilla.org/es/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) → Explica cómo indicar si un botón está seleccionado o no.

- [MDN: Atributos data-*](https://developer.mozilla.org/es/docs/Web/HTML/Global_attributes/data-*) → Explica cómo guardar información en los botones para saber qué opción representa cada uno.


1. **Explica:** ¿qué relación hay entre `data-bs-target="#menu"` en el botón y el `id="menu"` del div? ¿Quién lee ese atributo?
   _Los dos están conectados para que el menú funcione. Cuando presionamos el botón, se abre el menú y podemos ver las opciones de Inicio, Rutas y Contacto. Si volvemos a presionarlo, el menú se cierra._

2. **Experimenta:** abre y cierra el menú en un ancho de celular y observa en DevTools el atributo `aria-expanded` del botón. ¿Qué pasa con su valor? ¿Para quién es útil esa información?
   _Cuando el menú está cerrado aparece `false` y cuando lo abrimos cambia a `true`. Esto ayuda a las personas que no pueden ver bien la pantalla a saber si el menú está abierto o cerrado._

3. **¿Qué pasaría si…** en un botón de filtro escribes `data-tipo="café"` (con tilde)? Piensa en lo que hay en `datos.js` antes de responder.
   _No funcionaría bien porque en los datos está escrito `cafe` sin tilde. Para que el botón muestre las rutas correctas, las dos palabras deben estar escritas de la misma manera._

---

## Issue #3 · G3 Datos → tarjetas

**Consulté:** _enlace(s)_ → _qué encontré_

1. **Predice y comprueba:** antes de ejecutarlas en la consola del navegador, escribe qué crees que devuelve cada línea. Después ejecútalas y anota el resultado real.
   ```js
   [1, 2, 3].map((n) => n * 10)
   ['a', 'b', 'c'].join('')
   ['a', 'b', 'c'].join(' - ')
   rutas.map((r) => r.nombre).length
   ```
  
| Línea | Mi predicción | Resultado real |
|---|---|---|
| 1 | Multiplica cada número por 10. | [10, 20, 30] |
| 2 | Junta las letras sin espacios. | 'abc' |
| 3 | Junta las letras separadas por guiones. | 'a - b - c' |
| 4 | Cuenta los nombres de las rutas. | 11 |

2. **Experimenta y explica:** quita temporalmente `.join('')` de `pintarRutas`. ¿Qué aparece entre las tarjetas y por qué? (Pista: ¿qué hace `innerHTML` cuando le asignas un arreglo?). Vuelve a ponerlo.
   _Si quitamos join(''), aparecen comas entre las tarjetas porque map() devuelve un arreglo y JavaScript lo convierte en texto separando sus elementos con comas. Al utilizar join(''), podemos unir todas las tarjetas sin dejar separaciones entre ellas._

3. **Explica:** ¿por qué la tarjeta se escribe con comillas invertidas `` ` `` y no con comillas simples `' '`? ¿Qué hace `${ }`?
   _Utilizamos las comillas invertidas porque nos permiten escribir código HTML en varias líneas e insertar los datos de cada ruta. El símbolo ${ } permite colocar el valor de una variable o propiedad dentro del texto._

---

## Issue #4 · G4 Filtros y eventos

**Consulté:** _enlace(s)_ → _- [MDN: filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) → Explica cómo filtrar elementos sin modificar el arreglo original.
- [MDN: includes()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes) → Permite comprobar si un texto contiene otro.
- [MDN: addEventListener()](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener) → Explica cómo detectar eventos del usuario.
- [MDN: Evento input](https://developer.mozilla.org/es/docs/Web/API/Element/input_event) → Explica cómo detectar cambios mientras el usuario escribe._

1. **Predice y comprueba:** después de ejecutar `filtrarPorTipo(rutas, 'cafe')` en la consola, ¿cuánto vale `rutas.length`? ¿Por qué?
   _El valor de rutas.length sigue siendo 11 porque filter() crea un arreglo nuevo con las rutas que cumplen la condición. Esto permite filtrar las rutas de café sin eliminar ni modificar las rutas originales._
2. **Explica el recorrido:** describe paso a paso qué pasa desde que la persona hace clic en el botón "Cultura" hasta que aparecen las tarjetas nuevas. Menciona: el evento, `estado`, `aplicarFiltros()`, `filtrarPorTipo()` y `pintarRutas()`.
   _Cuando la persona presiona el botón Cultura, se activa el evento click y se guarda la categoría en estado.tipo. Después se ejecuta aplicarFiltros(), que utiliza filtrarPorTipo() para seleccionar las rutas de cultura. Finalmente, pintarRutas() muestra las tarjetas correspondientes enSi utilizamos change en lugar de input, la búsqueda no se actualiza inmediatamente mientras escribimos. Normalmente se actualiza cuando terminamos de escribir y salimos del campo. Con input, las tarjetas se actualizan cada vez que cambia el texto._

3. **¿Qué pasaría si…** usas el evento `'change'` en lugar de `'input'` en el buscador? Pruébalo y describe la diferencia.
   _Si utilizamos change en lugar de input, la búsqueda no se actualiza inmediatamente mientras escribimos. Normalmente se actualiza cuando terminamos de escribir y salimos del campo. Con input, las tarjetas se actualizan cada vez que cambia el texto._

---

## Reto · Ordenar rutas

**Consulté:** _enlace(s)_ → _- [MDN: sort()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) → Explica cómo ordenar los elementos de un arreglo.
- [MDN: localeCompare()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) → Permite ordenar palabras alfabéticamente respetando el idioma y las tildes.
- [MDN: Spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax) → Explica cómo crear una copia de un arreglo.
- [Node.js: Test runner](https://nodejs.org/api/test.html) → Explica cómo crear pruebas automáticas.
- [Node.js: Assert](https://nodejs.org/api/assert.html) → Permite comparar los resultados obtenidos con los esperados._

1. **Explica:** ¿por qué `ordenarRutas` hace `const copia = [...lista]` antes de `sort()`? ¿Qué le pasaría a `rutas` si no se copia? ¿Qué prueba tuya lo demuestra?
   _Creamos una copia de la lista porque sort() modifica directamente el arreglo que recibe. Si no hacemos una copia, podríamos cambiar el orden de las rutas originales. La prueba "No modifica la lista original" comprueba que esto no suceda._

2. **Explica:** en `copia.sort((a, b) => a.precio - b.precio)`, ¿qué significa que la función devuelva un número negativo, cero o positivo?
   _Cuando la resta devuelve un número negativo, la ruta a debe ir antes que la ruta b. Si devuelve cero, tienen el mismo precio. Si devuelve un número positivo, la ruta a debe ir después de la ruta b. Así podemos ordenar los precios de menor a mayor._

3. **Tus pruebas:** elige una de tus pruebas y explica qué error de programación detectaría si alguien dañara la función.
   _Elegí la prueba "Ordena por precio". Esta prueba verifica que las rutas se organicen desde el precio más bajo hasta el más alto. Si alguien cambia la función y coloca primero las rutas más costosas, la prueba fallaría porque los resultados no coincidirían con los esperados._
