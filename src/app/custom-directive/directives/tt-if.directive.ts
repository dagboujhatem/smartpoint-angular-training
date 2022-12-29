import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class TtIfDirective {

  private _ttIf?: boolean;

  constructor(private _viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) {
    // console.log(this._viewContainer)
    // console.log(this.templateRef)
  }

  @Input('appIf')
  set ttIf(condition: any) {
    this._ttIf = condition
    this._updateView();
  }

  private _updateView() {
    if (this._ttIf) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this._viewContainer.clear();
    }
  }

}
