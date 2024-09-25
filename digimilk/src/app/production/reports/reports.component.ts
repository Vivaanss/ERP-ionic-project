import { Component, OnInit } from '@angular/core';
import { ProductionOrderService } from '../services/production-order.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent  implements OnInit {
    reportService: any;
    ngOnInit(): void {

    }
    
    reports: any[] = [];
  
    downloadReport(reportId: string) {
      this.reportService.downloadReport(reportId).subscribe((report: any) => {
        // Handle file download
      });
    }
  }
  