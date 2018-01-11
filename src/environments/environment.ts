// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAUGscseBRzeZ5hbdKnDUVoR8ONe75pu8s',
    authDomain: 'recipe-book-5a614.firebaseapp.com',
    databaseURL: 'https://recipe-book-5a614.firebaseio.com',
    projectId: 'recipe-book-5a614',
    storageBucket: 'recipe-book-5a614.appspot.com',
    messagingSenderId: '540382612668'
  }
};
