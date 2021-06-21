import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-row',
  templateUrl: './buttons-row.component.html',
  styleUrls: ['./buttons-row.component.scss']
})
export class ButtonsRowComponent implements OnInit {
  @Input() buttons: string[]
  @Output() clickedValue = new EventEmitter()
  clickedValueEmit(value:string)
  {
    this.clickedValue.emit(value)
  }
  constructor() { }
  display_click(value : any)
  {
   // console.log(value)
    this.clickedValue.emit(value)

  }
  ngOnInit(): void {
  }

}
