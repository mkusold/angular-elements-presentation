import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerAsCustomElements } from '@angular/elements';

import { ButterModule } from './butter.module';
import { ButterComponent } from './butter.component';

registerAsCustomElements([ButterComponent], () =>
  platformBrowserDynamic().bootstrapModule(ButterModule)
);
