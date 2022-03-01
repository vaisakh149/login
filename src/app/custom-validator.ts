import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidator {
    static ageLimitValidator(minAge: number, maxAge: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
          if (control.value !== null) {
            return isNaN(control.value) || 
            control.value < minAge || 
              control.value > maxAge 
              ? { ageLimit: true } 
              : null; 
          }
          return null;
        };
      }
}
