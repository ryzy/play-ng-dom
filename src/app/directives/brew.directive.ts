import { Directive, ElementRef, HostListener, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBrew]',
  exportAs: 'appBrew',
})
export class BrewDirective implements OnInit {
  constructor(private el: ElementRef, private vc: ViewContainerRef, private tpl: TemplateRef<any>) {
    console.log('[BrewDirective]', { el, vc, tpl });
  }

  public ngOnInit(): void {
    console.log('[BrewDirective] vc.createEmbeddedView()', this.vc.createEmbeddedView(this.tpl));
  }
}
