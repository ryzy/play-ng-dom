import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1><a href="/">Angular and DOM</a></h1>
    
    <div class="menu">
      <a routerLink="/view" routerLinkActive="active">View</a>
      <a routerLink="/vc" routerLinkActive="active">View Container</a>
      <a routerLink="/query" routerLinkActive="active">View Query API</a>
      <a routerLink="/directive" routerLinkActive="active">Directive</a>
      <a routerLink="/tpl" routerLinkActive="active">ng-template</a>
    </div>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  public constructor() {
  }
}
