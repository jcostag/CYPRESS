# E2E UI Automation with Cypress

### Descripción

+ **Test 1**
    - **Producto  1**
        - Seleccionar el producto "Royal London 41003-03".
        - Modificar la cantidad a 2.
        - Validar la cantidad modificada.
        - Realizar el pago sin registro.
        - Validar el mensaje de la venta (_debe ser **correcto**_).

    - **Producto  2**
        - Seleccionar el producto "Citizen Eco-Drive Silver Tone Men".
        - Modificar la cantidad a 3.
        - Validar la cantidad modificada.
        - Realizar el pago sin registro.
        - Validar el mensaje de la venta (_debe ser **correcto**_).

+ **Test 2**

   - **Producto  1**
        - Seleccionar el producto "Royal London 41003-03".
        - Modificar la cantidad a 2.
        - Validar la cantidad modificada.
        - Realizar el pago sin registro.
        - Validar el mensaje de la venta (_debe ser **incorrecto**_).

### Clonar proyecto de GitHub
    - Abrir Visual Studio Code en modo administrador.
    - Seleccionar "Source Control" del menú de la izquierda.
    - Hacer clic en el botón "Clone Repository".
    - Seleccionar "Clone from GitHub" de la barra superior.
    - Introducir "https://github.com/jcostag/CYPRESS" en la barra superior.
    - Crear y/o seleccionar un directorio local para clonar el proyecto.
    - Hacer clic en el botón "Open" en la ventana emergente.

### Ejecución en un navegador
    - Abrir una nueva terminal (menú superior > Terminal > New Terminal).
    - Ejecutar el siguiente comando en la terminal: **npm install cypress --save-dev**.
    - Ejecutar el siguiente comando en la terminal: **npm run cypress:open**.
    - Seleccionar la opción "E2E Testing".
    - Seleccionar el explorador deseado y hacer clic en el botón "Start E2E Testing in {explorer}".
    - En el navegador, seleccionar "sqa_test_spec".

### Obtención de "Screenshot & Video"
    - Abrir una nueva terminal (menú superior > Terminal > New Terminal), en caso de que no se haya hecho.
    - Ejecutar el siguiente comando en la terminal: **npm install cypress --save-dev**, en caso de que no se haya hecho.
    - Ejecutar el siguiente comando en la terminal: **npx cypress run**.
    - La captura de pantalla se almacenará en: **{Project folder}\cypress\screenshots\sqa_test_spec.cy.js\**
    - El video se almacenará en: **{Project folder}\cypress\videos\**

### Visualización del video
+ [Youtube](https://youtu.be/A9muB61i60c)
