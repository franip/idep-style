# idep-style

Este addon contiene estilos y componentes que pueden utilizarse en las
aplicaciones desarrolladas con [Ember.js](https://emberjs.com) del
[Instituto de Estudios de Posgrado](https://www.uco.es/idep) de la
[Universidad de Córdoba](https://www.uco.es).

## Instalación

```
ember install idep-style
```

## Uso

Una vez instalado se deberán haber instalado los paquetes dependientes y copiado
los ficheros de configuración disponibles. Si no es así se debe ejecutar el
generador del addon:

```
ember generate idep-style
```

Si existiera un fichero `config/tailwind.config.js` el addon preguntará si se
desea sobreescribir. Si se ha modificado ese fichero para configurar de forma
personalizada la aplicación hay que tener cuidado y revisar los cambios para
aplicarlos una vez sobreescrito el fichero o descartar la sobreescritura.

Una vez todo instalado y copiado se debe modificar el fichero `ember-cli-build.js`
para añadir la configuración de `postcss`, `purgecss`, etc.

```
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { join } = require('path');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    join(__dirname, 'app', '**', '*.html'),
    join(__dirname, 'app', '**', '*.hbs'),
    join(__dirname, 'app', '**', '*.js'),
  ],

  // el extractor debe modificarse del original de tailwind para poder soportar tailwindcss/ui
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
});

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          require('postcss-import')({ path: ['node_modules'] }),
          require('postcss-easings'),
          require('tailwindcss')(join(__dirname, 'config', 'tailwind.config.js')),
          require('autoprefixer'),
          ...(process.env.EMBER_ENV === 'production' ? [purgecss] : []),
        ],
      },
    },

    typefaceOptions: {
      disableAuto: true,
      // incluir todas o sólo las que se quieran utilizar
      typefaces: ['inter', 'muli', 'public-sans', 'roboto'],
    },
  });

  app.import({
    development: 'node_modules/animate.css/animate.min.css',
    production: 'node_modules/animate.css/animate.css',
  });

  return app.toTree();
};
```
