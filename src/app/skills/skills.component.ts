import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  items: {
    title       : string,
    description : string,
    present     : string,
    past        : string,
    explore     : string
  }[];

  constructor() {
    this.items = [
      {
        title       : 'Programming Languages',
        description : '<p>I have extensive experience with building back-end and front-end web applications in PHP and JavaScript. I have started learning Go but I have not had the opportunity to use it in a professional setting yet.</p>',
        present     : 'PHP, Symfony',
        past        : 'JavaScript',
        explore     : 'Go'
      },
    ];
  }

  ngOnInit() {
  }

}
