import {
  AfterContentInit,
  AfterViewInit,
  Component, ComponentFactoryResolver,
  ElementRef,
  OnInit, QueryList,
  TemplateRef,
  ViewChild, ViewChildren,
  ViewContainerRef as ViewWhichContainsThisComponent,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import { CiderComponent } from '../components/cider.component';
import { BerriesComponent } from '../components/berries.component';


@Component({
  selector: 'app-playground',
  template: `
    <ng-template #tpl let-someVar="someVar">
      <div #divInsideTemplate data-info="ng-template html">
        <code>#tpl</code>
        inserted via
        <code>ViewContainerRef.createEmbeddedView()</code>
        with someVar: <code>{{ (someVar) || 'N/A' }}</code>
      </div>
    </ng-template>

    <div #div data-info="#div reference var">
      <code>code #div</code>
    </div>

    <ng-container #ngContainer><code>#ngContainer content</code></ng-container>

    <div data-info="app-bla-bla in the html code">
      <app-cider #cmp></app-cider>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      border: 1px dotted #666;
    }
  `]
})
export class ViewPlaygroundComponent implements OnInit, AfterViewInit {

  @ViewChild('tpl') tpl: TemplateRef<{ someVar: string }>;

  @ViewChild('div') div: ElementRef<HTMLElement>;
  @ViewChild('div', { read: ViewContainerRef}) divVc: ViewContainerRef;

  @ViewChild('cmp') cmp: CiderComponent;
  @ViewChild('cmp', { read: ViewContainerRef}) cmpVc: ViewContainerRef;

  @ViewChildren('divInsideTemplate') divInsideTemplate: ElementRef;

  @ViewChild('ngContainer') ngContainer: ElementRef<Comment>;
  @ViewChild('ngContainer', { read: ViewContainerRef}) ngContainerVc: ViewContainerRef;

  @ViewChildren(CiderComponent) blaBlaComponents: QueryList<CiderComponent>;
  @ViewChildren(BerriesComponent) hahaComponents: QueryList<BerriesComponent>;

  constructor(
    private thisVc: ViewWhichContainsThisComponent,
    private cfr: ComponentFactoryResolver,
  ) {}

  ngOnInit() {
    /**/
    console.log('[ViewPlayground] ngOnInit', {
      thisVc: this.thisVc,
      tpl: this.tpl,

      div: this.div,
      divVc: this.divVc,

      cmp: this.cmp,
      cmpVc: this.cmpVc,

      ngContainer: this.ngContainer,
      ngContainerVc: this.ngContainerVc,
    }); /**/

    // Create embedded view from TemplateRef
    // const embeddedView = this.thisVc.createEmbeddedView(this.tpl, { someVar: 'ViewPlayground vc.createEmbeddedView' });
    // console.log('[ViewPlayground] EmbeddedViewRef created via ViewContainerRef', embeddedView);

    const cf = this.cfr.resolveComponentFactory(BerriesComponent);
    const cmpRef = this.thisVc.createComponent(cf);
    // console.log('[ViewPlayground] Haha cmp factory, already inserted into ViewContainerRef', { 'Haha component factory': cf, 'Haha component ref': cmpRef } );

    // this.cmpVc.createEmbeddedView(this.tpl, { someVar: 'inserted into BlaBla VC' });
    // this.divVc.createEmbeddedView(this.tpl, { someVar: 'inserted into DIV VC' });

    // let ev = this.tpl.createEmbeddedView({ someVar: 'inserted into THIS VC' });
    // const ev = this.thisVc.createEmbeddedView(this.tpl, );
    // this.thisVc.insert(ev);

    const ev = this.divVc.createEmbeddedView(this.tpl, { someVar: 'Inserted into #div' }, 0);
  }

  ngAfterViewInit() {
    // this.blaBlaComponents.changes.subscribe(v => console.log('blaBlaComponents', v));

    // const cf = this.cfr.resolveComponentFactory(CiderComponent);
    // this.cmpVc.createComponent(cf);

    // console.log('this.blaBlaComponents', this.blaBlaComponents);
    // console.log('this.hahaComponents', this.hahaComponents);
    // console.log('divInsideTemplate', this.divInsideTemplate);
  }

}
