# Overview

Hutz is a UI library for developing applications with React.

The components in this library are all designed to be stateless, dumb, and presentational. (See the [React Docs](https://facebook.github.io/react/docs/reusable-components.html) and [this](https://gist.github.com/chantastic/fc9e3853464dffdb1e3c) for ) for more info on stateless components). In order to use these in your applications effectively  you will need to add stateful container.

Another goal of this libary was to avoid external stylesheets and favor inline styles instead. Therefore, this set of components does not require any external stylesheets. To accomplish this goal and to apply certain style updates that cannot be acheived with inline styles alone, Hutz uses Radium. For a good explanation on the benefits of inline styles see the "Overview" section on the (Radium site)[http://stack.formidable.com/radium/].

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the hutz-ui is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

Copyright (c) 2015 MIT.

