import { Component, OnInit } from '@angular/core';
import { ProductionOrderService } from '../services/production-order.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  totalOrders: number = 0;
  pendingOrders: number = 0;
  completedOrders: number = 0;

  constructor(private orderService: ProductionOrderService) {}

  ngOnInit(): void {
    this.orderService.getTotalOrders().subscribe(total => {
      this.totalOrders = total;
    });
    this.orderService.getPendingOrders().subscribe(pending => {
      this.pendingOrders = pending;
    });
    this.orderService.getCompletedOrders().subscribe(completed => {
      this.completedOrders = completed;
    });
  }
}
