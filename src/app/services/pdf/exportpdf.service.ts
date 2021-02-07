import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportpdfService {

  private baseUrl = `http://localhost:8080/pc/export/pdf/4`;

  constructor() { }

  
}
