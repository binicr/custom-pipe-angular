import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css']
})
export class StudentRecordComponent implements OnInit {
  today: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
