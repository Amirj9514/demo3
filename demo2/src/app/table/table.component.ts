import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private shareService: SharedService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.shareService
      .sendGetRequest(
        'TodayOrdersByBranchId?branchId=1219&from=2022-09-18&end=2022-10-18'
      )
      .subscribe({
        next: (response: any) => {
          console.log(response);
        },
      });
  }
}
