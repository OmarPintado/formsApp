import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {
  validate(control: AbstractControl ): Observable<ValidationErrors | null> {
    const email = control.value;
    const httpCallObservable = new Observable<ValidationErrors|null>( (subscriber) => {
      console.log({email});

      if (email === 'omar@google.com') {
        subscriber.next({emailTaken: true});
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();

    });
    return httpCallObservable;
  }
}

/*validate(control: AbstractControl): Observable<ValidationErrors | null> {
  const email = control.value;

  return of({
    emailTaken: true
  }).pipe(
    delay(2000)
  )
}*/
/*validate(control: AbstractControl): Observable<ValidationErrors | null> {
  const email = control.value;

  return this.http.get<any[]>(`http://nombreApi/users?q=${email}`)
    .pipe(
      map(resp => {
        return (resp.length === 0)
        ? null
        : { emailTaken: true }
      })
    );
}*/


