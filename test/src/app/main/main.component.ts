import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  myNameArray : string[] = []

  addNameToAeeray(newName:string){
    this.myNameArray.push(newName)
    console.log(this.myNameArray);
    
  }

  ngOnInit(): void {
  }

}
