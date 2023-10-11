import {Injectable} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantBeStrider = (control: FormControl) => {
    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
      return {
        noStrider: true,
      }
    }
    return null;
  }

    public isValidField(form: FormGroup, field:string) {
      return form.controls[field].errors
        && form.controls[field].touched;
    }

    public isFieldOneEqualFieldTwo(password1:string, password2:string){
      return ( formGroup: AbstractControl): ValidationErrors | null => {
        const fieldValue1 = formGroup.get(password1)?.value;
        const fieldValue2 = formGroup.get(password2)?.value;

        if( fieldValue1 !== fieldValue2) {
          formGroup.get(password2)?.setErrors({notEqual:true});
          return { notEqual: true }
        }

        formGroup.get(password2)?.setErrors(null);
        return null;

      }
    }
}
