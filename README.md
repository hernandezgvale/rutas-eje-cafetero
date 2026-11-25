# Rutas del Eje

Catálogo de rutas turísticas del Eje Cafetero (Caldas, Risaralda y Quindío).

Las tarjetas no están escritas a mano: JavaScript las construye a partir de los datos en `js/datos.js`. Se pueden filtrar por tipo, buscar por nombre o municipio y ordenar por nombre, precio o duración.

- **Aprendiz:** Valeria Galindo Hernandez
- **Ficha:** 3349882
- **Programa:** Tecnólogo en Análisis y Desarrollo de Software.
- **Centro:** SENA CDITI - Dosquebradas.
- **Sitio publicado (GitHub Pages):** Pendiente de publicación.
- **Lo que aprendí:** ver [APRENDIZAJES.md](APRENDIZAJES.md).

## Tecnologías

- HTML semántico.
- Bootstrap 5.3.
- CSS propio con variables.
- JavaScript.
- Node.js para pruebas automáticas.

## Funcionalidades

- Generación dinámica de tarjetas.
- Filtros por categoría.
- Buscador por nombre o municipio.
- Ordenamiento por nombre, precio y duración.
- Menú adaptable a dispositivos móviles.
- Atributos de accesibilidad.

## Guía de estilo

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--eje-primario` | `#1f5f3a` | Botones y acentos | Blanco encima: 7.6:1 |
| `--eje-secundario` | `#4a2c1a` | Navbar y pie | Blanco encima: 12.6:1 |
| `--eje-fondo` | `#faf6ee` | Fondo de la página | - |
| `--eje-texto` | `#2b2118` | Texto general | Sobre el fondo: 14.6:1 |
| `--eje-fuente` | `"Segoe UI", system-ui, sans-serif` | Toda la página | - |

## Cómo verificar

Ejecutar en la terminal:

```bash
node --test
```

## Resultados de las pruebas

| Grupo | Pruebas aprobadas |
|---|---:|
| G1 - Guía de estilo | 10/10 |
| G2 - Componentes Bootstrap | 7/7 |
| G3 - Datos a tarjetas | 11/11 |
| G4 - Filtros y eventos | 12/12 |
| G5 - Reto de ordenamiento | 5/5 |
| Total | 45/45 |

Todas las pruebas fueron aprobadas sin errores.

## Estructura

```text
index.html        Página principal
css/estilos.css   Guía de estilo
js/datos.js       Datos de las rutas
js/app.js         Lógica del proyecto
tests/            Pruebas automáticas
APRENDIZAJES.md   Explicaciones de aprendizaje
RETO.md           Instrucciones del reto
README.md         Documentación del proyecto
img/              Ilustraciones
```