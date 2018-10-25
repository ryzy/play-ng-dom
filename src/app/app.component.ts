import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1><a href="/">Angular and DOM</a></h1>
    
    <div class="menu">
      <a routerLink="/view" routerLinkActive>View</a>
      <a routerLink="/query" routerLinkActive>View Query API</a>
      <a routerLink="/tpl" routerLinkActive>ng-template</a>
    </div>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
