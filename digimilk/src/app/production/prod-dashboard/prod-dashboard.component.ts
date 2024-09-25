import { Component, OnInit } from '@angular/core';
import { ProductionOrder, ProductionOrderService } from '../services/production-order.service';

@Component({
  selector: 'app-production-dashboard',
  templateUrl: './prod-dashboard.component.html',
  styleUrls: ['./prod-dashboard.component.scss']
})
export class ProdDashboardComponent implements OnInit {
  searchQuery: string = '';
  statusFilter: 'Pending' | 'In Progress' | 'Completed' = 'Pending';
  productionOrders: any[] = [];
  filteredOrders: any[] = [];

  constructor(private prodOrderService: ProductionOrderService) {}

  ngOnInit() {
    this.getProductionOrders();
  }

  getProductionOrders() {
    this.prodOrderService.getAllOrders().subscribe(
      (orders: ProductionOrder[]) => {
        this.productionOrders = orders;
      },
      (error: any) => {
        console.error('Error fetching orders:', error);
      });
    }

  filterOrders() {
    this.filteredOrders = this.productionOrders.filter(order =>
      order.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      order.status === this.statusFilter
    );
  }

  viewOrder(orderId: string) {
    // Navigate to order details
  }
  
}
