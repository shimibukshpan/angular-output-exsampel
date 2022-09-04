import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }
  
 @Output() sendInfo = new EventEmitter<string>()

  sendFullName(sendFullName:string){
    this.sendInfo.emit(sendFullName);
  }

  ngOnInit(): void {
  }

}
