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
  myString = 'I like cherry';
  myBoolean = true;

  // #12 Event Binding
  alertMe1(){
    alert('Hi, there!');
  }
  alertMe2(val){
    alert(val);
  }

  // #13 2 Way Data Binding
  fruit = {
    name: "apple",
    color: "red",
    price: "$1.99"
  }
  constructor() { }

  ngOnInit() {
  }

}
