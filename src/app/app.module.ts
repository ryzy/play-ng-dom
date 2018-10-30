import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgTemplatePlaygroundComponent } from './playgrounds/ng-template-playground.component';
import { ViewPlaygroundComponent } from './playgrounds/view-playground.component';
import { CiderComponent } from './components/cider.component';
import { BerriesComponent } from './components/berries.component';
import { QueryPlaygroundComponent } from './playgrounds/query-playground.component';
import { ViewContainerPlaygroundComponent } from './playgrounds/view-container-playground.component';
import { PeachesComponent } from './components/peaches.component';
import { DirectivePlaygroundComponent } from './playgrounds/directive-playground.component';
import { SpiceUpDirective } from './directives/spice-up.directive';
import { BrewDirective } from './directives/brew.directive';

const routes: Routes = [
  {
    path: 'view',
    component: ViewPlaygroundComponent,
  },
  {
    path: 'vc',
    component: ViewContainerPlaygroundComponent,
  },
  {
    path: 'query',
    component: QueryPlaygroundComponent,
  },
  {
    path: 'directive',
    component: DirectivePlaygroundComponent,
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
    CiderComponent,
    BerriesComponent,
    PeachesComponent,
    NgTemplatePlaygroundComponent,
    ViewPlaygroundComponent,
    QueryPlaygroundComponent,
    DirectivePlaygroundComponent,
    ViewContainerPlaygroundComponent,
    BrewDirective,
    SpiceUpDirective,
  ],
  entryComponents: [
    CiderComponent,
    BerriesComponent,
    PeachesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
