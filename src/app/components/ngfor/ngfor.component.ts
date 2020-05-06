import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent implements OnInit {
  employee: any = [
    {
      id: '1',
      employee_name: 'John Doe',
      employee_salary: '50000',
      employee_age: '25',
    },
    {
      id: '2',
      employee_name: 'Roller',
      employee_salary: '10505',
      employee_age: '50',
    },
    {
      id: '3',
      employee_name: 'Dang Dum',
      employee_salary: '100050',
      employee_age: '20',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
