import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-vc-playground',
  template: `
    <app-cider #cmp></app-cider>
  `,
  styles: []
})
export class ViewContainerPlaygroundComponent implements OnInit {

  constructor(private vc: ViewContainerRef) { }

  ngOnInit() {
    // console.log('[ViewContainer]', this);
  }

}
