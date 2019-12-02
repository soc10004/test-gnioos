import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "couper"
})
export class Pipe_coupure implements PipeTransform {
  transform(value: string | number, args?: number) {
    if (typeof value === "string") {
      if (args) {
        return value.substring(0, args);
      } else {
        return value.substring(0, 200);
      }
    } else {
      return `${value} FCFA`;
    }
  }
}
