import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {take} from "rxjs/operators";
import {flushMicrotasks} from "@angular/core/testing";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  title = 'symbolGenerator';
  A:number[] = []
  B:object
  C:object
  red:boolean = false;
  blue:boolean = false;



  ngOnInit(): void {
    const numbers = interval(3000);
    numbers.subscribe(x => (this.C=this.Checking()));
  }

//48-57 (0-9)  65-90 (A-Z)  97-122 (a-z)   33-126 (! - ~)
  generating(max:number,min:number) {
    for (let i:number =0;i<5;i++){
       this.A[i]= Math.floor(Math.random() * (max - min + 1)) + min
      this.A[i].toString()
    }
    return this.A
  }

  fromAsciiToSymbol(){
    let C=[];
    for (let i:number =0;i<5;i++) {
      //48-57 (0-9)  65-90 (A-Z)  97-122 (a-z)   33-126 (! - ~)
    C.push(String.fromCharCode(this.generating(33, 126 )[i]))
    }
    return C
  }

  Checking(){
    let b = this.fromAsciiToSymbol()
   if (b[0]==='0'||b[1]==='0'||b[2]==='0'||b[3]==='0'||b[4]==='0'){
      console.log("0000000000")
      return [''];}

    else  if ((b[0]===b[4])&&(b[1]===b[3])){
      console.log("POlindrom")
      this.red = true
      return b
    }
   else if (b[0]==='0'||b[1]==='0'||b[2]==='0'||b[3]==='0'||b[4]==='0'){
      console.log("0000000000")
      return [''];
    }
   else if (Number(b[0]) > 0 && Number(b[1]) > 0 && Number(b[2]) > 0 && Number(b[3]) > 0 && Number(b[4]) > 0){
      console.log("numbeeeeeeer")
     this.blue=true
     return b
    }
    return b

}
}
