import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fh',
  templateUrl: './fh.component.html',
  styleUrls: ['./fh.component.css']
})
export class FhComponent implements OnInit {
  inputField:any=""
  result:any=""
  list=[""]

  constructor() {}
  ngOnInit(): void {
  }
getResult(){
  this.list.push(this.inputField)
  this.result=this.inputField *9.0 / 5.0 + 32;
}

}
