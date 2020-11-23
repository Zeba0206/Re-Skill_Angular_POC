// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl:'./dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';

export interface Expense {

  date: string;
  description: string;
  amount: string;
}

const EXPENSE_DATA: Expense[] = [
  { date: '04-Nov-2020', description: 'Hotel', amount: '1500'},
  { date: '05-Nov-2020', description: 'Gifts', amount: '4000'},
  { date: '14-Nov-2020', description: 'Rent', amount: '6500'},
  
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['date', 'description', 'amount'];
  dataSource = EXPENSE_DATA;

}
