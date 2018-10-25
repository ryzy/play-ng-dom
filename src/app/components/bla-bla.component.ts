import { Component, OnInit, ViewContainerRef as ViewWhichContainsThisComponent } from '@angular/core';

@Component({
  selector: 'app-bla-bla',
  template: `
    <p><strong>Bla-Bla component is here.</strong></p>
    <app-haha info="inside bla-bla"></app-haha>
  `,
  styles: [`
    :host {
      display: block;
      border: 1px dashed deepskyblue;
    }
  `]
})
export class BlaBlaComponent implements OnInit {

  constructor(private thisVc: ViewWhichContainsThisComponent) { }

  ngOnInit() {
    // console.log('[BlaBlaComponent]', this);
  }

}
