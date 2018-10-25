import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-haha',
  template: `
    <span class="root-app-haha">app-haha</span>
  `,
  styles: [`
    :host {
      border: 1px dotted cadetblue;
    }
  `]
})
export class HahaComponent implements OnInit {

  @Input()
  public info: string = '';

  constructor(private thisVc: ViewContainerRef) { }

  ngOnInit() {
    console.log('[HaHa]', this);
  }
}
