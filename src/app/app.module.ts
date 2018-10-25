import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgTemplatePlaygroundComponent } from './playgrounds/ng-template-playground.component';
import { ViewPlaygroundComponent } from './playgrounds/view-playground.component';
import { BlaBlaComponent } from './components/bla-bla.component';
import { HahaComponent } from './components/haha.component';
import { QueryPlaygroundComponent } from './playgrounds/query-playground.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewPlaygroundComponent,
  },
  {
    path: 'query',
    component: QueryPlaygroundComponent,
  },
  {
    path: 'tpl',
    component: NgTemplatePlaygroundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NgTemplatePlaygroundComponent,
    ViewPlaygroundComponent,
    BlaBlaComponent,
    HahaComponent,
    QueryPlaygroundComponent,
  ],
  entryComponents: [
    BlaBlaComponent,
    HahaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
