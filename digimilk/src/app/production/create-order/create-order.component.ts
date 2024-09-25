import { Component } from '@angular/core';
import { ProductionOrder, ProductionOrderService } from '../services/production-order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent {
  order: any = { materialsRequired: [] };
  availableMaterials = [
    { name: 'Milk', quantityAvailable: 500 },
    { name: 'Sugar', quantityAvailable: 200 },
  ];
  selectedMaterial: any;

  newOrder: ProductionOrder = {
    id: 0,
    orderName: '',
    status: 'pending',
    bom: [], // Initialize with empty BOM
    scheduledDate: new Date()
  };

  constructor(private prodOrderService: ProductionOrderService) {}

  addMaterial(material: any) {
    this.order.materialsRequired.push(material);
  }

  createOrder() {
    this.prodOrderService.createOrder(this.newOrder).subscribe(
      (response: ProductionOrder) => {
        console.log('Order created:', response);
        // Handle success (e.g., navigate to the orders list or show a success message)
      },
      (error: any) => {
        console.error('Error creating order:', error);
      }
    );
  }
}
