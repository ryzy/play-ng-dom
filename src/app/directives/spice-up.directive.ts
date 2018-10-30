import { Directive, ElementRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSpiceUp]'
})
export class SpiceUpDirective implements OnInit {

  @Input()
  public appSpiceUp: TemplateRef<{ info: string }>;

  constructor(private el: ElementRef, private vc: ViewContainerRef) {
  }

  public ngOnInit(): void {
    console.log('[SpiceUpDirective]', { el: this.el, vc: this.vc, tpl: this.appSpiceUp });
    this.vc.createEmbeddedView(this.appSpiceUp, { info: 'inserted from SpiceUpDirective' })
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.spiceUp('darkmagenta');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.spiceUp(null);
  }

  private spiceUp(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
