import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ButterComponent } from './butter.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ButterComponent],
  entryComponents: [ButterComponent]
})
export class ButterModule {
  ngDoBootstrap() {}
}
