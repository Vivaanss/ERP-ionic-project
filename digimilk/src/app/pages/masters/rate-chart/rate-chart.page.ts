import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AddRateModalComponent } from '../../../components/add-rate-modal/add-rate-modal.component';

interface RateCharts {
  milkType: string;
  snf: number;
  fat: number;
  ratePerLitre: number;
  createdAt: Date;
  id: number;
}

@Component({
  selector: 'app-rate-chart',
  templateUrl: './rate-chart.page.html',
  styleUrls: ['./rate-chart.page.scss'],
})
export class RateChartPage implements OnInit {
  rateCharts: RateCharts[] = [
    {
      id: 1,
      milkType: 'Cow',
      snf: 8.5,
      fat: 4.5,
      ratePerLitre: 30,
      createdAt: new Date(),
    },
    {
      id: 2,
      milkType: 'Buffalo',
      snf: 9.0,
      fat: 6.0,
      ratePerLitre: 40,
      createdAt: new Date(),
    },
    // Add more entries as needed
  ];

  searchTerm = '';
  entriesToShow = 5;
  currentPage = 1;
  paginatedCharts: RateCharts[] = [];
  totalPages = 1;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.updatePagination();
  }

  get filteredCharts(): RateCharts[] {
    return this.rateCharts.filter(chart =>
      chart.milkType.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
  importExcel() {
    // Logic to handle Excel import
    console.log('Import Excel functionality not yet implemented');
  }
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredCharts.length / this.entriesToShow);
    this.paginateCharts();
  }

  paginateCharts() {
    const startIndex = (this.currentPage - 1) * this.entriesToShow;
    const endIndex = startIndex + this.entriesToShow;
    this.paginatedCharts = this.filteredCharts.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateCharts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateCharts();
    }
  }
  
  async openAddRateChartModal() {
    const modal = await this.modalController.create({
      component: AddRateModalComponent,
    });
    await modal.present();
  
    const { data } = await modal.onWillDismiss();
    if (data) {
      // Handle the form data here
      this.rateCharts.push({
        id: this.rateCharts.length + 1,
        ...data,
      });
      this.updatePagination();
    }
  }
  

  async editRateChart(rateChart: RateCharts) {
    const modal = await this.modalController.create({
      component: AddRateModalComponent,
      componentProps: { rateChart },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      const index = this.rateCharts.findIndex(
        (item) => item.id === rateChart.id
      );
      if (index > -1) {
        this.rateCharts[index] = { id: rateChart.id, ...data };
        this.updatePagination();
      }
    }
  }

  async deleteRateChart(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this entry?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.rateCharts = this.rateCharts.filter(
              (item) => item.id !== id
            );
            this.updatePagination();
          },
        },
      ],
    });
    await alert.present();
  }

}


