import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  answer: string = "0"
  displayId(id:string)
  {
    console.log(id);
  }
  clickedValueShow(value:any)
  {
    if(this.answer == "0")
    {
      this.answer = value
    }
    else{
      this.answer+=value;
    }
  }
  array_of_symbols: string[][] = [
    ["7","8", "9", "/"], ["4", "5", "6", "*"], ["1","2","3","-"], ["0",".","%","+"]
  ]
}
