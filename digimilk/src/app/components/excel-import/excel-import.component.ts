// src/app/components/excel-import/excel-import.component.ts
import { Component } from '@angular/core';
import { ExcelImportService } from '../../services/excel-import.service';

@Component({
  selector: 'app-excel-import',
  templateUrl: './excel-import.component.html',
  styleUrls: ['./excel-import.component.scss']
})
export class ExcelImportComponent {

  constructor(private excelImportService: ExcelImportService) { }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.excelImportService.readExcelFile(file).then(data => {
        console.log('Parsed Data:', data);
        // Handle the parsed data here (e.g., display it in the UI or process it further)
      }).catch(error => {
        console.error('Error reading file:', error);
      });
    }
  }
}
