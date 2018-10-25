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
  selector: 'app-ng-template-playground',
  template: `
    <ng-template #tplEmpty></ng-template>
    <ng-template #tplWithContent><code>ng-template #tplWithContent</code></ng-template>
    <div #tplRefVarOnHtmlElement>DIV with <code>#tplRefVarOnHtmlElement</code></div>
  `,
  styles: []
})
export class NgTemplatePlaygroundComponent implements AfterViewInit {

  @ViewChildren(TemplateRef) public viewChildren: QueryList<TemplateRef<Comment>>;
  @ViewChild('tplWithContent') public tplRef: TemplateRef<Comment>;

  @ViewChild('tplRefVarOnHtmlElement') public tplRefVarOnHtmlElement: ElementRef<HTMLElement>;

  public constructor(private vc: ViewContainerRef, private el: ElementRef<any>) {
  }

  ngAfterViewInit() {
    console.log('[NgTemplatePlaygroundComponent]', {
      el: this.el,
      vc: this.vc,
      'ViewChild(tplWithContent)': this.tplRef,
      'ViewChildren(TemplateRef)': this.viewChildren,
      'tplRefVarOnHtmlElement': this.tplRefVarOnHtmlElement,
    });

    this.vc.createEmbeddedView(this.tplRef);
  }
}
