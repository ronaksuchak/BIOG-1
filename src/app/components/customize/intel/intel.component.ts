import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-intel',
  templateUrl: './intel.component.html',
  styleUrls: ['./intel.component.css']
})

export class IntelComponent {
  type: String;
  selectedc: string;
  selectxt = "select a component";
  selectedMap: Map<string, any> = new Map();
  totalPrice: number = 0;
  constructor(private breakpointObserver: BreakpointObserver,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getMap().forEach(p => console.log(p));
    this.selectedMap = this.dataService.getMap();
    this.selectedMap.forEach(p => this.totalPrice += p.price);
    console.log(this.totalPrice)
  }



  selected(value) {
    // this.type = data;
    this.dataService.setData(value)
    this.router.navigateByUrl('/addcomponent')
  }

  // name = this.dataService.getComponent();
}
