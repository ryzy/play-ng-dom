import { Component, OnInit, ViewChild, ViewContainerRef, ViewContainerRef as ViewWhichContainsThisComponent } from '@angular/core';

@Component({
  selector: 'app-cider',
  template: `
    <h3>Cider</h3>
    <app-berries #cmp info="inside app-cider"></app-berries>
  `,
  styles: [`
    :host {
      display: block;
      padding: 1rem;
      border: 1px solid darkred;
    }
  `]
})
export class CiderComponent implements OnInit {
  @ViewChild('cmp', { read: ViewContainerRef })
  public cmpVc: ViewContainerRef;

  constructor(private thisVc: ViewWhichContainsThisComponent) { }

  ngOnInit() {
    console.log('[CiderComponent]', this);
  }

}
