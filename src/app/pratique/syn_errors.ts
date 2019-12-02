import { AbstractControl } from "@angular/forms";

export class Custom_validators {
  static sans_espace(valeur: AbstractControl) {
    if (valeur.value.indexOf(" ") > 0) {
      return {
        peut_avoir_espace: true
      };
    }
    return null;
  }
}
