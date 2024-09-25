import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Define the ProductionOrder model (customize as per your need)
export interface ProductionOrder {
  id: number;
  orderName: string;
  status: string;
  bom: string[]; // Bill of Materials
  scheduledDate: Date;
  completedDate?: Date;
  // Add more fields as required
}

@Injectable({
  providedIn: 'root'
})
export class ProductionOrderService {
  private apiUrl = '/api/production/orders'; // Base API URL

  constructor(private http: HttpClient) { }

  // Method to fetch all production orders
  getAllOrders(): Observable<ProductionOrder[]> {
    return this.http.get<ProductionOrder[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)  // Handle errors
      );
  }

  // Method to fetch a single production order by ID
  getOrderById(orderId: number): Observable<ProductionOrder> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.get<ProductionOrder>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to create a new production order
  createOrder(orderData: ProductionOrder): Observable<ProductionOrder> {
    return this.http.post<ProductionOrder>(this.apiUrl, orderData)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to update an existing production order
  updateOrder(orderId: number, orderData: ProductionOrder): Observable<ProductionOrder> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.put<ProductionOrder>(url, orderData)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to delete a production order by ID
  deleteOrder(orderId: number): Observable<void> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to handle errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }



  // Mock data - replace with real API calls
  getTotalOrders(): Observable<number> {
    return of(50); // Return total orders count
  }

  getPendingOrders(): Observable<number> {
    return of(20); // Return pending orders count
  }

  getCompletedOrders(): Observable<number> {
    return of(30); // Return completed orders count
  }

}
