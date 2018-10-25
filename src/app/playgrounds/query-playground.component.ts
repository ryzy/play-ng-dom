import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HahaComponent } from '../components/haha.component';

@Component({
  selector: 'app-query-playground',
  template: `
    <h3>app-view-children cmp</h3>
    <ng-container *ngTemplateOutlet="tplForViewChildren">view-children works!</ng-container>
    <ng-container #ngContainer></ng-container>
  `,
  styles: []
})
export class QueryPlaygroundComponent implements OnInit, AfterViewInit {

  @Input() public tplForViewChildren: TemplateRef<any>;
  @ViewChild(HahaComponent) hahaCmp: HahaComponent;
  @ViewChild('ngContainer', { read: ViewContainerRef }) ngContainer: ViewContainerRef;

  public constructor(private vc: ViewContainerRef) {
  }

  ngOnInit() {
    console.log('tplForViewChildren', this.tplForViewChildren);
    console.log('ngContainer', this.ngContainer);
    console.log('this vc', this.vc);
  }

  ngAfterViewInit(): void {
    // this.ngContainer.createEmbeddedView(this.tplForViewChildren);
    // console.log('[ViewChildren] hahaCmp from injected tpl', this.hahaCmp);
  }

}
