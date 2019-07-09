import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  classes = {'blue':false, 'red': true, 'underline': false};


  constructor(){ }

  ngOnInit() {
  }

}
