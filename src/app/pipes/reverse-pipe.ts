import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'reverseStr'
})
export class ReverseString implements PipeTransform{
    transform(value:string):string{
        let tranformedString = value.split("").reverse().join("");
        return tranformedString;
    }
}