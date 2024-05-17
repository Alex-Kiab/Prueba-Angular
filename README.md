## Concepto

Dicha aplicación se ha desarrollado con Angular 17, lo que supuso la utilización de rutas para la navegación entre páginas.

La idea de la aplicación consiste en ofrecer al usuario una lista de tornillos que podrá manipular, ya sea para buscar, añadir, eliminar, editar u ordenar columnas. Sin embargo, antes de acceder a dichos datos, el usuario se encuentra con una pantalla de bienvenida con la numeración de tornillos que podrá consultar tras loguearse.

La pantalla de login da la bienvenida con dos campos que deben ser rellenados con un usuario o contraseña válidos, dichos, se encuentran en la carpeta core/data.ts. Si una de las condiciones no se cumple, saltará un único diálogo con mensaje de error dinámico que irá acorde a la condición que no se haya cumplido.

Dado que en la aplicación disponemos de pocos datos, su carga será inmediata. Para ello, se ha añadido la pantalla de loading. Al clicar en botón login con datos correctos, se aplica un delay de 2 segundos que carga la pantalla de loading, ésta a su vez, tras ese tiempo automáticamente redirige al usuario a tabla.

El header y footer también son dinámicos, ya que su contenido se muestra en función de si el usuario está o no logueado. En caso de header, el botón de logout, además de redirigir a la página inicial, elimina al usuario logueado también simulando un cierre de sesión y devolviendo el header y footer a sus estados iniciales.

La pantalla tabla permite consultar y manipular los datos cargados (buscar, añadir, eliminar o editar). Sin embargo, se visualizan solo algunos datos a pesar de que en el archivo data también se puede encontrar id, peso y descripción. De esta forma se ofrece al usuario solo la información que más le puede interesar, pero si lo desea, puede ver todos los datos del tornillo con el botón de editar que también sirve para la consulta. Con esto aportamos todo contenido del tornillo, pero al mismo tiempo aligeramos la experiencia del usuario si solo está interesado en datos más comunes.

El id cumple un papel fundamental ya que permite encontrar el tornillo que queremos eliminar y editar.

A la hora de añadir o editar un tornillo se utiliza un dialogo con los campos respectivos. Para ordenar dichos campos se ha utilizado Bootstrap, gracias a ello se aprovecha mejor el espacio y mejoramos la experiencia del usuario.

A lo largo de la aplicación se aplican observadores para el usuario, los tornillos y columnas, a los cual se suscribe la aplicación para identificar cambios o si nos ha llegado el dato, pero también se da de baja una vez realizada la consulta para evitar memory leaks.

# Estilo

El estilo sigue la metodología BEM. Se ha editado el style.css de la aplicación para definir ciertos colores y botones que se van a utilizar de continuo. De esta forma en el futuro si surge la necesidad de cambiar algún color, no será necesario ir a cada componente y modificarlo, todo se hace desde el archivo style.

Se ha añadido el logotipo, que también es clicable. Se ha proporcionado una imagen al login. La alineación de todos los botones está a la derecha para crear al usuario la costumbre de siempre ir a la esquina inferior derecha para realizar la acción en un dialogo. De esta forma se crea un aspecto más atractivo, agradable y frendly user.

# Base

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
