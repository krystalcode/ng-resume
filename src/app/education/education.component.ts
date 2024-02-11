import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  items: {
    title        : string,
    institution  : string,
    logo         : string,
    description  : string,
    date         : string,
    location     : string,
    links        : string[],
    keywords     : string,
    technologies : string
  }[];

  informalItems: {
    title        : string,
    teacher      : string,
    logo         : string,
    description  : string,
    date         : string,
    location     : string
  }[];

  constructor() {
    this.items = [
      {
        title        : 'Bachelors degree in informatics',
        institution  : 'Universal University',
        logo         : '/assets/logo-universal-university.40.png',
        description  : '<p>I have studied informatics at the Universal University; got my degree with excellency.</p>',
        date         : '2000 - 2012',
        location     : 'City, Country',
        links        : [
          'https://universal-university.edu/'
        ],
        keywords     : 'computer programming, data structures',
        technologies : 'C/C++, MySQL'
      },
    ];

    this.informalItems = [
      {
        title        : 'Classical piano',
        teacher      : 'My Teacher',
        logo         : '/assets/logo-classical-piano.40.jpg',
        description  : 'Traditional classical piano studies',
        date         : '2000 - 2012',
        location     : 'City, Country'
      }
    ];
  }

  ngOnInit() {
  }

}
