import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-berries',
  template: `
    <h4 *ngIf="1 === 1">app-berries</h4>
  `,
  styles: [`
    :host {
      display: block;
      border: 1px dotted rebeccapurple;
    }
  `]
})
export class BerriesComponent {

  constructor(private vc: ViewContainerRef) {
    console.log('BerriesComponent', vc);
  }
}
