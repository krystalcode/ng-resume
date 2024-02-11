import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  current: [
    {
      title        : string,
      description  : string,
      maintained   : boolean,
      technologies : string,
      links        : string[]
    }
  ]

  items: [
    {
      title        : string,
      description  : string,
      maintained   : boolean,
      technologies : string,
      links        : string[]
    }
  ]

  constructor() {

    this.current = [
      {
        title        : 'Amazing PHP library',
        description  : '<p>Object oriented, with full test suite and stuff.</p>',
        maintained   : true,
        technologies : 'PHP',
        links        : [
          'https://github.com/jane-doe/php-amazing'
        ]
      },
    ];

  }

  ngOnInit() {
  }

}
