# 🕹️ Pokédex de Usuarios — React + Vite

Este proyecto es una aplicación web desarrollada en **React con Vite**, que muestra usuarios en un diseño inspirado en la **Pokédex clásica de Pokémon**.  
Cada usuario se representa como si fuera un Pokémon dentro de una tarjeta animada, con un estilo retro y colores característicos de la saga.

---

## 🚀 Características principales

- 🌈 **Interfaz tipo Pokédex** con fondo rojo, pantallas verdes y tipografía estilo retro (Press Start 2P).  
- 🧑‍💻 **Conexión a una API externa** (servidor Express) para obtener la lista de usuarios.  
- 🖼️ Muestra **imagen, nombre, edad, correo y ciudad** de cada usuario.  
- ⚡ Animaciones suaves al pasar el mouse sobre las tarjetas.  
- 🎨 Diseño completamente **centrado y adaptable**, tanto en escritorio como en pantallas pequeñas.  
- 💾 Código estructurado con **Vite**, para un desarrollo rápido y con actualización en tiempo real (HMR).

---

## 🧩 Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|--------------|
| **React** | Biblioteca de JavaScript para crear interfaces interactivas. |
| **Vite** | Entorno de desarrollo rápido para proyectos modernos. |
| **Axios** | Cliente HTTP usado para consumir la API de usuarios. |
| **CSS3** | Estilización con temática Pokédex (fondos, bordes y tipografía). |
| **Google Fonts** | Fuente “Press Start 2P” para un toque retro. |

---

## 🧠 Funcionamiento general

1. El frontend (esta app React) se conecta a una **API creada en Express (puerto 3000)**.  
2. Obtiene los datos de usuarios desde el endpoint: