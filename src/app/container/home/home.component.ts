import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Usecase } from '../../common/usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dataService: DataService,
    private router: Router) { }

  public selected(value) {
    // this.type = data;
    // this.dataService.setData(value)
    this.router.navigate(['/product-list'], { queryParams: { use: value } })
  }




}
