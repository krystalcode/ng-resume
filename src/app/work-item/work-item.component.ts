import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {
  @Input() title: string;
  @Input() project: string;

  constructor() {
  }

  ngOnInit() {
  }

}
