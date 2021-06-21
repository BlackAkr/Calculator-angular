import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.scss']
})
export class CalcButtonComponent implements OnInit {
  @Input() id: string
  @Output() id_emitter = new EventEmitter()
  constructor() { }
  show_id()
  {
    this.id_emitter.emit(this.id)
  }
  
  ngOnInit(): void {
  }

}
