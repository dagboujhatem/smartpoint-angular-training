import { Directive, Input } from '@angular/core';
import { FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Validation } from '../utils/match.validation';

@Directive({
  selector: '[appPasswordPattern]'
})
export class PasswordPatternDirective implements Validator{
  @Input('appPasswordPattern') matchPassword: string[] = [];

  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors | null {
    return Validation.match(this.matchPassword[0], this.matchPassword[1])(formGroup);
  }

}
