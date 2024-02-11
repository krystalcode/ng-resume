import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {

  items: {
    title        : string,
    project      : string,
    logo         : string,
    description  : string,
    join_leave   : string[],
    date         : string,
    location     : string,
    links        : string[],
    keywords     : string,
    technologies : string,
    tools        : string
  }[];

  constructor() {
    this.items = [
      {
        title        : 'Software Developer & Team Lead',
        project      : 'Dev & Co',
        logo         : '/assets/logo-dev-co.40.jpg',
        description  : '<p>At <a href="https://dev-co.example.com/" target="_blank">Dev & Co</a> I have been working as a lead developer <span class="highlight-type2">guiding a team of back-end and front-end developers</span> in the implementation of a complex web application.</p>',
        join_leave   : [
          'Gave me the opportunity to dive deep into systems architecture.',
          'I am looking for new technical challenges.'
        ],
        date         : '2017 - Present',
        location     : 'Country (remote working)',
        links        : [
          'https://dev-co.example.com/',
        ],
        keywords     : 'CMS, Commerce',
        technologies : 'PHP, Drupal, Symfony, Angular',
        tools        : 'Git'
      },
    ];
  }

  ngOnInit() {
  }

}
