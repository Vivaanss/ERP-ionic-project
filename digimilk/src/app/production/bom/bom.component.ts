import { Component, OnInit } from '@angular/core';
import { ProductionOrder, ProductionOrderService } from '../services/production-order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.scss'],
})
export class BOMComponent  implements OnInit {
    productionOrder: any;
    orderId!: number; // Declare 'orderId'

  
    constructor(private prodOrderService: ProductionOrderService, private route: ActivatedRoute, 
    ) {}
  
    ngOnInit() {
      this.productionOrder();

        // Get 'orderId' from route params
    this.route.params.subscribe(params => {
      this.orderId = +params['id']; // Parse the 'id' from the route
      this.getProductionOrderById(this.orderId);
    });
    }
  
    
  // Use the 'orderId' to fetch the order details
  getProductionOrderById(orderId: number) {
    this.prodOrderService.getOrderById(orderId).subscribe(
      (order: ProductionOrder) => {
        this.productionOrder = order;
      },
      (error: any) => {
        console.error('Error fetching order:', error);
      }
    );
  }
  }
  