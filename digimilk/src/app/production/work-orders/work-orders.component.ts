import { Component, OnInit } from '@angular/core';
import { ProductionOrderService } from '../services/production-order.service';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss'],
})
export class WorkOrdersComponent  implements OnInit {
    prodOrderService: any;
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    workOrders!: any[];
  
    markCompleted(workOrder: { status: string; }) {
      workOrder.status = 'Completed';
      this.prodOrderService.updateWorkOrder(workOrder).subscribe(() => {
        console.log('Work Order Completed');
      });
    }
  }
  