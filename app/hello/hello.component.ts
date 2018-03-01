import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name: string = 'User';
   
  constructor() {}

  ngOnInit() {
  }
  resetData() {
    this.name = 'User';
  }
}
