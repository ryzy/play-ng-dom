import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-peaches',
  template: `
    <h4>app-peaches</h4>
  `,
  styles: [`
    :host {
      display: block;
      border: 1px dotted orangered;
    }
  `]
})
export class PeachesComponent implements OnInit {

  @Input()
  public info: string = '';

  constructor(private vc: ViewContainerRef) { }

  ngOnInit() {
    console.log('[PeachesComponent]', this);
  }
}
