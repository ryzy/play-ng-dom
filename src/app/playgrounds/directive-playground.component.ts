import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-directive-playground',
  template: `
    <h1 [appSpiceUp]="tpl">Directive Playground [appSpiceUp]</h1>
    
    <hr />
    
    <div *appBrew data-info="div with '*appBrew' on it">
      <p>Content inside <code>*appBrew</code> directive, followed by <code>app-peaches</code> cmp.</p>
      <app-peaches></app-peaches>
    </div>
    
    <ng-template #tpl let-info="info"><p>ng-template content // {{info}}</p></ng-template>
  `,
})
export class DirectivePlaygroundComponent implements AfterViewInit {

  public constructor(private vc: ViewContainerRef, private el: ElementRef<any>) {
  }

  ngAfterViewInit() {
    console.log('[DirectivePlayground]', { vc: this.vc, el: this.el });
  }
}
