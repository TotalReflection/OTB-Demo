OTB Demo in React - builds with create-react-app

By Duncan Lawson

Static vesion in build folder dosn't require a server (though is ready for one).

For live compilation and a server, build with create-react-app: just run npm install, then npm start. requires node v 9+

Things that are good -
  - React based web insert
  - es6 with wepback and auto pollyfills
  - loads dynamicaly from json
  - sorts acending or decending
  - Self testing  for crash
  - css scoped to app

Things to work on -
  - no animations without implenting CSSTransitionsGroup (yet)
  - bolding not inline with design without further breaking apart the json
  - no app specific test suite
  - css could still be neater

  - [npm install](#npm-install)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Supported Browsers](#supported-browsers)
- [Supported Language Features and Polyfills](#supported-language-features-and-polyfills)