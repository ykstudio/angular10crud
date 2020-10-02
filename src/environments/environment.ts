// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "xxx",
    authDomain: "angular-10-crud-db.firebaseapp.com",
    databaseURL: "https://angular-10-crud-db.firebaseio.com",
    projectId: "angular-10-crud-db",
    storageBucket: "angular-10-crud-db.appspot.com",
    messagingSenderId: "xxx",
    appId: "1:xxx:web:xxx",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
