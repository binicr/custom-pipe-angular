import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"DateTransform"
})
export class DateTransform implements PipeTransform{
    transform(value:any):any{
        let newValue = value.transform(value,"EEEE d MMMM y h:mm a");
        return newValue;
    }
}