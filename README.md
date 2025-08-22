# Proyecto de Personajes de Dragon Ball

¡Bienvenido al proyecto de personajes de Dragon Ball! 🐉 Aquí aprenderás a consumir una API externa utilizando `fetch` de JavaScript para mostrar un personaje aleatorio de la serie.

---

### 🚀 Tecnologías Usadas

* **React:** Para la interfaz de usuario.
* **React-Bootstrap:** Para estilizar los componentes y hacerlos responsivos de forma rápida.
* **Dragon Ball API:** Para obtener los datos de los personajes. ¡Goku, Vegeta y todos tus favoritos!

---

### 💡 ¿Cómo Funciona?

Este proyecto es muy simple, pero efectivo. Al cargar la página, se realiza una petición a la API de Dragon Ball para obtener un personaje de forma aleatoria y se muestra su información. Cada vez que refresques la página o presiones el botón obtener personaje, verás uno diferente.

La magia sucede en el código de JavaScript. Usamos la función nativa **`fetch`** para hacer la solicitud (request) a la URL de la API: `https://dragonball-api.com/api/characters/id`.

Para una mejor experiencia de usuario, hemos incluido un **componente condicional de un spinner**. Esto significa que mientras la aplicación está esperando la respuesta de la API, se muestra un icono de carga (el spinner). Una vez que los datos del personaje son recibidos, el spinner desaparece y la información se muestra en la pantalla. Esto evita que la página se vea vacía mientras se cargan los datos. ⏳

---

### 📖 Guía de Uso

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/rollingcodeschool/apiDragonBallz
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta el proyecto:**
    ```bash
    npm start
    ```

4.  ¡Explora la aplicación y diviértete viendo a tus personajes favoritos de forma aleatoria! 🎉

---

### 📚 Recursos Adicionales

* [Documentación de la Dragon Ball API](https://web.dragonball-api.com/documentation)
* [Documentación de React](https://es.react.dev/)
* [Documentación de React-Bootstrap](https://react-bootstrap.github.io/)

---

### 👩‍💻 Autora

* [Emilse Arias](https://github.com/emiarias)

¡Espero que este proyecto te sea muy útil para aprender a consumir APIs! Si tienes alguna pregunta, no dudes en contactarme.