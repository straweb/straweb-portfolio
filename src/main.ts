import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { UtilitiesModule } from './modules/utilities/utilities-module';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// platformBrowser().bootstrapModule(UtilitiesModule)
//   .catch(err => console.error(err));

  // platformBrowserDynamic()
  //   .bootstrapModule(UtilitiesModule)
  //   .catch((err: any) => console.error(err));
  