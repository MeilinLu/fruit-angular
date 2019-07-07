import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // #10 Data Binding
  homeTitle = "Welcome to the fruit-app homepage!";

  // #11 Property Binding
  myString = 'I like 1323';
  myBoolean = true;
  constructor() { }

  ngOnInit() {
  }

}
