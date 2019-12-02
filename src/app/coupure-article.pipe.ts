import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "coupureArticle"
})
export class CoupureArticlePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    return value.substring(0, 25) + "...";
  }
}
