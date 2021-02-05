import { ProductConstants } from 'src/app/common/ProductConstants';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsecaseService {

  private baseUrl = `${ProductConstants.BASE_URL}/pc`;

  constructor(private httpClient: HttpClient) { }

  getSystemByUse(use: string): Observable<any> {
    const productUrl = `${this.baseUrl}/byType?type=${use} `;
    console.log(productUrl);

    return this.httpClient.get(productUrl);
  }
  getSystemByPrice(start: number, end: number): Observable<any> {
    const productUrl = `${this.baseUrl}`;
    console.log(productUrl);
    /* /pc/inrange?start=4500.0&end=6000.0 */
    return this.httpClient.get(`${this.baseUrl}inRange?start=${start}&end=${end}`);
  }
  getSystemByBrand(brand: String): Observable<any> {
    const productUrl = `${this.baseUrl}`;
    console.log(productUrl);
    /* /pc/inrange?start=4500.0&end=6000.0 */
    return this.httpClient.get(`${this.baseUrl}/byBrand?brand=${brand}`);
  }
  getAllPc(): Observable<any> {
    // const productUrl= '${this.baseUrl}'
    return this.httpClient.get(this.baseUrl)
  }
}

