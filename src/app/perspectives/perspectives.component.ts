import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perspectives',
  templateUrl: './perspectives.component.html',
  styleUrls: ['./perspectives.component.css']
})
export class PerspectivesComponent implements OnInit {

  items: {
    title    : string,
    body     : string
  }[];

  constructor() {
    this.items = [
      {
        title : 'Team Collaboration',
        body  : '<p>Add your thoughts about how you approach team collaboration, or any other aspects related to your work.</p>'
      },
    ];
  }

  ngOnInit() {
  }

}
