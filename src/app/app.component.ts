import { Component } from '@angular/core';
import { HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fruit-app';
  name = 'smoothy';
  smoothy = {
    name:"orange-lemon",
    color:"yellow",
    price:"$5.99"
  }
  sale(e){
    alert("Orange is on sale!");
  }
}
