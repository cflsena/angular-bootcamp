import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number){
    this.viewContainer.clear();

    for(let iCount = 0; iCount < times; iCount++){
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: iCount
      });
    }
  }

}
