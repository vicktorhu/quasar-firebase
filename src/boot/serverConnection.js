import firebaseService from '../services/firebase';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, Vue ... } */) => {
  const config = process.env.environments.FIREBASE_CONFIG;
  firebaseService.fBInit(config);

  // Validation that our service structure is working
  // with a firebase app instance. Does not validate a
  // valid API key.
  console.log(firebaseService.auth());
}
