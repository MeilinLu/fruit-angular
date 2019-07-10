import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { DisplayLoggerService } from '../display-logger.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  // #18 Route Params
  /*
  fruit: string;
  constructor(private route: ActivatedRoute) {
    this.fruit = route.snapshot.params['fruit'];
  }
  */

  // #19 Directives Introduction
  // classes = {'blue':true, 'red': false, 'underline': true};
  // test = true;

  // #20 ngFor Directive
  fruits = [
    {name: "Apple", color: "red", price:"$1.99"},
    {name: "Apple", color: "green", price:"$1.99"},
    {name: "Cherry", color: "red", price:"$9.99"},
    {name: "Banana", color: "yellow", price:"$0.99"},
    {name: "Blueberry", color: "purple", price:"$5.99"},
    {name: "Pear", color: "green", price:"$2.99"}
  ]

  constructor(public loggerService: DisplayLoggerService){
  }

  ngOnInit() {
  }

  /*
  public testLogger() {
    this.loggerService.printLoggerInfo();
  }
*/

}
